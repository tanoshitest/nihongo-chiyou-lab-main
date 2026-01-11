export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

const TEST_11_DATA: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ đúng (Từ vựng & Kanji)",
        question: "あしたの　てんきは　どう　[おもいます]か。",
        options: ["思います", "思い出します", "考えます", "覚えます"],
        answer: "思います",
        explain: "[思います||nghĩ] (omoimasu). Dùng để hỏi ý kiến: Bạn nghĩ thời tiết ngày mai thế nào?"
    },
    {
        id: 2,
        question: "かいぎで　[いけん]を　いいます。",
        options: ["意味", "意見", "注意", "用意"],
        answer: "意見",
        explain: "[意見||ý kiến] (iken). Phát biểu ý kiến trong cuộc họp."
    },
    {
        id: 3,
        question: "わたしは　らいげつ　[きゅうしゅう]へ　いきます。",
        options: ["本州", "九州", "四国", "北海道"],
        answer: "九州",
        explain: "[九州||Kyushu] (kyuushuu) là một trong 4 đảo chính của Nhật Bản."
    },
    {
        id: 4,
        question: "日本は　ぶっかが　[たかい]と　おもいます。",
        options: ["高い", "安い", "多い", "長い"],
        answer: "高い",
        explain: "[高い||cao/đắt] (takai). Tôi nghĩ vật giá ở Nhật đắt đỏ."
    },
    {
        id: 5,
        question: "あなたは　[について]　どう　おもいますか。",
        options: ["交通", "空港", "高校", "工場"],
        answer: "交通",
        explain: "[交通||giao thông] (koutsuu). Bạn nghĩ thế nào về giao thông?"
    },
    {
        id: 6,
        section: "Mondai 2: Điền từ thích hợp",
        question: "ミラーさんは　「らいしゅう　とうきょうへ　いきます」と　_____。",
        options: ["いいました", "おもいました", "ききました", "はなしました"],
        answer: "いいました",
        explain: "Mẫu câu trích dẫn trực tiếp: 「～」と いいました (đã nói là...)."
    },
    {
        id: 7,
        question: "わたしは　と書　かんへ　いく　_____が　ありません。",
        options: ["やくそく", "じかん", "ようじ", "おかね"],
        answer: "じかん",
        explain: "Mẫu câu bổ nghĩa danh từ [L22]: [V-ru] + 時間 (jikan - thời gian)."
    },
    {
        id: 8,
        question: "これは　京都で　_____　しゃしんです。",
        options: ["とった", "とる", "とって", "とらない"],
        answer: "とった",
        explain: "Mẫu câu bổ nghĩa danh từ [L22]: V-ta (quá khứ) bổ nghĩa cho danh từ. (Bức ảnh ĐÃ chụp)."
    },
    {
        id: 9,
        question: "日よう日は　_____　でも　いきませんか。",
        options: ["ビール", "どこ", "なにか", "食事"],
        answer: "食事",
        explain: "[食事||bữa ăn] (shokuji). Mẫu câu [N demo]: Đưa ra ví dụ/đề xuất. Đi ăn hay gì đó không?"
    },
    {
        id: 10,
        question: "もう　12時ですよ。　_____　ないといけませんね。",
        options: ["かえる", "かえら", "かえれ", "かえろう"],
        answer: "かえら",
        explain: "Mẫu câu [V-nai + to ikemasen]: Phải làm gì. Kaerimasu -> Kaeranai -> Kaera + naito."
    }
];

const TEST_11_GRAMMAR_DATA: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Ngữ pháp L21-L22",
        question: "わたしは　の　ぶっかは　たかい_____　おもいます。",
        options: ["と", "を", "が", "に"],
        answer: "と",
        explain: "Mẫu câu [Thể thông thường] + と おもいます (Tôi nghĩ là...)."
    },
    {
        id: 2,
        question: "あした　パーティーが　ある_____　知っていますか。",
        options: ["の", "こと", "もの", "よう"],
        answer: "の",
        explain: "Danh từ hóa mệnh đề: [V-ru] + の を 知っていますか (Bạn có biết việc...?)."
    },
    {
        id: 3,
        question: "これは　ミラーさんが　_____　ケーキです。",
        options: ["つくった", "つくります", "つくる", "つくって"],
        answer: "つくった",
        explain: "Định ngữ [L22]: Hành động đã xảy ra trong quá khứ bổ nghĩa cho danh từ. (Cái bánh mà anh Miller ĐÃ làm)."
    },
    {
        id: 4,
        question: "わたしは　朝ごはんを　_____　時間が　ありません。",
        options: ["たべる", "たべない", "たべた", "たべて"],
        answer: "たべる",
        explain: "Bổ nghĩa cho danh từ 'thời gian' (để làm gì): V-ru + 時間."
    },
    {
        id: 5,
        question: "あしたは　雨が　_____　でしょう。",
        options: ["ふる", "ふります", "ふらない", "ふった"],
        answer: "ふる",
        explain: "Mẫu câu [Thể thông thường] + でしょう (Có lẽ là...). Dự đoán."
    },
    {
        id: 6,
        section: "Mondai 2: Sắp xếp câu",
        question: "友達に　_____　_____　_____　_____　ません。",
        text_context: "Sắp xếp các từ vào chỗ trống làm sao cho đúng nghĩa.",
        options: ["あう", "やくそく", "が", "あり"],
        answer: "あう",
        explain: "Thứ tự đúng: 友達に [あう] [やくそく] [が] [あり] ません。\n(Tôi không có hẹn gặp bạn.)\nấu trúc: V-ru + Yakusoku ga arimasen."
    },
    {
        id: 7,
        question: "かれは　_____　_____　_____　_____　言いました。",
        options: ["役に", "と", "立つ", "きっと"],
        answer: "きっと",
        explain: "Thứ tự đúng: かれは [きっと] [役に] [立つ] [と] 言いました。\n(Anh ấy đã nói rằng chắc chắn sẽ có ích.)\nCấu trúc: Kitto (phó từ) Yaku ni tatsu (có ích) to Iimashita."
    },
    {
        id: 8,
        section: "Mondai 3: Đọc hiểu",
        text_context: "Đọc đoạn văn và chọn đáp án đúng.\n\n私は　東京で　生まれた　人を　探しています。\n来週の　パーティーで　東京の話を　してほしいからです。",
        question: "この人は　どんな人を　探していますか。",
        options: ["東京へ　行きたい人", "東京で　生まれた人", "東京が　好きな人", "東京で　働いている人"],
        answer: "東京で　生まれた人",
        explain: "Trong bài có câu: 「私は 東京で 生まれた 人を 探しています」 (Tôi đang tìm người ĐÃ sinh ra ở Tokyo)."
    }
];

export const ALL_TESTS = {
    1: TEST_11_DATA,
    2: TEST_11_DATA, // Placeholder for other sets
    3: TEST_11_DATA
};

export const ALL_GRAMMAR_TESTS = {
    1: TEST_11_GRAMMAR_DATA,
    2: TEST_11_GRAMMAR_DATA,
    3: TEST_11_GRAMMAR_DATA
};
