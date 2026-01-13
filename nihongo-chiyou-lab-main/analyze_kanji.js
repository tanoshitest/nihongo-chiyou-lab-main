import fs from 'fs';
import path from 'path';

// Paths - adjust to absolute or relative from CWD
const kanjiDataPath = path.join('src', 'data', 'kanjiData.ts');
const minnaDataPath = path.join('src', 'data', 'minnaData.ts');

// Helper to extract Kanji characters from a string
function extractKanji(text) {
    // Regex for Kanji range (basic CJK Unified Ideographs)
    const kanjiRegex = /[\u4E00-\u9FAF]/g;
    return text.match(kanjiRegex) || [];
}

try {
    // 1. Parse kanjiData.ts
    const kanjiContent = fs.readFileSync(kanjiDataPath, 'utf8');

    const existingKanjiMap = {}; // char -> { id, lesson }
    const kanjiByLesson = {}; // lesson -> [char]

    const entryRegex = /id:\s*(\d+),[\s\S]*?kanji:\s*"(.+?)",([\s\S]*?lesson:\s*(\d+),)?/g;

    let match;
    while ((match = entryRegex.exec(kanjiContent)) !== null) {
        const id = parseInt(match[1]);
        const char = match[2];
        const lesson = match[4] ? parseInt(match[4]) : null;

        existingKanjiMap[char] = { id, lesson };

        if (lesson) {
            if (!kanjiByLesson[lesson]) kanjiByLesson[lesson] = [];
            kanjiByLesson[lesson].push(char);
        }
    }

    // 2. Parse minnaData.ts for Lesson 26 vocab
    const minnaContent = fs.readFileSync(minnaDataPath, 'utf8');

    // Extract lesson26Data block
    const l26Match = minnaContent.match(/export const lesson26Data: LessonDetail = \{([\s\S]*?)\};/);
    if (!l26Match) {
        console.log("Could not find lesson26Data");
        process.exit(1);
    }

    const l26Block = l26Match[1];
    const vocabMatch = l26Block.match(/vocabulary: \[\s*([\s\S]*?)\]/);
    const vocabBlock = vocabMatch ? vocabMatch[1] : "";

    const vocabKanjiRegex = /kanji:\s*'(.*?)'/g;
    let vMatch;
    const l26VocabKanjiSet = new Set();

    while ((vMatch = vocabKanjiRegex.exec(vocabBlock)) !== null) {
        const kText = vMatch[1];
        const chars = extractKanji(kText);
        chars.forEach(c => l26VocabKanjiSet.add(c));
    }

    // 3. Compare
    const toAdd = [];
    const toDelete = [];

    const currentL26 = kanjiByLesson[26] || [];
    currentL26.forEach(char => {
        // If a Kanji is in lesson 26 but NOT in the new vocab list, mark for deletion (or unassignment)
        // Note: Comparing characters including nuances. 
        if (!l26VocabKanjiSet.has(char)) {
            toDelete.push({ char, id: existingKanjiMap[char].id });
        }
    });

    l26VocabKanjiSet.forEach(char => {
        const existing = existingKanjiMap[char];
        if (!existing) {
            toAdd.push(char);
        } else if (!existing.lesson) {
            toAdd.push({ char, id: existing.id, type: 'update' });
        } else if (existing.lesson === 26) {
            // Keep
        } else {
            // Belong to another lesson, ignore
        }
    });

    console.log(JSON.stringify({
        vocabKanjiCount: l26VocabKanjiSet.size,
        vocabKanji: Array.from(l26VocabKanjiSet),
        currentL26Count: currentL26.length,
        currentL26: currentL26,
        toAdd: toAdd,
        toDelete: toDelete
    }, null, 2));

} catch (e) {
    console.error(e);
}
