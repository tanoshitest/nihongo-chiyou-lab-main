/**
 * Kanji Annotator Utility
 * Provides furigana (reading) and Vietnamese meaning for common JLPT N4-N3 kanji.
 * Used in review mode to annotate question text.
 */

export interface KanjiInfo {
    furigana: string; // hiragana reading
    meaning: string;  // Vietnamese meaning
}

// Dictionary of kanji words with their furigana and Vietnamese meaning
// Key is the kanji word (may be 1-4 chars), value is furigana + meaning
export const KANJI_DICT: Record<string, KanjiInfo> = {
    // === MULTI-CHARACTER WORDS (match before single chars) ===

    // Household appliances
    "扇風機": { furigana: "せんぷうき", meaning: "quạt điện" },
    "洗濯機": { furigana: "せんたくき", meaning: "máy giặt" },
    "掃除機": { furigana: "そうじき", meaning: "máy hút bụi" },
    "炊飯器": { furigana: "すいはんき", meaning: "nồi cơm điện" },
    "電子レンジ": { furigana: "でんしれんじ", meaning: "lò vi sóng" },
    "冷蔵庫": { furigana: "れいぞうこ", meaning: "tủ lạnh" },
    "電話": { furigana: "でんわ", meaning: "điện thoại" },
    "電気": { furigana: "でんき", meaning: "điện/đèn điện" },
    "電機": { furigana: "でんき", meaning: "điện cơ" },
    "電器": { furigana: "でんき", meaning: "đồ điện" },
    "電車": { furigana: "でんしゃ", meaning: "tàu điện" },

    // Kitchen items
    "包丁": { furigana: "ほうちょう", meaning: "dao bếp" },
    "薬缶": { furigana: "やかん", meaning: "ấm đun nước" },
    "茶碗": { furigana: "ちゃわん", meaning: "chén trà/bát cơm" },
    "茶わん": { furigana: "ちゃわん", meaning: "chén trà/bát cơm" },
    "食器": { furigana: "しょっき", meaning: "bát đĩa/dụng cụ ăn uống" },
    "容器": { furigana: "ようき", meaning: "đồ đựng/vật chứa" },
    "布団": { furigana: "ふとん", meaning: "chăn/nệm kiểu Nhật" },
    "まな板": { furigana: "まないた", meaning: "cái thớt" },

    // Stationery / Office
    "鉛筆": { furigana: "えんぴつ", meaning: "bút chì" },
    "消しゴム": { furigana: "けしごむ", meaning: "cục tẩy" },
    "付せん": { furigana: "ふせん", meaning: "giấy ghi chú" },
    "文房具": { furigana: "ぶんぼうぐ", meaning: "văn phòng phẩm" },
    "書類": { furigana: "しょるい", meaning: "tài liệu/giấy tờ" },
    "引き出し": { furigana: "ひきだし", meaning: "ngăn kéo" },
    "本棚": { furigana: "ほんだな", meaning: "giá sách" },

    // Cosmetics / Hygiene
    "化粧品": { furigana: "けしょうひん", meaning: "mỹ phẩm" },
    "化粧水": { furigana: "けしょうすい", meaning: "nước hoa hồng/toner" },
    "香水": { furigana: "こうすい", meaning: "nước hoa" },
    "清水": { furigana: "せいすい", meaning: "nước sạch" },
    "香気": { furigana: "こうき", meaning: "hương thơm" },
    "石鹸": { furigana: "せっけん", meaning: "xà phòng" },
    "洗剤": { furigana: "せんざい", meaning: "chất tẩy rửa" },
    "歯ブラシ": { furigana: "はぶらし", meaning: "bàn chải đánh răng" },
    "歯磨き粉": { furigana: "はみがきこ", meaning: "kem đánh răng" },
    "歯磨き": { furigana: "はみがき", meaning: "đánh răng" },

    // Education
    "教科書": { furigana: "きょうかしょ", meaning: "sách giáo khoa" },
    "参考書": { furigana: "さんこうしょ", meaning: "sách tham khảo" },
    "辞書": { furigana: "じしょ", meaning: "từ điển" },
    "図書館": { furigana: "としょかん", meaning: "thư viện" },
    "学校": { furigana: "がっこう", meaning: "trường học" },
    "大学": { furigana: "だいがく", meaning: "đại học" },
    "小学校": { furigana: "しょうがっこう", meaning: "trường tiểu học" },
    "中学校": { furigana: "ちゅうがっこう", meaning: "trường THCS" },
    "高校": { furigana: "こうこう", meaning: "trường THPT" },
    "宿題": { furigana: "しゅくだい", meaning: "bài tập về nhà" },
    "課題": { furigana: "かだい", meaning: "chủ đề/nhiệm vụ" },
    "問題": { furigana: "もんだい", meaning: "vấn đề/câu hỏi" },
    "復習": { furigana: "ふくしゅう", meaning: "ôn tập" },
    "予習": { furigana: "よしゅう", meaning: "chuẩn bị/học trước" },
    "試験": { furigana: "しけん", meaning: "kỳ thi" },
    "勉強": { furigana: "べんきょう", meaning: "học tập" },
    "先生": { furigana: "せんせい", meaning: "giáo viên" },
    "学生": { furigana: "がくせい", meaning: "học sinh" },

    // Feelings / Emotions
    "嬉しい": { furigana: "うれしい", meaning: "vui mừng" },
    "楽しい": { furigana: "たのしい", meaning: "vui vẻ" },
    "悲しい": { furigana: "かなしい", meaning: "buồn" },
    "悲しくて": { furigana: "かなしくて", meaning: "vì buồn" },
    "寂しい": { furigana: "さびしい", meaning: "cô đơn" },
    "幸せ": { furigana: "しあわせ", meaning: "hạnh phúc" },
    "恥ずかしい": { furigana: "はずかしい", meaning: "xấu hổ" },
    "恥ずかしくて": { furigana: "はずかしくて", meaning: "vì xấu hổ" },
    "羨ましい": { furigana: "うらやましい", meaning: "ghen tị" },
    "羨ましくて": { furigana: "うらやましくて", meaning: "vì ghen tị" },
    "驚いた": { furigana: "おどろいた", meaning: "ngạc nhiên" },
    "驚く": { furigana: "おどろく", meaning: "ngạc nhiên" },
    "怒って": { furigana: "おこって", meaning: "tức giận (dạng て)" },
    "怒る": { furigana: "おこる", meaning: "tức giận" },
    "怖い": { furigana: "こわい", meaning: "đáng sợ" },
    "恐い": { furigana: "こわい", meaning: "đáng sợ" },
    "懐かしい": { furigana: "なつかしい", meaning: "hoài niệm" },
    "苦しい": { furigana: "くるしい", meaning: "đau khổ" },
    "面白い": { furigana: "おもしろい", meaning: "thú vị" },
    "面白くて": { furigana: "おもしろくて", meaning: "vì thú vị" },
    "安心": { furigana: "あんしん", meaning: "an tâm" },
    "不安": { furigana: "ふあん", meaning: "bất an" },
    "安全": { furigana: "あんぜん", meaning: "an toàn" },
    "不要": { furigana: "ふよう", meaning: "không cần thiết" },
    "必要": { furigana: "ひつよう", meaning: "cần thiết" },
    "大切": { furigana: "たいせつ", meaning: "quan trọng" },
    "大丈夫": { furigana: "だいじょうぶ", meaning: "không sao" },
    "清潔": { furigana: "せいけつ", meaning: "sạch sẽ" },
    "生活": { furigana: "せいかつ", meaning: "sinh hoạt/cuộc sống" },
    "精神": { furigana: "せいしん", meaning: "tinh thần" },
    "政治": { furigana: "せいじ", meaning: "chính trị" },

    // Body parts
    "顔": { furigana: "かお", meaning: "khuôn mặt" },
    "頭": { furigana: "あたま", meaning: "đầu" },
    "足": { furigana: "あし", meaning: "chân" },
    "手": { furigana: "て", meaning: "tay" },
    "目": { furigana: "め", meaning: "mắt" },
    "耳": { furigana: "みみ", meaning: "tai" },
    "口": { furigana: "くち", meaning: "miệng" },
    "鼻": { furigana: "はな", meaning: "mũi" },
    "腰": { furigana: "こし", meaning: "eo/hông" },
    "指": { furigana: "ゆび", meaning: "ngón tay" },
    "背": { furigana: "せ", meaning: "lưng/chiều cao" },
    "髪": { furigana: "かみ", meaning: "tóc" },
    "腕": { furigana: "うで", meaning: "cánh tay" },
    "肩": { furigana: "かた", meaning: "vai" },
    "首": { furigana: "くび", meaning: "cổ" },
    "胸": { furigana: "むね", meaning: "ngực" },
    "腹": { furigana: "はら", meaning: "bụng" },
    "脚": { furigana: "あし", meaning: "chân" },
    "膝": { furigana: "ひざ", meaning: "đầu gối" },

    // Clothing
    "服": { furigana: "ふく", meaning: "quần áo" },
    "着物": { furigana: "きもの", meaning: "kimono" },
    "靴": { furigana: "くつ", meaning: "giày" },
    "帽子": { furigana: "ぼうし", meaning: "mũ" },
    "鞄": { furigana: "かばん", meaning: "túi xách" },
    "手袋": { furigana: "てぶくろ", meaning: "găng tay" },
    "眼鏡": { furigana: "めがね", meaning: "kính mắt" },
    "腕時計": { furigana: "うでどけい", meaning: "đồng hồ đeo tay" },
    "時計": { furigana: "とけい", meaning: "đồng hồ" },
    "傘": { furigana: "かさ", meaning: "cái ô" },

    // Kitchen/Household items
    "皿": { furigana: "さら", meaning: "cái đĩa" },
    "鍋": { furigana: "なべ", meaning: "cái nồi" },
    "箸": { furigana: "はし", meaning: "đũa" },
    "鏡": { furigana: "かがみ", meaning: "gương soi" },
    "蓋": { furigana: "ふた", meaning: "vung/nắp" },

    // Food
    "肉": { furigana: "にく", meaning: "thịt" },
    "魚": { furigana: "さかな", meaning: "cá" },
    "野菜": { furigana: "やさい", meaning: "rau củ" },
    "果物": { furigana: "くだもの", meaning: "trái cây" },
    "御飯": { furigana: "ごはん", meaning: "cơm" },
    "ご飯": { furigana: "ごはん", meaning: "cơm" },
    "晩ご飯": { furigana: "ばんごはん", meaning: "cơm tối" },
    "朝ご飯": { furigana: "あさごはん", meaning: "cơm sáng" },
    "昼ご飯": { furigana: "ひるごはん", meaning: "cơm trưa" },
    "玉ねぎ": { furigana: "たまねぎ", meaning: "hành tây" },
    "砂糖": { furigana: "さとう", meaning: "đường" },
    "塩": { furigana: "しお", meaning: "muối" },

    // Nature / Weather
    "虹": { furigana: "にじ", meaning: "cầu vồng" },
    "雨": { furigana: "あめ", meaning: "mưa" },
    "雲": { furigana: "くも", meaning: "mây" },
    "雪": { furigana: "ゆき", meaning: "tuyết" },
    "雷": { furigana: "かみなり", meaning: "sấm sét" },
    "嵐": { furigana: "あらし", meaning: "bão" },
    "台風": { furigana: "たいふう", meaning: "bão nhiệt đới" },
    "風": { furigana: "かぜ", meaning: "gió" },
    "晴れ": { furigana: "はれ", meaning: "nắng đẹp" },
    "晴": { furigana: "はれ", meaning: "nắng đẹp" },
    "空": { furigana: "そら", meaning: "bầu trời" },
    "山": { furigana: "やま", meaning: "núi" },
    "川": { furigana: "かわ", meaning: "sông" },
    "海": { furigana: "うみ", meaning: "biển" },
    "木": { furigana: "き", meaning: "cây" },
    "花": { furigana: "はな", meaning: "hoa" },
    "地震": { furigana: "じしん", meaning: "động đất" },
    "天気": { furigana: "てんき", meaning: "thời tiết" },
    "温度": { furigana: "おんど", meaning: "nhiệt độ" },

    // Family / People
    "人": { furigana: "ひと", meaning: "người" },
    "男": { furigana: "おとこ", meaning: "đàn ông" },
    "女": { furigana: "おんな", meaning: "phụ nữ" },
    "子供": { furigana: "こども", meaning: "trẻ em" },
    "友達": { furigana: "ともだち", meaning: "bạn bè" },
    "家族": { furigana: "かぞく", meaning: "gia đình" },
    "彼": { furigana: "かれ", meaning: "anh ấy" },
    "彼女": { furigana: "かのじょ", meaning: "cô ấy" },
    "弟": { furigana: "おとうと", meaning: "em trai" },
    "妹": { furigana: "いもうと", meaning: "em gái" },
    "兄": { furigana: "あに", meaning: "anh trai" },
    "姉": { furigana: "あね", meaning: "chị gái" },
    "父": { furigana: "ちち", meaning: "cha" },
    "母": { furigana: "はは", meaning: "mẹ" },
    "有名人": { furigana: "ゆうめいじん", meaning: "người nổi tiếng" },
    "有名": { furigana: "ゆうめい", meaning: "nổi tiếng" },

    // Daily life
    "料理": { furigana: "りょうり", meaning: "nấu ăn/món ăn" },
    "掃除": { furigana: "そうじ", meaning: "dọn dẹp" },
    "洗濯": { furigana: "せんたく", meaning: "giặt đồ" },
    "買い物": { furigana: "かいもの", meaning: "mua sắm" },
    "散歩": { furigana: "さんぽ", meaning: "đi dạo" },
    "運動": { furigana: "うんどう", meaning: "vận động" },
    "旅行": { furigana: "りょこう", meaning: "du lịch" },
    "仕事": { furigana: "しごと", meaning: "công việc" },
    "食事": { furigana: "しょくじ", meaning: "bữa ăn" },
    "入浴": { furigana: "にゅうよく", meaning: "tắm" },
    "睡眠": { furigana: "すいみん", meaning: "giấc ngủ" },

    // Transportation
    "自転車": { furigana: "じてんしゃ", meaning: "xe đạp" },
    "車": { furigana: "くるま", meaning: "xe hơi" },
    "飛行機": { furigana: "ひこうき", meaning: "máy bay" },
    "自動車": { furigana: "じどうしゃ", meaning: "ô tô" },
    "新幹線": { furigana: "しんかんせん", meaning: "tàu cao tốc" },

    // Places
    "駅": { furigana: "えき", meaning: "nhà ga" },
    "病院": { furigana: "びょういん", meaning: "bệnh viện" },
    "銀行": { furigana: "ぎんこう", meaning: "ngân hàng" },
    "会社": { furigana: "かいしゃ", meaning: "công ty" },
    "部屋": { furigana: "へや", meaning: "phòng" },
    "家": { furigana: "いえ", meaning: "nhà" },
    "玄関": { furigana: "げんかん", meaning: "cửa trước" },
    "窓": { furigana: "まど", meaning: "cửa sổ" },
    "庭": { furigana: "にわ", meaning: "sân vườn" },
    "公園": { furigana: "こうえん", meaning: "công viên" },
    "郵便局": { furigana: "ゆうびんきょく", meaning: "bưu điện" },
    "市場": { furigana: "いちば", meaning: "chợ" },
    "店": { furigana: "みせ", meaning: "cửa hàng" },

    // Time
    "今": { furigana: "いま", meaning: "bây giờ" },
    "今日": { furigana: "きょう", meaning: "hôm nay" },
    "昨日": { furigana: "きのう", meaning: "hôm qua" },
    "明日": { furigana: "あした", meaning: "ngày mai" },
    "朝": { furigana: "あさ", meaning: "buổi sáng" },
    "夜": { furigana: "よる", meaning: "buổi tối" },
    "午前": { furigana: "ごぜん", meaning: "buổi sáng (AM)" },
    "午後": { furigana: "ごご", meaning: "buổi chiều (PM)" },
    "毎日": { furigana: "まいにち", meaning: "mỗi ngày" },
    "先週": { furigana: "せんしゅう", meaning: "tuần trước" },
    "来週": { furigana: "らいしゅう", meaning: "tuần sau" },
    "今週": { furigana: "こんしゅう", meaning: "tuần này" },
    "夏休み": { furigana: "なつやすみ", meaning: "nghỉ hè" },
    "冬": { furigana: "ふゆ", meaning: "mùa đông" },
    "夏": { furigana: "なつ", meaning: "mùa hè" },
    "春": { furigana: "はる", meaning: "mùa xuân" },
    "秋": { furigana: "あき", meaning: "mùa thu" },

    // Counters / Numbers
    "一": { furigana: "いち", meaning: "một" },
    "二": { furigana: "に", meaning: "hai" },
    "三": { furigana: "さん", meaning: "ba" },
    "四": { furigana: "し/よん", meaning: "bốn" },
    "五": { furigana: "ご", meaning: "năm" },
    "六": { furigana: "ろく", meaning: "sáu" },
    "七": { furigana: "しち/なな", meaning: "bảy" },
    "八": { furigana: "はち", meaning: "tám" },
    "九": { furigana: "く/きゅう", meaning: "chín" },
    "十": { furigana: "じゅう", meaning: "mười" },
    "百": { furigana: "ひゃく", meaning: "trăm" },
    "千": { furigana: "せん", meaning: "nghìn" },
    "万": { furigana: "まん", meaning: "vạn" },
    "円": { furigana: "えん", meaning: "yên" },
    "十個": { furigana: "じゅっこ", meaning: "10 cái" },
    "二個": { furigana: "にこ", meaning: "2 cái" },
    "個": { furigana: "こ", meaning: "cái/chiếc" },
    "枚": { furigana: "まい", meaning: "tờ/tấm" },
    "二枚": { furigana: "にまい", meaning: "2 tờ/tấm" },
    "十枚": { furigana: "じゅうまい", meaning: "10 tờ/tấm" },
    "本": { furigana: "ほん", meaning: "sách/cuốn" },
    "二本": { furigana: "にほん", meaning: "2 chiếc" },
    "冊": { furigana: "さつ", meaning: "cuốn sách" },
    "二冊": { furigana: "にさつ", meaning: "2 cuốn sách" },
    "十冊": { furigana: "じゅっさつ", meaning: "10 cuốn sách" },
    "台": { furigana: "だい", meaning: "chiếc/máy" },
    "二台": { furigana: "にだい", meaning: "2 chiếc máy" },
    "杯": { furigana: "はい", meaning: "ly/chén" },
    "二杯": { furigana: "にはい", meaning: "2 ly/chén" },
    "匹": { furigana: "ひき", meaning: "con vật" },
    "羽": { furigana: "わ", meaning: "con (chim)" },
    "一羽": { furigana: "いちわ", meaning: "1 con chim" },
    "件": { furigana: "けん", meaning: "vụ/trường hợp" },
    "階": { furigana: "かい", meaning: "tầng" },
    "着": { furigana: "ちゃく", meaning: "bộ quần áo" },
    "歳": { furigana: "さい", meaning: "tuổi" },
    "十歳": { furigana: "じゅっさい", meaning: "10 tuổi" },

    // Colors
    "赤": { furigana: "あか", meaning: "đỏ" },
    "青": { furigana: "あお", meaning: "xanh dương" },
    "白": { furigana: "しろ", meaning: "trắng" },
    "黒": { furigana: "くろ", meaning: "đen" },
    "黄": { furigana: "き", meaning: "vàng" },
    "緑": { furigana: "みどり", meaning: "xanh lá" },
    "茶": { furigana: "ちゃ", meaning: "nâu" },

    // Actions / Verbs
    "食べる": { furigana: "たべる", meaning: "ăn" },
    "飲む": { furigana: "のむ", meaning: "uống" },
    "行く": { furigana: "いく", meaning: "đi" },
    "来る": { furigana: "くる", meaning: "đến" },
    "帰る": { furigana: "かえる", meaning: "về" },
    "見る": { furigana: "みる", meaning: "xem/nhìn" },
    "聞く": { furigana: "きく", meaning: "nghe/hỏi" },
    "話す": { furigana: "はなす", meaning: "nói/trò chuyện" },
    "書く": { furigana: "かく", meaning: "viết" },
    "読む": { furigana: "よむ", meaning: "đọc" },
    "買う": { furigana: "かう", meaning: "mua" },
    "売る": { furigana: "うる", meaning: "bán" },
    "使う": { furigana: "つかう", meaning: "sử dụng" },
    "使って": { furigana: "つかって", meaning: "dùng (dạng て)" },
    "作る": { furigana: "つくる", meaning: "làm/nấu" },
    "洗う": { furigana: "あらう", meaning: "rửa" },
    "消す": { furigana: "けす", meaning: "tắt/xóa" },
    "消った": { furigana: "けした", meaning: "đã tắt" },
    "付ける": { furigana: "つける", meaning: "bật/đeo" },
    "開ける": { furigana: "あける", meaning: "mở" },
    "閉める": { furigana: "しめる", meaning: "đóng" },
    "起きる": { furigana: "おきる", meaning: "thức dậy" },
    "寝る": { furigana: "ねる", meaning: "ngủ" },
    "入る": { furigana: "はいる", meaning: "vào" },
    "出る": { furigana: "でる", meaning: "ra" },
    "教える": { furigana: "おしえる", meaning: "dạy/chỉ" },
    "習う": { furigana: "ならう", meaning: "học (từ người khác)" },
    "覚える": { furigana: "おぼえる", meaning: "ghi nhớ" },
    "忘れる": { furigana: "わすれる", meaning: "quên" },
    "忘れて": { furigana: "わすれて", meaning: "quên (dạng て)" },
    "待つ": { furigana: "まつ", meaning: "đợi" },
    "会う": { furigana: "あう", meaning: "gặp" },
    "歩く": { furigana: "あるく", meaning: "đi bộ" },
    "走る": { furigana: "はしる", meaning: "chạy" },
    "乗る": { furigana: "のる", meaning: "lên (xe)" },
    "降りる": { furigana: "おりる", meaning: "xuống (xe)" },
    "着く": { furigana: "つく", meaning: "đến nơi" },
    "置く": { furigana: "おく", meaning: "đặt" },
    "持つ": { furigana: "もつ", meaning: "cầm/có" },
    "貸す": { furigana: "かす", meaning: "cho mượn" },
    "借りる": { furigana: "かりる", meaning: "mượn" },
    "払う": { furigana: "はらう", meaning: "trả tiền" },
    "送る": { furigana: "おくる", meaning: "gửi" },
    "受け取る": { furigana: "うけとる", meaning: "nhận" },
    "泣く": { furigana: "なく", meaning: "khóc" },
    "笑う": { furigana: "わらう", meaning: "cười" },
    "磨く": { furigana: "みがく", meaning: "đánh (răng)/đánh bóng" },
    "磨いて": { furigana: "みがいて", meaning: "đánh (dạng て)" },
    "沸かす": { furigana: "わかす", meaning: "đun sôi" },
    "乾かす": { furigana: "かわかす", meaning: "làm khô" },
    "温める": { furigana: "あたためる", meaning: "hâm nóng" },
    "炊く": { furigana: "たく", meaning: "nấu (cơm)" },
    "盛り付ける": { furigana: "もりつける", meaning: "bày biện (thức ăn)" },
    "切る": { furigana: "きる", meaning: "cắt" },
    "混ぜる": { furigana: "まぜる", meaning: "khuấy/trộn" },
    "並べる": { furigana: "ならべる", meaning: "xếp/sắp" },
    "留める": { furigana: "とめる", meaning: "giữ/ghim lại" },
    "貼る": { furigana: "はる", meaning: "dán" },
    "提出する": { furigana: "ていしゅつする", meaning: "nộp" },
    "整える": { furigana: "ととのえる", meaning: "sắp xếp/chỉnh lý" },
    "隠す": { furigana: "かくす", meaning: "che giấu" },
    "壊れる": { furigana: "こわれる", meaning: "bị hỏng" },
    "叶う": { furigana: "かなう", meaning: "thành hiện thực" },
    "頼む": { furigana: "たのむ", meaning: "đặt/yêu cầu" },

    // Adjectives
    "近い": { furigana: "ちかい", meaning: "gần" },
    "遠い": { furigana: "とおい", meaning: "xa" },
    "早い": { furigana: "はやい", meaning: "sớm/nhanh" },
    "遅い": { furigana: "おそい", meaning: "muộn/chậm" },
    "長い": { furigana: "ながい", meaning: "dài" },
    "短い": { furigana: "みじかい", meaning: "ngắn" },
    "高い": { furigana: "たかい", meaning: "cao/đắt" },
    "低い": { furigana: "ひくい", meaning: "thấp" },
    "広い": { furigana: "ひろい", meaning: "rộng" },
    "狭い": { furigana: "せまい", meaning: "hẹp" },
    "重い": { furigana: "おもい", meaning: "nặng" },
    "軽い": { furigana: "かるい", meaning: "nhẹ" },
    "強い": { furigana: "つよい", meaning: "mạnh" },
    "弱い": { furigana: "よわい", meaning: "yếu" },
    "明るい": { furigana: "あかるい", meaning: "sáng sủa" },
    "暗い": { furigana: "くらい", meaning: "tối tăm" },
    "暖かい": { furigana: "あたたかい", meaning: "ấm áp" },
    "涼しい": { furigana: "すずしい", meaning: "mát mẻ" },
    "寒い": { furigana: "さむい", meaning: "lạnh" },
    "暑い": { furigana: "あつい", meaning: "nóng" },
    "新しい": { furigana: "あたらしい", meaning: "mới" },
    "古い": { furigana: "ふるい", meaning: "cũ" },
    "難しい": { furigana: "むずかしい", meaning: "khó" },
    "易しい": { furigana: "やさしい", meaning: "dễ" },
    "忙しい": { furigana: "いそがしい", meaning: "bận rộn" },
    "大きい": { furigana: "おおきい", meaning: "to" },
    "小さい": { furigana: "ちいさい", meaning: "nhỏ" },
    "悪い": { furigana: "わるい", meaning: "xấu/tệ" },
    "良い": { furigana: "よい", meaning: "tốt" },
    "白い": { furigana: "しろい", meaning: "màu trắng" },

    // Abstract nouns / Other
    "結果": { furigana: "けっか", meaning: "kết quả" },
    "考え": { furigana: "かんがえ", meaning: "suy nghĩ" },
    "夢": { furigana: "ゆめ", meaning: "giấc mơ" },
    "言葉": { furigana: "ことば", meaning: "ngôn ngữ/từ ngữ" },
    "意味": { furigana: "いみ", meaning: "ý nghĩa" },
    "理由": { furigana: "りゆう", meaning: "lý do" },
    "場所": { furigana: "ばしょ", meaning: "địa điểm/nơi chốn" },
    "道": { furigana: "みち", meaning: "con đường" },
    "方法": { furigana: "ほうほう", meaning: "phương pháp" },
    "世界": { furigana: "せかい", meaning: "thế giới" },
    "社会": { furigana: "しゃかい", meaning: "xã hội" },
    "自分": { furigana: "じぶん", meaning: "bản thân" },
    "心": { furigana: "こころ", meaning: "tâm hồn/trái tim" },
    "気持ち": { furigana: "きもち", meaning: "cảm giác/cảm xúc" },
    "気": { furigana: "き", meaning: "khí/tâm trí" },
    "声": { furigana: "こえ", meaning: "giọng nói" },
    "色": { furigana: "いろ", meaning: "màu sắc" },
    "形": { furigana: "かたち", meaning: "hình dạng" },
    "数": { furigana: "かず", meaning: "số lượng" },
    "順番": { furigana: "じゅんばん", meaning: "thứ tự" },
    "荷物": { furigana: "にもつ", meaning: "hành lý/đồ vật" },
    "言い方": { furigana: "いいかた", meaning: "cách nói" },
    "使い方": { furigana: "つかいかた", meaning: "cách dùng" },
    "読み方": { furigana: "よみかた", meaning: "cách đọc" },
    "書き方": { furigana: "かきかた", meaning: "cách viết" },
    "点数": { furigana: "てんすう", meaning: "điểm số" },
    "名前": { furigana: "なまえ", meaning: "tên" },
    "住所": { furigana: "じゅうしょ", meaning: "địa chỉ" },
    "番号": { furigana: "ばんごう", meaning: "số hiệu/số thứ tự" },
    "写真": { furigana: "しゃしん", meaning: "ảnh chụp" },
    "地図": { furigana: "ちず", meaning: "bản đồ" },
    "新聞": { furigana: "しんぶん", meaning: "báo" },
    "雑誌": { furigana: "ざっし", meaning: "tạp chí" },
    "音楽": { furigana: "おんがく", meaning: "âm nhạc" },
    "映画": { furigana: "えいが", meaning: "phim" },

    // Na-adjectives
    "元気": { furigana: "げんき", meaning: "khỏe mạnh" },
    "上手": { furigana: "じょうず", meaning: "giỏi" },
    "下手": { furigana: "へた", meaning: "kém" },
    "便利": { furigana: "べんり", meaning: "tiện lợi" },
    "不便": { furigana: "ふべん", meaning: "bất tiện" },
    "静か": { furigana: "しずか", meaning: "yên tĩnh" },
    "賑やか": { furigana: "にぎやか", meaning: "sôi động" },
    "親切": { furigana: "しんせつ", meaning: "tử tế" },
    "真面目": { furigana: "まじめ", meaning: "nghiêm túc" },
    "丁寧": { furigana: "ていねい", meaning: "lịch sự/cẩn thận" },
    "複雑": { furigana: "ふくざつ", meaning: "phức tạp" },
    "簡単": { furigana: "かんたん", meaning: "đơn giản/dễ" },
    "大事": { furigana: "だいじ", meaning: "quan trọng" },
    "特別": { furigana: "とくべつ", meaning: "đặc biệt" },
    "普通": { furigana: "ふつう", meaning: "bình thường" },
    "自由": { furigana: "じゆう", meaning: "tự do" },

    // Miscellaneous - standalone kanji
    "薬": { furigana: "くすり", meaning: "thuốc" },
    "病気": { furigana: "びょうき", meaning: "bệnh tật" },
    "事故": { furigana: "じこ", meaning: "tai nạn" },
    "匂い": { furigana: "におい", meaning: "mùi hương" },
    "湯": { furigana: "ゆ", meaning: "nước sôi/nước nóng" },
    "お湯": { furigana: "おゆ", meaning: "nước sôi/nước nóng" },
    "外": { furigana: "そと", meaning: "bên ngoài" },
    "中": { furigana: "なか", meaning: "bên trong" },
    "前": { furigana: "まえ", meaning: "trước/phía trước" },
    "後": { furigana: "あと", meaning: "sau" },
    "上": { furigana: "うえ", meaning: "trên" },
    "下": { furigana: "した", meaning: "dưới" },
    "右": { furigana: "みぎ", meaning: "phải" },
    "左": { furigana: "ひだり", meaning: "trái" },
    "誕生日": { furigana: "たんじょうび", meaning: "sinh nhật" },
    "好き": { furigana: "すき", meaning: "thích" },
    "嫌い": { furigana: "きらい", meaning: "ghét" },
    "本当": { furigana: "ほんとう", meaning: "thật sự" },
    "少し": { furigana: "すこし", meaning: "một chút" },
    "たくさん": { furigana: "たくさん", meaning: "nhiều" },
    "全部": { furigana: "ぜんぶ", meaning: "toàn bộ" },
    "一緒": { furigana: "いっしょ", meaning: "cùng nhau" },
    "別々": { furigana: "べつべつ", meaning: "riêng lẻ" },
    "最初": { furigana: "さいしょ", meaning: "đầu tiên" },
    "最後": { furigana: "さいご", meaning: "cuối cùng" },
    "次": { furigana: "つぎ", meaning: "tiếp theo" },
    "一人": { furigana: "ひとり", meaning: "một mình" },
    "二人": { furigana: "ふたり", meaning: "hai người" },
    "手紙": { furigana: "てがみ", meaning: "thư tay" },
    "電子メール": { furigana: "でんしメール", meaning: "email" },
    "注意": { furigana: "ちゅうい", meaning: "chú ý/cẩn thận" },

    // === 43 missing kanji found from data scan ===
    // Verbs / actions
    "終わる": { furigana: "おわる", meaning: "kết thúc" },
    "終わらせる": { furigana: "おわらせる", meaning: "làm xong/kết thúc" },
    "終": { furigana: "おわ", meaning: "kết thúc" },
    "拭く": { furigana: "ふく", meaning: "lau/chùi" },
    "拭": { furigana: "ふ", meaning: "lau/chùi" },
    "鳴る": { furigana: "なる", meaning: "kêu/phát ra âm thanh" },
    "鳴": { furigana: "な", meaning: "kêu/vang" },
    "戻す": { furigana: "もどす", meaning: "trả lại/đặt lại" },
    "戻る": { furigana: "もどる", meaning: "quay trở lại" },
    "戻": { furigana: "もど", meaning: "trở lại" },
    "割る": { furigana: "わる", meaning: "làm vỡ/chia" },
    "割って": { furigana: "わって", meaning: "làm vỡ" },
    "割": { furigana: "わ", meaning: "vỡ/chia" },
    "変える": { furigana: "かえる", meaning: "thay đổi" },
    "変": { furigana: "か", meaning: "thay đổi/kỳ lạ" },
    "止む": { furigana: "やむ", meaning: "dừng lại/tạnh" },
    "止み": { furigana: "やみ", meaning: "tạnh (mưa)" },
    "止": { furigana: "と", meaning: "dừng" },
    "曇り": { furigana: "くもり", meaning: "trời âm u" },
    "曇": { furigana: "くも", meaning: "u ám/âm u" },
    "始める": { furigana: "はじめる", meaning: "bắt đầu" },
    "始": { furigana: "はじ", meaning: "bắt đầu" },
    "疲れる": { furigana: "つかれる", meaning: "mệt mỏi" },
    "疲れて": { furigana: "つかれて", meaning: "vì mệt" },
    "疲": { furigana: "つか", meaning: "mệt" },
    "遊ぶ": { furigana: "あそぶ", meaning: "vui chơi" },
    "遊び": { furigana: "あそび", meaning: "trò chơi" },
    "遊": { furigana: "あそ", meaning: "vui chơi" },

    // Nouns
    "私": { furigana: "わたし", meaning: "tôi" },
    "机": { furigana: "つくえ", meaning: "cái bàn" },
    "床": { furigana: "ゆか", meaning: "sàn nhà" },
    "体": { furigana: "からだ", meaning: "cơ thể" },
    "箱": { furigana: "はこ", meaning: "cái hộp" },
    "蛇": { furigana: "へび", meaning: "con rắn" },
    "北": { furigana: "きた", meaning: "phía bắc" },
    "北海道": { furigana: "ほっかいどう", meaning: "Hokkaido" },
    "字": { furigana: "じ", meaning: "chữ/ký tự" },
    "文字": { furigana: "もじ", meaning: "chữ viết" },
    "客": { furigana: "きゃく", meaning: "khách" },
    "お客さん": { furigana: "おきゃくさん", meaning: "khách/quý khách" },

    // Compound word components
    "準備": { furigana: "じゅんび", meaning: "chuẩn bị" },
    "準": { furigana: "じゅん", meaning: "chuẩn" },
    "備": { furigana: "び", meaning: "sẵn sàng" },
    "保存": { furigana: "ほぞん", meaning: "bảo quản/lưu trữ" },
    "保": { furigana: "ほ", meaning: "bảo tồn" },
    "存": { furigana: "ぞん", meaning: "tồn tại" },
    "記念品": { furigana: "きねんひん", meaning: "đồ lưu niệm" },
    "記念": { furigana: "きねん", meaning: "kỷ niệm" },
    "記": { furigana: "き", meaning: "ghi chép" },
    "念": { furigana: "ねん", meaning: "kỷ niệm/ý niệm" },
    "完成": { furigana: "かんせい", meaning: "hoàn thành/hoàn chỉnh" },
    "完": { furigana: "かん", meaning: "hoàn toàn" },
    "成": { furigana: "せい", meaning: "thành" },
    "休暇": { furigana: "きゅうか", meaning: "kỳ nghỉ" },
    "暇": { furigana: "ひま", meaning: "rảnh rỗi/thời gian rảnh" },
    "休憩": { furigana: "きゅうけい", meaning: "nghỉ giải lao" },
    "憩": { furigana: "けい", meaning: "nghỉ ngơi" },
    "心配": { furigana: "しんぱい", meaning: "lo lắng" },
    "配": { furigana: "はい", meaning: "phân bổ/lo" },
    "遊園地": { furigana: "ゆうえんち", meaning: "khu vui chơi" },
    "お祝い": { furigana: "おいわい", meaning: "lễ chúc mừng/quà mừng" },
    "祝": { furigana: "いわ", meaning: "chúc mừng" },
    "お風呂": { furigana: "おふろ", meaning: "bồn tắm/nhà tắm" },
    "風呂": { furigana: "ふろ", meaning: "bồn tắm" },
    "呂": { furigana: "ろ", meaning: "bồn tắm" },
    "風邪": { furigana: "かぜ", meaning: "cảm lạnh" },
    "邪": { furigana: "じゃ", meaning: "xấu/tà" },
    "結婚": { furigana: "けっこん", meaning: "kết hôn" },
    "婚": { furigana: "こん", meaning: "hôn nhân" },
    "装飾品": { furigana: "そうしょくひん", meaning: "đồ trang sức/trang trí" },
    "装飾": { furigana: "そうしょく", meaning: "trang trí" },
    "装": { furigana: "そう", meaning: "trang phục/trang trí" },
    "飾る": { furigana: "かざる", meaning: "trang trí" },
    "飾": { furigana: "かざ", meaning: "trang hoàng" },
    "既製品": { furigana: "きせいひん", meaning: "hàng may sẵn" },
    "既製": { furigana: "きせい", meaning: "có sẵn" },
    "既": { furigana: "き", meaning: "đã/sẵn có" },
    "製品": { furigana: "せいひん", meaning: "sản phẩm" },
    "製": { furigana: "せい", meaning: "sản xuất/chế tạo" },
    "三畳": { furigana: "さんじょう", meaning: "3 chiếu (đơn vị phòng)" },
    "畳": { furigana: "じょう", meaning: "chiếu tatami" },
    "余る": { furigana: "あまる", meaning: "còn thừa" },
    "余った": { furigana: "あまった", meaning: "còn dư" },
    "余": { furigana: "あま", meaning: "thừa" },
    "手伝う": { furigana: "てつだう", meaning: "giúp đỡ" },
    "手伝わされる": { furigana: "てつだわされる", meaning: "bị bắt giúp" },
    "伝": { furigana: "でん", meaning: "truyền đạt" },
    "勧める": { furigana: "すすめる", meaning: "khuyên bảo/giới thiệu" },
    "勧められる": { furigana: "すすめられる", meaning: "được khuyên" },
    "勧": { furigana: "すす", meaning: "khuyên" },

    // === 31 kanji unmatched by algorithm (verb conjugations not in dict) ===
    // 並 - arrange
    "並べて": { furigana: "ならべて", meaning: "xếp/để" },
    "並べてください": { furigana: "ならべてください", meaning: "hãy xếp/để ra" },
    "並": { furigana: "なら", meaning: "xếp hàng" },

    // 会 - meet/society
    "会議": { furigana: "かいぎ", meaning: "cuộc họp" },
    "会": { furigana: "かい", meaning: "hội họp" },

    // 入 - enter/put in
    "入れる": { furigana: "いれる", meaning: "cho vào/bỏ vào" },
    "入れて": { furigana: "いれて", meaning: "cho vào" },
    "入れました": { furigana: "いれました", meaning: "đã cho vào" },
    "入": { furigana: "い", meaning: "cho vào/vào" },

    // 出 - exit/go out
    "出かける": { furigana: "でかける", meaning: "ra ngoài/đi ra" },
    "出かけ": { furigana: "でかけ", meaning: "ra ngoài" },
    "出す": { furigana: "だす", meaning: "lấy ra/bắt đầu" },
    "出して": { furigana: "だして", meaning: "lấy ra" },
    "出": { furigana: "で", meaning: "ra/xuất" },

    // 切 - cut/important
    "切って": { furigana: "きって", meaning: "cắt đi" },
    "切れる": { furigana: "きれる", meaning: "bị cắt/hết" },
    "切": { furigana: "き", meaning: "cắt" },

    // 壊 - break down
    "壊れて": { furigana: "こわれて", meaning: "bị hỏng" },
    "壊す": { furigana: "こわす", meaning: "phá hỏng" },
    "壊": { furigana: "こわ", meaning: "hỏng/vỡ" },

    // 大 - big/great
    "大きな": { furigana: "おおきな", meaning: "to lớn" },
    "大きく": { furigana: "おおきく", meaning: "to lớn hơn" },
    "大": { furigana: "おお", meaning: "lớn" },

    // 強 - strong
    "強く": { furigana: "つよく", meaning: "mạnh/mạnh hơn" },
    "強": { furigana: "つよ", meaning: "mạnh" },

    // 怖 - scary
    "怖かった": { furigana: "こわかった", meaning: "đã sợ" },
    "怖かったです": { furigana: "こわかったです", meaning: "đã rất sợ" },
    "怖": { furigana: "こわ", meaning: "đáng sợ" },

    // 持 - hold/carry
    "持ってくる": { furigana: "もってくる", meaning: "mang đến" },
    "持ってきて": { furigana: "もってきて", meaning: "hãy mang đến" },
    "持って行きました": { furigana: "もっていきました", meaning: "đã mang đi" },
    "持って": { furigana: "もって", meaning: "cầm/mang" },
    "持": { furigana: "も", meaning: "mang/giữ" },

    // 整 - arrange/organize
    "整理": { furigana: "せいり", meaning: "sắp xếp/chỉnh lý" },
    "整": { furigana: "せい", meaning: "sắp xếp" },

    // 時 - time/hour
    "時間": { furigana: "じかん", meaning: "thời gian" },
    "時": { furigana: "とき", meaning: "thời gian/lúc" },

    // 書 - write
    "書いた": { furigana: "かいた", meaning: "đã viết" },
    "書いて": { furigana: "かいて", meaning: "viết" },
    "書": { furigana: "か", meaning: "viết" },

    // 歯 - tooth
    "歯": { furigana: "は", meaning: "răng" },

    // 沸 - boil
    "沸かして": { furigana: "わかして", meaning: "đun sôi" },
    "沸": { furigana: "わ", meaning: "sôi" },

    // 洗 - wash
    "洗って": { furigana: "あらって", meaning: "rửa/giặt" },
    "洗ってください": { furigana: "あらってください", meaning: "hãy rửa" },
    "洗います": { furigana: "あらいます", meaning: "rửa" },
    "洗": { furigana: "あら", meaning: "rửa" },

    // 消 - erase/turn off
    "消して": { furigana: "けして", meaning: "tắt/xóa" },
    "消した": { furigana: "けした", meaning: "đã tắt/xóa" },
    "消": { furigana: "け", meaning: "xóa/tắt" },

    // 留 - stay/remain
    "留守": { furigana: "るす", meaning: "vắng nhà" },
    "留": { furigana: "る", meaning: "ở lại" },

    // 真 - true/genuine
    "真剣": { furigana: "しんけん", meaning: "nghiêm túc/quyết tâm" },
    "真": { furigana: "ま", meaning: "thật/đúng" },

    // 笑 - laugh/smile
    "笑って": { furigana: "わらって", meaning: "cười" },
    "笑": { furigana: "わら", meaning: "cười" },

    // 粧 - makeup (compound part of 化粧)
    "粧": { furigana: "しょう", meaning: "trang điểm" },

    // 見 - see/watch
    "見て": { furigana: "みて", meaning: "nhìn/xem" },
    "見せる": { furigana: "みせる", meaning: "cho xem" },
    "見つける": { furigana: "みつける", meaning: "tìm thấy" },
    "見つかる": { furigana: "みつかる", meaning: "được tìm thấy" },
    "見": { furigana: "み", meaning: "xem/nhìn" },

    // 言 - say/speak
    "言う": { furigana: "いう", meaning: "nói" },
    "言って": { furigana: "いって", meaning: "nói rằng" },
    "言": { furigana: "い", meaning: "nói" },

    // 話 - talk/story
    "話して": { furigana: "はなして", meaning: "nói chuyện" },
    "話": { furigana: "はなし", meaning: "câu chuyện/đề tài" },

    // 買 - buy
    "買って": { furigana: "かって", meaning: "mua" },
    "買いました": { furigana: "かいました", meaning: "đã mua" },
    "買い": { furigana: "かい", meaning: "mua" },
    "買": { furigana: "か", meaning: "mua" },

    // 貼 - stick/paste
    "貼って": { furigana: "はって", meaning: "dán" },
    "貼": { furigana: "は", meaning: "dán" },

    // 起 - wake up/happen
    "起こす": { furigana: "おこす", meaning: "đánh thức" },
    "起きて": { furigana: "おきて", meaning: "thức dậy" },
    "起": { furigana: "お", meaning: "thức dậy" },

    // 降 - fall/descend
    "降り": { furigana: "ふり", meaning: "mưa rơi" },
    "降": { furigana: "ふ", meaning: "rơi/xuống" },

    // 隠 - hide
    "隠して": { furigana: "かくして", meaning: "giấu" },
    "隠": { furigana: "かく", meaning: "giấu" },

    // 電 - electricity (component of many words)
    "電": { furigana: "でん", meaning: "điện" },

    // 食 - eat/food
    "食べて": { furigana: "たべて", meaning: "ăn" },
    "食べ": { furigana: "たべ", meaning: "ăn" },
    "食": { furigana: "しょく", meaning: "ăn/thức ăn" },
    "羨": { furigana: "しょう", meaning: "trang diem" },
};

/**
 * Checks if a character is a Kanji (CJK Unified Ideographs)
 */
export function isKanji(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) ||  // CJK Unified Ideographs
        (code >= 0x3400 && code <= 0x4DBF) ||  // CJK Extension A
        (code >= 0x20000 && code <= 0x2A6DF);
}

/**
 * Checks if a string contains any Kanji character
 */
export function hasKanji(text: string): boolean {
    return [...text].some(isKanji);
}

/**
 * Given a plain text string, annotates all known kanji words with furigana and meaning.
 * Returns an array of segments, each segment being either plain text or an annotated kanji word.
 */
export interface TextSegment {
    text: string;
    kanji?: KanjiInfo;
}

export function annotateKanji(text: string): TextSegment[] {
    const segments: TextSegment[] = [];

    // Sort keys by length (longest first) to match multi-kanji words before single characters
    const sortedKeys = Object.keys(KANJI_DICT).sort((a, b) => b.length - a.length);

    let i = 0;
    while (i < text.length) {
        let matched = false;
        for (const key of sortedKeys) {
            if (text.startsWith(key, i)) {
                segments.push({ text: key, kanji: KANJI_DICT[key] });
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            // Append to previous plain text segment or create new one
            if (segments.length > 0 && !segments[segments.length - 1].kanji) {
                segments[segments.length - 1].text += text[i];
            } else {
                segments.push({ text: text[i] });
            }
            i++;
        }
    }

    return segments;
}
