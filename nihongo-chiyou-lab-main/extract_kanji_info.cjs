
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;
const targetIds = [4, 5, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 57, 58];

try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple regex to find blocks. 
    // This assumes standard formatting in the file
    const regex = /{\s*id: (\d+),[\s\S]*?kanji: "(.+?)",[\s\S]*?meaning: "(.+?)",/g;

    let match;
    const results = [];

    while ((match = regex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        if (targetIds.includes(id)) {
            results.push({
                id: id,
                kanji: match[2],
                meaning: match[3]
            });
        }
    }

    console.log(JSON.stringify(results, null, 2));

} catch (err) {
    console.error(err);
}
