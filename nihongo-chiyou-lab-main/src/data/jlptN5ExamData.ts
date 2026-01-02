// JLPT N5 Exam Structure - 2025 Standard

export interface ExamQuestion {
  id: number;
  mondaiId: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  audioUrl?: string; // For listening section
}

export interface MondaiInfo {
  id: number;
  name: string;
  nameJa: string;
  questionCount: number;
}

export interface SectionInfo {
  id: number;
  name: string;
  nameJa: string;
  timeLimit: number; // in seconds
  totalQuestions: number;
  mondais: MondaiInfo[];
  passingScore: number;
  maxScore: number;
}

export interface ExamData {
  section1: ExamQuestion[];
  section2: ExamQuestion[];
  section3: ExamQuestion[];
}

// N5 Exam Structure Definition
export const N5_EXAM_STRUCTURE: { sections: SectionInfo[] } = {
  sections: [
    {
      id: 1,
      name: "Từ vựng",
      nameJa: "文字・語彙 (Moji/Goi)",
      timeLimit: 1200, // 20 minutes
      totalQuestions: 35,
      passingScore: 19,
      maxScore: 60,
      mondais: [
        { id: 1, name: "Yomikata (Cách đọc)", nameJa: "読み方", questionCount: 12 },
        { id: 2, name: "Kakikata (Cách viết)", nameJa: "書き方", questionCount: 8 },
        { id: 3, name: "Bunmyaku (Ngữ cảnh)", nameJa: "文脈規定", questionCount: 10 },
        { id: 4, name: "Iikae (Đồng nghĩa)", nameJa: "言い換え", questionCount: 5 },
      ],
    },
    {
      id: 2,
      name: "Ngữ pháp & Đọc hiểu",
      nameJa: "文法・読解 (Bunpo/Dokkai)",
      timeLimit: 2400, // 40 minutes
      totalQuestions: 32,
      passingScore: 19,
      maxScore: 60,
      mondais: [
        { id: 1, name: "Bunpo (Ngữ pháp câu)", nameJa: "文法形式", questionCount: 16 },
        { id: 2, name: "Hoshi (Sắp xếp ★)", nameJa: "文の組み立て", questionCount: 5 },
        { id: 3, name: "Bunpo trong đoạn văn", nameJa: "文章の文法", questionCount: 5 },
        { id: 4, name: "Dokkai ngắn", nameJa: "短文", questionCount: 3 },
        { id: 5, name: "Dokkai trung bình", nameJa: "中文", questionCount: 2 },
        { id: 6, name: "Tìm thông tin", nameJa: "情報検索", questionCount: 1 },
      ],
    },
    {
      id: 3,
      name: "Nghe hiểu",
      nameJa: "聴解 (Choukai)",
      timeLimit: 1800, // 30 minutes
      totalQuestions: 24,
      passingScore: 19,
      maxScore: 60,
      mondais: [
        { id: 1, name: "Kadai Rikai (Hiểu nhiệm vụ)", nameJa: "課題理解", questionCount: 7 },
        { id: 2, name: "Pointo Rikai (Hiểu điểm chính)", nameJa: "ポイント理解", questionCount: 6 },
        { id: 3, name: "Hatsuwa Hyougen (Phát ngôn)", nameJa: "発話表現", questionCount: 5 },
        { id: 4, name: "Sokutou Ouyo (Phản hồi nhanh)", nameJa: "即時応答", questionCount: 6 },
      ],
    },
  ],
};

// Helper: Generate mock question based on section and mondai
function generateMockQuestion(
  id: number,
  sectionId: number,
  mondaiId: number,
  questionIndex: number,
  isListening: boolean = false
): ExamQuestion {
  const vocabQuestions = [
    { q: "「学校」の読み方は何ですか。", opts: ["がっこう", "がくこう", "かっこう", "がこう"], correct: "がっこう", exp: "「学校」は「がっこう」と読みます。促音「っ」に注意。" },
    { q: "「先生」の読み方は何ですか。", opts: ["せんせい", "せいせん", "さんせい", "しんせい"], correct: "せんせい", exp: "「先生」は教師を意味し、「せんせい」と読みます。" },
    { q: "「水」の読み方は何ですか。", opts: ["みず", "すい", "みす", "すず"], correct: "みず", exp: "「水」は訓読みで「みず」と読みます。" },
    { q: "「電話」の読み方は何ですか。", opts: ["でんわ", "てんわ", "でんば", "でんか"], correct: "でんわ", exp: "「電話」は「でんわ」と読みます。電気の電です。" },
    { q: "「食べる」の読み方は何ですか。", opts: ["たべる", "しょくべる", "くべる", "のべる"], correct: "たべる", exp: "「食べる」は「たべる」と読み、食事をする意味です。" },
  ];

  const grammarQuestions = [
    { q: "私は学生＿＿＿です。", opts: ["は", "が", "を", "に"], correct: "は", exp: "主題を表す助詞「は」を使います。" },
    { q: "毎日コーヒー＿＿＿飲みます。", opts: ["を", "が", "は", "に"], correct: "を", exp: "目的語を表す助詞「を」を使います。" },
    { q: "駅＿＿＿行きます。", opts: ["に", "を", "が", "は"], correct: "に", exp: "移動の目的地には助詞「に」を使います。" },
    { q: "これは＿＿＿本ですか。", opts: ["だれの", "なにの", "どれの", "いつの"], correct: "だれの", exp: "所有者を聞くときは「だれの」を使います。" },
    { q: "昨日、映画＿＿＿見ました。", opts: ["を", "が", "に", "で"], correct: "を", exp: "動作の対象を表す助詞「を」を使います。" },
  ];

  const listeningQuestions = [
    { q: "女の人は何を買いますか。", opts: ["りんご", "みかん", "バナナ", "ぶどう"], correct: "りんご", exp: "女性は「りんごをください」と言いました。" },
    { q: "男の人はどこに行きますか。", opts: ["銀行", "郵便局", "病院", "学校"], correct: "銀行", exp: "男性は「銀行に行きます」と答えました。" },
    { q: "電車は何時に来ますか。", opts: ["3時", "3時半", "4時", "4時半"], correct: "3時半", exp: "アナウンスで「3時半に到着します」と言っています。" },
  ];

  let questionPool;
  if (sectionId === 1) {
    questionPool = vocabQuestions;
  } else if (sectionId === 2) {
    questionPool = grammarQuestions;
  } else {
    questionPool = listeningQuestions;
  }

  const template = questionPool[questionIndex % questionPool.length];

  const question: ExamQuestion = {
    id,
    mondaiId,
    questionText: `【問題${mondaiId}】問${questionIndex + 1}: ${template.q}`,
    options: template.opts,
    correctAnswer: template.correct,
    explanation: template.exp,
  };

  if (isListening) {
    question.audioUrl = `/audio/n5/section3/q${id}.mp3`;
  }

  return question;
}

// Generate complete mock exam data
export function generateMockExamData(): ExamData {
  const examData: ExamData = {
    section1: [],
    section2: [],
    section3: [],
  };

  let globalId = 1;

  // Section 1: Moji/Goi
  N5_EXAM_STRUCTURE.sections[0].mondais.forEach((mondai) => {
    for (let i = 0; i < mondai.questionCount; i++) {
      examData.section1.push(generateMockQuestion(globalId++, 1, mondai.id, i, false));
    }
  });

  // Section 2: Bunpo/Dokkai
  N5_EXAM_STRUCTURE.sections[1].mondais.forEach((mondai) => {
    for (let i = 0; i < mondai.questionCount; i++) {
      examData.section2.push(generateMockQuestion(globalId++, 2, mondai.id, i, false));
    }
  });

  // Section 3: Choukai (Listening)
  N5_EXAM_STRUCTURE.sections[2].mondais.forEach((mondai) => {
    for (let i = 0; i < mondai.questionCount; i++) {
      examData.section3.push(generateMockQuestion(globalId++, 3, mondai.id, i, true));
    }
  });

  return examData;
}

// Scoring utilities
export function calculateSectionScore(
  answers: Record<number, string>,
  questions: ExamQuestion[]
): number {
  let correct = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correct++;
    }
  });
  return correct;
}

export function calculateScaledScore(rawScore: number, totalQuestions: number, maxScore: number): number {
  return Math.round((rawScore / totalQuestions) * maxScore);
}

export function checkPassStatus(
  section1Score: number,
  section2Score: number,
  section3Score: number
): { passed: boolean; totalScore: number; reason?: string } {
  const totalScore = section1Score + section2Score + section3Score;
  const passingTotal = 80;
  const passingSection = 19;

  if (totalScore < passingTotal) {
    return { passed: false, totalScore, reason: `Tổng điểm ${totalScore}/180 chưa đạt ngưỡng ${passingTotal} điểm.` };
  }

  if (section1Score < passingSection) {
    return { passed: false, totalScore, reason: `Điểm Từ vựng (${section1Score}/60) chưa đạt ngưỡng ${passingSection} điểm.` };
  }

  if (section2Score < passingSection) {
    return { passed: false, totalScore, reason: `Điểm Ngữ pháp/Đọc hiểu (${section2Score}/60) chưa đạt ngưỡng ${passingSection} điểm.` };
  }

  if (section3Score < passingSection) {
    return { passed: false, totalScore, reason: `Điểm Nghe hiểu (${section3Score}/60) chưa đạt ngưỡng ${passingSection} điểm.` };
  }

  return { passed: true, totalScore };
}
