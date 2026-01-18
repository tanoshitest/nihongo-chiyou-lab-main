const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const kanjiDB = {
    '桜': {
        kanji: '桜', onyomi: 'オウ', kunyomi: 'さくら', meaning: 'Hoa anh đào', strokes: 10, jlpt: 'N3',
        radicals: '木 (cây)',
        components: [{ char: '木', meaning: 'cây' }, { char: 'ツ', meaning: 'hạt' }, { char: '女', meaning: 'nữ' }],
        mnemonic: 'Cây (木) anh đào nở hoa đẹp như người con gái (女).',
        exampleSentences: [
            { jp: '桜が咲きます。', vn: 'Hoa anh đào nở.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '咲', reading: 'さ' }] },
            { jp: '桜並木', vn: 'Hàng cây anh đào.', furigana: [{ kanji: '桜並木', reading: 'さくらなみき' }] },
            { jp: '山桜', vn: 'Hoa anh đào núi.', furigana: [{ kanji: '山桜', reading: 'やまざくら' }] },
            { jp: '夜桜', vn: 'Hoa anh đào đêm.', furigana: [{ kanji: '夜桜', reading: 'よざくら' }] },
            { jp: '桜色', vn: 'Màu hoa anh đào.', furigana: [{ kanji: '桜色', reading: 'さくらいろ' }] }
        ]
    },
    '山': {
        kanji: '山', onyomi: 'サン', kunyomi: 'やま', meaning: 'Núi', strokes: 3, jlpt: 'N5',
        radicals: '山 (núi)',
        components: [{ char: '山', meaning: 'núi' }],
        mnemonic: 'Hình ngọn núi với 3 đỉnh.',
        exampleSentences: [
            { jp: '富士山', vn: 'Núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] },
            { jp: '登山', vn: 'Leo núi.', furigana: [{ kanji: '登山', reading: 'とざん' }] },
            { jp: '火山', vn: 'Núi lửa.', furigana: [{ kanji: '火山', reading: 'かざん' }] },
            { jp: '山道', vn: 'Đường núi.', furigana: [{ kanji: '山道', reading: 'やまみち' }] },
            { jp: '山登り', vn: 'Leo núi.', furigana: [{ kanji: '山登', reading: 'やまのぼ' }] }
        ]
    },
    '町': {
        kanji: '町', onyomi: 'チョウ', kunyomi: 'まち', meaning: 'Thị trấn, khu phố', strokes: 7, jlpt: 'N4',
        radicals: '田 (ruộng)',
        components: [{ char: '田', meaning: 'ruộng' }, { char: '丁', meaning: 'đinh/khu' }],
        mnemonic: 'Khu vực (丁) cạnh ruộng (田) là thị trấn (町).',
        exampleSentences: [
            { jp: 'にぎやかな町', vn: 'Thị trấn náo nhiệt.', furigana: [{ kanji: '町', reading: 'まち' }] },
            { jp: '下町', vn: 'Khu phố cổ/bình dân.', furigana: [{ kanji: '下町', reading: 'したまち' }] },
            { jp: '町長', vn: 'Thị trưởng.', furigana: [{ kanji: '町長', reading: 'ちょうちょう' }] },
            { jp: '町中', vn: 'Trong phố.', furigana: [{ kanji: '町中', reading: 'まちなか' }] },
            { jp: '港町', vn: 'Phố cảng.', furigana: [{ kanji: '港町', reading: 'みなとまち' }] }
        ]
    },
    '食': {
        kanji: '食', onyomi: 'ショク', kunyomi: 'た.べる', meaning: 'Ăn, thực phẩm', strokes: 9, jlpt: 'N5',
        radicals: '食 (thực)',
        components: [{ char: '𠆢', meaning: 'nhân' }, { char: '良', meaning: 'lương' }],
        mnemonic: 'Con người (𠆢) tốt (良) thì biết quý trọng lương thực (食).',
        exampleSentences: [
            { jp: '食べ物', vn: 'Đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
            { jp: '食堂', vn: 'Nhà ăn.', furigana: [{ kanji: '食堂', reading: 'しょくどう' }] },
            { jp: '食事', vn: 'Bữa ăn.', furigana: [{ kanji: '食事', reading: 'しょくじ' }] },
            { jp: '定食', vn: 'Suất ăn.', furigana: [{ kanji: '定食', reading: 'ていしょく' }] },
            { jp: '和食', vn: 'Món ăn Nhật.', furigana: [{ kanji: '和食', reading: 'わしょく' }] }
        ]
    },
    '物': {
        kanji: '物', onyomi: 'ブツ, モツ', kunyomi: 'もの', meaning: 'Vật', strokes: 8, jlpt: 'N5',
        radicals: '牛 (bò)',
        components: [{ char: '牛', meaning: 'bò' }, { char: '勿', meaning: 'chớ' }],
        mnemonic: 'Đừng (勿) coi con bò (牛) là một vật (物) vô tri.',
        exampleSentences: [
            { jp: '食べ物', vn: 'Đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
            { jp: '荷物', vn: 'Hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }] },
            { jp: '動物', vn: 'Động vật.', furigana: [{ kanji: '動物', reading: 'どうぶつ' }] },
            { jp: '生物', vn: 'Sinh vật.', furigana: [{ kanji: '生物', reading: 'せいぶつ' }] },
            { jp: '見物', vn: 'Thăm quan.', furigana: [{ kanji: '見物', reading: 'けんぶつ' }] }
        ]
    },
    '車': {
        kanji: '車', onyomi: 'シャ', kunyomi: 'くるま', meaning: 'Xe', strokes: 7, jlpt: 'N5',
        radicals: '車 (xe)',
        components: [{ char: '車', meaning: 'xe' }],
        mnemonic: 'Hình chiếc xe kéo nhìn từ trên xuống.',
        exampleSentences: [
            { jp: '自動車', vn: 'Ô tô.', furigana: [{ kanji: '自動車', reading: 'じどうしゃ' }] },
            { jp: '電車', vn: 'Tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ' }] },
            { jp: '自転車', vn: 'Xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ' }] },
            { jp: '車椅子', vn: 'Xe lăn.', furigana: [{ kanji: '車椅子', reading: 'くるまいす' }] },
            { jp: '駐車場', vn: 'Bãi đậu xe.', furigana: [{ kanji: '駐車場', reading: 'ちゅうしゃじょう' }] }
        ]
    },
    '所': {
        kanji: '所', onyomi: 'ショ', kunyomi: 'ところ', meaning: 'Nơi chốn, địa điểm', strokes: 8, jlpt: 'N4',
        radicals: '戸 (cửa)',
        components: [{ char: '戸', meaning: 'cửa' }, { char: '斤', meaning: 'rìu' }],
        mnemonic: 'Chỗ (所) để cái rìu (斤) là sau cánh cửa (戸).',
        exampleSentences: [
            { jp: '場所', vn: 'Địa điểm.', furigana: [{ kanji: '場所', reading: 'ばしょ' }] },
            { jp: '近所', vn: 'Hàng xóm/Vùng lân cận.', furigana: [{ kanji: '近所', reading: 'きんじょ' }] },
            { jp: '住所', vn: 'Địa chỉ.', furigana: [{ kanji: '住所', reading: 'じゅうしょ' }] },
            { jp: '研究所', vn: 'Viện nghiên cứu.', furigana: [{ kanji: '研究所', reading: 'けんきゅうじょ' }] },
            { jp: '台所', vn: 'Nhà bếp.', furigana: [{ kanji: '台所', reading: 'だいどころ' }] }
        ]
    },
    '寮': {
        kanji: '寮', onyomi: 'リョウ', kunyomi: '', meaning: 'Ký túc xá', strokes: 15, jlpt: 'N3',
        radicals: '宀 (miên)',
        components: [{ char: '宀', meaning: 'nhà' }, { char: '尞', meaning: 'liêu' }],
        mnemonic: 'Ngôi nhà (宀) lớn (尞) dành cho nhiều người ở là ký túc xá (寮).',
        exampleSentences: [
            { jp: '学生寮', vn: 'Ký túc xá sinh viên.', furigana: [{ kanji: '学生寮', reading: 'がくせいりょう' }] },
            { jp: '社員寮', vn: 'Ký túc xá nhân viên.', furigana: [{ kanji: '社員寮', reading: 'しゃいんりょう' }] },
            { jp: '独身寮', vn: 'Ký túc xá độc thân.', furigana: [{ kanji: '独身寮', reading: 'どくしんりょう' }] },
            { jp: '寮長', vn: 'Trưởng ký túc xá.', furigana: [{ kanji: '寮長', reading: 'りょうちょう' }] },
            { jp: '寮生活', vn: 'Đời sống ký túc xá.', furigana: [{ kanji: '寮生活', reading: 'りょうせいかつ' }] }
        ]
    },
    '勉': {
        kanji: '勉', onyomi: 'ベン', kunyomi: 'つと.める', meaning: 'Cố gắng, miễn cưỡng', strokes: 10, jlpt: 'N4',
        radicals: '力 (lực)',
        components: [{ char: '免', meaning: 'miễn' }, { char: '力', meaning: 'lực' }],
        mnemonic: 'Dùng sức lực (力) để làm việc mình muốn miễn (免) là sự cố gắng (勉).',
        exampleSentences: [
            { jp: '勉強', vn: 'Học tập.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }] },
            { jp: '勤勉な', vn: 'Cần cù/Chăm chỉ.', furigana: [{ kanji: '勤勉', reading: 'きんべん' }] },
            { jp: 'ガリ勉', vn: 'Mọt sách (học gạo).', furigana: [{ kanji: '勉', reading: 'べん' }] },
            { jp: '勉強家', vn: 'Người ham học.', furigana: [{ kanji: '勉強家', reading: 'べんきょうか' }] },
            { jp: '勉強不足', vn: 'Thiếu học/Thiếu kinh nghiệm.', furigana: [{ kanji: '勉強不足', reading: 'べんきょうぶそく' }] }
        ]
    },
    '強': {
        kanji: '強', onyomi: 'キョウ, ゴウ', kunyomi: 'つよ.い', meaning: 'Mạnh, cường', strokes: 11, jlpt: 'N4',
        radicals: '弓 (cung)',
        components: [{ char: '弓', meaning: 'cung' }, { char: 'ム', meaning: 'tư' }, { char: '虫', meaning: 'côn trùng' }],
        mnemonic: 'Cây cung (弓) bắn con sâu (虫) mạnh mẽ (強).',
        exampleSentences: [
            { jp: '強い風', vn: 'Gió mạnh.', furigana: [{ kanji: '強', reading: 'つよ' }, { kanji: '風', reading: 'かぜ' }] },
            { jp: '勉強', vn: 'Học tập.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }] },
            { jp: '強調', vn: 'Nhấn mạnh.', furigana: [{ kanji: '強調', reading: 'きょうちょう' }] },
            { jp: '強盗', vn: 'Cướp.', furigana: [{ kanji: '強盗', reading: 'ごうとう' }] },
            { jp: '強力な', vn: 'Hùng mạnh.', furigana: [{ kanji: '強力', reading: 'きょうりょく' }] }
        ]
    },
    '生': {
        kanji: '生', onyomi: 'セイ, ショウ', kunyomi: 'い.きる, う.まれる', meaning: 'Sống, sinh', strokes: 5, jlpt: 'N5',
        radicals: '生 (sinh)',
        components: [{ char: '生', meaning: 'sinh' }],
        mnemonic: 'Mầm cây vươn lên từ đất.',
        exampleSentences: [
            { jp: '生活', vn: 'Cuộc sống.', furigana: [{ kanji: '生活', reading: 'せいかつ' }] },
            { jp: '学生', vn: 'Sinh viên.', furigana: [{ kanji: '学生', reading: 'がくせい' }] },
            { jp: '先生', vn: 'Giáo viên.', furigana: [{ kanji: '先生', reading: 'せんせい' }] },
            { jp: '誕生日', vn: 'Sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび' }] },
            { jp: '一生', vn: 'Một đời.', furigana: [{ kanji: '一生', reading: 'いっしょう' }] }
        ]
    },
    '活': {
        kanji: '活', onyomi: 'カツ', kunyomi: '', meaning: 'Hoạt, sống động', strokes: 9, jlpt: 'N3',
        radicals: '水 (thủy)',
        components: [{ char: '氵', meaning: 'nước' }, { char: '舌', meaning: 'lưỡi' }],
        mnemonic: 'Cái lưỡi (舌) có nước (氵) thì mới hoạt động (活) linh hoạt được.',
        exampleSentences: [
            { jp: '生活', vn: 'Cuộc sống.', furigana: [{ kanji: '生活', reading: 'せいかつ' }] },
            { jp: '活動', vn: 'Hoạt động.', furigana: [{ kanji: '活動', reading: 'かつどう' }] },
            { jp: '活気', vn: 'Sức sống/Sôi nổi.', furigana: [{ kanji: '活気', reading: 'かっき' }] },
            { jp: '活用', vn: 'Sử dụng/Ứng dụng.', furigana: [{ kanji: '活用', reading: 'かつよう' }] },
            { jp: '部活', vn: 'Hoạt động CLB.', furigana: [{ kanji: '部活', reading: 'ぶかつ' }] }
        ]
    },
    '仕': {
        kanji: '仕', onyomi: 'シ, ジ', kunyomi: 'つか.える', meaning: 'Phục vụ, làm việc', strokes: 5, jlpt: 'N4',
        radicals: '人 (người)',
        components: [{ char: 'イ', meaning: 'người' }, { char: '士', meaning: 'sĩ quan' }],
        mnemonic: 'Người (イ) sĩ quan (士) phục vụ (仕) đất nước.',
        exampleSentences: [
            { jp: '仕事', vn: 'Công việc.', furigana: [{ kanji: '仕事', reading: 'しごと' }] },
            { jp: '仕方', vn: 'Cách làm.', furigana: [{ kanji: '仕方', reading: 'しかた' }] },
            { jp: '仕上げる', vn: 'Hoàn thiện.', furigana: [{ kanji: '仕上', reading: 'しあ' }] },
            { jp: '仕組み', vn: 'Cơ cấu/Tổ chức.', furigana: [{ kanji: '仕組', reading: 'しく' }] },
            { jp: 'ご奉仕', vn: 'Phục vụ (giá rẻ).', furigana: [{ kanji: '奉仕', reading: 'ほうし' }] }
        ]
    },
    '事': {
        kanji: '事', onyomi: 'ジ', kunyomi: 'こと', meaning: 'Việc, sự việc', strokes: 8, jlpt: 'N4',
        radicals: '亅 (quyết)',
        components: [{ char: '口', meaning: 'miệng' }, { char: '亅', meaning: 'quyết' }], // Simplified
        mnemonic: 'Miệng (口) nói quyết (亅) định công việc (事).',
        exampleSentences: [
            { jp: '仕事', vn: 'Công việc.', furigana: [{ kanji: '仕事', reading: 'しごと' }] },
            { jp: '食事', vn: 'Bữa ăn.', furigana: [{ kanji: '食事', reading: 'しょくじ' }] },
            { jp: '用事', vn: 'Việc bận.', furigana: [{ kanji: '用事', reading: 'ようじ' }] },
            { jp: '事故', vn: 'Tai nạn.', furigana: [{ kanji: '事故', reading: 'じこ' }] },
            { jp: '大事な', vn: 'Quan trọng.', furigana: [{ kanji: '大事', reading: 'だいじ' }] }
        ]
    },
    '富': {
        kanji: '富', onyomi: 'フ', kunyomi: 'とみ', meaning: 'Giàu có, phú', strokes: 12, jlpt: 'N3',
        radicals: '宀 (miên)',
        components: [{ char: '宀', meaning: 'nhà' }, { char: '畐', meaning: 'đầy' }],
        mnemonic: 'Trong nhà (宀) đầy (畐) của cải là giàu có (富).',
        exampleSentences: [{ jp: '富士山', vn: 'Núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] }]
    },
    '士': {
        kanji: '士', onyomi: 'シ', kunyomi: '', meaning: 'Sĩ quan, kẻ sĩ', strokes: 3, jlpt: 'N4',
        radicals: '士 (sĩ)',
        components: [{ char: '士', meaning: 'sĩ' }],
        mnemonic: 'Người đàn ông đứng thẳng.',
        exampleSentences: [{ jp: '富士山', vn: 'Núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] }]
    },
    '琵': { kanji: '琵', onyomi: 'ビ', kunyomi: '', meaning: 'Tỳ (trong tỳ bà)', strokes: 12, jlpt: 'N1', radicals: '比', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '琶': { kanji: '琶', onyomi: 'ワ', kunyomi: '', meaning: 'Bà (trong tỳ bà)', strokes: 12, jlpt: 'N1', radicals: '巴', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '湖': { kanji: '湖', onyomi: 'コ', kunyomi: 'みずうみ', meaning: 'Hồ', strokes: 12, jlpt: 'N3', radicals: '水', exampleSentences: [{ jp: '琵琶湖', vn: 'Hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] }] },
    '金': { kanji: '金', onyomi: 'キン', kunyomi: 'かね', meaning: 'Vàng', strokes: 8, jlpt: 'N5', radicals: '金', exampleSentences: [{ jp: '金閣寺', vn: 'Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] }] },
    '閣': { kanji: '閣', onyomi: 'カク', kunyomi: '', meaning: 'Gác, lầu', strokes: 14, jlpt: 'N2', radicals: '門', exampleSentences: [{ jp: '金閣寺', vn: 'Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] }] },
    '寺': { kanji: '寺', onyomi: 'ジ', kunyomi: 'てら', meaning: 'Chùa', strokes: 6, jlpt: 'N3', radicals: '寸', exampleSentences: [{ jp: '金閣寺', vn: 'Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] }] }
};

const lesson8Words = {
    'さくら': ['桜'],
    'やま': ['山'],
    'まち': ['町'],
    'たべもの': ['食', '物'],
    'くるま': ['車'],
    'ところ': ['所'],
    'りょう': ['寮'],
    'べんきょう': ['勉', '強'],
    'せいかつ': ['生', '活'],
    'おしごと': ['仕', '事'],
    'ふじさん': ['富', '士', '山'],
    'びわこ': ['琵', '琶', '湖'],
    'きんかくじ': ['金', '閣', '寺']
};

const lines = content.split('\n');
const lesson8StartPattern = /const lesson8Data: LessonDetail = \{/;
const lesson9StartPattern = /const lesson9Data: LessonDetail = \{/;
let inLesson8 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson8StartPattern.test(line)) {
        inLesson8 = true;
    }
    if (lesson9StartPattern.test(line)) {
        inLesson8 = false;
    }

    if (inLesson8 && /vocabulary: \[/.test(line)) {
        inVocab = true;
    }
    if (inLesson8 && /^\s{2}\],?$/.test(line)) {
        inVocab = false;
    }

    if (inLesson8 && inVocab) {
        const match = line.match(/word: '([^']+)'/);
        if (match) {
            const word = match[1];
            if (lesson8Words[word]) {
                const targetKeys = lesson8Words[word];
                const detailsList = targetKeys.map(key => kanjiDB[key]).filter(x => x);

                if (detailsList.length > 0) {
                    const jsonStr = JSON.stringify(detailsList, null, 10).replace(/\n/g, '\n      ');
                    if (!line.includes('kanjiDetails:')) {
                        const lineWithoutClosing = line.trim().replace(/},?$/, '').replace(/\}$/, '');
                        const newLine = lineWithoutClosing + `, kanjiDetails: ${jsonStr} },`;
                        lines[i] = newLine;
                        console.log(`Updated ${word}`);
                    }
                }
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Update complete.');
