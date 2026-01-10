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
    // Mondai 1: Kanji Readings (Lesson 5-6)
    {
        id: 1,
        section: "Mondai 1",
        question: "[学校]へ行きます。",
        options: ["かこう", "がっこう", "がこう", "かっこう"],
        answer: "がっこう",
        explain: "✅ [学校|がっこう|Trường học].\n❌ [かこう], [がこう||Thiếu âm ngắt], [かっこう||Cách điệu/Vẻ bề ngoài]."
    },
    {
        id: 2,
        section: "Mondai 1",
        question: "毎日[牛乳]を飲みます。",
        options: ["ぎゅうにゅう", "ぎょうにゅう", "ぎゅうにゅ", "ぎゅにゅう"],
        answer: "ぎゅうにゅう",
        explain: "✅ [牛乳|ぎゅうにゅう|Sữa bò].\n❌ [ぎょうにゅう||Sai âm đầu], [ぎゅうにゅ||Thiếu trường âm], [ぎゅにゅう||Thiếu trường âm]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "[電車]で帰ります。",
        options: ["でんしゃ", "てんしゃ", "でんさ", "てんさ"],
        answer: "でんしゃ",
        explain: "✅ [電車|でんしゃ|Tàu điện].\n❌ [てんしゃ||Sai tenten], [でんさ||Sai sha->sa]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "[野菜]を食べます。",
        options: ["やさい", "のさい", "あさい", "やざい"],
        answer: "やさい",
        explain: "✅ [野菜|やさい|Rau].\n❌ [のさい||No??], [あさい||Nông/Cạn], [やざい||Sai tenten]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "[飛行機]で行きました。",
        options: ["ひこうき", "ひこき", "びこうき", "ひごうき"],
        answer: "ひこうき",
        explain: "✅ [飛行機|ひこうき|Máy bay].\n❌ [ひこき||Thiếu trường âm], [びこうき||Sai tenten], [ひごうき||Sai tenten]."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "[来週]、京都へ行きます。",
        options: ["らいしゅう", "らいしゅ", "こんしゅう", "せんしゅう"],
        answer: "らいしゅう",
        explain: "✅ [来週|らいしゅう|Tuần sau].\n❌ [らいしゅ||Thiếu trường âm], [こんしゅう||Tuần này], [せんしゅう||Tuần trước]."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "[友達]に会いました。",
        options: ["ともだち", "どもだち", "ともたち", "とまだち"],
        answer: "ともだち",
        explain: "✅ [友達|ともだち|Bạn bè].\n❌ [どもだち||Sai tenten], [ともたち||Sai tenten], [とまだち||Sai âm ma]."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "[手紙]を書きます。",
        options: ["てがみ", "てかみ", "でがみ", "しゅがみ"],
        answer: "てがみ",
        explain: "✅ [手紙|てがみ|Thư tay].\n❌ [てかみ||Thiếu tenten], [でがみ||Thừa tenten], [しゅがみ||Sai âm]."
    },
    {
        id: 9,
        section: "Mondai 1",
        question: "[写真]を撮りました。",
        options: ["しゃしん", "さしん", "しょうしん", "しゃじん"],
        answer: "しゃしん",
        explain: "✅ [写真|しゃしん|Bức ảnh].\n❌ [さしん||Sai âm Sha], [しょうしん||Thăng tiến/Đau lòng], [しゃじん||Xạ nhân?]."
    },
    {
        id: 10,
        section: "Mondai 1",
        question: "[自転車]。",
        options: ["じてんしゃ", "ちてんしゃ", "じでんしゃ", "じてんさ"],
        answer: "じてんしゃ",
        explain: "✅ [自転車|じてんしゃ|Xe đạp].\n❌ [ちてんしゃ||Sai tenten], [じでんしゃ||Thừa tenten], [じてんさ||Sai âm Sha]."
    },

    // Mondai 2: Kanji Writing / Katakana
    {
        id: 11,
        section: "Mondai 2",
        question: "[さかな]はおいしいです。",
        options: ["魚", "肉", "卵", "傘"],
        answer: "魚",
        explain: "✅ [魚|さかな|Cá].\n❌ [肉|にく|Thịt], [卵|たまご|Trứng], [傘|かさ|Cái ô]."
    },
    {
        id: 12,
        section: "Mondai 2",
        question: "[みず]を飲みます。",
        options: ["水", "木", "氷", "本"],
        answer: "水",
        explain: "✅ [水|みず|Nước].\n❌ [木|き|Cây], [氷|こおり|Đá], [本|ほん|Sách]."
    },
    {
        id: 13,
        section: "Mondai 2",
        question: "[えき]で会います。",
        options: ["駅", "家", "店", "庭"],
        answer: "駅",
        explain: "✅ [駅|えき|Nhà ga].\n❌ [家|うち|Nhà], [店|みせ|Cửa hàng], [庭|にわ|Vườn]."
    },
    {
        id: 14,
        section: "Mondai 2",
        question: "[あるいて]行きます。",
        options: ["歩いて", "走いて", "立いて", "乗いて"],
        answer: "歩いて",
        explain: "✅ [歩く|あるく|Đi bộ] -> Aruite.\n❌ [走る|はしる|Chạy], [立つ|たつ|Đứng], [乗る|のる|Lên xe]."
    },
    {
        id: 15,
        section: "Mondai 2",
        question: "[ひとり]で。",
        options: ["一人", "一入", "日登", "一リ"],
        answer: "一人",
        explain: "✅ [一人|ひとり|Một người/Một mình]."
    },
    {
        id: 16,
        section: "Mondai 2",
        question: "[じゅーす]。",
        options: ["ジュース", "ジョース", "ジュス", "シュース"],
        answer: "ジュース",
        explain: "✅ [ジュース|Juice|Nước ép].\n❌ Chú ý trường âm và âm ghép."
    },
    {
        id: 17,
        section: "Mondai 2",
        question: "[たくしー]。",
        options: ["タクシー", "タケシー", "ダクシー", "タクシ"],
        answer: "タクシー",
        explain: "✅ [タクシー|Taxi].\n❌ [タケシー||Takeshi?], [ダクシー||Sai tenten], [タクシ||Thiếu trường âm]."
    },

    // Mondai 3: Context & Particles
    {
        id: 18,
        section: "Mondai 3",
        question: "スーパー（　　）行きます。",
        options: ["へ", "を", "で", "が"],
        answer: "へ",
        explain: "✅ [へ] chỉ hướng di chuyển (đọc là 'e').\n❌ [を] chỉ đối tượng, [で] chỉ phương tiện, [が] chỉ chủ ngữ."
    },
    {
        id: 19,
        section: "Mondai 3",
        question: "バス（　　）来ました。",
        options: ["で", "に", "へ", "を"],
        answer: "で",
        explain: "✅ [で] chỉ phương tiện di chuyển.\n❌ [に] chỉ đích đến, [へ] chỉ hướng, [を] chỉ đối tượng."
    },
    {
        id: 20,
        section: "Mondai 3",
        question: "家族（　　）日本へ来ました。",
        options: ["と", "で", "に", "を"],
        answer: "と",
        explain: "✅ [と] có nghĩa là 'với', 'cùng với' (làm gì cùng ai).\n❌ [で] chỉ phương tiện/số lượng, [に] chỉ đối tượng, [を] chỉ đối tượng."
    },
    {
        id: 21,
        section: "Mondai 3",
        question: "あした、どこ（　　）行きません。",
        options: ["も", "へ", "に", "か"],
        answer: "も",
        explain: "✅ [も] + Phủ định -> Không đi đâu CẢ (Doko mo).\n❌ [へ/に] chỉ hướng nhưng thiếu ý nghĩa phủ định hoàn toàn nếu không có 'mo'. Trong cấu trúc phủ định hoàn toàn, 'mo' thay thế trợ từ."
    },
    {
        id: 22,
        section: "Mondai 3",
        question: "（　　）日本へ来ましたか。 ...3月25日に来ました。",
        options: ["いつ", "なんじ", "だれ", "どこ"],
        answer: "いつ",
        explain: "✅ [いつ|Khi nào] - Hỏi về thời gian chung.\n❌ [なんじ|Mấy giờ], [だれ|Ai], [どこ|Ở đâu]."
    },
    {
        id: 23,
        section: "Mondai 3",
        question: "ご飯を（　　）。",
        options: ["食べます", "飲みます", "吸います", "見ます"],
        answer: "食べます",
        explain: "✅ [食べます|Ăn] cơm.\n❌ [飲みます|Uống], [吸います|Hút], [見ます|Xem]."
    },
    {
        id: 24,
        section: "Mondai 3",
        question: "パン（　　）卵を　食べます。",
        options: ["と", "の", "に", "で"],
        answer: "と",
        explain: "✅ Danh từ 1 [と] Danh từ 2 -> Và. Bánh mì VÀ trứng.\n❌ [の] của, [に] tại, [で] bằng."
    },
    {
        id: 25,
        section: "Mondai 3",
        question: "いっしょに　大阪城公園へ　（　　）。",
        options: ["行きませんか", "行きますか", "行きません", "行きましょうか"],
        answer: "行きませんか",
        explain: "✅ [〜ませんか] -> Lời mời lịch sự (Bạn có muốn đi... không?).\n❌ [行きますか] chỉ là câu hỏi, [行きません] là phủ định, [行きましょうか] cũng là mời nhưng 'masenka' thường dùng để mời mọc rủ rê lịch sự hơn (hỏi ý kiến)."
    }
];

export const TEST_2: Question[] = [
    // Variation of questions, keeping similar structure
    { id: 1, section: "Mondai 1", question: "[今日]は日曜日です。", options: ["きょう", "きのう", "あした", "あさって"], answer: "きょう", explain: "✅ [今日|きょう|Hôm nay]." },
    { id: 2, section: "Mondai 1", question: "[吸います]。", options: ["すいます", "のみます", "かいます", "あいます"], answer: "すいます", explain: "✅ [吸います|すいます|Hút]." },
    { id: 3, section: "Mondai 1", question: "[読みます]。", options: ["よみます", "のみます", "かいます", "ききます"], answer: "よみます", explain: "✅ [読みます|よみます|Đọc]." },
    { id: 4, section: "Mondai 1", question: "[宿題]。", options: ["しゅくだい", "じゅくだい", "しゅくだ", "しくだい"], answer: "しゅくだい", explain: "✅ [宿題|しゅくだい|Bài tập về nhà]." },
    { id: 5, section: "Mondai 1", question: "[朝]ご飯。", options: ["あさ", "ひる", "ばん", "よる"], answer: "あさ", explain: "✅ [朝|あさ|Sáng]." },
    { id: 6, section: "Mondai 2", question: "[せんげつ]。", options: ["先月", "来月", "今月", "前月"], answer: "先月", explain: "✅ [先月|せんげつ|Tháng trước]." },
    { id: 7, section: "Mondai 2", question: "[ききて]ください。", options: ["聞いて", "間いて", "開いて", "関いて"], answer: "聞いて", explain: "✅ [聞いて|きいて|Hãy nghe] (Kanji: Văn/Vấn)." },
    { id: 8, section: "Mondai 2", question: "[あした]。", options: ["明日", "明後日", "昨日", "今日"], answer: "明日", explain: "✅ [明日|あした/あす|Ngày mai]." },
    { id: 9, section: "Mondai 3", question: "何（　　）買いますか。", options: ["を", "の", "で", "に"], answer: "を", explain: "✅ [を] chỉ đối tượng hành động (Mua cái gì)." },
    { id: 10, section: "Mondai 3", question: "駅で　新聞（　　）買います。", options: ["を", "で", "に", "へ"], answer: "を", explain: "✅ [を] chỉ đối tượng. Mua báo." },
    { id: 11, section: "Mondai 3", question: "どこ（　　）その写真を撮りましたか。", options: ["で", "に", "へ", "を"], answer: "で", explain: "✅ [で] chỉ địa điểm nơi diễn ra hành động (chụp ảnh ở đâu)." },
    { id: 12, section: "Mondai 3", question: "ロビー（　　）休みましょう。", options: ["で", "に", "へ", "を"], answer: "で", explain: "✅ [で] chỉ địa điểm hành động (nghỉ ngơi tại sảnh)." }
];

export const TEST_3: Question[] = [
    // Just reusing TEST_1 for now for simplicity as user asked for structure, I can expand later
    ...TEST_1
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
            question: "わたしは　タクシー（　　）うちへ　帰ります。",
            options: ["で", "に", "へ", "を"],
            answer: "で",
            explain: "✅ [で] chỉ phương tiện (bằng taxi)."
        },
        {
            id: 2,
            section: "Mondai 1",
            question: "いっしょに　京都へ　（　　）。",
            options: ["行きませんか", "行きますか", "行きません", "行って"],
            answer: "行きませんか",
            explain: "✅ [〜ませんか] là lời mời rủ rê."
        },
        {
            id: 3,
            section: "Mondai 1",
            question: "きのう、何（　　）食べませんでした。",
            options: ["も", "を", "が", "か"],
            answer: "も",
            explain: "✅ [なに] + [も] + Phủ định -> Không ăn gì CẢ."
        },
        {
            id: 4,
            section: "Mondai 1",
            question: "それは　（　　）ですか。 ...自動車の本です。",
            options: ["なん", "なに", "だれ", "どれ"],
            answer: "なん",
            explain: "✅ [なん] desu ka (Là cái gì?)."
        },
        {
            id: 5,
            section: "Mondai 1",
            question: "（　　）誕生日は　いつですか。",
            options: ["お", "ご", "み", "さん"],
            answer: "お",
            explain: "✅ [お]誕生日 - Thêm 'o' để lịch sự."
        }
    ],
    2: [
        { id: 1, section: "Mondai 1", question: "日曜日　奈良（　　）行きました。", options: ["へ", "を", "で", "が"], answer: "へ", explain: "✅ [へ] chỉ hướng di chuyển." },
        { id: 2, section: "Mondai 1", question: "誰（　　）来ましたか。", options: ["と", "で", "に", "を"], answer: "と", explain: "✅ [と] - Cùng với ai." },
        { id: 3, section: "Mondai 1", question: "図書館で　本を　（　　）。", options: ["読みます", "読み", "読んで", "読んだ"], answer: "読みます", explain: "✅ Câu đơn giản thì dùng Masu form." },
        { id: 4, section: "Mondai 1", question: "ちょっと　（　　）。", options: ["休みましょう", "休みません", "休みます", "休んでいます"], answer: "休みましょう", explain: "✅ [〜ましょう] - Cùng nghỉ chút đi (đề nghị)." }
    ],
    3: [
        { id: 1, section: "Mondai 1", question: "いつ　国へ　（　　）。", options: ["帰りますか", "帰りましたか", "帰り", "帰って"], answer: "帰りますか", explain: "✅ Câu hỏi về tương lai/thói quen." }
    ]
};
