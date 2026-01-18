const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const vocabularyUpdates = {
    'ハンサム [な]': [
        { jp: 'ハンサムな人', vn: 'Người đẹp trai.', furigana: [{ kanji: '人', reading: 'ひと' }] },
        { jp: '彼はハンサムです。', vn: 'Anh ấy đẹp trai.', furigana: [{ kanji: '彼', reading: 'かれ' }] },
        { jp: 'ハンサムな俳優', vn: 'Nam diễn viên đẹp trai.', furigana: [{ kanji: '俳優', reading: 'はいゆう' }] },
        { jp: 'ハンサムですね。', vn: 'Đẹp trai nhỉ.', furigana: [] },
        { jp: 'あまりハンサムじゃありません。', vn: 'Không đẹp trai lắm.', furigana: [] },
        { jp: 'ハンサムな彼氏', vn: 'Bạn trai đẹp trai.', furigana: [{ kanji: '彼氏', reading: 'かれし' }] }
    ],
    'きれい [な]': [
        { jp: 'きれいな花', vn: 'Hoa đẹp.', furigana: [{ kanji: '花', reading: 'はな' }] },
        { jp: 'きれいな部屋', vn: 'Căn phòng sạch sẽ.', furigana: [{ kanji: '部屋', reading: 'へや' }] },
        { jp: 'きれいな女の人', vn: 'Người phụ nữ đẹp.', furigana: [{ kanji: '女', reading: 'おんな' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '字がきれいです。', vn: 'Chữ đẹp.', furigana: [{ kanji: '字', reading: 'じ' }] },
        { jp: 'きれいな景色', vn: 'Phong cảnh đẹp.', furigana: [{ kanji: '景色', reading: 'けしき' }] },
        { jp: '部屋をきれいにします。', vn: 'Làm sạch phòng.', furigana: [{ kanji: '部屋', reading: 'へや' }] }
    ],
    'しずか [な]': [
        { jp: '静かな町', vn: 'Thị trấn yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '町', reading: 'まち' }] },
        { jp: '静かな夜', vn: 'Đêm yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '夜', reading: 'よる' }] },
        { jp: '図書館は静かです。', vn: 'Thư viện yên tĩnh.', furigana: [{ kanji: '図書館', reading: 'としょかん' }, { kanji: '静', reading: 'しず' }] },
        { jp: '静かな所', vn: 'Nơi yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '所', reading: 'ところ' }] },
        { jp: '静かにしてください。', vn: 'Hãy giữ trật tự.', furigana: [{ kanji: '静', reading: 'しず' }] },
        { jp: '教室は静かじゃありません。', vn: 'Lớp học không yên tĩnh.', furigana: [{ kanji: '教室', reading: 'きょうしつ' }, { kanji: '静', reading: 'しず' }] }
    ],
    'にぎやか [な]': [
        { jp: 'にぎやかな町', vn: 'Thành phố náo nhiệt.', furigana: [{ kanji: '町', reading: 'まち' }] },
        { jp: 'にぎやかな通り', vn: 'Con phố nhộn nhịp.', furigana: [{ kanji: '通', reading: 'とお' }] },
        { jp: 'お祭りはにぎやかです。', vn: 'Lễ hội rất náo nhiệt.', furigana: [{ kanji: '祭', reading: 'まつ' }] },
        { jp: '店はにぎやかでした。', vn: 'Cửa hàng đã rất đông đúc.', furigana: [{ kanji: '店', reading: 'みせ' }] },
        { jp: 'にぎやかな場所', vn: 'Nơi náo nhiệt.', furigana: [{ kanji: '場所', reading: 'ばしょ' }] },
        { jp: 'パーティーはにぎやかですね。', vn: 'Bữa tiệc náo nhiệt nhỉ.', furigana: [] }
    ],
    'ゆうめい [な]': [
        { jp: '有名な人', vn: 'Người nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '有名な所', vn: 'Nơi nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '所', reading: 'ところ' }] },
        { jp: 'この歌は有名です。', vn: 'Bài hát này nổi tiếng.', furigana: [{ kanji: '歌', reading: 'うた' }, { kanji: '有名', reading: 'ゆうめい' }] },
        { jp: '有名な作家', vn: 'Nhà văn nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '作家', reading: 'さっか' }] },
        { jp: '世界で有名です。', vn: 'Nổi tiếng trên thế giới.', furigana: [{ kanji: '世界', reading: 'せかい' }, { kanji: '有名', reading: 'ゆうめい' }] },
        { jp: '有名な映画', vn: 'Bộ phim nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '映画', reading: 'えいが' }] }
    ],
    'しんせつ [な]': [
        { jp: '親切な人', vn: 'Người tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '先生は親切です。', vn: 'Thầy giáo tốt bụng.', furigana: [{ kanji: '先生', reading: 'せんせい' }, { kanji: '親切', reading: 'しんせつ' }] },
        { jp: '親切にありがとうございます。', vn: 'Cảm ơn sự tốt bụng của bạn.', furigana: [{ kanji: '親切', reading: 'しんせつ' }] },
        { jp: '親切な医者', vn: 'Bác sĩ tận tình.', furigana: [{ kanji: '親切', reading: 'しんせつ' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: 'お年寄りに親切にします。', vn: 'Tốt bụng với người già.', furigana: [{ kanji: '年寄', reading: 'としよ' }, { kanji: '親切', reading: 'しんせつ' }] },
        { jp: '彼はとても親切です。', vn: 'Anh ấy rất tốt bụng.', furigana: [{ kanji: '彼', reading: 'かれ' }, { kanji: '親切', reading: 'しんせつ' }] }
    ],
    'げんき [な]': [
        { jp: '元気な子供', vn: 'Đứa trẻ khỏe mạnh.', furigana: [{ kanji: '元気', reading: 'げんき' }, { kanji: '子供', reading: 'こども' }] },
        { jp: 'お元気ですか。', vn: 'Bạn có khỏe không?', furigana: [{ kanji: '元気', reading: 'げんき' }] },
        { jp: '祖母は元気です。', vn: 'Bà tôi khỏe.', furigana: [{ kanji: '祖母', reading: 'そぼ' }, { kanji: '元気', reading: 'げんき' }] },
        { jp: '元気な声', vn: 'Giọng nói khỏe khoắn.', furigana: [{ kanji: '元気', reading: 'げんき' }, { kanji: '声', reading: 'こえ' }] },
        { jp: '元気を出してください。', vn: 'Hãy vui lên (lấy lại tinh thần).', furigana: [{ kanji: '元気', reading: 'げんき' }, { kanji: '出', reading: 'だ' }] },
        { jp: 'あまり元気じゃありません。', vn: 'Không khỏe lắm.', furigana: [{ kanji: '元気', reading: 'げんき' }] }
    ],
    'ひま [な]': [
        { jp: '暇な時', vn: 'Khi rảnh rỗi.', furigana: [{ kanji: '暇', reading: 'ひま' }, { kanji: '時', reading: 'とき' }] },
        { jp: '今日は暇です。', vn: 'Hôm nay tôi rảnh.', furigana: [{ kanji: '今日', reading: 'きょう' }, { kanji: '暇', reading: 'ひま' }] },
        { jp: '日曜日は暇じゃありません。', vn: 'Chủ nhật tôi không rảnh.', furigana: [{ kanji: '日曜日', reading: 'にちようび' }, { kanji: '暇', reading: 'ひま' }] },
        { jp: '暇な日', vn: 'Ngày rảnh.', furigana: [{ kanji: '暇', reading: 'ひま' }, { kanji: '日', reading: 'ひ' }] },
        { jp: '暇な人', vn: 'Người rảnh rỗi.', furigana: [{ kanji: '暇', reading: 'ひま' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '暇ですから、遊びに行きます。', vn: 'Vì rảnh nên tôi đi chơi.', furigana: [{ kanji: '暇', reading: 'ひま' }, { kanji: '遊', reading: 'あそ' }, { kanji: '行', reading: 'い' }] }
    ],
    'べんり [な]': [
        { jp: '便利なパソコン', vn: 'Máy tính tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }] },
        { jp: 'この鞄は便利です。', vn: 'Cái túi này tiện lợi.', furigana: [{ kanji: '鞄', reading: 'かばん' }, { kanji: '便利', reading: 'べんり' }] },
        { jp: '便利な道具', vn: 'Dụng cụ tiện lợi.', furigana: [{ kanji: '便利', reading: 'べんり' }, { kanji: '道具', reading: 'どうぐ' }] },
        { jp: '駅に近くて便利です。', vn: 'Gần ga nên tiện.', furigana: [{ kanji: '駅', reading: 'えき' }, { kanji: '近', reading: 'ちか' }, { kanji: '便利', reading: 'べんり' }] },
        { jp: '不便', vn: 'Bất tiện (trái nghĩa).', furigana: [{ kanji: '不便', reading: 'ふべん' }] },
        { jp: 'コンビニは便利です。', vn: 'Cửa hàng tiện lợi rất tiện.', furigana: [{ kanji: '便利', reading: 'べんり' }] }
    ],
    'すてき [な]': [
        { jp: '素敵な方', vn: 'Người tuyệt vời.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '方', reading: 'かた' }] },
        { jp: '素敵なプレゼント', vn: 'Món quà tuyệt vời.', furigana: [{ kanji: '素敵', reading: 'すてき' }] },
        { jp: 'すてきですね。', vn: 'Đẹp quá / Tuyệt quá.', furigana: [] },
        { jp: '素敵な服', vn: 'Bộ quần áo đẹp.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '服', reading: 'ふく' }] },
        { jp: '素敵な景色', vn: 'Phong cảnh tuyệt vời.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '景色', reading: 'けしき' }] },
        { jp: '素敵な笑顔', vn: 'Nụ cười đẹp.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '笑顔', reading: 'えがお' }] }
    ],
    'おおきい': [
        { jp: '大きい家', vn: 'Ngôi nhà to.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '家', reading: 'いえ' }] },
        { jp: '背が高い', vn: 'Dáng người cao (to).', furigana: [{ kanji: '背', reading: 'せ' }, { kanji: '高', reading: 'たか' }] },
        { jp: '大きい声', vn: 'Giọng to.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '声', reading: 'こえ' }] },
        { jp: 'この靴は大きいです。', vn: 'Đôi giày này to.', furigana: [{ kanji: '靴', reading: 'くつ' }, { kanji: '大', reading: 'おお' }] },
        { jp: '大きい町', vn: 'Thành phố lớn.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '町', reading: 'まち' }] },
        { jp: '字を大きく書きます。', vn: 'Viết chữ to.', furigana: [{ kanji: '字', reading: 'じ' }, { kanji: '大', reading: 'おお' }, { kanji: '書', reading: 'か' }] }
    ],
    'ちいさい': [
        { jp: '小さい鞄', vn: 'Cái cặp nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '鞄', reading: 'かばん' }] },
        { jp: '小さい声', vn: 'Giọng nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '声', reading: 'こえ' }] },
        { jp: '私の部屋は小さいです。', vn: 'Phòng của tôi nhỏ.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '部屋', reading: 'へや' }, { kanji: '小', reading: 'ちい' }] },
        { jp: '小さい車', vn: 'Xe ô tô nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '小さい村', vn: 'Ngôi làng nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '村', reading: 'むら' }] },
        { jp: '小さく切ります。', vn: 'Cắt nhỏ.', furigana: [{ kanji: '小', reading: 'ちい' }, { kanji: '切', reading: 'き' }] }
    ],
    'あたらしい': [
        { jp: '新しい本', vn: 'Sách mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '本', reading: 'ほん' }] },
        { jp: '新しい車', vn: 'Xe mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '車', reading: 'くるま' }] },
        { jp: 'この靴は新しいです。', vn: 'Đôi giày này mới.', furigana: [{ kanji: '靴', reading: 'くつ' }, { kanji: '新', reading: 'あたら' }] },
        { jp: '新しいパソコン', vn: 'Máy tính mới.', furigana: [{ kanji: '新', reading: 'あたら' }] },
        { jp: '新しい年', vn: 'Năm mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '年', reading: 'とし' }] },
        { jp: '新入社員', vn: 'Nhân viên mới.', furigana: [{ kanji: '新入社員', reading: 'しんにゅうしゃいん' }] }
    ],
    'ふるい': [
        { jp: '古い家', vn: 'Ngôi nhà cũ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '家', reading: 'いえ' }] },
        { jp: '古い時計', vn: 'Đồng hồ cũ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '時計', reading: 'とけい' }] },
        { jp: 'この本は古いです。', vn: 'Quyển sách này cũ.', furigana: [{ kanji: '本', reading: 'ほん' }, { kanji: '古', reading: 'ふる' }] },
        { jp: '古い友達', vn: 'Bạn cũ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '友達', reading: 'ともだち' }] },
        { jp: '古い手紙', vn: 'Bức thư cũ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '手紙', reading: 'てがみ' }] },
        { jp: '古い町', vn: 'Phố cổ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '町', reading: 'まち' }] }
    ],
    'いい (よい)': [
        { jp: 'いい天気', vn: 'Thời tiết tốt.', furigana: [{ kanji: '天気', reading: 'てんき' }] },
        { jp: 'いい人', vn: 'Người tốt.', furigana: [{ kanji: '人', reading: 'ひと' }] },
        { jp: '体にいいです。', vn: 'Tốt cho cơ thể.', furigana: [{ kanji: '体', reading: 'からだ' }] },
        { jp: 'いい考え', vn: 'Ý kiến hay.', furigana: [{ kanji: '考', reading: 'かんが' }] },
        { jp: '調子がいい', vn: 'Tình trạng tốt.', furigana: [{ kanji: '調子', reading: 'ちょうし' }] },
        { jp: '頭がいい', vn: 'Thông minh.', furigana: [{ kanji: '頭', reading: 'あたま' }] }
    ],
    'わるい': [
        { jp: '悪い人', vn: 'Người xấu.', furigana: [{ kanji: '悪', reading: 'わる' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '目が悪いです。', vn: 'Mắt kém.', furigana: [{ kanji: '目', reading: 'め' }, { kanji: '悪', reading: 'わる' }] },
        { jp: '気分が悪い', vn: 'Cảm thấy không khỏe.', furigana: [{ kanji: '気分', reading: 'きぶん' }, { kanji: '悪', reading: 'わる' }] },
        { jp: '天気が悪いです。', vn: 'Thời tiết xấu.', furigana: [{ kanji: '天気', reading: 'てんき' }, { kanji: '悪', reading: 'わる' }] },
        { jp: '悪いニュース', vn: 'Tin xấu.', furigana: [{ kanji: '悪', reading: 'わる' }] },
        { jp: '頭が悪い', vn: 'Kém thông minh (ngốc).', furigana: [{ kanji: '頭', reading: 'あたま' }, { kanji: '悪', reading: 'わる' }] }
    ],
    'あつい': [
        { jp: '暑いですね。', vn: 'Trời nóng nhỉ.', furigana: [{ kanji: '暑', reading: 'あつ' }] },
        { jp: '熱いお茶', vn: 'Trà nóng.', furigana: [{ kanji: '熱', reading: 'あつ' }, { kanji: '茶', reading: 'ちゃ' }] },
        { jp: '今日は暑いです。', vn: 'Hôm nay trời nóng.', furigana: [{ kanji: '今日', reading: 'きょう' }, { kanji: '暑', reading: 'あつ' }] },
        { jp: '熱いコーヒー', vn: 'Cà phê nóng.', furigana: [{ kanji: '熱', reading: 'あつ' }] },
        { jp: 'お湯が熱いです。', vn: 'Nước nóng (bỏng).', furigana: [{ kanji: '湯', reading: 'ゆ' }, { kanji: '熱', reading: 'あつ' }] },
        { jp: '厚い本', vn: 'Quyển sách dày.', furigana: [{ kanji: '厚', reading: 'あつ' }, { kanji: '本', reading: 'ほん' }] }
    ],
    'さむい': [
        { jp: '寒い天気', vn: 'Thời tiết lạnh.', furigana: [{ kanji: '寒', reading: 'さむ' }, { kanji: '天気', reading: 'てんき' }] },
        { jp: '今日は寒いです。', vn: 'Hôm nay trời lạnh.', furigana: [{ kanji: '今日', reading: 'きょう' }, { kanji: '寒', reading: 'さむ' }] },
        { jp: '寒いですね。', vn: 'Lạnh nhỉ.', furigana: [{ kanji: '寒', reading: 'さむ' }] },
        { jp: '寒い部屋', vn: 'Căn phòng lạnh.', furigana: [{ kanji: '寒', reading: 'さむ' }, { kanji: '部屋', reading: 'へや' }] },
        { jp: '寒くて風邪を引きました。', vn: 'Vì lạnh nên tôi bị cảm.', furigana: [{ kanji: '寒', reading: 'さむ' }, { kanji: '風邪', reading: 'かぜ' }, { kanji: '引', reading: 'ひ' }] },
        { jp: '懐が寒い', vn: 'Cháy túi (hết tiền).', furigana: [{ kanji: '懐', reading: 'ふところ' }, { kanji: '寒', reading: 'さむ' }] }
    ],
    'つめたい': [
        { jp: '冷たい水', vn: 'Nước lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }, { kanji: '水', reading: 'みず' }] },
        { jp: '冷たいジュース', vn: 'Nước trái cây lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }] },
        { jp: '手が冷たいです。', vn: 'Tay lạnh.', furigana: [{ kanji: '手', reading: 'て' }, { kanji: '冷', reading: 'つめ' }] },
        { jp: '冷たい人', vn: 'Người lạnh lùng.', furigana: [{ kanji: '冷', reading: 'つめ' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '冷たいビール', vn: 'Bia lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }] },
        { jp: '冷たくします。', vn: 'Làm lạnh.', furigana: [{ kanji: '冷', reading: 'つめ' }] }
    ],
    'むずかしい': [
        { jp: '難しい問題', vn: 'Vấn đề khó.', furigana: [{ kanji: '難', reading: 'むずか' }, { kanji: '問題', reading: 'もんだい' }] },
        { jp: '日本語は難しいです。', vn: 'Tiếng Nhật khó.', furigana: [{ kanji: '日本語', reading: 'にほんご' }, { kanji: '難', reading: 'むずか' }] },
        { jp: '難しい本', vn: 'Sách khó (hiểu).', furigana: [{ kanji: '難', reading: 'むずか' }, { kanji: '本', reading: 'ほん' }] },
        { jp: '難しくないです。', vn: 'Không khó.', furigana: [{ kanji: '難', reading: 'むずか' }] },
        { jp: '難しい試験', vn: 'Kỳ thi khó.', furigana: [{ kanji: '難', reading: 'むずか' }, { kanji: '試験', reading: 'しけん' }] },
        { jp: '漢字は難しいです。', vn: 'Chữ Hán khó.', furigana: [{ kanji: '漢字', reading: 'かんじ' }, { kanji: '難', reading: 'むずか' }] }
    ],
    'やさしい': [
        { jp: '易しい問題', vn: 'Vấn đề dễ.', furigana: [{ kanji: '易', reading: 'やさ' }, { kanji: '問題', reading: 'もんだい' }] },
        { jp: 'この本は易しいです。', vn: 'Quyển sách này dễ.', furigana: [{ kanji: '本', reading: 'ほん' }, { kanji: '易', reading: 'やさ' }] },
        { jp: '優しい人', vn: 'Người hiền lành (dùng chữ Hán khác).', furigana: [{ kanji: '優', reading: 'やさ' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '易しい日本語', vn: 'Tiếng Nhật dễ.', furigana: [{ kanji: '易', reading: 'やさ' }, { kanji: '日本語', reading: 'にほんご' }] },
        { jp: '先生は優しいです。', vn: 'Thầy giáo hiền.', furigana: [{ kanji: '先生', reading: 'せんせい' }, { kanji: '優', reading: 'やさ' }] },
        { jp: '易しく説明します。', vn: 'Giải thích một cách dễ hiểu.', furigana: [{ kanji: '易', reading: 'やさ' }, { kanji: '説明', reading: 'せつめい' }] }
    ],
    'たかい': [
        { jp: '高い山', vn: 'Núi cao.', furigana: [{ kanji: '高', reading: 'たか' }, { kanji: '山', reading: 'やま' }] },
        { jp: '値段が高い', vn: 'Giá cao (đắt).', furigana: [{ kanji: '値段', reading: 'ねだん' }, { kanji: '高', reading: 'たか' }] },
        { jp: '背が高い', vn: 'Dáng cao.', furigana: [{ kanji: '背', reading: 'せ' }, { kanji: '高', reading: 'たか' }] },
        { jp: '高いカメラ', vn: 'Máy ảnh đắt tiền.', furigana: [{ kanji: '高', reading: 'たか' }] },
        { jp: 'ビルが高いです。', vn: 'Tòa nhà cao.', furigana: [{ kanji: '高', reading: 'たか' }] },
        { jp: '高すぎます。', vn: 'Đắt quá / Cao quá.', furigana: [{ kanji: '高', reading: 'たか' }] }
    ],
    'やすい': [
        { jp: '安い店', vn: 'Cửa hàng giá rẻ.', furigana: [{ kanji: '安', reading: 'やす' }, { kanji: '店', reading: 'みせ' }] },
        { jp: '値段が安いです。', vn: 'Giá rẻ.', furigana: [{ kanji: '値段', reading: 'ねだん' }, { kanji: '安', reading: 'やす' }] },
        { jp: '安いシャツ', vn: 'Áo sơ mi rẻ.', furigana: [{ kanji: '安', reading: 'やす' }] },
        { jp: '安く買いました。', vn: 'Đã mua với giá rẻ.', furigana: [{ kanji: '安', reading: 'やす' }, { kanji: '買', reading: 'か' }] },
        { jp: '安売り', vn: 'Bán rẻ (giảm giá).', furigana: [{ kanji: '安売', reading: 'やすう' }] },
        { jp: 'この本は安いです。', vn: 'Quyển sách này rẻ.', furigana: [{ kanji: '本', reading: 'ほん' }, { kanji: '安', reading: 'やす' }] }
    ],
    'ひくい': [
        { jp: '低い山', vn: 'Núi thấp.', furigana: [{ kanji: '低', reading: 'ひく' }, { kanji: '山', reading: 'やま' }] },
        { jp: '背が低い', vn: 'Dáng thấp.', furigana: [{ kanji: '背', reading: 'せ' }, { kanji: '低', reading: 'ひく' }] },
        { jp: '低い声', vn: 'Giọng trầm (thấp).', furigana: [{ kanji: '低', reading: 'ひく' }, { kanji: '声', reading: 'こえ' }] },
        { jp: '温度が低い', vn: 'Nhiệt độ thấp.', furigana: [{ kanji: '温度', reading: 'おんど' }, { kanji: '低', reading: 'ひく' }] },
        { jp: '低いテーブル', vn: 'Cái bàn thấp.', furigana: [{ kanji: '低', reading: 'ひく' }] },
        { jp: 'レベルが低い', vn: 'Trình độ thấp.', furigana: [{ kanji: '低', reading: 'ひく' }] }
    ],
    'おもしろい': [
        { jp: '面白い映画', vn: 'Phim hay / thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ' }, { kanji: '映画', reading: 'えいが' }] },
        { jp: '面白い人', vn: 'Người thú vị (hài hước).', furigana: [{ kanji: '面白', reading: 'おもしろ' }, { kanji: '人', reading: 'ひと' }] },
        { jp: 'ゲームは面白いです。', vn: 'Trò chơi thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ' }] },
        { jp: '面白い本', vn: 'Sách hay.', furigana: [{ kanji: '面白', reading: 'おもしろ' }, { kanji: '本', reading: 'ほん' }] },
        { jp: '面白くないです。', vn: 'Không thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ' }] },
        { jp: '面白い話', vn: 'Câu chuyện thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ' }, { kanji: '話', reading: 'はなし' }] }
    ],
    'おいしい': [
        { jp: 'おいしい料理', vn: 'Món ăn ngon.', furigana: [{ kanji: '料理', reading: 'りょうり' }] },
        { jp: 'おいしい水', vn: 'Nước ngon.', furigana: [{ kanji: '水', reading: 'みず' }] },
        { jp: 'これはおいしいです。', vn: 'Cái này ngon.', furigana: [] },
        { jp: 'おいしい店', vn: 'Quán ăn ngon.', furigana: [{ kanji: '店', reading: 'みせ' }] },
        { jp: 'おいしそうです。', vn: 'Trông có vẻ ngon.', furigana: [] },
        { jp: 'おいしいコーヒー', vn: 'Cà phê ngon.', furigana: [] }
    ],
    'いそがしい': [
        { jp: '忙しい日', vn: 'Ngày bận rộn.', furigana: [{ kanji: '忙', reading: 'いそが' }, { kanji: '日', reading: 'ひ' }] },
        { jp: '仕事が忙しいです。', vn: 'Công việc bận rộn.', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '忙', reading: 'いそが' }] },
        { jp: '忙しい人', vn: 'Người bận rộn.', furigana: [{ kanji: '忙', reading: 'いそが' }, { kanji: '人', reading: 'ひと' }] },
        { jp: '今日は忙しいですか。', vn: 'Hôm nay bạn có bận không?', furigana: [{ kanji: '今日', reading: 'きょう' }, { kanji: '忙', reading: 'いそが' }] },
        { jp: '忙しくて行けません。', vn: 'Vì bận nên tôi không đi được.', furigana: [{ kanji: '忙', reading: 'いそが' }, { kanji: '行', reading: 'い' }] },
        { jp: '毎日忙しいです。', vn: 'Mỗi ngày đều bận.', furigana: [{ kanji: '毎日', reading: 'まいにち' }, { kanji: '忙', reading: 'いそが' }] }
    ],
    'たのしい': [
        { jp: '楽しいパーティー', vn: 'Bữa tiệc vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }] },
        { jp: '毎日が楽しいです。', vn: 'Mỗi ngày đều vui vẻ.', furigana: [{ kanji: '毎日', reading: 'まいにち' }, { kanji: '楽', reading: 'たの' }] },
        { jp: '楽しい一日', vn: 'Một ngày vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '一日', reading: 'いちにち' }] },
        { jp: '楽しい旅行', vn: 'Chuyến du lịch vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '旅行', reading: 'りょこう' }] },
        { jp: '楽しく勉強します。', vn: 'Học một cách vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '勉強', reading: 'べんきょう' }] },
        { jp: '楽しい音楽', vn: 'Âm nhạc vui tươi.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '音楽', reading: 'おんがく' }] }
    ],
    'しろい': [
        { jp: '白いシャツ', vn: 'Áo sơ mi trắng.', furigana: [{ kanji: '白', reading: 'しろ' }] },
        { jp: '白い雲', vn: 'Mây trắng.', furigana: [{ kanji: '白', reading: 'しろ' }, { kanji: '雲', reading: 'くも' }] },
        { jp: '白い花', vn: 'Hoa trắng.', furigana: [{ kanji: '白', reading: 'しろ' }, { kanji: '花', reading: 'はな' }] },
        { jp: '顔が白い', vn: 'Mặt trắng (nhợt nhạt).', furigana: [{ kanji: '顔', reading: 'かお' }, { kanji: '白', reading: 'しろ' }] },
        { jp: '白い車', vn: 'Xe ô tô trắng.', furigana: [{ kanji: '白', reading: 'しろ' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '雪は白いです。', vn: 'Tuyết màu trắng.', furigana: [{ kanji: '雪', reading: 'ゆき' }, { kanji: '白', reading: 'しろ' }] }
    ],
    'くろい': [
        { jp: '黒いかばん', vn: 'Cặp màu đen.', furigana: [{ kanji: '黒', reading: 'くろ' }] },
        { jp: '黒い髪', vn: 'Tóc đen.', furigana: [{ kanji: '黒', reading: 'くろ' }, { kanji: '髪', reading: 'かみ' }] },
        { jp: '黒い服', vn: 'Quần áo đen.', furigana: [{ kanji: '黒', reading: 'くろ' }, { kanji: '服', reading: 'ふく' }] },
        { jp: '黒い靴', vn: 'Giày đen.', furigana: [{ kanji: '黒', reading: 'くろ' }, { kanji: '靴', reading: 'くつ' }] },
        { jp: '黒猫', vn: 'Mèo đen.', furigana: [{ kanji: '黒猫', reading: 'くろねこ' }] },
        { jp: '黒いペン', vn: 'Bút mực đen.', furigana: [{ kanji: '黒', reading: 'くろ' }] }
    ],
    'あかい': [
        { jp: '赤いりんご', vn: 'Quả táo đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }] },
        { jp: '赤いバラ', vn: 'Hoa hồng đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }] },
        { jp: '顔が赤いです。', vn: 'Mặt đỏ.', furigana: [{ kanji: '顔', reading: 'かお' }, { kanji: '赤', reading: 'あか' }] },
        { jp: '赤い靴', vn: 'Giày đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }, { kanji: '靴', reading: 'くつ' }] },
        { jp: '赤い車', vn: 'Xe đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '赤ちゃん', vn: 'Em bé (sơ sinh).', furigana: [{ kanji: '赤', reading: 'あか' }] }
    ],
    'あおい': [
        { jp: '青い空', vn: 'Bầu trời xanh.', furigana: [{ kanji: '青', reading: 'あお' }, { kanji: '空', reading: 'そら' }] },
        { jp: '青い海', vn: 'Biển xanh.', furigana: [{ kanji: '青', reading: 'あお' }, { kanji: '海', reading: 'うみ' }] },
        { jp: '青い目', vn: 'Mắt xanh.', furigana: [{ kanji: '青', reading: 'あお' }, { kanji: '目', reading: 'め' }] },
        { jp: '青いシャツ', vn: 'Áo sơ mi xanh.', furigana: [{ kanji: '青', reading: 'あお' }] },
        { jp: '顔が青いです。', vn: 'Mặt xanh xao.', furigana: [{ kanji: '顔', reading: 'かお' }, { kanji: '青', reading: 'あお' }] },
        { jp: '青信号', vn: 'Đèn xanh (giao thông).', furigana: [{ kanji: '青信号', reading: 'あおしんごう' }] }
    ]
};

// Function to find lesson 8 and update vocab
const lesson8StartPattern = /const lesson8Data: LessonDetail = \{/;
const vocabStartPattern = /vocabulary: \[/;
const vocabEndPattern = /^\s{2}\],?$/;

const lines = content.split('\n');
let inLesson8 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson8StartPattern.test(line)) {
        inLesson8 = true;
    }

    if (inLesson8 && vocabStartPattern.test(line)) {
        inVocab = true;
        continue;
    }

    if (inVocab && vocabEndPattern.test(line)) {
        inVocab = false;
        inLesson8 = false;
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
