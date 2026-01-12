
const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/minnaData.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');
const lines = fileContent.split('\n');

let inLesson1 = false;
let currentVocabKanji = null;
let currentWord = null;
let inKanjiDetails = false;
let currentDetailKanji = null;
let currentDetailLine = -1;

console.log('--- Start Audit Lesson 1 ---');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start of Lesson 1
    if (line.includes('export const lesson1Data')) {
        inLesson1 = true;
        console.log(`Found Lesson 1 at line ${i + 1}`);
    }

    // End of Lesson 1 (heuristic: next export or end of object)
    // But strictly, we can just look for the Start of Lesson 2 if it exists, or just stop when we leave the block.
    // For safety, assuming lesson1Data is a defined block. 
    // We'll rely on inLesson1 being true.

    if (inLesson1) {
        // Detect Vocab Item
        // format: word: '...', kanji: '...',
        if (line.trim().startsWith('word:')) {
            // Parse word and kanji
            const wordMatch = line.match(/word:\s*'([^']*)'/);
            const kanjiMatch = line.match(/kanji:\s*'([^']*)'/);

            currentWord = wordMatch ? wordMatch[1] : 'UNKNOWN';
            currentVocabKanji = kanjiMatch ? kanjiMatch[1] : '';

            // Reset details state
            inKanjiDetails = false;
        }

        // Detect Kanji Details Start
        if (line.includes('kanjiDetails: [')) {
            inKanjiDetails = true;
        }

        // Inside Kanji Details
        if (inKanjiDetails) {
            // Find kanji definition: kanji: 'X'
            // This is nested inside kanjiDetails array
            const detailMatch = line.match(/^\s*kanji:\s*'([^']+)'/);
            // Note: regex needs to be careful not to match the parent line "word: ..., kanji: ..."
            // The parent line usually has 'word:' at start.
            // Detail lines usually start with indentation then 'kanji:'.

            if (detailMatch && !line.trim().startsWith('word:')) {
                currentDetailKanji = detailMatch[1];
                currentDetailLine = i + 1;

                // CHECK: Does currentDetailKanji exist in currentVocabKanji?
                if (!currentVocabKanji.includes(currentDetailKanji)) {
                    console.log(`[DELETE] Line ${currentDetailLine}: Kanji '${currentDetailKanji}' not in word '${currentWord}' (kanji: '${currentVocabKanji}')`);
                }
            }

            if (line.includes(']')) {
                // Potentially end of kanjiDetails, but need to be careful of nested arrays?
                // usually kanjiDetails: [ ... ]
                // Assuming indentation or simple structure.
                // If line is ONLY closing bracket and comma?
                if (line.trim() === '],' || line.trim() === ']') {
                    inKanjiDetails = false;
                }
            }
        }
    }
}

console.log('--- End Audit ---');
