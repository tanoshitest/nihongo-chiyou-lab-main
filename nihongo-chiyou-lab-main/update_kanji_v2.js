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

    // Extract L46 Vocab Kanji
    const l46Match = minnaContent.match(/export const lesson46Data: LessonDetail = {([\s\S]*?)};/);
    if (!l46Match) throw new Error("Lesson 46 data not found");

    const l46Text = l46Match[1];
    // Anchor to 'grammar:' to include all vocabulary even if it has []
    const vocabMatch = l46Text.match(/vocabulary: \[\s*([\s\S]*?)\s*\],\s*grammar:/);

    let vocabBlock = "";
    if (vocabMatch) {
        vocabBlock = vocabMatch[1];
    } else {
        // Fallback: try capturing until end of block or just a large chunk if grammar missing (unlikely)
        console.log("Warning: Could not anchor to grammar, using simple match.");
        vocabBlock = l26Text.match(/vocabulary: \[\s*([\s\S]*?)\]/)[1];
    }

    const vocabKanjiSet = new Set();

    // Fix Regex: Use single quotes specifically or allow both
    // The file has kanji: '...'
    const vocabKanjiRegex = /kanji:\s*['"](.*?)['"]/g;
    let vMatch;
    let count = 0;
    while ((vMatch = vocabKanjiRegex.exec(vocabBlock)) !== null) {
        const kText = vMatch[1];
        const chars = extractKanji(kText);
        chars.forEach(c => vocabKanjiSet.add(c));
        count++;
    }

    console.log(`Found ${count} vocab entries with kanji, ${vocabKanjiSet.size} unique kanji characters.`);

    // Find max ID
    let maxId = 0;
    const idRegex = /id:\s*(\d+)/g;
    let idM;
    while ((idM = idRegex.exec(kanjiContent)) !== null) {
        const id = parseInt(idM[1]);
        if (id > maxId) maxId = id;
    }

    let modifiedContent = kanjiContent;
    let addedCount = 0;
    let updatedCount = 0;

    for (const char of vocabKanjiSet) {
        const kRegex = new RegExp(`kanji:\\s*"${char}"`);
        const kMatch = kRegex.exec(modifiedContent);

        if (kMatch) {
            const Index = kMatch.index;
            let searchLimit = modifiedContent.indexOf("id:", Index + 1);
            if (searchLimit === -1) searchLimit = modifiedContent.length;


            const entrySnippet = modifiedContent.substring(Index, searchLimit);
            const lMatch = entrySnippet.match(/lesson:\s*(\d+)/);

            if (!lMatch) {
                const reMatch = new RegExp(`kanji:\\s*"${char}"`).exec(modifiedContent);
                if (reMatch) {
                    const toReplace = reMatch[0];
                    const isCommaAfter = modifiedContent[reMatch.index + toReplace.length] === ',';

                    modifiedContent = modifiedContent.slice(0, reMatch.index) +
                        `${reMatch[0]},\n    lesson: 46` +
                        (isCommaAfter ? "" : ",") + // preserve comma if existed
                        modifiedContent.slice(reMatch.index + reMatch[0].length);
                    updatedCount++;
                }
            }
            // else: respect existing lesson
        } else {
            maxId++;
            addedCount++;
            const newEntry = `
  {
    id: ${maxId},
    kanji: "${char}",
    lesson: 46,
    onyomi: "",
    kunyomi: "",
    meaning: "",
    sinoVietnamese: "",
    examples: []
  }`;
            const lastBracket = modifiedContent.lastIndexOf("];");
            modifiedContent = modifiedContent.slice(0, lastBracket) + ",\n" + newEntry + "\n" + modifiedContent.slice(lastBracket);
        }
    }

    console.log(`Updated: ${updatedCount}, Added: ${addedCount}`);
    fs.writeFileSync(kanjiDataPath, modifiedContent, 'utf8');

} catch (e) {
    console.error(e);
}
