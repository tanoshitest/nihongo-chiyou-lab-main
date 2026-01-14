const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/minnaData.ts');

try {
    const content = fs.readFileSync(dataPath, 'utf8');

    // Find start of lesson4Data
    const lesson4Regex = /export const lesson4Data/;
    const match = content.match(lesson4Regex);

    if (!match) {
        console.log('lesson4Data NOT found.');
        process.exit(1);
    }

    const startIndex = match.index;
    const vocabStartRegex = /vocabulary:\s*\[/g;
    vocabStartRegex.lastIndex = startIndex;
    const vocabMatch = vocabStartRegex.exec(content);

    if (!vocabMatch) {
        console.log('Vocabulary array not found.');
        process.exit(1);
    }

    const vocabStartIndex = vocabMatch.index;
    const followingKeyRegex = /(grammar|kaiwa|quiz):\s*\[/g;
    followingKeyRegex.lastIndex = vocabStartIndex;
    const followingMatch = followingKeyRegex.exec(content);

    const vocabEndIndex = followingMatch ? followingMatch.index : content.length;

    const vocabChunk = content.substring(vocabStartIndex, vocabEndIndex);

    const linesBefore = content.substring(0, vocabStartIndex).split('\n').length;
    const lines = vocabChunk.split('\n');
    let currentLineNum = linesBefore; // This is the line number of vocabStartIndex
    // Note: split('\n') length is count of lines.

    const vocabList = [];
    let currentItem = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const absLine = currentLineNum + i; // 1-based? split gives 0-based index array. Line numbers usually 1-indexed.
        // content.substring(0, ...).split('\n').length gives number of lines. e.g. "a\n" -> 2 lines (line 1 "a", line 2 "").
        // So currentLineNum is effectively the 1-based line number of vocabStartIndex (roughly).

        // Check for word definition
        // Matches: word: '...', OR word: "...", OR "word": "..."
        // Allow spaces around colon
        const wordMatch = line.match(/['"]?word['"]?\s*:\s*['"](.+?)['"]/);
        if (wordMatch) {
            if (currentItem.word) {
                vocabList.push(currentItem);
            }
            currentItem = {
                word: wordMatch[1],
                line: absLine
            };
        }

        if (currentItem.word) {
            const romajiMatch = line.match(/['"]?romaji['"]?\s*:\s*['"](.+?)['"]/);
            if (romajiMatch) currentItem.romaji = romajiMatch[1];

            const meanMatch = line.match(/['"]?mean['"]?\s*:\s*['"](.+?)['"]/);
            if (meanMatch) currentItem.mean = meanMatch[1];

            const imageMatch = line.match(/['"]?image['"]?\s*:\s*['"](.+?)['"]/);
            if (imageMatch) currentItem.existingImage = imageMatch[1];
        }
    }
    if (currentItem.word) vocabList.push(currentItem);

    fs.writeFileSync('lesson4_vocab.json', JSON.stringify(vocabList, null, 2));
    console.log('Extracted', vocabList.length, 'items to lesson4_vocab.json');

} catch (err) {
    console.error('Error:', err);
}
