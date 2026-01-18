
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson5Examples = {
    'いきます': [
        { jp: '学校へ行きます。', romaji: 'Gakkou e ikimasu.', vn: 'Tôi đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'スーパーへ行きます。', romaji: 'Suupaa e ikimasu.', vn: 'Tôi đi siêu thị.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '京都へ行きます。', romaji: 'Kyouto e ikimasu.', vn: 'Tôi đi Kyoto.', furigana: [{ kanji: '京都', reading: 'きょうと', meaning: 'KINH ĐÔ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'どこへ行きますか。', romaji: 'Doko e ikimasu ka.', vn: 'Bạn đi đâu vậy?', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '会社へ行きます。', romaji: 'Kaisha e ikimasu.', vn: 'Tôi đi làm (đến công ty).', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '病院へ行きます。', romaji: 'Byouin e ikimasu.', vn: 'Tôi đi bệnh viện.', furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'きます': [
        { jp: '日本へ来ました。', romaji: 'Nihon e kimashita.', vn: 'Tôi đã đến Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '友達が来ます。', romaji: 'Tomodachi ga kimasu.', vn: 'Bạn tôi sẽ đến.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'いつ来ますか。', romaji: 'Itsu kimasu ka.', vn: 'Khi nào bạn đến?', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'バスが来ました。', romaji: 'Basu ga kimashita.', vn: 'Xe buýt đã đến rồi.', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '国から母が来ました。', romaji: 'Kuni kara haha ga kimashita.', vn: 'Mẹ tôi từ quê đã đến.', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '先生はまだ来ません。', romaji: 'Sensei wa mada kimasen.', vn: 'Thầy giáo vẫn chưa đến.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] }
    ],
    'かえります': [
        { jp: 'うちへ帰ります。', romaji: 'Uchi e kaerimasu.', vn: 'Tôi về nhà.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '国へ帰ります。', romaji: 'Kuni e kaerimasu.', vn: 'Tôi về nước.', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '何時に帰りますか。', romaji: 'Nanji ni kaerimasu ka.', vn: 'Mấy giờ bạn về?', furigana: [{ kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: 'タクシーで帰ります。', romaji: 'Takushii de kaerimasu.', vn: 'Tôi về bằng taxi.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '歩いて帰りました。', romaji: 'Aruite kaerimashita.', vn: 'Tôi đã đi bộ về.', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '一緒に帰りましょう。', romaji: 'Isshoni kaerimashou.', vn: 'Cùng về nhé.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
    ],
    'がっこう': [
        { jp: '学校へ行きます。', romaji: 'Gakkou e ikimasu.', vn: 'Tôi đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '学校はどこですか。', romaji: 'Gakkou wa doko desu ka.', vn: 'Trường học ở đâu?', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] },
        { jp: '日本語学校で勉強します。', romaji: 'Nihongo gakkou de benkyou shimasu.', vn: 'Tôi học ở trường tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: '学校は8時に始まります。', romaji: 'Gakkou wa hachiji ni hajimarimasu.', vn: 'Trường học bắt đầu lúc 8 giờ.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '始', reading: 'はじ', meaning: 'THỦY' }] },
        { jp: '学校を休みます。', romaji: 'Gakkou wo yasumimasu.', vn: 'Tôi nghỉ học.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }] },
        { jp: 'きれいな学校ですね。', romaji: 'Kireina gakkou desu ne.', vn: 'Trường đẹp nhỉ.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] }
    ],
    'スーパー': [
        { jp: 'スーパーで肉を買います。', romaji: 'Suupaa de niku wo kaimasu.', vn: 'Tôi mua thịt ở siêu thị.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'スーパーへ行きます。', romaji: 'Suupaa e ikimasu.', vn: 'Tôi đi siêu thị.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'あのスーパーは安いです。', romaji: 'Ano suupaa wa yasui desu.', vn: 'Siêu thị kia rẻ.', furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }] },
        { jp: 'スーパーは駅の近くです。', romaji: 'Suupaa wa eki no chikaku desu.', vn: 'Siêu thị ở gần ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '近', reading: 'ちか', meaning: 'CẬN' }] },
        { jp: 'スーパーで働いています。', romaji: 'Suupaa de hataraite imasu.', vn: 'Tôi đang làm việc tại siêu thị.', furigana: [{ kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
        { jp: '昨日スーパーへ行きました。', romaji: 'Kinou suupaa e ikimashita.', vn: 'Hôm qua tôi đã đi siêu thị.', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'えき': [
        { jp: '駅へ行きます。', romaji: 'Eki e ikimasu.', vn: 'Tôi đi đến nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '駅で新聞を買いました。', romaji: 'Eki de shinbun wo kaimashita.', vn: 'Tôi đã mua báo ở nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '駅はここです。', romaji: 'Eki wa koko desu.', vn: 'Nhà ga ở đây.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '駅から遠いです。', romaji: 'Eki kara tooi desu.', vn: 'Xa nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '遠', reading: 'とお', meaning: 'VIỄN' }] },
        { jp: '駅前で会いましょう。', romaji: 'Ekimae de aimashou.', vn: 'Gặp nhau trước nhà ga nhé.', furigana: [{ kanji: '駅前', reading: 'えきまえ', meaning: 'DỊCH TIỀN' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '東京駅は大きいです。', romaji: 'Toukyou eki wa ookii desu.', vn: 'Ga Tokyo rất lớn.', furigana: [{ kanji: '東京駅', reading: 'とうきょうえき', meaning: 'ĐÔNG KINH DỊCH' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }] }
    ],
    'ひこうき': [
        { jp: '飛行機で行きます。', romaji: 'Hikouki de ikimasu.', vn: 'Tôi đi bằng máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '飛行機が好きです。', romaji: 'Hikouki ga suki desu.', vn: 'Tôi thích máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '飛行機に乗ります。', romaji: 'Hikouki ni norimasu.', vn: 'Tôi lên máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '飛行機のチケット', romaji: 'Hikouki no chiketto', vn: 'Vé máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }] },
        { jp: 'あの飛行機は速いです。', romaji: 'Ano hikouki wa hayai desu.', vn: 'Chiếc máy bay kia nhanh.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '速', reading: 'はや', meaning: 'TỐC' }] },
        { jp: '飛行機で1時間です。', romaji: 'Hikouki de ichijikan desu.', vn: 'Đi bằng máy bay mất 1 tiếng.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }] }
    ],
    'ふね': [
        { jp: '船で行きます。', romaji: 'Fune de ikimasu.', vn: 'Tôi đi bằng tàu thủy.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '大きい船ですね。', romaji: 'Ookii fune desu ne.', vn: 'Tàu to quá nhỉ.', furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }] },
        { jp: '船に乗ったことがありますか。', romaji: 'Fune ni notta koto ga arimasu ka.', vn: 'Bạn đã từng đi tàu thủy chưa?', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '船で荷物を送ります。', romaji: 'Fune de nimotsu wo okurimasu.', vn: 'Gửi hành lý bằng đường tàu biển.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '荷物', reading: 'にもつ', meaning: 'HÀ VẬT' }, { kanji: '送', reading: 'おく', meaning: 'TỐNG' }] },
        { jp: 'あの船は横浜へ行きます。', romaji: 'Ano fune wa Yokohama e ikimasu.', vn: 'Con tàu kia đi Yokohama.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '横浜', reading: 'よこはま', meaning: 'HOÀNH BANH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '船の旅は楽しいです。', romaji: 'Fune no tabi wa tanoshii desu.', vn: 'Du lịch bằng tàu thủy rất vui.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '旅', reading: 'たび', meaning: 'LỮ' }, { kanji: '楽', reading: 'たの', meaning: 'LẠC' }] }
    ],
    'でんしゃ': [
        { jp: '電車で行きます。', romaji: 'Densha de ikimasu.', vn: 'Tôi đi bằng tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '電車に乗ります。', romaji: 'Densha ni norimasu.', vn: 'Tôi lên tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '電車の駅はどこですか。', romaji: 'Densha no eki wa doko desu ka.', vn: 'Ga tàu điện ở đâu?', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '電車が来ました。', romaji: 'Densha ga kimashita.', vn: 'Tàu điện đến rồi.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'この電車は大阪へ行きます。', romaji: 'Kono densha wa Oosaka e ikimasu.', vn: 'Chuyến tàu này đi Osaka.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '毎日電車を使います。', romaji: 'Mainichi densha wo tsukaimasu.', vn: 'Tôi sử dụng tàu điện mỗi ngày.', furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }] }
    ],
    'ちかてつ': [
        { jp: '地下鉄で行きます。', romaji: 'Chikatetsu de ikimasu.', vn: 'Tôi đi bằng tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '地下鉄は便利です。', romaji: 'Chikatetsu wa benri desu.', vn: 'Tàu điện ngầm tiện lợi.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }] },
        { jp: '地下鉄を降ります。', romaji: 'Chikatetsu wo orimasu.', vn: 'Tôi xuống tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '降', reading: 'お', meaning: 'GIÁNG' }] },
        { jp: '東京の地下鉄は複雑です。', romaji: 'Toukyou no chikatetsu wa fukuzatsu desu.', vn: 'Tàu điện ngầm ở Tokyo phức tạp.', furigana: [{ kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '複雑', reading: 'ふくざつ', meaning: 'PHỨC TẠP' }] },
        { jp: '地下鉄の駅', romaji: 'Chikatetsu no eki', vn: 'Ga tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '地下鉄で会社へ行きます。', romaji: 'Chikatetsu de kaisha e ikimasu.', vn: 'Tôi đi đến công ty bằng tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find Lesson 5 block
    const lesson5StartRegex = /export const lesson5Data: LessonDetail = \{/;
    const match = content.match(lesson5StartRegex);

    if (!match) {
        console.error("Lesson 5 data not found");
        process.exit(1);
    }

    const startIndex = match.index;
    // This is a naive way to find the end of Lesson 5, assuming "const lesson6Data" follows or just searching for the closing brace contextually
    // Better to just find the vocabulary array inside it.

    // Let's iterate through our keys and update using regex replacement slightly more robustly
    // We search for: { word: 'KEY', ... }
    // And insert/replace examples

    let updatedCount = 0;

    for (const [word, examples] of Object.entries(lesson5Examples)) {
        // Escape word for regex
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Find the vocabulary item. It should be inside the vocabulary array.
        // We look for `{ word: 'WORD', ... }`
        // We want to make sure we are inside Lesson 5, so we can limit the search scope if we want, 
        // but the words are likely unique enough or we can assume global replace is okay if the word appears in other lessons?
        // Actually, simple words like "nan" might appear elsewhere.
        // So we should limit to the Lesson 5 block.

        // Find Lesson 5 vocabulary block
        const vocabStartRegex = /vocabulary:\s*\[/;
        // We need to find the one after lesson5Data start
        const lesson5Content = content.slice(startIndex);
        const vocabMatch = lesson5Content.match(vocabStartRegex);

        if (!vocabMatch) {
            console.log("Vocabulary block not found in Lesson 5");
            continue;
        }

        const vocabStartIndex = startIndex + vocabMatch.index;

        // We will do a replacement with a function that checks if we are in the right place?
        // Or simpler: Extract Lesson 5 block, modify it, put it back.
        // Lesson 5 ends at roughly line 14086. We can search for the next "export const" or just the end of the object.
        // Let's just find the next "lesson6Data" to define the end.

        const lesson6StartRegex = /export const lesson6Data/;
        const match6 = content.match(lesson6StartRegex);
        const endIndex = match6 ? match6.index : content.length;

        let lesson5Block = content.slice(startIndex, endIndex);

        // Now inside lesson5Block, replace the vocab item
        const itemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[^{}]*?)(\\s*\},|\\s*\}\$)`, 'm');

        // Note: The structure in file is `{ word: '...', kanji: '...', ... }` often on one line.
        // My regex `[^{}]*?` matches non-brace chars.

        if (itemRegex.test(lesson5Block)) {
            // Construct the new item string with examples
            // We need to preserve the existing properties.
            // We can capture the part before the closing brace and append examples.

            // However, if examples already exist, we should replace them?
            // The regex `[^{}]*?` will stop at the first `}` which closes the object.
            // If there is `examples: [...]` inside, it might contain nested braces `[{}]` which breaks the simple regex.
            // But currently Lesson 5 items are simple one-liners mostly.
            // Let's verify if they have nested objects. 
            // `minnaData.ts` shows: `{ word: 'いきます', kanji: '行きます', romaji: 'ikimasu', mean: 'đi' },`
            // No nested objects in the current state for these items.

            const examplesString = JSON.stringify(examples, null, 2)
                .replace(/"jp":/g, 'jp:')
                .replace(/"romaji":/g, 'romaji:')
                .replace(/"vn":/g, 'vn:')
                .replace(/"furigana":/g, 'furigana:')
                .replace(/"kanji":/g, 'kanji:')
                .replace(/"reading":/g, 'reading:')
                .replace(/"meaning":/g, 'meaning:')
                // formatting adjustments
                .replace(/\n/g, '\n      ')
                .replace(/\[\s+\{/g, '[{'); // Compact arrays slightly if needed

            // We replace the matched item. 
            // Expected match[1] is `{ word: '...', ...` (everything up to closing brace)
            // We append `,\n      examples: ${examplesString}\n    ` before the closing brace.

            lesson5Block = lesson5Block.replace(itemRegex, (match, p1, p2) => {
                // Check if examples already exist in p1?
                if (p1.includes('examples:')) {
                    // If it exists, we might need a smarter replace or just skip.
                    // For this task, we assume we are populating missing ones or overwriting.
                    // Simple regex line-based replace is safer for one-liners.
                    return match; // fallback: manual handling if needed, but for now assuming one-line without examples
                    // Actually, if it has 'examples', my regex `[^{}]*` would have failed if examples had `{}` inside.
                    // Since I saw the file, they don't have examples yet.
                }
                // Remove trailing comma or space if needed from p1 to make it clean?
                // p1 is `{ word: '...', ... 'mean': '...' `
                return `${p1},\n      examples: ${examplesString}${p2}`;
            });

            updatedCount++;
        } else {
            console.log(`Word ${word} not found in Lesson 5 block or format mismatch.`);
        }

        // Put the block back
        content = content.slice(0, startIndex) + lesson5Block + content.slice(endIndex);

        // Update the 'startIndex' for the next iteration? 
        // No, `content` changed, so indexes are invalid. 
        // We should re-fetch Lesson 5 block or just update `lesson5Block` in memory and write back once.
        // BETTER: Update `lesson5Block` entirely in a loop, then write back.
        // But `lesson5Block` is a string. If I update it, I can continue updating that string.
        // So the loop should run on `lesson5Block`.
    }

    // Re-reading logic to apply all updates to `lesson5Block`:
    let lesson5Block = content.slice(startIndex, match6 ? match6.index : content.length);

    for (const [word, examples] of Object.entries(lesson5Examples)) {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Regex to match the object.
        // We assume the object starts with `{ word: 'WORD',` and ends with `}`.
        // It might span multiple lines but currently formatted as one line.
        // We will match `{ word: '${escapedWord}', ... }`.
        // Handle potential existing examples? No, we assume none.

        const itemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[\\s\\S]*?)(\\})(\\s*,?)`, '');
        // `[\s\S]*?` matches anything including newlines, non-greedy.
        // But it might match too much if we are not careful about closing brace.
        // We can assume that `word`, `kanji`, `romaji`, `mean` are the only fields and they don't contain `}`.
        // So `[^{}]*` is safer.

        const safeItemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[^}]*?)(\\})`, '');

        if (safeItemRegex.test(lesson5Block)) {
            const examplesString = JSON.stringify(examples, null, 2)
                .replace(/"jp":/g, 'jp:')
                .replace(/"romaji":/g, 'romaji:')
                .replace(/"vn":/g, 'vn:')
                .replace(/"furigana":/g, 'furigana:')
                .replace(/"kanji":/g, 'kanji:')
                .replace(/"reading":/g, 'reading:')
                .replace(/"meaning":/g, 'meaning:')
                // Indentation fix
                .replace(/\n/g, '\n      ');

            lesson5Block = lesson5Block.replace(safeItemRegex, (match, p1, p2) => {
                // p1 is the content before `}`
                // p2 is `}`
                return `${p1},\n      examples: ${examplesString}\n    ${p2}`;
            });
            updatedCount++;
        } else {
            console.log(`Word ${word} not found/matched in Lesson 5 block.`);
        }
    }

    const finalContent = content.slice(0, startIndex) + lesson5Block + content.slice(match6 ? match6.index : content.length);

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Updated ${updatedCount} words in Lesson 5.`);

} catch (err) {
    console.error(err);
}
