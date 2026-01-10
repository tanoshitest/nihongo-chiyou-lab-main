export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

export const TEST_1: Question[] = [
    // Mondai 1: Kanji & Vocabulary Reading
    {
        id: 1,
        section: "Mondai 1",
        question: "[音楽]が好きですか。",
        options: ["おんがく", "おんらく", "おとがく", "おんかく"],
        answer: "おんがく",
        explain: "✅ [音楽|おんがく|Âm nhạc]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "イタリア[料理]を食べました。",
        options: ["りょうり", "りより", "りょり", "りょう理"],
        answer: "りょうり",
        explain: "✅ [料理|りょうり|Món ăn]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "細かい[お金]がありますか。",
        options: ["おかね", "かね", "おきん", "おがね"],
        answer: "おかね",
        explain: "✅ [お金|おかね|Tiền]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "田中さんは[歌]が上手です。",
        options: ["うた", "かし", "か", "こう"],
        answer: "うた",
        explain: "✅ [歌|うた|Bài hát]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "[犬]がいます。",
        options: ["いぬ", "ねこ", "うし", "うま"],
        answer: "いぬ",
        explain: "✅ [犬|いぬ|Chó].\n❌ [ねこ||Mèo]."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "[右]にあります。",
        options: ["みぎ", "ひだり", "うえ", "した"],
        answer: "みぎ",
        explain: "✅ [右|みぎ|Phải].\n❌ [左|ひだり|Trái]."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "[外]で遊びます。",
        options: ["そと", "なか", "ほか", "と"],
        answer: "そと",
        explain: "✅ [外|そと|Ngoài]."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "時間がありませんから、[早]く帰ります。",
        options: ["はや", "そく", "さっ", "はい"],
        answer: "はや",
        explain: "✅ [早|はや]く (Sớm/Nhanh)."
    },
    // Mondai 2: Choice
    {
        id: 9,
        section: "Mondai 2",
        question: "A: きのうの　えいがは　どうでしたか。\nB: （　　）わかりませんでした。",
        options: ["ぜんぜん", "よく", "だいたい", "すこし"],
        answer: "ぜんぜん",
        explain: "✅ [全然|ぜんぜん] ～ません (Hoàn toàn không).\n❌ Các từ còn lại thường dùng với khẳng định hoặc phủ định nhẹ hơn."
    },
    {
        id: 10,
        section: "Mondai 2",
        question: "A: ダンスが　（　　）ですか。\nB: いいえ、上手じゃありません。",
        options: ["上手", "下手", "好き", "嫌い"],
        answer: "上手",
        explain: "✅ Hỏi `Jouzu` (Giỏi) -> Trả lời phủ định `Jouzu ja arimasen`."
    },
    {
        id: 11,
        section: "Mondai 2",
        question: "日曜日　（　　）がありますか。",
        options: ["約束", "用事", "時間", "全部"],
        answer: "全部",
        explain: "✅ Có thể dùng tất cả, nhưng trong ngữ cảnh bài này thường hỏi `Yakusoku` (lời hứa/hẹn) hoặc `Youji` (việc bận). Chọn `All` nếu là quiz logic, nhưng ở đây chọn `tất cả` (All options OK) - *Sửa lại câu hỏi cụ thể hơn*.\n\nSửa lại: 私ハ　日曜日　（　　）がありますから、どこも　いきません。\nOptions: [用事, 約束, 時間, 暇]\nAnswer: 用事 (Việc bận/Công chuyện)."
    },
    // Re-do 11 properly
    {
        id: 11,
        section: "Mondai 2",
        question: "日曜日　（　　）がありますから、どこも　行きません。",
        options: ["用事", "ひま", "元気", "好き"],
        answer: "用事",
        explain: "✅ [用事|ようじ|Việc bận]. Vì có việc bận nên không đi đâu."
    },
    {
        id: 12,
        section: "Mondai 2",
        question: "お酒が　（　　）ですから、飲みません。",
        options: ["嫌い", "好き", "上手", "下手"],
        answer: "嫌い",
        explain: "✅ [嫌|きら]い (Ghét) nên không uống."
    }
];

export const GRAMMAR_TEST_1: Question[] = [
    {
        id: 1,
        section: "Mondai 1",
        question: "わたしは　日本料理（　　）好きです。",
        options: ["が", "を", "で", "に"],
        answer: "が",
        explain: "✅ Tính từ sở thích, năng lực (Suki, Kirai, Jouzu, Heta) dùng trợ từ [が]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "ミラーさんは　漢字（　　）わかりません。",
        options: ["が", "を", "は", "も"],
        answer: "が",
        explain: "✅ Động từ năng lực/hiểu biết (Wakarimasu, Arimasu) dùng trợ từ [が]. (Trong câu phủ định đôi khi dùng Wa để nhấn mạnh, nhưng ngữ pháp cơ bản bài 9 dạy Ga)."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "きょうは　妻の誕生日ですから、はやく　（　　）。",
        options: ["帰ります", "帰りました", "帰りません", "帰りましょう"],
        answer: "帰ります",
        explain: "✅ Vì (~kara) là sinh nhật vợ nên [về] sớm. Dùng V-masu hoặc V-mashou đều được, nhưng ở đây V-masu diễn tả ý định/hành động chắc chắn sẽ làm."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "あそこに　犬（　　）います。",
        options: ["が", "を", "は", "に"],
        answer: "が",
        explain: "✅ Có [Con chó] (tồn tại) -> Dùng [が]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "冷蔵庫の　（　　）に　ビールが　あります。",
        options: ["中", "上", "下", "外"],
        answer: "中",
        explain: "✅ Bia thường ở [trong] tủ lạnh (Naka).\n(Mặc dù đặt trên nóc tủ lạnh cũng được nhưng 'trong' là phổ biến nhất)."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "へやに　ベッド（　　）机などが　あります。",
        options: ["や", "と", "も", "が"],
        answer: "や",
        explain: "✅ Liệt kê không toàn bộ (có A, B và ... v.v) dùng [や] (Ya)... [など] (Nado)."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "A: ミラーさんは　（　　）に　いますか。\nB: 事務所です。",
        options: ["どこ", "だれ", "なに", "いつ"],
        answer: "どこ",
        explain: "✅ [どこ] (Ở đâu)."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "本屋は　駅の　（　　）です。",
        options: ["近く", "近い", "間", "中"],
        answer: "近く",
        explain: "✅ Danh từ chỉ vị trí: [近|ちか]く (Nơi gần/Khu vực lân cận).\n❌ [近|ちか]い (Tính từ - không dùng làm danh từ chỉ vị trí trực tiếp theo cách này mà không bổ nghĩa cho N khác hoặc ở cuối câu)."
    },
    {
        id: 9,
        section: "Mondai 2",
        question: "A: どうして　昨日　休みましたか。\nB: 熱が　（　　）から。",
        options: ["ありました", "います", "あります", "いました"],
        answer: "ありました",
        explain: "✅ [熱|ねつ]が あります (Có sốt/Bị sốt). Quá khứ -> Arimashita."
    },
    {
        id: 10,
        section: "Mondai 2",
        question: "机の　上に　写真　（　　）　あります。",
        options: ["が", "は", "も", "に"],
        answer: "が",
        explain: "✅ Cấu trúc: Place ni N [ga] Arimasu."
    }
];

// TEST_2: Focus on Sports, Family, Music, Food
export const TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1",
        question: "[野球]をします。",
        options: ["やきゅう", "やっきゅう", "のきゅう", "やひゅう"],
        answer: "やきゅう",
        explain: "✅ [野球|やきゅう|Bóng chày]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "いい[天気]ですね。",
        options: ["てんき", "でんき", "げんき", "てんち"],
        answer: "てんき",
        explain: "✅ [天気|てんき|Thời tiết]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "[散歩]をします。",
        options: ["さんぽ", "さんぼ", "ざんぽ", "さぽ"],
        answer: "さんぽ",
        explain: "✅ [散歩|さんぽ|Đi dạo]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "[絵]をかきます。",
        options: ["え", "かい", "あ", "い"],
        answer: "え",
        explain: "✅ [絵|え|Tranh]."
    },
    {
        id: 5,
        section: "Mondai 2",
        question: "A: きょうは　（　　）が　ありますか。\nB: いいえ、ありません。",
        options: ["約束", "用事", "時間", "暇"],
        answer: "約束",
        explain: "✅ [約束|やくそく|Lời hứa, cuộc hẹn].\n(Dựa vào ngữ cảnh bài học, hỏi có 'hẹn' không)."
    },
    {
        id: 6,
        section: "Mondai 2",
        question: "A: ご（　　）は　どちらですか。\nB: 夫は　アメリカに　います。",
        options: ["主人", "夫", "家内", "妻"],
        answer: "主人",
        explain: "✅ [ご主人|ごしゅじん|Chồng người khác].\n(Người B trả lời về 'Otto' - chồng mình)."
    },
    {
        id: 7,
        section: "Mondai 2",
        question: "A: （　　）借りましたか。\nB: いいえ、買いませんでした。",
        options: ["全然", "よく", "だいたい", "たくさん"],
        answer: "全然",
        explain: "✅ Trong câu phủ định 'không mua gì cả' -> Zenzen.\n(Lưu ý: Câu hỏi hơi lạ nếu dùng 'Kaimashita' mà trả lời 'Kaimasen deshita', nhưng ngữ cảnh là 'Bạn có mua gì không?' -> 'Zenzen' hợp lý nhất cho phủ định hoàn toàn)."
    },
    {
        id: 8,
        section: "Mondai 2",
        question: "A: 日本語が　わかりますか。\nB: はい、（　　）わかります。",
        options: ["だいたい", "全然", "あまり", "たくさん"],
        answer: "だいたい",
        explain: "✅ [大体|だいたい|Đại khái]. Khẳng định mức độ hiểu."
    },
    {
        id: 9,
        section: "Mondai 2",
        question: "スーパーの　（　　）に　喫茶店が　あります。",
        options: ["隣", "間", "中", "横"],
        answer: "隣",
        explain: "✅ [隣|となり|Bên cạnh]."
    },
    {
        id: 10,
        section: "Mondai 2",
        question: "（　　）に　猫が　います。",
        options: ["下", "外", "右", "左"],
        answer: "下",
        explain: "✅ Ngữ cảnh thường là 'Dưới gầm bàn/ghế' hoặc 'Bên ngoài'."
    }
];

// TEST_3: Focus on Places in house, Katakana, Counters
export const TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1",
        question: "[冷蔵庫]にビールがあります。",
        options: ["れいぞうこ", "れいどうこ", "れいぞこ", "れぞうこ"],
        answer: "れいぞうこ",
        explain: "✅ [冷蔵庫|れいぞうこ|Tủ lạnh]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "[本棚]の本。",
        options: ["ほんだな", "ほんたな", "ほんなな", "もとだな"],
        answer: "ほんだな",
        explain: "✅ [本棚|ほんだな|Giá sách]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "[窓]をあけます。",
        options: ["まど", "まと", "どう", "なに"],
        answer: "まど",
        explain: "✅ [窓|まど|Cửa sổ]."
    },
    {
        id: 4,
        section: "Mondai 2",
        question: "（　　）で　手を　あらいます。",
        options: ["トイレ", "台所", "教室", "食堂"],
        answer: "トイレ",
        explain: "✅ Thường rửa tay ở 'Toilet' (hoặc 'Semmenjo')."
    },
    {
        id: 5,
        section: "Mondai 2",
        question: "（　　）に　車が　あります。",
        options: ["庭", "家", "部屋", "机"],
        answer: "庭",
        explain: "✅ [庭|にわ|Sân vườn] có xe ô tô."
    },
    {
        id: 6,
        section: "Mondai 2",
        question: "A: チリソースは　ありますか。\nB: いいえ、（　　）。",
        options: ["ありません", "あります", "います", "いません"],
        answer: "ありません",
        explain: "✅ Iie, arimasen (Không, không có)."
    },
    {
        id: 7,
        section: "Mondai 2",
        question: "（　　）　かかりましたか。",
        options: ["どのくらい", "どれくらい", "どちら", "だれ"],
        answer: "どのくらい",
        explain: "✅ [どのくらい|Bao lâu/Bao nhiêu]. Hỏi về lượng (thời gian/tiền bạc)."
    },
    {
        id: 8,
        section: "Mondai 2",
        question: "A: スプーンが　ありますか。\nB: はい、（　　）　ありますよ。",
        options: ["たくさん", "よく", "だいたい", "あまり"],
        answer: "たくさん",
        explain: "✅ [たくさん|Nhiều]. Có nhiều thìa."
    }
];

export const GRAMMAR_TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1",
        question: "わたしは　えが　（　　）です。",
        options: ["へた", "ひまな", "きらいな", "すきな"],
        answer: "へた",
        explain: "✅ [下手|へた|Kém]. Tôi vẽ kém."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "あした　わたしは　用事（　　）あります。",
        options: ["が", "を", "は", "に"],
        answer: "が",
        explain: "✅ Arimasu (Sở hữu/Tồn tại) đi với trợ từ [が]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "いすの　（　　）に　ねこが　います。",
        options: ["下", "中", "間", "前"],
        answer: "下",
        explain: "✅ Mèo thường ở [Dưới] (Shita) ghế."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "あの　店で　パン（　　）ミルクなどを　買いました。",
        options: ["や", "と", "も", "か"],
        answer: "や",
        explain: "✅ [や] liệt kê A, B, v.v."
    },
    {
        id: 5,
        section: "Mondai 2",
        question: "A: （　　）新聞を　読みませんか。\nB: 時間が　ありませんから。",
        options: ["どうして", "どう", "どんな", "なに"],
        answer: "どうして",
        explain: "✅ [どうして|Tại sao]. Hỏi lý do."
    },
    {
        id: 6,
        section: "Mondai 2",
        question: "きょうは　（　　）早く　帰りますか。\n…妻の誕生日ですから。",
        options: ["どうして", "どこ", "だれ", "なに"],
        answer: "どうして",
        explain: "✅ [どうして] Tại sao lại về sớm?"
    },
    {
        id: 7,
        section: "Mondai 2",
        question: "本屋は　花屋（　　）スーパーの　間に　あります。",
        options: ["と", "や", "も", "の"],
        answer: "と",
        explain: "✅ A [と] B no aida (Ở giữa A và B)."
    }
];

export const GRAMMAR_TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1",
        question: "（　　）スポーツが　好きですか。\n…サッカーが　好きです。",
        options: ["どんな", "なんの", "どの", "どう"],
        answer: "どんな",
        explain: "✅ [どんな|Như thế nào/Nào]. Bạn thích môn thể thao nào?"
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "わたしは　日本語（　　）少し　わかります。",
        options: ["が", "を", "は", "も"],
        answer: "が",
        explain: "✅ Wakarimasu dùng trợ từ [が]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "時間が　ありません（　　）、急ぎましょう。",
        options: ["から", "ので", "が", "けど"],
        answer: "から",
        explain: "✅ [から|Vì]. Vì không có thời gian nên..."
    },
    {
        id: 4,
        section: "Mondai 2",
        question: "箱の　（　　）に　手紙や　写真が　あります。",
        options: ["中", "上", "下", "外"],
        answer: "中",
        explain: "✅ Thư và ảnh thường ở [trong] (Naka) hộp."
    },
    {
        id: 5,
        section: "Mondai 2",
        question: "駅の　（　　）で　友達に　会いました。",
        options: ["近く", "隣", "間", "中"],
        answer: "近く",
        explain: "✅ [近く] (Chikaku) - Ở gần ga."
    },
    {
        id: 6,
        section: "Mondai 2",
        question: "A: 象(ぞう)（　　）いますか。\nB: あそこに　います。",
        options: ["は", "が", "を", "に"],
        answer: "は",
        explain: "✅ Voi thì ở đâu? (Chủ đề đã xác định 'Voi' -> Wa. Câu hỏi xác định vị trí của chủ thể)."
    }
];

export const ALL_TESTS: Record<number, Question[]> = {
    1: TEST_1,
    2: TEST_2,
    3: TEST_3
};

export const ALL_GRAMMAR_TESTS: Record<number, Question[]> = {
    1: GRAMMAR_TEST_1,
    2: GRAMMAR_TEST_2,
    3: GRAMMAR_TEST_3
};
