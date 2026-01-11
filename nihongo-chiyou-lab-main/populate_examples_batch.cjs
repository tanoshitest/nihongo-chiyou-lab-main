
const fs = require('fs');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

const newExamples = {
    13: [
        { japanese: "一万円", romaji: "Ichimanen", vietnamese: "10,000 yên" },
        { japanese: "万国", romaji: "Bankoku", vietnamese: "Vạn quốc" },
        { japanese: "万一", romaji: "Man'ichi", vietnamese: "Vạn nhất/Nhỡ đâu" },
        { japanese: "万歳", romaji: "Banzai", vietnamese: "Vạn tuế" },
        { japanese: "万能", romaji: "Bannou", vietnamese: "Vạn năng" }
    ],
    14: [
        { japanese: "百円", romaji: "Hyakuen", vietnamese: "100 yên" },
        { japanese: "円高", romaji: "Endaka", vietnamese: "Yên tăng giá" },
        { japanese: "円安", romaji: "Enyasu", vietnamese: "Yên giảm giá" },
        { japanese: "円形", romaji: "Enkei", vietnamese: "Hình tròn" },
        { japanese: "円満", romaji: "Enman", vietnamese: "Viên mãn" }
    ],
    27: [
        { japanese: "今", romaji: "Ima", vietnamese: "Bây giờ" },
        { japanese: "今日", romaji: "Kyou", vietnamese: "Hôm nay" },
        { japanese: "今月", romaji: "Kongetsu", vietnamese: "Tháng này" },
        { japanese: "今年", romaji: "Kotoshi", vietnamese: "Năm nay" },
        { japanese: "今週", romaji: "Konshuu", vietnamese: "Tuần này" }
    ],
    28: [
        { japanese: "お寺", romaji: "Otera", vietnamese: "Chùa" },
        { japanese: "金閣寺", romaji: "Kinkakuji", vietnamese: "Chùa Vàng" },
        { japanese: "山寺", romaji: "Yamadera", vietnamese: "Chùa trên núi" },
        { japanese: "寺院", romaji: "Jiin", vietnamese: "Đền chùa" },
        { japanese: "寺子屋", romaji: "Terakoya", vietnamese: "Trường học xưa" }
    ],
    29: [
        { japanese: "時間", romaji: "Jikan", vietnamese: "Thời gian" },
        { japanese: "一時", romaji: "Ichiji", vietnamese: "1 giờ" },
        { japanese: "時計", romaji: "Tokei", vietnamese: "Đồng hồ" },
        { japanese: "時々", romaji: "Tokidoki", vietnamese: "Thỉnh thoảng" },
        { japanese: "時代", romaji: "Jidai", vietnamese: "Thời đại" }
    ],
    31: [
        { japanese: "刀", romaji: "Katana", vietnamese: "Thanh kiếm" },
        { japanese: "日本刀", romaji: "Nihontou", vietnamese: "Kiếm Nhật" },
        { japanese: "短刀", romaji: "Tantou", vietnamese: "Đoản đao" },
        { japanese: "木刀", romaji: "Bokutou", vietnamese: "Kiếm gỗ" },
        { japanese: "執刀", romaji: "Shittou", vietnamese: "Phẫu thuật" }
    ],
    36: [
        { japanese: "外", romaji: "Soto", vietnamese: "Bên ngoài" },
        { japanese: "外国", romaji: "Gaikoku", vietnamese: "Nước ngoài" },
        { japanese: "外国人", romaji: "Gaikokujin", vietnamese: "Người nước ngoài" },
        { japanese: "海外", romaji: "Kaigai", vietnamese: "Hải ngoại" },
        { japanese: "外食", romaji: "Gaishoku", vietnamese: "Ăn ngoài" }
    ],
    37: [
        { japanese: "右", romaji: "Migi", vietnamese: "Bên phải" },
        { japanese: "右手", romaji: "Migite", vietnamese: "Tay phải" },
        { japanese: "右側", romaji: "Migigawa", vietnamese: "Phía bên phải" },
        { japanese: "右折", romaji: "Usetsu", vietnamese: "Rẽ phải" },
        { japanese: "左右", romaji: "Sayuu", vietnamese: "Trái phải" }
    ],
    38: [
        { japanese: "工場", romaji: "Koujou", vietnamese: "Nhà máy" },
        { japanese: "工事", romaji: "Kouji", vietnamese: "Công trình" },
        { japanese: "工学", romaji: "Kougaku", vietnamese: "Công học" },
        { japanese: "人工", romaji: "Jinkou", vietnamese: "Nhân tạo" },
        { japanese: "大工", romaji: "Daiku", vietnamese: "Thợ mộc" }
    ],
    39: [
        { japanese: "左", romaji: "Hidari", vietnamese: "Bên trái" },
        { japanese: "左手", romaji: "Hidari te", vietnamese: "Tay trái" },
        { japanese: "左側", romaji: "Hidari gawa", vietnamese: "Phía bên trái" },
        { japanese: "左折", romaji: "Sasetsu", vietnamese: "Rẽ trái" },
        { japanese: "左利き", romaji: "Hidarikiki", vietnamese: "Thuận tay trái" }
    ],
    40: [
        { japanese: "前", romaji: "Mae", vietnamese: "Trước" },
        { japanese: "名前", romaji: "Namae", vietnamese: "Tên" },
        { japanese: "午前", romaji: "Gozen", vietnamese: "Buổi sáng (AM)" },
        { japanese: "前回", romaji: "Zenkai", vietnamese: "Lần trước" },
        { japanese: "駅前", romaji: "Ekimae", vietnamese: "Trước nhà ga" }
    ],
    41: [
        { japanese: "後ろ", romaji: "Ushiro", vietnamese: "Phía sau" },
        { japanese: "午後", romaji: "Gogo", vietnamese: "Buổi chiều (PM)" },
        { japanese: "後で", romaji: "Atode", vietnamese: "Lát nữa" },
        { japanese: "最後", romaji: "Saigo", vietnamese: "Cuối cùng" },
        { japanese: "後輩", romaji: "Kouhai", vietnamese: "Hậu bối" }
    ],
    42: [
        { japanese: "午前", romaji: "Gozen", vietnamese: "Buổi sáng (AM)" },
        { japanese: "午後", romaji: "Gogo", vietnamese: "Buổi chiều (PM)" },
        { japanese: "正午", romaji: "Shougo", vietnamese: "Chính ngọ" },
        { japanese: "午前中", romaji: "Gozenchu", vietnamese: "Trong buổi sáng" },
        { japanese: "午睡", romaji: "Gosui", vietnamese: "Ngủ trưa" }
    ],
    45: [
        { japanese: "東", romaji: "Higashi", vietnamese: "Phía Đông" },
        { japanese: "東京", romaji: "Toukyou", vietnamese: "Tokyo" },
        { japanese: "東口", romaji: "Higashiguchi", vietnamese: "Cửa Đông" },
        { japanese: "東洋", romaji: "Touyou", vietnamese: "Đông Dương" },
        { japanese: "中東", romaji: "Chuutou", vietnamese: "Trung Đông" }
    ],
    46: [
        { japanese: "西", romaji: "Nishi", vietnamese: "Phía Tây" },
        { japanese: "西口", romaji: "Nishiguchi", vietnamese: "Cửa Tây" },
        { japanese: "西洋", romaji: "Seiyou", vietnamese: "Tây Dương" },
        { japanese: "関西", romaji: "Kansai", vietnamese: "Vùng Kansai" },
        { japanese: "東西", romaji: "Touzai", vietnamese: "Đông Tây" }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updatedCount = 0;

    for (const [id, examples] of Object.entries(newExamples)) {
        // Find the block for this ID
        const blockStartMatch = content.match(new RegExp(`id:\\s*${id},`));
        if (!blockStartMatch) {
            console.log(`ID ${id} not found.`);
            continue;
        }

        const startIndex = blockStartMatch.index;
        const afterStart = content.slice(startIndex + 1);
        const nextIdMatch = afterStart.match(/id:\s*\d+,/);
        const endIndex = nextIdMatch ? startIndex + 1 + nextIdMatch.index : content.length;

        let block = content.slice(startIndex, endIndex);

        // Replace examples array
        // Regex: examples: \[ ... \]
        const examplesRegex = /examples:\s*\[([\s\S]*?)\]/;

        // Construct new examples string
        const examplesString = examples.map(ex => `
      {
        japanese: "${ex.japanese}",
        romaji: "${ex.romaji}",
        vietnamese: "${ex.vietnamese}"
      }`).join(',') + '\n    ';

        if (examplesRegex.test(block)) {
            block = block.replace(examplesRegex, `examples: [${examplesString}]`);
        } else {
            // If examples key is missing (unlikely based on type, but possible), append it
            // Not handling this edge case for now as we know they have examples: []
        }

        content = content.slice(0, startIndex) + block + content.slice(endIndex);
        updatedCount++;
        console.log(`Updated examples for ID ${id}`);
    }

    if (updatedCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully updated ${updatedCount} kanji example sets.`);
    } else {
        console.log("No updates performed.");
    }

} catch (err) {
    console.error(err);
}
