const fs = require('fs');
const content = fs.readFileSync('src/data/minnaData.ts', 'utf8');
const lines = content.split('\n');

console.log('Looking for lesson-level kanjiDetails (2-space indentation):');
lines.forEach((line, index) => {
    // Match lines that start with exactly 2 spaces followed by kanjiDetails:
    if (line.match(/^  kanjiDetails: \[$/)) {
        console.log(`Line ${index + 1}: ${line}`);
        // Show context
        if (index > 0) console.log(`  Previous line: ${lines[index - 1]}`);
    }
});
