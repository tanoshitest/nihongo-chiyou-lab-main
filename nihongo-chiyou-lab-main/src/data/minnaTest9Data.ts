
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

// TEST 1: Focus Lesson 17 (Verbs: Nai-form related, Health, Documents)
const TEST_1: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "大切な　書類ですから、_______ ください。",
        options: ["なくさないで", "なくして", "なくなる", "ないで"],
        answer: "なくさないで",
        explain: "[失くします] (Làm mất) -> [Nakusanai de kudasai] (Xin đừng làm mất)."
    },
    {
        id: 2,
        question: "熱が　ありますから、病院へ　_______。",
        options: ["いきます", "きます", "かえります", "のります"],
        answer: "いきます",
        explain: "Vì bị sốt (netsu ga arimasu) nên đi bệnh viện."
    },
    {
        id: 3,
        question: "薬を　_______。",
        options: ["のみます", "たべます", "かみます", "よみます"],
        answer: "のみます",
        explain: "Uống thuốc dùng động từ [Nomimasu]."
    },
    {
        id: 4,
        question: "漢字を　_______。",
        options: ["おぼえます", "わすれます", "でます", "ぬぎます"],
        answer: "おぼえます",
        explain: "Nhớ/Học thuộc Hán tự (Oboemasu)."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji",
        question: "Đừng [quên] ô nhé.",
        options: ["忘れないで", "忙れないで", "亡れないで", "盲れないで"],
        answer: "忘れないで",
        explain: "[忘れます|わすれます] (Quên)."
    },
    {
        id: 6,
        question: "[Cởi] giày ra.",
        options: ["脱いで", "説いで", "税いで", "悦いで"],
        answer: "脱いで",
        explain: "[脱ぎます|ぬぎます] (Cởi quần áo, giầy dép)."
    },
    {
        id: 7,
        question: "Trả tiền [Mặt].",
        options: ["現金", "現在", "金曜日", "お金"],
        answer: "現金",
        explain: "Bài 18 có [Genkin], Bài 17 có [Haraimasu]. [現金] (Tiền mặt)."
    },
    {
        id: 8,
        section: "Mondai 3: Tìm từ cùng nhóm",
        question: "心配します、残業します、出張します、_______",
        options: ["勉強します", "痛い", "大丈夫", "薬"],
        answer: "勉強します",
        explain: "Nhóm động từ nhóm III (Danh từ + shimasu)."
    },
    {
        id: 9,
        question: "痛い、熱、病気、_______",
        options: ["薬", "元気", "スポーツ", "散歩"],
        answer: "薬",
        explain: "Nhóm từ vựng liên quan đến sức khỏe/y tế."
    },
    {
        id: 10,
        question: "[禁煙] (Cấm hút thuốc) nghĩa là: _______",
        options: ["タバコをすってはいけません", "タバコをすってもいいです", "タバコをかいにいきます", "タバコがありません"],
        answer: "タバコをすってはいけません",
        explain: "Cấm hút thuốc."
    }
];

// TEST 2: Focus Lesson 18 (Verbs: Dictionary form, Hobbies, Actions)
const TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "趣味は　切手を　_______ ことです。",
        options: ["あつめる", "あつめます", "あつめて", "あつめない"],
        answer: "あつめる",
        explain: "Sở thích là việc [Sưu tầm] tem. Dùng thể nguyên dạng + koto."
    },
    {
        id: 2,
        question: "ピアノを　_______ ことが　できますか。",
        options: ["ひく", "きく", "うたう", "あそぶ"],
        answer: "ひく",
        explain: "Chơi nhạc cụ dây/phím dùng [Hikimasu] (Hiku)."
    },
    {
        id: 3,
        question: "日本料理を　_______ ことが　できます。",
        options: ["つくる", "たべる", "のむ", "あらう"],
        answer: "つくる",
        explain: "Có thể [nấu/chế biến] món ăn Nhật. [Tsukuru]."
    },
    {
        id: 4,
        question: "車を　_______。",
        options: ["うんてんします", "うんどうします", "予習します", "復習します"],
        answer: "うんてんします",
        explain: "[運転します] (Lái xe)."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji",
        question: "Sở thích của tôi là [đọc] sách.",
        options: ["読む", "見む", "頼む", "絡む"],
        answer: "読む",
        explain: "[読む|よむ] (Đọc)."
    },
    {
        id: 6,
        question: "Tôi có thể [bơi].",
        options: ["泳ぐ", "永ぐ", "水ぐ", "氷ぐ"],
        answer: "泳ぐ",
        explain: "[泳ぐ|およぐ] (Bơi)."
    },
    {
        id: 7,
        question: "Hàng ngày tôi viết [nhật ký].",
        options: ["日記", "日気", "日曜日", "日光"],
        answer: "日記",
        explain: "[日記|にっき] (Nhật ký)."
    },
    {
        id: 8,
        section: "Mondai 3: Từ vựng",
        question: "Mấy mét: _______",
        options: ["何メートル", "何グラム", "何キロ", "何センチ"],
        answer: "何メートル",
        explain: "[Nan-meetoru] (Mấy mét)."
    },
    {
        id: 9,
        question: "Động vật: _______",
        options: ["どうぶつ", "しょくぶつ", "たべもの", "のりもの"],
        answer: "どうぶつ",
        explain: "[動物|どうぶつ] (Động vật)."
    },
    {
        id: 10,
        question: "[故郷] (Quê hương) đọc là: _______",
        options: ["ふるさと", "くに", "いなか", "まち"],
        answer: "ふるさと",
        explain: "[故郷|ふるさと] (Quê hương)."
    }
];

// TEST 3: Mixed (L17 & 18)
const TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Tổng hợp từ vựng",
        question: "パスポートを　_______ なければ　なりません。",
        options: ["みせ", "みせます", "みせて", "みない"],
        answer: "みせ",
        explain: "[Misemasu] -> [Mise-nakereba narimasen] (Phải cho xem)."
    },
    {
        id: 2,
        question: "寝る　_______、お祈りを　します。",
        options: ["まえに", "あとに", "とき", "ながら"],
        answer: "まえに",
        explain: "[Neru mae ni] (Trước khi ngủ)."
    },
    {
        id: 3,
        question: "お金を　_______。",
        options: ["かえます", "かえります", "かいます", "かきます"],
        answer: "かえます",
        explain: "Đổi tiền -> [Kaemasu] (Change/Exchange)."
    },
    {
        id: 4,
        question: "今日は　_______　帰ります。",
        options: ["はやく", "はやい", "あまい", "からい"],
        answer: "はやく",
        explain: "Về [sớm]. Tính từ i -> ku + V."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji Tổng hợp",
        question: "[Ca sĩ] hát bài hát.",
        options: ["歌手", "歌主", "歌員", "歌人"],
        answer: "歌手",
        explain: "[歌手|かしゅ] (Ca sĩ)."
    },
    {
        id: 6,
        question: "Tự mình [giặt] áo sơ mi.",
        options: ["洗います", "焼きます", "汚します", "前います"],
        answer: "洗います",
        explain: "[洗います|あらいます] (Giặt/Rửa)."
    },
    {
        id: 7,
        question: "Sở thích (Shumi): _______",
        options: ["趣味", "興味", "味", "意味"],
        answer: "趣味",
        explain: "[趣味|しゅみ] (Sở thích)."
    },
    {
        id: 8,
        section: "Mondai 3: Chọn câu đúng nghĩa",
        question: "日本語ができます。",
        options: ["Tôi có thể nói tiếng Nhật.", "Tôi thích tiếng Nhật.", "Tôi học tiếng Nhật.", "Tôi ghét tiếng Nhật."],
        answer: "Tôi có thể nói tiếng Nhật.",
        explain: "N ga dekimasu (Có thể làm N)."
    },
    {
        id: 9,
        question: "ぜひ遊びに来てください。",
        options: ["Nhất định hãy đến chơi nhé.", "Đừng đến chơi nhé.", "Có thể đến chơi không?", "Tôi muốn đi chơi."],
        answer: "Nhất định hãy đến chơi nhé.",
        explain: "[Zehi] (Nhất định) dùng khi mời mọc tha thiết."
    },
    {
        id: 10,
        question: "なかなかバスが来ません。",
        options: ["Mãi mà xe buýt không đến.", "Xe buýt sắp đến.", "Xe buýt vừa mới đến.", "Xe buýt hay đến."],
        answer: "Mãi mà xe buýt không đến.",
        explain: "[Nakanaka] + phủ định: Mãi mà không... / Khó mà..."
    }
];

// ============================================================================
// GRAMMAR TESTS (3 Variations)
// ============================================================================

// TEST 1: Focus Lesson 17 (Nai-form)
const GRAMMAR_TEST_1: Question[] = [
    {
        id: 1,
        question: "ここで　写真を　_______ ください。",
        options: ["とらないで", "とらなくて", "とらなく", "とらない"],
        answer: "とらないで",
        explain: "Xin đừng chụp ảnh: [Nai-form] + de kudasai."
    },
    {
        id: 2,
        question: "薬を　_______ なりません。",
        options: ["のまなければ", "のまなくては", "のまないと", "のむならば"],
        answer: "のまなければ",
        explain: "Phải uống thuốc: [Nai-form (bỏ i)] + kereba narimasen."
    },
    {
        id: 3,
        question: "あしたは　_______ いいです。",
        options: ["こなくても", "こないでも", "こないで", "こなくて"],
        answer: "こなくても",
        explain: "Không cần đến cũng được: [Nai-form (bỏ i)] + kutemo ii desu."
    },
    {
        id: 4,
        question: "パスポートを　_______。",
        options: ["みせなければなりません", "みせてもいいです", "みせてください", "みせなくてもいいです"],
        answer: "みせなければなりません",
        explain: "Ngữ cảnh kiểm tra hải quan: Phải cho xem hộ chiếu."
    },
    {
        id: 5,
        question: "レポートは　いつ　_______ か。",
        options: ["ださなければ　なりません", "だしても　いいです", "ださなくても　いいです", "だしません"],
        answer: "ださなければ　なりません",
        explain: "Khi nào [phải] nộp báo cáo?"
    }
];

// TEST 2: Focus Lesson 18 (Dictionary Form)
const GRAMMAR_TEST_2: Question[] = [
    {
        id: 1,
        question: "ミラーさんは　漢字を　_______ ことが　できます。",
        options: ["よむ", "よみます", "よんで", "よんだ"],
        answer: "よむ",
        explain: "Mẫu câu khả năng: V-ru (Từ điển) + koto ga dekimasu."
    },
    {
        id: 2,
        question: "わたしの　趣味は　映画を　_______ ことです。",
        options: ["みる", "みます", "みて", "みた"],
        answer: "みる",
        explain: "Sở thích là việc ~ : V-ru + koto desu."
    },
    {
        id: 3,
        question: "寝る　_______、日記を　書きます。",
        options: ["まえに", "あとに", "ときに", "ながら"],
        answer: "まえに",
        explain: "Trước khi ngủ: [V-ru] + mae ni."
    },
    {
        id: 4,
        question: "食事の　_______、手を　洗います。",
        options: ["まえに", "あとに", "ときに", "ながら"],
        answer: "まえに",
        explain: "Trước bữa ăn: [Noun] + no + mae ni."
    },
    {
        id: 5,
        question: "この　本を　読むのには　2週間　_______。",
        options: ["かかります", "います", "あります", "します"],
        answer: "かかります",
        explain: "Tốn/Mất bao nhiêu thời gian: [Kakarimasu]."
    }
];

// TEST 3: Mixed Grammar (L17 & 18)
const GRAMMAR_TEST_3: Question[] = [
    {
        id: 1,
        question: "心配　_______ ください。",
        options: ["しないで", "しなくて", "しない", "しなく"],
        answer: "しないで",
        explain: "Xin đừng lo lắng: Shinpai shinaide kudasai."
    },
    {
        id: 2,
        question: "土曜日は　早く　_______ なりません。",
        options: ["かえらなければ", "かえらなくて", "かえらないで", "かえらなくても"],
        answer: "かえらなければ",
        explain: "Phải về sớm."
    },
    {
        id: 3,
        question: "カードで　_______ ことが　できますか。",
        options: ["はらう", "はらいます", "はらって", "はらった"],
        answer: "はらう",
        explain: "Có thể trả bằng thẻ không? V-ru + koto ga dekimasu."
    },
    {
        id: 4,
        question: "ここで　靴を　_______ いいです。",
        options: ["ぬがなくても", "ぬがないで", "ぬぐと", "ぬげば"],
        answer: "ぬがなくても",
        explain: "Không cởi giày cũng được (Nuganaku temo ii desu)."
    },
    {
        id: 5,
        question: "日本へ　_______ まえに、日本語を　勉強しました。",
        options: ["くる", "きます", "きて", "きた"],
        answer: "くる",
        explain: "Trước khi đến Nhật: [V-ru] + mae ni."
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
