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
    // Mondai 1: Vocabulary & Kanji Reading (35 questions)
    {
        id: 1,
        section: "Mondai 1",
        question: "道を　[渡る]　とき、　車に　気をつけて　ください。",
        options: ["わたる", "のぼる", "とまる", "あるく"],
        answer: "わたる",
        explain: "✅ [渡る|わたる|Băng qua]. Michi wo watarimasu.\n❌ [のぼる|Leo lên], [とまる|Dừng lại], [あるく|Đi bộ]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "みちが　わかりませんから、　ちずを　[書いて]　ください。",
        options: ["かいて", "きいて", "みて", "やって"],
        answer: "かいて",
        explain: "✅ [書いて|かいて|Vẽ]. Chizu wo kakimasu.\n❌ [きいて|Nghe], [みて|Xem], [やって|Làm]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "としょかんへ　いく　と、　[角]　を　まがって　ください。",
        options: ["かど", "きっぷ", "へや", "いす"],
        answer: "かど",
        explain: "✅ [角|かど|Góc đường]. Kado wo magarimasu.\n❌ [きっぷ|Vé], [へや|Phòng], [いす|Ghế]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "山田さんは　[修理]が　上手です。",
        options: ["しゅうり", "りょうり", "じゅぎょう", "じゅうしょ"],
        answer: "しゅうり",
        explain: "✅ [修理|しゅうり|Sửa chữa].\n❌ [料理|りょうり|Nấu ăn], [授業|じゅぎょう|Lớp học], [住所|じゅうしょ|Địa chỉ]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "[説明]します。",
        options: ["せつめい", "せいめい", "せつめ", "せつみ"],
        answer: "せつめい",
        explain: "✅ [説明|せつめい|Giải thích].\n❌ [生命|せいめい|Mạng sống], thiếu âm."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "[翻訳]します。",
        options: ["ほんやく", "ほやく", "ほんよく", "はんやく"],
        answer: "ほんやく",
        explain: "✅ [翻訳|ほんやく|Dịch thuật].\n❌ Sai âm hoặc thiếu n."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "[予約]します。",
        options: ["よやく", "よよく", "ようやく", "よあく"],
        answer: "よやく",
        explain: "✅ [予約|よやく|Đặt trước].\n❌ [漸く|ようやく|Cuối cùng thì]."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "[案内]します。",
        options: ["あんない", "あない", "あんあい", "あんだい"],
        answer: "あんない",
        explain: "✅ [案内|あんない|Dẫn đường/Hướng dẫn].\n❌ Thiếu n hoặc sai âm."
    },
    {
        id: 9,
        section: "Mondai 1",
        question: "[紹介]します。",
        options: ["しょうかい", "しょかい", "しょうがい", "しょうけい"],
        answer: "しょうかい",
        explain: "✅ [紹介|しょうかい|Giới thiệu].\n❌ [障害|しょうがい|Chướng ngại]."
    },
    {
        id: 10,
        section: "Mondai 1",
        question: "車を　[運転]します。",
        options: ["うんてん", "うんでん", "うてん", "うんれん"],
        answer: "うんてん",
        explain: "✅ [運転|うんてん|Lái xe].\n❌ [運動|うんどう|Vận động], thiếu âm."
    },
    {
        id: 11,
        section: "Mondai 1",
        question: "[連絡]します。",
        options: ["れんらく", "れらく", "れんろく", "れんがく"],
        answer: "れんらく",
        explain: "✅ [連絡|れんらく|Liên lạc].\n❌ Thiếu n hoặc sai âm."
    },
    {
        id: 12,
        section: "Mondai 1",
        question: "[都合]が　いいです。",
        options: ["つごう", "とごう", "つこう", "づごう"],
        answer: "つごう",
        explain: "✅ [都合|つごう|Tiện lợi/Thuận tiện].\n❌ [都|と|Đô], thiếu âm."
    },
    {
        id: 13,
        section: "Mondai 1",
        question: "[引っ越し]ます。",
        options: ["ひっこし", "ひこし", "ひっこうし", "ひこうし"],
        answer: "ひっこし",
        explain: "✅ [引っ越す|ひっこす|Chuyển nhà].\n❌ Thiếu âm ngắt hoặc thừa âm."
    },
    {
        id: 14,
        section: "Mondai 1",
        question: "[道]を　聞きます。",
        options: ["みち", "どう", "いち", "ち"],
        answer: "みち",
        explain: "✅ [道|みち|Đường - kunyomi].\n❌ [道|どう|Đạo - onyomi], [一|いち|Một]."
    },
    {
        id: 15,
        section: "Mondai 1",
        question: "[信号]を　見ます。",
        options: ["しんごう", "しんこう", "しごう", "しんぞう"],
        answer: "しんごう",
        explain: "✅ [信号|しんごう|Đèn tín hiệu].\n❌ [信仰|しんこう|Tín ngưỡng], [心臓|しんぞう|Tim]."
    },
    {
        id: 16,
        section: "Mondai 1",
        question: "右に　[曲がり]ます。",
        options: ["まがり", "まわり", "おがり", "かがり"],
        answer: "まがり",
        explain: "✅ [曲がる|まがる|Rẽ/Quẹo].\n❌ [回る|まわる|Quay tròn], [上がる|あがる|Lên]."
    },
    {
        id: 17,
        section: "Mondai 1",
        question: "[地図]を　見ます。",
        options: ["ちず", "じず", "ちづ", "ちじ"],
        answer: "ちず",
        explain: "✅ [地図|ちず|Bản đồ].\n❌ Sai biến âm."
    },
    {
        id: 18,
        section: "Mondai 1",
        question: "[交差点]を　渡ります。",
        options: ["こうさてん", "こさてん", "こうさてい", "こうしゃてん"],
        answer: "こうさてん",
        explain: "✅ [交差点|こうさてん|Ngã tư].\n❌ Thiếu âm hoặc sai âm."
    },
    {
        id: 19,
        section: "Mondai 1",
        question: "[橋]を　渡ります。",
        options: ["はし", "ばし", "かし", "かき"],
        answer: "はし",
        explain: "✅ [橋|はし|Cầu].\n❌ [箸|はし|Đũa], [菓子|かし|Bánh kẹo]."
    },
    {
        id: 20,
        section: "Mondai 1",
        question: "[泳ぎ]ます。",
        options: ["およぎ", "あよぎ", "およき", "うよぎ"],
        answer: "およぎ",
        explain: "✅ [泳ぐ|およぐ|Bơi].\n❌ Sai âm o/a hoặc biến âm."
    },
    {
        id: 21,
        section: "Mondai 1",
        question: "[飛び]ます。",
        options: ["とび", "どび", "ひび", "そび"],
        answer: "とび",
        explain: "✅ [飛ぶ|とぶ|Bay].\n❌ Sai âm hoặc biến âm."
    },
    {
        id: 22,
        section: "Mondai 1",
        question: "[登り]ます。",
        options: ["のぼり", "とうり", "とぼり", "どぼり"],
        answer: "のぼり",
        explain: "✅ [登る|のぼる|Leo lên].\n❌ [通る|とおる|Đi qua], biến âm sai."
    },
    {
        id: 23,
        section: "Mondai 1",
        question: "[降り]ます。",
        options: ["おり", "ふり", "こり", "のり"],
        answer: "おり",
        explain: "✅ [降りる|おりる|Xuống].\n❌ [降る|ふる|Rơi (mưa)], [乗る|のる|Lên (xe)]."
    },
    {
        id: 24,
        section: "Mondai 1",
        question: "[喧嘩]します。",
        options: ["けんか", "けか", "げんか", "げか"],
        answer: "けんか",
        explain: "✅ [喧嘩|けんか|Cãi nhau/Tranh cãi].\n❌ Thiếu n hoặc sai âm."
    },
    {
        id: 25,
        section: "Mondai 1",
        question: "[世話]をします。",
        options: ["せわ", "じわ", "せば", "ぜわ"],
        answer: "せわ",
        explain: "✅ [世話|せわ|Chăm sóc].\n❌ [事|じ|Việc], biến âm sai."
    },
    {
        id: 26,
        section: "Mondai 1",
        question: "[留守]です。",
        options: ["るす", "りゅす", "るしゅ", "るず"],
        answer: "るす",
        explain: "✅ [留守|るす|Vắng nhà].\n❌ Sai âm dài hoặc biến âm."
    },
    {
        id: 27,
        section: "Mondai 1",
        question: "[伝言]を　頼みます。",
        options: ["でんごん", "てんごん", "でごん", "でんこん"],
        answer: "でんごん",
        explain: "✅ [伝言|でんごん|Lời nhắn].\n❌ Thiếu n hoặc sai âm."
    },
    {
        id: 28,
        section: "Mondai 1",
        question: "[気をつけ]ます。",
        options: ["きをつけ", "きおつけ", "けをつけ", "きつけ"],
        answer: "きをつけ",
        explain: "✅ [気をつける|きをつける|Cẩn thận].\n❌ Thiếu を hoặc sai âm."
    },
    {
        id: 29,
        section: "Mondai 1",
        question: "[遅れ]ます。",
        options: ["おくれ", "おこれ", "おぐれ", "くれ"],
        answer: "おくれ",
        explain: "✅ [遅れる|おくれる|Trễ/Chậm].\n❌ Sai âm hoặc biến âm."
    },
    {
        id: 30,
        section: "Mondai 1",
        question: "[間に合い]ます。",
        options: ["まにあい", "あいだにあい", "まあい", "かんにあい"],
        answer: "まにあい",
        explain: "✅ [間に合う|まにあう|Kịp giờ].\n❌ [間|あいだ|Khoảng|Giữa], [間|かん|Gian]."
    },
    {
        id: 31,
        section: "Mondai 1",
        question: "[出かけ]ます。",
        options: ["でかけ", "しゅっかけ", "でがけ", "いでかけ"],
        answer: "でかけ",
        explain: "✅ [出かける|でかける|Ra ngoài].\n❌ Thừa âm hoặc biến âm sai."
    },
    {
        id: 32,
        section: "Mondai 1",
        question: "[片付け]ます。",
        options: ["かたづけ", "かたつけ", "へんづけ", "かたずけ"],
        answer: "かたづけ",
        explain: "✅ [片付ける|かたづける|Dọn dẹp].\n❌ [片方|かたほう|Một phía], biến âm sai."
    },
    {
        id: 33,
        section: "Mondai 1",
        question: "[手伝い]ます。",
        options: ["てつだい", "しゅつだい", "てづたい", "てつたい"],
        answer: "てつだい",
        explain: "✅ [手伝う|てつだう|Giúp đỡ].\n❌ Sai âm hoặc biến âm."
    },
    {
        id: 34,
        section: "Mondai 1",
        question: "[頼み]ます。",
        options: ["たのみ", "よろみ", "らいみ", "たよみ"],
        answer: "たのみ",
        explain: "✅ [頼む|たのむ|Nhờ vả].\n❌ Sai âm."
    },
    {
        id: 35,
        section: "Mondai 1",
        question: "[持って来]ます。",
        options: ["もってき", "もってこ", "もちき", "もちこ"],
        answer: "もってき",
        explain: "✅ [持って来る|もってくる|Mang đến].\n❌ [持つ|もつ|Cầm], sai âm."
    },

    // Mondai 2: Writing (35 questions)
    {
        id: 36,
        section: "Mondai 2",
        question: "[わたる]。",
        options: ["渡る", "度る", "済る", "済む"],
        answer: "渡る",
        explain: "✅ [わたる] → [渡る|Băng qua].\n❌ [度|たび|Lần], [済む|すむ|Xong]."
    },
    {
        id: 37,
        section: "Mondai 2",
        question: "[まがる]。",
        options: ["曲がる", "回る", "回がる", "間がる"],
        answer: "曲がる",
        explain: "✅ [まがる] → [曲がる|Rẽ].\n❌ [回る|まわる|Quay], [間|ま|Khoảng]."
    },
    {
        id: 38,
        section: "Mondai 2",
        question: "[まっすぐ]。",
        options: ["真っ直ぐ", "真直ぐ", "正直ぐ", "正っ直ぐ"],
        answer: "真っ直ぐ",
        explain: "✅ [まっすぐ] → [真っ直ぐ|Thẳng].\n❌ [正直|しょうじき|Trung thực]."
    },
    {
        id: 39,
        section: "Mondai 2",
        question: "[かど]。",
        options: ["角", "各", "覚", "閣"],
        answer: "角",
        explain: "✅ [かど] → [角|Góc].\n❌ [各|かく|Mỗi], [覚|かく|Nhớ], [閣|かく|Các]."
    },
    {
        id: 40,
        section: "Mondai 2",
        question: "[しんごう]。",
        options: ["信号", "進号", "新号", "真号"],
        answer: "信号",
        explain: "✅ [しんごう] → [信号|Đèn tín hiệu].\n❌ [進|しん|Tiến], [新|しん|Mới], [真|しん|Chân]."
    },
    {
        id: 41,
        section: "Mondai 2",
        question: "[はし]を　わたります。",
        options: ["橋", "箸", "端", "梯"],
        answer: "橋",
        explain: "✅ [はし] → [橋|Cây cầu].\n❌ [箸|はし|Đũa], [端|はし|Đầu/Rìa], [梯|はしご|Thang]."
    },
    {
        id: 42,
        section: "Mondai 2",
        question: "[こうさてん]。",
        options: ["交差点", "高差点", "校差点", "効差点"],
        answer: "交差点",
        explain: "✅ [こうさてん] → [交差点|Ngã tư].\n❌ [高|こう|Cao], [校|こう|Trường], [効|こう|Hiệu quả]."
    },
    {
        id: 43,
        section: "Mondai 2",
        question: "[ちず]。",
        options: ["地図", "知図", "地頭", "池図"],
        answer: "地図",
        explain: "✅ [ちず] → [地図|Bản đồ].\n❌ [知|ち|Biết], [池|いけ|Ao]."
    },
    {
        id: 44,
        section: "Mondai 2",
        question: "[あげます]。",
        options: ["上げます/挙げます", "揚げます", "開げます", "明げます"],
        answer: "上げます/挙げます",
        explain: "✅ [あげます] → [上げる/挙げる|Cho/Tặng].\n❌ [揚げる|あげる|Rán], [開く|あく|Mở]."
    },
    {
        id: 45,
        section: "Mondai 2",
        question: "[くれます]。",
        options: ["呉れます", "暮れます", "来れます", "食れます"],
        answer: "呉れます",
        explain: "✅ [くれます] → [呉れる|Cho (tôi)].\n❌ [暮れる|くれる|Tối], [来る|くる|Đến]."
    },
    {
        id: 46,
        section: "Mondai 2",
        question: "[もらいます]。",
        options: ["貰います", "買います", "借います", "習います"],
        answer: "貰います",
        explain: "✅ [もらいます] → [貰う|Nhận].\n❌ [買う|かう|Mua], [借りる|かりる|Mượn], [習う|ならう|Học]."
    },
    {
        id: 47,
        section: "Mondai 2",
        question: "[しゅうり]します。",
        options: ["修理", "料理", "修利", "周理"],
        answer: "修理",
        explain: "✅ [しゅうり] → [修理|Sửa chữa].\n❌ [料理|りょうり|Nấu ăn], [修|しゅう|Tu]."
    },
    {
        id: 48,
        section: "Mondai 2",
        question: "[せつめい]します。",
        options: ["説明", "設明", " 節明", "説名"],
        answer: "説明",
        explain: "✅ [せつめい] → [説明|Giải thích].\n❌ [設|せつ|Thiết], [節|せつ|Tiết]."
    },
    {
        id: 49,
        section: "Mondai 2",
        question: "[ほんやく]します。",
        options: ["翻訳", "反訳", "飜訳", "番訳"],
        answer: "翻訳",
        explain: "✅ [ほんやく] → [翻訳|Dịch thuật].\n❌ [反|はん|Phản], [番|ばん|Số]."
    },
    {
        id: 50,
        section: "Mondai 2",
        question: "[よやく]します。",
        options: ["予約", "余約", "与約", "預約"],
        answer: "予約",
        explain: "✅ [よやく] → [予約|Đặt trước].\n❌ [余|よ|Dư], [与|よ|Cho]."
    },
    {
        id: 51,
        section: "Mondai 2",
        question: "[あんない]します。",
        options: ["案内", "安内", "按内", "暗内"],
        answer: "案内",
        explain: "✅ [あんない] → [案内|Hướng dẫn].\n❌ [安|あん|An], [暗|あん|Tối]."
    },
    {
        id: 52,
        section: "Mondai 2",
        question: "[しょうかい]します。",
        options: ["紹介", "照会", "消会", "小会"],
        answer: "紹介",
        explain: "✅ [しょうかい] → [紹介|Giới thiệu].\n❌ [照会|しょうかい|Chiếu hội], [消|しょう|Tiêu]."
    },
    {
        id: 53,
        section: "Mondai 2",
        question: "[うんてん]します。",
        options: ["運転", "運天", "運伝", "運点"],
        answer: "運転",
        explain: "✅ [うんてん] → [運転|Lái xe].\n❌ [転|てん|Chuyển], [天|てん|Trời]."
    },
    {
        id: 54,
        section: "Mondai 2",
        question: "[れんらく]します。",
        options: ["連絡", "廉落", "連落", "連格"],
        answer: "連絡",
        explain: "✅ [れんらく] → [連絡|Liên lạc].\n❌ [落|らく|Rơi], [格|かく|Cách]."
    },
    {
        id: 55,
        section: "Mondai 2",
        question: "[つごう]が　いいです。",
        options: ["都合", "都号", "津合", "図合"],
        answer: "都合",
        explain: "✅ [つごう] → [都合|Thuận tiện].\n❌ [都|と|Đô], [図|ず|Đồ]."
    },
    {
        id: 56,
        section: "Mondai 2",
        question: "[ひっこし]ます。",
        options: ["引っ越す", "引越す", "引っ起す", "引起す"],
        answer: "引っ越す",
        explain: "✅ [ひっこす] → [引っ越す|Chuyển nhà].\n❌ [起こす|おこす|Đánh thức]."
    },
    {
        id: 57,
        section: "Mondai 2",
        question: "[るす]です。",
        options: ["留守", "流守", "留主", "流主"],
        answer: "留守",
        explain: "✅ [るす] → [留守|Vắng nhà].\n❌ [流|りゅう|Lưu], [主|しゅ|Chủ]."
    },
    {
        id: 58,
        section: "Mondai 2",
        question: "[でんごん]。",
        options: ["伝言", "電言", "伝原", "電原"],
        answer: "伝言",
        explain: "✅ [でんごん] → [伝言|Lời nhắn].\n❌ [電|でん|Điện], [言|げん|Ngôn]."
    },
    {
        id: 59,
        section: "Mondai 2",
        question: "[およぎ]ます。",
        options: ["泳ぎます", "永ぎます", "栄ぎます", "詠ぎます"],
        answer: "泳ぎます",
        explain: "✅ [およぐ] → [泳ぐ|Bơi].\n❌ [永|えい|Vĩnh], [栄|えい|Vinh], [詠|えい|Vịnh]."
    },
    {
        id: 60,
        section: "Mondai 2",
        question: "[とび]ます。",
        options: ["飛びます", "跳びます", "翔びます", "飛ひます"],
        answer: "飛びます",
        explain: "✅ [とぶ] → [飛ぶ|Bay]. Also [跳ぶ|とぶ|Nhảy].\n❌ [翔|しょう|Bay cao]."
    },
    {
        id: 61,
        section: "Mondai 2",
        question: "[のぼり]ます。",
        options: ["登ります", "昇ります", "上ります", "乗ります"],
        answer: "登ります",
        explain: "✅ [のぼる] → [登る|Leo núi]. Also [昇る|のぼる|Mặt trời mọc].\n❌ [上る|あがる|Lên], [乗る|のる|Lên xe]."
    },
    {
        id: 62,
        section: "Mondai 2",
        question: "[おり]ます。",
        options: ["降ります", "折ります", "織ります", "下ります"],
        answer: "降ります",
        explain: "✅ [おりる] → [降りる|Xuống].\n❌ [折る|おる|Gấp], [織る|おる|Dệt], [下|した|Dưới]."
    },
    {
        id: 63,
        section: "Mondai 2",
        question: "[けんか]します。",
        options: ["喧嘩", "研化", "険化", "権化"],
        answer: "喧嘩",
        explain: "✅ [けんか] → [喧嘩|Cãi nhau].\n❌ [研|けん|Nghiên], [険|けん|Hiểm], [権|けん|Quyền]."
    },
    {
        id: 64,
        section: "Mondai 2",
        question: "[せわ]をします。",
        options: ["世話", "勢話", "施話", "背話"],
        answer: "世話",
        explain: "✅ [せわ] → [世話|Chăm sóc].\n❌ [勢|せい|Thế], [施|せ|Thí]."
    },
    {
        id: 65,
        section: "Mondai 2",
        question: "[おくれ]ます。",
        options: ["遅れます", "送れます", "贈れます", "後れます"],
        answer: "遅れます",
        explain: "✅ [おくれる] → [遅れる|Trễ].\n❌ [送る|おくる|Gửi], [贈る|おくる|Tặng]."
    },
    {
        id: 66,
        section: "Mondai 2",
        question: "[まにあい]ます。",
        options: ["間に合います", "間合います", "真に合います", "間似合います"],
        answer: "間に合います",
        explain: "✅ [まにあう] → [間に合う|Kịp giờ].\n❌ [真|しん|Chân], thiếu に."
    },
    {
        id: 67,
        section: "Mondai 2",
        question: "[でかけ]ます。",
        options: ["出かけます", "出掛けます", "出懸けます", "出駆けます"],
        answer: "出かけます",
        explain: "✅ [でかける] → [出かける/出掛ける|Ra ngoài].\n❌ [懸|か|Treo], [駆|か|Chạy]."
    },
    {
        id: 68,
        section: "Mondai 2",
        question: "[かたづけ]ます。",
        options: ["片付けます", "片づけます", "方付けます", "形付けます"],
        answer: "片付けます",
        explain: "✅ [かたづける] → [片付ける/片づける|Dọn dẹp].\n❌ [方|ほう|Phương], [形|かた|Hình]."
    },
    {
        id: 69,
        section: "Mondai 2",
        question: "[てつだい]ます。",
        options: ["手伝います", "手助けます", "手手伝います", "手伝えます"],
        answer: "手伝います",
        explain: "✅ [てつだう] → [手伝う|Giúp đỡ].\n❌ [助ける|たすける|Cứu giúp]."
    },
    {
        id: 70,
        section: "Mondai 2",
        question: "[たのみ]ます。",
        options: ["頼みます", "賴みます", "煩みます", "憑みます"],
        answer: "頼みます",
        explain: "✅ [たのむ] → [頼む|Nhờ vả].\n❌ [煩|はん|Phiền], [憑|ひょう|Ỷ]."
    },

    // Mondai 3: Grammar & Context (30 questions)
    {
        id: 71,
        section: "Mondai 3",
        question: "この　ボタンを　_____、　おつりが　出ます。",
        options: ["おすと", "おしたら", "おしても", "おして"],
        answer: "おすと",
        explain: "✅ Mẫu [V-ru + と]: Hễ làm A thì B xảy ra (kết quả tất yếu/máy móc).\n❌ [～たら|Giả định], [～ても|Dù có], [V-te]."
    },
    {
        id: 72,
        section: "Mondai 3",
        question: "あめが　_____、　出かけません。",
        options: ["ふったら", "ふっても", "ふると", "ふって"],
        answer: "ふったら",
        explain: "✅ Mẫu [～たら]: Nếu ~ thì (điều kiện giả định).\n❌ [～ても|Dù có], [～と|Kết quả tất yếu], [V-te]."
    },
    {
        id: 73,
        section: "Mondai 3",
        question: "いくら　_____、　わかりません。",
        options: ["かんがえても", "かんがえたら", "かんがえると", "かんがえて"],
        answer: "かんがえても",
        explain: "✅ Mẫu [いくら～ても]: Dù ~ thế nào đi nữa.\n❌ [～たら|Nếu], [～と|Kết quả], [V-te]."
    },
    {
        id: 74,
        section: "Mondai 3",
        question: "わたしは　佐藤さんに　傘を　かして　_____。",
        options: ["もらいました", "あげました", "くれました", "やりました"],
        answer: "もらいました",
        explain: "✅ [V-te もらいます]: Được ai đó làm cho. Tôi được Sato cho mượn ô.\n❌ [あげます|Tôi cho], [くれます|Người khác cho tôi], [やります|Cho hạ bối]."
    },
    {
        id: 75,
        section: "Mondai 3",
        question: "部長は　わたしに　お土産を　_____。",
        options: ["くださいました", "いただきました", "あげました", "さしあげました"],
        answer: "くださいました",
        explain: "✅ [くださいます]: Bề trên cho mình (kính ngữ).\n❌ [いただきます|Mình nhận từ bề trên], [あげます|Cho ngang hàng], [さしあげます|Mình cho bề trên]."
    },
    {
        id: 76,
        section: "Mondai 3",
        question: "わたしは　きょう　母に　花を　_____。",
        options: ["あげました", "くれました", "もらいました", "さしあげました"],
        answer: "あげました",
        explain: "✅ [あげます]: Tặng cho người khác (ngang hàng/thấp hơn).\n❌ [くれます|Người khác cho mình], [もらいます|Nhận], [さしあげます|Cho bề trên]."
    },
    {
        id: 77,
        section: "Mondai 3",
        question: "友達は　わたしに　CD を　_____。",
        options: ["くれました", "あげました", "もらいました", "やりました"],
        answer: "くれました",
        explain: "✅ [くれます]: Người khác cho mình.\n❌ [あげます|Mình cho người khác], [もらいます|Nhận - chủ ngữ là người nhận], [やります|Cho hạ bối]."
    },
    {
        id: 78,
        section: "Mondai 3",
        question: "わたしは　友達に　CD を　_____。",
        options: ["もらいました", "あげました", "くれました", "いただきました"],
        answer: "もらいました",
        explain: "✅ [もらいます]: Nhận từ ai đó.\n❌ [あげます|Cho], [くれます|Người khác cho mình - chủ ngữ là người cho], [いただきます|Nhận từ bề trên]."
    },
    {
        id: 79,
        section: "Mondai 3",
        question: "新聞を　_____　とき、　眼鏡を　かけます。",
        options: ["よむ", "よんだ", "よんで", "よめば"],
        answer: "よむ",
        explain: "✅ Mẫu [V-ru + とき]: Khi làm gì (hành động chưa hoàn thành). Khi đọc báo.\n❌ [V-ta|Đã hoàn thành], [V-te], [V-ba]."
    },
    {
        id: 80,
        section: "Mondai 3",
        question: "うちへ　_____　とき、　「ただいま」と　いいます。",
        options: ["かえった", "かえる", "かえって", "かえれば"],
        answer: "かえった",
        explain: "✅ Mẫu [V-ta + とき]: Khi đã làm gì (hành động đã hoàn thành). Khi về đến nhà.\n❌ [V-ru|Chưa hoàn thành], [V-te], [V-ba]."
    },
    {
        id: 81,
        section: "Mondai 3",
        question: "もし　１おく円　_____、　旅行したいです。",
        options: ["あったら", "あっても", "あると", "あれば"],
        answer: "あったら",
        explain: "✅ [もし～たら]: Nếu ~ (giả định).\n❌ [～ても|Dù có], [～と|Kết quả tất yếu], [～ば|Điều kiện]."
    },
    {
        id: 82,
        section: "Mondai 3",
        question: "駅まで　_____、　電車が　ありませんでした。",
        options: ["いったら", "いっても", "いくと", "いけば"],
        answer: "いったら",
        explain: "✅ [～たら]: Sau khi đến ga thì phát hiện không có tàu.\n❌ [～ても|Dù có], [～と|Kết quả tất yếu], [～ば|Điều kiện]."
    },
    {
        id: 83,
        section: "Mondai 3",
        question: "日曜日でも、　_____　なければなりません。",
        options: ["はたらかな", "はたらく", "はたらいた", "はたらいて"],
        answer: "はたらかな",
        explain: "✅ [V-nai + ければなりません]: Phải làm.\n❌ [V-ru], [V-ta], [V-te]."
    },
    {
        id: 84,
        section: "Mondai 3",
        question: "一人で　_____　できますか。",
        options: ["して", "する", "した", "すれば"],
        answer: "して",
        explain: "✅ [V-te できます]: Có thể làm được (ngữ cảnh đã hiểu động từ).\n❌ Nhưng nếu là 'dekimasu' đơn thuần thì 'suru' + 'koto ga dekimasu'."
    },
    {
        id: 85,
        section: "Mondai 3",
        question: "すみませんが、　この　漢字の　読み方を　_____　くださいませんか。",
        options: ["おしえて", "おしえ", "おしえた", "おしえる"],
        answer: "おしえて",
        explain: "✅ [V-て ください(ませんか)]: Xin hãy ~.\n❌ [V-masu stem], [V-ta], [V-ru]."
    },
    {
        id: 86,
        section: "Mondai 3",
        question: "赤ちゃんが　_____　とき、　静かに　して　ください。",
        options: ["ねて　いる", "ねた", "ねる", "ねている"],
        answer: "ねている",
        explain: "✅ [V-て いる + とき]: Khi đang ngủ.\n❌ [ねた|Đã ngủ], [ねる|Ngủ (chưa xác định)]."
    },
    {
        id: 87,
        section: "Mondai 3",
        question: "疲れたから、　少し　_____　もいいですか。",
        options: ["やすんで", "やすむ", "やすんだ", "やすめ"],
        answer: "やすんで",
        explain: "✅ [V-て もいいです]: Có thể ~ được không?\n❌ [V-ru], [V-ta], [V-masu stem]."
    },
    {
        id: 88,
        section: "Mondai 3",
        question: "ここで　タバコを　_____　ください。",
        options: ["すわないで", "すわなくて", "すわずに", "すわない"],
        answer: "すわないで",
        explain: "✅ [V-ないで ください]: Xin đừng ~.\n❌ [～なくて|Và không], [～ずに|Không làm gì mà], [V-nai]."
    },
    {
        id: 89,
        section: "Mondai 3",
        question: "先生に　日本語を　_____　もらいました。",
        options: ["おしえて", "おしえ", "おしえた", "おしえる"],
        answer: "おしえて",
        explain: "✅ [V-て もらいます]: Được ai đó làm cho.\n❌ [V-masu stem], [V-ta], [V-ru]."
    },
    {
        id: 90,
        section: "Mondai 3",
        question: "田中さんは　わたしに　辞書を　_____。",
        options: ["かして　くれました", "かして　あげました", "かして　もらいました", "かします"],
        answer: "かして　くれました",
        explain: "✅ [V-て くれます]: Ai đó làm cho mình.\n❌ [あげます|Mình làm cho người khác], [もらいます|Được làm cho - chủ ngữ là người nhận], [V-masu]."
    },
    {
        id: 91,
        section: "Mondai 3",
        question: "わたしは　母に　料理を　_____。",
        options: ["つくって　あげました", "つくって　くれました", "つくって　もらいました", "つくります"],
        answer: "つくって　あげました",
        explain: "✅ [V-て あげます]: Mình làm cho người khác.\n❌ [くれます|Người khác làm cho mình], [もらいました|Được làm cho - chủ ngữ là người nhận], [V-masu]."
    },
    {
        id: 92,
        section: "Mondai 3",
        question: "わたしは　友達に　写真を　_____。",
        options: ["とって　もらいました", "とって　あげました", "とって　くれました", "とります"],
        answer: "とって　もらいました",
        explain: "✅ [V-て もらいます]: Được ai đó làm cho.\n❌ [あげました|Mình làm cho người khác], [くれました|Người khác làm cho mình - chủ ngữ là người làm]."
    },
    {
        id: 93,
        section: "Mondai 3",
        question: "時間が　_____、　家に　帰ります。",
        options: ["あったら", "あれば", "あっても", "あると"],
        answer: "あったら",
        explain: "✅ [～たら]: Nếu ~ thì (điều kiện giả định).\n❌ [～ば|Điều kiện chung], [～ても|Dù có], [～と|Kết quả tất yếu]."
    },
    {
        id: 94,
        section: "Mondai 3",
        question: "コンビニへ　_____、　牛乳を　買って　きて　ください。",
        options: ["いったら", "いくと", "いっても", "いけば"],
        answer: "いったら",
        explain: "✅ [～たら]: Khi đi đến ~ thì (điều kiện giả định với nhờ vả).\n❌ [～と|Kết quả tất yếu], [～ても|Dù có], [～ば]."
    },
    {
        id: 95,
        section: "Mondai 3",
        question: "いくら　_____、　上手に　なりません。",
        options: ["れんしゅうしても", "れんしゅうしたら", "れんしゅうすると", "れんしゅうすれば"],
        answer: "れんしゅうしても",
        explain: "✅ [いくら～ても]: Dù ~ thế nào đi nữa.\n❌ [～たら|Nếu], [～と|Kết quả], [～ば]."
    },
    {
        id: 96,
        section: "Mondai 3",
        question: "春が　_____、　桜が　咲きます。",
        options: ["くると", "きたら", "きても", "くれば"],
        answer: "くると",
        explain: "✅ [～と]: Hễ ~ thì (kết quả tự nhiên/tất yếu). Hễ mùa xuân đến thì hoa anh đào nở.\n❌ [～たら|Giả định], [～ても|Dù có], [～ば]."
    },
    {
        id: 97,
        section: "Mondai 3",
        question: "この　ボタンを　_____、　ドアが　開きます。",
        options: ["おすと", "おしたら", "おしても", "おせば"],
        answer: "おすと",
        explain: "✅ [～と]: Hễ ~ thì (kết quả máy móc/tất yếu).\n❌ [～たら|Giả định], [～ても|Dù có], [～ば]."
    },
    {
        id: 98,
        section: "Mondai 3",
        question: "父は　わたしに　自転車を　_____。",
        options: ["かって　くれました", "かって　あげました", "かって　もらいました", "かいます"],
        answer: "かって　くれました",
        explain: "✅ [V-て くれます]: Bố (người khác) mua cho tôi.\n❌ [あげました|Tôi mua cho người khác], [もらいました|Tôi được mua cho - chủ ngữ là tôi]."
    },
    {
        id: 99,
        section: "Mondai 3",
        question: "わたしは　先生に　レポートを　_____。",
        options: ["みて　もらいました", "みて　あげました", "みて　くれました", "みます"],
        answer: "みて　もらいました",
        explain: "✅ [V-て もらいます]: Được thầy xem (giúp) cho.\n❌ [あげました|Tối xem cho], [くれました|Thầy xem cho - chủ ngữ là thầy]."
    },
    {
        id: 100,
        section: "Mondai 3",
        question: "明日　雨が　_____、　試合は　中止です。",
        options: ["ふったら", "ふっても", "ふると", "ふれば"],
        answer: "ふったら",
        explain: "✅ [～たら]: Nếu ~ thì (điều kiện giả định).\n❌ [～ても|Dù có], [～と|Kết quả tất yếu], [～ば]."
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
