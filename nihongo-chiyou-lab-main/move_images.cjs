const fs = require('fs');
const path = require('path');

// Source: Artifacts dir
// Target: public/images/vocabulary/lesson4/

const artifactDir = String.raw`C:\Users\ADMIN\.gemini\antigravity\brain\b32ab7a7-f1b1-464e-8e0a-4317d3337b66`;
const targetDir = path.join(__dirname, 'public/images/vocabulary/lesson4');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(artifactDir);

files.forEach(file => {
    if (file.endsWith('.png') && file.includes('_lesson4_')) {
        // Format: word_lesson4_timestamp.png
        // Extract word
        const parts = file.split('_lesson4_');
        if (parts.length >= 1) {
            const word = parts[0];
            const oldPath = path.join(artifactDir, file);
            const newPath = path.join(targetDir, `${word}.png`);

            // Move file
            // fs.renameSync(oldPath, newPath); // spanning drives might fail rename? No, likely same drive.
            // Copy and unlink to be safe if cross-device
            fs.copyFileSync(oldPath, newPath);
            fs.unlinkSync(oldPath);

            console.log(`Moved ${file} -> ${word}.png`);
        }
    }
});
