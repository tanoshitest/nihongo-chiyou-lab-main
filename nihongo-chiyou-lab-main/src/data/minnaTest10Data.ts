
export interface Question {
    id: number;
    question: string; // HTML string for formatting
    options: string[];
    answer: string;
    explain: string;
    section?: string; // Optional section header
    text_context?: string; // Optional context for reading questions
}

// ============================================================================
// VOCABULARY & KANJI TESTS (3 Variations)
// ============================================================================

// TEST 1: Focus Lesson 19 (Verbs, Culture, Traditions)
const TEST_1: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "山に　_______。",
        options: ["のぼります", "とまります", "なります", "いります"],
        answer: "のぼります",
        explain: "[登ります] (Leo núi)."
    },
    {
        id: 2,
        question: "ホテルに　_______。",
        options: ["とまります", "します", "なります", "いります"],
        answer: "とまります",
        explain: "[泊まります] (Trọ/Ở lại khách sạn)."
    },
    {
        id: 3,
        question: "部屋を　_______。",
        options: ["そうじします", "せんたくします", "れんしゅうします", "けんきゅうします"],
        answer: "そうじします",
        explain: "[掃除します] (Dọn vệ sinh)."
    },
    {
        id: 4,
        question: "私は　歌舞伎に　_______ が　あります。",
        options: ["きょうみ", "しゅみ", "ゆめ", "おかげ"],
        answer: "きょうみ",
        explain: "[興味] (Hứng thú). [Kyoumi ga arimasu] (Có hứng thú với...)."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji",
        question: "Tôi đã [luyện tập] piano.",
        options: ["練習", "学習", "復習", "予習"],
        answer: "練習",
        explain: "[練習|れんしゅう] (Luyện tập)."
    },
    {
        id: 6,
        question: "Hôm nay tôi [buồn ngủ].",
        options: ["眠い", "眼い", "着い", "悪い"],
        answer: "眠い",
        explain: "[眠い|ねむい] (Buồn ngủ)."
    },
    {
        id: 7,
        question: "Anh ấy [mạnh] quá.",
        options: ["強い", "凄い", "重い", "高い"],
        answer: "強い",
        explain: "[強い|つよい] (Mạnh)."
    },
    {
        id: 8,
        section: "Mondai 3: Tìm từ cùng nhóm",
        question: "柔道、剣道、相撲、_______",
        options: ["茶道", "野球", "サッカー", "テニス"],
        answer: "茶道",
        explain: "Nhóm văn hóa truyền thống Nhật Bản (Võ đạo/Trà đạo)."
    },
    {
        id: 9,
        question: "掃除します、洗濯します、なります、_______",
        options: ["登ります", "眠い", "弱い", "いい"],
        answer: "登ります",
        explain: "Nhóm động từ."
    },
    {
        id: 10,
        question: "[調子] (Tình trạng) đọc là: _______",
        options: ["ちょうし", "ちょし", "きょし", "しょうし"],
        answer: "ちょうし",
        explain: "[調子|ちょうし] (Tình trạng/Trạng thái)."
    }
];

// TEST 2: Focus Lesson 20 (Polite/Plain Vocab, Address terms)
const TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "ビザが　_______。",
        options: ["いります", "なります", "あります", "います"],
        answer: "いります",
        explain: "[要ります] (Cần). Cần thị thực (visa)."
    },
    {
        id: 2,
        question: "ちょっと　_______。",
        options: ["しらべます", "なおします", "しゅうりします", "でんわします"],
        answer: "しらべます",
        explain: "Tôi tìm hiểu/tra cứu một chút. [Shirabemasu]."
    },
    {
        id: 3,
        question: "自転車を　_______。",
        options: ["しゅうりします", "しらべます", "でんわします", "おもいます"],
        answer: "しゅうりします",
        explain: "[修理します] (Sửa chữa). Sửa xe đạp."
    },
    {
        id: 4,
        question: "「はい」の　普通形は　_______ です。",
        options: ["うん", "ううん", "いいえ", "ええ"],
        answer: "うん",
        explain: "Thể thông thường của [Hai] là [Un]."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji",
        question: "Tôi sẽ [gọi điện thoại].",
        options: ["電話します", "電車します", "電気します", "会話します"],
        answer: "電話します",
        explain: "[電話します] (Gọi điện thoại)."
    },
    {
        id: 6,
        question: "Anh Yamada [Hajime] (tên riêng).",
        options: ["始め", "初め", "元", "本"],
        answer: "始め",
        explain: "Tên người hoặc [Mở đầu]. [Hajime]."
    },
    {
        id: 7,
        question: "Giá cả [vật giá] cao.",
        options: ["物価", "特価", "物理", "物質"],
        answer: "物価",
        explain: "[物価|ぶっか] (Vật giá)."
    },
    {
        id: 8,
        section: "Mondai 3: Chọn ý đúng",
        question: "「僕」(Boku) là từ xưng hô dùng cho: _______",
        options: ["Nam giới", "Nữ giới", "Cả nam và nữ", "Người lớn tuổi"],
        answer: "Nam giới",
        explain: "[Boku] là từ xưng hô thân mật của nam giới."
    },
    {
        id: 9,
        question: "「君」(Kimi) thường dùng để gọi: _______",
        options: ["Bạn bè, người dưới (thân mật)", "Giám đốc", "Thầy giáo", "Người lạ"],
        answer: "Bạn bè, người dưới (thân mật)",
        explain: "[Kimi] dùng gọi người nghe (ngôi thứ 2) một cách thân mật, thường là nam giới dùng."
    },
    {
        id: 10,
        question: "[着物] (Kimono) là: _______",
        options: ["Trang phục truyền thống Nhật Bản", "Đồ ăn Nhật Bản", "Nhà ở Nhật Bản", "Xe ô tô Nhật Bản"],
        answer: "Trang phục truyền thống Nhật Bản",
        explain: "Kimono."
    }
];

// TEST 3: Mixed (L19 & 20)
const TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Tổng hợp từ vựng",
        question: "パソコンを　_______。",
        options: ["なおします", "なります", "のぼります", "とまります"],
        answer: "なおします",
        explain: "[直します] (Sửa chữa). Sửa máy tính."
    },
    {
        id: 2,
        question: "お茶を　いれますけど、_______。",
        options: ["いかが", "どう", "なに", "だれ"],
        answer: "いかが",
        explain: "Tôi đi pha trà đây, mọi người thấy sao (có uống không)? [Ikaga] (lịch sự)."
    },
    {
        id: 3,
        question: "きのうは　_______。",
        options: ["このあいだ", "ずっと", "やっと", "きっと"],
        answer: "このあいだ",
        explain: "[Konoaida] (Hôm nọ/Vừa rồi). Thực ra [Kinou] là hôm qua, nhưng trong các lựa chọn thì [Konoaida] là danh từ chỉ thời gian quá khứ gần."
    },
    {
        id: 4,
        question: "みんなで　写真を　とりました。",
        options: ["みんなで", "ひとりで", "じぶん", "あなた"],
        answer: "みんなで",
        explain: "[Minnade] (Mọi người cùng nhau)."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji Tổng hợp",
        question: "[Lời nói] rất quan trọng.",
        options: ["言葉", "言菜", "古語", "辞書"],
        answer: "言葉",
        explain: "[言葉|ことば] (Từ ngữ/Lời nói/Tiếng)."
    },
    {
        id: 6,
        question: "Đã [kết thúc] rồi.",
        options: ["終わり", "変わり", "代わり", "周り"],
        answer: "終わり",
        explain: "[終わり|おわり] (Kết thúc)."
    },
    {
        id: 7,
        question: "Tôi mặc [Kimono].",
        options: ["着物", "生物", "建物", "買物"],
        answer: "着物",
        explain: "[着物|きもの] (Kimono)."
    },
    {
        id: 8,
        section: "Mondai 3: Chọn câu đúng nghĩa",
        question: "「サラリーマン」は　何ですか。",
        options: ["Người làm công ăn lương (nhân viên công ty)", "Giám đốc", "Học sinh", "Bác sĩ"],
        answer: "Người làm công ăn lương (nhân viên công ty)",
        explain: "Salaryman."
    },
    {
        id: 9,
        question: "「こっち」は　丁寧な言い方で　何ですか。",
        options: ["こちら", "これ", "ここ", "この"],
        answer: "こちら",
        explain: "[Kocchi] là cách nói thân mật của [Kochira]."
    },
    {
        id: 10,
        question: "「ビザ」が要ります。",
        options: ["Cần thị thực.", "Có thị thực.", "Ăn Pizza.", "Làm Visa."],
        answer: "Cần thị thực.",
        explain: "[Visa ga irimasu] (Cần thị thực)."
    }
];

// ============================================================================
// GRAMMAR TESTS (3 Variations)
// ============================================================================

// TEST 1: Focus Lesson 19 (Ta-form, Experience, Tari-tari)
const GRAMMAR_TEST_1: Question[] = [
    {
        id: 1,
        question: "北海道へ　_______ ことが　ありますか。",
        options: ["いった", "いく", "いって", "いきます"],
        answer: "いった",
        explain: "Kinh nghiệm: V-ta + koto ga arimasu."
    },
    {
        id: 2,
        question: "日曜日は　テニスを　_______、映画を　見たり　しました。",
        options: ["したり", "して", "した", "しって"],
        answer: "したり",
        explain: "Liệt kê hành động: [V-ta + ri, V-ta + ri + shimasu]. Tennis wo shitari..."
    },
    {
        id: 3,
        question: "寒く　_______ ね。",
        options: ["なりました", "なります", "なって", "なれば"],
        answer: "なりました",
        explain: "Trở nên lạnh: [Samuku narimashita]. (Đã trở nên lạnh)."
    },
    {
        id: 4,
        question: "わたしは　一度も　スキーを　_______ ことが　ありません。",
        options: ["した", "して", "する", "します"],
        answer: "した",
        explain: "Chưa từng làm gì: [V-ta] koto ga arimasen."
    },
    {
        id: 5,
        question: "元気　_______ なりました。",
        options: ["に", "く", "が", "を"],
        answer: "に",
        explain: "Tính từ đuôi na + ni + narimasu. [Genki ni narimashita]."
    }
];

// TEST 2: Focus Lesson 20 (Plain Style)
const GRAMMAR_TEST_2: Question[] = [
    {
        id: 1,
        question: "あした　東京へ　_______？ (Lên giọng)",
        options: ["いく", "いきます", "いって", "いった"],
        answer: "いく",
        explain: "Thể thông thường của [Ikimasu ka] là [Iku?]."
    },
    {
        id: 2,
        question: "昼ごはんを　_______？",
        options: ["たべた", "たべました", "たべて", "たべるの"],
        answer: "たべた",
        explain: "Đã ăn chưa? [Tabemashita ka] -> [Tabeta?]."
    },
    {
        id: 3,
        question: "そこは　_______。",
        options: ["きれいだ", "きれいです", "きれいだった", "きれいじゃない"],
        answer: "きれいだ",
        explain: "Thể thông thường của [Kirei desu] là [Kirei da]."
    },
    {
        id: 4,
        question: "きょうは　_______。",
        options: ["ひま？", "ひまですか", "ひまだ", "ひま"],
        answer: "ひま？",
        explain: "Hôm nay rảnh không? Trong câu hỏi danh từ/tính từ na, bỏ [da]. [Kyou wa hima?] (lên giọng)."
    },
    {
        id: 5,
        question: "ううん、あまり　_______。",
        options: ["おいしくない", "おいしくないです", "おいしいくない", "おいしくなくて"],
        answer: "おいしくない",
        explain: "Thông thường của [Oishikunai desu] là [Oishikunai]."
    }
];

// TEST 3: Mixed Grammar (L19 & 20)
const GRAMMAR_TEST_3: Question[] = [
    {
        id: 1,
        question: "相撲を　_______ ことが　ありますか。",
        options: ["みた", "みる", "みて", "みます"],
        answer: "みた",
        explain: "Kinh nghiệm: V-ta + koto ga arimasu."
    },
    {
        id: 2,
        question: "春に　_______。",
        options: ["なりました", "なっています", "なる", "なります"],
        answer: "なりました",
        explain: "Đã sang xuân / Đã trở thành mùa xuân: [Haru ni narimashita]."
    },
    {
        id: 3,
        question: "来週　国へ　_______？ ...うん、_______。",
        options: ["かえる／かえる", "かえります／かえります", "かえって／かえって", "かえる／かえらない"],
        answer: "かえる／かえる",
        explain: "Hội thoại thân mật: [Kaeru?] -> [Un, kaeru]."
    },
    {
        id: 4,
        question: "日本語の　勉強は　_______？ ...ううん、_______。",
        options: ["むずかしい／むずかしくない", "むずかしい／むずかしいくない", "むずかしくない／むずかしい", "むずかしい／むずかしいがない"],
        answer: "むずかしい／むずかしくない",
        explain: "Hỏi: [Muzukashii?] (Có khó không?) -> Đáp: [Uun, muzukashikunai] (Không, không khó)."
    },
    {
        id: 5,
        question: "休みは　本を　_______、テレビを　見たり　します。",
        options: ["読んだり", "読んで", "読む", "読みます"],
        answer: "読んだり",
        explain: "Liệt kê hành động: [Yondari...]."
    }
];

export const ALL_TESTS = {
    1: TEST_1,
    2: TEST_2,
    3: TEST_3
};

export const ALL_GRAMMAR_TESTS = {
    1: GRAMMAR_TEST_1,
    2: GRAMMAR_TEST_2,
    3: GRAMMAR_TEST_3
};
