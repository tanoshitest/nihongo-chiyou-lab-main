import jsPDF from 'jspdf';

export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

// Helper to strip HTML tags and convert special formatting
const cleanText = (text: string): string => {
    return text
        .replace(/<u>/g, '')
        .replace(/<\/u>/g, '')
        .replace(/<br>/g, '\n')
        .replace(/&nbsp;/g, ' ')
        .replace(/（\s*）/g, '(   )')
        .replace(/\[([^\|]+)\|([^\|]+)\|([^\]]+)\]/g, '$1') // Extract kanji from [kanji|reading|meaning]
        .replace(/\[([^\|]+)\|([^\]]+)\]/g, '$1') // Extract kanji from [kanji|reading]
        .replace(/\[([^\|]+)\|\|([^\]]+)\]/g, '$1'); // Extract text from [text||meaning]
};

export const generateTestPDF = (
    questions: Question[],
    testName: string,    // "Kiểm tra từ vựng" or "Kiểm tra ngữ pháp"
    lessonRange: string, // "Bài 1 - 2"
    testNumber: number   // 1, 2, 3
) => {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const lineHeight = 6;
    let y = margin;

    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    const title = `${testName.toUpperCase()} - (${lessonRange.toUpperCase()})`;
    const titleWidth = doc.getTextWidth(title);
    doc.text(title, (pageWidth - titleWidth) / 2, y);

    y += 10;
    doc.setFontSize(16);
    const subtitle = `DE ${testNumber}`;
    const subtitleWidth = doc.getTextWidth(subtitle);
    doc.text(subtitle, (pageWidth - subtitleWidth) / 2, y);

    y += 12;
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    // Questions
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');

    questions.forEach((q, idx) => {
        // Check if we need a new page
        if (y > pageHeight - 40) {
            doc.addPage();
            y = margin;
        }

        // Section header (if it changes)
        if (idx === 0 || (idx > 0 && questions[idx - 1].section !== q.section)) {
            if (q.section) {
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                doc.text(q.section, margin, y);
                y += lineHeight + 2;
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11);
            }
        }

        // Question number and text
        doc.setFont('helvetica', 'bold');
        const questionNum = `Cau ${idx + 1}: `;
        doc.text(questionNum, margin, y);

        doc.setFont('helvetica', 'normal');
        const questionText = cleanText(q.question);
        const questionLines = doc.splitTextToSize(questionText, pageWidth - margin * 2 - 15);
        doc.text(questionLines, margin + 15, y);
        y += questionLines.length * lineHeight;

        // Options
        const optionLabels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, i) => {
            if (y > pageHeight - 20) {
                doc.addPage();
                y = margin;
            }
            const optionText = `  ${optionLabels[i]}. ${cleanText(opt)}`;
            const optionLines = doc.splitTextToSize(optionText, pageWidth - margin * 2 - 5);
            doc.text(optionLines, margin + 5, y);
            y += optionLines.length * lineHeight;
        });

        y += 3; // Space between questions
    });

    // Answer Key on new page
    doc.addPage();
    y = margin;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    const answerTitle = 'DAP AN';
    const answerTitleWidth = doc.getTextWidth(answerTitle);
    doc.text(answerTitle, (pageWidth - answerTitleWidth) / 2, y);

    y += 10;
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Print answers in 4 columns
    const optionLabels = ['A', 'B', 'C', 'D'];
    const columnWidth = (pageWidth - margin * 2) / 4;

    questions.forEach((q, idx) => {
        if (y > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }

        const column = idx % 4;
        const x = margin + (column * columnWidth);

        const answerIndex = q.options.findIndex(opt => opt === q.answer);
        const answerLabel = optionLabels[answerIndex] || '?';
        const answerText = `${idx + 1}. ${answerLabel}`;

        doc.text(answerText, x, y);

        if (column === 3) {
            y += lineHeight;
        }
    });

    // Save PDF
    const fileName = `${testName.replace(/\s+/g, '_')}_${lessonRange.replace(/\s+/g, '_')}_De_${testNumber}.pdf`;
    doc.save(fileName);
};
