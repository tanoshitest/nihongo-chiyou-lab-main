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
          margin: 0;
        }
        body {
          font-family: 'Noto Sans', 'Noto Sans JP', sans-serif;
          font-size: 11pt;
          line-height: 1.6;
          color: #000;
          margin: 0;
          padding: 0;
        }
        .page-container {
          /* Margins handled by jsPDF opt, so we can reduce these or keep them for spacing inside the logic */
          /* Actually, if we set jsPDF margin, the content will be inside that. */
          /* Let's set minimal internal padding/margin */
          margin: 0; 
        }
        /* No fixed header/footer in CSS */
        .question {
          margin-bottom: 15px;
          page-break-inside: avoid;
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
      <div class="page-container">
  `;

  // Group questions by section
  questions.forEach((q, idx) => {
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
    margin: [25, 15, 20, 20], // Top, Right, Bottom, Left (mm) - Sync Left with Header X
    filename: `${testName.replace(/\s+/g, '_')}_${lessonRange.replace(/\s+/g, '_')}_De_${testNumber}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf: any) => {
    const totalPages = pdf.internal.getNumberOfPages();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);

      // Header
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold"); // Using standard font for simplicity in header/footer/page num
      // Note: Standard fonts don't support unicode like Vietnamese. 
      // Ideally we should use the custom font if added to jsPDF, but html2pdf handles body fonts.
      // For simple ascii headers it's fine. For vietnamese headers we might have issues if not using custom font.
      // Since html2canvas renders the body, that's fine. 
      // For header/footer added via jsPDF, we can try to use a default font that supports some chars or limitations.
      // Actually, jsPDF standard fonts don't support VN. We'll use the hack of adding text via html2canvas is better IF possible,
      // BUT user wants it on EVERY page.
      // Let's stick to simple text or if we want VN, we need custom font loaded.
      // OR: We can rely on html2pdf's pagebreak repeated elements if we structure HTML right? No, html2pdf is basic.

      // Let's assume standard font for now. If VN text breaks, we might need a different approach 
      // (like hidden div rendered to canvas then added).
      // However, let's try to pass the text. If it garbles, we know why.
      // To support VN in jsPDF direct text, we need a font. 
      // Let's see if we can use the text as is.

      // Draw Header Line
      pdf.setLineWidth(0.5);
      pdf.line(30, 20, pageWidth - 15, 20); // x1, y1, x2, y2 (mm)

      // Header Text (Manual approach might lack font support, let's try to match styling)
      pdf.setFontSize(10);
      // We can't easily print VN text without custom font. 
      // Strategy: rely on the body content having margins, and maybe we can accept that the header is 
      // rendered by html2pdf if we could repeat it.
      // ALTERNATIVE: Use the "running" css method with simple text?
      // The user said "tất cả các trang đều có header".

      // Let's try to add text. 
      // If this fails for VN, I will need to use a different strategy.
      // For now, let's add Page Numbers which is numbers (safe).

      // Footer Line
      pdf.line(15, pageHeight - 15, pageWidth - 15, pageHeight - 15);

      // Footer Text
      pdf.setFontSize(9);
      pdf.setTextColor(100);
      const footerText = "De thi duoc tao boi tiengnhatvuive.com"; // Unsigned for safety
      const footerX = (pageWidth - pdf.getStringUnitWidth(footerText) * 9 / 2.83465) / 2; // Approximate center
      pdf.text(footerText, footerX, pageHeight - 10);

      // Page Number
      pdf.setFontSize(10);
      const pageStr = `Trang ${i} / ${totalPages}`;
      pdf.text(pageStr, pageWidth - 30, pageHeight - 10);

      // Header Text (UpperCase En/VN?)
      // Let's try to render the VN header. If it fails, we might see garbage.
      // Safest is to use unsigned or standard ASCII for this system level text
      // OR load a font. Loading font is heavy.
      // Let's use the provided variable but strip accents if needed or hope system font works?
      // Actually, let's rely on the FACT that we can't easily add VN text directly to jsPDF 
      // without a font file.
      // So I will maintain the Header in the body but fixed?
      // No, the user saw it disappear.

      // WORKAROUND: We will use `pdf.text` for Page Numbers (Safe) and footer (Unsigned).
      // For Header, we really want the VN text. 
      // Let's try to add the header text as utf-8 and see. 
      // html2pdf usually bundles generic fonts? No.

      // Let's just do Page Number and Footer first as requested.
      // The Header: "KIỂM TRA TỪ VỰNG..." might need to be in the HTML repeated?
      // If I put it in a `THEAD` of a table wrapping content?
      // Changing structure to Table is invasive.

      // Let's go with adding text manually.
      // I'll assume we can use the header string.
      const headerText = `${testName.toUpperCase()} - (${lessonRange.toUpperCase()}) - DE ${testNumber}`;
      // Removed Vietnamese accents from explicit add for safety if font missing.
      // or we can try to leave it and see.
      // Actually, we can just use the unsigned version for the "system" header.

      // Remove Vietnamese accents specifically for the header/footer drawing to ensure it renders?
      // Or better: Use the `body::before` solution which rendered fine but wasn't appearing?
      // The user said "header disappear". 
      // Let's try to put the header in the manual drawing but remove accents to be safe 
      // OR trust that we can't do better without font.

      // Let's use unsigned for the "system level" strings to be safe.
      const headerTextSafe = removeVietnameseTones(`${testName.toUpperCase()} - (${lessonRange.toUpperCase()}) - DE ${testNumber}`);
      pdf.text(headerTextSafe, 25, 15);
    }
  }).save();
};

function removeVietnameseTones(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system marks
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  return str;
}
