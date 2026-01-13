export interface PracticeExam {
    id: string;
    title: string;
    level: "N5" | "N4" | "N3" | "N2" | "N1";
    category: "kanji" | "vocabulary" | "grammar" | "reading" | "listening";
    totalQuestions: number;
    duration: number; // in minutes
    difficulty: "Dễ" | "Trung bình" | "Khó";
}

// Helper to generate IDs
const generateId = (level: string, category: string, index: number) =>
    `jlpt-${level.toLowerCase()}-${category}-${index}`;

export const JLPT_PRACTICE_EXAMS: PracticeExam[] = [
    // --- N5 KANJI ---
    {
        id: generateId("N5", "kanji", 1),
        title: "Đề luyện tập N5 - Kanji 1",
        level: "N5",
        category: "kanji",
        totalQuestions: 15,
        duration: 15,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "kanji", 2),
        title: "Đề luyện tập N5 - Kanji 2",
        level: "N5",
        category: "kanji",
        totalQuestions: 15,
        duration: 15,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "kanji", 3),
        title: "Đề luyện tập N5 - Kanji 3",
        level: "N5",
        category: "kanji",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "kanji", 4),
        title: "Đề luyện tập N5 - Kanji 4",
        level: "N5",
        category: "kanji",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "kanji", 5),
        title: "Đề luyện tập N5 - Kanji 5",
        level: "N5",
        category: "kanji",
        totalQuestions: 25,
        duration: 25,
        difficulty: "Khó"
    },

    // --- N5 VOCABULARY ---
    {
        id: generateId("N5", "vocabulary", 1),
        title: "Đề luyện tập N5 - Từ vựng 1",
        level: "N5",
        category: "vocabulary",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "vocabulary", 2),
        title: "Đề luyện tập N5 - Từ vựng 2",
        level: "N5",
        category: "vocabulary",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "vocabulary", 3),
        title: "Đề luyện tập N5 - Từ vựng 3",
        level: "N5",
        category: "vocabulary",
        totalQuestions: 25,
        duration: 25,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "vocabulary", 4),
        title: "Đề luyện tập N5 - Từ vựng 4",
        level: "N5",
        category: "vocabulary",
        totalQuestions: 25,
        duration: 25,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "vocabulary", 5),
        title: "Đề luyện tập N5 - Từ vựng 5",
        level: "N5",
        category: "vocabulary",
        totalQuestions: 30,
        duration: 30,
        difficulty: "Khó"
    },

    // --- N5 GRAMMAR ---
    {
        id: generateId("N5", "grammar", 1),
        title: "Đề luyện tập N5 - Ngữ pháp 1",
        level: "N5",
        category: "grammar",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "grammar", 2),
        title: "Đề luyện tập N5 - Ngữ pháp 2",
        level: "N5",
        category: "grammar",
        totalQuestions: 20,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "grammar", 3),
        title: "Đề luyện tập N5 - Ngữ pháp 3",
        level: "N5",
        category: "grammar",
        totalQuestions: 25,
        duration: 25,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "grammar", 4),
        title: "Đề luyện tập N5 - Ngữ pháp 4",
        level: "N5",
        category: "grammar",
        totalQuestions: 25,
        duration: 25,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "grammar", 5),
        title: "Đề luyện tập N5 - Ngữ pháp 5",
        level: "N5",
        category: "grammar",
        totalQuestions: 30,
        duration: 30,
        difficulty: "Khó"
    },

    // --- N5 READING ---
    {
        id: generateId("N5", "reading", 1),
        title: "Đề luyện tập N5 - Đọc hiểu 1",
        level: "N5",
        category: "reading",
        totalQuestions: 10,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "reading", 2),
        title: "Đề luyện tập N5 - Đọc hiểu 2",
        level: "N5",
        category: "reading",
        totalQuestions: 10,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "reading", 3),
        title: "Đề luyện tập N5 - Đọc hiểu 3",
        level: "N5",
        category: "reading",
        totalQuestions: 15,
        duration: 30,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "reading", 4),
        title: "Đề luyện tập N5 - Đọc hiểu 4",
        level: "N5",
        category: "reading",
        totalQuestions: 15,
        duration: 30,
        difficulty: "Trung bình"
    },
    {
        id: generateId("N5", "reading", 5),
        title: "Đề luyện tập N5 - Đọc hiểu 5",
        level: "N5",
        category: "reading",
        totalQuestions: 20,
        duration: 40,
        difficulty: "Khó"
    },

    // --- N5 LISTENING ---
    {
        id: generateId("N5", "listening", 1),
        title: "Đề luyện tập N5 - Nghe hiểu 1",
        level: "N5",
        category: "listening",
        totalQuestions: 10,
        duration: 20,
        difficulty: "Dễ"
    },
    {
        id: generateId("N5", "listening", 2),
        title: "Đề luyện tập N5 - Nghe hiểu 2",
        level: "N5",
        category: "listening",
        totalQuestions: 10,
        duration: 20,
        difficulty: "Trung bình"
    },

    // Other levels placeholders
    { id: generateId("N4", "kanji", 1), title: "Đề luyện tập N4 - Kanji 1", level: "N4", category: "kanji", totalQuestions: 25, duration: 25, difficulty: "Trung bình" },
    { id: generateId("N4", "vocabulary", 1), title: "Đề luyện tập N4 - Từ vựng 1", level: "N4", category: "vocabulary", totalQuestions: 30, duration: 25, difficulty: "Trung bình" },
    { id: generateId("N3", "vocabulary", 1), title: "Đề luyện tập N3 - Từ vựng 1", level: "N3", category: "vocabulary", totalQuestions: 30, duration: 25, difficulty: "Trung bình" },
];
