
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const missing = [];

    // Regex to capture the whole object
    // We'll iterate manually or use a smarter regex.
    // Let's use a simple per-line parser since regex for nested objects is flaky

    // Actually, regex for `id: X` then check subsequent lines until next `id:` is fine for this structure

    const idRegex = /id:\s*(\d+),/g;
    let match;

    while ((match = idRegex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        if (id > 60) continue; // Focus on first few lessons

        // Find the block end (simplistic approach: look ahead limited chars)
        const startIndex = match.index;
        const nextMatch = content.slice(startIndex + 1).match(/id:\s*\d+,/);
        const endIndex = nextMatch ? startIndex + 1 + nextMatch.index : content.length;

        const block = content.slice(startIndex, endIndex);

        const hasRadicals = /radicals:\s*".+"/.test(block) || /radicals:\s*`[^`]+`/.test(block);
        const hasMnemonic = /mnemonic:\s*".+"/.test(block) || /mnemonic:\s*`[^`]+`/.test(block);

        if (!hasRadicals || !hasMnemonic) {
            missing.push(id);
        }
    }

    console.log("IDs missing radicals or mnemonic:", JSON.stringify(missing));

} catch (err) {
    console.error(err);
}
