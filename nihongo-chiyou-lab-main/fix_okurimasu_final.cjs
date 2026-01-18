const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

const word = 'おくります';
const wordIndex = lines.findIndex(l => l.includes(`word: '${word}'`));

if (wordIndex !== -1) {
    console.log(`Found ${word} at ${wordIndex}`);

    let examplesStartIndex = -1;
    for (let i = wordIndex; i < wordIndex + 20; i++) {
        if (lines[i].includes('examples: [')) {
            examplesStartIndex = i;
            break;
        }
    }

    if (examplesStartIndex !== -1) {
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

        const block = lines.slice(examplesStartIndex, examplesEndIndex + 1).join('\n');

        let newContent = '[]';
        // Try to find exampleSentences
        // Look for string "exampleSentences"
        const esIndex = block.indexOf('exampleSentences"');
        const esIndexAlt = block.indexOf('exampleSentences');

        let startSearch = -1;
        if (esIndex !== -1) startSearch = esIndex;
        else if (esIndexAlt !== -1) startSearch = esIndexAlt;

        if (startSearch !== -1) {
            // Find opening bracket after key
            const openBracket = block.indexOf('[', startSearch);
            if (openBracket !== -1) {
                let bracketDepth = 1;
                let closeBracket = -1;
                for (let k = openBracket + 1; k < block.length; k++) {
                    if (block[k] === '[') bracketDepth++;
                    if (block[k] === ']') bracketDepth--;
                    if (bracketDepth === 0) {
                        closeBracket = k;
                        break;
                    }
                }

                if (closeBracket !== -1) {
                    newContent = block.substring(openBracket, closeBracket + 1);
                    console.log("Successfully extracted exampleSentences!");
                }
            }
        }

        if (newContent === '[]') console.log("Failed to extract examples, defaulting to empty array to fix syntax.");

        // Construct replacement
        const prefix = lines[examplesStartIndex].split('examples: [')[0];

        // Check for kanjiDetails appending requirement
        let hasKanjiDetails = false;
        for (let k = examplesEndIndex + 1; k < examplesEndIndex + 10; k++) {
            if (lines[k] && lines[k].includes('kanjiDetails: [')) {
                hasKanjiDetails = true;
                break;
            }
        }

        let suffix = '';
        if (!hasKanjiDetails) {
            // Extract the whole KanjiDetail object to re-inject properly
            const innerStart = block.indexOf('[');
            const innerEnd = block.lastIndexOf(']');
            if (innerStart !== -1 && innerEnd !== -1) {
                const inner = block.substring(innerStart + 1, innerEnd);
                suffix = `,\n      kanjiDetails: [${inner}]`;
            }
        }

        const replacementString = prefix + `examples: ${newContent}${suffix}`;
        const replacementLines = replacementString.split('\n');

        lines.splice(examplesStartIndex, examplesEndIndex - examplesStartIndex + 1, ...replacementLines);

        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        console.log("Fixed Okurimasu syntax.");
    }
} else {
    console.log("Word not found.");
}
