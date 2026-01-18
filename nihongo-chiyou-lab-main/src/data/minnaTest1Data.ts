export interface Question {
  id: number;
  section?: string; // e.g. "Mondai 1"
  text_context?: string; // For reading comprehension or context
  question: string;
  options: string[];
  answer: string;
  explain: string;
}

export const TEST_1: Question[] = [
  // Mondai 1: Reading (12 questions)
  {
    id: 1,
    "section": "Mondai 1",
    "question": "私の[先生]です。",
    "options": ["せんせ", "せんせい", "せせい", "せんぜい"],
    "answer": "せんせい",
    "explain": "✅ [先生|せんせい|Giáo viên/Tiên sinh] chouon (trường âm) 'ei' đọc là 'e-e'.\n❌ [せんせ||thiếu chouon], [せんぜい||sai âm đục]."
  },
  {
    id: 2,
    "section": "Mondai 1",
    "question": "あの[学生]はだれですか。",
    "options": ["がくせい", "がくせ", "かくせい", "かせい"],
    "answer": "がくせい",
    "explain": "✅ [学生|がくせい|Học sinh/Sinh viên].\n❌ [がくせ||thiếu chouon], [かくせい||sai âm trong], [かせい||thiếu 'ku']."
  },
  {
    id: 3,
    "section": "Mondai 1",
    "question": "[病院]へ行きます。",
    "options": ["びょういん", "びよりん", "びょいん", "ひょういん"],
    "answer": "びょういん",
    "explain": "✅ [病院|びょういん|Bệnh viện] - Chú ý trường âm 'ou'.\n❌ [びょいん||thiếu trường âm], [ひょういん||sai handakuon 'hi' thay vì 'bi']."
  },
  {
    id: 4,
    "section": "Mondai 1",
    "question": "[電気]をつけます。",
    "options": ["でんき", "てんき", "でんち", "てんち"],
    "answer": "でんき",
    "explain": "✅ [電気|でんき|Điện/Đèn điện].\n❌ [てんき||Thời tiết - Tenki], [でんち||Pin - Denchi]."
  },
  {
    id: 5,
    "section": "Mondai 1",
    "question": "[大学]で勉強します。",
    "options": ["だいがく", "たいがく", "おおがく", "だいかく"],
    "answer": "だいがく",
    "explain": "✅ [大学|だいがく|Đại học].\n❌ [たいがく||sai âm 'tai'], [おおがく||doc Kunyomi sai], [だいかく||sai 'kaku']."
  },
  {
    id: 6,
    "section": "Mondai 1",
    "question": "わたしは[韓国]人です。",
    "options": ["かんこく", "ちゅうごく", "かんごく", "かっこく"],
    "answer": "かんこく",
    "explain": "✅ [韓国|かんこく|Hàn Quốc].\n❌ [ちゅうごく||Trung Quốc], [かんごく||Nhà tù], [かっこく||sai âm ngắt]."
  },
  {
    id: 7,
    "section": "Mondai 1",
    "question": "[中国]から来ました。",
    "options": ["ちゅうごく", "ちゅうこく", "じゅうごく", "ちゅごく"],
    "answer": "ちゅうごく",
    "explain": "✅ [中国|ちゅうごく|Trung Quốc].\n❌ [ちゅうこく||thiếu ten-ten], [じゅうごく||sai âm đầu], [ちゅごく||thiếu trường âm]."
  },
  {
    id: 8,
    "section": "Mondai 1",
    "question": "[研究者]になりたいです。",
    "options": ["けんきゅうしゃ", "けんきゅしゃ", "けきゅうしゃ", "げんきゅうしゃ"],
    "answer": "けんきゅうしゃ",
    "explain": "✅ [研究者|けんきゅうしゃ|Nhà nghiên cứu].\n❌ [けんきゅしゃ||thiếu trường âm 'yuu'], [げんきゅうしゃ||sai âm 'gen']."
  },
  {
    id: 9,
    "section": "Mondai 1",
    "question": "[誰]ですか。",
    "options": ["だれ", "どれ", "だら", "どなた"],
    "answer": "だれ",
    "explain": "✅ [誰|だれ|Ai - thông thường].\n❌ [どなた||Vị nào - lịch sự], [どれ||Cái nào]."
  },
  {
    id: 10,
    "section": "Mondai 1",
    "question": "[医者]です。",
    "options": ["いしゃ", "いさ", "いしや", "いっしゃ"],
    "answer": "いしゃ",
    "explain": "✅ [医者|いしゃ|Bác sĩ].\n❌ [いしや||đọc tách rời], [いっしゃ||âm ngắt sai]."
  },
  {
    id: 11,
    "section": "Mondai 1",
    "question": "[傘]を借りる。",
    "options": ["かさ", "かざ", "から", "はん"],
    "answer": "かさ",
    "explain": "✅ [傘|かさ|Cái ô].\n❌ [かざ||sai biến âm], [から||từ/trống rỗng]."
  },
  {
    id: 12,
    "section": "Mondai 1",
    "question": "[名前]はなんですか。",
    "options": ["なまえ", "めいぜん", "なまい", "なま"],
    "answer": "なまえ",
    "explain": "✅ [名前|なまえ|Tên].\n❌ [めいぜん||đọc theo Onyomi sai ngữ cảnh], [なま||Tươi/Sống]."
  },
  // Mondai 2: Kanji Writing (13 questions)
  {
    id: 13,
    section: "Mondai 2",
    question: "[ほん]を読みます。",
    options: ["本", "木", "休", "体"],
    answer: "本",
    explain: "✅ [本|ほん|Sách/Gốc].\n❌ [木|き|Cây], [休|やす|Nghỉ], [体|からだ|Cơ thể]."
  },
  {
    id: 14,
    section: "Mondai 2",
    question: "[じしょ]を使います。",
    options: ["辞書", "字書", "辞初", "図書"],
    answer: "辞書",
    explain: "✅ [辞書|じしょ|Từ điển].\n❌ [字書||Sai Kanji 'Tự'], [図書|としょ|Đồ thư - Sách vở]."
  },
  {
    id: 15,
    section: "Mondai 2",
    question: "[ざっし]を買いました。",
    options: ["雑誌", "雑紙", "雑詞", "残誌"],
    answer: "雑誌",
    explain: "✅ [雑誌|ざっし|Tạp chí].\n❌ [雑紙||Sai chữ 'Chỉ' - giấy], [雑詞||Sai chữ 'Từ' - ngôn từ]."
  },
  {
    id: 16,
    section: "Mondai 2",
    question: "[しんぶん]。",
    options: ["新聞", "新分", "親聞", "真聞"],
    answer: "新聞",
    explain: "✅ [新聞|しんぶん|Báo].\n❌ [新分||Sai chữ 'Phân'], [親聞||Sai chữ 'Thân'], [真聞||Sai chữ 'Chân']."
  },
  {
    id: 17,
    section: "Mondai 2",
    question: "[てちょう]。",
    options: ["手帳", "手長", "手張", "手朝"],
    answer: "手帳",
    explain: "✅ [手帳|てちょう|Sổ tay].\n❌ [手長|てなが|Tay dài], [手朝||Sai chữ 'Triều'], [手張||Sai chữ 'Trương']."
  },
  {
    id: 18,
    section: "Mondai 2",
    question: "[めいし]。",
    options: ["名刺", "名詞", "名氏", "明刺"],
    answer: "名刺",
    explain: "✅ [名刺|めいし|Danh thiếp].\n❌ [名詞|めいし|Danh từ - ngữ pháp], [名氏||Sai chữ 'Thị'], [明刺||Sai chữ 'Minh']."
  },
  {
    id: 19,
    section: "Mondai 2",
    question: "[かーど]。",
    options: ["カード", "カド", "ガド", "カート"],
    answer: "カード",
    explain: "✅ [カード||Card/Thẻ].\n❌ [カド||Góc - Kado], [カート||Xe đẩy - Cart]."
  },
  {
    id: 20,
    section: "Mondai 2",
    question: "[えんぴつ]。",
    options: ["鉛筆", "延筆", "円筆", "遠筆"],
    answer: "鉛筆",
    explain: "✅ [鉛筆|えんぴつ|Bút chì].\n❌ [円筆||Sai chữ 'Viên' - tiền yên], [遠筆||Sai chữ 'Viễn' - xa]."
  },
  {
    id: 21,
    section: "Mondai 2",
    question: "[ぼーるぺん]。",
    options: ["ボールペン", "ボルペン", "ポールペン", "ボールパン"],
    answer: "ボールペン",
    explain: "✅ [ボールペン||Bút bi].\n❌ [ポールペン||Paul pen?], [ボールパン||Bánh mì bóng à?]."
  },
  {
    id: 22,
    section: "Mondai 2",
    question: "[かぎ]。",
    options: ["鍵", "金", "銀", "銅"],
    answer: "鍵",
    explain: "✅ [鍵|かぎ|Chìa khóa].\n❌ [金|きん|Vàng], [銀|ぎん|Bạc], [銅|どうぞ|Đồng]."
  },
  {
    id: 23,
    section: "Mondai 2",
    question: "[とけい]。",
    options: ["時計", "図計", "特急", "特計"],
    answer: "時計",
    explain: "✅ [時計|とけい|Đồng hồ].\n❌ [特急|とっきゅう|Tàu tốc hành], [図計||Sai Kanji]."
  },
  {
    id: 24,
    section: "Mondai 2",
    question: "[かばん]。",
    options: ["鞄", "革", "靴", "袋"],
    answer: "鞄",
    explain: "✅ [鞄|かばん|Cặp/Túi sách].\n❌ [革|かわ|Da], [靴|くつ|Giày], [袋|ふくろ|Túi/Bao]."
  },
  {
    id: 25,
    section: "Mondai 2",
    question: "[てーぷれこーだー]。",
    options: ["テープレコーダー", "テプレコダ", "テープレコ", "デープ"],
    answer: "テープレコーダー",
    explain: "✅ [テープレコーダー||Máy ghi âm].\n❌ Katakana dài phải chú ý trường âm 'ー'."
  },
  // Mondai 3: Context (10 questions)
  {
    id: 26,
    section: "Mondai 3",
    question: "これは　（　　）ですか。 ...本です。",
    options: ["なん", "なに", "だれ", "どれ"],
    answer: "なん",
    explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng khi đứng độc lập hoặc trước trợ từ wo/ga], [だれ||Ai], [どれ||Cái nào]."
  },
  {
    id: 27,
    section: "Mondai 3",
    question: "（　　）本は　わたしのです。",
    options: ["この", "これ", "ここ", "こちら"],
    answer: "この",
    explain: "✅ [この] + Danh từ (Cuốn sách này...).\n❌ [これ||Cái này - Đại từ], [ここ||Chỗ này], [こちら||Phía này]."
  },
  {
    id: 28,
    section: "Mondai 3",
    question: "それは　（　　）の　かさですか。",
    options: ["だれ", "なん", "どこ", "どれ"],
    answer: "だれ",
    explain: "✅ [誰|だれ|Ai] -> Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [どれ||Cái nào]."
  },
  {
    id: 29,
    section: "Mondai 3",
    question: "この　とけいは　（　　）の　ですか。",
    options: ["わたし", "わたしの", "あなた", "だれ"],
    answer: "わたし",
    explain: "✅ [私|わたし|Tôi] -> Watashi no (Của tôi).\n❌ [わたしの||Đã có 'no' sau ngoặc nên thành 'watashi no no' -> sai], [あなた||Bạn], [だれ||Ai]."
  },
  {
    id: 30,
    section: "Mondai 3",
    question: "（　　）に　ちがいます。",
    options: ["そう", "いいえ", "はい", "あ"],
    answer: "いいえ",
    explain: "✅ [いいえ||Không] -> Iie, chigaimasu (Không, nhầm rồi/không phải).\n❌ [そう||Đúng vậy], [はい||Vâng], [あ||A!]."
  },
  {
    id: 31,
    section: "Mondai 3",
    question: "これから　（　　）なります。",
    options: ["おせわに", "おせわ", "せわに", "せわ"],
    answer: "おせわに",
    explain: "✅ [お世話|せわ]に (Được giúp đỡ) -> Cụm từ cố định: Osewa ni narimasu.\n❌ Thiếu trợ từ 'ni' hoặc tiền tố 'o'."
  },
  {
    id: 32,
    section: "Mondai 3",
    question: "こちらは　（　　）さんです。",
    options: ["ミラー", "ミラーの", "ミラーに", "ミラーと"],
    answer: "ミラー",
    explain: "✅ Miller-san (Anh Miller).\n❌ Không cần trợ từ ở đây."
  },
  {
    id: 33,
    section: "Mondai 3",
    question: "（　　）から　来ました。",
    options: ["アメリカ", "アメリカに", "アメリカへ", "アメリカと"],
    answer: "アメリカ",
    explain: "✅ [アメリカ||Nước Mỹ] -> Đến từ Mỹ.\n❌ 'Kara' đi trực tiếp sau danh từ chỉ địa điểm, không cần trợ từ khác chen vào."
  },
  {
    id: 34,
    section: "Mondai 3",
    question: "（　　）は　なんですか。 ...45歳（さい）です。",
    options: ["おとし", "とし", "なんさい", "おいくつ"],
    answer: "おいくつ",
    explain: "✅ [おいくつ||Bao nhiêu tuổi - lịch sự].\n⚠️ [なんさい||Hỏi tuổi thông thường - ít lịch sự hơn], [おとし||Tuổi tác]."
  },
  {
    id: 35,
    section: "Mondai 3",
    question: "（　　）は　エンジニアです。",
    options: ["ミラーさん", "ミラー", "ミラーさま", "ミラーくん"],
    answer: "ミラーさん",
    explain: "✅ Miller-san (Anh Miller) - gọi người khác phải thêm san.\n❌ [ミラー||Gọi trống không - thất lễ], [ミラーさま||Quá trang trọng], [ミラーくん||Dùng cho nam ít tuổi hơn/ngang hàng]."
  },

  // Mondai 1 continued: Reading (23 more questions - ids 36-58)
  {
    id: 36,
    section: "Mondai 1",
    question: "[会社]員です。",
    options: ["かいしゃ", "がいしゃ", "かいさ", "かいしや"],
    answer: "かいしゃ",
    explain: "✅ [会社|かいしゃ|Công ty].\n❌ [がいしゃ||sai tenten], [かいさ||thiếu sha], [かいしや||đọc tách rời]."
  },
  {
    id: 37,
    section: "Mondai 1",
    question: "[学校]で勉強します。",
    options: ["がっこう", "がこう", "かっこう", "がくこう"],
    answer: "がっこう",
    explain: "✅ [学校|がっこう|Trường học].\n❌ [がこう||thiếu âm ngắt], [かっこう||Kakkou - Con chim cu], [がくこう||đọc riêng từng chữ]."
  },
  {
    id: 38,
    section: "Mondai 1",
    question: "日本[語]を勉強します。",
    options: ["ご", "こ", "ぞ", "しゃ"],
    answer: "ご",
    explain: "✅ [語|ご|Ngữ/Tiếng].\n❌ [こ||Go/Ko - Tử], [ぞ||sai âm đục], [しゃ||sai âm]."
  },
  {
    id: 39,
    section: "Mondai 1",
    question: "[何]ですか。",
    options: ["なん", "なに", "かん", "が"],
    answer: "なん",
    explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng trước を/が], [かん||sai âm], [が||sai]."
  },
  {
    id: 40,
    section: "Mondai 1",
    question: "[誰]のですか。",
    options: ["だれ", "だい", "たれ", "どなた"],
    answer: "だれ",
    explain: "✅ [誰|だれ|Ai].\n❌ [どなた||Lịch sự hơn - Vị nào], [だい||sai], [たれ||sai âm đầu]."
  },
  {
    id: 41,
    section: "Mondai 1",
    question: "[本]を読みます。",
    options: ["ほん", "ぼん", "ぽん", "もと"],
    answer: "ほん",
    explain: "✅ [本|ほん|Sách].\n❌ [ぼん/ぽん||sai biến âm], [もと||Căn bản - âm Kunyomi]."
  },
  {
    id: 42,
    section: "Mondai 1",
    question: "[友達]と話します。",
    options: ["ともだち", "ゆうたつ", "ともたち", "とうだち"],
    answer: "ともだち",
    explain: "✅ [友達|ともだち|Bạn bè].\n❌ [ゆうたつ||đọc theo âm On], [ともたち||sai âm đục], [とうだち||sai trường âm]."
  },
  {
    id: 43,
    section: "Mondai 1",
    question: "[自動車]を運転します。",
    options: ["じどうしゃ", "じとうしゃ", "しどうしゃ", "じどしゃ"],
    answer: "じどうしゃ",
    explain: "✅ [自動車|じどうしゃ|Ô tô].\n❌ [じとうしゃ||thiếu đô], [しどうしゃ||sai âm ji/shi], [じどしゃ||thiếu trường âm]."
  },
  {
    id: 44,
    section: "Mondai 1",
    question: "[自転車]に乗ります。",
    options: ["じてんしゃ", "じでんしゃ", "してんしゃ", "じてしゃ"],
    answer: "じてんしゃ",
    explain: "✅ [自転車|じてんしゃ|Xe đạp].\n❌ [じでんしゃ||sai âm ten], [してんしゃ||sai âm ji/shi], [じてしゃ||thiếu ten]."
  },
  {
    id: 45,
    section: "Mondai 1",
    question: "[何歳]ですか。",
    options: ["なんさい", "なにさい", "なんせい", "なさい"],
    answer: "なんさい",
    explain: "✅ [何歳|なんさい|Mấy tuổi].\n❌ [なにさい||đọc Nani sai], [なんせい||Nan sei - Nam tính], [なさい||Hãy làm (mệnh lệnh)]."
  },
  {
    id: 46,
    section: "Mondai 1",
    question: "[今日]は。",
    options: ["きょう", "こんにち", "いま", "きょお"],
    answer: "きょう",
    explain: "✅ [今日|きょう|Hôm nay] - đọc đặc biệt.\n❌ [こんにち||trong Kon-nichi-wa], [いま||Bây giờ], [きょお||sai trường âm]."
  },
  {
    id: 47,
    section: "Mondai 1",
    question: "[明日]テストがあります。",
    options: ["あした", "みょうにち", "あす", "めいじつ"],
    answer: "あした",
    explain: "✅ [明日|あした|Ngày mai] - đọc phổ biến.\n⚠️ [あす||Cũng đúng nhưng ít dùng], [みょうにち||đọc âm On], [めいじつ||sai]."
  },
  {
    id: 48,
    section: "Mondai 1",
    question: "[今]何時ですか。",
    options: ["いま", "こん", "きん", "ま"],
    answer: "いま",
    explain: "✅ [今|いま|Bây giờ].\n❌ [こん||trong [今日|こんにち]], [きん||Kim - Vàng], [ま||sai]."
  },
  {
    id: 49,
    section: "Mondai 1",
    question: "[英語]の先生。",
    options: ["えいご", "えご", "えいこ", "いご"],
    answer: "えいご",
    explain: "✅ [英語|えいご|Tiếng Anh].\n❌ [えご||thiếu i], [えいこ||Vinh quang], [いご||Cờ vây]."
  },
  {
    id: 50,
    section: "Mondai 1",
    question: "[車]で行きます。",
    options: ["くるま", "しゃ", "くろま", "くら"],
    answer: "くるま",
    explain: "✅ [車|くるま|Xe].\n❌ [しゃ||âm On trong 自動車], [くろま||sai], [くら||Kho]."
  },
  {
    id: 51,
    section: "Mondai 1",
    question: "[机]の上。",
    options: ["つくえ", "き", "つくい", "づくえ"],
    answer: "つくえ",
    explain: "✅ [机|つくえ|Cái bàn].\n❌ [き||Cây - Ki], [つくい||sai], [づくえ||sai âm đục]."
  },
  {
    id: 52,
    section: "Mondai 1",
    question: "[椅子]に座ります。",
    options: ["いす", "いし", "ちす", "えす"],
    answer: "いす",
    explain: "✅ [椅子|いす|Ghế].\n❌ [いし||Đá - Ishi], [ちす||sai âm], [えす||S]."
  },
  {
    id: 53,
    section: "Mondai 1",
    question: "[部屋]に入ります。",
    options: ["へや", "ぶおく", "べや", "ぶや"],
    answer: "へや",
    explain: "✅ [部屋|へや|Phòng].\n❌ [ぶおく||đọc theo âm On], [べや||sai tenten], [ぶや||sai âm]."
  },
  {
    id: 54,
    section: "Mondai 1",
    question: "[食堂]で食べます。",
    options: ["しょくどう", "しょくとう", "しよくどう", "しどう"],
    answer: "しょくどう",
    explain: "✅ [食堂|しょくどう|Nhà ăn/Căng tin].\n❌ [しょくとう||sai biến âm], [しよくどう||thiếu chữ nhỏ], [しどう||Shidou - Chỉ đạo]."
  },
  {
    id: 55,
    section: "Mondai 1",
    question: "[図書館]で勉強します。",
    options: ["としょかん", "ずしょかん", "としかん", "としょがん"],
    answer: "としょかん",
    explain: "✅ [図書館|としょかん|Thư viện].\n❌ [ずしょかん||sai âm đầu], [としかん||thiếu sho], [としょがん||sai âm đục]."
  },
  {
    id: 56,
    section: "Mondai 1",
    question: "[郵便局]へ行きます。",
    options: ["ゆうびんきょく", "ゆびんきょく", "ゆうびんきよく", "ゆうべんきょく"],
    answer: "ゆうびんきょく",
    explain: "✅ [郵便局|ゆうびんきょく|Bưu điện].\n❌ [ゆびんきょく||thiếu trường âm], [ゆうびんきよく||thiếu chữ nhỏ], [ゆうべんきょく||sai âm bin/ben]."
  },
  {
    id: 57,
    section: "Mondai 1",
    question: "日本[円]です。",
    options: ["えん", "えい", "まる", "よ"],
    answer: "えん",
    explain: "✅ [円|えん|Yên - đơn vị tiền tệ].\n❌ [えい||Vinh], [まる||Tròn], [よ||4 - Yon]."
  },
  {
    id: 58,
    section: "Mondai 1",
    question: "[時計]を見ます。",
    options: ["とけい", "じけい", "ときえ", "どけい"],
    answer: "とけい",
    explain: "✅ [時計|とけい|Đồng hồ].\n❌ [じけい||Thời kỳ], [ときえ||sai], [どけい||sai âm đục]."
  },

  // Mondai 2 continued: Writing (22 more questions - ids 59-80)
  {
    id: 59,
    section: "Mondai 2",
    question: "[かいしゃ]で働きます。",
    options: ["会社", "会者", "開社", "海社"],
    answer: "会社",
    explain: "✅ [かいしゃ] → [会社|Công ty].\n❌ [会者||sai Kanji Sha], [開社||Khai xã], [海社||sai Kanji]."
  },
  {
    id: 60,
    section: "Mondai 2",
    question: "[がっこう]へ行きます。",
    options: ["学校", "学交", "学効", "楽校"],
    answer: "学校",
    explain: "✅ [がっこう] → [学校|Trường học].\n❌ [学交||sai Kanji], [学効||sai Kanji], [楽校||sai Kanji Gaku]."
  },
  {
    id: 61,
    section: "Mondai 2",
    question: "[にほんご]の授業。",
    options: ["日本語", "日本後", "二本語", "日本五"],
    answer: "日本語",
    explain: "✅ [にほんご] → [日本語|Tiếng Nhật].\n❌ [日本後||後 - Sau], [二本語||Hai cây], [日本五||5]."
  },
  {
    id: 62,
    section: "Mondai 2",
    question: "[なん]ですか。",
    options: ["何", "南", "難", "名"],
    answer: "何",
    explain: "✅ [なん] → [何|Cái gì].\n❌ [南||Nam - Minami], [難||Nan - Khó], [名||Tên - Mei]."
  },
  {
    id: 63,
    section: "Mondai 2",
    question: "[だれ]の傘ですか。",
    options: ["誰", "多", "堕", "唾"],
    answer: "誰",
    explain: "✅ [だれ] → [誰|Ai].\n❌ [多||Đa - Nhiều], [堕||Đọa - Rơi xuống], [唾||Đa - Nước bọt]."
  },
  {
    id: 64,
    section: "Mondai 2",
    question: "[ほん]を買います。",
    options: ["本", "木", "体", "休"],
    answer: "本",
    explain: "✅ [ほん] → [本|Sách].\n❌ [木||Ki - Cây], [体||Karada - Cơ thể], [休||Yasu - Nghỉ]."
  },
  {
    id: 65,
    section: "Mondai 2",
    question: "[ともだち]と遊びます。",
    options: ["友達", "友逹", "友建", "朋達"],
    answer: "友達",
    explain: "✅ [ともだち] → [友達|Bạn bè].\n❌ [友逹||giống nhau nhưng sai bộ thủ], [友建||sai Kanji], [朋達||붕우 - Bằng hữu]."
  },
  {
    id: 66,
    section: "Mondai 2",
    question: "[じどうしゃ]。",
    options: ["自動車", "自道車", "字動車", "自同車"],
    answer: "自動車",
    explain: "✅ [じどうしゃ] → [自動車|Ô tô].\n❌ [自道車||Đường], [字動車||Chữ], [自同車||Đồng]."
  },
  {
    id: 67,
    section: "Mondai 2",
    question: "[じてんしゃ]。",
    options: ["自転車", "自天車", "自点車", "自展車"],
    answer: "自転車",
    explain: "✅ [じてんしゃ] → [自転車|Xe đạp].\n❌ [自天車||Trời], [自点車||Điểm], [自展車||Triển]."
  },
  {
    id: 68,
    section: "Mondai 2",
    question: "[なんさい]ですか。",
    options: ["何歳", "何才", "南歳", "難歳"],
    answer: "何歳",
    explain: "✅ [なんさい] → [何歳|Mấy tuổi].\n⚠️ [何才||Cũng đúng nhưng 歳 là chính thức hơn], [南歳||Nam], [難歳||Nan - Khó]."
  },
  {
    id: 69,
    section: "Mondai 2",
    question: "[きょう]は暑いです。",
    options: ["今日", "京", "教", "況"],
    answer: "今日",
    explain: "✅ [きょう] → [今日|Hôm nay] - đọc đặc biệt.\n❌ [京||Kyou - Kinh đô], [教||Kyou - Dạy], [況||sai]."
  },
  {
    id: 70,
    section: "Mondai 2",
    question: "[あした]テストです。",
    options: ["明日", "朝", "明月", "昨日"],
    answer: "明日",
    explain: "✅ [あした] → [明日|Ngày mai].\n❌ [朝||Asa - Sáng], [明月||Minh nguyệt], [昨日||Kinou - Hôm qua]."
  },
  {
    id: 71,
    section: "Mondai 2",
    question: "[いま]何時ですか。",
    options: ["今", "居", "去", "忌"],
    answer: "今",
    explain: "✅ [いま] → [今|Bây giờ].\n❌ [居||Kyo - Ở], [去||Kyo - Đi], [忌||Ki - Kỵ]."
  },
  {
    id: 72,
    section: "Mondai 2",
    question: "[えいご]を学びます。",
    options: ["英語", "栄語", "映語", "英後"],
    answer: "英語",
    explain: "✅ [えいご] → [英語|Tiếng Anh].\n❌ [栄語||Vinh ngữ], [映語||Ánh sáng], [英後||Sau]."
  },
  {
    id: 73,
    section: "Mondai 2",
    question: "[くるま]で帰ります。",
    options: ["車", "黒", "暗", "倉"],
    answer: "車",
    explain: "✅ [くるま] → [車|Xe].\n❌ [黒||Kuro - Đen], [暗||Kurai - Tối], [倉||Kura - Kho]."
  },
  {
    id: 74,
    section: "Mondai 2",
    question: "[つくえ]の引き出し。",
    options: ["机", "危", "肌", "木"],
    answer: "机",
    explain: "✅ [つくえ] → [机|Bàn].\n❌ [危||Ki - Nguy hiểm], [肌||Hada - Da], [木||Ki - Cây]."
  },
  {
    id: 75,
    section: "Mondai 2",
    question: "[いす]が壊れました。",
    options: ["椅子", "意子", "位子", "医師"],
    answer: "椅子",
    explain: "✅ [いす] → [椅子|Ghế].\n❌ [意子||Ý tử], [位子||Vị tử], [医師||Ishi - Bác sĩ]."
  },
  {
    id: 76,
    section: "Mondai 2",
    question: "[テレビ]を見ます。",
    options: ["TV/Television", "Radio", "Phone", "Computer"],
    answer: "TV/Television",
    explain: "✅ [テレビ] → Television (TV).\n❌ Radio ([ラジオ]), Phone ([電話|でんわ]), Computer ([コンピューター])."
  },
  {
    id: 77,
    section: "Mondai 2",
    question: "[ラジオ]を聞きます。",
    options: ["Radio", "TV", "Camera", "Recorder"],
    answer: "Radio",
    explain: "✅ [ラジオ] → Radio.\n❌ TV ([テレビ]), Camera ([カメラ]), Recorder ([レコーダー])."
  },
  {
    id: 78,
    section: "Mondai 2",
    question: "[カメラ]で撮ります。",
    options: ["Camera", "Camcorder", "Recorder", "Radio"],
    answer: "Camera",
    explain: "✅ [カメラ] → Camera (Máy ảnh).\n❌ Camcorder ([ビデオカメラ]), Recorder ([レコーダー]), Radio ([ラジオ])."
  },
  {
    id: 79,
    section: "Mondai 2",
    question: "[コンピューター]で仕事します。",
    options: ["Computer", "Printer", "Copier", "Fax"],
    answer: "Computer",
    explain: "✅ [コンピューター] → Computer (Máy tính).\n❌ Printer ([プリンター]), Copier ([コピー機|き]), Fax ([ファックス])."
  },
  {
    id: 80,
    section: "Mondai 2",
    question: "[ノート]に書きます。",
    options: ["Note/Vở", "Notebook PC", "Book", "Paper"],
    answer: "Note/Vở",
    explain: "✅ [ノート] → Note/Notebook (Vở).\n❌ Notebook PC ([ノートパソコン]), Book ([本|ほん]), Paper ([紙|かみ])."
  },

  // Mondai 3 continued: Grammar and Context (20 more questions - ids 81-100)
  {
    id: 81,
    section: "Mondai 3",
    question: "これ（　　）私の本です。",
    options: ["は", "が", "を", "に"],
    answer: "は",
    explain: "✅ [は] đánh dấu chủ ngữ 'これ'.\n❌ [が||nhấn mạnh chủ ngữ], [を||đối tượng], [に||điểm đến]."
  },
  {
    id: 82,
    section: "Mondai 3",
    question: "それは（　　）のですか。",
    options: ["だれ", "なん", "どこ", "いつ"],
    answer: "だれ",
    explain: "✅ [誰|だれ|Ai] → Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [いつ||Khi nào]."
  },
  {
    id: 83,
    section: "Mondai 3",
    question: "（　　）は何ですか。",
    options: ["あれ", "あの", "あそこ", "あちら"],
    answer: "あれ",
    explain: "✅ [あれ||Cái kia] - đại từ chỉ định.\n❌ [あの||+ danh từ], [あそこ||Chỗ kia], [あちら||Phía kia]."
  },
  {
    id: 84,
    section: "Mondai 3",
    question: "（　　）本は田中さんのです。",
    options: ["その", "それ", "そこ", "そちら"],
    answer: "その",
    explain: "✅ [その] + danh từ (Cuốn sách đó).\n❌ [それ||Cái đó - đại từ], [そこ||Đó - chỉ địa điểm], [そちら||Phía đó]."
  },
  {
    id: 85,
    section: "Mondai 3",
    question: "A: これは辞書ですか。\nB: はい、（　　）。",
    options: ["そうです", "ちがいます", "いいえ", "わかりません"],
    answer: "そうです",
    explain: "✅ [そうです||Đúng vậy] - trả lời khẳng định.\n❌ [ちがいます||Không phải], [いいえ||Không], [わかりません||Không biết]."
  },
  {
    id: 86,
    section: "Mondai 3",
    question: "A: それは雑誌ですか。\nB: いいえ、（　　）。",
    options: ["ちがいます", "そうです", "はい", "けっこうです"],
    answer: "ちがいます",
    explain: "✅ [違|ちが]います (Không phải/Sai rồi) - phủ định.\n❌ [そうです||Đúng], [はい||Vâng], [けっこうです||Được rồi]."
  },
  {
    id: 87,
    section: "Mondai 3",
    question: "田中さん（　　）会社員です。",
    options: ["も", "は", "が", "を"],
    answer: "も",
    explain: "✅ [も||Cũng] - khi câu trước đã nói ai đó là nhân viên công ty.\n❌ [は||chủ ngữ thông thường], [が||nhấn mạnh], [を||đối tượng]."
  },
  {
    id: 88,
    section: "Mondai 3",
    question: "A: ありがとうございます。\nB: （　　）。",
    options: ["どういたしまして", "すみません", "おねがいします", "しつれいします"],
    answer: "どういたしまして",
    explain: "✅ [どういたしまして||Không có chi].\n❌ [すみません||Xin lỗi], [お願いします||Nhờ vả], [失礼します||Xin phép]."
  },
  {
    id: 89,
    section: "Mondai 3",
    question: "これは（　　）本ですか。",
    options: ["なんの", "なに", "どの", "だれ"],
    answer: "なんの",
    explain: "✅ [何|なん]の (Sách gì/Loại sách nào).\n❌ [なに||Cái gì - không dùng trước の], [どの||Cái nào + danh từ], [だれ||Ai]."
  },
  {
    id: 90,
    section: "Mondai 3",
    question: "（　　）はいくらですか。",
    options: ["これ", "この", "ここ", "こちら"],
    answer: "これ",
    explain: "✅ [これ||Cái này] - đại từ chỉ định.\n❌ [この||+ danh từ], [ここ||Chỗ này], [こちら||Phía này]."
  },
  {
    id: 91,
    section: "Mondai 3",
    question: "鉛筆は（　　）ありますか。",
    options: ["どこに", "なんに", "だれに", "いつに"],
    answer: "どこに",
    explain: "✅ [どこに||Ở đâu] - hỏi vị trí.\n❌ [なんに||Cái gì - sai ngữ cảnh], [だれに||Cho ai], [いつに||Khi nào - sai trợ từ]."
  },
  {
    id: 92,
    section: "Mondai 3",
    question: "これは私（　　）カメラです。",
    options: ["の", "は", "も", "が"],
    answer: "の",
    explain: "✅ [の||Của] - chỉ sở hữu.\n❌ [は||chủ ngữ], [も||cũng], [が||chủ ngữ nhấn mạnh]."
  },
  {
    id: 93,
    section: "Mondai 3",
    question: "田中さんは（　　）人ですか。",
    options: ["どこの", "どこ", "なんの", "だれの"],
    answer: "どこの",
    explain: "✅ [どこの||Của đâu/Nước nào] - hỏi quốc tịch.\n❌ [どこ||Đâu - thiếu の], [なんの||Cái gì], [だれの||Của ai]."
  },
  {
    id: 94,
    section: "Mondai 3",
    question: "A: お名前は？\nB: 田中（　　）。",
    options: ["です", "だ", "は", "も"],
    answer: "です",
    explain: "✅ [です||Là/Ạ] - kết thúc lịch sự.\n❌ [だ||Không lịch sự], [は||chủ ngữ], [も||cũng]."
  },
  {
    id: 95,
    section: "Mondai 3",
    question: "（　　）は学生ですか、会社員ですか。",
    options: ["あの方", "あの人", "あなた", "だれ"],
    answer: "あの方",
    explain: "✅ [あの方|かた||Vị kia] - lịch sự nhất.\n⚠️ [あの人||Người kia - ít lịch sự hơn], [あなた||Bạn], [だれ||Ai]."
  },
  {
    id: 96,
    section: "Mondai 3",
    question: "これ、（　　）。",
    options: ["どうぞ", "はい", "いいえ", "すみません"],
    answer: "どうぞ",
    explain: "✅ [どうぞ||Xin mời/Của bạn đây] - tặng/đưa cho ai đó.\n❌ [はい||Vâng], [いいえ||Không], [すみません||Xin lỗi]."
  },
  {
    id: 97,
    section: "Mondai 3",
    question: "A: すみません。\nB: （　　）。",
    options: ["いいえ", "はい", "どういたしまして", "おねがいします"],
    answer: "いいえ",
    explain: "✅ [いいえ||Không sao/Không có gì] - đáp lại lời xin lỗi.\n❌ [はい||Vâng], [どういたしまして||Đáp lại cảm ơn], [お願いします||Nhờ vả]."
  },
  {
    id: 98,
    section: "Mondai 3",
    question: "（　　）から来ましたか。",
    options: ["どこ", "なん", "だれ", "いつ"],
    answer: "どこ",
    explain: "✅ [どこ||Đâu] - Đến từ đâu.\n❌ [なん||Cái gì], [だれ||Ai], [いつ||Khi nào]."
  },
  {
    id: 99,
    section: "Mondai 3",
    question: "お仕事は（　　）ですか。",
    options: ["なん", "どこ", "だれ", "いつ"],
    answer: "なん",
    explain: "✅ [何|なん||Cái gì] - Công việc là gì.\n❌ [どこ||Ở đâu], [だれ||Ai], [いつ||Khi nào]."
  },
  {
    id: 100,
    section: "Mondai 3",
    question: "初めまして。どうぞ（　　）お願いします。",
    options: ["よろしく", "おおきく", "ちいさく", "たかく"],
    answer: "よろしく",
    explain: "✅ [よろしく||Mong được giúp đỡ] - cụm từ cố định.\n❌ [おおきく||Lớn], [ちいさく||Nhỏ], [たかく||Cao/Đắt]."
  }
];



export const TEST_2: Question[] = [
] = [
    // Mondai 1: Reading (12 questions)
    {
      id: 1,
      "section": "Mondai 1",
      "question": "私の[先生]です。",
      "options": ["せんせ", "せんせい", "せせい", "せんぜい"],
      "answer": "せんせい",
      "explain": "✅ [先生|せんせい|Giáo viên/Tiên sinh] chouon (trường âm) 'ei' đọc là 'e-e'.\n❌ [せんせ||thiếu chouon], [せんぜい||sai âm đục]."
    },
    {
      id: 2,
      "section": "Mondai 1",
      "question": "あの[学生]はだれですか。",
      "options": ["がくせい", "がくせ", "かくせい", "かせい"],
      "answer": "がくせい",
      "explain": "✅ [学生|がくせい|Học sinh/Sinh viên].\n❌ [がくせ||thiếu chouon], [かくせい||sai âm trong], [かせい||thiếu 'ku']."
    },
    {
      id: 3,
      "section": "Mondai 1",
      "question": "[病院]へ行きます。",
      "options": ["びょういん", "びよりん", "びょいん", "ひょういん"],
      "answer": "びょういん",
      "explain": "✅ [病院|びょういん|Bệnh viện] - Chú ý trường âm 'ou'.\n❌ [びょいん||thiếu trường âm], [ひょういん||sai handakuon 'hi' thay vì 'bi']."
    },
    {
      id: 4,
      "section": "Mondai 1",
      "question": "[電気]をつけます。",
      "options": ["でんき", "てんき", "でんち", "てんち"],
      "answer": "でんき",
      "explain": "✅ [電気|でんき|Điện/Đèn điện].\n❌ [てんき||Thời tiết - Tenki], [でんち||Pin - Denchi]."
    },
    {
      id: 5,
      "section": "Mondai 1",
      "question": "[大学]で勉強します。",
      "options": ["だいがく", "たいがく", "おおがく", "だいかく"],
      "answer": "だいがく",
      "explain": "✅ [大学|だいがく|Đại học].\n❌ [たいがく||sai âm 'tai'], [おおがく||doc Kunyomi sai], [だいかく||sai 'kaku']."
    },
    {
      id: 6,
      "section": "Mondai 1",
      "question": "わたしは[韓国]人です。",
      "options": ["かんこく", "ちゅうごく", "かんごく", "かっこく"],
      "answer": "かんこく",
      "explain": "✅ [韓国|かんこく|Hàn Quốc].\n❌ [ちゅうごく||Trung Quốc], [かんごく||Nhà tù], [かっこく||sai âm ngắt]."
    },
    {
      id: 7,
      "section": "Mondai 1",
      "question": "[中国]から来ました。",
      "options": ["ちゅうごく", "ちゅうこく", "じゅうごく", "ちゅごく"],
      "answer": "ちゅうごく",
      "explain": "✅ [中国|ちゅうごく|Trung Quốc].\n❌ [ちゅうこく||thiếu ten-ten], [じゅうごく||sai âm đầu], [ちゅごく||thiếu trường âm]."
    },
    {
      id: 8,
      "section": "Mondai 1",
      "question": "[研究者]になりたいです。",
      "options": ["けんきゅうしゃ", "けんきゅしゃ", "けきゅうしゃ", "げんきゅうしゃ"],
      "answer": "けんきゅうしゃ",
      "explain": "✅ [研究者|けんきゅうしゃ|Nhà nghiên cứu].\n❌ [けんきゅしゃ||thiếu trường âm 'yuu'], [げんきゅうしゃ||sai âm 'gen']."
    },
    {
      id: 9,
      "section": "Mondai 1",
      "question": "[誰]ですか。",
      "options": ["だれ", "どれ", "だら", "どなた"],
      "answer": "だれ",
      "explain": "✅ [誰|だれ|Ai - thông thường].\n❌ [どなた||Vị nào - lịch sự], [どれ||Cái nào]."
    },
    {
      id: 10,
      "section": "Mondai 1",
      "question": "[医者]です。",
      "options": ["いしゃ", "いさ", "いしや", "いっしゃ"],
      "answer": "いしゃ",
      "explain": "✅ [医者|いしゃ|Bác sĩ].\n❌ [いしや||đọc tách rời], [いっしゃ||âm ngắt sai]."
    },
    {
      id: 11,
      "section": "Mondai 1",
      "question": "[傘]を借りる。",
      "options": ["かさ", "かざ", "から", "はん"],
      "answer": "かさ",
      "explain": "✅ [傘|かさ|Cái ô].\n❌ [かざ||sai biến âm], [から||từ/trống rỗng]."
    },
    {
      id: 12,
      "section": "Mondai 1",
      "question": "[名前]はなんですか。",
      "options": ["なまえ", "めいぜん", "なまい", "なま"],
      "answer": "なまえ",
      "explain": "✅ [名前|なまえ|Tên].\n❌ [めいぜん||đọc theo Onyomi sai ngữ cảnh], [なま||Tươi/Sống]."
    },
    // Mondai 2: Kanji Writing (13 questions)
    {
      id: 13,
      section: "Mondai 2",
      question: "[ほん]を読みます。",
      options: ["本", "木", "休", "体"],
      answer: "本",
      explain: "✅ [本|ほん|Sách/Gốc].\n❌ [木|き|Cây], [休|やす|Nghỉ], [体|からだ|Cơ thể]."
    },
    {
      id: 14,
      section: "Mondai 2",
      question: "[じしょ]を使います。",
      options: ["辞書", "字書", "辞初", "図書"],
      answer: "辞書",
      explain: "✅ [辞書|じしょ|Từ điển].\n❌ [字書||Sai Kanji 'Tự'], [図書|としょ|Đồ thư - Sách vở]."
    },
    {
      id: 15,
      section: "Mondai 2",
      question: "[ざっし]を買いました。",
      options: ["雑誌", "雑紙", "雑詞", "残誌"],
      answer: "雑誌",
      explain: "✅ [雑誌|ざっし|Tạp chí].\n❌ [雑紙||Sai chữ 'Chỉ' - giấy], [雑詞||Sai chữ 'Từ' - ngôn từ]."
    },
    {
      id: 16,
      section: "Mondai 2",
      question: "[しんぶん]。",
      options: ["新聞", "新分", "親聞", "真聞"],
      answer: "新聞",
      explain: "✅ [新聞|しんぶん|Báo].\n❌ [新分||Sai chữ 'Phân'], [親聞||Sai chữ 'Thân'], [真聞||Sai chữ 'Chân']."
    },
    {
      id: 17,
      section: "Mondai 2",
      question: "[てちょう]。",
      options: ["手帳", "手長", "手張", "手朝"],
      answer: "手帳",
      explain: "✅ [手帳|てちょう|Sổ tay].\n❌ [手長|てなが|Tay dài], [手朝||Sai chữ 'Triều'], [手張||Sai chữ 'Trương']."
    },
    {
      id: 18,
      section: "Mondai 2",
      question: "[めいし]。",
      options: ["名刺", "名詞", "名氏", "明刺"],
      answer: "名刺",
      explain: "✅ [名刺|めいし|Danh thiếp].\n❌ [名詞|めいし|Danh từ - ngữ pháp], [名氏||Sai chữ 'Thị'], [明刺||Sai chữ 'Minh']."
    },
    {
      id: 19,
      section: "Mondai 2",
      question: "[かーど]。",
      options: ["カード", "カド", "ガド", "カート"],
      answer: "カード",
      explain: "✅ [カード||Card/Thẻ].\n❌ [カド||Góc - Kado], [カート||Xe đẩy - Cart]."
    },
    {
      id: 20,
      section: "Mondai 2",
      question: "[えんぴつ]。",
      options: ["鉛筆", "延筆", "円筆", "遠筆"],
      answer: "鉛筆",
      explain: "✅ [鉛筆|えんぴつ|Bút chì].\n❌ [円筆||Sai chữ 'Viên' - tiền yên], [遠筆||Sai chữ 'Viễn' - xa]."
    },
    {
      id: 21,
      section: "Mondai 2",
      question: "[ぼーるぺん]。",
      options: ["ボールペン", "ボルペン", "ポールペン", "ボールパン"],
      answer: "ボールペン",
      explain: "✅ [ボールペン||Bút bi].\n❌ [ポールペン||Paul pen?], [ボールパン||Bánh mì bóng à?]."
    },
    {
      id: 22,
      section: "Mondai 2",
      question: "[かぎ]。",
      options: ["鍵", "金", "銀", "銅"],
      answer: "鍵",
      explain: "✅ [鍵|かぎ|Chìa khóa].\n❌ [金|きん|Vàng], [銀|ぎん|Bạc], [銅|どうぞ|Đồng]."
    },
    {
      id: 23,
      section: "Mondai 2",
      question: "[とけい]。",
      options: ["時計", "図計", "特急", "特計"],
      answer: "時計",
      explain: "✅ [時計|とけい|Đồng hồ].\n❌ [特急|とっきゅう|Tàu tốc hành], [図計||Sai Kanji]."
    },
    {
      id: 24,
      section: "Mondai 2",
      question: "[かばん]。",
      options: ["鞄", "革", "靴", "袋"],
      answer: "鞄",
      explain: "✅ [鞄|かばん|Cặp/Túi sách].\n❌ [革|かわ|Da], [靴|くつ|Giày], [袋|ふくろ|Túi/Bao]."
    },
    {
      id: 25,
      section: "Mondai 2",
      question: "[てーぷれこーだー]。",
      options: ["テープレコーダー", "テプレコダ", "テープレコ", "デープ"],
      answer: "テープレコーダー",
      explain: "✅ [テープレコーダー||Máy ghi âm].\n❌ Katakana dài phải chú ý trường âm 'ー'."
    },
    // Mondai 3: Context (10 questions)
    {
      id: 26,
      section: "Mondai 3",
      question: "これは　（　　）ですか。 ...本です。",
      options: ["なん", "なに", "だれ", "どれ"],
      answer: "なん",
      explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng khi đứng độc lập hoặc trước trợ từ wo/ga], [だれ||Ai], [どれ||Cái nào]."
    },
    {
      id: 27,
      section: "Mondai 3",
      question: "（　　）本は　わたしのです。",
      options: ["この", "これ", "ここ", "こちら"],
      answer: "この",
      explain: "✅ [この] + Danh từ (Cuốn sách này...).\n❌ [これ||Cái này - Đại từ], [ここ||Chỗ này], [こちら||Phía này]."
    },
    {
      id: 28,
      section: "Mondai 3",
      question: "それは　（　　）の　かさですか。",
      options: ["だれ", "なん", "どこ", "どれ"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai] -> Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [どれ||Cái nào]."
    },
    {
      id: 29,
      section: "Mondai 3",
      question: "この　とけいは　（　　）の　ですか。",
      options: ["わたし", "わたしの", "あなた", "だれ"],
      answer: "わたし",
      explain: "✅ [私|わたし|Tôi] -> Watashi no (Của tôi).\n❌ [わたしの||Đã có 'no' sau ngoặc nên thành 'watashi no no' -> sai], [あなた||Bạn], [だれ||Ai]."
    },
    {
      id: 30,
      section: "Mondai 3",
      question: "（　　）に　ちがいます。",
      options: ["そう", "いいえ", "はい", "あ"],
      answer: "いいえ",
      explain: "✅ [いいえ||Không] -> Iie, chigaimasu (Không, nhầm rồi/không phải).\n❌ [そう||Đúng vậy], [はい||Vâng], [あ||A!]."
    },
    {
      id: 31,
      section: "Mondai 3",
      question: "これから　（　　）なります。",
      options: ["おせわに", "おせわ", "せわに", "せわ"],
      answer: "おせわに",
      explain: "✅ [お世話|せわ]に (Được giúp đỡ) -> Cụm từ cố định: Osewa ni narimasu.\n❌ Thiếu trợ từ 'ni' hoặc tiền tố 'o'."
    },
    {
      id: 32,
      section: "Mondai 3",
      question: "こちらは　（　　）さんです。",
      options: ["ミラー", "ミラーの", "ミラーに", "ミラーと"],
      answer: "ミラー",
      explain: "✅ Miller-san (Anh Miller).\n❌ Không cần trợ từ ở đây."
    },
    {
      id: 33,
      section: "Mondai 3",
      question: "（　　）から　来ました。",
      options: ["アメリカ", "アメリカに", "アメリカへ", "アメリカと"],
      answer: "アメリカ",
      explain: "✅ [アメリカ||Nước Mỹ] -> Đến từ Mỹ.\n❌ 'Kara' đi trực tiếp sau danh từ chỉ địa điểm, không cần trợ từ khác chen vào."
    },
    {
      id: 34,
      section: "Mondai 3",
      question: "（　　）は　なんですか。 ...45歳（さい）です。",
      options: ["おとし", "とし", "なんさい", "おいくつ"],
      answer: "おいくつ",
      explain: "✅ [おいくつ||Bao nhiêu tuổi - lịch sự].\n⚠️ [なんさい||Hỏi tuổi thông thường - ít lịch sự hơn], [おとし||Tuổi tác]."
    },
    {
      id: 35,
      section: "Mondai 3",
      question: "（　　）は　エンジニアです。",
      options: ["ミラーさん", "ミラー", "ミラーさま", "ミラーくん"],
      answer: "ミラーさん",
      explain: "✅ Miller-san (Anh Miller) - gọi người khác phải thêm san.\n❌ [ミラー||Gọi trống không - thất lễ], [ミラーさま||Quá trang trọng], [ミラーくん||Dùng cho nam ít tuổi hơn/ngang hàng]."
    },

    // Mondai 1 continued: Reading (23 more questions - ids 36-58)
    {
      id: 36,
      section: "Mondai 1",
      question: "[会社]員です。",
      options: ["かいしゃ", "がいしゃ", "かいさ", "かいしや"],
      answer: "かいしゃ",
      explain: "✅ [会社|かいしゃ|Công ty].\n❌ [がいしゃ||sai tenten], [かいさ||thiếu sha], [かいしや||đọc tách rời]."
    },
    {
      id: 37,
      section: "Mondai 1",
      question: "[学校]で勉強します。",
      options: ["がっこう", "がこう", "かっこう", "がくこう"],
      answer: "がっこう",
      explain: "✅ [学校|がっこう|Trường học].\n❌ [がこう||thiếu âm ngắt], [かっこう||Kakkou - Con chim cu], [がくこう||đọc riêng từng chữ]."
    },
    {
      id: 38,
      section: "Mondai 1",
      question: "日本[語]を勉強します。",
      options: ["ご", "こ", "ぞ", "しゃ"],
      answer: "ご",
      explain: "✅ [語|ご|Ngữ/Tiếng].\n❌ [こ||Go/Ko - Tử], [ぞ||sai âm đục], [しゃ||sai âm]."
    },
    {
      id: 39,
      section: "Mondai 1",
      question: "[何]ですか。",
      options: ["なん", "なに", "かん", "が"],
      answer: "なん",
      explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng trước を/が], [かん||sai âm], [が||sai]."
    },
    {
      id: 40,
      section: "Mondai 1",
      question: "[誰]のですか。",
      options: ["だれ", "だい", "たれ", "どなた"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai].\n❌ [どなた||Lịch sự hơn - Vị nào], [だい||sai], [たれ||sai âm đầu]."
    },
    {
      id: 41,
      section: "Mondai 1",
      question: "[本]を読みます。",
      options: ["ほん", "ぼん", "ぽん", "もと"],
      answer: "ほん",
      explain: "✅ [本|ほん|Sách].\n❌ [ぼん/ぽん||sai biến âm], [もと||Căn bản - âm Kunyomi]."
    },
    {
      id: 42,
      section: "Mondai 1",
      question: "[友達]と話します。",
      options: ["ともだち", "ゆうたつ", "ともたち", "とうだち"],
      answer: "ともだち",
      explain: "✅ [友達|ともだち|Bạn bè].\n❌ [ゆうたつ||đọc theo âm On], [ともたち||sai âm đục], [とうだち||sai trường âm]."
    },
    {
      id: 43,
      section: "Mondai 1",
      question: "[自動車]を運転します。",
      options: ["じどうしゃ", "じとうしゃ", "しどうしゃ", "じどしゃ"],
      answer: "じどうしゃ",
      explain: "✅ [自動車|じどうしゃ|Ô tô].\n❌ [じとうしゃ||thiếu đô], [しどうしゃ||sai âm ji/shi], [じどしゃ||thiếu trường âm]."
    },
    {
      id: 44,
      section: "Mondai 1",
      question: "[自転車]に乗ります。",
      options: ["じてんしゃ", "じでんしゃ", "してんしゃ", "じてしゃ"],
      answer: "じてんしゃ",
      explain: "✅ [自転車|じてんしゃ|Xe đạp].\n❌ [じでんしゃ||sai âm ten], [してんしゃ||sai âm ji/shi], [じてしゃ||thiếu ten]."
    },
    {
      id: 45,
      section: "Mondai 1",
      question: "[何歳]ですか。",
      options: ["なんさい", "なにさい", "なんせい", "なさい"],
      answer: "なんさい",
      explain: "✅ [何歳|なんさい|Mấy tuổi].\n❌ [なにさい||đọc Nani sai], [なんせい||Nan sei - Nam tính], [なさい||Hãy làm (mệnh lệnh)]."
    },
    {
      id: 46,
      section: "Mondai 1",
      question: "[今日]は。",
      options: ["きょう", "こんにち", "いま", "きょお"],
      answer: "きょう",
      explain: "✅ [今日|きょう|Hôm nay] - đọc đặc biệt.\n❌ [こんにち||trong Kon-nichi-wa], [いま||Bây giờ], [きょお||sai trường âm]."
    },
    {
      id: 47,
      section: "Mondai 1",
      question: "[明日]テストがあります。",
      options: ["あした", "みょうにち", "あす", "めいじつ"],
      answer: "あした",
      explain: "✅ [明日|あした|Ngày mai] - đọc phổ biến.\n⚠️ [あす||Cũng đúng nhưng ít dùng], [みょうにち||đọc âm On], [めいじつ||sai]."
    },
    {
      id: 48,
      section: "Mondai 1",
      question: "[今]何時ですか。",
      options: ["いま", "こん", "きん", "ま"],
      answer: "いま",
      explain: "✅ [今|いま|Bây giờ].\n❌ [こん||trong [今日|こんにち]], [きん||Kim - Vàng], [ま||sai]."
    },
    {
      id: 49,
      section: "Mondai 1",
      question: "[英語]の先生。",
      options: ["えいご", "えご", "えいこ", "いご"],
      answer: "えいご",
      explain: "✅ [英語|えいご|Tiếng Anh].\n❌ [えご||thiếu i], [えいこ||Vinh quang], [いご||Cờ vây]."
    },
    {
      id: 50,
      section: "Mondai 1",
      question: "[車]で行きます。",
      options: ["くるま", "しゃ", "くろま", "くら"],
      answer: "くるま",
      explain: "✅ [車|くるま|Xe].\n❌ [しゃ||âm On trong 自動車], [くろま||sai], [くら||Kho]."
    },
    {
      id: 51,
      section: "Mondai 1",
      question: "[机]の上。",
      options: ["つくえ", "き", "つくい", "づくえ"],
      answer: "つくえ",
      explain: "✅ [机|つくえ|Cái bàn].\n❌ [き||Cây - Ki], [つくい||sai], [づくえ||sai âm đục]."
    },
    {
      id: 52,
      section: "Mondai 1",
      question: "[椅子]に座ります。",
      options: ["いす", "いし", "ちす", "えす"],
      answer: "いす",
      explain: "✅ [椅子|いす|Ghế].\n❌ [いし||Đá - Ishi], [ちす||sai âm], [えす||S]."
    },
    {
      id: 53,
      section: "Mondai 1",
      question: "[部屋]に入ります。",
      options: ["へや", "ぶおく", "べや", "ぶや"],
      answer: "へや",
      explain: "✅ [部屋|へや|Phòng].\n❌ [ぶおく||đọc theo âm On], [べや||sai tenten], [ぶや||sai âm]."
    },
    {
      id: 54,
      section: "Mondai 1",
      question: "[食堂]で食べます。",
      options: ["しょくどう", "しょくとう", "しよくどう", "しどう"],
      answer: "しょくどう",
      explain: "✅ [食堂|しょくどう|Nhà ăn/Căng tin].\n❌ [しょくとう||sai biến âm], [しよくどう||thiếu chữ nhỏ], [しどう||Shidou - Chỉ đạo]."
    },
    {
      id: 55,
      section: "Mondai 1",
      question: "[図書館]で勉強します。",
      options: ["としょかん", "ずしょかん", "としかん", "としょがん"],
      answer: "としょかん",
      explain: "✅ [図書館|としょかん|Thư viện].\n❌ [ずしょかん||sai âm đầu], [としかん||thiếu sho], [としょがん||sai âm đục]."
    },
    {
      id: 56,
      section: "Mondai 1",
      question: "[郵便局]へ行きます。",
      options: ["ゆうびんきょく", "ゆびんきょく", "ゆうびんきよく", "ゆうべんきょく"],
      answer: "ゆうびんきょく",
      explain: "✅ [郵便局|ゆうびんきょく|Bưu điện].\n❌ [ゆびんきょく||thiếu trường âm], [ゆうびんきよく||thiếu chữ nhỏ], [ゆうべんきょく||sai âm bin/ben]."
    },
    {
      id: 57,
      section: "Mondai 1",
      question: "日本[円]です。",
      options: ["えん", "えい", "まる", "よ"],
      answer: "えん",
      explain: "✅ [円|えん|Yên - đơn vị tiền tệ].\n❌ [えい||Vinh], [まる||Tròn], [よ||4 - Yon]."
    },
    {
      id: 58,
      section: "Mondai 1",
      question: "[時計]を見ます。",
      options: ["とけい", "じけい", "ときえ", "どけい"],
      answer: "とけい",
      explain: "✅ [時計|とけい|Đồng hồ].\n❌ [じけい||Thời kỳ], [ときえ||sai], [どけい||sai âm đục]."
    },

    // Mondai 2 continued: Writing (22 more questions - ids 59-80)
    {
      id: 59,
      section: "Mondai 2",
      question: "[かいしゃ]で働きます。",
      options: ["会社", "会者", "開社", "海社"],
      answer: "会社",
      explain: "✅ [かいしゃ] → [会社|Công ty].\n❌ [会者||sai Kanji Sha], [開社||Khai xã], [海社||sai Kanji]."
    },
    {
      id: 60,
      section: "Mondai 2",
      question: "[がっこう]へ行きます。",
      options: ["学校", "学交", "学効", "楽校"],
      answer: "学校",
      explain: "✅ [がっこう] → [学校|Trường học].\n❌ [学交||sai Kanji], [学効||sai Kanji], [楽校||sai Kanji Gaku]."
    },
    {
      id: 61,
      section: "Mondai 2",
      question: "[にほんご]の授業。",
      options: ["日本語", "日本後", "二本語", "日本五"],
      answer: "日本語",
      explain: "✅ [にほんご] → [日本語|Tiếng Nhật].\n❌ [日本後||後 - Sau], [二本語||Hai cây], [日本五||5]."
    },
    {
      id: 62,
      section: "Mondai 2",
      question: "[なん]ですか。",
      options: ["何", "南", "難", "名"],
      answer: "何",
      explain: "✅ [なん] → [何|Cái gì].\n❌ [南||Nam - Minami], [難||Nan - Khó], [名||Tên - Mei]."
    },
    {
      id: 63,
      section: "Mondai 2",
      question: "[だれ]の傘ですか。",
      options: ["誰", "多", "堕", "唾"],
      answer: "誰",
      explain: "✅ [だれ] → [誰|Ai].\n❌ [多||Đa - Nhiều], [堕||Đọa - Rơi xuống], [唾||Đa - Nước bọt]."
    },
    {
      id: 64,
      section: "Mondai 2",
      question: "[ほん]を買います。",
      options: ["本", "木", "体", "休"],
      answer: "本",
      explain: "✅ [ほん] → [本|Sách].\n❌ [木||Ki - Cây], [体||Karada - Cơ thể], [休||Yasu - Nghỉ]."
    },
    {
      id: 65,
      section: "Mondai 2",
      question: "[ともだち]と遊びます。",
      options: ["友達", "友逹", "友建", "朋達"],
      answer: "友達",
      explain: "✅ [ともだち] → [友達|Bạn bè].\n❌ [友逹||giống nhau nhưng sai bộ thủ], [友建||sai Kanji], [朋達||붕우 - Bằng hữu]."
    },
    {
      id: 66,
      section: "Mondai 2",
      question: "[じどうしゃ]。",
      options: ["自動車", "自道車", "字動車", "自同車"],
      answer: "自動車",
      explain: "✅ [じどうしゃ] → [自動車|Ô tô].\n❌ [自道車||Đường], [字動車||Chữ], [自同車||Đồng]."
    },
    {
      id: 67,
      section: "Mondai 2",
      question: "[じてんしゃ]。",
      options: ["自転車", "自天車", "自点車", "自展車"],
      answer: "自転車",
      explain: "✅ [じてんしゃ] → [自転車|Xe đạp].\n❌ [自天車||Trời], [自点車||Điểm], [自展車||Triển]."
    },
    {
      id: 68,
      section: "Mondai 2",
      question: "[なんさい]ですか。",
      options: ["何歳", "何才", "南歳", "難歳"],
      answer: "何歳",
      explain: "✅ [なんさい] → [何歳|Mấy tuổi].\n⚠️ [何才||Cũng đúng nhưng 歳 là chính thức hơn], [南歳||Nam], [難歳||Nan - Khó]."
    },
    {
      id: 69,
      section: "Mondai 2",
      question: "[きょう]は暑いです。",
      options: ["今日", "京", "教", "況"],
      answer: "今日",
      explain: "✅ [きょう] → [今日|Hôm nay] - đọc đặc biệt.\n❌ [京||Kyou - Kinh đô], [教||Kyou - Dạy], [況||sai]."
    },
    {
      id: 70,
      section: "Mondai 2",
      question: "[あした]テストです。",
      options: ["明日", "朝", "明月", "昨日"],
      answer: "明日",
      explain: "✅ [あした] → [明日|Ngày mai].\n❌ [朝||Asa - Sáng], [明月||Minh nguyệt], [昨日||Kinou - Hôm qua]."
    },
    {
      id: 71,
      section: "Mondai 2",
      question: "[いま]何時ですか。",
      options: ["今", "居", "去", "忌"],
      answer: "今",
      explain: "✅ [いま] → [今|Bây giờ].\n❌ [居||Kyo - Ở], [去||Kyo - Đi], [忌||Ki - Kỵ]."
    },
    {
      id: 72,
      section: "Mondai 2",
      question: "[えいご]を学びます。",
      options: ["英語", "栄語", "映語", "英後"],
      answer: "英語",
      explain: "✅ [えいご] → [英語|Tiếng Anh].\n❌ [栄語||Vinh ngữ], [映語||Ánh sáng], [英後||Sau]."
    },
    {
      id: 73,
      section: "Mondai 2",
      question: "[くるま]で帰ります。",
      options: ["車", "黒", "暗", "倉"],
      answer: "車",
      explain: "✅ [くるま] → [車|Xe].\n❌ [黒||Kuro - Đen], [暗||Kurai - Tối], [倉||Kura - Kho]."
    },
    {
      id: 74,
      section: "Mondai 2",
      question: "[つくえ]の引き出し。",
      options: ["机", "危", "肌", "木"],
      answer: "机",
      explain: "✅ [つくえ] → [机|Bàn].\n❌ [危||Ki - Nguy hiểm], [肌||Hada - Da], [木||Ki - Cây]."
    },
    {
      id: 75,
      section: "Mondai 2",
      question: "[いす]が壊れました。",
      options: ["椅子", "意子", "位子", "医師"],
      answer: "椅子",
      explain: "✅ [いす] → [椅子|Ghế].\n❌ [意子||Ý tử], [位子||Vị tử], [医師||Ishi - Bác sĩ]."
    },
    {
      id: 76,
      section: "Mondai 2",
      question: "[テレビ]を見ます。",
      options: ["TV/Television", "Radio", "Phone", "Computer"],
      answer: "TV/Television",
      explain: "✅ [テレビ] → Television (TV).\n❌ Radio ([ラジオ]), Phone ([電話|でんわ]), Computer ([コンピューター])."
    },
    {
      id: 77,
      section: "Mondai 2",
      question: "[ラジオ]を聞きます。",
      options: ["Radio", "TV", "Camera", "Recorder"],
      answer: "Radio",
      explain: "✅ [ラジオ] → Radio.\n❌ TV ([テレビ]), Camera ([カメラ]), Recorder ([レコーダー])."
    },
    {
      id: 78,
      section: "Mondai 2",
      question: "[カメラ]で撮ります。",
      options: ["Camera", "Camcorder", "Recorder", "Radio"],
      answer: "Camera",
      explain: "✅ [カメラ] → Camera (Máy ảnh).\n❌ Camcorder ([ビデオカメラ]), Recorder ([レコーダー]), Radio ([ラジオ])."
    },
    {
      id: 79,
      section: "Mondai 2",
      question: "[コンピューター]で仕事します。",
      options: ["Computer", "Printer", "Copier", "Fax"],
      answer: "Computer",
      explain: "✅ [コンピューター] → Computer (Máy tính).\n❌ Printer ([プリンター]), Copier ([コピー機|き]), Fax ([ファックス])."
    },
    {
      id: 80,
      section: "Mondai 2",
      question: "[ノート]に書きます。",
      options: ["Note/Vở", "Notebook PC", "Book", "Paper"],
      answer: "Note/Vở",
      explain: "✅ [ノート] → Note/Notebook (Vở).\n❌ Notebook PC ([ノートパソコン]), Book ([本|ほん]), Paper ([紙|かみ])."
    },

    // Mondai 3 continued: Grammar and Context (20 more questions - ids 81-100)
    {
      id: 81,
      section: "Mondai 3",
      question: "これ（　　）私の本です。",
      options: ["は", "が", "を", "に"],
      answer: "は",
      explain: "✅ [は] đánh dấu chủ ngữ 'これ'.\n❌ [が||nhấn mạnh chủ ngữ], [を||đối tượng], [に||điểm đến]."
    },
    {
      id: 82,
      section: "Mondai 3",
      question: "それは（　　）のですか。",
      options: ["だれ", "なん", "どこ", "いつ"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai] → Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [いつ||Khi nào]."
    },
    {
      id: 83,
      section: "Mondai 3",
      question: "（　　）は何ですか。",
      options: ["あれ", "あの", "あそこ", "あちら"],
      answer: "あれ",
      explain: "✅ [あれ||Cái kia] - đại từ chỉ định.\n❌ [あの||+ danh từ], [あそこ||Chỗ kia], [あちら||Phía kia]."
    },
    {
      id: 84,
      section: "Mondai 3",
      question: "（　　）本は田中さんのです。",
      options: ["その", "それ", "そこ", "そちら"],
      answer: "その",
      explain: "✅ [その] + danh từ (Cuốn sách đó).\n❌ [それ||Cái đó - đại từ], [そこ||Đó - chỉ địa điểm], [そちら||Phía đó]."
    },
    {
      id: 85,
      section: "Mondai 3",
      question: "A: これは辞書ですか。\nB: はい、（　　）。",
      options: ["そうです", "ちがいます", "いいえ", "わかりません"],
      answer: "そうです",
      explain: "✅ [そうです||Đúng vậy] - trả lời khẳng định.\n❌ [ちがいます||Không phải], [いいえ||Không], [わかりません||Không biết]."
    },
    {
      id: 86,
      section: "Mondai 3",
      question: "A: それは雑誌ですか。\nB: いいえ、（　　）。",
      options: ["ちがいます", "そうです", "はい", "けっこうです"],
      answer: "ちがいます",
      explain: "✅ [違|ちが]います (Không phải/Sai rồi) - phủ định.\n❌ [そうです||Đúng], [はい||Vâng], [けっこうです||Được rồi]."
    },
    {
      id: 87,
      section: "Mondai 3",
      question: "田中さん（　　）会社員です。",
      options: ["も", "は", "が", "を"],
      answer: "も",
      explain: "✅ [も||Cũng] - khi câu trước đã nói ai đó là nhân viên công ty.\n❌ [は||chủ ngữ thông thường], [が||nhấn mạnh], [を||đối tượng]."
    },
    {
      id: 88,
      section: "Mondai 3",
      question: "A: ありがとうございます。\nB: （　　）。",
      options: ["どういたしまして", "すみません", "おねがいします", "しつれいします"],
      answer: "どういたしまして",
      explain: "✅ [どういたしまして||Không có chi].\n❌ [すみません||Xin lỗi], [お願いします||Nhờ vả], [失礼します||Xin phép]."
    },
    {
      id: 89,
      section: "Mondai 3",
      question: "これは（　　）本ですか。",
      options: ["なんの", "なに", "どの", "だれ"],
      answer: "なんの",
      explain: "✅ [何|なん]の (Sách gì/Loại sách nào).\n❌ [なに||Cái gì - không dùng trước の], [どの||Cái nào + danh từ], [だれ||Ai]."
    },
    {
      id: 90,
      section: "Mondai 3",
      question: "（　　）はいくらですか。",
      options: ["これ", "この", "ここ", "こちら"],
      answer: "これ",
      explain: "✅ [これ||Cái này] - đại từ chỉ định.\n❌ [この||+ danh từ], [ここ||Chỗ này], [こちら||Phía này]."
    },
    {
      id: 91,
      section: "Mondai 3",
      question: "鉛筆は（　　）ありますか。",
      options: ["どこに", "なんに", "だれに", "いつに"],
      answer: "どこに",
      explain: "✅ [どこに||Ở đâu] - hỏi vị trí.\n❌ [なんに||Cái gì - sai ngữ cảnh], [だれに||Cho ai], [いつに||Khi nào - sai trợ từ]."
    },
    {
      id: 92,
      section: "Mondai 3",
      question: "これは私（　　）カメラです。",
      options: ["の", "は", "も", "が"],
      answer: "の",
      explain: "✅ [の||Của] - chỉ sở hữu.\n❌ [は||chủ ngữ], [も||cũng], [が||chủ ngữ nhấn mạnh]."
    },
    {
      id: 93,
      section: "Mondai 3",
      question: "田中さんは（　　）人ですか。",
      options: ["どこの", "どこ", "なんの", "だれの"],
      answer: "どこの",
      explain: "✅ [どこの||Của đâu/Nước nào] - hỏi quốc tịch.\n❌ [どこ||Đâu - thiếu の], [なんの||Cái gì], [だれの||Của ai]."
    },
    {
      id: 94,
      section: "Mondai 3",
      question: "A: お名前は？\nB: 田中（　　）。",
      options: ["です", "だ", "は", "も"],
      answer: "です",
      explain: "✅ [です||Là/Ạ] - kết thúc lịch sự.\n❌ [だ||Không lịch sự], [は||chủ ngữ], [も||cũng]."
    },
    {
      id: 95,
      section: "Mondai 3",
      question: "（　　）は学生ですか、会社員ですか。",
      options: ["あの方", "あの人", "あなた", "だれ"],
      answer: "あの方",
      explain: "✅ [あの方|かた||Vị kia] - lịch sự nhất.\n⚠️ [あの人||Người kia - ít lịch sự hơn], [あなた||Bạn], [だれ||Ai]."
    },
    {
      id: 96,
      section: "Mondai 3",
      question: "これ、（　　）。",
      options: ["どうぞ", "はい", "いいえ", "すみません"],
      answer: "どうぞ",
      explain: "✅ [どうぞ||Xin mời/Của bạn đây] - tặng/đưa cho ai đó.\n❌ [はい||Vâng], [いいえ||Không], [すみません||Xin lỗi]."
    },
    {
      id: 97,
      section: "Mondai 3",
      question: "A: すみません。\nB: （　　）。",
      options: ["いいえ", "はい", "どういたしまして", "おねがいします"],
      answer: "いいえ",
      explain: "✅ [いいえ||Không sao/Không có gì] - đáp lại lời xin lỗi.\n❌ [はい||Vâng], [どういたしまして||Đáp lại cảm ơn], [お願いします||Nhờ vả]."
    },
    {
      id: 98,
      section: "Mondai 3",
      question: "（　　）から来ましたか。",
      options: ["どこ", "なん", "だれ", "いつ"],
      answer: "どこ",
      explain: "✅ [どこ||Đâu] - Đến từ đâu.\n❌ [なん||Cái gì], [だれ||Ai], [いつ||Khi nào]."
    },
    {
      id: 99,
      section: "Mondai 3",
      question: "お仕事は（　　）ですか。",
      options: ["なん", "どこ", "だれ", "いつ"],
      answer: "なん",
      explain: "✅ [何|なん||Cái gì] - Công việc là gì.\n❌ [どこ||Ở đâu], [だれ||Ai], [いつ||Khi nào]."
    },
    {
      id: 100,
      section: "Mondai 3",
      question: "初めまして。どうぞ（　　）お願いします。",
      options: ["よろしく", "おおきく", "ちいさく", "たかく"],
      answer: "よろしく",
      explain: "✅ [よろしく||Mong được giúp đỡ] - cụm từ cố định.\n❌ [おおきく||Lớn], [ちいさく||Nhỏ], [たかく||Cao/Đắt]."
    }
  ];



export const TEST_3: Question[] = [
] = [
    // Mondai 1: Reading (12 questions)
    {
      id: 1,
      "section": "Mondai 1",
      "question": "私の[先生]です。",
      "options": ["せんせ", "せんせい", "せせい", "せんぜい"],
      "answer": "せんせい",
      "explain": "✅ [先生|せんせい|Giáo viên/Tiên sinh] chouon (trường âm) 'ei' đọc là 'e-e'.\n❌ [せんせ||thiếu chouon], [せんぜい||sai âm đục]."
    },
    {
      id: 2,
      "section": "Mondai 1",
      "question": "あの[学生]はだれですか。",
      "options": ["がくせい", "がくせ", "かくせい", "かせい"],
      "answer": "がくせい",
      "explain": "✅ [学生|がくせい|Học sinh/Sinh viên].\n❌ [がくせ||thiếu chouon], [かくせい||sai âm trong], [かせい||thiếu 'ku']."
    },
    {
      id: 3,
      "section": "Mondai 1",
      "question": "[病院]へ行きます。",
      "options": ["びょういん", "びよりん", "びょいん", "ひょういん"],
      "answer": "びょういん",
      "explain": "✅ [病院|びょういん|Bệnh viện] - Chú ý trường âm 'ou'.\n❌ [びょいん||thiếu trường âm], [ひょういん||sai handakuon 'hi' thay vì 'bi']."
    },
    {
      id: 4,
      "section": "Mondai 1",
      "question": "[電気]をつけます。",
      "options": ["でんき", "てんき", "でんち", "てんち"],
      "answer": "でんき",
      "explain": "✅ [電気|でんき|Điện/Đèn điện].\n❌ [てんき||Thời tiết - Tenki], [でんち||Pin - Denchi]."
    },
    {
      id: 5,
      "section": "Mondai 1",
      "question": "[大学]で勉強します。",
      "options": ["だいがく", "たいがく", "おおがく", "だいかく"],
      "answer": "だいがく",
      "explain": "✅ [大学|だいがく|Đại học].\n❌ [たいがく||sai âm 'tai'], [おおがく||doc Kunyomi sai], [だいかく||sai 'kaku']."
    },
    {
      id: 6,
      "section": "Mondai 1",
      "question": "わたしは[韓国]人です。",
      "options": ["かんこく", "ちゅうごく", "かんごく", "かっこく"],
      "answer": "かんこく",
      "explain": "✅ [韓国|かんこく|Hàn Quốc].\n❌ [ちゅうごく||Trung Quốc], [かんごく||Nhà tù], [かっこく||sai âm ngắt]."
    },
    {
      id: 7,
      "section": "Mondai 1",
      "question": "[中国]から来ました。",
      "options": ["ちゅうごく", "ちゅうこく", "じゅうごく", "ちゅごく"],
      "answer": "ちゅうごく",
      "explain": "✅ [中国|ちゅうごく|Trung Quốc].\n❌ [ちゅうこく||thiếu ten-ten], [じゅうごく||sai âm đầu], [ちゅごく||thiếu trường âm]."
    },
    {
      id: 8,
      "section": "Mondai 1",
      "question": "[研究者]になりたいです。",
      "options": ["けんきゅうしゃ", "けんきゅしゃ", "けきゅうしゃ", "げんきゅうしゃ"],
      "answer": "けんきゅうしゃ",
      "explain": "✅ [研究者|けんきゅうしゃ|Nhà nghiên cứu].\n❌ [けんきゅしゃ||thiếu trường âm 'yuu'], [げんきゅうしゃ||sai âm 'gen']."
    },
    {
      id: 9,
      "section": "Mondai 1",
      "question": "[誰]ですか。",
      "options": ["だれ", "どれ", "だら", "どなた"],
      "answer": "だれ",
      "explain": "✅ [誰|だれ|Ai - thông thường].\n❌ [どなた||Vị nào - lịch sự], [どれ||Cái nào]."
    },
    {
      id: 10,
      "section": "Mondai 1",
      "question": "[医者]です。",
      "options": ["いしゃ", "いさ", "いしや", "いっしゃ"],
      "answer": "いしゃ",
      "explain": "✅ [医者|いしゃ|Bác sĩ].\n❌ [いしや||đọc tách rời], [いっしゃ||âm ngắt sai]."
    },
    {
      id: 11,
      "section": "Mondai 1",
      "question": "[傘]を借りる。",
      "options": ["かさ", "かざ", "から", "はん"],
      "answer": "かさ",
      "explain": "✅ [傘|かさ|Cái ô].\n❌ [かざ||sai biến âm], [から||từ/trống rỗng]."
    },
    {
      id: 12,
      "section": "Mondai 1",
      "question": "[名前]はなんですか。",
      "options": ["なまえ", "めいぜん", "なまい", "なま"],
      "answer": "なまえ",
      "explain": "✅ [名前|なまえ|Tên].\n❌ [めいぜん||đọc theo Onyomi sai ngữ cảnh], [なま||Tươi/Sống]."
    },
    // Mondai 2: Kanji Writing (13 questions)
    {
      id: 13,
      section: "Mondai 2",
      question: "[ほん]を読みます。",
      options: ["本", "木", "休", "体"],
      answer: "本",
      explain: "✅ [本|ほん|Sách/Gốc].\n❌ [木|き|Cây], [休|やす|Nghỉ], [体|からだ|Cơ thể]."
    },
    {
      id: 14,
      section: "Mondai 2",
      question: "[じしょ]を使います。",
      options: ["辞書", "字書", "辞初", "図書"],
      answer: "辞書",
      explain: "✅ [辞書|じしょ|Từ điển].\n❌ [字書||Sai Kanji 'Tự'], [図書|としょ|Đồ thư - Sách vở]."
    },
    {
      id: 15,
      section: "Mondai 2",
      question: "[ざっし]を買いました。",
      options: ["雑誌", "雑紙", "雑詞", "残誌"],
      answer: "雑誌",
      explain: "✅ [雑誌|ざっし|Tạp chí].\n❌ [雑紙||Sai chữ 'Chỉ' - giấy], [雑詞||Sai chữ 'Từ' - ngôn từ]."
    },
    {
      id: 16,
      section: "Mondai 2",
      question: "[しんぶん]。",
      options: ["新聞", "新分", "親聞", "真聞"],
      answer: "新聞",
      explain: "✅ [新聞|しんぶん|Báo].\n❌ [新分||Sai chữ 'Phân'], [親聞||Sai chữ 'Thân'], [真聞||Sai chữ 'Chân']."
    },
    {
      id: 17,
      section: "Mondai 2",
      question: "[てちょう]。",
      options: ["手帳", "手長", "手張", "手朝"],
      answer: "手帳",
      explain: "✅ [手帳|てちょう|Sổ tay].\n❌ [手長|てなが|Tay dài], [手朝||Sai chữ 'Triều'], [手張||Sai chữ 'Trương']."
    },
    {
      id: 18,
      section: "Mondai 2",
      question: "[めいし]。",
      options: ["名刺", "名詞", "名氏", "明刺"],
      answer: "名刺",
      explain: "✅ [名刺|めいし|Danh thiếp].\n❌ [名詞|めいし|Danh từ - ngữ pháp], [名氏||Sai chữ 'Thị'], [明刺||Sai chữ 'Minh']."
    },
    {
      id: 19,
      section: "Mondai 2",
      question: "[かーど]。",
      options: ["カード", "カド", "ガド", "カート"],
      answer: "カード",
      explain: "✅ [カード||Card/Thẻ].\n❌ [カド||Góc - Kado], [カート||Xe đẩy - Cart]."
    },
    {
      id: 20,
      section: "Mondai 2",
      question: "[えんぴつ]。",
      options: ["鉛筆", "延筆", "円筆", "遠筆"],
      answer: "鉛筆",
      explain: "✅ [鉛筆|えんぴつ|Bút chì].\n❌ [円筆||Sai chữ 'Viên' - tiền yên], [遠筆||Sai chữ 'Viễn' - xa]."
    },
    {
      id: 21,
      section: "Mondai 2",
      question: "[ぼーるぺん]。",
      options: ["ボールペン", "ボルペン", "ポールペン", "ボールパン"],
      answer: "ボールペン",
      explain: "✅ [ボールペン||Bút bi].\n❌ [ポールペン||Paul pen?], [ボールパン||Bánh mì bóng à?]."
    },
    {
      id: 22,
      section: "Mondai 2",
      question: "[かぎ]。",
      options: ["鍵", "金", "銀", "銅"],
      answer: "鍵",
      explain: "✅ [鍵|かぎ|Chìa khóa].\n❌ [金|きん|Vàng], [銀|ぎん|Bạc], [銅|どうぞ|Đồng]."
    },
    {
      id: 23,
      section: "Mondai 2",
      question: "[とけい]。",
      options: ["時計", "図計", "特急", "特計"],
      answer: "時計",
      explain: "✅ [時計|とけい|Đồng hồ].\n❌ [特急|とっきゅう|Tàu tốc hành], [図計||Sai Kanji]."
    },
    {
      id: 24,
      section: "Mondai 2",
      question: "[かばん]。",
      options: ["鞄", "革", "靴", "袋"],
      answer: "鞄",
      explain: "✅ [鞄|かばん|Cặp/Túi sách].\n❌ [革|かわ|Da], [靴|くつ|Giày], [袋|ふくろ|Túi/Bao]."
    },
    {
      id: 25,
      section: "Mondai 2",
      question: "[てーぷれこーだー]。",
      options: ["テープレコーダー", "テプレコダ", "テープレコ", "デープ"],
      answer: "テープレコーダー",
      explain: "✅ [テープレコーダー||Máy ghi âm].\n❌ Katakana dài phải chú ý trường âm 'ー'."
    },
    // Mondai 3: Context (10 questions)
    {
      id: 26,
      section: "Mondai 3",
      question: "これは　（　　）ですか。 ...本です。",
      options: ["なん", "なに", "だれ", "どれ"],
      answer: "なん",
      explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng khi đứng độc lập hoặc trước trợ từ wo/ga], [だれ||Ai], [どれ||Cái nào]."
    },
    {
      id: 27,
      section: "Mondai 3",
      question: "（　　）本は　わたしのです。",
      options: ["この", "これ", "ここ", "こちら"],
      answer: "この",
      explain: "✅ [この] + Danh từ (Cuốn sách này...).\n❌ [これ||Cái này - Đại từ], [ここ||Chỗ này], [こちら||Phía này]."
    },
    {
      id: 28,
      section: "Mondai 3",
      question: "それは　（　　）の　かさですか。",
      options: ["だれ", "なん", "どこ", "どれ"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai] -> Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [どれ||Cái nào]."
    },
    {
      id: 29,
      section: "Mondai 3",
      question: "この　とけいは　（　　）の　ですか。",
      options: ["わたし", "わたしの", "あなた", "だれ"],
      answer: "わたし",
      explain: "✅ [私|わたし|Tôi] -> Watashi no (Của tôi).\n❌ [わたしの||Đã có 'no' sau ngoặc nên thành 'watashi no no' -> sai], [あなた||Bạn], [だれ||Ai]."
    },
    {
      id: 30,
      section: "Mondai 3",
      question: "（　　）に　ちがいます。",
      options: ["そう", "いいえ", "はい", "あ"],
      answer: "いいえ",
      explain: "✅ [いいえ||Không] -> Iie, chigaimasu (Không, nhầm rồi/không phải).\n❌ [そう||Đúng vậy], [はい||Vâng], [あ||A!]."
    },
    {
      id: 31,
      section: "Mondai 3",
      question: "これから　（　　）なります。",
      options: ["おせわに", "おせわ", "せわに", "せわ"],
      answer: "おせわに",
      explain: "✅ [お世話|せわ]に (Được giúp đỡ) -> Cụm từ cố định: Osewa ni narimasu.\n❌ Thiếu trợ từ 'ni' hoặc tiền tố 'o'."
    },
    {
      id: 32,
      section: "Mondai 3",
      question: "こちらは　（　　）さんです。",
      options: ["ミラー", "ミラーの", "ミラーに", "ミラーと"],
      answer: "ミラー",
      explain: "✅ Miller-san (Anh Miller).\n❌ Không cần trợ từ ở đây."
    },
    {
      id: 33,
      section: "Mondai 3",
      question: "（　　）から　来ました。",
      options: ["アメリカ", "アメリカに", "アメリカへ", "アメリカと"],
      answer: "アメリカ",
      explain: "✅ [アメリカ||Nước Mỹ] -> Đến từ Mỹ.\n❌ 'Kara' đi trực tiếp sau danh từ chỉ địa điểm, không cần trợ từ khác chen vào."
    },
    {
      id: 34,
      section: "Mondai 3",
      question: "（　　）は　なんですか。 ...45歳（さい）です。",
      options: ["おとし", "とし", "なんさい", "おいくつ"],
      answer: "おいくつ",
      explain: "✅ [おいくつ||Bao nhiêu tuổi - lịch sự].\n⚠️ [なんさい||Hỏi tuổi thông thường - ít lịch sự hơn], [おとし||Tuổi tác]."
    },
    {
      id: 35,
      section: "Mondai 3",
      question: "（　　）は　エンジニアです。",
      options: ["ミラーさん", "ミラー", "ミラーさま", "ミラーくん"],
      answer: "ミラーさん",
      explain: "✅ Miller-san (Anh Miller) - gọi người khác phải thêm san.\n❌ [ミラー||Gọi trống không - thất lễ], [ミラーさま||Quá trang trọng], [ミラーくん||Dùng cho nam ít tuổi hơn/ngang hàng]."
    },

    // Mondai 1 continued: Reading (23 more questions - ids 36-58)
    {
      id: 36,
      section: "Mondai 1",
      question: "[会社]員です。",
      options: ["かいしゃ", "がいしゃ", "かいさ", "かいしや"],
      answer: "かいしゃ",
      explain: "✅ [会社|かいしゃ|Công ty].\n❌ [がいしゃ||sai tenten], [かいさ||thiếu sha], [かいしや||đọc tách rời]."
    },
    {
      id: 37,
      section: "Mondai 1",
      question: "[学校]で勉強します。",
      options: ["がっこう", "がこう", "かっこう", "がくこう"],
      answer: "がっこう",
      explain: "✅ [学校|がっこう|Trường học].\n❌ [がこう||thiếu âm ngắt], [かっこう||Kakkou - Con chim cu], [がくこう||đọc riêng từng chữ]."
    },
    {
      id: 38,
      section: "Mondai 1",
      question: "日本[語]を勉強します。",
      options: ["ご", "こ", "ぞ", "しゃ"],
      answer: "ご",
      explain: "✅ [語|ご|Ngữ/Tiếng].\n❌ [こ||Go/Ko - Tử], [ぞ||sai âm đục], [しゃ||sai âm]."
    },
    {
      id: 39,
      section: "Mondai 1",
      question: "[何]ですか。",
      options: ["なん", "なに", "かん", "が"],
      answer: "なん",
      explain: "✅ [何|なん|Cái gì] - Nan desu ka.\n❌ [なに||Nani - dùng trước を/が], [かん||sai âm], [が||sai]."
    },
    {
      id: 40,
      section: "Mondai 1",
      question: "[誰]のですか。",
      options: ["だれ", "だい", "たれ", "どなた"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai].\n❌ [どなた||Lịch sự hơn - Vị nào], [だい||sai], [たれ||sai âm đầu]."
    },
    {
      id: 41,
      section: "Mondai 1",
      question: "[本]を読みます。",
      options: ["ほん", "ぼん", "ぽん", "もと"],
      answer: "ほん",
      explain: "✅ [本|ほん|Sách].\n❌ [ぼん/ぽん||sai biến âm], [もと||Căn bản - âm Kunyomi]."
    },
    {
      id: 42,
      section: "Mondai 1",
      question: "[友達]と話します。",
      options: ["ともだち", "ゆうたつ", "ともたち", "とうだち"],
      answer: "ともだち",
      explain: "✅ [友達|ともだち|Bạn bè].\n❌ [ゆうたつ||đọc theo âm On], [ともたち||sai âm đục], [とうだち||sai trường âm]."
    },
    {
      id: 43,
      section: "Mondai 1",
      question: "[自動車]を運転します。",
      options: ["じどうしゃ", "じとうしゃ", "しどうしゃ", "じどしゃ"],
      answer: "じどうしゃ",
      explain: "✅ [自動車|じどうしゃ|Ô tô].\n❌ [じとうしゃ||thiếu đô], [しどうしゃ||sai âm ji/shi], [じどしゃ||thiếu trường âm]."
    },
    {
      id: 44,
      section: "Mondai 1",
      question: "[自転車]に乗ります。",
      options: ["じてんしゃ", "じでんしゃ", "してんしゃ", "じてしゃ"],
      answer: "じてんしゃ",
      explain: "✅ [自転車|じてんしゃ|Xe đạp].\n❌ [じでんしゃ||sai âm ten], [してんしゃ||sai âm ji/shi], [じてしゃ||thiếu ten]."
    },
    {
      id: 45,
      section: "Mondai 1",
      question: "[何歳]ですか。",
      options: ["なんさい", "なにさい", "なんせい", "なさい"],
      answer: "なんさい",
      explain: "✅ [何歳|なんさい|Mấy tuổi].\n❌ [なにさい||đọc Nani sai], [なんせい||Nan sei - Nam tính], [なさい||Hãy làm (mệnh lệnh)]."
    },
    {
      id: 46,
      section: "Mondai 1",
      question: "[今日]は。",
      options: ["きょう", "こんにち", "いま", "きょお"],
      answer: "きょう",
      explain: "✅ [今日|きょう|Hôm nay] - đọc đặc biệt.\n❌ [こんにち||trong Kon-nichi-wa], [いま||Bây giờ], [きょお||sai trường âm]."
    },
    {
      id: 47,
      section: "Mondai 1",
      question: "[明日]テストがあります。",
      options: ["あした", "みょうにち", "あす", "めいじつ"],
      answer: "あした",
      explain: "✅ [明日|あした|Ngày mai] - đọc phổ biến.\n⚠️ [あす||Cũng đúng nhưng ít dùng], [みょうにち||đọc âm On], [めいじつ||sai]."
    },
    {
      id: 48,
      section: "Mondai 1",
      question: "[今]何時ですか。",
      options: ["いま", "こん", "きん", "ま"],
      answer: "いま",
      explain: "✅ [今|いま|Bây giờ].\n❌ [こん||trong [今日|こんにち]], [きん||Kim - Vàng], [ま||sai]."
    },
    {
      id: 49,
      section: "Mondai 1",
      question: "[英語]の先生。",
      options: ["えいご", "えご", "えいこ", "いご"],
      answer: "えいご",
      explain: "✅ [英語|えいご|Tiếng Anh].\n❌ [えご||thiếu i], [えいこ||Vinh quang], [いご||Cờ vây]."
    },
    {
      id: 50,
      section: "Mondai 1",
      question: "[車]で行きます。",
      options: ["くるま", "しゃ", "くろま", "くら"],
      answer: "くるま",
      explain: "✅ [車|くるま|Xe].\n❌ [しゃ||âm On trong 自動車], [くろま||sai], [くら||Kho]."
    },
    {
      id: 51,
      section: "Mondai 1",
      question: "[机]の上。",
      options: ["つくえ", "き", "つくい", "づくえ"],
      answer: "つくえ",
      explain: "✅ [机|つくえ|Cái bàn].\n❌ [き||Cây - Ki], [つくい||sai], [づくえ||sai âm đục]."
    },
    {
      id: 52,
      section: "Mondai 1",
      question: "[椅子]に座ります。",
      options: ["いす", "いし", "ちす", "えす"],
      answer: "いす",
      explain: "✅ [椅子|いす|Ghế].\n❌ [いし||Đá - Ishi], [ちす||sai âm], [えす||S]."
    },
    {
      id: 53,
      section: "Mondai 1",
      question: "[部屋]に入ります。",
      options: ["へや", "ぶおく", "べや", "ぶや"],
      answer: "へや",
      explain: "✅ [部屋|へや|Phòng].\n❌ [ぶおく||đọc theo âm On], [べや||sai tenten], [ぶや||sai âm]."
    },
    {
      id: 54,
      section: "Mondai 1",
      question: "[食堂]で食べます。",
      options: ["しょくどう", "しょくとう", "しよくどう", "しどう"],
      answer: "しょくどう",
      explain: "✅ [食堂|しょくどう|Nhà ăn/Căng tin].\n❌ [しょくとう||sai biến âm], [しよくどう||thiếu chữ nhỏ], [しどう||Shidou - Chỉ đạo]."
    },
    {
      id: 55,
      section: "Mondai 1",
      question: "[図書館]で勉強します。",
      options: ["としょかん", "ずしょかん", "としかん", "としょがん"],
      answer: "としょかん",
      explain: "✅ [図書館|としょかん|Thư viện].\n❌ [ずしょかん||sai âm đầu], [としかん||thiếu sho], [としょがん||sai âm đục]."
    },
    {
      id: 56,
      section: "Mondai 1",
      question: "[郵便局]へ行きます。",
      options: ["ゆうびんきょく", "ゆびんきょく", "ゆうびんきよく", "ゆうべんきょく"],
      answer: "ゆうびんきょく",
      explain: "✅ [郵便局|ゆうびんきょく|Bưu điện].\n❌ [ゆびんきょく||thiếu trường âm], [ゆうびんきよく||thiếu chữ nhỏ], [ゆうべんきょく||sai âm bin/ben]."
    },
    {
      id: 57,
      section: "Mondai 1",
      question: "日本[円]です。",
      options: ["えん", "えい", "まる", "よ"],
      answer: "えん",
      explain: "✅ [円|えん|Yên - đơn vị tiền tệ].\n❌ [えい||Vinh], [まる||Tròn], [よ||4 - Yon]."
    },
    {
      id: 58,
      section: "Mondai 1",
      question: "[時計]を見ます。",
      options: ["とけい", "じけい", "ときえ", "どけい"],
      answer: "とけい",
      explain: "✅ [時計|とけい|Đồng hồ].\n❌ [じけい||Thời kỳ], [ときえ||sai], [どけい||sai âm đục]."
    },

    // Mondai 2 continued: Writing (22 more questions - ids 59-80)
    {
      id: 59,
      section: "Mondai 2",
      question: "[かいしゃ]で働きます。",
      options: ["会社", "会者", "開社", "海社"],
      answer: "会社",
      explain: "✅ [かいしゃ] → [会社|Công ty].\n❌ [会者||sai Kanji Sha], [開社||Khai xã], [海社||sai Kanji]."
    },
    {
      id: 60,
      section: "Mondai 2",
      question: "[がっこう]へ行きます。",
      options: ["学校", "学交", "学効", "楽校"],
      answer: "学校",
      explain: "✅ [がっこう] → [学校|Trường học].\n❌ [学交||sai Kanji], [学効||sai Kanji], [楽校||sai Kanji Gaku]."
    },
    {
      id: 61,
      section: "Mondai 2",
      question: "[にほんご]の授業。",
      options: ["日本語", "日本後", "二本語", "日本五"],
      answer: "日本語",
      explain: "✅ [にほんご] → [日本語|Tiếng Nhật].\n❌ [日本後||後 - Sau], [二本語||Hai cây], [日本五||5]."
    },
    {
      id: 62,
      section: "Mondai 2",
      question: "[なん]ですか。",
      options: ["何", "南", "難", "名"],
      answer: "何",
      explain: "✅ [なん] → [何|Cái gì].\n❌ [南||Nam - Minami], [難||Nan - Khó], [名||Tên - Mei]."
    },
    {
      id: 63,
      section: "Mondai 2",
      question: "[だれ]の傘ですか。",
      options: ["誰", "多", "堕", "唾"],
      answer: "誰",
      explain: "✅ [だれ] → [誰|Ai].\n❌ [多||Đa - Nhiều], [堕||Đọa - Rơi xuống], [唾||Đa - Nước bọt]."
    },
    {
      id: 64,
      section: "Mondai 2",
      question: "[ほん]を買います。",
      options: ["本", "木", "体", "休"],
      answer: "本",
      explain: "✅ [ほん] → [本|Sách].\n❌ [木||Ki - Cây], [体||Karada - Cơ thể], [休||Yasu - Nghỉ]."
    },
    {
      id: 65,
      section: "Mondai 2",
      question: "[ともだち]と遊びます。",
      options: ["友達", "友逹", "友建", "朋達"],
      answer: "友達",
      explain: "✅ [ともだち] → [友達|Bạn bè].\n❌ [友逹||giống nhau nhưng sai bộ thủ], [友建||sai Kanji], [朋達||붕우 - Bằng hữu]."
    },
    {
      id: 66,
      section: "Mondai 2",
      question: "[じどうしゃ]。",
      options: ["自動車", "自道車", "字動車", "自同車"],
      answer: "自動車",
      explain: "✅ [じどうしゃ] → [自動車|Ô tô].\n❌ [自道車||Đường], [字動車||Chữ], [自同車||Đồng]."
    },
    {
      id: 67,
      section: "Mondai 2",
      question: "[じてんしゃ]。",
      options: ["自転車", "自天車", "自点車", "自展車"],
      answer: "自転車",
      explain: "✅ [じてんしゃ] → [自転車|Xe đạp].\n❌ [自天車||Trời], [自点車||Điểm], [自展車||Triển]."
    },
    {
      id: 68,
      section: "Mondai 2",
      question: "[なんさい]ですか。",
      options: ["何歳", "何才", "南歳", "難歳"],
      answer: "何歳",
      explain: "✅ [なんさい] → [何歳|Mấy tuổi].\n⚠️ [何才||Cũng đúng nhưng 歳 là chính thức hơn], [南歳||Nam], [難歳||Nan - Khó]."
    },
    {
      id: 69,
      section: "Mondai 2",
      question: "[きょう]は暑いです。",
      options: ["今日", "京", "教", "況"],
      answer: "今日",
      explain: "✅ [きょう] → [今日|Hôm nay] - đọc đặc biệt.\n❌ [京||Kyou - Kinh đô], [教||Kyou - Dạy], [況||sai]."
    },
    {
      id: 70,
      section: "Mondai 2",
      question: "[あした]テストです。",
      options: ["明日", "朝", "明月", "昨日"],
      answer: "明日",
      explain: "✅ [あした] → [明日|Ngày mai].\n❌ [朝||Asa - Sáng], [明月||Minh nguyệt], [昨日||Kinou - Hôm qua]."
    },
    {
      id: 71,
      section: "Mondai 2",
      question: "[いま]何時ですか。",
      options: ["今", "居", "去", "忌"],
      answer: "今",
      explain: "✅ [いま] → [今|Bây giờ].\n❌ [居||Kyo - Ở], [去||Kyo - Đi], [忌||Ki - Kỵ]."
    },
    {
      id: 72,
      section: "Mondai 2",
      question: "[えいご]を学びます。",
      options: ["英語", "栄語", "映語", "英後"],
      answer: "英語",
      explain: "✅ [えいご] → [英語|Tiếng Anh].\n❌ [栄語||Vinh ngữ], [映語||Ánh sáng], [英後||Sau]."
    },
    {
      id: 73,
      section: "Mondai 2",
      question: "[くるま]で帰ります。",
      options: ["車", "黒", "暗", "倉"],
      answer: "車",
      explain: "✅ [くるま] → [車|Xe].\n❌ [黒||Kuro - Đen], [暗||Kurai - Tối], [倉||Kura - Kho]."
    },
    {
      id: 74,
      section: "Mondai 2",
      question: "[つくえ]の引き出し。",
      options: ["机", "危", "肌", "木"],
      answer: "机",
      explain: "✅ [つくえ] → [机|Bàn].\n❌ [危||Ki - Nguy hiểm], [肌||Hada - Da], [木||Ki - Cây]."
    },
    {
      id: 75,
      section: "Mondai 2",
      question: "[いす]が壊れました。",
      options: ["椅子", "意子", "位子", "医師"],
      answer: "椅子",
      explain: "✅ [いす] → [椅子|Ghế].\n❌ [意子||Ý tử], [位子||Vị tử], [医師||Ishi - Bác sĩ]."
    },
    {
      id: 76,
      section: "Mondai 2",
      question: "[テレビ]を見ます。",
      options: ["TV/Television", "Radio", "Phone", "Computer"],
      answer: "TV/Television",
      explain: "✅ [テレビ] → Television (TV).\n❌ Radio ([ラジオ]), Phone ([電話|でんわ]), Computer ([コンピューター])."
    },
    {
      id: 77,
      section: "Mondai 2",
      question: "[ラジオ]を聞きます。",
      options: ["Radio", "TV", "Camera", "Recorder"],
      answer: "Radio",
      explain: "✅ [ラジオ] → Radio.\n❌ TV ([テレビ]), Camera ([カメラ]), Recorder ([レコーダー])."
    },
    {
      id: 78,
      section: "Mondai 2",
      question: "[カメラ]で撮ります。",
      options: ["Camera", "Camcorder", "Recorder", "Radio"],
      answer: "Camera",
      explain: "✅ [カメラ] → Camera (Máy ảnh).\n❌ Camcorder ([ビデオカメラ]), Recorder ([レコーダー]), Radio ([ラジオ])."
    },
    {
      id: 79,
      section: "Mondai 2",
      question: "[コンピューター]で仕事します。",
      options: ["Computer", "Printer", "Copier", "Fax"],
      answer: "Computer",
      explain: "✅ [コンピューター] → Computer (Máy tính).\n❌ Printer ([プリンター]), Copier ([コピー機|き]), Fax ([ファックス])."
    },
    {
      id: 80,
      section: "Mondai 2",
      question: "[ノート]に書きます。",
      options: ["Note/Vở", "Notebook PC", "Book", "Paper"],
      answer: "Note/Vở",
      explain: "✅ [ノート] → Note/Notebook (Vở).\n❌ Notebook PC ([ノートパソコン]), Book ([本|ほん]), Paper ([紙|かみ])."
    },

    // Mondai 3 continued: Grammar and Context (20 more questions - ids 81-100)
    {
      id: 81,
      section: "Mondai 3",
      question: "これ（　　）私の本です。",
      options: ["は", "が", "を", "に"],
      answer: "は",
      explain: "✅ [は] đánh dấu chủ ngữ 'これ'.\n❌ [が||nhấn mạnh chủ ngữ], [を||đối tượng], [に||điểm đến]."
    },
    {
      id: 82,
      section: "Mondai 3",
      question: "それは（　　）のですか。",
      options: ["だれ", "なん", "どこ", "いつ"],
      answer: "だれ",
      explain: "✅ [誰|だれ|Ai] → Của ai.\n❌ [なん||Cái gì], [どこ||Ở đâu], [いつ||Khi nào]."
    },
    {
      id: 83,
      section: "Mondai 3",
      question: "（　　）は何ですか。",
      options: ["あれ", "あの", "あそこ", "あちら"],
      answer: "あれ",
      explain: "✅ [あれ||Cái kia] - đại từ chỉ định.\n❌ [あの||+ danh từ], [あそこ||Chỗ kia], [あちら||Phía kia]."
    },
    {
      id: 84,
      section: "Mondai 3",
      question: "（　　）本は田中さんのです。",
      options: ["その", "それ", "そこ", "そちら"],
      answer: "その",
      explain: "✅ [その] + danh từ (Cuốn sách đó).\n❌ [それ||Cái đó - đại từ], [そこ||Đó - chỉ địa điểm], [そちら||Phía đó]."
    },
    {
      id: 85,
      section: "Mondai 3",
      question: "A: これは辞書ですか。\nB: はい、（　　）。",
      options: ["そうです", "ちがいます", "いいえ", "わかりません"],
      answer: "そうです",
      explain: "✅ [そうです||Đúng vậy] - trả lời khẳng định.\n❌ [ちがいます||Không phải], [いいえ||Không], [わかりません||Không biết]."
    },
    {
      id: 86,
      section: "Mondai 3",
      question: "A: それは雑誌ですか。\nB: いいえ、（　　）。",
      options: ["ちがいます", "そうです", "はい", "けっこうです"],
      answer: "ちがいます",
      explain: "✅ [違|ちが]います (Không phải/Sai rồi) - phủ định.\n❌ [そうです||Đúng], [はい||Vâng], [けっこうです||Được rồi]."
    },
    {
      id: 87,
      section: "Mondai 3",
      question: "田中さん（　　）会社員です。",
      options: ["も", "は", "が", "を"],
      answer: "も",
      explain: "✅ [も||Cũng] - khi câu trước đã nói ai đó là nhân viên công ty.\n❌ [は||chủ ngữ thông thường], [が||nhấn mạnh], [を||đối tượng]."
    },
    {
      id: 88,
      section: "Mondai 3",
      question: "A: ありがとうございます。\nB: （　　）。",
      options: ["どういたしまして", "すみません", "おねがいします", "しつれいします"],
      answer: "どういたしまして",
      explain: "✅ [どういたしまして||Không có chi].\n❌ [すみません||Xin lỗi], [お願いします||Nhờ vả], [失礼します||Xin phép]."
    },
    {
      id: 89,
      section: "Mondai 3",
      question: "これは（　　）本ですか。",
      options: ["なんの", "なに", "どの", "だれ"],
      answer: "なんの",
      explain: "✅ [何|なん]の (Sách gì/Loại sách nào).\n❌ [なに||Cái gì - không dùng trước の], [どの||Cái nào + danh từ], [だれ||Ai]."
    },
    {
      id: 90,
      section: "Mondai 3",
      question: "（　　）はいくらですか。",
      options: ["これ", "この", "ここ", "こちら"],
      answer: "これ",
      explain: "✅ [これ||Cái này] - đại từ chỉ định.\n❌ [この||+ danh từ], [ここ||Chỗ này], [こちら||Phía này]."
    },
    {
      id: 91,
      section: "Mondai 3",
      question: "鉛筆は（　　）ありますか。",
      options: ["どこに", "なんに", "だれに", "いつに"],
      answer: "どこに",
      explain: "✅ [どこに||Ở đâu] - hỏi vị trí.\n❌ [なんに||Cái gì - sai ngữ cảnh], [だれに||Cho ai], [いつに||Khi nào - sai trợ từ]."
    },
    {
      id: 92,
      section: "Mondai 3",
      question: "これは私（　　）カメラです。",
      options: ["の", "は", "も", "が"],
      answer: "の",
      explain: "✅ [の||Của] - chỉ sở hữu.\n❌ [は||chủ ngữ], [も||cũng], [が||chủ ngữ nhấn mạnh]."
    },
    {
      id: 93,
      section: "Mondai 3",
      question: "田中さんは（　　）人ですか。",
      options: ["どこの", "どこ", "なんの", "だれの"],
      answer: "どこの",
      explain: "✅ [どこの||Của đâu/Nước nào] - hỏi quốc tịch.\n❌ [どこ||Đâu - thiếu の], [なんの||Cái gì], [だれの||Của ai]."
    },
    {
      id: 94,
      section: "Mondai 3",
      question: "A: お名前は？\nB: 田中（　　）。",
      options: ["です", "だ", "は", "も"],
      answer: "です",
      explain: "✅ [です||Là/Ạ] - kết thúc lịch sự.\n❌ [だ||Không lịch sự], [は||chủ ngữ], [も||cũng]."
    },
    {
      id: 95,
      section: "Mondai 3",
      question: "（　　）は学生ですか、会社員ですか。",
      options: ["あの方", "あの人", "あなた", "だれ"],
      answer: "あの方",
      explain: "✅ [あの方|かた||Vị kia] - lịch sự nhất.\n⚠️ [あの人||Người kia - ít lịch sự hơn], [あなた||Bạn], [だれ||Ai]."
    },
    {
      id: 96,
      section: "Mondai 3",
      question: "これ、（　　）。",
      options: ["どうぞ", "はい", "いいえ", "すみません"],
      answer: "どうぞ",
      explain: "✅ [どうぞ||Xin mời/Của bạn đây] - tặng/đưa cho ai đó.\n❌ [はい||Vâng], [いいえ||Không], [すみません||Xin lỗi]."
    },
    {
      id: 97,
      section: "Mondai 3",
      question: "A: すみません。\nB: （　　）。",
      options: ["いいえ", "はい", "どういたしまして", "おねがいします"],
      answer: "いいえ",
      explain: "✅ [いいえ||Không sao/Không có gì] - đáp lại lời xin lỗi.\n❌ [はい||Vâng], [どういたしまして||Đáp lại cảm ơn], [お願いします||Nhờ vả]."
    },
    {
      id: 98,
      section: "Mondai 3",
      question: "（　　）から来ましたか。",
      options: ["どこ", "なん", "だれ", "いつ"],
      answer: "どこ",
      explain: "✅ [どこ||Đâu] - Đến từ đâu.\n❌ [なん||Cái gì], [だれ||Ai], [いつ||Khi nào]."
    },
    {
      id: 99,
      section: "Mondai 3",
      question: "お仕事は（　　）ですか。",
      options: ["なん", "どこ", "だれ", "いつ"],
      answer: "なん",
      explain: "✅ [何|なん||Cái gì] - Công việc là gì.\n❌ [どこ||Ở đâu], [だれ||Ai], [いつ||Khi nào]."
    },
    {
      id: 100,
      section: "Mondai 3",
      question: "初めまして。どうぞ（　　）お願いします。",
      options: ["よろしく", "おおきく", "ちいさく", "たかく"],
      answer: "よろしく",
      explain: "✅ [よろしく||Mong được giúp đỡ] - cụm từ cố định.\n❌ [おおきく||Lớn], [ちいさく||Nhỏ], [たかく||Cao/Đắt]."
    }
  ];




export const ALL_TESTS: Record<number, Question[]> = {
  1: TEST_1,
  2: TEST_2,
  3: TEST_3
};

export const GRAMMAR_TEST_1: Question[] = [
  {
    "id": 1,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 2,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 3,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 4,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 5,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 6,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 7,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 8,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 9,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 10,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 11,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 12,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 13,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 14,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 15,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 16,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 17,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 18,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 19,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 20,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 21,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 22,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 23,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 24,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 25,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 26,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 27,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 28,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 29,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 30,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 31,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 32,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 33,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 34,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 35,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 36,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 37,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 38,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 39,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 40,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 41,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 42,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 43,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 44,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 45,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 46,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 47,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 48,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 49,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 50,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 51,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 52,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 53,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 54,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 55,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 56,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 57,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 58,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 59,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 60,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 61,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 62,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 63,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 64,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 65,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 66,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 67,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 68,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 69,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 70,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 71,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 72,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 73,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 74,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 75,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 76,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 77,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 78,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 79,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 80,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 81,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 82,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 83,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 84,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 85,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 86,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 87,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 88,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 89,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 90,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 91,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 92,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  },
  {
    "id": 93,
    "section": "Mondai 2",
    "question": "わたしは　＿　＿　★　＿　へ　行きます。",
    "options": ["と", "スーパー", "母", "いっしょに"],
    "answer": "スーパー",
    "explain": "✅ [母|はは|Mẹ] [と||Với] [いっしょに||Cùng] [スーパー||Siêu thị] [へ||Đến] (Đi siêu thị cùng mẹ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> スーパー."
  },
  {
    "id": 94,
    "section": "Mondai 2",
    "question": "あの　店は　＿　＿　★　＿　です。",
    "options": ["有名", "で", "きれい", "な"],
    "answer": "きれい",
    "explain": "✅ [有名|ゆうめい|Nổi tiếng] [で||Và] [きれい||Đẹp] [な||Tính từ đuôi na] [店|みせ|Cửa hàng] (Cửa hàng nổi tiếng và đẹp).\nThứ tự: 1-2-3-4. Ngôi sao ở vị trí 3 -> きれい."
  },
  {
    "id": 95,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "けさ　わたしは　6時に　おきました。それから、公園（ 7 ）さんぽしました。",
    "options": ["へ", "を", "に", "が"],
    "answer": "を",
    "explain": "✅ [を||Trợ từ] - Dùng với động từ di chuyển [さんぽします||Đi dạo] để chỉ địa điểm đi dạo qua.\n❌ [へ||Hướng đến], [に||Đích đến], [が||Chủ ngữ]."
  },
  {
    "id": 96,
    "section": "Mondai 3",
    "text_context": "Dưới đây là một đoạn nhật ký.",
    "question": "さんぽの　あとで、レストランへ　いきました。（ 8 ）で　朝ごはんを　食べました。",
    "options": ["ここ", "そこ", "あそこ", "どこ"],
    "answer": "そこ",
    "explain": "✅ [そこ||Đó/Ở đó] - Nhắc lại địa điểm vừa nói ở câu trước (nhà hàng).\n❌ [ここ||Đây], [あそこ||Kia], [どこ||Đâu]."
  },
  {
    "id": 97,
    "section": "Mondai 1",
    "question": "わたしは　毎日　7時（　　）おきます。",
    "options": ["に", "を", "へ", "で"],
    "answer": "に",
    "explain": "✅ [に||vào lúc] - Trợ từ chỉ thời điểm cụ thể.\n❌ [を||đối tượng], [へ||hướng di chuyển], [で||tại - địa điểm hành động]."
  },
  {
    "id": 98,
    "section": "Mondai 1",
    "question": "きのうは　（　　）。",
    "options": ["あついでした", "あつかったです", "あついかったです", "あつかったでした"],
    "answer": "あつかったです",
    "explain": "✅ [暑|あつ|Nóng]かったです (Đã nóng) - Quá khứ của tính từ đuôi i [暑|あつ]い.\n❌ [あついでした||Sai - Adj-i không cộng deshita], [あついかったです||Thừa i trước katta], [あつかったでした||Dư deshita]."
  },
  {
    "id": 99,
    "section": "Mondai 1",
    "question": "図書館で　本を　（　　）ながら、CDを　ききます。",
    "options": ["よみ", "よむ", "よんで", "よみます"],
    "answer": "よみ",
    "explain": "✅ [読|よ|Đọc]み - Cấu trúc V-masu (bỏ masu) + nagara (vừa làm A vừa làm B).\n❌ [よむ||V-ru], [よんで||V-te], [よみます||V-masu]."
  },
  {
    "id": 100,
    "section": "Mondai 1",
    "question": "この　料理は　あまり　（　　）。",
    "options": ["おいしいです", "おいしくないです", "おいしいくありません", "おいしかったです"],
    "answer": "おいしくないです",
    "explain": "✅ [おいしくないです||Không ngon] - [あまり] đi với phủ định.\n❌ [おいしいです||Khẳng định], [おいしいくありません||Thừa i], [おいしかったです||Quá khứ khẳng định]."
  }
];

export const GRAMMAR_TEST_2: Question[] = [
  {
    "id": 1,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 2,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 3,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 4,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 5,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 6,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 7,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 8,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 9,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 10,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 11,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 12,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 13,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 14,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 15,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 16,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 17,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 18,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 19,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 20,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 21,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 22,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 23,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 24,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 25,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 26,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 27,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 28,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 29,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 30,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 31,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 32,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 33,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 34,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 35,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 36,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 37,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 38,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 39,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 40,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 41,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 42,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 43,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 44,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 45,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 46,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 47,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 48,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 49,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 50,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 51,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 52,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 53,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 54,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 55,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 56,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 57,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 58,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 59,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 60,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 61,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 62,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 63,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 64,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 65,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 66,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 67,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 68,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 69,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 70,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 71,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 72,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 73,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 74,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 75,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 76,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 77,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 78,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 79,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 80,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 81,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 82,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 83,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 84,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 85,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 86,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 87,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 88,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 89,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 90,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 91,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 92,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  },
  {
    "id": 93,
    "section": "Mondai 2",
    "question": "きのう　＿　＿　★　＿　を　買いました。",
    "options": ["花", "３本", "赤い", "の"],
    "answer": "花",
    "explain": "✅ [赤|あか|Đỏ]い [花|はな|Hoa] [を||Trợ từ] [３本|さんぼん|3 bông] (Mua 3 bông hoa đỏ).\nThứ tự: 3-1-4-2. Ngôi sao ở vị trí 3 -> 花."
  },
  {
    "id": 94,
    "section": "Mondai 2",
    "question": "誕生日に　父は　＿　＿　★　＿　れました。",
    "options": ["時計", "く", "私", "に"],
    "answer": "時計",
    "explain": "✅ [私|わたし|Tôi] [に||Cho] [時計|とけい|Đồng hồ] [を||Trợ từ] [く||Tặng] - Bố tặng đồng hồ cho tôi.\nThứ tự: 3-4-1-2. Wtashi ni Tokei o Kuremashita. Ngôi sao ở vị trí 3 -> 時計."
  },
  {
    "id": 95,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "田中さんへ。\nさっき　林さん（ 7 ）電話が　ありました。",
    "options": ["を", "が", "から", "で"],
    "answer": "から",
    "explain": "✅ [から||Từ] - Có điện thoại TỪ ai đó (Hayashi-san).\n❌ [を||Đối tượng], [が||Chủ ngữ], [で||Tại/Bằng]."
  },
  {
    "id": 96,
    "section": "Mondai 3",
    "text_context": "Tin nhắn để lại trên bàn.",
    "question": "林さんは　「あしたの　パーティーに　（ 8 ）」と　言いました。",
    "options": ["きません", "こないです", "いきません", "いかないです"],
    "answer": "いきません",
    "explain": "✅ [行|い|Đi]きません (Không đi - Ikimasen).\nLưu ý: Tiếng Việt nói 'không đến', nhưng tiếng Nhật khi rời xa vị trí hiện tại dùng 'Iku'. Hoặc nếu nói theo góc nhìn của người nói, họ đi đến bữa tiệc thì dùng Iku."
  },
  {
    "id": 97,
    "section": "Mondai 1",
    "question": "ここに　住所と　名前を　（　　）ください。",
    "options": ["かき", "かいて", "かく", "かいた"],
    "answer": "かいて",
    "explain": "✅ [書|か|Viết]いて (Hãy viết) - Cấu trúc V-te + kudasai.\n❌ [かき||Masu stem], [かく||Dictionary form], [かいた||Ta-form]."
  },
  {
    "id": 98,
    "section": "Mondai 1",
    "question": "おなかが　すきましたから、何か　（　　）たいです。",
    "options": ["たべる", "たべ", "たべて", "たべます"],
    "answer": "たべ",
    "explain": "✅ [食|た|Ăn]べ (Muốn ăn) - Cấu trúc V-masu (bỏ masu) + tai.\n❌ [たべる||V-ru], [たべて||V-te], [たべます||V-masu]."
  },
  {
    "id": 99,
    "section": "Mondai 1",
    "question": "ミラーさんは　今　電話を　（　　）います。",
    "options": ["かけ", "かけて", "かける", "かけた"],
    "answer": "かけて",
    "explain": "✅ [掛|か|Gọi]けて (Đang gọi) - Cấu trúc V-te + imasu (đang diễn ra).\n❌ [かけ||Masu stem], [かける||V-ru], [かけた||V-ta]."
  },
  {
    "id": 100,
    "section": "Mondai 1",
    "question": "日本は　ベトナムより　（　　）です。",
    "options": ["さむい", "さむくない", "さむくて", "さむかった"],
    "answer": "さむい",
    "explain": "✅ [寒|さむ|Lạnh]い - So sánh hơn: N1 wa N2 yori Adj.\n❌ [さむくない||Không lạnh], [さむくて||Lạnh và...], [さむかった||Đã lạnh]."
  }
];

export const GRAMMAR_TEST_3: Question[] = [
  {
    "id": 1,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 2,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 3,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 4,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 5,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 6,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 7,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 8,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 9,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 10,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 11,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 12,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 13,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 14,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 15,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 16,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 17,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 18,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 19,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 20,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 21,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 22,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 23,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 24,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 25,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 26,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 27,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 28,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 29,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 30,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 31,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 32,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 33,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 34,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 35,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 36,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 37,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 38,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 39,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 40,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 41,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 42,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 43,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 44,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 45,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 46,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 47,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 48,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 49,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 50,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 51,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 52,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 53,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 54,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 55,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 56,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 57,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 58,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 59,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 60,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 61,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 62,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 63,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 64,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 65,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 66,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 67,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 68,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 69,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 70,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 71,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 72,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 73,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 74,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 75,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 76,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 77,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 78,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 79,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 80,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 81,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 82,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 83,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 84,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 85,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 86,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 87,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 88,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 89,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 90,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 91,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 92,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  },
  {
    "id": 93,
    "section": "Mondai 2",
    "question": "Ａ：「いっしょに　帰りませんか。」\nＢ：「すみません。これから　＿　＿　★　＿　なりません。」",
    "options": ["と", "会わ", "友達", "に"],
    "answer": "会わ",
    "explain": "✅ [友達|ともだち|Bạn bè] [に||Với] [会|あ|Gặp]わ [なければ||Phải] - Phải đi gặp bạn.\nThứ tự: 3-4-2. Cấu trúc đầy đủ: Tomodachi ni awanakereba narimasen. (Awana - V-nai bỏ i + nakereba). Ngôi sao ở vị trí 3 -> 会わ."
  },
  {
    "id": 94,
    "section": "Mondai 2",
    "question": "この　料理は　＿　＿　★　＿　おいしいです。",
    "options": ["安く", "て", "とても", "て"],
    "answer": "て",
    "explain": "✅ [とても||Rất] [安|やす|Rẻ]く [て||Và] [おいしい||Ngon].\nThứ tự: 3-1-2-4. Yasukute (Rẻ và...). Ngôi sao ở vị trí 3 -> て."
  },
  {
    "id": 95,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "わたしの　しゅみは　絵を　（ 7 ）ことです。",
    "options": ["みる", "みった", "みて", "みます"],
    "answer": "みる",
    "explain": "✅ [見|み|Xem]る - Sở thích là việc gì đó: V-ru + koto desu.\n❌ [みった||Sai], [みて||V-te], [みます||V-masu]."
  },
  {
    "id": 96,
    "section": "Mondai 3",
    "text_context": "Đoạn văn về sở thích.",
    "question": "先週の　日曜日は　天気が　（ 8 ）から、山へ　行きました。",
    "options": ["いい", "よく", "よかった", "よくて"],
    "answer": "よかった",
    "explain": "✅ [よかった||Đã tốt/đẹp] - Vì thời tiết đẹp (Quá khứ của Ii là Yokatta) + Kara.\n❌ [いい||Hiện tại], [よく||Phó từ], [よくて||V-te]."
  },
  {
    "id": 97,
    "section": "Mondai 1",
    "question": "ここで　たばこを　（　　）ください。",
    "options": ["すわなくて", "すわないで", "すうないで", "すいません"],
    "answer": "すわないで",
    "explain": "✅ [吸|す|Hút]わないで (Xin đừng hút) - Cấu trúc V-nai + de kudasai.\n❌ [すわなくて||Không hút và...], [すうないで||Chia sai form], [すいません||Xin lỗi]."
  },
  {
    "id": 98,
    "section": "Mondai 1",
    "question": "日曜日　どこも　（　　）。",
    "options": ["いきませんでした", "いきないでした", "いかないでした", "いきくなかったです"],
    "answer": "いきませんでした",
    "explain": "✅ [行|い|Đi]きませんでした (Đã không đi đâu cả) - Wh-word + mo + Negative Past.\n❌ [いきないでした||Chia sai form], [いかないでした||Chia sai form], [いきくなかったです||Chia sai form]."
  },
  {
    "id": 99,
    "section": "Mondai 1",
    "question": "わたしは　ピアノを　ひく　こと（　　）できます。",
    "options": ["を", "が", "に", "も"],
    "answer": "が",
    "explain": "✅ [が||Trợ từ] - Cấu trúc Koto ga dekimasu (Có thể làm gì).\n❌ [を||Trợ từ], [に||Trợ từ], [も||Không dùng trong cấu trúc này]."
  },
  {
    "id": 100,
    "section": "Mondai 1",
    "question": "寝る　（　　）、お祈りを　します。",
    "options": ["まえに", "あとで", "まえ", "とき"],
    "answer": "まえに",
    "explain": "✅ [前|まえ||Trước]に (Trước khi) - V-ru + mae ni.\n❌ [あとで||Sau khi - phải là V-ta], [まえ||Thiếu ni], [とき||Khi]."
  }
];

export const ALL_GRAMMAR_TESTS: Record<number, Question[]> = {
  1: GRAMMAR_TEST_1,
  2: GRAMMAR_TEST_2,
  3: GRAMMAR_TEST_3
};
