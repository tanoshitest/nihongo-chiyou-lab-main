
const fs = require('fs');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

try {
    const content = fs.readFileSync(filePath, 'utf8');

    // We need to parse the objects. 
    // Since the file is large and valid TS, maybe regex is safest for a quick check without fully evaluating it.
    // We look for `id: X` and then count the items in `examples: [...]`.

    const idRegex = /id:\s*(\d+),[\s\S]*?kanji:\s*"(.+?)",[\s\S]*?examples:\s*\[([\s\S]*?)\]/g;

    let match;
    const deficits = [];

    while ((match = idRegex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        const kanji = match[2];
        const examplesBlock = match[3];

        // Count objects inside the examples block
        // Assuming each example is an object `{ ... }`
        const exampleCount = (examplesBlock.match(/\{/g) || []).length;

        if (exampleCount < 5) {
            deficits.push({
                id: id,
                kanji: kanji,
                currentCount: exampleCount,
                needed: 5 - exampleCount
            });
        }
    }

    fs.writeFileSync('deficits.json', JSON.stringify(deficits, null, 2));
    console.log("Deficits saved to deficits.json");


} catch (err) {
    console.error(err);
}
