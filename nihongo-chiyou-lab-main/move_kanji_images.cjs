
const fs = require('fs');
const path = require('path');

const sourceDir = String.raw`C:\Users\ADMIN\.gemini\antigravity\brain\595f22b1-41a0-43fc-b0cc-518181aa01e0`;
const targetDir = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\public\images\kanji`;

try {
    const files = fs.readdirSync(sourceDir);
    const kanjiFiles = files.filter(f => f.startsWith('kanji_') && f.endsWith('.png'));

    console.log(`Found ${kanjiFiles.length} kanji images.`);

    const updates = [];

    kanjiFiles.forEach(file => {
        // file format: kanji_{id}_{keyword}_{timestamp}.png
        // Regex to capture ID and Keyword
        const match = file.match(/^kanji_(\d+)_([a-zA-Z_]+)_\d+\.png$/);
        if (match) {
            const id = match[1];
            const keyword = match[2];
            const newName = `${id}_${keyword}_3d.png`;
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, newName);

            fs.copyFileSync(sourcePath, targetPath);
            console.log(`Moved: ${file} -> ${newName}`);

            updates.push({ id: parseInt(id), imageUrl: `/images/kanji/${newName}` });
        } else {
            console.log(`Skipping file with unexpected format: ${file}`);
        }
    });

    // Write a JSON file with the updates so I can use it in the next step
    fs.writeFileSync('image_updates.json', JSON.stringify(updates, null, 2));
    console.log("Updates saved to image_updates.json");

} catch (err) {
    console.error(err);
}
