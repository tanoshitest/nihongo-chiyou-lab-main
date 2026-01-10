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
    // Mondai 1: Kanji Readings (Lesson 7-8)
    {
        id: 1,
        section: "Mondai 1",
        question: "[手]で食べます。",
        options: ["て", "で", "め", "け"],
        answer: "て",
        explain: "✅ [手|て|Tay].\n❌ [目|め|Mắt], [毛|け|Lông/Tóc]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "父に[シャツ]をあげました。",
        options: ["シャッ", "シャツ", "シャシ", "サシ"],
        answer: "シャツ",
        explain: "✅ [シャツ|Shirt|Áo sơ mi]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "[花]をもらいました。",
        options: ["はな", "ばな", "わな", "かな"],
        answer: "はな",
        explain: "✅ [花|はな|Hoa]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "この町は[静か]です。",
        options: ["しずか", "すずか", "せいか", "しか"],
        answer: "しずか",
        explain: "✅ [静か|しずか|Yên tĩnh]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "[新しい]靴です。",
        options: ["あたらしい", "あたらし", "あらたしい", "あだらしい"],
        answer: "あたらしい",
        explain: "✅ [新しい|あたらしい|Mới]."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "[黒い]かばんです。",
        options: ["くろい", "あかい", "しろい", "あおい"],
        answer: "くろい",
        explain: "✅ [黒い|くろい|Đen].\n❌ [赤い|あかい|Đỏ], [白い|しろい|Trắng], [青い|あおい|Xanh]."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "今日は[暑い]ですね。",
        options: ["あつい", "さむい", "ぬるい", "あまい"],
        answer: "あつい",
        explain: "✅ [暑い|あつい|Nóng].\n❌ [寒い|さむい|Lạnh]."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "[有名]な人。",
        options: ["ゆうめい", "ゆうめ", "ゆめい", "ゆめ"],
        answer: "ゆうめい",
        explain: "✅ [有名|ゆうめい|Nổi tiếng].\n❌ Chú ý trường âm."
    },
    {
        id: 9,
        section: "Mondai 1",
        question: "[元気]ですか。",
        options: ["げんき", "てんき", "けんき", "でんき"],
        answer: "げんき",
        explain: "✅ [元気|げんき|Khỏe]."
    },
    {
        id: 10,
        section: "Mondai 1",
        question: "[冷たい]飲み物。",
        options: ["つめたい", "つめた", "すめたい", "さめたい"],
        answer: "つめたい",
        explain: "✅ [冷たい|つめたい|Lạnh (cảm giác)]."
    },

    // Mondai 2: Kanji Writing / Katakana
    {
        id: 11,
        section: "Mondai 2",
        question: "母に[ぷれぜんと]をおくります。",
        options: ["プレゼント", "プレセント", "ブレゼント", "プレンド"],
        answer: "プレゼント",
        explain: "✅ [プレゼント|Present|Quà tặng]."
    },
    {
        id: 12,
        section: "Mondai 2",
        question: "[おくる]。",
        options: ["送る", "贈る", "置く", "億"],
        answer: "送る",
        explain: "✅ [送る|おくる|Gửi]."
    },
    {
        id: 13,
        section: "Mondai 2",
        question: "[きって]。",
        options: ["切手", "切符", "手紙", "切る"],
        answer: "切手",
        explain: "✅ [切手|きって|Tem].\n❌ [切符|きっぷ|Vé], [切る|きる|Cắt]."
    },
    {
        id: 14,
        section: "Mondai 2",
        question: "[やま]。",
        options: ["山", "川", "田", "土"],
        answer: "山",
        explain: "✅ [山|やま|Núi]."
    },
    {
        id: 15,
        section: "Mondai 2",
        question: "[しろい]。",
        options: ["白い", "百い", "自い", "日い"],
        answer: "白い",
        explain: "✅ [白い|しろい|Trắng]."
    },

    // Mondai 3: Context & Particles (Lesson 7-8)
    {
        id: 16,
        section: "Mondai 3",
        question: "はし（　　）ごはんを食べます。",
        options: ["で", "に", "を", "へ"],
        answer: "で",
        explain: "✅ [で] chỉ phương tiện/công cụ (ăn CẰNG đũa)."
    },
    {
        id: 17,
        section: "Mondai 3",
        question: "日本語（　　）レポートを書きます。",
        options: ["で", "に", "を", "の"],
        answer: "で",
        explain: "✅ [で] chỉ phương tiện ngôn ngữ (viết BẰNG tiếng Nhật)."
    },
    {
        id: 18,
        section: "Mondai 3",
        question: "「Thank you」は　日本語で（　　）ですか。",
        options: ["なん", "なに", "だれ", "どう"],
        answer: "なん",
        explain: "✅ Nani/Nan desu ka -> Là cái gì? (Thank you trong tiếng Nhật là gì?)."
    },
    {
        id: 19,
        section: "Mondai 3",
        question: "わたしは　木村さん（　　）花をあげました。",
        options: ["に", "を", "で", "から"],
        answer: "に",
        explain: "✅ [に] chỉ đối tượng NHẬN hành động (Tặng hoa CHO Kimura)."
    },
    {
        id: 20,
        section: "Mondai 3",
        question: "わたしは　カリナさん（　　）CDを借りました。",
        options: ["に", "を", "へ", "で"],
        answer: "に",
        explain: "✅ [に/から] chỉ đối tượng XUẤT PHÁT hành động (Mượn CD TỪ Karina). Ở đây dùng [に] (hoặc [から])."
    },
    {
        id: 21,
        section: "Mondai 3",
        question: "銀行（　　）お金を借りました。",
        options: ["から", "に", "を", "へ"],
        answer: "から",
        explain: "✅ Khi đối tác là tổ chức (Ngân hàng), bắt buộc dùng [から], không dùng [に]."
    },
    {
        id: 22,
        section: "Mondai 3",
        question: "（　　）荷物を送りましたか。 ...はい、送りました。",
        options: ["もう", "まだ", "また", "すぐ"],
        answer: "もう",
        explain: "✅ [もう] ... ましたか (Đã ... chưa?)."
    },
    {
        id: 23,
        section: "Mondai 3",
        question: "桜は（　　）です。",
        options: ["きれい", "きれいくない", "きれいな", "きれく"],
        answer: "きれい",
        explain: "✅ Tính từ đuôi Na [きれい] + です. (Sakura đẹp)."
    },
    {
        id: 24,
        section: "Mondai 3",
        question: "富士山は（　　）です。",
        options: ["高い", "高な", "高", "高くて"],
        answer: "高い",
        explain: "✅ Tính từ đuôi I [高い] + です. (Núi Phú Sĩ cao)."
    },
    {
        id: 25,
        section: "Mondai 3",
        question: "この食べ物は　あまり（　　）。",
        options: ["おいしくないです", "おいしいです", "おいしくありません", "おいしいくないです"],
        answer: "おいしくないです",
        explain: "✅ [あまり] + Phủ định. Phủ định tính từ đuôi I (Oishii) -> Oishikunai desu."
    },
    {
        id: 26,
        section: "Mondai 3",
        question: "（　　）映画を見ましたか。 ...「七人の侍」を見ました。",
        options: ["どんな", "どれ", "なん", "どう"],
        answer: "どんな",
        explain: "✅ [どんな] + Noun -> Hỏi về tính chất loại (Đã xem phim NHƯ THẾ NÀO/loại nào?)."
    },
    {
        id: 27,
        section: "Mondai 3",
        question: "日本の生活は（　　）ですか。 ...楽しいです。",
        options: ["どう", "どんな", "なん", "なにか"],
        answer: "どう",
        explain: "✅ [どう] desu ka -> Hỏi cảm nhận/trạng thái (Cuộc sống Nhật THẾ NÀO?)."
    },
    {
        id: 28,
        section: "Mondai 3",
        question: "日本の食べ物は　おいしいですが、（　　）。",
        options: ["高いです", "安いです", "高いではありません", "安くないです"],
        answer: "高いです",
        explain: "✅ [が] (nhưng) nối 2 vế ngược nhau. Ngon NHƯNG đắt."
    }
];

export const TEST_2: Question[] = [
    { id: 1, section: "Mondai 1", question: "[忙しい]です。", options: ["いそがしい", "いそかしい", "いちがしい", "むずかしい"], answer: "いそがしい", explain: "✅ [忙しい|いそがしい|Bận]." },
    { id: 2, section: "Mondai 1", question: "[親切]な人。", options: ["しんせつ", "しんせっ", "しんぜつ", "じんせつ"], answer: "しんせつ", explain: "✅ [親切|しんせつ|Tốt bụng]." },
    { id: 3, section: "Mondai 2", question: "[はさみ]。", options: ["鋏", "橋", "箸", "紙"], answer: "鋏", explain: "✅ [鋏|はさみ|Kéo]." },
    { id: 4, section: "Mondai 2", question: "[かみ]。", options: ["紙", "神", "髪", "上"], answer: "紙", explain: "✅ [紙|かみ|Giấy]." },
    { id: 5, section: "Mondai 3", question: "父（　　）時計をもらいました。", options: ["に", "で", "と", "へ"], answer: "に", explain: "✅ Nhận từ ai dùng [に] (hoặc kara)." },
    { id: 6, section: "Mondai 3", question: "もう昼ごはんを（　　）か。", options: ["食べました", "食べます", "食べて", "食べ"], answer: "食べました", explain: "✅ Mou + V-mashita (Đã ... chưa)." },
    { id: 7, section: "Mondai 3", question: "この部屋は（　　）ないです。", options: ["広く", "広い", "広", "広くて"], answer: "広く", explain: "✅ Phủ định tính từ I: Hiroi -> Hirokunai." },
    { id: 8, section: "Mondai 3", question: "あそこは（　　）ありません。", options: ["静かじゃ", "静かで", "静く", "静くない"], answer: "静かじゃ", explain: "✅ Phủ định tính từ Na: Shizuka -> Shizuka ja arimasen." }
];

export const TEST_3: Question[] = [
    ...TEST_1 // Reuse Test 1 for now
];

export const ALL_TESTS: Record<number, Question[]> = {
    1: TEST_1,
    2: TEST_2,
    3: TEST_3
};


export const GRAMMAR_TESTS: Record<number, Question[]> = {
    1: [
        {
            id: 1,
            section: "Mondai 1",
            question: "パソコン（　　）映画を見ます。",
            options: ["で", "に", "を", "へ"],
            answer: "で",
            explain: "✅ [で] chỉ phương tiện (bằng máy tính)."
        },
        {
            id: 2,
            section: "Mondai 1",
            question: "会社（　　）電話をかけます。",
            options: ["に", "を", "で", "も"],
            answer: "に",
            explain: "✅ Gọi điện CHO ai/đâu dùng [に]."
        },
        {
            id: 3,
            section: "Mondai 1",
            question: "友達は　私（　　）プレゼントをくれました。",
            options: ["に", "か", "は", "が"],
            answer: "に",
            explain: "✅ (Bạn tặng TÔI) -> Watashi ni."
        },
        {
            id: 4,
            section: "Mondai 1",
            question: "このパソコンは　（　　）です。",
            options: ["便利", "便利だ", "便利な", "便利く"],
            answer: "便利",
            explain: "✅ Tính từ Na ở cuối câu: Benri desu."
        },
        {
            id: 5,
            section: "Mondai 1",
            question: "日本の地下鉄は　便利ですが、（　　）ないです。",
            options: ["きれいじゃ", "きれい", "きれいく", "きれ"],
            answer: "きれいじゃ",
            explain: "✅ Kirei (Na-adj) -> Kirei ja arimasen (nai desu)."
        }
    ],
    2: [
        { id: 1, section: "Mondai 1", question: "もう宿題をしましたか。 ...いいえ、（　　）。", options: ["まだです", "もうです", "しました", "しませんでした"], answer: "まだです", explain: "✅ Câu trả lời phủ định cho câu hỏi 'Mou': Iie, mada desu." }
    ],
    3: [
        { id: 1, section: "Mondai 1", question: "どんな（　　）が好きですか。", options: ["スポーツ", "スポーツを", "のスポーツ", "なスポーツ"], answer: "スポーツ", explain: "✅ Donna + Noun." }
    ]
};
