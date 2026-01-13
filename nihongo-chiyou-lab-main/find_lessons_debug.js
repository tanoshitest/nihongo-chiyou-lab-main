
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');
try {
    const stats = fs.statSync(filePath);
    console.log(`File size: ${stats.size} bytes`);

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    console.log('Searching matches...');
    lines.forEach((line, index) => {
        if (line.includes('export const')) {
            console.log(`${index + 1}: ${line.trim()}`);
        }
    });
} catch (e) {
    console.error('Error:', e);
}
