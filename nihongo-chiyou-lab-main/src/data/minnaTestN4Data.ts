export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explain: string;
    section?: string;
    text_context?: string;
}

export interface TestSuite {
    [key: number]: Question[];
}

export interface TestData {
    kanjiTests: TestSuite;
    grammarTests: TestSuite;
}

// Generate demo questions for a specific test ID and type
const generateDemoQuestions = (testId: number, type: 'Kanji' | 'Grammar', examNum: number): Question[] => {
    const isKanji = type === 'Kanji';
    return Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        question: isKanji
            ? `[Demo] Câu hỏi ${type} ${i + 1} cho Test ${testId} (Đề ${examNum})`
            : `[Demo] Câu hỏi Ngữ pháp ${i + 1} cho Test ${testId} (Đề ${examNum}) _____.`,
        options: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        answer: "Lựa chọn A",
        explain: `Giải thích chi tiết cho câu hỏi ${i + 1} của Test ${testId}.\n\nĐây là dữ liệu mẫu.`,
        section: i < 5 ? "Phần 1: Cơ bản" : "Phần 2: Nâng cao"
    }));
};

// Map of Test ID to Test Data
export const TEST_DATA_N4: Record<number, TestData> = {};

// Initialize data for Tests 13 through 25
const startTestId = 13;
const endTestId = 25;

for (let i = startTestId; i <= endTestId; i++) {
    TEST_DATA_N4[i] = {
        kanjiTests: {
            1: generateDemoQuestions(i, 'Kanji', 1),
            2: generateDemoQuestions(i, 'Kanji', 2),
            3: generateDemoQuestions(i, 'Kanji', 3),
        },
        grammarTests: {
            1: generateDemoQuestions(i, 'Grammar', 1),
            2: generateDemoQuestions(i, 'Grammar', 2),
            3: generateDemoQuestions(i, 'Grammar', 3),
        }
    };
}
