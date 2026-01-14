const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/minnaData.ts');

try {
    const content = fs.readFileSync(dataPath, 'utf8');
    console.log('File read successfully. Length:', content.length);

    // Search for "Lesson 4" or "Thời gian" or "lesson4Data"
    const lesson4Regex = /export const lesson4Data/;
    const match = content.match(lesson4Regex);

    if (match) {
        console.log('Found lesson4Data at index:', match.index);
        // Extract a chunk around it
        // We want to find the start of the "vocabulary" array after this match
        const chunk = content.substring(match.index, match.index + 20000);
        // Just dump enough to parse manually or see structure
        console.log(chunk.substring(0, 5000));
    } else {
        console.log('lesson4Data NOT found.');
        // Check for "id: 4" inside the file (likely inside lessonsN5 map but we want the DATA)
        // Maybe data is in a big list?

        // Look for a known word in Lesson 4.
        // "oki" (thức dậy - wake up)
        // "nema" (ngủ - sleep)
        // "hata" (làm việc - work)

        const wordMatch = content.indexOf("'okimasu'"); // romaji usually with quotes
        if (wordMatch !== -1) {
            console.log('Found "okimasu" at:', wordMatch);
            console.log(content.substring(wordMatch - 200, wordMatch + 500));
        } else {
            console.log('"okimasu" not found.');
        }

        const wordMatch2 = content.indexOf("'nemasu'");
        if (wordMatch2 !== -1) {
            console.log('Found "nemasu" at:', wordMatch2);
            console.log(content.substring(wordMatch2 - 200, wordMatch2 + 500));
        }

        // Search for the ID itself in an export
        const idMatch = content.match(/id:\s*4,/);
        if (idMatch) {
            console.log('Found "id: 4," at:', idMatch.index);
            console.log(content.substring(idMatch.index - 100, idMatch.index + 500));
        }
    }

} catch (err) {
    console.error('Error:', err);
}
