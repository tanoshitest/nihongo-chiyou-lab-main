const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

const word = 'おくります';
const wordIndex = lines.findIndex(l => l.includes(`word: '${word}'`));

if (wordIndex !== -1) {
    console.log(`Found ${word} at ${wordIndex}`);

    // Find examples start
    let examplesStartIndex = -1;
    for (let i = wordIndex; i < wordIndex + 20; i++) {
        if (lines[i].includes('examples: [')) {
            examplesStartIndex = i;
            break;
        }
    }

    if (examplesStartIndex !== -1) {
        console.log(`Examples start at ${examplesStartIndex}`);

        // Find examples end
        let examplesEndIndex = -1;
        let depth = 1;
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

        console.log(`Examples end at ${examplesEndIndex}`);

        // Get content
        const block = lines.slice(examplesStartIndex, examplesEndIndex + 1).join('\n');
        // Check if it contains '"kanji":' (Bad Injection)
        if (block.includes('"kanji":')) {
            console.log("Detected Bad Injection (KanjiDetail inside examples). Fixing...");

            // Extract exampleSentences
            // Regex to find "exampleSentences": [ ... ]
            // We use a simple regex capturing the array content. 
            // Warning: nested brackets might confuse simple regex.

            // But we know the format from previous dumps. 
            // "exampleSentences": [
            //    { ... }
            // ]

            const match = block.match(/"exampleSentences":\s*\[([\s\S]*?)\]/);
            // This match might end early if there are nested brackets? 
            // exampleSentences usually contains objects with furigana arrays [].
            // So nested brackets EXIST. regex `\[([\s\S]*?)\]` is lazy, stops at first `]`.
            // This is BAD.

            // Allow balanced brackets? JS Regex doesn't support recursive matching easily.
            // Better approach: Locate "exampleSentences": [
            // Then count brackets manually from there.

            const esStart = block.indexOf('"exampleSentences": [');
            if (esStart !== -1) {
                let startPos = esStart + '"exampleSentences": ['.length;
                let bracketDepth = 1;
                let endPos = -1;

                for (let k = startPos; k < block.length; k++) {
                    if (block[k] === '[') bracketDepth++;
                    if (block[k] === ']') bracketDepth--;
                    if (bracketDepth === 0) {
                        endPos = k;
                        break;
                    }
                }

                if (endPos !== -1) {
                    const examplesJsonContent = block.substring(startPos, endPos);
                    console.log("Extracted examples content.");

                    // Construct new examples block
                    const newBlock = `examples: [${examplesJsonContent}]`;
                    // Re-indent it roughly?
                    // Actually, replace the lines.
                    const newLines = `examples: [${examplesJsonContent}]`.split('\n'); // It's one line if we don't prettify?
                    // But examplesJsonContent likely has newlines from the file.

                    // We need to preserve the prefix of line examplesStartIndex `... examples: [` -> `... `
                    const prefix = lines[examplesStartIndex].split('examples: [')[0];
                    newLines[0] = prefix + newLines[0];

                    // Check if we need to append kanjiDetails
                    let hasKanjiDetails = false;
                    for (let k = examplesEndIndex + 1; k < examplesEndIndex + 5; k++) {
                        if (lines[k] && lines[k].includes('kanjiDetails: [')) {
                            hasKanjiDetails = true;
                            break;
                        }
                    }

                    let suffix = '';
                    if (!hasKanjiDetails) {
                        // We should re-add it.
                        // The block IS the kanjiDetail.
                        // We can just dump the block into kanjiDetails property.
                        // Extract the whole object from block.
                        // The block is `examples: [ { ... } ]`.
                        // Inner object is `{ ... }`.
                        const innerStart = block.indexOf('[');
                        const innerEnd = block.lastIndexOf(']');
                        const inner = block.substring(innerStart + 1, innerEnd);
                        suffix = `,\n      kanjiDetails: [${inner}]`;
                    }

                    // Final string
                    const replacementString = prefix + `examples: [${examplesJsonContent}]${suffix}`;
                    const replacementLines = replacementString.split('\n');

                    lines.splice(examplesStartIndex, examplesEndIndex - examplesStartIndex + 1, ...replacementLines);

                    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
                    console.log("Fixed Okurimasu.");

                } else {
                    console.log("Failed to parse exampleSentences end.");
                }
            } else {
                console.log("exampleSentences not found in block.");
            }
        } else {
            console.log("No bad injection detected in Okurimasu.");
        }
    }
} else {
    console.log("Okurimasu word definition not found.");
}
