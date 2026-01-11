
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;
const updatesFile = 'image_updates.json';

try {
    if (!fs.existsSync(updatesFile)) {
        console.error("updates file not found");
        process.exit(1);
    }

    const updates = JSON.parse(fs.readFileSync(updatesFile, 'utf8'));
    let content = fs.readFileSync(filePath, 'utf8');

    updates.forEach(update => {
        // Regex to find the block for this ID
        // We look for `id: {id},` and then within that object, replace `imageUrl: "..."`

        // Strategy: split content into objects or use regex to find the specific block.
        // Regex for block:  `{\s*id: 4,[\s\S]*?imageUrl: ".*?",`

        const blockRegex = new RegExp(`({\\s*id:\\s*${update.id},[\\s\\S]*?imageUrl:\\s*")(.+?)(")`, 'g');

        if (blockRegex.test(content)) {
            content = content.replace(blockRegex, `$1${update.imageUrl}$3`);
            console.log(`Updated ID ${update.id} to ${update.imageUrl}`);
        } else {
            console.log(`Could not find block for ID ${update.id}`);
            // Check if it exists with different formatting
        }
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("kanjiData.ts updated.");

} catch (err) {
    console.error(err);
}
