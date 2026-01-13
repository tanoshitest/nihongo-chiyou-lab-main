
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('Searching for "lesson" exports...');
lines.forEach((line, index) => {
    if (line.includes('export const lesson') || line.includes('word: \'教室\'')) {
        console.log(`${index + 1}: ${line.trim().substring(0, 100)}`);
    }
});
