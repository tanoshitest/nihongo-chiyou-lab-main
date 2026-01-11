export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

const TEST_12_DATA: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Chọn từ đúng (Từ vựng & Kanji)",
        question: "道を　_____　とき、　車に　気をつけて　ください。",
        options: ["わたる", "のぼる", "とまる", "あるく"],
        answer: "わたる",
        explain: "[渡る||băng qua] (wataru). Băng qua đường: Michi wo watarimasu."
    },
    {
        id: 2,
        question: "みちが　わかりませんから、　ちずを　_____　ください。",
        options: ["かいて", "きいて", "みて", "やって"],
        answer: "かいて",
        explain: "[書いて||viết/vẽ] (kaite). Vẽ bản đồ: Chizu wo kakimasu."
    },
    {
        id: 3,
        question: "としょかんへ　いく　と、　_____　を　まがって　ください。",
        options: ["きっぷ", "かど", "へや", "いす"],
        answer: "かど",
        explain: "[角||góc] (kado). Rẽ ở góc đường: Kado wo magarimasu."
    },
    {
        id: 4,
        question: "わたしは　きょう　母に　花を　_____。",
        options: ["くれました", "あげました", "もらいました", "借りました"],
        answer: "あげました",
        explain: "[あげます||tặng] (agemasu). Tôi tặng hoa cho mẹ (người nói thực hiện hành động tặng)."
    },
    {
        id: 5,
        question: "山田さんは　[しゅうり]が　上手です。",
        options: ["修理", "料理", "授業", "住所"],
        answer: "修理",
        explain: "[修理||sửa chữa] (shuuri)."
    },
    {
        id: 6,
        section: "Mondai 2: Điền từ thích hợp",
        question: "この　ボタンを　_____、　おつりが　出ます。",
        options: ["おすと", "おしたら", "おしても", "おそう"],
        answer: "おすと",
        explain: "Mẫu câu [V-ru + to]: Hễ làm A thì B xảy ra (kết quả tất yếu/máy móc)."
    },
    {
        id: 7,
        question: "あめが　_____、　出かけません。",
        options: ["ふったら", "ふっても", "ふると", "ふる"],
        answer: "ふったら",
        explain: "Mẫu câu [～tara]: Nếu ~ thì. (Nếu trời mưa thì tôi sẽ không ra ngoài)."
    },
    {
        id: 8,
        question: "いくら　_____、　わかりません。",
        options: ["かんがえても", "かんがえたら", "かんがえると", "かんがえる"],
        answer: "かんがえても",
        explain: "Mẫu câu [Ikura ～ temo]: Dù ~ thế nào đi nữa. (Dù có suy nghĩ thế nào đi nữa cũng không hiểu)."
    },
    {
        id: 9,
        question: "わたしは　佐藤さんに　傘を　かして　_____。",
        options: ["あげました", "くれました", "もらいました", "やりました"],
        answer: "もらいました",
        explain: "Mẫu câu [V-te moraimasu]: Được ai đó làm cho cái gì. (Tôi được chị Sato cho mượn ô)."
    },
    {
        id: 10,
        question: "部長は　わたしに　お土産を　_____。",
        options: ["くださいました", "いただきました", "やりました", "あげました"],
        answer: "くださいました",
        explain: "Mẫu câu [～kudasaimashita]: Ai đó (bề trên) cho mình cái gì. (Trưởng phòng đã cho tôi quà đặc sản)."
    }
];

const TEST_12_GRAMMAR_DATA: Question[] = [
    {
        id: 1,
        section: "Mondai 1: Ngữ pháp L23-L25",
        question: "新聞を　_____　とき、　眼鏡を　かけます。",
        options: ["よむ", "よんだ", "よんで", "よま"],
        answer: "よむ",
        explain: "Mẫu câu [V-ru + toki]: Khi làm gì (hành động chưa xảy ra/đang xảy ra). Khi đọc báo (đeo kính ĐỂ đọc)."
    },
    {
        id: 2,
        question: "うちへ　_____　とき、　「ただいま」と　いいます。",
        options: ["かえった", "かえる", "かえって", "かえれば"],
        answer: "かえった",
        explain: "Mẫu câu [V-ta + toki]: Khi đã làm gì (hành động đã hoàn thành). Khi VỀ ĐẾN nhà (đã vào nhà) thì nói Tadaima."
    },
    {
        id: 3,
        question: "もし　１おく円　_____、　旅行したいです。",
        options: ["あったら", "あっても", "あると", "あれば"],
        answer: "あったら",
        explain: "[Moshi ～ tara]: Nếu ~ (giả định). Nếu có 100 triệu yên."
    },
    {
        id: 4,
        question: "駅まで　_____、　電車が　ありませんでした。",
        options: ["いったら", "いっても", "いくと", "いけば"],
        answer: "いっても",
        explain: "Ngữ cảnh: Đi đến ga (nhưng) không có tàu. -> Dù có đi đến ga (cũng vô ích) / Nhưng ở đây 'tara' hay 'temo' phụ thuộc vào vế sau. 'Đi đến ga, (kết quả là) không có tàu'. -> Iitara (Sau khi đến ga thì phát hiện...)"
    },
    {
        id: 5,
        question: "日曜日でも、　_____　なければなりません。",
        options: ["はたらく", "はたらいた", "はたらかな", "はたらいて"],
        answer: "はたらかな",
        explain: "[N demo]: Dù là Chủ Nhật. Vế sau: V-nai + kerebanarimasen (Phải làm)."
    },
    {
        id: 6,
        section: "Mondai 2: Sắp xếp câu",
        question: "この　つまみを　_____　_____　_____　_____　なります。",
        text_context: "Sắp xếp các từ vào chỗ trống làm sao cho đúng nghĩa.",
        options: ["まわす", "と", "おと", "おおきく"],
        answer: "まわす",
        explain: "Thứ tự: つまみを [まわす] [と] [おと] が [おおきく] なります。\n(Hễ vặn núm này thì âm thanh sẽ to lên.)"
    },
    {
        id: 7,
        question: "父は　_____　_____　_____　_____　くれました。",
        options: ["本", "私", "に", "を買って"],
        answer: "私",
        explain: "Thứ tự: 父は [私] [に] [本] [を買って] くれました。\n(Bố đã mua sách cho tôi.)\nCấu trúc: N (người) ni N (vật) wo V-te kuremasu."
    },
    {
        id: 8,
        section: "Mondai 3: Đọc hiểu",
        text_context: "Đọc đoạn văn và chọn đáp án đúng.\n\n田中さんは　今　駅に　います。\n電車が　来ませんから、　タクシーで　行きます。\n会社まで　タクシーで　行ったら、　２０００円　かかります。",
        question: "どうして　タクシーで　行きますか。",
        options: ["タクシーが　好きだから", "電車が　来ないから", "お金が　あるから", "急いでいるから"],
        answer: "電車が　来ないから",
        explain: "Trong bài: 「電車が 来ませんから」 (Vì tàu không đến)."
    }
];

export const ALL_TESTS = {
    1: TEST_12_DATA,
    2: TEST_12_DATA, // Placeholder
    3: TEST_12_DATA
};

export const ALL_GRAMMAR_TESTS = {
    1: TEST_12_GRAMMAR_DATA,
    2: TEST_12_GRAMMAR_DATA,
    3: TEST_12_GRAMMAR_DATA
};
