import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/data/minnaData.ts');
const outputPath = path.resolve(__dirname, '../src/data/minnaTest5Data.ts');

console.log('Reading data from:', dataPath);
const fileContent = fs.readFileSync(dataPath, 'utf-8');

// Debug finding strings
const l9Start = fileContent.indexOf('const lesson9Data');
const l10Start = fileContent.indexOf('const lesson10Data');
let l11Start = fileContent.indexOf('const lesson11Data');
if (l11Start === -1) l11Start = fileContent.length;

if (l9Start === -1 || l10Start === -1) {
    console.error('Could not find lesson9Data or lesson10Data');
    process.exit(1);
}

const l9Content = fileContent.substring(l9Start, l10Start);
const l10Content = fileContent.substring(l10Start, l11Start);

const extractVocab = (content) => {
    const vocab = [];
    const regex = /word:\s*'([^']+)',\s*kanji:\s*'([^']*)',\s*romaji:\s*'([^']*)',\s*mean:\s*'([^']*)'/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        vocab.push({
            word: match[1],   // Hiragana
            kanji: match[2],  // Kanji 
            romaji: match[3],
            mean: match[4]
        });
    }
    return vocab;
};

const vocab9 = extractVocab(l9Content);
const vocab10 = extractVocab(l10Content);

console.log(`Extracted Vocabulary: L9 (${vocab9.length}), L10 (${vocab10.length})`);

// Combine vocab
const allVocab = [...vocab9, ...vocab10];

// Helper: Shuffle array
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// Start ID counters
const generateMondai1 = (vocabList, idStart) => {
    const questions = [];
    const candidates = vocabList.filter(v => v.kanji && v.kanji !== v.word && !v.kanji.includes('（'));
    const selected = shuffle(candidates).slice(0, 30);

    selected.forEach((v, idx) => {
        // Distractors
        const others = shuffle(vocabList.filter(x => x !== v)).slice(0, 3);
        const options = shuffle([v.word, ...others.map(o => o.word)]);

        questions.push({
            id: idStart + idx,
            section: "Mondai 1",
            text_context: "Chọn cách đọc đúng cho từ trong ngoặc",
            question: `[${v.kanji}] の読み方は何ですか。`,
            options: options,
            answer: v.word,
            explain: `✅ [${v.kanji}|${v.word}|${v.mean}]`
        });
    });
    return questions;
};

const generateMondai2 = (vocabList, idStart) => {
    const questions = [];
    const candidates = vocabList.filter(v => v.kanji && v.kanji !== v.word);
    const selected = shuffle(candidates).slice(0, 30);

    selected.forEach((v, idx) => {
        const others = shuffle(vocabList.filter(x => x !== v)).slice(0, 3);
        const options = shuffle([v.kanji, ...others.map(o => o.kanji)]);

        questions.push({
            id: idStart + idx,
            section: "Mondai 2",
            text_context: "Chọn Kanji/Katakana đúng",
            question: `[${v.word}] の漢字は何ですか。`,
            options: options,
            answer: v.kanji,
            explain: `✅ [${v.kanji}|${v.word}|${v.mean}]`
        });
    });
    return questions;
};

const generateMondai3 = (vocabList, idStart) => {
    const questions = [];
    const selected = shuffle(vocabList).slice(0, 40);

    selected.forEach((v, idx) => {
        const others = shuffle(vocabList.filter(x => x !== v)).slice(0, 3);
        const options = shuffle([v.word, ...others.map(o => o.word)]);

        questions.push({
            id: idStart + idx,
            section: "Mondai 3",
            text_context: "Chọn từ đúng nghĩa",
            question: `意味: "${v.mean}"`,
            options: options,
            answer: v.word,
            explain: `✅ [${v.word}|${v.kanji}|${v.mean}]`
        });
    });
    return questions;
};

// GRAMMAR (L9: Suki/Kirai/Jouzu/Heta/Arimasu/Wakarimasu | L10: Arimasu/Imasu (Location))
const generateGrammarQuestions = (vocab9, vocab10, idStart) => {
    const questions = [];

    // 1. L9: Adjectives/Verbs with GA (Suki, Kirai, Jouzu, Heta, Wakarimasu, Arimasu)
    const gaPatterns = shuffle(["好き", "嫌い", "上手", "下手", "わかります", "あります"]);

    for (let i = 0; i < 20; i++) {
        const pattern = gaPatterns[i % gaPatterns.length];
        const isVerb = ["わかります", "あります"].includes(pattern);
        const end = isVerb ? pattern : pattern + "です";

        // Randomized context subjects
        const subjects = ["日本語", "英語", "スポーツ", "音楽", "料理", "ダンス", "歌", "漢字"];
        const subj = subjects[Math.floor(Math.random() * subjects.length)];

        questions.push({
            id: idStart + questions.length,
            section: "Mondai 1: Trợ từ (ga)",
            question: `私 は ${subj} （　　） ${end}。`,
            options: shuffle(["が", "を", "で", "に"]),
            answer: "が",
            explain: `✅ Với ${pattern}, dùng trợ từ [ga].`
        });
    }

    // 2. L10: Existence (Imasu vs Arimasu)
    const livingThings = ["犬", "猫", "山田さん", "男の人", "女の人", "象", "パンダ"];
    const nonLiving = ["机", "椅子", "本", "時計", "atm", "コンビニ", "ポスト"];

    for (let i = 0; i < 20; i++) {
        const isAnimate = Math.random() > 0.5;
        const subject = isAnimate
            ? livingThings[Math.floor(Math.random() * livingThings.length)]
            : nonLiving[Math.floor(Math.random() * nonLiving.length)];

        const verb = isAnimate ? "います" : "あります";
        const wrongVerb = isAnimate ? "あります" : "います";

        questions.push({
            id: idStart + questions.length,
            section: "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            question: `あそこに　${subject} が （　　）。`,
            options: shuffle([verb, wrongVerb, "です", "ます"]),
            answer: verb,
            explain: `✅ ${subject} là ${isAnimate ? "động vật/người -> imasu" : "đồ vật -> arimasu"}.`
        });
    }

    // 3. L10: Location Particle (ni)
    const places = ["あそこ", "部屋", "教室", "庭", "公園", "喫茶店", "ロビー"];
    for (let i = 0; i < 20; i++) {
        const place = places[Math.floor(Math.random() * places.length)];
        const thing = Math.random() > 0.5 ? "犬" : "自動販売機";
        const verb = thing === "犬" ? "います" : "あります";

        questions.push({
            id: idStart + questions.length,
            section: "Mondai 3: Trợ từ chỉ địa điểm",
            question: `${place} （　　） ${thing} が ${verb}。`,
            options: shuffle(["に", "で", "を", "へ"]),
            answer: "に",
            explain: "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        });
    }

    // 4. L9: Kara/Dakara (Reason)
    const reasons = [
        { reason: "時間 が ありません", action: "新聞 を 読みません" },
        { reason: "用事 が あります", action: "早く 帰ります" },
        { reason: "お金 が ありません", action: "旅行 しません" },
        { reason: "毎日 忙しい です", action: "テレビ を 見ません" },
        { reason: "日本語 が わかりません", action: "英語 で 話します" }
    ];

    for (let i = 0; i < 20; i++) {
        // Pick random Reason pair
        const pair = reasons[Math.floor(Math.random() * reasons.length)];
        questions.push({
            id: idStart + questions.length,
            section: "Mondai 4: Lý do (Kara)",
            question: `${pair.reason} （　　）、${pair.action}。`,
            options: shuffle(["から", "が", "と", "ね"]),
            answer: "から",
            explain: "✅ Nguyên nhân [kara] kết quả."
        });
    }

    // 5. Random Particles/Vocab context from L9/10
    const all = [...vocab9, ...vocab10];
    while (questions.length < 100) {
        const v = all[Math.floor(Math.random() * all.length)];
        questions.push({
            id: idStart + questions.length,
            section: "Mondai 5: Tổng hợp",
            question: `[${v.word}] の意味は何ですか。`,
            options: shuffle(["Placeholder A", "Placeholder B", "Placeholder C", v.mean]),
            answer: v.mean,
            explain: `✅ ${v.word} = ${v.mean}`
        });
    }

    return questions;
};

const ALL_TESTS = {};
const GRAMMAR_TESTS = {};

for (let i = 1; i <= 3; i++) {
    // Vocab Test: 30 Reading, 30 Writing, 40 Meaning = 100
    // Reshuffle vocab for each test to make them unique
    const m1 = generateMondai1(vocab9.concat(vocab10), 1);
    const m2 = generateMondai2(vocab9.concat(vocab10), 31);
    const m3 = generateMondai3(vocab9.concat(vocab10), 61);
    ALL_TESTS[i] = [...m1, ...m2, ...m3];

    // Grammar Test: 100 qs
    GRAMMAR_TESTS[i] = generateGrammarQuestions(vocab9, vocab10, 1);
}

const outputContent = `
export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

export const ALL_TESTS: Record<number, Question[]> = ${JSON.stringify(ALL_TESTS, null, 4)};

export const GRAMMAR_TESTS: Record<number, Question[]> = ${JSON.stringify(GRAMMAR_TESTS, null, 4)};
`;

fs.writeFileSync(outputPath, outputContent);
console.log('Successfully generated minnaTest5Data.ts');
