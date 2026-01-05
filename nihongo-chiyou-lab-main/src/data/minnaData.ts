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
        }
      ]
    },
    {
      word: 'あなた', kanji: '', romaji: 'anata', mean: 'Anh/chị, ông/bà, bạn (ngôi thứ II số ít)',
      examples: [
        {
          jp: 'あなたは先生ですか。', romaji: 'Anata wa sensei desu ka.', vn: 'Bạn có phải là giáo viên không?',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
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
          furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
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
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
        },
        {
          jp: 'あの方は社長です。', romaji: 'Ano kata wa shachou desu.', vn: 'Vị đó là giám đốc.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }]
        },
        {
          jp: 'あの方は韓国の方です。', romaji: 'Ano kata wa Kankoku no kata desu.', vn: 'Vị đó là người Hàn Quốc.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '韓国', reading: 'かんこく', meaning: 'HÀN QUỐC' }]
        },
        {
          jp: 'あの方はIMCの社員です。', romaji: 'Ano kata wa IMC no shain desu.', vn: 'Vị đó là nhân viên công ty IMC.',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }]
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
          jp: '先生、おはようございます。', romaji: 'Sensei, ohayou gozaimasu.', vn: 'Chào thầy/cô ạ.',
          furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
        },
        {
          jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.',
          furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }]
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
        { jp: '私は教師です。', romaji: 'Watashi wa kyoushi desu.', vn: 'Tôi là giáo viên.' },
        { jp: '彼は高校の教師です。', romaji: 'Kare wa koukou no kyoushi desu.', vn: 'Anh ấy là giáo viên trung học.' },
        { jp: '山田さんは英語の教師です。', romaji: 'Yamada-san wa eigo no kyoushi desu.', vn: 'Anh Yamada là giáo viên tiếng Anh.' },
        { jp: '私は日本語教師です。', romaji: 'Watashi wa nihongo kyoushi desu.', vn: 'Tôi là giáo viên tiếng Nhật.' },
        { jp: '田中さんは大学の教師です。', romaji: 'Tanaka-san wa daigaku no kyoushi desu.', vn: 'Anh Tanaka là giảng viên đại học.' }
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
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '富士', reading: 'ふじ', meaning: 'PHÚ SĨ' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
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
        }
      ]
    },
    {
      word: 'しゃいん', kanji: '社員', romaji: 'shain', mean: 'Nhân viên Công ty ~ (dùng kèm theo tên công ty; ví dụ: IMCのしゃいん)',
      examples: [
        { jp: '私はIMCの社員です。', romaji: 'Watashi wa IMC no shain desu.', vn: 'Tôi là nhân viên công ty IMC.' },
        { jp: '佐藤さんはパワー電気の社員です。', romaji: 'Satou-san wa Pawaa Denki no shain desu.', vn: 'Anh Satou là nhân viên công ty Power Điện khí.' },
        { jp: 'ミラーさんもIMCの社員です。', romaji: 'Miraa-san mo IMC no shain desu.', vn: 'Anh Miller cũng là nhân viên công ty IMC.' },
        { jp: 'あの方はトヨタの社員です。', romaji: 'Ano kata wa Toyota no shain desu.', vn: 'Vị đó là nhân viên công ty Toyota.' },
        { jp: '田中さんはAKCの社員ですか。', romaji: 'Tanaka-san wa AKC no shain desu ka.', vn: 'Anh Tanaka có phải là nhân viên công ty AKC không?' }
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
        }
      ]
    },
    {
      word: 'エンジニア', kanji: '', romaji: 'enjinia', mean: 'Kỹ sư',
      examples: [
        { jp: '私はエンジニアです。', romaji: 'Watashi wa enjinia desu.', vn: 'Tôi là kỹ sư.' },
        { jp: 'ミラーさんはエンジニアです。', romaji: 'Miraa-san wa enjinia desu.', vn: 'Anh Miller là kỹ sư.' },
        { jp: '田中さんはエンジニアですか。', romaji: 'Tanaka-san wa enjinia desu ka.', vn: 'Anh Tanaka có phải là kỹ sư không?' },
        { jp: '私はエンジニアじゃありません。', romaji: 'Watashi wa enjinia ja arimasen.', vn: 'Tôi không phải là kỹ sư.' },
        { jp: 'あの人もエンジニアです。', romaji: 'Ano hito mo enjinia desu.', vn: 'Người kia cũng là kỹ sư.' }
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
          jp: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', vn: 'Vị kia là vị nào (ai) vậy? (Lịch sự)',
          furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }]
        },
        {
          jp: '誰と行きますか。', romaji: 'Dare to ikimasu ka.', vn: 'Bạn đi cùng với ai?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
        },
        {
          jp: '犯人は誰ですか。', romaji: 'Hannin wa dare desu ka.', vn: 'Hung thủ là ai?',
          furigana: [{ kanji: '犯人', reading: 'はんにん', meaning: 'PHẠM NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }]
        },
        {
          jp: '誰の傘ですか。', romaji: 'Dare no kasa desu ka.', vn: 'Ô của ai vậy?',
          furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }]
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
          jp: '私は20歳です。', romaji: 'Watashi wa nijus sai desu.', vn: 'Tôi 20 tuổi.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: '娘は3歳になります。', romaji: 'Musume wa san sai ni narimasu.', vn: 'Con gái tôi lên 3 tuổi.',
          furigana: [{ kanji: '娘', reading: 'むすめ', meaning: 'NƯƠNG' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: '息子は15歳です。', romaji: 'Musuko wa juu-go sai desu.', vn: 'Con trai tôi 15 tuổi.',
          furigana: [{ kanji: '息子', reading: 'むすこ', meaning: 'TỨC TỬ' }, { kanji: '歳', reading: 'さい', meaning: 'TUẾ' }]
        },
        {
          jp: '20歳を「はたち」と言います。', romaji: 'Nijus sai wo "hatachi" to iimasu.', vn: '20 tuổi được gọi là "hatachi".',
          furigana: [{ kanji: '歳', reading: 'さい', meaning: 'TUẾ' }, { kanji: '言', reading: 'い', meaning: 'NGÔN' }]
        },
        {
          jp: 'おいくつ（何歳）ですか。', romaji: 'Oikutsu (nansai) desu ka.', vn: 'Bạn bao nhiêu tuổi?',
          furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }]
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
        { jp: 'あなたは何歳ですか。', romaji: 'Anata wa nansai desu ka.', vn: 'Bạn bao nhiêu tuổi?' },
        { jp: '田中さんは何歳ですか。', romaji: 'Tanaka-san wa nansai desu ka.', vn: 'Anh Tanaka bao nhiêu tuổi?' },
        { jp: '私は25歳です。', romaji: 'Watashi wa nijuugo sai desu.', vn: 'Tôi 25 tuổi.' },
        { jp: 'お子さんは何歳ですか。', romaji: 'Okosan wa nansai desu ka.', vn: 'Con bạn bao nhiêu tuổi?' },
        { jp: 'あの人は何歳ですか。', romaji: 'Ano hito wa nansai desu ka.', vn: 'Người kia bao nhiêu tuổi?' }
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
          jp: 'はい、私は学生です。', romaji: 'Hai, watashi wa gakusei desu.', vn: 'Vâng, tôi là sinh viên.',
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'はい、田中です。', romaji: 'Hai, Tanaka desu.', vn: 'Vâng, tôi là Tanaka.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        },
        {
          jp: 'はい、わかりました。', romaji: 'Hai, wakarimashita.', vn: 'Vâng, tôi hiểu rồi.',
          furigana: []
        },
        {
          jp: 'はい、日本人です。', romaji: 'Hai, Nihonjin desu.', vn: 'Vâng, tôi là người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        }
      ]
    },
    {
      word: 'いいえ', kanji: '', romaji: 'iie', mean: 'Không',
      examples: [
        {
          jp: 'いいえ、違います。', romaji: 'Iie, chigaimasu.', vn: 'Không, không phải.',
          furigana: [{ kanji: '違', reading: 'ちが', meaning: 'VI' }]
        },
        {
          jp: 'いいえ、学生じゃありません。', romaji: 'Iie, gakusei ja arimasen.', vn: 'Không, tôi không phải sinh viên.',
          furigana: [{ kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        },
        {
          jp: 'いいえ、日本人じゃありません。', romaji: 'Iie, Nihonjin ja arimasen.', vn: 'Không, tôi không phải người Nhật.',
          furigana: [{ kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }]
        },
        {
          jp: 'いいえ、会社員です。', romaji: 'Iie, kaishain desu.', vn: 'Không, tôi là nhân viên công ty.',
          furigana: [{ kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }]
        },
        {
          jp: 'いいえ、田中さんじゃありません。', romaji: 'Iie, Tanaka-san ja arimasen.', vn: 'Không, đó không phải anh Tanaka.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
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
          jp: '失礼ですが、お名前は？', romaji: 'Shitsurei desu ga, onamae wa?', vn: 'Xin lỗi, tên của bạn là gì?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }]
        },
        {
          jp: '失礼ですが、おいくつですか。', romaji: 'Shitsurei desu ga, oikutsu desu ka.', vn: 'Xin lỗi, bạn bao nhiêu tuổi ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        },
        {
          jp: '失礼ですが、どなたですか。', romaji: 'Shitsurei desu ga, donata desu ka.', vn: 'Xin lỗi, ngài là ai ạ?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }]
        },
        {
          jp: '失礼ですが、ベトナム人ですか。', romaji: 'Shitsurei desu ga, Betonamujin desu ka.', vn: 'Xin lỗi, bạn có phải là người Việt Nam không?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }]
        },
        {
          jp: '失礼ですが、田中さんですか。', romaji: 'Shitsurei desu ga, Tanaka-san desu ka.', vn: 'Xin lỗi, bạn có phải là anh Tanaka không?',
          furigana: [{ kanji: '失礼', reading: 'しつれい', meaning: 'THẤT LỄ' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }]
        }
      ]
    },
    {
      word: 'おなまえは？', kanji: 'お名前は？', romaji: 'onamae wa?', mean: 'Tên anh/chị là gì?',
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
          jp: '初めまして。', romaji: 'Hajimemashite.', vn: 'Rất hân hạnh được gặp bạn.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: '初めまして。ミラーです。', romaji: 'Hajimemashite. Miraa desu.', vn: 'Rất hân hạnh được gặp bạn. Tôi là Miller.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }]
        },
        {
          jp: '初めまして。どうぞよろしくお願いします。', romaji: 'Hajimemashite. Douzo yoroshiku onegaishimasu.', vn: 'Rất hân hạnh được gặp bạn. Mong được giúp đỡ.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '初めまして。ベトナムから来ました。', romaji: 'Hajimemashite. Betonamu kara kimashita.', vn: 'Rất hân hạnh được gặp bạn. Tôi đến từ Việt Nam.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '来', reading: 'き', meaning: 'LAI' }]
        },
        {
          jp: '初めまして。学生です。', romaji: 'Hajimemashite. Gakusei desu.', vn: 'Rất hân hạnh được gặp bạn. Tôi là sinh viên.',
          furigana: [{ kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }]
        }
      ]
    },
    { word: 'どうぞよろしく', kanji: '', romaji: 'douzo yoroshiku', mean: 'Rất mong được sự giúp đỡ' },
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
          jp: 'どうぞよろしくお願いします。', romaji: 'Douzo yoroshiku onegaishimasu.', vn: 'Rất mong nhận được sự giúp đỡ.',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '田中です。よろしくお願いします。', romaji: 'Tanaka desu. Yoroshiku onegaishimasu.', vn: 'Tôi là Tanaka. Mong được giúp đỡ.',
          furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: 'これからよろしくお願いします。', romaji: 'Korekara yoroshiku onegaishimasu.', vn: 'Từ nay mong được giúp đỡ.',
          furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: 'ミラーと申します。よろしくお願いします。', romaji: 'Miraa to moushimasu. Yoroshiku onegaishimasu.', vn: 'Tôi tên là Miller. Mong được giúp đỡ.',
          furigana: [{ kanji: '申', reading: 'もう', meaning: 'THÂN' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        },
        {
          jp: '明日からよろしくお願いします。', romaji: 'Ashita kara yoroshiku onegaishimasu.', vn: 'Từ ngày mai mong được giúp đỡ.',
          furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }, { kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }]
        }
      ]
    },
    { word: 'こちらは～さんです', kanji: '', romaji: 'kochira wa ~san desu', mean: 'Đây là anh/chị/ông/bà ~' },
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
        }
      ]
    },

    // Quốc gia
    { word: 'アメリカ', kanji: '', romaji: 'Amerika', mean: 'Mỹ' },
    { word: 'イギリス', kanji: '', romaji: 'Igirisu', mean: 'Anh' },
    { word: 'イタリア', kanji: '', romaji: 'Itaria', mean: 'Ý' },
    { word: 'イラン', kanji: '', romaji: 'Iran', mean: 'Iran' },
    { word: 'インド', kanji: '', romaji: 'Indo', mean: 'Ấn Độ' },
    { word: 'インドネシア', kanji: '', romaji: 'Indoneshia', mean: 'Indonesia' },
    { word: 'エジプト', kanji: '', romaji: 'Ejiputo', mean: 'Ai Cập' },
    { word: 'オーストラリア', kanji: '', romaji: 'Oosutoraria', mean: 'Úc' },
    { word: 'カナダ', kanji: '', romaji: 'Kanada', mean: 'Canada' },
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
        }
      ]
    },
    { word: 'サウジアラビア', kanji: '', romaji: 'Saujiarabia', mean: 'Ả-rập Xê-út' },
    { word: 'シンガポール', kanji: '', romaji: 'Shingapooru', mean: 'Singapore' },
    { word: 'スペイン', kanji: '', romaji: 'Supein', mean: 'Tây Ban Nha' },
    { word: 'タイ', kanji: '', romaji: 'Tai', mean: 'Thái Lan' },
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
        }
      ]
    },
    { word: 'ドイツ', kanji: '', romaji: 'Doitsu', mean: 'Đức' },
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
          furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '文化', reading: 'ぶんか', meaning: 'VĂN HÓA' }, { kanji: '興味', reading: 'きょうmi', meaning: 'HỨNG VỊ' }]
        }
      ]
    },
    { word: 'フランス', kanji: '', romaji: 'Furansu', mean: 'Pháp' },
    { word: 'フィリピン', kanji: '', romaji: 'Firipin', mean: 'Philippines' },
    { word: 'ブラジル', kanji: '', romaji: 'Burajiru', mean: 'Brazil' },
    { word: 'ベトナム', kanji: '', romaji: 'Betonamu', mean: 'Việt Nam' },
    { word: 'マレーシア', kanji: '', romaji: 'Mareeshia', mean: 'Malaysia' },
    { word: 'メキシコ', kanji: '', romaji: 'Mekishiko', mean: 'Mexico' },
    { word: 'ロシア', kanji: '', romaji: 'Roshia', mean: 'Nga' },

    // Người (quốc tịch)
    { word: 'アメリカじん', kanji: 'アメリカ人', romaji: 'Amerikajin', mean: 'Người Mỹ' },
    { word: 'イギリスじん', kanji: 'イギリス人', romaji: 'Igirisujin', mean: 'Người Anh' },
    { word: 'イタリアじん', kanji: 'イタリア人', romaji: 'Itariajin', mean: 'Người Ý' },
    { word: 'イランじん', kanji: 'イラン人', romaji: 'Iranjin', mean: 'Người Iran' },
    { word: 'インドじん', kanji: 'インド人', romaji: 'Indojin', mean: 'Người Ấn Độ' },
    { word: 'インドネシアじん', kanji: 'インドネシア人', romaji: 'Indoneshiajin', mean: 'Người Indonesia' },
    { word: 'エジプトじん', kanji: 'エジプト人', romaji: 'Ejiputojin', mean: 'Người Ai Cập' },
    { word: 'オーストラリアじん', kanji: 'オーストラリア人', romaji: 'Oosutoraraiajin', mean: 'Người Úc' },
    { word: 'カナダじん', kanji: 'カナダ人', romaji: 'Kanadajin', mean: 'Người Canada' },
    { word: 'かんこくじん', kanji: '韓国人', romaji: 'Kankokujin', mean: 'Người Hàn Quốc' },
    { word: 'サウジアラビアじん', kanji: 'サウジアラビア人', romaji: 'Saujiarabiajin', mean: 'Người Ả-rập Xê-út' },
    { word: 'シンガポールじん', kanji: 'シンガポール人', romaji: 'Shingapoorujin', mean: 'Người Singapore' },
    { word: 'スペインじん', kanji: 'スペイン人', romaji: 'Supeinjin', mean: 'Người Tây Ban Nha' },
    { word: 'タイじん', kanji: 'タイ人', romaji: 'Taijin', mean: 'Người Thái Lan' },
    { word: 'ちゅうごくじん', kanji: '中国人', romaji: 'Chuugokujin', mean: 'Người Trung Quốc' },
    { word: 'ドイツじん', kanji: 'ドイツ人', romaji: 'Doitsujin', mean: 'Người Đức' },
    { word: 'にほんじん', kanji: '日本人', romaji: 'Nihonjin', mean: 'Người Nhật' },
    { word: 'フランスじん', kanji: 'フランス人', romaji: 'Furansujin', mean: 'Người Pháp' },
    { word: 'フィリピンじん', kanji: 'フィリピン人', romaji: 'Firipinjin', mean: 'Người Philippines' },
    { word: 'ブラジルじん', kanji: 'ブラジル人', romaji: 'Burajirujin', mean: 'Người Brazil' },
    { word: 'ベトナムじん', kanji: 'ベトナム人', romaji: 'Betonamujin', mean: 'Người Việt Nam' },
    { word: 'マレーシアじん', kanji: 'マレーシア人', romaji: 'Mareeshiajin', mean: 'Người Malaysia' },
    { word: 'メキシコじん', kanji: 'メキシコ人', romaji: 'Mekishikojin', mean: 'Người Mexico' },
    { word: 'ロシアじん', kanji: 'ロシア人', romaji: 'Roshiagin', mean: 'Người Nga' },

    // Ngôn ngữ
    {
      word: 'えいご', kanji: '英語', romaji: 'Eigo', mean: 'Tiếng Anh',
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
          examples: ['英語 (えいご) - tiếng Anh', '英国 (えいこk) - nước Anh'],
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
    { word: 'ITALIAご', kanji: 'イタリア語', romaji: 'Itariago', mean: 'Tiếng Ý' },
    { word: 'ペルシャご', kanji: 'ペルシャ語', romaji: 'Perushago', mean: 'Tiếng Ba Tư' },
    { word: 'ヒンディーご', kanji: 'ヒンディー語', romaji: 'Hindiigo', mean: 'Tiếng Hin-di' },
    { word: 'インドネシアご', kanji: 'インドネシア語', romaji: 'Indoneshiago', mean: 'Tiếng Indonesia' },
    { word: 'アラビアご', kanji: 'アラビア語', romaji: 'Arabiago', mean: 'Tiếng Ả-rập' },
    { word: 'フランスご', kanji: 'フランス語', romaji: 'Furansugo', mean: 'Tiếng Pháp' },
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
        }
      ]
    },
    { word: 'スペインご', kanji: 'スペイン語', romaji: 'Supeingo', mean: 'Tiếng Tây Ban Nha' },
    { word: 'タイご', kanji: 'タイ語', romaji: 'Taigo', mean: 'Tiếng Thái' },
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
        }
      ]
    },
    { word: 'ドイツご', kanji: 'ドイツ語', romaji: 'Doitsugo', mean: 'Tiếng Đức' },
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
        }
      ]
    },
    { word: 'フィリピンご', kanji: 'フィリピン語', romaji: 'Firipingo', mean: 'Tiếng Philippines' },
    { word: 'ポルトガルご', kanji: 'ポルトガル語', romaji: 'Porutogarugo', mean: 'Tiếng Bồ Đào Nha' },
    { word: 'ベトナムご', kanji: 'ベトナム語', romaji: 'Betonamugo', mean: 'Tiếng Việt' },
    { word: 'マレーシアご', kanji: 'マレーシア語', romaji: 'Mareeshiago', mean: 'Tiếng Mã Lai' },
    { word: 'ロシアご', kanji: 'ロシア語', romaji: 'Roshiago', mean: 'Tiếng Nga' },

    // Tên riêng (giả tưởng)
    { word: 'さくらだいがく', kanji: 'さくら大学', romaji: 'Sakura Daigaku', mean: 'Đại học Sakura (tên trường giả tưởng)' },
    {
      word: 'ふじだいがく', kanji: '富士大学', romaji: 'Fuji Daigaku', mean: 'Đại học Fuji (tên trường giả tưởng)',
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
      ],
      examples: [
        {
          jp: '富士大学は日本の大学です。', romaji: 'Fuji Daigaku wa Nihon no daigaku desu.', vn: 'Đại học Fuji là một trường đại học của Nhật Bản.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }]
        },
        {
          jp: '富士大学で勉強します。', romaji: 'Fuji Daigaku de benkyou shimasu.', vn: 'Tôi học tại đại học Fuji.',
          furigana: [{ kanji: '富士大学', reading: 'ふじだいがく', meaning: 'PHÚ SĨ ĐẠI HỌC' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }]
        }
      ]
    },
    { word: 'IMC', kanji: '', romaji: 'IMC', mean: 'Tên công ty (giả tưởng)' },
    { word: 'パワーでんき', kanji: 'パワー電気', romaji: 'Pawaa Denki', mean: 'Công ty Power Điện khí (giả tưởng)' },
    { word: 'ブラジルエアー', kanji: '', romaji: 'Burajiru Eaa', mean: 'Hãng hàng không Brazil (giả tưởng)' },
    { word: 'AKC', kanji: '', romaji: 'AKC', mean: 'Tên tổ chức (giả tưởng)' },
    {
      word: 'こうべびょういん', kanji: '神戸病院', romaji: 'Koube Byouin', mean: 'Bệnh viện Kobe (giả tưởng)',
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
      ],
      examples: [
        {
          jp: '神戸病院は大きな病院です。', romaji: 'Koube Byouin wa ookina byouin desu.', vn: 'Bệnh viện Kobe là một bệnh viện lớn.',
          furigana: [{ kanji: '神戸', reading: 'こうべ', meaning: 'THẦN HỘ' }, { kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }]
        },
        {
          jp: '神戸病院へ行きます。', romaji: 'Koube Byouin e ikimasu.', vn: 'Tôi đi đến bệnh viện Kobe.',
          furigana: [{ kanji: '神戸', reading: 'こうべ', meaning: 'THẦN HỘ' }, { kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }]
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
        { jp: '私は学生です。', vn: 'Tôi là sinh viên.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }], image: '/placeholder.svg' },
        { jp: '田中さんは先生です。', vn: 'Anh Tanaka là giáo viên.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }], image: '/placeholder.svg' },
        { jp: '山田さんは医者です。', vn: 'Anh Yamada là bác sĩ.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }], image: '/placeholder.svg' },
        { jp: 'ミラーさんはアメリカ人です。', vn: 'Anh Miller là người Mỹ.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }], image: '/placeholder.svg' },
        { jp: '佐藤さんは会社員です。', vn: 'Anh Satou là nhân viên công ty.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }], image: '/placeholder.svg' },
        { jp: 'あの人はエンジニアです。', vn: 'Người kia là kỹ sư.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }], image: '/placeholder.svg' },
        { jp: '私は日本人です。', vn: 'Tôi là người Nhật.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }], image: '/placeholder.svg' },
        { jp: 'キムさんは韓国人です。', vn: 'Chị Kim là người Hàn Quốc.', furigana: [{ kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }], image: '/placeholder.svg' },
        { jp: 'マリアさんはブラジル人です。', vn: 'Chị Maria là người Brazil.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }], image: '/placeholder.svg' },
        { jp: '私は銀行員です。', vn: 'Tôi là nhân viên ngân hàng.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'NGÂN HÀNG VIÊN' }], image: '/placeholder.svg' }
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

// Function to get lesson data by ID
export const getLessonData = (id: number): LessonDetail | null => {
  if (id === 1) {
    return lesson1Data;
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
