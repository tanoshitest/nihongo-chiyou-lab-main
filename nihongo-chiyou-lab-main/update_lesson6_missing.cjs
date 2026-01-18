
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson6Examples = {
    'さかな': [
        { jp: '魚を食べます。', romaji: 'Sakana wo tabemasu.', vn: 'Tôi ăn cá.', furigana: [{ kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '魚が好きです。', romaji: 'Sakana ga suki desu.', vn: 'Tôi thích cá.', furigana: [{ kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '魚料理', romaji: 'Sakana ryouri', vn: 'Món cá.', furigana: [{ kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }] },
        { jp: '魚を釣ります。', romaji: 'Sakana wo tsurimasu.', vn: 'Tôi câu cá.', furigana: [{ kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }, { kanji: '釣', reading: 'つ', meaning: 'ĐIẾU' }] },
        { jp: '新鮮な魚', romaji: 'Shinsen na sakana', vn: 'Cá tươi.', furigana: [{ kanji: '新鮮', reading: 'しんせん', meaning: 'TÂN TIÊN' }, { kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }] },
        { jp: '魚屋', romaji: 'Sakanaya', vn: 'Cửa hàng cá.', furigana: [{ kanji: '魚', reading: 'さかな', meaning: 'NGƯ' }, { kanji: '屋', reading: 'や', meaning: 'ỐC' }] }
    ],
    'やさい': [
        { jp: '野菜を食べます。', romaji: 'Yasai wo tabemasu.', vn: 'Tôi ăn rau.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '野菜を買います。', romaji: 'Yasai wo kaimasu.', vn: 'Tôi mua rau.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '野菜ジュース', romaji: 'Yasai juusu', vn: 'Nước ép rau.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }] },
        { jp: '新鮮な野菜', romaji: 'Shinsen na yasai', vn: 'Rau tươi.', furigana: [{ kanji: '新鮮', reading: 'しんせん', meaning: 'TÂN TIÊN' }, { kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }] },
        { jp: '野菜を切ります。', romaji: 'Yasai wo kirimasu.', vn: 'Tôi cắt rau.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }, { kanji: '切', reading: 'き', meaning: 'THIẾT' }] },
        { jp: '野菜サラダ', romaji: 'Yasai sarada', vn: 'Salad rau.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }] }
    ],
    'くだもの': [
        { jp: '果物を食べます。', romaji: 'Kudamono wo tabemasu.', vn: 'Tôi ăn hoa quả.', furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '果物が好きです。', romaji: 'Kudamono ga suki desu.', vn: 'Tôi thích hoa quả.', furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: 'おいしい果物', romaji: 'Oishii kudamono', vn: 'Hoa quả ngon.', furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }] },
        { jp: '果物を買います。', romaji: 'Kudamono wo kaimasu.', vn: 'Tôi mua hoa quả.', furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '季節の果物', romaji: 'Kisetsu no kudamono', vn: 'Hoa quả theo mùa.', furigana: [{ kanji: '季節', reading: 'きせつ', meaning: 'QUÝ TIẾT' }, { kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }] },
        { jp: '果物を切ります。', romaji: 'Kudamono wo kirimasu.', vn: 'Tôi gọt/cắt hoa quả.', furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }, { kanji: '切', reading: 'き', meaning: 'THIẾT' }] }
    ],
    'みず': [
        { jp: '水を飲みます。', romaji: 'Mizu wo nomimasu.', vn: 'Tôi uống nước.', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '冷たい水', romaji: 'Tsumetai mizu', vn: 'Nước lạnh.', furigana: [{ kanji: '冷', reading: 'つめ', meaning: 'LÃNH' }, { kanji: '水', reading: 'みず', meaning: 'THỦY' }] },
        { jp: '水をください。', romaji: 'Mizu wo kudasai.', vn: 'Cho tôi xin nước.', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }] },
        { jp: '水を買います。', romaji: 'Mizu wo kaimasu.', vn: 'Tôi mua nước.', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'きれいな水', romaji: 'Kireina mizu', vn: 'Nước sạch.', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }] },
        { jp: '水を浴びます。', romaji: 'Mizu wo abimasu.', vn: 'Tắm (dội nước).', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }, { kanji: '浴', reading: 'あ', meaning: 'DỤC' }] }
    ],
    'おちゃ': [
        { jp: 'お茶を飲みます。', romaji: 'Ocha wo nomimasu.', vn: 'Tôi uống trà.', furigana: [{ kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '日本のお茶', romaji: 'Nihon no ocha', vn: 'Trà Nhật.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }] },
        { jp: '温かいお茶', romaji: 'Atatakai ocha', vn: 'Trà nóng.', furigana: [{ kanji: '温', reading: 'あたた', meaning: 'ÔN' }, { kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }] },
        { jp: 'お茶を入れます。', romaji: 'Ocha wo iremasu.', vn: 'Pha trà.', furigana: [{ kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }] },
        { jp: 'お茶をどうぞ。', romaji: 'Ocha wo douzo.', vn: 'Mời dùng trà.', furigana: [{ kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }] },
        { jp: 'お茶菓子', romaji: 'Ochagashi', vn: 'Bánh kẹo dùng với trà.', furigana: [{ kanji: '茶菓子', reading: 'ちゃがし', meaning: 'TRÀ QUẢ TỬ' }] }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find Lesson 6 block
    const lesson6StartRegex = /(export\s+)?const lesson6Data: LessonDetail = \{/;
    const match = content.match(lesson6StartRegex);

    if (!match) {
        console.error("Lesson 6 data not found");
        process.exit(1);
    }

    const startIndex = match.index;
    const lesson7StartRegex = /export const lesson7Data/;
    const match7 = content.match(lesson7StartRegex);
    const endIndex = match7 ? match7.index : content.length;

    let lesson6Block = content.slice(startIndex, endIndex);
    let updatedCount = 0;

    for (const [word, examples] of Object.entries(lesson6Examples)) {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const safeItemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[^}]*?)(\\})`, '');

        if (safeItemRegex.test(lesson6Block)) {
            const examplesString = JSON.stringify(examples, null, 2)
                .replace(/"jp":/g, 'jp:')
                .replace(/"romaji":/g, 'romaji:')
                .replace(/"vn":/g, 'vn:')
                .replace(/"furigana":/g, 'furigana:')
                .replace(/"kanji":/g, 'kanji:')
                .replace(/"reading":/g, 'reading:')
                .replace(/"meaning":/g, 'meaning:')
                .replace(/\n/g, '\n      ');

            lesson6Block = lesson6Block.replace(safeItemRegex, (match, p1, p2) => {
                return `${p1},\n      examples: ${examplesString}\n    ${p2}`;
            });
            updatedCount++;
        } else {
            console.log(`Word ${word} not found/matched in Lesson 6 block.`);
        }
    }

    const finalContent = content.slice(0, startIndex) + lesson6Block + content.slice(endIndex);

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Updated ${updatedCount} words in Lesson 6 (Missing Part).`);

} catch (err) {
    console.error(err);
}
