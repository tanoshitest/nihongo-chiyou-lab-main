import fs from 'fs';
import path from 'path';

const kanjiDataPath = path.join('src', 'data', 'kanjiData.ts');
const minnaDataPath = path.join('src', 'data', 'minnaData.ts');

function extractKanji(text) {
    return text.match(/[\u4E00-\u9FAF]/g) || [];
}

try {
    let kanjiContent = fs.readFileSync(kanjiDataPath, 'utf8');
    const minnaContent = fs.readFileSync(minnaDataPath, 'utf8');

    // Extract L26 Vocab Kanji
    const l26Match = minnaContent.match(/export const lesson26Data: LessonDetail = \{([\s\S]*?)\};/);
    if (!l26Match) throw new Error("Lesson 26 data not found");
    const vocabBlock = l26Match[1].match(/vocabulary: \[\s*([\s\S]*?)\]/)[1];
    const vocabKanjiSet = new Set();
    let vMatch;
    const vocabKanjiRegex = /kanji:\s*'(.*?)'/g;
    while ((vMatch = vocabKanjiRegex.exec(vocabBlock)) !== null) {
        extractKanji(vMatch[1]).forEach(c => vocabKanjiSet.add(c));
    }

    // Find max ID
    let maxId = 0;
    const idRegex = /id:\s*(\d+)/g;
    let idM;
    while ((idM = idRegex.exec(kanjiContent)) !== null) {
        const id = parseInt(idM[1]);
        if (id > maxId) maxId = id;
    }

    // Create a Map of ranges for existing Kanji
    // We need to know where each Kanji object starts and ends to safely replace "lesson: 26".
    // Simplified approach:
    // 1. Unassign: Search for `kanji: "X"` ... `lesson: 26`. If X not in vocab, replace `lesson: 26` with `// lesson: 26 (removed)`.
    // 2. Assign: Search for `kanji: "Y"`. If Y in vocab loop check:
    //      If `lesson: ...` exists, leave it? (Only if L26. If L1-25, keep.)
    //      Wait, plan said: If exists but no lesson -> assign 26.
    //      If exists and lesson=26 -> keep.
    //      If exists and lesson!=26 -> keep.
    // 3. Create: If Y in vocab but not in file -> Append.

    let modifiedContent = kanjiContent;

    // Helper to find location of a kanji definition
    // We look for `kanji: "X"`
    // Then we look around it.

    // Strategy for Deletion (Unassign L26)
    // Find all chars currently assigned to 26.
    // Regex: `kanji:\s*"((?:.|\n)*?)",\s*lesson:\s*26` - this assumes order.
    // Order allows `kanji` then `lesson`.

    // Actually, let's iterate over ALL vocabKanjiSet to Add/Update.
    // And iterate over "current L26" to Remove.

    // Get all current L26 from content
    // We can use a regex that captures the char for any `lesson: 26`.
    // Note: formatting is `kanji: "X",\n    lesson: 26,` usually.

    const l26Regex = /kanji:\s*"(.+?)",\s*lesson:\s*26,/g;
    // This assumes `lesson: 26` follows `kanji: "X"` immediately?
    // view_file shows:
    // kanji: "一",
    // lesson: 1,

    // Let's use a broader regex?
    // Or just find all `lesson: 26` positions, and look backwards for `kanji:`.

    // Safe Replace for Deletions:
    // We will build a list of replacements to perform at the end (to avoid messing up indices).
    // Actually, we can split the file by objects? No, that failed last time.

    // Let's just do String Replacements carefully.

    // Step A: Unassign invalid L26
    // Regex: `(kanji:\s*".*?",\s*)lesson:\s*26,`
    // We replace it with `$1` (removing lesson line) IF the kanji is not in vocab.
    // Since we can't easily check the kanji inside the regex replacement callback against the set without parsing,
    // we can iterate matches.

    let match;
    // Regex to find blocks like:  kanji: "X", [whitespace] lesson: 26,
    const combinedRegex = /(kanji:\s*"(.)")\s*,\s*(lesson:\s*26,)/g;

    const toRemoveRanges = [];

    while ((match = combinedRegex.exec(kanjiContent)) !== null) {
        const char = match[2];
        const lessonPart = match[3]; // "lesson: 26,"
        const fullMatch = match[0];
        const matchIndex = match.index;

        if (!vocabKanjiSet.has(char)) {
            // Verify it's not in vocab -> Remove
            // We want to remove `lessonPart` which is at the end of match.
            // Start index of lessonPart = matchIndex + fullMatch.lastIndexOf(lessonPart);
            const lessonStart = matchIndex + fullMatch.indexOf(lessonPart);
            const lessonEnd = lessonStart + lessonPart.length;
            toRemoveRanges.push({ start: lessonStart, end: lessonEnd });
        }
    }

    // Apply removals in reverse order to keep indices valid
    toRemoveRanges.reverse().forEach(range => {
        modifiedContent = modifiedContent.slice(0, range.start) + modifiedContent.slice(range.end);
    });

    // Step B: Add / Assign
    // We need to know which Kanji exist in the file.
    const existingChars = new Set();
    const existingRegex = /kanji:\s*"(.)"/g;
    while ((match = existingRegex.exec(kanjiContent)) !== null) {
        existingChars.add(match[1]);
    }

    // Append list
    const appendedEntries = [];

    // Loop vocab
    for (const char of vocabKanjiSet) {
        if (existingChars.has(char)) {
            // Check if it has a lesson
            // We need to find this specific occurrence in modifiedContent
            // Regex: `kanji:\s*"${char}"`
            const kRegex = new RegExp(`kanji:\\s*"${char}"`);
            const kMatch = kRegex.exec(modifiedContent);
            if (kMatch) {
                const kIdx = kMatch.index;
                // Look ahead for `lesson:`
                const lookahead = modifiedContent.substring(kIdx, kIdx + 200);
                const lMatch = lookahead.match(/lesson:\s*(\d+)/);

                if (!lMatch) {
                    // No lesson assigned -> Assign 26
                    // Insert `\n    lesson: 26,` after the kanji line
                    // `kanji: "X"` is kMatch[0]
                    // We want to insert after `kanji: "X",`? 
                    // In file it's `kanji: "X",`.

                    // Let's ensure we match the comma too?
                    const insertionPoint = kIdx + kMatch[0].length + 1; // +1 for comma?
                    // safer: replace `kanji: "X"` with `kanji: "X",\n    lesson: 26`
                    // But we need to be careful about existing comma.

                    // Regex replacement globally for this char?
                    // Assuming uniqueness of kanji definitions.
                    modifiedContent = modifiedContent.replace(
                        new RegExp(`(kanji:\\s*"${char}",?)`),
                        `$1\n    lesson: 26,`
                    );
                }
                // Else: has lesson, respect it.
            }
        } else {
            // Not existing -> Create
            maxId++;
            appendedEntries.push(`
  {
    id: ${maxId},
    kanji: "${char}",
    lesson: 26,
    onyomi: "",
    kunyomi: "",
    meaning: "",
    sinoVietnamese: "",
    examples: []
  }`);
        }
    }

    // Append new entries BEFORE the last `];`
    const lastBracket = modifiedContent.lastIndexOf("];");
    if (appendedEntries.length > 0) {
        const insertion = ",\n" + appendedEntries.join(",\n");
        modifiedContent = modifiedContent.slice(0, lastBracket) + insertion + "\n" + modifiedContent.slice(lastBracket);
    }

    fs.writeFileSync(kanjiDataPath, modifiedContent, 'utf8');
    console.log(`Updated safely. Added ${appendedEntries.length} entries.`);

} catch (e) {
    console.error(e);
}
