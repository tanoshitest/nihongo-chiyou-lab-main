
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

// TEST 1: Focus Lesson 15 (Verbs, Professions)
const TEST_1: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "ここに　自転車を　_______ ください。",
        options: ["おかないで", "おきて", "おいて", "およいで"],
        answer: "おかないで",
        explain: "[置きます] (Đặt/Để). Xin đừng để xe đạp ở đây (Okanaide kudasai)."
    },
    {
        id: 2,
        question: "あの　人は　_______ です。",
        options: ["独身", "結婚", "家族", "専門"],
        answer: "独身",
        explain: "[独身|どくしん] (Độc thân). Người kia còn độc thân."
    },
    {
        id: 3,
        question: "わたしは　コンピューターの　会社で　_______。",
        options: ["はたらいています", "つくっています", "うっています", "しっています"],
        answer: "はたらいています",
        explain: "[働いています] (Đang làm việc). Tôi đang làm việc tại công ty máy tính."
    },
    {
        id: 4,
        question: "カタログを　_______。",
        options: ["つくります", "おくります", "もらいます", "うります"],
        answer: "もらいます",
        explain: "Dựa vào ngữ cảnh, thường là [nhận] catalog. Các động từ khác cũng có thể đúng tùy ngữ cảnh nhưng [moraimasu] phổ biến hơn khi nói về catalog miễn phí."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji & Nghề nghiệp",
        question: "Anh ấy là [nhà nghiên cứu].",
        options: ["研究者", "医者", "学者", "技術者"],
        answer: "研究者",
        explain: "[研究者|けんきゅうしゃ] (Nhà nghiên cứu)."
    },
    {
        id: 6,
        question: "Bố tôi là [Công chức].",
        options: ["公務員", "会社員", "銀行員", "駅員"],
        answer: "公務員",
        explain: "[公務員|こうむいん] (Công chức)."
    },
    {
        id: 7,
        question: "Chị ấy là [Thợ cắt tóc].",
        options: ["美容師", "理容師", "教師", "医師"],
        answer: "美容師",
        explain: "[美容師|びようし] (Thợ cắt tóc/Chuyên gia làm đẹp). [理容師] thường là thợ cạo/cắt tóc nam."
    },
    {
        id: 8,
        section: "Mondai 3: Tìm từ cùng nhóm",
        question: "作った、売った、知った、_______",
        options: ["住んだ", "きれい", "若い", "いい"],
        answer: "住んだ",
        explain: "Nhóm động từ thể Ta. Các từ còn lại là tính từ."
    },
    {
        id: 9,
        question: "資料、時刻表、カタログ、_______",
        options: ["服", "ソフト", "製品", "パンフレット"],
        answer: "パンフレット",
        explain: "Nhóm tài liệu/giấy tờ tham khảo. [パンフレット] (Tờ rơi/Pamphlet - không có trong bài nhưng cùng loại). Hoặc chọn [製品] nếu xét theo nhóm đồ vật."
    },
    {
        id: 10,
        question: "[特に] (Đặc biệt) đồng nghĩa với: _______",
        options: ["スペシャル", "ソフト", "サービス", "ニュース"],
        answer: "スペシャル",
        explain: "[特に] = Special (Đặc biệt)."
    }
];

// TEST 2: Focus Lesson 16 (Verbs, Adjectives, Body Parts)
const TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "大学の　前に　バスを　_______。",
        options: ["おります", "のります", "はいります", "でます"],
        answer: "おります",
        explain: "[降ります] (Xuống xe). Xuống xe buýt ở trước trường đại học."
    },
    {
        id: 2,
        question: "シャワーを　_______。",
        options: ["あびて", "あらって", "いれて", "だして"],
        answer: "あびて",
        explain: "[浴びます] (Tắm). Tắm vòi hoa sen."
    },
    {
        id: 3,
        question: "お金を　_______。",
        options: ["だします", "いれます", "おします", "のります"],
        answer: "だします",
        explain: "Dựa vào ngữ cảnh rút tiền: [出します] (Lấy ra/Rút). Cũng có thể là [入れます] (Bỏ vào) nhưng [出します] hay dùng với rút tiền từ ATM."
    },
    {
        id: 4,
        question: "象は　鼻が　_______ です。",
        options: ["ながい", "みじかい", "わかい", "ひくい"],
        answer: "ながい",
        explain: "[長い] (Dài). Con voi thì mũi dài."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji & Cơ thể",
        question: "Tôi bị đau [đầu].",
        options: ["頭", "顔", "首", "手"],
        answer: "頭",
        explain: "[頭|あたま] (Đầu)."
    },
    {
        id: 6,
        question: "Cô ấy có [tóc] đen.",
        options: ["髪", "紙", "神", "上"],
        answer: "髪",
        explain: "[髪|かみ] (Tóc)."
    },
    {
        id: 7,
        question: "Đau [bụng].",
        options: ["お腹", "背中", "足", "胸"],
        answer: "お腹",
        explain: "[お腹|おなか] (Bụng)."
    },
    {
        id: 8,
        section: "Mondai 3: Từ vựng ATM",
        question: "Mã số bí mật: _______",
        options: ["あんしょうばんごう", "でんわばんごう", "へやばんごう", " ばんごう"],
        answer: "あんしょうばんごう",
        explain: "[暗証番号|あんしょうばんごう] (Mã số bí mật/PIN)."
    },
    {
        id: 9,
        question: "Sự xác nhận: _______",
        options: ["かくにん", "かくしん", "かくと", "かくやす"],
        answer: "かくにん",
        explain: "[確認|かくにん] (Sự xác nhận)."
    },
    {
        id: 10,
        question: "Số tiền: _______",
        options: ["きんがく", "げんきん", "やす", "たかい"],
        answer: "きんがく",
        explain: "[金額|きんがく] (Số tiền/Khoản tiền)."
    }
];

// TEST 3: Mixed (L15 & 16)
const TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Tổng hợp từ vựng",
        question: "すみませんが、ちょっと　使い方を　_______ ください。",
        options: ["おしえて", "おして", "おとして", "おわって"],
        answer: "おしえて",
        explain: "[教えます] (Dạy/Chỉ bảo). Hãy chỉ cho tôi cách dùng."
    },
    {
        id: 2,
        question: "この　ボタンを　_______ ください。",
        options: ["おして", "おしえて", "おとして", "おいて"],
        answer: "おして",
        explain: "[押します] (Ấn/Bấm). Hãy ấn nút này."
    },
    {
        id: 3,
        question: "マリアさんは　_______ 人ですね。",
        options: ["あたまがいい", "あたまがわるい", "あたまがいたい", "あたまがない"],
        answer: "あたまがいい",
        explain: "[頭がいい] (Thông minh)."
    },
    {
        id: 4,
        question: "会社を　_______。",
        options: ["やめました", "とめました", "しめました", "きめました"],
        answer: "やめました",
        explain: "[辞めます] (Nghỉ/Bỏ việc). Đã nghỉ việc công ty."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji Tổng hợp",
        question: "Trường [Cấp 3] của tôi ở Kyoto.",
        options: ["高校", "大学", "中学", "小学校"],
        answer: "高校",
        explain: "[高校|こうこう] (Trường THPT/Cấp 3)."
    },
    {
        id: 6,
        question: "[Răng] tôi trắng.",
        options: ["歯", "口", "目", "耳"],
        answer: "歯",
        explain: "[歯|は] (Răng)."
    },
    {
        id: 7,
        question: "Anh ấy [biết] số điện thoại.",
        options: ["知って", "住んで", "使って", "売って"],
        answer: "知って",
        explain: "[知っています] (Biết)."
    },
    {
        id: 8,
        section: "Mondai 3: Chọn câu đúng nghĩa",
        question: "私は独身です。",
        options: ["私は結婚していません。", "私は結婚しています。", "私は家族がいません。", "私は子供がいません。"],
        answer: "私は結婚していません。",
        explain: "[独身] (Độc thân) = Chưa kết hôn ([結婚していません])."
    },
    {
        id: 9,
        question: "背が高いです。",
        options: ["Người cao.", "Lưng dài.", "Cổ cao.", "Tay dài."],
        answer: "Người cao.",
        explain: "[背が高い] (Dáng người cao)."
    },
    {
        id: 10,
        question: "どうやって大学へ行きますか。",
        options: ["Đến trường đại học bằng cách nào?", "Tại sao đi đến trường đại học?", "Đi đến trường đại học làm gì?", "Khi nào đi đến trường đại học?"],
        answer: "Đến trường đại học bằng cách nào?",
        explain: "[どうやって] (Làm thế nào/Bằng cách nào)."
    }
];

// ============================================================================
// GRAMMAR TESTS (3 Variations)
// ============================================================================

// TEST 1: Focus Lesson 15 (Permissions, Prohibitions, States)
const GRAMMAR_TEST_1: Question[] = [
    {
        id: 1,
        question: "ここで　タバコを　_______ いけません。",
        options: ["すっては", "すっても", "すうは", "すうも"],
        answer: "すっては",
        explain: "Mẫu câu cấm đoán: [V-te wa ikemasen]."
    },
    {
        id: 2,
        question: "この　傘を　_______ いいですか。",
        options: ["かりても", "かりては", "かりると", "かりるも"],
        answer: "かりても",
        explain: "Mẫu câu xin phép: [V-te mo ii desuka]. Tôi mượn cái ô này được không?"
    },
    {
        id: 3,
        question: "わたしは　結婚　_______。",
        options: ["しています", "します", "しりません", "しました"],
        answer: "しています",
        explain: "Trạng thái kết hôn dùng [V-te imasu] -> Kekkon shite imasu."
    },
    {
        id: 4,
        question: "IMCは　ソフトを　_______ います。",
        options: ["つくって", "つかって", "うって", "しって"],
        answer: "つくって",
        explain: "IMC sản xuất phần mềm. [Tsukurimasu] -> [Tsukutte imasu] (chỉ nghề nghiệp/công việc thường xuyên)."
    },
    {
        id: 5,
        question: "木村さんの　住所を　知って　いますか。\n...いいえ、_______。",
        options: ["しりません", "しって　いません", "しりないです", "しりない"],
        answer: "しりません",
        explain: "Phủ định của [Shitte imasu] là [Shirimasen]. Chú ý: Không dùng [Shitte imasen]."
    }
];

// TEST 2: Focus Lesson 16 (Sequences, Attributes)
const GRAMMAR_TEST_2: Question[] = [
    {
        id: 1,
        question: "朝　ジョギングを　_______、シャワーを　あびます。",
        options: ["して", "します", "した", "する"],
        answer: "して",
        explain: "Nối hành động theo trình tự thời gian dùng thể Te. [Shimasu] -> [Shite]."
    },
    {
        id: 2,
        question: "コンサートが　_______ から、レストランで　食事しました。",
        options: ["おわって", "おわる", "おわった", "おわり"],
        answer: "おわって",
        explain: "Mẫu câu [V-te kara] (Sau khi làm V1 thì làm V2). Sau khi buổi hòa nhạc kết thúc..."
    },
    {
        id: 3,
        question: "大阪は　食べ物が　_______。",
        options: ["おいしいです", "おいしくて", "おいしいな", "おいしい"],
        answer: "おいしいです",
        explain: "Kết thúc câu miêu tả dùng tính từ. [Osaka wa tabemono ga oishii desu]."
    },
    {
        id: 4,
        question: "あの　背が　_______ 人は　だれですか。",
        options: ["たかくて、かみが　くろい", "たかい、かみが　くろい", "たかくて、かみが　くろ", "たかい、かみが　くろ"],
        answer: "たかくて、かみが　くろい",
        explain: "Nối tính từ đuôi i: [Takai] -> [Takakute]."
    },
    {
        id: 5,
        question: "奈良は　_______ 町です。",
        options: ["静かで、きれいな", "静かて、きれいな", "静かで、きれいの", "静かな、きれいな"],
        answer: "静かで、きれいな",
        explain: "Nối tính từ đuôi na: [Shizuka na] -> [Shizuka de]. Cuối cũng bổ nghĩa cho danh từ [Machi] nên dùng [Kirei na]."
    }
];

// TEST 3: Mixed Grammar (L15 & 16)
const GRAMMAR_TEST_3: Question[] = [
    {
        id: 1,
        question: "大学まで　_______ 行きますか。\n...バスで　行きます。",
        options: ["どうやって", "どの", "なにで", "どこへ"],
        answer: "どうやって",
        explain: "Hỏi về cách thức đi lại/làm việc gì đó dùng [Douyatte]."
    },
    {
        id: 2,
        question: "サントスさんは　_______ 人ですか。",
        options: ["どの", "どれ", "だれ", "どう"],
        answer: "どの",
        explain: "[Dono + N] (Cái nào/Người nào trong nhóm)."
    },
    {
        id: 3,
        question: "ここに　車を　_______ いけません。",
        options: ["とめては", "とめても", "とめると", "とめるは"],
        answer: "とめては",
        explain: "[V-te wa ikemasen]. Cấm đỗ xe."
    },
    {
        id: 4,
        question: "お金を　_______ から、買い物に　行きます。",
        options: ["おろして", "おろした", "おろす", "おろし"],
        answer: "おろして",
        explain: "[V-te kara]. Sau khi rút tiền thì đi mua sắm. (Oroshimasu -> Oroshite)."
    },
    {
        id: 5,
        question: "この　辞書を　_______ いいですか。",
        options: ["つかっても", "つかっては", "つかうと", "つかう"],
        answer: "つかっても",
        explain: "[V-te mo ii desu ka]. Tôi dùng từ điển này có được không?"
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
