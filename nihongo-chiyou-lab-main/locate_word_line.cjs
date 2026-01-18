const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let found = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("word: 'おくります'")) {
        console.log(`Found at line ${i}: ${lines[i]}`);
        found = true;
    }
}

if (!found) {
    console.log("NOT FOUND by simple loop.");
    // Try Regex match on whole content
    const match = content.match(/word: 'おくります'/);
    if (match) {
        console.log("Found by content.match at index " + match.index);
    } else {
        console.log("Totally missing.");
    }
}
