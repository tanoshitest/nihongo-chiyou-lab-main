
const fs = require('fs');
const path = require('path');

const minnaDataPath = path.resolve('src/data/minnaData.ts');
const publicDir = path.resolve('public');

try {
    const content = fs.readFileSync(minnaDataPath, 'utf-8');

    const brokenImages = [];
    const missingImages = [];
    const allKanji = [];

    const lines = content.split('\n');
    let insideKanjiDetails = false;
    let currentKanji = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('kanjiDetails: [')) {
            insideKanjiDetails = true;
        }

        if (insideKanjiDetails) {
            const kanjiMatch = line.match(/kanji:\s*'([^']+)'/);
            if (kanjiMatch) {
                currentKanji = kanjiMatch[1];
            }

            const imageMatch = line.match(/imageUrl:\s*'([^']+)'/);
            if (imageMatch) {
                if (currentKanji) {
                    const url = imageMatch[1];
                    const localPath = path.join(publicDir, url);
                    const exists = fs.existsSync(localPath);
                    allKanji.push({ kanji: currentKanji, url, exists, line: i + 1 });
                    if (!exists) {
                        brokenImages.push({ kanji: currentKanji, url, line: i + 1 });
                    }
                    currentKanji = null;
                }
            }

            // Heuristic checks for missing image
            if ((line.trim().startsWith('mnemonic:') || line.trim().startsWith('examples:')) && currentKanji) {
                missingImages.push({ kanji: currentKanji, line: i + 1 });
                allKanji.push({ kanji: currentKanji, status: 'MISSING_URL', line: i + 1 });
                currentKanji = null;
            }

            if (line.trim().startsWith('},')) {
                if (currentKanji) {
                    // If we reached end of block and still have currentKanji, it means no imageUrl was found
                    missingImages.push({ kanji: currentKanji, line: i + 1 });
                    allKanji.push({ kanji: currentKanji, status: 'MISSING_URL_AT_BLOCK_END', line: i + 1 });
                    currentKanji = null;
                }
            }

            if (line.includes('],')) {
                insideKanjiDetails = false;
                currentKanji = null;
            }
        }
    }

    console.log(`Total Kanji Found: ${allKanji.length}`);

    console.log('\n--- Broken Links ---');
    if (brokenImages.length > 0) {
        brokenImages.forEach(b => console.log(`Line ${b.line}: ${b.kanji} -> ${b.url}`));
    } else {
        console.log('None');
    }

    console.log('\n--- Missing Image URLs ---');
    if (missingImages.length > 0) {
        // dedupe by kanji but keep first line found
        const unique = {};
        missingImages.forEach(m => {
            if (!unique[m.kanji]) unique[m.kanji] = m.line;
        });
        for (const k in unique) {
            console.log(`Line ${unique[k]}: ${k}`);
        }
    } else {
        console.log('None');
    }

} catch (err) {
    console.error('Error reading file:', err);
}
