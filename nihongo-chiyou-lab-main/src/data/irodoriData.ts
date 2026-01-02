export interface IrodoriVocabularyItem {
  id: string;
  kana: string;
  romaji: string;
  kanji?: string;
  vietnamese: string;
  category: string;
}

export interface VocabularyItem {
  word: string;
  kanji: string;
  mean: string;
}

export interface GrammarPoint {
  pattern: string;
  explanation: string;
  example: string;
}

// Irodori Lesson Module interfaces
export interface DialogueLine {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
  image?: string;
}

export interface ModuleDialogue {
  id: string;
  situation: string;
  lines: DialogueLine[];
  image?: string;
}

export interface VocabularyFocus {
  word: string;
  meaning: string;
  image?: string;
}

export interface PhonicsExample {
  japanese: string;
  vietnamese: string;
  contrast?: string;
}

export interface PhonicsRule {
  rule: string;
  explanation: string;
  examples: PhonicsExample[];
}

export interface CultureTip {
  title: string;
  text: string;
}

export interface ModuleContent {
  introduction?: string;
  vocabulary_focus?: VocabularyFocus[];
  dialogues?: ModuleDialogue[];
  grammar_notes?: string[];
  phonics_rules?: PhonicsRule[];
  tips?: CultureTip[];
}

export interface LessonModule {
  module_id: string;
  title: string;
  objective: string;
  content: ModuleContent;
}

export interface KaiwaLine {
  char: string;
  jp: string;
  vn: string;
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
  quiz: QuizQuestion[];
}

export interface IrodoriLessonDetail {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  vocabulary: IrodoriVocabularyItem[];
  modules: LessonModule[];
  kaiwa: KaiwaLine[];
  quiz: QuizQuestion[];
}

// Irodori Lesson 1 vocabulary data
export const irodoriLesson1Vocabulary: IrodoriVocabularyItem[] = [
  { id: "L1_001", kana: "おはようございます", romaji: "Ohayoo gozaimasu", vietnamese: "Chào buổi sáng (lịch sự)", category: "greeting" },
  { id: "L1_002", kana: "おはよう", romaji: "Ohayoo", vietnamese: "Chào buổi sáng (thân mật)", category: "greeting" },
  { id: "L1_003", kana: "こんにちは", romaji: "Konnichiwa", vietnamese: "Xin chào / Chào buổi trưa", category: "greeting" },
  { id: "L1_004", kana: "こんばんは", romaji: "Konbanwa", vietnamese: "Chào buổi tối", category: "greeting" },
  { id: "L1_005", kana: "じゃあ、また", romaji: "Jaa, mata", vietnamese: "Hẹn gặp lại / Bye nhé", category: "parting" },
  { id: "L1_006", kana: "おやすみなさい", romaji: "Oyasuminasai", vietnamese: "Chúc ngủ ngon (lịch sự)", category: "parting" },
  { id: "L1_007", kana: "おやすみ", romaji: "Oyasumi", vietnamese: "Chúc ngủ ngon (thân mật)", category: "parting" },
  { id: "L1_008", kana: "失礼します", romaji: "Shitsureeshimasu", kanji: "失礼", vietnamese: "Tôi xin phép (dùng khi vào phòng, cúp máy, hoặc chia tay lịch sự)", category: "parting" },
  { id: "L1_009", kana: "お先に失礼します", romaji: "Osaki ni shitsureeshimasu", kanji: "先・失礼", vietnamese: "Tôi xin phép về trước", category: "parting" },
  { id: "L1_010", kana: "お疲れ様でした", romaji: "Otsukaresama deshita", kanji: "疲", vietnamese: "Cảm ơn anh/chị đã vất vả (chào khi xong việc)", category: "parting" },
  { id: "L1_011", kana: "お疲れ様", romaji: "Otsukaresama", kanji: "疲", vietnamese: "Cảm ơn đã vất vả (chào đồng nghiệp)", category: "parting" },
  { id: "L1_012", kana: "ありがとうございます", romaji: "Arigatoo gozaimasu", vietnamese: "Xin cảm ơn (lịch sự)", category: "expression" },
  { id: "L1_013", kana: "ありがとう", romaji: "Arigatoo", vietnamese: "Cảm ơn (thân mật)", category: "expression" },
  { id: "L1_014", kana: "どうも", romaji: "Doomo", vietnamese: "Cảm ơn / Xin chào (ngắn gọn)", category: "expression" },
  { id: "L1_015", kana: "すみません", romaji: "Sumimasen", vietnamese: "Xin lỗi / Cảm ơn (khi làm phiền ai đó)", category: "expression" },
  { id: "L1_016", kana: "ごめん", romaji: "Gomen", vietnamese: "Xin lỗi (thân mật)", category: "expression" },
  { id: "L1_017", kana: "いいえ", romaji: "Iie", vietnamese: "Không / Không có chi", category: "expression" },
  { id: "L1_018", kana: "どうぞ", romaji: "Doozo", vietnamese: "Xin mời", category: "expression" },
  { id: "L1_019", kana: "痛い", romaji: "Itai", kanji: "痛", vietnamese: "Đau quá", category: "expression" },
  { id: "L1_020", kana: "わあ", romaji: "Waa", vietnamese: "Oa (biểu thị sự ngạc nhiên)", category: "expression" },
  { id: "L1_021", kana: "これ", romaji: "Kore", vietnamese: "Cái này", category: "noun" },
  { id: "L1_022", kana: "あめ", romaji: "Ame", vietnamese: "Kẹo", category: "noun" },
  { id: "L1_023", kana: "プレゼント", romaji: "Purezento", vietnamese: "Quà tặng", category: "noun" },
  { id: "L1_024", kana: "落としましたよ", romaji: "Otoshimashita yo", kanji: "落", vietnamese: "Bạn đánh rơi đồ này", category: "phrase" },
  { id: "L1_025", kana: "おめでとうございます", romaji: "Omedetoo gozaimasu", vietnamese: "Chúc mừng", category: "expression" },
  { id: "L1_026", kana: "わかりました", romaji: "Wakarimashita", vietnamese: "Tôi đã hiểu / Rõ rồi", category: "expression" },
  { id: "L1_027", kana: "はーい", romaji: "Haai", vietnamese: "Vâng / Ừ (trả lời vui vẻ)", category: "expression" },
  { id: "L1_028", kana: "おばあさん", romaji: "Obaasan", vietnamese: "Bà / Bà cụ", category: "noun" },
  { id: "L1_029", kana: "おじいさん", romaji: "Ojiisan", vietnamese: "Ông / Ông cụ", category: "noun" },
  { id: "L1_030", kana: "すうじ", romaji: "Suuji", vietnamese: "Chữ số", category: "noun" },
  { id: "L1_031", kana: "とけい", romaji: "Tokee", vietnamese: "Đồng hồ", category: "noun" },
  { id: "L1_032", kana: "ひこうき", romaji: "Hikooki", vietnamese: "Máy bay", category: "noun" },
  { id: "L1_033", kana: "きっぷ", romaji: "Kippu", vietnamese: "Vé", category: "noun" },
  { id: "L1_034", kana: "あさって", romaji: "Asatte", vietnamese: "Ngày kia (ngày mốt)", category: "noun" },
  { id: "L1_035", kana: "ざっし", romaji: "Zasshi", vietnamese: "Tạp chí", category: "noun" },
];

export interface LessonSummary {
  id: number;
  title: string;
  description: string;
}

// Nhập môn - 18 bài
export const lessonsNhapMon: LessonSummary[] = [
  { id: 1, title: "Chào hỏi", description: "Học cách chào hỏi cơ bản" },
  { id: 2, title: "Tự giới thiệu", description: "Giới thiệu bản thân" },
  { id: 3, title: "Số đếm", description: "Học cách đếm số" },
  { id: 4, title: "Thời gian", description: "Nói về thời gian" },
  { id: 5, title: "Ngày tháng", description: "Ngày tháng năm" },
  { id: 6, title: "Mua sắm", description: "Hội thoại mua sắm" },
  { id: 7, title: "Ẩm thực", description: "Đặt món ăn" },
  { id: 8, title: "Đi lại", description: "Phương tiện giao thông" },
  { id: 9, title: "Nơi chốn", description: "Hỏi đường" },
  { id: 10, title: "Gia đình", description: "Nói về gia đình" },
  { id: 11, title: "Sở thích", description: "Chia sẻ sở thích" },
  { id: 12, title: "Thời tiết", description: "Nói về thời tiết" },
  { id: 13, title: "Sức khỏe", description: "Hội thoại y tế" },
  { id: 14, title: "Công việc", description: "Nói về nghề nghiệp" },
  { id: 15, title: "Kế hoạch", description: "Lên kế hoạch" },
  { id: 16, title: "Lời mời", description: "Mời và từ chối" },
  { id: 17, title: "Điện thoại", description: "Gọi điện thoại" },
  { id: 18, title: "Tổng ôn", description: "Ôn tập Nhập môn" },
];

// Sơ cấp 1 - 18 bài
export const lessonsSoCap1: LessonSummary[] = [
  { id: 1, title: "Cuộc sống hàng ngày", description: "Sinh hoạt thường nhật" },
  { id: 2, title: "Nhà ở", description: "Mô tả nơi ở" },
  { id: 3, title: "Mua sắm nâng cao", description: "So sánh sản phẩm" },
  { id: 4, title: "Nhà hàng", description: "Đặt bàn và gọi món" },
  { id: 5, title: "Du lịch", description: "Lên kế hoạch du lịch" },
  { id: 6, title: "Giao thông công cộng", description: "Sử dụng tàu xe" },
  { id: 7, title: "Ngân hàng", description: "Giao dịch ngân hàng" },
  { id: 8, title: "Bưu điện", description: "Gửi bưu phẩm" },
  { id: 9, title: "Bệnh viện", description: "Khám bệnh" },
  { id: 10, title: "Thuê nhà", description: "Tìm và thuê nhà" },
  { id: 11, title: "Quan hệ đồng nghiệp", description: "Giao tiếp công sở" },
  { id: 12, title: "Họp hành", description: "Tham gia cuộc họp" },
  { id: 13, title: "Báo cáo", description: "Báo cáo công việc" },
  { id: 14, title: "Xin nghỉ phép", description: "Thủ tục nghỉ phép" },
  { id: 15, title: "Lễ hội", description: "Văn hóa lễ hội" },
  { id: 16, title: "Quà tặng", description: "Trao đổi quà" },
  { id: 17, title: "Phỏng vấn", description: "Phỏng vấn xin việc" },
  { id: 18, title: "Tổng ôn", description: "Ôn tập Sơ cấp 1" },
];

// Sơ cấp 2 - 18 bài
export const lessonsSoCap2: LessonSummary[] = [
  { id: 1, title: "Tin tức", description: "Đọc hiểu tin tức" },
  { id: 2, title: "Ý kiến", description: "Đưa ra quan điểm" },
  { id: 3, title: "Tranh luận", description: "Thảo luận vấn đề" },
  { id: 4, title: "Thuyết trình", description: "Trình bày ý tưởng" },
  { id: 5, title: "Email công việc", description: "Viết email chuyên nghiệp" },
  { id: 6, title: "Đàm phán", description: "Kỹ năng đàm phán" },
  { id: 7, title: "Khiếu nại", description: "Giải quyết vấn đề" },
  { id: 8, title: "Hướng dẫn", description: "Hướng dẫn chi tiết" },
  { id: 9, title: "Phản hồi", description: "Đưa ra nhận xét" },
  { id: 10, title: "Xã giao", description: "Giao tiếp xã hội" },
  { id: 11, title: "Văn hóa doanh nghiệp", description: "Văn hóa công ty Nhật" },
  { id: 12, title: "Sự kiện", description: "Tổ chức sự kiện" },
  { id: 13, title: "Môi trường", description: "Vấn đề môi trường" },
  { id: 14, title: "Công nghệ", description: "Công nghệ hiện đại" },
  { id: 15, title: "Kinh tế", description: "Tin tức kinh tế" },
  { id: 16, title: "Giáo dục", description: "Hệ thống giáo dục" },
  { id: 17, title: "Tương lai", description: "Kế hoạch tương lai" },
  { id: 18, title: "Tổng ôn", description: "Ôn tập Sơ cấp 2" },
];

// Function to get lesson data by level and ID
export const getIrodoriLessonData = (level: string, lessonNumber: number): IrodoriLessonDetail | null => {
  let lessons: LessonSummary[];
  let levelName: string;

  switch (level) {
    case 'nhapmon':
      lessons = lessonsNhapMon;
      levelName = 'Nhập môn';
      break;
    case 'socap1':
      lessons = lessonsSoCap1;
      levelName = 'Sơ cấp 1';
      break;
    case 'socap2':
      lessons = lessonsSoCap2;
      levelName = 'Sơ cấp 2';
      break;
    default:
      return null;
  }

  const lessonSummary = lessons.find(l => l.id === lessonNumber);
  if (!lessonSummary) return null;

  // Return real data for nhapmon lesson 1
  if (level === 'nhapmon' && lessonNumber === 1) {
    return {
      id: lessonSummary.id,
      title: "Hajimete no Nihongo (Tiếng Nhật đầu tiên)",
      subtitle: "Ohayoo gozaimasu (Chào buổi sáng)",
      description: "Học cách chào hỏi, cảm ơn, xin lỗi và làm quen với phát âm tiếng Nhật cơ bản.",
      vocabulary: irodoriLesson1Vocabulary,
      modules: [
        {
          module_id: "1",
          title: "Konnichiwa - Chào hỏi khi gặp mặt",
          objective: "Có thể chào hỏi khi gặp người khác.",
          content: {
            introduction: "Cách chào hỏi thay đổi tùy theo thời gian trong ngày và đối tượng giao tiếp.",
            vocabulary_focus: [
              { word: "おはよう", meaning: "Chào buổi sáng (thân mật)", image: "/placeholder.svg" },
              { word: "おはようございます", meaning: "Chào buổi sáng (lịch sự)", image: "/placeholder.svg" },
              { word: "こんにちは", meaning: "Chào buổi trưa/Xin chào (ban ngày)", image: "/placeholder.svg" },
              { word: "こんばんは", meaning: "Chào buổi tối", image: "/placeholder.svg" }
            ],
            dialogues: [
              {
                id: "D1",
                situation: "Gặp nhau ban ngày",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "こんにちは。", romaji: "Konnichiwa.", vietnamese: "Xin chào." },
                  { speaker: "B", japanese: "ああ、こんにちは。", romaji: "Aa, Konnichiwa.", vietnamese: "A, xin chào." }
                ]
              },
              {
                id: "D2",
                situation: "Gặp nhau buổi sáng (Lịch sự vs Thân mật)",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "おはようございます。", romaji: "Ohayoo gozaimasu.", vietnamese: "Chào buổi sáng ạ." },
                  { speaker: "B", japanese: "おはようございます。", romaji: "Ohayoo gozaimasu.", vietnamese: "Chào buổi sáng." },
                  { speaker: "C", japanese: "おはよう。", romaji: "Ohayoo.", vietnamese: "Chào buổi sáng (ngắn gọn)." },
                  { speaker: "D", japanese: "おはよう。", romaji: "Ohayoo.", vietnamese: "Chào nhé." }
                ]
              }
            ],
            grammar_notes: [
              "「おはようございます」(Ohayoo gozaimasu) lịch sự hơn 「おはよう」(Ohayoo)."
            ]
          }
        },
        {
          module_id: "2",
          title: "Osaki ni shitsureeshimasu - Chào khi chia tay",
          objective: "Có thể chào tạm biệt khi chia tay người khác.",
          content: {
            introduction: "Lời chào tạm biệt khác nhau tùy thuộc vào quan hệ thân sơ và tình huống (bạn bè, công việc).",
            vocabulary_focus: [
              { word: "じゃあ、また", meaning: "Hẹn gặp lại nhé (bạn bè)", image: "/placeholder.svg" },
              { word: "お先に失礼します", meaning: "Tôi xin phép về trước (công sở)", image: "/placeholder.svg" },
              { word: "お疲れ様でした", meaning: "Cảm ơn đã vất vả (đáp lại khi đồng nghiệp về)", image: "/placeholder.svg" },
              { word: "おやすみなさい", meaning: "Chúc ngủ ngon", image: "/placeholder.svg" }
            ],
            dialogues: [
              {
                id: "D3",
                situation: "Chia tay bạn bè",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "じゃあ、また。", romaji: "Jaa, mata.", vietnamese: "Vậy, gặp lại sau nhé." },
                  { speaker: "B", japanese: "じゃあ、また。", romaji: "Jaa, mata.", vietnamese: "Ừ, gặp lại sau." }
                ]
              },
              {
                id: "D4",
                situation: "Tại nơi làm việc",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "Nhân viên", japanese: "お先に失礼します。", romaji: "Osaki ni shitsureeshimasu.", vietnamese: "Tôi xin phép về trước ạ." },
                  { speaker: "Đồng nghiệp", japanese: "お疲れ様でした。", romaji: "Otsukaresama deshita.", vietnamese: "Anh/chị đã vất vả rồi." }
                ]
              }
            ]
          }
        },
        {
          module_id: "3",
          title: "Arigatoo gozaimasu - Cảm ơn và Xin lỗi",
          objective: "Có thể nói cảm ơn, xin lỗi với người khác.",
          content: {
            introduction: "Cách nói cảm ơn và xin lỗi trong các tình huống như nhận quà, làm rơi đồ, hoặc va vào ai đó.",
            vocabulary_focus: [
              { word: "ありがとうございます", meaning: "Xin cảm ơn (lịch sự)", image: "/placeholder.svg" },
              { word: "すみません", meaning: "Xin lỗi / Cảm ơn (khi gây phiền)", image: "/placeholder.svg" },
              { word: "ごめん", meaning: "Xin lỗi (thân mật)", image: "/placeholder.svg" },
              { word: "どうも", meaning: "Cảm ơn (ngắn gọn)", image: "/placeholder.svg" }
            ],
            dialogues: [
              {
                id: "D5",
                situation: "Được người khác nhặt đồ giúp",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "これ、落としましたよ。", romaji: "Kore, otoshimashita yo.", vietnamese: "Bạn đánh rơi cái này nè." },
                  { speaker: "B", japanese: "あ、すみません。", romaji: "A, sumimasen.", vietnamese: "A, xin lỗi (và cảm ơn)." }
                ]
              },
              {
                id: "D6",
                situation: "Nhường ghế trên tàu",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "どうぞ。", romaji: "Doozo.", vietnamese: "Xin mời ngồi." },
                  { speaker: "B", japanese: "あ、すみません。ありがとうございます。", romaji: "A, sumimasen. Arigatoo gozaimasu.", vietnamese: "A, ngại quá. Xin cảm ơn anh/chị." }
                ]
              },
              {
                id: "D7",
                situation: "Va phải người khác",
                image: "/placeholder.svg",
                lines: [
                  { speaker: "A", japanese: "痛い！", romaji: "Itai!", vietnamese: "Đau quá!" },
                  { speaker: "B", japanese: "あ、すみません。", romaji: "A, sumimasen.", vietnamese: "A, tôi xin lỗi." }
                ]
              }
            ]
          }
        },
        {
          module_id: "4",
          title: "Phát âm và Chữ viết",
          objective: "Chú ý âm kéo dài (Trường âm) và âm ngắt.",
          content: {
            phonics_rules: [
              {
                rule: "Trường âm (Kéo dài âm)",
                explanation: "Nghĩa của từ thay đổi nếu không kéo dài âm.",
                examples: [
                  { japanese: "おばあさん (Obaasan)", vietnamese: "Bà", contrast: "Khác với Ojisan (Chú/Bác)" },
                  { japanese: "おじいさん (Ojiisan)", vietnamese: "Ông", contrast: "Khác với Obasan (Cô/Dì)" },
                  { japanese: "こうこう (Kookoo)", vietnamese: "Trường cấp 3", contrast: "Kéo dài âm 'o'" }
                ]
              },
              {
                rule: "Âm ngắt (Xúc âm - tsu nhỏ)",
                explanation: "Ngắt nhịp một chút khi phát âm.",
                examples: [
                  { japanese: "きっぷ (Kippu)", vietnamese: "Vé" },
                  { japanese: "ざっし (Zasshi)", vietnamese: "Tạp chí" }
                ]
              }
            ]
          }
        },
        {
          module_id: "5",
          title: "Góc Văn hóa (Culture Tips)",
          objective: "Hiểu về văn hóa giao tiếp của người Nhật.",
          content: {
            tips: [
              {
                title: "Cử chỉ chào hỏi (Ojigi)",
                text: "Ở Nhật Bản, người ta gập người, cúi đầu khi chào hỏi gọi là Ojigi. Góc gập người càng lớn thì độ tôn kính càng cao. Ít khi bắt tay hay ôm hôn."
              },
              {
                title: "Lời chào Sayoonara",
                text: "Sayoonara (Tạm biệt) thường ít dùng trong đời sống hàng ngày vì nó mang sắc thái chia tay lâu dài. Thay vào đó, người ta dùng 'Jaa, mata' hoặc 'Shitsureeshimasu'."
              },
              {
                title: "Sử dụng Sumimasen",
                text: "Sumimasen dùng để xin lỗi, nhưng cũng dùng để cảm ơn khi ai đó làm giúp mình việc gì (mang hàm ý 'xin lỗi vì đã làm phiền bạn giúp tôi')."
              }
            ]
          }
        }
      ],
      kaiwa: [
        { char: 'A', jp: 'おはようございます。', vn: 'Chào buổi sáng.' },
        { char: 'B', jp: 'おはようございます。', vn: 'Chào buổi sáng.' },
        { char: 'A', jp: 'お疲れ様でした。', vn: 'Cảm ơn đã vất vả.' },
        { char: 'B', jp: 'お先に失礼します。', vn: 'Tôi xin phép về trước.' },
      ],
      quiz: [
        {
          id: 1,
          question: '"Chào buổi sáng" (lịch sự) trong tiếng Nhật là gì?',
          options: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい"],
          correctAnswer: "おはようございます",
          explanation: "おはようございます là lời chào buổi sáng lịch sự."
        }
      ]
    };
  }

  // Return mock data for other lessons
  return {
    id: lessonSummary.id,
    title: lessonSummary.title,
    vocabulary: [],
    modules: [
      {
        module_id: "1",
        title: "Module mẫu",
        objective: `Mục tiêu bài học ${levelName} - Bài ${lessonNumber}`,
        content: {
          introduction: "Nội dung giới thiệu mẫu.",
          vocabulary_focus: [
            { word: "サンプル", meaning: "Mẫu" }
          ]
        }
      }
    ],
    kaiwa: [
      { char: 'A', jp: 'サンプル会話です。', vn: 'Đây là hội thoại mẫu.' },
      { char: 'B', jp: 'そうですね。', vn: 'Đúng vậy nhỉ.' },
    ],
    quiz: [
      {
        id: 1,
        question: `Đây là câu hỏi mẫu cho ${levelName} - Bài ${lessonNumber}.`,
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
        explanation: "Giải thích đáp án mẫu."
      }
    ]
  };
};
