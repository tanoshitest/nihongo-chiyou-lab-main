
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

// TEST 1: Focus Lesson 13 (Wants, Feelings, Places)
const TEST_1: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp điền vào chỗ trống",
        question: "わたしは　あたらしい　パソコンが　_______ です。",
        options: ["ほしい", "あげたい", "もらいたい", "かいたい"],
        answer: "ほしい",
        explain: "[ほしい] (Muốn có). Dùng với trợ từ [が]. わたしはパソコンがほしいです (Tôi muốn có máy tính)."
    },
    {
        id: 2,
        question: "のどが　_______ から、なにか　のみたいです。",
        options: ["すきました", "かわきました", "つかれました", "痛い"],
        answer: "かわきました",
        explain: "[のどがかわきました] (Khát nước)."
    },
    {
        id: 3,
        question: "きょうは　しごとが　_______ ですから、　早く　寝ます。",
        options: ["たいへん", "せまい", "ひろい", "ほしい"],
        answer: "たいへん",
        explain: "[たいへん] (Vất vả, mệt). Công việc vất vả."
    },
    {
        id: 4,
        question: "しゅうまつは　こどもと　こうエンで　_______。",
        options: ["あそびます", "およぎます", "むかえます", "つかれます"],
        answer: "あそびます",
        explain: "[あそびます] (Chơi). Chơi ở công viên."
    },
    {
        id: 5,
        section: "Mondai 2: Chọn Kanji đúng",
        question: "Giờ nghỉ trưa tôi đi [ăn cơm] với bạn bè.",
        options: ["食事します", "仕事します", "火事します", "大事します"],
        answer: "食事します",
        explain: "[食事します|しょくじします] (Ăn cơm). [仕事|しごと] (Công việc)."
    },
    {
        id: 6,
        question: "Tôi muốn đi [đón] mẹ ở sân bay.",
        options: ["迎えます", "送ります", "帰ります", "待ちます"],
        answer: "迎えます",
        explain: "[迎えます|むかえます] (Đón). [送ります|おくります] (Tiễn/Gửi)."
    },
    {
        id: 7,
        question: "Thành phố này đường [rộng].",
        options: ["広い", "狭い", "若い", "古い"],
        answer: "広い",
        explain: "[広い|ひろい] (Rộng). [狭い|せまい] (Hẹp)."
    },
    {
        id: 8,
        section: "Mondai 3: Từ vựng theo chủ đề (Địa điểm)",
        question: "Nơi xem tranh, tác phẩm nghệ thuật: _______",
        options: ["びじゅつかん", "はくぶつかん", "としょかん", "えいがかん"],
        answer: "びじゅつかん",
        explain: "[びじゅつかん] (Bảo tàng mỹ thuật). [はくぶつかん] (Bảo tàng)."
    },
    {
        id: 9,
        question: "Nơi làm thủ tục hành chính của thành phố: _______",
        options: ["しやくしょ", "じむしょ", "きょうしつ", "かいしゃ"],
        answer: "しやくしょ",
        explain: "[しやくしょ] (Văn phòng hành chính quận/thành phố/UBND)."
    },
    {
        id: 10,
        question: "_______ へ行って、魚を買います。",
        options: ["さかなや", "にくや", "やおや", "パンや"],
        answer: "さかなや",
        explain: "[さかなや] (Cửa hàng cá)."
    }
];

// TEST 2: Focus Lesson 14 (Verbs, Te-form context, Station)
const TEST_2: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ thích hợp",
        question: "へやの　電気を　_______ ください。",
        options: ["つけて", "あけて", "しめて", "とめて"],
        answer: "つけて",
        explain: "[つけます] (Bật - điện/máy móc). [電気|でんき] (Điện/Đèn)."
    },
    {
        id: 2,
        question: "ちょっと　_______ ください。",
        options: ["まって", "もって", "とって", "よんで"],
        answer: "まって",
        explain: "[まちます] -> [まって] (Đợi). [ちょっとまってください] (Xin đợi một chút)."
    },
    {
        id: 3,
        question: "タクシーを　_______。",
        options: ["よびました", "よみました", "のみました", "すみました"],
        answer: "よびました",
        explain: "[よびます] (Gọi). Gọi taxi."
    },
    {
        id: 4,
        question: "雨が　_______ います。",
        options: ["ふって", "おきて", "あけて", "かりて"],
        answer: "ふって",
        explain: "[ふります] (Rơi - mưa/tuyết). [あめがふっています] (Trời đang mưa)."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji & Ý nghĩa",
        question: "Xin hãy [mở] cửa sổ.",
        options: ["開けて", "閉めて", "聞けて", "関けて"],
        answer: "開けて",
        explain: "[開けます|あけます] (Mở)."
    },
    {
        id: 6,
        question: "Hãy [viết] tên vào đây.",
        options: ["名前", "住所", "地図", "有名"],
        answer: "名前",
        explain: "[名前|なまえ] (Tên). [住所|じゅうしょ] (Địa chỉ)."
    },
    {
        id: 7,
        question: "Hãy [cho xem] hộ chiếu.",
        options: ["見せて", "見て", "来て", "行って"],
        answer: "見せて",
        explain: "[見せます|みせます] (Cho xem). [見ます|みます] (Xem/Nhìn)."
    },
    {
        id: 8,
        section: "Mondai 3: Từ vựng nhà ga",
        question: "Nơi mua vé tàu: _______",
        options: ["きっぷうりば", "かいさつぐち", "ホーム", "ばいてん"],
        answer: "きっぷうりば",
        explain: "[きっぷうりば] (Quầy bán vé). [かいさつぐち] (Cửa soát vé)."
    },
    {
        id: 9,
        question: "Tàu chạy nhanh nhất (Tốc hành đặc biệt): _______",
        options: ["とっきゅう", "きゅうこう", "かいそく", "ふつう"],
        answer: "とっきゅう",
        explain: "[とっきゅう] (Đặc cấp/Tốc hành đặc biệt). Nhanh nhất."
    },
    {
        id: 10,
        question: "Bảng giờ tàu chạy: _______",
        options: ["じこくひょう", "ちず", "パスポート", "カタログ"],
        answer: "じこくひょう",
        explain: "[じこくひょう] (Bảng giờ tàu/Thời khắc biểu)."
    }
];

// TEST 3: Mixed (L13 & 14)
const TEST_3: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Tổng hợp từ vựng",
        question: "今、ばんごはんお　_______ います。",
        options: ["たべて", "たべに", "たべ", "たべたい"],
        answer: "たべて",
        explain: "[V-te います] (Đang làm V). Đang ăn tối."
    },
    {
        id: 2,
        question: "あついですね。　冷たい　ジュースが　_______。",
        options: ["ほしいです", "のみたいです", "かいたいです", "すきです"],
        answer: "ほしいです",
        explain: "[Danh từ + が + ほしいです] (Muốn có N). Muốn nước ép lạnh. Nếu dùng 'nomitai' phải là 'nomitai desu' (muốn uống) nhưng câu có 'ga'."
    },
    {
        id: 3,
        question: "すみません、しおを　_______ ください。",
        options: ["とって", "とめて", "とって", "とんで"],
        answer: "とって",
        explain: "[とります] (Lấy). [とってください] (Hãy lấy giúp)."
    },
    {
        id: 4,
        question: "週末は　デパートへ　_______ 行きます。",
        options: ["かいものに", "かいものを", "かいものが", "かいもので"],
        answer: "かいものに",
        explain: "[N (hành động) + に + 行きます] (Đi để làm N). Đi mua sắm."
    },
    {
        id: 5,
        section: "Mondai 2: Kanji Tổng hợp",
        question: "[Địa chỉ] của bạn ở đâu?",
        options: ["住所", "住所", "住処", "住民"],
        answer: "住所",
        explain: "[住所|じゅうしょ] (Địa chỉ)."
    },
    {
        id: 6,
        question: "Tôi đi [mượn] sách ở thư viện.",
        options: ["借り", "貸し", "買い", "読み"],
        answer: "借り",
        explain: "[借り|か・り] (Mượn). Đi (để) mượn sách -> 借りに行きます."
    },
    {
        id: 7,
        question: "Hãy [dừng] xe ở kia.",
        options: ["止めて", "止まって", "立って", "座って"],
        answer: "止めて",
        explain: "[止めます|とめます] (Dừng/Đỗ xe - Tha động từ). [止まって] (Tự dừng lại - Tự động từ). Ở đây là yêu cầu ai đó dừng xe -> 止めて."
    },
    {
        id: 8,
        section: "Mondai 3: Chọn câu đúng",
        question: "A: _______ B: ええ、いいですよ。",
        options: ["ボールペンを　かしても　いいですか。", "ボールペンを　かして　ください。", "ボールペンを　かしましょうか。", "ボールペンを　かします。"],
        answer: "ボールペンを　かしましょうか。",
        explain: "[V-mashou ka] (Tôi làm V giúp bạn nhé?). A: Tôi cho bạn mượn bút nhé? B: Vâng, được đấy (cảm ơn)."
    },
    {
        id: 9,
        question: "Tìm từ trái nghĩa: [広い] (Rộng)",
        options: ["狭い", "高い", "低い", "暗い"],
        answer: "狭い",
        explain: "[狭い|せまい] (Hẹp)."
    },
    {
        id: 10,
        question: "Tìm từ cùng nhóm: 喫茶店、レストラン、スーパー",
        options: ["デパート", "こえん", "がっこう", "うち"],
        answer: "デパート",
        explain: "Các từ đều là cửa hàng/nơi mua bán dịch vụ. [デパート] (TTTM)."
    }
];

// ============================================================================
// GRAMMAR TESTS (3 Variations)
// ============================================================================

// TEST 1: Focus Lesson 13 (Wants, Purpose)
const GRAMMAR_TEST_1: Question[] = [
    {
        id: 1,
        question: "わたしは　カメラ_______ ほしいです。",
        options: ["が", "を", "で", "に"],
        answer: "が",
        explain: "Mẫu câu [N が ほしいです] (Muốn có N)."
    },
    {
        id: 2,
        question: "きょうは　つかれましたから、なにも　_______。",
        options: ["したくないです", "したいです", "して　いません", "します"],
        answer: "したくないです",
        explain: "[V-tai] (Muốn làm). Phủ định: [V-takunai desu] (Không muốn làm). Vì mệt nên không muốn làm gì cả."
    },
    {
        id: 3,
        question: "日本へ　なんの　べんきょう_______　きましたか。",
        options: ["に", "を", "へ", "で"],
        answer: "に",
        explain: "[N (hành động) + に + きます] (Đến để làm N). Đến để học cái gì?"
    },
    {
        id: 4,
        question: "あした　京都へ　_______ 行きます。",
        options: ["あそびに", "あそんで", "あそぶに", "あそび"],
        answer: "あそびに",
        explain: "[V-masu (bỏ masu) + に + 行きます] (Đi để làm V). Asobimasu -> Asobi ni."
    },
    {
        id: 5,
        question: "おなかが　すきましたね。　なにか　_______。",
        options: ["たべましょう", "たべたいです", "たべません", "たべましょうか"],
        answer: "たべましょう",
        explain: "[V-mashou] (Chúng ta cùng làm V đi). Đói nhỉ. Cùng ăn gì đó đi."
    }
];

// TEST 2: Focus Lesson 14 (Te-form)
const GRAMMAR_TEST_2: Question[] = [
    {
        id: 1,
        question: "Chia động từ: かきます (Viết) -> _______",
        options: ["かいて", "かんで", "かきって", "かき"],
        answer: "かいて",
        explain: "Nhóm I: ki -> ite. Kakimasu -> Kaite."
    },
    {
        id: 2,
        question: "Chia động từ: よみます (Đọc) -> _______",
        options: ["よんで", "よみて", "よいで", "よん"],
        answer: "よんで",
        explain: "Nhóm I: mi -> nde. Yomimasu -> Yonde."
    },
    {
        id: 3,
        question: "Chia động từ: いきます (Đi) -> _______",
        options: ["いって", "いいて", "いんで", "いきます"],
        answer: "いって",
        explain: "Ngoại lệ Nhóm I: Ikimasu -> Itte."
    },
    {
        id: 4,
        question: "すみませんが、この　漢字を　_______ ください。",
        options: ["よんで", "よみて", "よいで", "よむ"],
        answer: "よんで",
        explain: "[V-te kudasai] (Hãy làm V). Hãy đọc giúp tôi."
    },
    {
        id: 5,
        question: "今　雨が　_______ います。",
        options: ["ふって", "ふり", "ふってて", "ふる"],
        answer: "ふって",
        explain: "[V-te imasu] (Đang V). Trời đang mưa (furimasu -> futte)."
    }
];

// TEST 3: Mixed Grammar
const GRAMMAR_TEST_3: Question[] = [
    {
        id: 1,
        question: "暑いですから、エアコンを　_______。",
        options: ["つけて　ください", "つけて　います", "つけたいです", "つけに　いきます"],
        answer: "つけて　ください",
        explain: "Nóng quá nên [Hãy bật điều hòa]. Yêu cầu/Nhờ vả."
    },
    {
        id: 2,
        question: "ロビーで　新聞を　_______ います。",
        options: ["よんで", "よみて", "ようで", "よみます"],
        answer: "よんで",
        explain: "[V-te imasu] (Đang làm V). Đang đọc báo. Yomimasu -> Yonde."
    },
    {
        id: 3,
        question: "タクシーを　_______ か。",
        options: ["よびましょう", "よんでいます", "よんで", "よみます"],
        answer: "よびましょう",
        explain: "[V-mashou ka] (Tôi V giúp bạn nhé?). Tôi gọi taxi cho bạn nhé?"
    },
    {
        id: 4,
        question: "どこか [_______] 行きましたか。 ...いいえ、どこも 行きませんでした。",
        options: ["へ", "に", "を", "が"],
        answer: "へ",
        explain: "Dokoka [e] ikimashitaka. (Trợ từ e chỉ hướng di chuyển). Có thể lược bỏ nhưng trong đáp án thì 'e' đúng nhất."
    },
    {
        id: 5,
        question: "友達に　会いに　_______。",
        options: ["行きます", "行っています", "行って　ください", "行きたい"],
        answer: "行きます",
        explain: "[V-ni ikimasu] (Đi để làm gì). Đi gặp bạn."
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
