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
  }
];



export const TEST_2: Question[] = [
  // User provided data
  { id: 1, section: "Mondai 1", question: "それは<u>本</u>です。", options: ["ほん", "ぼん", "ぽん", "もと"], answer: "ほん", explain: "✅ [本|ほん|Sách].\n❌ [ぼん], [ぽん||sai biến âm], [もと||Căn bản/Gốc]." },
  { id: 2, section: "Mondai 1", question: "<u>辞書</u>を借ります。", options: ["じしょ", "ずしょ", "じしょう", "ちしょ"], answer: "じしょ", explain: "✅ [辞書|じしょ|Từ điển].\n❌ [ずしょ||sai âm đầu], [じしょう||sai trường âm], [ちしょ||sai âm đầu]." },
  { id: 3, section: "Mondai 1", question: "<u>雑誌</u>を読みます。", options: ["ざっし", "ざし", "さっし", "ぞうし"], answer: "ざっし", explain: "✅ [雑誌|ざっし|Tạp chí].\n❌ [ざし||thiếu âm ngắt], [さっし||Sasshi - Quyển sách nhỏ/Pamphlet], [ぞうし||Zoushi - Tạp sử]." },
  { id: 4, section: "Mondai 1", question: "<u>新聞</u>を買います。", options: ["しんぶん", "しんもん", "しんぷん", "ちんぶん"], answer: "しんぶん", explain: "✅ [新聞|しんぶん|Báo].\n❌ [しんもん||Shinmon - Thẩm vấn], [しんぷん||sai handakuon], [ちんぶん||Chinbun - tin lạ]." },
  { id: 5, section: "Mondai 1", question: "<u>手帳</u>に書きます。", options: ["てちょう", "てちょ", "でちょう", "しゅちょう"], answer: "てちょう", explain: "✅ [手帳|てちょう|Sổ tay].\n❌ [てちょ||thiếu trường âm], [でちょう||sai tenten], [しゅちょう||Shuchou - Chủ trương]." },
  { id: 6, section: "Mondai 1", question: "<u>名刺</u>交換。", options: ["めいし", "めし", "なまえ", "めいじ"], answer: "めいし", explain: "✅ [名刺|めいし|Danh thiếp].\n❌ [めし||Cơm - suồng sã], [なまえ||Tên], [めいじ||Minh Trị]." },
  { id: 7, section: "Mondai 1", question: "<u>鉛筆</u>削り。", options: ["えんぴつ", "えんびつ", "えんひつ", "なまりふで"], answer: "えんぴつ", explain: "✅ [鉛筆|えんぴつ|Bút chì].\n❌ [えんびつ||sai handakuon], [えんひつ||sai biến âm], [なまりふで||Kunyomi - Bút chì]." },
  { id: 8, section: "Mondai 1", question: "<u>英語</u>の本。", options: ["えいご", "えご", "えいこ", "いご"], answer: "えいご", explain: "✅ [英語|えいご|Tiếng Anh].\n❌ [えご||Ego - Cái tôi], [えいこ||Vinh quang], [いご||Cờ vây]." },
  { id: 9, section: "Mondai 1", question: "<u>何歳</u>ですか。", options: ["なんさい", "なにさい", "なんせい", "いくさい"], answer: "なんさい", explain: "✅ [何歳|なんさい|Mấy tuổi].\n❌ [なにさい||đọc sai Nani], [なんせい||Nam tính?], [いくさい||đọc sai Iku]." },
  { id: 10, section: "Mondai 1", question: "<u>教師</u>です。", options: ["きょうし", "きょし", "きょうす", "きゅうし"], answer: "きょうし", explain: "✅ [教師|きょうし|Giáo viên - nghề nghiệp].\n❌ [きょし||thiếu trường âm], [きょうす||đọc sai shi->su], [きゅうし||Cấp cứu/Nghỉ ngơi]." },
  { id: 11, section: "Mondai 1", question: "あの<u>人</u>はだれですか。", options: ["ひと", "じん", "にん", "かた"], answer: "ひと", explain: "✅ [人|ひと|Người - chỉ người nói chung].\n❌ [じん||Người nước ~], [にん||Đếm người], [かた||Vị - lịch sự]." },
  { id: 12, section: "Mondai 2", question: "<u>かぎ</u>を閉める。", options: ["鍵", "金", "鎖", "銀"], answer: "鍵", explain: "✅ [鍵|かぎ|Chìa khóa].\n❌ [金|きん|Vàng], [鎖|くさり|Cái xích], [銀|ぎん|Bạc]." },
  { id: 13, section: "Mondai 2", question: "<u>とけい</u>が壊れた。", options: ["時計", "土計", "時形", "斗計"], answer: "時計", explain: "✅ [時計|とけい|Đồng hồ].\n❌ [土計||sai Kanji], [時形||Thời hình?], [斗計||sai]." },
  { id: 14, section: "Mondai 2", question: "<u>かさ</u>をさす。", options: ["傘", "かざ", "から", "うみ"], answer: "傘", explain: "✅ [傘|かさ|Cái ô].\n❌ [かざ||Gió - Kaze? Hay sai biến âm?], [から||Trống rỗng], [うみ||Biển]." },
  { id: 15, section: "Mondai 2", question: "<u>くるま</u>を運転する。", options: ["車", "しゃ", "くろま", "くらま"], answer: "車", explain: "✅ [車|くるま|Xe ô tô].\n❌ [しゃ||âm On], [くろま/くらま||sai]." },
  { id: 16, section: "Mondai 2", question: "<u>つくえ</u>があります。", options: ["机", "肌", "木", "杭"], answer: "机", explain: "✅ [机|つくえ|Cái bàn].\n❌ [肌|はだ|Da], [木|き|Cây], [杭|くい|Cọc]." },
  { id: 17, section: "Mondai 2", question: "<u>いす</u>に座る。", options: ["椅子", "奇子", "位子", "伊豆"], answer: "椅子", explain: "✅ [椅子|いす|Cái ghế].\n❌ [奇子||Kiko?], [位子||Ishi?], [伊豆|いず|Địa danh Izu]." },
  { id: 18, section: "Mondai 2", question: "<u>かばん</u>を持つ。", options: ["鞄", "靴", "革", "包"], answer: "鞄", explain: "✅ [鞄|かばん|Cái cặp/túi].\n❌ [靴|くつ|Giày], [革|かわ|Da], [包|つつみ|Cái bọc]." },
  { id: 19, section: "Mondai 2", question: "<u>イタリア</u>料理。", options: ["Ý", "Tây Ban Nha", "Ấn Độ", "Indonesia"], answer: "Ý", explain: "✅ [イタリア||Italy - Nước Ý]." },
  { id: 20, section: "Mondai 2", question: "<u>イラン</u>。", options: ["Iran", "Iraq", "Ấn Độ", "Ai Cập"], answer: "Iran", explain: "✅ [イラン||Iran].\n⚠️ [イラク||Iraq]." },
  { id: 21, section: "Mondai 2", question: "<u>インドネシア</u>。", options: ["Indonesia", "Ấn Độ", "Malaysia", "Thái Lan"], answer: "Indonesia", explain: "✅ [インドネシア||Indonesia].\n⚠️ [インド||Ấn Độ]." },
  { id: 22, section: "Mondai 2", question: "<u>エジプト</u>。", options: ["Ai Cập", "Pháp", "Đức", "Nga"], answer: "Ai Cập", explain: "✅ [エジプト||Egypt - Ai Cập]." },
  { id: 23, section: "Mondai 2", question: "<u>オーストラリア</u>。", options: ["Úc", "Áo", "Mỹ", "Canada"], answer: "Úc", explain: "✅ [オーストラリア||Australia - Úc].\n⚠️ [オーストリア||Áo - Austria]." },
  { id: 24, section: "Mondai 2", question: "<u>カナダ</u>。", options: ["Canada", "Mỹ", "Campuchia", "Hàn Quốc"], answer: "Canada", explain: "✅ [カナダ||Canada]." },
  { id: 25, section: "Mondai 3", question: "A: ボールペンですか。\nB: いいえ、（　　　）。", options: ["ちがいます", "そうです", "けっこうです", "わかります"], answer: "ちがいます", explain: "✅ [違います|ちがいます|Không phải/Sai rồi].\n❌ [そうです||Đúng vậy], [けっこうです||Được rồi/Đủ dùng], [わかります||Hiểu rồi]." },
  { id: 26, section: "Mondai 3", question: "（　　　）は　辞書です。（Vật ở gần người nói）", options: ["これ", "それ", "あれ", "どれ"], answer: "これ", explain: "✅ [これ||Cái này - gần người nói].\n❌ [それ||Cái đó - gần người nghe], [あれ||Cái kia - xa cả 2], [どれ||Cái nào]." },
  { id: 27, section: "Mondai 3", question: "（　　　）かばんは　わたしのです。", options: ["その", "それ", "あれ", "あそこ"], answer: "その", explain: "✅ [その] + Danh từ (Cái ~ đó).\n❌ [それ||Đại từ chỉ định - đứng một mình], [あれ||Đại từ], [あそこ||Chỗ kia]." },
  { id: 28, section: "Mondai 3", question: "A: ありがとう。\nB: （　　　）。", options: ["どういたしまして", "はい", "そうです", "どうぞ"], answer: "どういたしまして", "explain": "✅ [どういたしまして||Không có chi].\n❌ [はい||Vâng], [そうです||Đúng vậy], [どうぞ||Xin mời]." },
  { id: 29, section: "Mondai 3", question: "これは　（　　　）気持ちです。", options: ["ほんの", "ほん", "ぼんの", "はんの"], answer: "ほんの", explain: "✅ [ほんの] + Danh từ (Chỉ là...).\n❌ [ほんの気持ち|ほんのきもち|Chút lòng thành]." },
  { id: 30, section: "Mondai 3", question: "これから　お（　　　）になります。", options: ["せわ", "げんき", "れい", "ねがい"], answer: "せわ", explain: "✅ [お世話|せわ]になります (Mong được giúp đỡ).\n❌ [元気|げんき|Khỏe], [礼|れい|Cảm ơn], [願い|ねがい|Cầu mong]." },
  { id: 31, section: "Mondai 3", question: "ワットさんは　（　　　）ですか。（Lịch sự）", options: ["どなた", "だれ", "なん", "どれ"], answer: "どなた", explain: "✅ [どなた||Vị nào - lịch sự].\n❌ [だれ||Ai - thông thường], [なん||Cái gì], [どれ||Cái nào]." },
  { id: 32, section: "Mondai 3", question: "これは　コンピューターの　（　　　）です。", options: ["ざっし", "えんぴつ", "かさ", "くるま"], answer: "ざっし", explain: "✅ [雑誌|ざっし|Tạp chí].\n❌ [えんぴつ||Bút chì], [かさ||Ô], [くるま||Xe]." },
  { id: 33, section: "Mondai 3", question: "（　　　）ようこそ。", options: ["日本へ", "日本に", "日本", "日本の"], answer: "日本へ", explain: "✅ [日本へ|にほんへ|Đến Nhật] -> Nihon e youkoso (Chào mừng đến Nhật).\n⚠️ [日本に||Ni thường chỉ sự tồn tại hoặc đích đến cố định, Youkoso thường dùng E]." },
  { id: 34, section: "Mondai 3", question: "サントスさんは　（　　　）ですか。", options: ["なんさい", "なん", "なに", "だれ"], answer: "なんさい", explain: "✅ [何歳|なんさい|Mấy tuổi].\n❌ [なん||Cái gì?], [なに||Cái gì?], [だれ||Ai?]." },
  { id: 35, section: "Mondai 3", question: "（　　　）、そうですか。", options: ["あ", "え", "お", "い"], answer: "あ", explain: "✅ [あ||À... - nhận ra điều gì].\n❌ [え||Hả?], [お||Ô], [い||Sai]." }
];

export const TEST_3: Question[] = [
  // Mondai 1: Topics - Professions, Family, Countries, Greetings
  {
    id: 1,
    section: "Mondai 1",
    question: "<u>医者</u>になりました。",
    options: ["いしゃ", "いさ", "いしゃう", "はしゃ"],
    answer: "いしゃ",
    explain: "✅ [医者|いしゃ|Bác sĩ].\n❌ [いさ], [いしゃう], [はしゃ] là các cách đọc sai."
  },
  {
    id: 2,
    section: "Mondai 1",
    question: "<u>研究者</u>。",
    options: ["けんきゅうしゃ", "けんきゅしゃ", "げんきゅうしゃ", "けんきゅうさ"],
    answer: "けんきゅうしゃ",
    explain: "✅ [研究者|けんきゅうしゃ|Nhà nghiên cứu].\n❌ [けんきゅしゃ||thiếu trường âm], [げんきゅうしゃ||sai âm G], [けんきゅうさ||sai đuôi sha]."
  },
  {
    id: 3,
    section: "Mondai 1",
    question: "<u>銀行員</u>。",
    options: ["ぎんこういん", "きんこういん", "ぎんこいん", "ぎんこうい"],
    answer: "ぎんこういん",
    explain: "✅ [銀行員|ぎんこういん|Nhân viên ngân hàng].\n❌ [きんこういん||sai K/G], [ぎんこいん||thiếu trường âm], [ぎんこうい||thiếu n]."
  },
  {
    id: 4,
    section: "Mondai 1",
    question: "<u>家族</u>写真。",
    options: ["かぞく", "かそく", "がぞく", "やぞく"],
    answer: "かぞく",
    explain: "✅ [家族|かぞく|Gia đình].\n❌ [かそく||thiếu tenten], [がぞく||thừa tenten], [やぞく||sai âm đầu]."
  },
  {
    id: 5,
    section: "Mondai 1",
    question: "<u>母</u>の日。",
    options: ["はは", "かあ", "ぼ", "も"],
    answer: "はは",
    explain: "✅ [母|はは|Mẹ - khi nói về mẹ mình].\n❌ [かあ||trong [お母さん|おかあさん]], [ぼ||âm On], [も||sai]."
  },
  {
    id: 6,
    section: "Mondai 1",
    question: "<u>父</u>の車。",
    options: ["ちち", "とう", "ふ", "とと"],
    answer: "ちち",
    explain: "✅ [父|ちち|Bố - khi nói về bố mình].\n❌ [とう||trong [お父さん|おとうさん]], [ふ||âm On], [とと||cách gọi trẻ con]."
  },
  {
    id: 7,
    section: "Mondai 1",
    question: "<u>私</u>の傘。",
    options: ["わたし", "わたくし", "あたし", "し"],
    answer: "わたし",
    explain: "✅ [私|わたし|Tôi].\n⚠️ [わたくし||Khiêm nhường ngữ], [あたし||Nữ tính], [し||âm On]."
  },
  {
    id: 8,
    section: "Mondai 1",
    question: "<u>失礼</u>します。",
    options: ["しつれい", "しつれ", "しっれい", "しちれい"],
    answer: "しつれい",
    explain: "✅ [失礼|しつれい|Thất lễ/Xin phép].\n❌ [しつれ||thiếu i], [しっれい||sai âm ngắt], [しちれい||sai âm tsu]."
  },
  {
    id: 9,
    section: "Mondai 1",
    question: "<u>初</u>めまして。",
    options: ["はじ", "はつ", "しょ", "ぞ"],
    answer: "はじ",
    explain: "✅ [初めまして|はじめまして|Rất vui được gặp bạn].\n❌ [はつ||Hatsu], [しょ||Sho], [ぞ||sai]."
  },
  {
    id: 10,
    section: "Mondai 1",
    question: "<u>名前</u>。",
    options: ["なまえ", "めいぜん", "なまい", "みょうじ"],
    answer: "なまえ",
    explain: "✅ [名前|なまえ|Tên].\n❌ [めいぜん||đọc theo On], [みょうじ||Họ], [なまい||sai]."
  },
  {
    id: 11,
    section: "Mondai 1",
    question: "<u>国</u>。",
    options: ["くに", "こく", "ぐに", "ごく"],
    answer: "くに",
    explain: "✅ [国|くに|Đất nước].\n❌ [こく||âm On trong [中国|ちゅうごく]], [ぐに||biến âm], [ごく||sai]."
  },
  {
    id: 12,
    section: "Mondai 1",
    question: "<u>元気</u>。",
    options: ["げんき", "てんき", "けんき", "もとき"],
    answer: "げんき",
    explain: "✅ [元気|げんき|Khỏe mạnh].\n❌ [てんき||[天気] Thời tiết], [けんき||sai tenten], [もとき||sai]."
  },

  // Mondai 2: Writing (Hiragana -> Kanji/Katakana)
  {
    id: 13,
    section: "Mondai 2",
    question: "[せんせい]。",
    options: ["先生", "先正", "前生", "専生"],
    answer: "先生",
    explain: "✅ [せんせい] -> [先生||Giáo viên].\n❌ [先正], [前生], [専生] là Kanji sai hoặc không có nghĩa."
  },
  {
    id: 14,
    section: "Mondai 2",
    question: "[がくせい]。",
    options: ["学生", "学正", "学校", "楽生"],
    answer: "学生",
    explain: "✅ [がくせい] -> [学生||Học sinh/Sinh viên].\n❌ [学校] là [がっこう||Trường học]. [学正], [楽生] sai Kanji."
  },
  {
    id: 15,
    section: "Mondai 2",
    question: "[だいがく]。",
    options: ["大学", "代学", "台学", "大楽"],
    answer: "大学",
    explain: "✅ [だいがく] -> [大学||Đại học].\n❌ [代学], [台学], [大楽] dùng sai Kanji."
  },
  {
    id: 16,
    section: "Mondai 2",
    question: "[びょういん]。",
    options: ["病院", "病員", "病院", "平院"],
    answer: "病院",
    explain: "✅ [びょういん] -> [病院||Bệnh viện].\n❌ [病員||sai chữ Viện], [平院||sai]."
  },
  {
    id: 17,
    section: "Mondai 2",
    question: "[でんき]。",
    options: ["電気", "電器", "天気", "元気"],
    answer: "電気",
    explain: "✅ [でんき] -> [電気||Điện/Đèn].\n❌ [電器||Đồ điện], [天気||[てんき] Thời tiết], [元気||[げんき] Khỏe]."
  },
  {
    id: 18,
    section: "Mondai 2",
    question: "[アメリカ]。",
    options: ["USA", "UK", "UAE", "USSR"],
    answer: "USA",
    explain: "✅ [アメリカ] -> Mỹ (USA).\n❌ UK (Anh - [イギリス]), UAE (Các tiểu vương quốc Ả rập), USSR (Liên xô cũ)."
  },
  {
    id: 19,
    section: "Mondai 2",
    question: "[フランス]。",
    options: ["Pháp", "Đức", "Nga", "Ý"],
    answer: "Pháp",
    explain: "✅ [フランス] -> Pháp (France).\n❌ Đức ([ドイツ]), Nga ([ロシア]), Ý ([イタリア])."
  },
  {
    id: 20,
    section: "Mondai 2",
    question: "[タイ]。",
    options: ["Thái Lan", "Đài Loan", "Trung Quốc", "Hàn Quốc"],
    answer: "Thái Lan",
    explain: "✅ [タイ] -> Thái Lan.\n❌ Đài Loan ([台湾|たいわん]), Trung Quốc ([中国|ちゅうごく]), Hàn Quốc ([韓国|かんこく])."
  },
  {
    id: 21,
    section: "Mondai 2",
    question: "[ベトナム]。",
    options: ["Việt Nam", "Lào", "Campuchia", "Myanmar"],
    answer: "Việt Nam",
    explain: "✅ [ベトナム] -> Việt Nam.\n❌ Lào ([ラオス]), Campuchia ([カンボジア]), Myanmar ([ミャンマー])."
  },
  {
    id: 22,
    section: "Mondai 2",
    question: "[ラジオ]。",
    options: ["Radio", "Tivi", "Máy tính", "Điện thoại"],
    answer: "Radio",
    explain: "✅ [ラジオ] -> Radio.\n❌ Tivi ([テレビ]), Máy tính ([コンピューター]), Điện thoại ([電話|でんわ])."
  },
  {
    id: 23,
    section: "Mondai 2",
    question: "[カメラ]。",
    options: ["Máy ảnh", "Máy quay", "Rùa", "Kẹo"],
    answer: "Máy ảnh",
    explain: "✅ [カメラ] -> Camera (Máy ảnh).\n❌ Rùa ([亀|かめ]), Kẹo ([飴|あめ])."
  },
  {
    id: 24,
    section: "Mondai 2",
    question: "[コンピューター]。",
    options: ["Máy tính", "Tivi", "Tủ lạnh", "Điều hòa"],
    answer: "Máy tính",
    explain: "✅ [コンピューター] -> Computer (Máy tính).\n❌ Tủ lạnh ([冷蔵庫|れいぞうこ]), Điều hòa ([エアコン])."
  },
  {
    id: 25,
    section: "Mondai 2",
    question: "[シャツ]。",
    options: ["Áo sơ mi", "Quần", "Giày", "Mũ"],
    answer: "Áo sơ mi",
    explain: "✅ [シャツ] -> Shirt (Áo sơ mi/Áo phông).\n❌ Quần ([ズボン]), Giày ([靴|くつ]), Mũ ([帽子|ぼうし])."
  },

  // Mondai 3: Context
  {
    id: 26,
    section: "Mondai 3",
    question: "わたし＿＿＿　学生です。",
    options: ["は", "の", "も", "が"],
    answer: "は",
    explain: "✅ [は] đánh dấu chủ ngữ [わたし].\n❌ [の||sở hữu], [も||cũng - dùng khi câu trước có cùng thông tin], [が||chủ ngữ - nhấn mạnh]."
  },
  {
    id: 27,
    section: "Mondai 3",
    question: "サントスさん＿＿＿　ブラジル人ですか。",
    options: ["も", "は", "の", "か"],
    answer: "は",
    explain: "✅ [は] đánh dấu chủ ngữ [サントスさん].\n❌ [も||cũng], [の||sở hữu], [か||cuối câu hỏi]."
  },
  {
    id: 28,
    section: "Mondai 3",
    question: "ミラーさん＿＿＿　IMCの社員です。",
    options: ["は", "の", "も", "か"],
    answer: "は",
    explain: "✅ [は] là trợ từ chủ ngữ.\n❌ [の] nối danh từ, [も] đồng tình, [か] nghi vấn."
  },
  {
    id: 29,
    section: "Mondai 3",
    question: "これは　わたし＿＿＿　本です。",
    options: ["の", "は", "も", "か"],
    answer: "の",
    explain: "✅ [の] chỉ sở hữu: Sách [của] tôi.\n❌ [は||chủ ngữ], [も||cũng], [か||hỏi]."
  },
  {
    id: 30,
    section: "Mondai 3",
    question: "このかさは　＿＿＿　ですか。",
    options: ["だれの", "だれ", "なん", "どれ"],
    answer: "だれの",
    explain: "✅ [だれの||Của ai?]. Câu hỏi về sở hữu.\n❌ [だれ||Ai?], [なん||Cái gì?], [どれ||Cái nào?]."
  },
  {
    id: 31,
    section: "Mondai 3",
    question: "あの方は　＿＿＿ですか。",
    options: ["どなた", "だれ", "なん", "どこ"],
    answer: "どなた",
    explain: "✅ [どなた||Vị nào?] là dạng lịch sự của [だれ]. Dùng với [あの方].\n❌ [だれ||suồng sã hơn], [なん||cái gì], [どこ||ở đâu]."
  },
  {
    id: 32,
    section: "Mondai 3",
    question: "＿＿＿　お名前は？",
    options: ["お", "ご", "み", "さん"],
    answer: "お",
    explain: "✅ [お] là tiền tố lịch sự thêm trước [名前|なまえ].\n❌ [ご||dùng cho từ gốc Hán 2 âm tiết], [み||kính ngữ thần thánh/hoàng gia], [さん||hậu tố]."
  },
  {
    id: 33,
    section: "Mondai 3",
    question: "初めまして。＿＿＿　来ました。",
    options: ["から", "まで", "に", "へ"],
    answer: "から",
    explain: "✅ [〜から来ました||Đến từ...].\n❌ [まで||đến], [に||tại/vào], [へ||hướng đến]."
  },
  {
    id: 34,
    section: "Mondai 3",
    question: "どうぞ　よろしく　お＿＿＿します。",
    options: ["ねがい", "ねがい", "ながい", "にがい"],
    answer: "ねがい",
    explain: "✅ Cụm từ cố định: [お願|ねが]いします (Onegaishimasu).\n❌ [ながい||Dài], [にがい||Đắng]."
  },
  {
    id: 35,
    section: "Mondai 3",
    question: "＿＿＿　違います。",
    options: ["いいえ", "はい", "ええ", "あの"],
    answer: "いいえ",
    explain: "✅ [いいえ||Không] -> Không, sai rồi.\n❌ [はい]/[ええ||Vâng/Ừ], [あの||À này]."
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
  }
];

export const ALL_GRAMMAR_TESTS: Record<number, Question[]> = {
  1: GRAMMAR_TEST_1,
  2: GRAMMAR_TEST_2,
  3: GRAMMAR_TEST_3
};
