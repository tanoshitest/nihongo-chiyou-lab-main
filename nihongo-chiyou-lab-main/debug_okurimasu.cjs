const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("word: 'おくります'")) {
        console.log(`Found at line ${i}:`);
        for (let j = i; j < i + 50; j++) {
            console.log(`${j}: ${lines[j]}`);
        }
        break;
    }
}
