const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
const backupPath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData_backup.ts');

if (!fs.existsSync(backupPath)) {
    console.log("Creating backup...");
    fs.copyFileSync(filePath, backupPath);
}

let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Database of Kanji Details (Merged from L7 and L8 parts)
// We need this to re-inject properly.
const kanjiDB = {
    // Lesson 7
    '切': { kanji: '切', onyomi: 'セツ', kunyomi: 'き.る', meaning: 'Cắt', strokes: 4, jlpt: 'N4', radicals: '刀 (dao)', components: [{ char: '七', meaning: 'số 7' }, { char: '刀', meaning: 'dao' }], mnemonic: 'Dùng dao (刀) cắt làm 7 (七) mảnh.', exampleSentences: [{ jp: '紙を切ります。', vn: 'Cắt giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] }, { jp: '切手を買います。', vn: 'Mua tem.', furigana: [{ kanji: '切手', reading: 'きって' }, { kanji: '買', reading: 'か' }] }, { jp: '親切な人', vn: 'Người tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ' }, { kanji: '人', reading: 'ひと' }] }, { jp: '大切な友達', vn: 'Người bạn quan trọng.', furigana: [{ kanji: '大切', reading: 'たいせつ' }, { kanji: '友達', reading: 'ともだち' }] }, { jp: '電話を切ります。', vn: 'Cắt (cúp) điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ' }, { kanji: '切', reading: 'き' }] }] },
    '送': { kanji: '送', onyomi: 'ソウ', kunyomi: 'おく.る', meaning: 'Gửi, tiễn', strokes: 9, jlpt: 'N4', radicals: '辶 (xước)', components: [{ char: '关', meaning: 'quan (cổng)' }, { char: '辶', meaning: 'di chuyển' }], mnemonic: 'Đi (辶) ra cổng (关) để tiễn đưa/gửi đồ.', exampleSentences: [{ jp: '手紙を送ります。', vn: 'Gửi thư.', furigana: [{ kanji: '手紙', reading: 'てがみ' }, { kanji: '送', reading: 'おく' }] }] },
    '貸': { kanji: '貸', onyomi: 'タイ', kunyomi: 'か.す', meaning: 'Cho mượn', strokes: 12, jlpt: 'N4', radicals: '貝 (bối - tiền)', components: [{ char: '代', meaning: 'thay thế' }, { char: '貝', meaning: 'tiền' }], mnemonic: 'Lấy tiền (貝) thay (代) cho vật đã cho mượn.', exampleSentences: [{ jp: '本を貸します。', vn: 'Cho mượn sách.', furigana: [{ kanji: '本', reading: 'ほん' }, { kanji: '貸', reading: 'か' }] }] },
    '借': { kanji: '借', onyomi: 'シャク', kunyomi: 'か.りる', meaning: 'Mượn, vay', strokes: 10, jlpt: 'N4', radicals: '人 (người)', components: [{ char: '人', meaning: 'người' }, { char: '昔', meaning: 'xưa' }], mnemonic: 'Người (人) xưa (昔) đã đi vay mượn rồi.', exampleSentences: [{ jp: 'お金を借ります。', vn: 'Vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '借', reading: 'か' }] }] },
    '教': { kanji: '教', onyomi: 'キョウ', kunyomi: 'おし.える', meaning: 'Dạy', strokes: 11, jlpt: 'N4', radicals: '攴 (đánh khẽ)', components: [{ char: '孝', meaning: 'hiếu thảo' }, { char: '攴', meaning: 'đánh khẽ' }], mnemonic: 'Dạy dỗ con cái phải hiếu thảo (孝),  nếu không thì đánh khẽ (攴).', exampleSentences: [{ jp: '日本語を教えます。', vn: 'Dạy tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご' }, { kanji: '教', reading: 'おし' }] }] },
    '習': { kanji: '習', onyomi: 'シュウ', kunyomi: 'なら.う', meaning: 'Học tập', strokes: 11, jlpt: 'N4', radicals: '羽 (lông vũ)', components: [{ char: '羽', meaning: 'cánh/lông vũ' }, { char: '白', meaning: 'trắng' }], mnemonic: 'Chim non tập vỗ đôi cánh (羽) màu trắng (白) để bay.', exampleSentences: [{ jp: 'ピアノを習います。', vn: 'Học đàn piano.', furigana: [{ kanji: '習', reading: 'なら' }] }] },
    '手': { kanji: '手', onyomi: 'シュ', kunyomi: 'て', meaning: 'Tay', strokes: 4, jlpt: 'N5', radicals: '手 (tay)', components: [{ char: '手', meaning: 'tay' }], mnemonic: 'Hình dáng bàn tay xòe ra.', exampleSentences: [{ jp: '手がきれいです。', vn: 'Tay đẹp/sạch.', furigana: [{ kanji: '手', reading: 'て' }] }] },
    '紙': { kanji: '紙', onyomi: 'シ', kunyomi: 'かみ', meaning: 'Giấy', strokes: 10, jlpt: 'N4', radicals: '糸 (sợi chỉ)', components: [{ char: '糸', meaning: 'sợi chỉ' }, { char: '氏', meaning: 'họ/nhánh' }], mnemonic: 'Làm giấy (紙) từ các sợi (糸) cây của dòng họ (氏).', exampleSentences: [{ jp: '紙を切ります。', vn: 'Cắt giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] }] },
    '花': { kanji: '花', onyomi: 'カ', kunyomi: 'はな', meaning: 'Hoa', strokes: 7, jlpt: 'N4', radicals: '艸 (cỏ)', components: [{ char: '艹', meaning: 'cỏ/thảo' }, { char: '化', meaning: 'hóa/biến đổi' }], mnemonic: 'Cỏ (艹) biến hóa (化) thành hoa (花).', exampleSentences: [{ jp: '花をあげます。', vn: 'Tặng hoa.', furigana: [{ kanji: '花', reading: 'はな' }] }] },
    '父': { kanji: '父', onyomi: 'フ', kunyomi: 'ちち', meaning: 'Bố', strokes: 4, jlpt: 'N5', radicals: '父 (bố)', components: [{ char: '父', meaning: 'bố' }], mnemonic: 'Hình ảnh người cha cầm roi dạy con.', exampleSentences: [{ jp: '私の父は医者です。', vn: 'Bố tôi là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '父', reading: 'ちち' }] }] },
    '母': { kanji: '母', onyomi: 'ボ', kunyomi: 'はは', meaning: 'Mẹ', strokes: 5, jlpt: 'N5', radicals: '毋 (chớ/đừng)', components: [{ char: '母', meaning: 'mẹ' }], mnemonic: 'Hình ảnh người mẹ đang cho con bú.', exampleSentences: [{ jp: '私の母は先生です。', vn: 'Mẹ tôi là giáo viên.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '母', reading: 'はは' }] }] },
    '荷': { kanji: '荷', onyomi: 'カ', kunyomi: 'に', meaning: 'Hành lý', strokes: 10, jlpt: 'N4', radicals: '艸 (cỏ)', components: [{ char: '艹', meaning: 'cỏ' }, { char: '何', meaning: 'cái gì' }], mnemonic: 'Cái gì (何) để trên cỏ (艹)? Là hành lý (荷).', exampleSentences: [{ jp: '荷物を送ります。', vn: 'Gửi hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '送', reading: 'おく' }] }] },
    '物': { kanji: '物', onyomi: 'ブツ', kunyomi: 'もの', meaning: 'Vật', strokes: 8, jlpt: 'N5', radicals: '牛 (bò)', components: [{ char: '牛', meaning: 'bò' }, { char: '勿', meaning: 'chớ' }], mnemonic: 'Đừng (勿) coi con bò (牛) là một đồ vật (物) vô tri.', exampleSentences: [{ jp: '食べ物', vn: 'Đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] }] },
    '金': { kanji: '金', onyomi: 'キン', kunyomi: 'かね', meaning: 'Vàng, tiền', strokes: 8, jlpt: 'N5', radicals: '金 (vàng)', components: [{ char: '金', meaning: 'vàng' }], mnemonic: 'Người ta (人) cất giấu vàng (trong đất).', exampleSentences: [{ jp: 'お金があります。', vn: 'Có tiền.', furigana: [{ kanji: '金', reading: 'かね' }] }] },
    '旅': { kanji: '旅', onyomi: 'リョ', kunyomi: 'たび', meaning: 'Du lịch', strokes: 10, jlpt: 'N4', radicals: '方 (phương)', components: [{ char: '方', meaning: 'phương' }, { char: '人', meaning: 'người' }], mnemonic: 'Người (人) đi về phương (方) xa để du lịch.', exampleSentences: [{ jp: '旅行します。', vn: 'Đi du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }] }] },
    '行': { kanji: '行', onyomi: 'コウ', kunyomi: 'い.く', meaning: 'Đi', strokes: 6, jlpt: 'N5', radicals: '行 (đi)', components: [{ char: '行', meaning: 'đi' }], mnemonic: 'Hình ảnh ngã tư đường.', exampleSentences: [{ jp: '学校へ行きます。', vn: 'Đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう' }, { kanji: '行', reading: 'い' }] }] },

    // Lesson 8 Adjectives
    '静': { kanji: '静', onyomi: 'セイ', kunyomi: 'しず.か', meaning: 'Yên tĩnh', strokes: 14, jlpt: 'N4', radicals: '青', components: [{ char: '青', meaning: 'xanh' }, { char: '争', meaning: 'tranh' }], mnemonic: 'Khi màu xanh ngừng tranh giành thì yên tĩnh.', exampleSentences: [{ jp: '静かな町', vn: 'Thành phố yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '町', reading: 'まち' }] }] },
    '有': { kanji: '有', onyomi: 'ユウ', kunyomi: 'あ.る', meaning: 'Có', strokes: 6, jlpt: 'N4', radicals: '月', components: [{ char: '', meaning: 'tay trái' }, { char: '月', meaning: 'trăng' }], mnemonic: 'Tay cầm miếng thịt là có đồ ăn.', exampleSentences: [{ jp: '有名な人', vn: 'Người nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }] }] },
    '名': { kanji: '名', onyomi: 'メイ', kunyomi: 'な', meaning: 'Tên', strokes: 6, jlpt: 'N5', radicals: '口', components: [{ char: '夕', meaning: 'chiều' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Buổi tối phải dùng miệng xưng tên.', exampleSentences: [{ jp: '名前', vn: 'Tên.', furigana: [{ kanji: '名前', reading: 'なまえ' }] }] },
    '親': { kanji: '親', onyomi: 'シン', kunyomi: 'おや', meaning: 'Cha mẹ, thân thiết', strokes: 16, jlpt: 'N4', radicals: '見', components: [{ char: '立', meaning: 'đứng' }, { char: '木', meaning: 'cây' }, { char: '見', meaning: 'nhìn' }], mnemonic: 'Cha mẹ đứng trên cây nhìn con.', exampleSentences: [{ jp: '親切な人', vn: 'Người tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ' }] }] },
    '元': { kanji: '元', onyomi: 'ゲン', kunyomi: 'もと', meaning: 'Nguồn gốc', strokes: 4, jlpt: 'N5', radicals: '儿', components: [{ char: '二', meaning: 'hai' }, { char: '儿', meaning: 'chân' }], mnemonic: 'Hai người chạy đua xem ai khỏe.', exampleSentences: [{ jp: '元気です。', vn: 'Khỏe mạnh.', furigana: [{ kanji: '元気', reading: 'げんき' }] }] },
    '気': { kanji: '気', onyomi: 'キ', kunyomi: '', meaning: 'Khí', strokes: 6, jlpt: 'N5', radicals: '气', components: [{ char: '气', meaning: 'khí' }, { char: 'メ', meaning: 'chéo' }], mnemonic: 'Khí vô hình.', exampleSentences: [{ jp: '元気', vn: 'Khỏe.', furigana: [{ kanji: '元気', reading: 'げんき' }] }] },
    '暇': { kanji: '暇', onyomi: 'カ', kunyomi: 'ひま', meaning: 'Rảnh rỗi', strokes: 13, jlpt: 'N4', radicals: '日', components: [{ char: '日', meaning: 'ngày' }, { char: '叺', meaning: 'giả' }], mnemonic: 'Ngày nghỉ là ngày rảnh.', exampleSentences: [{ jp: '暇な時', vn: 'Khi rảnh.', furigana: [{ kanji: '暇', reading: 'ひま' }] }] },
    '便': { kanji: '便', onyomi: 'ベン', kunyomi: 'たよ.り', meaning: 'Tiện lợi', strokes: 9, jlpt: 'N4', radicals: '人', components: [{ char: 'イ', meaning: 'người' }, { char: '更', meaning: 'đổi' }], mnemonic: 'Người thay đổi cách làm cho tiện.', exampleSentences: [{ jp: '便利です。', vn: 'Tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }] }] },
    '利': { kanji: '利', onyomi: 'リ', kunyomi: 'き.く', meaning: 'Lợi ích', strokes: 7, jlpt: 'N4', radicals: '刀', components: [{ char: '禾', meaning: 'lúa' }, { char: '刂', meaning: 'dao' }], mnemonic: 'Dùng dao gặt lúa thu lợi.', exampleSentences: [{ jp: '便利', vn: 'Tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }] }] },
    '大': { kanji: '大', onyomi: 'ダイ', kunyomi: 'おお.きい', meaning: 'To lớn', strokes: 3, jlpt: 'N5', radicals: '大', components: [{ char: '大', meaning: 'to' }], mnemonic: 'Hình người dang tay.', exampleSentences: [{ jp: '大きい家', vn: 'Nhà to.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '家', reading: 'いえ' }] }] },
    '小': { kanji: '小', onyomi: 'ショウ', kunyomi: 'ちい.さい', meaning: 'Nhỏ', strokes: 3, jlpt: 'N5', radicals: '小', components: [{ char: '小', meaning: 'nhỏ' }], mnemonic: 'Hạt cát nhỏ chia ra.', exampleSentences: [{ jp: '小さい犬', vn: 'Chó nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '犬', reading: 'いぬ' }] }] },
    '新': { kanji: '新', onyomi: 'シン', kunyomi: 'あたら.しい', meaning: 'Mới', strokes: 13, jlpt: 'N5', radicals: '斤', components: [{ char: '立', meaning: 'đứng' }, { char: '木', meaning: 'cây' }, { char: '斤', meaning: 'rìu' }], mnemonic: 'Đứng bên cây dùng rìu làm nhà mới.', exampleSentences: [{ jp: '新しい車', vn: 'Xe mới.', furigana: [{ kanji: '新', reading: 'あたら' }] }] },
    '古': { kanji: '古', onyomi: 'コ', kunyomi: 'ふる.い', meaning: 'Cũ', strokes: 5, jlpt: 'N5', radicals: '口', components: [{ char: '十', meaning: '10' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Chuyện qua 10 miệng là chuyện cổ.', exampleSentences: [{ jp: '古い本', vn: 'Sách cũ.', furigana: [{ kanji: '古', reading: 'ふる' }] }] },
    '悪': { kanji: '悪', onyomi: 'アク', kunyomi: 'わる.い', meaning: 'Xấu', strokes: 11, jlpt: 'N4', radicals: '心', components: [{ char: '亜', meaning: 'á' }, { char: '心', meaning: 'tâm' }], mnemonic: 'Tâm đặt sai chỗ là xấu.', exampleSentences: [{ jp: '天気が悪いです。', vn: 'Thời tiết xấu.', furigana: [{ kanji: '悪', reading: 'わる' }] }] },
    '暑': { kanji: '暑', onyomi: 'ショ', kunyomi: 'あつ.い', meaning: 'Nóng', strokes: 12, jlpt: 'N4', radicals: '日', components: [{ char: '日', meaning: 'trời' }, { char: '者', meaning: 'người' }], mnemonic: 'Người đứng dưới trời nắng thì nóng.', exampleSentences: [{ jp: '今日は暑いです。', vn: 'Hôm nay nóng.', furigana: [{ kanji: '暑', reading: 'あつ' }] }] },
    '熱': { kanji: '熱', onyomi: 'ネツ', kunyomi: 'あつ.い', meaning: 'Nóng (vật)', strokes: 15, jlpt: 'N4', radicals: '火', components: [{ char: '勢', meaning: 'thế' }, { char: '灬', meaning: 'hỏa' }], mnemonic: 'Đốt lửa tạo nhiệt.', exampleSentences: [{ jp: '熱いコーヒー', vn: 'Cafe nóng.', furigana: [{ kanji: '熱', reading: 'あつ' }] }] },
    '寒': { kanji: '寒', onyomi: 'カン', kunyomi: 'さむ.い', meaning: 'Lạnh', strokes: 12, jlpt: 'N4', radicals: '宀', components: [{ char: '宀', meaning: 'nhà' }, { char: '井', meaning: 'giếng' }, { char: '冫', meaning: 'băng' }], mnemonic: 'Trong nhà nước giếng đóng băng thì lạnh.', exampleSentences: [{ jp: '寒いです。', vn: 'Lạnh.', furigana: [{ kanji: '寒', reading: 'さむ' }] }] },
    '冷': { kanji: '冷', onyomi: 'レイ', kunyomi: 'つめ.たい', meaning: 'Lạnh (vật)', strokes: 7, jlpt: 'N4', radicals: '冫', components: [{ char: '冫', meaning: 'băng' }, { char: '令', meaning: 'lệnh' }], mnemonic: 'Ra lệnh làm đóng băng.', exampleSentences: [{ jp: '冷たい水', vn: 'Nước lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }] }] },
    '難': { kanji: '難', onyomi: 'ナン', kunyomi: 'むずか.しい', meaning: 'Khó', strokes: 18, jlpt: 'N3', radicals: '隹', components: [{ char: '', meaning: 'hán' }, { char: '隹', meaning: 'chim' }], mnemonic: 'Bắt chim khi hạn hán thì khó.', exampleSentences: [{ jp: '難しいです。', vn: 'Khó.', furigana: [{ kanji: '難', reading: 'むずか' }] }] },
    '易': { kanji: '易', onyomi: 'エキ', kunyomi: 'やさ.しい', meaning: 'Dễ', strokes: 8, jlpt: 'N4', radicals: '日', components: [{ char: '日', meaning: 'trời' }, { char: '勿', meaning: 'chớ' }], mnemonic: 'Mặt trời mọc thì chớ lo, mọi việc sẽ dễ.', exampleSentences: [{ jp: '易しい問題', vn: 'Vấn đề dễ.', furigana: [{ kanji: '易', reading: 'やさ' }] }] },
    '高': { kanji: '高', onyomi: 'コウ', kunyomi: 'たか.い', meaning: 'Cao', strokes: 10, jlpt: 'N5', radicals: '高', components: [{ char: '高', meaning: 'cao' }], mnemonic: 'Tòa tháp cao.', exampleSentences: [{ jp: '高い山', vn: 'Núi cao.', furigana: [{ kanji: '高', reading: 'たか' }] }] },
    '安': { kanji: '安', onyomi: 'アン', kunyomi: 'やす.い', meaning: 'Rẻ', strokes: 6, jlpt: 'N5', radicals: '宀', components: [{ char: '宀', meaning: 'nhà' }, { char: '女', meaning: 'nữ' }], mnemonic: 'Phụ nữ trong nhà thì an tâm.', exampleSentences: [{ jp: '安い車', vn: 'Xe rẻ.', furigana: [{ kanji: '安', reading: 'やす' }] }] },
    '低': { kanji: '低', onyomi: 'テイ', kunyomi: 'ひく.い', meaning: 'Thấp', strokes: 7, jlpt: 'N4', radicals: '人', components: [{ char: 'イ', meaning: 'người' }, { char: '氏', meaning: 'giấy' }, { char: '一', meaning: 'đất' }], mnemonic: 'Người cúi nhặt giấy dưới đất.', exampleSentences: [{ jp: '低い山', vn: 'Núi thấp.', furigana: [{ kanji: '低', reading: 'ひく' }] }] },
    '忙': { kanji: '忙', onyomi: 'ボウ', kunyomi: 'いそが.しい', meaning: 'Bận', strokes: 6, jlpt: 'N4', radicals: '心', components: [{ char: '忄', meaning: 'tâm' }, { char: '亡', meaning: 'vong' }], mnemonic: 'Tâm chết vì quá bận.', exampleSentences: [{ jp: '忙しいです。', vn: 'Bận.', furigana: [{ kanji: '忙', reading: 'いそが' }] }] },
    '楽': { kanji: '楽', onyomi: 'ラク', kunyomi: 'たの.しい', meaning: 'Vui', strokes: 13, jlpt: 'N4', radicals: '木', components: [{ char: '白', meaning: 'trắng' }, { char: '木', meaning: 'cây' }, { char: '幺', meaning: 'nhỏ' }], mnemonic: 'Cây đàn trắng tâu nhạc vui.', exampleSentences: [{ jp: '楽しい生活', vn: 'Cuộc sống vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }] }] },
    '白': { kanji: '白', onyomi: 'ハク', kunyomi: 'しろ.い', meaning: 'Trắng', strokes: 5, jlpt: 'N5', radicals: '白', components: [{ char: '白', meaning: 'trắng' }], mnemonic: 'Mặt trời tỏa sáng trắng.', exampleSentences: [{ jp: '白いシャツ', vn: 'Áo trắng.', furigana: [{ kanji: '白', reading: 'しろ' }] }] },
    '黒': { kanji: '黒', onyomi: 'コク', kunyomi: 'くろ.い', meaning: 'Đen', strokes: 11, jlpt: 'N5', radicals: '黒', components: [{ char: '里', meaning: 'làng' }, { char: '灬', meaning: 'hỏa' }], mnemonic: 'Làng bị cháy đen.', exampleSentences: [{ jp: '黒い髪', vn: 'Tóc đen.', furigana: [{ kanji: '黒', reading: 'くろ' }] }] },
    '赤': { kanji: '赤', onyomi: 'セキ', kunyomi: 'あか.い', meaning: 'Đỏ', strokes: 7, jlpt: 'N5', radicals: '赤', components: [{ char: '土', meaning: 'đất' }, { char: '火', meaning: 'lửa' }], mnemonic: 'Lửa trên đất màu đỏ.', exampleSentences: [{ jp: '赤い花', vn: 'Hoa đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }] }] },
    '青': { kanji: '青', onyomi: 'セイ', kunyomi: 'あお.い', meaning: 'Xanh', strokes: 8, jlpt: 'N5', radicals: '青', components: [{ char: '生', meaning: 'sinh' }, { char: '月', meaning: 'trăng' }], mnemonic: 'Trăng sinh ánh sáng xanh.', exampleSentences: [{ jp: '青い海', vn: 'Biển xanh.', furigana: [{ kanji: '青', reading: 'あお' }] }] },
    '面': { kanji: '面', onyomi: 'メン', kunyomi: 'おも', meaning: 'Mặt', strokes: 9, jlpt: 'N3', radicals: '面', components: [{ char: '面', meaning: 'mặt' }], mnemonic: 'Khuôn mặt.', exampleSentences: [{ jp: '面白い', vn: 'Thú vị.', furigana: [{ kanji: '面', reading: 'おも' }] }] },

    // Lesson 8 Nouns
    '桜': { kanji: '桜', onyomi: 'オウ', kunyomi: 'さくら', meaning: 'Hoa anh đào', strokes: 10, jlpt: 'N3', radicals: '木', components: [{ char: '木', meaning: 'cây' }, { char: 'ツ', meaning: 'hạt' }, { char: '女', meaning: 'nữ' }], mnemonic: 'Cây anh đào đẹp như người nữ.', exampleSentences: [{ jp: '桜が咲きます。', vn: 'Hoa anh đào nở.', furigana: [{ kanji: '桜', reading: 'さくら' }] }] },
    '山': { kanji: '山', onyomi: 'サン', kunyomi: 'やま', meaning: 'Núi', strokes: 3, jlpt: 'N5', radicals: '山', components: [{ char: '山', meaning: 'núi' }], mnemonic: 'Hình núi.', exampleSentences: [{ jp: '富士山', vn: 'úi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] }] },
    '町': { kanji: '町', onyomi: 'チョウ', kunyomi: 'まち', meaning: 'Phố', strokes: 7, jlpt: 'N4', radicals: '田', components: [{ char: '田', meaning: 'ruộng' }, { char: '丁', meaning: 'khu' }], mnemonic: 'Khu vực cạnh ruộng là phố.', exampleSentences: [{ jp: '賑やかな町', vn: 'Phố náo nhiệt.', furigana: [{ kanji: '町', reading: 'まち' }] }] },
    '車': { kanji: '車', onyomi: 'シャ', kunyomi: 'くるま', meaning: 'Xe', strokes: 7, jlpt: 'N5', radicals: '車', components: [{ char: '車', meaning: 'xe' }], mnemonic: 'Hình xe.', exampleSentences: [{ jp: '自動車', vn: 'Ô tô.', furigana: [{ kanji: '自動車', reading: 'じどうしゃ' }] }] },
    '所': { kanji: '所', onyomi: 'ショ', kunyomi: 'ところ', meaning: 'Nơi chốn', strokes: 8, jlpt: 'N4', radicals: '戸', components: [{ char: '戸', meaning: 'cửa' }, { char: '斤', meaning: 'rìu' }], mnemonic: 'Chỗ để rìu sau cửa.', exampleSentences: [{ jp: '場所', vn: 'Địa điểm.', furigana: [{ kanji: '場所', reading: 'ばしょ' }] }] },
    '寮': { kanji: '寮', onyomi: 'リョウ', kunyomi: '', meaning: 'Ký túc xá', strokes: 15, jlpt: 'N3', radicals: '宀', components: [{ char: '宀', meaning: 'nhà' }, { char: '尞', meaning: 'liêu' }], mnemonic: 'Nhà lớn cho nhiều người.', exampleSentences: [{ jp: '学生寮', vn: 'KTX sinh viên.', furigana: [{ kanji: '学生寮', reading: 'がくせいりょう' }] }] },
    '勉': { kanji: '勉', onyomi: 'ベン', kunyomi: 'つと.める', meaning: 'Cố gắng', strokes: 10, jlpt: 'N4', radicals: '力', components: [{ char: '免', meaning: 'miễn' }, { char: '力', meaning: 'lực' }], mnemonic: 'Dùng lực để làm việc.', exampleSentences: [{ jp: '勉強', vn: 'Học.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }] }] },
    '強': { kanji: '強', onyomi: 'キョウ', kunyomi: 'つよ.い', meaning: 'Mạnh', strokes: 11, jlpt: 'N4', radicals: '弓', components: [{ char: '弓', meaning: 'cung' }, { char: 'ム', meaning: 'tư' }, { char: '虫', meaning: 'sâu' }], mnemonic: 'Cung bắn sâu mạnh.', exampleSentences: [{ jp: '強い風', vn: 'Gió mạnh.', furigana: [{ kanji: '強', reading: 'つよ' }] }] },
    '活': { kanji: '活', onyomi: 'カツ', kunyomi: '', meaning: 'Hoạt', strokes: 9, jlpt: 'N3', radicals: '水', components: [{ char: '氵', meaning: 'nước' }, { char: '舌', meaning: 'lưỡi' }], mnemonic: 'Lưỡi có nước thì hoạt động tốt.', exampleSentences: [{ jp: '生活', vn: 'Cuộc sống.', furigana: [{ kanji: '生活', reading: 'せいかつ' }] }] },
    '仕': { kanji: '仕', onyomi: 'シ', kunyomi: 'つか.える', meaning: 'Phục vụ', strokes: 5, jlpt: 'N4', radicals: '人', components: [{ char: 'イ', meaning: 'người' }, { char: '士', meaning: 'sĩ' }], mnemonic: 'Sĩ quan phục vụ nước.', exampleSentences: [{ jp: '仕事', vn: 'Công việc.', furigana: [{ kanji: '仕事', reading: 'しごと' }] }] },
    '事': { kanji: '事', onyomi: 'ジ', kunyomi: 'こと', meaning: 'Việc', strokes: 8, jlpt: 'N4', radicals: '亅', components: [{ char: '口', meaning: 'miệng' }, { char: '亅', meaning: 'quyết' }], mnemonic: 'Miệng quyết định việc.', exampleSentences: [{ jp: '仕事', vn: 'Công việc.', furigana: [{ kanji: '仕事', reading: 'しごと' }] }] },
    '富': { kanji: '富', onyomi: 'フ', kunyomi: 'とみ', meaning: 'Phú', strokes: 12, jlpt: 'N3', radicals: '宀', components: [{ char: '宀', meaning: 'nhà' }, { char: '畐', meaning: 'đầy' }], mnemonic: 'Nhà đầy của cải.', exampleSentences: [{ jp: '富士山', vn: 'Núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] }] },
    '士': { kanji: '士', onyomi: 'シ', kunyomi: '', meaning: 'Sĩ', strokes: 3, jlpt: 'N4', radicals: '士', components: [{ char: '士', meaning: 'sĩ' }], mnemonic: 'Người đứng thẳng.', exampleSentences: [{ jp: '富士山', vn: 'Núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] }] },
    '琵': { kanji: '琵', onyomi: 'ビ', kunyomi: '', meaning: 'Tỳ', strokes: 12, jlpt: 'N1', radicals: '比', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '琶': { kanji: '琶', onyomi: 'ワ', kunyomi: '', meaning: 'Bà', strokes: 12, jlpt: 'N1', radicals: '巴', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '湖': { kanji: '湖', onyomi: 'コ', kunyomi: 'みずうみ', meaning: 'Hồ', strokes: 12, jlpt: 'N3', radicals: '水', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '閣': { kanji: '閣', onyomi: 'カク', kunyomi: '', meaning: 'Các', strokes: 14, jlpt: 'N2', radicals: '門', exampleSentences: [{ jp: '金閣寺', vn: 'Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] }] },
    '寺': { kanji: '寺', onyomi: 'ジ', kunyomi: 'てら', meaning: 'Chùa', strokes: 6, jlpt: 'N3', radicals: '寸', exampleSentences: [{ jp: '金閣寺', vn: 'Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] }] }
};

const wordToKanjiMap = {
    // Lesson 7
    'きります': '切', 'おくります': '送', 'かします': '貸', 'かります': '借', 'おしえます': '教', 'ならいます': '習',
    'て': '手', 'かみ': '紙', 'はな': '花', 'ちち': '父', 'はは': '母', 'にもつ': ['荷', '物'], 'おかね': '金', 'りょこう': ['旅', '行'],
    // Lesson 8 Adjectives
    'しずか [な]': '静', 'ゆうめい [な]': ['有', '名'], 'しんせつ [な]': ['親', '切'], 'げんき [な]': ['元', '気'], 'ひま [な]': '暇',
    'べんり [な]': ['便', '利'], 'おおきい': '大', 'ちいさい': '小', 'あたらしい': '新', 'ふるい': '古', 'わるい': '悪',
    'あつい': ['暑', '熱'], 'さむい': '寒', 'つめたい': '冷', 'むずかしい': '難', 'やさしい': '易', 'たかい': '高', 'やすい': '安',
    'ひくい': '低', 'おもしろい': ['面', '白'], 'いそがしい': '忙', 'たのしい': '楽', 'しろい': '白', 'くろい': '黒', 'あかい': '赤', 'あおい': '青',
    // Lesson 8 Nouns
    'さくら': '桜', 'やま': '山', 'まち': '町', 'たべもの': ['食', '物'], 'くるま': '車', 'ところ': '所', 'りょう': '寮',
    'べんきょう': ['勉', '強'], 'せいかつ': ['生', '活'], 'おしごと': ['仕', '事'], 'ふじさん': ['富', '士', '山'], 'びわこ': ['琵', '琶', '湖'], 'きんかくじ': ['金', '閣', '寺']
};

let inLessonGlobal = false;
let currentWordLineIndex = -1;
let currentWord = null;
let vocabObjOpen = false;
let examplesOpen = false;

// Correction Logic
// 1. Scan for lines containing `examples: [, kanjiDetails: [` (Broken)
// 2. Fix them to `examples: [`
// 3. Mark that this word NEEDS kanjiDetails.
// 4. Scan forward to find closing of examples `] },` or `]` then `},`.
// 5. Inject `kanjiDetails` correctly before object closes.

// First pass: Cleanup and Flagging
const wordsToFix = new Set();
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect broken line
    if (line.includes('examples: [, kanjiDetails: [')) {
        console.log(`Found broken line at ${i}: ${line.trim()}`);

        // Extract the word to know what to re-inject
        const match = line.match(/word: '([^']+)'/);
        if (match) {
            const word = match[1];
            wordsToFix.add({ index: i, word: word });
            console.log(`Marked word to fix: ${word}`);
        }

        // Clean line
        // Replace "examples: [, kanjiDetails: [...]" with "examples: ["
        // The original logic was: line + `, kanjiDetails: ...`
        // So we remove everything after `examples: [` that looks like the starting of `kanjiDetails`
        // Note: `examples: [` was already there. We added `, kanjiDetails: [{...` 
        // Wait, line was `{ word: '...', ... examples: [`
        // We appended `, kanjiDetails: [{...`
        // So line became `{ word: '...', ... examples: [, kanjiDetails: [{...`
        // We restore it to `{ word: '...', ... examples: [`

        const cleanLine = line.split(', kanjiDetails: [')[0];
        // But wait, if we split there, we lose the trailing `},` if it was there?
        // No, the original line ended with `examples: [`. 
        // We REPLACED the newline with `, kanjiDetails: ...`.
        // So we should just strip back to `examples: [`.

        lines[i] = cleanLine;
    }
}

// Second pass: Injection
// Iterate again, tracking where we are.
// If we encounter a word that was fixed (or needs fixing), find its end and inject.
// Actually, since we modified `lines` in place, we can continue.

let currentWordToInject = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const match = line.match(/word: '([^']+)'/);
    if (match) {
        currentWordToInject = null;
        const word = match[1];

        // Check if this is one of our target words (either we just cleaned it OR we missed it in cleanup but it needs Kanji)
        // For simplicity, let's just re-evaluate if it needs injection based on wordToKanjiMap
        // But we must ONLY inject if it doesn't have it.
        // And we know we just cleaned the ones that were broken.
        // So we should check `wordToKanjiMap`.

        if (wordToKanjiMap[word]) {
            currentWordToInject = word;
        }
    }

    // Check for closing of examples array or object
    // Pattern: `      ] },` or `      ] }` or just `},`?
    // In minnaData, likely `      ] },`
    if (currentWordToInject && line.trim().startsWith('] },')) {
        // Found the end of vocab item.
        // Inject BEFORE this line? No, this line CLOSES the object `},`
        // We want to insert `kanjiDetails: ...` BEFORE the `}`.
        // So replace `] },` with `], kanjiDetails: ... },`

        const kanjiKeys = Array.isArray(wordToKanjiMap[currentWordToInject]) ? wordToKanjiMap[currentWordToInject] : [wordToKanjiMap[currentWordToInject]];
        const detailsList = kanjiKeys.map(k => kanjiDB[k]).filter(x => x);

        if (detailsList.length > 0) {
            const jsonStr = JSON.stringify(detailsList, null, 10).replace(/\n/g, '\n      ');
            // We replace `] },` with `],\n      kanjiDetails: ${jsonStr}\n    },`
            // To keep formatting nice.
            lines[i] = line.replace('] },', `],\n      kanjiDetails: ${jsonStr}\n    },`);
            console.log(`Re-injected kanjiDetails for ${currentWordToInject}`);
        }

        currentWordToInject = null; // Done for this word
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Fix complete.");
