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
  imageUrl?: string; // Ảnh minh họa cho Kanji
  examples?: string[]; // Từ vựng ví dụ
  exampleSentences?: VocabularyExample[]; // Câu ví dụ dùng Kanji này
}

export interface VocabularyItem {
  word: string;
  kanji: string;
  romaji: string;
  mean: string;
  image?: string;
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
  { id: 1, title: "Giới thiệu", description: "Học cách giới thiệu bản thân" },
  { id: 2, title: "Đồ vật xung quanh", description: "Học về các đồ vật gần xa" },
  { id: 3, title: "Mua sắm", description: "Hỏi giá, mua bán" },
  { id: 4, title: "Thời gian", description: "Giờ giấc, ngày tháng" },
  { id: 5, title: "Di chuyển", description: "Đi lại bằng phương tiện" },
  { id: 6, title: "Hành động", description: "Các hoạt động thường ngày" },
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
  title: "Giới thiệu",
  vocabulary: [
    // Đại từ nhân xưng
    {
      word: 'わたし', kanji: '私', romaji: 'watashi', mean: 'Tôi', image: "/images/vocabulary/lesson1/watashi.png",
      kanjiDetails: [
        {
          kanji: '私',
          onyomi: 'シ (shi)',
          kunyomi: 'わたくし (watakushi), わたし (watashi)',
          meaning: 'Tôi, riêng tư',
          imageUrl: '/images/kanji/20_me_3d.png',
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
      word: 'わたしたち', kanji: '私たち', romaji: 'watashitachi', mean: 'Chúng tôi, chúng ta', image: "/images/vocabulary/lesson1/watashitachi.png",
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
      word: 'あなた', kanji: '', romaji: 'anata', mean: 'Anh/chị, ông/bà, bạn (ngôi thứ II số ít)', image: "/images/vocabulary/lesson1/anata.png",
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
      word: 'あのひと', kanji: 'あの人', romaji: 'ano hito', mean: 'Người kia, người đó', image: "/images/vocabulary/lesson1/anohito.png",
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
          imageUrl: '/images/kanji/11_person_3d.png',
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
      word: 'あのかた', kanji: 'あの方', romaji: 'ano kata', mean: 'Người kia, người đó (lịch sự)', image: "/images/vocabulary/lesson1/anokata.png",
      kanjiDetails: [
        {
          kanji: '方',
          onyomi: 'ホウ (hou)',
          kunyomi: 'かた (kata)',
          meaning: 'Hướng, vị, người (lịch sự)',
          imageUrl: '/images/kanji/129_direction_3d.png',
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
      word: 'みなさん', kanji: '皆さん', romaji: 'minasan', mean: 'Các anh chị, các ông bà, các bạn, quý vị', image: "/images/vocabulary/lesson1/minasan.png",
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
          imageUrl: '/images/kanji/minasan_3d.png',
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
      word: '～さん', kanji: '', romaji: '~san', mean: 'Anh, chị, ông, bà (hậu tố lịch sự)', image: "/images/vocabulary/lesson1/suffix_san.png",
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
      word: '～ちゃん', kanji: '', romaji: '~chan', mean: 'Hậu tố thêm vào sau tên của trẻ em', image: "/images/vocabulary/lesson1/suffix_chan.png",
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
      word: '～くん', kanji: '～君', romaji: '~kun', mean: 'Hậu tố thêm vào sau tên của em trai', image: "/images/vocabulary/lesson1/suffix_kun.png",
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
          imageUrl: '/images/kanji/kun_suffix_3d.png',
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
      word: '～じん', kanji: '～人', romaji: '~jin', mean: 'Người (nước) ~; ví dụ: アメリカじん - người Mỹ', image: "/images/vocabulary/lesson1/suffix_jin.png",
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
          imageUrl: '/images/kanji/19_before_3d.png',
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
          imageUrl: '/images/kanji/18_life_3d.png',
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
          imageUrl: '/images/kanji/201_teach_3d.png',
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
          imageUrl: '/images/kanji/shi_master_3d.png',
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
          imageUrl: '/images/kanji/75_meet_3d.png',
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
          imageUrl: '/images/kanji/sha_company_3d.png',
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
          imageUrl: '/images/kanji/in_member_3d.png',
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
          imageUrl: '/images/kanji/in_member_3d.png',
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
          imageUrl: '/images/kanji/i_medicine_3d.png',
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
          components: [{ char: '耂', meaning: 'người già' }, { char: '日', meaning: 'mặt trời/ngày' }],
          imageUrl: '/images/kanji/sha_person_3d.png',
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
          imageUrl: '/images/kanji/ken_research_3d.png',
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
          imageUrl: '/images/kanji/kyu_research_3d.png',
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
          imageUrl: '/images/kanji/sha_person_3d.png',
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
          imageUrl: '/images/kanji/dai_big_3d.png',
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
          imageUrl: '/images/kanji/gaku_study_3d.png',
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
          imageUrl: '/images/kanji/byou_illness_3d.png',
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
          imageUrl: '/images/kanji/in_institution_3d.png',
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
          imageUrl: '/images/kanji/den_electricity_3d.png',
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
          imageUrl: '/images/kanji/ki_spirit_3d.png',
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
          imageUrl: '/images/kanji/sai_age_3d.png',
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
          kanji: '手', onyomi: 'シュ (shu)', kunyomi: 'て (te)', meaning: 'Tay', sinoVietnamese: 'THỦ', strokes: 4, jlpt: 'N5', radicals: '手 (thủ)', mnemonic: 'Hình ảnh bàn tay với các ngón tay.',
          examples: ['手 (て) - Tay', '切手 (きって) - Tem', '手紙 (てがみ) - Thư'],
          exampleSentences: [
            { jp: '手を洗います。', vn: 'Tôi rửa tay.', furigana: [{ kanji: '手', reading: 'て', meaning: 'THỦ' }, { kanji: '洗', reading: 'あら', meaning: 'TẨY' }] },
            { jp: '切手を買います。', vn: 'Tôi mua tem.', furigana: [{ kanji: '切手', reading: 'きって', meaning: 'THIẾT THỦ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
            { jp: '手紙を書きます。', vn: 'Tôi viết thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] }
          ]
        },
        {
          kanji: '帳', onyomi: 'チョウ (chou)', kunyomi: 'とばり (tobari)', meaning: 'Sổ ghi chép, bức màn', sinoVietnamese: 'TRƯƠNG', strokes: 11, jlpt: 'N1', radicals: '巾 (cân)', components: [{ char: '巾', meaning: 'khăn' }, { char: '長', meaning: 'dài' }], mnemonic: 'Cuộn sổ làm từ tấm khăn (巾) dài (長) gọi là Trương (帳).',
          examples: ['手帳 (てちょう) - Sổ tay', '通帳 (つうちょう) - Sổ ngân hàng'],
          exampleSentences: [
            { jp: '手帳にメモします。', vn: 'Ghi chú vào sổ tay.', furigana: [{ kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }] },
            { jp: '通帳を作ります。', vn: 'Làm sổ ngân hàng.', furigana: [{ kanji: '通帳', reading: 'つうちょう', meaning: 'THÔNG TRƯƠNG' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] }
          ]
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
          kanji: '鉛', onyomi: 'エン (en)', kunyomi: 'なまり (namari)', meaning: 'Chì', sinoVietnamese: 'DUYÊN', strokes: 13, jlpt: 'N1', radicals: '金 (kim)', components: [{ char: '金', meaning: 'kim loại' }, { char: '㕣', meaning: 'đầm nước' }], mnemonic: 'Kim loại (金) dùng ở đầm nước (㕣) là chì (鉛).',
          examples: ['鉛筆 (えんぴつ) - Bút chì', '亜鉛 (あえん) - Kẽm'],
          exampleSentences: [
            { jp: '鉛筆で書きます。', vn: 'Viết bằng bút chì.', furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
            { jp: '鉛筆を削ります。', vn: 'Gọt bút chì.', furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '削', reading: 'けず', meaning: 'TƯỚC' }] }
          ]
        },
        {
          kanji: '筆', onyomi: 'ヒツ (hitsu)', kunyomi: 'ふで (fude)', meaning: 'Bút', sinoVietnamese: 'BÚT', strokes: 12, jlpt: 'N3', radicals: '竹 (trúc)', components: [{ char: '竹', meaning: 'tre/trúc' }, { char: '聿', meaning: 'cây bút/tay cầm bút' }], mnemonic: 'Cây bút (聿) làm từ tre (竹) gọi là Bút (筆).',
          examples: ['筆 (ふで) - Bút lông', '鉛筆 (えんぴつ) - Bút chì', '筆記 (ひっき) - Ghi chép'],
          exampleSentences: [
            { jp: '筆で字を書きます。', vn: 'Viết chữ bằng bút lông.', furigana: [{ kanji: '筆', reading: 'ふで', meaning: 'BÚT' }, { kanji: '字', reading: 'じ', meaning: 'TỰ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
            { jp: '筆記試験があります。', vn: 'Có thi viết.', furigana: [{ kanji: '筆記試験', reading: 'ひっきしけん', meaning: 'BÚT KÝ THÍ NGHIỆM' }] }
          ]
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
          kanji: '鍵', onyomi: 'ケン (ken)', kunyomi: 'かぎ (kagi)', meaning: 'Chìa khóa', sinoVietnamese: 'KIỆN', strokes: 17, jlpt: 'N1', radicals: '金 (kim)', components: [{ char: '金', meaning: 'kim loại' }, { char: '建', meaning: 'xây dựng' }], mnemonic: 'Vật bằng kim loại (金) để khóa các công trình xây dựng (建) là chìa khóa (鍵).',
          examples: ['鍵 (かぎ) - Chìa khóa', '鍵盤 (けんばん) - Bàn phím'],
          exampleSentences: [
            { jp: '鍵をかけます。', vn: 'Khóa cửa.', furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }] },
            { jp: '鍵を開けます。', vn: 'Mở khóa.', furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }] },
            { jp: 'ピアノの鍵盤を叩きます。', vn: 'Gõ bàn phím piano.', furigana: [{ kanji: '鍵盤', reading: 'けんばん', meaning: 'KIỆN BÀN' }, { kanji: '叩', reading: 'たた', meaning: 'KHẤU' }] },
            { jp: '合鍵を作ります。', vn: 'Làm chìa khóa dự phòng.', furigana: [{ kanji: '合鍵', reading: 'あいかぎ', meaning: 'HỢP KIỆN' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] }
          ]
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
          kanji: '時', onyomi: 'ジ (ji)', kunyomi: 'とき (toki)', meaning: 'Thời gian, giờ', sinoVietnamese: 'THỜI', strokes: 10, jlpt: 'N5', radicals: '日 (nhật)', components: [{ char: '日', meaning: 'mặt trời' }, { char: '寺', meaning: 'chùa' }], mnemonic: 'Mặt trời (日) mọc trên mái chùa (寺) để báo hiệu thời (時) gian.',
          examples: ['時間 (じかん) - Thời gian', '一時 (いちじ) - 1 giờ', '時計 (とけい) - Đồng hồ'],
          exampleSentences: [
            { jp: '時間がありません。', vn: 'Không có thời gian.', furigana: [{ kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }] },
            { jp: '今、何時ですか。', vn: 'Bây giờ là mấy giờ?', furigana: [{ kanji: '今', reading: 'いま', meaning: 'KIM' }, { kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }] },
            { jp: '時には休みも必要です。', vn: 'Đôi khi nghỉ ngơi cũng cần thiết.', furigana: [{ kanji: '時', reading: 'とき', meaning: 'THỜI' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }, { kanji: '必要', reading: 'ひつよう', meaning: 'TẤT YẾU' }] }
          ]
        },
        {
          kanji: '計', onyomi: 'ケイ (kei)', kunyomi: 'はか.る (hakaru)', meaning: 'Kế hoạch, đo đạc', sinoVietnamese: 'KẾ', strokes: 9, jlpt: 'N4', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '十', meaning: 'số mười' }], mnemonic: 'Nói (言) mười (十) lời để lập kế (計) hoạch.',
          examples: ['計画 (けいかく) - Kế hoạch', '時計 (とけい) - Đồng hồ', '計算 (けいさん) - Tính toán'],
          exampleSentences: [
            { jp: '旅行の計画を立てます。', vn: 'Lập kế hoạch du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }, { kanji: '計画', reading: 'けいかく', meaning: 'KẾ HOẠCH' }, { kanji: '立', reading: 'た', meaning: 'LẬP' }] },
            { jp: '計算が速いです。', vn: 'Tính toán nhanh.', furigana: [{ kanji: '計算', reading: 'けいさん', meaning: 'KẾ TOÁN' }, { kanji: '速', reading: 'はや', meaning: 'TỐC' }] },
            { jp: '体温を計ります。', vn: 'Đo nhiệt độ cơ thể.', furigana: [{ kanji: '体温', reading: 'たいおん', meaning: 'THỂ ÔN' }, { kanji: '計', reading: 'はか', meaning: 'KẾ' }] }
          ]
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
      kanjiDetails: [
        {
          kanji: '車', onyomi: 'シャ (sha)', kunyomi: 'くるま (kuruma)', meaning: 'Xe cộ', sinoVietnamese: 'XA', strokes: 7, jlpt: 'N5', radicals: '車 (xa)', components: [{ char: '車', meaning: 'xe' }], mnemonic: 'Hình ảnh chiếc xe nhìn từ trên cao.',
          examples: ['電車 (でんしゃ) - Xe điện', '自転車 (じてんしゃ) - Xe đạp', '車 (くるま) - Ô tô'],
          exampleSentences: [
            { jp: '車で行きます。', vn: 'Tôi đi bằng ô tô.', furigana: [{ kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
          ]
        }
      ],
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
          kanji: '世', onyomi: 'セイ (sei), セ (se)', kunyomi: 'よ (yo)', meaning: 'Thế giới, đời người', sinoVietnamese: 'THẾ', strokes: 5, jlpt: 'N4', radicals: '一 (nhất)', components: [{ char: '廿', meaning: 'hai mươi' }, { char: '止', meaning: 'dừng' }], mnemonic: 'Ba mươi năm (卅) là một thế (世) hệ.',
          examples: ['世界 (せかい) - Thế giới', '世話 (せわ) - Chăm sóc, giúp đỡ', '世の中 (よのなか) - Đời, thế gian'],
          exampleSentences: [
            { jp: '世界中を旅行したいです。', vn: 'Tôi muốn du lịch vòng quanh thế giới.', furigana: [{ kanji: '世界中', reading: 'せかいじゅう', meaning: 'THẾ GIỚI TRUNG' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }] },
            { jp: 'お世話になりました。', vn: 'Cảm ơn đã giúp đỡ.', furigana: [{ kanji: '世話', reading: 'せわ', meaning: 'THẾ THOẠI' }] },
            { jp: '世の中は広いです。', vn: 'Thế gian rộng lớn.', furigana: [{ kanji: '世', reading: 'よ', meaning: 'THẾ' }, { kanji: '中', reading: 'なか', meaning: 'TRUNG' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }] }
          ]
        },
        {
          kanji: '話', onyomi: 'ワ (wa)', kunyomi: 'はな.す (hanasu), はなし (hanashi)', meaning: 'Nói chuyện, câu chuyện', sinoVietnamese: 'THOẠI', strokes: 13, jlpt: 'N5', radicals: '言 (ngôn)', components: [{ char: '言', meaning: 'lời nói' }, { char: '舌', meaning: 'cái lưỡi' }], mnemonic: 'Dùng lưỡi (舌) để phát ra lời nói (言) là Thoại (話).',
          examples: ['話す (はなす) - Nói chuyện', '話 (はなし) - Câu chuyện', '電話 (でんわ) - Điện thoại'],
          exampleSentences: [
            { jp: '先生と話します。', vn: 'Nói chuyện với giáo viên.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }] },
            { jp: '面白い話を聞きました。', vn: 'Đã nghe một câu chuyện thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }, { kanji: '話', reading: 'はなし', meaning: 'THOẠI' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
            { jp: '電話をかけてください。', vn: 'Hãy gọi điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] }
          ]
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
          kanji: '土', onyomi: 'ド (do), ト (to)', kunyomi: 'つち (tsuchi)', meaning: 'Đất', sinoVietnamese: 'THỔ', strokes: 3, jlpt: 'N5', radicals: '土 (thổ)', components: [{ char: '土', meaning: 'đất' }], mnemonic: 'Hình ảnh mầm cây mọc lên từ mặt đất.',
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
          kanji: '日', onyomi: 'ニチ (nichi), ジツ (jitsu)', kunyomi: 'ひ (hi), か (ka)', meaning: 'Mặt trời, ngày', sinoVietnamese: 'NHẬT', strokes: 4, jlpt: 'N5', radicals: '日 (nhật)', components: [{ char: '日', meaning: 'mặt trời' }], mnemonic: 'Hình ảnh mặt trời hình tròn với một vạch ở giữa.',
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
          kanji: '自', onyomi: 'ジ (ji), シ (shi)', kunyomi: 'みずか.ら (mizukara)', meaning: 'Tự mình, tự thân', sinoVietnamese: 'TỰ', strokes: 6, jlpt: 'N4', radicals: '自 (tự)', components: [{ char: '目', meaning: 'mắt' }], mnemonic: 'Chỉ tay vào mũi (gần mắt 目) để nói về chính mình (Tự).',
          examples: ['自分 (じぶん) - bản thân', '自由 (じゆう) - tự do'],
          exampleSentences: [
            { jp: '自分のことは自分でします。', vn: 'Việc của mình thì tự mình làm.', furigana: [{ kanji: '自分', reading: 'じぶん', meaning: 'TỰ PHÂN' }, { kanji: '自分', reading: 'じぶん', meaning: 'TỰ PHÂN' }] },
            { jp: '自由が好きです。', vn: 'Tôi thích tự do.', furigana: [{ kanji: '自由', reading: 'じゆう', meaning: 'TỰ DO' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
            { jp: '自転車に乗ります。', vn: 'Tôi đi xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
            { jp: '自動ドアが開きます。', vn: 'Cửa tự động mở.', furigana: [{ kanji: '自動', reading: 'じどう', meaning: 'TỰ ĐỘNG' }, { kanji: '開', reading: 'あ', meaning: 'KHAI' }] },
            { jp: '自信があります。', vn: 'Tôi có tự tin.', furigana: [{ kanji: '自信', reading: 'じしん', meaning: 'TỰ TÍN' }] }
          ]
        },
        {
          kanji: '動', onyomi: 'ドウ (dou)', kunyomi: 'うご.く (ugoku)', meaning: 'Di chuyển, hoạt động', sinoVietnamese: 'ĐỘNG', strokes: 11, jlpt: 'N4', radicals: '力 (lực)', components: [{ char: '重', meaning: 'nặng' }, { char: '力', meaning: 'sức lực' }], mnemonic: 'Dùng sức lực (力) để di chuyển vật nặng (重) là Động (動).',
          examples: ['動物 (どうぶつ) - động vật', '運動 (うんどう) - vận động'],
          exampleSentences: [
            { jp: '動物園へ行きます。', vn: 'Tôi đi sở thú.', furigana: [{ kanji: '動物園', reading: 'どうぶつえん', meaning: 'ĐỘNG VẬT VIÊN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '運動靴を履きます。', vn: 'Tôi đi giày thể thao.', furigana: [{ kanji: '運動靴', reading: 'うんどうぐつ', meaning: 'VẬN ĐỘNG OA' }, { kanji: '履', reading: 'は', meaning: 'LÍ' }] },
            { jp: '心が動きます。', vn: 'Trái tim rung động.', furigana: [{ kanji: '心', reading: 'こころ', meaning: 'TÂM' }, { kanji: '動', reading: 'うご', meaning: 'ĐỘNG' }] },
            { jp: '自動車が動きます。', vn: 'Ô tô chuyển động.', furigana: [{ kanji: '自動車', reading: 'じどうしゃ', meaning: 'TỰ ĐỘNG XA' }, { kanji: '動', reading: 'うご', meaning: 'ĐỘNG' }] },
            { jp: '動画を見ます。', vn: 'Tôi xem video.', furigana: [{ kanji: '動画', reading: 'どうが', meaning: 'ĐỘNG HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] }
          ]
        },
        {
          kanji: '車', onyomi: 'シャ (sha)', kunyomi: 'くるま (kuruma)', meaning: 'Xe cộ', sinoVietnamese: 'XA', strokes: 7, jlpt: 'N5', radicals: '車 (xa)', components: [{ char: '車', meaning: 'xe' }], mnemonic: 'Hình ảnh chiếc xe nhìn từ trên cao.',
          examples: ['電車 (でんしゃ) - xe điện', '自転車 (じてんしゃ) - xe đạp'],
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
          kanji: '佐', onyomi: 'サ (sa)', kunyomi: '', meaning: 'Phò tá, trợ giúp', sinoVietnamese: 'TÁ', strokes: 7, jlpt: 'N1', radicals: '人 (nhân)', components: [{ char: '亻', meaning: 'người' }, { char: '左', meaning: 'trái' }], mnemonic: 'Người (亻) đứng bên trái (左) để phò tá.',
          examples: ['補佐 (ほさ) - bổ tá/trợ lý'],
          exampleSentences: [
            { jp: '佐藤さんは親切です。', vn: 'Anh Sato tốt bụng.', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }] },
            { jp: '補佐官になります。', vn: 'Tôi trở thành trợ lý.', furigana: [{ kanji: '補佐官', reading: 'ほさかん', meaning: 'BỔ TÁ QUAN' }] },
            { jp: '大佐に会いました。', vn: 'Tôi đã gặp đại tá.', furigana: [{ kanji: '大佐', reading: 'たいさ', meaning: 'ĐẠI TÁ' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
            { jp: '佐渡島へ行きます。', vn: 'Tôi đi đảo Sado.', furigana: [{ kanji: '佐渡島', reading: 'さどがしま', meaning: 'TÁ ĐỘ ĐẢO' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
            { jp: '宇佐神宮へ参拝します。', vn: 'Tôi đi viếng đền Usa.', furigana: [{ kanji: '宇佐神宮', reading: 'うさじんぐう', meaning: 'VŨ TÁ THẦN CUNG' }, { kanji: '参拝', reading: 'さんぱい', meaning: 'THAM BÁI' }] }
          ]
        },
        {
          kanji: '藤', onyomi: 'トウ (tou), ドウ (dou)', kunyomi: 'ふじ (fuji)', meaning: 'Hoa tử đằng', sinoVietnamese: 'ĐẰNG', strokes: 18, jlpt: 'N1', radicals: '艸 (thảo)', components: [{ char: '艹', meaning: 'cỏ' }, { char: '月', meaning: 'trăng/thịt' }, { char: '𲃮', meaning: 'nước dâng' }], mnemonic: 'Hoa tử đằng (艹) rủ xuống đẹp như ánh trăng (月) phản chiếu mặt nước.',
          examples: ['藤 (ふじ) - hoa tử đằng', '葛藤 (かっとう) - cát đằng/xung đột'],
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
  grammar: [
    {
      pattern: 'これ／それ／あれ',
      explanation: '「これ」「それ」và「あれ」là những đại từ chỉ thị. Về mặt ngữ pháp chúng được dùng như những danh từ.\n\n- 「これ」: dùng để chỉ một vật ở gần người nói.\n- 「それ」: dùng để chỉ một vật ở gần người nghe.\n- 「あれ」: dùng để chỉ một vật ở xa cả người nói và người nghe.',
      example: 'それは辞書ですか。',
      examples: [
        { jp: 'それは辞書ですか。', vn: 'Đó có phải là quyển từ điển không?', furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }] },
        { jp: 'これは本です。', vn: 'Đây là quyển sách.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
        { jp: 'あれは時計です。', vn: 'Kia là cái đồng hồ.', furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }] },
        { jp: 'それは私の傘です。', vn: 'Đó là cái ô của tôi.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }] },
        { jp: 'これは何ですか。', vn: 'Đây là cái gì?', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: 'あれは病院です。', vn: 'Kia là bệnh viện.', furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }] },
        { jp: 'これはとテレホンカードです。', vn: 'Đây là thẻ điện thoại.', furigana: [{ kanji: 'テレホンカード', reading: 'てれほんかーど', meaning: 'THẺ ĐIỆN THOẠI' }] },
        { jp: 'それはボールペンですか。', vn: 'Đó có phải là bút bi không?', furigana: [{ kanji: 'ボールペン', reading: 'ぼーるぺん', meaning: 'BÚT BI' }] },
        { jp: 'あれは誰の鞄ですか。', vn: 'Kia là cặp của ai?', furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }] },
        { jp: 'これをください。', vn: 'Cho tôi cái này.', furigana: [] }
      ]
    },
    {
      pattern: 'この N／その N／あの N',
      explanation: '「この」「その」và「あの」bổ nghĩa cho danh từ.\n\n- 「この N」: nói tới một vật/người ở gần người nói.\n- 「その N」: nói tới một vật/người ở gần người nghe.\n- 「あの N」: nói tới một vật/người ở xa cả hai.',
      example: 'この本はわたしのです。',
      examples: [
        { jp: 'この本は私のです。', vn: 'Quyển sách này là của tôi.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }] },
        { jp: 'その鞄は田中さんのです。', vn: 'Cái cặp đó là của anh Tanaka.', furigana: [{ kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }, { kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }] },
        { jp: 'あの人は誰ですか。', vn: 'Người kia là ai?', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }] },
        { jp: 'この鍵は鈴木さんのです。', vn: 'Chìa khóa này là của anh Suzuki.', furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }] },
        { jp: 'その時計はいいですね。', vn: 'Cái đồng hồ đó đẹp nhỉ.', furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }] },
        { jp: 'あのカメラは高いですか。', vn: 'Cái máy ảnh kia có đắt không?', furigana: [{ kanji: '高', reading: 'たか', meaning: 'CAO' }] },
        { jp: 'この辞書は便利です。', vn: 'Cuốn từ điển này tiện lợi.', furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }] },
        { jp: 'その傘を貸してください。', vn: 'Hãy cho tôi mượn cái ô đó.', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '貸', reading: 'か', meaning: 'THẢI' }] },
        { jp: 'あの方を知っていますか。', vn: 'Bạn có biết vị kia không?', furigana: [{ kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }, { kanji: '知', reading: 'し', meaning: 'TRI' }] },
        { jp: 'この鉛筆は誰のですか。', vn: 'Cây bút chì này là của ai?', furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }] }
      ]
    },
    {
      pattern: 'そうです／そうじゃありません',
      explanation: 'Được dùng trong câu nghi vấn danh từ để xác nhận xem nội dung nào đó là đúng hay sai.\n\n- Đúng: 「はい、そうです。」\n- Sai: 「いいえ、そうじゃありません。」 hoặc 「いいえ、ちがいます。」',
      example: 'それはテレホンカードですか。',
      examples: [
        { jp: 'はい、そうです。', vn: 'Vâng, đúng vậy.', furigana: [] },
        { jp: 'いいえ、そうじゃありません。', vn: 'Không, không phải vậy.', furigana: [] },
        { jp: 'それは辞書ですか。いいえ、そうじゃありません。', vn: 'Đó là từ điển phải không? Không, không phải.', furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }] },
        { jp: 'あれは田中さんの本ですか。はい、そうです。', vn: 'Kia là sách của anh Tanaka phải không? Vâng, đúng vậy.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
        { jp: 'これは鍵ですか。いいえ、違います。', vn: 'Đây là chìa khóa phải không? Không, không phải.', furigana: [{ kanji: '鍵', reading: 'かぎ', meaning: 'KIỆN' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }] },
        { jp: 'その人は先生ですか。いいえ、そうじゃありません。', vn: 'Người đó là giáo viên phải không? Không, không phải.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: 'それはシャープペンシルですか。はい、そうです。', vn: 'Đó là bút chì kim phải không? Vâng, đúng vậy.', furigana: [] },
        { jp: 'あれは病院ですか。いいえ、違います。学校です。', vn: 'Kia là bệnh viện phải không? Không, không phải. Là trường học.', furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }, { kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] },
        { jp: 'この傘はあなたのですか。はい、そうです。', vn: 'Cái ô này là của bạn phải không? Vâng, đúng vậy.', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }] },
        { jp: 'それは新聞ですか。いいえ、雑誌です。', vn: 'Đó là báo phải không? Không, là tạp chí.', furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }] }
      ]
    },
    {
      pattern: 'Câu 1 か、Câu 2 か',
      explanation: 'Mẫu câu nghi vấn này dùng để hỏi về sự lựa chọn của người nghe. Người nghe sẽ lựa chọn Câu 1 hoặc Câu 2 để trả lời (không dùng 「はい」 hay 「いいえ」).',
      example: 'これは「９」ですか、「７」ですか。',
      examples: [
        { jp: 'これは９ですか、７ですか。', vn: 'Đây là số 9 hay số 7?', furigana: [] },
        { jp: 'きょうは水曜日ですか、木曜日ですか。', vn: 'Hôm nay là thứ tư hay thứ năm?', furigana: [{ kanji: '水曜日', reading: 'すいようび', meaning: 'THỦY DIỆU NHẬT' }, { kanji: '木曜日', reading: 'もくようび', meaning: 'MỘC DIỆU NHẬT' }] },
        { jp: 'それは鉛筆ですか、ボールペンですか。', vn: 'Đó là bút chì hay bút bi?', furigana: [{ kanji: '鉛筆', reading: 'えんぴつ', meaning: 'DUYÊN BÚT' }] },
        { jp: 'あの人は日本人ですか、韓国人ですか。', vn: 'Người kia là người Nhật hay người Hàn?', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '韓国人', reading: 'かんこくじん', meaning: 'HÀN QUỐC NHÂN' }] },
        { jp: 'これは「あ」ですか、「お」ですか。', vn: 'Đây là chữ "a" hay chữ "o"?', furigana: [] },
        { jp: 'それは新聞ですか、雑誌ですか。', vn: 'Đó là báo hay tạp chí?', furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }] },
        { jp: 'これは本ですか、ノートですか。', vn: 'Đây là sách hay vở?', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
        { jp: '林さんはエンジニアですか、医者ですか。', vn: 'Anh Hayashi là kỹ sư hay bác sĩ?', furigana: [{ kanji: '林', reading: 'はやし', meaning: 'LÂM' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: 'それはお茶ですか、コーヒーですか。', vn: 'Đó là trà hay cà phê?', furigana: [{ kanji: '茶', reading: 'ちゃ', meaning: 'TRÀ' }] },
        { jp: 'あれは学校ですか、会社ですか。', vn: 'Kia là trường học hay công ty?', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }] }
      ]
    },
    {
      pattern: 'N1 の N2',
      explanation: 'Ở bài 1, chúng ta đã học từ 「の」 dùng để nối hai danh từ. Ở bài này chúng ta sẽ học thêm hai cách dùng khác:\n\n1. N1 giải thích N2 nói về cái gì.\n2. N1 giải thích N2 thuộc sở hữu của ai.\n\n*Lưu ý:* Danh từ thường được giản lược trong trường hợp đã rõ nghĩa (N2 bị lược bỏ). Tuy nhiên, nếu N2 là danh từ chỉ người thì không giản lược được.',
      example: 'これはコンピューターの本です。',
      examples: [
        { jp: 'これはコンピューターの本です。', vn: 'Đây là sách về máy tính.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }] },
        { jp: 'それは私の傘です。', vn: 'Đó là cái ô của tôi.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '傘', reading: 'かさ', meaning: 'TẢN' }] },
        { jp: 'あれは田中さんの車です。', vn: 'Kia là xe của anh Tanaka.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }] },
        { jp: 'これは日本語の辞書です。', vn: 'Đây là từ điển tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }] },
        { jp: 'このノートは山田さんのです。', vn: 'Quyển vở này là của anh Yamada.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }] },
        { jp: 'それは何の雑誌ですか。', vn: 'Đó là tạp chí gì?', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }] },
        { jp: 'あれは誰の鞄ですか。', vn: 'Kia là cặp của ai?', furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '鞄', reading: 'かばん', meaning: 'BẠC' }] },
        { jp: 'ミラーさんはIMCの社員です。', vn: 'Anh Miller là nhân viên công ty IMC.', furigana: [{ kanji: '社員', reading: 'しゃいん', meaning: 'XÃ VIÊN' }] },
        { jp: 'これは英語の新聞です。', vn: 'Đây là báo tiếng Anh.', furigana: [{ kanji: '英語', reading: 'えいご', meaning: 'ANH NGỮ' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }] },
        { jp: 'それは先生の机です。', vn: 'Đó là bàn của giáo viên.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '机', reading: 'つくえ', meaning: 'CƠ' }] }
      ]
    },
    {
      pattern: 'そうですか',
      explanation: 'Được dùng khi người nói tiếp nhận được thông tin mới nào đó và muốn bày tỏ thái độ tiếp nhận của mình đối với thông tin đó (Thế à / Vậy à).',
      example: 'この傘はあなたのですか。',
      examples: [
        { jp: '「この傘はあなたのですか。」「いいえ、違います。」「あ、そうですか。」', vn: '"Cái ô này là của bạn à?" "Không, không phải." "À, thế à."', furigana: [{ kanji: '傘', reading: 'かさ', meaning: 'TẢN' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }] },
        { jp: '「田中さんは先生ですか。」「いいえ、会社員です。」「そうですか。」', vn: '"Tanaka là giáo viên à?" "Không, là nhân viên công ty." "Thế à."', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '会社員', reading: 'かいしゃいん', meaning: 'HỘI XÃ VIÊN' }] },
        { jp: '「それは何ですか。」「手帳です。」「そうですか。」', vn: '"Đó là cái gì?" "Là sổ tay." "Vậy à."', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }, { kanji: '手帳', reading: 'てちょう', meaning: 'THỦ TRƯƠNG' }] },
        { jp: '「山田さんは学生じゃありません。」「あ、そうですか。」', vn: '"Yamada không phải là sinh viên." "À, thế à."', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '「あれは私の車です。」「そうですか。いいですね。」', vn: '"Kia là xe của tôi." "Vậy hả. Tốt quá nhỉ."', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }] },
        { jp: '「この辞書は便利ですね。」「そうですか。」', vn: '"Cuốn từ điển này tiện lợi nhỉ." "Thế à."', furigana: [{ kanji: '辞書', reading: 'じしょ', meaning: 'TỪ THƯ' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }] },
        { jp: '「佐藤さんは日本人ですか。」「いいえ、違います。」「そうですか。」', vn: '"Sato có phải người Nhật không?" "Không, không phải." "À vậy à."', furigana: [{ kanji: '佐藤', reading: 'さとう', meaning: 'TÁ ĐẰNG' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }, { kanji: '違', reading: 'ちが', meaning: 'VI' }] },
        { jp: '「これはお土産です。」「あ、そうですか。ありがとう。」', vn: '"Đây là quà lưu niệm." "A, vậy à. Cảm ơn."', furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }] },
        { jp: '「鈴木さんは医者です。」「そうですか。」', vn: '"Suzuki là bác sĩ." "Vâng, thế à."', furigana: [{ kanji: '鈴木', reading: 'すずき', meaning: 'LINH MỘC' }, { kanji: '医者', reading: 'いしゃ', meaning: 'Y GIẢ' }] },
        { jp: '「明日は休みです。」「あ、そうですか。」', vn: '"Ngày mai được nghỉ." "A, thế à."', furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }] }
      ]
    }
  ],
  kaiwa: [],
  quiz: []
};

// =================================================================================================
// BÀI 3 (LESSON 3)
// =================================================================================================

export const lesson3Data: LessonDetail = {
  id: 3,
  title: "Bài 3: Chỗ này, chỗ đó, chỗ kia",
  vocabulary: [
    {
      word: 'ここ', kanji: '', romaji: 'koko', mean: 'chỗ này, đây',
      examples: [{ jp: 'ここはお手洗いです。', romaji: 'Koko wa otearai desu.', vn: 'Đây là nhà vệ sinh.', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] }]
    },
    {
      word: 'そこ', kanji: '', romaji: 'soko', mean: 'chỗ đó, đó',
      examples: [{ jp: '電話はそこです。', romaji: 'Denwa wa soko desu.', vn: 'Điện thoại ở đó.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] }]
    },
    {
      word: 'あそこ', kanji: '', romaji: 'asoko', mean: 'chỗ kia, kia',
      examples: [{ jp: '事務所はあそこです。', romaji: 'Jimusho wa asoko desu.', vn: 'Văn phòng ở đằng kia.', furigana: [{ kanji: '事務所', reading: 'じむしょ', meaning: 'SỰ VỤ SỞ' }] }]
    },
    {
      word: 'どこ', kanji: '', romaji: 'doko', mean: 'chỗ nào, đâu',
      examples: [{ jp: 'お手洗いはどこですか。', romaji: 'Otearai wa doko desu ka.', vn: 'Nhà vệ sinh ở đâu?', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] }]
    },
    {
      word: 'こちら', kanji: '', romaji: 'kochira', mean: 'phía này, đằng này (lịch sự của ここ)',
      examples: [{ jp: 'こちらは田中さんです。', romaji: 'Kochira wa Tanaka-san desu.', vn: 'Đây là anh Tanaka.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }] }]
    },
    {
      word: 'そちら', kanji: '', romaji: 'sochira', mean: 'phía đó, đằng đó (lịch sự của そこ)',
      examples: [{ jp: 'そちらはエレベーターです。', romaji: 'Sochira wa erebe-ta- desu.', vn: 'Đằng đó là thang máy.', furigana: [] }]
    },
    {
      word: 'あちら', kanji: '', romaji: 'achira', mean: 'phía kia, đằng kia (lịch sự của あそこ)',
      examples: [{ jp: 'あちらは会議室です。', romaji: 'Achira wa kaigishitsu desu.', vn: 'Đằng kia là phòng họp.', furigana: [{ kanji: '会議室', reading: 'かいぎしつ', meaning: 'HỘI NGHỊ THẤT' }] }]
    },
    {
      word: 'どちら', kanji: '', romaji: 'dochira', mean: 'phía nào, đằng nào (lịch sự của どこ)',
      examples: [{ jp: 'エレベーターはどちらですか。', romaji: 'Erebe-ta- wa dochira desu ka.', vn: 'Thang máy ở phía nào ạ?', furigana: [] }]
    },
    {
      word: 'きょうしつ', kanji: '教室', romaji: 'kyoushitsu', mean: 'lớp học, phòng học',
      examples: [{ jp: '教室は広いです。', romaji: 'Kyoushitsu wa hiroi desu.', vn: 'Lớp học rộng.', furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }] }],
      kanjiDetails: [
        {
          kanji: '教', onyomi: 'キョウ (kyou)', kunyomi: 'おし.える (oshieru)', meaning: 'Dạy, giáo dục', sinoVietnamese: 'GIÁO', strokes: 11, jlpt: 'N4', radicals: '攴 (phộc)', mnemonic: 'Người già (老) cầm roi (攴) dạy trẻ.', exampleSentences: [],
          components: [{ char: '孝', meaning: 'hiếu thảo' }, { char: '攴', meaning: 'đánh khẽ' }]
        },
        {
          kanji: '室', onyomi: 'シツ (shitsu)', kunyomi: 'むろ (muro)', meaning: 'Phòng, buồng', sinoVietnamese: 'THẤT', strokes: 9, jlpt: 'N4', radicals: '宀 (miên)', mnemonic: 'Dưới mái nhà (宀) đến (至) một căn phòng.', exampleSentences: [],
          components: [{ char: '宀', meaning: 'mái nhà' }, { char: '至', meaning: 'đến' }]
        }
      ]
    },
    {
      word: 'しょくどう', kanji: '食堂', romaji: 'shokudou', mean: 'nhà ăn',
      examples: [{ jp: '食堂でご飯を食べます。', romaji: 'Shokudou de gohan wo tabemasu.', vn: 'Tôi ăn cơm ở nhà ăn.', furigana: [{ kanji: '食堂', reading: 'しょくどう', meaning: 'THỰC ĐƯỜNG' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }],
      kanjiDetails: [
        {
          kanji: '食', onyomi: 'ショク (shoku)', kunyomi: 'た.べる (taberu)', meaning: 'Ăn, thực phẩm', sinoVietnamese: 'THỰC', strokes: 9, jlpt: 'N5', radicals: '食 (thực)', mnemonic: 'Người (人) tốt (良) thì được ăn ngon.', exampleSentences: [],
          components: [{ char: '人', meaning: 'người' }, { char: '良', meaning: 'tốt' }]
        },
        {
          kanji: '堂', onyomi: 'ドウ (dou)', kunyomi: '', meaning: 'Hội trường, đền', sinoVietnamese: 'ĐƯỜNG', strokes: 11, jlpt: 'N4', radicals: '土 (thổ)', mnemonic: 'Ngôi nhà vinh quang (尚) xây trên đất (土).', exampleSentences: [],
          components: [{ char: '尚', meaning: 'cao quý' }, { char: '土', meaning: 'đất' }]
        }
      ]
    },
    {
      word: 'じむしょ', kanji: '事務所', romaji: 'jimusho', mean: 'văn phòng',
      examples: [{ jp: '事務所は3階です。', romaji: 'Jimusho wa sangai desu.', vn: 'Văn phòng ở tầng 3.', furigana: [{ kanji: '事務所', reading: 'じむしょ', meaning: 'SỰ VỤ SỞ' }, { kanji: '階', reading: 'かい', meaning: 'GIAI' }] }],
      kanjiDetails: [
        {
          kanji: '事', onyomi: 'ジ (ji)', kunyomi: 'こと (koto)', meaning: 'Việc, sự việc', sinoVietnamese: 'SỰ', strokes: 8, jlpt: 'N4', radicals: '亅 (quyết)', mnemonic: 'Một cái miệng (口) và tay cầm bút viết sử (history/sự việc).', exampleSentences: [],
          components: [{ char: '一', meaning: 'nhất' }, { char: '口', meaning: 'miệng' }, { char: '亅', meaning: 'quyết' }]
        },
        {
          kanji: '務', onyomi: 'ム (mu)', kunyomi: 'つと.める (tsutomeru)', meaning: 'Nhiệm vụ', sinoVietnamese: 'VỤ', strokes: 11, jlpt: 'N4', radicals: '力 (lực)', mnemonic: 'Cầm giáo (矛) dùng sức (力) làm nhiệm vụ.', exampleSentences: [],
          components: [{ char: '矛', meaning: 'cây giáo' }, { char: '夂', meaning: 'đi lại' }, { char: '力', meaning: 'sức lực' }]
        },
        {
          kanji: '所', onyomi: 'ショ (sho)', kunyomi: 'ところ (tokoro)', meaning: 'Nơi chốn', sinoVietnamese: 'SỞ', strokes: 8, jlpt: 'N4', radicals: '戸 (hộ)', mnemonic: 'Cầm rìu (斤) đến cửa (戸) đục đẽo làm nơi ở.', exampleSentences: [],
          components: [{ char: '戸', meaning: 'cửa' }, { char: '斤', meaning: 'cái rìu' }]
        }
      ]
    },
    {
      word: 'かいぎしつ', kanji: '会議室', romaji: 'kaigishitsu', mean: 'phòng họp',
      examples: [{ jp: '会議室で会議をします。', romaji: 'Kaigishitsu de kaigi wo shimasu.', vn: 'Họp ở phòng họp.', furigana: [{ kanji: '会議室', reading: 'かいぎしつ', meaning: 'HỘI NGHỊ THẤT' }, { kanji: '会議', reading: 'かいぎ', meaning: 'HỘI NGHỊ' }] }],
      kanjiDetails: [
        {
          kanji: '会', onyomi: 'カイ (kai)', kunyomi: 'あ.う (au)', meaning: 'Gặp gỡ, hội họp', sinoVietnamese: 'HỘI', strokes: 6, jlpt: 'N5', radicals: '人 (nhân)', mnemonic: 'Hai người (二) ngồi dưới mái nhà (ane) họp.', exampleSentences: [],
          components: [{ char: '人', meaning: 'người' }, { char: '云', meaning: 'vân (nói)' }]
        },
        {
          kanji: '議', onyomi: 'ギ (gi)', kunyomi: '', meaning: 'Thảo luận, nghị sự', sinoVietnamese: 'NGHỊ', strokes: 20, jlpt: 'N4', radicals: '言 (ngôn)', mnemonic: 'Nói (言) về nghĩa (義) khí trong cuộc họp.', exampleSentences: [],
          components: [{ char: '言', meaning: 'ngôn' }, { char: '義', meaning: 'nghĩa' }]
        },
        {
          kanji: '室', onyomi: 'シツ (shitsu)', kunyomi: 'むろ (muro)', meaning: 'Phòng, buồng', sinoVietnamese: 'THẤT', strokes: 9, jlpt: 'N4', radicals: '宀 (miên)', mnemonic: 'Dưới mái nhà (宀) đến (至) một căn phòng.', exampleSentences: [],
          components: [{ char: '宀', meaning: 'mái nhà' }, { char: '至', meaning: 'đến' }]
        }
      ]
    },
    {
      word: 'うけつけ', kanji: '受付', romaji: 'uketsuke', mean: 'bộ phận tiếp tân, phòng thường trực',
      examples: [{ jp: '受付は1階です。', romaji: 'Uketsuke wa ikkai desu.', vn: 'Quầy lễ tân ở tầng 1.', furigana: [{ kanji: '受付', reading: 'うけつけ', meaning: 'THỤ PHÓ' }, { kanji: '階', reading: 'かい', meaning: 'GIAI' }] }],
      kanjiDetails: [
        {
          kanji: '受', onyomi: 'ジュ (ju)', kunyomi: 'う.ける (ukeru)', meaning: 'Nhận, chịu', sinoVietnamese: 'THỤ', strokes: 8, jlpt: 'N3', radicals: '又 (hựu)', mnemonic: 'Dùng tay (爪) nhận cái gì đó từ tay khác (又) dưới mái nhà (冖).', exampleSentences: [],
          components: [{ char: '爫', meaning: 'móng vuốt' }, { char: '冖', meaning: 'mái nhà' }, { char: '又', meaning: 'cái tay' }]
        },
        {
          kanji: '付', onyomi: 'フ (fu)', kunyomi: 'つ.く (tsuku)', meaning: 'Gắn, giao phó', sinoVietnamese: 'PHÓ', strokes: 5, jlpt: 'N3', radicals: '人 (nhân)', mnemonic: 'Người (人) trao tấc (寸) lòng giao phó.', exampleSentences: [],
          components: [{ char: '亻', meaning: 'người' }, { char: '寸', meaning: 'tấc' }]
        }
      ]
    },
    {
      word: 'ロビー', kanji: '', romaji: 'robii', mean: 'hành lang, đại sảnh',
      examples: [{ jp: 'ロビーで待ちます。', romaji: 'Robii de machimasu.', vn: 'Tôi đợi ở sảnh.', furigana: [{ kanji: '待', reading: 'ま', meaning: 'ĐÃI' }] }]
    },
    {
      word: 'へや', kanji: '部屋', romaji: 'heya', mean: 'căn phòng',
      examples: [{ jp: 'これは誰の部屋ですか。', romaji: 'Kore wa dare no heya desu ka.', vn: 'Đây là phòng của ai?', furigana: [{ kanji: '誰', reading: 'だれ', meaning: 'THÙY' }, { kanji: '部屋', reading: 'へや', meaning: 'BỘ ỐC' }] }],
      kanjiDetails: [
        {
          kanji: '部', onyomi: 'ブ (bu)', kunyomi: '', meaning: 'Bộ phận, phòng', sinoVietnamese: 'BỘ', strokes: 11, jlpt: 'N4', radicals: '邑 (áp)', mnemonic: 'Đứng (立) mở miệng (口) chia vùng (邑) thành các bộ phận.', exampleSentences: [],
          components: [{ char: '咅', meaning: 'nhổ' }, { char: '阝', meaning: 'ấp' }]
        },
        {
          kanji: '屋', onyomi: 'オク (oku)', kunyomi: 'や (ya)', meaning: 'Mái nhà, cửa hàng', sinoVietnamese: 'ỐC', strokes: 9, jlpt: 'N4', radicals: '尸 (thi)', mnemonic: 'Xác (尸) chết tới (至) nhà (oc). Hoặc: Người nằm (尸) đợi đến (至) nhà.', exampleSentences: [],
          components: [{ char: '尸', meaning: 'xác chết' }, { char: '至', meaning: 'đến' }]
        }
      ]
    },
    {
      word: 'トイレ', kanji: 'お手洗い', romaji: 'otearai', mean: 'nhà vệ sinh',
      examples: [{ jp: 'お手洗いはあそこです。', romaji: 'Otearai wa asoko desu.', vn: 'Nhà vệ sinh ở đằng kia.', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] }],
      kanjiDetails: [
        {
          kanji: '手', onyomi: 'シュ (shu)', kunyomi: 'て (te)', meaning: 'Tay', sinoVietnamese: 'THỦ', strokes: 4, jlpt: 'N5', radicals: '手 (thủ)', mnemonic: 'Hình bàn tay xòe 5 ngón.', exampleSentences: [],
          components: [{ char: '手', meaning: 'tay' }]
        },
        {
          kanji: '洗', onyomi: 'セン (sen)', kunyomi: 'あら.う (arau)', meaning: 'Rửa', sinoVietnamese: 'TẨY', strokes: 9, jlpt: 'N4', radicals: '水 (thủy)', mnemonic: 'Dùng nước (氵) rửa sạch trước (先) tiên.', exampleSentences: [],
          components: [{ char: '氵', meaning: 'nước' }, { char: '先', meaning: 'trước' }]
        }
      ]
    },
    {
      word: 'かいだん', kanji: '階段', romaji: 'kaidan', mean: 'cầu thang', image: '/images/vocabulary/lesson3/kaidan.png',
      examples: [{ jp: '階段を使います。', romaji: 'Kaidan wo tsukaimasu.', vn: 'Tôi dùng cầu thang bộ.', furigana: [{ kanji: '階段', reading: 'かいだん', meaning: 'GIAI ĐOẠN' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }] }],
      kanjiDetails: [
        {
          kanji: '階', onyomi: 'カイ (kai)', kunyomi: '', meaning: 'Giai cấp, tầng', sinoVietnamese: 'GIAI', strokes: 12, jlpt: 'N3', radicals: '阜 (phụ)', mnemonic: 'Mọi người (皆) đều phải leo lên gò đất (阜) từng giai đoạn.', exampleSentences: [],
          components: [{ char: '阝', meaning: 'gò đất' }, { char: '皆', meaning: 'mọi người' }]
        },
        {
          kanji: '段', onyomi: 'ダン (dan)', kunyomi: '', meaning: 'Giai đoạn, bậc thang', sinoVietnamese: 'ĐOẠN', strokes: 9, jlpt: 'N3', radicals: '殳 (thù)', mnemonic: 'Đoạn đường có cây (chu? no) cầm chùy (殳) đứng gác.', exampleSentences: [],
          components: [{ char: '殳', meaning: 'cái chùy' }, { char: '㠯', meaning: '?' }]
        }
      ]
    },
    {
      word: 'エレベーター', kanji: '', romaji: 'erebe-ta-', mean: 'thang máy', image: '/images/vocabulary/lesson3/elevator.png',
      examples: [{ jp: 'エレベーターに乗ります。', romaji: 'Erebe-ta- ni norimasu.', vn: 'Tôi đi thang máy.', furigana: [{ kanji: '乗', reading: 'の', meaning: 'THỪA' }] }]
    },
    {
      word: 'エスカレーター', kanji: '', romaji: 'esukare-ta-', mean: 'thang cuốn', image: '/images/vocabulary/lesson3/escalator.png',
      examples: [{ jp: 'エスカレーターはあちらです。', romaji: 'Esukare-ta- wa achira desu.', vn: 'Thang cuốn ở phía kia.', furigana: [] }]
    },
    {
      word: 'おくに', kanji: 'お国', romaji: 'okuni', mean: 'đất nước',
      examples: [{ jp: 'お国はどちらですか。', romaji: 'Okuni wa dochira desu ka.', vn: 'Nước của bạn là nước nào?', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }] }],
      kanjiDetails: [
        {
          kanji: '国', onyomi: 'コク (koku)', kunyomi: 'くに (kuni)', meaning: 'Đất nước', sinoVietnamese: 'QUỐC', strokes: 8, jlpt: 'N5', radicals: '囗 (vi)', mnemonic: 'Viên ngọc (玉) quý được bao quanh bởi biên giới (囗) là quốc gia.', exampleSentences: [],
          components: [{ char: '囗', meaning: 'vi' }, { char: '玉', meaning: 'ngọc' }]
        }
      ]
    },
    {
      word: 'かいしゃ', kanji: '会社', romaji: 'kaisha', mean: 'công ty',
      examples: [{ jp: '会社はどちらですか。', romaji: 'Kaisha wa dochira desu ka.', vn: 'Công ty của anh ở đâu?', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }] }],
      kanjiDetails: [
        {
          kanji: '会', onyomi: 'カイ (kai)', kunyomi: 'あ.う (au)', meaning: 'Gặp gỡ', sinoVietnamese: 'HỘI', strokes: 6, jlpt: 'N5', radicals: '人 (nhân)', mnemonic: 'Hai người (二) gặp nhau dưới mái nhà.', exampleSentences: [],
          components: [{ char: '人', meaning: 'người' }, { char: '云', meaning: 'vân' }]
        },
        {
          kanji: '社', onyomi: 'シャ (sha)', kunyomi: 'やしろ (yashiro)', meaning: 'Xã hội, đền', sinoVietnamese: 'XÃ', strokes: 7, jlpt: 'N4', radicals: '示 (thị)', mnemonic: 'Thần đất (土) phù hộ (示) cho xã hội.', exampleSentences: [],
          components: [{ char: '礻', meaning: 'thị' }, { char: '土', meaning: 'đất' }]
        }
      ]
    },
    {
      word: 'うち', kanji: '家', romaji: 'uchi', mean: 'nhà',
      examples: [{ jp: 'うちは大阪です。', romaji: 'Uchi wa Oosaka desu.', vn: 'Nhà tôi ở Osaka.', furigana: [{ kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }] }],
      kanjiDetails: [
        {
          kanji: '家', onyomi: 'カ (ka)', kunyomi: 'いえ (ie), うち (uchi)', meaning: 'Nhà', sinoVietnamese: 'GIA', strokes: 10, jlpt: 'N4', radicals: '宀 (miên)', mnemonic: 'Dưới mái nhà (宀) có con lợn (豕) là nhà (ngày xưa).', exampleSentences: [],
          components: [{ char: '宀', meaning: 'mái nhà' }, { char: '豕', meaning: 'con lợn' }]
        }
      ]
    },
    {
      word: 'でんわ', kanji: '電話', romaji: 'denwa', mean: 'điện thoại',
      examples: [{ jp: '電話をかけます。', romaji: 'Denwa wo kakemasu.', vn: 'Tôi gọi điện thoại.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] }],
      kanjiDetails: [
        {
          kanji: '電', onyomi: 'デン (den)', kunyomi: '', meaning: 'Điện', sinoVietnamese: 'ĐIỆN', strokes: 13, jlpt: 'N5', radicals: '雨 (vũ)', mnemonic: 'Mưa (雨) có sét là điện (申 - gần giống).', exampleSentences: [],
          components: [{ char: '雨', meaning: 'mưa' }, { char: '电', meaning: 'điện' }]
        },
        {
          kanji: '話', onyomi: 'ワ (wa)', kunyomi: 'はな.す (hanasu)', meaning: 'Nói chuyện', sinoVietnamese: 'THOẠI', strokes: 13, jlpt: 'N5', radicals: '言 (ngôn)', mnemonic: 'Cái lưỡi (舌) nói (言) chuyện.', exampleSentences: [],
          components: [{ char: '言', meaning: 'ngôn' }, { char: '舌', meaning: 'lưỡi' }]
        }
      ]
    },
    {
      word: 'くつ', kanji: '靴', romaji: 'kutsu', mean: 'giày',
      examples: [{ jp: '靴を買います。', romaji: 'Kutsu wo kaimasu.', vn: 'Tôi mua giày.', furigana: [{ kanji: '靴', reading: 'くつ', meaning: 'NGOA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] }],
      kanjiDetails: [
        {
          kanji: '靴', onyomi: 'カ (ka)', kunyomi: 'くつ (kutsu)', meaning: 'Giày', sinoVietnamese: 'NGOA', strokes: 13, jlpt: 'N1', radicals: '革 (cách)', mnemonic: 'Làm giày bằng da (革) thì biến hóa (化) đôi chân.', exampleSentences: [],
          components: [{ char: '革', meaning: 'da' }, { char: '化', meaning: 'hóa' }]
        }
      ]
    },
    {
      word: 'ネクタイ', kanji: '', romaji: 'nekutai', mean: 'cà vạt',
      examples: [{ jp: 'ネクタイをします。', romaji: 'Nekutai wo shimasu.', vn: 'Tôi thắt cà vạt.', furigana: [] }]
    },
    {
      word: 'ワイン', kanji: '', romaji: 'wain', mean: 'rượu vang',
      examples: [{ jp: 'ワインを飲みます。', romaji: 'Wain wo nomimasu.', vn: 'Tôi uống rượu vang.', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] }]
    },
    {
      word: 'たばこ', kanji: '', romaji: 'tabako', mean: 'thuốc lá',
      examples: [{ jp: 'たばこを吸います。', romaji: 'Tabako wo suimasu.', vn: 'Tôi hút thuốc.', furigana: [{ kanji: '吸', reading: 'す', meaning: 'HẤP' }] }]
    },
    {
      word: 'うりば', kanji: '売り場', romaji: 'uriba', mean: 'quầy bán',
      examples: [{ jp: '売り場はどこですか。', romaji: 'Uriba wa doko desu ka.', vn: 'Quầy bán ở đâu?', furigana: [{ kanji: '売', reading: 'う', meaning: 'MẠI' }, { kanji: '場', reading: 'ば', meaning: 'TRƯỜNG' }] }],
      kanjiDetails: [
        {
          kanji: '売', onyomi: 'バイ (bai)', kunyomi: 'う.る (uru)', meaning: 'Bán', sinoVietnamese: 'MẠI', strokes: 7, jlpt: 'N4', radicals: '士 (sĩ)', mnemonic: 'Kẻ sĩ (士) trùm khăn (冖) đi bán chân (儿) tình.', exampleSentences: [],
          components: [{ char: '士', meaning: 'sĩ' }, { char: '冖', meaning: 'mịch' }, { char: '儿', meaning: 'nhân' }]
        },
        {
          kanji: '場', onyomi: 'ジョウ (jou)', kunyomi: 'ば (ba)', meaning: 'Nơi chốn', sinoVietnamese: 'TRƯỜNG', strokes: 12, jlpt: 'N4', radicals: '土 (thổ)', mnemonic: 'Vùng đất (土) có mặt trời (日) chiếu sáng là quảng trường.', exampleSentences: [],
          components: [{ char: '土', meaning: 'đất' }, { char: '昜', meaning: 'dương' }]
        }
      ]
    },
    {
      word: 'ちか', kanji: '地下', romaji: 'chika', mean: 'tầng hầm',
      examples: [{ jp: '地下に駐車場があります。', romaji: 'Chika ni chuushajou ga arimasu.', vn: 'Ở tầng hầm có bãi đậu xe.', furigana: [{ kanji: '地下', reading: 'ちか', meaning: 'ĐỊA HẠ' }, { kanji: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'TRÚ XA TRƯỜNG' }] }],
      kanjiDetails: [
        {
          kanji: '地', onyomi: 'チ (chi), ジ (ji)', kunyomi: '', meaning: 'Đất', sinoVietnamese: 'ĐỊA', strokes: 6, jlpt: 'N4', radicals: '土 (thổ)', mnemonic: 'Đất (土) cũng (也) là nơi để sống.', exampleSentences: [],
          components: [{ char: '土', meaning: 'đất' }, { char: '也', meaning: 'dã (cũng)' }]
        },
        {
          kanji: '下', onyomi: 'カ (ka), ゲ (ge)', kunyomi: 'した (shita)', meaning: 'Dưới, thấp', sinoVietnamese: 'HẠ', strokes: 3, jlpt: 'N5', radicals: '一 (nhất)', mnemonic: 'Dưới mặt đất (一) có cái cây rủ xuống (卜).', exampleSentences: [],
          components: [{ char: '一', meaning: 'nhất' }, { char: '卜', meaning: 'bốc' }]
        }
      ]
    },
    {
      word: 'なんがい', kanji: '何階', romaji: 'nangai', mean: 'tầng mấy',
      examples: [{ jp: '何階ですか。', romaji: 'Nangai desu ka.', vn: 'Tầng mấy vậy?', furigana: [{ kanji: '何階', reading: 'なんがい', meaning: 'HÀ GIAI' }] }],
      kanjiDetails: [
        {
          kanji: '何', onyomi: 'カ (ka)', kunyomi: 'なに (nani)', meaning: 'Cái gì', sinoVietnamese: 'HÀ', strokes: 7, jlpt: 'N5', radicals: '人 (nhân)', mnemonic: 'Người (亻) khả (可) ái.', exampleSentences: [],
          components: [{ char: '亻', meaning: 'người' }, { char: '可', meaning: 'khả' }]
        },
        {
          kanji: '階', onyomi: 'カイ (kai)', kunyomi: '', meaning: 'Tầng', sinoVietnamese: 'GIAI', strokes: 12, jlpt: 'N3', radicals: '阜 (phụ)', mnemonic: 'Leo gò đất.', exampleSentences: [],
          components: [{ char: '阝', meaning: 'gò đất' }, { char: '皆', meaning: 'mọi người' }]
        }
      ]
    },
    {
      word: 'ーえん', kanji: 'ー円', romaji: '-en', mean: '- yên (tiền Nhật)',
      examples: [{ jp: '百円です。', romaji: 'Hyaku-en desu.', vn: '100 yên.', furigana: [{ kanji: '百', reading: 'ひゃく', meaning: 'BÁCH' }, { kanji: '円', reading: 'えん', meaning: 'VIÊN' }] }],
      kanjiDetails: [
        {
          kanji: '円', onyomi: 'エン (en)', kunyomi: 'まる.い (marui)', meaning: 'Tròn, yên', sinoVietnamese: 'VIÊN', strokes: 4, jlpt: 'N5', radicals: '冂 (quynh)', mnemonic: 'Một chiếc nắp (冂) tròn.', exampleSentences: [],
          components: [{ char: '冂', meaning: 'biên giới' }]
        }
      ]
    },
    {
      word: 'いくら', kanji: '', romaji: 'ikura', mean: 'bao nhiêu tiền',
      examples: [{ jp: 'これはいくらですか。', romaji: 'Kore wa ikura desu ka.', vn: 'Cái này bao nhiêu tiền?', furigana: [] }]
    },
    {
      word: 'ひゃく', kanji: '百', romaji: 'hyaku', mean: 'trăm',
      examples: [{ jp: '三百円です。', romaji: 'Sanbyaku-en desu.', vn: '300 yên.', furigana: [{ kanji: '三', reading: 'さん', meaning: 'TAM' }, { kanji: '百', reading: 'びゃく', meaning: 'BÁCH' }, { kanji: '円', reading: 'えん', meaning: 'VIÊN' }] }],
      kanjiDetails: [
        {
          kanji: '百', onyomi: 'ヒャク (hyaku)', kunyomi: '', meaning: 'Trăm', sinoVietnamese: 'BÁCH', strokes: 6, jlpt: 'N5', radicals: '白 (bạch)', mnemonic: 'Một (一) màu trắng (白) là bạch.', exampleSentences: [],
          components: [{ char: '一', meaning: 'nhất' }, { char: '白', meaning: 'trắng' }]
        }
      ]
    },
    {
      word: 'せん', kanji: '千', romaji: 'sen', mean: 'nghìn',
      examples: [{ jp: '千円です。', romaji: 'Sen-en desu.', vn: '1000 yên.', furigana: [{ kanji: '千', reading: 'せん', meaning: 'THIÊN' }, { kanji: '円', reading: 'えん', meaning: 'VIÊN' }] }],
      kanjiDetails: [
        {
          kanji: '千', onyomi: 'セン (sen)', kunyomi: 'ち (chi)', meaning: 'Nghìn', sinoVietnamese: 'THIÊN', strokes: 3, jlpt: 'N5', radicals: '十 (thập)', mnemonic: 'Mười (十) người (丿) là một thiên.', exampleSentences: [],
          components: [{ char: '丿', meaning: 'phiệt' }, { char: '十', meaning: 'mười' }]
        }
      ]
    },
    {
      word: 'まん', kanji: '万', romaji: 'man', mean: 'mười nghìn, vạn',
      examples: [{ jp: '一万円です。', romaji: 'Ichiman-en desu.', vn: '10,000 yên.', furigana: [{ kanji: '一', reading: 'いち', meaning: 'NHẤT' }, { kanji: '万', reading: 'まん', meaning: 'VẠN' }, { kanji: '円', reading: 'えん', meaning: 'VIÊN' }] }],
      kanjiDetails: [
        {
          kanji: '万', onyomi: 'マン (man)', kunyomi: '', meaning: 'Vạn', sinoVietnamese: 'VẠN', strokes: 3, jlpt: 'N5', radicals: '一 (nhất)', mnemonic: 'Một (一) cái bao (勹) lớn.', exampleSentences: [],
          components: [{ char: '一', meaning: 'nhất' }, { char: '勹', meaning: 'bao' }]
        }
      ]
    },
    {
      word: 'すみません', kanji: '', romaji: 'sumimasen', mean: 'xin lỗi',
      examples: [{ jp: 'すみません、トイレはどこですか。', romaji: 'Sumimasen, toire wa doko desu ka.', vn: 'Xin lỗi, nhà vệ sinh ở đâu?', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] }]
    },
    {
      word: '～でございます', kanji: '', romaji: '~ de gozaimasu', mean: '(dạng lịch sự của です)',
      examples: [{ jp: 'こちらは田中でございます。', romaji: 'Kochira wa Tanaka de gozaimasu.', vn: 'Đây là anh Tanaka ạ.', furigana: [{ kanji: '田中', reading: 'たなか', meaning: 'ĐIỀN TRUNG' }] }]
    },
    {
      word: '〔～を〕みせてください', kanji: '〔～を〕見せてください', romaji: '〔~wo〕misete kudasai', mean: 'cho tôi xem [~]',
      examples: [{ jp: 'その靴を見せてください。', romaji: 'Sono kutsu wo misete kudasai.', vn: 'Cho tôi xem đôi giày đó.', furigana: [{ kanji: '靴', reading: 'くつ', meaning: 'NGOA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] }],
      kanjiDetails: [
        {
          kanji: '見', onyomi: 'ケン (ken)', kunyomi: 'み.る (miru)', meaning: 'Nhìn, xem', sinoVietnamese: 'KIẾN', strokes: 7, jlpt: 'N5', radicals: '見 (kiến)', mnemonic: 'Mắt (目) nhìn người đi (儿).', exampleSentences: [],
          components: [{ char: '目', meaning: 'mắt' }, { char: '儿', meaning: 'đi' }]
        }
      ]
    },
    {
      word: 'じゃ', kanji: '', romaji: 'ja', mean: 'thế thì, vậy thì',
      examples: [{ jp: 'じゃ、これをください。', romaji: 'Ja, kore wo kudasai.', vn: 'Vậy thì, cho tôi cái này.', furigana: [] }]
    },
    {
      word: '〔～を〕ください', kanji: '', romaji: '〔~wo〕kudasai', mean: 'cho tôi [~]',
      examples: [{ jp: 'これをください。', romaji: 'Kore wo kudasai.', vn: 'Cho tôi cái này.', furigana: [] }]
    },
    {
      word: 'イタリア', kanji: '', romaji: 'Itaria', mean: 'Ý',
      examples: [{ jp: 'イタリアの靴がありますか。', romaji: 'Itaria no kutsu ga arimasu ka.', vn: 'Có giày Ý không?', furigana: [{ kanji: '靴', reading: 'くつ', meaning: 'NGOA' }] }]
    },
    {
      word: 'スイス', kanji: '', romaji: 'Suisu', mean: 'Thụy Sĩ',
      examples: [{ jp: 'スイスの時計です。', romaji: 'Suisu no tokei desu.', vn: 'Là đồng hồ Thụy Sĩ.', furigana: [{ kanji: '時計', reading: 'とけい', meaning: 'THỜI KẾ' }] }]
    }
  ],
  grammar: [
    {
      pattern: 'ここ / そこ / あそこ / こちら / そちら / あちら',
      explanation: '「ここ」「そこ」「あそこ」 là các đại từ chỉ địa điểm. \n- 「ここ」: Chỉ vị trí người nói đang ở. \n- 「そこ」: Chỉ vị trí người nghe đang ở. \n- 「あそこ」: Chỉ vị trí ở xa cả người nói và người nghe. \n\n「こちら」「そちら」「あちら」 là đại từ chỉ phương hướng, nhưng cũng có thể dùng thay thế cho 「ここ」「そこ」「あそこ」 với sắc thái lịch sự hơn.',
      example: 'ここは教室です。 (Đây là lớp học.)',
      examples: [
        { jp: 'ここは教室です。', vn: 'Đây là lớp học.', furigana: [{ kanji: '教室', reading: 'きょうしつ', meaning: 'GIÁO THẤT' }] },
        { jp: 'そこは受付ですか。', vn: 'Ở đó có phải là quầy tiếp tân không?', furigana: [{ kanji: '受付', reading: 'うけつけ', meaning: 'THỤ PHÓ' }] },
        { jp: 'あそこは食堂です。', vn: 'Kia là nhà ăn.', furigana: [{ kanji: '食堂', reading: 'しょくどう', meaning: 'THỰC ĐƯỜNG' }] },
        { jp: '電話はそちらです。', vn: 'Điện thoại ở phía đó.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] }
      ]
    },
    {
      pattern: 'N1 (danh từ) は N2 (địa điểm) です',
      explanation: 'Mẫu câu này dùng để diễn đạt một vật, một người hay một địa điểm nào đó ở đâu.',
      example: 'お手洗いはあそこです。 (Nhà vệ sinh ở đằng kia.)',
      examples: [
        { jp: 'お手洗いはあそこです。', vn: 'Nhà vệ sinh ở đằng kia.', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] },
        { jp: '電話は2階です。', vn: 'Điện thoại ở tầng 2.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }, { kanji: '階', reading: 'かい', meaning: 'GIAI' }] },
        { jp: '山田さんは事務所です。', vn: 'Anh Yamada ở văn phòng.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '事務所', reading: 'じむしょ', meaning: 'SỰ VỤ SỞ' }] }
      ]
    },
    {
      pattern: 'どこ / どちら',
      explanation: '「どこ」 là nghi vấn từ hỏi về địa điểm. \n「どちら」 là nghi vấn từ hỏi về phương hướng. \nTuy nhiên 「どちら」 cũng có thể được dùng để hỏi về địa điểm với sắc thái lịch sự hơn 「どこ」. \nNgoài ra, khi hỏi về tên quốc gia, công ty, trường học... thì cũng dùng 「どこ」 hoặc 「どちら」.',
      example: 'お手洗いはどこですか。 (Nhà vệ sinh ở đâu?)',
      examples: [
        { jp: 'お手洗いはどこですか。', vn: 'Nhà vệ sinh ở đâu?', furigana: [{ kanji: '手洗', reading: 'てあら', meaning: 'THỦ TẨY' }] },
        { jp: 'エレベーターはどちらですか。', vn: 'Thang máy ở chỗ nào ạ?', furigana: [] },
        { jp: '学校はどこですか。', vn: 'Trường học ở đâu?', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] },
        { jp: '会社はどちらですか。', vn: 'Công ty làm việc ở đâu (công ty nào) ạ?', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }] },
        { jp: 'お国はどちらですか。', vn: 'Anh/Chị là người nước nào?', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }] }
      ]
    },
    {
      pattern: 'N1 の N2',
      explanation: 'Trong mẫu này N1 là tên quốc gia hoặc tên công ty, còn N2 là tên sản phẩm. Mẫu này dùng để diễn đạt N2 là sản phẩm của nước nào hoặc của công ty nào.',
      example: 'これは日本のコンピューターです。 (Đây là máy vi tính của Nhật Bản.)',
      examples: [
        { jp: 'これは日本のコンピューターです。', vn: 'Đây là máy tính của Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }] },
        { jp: 'それはIMCのコンピューターです。', vn: 'Đó là máy tính của công ty IMC.', furigana: [] },
        { jp: 'これはどこのネクタイですか。', vn: 'Đây là cà vạt của (nước/hãng) nào?', furigana: [] }
      ]
    },
    {
      pattern: 'お〜 (Tiền tố)',
      explanation: 'Tiền tố 「お」 được thêm vào trước một từ ngữ có liên quan đến người nghe hoặc người thứ ba để bày tỏ sự kính trọng của người nói. \nVí dụ: 「お国」(okuni) - Đất nước (của bạn).',
      example: 'お国はどちらですか。 (Đất nước của bạn ở đâu / Bạn là người nước nào?)',
      examples: [
        { jp: 'お国はどちらですか。', vn: 'Anh/chị là người nước nào?', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }] }
      ]
    }
  ],
  kaiwa: [
    { char: 'A', jp: 'すみません。ワイン売り場はどこですか。', vn: 'Xin lỗi, quầy bán rượu vang ở đâu ạ?' },
    { char: 'B', jp: '地下1階でございます。', vn: 'Ở tầng hầm 1 ạ.' },
    { char: 'A', jp: 'どーも。', vn: 'Cảm ơn.' }
  ],
  quiz: []
};

export const lesson4Data: LessonDetail = {
  id: 4,
  title: "Thời gian",
  vocabulary: [
    {
      "word": "おきます",
      "kanji": "起きます",
      "romaji": "okimasu",
      "mean": "Dậy, thức dậy",
      "examples": [
        {
          "jp": "毎朝6時に起きます。",
          "vn": "Mỗi sáng tôi dậy lúc 6 giờ.",
          "furigana": [
            {
              "kanji": "毎朝",
              "reading": "まいあさ",
              "meaning": "MỖI TRIỀU"
            },
            {
              "kanji": "時",
              "reading": "じ",
              "meaning": "THỜI"
            },
            {
              "kanji": "起",
              "reading": "お",
              "meaning": "KHỞI"
            }
          ]
        },
        {
          "jp": "昨日は何時に起きましたか。",
          "vn": "Hôm qua bạn dậy lúc mấy giờ?",
          "furigana": [
            {
              "kanji": "昨日",
              "reading": "きのう",
              "meaning": "TẠC NHẬT"
            },
            {
              "kanji": "何時",
              "reading": "なんじ",
              "meaning": "HÀ THỜI"
            },
            {
              "kanji": "起",
              "reading": "お",
              "meaning": "KHỞI"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "起",
          "onyomi": "キ (ki)",
          "kunyomi": "お.きる (okiru)",
          "meaning": "Dậy, khởi đầu",
          "sinoVietnamese": "KHỞI",
          "strokes": 10,
          "jlpt": "N4",
          "radicals": "走 (tẩu)",
          "mnemonic": "Con rắn (己) chạy (走) đi khởi nghĩa.",
          "exampleSentences": [],
          "components": [
            {
              "char": "走",
              "meaning": "chạy"
            },
            {
              "char": "己",
              "meaning": "bản thân"
            }
          ]
        }
      ]
    },
    {
      "word": "ねます",
      "kanji": "寝ます",
      "romaji": "nemasu",
      "mean": "Ngủ, đi ngủ",
      "examples": [
        {
          "jp": "毎晩11時に寝ます。",
          "vn": "Mỗi tối tôi ngủ lúc 11 giờ.",
          "furigana": [
            {
              "kanji": "毎晩",
              "reading": "まいばん",
              "meaning": "MỖI VÃN"
            },
            {
              "kanji": "時",
              "reading": "じ",
              "meaning": "THỜI"
            },
            {
              "kanji": "寝",
              "reading": "ね",
              "meaning": "TẨM"
            }
          ]
        },
        {
          "jp": "昨日は寝ませんでした。",
          "vn": "Hôm qua tôi đã không ngủ.",
          "furigana": [
            {
              "kanji": "昨日",
              "reading": "きのう",
              "meaning": "TẠC NHẬT"
            },
            {
              "kanji": "寝",
              "reading": "ね",
              "meaning": "TẨM"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "寝",
          "onyomi": "シン (shin)",
          "kunyomi": "ね.る (neru)",
          "meaning": "Ngủ",
          "sinoVietnamese": "TẨM",
          "strokes": 13,
          "jlpt": "N4",
          "radicals": "宀 (miên)",
          "mnemonic": "Trong nhà (宀) cầm tấm phản (爿) đi ngủ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "宀",
              "meaning": "mái nhà"
            },
            {
              "char": "爿",
              "meaning": "tấm phản"
            }
          ]
        }
      ]
    },
    {
      "word": "はたらきます",
      "kanji": "働きます",
      "romaji": "hatarakimasu",
      "mean": "Làm việc",
      "examples": [
        {
          "jp": "会社で働きます。",
          "vn": "Tôi làm việc ở công ty.",
          "furigana": [
            {
              "kanji": "会社",
              "reading": "かいしゃ",
              "meaning": "HỘI XÃ"
            },
            {
              "kanji": "働",
              "reading": "はたら",
              "meaning": "ĐỘNG"
            }
          ]
        },
        {
          "jp": "父は銀行で働いています。",
          "vn": "Bố tôi đang làm việc ở ngân hàng.",
          "furigana": [
            {
              "kanji": "父",
              "reading": "ちち",
              "meaning": "PHỤ"
            },
            {
              "kanji": "銀行",
              "reading": "ぎんこう",
              "meaning": "NGÂN HÀNH"
            },
            {
              "kanji": "働",
              "reading": "はたら",
              "meaning": "ĐỘNG"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "働",
          "onyomi": "ドウ (dou)",
          "kunyomi": "はたら.く (hataraku)",
          "meaning": "Làm việc",
          "sinoVietnamese": "ĐỘNG",
          "strokes": 13,
          "jlpt": "N4",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (人) cần mẫn cử động (動) tức là đang làm việc.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "動",
              "meaning": "động"
            }
          ]
        }
      ]
    },
    {
      "word": "やすみます",
      "kanji": "休みます",
      "romaji": "yasumimasu",
      "mean": "Nghỉ, nghỉ ngơi",
      "examples": [
        {
          "jp": "少し休みましょう。",
          "vn": "Chúng ta nghỉ ngơi một chút nhé.",
          "furigana": [
            {
              "kanji": "少",
              "reading": "すこ",
              "meaning": "THIỂU"
            },
            {
              "kanji": "休",
              "reading": "やす",
              "meaning": "HƯU"
            }
          ]
        },
        {
          "jp": "昨日は会社を休みました。",
          "vn": "Hôm qua tôi đã nghỉ làm.",
          "furigana": [
            {
              "kanji": "昨日",
              "reading": "きのう",
              "meaning": "TẠC NHẬT"
            },
            {
              "kanji": "会社",
              "reading": "かいしゃ",
              "meaning": "HỘI XÃ"
            },
            {
              "kanji": "休",
              "reading": "やす",
              "meaning": "HƯU"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "休",
          "onyomi": "キュウ (kyuu)",
          "kunyomi": "やす.む (yasumu)",
          "meaning": "Nghỉ ngơi",
          "sinoVietnamese": "HƯU",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (人) dựa vào cây (木) để nghỉ ngơi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "木",
              "meaning": "cây"
            }
          ]
        }
      ]
    },
    {
      "word": "べんきょうします",
      "kanji": "勉強します",
      "romaji": "benkyoushimasu",
      "mean": "Học",
      "examples": [
        {
          "jp": "毎日日本語を勉強します。",
          "vn": "Tôi học tiếng Nhật mỗi ngày.",
          "furigana": [
            {
              "kanji": "毎日",
              "reading": "まいにち",
              "meaning": "MỖI NHẬT"
            },
            {
              "kanji": "日本語",
              "reading": "にほんご",
              "meaning": "NHẬT BẢN NGỮ"
            },
            {
              "kanji": "勉強",
              "reading": "べんきょう",
              "meaning": "MIỄN CƯỜNG"
            }
          ]
        },
        {
          "jp": "昨日の晩、勉強しましたか。",
          "vn": "Tối hôm qua bạn có học bài không?",
          "furigana": [
            {
              "kanji": "昨日",
              "reading": "きのう",
              "meaning": "TẠC NHẬT"
            },
            {
              "kanji": "晩",
              "reading": "ばん",
              "meaning": "VÃN"
            },
            {
              "kanji": "勉強",
              "reading": "べんきょう",
              "meaning": "MIỄN CƯỜNG"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "勉",
          "onyomi": "ベン (ben)",
          "kunyomi": "つと.める (tsutomeru)",
          "meaning": "Cố gắng",
          "sinoVietnamese": "MIỄN",
          "strokes": 10,
          "jlpt": "N4",
          "radicals": "力 (lực)",
          "mnemonic": "Dùng sức (力) cố gắng để miễn (免) trừ phiền phức.",
          "exampleSentences": [],
          "components": [
            {
              "char": "免",
              "meaning": "miễn"
            },
            {
              "char": "力",
              "meaning": "sức lực"
            }
          ]
        },
        {
          "kanji": "強",
          "onyomi": "キョウ (kyou)",
          "kunyomi": "つよ.い (tsuyoi)",
          "meaning": "Mạnh, cưỡng",
          "sinoVietnamese": "CƯỜNG",
          "strokes": 11,
          "jlpt": "N4",
          "radicals": "弓 (cung)",
          "mnemonic": "Tuy mồm (口) nói côn trùng (虫) nhưng cái cung (弓) rất mạnh (cường).",
          "exampleSentences": [],
          "components": [
            {
              "char": "弓",
              "meaning": "cung"
            },
            {
              "char": "ム",
              "meaning": "khư"
            },
            {
              "char": "虫",
              "meaning": "côn trùng"
            }
          ]
        }
      ]
    },
    {
      "word": "おわります",
      "kanji": "終わります",
      "romaji": "owarimasu",
      "mean": "Hết, kết thúc, xong",
      "examples": [
        {
          "jp": "仕事は5時に終わります。",
          "vn": "Công việc kết thúc lúc 5 giờ.",
          "furigana": [
            {
              "kanji": "仕事",
              "reading": "しごと",
              "meaning": "SĨ SỰ"
            },
            {
              "kanji": "時",
              "reading": "じ",
              "meaning": "THỜI"
            },
            {
              "kanji": "終",
              "reading": "お",
              "meaning": "CHUNG"
            }
          ]
        }
      ],
      "kanjiDetails": [
        {
          "kanji": "終",
          "onyomi": "シュウ (shuu)",
          "kunyomi": "お.わる (owaru)",
          "meaning": "Kết thúc",
          "sinoVietnamese": "CHUNG",
          "strokes": 11,
          "jlpt": "N4",
          "radicals": "糸 (mịch)",
          "mnemonic": "Sợi dây (糸) nối mùa đông (冬) là kết thúc một năm.",
          "exampleSentences": [],
          "components": [
            {
              "char": "糸",
              "meaning": "sợi tơ"
            },
            {
              "char": "冬",
              "meaning": "mùa đông"
            }
          ]
        }
      ]
    },
    {
      "word": "デパート",
      "kanji": "",
      "romaji": "depaato",
      "mean": "Bách hóa"
    },
    {
      "word": "ぎんこう",
      "kanji": "銀行",
      "romaji": "ginkou",
      "mean": "Ngân hàng",
      "kanjiDetails": [
        {
          "kanji": "銀",
          "onyomi": "ギン (gin)",
          "kunyomi": "",
          "meaning": "Bạc",
          "sinoVietnamese": "NGÂN",
          "strokes": 14,
          "jlpt": "N4",
          "radicals": "金 (kim)",
          "mnemonic": "Vàng (金) tốt (艮) thì gọi là bạc.",
          "exampleSentences": [],
          "components": [
            {
              "char": "金",
              "meaning": "vàng/kim loại"
            },
            {
              "char": "艮",
              "meaning": "cấn"
            }
          ]
        },
        {
          "kanji": "行",
          "onyomi": "コウ (kou), ギョウ (gyou)",
          "kunyomi": "い.く (iku)",
          "meaning": "Đi, hành",
          "sinoVietnamese": "HÀNH",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "行 (hành)",
          "mnemonic": "Bước chân trái (彳) bước chân phải (亍) là đi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "彳",
              "meaning": "bước trái"
            },
            {
              "char": "亍",
              "meaning": "bước phải"
            }
          ]
        }
      ]
    },
    {
      "word": "ゆうびんきょく",
      "kanji": "郵便局",
      "romaji": "yuubinkyoku",
      "mean": "Bưu điện",
      "kanjiDetails": [
        {
          "kanji": "郵",
          "onyomi": "ユウ (yuu)",
          "kunyomi": "",
          "meaning": "Bưu chính",
          "sinoVietnamese": "BƯU",
          "strokes": 11,
          "jlpt": "N3",
          "radicals": "邑 (áp)",
          "mnemonic": "Treo cái biển (垂) ở thôn ấp (邑) báo hiệu trạm bưu điện.",
          "exampleSentences": [],
          "components": [
            {
              "char": "垂",
              "meaning": "thùy"
            },
            {
              "char": "阝",
              "meaning": "ấp"
            }
          ]
        },
        {
          "kanji": "便",
          "onyomi": "ベン (ben), ビン (bin)",
          "kunyomi": "たよ.り (tayori)",
          "meaning": "Tiện lợi, tin tức",
          "sinoVietnamese": "TIỆN",
          "strokes": 9,
          "jlpt": "N4",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (人) canh tác (更) để cuộc sống tiện lợi hơn.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "更",
              "meaning": "canh"
            }
          ]
        },
        {
          "kanji": "局",
          "onyomi": "キョク (kyoku)",
          "kunyomi": "",
          "meaning": "Cục, bộ phận",
          "sinoVietnamese": "CỤC",
          "strokes": 7,
          "jlpt": "N4",
          "radicals": "尸 (thi)",
          "mnemonic": "Dưới xác chết (尸) có một cái thước (尺).",
          "exampleSentences": [],
          "components": [
            {
              "char": "尸",
              "meaning": "xác chết"
            },
            {
              "char": "勹",
              "meaning": "bao"
            },
            {
              "char": "口",
              "meaning": "miệng"
            }
          ]
        }
      ]
    },
    {
      "word": "としょかん",
      "kanji": "図書館",
      "romaji": "toshokan",
      "mean": "Thư viện",
      "kanjiDetails": [
        {
          "kanji": "図",
          "onyomi": "ズ (zu), ト (to)",
          "kunyomi": "はか.る (hakaru)",
          "meaning": "Bản đồ, vẽ",
          "sinoVietnamese": "ĐỒ",
          "strokes": 7,
          "jlpt": "N4",
          "radicals": "囗 (vi)",
          "mnemonic": "Vẽ bản đồ hình chữ X trong cái hộp (囗).",
          "exampleSentences": [],
          "components": [
            {
              "char": "囗",
              "meaning": "vi"
            },
            {
              "char": "㐅",
              "meaning": "ngải"
            }
          ]
        },
        {
          "kanji": "書",
          "onyomi": "ショ (sho)",
          "kunyomi": "か.く (kaku)",
          "meaning": "Viết",
          "sinoVietnamese": "THƯ",
          "strokes": 10,
          "jlpt": "N5",
          "radicals": "曰 (viết)",
          "mnemonic": "Tay cầm bút (聿) viết lên nhật ký (日).",
          "exampleSentences": [],
          "components": [
            {
              "char": "聿",
              "meaning": "duật/bút"
            },
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        },
        {
          "kanji": "館",
          "onyomi": "カン (kan)",
          "kunyomi": "やかた (yakata)",
          "meaning": "Tòa quán, hội quán",
          "sinoVietnamese": "QUÁN",
          "strokes": 16,
          "jlpt": "N4",
          "radicals": "食 (thực)",
          "mnemonic": "Nơi quan (官) lại ăn uống (食) là hội quán.",
          "exampleSentences": [],
          "components": [
            {
              "char": "食",
              "meaning": "thực"
            },
            {
              "char": "官",
              "meaning": "quan"
            }
          ]
        }
      ]
    },
    {
      "word": "びじゅつかん",
      "kanji": "美術館",
      "romaji": "bijutsukan",
      "mean": "Bảo tàng mỹ thuật",
      "kanjiDetails": [
        {
          "kanji": "美",
          "onyomi": "ビ (bi)",
          "kunyomi": "うつく.しい (utsukushii)",
          "meaning": "Đẹp",
          "sinoVietnamese": "MỸ",
          "strokes": 9,
          "jlpt": "N3",
          "radicals": "羊 (dương)",
          "mnemonic": "Con dê (羊) to (大) thì đẹp.",
          "exampleSentences": [],
          "components": [
            {
              "char": "羊",
              "meaning": "dương/dê"
            },
            {
              "char": "大",
              "meaning": "đại/lớn"
            }
          ]
        },
        {
          "kanji": "術",
          "onyomi": "ジュツ (jutsu)",
          "kunyomi": "",
          "meaning": "Kỹ thuật, nghệ thuật",
          "sinoVietnamese": "THUẬT",
          "strokes": 11,
          "jlpt": "N3",
          "radicals": "行 (hành)",
          "mnemonic": "Hành động (行) cầm cây thương (朮) đòi hỏi kỹ thuật.",
          "exampleSentences": [],
          "components": [
            {
              "char": "行",
              "meaning": "hành"
            },
            {
              "char": "朮",
              "meaning": "truật"
            }
          ]
        },
        {
          "kanji": "館",
          "onyomi": "カン (kan)",
          "kunyomi": "やかた (yakata)",
          "meaning": "Tòa quán, hội quán",
          "sinoVietnamese": "QUÁN",
          "strokes": 16,
          "jlpt": "N4",
          "radicals": "食 (thực)",
          "mnemonic": "Nơi quan (官) lại ăn uống (食) là hội quán.",
          "exampleSentences": [],
          "components": [
            {
              "char": "食",
              "meaning": "thực"
            },
            {
              "char": "官",
              "meaning": "quan"
            }
          ]
        }
      ]
    },
    {
      "word": "いま",
      "kanji": "今",
      "romaji": "ima",
      "mean": "Bây giờ",
      "kanjiDetails": [
        {
          "kanji": "今",
          "onyomi": "コン (kon)",
          "kunyomi": "いま (ima)",
          "meaning": "Bây giờ, hiện tại",
          "sinoVietnamese": "KIM",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Bây giờ hãy vào dưới mái nhà (ane) đi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "人",
              "meaning": "người"
            },
            {
              "char": "亽",
              "meaning": "?"
            }
          ]
        }
      ]
    },
    {
      "word": "ーじ",
      "kanji": "ー時",
      "romaji": "-ji",
      "mean": "- giờ",
      "kanjiDetails": [
        {
          "kanji": "時",
          "onyomi": "ジ (ji)",
          "kunyomi": "とき (toki)",
          "meaning": "Thời gian",
          "sinoVietnamese": "THỜI",
          "strokes": 10,
          "jlpt": "N5",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời (日) chiếu xuống chùa (寺) để báo thời gian.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "寺",
              "meaning": "chùa"
            }
          ]
        }
      ]
    },
    {
      "word": "ーふん（－ぷん）",
      "kanji": "ー分",
      "romaji": "-fun (-pun)",
      "mean": "- phút",
      "kanjiDetails": [
        {
          "kanji": "分",
          "onyomi": "フン (fun), ブン (bun)",
          "kunyomi": "わ.ける (wakeru)",
          "meaning": "Phân chia, phút",
          "sinoVietnamese": "PHÂN",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "刀 (đao)",
          "mnemonic": "Cầm kiếm (刀) chém đôi thành tám (八) mảnh.",
          "exampleSentences": [],
          "components": [
            {
              "char": "八",
              "meaning": "bát"
            },
            {
              "char": "刀",
              "meaning": "đao"
            }
          ]
        }
      ]
    },
    {
      "word": "はん",
      "kanji": "半",
      "romaji": "han",
      "mean": "Rưỡi, nửa",
      "kanjiDetails": [
        {
          "kanji": "半",
          "onyomi": "ハン (han)",
          "kunyomi": "なか.ば (nakaba)",
          "meaning": "Một nửa",
          "sinoVietnamese": "BÁN",
          "strokes": 5,
          "jlpt": "N5",
          "radicals": "十 (thập)",
          "mnemonic": "Hai (二) cái que cắm vào cái lỗ ở giữa (丨), chia làm đôi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "丷",
              "meaning": "bát"
            },
            {
              "char": "二",
              "meaning": "nhị"
            },
            {
              "char": "丨",
              "meaning": "sổ"
            }
          ]
        }
      ]
    },
    {
      "word": "なんじ",
      "kanji": "何時",
      "romaji": "nanji",
      "mean": "Mấy giờ",
      "kanjiDetails": [
        {
          "kanji": "何",
          "onyomi": "カ (ka)",
          "kunyomi": "なに (nani), なん (nan)",
          "meaning": "Cái gì",
          "sinoVietnamese": "HÀ",
          "strokes": 7,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (イ) khả (可) ái đang hỏi cái gì.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "可",
              "meaning": "khả"
            }
          ]
        },
        {
          "kanji": "時",
          "onyomi": "ジ (ji)",
          "kunyomi": "とき (toki)",
          "meaning": "Thời gian",
          "sinoVietnamese": "THỜI",
          "strokes": 10,
          "jlpt": "N5",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời (日) chiếu xuống chùa (寺).",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "寺",
              "meaning": "chùa"
            }
          ]
        }
      ]
    },
    {
      "word": "なんぷん",
      "kanji": "何分",
      "romaji": "nanpun",
      "mean": "Mấy phút",
      "kanjiDetails": [
        {
          "kanji": "何",
          "onyomi": "カ (ka)",
          "kunyomi": "なに (nani), なん (nan)",
          "meaning": "Cái gì",
          "sinoVietnamese": "HÀ",
          "strokes": 7,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (イ) khả (可) ái.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "可",
              "meaning": "khả"
            }
          ]
        },
        {
          "kanji": "分",
          "onyomi": "フン (fun)",
          "kunyomi": "わ.ける (wakeru)",
          "meaning": "Phân chia",
          "sinoVietnamese": "PHÂN",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "刀 (đao)",
          "mnemonic": "Đao (刀) chém tám (八) mảnh.",
          "exampleSentences": [],
          "components": [
            {
              "char": "八",
              "meaning": "bát"
            },
            {
              "char": "刀",
              "meaning": "đao"
            }
          ]
        }
      ]
    },
    {
      "word": "ごぜん",
      "kanji": "午前",
      "romaji": "gozen",
      "mean": "Trước 12 giờ trưa, sáng",
      "kanjiDetails": [
        {
          "kanji": "午",
          "onyomi": "ゴ (go)",
          "kunyomi": "",
          "meaning": "Ngọ (12h trưa)",
          "sinoVietnamese": "NGỌ",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "十 (thập)",
          "mnemonic": "Thập (十) nhân với hai (ngả mũ) là ngọ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "𠂉",
              "meaning": "nhân"
            },
            {
              "char": "十",
              "meaning": "thập"
            }
          ]
        },
        {
          "kanji": "前",
          "onyomi": "ゼン (zen)",
          "kunyomi": "まえ (mae)",
          "meaning": "Trước",
          "sinoVietnamese": "TIỀN",
          "strokes": 9,
          "jlpt": "N5",
          "radicals": "刀 (đao)",
          "mnemonic": "Cầm gươm (刂) đứng trước mặt trăng (月) nói lời (ngang) dối trá.",
          "exampleSentences": [],
          "components": [
            {
              "char": "䒑",
              "meaning": "thảo đầu"
            },
            {
              "char": "月",
              "meaning": "nguyệt"
            },
            {
              "char": "刂",
              "meaning": "đao"
            }
          ]
        }
      ]
    },
    {
      "word": "ごご",
      "kanji": "午後",
      "romaji": "gogo",
      "mean": "Sau 12 giờ trưa, chiều",
      "kanjiDetails": [
        {
          "kanji": "午",
          "onyomi": "ゴ (go)",
          "kunyomi": "",
          "meaning": "Ngọ",
          "sinoVietnamese": "NGỌ",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "十 (thập)",
          "mnemonic": "Thập (十) nhân với hai (ngả mũ) là ngọ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "𠂉",
              "meaning": "nhân"
            },
            {
              "char": "十",
              "meaning": "thập"
            }
          ]
        },
        {
          "kanji": "後",
          "onyomi": "ゴ (go), コウ (kou)",
          "kunyomi": "うし.ろ (ushiro), あと (ato)",
          "meaning": "Sau",
          "sinoVietnamese": "HẬU",
          "strokes": 9,
          "jlpt": "N5",
          "radicals": "彳 (xích)",
          "mnemonic": "Đi (彳) dây (幺) phía sau thấy đau chân (夂).",
          "exampleSentences": [],
          "components": [
            {
              "char": "彳",
              "meaning": "xích"
            },
            {
              "char": "幺",
              "meaning": "yêu"
            },
            {
              "char": "夂",
              "meaning": "truy"
            }
          ]
        }
      ]
    },
    {
      "word": "あさ",
      "kanji": "朝",
      "romaji": "asa",
      "mean": "Buổi sáng, sáng",
      "kanjiDetails": [
        {
          "kanji": "朝",
          "onyomi": "チョウ (chou)",
          "kunyomi": "あさ (asa)",
          "meaning": "Buổi sáng",
          "sinoVietnamese": "TRIỀU",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "月 (nguyệt)",
          "mnemonic": "Mười (十) ngày (日) mười (十) tháng (月) là một triều đại.",
          "exampleSentences": [],
          "components": [
            {
              "char": "𠦝",
              "meaning": "tảo"
            },
            {
              "char": "月",
              "meaning": "nguyệt"
            }
          ]
        }
      ]
    },
    {
      "word": "ひる",
      "kanji": "昼",
      "romaji": "hiru",
      "mean": "Buổi trưa, trưa",
      "kanjiDetails": [
        {
          "kanji": "昼",
          "onyomi": "チュウ (chuu)",
          "kunyomi": "ひる (hiru)",
          "meaning": "Buổi trưa",
          "sinoVietnamese": "TRÚ",
          "strokes": 9,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Cây thước (尺) đo bóng mặt trời (日) buổi trưa.",
          "exampleSentences": [],
          "components": [
            {
              "char": "尺",
              "meaning": "thước"
            },
            {
              "char": "旦",
              "meaning": "đán"
            }
          ]
        }
      ]
    },
    {
      "word": "ばん（よる）",
      "kanji": "晩（夜）",
      "romaji": "ban (yoru)",
      "mean": "Buổi tối, tối",
      "kanjiDetails": [
        {
          "kanji": "晩",
          "onyomi": "バン (ban)",
          "kunyomi": "",
          "meaning": "Buổi tối",
          "sinoVietnamese": "VÃN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời (日) lặn, miễn (免) làm việc là buổi tối.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "免",
              "meaning": "miễn"
            }
          ]
        },
        {
          "kanji": "夜",
          "onyomi": "ヤ (ya)",
          "kunyomi": "よる (yoru)",
          "meaning": "Ban đêm",
          "sinoVietnamese": "DẠ",
          "strokes": 8,
          "jlpt": "N4",
          "radicals": "夕 (tịch)",
          "mnemonic": "Người (イ) đội mũ đứng ngắm trăng chiều (夕).",
          "exampleSentences": [],
          "components": [
            {
              "char": "亠",
              "meaning": "đầu"
            },
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "夂",
              "meaning": "truy"
            }
          ]
        }
      ]
    },
    {
      "word": "おととい",
      "kanji": "",
      "romaji": "ototoi",
      "mean": "Hôm kia"
    },
    {
      "word": "きのう",
      "kanji": "",
      "romaji": "kinou",
      "mean": "Hôm qua"
    },
    {
      "word": "きょう",
      "kanji": "",
      "romaji": "kyou",
      "mean": "Hôm nay"
    },
    {
      "word": "あした",
      "kanji": "",
      "romaji": "ashita",
      "mean": "Ngày mai"
    },
    {
      "word": "あさって",
      "kanji": "",
      "romaji": "asatte",
      "mean": "Ngày kia"
    },
    {
      "word": "けさ",
      "kanji": "",
      "romaji": "kesa",
      "mean": "Sáng nay"
    },
    {
      "word": "こんばん",
      "kanji": "今晩",
      "romaji": "konban",
      "mean": "Tối nay",
      "kanjiDetails": [
        {
          "kanji": "今",
          "onyomi": "コン (kon)",
          "kunyomi": "いま (ima)",
          "meaning": "Bây giờ",
          "sinoVietnamese": "KIM",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Giờ (今) đã đến.",
          "exampleSentences": [],
          "components": [
            {
              "char": "人",
              "meaning": "người"
            },
            {
              "char": "亽",
              "meaning": "?"
            }
          ]
        },
        {
          "kanji": "晩",
          "onyomi": "バン (ban)",
          "kunyomi": "",
          "meaning": "Tối",
          "sinoVietnamese": "VÃN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời (日) lặn là tối.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "免",
              "meaning": "miễn"
            }
          ]
        }
      ]
    },
    {
      "word": "やすみ",
      "kanji": "休み",
      "romaji": "yasumi",
      "mean": "Nghỉ, nghỉ phép, ngày nghỉ",
      "kanjiDetails": [
        {
          "kanji": "休",
          "onyomi": "キュウ (kyuu)",
          "kunyomi": "やす.み (yasumi)",
          "meaning": "Nghỉ",
          "sinoVietnamese": "HƯU",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người (人) tựa vào cây (木).",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "木",
              "meaning": "cây"
            }
          ]
        }
      ]
    },
    {
      "word": "ひるやすみ",
      "kanji": "昼休み",
      "romaji": "hiruyasumi",
      "mean": "Nghỉ trưa",
      "kanjiDetails": [
        {
          "kanji": "昼",
          "onyomi": "チュウ (chuu)",
          "kunyomi": "ひる (hiru)",
          "meaning": "Trưa",
          "sinoVietnamese": "TRÚ",
          "strokes": 9,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời (日) giữa trưa.",
          "exampleSentences": [],
          "components": [
            {
              "char": "尺",
              "meaning": "thước"
            },
            {
              "char": "旦",
              "meaning": "đán"
            }
          ]
        },
        {
          "kanji": "休",
          "onyomi": "キュウ (kyuu)",
          "kunyomi": "やす.み (yasumi)",
          "meaning": "Nghỉ",
          "sinoVietnamese": "HƯU",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người tựa cây.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "木",
              "meaning": "cây"
            }
          ]
        }
      ]
    },
    {
      "word": "まいあさ",
      "kanji": "毎朝",
      "romaji": "maiasa",
      "mean": "Hàng sáng, mỗi sáng",
      "kanjiDetails": [
        {
          "kanji": "毎",
          "onyomi": "マイ (mai)",
          "kunyomi": "",
          "meaning": "Mỗi",
          "sinoVietnamese": "MỖI",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "毋 (vô)",
          "mnemonic": "Mỗi người (人) đều có mẹ (母).",
          "exampleSentences": [],
          "components": [
            {
              "char": "毋",
              "meaning": "vô"
            }
          ]
        },
        {
          "kanji": "朝",
          "onyomi": "チョウ (chou)",
          "kunyomi": "あさ (asa)",
          "meaning": "Sáng",
          "sinoVietnamese": "TRIỀU",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "月 (nguyệt)",
          "mnemonic": "Mặt trăng (月) buổi sáng.",
          "exampleSentences": [],
          "components": [
            {
              "char": "𠦝",
              "meaning": "tảo"
            },
            {
              "char": "月",
              "meaning": "nguyệt"
            }
          ]
        }
      ]
    },
    {
      "word": "まいばん",
      "kanji": "毎晩",
      "romaji": "maiban",
      "mean": "Hàng tối, mỗi tối",
      "kanjiDetails": [
        {
          "kanji": "毎",
          "onyomi": "マイ (mai)",
          "kunyomi": "",
          "meaning": "Mỗi",
          "sinoVietnamese": "MỖI",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "毋 (vô)",
          "mnemonic": "Mỗi người có mẹ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "毋",
              "meaning": "vô"
            }
          ]
        },
        {
          "kanji": "晩",
          "onyomi": "バン (ban)",
          "kunyomi": "",
          "meaning": "Tối",
          "sinoVietnamese": "VÃN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời lặn.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "免",
              "meaning": "miễn"
            }
          ]
        }
      ]
    },
    {
      "word": "まいにち",
      "kanji": "毎日",
      "romaji": "mainichi",
      "mean": "Hàng ngày, mỗi ngày",
      "kanjiDetails": [
        {
          "kanji": "毎",
          "onyomi": "マイ (mai)",
          "kunyomi": "",
          "meaning": "Mỗi",
          "sinoVietnamese": "MỖI",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "毋 (vô)",
          "mnemonic": "Mỗi người có mẹ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "毋",
              "meaning": "vô"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ニチ (nichi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày, mặt trời",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日 (nhật)",
          "mnemonic": "Hình mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "げつようび",
      "kanji": "月曜日",
      "romaji": "getsuyoubi",
      "mean": "Thứ hai",
      "kanjiDetails": [
        {
          "kanji": "月",
          "onyomi": "ゲツ (getsu), ガツ (gatsu)",
          "kunyomi": "つき (tsuki)",
          "meaning": "Mặt trăng, tháng",
          "sinoVietnamese": "NGUYỆT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "月 (nguyệt)",
          "mnemonic": "Hình mặt trăng khuyết.",
          "exampleSentences": [],
          "components": [
            {
              "char": "月",
              "meaning": "nguyệt"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày trong tuần",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日 (nhật)",
          "mnemonic": "Ngày (日) của loài chim (翟) - ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "かようび",
      "kanji": "火曜日",
      "romaji": "kayoubi",
      "mean": "Thứ ba",
      "kanjiDetails": [
        {
          "kanji": "火",
          "onyomi": "カ (ka)",
          "kunyomi": "ひ (hi)",
          "meaning": "Lửa",
          "sinoVietnamese": "HỎA",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "火 (hỏa)",
          "mnemonic": "Hình ngọn lửa đang cháy.",
          "exampleSentences": [],
          "components": [
            {
              "char": "火",
              "meaning": "hỏa"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "すいようび",
      "kanji": "水曜日",
      "romaji": "suiyoubi",
      "mean": "Thứ tư",
      "kanjiDetails": [
        {
          "kanji": "水",
          "onyomi": "スイ (sui)",
          "kunyomi": "みず (mizu)",
          "meaning": "Nước",
          "sinoVietnamese": "THỦY",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "水 (thủy)",
          "mnemonic": "Hình dòng nước chảy.",
          "exampleSentences": [],
          "components": [
            {
              "char": "水",
              "meaning": "thủy"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "もくようび",
      "kanji": "木曜日",
      "romaji": "mokuyoubi",
      "mean": "Thứ năm",
      "kanjiDetails": [
        {
          "kanji": "木",
          "onyomi": "モク (moku)",
          "kunyomi": "き (ki)",
          "meaning": "Cây",
          "sinoVietnamese": "MỘC",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "木 (mộc)",
          "mnemonic": "Hình cái cây.",
          "exampleSentences": [],
          "components": [
            {
              "char": "木",
              "meaning": "mộc"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "きんようび",
      "kanji": "金曜日",
      "romaji": "kinyoubi",
      "mean": "Thứ sáu",
      "kanjiDetails": [
        {
          "kanji": "金",
          "onyomi": "キン (kin)",
          "kunyomi": "かね (kane)",
          "meaning": "Vàng, tiền",
          "sinoVietnamese": "KIM",
          "strokes": 8,
          "jlpt": "N5",
          "radicals": "金 (kim)",
          "mnemonic": "Người (人) đứng trên đống vàng (王) lấp lánh (丷).",
          "exampleSentences": [],
          "components": [
            {
              "char": "金",
              "meaning": "kim"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "どようび",
      "kanji": "土曜日",
      "romaji": "doyoubi",
      "mean": "Thứ bảy",
      "kanjiDetails": [
        {
          "kanji": "土",
          "onyomi": "ド (do)",
          "kunyomi": "つち (tsuchi)",
          "meaning": "Đất",
          "sinoVietnamese": "THỔ",
          "strokes": 3,
          "jlpt": "N5",
          "radicals": "土 (thổ)",
          "mnemonic": "Cây mọc trên đất.",
          "exampleSentences": [],
          "components": [
            {
              "char": "土",
              "meaning": "thổ"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "にちようび",
      "kanji": "日曜日",
      "romaji": "nichyoubi",
      "mean": "Chủ nhật",
      "kanjiDetails": [
        {
          "kanji": "日",
          "onyomi": "ニチ (nichi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日 (nhật)",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "なんようび",
      "kanji": "何曜日",
      "romaji": "nanyoubi",
      "mean": "Thứ mấy",
      "kanjiDetails": [
        {
          "kanji": "何",
          "onyomi": "ナン (nan)",
          "kunyomi": "なに (nani)",
          "meaning": "Cái gì",
          "sinoVietnamese": "HÀ",
          "strokes": 7,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người khả ái.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "可",
              "meaning": "khả"
            }
          ]
        },
        {
          "kanji": "曜",
          "onyomi": "ヨウ (you)",
          "kunyomi": "",
          "meaning": "Ngày",
          "sinoVietnamese": "DIỆU",
          "strokes": 18,
          "jlpt": "N4",
          "radicals": "日",
          "mnemonic": "Ngày rực rỡ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            },
            {
              "char": "翟",
              "meaning": "địch"
            }
          ]
        },
        {
          "kanji": "日",
          "onyomi": "ビ (bi)",
          "kunyomi": "ひ (hi)",
          "meaning": "Ngày",
          "sinoVietnamese": "NHẬT",
          "strokes": 4,
          "jlpt": "N5",
          "radicals": "日",
          "mnemonic": "Mặt trời.",
          "exampleSentences": [],
          "components": [
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        }
      ]
    },
    {
      "word": "ばんごう",
      "kanji": "番号",
      "romaji": "bangou",
      "mean": "Số (số điện thoại, số phòng)",
      "kanjiDetails": [
        {
          "kanji": "番",
          "onyomi": "バン (ban)",
          "kunyomi": "つが.い (tsugai)",
          "meaning": "Lượt, canh gác",
          "sinoVietnamese": "PHIÊN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "田 (điền)",
          "mnemonic": "Trồng cây trên ruộng (田) theo phiên (番).",
          "exampleSentences": [],
          "components": [
            {
              "char": "釆",
              "meaning": "biện"
            },
            {
              "char": "田",
              "meaning": "điền"
            }
          ]
        },
        {
          "kanji": "号",
          "onyomi": "ゴウ (gou)",
          "kunyomi": "",
          "meaning": "Số, dấu hiệu",
          "sinoVietnamese": "HIỆU",
          "strokes": 5,
          "jlpt": "N3",
          "radicals": "口 (khẩu)",
          "mnemonic": "Mồm (口) hét lên tín hiệu (号).",
          "exampleSentences": [],
          "components": [
            {
              "char": "口",
              "meaning": "khẩu"
            },
            {
              "char": "丂",
              "meaning": "khảo"
            }
          ]
        }
      ]
    },
    {
      "word": "なんばん",
      "kanji": "何番",
      "romaji": "nanban",
      "mean": "Số bao nhiêu, số mấy",
      "kanjiDetails": [
        {
          "kanji": "何",
          "onyomi": "ナン (nan)",
          "kunyomi": "なに (nani)",
          "meaning": "Cái gì",
          "sinoVietnamese": "HÀ",
          "strokes": 7,
          "jlpt": "N5",
          "radicals": "人 (nhân)",
          "mnemonic": "Người khả ái.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亻",
              "meaning": "người"
            },
            {
              "char": "可",
              "meaning": "khả"
            }
          ]
        },
        {
          "kanji": "番",
          "onyomi": "バン (ban)",
          "kunyomi": "",
          "meaning": "Số, phiên",
          "sinoVietnamese": "PHIÊN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "田 (điền)",
          "mnemonic": "Phiên trực đồng ruộng.",
          "exampleSentences": [],
          "components": [
            {
              "char": "釆",
              "meaning": "biện"
            },
            {
              "char": "田",
              "meaning": "điền"
            }
          ]
        }
      ]
    },
    {
      "word": "～から",
      "kanji": "",
      "romaji": "~kara",
      "mean": "~ từ"
    },
    {
      "word": "～まで",
      "kanji": "",
      "romaji": "~made",
      "mean": "~ đến"
    },
    {
      "word": "～と～",
      "kanji": "",
      "romaji": "~to~",
      "mean": "~ và (dùng để nối hai danh từ)"
    },
    {
      "word": "そちら",
      "kanji": "",
      "romaji": "sochira",
      "mean": "Ông/bà, phía ông/phía bà"
    },
    {
      "word": "たいへんですね",
      "kanji": "大変ですね",
      "romaji": "taihen desu ne",
      "mean": "Anh/Chị vất vả quá. (dùng để bày tỏ sự thông cảm)",
      "kanjiDetails": [
        {
          "kanji": "大",
          "onyomi": "タイ (tai)",
          "kunyomi": "おお.きい (ookii)",
          "meaning": "To, lớn",
          "sinoVietnamese": "ĐẠI",
          "strokes": 3,
          "jlpt": "N5",
          "radicals": "大 (đại)",
          "mnemonic": "Người dang tay chân ra thì to.",
          "exampleSentences": [],
          "components": [
            {
              "char": "大",
              "meaning": "đại"
            }
          ]
        },
        {
          "kanji": "変",
          "onyomi": "ヘン (hen)",
          "kunyomi": "か.わる (kawaru)",
          "meaning": "Biến đổi, lạ",
          "sinoVietnamese": "BIẾN",
          "strokes": 9,
          "jlpt": "N4",
          "radicals": "夂 (truy)",
          "mnemonic": "Màu đỏ (亦) vừa đi vừa biến đổi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亦",
              "meaning": "diệc"
            },
            {
              "char": "夂",
              "meaning": "truy"
            }
          ]
        }
      ]
    },
    {
      "word": "えーと",
      "kanji": "",
      "romaji": "eeto",
      "mean": "Ừ, à (từ đệm trong hội thoại khi đang nghĩ điều muốn nói)"
    },
    {
      "word": "おねがいします",
      "kanji": "お願いします",
      "romaji": "onegaishimasu",
      "mean": "Nhờ anh/chị. Phiền anh/chị. Xin vui lòng giúp đỡ.",
      "kanjiDetails": [
        {
          "kanji": "願",
          "onyomi": "ガン (gan)",
          "kunyomi": "ねが.う (negau)",
          "meaning": "Ước, cầu nguyện",
          "sinoVietnamese": "NGUYỆN",
          "strokes": 19,
          "jlpt": "N4",
          "radicals": "頁 (hiệt)",
          "mnemonic": "Nguyên (原) cái đầu (頁) đang cầu nguyện.",
          "exampleSentences": [],
          "components": [
            {
              "char": "原",
              "meaning": "nguyên"
            },
            {
              "char": "頁",
              "meaning": "hiệt"
            }
          ]
        }
      ]
    },
    {
      "word": "かしこまりました",
      "kanji": "",
      "romaji": "kashikomarimashita",
      "mean": "Tôi hiểu rồi ạ./ Vâng, được rồi ạ."
    },
    {
      "word": "おといあわせのばんごう",
      "kanji": "お問い合わせの番号",
      "romaji": "otoiawase no bangou",
      "mean": "Số điện thoại mà ông/bà muốn hỏi",
      "kanjiDetails": [
        {
          "kanji": "問",
          "onyomi": "モン (mon)",
          "kunyomi": "と.う (tou)",
          "meaning": "Hỏi, vấn đề",
          "sinoVietnamese": "VẤN",
          "strokes": 11,
          "jlpt": "N4",
          "radicals": "口 (khẩu)",
          "mnemonic": "Đứng ở cửa (門) mở mồm (口) hỏi.",
          "exampleSentences": [],
          "components": [
            {
              "char": "門",
              "meaning": "môn"
            },
            {
              "char": "口",
              "meaning": "khẩu"
            }
          ]
        },
        {
          "kanji": "合",
          "onyomi": "ゴウ (gou)",
          "kunyomi": "あ.わせる (awaseru)",
          "meaning": "Hợp, vừa",
          "sinoVietnamese": "HỢP",
          "strokes": 6,
          "jlpt": "N3",
          "radicals": "口 (khẩu)",
          "mnemonic": "Một (一) người (人) một miệng (口) thì hòa hợp.",
          "exampleSentences": [],
          "components": [
            {
              "char": "𠆢",
              "meaning": "nhân"
            },
            {
              "char": "一",
              "meaning": "nhất"
            },
            {
              "char": "口",
              "meaning": "khẩu"
            }
          ]
        },
        {
          "kanji": "番",
          "onyomi": "バン (ban)",
          "kunyomi": "",
          "meaning": "Số, phiên",
          "sinoVietnamese": "PHIÊN",
          "strokes": 12,
          "jlpt": "N4",
          "radicals": "田",
          "mnemonic": "Phiên trực.",
          "exampleSentences": [],
          "components": [
            {
              "char": "釆",
              "meaning": "biện"
            },
            {
              "char": "田",
              "meaning": "điền"
            }
          ]
        },
        {
          "kanji": "号",
          "onyomi": "ゴウ (gou)",
          "kunyomi": "",
          "meaning": "Số",
          "sinoVietnamese": "HIỆU",
          "strokes": 5,
          "jlpt": "N3",
          "radicals": "口",
          "mnemonic": "Hét tín hiệu.",
          "exampleSentences": [],
          "components": [
            {
              "char": "口",
              "meaning": "khẩu"
            },
            {
              "char": "丂",
              "meaning": "khảo"
            }
          ]
        }
      ]
    },
    {
      "word": "〔どうも〕ありがとうございました",
      "kanji": "",
      "romaji": "〔doumo〕arigatou gozaimashita",
      "mean": "Xin cám ơn ông/bà."
    },
    {
      "word": "ニューヨーク",
      "kanji": "",
      "romaji": "Nyuuyooku",
      "mean": "New York"
    },
    {
      "word": "ペキン",
      "kanji": "北京",
      "romaji": "Pekin",
      "mean": "Bắc Kinh",
      "kanjiDetails": [
        {
          "kanji": "北",
          "onyomi": "ホク (hoku)",
          "kunyomi": "きた (kita)",
          "meaning": "Phía bắc",
          "sinoVietnamese": "BẮC",
          "strokes": 5,
          "jlpt": "N5",
          "radicals": "匕 (chủy)",
          "mnemonic": "Hai người ngồi quay lưng vào nhau.",
          "exampleSentences": [],
          "components": [
            {
              "char": "匕",
              "meaning": "chủy"
            },
            {
              "char": "匕",
              "meaning": "chủy"
            }
          ]
        },
        {
          "kanji": "京",
          "onyomi": "キョウ (kyou)",
          "kunyomi": "みやこ (miyako)",
          "meaning": "Kinh đô",
          "sinoVietnamese": "KINH",
          "strokes": 8,
          "jlpt": "N4",
          "radicals": "亠 (đầu)",
          "mnemonic": "Kinh đô có cái tháp (亠) nhỏ (小) trên miệng (口) nói.",
          "exampleSentences": [],
          "components": [
            {
              "char": "亠",
              "meaning": "đầu"
            },
            {
              "char": "口",
              "meaning": "khẩu"
            },
            {
              "char": "小",
              "meaning": "tiểu"
            }
          ]
        }
      ]
    },
    {
      "word": "ロンドン",
      "kanji": "",
      "romaji": "Rondon",
      "mean": "Luân Đôn"
    },
    {
      "word": "バンコク",
      "kanji": "",
      "romaji": "Bankoku",
      "mean": "Băng Cốc"
    },
    {
      "word": "ロサンゼルス",
      "kanji": "",
      "romaji": "Rosanzerusu",
      "mean": "Los Angeles"
    },
    {
      "word": "やまとびじゅつかん",
      "kanji": "やまと美術館",
      "romaji": "Yamato bijutsukan",
      "mean": "Tên một bảo tàng mỹ thuật (giả tưởng)",
      "kanjiDetails": [
        {
          "kanji": "美",
          "onyomi": "ビ (bi)",
          "kunyomi": "うつく.しい (utsukushii)",
          "meaning": "Đẹp",
          "sinoVietnamese": "MỸ",
          "strokes": 9,
          "jlpt": "N3",
          "radicals": "羊",
          "mnemonic": "Dê to thì đẹp.",
          "exampleSentences": [],
          "components": [
            {
              "char": "羊",
              "meaning": "dương/dê"
            },
            {
              "char": "大",
              "meaning": "đại/lớn"
            }
          ]
        },
        {
          "kanji": "術",
          "onyomi": "ジュツ (jutsu)",
          "kunyomi": "",
          "meaning": "Kỹ thuật",
          "sinoVietnamese": "THUẬT",
          "strokes": 11,
          "jlpt": "N3",
          "radicals": "行",
          "mnemonic": "Kỹ thuật đi đường.",
          "exampleSentences": [],
          "components": [
            {
              "char": "行",
              "meaning": "hành"
            },
            {
              "char": "朮",
              "meaning": "truật"
            }
          ]
        },
        {
          "kanji": "館",
          "onyomi": "カン (kan)",
          "kunyomi": "",
          "meaning": "Quán",
          "sinoVietnamese": "QUÁN",
          "strokes": 16,
          "jlpt": "N4",
          "radicals": "食",
          "mnemonic": "Hội quán ăn uống.",
          "exampleSentences": [],
          "components": [
            {
              "char": "食",
              "meaning": "thực"
            },
            {
              "char": "官",
              "meaning": "quan"
            }
          ]
        }
      ]
    },
    {
      "word": "おおさかデパート",
      "kanji": "大阪デパート",
      "romaji": "Osaka depaato",
      "mean": "Tên một bách hóa (giả tưởng)",
      "kanjiDetails": [
        {
          "kanji": "大",
          "onyomi": "ダイ (dai)",
          "kunyomi": "おお.きい (ookii)",
          "meaning": "To, lớn",
          "sinoVietnamese": "ĐẠI",
          "strokes": 3,
          "jlpt": "N5",
          "radicals": "大",
          "mnemonic": "To lớn.",
          "exampleSentences": [],
          "components": [
            {
              "char": "大",
              "meaning": "đại"
            }
          ]
        },
        {
          "kanji": "阪",
          "onyomi": "ハン (han)",
          "kunyomi": "さか (saka)",
          "meaning": "Dốc",
          "sinoVietnamese": "PHẢN",
          "strokes": 7,
          "jlpt": "N4",
          "radicals": "阜 (phụ)",
          "mnemonic": "Phản đối (反) leo dốc (阜).",
          "exampleSentences": [],
          "components": [
            {
              "char": "阝",
              "meaning": "phụ"
            },
            {
              "char": "反",
              "meaning": "phản"
            }
          ]
        }
      ]
    },
    {
      "word": "みどりとしょかん",
      "kanji": "みどり図書館",
      "romaji": "Midori toshokan",
      "mean": "Tên một thư viện (giả tưởng)",
      "kanjiDetails": [
        {
          "kanji": "図",
          "onyomi": "ズ (zu)",
          "kunyomi": "",
          "meaning": "Đồ",
          "sinoVietnamese": "ĐỒ",
          "strokes": 7,
          "jlpt": "N4",
          "radicals": "囗",
          "mnemonic": "Bản đồ.",
          "exampleSentences": [],
          "components": [
            {
              "char": "囗",
              "meaning": "vi"
            },
            {
              "char": "㐅",
              "meaning": "ngải"
            }
          ]
        },
        {
          "kanji": "書",
          "onyomi": "ショ (sho)",
          "kunyomi": "か.く (kaku)",
          "meaning": "Viết",
          "sinoVietnamese": "THƯ",
          "strokes": 10,
          "jlpt": "N5",
          "radicals": "曰",
          "mnemonic": "viết.",
          "exampleSentences": [],
          "components": [
            {
              "char": "聿",
              "meaning": "duật/bút"
            },
            {
              "char": "日",
              "meaning": "nhật"
            }
          ]
        },
        {
          "kanji": "館",
          "onyomi": "カン (kan)",
          "kunyomi": "",
          "meaning": "Quán",
          "sinoVietnamese": "QUÁN",
          "strokes": 16,
          "jlpt": "N4",
          "radicals": "食",
          "mnemonic": "hội quán.",
          "exampleSentences": [],
          "components": [
            {
              "char": "食",
              "meaning": "thực"
            },
            {
              "char": "官",
              "meaning": "quan"
            }
          ]
        }
      ]
    },
    {
      "word": "アップルぎんこう",
      "kanji": "アップル銀行",
      "romaji": "Appuru ginkou",
      "mean": "Tên một ngân hàng (giả tưởng)",
      "kanjiDetails": [
        {
          "kanji": "銀",
          "onyomi": "ギン (gin)",
          "kunyomi": "",
          "meaning": "Bạc",
          "sinoVietnamese": "NGÂN",
          "strokes": 14,
          "jlpt": "N4",
          "radicals": "金",
          "mnemonic": "Bạc.",
          "exampleSentences": [],
          "components": [
            {
              "char": "金",
              "meaning": "vàng/kim loại"
            },
            {
              "char": "艮",
              "meaning": "cấn"
            }
          ]
        },
        {
          "kanji": "行",
          "onyomi": "コウ (kou)",
          "kunyomi": "い.く (iku)",
          "meaning": "Đi",
          "sinoVietnamese": "HÀNH",
          "strokes": 6,
          "jlpt": "N5",
          "radicals": "行",
          "mnemonic": "Đi lại.",
          "exampleSentences": [],
          "components": [
            {
              "char": "彳",
              "meaning": "bước trái"
            },
            {
              "char": "亍",
              "meaning": "bước phải"
            }
          ]
        }
      ]
    }
  ],
  grammar: [
    {
      pattern: '今 ～時 ～分です',
      explanation: 'Để biểu thị thời gian, chúng ta thêm số đếm vào trước danh từ chỉ thời gian 「時」(giờ) và 「分」(phút). \nĐể hỏi về thời gian, dùng nghi vấn từ 「何」(nan) đặt trước danh từ chỉ thời gian: 「何時」(nanji - mấy giờ), 「何分」(nanpun - mấy phút).',
      example: '今何時ですか。 (Bây giờ là mấy giờ?)',
      examples: [
        { jp: '今何時ですか。', vn: 'Bây giờ là mấy giờ?', furigana: [{ kanji: '今', reading: 'いま', meaning: 'KIM' }, { kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }] },
        { jp: '7時10分です。', vn: '7 giờ 10 phút.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '分', reading: 'ぷん', meaning: 'PHÂN' }] },
        { jp: 'ニューヨークは今何時ですか。', vn: 'Ở New York bây giờ là mấy giờ?', furigana: [{ kanji: '今', reading: 'いま', meaning: 'KIM' }, { kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }] },
        { jp: '午前4時です。', vn: '4 giờ sáng.', furigana: [{ kanji: '午前', reading: 'ごぜん', meaning: 'NGỌ TIỀN' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }] }
      ]
    },
    {
      pattern: 'Động từ ます',
      explanation: '1) Động từ thể ます cấu thành vị ngữ của câu. \n2) Thể hiện thái độ lịch sự của người nói đối với người nghe. \n3) Biểu thị một thói quen trong hiện tại hoặc một sự thật hiển nhiên, hoặc một hành động sẽ xảy ra trong tương lai.',
      example: '私は毎日勉強します。 (Tôi học hàng ngày.)',
      examples: [
        { jp: '私は毎日勉強します。', vn: 'Tôi học hàng ngày.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] }
      ]
    },
    {
      pattern: 'Động từ ます / ません / ました / ませんでした',
      explanation: 'Các dạng biến đổi của động từ thể ます:\n- Khẳng định (Hiện tại/Tương lai): ～ます (Ví dụ: 起きます)\n- Phủ định (Hiện tại/Tương lai): ～ません (Ví dụ: 起きません)\n- Khẳng định (Quá khứ): ～ました (Ví dụ: 起きました)\n- Phủ định (Quá khứ): ～ませんでした (Ví dụ: 起きませんでした)\n\nTrong câu hỏi, thêm k trợ từ 「か」 vào cuối câu. Câu trả lời nhắc lại động từ trong câu hỏi.',
      example: '毎朝6時に起きます。 (Hàng sáng tôi dậy lúc 6 giờ.)',
      examples: [
        { jp: '毎朝6時に起きます。', vn: 'Hàng sáng tôi dậy lúc 6 giờ.', furigana: [{ kanji: '毎朝', reading: 'まいあさ', meaning: 'MỖI TRIỀU' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '起', reading: 'お', meaning: 'KHỞI' }] },
        { jp: 'あした6時に起きます。', vn: 'Ngày mai tôi (sẽ) dậy lúc 6 giờ.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '起', reading: 'お', meaning: 'KHỞI' }] },
        { jp: 'けさ6時に起きました。', vn: 'Sáng nay tôi (đã) dậy lúc 6 giờ.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '起', reading: 'お', meaning: 'KHỞI' }] },
        { jp: 'きのう勉強しましたか。', vn: 'Hôm qua bạn có học không?', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: 'はい、勉強しました。', vn: 'Có, hôm qua tôi có học.', furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: 'いいえ、勉強しませんでした。', vn: 'Không, hôm qua tôi không học.', furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] }
      ]
    },
    {
      pattern: 'Danh từ (thời gian) に Động từ',
      explanation: 'Dùng trợ từ 「に」 để biểu thị thời điểm một hành động xảy ra. \n「に」 chỉ dùng với những danh từ chỉ thời gian có con số đi kèm (ví dụ: 6 giờ, ngày 2 tháng 7). \nĐối với các danh từ chỉ thời gian không có con số (ví dụ: hôm nay, ngày mai, hàng sáng), không dùng 「に」. \nThứ trong tuần có thể dùng hoặc không dùng 「に」.',
      example: '6時半に起きます。 (Tôi dậy lúc 6 giờ rưỡi.)',
      examples: [
        { jp: '6時半に起きます。', vn: 'Tôi dậy lúc 6 giờ rưỡi.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '半', reading: 'はん', meaning: 'BÁN' }, { kanji: '起', reading: 'お', meaning: 'KHỞI' }] },
        { jp: '7月2日に日本へ来ました。', vn: 'Tôi đến Nhật vào ngày 2 tháng 7.', furigana: [{ kanji: '月', reading: 'がつ', meaning: 'NGUYỆT' }, { kanji: '日', reading: 'にち', meaning: 'NHẬT' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '日曜日[に]奈良へ行きます。', vn: 'Chủ nhật tôi sẽ đi Nara.', furigana: [{ kanji: '日曜日', reading: 'にちようび', meaning: 'NHẬT DIỆU NHẬT' }, { kanji: '奈良', reading: 'なら', meaning: 'NẠI LƯƠNG' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'きのう勉強しました。', vn: 'Hôm qua tôi đã học.', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] }
      ]
    },
    {
      pattern: 'Danh từ 1 から Danh từ 2 まで',
      explanation: '「から」 biểu thị điểm bắt đầu (thời gian hoặc địa điểm), 「まで」 biểu thị điểm kết thúc.\nCó thể dùng riêng 「から」 hoặc 「まで」. \nCũng có thể dùng trực tiếp với 「です」.',
      example: '9時から5時まで働きます。 (Tôi làm việc từ 9 giờ đến 5 giờ.)',
      examples: [
        { jp: '9時から5時まで働きます。', vn: 'Tôi làm việc từ 9 giờ đến 5 giờ.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
        { jp: '大阪から東京まで3時間かかります。', vn: 'Từ Osaka đến Tokyo mất 3 tiếng.', furigana: [{ kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }] },
        { jp: '9時から働きます。', vn: 'Tôi làm việc từ 9 giờ.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
        { jp: '銀行は9時から3時までです。', vn: 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.', furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNH' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }] },
        { jp: '昼休みは12時からです。', vn: 'Giờ nghỉ trưa bắt đầu từ 12 giờ.', furigana: [{ kanji: '昼休み', reading: 'ひるやすみ', meaning: 'TRÚ HƯU' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }] }
      ]
    },
    {
      pattern: 'Danh từ 1 と Danh từ 2',
      explanation: 'Dùng trợ từ 「と」 để nối hai danh từ với nhau (có ý nghĩa là "và", "với").',
      example: '銀行の休みは土曜日と日曜日です。 (Ngày nghỉ của ngân hàng là thứ 7 và chủ nhật.)',
      examples: [
        { jp: '銀行の休みは土曜日と日曜日です。', vn: 'Ngày nghỉ của ngân hàng là thứ 7 và chủ nhật.', furigana: [{ kanji: '銀行', reading: 'ぎんこう', meaning: 'NGÂN HÀNH' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }, { kanji: '土曜日', reading: 'どようび', meaning: 'THỔ DIỆU NHẬT' }, { kanji: '日曜日', reading: 'にちようび', meaning: 'NHẬT DIỆU NHẬT' }] }
      ]
    },
    {
      pattern: 'Câu + ね',
      explanation: 'Trợ từ 「ね」 được đặt ở cuối câu để biểu thị sự thông cảm, đồng tình, hoặc xác nhận (kỳ vọng người nghe đồng ý).',
      example: '毎日10時ごろまで勉強します。…大変ですね。 (Tôi học đến khoảng 10 giờ hàng ngày. ...Vất vả quá nhỉ.)',
      examples: [
        { jp: '毎日10時ごろまで勉強します。', vn: 'Hàng ngày tôi học đến khoảng 10 giờ.', furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: '大変ですね。', vn: 'Vất vả quá nhỉ.', furigana: [{ kanji: '大変', reading: 'たいへん', meaning: 'ĐẠI BIẾN' }] },
        { jp: '山田さんの電話番号は871の6813です。', vn: 'Số điện thoại của ông Yamada là 871-6813.', furigana: [{ kanji: '山田', reading: 'やまだ', meaning: 'SƠN ĐIỀN' }, { kanji: '電話番号', reading: 'でんわばんごう', meaning: 'ĐIỆN THOẠI PHIÊN HIỆU' }] },
        { jp: '871の6813ですね。', vn: 'Là 871-6813 nhỉ.', furigana: [] }
      ]
    }
  ],
  kaiwa: [],
  quiz: []
};



// Detailed data for Lesson 5
export const lesson5Data: LessonDetail = {
  id: 5,
  title: "Di chuyển",
  vocabulary: [
    { word: 'いきます', kanji: '行きます', romaji: 'ikimasu', mean: 'đi' },
    { word: 'きます', kanji: '来ます', romaji: 'kimasu', mean: 'đến' },
    { word: 'かえります', kanji: '帰ります', romaji: 'kaerimasu', mean: 'về' },
    { word: 'がっこう', kanji: '学校', romaji: 'gakkou', mean: 'trường học' },
    { word: 'スーパー', kanji: '', romaji: 'su-pa-', mean: 'siêu thị' },
    { word: 'えき', kanji: '駅', romaji: 'eki', mean: 'nhà ga' },
    { word: 'ひこうき', kanji: '飛行機', romaji: 'hikouki', mean: 'máy bay' },
    { word: 'ふね', kanji: '船', romaji: 'fune', mean: 'tàu, thuyền' },
    { word: 'でんしゃ', kanji: '電車', romaji: 'densha', mean: 'tàu điện' },
    { word: 'ちかてつ', kanji: '地下鉄', romaji: 'chikatetsu', mean: 'tàu điện ngầm' },
    { word: 'しんかんせん', kanji: '新幹線', romaji: 'shinkansen', mean: 'tàu Shinkansen (tàu siêu tốc)' },
    { word: 'バス', kanji: '', romaji: 'basu', mean: 'xe buýt' },
    { word: 'タクシー', kanji: '', romaji: 'takushi-', mean: 'taxi' },
    { word: 'じてんしゃ', kanji: '自転車', romaji: 'jitensha', mean: 'xe đạp' },
    { word: 'あるいて', kanji: '歩いて', romaji: 'aruite', mean: 'đi bộ' },
    { word: 'ひと', kanji: '人', romaji: 'hito', mean: 'người' },
    { word: 'ともだち', kanji: '友達', romaji: 'tomodachi', mean: 'bạn bè' },
    { word: 'かれ', kanji: '彼', romaji: 'kare', mean: 'anh ấy, bạn trai' },
    { word: 'かのじょ', kanji: '彼女', romaji: 'kanojo', mean: 'cô ấy, bạn gái' },
    { word: 'かぞく', kanji: '家族', romaji: 'kazoku', mean: 'gia đình' },
    { word: 'ひとりで', kanji: '一人で', romaji: 'hitoride', mean: 'một mình' },
    { word: 'せんしゅう', kanji: '先週', romaji: 'senshuu', mean: 'tuần trước' },
    { word: 'こんしゅう', kanji: '今週', romaji: 'konshuu', mean: 'tuần này' },
    { word: 'らいしゅう', kanji: '来週', romaji: 'raishuu', mean: 'tuần sau' },
    { word: 'せんげつ', kanji: '先月', romaji: 'sengetsu', mean: 'tháng trước' },
    { word: 'こんげつ', kanji: '今月', romaji: 'kongetsu', mean: 'tháng này' },
    { word: 'らいげつ', kanji: '来月', romaji: 'raigetsu', mean: 'tháng sau' },
    { word: 'きょねん', kanji: '去年', romaji: 'kyonen', mean: 'năm ngoái' },
    { word: 'ことし', kanji: '今年', romaji: 'kotoshi', mean: 'năm nay' },
    { word: 'らいねん', kanji: '来年', romaji: 'rainen', mean: 'năm sau' },
    { word: 'なん', kanji: '何', romaji: 'nan', mean: 'cái gì, mấy' },
    { word: 'どこ', kanji: '', romaji: 'doko', mean: 'đâu, chỗ nào' },
    { word: 'いつ', kanji: '', romaji: 'itsu', mean: 'khi nào, bao giờ' },
    { word: 'たんじょうび', kanji: '誕生日', romaji: 'tanjoubi', mean: 'sinh nhật' }
  ],
  grammar: [
    {
      pattern: 'Danh từ (địa điểm) へ 行きます/来ます/帰ります',
      explanation: 'Sử dụng trợ từ 「へ」 (đọc là "e") để chỉ phương hướng di chuyển đến địa điểm nào đó.',
      example: '京都へ行きます。 (Tôi đi Kyoto.)',
      examples: [
        { jp: '京都へ行きます。', vn: 'Tôi đi Kyoto.', furigana: [{ kanji: '京都', reading: 'きょうと', meaning: 'KINH ĐÔ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '日本へ来ました。', vn: 'Tôi đã đến Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'うちへ帰ります。', vn: 'Tôi về nhà.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
      ]
    },
    {
      pattern: 'どこ[へ]も 行きません',
      explanation: 'Khi muốn phủ định hoàn toàn hướng di chuyển (không đi đâu cả), dùng nghi vấn từ 「どこ」 kèm trợ từ 「も」 và động từ ở thể phủ định.',
      example: 'どこ[へ]も行きません。 (Tôi không đi đâu cả.)',
      examples: [
        { jp: 'きのうどこ[へ]行きましたか。', vn: 'Hôm qua bạn đi đâu?', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'どこ[へ]も行きませんでした。', vn: 'Tôi không đi đâu cả.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
      ]
    },
    {
      pattern: 'Danh từ (phương tiện) で 行きます',
      explanation: 'Trợ từ 「で」 biểu thị phương tiện, cách thức thực hiện hành động.',
      example: '電車で行きます。 (Tôi đi bằng tàu điện.)',
      examples: [
        { jp: '電車で行きます。', vn: 'Tôi đi bằng tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'タクシーで来ました。', vn: 'Tôi đến bằng taxi.', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '歩いて帰ります。', vn: 'Tôi đi bộ về (trường hợp đặc biệt không dùng で).', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
      ]
    },
    {
      pattern: 'Danh từ (người/động vật) と Động từ',
      explanation: 'Trợ từ 「と」 dùng để chỉ đối tượng cùng thực hiện hành động.',
      example: '家族と日本へ来ました。 (Tôi đến Nhật cùng gia đình.)',
      examples: [
        { jp: '家族と日本へ来ました。', vn: 'Tôi đến Nhật cùng gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '一人で東京へ行きます。', vn: 'Tôi đi Tokyo một mình (trường hợp đặc biệt dùng で).', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
      ]
    },
    {
      pattern: 'いつ',
      explanation: 'Dùng để hỏi về thời gian chung chung. Khác với 「なんじ」 (mấy giờ), 「いつ」 không thêm trợ từ 「に」.',
      example: 'いつ日本へ来ましたか。 (Bạn đến Nhật bao giờ?)',
      examples: [
        { jp: 'いつ日本へ来ましたか。', vn: 'Bạn đến Nhật bao giờ?', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '3月25日に来ました。', vn: 'Tôi đến vào ngày 25 tháng 3.', furigana: [{ kanji: '月', reading: 'がつ', meaning: 'NGUYỆT' }, { kanji: '日', reading: 'にち', meaning: 'NHẬT' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] }
      ]
    }
  ],
  kaiwa: [],
  quiz: []
};



const lesson6Data: LessonDetail = {
  id: 6,
  title: 'Bài 6',
  vocabulary: [
    { word: 'たべます', kanji: '食べます', romaji: 'tabemasu', mean: 'Ăn' },
    { word: 'のみます', kanji: '飲みます', romaji: 'nomimasu', mean: 'Uống' },
    { word: 'すいます', kanji: '吸います', romaji: 'suimasu', mean: 'Hút [thuốc lá]' },
    { word: 'みます', kanji: '見ます', romaji: 'mimasu', mean: 'Xem, nhìn, trông' },
    { word: 'ききます', kanji: '聞きます', romaji: 'kikimasu', mean: 'Nghe' },
    { word: 'よみます', kanji: '読みます', romaji: 'yomimasu', mean: 'Đọc' },
    { word: 'かきます', kanji: '書きます', romaji: 'kakimasu', mean: 'Viết, vẽ' },
    { word: 'かいます', kanji: '買います', romaji: 'kaimasu', mean: 'Mua' },
    { word: 'とります', kanji: '撮ります', romaji: 'torimasu', mean: 'Chụp [ảnh]' },
    { word: 'します', kanji: 'します', romaji: 'shimasu', mean: 'Làm' },
    { word: 'あいます', kanji: '会います', romaji: 'aimasu', mean: 'Gặp [bạn]' },
    { word: 'ごはん', kanji: 'ごはん', romaji: 'gohan', mean: 'Cơm, bữa ăn' },
    { word: 'あさごはん', kanji: '朝ごはん', romaji: 'asagohan', mean: 'Cơm sáng' },
    { word: 'ひるごはん', kanji: '昼ごはん', romaji: 'hirugohan', mean: 'Cơm trưa' },
    { word: 'ばんごはん', kanji: '晩ごはん', romaji: 'bangohan', mean: 'Cơm tối' },
    { word: 'パン', kanji: 'パン', romaji: 'pan', mean: 'Bánh mì' },
    { word: 'たまご', kanji: '卵', romaji: 'tamago', mean: 'Trứng' },
    { word: 'にく', kanji: '肉', romaji: 'niku', mean: 'Thịt' },
    { word: 'さかな', kanji: '魚', romaji: 'sakana', mean: 'Cá' },
    { word: 'やさい', kanji: '野菜', romaji: 'yasai', mean: 'Rau' },
    { word: 'くだもの', kanji: '果物', romaji: 'kudamono', mean: 'Hoa quả, trái cây' },
    { word: 'みず', kanji: '水', romaji: 'mizu', mean: 'Nước' },
    { word: 'おちゃ', kanji: 'お茶', romaji: 'ocha', mean: 'Trà' },
    { word: 'こうちゃ', kanji: '紅茶', romaji: 'koucha', mean: 'Trà đen' },
    { word: 'ぎゅうにゅう', kanji: '牛乳', romaji: 'gyuunyuu', mean: 'Sữa bò' },
    { word: 'ミルク', kanji: 'ミルク', romaji: 'miruku', mean: 'Sữa (milk)' },
    { word: 'ジュース', kanji: 'ジュース', romaji: 'juusu', mean: 'Nước hoa quả' },
    { word: 'ビール', kanji: 'ビール', romaji: 'biiru', mean: 'Bia' },
    { word: 'おさけ', kanji: 'お酒', romaji: 'osake', mean: 'Rượu, rượu sake' },
    { word: 'ビデオ', kanji: 'ビデオ', romaji: 'bideo', mean: 'Video, băng video, đầu video' },
    { word: 'えいが', kanji: '映画', romaji: 'eiga', mean: 'Phim, điện ảnh' },
    { word: 'CD', kanji: 'CD', romaji: 'CD', mean: 'Đĩa CD' },
    { word: 'てがみ', kanji: '手紙', romaji: 'tegami', mean: 'Thư' },
    { word: 'レポート', kanji: 'レポート', romaji: 'repooto', mean: 'Báo cáo' },
    { word: 'しゃしん', kanji: '写真', romaji: 'shashin', mean: 'Ảnh' },
    { word: 'みせ', kanji: '店', romaji: 'mise', mean: 'Cửa hàng, tiệm' },
    { word: 'レストラン', kanji: 'レストラン', romaji: 'resutoran', mean: 'Nhà hàng' },
    { word: 'にわ', kanji: '庭', romaji: 'niwa', mean: 'Vườn' },
    { word: 'しゅくだい', kanji: '宿題', romaji: 'shukudai', mean: 'Bài tập về nhà' },
    { word: 'テニス', kanji: 'テニス', romaji: 'tenisu', mean: 'Quần vợt' },
    { word: 'サッカー', kanji: 'サッカー', romaji: 'sakkaa', mean: 'Bóng đá' },
    { word: 'おはなみ', kanji: 'お花見', romaji: 'ohanami', mean: 'Ngắm hoa anh đào' },
    { word: 'なに', kanji: '何', romaji: 'nani', mean: 'Cái gì, gì' },
    { word: 'いっしょに', kanji: 'いっしょに', romaji: 'isshoni', mean: 'Cùng, cùng nhau' },
    { word: 'ちょっと', kanji: 'ちょっと', romaji: 'chotto', mean: 'Một chút' },
    { word: 'いつも', kanji: 'いつも', romaji: 'itsumo', mean: 'Luôn luôn, lúc nào cũng' },
    { word: 'ときどき', kanji: '時々', romaji: 'tokidoki', mean: 'Thỉnh thoảng' },
    { word: 'それから', kanji: 'それから', romaji: 'sorekara', mean: 'Sau đó, tiếp theo' },
    { word: 'ええ', kanji: 'ええ', romaji: 'ee', mean: 'Vâng, được' },
    { word: 'いいですね', kanji: 'いいですね', romaji: 'ii desu ne', mean: 'Được đấy nhỉ. / Hay quá.' },
    { word: 'わかりました', kanji: 'わかりました', romaji: 'wakarimashita', mean: 'Tôi hiểu rồi. / Vâng ạ.' },
    { word: 'なんですか', kanji: '何ですか', romaji: 'nan desu ka', mean: 'Có gì đấy ạ? / Cái gì vậy?' },
    { word: 'じゃ、また', kanji: 'じゃ、また', romaji: 'ja, mata', mean: 'Hẹn gặp lại [ngày mai]' },
    { word: 'メキシコ', kanji: 'メキシコ', romaji: 'mekishiko', mean: 'Mexico' },
    { word: 'おおさかじょうこうえん', kanji: '大阪城公園', romaji: 'oosaka-jou kouen', mean: 'Công viên lâu đài Osaka' }
  ],
  grammar: [
    {
      pattern: 'Danh từ を Động từ (ngoại động từ)',
      explanation: 'Trợ từ 「を」 được dùng để biểu thị bổ ngữ trực tiếp của ngoại động từ. Phát âm của 「を」 giống 「お」. Chữ 「を」 chỉ được dùng duy nhất làm trợ từ.',
      example: 'ジュースを 飲みます。 (Tôi uống nước hoa quả.)'
    },
    {
      pattern: 'Danh từ を します',
      explanation: 'Trong tiếng Nhật một phạm vi rất lớn các danh từ được dùng làm bổ ngữ của động từ 「します」. Mẫu câu này biểu thị hành động thực hiện nội dung được diễn đạt ở danh từ.',
      example: 'サッカーを します (Chơi bóng đá)\nパーティーを します (Mở tiệc/Tổ chức tiệc)\n宿題を します (Làm bài tập về nhà)'
    },
    {
      pattern: '何を しますか',
      explanation: 'Mẫu câu này dùng để hỏi làm cái gì. Có thể thêm từ 「は」 vào sau danh từ chỉ thời điểm để làm rõ chủ đề của câu.',
      example: '月曜日 何を しますか。 (Thứ hai anh/chị làm gì?)\n京都へ 行きます。 (Tôi đi Kyoto.)'
    },
    {
      pattern: 'なん và なに',
      explanation: '「なん」 và 「なに」 đều có cùng nghĩa là gì, cái gì.\n1) 「なん」 được dùng trong những trường hợp sau:\n- Từ liền sau có âm đầu ở hàng 「た」, hàng 「だ」, và hàng 「な」.\n- Khi nó đứng trước hậu tố chỉ cách đếm.\n2) Ngoài những trường hợp đã nêu ở 1) thì dùng 「なに」.',
      example: 'それは 何ですか。 (Đó là cái gì?)\n何の本ですか。 (Đây/Đó là quyển sách gì?)\n寝る まえに、何と 言いますか。 (Anh/Chị nói gì trước khi ngủ?)\nテレサちゃんは 何歳ですか。 (Em Teresa mấy tuổi?)\n何を 買いますか。 (Anh/Chị mua gì?)'
    },
    {
      pattern: 'Danh từ (địa điểm) で Động từ',
      explanation: 'Trong mẫu câu này thì 「で」 được dùng sau danh từ chỉ địa điểm để biểu thị địa điểm mà hành động xảy ra.',
      example: '駅で 新聞を 買います。 (Tôi mua báo ở ga.)'
    },
    {
      pattern: 'Động từ ませんか',
      explanation: 'Mẫu câu này dùng để mời hoặc đề nghị người nghe làm một việc gì đó.',
      example: 'いっしょに 京都へ 行きませんか。 (Anh/Chị có cùng đi Kyoto với tôi không?)\n･･･ええ、いいですね。 (Vâng, hay quá.)'
    },
    {
      pattern: 'Động từ ましょう',
      explanation: 'Mẫu câu này dùng để mời hay đề nghị người nghe cùng làm một việc gì đó với người nói. Nó thể hiện thái độ chủ động của người nói.',
      example: 'ちょっと 休みましょう。 (Chúng ta cùng nghỉ một lát đi.)\nいっしょに 昼ごはんを 食べませんか。 (Anh/Chị có cùng ăn cơm trưa với tôi không?)\n･･･ええ、食べましょう。 (Được, chúng ta cùng ăn nhé.)'
    },
    {
      pattern: 'お～',
      explanation: 'Dùng tiền tố 「お」 để biểu thị sự kính trọng của người nói đối với người nghe (ví dụ: 「[お]くに」 nước của anh/chị) hoặc thể hiện thái độ lịch sự (ví dụ: 「[お]さけ」 rượu). Có một số trường hợp 「お」 đã thành cố định, không mang sắc thái kính trọng hay lịch sự đặc biệt (ví dụ: 「おちゃ」 trà, 「おかね」 tiền).',
      example: 'お酒 (Rượu)\nお花見 (Việc ngắm hoa anh đào)'
    }
  ],
  kaiwa: [],
  quiz: [
    {
      id: 1,
      question: "Kanji nào có nghĩa là 'Ăn'?",
      options: ["食", "飲", "見", "聞"],
      correctAnswer: "食",
      explanation: "食 (Thực) - Ăn. (飲: Ẩm - Uống, 見: Kiến - Nhìn, 聞: Văn - Nghe)"
    },
    {
      id: 2,
      question: "Kanji nào có nghĩa là 'Uống'?",
      options: ["飲", "吸", "食", "買"],
      correctAnswer: "飲",
      explanation: "飲 (Ẩm) - Uống. (吸: Hấp - Hút, 食: Thực - Ăn, 買: Mãi - Mua)"
    },
    {
      id: 3,
      question: "Chữ Hán [読] có cách đọc là gì?",
      options: ["よみます", "かきます", "ききます", "みます"],
      correctAnswer: "よみます",
      explanation: "読 (Độc) -> 読みます (yomimasu) - Đọc."
    },
    {
      id: 4,
      question: "Chữ Hán [見] có cách đọc là gì?",
      options: ["みます", "ききます", "あいます", "います"],
      correctAnswer: "みます",
      explanation: "見 (Kiến) -> 見ます (mimasu) - Xem/Nhìn."
    },
    {
      id: 5,
      question: "Từ [手紙] có nghĩa là gì?",
      options: ["Bức thư", "Báo cáo", "Ảnh", "Bài tập"],
      correctAnswer: "Bức thư",
      explanation: "手紙 (Thủ chỉ) -> tegami -> Bức thư."
    },
    {
      id: 6,
      question: "Từ [牛乳] đọc là gì?",
      options: ["ぎゅうにゅう", "ぎょうにゅう", "ぎゅうにゅ", "ぎゅにゅう"],
      correctAnswer: "ぎゅうにゅう",
      explanation: "牛乳 (Ngưu nhũ) -> gyuunyuu -> Sữa bò."
    },
    {
      id: 7,
      question: "Kanji của 'Rượu' là gì?",
      options: ["酒", "茶", "水", "卵"],
      correctAnswer: "酒",
      explanation: "酒 (Tửu) -> Sake/Osake. (茶: Trà, 水: Thủy, 卵: Noãn/Trứng)"
    },
    {
      id: 8,
      question: "Kanji của 'Cá' là gì?",
      options: ["魚", "肉", "卵", "菜"],
      correctAnswer: "魚",
      explanation: "魚 (Ngư) -> Sakana. (肉: Nhục/Thịt, 卵: Noãn/Trứng, 菜: Thái/Rau)"
    },
    {
      id: 9,
      question: "Từ [写真] có nghĩa là gì?",
      options: ["Ảnh", "Phim", "Video", "CD"],
      correctAnswer: "Ảnh",
      explanation: "写真 (Tả chân) -> Shashin -> Bức ảnh."
    },
    {
      id: 10,
      question: "Kanji của 'Bài tập về nhà' là gì?",
      options: ["宿題", "問題", "質問", "試験"],
      correctAnswer: "宿題",
      explanation: "宿題 (Túc đề) -> Shukudai -> Bài tập về nhà."
    }
  ]
};


const lesson7Data: LessonDetail = {
  id: 7,
  title: 'Bài 7',
  vocabulary: [
    { word: 'きります', kanji: '切ります', romaji: 'kirimasu', mean: 'Cắt' },
    { word: 'おくります', kanji: '送ります', romaji: 'okurimasu', mean: 'Gửi' },
    { word: 'あげます', kanji: 'あげます', romaji: 'agemasu', mean: 'Cho, tặng' },
    { word: 'もらいます', kanji: 'もらいます', romaji: 'moraimasu', mean: 'Nhận' },
    { word: 'かします', kanji: '貸します', romaji: 'kashimasu', mean: 'Cho mượn, cho vay' },
    { word: 'かります', kanji: '借ります', romaji: 'karimasu', mean: 'Mượn, vay' },
    { word: 'おしえます', kanji: '教えます', romaji: 'oshiemasu', mean: 'Dạy' },
    { word: 'ならいます', kanji: '習います', romaji: 'naraimasu', mean: 'Học, tập' },
    { word: 'かけます', kanji: 'かけます', romaji: 'kakemasu', mean: 'Gọi [điện thoại]' },
    { word: 'て', kanji: '手', romaji: 'te', mean: 'Tay' },
    { word: 'はし', kanji: '箸', romaji: 'hashi', mean: 'Đũa' },
    { word: 'スプーン', kanji: 'スプーン', romaji: 'supuun', mean: 'Thìa' },
    { word: 'ナイフ', kanji: 'ナイフ', romaji: 'naifu', mean: 'Dao' },
    { word: 'フォーク', kanji: 'フォーク', romaji: 'fooku', mean: 'Dĩa' },
    { word: 'はさみ', kanji: 'はさみ', romaji: 'hasami', mean: 'Kéo' },
    { word: 'ファクス', kanji: 'ファクス', romaji: 'fakusu', mean: 'Fax' },
    { word: 'ワープロ', kanji: 'ワープロ', romaji: 'waapuro', mean: 'Máy đánh chữ' },
    { word: 'パソコン', kanji: 'パソコン', romaji: 'pasokon', mean: 'Máy vi tính cá nhân' },
    { word: 'パンチ', kanji: 'パンチ', romaji: 'panchi', mean: 'Cái đục lỗ' },
    { word: 'ホッチキス', kanji: 'ホッチキス', romaji: 'hotchikisu', mean: 'Cái dập ghim' },
    { word: 'セロテープ', kanji: 'セロテープ', romaji: 'seroteepu', mean: 'Băng dính' },
    { word: 'けしゴム', kanji: '消しゴム', romaji: 'keshigomu', mean: 'Cái tẩy' },
    { word: 'かみ', kanji: '紙', romaji: 'kami', mean: 'Giấy' },
    { word: 'はな', kanji: '花', romaji: 'hana', mean: 'Hoa' },
    { word: 'シャツ', kanji: 'シャツ', romaji: 'shatsu', mean: 'Áo sơ mi' },
    { word: 'プレゼント', kanji: 'プレゼント', romaji: 'purezento', mean: 'Quà tặng' },
    { word: 'にもつ', kanji: '荷物', romaji: 'nimotsu', mean: 'Đồ đạc, hành lý' },
    { word: 'おかね', kanji: 'お金', romaji: 'okane', mean: 'Tiền' },
    { word: 'きっぷ', kanji: '切符', romaji: 'kippu', mean: 'Vé' },
    { word: 'クリスマス', kanji: 'クリスマス', romaji: 'kurisumasu', mean: 'Giáng sinh' },
    { word: 'ちち', kanji: '父', romaji: 'chichi', mean: 'Bố (dùng khi nói về bố mình)' },
    { word: 'はは', kanji: '母', romaji: 'haha', mean: 'Mẹ (dùng khi nói về mẹ mình)' },
    { word: 'おとうさん', kanji: 'お父さん', romaji: 'otousan', mean: 'Bố (dùng khi nói về bố người khác)' },
    { word: 'おかあさん', kanji: 'お母さん', romaji: 'okaasan', mean: 'Mẹ (dùng khi nói về mẹ người khác)' },
    { word: 'もう', kanji: 'もう', romaji: 'mou', mean: 'Đã, rồi' },
    { word: 'まだ', kanji: 'まだ', romaji: 'mada', mean: 'Chưa' },
    { word: 'これから', kanji: 'これから', romaji: 'korekara', mean: 'Từ bây giờ' },
    { word: 'すてきですね', kanji: 'すてきですね', romaji: 'suteki desu ne', mean: 'Hay nhỉ. / Đẹp nhỉ.' },
    { word: 'ごめんください', kanji: 'ごめんください', romaji: 'gomen kudasai', mean: 'Xin lỗi, có ai ở nhà không? / Tôi có thể vào được chứ?' },
    { word: 'いらっしゃい', kanji: 'いらっしゃい', romaji: 'irasshai', mean: 'Rất hoan nghênh anh/chị đã đến chơi.' },
    { word: 'どうぞ おあがり ください', kanji: 'どうぞ お上がり ください', romaji: 'douzo oagari kudasai', mean: 'Mời anh/chị vào.' },
    { word: 'しつれいします', kanji: '失礼します', romaji: 'shitsurei shimasu', mean: 'Xin phép tôi vào. / Xin phép ~.' },
    { word: 'いただきます', kanji: 'いただきます', romaji: 'itadakimasu', mean: 'Mời anh/chị dùng ~. (cách nói dùng trước khi ăn uống)' },
    { word: 'りょこう', kanji: '旅行', romaji: 'ryokou', mean: 'Du lịch' },
    { word: 'おみやげ', kanji: 'お土産', romaji: 'omiyage', mean: 'Quà (mua khi đi xa về)' }
  ],
  grammar: [
    {
      pattern: 'Danh từ (công cụ/phương tiện) で Động từ',
      explanation: 'Trợ từ 「で」 biểu thị phương tiện hay cách thức tiến hành một việc gì đó. (Tôi làm việc gì đó ĐẰNG/BẰNG cái gì đó)',
      example: 'はしで 食べます。 (Tôi ăn cơm bằng đũa.)\n日本語で レポートを 書きます。 (Tôi viết báo cáo bằng tiếng Nhật.)'
    },
    {
      pattern: '\"Từ/Câu\" は ～語で 何ですか',
      explanation: 'Mẫu câu này dùng để hỏi một từ, một ngữ hoặc một câu được nói như thế nào bằng một ngôn ngữ khác.',
      example: '「ありがとう」は 英語で 何ですか。 ("Arigatou" tiếng Anh nói thế nào?)\n･･･「Thank you」です。 (Tiếng Anh nói là "Thank you".)\n「Thank you」は 日本語で 何ですか。 ("Thank you" tiếng Nhật nói thế nào?)\n･･･「ありがとう」です。 (Tiếng Nhật nói là "Arigatou".)'
    },
    {
      pattern: 'Danh từ (người) に あげます/かします/おしえます',
      explanation: 'Những động từ như 「あげます」 (tặng), 「かします」 (cho mượn), 「おしえます」 (dạy) cần người làm đối tượng (để cho, cho mượn, dạy). Chúng ta đặt trợ từ 「に」 sau danh từ chỉ đối tượng này.\n*Chú ý: Đối với những động từ như 「おくります」 (gửi), 「でんわを かけます」 (gọi điện thoại) thì đối tượng không chỉ là người mà còn có thể là địa điểm (danh từ). Trong trường hợp đó, ngoài trợ từ 「に」, chúng ta còn có thể dùng trợ từ 「へ」.',
      example: '山田さんは 木村さんに 花を あげました。 (Ông Yamada tặng hoa cho chị Kimura.)\nイーさんに 本を 貸しました。 (Tôi cho chị Lee mượn sách.)\n太郎君に 英語を 教えます。 (Tôi dạy tiếng Anh cho cậu Tarou.)\n会社に 電話を かけます。 (Tôi gọi điện thoại đến công ty.)'
    },
    {
      pattern: 'Danh từ (người) に もらいます/かります/ならいます',
      explanation: 'Các động từ như 「もらいます」 (nhận), 「かります」 (vay, mượn), 「ならいます」 (học) biểu thị hành động từ phía người tiếp nhận. Khi dùng những động từ này trong câu mà chủ ngữ là người tiếp nhận thì chúng ta thêm 「に」 vào sau danh từ chỉ đối tác.\n*Trong mẫu câu này, chúng ta có thể dùng trợ từ 「から」 thay cho 「に」. Đặc biệt là khi đối tác không phải là người mà là một tổ chức nào đó (ví dụ: công ty hoặc trường học) thì không dùng 「に」 mà dùng 「から」.',
      example: '木村さんは 山田さんに 花を もらいました。 (Chị Kimura đã nhận hoa từ ông Yamada.)\nカリナさんに CDを 借りました。 (Tôi đã mượn đĩa CD từ chị Karina.)\nワンさんに 中国語を 習います。 (Tôi học tiếng Trung từ ông Wang.)\n銀行から お金を 借りました。 (Tôi đã vay tiền từ ngân hàng.)'
    },
    {
      pattern: 'もう Động từ ました',
      explanation: '「もう」 có nghĩa là "đã/rồi" và được dùng với động từ ở thời quá khứ 「Động từ ました」. Trong trường hợp này thì động từ ở thời quá khứ 「Động từ ました」 biểu thị một hành động nào đó đã kết thúc ở thời điểm hiện tại.\nĐối với câu hỏi 「もう Động từ ました」, thì câu trả lời là 「はい、もう Động từ ました」(trong trường hợp khẳng định), và 「いいえ、まだです」(trong trường hợp phủ định).',
      example: 'もう 荷物を 送りましたか。 (Anh/Chị đã gửi đồ chưa?)\n･･･はい、[もう] 送りました。 (Rồi, tôi đã gửi rồi.)\n･･･いいえ、まだです。 (Chưa, tôi chưa gửi.)'
    }
  ],
  kaiwa: [
    { char: 'A', jp: 'ごめんください。', vn: 'Xin lỗi, có ai ở nhà không?' },
    { char: 'B', jp: 'いらっしゃい。', vn: 'Chào mừng anh/chị đến chơi.' },
  ],
  quiz: []
};

const lesson8Data: LessonDetail = {
  id: 8,
  title: 'Bài 8',
  vocabulary: [
    { word: 'ハンサム [な]', kanji: 'ハンサム [な]', romaji: 'hansamu', mean: 'Đẹp trai' },
    { word: 'きれい [な]', kanji: 'きれい [な]', romaji: 'kirei', mean: 'Đẹp, sạch' },
    { word: 'しずか [な]', kanji: '静か [な]', romaji: 'shizuka', mean: 'Yên tĩnh' },
    { word: 'にぎやか [な]', kanji: 'にぎやか [な]', romaji: 'nigiyaka', mean: 'Náo nhiệt' },
    { word: 'ゆうめい [な]', kanji: '有名 [な]', romaji: 'yuumei', mean: 'Nổi tiếng' },
    { word: 'しんせつ [な]', kanji: '親切 [な]', romaji: 'shinsetsu', mean: 'Tốt bụng, thân thiện' },
    { word: 'げんき [な]', kanji: '元気 [な]', romaji: 'genki', mean: 'Khỏe' },
    { word: 'ひま [な]', kanji: '暇 [な]', romaji: 'hima', mean: 'Rảnh rỗi' },
    { word: 'べんり [な]', kanji: '便利 [な]', romaji: 'benri', mean: 'Tiện lợi' },
    { word: 'すてき [な]', kanji: 'すてき [な]', romaji: 'suteki', mean: 'Đẹp, hay' },
    { word: 'おおきい', kanji: '大きい', romaji: 'ookii', mean: 'Lớn, to' },
    { word: 'ちいさい', kanji: '小さい', romaji: 'chiisai', mean: 'Bé, nhỏ' },
    { word: 'あたらしい', kanji: '新しい', romaji: 'atarashii', mean: 'Mới' },
    { word: 'ふるい', kanji: '古い', romaji: 'furui', mean: 'Cũ' },
    { word: 'いい (よい)', kanji: 'いい (よい)', romaji: 'ii (yoi)', mean: 'Tốt' },
    { word: 'わるい', kanji: '悪い', romaji: 'warui', mean: 'Xấu' },
    { word: 'あつい', kanji: '暑い, 熱い', romaji: 'atsui', mean: 'Nóng' },
    { word: 'さむい', kanji: '寒い', romaji: 'samui', mean: 'Lạnh, rét (dùng cho thời tiết)' },
    { word: 'つめたい', kanji: '冷たい', romaji: 'tsumetai', mean: 'Lạnh, buốt (dùng cho cảm giác)' },
    { word: 'むずかしい', kanji: '難しい', romaji: 'muzukashii', mean: 'Khó' },
    { word: 'やさしい', kanji: '易しい', romaji: 'yasashii', mean: 'Dễ' },
    { word: 'たかい', kanji: '高い', romaji: 'takai', mean: 'Đắt, cao' },
    { word: 'やすい', kanji: '安い', romaji: 'yasui', mean: 'Rẻ' },
    { word: 'ひくい', kanji: '低い', romaji: 'hikui', mean: 'Thấp' },
    { word: 'おもしろい', kanji: 'おもしろい', romaji: 'omoshiroi', mean: 'Thú vị, hay' },
    { word: 'おいしい', kanji: 'おいしい', romaji: 'oishii', mean: 'Ngon' },
    { word: 'いそがしい', kanji: '忙しい', romaji: 'isogashii', mean: 'Bận' },
    { word: 'たのしい', kanji: '楽しい', romaji: 'tanoshii', mean: 'Vui' },
    { word: 'しろい', kanji: '白い', romaji: 'shiroi', mean: 'Trắng' },
    { word: 'くろい', kanji: '黒い', romaji: 'kuroi', mean: 'Đen' },
    { word: 'あかい', kanji: '赤い', romaji: 'akai', mean: 'Đỏ' },
    { word: 'あおい', kanji: '青い', romaji: 'aoi', mean: 'Xanh da trời' },
    { word: 'さくら', kanji: '桜', romaji: 'sakura', mean: 'Anh đào (hoa, cây)' },
    { word: 'やま', kanji: '山', romaji: 'yama', mean: 'Núi' },
    { word: 'まち', kanji: '町', romaji: 'machi', mean: 'Thị trấn, thị xã, thành phố' },
    { word: 'たべもの', kanji: '食べ物', romaji: 'tabemono', mean: 'Đồ ăn' },
    { word: 'くるま', kanji: '車', romaji: 'kuruma', mean: 'Xe ô-tô' },
    { word: 'ところ', kanji: '所', romaji: 'tokoro', mean: 'Nơi, chỗ' },
    { word: 'りょう', kanji: '寮', romaji: 'ryou', mean: 'Kí túc xá' },
    { word: 'べんきょう', kanji: '勉強', romaji: 'benkyou', mean: 'Học' },
    { word: 'せいかつ', kanji: '生活', romaji: 'seikatsu', mean: 'Cuộc sống, sinh hoạt' },
    { word: 'おしごと', kanji: '[お]仕事', romaji: 'shigoto', mean: 'Công việc (~を します: làm việc)' },
    { word: 'どう', kanji: 'どう', romaji: 'dou', mean: 'Thế nào' },
    { word: 'どんな', kanji: 'どんな', romaji: 'donna', mean: 'Như thế nào' },
    { word: 'どれ', kanji: 'どれ', romaji: 'dore', mean: 'Cái nào' },
    { word: 'とても', kanji: 'とても', romaji: 'totemo', mean: 'Rất, lắm' },
    { word: 'あまり', kanji: 'あまり', romaji: 'amari', mean: 'Không ~ lắm' },
    { word: 'そして', kanji: 'そして', romaji: 'soshite', mean: 'Và, thêm nữa (dùng để nối hai câu)' },
    { word: 'が', kanji: '～が、～', romaji: 'ga', mean: '～, nhưng ～' },
    { word: 'おげんきですか', kanji: 'お元気ですか', romaji: 'ogenki desu ka', mean: 'Anh/Chị có khỏe không?' },
    { word: 'そうですね', kanji: 'そうですね', romaji: 'sou desu ne', mean: 'Thế à./ Để tôi xem.' },
    { word: 'なれましたか', kanji: '日本の生活に慣れましたか', romaji: 'Nihon no seikatsu ni naremashita ka', mean: 'Anh/Chị đã quen với cuộc sống ở Nhật chưa?' },
    { word: 'いかがですか', kanji: '[～,] もう一杯いかがですか', romaji: 'mou ippai ikaga desu ka', mean: 'Anh/Chị dùng thêm một chén [~] nữa được không ạ?' },
    { word: 'けっこうです', kanji: 'いいえ、けっこうです', romaji: 'iie, kekkou desu', mean: 'Không, đủ rồi ạ.' },
    { word: 'もう～ですね', kanji: 'もう ～です[ね]', romaji: 'mou ~ desu ne', mean: 'Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?' },
    { word: 'しつれいします', kanji: 'そろそろ失礼します', romaji: 'sorosoro shitsurei shimasu', mean: 'Sắp đến lúc tôi phải xin phép rồi./ Đã đến lúc tôi phải về.' },
    { word: 'いらっしゃってください', kanji: 'また いらっしゃって ください', romaji: 'mata irasshatte kudasai', mean: 'Lần sau anh/chị lại đến chơi nhé.' },
    { word: 'ふじさん', kanji: '富士山', romaji: 'Fujisan', mean: 'Núi Phú Sĩ' },
    { word: 'びわこ', kanji: '琵琶湖', romaji: 'Biwako', mean: 'Hồ Biwa' },
    { word: 'シャンハイ', kanji: 'シャンハイ', romaji: 'Shanhai', mean: 'Thượng Hải' },
    { word: 'しちにんのさむらい', kanji: '七人の侍', romaji: 'Shichinin no Samurai', mean: 'Bảy chàng võ sĩ Samurai (tên phim)' },
    { word: 'きんかくじ', kanji: '金閣寺', romaji: 'Kinkakuji', mean: 'Chùa Kinkaku-ji (Chùa Vàng)' }
  ],
  grammar: [
    {
      pattern: 'Tính từ',
      explanation: 'Tính từ được chia làm 2 loại: Tính từ đuôi な và Tính từ đuôi い.',
      example: 'ハンサム[な] (đẹp trai), 親切[な] (tốt bụng)\n大きい (to), 小さい (nhỏ)'
    },
    {
      pattern: 'Danh từ は Tính từ です',
      explanation: 'Mẫu câu dùng để miêu tả trạng thái, tính chất của sự vật, sự việc.',
      example: 'ワット先生は 親切です。 (Thầy Watt tốt bụng.)\n富士山は 高いです。 (Núi Phú Sĩ cao.)'
    },
    {
      pattern: 'Tính từ な (bỏ な) ではありません',
      explanation: 'Phủ định của tính từ đuôi な.',
      example: 'あそこは 静かじゃ ありません。 (Chỗ kia không yên tĩnh.)'
    },
    {
      pattern: 'Tính từ い (bỏ い) くないです',
      explanation: 'Phủ định của tính từ đuôi い.',
      example: 'この本は 面白くないです。 (Quyển sách này không hay.)'
    }
  ],
  kaiwa: [
    { char: 'A', jp: 'そろそろ失礼します。', vn: 'Sắp đến lúc tôi phải về rồi.' },
    { char: 'B', jp: 'また いらっしゃって ください。', vn: 'Lần sau anh/chị lại đến chơi nhé.' },
  ],
  quiz: []
};

// Detailed data for Lesson 9
export const lesson9Data: LessonDetail = {
  id: 9,
  title: "Sở thích",
  vocabulary: [
    { word: 'わかります', kanji: '分かります', romaji: 'wakarimasu', mean: 'Hiểu' },
    { word: 'あります', kanji: 'あります', romaji: 'arimasu', mean: 'Có (sở hữu)' },
    { word: 'すき', kanji: '好き[な]', romaji: 'suki', mean: 'Thích' },
    { word: 'きらい', kanji: '嫌い[な]', romaji: 'kirai', mean: 'Ghét, không thích' },
    { word: 'じょうず', kanji: '上手[な]', romaji: 'jouzu', mean: 'Giỏi', kanjiDetails: [] },
    { word: 'へた', kanji: '下手[な]', romaji: 'heta', mean: 'Kém' },
    { word: 'りょうり', kanji: '料理', romaji: 'ryouri', mean: 'Món ăn, việc nấu ăn' },
    { word: 'のみもの', kanji: '飲み物', romaji: 'nomimono', mean: 'Đồ uống' },
    { word: 'スポーツ', kanji: 'スポーツ', romaji: 'supootsu', mean: 'Thể thao (~を します: chơi thể thao)' },
    { word: 'やきゅう', kanji: '野球', romaji: 'yakyuu', mean: 'Bóng chày (~を します: chơi bóng chày)' },
    { word: 'ダンス', kanji: 'ダンス', romaji: 'dansu', mean: 'Nhảy, khiêu vũ (~を します: nhảy, khiêu vũ)' },
    { word: 'おんがく', kanji: '音楽', romaji: 'ongaku', mean: 'Âm nhạc' },
    { word: 'うた', kanji: '歌', romaji: 'uta', mean: 'Bài hát' },
    { word: 'クラシック', kanji: 'クラシック', romaji: 'kurashikku', mean: 'Nhạc cổ điển' },
    { word: 'ジャズ', kanji: 'ジャズ', romaji: 'jazu', mean: 'Nhạc jazz' },
    { word: 'コンサート', kanji: 'コンサート', romaji: 'konsaato', mean: 'Buổi hòa nhạc' },
    { word: 'カラオケ', kanji: 'カラオケ', romaji: 'karaoke', mean: 'Karaoke' },
    { word: 'かぶき', kanji: '歌舞伎', romaji: 'kabuki', mean: 'Kabuki (một thể loại ca kịch truyền thống của Nhật)' },
    { word: 'え', kanji: '絵', romaji: 'e', mean: 'Tranh, hội họa' },
    { word: 'じ', kanji: '字', romaji: 'ji', mean: 'Chữ' },
    { word: 'かんじ', kanji: '漢字', romaji: 'kanji', mean: 'Chữ Hán' },
    { word: 'ひらがな', kanji: 'ひらがな', romaji: 'hiragana', mean: 'Chữ Hiragana' },
    { word: 'かたかな', kanji: 'かたかな', romaji: 'katakana', mean: 'Chữ Katakana' },
    { word: 'ローマじ', kanji: 'ローマ字', romaji: 'roomaji', mean: 'Chữ La Mã' },
    { word: 'こまかい おかね', kanji: '細かい お金', romaji: 'komakai okane', mean: 'Tiền lẻ' },
    { word: 'チケット', kanji: 'チケット', romaji: 'chiketto', mean: 'Vé (xem hòa nhạc, xem phim)' },
    { word: 'じかん', kanji: '時間', romaji: 'jikan', mean: 'Thời gian' },
    { word: 'ようじ', kanji: '用事', romaji: 'youji', mean: 'Việc bận, công chuyện' },
    { word: 'やくそく', kanji: '約束', romaji: 'yakusoku', mean: 'Cuộc hẹn, lời hứa' },
    { word: 'ごしゅじん', kanji: 'ご主人', romaji: 'goshujin', mean: 'Chồng (dùng khi nói về chồng người khác)' },
    { word: 'おっと / しゅじん', kanji: '夫 / 主人', romaji: 'otto / shujin', mean: 'Chồng (dùng khi nói về chồng mình)' },
    { word: 'おくさん', kanji: '奥さん', romaji: 'okusan', mean: 'Vợ (dùng khi nói về vợ người khác)' },
    { word: 'つま / かない', kanji: '妻 / 家内', romaji: 'tsuma / kanai', mean: 'Vợ (dùng khi nói về vợ mình)' },
    { word: 'こども', kanji: '子ども', romaji: 'kodomo', mean: 'Con cái' },
    { word: 'よく', kanji: 'よく', romaji: 'yoku', mean: 'Tốt, rõ (chỉ mức độ)' },
    { word: 'だいたい', kanji: 'だいたい', romaji: 'daitai', mean: 'Đại khái, đại thể' },
    { word: 'たくさん', kanji: 'たくさん', romaji: 'takusan', mean: 'Nhiều' },
    { word: 'すこし', kanji: '少し', romaji: 'sukoshi', mean: 'Ít, một ít' },
    { word: 'ぜんぜん', kanji: '全然', romaji: 'zenzen', mean: 'Hoàn toàn ~ không' },
    { word: 'はやく', kanji: '早く、速く', romaji: 'hayaku', mean: 'Sớm, nhanh' },
    { word: '～から', kanji: '～から', romaji: 'kara', mean: 'Vì ~' },
    { word: 'どうして', kanji: 'どうして', romaji: 'doushite', mean: 'Tại sao' },
    { word: 'ざんねんですね', kanji: '残念ですね', romaji: 'zannen desu ne', mean: 'Thật đáng tiếc nhỉ./ Buồn nhỉ.' },
    { word: 'すみません', kanji: 'すみません', romaji: 'sumimasen', mean: 'Xin lỗi.' },
    { word: 'もしもし', kanji: 'もしもし', romaji: 'moshimoshi', mean: 'A-lô' },
    { word: 'ああ', kanji: 'ああ', romaji: 'aa', mean: 'A (cách nói khi đã gặp được đúng người trên điện thoại)' },
    { word: 'いっしょに いかがですか', kanji: '一緒に いかがですか', romaji: 'isshoni ikaga desu ka', mean: 'Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?' },
    { word: '～はちょっと', kanji: '[～は] ちょっと……', romaji: '[~wa] chotto...', mean: '[~ thì] có lẽ không được rồi. (cách từ chối khéo)' },
    { word: 'だめですか', kanji: 'だめですか', romaji: 'dame desu ka', mean: 'Không được à?' },
    { word: 'また こんど おねがいします', kanji: 'また 今度 お願いします', romaji: 'mata kondo onegaishimasu', mean: 'Hẹn anh/chị lần sau vậy. (cách từ chối khéo)' },
    { word: 'おざわ せいじ', kanji: '小沢 征爾', romaji: 'Ozawa Seiji', mean: 'Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật' }
  ],
  grammar: [
    {
      pattern: 'N が あります / わかります',
      explanation: 'Đối với các động từ「あります」(có) và「わかります」(hiếu), đối tượng được biểu thị bằng trợ từ「が」thay vì「を」.',
      example: 'わたしは イタリア料理が 好きです。 (Tôi thích món ăn Ý.)\nわたしは 日本語が わかります。 (Tôi hiểu tiếng Nhật.)\nわたしは 車が あります。 (Tôi có một cái xe ô-tô.)'
    },
    {
      pattern: 'N が 好きです / 嫌いです / 上手です / 下手です',
      explanation: 'Các tính từ thị hiếu, năng lực như「すき」「きらい」「じょうず」「へた」cũng sử dụng trợ từ「が」để chỉ đối tượng.',
      example: '私は スポーツが 好きです。 (Tôi thích thể thao.)\nあの方は 歌が 上手です。 (Vị kia hát hay.)'
    },
    {
      pattern: 'どんな N',
      explanation: 'Dùng để hỏi về tính chất, trạng thái của người hay vật, hoặc để yêu cầu giải thích chi tiết hơn về một danh từ.',
      example: 'どんな スポーツが 好きですか。 (Anh/Chị thích môn thể thao nào?)\n…サッカーが 好きです。 (...Tôi thích bóng đá.)'
    },
    {
      pattern: 'よく / だいたい / たくさん / 少し / あまり / 全然',
      explanation: 'Các phó từ chỉ mức độ và số lượng, đặt trước động từ để bổ nghĩa.\n- Mức độ (dùng với わかります...): よく (rõ) > だいたい (đại khái) > すこし (một chút) > あまり (không ~ lắm) > ぜんぜん (hoàn toàn không)\n- Số lượng (dùng với あります...): たくさん (nhiều) > すこし (ít) > あまり (không ~ lắm) > ぜんぜん (hoàn toàn không)\n*Lưu ý: あまり và ぜんぜん luôn đi với thể phủ định.',
      example: '英語が よく わかります。 (Tôi hiểu tiếng Anh tốt.)\n英語が すこし わかります。 (Tôi hiểu tiếng Anh một chút.)\nお金が たくさん あります。 (Tôi có nhiều tiền.)\nお金が 全然 ありません。 (Tôi hoàn toàn không có tiền.)'
    },
    {
      pattern: 'S1 から、S2',
      explanation: '「から」được dùng để nối hai câu thành một câu. Cấu 1 biểu thị lý do, nguyên nhân cho Câu 2.',
      example: '時間が ありませんから、新聞を 読みません。 (Vì không có thời gian nên tôi không đọc báo.)\n毎朝 新聞を 読みますか。 (Hằng sáng anh có đọc báo không?)\n…いいえ、読みません。時間が ありませんから。 (...Không, tôi không đọc. Vì tôi không có thời gian.)'
    },
    {
      pattern: 'どうして',
      explanation: 'Dùng để hỏi lý do ("Tại sao"). Câu trả lời thường thêm「から」vào cuối.',
      example: 'どうして 朝 新聞を 読みませんか。 (Tại sao sáng anh không đọc báo?)\n…時間が ありませんから。 (...Vì tôi không có thời gian.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

// Detailed data for Lesson 10
export const lesson10Data: LessonDetail = {
  id: 10,
  title: "Có và không có",
  vocabulary: [
    { word: 'います', kanji: 'います', romaji: 'imasu', mean: 'Có, ở (tồn tại, dùng cho người và động vật)' },
    { word: 'あります', kanji: 'あります', romaji: 'arimasu', mean: 'Có (tồn tại, dùng cho đồ vật)' },
    { word: 'いろいろ', kanji: 'いろいろ[な]', romaji: 'iroiro', mean: 'Nhiều, đa dạng' },
    { word: 'おとこの ひと', kanji: '男の 人', romaji: 'otoko no hito', mean: 'Người đàn ông' },
    { word: 'おんなの ひと', kanji: '女の 人', romaji: 'onna no hito', mean: 'Người đàn bà' },
    { word: 'おとこの こ', kanji: '男の 子', romaji: 'otoko no ko', mean: 'Cậu con trai' },
    { word: 'おんなの こ', kanji: '女の 子', romaji: 'onna no ko', mean: 'Cô con gái' },
    { word: 'いぬ', kanji: '犬', romaji: 'inu', mean: 'Chó' },
    { word: 'ねこ', kanji: '猫', romaji: 'neko', mean: 'Mèo' },
    { word: 'き', kanji: '木', romaji: 'ki', mean: 'Cây, gỗ' },
    { word: 'もの', kanji: '物', romaji: 'mono', mean: 'Vật, đồ vật' },
    { word: 'フィルム', kanji: 'フィルム', romaji: 'firumu', mean: 'Phim' },
    { word: 'でんち', kanji: '電池', romaji: 'denchi', mean: 'Pin' },
    { word: 'はこ', kanji: '箱', romaji: 'hako', mean: 'Hộp' },
    { word: 'スイッチ', kanji: 'スイッチ', romaji: 'suitchi', mean: 'Công tắc' },
    { word: 'れいぞうこ', kanji: '冷蔵庫', romaji: 'reizouko', mean: 'Tủ lạnh' },
    { word: 'テーブル', kanji: 'テーブル', romaji: 'teeburu', mean: 'Bàn' },
    { word: 'ベッド', kanji: 'ベッド', romaji: 'beddo', mean: 'Giường' },
    { word: 'たな', kanji: '棚', romaji: 'tana', mean: 'Giá sách' },
    { word: 'ドア', kanji: 'ドア', romaji: 'doa', mean: 'Cửa' },
    { word: 'まど', kanji: '窓', romaji: 'mado', mean: 'Cửa sổ' },
    { word: 'ポスト', kanji: 'ポスト', romaji: 'posuto', mean: 'Hộp thư, hòm thư' },
    { word: 'ビル', kanji: 'ビル', romaji: 'biru', mean: 'Tòa nhà' },
    { word: 'こうえん', kanji: '公園', romaji: 'kouen', mean: 'Công viên' },
    { word: 'きっさてん', kanji: '喫茶店', romaji: 'kissaten', mean: 'Quán giải khát, quán cà-phê' },
    { word: 'ほんや', kanji: '本屋', romaji: 'honya', mean: 'Hiệu sách' },
    { word: '～や', kanji: '～屋', romaji: '~ya', mean: 'Hiệu ~, cửa hàng ~' },
    { word: 'のりば', kanji: '乗り場', romaji: 'noriba', mean: 'Bến xe, điểm lên xuống xe' },
    { word: 'けん', kanji: '県', romaji: 'ken', mean: 'Tỉnh' },
    { word: 'うえ', kanji: '上', romaji: 'ue', mean: 'Trên' },
    { word: 'した', kanji: '下', romaji: 'shita', mean: 'Dưới' },
    { word: 'まえ', kanji: '前', romaji: 'mae', mean: 'Trước' },
    { word: 'うしろ', kanji: '後ろ', romaji: 'ushiro', mean: 'Sau' },
    { word: 'みぎ', kanji: '右', romaji: 'migi', mean: 'Phải' },
    { word: 'ひだり', kanji: '左', romaji: 'hidari', mean: 'Trái' },
    { word: 'なか', kanji: '中', romaji: 'naka', mean: 'Trong, giữa' },
    { word: 'そと', kanji: '外', romaji: 'soto', mean: 'Ngoài' },
    { word: 'となり', kanji: '隣', romaji: 'tonari', mean: 'Bên cạnh' },
    { word: 'ちかく', kanji: '近く', romaji: 'chikaku', mean: 'Gần' },
    { word: 'あいだ', kanji: '間', romaji: 'aida', mean: 'Giữa' },
    { word: '～や～[など]', kanji: '～や～[など]', romaji: '~ya ~[nado]', mean: '~ và ~, [v.v.]' },
    { word: 'いちばん～', kanji: 'いちばん～', romaji: 'ichiban ~', mean: '~ nhất (いちばん うえ: vị trí cao nhất)' },
    { word: '～だんめ', kanji: '～段目', romaji: '~danme', mean: 'Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)' },
    { word: 'どうも すみません', kanji: '[どうも] すみません', romaji: '[doumo] sumimasen', mean: 'Cám ơn.' },
    { word: 'チリソース', kanji: 'チリソース', romaji: 'chirisoosu', mean: 'Tương ớt (chili sauce)' },
    { word: 'おく', kanji: '奥', romaji: 'oku', mean: 'Bên trong cùng, phía sâu bên trong' },
    { word: 'スパイス・コーナー', kanji: 'スパイス・コーナー', romaji: 'supaisu koonaa', mean: 'Góc gia vị (spice corner)' },
    // Reference Words: Inside House
    { word: 'げんかん', kanji: '玄関', romaji: 'genkan', mean: 'Cửa ra vào' },
    { word: 'トイレ', kanji: 'トイレ', romaji: 'toire', mean: 'Toa-lét, phòng vệ sinh' },
    { word: 'ふろば', kanji: '風呂場', romaji: 'furoba', mean: 'Phòng tắm' },
    { word: 'せんめんじょ', kanji: '洗面所', romaji: 'senmenjo', mean: 'Bồn rửa' },
    { word: 'だいどころ', kanji: '台所', romaji: 'daidokoro', mean: 'Bếp' },
    { word: 'しょくどう', kanji: '食堂', romaji: 'shokudou', mean: 'Nhà ăn, phòng ăn' },
    { word: 'いま', kanji: '居間', romaji: 'ima', mean: 'Phòng khách, phòng sinh hoạt chung' },
    { word: 'しんしつ', kanji: '寝室', romaji: 'shinshitsu', mean: 'Phòng ngủ' },
    { word: 'ろうか', kanji: '廊下', romaji: 'rouka', mean: 'Hành lang' },
    { word: 'ベランダ', kanji: 'ベランダ', romaji: 'beranda', mean: 'Ban-công' }
  ],
  grammar: [
    {
      pattern: 'N が あります / います',
      explanation: 'Dùng để nói về nơi ở, sự hiện hữu của đồ vật hoặc người.「あります」dùng cho đồ vật, cây cối (không chuyển động).「います」dùng cho người, động vật (có thể chuyển động).',
      example: 'コンピューターが あります。 (Có máy tính.)\n男の人が います。 (Có người đàn ông.)'
    },
    {
      pattern: 'Place に N が あります / います',
      explanation: 'Dùng để diễn tả ở một địa điểm nào đó có cái gì hoặc ai.',
      example: '私の部屋に 机が あります。 (Ở phòng của tôi có cái bàn.)\n事務所に ミラーさんが います。 (Ở văn phòng có anh Miller.)'
    },
    {
      pattern: 'N は Place に あります / います',
      explanation: 'Dùng để diễn tả một người hoặc vật (chủ đề đã biết) đang ở đâu.',
      example: '東京ディズニーランドは 千葉県に あります。 (Công viên Tokyo Disneyland ở tỉnh Chiba.)\nミラーさんは 事務所に います。 (Anh Miller ở văn phòng.)'
    },
    {
      pattern: 'N1 (vật/người/địa điểm) の N2 (vị trí)',
      explanation: 'Dùng để chỉ vị trí tương đối. Các danh từ chỉ vị trí: 上 (trên), 下 (dưới), 前 (trước), 後ろ (sau), 右 (phải), 左 (trái), 中 (trong), 外 (ngoài), 隣 (bên cạnh), 近く (gần), 間 (giữa).',
      example: '机の 上に 写真が あります。 (Ở trên bàn có bức ảnh.)\n駅の 近くで 友達に 会いました。 (Tôi gặp bạn ở gần ga.)'
    },
    {
      pattern: 'N1 や N2',
      explanation: 'Dùng để liệt kê các danh từ tiêu biểu (không phải tất cả). Thường dùng với「など」ở cuối.',
      example: '箱の 中に 手紙や 写真が あります。 (Trong hộp có những thứ như thư và ảnh.)\n箱の 中に 手紙や 写真などが あります。 (Trong hộp có những thứ như thư, ảnh, v.v.)'
    },
    {
      pattern: 'Word/Phrase ですか',
      explanation: 'Dùng để xác nhận thông tin lại một lần nữa.',
      example: 'すみません。ユニューヤ・ストアは どこですか。 (Xin lỗi, siêu thị Yunyu-ya ở đâu?)\n…ユニューヤ・ストアですか。あの ビルの 中です。 (...Siêu thị Yunyu-ya ấy à? Ở trong tòa nhà kia.)'
    },
    {
      pattern: '... ありませんか',
      explanation: 'Cách hỏi tế nhị, lịch sự hơn là「ありますか」.',
      example: 'チリソースは ありませんか。 (Có tương ớt không ạ?)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson11Data: LessonDetail = {
  id: 11,
  title: 'Bài 11',
  vocabulary: [
    { word: 'います', kanji: 'います', romaji: 'imasu', mean: 'Có (con cái)' },
    { word: 'います', kanji: 'います', romaji: 'imasu', mean: 'Ở (Nhật)' },
    { word: 'かかります', kanji: 'かかります', romaji: 'kakarimasu', mean: 'Mất, tốn (tiền, thời gian)' },
    { word: 'やすみます', kanji: '休みます', romaji: 'yasumimasu', mean: 'Nghỉ (làm việc)' },
    { word: 'ひとつ', kanji: '１つ', romaji: 'hitotsu', mean: 'Một cái (đếm đồ vật)' },
    { word: 'ふたつ', kanji: '２つ', romaji: 'futatsu', mean: 'Hai cái' },
    { word: 'みっつ', kanji: '３つ', romaji: 'mittsu', mean: 'Ba cái' },
    { word: 'よっつ', kanji: '４つ', romaji: 'yottsu', mean: 'Bốn cái' },
    { word: 'いつつ', kanji: '５つ', romaji: 'itsutsu', mean: 'Năm cái' },
    { word: 'むっつ', kanji: '６つ', romaji: 'muttsu', mean: 'Sáu cái' },
    { word: 'ななつ', kanji: '７つ', romaji: 'nanatsu', mean: 'Bảy cái' },
    { word: 'やっつ', kanji: '８つ', romaji: 'yattsu', mean: 'Tám cái' },
    { word: 'ここのつ', kanji: '９つ', romaji: 'kokonotsu', mean: 'Chín cái' },
    { word: 'とお', kanji: '１０', romaji: 'tou', mean: 'Mười cái' },
    { word: 'いくつ', kanji: 'いくつ', romaji: 'ikutsu', mean: 'Mấy cái, bao nhiêu cái' },
    { word: 'ひとり', kanji: '１人', romaji: 'hitori', mean: 'Một người' },
    { word: 'ふたり', kanji: '２人', romaji: 'futari', mean: 'Hai người' },
    { word: '～にん', kanji: '～人', romaji: '~nin', mean: '~ Người' },
    { word: '～だい', kanji: '～台', romaji: '~dai', mean: '~ Cái (đếm máy móc, xe cộ)' },
    { word: '～まい', kanji: '～枚', romaji: '~mai', mean: '~ Tờ, tấm (đếm vật mỏng giấy, áo...)' },
    { word: '～かい', kanji: '～回', romaji: '~kai', mean: '~ Lần' },
    { word: 'りんご', kanji: 'りんご', romaji: 'ringo', mean: 'Táo' },
    { word: 'みかん', kanji: 'みかん', romaji: 'mikan', mean: 'Quýt' },
    { word: 'サンドイッチ', kanji: 'サンドイッチ', romaji: 'sandoicchi', mean: 'Bánh San-uých (Sandwich)' },
    { word: 'カレー[ライス]', kanji: 'カレー[ライス]', romaji: 'karee [raisu]', mean: 'Món [cơm] cà ri' },
    { word: 'アイスクリーム', kanji: 'アイスクリーム', romaji: 'aisukuriimu', mean: 'Kem (Ice cream)' },
    { word: 'きって', kanji: '切手', romaji: 'kitte', mean: 'Tem' },
    { word: 'ハガキ', kanji: 'ハガキ', romaji: 'hagaki', mean: 'Bưu thiếp' },
    { word: 'ふうとう', kanji: '封筒', romaji: 'fuutou', mean: 'Phong bì' },
    { word: 'そくたつ', kanji: '速達', romaji: 'sokutatsu', mean: '(Bưu phẩm) gửi nhanh' },
    { word: 'かきとめ', kanji: '書留', romaji: 'kakitome', mean: '(Bưu phẩm) gửi bảo đảm' },
    { word: 'エアメール', kanji: 'エアメール', romaji: 'eameeru', mean: 'Gửi bằng đường hàng không (Air mail)' },
    { word: 'こうくうびん', kanji: '航空便', romaji: 'koukuubin', mean: 'Gửi bằng đường hàng không' },
    { word: 'ふなびん', kanji: '船便', romaji: 'funabin', mean: 'Gửi bằng đường biển' },
    { word: 'りょうしん', kanji: '両親', romaji: 'ryoushin', mean: 'Bố mẹ' },
    { word: 'きょうだい', kanji: '兄弟', romaji: 'kyoudai', mean: 'Anh chị em' },
    { word: 'あに', kanji: '兄', romaji: 'ani', mean: 'Anh trai' },
    { word: 'おにいさん', kanji: 'お兄さん', romaji: 'oniisan', mean: 'Anh trai (người khác)' },
    { word: 'あね', kanji: '姉', romaji: 'ane', mean: 'Chị gái' },
    { word: 'おねえさん', kanji: 'お姉さん', romaji: 'oneesan', mean: 'Chị gái (người khác)' },
    { word: 'おとうと', kanji: '弟', romaji: 'otouto', mean: 'Em trai' },
    { word: 'おとうとさん', kanji: '弟さん', romaji: 'otoutosan', mean: 'Em trai (người khác)' },
    { word: 'いもうと', kanji: '妹', romaji: 'imouto', mean: 'Em gái' },
    { word: 'いもうとさん', kanji: '妹さん', romaji: 'imoutosan', mean: 'Em gái (người khác)' },
    { word: 'がいこく', kanji: '外国', romaji: 'gaikoku', mean: 'Nước ngoài' },
    { word: '～じかん', kanji: '～時間', romaji: '~jikan', mean: '~ Tiếng' },
    { word: '～しゅうかん', kanji: '～週間', romaji: '~shuukan', mean: '~ Tuần' },
    { word: '～かげつ', kanji: '～か月', romaji: '~kagetsu', mean: '~ Tháng' },
    { word: '～ねん', kanji: '～年', romaji: '~nen', mean: '~ Năm' },
    { word: '～ぐらい', kanji: '～ぐらい', romaji: '~gurai', mean: 'Khoảng ~' },
    { word: 'どのくらい', kanji: 'どのくらい', romaji: 'donokurai', mean: 'Bao lâu / Bao nhiêu' },
    { word: 'ぜんぶで', kanji: '全部で', romaji: 'zenbude', mean: 'Tổng cộng' },
    { word: 'みんな', kanji: 'みんな', romaji: 'minna', mean: 'Tất cả' },
    { word: '～だけ', kanji: '～だけ', romaji: '~dake', mean: 'Chỉ ~' },
    { word: 'いらっしゃいませ', kanji: 'いらっしゃいませ', romaji: 'irasshaimase', mean: 'Xin mời vào / Xin chào quý khách' },
    { word: 'いい [お]てんきですね', kanji: 'いい [お]天気ですね', romaji: 'ii [o]tenkidesune', mean: 'Trời đẹp nhỉ' },
    { word: 'おでかけですか', kanji: 'お出かけですか', romaji: 'odekakedesuka', mean: 'Anh/Chị đi ra ngoài đấy à?' },
    { word: 'ちょっと ～まで', kanji: 'ちょっと ～まで', romaji: 'chotto ~made', mean: 'Tôi đi ~ một chút' },
    { word: 'いって いらっしゃい', kanji: '行って いらっしゃい', romaji: 'itte irasshai', mean: 'Anh/Chị đi nhé (người ở lại nói)' },
    { word: 'いって まいります', kanji: '行って まいります', romaji: 'itte mairimasu', mean: 'Tôi đi đây (người đi nói)' },
    { word: 'それから', kanji: 'それから', romaji: 'sorekara', mean: 'Sau đó, tiếp nữa' },
    { word: 'オーストラリア', kanji: 'オーストラリア', romaji: 'oosutoraria', mean: 'Úc' },
    // Reference Words: Menu
    { word: 'ていしょく', kanji: '定食', romaji: 'teishoku', mean: 'Cơm suất' },
    { word: 'ランチ', kanji: 'ランチ', romaji: 'ranchi', mean: 'Cơm trưa' },
    { word: 'てんどん', kanji: '天どん', romaji: 'tendon', mean: 'Cơm tôm chiên tẩm bột' },
    { word: 'おやこどん', kanji: '親子どん', romaji: 'oyakodon', mean: 'Cơm với thịt gà và trứng' },
    { word: 'ぎゅうどん', kanji: '牛どん', romaji: 'gyuudon', mean: 'Cơm với thịt bò' },
    { word: 'やきにく', kanji: '焼肉', romaji: 'yakiniku', mean: 'Thịt nướng' },
    { word: 'やさいいため', kanji: '野菜いため', romaji: 'yasaiitame', mean: 'Rau xào' },
    { word: 'つけもの', kanji: '漬物', romaji: 'tsukemono', mean: 'Dưa muối' },
    { word: 'みそしる', kanji: 'みそ汁', romaji: 'misoshiru', mean: 'Súp miso' },
    { word: 'おにぎり', kanji: 'おにぎり', romaji: 'onigiri', mean: 'Cơm nắm' },
    { word: 'てんぷら', kanji: '天ぷら', romaji: 'tempura', mean: 'Tôm chiên tẩm bột' },
    { word: 'すし', kanji: 'すし', romaji: 'sushi', mean: 'Sushi' },
    { word: 'うどん', kanji: 'うどん', romaji: 'udon', mean: 'Mì Udon' },
    { word: 'そば', kanji: 'そば', romaji: 'soba', mean: 'Mì So-ba' },
    { word: 'ラーメン', kanji: 'ラーメン', romaji: 'raamen', mean: 'Mì Ramen' },
    { word: 'やきそば', kanji: '焼きそば', romaji: 'yakisoba', mean: 'Mì xào' },
    { word: 'お好み焼き', kanji: 'お好み焼き', romaji: 'okonomiyaki', mean: 'Bánh xào (Okonomiyaki)' },
    { word: 'カレーライス', kanji: 'カレーライス', romaji: 'kareeraisu', mean: 'Cơm cà ri' },
    { word: 'ハンバーグ', kanji: 'ハンバーグ', romaji: 'hambaagu', mean: 'Thịt băm viên rán' },
    { word: 'コロッケ', kanji: 'コロッケ', romaji: 'korokke', mean: 'Khoai tây bọc thịt chiên' },
    { word: 'エビフライ', kanji: 'エビフライ', romaji: 'ebifurai', mean: 'Tôm chiên' },
    { word: 'フライドチキン', kanji: 'フライドチキン', romaji: 'furaidochikin', mean: 'Thịt gà chiên' },
    { word: 'サラダ', kanji: 'サラダ', romaji: 'sarada', mean: 'Sa-lát' },
    { word: 'スープ', kanji: 'スープ', romaji: 'suupu', mean: 'Súp' },
    { word: 'スパゲッティー', kanji: 'スパゲッティー', romaji: 'supagettii', mean: 'Mì Ý' },
    { word: 'ピザ', kanji: 'ピザ', romaji: 'piza', mean: 'Bánh Pizza' },
    { word: 'ハンバーガー', kanji: 'ハンバーガー', romaji: 'hambaagaa', mean: 'Bánh hăm-bơ-gơ' },
    { word: 'サンドウィッチ', kanji: 'サンドウィッチ', romaji: 'sandouicchi', mean: 'Bánh San-uých' },
    { word: 'トースト', kanji: 'トースト', romaji: 'toosuto', mean: 'Bánh mì nướng' },
    { word: 'コーヒー', kanji: 'コーヒー', romaji: 'koohii', mean: 'Cà-phê' },
    { word: 'こうちゃ', kanji: '紅茶', romaji: 'koucha', mean: 'Trà đen' },
    { word: 'ココア', kanji: 'ココア', romaji: 'kokoa', mean: 'Ca-cao' },
    { word: 'ジュース', kanji: 'ジュース', romaji: 'juusu', mean: 'Nước hoa quả' },
    { word: 'コーラ', kanji: 'コーラ', romaji: 'koora', mean: 'Cô-ca cô-la' }
  ],
  grammar: [
    {
      pattern: 'ひとつ, ふたつ ... とお',
      explanation: 'Cách đếm đồ vật nói chung (không có hậu tố đơn vị cụ thể) từ 1 đến 10. Từ 11 trở lên dùng số đếm thường (juu-ichi...).',
      example: 'りんごを ４つ 買いました。 (Tôi đã mua 4 quả táo.)'
    },
    {
      pattern: 'Số từ + (Suffix/Counter)',
      explanation: 'Khi đếm người hay vật cụ thể, dùng số từ + hậu tố chỉ đơn vị (lượng từ). Lượng từ thường đặt TRƯỚC động từ mà nó bổ nghĩa (trừ lượng từ chỉ thời gian).',
      example: '外国人の 学生が ２人 います。 (Có 2 sinh viên người nước ngoài.)\n切手を ５枚 買いました。 (Tôi đã mua 5 cái tem.)'
    },
    {
      pattern: 'Danh từ (only time) + どのくらい + かかりますか',
      explanation: 'Dùng để hỏi về khoảng thời gian (mất bao lâu). Thường dùng với động từ かかります.',
      example: '大阪から 東京まで どのくらい かかりますか。 (Từ Osaka đến Tokyo mất bao lâu?)\n...新幹線で ２時間半 かかります。 (...Đi bằng Shinkansen mất 2 tiếng rưỡi.)'
    },
    {
      pattern: 'Lượng từ (khoảng thời gian) + に + ～回 + Động từ',
      explanation: 'Biểu thị tần suất làm việc gì đó trong một khoảng thời gian.',
      example: '１か月に ２回 映画を 見ます。 (Tôi xem phim 2 lần trong 1 tháng.)'
    },
    {
      pattern: 'Lượng từ / Danh từ + だけ',
      explanation: 'Biểu thị ý nghĩa "chỉ", "không nhiều hơn thế" hoặc "ngoài ra không có cái khác".',
      example: '休みは 日曜日だけです。 (Ngày nghỉ chỉ có chủ nhật.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson12Data: LessonDetail = {
  id: 12,
  title: 'Bài 12',
  vocabulary: [
    { word: 'かんたん「な」', kanji: '簡単「な」', romaji: 'kantan', mean: 'Đơn giản, dễ' },
    { word: 'ちかい', kanji: '近い', romaji: 'chikai', mean: 'Gần' },
    { word: 'とおい', kanji: '遠い', romaji: 'tooi', mean: 'Xa' },
    { word: 'はやい', kanji: '速い、早い', romaji: 'hayai', mean: 'Nhanh, sớm' },
    { word: 'おそい', kanji: '遅い', romaji: 'osoi', mean: 'Chậm, muộn' },
    { word: 'おおい', kanji: '多い', romaji: 'ooi', mean: 'Nhiều [người]' },
    { word: 'すくない', kanji: '少ない', romaji: 'sukunai', mean: 'Ít [người]' },
    { word: 'あたたかい', kanji: '暖かい、温かい', romaji: 'atatakai', mean: 'Ấm' },
    { word: 'すずしい', kanji: '涼しい', romaji: 'suzushii', mean: 'Mát' },
    { word: 'あまい', kanji: '甘い', romaji: 'amai', mean: 'Ngọt' },
    { word: 'からい', kanji: '辛い', romaji: 'karai', mean: 'Cay' },
    { word: 'おもい', kanji: '重い', romaji: 'omoi', mean: 'Nặng' },
    { word: 'かるい', kanji: '軽い', romaji: 'karui', mean: 'Nhẹ' },
    { word: 'いい', kanji: 'いい', romaji: 'ii', mean: 'Thích, chọn, dùng [cà-phê]' },
    { word: 'きせつ', kanji: '季節', romaji: 'kisetsu', mean: 'Mùa' },
    { word: 'はる', kanji: '春', romaji: 'haru', mean: 'Mùa xuân' },
    { word: 'なつ', kanji: '夏', romaji: 'natsu', mean: 'Mùa hè' },
    { word: 'あき', kanji: '秋', romaji: 'aki', mean: 'Mùa thu' },
    { word: 'ふゆ', kanji: '冬', romaji: 'fuyu', mean: 'Mùa đông' },
    { word: 'てんき', kanji: '天気', romaji: 'tenki', mean: 'Thời tiết' },
    { word: 'あめ', kanji: '雨', romaji: 'ame', mean: 'Mưa' },
    { word: 'ゆき', kanji: '雪', romaji: 'yuki', mean: 'Tuyệt' },
    { word: 'くもり', kanji: '曇り', romaji: 'kumori', mean: 'Có mây' },
    { word: 'ホテル', kanji: 'ホテル', romaji: 'hoteru', mean: 'Khách sạn' },
    { word: 'くうこう', kanji: '空港', romaji: 'kuukou', mean: 'Sân bay' },
    { word: 'うみ', kanji: '海', romaji: 'umi', mean: 'Biển, đại dương' },
    { word: 'せかい', kanji: '世界', romaji: 'sekai', mean: 'Thế giới' },
    { word: 'パーティー', kanji: 'パーティー', romaji: 'paatii', mean: 'Tiệc' },
    { word: '「お」まつり', kanji: '「お」祭り', romaji: '[o]bento', mean: 'Lễ hội' },
    { word: 'しけん', kanji: '試験', romaji: 'shiken', mean: 'Kỳ thi, bài thi' },
    { word: 'すきやき', kanji: 'すき焼き', romaji: 'sukiyaki', mean: 'Sukiyaki (món thịt bò nấu rau)' },
    { word: 'さしみ', kanji: '刺身', romaji: 'sashimi', mean: 'Sashimi (món gỏi cá sống)' },
    { word: '「お」すし', kanji: '「お」すし', romaji: '[o]sushi', mean: 'Sushi' },
    { word: 'てんぷら', kanji: 'てんぷら', romaji: 'tempura', mean: 'Tempura (món hải sản và rau chiên tẩm bột)' },
    { word: 'いけばな', kanji: '生け花', romaji: 'ikebana', mean: 'Nghệ thuật cắm hoa' },
    { word: 'もみじ', kanji: '紅葉', romaji: 'momiji', mean: 'Lá đỏ' },
    { word: 'どちら', kanji: 'どちら', romaji: 'dochira', mean: 'Cái nào' },
    { word: 'どちらも', kanji: 'どちらも', romaji: 'dochiramo', mean: 'Cả hai' },
    { word: 'ずっと', kanji: 'ずっと', romaji: 'zutto', mean: '(Hơn) hẳn' },
    { word: 'はじめて', kanji: '初めて', romaji: 'hajimete', mean: 'Lần đầu tiên' },
    { word: 'ただいま', kanji: 'ただいま', romaji: 'tadaima', mean: 'Tôi đã về đây.' },
    { word: 'おかえりなさい', kanji: 'お帰りなさい', romaji: 'okaerinasai', mean: 'Anh/Chị đã về đấy à.' },
    { word: 'すごいですね', kanji: 'すごいですね', romaji: 'sugoidesune', mean: 'Ghê quá nhỉ, hay quá nhỉ.' },
    { word: 'でも', kanji: 'でも', romaji: 'demo', mean: 'Nhưng' },
    { word: 'つかれました', kanji: '疲れました', romaji: 'tsukaremashita', mean: 'Tôi mệt rồi.' },
    // Reference Words: Festivals and Places
    { word: 'ぎおんまつり', kanji: '祇園祭', romaji: 'gionmatsuri', mean: 'Lễ hội Gion (Kyoto)' },
    { word: 'ホンコン', kanji: 'ホンコン', romaji: 'honkon', mean: 'Hồng Kông' },
    { word: 'シンガポール', kanji: 'シンガポール', romaji: 'shingapooru', mean: 'Singapore' },
    { word: 'きんかくじ', kanji: '金閣寺', romaji: 'kinkakuji', mean: 'Chùa Vàng (Kinkakuji)' },
    { word: 'とうしょうぐう', kanji: '東照宮', romaji: 'toushouguu', mean: 'Đền Nikko Toshogu' }
  ],
  grammar: [
    {
      pattern: 'Thời quá khứ của câu danh từ và tính từ đuôi ' + 'な',
      explanation: 'Khẳng định quá khứ: Danh từ/Tính từ đuôi Na + でした (đã là/đã từng).\nPhủ định quá khứ: Danh từ/Tính từ đuôi Na + じゃ ありませんでした (đã không phải là).',
      example: 'きょうは 雨でした。 (Hôm qua trời mưa.)\nきのうの 試験は 簡単じゃ ありませんでした。 (Bài thi hôm qua không dễ.)'
    },
    {
      pattern: 'Thời quá khứ của tính từ đuôi ' + 'い',
      explanation: 'Khẳng định quá khứ: Bỏ い thêm かったです (đã...).\nPhủ định quá khứ: Bỏ い thêm くなかったです (đã không...).',
      example: 'きのうは 暑かったです。 (Hôm qua trời nóng.)\nきのうの パーティーは あまり たのしくなかったです。 (Bữa tiệc hôm qua không vui lắm.)'
    },
    {
      pattern: 'N1 は N2 より Adj です',
      explanation: 'So sánh hơn: N1 có tính chất (Adj) hơn N2.',
      example: 'この 車は あの 車より 大きいです。 (Xe ô-tô này lớn hơn xe ô-tô kia.)'
    },
    {
      pattern: 'N1 と N2 と どちらが Adj ですか',
      explanation: 'Câu hỏi lựa chọn giữa 2 đối tượng: N1 và N2 thì cái nào (Adj) hơn? Trả lời: N1/N2 の ほうが Adj です (N1/N2 thì ... hơn).',
      example: 'サッカーと 野球と どちらが おもしろいですか。 (Bóng đá và bóng chày, môn nào thú vị hơn?)\n...サッカーの ほうが おもしろいです。 (...Bóng đá thú vị hơn.)'
    },
    {
      pattern: 'N1 [の 中]で [Interrogative] が いちばん Adj ですか',
      explanation: 'So sánh nhất trong một phạm vi/nhóm (N1). Từ để hỏi (nani, doko, dare, itsu) thay đổi tùy theo đối tượng. Trả lời: [Object] が いちばん Adj です (Cái ... là nhất).',
      example: '日本料理 [の 中]で 何が いちばん おいしいですか。 (Trong các món ăn Nhật Bản, món nào ngon nhất?)\n...てんぷらが いちばん おいしいです。 (...Món Tempura ngon nhất.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson13Data: LessonDetail = {
  id: 13,
  title: 'Bài 13',
  vocabulary: [
    { word: 'あそびます', kanji: '遊びます', romaji: 'asobimasu', mean: 'Chơi' },
    { word: 'およぎます', kanji: '泳ぎます', romaji: 'oyogimasu', mean: 'Bơi' },
    { word: 'むかえます', kanji: '迎えます', romaji: 'mukaemasu', mean: 'Đón' },
    { word: 'つかれます', kanji: '疲れます', romaji: 'tsukaremasu', mean: 'Mệt' },
    { word: 'だします', kanji: '出します', romaji: 'dashimasu', mean: 'Gửi [thư]' },
    { word: 'はいります', kanji: '入ります', romaji: 'hairimasu', mean: 'Vào [quán giải khát]' },
    { word: 'でます', kanji: '出ます', romaji: 'demasu', mean: 'Ra, ra khỏi [quán giải khát]' },
    { word: 'けっこんします', kanji: '結婚します', romaji: 'kekkonshimasu', mean: 'Kết hôn, lập gia đình' },
    { word: 'かいものします', kanji: '買い物します', romaji: 'kaimonoshimasu', mean: 'Mua hàng' },
    { word: 'しょくじします', kanji: '食事します', romaji: 'shokujishimasu', mean: 'Ăn cơm' },
    { word: 'さんぽします', kanji: '散歩します', romaji: 'sanposhimasu', mean: 'Đi dạo [ở công viên]' },
    { word: 'たいへん「な」', kanji: '大変「な」', romaji: 'taihen', mean: 'Vất vả, khó khăn, khổ' },
    { word: 'ほしい', kanji: '欲しい', romaji: 'hoshii', mean: 'Muốn có' },
    { word: 'さびしい', kanji: '寂しい', romaji: 'sabishii', mean: 'Buồn, cô đơn' },
    { word: 'ひろい', kanji: '広い', romaji: 'hiroi', mean: 'Rộng' },
    { word: 'せまい', kanji: '狭い', romaji: 'semai', mean: 'Chật, hẹp' },
    { word: 'しやくしょ', kanji: '市役所', romaji: 'shiyakusho', mean: 'Văn phòng hành chính quận, thành phố' },
    { word: 'プール', kanji: 'プール', romaji: 'puuru', mean: 'Bể bơi' },
    { word: 'かわ', kanji: '川', romaji: 'kawa', mean: 'Sông' },
    { word: 'けいざい', kanji: '経済', romaji: 'keizai', mean: 'Kinh tế' },
    { word: 'びじゅつ', kanji: '美術', romaji: 'bijutsu', mean: 'Mỹ thuật' },
    { word: 'つり', kanji: '釣り', romaji: 'tsuri', mean: 'Việc câu cá' },
    { word: 'スキー', kanji: 'スキー', romaji: 'sukii', mean: 'Việc trượt tuyết' },
    { word: 'かいぎ', kanji: '会議', romaji: 'kaigi', mean: 'Họp, cuộc họp' },
    { word: 'とうろく', kanji: '登録', romaji: 'touroku', mean: 'Việc đăng ký' },
    { word: 'しゅうまつ', kanji: '週末', romaji: 'shuumatsu', mean: 'Cuối tuần' },
    { word: '～ごろ', kanji: '～ごろ', romaji: 'goro', mean: 'Khoảng ~ (dùng cho thời gian)' },
    { word: 'なにか', kanji: '何か', romaji: 'nanika', mean: 'Cái gì đó' },
    { word: 'どこか', kanji: 'どこか', romaji: 'dokoka', mean: 'Đâu đó, chỗ nào đó' },
    { word: 'おなかが すきました', kanji: 'お腹が 空きました', romaji: 'onakagasukimashita', mean: '(Tôi) đói rồi.' },
    { word: 'おなかが いっぱいです', kanji: 'お腹が 一杯です', romaji: 'onakagaippaidesu', mean: '(Tôi) no rồi.' },
    { word: 'のどが かわきました', kanji: '喉が 乾きました', romaji: 'nodogakawakimashita', mean: '(Tôi) khát.' },
    { word: 'そうですね', kanji: 'そうですね', romaji: 'soudesune', mean: 'Đúng thế. (tán thành)' },
    { word: 'そうしましょう', kanji: 'そうしましょう', romaji: 'soushimashou', mean: 'Nhất trí./ Chúng ta thống nhất như thế.' },
    { word: 'ご注文は？', kanji: 'ご注文は？', romaji: 'gochuumonwa', mean: 'Anh/Chị dùng món gì ạ?' },
    { word: 'ていしょく', kanji: '定食', romaji: 'teishoku', mean: 'Cơm suất, cơm phần' },
    { word: 'ぎゅうどん', kanji: '牛どん', romaji: 'gyuudon', mean: 'Món cơm thịt bò' },
    { word: '「しょうしょう」おまちください', kanji: '「少々」お待ちください', romaji: 'shoushouomachikudasai', mean: 'Xin anh/chị vui lòng đợi [một chút].' },
    { word: 'べつべつに', kanji: '別々に', romaji: 'betsubetsuni', mean: 'Riêng ra/để riêng' },
    // Reference Words: Places
    { word: 'はくぶつかん', kanji: '博物館', romaji: 'hakubutsukan', mean: 'Bảo tàng' },
    { word: 'びじゅつかん', kanji: '美術館', romaji: 'bijutsukan', mean: 'Bảo tàng mỹ thuật' },
    { word: 'としょかん', kanji: '図書館', romaji: 'toshokan', mean: 'Thư viện' },
    { word: 'えいがかん', kanji: '映画館', romaji: 'eigakan', mean: 'Rạp chiếu phim' },
    { word: 'どうぶつえん', kanji: '動物園', romaji: 'doubutsuen', mean: 'Vườn bách thú' },
    { word: 'しょくぶつえん', kanji: '植物園', romaji: 'shokubutsuen', mean: 'Vườn bách thảo' },
    { word: 'ゆうえんち', kanji: '遊園地', romaji: 'yuuenchi', mean: 'Công viên giải trí' },
    { word: 'おてら', kanji: 'お寺', romaji: 'otera', mean: 'Chùa' },
    { word: 'じんじゃ', kanji: '神社', romaji: 'jinja', mean: 'Đền thờ đạo Thần' },
    { word: 'きょうかい', kanji: '教会', romaji: 'kyoukai', mean: 'Nhà thờ' },
    { word: 'モスク', kanji: 'モスク', romaji: 'mosuku', mean: 'Đền thờ đạo Hồi' },
    { word: 'たいいくかん', kanji: '体育館', romaji: 'taiikukan', mean: 'Nhà tập thể dục thể thao' },
    { word: 'たいしかん', kanji: '大使館', romaji: 'taishikan', mean: 'Đại sứ quán' },
    { word: 'にゅうこくかんりきょく', kanji: '入国管理局', romaji: 'nyuukokukanrikyoku', mean: 'Cục xuất nhập cảnh' },
    { word: 'しあくしょ', kanji: '市役所', romaji: 'shiyakusho', mean: 'Văn phòng hành chính quận, thành phố' },
    { word: 'けいさつしょ', kanji: '警察署', romaji: 'keisatsusho', mean: 'Đồn cảnh sát' },
    { word: 'こうばん', kanji: '交番', romaji: 'kouban', mean: 'Bốt cảnh sát' },
    { word: 'しょうぼうしょ', kanji: '消防署', romaji: 'shoubousho', mean: 'Trạm cứu hỏa' },
    { word: 'ちゅうしゃじょう', kanji: '駐車場', romaji: 'chuushajou', mean: 'Bãi đỗ xe' },
    { word: 'だいがく', kanji: '大学', romaji: 'daigaku', mean: 'Trường đại học' },
    { word: 'こうこう', kanji: '高校', romaji: 'koukou', mean: 'Trường phổ thông trung học' },
    { word: 'ちゅうがっこう', kanji: '中学校', romaji: 'chuugakkou', mean: 'Trường phổ thông cơ sở' },
    { word: 'しょうがっこう', kanji: '小学校', romaji: 'shougakkou', mean: 'Trường tiểu học' },
    { word: 'ようちえん', kanji: '幼稚園', romaji: 'youchien', mean: 'Trường mẫu giáo' },
    { word: 'にくや', kanji: '肉屋', romaji: 'nikuya', mean: 'Cửa hàng thịt' },
    { word: 'パンや', kanji: 'パン屋', romaji: 'panya', mean: 'Cửa hàng bánh mì' },
    { word: 'さかなや', kanji: '魚屋', romaji: 'sakanaya', mean: 'Cửa hàng cá' },
    { word: 'さかや', kanji: '酒屋', romaji: 'sakaya', mean: 'Cửa hàng rượu' },
    { word: 'やおや', kanji: '八百屋', romaji: 'yaoya', mean: 'Cửa hàng rau' },
    { word: 'きっさてん', kanji: '喫茶店', romaji: 'kissaten', mean: 'Quán giải khát' },
    { word: 'コンビニ', kanji: 'コンビニ', romaji: 'konbini', mean: 'Cửa hàng tiện lợi' },
    { word: 'スーパー', kanji: 'スーパー', romaji: 'suupaa', mean: 'Siêu thị' },
    { word: 'デパート', kanji: 'デパート', romaji: 'depaato', mean: 'Cửa hàng bách hóa' }
  ],
  grammar: [
    {
      pattern: 'Danh từ が 欲しいです',
      explanation: 'Biểu thị ham muốn sở hữu một vật hoặc một người nào đó của người nói. Đối tượng của ham muốn được biểu thị bằng trợ từ 「が」. 「ほしい」 là tính từ đuôi い.',
      example: 'わたしは 友達が 欲しいです。 (Tôi muốn có bạn.)\n今 何が いちばん 欲しいですか。 (Bây giờ bạn muốn cái gì nhất?)\n...車が 欲しいです。 (...Tôi muốn một cái ô-tô.)'
    },
    {
      pattern: 'Động từ thể ます (bỏ ます) + たいです',
      explanation: 'Biểu thị sự "muốn làm" một cái gì đó. Cách nói này được dùng để biểu thị ý muốn của bản thân người nói. Trợ từ 「を」 có thể thay bằng 「が」. Động từ dạng này chia tương tự tính từ đuôi い.',
      example: 'わたしは 沖縄へ 行きたいです。 (Tôi muốn đi Okinawa.)\nわたしは てんぷらを 食べたいです。 (Tôi muốn ăn món Tempura.)\n神戸で 何を 買いたいですか。 (Bạn muốn mua gì ở Kobe?)'
    },
    {
      pattern: 'N (Place) へ V (bỏ ます) / N (Action) に 行きます/来ます/帰ります',
      explanation: 'Biểu thị mục đích của việc đi, đến, về. Động từ bỏ ます hoặc Danh từ chỉ hành động (việc mua sắm, việc học...) đặt trước trợ từ 「に」.',
      example: '神戸へ インド料理を 食べに 行きます。 (Tôi đi Kobe để ăn món ăn Ấn Độ.)\n神戸へ 買い物に 行きます。 (Tôi đi Kobe để mua hàng.)\n日本へ 美術の 勉強に 来ました。 (Tôi đến Nhật Bản để học mỹ thuật.)'
    },
    {
      pattern: 'N に V / N を V (Trợ từ đi với động từ di chuyển)',
      explanation: 'Trợ từ 「に」 dùng với các động từ như 「はいります」(vào), 「のります」(lên) để chỉ điểm đến. Trợ từ 「を」 dùng với các động từ như 「でます」(ra), 「おります」(xuống) để chỉ điểm xuất phát.',
      example: 'あの 喫茶店に 入りましょう。 (Chúng ta vào quán giải khát kia đi.)\n７時に うちを 出ます。 (Tôi ra khỏi nhà lúc 7 giờ.)'
    },
    {
      pattern: 'どこか / 何か (Từ nghi vấn không xác định)',
      explanation: '「どこか」 (đâu đó, nơi nào đó), 「なにか」 (cái gì đó). Có thể lược bỏ các trợ từ 「へ」, 「を」 ở sau chúng. Dùng trong câu nghi vấn để hỏi về sự tồn tại không xác định.',
      example: '冬休みは どこか[へ] 行きましたか。 (Nghỉ đông bạn có đi đâu đó không?)\n...はい、行きました。 (...Có, tôi có đi.)\nのどが かわきましたから、何か[を] 飲みたいです。 (Tôi khát nên muốn uống cái gì đó.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson14Data: LessonDetail = {
  id: 14,
  title: 'Bài 14',
  vocabulary: [
    { word: 'つけます', kanji: 'つけます', romaji: 'tsukemasu', mean: 'Bật (điện, máy điều hòa)' },
    { word: 'けします', kanji: '消します', romaji: 'keshimasu', mean: 'Tắt (điện, máy điều hòa)' },
    { word: 'あけます', kanji: '開けます', romaji: 'akemasu', mean: 'Mở (cửa, cửa và)' },
    { word: 'しめます', kanji: '閉めます', romaji: 'shimemasu', mean: 'Đóng (cửa, cửa sổ)' },
    { word: 'いそぎます', kanji: '急ぎます', romaji: 'isogimasu', mean: 'Vội, gấp' },
    { word: 'まちます', kanji: '待ちます', romaji: 'machimasu', mean: 'Đợi, chờ' },
    { word: 'とめます', kanji: '止めます', romaji: 'tomemasu', mean: 'Dừng (băng, ô-tô), đỗ (ô-tô)' },
    { word: 'まがります', kanji: '曲がります', romaji: 'magarimasu', mean: 'Rẽ, quẹo [phải]' },
    { word: 'もちます', kanji: '持ちます', romaji: 'mochimasu', mean: 'Mang, cầm' },
    { word: 'とります', kanji: '取ります', romaji: 'torimasu', mean: 'Lấy (muối)' },
    { word: 'てつだいます', kanji: '手伝います', romaji: 'tetsudaimasu', mean: 'Giúp (làm việc)' },
    { word: 'よびます', kanji: '呼びます', romaji: 'yobimasu', mean: 'Gọi (tắc-xi, tên)' },
    { word: 'はなします', kanji: '話します', romaji: 'hanashimasu', mean: 'Nói, nói chuyện' },
    { word: 'みせます', kanji: '見せます', romaji: 'misemasu', mean: 'Cho xem, trình' },
    { word: 'おしえます', kanji: '教えます', romaji: 'oshiemasu', mean: 'Nói, cho biết [địa chỉ]' },
    { word: 'はじめます', kanji: '始めます', romaji: 'hajimemasu', mean: 'Bắt đầu' },
    { word: 'ふります', kanji: '降ります', romaji: 'furimasu', mean: 'Rơi [mưa, tuyết]' },
    { word: 'コピーします', kanji: 'コピーします', romaji: 'kopiishimasu', mean: 'Copy' },
    { word: 'エアコン', kanji: 'エアコン', romaji: 'eakon', mean: 'Máy điều hòa' },
    { word: 'パスポート', kanji: 'パスポート', romaji: 'pasupooto', mean: 'Hộ chiếu' },
    { word: 'なまえ', kanji: '名前', romaji: 'namae', mean: 'Tên' },
    { word: 'じゅうしょ', kanji: '住所', romaji: 'juusho', mean: 'Địa chỉ' },
    { word: 'ちず', kanji: '地図', romaji: 'chizu', mean: 'Bản đồ' },
    { word: 'しお', kanji: '塩', romaji: 'shio', mean: 'Muối' },
    { word: 'さとう', kanji: '砂糖', romaji: 'satou', mean: 'Đường' },
    { word: 'よみかた', kanji: '読み方', romaji: 'yomikata', mean: 'Cách đọc' },
    { word: '～かた', kanji: '～方', romaji: 'kata', mean: 'Cách ~' },
    { word: 'ゆっくり', kanji: 'ゆっくり', romaji: 'yukkuri', mean: 'Chậm, thong thả, thoải mái' },
    { word: 'すぐ', kanji: '直ぐ', romaji: 'sugu', mean: 'Ngay, lập tức' },
    { word: 'また', kanji: 'また', romaji: 'mata', mean: 'Lại (~đến)' },
    { word: 'あとで', kanji: '後で', romaji: 'atode', mean: 'Sau' },
    { word: 'もう すこし', kanji: 'もう 少し', romaji: 'mousukoshi', mean: 'Thêm một chút nữa thôi' },
    { word: 'もう～', kanji: 'もう～', romaji: 'mou', mean: 'Thêm ~' },
    { word: 'いいですよ', kanji: 'いいですよ', romaji: 'iidesuyo', mean: 'Được chứ./Được ạ.' },
    { word: 'さあ', kanji: 'さあ', romaji: 'saa', mean: 'Thôi,/nào, (dùng để thúc giục hoặc khuyến khích ai đó làm gì)' },
    { word: 'あれ？', kanji: 'あれ？', romaji: 'are', mean: 'Ô! (câu cảm thán khi phát hiện hoặc thấy cái gì đó lạ hoặc bất ngờ)' },
    { word: 'しんごうを みぎへ まがってください', kanji: '信号を 右へ 曲がって ください', romaji: 'shingouwomigiemagattekudasai', mean: 'Anh/Chị rẽ phải ở chỗ đèn tín hiệu.' },
    { word: 'まっすぐ', kanji: '真っ直ぐ', romaji: 'massugu', mean: 'Thẳng' },
    { word: 'これで おねがいします', kanji: 'これで お願いします', romaji: 'koredeonegaishimasu', mean: 'Gửi anh tiền này.' },
    { word: 'おつり', kanji: 'お釣り', romaji: 'otsuri', mean: 'Tiền lẻ' },
    // Reference Words: Station
    { word: 'きっぷうりば', kanji: '切符売り場', romaji: 'kippuuriba', mean: 'Chỗ bán vé' },
    { word: 'じどうけんばいき', kanji: '自動券売機', romaji: 'jidoukenbaiki', mean: 'Máy bán vé tự động' },
    { word: 'せいさんき', kanji: '精算機', romaji: 'seisanki', mean: 'Máy thanh toán tiền thiếu' },
    { word: 'かいさつぐち', kanji: '改札口', romaji: 'kaisatsuguchi', mean: 'Cửa soát vé' },
    { word: 'でぐち', kanji: '出口', romaji: 'deguchi', mean: 'Cửa ra' },
    { word: 'いりぐち', kanji: '入口', romaji: 'iriguchi', mean: 'Cửa vào' },
    { word: 'ひがしぐち', kanji: '東口', romaji: 'higashiguchi', mean: 'Cửa Đông' },
    { word: 'にしぐち', kanji: '西口', romaji: 'nishiguchi', mean: 'Cửa Tây' },
    { word: 'みなみぐち', kanji: '南口', romaji: 'minamiguchi', mean: 'Cửa Nam' },
    { word: 'きたぐち', kanji: '北口', romaji: 'kitaguchi', mean: 'Cửa Bắc' },
    { word: 'ちゅうおうぐち', kanji: '中央口', romaji: 'chuuouguchi', mean: 'Cửa Trung tâm' },
    { word: 'プラットホーム', kanji: 'プラットホーム', romaji: 'purattohoomu', mean: 'Sân ga' },
    { word: 'ばいてん', kanji: '売店', romaji: 'baiten', mean: 'Quầy bán hàng, ki-ốt' },
    { word: 'コインロッカー', kanji: 'コインロッカー', romaji: 'koinrokkaa', mean: 'Hòm khóa cho thuê dùng tiền xu' },
    { word: 'タクシーのりば', kanji: 'タクシー乗り場', romaji: 'takushiinoriba', mean: 'Điểm lên xe tắc-xi' },
    { word: 'バスターミナル', kanji: 'バスターミナル', romaji: 'basutaaminaru', mean: 'Bến xe buýt' },
    { word: 'バスてい', kanji: 'バス停', romaji: 'basutei', mean: 'Điểm lên xuống xe buýt' },
    { word: 'とっきゅう', kanji: '特急', romaji: 'tokkyuu', mean: 'Tốc hành đặc biệt' },
    { word: 'きゅうこう', kanji: '急行', romaji: 'kyuukou', mean: 'Tốc hành' },
    { word: 'かいそく', kanji: '快速', romaji: 'kaisoku', mean: 'Nhanh' },
    { word: 'じゅんきゅう', kanji: '準急', romaji: 'junkyuu', mean: 'Bán tốc hành' },
    { word: 'ふつう', kanji: '普通', romaji: 'futsuu', mean: '(Tàu) thường, địa phương' },
    { word: 'じこくひょう', kanji: '時刻表', romaji: 'jikokuhyou', mean: 'Bảng giờ chạy tàu' },
    { word: '～はつ', kanji: '～発', romaji: 'hatsu', mean: 'Xuất phát từ ~' },
    { word: '～ちゃく', kanji: '～着', romaji: 'chaku', mean: 'Đến ~' },
    { word: 'とうきょういき', kanji: '東京行き', romaji: 'toukyouiki', mean: 'Đi [Tokyo]' },
    { word: 'ていきけん', kanji: '定期券', romaji: 'teikiken', mean: 'Vé tháng' },
    { word: 'かいすうけん', kanji: '回数券', romaji: 'kaisuuken', mean: 'Vé giảm giá khi đi nhiều' },
    { word: 'かたみち', kanji: '片道', romaji: 'katamichi', mean: 'Một chiều' },
    { word: 'おうふく', kanji: '往復', romaji: 'oufuku', mean: 'Hai chiều, đi và về' }
  ],
  grammar: [
    {
      pattern: 'Chia cách động từ (Verb Groups)',
      explanation: 'Động từ tiếng Nhật được chia làm 3 nhóm.\nNhóm I: Âm cuối của thể ます thuộc cột い (kikimasu, nomimasu).\nNhóm II: Âm cuối của thể ます thuộc cột え (tabemasu) hoặc một số ngoại lệ cột い (mimasu, okimasu).\nNhóm III: shimasu, kimasu và Danh từ hành động + shimasu.',
      example: 'Nhóm I: かきます (viết), のみます (uống)\nNhóm II: たべます (ăn), みせます (cho xem), みます (xem)\nNhóm III: します (làm), きます (đến), べんきょうします (học)'
    },
    {
      pattern: 'Thể て của động từ (Te-form)',
      explanation: 'Cách chia thể て:\nNhóm I:\n- ki -> ite, gi -> ide\n- ni, bi, mi -> nde\n- i, chi, ri -> tte\n- shi -> shite\n*Ngoại lệ: ikimasu -> itte\nNhóm II: Bỏ ます thêm て\nNhóm III: Bỏ ます thêm て',
      example: 'かきます -> かいて (kaite)\nのみます -> のんで (nonde)\nかいます -> かって (katte)\nたべます -> たべて (tabete)\nします -> して (shite)'
    },
    {
      pattern: 'Động từ thể て + ください',
      explanation: 'Mẫu câu dùng khi muốn nhờ vả, sai khiến hoặc khuyên nhủ người nghe làm gì một cách lịch sự.',
      example: 'すみませんが、この 漢字の 読み方を 教えて ください。 (Xin lỗi, hãy chỉ cho tôi cách đọc chữ Hán này.)\nここに 住所と 名前を 書いて ください。 (Anh/Chị hãy viết địa chỉ và tên vào đây.)\nぜひ 遊びに 来て ください。 (Anh/Chị nhất định đến chơi nhé.)'
    },
    {
      pattern: 'Động từ thể て + います',
      explanation: 'Biểu thị một hành động đang diễn ra tại thời điểm nói.',
      example: 'ミラーさんは 今 電話を かけて います。 (Bây giờ anh Miller đang gọi điện thoại.)\n今 雨が 降って いますか。 (Bây giờ trời có mưa không?)\n...はい、降って います。 (...Có, trời đang mưa.)'
    },
    {
      pattern: 'Động từ thể ます + ましょうか',
      explanation: 'Dùng khi người nói muốn nêu ra đề nghị làm một việc gì đó giúp cho người nghe.',
      example: 'あしたも 来ましょうか。 (Ngày mai tôi cũng đến nhé?)\n...ええ、10時に 来て ください。 (...Vâng, anh hãy đến lúc 10 giờ.)\n傘を 貸しましょうか。 (Tôi cho anh mượn ô nhé?)\n...すみません。おねがいします。 (...Cám ơn. Nhờ anh.)\n荷物を 持ちましょうか。 (Tôi mang hành lý giúp anh nhé?)'
    },
    {
      pattern: 'Câu 1 が、 Câu 2',
      explanation: '「が」 là trợ từ nối tiếp, dùng để mở đầu câu nói một cách nhẹ nhàng, tự nhiên. Có nghĩa là "xin lỗi", "nhưng mà"...',
      example: '失礼ですが、お名前は？ (Xin lỗi, tên anh là gì ạ?)\nすみませんが、塩を 取って ください。 (Xin lỗi, làm ơn lấy giúp tôi muối.)'
    },
    {
      pattern: 'Danh từ が Động từ',
      explanation: 'Khi muốn miêu tả một hiện tượng tự nhiên thì dùng 「が」 trước chủ thể đó.',
      example: '雨が 降って います。 (Trời đang mưa.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson15Data: LessonDetail = {
  id: 15,
  title: 'Bài 15',
  vocabulary: [
    { word: 'たちます', kanji: '立ちます', romaji: 'tachimasu', mean: 'Đứng' },
    { word: 'すわります', kanji: '座ります', romaji: 'suwarimasu', mean: 'Ngồi' },
    { word: 'つかいます', kanji: '使います', romaji: 'tsukaimasu', mean: 'Dùng, sử dụng' },
    { word: 'おきます', kanji: '置きます', romaji: 'okimasu', mean: 'Đặt, để' },
    { word: 'つくります', kanji: '作ります', romaji: 'tsukurimasu', mean: 'Làm, chế tạo, sản xuất' },
    { word: 'うります', kanji: '売ります', romaji: 'urimasu', mean: 'Bán' },
    { word: 'しります', kanji: '知ります', romaji: 'shirimasu', mean: 'Biết' },
    { word: 'すみます', kanji: '住みます', romaji: 'sumimasu', mean: 'Sống, ở' },
    { word: 'けんきゅうします', kanji: '研究します', romaji: 'kenkyuushimasu', mean: 'Nghiên cứu' },
    { word: 'しっています', kanji: '知っています', romaji: 'shitteimasu', mean: 'Biết (trạng thái)' },
    { word: 'すんでいます', kanji: '住んでいます', romaji: 'sundeimasu', mean: 'Sống (trạng thái) [ở Osaka]' },
    { word: 'しりょう', kanji: '資料', romaji: 'shiryou', mean: 'Tài liệu, tư liệu' },
    { word: 'カタログ', kanji: 'カタログ', romaji: 'katarogu', mean: 'Ca-ta-lô' },
    { word: 'じこくひょう', kanji: '時刻表', romaji: 'jikokuhyou', mean: 'Bảng giờ chạy tàu' },
    { word: 'ふく', kanji: '服', romaji: 'fuku', mean: 'Quần áo' },
    { word: 'せいひん', kanji: '製品', romaji: 'seihin', mean: 'Sản phẩm' },
    { word: 'ソフト', kanji: 'ソフト', romaji: 'sofuto', mean: 'Phần mềm' },
    { word: 'せんもん', kanji: '専門', romaji: 'senmon', mean: 'Chuyên môn' },
    { word: 'はいしゃ', kanji: '歯医者', romaji: 'haisha', mean: 'Nha sĩ' },
    { word: 'とこや', kanji: '床屋', romaji: 'tokoya', mean: 'Hiệu cắt tóc' },
    { word: 'プレイガイド', kanji: 'プレイガイド', romaji: 'pureigaido', mean: 'Quầy bán vé (trong nhà hát)' },
    { word: 'どくしん', kanji: '独身', romaji: 'dokushin', mean: 'Độc thân' },
    { word: 'とくに', kanji: '特に', romaji: 'tokuni', mean: 'Đặc biệt' },
    { word: 'おもいだします', kanji: '思い出します', romaji: 'omoidashimasu', mean: 'Nhớ lại, hồi tưởng lại' },
    { word: 'ごかぞく', kanji: 'ご家族', romaji: 'gokazoku', mean: 'Gia đình (dùng cho người khác)' },
    { word: 'いらっしゃいます', kanji: 'いらっしゃいます', romaji: 'irasshaimasu', mean: 'Thể kính trọng của 「います」' },
    { word: 'こうこう', kanji: '高校', romaji: 'koukou', mean: 'Trường trung học phổ thông' },
    // Reference Words: Professions
    { word: 'かいしゃいん', kanji: '会社員', romaji: 'kaishain', mean: 'Nhân viên công ty' },
    { word: 'こうむいん', kanji: '公務員', romaji: 'koumuin', mean: 'Công chức' },
    { word: 'えきいん', kanji: '駅員', romaji: 'ekiin', mean: 'Nhân viên nhà ga' },
    { word: 'ぎんこういん', kanji: '銀行員', romaji: 'ginkouin', mean: 'Nhân viên ngân hàng' },
    { word: 'ゆうびんきょくいん', kanji: '郵便局員', romaji: 'yuubinkyokuin', mean: 'Nhân viên bưu điện' },
    { word: 'てんいん', kanji: '店員', romaji: 'tenin', mean: 'Nhân viên cửa hàng' },
    { word: 'ちょうりし', kanji: '調理師', romaji: 'chourishi', mean: 'Đầu bếp' },
    { word: 'りようし', kanji: '理容師', romaji: 'riyoushi', mean: 'Thợ cắt tóc' },
    { word: 'びようし', kanji: '美容師', romaji: 'biyoushi', mean: 'Mỹ viện gia' },
    { word: 'きょうし', kanji: '教師', romaji: 'kyoushi', mean: 'Giáo viên' },
    { word: 'べんごし', kanji: '弁護士', romaji: 'bengoshi', mean: 'Luật sư' },
    { word: 'けんきゅうしゃ', kanji: '研究者', romaji: 'kenkyuusha', mean: 'Nhà nghiên cứu' },
    { word: 'いしゃ', kanji: '医者', romaji: 'isha', mean: 'Bác sĩ' },
    { word: 'かんごし', kanji: '看護師', romaji: 'kangoshi', mean: 'Y tá' },
    { word: 'うんてんしゅ', kanji: '運転手', romaji: 'untenshu', mean: 'Tài xế' },
    { word: 'けいさつかん', kanji: '警察官', romaji: 'keisatsukan', mean: 'Cảnh sát' },
    { word: 'がいこうかん', kanji: '外交官', romaji: 'gaikoukan', mean: 'Nhà ngoại giao' },
    { word: 'せいじか', kanji: '政治家', romaji: 'seijika', mean: 'Chính khách, nhà chính trị' },
    { word: 'がか', kanji: '画家', romaji: 'gaka', mean: 'Họa sĩ' },
    { word: 'さっか', kanji: '作家', romaji: 'sakka', mean: 'Nhà văn' },
    { word: 'おんがくか', kanji: '音楽家', romaji: 'ongakuka', mean: 'Nhạc sĩ' },
    { word: 'けんちくか', kanji: '建築家', romaji: 'kenchikuka', mean: 'Kiến trúc sư' },
    { word: 'エンジニア', kanji: 'エンジニア', romaji: 'enjinia', mean: 'Kỹ sư' },
    { word: 'デザイナー', kanji: 'デザイナー', romaji: 'dezainaa', mean: 'Nhà thiết kế' },
    { word: 'ジャーナリスト', kanji: 'ジャーナリスト', romaji: 'jaanarisuto', mean: 'Nhà báo' },
    { word: 'かしゅ', kanji: '歌手', romaji: 'kashu', mean: 'Ca sĩ' },
    { word: 'はいゆう', kanji: '俳優', romaji: 'haiyuu', mean: 'Diễn viên' },
    { word: 'スポーツせんしゅ', kanji: 'スポーツ選手', romaji: 'supootsusenshu', mean: 'Vận động viên' }
  ],
  grammar: [
    {
      pattern: 'Động từ thể て + も いいです',
      explanation: 'Mẫu câu này dùng để biểu thị sự được phép làm một điều gì. (Làm ~ được). Nếu chuyển thành câu nghi vấn thì sẽ được một câu xin phép.',
      example: '写真を 撮っても いいです。 (Có thể chụp ảnh được.)\nたばこを 吸っても いいですか。 (Tôi hút thuốc được không?)\n...ええ、いいですよ。どうぞ。 (...Vâng, được. Xin mời.)\n...すみません。ちょっと。 (...Xin lỗi. Không được.)'
    },
    {
      pattern: 'Động từ thể て + は いけません',
      explanation: 'Mẫu câu này biểu thị ý nghĩa "cấm", hay "không được" làm một việc gì. (Không được làm ~).',
      example: 'ここで たばこを 吸っては いけません。禁煙ですから。 (Không được hút thuốc ở đây, vì là nơi "cấm hút thuốc".)\n先生、ここで 遊んでも いいですか。 (Thưa thầy/cô, em chơi ở đây có được không ạ?)\n...いいえ、いけません。 (...Không, không được.)'
    },
    {
      pattern: 'Động từ thể て + います (Trạng thái)',
      explanation: 'Dùng để nói về một trạng thái (là kết quả của một hành động) vẫn còn lại, vẫn tiếp diễn ở hiện tại. Các động từ thường dùng: Kekkonshimasu, Shirimasu, Sumimasu, Mochimasu.',
      example: 'わたしは 結婚して います。 (Tôi đã lập gia đình.)\nわたしは 田中さんを 知って います。 (Tôi biết anh Tanaka.)\nわたしは 大阪に 住んで います。 (Tôi sống ở Osaka.)\nわたしは カメラを 持って います。 (Tôi có máy ảnh.)'
    },
    {
      pattern: 'Động từ thể て + います (Thói quen/Nghề nghiệp)',
      explanation: 'Dùng để nói về các tập quán, thói quen (hành vi được lặp đi lặp lại trong thời gian dài). Cũng dùng để nói về nghề nghiệp hoặc tình cảnh của ai đó.',
      example: 'IMCは コンピューターソフトを 作って います。 (Công ty IMC chế tạo phần mềm máy vi tính.)\nスーパーで フィルムを 売って います。 (Siêu thị có bán phim.)\nミラーさんは IMCで 働いて います。 (Anh Miller làm việc ở Công ty IMC.)\n妹は 大学で 勉強して います。 (Em gái tôi (đang) học đại học.)'
    },
    {
      pattern: '知りません (Không biết)',
      explanation: 'Thể phủ định của 「知って います」 là 「知りません」, không phải là 「知って いません」.',
      example: '市役所の 電話番号を 知って いますか。 (Anh/Chị có biết số điện thoại của Văn phòng hành chính quận không?)\n...はい、知って います。 (...Có, tôi biết.)\n...いいえ、知りません。 (...Không, tôi không biết.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson16Data: LessonDetail = {
  id: 16,
  title: 'Bài 16',
  vocabulary: [
    { word: 'のります', kanji: '乗ります', romaji: 'norimasu', mean: 'Đi, lên [tàu]' },
    { word: 'おります', kanji: '降ります', romaji: 'orimasu', mean: 'Xuống [tàu]' },
    { word: 'のりかえます', kanji: '乗り換えます', romaji: 'norikaemasu', mean: 'Chuyển, đổi (tàu)' },
    { word: 'あびます', kanji: '浴びます', romaji: 'abimasu', mean: 'Tắm [vòi hoa sen]' },
    { word: 'いれます', kanji: '入れます', romaji: 'iremasu', mean: 'Cho vào, bỏ vào' },
    { word: 'だします', kanji: '出します', romaji: 'dashimasu', mean: 'Lấy ra, rút (tiền)' },
    { word: 'はいります', kanji: '入ります', romaji: 'hairimasu', mean: 'Vào, nhập học [đại học]' },
    { word: 'でます', kanji: '出ます', romaji: 'demasu', mean: 'Ra, tốt nghiệp [đại học]' },
    { word: 'やめます', kanji: '辞めます', romaji: 'yamemasu', mean: 'Bỏ, thôi [việc công ty]' },
    { word: 'おします', kanji: '押します', romaji: 'oshimasu', mean: 'Bấm, ấn (nút)' },
    { word: 'わかい', kanji: '若い', romaji: 'wakai', mean: 'Trẻ' },
    { word: 'ながい', kanji: '長い', romaji: 'nagai', mean: 'Dài' },
    { word: 'みじかい', kanji: '短い', romaji: 'mijikai', mean: 'Ngắn' },
    { word: 'あかるい', kanji: '明るい', romaji: 'akarui', mean: 'Sáng' },
    { word: 'くらい', kanji: '暗い', romaji: 'kurai', mean: 'Tối' },
    { word: 'せがたかい', kanji: '背が高い', romaji: 'segatakai', mean: 'Cao (dùng cho người)' },
    { word: 'あたまがいい', kanji: '頭がいい', romaji: 'atamagaii', mean: 'Thông minh' },
    { word: 'からだ', kanji: '体', romaji: 'karada', mean: 'Người, cơ thể' },
    { word: 'あたま', kanji: '頭', romaji: 'atama', mean: 'Đầu' },
    { word: 'かみ', kanji: '髪', romaji: 'kami', mean: 'Tóc' },
    { word: 'かお', kanji: '顔', romaji: 'kao', mean: 'Mặt' },
    { word: 'め', kanji: '目', romaji: 'me', mean: 'Mắt' },
    { word: 'みみ', kanji: '耳', romaji: 'mimi', mean: 'Tai' },
    { word: 'くち', kanji: '口', romaji: 'kuchi', mean: 'Miệng' },
    { word: 'は', kanji: '歯', romaji: 'ha', mean: 'Răng' },
    { word: 'おなか', kanji: 'お腹', romaji: 'onaka', mean: 'Bụng' },
    { word: 'あし', kanji: '足', romaji: 'ashi', mean: 'Chân' },
    { word: 'サービス', kanji: 'サービス', romaji: 'saabisu', mean: 'Dịch vụ' },
    { word: 'ジョギング', kanji: 'ジョギング', romaji: 'jogingu', mean: 'Việc chạy bộ (~wo shimasu: chạy bộ)' },
    { word: 'シャワー', kanji: 'シャワー', romaji: 'shawaa', mean: 'Vòi hoa sen' },
    { word: 'みどり', kanji: '緑', romaji: 'midori', mean: 'Màu xanh lá cây' },
    { word: 'おてら', kanji: '[お]寺', romaji: 'tera', mean: 'Chùa' },
    { word: 'じんじゃ', kanji: '神社', romaji: 'jinja', mean: 'Đền thờ đạo Thần' },
    { word: 'りゅうがくせい', kanji: '留学生', romaji: 'ryuugakusei', mean: 'Lưu học sinh, du học sinh' },
    { word: 'ばん', kanji: '番', romaji: 'ban', mean: 'Số ~' },
    { word: 'どうやって', kanji: 'どうやって', romaji: 'douyatte', mean: 'Làm thế nào ~' },
    { word: 'どの', kanji: 'どの', romaji: 'dono', mean: 'Cái nào ~ (dùng đối với trường hợp từ ba thứ trở lên)' },
    { word: 'いいえ、まだまだです', kanji: 'いいえ、まだまだです', romaji: 'iiemadamadadesu', mean: '[Không,] tôi còn kém lắm. (cách nói khiêm nhường khi được ai đó khen)' },
    { word: 'おひきだしですか', kanji: 'お引き出しですか', romaji: 'ohikidashidesuka', mean: 'Anh/Chị rút tiền ạ?' },
    { word: 'まず', kanji: 'まず', romaji: 'mazu', mean: 'Trước hết, đầu tiên' },
    { word: 'キャッシュカード', kanji: 'キャッシュカード', romaji: 'kyasshukaado', mean: 'Thẻ ngân hàng, thẻ ATM' },
    { word: 'あんしょうばんごう', kanji: '暗証番号', romaji: 'anshoubangou', mean: 'Mã số bí mật (mật khẩu)' },
    { word: 'つぎに', kanji: '次に', romaji: 'tsugini', mean: 'Tiếp theo' },
    { word: 'きんがく', kanji: '金額', romaji: 'kingaku', mean: 'Số tiền, khoản tiền' },
    { word: 'かくにん', kanji: '確認', romaji: 'kakunin', mean: 'Sự xác nhận, sự kiểm tra (~shimasu: xác nhận)' },
    { word: 'ボタン', kanji: 'ボタン', romaji: 'botan', mean: 'Nút' }
  ],
  grammar: [
    {
      pattern: 'Động từ thể て, [động từ thể て,] ~',
      explanation: 'Dùng để nối các động từ với nhau khi liệt kê các hành động xảy ra theo trình tự thời gian. Thì của câu do động từ cuối cùng quyết định.',
      example: '朝 ジョギングをして、シャワーを 浴びて、会社へ 行きます。 (Buổi sáng tôi chạy bộ, tắm, rồi đến công ty.)\n神戸へ 行って、映画を 見て、お茶を 飲みました。 (Tôi (đã) đi đến Kobe, xem phim, rồi uống trà.)'
    },
    {
      pattern: 'Tính từ đuôi い (~くて) / Tính từ đuôi な (~で) / Danh từ (~で)',
      explanation: 'Cách nối tính từ và danh từ trong câu. Tính từ đuôi い bỏ い thêm くて. Tính từ đuôi な và Danh từ thêm で.',
      example: '大きい -> 大きくて (to và...)\n小さい -> 小さくて (nhỏ và...)\nいい -> よくて (tốt và...) (ngoại lệ)\nミラーさんは 若くて、元気です。 (Anh Miller trẻ và khỏe mạnh.)\nカリナさんは インドネシア人で、京都大学の 留学生です。 (Chị Karina là người Indonesia và là lưu học sinh ở Đại học Kyoto.)\nミラーさんは ハンサムで、親切です。 (Anh Miller đẹp trai và tốt bụng.)'
    },
    {
      pattern: 'Động từ thể て + から、~',
      explanation: 'Biểu thị hành động ở vế sau được thực hiện sau khi hành động ở vế trước đã kết thúc.',
      example: '国へ 帰ってから、父の 会社で 働きます。 (Sau khi về nước tôi làm việc ở công ty của bố tôi.)\nコンサートが 終わってから、レストランで 食事しました。 (Sau khi buổi hòa nhạc kết thúc tôi đi ăn cơm ở nhà hàng.)'
    },
    {
      pattern: 'Danh từ 1 は Danh từ 2 が Tính từ',
      explanation: 'Dùng để miêu tả một thuộc tính cụ thể (N2) của chủ đề (N1).',
      example: '大阪は 食べ物が おいしいです。 (Thức ăn ở Osaka ngon.)\nドイツの フランケンは ワインが 有名です。 (Rượu vang ở vùng Franken của Đức nổi tiếng.)\nマリアさんは 髪が 長いです。 (Chị Maria tóc dài.)'
    },
    {
      pattern: 'どうやって',
      explanation: 'Dùng để hỏi về trình tự hoặc cách làm một việc gì đó (làm thế nào, bằng cách nào).',
      example: '大学まで どうやって 行きますか。 (Đến trường đại học bằng cách nào?)\n...京都駅から 16番の バスに 乗って、大学前で 降ります。 (...Lên xe buýt số 16 từ ga Kyoto, rồi xuống ở điểm đỗ Daigaku-mae.)'
    },
    {
      pattern: 'どの Danh từ',
      explanation: 'Dùng để hỏi xác định một đối tượng trong một nhóm gồm 3 đối tượng trở lên (Cái nào, Người nào...).',
      example: 'サントスさんは どの 人ですか。 (Anh Santos là người nào?)\n...あの 背が 高くて、 髪が 黒い 人です。 (...Là người cao, tóc đen đó.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson17Data: LessonDetail = {
  id: 17,
  title: 'Bài 17',
  vocabulary: [
    { word: 'おぼえます', kanji: '覚えます', romaji: 'oboemasu', mean: 'Nhớ' },
    { word: 'わすれます', kanji: '忘れます', romaji: 'wasuremasu', mean: 'Quên' },
    { word: 'なくします', kanji: '無くします', romaji: 'nakushimasu', mean: 'Mất, đánh mất' },
    { word: 'だします', kanji: '出します', romaji: 'dashimasu', mean: 'Nộp [bản/bài báo cáo]' },
    { word: 'はらいます', kanji: '払います', romaji: 'haraimasu', mean: 'Trả tiền' },
    { word: 'かえします', kanji: '返します', romaji: 'kaeshimasu', mean: 'Trả lại' },
    { word: 'でかけます', kanji: '出かけます', romaji: 'dekakemasu', mean: 'Ra ngoài' },
    { word: 'ぬぎます', kanji: '脱ぎます', romaji: 'nugimasu', mean: 'Cởi (quần áo, giày)' },
    { word: 'もっていきます', kanji: '持って行きます', romaji: 'motteikimasu', mean: 'Mang đi, mang theo' },
    { word: 'もってきます', kanji: '持って来ます', romaji: 'mottekimasu', mean: 'Mang đến' },
    { word: 'しんぱいします', kanji: '心配します', romaji: 'shinpaishimasu', mean: 'Lo lắng' },
    { word: 'ざんぎょうします', kanji: '残業します', romaji: 'zangyoushimasu', mean: 'Làm thêm, làm quá giờ' },
    { word: 'しゅっちょうします', kanji: '出張します', romaji: 'shucchoushimasu', mean: 'Đi công tác' },
    { word: 'のみます', kanji: '飲みます', romaji: 'nomimasu', mean: 'Uống [thuốc]' },
    { word: 'はいります', kanji: '入ります', romaji: 'hairimasu', mean: 'Tắm bồn [vào bồn tắm]' },
    { word: 'たいせつ', kanji: '大切', romaji: 'taisetsu', mean: 'Quan trọng, quý giá' },
    { word: 'だいじょうぶ', kanji: '大丈夫', romaji: 'daijoubu', mean: 'Không sao, không có vấn đề gì' },
    { word: 'あぶない', kanji: '危ない', romaji: 'abunai', mean: 'Nguy hiểm' },
    { word: 'もんだい', kanji: '問題', romaji: 'mondai', mean: 'Vấn đề' },
    { word: 'こたえ', kanji: '答え', romaji: 'kotae', mean: 'Câu trả lời' },
    { word: 'きんえん', kanji: '禁煙', romaji: 'kinen', mean: 'Cấm hút thuốc' },
    { word: 'けんこうほけんしょう', kanji: '[健康]保険証', romaji: 'kenkouhokenshou', mean: 'Thẻ bảo hiểm [y tế]' },
    { word: 'かぜ', kanji: 'かぜ', romaji: 'kaze', mean: 'Cảm, cúm' },
    { word: 'ねつ', kanji: '熱', romaji: 'netsu', mean: 'Sốt' },
    { word: 'びょうき', kanji: '病気', romaji: 'byouki', mean: 'Ốm, bệnh' },
    { word: 'くすり', kanji: '薬', romaji: 'kusuri', mean: 'Thuốc' },
    { word: 'おふろ', kanji: '[お]ふろ', romaji: 'ofuro', mean: 'Bồn tắm' },
    { word: 'うわぎ', kanji: '上着', romaji: 'uwagi', mean: 'Áo khoác' },
    { word: 'したぎ', kanji: '下着', romaji: 'shitagi', mean: 'Quần áo lót' },
    { word: 'せんせい', kanji: '先生', romaji: 'sensei', mean: 'Bác sĩ (cách gọi bác sĩ)' },
    { word: '2、3にち', kanji: '2、3日', romaji: 'nisannichi', mean: 'Vài ngày' },
    { word: '2、3～', kanji: '2、3～', romaji: 'nisan', mean: 'Vài ~ ("~" là hậu tố chỉ cách đếm)' },
    { word: '～までに', kanji: '～までに', romaji: 'madeni', mean: 'Trước ~ (chỉ thời hạn)' },
    { word: 'ですから', kanji: 'ですから', romaji: 'desukara', mean: 'Vì thế, vì vậy, do đó' },
    { word: 'どうしましたか。', kanji: 'どうしましたか。', romaji: 'doushimashitaka', mean: 'Có vấn đề gì?/Anh/Chị bị làm sao? (cách bác sĩ hỏi bệnh nhân)' },
    { word: '～がいたいです。', kanji: '～が痛いです。', romaji: 'gaitaidesu', mean: 'Tôi bị đau [~].' },
    { word: 'のど', kanji: 'のど', romaji: 'nodo', mean: 'Họng' },
    { word: 'おだいじに。', kanji: 'お大事に。', romaji: 'odaijini', mean: 'Anh/Chị nhớ giữ gìn sức khỏe. (câu nói với người bị ốm hoặc bị bệnh)' }
  ],
  grammar: [
    {
      pattern: 'Động từ thể ない',
      explanation: 'Cách chia động từ thể Nai (Phủ định ngắn):\n1. Nhóm I: Chuyển âm cuối hàng [i] sang hàng [a] rồi thêm [nai]. (Ngoại lệ: âm cuối [i] -> [wanai]).\nVí dụ: kakimasu -> kakanai, yomimasu -> yomanai, aimasu -> awanai.\n2. Nhóm II: Bỏ [masu] thêm [nai].\nVí dụ: tabemasu -> tabenai, mimasu -> minai.\n3. Nhóm III: shimasu -> shinai, kimasu -> konai.',
      example: '書きます -> 書かない (Không viết)\n食べます -> 食べない (Không ăn)\n勉強します -> 勉強しない (Không học)\n来ます -> 来ない (Không đến)'
    },
    {
      pattern: 'Động từ thể ない + で ください',
      explanation: 'Mẫu câu dùng khi muốn yêu cầu, nhờ vả ai đó đừng làm một việc gì đó. (Xin đừng/Không được...).',
      example: 'わたしは 元気ですから、心配しないで ください。 (Tôi khỏe nên anh/chị đừng lo lắng.)\nここで 写真を 撮らないで ください。 (Xin đừng chụp ảnh ở đây.)'
    },
    {
      pattern: 'Động từ thể ない (bỏ い) + ければ なりません',
      explanation: 'Mẫu câu biểu thị sự bắt buộc phải làm gì đó (nếu không làm thì không được). Chú ý: Mẫu câu này không mang ý nghĩa phủ định.',
      example: '薬を 飲まなければ なりません。 (Tôi phải uống thuốc.)\n明日は 早く 起きなければ なりません。 (Ngày mai tôi phải dậy sớm.)'
    },
    {
      pattern: 'Động từ thể ない (bỏ い) + くても いいです',
      explanation: 'Mẫu câu biểu thị sự không cần thiết phải làm gì đó (không làm cũng được).',
      example: 'あした 来なくても いいです。 (Ngày mai anh/chị không đến cũng được.)\n靴を 脱がなくても いいです。 (Anh/Chị không cần cởi giày cũng được.)'
    },
    {
      pattern: 'Danh từ (tân ngữ) は',
      explanation: 'Khi muốn nhấn mạnh vào tân ngữ của hành động, ta đưa tân ngữ lên làm chủ đề của câu (thay trợ từ [o] bằng [wa]).',
      example: 'ここに 荷物を 置かないで ください。 (Đừng để hành lý ở đây.)\n-> 荷物は ここに 置かないで ください。 (Hành lý thì xin đừng để ở đây.)\n会社の 食堂で 昼ごはんを 食べます。\n-> 昼ごはんは 会社の 食堂で 食べます。 (Cơm trưa thì tôi ăn ở nhà ăn của công ty.)'
    },
    {
      pattern: 'Danh từ (thời gian) までに + Động từ',
      explanation: 'Biểu thị thời hạn mà hành động phải được thực hiện (trước thời điểm đó). Khác với [made] (cho đến khi).',
      example: '会議は 5時までに 終わります。 (Cuộc họp sẽ kết thúc trước 5 giờ.)\n土曜日までに 本を 返さなければ なりません。 (Phải trả sách trước thứ Bảy.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson18Data: LessonDetail = {
  id: 18,
  title: 'Bài 18',
  vocabulary: [
    { word: 'できます', kanji: 'できます', romaji: 'dekimasu', mean: 'Có thể' },
    { word: 'あらいます', kanji: '洗います', romaji: 'araimasu', mean: 'Rửa' },
    { word: 'ひきます', kanji: '弾きます', romaji: 'hikimasu', mean: 'Chơi (nhạc cụ)' },
    { word: 'うたいます', kanji: '歌います', romaji: 'utaimasu', mean: 'Hát' },
    { word: 'あつめます', kanji: '集めます', romaji: 'atsumemasu', mean: 'Sưu tầm, thu thập' },
    { word: 'すてます', kanji: '捨てます', romaji: 'sutemasu', mean: 'Vứt, bỏ đi' },
    { word: 'かえます', kanji: '換えます', romaji: 'kaemasu', mean: 'Đổi' },
    { word: 'うんてんします', kanji: '運転します', romaji: 'untenshimasu', mean: 'Lái' },
    { word: 'よやくします', kanji: '予約します', romaji: 'yoyakushimasu', mean: 'Đặt chỗ, đặt trước' },
    { word: 'けんがくします', kanji: '見学します', romaji: 'kengakushimasu', mean: 'Thăm quan với mục đích học tập' },
    { word: 'ピアノ', kanji: 'ピアノ', romaji: 'piano', mean: 'Đàn piano' },
    { word: 'ーメートル', kanji: 'ーメートル', romaji: 'meetoru', mean: 'ー mét' },
    { word: 'こくさい～', kanji: '国際～', romaji: 'kokusai', mean: '～ quốc tế' },
    { word: 'げんきん', kanji: '現金', romaji: 'genkin', mean: 'Tiền mặt' },
    { word: 'しゅみ', kanji: '趣味', romaji: 'shumi', mean: 'Sở thích, thú vui' },
    { word: 'にっき', kanji: '日記', romaji: 'nikki', mean: 'Nhật ký' },
    { word: 'おいのり', kanji: '[お]祈り', romaji: 'oinori', mean: 'Việc cầu nguyện (~を します：cầu nguyện)' },
    { word: 'かちょう', kanji: '課長', romaji: 'kachou', mean: 'Tổ trưởng' },
    { word: 'ぶちょう', kanji: '部長', romaji: 'buchou', mean: 'Trưởng phòng' },
    { word: 'しゃちょう', kanji: '社長', romaji: 'shachou', mean: 'Giám đốc' },
    { word: 'どうぶつ', kanji: '動物', romaji: 'doubutsu', mean: 'Động vật' },
    { word: 'うま', kanji: '馬', romaji: 'uma', mean: 'Ngựa' },
    { word: 'へえ', kanji: 'へえ', romaji: 'hee', mean: 'Thế à! (dùng để biểu thị sự ngạc nhiên hoặc quan tâm)' },
    { word: 'それは　おもしろいですね。', kanji: 'それは　おもしろいですね。', romaji: 'sorewaomoshiroidesune', mean: 'Hay thật nhỉ.' },
    { word: 'なかなか', kanji: 'なかなか', romaji: 'nakanaka', mean: 'Khó mà ~, không dễ, mãi mà (dùng với thể phủ định)' },
    { word: 'ぼくじょう', kanji: '牧場', romaji: 'bokujou', mean: 'Trang trại chăn nuôi' },
    { word: 'ほんとうですか。', kanji: 'ほんとうですか。', romaji: 'hontoudesuka', mean: 'Thật không ạ?' },
    { word: 'ぜひ', kanji: 'ぜひ', romaji: 'zehi', mean: 'Nhất định, rất' },
    { word: 'とぶ', kanji: '飛ぶ', romaji: 'tobu', mean: 'Bay' },
    { word: 'はねる', kanji: '跳ねる', romaji: 'haneru', mean: 'Nhảy' },
    { word: 'のぼる', kanji: '登る', romaji: 'noboru', mean: 'Leo' },
    { word: 'はしる', kanji: '走る', romaji: 'hashiru', mean: 'Chạy' },
    { word: 'およぐ', kanji: '泳ぐ', romaji: 'oyogu', mean: 'Bơi' },
    { word: 'もぐる', kanji: '潜る', romaji: 'moguru', mean: 'Lặn' },
    { word: 'とびこむ', kanji: '飛び込む', romaji: 'tobikomu', mean: 'Nhảy xuống' },
    { word: 'さかだちする', kanji: '逆立ちする', romaji: 'sakadachisuru', mean: 'Lộn ngược, trồng cây chuối' },
    { word: 'はう', kanji: '這う', romaji: 'hau', mean: 'Bò' },
    { word: 'ける', kanji: '蹴る', romaji: 'keru', mean: 'Đá' },
    { word: 'ふる', kanji: '振る', romaji: 'furu', mean: 'Vẫy' },
    { word: 'もちあげる', kanji: '持ち上げる', romaji: 'mochiageru', mean: 'Nâng, nhấc' },
    { word: 'なげる', kanji: '投げる', romaji: 'nageru', mean: 'Ném' },
    { word: 'たたく', kanji: '叩く', romaji: 'tataku', mean: 'Đấm, đập, vỗ' },
    { word: 'ひく', kanji: '引く', romaji: 'hiku', mean: 'Kéo' },
    { word: 'おす', kanji: '押す', romaji: 'osu', mean: 'Đẩy' },
    { word: 'まげる', kanji: '曲げる', romaji: 'mageru', mean: 'Uốn, gập, bẻ cong' },
    { word: 'のばす', kanji: '伸ばす', romaji: 'nobasu', mean: 'Duỗi thẳng, kéo dài ra' },
    { word: 'ころぶ', kanji: '転ぶ', romaji: 'korobu', mean: 'Ngã' },
    { word: 'ふりむく', kanji: '振り向く', romaji: 'furimuku', mean: 'Ngoảnh lại' }
  ],
  grammar: [
    {
      pattern: 'Động từ thể nguyên dạng (Dictionary Form)',
      explanation: 'Thể nguyên dạng (hay còn gọi là Thể Từ điển - Jisho-kei) là thể cơ bản của động từ, được tìm thấy trong từ điển.\nCách chia:\n1. Nhóm I: Chuyển âm cuối hàng [i] sang hàng [u]. (kakimasu -> kaku, yomimasu -> yomu).\n2. Nhóm II: Bỏ [masu] thêm [ru]. (tabemasu -> taberu).\n3. Nhóm III: shimasu -> suru, kimasu -> kuru.',
      example: '書きます (kakimasu) -> 書く (kaku)\n食べます (tabemasu) -> 食べる (taberu)\nします (shimasu) -> する (suru)\n来ます (kimasu) -> 来る (kuru)'
    },
    {
      pattern: 'Danh từ + が できます',
      explanation: 'Biểu thị năng lực hoặc khả năng. Danh từ đứng trước [ga] là danh từ chỉ động tác hoặc hành vi (như lái xe, trượt tuyết, piano...).',
      example: 'ミラーさんは 日本語が できます。 (Anh Miller có thể nói tiếng Nhật.)\n雪が たくさん 降りましたから、今年は スキーが できます。 (Vì tuyết rơi nhiều nên năm nay có thể trượt tuyết.)'
    },
    {
      pattern: 'Động từ thể nguyên dạng + こと + が できます',
      explanation: 'Khi muốn nói ai đó có thể làm được một động tác nào đó thì thêm [koto] vào sau động từ thể nguyên dạng để biến nó thành danh từ, rồi thêm [ga dekimasu].',
      example: 'ミラーさんは 漢字を 読む ことが できます。 (Anh Miller có thể đọc chữ Hán.)\nカードで 払う ことが できます。 (Có thể trả tiền bằng thẻ.)'
    },
    {
      pattern: 'わたしの 趣味は Danh từ / Động từ thể nguyên dạng + こと です',
      explanation: 'Cách nói về sở thích. Nếu sở thích là hành động thì dùng mẫu [V-ru + koto].',
      example: 'わたしの 趣味は 音楽です。 (Sở thích của tôi là âm nhạc.)\nわたしの 趣味は 音楽を 聞く ことです。 (Sở thích của tôi là nghe nhạc.)'
    },
    {
      pattern: 'V1 (nguyên dạng) / Nounの / Lượng từ (thời gian) + まえに、 V2',
      explanation: 'Biểu thị hành động V2 xảy ra trước hành động V1/Danh từ/Mốc thời gian.',
      example: '日本へ 来る まえに、日本語を 勉強しました。 (Trước khi đến Nhật tôi đã học tiếng Nhật.)\n寝る まえに、本を 読みます。 (Trước khi đi ngủ, tôi đọc sách.)\n食事の まえに、手を 洗います。 (Trước bữa ăn, tôi rửa tay.)\n田中さんは 1時間 まえに、出かけました。 (Anh Tanaka đã đi ra ngoài cách đây 1 tiếng.)'
    },
    {
      pattern: 'なかなか',
      explanation: '「なかなか」 đi kèm với thể phủ định để biểu thị ý nghĩa "không dễ gì" hoặc "không đúng như điều kỳ vọng". (Mãi mà không..., khó mà...).',
      example: '日本では なかなか 馬を 見る ことが できません。 (Ở Nhật khó mà có cơ hội để xem ngựa.)'
    },
    {
      pattern: 'ぜひ',
      explanation: 'Dùng kèm với câu chỉ nguyện vọng (tai), yêu cầu (te kudasai) để nhấn mạnh ý nghĩa đó. (Nhất định).',
      example: 'ぜひ 北海道へ 行きたいです。 (Tôi rất muốn đi Hokkaido.)\nぜひ 遊びに 来て ください。 (Nhất định anh/chị phải đến chơi nhé.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

export const lesson19Data: LessonDetail = {
  id: 19,
  title: 'Bài 19',
  vocabulary: [
    { word: 'のぼります', kanji: '登ります', romaji: 'noborimasu', mean: 'Leo [núi]' },
    { word: 'とまります', kanji: '泊まります', romaji: 'tomarimasu', mean: 'Trọ [ở khách sạn]' },
    { word: 'そうじします', kanji: '掃除します', romaji: 'soujishimasu', mean: 'Dọn vệ sinh' },
    { word: 'せんたくします', kanji: '洗濯します', romaji: 'sentakushimasu', mean: 'Giặt' },
    { word: 'れんしゅうします', kanji: '練習します', romaji: 'renshuushimasu', mean: 'Luyện tập, thực hành' },
    { word: 'なります', kanji: 'なります', romaji: 'narimasu', mean: 'Trở thành, trở nên' },
    { word: 'ねむい', kanji: '眠い', romaji: 'nemui', mean: 'Buồn ngủ' },
    { word: 'つよい', kanji: '強い', romaji: 'tsuyoi', mean: 'Mạnh' },
    { word: 'よわい', kanji: '弱い', romaji: 'yowai', mean: 'Yếu' },
    { word: 'ちょうし', kanji: '調子', romaji: 'choushi', mean: 'Tình trạng, trạng thái' },
    { word: 'ちょうしがいい', kanji: '調子がいい', romaji: 'choushigaii', mean: 'Trong tình trạng tốt' },
    { word: 'ちょうしがわるい', kanji: '調子が悪い', romaji: 'choushigawarui', mean: 'Trong tình trạng xấu' },
    { word: 'ゴルフ', kanji: 'ゴルフ', romaji: 'gorufu', mean: 'Gôn (~wo shimasu: chơi gôn)' },
    { word: 'すもう', kanji: '相撲', romaji: 'sumou', mean: 'Vật Sumo' },
    { word: 'パチンコ', kanji: 'パチンコ', romaji: 'pachinko', mean: 'Trò chơi Pachinko (~wo shimasu: chơi Pachinko)' },
    { word: 'おちゃ', kanji: 'お茶', romaji: 'ocha', mean: 'Trà đạo' },
    { word: 'ひ', kanji: '日', romaji: 'hi', mean: 'Ngày' },
    { word: 'いちど', kanji: '一度', romaji: 'ichido', mean: 'Một lần' },
    { word: 'いちども', kanji: '一度も', romaji: 'ichidomo', mean: 'Chưa lần nào' },
    { word: 'だんだん', kanji: 'だんだん', romaji: 'dandan', mean: 'Dần dần' },
    { word: 'もうすぐ', kanji: 'もうすぐ', romaji: 'mousugu', mean: 'Sắp' },
    { word: 'おかげさまで', kanji: 'おかげさまで', romaji: 'okagesamade', mean: 'Cám ơn anh/chị (dùng để bày tỏ sự cám ơn khi nhận được sự giúp đỡ)' },
    { word: 'かんぱい', kanji: '乾杯', romaji: 'kanpai', mean: 'Nâng cốc!/Cạn chén!' },
    { word: 'じつは', kanji: '実は', romaji: 'jitsuwa', mean: 'Thật ra là/Sự tình là' },
    { word: 'ダイエット', kanji: 'ダイエット', romaji: 'daietto', mean: 'Việc ăn kiêng, chế độ giảm cân' },
    { word: 'なんかいも', kanji: '何回も', romaji: 'nankaimo', mean: 'Nhiều lần' },
    { word: 'しかし', kanji: 'しかし', romaji: 'shikashi', mean: 'Nhưng, tuy nhiên' },
    { word: 'むり', kanji: '無理', romaji: 'muri', mean: 'Không thể, quá sức' },
    { word: 'からだにいい', kanji: '体にいい', romaji: 'karadaniii', mean: 'Tốt cho sức khỏe' },
    { word: 'ケーキ', kanji: 'ケーキ', romaji: 'keeki', mean: 'Bánh ga-tô, bánh ngọt' },
    // Reference Words: Traditional Culture & Entertainment
    { word: 'さどう', kanji: '茶道', romaji: 'sadou', mean: 'Trà đạo' },
    { word: 'かどう', kanji: '華道', romaji: 'kadou', mean: 'Nghệ thuật cắm hoa' },
    { word: 'しょどう', kanji: '書道', romaji: 'shodou', mean: 'Thư pháp' },
    { word: 'かぶき', kanji: '歌舞伎', romaji: 'kabuki', mean: 'Kịch Kabuki' },
    { word: 'のう', kanji: '能', romaji: 'nou', mean: 'Kịch Nou' },
    { word: 'ぶんらく', kanji: '文楽', romaji: 'bunraku', mean: 'Nghệ thuật Bunraku (kịch rối)' },
    { word: 'じゅうどう', kanji: '柔道', romaji: 'juudou', mean: 'Judo' },
    { word: 'けんどう', kanji: '剣道', romaji: 'kendou', mean: 'Kiếm đạo' },
    { word: 'からて', kanji: '空手', romaji: 'karate', mean: 'Karate' },
    { word: 'まんざい', kanji: '漫才', romaji: 'manzai', mean: 'Manzai (Hài tấu nói)' },
    { word: 'らくご', kanji: '落語', romaji: 'rakugo', mean: 'Rakugo (Hài kịch kể chuyện)' },
    { word: 'いご', kanji: '囲碁', romaji: 'igo', mean: 'Cờ vây' },
    { word: 'しょうぎ', kanji: '将棋', romaji: 'shougi', mean: 'Cờ tướng Nhật Bản' },
    { word: 'カラオケ', kanji: 'カラオケ', romaji: 'karaoke', mean: 'Karaoke' },
    { word: 'ぼんおどり', kanji: '盆踊り', romaji: 'bonodori', mean: 'Múa Bon' }
  ],
  grammar: [
    {
      pattern: 'Động từ thể た (Ta-form)',
      explanation: 'Thể た (Ta-kei) được tạo thành giống cách chia Thể て (Te-kei). Đổi đuôi [te/de] thành [ta/da].\nCách chia:\n1. Nhóm I: (i, chi, ri -> tta), (mi, bi, ni -> nda), (ki -> ita), (gi -> ida), (shi -> shita). *Ngoại lệ: ikimasu -> itta.\n2. Nhóm II: Bỏ [masu] thêm [ta].\n3. Nhóm III: shimasu -> shita, kimasu -> kita.',
      example: '書いて (kaite) -> 書いた (kaita)\n飲んで (nonde) -> 飲んだ (nonda)\n食べて (tabete) -> 食べた (tabeta)\n来て (kite) -> 来た (kita)\nして (shite) -> した (shita)'
    },
    {
      pattern: 'Động từ thể た + ことが あります',
      explanation: 'Mẫu câu biểu thị ai đó đã từng làm một việc nào đó trong quá khứ (kinh nghiệm). Khác với thì quá khứ đơn thuần (đã làm tại một thời điểm cụ thể).',
      example: '馬に 乗った ことが あります。 (Tôi đã từng cưỡi ngựa.)\n昨年 北海道で 馬に 乗りました。 (Năm ngoái tôi đã cưỡi ngựa ở Hokkaido - Quá khứ đơn thuần)'
    },
    {
      pattern: 'Động từ thể た + り、 Động từ thể た + り します',
      explanation: 'Dùng để nêu ra một số hành động đại diện trong một nhóm nhiều hành động (Làm A, làm B, v.v...). Thì của câu được biểu thị ở cuối câu (shimasu/shimashita).',
      example: '日曜日は テニスを したり、映画を 見たり します。 (Chủ nhật tôi chơi quần vợt, xem phim v.v...)\n日曜日は テニスを したり、映画を 見たり しました。 (Chủ nhật tôi đã chơi quần vợt, xem phim v.v...)'
    },
    {
      pattern: 'Tính từ đuôi い (~く) / Tính từ đuôi な (~に) / Danh từ (~に) + なります',
      explanation: 'Biểu thị sự thay đổi về trạng thái (Trở nên, trở thành).',
      example: '寒く なります。 (Trở nên lạnh/Lạnh đi.)\n元気に なります。 (Trở nên khỏe.)\n25歳に なります。 (Sang tuổi 25.)'
    },
    {
      pattern: 'そうですね',
      explanation: 'Dùng để biểu thị sự đồng ý hoặc thông cảm với điều mà đối tác hội thoại nói. Khác với [Sou desu ka] (tiếp nhận thông tin mới), [Sou desu ne] biểu thị người nghe đã biết hoặc cùng cảm nhận.',
      example: '寒く なりましたね。 (Trời lạnh đi nhỉ.)\n...そうですね。 (...Vâng, đúng thế nhỉ.)'
    }
  ],
  kaiwa: [],
  quiz: []
};

};

export const lesson20Data: LessonDetail = {
  id: 20,
  title: 'Bài 20',
  vocabulary: [
    { word: 'いります', kanji: '要ります', romaji: 'irimasu', mean: 'Cần [thị thực (visa)]' },
    { word: 'しらべます', kanji: '調べます', romaji: 'shirabemasu', mean: 'Tìm hiểu, điều tra, xem' },
    { word: 'なおします', kanji: '直します', romaji: 'naoshimasu', mean: 'Sửa, chữa' },
    { word: 'しゅうりします', kanji: '修理します', romaji: 'shuurishimasu', mean: 'Sửa chữa, tu sửa' },
    { word: 'でんわします', kanji: '電話します', romaji: 'denwashimasu', mean: 'Gọi điện thoại' },
    { word: 'ぼく', kanji: '僕', romaji: 'boku', mean: 'Tớ (xưng hô thân mật của nam giới, = watashi)' },
    { word: 'きみ', kanji: '君', romaji: 'kimi', mean: 'Cậu, bạn (gọi thân mật dùng cho nam giới, = anata)' },
    { word: '～くん', kanji: '～君', romaji: 'kun', mean: 'Anh ~, cậu ~ (gọi thân mật dùng cho nam giới, = san)' },
    { word: 'うん', kanji: 'うん', romaji: 'un', mean: 'Ừ (cách nói thân mật của [hai])' },
    { word: 'ううん', kanji: 'ううん', romaji: 'uun', mean: 'Không (cách nói thân mật của [iie])' },
    { word: 'サラリーマン', kanji: 'サラリーマン', romaji: 'sarariiman', mean: 'Người làm việc cho các công ty' },
    { word: 'ことば', kanji: '言葉', romaji: 'kotoba', mean: 'Từ, tiếng' },
    { word: 'ぶっか', kanji: '物価', romaji: 'bukka', mean: 'Giá cả, mức giá, vật giá' },
    { word: 'きもの', kanji: '着物', romaji: 'kimono', mean: 'Kimono (trang phục truyền thống của Nhật Bản)' },
    { word: 'ビザ', kanji: 'ビザ', romaji: 'biza', mean: 'Thị thực, visa' },
    { word: 'はじめ', kanji: '始め', romaji: 'hajime', mean: 'Ban đầu, đầu tiên' },
    { word: 'おわり', kanji: '終わり', romaji: 'owari', mean: 'Kết thúc' },
    { word: 'こっち', kanji: 'こっち', romaji: 'kocchi', mean: 'Phía này, chỗ này (thân mật của [kochira])' },
    { word: 'そっち', kanji: 'そっち', romaji: 'socchi', mean: 'Phía đó, chỗ đó (thân mật của [sochira])' },
    { word: 'あっち', kanji: 'あっち', romaji: 'acchi', mean: 'Phía kia, chỗ kia (thân mật của [achira])' },
    { word: 'どっち', kanji: 'どっち', romaji: 'docchi', mean: 'Cái nào, phía nào, đâu (thân mật của [dochira])' },
    { word: 'このあいだ', kanji: 'この間', romaji: 'konoaida', mean: 'Vừa rồi, hôm nọ' },
    { word: 'みんなで', kanji: 'みんなで', romaji: 'minnade', mean: 'Mọi người cùng' },
    { word: '～けど', kanji: '～けど', romaji: 'kedo', mean: '～, nhưng (cách nói thân mật của [ga])' },
    { word: 'くにへかえるの？', kanji: '国へ帰るの？', romaji: 'kunihekaeruno', mean: 'Anh/Chị có về nước không?' },
    { word: 'どうするの？', kanji: 'どうするの？', romaji: 'dousuruno', mean: 'Anh/Chị tính sao? / Anh/Chị (sẽ) làm gì?' },
    { word: 'どうしようかな。', kanji: 'どうしようかな。', romaji: 'doushiyoukana', mean: 'Tính sao đây nhỉ? / Để tôi xem.' },
    { word: 'よかったら', kanji: 'よかったら', romaji: 'yokattara', mean: 'Nếu anh/chị thích thì' },
    { word: 'いろいろ', kanji: 'いろいろ', romaji: 'iroiro', mean: 'Nhiều thứ' }
  ],
  grammar: [
    {
      pattern: 'Kiểu lịch sự (Teinei-tai) và Kiểu thông thường (Futsuu-tai)',
      explanation: 'Trong tiếng Nhật có 2 kiểu văn phong: Kiểu lịch sự (dùng trong hội thoại với người lạ, người lớn tuổi, câp trên, hoặc trong các hoàn cảnh trang trọng) và Kiểu thông thường (dùng với gia đình, bạn bè thân thiết, người kém tuổi, hoặc trong nhật ký, báo chí).\n\nSo sánh:\n1. Động từ:\n   - Khẳng định: Ikimasu -> Iku\n   - Phủ định: Ikimasen -> Ikanai\n   - Quá khứ: Ikimashita -> Itta\n   - QK Phủ định: Ikimasendeshita -> Ikanakatta\n2. Tính từ đuôi i:\n   - Khẳng định: Isogashii desu -> Isogashii\n   - Phủ định: Isogashikunai desu -> Isogashikunai\n3. Tính từ đuôi na / Danh từ:\n   - Khẳng định: Kirei desu -> Kirei da\n   - Phủ định: Kirei ja arimasen -> Kirei ja nai',
      example: 'あした 東京へ 行きます。 (Lịch sự) -> あした 東京へ 行く。 (Thông thường)\n毎日 忙しいです。 -> 毎日 忙しい。\n相撲が 好きです。 -> 相撲が 好き(だ)。\n富士山に 登りたいです。 -> 富士山に 登りたい。'
    },
    {
      pattern: 'Hội thoại dùng kiểu thông thường',
      explanation: 'Trong hội thoại kiểu thông thường, các trợ từ, từ ngữ thường được lược bỏ hoặc thay đổi để ngắn gọn hơn.\n1. Câu nghi vấn: Bỏ [ka], lên giọng ở cuối câu.\n   - コーヒーを 飲む？ (Uống cà phê không?)\n2. Câu nghi vấn danh từ/tính từ: Bỏ [desu/da].\n   - 今晩 暇？ (Tối nay rảnh không?) -> Ừ, rảnh / Không, không rảnh.\n3. Lược bỏ trợ từ: (wa, ga, o, e...)\n   - ごはん[を] 食べる？ (Ăn cơm không?)\n4. Chữ [i] trong [V-te íru] bị lược bỏ.\n   - 辞書、持って [い]る？ (Có từ điển không?)',
      example: '勝手なこと 言わないで。 (Đừng có nói tùy tiện thế.)\n僕も 調査に 行く。 (Tớ cũng đi điều tra.)\n...うん、頼む。 (...Ừ, nhờ cậu nhé.)'
    },
    {
      pattern: 'けど (Nhưng)',
      explanation: 'Trong hội thoại thông thường, [ga] (nhưng) thường được thay bằng [kedo].',
      example: 'その カレーライス、辛い？ (Món cà-ri đó cay không?)\n...うん、辛いけど、おいしい。 (...Ừ, cay nhưng mà ngon.)\n相撲の チケット あるけど、一緒に行かない？ (Tớ có vé xem Sumo đấy, đi cùng không?)'
    }
  ],
  kaiwa: [],
  quiz: []
};

// Function to get lesson data by ID
export const getLessonData = (id: number): LessonDetail | null => {
  if (id === 1) return lesson1Data;
  if (id === 2) return lesson2Data;
  if (id === 3) return lesson3Data;
  if (id === 4) return lesson4Data;
  if (id === 5) return lesson5Data;
  if (id === 6) return lesson6Data;
  if (id === 7) return lesson7Data;
  if (id === 8) return lesson8Data;
  if (id === 9) return lesson9Data;
  if (id === 10) return lesson10Data;
  if (id === 11) return lesson11Data;
  if (id === 12) return lesson12Data;
  if (id === 13) return lesson13Data;
  if (id === 14) return lesson14Data;
  if (id === 15) return lesson15Data;
  if (id === 16) return lesson16Data;
  if (id === 17) return lesson17Data;
  if (id === 18) return lesson18Data;
  if (id === 19) return lesson19Data;
  if (id === 20) return lesson20Data;
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
