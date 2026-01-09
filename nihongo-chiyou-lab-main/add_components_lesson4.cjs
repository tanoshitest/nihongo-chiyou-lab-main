
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\72b1202d-2042-46ae-a122-cf0e258a5aa3\\lesson4_vocab_kanji.ts';
const outputPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\72b1202d-2042-46ae-a122-cf0e258a5aa3\\lesson4_vocab_components.ts';

const content = fs.readFileSync(inputPath, 'utf8');

// Extract the content inside the array
const match = content.match(/export const lesson4Vocabulary = (\[[\s\S]*\]);/);
if (!match) {
    console.error('Could not find lesson4Vocabulary array');
    process.exit(1);
}

// We need to parse this. Since it's TS/JS object literal syntax (not JSON), we can't just JSON.parse.
// However, since I generated it, I know it's valid JS. I can evaluate it.
// Warning: eval is dangerous but in this controlled env it's fine for data transformation.
const lesson4Vocabulary = eval(match[1]);

const componentsMap = {
    '起': [{ char: '走', meaning: 'chạy' }, { char: '己', meaning: 'bản thân' }],
    '寝': [{ char: '宀', meaning: 'mái nhà' }, { char: '爿', meaning: 'tấm phản' }],
    '働': [{ char: '亻', meaning: 'người' }, { char: '動', meaning: 'động' }],
    '休': [{ char: '亻', meaning: 'người' }, { char: '木', meaning: 'cây' }],
    '勉': [{ char: '免', meaning: 'miễn' }, { char: '力', meaning: 'sức lực' }],
    '強': [{ char: '弓', meaning: 'cung' }, { char: 'ム', meaning: 'khư' }, { char: '虫', meaning: 'côn trùng' }],
    '終': [{ char: '糸', meaning: 'sợi tơ' }, { char: '冬', meaning: 'mùa đông' }],
    '銀': [{ char: '金', meaning: 'vàng/kim loại' }, { char: '艮', meaning: 'cấn' }],
    '行': [{ char: '彳', meaning: 'bước trái' }, { char: '亍', meaning: 'bước phải' }],
    '郵': [{ char: '垂', meaning: 'thùy' }, { char: '阝', meaning: 'ấp' }],
    '便': [{ char: '亻', meaning: 'người' }, { char: '更', meaning: 'canh' }],
    '局': [{ char: '尸', meaning: 'xác chết' }, { char: '勹', meaning: 'bao' }, { char: '口', meaning: 'miệng' }],
    '図': [{ char: '囗', meaning: 'vi' }, { char: '㐅', meaning: 'ngải' }],
    '書': [{ char: '聿', meaning: 'duật/bút' }, { char: '日', meaning: 'nhật' }],
    '館': [{ char: '食', meaning: 'thực' }, { char: '官', meaning: 'quan' }],
    '美': [{ char: '羊', meaning: 'dương/dê' }, { char: '大', meaning: 'đại/lớn' }],
    '術': [{ char: '行', meaning: 'hành' }, { char: '朮', meaning: 'truật' }],
    '今': [{ char: '人', meaning: 'người' }, { char: '亽', meaning: '?' }],
    '時': [{ char: '日', meaning: 'nhật' }, { char: '寺', meaning: 'chùa' }],
    '分': [{ char: '八', meaning: 'bát' }, { char: '刀', meaning: 'đao' }],
    '半': [{ char: '丷', meaning: 'bát' }, { char: '二', meaning: 'nhị' }, { char: '丨', meaning: 'sổ' }],
    '午': [{ char: '𠂉', meaning: 'nhân' }, { char: '十', meaning: 'thập' }],
    '前': [{ char: '䒑', meaning: 'thảo đầu' }, { char: '月', meaning: 'nguyệt' }, { char: '刂', meaning: 'đao' }],
    '後': [{ char: '彳', meaning: 'xích' }, { char: '幺', meaning: 'yêu' }, { char: '夂', meaning: 'truy' }],
    '朝': [{ char: '𠦝', meaning: 'tảo' }, { char: '月', meaning: 'nguyệt' }],
    '昼': [{ char: '尺', meaning: 'thước' }, { char: '旦', meaning: 'đán' }],
    '晩': [{ char: '日', meaning: 'nhật' }, { char: '免', meaning: 'miễn' }],
    '夜': [{ char: '亠', meaning: 'đầu' }, { char: '亻', meaning: 'người' }, { char: '夂', meaning: 'truy' }],
    '毎': [{ char: '毋', meaning: 'vô' }],
    '日': [{ char: '日', meaning: 'nhật' }],
    '月': [{ char: '月', meaning: 'nguyệt' }],
    '火': [{ char: '火', meaning: 'hỏa' }],
    '水': [{ char: '水', meaning: 'thủy' }],
    '木': [{ char: '木', meaning: 'mộc' }],
    '金': [{ char: '金', meaning: 'kim' }],
    '土': [{ char: '土', meaning: 'thổ' }],
    '曜': [{ char: '日', meaning: 'nhật' }, { char: '翟', meaning: 'địch' }],
    '番': [{ char: '釆', meaning: 'biện' }, { char: '田', meaning: 'điền' }],
    '号': [{ char: '口', meaning: 'khẩu' }, { char: '丂', meaning: 'khảo' }],
    '大': [{ char: '大', meaning: 'đại' }],
    '変': [{ char: '亦', meaning: 'diệc' }, { char: '夂', meaning: 'truy' }],
    '願': [{ char: '原', meaning: 'nguyên' }, { char: '頁', meaning: 'hiệt' }],
    '何': [{ char: '亻', meaning: 'người' }, { char: '可', meaning: 'khả' }],
    '問': [{ char: '門', meaning: 'môn' }, { char: '口', meaning: 'khẩu' }],
    '合': [{ char: '𠆢', meaning: 'nhân' }, { char: '一', meaning: 'nhất' }, { char: '口', meaning: 'khẩu' }],
    '北': [{ char: '匕', meaning: 'chủy' }, { char: '匕', meaning: 'chủy' }],
    '京': [{ char: '亠', meaning: 'đầu' }, { char: '口', meaning: 'khẩu' }, { char: '小', meaning: 'tiểu' }],
    '阪': [{ char: '阝', meaning: 'phụ' }, { char: '反', meaning: 'phản' }]
};

// Process the vocabulary
lesson4Vocabulary.forEach(item => {
    if (item.kanjiDetails) {
        item.kanjiDetails.forEach(detail => {
            const kanji = detail.kanji;
            if (componentsMap[kanji]) {
                detail.components = componentsMap[kanji];
            } else {
                console.warn(`No components found for kanji: ${kanji}`);
            }
        });
    }
});

// Convert back to string
// We want to format it nicely. JSON.stringify is okay, but we want it to look like the original source code (unquoted keys if simple).
// For now, JSON.stringify is fine, but we'll strip quotes from keys to match the style if we can, or just leave them.
// The file is generated code, so standard JSON format for the array is acceptable as long as it's valid TS/JS.
// However, to match the project style better, let's try to keep it clean.
// Using util.inspect might be better but JSON.stringify is safer for valid syntax.

const outputString = `export const lesson4Vocabulary = ${JSON.stringify(lesson4Vocabulary, null, 2)};`;

fs.writeFileSync(outputPath, outputString, 'utf8');
console.log('Successfully created lesson4_vocab_components.ts');
