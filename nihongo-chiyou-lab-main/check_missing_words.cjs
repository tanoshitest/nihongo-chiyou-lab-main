const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const suspectWords = [
    // L7
    'きります', 'おくります', 'かします', 'かります', 'おしえます', 'ならいます', 'て', 'かみ', 'はな', 'ちち', 'はは', 'にもつ', 'おかね', 'りょこう',
    // L8 Adjectives
    'しずか [な]', 'ゆうめい [な]', 'しんせつ [な]', 'げんき [な]', 'ひま [な]', 'べんり [な]', 'おおきい', 'ちいさい', 'あたらしい', 'ふるい', 'わるい',
    'あつい', 'さむい', 'つめたい', 'むずかしい', 'やさしい', 'たかい', 'やすい', 'ひくい', 'おもしろい', 'いそがしい', 'たのしい', 'しろい', 'くろい', 'あかい', 'あおい',
    // L8 Nouns
    'さくら', 'やま', 'まち', 'たべもの', 'くるま', 'ところ', 'りょう', 'べんきょう', 'せいかつ', 'おしごと', 'ふじさん', 'びわこ', 'きんかくじ'
];

let missing = [];
let found = [];

for (const word of suspectWords) {
    // Regex to match "word: 'WORD'"
    const re = new RegExp(`word: '${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
    if (!content.match(re)) {
        missing.push(word);
    } else {
        found.push(word);
    }
}

console.log("Missing definitions for:");
console.log(JSON.stringify(missing, null, 2));
console.log("\nFound definitions for:");
console.log(JSON.stringify(found, null, 2));
