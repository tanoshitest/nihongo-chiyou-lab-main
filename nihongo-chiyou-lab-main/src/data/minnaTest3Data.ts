
export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

// ============================================================================
// DATA SOURCES (Lesson 5 & 6)
// ============================================================================

const VOCAB_SOURCES = [
    { kanji: "行きます", kana: "いきます", meaning: "Đi", wrong: ["きます", "かえります", "おこります", "みます", "たべます"] },
    { kanji: "来ます", kana: "きます", meaning: "Đến", wrong: ["いきます", "きります", "きます", "ひきます"] },
    { kanji: "帰ります", kana: "かえります", meaning: "Về", wrong: ["はいります", "はしります", "とまります", "わかります"] },
    { kanji: "学校", kana: "がっこう", meaning: "Trường học", wrong: ["がこう", "かっこう", "げっこう", "かこう"] },
    { kanji: "駅", kana: "えき", meaning: "Nhà ga", wrong: ["いえ", "みせ", "まち", "あき"] },
    { kanji: "飛行機", kana: "ひこうき", meaning: "Máy bay", wrong: ["ひごうき", "びこうき", "ひこき", "きこうき"] },
    { kanji: "電車", kana: "でんしゃ", meaning: "Tàu điện", wrong: ["てんしゃ", "でんさ", "だんしゃ", "でんし"] },
    { kanji: "地下鉄", kana: "ちかてつ", meaning: "Tàu điện ngầm", wrong: ["ちがてつ", "じかてつ", "ちかでつ", "ちかてつ"] },
    { kanji: "新幹線", kana: "しんかんせん", meaning: "Tàu Shinkansen", wrong: ["しんかんぜん", "しんかぜん", "しかんせん", "しんせん"] },
    { kanji: "自転車", kana: "じてんしゃ", meaning: "Xe đạp", wrong: ["じどうしゃ", "じでんしゃ", "ちてんしゃ", "じどうしゃ"] },
    { kanji: "歩いて", kana: "あるいて", meaning: "Đi bộ", wrong: ["はしって", "およいで", "まって", "あいて"] },
    { kanji: "人", kana: "ひと", meaning: "Người", wrong: ["じん", "にん", "とき", "たい"] },
    { kanji: "友達", kana: "ともだち", meaning: "Bạn bè", wrong: ["ともたち", "ゆうだち", "ゆうじん", "どもだち"] },
    { kanji: "彼", kana: "かれ", meaning: "Anh ấy", wrong: ["かのじょ", "だれ", "あれ", "それ"] },
    { kanji: "彼女", kana: "かのじょ", meaning: "Cô ấy", wrong: ["かれ", "しょうじょ", "つま", "はは"] },
    { kanji: "家族", kana: "かぞく", meaning: "Gia đình", wrong: ["かぞっく", "がぞく", "いえぞく", "やぞく"] },
    { kanji: "一人", kana: "ひとり", meaning: "Một mình", wrong: ["いちにん", "ひとつ", "いちじん", "いちり"] },
    { kanji: "先週", kana: "せんしゅう", meaning: "Tuần trước", wrong: ["せんじゅう", "ぜんしゅう", "さきしゅう", "ぜんしゅ"] },
    { kanji: "今週", kana: "こんしゅう", meaning: "Tuần này", wrong: ["らいしゅう", "せんしゅう", "まいしゅう", "きんしゅう"] },
    { kanji: "来週", kana: "らいしゅう", meaning: "Tuần sau", wrong: ["こんしゅう", "きしゅう", "くしゅう", "まいしゅう"] },
    { kanji: "先月", kana: "せんげつ", meaning: "Tháng trước", wrong: ["せんがつ", "さきつき", "まいつき", "ぜんげつ"] },
    { kanji: "今月", kana: "こんげつ", meaning: "Tháng này", wrong: ["いまって", "こんがつ", "きんげつ", "まいげつ"] },
    { kanji: "来月", kana: "らいげつ", meaning: "Tháng sau", wrong: ["らいがつ", "きたつき", "ぎょうげつ", "きげつ"] },
    { kanji: "去年", kana: "きょねん", meaning: "Năm ngoái", wrong: ["さくねん", "こぞ", "きょうねん", "きねん"] },
    { kanji: "食べます", kana: "たべます", meaning: "Ăn", wrong: ["のみます", "よみます", "かいます", "あいます"] },
    { kanji: "飲みます", kana: "のみます", meaning: "Uống", wrong: ["すいます", "よみます", "かみます", "みます"] },
    { kanji: "吸います", kana: "すいます", meaning: "Hút", wrong: ["ひろいます", "かいます", "あいます", "いいます"] },
    { kanji: "見ます", kana: "みます", meaning: "Xem", wrong: ["ききます", "よみます", "かきます", "ねます"] },
    { kanji: "聞きます", kana: "ききます", meaning: "Nghe", wrong: ["かきます", "ひきます", "とります", "みます"] },
    { kanji: "読みます", kana: "よみます", meaning: "Đọc", wrong: ["のみます", "すみます", "やすみます", "かきます"] },
    { kanji: "書きます", kana: "かきます", meaning: "Viết", wrong: ["ききます", "おきます", "ひきます", "よみます"] },
    { kanji: "買います", kana: "かきます", meaning: "Mua", wrong: ["あいます", "ならいます", "うたいます", "かいます"] },
    { kanji: "撮ります", kana: "とります", meaning: "Chụp", wrong: ["うります", "きります", "やります", "かります"] },
    { kanji: "会います", kana: "あいます", meaning: "Gặp", wrong: ["いいます", "すいます", "ぬいます", "かいます"] },
    { kanji: "朝", kana: "あさ", meaning: "Sáng", wrong: ["ひる", "ばん", "よる", "ゆう"] },
    { kanji: "昼", kana: "ひる", meaning: "Trưa", wrong: ["あさ", "ばん", "よる", "じかん"] },
    { kanji: "晩", kana: "ばん", meaning: "Tối", wrong: ["あさ", "ひる", "よる", "ゆう"] },
    { kanji: "パン", kana: "Bánh mì", meaning: "Bánh mì", type: "kata", wrong: ["Ban", "Pan", "Pen", "Pin"] },
    { kanji: "卵", kana: "たまご", meaning: "Trứng", wrong: ["たまこ", "たばご", "だまご", "おもご"] },
    { kanji: "肉", kana: "にく", meaning: "Thịt", wrong: ["みく", "こく", "ねく", "ちく"] },
    { kanji: "魚", kana: "さかな", meaning: "Cá", wrong: ["さなが", "ざかな", "たかな", "なかな"] },
    { kanji: "野菜", kana: "やさい", meaning: "Rau", wrong: ["あさい", "よさい", "やざい", "とさい"] },
    { kanji: "果物", kana: "くだもの", meaning: "Hoa quả", wrong: ["かもの", "ふだもの", "くたもの", "かぶつ"] },
    { kanji: "水", kana: "みず", meaning: "Nước", wrong: ["すい", "ひ", "つち", "き"] },
    { kanji: "お茶", kana: "おちゃ", meaning: "Trà", wrong: ["おち", "おしゃ", "おや", "おた"] },
    { kanji: "紅茶", kana: "こうちゃ", meaning: "Hồng trà", wrong: ["こちゃ", "ごうちゃ", "こうち", "あかちゃ"] },
    { kanji: "牛乳", kana: "ぎゅうにゅう", meaning: "Sữa bò", wrong: ["ぎゅにゅ", "うしちち", "ごにゅう", "きゅうにゅう"] },
    { kanji: "手紙", kana: "てがみ", meaning: "Thư", wrong: ["てかみ", "しゅし", "てがみ", "てい"] },
    { kanji: "店", kana: "みせ", meaning: "Cửa hàng", wrong: ["てん", "へや", "うち", "えき"] }
];

// Helper to shuffle array
function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Helper to generate options
function generateOptions(correct: string, wrongs: string[]): string[] {
    const distinctWrongs = Array.from(new Set(wrongs)).filter(w => w !== correct);
    const selectedWrongs = shuffle(distinctWrongs).slice(0, 3);
    while (selectedWrongs.length < 3) {
        selectedWrongs.push("Other");
    }
    return shuffle([correct, ...selectedWrongs]);
}

// Generator
function generateVocabTests(examId: number): Question[] {
    const offset = (examId - 1) * 33;
    const questions: Question[] = [];

    // Mondai 1: Kanji -> Hiragana Reading (35 Qs)
    for (let i = 0; i < 35; i++) {
        const idx = (offset + i) % VOCAB_SOURCES.length;
        const item = VOCAB_SOURCES[idx];
        const isKata = item.type === 'kata';

        questions.push({
            id: i + 1,
            section: "Mondai 1",
            question: isKata ? `[${item.kanji}]の意味は何ですか。` : `[${item.kanji}]の読み方は何ですか。`,
            options: generateOptions(item.kana, item.wrong),
            answer: item.kana,
            explain: `✅ [${item.kanji}|${item.kana}|${item.meaning}]`
        });
    }

    // Mondai 2: Hiragana/Meaning -> Kanji/Word (35 Qs)
    questions.splice(35); // Not strictly needed but safe

    for (let i = 0; i < 35; i++) {
        const idx = (offset + i + 15) % VOCAB_SOURCES.length;
        const item = VOCAB_SOURCES[idx];
        const distractors = shuffle(VOCAB_SOURCES.filter(x => x.kanji !== item.kanji)).slice(0, 3).map(x => x.kanji);

        questions.push({
            id: 36 + i,
            section: "Mondai 2",
            question: `[${item.kana}]。`,
            options: shuffle([item.kanji, ...distractors]),
            answer: item.kanji,
            explain: `✅ [${item.kana}] → [${item.kanji}|${item.kana}] (${item.meaning})`
        });
    }

    // Mondai 3: Context (30 Qs)
    const contexts = [
        { q: "{P}へ行きます。", a: "へ", opts: ["へ", "に", "で", "を"], expl: "Direction particle" },
        { q: "{P}でごはんを食べます。", a: "で", opts: ["で", "に", "へ", "を"], expl: "Location of action" },
        { q: "{P}と日本へ来ました。", a: "と", opts: ["と", "で", "に", "を"], expl: "With person" },
        { q: "{T}に寝ます。", a: "に", opts: ["に", "で", "へ", "を"], expl: "Specific time" },
        { q: "{O}を食べます。", a: "を", opts: ["を", "で", "に", "は"], expl: "Object marker" }
    ];

    const furiMap: Record<string, string> = {
        "行きます": "[行きます|いきます]", "来ました": "[来ました|きました]", "食べます": "[食べます|たべます]",
        "寝ます": "[寝ます|ねます]", "学校": "[学校|がっこう]", "スーパー": "[スーパー||Super]",
        "会社": "[会社|かいしゃ]", "病院": "[病院|びょういん]", "銀行": "[銀行|ぎんこう]",
        "郵便局": "[郵便局|ゆうびんきょく]", "日本": "[日本|にほん]",
        "6時": "[6時|ろくじ]", "9時": "[9時|くじ]", "10時半": "[10時半|じゅうじはん]", "日曜日": "[日曜日|にちようび]",
        "パン": "[パン||Bánh mì]", "肉": "[肉|にく]", "魚": "[魚|さかな]", "卵": "[卵|たまご]",
        "野菜": "[野菜|やさい]", "ごはん": "[ごはん|ご飯]",
        "友達": "[友達|ともだち]", "家族": "[家族|かぞく]", "彼女": "[彼女|かのじょ]", "彼": "[彼|かれ]"
    };

    const places = ["学校", "スーパー", "会社", "病院", "銀行", "郵便局"];
    const times = ["6時", "9時", "10時半", "日曜日"];
    const objects = ["パン", "肉", "魚", "卵", "野菜", "ごはん"];

    for (let i = 0; i < 30; i++) {
        const template = contexts[i % contexts.length];
        let qTextRaw = template.q;

        const pVal = places[(i + examId) % places.length];
        const tVal = times[(i + examId) % times.length];
        const oVal = objects[(i + examId) % objects.length];

        qTextRaw = qTextRaw.replace("{P}", pVal).replace("{T}", tVal).replace("{O}", oVal);

        let qTextFuri = qTextRaw;
        Object.keys(furiMap).forEach(key => {
            qTextFuri = qTextFuri.replace(key, furiMap[key]);
        });

        questions.push({
            id: 71 + i,
            section: "Mondai 3",
            question: qTextRaw.replace(template.a, "（　　）"), // Mask the answer
            options: shuffle(template.opts),
            answer: template.a,
            explain: `✅ ${template.expl} (${qTextFuri})`
        });
    }

    return questions;
}


function generateGrammarTests(examId: number): Question[] {
    const questions: Question[] = [];
    const offset = examId * 5;

    // Patterns with explicit furigana templates
    const patterns = [
        { q: "私は{O}を食べます。", a: "を", opts: ["を", "で", "に", "は"], exp: "[を] Object marker.", qf: "[私|わたし]は{O}を[食|た]べます。" },
        { q: "{P}で行きます。", a: "で", opts: ["で", "に", "へ", "を"], exp: "[で] Means/Method.", qf: "{P}で[行|い]きます。" },
        { q: "{PL}へ帰ります。", a: "へ", opts: ["へ", "に", "で", "を"], exp: "[へ] Direction.", qf: "{PL}へ[帰|かえ]ります。" },
        { q: "{T}に会います。", a: "に", opts: ["に", "で", "へ", "を"], exp: "[に] Specific time/Target.", qf: "{T}に[会|あ]います。" },
        { q: "いっしょに{V}ませんか。", a: "ませんか", opts: ["ませんか", "ますか", "ません", "しょう"], exp: "Invitation.", qf: "いっしょに{V}ませんか。" }, // verb needs furi
        { q: "あした{V}ましょう。", a: "ましょう", opts: ["ましょう", "ます", "ません", "て"], exp: "Let's do (Volitional).", qf: "[あした|明日]{V}ましょう。" },
        { q: "何も{Vn}。", a: "ません", opts: ["ません", "ます", "ました", "て"], exp: "Nanimo + Negative.", qf: "[何|なに]も{Vn}。" },
        { q: "どこも{Vn}でした。", a: "ません", opts: ["ません", "ます", "ました", "て"], exp: "Dokomo + Negative.", qf: "[どこ|何処]も{Vn}でした。" },
        { q: "{PL}で{O}を買います。", a: "で", opts: ["で", "に", "へ", "を"], exp: "Action at place.", qf: "{PL}で{O}を[買|か]います。" },
        { q: "それは{PR}のです。", a: "わたし", opts: ["わたし", "わたしの", "わたしは", "わたしに"], exp: "Possessive.", qf: "それは{PR}のです。" }
    ];

    const furiVals = {
        objects: [
            { w: "パン", f: "パン" }, { w: "肉", f: "[肉|にく]" }, { w: "魚", f: "[魚|さかな]" },
            { w: "卵", f: "[卵|たまご]" }, { w: "野菜", f: "[野菜|やさい]" }, { w: "ごはん", f: "[ごはん|ご飯]" }
        ],
        places: [
            { w: "学校", f: "[学校|がっこう]" }, { w: "スーパー", f: "スーパー" }, { w: "会社", f: "[会社|かいしゃ]" },
            { w: "病院", f: "[病院|びょういん]" }, { w: "銀行", f: "[銀行|ぎんこう]" }, { w: "駅", f: "[駅|えき]" }
        ],
        times: [
            { w: "6時", f: "[6時|ろくじ]" }, { w: "9時", f: "[9時|くじ]" }, { w: "日曜日", f: "[日曜日|にちようび]" }, { w: "月曜日", f: "[月曜日|げつようび]" }
        ],
        verbs: [
            { w: "食べ", f: "[食|た]べ" }, { w: "飲み", f: "[飲|の]み" }, { w: "行き", f: "[行|い]き" }, { w: "し", f: "し" }
        ],
        verbsNeg: [
            { w: "食べ", f: "[食|た]べ" }, { w: "飲み", f: "[飲|の]み" }, { w: "行き", f: "[行|い]き" }, { w: "し", f: "し" }
        ]
    };

    for (let i = 0; i < 100; i++) {
        const pIdx = (i + offset) % patterns.length;
        const pat = patterns[pIdx];

        const oIdx = (i + examId) % furiVals.objects.length;
        const plIdx = (i + examId * 2) % furiVals.places.length;
        const tIdx = (i + examId * 3) % furiVals.times.length;
        const vIdx = (i) % furiVals.verbs.length;
        const vnIdx = (i) % furiVals.verbsNeg.length;

        // Construct Raw Question (for display)
        let qText = pat.q;
        qText = qText.replace("{O}", furiVals.objects[oIdx].w);
        qText = qText.replace("{PL}", furiVals.places[plIdx].w);
        qText = qText.replace("{T}", furiVals.times[tIdx].w);
        qText = qText.replace("{P}", "タクシー");
        qText = qText.replace("{V}", furiVals.verbs[vIdx].w);
        qText = qText.replace("{Vn}", furiVals.verbsNeg[vnIdx].w);
        qText = qText.replace("{PR}", "わたし");

        // Construct Furigana Explanation (for answer key)
        let fText = pat.qf;
        fText = fText.replace("{O}", furiVals.objects[oIdx].f);
        fText = fText.replace("{PL}", furiVals.places[plIdx].f);
        fText = fText.replace("{T}", furiVals.times[tIdx].f);
        fText = fText.replace("{P}", "タクシー");
        fText = fText.replace("{V}", furiVals.verbs[vIdx].f);
        fText = fText.replace("{Vn}", furiVals.verbsNeg[vnIdx].f);
        fText = fText.replace("{PR}", "[私|わたし]");

        questions.push({
            id: i + 1,
            section: "Grammar",
            question: qText.replace(pat.a, "（　　）"),
            options: shuffle(pat.opts),
            answer: pat.a,
            explain: `✅ ${pat.exp} (${fText})`
        });
    }

    return questions;
}

export const TEST_3_EXAM_1 = generateVocabTests(1);
export const TEST_3_EXAM_2 = generateVocabTests(2);
export const TEST_3_EXAM_3 = generateVocabTests(3);

export const GRAMMAR_TEST_3_EXAM_1 = generateGrammarTests(1);
export const GRAMMAR_TEST_3_EXAM_2 = generateGrammarTests(2);
export const GRAMMAR_TEST_3_EXAM_3 = generateGrammarTests(3);

export const ALL_TESTS: Record<number, Question[]> = {
    1: TEST_3_EXAM_1,
    2: TEST_3_EXAM_2,
    3: TEST_3_EXAM_3
};

export const GRAMMAR_TESTS: Record<number, Question[]> = {
    1: GRAMMAR_TEST_3_EXAM_1,
    2: GRAMMAR_TEST_3_EXAM_2,
    3: GRAMMAR_TEST_3_EXAM_3
};
