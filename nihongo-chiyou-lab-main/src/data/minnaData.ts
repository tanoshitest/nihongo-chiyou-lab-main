export interface VocabExampleFurigana {
  kanji: string;
  reading: string;
  meaning: string;
}

export interface VocabularyExample {
  jp: string;
  romaji: string;
  vn: string;
  furigana?: VocabExampleFurigana[]; // Furigana cho các Kanji trong câu
  kanjiDetails?: KanjiDetail[]; // Chi tiết Kanji để hover
}

export interface KanjiDetail {
  kanji: string;
  onyomi: string; // Âm on (âm Hán)
  kunyomi: string; // Âm kun (âm Nhật)
  meaning: string; // Nghĩa
  strokes: number; // Số nét
  jlpt: string; // Cấp độ JLPT
  radicals?: string; // Bộ thủ
  examples?: string[]; // Từ vựng ví dụ
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
      examples: [
        { 
          jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', vn: 'Tôi là sinh viên.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }, { kanji: '学生', reading: 'がくせい', meaning: 'sinh viên' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] },
            { kanji: '学', onyomi: 'ガク (gaku)', kunyomi: 'まな.ぶ (manabu)', meaning: 'Học', strokes: 8, jlpt: 'N5', radicals: '子 (con)', examples: ['学校 (がっこう) - trường học', '大学 (だいがく) - đại học'] },
            { kanji: '生', onyomi: 'セイ (sei), ショウ (shou)', kunyomi: 'い.きる (ikiru), う.まれる (umareru)', meaning: 'Sống, sinh ra', strokes: 5, jlpt: 'N5', radicals: '生 (sống)', examples: ['先生 (せんせい) - thầy/cô', '生活 (せいかつ) - cuộc sống'] }
          ]
        },
        { 
          jp: '私は日本人です。', romaji: 'Watashi wa nihonjin desu.', vn: 'Tôi là người Nhật.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'người Nhật' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] },
            { kanji: '日', onyomi: 'ニチ (nichi), ジツ (jitsu)', kunyomi: 'ひ (hi), か (ka)', meaning: 'Ngày, mặt trời', strokes: 4, jlpt: 'N5', radicals: '日 (mặt trời)', examples: ['今日 (きょう) - hôm nay', '日曜日 (にちようび) - Chủ nhật'] },
            { kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaning: 'Gốc, sách', strokes: 5, jlpt: 'N5', radicals: '木 (cây)', examples: ['日本 (にほん) - Nhật Bản', '本当 (ほんとう) - thật sự'] },
            { kanji: '人', onyomi: 'ジン (jin), ニン (nin)', kunyomi: 'ひと (hito)', meaning: 'Người', strokes: 2, jlpt: 'N5', radicals: '人 (người)', examples: ['日本人 (にほんじん) - người Nhật', '人々 (ひとびと) - mọi người'] }
          ]
        },
        { 
          jp: '私はベトナムから来ました。', romaji: 'Watashi wa Betonamu kara kimashita.', vn: 'Tôi đến từ Việt Nam.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }, { kanji: '来', reading: 'き', meaning: 'đến' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] },
            { kanji: '来', onyomi: 'ライ (rai)', kunyomi: 'く.る (kuru), き.たる (kitaru)', meaning: 'Đến, tới', strokes: 7, jlpt: 'N5', radicals: '木 (cây)', examples: ['来年 (らいねん) - năm sau', '将来 (しょうらい) - tương lai'] }
          ]
        },
        { 
          jp: '私は25歳です。', romaji: 'Watashi wa nijuugo sai desu.', vn: 'Tôi 25 tuổi.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }, { kanji: '歳', reading: 'さい', meaning: 'tuổi' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] },
            { kanji: '歳', onyomi: 'サイ (sai), セイ (sei)', kunyomi: 'とし (toshi)', meaning: 'Tuổi, năm', strokes: 13, jlpt: 'N3', radicals: '止 (dừng)', examples: ['20歳 (はたち) - 20 tuổi', '歳月 (さいげつ) - năm tháng'] }
          ]
        },
        { 
          jp: '私はエンジニアです。', romaji: 'Watashi wa enjinia desu.', vn: 'Tôi là kỹ sư.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] }
          ]
        },
        { 
          jp: '私は毎日日本語を勉強します。', romaji: 'Watashi wa mainichi nihongo wo benkyou shimasu.', vn: 'Tôi học tiếng Nhật mỗi ngày.', 
          furigana: [{ kanji: '私', reading: 'わたし', meaning: 'tôi' }, { kanji: '毎日', reading: 'まいにち', meaning: 'mỗi ngày' }, { kanji: '日本語', reading: 'にほんご', meaning: 'tiếng Nhật' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'học' }],
          kanjiDetails: [
            { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたくし (watakushi), わたし (watashi)', meaning: 'Tôi, riêng tư', strokes: 7, jlpt: 'N4', radicals: '禾 (lúa)', examples: ['私立 (しりつ) - tư lập', '私生活 (しせいかつ) - đời tư'] },
            { kanji: '毎', onyomi: 'マイ (mai)', kunyomi: 'ごと (goto)', meaning: 'Mỗi', strokes: 6, jlpt: 'N5', radicals: '毋 (đừng)', examples: ['毎週 (まいしゅう) - mỗi tuần', '毎月 (まいつき) - mỗi tháng'] },
            { kanji: '日', onyomi: 'ニチ (nichi), ジツ (jitsu)', kunyomi: 'ひ (hi), か (ka)', meaning: 'Ngày, mặt trời', strokes: 4, jlpt: 'N5', radicals: '日 (mặt trời)', examples: ['今日 (きょう) - hôm nay', '日曜日 (にちようび) - Chủ nhật'] },
            { kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaning: 'Gốc, sách', strokes: 5, jlpt: 'N5', radicals: '木 (cây)', examples: ['日本 (にほん) - Nhật Bản', '本当 (ほんとう) - thật sự'] },
            { kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた.る (kataru)', meaning: 'Ngôn ngữ, lời', strokes: 14, jlpt: 'N5', radicals: '言 (lời)', examples: ['英語 (えいご) - tiếng Anh', '言語 (げんご) - ngôn ngữ'] },
            { kanji: '勉', onyomi: 'ベン (ben)', kunyomi: 'つと.める (tsutomeru)', meaning: 'Cố gắng', strokes: 10, jlpt: 'N4', radicals: '力 (lực)', examples: ['勉強 (べんきょう) - học tập', '勤勉 (きんべん) - cần cù'] },
            { kanji: '強', onyomi: 'キョウ (kyou), ゴウ (gou)', kunyomi: 'つよ.い (tsuyoi)', meaning: 'Mạnh', strokes: 11, jlpt: 'N4', radicals: '弓 (cung)', examples: ['強い (つよい) - mạnh', '勉強 (べんきょう) - học tập'] }
          ]
        }
      ]
    },
    { 
      word: 'わたしたち', kanji: '私たち', romaji: 'watashitachi', mean: 'Chúng tôi, chúng ta',
      examples: [
        { jp: '私たちは会社員です。', romaji: 'Watashitachi wa kaishain desu.', vn: 'Chúng tôi là nhân viên công ty.' },
        { jp: '私たちはIMCの社員です。', romaji: 'Watashitachi wa IMC no shain desu.', vn: 'Chúng tôi là nhân viên công ty IMC.' },
        { jp: '私たちは日本語を勉強します。', romaji: 'Watashitachi wa nihongo wo benkyou shimasu.', vn: 'Chúng tôi học tiếng Nhật.' },
        { jp: '私たちはベトナム人です。', romaji: 'Watashitachi wa Betonamujin desu.', vn: 'Chúng tôi là người Việt Nam.' },
        { jp: '私たちは友達です。', romaji: 'Watashitachi wa tomodachi desu.', vn: 'Chúng tôi là bạn bè.' }
      ]
    },
    { 
      word: 'あなた', kanji: '', romaji: 'anata', mean: 'Anh/chị, ông/bà, bạn (ngôi thứ II số ít)',
      examples: [
        { jp: 'あなたは先生ですか。', romaji: 'Anata wa sensei desu ka.', vn: 'Bạn có phải là giáo viên không?' },
        { jp: 'あなたは何歳ですか。', romaji: 'Anata wa nansai desu ka.', vn: 'Bạn bao nhiêu tuổi?' },
        { jp: 'あなたは日本人ですか。', romaji: 'Anata wa nihonjin desu ka.', vn: 'Bạn có phải là người Nhật không?' },
        { jp: 'あなたの名前は何ですか。', romaji: 'Anata no namae wa nan desu ka.', vn: 'Tên của bạn là gì?' },
        { jp: 'あなたはどこから来ましたか。', romaji: 'Anata wa doko kara kimashita ka.', vn: 'Bạn đến từ đâu?' }
      ]
    },
    { 
      word: 'あのひと', kanji: 'あの人', romaji: 'ano hito', mean: 'Người kia, người đó',
      examples: [
        { jp: 'あの人は田中さんです。', romaji: 'Ano hito wa Tanaka-san desu.', vn: 'Người kia là anh Tanaka.' },
        { jp: 'あの人は医者です。', romaji: 'Ano hito wa isha desu.', vn: 'Người đó là bác sĩ.' },
        { jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?' },
        { jp: 'あの人はアメリカ人です。', romaji: 'Ano hito wa Amerikajin desu.', vn: 'Người đó là người Mỹ.' },
        { jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.' }
      ]
    },
    { 
      word: 'あのかた', kanji: 'あの方', romaji: 'ano kata', mean: 'Người kia, người đó (lịch sự)',
      examples: [
        { jp: 'あの方は山田先生です。', romaji: 'Ano kata wa Yamada sensei desu.', vn: 'Vị kia là thầy Yamada.' },
        { jp: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', vn: 'Vị kia là ai ạ?' },
        { jp: 'あの方は社長です。', romaji: 'Ano kata wa shachou desu.', vn: 'Vị đó là giám đốc.' },
        { jp: 'あの方は韓国の方です。', romaji: 'Ano kata wa Kankoku no kata desu.', vn: 'Vị đó là người Hàn Quốc.' },
        { jp: 'あの方はIMCの社員です。', romaji: 'Ano kata wa IMC no shain desu.', vn: 'Vị đó là nhân viên công ty IMC.' }
      ]
    },
    { 
      word: 'みなさん', kanji: '皆さん', romaji: 'minasan', mean: 'Các anh chị, các ông bà, các bạn, quý vị',
      examples: [
        { jp: '皆さん、こんにちは。', romaji: 'Minasan, konnichiwa.', vn: 'Chào mọi người.' },
        { jp: '皆さんは学生ですか。', romaji: 'Minasan wa gakusei desu ka.', vn: 'Các bạn có phải là sinh viên không?' },
        { jp: '皆さん、はじめまして。', romaji: 'Minasan, hajimemashite.', vn: 'Xin chào các bạn, rất hân hạnh được gặp.' },
        { jp: '皆さんはどこから来ましたか。', romaji: 'Minasan wa doko kara kimashita ka.', vn: 'Các bạn đến từ đâu?' },
        { jp: '皆さん、どうぞよろしく。', romaji: 'Minasan, douzo yoroshiku.', vn: 'Mong các bạn giúp đỡ.' }
      ]
    },
    
    // Hậu tố xưng hô
    { 
      word: '～さん', kanji: '', romaji: '~san', mean: 'Anh, chị, ông, bà (hậu tố lịch sự)',
      examples: [
        { jp: '田中さんは会社員です。', romaji: 'Tanaka-san wa kaishain desu.', vn: 'Anh Tanaka là nhân viên công ty.' },
        { jp: 'ミラーさんはアメリカ人です。', romaji: 'Miraa-san wa Amerikajin desu.', vn: 'Anh Miller là người Mỹ.' },
        { jp: '山田さんは先生です。', romaji: 'Yamada-san wa sensei desu.', vn: 'Cô Yamada là giáo viên.' },
        { jp: '佐藤さんは銀行員です。', romaji: 'Satou-san wa ginkouin desu.', vn: 'Anh Satou là nhân viên ngân hàng.' },
        { jp: 'キムさんは韓国人です。', romaji: 'Kimu-san wa Kankokujin desu.', vn: 'Chị Kim là người Hàn Quốc.' }
      ]
    },
    { 
      word: '～ちゃん', kanji: '', romaji: '~chan', mean: 'Hậu tố thêm vào sau tên của trẻ em',
      examples: [
        { jp: 'さくらちゃんは5歳です。', romaji: 'Sakura-chan wa go sai desu.', vn: 'Bé Sakura 5 tuổi.' },
        { jp: 'ゆきちゃんは学生です。', romaji: 'Yuki-chan wa gakusei desu.', vn: 'Bé Yuki là học sinh.' },
        { jp: 'はなちゃんはかわいいです。', romaji: 'Hana-chan wa kawaii desu.', vn: 'Bé Hana dễ thương.' },
        { jp: 'まりちゃんは日本人です。', romaji: 'Mari-chan wa Nihonjin desu.', vn: 'Bé Mari là người Nhật.' },
        { jp: 'あいちゃんは3歳です。', romaji: 'Ai-chan wa san sai desu.', vn: 'Bé Ai 3 tuổi.' }
      ]
    },
    { 
      word: '～くん', kanji: '～君', romaji: '~kun', mean: 'Hậu tố thêm vào sau tên của em trai',
      examples: [
        { jp: 'たけしくんは学生です。', romaji: 'Takeshi-kun wa gakusei desu.', vn: 'Cậu Takeshi là học sinh.' },
        { jp: 'けんくんは10歳です。', romaji: 'Ken-kun wa juu sai desu.', vn: 'Cậu Ken 10 tuổi.' },
        { jp: 'ゆうたくんは日本人です。', romaji: 'Yuuta-kun wa Nihonjin desu.', vn: 'Cậu Yuuta là người Nhật.' },
        { jp: 'そうたくんは私の友達です。', romaji: 'Souta-kun wa watashi no tomodachi desu.', vn: 'Cậu Souta là bạn của tôi.' },
        { jp: 'りょうくんは8歳です。', romaji: 'Ryou-kun wa hachi sai desu.', vn: 'Cậu Ryou 8 tuổi.' }
      ]
    },
    { 
      word: '～じん', kanji: '～人', romaji: '~jin', mean: 'Người (nước) ~; ví dụ: アメリカじん - người Mỹ',
      examples: [
        { jp: '私は日本人です。', romaji: 'Watashi wa Nihonjin desu.', vn: 'Tôi là người Nhật.' },
        { jp: 'ミラーさんはアメリカ人です。', romaji: 'Miraa-san wa Amerikajin desu.', vn: 'Anh Miller là người Mỹ.' },
        { jp: '彼はベトナム人です。', romaji: 'Kare wa Betonamujin desu.', vn: 'Anh ấy là người Việt Nam.' },
        { jp: 'あの人は韓国人ですか。', romaji: 'Ano hito wa Kankokujin desu ka.', vn: 'Người kia có phải là người Hàn Quốc không?' },
        { jp: '田中さんは中国人じゃありません。', romaji: 'Tanaka-san wa Chuugokujin ja arimasen.', vn: 'Anh Tanaka không phải là người Trung Quốc.' }
      ]
    },
    
    // Nghề nghiệp
    { 
      word: 'せんせい', kanji: '先生', romaji: 'sensei', mean: 'Thầy/cô (không dùng khi nói về nghề nghiệp của mình)',
      examples: [
        { jp: '山田さんは先生です。', romaji: 'Yamada-san wa sensei desu.', vn: 'Anh Yamada là giáo viên.' },
        { jp: 'あの方は日本語の先生です。', romaji: 'Ano kata wa nihongo no sensei desu.', vn: 'Vị kia là giáo viên tiếng Nhật.' },
        { jp: '田中先生は大学の先生です。', romaji: 'Tanaka sensei wa daigaku no sensei desu.', vn: 'Thầy Tanaka là giảng viên đại học.' },
        { jp: '先生、おはようございます。', romaji: 'Sensei, ohayou gozaimasu.', vn: 'Chào thầy/cô ạ.' },
        { jp: 'あの人は私の先生です。', romaji: 'Ano hito wa watashi no sensei desu.', vn: 'Người kia là thầy của tôi.' }
      ],
      kanjiDetails: [
        {
          kanji: '先',
          onyomi: 'セン (sen)',
          kunyomi: 'さき (saki), まず (mazu)',
          meaning: 'Trước, đầu tiên',
          strokes: 6,
          jlpt: 'N5',
          radicals: '儿 (chân người)',
          examples: ['先週 (せんしゅう) - tuần trước', '先月 (せんげつ) - tháng trước', '先に (さきに) - trước đó']
        },
        {
          kanji: '生',
          onyomi: 'セイ (sei), ショウ (shou)',
          kunyomi: 'い.きる (ikiru), う.まれる (umareru), なま (nama)',
          meaning: 'Sống, sinh ra, tươi sống',
          strokes: 5,
          jlpt: 'N5',
          radicals: '生 (sống)',
          examples: ['学生 (がくせい) - sinh viên', '生活 (せいかつ) - cuộc sống', '生まれる (うまれる) - được sinh ra']
        }
      ]
    },
    { 
      word: 'きょうし', kanji: '教師', romaji: 'kyoushi', mean: 'Giáo viên',
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
        { jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', vn: 'Tôi là sinh viên.' },
        { jp: 'ミラーさんは大学の学生です。', romaji: 'Miraa-san wa daigaku no gakusei desu.', vn: 'Anh Miller là sinh viên đại học.' },
        { jp: 'あの人は学生ですか。', romaji: 'Ano hito wa gakusei desu ka.', vn: 'Người kia có phải là sinh viên không?' },
        { jp: '田中さんは学生じゃありません。', romaji: 'Tanaka-san wa gakusei ja arimasen.', vn: 'Anh Tanaka không phải là sinh viên.' },
        { jp: '私たちは日本語の学生です。', romaji: 'Watashitachi wa nihongo no gakusei desu.', vn: 'Chúng tôi là học viên tiếng Nhật.' }
      ]
    },
    { 
      word: 'かいしゃいん', kanji: '会社員', romaji: 'kaishain', mean: 'Nhân viên công ty',
      examples: [
        { jp: '私は会社員です。', romaji: 'Watashi wa kaishain desu.', vn: 'Tôi là nhân viên công ty.' },
        { jp: '佐藤さんは会社員です。', romaji: 'Satou-san wa kaishain desu.', vn: 'Anh Satou là nhân viên công ty.' },
        { jp: '田中さんは会社員ですか。', romaji: 'Tanaka-san wa kaishain desu ka.', vn: 'Anh Tanaka có phải là nhân viên công ty không?' },
        { jp: '私は会社員じゃありません。', romaji: 'Watashi wa kaishain ja arimasen.', vn: 'Tôi không phải là nhân viên công ty.' },
        { jp: 'あの人も会社員です。', romaji: 'Ano hito mo kaishain desu.', vn: 'Người kia cũng là nhân viên công ty.' }
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
      examples: [
        { jp: '私は銀行員です。', romaji: 'Watashi wa ginkouin desu.', vn: 'Tôi là nhân viên ngân hàng.' },
        { jp: '佐藤さんは銀行員ですか。', romaji: 'Satou-san wa ginkouin desu ka.', vn: 'Anh Satou có phải là nhân viên ngân hàng không?' },
        { jp: 'あの人は銀行員じゃありません。', romaji: 'Ano hito wa ginkouin ja arimasen.', vn: 'Người kia không phải là nhân viên ngân hàng.' },
        { jp: '田中さんも銀行員です。', romaji: 'Tanaka-san mo ginkouin desu.', vn: 'Anh Tanaka cũng là nhân viên ngân hàng.' },
        { jp: '私の友達は銀行員です。', romaji: 'Watashi no tomodachi wa ginkouin desu.', vn: 'Bạn tôi là nhân viên ngân hàng.' }
      ]
    },
    { 
      word: 'いしゃ', kanji: '医者', romaji: 'isha', mean: 'Bác sĩ',
      examples: [
        { jp: '山田さんは医者です。', romaji: 'Yamada-san wa isha desu.', vn: 'Anh Yamada là bác sĩ.' },
        { jp: '私は医者じゃありません。', romaji: 'Watashi wa isha ja arimasen.', vn: 'Tôi không phải là bác sĩ.' },
        { jp: 'あの方は病院の医者です。', romaji: 'Ano kata wa byouin no isha desu.', vn: 'Vị đó là bác sĩ bệnh viện.' },
        { jp: '田中さんは医者ですか。', romaji: 'Tanaka-san wa isha desu ka.', vn: 'Anh Tanaka có phải là bác sĩ không?' },
        { jp: '私の父は医者です。', romaji: 'Watashi no chichi wa isha desu.', vn: 'Bố tôi là bác sĩ.' }
      ]
    },
    { 
      word: 'けんきゅうしゃ', kanji: '研究者', romaji: 'kenkyuusha', mean: 'Nhà nghiên cứu',
      examples: [
        { jp: '私は研究者です。', romaji: 'Watashi wa kenkyuusha desu.', vn: 'Tôi là nhà nghiên cứu.' },
        { jp: '田中さんは大学の研究者です。', romaji: 'Tanaka-san wa daigaku no kenkyuusha desu.', vn: 'Anh Tanaka là nhà nghiên cứu của trường đại học.' },
        { jp: 'あの人は研究者ですか。', romaji: 'Ano hito wa kenkyuusha desu ka.', vn: 'Người kia có phải là nhà nghiên cứu không?' },
        { jp: 'ミラーさんは研究者じゃありません。', romaji: 'Miraa-san wa kenkyuusha ja arimasen.', vn: 'Anh Miller không phải là nhà nghiên cứu.' },
        { jp: '佐藤さんも研究者です。', romaji: 'Satou-san mo kenkyuusha desu.', vn: 'Anh Satou cũng là nhà nghiên cứu.' }
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
      examples: [
        { jp: '私は大学の学生です。', romaji: 'Watashi wa daigaku no gakusei desu.', vn: 'Tôi là sinh viên đại học.' },
        { jp: 'さくら大学は日本の大学です。', romaji: 'Sakura daigaku wa Nihon no daigaku desu.', vn: 'Đại học Sakura là trường đại học Nhật Bản.' },
        { jp: 'ミラーさんは大学の先生です。', romaji: 'Miraa-san wa daigaku no sensei desu.', vn: 'Anh Miller là giảng viên đại học.' },
        { jp: '東京大学は有名です。', romaji: 'Toukyou daigaku wa yuumei desu.', vn: 'Đại học Tokyo rất nổi tiếng.' },
        { jp: '田中さんは富士大学の学生です。', romaji: 'Tanaka-san wa Fuji daigaku no gakusei desu.', vn: 'Anh Tanaka là sinh viên đại học Fuji.' }
      ]
    },
    { 
      word: 'びょういん', kanji: '病院', romaji: 'byouin', mean: 'Bệnh viện',
      examples: [
        { jp: '山田さんは病院の医者です。', romaji: 'Yamada-san wa byouin no isha desu.', vn: 'Anh Yamada là bác sĩ bệnh viện.' },
        { jp: '神戸病院は大きいです。', romaji: 'Koube byouin wa ookii desu.', vn: 'Bệnh viện Kobe rất lớn.' },
        { jp: 'あの人は病院の人です。', romaji: 'Ano hito wa byouin no hito desu.', vn: 'Người kia là người của bệnh viện.' },
        { jp: '私は病院で働きます。', romaji: 'Watashi wa byouin de hatarakimasu.', vn: 'Tôi làm việc ở bệnh viện.' },
        { jp: '田中さんは病院の先生です。', romaji: 'Tanaka-san wa byouin no sensei desu.', vn: 'Anh Tanaka là bác sĩ ở bệnh viện.' }
      ]
    },
    { word: 'でんき', kanji: '電気', romaji: 'denki', mean: 'Điện, đèn điện' },
    
    // Từ nghi vấn
    { 
      word: 'だれ', kanji: '', romaji: 'dare', mean: 'Ai',
      examples: [
        { jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?' },
        { jp: '誰が先生ですか。', romaji: 'Dare ga sensei desu ka.', vn: 'Ai là giáo viên?' },
        { jp: 'あなたは誰ですか。', romaji: 'Anata wa dare desu ka.', vn: 'Bạn là ai?' },
        { jp: 'これは誰の本ですか。', romaji: 'Kore wa dare no hon desu ka.', vn: 'Đây là sách của ai?' },
        { jp: '誰がエンジニアですか。', romaji: 'Dare ga enjinia desu ka.', vn: 'Ai là kỹ sư?' }
      ]
    },
    { 
      word: 'どなた', kanji: '', romaji: 'donata', mean: 'Ai (lịch sự)',
      examples: [
        { jp: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', vn: 'Vị kia là ai ạ?' },
        { jp: '失礼ですが、どなたですか。', romaji: 'Shitsurei desu ga, donata desu ka.', vn: 'Xin lỗi, ngài là ai ạ?' },
        { jp: 'どなたが社長ですか。', romaji: 'Donata ga shachou desu ka.', vn: 'Ai là giám đốc ạ?' },
        { jp: 'こちらはどなたですか。', romaji: 'Kochira wa donata desu ka.', vn: 'Đây là ai ạ?' },
        { jp: 'どなたが田中先生ですか。', romaji: 'Donata ga Tanaka sensei desu ka.', vn: 'Ai là thầy Tanaka ạ?' }
      ]
    },
    
    // Tuổi
    { word: '～さい', kanji: '～歳', romaji: '~sai', mean: '~ tuổi' },
    { 
      word: 'なんさい', kanji: '何歳', romaji: 'nansai', mean: 'Mấy tuổi, bao nhiêu tuổi',
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
        { jp: '失礼ですが、おいくつですか。', romaji: 'Shitsurei desu ga, oikutsu desu ka.', vn: 'Xin lỗi, ngài bao nhiêu tuổi ạ?' },
        { jp: 'あの方はおいくつですか。', romaji: 'Ano kata wa oikutsu desu ka.', vn: 'Vị đó bao nhiêu tuổi ạ?' },
        { jp: '社長はおいくつですか。', romaji: 'Shachou wa oikutsu desu ka.', vn: 'Giám đốc bao nhiêu tuổi ạ?' },
        { jp: '先生はおいくつですか。', romaji: 'Sensei wa oikutsu desu ka.', vn: 'Thầy/cô bao nhiêu tuổi ạ?' },
        { jp: 'お母さんはおいくつですか。', romaji: 'Okaasan wa oikutsu desu ka.', vn: 'Mẹ bạn bao nhiêu tuổi ạ?' }
      ]
    },
    
    // Câu trả lời
    { 
      word: 'はい', kanji: '', romaji: 'hai', mean: 'Vâng, dạ',
      examples: [
        { jp: 'はい、そうです。', romaji: 'Hai, sou desu.', vn: 'Vâng, đúng vậy.' },
        { jp: 'はい、私は学生です。', romaji: 'Hai, watashi wa gakusei desu.', vn: 'Vâng, tôi là sinh viên.' },
        { jp: 'はい、田中です。', romaji: 'Hai, Tanaka desu.', vn: 'Vâng, tôi là Tanaka.' },
        { jp: 'はい、わかりました。', romaji: 'Hai, wakarimashita.', vn: 'Vâng, tôi hiểu rồi.' },
        { jp: 'はい、日本人です。', romaji: 'Hai, Nihonjin desu.', vn: 'Vâng, tôi là người Nhật.' }
      ]
    },
    { 
      word: 'いいえ', kanji: '', romaji: 'iie', mean: 'Không',
      examples: [
        { jp: 'いいえ、違います。', romaji: 'Iie, chigaimasu.', vn: 'Không, không phải.' },
        { jp: 'いいえ、学生じゃありません。', romaji: 'Iie, gakusei ja arimasen.', vn: 'Không, tôi không phải sinh viên.' },
        { jp: 'いいえ、日本人じゃありません。', romaji: 'Iie, Nihonjin ja arimasen.', vn: 'Không, tôi không phải người Nhật.' },
        { jp: 'いいえ、会社員です。', romaji: 'Iie, kaishain desu.', vn: 'Không, tôi là nhân viên công ty.' },
        { jp: 'いいえ、田中さんじゃありません。', romaji: 'Iie, Tanaka-san ja arimasen.', vn: 'Không, đó không phải anh Tanaka.' }
      ]
    },
    
    // Chào hỏi & Giao tiếp
    { word: 'しつれいですが', kanji: '失礼ですが', romaji: 'shitsurei desu ga', mean: 'Xin lỗi...' },
    { word: 'おなまえは？', kanji: 'お名前は？', romaji: 'onamae wa?', mean: 'Tên anh/chị là gì?' },
    { 
      word: 'はじめまして', kanji: '初めまして', romaji: 'hajimemashite', mean: 'Rất hân hạnh được gặp anh/chị (Lời chào lần đầu gặp)',
      examples: [
        { jp: 'はじめまして、田中です。', romaji: 'Hajimemashite, Tanaka desu.', vn: 'Xin chào, tôi là Tanaka.' },
        { jp: 'はじめまして、ミラーです。', romaji: 'Hajimemashite, Miraa desu.', vn: 'Xin chào, tôi là Miller.' },
        { jp: 'はじめまして、どうぞよろしく。', romaji: 'Hajimemashite, douzo yoroshiku.', vn: 'Xin chào, rất mong được giúp đỡ.' },
        { jp: 'はじめまして、ベトナムから来ました。', romaji: 'Hajimemashite, Betonamu kara kimashita.', vn: 'Xin chào, tôi đến từ Việt Nam.' },
        { jp: 'はじめまして、山田です。よろしくお願いします。', romaji: 'Hajimemashite, Yamada desu. Yoroshiku onegaishimasu.', vn: 'Xin chào, tôi là Yamada. Rất mong được giúp đỡ.' }
      ]
    },
    { word: 'どうぞよろしく', kanji: '', romaji: 'douzo yoroshiku', mean: 'Rất mong được sự giúp đỡ' },
    { word: 'どうぞよろしくおねがいします', kanji: 'どうぞよろしくお願いします', romaji: 'douzo yoroshiku onegaishimasu', mean: 'Rất mong được sự giúp đỡ của anh/chị (lịch sự)' },
    { word: 'こちらは～さんです', kanji: '', romaji: 'kochira wa ~san desu', mean: 'Đây là anh/chị/ông/bà ~' },
    { word: '～からきました', kanji: '～から来ました', romaji: '~kara kimashita', mean: '(Tôi) đến từ ~' },
    
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
    { word: 'かんこく', kanji: '韓国', romaji: 'Kankoku', mean: 'Hàn Quốc' },
    { word: 'サウジアラビア', kanji: '', romaji: 'Saujiarabia', mean: 'Ả-rập Xê-út' },
    { word: 'シンガポール', kanji: '', romaji: 'Shingapooru', mean: 'Singapore' },
    { word: 'スペイン', kanji: '', romaji: 'Supein', mean: 'Tây Ban Nha' },
    { word: 'タイ', kanji: '', romaji: 'Tai', mean: 'Thái Lan' },
    { word: 'ちゅうごく', kanji: '中国', romaji: 'Chuugoku', mean: 'Trung Quốc' },
    { word: 'ドイツ', kanji: '', romaji: 'Doitsu', mean: 'Đức' },
    { word: 'にほん', kanji: '日本', romaji: 'Nihon', mean: 'Nhật Bản' },
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
    { word: 'ロシアじん', kanji: 'ロシア人', romaji: 'Roshiajin', mean: 'Người Nga' },
    
    // Ngôn ngữ
    { word: 'えいご', kanji: '英語', romaji: 'Eigo', mean: 'Tiếng Anh' },
    { word: 'イタリアご', kanji: 'イタリア語', romaji: 'Itariago', mean: 'Tiếng Ý' },
    { word: 'ペルシャご', kanji: 'ペルシャ語', romaji: 'Perushago', mean: 'Tiếng Ba Tư' },
    { word: 'ヒンディーご', kanji: 'ヒンディー語', romaji: 'Hindiigo', mean: 'Tiếng Hin-di' },
    { word: 'インドネシアご', kanji: 'インドネシア語', romaji: 'Indoneshiago', mean: 'Tiếng Indonesia' },
    { word: 'アラビアご', kanji: 'アラビア語', romaji: 'Arabiago', mean: 'Tiếng Ả-rập' },
    { word: 'フランスご', kanji: 'フランス語', romaji: 'Furansugo', mean: 'Tiếng Pháp' },
    { word: 'かんこくご', kanji: '韓国語', romaji: 'Kankokugo', mean: 'Tiếng Hàn Quốc' },
    { word: 'スペインご', kanji: 'スペイン語', romaji: 'Supeingo', mean: 'Tiếng Tây Ban Nha' },
    { word: 'タイご', kanji: 'タイ語', romaji: 'Taigo', mean: 'Tiếng Thái' },
    { word: 'ちゅうごくご', kanji: '中国語', romaji: 'Chuugokugo', mean: 'Tiếng Trung Quốc' },
    { word: 'ドイツご', kanji: 'ドイツ語', romaji: 'Doitsugo', mean: 'Tiếng Đức' },
    { word: 'にほんご', kanji: '日本語', romaji: 'Nihongo', mean: 'Tiếng Nhật' },
    { word: 'フィリピンご', kanji: 'フィリピン語', romaji: 'Firipingo', mean: 'Tiếng Philippines' },
    { word: 'ポルトガルご', kanji: 'ポルトガル語', romaji: 'Porutogarugo', mean: 'Tiếng Bồ Đào Nha' },
    { word: 'ベトナムご', kanji: 'ベトナム語', romaji: 'Betonamugo', mean: 'Tiếng Việt' },
    { word: 'マレーシアご', kanji: 'マレーシア語', romaji: 'Mareeshiago', mean: 'Tiếng Mã Lai' },
    { word: 'ロシアご', kanji: 'ロシア語', romaji: 'Roshiago', mean: 'Tiếng Nga' },
    
    // Tên riêng (giả tưởng)
    { word: 'さくらだいがく', kanji: 'さくら大学', romaji: 'Sakura Daigaku', mean: 'Đại học Sakura (tên trường giả tưởng)' },
    { word: 'ふじだいがく', kanji: '富士大学', romaji: 'Fuji Daigaku', mean: 'Đại học Fuji (tên trường giả tưởng)' },
    { word: 'IMC', kanji: '', romaji: 'IMC', mean: 'Tên công ty (giả tưởng)' },
    { word: 'パワーでんき', kanji: 'パワー電気', romaji: 'Pawaa Denki', mean: 'Công ty Power Điện khí (giả tưởng)' },
    { word: 'ブラジルエアー', kanji: '', romaji: 'Burajiru Eaa', mean: 'Hãng hàng không Brazil (giả tưởng)' },
    { word: 'AKC', kanji: '', romaji: 'AKC', mean: 'Tên tổ chức (giả tưởng)' },
    { word: 'こうべびょういん', kanji: '神戸病院', romaji: 'Koube Byouin', mean: 'Bệnh viện Kobe (giả tưởng)' },
  ],
  grammar: [
    {
      pattern: 'N1 は N2 です',
      explanation: 'Dùng để khẳng định N1 là N2. Trợ từ "は" (wa) đánh dấu chủ đề của câu, "です" là động từ "là" ở thể lịch sự.',
      example: '私は学生です。(Watashi wa gakusei desu.) - Tôi là sinh viên.',
      examples: [
        { jp: '私は学生です。', vn: 'Tôi là sinh viên.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '学生', reading: 'がくせい' }], image: '/placeholder.svg' },
        { jp: '田中さんは先生です。', vn: 'Anh Tanaka là giáo viên.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '先生', reading: 'せんせい' }], image: '/placeholder.svg' },
        { jp: '山田さんは医者です。', vn: 'Anh Yamada là bác sĩ.', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '医者', reading: 'いしゃ' }], image: '/placeholder.svg' },
        { jp: 'ミラーさんはアメリカ人です。', vn: 'Anh Miller là người Mỹ.', furigana: [{ kanji: '人', reading: 'じん' }], image: '/placeholder.svg' },
        { jp: '佐藤さんは会社員です。', vn: 'Anh Satou là nhân viên công ty.', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '会社員', reading: 'かいしゃいん' }], image: '/placeholder.svg' },
        { jp: 'あの人はエンジニアです。', vn: 'Người kia là kỹ sư.', furigana: [{ kanji: '人', reading: 'ひと' }], image: '/placeholder.svg' },
        { jp: '私は日本人です。', vn: 'Tôi là người Nhật.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '日本人', reading: 'にほんじん' }], image: '/placeholder.svg' },
        { jp: 'キムさんは韓国人です。', vn: 'Chị Kim là người Hàn Quốc.', furigana: [{ kanji: '韓国人', reading: 'かんこくじん' }], image: '/placeholder.svg' },
        { jp: 'マリアさんはブラジル人です。', vn: 'Chị Maria là người Brazil.', furigana: [{ kanji: '人', reading: 'じん' }], image: '/placeholder.svg' },
        { jp: '私は銀行員です。', vn: 'Tôi là nhân viên ngân hàng.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '銀行員', reading: 'ぎんこういん' }], image: '/placeholder.svg' }
      ]
    },
    {
      pattern: 'N1 は N2 じゃありません / ではありません',
      explanation: 'Dùng để phủ định: N1 không phải là N2. "じゃありません" là dạng nói thường, "ではありません" là dạng trang trọng hơn.',
      example: '私は医者じゃありません。(Watashi wa isha ja arimasen.) - Tôi không phải bác sĩ.',
      examples: [
        { jp: '私は医者じゃありません。', vn: 'Tôi không phải là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: '田中さんは学生じゃありません。', vn: 'Anh Tanaka không phải là sinh viên.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '学生', reading: 'がくせい' }] },
        { jp: 'ミラーさんは日本人じゃありません。', vn: 'Anh Miller không phải là người Nhật.', furigana: [{ kanji: '日本人', reading: 'にほんじん' }] },
        { jp: '私は先生ではありません。', vn: 'Tôi không phải là giáo viên.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: '山田さんは銀行員じゃありません。', vn: 'Anh Yamada không phải là nhân viên ngân hàng.', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '銀行員', reading: 'ぎんこういん' }] },
        { jp: 'あの人はエンジニアじゃありません。', vn: 'Người kia không phải là kỹ sư.', furigana: [{ kanji: '人', reading: 'ひと' }] },
        { jp: '佐藤さんは教師ではありません。', vn: 'Anh Satou không phải là giáo viên.', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '教師', reading: 'きょうし' }] },
        { jp: '私は研究者じゃありません。', vn: 'Tôi không phải là nhà nghiên cứu.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '研究者', reading: 'けんきゅうしゃ' }] },
        { jp: 'キムさんは中国人じゃありません。', vn: 'Chị Kim không phải là người Trung Quốc.', furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん' }] },
        { jp: 'あの方は会社員ではありません。', vn: 'Vị kia không phải là nhân viên công ty.', furigana: [{ kanji: '方', reading: 'かた' }, { kanji: '会社員', reading: 'かいしゃいん' }] }
      ]
    },
    {
      pattern: 'N1 は N2 ですか',
      explanation: 'Dùng để hỏi: N1 có phải là N2 không? Thêm "か" vào cuối câu để tạo câu hỏi.',
      example: 'あなたは学生ですか。(Anata wa gakusei desu ka?) - Bạn có phải sinh viên không?',
      examples: [
        { jp: 'あなたは学生ですか。', vn: 'Bạn có phải là sinh viên không?', furigana: [{ kanji: '学生', reading: 'がくせい' }] },
        { jp: '田中さんは先生ですか。', vn: 'Anh Tanaka có phải là giáo viên không?', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: 'ミラーさんはアメリカ人ですか。', vn: 'Anh Miller có phải là người Mỹ không?', furigana: [{ kanji: '人', reading: 'じん' }] },
        { jp: 'あの人は医者ですか。', vn: 'Người kia có phải là bác sĩ không?', furigana: [{ kanji: '人', reading: 'ひと' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: '佐藤さんは会社員ですか。', vn: 'Anh Satou có phải là nhân viên công ty không?', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '会社員', reading: 'かいしゃいん' }] },
        { jp: 'マリアさんはブラジル人ですか。', vn: 'Chị Maria có phải là người Brazil không?', furigana: [{ kanji: '人', reading: 'じん' }] },
        { jp: '山田さんは銀行員ですか。', vn: 'Anh Yamada có phải là nhân viên ngân hàng không?', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '銀行員', reading: 'ぎんこういん' }] },
        { jp: 'あの方は研究者ですか。', vn: 'Vị kia có phải là nhà nghiên cứu không?', furigana: [{ kanji: '方', reading: 'かた' }, { kanji: '研究者', reading: 'けんきゅうしゃ' }] },
        { jp: 'キムさんは韓国人ですか。', vn: 'Chị Kim có phải là người Hàn Quốc không?', furigana: [{ kanji: '韓国人', reading: 'かんこくじん' }] },
        { jp: 'あなたは教師ですか。', vn: 'Bạn có phải là giáo viên không?', furigana: [{ kanji: '教師', reading: 'きょうし' }] }
      ]
    },
    {
      pattern: 'N も',
      explanation: 'Trợ từ "も" có nghĩa là "cũng". Thay thế "は" khi muốn nói ai/cái gì đó cũng tương tự.',
      example: 'ミラーさんも会社員です。(Miraa-san mo kaishain desu.) - Anh Miller cũng là nhân viên công ty.',
      examples: [
        { jp: 'ミラーさんも会社員です。', vn: 'Anh Miller cũng là nhân viên công ty.', furigana: [{ kanji: '会社員', reading: 'かいしゃいん' }] },
        { jp: '私も学生です。', vn: 'Tôi cũng là sinh viên.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '学生', reading: 'がくせい' }] },
        { jp: '田中さんも日本人です。', vn: 'Anh Tanaka cũng là người Nhật.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '日本人', reading: 'にほんじん' }] },
        { jp: '佐藤さんもIMCの社員です。', vn: 'Anh Satou cũng là nhân viên công ty IMC.', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '社員', reading: 'しゃいん' }] },
        { jp: '山田さんも先生です。', vn: 'Anh Yamada cũng là giáo viên.', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: 'キムさんも学生です。', vn: 'Chị Kim cũng là sinh viên.', furigana: [{ kanji: '学生', reading: 'がくせい' }] },
        { jp: 'マリアさんも会社員です。', vn: 'Chị Maria cũng là nhân viên công ty.', furigana: [{ kanji: '会社員', reading: 'かいしゃいん' }] },
        { jp: '私も医者です。', vn: 'Tôi cũng là bác sĩ.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: 'あの人も銀行員です。', vn: 'Người kia cũng là nhân viên ngân hàng.', furigana: [{ kanji: '人', reading: 'ひと' }, { kanji: '銀行員', reading: 'ぎんこういん' }] },
        { jp: '彼も研究者です。', vn: 'Anh ấy cũng là nhà nghiên cứu.', furigana: [{ kanji: '彼', reading: 'かれ' }, { kanji: '研究者', reading: 'けんきゅうしゃ' }] }
      ]
    },
    {
      pattern: 'N1 の N2',
      explanation: 'Trợ từ "の" dùng để kết nối 2 danh từ, thể hiện sự sở hữu hoặc thuộc tính.',
      example: '東京大学の学生です。(Toukyou daigaku no gakusei desu.) - Là sinh viên đại học Tokyo.',
      examples: [
        { jp: '東京大学の学生です。', vn: 'Là sinh viên đại học Tokyo.', furigana: [{ kanji: '東京', reading: 'とうきょう' }, { kanji: '大学', reading: 'だいがく' }, { kanji: '学生', reading: 'がくせい' }] },
        { jp: '私はIMCの社員です。', vn: 'Tôi là nhân viên công ty IMC.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '社員', reading: 'しゃいん' }] },
        { jp: '田中さんは神戸病院の医者です。', vn: 'Anh Tanaka là bác sĩ bệnh viện Kobe.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '神戸', reading: 'こうべ' }, { kanji: '病院', reading: 'びょういん' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: 'これは田中さんの本です。', vn: 'Đây là sách của anh Tanaka.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '本', reading: 'ほん' }] },
        { jp: '山田さんは日本語の先生です。', vn: 'Anh Yamada là giáo viên tiếng Nhật.', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '日本語', reading: 'にほんご' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: 'ミラーさんはパワー電気の社員です。', vn: 'Anh Miller là nhân viên công ty Power Điện khí.', furigana: [{ kanji: '電気', reading: 'でんき' }, { kanji: '社員', reading: 'しゃいん' }] },
        { jp: '私は富士大学の学生です。', vn: 'Tôi là sinh viên đại học Fuji.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '富士', reading: 'ふじ' }, { kanji: '大学', reading: 'だいがく' }, { kanji: '学生', reading: 'がくせい' }] },
        { jp: '佐藤さんはさくら大学の教師です。', vn: 'Anh Satou là giảng viên đại học Sakura.', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '大学', reading: 'だいがく' }, { kanji: '教師', reading: 'きょうし' }] },
        { jp: 'あの方は日本の方です。', vn: 'Vị kia là người Nhật.', furigana: [{ kanji: '方', reading: 'かた' }, { kanji: '日本', reading: 'にほん' }] },
        { jp: 'マリアさんはブラジルエアーの社員です。', vn: 'Chị Maria là nhân viên hãng hàng không Brazil.', furigana: [{ kanji: '社員', reading: 'しゃいん' }] }
      ]
    },
    {
      pattern: '～さん',
      explanation: 'Trong tiếng Nhật, từ「さん」được dùng ngay sau họ của người nghe để thể hiện sự kính trọng khi gọi tên người đó. Từ「さん」không dùng đối với chính bản thân người nói. Trong trường hợp đã biết tên của người nghe thì không dùng「あなた」mà dùng「さん」để gọi tên người đó.',
      example: 'あの方はミラーさんです。(Ano kata wa Miraa-san desu.) - Người kia là anh Miller.\n鈴木：ミラーさんは学生ですか。(Miraa-san wa gakusei desu ka?) - Anh có phải là sinh viên không?\nミラー：いいえ、会社員です。(Iie, kaishain desu.) - Không, tôi là nhân viên công ty.',
      examples: [
        { jp: '田中さんは会社員です。', vn: 'Anh Tanaka là nhân viên công ty.', furigana: [{ kanji: '田中', reading: 'たなか' }, { kanji: '会社員', reading: 'かいしゃいん' }] },
        { jp: '山田さんは先生です。', vn: 'Anh Yamada là giáo viên.', furigana: [{ kanji: '山田', reading: 'やまだ' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: 'ミラーさんはアメリカ人です。', vn: 'Anh Miller là người Mỹ.', furigana: [{ kanji: '人', reading: 'じん' }] },
        { jp: '佐藤さんは銀行員です。', vn: 'Anh Satou là nhân viên ngân hàng.', furigana: [{ kanji: '佐藤', reading: 'さとう' }, { kanji: '銀行員', reading: 'ぎんこういん' }] },
        { jp: 'キムさんは韓国人です。', vn: 'Chị Kim là người Hàn Quốc.', furigana: [{ kanji: '韓国人', reading: 'かんこくじん' }] },
        { jp: 'マリアさんはブラジル人です。', vn: 'Chị Maria là người Brazil.', furigana: [{ kanji: '人', reading: 'じん' }] },
        { jp: 'ワンさんは中国人です。', vn: 'Anh Vương là người Trung Quốc.', furigana: [{ kanji: '中国人', reading: 'ちゅうごくじん' }] },
        { jp: 'サントスさんはエンジニアです。', vn: 'Anh Santos là kỹ sư.', furigana: [] },
        { jp: '鈴木さんは医者です。', vn: 'Anh Suzuki là bác sĩ.', furigana: [{ kanji: '鈴木', reading: 'すずき' }, { kanji: '医者', reading: 'いしゃ' }] },
        { jp: '高橋さんは研究者です。', vn: 'Anh Takahashi là nhà nghiên cứu.', furigana: [{ kanji: '高橋', reading: 'たかはし' }, { kanji: '研究者', reading: 'けんきゅうしゃ' }] }
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
        { kanji: '初', reading: 'はじ', meaning: 'lần đầu' }
      ]
    },
    { 
      char: 'ミラー', 
      jp: 'アメリカから来ました。', 
      vn: 'Tôi đến từ Mỹ.',
      furigana: [
        { kanji: '来', reading: 'き', meaning: 'đến' }
      ]
    },
    { 
      char: 'ミラー', 
      jp: 'どうぞよろしくお願いします。', 
      vn: 'Rất mong được giúp đỡ.',
      furigana: [
        { kanji: '願', reading: 'ねが', meaning: 'mong muốn' }
      ]
    },
    { 
      char: '佐藤', 
      jp: '佐藤です。こちらこそ、よろしく。', 
      vn: 'Tôi là Satou. Tôi cũng rất mong được giúp đỡ.',
      furigana: [
        { kanji: '佐藤', reading: 'さとう', meaning: 'Satou' }
      ]
    },
    { 
      char: 'ミラー', 
      jp: '佐藤さんは会社員ですか。', 
      vn: 'Anh Satou là nhân viên công ty phải không?',
      furigana: [
        { kanji: '佐藤', reading: 'さとう', meaning: 'Satou' },
        { kanji: '会社員', reading: 'かいしゃいん', meaning: 'nhân viên công ty' }
      ]
    },
    { 
      char: '佐藤', 
      jp: 'はい、そうです。IMCの社員です。', 
      vn: 'Vâng, đúng vậy. Tôi là nhân viên công ty IMC.',
      furigana: [
        { kanji: '社員', reading: 'しゃいん', meaning: 'nhân viên' }
      ]
    },
    { 
      char: 'ミラー', 
      jp: 'そうですか。私もIMCの社員です。', 
      vn: 'Vậy à. Tôi cũng là nhân viên công ty IMC.',
      furigana: [
        { kanji: '私', reading: 'わたし', meaning: 'tôi' },
        { kanji: '社員', reading: 'しゃいん', meaning: 'nhân viên' }
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
