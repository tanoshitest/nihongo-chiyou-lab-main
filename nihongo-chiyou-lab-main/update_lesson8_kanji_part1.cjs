const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const kanjiDB = {
    '静': {
        kanji: '静', onyomi: 'セイ', kunyomi: 'しず.か', meaning: 'Yên tĩnh', strokes: 14, jlpt: 'N4',
        radicals: '青 (thanh)',
        components: [{ char: '青', meaning: 'xanh' }, { char: '争', meaning: 'tranh giành' }],
        mnemonic: 'Khi màu xanh (青) ngừng tranh giành (争) thì mọi thứ trở nên yên tĩnh (静).',
        exampleSentences: [
            { jp: '静かな町', vn: 'Thành phố yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '町', reading: 'まち' }] },
            { jp: '静かにしてください。', vn: 'Hãy giữ yên lặng.', furigana: [{ kanji: '静', reading: 'しず' }] },
            { jp: '冷静な人', vn: 'Người điềm tĩnh.', furigana: [{ kanji: '冷静', reading: 'れいせい' }, { kanji: '人', reading: 'ひと' }] },
            { jp: '安静にします。', vn: 'Nghỉ ngơi tĩnh dưỡng.', furigana: [{ kanji: '安静', reading: 'あんせい' }] },
            { jp: '静電', vn: 'Tĩnh điện.', furigana: [{ kanji: '静電', reading: 'せいでん' }] }
        ]
    },
    '有': {
        kanji: '有', onyomi: 'ユウ', kunyomi: 'あ.る', meaning: 'Có', strokes: 6, jlpt: 'N4',
        radicals: '月 (nguyệt)',
        components: [{ char: '', meaning: 'tay trái' }, { char: '月', meaning: 'trăng/thịt' }],
        mnemonic: 'Tay () cầm miếng thịt (月) là có (有) đồ ăn.',
        exampleSentences: [
            { jp: '有名な人', vn: 'Người nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '人', reading: 'ひと' }] },
            { jp: '有料', vn: 'Có phí.', furigana: [{ kanji: '有料', reading: 'ゆうりょう' }] },
            { jp: '有能な', vn: 'Có năng lực.', furigana: [{ kanji: '有能', reading: 'ゆうのう' }] },
            { jp: '所有します。', vn: 'Sở hữu.', furigana: [{ kanji: '所有', reading: 'しょゆう' }] },
            { jp: '有ります', vn: 'Có (tồn tại).', furigana: [{ kanji: '有', reading: 'あ' }] }
        ]
    },
    '名': {
        kanji: '名', onyomi: 'メイ, ミョウ', kunyomi: 'な', meaning: 'Tên, danh', strokes: 6, jlpt: 'N5',
        radicals: '口 (khẩu)',
        components: [{ char: '夕', meaning: 'chiều tối' }, { char: '口', meaning: 'miệng' }],
        mnemonic: 'Buổi tối (夕) không nhìn thấy mặt nên phải dùng miệng (口) xưng tên (名).',
        exampleSentences: [
            { jp: '名前', vn: 'Tên.', furigana: [{ kanji: '名前', reading: 'なまえ' }] },
            { jp: '有名', vn: 'Nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }] },
            { jp: '名刺', vn: 'Danh thiếp.', furigana: [{ kanji: '名刺', reading: 'めいし' }] },
            { jp: '名所', vn: 'Danh lam thắng cảnh.', furigana: [{ kanji: '名所', reading: 'めいしょ' }] },
            { jp: '名物', vn: 'Đặc sản.', furigana: [{ kanji: '名物', reading: 'めいぶつ' }] }
        ]
    },
    '親': {
        kanji: '親', onyomi: 'シン', kunyomi: 'おや, した.しい', meaning: 'Cha mẹ, thân thiết', strokes: 16, jlpt: 'N4',
        radicals: '見 (kiến)',
        components: [{ char: '立', meaning: 'đứng' }, { char: '木', meaning: 'cây' }, { char: '見', meaning: 'nhìn' }],
        mnemonic: 'Cha mẹ (親) là người luôn đứng (立) trên cây (木) nhìn (見) theo con cái.',
        exampleSentences: [
            { jp: '親切な人', vn: 'Người tốt bụng/thân thiện.', furigana: [{ kanji: '親切', reading: 'しんせつ' }, { kanji: '人', reading: 'ひと' }] },
            { jp: '父親', vn: 'Bố (thân sinh).', furigana: [{ kanji: '父親', reading: 'ちちおや' }] },
            { jp: '親しい友達', vn: 'Bạn thân.', furigana: [{ kanji: '親', reading: 'した' }, { kanji: '友達', reading: 'ともだち' }] },
            { jp: '親子', vn: 'Cha mẹ và con cái.', furigana: [{ kanji: '親子', reading: 'おやこ' }] },
            { jp: '良妻賢母', vn: 'Người vợ tốt mẹ hiền.', furigana: [{ kanji: '良妻賢母', reading: 'りょうさいけんぼ' }] }
        ]
    },
    '元': {
        kanji: '元', onyomi: 'ゲン, ガン', kunyomi: 'もと', meaning: 'Nguồn gốc, khỏe mạnh', strokes: 4, jlpt: 'N5',
        radicals: '儿 (nhân đi)',
        components: [{ char: '二', meaning: 'hai' }, { char: '儿', meaning: 'chân người' }],
        mnemonic: 'Hai (二) người (儿) chạy đua xem ai khỏe (元) hơn.',
        exampleSentences: [
            { jp: '元気です。', vn: 'Khỏe mạnh.', furigana: [{ kanji: '元気', reading: 'げんき' }] },
            { jp: '元日', vn: 'Ngày mùng 1 Tết.', furigana: [{ kanji: '元日', reading: 'がんじつ' }] },
            { jp: '地元', vn: 'Địa phương/Bản địa.', furigana: [{ kanji: '地元', reading: 'じもと' }] },
            { jp: '元々', vn: 'Vốn dĩ/Ban đầu.', furigana: [{ kanji: '元々', reading: 'もともと' }] },
            { jp: '足元', vn: 'Dưới chân.', furigana: [{ kanji: '足元', reading: 'あしもと' }] }
        ]
    },
    '気': {
        kanji: '気', onyomi: 'キ', kunyomi: '', meaning: 'Khí, tâm trạng', strokes: 6, jlpt: 'N5',
        radicals: '气 (khí)',
        components: [{ char: '气', meaning: 'hơi nước' }, { char: 'メ', meaning: 'dấu chéo' }],
        mnemonic: 'Khí (气) là thứ vô hình (メ).',
        exampleSentences: [
            { jp: '元気', vn: 'Khỏe mạnh.', furigana: [{ kanji: '元気', reading: 'げんき' }] },
            { jp: '病気', vn: 'Bệnh tật.', furigana: [{ kanji: '病気', reading: 'びょうき' }] },
            { jp: '天気', vn: 'Thời tiết.', furigana: [{ kanji: '天気', reading: 'てんき' }] },
            { jp: '気分', vn: 'Tâm trạng.', furigana: [{ kanji: '気分', reading: 'きぶん' }] },
            { jp: '電気', vn: 'Điện.', furigana: [{ kanji: '電気', reading: 'でんき' }] }
        ]
    },
    '暇': {
        kanji: '暇', onyomi: 'カ', kunyomi: 'ひま', meaning: 'Rảnh rỗi', strokes: 13, jlpt: 'N4',
        radicals: '日 (nhật)',
        components: [{ char: '日', meaning: 'ngày' }, { char: '叺', meaning: 'vay mượn (giả)' }], // Approximated components
        mnemonic: 'Ngày (日) mà được nghỉ ngơi (giả - 叺) là khi rảnh rỗi (暇).',
        exampleSentences: [
            { jp: '暇な時', vn: 'Khi rảnh rỗi.', furigana: [{ kanji: '暇', reading: 'ひま' }, { kanji: '時', reading: 'とき' }] },
            { jp: '休暇', vn: 'Kỳ nghỉ.', furigana: [{ kanji: '休暇', reading: 'きゅうか' }] },
            { jp: '暇つぶし', vn: 'Giết thời gian.', furigana: [{ kanji: '暇', reading: 'ひま' }] },
            { jp: '余暇', vn: 'Thời gian rảnh dư.', furigana: [{ kanji: '余暇', reading: 'よか' }] },
            { jp: 'お暇します。', vn: 'Xin phép về (cáo từ).', furigana: [{ kanji: '暇', reading: 'いとま' }] }
        ]
    },
    '便': {
        kanji: '便', onyomi: 'ベン, ビン', kunyomi: 'たよ.り', meaning: 'Tiện lợi, tin tức', strokes: 9, jlpt: 'N4',
        radicals: '人 (người)',
        components: [{ char: 'イ', meaning: 'người' }, { char: '更', meaning: 'canh/đổi' }],
        mnemonic: 'Người (イ) thay đổi (更) cách làm cho tiện lợi (便).',
        exampleSentences: [
            { jp: '便利です。', vn: 'Tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }] },
            { jp: '郵便局', vn: 'Bưu điện.', furigana: [{ kanji: '郵便局', reading: 'ゆうびんきょく' }] },
            { jp: '不便', vn: 'Bất tiện.', furigana: [{ kanji: '不便', reading: 'ふべん' }] },
            { jp: '航空便', vn: 'Thư hàng không.', furigana: [{ kanji: '航空便', reading: 'こうくうびん' }] },
            { jp: '船便', vn: 'Gửi tàu biển.', furigana: [{ kanji: '船便', reading: 'ふなびん' }] }
        ]
    },
    '利': {
        kanji: '利', onyomi: 'リ', kunyomi: 'き.く', meaning: 'Lợi ích', strokes: 7, jlpt: 'N4',
        radicals: '刀 (dao)',
        components: [{ char: '禾', meaning: 'lúa' }, { char: '刂', meaning: 'dao' }],
        mnemonic: 'Dùng dao (刂) gặt lúa (禾) thu lợi (利).',
        exampleSentences: [
            { jp: '便利', vn: 'Tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }] },
            { jp: '利用します。', vn: 'Sử dụng/Tận dụng.', furigana: [{ kanji: '利用', reading: 'りよう' }] },
            { jp: '利益', vn: 'Lợi nhuận.', furigana: [{ kanji: '利益', reading: 'りえき' }] },
            { jp: '利口な', vn: 'Thông minh/Lanh lợi.', furigana: [{ kanji: '利口', reading: 'りこう' }] },
            { jp: '権利', vn: 'Quyền lợi.', furigana: [{ kanji: '権利', reading: 'けんり' }] }
        ]
    },
    '大': {
        kanji: '大', onyomi: 'ダイ, タイ', kunyomi: 'おお.きい', meaning: 'To lớn', strokes: 3, jlpt: 'N5',
        radicals: '大 (đại)',
        components: [{ char: '大', meaning: 'to' }],
        mnemonic: 'Hình người đang dang rộng tay chân thể hiện sự to lớn.',
        exampleSentences: [
            { jp: '大きい家', vn: 'Nhà to.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '家', reading: 'いえ' }] },
            { jp: '大学', vn: 'Đại học.', furigana: [{ kanji: '大学', reading: 'だいがく' }] },
            { jp: '大好き', vn: 'Rất thích.', furigana: [{ kanji: '大', reading: 'だい' }, { kanji: '好', reading: 'す' }] },
            { jp: '大切', vn: 'Quan trọng.', furigana: [{ kanji: '大切', reading: 'たいせつ' }] },
            { jp: '大丈夫', vn: 'Không sao/Ổn.', furigana: [{ kanji: '大丈夫', reading: 'だいじょうぶ' }] }
        ]
    },
    '小': {
        kanji: '小', onyomi: 'ショウ', kunyomi: 'ちい.さい', meaning: 'Nhỏ', strokes: 3, jlpt: 'N5',
        radicals: '小 (tiểu)',
        components: [{ char: '小', meaning: 'nhỏ' }],
        mnemonic: 'Hình ảnh hạt cát nhỏ được chia ra.',
        exampleSentences: [
            { jp: '小さい犬', vn: 'Con chó nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '犬', reading: 'いぬ' }] },
            { jp: '小学校', vn: 'Trường tiểu học.', furigana: [{ kanji: '小学校', reading: 'しょうがっこう' }] },
            { jp: '小鳥', vn: 'Chim non.', furigana: [{ kanji: '小鳥', reading: 'ことり' }] },
            { jp: '小切手', vn: 'Séc (ngân phiếu).', furigana: [{ kanji: '小切手', reading: 'こぎって' }] },
            { jp: '小説', vn: 'Tiểu thuyết.', furigana: [{ kanji: '小説', reading: 'しょうせつ' }] }
        ]
    },
    '新': {
        kanji: '新', onyomi: 'シン', kunyomi: 'あたら.しい', meaning: 'Mới', strokes: 13, jlpt: 'N5',
        radicals: '斤 (rìu)',
        components: [{ char: '立', meaning: 'đứng' }, { char: '木', meaning: 'cây' }, { char: '斤', meaning: 'rìu' }],
        mnemonic: 'Đứng (立) bên cây (木) dùng rìu (斤) đốn để làm nhà mới (新).',
        exampleSentences: [
            { jp: '新しい車', vn: 'Xe ô tô mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '車', reading: 'くるま' }] },
            { jp: '新聞', vn: 'Báo.', furigana: [{ kanji: '新聞', reading: 'しんぶん' }] },
            { jp: '新幹線', vn: 'Tàu Shinkansen.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん' }] },
            { jp: '新人', vn: 'Người mới.', furigana: [{ kanji: '新人', reading: 'しんじん' }] },
            { jp: '新年', vn: 'Năm mới.', furigana: [{ kanji: '新年', reading: 'しんねん' }] }
        ]
    },
    '古': {
        kanji: '古', onyomi: 'コ', kunyomi: 'ふる.い', meaning: 'Cũ, cổ', strokes: 5, jlpt: 'N5',
        radicals: '口 (miệng)',
        components: [{ char: '十', meaning: 'mười' }, { char: '口', meaning: 'miệng' }],
        mnemonic: 'Chuyện qua mười (十) cái miệng (口) kể lại là chuyện cổ (古).',
        exampleSentences: [
            { jp: '古い本', vn: 'Sách cũ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '本', reading: 'ほん' }] },
            { jp: '中古車', vn: 'Xe ô tô cũ (second-hand).', furigana: [{ kanji: '中古車', reading: 'ちゅうこしゃ' }] },
            { jp: '考古学', vn: 'Khảo cổ học.', furigana: [{ kanji: '考古学', reading: 'こうこがく' }] },
            { jp: '古代', vn: 'Cổ đại.', furigana: [{ kanji: '古代', reading: 'こだい' }] },
            { jp: '古本屋', vn: 'Hiệu sách cũ.', furigana: [{ kanji: '古本屋', reading: 'ふるほんや' }] }
        ]
    },
    '悪': {
        kanji: '悪', onyomi: 'アク', kunyomi: 'わる.い', meaning: 'Xấu, ác', strokes: 11, jlpt: 'N4',
        radicals: '心 (tâm)',
        components: [{ char: '亜', meaning: 'á (thứ 2)' }, { char: '心', meaning: 'tâm' }],
        mnemonic: 'Tâm (心) đặt sai chỗ (thứ 2 - 亜) là tâm địa xấu xa (悪).',
        exampleSentences: [
            { jp: '天気が悪いです。', vn: 'Thời tiết xấu.', furigana: [{ kanji: '天気', reading: 'てんき' }, { kanji: '悪', reading: 'わる' }] },
            { jp: '悪口', vn: 'Nói xấu.', furigana: [{ kanji: '悪口', reading: 'わるぐち' }] },
            { jp: '最悪', vn: 'Tồi tệ nhất.', furigana: [{ kanji: '最悪', reading: 'さいあく' }] },
            { jp: '悪魔', vn: 'Ác ma.', furigana: [{ kanji: '悪魔', reading: 'あくま' }] },
            { jp: '悪夢', vn: 'Ác mộng.', furigana: [{ kanji: '悪夢', reading: 'あくむ' }] }
        ]
    },
    '暑': {
        kanji: '暑', onyomi: 'ショ', kunyomi: 'あつ.い', meaning: 'Nóng (thời tiết)', strokes: 12, jlpt: 'N4',
        radicals: '日 (nhật)',
        components: [{ char: '日', meaning: 'mặt trời' }, { char: '者', meaning: 'người' }],
        mnemonic: 'Người (者) đứng dưới mặt trời (日) thì rất nóng (暑).',
        exampleSentences: [
            { jp: '今日は暑いです。', vn: 'Hôm nay trời nóng.', furigana: [{ kanji: '今日', reading: 'きょう' }, { kanji: '暑', reading: 'あつ' }] },
            { jp: '蒸し暑い', vn: 'Nóng oi bức.', furigana: [{ kanji: '蒸', reading: 'む' }, { kanji: '暑', reading: 'あつ' }] },
            { jp: '暑中見舞い', vn: 'Thiệp thăm hỏi mùa hè.', furigana: [{ kanji: '暑中', reading: 'しょちゅう' }, { kanji: '見舞', reading: 'みま' }] },
            { jp: '避暑地', vn: 'Nơi tránh nóng (nghỉ mát).', furigana: [{ kanji: '避暑地', reading: 'ひしょち' }] },
            { jp: '猛暑', vn: 'Nắng nóng gay gắt.', furigana: [{ kanji: '猛暑', reading: 'もうしょ' }] }
        ]
    },
    '熱': {
        kanji: '熱', onyomi: 'ネツ', kunyomi: 'あつ.い', meaning: 'Nóng (vật), nhiệt', strokes: 15, jlpt: 'N4',
        radicals: '火 (hỏa)',
        components: [{ char: '勢', meaning: 'thế lực' }, { char: '灬', meaning: 'hỏa' }],
        mnemonic: 'Đốt lửa (灬) tạo thế (勢) rất nhiệt (熱).',
        exampleSentences: [
            { jp: '熱いコーヒー', vn: 'Cà phê nóng.', furigana: [{ kanji: '熱', reading: 'あつ' }] },
            { jp: '熱があります。', vn: 'Bị sốt.', furigana: [{ kanji: '熱', reading: 'ねつ' }] },
            { jp: '熱心な', vn: 'Nhiệt tình.', furigana: [{ kanji: '熱心', reading: 'ねっしん' }] },
            { jp: '高熱', vn: 'Sốt cao.', furigana: [{ kanji: '高熱', reading: 'こうねつ' }] },
            { jp: '情熱', vn: 'Đam mê (tình nhiệt).', furigana: [{ kanji: '情熱', reading: 'じょうねつ' }] }
        ]
    },
    '寒': {
        kanji: '寒', onyomi: 'カン', kunyomi: 'さむ.い', meaning: 'Lạnh (thời tiết)', strokes: 12, jlpt: 'N4',
        radicals: '宀 (miên)',
        components: [{ char: '宀', meaning: 'mái nhà' }, { char: '井', meaning: 'giếng' }, { char: '冫', meaning: 'băng' }],
        mnemonic: 'Trong nhà (宀) mà nước giếng (井) đóng băng (冫) thì trời rất lạnh (寒).',
        exampleSentences: [
            { jp: '寒いです。', vn: 'Lạnh.', furigana: [{ kanji: '寒', reading: 'さむ' }] },
            { jp: '寒気', vn: 'Ớn lạnh.', furigana: [{ kanji: '寒気', reading: 'さむけ' }] },
            { jp: '悪寒がする', vn: 'Cảm thấy ớn lạnh (sốt).', furigana: [{ kanji: '悪寒', reading: 'おかん' }] },
            { jp: '寒冷前線', vn: 'Frông lạnh.', furigana: [{ kanji: '寒冷', reading: 'かんれい' }] },
            { jp: '寒中水泳', vn: 'Bơi giữa mùa đông.', furigana: [{ kanji: '寒中', reading: 'かんちゅう' }] }
        ]
    },
    '冷': {
        kanji: '冷', onyomi: 'レイ', kunyomi: 'つめ.たい', meaning: 'Lạnh (vật)', strokes: 7, jlpt: 'N4',
        radicals: '冫 (băng)',
        components: [{ char: '冫', meaning: 'băng' }, { char: '令', meaning: 'lệnh' }],
        mnemonic: 'Ra lệnh (令) làm đóng băng (冫) để làm lạnh (冷).',
        exampleSentences: [
            { jp: '冷たい水', vn: 'Nước lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }, { kanji: '水', reading: 'みず' }] },
            { jp: '冷蔵庫', vn: 'Tủ lạnh.', furigana: [{ kanji: '冷蔵庫', reading: 'れいぞうこ' }] },
            { jp: '冷凍', vn: 'Đông lạnh.', furigana: [{ kanji: '冷凍', reading: 'れいとう' }] },
            { jp: '冷房', vn: 'Máy lạnh (chiều lạnh).', furigana: [{ kanji: '冷房', reading: 'れいぼう' }] },
            { jp: '冷静な', vn: 'Điềm tĩnh/Bình tĩnh.', furigana: [{ kanji: '冷静', reading: 'れいせい' }] }
        ]
    },
    '難': {
        kanji: '難', onyomi: 'ナン', kunyomi: 'むずか.しい', meaning: 'Khó, nan giải', strokes: 18, jlpt: 'N3',
        radicals: '隹 (chim đuôi ngắn)',
        components: [{ char: '', meaning: 'hán' }, { char: '隹', meaning: 'chim' }],
        mnemonic: 'Bắt chim (隹) trong lúc hạn hán () thật là khó (難).',
        exampleSentences: [
            { jp: '難しいです。', vn: 'Khó.', furigana: [{ kanji: '難', reading: 'むずか' }] },
            { jp: '困難', vn: 'Khó khăn/Khốn khó.', furigana: [{ kanji: '困難', reading: 'こんなん' }] },
            { jp: '災難', vn: 'Tai nạn/Thiên tai.', furigana: [{ kanji: '災難', reading: 'さいなん' }] },
            { jp: '避難', vn: 'Lánh nạn.', furigana: [{ kanji: '避難', reading: 'ひなん' }] },
            { jp: '難問', vn: 'Câu hỏi khó.', furigana: [{ kanji: '難問', reading: 'なんもん' }] }
        ]
    },
    '易': {
        kanji: '易', onyomi: 'エキ, イ', kunyomi: 'やさ.しい', meaning: 'Dễ, dịch', strokes: 8, jlpt: 'N4',
        radicals: '日 (nhật)',
        components: [{ char: '日', meaning: 'mặt trời' }, { char: '勿', meaning: 'chớ' }],
        mnemonic: 'Mặt trời (日) mọc thì chớ (勿) lo, mọi việc sẽ dễ dàng (易).',
        exampleSentences: [
            { jp: '易しい問題', vn: 'Câu hỏi dễ.', furigana: [{ kanji: '易', reading: 'やさ' }, { kanji: '問題', reading: 'もんだい' }] },
            { jp: '貿易', vn: 'Thương mại/Mậu dịch.', furigana: [{ kanji: '貿易', reading: 'ぼうえき' }] },
            { jp: '容易な', vn: 'Đơn giản/Dễ dàng.', furigana: [{ kanji: '容易', reading: 'ようい' }] },
            { jp: '安易な', vn: 'Dễ dãi.', furigana: [{ kanji: '安易', reading: 'あんい' }] },
            { jp: '難易度', vn: 'Độ khó dễ.', furigana: [{ kanji: '難易度', reading: 'なんいど' }] }
        ]
    },
    '高': {
        kanji: '高', onyomi: 'コウ', kunyomi: 'たか.い', meaning: 'Cao, đắt', strokes: 10, jlpt: 'N5',
        radicals: '高 (cao)',
        components: [{ char: '高', meaning: 'cao' }],
        mnemonic: 'Hình ảnh tòa tháp cao tầng.',
        exampleSentences: [
            { jp: '高い山', vn: 'Núi cao.', furigana: [{ kanji: '高', reading: 'たか' }, { kanji: '山', reading: 'やま' }] },
            { jp: '背が高い', vn: 'Dáng cao.', furigana: [{ kanji: '背', reading: 'せ' }, { kanji: '高', reading: 'たか' }] },
            { jp: '値段が高い', vn: 'Giá đắt.', furigana: [{ kanji: '値段', reading: 'ねだん' }, { kanji: '高', reading: 'たか' }] },
            { jp: '高校', vn: 'Trường cấp 3.', furigana: [{ kanji: '高校', reading: 'こうこう' }] },
            { jp: '最高', vn: 'Tuyệt vời nhất.', furigana: [{ kanji: '最高', reading: 'さいこう' }] }
        ]
    },
    '安': {
        kanji: '安', onyomi: 'アン', kunyomi: 'やす.い', meaning: 'Rẻ, an toàn', strokes: 6, jlpt: 'N5',
        radicals: '宀 (miên)',
        components: [{ char: '宀', meaning: 'mái nhà' }, { char: '女', meaning: 'nữ' }],
        mnemonic: 'Người phụ nữ (女) ở trong nhà (宀) thì an tâm (安).',
        exampleSentences: [
            { jp: '安い車', vn: 'Xe rẻ.', furigana: [{ kanji: '安', reading: 'やす' }, { kanji: '車', reading: 'くるま' }] },
            { jp: '安心します。', vn: 'An tâm.', furigana: [{ kanji: '安心', reading: 'あんしん' }] },
            { jp: '安全', vn: 'An toàn.', furigana: [{ kanji: '安全', reading: 'あんぜん' }] },
            { jp: '不安', vn: 'Bất an.', furigana: [{ kanji: '不安', reading: 'ふあん' }] },
            { jp: '安売り', vn: 'Bán rẻ/Giảm giá.', furigana: [{ kanji: '安売', reading: 'やすう' }] }
        ]
    },
    '低': {
        kanji: '低', onyomi: 'テイ', kunyomi: 'ひく.い', meaning: 'Thấp', strokes: 7, jlpt: 'N4',
        radicals: '人 (người)',
        components: [{ char: 'イ', meaning: 'người' }, { char: '氏', meaning: 'họ/giấy' }, { char: '一', meaning: 'một' }], // Simplified
        mnemonic: 'Người (イ) cúi xuống nhặt tờ giấy (氏) ở dưới đất (一) thì thấp (低).',
        exampleSentences: [
            { jp: '低い山', vn: 'Núi thấp.', furigana: [{ kanji: '低', reading: 'ひく' }, { kanji: '山', reading: 'やま' }] },
            { jp: '背が低い', vn: 'Dáng thấp.', furigana: [{ kanji: '背', reading: 'せ' }, { kanji: '低', reading: 'ひく' }] },
            { jp: '低温', vn: 'Nhiệt độ thấp.', furigana: [{ kanji: '低温', reading: 'ていおん' }] },
            { jp: '最低', vn: 'Tệ nhất/Thấp nhất.', furigana: [{ kanji: '最低', reading: 'さいてい' }] },
            { jp: '低下します', vn: 'Giảm xuống.', furigana: [{ kanji: '低下', reading: 'ていか' }] }
        ]
    },
    '忙': {
        kanji: '忙', onyomi: 'ボウ', kunyomi: 'いそが.しい', meaning: 'Bận rộn', strokes: 6, jlpt: 'N4',
        radicals: '心 (tâm)',
        components: [{ char: '忄', meaning: 'tâm' }, { char: '亡', meaning: 'vong/chết' }],
        mnemonic: 'Tâm (忄) mà chết (亡) đi vì quá bận (忙).',
        exampleSentences: [
            { jp: '忙しいです。', vn: 'Bận.', furigana: [{ kanji: '忙', reading: 'いそが' }] },
            { jp: '多忙な', vn: 'Rất bận rộn.', furigana: [{ kanji: '多忙', reading: 'たぼう' }] },
            { jp: '忙殺される', vn: 'Bận tối tăm mặt mũi.', furigana: [{ kanji: '忙殺', reading: 'ぼうさつ' }] },
            { jp: 'お忙しいですか。', vn: 'Bạn có bận không?', furigana: [{ kanji: '忙', reading: 'いそが' }] },
            { jp: '相変わらず忙しい', vn: 'Bận rộn như mọi khi.', furigana: [{ kanji: '相変', reading: 'あいか' }, { kanji: '忙', reading: 'いそが' }] }
        ]
    },
    '楽': {
        kanji: '楽', onyomi: 'ラク, ガク', kunyomi: 'たの.しい', meaning: 'Vui vẻ, âm nhạc', strokes: 13, jlpt: 'N4',
        radicals: '木 (cây)',
        components: [{ char: '白', meaning: 'trắng' }, { char: '木', meaning: 'cây' }, { char: '幺', meaning: 'nhỏ' }], // Simplified
        mnemonic: 'Cây (木) đàn màu trắng (白) tâu nhạc rất vui (楽).',
        exampleSentences: [
            { jp: '楽しい生活', vn: 'Cuộc sống vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '生活', reading: 'せいかつ' }] },
            { jp: '音楽', vn: 'Âm nhạc.', furigana: [{ kanji: '音楽', reading: 'おんがく' }] },
            { jp: '楽な仕事', vn: 'Công việc nhàn hạ.', furigana: [{ kanji: '楽', reading: 'らく' }, { kanji: '仕事', reading: 'しごと' }] },
            { jp: '楽器', vn: 'Nhạc cụ.', furigana: [{ kanji: '楽器', reading: 'がっき' }] },
            { jp: '気楽に', vn: 'Thoải mái/Vô tư.', furigana: [{ kanji: '気楽', reading: 'きらく' }] }
        ]
    },
    '白': {
        kanji: '白', onyomi: 'ハク', kunyomi: 'しろ.い', meaning: 'Trắng', strokes: 5, jlpt: 'N5',
        radicals: '白 (trắng)',
        components: [{ char: '白', meaning: 'trắng' }],
        mnemonic: 'Mặt trời (日) toả ánh sáng trắng (thêm nét phẩy).',
        exampleSentences: [
            { jp: '白いシャツ', vn: 'Áo sơ mi trắng.', furigana: [{ kanji: '白', reading: 'しろ' }] },
            { jp: '白鳥', vn: 'Thiên nga (chim trắng).', furigana: [{ kanji: '白鳥', reading: 'はくちょう' }] },
            { jp: '面白い', vn: 'Thú vị.', furigana: [{ kanji: '面', reading: 'おも' }, { kanji: '白', reading: 'しろ' }] },
            { jp: '白黒', vn: 'Đen trắng.', furigana: [{ kanji: '白黒', reading: 'しろくろ' }] },
            { jp: '告白', vn: 'Tỏ tình/Thú nhận.', furigana: [{ kanji: '告白', reading: 'こくはく' }] }
        ]
    },
    '黒': {
        kanji: '黒', onyomi: 'コク', kunyomi: 'くろ.い', meaning: 'Đen', strokes: 11, jlpt: 'N5',
        radicals: '黒 (đen)',
        components: [{ char: '里', meaning: 'làng' }, { char: '灬', meaning: 'hỏa' }],
        mnemonic: 'Ngôi làng (里) bị lửa (灬) thiêu cháy thành màu đen (黒).',
        exampleSentences: [
            { jp: '黒い髪', vn: 'Tóc đen.', furigana: [{ kanji: '黒', reading: 'くろ' }, { kanji: '髪', reading: 'かみ' }] },
            { jp: '黒板', vn: 'Bảng đen.', furigana: [{ kanji: '黒板', reading: 'こくばん' }] },
            { jp: '真っ黒', vn: 'Đen thui.', furigana: [{ kanji: '真', reading: 'まっ' }, { kanji: '黒', reading: 'くろ' }] },
            { jp: '黒字', vn: 'Lãi (chữ đen).', furigana: [{ kanji: '黒字', reading: 'くろじ' }] },
            { jp: '白黒写真', vn: 'Ảnh đen trắng.', furigana: [{ kanji: '白黒', reading: 'しろくろ' }, { kanji: '写真', reading: 'しゃしん' }] }
        ]
    },
    '赤': {
        kanji: '赤', onyomi: 'セキ', kunyomi: 'あか.い', meaning: 'Đỏ', strokes: 7, jlpt: 'N5',
        radicals: '赤 (đỏ)',
        components: [{ char: '土', meaning: 'đất' }, { char: '火', meaning: 'lửa' }], // Simplified
        mnemonic: 'Lửa (火) cháy trên đất (土) tạo màu đỏ (赤).',
        exampleSentences: [
            { jp: '赤い花', vn: 'Hoa đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }, { kanji: '花', reading: 'はな' }] },
            { jp: '赤ちゃん', vn: 'Em bé (trẻ sơ sinh đỏ hỏn).', furigana: [{ kanji: '赤', reading: 'あか' }] },
            { jp: '赤字', vn: 'Lỗ (chữ đỏ).', furigana: [{ kanji: '赤字', reading: 'あかじ' }] },
            { jp: '赤道', vn: 'Xích đạo.', furigana: [{ kanji: '赤道', reading: 'せきどう' }] },
            { jp: '真っ赤', vn: 'Đỏ chót.', furigana: [{ kanji: '真', reading: 'まっ' }, { kanji: '赤', reading: 'か' }] }
        ]
    },
    '青': {
        kanji: '青', onyomi: 'セイ', kunyomi: 'あお.い', meaning: 'Xanh dương', strokes: 8, jlpt: 'N5',
        radicals: '青 (thanh)',
        components: [{ char: '生', meaning: 'sinh' }, { char: '月', meaning: 'nguyệt' }], // Simplified
        mnemonic: 'Mặt trăng (月) sinh (生) ra ánh sáng xanh (青).',
        exampleSentences: [
            { jp: '青い海', vn: 'Biển xanh.', furigana: [{ kanji: '青', reading: 'あお' }, { kanji: '海', reading: 'うみ' }] },
            { jp: '青信号', vn: 'Đèn xanh.', furigana: [{ kanji: '青', reading: 'あお' }, { kanji: '信号', reading: 'しんごう' }] },
            { jp: '青年', vn: 'Thanh niên.', furigana: [{ kanji: '青年', reading: 'せいねん' }] },
            { jp: '真っ青', vn: 'Xanh ngắt (hoặc tái mét).', furigana: [{ kanji: '真', reading: 'まっ' }, { kanji: '青', reading: 'さお' }] },
            { jp: '青春', vn: 'Thanh xuân.', furigana: [{ kanji: '青春', reading: 'せいしゅん' }] }
        ]
    },
    '面': {
        kanji: '面', onyomi: 'メン', kunyomi: 'おも', meaning: 'Mặt, bề mặt', strokes: 9, jlpt: 'N3',
        radicals: '面 (mặt)',
        components: [{ char: '面', meaning: 'mặt' }],
        mnemonic: 'Hình khuôn mặt người.',
        exampleSentences: [
            { jp: '面白い', vn: 'Thú vị.', furigana: [{ kanji: '面', reading: 'おも' }, { kanji: '白', reading: 'しろ' }] },
            { jp: '真面目な', vn: 'Nghiêm túc/Chăm chỉ.', furigana: [{ kanji: '真面目', reading: 'まじめ' }] },
            { jp: '画面', vn: 'Màn hình.', furigana: [{ kanji: '画面', reading: 'がめん' }] },
            { jp: '正面', vn: 'Chính diện.', furigana: [{ kanji: '正面', reading: 'しょうめん' }] },
            { jp: '面積', vn: 'Diện tích.', furigana: [{ kanji: '面積', reading: 'めんせき' }] }
        ]
    }
};

const lesson8Words = {
    'しずか [な]': ['静'],
    'ゆうめい [な]': ['有', '名'],
    'しんせつ [な]': ['親', '切:L7ScriptHasItButItsSafe'], // Special case: 切 is in L7 script. But keys unique. '借' '貸' etc. 
    // If I define '切' again here, it overwrites kanjiDB local var. Safe.
    // But note `kanjiDB` above doesn't have `切`. 
    // I should add `切` definition or reuse?
    // I'll add `切` definition to `kanjiDB` in THIS script to be safe.
    'げんき [な]': ['元', '気'],
    'ひま [な]': ['暇'],
    'べんり [な]': ['便', '利'],
    'おおきい': ['大'],
    'ちいさい': ['小'],
    'あたらしい': ['新'],
    'ふるい': ['古'],
    'わるい': ['悪'],
    'あつい': ['暑', '熱'], // Logic to pick right one? 
    // `あつい` word in L8 is usually 2 entries? Or 1 entry with multi meanings?
    // L8 Vocab list usually separates `あつい (hot weather)` and `あつい (hot thing)`.
    // If they are separate entries:
    // `word: 'あつい', kanji: '暑い'` -> Use 暑.
    // `word: 'あつい', kanji: '熱い'` -> Use 熱.
    // I need to check exact `kanji` field in file.
    // I'll handle both in map, assuming exact kanji string match key.
    'さむい': ['寒'],
    'つめたい': ['冷'],
    'むずかしい': ['難'],
    'やさしい': ['易'],
    'たかい': ['高'],
    'やすい': ['安'],
    'ひくい': ['低'],
    'おもしろい': ['面', '白'],
    'いそがしい': ['忙'],
    'たのしい': ['楽'],
    'しろい': ['白'],
    'くろい': ['黒'],
    'あかい': ['赤'],
    'あおい': ['青']
};

const lines = content.split('\n');
const lesson8StartPattern = /const lesson8Data: LessonDetail = \{/;
const lesson9StartPattern = /const lesson9Data: LessonDetail = \{/;
let inLesson8 = false;
let inVocab = false;

// Add '切' to DB for Shinsetsu
kanjiDB['切'] = {
    kanji: '切', onyomi: 'セツ', kunyomi: 'き.る', meaning: 'Cắt, thiết (thân thiết)', strokes: 4, jlpt: 'N4',
    radicals: '刀 (dao)',
    components: [{ char: '七', meaning: 'số 7' }, { char: '刀', meaning: 'dao' }],
    mnemonic: 'Dùng dao (刀) cắt làm 7 (七) mảnh.',
    exampleSentences: [
        { jp: '親切な', vn: 'Tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ' }] },
        { jp: '大切', vn: 'Quan trọng.', furigana: [{ kanji: '大切', reading: 'たいせつ' }] },
        { jp: '切符', vn: 'Vé.', furigana: [{ kanji: '切符', reading: 'きっぷ' }] },
        { jp: '一切', vn: 'Hoàn toàn (không).', furigana: [{ kanji: '一切', reading: 'いっさい' }] },
        { jp: '切ります', vn: 'Cắt.', furigana: [{ kanji: '切', reading: 'き' }] }
    ]
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson8StartPattern.test(line)) {
        inLesson8 = true;
    }
    if (lesson9StartPattern.test(line)) {
        inLesson8 = false;
    }

    if (inLesson8 && /vocabulary: \[/.test(line)) {
        inVocab = true;
    }
    if (inLesson8 && /^\s{2}\],?$/.test(line)) {
        inVocab = false;
    }

    if (inLesson8 && inVocab) {
        const match = line.match(/word: '([^']+)'/);
        const kanjiMatch = line.match(/kanji: '([^']+)'/);
        if (match) {
            const word = match[1];
            const kanjiStr = kanjiMatch ? kanjiMatch[1] : '';

            let targetKeys = null;

            // Match by Word
            if (lesson8Words[word]) {
                targetKeys = lesson8Words[word];
            }

            // Special logic for Atsui
            if (word === 'あつい') {
                if (kanjiStr.includes('暑')) targetKeys = ['暑'];
                if (kanjiStr.includes('熱')) targetKeys = ['熱'];
            }

            if (targetKeys) {
                const detailsList = targetKeys.map(key => kanjiDB[key]).filter(x => x);

                if (detailsList.length > 0) {
                    const jsonStr = JSON.stringify(detailsList, null, 10).replace(/\n/g, '\n      ');
                    if (!line.includes('kanjiDetails:')) {
                        const lineWithoutClosing = line.trim().replace(/},?$/, '').replace(/\}$/, '');
                        const newLine = lineWithoutClosing + `, kanjiDetails: ${jsonStr} },`;
                        lines[i] = newLine;
                        console.log(`Updated ${word} (${kanjiStr})`);
                    }
                }
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Update complete.');
