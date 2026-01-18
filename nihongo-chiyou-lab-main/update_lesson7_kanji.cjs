const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define Kanji Data Source
const kanjiDB = {
    '切': {
        kanji: '切', onyomi: 'セツ', kunyomi: 'き.る', meaning: 'Cắt', strokes: 4, jlpt: 'N4',
        radicals: '刀 (dao)',
        components: [{ char: '七', meaning: 'số 7' }, { char: '刀', meaning: 'dao' }],
        mnemonic: 'Dùng dao (刀) cắt làm 7 (七) mảnh.',
        exampleSentences: [
            { jp: '紙を切ります。', vn: 'Cắt giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] },
            { jp: '切手を買います。', vn: 'Mua tem.', furigana: [{ kanji: '切手', reading: 'きって' }, { kanji: '買', reading: 'か' }] },
            { jp: '親切な人', vn: 'Người tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ' }, { kanji: '人', reading: 'ひと' }] },
            { jp: '大切な友達', vn: 'Người bạn quan trọng.', furigana: [{ kanji: '大切', reading: 'たいせつ' }, { kanji: '友達', reading: 'ともだち' }] },
            { jp: '電話を切ります。', vn: 'Cắt (cúp) điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ' }, { kanji: '切', reading: 'き' }] }
        ]
    },
    '送': {
        kanji: '送', onyomi: 'ソウ', kunyomi: 'おく.る', meaning: 'Gửi, tiễn', strokes: 9, jlpt: 'N4',
        radicals: '辶 (xước)',
        components: [{ char: '关', meaning: 'quan (cổng)' }, { char: '辶', meaning: 'di chuyển' }],
        mnemonic: 'Đi (辶) ra cổng (关) để tiễn đưa/gửi đồ.',
        exampleSentences: [
            { jp: '手紙を送ります。', vn: 'Gửi thư.', furigana: [{ kanji: '手紙', reading: 'てがみ' }, { kanji: '送', reading: 'おく' }] },
            { jp: '駅まで送ります。', vn: 'Tiễn đến nhà ga.', furigana: [{ kanji: '駅', reading: 'えき' }, { kanji: '送', reading: 'おく' }] },
            { jp: '送料はいくらですか。', vn: 'Phí gửi là bao nhiêu?', furigana: [{ kanji: '送料', reading: 'そうりょう' }] },
            { jp: '送金します。', vn: 'Gửi tiền (chuyển khoản).', furigana: [{ kanji: '送金', reading: 'そうきん' }] },
            { jp: '放送局', vn: 'Đài truyền hình.', furigana: [{ kanji: '放送局', reading: 'ほうそうきょく' }] }
        ]
    },
    '貸': {
        kanji: '貸', onyomi: 'タイ', kunyomi: 'か.す', meaning: 'Cho mượn', strokes: 12, jlpt: 'N4',
        radicals: '貝 (bối - tiền)',
        components: [{ char: '代', meaning: 'thay thế' }, { char: '貝', meaning: 'tiền' }],
        mnemonic: 'Lấy tiền (貝) thay (代) cho vật đã cho mượn.',
        exampleSentences: [
            { jp: '本を貸します。', vn: 'Cho mượn sách.', furigana: [{ kanji: '本', reading: 'ほん' }, { kanji: '貸', reading: 'か' }] },
            { jp: 'お金を貸してください。', vn: 'Hãy cho tôi vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '貸', reading: 'か' }] },
            { jp: '貸家あります。', vn: 'Có nhà cho thuê.', furigana: [{ kanji: '貸家', reading: 'かしや' }] },
            { jp: '賃貸マンション', vn: 'Chung cư cho thuê.', furigana: [{ kanji: '賃貸', reading: 'ちんたい' }] },
            { jp: '力を貸してください。', vn: 'Hãy giúp tôi một tay (cho mượn sức).', furigana: [{ kanji: '力', reading: 'ちから' }, { kanji: '貸', reading: 'か' }] }
        ]
    },
    '借': {
        kanji: '借', onyomi: 'シャク', kunyomi: 'か.りる', meaning: 'Mượn, vay', strokes: 10, jlpt: 'N4',
        radicals: '人 (người)',
        components: [{ char: '人', meaning: 'người' }, { char: '昔', meaning: 'xưa' }],
        mnemonic: 'Người (人) xưa (昔) đã đi vay mượn rồi.',
        exampleSentences: [
            { jp: 'お金を借ります。', vn: 'Vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '借', reading: 'か' }] },
            { jp: '借金があります。', vn: 'Có khoản nợ.', furigana: [{ kanji: '借金', reading: 'しゃっきん' }] },
            { jp: '知恵を借りる。', vn: 'Mượn trí tuệ (tham khảo ý kiến).', furigana: [{ kanji: '知恵', reading: 'ちえ' }, { kanji: '借', reading: 'か' }] },
            { jp: '借家', vn: 'Nhà thuê.', furigana: [{ kanji: '借家', reading: 'しゃくや' }] },
            { jp: 'トイレを借ります。', vn: 'Mượn (dùng nhờ) nhà vệ sinh.', furigana: [{ kanji: '借', reading: 'か' }] }
        ]
    },
    '教': {
        kanji: '教', onyomi: 'キョウ', kunyomi: 'おし.える', meaning: 'Dạy', strokes: 11, jlpt: 'N4',
        radicals: '攴 (đánh khẽ)',
        components: [{ char: '孝', meaning: 'hiếu thảo' }, { char: '攴', meaning: 'đánh khẽ' }],
        mnemonic: 'Dạy dỗ con cái phải hiếu thảo (孝),  nếu không thì đánh khẽ (攴).',
        exampleSentences: [
            { jp: '日本語を教えます。', vn: 'Dạy tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご' }, { kanji: '教', reading: 'おし' }] },
            { jp: '教会へ行きます。', vn: 'Đi nhà thờ.', furigana: [{ kanji: '教会', reading: 'きょうかい' }, { kanji: '行', reading: 'い' }] },
            { jp: '教室はどこですか。', vn: 'Phòng học ở đâu?', furigana: [{ kanji: '教室', reading: 'きょうしつ' }] },
            { jp: '教育', vn: 'Giáo dục.', furigana: [{ kanji: '教育', reading: 'きょういく' }] },
            { jp: '教科書を読みます。', vn: 'Đọc sách giáo khoa.', furigana: [{ kanji: '教科書', reading: 'きょうかしょ' }, { kanji: '読', reading: 'よ' }] }
        ]
    },
    '習': {
        kanji: '習', onyomi: 'シュウ', kunyomi: 'なら.う', meaning: 'Học tập', strokes: 11, jlpt: 'N4',
        radicals: '羽 (lông vũ)',
        components: [{ char: '羽', meaning: 'cánh/lông vũ' }, { char: '白', meaning: 'trắng' }],
        mnemonic: 'Chim non tập vỗ đôi cánh (羽) màu trắng (白) để bay.',
        exampleSentences: [
            { jp: 'ピアノを習います。', vn: 'Học đàn piano.', furigana: [{ kanji: '習', reading: 'なら' }] },
            { jp: '予習します。', vn: 'Soạn bài (học trước).', furigana: [{ kanji: '予習', reading: 'よしゅう' }] },
            { jp: '復習します。', vn: 'Ôn tập.', furigana: [{ kanji: '復習', reading: 'ふくしゅう' }] },
            { jp: '習慣', vn: 'Thói quen/Tập quán.', furigana: [{ kanji: '習慣', reading: 'しゅうかん' }] },
            { jp: '書道を習います。', vn: 'Học thư pháp.', furigana: [{ kanji: '書道', reading: 'しょどう' }, { kanji: '習', reading: 'なら' }] }
        ]
    },
    '手': {
        kanji: '手', onyomi: 'シュ', kunyomi: 'て', meaning: 'Tay', strokes: 4, jlpt: 'N5',
        radicals: '手 (tay)',
        components: [{ char: '手', meaning: 'tay' }],
        mnemonic: 'Hình dáng bàn tay xòe ra.',
        exampleSentences: [
            { jp: '手がきれいです。', vn: 'Tay đẹp/sạch.', furigana: [{ kanji: '手', reading: 'て' }] },
            { jp: '切手を集めます。', vn: 'Sưu tầm tem.', furigana: [{ kanji: '切手', reading: 'きって' }, { kanji: '集', reading: 'あつ' }] },
            { jp: '手紙を書きます。', vn: 'Viết thư.', furigana: [{ kanji: '手紙', reading: 'てがみ' }, { kanji: '書', reading: 'か' }] },
            { jp: '歌手になりたい。', vn: 'Muốn trở thành ca sĩ.', furigana: [{ kanji: '歌手', reading: 'かしゅ' }] },
            { jp: '上手な絵', vn: 'Bức tranh giỏi/đẹp.', furigana: [{ kanji: '上手', reading: 'じょうず' }, { kanji: '絵', reading: 'え' }] }
        ]
    },
    '紙': {
        kanji: '紙', onyomi: 'シ', kunyomi: 'かみ', meaning: 'Giấy', strokes: 10, jlpt: 'N4',
        radicals: '糸 (sợi chỉ)',
        components: [{ char: '糸', meaning: 'sợi chỉ' }, { char: '氏', meaning: 'họ/nhánh' }],
        mnemonic: 'Làm giấy (紙) từ các sợi (糸) cây của dòng họ (氏).',
        exampleSentences: [
            { jp: '紙を切ります。', vn: 'Cắt giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] },
            { jp: '手紙', vn: 'Bức thư.', furigana: [{ kanji: '手紙', reading: 'てがみ' }] },
            { jp: '折り紙', vn: 'Nghệ thuật gấp giấy.', furigana: [{ kanji: '折', reading: 'お' }, { kanji: '紙', reading: 'がみ' }] },
            { jp: '新聞紙', vn: 'Giấy báo.', furigana: [{ kanji: '新聞紙', reading: 'しんぶんし' }] },
            { jp: '紙コップ', vn: 'Cốc giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }] }
        ]
    },
    '花': {
        kanji: '花', onyomi: 'カ', kunyomi: 'はな', meaning: 'Hoa', strokes: 7, jlpt: 'N4',
        radicals: '艸 (cỏ)',
        components: [{ char: '艹', meaning: 'cỏ/thảo' }, { char: '化', meaning: 'hóa/biến đổi' }],
        mnemonic: 'Cỏ (艹) biến hóa (化) thành hoa (花).',
        exampleSentences: [
            { jp: '花をあげます。', vn: 'Tặng hoa.', furigana: [{ kanji: '花', reading: 'はな' }] },
            { jp: '花見に行きます。', vn: 'Đi ngắm hoa.', furigana: [{ kanji: '花見', reading: 'はなみ' }, { kanji: '行', reading: 'い' }] },
            { jp: '花火', vn: 'Pháo hoa.', furigana: [{ kanji: '花火', reading: 'はなび' }] },
            { jp: '花瓶', vn: 'Lọ hoa.', furigana: [{ kanji: '花瓶', reading: 'かびん' }] },
            { jp: '奇麗な花', vn: 'Hoa đẹp.', furigana: [{ kanji: '奇麗', reading: 'きれい' }, { kanji: '花', reading: 'はな' }] }
        ]
    },
    '父': {
        kanji: '父', onyomi: 'フ', kunyomi: 'ちち', meaning: 'Bố (khi nói về bố mình)', strokes: 4, jlpt: 'N5',
        radicals: '父 (bố)',
        components: [{ char: '父', meaning: 'bố' }],
        mnemonic: 'Hình ảnh người cha cầm roi dạy con.',
        exampleSentences: [
            { jp: '私の父は医者です。', vn: 'Bố tôi là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '父', reading: 'ちち' }, { kanji: '医者', reading: 'いしゃ' }] },
            { jp: '父の日', vn: 'Ngày của Cha.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '日', reading: 'ひ' }] },
            { jp: 'お父さん', vn: 'Bố (khi gọi bố, hoặc bố người khác).', furigana: [{ kanji: '父', reading: 'とう' }] },
            { jp: '祖父', vn: 'Ông.', furigana: [{ kanji: '祖父', reading: 'そふ' }] },
            { jp: '父母', vn: 'Cha mẹ (phụ mẫu).', furigana: [{ kanji: '父母', reading: 'ふぼ' }] }
        ]
    },
    '母': {
        kanji: '母', onyomi: 'ボ', kunyomi: 'はは', meaning: 'Mẹ (khi nói về mẹ mình)', strokes: 5, jlpt: 'N5',
        radicals: '毋 (chớ/đừng)',
        components: [{ char: '母', meaning: 'mẹ' }],
        mnemonic: 'Hình ảnh người mẹ đang cho con bú.',
        exampleSentences: [
            { jp: '私の母は先生です。', vn: 'Mẹ tôi là giáo viên.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '母', reading: 'はは' }, { kanji: '先生', reading: 'せんせい' }] },
            { jp: '母の日', vn: 'Ngày của Mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '日', reading: 'ひ' }] },
            { jp: 'お母さん', vn: 'Mẹ (khi gọi mẹ, hoặc mẹ người khác).', furigana: [{ kanji: '母', reading: 'かあ' }] },
            { jp: '祖母', vn: 'Bà.', furigana: [{ kanji: '祖母', reading: 'そぼ' }] },
            { jp: '母国語', vn: 'Tiếng mẹ đẻ.', furigana: [{ kanji: '母国語', reading: 'ぼこくご' }] }
        ]
    },
    '荷': {
        kanji: '荷', onyomi: 'カ', kunyomi: 'に', meaning: 'Hành lý, gánh vác', strokes: 10, jlpt: 'N4',
        radicals: '艸 (cỏ)',
        components: [{ char: '艹', meaning: 'cỏ' }, { char: '何', meaning: 'cái gì' }],
        mnemonic: 'Cái gì (何) để trên cỏ (艹)? Là hành lý (荷).',
        exampleSentences: [
            { jp: '荷物を送ります。', vn: 'Gửi hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '送', reading: 'おく' }] },
            { jp: '手荷物', vn: 'Hành lý xách tay.', furigana: [{ kanji: '手荷物', reading: 'てにもつ' }] },
            { jp: '荷作りします。', vn: 'Đóng gói hành lý.', furigana: [{ kanji: '荷作', reading: 'にづく' }] },
            { jp: '重い荷物', vn: 'Hành lý nặng.', furigana: [{ kanji: '重', reading: 'おも' }, { kanji: '荷物', reading: 'にもつ' }] },
            { jp: '入荷します', vn: 'Nhập hàng.', furigana: [{ kanji: '入荷', reading: 'にゅうか' }] }
        ]
    },
    '物': {
        kanji: '物', onyomi: 'ブツ', kunyomi: 'もの', meaning: 'Vật, đồ vật', strokes: 8, jlpt: 'N5',
        radicals: '牛 (bò)',
        components: [{ char: '牛', meaning: 'bò' }, { char: '勿', meaning: 'chớ/đừng' }],
        mnemonic: 'Đừng (勿) coi con bò (牛) là một đồ vật (物) vô tri.',
        exampleSentences: [
            { jp: '食べ物', vn: 'Đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
            { jp: '飲み物', vn: 'Đồ uống.', furigana: [{ kanji: '飲', reading: 'の' }, { kanji: '物', reading: 'もの' }] },
            { jp: '買い物', vn: 'Mua sắm.', furigana: [{ kanji: '買', reading: 'か' }, { kanji: '物', reading: 'もの' }] },
            { jp: '荷物', vn: 'Hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }] },
            { jp: '動物', vn: 'Động vật.', furigana: [{ kanji: '動物', reading: 'どうぶつ' }] }
        ]
    },
    '金': {
        kanji: '金', onyomi: 'キン', kunyomi: 'かね', meaning: 'Vàng, tiền', strokes: 8, jlpt: 'N5',
        radicals: '金 (vàng)',
        components: [{ char: '金', meaning: 'vàng' }],
        mnemonic: 'Người ta (人) (biến đổi thành mái nhà) cất giấu vàng (trong đất).',
        exampleSentences: [
            { jp: 'お金があります。', vn: 'Có tiền.', furigana: [{ kanji: '金', reading: 'かね' }] },
            { jp: '金曜日', vn: 'Thứ sáu.', furigana: [{ kanji: '金曜日', reading: 'きんようび' }] },
            { jp: '貯金します。', vn: 'Tiết kiệm tiền.', furigana: [{ kanji: '貯金', reading: 'ちょきん' }] },
            { jp: '現金', vn: 'Tiền mặt.', furigana: [{ kanji: '現金', reading: 'げんきん' }] },
            { jp: '金持ち', vn: 'Người giàu.', furigana: [{ kanji: '金持', reading: 'かねも' }] }
        ]
    },
    '旅': {
        kanji: '旅', onyomi: 'リョ', kunyomi: 'たび', meaning: 'Du lịch', strokes: 10, jlpt: 'N4',
        radicals: '方 (phương)',
        components: [{ char: '方', meaning: 'phương hướng' }, { char: '人', meaning: 'người' }], // Simplified components
        mnemonic: 'Người (人) đi về phương (方) xa để du lịch.',
        exampleSentences: [
            { jp: '旅行します。', vn: 'Đi du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }] },
            { jp: '一人旅', vn: 'Du lịch một mình.', furigana: [{ kanji: '一人旅', reading: 'ひとりたび' }] },
            { jp: '旅費', vn: 'Phí du lịch.', furigana: [{ kanji: '旅費', reading: 'りょひ' }] },
            { jp: '旅館', vn: 'Nhà trọ kiểu Nhật.', furigana: [{ kanji: '旅館', reading: 'りょかん' }] },
            { jp: '旅に出ます。', vn: 'Lên đường (đi du lịch).', furigana: [{ kanji: '旅', reading: 'たび' }, { kanji: '出', reading: 'で' }] }
        ]
    },
    '行': {
        kanji: '行', onyomi: 'コウ', kunyomi: 'い.く', meaning: 'Đi, tiến hành', strokes: 6, jlpt: 'N5',
        radicals: '行 (đi)',
        components: [{ char: '行', meaning: 'đi' }],
        mnemonic: 'Hình ảnh ngã tư đường.',
        exampleSentences: [
            { jp: '学校へ行きます。', vn: 'Đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう' }, { kanji: '行', reading: 'い' }] },
            { jp: '旅行', vn: 'Du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }] },
            { jp: '行事', vn: 'Sự kiện/Lễ hội.', furigana: [{ kanji: '行事', reading: 'ぎょうじ' }] },
            { jp: '銀行', vn: 'Ngân hàng.', furigana: [{ kanji: '銀行', reading: 'ぎんこう' }] },
            { jp: '飛行機', vn: 'Máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき' }] }
        ]
    }
};

const lesson7Words = {
    'きります': ['切'],
    'おくります': ['送'],
    'かします': ['貸'],
    'かります': ['借'],
    'おしえます': ['教'],
    'ならいます': ['習'],
    'て': ['手'],
    'かみ': ['紙'],
    'はな': ['花'],
    'ちち': ['父'],
    'はは': ['母'],
    'にもつ': ['荷', '物'],
    'おかね': ['金'],
    'りょこう': ['旅', '行']
};

const lines = content.split('\n');
const lesson7StartPattern = /const lesson7Data: LessonDetail = \{/;
const lesson8StartPattern = /const lesson8Data: LessonDetail = \{/;
let inLesson7 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson7StartPattern.test(line)) {
        inLesson7 = true;
    }
    if (lesson8StartPattern.test(line)) {
        inLesson7 = false;
    }

    if (inLesson7 && /vocabulary: \[/.test(line)) {
        inVocab = true;
    }
    if (inLesson7 && /^\s{2}\],?$/.test(line)) {
        inVocab = false;
    }

    if (inLesson7 && inVocab) {
        const match = line.match(/word: '([^']+)'/);
        if (match) {
            const word = match[1];
            if (lesson7Words[word]) {
                // Construct kanjiDetails
                const kanjiKeys = lesson7Words[word];
                const detailsList = kanjiKeys.map(key => kanjiDB[key]).filter(x => x);

                if (detailsList.length > 0) {
                    // Check if key exists already? Assuming simple overwrite/inject
                    const jsonStr = JSON.stringify(detailsList, null, 10).replace(/\n/g, '\n      ');
                    // We need to inject `kanjiDetails: ...`
                    // Logic: remove existing kanjiDetails if any (simple regex replace won't work well if multi-line).
                    // But here, we assume there IS NO kanjiDetails or it's on the same line if simple. 
                    // Actually, if it's multi-line, it's hard to parse with regex.
                    // However, for this task, I assume the format is compact or I can append it.
                    // Previous steps appended properties.
                    // BUT `kanjiDetails` is a complex object.
                    // Let's rely on standard append: replace `},` with `, kanjiDetails: ... },` 
                    // Check if `kanjiDetails` already exists to avoid duplication?
                    // The previous scripts used `includes('examples:')`. 
                    // Here I should check `includes('kanjiDetails:')`.

                    if (!line.includes('kanjiDetails:')) {
                        const lineWithoutClosing = line.trim().replace(/},?$/, '').replace(/\}$/, '');
                        const newLine = lineWithoutClosing + `, kanjiDetails: ${jsonStr} },`;
                        // Collapse the JSON to be more compact or valid JS object string? 
                        // JSON.stringify is strict JSON "key". JS object keys don't need quotes usually but it's fine.
                        lines[i] = newLine;
                        console.log(`Updated ${word}`);
                    }
                }
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Update complete.');
