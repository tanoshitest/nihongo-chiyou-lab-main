export interface PracticeExam {
    id: string;
    title: string;
    level: "N5" | "N4" | "N3" | "N2" | "N1";
    category: "kanji" | "vocabulary" | "grammar" | "reading" | "listening";
    totalQuestions: number;
    duration: number; // in minutes
    difficulty: "Dễ" | "Trung bình" | "Khó" | "";
}

// Helper to generate IDs
const generateId = (level: string, category: string, index: number) =>
    `jlpt-${level.toLowerCase()}-${category}-${index}`;

export const JLPT_PRACTICE_EXAMS: PracticeExam[] = [
    // --- N4 VOCABULARY ---
    {
        id: "jlpt-n4-vocabulary-1",
        title: "Đề luyện tập N4 - Từ vựng 1",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: "jlpt-n4-vocabulary-2",
        title: "Đề luyện tập N4 - Từ vựng 2",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: "jlpt-n4-vocabulary-3",
        title: "Đề luyện tập N4 - Từ vựng 3",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: "jlpt-n4-vocabulary-4",
        title: "Đề luyện tập N4 - Từ vựng 4",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 108,
        duration: 25,
        difficulty: "Dễ"
    },
    // --- N4 KANJI ---
    {
        id: "jlpt-n4-kanji-1",
        title: "Luyện tập N4 - Kanji 1 (Bài 26)",
        level: "N4",
        category: "kanji",
        totalQuestions: 150,
        duration: 45,
        difficulty: "Trung bình"
    },
];

