import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/data/minnaData.ts');
const outputPath = path.resolve(__dirname, '../src/data/minnaTest4Data.ts');

console.log('Reading data from:', dataPath);
const fileContent = fs.readFileSync(dataPath, 'utf-8');

console.log(`File size: ${fileContent.length} characters`);

// Debug finding strings
const testStr = 'lesson7';
const idx = fileContent.indexOf(testStr);
console.log(`Index of '${testStr}':`, idx);

if (idx !== -1) {
    console.log('Context around found index:', fileContent.substring(idx - 50, idx + 50));
}

// Extract Lesson 7 and Lesson 8 blocks
// Debugging showed "const lesson7Data: LessonDetail", so we search for "const lesson7Data"
const l7Start = fileContent.indexOf('const lesson7Data');
const l8Start = fileContent.indexOf('const lesson8Data');
let l9Start = fileContent.indexOf('const lesson9Data');
if (l9Start === -1) l9Start = fileContent.length;

if (l7Start === -1 || l8Start === -1) {
    console.error('Could not find lesson7Data or lesson8Data');
    process.exit(1);
}

const l7Content = fileContent.substring(l7Start, l8Start);
const l8Content = fileContent.substring(l8Start, l9Start);

const extractVocab = (content) => {
    const vocab = [];
    // Regex matches: word: '...', kanji: '...', romaji: '...', mean: '...'
    // Note: The file seems to use single quotes for these properties
    const regex = /word:\s*'([^']+)',\s*kanji:\s*'([^']*)',\s*romaji:\s*'([^']*)',\s*mean:\s*'([^']*)'/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        vocab.push({
            word: match[1],   // Hiragana
            kanji: match[2],  // Kanji (might be same as word if no kanji)
            romaji: match[3],
            mean: match[4]
        });
    }
    return vocab;
};

const vocab7 = extractVocab(l7Content);
const vocab8 = extractVocab(l8Content);

console.log(`Extracted Vocabulary: L7 (${vocab7.length}), L8 (${vocab8.length})`);

// Combine vocab for distractors
const allVocab = [...vocab7, ...vocab8];

// Helper to get random distractors
const getDistractors = (correctWord, count = 3) => {
    const options = new Set();
    while (options.size < count) {
        const random = allVocab[Math.floor(Math.random() * allVocab.length)];
        if (random.word !== correctWord.word && random.mean !== correctWord.mean) {
            options.add(random);
        }
    }
    return Array.from(options);
};

// Helper: Shuffle array
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// GENERATION FUNCTIONS

// Mondai 1: Kanji -> Hiragana Reading
const generateMondai1 = (vocabList, idStart) => {
    const questions = [];
    // Filter words that actually have Kanji different from Hiragana
    const candidates = vocabList.filter(v => v.kanji && v.kanji !== v.word && !v.kanji.includes('（')); // simple filter

    // Select random candidates
    const selected = shuffle(candidates).slice(0, 30); // 30 questions

    selected.forEach((v, idx) => {
        const distractors = getDistractors(v).map(d => d.word);
        // Sometimes generate fake confusing distractors (e.g. slight change)
        // For simplicity, using random other words for now, picking similar length if possible
        const options = shuffle([v.word, ...distractors]);

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

// Mondai 2: Hiragana -> Kanji/Katakana Writing
const generateMondai2 = (vocabList, idStart) => {
    const questions = [];
    const candidates = vocabList.filter(v => v.kanji && v.kanji !== v.word);
    const selected = shuffle(candidates).slice(0, 30); // 30 questions

    selected.forEach((v, idx) => {
        const distractors = getDistractors(v).map(d => d.kanji);
        const options = shuffle([v.kanji, ...distractors]);

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

// Mondai 3: Meaning Context (Vietnamese -> Japanese or simple Fill-in)
const generateMondai3 = (vocabList, idStart) => {
    const questions = [];
    const selected = shuffle(vocabList).slice(0, 40); // 40 questions

    selected.forEach((v, idx) => {
        const distractors = getDistractors(v).map(d => d.word);
        const options = shuffle([v.word, ...distractors]);

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


// GRAMMAR GENERATION (Diversified)
const generateGrammarQuestions = (vocab7, vocab8, idStart) => {
    const questions = [];

    // L7 Candidates: tools
    const toolKeywords = ['đũa', 'thìa', 'dao', 'nĩa', 'kéo', 'máy tính', 'điện thoại', 'tay'];
    const tools = shuffle(vocab7.filter(v => toolKeywords.some(k => v.mean.toLowerCase().includes(k))));

    // L8 Candidates: Adjectives
    const adjI = shuffle(vocab8.filter(v => v.word.endsWith('い') && v.kanji !== '綺麗'));
    const adjNa = shuffle(vocab8.filter(v => !v.word.endsWith('い') || v.kanji === '綺麗'));

    // 1. Particle "De" (Means/Tool) (Approx 20 questions)
    // We shuffle 'tools' freshly each time this function is called (above), so order changes.
    for (let i = 0; i < 20; i++) {
        const tool = tools[i % tools.length];
        if (tool) {
            questions.push({
                id: idStart + questions.length,
                section: "Mondai 1: Trợ từ (Phương tiện)",
                question: `${tool.kanji || tool.word}（　　）ご飯を食べます/切ります/書きます。`,
                options: shuffle(["で", "に", "を", "へ"]),
                answer: "で",
                explain: "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
            });
        }
    }

    // 2. I-Adj Negative (Approx 20 questions)
    for (let i = 0; i < 20; i++) {
        const adj = adjI[i % adjI.length];
        if (adj) {
            const stem = adj.word.slice(0, -1);
            const neg = stem + "くない";

            // Randomize context slightly
            const subjects = ["この料理", "あの映画", "今日の天気", "その本"];
            const subj = subjects[Math.floor(Math.random() * subjects.length)];

            questions.push({
                id: idStart + questions.length,
                section: "Mondai 2: Chia tính từ (Đuôi I)",
                question: `${subj}は　あまり（　　）。(${adj.word})`,
                options: shuffle([`${stem}くないです`, `${stem}くありません`, `${stem}じゃないです`, `${adj.word}くないです`]),
                answer: `${stem}くないです`,
                explain: "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
            });
        }
    }

    // 3. Na-Adj Negative (Approx 20 questions)
    for (let i = 0; i < 20; i++) {
        const adj = adjNa[i % adjNa.length];
        if (adj) {
            questions.push({
                id: idStart + questions.length,
                section: "Mondai 3: Chia tính từ (Đuôi Na)",
                question: `この町は　あまり（　　）。(${adj.word})`,
                options: shuffle([`${adj.word}じゃありません`, `${adj.word}くないです`, `${adj.word}くありません`, `${adj.word}です`]),
                answer: `${adj.word}じゃありません`,
                explain: "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
            });
        }
    }

    // 4. "Mou" ... V-mashita (Already done) vs "Mada" (Not yet)
    // Randomly generate Yes or No scenarios
    for (let i = 0; i < 20; i++) {
        const isYes = Math.random() > 0.5;
        const verbs = ["食べました", "送りました", "書きました", "買いました"];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];

        if (isYes) {
            questions.push({
                id: idStart + questions.length,
                section: "Mondai 4: Đã ... chưa",
                question: `もう　${verb}か。 ...はい、（　　）。`,
                options: shuffle(["もうしました", "まだです", "もうです", "まだしました"]),
                answer: "もうしました",
                explain: "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
            });
        } else {
            questions.push({
                id: idStart + questions.length,
                section: "Mondai 4: Đã ... chưa",
                question: `もう　${verb}か。 ...いいえ、（　　）。`,
                options: shuffle(["まだです", "もうです", "しませんでした", "まだしました"]),
                answer: "まだです",
                explain: "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
            });
        }
    }

    // 5. Fill remaining with Random Vocab Context questions (particles)
    const all = [...vocab7, ...vocab8];
    while (questions.length < 100) {
        const v = all[Math.floor(Math.random() * all.length)];
        questions.push({
            id: idStart + questions.length,
            section: "Mondai 5: Tổng hợp",
            question: `${v.kanji || v.word}（　　）ください。`,
            options: shuffle(["を", "に", "で", "が"]),
            answer: "を",
            explain: "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        });
    }

    return questions;
}


// MAIN GENERATION
// 3 Exams for Vocab, 3 Exams for Grammar
const ALL_TESTS = {};
const GRAMMAR_TESTS = {};

for (let i = 1; i <= 3; i++) {
    // Vocab Test: 30 Reading, 30 Writing, 40 Meaning = 100
    // Reshuffle vocab for each test to make them unique
    const m1 = generateMondai1(vocab7.concat(vocab8), 1);
    const m2 = generateMondai2(vocab7.concat(vocab8), 31);
    const m3 = generateMondai3(vocab7.concat(vocab8), 61);
    ALL_TESTS[i] = [...m1, ...m2, ...m3];

    // Grammar Test: 100 qs
    GRAMMAR_TESTS[i] = generateGrammarQuestions(vocab7, vocab8, 1);
}

// OUTPUT FILE CONTENT
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
console.log('Successfully generated minnaTest4Data.ts');
