const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file is messy, so line-by-line processing with state machine is best.
const lines = content.split('\n');
const newLines = [];

// Words we suspect are broken (from previous logs)
const suspectWords = [
    'きります', 'おくります', 'かします', 'かります', 'おしえます', 'ならいます', 'て', 'かみ', 'はな', 'ちち', 'はは', 'にもつ', 'おかね', 'りょこう',
    'しずか [な]', 'ゆうめい [な]', 'しんせつ [な]', 'げんき [な]', 'ひま [な]', 'べんり [な]', 'おおきい', 'ちいさい', 'あたらしい', 'ふるい', 'わるい',
    'あつい', 'さむい', 'つめたい', 'むずかしい', 'やさしい', 'たかい', 'やすい', 'ひくい', 'おもしろい', 'いそがしい', 'たのしい', 'しろい', 'くろい', 'あかい', 'あおい',
    'さくら', 'やま', 'まち', 'たべもの', 'くるま', 'ところ', 'りょう', 'べんきょう', 'せいかつ', 'おしごと', 'ふじさん', 'びわこ', 'きんかくじ'
];

let inVocabArray = false;
let currentWord = null;
let buffer = [];
let captureMode = false;
let objectDepth = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect start/end of vocabulary arrays for L7/L8/L9? 
    // Actually, just looking for `word: '...'` is safer globally or within the lessons.
    // But `word:` only appears in vocabulary items.

    // Regex to find start of a word definition
    const wordMatch = line.match(/^\s*\{\s*word:\s*'([^']+)'/);

    if (wordMatch) {
        // If we were capturing a previous word, flush it first
        if (captureMode && currentWord) {
            processBufferedWord();
        }

        // Start capturing new word
        currentWord = wordMatch[1];
        if (suspectWords.includes(currentWord) || suspectWords.includes(currentWord.replace(' [な]', ''))) {
            // This is a target word. Start buffering.
            captureMode = true;
            buffer = [line];
            objectDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
        } else {
            captureMode = false;
            newLines.push(line);
        }
    } else if (captureMode) {
        // We are inside a suspect word's territory.
        // We need to capture EVERYTHING until the NEXT word starts or the array ends.
        // The "orphaned" examples are floating between the broken `},` and the next `{ word: ...`.

        // Check if array ends
        if (/^\s{2}\],?$/.test(line)) { // End of vocabulary array
            processBufferedWord();
            captureMode = false;
            currentWord = null;
            newLines.push(line);
        } else {
            buffer.push(line);
            // Update depth just in case, though for orphaned stuff depth calculation might be weird.
        }
    } else {
        newLines.push(line);
    }
}

// Flush last one if pending
if (captureMode && currentWord) {
    processBufferedWord();
}

function processBufferedWord() {
    console.log(`Processing ${currentWord}...`);
    // Analyze buffer.
    // Expected structure in buffer:
    // 0: { word: '...', ... examples: [
    // 1..N: KanjiDetail object (brokenly inside examples)
    // N+1: ] }, (Closing the broken item)
    // N+2..M: Orphaned VocabularyExample objects { jp: ... }
    // M+1: kanjiDetails: [ ... ] (My previous fix injected this correctly AFTER the broken item)
    // M+2..End: Closing of valid kanjiDetails and final `},` ?

    // Wait, if I injected `kanjiDetails` using `.replace('] },', '... kanjiDetails ...')`,
    // then the `kanjiDetails` is attached to the BROKEN closing.
    // So:
    // 0: { word: ..., examples: [
    // ... KanjiDetail ...
    // K: ], 
    // K+1: kanjiDetails: [ ... ]
    // K+L: },
    // K+L+1: { jp: ... } (Orphaned Examples!)

    // My goal:
    // 1. Extract the `kanjiDetails` block (the correct one I injected, or valid one).
    // 2. Extract the `examples` (the orphaned ones).
    // 3. Reconstruct.

    // Let's parse the text to find the components.
    const fullText = buffer.join('\n');

    // 1. Find the REAL key `kanjiDetails:`.
    const kDetIndex = fullText.indexOf('kanjiDetails: [');

    let properKanjiDetails = '';
    let orphansText = '';

    if (kDetIndex !== -1) {
        // We have the injected kanjiDetails.
        // Extract it. It ends with the closing `},`.
        // Actually, we can just split the text.
        // Everything AFTER the broken object's closing brace IS the orphans.
        // But wait, my fix injected `kanjiDetails` INTO the broken object structure (before the `},`).
        // So the broken object NOW looks like:
        // { word: ..., examples: [BAD_STUFF], kanjiDetails: [GOOD_STUFF] }, ORPHANED_EXAMPLES

        // So we need to:
        // A. Extract [GOOD_STUFF] from `kanjiDetails`.
        // B. Extract ORPHANED_EXAMPLES.
        // C. Rebuild.

        // Let's try to extract orphaned examples first.
        // They are objects `{ jp: ... }`.
        // They appear AFTER the first `},` (which matches the start of buffer).
        // Wait, `objectDepth` tracking is hard.

        // Let's find the `kanjiDetails` block.
        // It starts at `kDetIndex`.
        // It ends at `]`.

        // Let's regex for `kanjiDetails: \[([\s\S]*?)\]` ? No, nested brackets.

        // Let's just blindly assume the structure:
        // `examples: [` starts on line 0.
        // `kanjiDetails: [` starts somewhere.
        // The text BETWEEN them is the BAD contents of examples. We discard it.

        // The text AFTER `kanjiDetails: [...]`'s closing bracket `]`?
        // Is followed by `},`.
        // Then ORPHANS.

        // Let's find the orphans.
        // Orphans look like `{ "jp": ... }` or `{ jp: ... }`.

        const orphansMatches = fullText.match(/\{\s*"jp":[\s\S]*?\}/g) || [];
        // Note: property keys in file are "jp" (quoted) or jp (unquoted)? 
        // In the screenshot they are quoted `"jp"`.
        // In my `minnaData.ts` dump earlier, they were `"jp":`.

        // BUT, the KanjiDetail object ALSO contains "jp" examples in `exampleSentences`.
        // So naive regex matching will grab those too.

        // Strategy:
        // 1. Isolate the "Broken Example Block" (KanjiDetail inside examples).
        // 2. Isolate the "Good KanjiDetails Block".
        // 3. Isolate "Orphans".

        // The "Good KanjiDetails Block" is the one explicitly labeled `kanjiDetails:`.
        // We want to keep that string exactly as is.

        const split1 = fullText.split('kanjiDetails: [');
        const beforeKD = split1[0]; // { word: ..., examples: [ ...BAD... ],
        const afterKDStart = split1[1]; // ...GOOD... ] }, ORPHANS

        // Find end of generic string for KanjiDetails array.
        // It matches `]`.
        // This is risky. 
        // We know `kanjiDetails` ended with `]\n    },`. (My insertion format).
        // And then orphans follow.

        const split2 = afterKDStart.split(']\n    },');
        const kanjiDetailsContent = split2[0]; // Content of kanjiDetails array
        const orphansArea = split2.slice(1).join(']\n    },'); // The rest

        // Now parse orphans from `orphansArea`.
        // Orphans are separated by commas.
        // They are like `{ "jp": ... }, { "jp": ... }`.
        // We can just construct a valid `examples: [` block using these strings.
        // We need to be careful about commas.

        // Remove leading/trailing whitespace/commas from orphansArea
        let cleanOrphans = orphansArea.trim();
        if (cleanOrphans.startsWith(',')) cleanOrphans = cleanOrphans.substring(1).trim();
        if (cleanOrphans.endsWith(',')) cleanOrphans = cleanOrphans.slice(0, -1).trim();

        // Now Rebuild
        // header: `{ word: '${currentWord}', ... ` -> We need to copy other props like kanji, romaji, mean.
        const headerMatch = buffer[0].match(/(\{.*examples: \[)/);
        const header = headerMatch ? headerMatch[1] : `{ word: '${currentWord}', examples: [`;

        // We need to preserve `kanji`, `romaji`, `mean`...
        // `buffer[0]` has them. `buffer[0]` ends with `examples: [`.
        // Perfect.

        // Reconstructed Block
        const newBlock = `${header}
      ${cleanOrphans}
    ],
    kanjiDetails: [${kanjiDetailsContent}]
  },`;

        newLines.push(newBlock);

    } else {
        // If we didn't find `kanjiDetails`, maybe it wasn't broken in that way or I didn't verify this one?
        // Fallback: push buffer as is.
        console.log(`Warning: Could not structure ${currentWord}, pushing original.`);
        newLines.push(...buffer);
    }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Restoration complete.');
