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
    // --- N5 KANJI ---
    {
        id: "practice-n5-kanji-1",
        title: "Đề luyện tập N5 - Kanji 1 (Bài 1)",
        level: "N5",
        category: "kanji",
        totalQuestions: 10,
        duration: 10,
        difficulty: "Dễ"
    },
    // Generate 49 more empty slots for N5 Kanji
    ...Array.from({ length: 49 }, (_, i) => ({
        id: `practice-n5-kanji-${i + 2}`,
        title: `Đề luyện tập N5 - Kanji ${i + 2}`,
        level: "N5" as const,
        category: "kanji" as const,
        totalQuestions: 10, // Default placeholder
        duration: 10,       // Default placeholder
        difficulty: "" as any // Hidden
    })),

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
    // Generate 45 more empty slots for N5 Vocabulary (Total 50)
    ...Array.from({ length: 45 }, (_, i) => ({
        id: generateId("N5", "vocabulary", i + 6),
        title: `Đề luyện tập N5 - Từ vựng ${i + 6}`,
        level: "N5" as const,
        category: "vocabulary" as const,
        totalQuestions: 20, // Default placeholder
        duration: 20,       // Default placeholder
        difficulty: "" as any // Hidden
    })),

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
    // Generate 45 more empty slots for N5 Grammar (Total 50)
    ...Array.from({ length: 45 }, (_, i) => ({
        id: generateId("N5", "grammar", i + 6),
        title: `Đề luyện tập N5 - Ngữ pháp ${i + 6}`,
        level: "N5" as const,
        category: "grammar" as const,
        totalQuestions: 20, // Default placeholder
        duration: 20,       // Default placeholder
        difficulty: "" as any // Hidden
    })),

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
    // Generate 45 more empty slots for N5 Reading (Total 50)
    ...Array.from({ length: 45 }, (_, i) => ({
        id: generateId("N5", "reading", i + 6),
        title: `Đề luyện tập N5 - Đọc hiểu ${i + 6}`,
        level: "N5" as const,
        category: "reading" as const,
        totalQuestions: 10, // Default placeholder
        duration: 20,       // Default placeholder
        difficulty: "" as any // Hidden
    })),

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
    // Generate 48 more empty slots for N5 Listening (Total 50)
    ...Array.from({ length: 48 }, (_, i) => ({
        id: generateId("N5", "listening", i + 3),
        title: `Đề luyện tập N5 - Nghe hiểu ${i + 3}`,
        level: "N5" as const,
        category: "listening" as const,
        totalQuestions: 10, // Default placeholder
        duration: 20,       // Default placeholder
        difficulty: "" as any // Hidden
    })),

    // --- N4 KANJI ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N4", "kanji", i + 1),
        title: `Đề luyện tập N4 - Kanji ${i + 1}`,
        level: "N4" as const,
        category: "kanji" as const,
        totalQuestions: 25,
        duration: 25,
        difficulty: "" as any
    })),

    // --- N4 VOCABULARY ---
    {
        id: generateId("N4", "vocabulary", 1),
        title: "Đề luyện tập N4 - Từ vựng 1",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: generateId("N4", "vocabulary", 2),
        title: "Đề luyện tập N4 - Từ vựng 2",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: generateId("N4", "vocabulary", 3),
        title: "Đề luyện tập N4 - Từ vựng 3",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 100,
        duration: 25,
        difficulty: "Dễ"
    },
    {
        id: generateId("N4", "vocabulary", 4),
        title: "Đề luyện tập N4 - Từ vựng 4",
        level: "N4",
        category: "vocabulary",
        totalQuestions: 108,
        duration: 25,
        difficulty: "Dễ"
    },
    ...Array.from({ length: 46 }, (_, i) => ({
        id: generateId("N4", "vocabulary", i + 5),
        title: `Đề luyện tập N4 - Từ vựng ${i + 5}`,
        level: "N4" as const,
        category: "vocabulary" as const,
        totalQuestions: 30,
        duration: 25,
        difficulty: "" as any
    })),

    // --- N4 GRAMMAR ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N4", "grammar", i + 1),
        title: `Đề luyện tập N4 - Ngữ pháp ${i + 1}`,
        level: "N4" as const,
        category: "grammar" as const,
        totalQuestions: 25,
        duration: 25,
        difficulty: "" as any
    })),

    // --- N4 READING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N4", "reading", i + 1),
        title: `Đề luyện tập N4 - Đọc hiểu ${i + 1}`,
        level: "N4" as const,
        category: "reading" as const,
        totalQuestions: 20,
        duration: 35,
        difficulty: "" as any
    })),

    // --- N4 LISTENING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N4", "listening", i + 1),
        title: `Đề luyện tập N4 - Nghe hiểu ${i + 1}`,
        level: "N4" as const,
        category: "listening" as const,
        totalQuestions: 20,
        duration: 35,
        difficulty: "" as any
    })),


    // --- N3 KANJI ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N3", "kanji", i + 1),
        title: `Đề luyện tập N3 - Kanji ${i + 1}`,
        level: "N3" as const,
        category: "kanji" as const,
        totalQuestions: 25,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N3 VOCABULARY ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N3", "vocabulary", i + 1),
        title: `Đề luyện tập N3 - Từ vựng ${i + 1}`,
        level: "N3" as const,
        category: "vocabulary" as const,
        totalQuestions: 30,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N3 GRAMMAR ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N3", "grammar", i + 1),
        title: `Đề luyện tập N3 - Ngữ pháp ${i + 1}`,
        level: "N3" as const,
        category: "grammar" as const,
        totalQuestions: 25,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N3 READING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N3", "reading", i + 1),
        title: `Đề luyện tập N3 - Đọc hiểu ${i + 1}`,
        level: "N3" as const,
        category: "reading" as const,
        totalQuestions: 20,
        duration: 40,
        difficulty: "" as any
    })),

    // --- N3 LISTENING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N3", "listening", i + 1),
        title: `Đề luyện tập N3 - Nghe hiểu ${i + 1}`,
        level: "N3" as const,
        category: "listening" as const,
        totalQuestions: 20,
        duration: 40,
        difficulty: "" as any
    })),

    // --- N2 KANJI ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N2", "kanji", i + 1),
        title: `Đề luyện tập N2 - Kanji ${i + 1}`,
        level: "N2" as const,
        category: "kanji" as const,
        totalQuestions: 25,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N2 VOCABULARY ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N2", "vocabulary", i + 1),
        title: `Đề luyện tập N2 - Từ vựng ${i + 1}`,
        level: "N2" as const,
        category: "vocabulary" as const,
        totalQuestions: 32,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N2 GRAMMAR ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N2", "grammar", i + 1),
        title: `Đề luyện tập N2 - Ngữ pháp ${i + 1}`,
        level: "N2" as const,
        category: "grammar" as const,
        totalQuestions: 22,
        duration: 45,
        difficulty: "" as any
    })),

    // --- N2 READING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N2", "reading", i + 1),
        title: `Đề luyện tập N2 - Đọc hiểu ${i + 1}`,
        level: "N2" as const,
        category: "reading" as const,
        totalQuestions: 21,
        duration: 60,
        difficulty: "" as any
    })),

    // --- N2 LISTENING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N2", "listening", i + 1),
        title: `Đề luyện tập N2 - Nghe hiểu ${i + 1}`,
        level: "N2" as const,
        category: "listening" as const,
        totalQuestions: 20,
        duration: 50,
        difficulty: "" as any
    })),

    // --- N1 KANJI ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N1", "kanji", i + 1),
        title: `Đề luyện tập N1 - Kanji ${i + 1}`,
        level: "N1" as const,
        category: "kanji" as const,
        totalQuestions: 25,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N1 VOCABULARY ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N1", "vocabulary", i + 1),
        title: `Đề luyện tập N1 - Từ vựng ${i + 1}`,
        level: "N1" as const,
        category: "vocabulary" as const,
        totalQuestions: 25,
        duration: 30,
        difficulty: "" as any
    })),

    // --- N1 GRAMMAR ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N1", "grammar", i + 1),
        title: `Đề luyện tập N1 - Ngữ pháp ${i + 1}`,
        level: "N1" as const,
        category: "grammar" as const,
        totalQuestions: 20,
        duration: 50,
        difficulty: "" as any
    })),

    // --- N1 READING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N1", "reading", i + 1),
        title: `Đề luyện tập N1 - Đọc hiểu ${i + 1}`,
        level: "N1" as const,
        category: "reading" as const,
        totalQuestions: 25,
        duration: 70,
        difficulty: "" as any
    })),

    // --- N1 LISTENING ---
    ...Array.from({ length: 50 }, (_, i) => ({
        id: generateId("N1", "listening", i + 1),
        title: `Đề luyện tập N1 - Nghe hiểu ${i + 1}`,
        level: "N1" as const,
        category: "listening" as const,
        totalQuestions: 20,
        duration: 60,
        difficulty: "" as any
    })),
];
