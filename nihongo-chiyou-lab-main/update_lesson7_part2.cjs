const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const vocabularyUpdates = {
    'かします': [
        { jp: '友達に本を貸します。', vn: 'Cho bạn mượn sách.', furigana: [{ kanji: '友達', reading: 'ともだち' }, { kanji: '本', reading: 'ほん' }, { kanji: '貸', reading: 'か' }] },
        { jp: 'お金を貸します。', vn: 'Cho vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '貸', reading: 'か' }] },
        { jp: '消しゴムを貸します。', vn: 'Cho mượn tẩy.', furigana: [{ kanji: '消', reading: 'け' }, { kanji: '貸', reading: 'か' }] },
        { jp: '傘を貸します。', vn: 'Cho mượn ô.', furigana: [{ kanji: '傘', reading: 'かさ' }, { kanji: '貸', reading: 'か' }] },
        { jp: '自転車を貸します。', vn: 'Cho mượn xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ' }, { kanji: '貸', reading: 'か' }] },
        { jp: 'ペンを貸します。', vn: 'Cho mượn bút.', furigana: [{ kanji: '貸', reading: 'か' }] }
    ],
    'かります': [
        { jp: '友達にお金を借ります。', vn: 'Vay tiền của bạn.', furigana: [{ kanji: '友達', reading: 'ともだち' }, { kanji: '金', reading: 'かね' }, { kanji: '借', reading: 'か' }] },
        { jp: '図書館で本を借ります。', vn: 'Mượn sách ở thư viện.', furigana: [{ kanji: '図書館', reading: 'としょかん' }, { kanji: '本', reading: 'ほん' }, { kanji: '借', reading: 'か' }] },
        { jp: '銀行からお金を借ります。', vn: 'Vay tiền từ ngân hàng.', furigana: [{ kanji: '銀行', reading: 'ぎんこう' }, { kanji: '金', reading: 'かね' }, { kanji: '借', reading: 'か' }] },
        { jp: 'カリナさんにCDを借りました。', vn: 'Mượn CD từ chị Karina.', furigana: [{ kanji: '借', reading: 'か' }] },
        { jp: 'トイレを借ります。', vn: 'Mượn (đi nhờ) nhà vệ sinh.', furigana: [{ kanji: '借', reading: 'か' }] },
        { jp: '電話を借ります。', vn: 'Mượn điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ' }, { kanji: '借', reading: 'か' }] }
    ],
    'おしえます': [
        { jp: '英語を教えます。', vn: 'Dạy tiếng Anh.', furigana: [{ kanji: '英語', reading: 'えいご' }, { kanji: '教', reading: 'おし' }] },
        { jp: '学生に日本語を教えます。', vn: 'Dạy tiếng Nhật cho sinh viên.', furigana: [{ kanji: '学生', reading: 'がくせい' }, { kanji: '日本語', reading: 'にほんご' }, { kanji: '教', reading: 'おし' }] },
        { jp: '住所を教えます。', vn: 'Cho biết địa chỉ.', furigana: [{ kanji: '住所', reading: 'じゅうしょ' }, { kanji: '教', reading: 'おし' }] },
        { jp: '電話番号を教えてください。', vn: 'Hãy cho tôi biết số điện thoại.', furigana: [{ kanji: '電話番号', reading: 'でんわばんごう' }, { kanji: '教', reading: 'おし' }] },
        { jp: '作り方を教えます。', vn: 'Dạy cách làm.', furigana: [{ kanji: '作', reading: 'つく' }, { kanji: '方', reading: 'かた' }, { kanji: '教', reading: 'おし' }] },
        { jp: '弟に数学を教えます。', vn: 'Dạy toán cho em trai.', furigana: [{ kanji: '弟', reading: 'おとうと' }, { kanji: '数学', reading: 'すうがく' }, { kanji: '教', reading: 'おし' }] }
    ],
    'ならいます': [
        { jp: '日本語を習います。', vn: 'Học tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご' }, { kanji: '習', reading: 'なら' }] },
        { jp: '先生に習います。', vn: 'Học từ giáo viên.', furigana: [{ kanji: '先生', reading: 'せんせい' }, { kanji: '習', reading: 'なら' }] },
        { jp: 'ピアノを習います。', vn: 'Học piano.', furigana: [{ kanji: '習', reading: 'なら' }] },
        { jp: '母に料理を習います。', vn: 'Học nấu ăn từ mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '料理', reading: 'りょうり' }, { kanji: '習', reading: 'なら' }] },
        { jp: '運転を習います。', vn: 'Học lái xe.', furigana: [{ kanji: '運転', reading: 'うんてん' }, { kanji: '習', reading: 'なら' }] },
        { jp: '生け花を習います。', vn: 'Học cắm hoa.', furigana: [{ kanji: '生', reading: 'い' }, { kanji: '花', reading: 'ばな' }, { kanji: '習', reading: 'なら' }] }
    ],
    'かけます': [
        { jp: '電話をかけます。', vn: 'Gọi điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ' }] },
        { jp: '友達に電話をかけます。', vn: 'Gọi điện cho bạn.', furigana: [{ kanji: '友達', reading: 'ともだち' }, { kanji: '電話', reading: 'でんわ' }] },
        { jp: '眼鏡をかけます。', vn: 'Đeo kính.', furigana: [{ kanji: '眼鏡', reading: 'めがね' }] },
        { jp: '迷惑をかけます。', vn: 'Làm phiền.', furigana: [{ kanji: '迷惑', reading: 'めいわく' }] },
        { jp: '鍵をかけます。', vn: 'Khóa cửa.', furigana: [{ kanji: '鍵', reading: 'かぎ' }] },
        { jp: '声をかけます。', vn: 'Bắt chuyện.', furigana: [{ kanji: '声', reading: 'こえ' }] }
    ],
    'て': [
        { jp: '手で食べます。', vn: 'Ăn bằng tay.', furigana: [{ kanji: '手', reading: 'て' }, { kanji: '食', reading: 'た' }] },
        { jp: '右の手', vn: 'Tay phải.', furigana: [{ kanji: '右', reading: 'みぎ' }, { kanji: '手', reading: 'て' }] },
        { jp: '左の手', vn: 'Tay trái.', furigana: [{ kanji: '左', reading: 'ひだり' }, { kanji: '手', reading: 'て' }] },
        { jp: '手を洗います。', vn: 'Rửa tay.', furigana: [{ kanji: '手', reading: 'て' }, { kanji: '洗', reading: 'あら' }] },
        { jp: '綺麗な手', vn: 'Tay đẹp.', furigana: [{ kanji: '綺麗', reading: 'きれい' }, { kanji: '手', reading: 'て' }] },
        { jp: '手を繋ぎます。', vn: 'Nắm tay.', furigana: [{ kanji: '手', reading: 'て' }, { kanji: '繋', reading: 'つな' }] }
    ],
    'はし': [
        { jp: '箸で食べます。', vn: 'Ăn bằng đũa.', furigana: [{ kanji: '箸', reading: 'はし' }, { kanji: '食', reading: 'た' }] },
        { jp: '箸を使います。', vn: 'Dùng đũa.', furigana: [{ kanji: '箸', reading: 'はし' }, { kanji: '使', reading: 'つか' }] },
        { jp: '箸置き', vn: 'Cái gác đũa.', furigana: [{ kanji: '箸', reading: 'はし' }, { kanji: '置', reading: 'お' }] },
        { jp: '割り箸', vn: 'Đũa dùng một lần.', furigana: [{ kanji: '割', reading: 'わ' }, { kanji: '箸', reading: 'ばし' }] },
        { jp: '日本の箸', vn: 'Đũa Nhật.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '箸', reading: 'はし' }] },
        { jp: '長い箸', vn: 'Đũa dài.', furigana: [{ kanji: '長', reading: 'なが' }, { kanji: '箸', reading: 'はし' }] }
    ],
    'スプーン': [
        { jp: 'スプーンで食べます。', vn: 'Ăn bằng thìa.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'スプーンをください。', vn: 'Cho tôi cái thìa.', furigana: [] },
        { jp: '大きいスプーン', vn: 'Thìa to.', furigana: [{ kanji: '大', reading: 'おお' }] },
        { jp: '小さいスプーン', vn: 'Thìa nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }] },
        { jp: '銀のスプーン', vn: 'Thìa bạc.', furigana: [{ kanji: '銀', reading: 'ぎん' }] },
        { jp: 'カレーのスプーン', vn: 'Thìa ăn cà ri.', furigana: [] }
    ],
    'ナイフ': [
        { jp: 'ナイフで切ります。', vn: 'Cắt bằng dao.', furigana: [{ kanji: '切', reading: 'き' }] },
        { jp: 'ナイフとフォーク', vn: 'Dao và dĩa.', furigana: [] },
        { jp: '鋭いナイフ', vn: 'Dao sắc.', furigana: [{ kanji: '鋭', reading: 'するど' }] },
        { jp: '果物ナイフ', vn: 'Dao gọt hoa quả.', furigana: [{ kanji: '果物', reading: 'くだもの' }] },
        { jp: 'ナイフを使います。', vn: 'Dùng dao.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: '危険なナイフ', vn: 'Dao nguy hiểm.', furigana: [{ kanji: '危険', reading: 'きけん' }] }
    ],
    'フォーク': [
        { jp: 'フォークで食べます。', vn: 'Ăn bằng dĩa.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'フォークを使います。', vn: 'Dùng dĩa.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: 'プラスチックのフォーク', vn: 'Dĩa nhựa.', furigana: [] },
        { jp: 'フォークを落としました。', vn: 'Làm rơi dĩa.', furigana: [{ kanji: '落', reading: 'お' }] },
        { jp: '新しいフォーク', vn: 'Dĩa mới.', furigana: [{ kanji: '新', reading: 'あたら' }] },
        { jp: 'ナイフとフォークで食べます。', vn: 'Ăn bằng dao và dĩa.', furigana: [{ kanji: '食', reading: 'た' }] }
    ],
    'はさみ': [
        { jp: 'はさみで切ります。', vn: 'Cắt bằng kéo.', furigana: [{ kanji: '切', reading: 'き' }] },
        { jp: '紙をはさみで切ります。', vn: 'Cắt giấy bằng kéo.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] },
        { jp: '大きいはさみ', vn: 'Kéo to.', furigana: [{ kanji: '大', reading: 'おお' }] },
        { jp: 'よく切れるはさみ', vn: 'Kéo sắc (cắt tốt).', furigana: [{ kanji: '切', reading: 'き' }] },
        { jp: 'はさみを貸してください。', vn: 'Cho tôi mượn kéo.', furigana: [{ kanji: '貸', reading: 'か' }] },
        { jp: 'はさみを使います。', vn: 'Dùng kéo.', furigana: [{ kanji: '使', reading: 'つか' }] }
    ],
    'ファクス': [
        { jp: 'ファクスを送ります。', vn: 'Gửi fax.', furigana: [{ kanji: '送', reading: 'おく' }] },
        { jp: 'ファクスで送ります。', vn: 'Gửi bằng fax.', furigana: [{ kanji: '送', reading: 'おく' }] },
        { jp: 'ファクス番号', vn: 'Số fax.', furigana: [{ kanji: '番号', reading: 'ばんごう' }] },
        { jp: 'ファクスが届きました。', vn: 'Fax đã đến.', furigana: [{ kanji: '届', reading: 'とど' }] },
        { jp: '資料をファクスします。', vn: 'Fax tài liệu.', furigana: [{ kanji: '資料', reading: 'しりょう' }] },
        { jp: 'ファクスを使います。', vn: 'Dùng máy fax.', furigana: [{ kanji: '使', reading: 'つか' }] }
    ],
    'ワープロ': [
        { jp: 'ワープロで打ちます。', vn: 'Đánh máy bằng máy đánh chữ.', furigana: [{ kanji: '打', reading: 'う' }] },
        { jp: 'ワープロを使います。', vn: 'Dùng máy đánh chữ.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: '古いワープロ', vn: 'Máy đánh chữ cũ.', furigana: [{ kanji: '古', reading: 'ふる' }] },
        { jp: 'ワープロでレポートを書きます。', vn: 'Viết báo cáo bằng máy đánh chữ.', furigana: [{ kanji: '書', reading: 'か' }] },
        { jp: 'ワープロが壊れました。', vn: 'Máy đánh chữ bị hỏng.', furigana: [{ kanji: '壊', reading: 'こわ' }] },
        { jp: 'これはワープロです。', vn: 'Đây là máy đánh chữ.', furigana: [] }
    ],
    'パソコン': [
        { jp: 'パソコンで映画を見ます。', vn: 'Xem phim bằng máy tính.', furigana: [{ kanji: '映画', reading: 'えいが' }, { kanji: '見', reading: 'み' }] },
        { jp: 'パソコンを使います。', vn: 'Dùng máy tính.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: '新しいパソコン', vn: 'Máy tính mới.', furigana: [{ kanji: '新', reading: 'あたら' }] },
        { jp: '私のパソコン', vn: 'Máy tính của tôi.', furigana: [{ kanji: '私', reading: 'わたし' }] },
        { jp: 'パソコンで仕事をします。', vn: 'Làm việc bằng máy tính.', furigana: [{ kanji: '仕事', reading: 'しごと' }] },
        { jp: 'ノートパソコン', vn: 'Máy tính xách tay.', furigana: [] }
    ],
    'パンチ': [
        { jp: 'パンチで穴を開けます。', vn: 'Đục lỗ bằng cái đục lỗ.', furigana: [{ kanji: '穴', reading: 'あな' }, { kanji: '開', reading: 'あ' }] },
        { jp: 'パンチを貸してください。', vn: 'Cho tôi mượn cái đục lỗ.', furigana: [{ kanji: '貸', reading: 'か' }] },
        { jp: 'パンチを使います。', vn: 'Dùng cái đục lỗ.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: '新しいパンチ', vn: 'Cái đục lỗ mới.', furigana: [{ kanji: '新', reading: 'あたら' }] },
        { jp: '青いパンチ', vn: 'Cái đục lỗ màu xanh.', furigana: [{ kanji: '青', reading: 'あお' }] },
        { jp: 'パンチがありますか。', vn: 'Có cái đục lỗ không?', furigana: [] }
    ],
    'ホッチキス': [
        { jp: 'ホッチキスで留めます。', vn: 'Ghim bằng cái dập ghim.', furigana: [{ kanji: '留', reading: 'と' }] },
        { jp: 'ホッチキスを貸してください。', vn: 'Cho tôi mượn cái dập ghim.', furigana: [{ kanji: '貸', reading: 'か' }] },
        { jp: 'ホッチキスを使います。', vn: 'Dùng cái dập ghim.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: 'ホッチキスの芯', vn: 'Ghim bấm.', furigana: [{ kanji: '芯', reading: 'しん' }] },
        { jp: '小さいホッチキス', vn: 'Cái dập ghim nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }] },
        { jp: 'ホッチキスがありません。', vn: 'Không có cái dập ghim.', furigana: [] }
    ]
};

// Function to find lesson 7 and update vocab
const lesson7StartPattern = /const lesson7Data: LessonDetail = \{/;
const vocabStartPattern = /vocabulary: \[/;
// Use strict check for vocabulary end to avoid matching nested examples array closure
const vocabEndPattern = /^\s{2}\],?$/;

const lines = content.split('\n');
let inLesson7 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson7StartPattern.test(line)) {
        inLesson7 = true;
    }

    if (inLesson7 && vocabStartPattern.test(line)) {
        inVocab = true;
        continue;
    }

    // Check strict end pattern
    if (inVocab && vocabEndPattern.test(line)) {
        inVocab = false;
        inLesson7 = false;
    }

    if (inVocab) {
        const match = line.match(/word: '([^']+)'/);
        if (match) {
            const word = match[1];
            if (line.includes('examples:')) {
                continue;
            }
            if (vocabularyUpdates[word]) {
                const examples = vocabularyUpdates[word];
                const examplesStr = 'examples: ' + JSON.stringify(examples, null, 2).replace(/\n/g, '\n      ');
                const lineWithoutClosing = line.trim().replace(/},?$/, '').replace(/\}$/, '');
                const newLine = lineWithoutClosing + `, ${examplesStr} },`;
                lines[i] = newLine;
                console.log(`Updated ${word}`);
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Update complete.');
