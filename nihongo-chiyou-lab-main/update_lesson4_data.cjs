const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/minnaData.ts');
const vocabList = require('./lesson4_vocab.json');

let content = fs.readFileSync(dataPath, 'utf8');

// We need to inject `image: "/images/vocabulary/lesson4/word.png",` into the object.
// We have line numbers. The line number in vocabList points to the line containing `word: "..."`.
// We should insert the image property after the `mean: "..."` property for consistency, or just after `word`.
// Actually, `lesson4_vocab.json` has `line` which is the 1-based line number of the `word: ...` line.
// But `content` is a string. We need to split by newline again to handle line indices.

let lines = content.split('\n');

// We will process in reverse order to avoid shifting line numbers!
// Iterate vocabList, check if image exists in public folder (optional, but good practice), then update.
// Actually, for now, just update for the words we know we represented.

const files = fs.readdirSync(path.join(__dirname, 'public/images/vocabulary/lesson4'));
const wordsWithImages = files.filter(f => f.endsWith('.png')).map(f => f.replace('.png', ''));
console.log(`Found ${wordsWithImages.length} images to update.`);

// Sort vocab items by line number descending
const itemsToUpdate = vocabList.filter(item => wordsWithImages.includes(item.romaji) || wordsWithImages.includes(item.word));
// usage of romaji lookup is safer for file naming conventions used.
// My files are named by romaji basically (e.g. okimasu.png). 
// vocabList has romaji property.

// Let's create a map of romaji -> item
const vocabMap = {};
vocabList.forEach(item => {
    if (item.romaji) vocabMap[item.romaji] = item;
});

// We need to insert `image: "/images/vocabulary/lesson4/${romaji}.png",`
// The insertion point: The line `word: ...` is at `item.line`.
// We can insert it immediately after that line.

// We must process updates from bottom to top so line numbers stay valid.
const updates = [];
wordsWithImages.forEach(key => {
    const item = vocabMap[key];
    if (item) {
        updates.push({
            line: item.line, // 1-based
            imagePath: `/images/vocabulary/lesson4/${key}.png`
        });
    } else {
        console.log(`Warning: Could not correct vocab item for ${key}`);
    }
});

updates.sort((a, b) => b.line - a.line);

updates.forEach(update => {
    // line is 1-based, so array index is line - 1.
    // We want to insert AFTER this line.
    // verify the line content
    const index = update.line - 1;
    // const currentLine = lines[index];
    // console.log(`Updating at line ${update.line}: ${currentLine.trim()}`);

    // Check if image already exists in this block?
    // We can just add it. If it duplicates, we might need cleanup, but for now assuming clean state or just adding.
    // Actually, `existingImage` was captured in extraction. I should check that.

    // Construct the new line. Indentation?
    // We can infer indentation from the `word` line.
    const currentLine = lines[index];
    const spaces = currentLine.match(/^\s*/)[0];
    const newLine = `${spaces}image: "${update.imagePath}",`;

    lines.splice(index + 1, 0, newLine);
});

fs.writeFileSync(dataPath, lines.join('\n'));
console.log(`Updated ${updates.length} items in minnaData.ts`);
