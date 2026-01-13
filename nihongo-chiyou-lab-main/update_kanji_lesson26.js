import fs from 'fs';
import path from 'path';

// Paths
const kanjiDataPath = path.join('src', 'data', 'kanjiData.ts');
const minnaDataPath = path.join('src', 'data', 'minnaData.ts');

// Helper to extract Kanji
function extractKanji(text) {
    const kanjiRegex = /[\u4E00-\u9FAF]/g;
    return text.match(kanjiRegex) || [];
}

try {
    // 1. Read kanjiData.ts
    let kanjiContent = fs.readFileSync(kanjiDataPath, 'utf8');

    // Parse existing kanji to find max ID
    let maxId = 0;
    const idRegex = /id:\s*(\d+)/g;
    let idMatch;
    while ((idMatch = idRegex.exec(kanjiContent)) !== null) {
        const id = parseInt(idMatch[1]);
        if (id > maxId) maxId = id;
    }

    // Parse existing entries map
    // Map: char -> { start, end, id, lesson, content }
    // We need to be able to replace the whole object or modify it.
    // Since we are doing file manipulation on a large TS file without an AST parser, 
    // we have to be careful.
    // Actually, we can append new ones at the end (before the closing bracket).
    // For updates/deletes, it's harder.

    // Strategy: 
    // 1. Identify all Kanji objects in the array.
    // 2. Re-construct the array content.

    // Regex to match EACH object in the export const kanjiData = [ ... ];
    // This is tricky because of nested braces.
    // Simplification: Assume standard formatting as seen in view_file.
    // Objects start with { and end with }, separated by ,

    // Let's rely on the structure:
    // "  {\n    id: ... \n  },"

    // Actually, let's use the 'analyze' logic to build the map, and then we will regenerate the file content if possible, or use replace logic.
    // Regenerating the whole file is safest for consistency if we can parse it all.
    // But the file is large (15k lines).

    // Alternate Strategy:
    // 1. Read Minna Data to get L26 Kanji Set.
    // 2. Read Kanji Data.
    // 3. Prepare list of NEW kanji to append.
    // 4. Prepare list of Kanji to UPDATE (assign to L26).
    // 5. Prepare list of Kanji to REMOVE from L26.

    // Step 1: Minna Data
    const minnaContent = fs.readFileSync(minnaDataPath, 'utf8');
    const l26Match = minnaContent.match(/export const lesson26Data: LessonDetail = \{([\s\S]*?)\};/);
    if (!l26Match) throw new Error("Lesson 26 data not found");

    const vocabBlock = l26Match[1].match(/vocabulary: \[\s*([\s\S]*?)\]/)[1];
    const vocabKanjiSet = new Set();
    const vocabKanjiRegex = /kanji:\s*'(.*?)'/g;
    let vMatch;
    while ((vMatch = vocabKanjiRegex.exec(vocabBlock)) !== null) {
        extractKanji(vMatch[1]).forEach(c => vocabKanjiSet.add(c));
    }

    // Step 2: Kanji Data Analysis
    const kanjiEntries = []; // { fullText, id, kanji, lesson }

    // We need to split the content into entries.
    // We can find the start of the array: "export const kanjiData: KanjiCard[] = ["
    // and the end "];"
    const startMarker = "export const kanjiData: KanjiCard[] = [";
    const startIndex = kanjiContent.indexOf(startMarker);
    const arrayContentStart = startIndex + startMarker.length;
    const endIndex = kanjiContent.lastIndexOf("];");

    const header = kanjiContent.substring(0, arrayContentStart);
    const footer = kanjiContent.substring(endIndex);
    const body = kanjiContent.substring(arrayContentStart, endIndex);

    // Split body by "  },"
    // This assumes the formatting is consistently "  }," at the end of objects.
    const rawEntries = body.split(/^\s*\},/m).map(s => s.trim()).filter(s => s.length > 0);

    // Process raw entries
    const processedEntries = rawEntries.map(entryStr => {
        // Re-add the closing brace if missing (split consumed it)
        let fullStr = entryStr;
        if (!fullStr.endsWith('}')) fullStr += '\n  }';

        const idM = fullStr.match(/id:\s*(\d+)/);
        const kanjiM = fullStr.match(/kanji:\s*"(.)"/); // Assumes double quotes based on file view
        const lessonM = fullStr.match(/lesson:\s*(\d+)/);

        return {
            text: fullStr,
            id: idM ? parseInt(idM[1]) : null,
            kanji: kanjiM ? kanjiM[1] : null,
            lesson: lessonM ? parseInt(lessonM[1]) : null
        };
    });

    // Re-index for search
    const kanjiMap = new Map(); // char -> entry
    processedEntries.forEach(e => {
        if (e.kanji) kanjiMap.set(e.kanji, e);
        if (e.id > maxId) maxId = e.id;
    });

    // Logic
    const newEntries = [];

    // 1. Add / Update
    vocabKanjiSet.forEach(char => {
        if (kanjiMap.has(char)) {
            const entry = kanjiMap.get(char);
            if (!entry.lesson) {
                // Update to lesson 26
                // simple replace logic in text
                // We need to insert "lesson: 26," after "kanji: ...,"
                entry.text = entry.text.replace(/(kanji:\s*".*?",)/, `$1\n    lesson: 26,`);
                entry.lesson = 26; // Update in memory too
            }
            // if already has lesson, do nothing (keep original)
        } else {
            // New Entry
            maxId++;
            const newEntryText = `
  {
    id: ${maxId},
    kanji: "${char}",
    lesson: 26,
    onyomi: "",
    kunyomi: "",
    meaning: "",
    sinoVietnamese: "",
    examples: []
  }`;
            newEntries.push(newEntryText.trim());
        }
    });

    // 2. Remove (Unassign)
    processedEntries.forEach(entry => {
        if (entry.lesson === 26) {
            if (!elemInvocab(entry.kanji, vocabKanjiSet)) {
                // Remove lesson: 26 line
                entry.text = entry.text.replace(/lesson:\s*26,?\s*/, "");
                entry.lesson = null;
            }
        }
    });

    function elemInvocab(char, set) {
        return set.has(char);
    }

    // Reconstruct file
    // Filter out any empty entries if any
    const validEntries = processedEntries.filter(e => e.id !== null);

    // Combine
    let newBody = "\n" + validEntries.map(e => "  " + e.text).join(",\n");

    if (newEntries.length > 0) {
        newBody += ",\n" + newEntries.map(e => "  " + e).join(",\n");
    }

    newBody += "\n";

    const finalContent = header + newBody + footer;

    fs.writeFileSync(kanjiDataPath, finalContent, 'utf8');
    console.log(`Updated kanjiData.ts. Added ${newEntries.length} new Kanji.`);

} catch (e) {
    console.error(e);
}
