import html2pdf from 'html2pdf.js';

export interface Question {
  id: number;
  section?: string;
  text_context?: string;
  question: string;
  options: string[];
  answer: string;
  explain: string;
}

// Helper to clean text but keep Japanese characters
const cleanText = (text: string): string => {
  return text
    .replace(/<u>/g, '<span style="text-decoration: underline;">')
    .replace(/<\/u>/g, '</span>')
    .replace(/（\s*）/g, '(     )')
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
  // Create HTML content
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @page {
          margin: 15mm 15mm 15mm 30mm; /* top right bottom left (3cm = 30mm) */
        }
        body {
          font-family: 'Noto Sans', 'Noto Sans JP', sans-serif;
          font-size: 11pt;
          line-height: 1.6;
          color: #000;
          position: relative;
          padding-left: 30mm; /* 3cm left margin */
          padding-right: 15mm;
          padding-top: 15mm;
          padding-bottom: 15mm;
        }
        .page-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: #f8f8f8;
          border-bottom: 2px solid #000;
          padding: 10px 30mm 5px 30mm;
          font-weight: bold;
          font-size: 12pt;
          z-index: 1000;
        }
        .page-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: #f8f8f8;
          border-top: 1px solid #ccc;
          padding: 8px 30mm;
          font-size: 9pt;
          text-align: center;
          color: #666;
          z-index: 1000;
        }
        .content {
          margin-top: 60px;
          margin-bottom: 50px;
        }
        .header {
          text-align: left;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000;
        }
        .header h1 {
          font-size: 14pt;
          font-weight: bold;
          margin: 0;
          letter-spacing: 1px;
        }
        .section-title {
          font-size: 12pt;
          font-weight: bold;
          margin-top: 20px;
          margin-bottom: 10px;
          color: #008001;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
        }
        .question {
          margin-bottom: 15px;
          page-break-inside: avoid;
        }
        .question-number {
          font-weight: bold;
          display: inline-block;
          min-width: 60px;
        }
        .question-text {
          margin-bottom: 8px;
        }
        .options {
          margin-left: 70px;
        }
        .option {
          margin-bottom: 5px;
        }
        .answer-key {
          page-break-before: always;
          margin-top: 30px;
        }
        .answer-key h2 {
          text-align: center;
          font-size: 16pt;
          font-weight: bold;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000;
        }
        .answer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          font-size: 10pt;
        }
        .answer-item {
          padding: 3px;
        }
      </style>
    </head>
    <body>
      <div class="page-header">${testName.toUpperCase()} - (${lessonRange.toUpperCase()}) - ĐỀ ${testNumber}</div>
      <div class="page-footer">Đề thi được tạo bởi tiengnhatvuive.com</div>
      
      <div class="content">
        <div class="header">
          <h1>${testName.toUpperCase()} - (${lessonRange.toUpperCase()}) - ĐỀ ${testNumber}</h1>
        </div>
  `;

  // Group questions by section
  let currentSection = '';
  questions.forEach((q, idx) => {
    // Section header
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += `<div class="section-title">${q.section}</div>`;
    }

    // Question
    const questionText = cleanText(q.question);
    html += `
      <div class="question">
        <div class="question-text">
          <span class="question-number">Câu ${idx + 1}:</span>
          ${questionText}
        </div>
        <div class="options">
    `;

    // Options
    const optionLabels = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      html += `<div class="option">${optionLabels[i]}. ${cleanText(opt)}</div>`;
    });

    html += `
        </div>
      </div>
    `;
  });

  // Answer Key
  html += `
    <div class="answer-key">
      <h2>ĐÁP ÁN</h2>
      <div class="answer-grid">
  `;

  const optionLabels = ['A', 'B', 'C', 'D'];
  questions.forEach((q, idx) => {
    const answerIndex = q.options.findIndex(opt => opt === q.answer);
    const answerLabel = optionLabels[answerIndex] || '?';
    html += `<div class="answer-item">${idx + 1}. ${answerLabel}</div>`;
  });

  html += `
      </div>
    </div>
    </body>
    </html>
  `;

  // Generate PDF
  const element = document.createElement('div');
  element.innerHTML = html;

  const opt = {
    margin: 0,
    filename: `${testName.replace(/\s+/g, '_')}_${lessonRange.replace(/\s+/g, '_')}_De_${testNumber}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
};
