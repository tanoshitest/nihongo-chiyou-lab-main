export interface VocabExampleFurigana {
  kanji: string;
  reading: string;
  meaning: string;
}

export interface VocabularyExample {
  jp: string;
  romaji?: string;
  vn: string;
  furigana?: VocabExampleFurigana[]; // Furigana cho các Kanji trong câu
  kanjiDetails?: KanjiDetail[]; // Chi tiết Kanji để hover
}

export interface KanjiDetail {
  kanji: string;
  onyomi: string; // Âm on (âm Hán)
  kunyomi: string; // Âm kun (âm Nhật)
  meaning: string; // Nghĩa
  sinoVietnamese?: string; // Âm Hán Việt
  strokes: number; // Số nét
  jlpt: string; // Cấp độ JLPT
  radicals?: string; // Bộ thủ
  components?: { char: string; meaning: string }[]; // Các bộ thủ/chữ cấu thành
  mnemonic?: string; // Câu chuyện/Logic gợi nhớ
  examples?: string[]; // Từ vựng ví dụ
  exampleSentences?: VocabularyExample[]; // Câu ví dụ dùng Kanji này
}

export interface VocabularyItem {
  word: string;
  kanji: string;
  romaji: string;
  mean: string;
  examples?: VocabularyExample[];
  kanjiDetails?: KanjiDetail[]; // Chi tiết từng kanji trong từ
}

export interface FuriganaWord {
  kanji: string;
  reading: string;
  meaning?: string;
}

export interface GrammarExample {
  jp: string;
  vn: string;
  furigana?: FuriganaWord[]; // Các từ kanji và cách đọc
  image?: string; // Ảnh minh hoạ cho câu ví dụ
}

export interface GrammarPoint {
  pattern: string;
  explanation: string;
  example: string;
  examples?: GrammarExample[];
}

export interface KaiwaFurigana {
  kanji: string;
  reading: string;
  meaning: string;
}

export interface KaiwaLine {
  char: string;
  jp: string;
  vn: string;
  furigana?: KaiwaFurigana[]; // Furigana cho Kanji trong câu
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  metadata?: {
    vocab?: VocabularyItem;
    kanji?: KanjiDetail;
  };
}

export interface LessonDetail {
  id: number;
  title: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarPoint[];
  kaiwa: KaiwaLine[];
  kaiwaImage?: string; // Ảnh minh hoạ cho hội thoại
  quiz: QuizQuestion[];
}

export interface LessonSummary {
  id: number;
  title: string;
  description: string;
}

// Lesson summaries for listing page
export const lessonsN5: LessonSummary[] = [
  { id: 1, title: "Làm quen & Giới thiệu", description: "Học cách giới thiệu bản thân" },
  { id: 2, title: "Đồ vật xung quanh", description: "Học về các đồ vật gần xa" },
  { id: 3, title: "Mua sắm", description: "Hỏi giá, mua bán" },
  { id: 4, title: "Thời gian & Lịch trình", description: "Giờ giấc, ngày tháng" },
  { id: 5, title: "Di chuyển", description: "Đi lại bằng phương tiện" },
  { id: 6, title: "Hành động hàng ngày", description: "Các hoạt động thường ngày" },
  { id: 7, title: "Cho và nhận", description: "Trao đổi quà tặng" },
  { id: 8, title: "Tính từ", description: "Mô tả người và vật" },
  { id: 9, title: "Sở thích", description: "Nói về sở thích cá nhân" },
  { id: 10, title: "Có và không có", description: "Diễn tả sự tồn tại" },
  { id: 11, title: "Đếm số lượng", description: "Cách đếm đồ vật" },
  { id: 12, title: "So sánh", description: "So sánh người và vật" },
  { id: 13, title: "Mong muốn", description: "Diễn tả điều muốn làm" },
  { id: 14, title: "Yêu cầu & Đề nghị", description: "Nhờ vả người khác" },
  { id: 15, title: "Cho phép & Cấm", description: "Được phép và không được phép" },
  { id: 16, title: "Cách sử dụng", description: "Hướng dẫn cách làm" },
  { id: 17, title: "Thể ない", description: "Phủ định động từ" },
  { id: 18, title: "Có thể làm được", description: "Diễn tả khả năng" },
  { id: 19, title: "Kinh nghiệm", description: "Nói về trải nghiệm" },
  { id: 20, title: "Thể thông thường", description: "Văn nói thường ngày" },
  { id: 21, title: "Suy nghĩ & Ý kiến", description: "Diễn đạt quan điểm" },
  { id: 22, title: "Mệnh đề quan hệ", description: "Bổ nghĩa cho danh từ" },
  { id: 23, title: "Khi... thì...", description: "Điều kiện và kết quả" },
  { id: 24, title: "Cho và nhận 2", description: "Nhận ơn huệ" },
  { id: 25, title: "Điều kiện", description: "Giả định tình huống" },
];

export const lessonsN4: LessonSummary[] = [
  { id: 26, title: "Ôn tập Sơ cấp 1", description: "Tổng hợp kiến thức" },
  { id: 27, title: "Thể khả năng", description: "Diễn tả năng lực" },
  { id: 28, title: "Vừa làm vừa", description: "Hành động đồng thời" },
  { id: 29, title: "Hoàn thành", description: "Đã làm xong việc" },
  { id: 30, title: "Chuẩn bị", description: "Làm sẵn trước" },
  { id: 31, title: "Ý định", description: "Dự định tương lai" },
  { id: 32, title: "Lời khuyên", description: "Nên và không nên" },
  { id: 33, title: "Mệnh lệnh", description: "Ra lệnh và cấm" },
  { id: 34, title: "Theo như...", description: "Dựa theo thông tin" },
  { id: 35, title: "Điều kiện 2", description: "Nếu... thì..." },
  { id: 36, title: "Mục đích", description: "Để làm gì" },
  { id: 37, title: "Thể bị động", description: "Bị người khác làm" },
  { id: 38, title: "Thể sai khiến", description: "Bắt người khác làm" },
  { id: 39, title: "Thể sai bị", description: "Bị bắt phải làm" },
  { id: 40, title: "Kính ngữ 1", description: "Nói lịch sự" },
  { id: 41, title: "Nhận từ cấp trên", description: "Được ban cho" },
  { id: 42, title: "Chuẩn bị 2", description: "Để đề phòng" },
  { id: 43, title: "Có vẻ như", description: "Phỏng đoán" },
  { id: 44, title: "Quá mức", description: "Làm quá nhiều" },
  { id: 45, title: "Trong trường hợp", description: "Điều kiện giả định" },
  { id: 46, title: "Giữa chừng", description: "Đang làm dở" },
  { id: 47, title: "Kính ngữ 2", description: "Khiêm nhường ngữ" },
  { id: 48, title: "Thể sai khiến 2", description: "Cho phép làm" },
  { id: 49, title: "Kính ngữ 3", description: "Tổng hợp kính ngữ" },
  { id: 50, title: "Tổng ôn", description: "Ôn tập toàn bộ" },
];

// Detailed data for Lesson 1
export const lesson1Data: LessonDetail = {
  id: 1,
  title: "Làm quen & Giới thiệu",
  vocabulary: [
    // Đại từ nhân xưng
    {
      word: 'わたし', kanji: '私', romaji: 'watashi', mean: 'Tôi',
      kanjiDetails: [
        {
          kanji: '私',
          onyomi: 'シ (shi)',
          kunyomi: 'わたくし (watakushi), わたし (watashi)',
          meaning: 'Tôi, riêng tư',
          sinoVietnamese: 'TƯ',
          strokes: 7,
          jlpt: 'N4',
          radicals: '禾 (lúa)',
          components: [{ char: '禾', meaning: 'lúa' }, { char: '厶', meaning: 'riêng tư' }],
          mnemonic: 'Ngày xưa lúa (禾) của mình thì mình giữ riêng (厶) cho "tôi" (私).',
          examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'],
          exampleSentences: [
            {
              jp: '私は学生です。', vn: 'Tôi là sinh viên.',
              furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
            },
            {
              jp: 'これは私の本です。', vn: 'Đây là sách của tôi.',
              furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
            },
            {
              jp: '私立大学に行きます。', vn: 'Tôi đi học trường đại học tư lập.',
              furigana: [{ kanji: '私立', reading: 'しりつ', meaning: 'TƯ LẬP' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '私生活を大切にします。', vn: 'Tôi coi trọng đời sống riêng tư.',
              furigana: [{ kanji: '私生活', reading: 'しせいかつ', meaning: 'TƯ SINH HOẠT' }, { kanji: '大切', reading: 'たいせつ', meaning: 'ĐẠI THIẾT' }]
            },
            {
              jp: '私の名前はミラーです。', vn: 'Tên của tôi là Miller.',
              furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', vn: 'Tôi là sinh viên.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }],
        },
        {
          jp: '私は日本人です。', romaji: 'Watashi wa nihonjin desu.', vn: 'Tôi là người Nhật.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }],
        },
        {
          jp: '私はベトナムから来ました。', romaji: 'Watashi wa Betonamu kara kimashita.', vn: 'Tôi đến từ Việt Nam.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }],
        },
        {
          jp: '私は25歳です。', romaji: 'Watashi wa nijuugo sai desu.', vn: 'Tôi 25 tuổi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }],
        },
        {
          jp: '私はエンジニアです。', romaji: 'Watashi wa enjinia desu.', vn: 'Tôi là kỹ sư.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }],
        },
        {
          jp: '私は毎日日本語を勉強します。', romaji: 'Watashi wa mainichi nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật mỗi ngày.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }],
        }
      ]
    },
    {
      word: 'わたしたち', kanji: '私たち', romaji: 'watashitachi', mean: 'Chúng tôi, chúng ta',
      examples: [
        {
          jp: '私たちは会社員です。', romaji: 'Watashitachi wa kaishain desu.', vn: 'Chúng tôi là nhân viên công ty.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: '私たちはIMCの社員です。', romaji: 'Watashitachi wa IMC no shain desu.', vn: 'Chúng tôi là nhân viên công ty IMC.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: '私たちは日本語を勉強します。', romaji: 'Watashitachi wa nihongo wo benkyou shimasu.', vn: 'Chúng tôi học tiếng Nhật.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '私たちはベトナム人です。', romaji: 'Watashitachi wa Betonamujin desu.', vn: 'Chúng tôi là người Việt Nam.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: '私たちは友達です。', romaji: 'Watashitachi wa tomodachi desu.', vn: 'Chúng tôi là bạn bè.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: '私たちは日本人じゃありません。', romaji: 'Watashitachi wa Nihonjin ja arimasen.', vn: 'Chúng tôi không phải là người Nhật.',
          furigana: [{ kanji: '私たち', reading: 'わたしたち', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        }
      ]
    },
    {
      word: 'あなた', kanji: '', romaji: 'anata', mean: 'Anh/chị, ông/bà, bạn (ngôi thứ II số ít)',
      examples: [
        {
          jp: 'あなたは先生ですか。', romaji: 'Anata wa sensei desu ka.', vn: 'Bạn có phải là giáo viên không?',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あなたは何歳ですか。', romaji: 'Anata wa nansai desu ka.', vn: 'Bạn bao nhiêu tuổi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: 'あなたは日本人ですか。', romaji: 'Anata wa nihonjin desu ka.', vn: 'Bạn có phải là người Nhật không?',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'あなたの名前は何ですか。', romaji: 'Anata no namae wa nan desu ka.', vn: 'Tên của bạn là gì?',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'あなたはどこから来ましたか。', romaji: 'Anata wa doko kara kimashita ka.', vn: 'Bạn đến từ đâu?',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'あなたは学生じゃありませんか。', romaji: 'Anata wa gakusei ja arimasen ka.', vn: 'Bạn không phải là học sinh à?',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        }
      ]
    },
    {
      word: 'あのひと', kanji: 'あの人', romaji: 'ano hito', mean: 'Người kia, người đó',
      kanjiDetails: [
        {
          kanji: '人',
          onyomi: 'ジン (jin), ニン (nin)',
          kunyomi: 'ひと (hito)',
          meaning: 'Người',
          sinoVietnamese: 'NHÂN',
          strokes: 2,
          jlpt: 'N5',
          radicals: '人 (người)',
          components: [{ char: '人', meaning: 'người' }],
          mnemonic: 'Hình ảnh một người đang đứng nghiêng, chống hai chân xuống đất.',
          examples: ['日本人 (にほんじん) - người Nhật', '一人 (ひとり) - một người'],
          exampleSentences: [
            {
              jp: 'あの人は誰ですか。', vn: 'Người kia là ai?',
              furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
            },
            {
              jp: 'ベトナム人は親切です。', vn: 'Người Việt Nam rất thân thiện.',
              furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
            },
            {
              jp: '部屋に三人の人がいます。', vn: 'Trong phòng có 3 người.',
              furigana: [{ kanji: '部屋', reading: 'へや', meaning: 'BỘ ỐC' }, { kanji: '三人', reading: 'さんにん', meaning: 'TAM NHÂN' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }]
            },
            {
              jp: '一人の男の子がいます。', vn: 'Có một bé trai.',
              furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '男', reading: 'おとこ', meaning: 'NAM' }, { kanji: '子', reading: 'こ', meaning: 'TỬ' }]
            },
            {
              jp: '人通りが多いです。', vn: 'Người qua lại rất đông.',
              furigana: [{ kanji: '人通', reading: 'ひとどお', meaning: 'NHÂN THÔNG' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'あの人は田中さんです。', romaji: 'Ano hito wa Tanaka-san desu.', vn: 'Người kia là anh Tanaka.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: 'あの人は医者です。', romaji: 'Ano hito wa isha desu.', vn: 'Người đó là bác sĩ.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: 'あの人はアメリカ人です。', romaji: 'Ano hito wa Amerikajin desu.', vn: 'Người đó là người Mỹ.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あの人は学生じゃありません。', romaji: 'Ano hito wa gakusei ja arimasen.', vn: 'Người đó không phải là học sinh.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        }
      ]
    },
    {
      word: 'あのかた', kanji: 'あの方', romaji: 'ano kata', mean: 'Người kia, người đó (lịch sự)',
      kanjiDetails: [
        {
          kanji: '方',
          onyomi: 'ホウ (hou)',
          kunyomi: 'かた (kata)',
          meaning: 'Hướng, vị, người (lịch sự)',
          sinoVietnamese: 'PHƯƠNG',
          strokes: 4,
          jlpt: 'N5',
          radicals: '方 (phương)',
          components: [{ char: '方', meaning: 'phương' }],
          mnemonic: 'Vẽ một cái cày ngày xưa, dùng để chỉ phương hướng canh tác trên cánh đồng.',
          examples: ['あの方 (あのかた) - vị kia', '読み方 (よみかた) - cách đọc'],
          exampleSentences: [
            {
              jp: 'あの方は先生です。', vn: 'Vị kia là giáo viên.',
              furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
            },
            {
              jp: '漢字の書き方を教えてください。', vn: 'Hãy chỉ cho tôi cách viết Kanji.',
              furigana: [{ kanji: '漢字', reading: 'かんじ', meaning: 'HÁN TỰ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
            },
            {
              jp: 'こちらの方が安いです。', vn: 'Phía này/Cái này rẻ hơn.',
              furigana: [{ kanji: '方', reading: 'ほう', meaning: 'PHƯƠNG' }, { kanji: '安', reading: 'やす', meaning: 'AN' }]
            },
            {
              jp: '夕方の四時に会いましょう。', vn: 'Hẹn gặp vào 4 giờ chiều nhé.',
              furigana: [{ kanji: '夕方', reading: 'ゆうがた', meaning: 'TỊCH PHƯƠNG' }, { kanji: '四時', reading: 'よじ', meaning: 'TỨ THỜI' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
            },
            {
              jp: '北の方角へ行きます。', vn: 'Đi về hướng Bắc.',
              furigana: [{ kanji: '北', reading: 'きた', meaning: 'BẮC' }, { kanji: '方角', reading: 'ほうがく', meaning: 'PHƯƠNG GIÁC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'あの方は山田先生です。', romaji: 'Ano kata wa Yamada sensei desu.', vn: 'Vị kia là thầy Yamada.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', vn: 'Vị kia là ai ạ?',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: 'どなた', reading: 'どなた', meaning: 'THÙY' }]
        },
        {
          jp: 'あの方は社長です。', romaji: 'Ano kata wa shachou desu.', vn: 'Vị đó là giám đốc.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }]
        },
        {
          jp: 'あの方は韓国の方です。', romaji: 'Ano kata wa Kankoku no kata desu.', vn: 'Vị đó là người Hàn Quốc.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
        },
        {
          jp: 'あの方はIMCの社員です。', romaji: 'Ano kata wa IMC no shain desu.', vn: 'Vị đó là nhân viên công ty IMC.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'あの方は銀行員じゃありません。', romaji: 'Ano kata wa ginkouin ja arimasen.', vn: 'Vị đó không phải là nhân viên ngân hàng.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        }
      ]
    },
    {
      word: 'みなさん', kanji: '皆さん', romaji: 'minasan', mean: 'Các anh chị, các ông bà, các bạn, quý vị',
      kanjiDetails: [
        {
          kanji: '皆',
          onyomi: 'カイ (kai)',
          kunyomi: 'みな (mina)',
          meaning: 'Mọi người, tất cả',
          sinoVietnamese: 'GIAI',
          strokes: 9,
          jlpt: 'N3',
          radicals: '白 (trắng)',
          components: [{ char: '比', meaning: 'so sánh' }, { char: '白', meaning: 'trắng' }],
          mnemonic: 'Tất cả mọi người (皆) cùng so sánh (比) xem ai có tâm hồn trong trắng (白) nhất.',
          examples: ['皆さん (みなさん) - mọi người', '皆無 (かいむ) - không có gì'],
          exampleSentences: [
            {
              jp: '皆さん、こんにちは。', vn: 'Chào mọi người.',
              furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }]
            },
            {
              jp: '皆でお祝いしましょう。', vn: 'Mọi người hãy cùng nhau chúc mừng nào.',
              furigana: [{ kanji: '皆', reading: 'みんな', meaning: 'GIAI' }, { kanji: '祝', reading: 'いわ', meaning: 'CHÚC' }]
            },
            {
              jp: '皆勤賞をもらいました。', vn: 'Tôi đã nhận được giải thưởng chuyên cần (đi học đủ).',
              furigana: [{ kanji: '皆勤賞', reading: 'かいきんしょう', meaning: 'GIAI CẦN THƯỞNG' }]
            },
            {
              jp: '皆で協力しましょう。', vn: 'Mọi người hãy cùng nhau hợp tác.',
              furigana: [{ kanji: '皆', reading: 'みんな', meaning: 'GIAI' }, { kanji: '協力', reading: 'きょうりょく', meaning: 'HIỆP LỰC' }]
            },
            {
              jp: 'ご家族は皆お元気ですか。', vn: 'Gia đình bạn mọi người đều khỏe chứ?',
              furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '皆', reading: 'みな', meaning: 'GIAI' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '皆さん、こんにちは。', romaji: 'Minasan, konnichiwa.', vn: 'Chào mọi người.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }]
        },
        {
          jp: '皆さんは学生ですか。', romaji: 'Minasan wa gakusei desu ka.', vn: 'Các bạn có phải là sinh viên không?',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: '皆さん、はじめまして。', romaji: 'Minasan, hajimemashite.', vn: 'Xin chào các bạn, rất hân hạnh được gặp.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }, { kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: '皆さんはどこから来ましたか。', romaji: 'Minasan wa doko kara kimashita ka.', vn: 'Các bạn đến từ đâu?',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '皆さん、どうぞよろしく。', romaji: 'Minasan, douzo yoroshiku.', vn: 'Mong các bạn giúp đỡ.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }]
        },
        {
          jp: '皆さんは日本人じゃありません。', romaji: 'Minasan wa Nihonjin ja arimasen.', vn: 'Các bạn không phải là người Nhật.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        }
      ]
    },

    // Hậu tố xưng hô
    {
      word: '～さん', kanji: '', romaji: '~san', mean: 'Anh, chị, ông, bà (hậu tố lịch sự)',
      examples: [
        {
          jp: '田中さんは会社員です。', romaji: 'Tanaka-san wa kaishain desu.', vn: 'Anh Tanaka là nhân viên công ty.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: 'ミラーさんはアメリカ人です。', romaji: 'Miraa-san wa Amerikajin desu.', vn: 'Anh Miller là người Mỹ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: '山田さんは先生です。', romaji: 'Yamada-san wa sensei desu.', vn: 'Cô Yamada là giáo viên.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '佐藤さんは銀行員です。', romaji: 'Satou-san wa ginkouin desu.', vn: 'Anh Satou là nhân viên ngân hàng.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: 'キムさんは韓国人です。', romaji: 'Kimu-san wa Kankokujin desu.', vn: 'Chị Kim là người Hàn Quốc.',
          furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }]
        },
        {
          jp: 'ワンさんは中国人です。', romaji: 'Wan-san wa Chuugokujin desu.', vn: 'Anh Wang là người Trung Quốc.',
          furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }]
        }
      ]
    },
    {
      word: '～ちゃん', kanji: '', romaji: '~chan', mean: 'Hậu tố thêm vào sau tên của trẻ em',
      examples: [
        {
          jp: 'さくらちゃんは5歳です。', romaji: 'Sakura-chan wa go sai desu.', vn: 'Bé Sakura 5 tuổi.',
          furigana: [{ kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: 'ゆきちゃんは学生です。', romaji: 'Yuki-chan wa gakusei desu.', vn: 'Bé Yuki là học sinh.',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'はなちゃんはかわいいです。', romaji: 'Hana-chan wa kawaii desu.', vn: 'Bé Hana dễ thương.',
          furigana: []
        },
        {
          jp: 'まりちゃんは日本人です。', romaji: 'Mari-chan wa Nihonjin desu.', vn: 'Bé Mari là người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'あいちゃんは3歳です。', romaji: 'Ai-chan wa san sai desu.', vn: 'Bé Ai 3 tuổi.',
          furigana: [{ kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: 'りなちゃんはどこですか。', romaji: 'Rina-chan wa doko desu ka.', vn: 'Bé Rina ở đâu vậy?',
          furigana: []
        }
      ]
    },
    {
      word: '～くん', kanji: '～君', romaji: '~kun', mean: 'Hậu tố thêm vào sau tên của em trai',
      kanjiDetails: [
        {
          kanji: '君',
          onyomi: 'クン (kun)',
          kunyomi: 'きみ (kimi)',
          meaning: 'Bạn, quân chủ, cậu',
          sinoVietnamese: 'QUÂN',
          strokes: 7,
          jlpt: 'N4',
          radicals: '口 (miệng)',
          components: [{ char: '尹', meaning: 'người quản lý' }, { char: '口', meaning: 'miệng' }],
          mnemonic: 'Vị quân chủ (君) là người dùng miệng (口) để ra lệnh cho cấp dưới (尹). Trong đời thường dùng để gọi "bạn/cậu" một cách thân mật.',
          examples: ['～君 (くん) - cậu/em', '君 (きみ) - bạn'],
          exampleSentences: [
            {
              jp: '田中君、遊びに行こう。', vn: 'Tanaka, đi chơi đi.',
              furigana: [{ kanji: '田中君', reading: 'たなかくん', meaning: 'ĐIỀN TRUNG QUÂN' }, { kanji: '遊', reading: 'あそ', meaning: 'DU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '君の瞳は美しい。', vn: 'Đôi mắt của em thật đẹp.',
              furigana: [{ kanji: '君', reading: 'きみ', meaning: 'QUÂN' }, { kanji: '瞳', reading: 'ひとみ', meaning: 'ĐỒNG' }, { kanji: '美', reading: 'うつく', meaning: 'MỸ' }]
            },
            {
              jp: '君主制の歴史を学びます。', vn: 'Học về lịch sử của chế độ quân chủ.',
              furigana: [{ kanji: '君主制', reading: 'くんしゅせい', meaning: 'QUÂN CHỦ CHẾ' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
            },
            {
              jp: '健太君はサッカーが上手です。', vn: 'Cậu Kenta đá bóng rất giỏi.',
              furigana: [{ kanji: '健太君', reading: 'けんたくん', meaning: 'KIỆN THÁI QUÂN' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
            },
            {
              jp: '君と僕は友達です。', vn: 'Cậu và tớ là bạn bè.',
              furigana: [{ kanji: '君', reading: 'きみ', meaning: 'QUÂN' }, { kanji: '僕', reading: 'ぼく', meaning: 'PHÓ' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'たけしくんは学生です。', romaji: 'Takeshi-kun wa gakusei desu.', vn: 'Cậu Takeshi là học sinh.',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'けんくんは10歳です。', romaji: 'Ken-kun wa juu sai desu.', vn: 'Cậu Ken 10 tuổi.',
          furigana: [{ kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: 'ゆうたくんは日本人です。', romaji: 'Yuuta-kun wa Nihonjin desu.', vn: 'Cậu Yuuta là người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'そうたくんは私の友達です。', romaji: 'Souta-kun wa watashi no tomodachi desu.', vn: 'Cậu Souta là bạn của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'りょうくんは8歳です。', romaji: 'Ryou-kun wa hachi sai desu.', vn: 'Cậu Ryou 8 tuổi.',
          furigana: [{ kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: 'たろうくんはどこですか。', romaji: 'Tarou-kun wa doko desu ka.', vn: 'Cậu Taro ở đâu vậy?',
          furigana: []
        }
      ]
    },
    {
      word: '～じん', kanji: '～人', romaji: '~jin', mean: 'Người (nước) ~; ví dụ: アメリカじん - người Mỹ',
      examples: [
        {
          jp: '私は日本人です。', romaji: 'Watashi wa Nihonjin desu.', vn: 'Tôi là người Nhật.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'ミラーさんはアメリカ人です。', romaji: 'Miraa-san wa Amerikajin desu.', vn: 'Anh Miller là người Mỹ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: '彼はベトナム人です。', romaji: 'Kare wa Betonamujin desu.', vn: 'Anh ấy là người Việt Nam.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あの人は韓国人ですか。', romaji: 'Ano hito wa Kankokujin desu ka.', vn: 'Người kia có phải là người Hàn Quốc không?',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }]
        },
        {
          jp: '田中さんは中国人じゃありません。', romaji: 'Tanaka-san wa Chuugokujin ja arimasen.', vn: 'Anh Tanaka không phải là người Trung Quốc.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }]
        },
        {
          jp: 'サントスさんはブラジル人です。', romaji: 'Santosu-san wa Burajirujin desu.', vn: 'Anh Santos là người Brazil.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        }
      ]
    },

    // Nghề nghiệp
    {
      word: 'せんせい', kanji: '先生', romaji: 'sensei', mean: 'Thầy/cô (không dùng khi nói về nghề nghiệp của mình)',
      examples: [
        {
          jp: '山田さんは先生です。', romaji: 'Yamada-san wa sensei desu.', vn: 'Anh Yamada là giáo viên.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あの方は日本語の先生です。', romaji: 'Ano kata wa nihongo no sensei desu.', vn: 'Vị kia là giáo viên tiếng Nhật.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '田中先生は大学の先生です。', romaji: 'Tanaka sensei wa daigaku no sensei desu.', vn: 'Thầy Tanaka là giảng viên đại học.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '先生, おはようございます。', romaji: 'Sensei, ohayou gozaimasu.', vn: 'Chào thầy/cô ạ.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '将来, 日本語の先生になりたいです。', romaji: 'Shourai, nihongo no sensei ni naritai desu.', vn: 'Trong tương lai, tôi muốn trở thành giáo viên tiếng Nhật.',
          furigana: [{ kanji: '将来', reading: 'しょうらい', meaning: 'TƯƠNG LAI' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        }
      ],
      kanjiDetails: [
        {
          kanji: '先',
          onyomi: 'セン (sen)',
          kunyomi: 'さき (saki), まず (mazu)',
          meaning: 'Trước, đầu tiên',
          sinoVietnamese: 'TIÊN',
          strokes: 6,
          jlpt: 'N5',
          radicals: '儿 (chân người)',
          components: [{ char: '土', meaning: 'đất' }, { char: '儿', meaning: 'chân người' }],
          mnemonic: 'Người đi trước (先) là người có đôi chân (儿) bước đi trên đất (土) nhanh nhất.',
          examples: ['先週 (せんしゅう) - tuần trước', '先月 (せんげつ) - tháng trước', '先に (さきに) - trước đó'],
          exampleSentences: [
            {
              jp: 'お先に失礼します。', vn: 'Tôi xin phép về trước.',
              furigana: [{ kanji: '先', reading: 'さき', meaning: 'TIÊN' }, { kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
            },
            {
              jp: '山口先生はどこですか。', vn: 'Thầy Yamaguchi ở đâu vậy?',
              furigana: [{ kanji: '山口', reading: 'やまぐち', meaning: 'SƠN KHẨU' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
            },
            {
              jp: '先週、日本へ行きました。', vn: 'Tuần trước tôi đã đi Nhật.',
              furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '指先が冷たいです。', vn: 'Đầu ngón tay đang lạnh.',
              furigana: [{ kanji: '指先', reading: 'ゆびさき', meaning: 'CHỈ TIÊN' }, { kanji: '冷', reading: 'つめ', meaning: 'LÃNH' }]
            },
            {
              jp: '先に食べてください。', vn: 'Hãy ăn trước đi ạ.',
              furigana: [{ kanji: '先', reading: 'さき', meaning: 'TIÊN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
            }
          ]
        },
        {
          kanji: '生',
          onyomi: 'セイ (sei), ショウ (shou)',
          kunyomi: 'い.きる (ikiru), う.まれる (umareru), なま (nama)',
          meaning: 'Sống, sinh ra, tươi sống',
          sinoVietnamese: 'SINH',
          strokes: 5,
          jlpt: 'N5',
          radicals: '生 (sống)',
          components: [{ char: '生', meaning: 'sống' }],
          mnemonic: 'Hình ảnh mầm cây đang vươn lên từ mặt đất, tượng trưng cho sự sống.',
          examples: ['学生 (がくせい) - sinh viên', '生活 (せいかつ) - cuộc sống', '生まれる (うまれる) - được sinh ra'],
          exampleSentences: [
            {
              jp: '山田先生は日本人です。', vn: 'Thầy Yamada là người Nhật.',
              furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
            },
            {
              jp: '日本での生活は楽しいです。', vn: 'Cuộc sống ở Nhật rất vui.',
              furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '生活', reading: 'せいかつ', meaning: 'SINH HOẠT' }]
            },
            {
              jp: '私はベトナムで生まれました。', vn: 'Tôi đã sinh ra ở Việt Nam.',
              furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '生', reading: 'う', meaning: 'SINH' }]
            },
            {
              jp: '学生は毎日勉強します。', vn: 'Sinh viên học bài mỗi ngày.',
              furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }, { kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '一生懸命頑張ります。', vn: 'Tôi sẽ cố gắng hết sức mình.',
              furigana: [{ kanji: '一生懸命', reading: 'いっしょうけんめい', meaning: 'NHẤT SINH HUYỀN MỆNH' }]
            }
          ]
        }
      ]
    },
    {
      word: 'きょうし', kanji: '教師', romaji: 'kyoushi', mean: 'Giáo viên',
      kanjiDetails: [
        {
          kanji: '教',
          onyomi: 'キョウ (kyou)',
          kunyomi: 'おし.える (oshieru)',
          meaning: 'Dạy, giáo dục',
          sinoVietnamese: 'GIÁO',
          strokes: 11,
          jlpt: 'N5',
          radicals: '攴 (phộc/đánh khẽ)',
          components: [{ char: '孝', meaning: 'hiếu thảo' }, { char: '攵', meaning: 'đánh khẽ' }],
          mnemonic: 'Con cái phải có hiếu thảo (孝), nếu không cha mẹ sẽ đánh khẽ (攵) để dạy bảo (教).',
          examples: ['教える (おしえる) - dạy', '教室 (きょうしつ) - lớp học'],
          exampleSentences: [
            {
              jp: '日本語を教えてください。', vn: 'Hãy dạy tiếng Nhật cho tôi.',
              furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
            },
            {
              jp: '教室で勉強します。', vn: 'Học ở trong lớp học.',
              furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '宗教の文化を研究します。', vn: 'Nghiên cứu về văn hóa tôn giáo.',
              furigana: [{ kanji: '宗教', reading: 'しゅうきょう', meaning: 'TÔN GIÁO' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '研究', reading: 'けんきゅう', meaning: 'NGHIÊN CỨU' }]
            },
            {
              jp: '教育は国の宝です。', vn: 'Giáo dục là quốc bảo.',
              furigana: [{ kanji: '教育', reading: 'きょういく', meaning: 'GIÁO DỤC' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '宝', reading: 'たから', meaning: 'BẢO' }]
            },
            {
              jp: '先生は丁寧に教えます。', vn: 'Thầy giáo dạy một cách tỉ mỉ.',
              furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '丁寧', reading: 'ていねい', meaning: 'ĐINH NINH' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
            }
          ]
        },
        {
          kanji: '師',
          onyomi: 'シ (shi)',
          kunyomi: '',
          meaning: 'Thầy, chuyên gia',
          sinoVietnamese: 'SƯ',
          strokes: 10,
          jlpt: 'N4',
          radicals: '巾 (khăn)',
          components: [{ char: '阜', meaning: 'gò đất' }, { char: '帀', meaning: 'bao quanh' }],
          mnemonic: 'Vị thầy (師) là người đứng trên cao (gò đất) để dẫn dắt mọi người xung quanh.',
          examples: ['教師 (きょうし) - giáo viên', '医師 (いし) - bác sĩ'],
          exampleSentences: [
            {
              jp: '母は大学の教師です。', vn: 'Mẹ tôi là giảng viên đại học.',
              furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
            },
            {
              jp: '医師に相談します。', vn: 'Thảo luận với bác sĩ.',
              furigana: [{ kanji: '医師', reading: 'いし', meaning: 'Y SƯ' }, { kanji: '相談', reading: 'そうだん', meaning: 'TƯƠNG ĐÀM' }]
            },
            {
              jp: '美容師になりたいです。', vn: 'Tôi muốn trở thành thợ làm tóc.',
              furigana: [{ kanji: '美容師', reading: 'びようし', meaning: 'MỸ DUNG SƯ' }]
            },
            {
              jp: '看護師として働きます。', vn: 'Tôi làm việc với tư cách là y tá.',
              furigana: [{ kanji: '看護師', reading: 'かんごし', meaning: 'KHÁN HỘ SƯ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
            },
            {
              jp: '師走の忙しい時期です。', vn: 'Đây là thời kỳ bận rộn của tháng Chạp (tháng 12).',
              furigana: [{ kanji: '師走', reading: 'しわす', meaning: 'SƯ TẨU' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }, { kanji: '時期', reading: 'じき', meaning: 'THỜI KỲ' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '私は教師です。', romaji: 'Watashi wa kyoushi desu.', vn: 'Tôi là giáo viên.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        },
        {
          jp: '彼は高校の教師です。', romaji: 'Kare wa koukou no kyoushi desu.', vn: 'Anh ấy là giáo viên trung học.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '高校', reading: 'こうこう', meaning: 'CAO HIỆU' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        },
        {
          jp: '山田さんは英語の教師です。', romaji: 'Yamada-san wa eigo no kyoushi desu.', vn: 'Anh Yamada là giáo viên tiếng Anh.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        },
        {
          jp: '私は日本語教師です。', romaji: 'Watashi wa nihongo kyoushi desu.', vn: 'Tôi là giáo viên tiếng Nhật.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        },
        {
          jp: '田中さんは大学の教師です。', romaji: 'Tanaka-san wa daigaku no kyoushi desu.', vn: 'Anh Tanaka là giảng viên đại học.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        },
        {
          jp: '母は小学校の教師です。', romaji: 'Haha wa shougakkou no kyoushi desu.', vn: 'Mẹ tôi là giáo viên tiểu học.',
          furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '小学校', reading: 'しょうがっこう', meaning: 'TIỂU HỌC HIỆU' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }]
        }
      ]
    },
    {
      word: 'がくせい', kanji: '学生', romaji: 'gakusei', mean: 'Học sinh, sinh viên',
      examples: [
        {
          jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', vn: 'Tôi là học sinh.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: '田中さんは富士大学の学生です。', romaji: 'Tanaka-san wa Fuji daigaku no gakusei desu.', vn: 'Anh Tanaka là sinh viên đại học Fuji.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: '弟は高校生です。', romaji: 'Otouto wa koukousei desu.', vn: 'Em trai tôi là học sinh cấp 3.',
          furigana: [{ kanji: '弟', reading: 'おとうと', meaning: 'ĐỆ' }, { kanji: '高校生', reading: 'こうこうせい', meaning: 'CAO HIỆU SINH' }]
        },
        {
          jp: '妹は中学生です。', romaji: 'Imouto wa chuugakusei desu.', vn: 'Em gái tôi là học sinh cấp 2.',
          furigana: [{ kanji: '妹', reading: 'いもうと', meaning: 'MUỘI' }, { kanji: '中学生', reading: 'ちゅうがくせい', meaning: 'TRUNG HỌC SINH' }]
        },
        {
          jp: '留学生がたくさんいます。', romaji: 'Ryuugakusei ga takusan imasu.', vn: 'Có rất nhiều du học sinh.',
          furigana: [{ kanji: '留学生', reading: 'りゅうがくせい', meaning: 'LƯU HỌC SINH' }]
        },
        {
          jp: '学生は毎日勉強します。', romaji: 'Gakusei wa mainichi benkyou shimasu.', vn: 'Học sinh học bài mỗi ngày.',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }, { kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        }
      ]
    },
    {
      word: 'かいしゃいん', kanji: '会社員', romaji: 'kaishain', mean: 'Nhân viên công ty',
      kanjiDetails: [
        {
          kanji: '会',
          onyomi: 'カイ (kai)',
          kunyomi: 'あ.う (au)',
          meaning: 'Gặp gỡ, hội',
          sinoVietnamese: 'HỘI',
          strokes: 6,
          jlpt: 'N5',
          radicals: '人 (người)',
          components: [{ char: '人', meaning: 'người' }, { char: '云', meaning: 'nói' }],
          mnemonic: 'Mọi người (人) tụ họp lại để cùng thảo luận/nói (云) chuyện.',
          examples: ['会社 (かいしゃ) - công ty', '会議 (かいぎ) - cuộc họp'],
          exampleSentences: [
            {
              jp: '会社へ行きます。', vn: 'Đi đến công ty.',
              furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '会議は三時からです。', vn: 'Cuộc họp bắt đầu từ 3 giờ.',
              furigana: [{ kanji: '会議', reading: 'かいぎ', meaning: 'HỘI NGHỊ' }, { kanji: '三時', reading: 'さんじ', meaning: 'TAM THỜI' }]
            },
            {
              jp: '友達に会います。', vn: 'Gặp gỡ bạn bè.',
              furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
            },
            {
              jp: '英会話を習います。', vn: 'Học đàm thoại tiếng Anh.',
              furigana: [{ kanji: '英会話', reading: 'えいかいわ', meaning: 'ANH HỘI THOẠI' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
            },
            {
              jp: '運動会に参加します。', vn: 'Tham gia hội thao.',
              furigana: [{ kanji: '運動会', reading: 'うんどうかい', meaning: 'VẬN ĐỘNG HỘI' }, { kanji: '参加', reading: 'さんか', meaning: 'TAM GIA' }]
            }
          ]
        },
        {
          kanji: '社',
          onyomi: 'シャ (sha)',
          kunyomi: 'やしろ (yashiro)',
          meaning: 'Công ty, xã',
          sinoVietnamese: 'XÃ',
          strokes: 7,
          jlpt: 'N5',
          radicals: '示 (thị/chỉ dẫn)',
          components: [{ char: '礻', meaning: 'thần linh' }, { char: '土', meaning: 'đất' }],
          mnemonic: 'Những người cùng làm việc trên mảnh đất (土) và thờ chung một vị thần (礻).',
          examples: ['会社 (かいしゃ) - công ty', '社会 (しゃかい) - xã hội'],
          exampleSentences: [
            {
              jp: '社会のルールを守ります。', vn: 'Tuân thủ các quy tắc xã hội.',
              furigana: [{ kanji: '社会', reading: 'しゃかい', meaning: 'XÃ HỘI' }, { kanji: '守', reading: 'まも', meaning: 'THỦ' }]
            },
            {
              jp: '神社の鳥居があります。', vn: 'Có cổng Torii của đền thờ.',
              furigana: [{ kanji: '神社', reading: 'じんじゃ', meaning: 'THẦN XÃ' }, { kanji: '鳥居', reading: 'とりい', meaning: 'ĐIỂU CƯ' }]
            },
            {
              jp: '出版社で働きます。', vn: 'Làm việc tại một nhà xuất bản.',
              furigana: [{ kanji: '出版社', reading: 'しゅっぱんしゃ', meaning: 'XUẤT BẢN XÃ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
            },
            {
              jp: '社長室はあちらです。', vn: 'Phòng giám đốc ở đằng kia.',
              furigana: [{ kanji: '社長室', reading: 'しゃちょうしつ', meaning: 'XÃ TRƯỞNG THẤT' }]
            },
            {
              jp: '社会科の授業です。', vn: 'Giờ học môn xã hội.',
              furigana: [{ kanji: '社会科', reading: 'しゃかいか', meaning: 'XÃ HỘI KHOA' }, { kanji: '授業', reading: 'じゅぎょう', meaning: 'THỤ NGHIỆP' }]
            }
          ]
        },
        {
          kanji: '員',
          onyomi: 'イン (in)',
          kunyomi: '',
          meaning: 'Thành viên, nhân viên',
          sinoVietnamese: 'VIÊN',
          strokes: 10,
          jlpt: 'N4',
          radicals: '口 (miệng)',
          components: [{ char: '口', meaning: 'miệng' }, { char: '貝', meaning: 'vỏ sò/tiền' }],
          mnemonic: 'Người nhận tiền (貝) để làm việc bằng miệng (口) (giao lưu/phát ngôn).',
          examples: ['銀行員 (ぎんこういん) - nhân viên ngân hàng', '店員 (てんいん) - nhân viên cửa hàng'],
          exampleSentences: [
            {
              jp: '佐藤さんは会社員です。', vn: 'Anh Sato là nhân viên công ty.',
              furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
            },
            {
              jp: '彼は銀行員になりました。', vn: 'Anh ấy đã trở thành nhân viên ngân hàng.',
              furigana: [{ kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
            },
            {
              jp: '満員電車に乗ります。', vn: 'Lên chiếc tàu điện đông nghịt người.',
              furigana: [{ kanji: '満員電車', reading: 'まんいんでんしゃ', meaning: 'MÃN VIÊN ĐIỆN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }]
            },
            {
              jp: '店員はとても親切です。', vn: 'Nhân viên cửa hàng rất thân thiện.',
              furigana: [{ kanji: '店員', reading: 'てんいん', meaning: 'ĐIẾM VIÊN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
            },
            {
              jp: '会員証を見せてください。', vn: 'Hãy cho tôi xem thẻ hội viên.',
              furigana: [{ kanji: '会員証', reading: 'かいいんしょう', meaning: 'HỘI VIÊN CHỨNG' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'ミラーさんは会社員です。', romaji: 'Miraa-san wa kaishain desu.', vn: 'Anh Miller là nhân viên công ty.',
          furigana: [{ kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: '父は会社員です。', romaji: 'Chichi wa kaishain desu.', vn: 'Bố tôi là nhân viên công ty.',
          furigana: [{ kanji: '父', reading: 'ちち', meaning: 'PHỤ' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: '兄は貿易会社の社員です。', romaji: 'Ani wa boueki gaisha no shain desu.', vn: 'Anh trai tôi là nhân viên công ty thương mại.',
          furigana: [{ kanji: '兄', reading: 'あに', meaning: 'HUYNH' }, { kanji: '貿易', reading: 'ぼうえき', meaning: 'MẬU DỊCH' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: '母も会社員です。', romaji: 'Haha mo kaishain desu.', vn: 'Mẹ tôi cũng là nhân viên công ty.',
          furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: '将来は会社員になりたいです。', romaji: 'Shourai wa kaishain ni naritai desu.', vn: 'Tương lai tôi muốn trở thành nhân viên công ty.',
          furigana: [{ kanji: '将来', reading: 'しょうらい', meaning: 'TƯƠNG LAI' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: 'あの人はどこかの会社員ですか。', romaji: 'Ano hito wa dokoka no kaishain desu ka.', vn: 'Người kia có phải là nhân viên công ty nào đó không?',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        }
      ]
    },
    {
      word: 'しゃいん', kanji: '社員', romaji: 'shain', mean: 'Nhân viên Công ty ~ (dùng kèm theo tên công ty; ví dụ: IMCのしゃいん)',
      examples: [
        {
          jp: '私はIMCの社員です。', romaji: 'Watashi wa IMC no shain desu.', vn: 'Tôi là nhân viên công ty IMC.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: '佐藤さんはパワー電気の社員です。', romaji: 'Satou-san wa Pawaa Denki no shain desu.', vn: 'Anh Satou là nhân viên công ty Power Điện khí.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: 'パワー電気', reading: 'ぱわーでんき', meaning: 'ĐIỆN KHÍ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'ミラーさんもIMCの社員です。', romaji: 'Miraa-san mo IMC no shain desu.', vn: 'Anh Miller cũng là nhân viên công ty IMC.',
          furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'あの方はトヨタの社員です。', romaji: 'Ano kata wa Toyota no shain desu.', vn: 'Vị đó là nhân viên công ty Toyota.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: '田中さんはAKCの社員ですか。', romaji: 'Tanaka-san wa AKC no shain desu ka.', vn: 'Anh Tanaka có phải là nhân viên công ty AKC không?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'ソニーの社員に会いました。', romaji: 'Sonii no shain ni aimashita.', vn: 'Tôi đã gặp nhân viên công ty Sony.',
          furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
        }
      ]
    },
    {
      word: 'ぎんこういん', kanji: '銀行員', romaji: 'ginkouin', mean: 'Nhân viên ngân hàng',
      kanjiDetails: [
        {
          kanji: '銀',
          onyomi: 'ギン (gin)',
          kunyomi: 'しろがね (shirogane)',
          meaning: 'Bạc, tiền tệ',
          sinoVietnamese: 'NGÂN',
          strokes: 14,
          jlpt: 'N4',
          radicals: '金 (kim)',
          components: [{ char: '金', meaning: 'vàng/kim loại' }, { char: '艮', meaning: 'bền vững' }],
          mnemonic: 'Bạc (銀) là kim loại (金) có giá trị bền vững (艮), thường dùng làm tiền tệ.',
          examples: ['銀行 (ぎんこう) - ngân hàng', '銀色 (ぎんいろ) - màu bạc'],
          exampleSentences: [
            {
              jp: '銀行で働いています。', vn: 'Tôi đang làm việc tại ngân hàng.',
              furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNH' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
            },
            {
              jp: '銀色の車を買いました。', vn: 'Tôi đã mua một chiếc xe màu bạc.',
              furigana: [{ kanji: '銀色', reading: 'ぎんいろ', meaning: 'NGÂN SẮC' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
            },
            {
              jp: '水銀は液体です。', vn: 'Thủy ngân là chất lỏng.',
              furigana: [{ kanji: '水銀', reading: 'すいぎん', meaning: 'THỦY NGÂN' }, { kanji: '液体', reading: 'えきたい', meaning: 'DỊCH THỂ' }]
            },
            {
              jp: '銀行は三時に閉まります。', vn: 'Ngân hàng đóng cửa lúc 3 giờ.',
              furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNH' }, { kanji: '三時', reading: 'さんじ', meaning: 'TAM THỜI' }, { kanji: '閉', reading: 'し', meaning: 'BẾ' }]
            },
            {
              jp: '銀メダルをもらいました。', vn: 'Tôi đã nhận được huy chương bạc.',
              furigana: [{ kanji: '銀', reading: 'ぎん', meaning: 'NGÂN' }]
            }
          ]
        },
        {
          kanji: '行',
          onyomi: 'コウ (kou), ギョウ (gyou)',
          kunyomi: 'い.く (iku), おこな.う (okonau)',
          meaning: 'Đi, tổ chức, hàng',
          sinoVietnamese: 'HÀNH',
          strokes: 6,
          jlpt: 'N5',
          radicals: '行 (hành)',
          components: [{ char: '彳', meaning: 'bước chân trái' }, { char: '亍', meaning: 'bước chân phải' }],
          mnemonic: 'Hình ảnh ngã tư đường nơi mọi người đi lại (Hành).',
          examples: ['行く (いく) - đi', '旅行 (りょこう) - du lịch'],
          exampleSentences: [
            {
              jp: 'スーパーへ行きます。', vn: 'Đi siêu thị.',
              furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '旅行が大好きです。', vn: 'Tôi rất thích du lịch.',
              furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '大好', reading: 'だいす', meaning: 'ĐẠI HẢO' }]
            },
            {
              jp: '銀行はあちらです。', vn: 'Ngân hàng ở đằng kia.',
              furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNH' }]
            },
            {
              jp: '行事に参加します。', vn: 'Tham gia vào các sự kiện.',
              furigana: [{ kanji: '行事', reading: 'ぎょうじ', meaning: 'HÀNH SỰ' }, { kanji: '参加', reading: 'さんか', meaning: 'TAM GIA' }]
            },
            {
              jp: '一行目の漢字を読みます。', vn: 'Đọc chữ Kanji ở hàng đầu tiên.',
              furigana: [{ kanji: '一行目', reading: 'いちぎょうめ', meaning: 'NHẤT HÀNH MỤC' }, { kanji: '漢字', reading: 'かんじ', meaning: 'HÁN TỰ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
            }
          ]
        },
        {
          kanji: '員',
          onyomi: 'イン (in)',
          kunyomi: '',
          meaning: 'Thành viên, nhân viên',
          sinoVietnamese: 'VIÊN',
          strokes: 10,
          jlpt: 'N4',
          radicals: '口 (miệng)',
          components: [{ char: '口', meaning: 'miệng' }, { char: '貝', meaning: 'vỏ sò/tiền' }],
          mnemonic: 'Người nhận tiền (貝) để làm việc bằng miệng (口) (giao lưu/phát ngôn).',
          examples: ['銀行員 (ぎんこういん) - nhân viên ngân hàng', '店員 (てんいん) - nhân viên cửa hàng']
        }
      ],
      examples: [
        {
          jp: '山田さんは銀行員です。', romaji: 'Yamada-san wa ginkouin desu.', vn: 'Anh Yamada là nhân viên ngân hàng.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: '兄は地元の銀行員です。', romaji: 'Ani wa jimoto no ginkouin desu.', vn: 'Anh trai tôi là nhân viên ngân hàng ở địa phương.',
          furigana: [{ kanji: '兄', reading: 'あに', meaning: 'HUYNH' }, { kanji: '地元', reading: 'じもと', meaning: 'ĐỊA NGUYÊN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: '銀行員は忙しいです。', romaji: 'Ginkouin wa isogashii desu.', vn: 'Nhân viên ngân hàng rất bận rộn.',
          furigana: [{ kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }]
        },
        {
          jp: '叔母も銀行員でした。', romaji: 'Oba mo ginkouin deshita.', vn: 'Cô tôi cũng từng là nhân viên ngân hàng.',
          furigana: [{ kanji: '叔母', reading: 'おば', meaning: 'THÚC MẪU' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: '銀行員になりたいですか。', romaji: 'Ginkouin ni naritai desu ka.', vn: 'Bạn có muốn trở thành nhân viên ngân hàng không?',
          furigana: [{ kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: '銀行員は十時に休憩（きゅうけい）します。', romaji: 'Ginkouin wa juuji ni kyuukei shimasu.', vn: 'Nhân viên ngân hàng nghỉ trưa lúc 10 giờ (ví dụ).',
          furigana: [{ kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }, { kanji: '十時', reading: 'じゅうじ', meaning: 'THẬP THỜI' }]
        }
      ]
    },
    {
      word: 'いしゃ', kanji: '医者', romaji: 'isha', mean: 'Bác sĩ',
      kanjiDetails: [
        {
          kanji: '医',
          onyomi: 'イ (i)',
          kunyomi: '',
          meaning: 'Y học, bác sĩ',
          sinoVietnamese: 'Y',
          strokes: 7,
          jlpt: 'N5',
          radicals: '匸 (hệ/che đậy)',
          components: [{ char: '匚', meaning: 'cái hộp' }, { char: '矢', meaning: 'mũi tên' }],
          mnemonic: 'Mũi tên (矢) được cất trong hộp (匚) để làm dụng cụ châm cứu chữa bệnh của bác sĩ (医).',
          examples: ['医者 (いしゃ) - bác sĩ', '医学 (いがく) - y học'],
          exampleSentences: [
            {
              jp: '病院へ行きます。', vn: 'Đi đến bệnh viện.',
              furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '彼の父は医者です。', vn: 'Bố của anh ấy là bác sĩ.',
              furigana: [{ kanji: '父', reading: 'ちち', meaning: 'PHỤ' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
            },
            {
              jp: '医学部で勉強しています。', vn: 'Tôi đang học tại khoa y.',
              furigana: [{ kanji: '医学部', reading: 'いがくぶ', meaning: 'Y HỌC BỘ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '歯科医に予約します。', vn: 'Hẹn gặp bác sĩ nha khoa.',
              furigana: [{ kanji: '歯科医', reading: 'しかい', meaning: 'XỈ KHOA Y' }, { kanji: '予約', reading: 'よやく', meaning: 'DƯ ƯỚC' }]
            },
            {
              jp: '医院の看板が見えます。', vn: 'Nhìn thấy biển hiệu của phòng khám.',
              furigana: [{ kanji: '医院', reading: 'いいん', meaning: 'Y VIỆN' }, { kanji: '看板', reading: 'かんばん', meaning: 'KHÁN BẢN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
            }
          ]
        },
        {
          kanji: '者',
          onyomi: 'シャ (sha)',
          kunyomi: 'もの (mono)',
          meaning: 'Người (làm nghề gì đó)',
          sinoVietnamese: 'GIẢ',
          strokes: 8,
          jlpt: 'N4',
          radicals: '耂 (lão)',
          components: [{ char: '耂', meaning: 'người giả' }, { char: '日', meaning: 'mặt trời/ngày' }],
          mnemonic: 'Người (者) từng trải qua nhiều ngày (日) sương gió đến mức già (耂) đi chính là người có kinh nghiệm.',
          examples: ['医者 (いしゃ) - bác sĩ', '読者 (どくしゃ) - độc giả'],
          exampleSentences: [
            { jp: '田中さんは研究者です。', vn: 'Anh Tanaka là nhà nghiên cứu.' },
            { jp: '若者は元気です。', vn: 'Người trẻ thì khỏe mạnh.' },
            { jp: '読者の意見を聞きます。', vn: 'Nghe ý kiến của độc giả.' },
            { jp: '学者の書いた本を読みます。', vn: 'Đọc sách do các học giả viết.' },
            { jp: '記者会見を開きます。', vn: 'Mở họp báo (giới ký giả).' }
          ]
        }
      ],
      examples: [
        {
          jp: '鈴木さんは医者です。', romaji: 'Suzuki-san wa isha desu.', vn: 'Anh Suzuki là bác sĩ.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: '母は大きな病院の医者です。', romaji: 'Haha wa ookina byouin no isha desu.', vn: 'Mẹ tôi là bác sĩ ở một bệnh viện lớn.',
          furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: '医者になりたいです。', romaji: 'Isha ni naritai desu.', vn: 'Tôi muốn trở thành bác sĩ.',
          furigana: [{ kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: 'あの若い医者は親切です。', romaji: 'Ano wakai isha wa shinsetsu desu.', vn: 'Vị bác sĩ trẻ kia rất tận tình.',
          furigana: [{ kanji: '若', reading: 'わか', meaning: 'NHƯỢC' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: '私の夢は医者になることです。', romaji: 'Watashi no yume wa isha ni naru koto desu.', vn: 'Ước mơ của tôi là trở thành bác sĩ.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '夢', reading: 'ゆめ', meaning: 'MỘNG' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: '医者に診てもらいましょう。', romaji: 'Isha ni mite moraimashou.', vn: 'Hãy cùng đi khám bác sĩ nào.',
          furigana: [{ kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }, { kanji: '診', reading: 'み', meaning: 'CHẨN' }]
        }
      ]
    },
    {
      word: 'けんきゅうしゃ', kanji: '研究者', romaji: 'kenkyuusha', mean: 'Nhà nghiên cứu',
      kanjiDetails: [
        {
          kanji: '研',
          onyomi: 'ケン (ken)',
          kunyomi: 'と.ぐ (togu)',
          meaning: 'Nghiên cứu, mài giũa',
          sinoVietnamese: 'NGHIÊN',
          strokes: 9,
          jlpt: 'N4',
          radicals: '石 (đá)',
          components: [{ char: '石', meaning: 'đá' }, { char: '开', meaning: 'mở ra' }],
          mnemonic: 'Dùng đá (石) để mài giũa và mở (开) mang kiến thức mới thông qua nghiên cứu (研).',
          examples: ['研究 (けんきゅう) - nghiên cứu', '研修 (けんしゅう) - thực tập'],
          exampleSentences: [
            {
              jp: '大学院で研究しています。', vn: 'Tôi đang nghiên cứu tại cao học.',
              furigana: [{ kanji: '大学院', reading: 'だいがくいん', meaning: 'ĐẠI HỌC VIỆN' }, { kanji: '研究', reading: 'けんきゅう', meaning: 'NGHIÊN CỨU' }]
            },
            {
              jp: '来週、研修があります。', vn: 'Tuần tới sẽ có buổi thực tập/đào tạo.',
              furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '研修', reading: 'けんしゅう', meaning: 'NGHIÊN TU' }]
            },
            {
              jp: '技術を研ぎます。', vn: 'Mài giũa kỹ năng.',
              furigana: [{ kanji: '技術', reading: 'ぎじゅつ', meaning: 'KỸ THUẬT' }, { kanji: '研', reading: 'と', meaning: 'NGHIÊN' }]
            },
            {
              jp: '研究発表を準備します。', vn: 'Chuẩn bị bài thuyết trình nghiên cứu.',
              furigana: [{ kanji: '研究発表', reading: 'けんきゅうはっぴょう', meaning: 'NGHIÊN CỨU PHÁT BIỂU' }, { kanji: '準備', reading: 'じゅんび', meaning: 'CHUẨN BỊ' }]
            },
            {
              jp: '研修生として働きます。', vn: 'Làm việc with tư cách là thực tập sinh.',
              furigana: [{ kanji: '研修生', reading: 'けんしゅうせい', meaning: 'NGHIÊN TU SINH' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
            }
          ]
        },
        {
          kanji: '究',
          onyomi: 'キュウ (kyou)',
          kunyomi: 'きわ.める (kiwameru)',
          meaning: 'Cứu (trong nghiên cứu), tìm tòi',
          sinoVietnamese: 'CỨU',
          strokes: 7,
          jlpt: 'N4',
          radicals: '穴 (hang/lỗ)',
          components: [{ char: '穴', meaning: 'cái hang' }, { char: '九', meaning: 'số 9' }],
          mnemonic: 'Phải đào sâu vào hang (穴) 9 (九) lần mới có thể tìm tòi, nghiên cứu (究) ra tận cùng sự việc.',
          examples: ['研究 (けんきゅう) - nghiên cứu', '究極 (きゅうきょく) - cuối cùng'],
          exampleSentences: [
            {
              jp: '真理を究めます。', vn: 'Tìm tòi chân lý.',
              furigana: [{ kanji: '真理', reading: 'しんり', meaning: 'CHÂN LÝ' }, { kanji: '究', reading: 'きわ', meaning: 'CỨU' }]
            },
            {
              jp: '究極の選択です。', vn: 'Đó là sự lựa chọn cuối cùng.',
              furigana: [{ kanji: '究極', reading: 'きゅうきょく', meaning: 'CỨU CỰC' }, { kanji: '選択', reading: 'せんたく', meaning: 'TUYỂN TRẠCH' }]
            },
            {
              jp: '学問を追究します。', vn: 'Truy cứu học vấn.',
              furigana: [{ kanji: '学問', reading: 'がくもん', meaning: 'HỌC VẤN' }, { kanji: '追究', reading: 'ついきゅう', meaning: 'TRUY CỨU' }]
            },
            {
              jp: '探究心を持っています。', vn: 'Có tinh thần ham học hỏi/tìm tòi.',
              furigana: [{ kanji: '探究心', reading: 'たんきゅうしん', meaning: 'THĂM CỨU TÂM' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }]
            },
            {
              jp: '研究室へ行きます。', vn: 'Đi đến phòng nghiên cứu.',
              furigana: [{ kanji: '研究室', reading: 'けんきゅうしつ', meaning: 'NGHIÊN CỨU THẤT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            }
          ]
        },
        {
          kanji: '者',
          onyomi: 'シャ (sha)',
          kunyomi: 'もの (mono)',
          meaning: 'Người (làm nghề gì đó)',
          sinoVietnamese: 'GIẢ',
          strokes: 8,
          jlpt: 'N4',
          radicals: '耂 (lão)',
          components: [{ char: '耂', meaning: 'người già' }, { char: '日', meaning: 'mặt trời/ngày' }],
          mnemonic: 'Người (者) từng trải qua nhiều ngày (日) sương gió đến mức già (耂) đi chính là người có kinh nghiệm.',
          examples: ['研究者 (けんきゅうしゃ) - nhà nghiên cứu', '若者 (わかもの) - người trẻ'],
          exampleSentences: [
            { jp: '田中さんは研究者です。', vn: 'Anh Tanaka là nhà nghiên cứu.' },
            { jp: '若者は元気です。', vn: 'Người trẻ thì khỏe mạnh.' },
            { jp: '読者の意見を聞きます。', vn: 'Nghe ý kiến của độc giả.' },
            { jp: '学者の書いた本を読みます。', vn: 'Đọc sách do các học giả viết.' },
            { jp: '記者会見を開きます。', vn: 'Mở họp báo (giới ký giả).' }
          ]
        }
      ],
      examples: [
        {
          jp: '高橋さんは研究者です。', romaji: 'Takahashi-san wa kenkyuusha desu.', vn: 'Anh Takahashi là nhà nghiên cứu.',
          furigana: [{ kanji: '高橋', reading: 'たかはし', meaning: 'CAO KIÊU' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }]
        },
        {
          jp: '彼は大学の研究者です。', romaji: 'Kare wa daigaku no kenkyuusha desu.', vn: 'Anh ấy là nhà nghiên cứu ở trường đại học.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }]
        },
        {
          jp: '研究者の仕事は大変です。', romaji: 'Kenkyuusha no shigoto wa taihen desu.', vn: 'Công việc của nhà nghiên cứu rất vất vả.',
          furigana: [{ kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }, { kanji: '大変', reading: 'たいへん', meaning: 'ĐẠI BIẾN' }]
        },
        {
          jp: '新しい技術の研究者です。', romaji: 'Atarashii gijutsu no kenkyuusha desu.', vn: 'Là nhà nghiên cứu về kỹ thuật mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '技術', reading: 'ぎじゅつ', meaning: 'KỸ THUẬT' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }]
        },
        {
          jp: '弟は物理の研究者になります。', romaji: 'Otouto wa butsuri no kenkyuusha ni narimasu.', vn: 'Em trai tôi sẽ thành nhà nghiên cứu vật lý.',
          furigana: [{ kanji: '弟', reading: 'おとうと', meaning: 'ĐỆ' }, { kanji: '物理', reading: 'ぶつり', meaning: 'VẬT LÝ' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }]
        },
        {
          jp: 'あの方は有名な研究者です。', romaji: 'Ano kata wa yuumei na kenkyuusha desu.', vn: 'Vị đó là một nhà nghiên cứu nổi tiếng.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }]
        }
      ]
    },
    {
      word: 'エンジニア', kanji: '', romaji: 'enjinia', mean: 'Kỹ sư',
      examples: [
        {
          jp: '私はエンジニアです。', romaji: 'Watashi wa enjinia desu.', vn: 'Tôi là kỹ sư.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: 'ミラーさんはエンジニアです。', romaji: 'Miraa-san wa enjinia desu.', vn: 'Anh Miller là kỹ sư.',
          furigana: []
        },
        {
          jp: '田中さんはエンジニアですか。', romaji: 'Tanaka-san wa enjinia desu ka.', vn: 'Anh Tanaka có phải là kỹ sư không?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: '私はエンジニアじゃありません。', romaji: 'Watashi wa enjinia ja arimasen.', vn: 'Tôi không phải là kỹ sư.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: 'あの人もエンジニアです。', romaji: 'Ano hito mo enjinia desu.', vn: 'Người kia cũng là kỹ sư.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }]
        },
        {
          jp: '将来はいいエンジニアになりたいです。', romaji: 'Shourai wa ii enjinia ni naritai desu.', vn: 'Tương lai tôi muốn trở thành một kỹ sư giỏi.',
          furigana: [{ kanji: '将来', reading: 'しょうらい', meaning: 'TƯƠNG LAI' }]
        }
      ]
    },

    // Địa điểm
    {
      word: 'だいがく', kanji: '大学', romaji: 'daigaku', mean: 'Đại học, trường đại học',
      kanjiDetails: [
        {
          kanji: '大',
          onyomi: 'ダイ (dai), タイ (tai)',
          kunyomi: 'おお.きい (ookii)',
          meaning: 'Lớn, to',
          sinoVietnamese: 'ĐẠI',
          strokes: 3,
          jlpt: 'N5',
          radicals: '大 (đại)',
          components: [{ char: '大', meaning: 'lớn' }],
          mnemonic: 'Hình ảnh một người đang dang rộng hai tay và hai chân để thể hiện cái "Lớn".',
          examples: ['大きい (おおきい) - lớn', '大学 (だいがく) - đại học'],
          exampleSentences: [
            {
              jp: '大きな声を出します。', vn: 'Phát ra âm thanh lớn.',
              furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '声', reading: 'こえ', meaning: 'THANH' }, { kanji: '出', reading: 'だ', meaning: 'XUẤT' }]
            },
            {
              jp: '大学へ行きます。', vn: 'Đi học đại học.',
              furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '大切なものを守ります。', vn: 'Bảo vệ những thứ quan trọng.',
              furigana: [{ kanji: '大切', reading: 'たいせつ', meaning: 'ĐẠI THIẾT' }, { kanji: '守', reading: 'まも', meaning: 'THỦ' }]
            },
            {
              jp: '大会に参加します。', vn: 'Tham gia đại hội.',
              furigana: [{ kanji: '大会', reading: 'たいかい', meaning: 'ĐẠI HỘI' }, { kanji: '参加', reading: 'さんか', meaning: 'TAM GIA' }]
            },
            {
              jp: '大人になりました。', vn: 'Đã trở thành người lớn.',
              furigana: [{ kanji: '大人', reading: 'おとな', meaning: 'ĐẠI NHÂN' }]
            }
          ]
        },
        {
          kanji: '学',
          onyomi: 'ガク (gaku)',
          kunyomi: 'まな.ぶ (manabu)',
          meaning: 'Học',
          sinoVietnamese: 'HỌC',
          strokes: 8,
          jlpt: 'N5',
          radicals: '子 (con)',
          components: [{ char: '宀', meaning: 'mái nhà' }, { char: '子', meaning: 'đứa trẻ' }],
          mnemonic: 'Đứa trẻ (子) ở dưới mái nhà (宀) đang học tập.',
          examples: ['学校 (がっこう) - trường học', '大学 (だいがく) - đại học'],
          exampleSentences: [
            {
              jp: '学校で勉強します。', vn: 'Học ở trường.',
              furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '彼は大学の学生です。', vn: 'Anh ấy là sinh viên đại học.',
              furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
            },
            {
              jp: '語学を学びます。', vn: 'Học ngôn ngữ.',
              furigana: [{ kanji: '語学', reading: 'ごがく', meaning: 'NGỮ HỌC' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
            },
            {
              jp: '学問は一生です。', vn: 'Học vấn là cả đời.',
              furigana: [{ kanji: '学問', reading: 'がくもん', meaning: 'HỌC VẤN' }, { kanji: '一生', reading: 'いっしょう', meaning: 'NHẤT SINH' }]
            },
            {
              jp: '奨学金をもらいます。', vn: 'Nhận học bổng.',
              furigana: [{ kanji: '奨学金', reading: 'しょうがくきん', meaning: 'TƯỞNG HỌC KIM' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '私は大学生です。', romaji: 'Watashi wa daigakusei desu.', vn: 'Tôi là sinh viên đại học.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '大学生', reading: 'だいがくせい', meaning: 'ĐẠI HỌC SINH' }]
        },
        {
          jp: '兄は東京大学の学生です。', romaji: 'Ani wa Toukyou daigaku no gakusei desu.', vn: 'Anh trai tôi là sinh viên đại học Tokyo.',
          furigana: [{ kanji: '兄', reading: 'あに', meaning: 'HUYNH' }, { kanji: '東京大学', reading: 'とうきょうだいがく', meaning: 'ĐÔNG KINH ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'この大学はとても大きいです。', romaji: 'Kono daigaku wa totemo ookii desu.', vn: 'Trường đại học này rất lớn.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: '大学で経済を学びます。', romaji: 'Daigaku de keizai wo manabimasu.', vn: 'Tôi học kinh tế ở đại học.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '経済', reading: 'けいざい', meaning: 'KINH TẾ' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
        },
        {
          jp: 'ハノイ大学は有名です。', romaji: 'Hanoi daigaku wa yuumei desu.', vn: 'Đại học Hà Nội rất nổi tiếng.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'どこの大学ですか。', romaji: 'Doko no daigaku desu ka.', vn: 'Bạn học ở trường đại học nào?',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }]
        }
      ]
    },
    {
      word: 'びょういん', kanji: '病院', romaji: 'byouin', mean: 'Bệnh viện',
      kanjiDetails: [
        {
          kanji: '病',
          onyomi: 'ビョウ (byou)',
          kunyomi: 'や.む (yamu)',
          meaning: 'Bệnh, đau ốm',
          sinoVietnamese: 'BỆNH',
          strokes: 10,
          jlpt: 'N5',
          radicals: '疒 (nạch/bệnh tật)',
          components: [{ char: '疒', meaning: 'bệnh tật' }, { char: '丙', meaning: 'vị trí thứ 3/lửa' }],
          mnemonic: 'Người nằm trong giường bệnh (疒) cảm thấy nóng như lửa (丙) đốt.',
          examples: ['病気 (びょうき) - bệnh tật', '病院 (びょういん) - bệnh viện'],
          exampleSentences: [
            {
              jp: '病院へ行きました。', vn: 'Tôi đã đi đến bệnh viện.',
              furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '病気は大丈夫ですか。', vn: 'Bệnh của bạn ổn chứ?',
              furigana: [{ kanji: '病気', reading: 'びょうき', meaning: 'BỆNH KHÍ' }, { kanji: '大丈夫', reading: 'だいじょうぶ', meaning: 'ĐẠI TRƯỢNG PHU' }]
            },
            {
              jp: '看病をしてくれます。', vn: 'Chăm sóc người bệnh cho tôi.',
              furigana: [{ kanji: '看病', reading: 'かんびょう', meaning: 'KHÁN BỆNH' }]
            },
            {
              jp: '急病で休みました。', vn: 'Tôi nghỉ việc vì bị bệnh đột xuất.',
              furigana: [{ kanji: '急病', reading: 'きゅうびょう', meaning: 'CẤP BỆNH' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }]
            },
            {
              jp: '病を克服します。', vn: 'Vượt qua bệnh tật.',
              furigana: [{ kanji: '病', reading: 'やまい', meaning: 'BỆNH' }, { kanji: '克服', reading: 'こくふく', meaning: 'KHẮC PHỤC' }]
            }
          ]
        },
        {
          kanji: '院',
          onyomi: 'イン (in)',
          kunyomi: '',
          meaning: 'Viện, tòa nhà lớn',
          sinoVietnamese: 'VIỆN',
          strokes: 10,
          jlpt: 'N5',
          radicals: '阜 (phụ/gò đất)',
          components: [{ char: '阝', meaning: 'gò đất/tường' }, { char: '完', meaning: 'hoàn thành' }],
          mnemonic: 'Tòa nhà kiên cố (完) có tường bao quanh (阝) chính là Viện.',
          examples: ['病院 (びょういん) - bệnh viện', '大学院 (だいがくいん) - cao học'],
          exampleSentences: [
            {
              jp: '病院はどこですか。', vn: 'Bệnh viện ở đâu vậy?',
              furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }]
            },
            {
              jp: '大学院の入学試験です。', vn: 'Kỳ thi đầu vào cao học.',
              furigana: [{ kanji: '大学院', reading: 'だいがくいん', meaning: 'ĐẠI HỌC VIỆN' }, { kanji: '入学試験', reading: 'にゅうがくしけん', meaning: 'NHẬP HỌC THÍ NGHIỆM' }]
            },
            {
              jp: '入院しています。', vn: 'Đang nhập viện.',
              furigana: [{ kanji: '入院', reading: 'にゅういん', meaning: 'NHẬP VIỆN' }]
            },
            {
              jp: '退院おめでとう。', vn: 'Chúc mừng bạn xuất viện.',
              furigana: [{ kanji: '退院', reading: 'たいいん', meaning: 'THOÁI VIỆN' }]
            },
            {
              jp: '院長先生は優しいです。', vn: 'Viện trưởng rất hiền hậu.',
              furigana: [{ kanji: '院長', reading: 'いんちょう', meaning: 'VIỆN TRƯỞNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '優', reading: 'やさ', meaning: 'ƯU' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'あの病院は新しくてきれいです。', romaji: 'Ano byouin wa atarashikute kirei desu.', vn: 'Bệnh viện kia mới và đẹp.',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '新', reading: 'あたら', meaning: 'TÂN' }]
        },
        {
          jp: '神戸病院へ行きます。', romaji: 'Kobe byouin e ikimasu.', vn: 'Tôi đi đến bệnh viện Kobe.',
          furigana: [{ kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '医者は病院で働きます。', romaji: 'Isha wa byouin de hatarakimasu.', vn: 'Bác sĩ làm việc ở bệnh viện.',
          furigana: [{ kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }, { kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: 'この病院は24時間空いています。', romaji: 'Kono byouin wa nijon jikan aite imasu.', vn: 'Bệnh viện này mở cửa 24 giờ.',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }, { kanji: '空', reading: 'あ', meaning: 'KHÔNG' }]
        },
        {
          jp: '病院の隣に公園があります。', romaji: 'Byouin no tonari ni kouen ga arimasu.', vn: 'Bên cạnh bệnh viện có công viên.',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '隣', reading: 'となり', meaning: 'LÂN' }, { kanji: '公園', reading: 'こうえん', meaning: 'CÔNG VIÊN' }]
        },
        {
          jp: '病院の電話番号を知っていますか。', romaji: 'Byouin no denwa bangou wo shitte imasu ka.', vn: 'Bạn có biết số điện thoại của bệnh viện không?',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '電話番号', reading: 'でんわばんごう', meaning: 'ĐIỆN THOẠI PHIÊN HIỆU' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
        }
      ]
    },
    {
      word: 'でんき', kanji: '電気', romaji: 'denki', mean: 'Điện, đèn điện',
      kanjiDetails: [
        {
          kanji: '電',
          onyomi: 'デン (den)',
          kunyomi: '',
          meaning: 'Điện',
          sinoVietnamese: 'ĐIỆN',
          strokes: 13,
          jlpt: 'N5',
          radicals: '雨 (vũ/mưa)',
          components: [{ char: '雨', meaning: 'mưa' }, { char: '申', meaning: 'nói/kéo dài' }],
          mnemonic: 'Trong cơn mưa (雨), tia chớp xẹt qua kéo dài (申) chính là điện (電).',
          examples: ['電気 (でんき) - điện', '電車 (でんしゃ) - tàu điện'],
          exampleSentences: [
            {
              jp: '電気をつけてください。', vn: 'Hãy bật điện lên.',
              furigana: [{ kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }]
            },
            {
              jp: '電車で会社へ行きます。', vn: 'Đi làm bằng tàu điện.',
              furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '電話をかけます。', vn: 'Gọi điện thoại.',
              furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }]
            },
            {
              jp: '電子レンジが便利です。', vn: 'Lò vi sóng thật tiện lợi.',
              furigana: [{ kanji: '電子', reading: 'でんし', meaning: 'ĐIỆN TỬ' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }]
            },
            {
              jp: '最近、電力不足です。', vn: 'Dạo này đang thiếu hụt điện năng.',
              furigana: [{ kanji: '最近', reading: 'さいきん', meaning: 'TỐI CẬN' }, { kanji: '電力不足', reading: 'でんりょくふそく', meaning: 'ĐIỆN LỰC BẤT TÚC' }]
            }
          ]
        },
        {
          kanji: '気',
          onyomi: 'キ (ki)',
          kunyomi: 'いき (iki)',
          meaning: 'Khí, tinh thần',
          sinoVietnamese: 'KHÍ',
          strokes: 6,
          jlpt: 'N5',
          radicals: '气 (khí)',
          components: [{ char: '气', meaning: 'hơi nước' }, { char: 'メ', meaning: 'số 5' }],
          mnemonic: 'Hơi nước (气) bốc lên từ nồi cơm đang nấu tạo thành khí (気).',
          examples: ['元気 (げんき) - khỏe mạnh', '天気 (てんき) - thời tiết'],
          exampleSentences: [
            {
              jp: 'お元気ですか。', vn: 'Bạn có khỏe không?',
              furigana: [{ kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }]
            },
            {
              jp: 'いい天気ですね。', vn: 'Thời tiết đẹp nhỉ.',
              furigana: [{ kanji: '天気', reading: 'てんき', meaning: 'THIÊN KHÍ' }]
            },
            {
              jp: '気分がいいです。', vn: 'Tâm trạng thoải mái.',
              furigana: [{ kanji: '気分', reading: 'きぶん', meaning: 'KHÍ PHÂN' }]
            },
            {
              jp: '火の用心、火気に注意。', vn: 'Cẩn thận củi lửa, chú ý vật liệu dễ cháy.',
              furigana: [{ kanji: '火', reading: 'ひ', meaning: 'HỎA' }, { kanji: '用心', reading: 'ようじん', meaning: 'DỤNG TÂM' }, { kanji: '火気', reading: 'かき', meaning: 'HỎA KHÍ' }, { kanji: '注意', reading: 'ちゅうい', meaning: 'CHÚ Ý' }]
            },
            {
              jp: '空気がきれいです。', vn: 'Không khí trong lành.',
              furigana: [{ kanji: '空気', reading: 'くうき', meaning: 'KHÔNG KHÍ' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '電気を消してください。', romaji: 'Denki wo keshite kudasai.', vn: 'Hãy tắt điện đi.',
          furigana: [{ kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }, { kanji: '消', reading: 'け', meaning: 'TIÊU' }]
        },
        {
          jp: 'パワー電気は大きな会社です。', romaji: 'Power denki wa ookina kaisha desu.', vn: 'Điện lực Power là công ty lớn.',
          furigana: [{ kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }]
        },
        {
          jp: '電気自動車に興味があります。', romaji: 'Denki jidousha ni kyoumi ga arimasu.', vn: 'Tôi có hứng thú với xe ô tô điện.',
          furigana: [{ kanji: '電気自動車', reading: 'でんきじどうしゃ', meaning: 'ĐIỆN KHÍ TỰ ĐỘNG XA' }, { kanji: '興味', reading: 'きょうみ', meaning: 'HỨNG VỊ' }]
        },
        {
          jp: '電気が止まりました。', romaji: 'Denki ga tomarimashita.', vn: 'Điện đã bị ngắt.',
          furigana: [{ kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }, { kanji: '止', reading: 'と', meaning: 'CHỈ' }]
        },
        {
          jp: '電気代が高いです。', romaji: 'Denkidai ga takai desu.', vn: 'Tiền điện đắt quá.',
          furigana: [{ kanji: '電気代', reading: 'でんきだい', meaning: 'ĐIỆN KHÍ ĐẠI' }, { kanji: '高', reading: 'たか', meaning: 'CAO' }]
        },
        {
          jp: '会社に電気がありません。', romaji: 'Kaisha ni denki ga arimasen.', vn: 'Ở công ty không có điện.',
          furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }]
        }
      ]
    },

    // Từ nghi vấn
    {
      word: 'だれ', kanji: '', romaji: 'dare', mean: 'Ai',
      examples: [
        {
          jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: '誰が来ましたか。', romaji: 'Dare ga kimashita ka.', vn: 'Ai đã đến vậy?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '誰と日本へ行きますか。', romaji: 'Dare to Nihon e ikimasu ka.', vn: 'Bạn đi Nhật cùng với ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '誰の鞄ですか。', romaji: 'Dare no kaban desu ka.', vn: 'Cái cặp này của ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC/CÁI TÚI' }]
        },
        {
          jp: '誰に日本語を習いますか。', romaji: 'Dare ni nihongo wo naraimasu ka.', vn: 'Bạn học tiếng Nhật từ ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: '教室に誰がいますか。', romaji: 'Kyoushitsu ni dare ga imasu ka.', vn: 'Trong lớp học có ai không?',
          furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        }
      ]
    },
    {
      word: 'どなた', kanji: '', romaji: 'donata', mean: 'Ai (lịch sự)',
      examples: [
        {
          jp: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', vn: 'Vị kia là ai ạ?',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
        },
        {
          jp: '失礼ですが、どなたですか。', romaji: 'Shitsurei desu ga, donata desu ka.', vn: 'Xin lỗi, ngài là ai ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        },
        {
          jp: 'どなたが社長ですか。', romaji: 'Donata ga shachou desu ka.', vn: 'Ai là giám đốc ạ?',
          furigana: [{ kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }]
        },
        {
          jp: 'こちらはどなたですか。', romaji: 'Kochira wa donata desu ka.', vn: 'Đây là ai ạ?',
          furigana: []
        },
        {
          jp: 'どなたが田中先生ですか。', romaji: 'Donata ga Tanaka sensei desu ka.', vn: 'Ai là thầy Tanaka ạ?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'どなたか、この問題が分かりますか。', romaji: 'Donata ka, kono mondai ga wakarimasu ka.', vn: 'Có ai hiểu vấn đề này không?',
          furigana: [{ kanji: '問題', reading: 'もんだい', meaning: 'VẤN ĐỀ' }, { kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
        }
      ]
    },

    // Tuổi
    {
      word: '～さい', kanji: '～歳', romaji: '~sai', mean: '~ tuổi',
      kanjiDetails: [
        {
          kanji: '歳',
          onyomi: 'サイ (sai), セイ (sei)',
          kunyomi: 'とし (toshi)',
          meaning: 'Tuổi, năm',
          sinoVietnamese: 'TUẾ',
          strokes: 13,
          jlpt: 'N3',
          radicals: '止 (dừng)',
          components: [{ char: '止', meaning: 'dừng lại' }, { char: '歩', meaning: 'đi bộ' }, { char: '戌', meaning: 'tuất/vũ khí' }],
          mnemonic: 'Con người sau khi trải qua nhiều bước đi (歩) và những lúc dừng lại (止) trong cuộc đời thì sẽ thêm một tuổi (歳).',
          examples: ['20歳 (はたち) - 20 tuổi', '歳月 (さいげつ) - năm tháng']
        }
      ],
      examples: [
        {
          jp: '私は25歳です。', romaji: 'Watashi wa nijuugo sai desu.', vn: 'Tôi 25 tuổi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: '田中さんは30歳です。', romaji: 'Tanaka-san wa sanjuu sai desu.', vn: 'Anh Tanaka 30 tuổi.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: '妹は18歳です。', romaji: 'Imouto wa juuhachi sai desu.', vn: 'Em gái tôi 18 tuổi.',
          furigana: [{ kanji: '妹', reading: 'いもうと', meaning: 'MUỘI' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: 'あの子は何歳ですか。', romaji: 'Ano ko wa nansai desu ka.', vn: 'Đứa bé kia mấy tuổi rồi?',
          furigana: [{ kanji: '子', reading: 'こ', meaning: 'TỬ' }, { kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: '二十歳（はたち）になりました。', romaji: 'Hatachi ni narimashita.', vn: 'Tôi đã tròn 20 tuổi.',
          furigana: [{ kanji: '二十歳', reading: 'はたち', meaning: 'NHỊ THẬP TUẾ' }]
        },
        {
          jp: '来年、26歳になります。', romaji: 'Rainen, nijuuroku sai ni narimasu.', vn: 'Sang năm tôi sẽ 26 tuổi.',
          furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        }
      ]
    },
    {
      word: 'なんさい', kanji: '何歳', romaji: 'nansai', mean: 'Mấy tuổi, bao nhiêu tuổi',
      kanjiDetails: [
        {
          kanji: '何',
          onyomi: 'カ (ka)',
          kunyomi: 'なに (nani), なん (nan)',
          meaning: 'Cái gì, mấy',
          sinoVietnamese: 'HÀ',
          strokes: 7,
          jlpt: 'N5',
          radicals: '人 (nhân)',
          components: [{ char: '人', meaning: 'người' }, { char: '可', meaning: 'có thể' }],
          mnemonic: 'Con người (人) có thể (可) làm được cái gì (何)?',
          examples: ['何 (なに) - cái gì', '何人 (なんにん) - mấy người'],
          exampleSentences: [
            {
              jp: 'これは何ですか。', vn: 'Đây là cái gì?',
              furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }]
            },
            {
              jp: '何時に会いましょうか。', vn: 'Chúng ta gặp nhau lúc mấy giờ?',
              furigana: [{ kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
            },
            {
              jp: '何人家族ですか。', vn: 'Gia đình bạn có mấy người?',
              furigana: [{ kanji: '何人', reading: 'なんにん', meaning: 'HÀ NHÂN' }, { kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }]
            },
            {
              jp: '何か食べたいです。', vn: 'Tôi muốn ăn cái gì đó.',
              furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
            },
            {
              jp: '何度でも挑戦します。', vn: 'Sẽ thử thách bao nhiêu lần đi chăng nữa.',
              furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '度', reading: 'ど', meaning: 'ĐỘ' }, { kanji: '挑戦', reading: 'ちょうせん', meaning: 'THIÊU CHIẾN' }]
            }
          ]
        },
        {
          kanji: '歳',
          onyomi: 'サイ (sai), セイ (sei)',
          kunyomi: 'とし (toshi)',
          meaning: 'Tuổi, năm',
          sinoVietnamese: 'TUẾ',
          strokes: 13,
          jlpt: 'N3',
          radicals: '止 (dừng)',
          components: [{ char: '止', meaning: 'dừng lại' }, { char: '歩', meaning: 'đi bộ' }, { char: '戌', meaning: 'tuất/vũ khí' }],
          mnemonic: 'Con người sau khi trải qua nhiều bước đi (歩) và những lúc dừng lại (止) trong cuộc đời thì sẽ thêm một tuổi (歳).',
          examples: ['何歳 (なんさい) - mấy tuổi'],
          exampleSentences: [
            {
              jp: 'おいくつ（何歳）ですか。', vn: 'Bạn bao nhiêu tuổi?',
              furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
            },
            {
              jp: '二十歳（はたち）になりました。', vn: 'Tôi đã tròn 20 tuổi.',
              furigana: [{ kanji: '二十歳', reading: 'はたち', meaning: 'NHỊ THẬP TUẾ' }]
            },
            {
              jp: '歳月は人を待ちません。', vn: 'Thời gian không đợi chờ ai.',
              furigana: [{ kanji: '歳月', reading: 'さいげつ', meaning: 'TUẾ NGUYỆT' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '待', reading: 'ま', meaning: 'ĐÃI' }]
            },
            {
              jp: '五歳の男の子です。', vn: 'Đó là một bé trai 5 tuổi.',
              furigana: [{ kanji: '五歳', reading: 'ごさい', meaning: 'NGŨ TUẾ' }, { kanji: '男', reading: 'おとこ', meaning: 'NAM' }, { kanji: '子', reading: 'こ', meaning: 'TỬ' }]
            },
            {
              jp: 'お歳暮を贈ります。', vn: 'Gửi quà tặng cuối năm (Oseibo).',
              furigana: [{ kanji: '歳暮', reading: 'せいぼ', meaning: 'TUẾ MỘ' }, { kanji: '贈', reading: 'おく', meaning: 'TẶNG' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'あなたは何歳ですか。', romaji: 'Anata wa nansai desu ka.', vn: 'Bạn bao nhiêu tuổi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: 'さくらちゃんは何歳ですか。', romaji: 'Sakura-chan wa nansai desu ka.', vn: 'Bé Sakura mấy tuổi rồi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: '失礼ですが、何歳ですか。', romaji: 'Shitsurei desuga, nansai desu ka.', vn: 'Xin lỗi, bạn bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: '弟さんは何歳ですか。', romaji: 'Otouto-san wa nansai desu ka.', vn: 'Em trai bạn bao nhiêu tuổi?',
          furigana: [{ kanji: '弟', reading: 'おとうと', meaning: 'ĐỆ' }, { kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: '何歳から日本語を勉強しましたか。', romaji: 'Nansai kara nihongo wo benkyou shimashita ka.', vn: 'Bạn học tiếng Nhật từ khi mấy tuổi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '何歳に見えますか。', romaji: 'Nansai ni miemasu ka.', vn: 'Trông tôi như bao nhiêu tuổi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        }
      ]
    },
    {
      word: 'おいくつ', kanji: '', romaji: 'oikutsu', mean: 'Mấy tuổi (lịch sự)',
      examples: [
        {
          jp: '失礼ですが、おいくつですか。', romaji: 'Shitsurei desu ga, oikutsu desu ka.', vn: 'Xin lỗi, ngài bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        },
        {
          jp: 'あの方はおいくつですか。', romaji: 'Ano kata wa oikutsu desu ka.', vn: 'Vị đó bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
        },
        {
          jp: '社長はおいくつですか。', romaji: 'Shachou wa oikutsu desu ka.', vn: 'Giám đốc bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }]
        },
        {
          jp: '先生はおいくつですか。', romaji: 'Sensei wa oikutsu desu ka.', vn: 'Thầy/cô bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'お母さんはおいくつですか。', romaji: 'Okaasan wa oikutsu desu ka.', vn: 'Mẹ bạn bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '母', reading: 'かあ', meaning: 'MẪU' }]
        },
        {
          jp: 'お子さんはおいくつですか。', romaji: 'Okosan wa oikutsu desu ka.', vn: 'Cháu nhà mình bao nhiêu tuổi rồi ạ?',
          furigana: [{ kanji: '子', reading: 'こ', meaning: 'TỬ' }]
        }
      ]
    },

    // Câu trả lời
    {
      word: 'はい', kanji: '', romaji: 'hai', mean: 'Vâng, dạ',
      examples: [
        {
          jp: 'はい、そうです。', romaji: 'Hai, sou desu.', vn: 'Vâng, đúng vậy.',
          furigana: []
        },
        {
          jp: 'はい、分かりました。', romaji: 'Hai, wakarimashita.', vn: 'Vâng, tôi đã hiểu.',
          furigana: [{ kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
        },
        {
          jp: 'はい、日本語が分かります。', romaji: 'Hai, nihongo ga wakarimasu.', vn: 'Vâng, tôi hiểu tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
        },
        {
          jp: 'はい、私は学生です。', romaji: 'Hai, watashi wa gakusei desu.', vn: 'Vâng, tôi là sinh viên.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'はい、十歳です。', romaji: 'Hai, jussai desu.', vn: 'Vâng, 10 tuổi ạ.',
          furigana: [{ kanji: '十歳', reading: 'じゅっさい', meaning: 'THẬP TUẾ' }]
        },
        {
          jp: 'はい、行きましょう。', romaji: 'Hai, ikimashou.', vn: 'Vâng, cùng đi nào.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'いいえ', kanji: '', romaji: 'iie', mean: 'Không',
      examples: [
        {
          jp: 'いいえ、違います。', romaji: 'Iiye, chigaimasu.', vn: 'Không, không phải.',
          furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: 'いいえ、私は医者じゃありません。', romaji: 'Iiye, watashi wa isha ja arimasen.', vn: 'Không, tôi không phải bác sĩ.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: 'いいえ、分かりません。', romaji: 'Iiye, wakarimasen.', vn: 'Không, tôi không hiểu.',
          furigana: [{ kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
        },
        {
          jp: 'いいえ、日本人じゃありません。', romaji: 'Iiye, Nihonjin ja arimasen.', vn: 'Không, không phải người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'いいえ、結構（けっこう）です。', romaji: 'Iiye, kekkou desu.', vn: 'Không, tôi đủ rồi/không cần đâu.',
          furigana: [{ kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: 'いいえ、大丈夫（だいじょうぶ）です。', romaji: 'Iiye, daijoubu desu.', vn: 'Không, tôi ổn.',
          furigana: [{ kanji: '大丈夫', reading: 'だいじょうぶ', meaning: 'ĐẠI TRƯỢNG PHU' }]
        }
      ]
    },

    // Chào hỏi & Giao tiếp
    {
      word: 'しつれいですが', kanji: '失礼ですが', romaji: 'shitsurei desu ga', mean: 'Xin lỗi...',
      kanjiDetails: [
        {
          kanji: '失',
          onyomi: 'シツ (shitsu)',
          kunyomi: 'うしな.う (ushinau)',
          meaning: 'Mất, thất lạc',
          sinoVietnamese: 'THẤT',
          strokes: 5,
          jlpt: 'N4',
          radicals: '大 (đại)',
          components: [{ char: '大', meaning: 'lớn' }, { char: 'ノ', meaning: 'nét phẩy' }],
          mnemonic: 'Một người lớn (大) bị rơi mất một vật gì đó (ノ) nên cảm thấy thất (失) vọng.',
          examples: ['失礼 (しつれい) - thất lễ', '失う (うしなう) - mất'],
          exampleSentences: [
            {
              jp: '失礼ですが、お名前は？', vn: 'Xin lỗi, tên của bạn là gì?',
              furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
            },
            {
              jp: '財布を失いました。', vn: 'Tôi đã làm mất ví.',
              furigana: [{ kanji: '財布', reading: 'さいふ', meaning: 'TÀI PHỐ' }, { kanji: '失', reading: 'うしな', meaning: 'THẤT' }]
            },
            {
              jp: '自信を失わないで。', vn: 'Đừng đánh mất tự tin.',
              furigana: [{ kanji: '自信', reading: 'じしん', meaning: 'TỰ TÍN' }, { kanji: '失', reading: 'うしな', meaning: 'THẤT' }]
            },
            {
              jp: '失業者が増えています。', vn: 'Số người thất nghiệp đang tăng lên.',
              furigana: [{ kanji: '失業者', reading: 'しつぎょうしゃ', meaning: 'THẤT NGHIỆP GIẢ' }, { kanji: '増', reading: 'ふ', meaning: 'TĂNG' }]
            },
            {
              jp: '失敗は成功の母です。', vn: 'Thất bại là mẹ thành công.',
              furigana: [{ kanji: '失敗', reading: 'しっぱい', meaning: 'THẤT BẠI' }, { kanji: '成功', reading: 'せいこう', meaning: 'THÀNH CÔNG' }, { kanji: '母', reading: 'はは', meaning: 'MẪU' }]
            }
          ]
        },
        {
          kanji: '礼',
          onyomi: 'レイ (rei), ライ (rai)',
          kunyomi: '',
          meaning: 'Lễ nghĩa, cảm ơn',
          sinoVietnamese: 'LỄ',
          strokes: 5,
          jlpt: 'N4',
          radicals: '示 (thị)',
          components: [{ char: '礻', meaning: 'thần linh' }, { char: '乚', meaning: 'cong' }],
          mnemonic: 'Quỳ xuống (乚) trước thần linh (礻) để thể hiện sự lễ (礼) phép.',
          examples: ['失礼 (しつれい) - thất lễ', '礼儀 (れいぎ) - lễ nghi'],
          exampleSentences: [
            {
              jp: 'お礼を言います。', vn: 'Nói lời cảm ơn.',
              furigana: [{ kanji: '礼', reading: 'れい', meaning: 'LỄ' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }]
            },
            {
              jp: '礼儀正しい生徒です。', vn: 'Học sinh rất lễ phép.',
              furigana: [{ kanji: '礼儀正', reading: 'れいぎただ', meaning: 'LỄ NGHI CHÍNH' }, { kanji: '生徒', reading: 'せいと', meaning: 'SINH ĐỒ' }]
            },
            {
              jp: '失礼しました。', vn: 'Tôi xin thất lễ (Xin lỗi khi làm phiền).',
              furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
            },
            {
              jp: 'お辞儀は日本の礼法です。', vn: 'Cúi chào là nghi lễ của Nhật Bản.',
              furigana: [{ kanji: '辞儀', reading: 'おじぎ', meaning: 'TỪ NGHI' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '礼法', reading: 'れいほう', meaning: 'LỄ PHÁP' }]
            },
            {
              jp: '敬礼をします。', vn: 'Chào kiểu quân đội/kính lễ.',
              furigana: [{ kanji: '敬礼', reading: 'けいれい', meaning: 'KÍNH LỄ' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '失礼ですが、どちら様（さま）ですか。', romaji: 'Shitsurei desuga, dochira sama desu ka.', vn: 'Xin lỗi, vị nào đấy ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '様', reading: 'さま', meaning: 'DẠNG' }]
        },
        {
          jp: '失礼ですが、お名前は？', romaji: 'Shitsurei desuga, onamae wa?', vn: 'Xin lỗi, tên bạn là gì ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
        },
        {
          jp: '失礼ですが、何歳ですか。', romaji: 'Shitsurei desuga, nansai desu ka.', vn: 'Xin lỗi, bạn bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
        },
        {
          jp: '失礼ですが、どちらから来ましたか。', romaji: 'Shitsurei desuga, dochira kara kimashita ka.', vn: 'Xin lỗi, bạn đến từ đâu vậy ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '失礼ですが、おいくつですか。', romaji: 'Shitsurei desuga, oikutsu desu ka.', vn: 'Xin lỗi, bạn bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        },
        {
          jp: '失礼ですが、先生ですか。', romaji: 'Shitsurei desuga, sensei desu ka.', vn: 'Xin lỗi, bạn có phải giáo viên không?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        }
      ]
    },
    {
      word: 'おなまえは？', kanji: 'お名前は？', romaji: 'O-namae wa?', mean: 'Tên bạn là gì?',
      kanjiDetails: [
        {
          kanji: '名',
          onyomi: 'メイ (mei), ミョウ (myou)',
          kunyomi: 'な (na)',
          meaning: 'Tên, danh tiếng',
          sinoVietnamese: 'DANH',
          strokes: 6,
          jlpt: 'N5',
          radicals: '口 (khẩu)',
          components: [{ char: '夕', meaning: 'buổi tối' }, { char: '口', meaning: 'miệng' }],
          mnemonic: 'Buổi tối (夕) trời tối không nhìn rõ mặt nên phải dùng miệng (口) gọi tên (名) nhau.',
          examples: ['名前 (なまえ) - tên', '有名 (ゆうめい) - nổi tiếng'],
          exampleSentences: [
            {
              jp: 'お名前は何ですか。', vn: 'Tên bạn là gì?',
              furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
            },
            {
              jp: '有名な歌手です。', vn: 'Đó là một ca sĩ nổi tiếng.',
              furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }, { kanji: '歌手', reading: 'かしゅ', meaning: 'CA THỦ' }]
            },
            {
              jp: '名刺（めいし）をください。', vn: 'Cho tôi xin danh thiếp.',
              furigana: [{ kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
            },
            {
              jp: '名古屋（なごや）は大きいです。', vn: 'Nagoya rất lớn.',
              furigana: [{ kanji: '名古屋', reading: 'なごや', meaning: 'DANH CỔ ỐC' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
            },
            {
              jp: '万葉集（まんようしゅう）は名作です。', vn: 'Manyoshu là một tác phẩm nổi tiếng.',
              furigana: [{ kanji: '万葉集', reading: 'まんようしゅう', meaning: 'VẠN DIỆP TẬP' }, { kanji: '名作', reading: 'めいさく', meaning: 'DANH TÁC' }]
            }
          ]
        },
        {
          kanji: '前',
          onyomi: 'ゼン (zen)',
          kunyomi: 'まえ (mae)',
          meaning: 'Trước',
          sinoVietnamese: 'TIỀN',
          strokes: 9,
          jlpt: 'N5',
          radicals: '刀 (đao/dao)',
          components: [{ char: '丷', meaning: 'đầu' }, { char: '一', meaning: 'một' }, { char: '月', meaning: 'nguyệt/thịt' }, { char: 'リ', meaning: 'con dao' }],
          mnemonic: 'Dùng dao (刀) cắt thịt (月) trước (前) khi dừng (止) bữa.',
          examples: ['名前 (なまえ) - tên', '三日前 (みっかまえ) - 3 ngày trước'],
          exampleSentences: [
            {
              jp: '駅の前にいます。', vn: 'Tôi đang ở trước nhà ga.',
              furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '前', reading: 'まえ', meaning: 'TIỀN' }]
            },
            {
              jp: '名前を書いてください。', vn: 'Hãy viết tên vào.',
              furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
            },
            {
              jp: '食事の前に手を洗います。', vn: 'Rửa tay trước bữa ăn.',
              furigana: [{ kanji: '食事', reading: 'しょくじ', meaning: 'THỰC SỰ' }, { kanji: '前', reading: 'まえ', meaning: 'TIỀN' }, { kanji: '手', reading: 'て', meaning: 'THỦ' }, { kanji: '洗', reading: 'あら', meaning: 'TẨY' }]
            },
            {
              jp: '前の方へどうぞ。', vn: 'Mời bạn đi ra phía trước.',
              furigana: [{ kanji: '前', reading: 'まえ', meaning: 'TIỀN' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
            },
            {
              jp: '午前の授業は九時からです。', vn: 'Giờ học buổi sáng bắt đầu từ 9 giờ.',
              furigana: [{ kanji: '午前', reading: 'ごぜん', meaning: 'NGỌ TIỀN' }, { kanji: '授業', reading: 'じゅぎょう', meaning: 'THỤ NGHIỆP' }, { kanji: '九時', reading: 'くじ', meaning: 'CỬU THỜI' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '失礼ですが、お名前は？', romaji: 'Shitsurei desu ga, o-namae wa?', vn: 'Xin lỗi, tên bạn là gì ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
        },
        {
          jp: 'お名前は何ですか。', romaji: 'O-namae wa nan desu ka.', vn: 'Tên của bạn là gì?',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'あの方のお名前は？', romaji: 'Ano kata no o-namae wa?', vn: 'Tên của vị kia là gì?',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
        },
        {
          jp: 'お子さんのお名前は何ですか。', romaji: 'Okosan no o-namae wa nan desu ka.', vn: 'Tên của cháu nhà mình là gì vậy ạ?',
          furigana: [{ kanji: '子', reading: 'こ', meaning: 'TỬ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'お名前を教えてください。', romaji: 'O-namae wo oshiete kudasai.', vn: 'Hãy cho tôi biết tên của bạn.',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
        },
        {
          jp: 'お名前はどこに書きますか。', romaji: 'O-namae wa doko ni kakimasu ka.', vn: 'Viết tên vào đâu ạ?',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        }
      ]
    },
    {
      word: 'はじめまして', kanji: '初めまして', romaji: 'hajimemashite', mean: 'Rất hân hạnh được gặp anh/chị (Lời chào lần đầu gặp)',
      kanjiDetails: [
        {
          kanji: '初',
          onyomi: 'ショ (sho)',
          kunyomi: 'はじ.めて (hajimete)',
          meaning: 'Đầu tiên, sơ khai',
          sinoVietnamese: 'SƠ',
          strokes: 7,
          jlpt: 'N4',
          radicals: '刀 (đao)',
          components: [{ char: '衤', meaning: 'áo' }, { char: '刀', meaning: 'con dao' }],
          mnemonic: 'Tại một nơi giao nhau giữa những thanh gươm (刀), mọi thứ mới chỉ bắt đầu (初).',
          examples: ['初めて (はじめて) - lần đầu', '初日 (しょにち) - ngày đầu'],
          exampleSentences: [
            {
              jp: '初めまして、田中です。', vn: 'Rất hân hạnh được gặp bạn, tôi là Tanaka.',
              furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
            },
            {
              jp: '初めて日本へ行きました。', vn: 'Lần đầu tiên tôi đi Nhật.',
              furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '初心を忘れません。', vn: 'Không bao giờ quên ý định ban đầu.',
              furigana: [{ kanji: '初心', reading: 'しょしん', meaning: 'SƠ TÂM' }, { kanji: '忘', reading: 'わす', meaning: 'VONG' }]
            },
            {
              jp: '初等教育が重要です。', vn: 'Giáo dục tiểu học (sơ đẳng) rất quan trọng.',
              furigana: [{ kanji: '初等教育', reading: 'しょとうきょういく', meaning: 'SƠ ĐẲNG GIÁO DỤC' }, { kanji: '重要', reading: 'じゅうよう', meaning: 'TRỌNG YẾU' }]
            },
            {
              jp: '初日の出（はつひので）を見ます。', vn: 'Ngắm bình minh ngày đầu năm.',
              furigana: [{ kanji: '初日の出', reading: 'はつひので', meaning: 'SƠ NHẬT XUẤT' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'はじめまして。田中です。', romaji: 'Hajimemashite. Tanaka desu.', vn: 'Rất hân hạnh được gặp bạn. Tôi là Tanaka.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: 'はじめまして。ベトナムから来ました。', romaji: 'Hajimemashite. Betonamu kara kimashita.', vn: 'Rất hân hạnh. Tôi đến từ Việt Nam.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '皆さん、はじめまして。', romaji: 'Minasan, hajimemashite.', vn: 'Chào mọi người, rất hân hạnh được làm quen.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }, { kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: 'はじめまして。どうぞよろしく。', romaji: 'Hajimemashite. Douzo yoroshiku.', vn: 'Rất vui được gặp bạn. Mong được giúp đỡ.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: 'はじめまして。私の名前はミラーです。', romaji: 'Hajimemashite. Watashi no namae wa Miraa desu.', vn: 'Rất vui được gặp. Tên tôi là Miller.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
        },
        {
          jp: 'はじめまして。日本から来ました。', romaji: 'Hajimemashite. Nihon kara kimashita.', vn: 'Rất vui được gặp. Tôi đến từ Nhật Bản.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        }
      ]
    },
    {
      word: 'どうぞよろしく', kanji: '', romaji: 'Douzo yoroshiku', mean: 'Rất hân hạnh được làm quen',
      examples: [
        {
          jp: 'はじめまして。どうぞよろしく。', romaji: 'Hajimemashite. Douzo yoroshiku.', vn: 'Rất vui được gặp bạn. Mong được giúp đỡ.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: 'どうぞよろしくお願いします。', romaji: 'Douzo yoroshiku onegaishimasu.', vn: 'Rất mong nhận được sự giúp đỡ của bạn.',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '皆さん、どうぞよろしく。', romaji: 'Minasan, douzo yoroshiku.', vn: 'Chào mọi người, mong mọi người giúp đỡ.',
          furigana: [{ kanji: '皆さん', reading: 'みなさん', meaning: 'GIAI' }]
        },
        {
          jp: 'こちらこそ、どうぞよろしく。', romaji: 'Kochira koso, douzo yoroshiku.', vn: 'Chính tôi mới là người cần sự giúp đỡ.',
          furigana: []
        },
        {
          jp: '今後とも、どうぞよろしく。', romaji: 'Kongo tomo, douzo yoroshiku.', vn: 'Từ nay về sau cũng xin được giúp đỡ.',
          furigana: [{ kanji: '今後', reading: 'こんご', meaning: 'KIM HẬU' }]
        },
        {
          jp: '山田さん、どうぞよろしく。', romaji: 'Yamada-san, douzo yoroshiku.', vn: 'Anh Yamada, rất mong được anh giúp đỡ.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }]
        }
      ]
    },
    {
      word: 'どうぞよろしくおねがいします', kanji: 'どうぞよろしくお願いします', romaji: 'douzo yoroshiku onegaishimasu', mean: 'Rất mong được sự giúp đỡ của anh/chị (lịch sự)',
      kanjiDetails: [
        {
          kanji: '願',
          onyomi: 'ガン (gan)',
          kunyomi: 'ねが.う (negau)',
          meaning: 'Cầu mong, nhờ vả',
          sinoVietnamese: 'NGUYỆN',
          strokes: 19,
          jlpt: 'N4',
          radicals: '頁 (hiệt/đầu)',
          components: [{ char: '原', meaning: 'nguồn gốc' }, { char: '頁', meaning: 'cái đầu/trang giấy' }],
          mnemonic: 'Khi nhờ vả/cầu nguyện (願) ai đó, ta thường cúi đầu (頁) sâu đến mức muốn thấy cả nguồn gốc (原) của sự việc.',
          examples: ['願う (ねがう) - cầu mong', '願書 (がんしょ) - đơn từ'],
          exampleSentences: [
            {
              jp: 'よろしくお願いします。', vn: 'Rất mong nhận được sự giúp đỡ.',
              furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
            },
            {
              jp: '平和（へいわ）を願います。', vn: 'Cầu mong hòa bình.',
              furigana: [{ kanji: '平和', reading: 'へいわ', meaning: 'BÌNH HÒA' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
            },
            {
              jp: '入学願書を出します。', vn: 'Nộp đơn nhập học.',
              furigana: [{ kanji: '入学願書', reading: 'にゅうがくがんしょ', meaning: 'NHẬP HỌC NGUYỆN THƯ' }, { kanji: '出', reading: 'だ', meaning: 'XUẤT' }]
            },
            {
              jp: '願いが叶いました。', vn: 'Điều ước đã thành hiện thực.',
              furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }, { kanji: '叶', reading: 'かな', meaning: 'DIỆP' }]
            },
            {
              jp: '願ってもないチャンスです。', vn: 'Đây là cơ hội không thể mong đợi hơn.',
              furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'はじめまして。どうぞよろしくお願いします。', romaji: 'Hajimemashite. Douzo yoroshiku onegai shimasu.', vn: 'Rất hân hạnh được gặp bạn. Rất mong nhận được sự giúp đỡ.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: 'こちらこそ、どうぞよろしくお願いします。', romaji: 'Kochira koso, douzo yoroshiku onegai shimasu.', vn: 'Chính tôi mới là người mong nhận được sự giúp đỡ.',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: 'これからお世話になります。どうぞよろしくお願いします。', romaji: 'Kore kara osewa ni narimasu. Douzo yoroshiku onegai shimasu.', vn: 'Từ nay về sau mong được anh giúp đỡ.',
          furigana: [{ kanji: '世', reading: 'せ', meaning: 'THẾ' }, { kanji: '話', reading: 'わ', meaning: 'THOẠI' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '今後とも、どうぞよろしくお願いします。', romaji: 'Kongo tomo, douzo yoroshiku onegai shimasu.', vn: 'Từ nay về sau cũng xin được giúp đỡ cho.',
          furigana: [{ kanji: '今後', reading: 'こんご', meaning: 'KIM HẬU' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '本日はどうぞよろしくお願いします。', romaji: 'Honjitsu wa douzo yoroshiku onegai shimasu.', vn: 'Ngày hôm nay rất mong được giúp đỡ.',
          furigana: [{ kanji: '本日', reading: 'ほんじつ', meaning: 'BẢN NHẬT' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '先生, どうぞよろしくお願いします。', romaji: 'Sensei, douzo yoroshiku onegaishimasu.', vn: 'Thầy/cô giáo, rất mong được thầy/cô giúp đỡ ạ.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        }
      ]
    },
    {
      word: 'こちらは～さんです', kanji: '', romaji: 'Kochira wa ~san desu', mean: 'Đây là anh/chị ~',
      examples: [
        {
          jp: 'こちらは佐藤さんです。', romaji: 'Kochira wa Satou-san desu.', vn: 'Đây là anh Satou.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }]
        },
        {
          jp: 'こちらはミラーさんです。', romaji: 'Kochira wa Miraa-san desu.', vn: 'Đây là anh Miller.',
          furigana: []
        },
        {
          jp: 'こちらは私の先生です。', romaji: 'Kochira wa watashi no sensei desu.', vn: 'Đây là thầy giáo của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '田中さん、こちらは山田さんです。', romaji: 'Tanaka-san, kochira wa Yamada-san desu.', vn: 'Anh Tanaka ơi, đây là anh Yamada.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }]
        },
        {
          jp: 'こちらは母です。', romaji: 'Kochira wa haha desu.', vn: 'Đây là mẹ tôi.',
          furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }]
        },
        {
          jp: 'こちらは新しい学生です。', romaji: 'Kochira wa atarashii gakusei desu.', vn: 'Đây là học sinh mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        }
      ]
    },
    {
      word: '～からきました', kanji: '～から来ました', romaji: '~kara kimashita', mean: '(Tôi) đến từ ~',
      kanjiDetails: [
        {
          kanji: '来',
          onyomi: 'ライ (rai)',
          kunyomi: 'く.る (kuru), き.たる (kitaru)',
          meaning: 'Đến, tới',
          sinoVietnamese: 'LAI',
          strokes: 7,
          jlpt: 'N5',
          radicals: '人 (nhân)',
          components: [{ char: '木', meaning: 'cây' }, { char: '丷', meaning: 'mầm' }],
          mnemonic: 'Nhiều người đi về phía cái cây (木) để thu hoạch mầm (丷) đang đến (来).',
          examples: ['来年 (らいねん) - năm sau', '将来 (しょうらい) - tương lai'],
          exampleSentences: [
            {
              jp: 'ベトナムから来ました。', vn: 'Tôi đến từ Việt Nam.',
              furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
            },
            {
              jp: '来週の月曜日に会います。', vn: 'Hẹn gặp vào thứ hai tuần sau.',
              furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '月曜日', reading: 'げつようび', meaning: 'NGUYỆT DIỆU NHẬT' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
            },
            {
              jp: '来年、日本へ行きたいです。', vn: 'Năm sau tôi muốn đi Nhật.',
              furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '将来の夢は何ですか。', vn: 'Ước mơ tương lai của bạn là gì?',
              furigana: [{ kanji: '将来', reading: 'しょうらい', meaning: 'TƯƠNG LAI' }, { kanji: '夢', reading: 'ゆめ', meaning: 'MỘNG' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
            },
            {
              jp: 'お客さんが来ました。', vn: 'Khách đã đến rồi.',
              furigana: [{ kanji: '客', reading: 'きゃく', meaning: 'KHÁCH' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: 'ベトナムから来ました。', romaji: 'Betonamu kara kimashita.', vn: 'Tôi đến từ Việt Nam.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'アメリカから来ました。', romaji: 'Amerika kara kimashita.', vn: 'Tôi đến từ Mỹ.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'どこから来ましたか。', romaji: 'Doko kara kimashita ka.', vn: 'Bạn đến từ đâu?',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '家族はハノイから来ました。', romaji: 'Kazoku wa Hanoi kara kimashita.', vn: 'Gia đình tôi đến từ Hà Nội.',
          furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '日本から来ました。', romaji: 'Nihon kara kimashita.', vn: 'Tôi đến từ Nhật Bản.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '彼は中国から来ました。', romaji: 'Kare wa Chuugoku kara kimashita.', vn: 'Anh ấy đến từ Trung Quốc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        }
      ]
    },

    // Quốc gia
    {
      word: 'アメリカ', kanji: '', romaji: 'Amerika', mean: 'Mỹ',
      examples: [
        {
          jp: 'アメリカから来ました。', romaji: 'Amerika kara kimashita.', vn: 'Tôi đến từ Mỹ.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'アメリカは大きいです。', romaji: 'Amerika wa ookii desu.', vn: 'Nước Mỹ rất rộng lớn.',
          furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: 'アメリカの料理はパンです。', romaji: 'Amerika no ryouri wa pan desu.', vn: 'Món ăn của Mỹ là bánh mì (ví dụ).',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        },
        {
          jp: '昨日アメリカへ行きました。', romaji: 'Kinou Amerika e ikimashita.', vn: 'Hôm qua tôi đã đi Mỹ.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'アメリカ人の友達がいます。', romaji: 'Amerikajin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Mỹ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'アメリカで英語を話します。', romaji: 'Amerika de eigo wo hanashimasu.', vn: 'Ở Mỹ người ta nói tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'イギリス', kanji: '', romaji: 'Igirisu', mean: 'Anh',
      examples: [
        {
          jp: 'イギリスから来ました。', romaji: 'Igirisu kara kimashita.', vn: 'Tôi đến từ Anh.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'イギリスの天気はどうですか。', romaji: 'Igirisu no tenki wa dou desu ka.', vn: 'Thời tiết ở Anh thế nào?',
          furigana: [{ kanji: '天気', reading: 'てんき', meaning: 'THIÊN KHÍ' }]
        },
        {
          jp: 'イギリスは島国です。', romaji: 'Igirisu wa shimaguni desu.', vn: 'Nước Anh là một quốc đảo.',
          furigana: [{ kanji: '島国', reading: 'しまぐに', meaning: 'ĐẢO QUỐC' }]
        },
        {
          jp: 'イギリスで英語を勉強します。', romaji: 'Igirisu de eigo wo benkyou shimasu.', vn: 'Học tiếng Anh ở Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'イギリスのデザインが好きです。', romaji: 'Igirisu no dezain ga suki desu.', vn: 'Tôi thích thiết kế của Anh.',
          furigana: [{ kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '彼はイギリス人です。', romaji: 'Kare wa Igirisujin desu.', vn: 'Anh ấy là người Anh.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        }
      ]
    },
    {
      word: 'イタリア', kanji: '', romaji: 'Itaria', mean: 'Ý',
      examples: [
        {
          jp: 'イタリアから来ました。', romaji: 'Itaria kara kimashita.', vn: 'Tôi đến từ Ý.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'イタリアの料理はピザです。', romaji: 'Itaria no ryouri wa piza desu.', vn: 'Món ăn của Ý là pizza.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        },
        {
          jp: 'イタリアは歴史が深いです。', romaji: 'Itaria wa rekishi ga fukai desu.', vn: 'Nước Ý có lịch sử lâu đời.',
          furigana: [{ kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '深', reading: 'ふか', meaning: 'THÂM' }]
        },
        {
          jp: 'イタリアの車はかっこいいです。', romaji: 'Itaria no kuruma wa kakkoii desu.', vn: 'Xe hơi của Ý rất ngầu.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }]
        },
        {
          jp: 'いつイタリアへ行きますか。', romaji: 'Itsu Itaria e ikimasu ka.', vn: 'Khi nào bạn đi Ý?',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はイタリア語を話します。', romaji: 'Kare wa Itariago wo hanashimasu.', vn: 'Anh ấy nói tiếng Ý.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'イラン', kanji: '', romaji: 'Iran', mean: 'Iran',
      examples: [
        {
          jp: 'イランから来ました。', romaji: 'Iran kara kimashita.', vn: 'Tôi đến từ Iran.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'イランは西アジアにあります。', romaji: 'Iran wa nishi ajia ni arimasu.', vn: 'Iran nằm ở Tây Á.',
          furigana: [{ kanji: '西', reading: 'にし', meaning: 'TÂY' }]
        },
        {
          jp: 'イランの文化を学びます。', romaji: 'Iran no bunka wo manabimasu.', vn: 'Học về văn hóa Iran.',
          furigana: [{ kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
        },
        {
          jp: '彼はイラン人ですか。', romaji: 'Kare wa Iranjin desu ka.', vn: 'Anh ấy có phải người Iran không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'イランの料理を食べたいです。', romaji: 'Iran no ryouri wo tabetai desu.', vn: 'Tôi muốn ăn món ăn Iran.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: 'イランは大きな国です。', romaji: 'Iran wa ookina kuni desu.', vn: 'Iran là một đất nước lớn.',
          furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        }
      ]
    },
    {
      word: 'インド', kanji: '', romaji: 'Indo', mean: 'Ấn Độ',
      examples: [
        {
          jp: 'インドから来ました。', romaji: 'Indo kara kimashita.', vn: 'Tôi đến từ Ấn Độ.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'インドのカレーはおいしいです。', romaji: 'Indo no karee wa oishii desu.', vn: 'Cà phê Ấn Độ rất ngon (nghĩa rộng là món cà ri).',
          furigana: []
        },
        {
          jp: 'インドは人口が多いです。', romaji: 'Indo wa jinkou ga oi desu.', vn: 'Ấn Độ có dân số đông.',
          furigana: [{ kanji: '人口', reading: 'じんこう', meaning: 'NHÂN KHẨU' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }]
        },
        {
          jp: 'インドへ旅行に行きたいです。', romaji: 'Indo e ryokou ni ikitai desu.', vn: 'Tôi muốn đi du lịch Ấn Độ.',
          furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'インドの映画は長いです。', romaji: 'Indo no eiga wa nagai desu.', vn: 'Phim Ấn Độ rất dài.',
          furigana: [{ kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '長', reading: 'なが', meaning: 'TRƯỜNG' }]
        },
        {
          jp: '彼はインドのエンジニアです。', romaji: 'Kare wa Indo no enjinia desu.', vn: 'Anh ấy là kỹ sư người Ấn Độ.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }]
        }
      ]
    },
    {
      word: 'インドネシア', kanji: '', romaji: 'Indoneshia', mean: 'Indonesia',
      examples: [
        {
          jp: 'インドネシアから来ました。', romaji: 'Indoneshia kara kimashita.', vn: 'Tôi đến từ Indonesia.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'インドネシアは暑いですか。', romaji: 'Indoneshia wa atsui desu ka.', vn: 'Indonesia có nóng không?',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }]
        },
        {
          jp: 'インドネシアの海はきれいです。', romaji: 'Indoneshia no umi wa kirei desu.', vn: 'Biển ở Indonesia rất đẹp.',
          furigana: [{ kanji: '海', reading: 'うみ', meaning: 'HẢI' }]
        },
        {
          jp: '彼はインドネシア人です。', romaji: 'Kare wa Indoneshiajin desu.', vn: 'Anh ấy là người Indonesia.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'インドネシアへ仕事に行きます。', romaji: 'Indoneshia e shigoto ni ikimasu.', vn: 'Tôi đi Indonesia làm việc.',
          furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'インドネシア語は易しいですか。', romaji: 'Indoneshiago wa yasashii desu ka.', vn: 'Tiếng Indonesia có dễ không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '易', reading: 'やさ', meaning: 'DỊ' }]
        }
      ]
    },
    {
      word: 'エジプト', kanji: '', romaji: 'Ejiputo', mean: 'Ai Cập',
      examples: [
        {
          jp: 'エジプトから来ました。', romaji: 'Ejiputo kara kimashita.', vn: 'Tôi đến từ Ai Cập.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'エジプトはピラミッドが有名です。', romaji: 'Ejiputo wa piramiddo ga yuumei desu.', vn: 'Ai Cập nổi tiếng với kim tự tháp.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'エジプトの歴史を勉強します。', romaji: 'Ejiputo no rekishi wo benkyou shimasu.', vn: 'Tôi học lịch sử Ai Cập.',
          furigana: [{ kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'エジプトへ行きたいです。', romaji: 'Ejiputo e ikitai desu.', vn: 'Tôi muốn đi Ai Cập.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はエジプト人ですか。', romaji: 'Kare wa Ejiputojin desu ka.', vn: 'Anh ấy có phải người Ai Cập không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'エジプトの料理はおいしいです。', romaji: 'Ejiputo no ryouri wa oishii desu.', vn: 'Món ăn Ai Cập rất ngon.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        }
      ]
    },
    {
      word: 'オーストラリア', kanji: '', romaji: 'Oosutoraria', mean: 'Úc',
      examples: [
        {
          jp: 'オーストラリアから来ました。', romaji: 'Oosutoraria kara kimashita.', vn: 'Tôi đến từ Úc.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'オーストラリアは南にあります。', romaji: 'Oosutoraria wa minami ni arimasu.', vn: 'Nước Úc nằm ở phía Nam.',
          furigana: [{ kanji: '南', reading: 'みなみ', meaning: 'NAM' }]
        },
        {
          jp: 'コアラはオーストラリアにいます。', romaji: 'Koara wa Oosutoraria ni imasu.', vn: 'Gấu Koala có ở Úc.',
          furigana: []
        },
        {
          jp: 'オーストラリアの海で泳ぎます。', romaji: 'Oosutoraria no umi de oyogimasu.', vn: 'Bơi ở biển nước Úc.',
          furigana: [{ kanji: '海', reading: 'うみ', meaning: 'HÀI' }, { kanji: '泳', reading: 'およ', meaning: 'VỊNH' }]
        },
        {
          jp: '彼はオーストラリア人です。', romaji: 'Kare wa Oosutorariajin desu.', vn: 'Anh ấy là người Úc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'オーストラリアへ留学します。', romaji: 'Oosutoraria e ryuugaku shimasu.', vn: 'Tôi đi du học ở Úc.',
          furigana: [{ kanji: '留学', reading: 'りゅうがく', meaning: 'LƯU HỌC' }]
        }
      ]
    },
    {
      word: 'カナダ', kanji: '', romaji: 'Kanada', mean: 'Canada',
      examples: [
        {
          jp: 'カナダから来ました。', romaji: 'Kanada kara kimashita.', vn: 'Tôi đến từ Canada.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'カナダは大きいです。', romaji: 'Kanada wa ookii desu.', vn: 'Canada rất rộng lớn.',
          furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: 'カナダの冬はとても寒いです。', romaji: 'Kanada no fuyu wa totemo samui desu.', vn: 'Mùa đông ở Canada rất lạnh.',
          furigana: [{ kanji: '冬', reading: 'ふゆ', meaning: 'ĐÔNG' }, { kanji: '寒', reading: 'さむ', meaning: 'HÀN' }]
        },
        {
          jp: 'カナダへメープルシロップを買いに行きます。', romaji: 'Kanada e meepuru shiroppu wo kai ni ikimasu.', vn: 'Tôi đi Canada để mua siro lá phong.',
          furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はカナダ人です。', romaji: 'Kare wa Kanadajin desu.', vn: 'Anh ấy là người Canada.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'カナダには湖がたくさんあります。', romaji: 'Kanada ni wa mizuumi ga takusan arimasu.', vn: 'Ở Canada có rất nhiều hồ.',
          furigana: [{ kanji: '湖', reading: 'みずうみ', meaning: 'HỒ' }]
        }
      ]
    },
    {
      word: 'かんこく', kanji: '韓国', romaji: 'Kankoku', mean: 'Hàn Quốc',
      kanjiDetails: [
        {
          kanji: '韓',
          onyomi: 'カン (kan)',
          kunyomi: '',
          meaning: 'Hàn (nước Hàn)',
          sinoVietnamese: 'HÀN',
          strokes: 18,
          jlpt: 'N1',
          radicals: '韋 (vi/da mềm)',
          components: [{ char: '韋', meaning: 'da' }],
          mnemonic: 'Chữ Hàn trong Hàn Quốc.',
          examples: ['韓国 (かんこく) - Hàn Quốc'],
          exampleSentences: [
            {
              jp: '韓国から来ました。', vn: 'Tôi đến từ Hàn Quốc.',
              furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
            },
            {
              jp: '韓国料理はおいしいです。', vn: 'Đồ ăn Hàn Quốc rất ngon.',
              furigana: [{ kanji: '韓国料理', reading: 'かんこくりょうり', meaning: 'HÀN QUỐC LIÊU LÝ' }]
            },
            {
              jp: '韓国語を勉強しています。', vn: 'Tôi đang học tiếng Hàn.',
              furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '最近、韓国ドラマが人気です。', vn: 'Dạo này phim truyền hình Hàn Quốc rất được ưa chuộng.',
              furigana: [{ kanji: '最近', reading: 'さいきん', meaning: 'TỐI CẬN' }, { kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '人気', reading: 'にんき', meaning: 'NHÂN KHÍ' }]
            },
            {
              jp: '一回韓国へ行きたいです。', vn: 'Tôi muốn đi Hàn Quốc một lần.',
              furigana: [{ kanji: '一回', reading: 'いっかい', meaning: 'NHẤT HỒI' }, { kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            }
          ]
        },
        {
          kanji: '国',
          onyomi: 'コク (koku)',
          kunyomi: 'くに (kuni)',
          meaning: 'Quốc gia, đất nước',
          sinoVietnamese: 'QUỐC',
          strokes: 8,
          jlpt: 'N5',
          radicals: '囗 (vi/vây quanh)',
          components: [{ char: '囗', meaning: 'biên giới' }, { char: '玉', meaning: 'viên ngọc/vua' }],
          mnemonic: 'Quốc gia (国) là nơi có biên giới (囗) bao quanh bảo vệ vị vua và viên ngọc (玉) quý.',
          examples: ['外国 (がいこく) - nước ngoài', '中国 (ちゅうごく) - Trung Quốc'],
          exampleSentences: [
            {
              jp: '日本はいい国です。', vn: 'Nhật Bản là một đất nước đẹp.',
              furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
            },
            {
              jp: '外国の文化を学びます。', vn: 'Học về văn hóa nước ngoài.',
              furigana: [{ kanji: '外国', reading: 'がいこく', meaning: 'NGOẠI QUỐC' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
            },
            {
              jp: '国へ帰ります。', vn: 'Trở về nước.',
              furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }]
            },
            {
              jp: '国際会議に参加します。', vn: 'Tham gia hội nghị quốc tế.',
              furigana: [{ kanji: '国際会議', reading: 'こくさいかいぎ', meaning: 'QUỐC TẾ HỘI NGHỊ' }, { kanji: '参加', reading: 'さんか', meaning: 'TAM GIA' }]
            },
            {
              jp: '国籍を教えてください。', vn: 'Hãy cho tôi biết quốc tịch của bạn.',
              furigana: [{ kanji: '国籍', reading: 'こくせき', meaning: 'QUỐC TỊCH' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '韓国から来ました。', romaji: 'Kankoku kara kimashita.', vn: 'Tôi đến từ Hàn Quốc.',
          furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '韓国料理を食べます。', romaji: 'Kankoku ryouri wo tabemasu.', vn: 'Tôi ăn món ăn Hàn Quốc.',
          furigana: [{ kanji: '韓国料理', reading: 'かんこくりょうり', meaning: 'HÀN QUỐC LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '韓国の友達がいます。', romaji: 'Kankoku no tomodachi ga imasu.', vn: 'Tôi có bạn người Hàn Quốc.',
          furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: '韓国へ旅行に行きます。', romaji: 'Kankoku e ryokou ni ikimasu.', vn: 'Tôi đi du lịch Hàn Quốc.',
          furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '韓国は近いです。', romaji: 'Kankoku wa chikai desu.', vn: 'Hàn Quốc thì gần.',
          furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '近', reading: 'ちか', meaning: 'CẬN' }]
        },
        {
          jp: '韓国のドラマは人気があります。', romaji: 'Kankoku no dorama wa ninki ga arimasu.', vn: 'Phim truyền hình Hàn Quốc rất được ưa chuộng.',
          furigana: [{ kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }, { kanji: '人気', reading: 'にんき', meaning: 'NHÂN KHÍ' }]
        }
      ]
    },
    {
      word: 'サウジアラビア', kanji: '', romaji: 'Saujiarabia', mean: 'Ả-rập Xê-út',
      examples: [
        {
          jp: 'サウジアラビアから来ました。', romaji: 'Saujiarabia kara kimashita.', vn: 'Tôi đến từ Ả-rập Xê-út.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'サウジアラビアは暑いですか。', romaji: 'Saujiarabia wa atsui desu ka.', vn: 'Ả-rập Xê-út có nóng không?',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }]
        },
        {
          jp: '石油（せきゆ）はサウジアラビアにあります。', romaji: 'Sekiyu wa Saujiarabia ni arimasu.', vn: 'Dầu mỏ có ở Ả-rập Xê-út.',
          furigana: [{ kanji: '石油', reading: 'せきゆ', meaning: 'THẠCH DU' }]
        },
        {
          jp: '彼はサウジアラビア人です。', romaji: 'Kare wa Saujiarabiajin desu.', vn: 'Anh ấy là người Ả-rập Xê-út.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'サウジアラビアへ仕事に行きます。', romaji: 'Saujiarabia e shigoto ni ikimasu.', vn: 'Tôi đi Ả-rập Xê-út làm việc.',
          furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'サウジアラビアの砂漠（さばく）は広いです。', romaji: 'Saujiarabia no sabaku wa hiroi desu.', vn: 'Sa mạc ở Ả-rập Xê-út rất rộng.',
          furigana: [{ kanji: '砂漠', reading: 'さばく', meaning: 'SA MẠC' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }]
        }
      ]
    },
    {
      word: 'シンガポール', kanji: '', romaji: 'Shingapooru', mean: 'Singapore',
      examples: [
        {
          jp: 'シンガポールから来ました。', romaji: 'Shingapooru kara kimashita.', vn: 'Tôi đến từ Singapore.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'シンガポールはきれいな町です。', romaji: 'Shingapooru wa kirei na machi desu.', vn: 'Singapore là một thành phố đẹp.',
          furigana: [{ kanji: '町', reading: 'まち', meaning: 'ĐINH' }]
        },
        {
          jp: 'シンガポールの料理を食べます。', romaji: 'Shingapooru no ryouri wo tabemasu.', vn: 'Tôi ăn món ăn Singapore.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: 'シンガポールへ旅行に行きます。', romaji: 'Shingapooru e ryokou ni ikimasu.', vn: 'Tôi đi du lịch Singapore.',
          furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はシンガポール人ですか。', romaji: 'Kare wa Shingapoorujin desu ka.', vn: 'Anh ấy có phải người Singapore không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'シンガポールは暑い国です。', romaji: 'Shingapooru wa atsui kuni desu.', vn: 'Singapore là một đất nước nóng.',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        }
      ]
    },
    {
      word: 'スペイン', kanji: '', romaji: 'Supein', mean: 'Tây Ban Nha',
      examples: [
        {
          jp: 'スペインから来ました。', romaji: 'Supein kara kimashita.', vn: 'Tôi đến từ Tây Ban Nha.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'スペインの料理はパエリアです。', romaji: 'Supein no ryouri wa paeria desu.', vn: 'Món ăn của Tây Ban Nha là Paella.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        },
        {
          jp: 'スペインでサッカーを見ます。', romaji: 'Supein de sakkaa wo mimasu.', vn: 'Xem bóng đá ở Tây Ban Nha.',
          furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'スペインの町は賑やかです。', romaji: 'Supein no machi wa nigiyaka desu.', vn: 'Thành phố ở Tây Ban Nha rất nhộn nhịp.',
          furigana: [{ kanji: '町', reading: 'まち', meaning: 'ĐINH' }, { kanji: '賑', reading: 'にぎ', meaning: 'CHẨN' }]
        },
        {
          jp: '彼はスペイン人です。', romaji: 'Kare wa Supeinjin desu.', vn: 'Anh ấy là người Tây Ban Nha.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'スペインへ行きたいですね。', romaji: 'Supein e ikitai desu ne.', vn: 'Tôi muốn đi Tây Ban Nha quá.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'タイ', kanji: '', romaji: 'Tai', mean: 'Thái Lan',
      examples: [
        {
          jp: 'タイから来ました。', romaji: 'Tai kara kimashita.', vn: 'Tôi đến từ Thái Lan.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'タイは暑いですか。', romaji: 'Tai wa atsui desu ka.', vn: 'Thái Lan có nóng không?',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }]
        },
        {
          jp: 'タイの料理はおいしいです。', romaji: 'Tai no ryouri wa oishii desu.', vn: 'Món ăn Thái rất ngon.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        },
        {
          jp: '田中さんはタイへ行きました。', romaji: 'Tanaka-san wa Tai e ikimashita.', vn: 'Anh Tanaka đã đi Thái Lan.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はタイ人ですか。', romaji: 'Kare wa Taijin desu ka.', vn: 'Anh ấy có phải người Thái không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'タイで仕事をします。', romaji: 'Tai de shigoto wo shimasu.', vn: 'Tôi làm việc ở Thái Lan.',
          furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        }
      ]
    },
    {
      word: 'ちゅうごく', kanji: '中国', romaji: 'Chuugoku', mean: 'Trung Quốc',
      kanjiDetails: [
        {
          kanji: '中',
          onyomi: 'チュウ (chuu)',
          kunyomi: 'なか (naka)',
          meaning: 'Trong, giữa',
          sinoVietnamese: 'TRUNG',
          strokes: 4,
          jlpt: 'N5',
          radicals: '丨 (côn)',
          components: [{ char: '口', meaning: 'miệng/hình vuông' }, { char: '丨', meaning: 'nét sổ' }],
          mnemonic: 'Một nét sổ (丨) đâm xuyên qua chính giữa (中) cái hộp (口).',
          examples: ['中心 (ちゅうしん) - trung tâm', '一日中 (いちにちじゅう) - suốt cả ngày'],
          exampleSentences: [
            {
              jp: '箱の中に何がありますか。', vn: 'Trong hộp có cái gì?',
              furigana: [{ kanji: '箱', reading: 'はこ', meaning: 'SƯƠNG' }, { kanji: '中', reading: 'なか', meaning: 'TRUNG' }, { kanji: '何', reading: 'なに', meaning: 'HÀ' }]
            },
            {
              jp: '中国から来ました。', vn: 'Tôi đến từ Trung Quốc.',
              furigana: [{ kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
            },
            {
              jp: '田中さんは日本人です。', vn: 'Anh Tanaka là người Nhật.',
              furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
            },
            {
              jp: '夜中に電話がかかってきました。', vn: 'Điện thoại gọi đến vào giữa đêm.',
              furigana: [{ kanji: '夜中', reading: 'よなか', meaning: 'DẠ TRUNG' }, { kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }]
            },
            {
              jp: '世界中の人が知っています。', vn: 'Người trên khắp thế giới đều biết.',
              furigana: [{ kanji: '世界中', reading: 'せかいじゅう', meaning: 'THẾ GIỚI TRUNG' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
            }
          ]
        },
        {
          kanji: '国',
          onyomi: 'コク (koku)',
          kunyomi: 'くに (kuni)',
          meaning: 'Quốc gia, đất nước',
          sinoVietnamese: 'QUỐC',
          strokes: 8,
          jlpt: 'N5',
          radicals: '囗 (vi/vây quanh)',
          components: [{ char: '囗', meaning: 'biên giới' }, { char: '玉', meaning: 'viên ngọc' }],
          mnemonic: 'Vua giữ ngọc quý trong biên giới quốc gia.',
          examples: ['韓国 (かんこく) - Hàn Quốc', '中国 (ちゅうごく) - Trung Quốc']
        }
      ],
      examples: [
        {
          jp: '中国は広いです。', romaji: 'Chuugoku wa hiroi desu.', vn: 'Trung Quốc rất rộng lớn.',
          furigana: [{ kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }]
        },
        {
          jp: '中国から来ました。', romaji: 'Chuugoku kara kimashita.', vn: 'Tôi đến từ Trung Quốc.',
          furigana: [{ kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '中国語を勉強します。', romaji: 'Chuugokugo wo benkyou shimasu.', vn: 'Tôi học tiếng Trung.',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '北京は中国の首都です。', romaji: 'Pekin wa Chuugoku no shuto desu.', vn: 'Bắc Kinh là thủ đô của Trung Quốc.',
          furigana: [{ kanji: '北京', reading: 'ぺきん', meaning: 'BẮC KINH' }, { kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '首都', reading: 'しゅと', meaning: 'THỦ ĐÔ' }]
        },
        {
          jp: '中国の歴史が好きです。', romaji: 'Chuugoku no rekishi ga suki desu.', vn: 'Tôi thích lịch sử Trung Quốc.',
          furigana: [{ kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '中国へパンダを見に行きたいです。', romaji: 'Chuugoku e panda wo mi ni ikitai desu.', vn: 'Tôi muốn đi Trung Quốc để xem gấu trúc.',
          furigana: [{ kanji: '中国', reading: 'ちゅうごく', meaning: 'TRUNG QUỐC' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'ドイツ', kanji: '', romaji: 'Doitsu', mean: 'Đức',
      examples: [
        {
          jp: 'ドイツから来ました。', romaji: 'Doitsu kara kimashita.', vn: 'Tôi đến từ Đức.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'ドイツのビールは有名です。', romaji: 'Doitsu no biiru wa yuumei desu.', vn: 'Bia Đức rất nổi tiếng.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'ドイツで車を造っています。', romaji: 'Doitsu de kuruma wo tsukutte imasu.', vn: 'Người ta đang chế tạo xe hơi ở Đức.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '造', reading: 'つく', meaning: 'TẠO' }]
        },
        {
          jp: 'ドイツの歴史を学びました。', romaji: 'Doitsu no rekishi wo manabimashita.', vn: 'Tôi đã học lịch sử của Đức.',
          furigana: [{ kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
        },
        {
          jp: '彼はドイツ人ですか。', romaji: 'Kare wa Doitsujin desu ka.', vn: 'Anh ấy có phải người Đức không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ドイツへ旅行に行きたいです。', romaji: 'Doitsu e ryokou ni ikitai desu.', vn: 'Tôi muốn đi du lịch Đức.',
          furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'にほん', kanji: '日本', romaji: 'Nihon', mean: 'Nhật Bản',
      kanjiDetails: [
        {
          kanji: '日',
          onyomi: 'ニチ (nichi), ジツ (jitsu)',
          kunyomi: 'ひ (hi), か (ka)',
          meaning: 'Ngày, mặt trời',
          sinoVietnamese: 'NHẬT',
          strokes: 4,
          jlpt: 'N5',
          radicals: '日 (mặt trời)',
          components: [{ char: '日', meaning: 'mặt trời' }],
          mnemonic: 'Hình ảnh mặt trời với một vạch ngang ở giữa.',
          examples: ['今日 (きょう) - hôm nay', '日曜日 (にちようび) - Chủ nhật'],
          exampleSentences: [
            {
              jp: '今日はいい天気ですね。', vn: 'Hôm nay trời đẹp nhỉ.',
              furigana: [{ kanji: '今日', reading: 'きょう', meaning: 'KIM NHẬT' }, { kanji: '天気', reading: 'てんき', meaning: 'THIÊN KHÍ' }]
            },
            {
              jp: '日本は東にあります。', vn: 'Nhật Bản nằm ở phía Đông.',
              furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '東', reading: 'ひがし', meaning: 'ĐÔNG' }]
            },
            {
              jp: '日曜日、買い物へ行きます。', vn: 'Chủ nhật tôi đi mua sắm.',
              furigana: [{ kanji: '日曜日', reading: 'にちようび', meaning: 'NHẬT DIỆU NHẬT' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '物', reading: 'もの', meaning: 'VẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '毎日、日本語を勉強します。', vn: 'Mỗi ngày tôi đều học tiếng Nhật.',
              furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
            },
            {
              jp: '日記を書いています。', vn: 'Tôi đang viết nhật ký.',
              furigana: [{ kanji: '日記', reading: 'にっき', meaning: 'NHẬT KÝ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
            }
          ]
        },
        {
          kanji: '本',
          onyomi: 'ホン (hon)',
          kunyomi: 'もと (moto)',
          meaning: 'Gốc, rễ, sách',
          sinoVietnamese: 'BẢN',
          strokes: 5,
          jlpt: 'N5',
          radicals: '木 (mộc)',
          components: [{ char: '木', meaning: 'cái cây' }, { char: '一', meaning: 'một nét gạch' }],
          mnemonic: 'Gạch một nét (一) dưới gốc cây (木) để chỉ nguồn gốc, căn bản (本).',
          examples: ['日本 (にほん) - Nhật Bản', '本 (ほん) - quyển sách'],
          exampleSentences: [
            {
              jp: 'これは私の本です。', vn: 'Đây là sách của tôi.',
              furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TỰ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
            },
            {
              jp: '日本から来ました。', vn: 'Tôi đến từ Nhật Bản.',
              furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
            },
            {
              jp: '本当のことを教えてください。', vn: 'Hãy cho tôi biết sự thật.',
              furigana: [{ kanji: '本当', reading: 'ほんとう', meaning: 'BẢN ĐƯƠNG' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
            },
            {
              jp: '三本の傘（かさ）があります。', vn: 'Có 3 cây dù.',
              furigana: [{ kanji: '三本', reading: 'さんぼん', meaning: 'TAM BẢN' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
            },
            {
              jp: '本屋へ行きましょう。', vn: 'Cùng đi hiệu sách nào.',
              furigana: [{ kanji: '本屋', reading: 'ほんや', meaning: 'BẢN ỐC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            }
          ]
        }
      ],
      examples: [
        {
          jp: '日本は美しい国です。', romaji: 'Nihon wa utsukushii kuni desu.', vn: 'Nhật Bản là một đất nước đẹp.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '美', reading: 'utsuku', meaning: 'MỸ' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        },
        {
          jp: '日本から来ました。', romaji: 'Nihon kara kimashita.', vn: 'Tôi đến từ Nhật Bản.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '日本語を勉強します。', romaji: 'Nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '富士山は日本の最高峰です。', romaji: 'Fujisan wa Nihon no saikouhou desu.', vn: 'Núi Phú Sĩ là ngọn núi cao nhất Nhật Bản.',
          furigana: [{ kanji: '富士山', reading: 'ふじさん', meaning: 'PHÚ SĨ SƠN' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '最高峰', reading: 'さいこうほう', meaning: 'TỐI CAO PHONG' }]
        },
        {
          jp: '日本の文化に興味があります。', romaji: 'Nihon no bunka ni kyoumi ga arimasu.', vn: 'Tôi có hứng thú với văn hóa Nhật Bản.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '興味', reading: 'きょうみ', meaning: 'HỨNG VỊ' }]
        },
        {
          jp: '日本へ旅行に行きます。', romaji: 'Nihon e ryokou ni ikimasu.', vn: 'Tôi đi du lịch Nhật Bản.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'フランス', kanji: '', romaji: 'Furansu', mean: 'Pháp',
      examples: [
        {
          jp: 'フランスから来ました。', romaji: 'Furansu kara kimashita.', vn: 'Tôi đến từ Pháp.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'フランスのワインはおいしい。', romaji: 'Furansu no wain wa oishii.', vn: 'Rượu vang Pháp rất ngon.',
          furigana: []
        },
        {
          jp: 'フランスは芸術（げいじゅつ）の国です。', romaji: 'Furansu wa geijutsu no kuni desu.', vn: 'Pháp là đất nước của nghệ thuật.',
          furigana: [{ kanji: '芸術', reading: 'げいじゅつ', meaning: 'NGHỆ THUẬT' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        },
        {
          jp: 'パリはフランスの首都です。', romaji: 'Pari wa Furansu no shuto desu.', vn: 'Paris là thủ đô của Pháp.',
          furigana: [{ kanji: '首都', reading: 'しゅと', meaning: 'THỦ ĐÔ' }]
        },
        {
          jp: '彼はフランス人です。', romaji: 'Kare wa Furansujin desu.', vn: 'Anh ấy là người Pháp.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'フランスへ行ってみたいです。', romaji: 'Furansu e itte mitai desu.', vn: 'Tôi muốn thử đi Pháp.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'フィリピン', kanji: '', romaji: 'Firipin', mean: 'Philippines',
      examples: [
        {
          jp: 'フィリピンから来ました。', romaji: 'Firipin kara kimashita.', vn: 'Tôi đến từ Philippines.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'フィリピンは島がたくさんあります。', romaji: 'Firipin wa shima ga takusan arimasu.', vn: 'Philippines có nhiều đảo.',
          furigana: [{ kanji: '島', reading: 'しま', meaning: 'ĐẢO' }]
        },
        {
          jp: 'フィリピンのマンゴーは有名です。', romaji: 'Firipin no mangoo wa yuumei desu.', vn: 'Xoài của Philippines rất nổi tiếng.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: '彼はフィリピン人ですか。', romaji: 'Kare wa Firipinjin desu ka.', vn: 'Anh ấy có phải người Philippines không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'フィリピンへダイビングに行きます。', romaji: 'Firipin e daibingu ni ikimasu.', vn: 'Tôi đi Philippines để lặn biển.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'フィリピンの海はきれいです。', romaji: 'Firipin no umi wa kirei desu.', vn: 'Biển của Philippines rất đẹp.',
          furigana: [{ kanji: '海', reading: 'うみ', meaning: 'HÀI' }]
        }
      ]
    },
    {
      word: 'ブラジル', kanji: '', romaji: 'Burajiru', mean: 'Brazil',
      examples: [
        {
          jp: 'ブラジルから来ました。', romaji: 'Burajiru kara kimashita.', vn: 'Tôi đến từ Brazil.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'ブラジルは南米にあります。', romaji: 'Burajiru wa nanbei ni arimasu.', vn: 'Brazil nằm ở Nam Mỹ.',
          furigana: [{ kanji: '南米', reading: 'なんべい', meaning: 'NAM MỄ' }]
        },
        {
          jp: 'ブラジルのサッカーは凄いです。', romaji: 'Burajiru no sakkaa wa sugoi desu.', vn: 'Bóng đá của Brazil rất tuyệt vời.',
          furigana: [{ kanji: '凄', reading: 'すご', meaning: 'THÊ' }]
        },
        {
          jp: '彼はブラジル人です。', romaji: 'Kare wa Burajirujin desu.', vn: 'Anh ấy là người Brazil.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ブラジルへコーヒーを買いに行きます。', romaji: 'Burajiru e koohii wo kai ni ikimasu.', vn: 'Tôi đi Brazil để mua cà phê.',
          furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'ブラジルの踊り（おどり）を知っていますか。', romaji: 'Burajiru no odori wo shitte imasu ka.', vn: 'Bạn có biết điệu nhảy của Brazil không?',
          furigana: [{ kanji: '踊', reading: 'おど', meaning: 'DŨNG' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
        }
      ]
    },
    {
      word: 'ベトナム', kanji: '', romaji: 'Betonamu', mean: 'Việt Nam',
      examples: [
        {
          jp: 'ベトナムから来ました。', romaji: 'Betonamu kara kimashita.', vn: 'Tôi đến từ Việt Nam.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'ベトナムは暑い国です。', romaji: 'Betonamu wa atsui kuni desu.', vn: 'Việt Nam là một đất nước nóng.',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        },
        {
          jp: 'ベトナム料理はヘルシーです。', romaji: 'Betonamu ryouri wa herushii desu.', vn: 'Món ăn Việt Nam rất tốt cho sức khỏe.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }]
        },
        {
          jp: 'いつベトナムへ帰りますか。', romaji: 'Itsu Betonamu e kaerimasu ka.', vn: 'Khi nào bạn trở về Việt Nam?',
          furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }]
        },
        {
          jp: 'ベトナムのコーヒーが好きです。', romaji: 'Betonamu no koohii ga suki desu.', vn: 'Tôi thích cà phê Việt Nam.',
          furigana: [{ kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: 'ベトナムは景色が美しいです。', romaji: 'Betonamu wa keshiki ga utsukushii desu.', vn: 'Cảnh sắc Việt Nam rất đẹp.',
          furigana: [{ kanji: '景色', reading: 'けしき', meaning: 'CẢNH SẮC' }, { kanji: '美', reading: 'うつく', meaning: 'MỸ' }]
        }
      ]
    },
    {
      word: 'マレーシア', kanji: '', romaji: 'Mareeshia', mean: 'Malaysia',
      examples: [
        {
          jp: 'マレーシアから来ました。', romaji: 'Mareeshia kara kimashita.', vn: 'Tôi đến từ Malaysia.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'マレーシアはクアラルンプールが首都です。', romaji: 'Mareeshia wa Kuararunpuuru ga shuto desu.', vn: 'Kuala Lumpur là thủ đô của Malaysia.',
          furigana: [{ kanji: '首都', reading: 'しゅと', meaning: 'THỦ ĐÔ' }]
        },
        {
          jp: '彼はマレーシア人ですか。', romaji: 'Kare wa Mareeshiajin desu ka.', vn: 'Anh ấy có phải người Malaysia không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'マレーシアの果物はおいしいです。', romaji: 'Mareeshia no kudamono wa oishii desu.', vn: 'Trái cây của Malaysia rất ngon.',
          furigana: [{ kanji: '果物', reading: 'くだもの', meaning: 'QUẢ VẬT' }]
        },
        {
          jp: 'マレーシアへ出張（しゅっちょう）します。', romaji: 'Mareeshia e shucchou shimasu.', vn: 'Tôi đi công tác ở Malaysia.',
          furigana: [{ kanji: '出張', reading: 'しゅっちょう', meaning: 'XUẤT TRƯƠNG' }]
        },
        {
          jp: 'マレーシアの海できれいです。', romaji: 'Mareeshia no umi de kirei desu.', vn: 'Biển ở Malaysia rất đẹp.',
          furigana: [{ kanji: '海', reading: 'うみ', meaning: 'HÀI' }]
        }
      ]
    },
    {
      word: 'メキシコ', kanji: '', romaji: 'Mekishiko', mean: 'Mexico',
      examples: [
        {
          jp: 'メキシコから来ました。', romaji: 'Mekishiko kara kimashita.', vn: 'Tôi đến từ Mexico.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'メキシコはタコスが有名です。', romaji: 'Mekishiko wa takosu ga yuumei desu.', vn: 'Mexico nổi tiếng với món tacos.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: '彼はメキシコ人です。', romaji: 'Kare wa Mekishikojin desu.', vn: 'Anh ấy là người Mexico.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'メキシコの音楽が好きです。', romaji: 'Mekishiko no ongaku ga suki desu.', vn: 'Tôi thích âm nhạc của Mexico.',
          furigana: [{ kanji: '音楽', reading: 'おんがく', meaning: 'ÂM NHẠC' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: 'メキシコへ旅行に行きたいです。', romaji: 'Mekishiko e ryokou ni ikitai desu.', vn: 'Tôi muốn đi du lịch Mexico.',
          furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'メキシコは暑い国ですね。', romaji: 'Mekishiko wa atsui kuni desu ne.', vn: 'Mexico là một đất nước nóng nhỉ.',
          furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }]
        }
      ]
    },
    {
      word: 'ロシア', kanji: '', romaji: 'Roshia', mean: 'Nga',
      examples: [
        {
          jp: 'ロシアから来ました。', romaji: 'Roshia kara kimashita.', vn: 'Tôi đến từ Nga.',
          furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: 'ロシアは北にあります。', romaji: 'Roshia wa kita ni arimasu.', vn: 'Nước Nga nằm ở phía Bắc.',
          furigana: [{ kanji: '北', reading: 'きた', meaning: 'BẮC' }]
        },
        {
          jp: '彼はロシア人ですか。', romaji: 'Kare wa Roshiajin desu ka.', vn: 'Anh ấy có phải người Nga không?',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ロシアの冬はとても寒いです。', romaji: 'Roshia no fuyu wa totemo samui desu.', vn: 'Mùa đông ở Nga rất lạnh.',
          furigana: [{ kanji: '冬', reading: 'ふゆ', meaning: 'ĐÔNG' }, { kanji: '寒', reading: 'さむ', meaning: 'HÀN' }]
        },
        {
          jp: 'ロシアの料理を食べたいです。', romaji: 'Roshia no ryouri wo tabetai desu.', vn: 'Tôi muốn ăn món ăn Nga.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: 'ロシアへ出張に行きます。', romaji: 'Roshia e shucchou ni ikimasu.', vn: 'Tôi đi công tác ở Nga.',
          furigana: [{ kanji: '出張', reading: 'しゅっちょう', meaning: 'XUẤT TRƯƠNG' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },

    // Người (quốc tịch)
    {
      word: 'アメリカじん', kanji: 'アメリカ人', romaji: 'Amerikajin', mean: 'Người Mỹ',
      examples: [
        {
          jp: '彼はアメリカ人です。', romaji: 'Kare wa Amerikajin desu.', vn: 'Anh ấy là người Mỹ.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'アメリカ人の友達がいます。', romaji: 'Amerikajin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Mỹ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: '彼女はアメリカ人じゃありません。', romaji: 'Kanojo wa Amerikajin ja arimasen.', vn: 'Cô ấy không phải người Mỹ.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あの方はアメリカ人ですか。', romaji: 'Ano kata wa Amerikajin desu ka.', vn: 'Vị kia là người Mỹ phải không?',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: '多くのアメリカ人が日本にいます。', romaji: 'Ooku no Amerikajin ga Nihon ni imasu.', vn: 'Nhiều người Mỹ đang ở Nhật Bản.',
          furigana: [{ kanji: '多', reading: 'おお', meaning: 'ĐA' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }]
        },
        {
          jp: 'アメリカ人と英語で話します。', romaji: 'Amerikajin to eigo de hanashimasu.', vn: 'Nói chuyện với người Mỹ bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'イギリスじん', kanji: 'イギリス人', romaji: 'Igirisujin', mean: 'Người Anh',
      examples: [
        {
          jp: '彼女はイギリス人です。', romaji: 'Kanojo wa Igirisujin desu.', vn: 'Cô ấy là người Anh.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'イギリス人の先生に習います。', romaji: 'Igirisujin no sensei ni naraimasu.', vn: 'Học từ giáo viên người Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: '彼はイギリス人じゃありません。', romaji: 'Kare wa Igirisujin ja arimasen.', vn: 'Anh ấy không phải người Anh.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'イギリス人と結婚（けっこう）しました。', romaji: 'Igirisujin to kekkon shimashita.', vn: 'Tôi đã kết hôn với người Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '結婚', reading: 'けっこん', meaning: 'KẾT HÔN' }]
        },
        {
          jp: 'あのイギリス人は親切です。', romaji: 'Ano Igirisujin wa shinsetsu desu.', vn: 'Người Anh kia rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'イギリス人の友達を作りたいです。', romaji: 'Igirisujin no tomodachi wo tsukuritai desu.', vn: 'Tôi muốn kết bạn với người Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }]
        }
      ]
    },
    {
      word: 'イタリアじん', kanji: 'イタリア人', romaji: 'Itariajin', mean: 'Người Ý',
      examples: [
        {
          jp: '彼はイタリア人です。', romaji: 'Kare wa Itariajin desu.', vn: 'Anh ấy là người Ý.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'イタリア人の友達がいます。', romaji: 'Itariajin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Ý.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'イタリア人とピザを食べます。', romaji: 'Itariajin to piza wo tabemasu.', vn: 'Ăn pizza cùng người Ý.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '彼女はイタリア人ですか。', romaji: 'Kanojo wa Itariajin desu ka.', vn: 'Cô ấy là người Ý phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのイタリア人は親切です。', romaji: 'Ano Itariajin wa shinsetsu desu.', vn: 'Người Ý đó rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'イタリア人とイタリア語で話します。', romaji: 'Itariajin to Itariago de hanashimasu.', vn: 'Nói chuyện với người Ý bằng tiếng Ý.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'イランじん', kanji: 'イラン人', romaji: 'Iranjin', mean: 'Người Iran',
      examples: [
        {
          jp: '彼はイラン人です。', romaji: 'Kare wa Iranjin desu.', vn: 'Anh ấy là người Iran.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'イラン人の友達を招待（しょうたい）します。', romaji: 'Iranjin no tomodachi wo shoutai shimasu.', vn: 'Mời một người bạn người Iran.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '招待', reading: 'しょうたい', meaning: 'CHIÊU ĐÃI' }]
        },
        {
          jp: 'イラン人と伝統（でんとう）料理を食べます。', romaji: 'Iranjin to dentou ryouri wo tabemasu.', vn: 'Ăn món ăn truyền thống cùng người Iran.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '伝統', reading: 'でんとう', meaning: 'TRUYỀN THỐNG' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '彼女はイラン人じゃありません。', romaji: 'Kanojo wa Iranjin ja arimasen.', vn: 'Cô ấy không phải người Iran.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのイラン人は優しいです。', romaji: 'Ano Iranjin wa yasashii desu.', vn: 'Người Iran đó rất hiền.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '優', reading: 'やさ', meaning: 'ƯU' }]
        },
        {
          jp: 'イラン人とペルシャ語で話します。', romaji: 'Iranjin to perushago de hanashimasu.', vn: 'Nói chuyện với người Iran bằng tiếng Ba Tư.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'インドじん', kanji: 'インド人', romaji: 'Indojin', mean: 'Người Ấn Độ',
      examples: [
        {
          jp: '彼はインド人です。', romaji: 'Kare wa Indojin desu.', vn: 'Anh ấy là người Ấn Độ.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'インド人の料理は辛（から）いです。', romaji: 'Indojin no ryouri wa karai desu.', vn: 'Món ăn của người Ấn Độ rất cay.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '辛', reading: 'から', meaning: 'TÂN' }]
        },
        {
          jp: 'インド人と一緒に働きます。', romaji: 'Indojin to issho ni hatarakimasu.', vn: 'Làm việc cùng với người Ấn Độ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: '彼女はインド人ですか。', romaji: 'Kanojo wa Indojin desu ka.', vn: 'Cô ấy là người Ấn Độ phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'インド人の友達を紹介（しょうかい）します。', romaji: 'Indojin no tomodachi wo shoukai shimasu.', vn: 'Giới thiệu một người bạn Ấn Độ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }]
        },
        {
          jp: '多くのインド人がIT業界（ぎょうかい）にいます。', romaji: 'Ooku no Indojin ga IT gyoukai ni imasu.', vn: 'Nhiều người Ấn Độ làm trong ngành IT.',
          furigana: [{ kanji: '多', reading: 'おお', meaning: 'ĐA' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '業界', reading: 'ぎょうかい', meaning: 'NGHIỆP GIỚI' }]
        }
      ]
    },
    {
      word: 'インドネシアじん', kanji: 'インドネシア人', romaji: 'Indoneshiajin', mean: 'Người Indonesia',
      examples: [
        {
          jp: '彼はインドネシア人です。', romaji: 'Kare wa Indoneshiajin desu.', vn: 'Anh ấy là người Indonesia.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'インドネシア人の友達がいます。', romaji: 'Indoneshiajin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Indonesia.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'インドネシア人と話をします。', romaji: 'Indoneshiajin to hanashi wo shimasu.', vn: 'Nói chuyện với người Indonesia.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '彼女はインドネシア人ですか。', romaji: 'Kanojo wa Indoneshiajin desu ka.', vn: 'Cô ấy có phải người Indonesia không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのインドネシア人は明るいです。', romaji: 'Ano Indoneshiajin wa akarui desu.', vn: 'Người Indonesia đó rất vui vẻ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '明', reading: 'あか', meaning: 'MINH' }]
        },
        {
          jp: 'インドネシア人と協力（きょうりょく）します。', romaji: 'Indoneshiajin to kyouryoku shimasu.', vn: 'Hợp tác với người Indonesia.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '協力', reading: 'きょうりょく', meaning: 'HIỆP LỰC' }]
        }
      ]
    },
    {
      word: 'エジプトじん', kanji: 'エジプト人', romaji: 'Ejiputojin', mean: 'Người Ai Cập',
      examples: [
        {
          jp: '彼はエジプト人です。', romaji: 'Kare wa Ejiputojin desu.', vn: 'Anh ấy là người Ai Cập.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'エジプト人の友達がいます。', romaji: 'Ejiputojin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Ai Cập.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'エジプト人とアラビア語で話します。', romaji: 'Ejiputojin to arabiago de hanashimasu.', vn: 'Nói chuyện với người Ai Cập bằng tiếng Ả Rập.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '彼女はエジプト人ですか。', romaji: 'Kanojo wa Ejiputojin desu ka.', vn: 'Cô ấy có phải người Ai Cập không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのエジプト人は背（せ）が高いです。', romaji: 'Ano Ejiputojin wa se ga takai desu.', vn: 'Người Ai Cập đó rất cao.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '背', reading: 'せ', meaning: 'BỐI' }, { kanji: '高', reading: 'たか', meaning: 'CAO' }]
        },
        {
          jp: 'エジプト人と一緒に仕事をします。', romaji: 'Ejiputojin to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng người Ai Cập.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        }
      ]
    },
    {
      word: 'オーストラリアじん', kanji: 'オーストラリア人', romaji: 'Oosutoraraiajin', mean: 'Người Úc',
      examples: [
        {
          jp: '彼はオーストラリア人です。', romaji: 'Kare wa Oosutorariajin desu.', vn: 'Anh ấy là người Úc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'オーストラリア人の友達が多いです。', romaji: 'Oosutorariajin no tomodachi ga oi desu.', vn: 'Tôi có nhiều bạn là người Úc.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }]
        },
        {
          jp: 'オーストラリア人と英語で話します。', romaji: 'Oosutorariajin to eigo de hanashimasu.', vn: 'Nói chuyện với người Úc bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '彼女はオーストラリア人じゃありません。', romaji: 'Kanojo wa Oosutorariajin ja arimasen.', vn: 'Cô ấy không phải người Úc.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのオーストラリア人は親切です。', romaji: 'Ano Oosutorariajin wa shinsetsu desu.', vn: 'Người Úc đó rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'オーストラリア人と一緒に泳ぎます。', romaji: 'Oosutorariajin to issho ni oyogimasu.', vn: 'Đi bơi cùng người Úc.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '泳', reading: 'およ', meaning: 'VỊNH' }]
        }
      ]
    },
    {
      word: 'カナダじん', kanji: 'カナダ人', romaji: 'Kanadajin', mean: 'Người Canada',
      examples: [
        {
          jp: '彼はカナダ人です。', romaji: 'Kare wa Kanadajin desu.', vn: 'Anh ấy là người Canada.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'カナダ人の知り合いを訪ねます。', romaji: 'Kanadajin no shiriai wo tazunemasu.', vn: 'Đến thăm người quen là người Canada.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '知', reading: 'し', meaning: 'TRI' }, { kanji: '訪', reading: 'たず', meaning: 'PHỎNG' }]
        },
        {
          jp: 'カナダ人と一緒にスキーをします。', romaji: 'Kanadajin to issho ni sukii wo shimasu.', vn: 'Đi trượt tuyết cùng người Canada.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }]
        },
        {
          jp: '彼女はカナダ人ですか。', romaji: 'Kanojo wa Kanadajin desu ka.', vn: 'Cô ấy là người Canada phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのカナダ人は明るいです。', romaji: 'Ano Kanadajin wa akarui desu.', vn: 'Người Canada đó rất vui vẻ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '明', reading: 'あか', meaning: 'MINH' }]
        },
        {
          jp: 'カナダ人と英語で話をします。', romaji: 'Kanadajin to eigo de hanashi wo shimasu.', vn: 'Nói chuyện với người Canada bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'かんこくじん', kanji: '韓国人', romaji: 'Kankokujin', mean: 'Người Hàn Quốc',
      examples: [
        {
          jp: '彼は韓国人です。', romaji: 'Kare wa Kankokujin desu.', vn: 'Anh ấy là người Hàn Quốc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }]
        },
        {
          jp: '韓国人の友達が多いです。', romaji: 'Kankokujin no tomodachi ga oi desu.', vn: 'Tôi có nhiều bạn người Hàn Quốc.',
          furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }]
        },
        {
          jp: '彼女は韓国人じゃありません。', romaji: 'Kanojo wa Kankokujin ja arimasen.', vn: 'Cô ấy không phải người Hàn Quốc.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }]
        },
        {
          jp: 'あの韓国人は俳優（はいゆう）ですか。', romaji: 'Ano Kankokujin wa haiyuu desu ka.', vn: 'Người Hàn Quốc kia là diễn viên phải không?',
          furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }, { kanji: '俳優', reading: 'はいゆう', meaning: 'BÀI ƯU' }]
        },
        {
          jp: '韓国人と日本語で話します。', romaji: 'Kankokujin to Nihongo de hanashimasu.', vn: 'Nói chuyện với người Hàn Quốc bằng tiếng Nhật.',
          furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '韓国人と一緒にご飯を食べます。', romaji: 'Kankokujin to issho ni gohan wo tabemasu.', vn: 'Ăn cơm cùng với người Hàn Quốc.',
          furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        }
      ]
    },
    {
      word: 'サウジアラビアじん', kanji: 'サウジアラビア人', romaji: 'Saujiarabiajin', mean: 'Người Ả-rập Xê-út',
      examples: [
        {
          jp: '彼はサウジアラビア人です。', romaji: 'Kare wa Saujiarabiajin desu.', vn: 'Anh ấy là người Ả-rập Xê-út.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'サウジアラビア人の友達を訪ねます。', romaji: 'Saujiarabiajin no tomodachi wo tazunemasu.', vn: 'Đến thăm người bạn Ả-rập Xê-út.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '訪', reading: 'たず', meaning: 'PHỎNG' }]
        },
        {
          jp: 'サウジアラビア人と一緒に働きます。', romaji: 'Saujiarabiajin to issho ni hatarakimasu.', vn: 'Làm việc cùng người Ả-rập Xê-út.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: '彼女はサウジアラビア人ですか。', romaji: 'Kanojo wa Saujiarabiajin desu ka.', vn: 'Cô ấy có phải người Ả-rập Xê-út không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのサウジアラビア人はとても親切です。', romaji: 'Ano Saujiarabiajin wa totemo shinsetsu desu.', vn: 'Người Ả-rập Xê-út đó rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'サウジアラビア人と秘密を共有（きょうゆう）します。', romaji: 'Saujiarabiajin to himitsu wo kyouyuu shimasu.', vn: 'Chia sẻ bí mật với người Ả-rập Xê-út.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '秘密', reading: 'ひみつ', meaning: 'BÍ MẬT' }, { kanji: '共有', reading: 'きょうゆう', meaning: 'CỘNG HỮU' }]
        }
      ]
    },
    {
      word: 'シンガポールじん', kanji: 'シンガポール人', romaji: 'Shingapoorujin', mean: 'Người Singapore',
      examples: [
        {
          jp: '彼はシンガポール人です。', romaji: 'Kare wa Shingapoorujin desu.', vn: 'Anh ấy là người Singapore.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'シンガポール人の友達を招待（しょうたい）しました。', romaji: 'Shingapoorujin no tomodachi wo shoutai shimashita.', vn: 'Tôi đã mời người bạn người Singapore.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '招待', reading: 'しょうたい', meaning: 'CHIÊU ĐÃI' }]
        },
        {
          jp: 'シンガポール人と一緒に仕事をします。', romaji: 'Shingapoorujin to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng người Singapore.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        },
        {
          jp: '彼女はシンガポール人ですか。', romaji: 'Kanojo wa Shingapoorujin desu ka.', vn: 'Cô ấy có phải người Singapore không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのシンガポール人は礼儀（れいぎ）正しいです。', romaji: 'Ano Shingapoorujin wa reigi tadashii desu.', vn: 'Người Singapore đó rất lịch sự.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '礼儀正', reading: 'れいぎただ', meaning: 'LỄ NGHI CHÍNH' }]
        },
        {
          jp: 'シンガポール人と英語で話をします。', romaji: 'Shingapoorujin to eigo de hanashi wo shimasu.', vn: 'Nói chuyện với người Singapore bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'スペインじん', kanji: 'スペイン人', romaji: 'Supeinjin', mean: 'Người Tây Ban Nha',
      examples: [
        {
          jp: '彼はスペイン人です。', romaji: 'Kare wa Supeinjin desu.', vn: 'Anh ấy là người Tây Ban Nha.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'スペイン人の友達を紹介（しょうかい）します。', romaji: 'Supeinjin no tomodachi wo shoukai shimasu.', vn: 'Giới thiệu người bạn Tây Ban Nha.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }]
        },
        {
          jp: 'スペイン人とサッカーを見に行きます。', romaji: 'Supeinjin to sakkaa wo mi ni ikimasu.', vn: 'Đi xem bóng đá cùng người Tây Ban Nha.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼女はスペイン人じゃありません。', romaji: 'Kanojo wa Supeinjin ja arimasen.', vn: 'Cô ấy không phải người Tây Ban Nha.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのスペイン人は賑やかです。', romaji: 'Ano Supeinjin wa nigiyaka desu.', vn: 'Người Tây Ban Nha đó rất nhộn nhịp.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '賑', reading: 'にぎ', meaning: 'CHẨN' }]
        },
        {
          jp: 'スペイン人とスペイン語で話します。', romaji: 'Supeinjin to Supeingo de hanashimasu.', vn: 'Nói chuyện với người Tây Ban Nha bằng tiếng Tây Ban Nha.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'タイじん', kanji: 'タイ人', romaji: 'Taijin', mean: 'Người Thái Lan',
      examples: [
        {
          jp: '彼はタイ人です。', romaji: 'Kare wa Taijin desu.', vn: 'Anh ấy là người Thái Lan.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'タイ人の友達がいます。', romaji: 'Taijin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Thái Lan.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'タイ人と一緒に辛（から）い料理を食べます。', romaji: 'Taijin to issho ni karai ryouri wo tabemasu.', vn: 'Ăn món ăn cay cùng người Thái Lan.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '辛', reading: 'から', meaning: 'TÂN' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '彼女はタイ人ですか。', romaji: 'Kanojo wa Taijin desu ka.', vn: 'Cô ấy là người Thái Lan phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのタイ人は親切ですね。', romaji: 'Ano Taijin wa shinsetsu desu ne.', vn: 'Người Thái Lan đó rất thân thiện nhỉ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'タイ人と一緒に仕事をします。', romaji: 'Taijin to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng người Thái Lan.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        }
      ]
    },
    {
      word: 'ちゅうごくじん', kanji: '中国人', romaji: 'Chuugokujin', mean: 'Người Trung Quốc',
      examples: [
        {
          jp: '彼は中国人です。', romaji: 'Kare wa Chuugokujin desu.', vn: 'Anh ấy là người Trung Quốc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }]
        },
        {
          jp: '中国人の知り合いがいます。', romaji: 'Chuugokujin no shiriai ga imasu.', vn: 'Tôi có người quen là người Trung Quốc.',
          furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
        },
        {
          jp: '彼女は中国人じゃありません。', romaji: 'Kanojo wa Chuugokujin ja arimasen.', vn: 'Cô ấy không phải người Trung Quốc.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }]
        },
        {
          jp: 'あの中国人は優しいです。', romaji: 'Ano Chuugokujin wa yasashii desu.', vn: 'Người Trung Quốc kia rất hiền.',
          furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }, { kanji: '優', reading: 'やさ', meaning: 'ƯU' }]
        },
        {
          jp: '中国人と一緒に勉強します。', romaji: 'Chuugokujin to issho ni benkyou shimasu.', vn: 'Học cùng với người Trung Quốc.',
          furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '中国人と仕事をします。', romaji: 'Chuugokujin to shigoto wo shimasu.', vn: 'Làm việc với người Trung Quốc.',
          furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        }
      ]
    },
    {
      word: 'ドイツじん', kanji: 'ドイツ人', romaji: 'Doitsujin', mean: 'Người Đức',
      examples: [
        {
          jp: '彼はドイツ人です。', romaji: 'Kare wa Doitsujin desu.', vn: 'Anh ấy là người Đức.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ドイツ人の友達を招待（しょうたい）します。', romaji: 'Doitsujin no tomodachi wo shoutai shimasu.', vn: 'Mời một người bạn người Đức.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '招待', reading: 'しょうたい', meaning: 'CHIÊU ĐÃI' }]
        },
        {
          jp: 'ドイツ人とビールを飲みます。', romaji: 'Doitsujin to biiru wo nomimasu.', vn: 'Uống bia cùng người Đức.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }]
        },
        {
          jp: '彼女はドイツ人ですか。', romaji: 'Kanojo wa Doitsujin desu ka.', vn: 'Cô ấy là người Đức phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのドイツ人は真面目（まじめ）です。', romaji: 'Ano Doitsujin wa majime desu.', vn: 'Người Đức đó rất nghiêm túc.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '真面目', reading: 'まじめ', meaning: 'CHÂN DIỆN MỤC' }]
        },
        {
          jp: 'ドイツ人と英語で話します。', romaji: 'Doitsujin to eigo de hanashimasu.', vn: 'Nói chuyện với người Đức bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'にほんじん', kanji: '日本人', romaji: 'Nihonjin', mean: 'Người Nhật Bản',
      examples: [
        {
          jp: '私は日本人です。', romaji: 'Watashi wa Nihonjin desu.', vn: 'Tôi là người Nhật.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: '日本人の友達がいます。', romaji: 'Nihonjin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: '彼女は日本人じゃありません。', romaji: 'Kanojo wa Nihonjin ja arimasen.', vn: 'Cô ấy không phải người Nhật.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'あの日本人は親切です。', romaji: 'Ano Nihonjin wa shinsetsu desu.', vn: 'Người Nhật đó rất thân thiện.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: '日本人と一緒に働きます。', romaji: 'Nihonjin to issho ni hatarakimasu.', vn: 'Làm việc cùng người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: '日本人の文化を学びます。', romaji: 'Nihonjin no bunka wo manabimasu.', vn: 'Học về văn hóa của người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
        }
      ]
    },
    {
      word: 'フランスじん', kanji: 'フランス人', romaji: 'Furansujin', mean: 'Người Pháp',
      examples: [
        {
          jp: '彼はフランス人です。', romaji: 'Kare wa Furansujin desu.', vn: 'Anh ấy là người Pháp.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'フランス人の先生に習いたい。', romaji: 'Furansujin no sensei ni naraitai.', vn: 'Tôi muốn học từ giáo viên người Pháp.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: 'フランス人と一緒に旅行します。', romaji: 'Furansujin to issho ni ryokou shimasu.', vn: 'Đi du lịch cùng người Pháp.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }]
        },
        {
          jp: '彼女はフランス人ですか。', romaji: 'Kanojo wa Furansujin desu ka.', vn: 'Cô ấy có phải người Pháp không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのフランス人はおしゃれです。', romaji: 'Ano Furansujin wa oshare desu.', vn: 'Người Pháp đó ăn mặc rất sành điệu.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'フランス人と料理を作ります。', romaji: 'Furansujin to ryouri wo tsukurimasu.', vn: 'Nấu ăn cùng người Pháp.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIÊU LÝ' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }]
        }
      ]
    },
    {
      word: 'フィリピンじん', kanji: 'フィリピン人', romaji: 'Firipinjin', mean: 'Người Philippines',
      examples: [
        {
          jp: '彼はフィリピン人です。', romaji: 'Kare wa Firipinjin desu.', vn: 'Anh ấy là người Philippines.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'フィリピン人の友達がいます。', romaji: 'Firipinjin no tomodachi ga imasu.', vn: 'Tôi có bạn là người Philippines.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        },
        {
          jp: 'フィリピン人と一緒に仕事をします。', romaji: 'Firipinjin to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng với người Philippines.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        },
        {
          jp: '彼女はフィリピン人じゃありません。', romaji: 'Kanojo wa Firipinjin ja arimasen.', vn: 'Cô ấy không phải người Philippines.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのフィリピン人は明るいです。', romaji: 'Ano Firipinjin wa akarui desu.', vn: 'Người Philippines đó rất vui vẻ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '明', reading: 'あか', meaning: 'MINH' }]
        },
        {
          jp: 'フィリピン人とタガログ語で話します。', romaji: 'Firipinjin to tagarogu go de hanashimasu.', vn: 'Nói chuyện với người Philippines bằng tiếng Tagalog.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'ブラジルじん', kanji: 'ブラジル人', romaji: 'Burajirujin', mean: 'Người Brazil',
      examples: [
        {
          jp: '彼はブラジル人です。', romaji: 'Kare wa Burajirujin desu.', vn: 'Anh ấy là người Brazil.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ブラジル人の友達を紹介（しょうかい）します。', romaji: 'Burajirujin no tomodachi wo shoukai shimasu.', vn: 'Giới thiệu một người bạn Brazil.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }]
        },
        {
          jp: 'ブラジル人とサッカーを見ます。', romaji: 'Burajirujin to sakkaa wo mimasu.', vn: 'Xem bóng đá cùng với người Brazil.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '彼女はブラジル人ですか。', romaji: 'Kanojo wa Burajirujin desu ka.', vn: 'Cô ấy có phải người Brazil không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのブラジル人は親切です。', romaji: 'Ano Burajirujin wa shinsetsu desu.', vn: 'Người Brazil đó rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'ブラジル人とポルトガル語で話します。', romaji: 'Burajirujin to porutogaru go de hanashimasu.', vn: 'Nói chuyện với người Brazil bằng tiếng Bồ Đào Nha.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'ベトナムじん', kanji: 'ベトナム人', romaji: 'Betonamujin', mean: 'Người Việt Nam',
      examples: [
        {
          jp: '私はベトナム人です。', romaji: 'Watashi wa Betonamujin desu.', vn: 'Tôi là người Việt Nam.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ベトナム人の友達を紹介（しょうかい）します。', romaji: 'Betonamujin no tomodachi wo shoukai shimasu.', vn: 'Giới thiệu người bạn Việt Nam.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }]
        },
        {
          jp: 'ベトナム人と一緒に仕事をします。', romaji: 'Betonamujin to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng người Việt Nam.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        },
        {
          jp: '彼女はベトナム人ですか。', romaji: 'Kanojo wa Betonamujin desu ka.', vn: 'Cô ấy là người Việt Nam phải không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのベトナム人は親切です。', romaji: 'Ano Betonamujin wa shinsetsu desu.', vn: 'Người Việt Nam đó rất thân thiện.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'ベトナム人と日本語を勉強します。', romaji: 'Betonamujin to nihongo wo benkyou shimasu.', vn: 'Học tiếng Nhật cùng người Việt Nam.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        }
      ]
    },
    {
      word: 'マレーシアじん', kanji: 'マレーシア人', romaji: 'Mareeshiajin', mean: 'Người Malaysia',
      examples: [
        {
          jp: '彼はマレーシア人です。', romaji: 'Kare wa Mareeshiajin desu.', vn: 'Anh ấy là người Malaysia.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'マレーシア人の友達を訪ねます。', romaji: 'Mareeshiajin no tomodachi wo tazunemasu.', vn: 'Đến thăm người bạn Malaysia.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '訪', reading: 'たず', meaning: 'PHỎNG' }]
        },
        {
          jp: 'マレーシア人と一緒に御飯（ごはん）を食べます。', romaji: 'Mareeshiajin to issho ni gohan wo tabemasu.', vn: 'Ăn cơm cùng người Malaysia.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '御飯', reading: 'ごはん', meaning: 'NGỰ PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '彼女はマレーシア人ですか。', romaji: 'Kanojo wa Mareeshiajin desu ka.', vn: 'Cô ấy có phải người Malaysia không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのマレーシア人は親切ですね。', romaji: 'Ano Mareeshiajin wa shinsetsu desu ne.', vn: 'Người Malaysia đó rất thân thiện nhỉ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: 'マレーシア人と英語で話をします。', romaji: 'Mareeshiajin to eigo de hanashi wo shimasu.', vn: 'Nói chuyện với người Malaysia bằng tiếng Anh.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'メキシコじん', kanji: 'メキシコ人', romaji: 'Mekishikojin', mean: 'Người Mexico',
      examples: [
        {
          jp: '彼はメキシコ人です。', romaji: 'Kare wa Mekishikojin desu.', vn: 'Anh ấy là người Mexico.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'メキシコ人の知り合いを紹介（しょうかい）します。', romaji: 'Mekishikojin no shiriai wo shoukai shimasu.', vn: 'Giới thiệu người quen là người Mexico.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '知', reading: 'し', meaning: 'TRI' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }]
        },
        {
          jp: 'メキシコ人と一緒にダンスを踊ります。', romaji: 'Mekishikojin to issho ni dansu wo odorimasu.', vn: 'Nhảy múa cùng người Mexico.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '踊', reading: 'おど', meaning: 'DŨNG' }]
        },
        {
          jp: '彼女はメキシコ人ですか。', romaji: 'Kanojo wa Mekishikojin desu ka.', vn: 'Cô ấy có phải người Mexico không?',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのメキシコ人は情熱的（じょうねつてき）です。', romaji: 'Ano Mekishikojin wa jounetsuteki desu.', vn: 'Người Mexico đó rất nhiệt huyết.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '情熱的', reading: 'じょうねつてき', meaning: 'TÌNH NHIỆT ĐÍCH' }]
        },
        {
          jp: 'メキシコ人とスペイン語で話します。', romaji: 'Mekishikojin to Supeingo de hanashimasu.', vn: 'Nói chuyện với người Mexico bằng tiếng Tây Ban Nha.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'ロシアじん', kanji: 'ロシア人', romaji: 'Roshiagin', mean: 'Người Nga',
      examples: [
        {
          jp: '彼はロシア人です。', romaji: 'Kare wa Roshiajin desu.', vn: 'Anh ấy là người Nga.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'ロシア人の友達を招待（しょうたい）しました。', romaji: 'Roshiajin no tomodachi wo shoutai shimashita.', vn: 'Tôi đã mời người bạn người Nga.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '招待', reading: 'しょうたい', meaning: 'CHIÊU ĐÃI' }]
        },
        {
          jp: 'ロシア人と一緒にボルシチを食べます。', romaji: 'Roshiajin to issho ni borushichi wo tabemasu.', vn: 'Ăn súp củ cải đỏ cùng người Nga.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '彼女はロシア人じゃありません。', romaji: 'Kanojo wa Roshiajin ja arimasen.', vn: 'Cô ấy không phải người Nga.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あのロシア人は真面目（まじめ）ですね。', romaji: 'Ano Roshiajin wa majime desu ne.', vn: 'Người Nga đó rất nghiêm túc nhỉ.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '真面目', reading: 'まじめ', meaning: 'CHÂN DIỆN MỤC' }]
        },
        {
          jp: 'ロシア人とロシア語で話をしました。', romaji: 'Roshiajin to Roshiago de hanashi wo shimashita.', vn: 'Tôi đã nói chuyện với người Nga bằng tiếng Nga.',
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },

    // Ngôn ngữ
    {
      word: 'えいご', kanji: '英語', romaji: 'Eigo', mean: 'Tiếng Anh',
      examples: [
        {
          jp: '英語が分かりますか。', romaji: 'Eigo ga wakarimasu ka.', vn: 'Bạn có hiểu tiếng Anh không?',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
        },
        {
          jp: '彼は英会話が得意です。', romaji: 'Kare wa eikaiwa ga tokui desu.', vn: 'Anh ấy giỏi đàm thoại tiếng Anh.',
          furigana: [{ kanji: '英会話', reading: 'えいかいわ', meaning: 'ANH HỘI THOẠI' }, { kanji: '得意', reading: 'とくい', meaning: 'ĐẮC Ý' }]
        },
        {
          jp: '英国の歴史を学びます。', romaji: 'Eikoku no rekishi wo manabimasu.', vn: 'Học lịch sử nước Anh.',
          furigana: [{ kanji: '英国', reading: 'えいこく', meaning: 'ANH QUỐC' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
        },
        {
          jp: '彼は英語の先生です。', romaji: 'Kare wa eigo no sensei desu.', vn: 'Anh ấy là giáo viên tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '英語で日記を書きます。', romaji: 'Eigo de nikki wo kakimasu.', vn: 'Tôi viết nhật ký bằng tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '日記', reading: 'にっき', meaning: 'NHẬT KÝ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: '毎日英語を勉強します。', romaji: 'Mainichi eigo wo benkyou shimasu.', vn: 'Tôi học tiếng Anh mỗi ngày.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        }
      ],
      kanjiDetails: [
        {
          kanji: '英',
          onyomi: 'エイ (ei)',
          kunyomi: 'はなぶさ (hanabusa)',
          meaning: 'Anh (nước Anh), tài giỏi',
          sinoVietnamese: 'ANH',
          strokes: 8,
          jlpt: 'N4',
          radicals: '艸 (thảo)',
          components: [{ char: '艹', meaning: 'cỏ' }, { char: '央', meaning: 'chính giữa' }],
          mnemonic: 'Những bông hoa (艹) nở rộ ở chính giữa (央) là những bông hoa anh (英) tú, tài giỏi nhất.',
          examples: ['英語 (えいご) - tiếng Anh', '英国 (えいこく) - nước Anh'],
          exampleSentences: [
            {
              jp: '英語が分かりますか。', vn: 'Bạn có hiểu tiếng Anh không?',
              furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '分', reading: 'わ', meaning: 'PHÂN' }]
            },
            {
              jp: '彼は英会話が得意です。', vn: 'Anh ấy giỏi đàm thoại tiếng Anh.',
              furigana: [{ kanji: '英会話', reading: 'えいかいわ', meaning: 'ANH HỘI THOẠI' }, { kanji: '得意', reading: 'とくい', meaning: 'ĐẮC Ý' }]
            },
            {
              jp: '英雄（えいゆう）が現れました。', vn: 'Anh hùng đã xuất hiện.',
              furigana: [{ kanji: '英雄', reading: 'えいゆう', meaning: 'ANH HÙNG' }, { kanji: '現', reading: 'あらわ', meaning: 'HIỆN' }]
            },
            {
              jp: '英才教育を受けました。', vn: 'Đã được giáo dục tài năng trẻ.',
              furigana: [{ kanji: '英才教育', reading: 'えいさいきょういく', meaning: 'ANH TÀI GIÁO DỤC' }, { kanji: '受', reading: 'う', meaning: 'THỤ' }]
            },
            {
              jp: '英国の歴史を学びます。', vn: 'Học lịch sử nước Anh.',
              furigana: [{ kanji: '英国', reading: 'えいこく', meaning: 'ANH QUỐC' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
            }
          ]
        },
        {
          kanji: '語',
          onyomi: 'ゴ (go)',
          kunyomi: 'かた.る (kataru)',
          meaning: 'Ngôn ngữ, lời nói',
          sinoVietnamese: 'NGỮ',
          strokes: 14,
          jlpt: 'N5',
          radicals: '言 (ngôn)',
          components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số 5' }, { char: '口', meaning: 'miệng' }],
          mnemonic: 'Ngôn ngữ (語) là lời nói (言) được phát ra từ miệng (口) của 5 (五) người (mang tính cộng đồng).',
          examples: ['日本語 (にほんご) - tiếng Nhật', '物語 (ものがたり) - câu chuyện'],
          exampleSentences: [
            {
              jp: 'ベトナム語を話します。', vn: 'Tôi nói tiếng Việt.',
              furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
            },
            {
              jp: '日本語の先生になりたいです。', vn: 'Tôi muốn trở thành giáo viên tiếng Nhật.',
              furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
            },
            {
              jp: '外国語の勉強は楽しいです。', vn: 'Học ngoại ngữ rất vui.',
              furigana: [{ kanji: '外国語', reading: 'がいこくご', meaning: 'NGOẠI QUỐC NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }, { kanji: '楽', reading: 'たの', meaning: 'LẠC' }]
            },
            {
              jp: '物語を読んでいます。', vn: 'Tôi đang đọc một câu chuyện.',
              furigana: [{ kanji: '物語', reading: 'ものがたり', meaning: 'VẬT NGỮ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
            },
            {
              jp: '単語（たんご）を覚えます。', vn: 'Học thuộc từ vựng.',
              furigana: [{ kanji: '単語', reading: 'たんご', meaning: 'ĐƠN NGỮ' }, { kanji: '覚', reading: 'おぼ', meaning: 'GIÁC' }]
            }
          ]
        }
      ]
    },
    {
      word: 'イランご', kanji: 'イラン語', romaji: 'Irango', mean: 'Tiếng Ba Tư',
      examples: [
        {
          jp: 'イラン語を話します。', romaji: 'Irango wo hanashimasu.', vn: 'Tôi nói tiếng Ba Tư.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'イラン語は難しいですか。', romaji: 'Irango wa muzukashii desu ka.', vn: 'Tiếng Ba Tư có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はイラン語を勉強しています。', romaji: 'Kare wa Irango wo benkyou shite imasu.', vn: 'Anh ấy đang học tiếng Ba Tư.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'イラン語の本がありますか。', romaji: 'Irango no hon ga arimasu ka.', vn: 'Có sách tiếng Ba Tư không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'イラン語でさようならは何ですか。', romaji: 'Irango de sayounara wa nan desu ka.', vn: 'Tạm biệt trong tiếng Ba Tư là gì?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'イラン語のクラスに行きます。', romaji: 'Irango no kurasu ni ikimasu.', vn: 'Tôi đi đến lớp học tiếng Ba Tư.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'インドご', kanji: 'インド語', romaji: 'Indogo', mean: 'Tiếng Ấn Độ',
      examples: [
        {
          jp: 'インド語を話せますか。', romaji: 'Indogo wo hanasemasu ka.', vn: 'Bạn có thể nói tiếng Ấn Độ không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'インド語の映画を見ます。', romaji: 'Indogo no eiga wo mimasu.', vn: 'Tôi xem phim tiếng Ấn Độ.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '彼はインド語を教えています。', romaji: 'Kare wa Indogo wo oshiete imasu.', vn: 'Anh ấy đang dạy tiếng Ấn Độ.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
        },
        {
          jp: 'インド語は面白いです。', romaji: 'Indogo wa omoshiroi desu.', vn: 'Tiếng Ấn Độ rất thú vị.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }]
        },
        {
          jp: 'インド語で歌を歌います。', romaji: 'Indogo de uta wo utaimasu.', vn: 'Hát bài hát bằng tiếng Ấn Độ.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }]
        },
        {
          jp: 'インド語を習いたい。', romaji: 'Indogo wo naraitai.', vn: 'Tôi muốn học tiếng Ấn Độ.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        }
      ]
    },
    {
      word: 'インドネシアご', kanji: 'インドネシア語', romaji: 'Indoneshiago', mean: 'Tiếng Indonesia',
      examples: [
        {
          jp: 'インドネシア語を話します。', romaji: 'Indoneshiago wo hanashimasu.', vn: 'Tôi nói tiếng Indonesia.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'インドネシア語は易（やさ）しい。', romaji: 'Indoneshiago wa yasashii.', vn: 'Tiếng Indonesia rất dễ.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '易', reading: 'やさ', meaning: 'DỊ' }]
        },
        {
          jp: '彼はインドネシア語の先生です。', romaji: 'Kare wa Indoneshiago no sensei desu.', vn: 'Anh ấy là giáo viên tiếng Indonesia.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'インドネシア語で手紙を書きました。', romaji: 'Indoneshiago de tegami wo kakimashita.', vn: 'Tôi đã viết thư bằng tiếng Indonesia.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'インドネシア語の辞書が必要です。', romaji: 'Indoneshiago no jisho ga hitsuyou desu.', vn: 'Tôi cần từ điển tiếng Indonesia.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '必要', reading: 'ひつよう', meaning: 'TẤT YẾU' }]
        },
        {
          jp: 'インドネシア語を勉強しましょう。', romaji: 'Indoneshiago wo benkyou shimashou.', vn: 'Chúng ta hãy học tiếng Indonesia nào.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        }
      ]
    },
    {
      word: 'アラビアご', kanji: 'アラビア語', romaji: 'Arabiago', mean: 'Tiếng Ả-rập',
      examples: [
        {
          jp: 'アラビア語を勉強します。', romaji: 'Arabiago wo benkyou shimasu.', vn: 'Tôi học tiếng Ả Rập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'アラビア語は難しいですか。', romaji: 'Arabiago wa muzukashii desu ka.', vn: 'Tiếng Ả Rập có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はアラビア語を話します。', romaji: 'Kare wa Arabiago wo hanashimasu.', vn: 'Anh ấy nói tiếng Ả Rập.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'アラビア語の辞書を買います。', romaji: 'Arabiago no jisho wo kaimasu.', vn: 'Tôi mua từ điển tiếng Ả Rập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'アラビア語で手紙を書きました。', romaji: 'Arabiago de tegami wo kakimashita.', vn: 'Tôi đã viết thư bằng tiếng Ả Rập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'アラビア語の歌が好きです。', romaji: 'Arabiago no uta ga suki desu.', vn: 'Tôi thích bài hát tiếng Ả Rập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        }
      ]
    },
    {
      word: 'フランスご', kanji: 'フランス語', romaji: 'Furansugo', mean: 'Tiếng Pháp',
      examples: [
        {
          jp: 'フランス語を勉強します。', romaji: 'Furansugo wo benkyou shimasu.', vn: 'Tôi học tiếng Pháp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'フランス語はきれいです。', romaji: 'Furansugo wa kirei desu.', vn: 'Tiếng Pháp rất đẹp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: '彼はフランス語が上手（じょうず）です。', romaji: 'Kare wa Furansugo ga jouzu desu.', vn: 'Anh ấy giỏi tiếng Pháp.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
        },
        {
          jp: 'フランス語の映画を見ます。', romaji: 'Furansugo no eiga wo mimasu.', vn: 'Tôi xem phim tiếng Pháp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'フランス語で手紙を書きました。', romaji: 'Furansugo de tegami wo kakimashita.', vn: 'Tôi đã viết thư bằng tiếng Pháp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'フランス語の歌を聞きます。', romaji: 'Furansugo no uta wo kikimasu.', vn: 'Tôi nghe bài hát tiếng Pháp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        }
      ]
    },
    {
      word: 'かんこくご', kanji: '韓国語', romaji: 'Kankokugo', mean: 'Tiếng Hàn Quốc',
      kanjiDetails: [
        { kanji: '韓', onyomi: 'カン (kan)', kunyomi: '', meaning: 'Hàn', sinoVietnamese: 'HÀN', strokes: 18, jlpt: 'N1', radicals: '韋 (vi)', examples: ['韓国 (かんこく) - Hàn Quốc'] },
        { kanji: '国', onyomi: 'コク (koku)', kunyomi: 'くに (kuni)', meaning: 'Quốc', sinoVietnamese: 'QUỐC', strokes: 8, jlpt: 'N5', radicals: '囗 (vi)', components: [{ char: '囗', meaning: 'biên giới' }, { char: '玉', meaning: 'ngọc' }], mnemonic: 'Vua giữ ngọc trong biên giới quốc gia.', examples: ['外国 (がいこく) - nước ngoài'] },
        { kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngữ', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số 5' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Lời nói của 5 cái miệng.', examples: ['英語 (えいご) - tiếng Anh'] }
      ],
      examples: [
        {
          jp: '韓国語が好きです。', romaji: 'Kankokugo ga suki desu.', vn: 'Tôi thích tiếng Hàn.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '韓国語を勉強しています。', romaji: 'Kankokugo wo benkyou shite imasu.', vn: 'Tôi đang học tiếng Hàn.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '韓国語は発音が難しいです。', romaji: 'Kankokugo wa hatsuon ga muzukashii desu.', vn: 'Tiếng Hàn có phát âm khó.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '発音', reading: 'はつおん', meaning: 'PHÁT ÂM' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '韓国語のドラマを見ます。', romaji: 'Kankokugo no dorama wo mimasu.', vn: 'Tôi xem phim truyền hình tiếng Hàn.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '少し韓国語がわかります。', romaji: 'Sukoshi Kankokugo ga wakarimasu.', vn: 'Tôi hiểu một chút tiếng Hàn.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }]
        },
        {
          jp: '韓国語の歌を歌いましょう。', romaji: 'Kankokugo no uta wo utaimashou.', vn: 'Chúng ta hãy cùng hát bài hát tiếng Hàn nào.',
          furigana: [{ kanji: '韓国語', reading: 'かんこくご', meaning: 'HÀN QUỐC NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }]
        }
      ]
    },
    {
      word: 'イギリスご', kanji: 'イギリス語', romaji: 'Igirisugo', mean: 'Tiếng Anh (Anh)',
      examples: [
        {
          jp: 'イギリス語を勉強します。', romaji: 'Igirisugo wo benkyou shimasu.', vn: 'Tôi học tiếng Anh (Anh).',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '彼はイギリス語を話します。', romaji: 'Kare wa Igirisugo wo hanashimasu.', vn: 'Anh ấy nói tiếng Anh (Anh).',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'イギリス語の本を読みます。', romaji: 'Igirisugo no hon wo yomimasu.', vn: 'Tôi đọc sách tiếng Anh (Anh).',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: 'イギリス語の先生は誰ですか。', romaji: 'Igirisugo no sensei wa dare desu ka.', vn: 'Giáo viên tiếng Anh (Anh) là ai?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: 'イギリス語は難しいですか。', romaji: 'Igirisugo wa muzukashii desu ka.', vn: 'Tiếng Anh (Anh) có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: 'イギリス語で手紙を書きます。', romaji: 'Igirisugo de tegami wo kakimasu.', vn: 'Viết thư bằng tiếng Anh (Anh).',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        }
      ]
    },
    {
      word: 'イタリアご', kanji: 'イタリア語', romaji: 'Itariago', mean: 'Tiếng Ý',
      examples: [
        {
          jp: 'イタリア語を習います。', romaji: 'Itariago wo naraimasu.', vn: 'Tôi học tiếng Ý.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: 'イタリア語はきれいです。', romaji: 'Itariago wa kirei desu.', vn: 'Tiếng Ý rất đẹp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: '彼はイタリア語が上手（じょうず）です。', romaji: 'Kare wa Itariago ga jouzu desu.', vn: 'Anh ấy giỏi tiếng Ý.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
        },
        {
          jp: 'イタリア語の歌を聞きます。', romaji: 'Itariago no uta wo kikimasu.', vn: 'Nghe bài hát tiếng Ý.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'イタリア語で挨拶（あいさつ）します。', romaji: 'Itariago de aisatsu shimasu.', vn: 'Chào hỏi bằng tiếng Ý.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '挨拶', reading: 'あいさつ', meaning: 'AI TẠT' }]
        },
        {
          jp: 'イタリア語の辞書を買います。', romaji: 'Itariago no jisho wo kaimasu.', vn: 'Tôi mua từ điển tiếng Ý.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        }
      ]
    },
    {
      word: 'スペインご', kanji: 'スペイン語', romaji: 'Supeingo', mean: 'Tiếng Tây Ban Nha',
      examples: [
        {
          jp: 'スペイン語を習います。', romaji: 'Supeingo wo naraimasu.', vn: 'Tôi học tiếng Tây Ban Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: 'スペイン語はきれいです。', romaji: 'Supeingo wa kirei desu.', vn: 'Tiếng Tây Ban Nha rất đẹp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: '彼はスペイン語が上手です。', romaji: 'Kare wa Supeingo ga jouzu desu.', vn: 'Anh ấy giỏi tiếng Tây Ban Nha.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
        },
        {
          jp: 'スペイン語の映画を見ます。', romaji: 'Supeingo no eiga wo mimasu.', vn: 'Tôi xem phim tiếng Tây Ban Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'スペイン語で歌を歌います。', romaji: 'Supeingo de uta wo utaimasu.', vn: 'Tôi hát bài hát bằng tiếng Tây Ban Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }]
        },
        {
          jp: 'スペイン語の先生は誰ですか。', romaji: 'Supeingo no sensei wa dare desu ka.', vn: 'Giáo viên tiếng Tây Ban Nha là ai?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        }
      ]
    },
    {
      word: 'タイご', kanji: 'タイ語', romaji: 'Taigo', mean: 'Tiếng Thái',
      examples: [
        {
          jp: 'タイ語を勉強します。', romaji: 'Taigo wo benkyou shimasu.', vn: 'Tôi học tiếng Thái.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'タイ語は難しいです。', romaji: 'Taigo wa muzukashii desu.', vn: 'Tiếng Thái rất khó.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はタイ語を話せます。', romaji: 'Kare wa Taigo wo hanasemasu.', vn: 'Anh ấy có thể nói tiếng Thái.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'タイ語の本を読みます。', romaji: 'Taigo no hon wo yomimasu.', vn: 'Tôi đọc sách tiếng Thái.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: 'タイ語で「ありがとう」と言います。', romaji: 'Taigo de "arigatou" to iimasu.', vn: 'Nói "cảm ơn" bằng tiếng Thái.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }]
        },
        {
          jp: 'タイ語の辞書が必要です。', romaji: 'Taigo no jisho ga hitsuyou desu.', vn: 'Cần từ điển tiếng Thái.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '必要', reading: 'ひつよう', meaning: 'TẤT YẾU' }]
        }
      ]
    },
    {
      word: 'ちゅうごくご', kanji: '中国語', romaji: 'Chuugokugo', mean: 'Tiếng Trung Quốc',
      kanjiDetails: [
        { kanji: '中', onyomi: 'チュウ (chuu)', kunyomi: 'なか (naka)', meaning: 'Trung', sinoVietnamese: 'TRUNG', strokes: 4, jlpt: 'N5', radicals: '丨 (côn)', examples: ['中心 (ちゅうしん) - trung tâm'] },
        { kanji: '国', onyomi: 'コク (koku)', kunyomi: 'くに (kuni)', meaning: 'Quốc', sinoVietnamese: 'QUỐC', strokes: 8, jlpt: 'N5', radicals: '囗 (vi)', examples: ['外国 (がいこく) - nước ngoài'] },
        { kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngữ', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', examples: ['英語 (えいご) - tiếng Anh'] }
      ],
      examples: [
        {
          jp: '中国語は難しいですか。', romaji: 'Chuugokugo wa muzukashii desu ka.', vn: 'Tiếng Trung có khó không?',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '中国語で自己紹介をします。', romaji: 'Chuugokugo de jikoshoukai wo shimasu.', vn: 'Tôi giới thiệu bản thân bằng tiếng Trung.',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '自己紹介', reading: 'じこしょうかい', meaning: 'TỰ KỶ THIỆU GIỚI' }]
        },
        {
          jp: '中国語の辞書を買いました。', romaji: 'Chuugokugo no jisho wo kaishimashita.', vn: 'Tôi đã mua từ điển tiếng Trung.',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '中国語を少し話せます。', romaji: 'Chuugokugo wo sukoshi hanasemasu.', vn: 'Tôi có thể nói một chút tiếng Trung.',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '中国語ができる人はいますか。', romaji: 'Chuugokugo ga dekiru hito wa imasu ka.', vn: 'Có ai biết tiếng Trung không?',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }]
        },
        {
          jp: '中国語で挨拶（あいさつ）ができますか。', romaji: 'Chuugokugo de aisatsu ga dekimasu ka.', vn: 'Bạn có thể chào hỏi bằng tiếng Trung không?',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '挨拶', reading: 'あいさつ', meaning: 'AI TẠT' }]
        }
      ]
    },
    {
      word: 'ドイツご', kanji: 'ドイツ語', romaji: 'Doitsugo', mean: 'Tiếng Đức',
      examples: [
        {
          jp: 'ドイツ語を勉強します。', romaji: 'Doitsugo wo benkyou shimasu.', vn: 'Tôi học tiếng Đức.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'ドイツ語は難しいですか。', romaji: 'Doitsugo wa muzukashii desu ka.', vn: 'Tiếng Đức có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はドイツ語を話します。', romaji: 'Kare wa Doitsugo wo hanashimasu.', vn: 'Anh ấy nói tiếng Đức.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'ドイツ語の辞書を買います。', romaji: 'Doitsugo no jisho wo kaimasu.', vn: 'Tôi mua từ điển tiếng Đức.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'ドイツ語で歌を歌いましょう。', romaji: 'Doitsugo de uta wo utaimashou.', vn: 'Chúng ta hãy cùng hát bài hát bằng tiếng Đức nào.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }]
        },
        {
          jp: 'ドイツ語の授業（じゅぎょう）があります。', romaji: 'Doitsugo no jugyou ga arimasu.', vn: 'Có tiết học tiếng Đức.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '授業', reading: 'じゅぎょう', meaning: 'THỤ NGHIỆP' }]
        }
      ]
    },
    {
      word: 'にほんご', kanji: '日本語', romaji: 'Nihongo', mean: 'Tiếng Nhật',
      kanjiDetails: [
        { kanji: '日', onyomi: 'ニチ (nichi)', kunyomi: 'ひ (hi)', meaning: 'Nhật', sinoVietnamese: 'NHẬT', strokes: 4, jlpt: 'N5', radicals: '日 (nhật)', examples: ['今日 (きょう) - hôm nay'] },
        { kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaning: 'Bản', sinoVietnamese: 'BẢN', strokes: 5, jlpt: 'N5', radicals: '木 (mộc)', examples: ['日本 (にほん) - Nhật Bản'] },
        { kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngữ', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số 5' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Lời nói của 5 cái miệng.', examples: ['英語 (えいご) - tiếng Anh'] }
      ],
      examples: [
        {
          jp: '日本語は面白いです。', romaji: 'Nihongo wa omoshiroi desu.', vn: 'Tiếng Nhật rất thú vị.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }]
        },
        {
          jp: '毎日、日本語を勉強します。', romaji: 'Mainichi, Nihongo wo benkyou shimasu.', vn: 'Mỗi ngày tôi đều học tiếng Nhật.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '日本語で話してください。', romaji: 'Nihongo de hanashite kudasai.', vn: 'Hãy nói bằng tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '日本語が上手ですね。', romaji: 'Nihongo ga jouzu desu ne.', vn: 'Tiếng Nhật của bạn giỏi nhỉ.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
        },
        {
          jp: '日本語の先生は優しいです。', romaji: 'Nihongo no sensei wa yasashii desu.', vn: 'Giáo viên tiếng Nhật của tôi rất hiền.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '優', reading: 'やさ', meaning: 'ƯU' }]
        },
        {
          jp: '日本語で日記（にっき）を書きます。', romaji: 'Nihongo de nikki wo kakimasu.', vn: 'Tôi viết nhật ký bằng tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '日記', reading: 'にっき', meaning: 'NHẬT KÝ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        }
      ]
    },
    {
      word: 'エジプトご', kanji: 'エジプト語', romaji: 'Ejiputogo', mean: 'Tiếng Ai Cập (Tiếng Ả Rập)',
      examples: [
        {
          jp: 'エジプト語はアラビア語です。', romaji: 'Ejiputogo wa arabiago desu.', vn: 'Tiếng Ai Cập là tiếng Ả Rập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: 'エジプト語を勉強しています。', romaji: 'Ejiputogo wo benkyou shite imasu.', vn: 'Tôi đang học tiếng Ai Cập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '彼はエジプト語を話せます。', romaji: 'Kare wa Ejiputogo wo hanasemasu.', vn: 'Anh ấy có thể nói tiếng Ai Cập.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'エジプト語の本を貸してください。', romaji: 'Ejiputogo no hon wo kashite kudasai.', vn: 'Hãy cho tôi mượn cuốn sách tiếng Ai Cập.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        },
        {
          jp: 'エジプト語は難しいですか。', romaji: 'Ejiputogo wa muzukashii desu ka.', vn: 'Tiếng Ai Cập có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: 'エジプト語で「こんにちは」は何ですか。', romaji: 'Ejiputogo de "konnichiwa" wa nan desu ka.', vn: '"Xin chào" trong tiếng Ai Cập là gì?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        }
      ]
    },
    {
      word: 'フィリピンご', kanji: 'フィリピン語', romaji: 'Firipingo', mean: 'Tiếng Philippines',
      examples: [
        {
          jp: 'フィリピン語を話します。', romaji: 'Firipingo wo hanashimasu.', vn: 'Tôi nói tiếng Philippines.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'フィリピン語は面白いです。', romaji: 'Firipingo wa omoshiroi desu.', vn: 'Tiếng Philippines rất thú vị.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }]
        },
        {
          jp: '彼はフィリピン語を勉強しています。', romaji: 'Kare wa Firipingo wo benkyou shite imasu.', vn: 'Anh ấy đang học tiếng Philippines.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'フィリピン語の本があります。', romaji: 'Firipingo no hon ga arimasu.', vn: 'Có sách tiếng Philippines.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'フィリピン語で挨拶をします。', romaji: 'Firipingo de aisatsu wo shimasu.', vn: 'Chào hỏi bằng tiếng Philippines.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '挨拶', reading: 'あいさつ', meaning: 'AI TẠT' }]
        },
        {
          jp: 'フィリピン語のクラスに行きます。', romaji: 'Firipingo no kurasu ni ikimasu.', vn: 'Tôi đi đến lớp học tiếng Philippines.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        }
      ]
    },
    {
      word: 'ポルトガルご', kanji: 'ポルトガル語', romaji: 'Porutogarugo', mean: 'Tiếng Bồ Đào Nha',
      examples: [
        {
          jp: 'ポルトガル語を習います。', romaji: 'Porutogarugo wo naraimasu.', vn: 'Tôi học tiếng Bồ Đào Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: 'ポルトガル語はきれいです。', romaji: 'Porutogarugo wa kirei desu.', vn: 'Tiếng Bồ Đào Nha rất đẹp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: '彼はポルトガル語を話せます。', romaji: 'Kare wa Porutogarugo wo hanasemasu.', vn: 'Anh ấy có thể nói tiếng Bồ Đào Nha.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'ポルトガル語の映画を見ます。', romaji: 'Porutogarugo no eiga wo mimasu.', vn: 'Tôi xem phim tiếng Bồ Đào Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'ポルトガル語で「こんにちは」は何ですか。', romaji: 'Porutogarugo de "konnichiwa" wa nan desu ka.', vn: '"Xin chào" trong tiếng Bồ Đào Nha là gì?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'ポルトガル語の辞書を買いました。', romaji: 'Porutogarugo no jisho wo kaimashita.', vn: 'Tôi đã mua từ điển tiếng Bồ Đào Nha.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        }
      ]
    },
    {
      word: 'ベトナムご', kanji: 'ベトナム語', romaji: 'Betonamugo', mean: 'Tiếng Việt',
      examples: [
        {
          jp: 'ベトナム語を話します。', romaji: 'Betonamugo wo hanashimasu.', vn: 'Tôi nói tiếng Việt.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'ベトナム語は易（やさ）しいです。', romaji: 'Betonamugo wa yasashii desu.', vn: 'Tiếng Việt rất dễ.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '易', reading: 'やさ', meaning: 'DỊ' }]
        },
        {
          jp: '彼はベトナム語の先生です。', romaji: 'Kare wa Betonamugo no sensei desu.', vn: 'Anh ấy là giáo viên tiếng Việt.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'ベトナム語を勉強しましょう。', romaji: 'Betonamugo wo benkyou shimashou.', vn: 'Hãy học tiếng Việt nào.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'ベトナム語で手紙を書きます。', romaji: 'Betonamugo de tegami wo kakimasu.', vn: 'Viết thư bằng tiếng Việt.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'ベトナム語の歌を聞きます。', romaji: 'Betonamugo no uta wo kikimasu.', vn: 'Nghe bài hát tiếng Việt.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        }
      ]
    },
    {
      word: 'オーストラリアご', kanji: 'オーストラリア語', romaji: 'Oosutorariago', mean: 'Tiếng Anh (Úc)',
      examples: [
        {
          jp: 'オーストラリア語は英語です。', romaji: 'Oosutorariago wa eigo desu.', vn: 'Tiếng Úc là tiếng Anh.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }]
        },
        {
          jp: 'オーストラリア語の発音（はつおん）は面白い。', romaji: 'Oosutorariago no hatsuon wa omoshiroi.', vn: 'Phát âm tiếng Úc rất thú vị.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '発音', reading: 'はつおん', meaning: 'PHÁT ÂM' }, { kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }]
        },
        {
          jp: '彼はオーストラリア語を話します。', romaji: 'Kare wa Oosutorariago wo hanashimasu.', vn: 'Anh ấy nói tiếng Úc.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'オーストラリア語を習いたいです。', romaji: 'Oosutorariago wo naraitai desu.', vn: 'Tôi muốn học tiếng Úc.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: 'オーストラリア語の歌を聞きましょう。', romaji: 'Oosutorariago no uta wo kikimashou.', vn: 'Hãy nghe bài hát tiếng Úc nào.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'オーストラリア語で話をします。', romaji: 'Oosutorariago de hanashi wo shimasu.', vn: 'Nói chuyện bằng tiếng Úc.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        }
      ]
    },
    {
      word: 'カナダご', kanji: 'カナダ語', romaji: 'Kanadago', mean: 'Tiếng Anh (Canada)',
      examples: [
        {
          jp: 'カナダ語は英語とフランス語です。', romaji: 'Kanadago wa eigo to furansugo desu.', vn: 'Tiếng Canada là tiếng Anh và tiếng Pháp.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: 'カナダ語を勉強しています。', romaji: 'Kanadago wo benkyou shite imasu.', vn: 'Tôi đang học tiếng Canada.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '彼はカナダ語を話せます。', romaji: 'Kare wa Kanadago wo hanasemasu.', vn: 'Anh ấy có thể nói tiếng Canada.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'カナダ語の辞書を持っていますか。', romaji: 'Kanadago no jisho wo motte imasu ka.', vn: 'Bạn có từ điển tiếng Canada không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }]
        },
        {
          jp: 'カナダ語で「ありがとう」と言います。', romaji: 'Kanadago de "arigatou" to iimasu.', vn: 'Nói "cảm ơn" bằng tiếng Canada.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }]
        },
        {
          jp: 'カナダ語のクラスはどこですか。', romaji: 'Kanadago no kurasu wa doko desu ka.', vn: 'Lớp học tiếng Canada ở đâu?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        }
      ]
    },
    {
      word: 'マレーシアご', kanji: 'マレーシア語', romaji: 'Mareeshiago', mean: 'Tiếng Mã Lai',
      examples: [
        {
          jp: 'マレーシア語を勉強します。', romaji: 'Mareeshiago wo benkyou shimasu.', vn: 'Tôi học tiếng Mã Lai.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'マレーシア語は難しいですか。', romaji: 'Mareeshiago wa muzukashii desu ka.', vn: 'Tiếng Mã Lai có khó không?',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はマレーシア語を話します。', romaji: 'Kare wa Mareeshiago wo hanashimasu.', vn: 'Anh ấy nói tiếng Mã Lai.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'マレーシア語の本を読みます。', romaji: 'Mareeshiago no hon wo yomimasu.', vn: 'Tôi đọc sách tiếng Mã Lai.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: 'マレーシア語で挨拶をします。', romaji: 'Mareeshiago de aisatsu wo shimasu.', vn: 'Chào hỏi bằng tiếng Mã Lai.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }]
        },
        {
          jp: 'マレーシア語の歌を聞きましょう。', romaji: 'Mareeshiago no uta wo kikimashou.', vn: 'Hãy cùng nghe bài hát tiếng Mã Lai nào.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        }
      ]
    },
    {
      word: 'ロシアご', kanji: 'ロシア語', romaji: 'Roshiago', mean: 'Tiếng Nga',
      examples: [
        {
          jp: 'ロシア語を話します。', romaji: 'Roshiago wo hanashimasu.', vn: 'Tôi nói tiếng Nga.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'ロシア語は難しいです。', romaji: 'Roshiago wa muzukashii desu.', vn: 'Tiếng Nga rất khó.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '彼はロシア語を勉強しています。', romaji: 'Kare wa Roshiago wo benkyou shite imasu.', vn: 'Anh ấy đang học tiếng Nga.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'ロシア語で話をしました。', romaji: 'Roshiago de hanashi wo shimashita.', vn: 'Tôi đã nói chuyện bằng tiếng Nga.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'ロシア語の歌が好きです。', romaji: 'Roshiago no uta ga suki desu.', vn: 'Tôi thích bài hát tiếng Nga.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: 'ロシア語の本を買います。', romaji: 'Roshiago no hon wo kaimasu.', vn: 'Tôi mua sách tiếng Nga.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        }
      ]
    },

    // Tên riêng (giả tưởng)
    {
      word: 'さくらだいがく', kanji: 'さくら大学', romaji: 'Sakura Daigaku', mean: 'Đại học Sakura (tên trường giả tưởng)',
      examples: [
        {
          jp: 'さくら大学に行きます。', romaji: 'Sakura Daigaku ni ikimasu.', vn: 'Tôi đi đến đại học Sakura.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'さくら大学は大きいです。', romaji: 'Sakura Daigaku wa ookii desu.', vn: 'Đại học Sakura rất lớn.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: '彼はさくら大学の学生です。', romaji: 'Kare wa Sakura Daigaku no gakusei desu.', vn: 'Anh ấy là sinh viên đại học Sakura.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'さくら大学で日本語を勉強します。', romaji: 'Sakura Daigaku de Nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật ở đại học Sakura.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'さくら大学は有名ですか。', romaji: 'Sakura Daigaku wa yuumei desu ka.', vn: 'Đại học Sakura có nổi tiếng không?',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'さくら大学の先生に会います。', romaji: 'Sakura Daigaku no sensei ni aimasu.', vn: 'Tôi gặp giáo viên của đại học Sakura.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
        }
      ]
    },
    {
      word: 'ふじだいがく', kanji: '富士大学', romaji: 'Fuji Daigaku', mean: 'Đại học Fuji (tên trường giả tưởng)',
      examples: [
        {
          jp: '富士大学から来ました。', romaji: 'Fuji Daigaku kara kimashita.', vn: 'Tôi đến từ đại học Fuji.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '富士大学はきれいです。', romaji: 'Fuji Daigaku wa kirei desu.', vn: 'Đại học Fuji rất đẹp.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }]
        },
        {
          jp: '彼女は富士大学の先生です。', romaji: 'Kanojo wa Fuji Daigaku no sensei desu.', vn: 'Cô ấy là giáo viên đại học Fuji.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '富士大学へ行きたいです。', romaji: 'Fuji Daigaku e ikitai desu.', vn: 'Tôi muốn đi đại học Fuji.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '富士大学の歴史は深いです。', romaji: 'Fuji Daigaku no rekishi wa fukai desu.', vn: 'Lịch sử đại học Fuji rất lâu đời.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }, { kanji: '深', reading: 'ふか', meaning: 'THÂM' }]
        },
        {
          jp: '富士大学で友達を作ります。', romaji: 'Fuji Daigaku de tomodachi wo tsukurimasu.', vn: 'Tôi kết bạn ở đại học Fuji.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }]
        }
      ],
      kanjiDetails: [
        {
          kanji: '富',
          onyomi: 'フ (fu), フウ (fuu)',
          kunyomi: 'と.む (tomu)',
          meaning: 'Giàu có, phú quý',
          sinoVietnamese: 'PHÚ',
          strokes: 12,
          jlpt: 'N3',
          radicals: '宀 (miên)',
          components: [{ char: '宀', meaning: 'mái nhà' }, { char: '一', meaning: 'một' }, { char: '口', meaning: 'miệng' }, { char: '田', meaning: 'ruộng' }],
          mnemonic: 'Dưới một mái nhà (宀) có một (一) miệng (口) ăn và rất nhiều ruộng (田) đất thì thật là giàu (富).',
          examples: ['富士山 (ふじさん) - núi Phú Sĩ', '豊富 (ほうふ) - phong phú'],
          exampleSentences: [
            {
              jp: '富士山はきれいです。', vn: 'Núi Phú Sĩ rất đẹp.',
              furigana: [{ kanji: '富士山', reading: 'ふじさん', meaning: 'PHÚ SĨ SƠN' }]
            },
            {
              jp: '金持ちになりたいです。', vn: 'Tôi muốn trở thành người giàu có.',
              furigana: [{ kanji: '金持ち', reading: 'かねもち', meaning: 'KIM TRÌ' }]
            },
            {
              jp: '知識が豊富です。', vn: 'Kiến thức rất phong phú.',
              furigana: [{ kanji: '知識', reading: 'ちしき', meaning: 'TRI THỨC' }, { kanji: '豊富', reading: 'ほうふ', meaning: 'PHONG PHÚ' }]
            },
            {
              jp: '富山県（とやまけん）へ行きます。', vn: 'Đi đến tỉnh Toyama.',
              furigana: [{ kanji: '富山県', reading: 'とやまけん', meaning: 'PHÚ SƠN HUYỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '貧富（ひんぷ）の差があります。', vn: 'Có sự cách biệt giàu nghèo.',
              furigana: [{ kanji: '貧富', reading: 'ひんぷ', meaning: 'BẦN PHÚ' }, { kanji: '差', reading: 'さ', meaning: 'SA' }]
            }
          ]
        },
        {
          kanji: '士',
          onyomi: 'シ (shi)',
          kunyomi: '',
          meaning: 'Sĩ, người có học, chiến binh',
          sinoVietnamese: 'SĨ',
          strokes: 3,
          jlpt: 'N3',
          radicals: '士 (sĩ)',
          components: [{ char: '士', meaning: 'sĩ' }],
          mnemonic: 'Hình ảnh người có học thức đứng thẳng, vạch trên dài hơn vạch dưới (khác với chữ Thổ 土).',
          examples: ['富士山 (ふじさん) - núi Phú Sĩ', '弁護士 (べんごし) - luật sư'],
          exampleSentences: [
            {
              jp: '彼は立派（りっぱ）な紳士です。', vn: 'Anh ấy là một quý ông tuyệt vời.',
              furigana: [{ kanji: '紳士', reading: 'しんし', meaning: 'THÂN SĨ' }]
            },
            {
              jp: '弁護士に頼みます。', vn: 'Nhờ vả luật sư.',
              furigana: [{ kanji: '弁護士', reading: 'べんごし', meaning: 'BIỆN HỘ SĨ' }, { kanji: '頼', reading: 'たの', meaning: 'LẠI' }]
            },
            {
              jp: '修士（しゅうし）号を取得します。', vn: 'Lấy bằng thạc sĩ.',
              furigana: [{ kanji: '修士', reading: 'しゅうし', meaning: 'TU SĨ' }, { kanji: '号', reading: 'ごう', meaning: 'HIỆU' }, { kanji: '取得', reading: 'しゅとく', meaning: 'THỦ ĐẮC' }]
            },
            {
              jp: '武士（ぶし）の精神を学びます。', vn: 'Học về tinh thần võ sĩ (Bushido).',
              furigana: [{ kanji: '武士', reading: 'ぶし', meaning: 'VÕ SĨ' }, { kanji: '精神', reading: 'せいしん', meaning: 'TINH THẦN' }, { kanji: '学', reading: 'まな', meaning: 'HỌC' }]
            },
            {
              jp: '富士大学の学生です。', vn: 'Là sinh viên đại học Fuji.',
              furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
            }
          ]
        }
      ]
    },
    {
      word: 'IMC', kanji: '', romaji: 'IMC', mean: 'IMC (tên công ty giả tưởng)',
      examples: [
        {
          jp: 'IMCの社員です。', romaji: 'IMC no shain desu.', vn: 'Là nhân viên công ty IMC.',
          furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'IMCは大阪にあります。', romaji: 'IMC wa Osaka ni arimasu.', vn: 'IMC nằm ở Osaka.',
          furigana: [{ kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }]
        },
        {
          jp: 'IMCへ行きます。', romaji: 'IMC e ikimasu.', vn: 'Tôi đi đến IMC.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'ミラーさんはIMCの社員ですか。', romaji: 'Mira-san wa IMC no shain desu ka.', vn: 'Anh Miller là nhân viên IMC phải không?',
          furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: 'IMCで働いています。', romaji: 'IMC de hataraite imasu.', vn: 'Tôi đang làm việc tại IMC.',
          furigana: [{ kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: 'IMCの仕事は忙しいです。', romaji: 'IMC no shigoto wa isogashii desu.', vn: 'Công việc ở IMC rất bận rộn.',
          furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }]
        }
      ]
    },
    {
      word: 'パワーでんき', kanji: 'パワー電気', romaji: 'Pawaa Denki', mean: 'Điện lực Power (tên công ty giả tưởng)',
      examples: [
        {
          jp: 'パワー電気の会社員です。', romaji: 'Pawaa Denki no kaishain desu.', vn: 'Là nhân viên công ty Điện lực Power.',
          furigana: [{ kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: 'パワー電気は有名です。', romaji: 'Pawaa Denki wa yuumei desu.', vn: 'Điện lực Power rất nổi tiếng.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'パワー電気へ行きます。', romaji: 'Pawaa Denki e ikimasu.', vn: 'Tôi đi đến công ty Điện lực Power.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼はパワー電気で働いています。', romaji: 'Kare wa Pawaa Denki de hataraite imasu.', vn: 'Anh ấy đang làm việc tại Điện lực Power.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: 'パワー電気の社長に会います。', romaji: 'Pawaa Denki no shachou ni aimasu.', vn: 'Tôi gặp giám đốc công ty Điện lực Power.',
          furigana: [{ kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }]
        },
        {
          jp: 'パワー電気の製品（せいひん）はいいです。', romaji: 'Pawaa Denki no seihin wa ii desu.', vn: 'Sản phẩm của Điện lực Power rất tốt.',
          furigana: [{ kanji: '製品', reading: 'せいひん', meaning: 'CHẾ PHẨM' }]
        }
      ]
    },
    {
      word: 'ブラジルエアー', kanji: '', romaji: 'Burajiru Eaa', mean: 'Hãng hàng không Brazil (giả tưởng)',
      examples: [
        {
          jp: 'ブラジルエアーで行きます。', romaji: 'Burajiru Eaa de ikimasu.', vn: 'Đi bằng hãng hàng không Brazil.',
          furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: 'ブラジルエアーは便利（べんり）です。', romaji: 'Burajiru Eaa wa benri desu.', vn: 'Hãng Brazil Air rất tiện lợi.',
          furigana: [{ kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }]
        },
        {
          jp: 'ブラジルエアーのチケットを買います。', romaji: 'Burajiru Eaa no chiketto wo kaimasu.', vn: 'Tôi mua vé của Brazil Air.',
          furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'ブラジルエアーの社員に聞きます。', romaji: 'Burajiru Eaa no shain ni kikimasu.', vn: 'Tôi hỏi nhân viên của Brazil Air.',
          furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'ブラジルエアーは安（やす）いですか。', romaji: 'Burajiru Eaa wa yasui desu ka.', vn: 'Brazil Air có rẻ không?',
          furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }]
        },
        {
          jp: 'ブラジルエアーの飛行機（ひこうき）は大きいです。', romaji: 'Burajiru Eaa no hikouki wa ookii desu.', vn: 'Máy báy của Brazil Air rất lớn.',
          furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        }
      ]
    },
    {
      word: 'AKC', kanji: '', romaji: 'AKC', mean: 'AKC (tên tổ chức giả tưởng)',
      examples: [
        {
          jp: 'AKCの研修生（けんしゅうせい）です。', romaji: 'AKC no kenshuusei desu.', vn: 'Là tu nghiệp sinh của AKC.',
          furigana: [{ kanji: '研修生', reading: 'けんしゅうせい', meaning: 'NGHIÊN TU SINH' }]
        },
        {
          jp: 'AKCで勉強しています。', romaji: 'AKC de benkyou shite imasu.', vn: 'Tôi đang học ở AKC.',
          furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'AKCへ書類（しょるい）を送（おく）ります。', romaji: 'AKC e shorui wo okurimasu.', vn: 'Gửi hồ sơ đến AKC.',
          furigana: [{ kanji: '書類', reading: 'しょるい', meaning: 'THƯ LOẠI' }, { kanji: '送', reading: 'おく', meaning: 'TỐNG' }]
        },
        {
          jp: 'AKCの先生は厳しいです。', romaji: 'AKC no sensei wa kibishii desu.', vn: 'Giáo viên ở AKC rất nghiêm khắc.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '厳', reading: 'きび', meaning: 'NGHIÊM' }]
        },
        {
          jp: 'AKCの場所（ばしょ）を知っていますか。', romaji: 'AKC no basho wo shitte imasu ka.', vn: 'Bạn có biết địa điểm của AKC không?',
          furigana: [{ kanji: '場所', reading: 'ばしょ', meaning: 'TRÀNG SỞ' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
        },
        {
          jp: 'AKCで日本語を習いました。', romaji: 'AKC de Nihongo wo naraimashita.', vn: 'Tôi đã học tiếng Nhật ở AKC.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        }
      ]
    },
    {
      word: 'こうべびょういん', kanji: '神戸病院', romaji: 'Koube Byouin', mean: 'Bệnh viện Kobe (giả tưởng)',
      examples: [
        {
          jp: '神戸病院へ行きます。', romaji: 'Koube Byouin e ikimasu.', vn: 'Tôi đi đến bệnh viện Kobe.',
          furigana: [{ kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '彼は神戸病院の医者です。', romaji: 'Kare wa Koube Byouin no isha desu.', vn: 'Anh ấy là bác sĩ ở bệnh viện Kobe.',
          furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }]
        },
        {
          jp: '神戸病院はどこですか。', romaji: 'Koube Byouin wa doko desu ka.', vn: 'Bệnh viện Kobe ở đâu vậy?',
          furigana: [{ kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }]
        },
        {
          jp: '神戸病院で働いています。', romaji: 'Koube Byouin de hataraite imasu.', vn: 'Tôi đang làm việc tại bệnh viện Kobe.',
          furigana: [{ kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }]
        },
        {
          jp: '昨日（きのう）神戸病院へ行きました。', romaji: 'Kinou Koube Byouin e ikimashita.', vn: 'Hôm qua tôi đã đi bệnh viện Kobe.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '神戸病院はとても大きいです。', romaji: 'Koube Byouin wa totemo ookii desu.', vn: 'Bệnh viện Kobe rất là lớn.',
          furigana: [{ kanji: '神戸病院', reading: 'こうべびょういん', meaning: 'THẦN HỘ BỆNH VIỆN' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        }
      ],
      kanjiDetails: [
        {
          kanji: '神',
          onyomi: 'シン (shin), ジン (jin)',
          kunyomi: 'かみ (kami)',
          meaning: 'Thần, thần linh',
          sinoVietnamese: 'THẦN',
          strokes: 9,
          jlpt: 'N4',
          radicals: '示 (thị)',
          components: [{ char: '礻', meaning: 'thần linh' }, { char: '申', meaning: 'nói/kéo dài' }],
          mnemonic: 'Lời nói (申) của thần linh (礻) mang sức mạnh kỳ diệu.',
          examples: ['神戸 (こうべ) - Kobe', '神社 (じんじゃ) - đền thờ'],
          exampleSentences: [
            {
              jp: '神戸から来ました。', vn: 'Tôi đến từ Kobe.',
              furigana: [{ kanji: '神戸', reading: 'こうべ', meaning: 'THẦN HỘ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
            },
            {
              jp: '神様（かみさま）に祈ります。', vn: 'Cầu nguyện với thần linh.',
              furigana: [{ kanji: '神様', reading: 'かみさま', meaning: 'THẦN DẠNG' }, { kanji: '祈', reading: 'いの', meaning: 'KÌ' }]
            },
            {
              jp: '神社へお参りに行きます。', vn: 'Đi viếng đền thờ.',
              furigana: [{ kanji: '神社', reading: 'じんじゃ', meaning: 'THẦN XÃ' }, { kanji: '参', reading: 'まい', meaning: 'THAM' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
            },
            {
              jp: '精神（せいしん）を鍛えます。', vn: 'Rèn luyện tinh thần.',
              furigana: [{ kanji: '精神', reading: 'せいしん', meaning: 'TINH THẦN' }, { kanji: '鍛', reading: 'きた', meaning: 'ĐOÁN' }]
            },
            {
              jp: '神秘（しんぴ）的な場所です。', vn: 'Đó là một nơi huyền bí.',
              furigana: [{ kanji: '神秘的', reading: 'しんぴてき', meaning: 'THẦN BÍ ĐÍCH' }, { kanji: '場所', reading: 'ばしょ', meaning: 'TRƯỜNG SỞ' }]
            }
          ]
        },
        {
          kanji: '戸',
          onyomi: 'コ (ko)',
          kunyomi: 'と (to)',
          meaning: 'Cái cửa, hộ gia đình',
          sinoVietnamese: 'HỘ',
          strokes: 4,
          jlpt: 'N4',
          radicals: '戸 (hộ)',
          components: [{ char: '戸', meaning: 'cửa' }],
          mnemonic: 'Hình ảnh một cánh cửa đơn.',
          examples: ['神戸 (こうべ) - Kobe', '戸 (と) - cái cửa'],
          exampleSentences: [
            {
              jp: '戸を開けてください。', vn: 'Hãy mở cửa ra.',
              furigana: [{ kanji: '戸', reading: 'と', meaning: 'HỘ' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }]
            },
            {
              jp: '神戸（こうべ）は港町です。', vn: 'Kobe là một thành phố cảng.',
              furigana: [{ kanji: '神戸', reading: 'こうべ', meaning: 'THẦN HỘ' }, { kanji: '港町', reading: 'みなとまち', meaning: 'CẢNG ĐINH' }]
            },
            {
              jp: '一軒家（いっけんや）の戸締まりをします。', vn: 'Khóa cửa nhà riêng.',
              furigana: [{ kanji: '一軒家', reading: 'いっけんや', meaning: 'NHẤT HIÊN GIA' }, { kanji: '戸締', reading: 'とじ', meaning: 'HỘ ĐẾ' }]
            },
            {
              jp: '江戸（えど）時代の歴史です。', vn: 'Lịch sử thời đại Edo.',
              furigana: [{ kanji: '江戸時代', reading: 'えどじだい', meaning: 'GIANG HỘ THỜI ĐẠI' }, { kanji: '歴史', reading: 'れきし', meaning: 'LỊCH SỬ' }]
            },
            {
              jp: '戸棚（とだな）の中にあります。', vn: 'Nó nằm ở trong tủ có cánh cửa.',
              furigana: [{ kanji: '戸棚', reading: 'とだな', meaning: 'HỘ BẰNG' }, { kanji: '中', reading: 'なか', meaning: 'TRUNG' }]
            }
          ]
        }
      ]
    },
  ],
  grammar: [
    {
      pattern: 'N1 は N2 です',
      explanation: 'Dùng để khẳng định N1 là N2. Trợ từ "は" (wa) đánh dấu chủ đề của câu, "です" là động từ "là" ở thể lịch sự.',
      example: '私は学生です。(Watashi wa gakusei desu.) - Tôi là sinh viên.',
      examples: [
        { jp: '私は学生です。', vn: 'Tôi là sinh viên.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '田中さんは先生です。', vn: 'Anh Tanaka là giáo viên.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: '山田さんは医者です。', vn: 'Anh Yamada là bác sĩ.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: 'ミラーさんはアメリカ人です。', vn: 'Anh Miller là người Mỹ.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: '佐藤さんは会社員です。', vn: 'Anh Satou là nhân viên công ty.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: 'あの人はエンジニアです。', vn: 'Người kia là kỹ sư.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '私は日本人です。', vn: 'Tôi là người Nhật.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }] },
        { jp: 'キムさんは韓国人です。', vn: 'Chị Kim là người Hàn Quốc.', furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }] },
        { jp: 'マリアさんはブラジル人です。', vn: 'Chị Maria là người Brazil.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: '私は銀行員です。', vn: 'Tôi là nhân viên ngân hàng.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNG VIÊN' }] }
      ]
    },
    {
      pattern: 'N1 は N2 じゃありません / ではありません',
      explanation: 'Dùng để phủ định: N1 không phải là N2. "じゃありません" là dạng nói thường, "ではありません" là dạng trang trọng hơn.',
      example: '私は医者じゃありません。(Watashi wa isha ja arimasen.) - Tôi không phải bác sĩ.',
      examples: [
        { jp: '私は医者じゃありません。', vn: 'Tôi không phải là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: '田中さんは学生じゃありません。', vn: 'Anh Tanaka không phải là sinh viên.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: 'ミラーさんは日本人じゃありません。', vn: 'Anh Miller không phải là người Nhật.', furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }] },
        { jp: '私は先生ではありません。', vn: 'Tôi không phải là giáo viên.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: '山田さんは銀行員じゃありません。', vn: 'Anh Yamada không phải là nhân viên ngân hàng.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }] },
        { jp: 'あの人はエンジニアじゃありません。', vn: 'Người kia không phải là kỹ sư.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '佐藤さんは教師ではありません。', vn: 'Anh Satou không phải là giáo viên.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }] },
        { jp: '私は研究者じゃありません。', vn: 'Tôi không phải là nhà nghiên cứu.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }] },
        { jp: 'キムさんは中国人じゃありません。', vn: 'Chị Kim không phải là người Trung Quốc.', furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }] },
        { jp: 'あの方は会社員ではありません。', vn: 'Vị kia không phải là nhân viên công ty.', furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] }
      ]
    },
    {
      pattern: 'N1 は N2 ですか',
      explanation: 'Dùng để hỏi: N1 có phải là N2 không? Thêm "か" vào cuối câu để tạo câu hỏi.',
      example: 'あなたは学生ですか。(Anata wa gakusei desu ka?) - Bạn có phải sinh viên không?',
      examples: [
        { jp: 'あなたは学生ですか。', vn: 'Bạn có phải là sinh viên không?', furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '田中さんは先生ですか。', vn: 'Anh Tanaka có phải là giáo viên không?', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: 'ミラーさんはアメリカ人ですか。', vn: 'Anh Miller có phải là người Mỹ không?', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: 'あの人は医者ですか。', vn: 'Người kia có phải là bác sĩ không?', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: '佐藤さんは会社員ですか。', vn: 'Anh Satou có phải là nhân viên công ty không?', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: 'マリアさんはブラジル人ですか。', vn: 'Chị Maria có phải là người Brazil không?', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: '山田さんは銀行員ですか。', vn: 'Anh Yamada có phải là nhân viên ngân hàng không?', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }] },
        { jp: 'あの方は研究者ですか。', vn: 'Vị kia có phải là nhà nghiên cứu không?', furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }] },
        { jp: 'キムさんは韓国人ですか。', vn: 'Chị Kim có phải là người Hàn Quốc không?', furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }] },
        { jp: 'あなたは教師ですか。', vn: 'Bạn có phải là giáo viên không?', furigana: [{ kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }] }
      ]
    },
    {
      pattern: 'N も',
      explanation: 'Trợ từ "も" có nghĩa là "cũng". Thay thế "は" khi muốn nói ai/cái gì đó cũng tương tự.',
      example: 'ミラーさんも会社員です。(Miraa-san mo kaishain desu.) - Anh Miller cũng là nhân viên công ty.',
      examples: [
        { jp: 'ミラーさんも会社員です。', vn: 'Anh Miller cũng là nhân viên công ty.', furigana: [{ kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: '私も学生です。', vn: 'Tôi cũng là sinh viên.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '田中さんも日本人です。', vn: 'Anh Tanaka cũng là người Nhật.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }] },
        { jp: '佐藤さんもIMCの社員です。', vn: 'Anh Satou cũng là nhân viên công ty IMC.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }] },
        { jp: '山田さんも先生です。', vn: 'Anh Yamada cũng là giáo viên.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: 'キムさんも学生です。', vn: 'Chị Kim cũng là sinh viên.', furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: 'マリアさんも会社員です。', vn: 'Chị Maria cũng là nhân viên công ty.', furigana: [{ kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: '私も医者です。', vn: 'Tôi cũng là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: 'あの人も銀行員です。', vn: 'Người kia cũng là nhân viên ngân hàng.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }] },
        { jp: '彼も研究者です。', vn: 'Anh ấy cũng là nhà nghiên cứu.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }] }
      ]
    },
    {
      pattern: 'N1 の N2',
      explanation: 'Trợ từ "の" dùng để kết nối 2 danh từ, thể hiện sự sở hữu hoặc thuộc tính.',
      example: '東京大学の学生です。(Toukyou daigaku no gakusei desu.) - Là sinh viên đại học Tokyo.',
      examples: [
        { jp: '東京大学の学生です。', vn: 'Là sinh viên đại học Tokyo.', furigana: [{ kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '私はIMCの社員です。', vn: 'Tôi là nhân viên công ty IMC.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }] },
        { jp: '田中さんは神戸病院の医者です。', vn: 'Anh Tanaka là bác sĩ bệnh viện Kobe.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '神戸', reading: 'こうべ', meaning: 'THẦN HỘ' }, { kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: 'これは田中さんの本です。', vn: 'Đây là sách của anh Tanaka.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
        { jp: '山田さんは日本語の先生です。', vn: 'Anh Yamada là giáo viên tiếng Nhật.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: 'ミラーさんはパワー電気の社員です。', vn: 'Anh Miller là nhân viên công ty Power Điện khí.', furigana: [{ kanji: '電気', reading: 'でんき', meaning: 'ĐIỆN KHÍ' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }] },
        { jp: '私は富士大学の学生です。', vn: 'Tôi là sinh viên đại học Fuji.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '富士', reading: 'ふじ', meaning: 'PHÚ SĨ' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '佐藤さんはさくら大学の教師です。', vn: 'Anh Satou là giảng viên đại học Sakura.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '教師', reading: 'きょうし', meaning: 'GIÁO SƯ' }] },
        { jp: 'あの方は日本の方です。', vn: 'Vị kia là người Nhật.', furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }] },
        { jp: 'マリアさんはブラジルエアーの社員です。', vn: 'Chị Maria là nhân viên hãng hàng không Brazil.', furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }] }
      ]
    },
    {
      pattern: '～さん',
      explanation: 'Trong tiếng Nhật, từ「さん」được dùng ngay sau họ của người nghe để thể hiện sự kính trọng khi gọi tên người đó. Từ「さん」không dùng đối với chính bản thân người nói. Trong trường hợp đã biết tên của người nghe thì không dùng「あなた」mà dùng「さん」để gọi tên người đó.',
      example: 'あの方はミラーさんです。(Ano kata wa Miraa-san desu.) - Người kia là anh Miller.\n鈴木：ミラーさんは学生ですか。(Miraa-san wa gakusei desu ka?) - Anh có phải là sinh viên không?\nミラー：いいえ、会社員です。(Iie, kaishain desu.) - Không, tôi là nhân viên công ty.',
      examples: [
        { jp: '田中さんは会社員です。', vn: 'Anh Tanaka là nhân viên công ty.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: '山田さんは先生です。', vn: 'Anh Yamada là giáo viên.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: 'ミラーさんはアメリカ人です。', vn: 'Anh Miller là người Mỹ.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: '佐藤さんは銀行員です。', vn: 'Anh Satou là nhân viên ngân hàng.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }] },
        { jp: 'キムさんは韓国人です。', vn: 'Chị Kim là người Hàn Quốc.', furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }] },
        { jp: 'マリアさんはブラジル人です。', vn: 'Chị Maria là người Brazil.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: 'ワンさんは中国人です。', vn: 'Anh Vương là người Trung Quốc.', furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん', meaning: 'TRUNG QUỐC NHÂN' }] },
        { jp: 'サントスさんはエンジニアです。', vn: 'Anh Santos là kỹ sư.', furigana: [] },
        { jp: '鈴木さんは医者です。', vn: 'Anh Suzuki là bác sĩ.', furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: '高橋さんは研究者です。', vn: 'Anh Takahashi là nhà nghiên cứu.', furigana: [{ kanji: '高橋', reading: 'たかはし', meaning: 'CAO KIÊU' }, { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'NGHIÊN CỨU GIẢ' }] }
      ]
    }
  ],
  kaiwaImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  kaiwa: [
    {
      char: 'ミラー',
      jp: 'はじめまして。ミラーです。',
      vn: 'Xin chào. Tôi là Miller.',
      furigana: [
        { kanji: '初', reading: 'はじ', meaning: 'SƠ' }
      ]
    },
    {
      char: 'ミラー',
      jp: 'アメリカから来ました。',
      vn: 'Tôi đến từ Mỹ.',
      furigana: [
        { kanji: '来', reading: 'き', meaning: 'LAI' }
      ]
    },
    {
      char: 'ミラー',
      jp: 'どうぞよろしくお願いします。',
      vn: 'Rất mong được giúp đỡ.',
      furigana: [
        { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }
      ]
    },
    {
      char: '佐藤',
      jp: '佐藤です。こちらこそ、よろしく。',
      vn: 'Tôi là Satou. Tôi cũng rất mong được giúp đỡ.',
      furigana: [
        { kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }
      ]
    },
    {
      char: 'ミラー',
      jp: '佐藤さんは会社員ですか。',
      vn: 'Anh Satou là nhân viên công ty phải không?',
      furigana: [
        { kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' },
        { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }
      ]
    },
    {
      char: '佐藤',
      jp: 'はい、そうです。IMCの社員です。',
      vn: 'Vâng, đúng vậy. Tôi là nhân viên công ty IMC.',
      furigana: [
        { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }
      ]
    },
    {
      char: 'ミラー',
      jp: 'そうですか。私もIMCの社員です。',
      vn: 'Vậy à. Tôi cũng là nhân viên công ty IMC.',
      furigana: [
        { kanji: '私', reading: 'わたし', meaning: 'TỰ' },
        { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }
      ]
    },
    {
      char: '佐藤',
      jp: 'え、そうですか。',
      vn: 'Ồ, vậy sao.'
    },
  ],
  quiz: [
    // === NGỮ PHÁP N1 は N2 です (8 câu) ===
    {
      id: 1,
      question: "私はベトナム人___。",
      options: ["です", "ます", "います", "あります"],
      correctAnswer: "です",
      explanation: "Dùng 'です' để khẳng định danh từ. 'Tôi là người Việt Nam' → 私はベトナム人です。"
    },
    {
      id: 2,
      question: "田中さん___学生です。",
      options: ["は", "が", "を", "に"],
      correctAnswer: "は",
      explanation: "Trợ từ 'は' (wa) đánh dấu chủ đề của câu. 'Anh Tanaka là sinh viên' → 田中さんは学生です。"
    },
    {
      id: 3,
      question: "山田さんは先生___。",
      options: ["です", "ます", "います", "だ"],
      correctAnswer: "です",
      explanation: "Động từ 'です' dùng để nối danh từ. 'Anh Yamada là giáo viên' → 山田さんは先生です。"
    },
    {
      id: 4,
      question: "ミラーさん___アメリカ人です。",
      options: ["は", "を", "で", "が"],
      correctAnswer: "は",
      explanation: "Trợ từ 'は' đứng sau chủ đề. 'Anh Miller là người Mỹ' → ミラーさんはアメリカ人です。"
    },
    {
      id: 5,
      question: "わたしはエンジニア___。",
      options: ["です", "ます", "いる", "ある"],
      correctAnswer: "です",
      explanation: "Dùng 'です' cho câu khẳng định với danh từ. 'Tôi là kỹ sư' → わたしはエンジニアです。"
    },
    {
      id: 6,
      question: "佐藤さんは会社___です。",
      options: ["員", "人", "者", "家"],
      correctAnswer: "員",
      explanation: "'会社員' (kaishain) nghĩa là nhân viên công ty. '員' là thành viên."
    },
    {
      id: 7,
      question: "あの人___マリアさんです。",
      options: ["は", "が", "の", "を"],
      correctAnswer: "は",
      explanation: "Trợ từ 'は' đánh dấu chủ đề. 'Người kia là chị Maria' → あの人はマリアさんです。"
    },
    {
      id: 8,
      question: "キムさんは研究___です。",
      options: ["者", "員", "人", "家"],
      correctAnswer: "者",
      explanation: "'研究者' (kenkyuusha) là nghiên cứu sinh. '者' nghĩa là người (làm việc gì đó)."
    },

    // === PHỦ ĐỊNH じゃありません (7 câu) ===
    {
      id: 9,
      question: "私は医者___ありません。",
      options: ["じゃ", "では", "には", "とは"],
      correctAnswer: "じゃ",
      explanation: "Thể phủ định thông thường: N じゃありません. 'Tôi không phải bác sĩ' → 私は医者じゃありません。"
    },
    {
      id: 10,
      question: "私は会社員じゃ___。学生です。",
      options: ["ありません", "います", "ます", "です"],
      correctAnswer: "ありません",
      explanation: "Phủ định: じゃありません. 'Tôi không phải nhân viên. Tôi là sinh viên.'"
    },
    {
      id: 11,
      question: "田中さんは先生___。エンジニアです。",
      options: ["じゃありません", "です", "ですか", "でした"],
      correctAnswer: "じゃありません",
      explanation: "Phủ định để đính chính: 'Anh Tanaka không phải giáo viên. Anh ấy là kỹ sư.'"
    },
    {
      id: 12,
      question: "ミラーさんは日本人___ありません。",
      options: ["じゃ", "が", "を", "に"],
      correctAnswer: "じゃ",
      explanation: "'じゃ' là dạng rút gọn của 'では'. 'Anh Miller không phải người Nhật.'"
    },
    {
      id: 13,
      question: "私は学生では___。",
      options: ["ありません", "あります", "います", "です"],
      correctAnswer: "ありません",
      explanation: "'ではありません' là dạng trang trọng của 'じゃありません'. Nghĩa: 'Tôi không phải sinh viên.'"
    },
    {
      id: 14,
      question: "Câu 'わたしはいしゃじゃありません' có nghĩa là gì?",
      options: ["Tôi không phải bác sĩ", "Tôi là bác sĩ", "Bạn là bác sĩ", "Bác sĩ ở đâu"],
      correctAnswer: "Tôi không phải bác sĩ",
      explanation: "'いしゃ' = bác sĩ, 'じゃありません' = không phải là. → 'Tôi không phải bác sĩ.'"
    },
    {
      id: 15,
      question: "Phủ định của 'せんせいです' là gì?",
      options: ["せんせいじゃありません", "せんせいますか", "せんせいでした", "せんせいがいます"],
      correctAnswer: "せんせいじゃありません",
      explanation: "Để phủ định N です, ta dùng N じゃありません/ではありません."
    },

    // === CÂU HỎI ですか (6 câu) ===
    {
      id: 16,
      question: "あなたは学生です___。",
      options: ["か", "が", "を", "は"],
      correctAnswer: "か",
      explanation: "Thêm 'か' vào cuối câu để tạo câu hỏi. 'Bạn có phải sinh viên không?' → あなたは学生ですか。"
    },
    {
      id: 17,
      question: "ミラーさんはアメリカ人です___。",
      options: ["か", "が", "の", "を"],
      correctAnswer: "か",
      explanation: "Trợ từ 'か' biến câu khẳng định thành câu hỏi. 'Anh Miller có phải người Mỹ không?'"
    },
    {
      id: 18,
      question: "Cách trả lời 'Đúng vậy' cho câu hỏi 'がくせいですか' là gì?",
      options: ["はい、そうです", "いいえ、ちがいます", "わかりません", "そうですか"],
      correctAnswer: "はい、そうです",
      explanation: "'はい、そうです' = Vâng, đúng vậy. Dùng để xác nhận câu hỏi."
    },
    {
      id: 19,
      question: "Cách trả lời 'Không phải' cho câu hỏi 'いしゃですか' là gì?",
      options: ["いいえ、ちがいます", "はい、そうです", "はい、いしゃです", "そうですか"],
      correctAnswer: "いいえ、ちがいます",
      explanation: "'いいえ、ちがいます' = Không, không phải. Hoặc có thể nói 'いいえ、いしゃじゃありません.'"
    },
    {
      id: 20,
      question: "田中さんは___ですか。- 会社員です。",
      options: ["なん", "だれ", "どこ", "いつ"],
      correctAnswer: "なん",
      explanation: "'なん' (gì) dùng hỏi về nghề nghiệp. 'Anh Tanaka làm nghề gì?' → 'Là nhân viên công ty.'"
    },
    {
      id: 21,
      question: "あの方は___ですか。- 山田先生です。",
      options: ["どなた", "なん", "どこ", "どれ"],
      correctAnswer: "どなた",
      explanation: "'どなた' là kính ngữ của 'だれ' (ai). 'Vị kia là ai?' → 'Là thầy Yamada.'"
    },

    // === TRỢ TỪ も (5 câu) ===
    {
      id: 22,
      question: "ミラーさんは学生です。田中さん___学生です。",
      options: ["も", "は", "が", "の"],
      correctAnswer: "も",
      explanation: "Trợ từ 'も' nghĩa là 'cũng'. 'Anh Tanaka cũng là sinh viên.'"
    },
    {
      id: 23,
      question: "私はベトナム人です。キムさん___ベトナム人です。",
      options: ["も", "は", "が", "を"],
      correctAnswer: "も",
      explanation: "'も' thay thế 'は' khi muốn nói 'cũng'. 'Chị Kim cũng là người Việt.'"
    },
    {
      id: 24,
      question: "山田さんは医者です。佐藤さん___医者です。",
      options: ["も", "は", "が", "を"],
      correctAnswer: "も",
      explanation: "Dùng 'も' để diễn đạt sự tương đồng. 'Anh Satou cũng là bác sĩ.'"
    },
    {
      id: 25,
      question: "Câu 'わたしもがくせいです' có nghĩa là gì?",
      options: ["Tôi cũng là sinh viên", "Tôi là sinh viên", "Tôi không phải sinh viên", "Bạn là sinh viên"],
      correctAnswer: "Tôi cũng là sinh viên",
      explanation: "'も' = cũng. 'わたしもがくせいです' = 'Tôi cũng là sinh viên.'"
    },
    {
      id: 26,
      question: "A: 私は日本人です。B: 私___日本人です。",
      options: ["も", "は", "が", "の"],
      correctAnswer: "も",
      explanation: "Khi muốn nói mình giống người khác, dùng 'も'. 'Tôi cũng là người Nhật.'"
    },

    // === TRỢ TỪ の (5 câu) ===
    {
      id: 27,
      question: "私は東京大学___学生です。",
      options: ["の", "は", "が", "を"],
      correctAnswer: "の",
      explanation: "Trợ từ 'の' nối hai danh từ, thể hiện sở hữu/thuộc về. 'Tôi là sinh viên của ĐH Tokyo.'"
    },
    {
      id: 28,
      question: "これは田中さん___本です。",
      options: ["の", "は", "が", "を"],
      correctAnswer: "の",
      explanation: "'の' thể hiện sở hữu. 'Đây là sách của anh Tanaka.'"
    },
    {
      id: 29,
      question: "ミラーさんはIMC___社員です。",
      options: ["の", "は", "が", "を"],
      correctAnswer: "の",
      explanation: "'の' nối công ty và nhân viên. 'Anh Miller là nhân viên của công ty IMC.'"
    },
    {
      id: 30,
      question: "日本___大学 có nghĩa là gì?",
      options: ["Đại học Nhật Bản", "Nhật Bản và đại học", "Đại học ở Nhật Bản", "Nhật Bản là đại học"],
      correctAnswer: "Đại học Nhật Bản",
      explanation: "'N1 の N2' = N2 của/thuộc về N1. '日本の大学' = Đại học (của) Nhật Bản."
    },
    {
      id: 31,
      question: "病院___医者 có nghĩa là gì?",
      options: ["Bác sĩ của bệnh viện", "Bệnh viện và bác sĩ", "Bác sĩ là bệnh viện", "Bệnh viện không có bác sĩ"],
      correctAnswer: "Bác sĩ của bệnh viện",
      explanation: "'病院の医者' = Bác sĩ của bệnh viện, bác sĩ thuộc bệnh viện đó."
    },

    // === TỪ VỰNG NGHỀ NGHIỆP (6 câu) ===
    {
      id: 32,
      question: "'学生' đọc là gì và có nghĩa là gì?",
      options: ["がくせい - Sinh viên", "せんせい - Giáo viên", "いしゃ - Bác sĩ", "かいしゃいん - Nhân viên"],
      correctAnswer: "がくせい - Sinh viên",
      explanation: "'学生' (gakusei) = Sinh viên. '学' = học, '生' = người."
    },
    {
      id: 33,
      question: "'先生' đọc là gì và có nghĩa là gì?",
      options: ["せんせい - Giáo viên", "がくせい - Sinh viên", "いしゃ - Bác sĩ", "しゃいん - Nhân viên"],
      correctAnswer: "せんせい - Giáo viên",
      explanation: "'先生' (sensei) = Giáo viên, thầy/cô. '先' = trước, '生' = sinh."
    },
    {
      id: 34,
      question: "'医者' đọc là gì và có nghĩa là gì?",
      options: ["いしゃ - Bác sĩ", "かんごし - Y tá", "がくせい - Sinh viên", "けんきゅうしゃ - Nghiên cứu sinh"],
      correctAnswer: "いしゃ - Bác sĩ",
      explanation: "'医者' (isha) = Bác sĩ. '医' = y học, '者' = người."
    },
    {
      id: 35,
      question: "病院で働く人は___です。",
      options: ["医者", "学生", "会社員", "研究者"],
      correctAnswer: "医者",
      explanation: "'病院' (byouin) = bệnh viện. Người làm việc ở bệnh viện là '医者' (bác sĩ)."
    },
    {
      id: 36,
      question: "大学で勉強する人は___です。",
      options: ["学生", "医者", "会社員", "先生"],
      correctAnswer: "学生",
      explanation: "'大学' = đại học, '勉強する' = học tập. Người học ở đại học là '学生' (sinh viên)."
    },
    {
      id: 37,
      question: "'会社員' có nghĩa là gì?",
      options: ["Nhân viên công ty", "Giám đốc", "Sinh viên", "Giáo viên"],
      correctAnswer: "Nhân viên công ty",
      explanation: "'会社' = công ty, '員' = thành viên. '会社員' = nhân viên công ty."
    },

    // === TỪ VỰNG ĐỊA ĐIỂM/QUỐC GIA (5 câu) ===
    {
      id: 38,
      question: "'日本' đọc là gì và có nghĩa là gì?",
      options: ["にほん - Nhật Bản", "ちゅうごく - Trung Quốc", "かんこく - Hàn Quốc", "べとなむ - Việt Nam"],
      correctAnswer: "にほん - Nhật Bản",
      explanation: "'日本' (Nihon/Nippon) = Nhật Bản. '日' = mặt trời, '本' = gốc."
    },
    {
      id: 39,
      question: "'大学' đọc là gì và có nghĩa là gì?",
      options: ["だいがく - Trường đại học", "がっこう - Trường học", "びょういん - Bệnh viện", "かいしゃ - Công ty"],
      correctAnswer: "だいがく - Trường đại học",
      explanation: "'大学' (daigaku) = Đại học. '大' = lớn, '学' = học."
    },
    {
      id: 40,
      question: "'病院' đọc là gì và có nghĩa là gì?",
      options: ["びょういん - Bệnh viện", "だいがく - Đại học", "かいしゃ - Công ty", "えき - Nhà ga"],
      correctAnswer: "びょういん - Bệnh viện",
      explanation: "'病院' (byouin) = Bệnh viện. '病' = bệnh, '院' = viện."
    },
    {
      id: 41,
      question: "ミラーさんは___から来ました。- Anh Miller đến từ Mỹ.",
      options: ["アメリカ", "日本", "ベトナム", "中国"],
      correctAnswer: "アメリカ",
      explanation: "'アメリカ' = Mỹ. '〜から来ました' = đến từ 〜."
    },
    {
      id: 42,
      question: "'ベトナム' nghĩa là gì?",
      options: ["Việt Nam", "Nhật Bản", "Hàn Quốc", "Trung Quốc"],
      correctAnswer: "Việt Nam",
      explanation: "'ベトナム' là phiên âm katakana của 'Vietnam' = Việt Nam."
    },

    // === TỪ NGHI VẤN (4 câu) ===
    {
      id: 43,
      question: "あの人は___ですか。- Người kia là ai?",
      options: ["だれ", "なん", "どこ", "いつ"],
      correctAnswer: "だれ",
      explanation: "'だれ' (dare) = ai. Dùng để hỏi về người. 'あの人はだれですか' = Người kia là ai?"
    },
    {
      id: 44,
      question: "お仕事は___ですか。- Công việc của bạn là gì?",
      options: ["なん", "だれ", "どこ", "どなた"],
      correctAnswer: "なん",
      explanation: "'なん' (nan) = gì, cái gì. Dùng để hỏi về sự vật, nghề nghiệp."
    },
    {
      id: 45,
      question: "'どなた' là kính ngữ của từ nào?",
      options: ["だれ", "なん", "どこ", "いつ"],
      correctAnswer: "だれ",
      explanation: "'どなた' (donata) là cách nói lịch sự của 'だれ' (ai), dùng với người trên."
    },
    {
      id: 46,
      question: "会社は___ですか。- Công ty ở đâu?",
      options: ["どこ", "だれ", "なん", "いつ"],
      correctAnswer: "どこ",
      explanation: "'どこ' (doko) = ở đâu. Dùng để hỏi về địa điểm."
    },

    // === CHÀO HỎI & GIAO TIẾP (4 câu) ===
    {
      id: 47,
      question: "Khi gặp ai lần đầu tiên, bạn nói gì?",
      options: ["はじめまして", "こんにちは", "さようなら", "おやすみなさい"],
      correctAnswer: "はじめまして",
      explanation: "'はじめまして' = Xin chào (lần đầu gặp), rất vui được gặp bạn."
    },
    {
      id: 48,
      question: "'どうぞよろしくお願いします' có nghĩa là gì?",
      options: ["Rất mong được giúp đỡ", "Tạm biệt", "Chào buổi sáng", "Cảm ơn"],
      correctAnswer: "Rất mong được giúp đỡ",
      explanation: "Câu này dùng khi tự giới thiệu, nghĩa là 'Rất mong được giúp đỡ/làm quen'."
    },
    {
      id: 49,
      question: "Khi người khác nói 'よろしくお願いします', bạn đáp lại như thế nào?",
      options: ["こちらこそ、よろしく", "さようなら", "おはようございます", "すみません"],
      correctAnswer: "こちらこそ、よろしく",
      explanation: "'こちらこそ' = Tôi mới là (người cần nói thế). Đáp lại: 'Tôi cũng rất mong được giúp đỡ.'"
    },
    {
      id: 50,
      question: "'そうですか' thường dùng để làm gì?",
      options: ["Thể hiện sự ngạc nhiên/biết thêm thông tin", "Chào tạm biệt", "Hỏi về nghề nghiệp", "Phủ định"],
      correctAnswer: "Thể hiện sự ngạc nhiên/biết thêm thông tin",
      explanation: "'そうですか' = Vậy à, thế à. Dùng khi nhận được thông tin mới, thể hiện sự quan tâm."
    }
  ]
};

// =================================================================================================
// BÀI 2 (LESSON 2)
// =================================================================================================

export const lesson2Data: LessonDetail = {
  id: 2,
  title: "Bài 2: Cái này, cái đó, cái kia",
  vocabulary: [
    // === CHỈ THỊ TỪ (Demonstratives) ===
    {
      word: 'これ', kanji: '', romaji: 'kore', mean: 'cái này, đây (vật ở gần người nói)',
      examples: [
        {
          jp: 'これは本です。', romaji: 'Kore wa hon desu.', vn: 'Đây là cuốn sách.',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'これは辞書です。', romaji: 'Kore wa jisho desu.', vn: 'Đây là cuốn từ điển.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }]
        },
        {
          jp: 'これは私の傘です。', romaji: 'Kore wa watashi no kasa desu.', vn: 'Đây là cái ô của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
        },
        {
          jp: 'これは日本語の本です。', romaji: 'Kore wa nihongo no hon desu.', vn: 'Đây là cuốn sách tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', vn: 'Đây là cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'これは田中さんの名刺です。', romaji: 'Kore wa Tanaka-san no meishi desu.', vn: 'Đây là danh thiếp của anh Tanaka.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
        }
      ]
    },
    {
      word: 'それ', kanji: '', romaji: 'sore', mean: 'cái đó, đó (vật ở gần người nghe)',
      examples: [
        {
          jp: 'それは雑誌です。', romaji: 'Sore wa zasshi desu.', vn: 'Đó là cuốn tạp chí.',
          furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }]
        },
        {
          jp: 'それは新聞です。', romaji: 'Sore wa shinbun desu.', vn: 'Đó là tờ báo.',
          furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }]
        },
        {
          jp: 'それは私の鞄です。', romaji: 'Sore wa watashi no kaban desu.', vn: 'Đó là cái túi của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }]
        },
        {
          jp: 'それは何の本ですか。', romaji: 'Sore wa nan no hon desu ka.', vn: 'Đó là cuốn sách về cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'それは誰の鍵ですか。', romaji: 'Sore wa dare no kagi desu ka.', vn: 'Đó là chìa khóa của ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }]
        },
        {
          jp: 'それはシャープペンシルですか。', romaji: 'Sore wa sha-pupenshiru desu ka.', vn: 'Đó có phải là bút chì kim không?',
          furigana: []
        }
      ]
    },
    {
      word: 'あれ', kanji: '', romaji: 'are', mean: 'cái kia, kia (vật ở xa cả hai)',
      examples: [
        {
          jp: 'あれは病院です。', romaji: 'Are wa byouin desu.', vn: 'Kia là bệnh viện.',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }]
        },
        {
          jp: 'あれは何ですか。', romaji: 'Are wa nan desu ka.', vn: 'Kia là cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'あれは私の車です。', romaji: 'Are wa watashi no kuruma desu.', vn: 'Kia là xe ô tô của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }]
        },
        {
          jp: 'あれは大学です。', romaji: 'Are wa daigaku desu.', vn: 'Kia là trường đại học.',
          furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }]
        },
        {
          jp: 'あれは時計ですか。', romaji: 'Are wa tokei desu ka.', vn: 'Kia có phải là cái đồng hồ không?',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }]
        },
        {
          jp: 'あれは誰のカバンですか。', romaji: 'Are wa dare no kaban desu ka.', vn: 'Kia là túi của ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: 'カバン', reading: 'かばん', meaning: 'BẠC' }]
        }
      ]
    },
    {
      word: 'この', kanji: '', romaji: 'kono', mean: '~ này (đứng trước danh từ)',
      examples: [
        {
          jp: 'この本は私のです。', romaji: 'Kono hon wa watashi no desu.', vn: 'Cuốn sách này là của tôi.',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: 'このカメラはいくらですか。', romaji: 'Kono kamera wa ikura desu ka.', vn: 'Cái máy ảnh này giá bao nhiêu?',
          furigana: []
        },
        {
          jp: 'この辞書はとても便利です。', romaji: 'Kono jisho wa totemo benri desu.', vn: 'Cuốn từ điển này rất tiện lợi.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }]
        },
        {
          jp: 'この鞄は田中さんのです。', romaji: 'Kono kaban wa Tanaka-san no desu.', vn: 'Cái túi này là của anh Tanaka.',
          furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: 'この鉛筆は誰のですか。', romaji: 'Kono enpitsu wa dare no desu ka.', vn: 'Cái bút chì này là của ai?',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: 'この時計は日本語の先生のプレゼントです。', romaji: 'Kono tokei wa nihongo no sensei no purezento desu.', vn: 'Cái đồng hồ này là quà tặng của giáo viên tiếng Nhật.',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        }
      ]
    },
    {
      word: 'その', kanji: '', romaji: 'sono', mean: '~ đó (đứng trước danh từ)',
      examples: [
        {
          jp: 'その本は誰のですか。', romaji: 'Sono hon wa dare no desu ka.', vn: 'Cuốn sách đó là của ai?',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: 'その辞書は私のです。', romaji: 'Sono jisho wa watashi no desu.', vn: 'Cuốn từ điển đó là của tôi.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: 'その傘は田中さんのですか。', romaji: 'Sono kasa wa Tanaka-san no desu ka.', vn: 'Cái ô đó có phải của anh Tanaka không?',
          furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: 'そのニュースを聞きましたか。', romaji: 'Sono nyu-su wo kikimashita ka.', vn: 'Bạn đã nghe tin tức đó chưa?',
          furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'そのチョコレートはおいしいですよ。', romaji: 'Sono chokore-to wa oishii desu yo.', vn: 'Sô cô la đó ngon lắm đấy.',
          furigana: []
        },
        {
          jp: 'その手帳はとてもいいですね。', romaji: 'Sono techo wa totemo ii desu ne.', vn: 'Cuốn sổ tay đó rất tốt nhỉ.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }]
        }
      ]
    },
    {
      word: 'あの', kanji: '', romaji: 'ano', mean: '~ kia (đứng trước danh từ)',
      examples: [
        {
          jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: 'あの山は富士山です。', romaji: 'Ano yama wa Fujisan desu.', vn: 'Ngọn núi kia là núi Phú Sĩ.',
          furigana: [{ kanji: '山', reading: 'やま', meaning: 'SƠN' }, { kanji: '富士山', reading: 'ふじさん', meaning: 'PHÚ SĨ SƠN' }]
        },
        {
          jp: 'あの病院はとても有名です。', romaji: 'Ano byouin wa totemo yuumei desu.', vn: 'Bệnh viện kia rất nổi tiếng.',
          furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: 'あのビルは何ですか。', romaji: 'Ano biru wa nan desu ka.', vn: 'Cái tòa nhà kia là cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'あの車は山田さんのです。', romaji: 'Ano kuruma wa Yamada-san no desu.', vn: 'Chiếc xe kia là của anh Yamada.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }]
        },
        {
          jp: 'あの店でおいしいコーヒーを飲みました。', romaji: 'Ano mise de oishii ko-hi- wo nomimashita.', vn: 'Tôi đã uống cà phê ngon ở cửa hàng kia.',
          furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }]
        }
      ]
    },
    // === ĐỒ VẬT (Objects) ===
    {
      word: 'ほん', kanji: '本', romaji: 'hon', mean: 'sách',
      kanjiDetails: [
        {
          kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaning: 'Sách, nguồn gốc', sinoVietnamese: 'BẢN', strokes: 5, jlpt: 'N5', radicals: '木 (mộc)', components: [{ char: '木', meaning: 'cây' }, { char: '一', meaning: 'một' }], mnemonic: 'Một dấu gạch (一) ở gốc cây (木) để chỉ nguồn gốc (Bản) / Sách làm từ gỗ.',
          examples: ['日本 (にほん) - Nhật Bản', '山本 (やまもと) - Yamamoto', '一本 (いっぽん) - Một cái (vật dài)'],
          exampleSentences: [
            { jp: 'これは本です。', vn: 'Đây là cuốn sách.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
            { jp: '日本から来ました。', vn: 'Tôi đến từ Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
            { jp: 'ペンを一本ください。', vn: 'Cho tôi một cây bút.', furigana: [{ kanji: '一', reading: 'いっ', meaning: 'NHẤT' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは本です。', romaji: 'Kore wa hon desu.', vn: 'Đây là cuốn sách.',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'この本は私のです。', romaji: 'Kono hon wa watashi no desu.', vn: 'Cuốn sách này là của tôi.',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: '日本語の本を読みます。', romaji: 'Nihongo no hon wo yomimasu.', vn: 'Tôi đọc sách tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', vn: 'Có cuốn sách ở trên bàn.',
          furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '上', reading: 'うえ', meaning: 'THƯỢNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '新しい本を買いました。', romaji: 'Atarashii hon wo kaimashita.', vn: 'Tôi đã mua một cuốn sách mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'その本を貸してください。', romaji: 'Sono hon wo kashite kudasai.', vn: 'Hãy cho tôi mượn cuốn sách đó.',
          furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        }
      ]
    },
    {
      word: 'じしょ', kanji: '辞書', romaji: 'jisho', mean: 'từ điển',
      kanjiDetails: [
        {
          kanji: '辞', onyomi: 'ジ (ji)', kunyomi: 'や.める (yameru)', meaning: 'Từ điển, từ bỏ', sinoVietnamese: 'TỪ', strokes: 13, jlpt: 'N4', radicals: '辛 (tân)', components: [{ char: '舌', meaning: 'lưỡi' }, { char: '辛', meaning: 'cay' }], mnemonic: 'Dùng lưỡi (舌) nói những lời cay (辛) đắng khi từ (辞) biệt.',
          examples: ['辞書 (じしょ) - từ điển', '祝辞 (しゅくじ) - lời chúc'],
          exampleSentences: [
            { jp: '辞書で調べます。', vn: 'Tôi tra cứu bằng từ điển.', furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '調', reading: 'しら', meaning: 'ĐIỀU' }] },
            { jp: '会社を辞めます。', vn: 'Tôi nghỉ việc ở công ty.', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '辞', reading: 'や', meaning: 'TỪ' }] }
          ]
        },
        {
          kanji: '書', onyomi: 'ショ (sho)', kunyomi: 'か.く (kaku)', meaning: 'Viết, sách', sinoVietnamese: 'THƯ', strokes: 10, jlpt: 'N5', radicals: '曰 (viết)', components: [{ char: '聿', meaning: 'cây bút' }, { char: '日', meaning: 'mặt trời' }], mnemonic: 'Dưới ánh mặt trời (日), cầm bút (聿) viết nên cuốn thư (書).',
          examples: ['図書 (としょ) - sách/đồ thư', '辞書 (じしょ) - từ điển', '書き方 (かきかた) - cách viết'],
          exampleSentences: [
            { jp: '名前を書きます。', vn: 'Tôi viết tên.', furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
            { jp: '図書館へ行きます。', vn: 'Tôi đi đến thư viện.', furigana: [{ kanji: '図書館', reading: 'としょかん', meaning: 'ĐỒ THƯ QUÁN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは辞書です。', romaji: 'Kore wa jisho desu.', vn: 'Đây là cuốn từ điển.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }]
        },
        {
          jp: '英語の辞書を買います。', romaji: 'Eigo no jisho wo kaimasu.', vn: 'Tôi mua từ điển tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'この辞書はとても便利です。', romaji: 'Kono jisho wa totemo benri desu.', vn: 'Cuốn từ điển này rất tiện lợi.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }]
        },
        {
          jp: '電子辞書を使っています。', romaji: 'Denshi jisho wo tsukatte imasu.', vn: 'Tôi đang sử dụng từ điển điện tử.',
          furigana: [{ kanji: '電子辞書', reading: 'でんしじしょ', meaning: 'ĐIỆN TỬ TỪ THƯ' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        },
        {
          jp: '辞書で調べます。', romaji: 'Jisho de shirabemasu.', vn: 'Tôi tra cứu bằng từ điển.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '調', reading: 'しら', meaning: 'ĐIỀU' }]
        },
        {
          jp: 'いい辞書が欲しいです。', romaji: 'Ii jisho ga hoshii desu.', vn: 'Tôi muốn một cuốn từ điển tốt.',
          furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '欲', reading: 'ほ', meaning: 'DỤC' }]
        }
      ]
    },
    {
      word: 'ざっし', kanji: '雑誌', romaji: 'zasshi', mean: 'tạp chí',
      kanjiDetails: [
        {
          kanji: '雑', onyomi: 'ザツ (zatsu), ゾウ (zou)', kunyomi: 'まじ.える (majieru)', meaning: 'Tạp, hỗn hợp', sinoVietnamese: 'TẠP', strokes: 14, jlpt: 'N3', radicals: '隹 (truy)', components: [{ char: '九', meaning: 'chín' }, { char: '木', meaning: 'cây' }, { char: '隹', meaning: 'con chim' }], mnemonic: 'Chín (九) loại chim (隹) đậu trên cây (木) tạo nên sự tạp (雑) loạn.',
          examples: ['雑誌 (ざっし) - tạp chí', '複雑 (ふくざつ) - phức tạp'],
          exampleSentences: [
            { jp: '雑誌を読みます。', vn: 'Tôi đọc tạp chí.', furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '日本語は複雑です。', vn: 'Tiếng Nhật rất phức tạp.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '複雑', reading: 'ふくざつ', meaning: 'PHỨC TẠP' }] }
          ]
        },
        {
          kanji: '誌', onyomi: 'シ (shi)', kunyomi: '', meaning: 'Ghi chép', sinoVietnamese: 'CHÍ', strokes: 14, jlpt: 'N4', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '志', meaning: 'ý chí' }], mnemonic: 'Dùng lời nói (言) để ghi lại ý chí (志) của mình vào tạp chí (誌).',
          examples: ['雑誌 (ざっし) - tạp chí', '日誌 (にっし) - Nhật ký công việc'],
          exampleSentences: [
            { jp: 'これは新しい雑誌です。', vn: 'Đây là cuốn tạp chí mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }] },
            { jp: '日誌を書きます。', vn: 'Tôi viết nhật ký công việc.', furigana: [{ kanji: '日誌', reading: 'にっし', meaning: 'NHẬT CHÍ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは雑誌です。', romaji: 'Kore wa zasshi desu.', vn: 'Đây là cuốn tạp chí.',
          furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }]
        },
        {
          jp: '毎週雑誌を読みます。', romaji: 'Maishuu zasshi wo yomimasu.', vn: 'Hàng tuần tôi đều đọc tạp chí.',
          furigana: [{ kanji: '毎週', reading: 'まいしゅう', meaning: 'MỖI CHU' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: 'その雑誌を見せてください。', romaji: 'Sono zasshi wo misete kudasai.', vn: 'Hãy cho tôi xem cuốn tạp chí đó.',
          furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '料理の雑誌を買いました。', romaji: 'Ryouri no zasshi wo kaimashita.', vn: 'Tôi đã mua một cuốn tạp chí về nấu ăn.',
          furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'この雑誌は面白いです。', romaji: 'Kono zasshi wa omoshiroi desu.', vn: 'Cuốn tạp chí này thú vị.',
          furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '面', reading: 'おも', meaning: 'DIỆN' }, { kanji: '白', reading: 'しろ', meaning: 'BẠCH' }]
        },
        {
          jp: '本屋で雑誌を立ち読みしました。', romaji: 'Honya de zasshi wo tachiyomi shimashita.', vn: 'Tôi đã đứng đọc tạp chí ở hiệu sách.',
          furigana: [{ kanji: '本屋', reading: 'ほんや', meaning: 'BẢN ỐC' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '立', reading: 'た', meaning: 'LẬP' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        }
      ]
    },
    {
      word: 'しんぶん', kanji: '新聞', romaji: 'shinbun', mean: 'báo',
      kanjiDetails: [
        {
          kanji: '新', onyomi: 'シン (shin)', kunyomi: 'あたら.しい (atarashii)', meaning: 'Mới', sinoVietnamese: 'TÂN', strokes: 13, jlpt: 'N5', radicals: '斤 (cân)', components: [{ char: '立', meaning: 'đứng' }, { char: '木', meaning: 'cây' }, { char: '斤', meaning: 'cái rìu' }], mnemonic: 'Đứng (立) cạnh cây (木) dùng rìu (斤) chặt để lấy gỗ mới (Tân).',
          examples: ['新聞 (しんぶん) - báo', '新年 (しんねん) - năm mới', '新しい (あたらしい) - mới'],
          exampleSentences: [
            { jp: '新聞を読みます。', vn: 'Tôi đọc báo.', furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '新しい車です。', vn: 'Đây là cái xe mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }] }
          ]
        },
        {
          kanji: '聞', onyomi: 'ブン (bun), モン (mon)', kunyomi: 'き.く (kiku)', meaning: 'Nghe, hỏi', sinoVietnamese: 'VĂN', strokes: 14, jlpt: 'N5', radicals: '耳 (nhĩ)', components: [{ char: '門', meaning: 'cánh cửa' }, { char: '耳', meaning: 'tai' }], mnemonic: 'Ghé tai (耳) vào cửa (門) để nghe ngóng tin tức (Văn).',
          examples: ['新聞 (しんぶん) - báo', '聞き手 (ききて) - người nghe'],
          exampleSentences: [
            { jp: 'ニュースを聞きます。', vn: 'Tôi nghe tin tức.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
            { jp: '先生に聞きます。', vn: 'Tôi hỏi giáo viên.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'それは新聞です。', romaji: 'Sore wa shinbun desu.', vn: 'Đó là tờ báo.',
          furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }]
        },
        {
          jp: '毎日新聞を読みます。', romaji: 'Mainichi shinbun wo yomimasu.', vn: 'Tôi đọc báo mỗi ngày.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: '父は新聞を読んでいます。', romaji: 'Chichi wa shinbun wo yonde imasu.', vn: 'Bố tôi đang đọc báo.',
          furigana: [{ kanji: '父', reading: 'ちち', meaning: 'PHỤ' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: '昨日の新聞がありますか。', romaji: 'Kinou no shinbun ga arimasu ka.', vn: 'Có tờ báo ngày hôm qua không?',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }]
        },
        {
          jp: '新聞を開きます。', romaji: 'Shinbun wo hirakimasu.', vn: 'Tôi mở tờ báo ra.',
          furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '開', reading: 'ひら', meaning: 'KHAI' }]
        },
        {
          jp: '新聞の広告を見ます。', romaji: 'Shinbun no koukoku wo mimasu.', vn: 'Tôi xem quảng cáo trên báo.',
          furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '広告', reading: 'こうこく', meaning: 'QUẢNG CÁO' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        }
      ]
    },
    {
      word: 'ノート', kanji: '', romaji: 'no-to', mean: 'vở',
      examples: [
        {
          jp: 'これはノートです。', romaji: 'Kore wa no-to desu.', vn: 'Đây là cuốn vở.',
          furigana: []
        },
        {
          jp: 'ノートに書きます。', romaji: 'No-to ni kakimasu.', vn: 'Tôi viết vào vở.',
          furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: '新しいノートを買いました。', romaji: 'Atarashii no-to wo kaimashita.', vn: 'Tôi đã mua một cuốn vở mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'ノートを開けてください。', romaji: 'No-to wo akete kudasai.', vn: 'Hãy mở vở ra.',
          furigana: [{ kanji: '開', reading: 'あ', meaning: 'KHAI' }]
        },
        {
          jp: '先生のノートを見ます。', romaji: 'Sensei no no-to wo mimasu.', vn: 'Tôi xem vở của giáo viên.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'ノートを忘れないでください。', romaji: 'No-to wo wasurenaide kudasai.', vn: 'Đừng quên mang vở nhé.',
          furigana: [{ kanji: '忘', reading: 'わす', meaning: 'VONG' }]
        }
      ]
    },
    {
      word: 'てちょう', kanji: '手帳', romaji: 'techo', mean: 'sổ tay',
      kanjiDetails: [
        {
          kanji: '手', onyomi: 'シュ (shu)', kunyomi: 'て (te)', meaning: 'Tay', sinoVietnamese: 'THỦ', strokes: 4, jlpt: 'N5', radicals: '手 (thủ)', mnemonic: 'Hình ảnh bàn tay với các ngón tay.'
        },
        {
          kanji: '帳', onyomi: 'チョウ (chou)', kunyomi: 'とばり (tobari)', meaning: 'Sổ ghi chép, bức màn', sinoVietnamese: 'TRƯƠNG', strokes: 11, jlpt: 'N1', radicals: '巾 (cân)', components: [{ char: '巾', meaning: 'khăn' }, { char: '長', meaning: 'dài' }], mnemonic: 'Cuộn sổ làm từ tấm khăn (巾) dài (長) gọi là Trương (帳).'
        }
      ],
      examples: [
        {
          jp: 'その手帳はとてもいいですね。', romaji: 'Sono techo wa totemo ii desu ne.', vn: 'Cuốn sổ tay đó rất tốt nhỉ.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }]
        },
        {
          jp: '手帳に予定を書きます。', romaji: 'Techo ni yotei wo kakimasu.', vn: 'Tôi viết dự định vào sổ tay.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }, { kanji: '予定', reading: 'よてい', meaning: 'DƯ ĐỊNH' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'ポケットに手帳があります。', romaji: 'Poketto ni techo ga arimasu.', vn: 'Có cuốn sổ tay trong túi áo.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }]
        },
        {
          jp: '手帳を見せてください。', romaji: 'Techo wo misete kudasai.', vn: 'Hãy cho tôi xem cuốn sổ tay.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '大事なことを手帳にメモします。', romaji: 'Daiji na koto wo techo ni memo shimasu.', vn: 'Tôi ghi chú những việc quan trọng vào sổ tay.',
          furigana: [{ kanji: '大事', reading: 'だいじ', meaning: 'ĐIỀN TRUNG' }, { kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }]
        },
        {
          jp: '手帳 को なくしました。', romaji: 'Techo wo nakushimashita.', vn: 'Tôi đã làm mất cuốn sổ tay.',
          furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }]
        }
      ]
    },
    {
      word: 'めいし', kanji: '名刺', romaji: 'meishi', mean: 'danh thiếp',
      kanjiDetails: [
        {
          kanji: '名', onyomi: 'メイ (mei), ミョウ (myou)', kunyomi: 'な (na)', meaning: 'Tên, danh tiếng', sinoVietnamese: 'DANH', strokes: 6, jlpt: 'N5', radicals: '口 (khẩu)', components: [{ char: '夕', meaning: 'buổi tối' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Buổi tối (夕) trời tối không nhìn rõ mặt nên phải dùng miệng (口) gọi tên (名) nhau.',
          examples: ['名前 (なまえ) - tên', '有名 (ゆうめい) - nổi tiếng', '名刺 (めいし) - danh thiếp'],
          exampleSentences: [
            { jp: 'お名前は何ですか。', vn: 'Tên bạn là gì?', furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
            { jp: 'あの方は有名です。', vn: 'Vị kia nổi tiếng.', furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }] }
          ]
        },
        {
          kanji: '刺', onyomi: 'シ (shi)', kunyomi: 'さ.す (sasu)', meaning: 'Đâm, châm', sinoVietnamese: 'THỨ', strokes: 8, jlpt: 'N3', radicals: '刀 (đao)', components: [{ char: '朿', meaning: 'gai' }, { char: '刂', meaning: 'con dao' }], mnemonic: 'Dùng dao (刂) đâm vào cái gai (朿) gọi là Thứ (刺).',
          examples: ['名刺 (めいし) - danh thiếp', '刺身 (さしみ) - món cá sống Sashimi'],
          exampleSentences: [
            { jp: '名刺を交換します。', vn: 'Tôi trao đổi danh thiếp.', furigana: [{ kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }, { kanji: '交換', reading: 'こうかん', meaning: 'GIAO HOÁN' }] },
            { jp: '刺身を食べます。', vn: 'Tôi ăn Sashimi.', furigana: [{ kanji: '刺身', reading: 'さしみ', meaning: 'THỨ THÂN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは田中さんの名刺です。', romaji: 'Kore wa Tanaka-san no meishi desu.', vn: 'Đây là danh thiếp của anh Tanaka.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
        },
        {
          jp: '名刺交換をします。', romaji: 'Meishi koukan wo shimasu.', vn: 'Tôi thực hiện trao đổi danh thiếp.',
          furigana: [{ kanji: '名刺交換', reading: 'めいしこうかん', meaning: 'DANH THỨ GIAO HOÁN' }]
        },
        {
          jp: '名刺を忘れました。', romaji: 'Meishi wo wasuremashita.', vn: 'Tôi đã quên danh thiếp.',
          furigana: [{ kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }, { kanji: '忘', reading: 'わす', meaning: 'VONG' }]
        },
        {
          jp: '綺麗な名刺ですね。', romaji: 'Kirei na meishi desu ne.', vn: 'Danh thiếp đẹp quá nhỉ.',
          furigana: [{ kanji: '綺麗', reading: 'きれい', meaning: 'KÌ LỆ' }, { kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
        },
        {
          jp: '私の名刺をどうぞ。', romaji: 'Watashi no meishi wo douzo.', vn: 'Xin mời nhận danh thiếp của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
        },
        {
          jp: '名刺に電話番号を書き足しました。', romaji: 'Meishi ni denwa bangou wo kakitashimashita.', vn: 'Tôi viết thêm số điện thoại vào danh thiếp.',
          furigana: [{ kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }, { kanji: '電話番号', reading: 'でんわばんごう', meaning: 'ĐIỆN THOẠI PHIÊN HIỆU' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }, { kanji: '足', reading: 'た', meaning: 'TÚC' }]
        }
      ]
    },
    {
      word: 'カード', kanji: '', romaji: 'ka-do', mean: 'thẻ',
      examples: [
        {
          jp: 'カードで払います。', romaji: 'Ka-do de haraimasu.', vn: 'Tôi thanh toán bằng thẻ.',
          furigana: [{ kanji: '払', reading: 'はら', meaning: 'PHẤT' }]
        },
        {
          jp: '銀行のカードがありますか。', romaji: 'Ginkou no ka-do ga arimasu ka.', vn: 'Bạn có thẻ ngân hàng không?',
          furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNG' }]
        },
        {
          jp: 'このカードを使ってください。', romaji: 'Kono ka-do wo tsukatte kudasai.', vn: 'Hãy sử dụng thẻ này.',
          furigana: [{ kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        },
        {
          jp: 'テレホンカードを見せました。', romaji: 'Terehon ka-do wo misemashita.', vn: 'Tôi đã cho xem thẻ điện thoại.',
          furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'ポイントカードを作ります。', romaji: 'Pointo ka-do wo tsukurimasu.', vn: 'Tôi làm thẻ tích điểm.',
          furigana: [{ kanji: '作', reading: 'つく', meaning: 'TÁC' }]
        },
        {
          jp: 'カードをなくさないでください。', romaji: 'Ka-do wo nakusanaide kudasai.', vn: 'Đừng để mất thẻ nhé.',
          furigana: []
        }
      ]
    },
    {
      word: 'えんぴつ', kanji: '鉛筆', romaji: 'enpitsu', mean: 'bút chì',
      kanjiDetails: [
        {
          kanji: '鉛', onyomi: 'エン (en)', kunyomi: 'なまり (namari)', meaning: 'Chì', sinoVietnamese: 'DUYÊN', strokes: 13, jlpt: 'N1', radicals: '金 (kim)', components: [{ char: '金', meaning: 'kim loại' }, { char: '㕣', meaning: 'đầm nước' }], mnemonic: 'Kim loại (金) dùng ở đầm nước (㕣) là chì (鉛).'
        },
        {
          kanji: '筆', onyomi: 'ヒツ (hitsu)', kunyomi: 'ふで (fude)', meaning: 'Bút', sinoVietnamese: 'BÚT', strokes: 12, jlpt: 'N3', radicals: '竹 (trúc)', components: [{ char: '竹', meaning: 'tre/trúc' }, { char: '聿', meaning: 'cây bút/tay cầm bút' }], mnemonic: 'Cây bút (聿) làm từ tre (竹) gọi là Bút (筆).'
        }
      ],
      examples: [
        {
          jp: 'この鉛筆は誰のですか。', romaji: 'Kono enpitsu wa dare no desu ka.', vn: 'Cái bút chì này là của ai?',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: '鉛筆で名前を書きます。', romaji: 'Enpitsu de namae wo kakimasu.', vn: 'Tôi viết tên bằng bút chì.',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: '鉛筆を削ります。', romaji: 'Enpitsu wo kezurimasu.', vn: 'Tôi gọt bút chì.',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '削', reading: 'けず', meaning: 'TƯỚC' }]
        },
        {
          jp: '一本の鉛筆があります。', romaji: 'Ippon no enpitsu ga arimasu.', vn: 'Có một chiếc bút chì.',
          furigana: [{ kanji: '一', reading: 'いっ', meaning: 'NHẤT' }, { kanji: '本', reading: 'ぽん', meaning: 'BẢN' }, { kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }]
        },
        {
          jp: '鉛筆が短くなりました。', romaji: 'Enpitsu ga mijikaku narimashita.', vn: 'Bút chì đã trở nên ngắn.',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '短', reading: 'みじか', meaning: 'ĐOẢN' }]
        },
        {
          jp: '鉛筆を貸してください。', romaji: 'Enpitsu wo kashite kudasai.', vn: 'Cho tôi mượn bút chì với.',
          furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        }
      ]
    },
    {
      word: 'ボールペン', kanji: '', romaji: 'bo-rupen', mean: 'bút bi',
      examples: [
        {
          jp: 'ボールペンでサインします。', romaji: 'Bo-rupen de sain shimasu.', vn: 'Tôi ký tên bằng bút bi.',
          furigana: []
        },
        {
          jp: '黒いボールペンを持っています。', romaji: 'Kuroi bo-rupen wo motte imasu.', vn: 'Tôi có một chiếc bút bi màu đen.',
          furigana: [{ kanji: '黒', reading: 'くろ', meaning: 'HẮC' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }]
        },
        {
          jp: 'ボールペンが書けません。', romaji: 'Bo-rupen ga kakemasen.', vn: 'Bút bi không viết được.',
          furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: '青いボールペンを買いました。', romaji: 'Aoi bo-rupen wo kaimashita.', vn: 'Tôi đã mua bút bi màu xanh.',
          furigana: [{ kanji: '青', reading: 'あお', meaning: 'THANH' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'このボールペンはとても安いです。', romaji: 'Kono bo-rupen wa totemo yasui desu.', vn: 'Cái bút bi này rất rẻ.',
          furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }]
        },
        {
          jp: 'ボールペンを一本ください。', romaji: 'Bo-rupen wo ippon kudasai.', vn: 'Cho tôi một chiếc bút bi.',
          furigana: [{ kanji: '一', reading: 'いっ', meaning: 'NHẤT' }, { kanji: '本', reading: 'ぽん', meaning: 'BẢN' }]
        }
      ]
    },
    {
      word: 'シャープペンシル', kanji: '', romaji: 'sha-pupenshiru', mean: 'bút chì kim',
      examples: [
        {
          jp: 'それはシャープペンシルですか。', romaji: 'Sore wa sha-pupenshiru desu ka.', vn: 'Đó có phải là bút chì kim không?',
          furigana: []
        },
        {
          jp: 'シャープペンシルの芯を入れます。', romaji: 'Sha-pupenshiru no shin wo iremasu.', vn: 'Tôi thay ngòi bút chì kim.',
          furigana: [{ kanji: '芯', reading: 'しん', meaning: 'TÂM' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }]
        },
        {
          jp: 'このシャープペンシルは書きやすいです。', romaji: 'Kono sha-pupenshiru wa kakiyasui desu.', vn: 'Chiếc bút chì kim này viết rất êm.',
          furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: 'シャープペンシルを借ります。', romaji: 'Sha-pupenshiru wo karimasu.', vn: 'Tôi mượn bút chì kim.',
          furigana: [{ kanji: '借', reading: 'か', meaning: 'TÁ' }]
        },
        {
          jp: '新しいシャープペンシルを見せました。', romaji: 'Atarashii sha-pupenshiru wo misemashita.', vn: 'Tôi đã cho xem chiếc bút chì kim mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: 'シャープペンシル de zu wo kakimasu.', romaji: 'Sha-pupenshiru de zu wo kakimasu.', vn: 'Tôi vẽ hình bằng bút chì kim.',
          furigana: [{ kanji: '図', reading: 'ず', meaning: 'ĐỒ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        }
      ]
    },
    {
      word: 'かぎ', kanji: '鍵', romaji: 'kagi', mean: 'chìa khóa',
      kanjiDetails: [
        {
          kanji: '鍵', onyomi: 'ケン (ken)', kunyomi: 'かぎ (kagi)', meaning: 'Chìa khóa', sinoVietnamese: 'KIỆN', strokes: 17, jlpt: 'N1', radicals: '金 (kim)', components: [{ char: '金', meaning: 'kim loại' }, { char: '建', meaning: 'xây dựng' }], mnemonic: 'Vật bằng kim loại (金) để khóa các công trình xây dựng (建) là chìa khóa (鍵).'
        }
      ],
      examples: [
        {
          jp: 'それは誰の鍵ですか。', romaji: 'Sore wa dare no kagi desu ka.', vn: 'Đó là chìa khóa của ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }]
        },
        {
          jp: '鞄に鍵があります。', romaji: 'Kaban ni kagi ga arimasu.', vn: 'Trong túi có chìa khóa.',
          furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }]
        },
        {
          jp: 'ドアの鍵を閉めます。', romaji: 'Doa no kagi wo shimemasu.', vn: 'Tôi khóa cửa.',
          furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '閉', reading: 'し', meaning: 'BẾ' }]
        },
        {
          jp: '鍵をポケットに入れました。', romaji: 'Kagi wo poketto ni iremashita.', vn: 'Tôi đã để chìa khóa vào túi áo.',
          furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }]
        },
        {
          jp: '車の鍵を探しています。', romaji: 'Kuruma no kagi wo sagashite imasu.', vn: 'Tôi đang tìm chìa khóa ô tô.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '探', reading: 'さが', meaning: 'THAM' }]
        },
        {
          jp: 'スペアの鍵を作りました。', romaji: 'Supea no kagi wo tsukurimashita.', vn: 'Tôi đã làm thêm chìa khóa dự phòng.',
          furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }]
        }
      ]
    },
    {
      word: 'とけい', kanji: '時計', romaji: 'tokei', mean: 'đồng hồ',
      kanjiDetails: [
        {
          kanji: '時', onyomi: 'ジ (ji)', kunyomi: 'とき (toki)', meaning: 'Thời gian, giờ', sinoVietnamese: 'THỜI', strokes: 10, jlpt: 'N5', radicals: '日 (nhật)', components: [{ char: '日', meaning: 'mặt trời' }, { char: '寺', meaning: 'chùa' }], mnemonic: 'Mặt trời (日) mọc trên mái chùa (寺) để báo hiệu thời (時) gian.'
        },
        {
          kanji: '計', onyomi: 'ケイ (kei)', kunyomi: 'はか.る (hakaru)', meaning: 'Kế hoạch, đo đạc', sinoVietnamese: 'KẾ', strokes: 9, jlpt: 'N4', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '十', meaning: 'số mười' }], mnemonic: 'Nói (言) mười (十) lời để lập kế (計) hoạch.'
        }
      ],
      examples: [
        {
          jp: 'あれは時計ですか。', romaji: 'Are wa tokei desu ka.', vn: 'Kia có phải là cái đồng hồ không?',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }]
        },
        {
          jp: 'この時計はスイスのです。', romaji: 'Kono tokei wa Suisu no desu.', vn: 'Cái đồng hồ này là của Thụy Sĩ.',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }]
        },
        {
          jp: '時計を見ます。', romaji: 'Tokei wo mimasu.', vn: 'Tôi nhìn đồng hồ.',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '新しい時計を買いたい。', romaji: 'Atarashii tokei wo kaitai.', vn: 'Tôi muốn mua một chiếc đồng hồ mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '時計の針が止まりました。', romaji: 'Tokei no hari ga tomarimashita.', vn: 'Kim đồng hồ đã dừng lại.',
          furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }, { kanji: '針', reading: 'はり', meaning: 'CHÂM' }, { kanji: '止', reading: 'と', meaning: 'CHỈ' }]
        },
        {
          jp: '目覚まし時計をセットしました。', romaji: 'Mezamashi tokei wo setto shimashita.', vn: 'Tôi đã đặt đồng hồ báo thức.',
          furigana: [{ kanji: '目覚', reading: 'めざ', meaning: 'MỤC GIÁC' }, { kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }]
        }
      ]
    },
    {
      word: 'かさ', kanji: '傘', romaji: 'kasa', mean: 'ô, dù',
      kanjiDetails: [
        {
          kanji: '傘', onyomi: 'サン (san)', kunyomi: 'かさ (kasa)', meaning: 'Ô, dù', sinoVietnamese: 'TẢN', strokes: 12, jlpt: 'N3', radicals: '人 (nhân)', mnemonic: 'Hình ảnh 4 người (人) đứng dưới một cái mái lớn che ô (傘).',
          examples: ['傘 (かさ) - Ô, dù', '雨傘 (あまがさ) - Ô đi mưa'],
          exampleSentences: [
            { jp: '傘を差します。', vn: 'Tôi che ô.', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '差', reading: 'さ', meaning: 'THÍCH' }] },
            { jp: '傘を忘れました。', vn: 'Tôi đã quên ô.', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '忘', reading: 'わす', meaning: 'VONG' }] },
            { jp: '折り畳み傘を持っていますか。', vn: 'Bạn có ô gấp không?', furigana: [{ kanji: '折', reading: 'お', meaning: 'CHIẾT' }, { kanji: '畳', reading: 'たたみ', meaning: 'ĐIỆP' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }] },
            { jp: '傘を借りてもいいですか。', vn: 'Tôi mượn ô có được không?', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '借', reading: 'か', meaning: 'TÁ' }] },
            { jp: '赤い傘を買いました。', vn: 'Tôi đã mua một chiếc ô màu đỏ.', furigana: [{ kanji: '赤', reading: 'あか', meaning: 'XÍCH' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは私の傘です。', romaji: 'Kore wa watashi no kasa desu.', vn: 'Đây là cái ô của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
        },
        {
          jp: '傘を差します。', romaji: 'Kasa wo sashimasu.', vn: 'Tôi che ô.',
          furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '差', reading: 'さ', meaning: 'SAI' }]
        },
        {
          jp: '赤い傘を買いました。', romaji: 'Akai kasa wo kaimashita.', vn: 'Tôi đã mua một chiếc ô màu đỏ.',
          furigana: [{ kanji: '赤', reading: 'あか', meaning: 'XÍCH' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '玄関に傘があります。', romaji: 'Genkan ni kasa ga arimasu.', vn: 'Có ô ở lối vào.',
          furigana: [{ kanji: '玄関', reading: 'げんかん', meaning: 'HUYỀN QUAN' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
        },
        {
          jp: '傘を忘れました。', romaji: 'Kasa wo wasuremashita.', vn: 'Tôi đã quên ô.',
          furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '忘', reading: 'わす', meaning: 'VONG' }]
        },
        {
          jp: '大きい傘を借りました。', romaji: 'Ookii kasa wo karimashita.', vn: 'Tôi đã mượn cái ô lớn.',
          furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐAỊ' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '借', reading: 'か', meaning: 'TÁ' }]
        }
      ]
    },
    {
      word: 'かばん', kanji: '鞄', romaji: 'kaban', mean: 'túi xách, cặp',
      kanjiDetails: [
        {
          kanji: '鞄', onyomi: 'ハク (haku)', kunyomi: 'かばん (kaban)', meaning: 'Túi xách, cặp', sinoVietnamese: 'BẠC', strokes: 14, jlpt: 'N3', radicals: '革 (cách)', components: [{ char: '革', meaning: 'da' }, { char: '包', meaning: 'bao bọc' }], mnemonic: 'Vật làm bằng da (革) dùng để bao bọc (包) đồ vật là cái túi (鞄).',
          examples: ['鞄 (かばん) - Túi xách, cặp', '革鞄 (かわかばん) - Cặp da'],
          exampleSentences: [
            { jp: '鞄に本を入れます。', vn: 'Tôi bỏ sách vào cặp.', furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }] },
            { jp: '重い鞄を持ちます。', vn: 'Tôi mang chiếc cặp nặng.', furigana: [{ kanji: '重', reading: 'おも', meaning: 'TRỌNG' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }] },
            { jp: 'その鞄は誰のですか。', vn: 'Cái cặp đó là của ai?', furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }] },
            { jp: '新しい鞄が欲しいです。', vn: 'Tôi muốn có một chiếc cặp mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '欲', reading: 'ほ', meaning: 'DỤC' }] },
            { jp: '鞄を開けてください。', vn: 'Hãy mở cặp ra.', furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'それは私の鞄です。', romaji: 'Sore wa watashi no kaban desu.', vn: 'Đó là cái túi của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }]
        },
        {
          jp: 'この鞄は重いです。', romaji: 'Kono kaban wa omoi desu.', vn: 'Cái túi này nặng.',
          furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '重', reading: 'おも', meaning: 'TRỌNG' }]
        },
        {
          jp: '新しい鞄が欲しいです。', romaji: 'Atarashii kaban ga hoshii desu.', vn: 'Tôi muốn có một cái túi mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '欲', reading: 'ほ', meaning: 'DỤC' }]
        },
        {
          jp: '鞄の中に本があります。', romaji: 'Kaban no naka ni hon ga arimasu.', vn: 'Trong túi có sách.',
          furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '中', reading: 'なか', meaning: 'TRUNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '黒い鞄を買いました。', romaji: 'Kuroi kaban wo kaimashita.', vn: 'Tôi đã mua túi màu đen.',
          furigana: [{ kanji: '黒', reading: 'くろ', meaning: 'HẮC' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '鞄をここに置いてください。', romaji: 'Kaban wo koko ni oite kudasai.', vn: 'Hãy đặt túi ở đây.',
          furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '置', reading: 'お', meaning: 'TRÍ' }]
        }
      ]
    },
    {
      word: 'テレビ', kanji: '', romaji: 'terebi', mean: 'tivi',
      examples: [
        {
          jp: '毎日テレビを見ます。', romaji: 'Mainichi terebi wo mimasu.', vn: 'Tôi xem tivi mỗi ngày.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }]
        },
        {
          jp: '新しいテレビを買いました。', romaji: 'Atarashii terebi wo kaimashita.', vn: 'Tôi đã mua một chiếc tivi mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'テレビのニュースを聞きます。', romaji: 'Terebi no nyu-su wo kikimasu.', vn: 'Tôi nghe tin tức trên tivi.',
          furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'テレビが壊れました。', romaji: 'Terebi ga kowaremashita.', vn: 'Tivi đã bị hỏng.',
          furigana: [{ kanji: '壊', reading: 'こわ', meaning: 'HOẠI' }]
        },
        {
          jp: '部屋にテレビはありますか。', romaji: 'Heya ni terebi wa arimasu ka.', vn: 'Trong phòng có tivi không?',
          furigana: [{ kanji: '部屋', reading: 'へや', meaning: 'BỘ ỐC' }]
        },
        {
          jp: '大きいテレビが欲しいです。', romaji: 'Ookii terebi ga hoshii desu.', vn: 'Tôi muốn một chiếc tivi lớn.',
          furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '欲', reading: 'ほ', meaning: 'DỤC' }]
        }
      ]
    },
    {
      word: 'ラジオ', kanji: '', romaji: 'rajio', mean: 'đài, radio',
      examples: [
        {
          jp: 'ラジオを聞きます。', romaji: 'Rajio wo kikimasu.', vn: 'Tôi nghe đài.',
          furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: '古いラジオがあります。', romaji: 'Furui rajio ga arimasu.', vn: 'Có một chiếc đài cũ.',
          furigana: [{ kanji: '古', reading: 'ふる', meaning: 'CỔ' }]
        },
        {
          jp: 'ラジオで日本語を勉強します。', romaji: 'Rajio de nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật qua đài.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '朝、ラジオをつけます。', romaji: 'Asa, rajio wo tsukemasu.', vn: 'Buổi sáng tôi bật đài.',
          furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }]
        },
        {
          jp: 'ラジオの音を大きくします。', romaji: 'Rajio no oto wo ookiku shimasu.', vn: 'Tôi vặn tiếng đài to lên.',
          furigana: [{ kanji: '音', reading: 'おと', meaning: 'ÂM' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: 'これは面白いラジオ番組です。', romaji: 'Kore wa omoshiroi rajio bangumi desu.', vn: 'Đây là một chương trình đài thú vị.',
          furigana: [{ kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }, { kanji: '番組', reading: 'ばんぐみ', meaning: 'PHIÊN TỔ' }]
        }
      ]
    },
    {
      word: 'カメラ', kanji: '', romaji: 'kamera', mean: 'máy ảnh',
      examples: [
        {
          jp: 'このカメラはいくらですか。', romaji: 'Kono kamera wa ikura desu ka.', vn: 'Cái máy ảnh này giá bao nhiêu?',
          furigana: []
        },
        {
          jp: '新しいカメラで写真を撮ります。', romaji: 'Atarashii kamera de shashin wo torimasu.', vn: 'Tôi chụp ảnh bằng máy ảnh mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }]
        },
        {
          jp: '日本製のカメラはいいです。', romaji: 'Nihonsei no kamera wa ii desu.', vn: 'Máy ảnh sản xuất tại Nhật Bản rất tốt.',
          furigana: [{ kanji: '日本製', reading: 'にほんせい', meaning: 'NHẬT BẢN CHẾ' }]
        },
        {
          jp: 'カメラを鞄に入れます。', romaji: 'Kamera wo kaban ni iremasu.', vn: 'Tôi để máy ảnh vào túi.',
          furigana: [{ kanji: '鞄', reading: 'kaban', meaning: 'BẠC' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }]
        },
        {
          jp: 'これは私のカメラです。', romaji: 'Kore wa watashi no kamera desu.', vn: 'Đây là máy ảnh của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        },
        {
          jp: 'カメラを貸してください。', romaji: 'Kamera wo kashite kudasai.', vn: 'Cho tôi mượn máy ảnh với.',
          furigana: [{ kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        }
      ]
    },
    {
      word: 'コンピューター', kanji: '', romaji: 'kompyu-ta-', mean: 'máy vi tính',
      examples: [
        {
          jp: 'コンピューターをよく使います。', romaji: 'Kompyu-ta- wo yoku tsukaimasu.', vn: 'Tôi thường xuyên sử dụng máy tính.',
          furigana: [{ kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        },
        {
          jp: 'これは新しいコンピューターです。', romaji: 'Kore wa atarashii kompyu-ta- desu.', vn: 'Đây là máy tính mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }]
        },
        {
          jp: '会社でコンピューターを使います。', romaji: 'Kaisha de kompyu-ta- wo tsukaimasu.', vn: 'Tôi sử dụng máy tính ở công ty.',
          furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        },
        {
          jp: 'コンピューターを勉強します。', romaji: 'Kompyu-ta- wo benkyou shimasu.', vn: 'Tôi học về máy tính.',
          furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'コンピューターが壊れました。', romaji: 'Kompyu-ta- ga kowaremashita.', vn: 'Máy tính đã bị hỏng.',
          furigana: [{ kanji: '壊', reading: 'こわ', meaning: 'HOẠI' }]
        },
        {
          jp: 'いいコンピューターが欲しいです。', romaji: 'Ii kompyu-ta- ga hoshii desu.', vn: 'Tôi muốn có một chiếc máy tính tốt.',
          furigana: [{ kanji: '欲', reading: 'ほ', meaning: 'DỤC' }]
        }
      ]
    },
    {
      word: 'くるま', kanji: '車', romaji: 'kuruma', mean: 'xe ô tô',
      examples: [
        {
          jp: 'あれは私の車です。', romaji: 'Are wa watashi no kuruma desu.', vn: 'Kia là xe ô tô của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }]
        },
        {
          jp: '赤い車を買いました。', romaji: 'Akai kuruma wo kaimashita.', vn: 'Tôi đã mua một chiếc xe màu đỏ.',
          furigana: [{ kanji: '赤', reading: 'あか', meaning: 'XÍCH' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '車で会社へ行きます。', romaji: 'Kuruma de kaisha he ikimasu.', vn: 'Tôi đi đến công ty bằng xe ô tô.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '日本の車はとても有名です。', romaji: 'Nihon no kuruma wa totemo yuumei desu.', vn: 'Xe ô tô của Nhật Bản rất nổi tiếng.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: '昨日車を洗いました。', romaji: 'Kinou kuruma wo araimashita.', vn: 'Hôm qua tôi đã rửa xe.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '洗', reading: 'あら', meaning: 'TẨY' }]
        },
        {
          jp: 'この車を運転します。', romaji: 'Kono kuruma wo unten shimasu.', vn: 'Tôi lái chiếc xe này.',
          furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '運転', reading: 'うんてん', meaning: 'VẬN CHUYỂN' }]
        }
      ]
    },
    {
      word: 'つくえ', kanji: '机', romaji: 'tsukue', mean: 'cái bàn',
      kanjiDetails: [
        {
          kanji: '机', onyomi: 'キ (ki)', kunyomi: 'つくえ (tsukue)', meaning: 'Cái bàn', sinoVietnamese: 'CƠ', strokes: 6, jlpt: 'N4', radicals: '木 (mộc)', components: [{ char: '木', meaning: 'cây/gỗ' }, { char: '几', meaning: 'ghế dựa/bàn trà' }], mnemonic: 'Vật làm bằng gỗ (木) có hình dáng như cái ghế dựa (几) là cái bàn (机).',
          examples: ['机 (つくえ) - Bàn', '勉強机 (べんきょうづくえ) - Bàn học'],
          exampleSentences: [
            { jp: '机の上に本があります。', vn: 'Có sách ở trên bàn.', furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '上', reading: 'うえ', meaning: 'THƯỢNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
            { jp: '机をきれいにします。', vn: 'Tôi dọn dẹp bàn sạch sẽ.', furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }] },
            { jp: '広い机で勉強します。', vn: 'Tôi học ở cái bàn rộng.', furigana: [{ kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }, { kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
            { jp: '机の引き出しを開けます。', vn: 'Tôi mở ngăn kéo bàn.', furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '引', reading: 'ひ', meaning: 'DẪN' }, { kanji: '出', reading: 'だ', meaning: 'XUẤT' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }] },
            { jp: '新しい机を買いました。', vn: 'Tôi đã mua một cái bàn mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', vn: 'Có cuốn sách ở trên bàn.',
          furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '上', reading: 'うえ', meaning: 'THƯỢNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '教室に机が二十あります。', romaji: 'Kyoushitsu ni tsukue ga nijuu arimasu.', vn: 'Trong lớp học có 20 cái bàn.',
          furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }, { kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '二十', reading: 'にじゅう', meaning: 'NHỊ THẬP' }]
        },
        {
          jp: '新しい机を買いました。', romaji: 'Atarashii tsukue wo kaimashita.', vn: 'Tôi đã mua một cái bàn mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '机の下に猫がいます。', romaji: 'Tsukue no shita ni neko ga imasu.', vn: 'Dưới gầm bàn có con mèo.',
          furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '下', reading: 'した', meaning: 'HẠ' }, { kanji: '猫', reading: 'ねこ', meaning: 'MIÊU' }]
        },
        {
          jp: '机を綺麗にしました。', romaji: 'Tsukue wo kirei ni shimashita.', vn: 'Tôi đã dọn dẹp sạch sẽ cái bàn.',
          furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '綺麗', reading: 'きれい', meaning: 'KÌ LỆ' }]
        },
        {
          jp: 'この机はとても大きいです。', romaji: 'Kono tsukue wa totemo ookii desu.', vn: 'Cái bàn này rất lớn.',
          furigana: [{ kanji: '机', reading: 'つくえ', meaning: 'CƠ' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        }
      ]
    },
    {
      word: 'いす', kanji: '椅子', romaji: 'isu', mean: 'cái ghế',
      kanjiDetails: [
        {
          kanji: '椅', onyomi: 'イ (i)', kunyomi: '', meaning: 'Cái ghế', sinoVietnamese: 'Y', strokes: 12, jlpt: 'N2', radicals: '木 (mộc)', components: [{ char: '木', meaning: 'gỗ' }, { char: '奇', meaning: 'lạ' }], mnemonic: 'Cái đồ dùng bằng gỗ (木) lạ (奇) lùng này chính là cái ghế (椅).',
          examples: ['椅子 (いす) - Ghế', '車椅子 (くるまいす) - Xe lăn'],
          exampleSentences: [
            { jp: '椅子に座ります。', vn: 'Tôi ngồi xuống ghế.', furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '座', reading: 'すわ', meaning: 'TỌA' }] },
            { jp: '椅子を並べます。', vn: 'Tôi xếp ghế.', furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '並', reading: 'なら', meaning: 'TỊNH' }] },
            { jp: 'この椅子は楽です。', vn: 'Cái ghế này thoải mái.', furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '楽', reading: 'らく', meaning: 'LẠC' }] },
            { jp: '椅子が壊れました。', vn: 'Cái ghế bị hỏng.', furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '壊', reading: 'こわ', meaning: 'HOẠI' }] },
            { jp: '椅子を運んでください。', vn: 'Hãy chuyển ghế đi.', furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '運', reading: 'はこ', meaning: 'VẬN' }] }
          ]
        },
        {
          kanji: '子', onyomi: 'シ (shi), ス (su)', kunyomi: 'こ (ko)', meaning: 'Con, đứa trẻ, hậu tố cho đồ vật', sinoVietnamese: 'TỬ', strokes: 3, jlpt: 'N5', radicals: '子 (tử)', mnemonic: 'Hình ảnh một đứa trẻ đang quấn tã.',
          examples: ['子供 (こども) - Trẻ em', '電子 (でんし) - Điện tử', '椅子 (いす) - Ghế'],
          exampleSentences: [
            { jp: '子供が遊んでいます。', vn: 'Trẻ em đang chơi.', furigana: [{ kanji: '子供', reading: 'こども', meaning: 'TỬ CUNG' }, { kanji: '遊', reading: 'あそ', meaning: 'DU' }] },
            { jp: '男の子がいます。', vn: 'Có một bé trai.', furigana: [{ kanji: '男', reading: 'おとこ', meaning: 'NAM' }, { kanji: '子', reading: 'こ', meaning: 'TỬ' }] },
            { jp: '女の子は可愛いです。', vn: 'Bé gái đáng yêu.', furigana: [{ kanji: '女', reading: 'おんな', meaning: 'NỮ' }, { kanji: '子', reading: 'こ', meaning: 'TỬ' }, { kanji: '可愛', reading: 'かわい', meaning: 'KHẢ ÁI' }] },
            { jp: '迷子になりました。', vn: 'Tôi bị lạc.', furigana: [{ kanji: '迷子', reading: 'まいご', meaning: 'MÊ TỬ' }] },
            { jp: '電子辞書を使います。', vn: 'Tôi dùng kim từ điển.', furigana: [{ kanji: '電子辞書', reading: 'でんしじしょ', meaning: 'ĐIỆN TỬ TỪ THƯ' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '椅子に座ってください。', romaji: 'Isu ni suwatte kudasai.', vn: 'Hãy ngồi xuống ghế.',
          furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '座', reading: 'すわ', meaning: 'TỌA' }]
        },
        {
          jp: 'その椅子は田中さんのです。', romaji: 'Sono isu wa Tanaka-san no desu.', vn: 'Cái ghế đó là của anh Tanaka.',
          furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: '教室 ni いす がたくさんあります。', romaji: 'Kyoushitsu ni isu ga takusan arimasu.', vn: 'Trong lớp học có nhiều ghế.',
          furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }, { kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }]
        },
        {
          jp: 'この椅子はとても柔らかい。', romaji: 'Kono isu wa totemo yawarakai.', vn: 'Cái ghế này rất mềm.',
          furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '柔', reading: 'やわ', meaning: 'NHU' }]
        },
        {
          jp: '椅子を持って来てください。', romaji: 'Isu wo motte kite kudasai.', vn: 'Hãy mang ghế đến đây.',
          furigana: [{ kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '壊れた椅子を直しました。', romaji: 'Kowareta isu wo naoshimashita.', vn: 'Tôi đã sửa cái ghế bị hỏng.',
          furigana: [{ kanji: '壊', reading: 'こわ', meaning: 'HOẠI' }, { kanji: '椅子', reading: 'いす', meaning: 'Y TỬ' }, { kanji: '直', reading: 'なお', meaning: 'TRỰC' }]
        }
      ]
    },
    {
      word: 'ちがいます', kanji: '違います', romaji: 'chigaimasu', mean: 'không phải, sai rồi',
      kanjiDetails: [
        {
          kanji: '違', onyomi: 'イ (i)', kunyomi: 'ちが.う (chigau)', meaning: 'Sai, khác', sinoVietnamese: 'VI', strokes: 13, jlpt: 'N4', radicals: '辵 (sước)', components: [{ char: '韋', meaning: 'da thú' }, { char: '辶', meaning: 'đường đi' }], mnemonic: 'Đi (辶) ngược với lẽ phải là Vi (違) phạm / Sai trái.',
          examples: ['違う (ちがう) - Khác, sai', '間違い (まちがい) - Sai lầm'],
          exampleSentences: [
            { jp: '答えが違います。', vn: 'Câu trả lời bị sai.', furigana: [{ kanji: '答', reading: 'こた', meaning: 'ĐÁP' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }] },
            { jp: 'サイズが違います。', vn: 'Kích cỡ khác nhau.', furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }] },
            { jp: '違います、私じゃありません。', vn: 'Không phải, không phải là tôi.', furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }] },
            { jp: '間違い電話です。', vn: 'Nhầm số điện thoại rồi.', furigana: [{ kanji: '間違', reading: 'まちが', meaning: 'GIAN VI' }, { kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] },
            { jp: '文化の違いがあります。', vn: 'Có sự khác biệt văn hóa.', furigana: [{ kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'いいえ、違います。', romaji: 'Iie, chigaimasu.', vn: 'Không, không phải vậy.',
          furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: 'それは違いますよ。', romaji: 'Sore wa chigaimasu yo.', vn: 'Cái đó sai rồi đấy.',
          furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: '答えが違います。', romaji: 'Kotae ga chigaimasu.', vn: 'Câu trả lời bị sai.',
          furigana: [{ kanji: '答', reading: 'こた', meaning: 'ĐÁP' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: '使い方が違います。', romaji: 'Tsukaikata ga chigaimasu.', vn: 'Cách sử dụng bị sai.',
          furigana: [{ kanji: '使', reading: 'つか', meaning: 'SỬ' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: '名前が違っています。', romaji: 'Namae ga chigatte imasu.', vn: 'Tên đang bị sai.',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: '昨日と少し違います。', romaji: 'Kinou to sukoshi chigaimasu.', vn: 'Hơi khác so với hôm qua.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '少', reading: 'すこ', meaning: 'THIỂU' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }]
        }
      ]
    },
    {
      word: 'あ、そうですか', kanji: '', romaji: 'a, sou desu ka', mean: 'ô thế à, vậy à (dùng khi nhận được thông tin mới)',
      examples: [
        {
          jp: '「これは私の本です。」「あ、そうですか。」', romaji: '"Kore wa watashi no hon desu." "A, sou desu ka."', vn: '"Đây là sách của tôi." "À, thế à."',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '「明日は休みです。」「あ、そうですか。いいですね。」', romaji: '"Ashita wa yasumi desu." "A, sou desu ka. Ii desu ne."', vn: '"Ngày mai nghỉ." "À, vậy hả. Tốt thế nhỉ."',
          furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }]
        },
        {
          jp: 'あ、そうですか。わかりました。', romaji: 'A, sou desu ka. Wakarimashita.', vn: 'À, thế à. Tôi hiểu rồi.',
          furigana: []
        },
        {
          jp: 'あ、そうですか。残念ですね。', romaji: 'A, sou desu ka. Zannen desu ne.', vn: 'À, vậy sao. Tiếc quá nhỉ.',
          furigana: [{ kanji: '残念', reading: 'ざんねん', meaning: 'TÀN NIỆM' }]
        },
        {
          jp: '「田中さんはもう帰りましたよ。」「あ、そうですか。」', romaji: '"Tanaka-san wa mou kaerimashita yo." "A, sou desu ka."', vn: '"Anh Tanaka về rồi đấy." "À, vậy hả."',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }]
        },
        {
          jp: 'あ、そうですか。知りませんでした。', romaji: 'A, sou desu ka. Shirimasen deshita.', vn: 'À, thế sao. Tôi không biết điều đó.',
          furigana: [{ kanji: '知', reading: 'し', meaning: 'TRI' }]
        }
      ]
    },
    {
      word: 'あのう', kanji: '', romaji: 'anou', mean: 'ờ, à (dùng khi ngập ngừng, muốn bắt đầu câu chuyện)',
      examples: [
        {
          jp: 'あのう、すみません。', romaji: 'Anou, sumimasen.', vn: 'À, xin lỗi cho hỏi...',
          furigana: []
        },
        {
          jp: 'あのう、お名前は何ですか。', romaji: 'Anou, onamae wa nan desu ka.', vn: 'À, cho tôi hỏi tên bạn là gì?',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'あのう、これを貸してください。', romaji: 'Anou, kore wo kashite kudasai.', vn: 'À, cho tôi mượn cái này với.',
          furigana: [{ kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        },
        {
          jp: 'あのう、少し時間がありますか。', romaji: 'Anou, sukoshi jikan ga arimasu ka.', vn: 'À, bạn có chút thời gian không?',
          furigana: [{ kanji: '少', reading: 'すこ', meaning: 'THIỂU' }, { kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }]
        },
        {
          jp: 'あのう、トイレはどこですか。', romaji: 'Anou, toire wa doko desu ka.', vn: 'À, nhà vệ sinh ở đâu nhỉ?',
          furigana: []
        },
        {
          jp: 'あのう、田中さんの電話番号を知っていますか。', romaji: 'Anou, Tanaka-san no denwa bangou wo shitte imasu ka.', vn: 'À, bạn có biết số điện thoại của anh Tanaka không?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '電話番号', reading: 'でんわばんごう', meaning: 'ĐIỆN THOẠI PHIÊN HIỆU' }, { kanji: '知', reading: 'し', meaning: 'TRI' }]
        }
      ]
    },
    {
      word: 'ほんのきもちです', kanji: 'ほんの気持ちです', romaji: 'honno kimochi desu', mean: 'chút lòng thành thôi (dùng khi tặng quà)',
      kanjiDetails: [
        {
          kanji: '気', onyomi: 'キ (ki), ケ (ke)', kunyomi: 'いき (iki)', meaning: 'Khí, tinh thần, cảm giác', sinoVietnamese: 'KHÍ', strokes: 6, jlpt: 'N5', radicals: '气 (khí)', components: [{ char: '气', meaning: 'hơi nước' }, { char: 'メ', meaning: 'mầm hạt' }], mnemonic: 'Hơi nước (气) bốc lên từ hạt gạo (mầm メ) tạo nên sinh khí (気).',
          examples: ['気 (き) - Khí, tinh thần', '天気 (てんき) - Thời tiết'],
          exampleSentences: [
            { jp: 'お元気ですか。', vn: 'Bạn khỏe không?', furigana: [{ kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] },
            { jp: '天気がいいですね。', vn: 'Thời tiết tốt nhỉ.', furigana: [{ kanji: '天気', reading: 'てんき', meaning: 'THIÊN KHÍ' }] },
            { jp: '気をつけてください。', vn: 'Hãy cẩn thận.', furigana: [{ kanji: '気', reading: 'き', meaning: 'KHÍ' }] },
            { jp: '気に入りましたか。', vn: 'Bạn có thích không?', furigana: [{ kanji: '気', reading: 'き', meaning: 'KHÍ' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }] },
            { jp: '何か気になりますか。', vn: 'Bạn có bận tâm điều gì không?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '気', reading: 'き', meaning: 'KHÍ' }] }
          ]
        },
        {
          kanji: '持', onyomi: 'ジ (ji)', kunyomi: 'も.つ (motsu)', meaning: 'Cầm, nắm, duy trì', sinoVietnamese: 'TRÌ', strokes: 9, jlpt: 'N4', radicals: '手 (thủ)', components: [{ char: '扌', meaning: 'tay' }, { char: '寺', meaning: 'chùa' }], mnemonic: 'Dùng tay (扌) bảo vệ ngôi chùa (寺) là sự duy trì (持).',
          examples: ['持つ (もつ) - Cầm, nắm', '気持ち (きもち) - Cảm giác, tâm trạng'],
          exampleSentences: [
            { jp: '荷物を持ちましょうか。', vn: 'Để tôi mang hành lý giúp nhé?', furigana: [{ kanji: '荷物', reading: 'にもつ', meaning: 'HÀ VẬT' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }] },
            { jp: 'お金を持っていません。', vn: 'Tôi không mang theo tiền.', furigana: [{ kanji: '金', reading: 'かね', meaning: 'KIM' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }] },
            { jp: '自分の意見を持つことは大切です。', vn: 'Có ý kiến riêng là quan trọng.', furigana: [{ kanji: '自分', reading: 'じぶん', meaning: 'TỰ PHÂN' }, { kanji: '意見', reading: 'いけん', meaning: 'Ý KIẾN' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }, { kanji: '大切', reading: 'たいせつ', meaning: 'ĐẠI THIẾT' }] },
            { jp: '気持ちがいい朝です。', vn: 'Một buổi sáng dễ chịu.', furigana: [{ kanji: '気持', reading: 'きも', meaning: 'KHÍ TRÌ' }, { kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }] },
            { jp: 'これを持って行ってください。', vn: 'Hãy mang cái này đi.', furigana: [{ kanji: '持', reading: 'も', meaning: 'TRÌ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これ、ほんの気持ちです。どうぞ。', romaji: 'Kore, honno kimochi desu. Douzo.', vn: 'Cái này là chút lòng thành thôi. Xin mời nhận.',
          furigana: [{ kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }]
        },
        {
          jp: 'ほんの気持ちですが、受け取ってください。', romaji: 'Honno kimochi desu ga, uketotte kudasai.', vn: 'Chút lòng thành thôi, xin hãy nhận cho.',
          furigana: [{ kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }, { kanji: '受', reading: 'う', meaning: 'THỤ' }, { kanji: '取', reading: 'と', meaning: 'THỦ' }]
        },
        {
          jp: 'つまらないものですが、ほんの気持ちです。', romaji: 'Tsumaranai mono desu ga, honno kimochi desu.', vn: 'Chẳng có gì giá trị cả, chỉ là chút lòng thành thôi.',
          furigana: [{ kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }]
        },
        {
          jp: 'お礼に、ほんの気持ちです。', romaji: 'Orei ni, honno kimochi desu.', vn: 'Làm quà cảm ơn, đây là chút lòng thành.',
          furigana: [{ kanji: '礼', reading: 'れい', meaning: 'LỄ' }, { kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }]
        },
        {
          jp: '「ほんの気持ちです。」「ありがとうございます。」', romaji: '"Honno kimochi desu." "Arigatou gozaimasu."', vn: '"Đây là chút lòng thành thôi." "Cám ơn bạn rất nhiều."',
          furigana: [{ kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }]
        },
        {
          jp: '皆さん、ほんの気持ちです。使ってください。', romaji: 'Minasan, honno kimochi desu. Tsukatte kudasai.', vn: 'Mọi người ơi, đây là chút lòng thành. Hãy dùng đi ạ.',
          furigana: [{ kanji: '皆', reading: 'みな', meaning: 'GIAI' }, { kanji: '人', reading: 'さん', meaning: 'NHÂN' }, { kanji: '気持ち', reading: 'きもち', meaning: 'KHÍ TRÌ' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        }
      ]
    },
    {
      word: 'どうぞ', kanji: '', romaji: 'douzo', mean: 'xin mời',
      examples: [
        {
          jp: 'どうぞ、座ってください。', romaji: 'Douzo, suwatte kudasai.', vn: 'Xin mời ngồi.',
          furigana: [{ kanji: '座', reading: 'すわ', meaning: 'TỌA' }]
        },
        {
          jp: 'コーヒーをどうぞ。', romaji: 'Ko-hi- wo douzo.', vn: 'Mời bạn dùng cà phê.',
          furigana: []
        },
        {
          jp: 'お土産をどうぞ。', romaji: 'Omiyage wo douzo.', vn: 'Mời bạn nhận quà đặc sản.',
          furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }]
        },
        {
          jp: 'どうぞ、中に入ってください。', romaji: 'Douzo, naka ni haitte kudasai.', vn: 'Mời bạn vào trong.',
          furigana: [{ kanji: '中', reading: 'なか', meaning: 'TRUNG' }, { kanji: '入', reading: 'はい', meaning: 'NHẬP' }]
        },
        {
          jp: 'こちらの席へどうぞ。', romaji: 'Kochira no seki he douzo.', vn: 'Mời bạn đi hướng ghế này.',
          furigana: [{ kanji: '席', reading: 'せき', meaning: 'TỊCH' }]
        },
        {
          jp: 'どうぞ、ごゆっくり。', romaji: 'Douzo, goyukkuri.', vn: 'Mời bạn cứ thong thả.',
          furigana: []
        }
      ]
    },
    {
      word: 'どうも', kanji: '', romaji: 'doumo', mean: 'cám ơn, chào (rất ngắn gọn)',
      examples: [
        {
          jp: 'どうも、ありがとうございます。', romaji: 'Doumo, arigatou gozaimasu.', vn: 'Cám ơn bạn rất nhiều.',
          furigana: []
        },
        {
          jp: 'どうも、すみません。', romaji: 'Doumo, sumimasen.', vn: 'Thật xin lỗi.',
          furigana: []
        },
        {
          jp: '先生、どうも。', romaji: 'Sensei, doumo.', vn: 'Chào thầy ạ / Cám ơn thầy ạ.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'どうも、こんにちは。', romaji: 'Doumo, konnichiwa.', vn: 'Chào bạn nhé.',
          furigana: []
        },
        {
          jp: '昨日はどうも。', romaji: 'Kinou wa doumo.', vn: 'Hôm qua thật sự cảm ơn / xin lỗi bạn.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }]
        },
        {
          jp: 'どうも失礼しました。', romaji: 'Doumo shitsurei shimashita.', vn: 'Thật sự làm phiền bạn quá.',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        }
      ]
    },
    {
      word: 'これからおせわになります', kanji: 'これからお世話になります', romaji: 'korekara osewa ni narimasu', mean: 'từ nay tôi rất mong được sự giúp đỡ của anh/chị',
      kanjiDetails: [
        {
          kanji: '世', onyomi: 'セイ (sei), セ (se)', kunyomi: 'よ (yo)', meaning: 'Thế giới, đời người', sinoVietnamese: 'THẾ', strokes: 5, jlpt: 'N4', radicals: '一 (nhất)', components: [{ char: '廿', meaning: 'hai mươi' }, { char: '止', meaning: 'dừng' }], mnemonic: 'Ba mươi năm (卅) là một thế (世) hệ.'
        },
        {
          kanji: '話', onyomi: 'ワ (wa)', kunyomi: 'はな.す (hanasu), はなし (hanashi)', meaning: 'Nói chuyện, câu chuyện', sinoVietnamese: 'THOẠI', strokes: 13, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '舌', meaning: 'cái lưỡi' }], mnemonic: 'Dùng lưỡi (舌) để phát ra lời nói (言) là Thoại (話).'
        }
      ],
      examples: [
        {
          jp: 'これからお世話になります。よろしくお願いします。', romaji: 'Korekara osewa ni narimasu. Yoroshiku onegaishimasu.', vn: 'Từ nay tôi rất mong được sự giúp đỡ của bạn. Rất mong được giúp đỡ.',
          furigana: [{ kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '田中さん、これからお世話になります。', romaji: 'Tanaka-san, korekara osewa ni narimasu.', vn: 'Anh Tanaka, từ nay mong được anh giúp đỡ nhiều ạ.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }]
        },
        {
          jp: '「これからお世話になります。」「こちらこそよろしく。」', romaji: '"Korekara osewa ni narimasu." "Kochira koso yoroshiku."', vn: '"Từ nay mong bạn giúp đỡ." "Chính tôi cũng mong được giúp đỡ."',
          furigana: [{ kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }]
        },
        {
          jp: '新しい会社で、これからお世話になります。', romaji: 'Atarashii kaisha de, korekara osewa ni narimasu.', vn: 'Tại công ty mới, từ nay mong mọi người giúp đỡ.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }]
        },
        {
          jp: '皆さん、これからお世話になります。頑張ります。', romaji: 'Minasan, korekara osewa ni narimasu. Ganbarimasu.', vn: 'Mọi người ơi, từ nay mong được giúp đỡ. Tôi sẽ cố gắng.',
          furigana: [{ kanji: '皆', reading: 'みな', meaning: 'GIAI' }, { kanji: '人', reading: 'さん', meaning: 'NHÂN' }, { kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }, { kanji: '頑張', reading: 'がんば', meaning: 'NGOAN TRƯƠNG' }]
        },
        {
          jp: '隣に越してきました。これからお世話になります。', romaji: 'Tonari ni koshite kimashita. Korekara osewa ni narimasu.', vn: 'Tôi vừa mới chuyển đến bên cạnh. Từ nay mong được giúp đỡ.',
          furigana: [{ kanji: '隣', reading: 'となり', meaning: 'LÂN' }, { kanji: '越', reading: 'こ', meaning: 'VIỆT' }, { kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }]
        }
      ]
    },
    {
      word: 'こちらこそよろしく', kanji: '', romaji: 'kochira koso yoroshiku', mean: 'chính tôi cũng mong được sự giúp đỡ/được làm quen với anh/chị',
      examples: [
        {
          jp: 'こちらこそよろしくお願いします。', romaji: 'Kochira koso yoroshiku onegaishimasu.', vn: 'Chính tôi cũng rất mong được sự giúp đỡ của bạn.',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '「よろしくお願いします。」「こちらこそ。」', romaji: '"Yoroshiku onegaishimasu." "Kochira koso."', vn: '"Rất mong được giúp đỡ." "Chính tôi mới là người cần giúp đỡ."',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: 'こちらこそ、お会いできて光栄です。', romaji: 'Kochira koso, oaidekite kouei desu.', vn: 'Chính tôi mới là người vinh hạnh được gặp bạn.',
          furigana: [{ kanji: '会', reading: 'あ', meaning: 'HỘI' }, { kanji: '光栄', reading: 'こうえい', meaning: 'QUANG VINH' }]
        },
        {
          jp: 'こちらこそ、いろいろありがとうございました。', romaji: 'Kochira koso, iroiro arigatou gozaimasu.', vn: 'Chính tôi mới là người phải cảm ơn vì nhiều thứ.',
          furigana: []
        },
        {
          jp: 'こちらこそ、楽しかったです。', romaji: 'Kochira koso, tanoshikatta desu.', vn: 'Chính tôi cũng đã thấy rất vui.',
          furigana: [{ kanji: '楽', reading: 'たの', meaning: 'LẠC' }]
        },
        {
          jp: 'こちらこそ、また遊びに来てください。', romaji: 'Kochira koso, mata asobi ni kite kudasai.', vn: 'Chính tôi cũng mong bạn lại đến chơi nhé.',
          furigana: [{ kanji: '遊', reading: 'あそ', meaning: 'DU' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        }
      ]
    }
    ,
    {
      word: 'チョコレート', kanji: '', romaji: 'chokore-to', mean: 'sô cô la',
      examples: [
        {
          jp: 'そのチョコレートはおいしいですよ。', romaji: 'Sono chokore-to wa oishii desu yo.', vn: 'Sô cô la đó ngon lắm đấy.',
          furigana: []
        },
        {
          jp: '甘いチョコレートが好きです。', romaji: 'Amai chokore-to ga suki desu.', vn: 'Tôi thích sô cô la ngọt.',
          furigana: [{ kanji: '甘', reading: 'あま', meaning: 'CAM' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: 'チョコレートをお土産に買いました。', romaji: 'Chokore-to wo omiyage ni kaimashita.', vn: 'Tôi đã mua sô cô la làm quà.',
          furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '毎日チョコレートを食べます。', romaji: 'Mainichi chokore-to wo tabemasu.', vn: 'Tôi ăn sô cô la mỗi ngày.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: 'チョコレートを一つください。', romaji: 'Chokore-to wo hitotsu kudasai.', vn: 'Cho tôi một miếng sô cô la.',
          furigana: [{ kanji: '一', reading: 'ひと', meaning: 'NHẤT' }]
        },
        {
          jp: '友達にチョコレートをあげました。', romaji: 'Tomodachi ni chokore-to wo agemashita.', vn: 'Tôi đã tặng sô cô la cho bạn.',
          furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        }
      ]
    },
    {
      word: 'コーヒー', kanji: '', romaji: 'ko-hi-', mean: 'cà phê',
      examples: [
        {
          jp: 'あの店でおいしいコーヒーを飲みました。', romaji: 'Ano mise de oishii ko-hi- wo nomimashita.', vn: 'Tôi đã uống cà phê ngon ở cửa hàng kia.',
          furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }]
        },
        {
          jp: '毎朝コーヒーを飲みます。', romaji: 'Maiasa ko-hi- wo nomimasu.', vn: 'Mỗi sáng tôi đều uống cà phê.',
          furigana: [{ kanji: '毎朝', reading: 'まいあさ', meaning: 'MỖI TRIỀU' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }]
        },
        {
          jp: '砂糖を入れないでコーヒーを飲みます。', romaji: 'Satou wo irenaide ko-hi- wo nomimasu.', vn: 'Tôi uống cà phê không cho đường.',
          furigana: [{ kanji: '砂糖', reading: 'さとう', meaning: 'SA ĐƯỜNG' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }]
        },
        {
          jp: 'コーヒーをもう一杯いかがですか。', romaji: 'Ko-hi- wo mou ippai ikaga desu ka.', vn: 'Bạn dùng thêm một tách cà phê nữa nhé?',
          furigana: [{ kanji: '一杯', reading: 'いっぱい', meaning: 'NHẤT BÔI' }]
        },
        {
          jp: '冷たいコーヒーが好きです。', romaji: 'Tsumetai ko-hi- ga suki desu.', vn: 'Tôi thích cà phê lạnh.',
          furigana: [{ kanji: '冷', reading: 'つめ', meaning: 'LÃNH' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: 'コーヒーの匂いがいいですね。', romaji: 'Ko-hi- no nioi ga ii desu ne.', vn: 'Mùi cà phê thơm quá nhỉ.',
          furigana: [{ kanji: '匂', reading: 'にお', meaning: 'MÙI' }]
        }
      ]
    },
    {
      word: 'おみやげ', kanji: 'お土産', romaji: 'omiyage', mean: 'quà tặng (quà đặc sản)',
      kanjiDetails: [
        {
          kanji: '土', onyomi: 'ド (do), ト (to)', kunyomi: 'つち (tsuchi)', meaning: 'Đất', sinoVietnamese: 'THỔ', strokes: 3, jlpt: 'N5', radicals: '土 (thổ)', mnemonic: 'Hình ảnh mầm cây mọc lên từ mặt đất.',
          examples: ['土 (つち) - Đất', '土曜日 (どようび) - Thứ bảy'],
          exampleSentences: [
            { jp: '土に種をまきます。', vn: 'Gieo hạt xuống đất.', furigana: [{ kanji: '土', reading: 'つち', meaning: 'THỔ' }, { kanji: '種', reading: 'たね', meaning: 'CHỦNG' }] },
            { jp: '土曜日は休みです。', vn: 'Thứ bảy nghỉ.', furigana: [{ kanji: '土曜日', reading: 'どようび', meaning: 'THỔ DIỆU NHẬT' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }] },
            { jp: 'お土産を買いました。', vn: 'Tôi đã mua quà đặc sản.', furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
            { jp: '土地を買いたいです。', vn: 'Tôi muốn mua đất.', furigana: [{ kanji: '土地', reading: 'とち', meaning: 'THỔ ĐỊA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
            { jp: '日本の国土は狭いです。', vn: 'Lãnh thổ Nhật Bản hẹp.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '国土', reading: 'こくど', meaning: 'QUỐC THỔ' }, { kanji: '狭', reading: 'せま', meaning: 'HIỆP' }] }
          ]
        },
        {
          kanji: '産', onyomi: 'サン (san)', kunyomi: 'う.む (umu)', meaning: 'Sản sinh, sản vật', sinoVietnamese: 'SẢN', strokes: 11, jlpt: 'N4', radicals: '生 (sinh)', components: [{ char: '文', meaning: 'văn chương' }, { char: '厂', meaning: 'sườn núi' }, { char: '生', meaning: 'sinh ra' }], mnemonic: 'Sản vật (産) được sinh (生) ra ở vùng đất này.',
          examples: ['お土産 (おみやげ) - Quà đặc sản', '生産 (せいさん) - Sản xuất'],
          exampleSentences: [
            { jp: '日本産のお米です。', vn: 'Đây là gạo sản xuất tại Nhật.', furigana: [{ kanji: '日本産', reading: 'にほんさん', meaning: 'NHẬT BẢN SẢN' }, { kanji: '米', reading: 'こめ', meaning: 'MỄ' }] },
            { jp: '工場で車を生産します。', vn: 'Sản xuất ô tô tại nhà máy.', furigana: [{ kanji: '工場', reading: 'こうじょう', meaning: 'CÔNG TRƯỜNG' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '生産', reading: 'せいさん', meaning: 'SINH SẢN' }] },
            { jp: '産業が発達しています。', vn: 'Công nghiệp đang phát triển.', furigana: [{ kanji: '産業', reading: 'さんぎょう', meaning: 'SẢN NGHIỆP' }, { kanji: '発達', reading: 'はったつ', meaning: 'PHÁT ĐẠT' }] },
            { jp: '財産を守ります。', vn: 'Bảo vệ tài sản.', furigana: [{ kanji: '財産', reading: 'ざいさん', meaning: 'TÀI SẢN' }, { kanji: '守', reading: 'まも', meaning: 'THỦ' }] },
            { jp: '赤ちゃんが産まれました。', vn: 'Em bé đã chào đời.', furigana: [{ kanji: '赤', reading: 'あか', meaning: 'XÍCH' }, { kanji: '産', reading: 'う', meaning: 'SẢN' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これ、お土産です。', romaji: 'Kore, omiyage desu.', vn: 'Đây là quà tặng.',
          furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }]
        },
        {
          jp: '日本のお土産を買いました。', romaji: 'Nihon no omiyage wo kaimashita.', vn: 'Tôi đã mua quà đặc sản Nhật Bản.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '家族のためにお土産を選びます。', romaji: 'Kazoku no tame ni omiyage wo erabimasu.', vn: 'Tôi chọn quà cho gia đình.',
          furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '選', reading: 'えら', meaning: 'TUYỂN' }]
        },
        {
          jp: '有名なお土産をいただきました。', romaji: 'Yuumei na omiyage wo itadakimashita.', vn: 'Tôi đã nhận được món quà đặc sản nổi tiếng.',
          furigana: [{ kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }, { kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }]
        },
        {
          jp: 'お土産は何がいいですか。', romaji: 'Omiyage wa nan ga ii desu ka.', vn: 'Quà tặng thì cái gì tốt nhỉ?',
          furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: '旅のお土産を渡しました。', romaji: 'Tabi no omiyage wo watashimashita.', vn: 'Tôi đã trao món quà của chuyến du lịch.',
          furigana: [{ kanji: '旅', reading: 'たび', meaning: 'LỮ' }, { kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '渡', reading: 'わた', meaning: 'ĐỘ' }]
        }
      ]
    },
    {
      word: 'えいご', kanji: '英語', romaji: 'eigo', mean: 'tiếng Anh',
      kanjiDetails: [
        {
          kanji: '英', onyomi: 'エイ (ei)', kunyomi: 'はなぶさ (hanabusa)', meaning: 'Anh hùng, tài giỏi, hoa', sinoVietnamese: 'ANH', strokes: 8, jlpt: 'N4', radicals: '艸 (thảo)', components: [{ char: '艹', meaning: 'cỏ' }, { char: '央', meaning: 'trung tâm' }], mnemonic: 'Giữa đám cỏ (艹) mọc lên một bông hoa rạng rỡ ở trung tâm (央) là Anh (英) hùng.',
          examples: ['英語 (えいご) - Tiếng Anh', '英国 (えいこく) - Nước Anh'],
          exampleSentences: [
            { jp: '英語を話せますか。', vn: 'Bạn có thể nói tiếng Anh không?', furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }] },
            { jp: '英国へ行きたいです。', vn: 'Tôi muốn đi đến nước Anh.', furigana: [{ kanji: '英国', reading: 'えいこく', meaning: 'ANH QUỐC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '英雄になりたい。', vn: 'Tôi muốn trở thành anh hùng.', furigana: [{ kanji: '英雄', reading: 'えいゆう', meaning: 'ANH HÙNG' }] },
            { jp: '英語の歌を歌います。', vn: 'Tôi hát bài hát tiếng Anh.', furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }, { kanji: '歌', reading: 'うた', meaning: 'CA' }] },
            { jp: '英知を集めます。', vn: 'Tập hợp trí tuệ.', furigana: [{ kanji: '英知', reading: 'えいち', meaning: 'ANH TRI' }, { kanji: '集', reading: 'あつ', meaning: 'TẬP' }] }
          ]
        },
        {
          kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngôn ngữ, kể chuyện', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số năm' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Năm (五) cái miệng (口) cùng phát ra lời nói (言) tạo thành ngôn ngữ (語).',
          examples: ['日本語 (にほんご) - Tiếng Nhật', '言語 (げんご) - Ngôn ngữ'],
          exampleSentences: [
            { jp: '何語を勉強していますか。', vn: 'Bạn đang học tiếng gì?', furigana: [{ kanji: '何語', reading: 'なにご', meaning: 'HÀ NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
            { jp: '外国語学部に入ります。', vn: 'Tôi vào khoa ngoại ngữ.', furigana: [{ kanji: '外国語学部', reading: 'がいこくごがくぶ', meaning: 'NGOẠI QUỐC NGỮ HỌC BỘ' }, { kanji: '入', reading: 'はい', meaning: 'NHẬP' }] },
            { jp: '物語を読みます。', vn: 'Tôi đọc truyện.', furigana: [{ kanji: '物語', reading: 'ものがたり', meaning: 'VẬT NGỮ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '語学学校に通います。', vn: 'Tôi đi học trường ngôn ngữ.', furigana: [{ kanji: '語学学校', reading: 'ごがくがっこう', meaning: 'NGỮ HỌC HỌC HIỆU' }, { kanji: '通', reading: 'かよ', meaning: 'THÔNG' }] },
            { jp: '語彙を増やします。', vn: 'Tôi tăng vốn từ vựng.', furigana: [{ kanji: '語彙', reading: 'ごい', meaning: 'NGỮ VỊ' }, { kanji: '増', reading: 'ふ', meaning: 'TĂNG' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '英語の辞書を買います。', romaji: 'Eigo no jisho wo kaimasu.', vn: 'Tôi mua từ điển tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: '毎日英語を勉強します。', romaji: 'Mainichi eigo wo benkyou shimasu.', vn: 'Tôi học tiếng Anh mỗi ngày.',
          furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '彼女は英語が上手です。', romaji: 'Kanojo wa eigo ga jouzu desu.', vn: 'Cô ấy giỏi tiếng Anh.',
          furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }]
        },
        {
          jp: '英語の本を読みます。', romaji: 'Eigo no hon wo yomimasu.', vn: 'Tôi đọc sách tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }]
        },
        {
          jp: '英語で手紙を書きました。', romaji: 'Eigo de tegami wo kakimashita.', vn: 'Tôi đã viết thư bằng tiếng Anh.',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }]
        },
        {
          jp: '英語がわかりますか。', romaji: 'Eigo ga wakarimasu ka.', vn: 'Bạn có hiểu tiếng Anh không?',
          furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }]
        }
      ]
    },
    {
      word: 'にほんご', kanji: '日本語', romaji: 'nihongo', mean: 'tiếng Nhật',
      kanjiDetails: [
        {
          kanji: '日', onyomi: 'ニチ (nichi), ジツ (jitsu)', kunyomi: 'ひ (hi), か (ka)', meaning: 'Mặt trời, ngày', sinoVietnamese: 'NHẬT', strokes: 4, jlpt: 'N5', radicals: '日 (nhật)', mnemonic: 'Hình ảnh mặt trời hình tròn với một vạch ở giữa.',
          examples: ['日本 (にほん) - Nhật Bản', '毎日 (まいにち) - Mỗi ngày'],
          exampleSentences: [
            { jp: '今日はお日柄もよく。', vn: 'Hôm nay ngày lành tháng tốt.', furigana: [{ kanji: '今日', reading: 'きょう', meaning: 'KIM NHẬT' }, { kanji: '日柄', reading: 'ひがら', meaning: 'NHẬT BÍNH' }] },
            { jp: '今日は何日ですか。', vn: 'Hôm nay là ngày mấy?', furigana: [{ kanji: '今日', reading: 'きょう', meaning: 'KIM NHẬT' }, { kanji: '何日', reading: 'なんにち', meaning: 'HÀ NHẬT' }] },
            { jp: '日記を書きます。', vn: 'Tôi viết nhật ký.', furigana: [{ kanji: '日記', reading: 'にっき', meaning: 'NHẬT KÝ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
            { jp: '朝日が昇ります。', vn: 'Mặt trời mọc.', furigana: [{ kanji: '朝日', reading: 'あさひ', meaning: 'TRIỀU NHẬT' }, { kanji: '昇', reading: 'のぼ', meaning: 'THĂNG' }] },
            { jp: 'いい一日を。', vn: 'Chúc một ngày tốt lành.', furigana: [{ kanji: '一日', reading: 'いちにち', meaning: 'NHẤT NHẬT' }] }
          ]
        },
        {
          kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaning: 'Sách, nguồn gốc', sinoVietnamese: 'BẢN', strokes: 5, jlpt: 'N5', radicals: '木 (mộc)', components: [{ char: '木', meaning: 'cây' }, { char: '一', meaning: 'vạch' }], mnemonic: 'Đánh dấu vào gốc cây để chỉ nguồn gốc.',
          examples: ['本 (ほん) - Sách', '日本 (にほん) - Nhật Bản'],
          exampleSentences: [
            { jp: '本を読みます。', vn: 'Tôi đọc sách.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '山本さんは元気です。', vn: 'Anh Yamamoto khỏe mạnh.', furigana: [{ kanji: '山本', reading: 'やまもと', meaning: 'SƠN BẢN' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] },
            { jp: '本当ですか。', vn: 'Thật không?', furigana: [{ kanji: '本当', reading: 'ほんとう', meaning: 'BẢN ĐƯƠNG' }] },
            { jp: '本棚に本があります。', vn: 'Có sách trên giá sách.', furigana: [{ kanji: '本棚', reading: 'ほんだな', meaning: 'BẢN BẰNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
            { jp: '本気で頑張ります。', vn: 'Tôi sẽ cố gắng hết sức.', furigana: [{ kanji: '本気', reading: 'ほんき', meaning: 'BẢN KHÍ' }, { kanji: '頑張', reading: 'がんば', meaning: 'NGOAN TRƯƠNG' }] }
          ]
        },
        {
          kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngôn ngữ', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số năm' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Năm (五) cái miệng (口) cùng phát ra lời nói (言) tạo thành ngôn ngữ (語).',
          examples: ['日本語 (にほんご) - Tiếng Nhật', '言語 (げんご) - Ngôn ngữ'],
          exampleSentences: [
            { jp: '何語を勉強していますか。', vn: 'Bạn đang học tiếng gì?', furigana: [{ kanji: '何語', reading: 'なにご', meaning: 'HÀ NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
            { jp: '外国語学部に入ります。', vn: 'Tôi vào khoa ngoại ngữ.', furigana: [{ kanji: '外国語学部', reading: 'がいこくごがくぶ', meaning: 'NGOẠI QUỐC NGỮ HỌC BỘ' }, { kanji: '入', reading: 'はい', meaning: 'NHẬP' }] },
            { jp: '物語を読みます。', vn: 'Tôi đọc truyện.', furigana: [{ kanji: '物語', reading: 'ものがたり', meaning: 'VẬT NGỮ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '語学学校に通います。', vn: 'Tôi đi học trường ngôn ngữ.', furigana: [{ kanji: '語学学校', reading: 'ごがくがっこう', meaning: 'NGỮ HỌC HỌC HIỆU' }, { kanji: '通', reading: 'かよ', meaning: 'THÔNG' }] },
            { jp: '語彙を増やします。', vn: 'Tôi tăng vốn từ vựng.', furigana: [{ kanji: '語彙', reading: 'ごい', meaning: 'NGỮ VỊ' }, { kanji: '増', reading: 'ふ', meaning: 'TĂNG' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは日本語の本です。', romaji: 'Kore wa nihongo no hon desu.', vn: 'Đây là cuốn sách tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '日本語を勉強しています。', romaji: 'Nihongo wo benkyou shite imasu.', vn: 'Tôi đang học tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: '日本語の先生は優しいです。', romaji: 'Nihongo no sensei wa yasashii desu.', vn: 'Giáo viên tiếng Nhật của tôi hiền.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '優', reading: 'やさ', meaning: 'ƯU' }]
        },
        {
          jp: '少し日本語が話せます。', romaji: 'Sukoshi nihongo ga hanasemasu.', vn: 'Tôi có thể nói một chút tiếng Nhật.',
          furigana: [{ kanji: '少', reading: 'すこ', meaning: 'THIỂU' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: '日本の文化と日本語が好きです。', romaji: 'Nihon no bunka to nihongo ga suki desu.', vn: 'Tôi thích văn hóa Nhật và tiếng Nhật.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '日本語で自己紹介をしました。', romaji: 'Nihongo de jikoshoukai wo shimashita.', vn: 'Tôi đã tự giới thiệu bằng tiếng Nhật.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '自己紹介', reading: 'じこしょうかい', meaning: 'TỰ KỈ THIỆU GIỚI' }]
        }
      ]
    },
    {
      word: '～ご', kanji: '～語', romaji: '~go', mean: 'tiếng ~',
      kanjiDetails: [
        {
          kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngôn ngữ', sinoVietnamese: 'NGỮ', strokes: 14, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '五', meaning: 'số năm' }, { char: '口', meaning: 'miệng' }], mnemonic: 'Năm cái miệng cùng nói là ngôn ngữ.',
          examples: ['日本語 (にほんご) - Tiếng Nhật', '言語 (げんご) - Ngôn ngữ'],
          exampleSentences: [
            { jp: '何語を勉強していますか。', vn: 'Bạn đang học tiếng gì?', furigana: [{ kanji: '何語', reading: 'なにご', meaning: 'HÀ NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
            { jp: '外国語学部に入ります。', vn: 'Tôi vào khoa ngoại ngữ.', furigana: [{ kanji: '外国語学部', reading: 'がいこくごがくぶ', meaning: 'NGOẠI QUỐC NGỮ HỌC BỘ' }, { kanji: '入', reading: 'はい', meaning: 'NHẬP' }] },
            { jp: '物語を読みます。', vn: 'Tôi đọc truyện.', furigana: [{ kanji: '物語', reading: 'ものがたり', meaning: 'VẬT NGỮ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
            { jp: '語学学校に通います。', vn: 'Tôi đi học trường ngôn ngữ.', furigana: [{ kanji: '語学学校', reading: 'ごがくがっこう', meaning: 'NGỮ HỌC HỌC HIỆU' }, { kanji: '通', reading: 'かよ', meaning: 'THÔNG' }] },
            { jp: '語彙を増やします。', vn: 'Tôi tăng vốn từ vựng.', furigana: [{ kanji: '語彙', reading: 'ごい', meaning: 'NGỮ VỊ' }, { kanji: '増', reading: 'ふ', meaning: 'TĂNG' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'ベトナム語を話します。', romaji: 'Betonamugo wo hanashimasu.', vn: 'Tôi nói tiếng Việt.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }]
        },
        {
          jp: 'フランス語は難しいです。', romaji: 'Furansugo wa muzukashii desu.', vn: 'Tiếng Pháp khó.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '難', reading: 'むずか', meaning: 'NAN' }]
        },
        {
          jp: '何語がわかりますか。', romaji: 'Nanigo ga wakarimasu ka.', vn: 'Bạn hiểu được tiếng gì?',
          furigana: [{ kanji: '何語', reading: 'なにご', meaning: 'HÀ NGỮ' }]
        },
        {
          jp: 'ドイツ語を習いたいです。', romaji: 'Doitsugo wo naraitai desu.', vn: 'Tôi muốn học tiếng Đức.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '習', reading: 'なら', meaning: 'TẬP' }]
        },
        {
          jp: '中国語の辞書を持っています。', romaji: 'Chuugokugo no jisho wo motte imasu.', vn: 'Tôi có từ điển tiếng Trung.',
          furigana: [{ kanji: '中国語', reading: 'ちゅうごくご', meaning: 'TRUNG QUỐC NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '持', reading: 'も', meaning: 'TRÌ' }]
        },
        {
          jp: 'タイ語を教えてください。', romaji: 'Taigo wo oshiete kudasai.', vn: 'Hãy dạy tôi tiếng Thái.',
          furigana: [{ kanji: '語', reading: 'ご', meaning: 'NGỮ' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
        }
      ]
    },
    {
      word: 'なん', kanji: '何', romaji: 'nan', mean: 'cái gì',
      kanjiDetails: [
        {
          kanji: '何', onyomi: 'カ (ka)', kunyomi: 'なに (nani), なん (nan)', meaning: 'Cái gì', sinoVietnamese: 'HÀ', strokes: 7, jlpt: 'N5', radicals: '人 (nhân)', components: [{ char: '亻', meaning: 'người' }, { char: '可', meaning: 'có thể' }], mnemonic: 'Con người (亻) có thể (可) đặt ra câu hỏi "Cái gì?".',
          examples: ['何 (なに) - Cái gì', '何で (なんで) - Tại sao/Bằng cái gì'],
          exampleSentences: [
            { jp: '何をしていますか。', vn: 'Bạn đang làm gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }] },
            { jp: '今、何時ですか。', vn: 'Bây giờ là mấy giờ?', furigana: [{ kanji: '今', reading: 'いま', meaning: 'KIM' }, { kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }] },
            { jp: '家族は何人ですか。', vn: 'Gia đình có mấy người?', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '何人', reading: 'なんにん', meaning: 'HÀ NHÂN' }] },
            { jp: '何か飲みませんか。', vn: 'Uống gì không?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
            { jp: '何でもいいです。', vn: 'Cái gì cũng được.', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', vn: 'Đây là cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: 'それは何の本ですか。', romaji: 'Sore wa nan no hon desu ka.', vn: 'Đó là cuốn sách về cái gì?',
          furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: 'お土産は何がいいですか。', romaji: 'Omiyage wa nan ga ii desu ka.', vn: 'Quà tặng thì cái gì tốt nhỉ?',
          furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: '今、何時ですか。', romaji: 'Ima, nanji desu ka.', vn: 'Bây giờ là mấy giờ?',
          furigana: [{ kanji: '今', reading: 'いま', meaning: 'KIM' }, { kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }]
        },
        {
          jp: '名前は何ですか。', romaji: 'Namae wa nan desu ka.', vn: 'Tên bạn là gì?',
          furigana: [{ kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: '朝ご飯は何を食べましたか。', romaji: 'Asagohan wa nan wo tabemashita ka.', vn: 'Bạn đã ăn gì vào bữa sáng?',
          furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        }
      ]
    },
    {
      word: 'そう', kanji: '', romaji: 'sou', mean: 'như thế, đúng vậy',
      examples: [
        {
          jp: 'はい、そうです。', romaji: 'Hai, sou desu.', vn: 'Vâng, đúng vậy.',
          furigana: []
        },
        {
          jp: 'ああ、そうですか。', romaji: 'Aa, sou desu ka.', vn: 'À, vậy hả.',
          furigana: []
        },
        {
          jp: 'そうですね。', romaji: 'Sou desu ne.', vn: 'Đúng thế nhỉ.',
          furigana: []
        },
        {
          jp: 'それはそうかもしれません。', romaji: 'Sore wa sou kamo shiremasen.', vn: 'Điều đó có lẽ là như vậy.',
          furigana: []
        },
        {
          jp: '私もそう思います。', romaji: 'Watashi mo sou omoimasu.', vn: 'Tôi cũng nghĩ như vậy.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '思', reading: 'おも', meaning: 'TƯ' }]
        },
        {
          jp: 'そうしましょう。', romaji: 'Sou shimashou.', vn: 'Hãy làm như thế đi.',
          furigana: []
        }
      ]
    },
    {
      word: 'テレホンカード', kanji: '', romaji: 'terehon kaado', mean: 'thẻ điện thoại',
      examples: [
        {
          jp: 'これはテレホンカードです。', romaji: 'Kore wa terehon kaado desu.', vn: 'Đây là thẻ điện thoại.',
          furigana: []
        },
        {
          jp: 'テレホンカードを買います。', romaji: 'Terehon kaado wo kaimasu.', vn: 'Tôi mua thẻ điện thoại.',
          furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'このテレホンカードは古いです。', romaji: 'Kono terehon kaado wa furui desu.', vn: 'Chiếc thẻ điện thoại này cũ rồi.',
          furigana: [{ kanji: '古', reading: 'ふる', meaning: 'CỔ' }]
        },
        {
          jp: 'テレホンカードを貸してください。', romaji: 'Terehon kaado wo kashite kudasai.', vn: 'Hãy cho tôi mượn thẻ điện thoại.',
          furigana: [{ kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        },
        {
          jp: '公衆電話でテレホンカードを使います。', romaji: 'Koushuu denwa de terehon kaado wo tsukaimasu.', vn: 'Sử dụng thẻ điện thoại ở điện thoại công cộng.',
          furigana: [{ kanji: '公衆', reading: 'こうしゅう', meaning: 'CÔNG CHÚNG' }, { kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }]
        },
        {
          jp: 'そのテレホンカードは誰のですか。', romaji: 'Sono terehon kaado wa dare no desu ka.', vn: 'Chiếc thẻ điện thoại đó là của ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        }
      ]
    },
    {
      word: 'カセットテープ', kanji: '', romaji: 'kasetto teepu', mean: 'băng cát-xét',
      examples: [
        {
          jp: 'これはカセットテープです。', romaji: 'Kore wa kasetto teepu desu.', vn: 'Đây là băng cassette.',
          furigana: []
        },
        {
          jp: '昔カセットテープを聞きました。', romaji: 'Mukashi kasetto teepu wo kikimashita.', vn: 'Ngày xưa tôi đã nghe băng cassette.',
          furigana: [{ kanji: '昔', reading: 'むかし', meaning: 'TÍCH' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }]
        },
        {
          jp: 'カセットテープの音が好きです。', romaji: 'Kasetto teepu no oto ga suki desu.', vn: 'Tôi thích âm thanh của băng cassette.',
          furigana: [{ kanji: '音', reading: 'おと', meaning: 'ÂM' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '新しいカセットテープを買います。', romaji: 'Atarashii kasetto teepu wo kaimasu.', vn: 'Mua băng cassette mới.',
          furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }]
        },
        {
          jp: 'カセットテープに録音します。', romaji: 'Kasetto teepu ni rokuon shimasu.', vn: 'Ghi âm vào băng cassette.',
          furigana: [{ kanji: '録音', reading: 'ろくおん', meaning: 'LỤC ÂM' }]
        },
        {
          jp: 'そのカセットテープは私のです。', romaji: 'Sono kasetto teepu wa watashi no desu.', vn: 'Cuốn băng cassette đó là của tôi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }]
        }
      ]
    },
    {
      word: 'テープレコーダー', kanji: '', romaji: 'teepu rekoodaa', mean: 'máy ghi âm',
      examples: [
        {
          jp: 'テープレコーダーで日本語を勉強します。', romaji: 'Teepu rekoodaa de nihongo wo benkyou shimasu.', vn: 'Học tiếng Nhật bằng máy ghi âm.',
          furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        },
        {
          jp: 'このテープレコーダーは安いです。', romaji: 'Kono teepu rekoodaa wa yasui desu.', vn: 'Chiếc máy ghi âm này rẻ.',
          furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }]
        },
        {
          jp: 'テープレコーダーを壊しました。', romaji: 'Teepu rekoodaa wo kowashimashita.', vn: 'Tôi đã làm hỏng máy ghi âm.',
          furigana: [{ kanji: '壊', reading: 'こわ', meaning: 'HOẠI' }]
        },
        {
          jp: 'テープレコーダーを貸しましょう。', romaji: 'Teepu rekoodaa wo kashimashou.', vn: 'Để tôi cho mượn máy ghi âm nhé.',
          furigana: [{ kanji: '貸', reading: 'か', meaning: 'THẢI' }]
        },
        {
          jp: 'テープレコーダーの使い方を教えてください。', romaji: 'Teepu rekoodaa no tsukaikata wo oshiete kudasai.', vn: 'Hãy dạy tôi cách sử dụng máy ghi âm.',
          furigana: [{ kanji: '使', reading: 'つか', meaning: 'SỬ' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
        },
        {
          jp: 'テープレコーダーはどこにありますか。', romaji: 'Teepu rekoodaa wa doko ni arimasu ka.', vn: 'Máy ghi âm ở đâu?',
          furigana: []
        }
      ]
    },
    {
      word: 'じどうしゃ', kanji: '自動車', romaji: 'jidousha', mean: 'xe hơi, ô tô',
      kanjiDetails: [
        {
          kanji: '自', onyomi: 'ジ (ji), シ (shi)', kunyomi: 'みずか.ら (mizukara)', meaning: 'Tự mình, tự thân', sinoVietnamese: 'TỰ', strokes: 6, jlpt: 'N4', radicals: '自 (tự)', examples: ['自分 (じぶん) - bản thân', '自由 (じゆう) - tự do'],
          exampleSentences: [
            { jp: '自分のことは自分でします。', vn: 'Việc của mình thì tự mình làm.', furigana: [{ kanji: '自分', reading: 'じぶん', meaning: 'TỰ PHÂN' }, { kanji: '自分', reading: 'じぶん', meaning: 'TỰ PHÂN' }] },
            { jp: '自由が好きです。', vn: 'Tôi thích tự do.', furigana: [{ kanji: '自由', reading: 'じゆう', meaning: 'TỰ DO' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
            { jp: '自転車に乗ります。', vn: 'Tôi đi xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
            { jp: '自動ドアが開きます。', vn: 'Cửa tự động mở.', furigana: [{ kanji: '自動', reading: 'じどう', meaning: 'TỰ ĐỘNG' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }] },
            { jp: '自信があります。', vn: 'Tôi có tự tin.', furigana: [{ kanji: '自信', reading: 'じしん', meaning: 'TỰ TÍN' }] }
          ]
        },
        {
          kanji: '動', onyomi: 'ドウ (dou)', kunyomi: 'うご.く (ugoku)', meaning: 'Di chuyển, hoạt động', sinoVietnamese: 'ĐỘNG', strokes: 11, jlpt: 'N4', radicals: '力 (lực)', examples: ['動物 (どうぶつ) - động vật', '運動 (うんどう) - vận động'],
          exampleSentences: [
            { jp: '動物園へ行きます。', vn: 'Tôi đi sở thú.', furigana: [{ kanji: '動物園', reading: 'どうぶつえん', meaning: 'ĐỘNG VẬT VIÊN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '運動靴を履きます。', vn: 'Tôi đi giày thể thao.', furigana: [{ kanji: '運動靴', reading: 'うんどうぐつ', meaning: 'VẬN ĐỘNG OA' }, { kanji: '履', reading: 'は', meaning: 'LÍ' }] },
            { jp: '心が動きます。', vn: 'Trái tim rung động.', furigana: [{ kanji: '心', reading: 'こころ', meaning: 'TÂM' }, { kanji: '動', reading: 'うご', meaning: 'ĐỘNG' }] },
            { jp: '自動車が動きます。', vn: 'Ô tô chuyển động.', furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '動', reading: 'うご', meaning: 'ĐỘNG' }] },
            { jp: '動画を見ます。', vn: 'Tôi xem video.', furigana: [{ kanji: '動画', reading: 'どうが', meaning: 'ĐỘNG HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] }
          ]
        },
        {
          kanji: '車', onyomi: 'シャ (sha)', kunyomi: 'くるま (kuruma)', meaning: 'Xe cộ', sinoVietnamese: 'XA', strokes: 7, jlpt: 'N5', radicals: '車 (xa)', examples: ['電車 (でんしゃ) - xe điện', '自転車 (じてんしゃ) - xe đạp'],
          exampleSentences: [
            { jp: '電車に乗ります。', vn: 'Tôi đi tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
            { jp: '車を買います。', vn: 'Tôi mua xe ô tô.', furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
            { jp: '車椅子を使います。', vn: 'Tôi dùng xe lăn.', furigana: [{ kanji: '車椅子', reading: 'くるまいす', meaning: 'XA Y TỬ' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }] },
            { jp: '駐車場に車を止めます。', vn: 'Tôi đỗ xe ở bãi đậu xe.', furigana: [{ kanji: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'TRÚ XA TRƯỜNG' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '止', reading: 'と', meaning: 'CHỈ' }] },
            { jp: '車掌さんに聞きます。', vn: 'Tôi hỏi người soát vé.', furigana: [{ kanji: '車掌', reading: 'しゃしょう', meaning: 'XA CHƯỞNG' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '私の父は自動車の社員です。', romaji: 'Watashi no chichi wa jidousha no shain desu.', vn: 'Bố tôi là nhân viên công ty ô tô.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '父', reading: 'ちち', meaning: 'PHỤ' }, { kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
        },
        {
          jp: '自動車を運転します。', romaji: 'Jidousha wo unten shimasu.', vn: 'Lái xe ô tô.',
          furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '運転', reading: 'うんてん', meaning: 'VẬN CHUYỂN' }]
        },
        {
          jp: 'あの自動車は高いです。', romaji: 'Ano jidousha wa takai desu.', vn: 'Chiếc ô tô kia đắt.',
          furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '高', reading: 'たか', meaning: 'CAO' }]
        },
        {
          jp: '日本の自動車は有名です。', romaji: 'Nihon no jidousha wa yuumei desu.', vn: 'Ô tô của Nhật Bản rất nổi tiếng.',
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '有名', reading: 'ゆうめい', meaning: 'HỮU DANH' }]
        },
        {
          jp: '自動車で会社へ行きます。', romaji: 'Jidousha de kaisha e ikimasu.', vn: 'Đi đến công ty bằng ô tô.',
          furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '自動車の故障です。', romaji: 'Jidousha no koshou desu.', vn: 'Ô tô bị hỏng hóc.',
          furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '故障', reading: 'こしょう', meaning: 'CỐ CHƯỚNG' }]
        }
      ]
    },
    {
      word: 'けっこうです', kanji: '結構です', romaji: 'kekkou desu', mean: 'đủ rồi, được rồi, không cần đâu',
      kanjiDetails: [
        {
          kanji: '結', onyomi: 'ケツ (ketsu)', kunyomi: 'むす.ぶ (musubu)', meaning: 'Kết nối, kết thúc', sinoVietnamese: 'KẾT', strokes: 12, jlpt: 'N4', radicals: '糸 (mịch)', components: [{ char: '糸', meaning: 'sợi chỉ' }, { char: '吉', meaning: 'tốt lành' }], mnemonic: 'Dùng sợi chỉ (糸) thắt nút để tạo nên sự kết (結) nối tốt lành (吉).',
          examples: ['結婚 (けっこん) - Kết hôn', '結果 (けっか) - Kết quả'],
          exampleSentences: [
            { jp: '彼は来年結婚します。', vn: 'Anh ấy sẽ kết hôn vào năm sau.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '結婚', reading: 'けっこん', meaning: 'KẾT HÔN' }] },
            { jp: '良い結果が出ました。', vn: 'Đã có kết quả tốt.', furigana: [{ kanji: '良', reading: 'よ', meaning: 'LƯƠNG' }, { kanji: '結果', reading: 'けっか', meaning: 'KẾT QUẢ' }, { kanji: '出', reading: 'で', meaning: 'XUẤT' }] },
            { jp: '髪を結びます。', vn: 'Tôi buộc tóc.', furigana: [{ kanji: '髪', reading: 'かみ', meaning: 'PHÁT' }, { kanji: '結', reading: 'むす', meaning: 'KẾT' }] },
            { jp: '結論を言います。', vn: 'Tôi nói kết luận.', furigana: [{ kanji: '結論', reading: 'けつろん', meaning: 'KẾT LUẬN' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }] },
            { jp: '終結しました。', vn: 'Đã kết thúc.', furigana: [{ kanji: '終結', reading: 'しゅうけつ', meaning: 'CHUNG KẾT' }] }
          ]
        },
        {
          kanji: '構', onyomi: 'コウ (kou)', kunyomi: 'かま.える (kamaeru)', meaning: 'Cấu tạo, quan tâm', sinoVietnamese: 'CẤU', strokes: 14, jlpt: 'N3', radicals: '木 (mộc)', components: [{ char: '木', meaning: 'gỗ' }, { char: '冓', meaning: 'kết cấu chồng chéo' }], mnemonic: 'Dùng gỗ (木) để tạo nên kết cấu (構) ngôi nhà.',
          examples: ['結構 (けっこう) - Khá/Đủ/Kết cấu', '構成 (こうせい) - Cấu thành'],
          exampleSentences: [
            { jp: '家の構造を調べます。', vn: 'Tôi tìm hiểu cấu trúc ngôi nhà.', furigana: [{ kanji: '家', reading: 'いえ', meaning: 'GIA' }, { kanji: '構造', reading: 'こうぞう', meaning: 'CẤU TẠO' }, { kanji: '調', reading: 'しら', meaning: 'ĐIỀU' }] },
            { jp: '論文を構成します。', vn: 'Tôi cấu trúc bài luận văn.', furigana: [{ kanji: '論文', reading: 'ろんぶん', meaning: 'LUẬN VĂN' }, { kanji: '構成', reading: 'こうせい', meaning: 'CẤU THÀNH' }] },
            { jp: 'お構いなく。', vn: 'Đừng bận tâm.', furigana: [{ kanji: '構', reading: 'かま', meaning: 'CẤU' }] },
            { jp: '結構なお手前で。', vn: 'Trà rất ngon.', furigana: [{ kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }, { kanji: '手前', reading: 'てまえ', meaning: 'THỦ TIỀN' }] },
            { jp: '構いません。', vn: 'Không sao đâu.', furigana: [{ kanji: '構', reading: 'かま', meaning: 'CẤU' }] }
          ]
        }
      ],
      examples: [
        {
          jp: 'いいえ、結構です。', romaji: 'Iie, kekkou desu.', vn: 'Không, tôi đủ rồi / Không cần đâu.',
          furigana: [{ kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: 'お茶をもう一杯いかがですか。いいえ、結構です。', romaji: 'Ocha wo mou ippai ikaga desu ka. Iie, kekkou desu.', vn: 'Dùng thêm một tách trà nữa nhé? Không, tôi đủ rồi.',
          furigana: [{ kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }, { kanji: '一杯', reading: 'いっぱい', meaning: 'NHẤT BÔI' }, { kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: '砂糖は結構です。', romaji: 'Satou wa kekkou desu.', vn: 'Tôi không cần đường.',
          furigana: [{ kanji: '砂糖', reading: 'さとう', meaning: 'SA ĐƯỜNG' }, { kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: '助けは結構です。', romaji: 'Tasuke wa kekkou desu.', vn: 'Tôi không cần giúp đỡ.',
          furigana: [{ kanji: '助', reading: 'たす', meaning: 'TRỢ' }, { kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: 'プレゼントは結構です。', romaji: 'Purezento wa kekkou desu.', vn: 'Tôi không cần quà.',
          furigana: [{ kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        },
        {
          jp: '丁寧な「結構です」と言います。', romaji: 'Teinei na "kekkou desu" to iimasu.', vn: 'Nói "Tôi đủ rồi" một cách lịch sự.',
          furigana: [{ kanji: '丁寧', reading: 'ていねい', meaning: 'ĐINH NINH' }, { kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }]
        }
      ]
    },
    {
      word: 'どういたしまして', kanji: '', romaji: 'dou itashimashite', mean: 'không có chi, không có gì',
      examples: [
        {
          jp: 'ありがとうございます。どういたしまして。', romaji: 'Arigatou gozaimasu. Dou itashimashite.', vn: 'Cảm ơn bạn. Không có gì.',
          furigana: []
        },
        {
          jp: '手伝ってくれてありがとう。どういたしまして。', romaji: 'Tetsudatte kurete arigatou. Dou itashimashite.', vn: 'Cảm ơn đã giúp đỡ. Không có chi.',
          furigana: [{ kanji: '手伝', reading: 'てつだ', meaning: 'THỦ TRUYỀN' }]
        },
        {
          jp: 'どういたしまして、お気になさらないでください。', romaji: 'Dou itashimashite, oki ni nasaranai de kudasai.', vn: 'Không có gì đâu, xin đừng bận tâm.',
          furigana: [{ kanji: '気', reading: 'き', meaning: 'KHÍ' }]
        },
        {
          jp: 'プレゼントありがとう。いいえ、どういたしまして。', romaji: 'Purezento arigatou. Iie, dou itashimashite.', vn: 'Cảm ơn món quà. Không, không có gì.',
          furigana: []
        },
        {
          jp: 'いつもありがとう。どういたしまして。', romaji: 'Itsumo arigatou. Dou itashimashite.', vn: 'Lúc nào cũng cảm ơn bạn. Không có chi.',
          furigana: []
        },
        {
          jp: '「お礼は結構です」「どういたしまして」。', romaji: '"Orei wa kekkou desu" "Dou itashimashite".', vn: '"Không cần cảm ơn đâu" "Không có gì".',
          furigana: [{ kanji: '礼', reading: 'れい', meaning: 'LỄ' }, { kanji: '結構', reading: 'けっこう', meaning: 'KẾT CẤU' }]
        }
      ]
    },
    {
      word: 'ありがとうございます', kanji: '', romaji: 'arigatou gozaimasu', mean: 'cảm ơn (lịch sự)',
      examples: [
        {
          jp: '本当にありがとうございます。', romaji: 'Hontou ni arigatou gozaimasu.', vn: 'Thật sự cảm ơn bạn rất nhiều.',
          furigana: [{ kanji: '本当', reading: 'ほんとう', meaning: 'BẢN ĐƯƠNG' }]
        },
        {
          jp: '親切にしてくれてありがとうございます。', romaji: 'Shinsetsu ni shite kurete arigatou gozaimasu.', vn: 'Cảm ơn bạn đã đối xử tử tế.',
          furigana: [{ kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }]
        },
        {
          jp: '手伝ってくれてありがとうございます。', romaji: 'Tetsudatte kurete arigatou gozaimasu.', vn: 'Cảm ơn vì đã giúp đỡ.',
          furigana: [{ kanji: '手伝', reading: 'てつだ', meaning: 'THỦ TRUYỀN' }]
        },
        {
          jp: 'プレゼントをありがとうございます。', romaji: 'Purezento wo arigatou gozaimasu.', vn: 'Cảm ơn vì món quà.',
          furigana: []
        },
        {
          jp: '昨日はありがとうございます。', romaji: 'Kinou wa arigatou gozaimasu.', vn: 'Cảm ơn chuyện ngày hôm qua.',
          furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }]
        },
        {
          jp: '先生、ありがとうございます。', romaji: 'Sensei, arigatou gozaimasu.', vn: 'Em cảm ơn thầy/cô.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        }
      ]
    },
    {
      word: 'さとう', kanji: '佐藤', romaji: 'satou', mean: 'Sato (họ phổ biến)',
      kanjiDetails: [
        {
          kanji: '佐', onyomi: 'サ (sa)', kunyomi: '', meaning: 'Phò tá, trợ giúp', sinoVietnamese: 'TÁ', strokes: 7, jlpt: 'N1', radicals: '人 (nhân)', examples: ['補佐 (ほさ) - bổ tá/trợ lý'],
          exampleSentences: [
            { jp: '佐藤さんは親切です。', vn: 'Anh Sato tốt bụng.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }] },
            { jp: '補佐官になります。', vn: 'Tôi trở thành trợ lý.', furigana: [{ kanji: '補佐官', reading: 'ほさかん', meaning: 'BỔ TÁ QUAN' }] },
            { jp: '大佐に会いました。', vn: 'Tôi đã gặp đại tá.', furigana: [{ kanji: '大佐', reading: 'たいさ', meaning: 'ĐẠI TÁ' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
            { jp: '佐渡島へ行きます。', vn: 'Tôi đi đảo Sado.', furigana: [{ kanji: '佐渡島', reading: 'さどがしま', meaning: 'TÁ ĐỘ ĐẢO' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '宇佐神宮へ参拝します。', vn: 'Tôi đi viếng đền Usa.', furigana: [{ kanji: '宇佐神宮', reading: 'うさじんぐう', meaning: 'VŨ TÁ THẦN CUNG' }, { kanji: '参拝', reading: 'さんぱい', meaning: 'THAM BÁI' }] }
          ]
        },
        {
          kanji: '藤', onyomi: 'トウ (tou), ドウ (dou)', kunyomi: 'ふじ (fuji)', meaning: 'Hoa tử đằng', sinoVietnamese: 'ĐẰNG', strokes: 18, jlpt: 'N1', radicals: '艸 (thảo)', examples: ['藤 (ふじ) - hoa tử đằng', '葛藤 (かっとう) - cát đằng/xung đột'],
          exampleSentences: [
            { jp: '藤の花がきれいです。', vn: 'Hoa tử đằng đẹp.', furigana: [{ kanji: '藤', reading: 'ふじ', meaning: 'ĐẰNG' }, { kanji: '花', reading: 'はな', meaning: 'HOA' }] },
            { jp: '葛藤があります。', vn: 'Có sự xung đột.', furigana: [{ kanji: '葛藤', reading: 'かっとう', meaning: 'CÁT ĐẰNG' }] },
            { jp: '藤色が好きです。', vn: 'Tôi thích màu tím hoa tử đằng.', furigana: [{ kanji: '藤色', reading: 'ふじいろ', meaning: 'ĐẰNG SẮC' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
            { jp: '加藤さんもいます。', vn: 'Anh Kato cũng có mặt.', furigana: [{ kanji: '加藤', reading: 'かとう', meaning: 'GIA ĐẰNG' }] },
            { jp: '伊藤さんは元気です。', vn: 'Anh Ito khỏe mạnh.', furigana: [{ kanji: '伊藤', reading: 'いとう', meaning: 'Y ĐẰNG' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '佐藤さんは日本人です。', romaji: 'Satou-san wa nihonjin desu.', vn: 'Anh Sato là người Nhật.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: '佐藤先生は厳しいです。', romaji: 'Satou sensei wa kibishii desu.', vn: 'Thầy Sato rất nghiêm khắc.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '厳', reading: 'きび', meaning: 'NGHIÊM' }]
        },
        {
          jp: '佐藤さんの電話番号は何ですか。', romaji: 'Satou-san no denwa bangou wa nan desu ka.', vn: 'Số điện thoại của anh Sato là gì?',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '電話番号', reading: 'でんわばんごう', meaning: 'ĐIỆN THOẠI PHIÊN HIỆU' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: '佐藤さんと一緒に仕事をします。', romaji: 'Satou-san to issho ni shigoto wo shimasu.', vn: 'Làm việc cùng anh Sato.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '仕事', reading: 'しごと', meaning: 'SĨ SỰ' }]
        },
        {
          jp: '佐藤さんに名刺をあげます。', romaji: 'Satou-san ni meishi wo agemasu.', vn: 'Trao danh thiếp cho anh Sato.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '名刺', reading: 'めいし', meaning: 'DANH THỨ' }]
        },
        {
          jp: '佐藤さんは私の友達です。', romaji: 'Satou-san wa watashi no tomodachi desu.', vn: 'Anh Sato là bạn của tôi.',
          furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }]
        }
      ]
    },
    {
      word: 'すずき', kanji: '鈴木', romaji: 'suzuki', mean: 'Suzuki (họ phổ biến)',
      kanjiDetails: [
        {
          kanji: '鈴', onyomi: 'レイ (rei), リン (rin)', kunyomi: 'すず (suzu)', meaning: 'Cái chuông', sinoVietnamese: 'LINH', strokes: 13, jlpt: 'N2', radicals: '金 (kim)', examples: ['風鈴 (ふうりん) - chuông gió', '電鈴 (でんれい) - chuông điện'],
          exampleSentences: [
            { jp: '鈴を鳴らします。', vn: 'Tôi rung chuông.', furigana: [{ kanji: '鈴', reading: 'すず', meaning: 'LINH' }, { kanji: '鳴', reading: 'な', meaning: 'MINH' }] },
            { jp: '風鈴の音が涼しいです。', vn: 'Tiếng chuông gió nghe mát mẻ.', furigana: [{ kanji: '風鈴', reading: 'ふうりん', meaning: 'PHONG LINH' }, { kanji: '音', reading: 'おと', meaning: 'ÂM' }, { kanji: '涼', reading: 'すず', meaning: 'LƯƠNG' }] },
            { jp: '予鈴が鳴りました。', vn: 'Chuông báo trước đã reo.', furigana: [{ kanji: '予鈴', reading: 'よれい', meaning: 'DỰ LINH' }, { kanji: '鳴', reading: 'な', meaning: 'MINH' }] },
            { jp: '鈴木さんは学生です。', vn: 'Suzuki là học sinh.', furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
            { jp: '呼び鈴を押します。', vn: 'Tôi bấm chuông cửa.', furigana: [{ kanji: '呼', reading: 'よ', meaning: 'HÔ' }, { kanji: '鈴', reading: 'りん', meaning: 'LINH' }, { kanji: '押', reading: 'お', meaning: 'ÁP' }] }
          ]
        },
        {
          kanji: '木', onyomi: 'ボク (boku), モク (moku)', kunyomi: 'き (ki)', meaning: 'Cây, gỗ', sinoVietnamese: 'MỘC', strokes: 4, jlpt: 'N5', radicals: '木 (mộc)', examples: ['木材 (もくざい) - gỗ', '木曜日 (もくようび) - thứ năm'],
          exampleSentences: [
            { jp: '木の下で休みます。', vn: 'Nghỉ dưới gốc cây.', furigana: [{ kanji: '木', reading: 'き', meaning: 'MỘC' }, { kanji: '下', reading: 'した', meaning: 'HẠ' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }] },
            { jp: '木に登ります。', vn: 'Tôi leo cây.', furigana: [{ kanji: '木', reading: 'き', meaning: 'MỘC' }, { kanji: '登', reading: 'のぼ', meaning: 'ĐĂNG' }] },
            { jp: '木材を切ります。', vn: 'Tôi cắt gỗ.', furigana: [{ kanji: '木材', reading: 'もくざい', meaning: 'MỘC TÀI' }, { kanji: '切', reading: 'き', meaning: 'THIẾT' }] },
            { jp: '桜の木があります。', vn: 'Có cây hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら', meaning: 'ANH' }, { kanji: '木', reading: 'き', meaning: 'MỘC' }] },
            { jp: '木造の家を建てます。', vn: 'Xây nhà bằng gỗ.', furigana: [{ kanji: '木造', reading: 'もくぞう', meaning: 'MỘC TẠO' }, { kanji: '家', reading: 'いえ', meaning: 'GIA' }, { kanji: '建', reading: 'た', meaning: 'KIẾN' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '鈴木さんはエンジニアです。', romaji: 'Suzuki-san wa enjinia desu.', vn: 'Anh Suzuki là kỹ sư.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }]
        },
        {
          jp: '鈴木さんの車は新しいです。', romaji: 'Suzuki-san no kuruma wa atarashii desu.', vn: 'Xe hơi của anh Suzuki còn mới.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '新', reading: 'あたら', meaning: 'TÂN' }]
        },
        {
          jp: '鈴木さんは大阪から来ました。', romaji: 'Suzuki-san wa Osaka kara kimashita.', vn: 'Anh Suzuki đến từ Osaka.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '鈴木さんに本を借りました。', romaji: 'Suzuki-san ni hon wo karimashita.', vn: 'Tôi đã mượn sách từ anh Suzuki.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '借', reading: 'か', meaning: 'TÁ' }]
        },
        {
          jp: '鈴木さんは英語ができます。', romaji: 'Suzuki-san wa eigo ga dekimasu.', vn: 'Anh Suzuki có thể nói tiếng Anh.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }]
        },
        {
          jp: '鈴木さんの趣味はカメラです。', romaji: 'Suzuki-san no shumi wa kamera desu.', vn: 'Sở thích của anh Suzuki là máy ảnh.',
          furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '趣味', reading: 'しゅみ', meaning: 'THÚ VỊ' }]
        }
      ]
    },
    {
      word: 'たなか', kanji: '田中', romaji: 'tanaka', mean: 'Tanaka (họ phổ biến)',
      kanjiDetails: [
        {
          kanji: '田', onyomi: 'デン (den)', kunyomi: 'た (ta)', meaning: 'Ruộng lúa', sinoVietnamese: 'ĐIỀN', strokes: 5, jlpt: 'N5', radicals: '田 (điền)', examples: ['水田 (すいでん) - ruộng lúa nước', '油田 (ゆでん) - mỏ dầu'],
          exampleSentences: [
            { jp: '田んぼで働きます。', vn: 'Làm việc trên cánh đồng.', furigana: [{ kanji: '田', reading: 'た', meaning: 'ĐIỀN' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
            { jp: '水田が広がっています。', vn: 'Ruộng lúa nước trải rộng.', furigana: [{ kanji: '水田', reading: 'すいでん', meaning: 'THỦY ĐIỀN' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }] },
            { jp: '油田を発見しました。', vn: 'Đã phát hiện mỏ dầu.', furigana: [{ kanji: '油田', reading: 'ゆでん', meaning: 'DU ĐIỀN' }, { kanji: '発見', reading: 'はっけん', meaning: 'PHÁT KIẾN' }] },
            { jp: '山田さんは会社員です。', vn: 'Anh Yamada là nhân viên công ty.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
            { jp: '田舎へ帰ります。', vn: 'Tôi về quê.', furigana: [{ kanji: '田舎', reading: 'いなか', meaning: 'ĐIỀN XÁ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
          ]
        },
        {
          kanji: '中', onyomi: 'チュウ (chuu)', kunyomi: 'なか (naka)', meaning: 'Trong, ở giữa', sinoVietnamese: 'TRUNG', strokes: 4, jlpt: 'N5', radicals: '丨 (côn)', examples: ['中心 (ちゅうしん) - trung tâm', '中国 (ちゅうごく) - Trung Quốc'],
          exampleSentences: [
            { jp: '箱の中に何がありますか。', vn: 'Trong hộp có cái gì?', furigana: [{ kanji: '箱', reading: 'はこ', meaning: 'TƯƠNG' }, { kanji: '中', reading: 'なか', meaning: 'TRUNG' }, { kanji: '何', reading: 'なに', meaning: 'HÀ' }] },
            { jp: '背中が痛いです。', vn: 'Tôi đau lưng.', furigana: [{ kanji: '背中', reading: 'せなか', meaning: 'BỐI TRUNG' }, { kanji: '痛', reading: 'いた', meaning: 'THỐNG' }] },
            { jp: '会議の中止を知らせます。', vn: 'Thông báo hủy cuộc họp.', furigana: [{ kanji: '会議', reading: 'かいぎ', meaning: 'HỘI NGHỊ' }, { kanji: '中止', reading: 'ちゅうし', meaning: 'TRUNG CHỈ' }, { kanji: '知', reading: 'し', meaning: 'TRI' }] },
            { jp: '世界中を旅行します。', vn: 'Tôi du lịch khắp thế giới.', furigana: [{ kanji: '世界中', reading: 'せかいじゅう', meaning: 'THẾ GIỚI TRUNG' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }] },
            { jp: '勉強の最中です。', vn: 'Tôi đang giữa lúc học.', furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }, { kanji: '最中', reading: 'さいちゅう', meaning: 'TỐI TRUNG' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '田中さんは私の先生です。', romaji: 'Tanaka-san wa watashi no sensei desu.', vn: 'Anh Tanaka là giáo viên của tôi.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: '田中さんの本はどれですか。', romaji: 'Tanaka-san no hon wa dore desu ka.', vn: 'Sách của anh Tanaka là cái nào?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }]
        },
        {
          jp: '田中さんはどこから来ましたか。', romaji: 'Tanaka-san wa doko kara kimashita ka.', vn: 'Anh Tanaka đến từ đâu?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '田中さんと一緒にご飯を食べます。', romaji: 'Tanaka-san to issho ni gohan wo tabemasu.', vn: 'Ăn cơm cùng anh Tanaka.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }]
        },
        {
          jp: '田中さんの趣味は何ですか。', romaji: 'Tanaka-san no shumi wa nan desu ka.', vn: 'Sở thích của anh Tanaka là gì?',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '趣味', reading: 'しゅみ', meaning: 'THÚ VỊ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }]
        },
        {
          jp: '田中さんは親切な人です。', romaji: 'Tanaka-san wa shinsetsu na hito desu.', vn: 'Anh Tanaka là một người thân thiện.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }]
        }
      ]
    },
    {
      word: 'やまだ', kanji: '山田', romaji: 'yamada', mean: 'Yamada (họ phổ biến)',
      kanjiDetails: [
        {
          kanji: '山', onyomi: 'サン (san)', kunyomi: 'やま (yama)', meaning: 'Núi', sinoVietnamese: 'SƠN', strokes: 3, jlpt: 'N5', radicals: '山 (sơn)', examples: ['富士山 (ふじさん) - núi Phú Sĩ', '山脈 (さんみゃく) - dãy núi'],
          exampleSentences: [
            { jp: '山に登ります。', vn: 'Tôi leo núi.', furigana: [{ kanji: '山', reading: 'やま', meaning: 'SƠN' }, { kanji: '登', reading: 'のぼ', meaning: 'ĐĂNG' }] },
            { jp: '富士山は高いです。', vn: 'Núi Phú Sĩ cao.', furigana: [{ kanji: '富士山', reading: 'ふじさん', meaning: 'PHÚ SĨ SƠN' }, { kanji: '高', reading: 'たか', meaning: 'CAO' }] },
            { jp: '火山が噴火しました。', vn: 'Núi lửa đã phun trào.', furigana: [{ kanji: '火山', reading: 'かざん', meaning: 'HỎA SƠN' }, { kanji: '噴火', reading: 'ふんか', meaning: 'PHÚN HỎA' }] },
            { jp: '山道を歩きます。', vn: 'Tôi đi bộ trên đường núi.', furigana: [{ kanji: '山道', reading: 'やまみち', meaning: 'SƠN ĐẠO' }, { kanji: '歩', reading: 'ある', meaning: 'BỘ' }] },
            { jp: 'たくさん山があります。', vn: 'Có rất nhiều núi.', furigana: [{ kanji: '山', reading: 'やま', meaning: 'SƠN' }] }
          ]
        },
        {
          kanji: '田', onyomi: 'デン (den)', kunyomi: 'た (ta)', meaning: 'Ruộng lúa', sinoVietnamese: 'ĐIỀN', strokes: 5, jlpt: 'N5', radicals: '田 (điền)', examples: ['水田 (すいでん) - ruộng lúa nước', '成田 (なりた) - Narita'],
          exampleSentences: [
            { jp: '田植えをします。', vn: 'Tôi cấy lúa.', furigana: [{ kanji: '田植', reading: 'たう', meaning: 'ĐIỀN THỰC' }] },
            { jp: '新田を開発します。', vn: 'Khai khẩn ruộng mới.', furigana: [{ kanji: '新田', reading: 'しんでん', meaning: 'TÂN ĐIỀN' }, { kanji: '開発', reading: 'かいはつ', meaning: 'KHAI PHÁT' }] },
            { jp: '青田が美しいです。', vn: 'Ruộng lúa xanh thật đẹp.', furigana: [{ kanji: '青田', reading: 'あおた', meaning: 'THANH ĐIỀN' }, { kanji: '美', reading: 'うつく', meaning: 'MỸ' }] },
            { jp: '成田空港へ行きます。', vn: 'Tôi đi sân bay Narita.', furigana: [{ kanji: '成田空港', reading: 'なりたくうこう', meaning: 'THÀNH ĐIỀN KHÔNG CẢNG' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '本田さんは友達です。', vn: 'Anh Honda là bạn tôi.', furigana: [{ kanji: '本田', reading: 'ほんだ', meaning: 'BẢN ĐIỀN' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }] }
          ]
        }
      ],
      examples: [
        {
          jp: '山田さんは銀行員です。', romaji: 'Yamada-san wa ginkouin desu.', vn: 'Anh Yamada là nhân viên ngân hàng.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNH VIÊN' }]
        },
        {
          jp: '山田さんの傘はどれですか。', romaji: 'Yamada-san no kasa wa dore desu ka.', vn: 'Cái ô của anh Yamada là cái nào?',
          furigana: [{ kanji: '山田', reading: 'やmada', meaning: 'SƠN ĐIỀN' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
        },
        {
          jp: '山田さんと一緒に旅行へ行きます。', romaji: 'Yamada-san to issho ni ryokou e ikimasu.', vn: 'Đi du lịch cùng anh Yamada.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '山田さんの住所を教えてください。', romaji: 'Yamada-san no juusho wo oshiete kudasai.', vn: 'Hãy cho tôi biết địa chỉ của anh Yamada.',
          furigana: [{ kanji: '山田', reading: 'やmada', meaning: 'SƠN ĐIỀN' }, { kanji: '住所', reading: 'じゅうしょ', meaning: 'TRÚ SỞ' }, { kanji: '教', reading: 'おし', meaning: 'GIÁO' }]
        },
        {
          jp: '山田さんはテニスが好きです。', romaji: 'Yamada-san wa tenisu ga suki desu.', vn: 'Anh Yamada thích tennis.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }]
        },
        {
          jp: '山田さんはとても元気です。', romaji: 'Yamada-san wa totemo genki desu.', vn: 'Anh Yamada rất khỏe mạnh.',
          furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }]
        }
      ]
    }
  ],
  grammar: [],
  kaiwa: [],
  quiz: []
};

// Function to get lesson data by ID
export const getLessonData = (id: number): LessonDetail | null => {
  if (id === 1) {
    return lesson1Data;
  }
  if (id === 2) {
    return lesson2Data;
  }
  // Return mock data for other lessons
  const allLessons = [...lessonsN5, ...lessonsN4];
  const lessonSummary = allLessons.find(l => l.id === id);
  if (!lessonSummary) return null;

  return {
    id: lessonSummary.id,
    title: lessonSummary.title,
    vocabulary: [
      { word: 'たんご', kanji: '単語', romaji: 'tango', mean: 'Từ vựng mẫu' },
      { word: 'れい', kanji: '例', romaji: 'rei', mean: 'Ví dụ' },
    ],
    grammar: [
      {
        pattern: '文法パターン',
        explanation: 'Giải thích ngữ pháp mẫu cho bài ' + id,
        example: 'Câu ví dụ mẫu.'
      }
    ],
    kaiwa: [
      { char: 'A', jp: 'サンプル会話です。', vn: 'Đây là hội thoại mẫu.' },
      { char: 'B', jp: 'そうですね。', vn: 'Đúng vậy nhỉ.' },
    ],
    quiz: [
      {
        id: 1,
        question: "Đây là câu hỏi mẫu cho bài ___.",
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
        explanation: "Giải thích đáp án mẫu."
      }
    ]
  };
};
