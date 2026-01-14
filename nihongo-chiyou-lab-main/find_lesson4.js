const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/minnaData.ts');

try {
    const content = fs.readFileSync(dataPath, 'utf8');
    console.log('File read successfully. Length:', content.length);

    // Search for "Lesson 4" or "Thời gian" or "lesson4Data"
    // The lessonsN5 array maps id 4 to "Thời gian"
    // Check if there is lesson4Data or similar

    const lesson4Regex = /export const lesson4Data/;
    const match = content.match(lesson4Regex);

    if (match) {
        console.log('Found lesson4Data at index:', match.index);
        // Extract a chunk around it
        console.log(content.substring(match.index, match.index + 500));
    } else {
        console.log('lesson4Data NOT found.');
        // Try to find where Lesson 4 might be.
        // Maybe it's inside an array of lessons?
        // Let's look for known Lesson 4 vocab words.
        // Common Lesson 4 words: "okimasu", "nemasu", "hatarakimasu", "yasumimasu", "benkyoushimasu"
        // "ima", "ji", "fun", "han"

        // Search for "oki" (okimasu) in kanji or romaji
        const wordMatch = content.indexOf("okimasu");
        if (wordMatch !== -1) {
            console.log('Found "okimasu" at:', wordMatch);
            console.log(content.substring(wordMatch - 200, wordMatch + 500));
        }

        const wordMatch2 = content.indexOf("nemasu");
        if (wordMatch2 !== -1) {
            console.log('Found "nemasu" at:', wordMatch2);
            console.log(content.substring(wordMatch2 - 200, wordMatch2 + 500));
        }
    }

} catch (err) {
    console.error('Error:', err);
}
