const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const suspectWords = [
    'きります', 'おくります', 'かします', 'かります', 'おしえます', 'ならいます', 'て', 'かみ', 'はな', 'ちち', 'はは', 'にもつ', 'おかね', 'りょこう',
    'しずか [な]', 'ゆうめい [な]', 'しんせつ [な]', 'げんき [な]', 'ひま [な]', 'べんり [な]', 'おおきい', 'ちいさい', 'あたらしい', 'ふるい', 'わるい',
    'あつい', 'さむい', 'つめたい', 'むずかしい', 'やさしい', 'たかい', 'やすい', 'ひくい', 'おもしろい', 'いそがしい', 'たのしい', 'しろい', 'くろい', 'あかい', 'あおい',
    'さくら', 'やま', 'まち', 'たべもの', 'くるま', 'ところ', 'りょう', 'べんきょう', 'せいかつ', 'おしごと', 'ふじさん', 'びわこ', 'きんかくじ'
];

let lines = content.split('\n');
let fixedCount = 0;

for (const word of suspectWords) {
    // Find word definition line
    const wordIndex = lines.findIndex(l => l.includes(`word: '${word}'`) || l.includes(`word: '${word.replace(' [な]', '')}'`));

    if (wordIndex === -1) {
        console.log(`Checking ${word}... Not found.`);
        continue;
    }

    // Scan forward to find examples: [
    let examplesStartIndex = -1;
    for (let i = wordIndex; i < wordIndex + 20; i++) {
        if (i >= lines.length) break;
        if (lines[i].includes('examples: [')) {
            examplesStartIndex = i;
            break;
        }
    }

    if (examplesStartIndex === -1) {
        console.log(`Checking ${word}... No examples array found.`);
        continue;
    }

    // Check content of examples
    // If next line has "kanji": (quoted) or kanji: (unquoted) and "onyomi" / "strokes" etc.
    let looksLikKanjiDetail = false;
    let scanLimit = 5;
    for (let i = examplesStartIndex + 1; i < examplesStartIndex + scanLimit; i++) {
        if (i >= lines.length) break;
        if (lines[i].includes('"kanji":') || lines[i].includes('kanji:')) {
            if (lines[i].includes('"onyomi":') || lines[i + 1]?.includes('"onyomi":')) {
                looksLikKanjiDetail = true;
                break;
            }
        }
    }

    if (looksLikKanjiDetail) {
        console.log(`Fixing ${word}... Found KanjiDetail inside examples.`);

        // We need to parse this entire block to extract exampleSentences
        // Since parsing TS subset is hard, we rely on the specific format we know was injected.
        // Format was JSON.stringify(...).

        // Find the end of this examples array.
        let examplesEndIndex = -1;
        let depth = 1; // We are inside [
        for (let i = examplesStartIndex + 1; i < lines.length; i++) {
            const line = lines[i];
            const opens = (line.match(/\[/g) || []).length;
            const closes = (line.match(/\]/g) || []).length;
            depth += opens - closes;
            if (depth === 0) {
                examplesEndIndex = i;
                break;
            }
        }

        if (examplesEndIndex === -1) {
            console.log(`Error: Could not find end of examples for ${word}`);
            continue;
        }

        // Extract the block text
        const blockLines = lines.slice(examplesStartIndex, examplesEndIndex + 1);
        const blockText = blockLines.join('\n');
        // blockText starts with `... examples: [` (maybe preceded by other keys).
        // innerText is the array content.

        const arrayContentMatch = blockText.match(/examples:\s*\[([\s\S]*)\]/);
        if (!arrayContentMatch) {
            console.log(`Error parsing examples block for ${word}`);
            continue;
        }

        const arrayBody = arrayContentMatch[1];

        // arrayBody should be valid JSON of KanjiDetail objects?
        // Or TS object?
        // It was injected as JSON.
        // So `JSON.parse(`[${arrayBody}]`)` should works.

        let kanjiDetailsArray = [];
        try {
            // Cleanup trailing commas which might break JSON.parse
            const cleanBody = arrayBody.trim().replace(/,\s*$/, '');
            kanjiDetailsArray = JSON.parse(`[${cleanBody}]`);
        } catch (e) {
            console.log(`JSON parse failed for ${word}, trying permissive extract.`);
            // Fallback: use regex to extract `exampleSentences` block
        }

        let newExamples = [];

        if (kanjiDetailsArray.length > 0) {
            // Extract exampleSentences from all KD objects
            kanjiDetailsArray.forEach(kd => {
                if (kd.exampleSentences) {
                    newExamples.push(...kd.exampleSentences);
                }
            });
        }

        // If empty (parse fail), try regex
        if (newExamples.length === 0) {
            const esMatches = arrayBody.match(/"exampleSentences":\s*\[([\s\S]*?)\]/g);
            if (esMatches) {
                esMatches.forEach(m => {
                    const inner = m.match(/\[([\s\S]*)\]/)[1];
                    // This inner string defines the examples.
                    // It is JSON.
                    try {
                        const exs = JSON.parse(`[${inner}]`);
                        newExamples.push(...exs);
                    } catch (e) { console.log('Regex inner parse failed'); }
                });
            }
        }

        if (newExamples.length === 0) {
            console.log(`CRITICAL: Could not recover examples for ${word}. Skipping replacement to avoid data loss.`);
            continue; // Don't break it further
        }

        // Now Replace
        // We replace the `examples` array content with `newExamples`.
        const newExamplesJson = JSON.stringify(newExamples, null, 10).replace(/\n/g, '\n          ');

        // We replace lines `examplesStartIndex` to `examplesEndIndex`.
        // Be careful: `examplesStartIndex` might contain `word: '...', examples: [`.
        // We must preserve the prefix.
        const prefix = lines[examplesStartIndex].split('examples: [')[0];

        // Also check if `kanjiDetails` property exists for this word.
        // Check lines AFTER `examplesEndIndex`.
        let hasKanjiDetails = false;
        for (let k = examplesEndIndex + 1; k < examplesEndIndex + 5; k++) {
            if (lines[k] && lines[k].includes('kanjiDetails: [')) {
                hasKanjiDetails = true;
                break;
            }
        }

        // If we don't have separate kanjiDetails, we should ADD it?
        // The `kanjiDetailsArray` we extracted IS the kanjiDetails.
        // But `fix_lesson_syntax` likely already added it.
        // If not, we should adding it.
        let suffix = '';
        if (!hasKanjiDetails && kanjiDetailsArray.length > 0) {
            const kdJson = JSON.stringify(kanjiDetailsArray, null, 10).replace(/\n/g, '\n      ');
            suffix = `,\n      kanjiDetails: ${kdJson}`;
        }

        // Construct new lines
        // We are replacing a range of lines in `lines` array.
        // This messes up indices for subsequent words if we splice.
        // But since we iterate `word`, we find index each time. OK.

        const newBlock = `${prefix}examples: ${newExamplesJson}${suffix}`;
        // Since `newBlock` is multiline, split it.
        const newBlockLines = newBlock.split('\n');

        // Replace
        lines.splice(examplesStartIndex, examplesEndIndex - examplesStartIndex + 1, ...newBlockLines);

        // Because we modified `lines`, we must restart scanning or adjust indices?
        // `lines` changed length. The `word` loop finds index dynamically so it's fine.
        // BUT `suspectWords` loop continues.

        fixedCount++;
        console.log(`Fixed ${word}.`);
    } else {
        console.log(`Checking ${word}... OK.`);
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Total fixed: ${fixedCount}`);
