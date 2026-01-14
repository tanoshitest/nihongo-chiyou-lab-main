export interface VocabularyTopic {
  id: string;
  name: string;
}

export interface VocabularyItem {
  id: number;
  word: string;
  hiragana: string;
  romaji: string;
  meaning: string;
  topicId: string;
  furigana?: { kanji: string; reading: string }[];
}

export const vocabularyTopics: VocabularyTopic[] = [
  {
    "id": "greetings",
    "name": "Chào hỏi & Giới thiệu bản thân"
  },
  {
    "id": "shopping",
    "name": "Mua sắm & Cửa hàng tiện lợi"
  },
  {
    "id": "food",
    "name": "Ẩm thực & Nhà hàng"
  },
  {
    "id": "traffic",
    "name": "Giao thông & Tàu điện"
  },
  {
    "id": "lifestyle",
    "name": "Nhà cửa & Đời sống hàng ngày"
  },
  {
    "id": "time_weather",
    "name": "Thời gian & Thời tiết"
  },
  {
    "id": "health",
    "name": "Sức khỏe & Bệnh viện"
  },
  {
    "id": "work",
    "name": "Công việc & Văn phòng"
  },
  {
    "id": "travel",
    "name": "Du lịch & Văn hóa"
  },
  {
    "id": "anime",
    "name": "Anime & Giải trí"
  },
  {
    "id": "other",
    "name": "Khác"
  }
];

export const vocabularyList: VocabularyItem[] = [
  {
    "id": 1,
    "word": "私",
    "hiragana": "わたし",
    "romaji": "watashi",
    "meaning": "Tôi",
    "topicId": "other"
  },
  {
    "id": 2,
    "word": "私たち",
    "hiragana": "わたしたち",
    "romaji": "watashitachi",
    "meaning": "Chúng tôi, chúng ta",
    "topicId": "other"
  },
  {
    "id": 3,
    "word": "あなた",
    "hiragana": "あなた",
    "romaji": "anata",
    "meaning": "Anh/chị, ông/bà, bạn (ngôi thứ II số ít)",
    "topicId": "greetings"
  },
  {
    "id": 4,
    "word": "あの人",
    "hiragana": "あのひと",
    "romaji": "ano hito",
    "meaning": "Người kia, người đó",
    "topicId": "greetings"
  },
  {
    "id": 5,
    "word": "あの方",
    "hiragana": "あのかた",
    "romaji": "ano kata",
    "meaning": "Người kia, người đó (lịch sự)",
    "topicId": "greetings"
  },
  {
    "id": 6,
    "word": "皆さん",
    "hiragana": "みなさん",
    "romaji": "minasan",
    "meaning": "Các anh chị, các ông bà, các bạn, quý vị",
    "topicId": "greetings"
  },
  {
    "id": 7,
    "word": "～さん",
    "hiragana": "～さん",
    "romaji": "~san",
    "meaning": "Anh, chị, ông, bà (hậu tố lịch sự)",
    "topicId": "greetings"
  },
  {
    "id": 8,
    "word": "～ちゃん",
    "hiragana": "～ちゃん",
    "romaji": "~chan",
    "meaning": "Hậu tố thêm vào sau tên của trẻ em",
    "topicId": "greetings"
  },
  {
    "id": 9,
    "word": "～君",
    "hiragana": "～くん",
    "romaji": "~kun",
    "meaning": "Hậu tố thêm vào sau tên của em trai",
    "topicId": "greetings"
  },
  {
    "id": 10,
    "word": "～人",
    "hiragana": "～じん",
    "romaji": "~jin",
    "meaning": "Người (nước) ~; ví dụ: アメリカじん - người Mỹ",
    "topicId": "greetings"
  },
  {
    "id": 11,
    "word": "先生",
    "hiragana": "せんせい",
    "romaji": "sensei",
    "meaning": "Thầy/cô (không dùng khi nói về nghề nghiệp của mình)",
    "topicId": "food"
  },
  {
    "id": 12,
    "word": "教師",
    "hiragana": "きょうし",
    "romaji": "kyoushi",
    "meaning": "Giáo viên",
    "topicId": "shopping"
  },
  {
    "id": 13,
    "word": "学生",
    "hiragana": "がくせい",
    "romaji": "gakusei",
    "meaning": "Học sinh, sinh viên",
    "topicId": "other"
  },
  {
    "id": 14,
    "word": "会社員",
    "hiragana": "かいしゃいん",
    "romaji": "kaishain",
    "meaning": "Nhân viên công ty",
    "topicId": "work"
  },
  {
    "id": 15,
    "word": "社員",
    "hiragana": "しゃいん",
    "romaji": "shain",
    "meaning": "Nhân viên Công ty ~ (dùng kèm theo tên công ty; ví dụ: IMCのしゃいん)",
    "topicId": "work"
  },
  {
    "id": 16,
    "word": "銀行員",
    "hiragana": "ぎんこういん",
    "romaji": "ginkouin",
    "meaning": "Nhân viên ngân hàng",
    "topicId": "work"
  },
  {
    "id": 17,
    "word": "医者",
    "hiragana": "いしゃ",
    "romaji": "isha",
    "meaning": "Bác sĩ",
    "topicId": "health"
  },
  {
    "id": 18,
    "word": "研究者",
    "hiragana": "けんきゅうしゃ",
    "romaji": "kenkyuusha",
    "meaning": "Nhà nghiên cứu",
    "topicId": "lifestyle"
  },
  {
    "id": 19,
    "word": "エンジニア",
    "hiragana": "エンジニア",
    "romaji": "enjinia",
    "meaning": "Kỹ sư",
    "topicId": "other"
  },
  {
    "id": 20,
    "word": "大学",
    "hiragana": "だいがく",
    "romaji": "daigaku",
    "meaning": "Đại học, trường đại học",
    "topicId": "other"
  },
  {
    "id": 21,
    "word": "病院",
    "hiragana": "びょういん",
    "romaji": "byouin",
    "meaning": "Bệnh viện",
    "topicId": "health"
  },
  {
    "id": 22,
    "word": "電気",
    "hiragana": "でんき",
    "romaji": "denki",
    "meaning": "Điện, đèn điện",
    "topicId": "traffic"
  },
  {
    "id": 23,
    "word": "だれ",
    "hiragana": "だれ",
    "romaji": "dare",
    "meaning": "Ai",
    "topicId": "other"
  },
  {
    "id": 24,
    "word": "どなた",
    "hiragana": "どなた",
    "romaji": "donata",
    "meaning": "Ai (lịch sự)",
    "topicId": "other"
  },
  {
    "id": 25,
    "word": "～歳",
    "hiragana": "～さい",
    "romaji": "~sai",
    "meaning": "~ tuổi",
    "topicId": "greetings"
  },
  {
    "id": 26,
    "word": "何歳",
    "hiragana": "なんさい",
    "romaji": "nansai",
    "meaning": "Mấy tuổi, bao nhiêu tuổi",
    "topicId": "greetings"
  },
  {
    "id": 27,
    "word": "おいくつ",
    "hiragana": "おいくつ",
    "romaji": "oikutsu",
    "meaning": "Mấy tuổi (lịch sự)",
    "topicId": "greetings"
  },
  {
    "id": 28,
    "word": "はい",
    "hiragana": "はい",
    "romaji": "hai",
    "meaning": "Vâng, dạ",
    "topicId": "other"
  },
  {
    "id": 29,
    "word": "いいえ",
    "hiragana": "いいえ",
    "romaji": "iie",
    "meaning": "Không",
    "topicId": "other"
  },
  {
    "id": 30,
    "word": "失礼ですが",
    "hiragana": "しつれいですが",
    "romaji": "shitsurei desu ga",
    "meaning": "Xin lỗi...",
    "topicId": "greetings"
  },
  {
    "id": 31,
    "word": "お名前は？",
    "hiragana": "おなまえは？",
    "romaji": "O-namae wa?",
    "meaning": "Tên bạn là gì?",
    "topicId": "other"
  },
  {
    "id": 32,
    "word": "初めまして",
    "hiragana": "はじめまして",
    "romaji": "hajimemashite",
    "meaning": "Rất hân hạnh được gặp anh/chị (Lời chào lần đầu gặp)",
    "topicId": "greetings"
  },
  {
    "id": 33,
    "word": "どうぞよろしく",
    "hiragana": "どうぞよろしく",
    "romaji": "Douzo yoroshiku",
    "meaning": "Rất hân hạnh được làm quen",
    "topicId": "time_weather"
  },
  {
    "id": 34,
    "word": "どうぞよろしくお願いします",
    "hiragana": "どうぞよろしくおねがいします",
    "romaji": "douzo yoroshiku onegaishimasu",
    "meaning": "Rất mong được sự giúp đỡ của anh/chị (lịch sự)",
    "topicId": "greetings"
  },
  {
    "id": 35,
    "word": "こちらは～さんです",
    "hiragana": "こちらは～さんです",
    "romaji": "Kochira wa ~san desu",
    "meaning": "Đây là anh/chị ~",
    "topicId": "greetings"
  },
  {
    "id": 36,
    "word": "～から来ました",
    "hiragana": "～からきました",
    "romaji": "~kara kimashita",
    "meaning": "(Tôi) đến từ ~",
    "topicId": "traffic"
  },
  {
    "id": 37,
    "word": "アメリカ",
    "hiragana": "アメリカ",
    "romaji": "Amerika",
    "meaning": "Mỹ",
    "topicId": "other"
  },
  {
    "id": 38,
    "word": "イギリス",
    "hiragana": "イギリス",
    "romaji": "Igirisu",
    "meaning": "Anh",
    "topicId": "greetings"
  },
  {
    "id": 39,
    "word": "イタリア",
    "hiragana": "イタリア",
    "romaji": "Itaria",
    "meaning": "Ý",
    "topicId": "other"
  },
  {
    "id": 40,
    "word": "イラン",
    "hiragana": "イラン",
    "romaji": "Iran",
    "meaning": "Iran",
    "topicId": "other"
  },
  {
    "id": 41,
    "word": "インド",
    "hiragana": "インド",
    "romaji": "Indo",
    "meaning": "Ấn Độ",
    "topicId": "other"
  },
  {
    "id": 42,
    "word": "インドネシア",
    "hiragana": "インドネシア",
    "romaji": "Indoneshia",
    "meaning": "Indonesia",
    "topicId": "other"
  },
  {
    "id": 43,
    "word": "エジプト",
    "hiragana": "エジプト",
    "romaji": "Ejiputo",
    "meaning": "Ai Cập",
    "topicId": "other"
  },
  {
    "id": 44,
    "word": "オーストラリア",
    "hiragana": "オーストラリア",
    "romaji": "Oosutoraria",
    "meaning": "Úc",
    "topicId": "other"
  },
  {
    "id": 45,
    "word": "カナダ",
    "hiragana": "カナダ",
    "romaji": "Kanada",
    "meaning": "Canada",
    "topicId": "other"
  },
  {
    "id": 46,
    "word": "韓国",
    "hiragana": "かんこく",
    "romaji": "Kankoku",
    "meaning": "Hàn Quốc",
    "topicId": "other"
  },
  {
    "id": 47,
    "word": "サウジアラビア",
    "hiragana": "サウジアラビア",
    "romaji": "Saujiarabia",
    "meaning": "Ả-rập Xê-út",
    "topicId": "other"
  },
  {
    "id": 48,
    "word": "シンガポール",
    "hiragana": "シンガポール",
    "romaji": "Shingapooru",
    "meaning": "Singapore",
    "topicId": "traffic"
  },
  {
    "id": 49,
    "word": "スペイン",
    "hiragana": "スペイン",
    "romaji": "Supein",
    "meaning": "Tây Ban Nha",
    "topicId": "other"
  },
  {
    "id": 50,
    "word": "タイ",
    "hiragana": "タイ",
    "romaji": "Tai",
    "meaning": "Thái Lan",
    "topicId": "other"
  },
  {
    "id": 51,
    "word": "中国",
    "hiragana": "ちゅうごく",
    "romaji": "Chuugoku",
    "meaning": "Trung Quốc",
    "topicId": "other"
  },
  {
    "id": 52,
    "word": "ドイツ",
    "hiragana": "ドイツ",
    "romaji": "Doitsu",
    "meaning": "Đức",
    "topicId": "other"
  },
  {
    "id": 53,
    "word": "日本",
    "hiragana": "にほん",
    "romaji": "Nihon",
    "meaning": "Nhật Bản",
    "topicId": "other"
  },
  {
    "id": 54,
    "word": "フランス",
    "hiragana": "フランス",
    "romaji": "Furansu",
    "meaning": "Pháp",
    "topicId": "other"
  },
  {
    "id": 55,
    "word": "フィリピン",
    "hiragana": "フィリピン",
    "romaji": "Firipin",
    "meaning": "Philippines",
    "topicId": "other"
  },
  {
    "id": 56,
    "word": "ブラジル",
    "hiragana": "ブラジル",
    "romaji": "Burajiru",
    "meaning": "Brazil",
    "topicId": "other"
  },
  {
    "id": 57,
    "word": "ベトナム",
    "hiragana": "ベトナム",
    "romaji": "Betonamu",
    "meaning": "Việt Nam",
    "topicId": "other"
  },
  {
    "id": 58,
    "word": "マレーシア",
    "hiragana": "マレーシア",
    "romaji": "Mareeshia",
    "meaning": "Malaysia",
    "topicId": "other"
  },
  {
    "id": 59,
    "word": "メキシコ",
    "hiragana": "メキシコ",
    "romaji": "Mekishiko",
    "meaning": "Mexico",
    "topicId": "other"
  },
  {
    "id": 60,
    "word": "ロシア",
    "hiragana": "ロシア",
    "romaji": "Roshia",
    "meaning": "Nga",
    "topicId": "traffic"
  },
  {
    "id": 61,
    "word": "アメリカ人",
    "hiragana": "アメリカじん",
    "romaji": "Amerikajin",
    "meaning": "Người Mỹ",
    "topicId": "greetings"
  },
  {
    "id": 62,
    "word": "イギリス人",
    "hiragana": "イギリスじん",
    "romaji": "Igirisujin",
    "meaning": "Người Anh",
    "topicId": "greetings"
  },
  {
    "id": 63,
    "word": "イタリア人",
    "hiragana": "イタリアじん",
    "romaji": "Itariajin",
    "meaning": "Người Ý",
    "topicId": "greetings"
  },
  {
    "id": 64,
    "word": "イラン人",
    "hiragana": "イランじん",
    "romaji": "Iranjin",
    "meaning": "Người Iran",
    "topicId": "greetings"
  },
  {
    "id": 65,
    "word": "インド人",
    "hiragana": "インドじん",
    "romaji": "Indojin",
    "meaning": "Người Ấn Độ",
    "topicId": "greetings"
  },
  {
    "id": 66,
    "word": "インドネシア人",
    "hiragana": "インドネシアじん",
    "romaji": "Indoneshiajin",
    "meaning": "Người Indonesia",
    "topicId": "greetings"
  },
  {
    "id": 67,
    "word": "エジプト人",
    "hiragana": "エジプトじん",
    "romaji": "Ejiputojin",
    "meaning": "Người Ai Cập",
    "topicId": "greetings"
  },
  {
    "id": 68,
    "word": "オーストラリア人",
    "hiragana": "オーストラリアじん",
    "romaji": "Oosutoraraiajin",
    "meaning": "Người Úc",
    "topicId": "greetings"
  },
  {
    "id": 69,
    "word": "カナダ人",
    "hiragana": "カナダじん",
    "romaji": "Kanadajin",
    "meaning": "Người Canada",
    "topicId": "greetings"
  },
  {
    "id": 70,
    "word": "韓国人",
    "hiragana": "かんこくじん",
    "romaji": "Kankokujin",
    "meaning": "Người Hàn Quốc",
    "topicId": "greetings"
  },
  {
    "id": 71,
    "word": "サウジアラビア人",
    "hiragana": "サウジアラビアじん",
    "romaji": "Saujiarabiajin",
    "meaning": "Người Ả-rập Xê-út",
    "topicId": "greetings"
  },
  {
    "id": 72,
    "word": "シンガポール人",
    "hiragana": "シンガポールじん",
    "romaji": "Shingapoorujin",
    "meaning": "Người Singapore",
    "topicId": "greetings"
  },
  {
    "id": 73,
    "word": "スペイン人",
    "hiragana": "スペインじん",
    "romaji": "Supeinjin",
    "meaning": "Người Tây Ban Nha",
    "topicId": "greetings"
  },
  {
    "id": 74,
    "word": "タイ人",
    "hiragana": "タイじん",
    "romaji": "Taijin",
    "meaning": "Người Thái Lan",
    "topicId": "greetings"
  },
  {
    "id": 75,
    "word": "中国人",
    "hiragana": "ちゅうごくじん",
    "romaji": "Chuugokujin",
    "meaning": "Người Trung Quốc",
    "topicId": "greetings"
  },
  {
    "id": 76,
    "word": "ドイツ人",
    "hiragana": "ドイツじん",
    "romaji": "Doitsujin",
    "meaning": "Người Đức",
    "topicId": "greetings"
  },
  {
    "id": 77,
    "word": "日本人",
    "hiragana": "にほんじん",
    "romaji": "Nihonjin",
    "meaning": "Người Nhật Bản",
    "topicId": "greetings"
  },
  {
    "id": 78,
    "word": "フランス人",
    "hiragana": "フランスじん",
    "romaji": "Furansujin",
    "meaning": "Người Pháp",
    "topicId": "greetings"
  },
  {
    "id": 79,
    "word": "フィリピン人",
    "hiragana": "フィリピンじん",
    "romaji": "Firipinjin",
    "meaning": "Người Philippines",
    "topicId": "greetings"
  },
  {
    "id": 80,
    "word": "ブラジル人",
    "hiragana": "ブラジルじん",
    "romaji": "Burajirujin",
    "meaning": "Người Brazil",
    "topicId": "greetings"
  },
  {
    "id": 81,
    "word": "ベトナム人",
    "hiragana": "ベトナムじん",
    "romaji": "Betonamujin",
    "meaning": "Người Việt Nam",
    "topicId": "greetings"
  },
  {
    "id": 82,
    "word": "マレーシア人",
    "hiragana": "マレーシアじん",
    "romaji": "Mareeshiajin",
    "meaning": "Người Malaysia",
    "topicId": "greetings"
  },
  {
    "id": 83,
    "word": "メキシコ人",
    "hiragana": "メキシコじん",
    "romaji": "Mekishikojin",
    "meaning": "Người Mexico",
    "topicId": "greetings"
  },
  {
    "id": 84,
    "word": "ロシア人",
    "hiragana": "ロシアじん",
    "romaji": "Roshiagin",
    "meaning": "Người Nga",
    "topicId": "greetings"
  },
  {
    "id": 85,
    "word": "英語",
    "hiragana": "えいご",
    "romaji": "Eigo",
    "meaning": "Tiếng Anh",
    "topicId": "greetings"
  },
  {
    "id": 86,
    "word": "イラン語",
    "hiragana": "イランご",
    "romaji": "Irango",
    "meaning": "Tiếng Ba Tư",
    "topicId": "other"
  },
  {
    "id": 87,
    "word": "インド語",
    "hiragana": "インドご",
    "romaji": "Indogo",
    "meaning": "Tiếng Ấn Độ",
    "topicId": "other"
  },
  {
    "id": 88,
    "word": "インドネシア語",
    "hiragana": "インドネシアご",
    "romaji": "Indoneshiago",
    "meaning": "Tiếng Indonesia",
    "topicId": "other"
  },
  {
    "id": 89,
    "word": "アラビア語",
    "hiragana": "アラビアご",
    "romaji": "Arabiago",
    "meaning": "Tiếng Ả-rập",
    "topicId": "other"
  },
  {
    "id": 90,
    "word": "フランス語",
    "hiragana": "フランスご",
    "romaji": "Furansugo",
    "meaning": "Tiếng Pháp",
    "topicId": "other"
  },
  {
    "id": 91,
    "word": "韓国語",
    "hiragana": "かんこくご",
    "romaji": "Kankokugo",
    "meaning": "Tiếng Hàn Quốc",
    "topicId": "other"
  },
  {
    "id": 92,
    "word": "イギリス語",
    "hiragana": "イギリスご",
    "romaji": "Igirisugo",
    "meaning": "Tiếng Anh (Anh)",
    "topicId": "greetings"
  },
  {
    "id": 93,
    "word": "イタリア語",
    "hiragana": "イタリアご",
    "romaji": "Itariago",
    "meaning": "Tiếng Ý",
    "topicId": "other"
  },
  {
    "id": 94,
    "word": "スペイン語",
    "hiragana": "スペインご",
    "romaji": "Supeingo",
    "meaning": "Tiếng Tây Ban Nha",
    "topicId": "other"
  },
  {
    "id": 95,
    "word": "タイ語",
    "hiragana": "タイご",
    "romaji": "Taigo",
    "meaning": "Tiếng Thái",
    "topicId": "other"
  },
  {
    "id": 96,
    "word": "中国語",
    "hiragana": "ちゅうごくご",
    "romaji": "Chuugokugo",
    "meaning": "Tiếng Trung Quốc",
    "topicId": "other"
  },
  {
    "id": 97,
    "word": "ドイツ語",
    "hiragana": "ドイツご",
    "romaji": "Doitsugo",
    "meaning": "Tiếng Đức",
    "topicId": "other"
  },
  {
    "id": 98,
    "word": "日本語",
    "hiragana": "にほんご",
    "romaji": "Nihongo",
    "meaning": "Tiếng Nhật",
    "topicId": "other"
  },
  {
    "id": 99,
    "word": "エジプト語",
    "hiragana": "エジプトご",
    "romaji": "Ejiputogo",
    "meaning": "Tiếng Ai Cập (Tiếng Ả Rập)",
    "topicId": "other"
  },
  {
    "id": 100,
    "word": "フィリピン語",
    "hiragana": "フィリピンご",
    "romaji": "Firipingo",
    "meaning": "Tiếng Philippines",
    "topicId": "other"
  },
  {
    "id": 101,
    "word": "ポルトガル語",
    "hiragana": "ポルトガルご",
    "romaji": "Porutogarugo",
    "meaning": "Tiếng Bồ Đào Nha",
    "topicId": "other"
  },
  {
    "id": 102,
    "word": "ベトナム語",
    "hiragana": "ベトナムご",
    "romaji": "Betonamugo",
    "meaning": "Tiếng Việt",
    "topicId": "other"
  },
  {
    "id": 103,
    "word": "オーストラリア語",
    "hiragana": "オーストラリアご",
    "romaji": "Oosutorariago",
    "meaning": "Tiếng Anh (Úc)",
    "topicId": "greetings"
  },
  {
    "id": 104,
    "word": "カナダ語",
    "hiragana": "カナダご",
    "romaji": "Kanadago",
    "meaning": "Tiếng Anh (Canada)",
    "topicId": "greetings"
  },
  {
    "id": 105,
    "word": "マレーシア語",
    "hiragana": "マレーシアご",
    "romaji": "Mareeshiago",
    "meaning": "Tiếng Mã Lai",
    "topicId": "other"
  },
  {
    "id": 106,
    "word": "ロシア語",
    "hiragana": "ロシアご",
    "romaji": "Roshiago",
    "meaning": "Tiếng Nga",
    "topicId": "traffic"
  },
  {
    "id": 107,
    "word": "さくら大学",
    "hiragana": "さくらだいがく",
    "romaji": "Sakura Daigaku",
    "meaning": "Đại học Sakura (tên trường giả tưởng)",
    "topicId": "other"
  },
  {
    "id": 108,
    "word": "富士大学",
    "hiragana": "ふじだいがく",
    "romaji": "Fuji Daigaku",
    "meaning": "Đại học Fuji (tên trường giả tưởng)",
    "topicId": "other"
  },
  {
    "id": 109,
    "word": "IMC",
    "hiragana": "IMC",
    "romaji": "IMC",
    "meaning": "IMC (tên công ty giả tưởng)",
    "topicId": "work"
  },
  {
    "id": 110,
    "word": "パワー電気",
    "hiragana": "パワーでんき",
    "romaji": "Pawaa Denki",
    "meaning": "Điện lực Power (tên công ty giả tưởng)",
    "topicId": "traffic"
  },
  {
    "id": 111,
    "word": "ブラジルエアー",
    "hiragana": "ブラジルエアー",
    "romaji": "Burajiru Eaa",
    "meaning": "Hãng hàng không Brazil (giả tưởng)",
    "topicId": "other"
  },
  {
    "id": 112,
    "word": "AKC",
    "hiragana": "AKC",
    "romaji": "AKC",
    "meaning": "AKC (tên tổ chức giả tưởng)",
    "topicId": "other"
  },
  {
    "id": 113,
    "word": "神戸病院",
    "hiragana": "こうべびょういん",
    "romaji": "Koube Byouin",
    "meaning": "Bệnh viện Kobe (giả tưởng)",
    "topicId": "health"
  },
  {
    "id": 114,
    "word": "これ",
    "hiragana": "これ",
    "romaji": "kore",
    "meaning": "cái này, đây (vật ở gần người nói)",
    "topicId": "greetings"
  },
  {
    "id": 115,
    "word": "それ",
    "hiragana": "それ",
    "romaji": "sore",
    "meaning": "cái đó, đó (vật ở gần người nghe)",
    "topicId": "greetings"
  },
  {
    "id": 116,
    "word": "あれ",
    "hiragana": "あれ",
    "romaji": "are",
    "meaning": "cái kia, kia (vật ở xa cả hai)",
    "topicId": "food"
  },
  {
    "id": 117,
    "word": "この",
    "hiragana": "この",
    "romaji": "kono",
    "meaning": "~ này (đứng trước danh từ)",
    "topicId": "greetings"
  },
  {
    "id": 118,
    "word": "その",
    "hiragana": "その",
    "romaji": "sono",
    "meaning": "~ đó (đứng trước danh từ)",
    "topicId": "greetings"
  },
  {
    "id": 119,
    "word": "あの",
    "hiragana": "あの",
    "romaji": "ano",
    "meaning": "~ kia (đứng trước danh từ)",
    "topicId": "greetings"
  },
  {
    "id": 120,
    "word": "本",
    "hiragana": "ほん",
    "romaji": "hon",
    "meaning": "sách",
    "topicId": "lifestyle"
  },
  {
    "id": 121,
    "word": "辞書",
    "hiragana": "じしょ",
    "romaji": "jisho",
    "meaning": "từ điển",
    "topicId": "traffic"
  },
  {
    "id": 122,
    "word": "雑誌",
    "hiragana": "ざっし",
    "romaji": "zasshi",
    "meaning": "tạp chí",
    "topicId": "other"
  },
  {
    "id": 123,
    "word": "新聞",
    "hiragana": "しんぶん",
    "romaji": "shinbun",
    "meaning": "báo",
    "topicId": "lifestyle"
  },
  {
    "id": 124,
    "word": "ノート",
    "hiragana": "ノート",
    "romaji": "no-to",
    "meaning": "vở",
    "topicId": "other"
  },
  {
    "id": 125,
    "word": "手帳",
    "hiragana": "てちょう",
    "romaji": "techo",
    "meaning": "sổ tay",
    "topicId": "health"
  },
  {
    "id": 126,
    "word": "名刺",
    "hiragana": "めいし",
    "romaji": "meishi",
    "meaning": "danh thiếp",
    "topicId": "greetings"
  },
  {
    "id": 127,
    "word": "カード",
    "hiragana": "カード",
    "romaji": "ka-do",
    "meaning": "thẻ",
    "topicId": "other"
  },
  {
    "id": 128,
    "word": "鉛筆",
    "hiragana": "えんぴつ",
    "romaji": "enpitsu",
    "meaning": "bút chì",
    "topicId": "other"
  },
  {
    "id": 129,
    "word": "ボールペン",
    "hiragana": "ボールペン",
    "romaji": "bo-rupen",
    "meaning": "bút bi",
    "topicId": "other"
  },
  {
    "id": 130,
    "word": "シャープペンシル",
    "hiragana": "シャープペンシル",
    "romaji": "sha-pupenshiru",
    "meaning": "bút chì kim",
    "topicId": "other"
  },
  {
    "id": 131,
    "word": "鍵",
    "hiragana": "かぎ",
    "romaji": "kagi",
    "meaning": "chìa khóa",
    "topicId": "lifestyle"
  },
  {
    "id": 132,
    "word": "時計",
    "hiragana": "とけい",
    "romaji": "tokei",
    "meaning": "đồng hồ",
    "topicId": "lifestyle"
  },
  {
    "id": 133,
    "word": "傘",
    "hiragana": "かさ",
    "romaji": "kasa",
    "meaning": "ô, dù",
    "topicId": "other"
  },
  {
    "id": 134,
    "word": "鞄",
    "hiragana": "かばん",
    "romaji": "kaban",
    "meaning": "túi xách, cặp",
    "topicId": "shopping"
  },
  {
    "id": 135,
    "word": "テレビ",
    "hiragana": "テレビ",
    "romaji": "terebi",
    "meaning": "tivi",
    "topicId": "lifestyle"
  },
  {
    "id": 136,
    "word": "ラジオ",
    "hiragana": "ラジオ",
    "romaji": "rajio",
    "meaning": "đài, radio",
    "topicId": "other"
  },
  {
    "id": 137,
    "word": "カメラ",
    "hiragana": "カメラ",
    "romaji": "kamera",
    "meaning": "máy ảnh",
    "topicId": "lifestyle"
  },
  {
    "id": 138,
    "word": "コンピューター",
    "hiragana": "コンピューター",
    "romaji": "kompyu-ta-",
    "meaning": "máy vi tính",
    "topicId": "lifestyle"
  },
  {
    "id": 139,
    "word": "車",
    "hiragana": "くるま",
    "romaji": "kuruma",
    "meaning": "xe ô tô",
    "topicId": "traffic"
  },
  {
    "id": 140,
    "word": "机",
    "hiragana": "つくえ",
    "romaji": "tsukue",
    "meaning": "cái bàn",
    "topicId": "food"
  },
  {
    "id": 141,
    "word": "椅子",
    "hiragana": "いす",
    "romaji": "isu",
    "meaning": "cái ghế",
    "topicId": "food"
  },
  {
    "id": 142,
    "word": "違います",
    "hiragana": "ちがいます",
    "romaji": "chigaimasu",
    "meaning": "không phải, sai rồi",
    "topicId": "other"
  },
  {
    "id": 143,
    "word": "あ、そうですか",
    "hiragana": "あ、そうですか",
    "romaji": "a, sou desu ka",
    "meaning": "ô thế à, vậy à (dùng khi nhận được thông tin mới)",
    "topicId": "other"
  },
  {
    "id": 144,
    "word": "あのう",
    "hiragana": "あのう",
    "romaji": "anou",
    "meaning": "ờ, à (dùng khi ngập ngừng, muốn bắt đầu câu chuyện)",
    "topicId": "health"
  },
  {
    "id": 145,
    "word": "ほんの気持ちです",
    "hiragana": "ほんのきもちです",
    "romaji": "honno kimochi desu",
    "meaning": "chút lòng thành thôi (dùng khi tặng quà)",
    "topicId": "travel"
  },
  {
    "id": 146,
    "word": "どうぞ",
    "hiragana": "どうぞ",
    "romaji": "douzo",
    "meaning": "xin mời",
    "topicId": "other"
  },
  {
    "id": 147,
    "word": "どうも",
    "hiragana": "どうも",
    "romaji": "doumo",
    "meaning": "cám ơn, chào (rất ngắn gọn)",
    "topicId": "greetings"
  },
  {
    "id": 148,
    "word": "これからお世話になります",
    "hiragana": "これからおせわになります",
    "romaji": "korekara osewa ni narimasu",
    "meaning": "từ nay tôi rất mong được sự giúp đỡ của anh/chị",
    "topicId": "greetings"
  },
  {
    "id": 149,
    "word": "こちらこそよろしく",
    "hiragana": "こちらこそよろしく",
    "romaji": "kochira koso yoroshiku",
    "meaning": "chính tôi cũng mong được sự giúp đỡ/được làm quen với anh/chị",
    "topicId": "greetings"
  },
  {
    "id": 150,
    "word": "チョコレート",
    "hiragana": "チョコレート",
    "romaji": "chokore-to",
    "meaning": "sô cô la",
    "topicId": "other"
  },
  {
    "id": 151,
    "word": "コーヒー",
    "hiragana": "コーヒー",
    "romaji": "ko-hi-",
    "meaning": "cà phê",
    "topicId": "food"
  },
  {
    "id": 152,
    "word": "お土産",
    "hiragana": "おみやげ",
    "romaji": "omiyage",
    "meaning": "quà tặng (quà đặc sản)",
    "topicId": "travel"
  },
  {
    "id": 153,
    "word": "～語",
    "hiragana": "～ご",
    "romaji": "~go",
    "meaning": "tiếng ~",
    "topicId": "other"
  },
  {
    "id": 154,
    "word": "何",
    "hiragana": "なん",
    "romaji": "nan",
    "meaning": "cái gì",
    "topicId": "food"
  },
  {
    "id": 155,
    "word": "そう",
    "hiragana": "そう",
    "romaji": "sou",
    "meaning": "như thế, đúng vậy",
    "topicId": "other"
  },
  {
    "id": 156,
    "word": "テレホンカード",
    "hiragana": "テレホンカード",
    "romaji": "terehon kaado",
    "meaning": "thẻ điện thoại",
    "topicId": "traffic"
  },
  {
    "id": 157,
    "word": "カセットテープ",
    "hiragana": "カセットテープ",
    "romaji": "kasetto teepu",
    "meaning": "băng cát-xét",
    "topicId": "food"
  },
  {
    "id": 158,
    "word": "テープレコーダー",
    "hiragana": "テープレコーダー",
    "romaji": "teepu rekoodaa",
    "meaning": "máy ghi âm",
    "topicId": "lifestyle"
  },
  {
    "id": 159,
    "word": "自動車",
    "hiragana": "じどうしゃ",
    "romaji": "jidousha",
    "meaning": "xe hơi, ô tô",
    "topicId": "traffic"
  },
  {
    "id": 160,
    "word": "結構です",
    "hiragana": "けっこうです",
    "romaji": "kekkou desu",
    "meaning": "đủ rồi, được rồi, không cần đâu",
    "topicId": "other"
  },
  {
    "id": 161,
    "word": "どういたしまして",
    "hiragana": "どういたしまして",
    "romaji": "dou itashimashite",
    "meaning": "không có chi, không có gì",
    "topicId": "other"
  },
  {
    "id": 162,
    "word": "ありがとうございます",
    "hiragana": "ありがとうございます",
    "romaji": "arigatou gozaimasu",
    "meaning": "cảm ơn (lịch sự)",
    "topicId": "greetings"
  },
  {
    "id": 163,
    "word": "佐藤",
    "hiragana": "さとう",
    "romaji": "satou",
    "meaning": "Sato (họ phổ biến)",
    "topicId": "other"
  },
  {
    "id": 164,
    "word": "鈴木",
    "hiragana": "すずき",
    "romaji": "suzuki",
    "meaning": "Suzuki (họ phổ biến)",
    "topicId": "other"
  },
  {
    "id": 165,
    "word": "田中",
    "hiragana": "たなか",
    "romaji": "tanaka",
    "meaning": "Tanaka (họ phổ biến)",
    "topicId": "other"
  },
  {
    "id": 166,
    "word": "山田",
    "hiragana": "やまだ",
    "romaji": "yamada",
    "meaning": "Yamada (họ phổ biến)",
    "topicId": "other"
  },
  {
    "id": 167,
    "word": "ここ",
    "hiragana": "ここ",
    "romaji": "koko",
    "meaning": "chỗ này, đây",
    "topicId": "other"
  },
  {
    "id": 168,
    "word": "そこ",
    "hiragana": "そこ",
    "romaji": "soko",
    "meaning": "chỗ đó, đó",
    "topicId": "other"
  },
  {
    "id": 169,
    "word": "あそこ",
    "hiragana": "あそこ",
    "romaji": "asoko",
    "meaning": "chỗ kia, kia",
    "topicId": "other"
  },
  {
    "id": 170,
    "word": "どこ",
    "hiragana": "どこ",
    "romaji": "doko",
    "meaning": "chỗ nào, đâu",
    "topicId": "other"
  },
  {
    "id": 171,
    "word": "こちら",
    "hiragana": "こちら",
    "romaji": "kochira",
    "meaning": "phía này, đằng này (lịch sự của ここ)",
    "topicId": "other"
  },
  {
    "id": 172,
    "word": "そちら",
    "hiragana": "そちら",
    "romaji": "sochira",
    "meaning": "phía đó, đằng đó (lịch sự của そこ)",
    "topicId": "other"
  },
  {
    "id": 173,
    "word": "あちら",
    "hiragana": "あちら",
    "romaji": "achira",
    "meaning": "phía kia, đằng kia (lịch sự của あそこ)",
    "topicId": "other"
  },
  {
    "id": 174,
    "word": "どちら",
    "hiragana": "どちら",
    "romaji": "dochira",
    "meaning": "phía nào, đằng nào (lịch sự của どこ)",
    "topicId": "other"
  },
  {
    "id": 175,
    "word": "教室",
    "hiragana": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaning": "lớp học, phòng học",
    "topicId": "lifestyle"
  },
  {
    "id": 176,
    "word": "食堂",
    "hiragana": "しょくどう",
    "romaji": "shokudou",
    "meaning": "nhà ăn",
    "topicId": "food"
  },
  {
    "id": 177,
    "word": "事務所",
    "hiragana": "じむしょ",
    "romaji": "jimusho",
    "meaning": "văn phòng",
    "topicId": "food"
  },
  {
    "id": 178,
    "word": "会議室",
    "hiragana": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaning": "phòng họp",
    "topicId": "lifestyle"
  },
  {
    "id": 179,
    "word": "受付",
    "hiragana": "うけつけ",
    "romaji": "uketsuke",
    "meaning": "bộ phận tiếp tân, phòng thường trực",
    "topicId": "lifestyle"
  },
  {
    "id": 180,
    "word": "ロビー",
    "hiragana": "ロビー",
    "romaji": "robii",
    "meaning": "hành lang, đại sảnh",
    "topicId": "travel"
  },
  {
    "id": 181,
    "word": "部屋",
    "hiragana": "へや",
    "romaji": "heya",
    "meaning": "căn phòng",
    "topicId": "food"
  },
  {
    "id": 182,
    "word": "お手洗い",
    "hiragana": "トイレ",
    "romaji": "otearai",
    "meaning": "nhà vệ sinh",
    "topicId": "lifestyle"
  },
  {
    "id": 183,
    "word": "階段",
    "hiragana": "かいだん",
    "romaji": "kaidan",
    "meaning": "cầu thang",
    "topicId": "other"
  },
  {
    "id": 184,
    "word": "エレベーター",
    "hiragana": "エレベーター",
    "romaji": "erebe-ta-",
    "meaning": "thang máy",
    "topicId": "lifestyle"
  },
  {
    "id": 185,
    "word": "エスカレーター",
    "hiragana": "エスカレーター",
    "romaji": "esukare-ta-",
    "meaning": "thang cuốn",
    "topicId": "other"
  },
  {
    "id": 186,
    "word": "お国",
    "hiragana": "おくに",
    "romaji": "okuni",
    "meaning": "đất nước",
    "topicId": "food"
  },
  {
    "id": 187,
    "word": "会社",
    "hiragana": "かいしゃ",
    "romaji": "kaisha",
    "meaning": "công ty",
    "topicId": "work"
  },
  {
    "id": 188,
    "word": "家",
    "hiragana": "うち",
    "romaji": "uchi",
    "meaning": "nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 189,
    "word": "電話",
    "hiragana": "でんわ",
    "romaji": "denwa",
    "meaning": "điện thoại",
    "topicId": "traffic"
  },
  {
    "id": 190,
    "word": "靴",
    "hiragana": "くつ",
    "romaji": "kutsu",
    "meaning": "giày",
    "topicId": "other"
  },
  {
    "id": 191,
    "word": "ネクタイ",
    "hiragana": "ネクタイ",
    "romaji": "nekutai",
    "meaning": "cà vạt",
    "topicId": "other"
  },
  {
    "id": 192,
    "word": "ワイン",
    "hiragana": "ワイン",
    "romaji": "wain",
    "meaning": "rượu vang",
    "topicId": "food"
  },
  {
    "id": 193,
    "word": "たばこ",
    "hiragana": "たばこ",
    "romaji": "tabako",
    "meaning": "thuốc lá",
    "topicId": "time_weather"
  },
  {
    "id": 194,
    "word": "売り場",
    "hiragana": "うりば",
    "romaji": "uriba",
    "meaning": "quầy bán",
    "topicId": "shopping"
  },
  {
    "id": 195,
    "word": "地下",
    "hiragana": "ちか",
    "romaji": "chika",
    "meaning": "tầng hầm",
    "topicId": "other"
  },
  {
    "id": 196,
    "word": "何階",
    "hiragana": "なんがい",
    "romaji": "nangai",
    "meaning": "tầng mấy",
    "topicId": "other"
  },
  {
    "id": 197,
    "word": "ー円",
    "hiragana": "ーえん",
    "romaji": "-en",
    "meaning": "- yên (tiền Nhật)",
    "topicId": "shopping"
  },
  {
    "id": 198,
    "word": "いくら",
    "hiragana": "いくら",
    "romaji": "ikura",
    "meaning": "bao nhiêu tiền",
    "topicId": "shopping"
  },
  {
    "id": 199,
    "word": "百",
    "hiragana": "ひゃく",
    "romaji": "hyaku",
    "meaning": "trăm",
    "topicId": "other"
  },
  {
    "id": 200,
    "word": "千",
    "hiragana": "せん",
    "romaji": "sen",
    "meaning": "nghìn",
    "topicId": "other"
  },
  {
    "id": 201,
    "word": "万",
    "hiragana": "まん",
    "romaji": "man",
    "meaning": "mười nghìn, vạn",
    "topicId": "other"
  },
  {
    "id": 202,
    "word": "すみません",
    "hiragana": "すみません",
    "romaji": "sumimasen",
    "meaning": "xin lỗi",
    "topicId": "greetings"
  },
  {
    "id": 203,
    "word": "～でございます",
    "hiragana": "～でございます",
    "romaji": "~ de gozaimasu",
    "meaning": "(dạng lịch sự của です)",
    "topicId": "other"
  },
  {
    "id": 204,
    "word": "〔～を〕見せてください",
    "hiragana": "〔～を〕みせてください",
    "romaji": "〔~wo〕misete kudasai",
    "meaning": "cho tôi xem [~]",
    "topicId": "greetings"
  },
  {
    "id": 205,
    "word": "じゃ",
    "hiragana": "じゃ",
    "romaji": "ja",
    "meaning": "thế thì, vậy thì",
    "topicId": "other"
  },
  {
    "id": 206,
    "word": "〔～を〕ください",
    "hiragana": "〔～を〕ください",
    "romaji": "〔~wo〕kudasai",
    "meaning": "cho tôi [~]",
    "topicId": "health"
  },
  {
    "id": 207,
    "word": "スイス",
    "hiragana": "スイス",
    "romaji": "Suisu",
    "meaning": "Thụy Sĩ",
    "topicId": "other"
  },
  {
    "id": 208,
    "word": "行きます",
    "hiragana": "いきます",
    "romaji": "ikimasu",
    "meaning": "đi",
    "topicId": "traffic"
  },
  {
    "id": 209,
    "word": "来ます",
    "hiragana": "きます",
    "romaji": "kimasu",
    "meaning": "đến",
    "topicId": "traffic"
  },
  {
    "id": 210,
    "word": "帰ります",
    "hiragana": "かえります",
    "romaji": "kaerimasu",
    "meaning": "về",
    "topicId": "traffic"
  },
  {
    "id": 211,
    "word": "学校",
    "hiragana": "がっこう",
    "romaji": "gakkou",
    "meaning": "trường học",
    "topicId": "other"
  },
  {
    "id": 212,
    "word": "スーパー",
    "hiragana": "スーパー",
    "romaji": "su-pa-",
    "meaning": "siêu thị",
    "topicId": "shopping"
  },
  {
    "id": 213,
    "word": "駅",
    "hiragana": "えき",
    "romaji": "eki",
    "meaning": "nhà ga",
    "topicId": "traffic"
  },
  {
    "id": 214,
    "word": "飛行機",
    "hiragana": "ひこうき",
    "romaji": "hikouki",
    "meaning": "máy bay",
    "topicId": "traffic"
  },
  {
    "id": 215,
    "word": "船",
    "hiragana": "ふね",
    "romaji": "fune",
    "meaning": "tàu, thuyền",
    "topicId": "traffic"
  },
  {
    "id": 216,
    "word": "電車",
    "hiragana": "でんしゃ",
    "romaji": "densha",
    "meaning": "tàu điện",
    "topicId": "traffic"
  },
  {
    "id": 217,
    "word": "地下鉄",
    "hiragana": "ちかてつ",
    "romaji": "chikatetsu",
    "meaning": "tàu điện ngầm",
    "topicId": "traffic"
  },
  {
    "id": 218,
    "word": "新幹線",
    "hiragana": "しんかんせん",
    "romaji": "shinkansen",
    "meaning": "tàu Shinkansen (tàu siêu tốc)",
    "topicId": "traffic"
  },
  {
    "id": 219,
    "word": "バス",
    "hiragana": "バス",
    "romaji": "basu",
    "meaning": "xe buýt",
    "topicId": "traffic"
  },
  {
    "id": 220,
    "word": "タクシー",
    "hiragana": "タクシー",
    "romaji": "takushi-",
    "meaning": "taxi",
    "topicId": "other"
  },
  {
    "id": 221,
    "word": "自転車",
    "hiragana": "じてんしゃ",
    "romaji": "jitensha",
    "meaning": "xe đạp",
    "topicId": "traffic"
  },
  {
    "id": 222,
    "word": "歩いて",
    "hiragana": "あるいて",
    "romaji": "aruite",
    "meaning": "đi bộ",
    "topicId": "traffic"
  },
  {
    "id": 223,
    "word": "人",
    "hiragana": "ひと",
    "romaji": "hito",
    "meaning": "người",
    "topicId": "other"
  },
  {
    "id": 224,
    "word": "友達",
    "hiragana": "ともだち",
    "romaji": "tomodachi",
    "meaning": "bạn bè",
    "topicId": "other"
  },
  {
    "id": 225,
    "word": "彼",
    "hiragana": "かれ",
    "romaji": "kare",
    "meaning": "anh ấy, bạn trai",
    "topicId": "greetings"
  },
  {
    "id": 226,
    "word": "彼女",
    "hiragana": "かのじょ",
    "romaji": "kanojo",
    "meaning": "cô ấy, bạn gái",
    "topicId": "other"
  },
  {
    "id": 227,
    "word": "家族",
    "hiragana": "かぞく",
    "romaji": "kazoku",
    "meaning": "gia đình",
    "topicId": "greetings"
  },
  {
    "id": 228,
    "word": "一人で",
    "hiragana": "ひとりで",
    "romaji": "hitoride",
    "meaning": "một mình",
    "topicId": "food"
  },
  {
    "id": 229,
    "word": "先週",
    "hiragana": "せんしゅう",
    "romaji": "senshuu",
    "meaning": "tuần trước",
    "topicId": "time_weather"
  },
  {
    "id": 230,
    "word": "今週",
    "hiragana": "こんしゅう",
    "romaji": "konshuu",
    "meaning": "tuần này",
    "topicId": "time_weather"
  },
  {
    "id": 231,
    "word": "来週",
    "hiragana": "らいしゅう",
    "romaji": "raishuu",
    "meaning": "tuần sau",
    "topicId": "time_weather"
  },
  {
    "id": 232,
    "word": "先月",
    "hiragana": "せんげつ",
    "romaji": "sengetsu",
    "meaning": "tháng trước",
    "topicId": "time_weather"
  },
  {
    "id": 233,
    "word": "今月",
    "hiragana": "こんげつ",
    "romaji": "kongetsu",
    "meaning": "tháng này",
    "topicId": "time_weather"
  },
  {
    "id": 234,
    "word": "来月",
    "hiragana": "らいげつ",
    "romaji": "raigetsu",
    "meaning": "tháng sau",
    "topicId": "time_weather"
  },
  {
    "id": 235,
    "word": "去年",
    "hiragana": "きょねん",
    "romaji": "kyonen",
    "meaning": "năm ngoái",
    "topicId": "time_weather"
  },
  {
    "id": 236,
    "word": "今年",
    "hiragana": "ことし",
    "romaji": "kotoshi",
    "meaning": "năm nay",
    "topicId": "time_weather"
  },
  {
    "id": 237,
    "word": "来年",
    "hiragana": "らいねん",
    "romaji": "rainen",
    "meaning": "năm sau",
    "topicId": "time_weather"
  },
  {
    "id": 238,
    "word": "いつ",
    "hiragana": "いつ",
    "romaji": "itsu",
    "meaning": "khi nào, bao giờ",
    "topicId": "time_weather"
  },
  {
    "id": 239,
    "word": "誕生日",
    "hiragana": "たんじょうび",
    "romaji": "tanjoubi",
    "meaning": "sinh nhật",
    "topicId": "other"
  },
  {
    "id": 240,
    "word": "食べます",
    "hiragana": "たべます",
    "romaji": "tabemasu",
    "meaning": "Ăn",
    "topicId": "food"
  },
  {
    "id": 241,
    "word": "飲みます",
    "hiragana": "のみます",
    "romaji": "nomimasu",
    "meaning": "Uống",
    "topicId": "food"
  },
  {
    "id": 242,
    "word": "吸います",
    "hiragana": "すいます",
    "romaji": "suimasu",
    "meaning": "Hút [thuốc lá]",
    "topicId": "time_weather"
  },
  {
    "id": 243,
    "word": "見ます",
    "hiragana": "みます",
    "romaji": "mimasu",
    "meaning": "Xem, nhìn, trông",
    "topicId": "greetings"
  },
  {
    "id": 244,
    "word": "聞きます",
    "hiragana": "ききます",
    "romaji": "kikimasu",
    "meaning": "Nghe",
    "topicId": "lifestyle"
  },
  {
    "id": 245,
    "word": "読みます",
    "hiragana": "よみます",
    "romaji": "yomimasu",
    "meaning": "Đọc",
    "topicId": "lifestyle"
  },
  {
    "id": 246,
    "word": "書きます",
    "hiragana": "かきます",
    "romaji": "kakimasu",
    "meaning": "Viết, vẽ",
    "topicId": "lifestyle"
  },
  {
    "id": 247,
    "word": "買います",
    "hiragana": "かいます",
    "romaji": "kaimasu",
    "meaning": "Mua",
    "topicId": "shopping"
  },
  {
    "id": 248,
    "word": "撮ります",
    "hiragana": "とります",
    "romaji": "torimasu",
    "meaning": "Chụp [ảnh]",
    "topicId": "travel"
  },
  {
    "id": 249,
    "word": "します",
    "hiragana": "します",
    "romaji": "shimasu",
    "meaning": "Làm",
    "topicId": "work"
  },
  {
    "id": 250,
    "word": "会います",
    "hiragana": "あいます",
    "romaji": "aimasu",
    "meaning": "Gặp [bạn]",
    "topicId": "other"
  },
  {
    "id": 251,
    "word": "ごはん",
    "hiragana": "ごはん",
    "romaji": "gohan",
    "meaning": "Cơm, bữa ăn",
    "topicId": "food"
  },
  {
    "id": 252,
    "word": "朝ごはん",
    "hiragana": "あさごはん",
    "romaji": "asagohan",
    "meaning": "Cơm sáng",
    "topicId": "food"
  },
  {
    "id": 253,
    "word": "昼ごはん",
    "hiragana": "ひるごはん",
    "romaji": "hirugohan",
    "meaning": "Cơm trưa",
    "topicId": "food"
  },
  {
    "id": 254,
    "word": "晩ごはん",
    "hiragana": "ばんごはん",
    "romaji": "bangohan",
    "meaning": "Cơm tối",
    "topicId": "food"
  },
  {
    "id": 255,
    "word": "パン",
    "hiragana": "パン",
    "romaji": "pan",
    "meaning": "Bánh mì",
    "topicId": "shopping"
  },
  {
    "id": 256,
    "word": "卵",
    "hiragana": "たまご",
    "romaji": "tamago",
    "meaning": "Trứng",
    "topicId": "other"
  },
  {
    "id": 257,
    "word": "肉",
    "hiragana": "にく",
    "romaji": "niku",
    "meaning": "Thịt",
    "topicId": "food"
  },
  {
    "id": 258,
    "word": "魚",
    "hiragana": "さかな",
    "romaji": "sakana",
    "meaning": "Cá",
    "topicId": "food"
  },
  {
    "id": 259,
    "word": "野菜",
    "hiragana": "やさい",
    "romaji": "yasai",
    "meaning": "Rau",
    "topicId": "food"
  },
  {
    "id": 260,
    "word": "果物",
    "hiragana": "くだもの",
    "romaji": "kudamono",
    "meaning": "Hoa quả, trái cây",
    "topicId": "food"
  },
  {
    "id": 261,
    "word": "水",
    "hiragana": "みず",
    "romaji": "mizu",
    "meaning": "Nước",
    "topicId": "food"
  },
  {
    "id": 262,
    "word": "お茶",
    "hiragana": "おちゃ",
    "romaji": "ocha",
    "meaning": "Trà",
    "topicId": "food"
  },
  {
    "id": 263,
    "word": "紅茶",
    "hiragana": "こうちゃ",
    "romaji": "koucha",
    "meaning": "Trà đen",
    "topicId": "food"
  },
  {
    "id": 264,
    "word": "牛乳",
    "hiragana": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "meaning": "Sữa bò",
    "topicId": "food"
  },
  {
    "id": 265,
    "word": "ミルク",
    "hiragana": "ミルク",
    "romaji": "miruku",
    "meaning": "Sữa (milk)",
    "topicId": "food"
  },
  {
    "id": 266,
    "word": "ジュース",
    "hiragana": "ジュース",
    "romaji": "juusu",
    "meaning": "Nước hoa quả",
    "topicId": "food"
  },
  {
    "id": 267,
    "word": "ビール",
    "hiragana": "ビール",
    "romaji": "biiru",
    "meaning": "Bia",
    "topicId": "food"
  },
  {
    "id": 268,
    "word": "お酒",
    "hiragana": "おさけ",
    "romaji": "osake",
    "meaning": "Rượu, rượu sake",
    "topicId": "food"
  },
  {
    "id": 269,
    "word": "ビデオ",
    "hiragana": "ビデオ",
    "romaji": "bideo",
    "meaning": "Video, băng video, đầu video",
    "topicId": "food"
  },
  {
    "id": 270,
    "word": "映画",
    "hiragana": "えいが",
    "romaji": "eiga",
    "meaning": "Phim, điện ảnh",
    "topicId": "traffic"
  },
  {
    "id": 271,
    "word": "CD",
    "hiragana": "CD",
    "romaji": "CD",
    "meaning": "Đĩa CD",
    "topicId": "food"
  },
  {
    "id": 272,
    "word": "手紙",
    "hiragana": "てがみ",
    "romaji": "tegami",
    "meaning": "Thư",
    "topicId": "lifestyle"
  },
  {
    "id": 273,
    "word": "レポート",
    "hiragana": "レポート",
    "romaji": "repooto",
    "meaning": "Báo cáo",
    "topicId": "food"
  },
  {
    "id": 274,
    "word": "写真",
    "hiragana": "しゃしん",
    "romaji": "shashin",
    "meaning": "Ảnh",
    "topicId": "travel"
  },
  {
    "id": 275,
    "word": "店",
    "hiragana": "みせ",
    "romaji": "mise",
    "meaning": "Cửa hàng, tiệm",
    "topicId": "shopping"
  },
  {
    "id": 276,
    "word": "レストラン",
    "hiragana": "レストラン",
    "romaji": "resutoran",
    "meaning": "Nhà hàng",
    "topicId": "food"
  },
  {
    "id": 277,
    "word": "庭",
    "hiragana": "にわ",
    "romaji": "niwa",
    "meaning": "Vườn",
    "topicId": "other"
  },
  {
    "id": 278,
    "word": "宿題",
    "hiragana": "しゅくだい",
    "romaji": "shukudai",
    "meaning": "Bài tập về nhà",
    "topicId": "traffic"
  },
  {
    "id": 279,
    "word": "テニス",
    "hiragana": "テニス",
    "romaji": "tenisu",
    "meaning": "Quần vợt",
    "topicId": "other"
  },
  {
    "id": 280,
    "word": "サッカー",
    "hiragana": "サッカー",
    "romaji": "sakkaa",
    "meaning": "Bóng đá",
    "topicId": "other"
  },
  {
    "id": 281,
    "word": "お花見",
    "hiragana": "おはなみ",
    "romaji": "ohanami",
    "meaning": "Ngắm hoa anh đào",
    "topicId": "greetings"
  },
  {
    "id": 282,
    "word": "何",
    "hiragana": "なに",
    "romaji": "nani",
    "meaning": "Cái gì, gì",
    "topicId": "food"
  },
  {
    "id": 283,
    "word": "いっしょに",
    "hiragana": "いっしょに",
    "romaji": "isshoni",
    "meaning": "Cùng, cùng nhau",
    "topicId": "other"
  },
  {
    "id": 284,
    "word": "ちょっと",
    "hiragana": "ちょっと",
    "romaji": "chotto",
    "meaning": "Một chút",
    "topicId": "other"
  },
  {
    "id": 285,
    "word": "いつも",
    "hiragana": "いつも",
    "romaji": "itsumo",
    "meaning": "Luôn luôn, lúc nào cũng",
    "topicId": "other"
  },
  {
    "id": 286,
    "word": "時々",
    "hiragana": "ときどき",
    "romaji": "tokidoki",
    "meaning": "Thỉnh thoảng",
    "topicId": "health"
  },
  {
    "id": 287,
    "word": "それから",
    "hiragana": "それから",
    "romaji": "sorekara",
    "meaning": "Sau đó, tiếp theo",
    "topicId": "other"
  },
  {
    "id": 288,
    "word": "ええ",
    "hiragana": "ええ",
    "romaji": "ee",
    "meaning": "Vâng, được",
    "topicId": "other"
  },
  {
    "id": 289,
    "word": "いいですね",
    "hiragana": "いいですね",
    "romaji": "ii desu ne",
    "meaning": "Được đấy nhỉ. / Hay quá.",
    "topicId": "other"
  },
  {
    "id": 290,
    "word": "わかりました",
    "hiragana": "わかりました",
    "romaji": "wakarimashita",
    "meaning": "Tôi hiểu rồi. / Vâng ạ.",
    "topicId": "other"
  },
  {
    "id": 291,
    "word": "何ですか",
    "hiragana": "なんですか",
    "romaji": "nan desu ka",
    "meaning": "Có gì đấy ạ? / Cái gì vậy?",
    "topicId": "food"
  },
  {
    "id": 292,
    "word": "じゃ、また",
    "hiragana": "じゃ、また",
    "romaji": "ja, mata",
    "meaning": "Hẹn gặp lại [ngày mai]",
    "topicId": "time_weather"
  },
  {
    "id": 293,
    "word": "大阪城公園",
    "hiragana": "おおさかじょうこうえん",
    "romaji": "oosaka-jou kouen",
    "meaning": "Công viên lâu đài Osaka",
    "topicId": "travel"
  },
  {
    "id": 294,
    "word": "切ります",
    "hiragana": "きります",
    "romaji": "kirimasu",
    "meaning": "Cắt",
    "topicId": "other"
  },
  {
    "id": 295,
    "word": "送ります",
    "hiragana": "おくります",
    "romaji": "okurimasu",
    "meaning": "Gửi",
    "topicId": "other"
  },
  {
    "id": 296,
    "word": "あげます",
    "hiragana": "あげます",
    "romaji": "agemasu",
    "meaning": "Cho, tặng",
    "topicId": "health"
  },
  {
    "id": 297,
    "word": "もらいます",
    "hiragana": "もらいます",
    "romaji": "moraimasu",
    "meaning": "Nhận",
    "topicId": "other"
  },
  {
    "id": 298,
    "word": "貸します",
    "hiragana": "かします",
    "romaji": "kashimasu",
    "meaning": "Cho mượn, cho vay",
    "topicId": "health"
  },
  {
    "id": 299,
    "word": "借ります",
    "hiragana": "かります",
    "romaji": "karimasu",
    "meaning": "Mượn, vay",
    "topicId": "other"
  },
  {
    "id": 300,
    "word": "教えます",
    "hiragana": "おしえます",
    "romaji": "oshiemasu",
    "meaning": "Dạy",
    "topicId": "other"
  },
  {
    "id": 301,
    "word": "習います",
    "hiragana": "ならいます",
    "romaji": "naraimasu",
    "meaning": "Học, tập",
    "topicId": "other"
  },
  {
    "id": 302,
    "word": "かけます",
    "hiragana": "かけます",
    "romaji": "kakemasu",
    "meaning": "Gọi [điện thoại]",
    "topicId": "traffic"
  },
  {
    "id": 303,
    "word": "手",
    "hiragana": "て",
    "romaji": "te",
    "meaning": "Tay",
    "topicId": "health"
  },
  {
    "id": 304,
    "word": "箸",
    "hiragana": "はし",
    "romaji": "hashi",
    "meaning": "Đũa",
    "topicId": "food"
  },
  {
    "id": 305,
    "word": "スプーン",
    "hiragana": "スプーン",
    "romaji": "supuun",
    "meaning": "Thìa",
    "topicId": "other"
  },
  {
    "id": 306,
    "word": "ナイフ",
    "hiragana": "ナイフ",
    "romaji": "naifu",
    "meaning": "Dao",
    "topicId": "other"
  },
  {
    "id": 307,
    "word": "フォーク",
    "hiragana": "フォーク",
    "romaji": "fooku",
    "meaning": "Dĩa",
    "topicId": "other"
  },
  {
    "id": 308,
    "word": "はさみ",
    "hiragana": "はさみ",
    "romaji": "hasami",
    "meaning": "Kéo",
    "topicId": "other"
  },
  {
    "id": 309,
    "word": "ファクス",
    "hiragana": "ファクス",
    "romaji": "fakusu",
    "meaning": "Fax",
    "topicId": "work"
  },
  {
    "id": 310,
    "word": "ワープロ",
    "hiragana": "ワープロ",
    "romaji": "waapuro",
    "meaning": "Máy đánh chữ",
    "topicId": "lifestyle"
  },
  {
    "id": 311,
    "word": "パソコン",
    "hiragana": "パソコン",
    "romaji": "pasokon",
    "meaning": "Máy vi tính cá nhân",
    "topicId": "food"
  },
  {
    "id": 312,
    "word": "パンチ",
    "hiragana": "パンチ",
    "romaji": "panchi",
    "meaning": "Cái đục lỗ",
    "topicId": "food"
  },
  {
    "id": 313,
    "word": "ホッチキス",
    "hiragana": "ホッチキス",
    "romaji": "hotchikisu",
    "meaning": "Cái dập ghim",
    "topicId": "food"
  },
  {
    "id": 314,
    "word": "セロテープ",
    "hiragana": "セロテープ",
    "romaji": "seroteepu",
    "meaning": "Băng dính",
    "topicId": "food"
  },
  {
    "id": 315,
    "word": "消しゴム",
    "hiragana": "けしゴム",
    "romaji": "keshigomu",
    "meaning": "Cái tẩy",
    "topicId": "food"
  },
  {
    "id": 316,
    "word": "紙",
    "hiragana": "かみ",
    "romaji": "kami",
    "meaning": "Giấy",
    "topicId": "other"
  },
  {
    "id": 317,
    "word": "花",
    "hiragana": "はな",
    "romaji": "hana",
    "meaning": "Hoa",
    "topicId": "health"
  },
  {
    "id": 318,
    "word": "シャツ",
    "hiragana": "シャツ",
    "romaji": "shatsu",
    "meaning": "Áo sơ mi",
    "topicId": "other"
  },
  {
    "id": 319,
    "word": "プレゼント",
    "hiragana": "プレゼント",
    "romaji": "purezento",
    "meaning": "Quà tặng",
    "topicId": "travel"
  },
  {
    "id": 320,
    "word": "荷物",
    "hiragana": "にもつ",
    "romaji": "nimotsu",
    "meaning": "Đồ đạc, hành lý",
    "topicId": "lifestyle"
  },
  {
    "id": 321,
    "word": "お金",
    "hiragana": "おかね",
    "romaji": "okane",
    "meaning": "Tiền",
    "topicId": "shopping"
  },
  {
    "id": 322,
    "word": "切符",
    "hiragana": "きっぷ",
    "romaji": "kippu",
    "meaning": "Vé",
    "topicId": "traffic"
  },
  {
    "id": 323,
    "word": "クリスマス",
    "hiragana": "クリスマス",
    "romaji": "kurisumasu",
    "meaning": "Giáng sinh",
    "topicId": "shopping"
  },
  {
    "id": 324,
    "word": "父",
    "hiragana": "ちち",
    "romaji": "chichi",
    "meaning": "Bố (dùng khi nói về bố mình)",
    "topicId": "greetings"
  },
  {
    "id": 325,
    "word": "母",
    "hiragana": "はは",
    "romaji": "haha",
    "meaning": "Mẹ (dùng khi nói về mẹ mình)",
    "topicId": "greetings"
  },
  {
    "id": 326,
    "word": "お父さん",
    "hiragana": "おとうさん",
    "romaji": "otousan",
    "meaning": "Bố (dùng khi nói về bố người khác)",
    "topicId": "greetings"
  },
  {
    "id": 327,
    "word": "お母さん",
    "hiragana": "おかあさん",
    "romaji": "okaasan",
    "meaning": "Mẹ (dùng khi nói về mẹ người khác)",
    "topicId": "greetings"
  },
  {
    "id": 328,
    "word": "もう",
    "hiragana": "もう",
    "romaji": "mou",
    "meaning": "Đã, rồi",
    "topicId": "other"
  },
  {
    "id": 329,
    "word": "まだ",
    "hiragana": "まだ",
    "romaji": "mada",
    "meaning": "Chưa",
    "topicId": "other"
  },
  {
    "id": 330,
    "word": "これから",
    "hiragana": "これから",
    "romaji": "korekara",
    "meaning": "Từ bây giờ",
    "topicId": "time_weather"
  },
  {
    "id": 331,
    "word": "すてきですね",
    "hiragana": "すてきですね",
    "romaji": "suteki desu ne",
    "meaning": "Hay nhỉ. / Đẹp nhỉ.",
    "topicId": "other"
  },
  {
    "id": 332,
    "word": "ごめんください",
    "hiragana": "ごめんください",
    "romaji": "gomen kudasai",
    "meaning": "Xin lỗi, có ai ở nhà không? / Tôi có thể vào được chứ?",
    "topicId": "greetings"
  },
  {
    "id": 333,
    "word": "いらっしゃい",
    "hiragana": "いらっしゃい",
    "romaji": "irasshai",
    "meaning": "Rất hoan nghênh anh/chị đã đến chơi.",
    "topicId": "greetings"
  },
  {
    "id": 334,
    "word": "どうぞ お上がり ください",
    "hiragana": "どうぞ おあがり ください",
    "romaji": "douzo oagari kudasai",
    "meaning": "Mời anh/chị vào.",
    "topicId": "greetings"
  },
  {
    "id": 335,
    "word": "失礼します",
    "hiragana": "しつれいします",
    "romaji": "shitsurei shimasu",
    "meaning": "Xin phép tôi vào. / Xin phép ~.",
    "topicId": "other"
  },
  {
    "id": 336,
    "word": "いただきます",
    "hiragana": "いただきます",
    "romaji": "itadakimasu",
    "meaning": "Mời anh/chị dùng ~. (cách nói dùng trước khi ăn uống)",
    "topicId": "greetings"
  },
  {
    "id": 337,
    "word": "旅行",
    "hiragana": "りょこう",
    "romaji": "ryokou",
    "meaning": "Du lịch",
    "topicId": "travel"
  },
  {
    "id": 338,
    "word": "ハンサム [な]",
    "hiragana": "ハンサム [な]",
    "romaji": "hansamu",
    "meaning": "Đẹp trai",
    "topicId": "other"
  },
  {
    "id": 339,
    "word": "きれい [な]",
    "hiragana": "きれい [な]",
    "romaji": "kirei",
    "meaning": "Đẹp, sạch",
    "topicId": "other"
  },
  {
    "id": 340,
    "word": "静か [な]",
    "hiragana": "しずか [な]",
    "romaji": "shizuka",
    "meaning": "Yên tĩnh",
    "topicId": "other"
  },
  {
    "id": 341,
    "word": "にぎやか [な]",
    "hiragana": "にぎやか [な]",
    "romaji": "nigiyaka",
    "meaning": "Náo nhiệt",
    "topicId": "other"
  },
  {
    "id": 342,
    "word": "有名 [な]",
    "hiragana": "ゆうめい [な]",
    "romaji": "yuumei",
    "meaning": "Nổi tiếng",
    "topicId": "other"
  },
  {
    "id": 343,
    "word": "親切 [な]",
    "hiragana": "しんせつ [な]",
    "romaji": "shinsetsu",
    "meaning": "Tốt bụng, thân thiện",
    "topicId": "health"
  },
  {
    "id": 344,
    "word": "元気 [な]",
    "hiragana": "げんき [な]",
    "romaji": "genki",
    "meaning": "Khỏe",
    "topicId": "health"
  },
  {
    "id": 345,
    "word": "暇 [な]",
    "hiragana": "ひま [な]",
    "romaji": "hima",
    "meaning": "Rảnh rỗi",
    "topicId": "travel"
  },
  {
    "id": 346,
    "word": "便利 [な]",
    "hiragana": "べんり [な]",
    "romaji": "benri",
    "meaning": "Tiện lợi",
    "topicId": "other"
  },
  {
    "id": 347,
    "word": "すてき [な]",
    "hiragana": "すてき [な]",
    "romaji": "suteki",
    "meaning": "Đẹp, hay",
    "topicId": "other"
  },
  {
    "id": 348,
    "word": "大きい",
    "hiragana": "おおきい",
    "romaji": "ookii",
    "meaning": "Lớn, to",
    "topicId": "other"
  },
  {
    "id": 349,
    "word": "小さい",
    "hiragana": "ちいさい",
    "romaji": "chiisai",
    "meaning": "Bé, nhỏ",
    "topicId": "other"
  },
  {
    "id": 350,
    "word": "新しい",
    "hiragana": "あたらしい",
    "romaji": "atarashii",
    "meaning": "Mới",
    "topicId": "other"
  },
  {
    "id": 351,
    "word": "古い",
    "hiragana": "ふるい",
    "romaji": "furui",
    "meaning": "Cũ",
    "topicId": "other"
  },
  {
    "id": 352,
    "word": "いい (よい)",
    "hiragana": "いい (よい)",
    "romaji": "ii (yoi)",
    "meaning": "Tốt",
    "topicId": "other"
  },
  {
    "id": 353,
    "word": "悪い",
    "hiragana": "わるい",
    "romaji": "warui",
    "meaning": "Xấu",
    "topicId": "other"
  },
  {
    "id": 354,
    "word": "暑い, 熱い",
    "hiragana": "あつい",
    "romaji": "atsui",
    "meaning": "Nóng",
    "topicId": "time_weather"
  },
  {
    "id": 355,
    "word": "寒い",
    "hiragana": "さむい",
    "romaji": "samui",
    "meaning": "Lạnh, rét (dùng cho thời tiết)",
    "topicId": "time_weather"
  },
  {
    "id": 356,
    "word": "冷たい",
    "hiragana": "つめたい",
    "romaji": "tsumetai",
    "meaning": "Lạnh, buốt (dùng cho cảm giác)",
    "topicId": "shopping"
  },
  {
    "id": 357,
    "word": "難しい",
    "hiragana": "むずかしい",
    "romaji": "muzukashii",
    "meaning": "Khó",
    "topicId": "other"
  },
  {
    "id": 358,
    "word": "易しい",
    "hiragana": "やさしい",
    "romaji": "yasashii",
    "meaning": "Dễ",
    "topicId": "other"
  },
  {
    "id": 359,
    "word": "高い",
    "hiragana": "たかい",
    "romaji": "takai",
    "meaning": "Đắt, cao",
    "topicId": "shopping"
  },
  {
    "id": 360,
    "word": "安い",
    "hiragana": "やすい",
    "romaji": "yasui",
    "meaning": "Rẻ",
    "topicId": "shopping"
  },
  {
    "id": 361,
    "word": "低い",
    "hiragana": "ひくい",
    "romaji": "hikui",
    "meaning": "Thấp",
    "topicId": "other"
  },
  {
    "id": 362,
    "word": "おもしろい",
    "hiragana": "おもしろい",
    "romaji": "omoshiroi",
    "meaning": "Thú vị, hay",
    "topicId": "other"
  },
  {
    "id": 363,
    "word": "おいしい",
    "hiragana": "おいしい",
    "romaji": "oishii",
    "meaning": "Ngon",
    "topicId": "food"
  },
  {
    "id": 364,
    "word": "忙しい",
    "hiragana": "いそがしい",
    "romaji": "isogashii",
    "meaning": "Bận",
    "topicId": "other"
  },
  {
    "id": 365,
    "word": "楽しい",
    "hiragana": "たのしい",
    "romaji": "tanoshii",
    "meaning": "Vui",
    "topicId": "other"
  },
  {
    "id": 366,
    "word": "白い",
    "hiragana": "しろい",
    "romaji": "shiroi",
    "meaning": "Trắng",
    "topicId": "other"
  },
  {
    "id": 367,
    "word": "黒い",
    "hiragana": "くろい",
    "romaji": "kuroi",
    "meaning": "Đen",
    "topicId": "other"
  },
  {
    "id": 368,
    "word": "赤い",
    "hiragana": "あかい",
    "romaji": "akai",
    "meaning": "Đỏ",
    "topicId": "other"
  },
  {
    "id": 369,
    "word": "青い",
    "hiragana": "あおい",
    "romaji": "aoi",
    "meaning": "Xanh da trời",
    "topicId": "greetings"
  },
  {
    "id": 370,
    "word": "桜",
    "hiragana": "さくら",
    "romaji": "sakura",
    "meaning": "Anh đào (hoa, cây)",
    "topicId": "greetings"
  },
  {
    "id": 371,
    "word": "山",
    "hiragana": "やま",
    "romaji": "yama",
    "meaning": "Núi",
    "topicId": "travel"
  },
  {
    "id": 372,
    "word": "町",
    "hiragana": "まち",
    "romaji": "machi",
    "meaning": "Thị trấn, thị xã, thành phố",
    "topicId": "other"
  },
  {
    "id": 373,
    "word": "食べ物",
    "hiragana": "たべもの",
    "romaji": "tabemono",
    "meaning": "Đồ ăn",
    "topicId": "food"
  },
  {
    "id": 374,
    "word": "所",
    "hiragana": "ところ",
    "romaji": "tokoro",
    "meaning": "Nơi, chỗ",
    "topicId": "other"
  },
  {
    "id": 375,
    "word": "寮",
    "hiragana": "りょう",
    "romaji": "ryou",
    "meaning": "Kí túc xá",
    "topicId": "other"
  },
  {
    "id": 376,
    "word": "勉強",
    "hiragana": "べんきょう",
    "romaji": "benkyou",
    "meaning": "Học",
    "topicId": "other"
  },
  {
    "id": 377,
    "word": "生活",
    "hiragana": "せいかつ",
    "romaji": "seikatsu",
    "meaning": "Cuộc sống, sinh hoạt",
    "topicId": "health"
  },
  {
    "id": 378,
    "word": "[お]仕事",
    "hiragana": "おしごと",
    "romaji": "shigoto",
    "meaning": "Công việc (~を します: làm việc)",
    "topicId": "work"
  },
  {
    "id": 379,
    "word": "どう",
    "hiragana": "どう",
    "romaji": "dou",
    "meaning": "Thế nào",
    "topicId": "other"
  },
  {
    "id": 380,
    "word": "どんな",
    "hiragana": "どんな",
    "romaji": "donna",
    "meaning": "Như thế nào",
    "topicId": "other"
  },
  {
    "id": 381,
    "word": "どれ",
    "hiragana": "どれ",
    "romaji": "dore",
    "meaning": "Cái nào",
    "topicId": "food"
  },
  {
    "id": 382,
    "word": "とても",
    "hiragana": "とても",
    "romaji": "totemo",
    "meaning": "Rất, lắm",
    "topicId": "other"
  },
  {
    "id": 383,
    "word": "あまり",
    "hiragana": "あまり",
    "romaji": "amari",
    "meaning": "Không ~ lắm",
    "topicId": "other"
  },
  {
    "id": 384,
    "word": "そして",
    "hiragana": "そして",
    "romaji": "soshite",
    "meaning": "Và, thêm nữa (dùng để nối hai câu)",
    "topicId": "other"
  },
  {
    "id": 385,
    "word": "～が、～",
    "hiragana": "が",
    "romaji": "ga",
    "meaning": "～, nhưng ～",
    "topicId": "other"
  },
  {
    "id": 386,
    "word": "お元気ですか",
    "hiragana": "おげんきですか",
    "romaji": "ogenki desu ka",
    "meaning": "Anh/Chị có khỏe không?",
    "topicId": "greetings"
  },
  {
    "id": 387,
    "word": "そうですね",
    "hiragana": "そうですね",
    "romaji": "sou desu ne",
    "meaning": "Thế à./ Để tôi xem.",
    "topicId": "greetings"
  },
  {
    "id": 388,
    "word": "日本の生活に慣れましたか",
    "hiragana": "なれましたか",
    "romaji": "Nihon no seikatsu ni naremashita ka",
    "meaning": "Anh/Chị đã quen với cuộc sống ở Nhật chưa?",
    "topicId": "greetings"
  },
  {
    "id": 389,
    "word": "[～,] もう一杯いかがですか",
    "hiragana": "いかがですか",
    "romaji": "mou ippai ikaga desu ka",
    "meaning": "Anh/Chị dùng thêm một chén [~] nữa được không ạ?",
    "topicId": "greetings"
  },
  {
    "id": 390,
    "word": "もう ～です[ね]",
    "hiragana": "もう～ですね",
    "romaji": "mou ~ desu ne",
    "meaning": "Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?",
    "topicId": "other"
  },
  {
    "id": 391,
    "word": "また いらっしゃって ください",
    "hiragana": "いらっしゃってください",
    "romaji": "mata irasshatte kudasai",
    "meaning": "Lần sau anh/chị lại đến chơi nhé.",
    "topicId": "greetings"
  },
  {
    "id": 392,
    "word": "富士山",
    "hiragana": "ふじさん",
    "romaji": "Fujisan",
    "meaning": "Núi Phú Sĩ",
    "topicId": "travel"
  },
  {
    "id": 393,
    "word": "琵琶湖",
    "hiragana": "びわこ",
    "romaji": "Biwako",
    "meaning": "Hồ Biwa",
    "topicId": "travel"
  },
  {
    "id": 394,
    "word": "シャンハイ",
    "hiragana": "シャンハイ",
    "romaji": "Shanhai",
    "meaning": "Thượng Hải",
    "topicId": "lifestyle"
  },
  {
    "id": 395,
    "word": "七人の侍",
    "hiragana": "しちにんのさむらい",
    "romaji": "Shichinin no Samurai",
    "meaning": "Bảy chàng võ sĩ Samurai (tên phim)",
    "topicId": "anime"
  },
  {
    "id": 396,
    "word": "金閣寺",
    "hiragana": "きんかくじ",
    "romaji": "Kinkakuji",
    "meaning": "Chùa Kinkaku-ji (Chùa Vàng)",
    "topicId": "travel"
  },
  {
    "id": 397,
    "word": "分かります",
    "hiragana": "わかります",
    "romaji": "wakarimasu",
    "meaning": "Hiểu",
    "topicId": "other"
  },
  {
    "id": 398,
    "word": "あります",
    "hiragana": "あります",
    "romaji": "arimasu",
    "meaning": "Có (sở hữu)",
    "topicId": "other"
  },
  {
    "id": 399,
    "word": "好き[な]",
    "hiragana": "すき",
    "romaji": "suki",
    "meaning": "Thích",
    "topicId": "other"
  },
  {
    "id": 400,
    "word": "嫌い[な]",
    "hiragana": "きらい",
    "romaji": "kirai",
    "meaning": "Ghét, không thích",
    "topicId": "other"
  },
  {
    "id": 401,
    "word": "上手[な]",
    "hiragana": "じょうず",
    "romaji": "jouzu",
    "meaning": "Giỏi",
    "topicId": "other"
  },
  {
    "id": 402,
    "word": "下手[な]",
    "hiragana": "へた",
    "romaji": "heta",
    "meaning": "Kém",
    "topicId": "other"
  },
  {
    "id": 403,
    "word": "料理",
    "hiragana": "りょうり",
    "romaji": "ryouri",
    "meaning": "Món ăn, việc nấu ăn",
    "topicId": "food"
  },
  {
    "id": 404,
    "word": "飲み物",
    "hiragana": "のみもの",
    "romaji": "nomimono",
    "meaning": "Đồ uống",
    "topicId": "food"
  },
  {
    "id": 405,
    "word": "スポーツ",
    "hiragana": "スポーツ",
    "romaji": "supootsu",
    "meaning": "Thể thao (~を します: chơi thể thao)",
    "topicId": "travel"
  },
  {
    "id": 406,
    "word": "野球",
    "hiragana": "やきゅう",
    "romaji": "yakyuu",
    "meaning": "Bóng chày (~を します: chơi bóng chày)",
    "topicId": "travel"
  },
  {
    "id": 407,
    "word": "ダンス",
    "hiragana": "ダンス",
    "romaji": "dansu",
    "meaning": "Nhảy, khiêu vũ (~を します: nhảy, khiêu vũ)",
    "topicId": "anime"
  },
  {
    "id": 408,
    "word": "音楽",
    "hiragana": "おんがく",
    "romaji": "ongaku",
    "meaning": "Âm nhạc",
    "topicId": "time_weather"
  },
  {
    "id": 409,
    "word": "歌",
    "hiragana": "うた",
    "romaji": "uta",
    "meaning": "Bài hát",
    "topicId": "anime"
  },
  {
    "id": 410,
    "word": "クラシック",
    "hiragana": "クラシック",
    "romaji": "kurashikku",
    "meaning": "Nhạc cổ điển",
    "topicId": "traffic"
  },
  {
    "id": 411,
    "word": "ジャズ",
    "hiragana": "ジャズ",
    "romaji": "jazu",
    "meaning": "Nhạc jazz",
    "topicId": "time_weather"
  },
  {
    "id": 412,
    "word": "コンサート",
    "hiragana": "コンサート",
    "romaji": "konsaato",
    "meaning": "Buổi hòa nhạc",
    "topicId": "time_weather"
  },
  {
    "id": 413,
    "word": "カラオケ",
    "hiragana": "カラオケ",
    "romaji": "karaoke",
    "meaning": "Karaoke",
    "topicId": "anime"
  },
  {
    "id": 414,
    "word": "歌舞伎",
    "hiragana": "かぶき",
    "romaji": "kabuki",
    "meaning": "Kabuki (một thể loại ca kịch truyền thống của Nhật)",
    "topicId": "other"
  },
  {
    "id": 415,
    "word": "絵",
    "hiragana": "え",
    "romaji": "e",
    "meaning": "Tranh, hội họa",
    "topicId": "greetings"
  },
  {
    "id": 416,
    "word": "字",
    "hiragana": "じ",
    "romaji": "ji",
    "meaning": "Chữ",
    "topicId": "other"
  },
  {
    "id": 417,
    "word": "漢字",
    "hiragana": "かんじ",
    "romaji": "kanji",
    "meaning": "Chữ Hán",
    "topicId": "other"
  },
  {
    "id": 418,
    "word": "ひらがな",
    "hiragana": "ひらがな",
    "romaji": "hiragana",
    "meaning": "Chữ Hiragana",
    "topicId": "traffic"
  },
  {
    "id": 419,
    "word": "かたかな",
    "hiragana": "かたかな",
    "romaji": "katakana",
    "meaning": "Chữ Katakana",
    "topicId": "other"
  },
  {
    "id": 420,
    "word": "ローマ字",
    "hiragana": "ローマじ",
    "romaji": "roomaji",
    "meaning": "Chữ La Mã",
    "topicId": "other"
  },
  {
    "id": 421,
    "word": "細かい お金",
    "hiragana": "こまかい おかね",
    "romaji": "komakai okane",
    "meaning": "Tiền lẻ",
    "topicId": "shopping"
  },
  {
    "id": 422,
    "word": "チケット",
    "hiragana": "チケット",
    "romaji": "chiketto",
    "meaning": "Vé (xem hòa nhạc, xem phim)",
    "topicId": "greetings"
  },
  {
    "id": 423,
    "word": "時間",
    "hiragana": "じかん",
    "romaji": "jikan",
    "meaning": "Thời gian",
    "topicId": "other"
  },
  {
    "id": 424,
    "word": "用事",
    "hiragana": "ようじ",
    "romaji": "youji",
    "meaning": "Việc bận, công chuyện",
    "topicId": "work"
  },
  {
    "id": 425,
    "word": "約束",
    "hiragana": "やくそく",
    "romaji": "yakusoku",
    "meaning": "Cuộc hẹn, lời hứa",
    "topicId": "other"
  },
  {
    "id": 426,
    "word": "ご主人",
    "hiragana": "ごしゅじん",
    "romaji": "goshujin",
    "meaning": "Chồng (dùng khi nói về chồng người khác)",
    "topicId": "greetings"
  },
  {
    "id": 427,
    "word": "夫 / 主人",
    "hiragana": "おっと / しゅじん",
    "romaji": "otto / shujin",
    "meaning": "Chồng (dùng khi nói về chồng mình)",
    "topicId": "food"
  },
  {
    "id": 428,
    "word": "奥さん",
    "hiragana": "おくさん",
    "romaji": "okusan",
    "meaning": "Vợ (dùng khi nói về vợ người khác)",
    "topicId": "greetings"
  },
  {
    "id": 429,
    "word": "妻 / 家内",
    "hiragana": "つま / かない",
    "romaji": "tsuma / kanai",
    "meaning": "Vợ (dùng khi nói về vợ mình)",
    "topicId": "food"
  },
  {
    "id": 430,
    "word": "子ども",
    "hiragana": "こども",
    "romaji": "kodomo",
    "meaning": "Con cái",
    "topicId": "food"
  },
  {
    "id": 431,
    "word": "よく",
    "hiragana": "よく",
    "romaji": "yoku",
    "meaning": "Tốt, rõ (chỉ mức độ)",
    "topicId": "other"
  },
  {
    "id": 432,
    "word": "だいたい",
    "hiragana": "だいたい",
    "romaji": "daitai",
    "meaning": "Đại khái, đại thể",
    "topicId": "other"
  },
  {
    "id": 433,
    "word": "たくさん",
    "hiragana": "たくさん",
    "romaji": "takusan",
    "meaning": "Nhiều",
    "topicId": "other"
  },
  {
    "id": 434,
    "word": "少し",
    "hiragana": "すこし",
    "romaji": "sukoshi",
    "meaning": "Ít, một ít",
    "topicId": "other"
  },
  {
    "id": 435,
    "word": "全然",
    "hiragana": "ぜんぜん",
    "romaji": "zenzen",
    "meaning": "Hoàn toàn ~ không",
    "topicId": "health"
  },
  {
    "id": 436,
    "word": "早く、速く",
    "hiragana": "はやく",
    "romaji": "hayaku",
    "meaning": "Sớm, nhanh",
    "topicId": "greetings"
  },
  {
    "id": 437,
    "word": "～から",
    "hiragana": "～から",
    "romaji": "kara",
    "meaning": "Vì ~",
    "topicId": "other"
  },
  {
    "id": 438,
    "word": "どうして",
    "hiragana": "どうして",
    "romaji": "doushite",
    "meaning": "Tại sao",
    "topicId": "other"
  },
  {
    "id": 439,
    "word": "残念ですね",
    "hiragana": "ざんねんですね",
    "romaji": "zannen desu ne",
    "meaning": "Thật đáng tiếc nhỉ./ Buồn nhỉ.",
    "topicId": "other"
  },
  {
    "id": 440,
    "word": "もしもし",
    "hiragana": "もしもし",
    "romaji": "moshimoshi",
    "meaning": "A-lô",
    "topicId": "other"
  },
  {
    "id": 441,
    "word": "ああ",
    "hiragana": "ああ",
    "romaji": "aa",
    "meaning": "A (cách nói khi đã gặp được đúng người trên điện thoại)",
    "topicId": "greetings"
  },
  {
    "id": 442,
    "word": "一緒に いかがですか",
    "hiragana": "いっしょに いかがですか",
    "romaji": "isshoni ikaga desu ka",
    "meaning": "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?",
    "topicId": "greetings"
  },
  {
    "id": 443,
    "word": "[～は] ちょっと……",
    "hiragana": "～はちょっと",
    "romaji": "[~wa] chotto...",
    "meaning": "[~ thì] có lẽ không được rồi. (cách từ chối khéo)",
    "topicId": "food"
  },
  {
    "id": 444,
    "word": "だめですか",
    "hiragana": "だめですか",
    "romaji": "dame desu ka",
    "meaning": "Không được à?",
    "topicId": "other"
  },
  {
    "id": 445,
    "word": "また 今度 お願いします",
    "hiragana": "また こんど おねがいします",
    "romaji": "mata kondo onegaishimasu",
    "meaning": "Hẹn anh/chị lần sau vậy. (cách từ chối khéo)",
    "topicId": "greetings"
  },
  {
    "id": 446,
    "word": "小沢 征爾",
    "hiragana": "おざわ せいじ",
    "romaji": "Ozawa Seiji",
    "meaning": "Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật",
    "topicId": "time_weather"
  },
  {
    "id": 447,
    "word": "います",
    "hiragana": "います",
    "romaji": "imasu",
    "meaning": "Có, ở (tồn tại, dùng cho người và động vật)",
    "topicId": "greetings"
  },
  {
    "id": 448,
    "word": "いろいろ[な]",
    "hiragana": "いろいろ",
    "romaji": "iroiro",
    "meaning": "Nhiều, đa dạng",
    "topicId": "other"
  },
  {
    "id": 449,
    "word": "男の 人",
    "hiragana": "おとこの ひと",
    "romaji": "otoko no hito",
    "meaning": "Người đàn ông",
    "topicId": "greetings"
  },
  {
    "id": 450,
    "word": "女の 人",
    "hiragana": "おんなの ひと",
    "romaji": "onna no hito",
    "meaning": "Người đàn bà",
    "topicId": "greetings"
  },
  {
    "id": 451,
    "word": "男の 子",
    "hiragana": "おとこの こ",
    "romaji": "otoko no ko",
    "meaning": "Cậu con trai",
    "topicId": "other"
  },
  {
    "id": 452,
    "word": "女の 子",
    "hiragana": "おんなの こ",
    "romaji": "onna no ko",
    "meaning": "Cô con gái",
    "topicId": "other"
  },
  {
    "id": 453,
    "word": "犬",
    "hiragana": "いぬ",
    "romaji": "inu",
    "meaning": "Chó",
    "topicId": "other"
  },
  {
    "id": 454,
    "word": "猫",
    "hiragana": "ねこ",
    "romaji": "neko",
    "meaning": "Mèo",
    "topicId": "other"
  },
  {
    "id": 455,
    "word": "木",
    "hiragana": "き",
    "romaji": "ki",
    "meaning": "Cây, gỗ",
    "topicId": "other"
  },
  {
    "id": 456,
    "word": "物",
    "hiragana": "もの",
    "romaji": "mono",
    "meaning": "Vật, đồ vật",
    "topicId": "lifestyle"
  },
  {
    "id": 457,
    "word": "フィルム",
    "hiragana": "フィルム",
    "romaji": "firumu",
    "meaning": "Phim",
    "topicId": "anime"
  },
  {
    "id": 458,
    "word": "電池",
    "hiragana": "でんち",
    "romaji": "denchi",
    "meaning": "Pin",
    "topicId": "other"
  },
  {
    "id": 459,
    "word": "箱",
    "hiragana": "はこ",
    "romaji": "hako",
    "meaning": "Hộp",
    "topicId": "other"
  },
  {
    "id": 460,
    "word": "スイッチ",
    "hiragana": "スイッチ",
    "romaji": "suitchi",
    "meaning": "Công tắc",
    "topicId": "other"
  },
  {
    "id": 461,
    "word": "冷蔵庫",
    "hiragana": "れいぞうこ",
    "romaji": "reizouko",
    "meaning": "Tủ lạnh",
    "topicId": "time_weather"
  },
  {
    "id": 462,
    "word": "テーブル",
    "hiragana": "テーブル",
    "romaji": "teeburu",
    "meaning": "Bàn",
    "topicId": "lifestyle"
  },
  {
    "id": 463,
    "word": "ベッド",
    "hiragana": "ベッド",
    "romaji": "beddo",
    "meaning": "Giường",
    "topicId": "lifestyle"
  },
  {
    "id": 464,
    "word": "棚",
    "hiragana": "たな",
    "romaji": "tana",
    "meaning": "Giá sách",
    "topicId": "shopping"
  },
  {
    "id": 465,
    "word": "ドア",
    "hiragana": "ドア",
    "romaji": "doa",
    "meaning": "Cửa",
    "topicId": "lifestyle"
  },
  {
    "id": 466,
    "word": "窓",
    "hiragana": "まど",
    "romaji": "mado",
    "meaning": "Cửa sổ",
    "topicId": "lifestyle"
  },
  {
    "id": 467,
    "word": "ポスト",
    "hiragana": "ポスト",
    "romaji": "posuto",
    "meaning": "Hộp thư, hòm thư",
    "topicId": "lifestyle"
  },
  {
    "id": 468,
    "word": "ビル",
    "hiragana": "ビル",
    "romaji": "biru",
    "meaning": "Tòa nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 469,
    "word": "公園",
    "hiragana": "こうえん",
    "romaji": "kouen",
    "meaning": "Công viên",
    "topicId": "travel"
  },
  {
    "id": 470,
    "word": "喫茶店",
    "hiragana": "きっさてん",
    "romaji": "kissaten",
    "meaning": "Quán giải khát, quán cà-phê",
    "topicId": "food"
  },
  {
    "id": 471,
    "word": "本屋",
    "hiragana": "ほんや",
    "romaji": "honya",
    "meaning": "Hiệu sách",
    "topicId": "lifestyle"
  },
  {
    "id": 472,
    "word": "～屋",
    "hiragana": "～や",
    "romaji": "~ya",
    "meaning": "Hiệu ~, cửa hàng ~",
    "topicId": "shopping"
  },
  {
    "id": 473,
    "word": "乗り場",
    "hiragana": "のりば",
    "romaji": "noriba",
    "meaning": "Bến xe, điểm lên xuống xe",
    "topicId": "food"
  },
  {
    "id": 474,
    "word": "県",
    "hiragana": "けん",
    "romaji": "ken",
    "meaning": "Tỉnh",
    "topicId": "other"
  },
  {
    "id": 475,
    "word": "上",
    "hiragana": "うえ",
    "romaji": "ue",
    "meaning": "Trên",
    "topicId": "other"
  },
  {
    "id": 476,
    "word": "下",
    "hiragana": "した",
    "romaji": "shita",
    "meaning": "Dưới",
    "topicId": "other"
  },
  {
    "id": 477,
    "word": "前",
    "hiragana": "まえ",
    "romaji": "mae",
    "meaning": "Trước",
    "topicId": "other"
  },
  {
    "id": 478,
    "word": "後ろ",
    "hiragana": "うしろ",
    "romaji": "ushiro",
    "meaning": "Sau",
    "topicId": "other"
  },
  {
    "id": 479,
    "word": "右",
    "hiragana": "みぎ",
    "romaji": "migi",
    "meaning": "Phải",
    "topicId": "other"
  },
  {
    "id": 480,
    "word": "左",
    "hiragana": "ひだり",
    "romaji": "hidari",
    "meaning": "Trái",
    "topicId": "other"
  },
  {
    "id": 481,
    "word": "中",
    "hiragana": "なか",
    "romaji": "naka",
    "meaning": "Trong, giữa",
    "topicId": "other"
  },
  {
    "id": 482,
    "word": "外",
    "hiragana": "そと",
    "romaji": "soto",
    "meaning": "Ngoài",
    "topicId": "other"
  },
  {
    "id": 483,
    "word": "隣",
    "hiragana": "となり",
    "romaji": "tonari",
    "meaning": "Bên cạnh",
    "topicId": "other"
  },
  {
    "id": 484,
    "word": "近く",
    "hiragana": "ちかく",
    "romaji": "chikaku",
    "meaning": "Gần",
    "topicId": "traffic"
  },
  {
    "id": 485,
    "word": "間",
    "hiragana": "あいだ",
    "romaji": "aida",
    "meaning": "Giữa",
    "topicId": "other"
  },
  {
    "id": 486,
    "word": "～や～[など]",
    "hiragana": "～や～[など]",
    "romaji": "~ya ~[nado]",
    "meaning": "~ và ~, [v.v.]",
    "topicId": "other"
  },
  {
    "id": 487,
    "word": "いちばん～",
    "hiragana": "いちばん～",
    "romaji": "ichiban ~",
    "meaning": "~ nhất (いちばん うえ: vị trí cao nhất)",
    "topicId": "other"
  },
  {
    "id": 488,
    "word": "～段目",
    "hiragana": "～だんめ",
    "romaji": "~danme",
    "meaning": "Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)",
    "topicId": "shopping"
  },
  {
    "id": 489,
    "word": "[どうも] すみません",
    "hiragana": "どうも すみません",
    "romaji": "[doumo] sumimasen",
    "meaning": "Cám ơn.",
    "topicId": "food"
  },
  {
    "id": 490,
    "word": "チリソース",
    "hiragana": "チリソース",
    "romaji": "chirisoosu",
    "meaning": "Tương ớt (chili sauce)",
    "topicId": "other"
  },
  {
    "id": 491,
    "word": "奥",
    "hiragana": "おく",
    "romaji": "oku",
    "meaning": "Bên trong cùng, phía sâu bên trong",
    "topicId": "other"
  },
  {
    "id": 492,
    "word": "スパイス・コーナー",
    "hiragana": "スパイス・コーナー",
    "romaji": "supaisu koonaa",
    "meaning": "Góc gia vị (spice corner)",
    "topicId": "other"
  },
  {
    "id": 493,
    "word": "玄関",
    "hiragana": "げんかん",
    "romaji": "genkan",
    "meaning": "Cửa ra vào",
    "topicId": "lifestyle"
  },
  {
    "id": 494,
    "word": "風呂場",
    "hiragana": "ふろば",
    "romaji": "furoba",
    "meaning": "Phòng tắm",
    "topicId": "lifestyle"
  },
  {
    "id": 495,
    "word": "洗面所",
    "hiragana": "せんめんじょ",
    "romaji": "senmenjo",
    "meaning": "Bồn rửa",
    "topicId": "other"
  },
  {
    "id": 496,
    "word": "台所",
    "hiragana": "だいどころ",
    "romaji": "daidokoro",
    "meaning": "Bếp",
    "topicId": "other"
  },
  {
    "id": 497,
    "word": "居間",
    "hiragana": "いま",
    "romaji": "ima",
    "meaning": "Phòng khách, phòng sinh hoạt chung",
    "topicId": "shopping"
  },
  {
    "id": 498,
    "word": "寝室",
    "hiragana": "しんしつ",
    "romaji": "shinshitsu",
    "meaning": "Phòng ngủ",
    "topicId": "lifestyle"
  },
  {
    "id": 499,
    "word": "廊下",
    "hiragana": "ろうか",
    "romaji": "rouka",
    "meaning": "Hành lang",
    "topicId": "other"
  },
  {
    "id": 500,
    "word": "ベランダ",
    "hiragana": "ベランダ",
    "romaji": "beranda",
    "meaning": "Ban-công",
    "topicId": "other"
  },
  {
    "id": 501,
    "word": "かかります",
    "hiragana": "かかります",
    "romaji": "kakarimasu",
    "meaning": "Mất, tốn (tiền, thời gian)",
    "topicId": "shopping"
  },
  {
    "id": 502,
    "word": "休みます",
    "hiragana": "やすみます",
    "romaji": "yasumimasu",
    "meaning": "Nghỉ (làm việc)",
    "topicId": "health"
  },
  {
    "id": 503,
    "word": "１つ",
    "hiragana": "ひとつ",
    "romaji": "hitotsu",
    "meaning": "Một cái (đếm đồ vật)",
    "topicId": "food"
  },
  {
    "id": 504,
    "word": "２つ",
    "hiragana": "ふたつ",
    "romaji": "futatsu",
    "meaning": "Hai cái",
    "topicId": "food"
  },
  {
    "id": 505,
    "word": "３つ",
    "hiragana": "みっつ",
    "romaji": "mittsu",
    "meaning": "Ba cái",
    "topicId": "food"
  },
  {
    "id": 506,
    "word": "４つ",
    "hiragana": "よっつ",
    "romaji": "yottsu",
    "meaning": "Bốn cái",
    "topicId": "greetings"
  },
  {
    "id": 507,
    "word": "５つ",
    "hiragana": "いつつ",
    "romaji": "itsutsu",
    "meaning": "Năm cái",
    "topicId": "food"
  },
  {
    "id": 508,
    "word": "６つ",
    "hiragana": "むっつ",
    "romaji": "muttsu",
    "meaning": "Sáu cái",
    "topicId": "food"
  },
  {
    "id": 509,
    "word": "７つ",
    "hiragana": "ななつ",
    "romaji": "nanatsu",
    "meaning": "Bảy cái",
    "topicId": "food"
  },
  {
    "id": 510,
    "word": "８つ",
    "hiragana": "やっつ",
    "romaji": "yattsu",
    "meaning": "Tám cái",
    "topicId": "food"
  },
  {
    "id": 511,
    "word": "９つ",
    "hiragana": "ここのつ",
    "romaji": "kokonotsu",
    "meaning": "Chín cái",
    "topicId": "food"
  },
  {
    "id": 512,
    "word": "１０",
    "hiragana": "とお",
    "romaji": "tou",
    "meaning": "Mười cái",
    "topicId": "food"
  },
  {
    "id": 513,
    "word": "いくつ",
    "hiragana": "いくつ",
    "romaji": "ikutsu",
    "meaning": "Mấy cái, bao nhiêu cái",
    "topicId": "food"
  },
  {
    "id": 514,
    "word": "１人",
    "hiragana": "ひとり",
    "romaji": "hitori",
    "meaning": "Một người",
    "topicId": "other"
  },
  {
    "id": 515,
    "word": "２人",
    "hiragana": "ふたり",
    "romaji": "futari",
    "meaning": "Hai người",
    "topicId": "other"
  },
  {
    "id": 516,
    "word": "～人",
    "hiragana": "～にん",
    "romaji": "~nin",
    "meaning": "~ Người",
    "topicId": "other"
  },
  {
    "id": 517,
    "word": "～台",
    "hiragana": "～だい",
    "romaji": "~dai",
    "meaning": "~ Cái (đếm máy móc, xe cộ)",
    "topicId": "food"
  },
  {
    "id": 518,
    "word": "～枚",
    "hiragana": "～まい",
    "romaji": "~mai",
    "meaning": "~ Tờ, tấm (đếm vật mỏng giấy, áo...)",
    "topicId": "time_weather"
  },
  {
    "id": 519,
    "word": "～回",
    "hiragana": "～かい",
    "romaji": "~kai",
    "meaning": "~ Lần",
    "topicId": "other"
  },
  {
    "id": 520,
    "word": "りんご",
    "hiragana": "りんご",
    "romaji": "ringo",
    "meaning": "Táo",
    "topicId": "other"
  },
  {
    "id": 521,
    "word": "みかん",
    "hiragana": "みかん",
    "romaji": "mikan",
    "meaning": "Quýt",
    "topicId": "other"
  },
  {
    "id": 522,
    "word": "サンドイッチ",
    "hiragana": "サンドイッチ",
    "romaji": "sandoicchi",
    "meaning": "Bánh San-uých (Sandwich)",
    "topicId": "shopping"
  },
  {
    "id": 523,
    "word": "カレー[ライス]",
    "hiragana": "カレー[ライス]",
    "romaji": "karee [raisu]",
    "meaning": "Món [cơm] cà ri",
    "topicId": "food"
  },
  {
    "id": 524,
    "word": "アイスクリーム",
    "hiragana": "アイスクリーム",
    "romaji": "aisukuriimu",
    "meaning": "Kem (Ice cream)",
    "topicId": "greetings"
  },
  {
    "id": 525,
    "word": "切手",
    "hiragana": "きって",
    "romaji": "kitte",
    "meaning": "Tem",
    "topicId": "greetings"
  },
  {
    "id": 526,
    "word": "ハガキ",
    "hiragana": "ハガキ",
    "romaji": "hagaki",
    "meaning": "Bưu thiếp",
    "topicId": "other"
  },
  {
    "id": 527,
    "word": "封筒",
    "hiragana": "ふうとう",
    "romaji": "fuutou",
    "meaning": "Phong bì",
    "topicId": "health"
  },
  {
    "id": 528,
    "word": "速達",
    "hiragana": "そくたつ",
    "romaji": "sokutatsu",
    "meaning": "(Bưu phẩm) gửi nhanh",
    "topicId": "greetings"
  },
  {
    "id": 529,
    "word": "書留",
    "hiragana": "かきとめ",
    "romaji": "kakitome",
    "meaning": "(Bưu phẩm) gửi bảo đảm",
    "topicId": "other"
  },
  {
    "id": 530,
    "word": "エアメール",
    "hiragana": "エアメール",
    "romaji": "eameeru",
    "meaning": "Gửi bằng đường hàng không (Air mail)",
    "topicId": "traffic"
  },
  {
    "id": 531,
    "word": "航空便",
    "hiragana": "こうくうびん",
    "romaji": "koukuubin",
    "meaning": "Gửi bằng đường hàng không",
    "topicId": "traffic"
  },
  {
    "id": 532,
    "word": "船便",
    "hiragana": "ふなびん",
    "romaji": "funabin",
    "meaning": "Gửi bằng đường biển",
    "topicId": "traffic"
  },
  {
    "id": 533,
    "word": "両親",
    "hiragana": "りょうしん",
    "romaji": "ryoushin",
    "meaning": "Bố mẹ",
    "topicId": "greetings"
  },
  {
    "id": 534,
    "word": "兄弟",
    "hiragana": "きょうだい",
    "romaji": "kyoudai",
    "meaning": "Anh chị em",
    "topicId": "greetings"
  },
  {
    "id": 535,
    "word": "兄",
    "hiragana": "あに",
    "romaji": "ani",
    "meaning": "Anh trai",
    "topicId": "greetings"
  },
  {
    "id": 536,
    "word": "お兄さん",
    "hiragana": "おにいさん",
    "romaji": "oniisan",
    "meaning": "Anh trai (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 537,
    "word": "姉",
    "hiragana": "あね",
    "romaji": "ane",
    "meaning": "Chị gái",
    "topicId": "greetings"
  },
  {
    "id": 538,
    "word": "お姉さん",
    "hiragana": "おねえさん",
    "romaji": "oneesan",
    "meaning": "Chị gái (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 539,
    "word": "弟",
    "hiragana": "おとうと",
    "romaji": "otouto",
    "meaning": "Em trai",
    "topicId": "greetings"
  },
  {
    "id": 540,
    "word": "弟さん",
    "hiragana": "おとうとさん",
    "romaji": "otoutosan",
    "meaning": "Em trai (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 541,
    "word": "妹",
    "hiragana": "いもうと",
    "romaji": "imouto",
    "meaning": "Em gái",
    "topicId": "greetings"
  },
  {
    "id": 542,
    "word": "妹さん",
    "hiragana": "いもうとさん",
    "romaji": "imoutosan",
    "meaning": "Em gái (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 543,
    "word": "外国",
    "hiragana": "がいこく",
    "romaji": "gaikoku",
    "meaning": "Nước ngoài",
    "topicId": "food"
  },
  {
    "id": 544,
    "word": "～時間",
    "hiragana": "～じかん",
    "romaji": "~jikan",
    "meaning": "~ Tiếng",
    "topicId": "other"
  },
  {
    "id": 545,
    "word": "～週間",
    "hiragana": "～しゅうかん",
    "romaji": "~shuukan",
    "meaning": "~ Tuần",
    "topicId": "time_weather"
  },
  {
    "id": 546,
    "word": "～か月",
    "hiragana": "～かげつ",
    "romaji": "~kagetsu",
    "meaning": "~ Tháng",
    "topicId": "time_weather"
  },
  {
    "id": 547,
    "word": "～年",
    "hiragana": "～ねん",
    "romaji": "~nen",
    "meaning": "~ Năm",
    "topicId": "time_weather"
  },
  {
    "id": 548,
    "word": "～ぐらい",
    "hiragana": "～ぐらい",
    "romaji": "~gurai",
    "meaning": "Khoảng ~",
    "topicId": "health"
  },
  {
    "id": 549,
    "word": "どのくらい",
    "hiragana": "どのくらい",
    "romaji": "donokurai",
    "meaning": "Bao lâu / Bao nhiêu",
    "topicId": "other"
  },
  {
    "id": 550,
    "word": "全部で",
    "hiragana": "ぜんぶで",
    "romaji": "zenbude",
    "meaning": "Tổng cộng",
    "topicId": "other"
  },
  {
    "id": 551,
    "word": "みんな",
    "hiragana": "みんな",
    "romaji": "minna",
    "meaning": "Tất cả",
    "topicId": "other"
  },
  {
    "id": 552,
    "word": "～だけ",
    "hiragana": "～だけ",
    "romaji": "~dake",
    "meaning": "Chỉ ~",
    "topicId": "other"
  },
  {
    "id": 553,
    "word": "いらっしゃいませ",
    "hiragana": "いらっしゃいませ",
    "romaji": "irasshaimase",
    "meaning": "Xin mời vào / Xin chào quý khách",
    "topicId": "greetings"
  },
  {
    "id": 554,
    "word": "いい [お]天気ですね",
    "hiragana": "いい [お]てんきですね",
    "romaji": "ii [o]tenkidesune",
    "meaning": "Trời đẹp nhỉ",
    "topicId": "other"
  },
  {
    "id": 555,
    "word": "お出かけですか",
    "hiragana": "おでかけですか",
    "romaji": "odekakedesuka",
    "meaning": "Anh/Chị đi ra ngoài đấy à?",
    "topicId": "greetings"
  },
  {
    "id": 556,
    "word": "ちょっと ～まで",
    "hiragana": "ちょっと ～まで",
    "romaji": "chotto ~made",
    "meaning": "Tôi đi ~ một chút",
    "topicId": "traffic"
  },
  {
    "id": 557,
    "word": "行って いらっしゃい",
    "hiragana": "いって いらっしゃい",
    "romaji": "itte irasshai",
    "meaning": "Anh/Chị đi nhé (người ở lại nói)",
    "topicId": "greetings"
  },
  {
    "id": 558,
    "word": "行って まいります",
    "hiragana": "いって まいります",
    "romaji": "itte mairimasu",
    "meaning": "Tôi đi đây (người đi nói)",
    "topicId": "greetings"
  },
  {
    "id": 559,
    "word": "定食",
    "hiragana": "ていしょく",
    "romaji": "teishoku",
    "meaning": "Cơm suất",
    "topicId": "food"
  },
  {
    "id": 560,
    "word": "ランチ",
    "hiragana": "ランチ",
    "romaji": "ranchi",
    "meaning": "Cơm trưa",
    "topicId": "food"
  },
  {
    "id": 561,
    "word": "天どん",
    "hiragana": "てんどん",
    "romaji": "tendon",
    "meaning": "Cơm tôm chiên tẩm bột",
    "topicId": "food"
  },
  {
    "id": 562,
    "word": "親子どん",
    "hiragana": "おやこどん",
    "romaji": "oyakodon",
    "meaning": "Cơm với thịt gà và trứng",
    "topicId": "food"
  },
  {
    "id": 563,
    "word": "牛どん",
    "hiragana": "ぎゅうどん",
    "romaji": "gyuudon",
    "meaning": "Cơm với thịt bò",
    "topicId": "food"
  },
  {
    "id": 564,
    "word": "焼肉",
    "hiragana": "やきにく",
    "romaji": "yakiniku",
    "meaning": "Thịt nướng",
    "topicId": "food"
  },
  {
    "id": 565,
    "word": "野菜いため",
    "hiragana": "やさいいため",
    "romaji": "yasaiitame",
    "meaning": "Rau xào",
    "topicId": "food"
  },
  {
    "id": 566,
    "word": "漬物",
    "hiragana": "つけもの",
    "romaji": "tsukemono",
    "meaning": "Dưa muối",
    "topicId": "other"
  },
  {
    "id": 567,
    "word": "みそ汁",
    "hiragana": "みそしる",
    "romaji": "misoshiru",
    "meaning": "Súp miso",
    "topicId": "other"
  },
  {
    "id": 568,
    "word": "おにぎり",
    "hiragana": "おにぎり",
    "romaji": "onigiri",
    "meaning": "Cơm nắm",
    "topicId": "food"
  },
  {
    "id": 569,
    "word": "天ぷら",
    "hiragana": "てんぷら",
    "romaji": "tempura",
    "meaning": "Tôm chiên tẩm bột",
    "topicId": "other"
  },
  {
    "id": 570,
    "word": "すし",
    "hiragana": "すし",
    "romaji": "sushi",
    "meaning": "Sushi",
    "topicId": "other"
  },
  {
    "id": 571,
    "word": "うどん",
    "hiragana": "うどん",
    "romaji": "udon",
    "meaning": "Mì Udon",
    "topicId": "food"
  },
  {
    "id": 572,
    "word": "そば",
    "hiragana": "そば",
    "romaji": "soba",
    "meaning": "Mì So-ba",
    "topicId": "food"
  },
  {
    "id": 573,
    "word": "ラーメン",
    "hiragana": "ラーメン",
    "romaji": "raamen",
    "meaning": "Mì Ramen",
    "topicId": "food"
  },
  {
    "id": 574,
    "word": "焼きそば",
    "hiragana": "やきそば",
    "romaji": "yakisoba",
    "meaning": "Mì xào",
    "topicId": "food"
  },
  {
    "id": 575,
    "word": "お好み焼き",
    "hiragana": "お好み焼き",
    "romaji": "okonomiyaki",
    "meaning": "Bánh xào (Okonomiyaki)",
    "topicId": "shopping"
  },
  {
    "id": 576,
    "word": "カレーライス",
    "hiragana": "カレーライス",
    "romaji": "kareeraisu",
    "meaning": "Cơm cà ri",
    "topicId": "food"
  },
  {
    "id": 577,
    "word": "ハンバーグ",
    "hiragana": "ハンバーグ",
    "romaji": "hambaagu",
    "meaning": "Thịt băm viên rán",
    "topicId": "food"
  },
  {
    "id": 578,
    "word": "コロッケ",
    "hiragana": "コロッケ",
    "romaji": "korokke",
    "meaning": "Khoai tây bọc thịt chiên",
    "topicId": "food"
  },
  {
    "id": 579,
    "word": "エビフライ",
    "hiragana": "エビフライ",
    "romaji": "ebifurai",
    "meaning": "Tôm chiên",
    "topicId": "other"
  },
  {
    "id": 580,
    "word": "フライドチキン",
    "hiragana": "フライドチキン",
    "romaji": "furaidochikin",
    "meaning": "Thịt gà chiên",
    "topicId": "food"
  },
  {
    "id": 581,
    "word": "サラダ",
    "hiragana": "サラダ",
    "romaji": "sarada",
    "meaning": "Sa-lát",
    "topicId": "other"
  },
  {
    "id": 582,
    "word": "スープ",
    "hiragana": "スープ",
    "romaji": "suupu",
    "meaning": "Súp",
    "topicId": "other"
  },
  {
    "id": 583,
    "word": "スパゲッティー",
    "hiragana": "スパゲッティー",
    "romaji": "supagettii",
    "meaning": "Mì Ý",
    "topicId": "food"
  },
  {
    "id": 584,
    "word": "ピザ",
    "hiragana": "ピザ",
    "romaji": "piza",
    "meaning": "Bánh Pizza",
    "topicId": "shopping"
  },
  {
    "id": 585,
    "word": "ハンバーガー",
    "hiragana": "ハンバーガー",
    "romaji": "hambaagaa",
    "meaning": "Bánh hăm-bơ-gơ",
    "topicId": "shopping"
  },
  {
    "id": 586,
    "word": "サンドウィッチ",
    "hiragana": "サンドウィッチ",
    "romaji": "sandouicchi",
    "meaning": "Bánh San-uých",
    "topicId": "shopping"
  },
  {
    "id": 587,
    "word": "トースト",
    "hiragana": "トースト",
    "romaji": "toosuto",
    "meaning": "Bánh mì nướng",
    "topicId": "shopping"
  },
  {
    "id": 588,
    "word": "ココア",
    "hiragana": "ココア",
    "romaji": "kokoa",
    "meaning": "Ca-cao",
    "topicId": "other"
  },
  {
    "id": 589,
    "word": "コーラ",
    "hiragana": "コーラ",
    "romaji": "koora",
    "meaning": "Cô-ca cô-la",
    "topicId": "other"
  },
  {
    "id": 590,
    "word": "簡単「な」",
    "hiragana": "かんたん「な」",
    "romaji": "kantan",
    "meaning": "Đơn giản, dễ",
    "topicId": "other"
  },
  {
    "id": 591,
    "word": "近い",
    "hiragana": "ちかい",
    "romaji": "chikai",
    "meaning": "Gần",
    "topicId": "traffic"
  },
  {
    "id": 592,
    "word": "遠い",
    "hiragana": "とおい",
    "romaji": "tooi",
    "meaning": "Xa",
    "topicId": "traffic"
  },
  {
    "id": 593,
    "word": "速い、早い",
    "hiragana": "はやい",
    "romaji": "hayai",
    "meaning": "Nhanh, sớm",
    "topicId": "greetings"
  },
  {
    "id": 594,
    "word": "遅い",
    "hiragana": "おそい",
    "romaji": "osoi",
    "meaning": "Chậm, muộn",
    "topicId": "other"
  },
  {
    "id": 595,
    "word": "多い",
    "hiragana": "おおい",
    "romaji": "ooi",
    "meaning": "Nhiều [người]",
    "topicId": "other"
  },
  {
    "id": 596,
    "word": "少ない",
    "hiragana": "すくない",
    "romaji": "sukunai",
    "meaning": "Ít [người]",
    "topicId": "other"
  },
  {
    "id": 597,
    "word": "暖かい、温かい",
    "hiragana": "あたたかい",
    "romaji": "atatakai",
    "meaning": "Ấm",
    "topicId": "time_weather"
  },
  {
    "id": 598,
    "word": "涼しい",
    "hiragana": "すずしい",
    "romaji": "suzushii",
    "meaning": "Mát",
    "topicId": "time_weather"
  },
  {
    "id": 599,
    "word": "甘い",
    "hiragana": "あまい",
    "romaji": "amai",
    "meaning": "Ngọt",
    "topicId": "other"
  },
  {
    "id": 600,
    "word": "辛い",
    "hiragana": "からい",
    "romaji": "karai",
    "meaning": "Cay",
    "topicId": "other"
  },
  {
    "id": 601,
    "word": "重い",
    "hiragana": "おもい",
    "romaji": "omoi",
    "meaning": "Nặng",
    "topicId": "other"
  },
  {
    "id": 602,
    "word": "軽い",
    "hiragana": "かるい",
    "romaji": "karui",
    "meaning": "Nhẹ",
    "topicId": "other"
  },
  {
    "id": 603,
    "word": "いい",
    "hiragana": "いい",
    "romaji": "ii",
    "meaning": "Thích, chọn, dùng [cà-phê]",
    "topicId": "other"
  },
  {
    "id": 604,
    "word": "季節",
    "hiragana": "きせつ",
    "romaji": "kisetsu",
    "meaning": "Mùa",
    "topicId": "time_weather"
  },
  {
    "id": 605,
    "word": "春",
    "hiragana": "はる",
    "romaji": "haru",
    "meaning": "Mùa xuân",
    "topicId": "time_weather"
  },
  {
    "id": 606,
    "word": "夏",
    "hiragana": "なつ",
    "romaji": "natsu",
    "meaning": "Mùa hè",
    "topicId": "time_weather"
  },
  {
    "id": 607,
    "word": "秋",
    "hiragana": "あき",
    "romaji": "aki",
    "meaning": "Mùa thu",
    "topicId": "time_weather"
  },
  {
    "id": 608,
    "word": "冬",
    "hiragana": "ふゆ",
    "romaji": "fuyu",
    "meaning": "Mùa đông",
    "topicId": "time_weather"
  },
  {
    "id": 609,
    "word": "天気",
    "hiragana": "てんき",
    "romaji": "tenki",
    "meaning": "Thời tiết",
    "topicId": "other"
  },
  {
    "id": 610,
    "word": "雨",
    "hiragana": "あめ",
    "romaji": "ame",
    "meaning": "Mưa",
    "topicId": "time_weather"
  },
  {
    "id": 611,
    "word": "雪",
    "hiragana": "ゆき",
    "romaji": "yuki",
    "meaning": "Tuyệt",
    "topicId": "other"
  },
  {
    "id": 612,
    "word": "曇り",
    "hiragana": "くもり",
    "romaji": "kumori",
    "meaning": "Có mây",
    "topicId": "other"
  },
  {
    "id": 613,
    "word": "ホテル",
    "hiragana": "ホテル",
    "romaji": "hoteru",
    "meaning": "Khách sạn",
    "topicId": "shopping"
  },
  {
    "id": 614,
    "word": "空港",
    "hiragana": "くうこう",
    "romaji": "kuukou",
    "meaning": "Sân bay",
    "topicId": "traffic"
  },
  {
    "id": 615,
    "word": "海",
    "hiragana": "うみ",
    "romaji": "umi",
    "meaning": "Biển, đại dương",
    "topicId": "travel"
  },
  {
    "id": 616,
    "word": "世界",
    "hiragana": "せかい",
    "romaji": "sekai",
    "meaning": "Thế giới",
    "topicId": "other"
  },
  {
    "id": 617,
    "word": "パーティー",
    "hiragana": "パーティー",
    "romaji": "paatii",
    "meaning": "Tiệc",
    "topicId": "other"
  },
  {
    "id": 618,
    "word": "「お」祭り",
    "hiragana": "「お」まつり",
    "romaji": "[o]bento",
    "meaning": "Lễ hội",
    "topicId": "travel"
  },
  {
    "id": 619,
    "word": "試験",
    "hiragana": "しけん",
    "romaji": "shiken",
    "meaning": "Kỳ thi, bài thi",
    "topicId": "other"
  },
  {
    "id": 620,
    "word": "すき焼き",
    "hiragana": "すきやき",
    "romaji": "sukiyaki",
    "meaning": "Sukiyaki (món thịt bò nấu rau)",
    "topicId": "food"
  },
  {
    "id": 621,
    "word": "刺身",
    "hiragana": "さしみ",
    "romaji": "sashimi",
    "meaning": "Sashimi (món gỏi cá sống)",
    "topicId": "food"
  },
  {
    "id": 622,
    "word": "「お」すし",
    "hiragana": "「お」すし",
    "romaji": "[o]sushi",
    "meaning": "Sushi",
    "topicId": "other"
  },
  {
    "id": 623,
    "word": "生け花",
    "hiragana": "いけばな",
    "romaji": "ikebana",
    "meaning": "Nghệ thuật cắm hoa",
    "topicId": "time_weather"
  },
  {
    "id": 624,
    "word": "紅葉",
    "hiragana": "もみじ",
    "romaji": "momiji",
    "meaning": "Lá đỏ",
    "topicId": "other"
  },
  {
    "id": 625,
    "word": "どちらも",
    "hiragana": "どちらも",
    "romaji": "dochiramo",
    "meaning": "Cả hai",
    "topicId": "other"
  },
  {
    "id": 626,
    "word": "ずっと",
    "hiragana": "ずっと",
    "romaji": "zutto",
    "meaning": "(Hơn) hẳn",
    "topicId": "other"
  },
  {
    "id": 627,
    "word": "初めて",
    "hiragana": "はじめて",
    "romaji": "hajimete",
    "meaning": "Lần đầu tiên",
    "topicId": "greetings"
  },
  {
    "id": 628,
    "word": "ただいま",
    "hiragana": "ただいま",
    "romaji": "tadaima",
    "meaning": "Tôi đã về đây.",
    "topicId": "traffic"
  },
  {
    "id": 629,
    "word": "お帰りなさい",
    "hiragana": "おかえりなさい",
    "romaji": "okaerinasai",
    "meaning": "Anh/Chị đã về đấy à.",
    "topicId": "greetings"
  },
  {
    "id": 630,
    "word": "すごいですね",
    "hiragana": "すごいですね",
    "romaji": "sugoidesune",
    "meaning": "Ghê quá nhỉ, hay quá nhỉ.",
    "topicId": "other"
  },
  {
    "id": 631,
    "word": "でも",
    "hiragana": "でも",
    "romaji": "demo",
    "meaning": "Nhưng",
    "topicId": "other"
  },
  {
    "id": 632,
    "word": "疲れました",
    "hiragana": "つかれました",
    "romaji": "tsukaremashita",
    "meaning": "Tôi mệt rồi.",
    "topicId": "health"
  },
  {
    "id": 633,
    "word": "祇園祭",
    "hiragana": "ぎおんまつり",
    "romaji": "gionmatsuri",
    "meaning": "Lễ hội Gion (Kyoto)",
    "topicId": "travel"
  },
  {
    "id": 634,
    "word": "ホンコン",
    "hiragana": "ホンコン",
    "romaji": "honkon",
    "meaning": "Hồng Kông",
    "topicId": "travel"
  },
  {
    "id": 635,
    "word": "東照宮",
    "hiragana": "とうしょうぐう",
    "romaji": "toushouguu",
    "meaning": "Đền Nikko Toshogu",
    "topicId": "health"
  },
  {
    "id": 636,
    "word": "遊びます",
    "hiragana": "あそびます",
    "romaji": "asobimasu",
    "meaning": "Chơi",
    "topicId": "travel"
  },
  {
    "id": 637,
    "word": "泳ぎます",
    "hiragana": "およぎます",
    "romaji": "oyogimasu",
    "meaning": "Bơi",
    "topicId": "other"
  },
  {
    "id": 638,
    "word": "迎えます",
    "hiragana": "むかえます",
    "romaji": "mukaemasu",
    "meaning": "Đón",
    "topicId": "other"
  },
  {
    "id": 639,
    "word": "疲れます",
    "hiragana": "つかれます",
    "romaji": "tsukaremasu",
    "meaning": "Mệt",
    "topicId": "health"
  },
  {
    "id": 640,
    "word": "出します",
    "hiragana": "だします",
    "romaji": "dashimasu",
    "meaning": "Gửi [thư]",
    "topicId": "lifestyle"
  },
  {
    "id": 641,
    "word": "入ります",
    "hiragana": "はいります",
    "romaji": "hairimasu",
    "meaning": "Vào [quán giải khát]",
    "topicId": "food"
  },
  {
    "id": 642,
    "word": "出ます",
    "hiragana": "でます",
    "romaji": "demasu",
    "meaning": "Ra, ra khỏi [quán giải khát]",
    "topicId": "food"
  },
  {
    "id": 643,
    "word": "結婚します",
    "hiragana": "けっこんします",
    "romaji": "kekkonshimasu",
    "meaning": "Kết hôn, lập gia đình",
    "topicId": "greetings"
  },
  {
    "id": 644,
    "word": "買い物します",
    "hiragana": "かいものします",
    "romaji": "kaimonoshimasu",
    "meaning": "Mua hàng",
    "topicId": "shopping"
  },
  {
    "id": 645,
    "word": "食事します",
    "hiragana": "しょくじします",
    "romaji": "shokujishimasu",
    "meaning": "Ăn cơm",
    "topicId": "food"
  },
  {
    "id": 646,
    "word": "散歩します",
    "hiragana": "さんぽします",
    "romaji": "sanposhimasu",
    "meaning": "Đi dạo [ở công viên]",
    "topicId": "traffic"
  },
  {
    "id": 647,
    "word": "大変「な」",
    "hiragana": "たいへん「な」",
    "romaji": "taihen",
    "meaning": "Vất vả, khó khăn, khổ",
    "topicId": "food"
  },
  {
    "id": 648,
    "word": "欲しい",
    "hiragana": "ほしい",
    "romaji": "hoshii",
    "meaning": "Muốn có",
    "topicId": "other"
  },
  {
    "id": 649,
    "word": "寂しい",
    "hiragana": "さびしい",
    "romaji": "sabishii",
    "meaning": "Buồn, cô đơn",
    "topicId": "other"
  },
  {
    "id": 650,
    "word": "広い",
    "hiragana": "ひろい",
    "romaji": "hiroi",
    "meaning": "Rộng",
    "topicId": "other"
  },
  {
    "id": 651,
    "word": "狭い",
    "hiragana": "せまい",
    "romaji": "semai",
    "meaning": "Chật, hẹp",
    "topicId": "other"
  },
  {
    "id": 652,
    "word": "市役所",
    "hiragana": "しやくしょ",
    "romaji": "shiyakusho",
    "meaning": "Văn phòng hành chính quận, thành phố",
    "topicId": "food"
  },
  {
    "id": 653,
    "word": "プール",
    "hiragana": "プール",
    "romaji": "puuru",
    "meaning": "Bể bơi",
    "topicId": "other"
  },
  {
    "id": 654,
    "word": "川",
    "hiragana": "かわ",
    "romaji": "kawa",
    "meaning": "Sông",
    "topicId": "travel"
  },
  {
    "id": 655,
    "word": "経済",
    "hiragana": "けいざい",
    "romaji": "keizai",
    "meaning": "Kinh tế",
    "topicId": "other"
  },
  {
    "id": 656,
    "word": "美術",
    "hiragana": "びじゅつ",
    "romaji": "bijutsu",
    "meaning": "Mỹ thuật",
    "topicId": "time_weather"
  },
  {
    "id": 657,
    "word": "釣り",
    "hiragana": "つり",
    "romaji": "tsuri",
    "meaning": "Việc câu cá",
    "topicId": "food"
  },
  {
    "id": 658,
    "word": "スキー",
    "hiragana": "スキー",
    "romaji": "sukii",
    "meaning": "Việc trượt tuyết",
    "topicId": "time_weather"
  },
  {
    "id": 659,
    "word": "会議",
    "hiragana": "かいぎ",
    "romaji": "kaigi",
    "meaning": "Họp, cuộc họp",
    "topicId": "work"
  },
  {
    "id": 660,
    "word": "登録",
    "hiragana": "とうろく",
    "romaji": "touroku",
    "meaning": "Việc đăng ký",
    "topicId": "food"
  },
  {
    "id": 661,
    "word": "週末",
    "hiragana": "しゅうまつ",
    "romaji": "shuumatsu",
    "meaning": "Cuối tuần",
    "topicId": "time_weather"
  },
  {
    "id": 662,
    "word": "～ごろ",
    "hiragana": "～ごろ",
    "romaji": "goro",
    "meaning": "Khoảng ~ (dùng cho thời gian)",
    "topicId": "health"
  },
  {
    "id": 663,
    "word": "何か",
    "hiragana": "なにか",
    "romaji": "nanika",
    "meaning": "Cái gì đó",
    "topicId": "food"
  },
  {
    "id": 664,
    "word": "どこか",
    "hiragana": "どこか",
    "romaji": "dokoka",
    "meaning": "Đâu đó, chỗ nào đó",
    "topicId": "other"
  },
  {
    "id": 665,
    "word": "お腹が 空きました",
    "hiragana": "おなかが すきました",
    "romaji": "onakagasukimashita",
    "meaning": "(Tôi) đói rồi.",
    "topicId": "other"
  },
  {
    "id": 666,
    "word": "お腹が 一杯です",
    "hiragana": "おなかが いっぱいです",
    "romaji": "onakagaippaidesu",
    "meaning": "(Tôi) no rồi.",
    "topicId": "other"
  },
  {
    "id": 667,
    "word": "喉が 乾きました",
    "hiragana": "のどが かわきました",
    "romaji": "nodogakawakimashita",
    "meaning": "(Tôi) khát.",
    "topicId": "anime"
  },
  {
    "id": 668,
    "word": "そうしましょう",
    "hiragana": "そうしましょう",
    "romaji": "soushimashou",
    "meaning": "Nhất trí./ Chúng ta thống nhất như thế.",
    "topicId": "other"
  },
  {
    "id": 669,
    "word": "ご注文は？",
    "hiragana": "ご注文は？",
    "romaji": "gochuumonwa",
    "meaning": "Anh/Chị dùng món gì ạ?",
    "topicId": "greetings"
  },
  {
    "id": 670,
    "word": "「少々」お待ちください",
    "hiragana": "「しょうしょう」おまちください",
    "romaji": "shoushouomachikudasai",
    "meaning": "Xin anh/chị vui lòng đợi [một chút].",
    "topicId": "greetings"
  },
  {
    "id": 671,
    "word": "別々に",
    "hiragana": "べつべつに",
    "romaji": "betsubetsuni",
    "meaning": "Riêng ra/để riêng",
    "topicId": "other"
  },
  {
    "id": 672,
    "word": "博物館",
    "hiragana": "はくぶつかん",
    "romaji": "hakubutsukan",
    "meaning": "Bảo tàng",
    "topicId": "travel"
  },
  {
    "id": 673,
    "word": "美術館",
    "hiragana": "びじゅつかん",
    "romaji": "bijutsukan",
    "meaning": "Bảo tàng mỹ thuật",
    "topicId": "time_weather"
  },
  {
    "id": 674,
    "word": "図書館",
    "hiragana": "としょかん",
    "romaji": "toshokan",
    "meaning": "Thư viện",
    "topicId": "lifestyle"
  },
  {
    "id": 675,
    "word": "映画館",
    "hiragana": "えいがかん",
    "romaji": "eigakan",
    "meaning": "Rạp chiếu phim",
    "topicId": "anime"
  },
  {
    "id": 676,
    "word": "動物園",
    "hiragana": "どうぶつえん",
    "romaji": "doubutsuen",
    "meaning": "Vườn bách thú",
    "topicId": "other"
  },
  {
    "id": 677,
    "word": "植物園",
    "hiragana": "しょくぶつえん",
    "romaji": "shokubutsuen",
    "meaning": "Vườn bách thảo",
    "topicId": "other"
  },
  {
    "id": 678,
    "word": "遊園地",
    "hiragana": "ゆうえんち",
    "romaji": "yuuenchi",
    "meaning": "Công viên giải trí",
    "topicId": "travel"
  },
  {
    "id": 679,
    "word": "お寺",
    "hiragana": "おてら",
    "romaji": "otera",
    "meaning": "Chùa",
    "topicId": "travel"
  },
  {
    "id": 680,
    "word": "神社",
    "hiragana": "じんじゃ",
    "romaji": "jinja",
    "meaning": "Đền thờ đạo Thần",
    "topicId": "travel"
  },
  {
    "id": 681,
    "word": "教会",
    "hiragana": "きょうかい",
    "romaji": "kyoukai",
    "meaning": "Nhà thờ",
    "topicId": "lifestyle"
  },
  {
    "id": 682,
    "word": "モスク",
    "hiragana": "モスク",
    "romaji": "mosuku",
    "meaning": "Đền thờ đạo Hồi",
    "topicId": "travel"
  },
  {
    "id": 683,
    "word": "体育館",
    "hiragana": "たいいくかん",
    "romaji": "taiikukan",
    "meaning": "Nhà tập thể dục thể thao",
    "topicId": "lifestyle"
  },
  {
    "id": 684,
    "word": "大使館",
    "hiragana": "たいしかん",
    "romaji": "taishikan",
    "meaning": "Đại sứ quán",
    "topicId": "food"
  },
  {
    "id": 685,
    "word": "入国管理局",
    "hiragana": "にゅうこくかんりきょく",
    "romaji": "nyuukokukanrikyoku",
    "meaning": "Cục xuất nhập cảnh",
    "topicId": "travel"
  },
  {
    "id": 686,
    "word": "市役所",
    "hiragana": "しあくしょ",
    "romaji": "shiyakusho",
    "meaning": "Văn phòng hành chính quận, thành phố",
    "topicId": "food"
  },
  {
    "id": 687,
    "word": "警察署",
    "hiragana": "けいさつしょ",
    "romaji": "keisatsusho",
    "meaning": "Đồn cảnh sát",
    "topicId": "lifestyle"
  },
  {
    "id": 688,
    "word": "交番",
    "hiragana": "こうばん",
    "romaji": "kouban",
    "meaning": "Bốt cảnh sát",
    "topicId": "greetings"
  },
  {
    "id": 689,
    "word": "消防署",
    "hiragana": "しょうぼうしょ",
    "romaji": "shoubousho",
    "meaning": "Trạm cứu hỏa",
    "topicId": "other"
  },
  {
    "id": 690,
    "word": "駐車場",
    "hiragana": "ちゅうしゃじょう",
    "romaji": "chuushajou",
    "meaning": "Bãi đỗ xe",
    "topicId": "traffic"
  },
  {
    "id": 691,
    "word": "高校",
    "hiragana": "こうこう",
    "romaji": "koukou",
    "meaning": "Trường phổ thông trung học",
    "topicId": "other"
  },
  {
    "id": 692,
    "word": "中学校",
    "hiragana": "ちゅうがっこう",
    "romaji": "chuugakkou",
    "meaning": "Trường phổ thông cơ sở",
    "topicId": "other"
  },
  {
    "id": 693,
    "word": "小学校",
    "hiragana": "しょうがっこう",
    "romaji": "shougakkou",
    "meaning": "Trường tiểu học",
    "topicId": "other"
  },
  {
    "id": 694,
    "word": "幼稚園",
    "hiragana": "ようちえん",
    "romaji": "youchien",
    "meaning": "Trường mẫu giáo",
    "topicId": "shopping"
  },
  {
    "id": 695,
    "word": "肉屋",
    "hiragana": "にくや",
    "romaji": "nikuya",
    "meaning": "Cửa hàng thịt",
    "topicId": "shopping"
  },
  {
    "id": 696,
    "word": "パン屋",
    "hiragana": "パンや",
    "romaji": "panya",
    "meaning": "Cửa hàng bánh mì",
    "topicId": "shopping"
  },
  {
    "id": 697,
    "word": "魚屋",
    "hiragana": "さかなや",
    "romaji": "sakanaya",
    "meaning": "Cửa hàng cá",
    "topicId": "shopping"
  },
  {
    "id": 698,
    "word": "酒屋",
    "hiragana": "さかや",
    "romaji": "sakaya",
    "meaning": "Cửa hàng rượu",
    "topicId": "shopping"
  },
  {
    "id": 699,
    "word": "八百屋",
    "hiragana": "やおや",
    "romaji": "yaoya",
    "meaning": "Cửa hàng rau",
    "topicId": "shopping"
  },
  {
    "id": 700,
    "word": "コンビニ",
    "hiragana": "コンビニ",
    "romaji": "konbini",
    "meaning": "Cửa hàng tiện lợi",
    "topicId": "shopping"
  },
  {
    "id": 701,
    "word": "デパート",
    "hiragana": "デパート",
    "romaji": "depaato",
    "meaning": "Cửa hàng bách hóa",
    "topicId": "shopping"
  },
  {
    "id": 702,
    "word": "つけます",
    "hiragana": "つけます",
    "romaji": "tsukemasu",
    "meaning": "Bật (điện, máy điều hòa)",
    "topicId": "traffic"
  },
  {
    "id": 703,
    "word": "消します",
    "hiragana": "けします",
    "romaji": "keshimasu",
    "meaning": "Tắt (điện, máy điều hòa)",
    "topicId": "traffic"
  },
  {
    "id": 704,
    "word": "開けます",
    "hiragana": "あけます",
    "romaji": "akemasu",
    "meaning": "Mở (cửa, cửa và)",
    "topicId": "lifestyle"
  },
  {
    "id": 705,
    "word": "閉めます",
    "hiragana": "しめます",
    "romaji": "shimemasu",
    "meaning": "Đóng (cửa, cửa sổ)",
    "topicId": "lifestyle"
  },
  {
    "id": 706,
    "word": "急ぎます",
    "hiragana": "いそぎます",
    "romaji": "isogimasu",
    "meaning": "Vội, gấp",
    "topicId": "other"
  },
  {
    "id": 707,
    "word": "待ちます",
    "hiragana": "まちます",
    "romaji": "machimasu",
    "meaning": "Đợi, chờ",
    "topicId": "other"
  },
  {
    "id": 708,
    "word": "止めます",
    "hiragana": "とめます",
    "romaji": "tomemasu",
    "meaning": "Dừng (băng, ô-tô), đỗ (ô-tô)",
    "topicId": "food"
  },
  {
    "id": 709,
    "word": "曲がります",
    "hiragana": "まがります",
    "romaji": "magarimasu",
    "meaning": "Rẽ, quẹo [phải]",
    "topicId": "other"
  },
  {
    "id": 710,
    "word": "持ちます",
    "hiragana": "もちます",
    "romaji": "mochimasu",
    "meaning": "Mang, cầm",
    "topicId": "other"
  },
  {
    "id": 711,
    "word": "手伝います",
    "hiragana": "てつだいます",
    "romaji": "tetsudaimasu",
    "meaning": "Giúp (làm việc)",
    "topicId": "work"
  },
  {
    "id": 712,
    "word": "呼びます",
    "hiragana": "よびます",
    "romaji": "yobimasu",
    "meaning": "Gọi (tắc-xi, tên)",
    "topicId": "other"
  },
  {
    "id": 713,
    "word": "話します",
    "hiragana": "はなします",
    "romaji": "hanashimasu",
    "meaning": "Nói, nói chuyện",
    "topicId": "other"
  },
  {
    "id": 714,
    "word": "見せます",
    "hiragana": "みせます",
    "romaji": "misemasu",
    "meaning": "Cho xem, trình",
    "topicId": "greetings"
  },
  {
    "id": 715,
    "word": "始めます",
    "hiragana": "はじめます",
    "romaji": "hajimemasu",
    "meaning": "Bắt đầu",
    "topicId": "health"
  },
  {
    "id": 716,
    "word": "降ります",
    "hiragana": "ふります",
    "romaji": "furimasu",
    "meaning": "Rơi [mưa, tuyết]",
    "topicId": "time_weather"
  },
  {
    "id": 717,
    "word": "コピーします",
    "hiragana": "コピーします",
    "romaji": "kopiishimasu",
    "meaning": "Copy",
    "topicId": "other"
  },
  {
    "id": 718,
    "word": "エアコン",
    "hiragana": "エアコン",
    "romaji": "eakon",
    "meaning": "Máy điều hòa",
    "topicId": "traffic"
  },
  {
    "id": 719,
    "word": "パスポート",
    "hiragana": "パスポート",
    "romaji": "pasupooto",
    "meaning": "Hộ chiếu",
    "topicId": "other"
  },
  {
    "id": 720,
    "word": "名前",
    "hiragana": "なまえ",
    "romaji": "namae",
    "meaning": "Tên",
    "topicId": "other"
  },
  {
    "id": 721,
    "word": "住所",
    "hiragana": "じゅうしょ",
    "romaji": "juusho",
    "meaning": "Địa chỉ",
    "topicId": "other"
  },
  {
    "id": 722,
    "word": "地図",
    "hiragana": "ちず",
    "romaji": "chizu",
    "meaning": "Bản đồ",
    "topicId": "traffic"
  },
  {
    "id": 723,
    "word": "塩",
    "hiragana": "しお",
    "romaji": "shio",
    "meaning": "Muối",
    "topicId": "other"
  },
  {
    "id": 724,
    "word": "読み方",
    "hiragana": "よみかた",
    "romaji": "yomikata",
    "meaning": "Cách đọc",
    "topicId": "food"
  },
  {
    "id": 725,
    "word": "～方",
    "hiragana": "～かた",
    "romaji": "kata",
    "meaning": "Cách ~",
    "topicId": "food"
  },
  {
    "id": 726,
    "word": "ゆっくり",
    "hiragana": "ゆっくり",
    "romaji": "yukkuri",
    "meaning": "Chậm, thong thả, thoải mái",
    "topicId": "health"
  },
  {
    "id": 727,
    "word": "直ぐ",
    "hiragana": "すぐ",
    "romaji": "sugu",
    "meaning": "Ngay, lập tức",
    "topicId": "traffic"
  },
  {
    "id": 728,
    "word": "また",
    "hiragana": "また",
    "romaji": "mata",
    "meaning": "Lại (~đến)",
    "topicId": "traffic"
  },
  {
    "id": 729,
    "word": "後で",
    "hiragana": "あとで",
    "romaji": "atode",
    "meaning": "Sau",
    "topicId": "other"
  },
  {
    "id": 730,
    "word": "もう 少し",
    "hiragana": "もう すこし",
    "romaji": "mousukoshi",
    "meaning": "Thêm một chút nữa thôi",
    "topicId": "other"
  },
  {
    "id": 731,
    "word": "もう～",
    "hiragana": "もう～",
    "romaji": "mou",
    "meaning": "Thêm ~",
    "topicId": "other"
  },
  {
    "id": 732,
    "word": "いいですよ",
    "hiragana": "いいですよ",
    "romaji": "iidesuyo",
    "meaning": "Được chứ./Được ạ.",
    "topicId": "other"
  },
  {
    "id": 733,
    "word": "さあ",
    "hiragana": "さあ",
    "romaji": "saa",
    "meaning": "Thôi,/nào, (dùng để thúc giục hoặc khuyến khích ai đó làm gì)",
    "topicId": "health"
  },
  {
    "id": 734,
    "word": "あれ？",
    "hiragana": "あれ？",
    "romaji": "are",
    "meaning": "Ô! (câu cảm thán khi phát hiện hoặc thấy cái gì đó lạ hoặc bất ngờ)",
    "topicId": "food"
  },
  {
    "id": 735,
    "word": "信号を 右へ 曲がって ください",
    "hiragana": "しんごうを みぎへ まがってください",
    "romaji": "shingouwomigiemagattekudasai",
    "meaning": "Anh/Chị rẽ phải ở chỗ đèn tín hiệu.",
    "topicId": "greetings"
  },
  {
    "id": 736,
    "word": "真っ直ぐ",
    "hiragana": "まっすぐ",
    "romaji": "massugu",
    "meaning": "Thẳng",
    "topicId": "other"
  },
  {
    "id": 737,
    "word": "これで お願いします",
    "hiragana": "これで おねがいします",
    "romaji": "koredeonegaishimasu",
    "meaning": "Gửi anh tiền này.",
    "topicId": "greetings"
  },
  {
    "id": 738,
    "word": "お釣り",
    "hiragana": "おつり",
    "romaji": "otsuri",
    "meaning": "Tiền lẻ",
    "topicId": "shopping"
  },
  {
    "id": 739,
    "word": "切符売り場",
    "hiragana": "きっぷうりば",
    "romaji": "kippuuriba",
    "meaning": "Chỗ bán vé",
    "topicId": "shopping"
  },
  {
    "id": 740,
    "word": "自動券売機",
    "hiragana": "じどうけんばいき",
    "romaji": "jidoukenbaiki",
    "meaning": "Máy bán vé tự động",
    "topicId": "shopping"
  },
  {
    "id": 741,
    "word": "精算機",
    "hiragana": "せいさんき",
    "romaji": "seisanki",
    "meaning": "Máy thanh toán tiền thiếu",
    "topicId": "greetings"
  },
  {
    "id": 742,
    "word": "改札口",
    "hiragana": "かいさつぐち",
    "romaji": "kaisatsuguchi",
    "meaning": "Cửa soát vé",
    "topicId": "traffic"
  },
  {
    "id": 743,
    "word": "出口",
    "hiragana": "でぐち",
    "romaji": "deguchi",
    "meaning": "Cửa ra",
    "topicId": "lifestyle"
  },
  {
    "id": 744,
    "word": "入口",
    "hiragana": "いりぐち",
    "romaji": "iriguchi",
    "meaning": "Cửa vào",
    "topicId": "lifestyle"
  },
  {
    "id": 745,
    "word": "東口",
    "hiragana": "ひがしぐち",
    "romaji": "higashiguchi",
    "meaning": "Cửa Đông",
    "topicId": "lifestyle"
  },
  {
    "id": 746,
    "word": "西口",
    "hiragana": "にしぐち",
    "romaji": "nishiguchi",
    "meaning": "Cửa Tây",
    "topicId": "lifestyle"
  },
  {
    "id": 747,
    "word": "南口",
    "hiragana": "みなみぐち",
    "romaji": "minamiguchi",
    "meaning": "Cửa Nam",
    "topicId": "lifestyle"
  },
  {
    "id": 748,
    "word": "北口",
    "hiragana": "きたぐち",
    "romaji": "kitaguchi",
    "meaning": "Cửa Bắc",
    "topicId": "lifestyle"
  },
  {
    "id": 749,
    "word": "中央口",
    "hiragana": "ちゅうおうぐち",
    "romaji": "chuuouguchi",
    "meaning": "Cửa Trung tâm",
    "topicId": "lifestyle"
  },
  {
    "id": 750,
    "word": "プラットホーム",
    "hiragana": "プラットホーム",
    "romaji": "purattohoomu",
    "meaning": "Sân ga",
    "topicId": "traffic"
  },
  {
    "id": 751,
    "word": "売店",
    "hiragana": "ばいてん",
    "romaji": "baiten",
    "meaning": "Quầy bán hàng, ki-ốt",
    "topicId": "shopping"
  },
  {
    "id": 752,
    "word": "コインロッカー",
    "hiragana": "コインロッカー",
    "romaji": "koinrokkaa",
    "meaning": "Hòm khóa cho thuê dùng tiền xu",
    "topicId": "shopping"
  },
  {
    "id": 753,
    "word": "タクシー乗り場",
    "hiragana": "タクシーのりば",
    "romaji": "takushiinoriba",
    "meaning": "Điểm lên xe tắc-xi",
    "topicId": "traffic"
  },
  {
    "id": 754,
    "word": "バスターミナル",
    "hiragana": "バスターミナル",
    "romaji": "basutaaminaru",
    "meaning": "Bến xe buýt",
    "topicId": "traffic"
  },
  {
    "id": 755,
    "word": "バス停",
    "hiragana": "バスてい",
    "romaji": "basutei",
    "meaning": "Điểm lên xuống xe buýt",
    "topicId": "food"
  },
  {
    "id": 756,
    "word": "特急",
    "hiragana": "とっきゅう",
    "romaji": "tokkyuu",
    "meaning": "Tốc hành đặc biệt",
    "topicId": "other"
  },
  {
    "id": 757,
    "word": "急行",
    "hiragana": "きゅうこう",
    "romaji": "kyuukou",
    "meaning": "Tốc hành",
    "topicId": "other"
  },
  {
    "id": 758,
    "word": "快速",
    "hiragana": "かいそく",
    "romaji": "kaisoku",
    "meaning": "Nhanh",
    "topicId": "greetings"
  },
  {
    "id": 759,
    "word": "準急",
    "hiragana": "じゅんきゅう",
    "romaji": "junkyuu",
    "meaning": "Bán tốc hành",
    "topicId": "shopping"
  },
  {
    "id": 760,
    "word": "普通",
    "hiragana": "ふつう",
    "romaji": "futsuu",
    "meaning": "(Tàu) thường, địa phương",
    "topicId": "traffic"
  },
  {
    "id": 761,
    "word": "時刻表",
    "hiragana": "じこくひょう",
    "romaji": "jikokuhyou",
    "meaning": "Bảng giờ chạy tàu",
    "topicId": "traffic"
  },
  {
    "id": 762,
    "word": "～発",
    "hiragana": "～はつ",
    "romaji": "hatsu",
    "meaning": "Xuất phát từ ~",
    "topicId": "anime"
  },
  {
    "id": 763,
    "word": "～着",
    "hiragana": "～ちゃく",
    "romaji": "chaku",
    "meaning": "Đến ~",
    "topicId": "traffic"
  },
  {
    "id": 764,
    "word": "東京行き",
    "hiragana": "とうきょういき",
    "romaji": "toukyouiki",
    "meaning": "Đi [Tokyo]",
    "topicId": "traffic"
  },
  {
    "id": 765,
    "word": "定期券",
    "hiragana": "ていきけん",
    "romaji": "teikiken",
    "meaning": "Vé tháng",
    "topicId": "traffic"
  },
  {
    "id": 766,
    "word": "回数券",
    "hiragana": "かいすうけん",
    "romaji": "kaisuuken",
    "meaning": "Vé giảm giá khi đi nhiều",
    "topicId": "shopping"
  },
  {
    "id": 767,
    "word": "片道",
    "hiragana": "かたみち",
    "romaji": "katamichi",
    "meaning": "Một chiều",
    "topicId": "time_weather"
  },
  {
    "id": 768,
    "word": "往復",
    "hiragana": "おうふく",
    "romaji": "oufuku",
    "meaning": "Hai chiều, đi và về",
    "topicId": "traffic"
  },
  {
    "id": 769,
    "word": "立ちます",
    "hiragana": "たちます",
    "romaji": "tachimasu",
    "meaning": "Đứng",
    "topicId": "other"
  },
  {
    "id": 770,
    "word": "座ります",
    "hiragana": "すわります",
    "romaji": "suwarimasu",
    "meaning": "Ngồi",
    "topicId": "other"
  },
  {
    "id": 771,
    "word": "使います",
    "hiragana": "つかいます",
    "romaji": "tsukaimasu",
    "meaning": "Dùng, sử dụng",
    "topicId": "other"
  },
  {
    "id": 772,
    "word": "置きます",
    "hiragana": "おきます",
    "romaji": "okimasu",
    "meaning": "Đặt, để",
    "topicId": "other"
  },
  {
    "id": 773,
    "word": "作ります",
    "hiragana": "つくります",
    "romaji": "tsukurimasu",
    "meaning": "Làm, chế tạo, sản xuất",
    "topicId": "work"
  },
  {
    "id": 774,
    "word": "売ります",
    "hiragana": "うります",
    "romaji": "urimasu",
    "meaning": "Bán",
    "topicId": "shopping"
  },
  {
    "id": 775,
    "word": "知ります",
    "hiragana": "しります",
    "romaji": "shirimasu",
    "meaning": "Biết",
    "topicId": "other"
  },
  {
    "id": 776,
    "word": "住みます",
    "hiragana": "すみます",
    "romaji": "sumimasu",
    "meaning": "Sống, ở",
    "topicId": "other"
  },
  {
    "id": 777,
    "word": "研究します",
    "hiragana": "けんきゅうします",
    "romaji": "kenkyuushimasu",
    "meaning": "Nghiên cứu",
    "topicId": "other"
  },
  {
    "id": 778,
    "word": "知っています",
    "hiragana": "しっています",
    "romaji": "shitteimasu",
    "meaning": "Biết (trạng thái)",
    "topicId": "other"
  },
  {
    "id": 779,
    "word": "住んでいます",
    "hiragana": "すんでいます",
    "romaji": "sundeimasu",
    "meaning": "Sống (trạng thái) [ở Osaka]",
    "topicId": "other"
  },
  {
    "id": 780,
    "word": "資料",
    "hiragana": "しりょう",
    "romaji": "shiryou",
    "meaning": "Tài liệu, tư liệu",
    "topicId": "work"
  },
  {
    "id": 781,
    "word": "カタログ",
    "hiragana": "カタログ",
    "romaji": "katarogu",
    "meaning": "Ca-ta-lô",
    "topicId": "other"
  },
  {
    "id": 782,
    "word": "服",
    "hiragana": "ふく",
    "romaji": "fuku",
    "meaning": "Quần áo",
    "topicId": "other"
  },
  {
    "id": 783,
    "word": "製品",
    "hiragana": "せいひん",
    "romaji": "seihin",
    "meaning": "Sản phẩm",
    "topicId": "other"
  },
  {
    "id": 784,
    "word": "ソフト",
    "hiragana": "ソフト",
    "romaji": "sofuto",
    "meaning": "Phần mềm",
    "topicId": "other"
  },
  {
    "id": 785,
    "word": "専門",
    "hiragana": "せんもん",
    "romaji": "senmon",
    "meaning": "Chuyên môn",
    "topicId": "other"
  },
  {
    "id": 786,
    "word": "歯医者",
    "hiragana": "はいしゃ",
    "romaji": "haisha",
    "meaning": "Nha sĩ",
    "topicId": "other"
  },
  {
    "id": 787,
    "word": "床屋",
    "hiragana": "とこや",
    "romaji": "tokoya",
    "meaning": "Hiệu cắt tóc",
    "topicId": "other"
  },
  {
    "id": 788,
    "word": "プレイガイド",
    "hiragana": "プレイガイド",
    "romaji": "pureigaido",
    "meaning": "Quầy bán vé (trong nhà hát)",
    "topicId": "shopping"
  },
  {
    "id": 789,
    "word": "独身",
    "hiragana": "どくしん",
    "romaji": "dokushin",
    "meaning": "Độc thân",
    "topicId": "other"
  },
  {
    "id": 790,
    "word": "特に",
    "hiragana": "とくに",
    "romaji": "tokuni",
    "meaning": "Đặc biệt",
    "topicId": "other"
  },
  {
    "id": 791,
    "word": "思い出します",
    "hiragana": "おもいだします",
    "romaji": "omoidashimasu",
    "meaning": "Nhớ lại, hồi tưởng lại",
    "topicId": "travel"
  },
  {
    "id": 792,
    "word": "ご家族",
    "hiragana": "ごかぞく",
    "romaji": "gokazoku",
    "meaning": "Gia đình (dùng cho người khác)",
    "topicId": "greetings"
  },
  {
    "id": 793,
    "word": "いらっしゃいます",
    "hiragana": "いらっしゃいます",
    "romaji": "irasshaimasu",
    "meaning": "Thể kính trọng của 「います」",
    "topicId": "other"
  },
  {
    "id": 794,
    "word": "公務員",
    "hiragana": "こうむいん",
    "romaji": "koumuin",
    "meaning": "Công chức",
    "topicId": "other"
  },
  {
    "id": 795,
    "word": "駅員",
    "hiragana": "えきいん",
    "romaji": "ekiin",
    "meaning": "Nhân viên nhà ga",
    "topicId": "traffic"
  },
  {
    "id": 796,
    "word": "郵便局員",
    "hiragana": "ゆうびんきょくいん",
    "romaji": "yuubinkyokuin",
    "meaning": "Nhân viên bưu điện",
    "topicId": "traffic"
  },
  {
    "id": 797,
    "word": "店員",
    "hiragana": "てんいん",
    "romaji": "tenin",
    "meaning": "Nhân viên cửa hàng",
    "topicId": "shopping"
  },
  {
    "id": 798,
    "word": "調理師",
    "hiragana": "ちょうりし",
    "romaji": "chourishi",
    "meaning": "Đầu bếp",
    "topicId": "health"
  },
  {
    "id": 799,
    "word": "理容師",
    "hiragana": "りようし",
    "romaji": "riyoushi",
    "meaning": "Thợ cắt tóc",
    "topicId": "other"
  },
  {
    "id": 800,
    "word": "美容師",
    "hiragana": "びようし",
    "romaji": "biyoushi",
    "meaning": "Mỹ viện gia",
    "topicId": "health"
  },
  {
    "id": 801,
    "word": "弁護士",
    "hiragana": "べんごし",
    "romaji": "bengoshi",
    "meaning": "Luật sư",
    "topicId": "other"
  },
  {
    "id": 802,
    "word": "看護師",
    "hiragana": "かんごし",
    "romaji": "kangoshi",
    "meaning": "Y tá",
    "topicId": "health"
  },
  {
    "id": 803,
    "word": "運転手",
    "hiragana": "うんてんしゅ",
    "romaji": "untenshu",
    "meaning": "Tài xế",
    "topicId": "other"
  },
  {
    "id": 804,
    "word": "警察官",
    "hiragana": "けいさつかん",
    "romaji": "keisatsukan",
    "meaning": "Cảnh sát",
    "topicId": "travel"
  },
  {
    "id": 805,
    "word": "外交官",
    "hiragana": "がいこうかん",
    "romaji": "gaikoukan",
    "meaning": "Nhà ngoại giao",
    "topicId": "lifestyle"
  },
  {
    "id": 806,
    "word": "政治家",
    "hiragana": "せいじか",
    "romaji": "seijika",
    "meaning": "Chính khách, nhà chính trị",
    "topicId": "shopping"
  },
  {
    "id": 807,
    "word": "画家",
    "hiragana": "がか",
    "romaji": "gaka",
    "meaning": "Họa sĩ",
    "topicId": "other"
  },
  {
    "id": 808,
    "word": "作家",
    "hiragana": "さっか",
    "romaji": "sakka",
    "meaning": "Nhà văn",
    "topicId": "food"
  },
  {
    "id": 809,
    "word": "音楽家",
    "hiragana": "おんがくか",
    "romaji": "ongakuka",
    "meaning": "Nhạc sĩ",
    "topicId": "time_weather"
  },
  {
    "id": 810,
    "word": "建築家",
    "hiragana": "けんちくか",
    "romaji": "kenchikuka",
    "meaning": "Kiến trúc sư",
    "topicId": "other"
  },
  {
    "id": 811,
    "word": "デザイナー",
    "hiragana": "デザイナー",
    "romaji": "dezainaa",
    "meaning": "Nhà thiết kế",
    "topicId": "lifestyle"
  },
  {
    "id": 812,
    "word": "ジャーナリスト",
    "hiragana": "ジャーナリスト",
    "romaji": "jaanarisuto",
    "meaning": "Nhà báo",
    "topicId": "lifestyle"
  },
  {
    "id": 813,
    "word": "歌手",
    "hiragana": "かしゅ",
    "romaji": "kashu",
    "meaning": "Ca sĩ",
    "topicId": "other"
  },
  {
    "id": 814,
    "word": "俳優",
    "hiragana": "はいゆう",
    "romaji": "haiyuu",
    "meaning": "Diễn viên",
    "topicId": "other"
  },
  {
    "id": 815,
    "word": "スポーツ選手",
    "hiragana": "スポーツせんしゅ",
    "romaji": "supootsusenshu",
    "meaning": "Vận động viên",
    "topicId": "other"
  },
  {
    "id": 816,
    "word": "乗ります",
    "hiragana": "のります",
    "romaji": "norimasu",
    "meaning": "Đi, lên [tàu]",
    "topicId": "traffic"
  },
  {
    "id": 817,
    "word": "降ります",
    "hiragana": "おります",
    "romaji": "orimasu",
    "meaning": "Xuống [tàu]",
    "topicId": "food"
  },
  {
    "id": 818,
    "word": "乗り換えます",
    "hiragana": "のりかえます",
    "romaji": "norikaemasu",
    "meaning": "Chuyển, đổi (tàu)",
    "topicId": "traffic"
  },
  {
    "id": 819,
    "word": "浴びます",
    "hiragana": "あびます",
    "romaji": "abimasu",
    "meaning": "Tắm [vòi hoa sen]",
    "topicId": "lifestyle"
  },
  {
    "id": 820,
    "word": "入れます",
    "hiragana": "いれます",
    "romaji": "iremasu",
    "meaning": "Cho vào, bỏ vào",
    "topicId": "health"
  },
  {
    "id": 821,
    "word": "辞めます",
    "hiragana": "やめます",
    "romaji": "yamemasu",
    "meaning": "Bỏ, thôi [việc công ty]",
    "topicId": "work"
  },
  {
    "id": 822,
    "word": "押します",
    "hiragana": "おします",
    "romaji": "oshimasu",
    "meaning": "Bấm, ấn (nút)",
    "topicId": "time_weather"
  },
  {
    "id": 823,
    "word": "若い",
    "hiragana": "わかい",
    "romaji": "wakai",
    "meaning": "Trẻ",
    "topicId": "shopping"
  },
  {
    "id": 824,
    "word": "長い",
    "hiragana": "ながい",
    "romaji": "nagai",
    "meaning": "Dài",
    "topicId": "other"
  },
  {
    "id": 825,
    "word": "短い",
    "hiragana": "みじかい",
    "romaji": "mijikai",
    "meaning": "Ngắn",
    "topicId": "other"
  },
  {
    "id": 826,
    "word": "明るい",
    "hiragana": "あかるい",
    "romaji": "akarui",
    "meaning": "Sáng",
    "topicId": "food"
  },
  {
    "id": 827,
    "word": "暗い",
    "hiragana": "くらい",
    "romaji": "kurai",
    "meaning": "Tối",
    "topicId": "food"
  },
  {
    "id": 828,
    "word": "背が高い",
    "hiragana": "せがたかい",
    "romaji": "segatakai",
    "meaning": "Cao (dùng cho người)",
    "topicId": "health"
  },
  {
    "id": 829,
    "word": "頭がいい",
    "hiragana": "あたまがいい",
    "romaji": "atamagaii",
    "meaning": "Thông minh",
    "topicId": "other"
  },
  {
    "id": 830,
    "word": "体",
    "hiragana": "からだ",
    "romaji": "karada",
    "meaning": "Người, cơ thể",
    "topicId": "other"
  },
  {
    "id": 831,
    "word": "頭",
    "hiragana": "あたま",
    "romaji": "atama",
    "meaning": "Đầu",
    "topicId": "health"
  },
  {
    "id": 832,
    "word": "顔",
    "hiragana": "かお",
    "romaji": "kao",
    "meaning": "Mặt",
    "topicId": "other"
  },
  {
    "id": 833,
    "word": "目",
    "hiragana": "め",
    "romaji": "me",
    "meaning": "Mắt",
    "topicId": "health"
  },
  {
    "id": 834,
    "word": "耳",
    "hiragana": "みみ",
    "romaji": "mimi",
    "meaning": "Tai",
    "topicId": "health"
  },
  {
    "id": 835,
    "word": "口",
    "hiragana": "くち",
    "romaji": "kuchi",
    "meaning": "Miệng",
    "topicId": "health"
  },
  {
    "id": 836,
    "word": "歯",
    "hiragana": "は",
    "romaji": "ha",
    "meaning": "Răng",
    "topicId": "food"
  },
  {
    "id": 837,
    "word": "お腹",
    "hiragana": "おなか",
    "romaji": "onaka",
    "meaning": "Bụng",
    "topicId": "health"
  },
  {
    "id": 838,
    "word": "足",
    "hiragana": "あし",
    "romaji": "ashi",
    "meaning": "Chân",
    "topicId": "health"
  },
  {
    "id": 839,
    "word": "サービス",
    "hiragana": "サービス",
    "romaji": "saabisu",
    "meaning": "Dịch vụ",
    "topicId": "other"
  },
  {
    "id": 840,
    "word": "ジョギング",
    "hiragana": "ジョギング",
    "romaji": "jogingu",
    "meaning": "Việc chạy bộ (~wo shimasu: chạy bộ)",
    "topicId": "time_weather"
  },
  {
    "id": 841,
    "word": "シャワー",
    "hiragana": "シャワー",
    "romaji": "shawaa",
    "meaning": "Vòi hoa sen",
    "topicId": "health"
  },
  {
    "id": 842,
    "word": "緑",
    "hiragana": "みどり",
    "romaji": "midori",
    "meaning": "Màu xanh lá cây",
    "topicId": "greetings"
  },
  {
    "id": 843,
    "word": "留学生",
    "hiragana": "りゅうがくせい",
    "romaji": "ryuugakusei",
    "meaning": "Lưu học sinh, du học sinh",
    "topicId": "other"
  },
  {
    "id": 844,
    "word": "番",
    "hiragana": "ばん",
    "romaji": "ban",
    "meaning": "Số ~",
    "topicId": "other"
  },
  {
    "id": 845,
    "word": "どうやって",
    "hiragana": "どうやって",
    "romaji": "douyatte",
    "meaning": "Làm thế nào ~",
    "topicId": "work"
  },
  {
    "id": 846,
    "word": "どの",
    "hiragana": "どの",
    "romaji": "dono",
    "meaning": "Cái nào ~ (dùng đối với trường hợp từ ba thứ trở lên)",
    "topicId": "food"
  },
  {
    "id": 847,
    "word": "いいえ、まだまだです",
    "hiragana": "いいえ、まだまだです",
    "romaji": "iiemadamadadesu",
    "meaning": "[Không,] tôi còn kém lắm. (cách nói khiêm nhường khi được ai đó khen)",
    "topicId": "food"
  },
  {
    "id": 848,
    "word": "お引き出しですか",
    "hiragana": "おひきだしですか",
    "romaji": "ohikidashidesuka",
    "meaning": "Anh/Chị rút tiền ạ?",
    "topicId": "greetings"
  },
  {
    "id": 849,
    "word": "まず",
    "hiragana": "まず",
    "romaji": "mazu",
    "meaning": "Trước hết, đầu tiên",
    "topicId": "health"
  },
  {
    "id": 850,
    "word": "キャッシュカード",
    "hiragana": "キャッシュカード",
    "romaji": "kyasshukaado",
    "meaning": "Thẻ ngân hàng, thẻ ATM",
    "topicId": "other"
  },
  {
    "id": 851,
    "word": "暗証番号",
    "hiragana": "あんしょうばんごう",
    "romaji": "anshoubangou",
    "meaning": "Mã số bí mật (mật khẩu)",
    "topicId": "other"
  },
  {
    "id": 852,
    "word": "次に",
    "hiragana": "つぎに",
    "romaji": "tsugini",
    "meaning": "Tiếp theo",
    "topicId": "other"
  },
  {
    "id": 853,
    "word": "金額",
    "hiragana": "きんがく",
    "romaji": "kingaku",
    "meaning": "Số tiền, khoản tiền",
    "topicId": "shopping"
  },
  {
    "id": 854,
    "word": "確認",
    "hiragana": "かくにん",
    "romaji": "kakunin",
    "meaning": "Sự xác nhận, sự kiểm tra (~shimasu: xác nhận)",
    "topicId": "other"
  },
  {
    "id": 855,
    "word": "ボタン",
    "hiragana": "ボタン",
    "romaji": "botan",
    "meaning": "Nút",
    "topicId": "other"
  },
  {
    "id": 856,
    "word": "覚えます",
    "hiragana": "おぼえます",
    "romaji": "oboemasu",
    "meaning": "Nhớ",
    "topicId": "other"
  },
  {
    "id": 857,
    "word": "忘れます",
    "hiragana": "わすれます",
    "romaji": "wasuremasu",
    "meaning": "Quên",
    "topicId": "greetings"
  },
  {
    "id": 858,
    "word": "無くします",
    "hiragana": "なくします",
    "romaji": "nakushimasu",
    "meaning": "Mất, đánh mất",
    "topicId": "other"
  },
  {
    "id": 859,
    "word": "払います",
    "hiragana": "はらいます",
    "romaji": "haraimasu",
    "meaning": "Trả tiền",
    "topicId": "shopping"
  },
  {
    "id": 860,
    "word": "返します",
    "hiragana": "かえします",
    "romaji": "kaeshimasu",
    "meaning": "Trả lại",
    "topicId": "other"
  },
  {
    "id": 861,
    "word": "出かけます",
    "hiragana": "でかけます",
    "romaji": "dekakemasu",
    "meaning": "Ra ngoài",
    "topicId": "other"
  },
  {
    "id": 862,
    "word": "脱ぎます",
    "hiragana": "ぬぎます",
    "romaji": "nugimasu",
    "meaning": "Cởi (quần áo, giày)",
    "topicId": "other"
  },
  {
    "id": 863,
    "word": "持って行きます",
    "hiragana": "もっていきます",
    "romaji": "motteikimasu",
    "meaning": "Mang đi, mang theo",
    "topicId": "traffic"
  },
  {
    "id": 864,
    "word": "持って来ます",
    "hiragana": "もってきます",
    "romaji": "mottekimasu",
    "meaning": "Mang đến",
    "topicId": "traffic"
  },
  {
    "id": 865,
    "word": "心配します",
    "hiragana": "しんぱいします",
    "romaji": "shinpaishimasu",
    "meaning": "Lo lắng",
    "topicId": "other"
  },
  {
    "id": 866,
    "word": "残業します",
    "hiragana": "ざんぎょうします",
    "romaji": "zangyoushimasu",
    "meaning": "Làm thêm, làm quá giờ",
    "topicId": "time_weather"
  },
  {
    "id": 867,
    "word": "出張します",
    "hiragana": "しゅっちょうします",
    "romaji": "shucchoushimasu",
    "meaning": "Đi công tác",
    "topicId": "traffic"
  },
  {
    "id": 868,
    "word": "大切",
    "hiragana": "たいせつ",
    "romaji": "taisetsu",
    "meaning": "Quan trọng, quý giá",
    "topicId": "shopping"
  },
  {
    "id": 869,
    "word": "大丈夫",
    "hiragana": "だいじょうぶ",
    "romaji": "daijoubu",
    "meaning": "Không sao, không có vấn đề gì",
    "topicId": "other"
  },
  {
    "id": 870,
    "word": "危ない",
    "hiragana": "あぶない",
    "romaji": "abunai",
    "meaning": "Nguy hiểm",
    "topicId": "other"
  },
  {
    "id": 871,
    "word": "問題",
    "hiragana": "もんだい",
    "romaji": "mondai",
    "meaning": "Vấn đề",
    "topicId": "other"
  },
  {
    "id": 872,
    "word": "答え",
    "hiragana": "こたえ",
    "romaji": "kotae",
    "meaning": "Câu trả lời",
    "topicId": "other"
  },
  {
    "id": 873,
    "word": "禁煙",
    "hiragana": "きんえん",
    "romaji": "kinen",
    "meaning": "Cấm hút thuốc",
    "topicId": "time_weather"
  },
  {
    "id": 874,
    "word": "[健康]保険証",
    "hiragana": "けんこうほけんしょう",
    "romaji": "kenkouhokenshou",
    "meaning": "Thẻ bảo hiểm [y tế]",
    "topicId": "other"
  },
  {
    "id": 875,
    "word": "かぜ",
    "hiragana": "かぜ",
    "romaji": "kaze",
    "meaning": "Cảm, cúm",
    "topicId": "health"
  },
  {
    "id": 876,
    "word": "熱",
    "hiragana": "ねつ",
    "romaji": "netsu",
    "meaning": "Sốt",
    "topicId": "health"
  },
  {
    "id": 877,
    "word": "病気",
    "hiragana": "びょうき",
    "romaji": "byouki",
    "meaning": "Ốm, bệnh",
    "topicId": "health"
  },
  {
    "id": 878,
    "word": "薬",
    "hiragana": "くすり",
    "romaji": "kusuri",
    "meaning": "Thuốc",
    "topicId": "time_weather"
  },
  {
    "id": 879,
    "word": "[お]ふろ",
    "hiragana": "おふろ",
    "romaji": "ofuro",
    "meaning": "Bồn tắm",
    "topicId": "lifestyle"
  },
  {
    "id": 880,
    "word": "上着",
    "hiragana": "うわぎ",
    "romaji": "uwagi",
    "meaning": "Áo khoác",
    "topicId": "health"
  },
  {
    "id": 881,
    "word": "下着",
    "hiragana": "したぎ",
    "romaji": "shitagi",
    "meaning": "Quần áo lót",
    "topicId": "other"
  },
  {
    "id": 882,
    "word": "2、3日",
    "hiragana": "2、3にち",
    "romaji": "nisannichi",
    "meaning": "Vài ngày",
    "topicId": "time_weather"
  },
  {
    "id": 883,
    "word": "2、3～",
    "hiragana": "2、3～",
    "romaji": "nisan",
    "meaning": "Vài ~ (\"~\" là hậu tố chỉ cách đếm)",
    "topicId": "food"
  },
  {
    "id": 884,
    "word": "～までに",
    "hiragana": "～までに",
    "romaji": "madeni",
    "meaning": "Trước ~ (chỉ thời hạn)",
    "topicId": "time_weather"
  },
  {
    "id": 885,
    "word": "ですから",
    "hiragana": "ですから",
    "romaji": "desukara",
    "meaning": "Vì thế, vì vậy, do đó",
    "topicId": "other"
  },
  {
    "id": 886,
    "word": "どうしましたか。",
    "hiragana": "どうしましたか。",
    "romaji": "doushimashitaka",
    "meaning": "Có vấn đề gì?/Anh/Chị bị làm sao? (cách bác sĩ hỏi bệnh nhân)",
    "topicId": "greetings"
  },
  {
    "id": 887,
    "word": "～が痛いです。",
    "hiragana": "～がいたいです。",
    "romaji": "gaitaidesu",
    "meaning": "Tôi bị đau [~].",
    "topicId": "health"
  },
  {
    "id": 888,
    "word": "のど",
    "hiragana": "のど",
    "romaji": "nodo",
    "meaning": "Họng",
    "topicId": "other"
  },
  {
    "id": 889,
    "word": "お大事に。",
    "hiragana": "おだいじに。",
    "romaji": "odaijini",
    "meaning": "Anh/Chị nhớ giữ gìn sức khỏe. (câu nói với người bị ốm hoặc bị bệnh)",
    "topicId": "greetings"
  },
  {
    "id": 890,
    "word": "できます",
    "hiragana": "できます",
    "romaji": "dekimasu",
    "meaning": "Có thể",
    "topicId": "other"
  },
  {
    "id": 891,
    "word": "洗います",
    "hiragana": "あらいます",
    "romaji": "araimasu",
    "meaning": "Rửa",
    "topicId": "other"
  },
  {
    "id": 892,
    "word": "弾きます",
    "hiragana": "ひきます",
    "romaji": "hikimasu",
    "meaning": "Chơi (nhạc cụ)",
    "topicId": "time_weather"
  },
  {
    "id": 893,
    "word": "歌います",
    "hiragana": "うたいます",
    "romaji": "utaimasu",
    "meaning": "Hát",
    "topicId": "anime"
  },
  {
    "id": 894,
    "word": "集めます",
    "hiragana": "あつめます",
    "romaji": "atsumemasu",
    "meaning": "Sưu tầm, thu thập",
    "topicId": "time_weather"
  },
  {
    "id": 895,
    "word": "捨てます",
    "hiragana": "すてます",
    "romaji": "sutemasu",
    "meaning": "Vứt, bỏ đi",
    "topicId": "traffic"
  },
  {
    "id": 896,
    "word": "換えます",
    "hiragana": "かえます",
    "romaji": "kaemasu",
    "meaning": "Đổi",
    "topicId": "other"
  },
  {
    "id": 897,
    "word": "運転します",
    "hiragana": "うんてんします",
    "romaji": "untenshimasu",
    "meaning": "Lái",
    "topicId": "traffic"
  },
  {
    "id": 898,
    "word": "予約します",
    "hiragana": "よやくします",
    "romaji": "yoyakushimasu",
    "meaning": "Đặt chỗ, đặt trước",
    "topicId": "other"
  },
  {
    "id": 899,
    "word": "見学します",
    "hiragana": "けんがくします",
    "romaji": "kengakushimasu",
    "meaning": "Thăm quan với mục đích học tập",
    "topicId": "time_weather"
  },
  {
    "id": 900,
    "word": "ピアノ",
    "hiragana": "ピアノ",
    "romaji": "piano",
    "meaning": "Đàn piano",
    "topicId": "other"
  },
  {
    "id": 901,
    "word": "ーメートル",
    "hiragana": "ーメートル",
    "romaji": "meetoru",
    "meaning": "ー mét",
    "topicId": "other"
  },
  {
    "id": 902,
    "word": "国際～",
    "hiragana": "こくさい～",
    "romaji": "kokusai",
    "meaning": "～ quốc tế",
    "topicId": "other"
  },
  {
    "id": 903,
    "word": "現金",
    "hiragana": "げんきん",
    "romaji": "genkin",
    "meaning": "Tiền mặt",
    "topicId": "shopping"
  },
  {
    "id": 904,
    "word": "趣味",
    "hiragana": "しゅみ",
    "romaji": "shumi",
    "meaning": "Sở thích, thú vui",
    "topicId": "other"
  },
  {
    "id": 905,
    "word": "日記",
    "hiragana": "にっき",
    "romaji": "nikki",
    "meaning": "Nhật ký",
    "topicId": "other"
  },
  {
    "id": 906,
    "word": "[お]祈り",
    "hiragana": "おいのり",
    "romaji": "oinori",
    "meaning": "Việc cầu nguyện (~を します：cầu nguyện)",
    "topicId": "work"
  },
  {
    "id": 907,
    "word": "課長",
    "hiragana": "かちょう",
    "romaji": "kachou",
    "meaning": "Tổ trưởng",
    "topicId": "other"
  },
  {
    "id": 908,
    "word": "部長",
    "hiragana": "ぶちょう",
    "romaji": "buchou",
    "meaning": "Trưởng phòng",
    "topicId": "lifestyle"
  },
  {
    "id": 909,
    "word": "社長",
    "hiragana": "しゃちょう",
    "romaji": "shachou",
    "meaning": "Giám đốc",
    "topicId": "shopping"
  },
  {
    "id": 910,
    "word": "動物",
    "hiragana": "どうぶつ",
    "romaji": "doubutsu",
    "meaning": "Động vật",
    "topicId": "other"
  },
  {
    "id": 911,
    "word": "馬",
    "hiragana": "うま",
    "romaji": "uma",
    "meaning": "Ngựa",
    "topicId": "other"
  },
  {
    "id": 912,
    "word": "へえ",
    "hiragana": "へえ",
    "romaji": "hee",
    "meaning": "Thế à! (dùng để biểu thị sự ngạc nhiên hoặc quan tâm)",
    "topicId": "time_weather"
  },
  {
    "id": 913,
    "word": "それは　おもしろいですね。",
    "hiragana": "それは　おもしろいですね。",
    "romaji": "sorewaomoshiroidesune",
    "meaning": "Hay thật nhỉ.",
    "topicId": "other"
  },
  {
    "id": 914,
    "word": "なかなか",
    "hiragana": "なかなか",
    "romaji": "nakanaka",
    "meaning": "Khó mà ~, không dễ, mãi mà (dùng với thể phủ định)",
    "topicId": "other"
  },
  {
    "id": 915,
    "word": "牧場",
    "hiragana": "ぼくじょう",
    "romaji": "bokujou",
    "meaning": "Trang trại chăn nuôi",
    "topicId": "food"
  },
  {
    "id": 916,
    "word": "ほんとうですか。",
    "hiragana": "ほんとうですか。",
    "romaji": "hontoudesuka",
    "meaning": "Thật không ạ?",
    "topicId": "other"
  },
  {
    "id": 917,
    "word": "ぜひ",
    "hiragana": "ぜひ",
    "romaji": "zehi",
    "meaning": "Nhất định, rất",
    "topicId": "other"
  },
  {
    "id": 918,
    "word": "飛ぶ",
    "hiragana": "とぶ",
    "romaji": "tobu",
    "meaning": "Bay",
    "topicId": "traffic"
  },
  {
    "id": 919,
    "word": "跳ねる",
    "hiragana": "はねる",
    "romaji": "haneru",
    "meaning": "Nhảy",
    "topicId": "anime"
  },
  {
    "id": 920,
    "word": "登る",
    "hiragana": "のぼる",
    "romaji": "noboru",
    "meaning": "Leo",
    "topicId": "other"
  },
  {
    "id": 921,
    "word": "走る",
    "hiragana": "はしる",
    "romaji": "hashiru",
    "meaning": "Chạy",
    "topicId": "time_weather"
  },
  {
    "id": 922,
    "word": "泳ぐ",
    "hiragana": "およぐ",
    "romaji": "oyogu",
    "meaning": "Bơi",
    "topicId": "other"
  },
  {
    "id": 923,
    "word": "潜る",
    "hiragana": "もぐる",
    "romaji": "moguru",
    "meaning": "Lặn",
    "topicId": "other"
  },
  {
    "id": 924,
    "word": "飛び込む",
    "hiragana": "とびこむ",
    "romaji": "tobikomu",
    "meaning": "Nhảy xuống",
    "topicId": "food"
  },
  {
    "id": 925,
    "word": "逆立ちする",
    "hiragana": "さかだちする",
    "romaji": "sakadachisuru",
    "meaning": "Lộn ngược, trồng cây chuối",
    "topicId": "other"
  },
  {
    "id": 926,
    "word": "這う",
    "hiragana": "はう",
    "romaji": "hau",
    "meaning": "Bò",
    "topicId": "other"
  },
  {
    "id": 927,
    "word": "蹴る",
    "hiragana": "ける",
    "romaji": "keru",
    "meaning": "Đá",
    "topicId": "other"
  },
  {
    "id": 928,
    "word": "振る",
    "hiragana": "ふる",
    "romaji": "furu",
    "meaning": "Vẫy",
    "topicId": "other"
  },
  {
    "id": 929,
    "word": "持ち上げる",
    "hiragana": "もちあげる",
    "romaji": "mochiageru",
    "meaning": "Nâng, nhấc",
    "topicId": "other"
  },
  {
    "id": 930,
    "word": "投げる",
    "hiragana": "なげる",
    "romaji": "nageru",
    "meaning": "Ném",
    "topicId": "other"
  },
  {
    "id": 931,
    "word": "叩く",
    "hiragana": "たたく",
    "romaji": "tataku",
    "meaning": "Đấm, đập, vỗ",
    "topicId": "time_weather"
  },
  {
    "id": 932,
    "word": "引く",
    "hiragana": "ひく",
    "romaji": "hiku",
    "meaning": "Kéo",
    "topicId": "other"
  },
  {
    "id": 933,
    "word": "押す",
    "hiragana": "おす",
    "romaji": "osu",
    "meaning": "Đẩy",
    "topicId": "other"
  },
  {
    "id": 934,
    "word": "曲げる",
    "hiragana": "まげる",
    "romaji": "mageru",
    "meaning": "Uốn, gập, bẻ cong",
    "topicId": "other"
  },
  {
    "id": 935,
    "word": "伸ばす",
    "hiragana": "のばす",
    "romaji": "nobasu",
    "meaning": "Duỗi thẳng, kéo dài ra",
    "topicId": "other"
  },
  {
    "id": 936,
    "word": "転ぶ",
    "hiragana": "ころぶ",
    "romaji": "korobu",
    "meaning": "Ngã",
    "topicId": "other"
  },
  {
    "id": 937,
    "word": "振り向く",
    "hiragana": "ふりむく",
    "romaji": "furimuku",
    "meaning": "Ngoảnh lại",
    "topicId": "travel"
  },
  {
    "id": 938,
    "word": "登ります",
    "hiragana": "のぼります",
    "romaji": "noborimasu",
    "meaning": "Leo [núi]",
    "topicId": "travel"
  },
  {
    "id": 939,
    "word": "泊まります",
    "hiragana": "とまります",
    "romaji": "tomarimasu",
    "meaning": "Trọ [ở khách sạn]",
    "topicId": "shopping"
  },
  {
    "id": 940,
    "word": "掃除します",
    "hiragana": "そうじします",
    "romaji": "soujishimasu",
    "meaning": "Dọn vệ sinh",
    "topicId": "lifestyle"
  },
  {
    "id": 941,
    "word": "洗濯します",
    "hiragana": "せんたくします",
    "romaji": "sentakushimasu",
    "meaning": "Giặt",
    "topicId": "lifestyle"
  },
  {
    "id": 942,
    "word": "練習します",
    "hiragana": "れんしゅうします",
    "romaji": "renshuushimasu",
    "meaning": "Luyện tập, thực hành",
    "topicId": "other"
  },
  {
    "id": 943,
    "word": "なります",
    "hiragana": "なります",
    "romaji": "narimasu",
    "meaning": "Trở thành, trở nên",
    "topicId": "other"
  },
  {
    "id": 944,
    "word": "眠い",
    "hiragana": "ねむい",
    "romaji": "nemui",
    "meaning": "Buồn ngủ",
    "topicId": "lifestyle"
  },
  {
    "id": 945,
    "word": "強い",
    "hiragana": "つよい",
    "romaji": "tsuyoi",
    "meaning": "Mạnh",
    "topicId": "other"
  },
  {
    "id": 946,
    "word": "弱い",
    "hiragana": "よわい",
    "romaji": "yowai",
    "meaning": "Yếu",
    "topicId": "other"
  },
  {
    "id": 947,
    "word": "調子",
    "hiragana": "ちょうし",
    "romaji": "choushi",
    "meaning": "Tình trạng, trạng thái",
    "topicId": "other"
  },
  {
    "id": 948,
    "word": "調子がいい",
    "hiragana": "ちょうしがいい",
    "romaji": "choushigaii",
    "meaning": "Trong tình trạng tốt",
    "topicId": "other"
  },
  {
    "id": 949,
    "word": "調子が悪い",
    "hiragana": "ちょうしがわるい",
    "romaji": "choushigawarui",
    "meaning": "Trong tình trạng xấu",
    "topicId": "other"
  },
  {
    "id": 950,
    "word": "ゴルフ",
    "hiragana": "ゴルフ",
    "romaji": "gorufu",
    "meaning": "Gôn (~wo shimasu: chơi gôn)",
    "topicId": "travel"
  },
  {
    "id": 951,
    "word": "相撲",
    "hiragana": "すもう",
    "romaji": "sumou",
    "meaning": "Vật Sumo",
    "topicId": "other"
  },
  {
    "id": 952,
    "word": "パチンコ",
    "hiragana": "パチンコ",
    "romaji": "pachinko",
    "meaning": "Trò chơi Pachinko (~wo shimasu: chơi Pachinko)",
    "topicId": "travel"
  },
  {
    "id": 953,
    "word": "日",
    "hiragana": "ひ",
    "romaji": "hi",
    "meaning": "Ngày",
    "topicId": "time_weather"
  },
  {
    "id": 954,
    "word": "一度",
    "hiragana": "いちど",
    "romaji": "ichido",
    "meaning": "Một lần",
    "topicId": "other"
  },
  {
    "id": 955,
    "word": "一度も",
    "hiragana": "いちども",
    "romaji": "ichidomo",
    "meaning": "Chưa lần nào",
    "topicId": "other"
  },
  {
    "id": 956,
    "word": "だんだん",
    "hiragana": "だんだん",
    "romaji": "dandan",
    "meaning": "Dần dần",
    "topicId": "other"
  },
  {
    "id": 957,
    "word": "もうすぐ",
    "hiragana": "もうすぐ",
    "romaji": "mousugu",
    "meaning": "Sắp",
    "topicId": "other"
  },
  {
    "id": 958,
    "word": "おかげさまで",
    "hiragana": "おかげさまで",
    "romaji": "okagesamade",
    "meaning": "Cám ơn anh/chị (dùng để bày tỏ sự cám ơn khi nhận được sự giúp đỡ)",
    "topicId": "greetings"
  },
  {
    "id": 959,
    "word": "乾杯",
    "hiragana": "かんぱい",
    "romaji": "kanpai",
    "meaning": "Nâng cốc!/Cạn chén!",
    "topicId": "other"
  },
  {
    "id": 960,
    "word": "実は",
    "hiragana": "じつは",
    "romaji": "jitsuwa",
    "meaning": "Thật ra là/Sự tình là",
    "topicId": "other"
  },
  {
    "id": 961,
    "word": "ダイエット",
    "hiragana": "ダイエット",
    "romaji": "daietto",
    "meaning": "Việc ăn kiêng, chế độ giảm cân",
    "topicId": "food"
  },
  {
    "id": 962,
    "word": "何回も",
    "hiragana": "なんかいも",
    "romaji": "nankaimo",
    "meaning": "Nhiều lần",
    "topicId": "other"
  },
  {
    "id": 963,
    "word": "しかし",
    "hiragana": "しかし",
    "romaji": "shikashi",
    "meaning": "Nhưng, tuy nhiên",
    "topicId": "other"
  },
  {
    "id": 964,
    "word": "無理",
    "hiragana": "むり",
    "romaji": "muri",
    "meaning": "Không thể, quá sức",
    "topicId": "other"
  },
  {
    "id": 965,
    "word": "体にいい",
    "hiragana": "からだにいい",
    "romaji": "karadaniii",
    "meaning": "Tốt cho sức khỏe",
    "topicId": "health"
  },
  {
    "id": 966,
    "word": "ケーキ",
    "hiragana": "ケーキ",
    "romaji": "keeki",
    "meaning": "Bánh ga-tô, bánh ngọt",
    "topicId": "shopping"
  },
  {
    "id": 967,
    "word": "茶道",
    "hiragana": "さどう",
    "romaji": "sadou",
    "meaning": "Trà đạo",
    "topicId": "food"
  },
  {
    "id": 968,
    "word": "華道",
    "hiragana": "かどう",
    "romaji": "kadou",
    "meaning": "Nghệ thuật cắm hoa",
    "topicId": "time_weather"
  },
  {
    "id": 969,
    "word": "書道",
    "hiragana": "しょどう",
    "romaji": "shodou",
    "meaning": "Thư pháp",
    "topicId": "lifestyle"
  },
  {
    "id": 970,
    "word": "能",
    "hiragana": "のう",
    "romaji": "nou",
    "meaning": "Kịch Nou",
    "topicId": "other"
  },
  {
    "id": 971,
    "word": "文楽",
    "hiragana": "ぶんらく",
    "romaji": "bunraku",
    "meaning": "Nghệ thuật Bunraku (kịch rối)",
    "topicId": "time_weather"
  },
  {
    "id": 972,
    "word": "柔道",
    "hiragana": "じゅうどう",
    "romaji": "juudou",
    "meaning": "Judo",
    "topicId": "other"
  },
  {
    "id": 973,
    "word": "剣道",
    "hiragana": "けんどう",
    "romaji": "kendou",
    "meaning": "Kiếm đạo",
    "topicId": "other"
  },
  {
    "id": 974,
    "word": "空手",
    "hiragana": "からて",
    "romaji": "karate",
    "meaning": "Karate",
    "topicId": "other"
  },
  {
    "id": 975,
    "word": "漫才",
    "hiragana": "まんざい",
    "romaji": "manzai",
    "meaning": "Manzai (Hài tấu nói)",
    "topicId": "other"
  },
  {
    "id": 976,
    "word": "落語",
    "hiragana": "らくご",
    "romaji": "rakugo",
    "meaning": "Rakugo (Hài kịch kể chuyện)",
    "topicId": "other"
  },
  {
    "id": 977,
    "word": "囲碁",
    "hiragana": "いご",
    "romaji": "igo",
    "meaning": "Cờ vây",
    "topicId": "other"
  },
  {
    "id": 978,
    "word": "将棋",
    "hiragana": "しょうぎ",
    "romaji": "shougi",
    "meaning": "Cờ tướng Nhật Bản",
    "topicId": "other"
  },
  {
    "id": 979,
    "word": "盆踊り",
    "hiragana": "ぼんおどり",
    "romaji": "bonodori",
    "meaning": "Múa Bon",
    "topicId": "anime"
  },
  {
    "id": 980,
    "word": "要ります",
    "hiragana": "いります",
    "romaji": "irimasu",
    "meaning": "Cần [thị thực (visa)]",
    "topicId": "other"
  },
  {
    "id": 981,
    "word": "調べます",
    "hiragana": "しらべます",
    "romaji": "shirabemasu",
    "meaning": "Tìm hiểu, điều tra, xem",
    "topicId": "greetings"
  },
  {
    "id": 982,
    "word": "直します",
    "hiragana": "なおします",
    "romaji": "naoshimasu",
    "meaning": "Sửa, chữa",
    "topicId": "other"
  },
  {
    "id": 983,
    "word": "修理します",
    "hiragana": "しゅうりします",
    "romaji": "shuurishimasu",
    "meaning": "Sửa chữa, tu sửa",
    "topicId": "other"
  },
  {
    "id": 984,
    "word": "電話します",
    "hiragana": "でんわします",
    "romaji": "denwashimasu",
    "meaning": "Gọi điện thoại",
    "topicId": "traffic"
  },
  {
    "id": 985,
    "word": "僕",
    "hiragana": "ぼく",
    "romaji": "boku",
    "meaning": "Tớ (xưng hô thân mật của nam giới, = watashi)",
    "topicId": "other"
  },
  {
    "id": 986,
    "word": "君",
    "hiragana": "きみ",
    "romaji": "kimi",
    "meaning": "Cậu, bạn (gọi thân mật dùng cho nam giới, = anata)",
    "topicId": "health"
  },
  {
    "id": 987,
    "word": "うん",
    "hiragana": "うん",
    "romaji": "un",
    "meaning": "Ừ (cách nói thân mật của [hai])",
    "topicId": "food"
  },
  {
    "id": 988,
    "word": "ううん",
    "hiragana": "ううん",
    "romaji": "uun",
    "meaning": "Không (cách nói thân mật của [iie])",
    "topicId": "food"
  },
  {
    "id": 989,
    "word": "サラリーマン",
    "hiragana": "サラリーマン",
    "romaji": "sarariiman",
    "meaning": "Người làm việc cho các công ty",
    "topicId": "greetings"
  },
  {
    "id": 990,
    "word": "言葉",
    "hiragana": "ことば",
    "romaji": "kotoba",
    "meaning": "Từ, tiếng",
    "topicId": "other"
  },
  {
    "id": 991,
    "word": "物価",
    "hiragana": "ぶっか",
    "romaji": "bukka",
    "meaning": "Giá cả, mức giá, vật giá",
    "topicId": "shopping"
  },
  {
    "id": 992,
    "word": "着物",
    "hiragana": "きもの",
    "romaji": "kimono",
    "meaning": "Kimono (trang phục truyền thống của Nhật Bản)",
    "topicId": "other"
  },
  {
    "id": 993,
    "word": "ビザ",
    "hiragana": "ビザ",
    "romaji": "biza",
    "meaning": "Thị thực, visa",
    "topicId": "other"
  },
  {
    "id": 994,
    "word": "始め",
    "hiragana": "はじめ",
    "romaji": "hajime",
    "meaning": "Ban đầu, đầu tiên",
    "topicId": "health"
  },
  {
    "id": 995,
    "word": "終わり",
    "hiragana": "おわり",
    "romaji": "owari",
    "meaning": "Kết thúc",
    "topicId": "other"
  },
  {
    "id": 996,
    "word": "こっち",
    "hiragana": "こっち",
    "romaji": "kocchi",
    "meaning": "Phía này, chỗ này (thân mật của [kochira])",
    "topicId": "other"
  },
  {
    "id": 997,
    "word": "そっち",
    "hiragana": "そっち",
    "romaji": "socchi",
    "meaning": "Phía đó, chỗ đó (thân mật của [sochira])",
    "topicId": "other"
  },
  {
    "id": 998,
    "word": "あっち",
    "hiragana": "あっち",
    "romaji": "acchi",
    "meaning": "Phía kia, chỗ kia (thân mật của [achira])",
    "topicId": "other"
  },
  {
    "id": 999,
    "word": "どっち",
    "hiragana": "どっち",
    "romaji": "docchi",
    "meaning": "Cái nào, phía nào, đâu (thân mật của [dochira])",
    "topicId": "food"
  },
  {
    "id": 1000,
    "word": "この間",
    "hiragana": "このあいだ",
    "romaji": "konoaida",
    "meaning": "Vừa rồi, hôm nọ",
    "topicId": "time_weather"
  },
  {
    "id": 1001,
    "word": "みんなで",
    "hiragana": "みんなで",
    "romaji": "minnade",
    "meaning": "Mọi người cùng",
    "topicId": "greetings"
  },
  {
    "id": 1002,
    "word": "～けど",
    "hiragana": "～けど",
    "romaji": "kedo",
    "meaning": "～, nhưng (cách nói thân mật của [ga])",
    "topicId": "food"
  },
  {
    "id": 1003,
    "word": "国へ帰るの？",
    "hiragana": "くにへかえるの？",
    "romaji": "kunihekaeruno",
    "meaning": "Anh/Chị có về nước không?",
    "topicId": "greetings"
  },
  {
    "id": 1004,
    "word": "どうするの？",
    "hiragana": "どうするの？",
    "romaji": "dousuruno",
    "meaning": "Anh/Chị tính sao? / Anh/Chị (sẽ) làm gì?",
    "topicId": "greetings"
  },
  {
    "id": 1005,
    "word": "どうしようかな。",
    "hiragana": "どうしようかな。",
    "romaji": "doushiyoukana",
    "meaning": "Tính sao đây nhỉ? / Để tôi xem.",
    "topicId": "greetings"
  },
  {
    "id": 1006,
    "word": "よかったら",
    "hiragana": "よかったら",
    "romaji": "yokattara",
    "meaning": "Nếu anh/chị thích thì",
    "topicId": "greetings"
  },
  {
    "id": 1007,
    "word": "思います",
    "hiragana": "おもいます",
    "romaji": "omoimasu",
    "meaning": "nghĩ",
    "topicId": "other"
  },
  {
    "id": 1008,
    "word": "言います",
    "hiragana": "いいます",
    "romaji": "iimasu",
    "meaning": "nói",
    "topicId": "other"
  },
  {
    "id": 1009,
    "word": "足ります",
    "hiragana": "たります",
    "romaji": "tarimasu",
    "meaning": "đủ",
    "topicId": "other"
  },
  {
    "id": 1010,
    "word": "勝ちます",
    "hiragana": "かちます",
    "romaji": "kachimasu",
    "meaning": "thắng",
    "topicId": "other"
  },
  {
    "id": 1011,
    "word": "負けます",
    "hiragana": "まけます",
    "romaji": "makemasu",
    "meaning": "thua",
    "topicId": "time_weather"
  },
  {
    "id": 1012,
    "word": "役に立ちます",
    "hiragana": "やくにたちます",
    "romaji": "yaku ni tachimasu",
    "meaning": "giúp ích",
    "topicId": "other"
  },
  {
    "id": 1013,
    "word": "無駄",
    "hiragana": "むだ",
    "romaji": "muda",
    "meaning": "lãng phí, vô ích",
    "topicId": "other"
  },
  {
    "id": 1014,
    "word": "不便",
    "hiragana": "ふべん",
    "romaji": "fuben",
    "meaning": "bất tiện",
    "topicId": "other"
  },
  {
    "id": 1015,
    "word": "同じ",
    "hiragana": "おなじ",
    "romaji": "onaji",
    "meaning": "giống",
    "topicId": "other"
  },
  {
    "id": 1016,
    "word": "すごい",
    "hiragana": "すごい",
    "romaji": "sugoi",
    "meaning": "ghê quá, giỏi quá",
    "topicId": "other"
  },
  {
    "id": 1017,
    "word": "首相",
    "hiragana": "しゅしょう",
    "romaji": "shushou",
    "meaning": "thủ tướng",
    "topicId": "other"
  },
  {
    "id": 1018,
    "word": "大統領",
    "hiragana": "だいとうりょう",
    "romaji": "daitouryou",
    "meaning": "tổng thống",
    "topicId": "other"
  },
  {
    "id": 1019,
    "word": "政治",
    "hiragana": "せいじ",
    "romaji": "seiji",
    "meaning": "chính trị",
    "topicId": "other"
  },
  {
    "id": 1020,
    "word": "ニュース",
    "hiragana": "ニュース",
    "romaji": "nyu-su",
    "meaning": "tin tức, bản tin",
    "topicId": "other"
  },
  {
    "id": 1021,
    "word": "スピーチ",
    "hiragana": "スピーチ",
    "romaji": "supii-chi",
    "meaning": "bài diễn thuyết, bài phát biểu",
    "topicId": "time_weather"
  },
  {
    "id": 1022,
    "word": "試合",
    "hiragana": "しあい",
    "romaji": "shiai",
    "meaning": "trận đấu",
    "topicId": "other"
  },
  {
    "id": 1023,
    "word": "アルバイト",
    "hiragana": "アルバイト",
    "romaji": "arubaito",
    "meaning": "công việc làm thêm",
    "topicId": "work"
  },
  {
    "id": 1024,
    "word": "意見",
    "hiragana": "いけん",
    "romaji": "iken",
    "meaning": "ý kiến",
    "topicId": "other"
  },
  {
    "id": 1025,
    "word": "お話",
    "hiragana": "おはなし",
    "romaji": "ohanashi",
    "meaning": "câu chuyện, bài nói chuyện",
    "topicId": "other"
  },
  {
    "id": 1026,
    "word": "ユーモア",
    "hiragana": "ユーモア",
    "romaji": "yuumoa",
    "meaning": "hài hước",
    "topicId": "other"
  },
  {
    "id": 1027,
    "word": "デザイン",
    "hiragana": "デザイン",
    "romaji": "dezain",
    "meaning": "thiết kế",
    "topicId": "other"
  },
  {
    "id": 1028,
    "word": "交通",
    "hiragana": "こうつう",
    "romaji": "koutsuu",
    "meaning": "giao thông, đi lại",
    "topicId": "traffic"
  },
  {
    "id": 1029,
    "word": "ラッシュ",
    "hiragana": "ラッシュ",
    "romaji": "rasshu",
    "meaning": "giờ cao điểm",
    "topicId": "traffic"
  },
  {
    "id": 1030,
    "word": "最近",
    "hiragana": "さいきん",
    "romaji": "saikin",
    "meaning": "gần đây",
    "topicId": "traffic"
  },
  {
    "id": 1031,
    "word": "たぶん",
    "hiragana": "たぶん",
    "romaji": "tabun",
    "meaning": "chắc, có thể",
    "topicId": "other"
  },
  {
    "id": 1032,
    "word": "きっと",
    "hiragana": "きっと",
    "romaji": "kitto",
    "meaning": "chắc chắn, nhất định",
    "topicId": "other"
  },
  {
    "id": 1033,
    "word": "本当に",
    "hiragana": "ほんとうに",
    "romaji": "hontouni",
    "meaning": "thật sự",
    "topicId": "other"
  },
  {
    "id": 1034,
    "word": "そんなに",
    "hiragana": "そんなに",
    "romaji": "sonnani",
    "meaning": "(không) ~ lắm",
    "topicId": "other"
  },
  {
    "id": 1035,
    "word": "について",
    "hiragana": "について",
    "romaji": "nitsuite",
    "meaning": "về ~",
    "topicId": "traffic"
  },
  {
    "id": 1036,
    "word": "仕方がありません",
    "hiragana": "しかたがありません",
    "romaji": "shikata ga arimasen",
    "meaning": "Không có cách nào khác./ Đành chịu vậy.",
    "topicId": "greetings"
  },
  {
    "id": 1037,
    "word": "しばらくですね",
    "hiragana": "しばらくですね",
    "romaji": "shibaraku desu ne",
    "meaning": "Lâu không gặp nhỉ.",
    "topicId": "other"
  },
  {
    "id": 1038,
    "word": "でも飲みませんか",
    "hiragana": "でものみませんか",
    "romaji": "demo nomimasen ka",
    "meaning": "Anh/Chị uống ~ (cà-phê, rượu hay cái gì đó) nhé.",
    "topicId": "greetings"
  },
  {
    "id": 1039,
    "word": "見ないと",
    "hiragana": "みないと",
    "romaji": "minaito",
    "meaning": "Tôi phải xem.",
    "topicId": "greetings"
  },
  {
    "id": 1040,
    "word": "もちろん",
    "hiragana": "もちろん",
    "romaji": "mochiron",
    "meaning": "tất nhiên",
    "topicId": "other"
  },
  {
    "id": 1041,
    "word": "カンガルー",
    "hiragana": "カンガルー",
    "romaji": "kangaru-",
    "meaning": "con cănguru",
    "topicId": "food"
  },
  {
    "id": 1042,
    "word": "キャプテン・クック",
    "hiragana": "キャプテン・クック",
    "romaji": "kyaputen kukku",
    "meaning": "Thuyền trưởng Cook",
    "topicId": "traffic"
  },
  {
    "id": 1043,
    "word": "知事",
    "hiragana": "ちじ",
    "romaji": "chiji",
    "meaning": "Tỉnh trưởng, thị trưởng",
    "topicId": "other"
  },
  {
    "id": 1044,
    "word": "市長",
    "hiragana": "しちょう",
    "romaji": "shichou",
    "meaning": "Thị trưởng",
    "topicId": "other"
  },
  {
    "id": 1045,
    "word": "町長",
    "hiragana": "ちょうちょう",
    "romaji": "chouchou",
    "meaning": "Trưởng khu phố",
    "topicId": "other"
  },
  {
    "id": 1046,
    "word": "村長",
    "hiragana": "そんちょう",
    "romaji": "sonchou",
    "meaning": "Trưởng thôn",
    "topicId": "other"
  },
  {
    "id": 1047,
    "word": "学長",
    "hiragana": "がくちょう",
    "romaji": "gakuchou",
    "meaning": "Hiệu trưởng (Đại học)",
    "topicId": "other"
  },
  {
    "id": 1048,
    "word": "校長",
    "hiragana": "こうちょう",
    "romaji": "kouchou",
    "meaning": "Hiệu trưởng (Phổ thông)",
    "topicId": "other"
  },
  {
    "id": 1049,
    "word": "園長",
    "hiragana": "えんちょう",
    "romaji": "enchou",
    "meaning": "Hiệu trưởng (Mẫu giáo)",
    "topicId": "shopping"
  },
  {
    "id": 1050,
    "word": "会長",
    "hiragana": "かいちょう",
    "romaji": "kaichou",
    "meaning": "Chủ tịch",
    "topicId": "other"
  },
  {
    "id": 1051,
    "word": "重役",
    "hiragana": "じゅうやく",
    "romaji": "juuyaku",
    "meaning": "Thành viên ban quản trị",
    "topicId": "food"
  },
  {
    "id": 1052,
    "word": "頭取",
    "hiragana": "とうどり",
    "romaji": "toudori",
    "meaning": "Giám đốc ngân hàng",
    "topicId": "shopping"
  },
  {
    "id": 1053,
    "word": "支店長",
    "hiragana": "してんちょう",
    "romaji": "shitenchou",
    "meaning": "Trưởng chi nhánh",
    "topicId": "other"
  },
  {
    "id": 1054,
    "word": "駅長",
    "hiragana": "えきちょう",
    "romaji": "ekichou",
    "meaning": "Trưởng ga",
    "topicId": "traffic"
  },
  {
    "id": 1055,
    "word": "院長",
    "hiragana": "いんちょう",
    "romaji": "inchou",
    "meaning": "Giám đốc bệnh viện",
    "topicId": "shopping"
  },
  {
    "id": 1056,
    "word": "婦長",
    "hiragana": "ふちょう",
    "romaji": "fuchou",
    "meaning": "Y tá trưởng",
    "topicId": "health"
  },
  {
    "id": 1057,
    "word": "署長",
    "hiragana": "しょちょう",
    "romaji": "shochou",
    "meaning": "Cảnh sát trưởng / Trưởng đồn",
    "topicId": "lifestyle"
  },
  {
    "id": 1058,
    "word": "はきます",
    "hiragana": "はきます",
    "romaji": "hakimasu",
    "meaning": "đi, mặc [giầy, quần âu, v.v.]",
    "topicId": "traffic"
  },
  {
    "id": 1059,
    "word": "かぶります",
    "hiragana": "かぶります",
    "romaji": "kaburimasu",
    "meaning": "đội [mũ, v.v.]",
    "topicId": "other"
  },
  {
    "id": 1060,
    "word": "生まれます",
    "hiragana": "うまれます",
    "romaji": "umaremasu",
    "meaning": "sinh ra",
    "topicId": "other"
  },
  {
    "id": 1061,
    "word": "コート",
    "hiragana": "コート",
    "romaji": "ko-to",
    "meaning": "áo khoác",
    "topicId": "health"
  },
  {
    "id": 1062,
    "word": "スーツ",
    "hiragana": "スーツ",
    "romaji": "su-tsu",
    "meaning": "com-lê",
    "topicId": "other"
  },
  {
    "id": 1063,
    "word": "セーター",
    "hiragana": "セーター",
    "romaji": "se-ta-",
    "meaning": "áo len",
    "topicId": "other"
  },
  {
    "id": 1064,
    "word": "帽子",
    "hiragana": "ぼうし",
    "romaji": "boushi",
    "meaning": "mũ",
    "topicId": "other"
  },
  {
    "id": 1065,
    "word": "眼鏡",
    "hiragana": "めがね",
    "romaji": "megane",
    "meaning": "kính",
    "topicId": "other"
  },
  {
    "id": 1066,
    "word": "おめでとうございます",
    "hiragana": "おめでとうございます",
    "romaji": "omedetou gozaimasu",
    "meaning": "Chúc mừng",
    "topicId": "other"
  },
  {
    "id": 1067,
    "word": "家賃",
    "hiragana": "やちん",
    "romaji": "yachin",
    "meaning": "tiền thuê nhà",
    "topicId": "shopping"
  },
  {
    "id": 1068,
    "word": "うーん",
    "hiragana": "うーん",
    "romaji": "u-n",
    "meaning": "Ừ~./ Để tôi xem./ Thế nào nhỉ.",
    "topicId": "greetings"
  },
  {
    "id": 1069,
    "word": "ダイニングキッチン",
    "hiragana": "ダイニングキッチン",
    "romaji": "dainingu kichin",
    "meaning": "bếp kèm phòng ăn",
    "topicId": "food"
  },
  {
    "id": 1070,
    "word": "和室",
    "hiragana": "わしつ",
    "romaji": "washitsu",
    "meaning": "phòng kiểu Nhật",
    "topicId": "lifestyle"
  },
  {
    "id": 1071,
    "word": "押し入れ",
    "hiragana": "おしいれ",
    "romaji": "oshiire",
    "meaning": "chỗ để chăn gối trong một căn phòng kiểu Nhật",
    "topicId": "food"
  },
  {
    "id": 1072,
    "word": "布団",
    "hiragana": "ふとん",
    "romaji": "futon",
    "meaning": "chăn, đệm",
    "topicId": "food"
  },
  {
    "id": 1073,
    "word": "アパート",
    "hiragana": "アパート",
    "romaji": "apa-to",
    "meaning": "nhà chung cư",
    "topicId": "lifestyle"
  },
  {
    "id": 1074,
    "word": "パリ",
    "hiragana": "パリ",
    "romaji": "pari",
    "meaning": "Pa-ri",
    "topicId": "other"
  },
  {
    "id": 1075,
    "word": "万里の長城",
    "hiragana": "ばんりのちょうじょう",
    "romaji": "banri no choujou",
    "meaning": "Vạn Lý Trường Thành",
    "topicId": "other"
  },
  {
    "id": 1076,
    "word": "余暇開発センター",
    "hiragana": "よかかいはつセンター",
    "romaji": "yoka kaihatsu senta-",
    "meaning": "Trung tâm phát triển hoạt động giải trí cho người dân",
    "topicId": "greetings"
  },
  {
    "id": 1077,
    "word": "レジャー白書",
    "hiragana": "レジャーはくしょ",
    "romaji": "reja- hakusho",
    "meaning": "sách trắng về sử dụng thời gian rảnh rỗi",
    "topicId": "traffic"
  },
  {
    "id": 1078,
    "word": "ワンピース",
    "hiragana": "ワンピース",
    "romaji": "wanpi-su",
    "meaning": "váy liền thân",
    "topicId": "other"
  },
  {
    "id": 1079,
    "word": "ズボン",
    "hiragana": "ズボン",
    "romaji": "zubon",
    "meaning": "quần âu",
    "topicId": "other"
  },
  {
    "id": 1080,
    "word": "パンツ",
    "hiragana": "パンツ",
    "romaji": "pantsu",
    "meaning": "quần âu / quần lót",
    "topicId": "other"
  },
  {
    "id": 1081,
    "word": "ジーンズ",
    "hiragana": "ジーンズ",
    "romaji": "ji-nzu",
    "meaning": "quần bò, quần Jeans",
    "topicId": "other"
  },
  {
    "id": 1082,
    "word": "スカート",
    "hiragana": "スカート",
    "romaji": "suka-to",
    "meaning": "váy ngắn",
    "topicId": "other"
  },
  {
    "id": 1083,
    "word": "ブラウス",
    "hiragana": "ブラウス",
    "romaji": "burausu",
    "meaning": "áo bờ-lu-zông",
    "topicId": "other"
  },
  {
    "id": 1084,
    "word": "ワイシャツ",
    "hiragana": "ワイシャツ",
    "romaji": "waishatsu",
    "meaning": "áo sơ-mi (trắng)",
    "topicId": "other"
  },
  {
    "id": 1085,
    "word": "マフラー",
    "hiragana": "マフラー",
    "romaji": "mafura-",
    "meaning": "khăn",
    "topicId": "food"
  },
  {
    "id": 1086,
    "word": "手袋",
    "hiragana": "てぶくろ",
    "romaji": "tebukuro",
    "meaning": "găng tay",
    "topicId": "food"
  },
  {
    "id": 1087,
    "word": "靴下",
    "hiragana": "くつした",
    "romaji": "kutsushita",
    "meaning": "tất",
    "topicId": "other"
  },
  {
    "id": 1088,
    "word": "パンスト",
    "hiragana": "パンスト",
    "romaji": "pansuto",
    "meaning": "quần tất",
    "topicId": "other"
  },
  {
    "id": 1089,
    "word": "帯",
    "hiragana": "おび",
    "romaji": "obi",
    "meaning": "đai (kimono)",
    "topicId": "other"
  },
  {
    "id": 1090,
    "word": "草履",
    "hiragana": "ぞうり",
    "romaji": "zouri",
    "meaning": "guốc (đi kèm kimono)",
    "topicId": "traffic"
  },
  {
    "id": 1091,
    "word": "足袋",
    "hiragana": "たび",
    "romaji": "tabi",
    "meaning": "tất (đi kèm kimono)",
    "topicId": "traffic"
  },
  {
    "id": 1092,
    "word": "オーバーコート",
    "hiragana": "オーバーコート",
    "romaji": "o-ba-ko-to",
    "meaning": "áo choàng",
    "topicId": "health"
  },
  {
    "id": 1093,
    "word": "レインコート",
    "hiragana": "レインコート",
    "romaji": "reinko-to",
    "meaning": "áo mưa",
    "topicId": "time_weather"
  },
  {
    "id": 1094,
    "word": "ベルト",
    "hiragana": "ベルト",
    "romaji": "beruto",
    "meaning": "thắt lưng",
    "topicId": "other"
  },
  {
    "id": 1095,
    "word": "ハイヒール",
    "hiragana": "ハイヒール",
    "romaji": "haihi-ru",
    "meaning": "giầy cao gót",
    "topicId": "other"
  },
  {
    "id": 1096,
    "word": "ブーツ",
    "hiragana": "ブーツ",
    "romaji": "bu-tsu",
    "meaning": "ủng, giầy cao cổ",
    "topicId": "other"
  },
  {
    "id": 1097,
    "word": "運動靴",
    "hiragana": "うんどうぐつ",
    "romaji": "undougutsu",
    "meaning": "giầy thể thao",
    "topicId": "other"
  },
  {
    "id": 1098,
    "word": "回します",
    "hiragana": "まわします",
    "romaji": "mawashimasu",
    "meaning": "vặn (núm)",
    "topicId": "other"
  },
  {
    "id": 1099,
    "word": "触ります",
    "hiragana": "さわります",
    "romaji": "sawarimasu",
    "meaning": "sờ, chạm vào [cửa]",
    "topicId": "lifestyle"
  },
  {
    "id": 1100,
    "word": "動きます",
    "hiragana": "うごきます",
    "romaji": "ugokimasu",
    "meaning": "chuyển động, chạy [đồng hồ ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1101,
    "word": "歩きます",
    "hiragana": "あるきます",
    "romaji": "arukimasu",
    "meaning": "đi bộ [trên đường]",
    "topicId": "traffic"
  },
  {
    "id": 1102,
    "word": "渡ります",
    "hiragana": "わたります",
    "romaji": "watarimasu",
    "meaning": "qua, đi qua [cầu]",
    "topicId": "traffic"
  },
  {
    "id": 1103,
    "word": "気を つけます",
    "hiragana": "きを つけます",
    "romaji": "ki wo tsukemasu",
    "meaning": "chú ý, cẩn thận [với ô-tô]",
    "topicId": "other"
  },
  {
    "id": 1104,
    "word": "引っ越しします",
    "hiragana": "ひっこしします",
    "romaji": "hikkoshishimasu",
    "meaning": "chuyển nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 1105,
    "word": "電気屋",
    "hiragana": "でんきや",
    "romaji": "denkiya",
    "meaning": "cửa hàng đồ điện",
    "topicId": "shopping"
  },
  {
    "id": 1106,
    "word": "サイズ",
    "hiragana": "サイズ",
    "romaji": "saizu",
    "meaning": "cỡ, kích thước",
    "topicId": "lifestyle"
  },
  {
    "id": 1107,
    "word": "音",
    "hiragana": "おと",
    "romaji": "oto",
    "meaning": "âm thanh",
    "topicId": "greetings"
  },
  {
    "id": 1108,
    "word": "機械",
    "hiragana": "きかい",
    "romaji": "kikai",
    "meaning": "máy, máy móc",
    "topicId": "lifestyle"
  },
  {
    "id": 1109,
    "word": "つまみ",
    "hiragana": "つまみ",
    "romaji": "tsumami",
    "meaning": "núm vặn",
    "topicId": "other"
  },
  {
    "id": 1110,
    "word": "故障",
    "hiragana": "こしょう",
    "romaji": "koshou",
    "meaning": "hỏng (~します：bị hỏng)",
    "topicId": "other"
  },
  {
    "id": 1111,
    "word": "道",
    "hiragana": "みち",
    "romaji": "michi",
    "meaning": "đường",
    "topicId": "traffic"
  },
  {
    "id": 1112,
    "word": "交差点",
    "hiragana": "こうさてん",
    "romaji": "kousaten",
    "meaning": "ngã tư",
    "topicId": "traffic"
  },
  {
    "id": 1113,
    "word": "信号",
    "hiragana": "しんごう",
    "romaji": "shingou",
    "meaning": "đèn tín hiệu",
    "topicId": "traffic"
  },
  {
    "id": 1114,
    "word": "角",
    "hiragana": "かど",
    "romaji": "kado",
    "meaning": "góc",
    "topicId": "other"
  },
  {
    "id": 1115,
    "word": "～目",
    "hiragana": "～め",
    "romaji": "~me",
    "meaning": "thứ ~, số ~ (biểu thị thứ tự)",
    "topicId": "other"
  },
  {
    "id": 1116,
    "word": "お正月",
    "hiragana": "おしょうがつ",
    "romaji": "oshougatsu",
    "meaning": "Tết (Dương lịch)",
    "topicId": "other"
  },
  {
    "id": 1117,
    "word": "ごちそうさま [でした]",
    "hiragana": "ごちそうさま [でした]",
    "romaji": "gochisousama [deshita]",
    "meaning": "Xin cám ơn anh/chị đã đãi tôi bữa cơm. (câu nói dùng khi ăn xong bữa cơm)",
    "topicId": "greetings"
  },
  {
    "id": 1118,
    "word": "建物",
    "hiragana": "たてもの",
    "romaji": "tatemono",
    "meaning": "tòa nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 1119,
    "word": "外国人登録証",
    "hiragana": "がいこくじんとうろくしょう",
    "romaji": "gaikokujin tourokushou",
    "meaning": "thẻ đăng ký người nước ngoài",
    "topicId": "greetings"
  },
  {
    "id": 1120,
    "word": "聖徳太子",
    "hiragana": "しょうとくたいし",
    "romaji": "shoutoku taishi",
    "meaning": "Thái tử Shotoku (574-622)",
    "topicId": "health"
  },
  {
    "id": 1121,
    "word": "法隆寺",
    "hiragana": "ほうりゅうじ",
    "romaji": "houryuuji",
    "meaning": "Chùa Horyu-ji",
    "topicId": "health"
  },
  {
    "id": 1122,
    "word": "元気茶",
    "hiragana": "げんきちゃ",
    "romaji": "genkicha",
    "meaning": "tên một loại trà (giả tưởng)",
    "topicId": "food"
  },
  {
    "id": 1123,
    "word": "本田駅",
    "hiragana": "ほんだえき",
    "romaji": "hondaeki",
    "meaning": "tên một nhà ga (giả tưởng)",
    "topicId": "traffic"
  },
  {
    "id": 1124,
    "word": "図書館前",
    "hiragana": "としょかんまえ",
    "romaji": "toshokanmae",
    "meaning": "tên một bến xe buýt (giả tưởng)",
    "topicId": "traffic"
  },
  {
    "id": 1125,
    "word": "歩道",
    "hiragana": "ほどう",
    "romaji": "hodou",
    "meaning": "đường cho người đi bộ",
    "topicId": "greetings"
  },
  {
    "id": 1126,
    "word": "車道",
    "hiragana": "しゃどう",
    "romaji": "shadou",
    "meaning": "đường cho xe ô-tô",
    "topicId": "traffic"
  },
  {
    "id": 1127,
    "word": "高速道路",
    "hiragana": "こうそくどうろ",
    "romaji": "kousokudouro",
    "meaning": "đường cao tốc",
    "topicId": "traffic"
  },
  {
    "id": 1128,
    "word": "通り",
    "hiragana": "とおり",
    "romaji": "toori",
    "meaning": "đường, phố",
    "topicId": "traffic"
  },
  {
    "id": 1129,
    "word": "横断歩道",
    "hiragana": "おうだんほどう",
    "romaji": "oudanhodou",
    "meaning": "phần đường cho người đi bộ qua đường",
    "topicId": "greetings"
  },
  {
    "id": 1130,
    "word": "歩道橋",
    "hiragana": "ほどうきょう",
    "romaji": "hodoukyou",
    "meaning": "cầu vượt cho người đi bộ",
    "topicId": "greetings"
  },
  {
    "id": 1131,
    "word": "坂",
    "hiragana": "さか",
    "romaji": "saka",
    "meaning": "dốc",
    "topicId": "other"
  },
  {
    "id": 1132,
    "word": "踏切",
    "hiragana": "ふみきり",
    "romaji": "fumikiri",
    "meaning": "đường ngang (chắn tàu)",
    "topicId": "traffic"
  },
  {
    "id": 1133,
    "word": "ガソリンスタンド",
    "hiragana": "ガソリンスタンド",
    "romaji": "gasorin sutando",
    "meaning": "trạm xăng",
    "topicId": "food"
  },
  {
    "id": 1134,
    "word": "止まれ",
    "hiragana": "とまれ",
    "romaji": "tomare",
    "meaning": "dừng lại",
    "topicId": "other"
  },
  {
    "id": 1135,
    "word": "進入禁止",
    "hiragana": "しんにゅうきんし",
    "romaji": "shinnyuukinshi",
    "meaning": "cấm đi vào",
    "topicId": "traffic"
  },
  {
    "id": 1136,
    "word": "一方通行",
    "hiragana": "いっぽうつうこう",
    "romaji": "ippoutsuukou",
    "meaning": "đường một chiều",
    "topicId": "traffic"
  },
  {
    "id": 1137,
    "word": "駐車禁止",
    "hiragana": "ちゅうしゃきんし",
    "romaji": "chuushakinshi",
    "meaning": "cấm đỗ xe",
    "topicId": "traffic"
  },
  {
    "id": 1138,
    "word": "右折禁止",
    "hiragana": "うせつきんし",
    "romaji": "usetsukinshi",
    "meaning": "cấm rẽ phải",
    "topicId": "time_weather"
  },
  {
    "id": 1139,
    "word": "くれます",
    "hiragana": "くれます",
    "romaji": "kuremasu",
    "meaning": "cho, tặng (tôi)",
    "topicId": "health"
  },
  {
    "id": 1140,
    "word": "連れて 行きます",
    "hiragana": "つれていきます",
    "romaji": "tsurete ikimasu",
    "meaning": "dẫn đi",
    "topicId": "traffic"
  },
  {
    "id": 1141,
    "word": "連れて 来ます",
    "hiragana": "つれてきます",
    "romaji": "tsurete kimasu",
    "meaning": "dẫn đến",
    "topicId": "traffic"
  },
  {
    "id": 1142,
    "word": "紹介します",
    "hiragana": "しょうかいします",
    "romaji": "shoukaishimasu",
    "meaning": "giới thiệu",
    "topicId": "other"
  },
  {
    "id": 1143,
    "word": "案内します",
    "hiragana": "あんないします",
    "romaji": "annaishimasu",
    "meaning": "hướng dẫn, giới thiệu, dẫn đường",
    "topicId": "traffic"
  },
  {
    "id": 1144,
    "word": "説明します",
    "hiragana": "せつめいします",
    "romaji": "setsumeishimasu",
    "meaning": "giải thích, trình bày",
    "topicId": "other"
  },
  {
    "id": 1145,
    "word": "おじいさん / おじいちゃん",
    "hiragana": "おじいさん / おじいちゃん",
    "romaji": "ojiisan / ojiichan",
    "meaning": "ông nội, ông ngoại, ông",
    "topicId": "other"
  },
  {
    "id": 1146,
    "word": "おばあさん / おばあちゃん",
    "hiragana": "おばあさん / おばあちゃん",
    "romaji": "obaasan / obaachan",
    "meaning": "bà nội, bà ngoại, bà",
    "topicId": "other"
  },
  {
    "id": 1147,
    "word": "準備",
    "hiragana": "じゅんび",
    "romaji": "junbi",
    "meaning": "chuẩn bị (~します：chuẩn bị)",
    "topicId": "other"
  },
  {
    "id": 1148,
    "word": "意味",
    "hiragana": "いみ",
    "romaji": "imi",
    "meaning": "ý nghĩa",
    "topicId": "other"
  },
  {
    "id": 1149,
    "word": "菓子",
    "hiragana": "おかし",
    "romaji": "okashi",
    "meaning": "bánh kẹo",
    "topicId": "shopping"
  },
  {
    "id": 1150,
    "word": "全部",
    "hiragana": "ぜんぶ",
    "romaji": "zenbu",
    "meaning": "toàn bộ, tất cả",
    "topicId": "other"
  },
  {
    "id": 1151,
    "word": "自分で",
    "hiragana": "じぶんで",
    "romaji": "jibunde",
    "meaning": "tự (mình)",
    "topicId": "food"
  },
  {
    "id": 1152,
    "word": "他に",
    "hiragana": "ほかに",
    "romaji": "hokani",
    "meaning": "ngoài ra, bên cạnh đó",
    "topicId": "other"
  },
  {
    "id": 1153,
    "word": "ワゴン車",
    "hiragana": "ワゴンしゃ",
    "romaji": "wagonsha",
    "meaning": "xe ô-tô kiểu wagon (có thùng đóng kín)",
    "topicId": "traffic"
  },
  {
    "id": 1154,
    "word": "お弁当",
    "hiragana": "おべんとう",
    "romaji": "obentou",
    "meaning": "cơm hộp",
    "topicId": "food"
  },
  {
    "id": 1155,
    "word": "母の日",
    "hiragana": "ははのひ",
    "romaji": "hahanohi",
    "meaning": "Ngày Mẹ",
    "topicId": "greetings"
  },
  {
    "id": 1156,
    "word": "お年玉",
    "hiragana": "おとしだま",
    "romaji": "otoshidama",
    "meaning": "tiền bố mẹ hoặc họ hàng tặng cho trẻ con trong ngày Tết",
    "topicId": "greetings"
  },
  {
    "id": 1157,
    "word": "入学祝い",
    "hiragana": "にゅうがくいわい",
    "romaji": "nyuugakuiwai",
    "meaning": "tặng cho người vào học cấp mới, thường là tiền, văn phòng phẩm hoặc sách",
    "topicId": "greetings"
  },
  {
    "id": 1158,
    "word": "卒業祝い",
    "hiragana": "そつぎょういわい",
    "romaji": "sotsugyouiwai",
    "meaning": "tặng cho người tốt nghiệp, thường là tiền, văn phòng phẩm hoặc sách",
    "topicId": "greetings"
  },
  {
    "id": 1159,
    "word": "結婚祝い",
    "hiragana": "けっこんいわい",
    "romaji": "kekkoniwai",
    "meaning": "tặng cho người lập gia đình, thường là tiền hoặc đồ vật dùng trong nhà",
    "topicId": "greetings"
  },
  {
    "id": 1160,
    "word": "出産祝い",
    "hiragana": "しゅっさんいわい",
    "romaji": "shussaniwai",
    "meaning": "tặng cho người mới sinh con, thường là quần áo trẻ con, đồ chơi",
    "topicId": "greetings"
  },
  {
    "id": 1161,
    "word": "お中元",
    "hiragana": "おちゅうげん",
    "romaji": "ochuugen",
    "meaning": "tặng cho những người hàng ngày đã giúp đỡ mình như bác sĩ, thầy cô giáo, cấp trên, thường là đồ ăn (Tháng 7/8)",
    "topicId": "greetings"
  },
  {
    "id": 1162,
    "word": "お歳暮",
    "hiragana": "おせいぼ",
    "romaji": "oseibo",
    "meaning": "tặng cho những người hàng ngày đã giúp đỡ mình như bác sĩ, thầy cô giáo, cấp trên, thường là đồ ăn (Tháng 12)",
    "topicId": "greetings"
  },
  {
    "id": 1163,
    "word": "お香典",
    "hiragana": "こうでん",
    "romaji": "okouden",
    "meaning": "tiền cúng điếu cho gia đình có người qua đời",
    "topicId": "greetings"
  },
  {
    "id": 1164,
    "word": "お見舞い",
    "hiragana": "おみまい",
    "romaji": "omimai",
    "meaning": "tặng cho người bị bệnh, thường là hoa hoặc hoa quả",
    "topicId": "greetings"
  },
  {
    "id": 1165,
    "word": "熨斗袋",
    "hiragana": "のしぶくろ",
    "romaji": "noshibukuro",
    "meaning": "một kiểu phong bì đặc biệt để đựng tiền khi tặng cho người khác",
    "topicId": "greetings"
  },
  {
    "id": 1166,
    "word": "考えます",
    "hiragana": "かんがえます",
    "romaji": "kangaemasu",
    "meaning": "nghĩ, suy nghĩ",
    "topicId": "other"
  },
  {
    "id": 1167,
    "word": "着きます",
    "hiragana": "つきます",
    "romaji": "tsukimasu",
    "meaning": "đến [ga]",
    "topicId": "traffic"
  },
  {
    "id": 1168,
    "word": "留学します",
    "hiragana": "りゅうがくします",
    "romaji": "ryuugakushimasu",
    "meaning": "du học",
    "topicId": "other"
  },
  {
    "id": 1169,
    "word": "田舎",
    "hiragana": "いなか",
    "romaji": "inaka",
    "meaning": "quê, nông thôn",
    "topicId": "greetings"
  },
  {
    "id": 1170,
    "word": "グループ",
    "hiragana": "グループ",
    "romaji": "guru-pu",
    "meaning": "nhóm, đoàn",
    "topicId": "other"
  },
  {
    "id": 1171,
    "word": "チャンス",
    "hiragana": "チャンス",
    "romaji": "chansu",
    "meaning": "cơ hội",
    "topicId": "other"
  },
  {
    "id": 1172,
    "word": "もし [～たら]",
    "hiragana": "もし [～たら]",
    "romaji": "moshi [~tara]",
    "meaning": "nếu [~ thì]",
    "topicId": "other"
  },
  {
    "id": 1173,
    "word": "いくら [～ても]",
    "hiragana": "いくら [～ても]",
    "romaji": "ikura [~temo]",
    "meaning": "cho dù, thế nào [~ đi nữa]",
    "topicId": "traffic"
  },
  {
    "id": 1174,
    "word": "転勤",
    "hiragana": "てんきん",
    "romaji": "tenkin",
    "meaning": "việc chuyển địa điểm làm việc (~します：chuyển địa điểm làm việc)",
    "topicId": "traffic"
  },
  {
    "id": 1175,
    "word": "こと",
    "hiragana": "こと",
    "romaji": "koto",
    "meaning": "việc (~のこと：việc ~)",
    "topicId": "work"
  },
  {
    "id": 1176,
    "word": "一杯 飲みましょう",
    "hiragana": "いっぱい のみましょう",
    "romaji": "ippai nomimashou",
    "meaning": "Chúng ta cùng uống nhé.",
    "topicId": "food"
  },
  {
    "id": 1177,
    "word": "[いろいろ] お世話に なりました",
    "hiragana": "いろいろ おせわに なりました",
    "romaji": "iroiro osewani narimashita",
    "meaning": "Anh/Chị đã giúp tôi (nhiều).",
    "topicId": "greetings"
  },
  {
    "id": 1178,
    "word": "頑張ります",
    "hiragana": "がんばります",
    "romaji": "ganbarimasu",
    "meaning": "cố, cố gắng",
    "topicId": "other"
  },
  {
    "id": 1179,
    "word": "どうぞ お元気で",
    "hiragana": "どうぞ おげんきで",
    "romaji": "douzo ogenkide",
    "meaning": "Chúc anh/chi mạnh khỏe. (câu nói trước khi chia tay với ai đó mà có lẽ lâu nữa mới gặp lại)",
    "topicId": "greetings"
  },
  {
    "id": 1180,
    "word": "赤ちゃん",
    "hiragana": "あかちゃん",
    "romaji": "akachan",
    "meaning": "em bé",
    "topicId": "greetings"
  },
  {
    "id": 1181,
    "word": "保育園",
    "hiragana": "ほいくえん",
    "romaji": "hoikuen",
    "meaning": "nhà trẻ",
    "topicId": "shopping"
  },
  {
    "id": 1182,
    "word": "高等学校",
    "hiragana": "こうとうがっこう",
    "romaji": "koutougakkou",
    "meaning": "trung học phổ thông (trường cấp 3)",
    "topicId": "other"
  },
  {
    "id": 1183,
    "word": "短大",
    "hiragana": "たんだい",
    "romaji": "tandai",
    "meaning": "cao đẳng",
    "topicId": "other"
  },
  {
    "id": 1184,
    "word": "専門学校",
    "hiragana": "せんもんがっこう",
    "romaji": "senmongakkou",
    "meaning": "trung học chuyên nghiệp (dạy nghề)",
    "topicId": "work"
  },
  {
    "id": 1185,
    "word": "大学院",
    "hiragana": "だいがくいん",
    "romaji": "daigakuin",
    "meaning": "cao học (trên đại học)",
    "topicId": "other"
  },
  {
    "id": 1186,
    "word": "学校を出ます",
    "hiragana": "がっこうをでます",
    "romaji": "gakkou wo demasu",
    "meaning": "tốt nghiệp",
    "topicId": "other"
  },
  {
    "id": 1187,
    "word": "就職します",
    "hiragana": "しゅうしょくします",
    "romaji": "shuushokushimasu",
    "meaning": "đi làm (có việc làm)",
    "topicId": "traffic"
  },
  {
    "id": 1188,
    "word": "子供が生まれます",
    "hiragana": "こどもがうまれます",
    "romaji": "kodomo ga umaremasu",
    "meaning": "sinh con",
    "topicId": "other"
  },
  {
    "id": 1189,
    "word": "離婚します",
    "hiragana": "りこんします",
    "romaji": "rikonshimasu",
    "meaning": "ly dị",
    "topicId": "other"
  },
  {
    "id": 1190,
    "word": "再婚します",
    "hiragana": "さいこんします",
    "romaji": "saikonshimasu",
    "meaning": "tái hôn",
    "topicId": "other"
  },
  {
    "id": 1191,
    "word": "仕事を辞めます",
    "hiragana": "しごとをやめます",
    "romaji": "shigoto wo yamemasu",
    "meaning": "nghỉ hưu (bỏ việc)",
    "topicId": "health"
  },
  {
    "id": 1192,
    "word": "死にます",
    "hiragana": "しにます",
    "romaji": "shinimasu",
    "meaning": "chết (mất)",
    "topicId": "other"
  },
  {
    "id": 1193,
    "word": "探します・捜します",
    "hiragana": "さがします",
    "romaji": "sagashimasu",
    "meaning": "tìm, tìm kiếm",
    "topicId": "other"
  },
  {
    "id": 1194,
    "word": "遅れます",
    "hiragana": "おくれます",
    "romaji": "okuremasu",
    "meaning": "chậm, muộn [cuộc hẹn, v.v.]",
    "topicId": "other"
  },
  {
    "id": 1195,
    "word": "間に合います",
    "hiragana": "まにあいます",
    "romaji": "maniaimasu",
    "meaning": "kịp [cuộc hẹn, v.v.]",
    "topicId": "other"
  },
  {
    "id": 1196,
    "word": "やります",
    "hiragana": "やります",
    "romaji": "yarimasu",
    "meaning": "làm",
    "topicId": "work"
  },
  {
    "id": 1197,
    "word": "参加します",
    "hiragana": "さんかします",
    "romaji": "sankashimasu",
    "meaning": "tham gia [buổi tiệc, v.v.]",
    "topicId": "other"
  },
  {
    "id": 1198,
    "word": "申し込みます",
    "hiragana": "もうしこみます",
    "romaji": "moushikomimasu",
    "meaning": "đăng ký",
    "topicId": "food"
  },
  {
    "id": 1199,
    "word": "都合が いい",
    "hiragana": "つごうが いい",
    "romaji": "tsugou ga ii",
    "meaning": "có thời gian, thuận tiện",
    "topicId": "time_weather"
  },
  {
    "id": 1200,
    "word": "都合が 悪い",
    "hiragana": "つごうが わるい",
    "romaji": "tsugou ga warui",
    "meaning": "không có thời gian, bận, không thuận tiện",
    "topicId": "time_weather"
  },
  {
    "id": 1201,
    "word": "気分が いい",
    "hiragana": "きぶんが いい",
    "romaji": "kibun ga ii",
    "meaning": "cảm thấy tốt, cảm thấy khỏe",
    "topicId": "health"
  },
  {
    "id": 1202,
    "word": "気分が 悪い",
    "hiragana": "きぶんが わるい",
    "romaji": "kibun ga warui",
    "meaning": "cảm thấy không tốt, cảm thấy mệt",
    "topicId": "health"
  },
  {
    "id": 1203,
    "word": "新聞社",
    "hiragana": "しんぶんしゃ",
    "romaji": "shinbunsha",
    "meaning": "công ty phát hành báo, tòa soạn báo",
    "topicId": "lifestyle"
  },
  {
    "id": 1204,
    "word": "運動会",
    "hiragana": "うんどうかい",
    "romaji": "undoukai",
    "meaning": "hội thi thể thao",
    "topicId": "other"
  },
  {
    "id": 1205,
    "word": "場所",
    "hiragana": "ばしょ",
    "romaji": "basho",
    "meaning": "địa điểm, nơi chốn",
    "topicId": "traffic"
  },
  {
    "id": 1206,
    "word": "ボランティア",
    "hiragana": "ボランティア",
    "romaji": "borantia",
    "meaning": "tình nguyện viên",
    "topicId": "other"
  },
  {
    "id": 1207,
    "word": "～弁",
    "hiragana": "～べん",
    "romaji": "~ben",
    "meaning": "tiếng ~, giọng ~ (vùng miền)",
    "topicId": "other"
  },
  {
    "id": 1208,
    "word": "今度",
    "hiragana": "こんど",
    "romaji": "kondo",
    "meaning": "lần này, lần tới",
    "topicId": "other"
  },
  {
    "id": 1209,
    "word": "ずいぶん",
    "hiragana": "ずいぶん",
    "romaji": "zuibun",
    "meaning": "khá, tương đối",
    "topicId": "other"
  },
  {
    "id": 1210,
    "word": "直接",
    "hiragana": "ちょくせつ",
    "romaji": "chokusetsu",
    "meaning": "trực tiếp",
    "topicId": "other"
  },
  {
    "id": 1211,
    "word": "いつでも",
    "hiragana": "いつでも",
    "romaji": "itsudemo",
    "meaning": "bất cứ lúc nào",
    "topicId": "other"
  },
  {
    "id": 1212,
    "word": "どこでも",
    "hiragana": "どこでも",
    "romaji": "dokodemo",
    "meaning": "bất cứ ở đâu",
    "topicId": "other"
  },
  {
    "id": 1213,
    "word": "だれでも",
    "hiragana": "だれでも",
    "romaji": "daredemo",
    "meaning": "bất cứ ai",
    "topicId": "other"
  },
  {
    "id": 1214,
    "word": "何でも",
    "hiragana": "なんでも",
    "romaji": "nandemo",
    "meaning": "bất cứ cái gì",
    "topicId": "food"
  },
  {
    "id": 1215,
    "word": "こんな",
    "hiragana": "こんな",
    "romaji": "konna",
    "meaning": "như thế này",
    "topicId": "other"
  },
  {
    "id": 1216,
    "word": "そんな",
    "hiragana": "そんな",
    "romaji": "sonna",
    "meaning": "như thế đó (gần người nghe)",
    "topicId": "greetings"
  },
  {
    "id": 1217,
    "word": "あんな",
    "hiragana": "あんな",
    "romaji": "anna",
    "meaning": "như thế kia (xa cả hai)",
    "topicId": "traffic"
  },
  {
    "id": 1218,
    "word": "片づきます[荷物が～]",
    "hiragana": "かたづきます[にもつが～]",
    "romaji": "katazukimasu [nimotsu ga~]",
    "meaning": "được dọn dẹp, được sắp xếp [đồ đạc ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1219,
    "word": "ごみ",
    "hiragana": "ごみ",
    "romaji": "gomi",
    "meaning": "rác",
    "topicId": "other"
  },
  {
    "id": 1220,
    "word": "出します[ごみを～]",
    "hiragana": "だします[ごみを～]",
    "romaji": "dashimasu [gomi wo~]",
    "meaning": "đổ, để [rác] ra",
    "topicId": "other"
  },
  {
    "id": 1221,
    "word": "燃えます[ごみが～]",
    "hiragana": "もえます[ごみが～]",
    "romaji": "moemasu [gomi ga~]",
    "meaning": "cháy được [rác ~]",
    "topicId": "other"
  },
  {
    "id": 1222,
    "word": "月・水・金",
    "hiragana": "げつ・すい・きん",
    "romaji": "getsu-sui-kin",
    "meaning": "thứ hai, thứ tư, thứ sáu",
    "topicId": "other"
  },
  {
    "id": 1223,
    "word": "置場",
    "hiragana": "おきば",
    "romaji": "okiba",
    "meaning": "nơi để",
    "topicId": "other"
  },
  {
    "id": 1224,
    "word": "横",
    "hiragana": "よこ",
    "romaji": "yoko",
    "meaning": "bên cạnh",
    "topicId": "other"
  },
  {
    "id": 1225,
    "word": "瓶",
    "hiragana": "びん",
    "romaji": "bin",
    "meaning": "cái chai",
    "topicId": "food"
  },
  {
    "id": 1226,
    "word": "缶",
    "hiragana": "かん",
    "romaji": "kan",
    "meaning": "cái lon",
    "topicId": "food"
  },
  {
    "id": 1227,
    "word": "お湯",
    "hiragana": "おゆ",
    "romaji": "oyu",
    "meaning": "nước nóng",
    "topicId": "food"
  },
  {
    "id": 1228,
    "word": "ガス",
    "hiragana": "ガス",
    "romaji": "gasu",
    "meaning": "ga",
    "topicId": "traffic"
  },
  {
    "id": 1229,
    "word": "～会社",
    "hiragana": "～がいしゃ",
    "romaji": "~gaisha",
    "meaning": "công ty ~",
    "topicId": "work"
  },
  {
    "id": 1230,
    "word": "連絡します",
    "hiragana": "れんらくします",
    "romaji": "renrakushimasu",
    "meaning": "liên lạc",
    "topicId": "other"
  },
  {
    "id": 1231,
    "word": "困ったなあ",
    "hiragana": "こまったなあ",
    "romaji": "komattana",
    "meaning": "làm sao đây, gay quá / căng quá nhỉ",
    "topicId": "food"
  },
  {
    "id": 1232,
    "word": "電子メール",
    "hiragana": "でんしメール",
    "romaji": "denshi me-ru",
    "meaning": "thư điện tử, email",
    "topicId": "greetings"
  },
  {
    "id": 1233,
    "word": "宇宙",
    "hiragana": "うちゅう",
    "romaji": "uchuu",
    "meaning": "vũ trụ",
    "topicId": "other"
  },
  {
    "id": 1234,
    "word": "怖い",
    "hiragana": "こわい",
    "romaji": "kowai",
    "meaning": "sợ",
    "topicId": "other"
  },
  {
    "id": 1235,
    "word": "宇宙船",
    "hiragana": "うちゅうせん",
    "romaji": "uchuusen",
    "meaning": "tàu vũ trụ",
    "topicId": "traffic"
  },
  {
    "id": 1236,
    "word": "別の",
    "hiragana": "べつの",
    "romaji": "betsu no",
    "meaning": "khác",
    "topicId": "other"
  },
  {
    "id": 1237,
    "word": "宇宙飛行士",
    "hiragana": "うちゅうひこうし",
    "romaji": "uchuuhikoushi",
    "meaning": "nhà du hành vũ trụ",
    "topicId": "lifestyle"
  },
  {
    "id": 1238,
    "word": "ごみの出し方",
    "hiragana": "ごみの出し方",
    "romaji": "gomi no dashikata",
    "meaning": "Reference: Cách đổ rác",
    "topicId": "food"
  },
  {
    "id": 1239,
    "word": "可燃ごみ",
    "hiragana": "かねんごみ",
    "romaji": "kanen-gomi",
    "meaning": "rác cháy được",
    "topicId": "other"
  },
  {
    "id": 1240,
    "word": "紙くず",
    "hiragana": "かみくず",
    "romaji": "kamikuzu",
    "meaning": "giấy vụn",
    "topicId": "other"
  },
  {
    "id": 1241,
    "word": "生ごみ",
    "hiragana": "なまごみ",
    "romaji": "namagomi",
    "meaning": "rác sinh hoạt (rác nhà bếp)",
    "topicId": "lifestyle"
  },
  {
    "id": 1242,
    "word": "不燃ごみ",
    "hiragana": "ふねんごみ",
    "romaji": "funen-gomi",
    "meaning": "rác không cháy được",
    "topicId": "other"
  },
  {
    "id": 1243,
    "word": "ガラス製品",
    "hiragana": "ガラスせいひん",
    "romaji": "garasu seihin",
    "meaning": "đồ làm bằng thủy tinh",
    "topicId": "lifestyle"
  },
  {
    "id": 1244,
    "word": "プラスチック製品",
    "hiragana": "プラスチックせいひん",
    "romaji": "purasuchikku seihin",
    "meaning": "đồ làm bằng nhựa",
    "topicId": "lifestyle"
  },
  {
    "id": 1245,
    "word": "金属製台所用品",
    "hiragana": "きんぞくせいだいどころようひん",
    "romaji": "kinzoku sei daidokoro youhin",
    "meaning": "dụng cụ bếp bằng kim loại",
    "topicId": "other"
  },
  {
    "id": 1246,
    "word": "粗大ごみ",
    "hiragana": "そだいごみ",
    "romaji": "sodai-gomi",
    "meaning": "rác khổ lớn (cồng kềnh)",
    "topicId": "other"
  },
  {
    "id": 1247,
    "word": "家具",
    "hiragana": "かぐ",
    "romaji": "kagu",
    "meaning": "đồ nội thất",
    "topicId": "lifestyle"
  },
  {
    "id": 1248,
    "word": "家庭電化製品",
    "hiragana": "かていでんかせいひん",
    "romaji": "katei denka seihin",
    "meaning": "đồ điện gia dụng",
    "topicId": "traffic"
  },
  {
    "id": 1249,
    "word": "資源ごみ",
    "hiragana": "しげんごみ",
    "romaji": "shigen-gomi",
    "meaning": "rác tái chế",
    "topicId": "other"
  },
  {
    "id": 1250,
    "word": "空き缶",
    "hiragana": "あきかん",
    "romaji": "akikan",
    "meaning": "lon rỗng",
    "topicId": "other"
  },
  {
    "id": 1251,
    "word": "空き瓶",
    "hiragana": "あきびん",
    "romaji": "akibin",
    "meaning": "chai rỗng",
    "topicId": "other"
  },
  {
    "id": 1252,
    "word": "古新聞",
    "hiragana": "ふるしんぶん",
    "romaji": "furushinbun",
    "meaning": "báo cũ",
    "topicId": "lifestyle"
  },
  {
    "id": 1253,
    "word": "建てます",
    "hiragana": "たてます",
    "romaji": "tatemasu",
    "meaning": "xây, xây dựng",
    "topicId": "other"
  },
  {
    "id": 1254,
    "word": "走ります[道を～]",
    "hiragana": "はしります[みちを～]",
    "romaji": "hashirimasu [michi wo~]",
    "meaning": "chạy [trên đường]",
    "topicId": "traffic"
  },
  {
    "id": 1255,
    "word": "取ります[休みを～]",
    "hiragana": "とります[やすみを～]",
    "romaji": "torimasu [yasumi wo~]",
    "meaning": "xin [nghỉ]",
    "topicId": "health"
  },
  {
    "id": 1256,
    "word": "見えます[山が～]",
    "hiragana": "みえます[やまが～]",
    "romaji": "miemasu [yama ga~]",
    "meaning": "nhìn thấy, có thể nhìn thấy [núi]",
    "topicId": "travel"
  },
  {
    "id": 1257,
    "word": "聞こえます[音が～]",
    "hiragana": "きこえます[おとが～]",
    "romaji": "kikoemasu [oto ga~]",
    "meaning": "nghe thấy, có thể nghe thấy [âm thanh]",
    "topicId": "greetings"
  },
  {
    "id": 1258,
    "word": "できます[空港が～]",
    "hiragana": "できます[くうこうが～]",
    "romaji": "dekimasu [kuukou ga~]",
    "meaning": "được hoàn thành, được làm ra [sân bay]",
    "topicId": "traffic"
  },
  {
    "id": 1259,
    "word": "開きます[教室を～]",
    "hiragana": "ひらきます[きょうしつを～]",
    "romaji": "hirakimasu [kyoushitsu wo~]",
    "meaning": "mở [lớp học]",
    "topicId": "other"
  },
  {
    "id": 1260,
    "word": "ペット",
    "hiragana": "ペット",
    "romaji": "petto",
    "meaning": "động vật cảnh (pet)",
    "topicId": "travel"
  },
  {
    "id": 1261,
    "word": "鳥",
    "hiragana": "とり",
    "romaji": "tori",
    "meaning": "chim",
    "topicId": "other"
  },
  {
    "id": 1262,
    "word": "声",
    "hiragana": "こえ",
    "romaji": "koe",
    "meaning": "tiếng, giọng nói",
    "topicId": "other"
  },
  {
    "id": 1263,
    "word": "波",
    "hiragana": "なみ",
    "romaji": "nami",
    "meaning": "sóng",
    "topicId": "other"
  },
  {
    "id": 1264,
    "word": "花火",
    "hiragana": "はなび",
    "romaji": "hanabi",
    "meaning": "pháo hoa",
    "topicId": "health"
  },
  {
    "id": 1265,
    "word": "景色",
    "hiragana": "けしき",
    "romaji": "keshiki",
    "meaning": "phong cảnh",
    "topicId": "health"
  },
  {
    "id": 1266,
    "word": "昼間",
    "hiragana": "ひるま",
    "romaji": "hiruma",
    "meaning": "thời gian ban ngày",
    "topicId": "time_weather"
  },
  {
    "id": 1267,
    "word": "昔",
    "hiragana": "むかし",
    "romaji": "mukashi",
    "meaning": "ngày xưa, trước đây",
    "topicId": "time_weather"
  },
  {
    "id": 1268,
    "word": "道具",
    "hiragana": "どうぐ",
    "romaji": "dougu",
    "meaning": "dụng cụ, công cụ",
    "topicId": "other"
  },
  {
    "id": 1269,
    "word": "自動販売機",
    "hiragana": "じどうはんばいき",
    "romaji": "jidouhanbaiki",
    "meaning": "máy bán hàng tự động",
    "topicId": "shopping"
  },
  {
    "id": 1270,
    "word": "通信販売",
    "hiragana": "つうしんはんばい",
    "romaji": "tsuushinhanbai",
    "meaning": "thương mại viễn thông (mua bán hàng qua các phương tiện truyền thông)",
    "topicId": "shopping"
  },
  {
    "id": 1271,
    "word": "クリーニング",
    "hiragana": "クリーニング",
    "romaji": "kuri-ningu",
    "meaning": "giặt ủi",
    "topicId": "lifestyle"
  },
  {
    "id": 1272,
    "word": "マンション",
    "hiragana": "マンション",
    "romaji": "manshon",
    "meaning": "nhà chung cư",
    "topicId": "lifestyle"
  },
  {
    "id": 1273,
    "word": "～教室",
    "hiragana": "～きょうしつ",
    "romaji": "~kyoushitsu",
    "meaning": "lớp học ~",
    "topicId": "other"
  },
  {
    "id": 1274,
    "word": "パーティールーム",
    "hiragana": "パーティールーム",
    "romaji": "pa-ti-ru-mu",
    "meaning": "phòng tiệc",
    "topicId": "lifestyle"
  },
  {
    "id": 1275,
    "word": "～しか",
    "hiragana": "～しか",
    "romaji": "~shika",
    "meaning": "chỉ ~ (dùng với thể phủ định)",
    "topicId": "other"
  },
  {
    "id": 1276,
    "word": "他の",
    "hiragana": "ほかの",
    "romaji": "hokano",
    "meaning": "khác",
    "topicId": "other"
  },
  {
    "id": 1277,
    "word": "はっきり",
    "hiragana": "はっきり",
    "romaji": "hakkiri",
    "meaning": "rõ ràng",
    "topicId": "other"
  },
  {
    "id": 1278,
    "word": "ほとんど",
    "hiragana": "ほとんど",
    "romaji": "hotondo",
    "meaning": "hầu hết, hầu như",
    "topicId": "other"
  },
  {
    "id": 1279,
    "word": "関西空港",
    "hiragana": "かんさいくうこう",
    "romaji": "Kansai kuukou",
    "meaning": "Sân bay Kansai",
    "topicId": "traffic"
  },
  {
    "id": 1280,
    "word": "秋葉原",
    "hiragana": "あきはばら",
    "romaji": "Akihabara",
    "meaning": "Khu phố điện tử Akihabara",
    "topicId": "traffic"
  },
  {
    "id": 1281,
    "word": "伊豆",
    "hiragana": "いず",
    "romaji": "Izu",
    "meaning": "Bán đảo Izu",
    "topicId": "shopping"
  },
  {
    "id": 1282,
    "word": "日曜大工",
    "hiragana": "にちようだいく",
    "romaji": "nichiyoudaiku",
    "meaning": "làm thợ mộc chủ nhật",
    "topicId": "work"
  },
  {
    "id": 1283,
    "word": "本棚",
    "hiragana": "ほんだな",
    "romaji": "hondana",
    "meaning": "giá sách",
    "topicId": "shopping"
  },
  {
    "id": 1284,
    "word": "夢",
    "hiragana": "ゆめ",
    "romaji": "yume",
    "meaning": "giấc mơ",
    "topicId": "other"
  },
  {
    "id": 1285,
    "word": "いつか",
    "hiragana": "いつか",
    "romaji": "itsuka",
    "meaning": "một ngày nào đó",
    "topicId": "time_weather"
  },
  {
    "id": 1286,
    "word": "家",
    "hiragana": "いえ",
    "romaji": "ie",
    "meaning": "nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 1287,
    "word": "素晴らしい",
    "hiragana": "すばらしい",
    "romaji": "subarashii",
    "meaning": "tuyệt vời",
    "topicId": "other"
  },
  {
    "id": 1288,
    "word": "子供たち",
    "hiragana": "こどもたち",
    "romaji": "kodomotachi",
    "meaning": "trẻ em, con cái",
    "topicId": "greetings"
  },
  {
    "id": 1289,
    "word": "大好き[な]",
    "hiragana": "だいすき[な]",
    "romaji": "daisuki [na]",
    "meaning": "rất thích",
    "topicId": "other"
  },
  {
    "id": 1290,
    "word": "漫画",
    "hiragana": "まんが",
    "romaji": "manga",
    "meaning": "truyện tranh",
    "topicId": "greetings"
  },
  {
    "id": 1291,
    "word": "主人公",
    "hiragana": "しゅじんこう",
    "romaji": "shujinkou",
    "meaning": "nhân vật chính",
    "topicId": "other"
  },
  {
    "id": 1292,
    "word": "形",
    "hiragana": "かたち",
    "romaji": "katachi",
    "meaning": "hình dáng",
    "topicId": "other"
  },
  {
    "id": 1293,
    "word": "ロボット",
    "hiragana": "ロボット",
    "romaji": "robotto",
    "meaning": "người máy",
    "topicId": "greetings"
  },
  {
    "id": 1294,
    "word": "不思議[な]",
    "hiragana": "ふしぎ[な]",
    "romaji": "fushigi [na]",
    "meaning": "bí ẩn, kỳ thú",
    "topicId": "other"
  },
  {
    "id": 1295,
    "word": "ポケット",
    "hiragana": "ポケット",
    "romaji": "poketto",
    "meaning": "túi áo, túi quần (pocket)",
    "topicId": "shopping"
  },
  {
    "id": 1296,
    "word": "例えば",
    "hiragana": "たとえば",
    "romaji": "tatoeba",
    "meaning": "ví dụ",
    "topicId": "other"
  },
  {
    "id": 1297,
    "word": "自由に",
    "hiragana": "じゆうに",
    "romaji": "jiyuu ni",
    "meaning": "tự do",
    "topicId": "other"
  },
  {
    "id": 1298,
    "word": "空",
    "hiragana": "そら",
    "romaji": "sora",
    "meaning": "bầu trời",
    "topicId": "other"
  },
  {
    "id": 1299,
    "word": "飛びます",
    "hiragana": "とびます",
    "romaji": "tobimasu",
    "meaning": "bay",
    "topicId": "traffic"
  },
  {
    "id": 1300,
    "word": "自分",
    "hiragana": "じぶん",
    "romaji": "jibun",
    "meaning": "bản thân",
    "topicId": "other"
  },
  {
    "id": 1301,
    "word": "将来",
    "hiragana": "しょうらい",
    "romaji": "shourai",
    "meaning": "tương lai",
    "topicId": "other"
  },
  {
    "id": 1302,
    "word": "ドラえもん",
    "hiragana": "ドラえもん",
    "romaji": "Daraemon",
    "meaning": "Doraemon (nhân vật truyện tranh)",
    "topicId": "greetings"
  },
  {
    "id": 1303,
    "word": "写真屋",
    "hiragana": "しゃしんや",
    "romaji": "shashinya",
    "meaning": "cửa hàng ảnh",
    "topicId": "shopping"
  },
  {
    "id": 1304,
    "word": "現像",
    "hiragana": "げんぞう",
    "romaji": "genzou",
    "meaning": "rửa ảnh",
    "topicId": "travel"
  },
  {
    "id": 1305,
    "word": "プリント",
    "hiragana": "プリント",
    "romaji": "purinto",
    "meaning": "in ảnh",
    "topicId": "travel"
  },
  {
    "id": 1306,
    "word": "焼き増し",
    "hiragana": "やきまし",
    "romaji": "yakimashi",
    "meaning": "in thêm",
    "topicId": "other"
  },
  {
    "id": 1307,
    "word": "引き伸ばし",
    "hiragana": "ひきのばし",
    "romaji": "hikinobashi",
    "meaning": "phóng to",
    "topicId": "other"
  },
  {
    "id": 1308,
    "word": "ネガ",
    "hiragana": "ネガ",
    "romaji": "nega",
    "meaning": "phim âm bản",
    "topicId": "anime"
  },
  {
    "id": 1309,
    "word": "スライド",
    "hiragana": "スライド",
    "romaji": "suraido",
    "meaning": "slide",
    "topicId": "other"
  },
  {
    "id": 1310,
    "word": "サービスサイズ",
    "hiragana": "サービスサイズ",
    "romaji": "sa-bisusaizu",
    "meaning": "cỡ ảnh service (cỡ standard)",
    "topicId": "travel"
  },
  {
    "id": 1311,
    "word": "パノラマサイズ",
    "hiragana": "パノラマサイズ",
    "romaji": "panoramasaizu",
    "meaning": "cỡ panorama",
    "topicId": "other"
  },
  {
    "id": 1312,
    "word": "クリーニング屋",
    "hiragana": "クリーニングや",
    "romaji": "kuri-ninguya",
    "meaning": "tiệm giặt ủi",
    "topicId": "lifestyle"
  },
  {
    "id": 1313,
    "word": "ドライクリーニング",
    "hiragana": "ドライクリーニング",
    "romaji": "doraikuri-ningu",
    "meaning": "giặt khô",
    "topicId": "lifestyle"
  },
  {
    "id": 1314,
    "word": "水洗い",
    "hiragana": "みずあらい",
    "romaji": "mizuarai",
    "meaning": "giặt nước",
    "topicId": "food"
  },
  {
    "id": 1315,
    "word": "染み抜き",
    "hiragana": "しみぬき",
    "romaji": "shiminuki",
    "meaning": "tẩy vết bẩn",
    "topicId": "other"
  },
  {
    "id": 1316,
    "word": "防水加工",
    "hiragana": "ぼうすいかこう",
    "romaji": "bousuikakou",
    "meaning": "gia công chống thấm nước",
    "topicId": "food"
  },
  {
    "id": 1317,
    "word": "サイズ直し",
    "hiragana": "サイズなおし",
    "romaji": "saizunaoshi",
    "meaning": "sửa kích cỡ",
    "topicId": "other"
  },
  {
    "id": 1318,
    "word": "縮む",
    "hiragana": "ちぢむ",
    "romaji": "chijimu",
    "meaning": "co lại",
    "topicId": "other"
  },
  {
    "id": 1319,
    "word": "伸びる",
    "hiragana": "のびる",
    "romaji": "nobiru",
    "meaning": "giãn ra",
    "topicId": "other"
  },
  {
    "id": 1320,
    "word": "宅配便の受付",
    "hiragana": "たくはいびんのうけつけ",
    "romaji": "takuhaibin no uketsuke",
    "meaning": "nhận chuyển phát nhanh",
    "topicId": "greetings"
  },
  {
    "id": 1321,
    "word": "写真現像",
    "hiragana": "しゃしんげんぞう",
    "romaji": "shashingenzou",
    "meaning": "tráng rửa ảnh",
    "topicId": "travel"
  },
  {
    "id": 1322,
    "word": "公共料金振込",
    "hiragana": "こうきょうりょうきんふりこみ",
    "romaji": "koukyou ryoukin furikomi",
    "meaning": "thanh toán tiền điện nước",
    "topicId": "greetings"
  },
  {
    "id": 1323,
    "word": "コピー、ファクス",
    "hiragana": "コピー、ファクス",
    "romaji": "kopi-, fakusu",
    "meaning": "copy, fax",
    "topicId": "work"
  },
  {
    "id": 1324,
    "word": "はがき、切手の販売",
    "hiragana": "はがき、きってのはんばい",
    "romaji": "hagaki, kitte no hanbai",
    "meaning": "bán tem, bưu thiếp",
    "topicId": "greetings"
  },
  {
    "id": 1325,
    "word": "コンサートチケットの販売",
    "hiragana": "コンサートチケットのはんばい",
    "romaji": "konsa-to chiketto no hanbai",
    "meaning": "bán vé hòa nhạc",
    "topicId": "shopping"
  },
  {
    "id": 1326,
    "word": "売れます[パンが～]",
    "hiragana": "うれます[パンが～]",
    "romaji": "uremasu [pan ga~]",
    "meaning": "bán chạy [bánh mì ~]",
    "topicId": "shopping"
  },
  {
    "id": 1327,
    "word": "踊ります",
    "hiragana": "おどります",
    "romaji": "odorimasu",
    "meaning": "múa, nhảy",
    "topicId": "anime"
  },
  {
    "id": 1328,
    "word": "かみます",
    "hiragana": "かみます",
    "romaji": "kamimasu",
    "meaning": "nhai, cắn",
    "topicId": "other"
  },
  {
    "id": 1329,
    "word": "選びます",
    "hiragana": "えらびます",
    "romaji": "erabimasu",
    "meaning": "chọn",
    "topicId": "other"
  },
  {
    "id": 1330,
    "word": "通います[大学に～]",
    "hiragana": "かよいます[だいがくに～]",
    "romaji": "kayoimasu [daigaku ni~]",
    "meaning": "đi đi về về [trường đại học]",
    "topicId": "traffic"
  },
  {
    "id": 1331,
    "word": "メモします",
    "hiragana": "メモします",
    "romaji": "memoshimasu",
    "meaning": "ghi chép, memo",
    "topicId": "greetings"
  },
  {
    "id": 1332,
    "word": "まじめ[な]",
    "hiragana": "まじめ[な]",
    "romaji": "majime [na]",
    "meaning": "nghiêm túc, chăm chỉ",
    "topicId": "other"
  },
  {
    "id": 1333,
    "word": "熱心[な]",
    "hiragana": "ねっしん[な]",
    "romaji": "nesshin [na]",
    "meaning": "nhiệt tâm, nhiệt tình",
    "topicId": "other"
  },
  {
    "id": 1334,
    "word": "偉い",
    "hiragana": "えらい",
    "romaji": "erai",
    "meaning": "vĩ đại, đáng kính, giỏi",
    "topicId": "other"
  },
  {
    "id": 1335,
    "word": "ちょうど いい",
    "hiragana": "ちょうど いい",
    "romaji": "choudo ii",
    "meaning": "vừa vừa, vừa đúng",
    "topicId": "other"
  },
  {
    "id": 1336,
    "word": "習慣",
    "hiragana": "しゅうかん",
    "romaji": "shuukan",
    "meaning": "tập quán, thói quen",
    "topicId": "food"
  },
  {
    "id": 1337,
    "word": "経験",
    "hiragana": "けいけん",
    "romaji": "keiken",
    "meaning": "kinh nghiệm",
    "topicId": "other"
  },
  {
    "id": 1338,
    "word": "力",
    "hiragana": "ちから",
    "romaji": "chikara",
    "meaning": "sức lực, năng lực",
    "topicId": "food"
  },
  {
    "id": 1339,
    "word": "人気",
    "hiragana": "にんき",
    "romaji": "ninki",
    "meaning": "sự hâm mộ, được yêu thích",
    "topicId": "other"
  },
  {
    "id": 1340,
    "word": "色",
    "hiragana": "いろ",
    "romaji": "iro",
    "meaning": "màu sắc",
    "topicId": "other"
  },
  {
    "id": 1341,
    "word": "味",
    "hiragana": "あじ",
    "romaji": "aji",
    "meaning": "vị",
    "topicId": "other"
  },
  {
    "id": 1342,
    "word": "ガム",
    "hiragana": "ガム",
    "romaji": "gamu",
    "meaning": "kẹo cao su",
    "topicId": "other"
  },
  {
    "id": 1343,
    "word": "品物",
    "hiragana": "しなもの",
    "romaji": "shinamono",
    "meaning": "hàng hóa",
    "topicId": "other"
  },
  {
    "id": 1344,
    "word": "値段",
    "hiragana": "ねだん",
    "romaji": "nedan",
    "meaning": "giá cả",
    "topicId": "shopping"
  },
  {
    "id": 1345,
    "word": "給料",
    "hiragana": "きゅうりょう",
    "romaji": "kyuuryou",
    "meaning": "lương",
    "topicId": "other"
  },
  {
    "id": 1346,
    "word": "ボーナス",
    "hiragana": "ボーナス",
    "romaji": "bo-nasu",
    "meaning": "thưởng (bonus)",
    "topicId": "lifestyle"
  },
  {
    "id": 1347,
    "word": "番組",
    "hiragana": "ばんぐみ",
    "romaji": "bangumi",
    "meaning": "chương trình (truyền hình, phát thanh)",
    "topicId": "greetings"
  },
  {
    "id": 1348,
    "word": "ドラマ",
    "hiragana": "ドラマ",
    "romaji": "dorama",
    "meaning": "phim truyền hình (drama)",
    "topicId": "anime"
  },
  {
    "id": 1349,
    "word": "小説",
    "hiragana": "しょうせつ",
    "romaji": "shousetsu",
    "meaning": "tiểu thuyết",
    "topicId": "time_weather"
  },
  {
    "id": 1350,
    "word": "小説家",
    "hiragana": "しょうせつか",
    "romaji": "shousetsuka",
    "meaning": "nhà văn, tiểu thuyết gia",
    "topicId": "food"
  },
  {
    "id": 1351,
    "word": "管理人",
    "hiragana": "かんりにん",
    "romaji": "kanrinin",
    "meaning": "người quản lý",
    "topicId": "greetings"
  },
  {
    "id": 1352,
    "word": "息子",
    "hiragana": "むすこ",
    "romaji": "musuko",
    "meaning": "con trai (của tôi)",
    "topicId": "other"
  },
  {
    "id": 1353,
    "word": "息子さん",
    "hiragana": "むすこさん",
    "romaji": "musukosan",
    "meaning": "con trai (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 1354,
    "word": "娘",
    "hiragana": "むすめ",
    "romaji": "musume",
    "meaning": "con gái (của tôi)",
    "topicId": "other"
  },
  {
    "id": 1355,
    "word": "娘さん",
    "hiragana": "むすめさん",
    "romaji": "musumesan",
    "meaning": "con gái (người khác)",
    "topicId": "greetings"
  },
  {
    "id": 1356,
    "word": "しばらく",
    "hiragana": "しばらく",
    "romaji": "shibaraku",
    "meaning": "một khoảng thời gian ngắn, một lúc",
    "topicId": "health"
  },
  {
    "id": 1357,
    "word": "たいてい",
    "hiragana": "たいてい",
    "romaji": "taitei",
    "meaning": "thường, thông thường",
    "topicId": "lifestyle"
  },
  {
    "id": 1358,
    "word": "それに",
    "hiragana": "それに",
    "romaji": "soreni",
    "meaning": "thêm nữa là, với lại",
    "topicId": "other"
  },
  {
    "id": 1359,
    "word": "それで",
    "hiragana": "それで",
    "romaji": "sorede",
    "meaning": "thế thì, thế nên",
    "topicId": "other"
  },
  {
    "id": 1360,
    "word": "[ちょっと] お願いが あるんですが",
    "hiragana": "[ちょっと] おねがいが あるんですが",
    "romaji": "[chotto] onegai ga arun desuga",
    "meaning": "Tôi có chút việc muốn nhờ",
    "topicId": "work"
  },
  {
    "id": 1361,
    "word": "ホームステイ",
    "hiragana": "ホームステイ",
    "romaji": "ho-musutei",
    "meaning": "homestay",
    "topicId": "health"
  },
  {
    "id": 1362,
    "word": "会話",
    "hiragana": "かいわ",
    "romaji": "kaiwa",
    "meaning": "hội thoại",
    "topicId": "health"
  },
  {
    "id": 1363,
    "word": "おしゃべりします",
    "hiragana": "おしゃべりします",
    "romaji": "oshaberishimasu",
    "meaning": "nói chuyện, tán gẫu",
    "topicId": "other"
  },
  {
    "id": 1364,
    "word": "お知らせ",
    "hiragana": "おしらせ",
    "romaji": "oshirase",
    "meaning": "thông báo",
    "topicId": "lifestyle"
  },
  {
    "id": 1365,
    "word": "日にち",
    "hiragana": "ひにち",
    "romaji": "hinichi",
    "meaning": "ngày",
    "topicId": "time_weather"
  },
  {
    "id": 1366,
    "word": "土",
    "hiragana": "ど",
    "romaji": "do",
    "meaning": "thứ bảy",
    "topicId": "other"
  },
  {
    "id": 1367,
    "word": "無料",
    "hiragana": "むりょう",
    "romaji": "muryou",
    "meaning": "miễn phí",
    "topicId": "other"
  },
  {
    "id": 1368,
    "word": "不動産屋",
    "hiragana": "ふどうさんや",
    "romaji": "fudousanya",
    "meaning": "văn phòng bất động sản",
    "topicId": "food"
  },
  {
    "id": 1369,
    "word": "家賃",
    "hiragana": "家賃",
    "romaji": "yachin",
    "meaning": "tiền nhà",
    "topicId": "shopping"
  },
  {
    "id": 1370,
    "word": "敷金",
    "hiragana": "しききん",
    "romaji": "shikikin",
    "meaning": "tiền cọc (cho chủ nhà, thường được trả lại)",
    "topicId": "shopping"
  },
  {
    "id": 1371,
    "word": "礼金",
    "hiragana": "れいきん",
    "romaji": "reikin",
    "meaning": "tiền lễ (biếu chủ nhà, không được trả lại)",
    "topicId": "shopping"
  },
  {
    "id": 1372,
    "word": "管理費",
    "hiragana": "かんりひ",
    "romaji": "kanrihi",
    "meaning": "phí quản lý",
    "topicId": "food"
  },
  {
    "id": 1373,
    "word": "一戸建て",
    "hiragana": "いっこだて",
    "romaji": "ikkodate",
    "meaning": "nhà nguyên căn, nhà riêng",
    "topicId": "food"
  },
  {
    "id": 1374,
    "word": "～建て",
    "hiragana": "～だて",
    "romaji": "~date",
    "meaning": "nhà ~ tầng",
    "topicId": "lifestyle"
  },
  {
    "id": 1375,
    "word": "～畳",
    "hiragana": "～じょう",
    "romaji": "~jou",
    "meaning": "~ chiếu (đơn vị đo diện tích phòng)",
    "topicId": "lifestyle"
  },
  {
    "id": 1376,
    "word": "～向き",
    "hiragana": "～むき",
    "romaji": "~muki",
    "meaning": "hướng ~",
    "topicId": "other"
  },
  {
    "id": 1377,
    "word": "徒歩",
    "hiragana": "とほ",
    "romaji": "toho",
    "meaning": "đi bộ",
    "topicId": "traffic"
  },
  {
    "id": 1378,
    "word": "築～年",
    "hiragana": "ちく～ねん",
    "romaji": "chiku~nen",
    "meaning": "xây được ~ năm",
    "topicId": "time_weather"
  },
  {
    "id": 1379,
    "word": "LDK",
    "hiragana": "LDK",
    "romaji": "LDK",
    "meaning": "Living, Dining, Kitchen (Phòng khách, ăn, bếp)",
    "topicId": "shopping"
  },
  {
    "id": 1380,
    "word": "開きます[ドアが～]",
    "hiragana": "あきます[ドアが～]",
    "romaji": "akimasu [doa ga~]",
    "meaning": "mở [cửa ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1381,
    "word": "閉まります[ドアが～]",
    "hiragana": "しまります[ドアが～]",
    "romaji": "shimarimasu [doa ga~]",
    "meaning": "đóng [cửa ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1382,
    "word": "つきます[電気が～]",
    "hiragana": "つきます[でんきが～]",
    "romaji": "tsukimasu [denki ga~]",
    "meaning": "bật sáng, thắp sáng [điện ~]",
    "topicId": "food"
  },
  {
    "id": 1383,
    "word": "消えます[電気が～]",
    "hiragana": "きえます[でんきが～]",
    "romaji": "kiemasu [denki ga~]",
    "meaning": "tắt [điện ~]",
    "topicId": "traffic"
  },
  {
    "id": 1384,
    "word": "込みます[道が～]",
    "hiragana": "こみます[みちが～]",
    "romaji": "komimasu [michi ga~]",
    "meaning": "đông, tắc [đường ~]",
    "topicId": "traffic"
  },
  {
    "id": 1385,
    "word": "空きます[道が～]",
    "hiragana": "すきます[みちが～]",
    "romaji": "sukimasu [michi ga~]",
    "meaning": "vắng, thoáng [đường ~]",
    "topicId": "traffic"
  },
  {
    "id": 1386,
    "word": "壊れます[椅子が～]",
    "hiragana": "こわれます[いすが～]",
    "romaji": "kowaremasu [isu ga~]",
    "meaning": "hỏng [cái ghế ~]",
    "topicId": "food"
  },
  {
    "id": 1387,
    "word": "割れます[コップが～]",
    "hiragana": "われます[コップが～]",
    "romaji": "waremasu [koppu ga~]",
    "meaning": "vỡ [cái cốc ~]",
    "topicId": "food"
  },
  {
    "id": 1388,
    "word": "折れます[木が～]",
    "hiragana": "おれます[きが～]",
    "romaji": "oremasu [ki ga~]",
    "meaning": "gãy [cái cây ~]",
    "topicId": "food"
  },
  {
    "id": 1389,
    "word": "破れます[紙が～]",
    "hiragana": "やぶれます[かみが～]",
    "romaji": "yaburemasu [kami ga~]",
    "meaning": "rách [tờ giấy ~]",
    "topicId": "other"
  },
  {
    "id": 1390,
    "word": "汚れます[服が～]",
    "hiragana": "よごれます[ふくが～]",
    "romaji": "yogoremasu [fuku ga~]",
    "meaning": "bẩn [quần áo ~]",
    "topicId": "other"
  },
  {
    "id": 1391,
    "word": "付きます[ポケットが～]",
    "hiragana": "つきます[ポケットが～]",
    "romaji": "tsukimasu [poketto ga~]",
    "meaning": "có, có gắn, có kèm theo [túi ~]",
    "topicId": "shopping"
  },
  {
    "id": 1392,
    "word": "外れます[ボタンが～]",
    "hiragana": "はずれます[ボタンが～]",
    "romaji": "hazuremasu [botan ga~]",
    "meaning": "bung, tuột [cái cúc ~]",
    "topicId": "food"
  },
  {
    "id": 1393,
    "word": "止まります[エレベーターが～]",
    "hiragana": "とまります[エレベーターが～]",
    "romaji": "tomarimasu [erebe-ta- ga~]",
    "meaning": "dừng [thang máy ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1394,
    "word": "まちがえます",
    "hiragana": "まちがえます",
    "romaji": "machigaemasu",
    "meaning": "nhầm, sai",
    "topicId": "other"
  },
  {
    "id": 1395,
    "word": "落とします",
    "hiragana": "おとします",
    "romaji": "otoshimasu",
    "meaning": "đánh rơi",
    "topicId": "other"
  },
  {
    "id": 1396,
    "word": "掛かります[鍵が～]",
    "hiragana": "かかります[かぎが～]",
    "romaji": "kakarimasu [kagi ga~]",
    "meaning": "khóa [chìa khóa ~]",
    "topicId": "lifestyle"
  },
  {
    "id": 1397,
    "word": "お皿",
    "hiragana": "おさら",
    "romaji": "osara",
    "meaning": "cái đĩa",
    "topicId": "food"
  },
  {
    "id": 1398,
    "word": "おちゃわん",
    "hiragana": "おちゃわん",
    "romaji": "ochawan",
    "meaning": "cái bát",
    "topicId": "food"
  },
  {
    "id": 1399,
    "word": "コップ",
    "hiragana": "コップ",
    "romaji": "koppu",
    "meaning": "cái cốc",
    "topicId": "food"
  },
  {
    "id": 1400,
    "word": "ガラス",
    "hiragana": "ガラス",
    "romaji": "garasu",
    "meaning": "kính, thủy tinh",
    "topicId": "other"
  },
  {
    "id": 1401,
    "word": "袋",
    "hiragana": "ふくろ",
    "romaji": "fukuro",
    "meaning": "cái túi",
    "topicId": "shopping"
  },
  {
    "id": 1402,
    "word": "財布",
    "hiragana": "さいふ",
    "romaji": "saifu",
    "meaning": "cái ví",
    "topicId": "food"
  },
  {
    "id": 1403,
    "word": "枝",
    "hiragana": "えだ",
    "romaji": "eda",
    "meaning": "cành cây",
    "topicId": "other"
  },
  {
    "id": 1404,
    "word": "この辺",
    "hiragana": "このへん",
    "romaji": "kono hen",
    "meaning": "vùng này, quanh đây",
    "topicId": "greetings"
  },
  {
    "id": 1405,
    "word": "～辺",
    "hiragana": "～へん",
    "romaji": "~hen",
    "meaning": "vùng ~, quanh ~",
    "topicId": "greetings"
  },
  {
    "id": 1406,
    "word": "このくらい",
    "hiragana": "このくらい",
    "romaji": "kono kurai",
    "meaning": "khoảng ngần này, cỡ chừng này",
    "topicId": "traffic"
  },
  {
    "id": 1407,
    "word": "お先に どうぞ",
    "hiragana": "おさきに どうぞ",
    "romaji": "osakini douzo",
    "meaning": "Xin mời anh/chị đi trước",
    "topicId": "greetings"
  },
  {
    "id": 1408,
    "word": "よかった",
    "hiragana": "よかった",
    "romaji": "yokatta",
    "meaning": "Ồ, may quá (dùng để biểu lộ cảm xúc nhẹ nhõm)",
    "topicId": "health"
  },
  {
    "id": 1409,
    "word": "今の 電車",
    "hiragana": "いまの でんしゃ",
    "romaji": "ima no densha",
    "meaning": "tàu điện bây giờ (vừa chạy)",
    "topicId": "traffic"
  },
  {
    "id": 1410,
    "word": "忘れ物",
    "hiragana": "わすれもの",
    "romaji": "wasuremono",
    "meaning": "vật để quên",
    "topicId": "greetings"
  },
  {
    "id": 1411,
    "word": "～側",
    "hiragana": "～がわ",
    "romaji": "~gawa",
    "meaning": "phía ~",
    "topicId": "other"
  },
  {
    "id": 1412,
    "word": "覚えて いません",
    "hiragana": "おぼえて いません",
    "romaji": "oboete imasen",
    "meaning": "Tôi không nhớ",
    "topicId": "other"
  },
  {
    "id": 1413,
    "word": "網棚",
    "hiragana": "あみだな",
    "romaji": "amidana",
    "meaning": "giá lưới (để hành lý trên tàu)",
    "topicId": "shopping"
  },
  {
    "id": 1414,
    "word": "確か",
    "hiragana": "たしか",
    "romaji": "tashika",
    "meaning": "chắc là, hình như (dùng khi không chắc chắn lắm)",
    "topicId": "other"
  },
  {
    "id": 1415,
    "word": "四ツ谷",
    "hiragana": "よつや",
    "romaji": "Yotsuya",
    "meaning": "tên một nhà ga ở Tokyo",
    "topicId": "traffic"
  },
  {
    "id": 1416,
    "word": "地震",
    "hiragana": "じしん",
    "romaji": "jishin",
    "meaning": "động đất",
    "topicId": "other"
  },
  {
    "id": 1417,
    "word": "壁",
    "hiragana": "かべ",
    "romaji": "kabe",
    "meaning": "bức tường",
    "topicId": "other"
  },
  {
    "id": 1418,
    "word": "針",
    "hiragana": "はり",
    "romaji": "hari",
    "meaning": "kim đồng hồ",
    "topicId": "lifestyle"
  },
  {
    "id": 1419,
    "word": "指します",
    "hiragana": "さします",
    "romaji": "sashimasu",
    "meaning": "chỉ",
    "topicId": "other"
  },
  {
    "id": 1420,
    "word": "駅前",
    "hiragana": "えきまえ",
    "romaji": "ekimae",
    "meaning": "khu vực trước ga",
    "topicId": "traffic"
  },
  {
    "id": 1421,
    "word": "倒れます",
    "hiragana": "たおれます",
    "romaji": "taoremasu",
    "meaning": "đổ, ngã",
    "topicId": "other"
  },
  {
    "id": 1422,
    "word": "西",
    "hiragana": "にし",
    "romaji": "nishi",
    "meaning": "phía tây",
    "topicId": "other"
  },
  {
    "id": 1423,
    "word": "方",
    "hiragana": "ほう",
    "romaji": "hou",
    "meaning": "hướng, phương",
    "topicId": "other"
  },
  {
    "id": 1424,
    "word": "三宮",
    "hiragana": "さんのみや",
    "romaji": "Sannomiya",
    "meaning": "tên một địa danh ở Kobe",
    "topicId": "greetings"
  },
  {
    "id": 1425,
    "word": "太っている",
    "hiragana": "ふとっている",
    "romaji": "futotteiru",
    "meaning": "béo",
    "topicId": "other"
  },
  {
    "id": 1426,
    "word": "やせている",
    "hiragana": "やせている",
    "romaji": "yaseteiru",
    "meaning": "gầy",
    "topicId": "other"
  },
  {
    "id": 1427,
    "word": "膨らんでいる",
    "hiragana": "ふくらんでいる",
    "romaji": "fukurandeiru",
    "meaning": "phồng lên",
    "topicId": "travel"
  },
  {
    "id": 1428,
    "word": "穴が 開いている",
    "hiragana": "あなが あいている",
    "romaji": "ana ga aiteiru",
    "meaning": "thủng lỗ",
    "topicId": "other"
  },
  {
    "id": 1429,
    "word": "曲がっている",
    "hiragana": "まがっている",
    "romaji": "magatteiru",
    "meaning": "cong",
    "topicId": "other"
  },
  {
    "id": 1430,
    "word": "ゆがんでいる",
    "hiragana": "ゆがんでいる",
    "romaji": "yugandeiru",
    "meaning": "méo mó",
    "topicId": "other"
  },
  {
    "id": 1431,
    "word": "へこんでいる",
    "hiragana": "へこんでいる",
    "romaji": "hekondeiru",
    "meaning": "bị lõm",
    "topicId": "other"
  },
  {
    "id": 1432,
    "word": "ねじれている",
    "hiragana": "ねじれている",
    "romaji": "nejireteiru",
    "meaning": "bị xoắn",
    "topicId": "other"
  },
  {
    "id": 1433,
    "word": "欠けている",
    "hiragana": "かけている",
    "romaji": "kaketeiru",
    "meaning": "sứt, mẻ",
    "topicId": "other"
  },
  {
    "id": 1434,
    "word": "ひびが 入っている",
    "hiragana": "ひびが はいっている",
    "romaji": "hibi ga haitteiru",
    "meaning": "bị nứt",
    "topicId": "other"
  },
  {
    "id": 1435,
    "word": "腐っている",
    "hiragana": "くさっている",
    "romaji": "kusatteiru",
    "meaning": "bị thiu, thối",
    "topicId": "other"
  },
  {
    "id": 1436,
    "word": "乾いている",
    "hiragana": "かわいている",
    "romaji": "kawaiteiru",
    "meaning": "khô",
    "topicId": "other"
  },
  {
    "id": 1437,
    "word": "ぬれている",
    "hiragana": "ぬれている",
    "romaji": "nureteiru",
    "meaning": "ướt",
    "topicId": "other"
  },
  {
    "id": 1438,
    "word": "凍っている",
    "hiragana": "こおっている",
    "romaji": "kootteiru",
    "meaning": "bị đóng băng",
    "topicId": "food"
  },
  {
    "id": 1439,
    "word": "貼ります[カレンダーを～]",
    "hiragana": "はります[カレンダーを～]",
    "romaji": "harimasu [karenda- wo~]",
    "meaning": "dán [lịch]",
    "topicId": "other"
  },
  {
    "id": 1440,
    "word": "掛けます[カレンダーを～]",
    "hiragana": "かけます[カレンダーを～]",
    "romaji": "kakemasu [karenda- wo~]",
    "meaning": "treo [lịch]",
    "topicId": "other"
  },
  {
    "id": 1441,
    "word": "飾ります",
    "hiragana": "かざります",
    "romaji": "kazarimasu",
    "meaning": "trang trí",
    "topicId": "other"
  },
  {
    "id": 1442,
    "word": "並べます",
    "hiragana": "ならべます",
    "romaji": "narabemasu",
    "meaning": "xếp thành hàng, sắp xếp",
    "topicId": "other"
  },
  {
    "id": 1443,
    "word": "植えます",
    "hiragana": "うえます",
    "romaji": "uemasu",
    "meaning": "trồng (cây)",
    "topicId": "other"
  },
  {
    "id": 1444,
    "word": "戻します",
    "hiragana": "もどします",
    "romaji": "modoshimasu",
    "meaning": "trả lại, để lại",
    "topicId": "other"
  },
  {
    "id": 1445,
    "word": "まとめます",
    "hiragana": "まとめます",
    "romaji": "matomemasu",
    "meaning": "nhóm lại, tóm tắt",
    "topicId": "other"
  },
  {
    "id": 1446,
    "word": "片づけます",
    "hiragana": "かたづけます",
    "romaji": "katazukemasu",
    "meaning": "dọn dẹp, sắp xếp",
    "topicId": "lifestyle"
  },
  {
    "id": 1447,
    "word": "しまいます",
    "hiragana": "しまいます",
    "romaji": "shimaimasu",
    "meaning": "cất vào, để vào",
    "topicId": "other"
  },
  {
    "id": 1448,
    "word": "決めます",
    "hiragana": "きめます",
    "romaji": "kimemasu",
    "meaning": "quyết định",
    "topicId": "other"
  },
  {
    "id": 1449,
    "word": "知らせます",
    "hiragana": "しらせます",
    "romaji": "shirasemasu",
    "meaning": "thông báo, cho biết",
    "topicId": "lifestyle"
  },
  {
    "id": 1450,
    "word": "相談します",
    "hiragana": "そうだんします",
    "romaji": "soudanshimasu",
    "meaning": "trao đổi, bàn bạc, tư vấn",
    "topicId": "lifestyle"
  },
  {
    "id": 1451,
    "word": "予習します",
    "hiragana": "よしゅうします",
    "romaji": "yoshuushimasu",
    "meaning": "chuẩn bị bài mới",
    "topicId": "other"
  },
  {
    "id": 1452,
    "word": "復習します",
    "hiragana": "ふくしゅうします",
    "romaji": "fukushuushimasu",
    "meaning": "ôn bài cũ",
    "topicId": "other"
  },
  {
    "id": 1453,
    "word": "そのままに します",
    "hiragana": "そのままに します",
    "romaji": "sonomama ni shimasu",
    "meaning": "để nguyên như thế",
    "topicId": "other"
  },
  {
    "id": 1454,
    "word": "お子さん",
    "hiragana": "おこさん",
    "romaji": "okosan",
    "meaning": "con (dùng với người khác)",
    "topicId": "greetings"
  },
  {
    "id": 1455,
    "word": "授業",
    "hiragana": "じゅぎょう",
    "romaji": "jugyou",
    "meaning": "giờ học",
    "topicId": "time_weather"
  },
  {
    "id": 1456,
    "word": "講義",
    "hiragana": "こうぎ",
    "romaji": "kougi",
    "meaning": "bài giảng",
    "topicId": "other"
  },
  {
    "id": 1457,
    "word": "ミーティング",
    "hiragana": "ミーティング",
    "romaji": "mi-tingu",
    "meaning": "cuộc họp",
    "topicId": "work"
  },
  {
    "id": 1458,
    "word": "予定",
    "hiragana": "よてい",
    "romaji": "yotei",
    "meaning": "kế hoạch, dự định",
    "topicId": "health"
  },
  {
    "id": 1459,
    "word": "案内書",
    "hiragana": "あんないしょ",
    "romaji": "annaisho",
    "meaning": "sách hướng dẫn",
    "topicId": "lifestyle"
  },
  {
    "id": 1460,
    "word": "カレンダー",
    "hiragana": "カレンダー",
    "romaji": "karenda-",
    "meaning": "lịch, tờ lịch",
    "topicId": "other"
  },
  {
    "id": 1461,
    "word": "ポスター",
    "hiragana": "ポスター",
    "romaji": "posuta-",
    "meaning": "tờ pa-nô, áp phích, tờ quảng cáo",
    "topicId": "food"
  },
  {
    "id": 1462,
    "word": "ごみ箱",
    "hiragana": "ごみばこ",
    "romaji": "gomibako",
    "meaning": "thùng rác",
    "topicId": "other"
  },
  {
    "id": 1463,
    "word": "人形",
    "hiragana": "にんぎょう",
    "romaji": "ningyou",
    "meaning": "búp bê, con rối",
    "topicId": "other"
  },
  {
    "id": 1464,
    "word": "花瓶",
    "hiragana": "かびん",
    "romaji": "kabin",
    "meaning": "lọ hoa",
    "topicId": "health"
  },
  {
    "id": 1465,
    "word": "鏡",
    "hiragana": "かがみ",
    "romaji": "kagami",
    "meaning": "cái gương",
    "topicId": "food"
  },
  {
    "id": 1466,
    "word": "引き出し",
    "hiragana": "ひきだし",
    "romaji": "hikidashi",
    "meaning": "ngăn kéo",
    "topicId": "food"
  },
  {
    "id": 1467,
    "word": "池",
    "hiragana": "いけ",
    "romaji": "ike",
    "meaning": "cái ao",
    "topicId": "food"
  },
  {
    "id": 1468,
    "word": "元の 所",
    "hiragana": "もとの ところ",
    "romaji": "moto no tokoro",
    "meaning": "chỗ cũ",
    "topicId": "other"
  },
  {
    "id": 1469,
    "word": "周り",
    "hiragana": "まわり",
    "romaji": "mawari",
    "meaning": "xung quanh",
    "topicId": "greetings"
  },
  {
    "id": 1470,
    "word": "真ん中",
    "hiragana": "まんなか",
    "romaji": "mannaka",
    "meaning": "chính giữa",
    "topicId": "other"
  },
  {
    "id": 1471,
    "word": "隅",
    "hiragana": "すみ",
    "romaji": "sumi",
    "meaning": "góc",
    "topicId": "other"
  },
  {
    "id": 1472,
    "word": "～ほど",
    "hiragana": "～ほど",
    "romaji": "~hodo",
    "meaning": "khoảng ~, chừng ~",
    "topicId": "health"
  },
  {
    "id": 1473,
    "word": "予定表",
    "hiragana": "よていひょう",
    "romaji": "yoteihyou",
    "meaning": "lịch trình, thời khóa biểu",
    "topicId": "lifestyle"
  },
  {
    "id": 1474,
    "word": "ご苦労さま",
    "hiragana": "ごくろうさま",
    "romaji": "gokurousama",
    "meaning": "Anh/chị đã làm việc vất vả rồi (dùng với người dưới)",
    "topicId": "greetings"
  },
  {
    "id": 1475,
    "word": "希望",
    "hiragana": "きぼう",
    "romaji": "kibou",
    "meaning": "hi vọng, nguyện vọng",
    "topicId": "other"
  },
  {
    "id": 1476,
    "word": "何か ご希望が ありますか",
    "hiragana": "なにか ごきぼうが ありますか",
    "romaji": "nanika gokibou ga arimasuka",
    "meaning": "Anh/chị có nguyện vọng gì không?",
    "topicId": "greetings"
  },
  {
    "id": 1477,
    "word": "ミュージカル",
    "hiragana": "ミュージカル",
    "romaji": "myu-jikaru",
    "meaning": "ca kịch, nhạc kịch (musical)",
    "topicId": "time_weather"
  },
  {
    "id": 1478,
    "word": "それは いいですね",
    "hiragana": "それは いいですね",
    "romaji": "sore wa ii desu ne",
    "meaning": "Điều đó hay đấy nhỉ.",
    "topicId": "traffic"
  },
  {
    "id": 1479,
    "word": "丸い",
    "hiragana": "まるい",
    "romaji": "marui",
    "meaning": "tròn",
    "topicId": "other"
  },
  {
    "id": 1480,
    "word": "月",
    "hiragana": "つき",
    "romaji": "tsuki",
    "meaning": "trăng, mặt trăng",
    "topicId": "food"
  },
  {
    "id": 1481,
    "word": "ある～",
    "hiragana": "ある～",
    "romaji": "aru~",
    "meaning": "có một ~ nọ, nọ",
    "topicId": "other"
  },
  {
    "id": 1482,
    "word": "地球",
    "hiragana": "ちきゅう",
    "romaji": "chikyuu",
    "meaning": "trái đất",
    "topicId": "other"
  },
  {
    "id": 1483,
    "word": "うれしい",
    "hiragana": "うれしい",
    "romaji": "ureshii",
    "meaning": "vui",
    "topicId": "other"
  },
  {
    "id": 1484,
    "word": "嫌[な]",
    "hiragana": "いや[な]",
    "romaji": "iya [na]",
    "meaning": "chán, ghét",
    "topicId": "other"
  },
  {
    "id": 1485,
    "word": "すると",
    "hiragana": "すると",
    "romaji": "suruto",
    "meaning": "sau đó, thế rồi, thế là",
    "topicId": "other"
  },
  {
    "id": 1486,
    "word": "目が 覚めます",
    "hiragana": "めが さめます",
    "romaji": "me ga samemasu",
    "meaning": "tỉnh giấc",
    "topicId": "other"
  },
  {
    "id": 1487,
    "word": "上から 2段目",
    "hiragana": "うえから 2だんめ",
    "romaji": "ue kara 2 dan me",
    "meaning": "ngăn thứ 2 từ trên xuống",
    "topicId": "food"
  },
  {
    "id": 1488,
    "word": "手前",
    "hiragana": "ともえ",
    "romaji": "temae",
    "meaning": "phía trước mặt (gần mình)",
    "topicId": "food"
  },
  {
    "id": 1489,
    "word": "前から 2列目",
    "hiragana": "まえから 2れつめ",
    "romaji": "mae kara 2 retsu me",
    "meaning": "dãy thứ 2 từ trên xuống",
    "topicId": "food"
  },
  {
    "id": 1490,
    "word": "(机の) 周り",
    "hiragana": "(つくえの) 周り",
    "romaji": "(tsukue no) mawari",
    "meaning": "xung quanh (bàn)",
    "topicId": "greetings"
  },
  {
    "id": 1491,
    "word": "(教室の) 真ん中",
    "hiragana": "(きょうしつの) まんなか",
    "romaji": "(kyoushitsu no) mannaka",
    "meaning": "giữa (lớp học)",
    "topicId": "other"
  },
  {
    "id": 1492,
    "word": "(本の) そば",
    "hiragana": "(ほんの) そば",
    "romaji": "(hon no) soba",
    "meaning": "bên cạnh (quyển sách)",
    "topicId": "lifestyle"
  },
  {
    "id": 1493,
    "word": "(テレビの) 横",
    "hiragana": "(テレビの) よこ",
    "romaji": "(terebi no) yoko",
    "meaning": "bên cạnh (cái tivi)",
    "topicId": "food"
  },
  {
    "id": 1494,
    "word": "斜め前",
    "hiragana": "ななめまえ",
    "romaji": "naname mae",
    "meaning": "chếch sang bên phải/trái phía trước",
    "topicId": "other"
  },
  {
    "id": 1495,
    "word": "斜め後ろ",
    "hiragana": "ななめうしろ",
    "romaji": "naname ushiro",
    "meaning": "chếch sang bên phải/trái phía sau",
    "topicId": "other"
  },
  {
    "id": 1496,
    "word": "～行目",
    "hiragana": "～ぎょうめ",
    "romaji": "~gyou me",
    "meaning": "dòng thứ ~",
    "topicId": "other"
  },
  {
    "id": 1497,
    "word": "～ページ",
    "hiragana": "～ページ",
    "romaji": "~pe-ji",
    "meaning": "trang ~",
    "topicId": "other"
  },
  {
    "id": 1498,
    "word": "始まります[式が～]",
    "hiragana": "はじまります[しきが～]",
    "romaji": "hajimarimasu [shiki ga~]",
    "meaning": "bắt đầu [buổi lễ ~]",
    "topicId": "health"
  },
  {
    "id": 1499,
    "word": "続けます",
    "hiragana": "つづけます",
    "romaji": "tsuzukemasu",
    "meaning": "tiếp tục",
    "topicId": "other"
  },
  {
    "id": 1500,
    "word": "見つけます",
    "hiragana": "みつけます",
    "romaji": "mitsukemasu",
    "meaning": "tìm thấy",
    "topicId": "other"
  },
  {
    "id": 1501,
    "word": "受けます[試験を～]",
    "hiragana": "うけます[しけんを～]",
    "romaji": "ukemasu [shiken wo~]",
    "meaning": "thi [kỳ thi]",
    "topicId": "other"
  },
  {
    "id": 1502,
    "word": "入学します[大学に～]",
    "hiragana": "にゅうがくします[だいがくに～]",
    "romaji": "nyuugakushimasu [daigaku ni~]",
    "meaning": "nhập học, vào [đại học]",
    "topicId": "other"
  },
  {
    "id": 1503,
    "word": "卒業します[大学を～]",
    "hiragana": "そつぎょうします[だいがくを～]",
    "romaji": "sotsugyoushimasu [daigaku wo~]",
    "meaning": "tốt nghiệp [đại học]",
    "topicId": "other"
  },
  {
    "id": 1504,
    "word": "出席します[会議に～]",
    "hiragana": "しゅっせきします[かいぎに～]",
    "romaji": "shussekishimasu [kaigi ni~]",
    "meaning": "tham dự [cuộc họp]",
    "topicId": "work"
  },
  {
    "id": 1505,
    "word": "休憩します",
    "hiragana": "きゅうけいします",
    "romaji": "kyuukeishimasu",
    "meaning": "nghỉ giải lao",
    "topicId": "health"
  },
  {
    "id": 1506,
    "word": "連休",
    "hiragana": "れんきゅう",
    "romaji": "renkyuu",
    "meaning": "ngày nghỉ liền nhau",
    "topicId": "time_weather"
  },
  {
    "id": 1507,
    "word": "作文",
    "hiragana": "さくぶん",
    "romaji": "sakubun",
    "meaning": "bài văn",
    "topicId": "food"
  },
  {
    "id": 1508,
    "word": "展覧会",
    "hiragana": "てんらんかい",
    "romaji": "tenrankai",
    "meaning": "triển lãm",
    "topicId": "other"
  },
  {
    "id": 1509,
    "word": "結婚式",
    "hiragana": "けっこんしき",
    "romaji": "kekkonshiki",
    "meaning": "lễ cưới, đám cưới",
    "topicId": "other"
  },
  {
    "id": 1510,
    "word": "[お]葬式",
    "hiragana": "[お]そうしき",
    "romaji": "[o]soushiki",
    "meaning": "đám tang",
    "topicId": "other"
  },
  {
    "id": 1511,
    "word": "式",
    "hiragana": "しき",
    "romaji": "shiki",
    "meaning": "lễ, đám",
    "topicId": "other"
  },
  {
    "id": 1512,
    "word": "本社",
    "hiragana": "ほんしゃ",
    "romaji": "honsha",
    "meaning": "trụ sở chính",
    "topicId": "other"
  },
  {
    "id": 1513,
    "word": "支店",
    "hiragana": "してん",
    "romaji": "shiten",
    "meaning": "chi nhánh",
    "topicId": "other"
  },
  {
    "id": 1514,
    "word": "温泉",
    "hiragana": "おんせん",
    "romaji": "onsen",
    "meaning": "suối nước nóng",
    "topicId": "food"
  },
  {
    "id": 1515,
    "word": "お客[さん]",
    "hiragana": "おきゃく[さん]",
    "romaji": "okyakusan",
    "meaning": "khách hàng",
    "topicId": "shopping"
  },
  {
    "id": 1516,
    "word": "だれか",
    "hiragana": "だれか",
    "romaji": "dareka",
    "meaning": "ai đó",
    "topicId": "other"
  },
  {
    "id": 1517,
    "word": "～の 方",
    "hiragana": "～の ほう",
    "romaji": "~no hou",
    "meaning": "phía ~, hướng ~",
    "topicId": "other"
  },
  {
    "id": 1518,
    "word": "残ります",
    "hiragana": "のこります",
    "romaji": "nokorimasu",
    "meaning": "ở lại, còn lại",
    "topicId": "other"
  },
  {
    "id": 1519,
    "word": "月に",
    "hiragana": "つきに",
    "romaji": "tsuki ni",
    "meaning": "một tháng",
    "topicId": "time_weather"
  },
  {
    "id": 1520,
    "word": "普通の",
    "hiragana": "ふつうの",
    "romaji": "futsuu no",
    "meaning": "thường, thông thường",
    "topicId": "lifestyle"
  },
  {
    "id": 1521,
    "word": "インターネット",
    "hiragana": "インターネット",
    "romaji": "inta-netto",
    "meaning": "Internet",
    "topicId": "other"
  },
  {
    "id": 1522,
    "word": "村",
    "hiragana": "むら",
    "romaji": "mura",
    "meaning": "làng",
    "topicId": "other"
  },
  {
    "id": 1523,
    "word": "閉じます",
    "hiragana": "とじます",
    "romaji": "tojimasu",
    "meaning": "đóng, nhắm",
    "topicId": "other"
  },
  {
    "id": 1524,
    "word": "都会",
    "hiragana": "とかい",
    "romaji": "tokai",
    "meaning": "thành phố lớn",
    "topicId": "other"
  },
  {
    "id": 1525,
    "word": "世界中",
    "hiragana": "せかいじゅう",
    "romaji": "sekaijuu",
    "meaning": "khắp thế giới",
    "topicId": "other"
  },
  {
    "id": 1526,
    "word": "集まります",
    "hiragana": "あつまります",
    "romaji": "atsumarimasu",
    "meaning": "tập trung",
    "topicId": "other"
  },
  {
    "id": 1527,
    "word": "美しい",
    "hiragana": "うつくしい",
    "romaji": "utsukushii",
    "meaning": "đẹp",
    "topicId": "other"
  },
  {
    "id": 1528,
    "word": "自然",
    "hiragana": "しぜん",
    "romaji": "shizen",
    "meaning": "tự nhiên, thiên nhiên",
    "topicId": "other"
  },
  {
    "id": 1529,
    "word": "すばらしさ",
    "hiragana": "すばらしさ",
    "romaji": "subarashisa",
    "meaning": "tuyệt vời",
    "topicId": "other"
  },
  {
    "id": 1530,
    "word": "気が つきます",
    "hiragana": "きが つきます",
    "romaji": "ki ga tsukimasu",
    "meaning": "nhận ra",
    "topicId": "other"
  },
  {
    "id": 1531,
    "word": "医学",
    "hiragana": "いがく",
    "romaji": "igaku",
    "meaning": "y học",
    "topicId": "other"
  },
  {
    "id": 1532,
    "word": "薬学",
    "hiragana": "やくがく",
    "romaji": "yakugaku",
    "meaning": "dược học",
    "topicId": "other"
  },
  {
    "id": 1533,
    "word": "化学",
    "hiragana": "かがく",
    "romaji": "kagaku",
    "meaning": "hóa học",
    "topicId": "other"
  },
  {
    "id": 1534,
    "word": "生化学",
    "hiragana": "せいかがく",
    "romaji": "seikagaku",
    "meaning": "hóa sinh học",
    "topicId": "other"
  },
  {
    "id": 1535,
    "word": "生物学",
    "hiragana": "せいぶつがく",
    "romaji": "seibutsugaku",
    "meaning": "sinh vật học",
    "topicId": "other"
  },
  {
    "id": 1536,
    "word": "農学",
    "hiragana": "のうがく",
    "romaji": "nougaku",
    "meaning": "nông học",
    "topicId": "other"
  },
  {
    "id": 1537,
    "word": "地学",
    "hiragana": "ちがく",
    "romaji": "chigaku",
    "meaning": "địa chất học",
    "topicId": "other"
  },
  {
    "id": 1538,
    "word": "地理学",
    "hiragana": "ちりがく",
    "romaji": "chirigaku",
    "meaning": "địa lý học",
    "topicId": "other"
  },
  {
    "id": 1539,
    "word": "数学",
    "hiragana": "すうがく",
    "romaji": "suugaku",
    "meaning": "toán học",
    "topicId": "other"
  },
  {
    "id": 1540,
    "word": "物理学",
    "hiragana": "ぶつりがく",
    "romaji": "butsurigaku",
    "meaning": "vật lý học",
    "topicId": "other"
  },
  {
    "id": 1541,
    "word": "工学",
    "hiragana": "こうがく",
    "romaji": "kougaku",
    "meaning": "kỹ thuật",
    "topicId": "time_weather"
  },
  {
    "id": 1542,
    "word": "土木工学",
    "hiragana": "どぼくこうがく",
    "romaji": "dobokukougaku",
    "meaning": "kỹ thuật xây dựng",
    "topicId": "time_weather"
  },
  {
    "id": 1543,
    "word": "電子工学",
    "hiragana": "でんしこうがく",
    "romaji": "denshikougaku",
    "meaning": "kỹ thuật điện tử",
    "topicId": "traffic"
  },
  {
    "id": 1544,
    "word": "電気工学",
    "hiragana": "でんきこうがく",
    "romaji": "denkikougaku",
    "meaning": "kỹ thuật điện",
    "topicId": "traffic"
  },
  {
    "id": 1545,
    "word": "機械工学",
    "hiragana": "きかいこうがく",
    "romaji": "kikaikougaku",
    "meaning": "kỹ thuật cơ khí",
    "topicId": "time_weather"
  },
  {
    "id": 1546,
    "word": "コンピューター工学",
    "hiragana": "コンピューターこうがく",
    "romaji": "konpyu-ta-kougaku",
    "meaning": "khoa học máy tính",
    "topicId": "lifestyle"
  },
  {
    "id": 1547,
    "word": "遺伝子工学",
    "hiragana": "いでんしこうがく",
    "romaji": "idenshikougaku",
    "meaning": "kỹ thuật di truyền",
    "topicId": "time_weather"
  },
  {
    "id": 1548,
    "word": "建築学",
    "hiragana": "けんちくがく",
    "romaji": "kenchikugaku",
    "meaning": "kiến trúc học",
    "topicId": "other"
  },
  {
    "id": 1549,
    "word": "天文学",
    "hiragana": "てんもんがく",
    "romaji": "tenmongaku",
    "meaning": "thiên văn học",
    "topicId": "food"
  },
  {
    "id": 1550,
    "word": "環境科学",
    "hiragana": "かんきょうかがく",
    "romaji": "kankyoukagaku",
    "meaning": "khoa học môi trường",
    "topicId": "health"
  },
  {
    "id": 1551,
    "word": "政治学",
    "hiragana": "せいじがく",
    "romaji": "seijigaku",
    "meaning": "chính trị học",
    "topicId": "other"
  },
  {
    "id": 1552,
    "word": "国際関係学",
    "hiragana": "こくさいかんけいがく",
    "romaji": "kokusaikankeigaku",
    "meaning": "quan hệ quốc tế",
    "topicId": "time_weather"
  },
  {
    "id": 1553,
    "word": "法律学",
    "hiragana": "ほうりつがく",
    "romaji": "houritsugaku",
    "meaning": "luật học",
    "topicId": "other"
  },
  {
    "id": 1554,
    "word": "経済学",
    "hiragana": "けいざいがく",
    "romaji": "keizaigaku",
    "meaning": "kinh tế học",
    "topicId": "other"
  },
  {
    "id": 1555,
    "word": "経営学",
    "hiragana": "けいえいがく",
    "romaji": "keieigaku",
    "meaning": "quản trị kinh doanh",
    "topicId": "greetings"
  },
  {
    "id": 1556,
    "word": "社会学",
    "hiragana": "しゃかいがく",
    "romaji": "shakaigaku",
    "meaning": "xã hội học",
    "topicId": "other"
  },
  {
    "id": 1557,
    "word": "教育学",
    "hiragana": "きょういくがく",
    "romaji": "kyouikugaku",
    "meaning": "giáo dục học",
    "topicId": "shopping"
  },
  {
    "id": 1558,
    "word": "文学",
    "hiragana": "ぶんがく",
    "romaji": "bungaku",
    "meaning": "văn học",
    "topicId": "food"
  },
  {
    "id": 1559,
    "word": "言語学",
    "hiragana": "げんごがく",
    "romaji": "gengogaku",
    "meaning": "ngôn ngữ học",
    "topicId": "other"
  },
  {
    "id": 1560,
    "word": "心理学",
    "hiragana": "しんりがく",
    "romaji": "shinrigaku",
    "meaning": "tâm lý học",
    "topicId": "other"
  },
  {
    "id": 1561,
    "word": "哲学",
    "hiragana": "てつがく",
    "romaji": "tetsugaku",
    "meaning": "triết học",
    "topicId": "other"
  },
  {
    "id": 1562,
    "word": "宗教学",
    "hiragana": "しゅうきょうがく",
    "romaji": "shuukyougaku",
    "meaning": "tôn giáo học",
    "topicId": "shopping"
  },
  {
    "id": 1563,
    "word": "芸術",
    "hiragana": "げいじゅつ",
    "romaji": "geijutsu",
    "meaning": "nghệ thuật",
    "topicId": "time_weather"
  },
  {
    "id": 1564,
    "word": "体育学",
    "hiragana": "たいいくがく",
    "romaji": "taiikugaku",
    "meaning": "thể dục học",
    "topicId": "other"
  },
  {
    "id": 1565,
    "word": "進学します",
    "hiragana": "しんがくします",
    "romaji": "shingakushimasu",
    "meaning": "học lên (trường cao hơn)",
    "topicId": "other"
  },
  {
    "id": 1566,
    "word": "運動します",
    "hiragana": "うんどうします",
    "romaji": "undoushimasu",
    "meaning": "vận động, tập thể thao",
    "topicId": "other"
  },
  {
    "id": 1567,
    "word": "成功します",
    "hiragana": "せいこうします",
    "romaji": "seikoushimasu",
    "meaning": "thành công",
    "topicId": "other"
  },
  {
    "id": 1568,
    "word": "失敗します[試験に～]",
    "hiragana": "しっぱいします[しけんに～]",
    "romaji": "shippaishimasu [shiken ni~]",
    "meaning": "thất bại, trượt [kỳ thi]",
    "topicId": "other"
  },
  {
    "id": 1569,
    "word": "合格します[試験に～]",
    "hiragana": "ごうかくします[しけんに～]",
    "romaji": "goukakushimasu [shiken ni~]",
    "meaning": "đỗ [kỳ thi]",
    "topicId": "other"
  },
  {
    "id": 1570,
    "word": "戻ります",
    "hiragana": "もどります",
    "romaji": "modorimasu",
    "meaning": "quay lại, trở lại",
    "topicId": "time_weather"
  },
  {
    "id": 1571,
    "word": "やみます[雨が～]",
    "hiragana": "やみます[あめが～]",
    "romaji": "yamimasu [ame ga~]",
    "meaning": "tạnh [mưa]",
    "topicId": "time_weather"
  },
  {
    "id": 1572,
    "word": "晴れます",
    "hiragana": "はれます",
    "romaji": "haremasu",
    "meaning": "nắng, quang đãng",
    "topicId": "time_weather"
  },
  {
    "id": 1573,
    "word": "曇ります",
    "hiragana": "くもります",
    "romaji": "kumorimasu",
    "meaning": "có mây, mây mù",
    "topicId": "other"
  },
  {
    "id": 1574,
    "word": "吹きます[風が～]",
    "hiragana": "ふきます[かぜが～]",
    "romaji": "fukimasu [kaze ga~]",
    "meaning": "thổi [gió]",
    "topicId": "time_weather"
  },
  {
    "id": 1575,
    "word": "治ります[病気が～]",
    "hiragana": "なおります[びょうきが～]",
    "romaji": "naorimasu [byouki ga~]",
    "meaning": "khỏi [bệnh]",
    "topicId": "health"
  },
  {
    "id": 1576,
    "word": "直ります[故障が～]",
    "hiragana": "なおります[こしょうが～]",
    "romaji": "naorimasu [koshou ga~]",
    "meaning": "được sửa [chỗ hỏng]",
    "topicId": "other"
  },
  {
    "id": 1577,
    "word": "続きます[熱が～]",
    "hiragana": "つづきます[ねつが～]",
    "romaji": "tsuzukimasu [netsu ga~]",
    "meaning": "tiếp tục [sốt]",
    "topicId": "health"
  },
  {
    "id": 1578,
    "word": "ひきます[風邪を～]",
    "hiragana": "ひきます[かぜを～]",
    "romaji": "hikimasu [kaze wo~]",
    "meaning": "bị [cảm]",
    "topicId": "health"
  },
  {
    "id": 1579,
    "word": "冷やします",
    "hiragana": "ひやします",
    "romaji": "hiyashimasu",
    "meaning": "làm lạnh",
    "topicId": "time_weather"
  },
  {
    "id": 1580,
    "word": "心配[な]",
    "hiragana": "しんぱい[な]",
    "romaji": "shinpai [na]",
    "meaning": "lo lắng",
    "topicId": "other"
  },
  {
    "id": 1581,
    "word": "十分[な]",
    "hiragana": "じゅうぶん[な]",
    "romaji": "juubun [na]",
    "meaning": "đủ",
    "topicId": "other"
  },
  {
    "id": 1582,
    "word": "おかしい",
    "hiragana": "おかしい",
    "romaji": "okashii",
    "meaning": "kỳ lạ, thú vị, buồn cười",
    "topicId": "other"
  },
  {
    "id": 1583,
    "word": "うるさい",
    "hiragana": "うるさい",
    "romaji": "urusai",
    "meaning": "ồn ào, (âm thanh) to",
    "topicId": "greetings"
  },
  {
    "id": 1584,
    "word": "やけど",
    "hiragana": "やけど",
    "romaji": "yakedo",
    "meaning": "bỏng (～をします：bị bỏng)",
    "topicId": "other"
  },
  {
    "id": 1585,
    "word": "けが",
    "hiragana": "けが",
    "romaji": "kega",
    "meaning": "thương (～をします：bị thương)",
    "topicId": "lifestyle"
  },
  {
    "id": 1586,
    "word": "せき",
    "hiragana": "せき",
    "romaji": "seki",
    "meaning": "ho (～がでます：bị ho)",
    "topicId": "health"
  },
  {
    "id": 1587,
    "word": "インフルエンザ",
    "hiragana": "インフルエンザ",
    "romaji": "infuruenza",
    "meaning": "cúm dịch",
    "topicId": "other"
  },
  {
    "id": 1588,
    "word": "太陽",
    "hiragana": "たいよう",
    "romaji": "taiyou",
    "meaning": "mặt trời",
    "topicId": "other"
  },
  {
    "id": 1589,
    "word": "星",
    "hiragana": "ほし",
    "romaji": "hoshi",
    "meaning": "sao, ngôi sao",
    "topicId": "other"
  },
  {
    "id": 1590,
    "word": "北",
    "hiragana": "きた",
    "romaji": "kita",
    "meaning": "phía bắc",
    "topicId": "other"
  },
  {
    "id": 1591,
    "word": "南",
    "hiragana": "みなみ",
    "romaji": "minami",
    "meaning": "phía nam",
    "topicId": "other"
  },
  {
    "id": 1592,
    "word": "東",
    "hiragana": "ひがし",
    "romaji": "higashi",
    "meaning": "phía đông",
    "topicId": "time_weather"
  },
  {
    "id": 1593,
    "word": "水道",
    "hiragana": "すいどう",
    "romaji": "suidou",
    "meaning": "nước máy, đường nước",
    "topicId": "food"
  },
  {
    "id": 1594,
    "word": "エンジン",
    "hiragana": "エンジン",
    "romaji": "enjin",
    "meaning": "động cơ",
    "topicId": "other"
  },
  {
    "id": 1595,
    "word": "チーム",
    "hiragana": "チーム",
    "romaji": "chi-mu",
    "meaning": "đội",
    "topicId": "other"
  },
  {
    "id": 1596,
    "word": "今夜",
    "hiragana": "こんや",
    "romaji": "konya",
    "meaning": "tối nay, đêm nay",
    "topicId": "food"
  },
  {
    "id": 1597,
    "word": "夕方",
    "hiragana": "ゆうがた",
    "romaji": "yuugata",
    "meaning": "chiều tối",
    "topicId": "food"
  },
  {
    "id": 1598,
    "word": "遅く",
    "hiragana": "おそく",
    "romaji": "osoku",
    "meaning": "muộn, khuya",
    "topicId": "other"
  },
  {
    "id": 1599,
    "word": "こんなに",
    "hiragana": "こんなに",
    "romaji": "konna ni",
    "meaning": "như thế này",
    "topicId": "other"
  },
  {
    "id": 1600,
    "word": "あんなに",
    "hiragana": "あんなに",
    "romaji": "anna ni",
    "meaning": "như thế kia (về vấn đề không quan hệ với người nói và người nghe)",
    "topicId": "greetings"
  },
  {
    "id": 1601,
    "word": "もしかしたら",
    "hiragana": "もしかしたら",
    "romaji": "moshikashitara",
    "meaning": "có thể, biết đâu là, có lẽ",
    "topicId": "other"
  },
  {
    "id": 1602,
    "word": "それは いけませんね",
    "hiragana": "それは いけませんね",
    "romaji": "sore wa ikemasen ne",
    "meaning": "Thế thì thật không tốt. (câu nói thể hiện sự chia sẻ)",
    "topicId": "other"
  },
  {
    "id": 1603,
    "word": "元気",
    "hiragana": "げんき",
    "romaji": "genki",
    "meaning": "khỏe, tinh thần",
    "topicId": "health"
  },
  {
    "id": 1604,
    "word": "胃",
    "hiragana": "い",
    "romaji": "i",
    "meaning": "dạ dày",
    "topicId": "other"
  },
  {
    "id": 1605,
    "word": "働きすぎ",
    "hiragana": "はたらきすぎ",
    "romaji": "hatarakisugi",
    "meaning": "làm việc quá sức",
    "topicId": "work"
  },
  {
    "id": 1606,
    "word": "ストレス",
    "hiragana": "ストレス",
    "romaji": "sutoresu",
    "meaning": "stress, căng thẳng",
    "topicId": "food"
  },
  {
    "id": 1607,
    "word": "無理を します",
    "hiragana": "むりを します",
    "romaji": "muri wo shimasu",
    "meaning": "làm quá sức",
    "topicId": "work"
  },
  {
    "id": 1608,
    "word": "ゆっくり します",
    "hiragana": "ゆっくり します",
    "romaji": "yukkuri shimasu",
    "meaning": "nghỉ ngơi, thư thả",
    "topicId": "lifestyle"
  },
  {
    "id": 1609,
    "word": "星占い",
    "hiragana": "ほしうらない",
    "romaji": "hoshiuranai",
    "meaning": "bói sao",
    "topicId": "other"
  },
  {
    "id": 1610,
    "word": "牡牛座",
    "hiragana": "おうしざ",
    "romaji": "oushiza",
    "meaning": "Kim Ngưu",
    "topicId": "other"
  },
  {
    "id": 1611,
    "word": "困ります",
    "hiragana": "こまります",
    "romaji": "komarimasu",
    "meaning": "rắc rối, khó xử",
    "topicId": "other"
  },
  {
    "id": 1612,
    "word": "宝くじ",
    "hiragana": "たからくじ",
    "romaji": "takarakuji",
    "meaning": "xổ số",
    "topicId": "other"
  },
  {
    "id": 1613,
    "word": "当たります[宝くじが～]",
    "hiragana": "あたります[たからくじが～]",
    "romaji": "atarimasu [takarakuji ga~]",
    "meaning": "trúng [xổ số]",
    "topicId": "other"
  },
  {
    "id": 1614,
    "word": "健康",
    "hiragana": "けんこう",
    "romaji": "kenkou",
    "meaning": "sức khỏe",
    "topicId": "health"
  },
  {
    "id": 1615,
    "word": "恋愛",
    "hiragana": "れんあい",
    "romaji": "renai",
    "meaning": "tình yêu",
    "topicId": "other"
  },
  {
    "id": 1616,
    "word": "恋人",
    "hiragana": "こいびと",
    "romaji": "koibito",
    "meaning": "người yêu",
    "topicId": "greetings"
  },
  {
    "id": 1617,
    "word": "[お]金持ち",
    "hiragana": "[お]かねもち",
    "romaji": "[o]kanemochi",
    "meaning": "người giàu",
    "topicId": "greetings"
  },
  {
    "id": 1618,
    "word": "雨が 降ります",
    "hiragana": "あめが ふります",
    "romaji": "ame ga furimasu",
    "meaning": "mưa rơi",
    "topicId": "time_weather"
  },
  {
    "id": 1619,
    "word": "雪が 降ります",
    "hiragana": "ゆきが ふります",
    "romaji": "yuki ga furimasu",
    "meaning": "tuyết rơi",
    "topicId": "time_weather"
  },
  {
    "id": 1620,
    "word": "晴れのち曇り",
    "hiragana": "はれのちくもり",
    "romaji": "hare nochi kumori",
    "meaning": "nắng sau đó chuyển mây",
    "topicId": "time_weather"
  },
  {
    "id": 1621,
    "word": "晴れ時々雨",
    "hiragana": "はれときどきあめ",
    "romaji": "hare tokidoki ame",
    "meaning": "nắng thỉnh thoảng có mưa",
    "topicId": "time_weather"
  },
  {
    "id": 1622,
    "word": "晴れ所によって雨",
    "hiragana": "はれところによってあめ",
    "romaji": "hare tokoro ni yotte ame",
    "meaning": "nắng, có nơi có mưa",
    "topicId": "time_weather"
  },
  {
    "id": 1623,
    "word": "降水確率",
    "hiragana": "こうすいかくりつ",
    "romaji": "kousuikakuritsu",
    "meaning": "xác suất mưa",
    "topicId": "time_weather"
  },
  {
    "id": 1624,
    "word": "最高気温",
    "hiragana": "さいこうきおん",
    "romaji": "saikoukion",
    "meaning": "nhiệt độ cao nhất",
    "topicId": "other"
  },
  {
    "id": 1625,
    "word": "最低気温",
    "hiragana": "さいていきおん",
    "romaji": "saiteikion",
    "meaning": "nhiệt độ thấp nhất",
    "topicId": "other"
  },
  {
    "id": 1626,
    "word": "～％",
    "hiragana": "～パーセント",
    "romaji": "~pa-sento",
    "meaning": "~ phần trăm",
    "topicId": "other"
  },
  {
    "id": 1627,
    "word": "～度",
    "hiragana": "～ど",
    "romaji": "~do",
    "meaning": "~ độ",
    "topicId": "other"
  },
  {
    "id": 1628,
    "word": "地方",
    "hiragana": "ちほう",
    "romaji": "chihou",
    "meaning": "địa phương, vùng",
    "topicId": "other"
  },
  {
    "id": 1629,
    "word": "梅雨",
    "hiragana": "つゆ",
    "romaji": "tsuyu",
    "meaning": "mùa mưa",
    "topicId": "time_weather"
  },
  {
    "id": 1630,
    "word": "にわか雨",
    "hiragana": "にわかあめ",
    "romaji": "niwakaame",
    "meaning": "mưa rào",
    "topicId": "time_weather"
  },
  {
    "id": 1631,
    "word": "雷",
    "hiragana": "かみなり",
    "romaji": "kaminari",
    "meaning": "sấm",
    "topicId": "time_weather"
  },
  {
    "id": 1632,
    "word": "台風",
    "hiragana": "たいふう",
    "romaji": "taifuu",
    "meaning": "bão",
    "topicId": "other"
  },
  {
    "id": 1633,
    "word": "虹",
    "hiragana": "にじ",
    "romaji": "niji",
    "meaning": "cầu vồng",
    "topicId": "other"
  },
  {
    "id": 1634,
    "word": "雲",
    "hiragana": "くも",
    "romaji": "kumo",
    "meaning": "mây",
    "topicId": "other"
  },
  {
    "id": 1635,
    "word": "湿度",
    "hiragana": "しつど",
    "romaji": "shitsudo",
    "meaning": "độ ẩm",
    "topicId": "other"
  },
  {
    "id": 1636,
    "word": "蒸し暑い",
    "hiragana": "むしあつい",
    "romaji": "mushiatsui",
    "meaning": "oi bức",
    "topicId": "other"
  },
  {
    "id": 1637,
    "word": "さわやか[な]",
    "hiragana": "さわやか[な]",
    "romaji": "sawayaka [na]",
    "meaning": "thoáng đãng, sảng khoái",
    "topicId": "health"
  },
  {
    "id": 1638,
    "word": "逃げます",
    "hiragana": "にげます",
    "romaji": "nigemasu",
    "meaning": "chạy trốn, bỏ chạy",
    "topicId": "time_weather"
  },
  {
    "id": 1639,
    "word": "騒ぎます",
    "hiragana": "さわぎます",
    "romaji": "sawagimasu",
    "meaning": "làm ồn, làm rùm beng",
    "topicId": "work"
  },
  {
    "id": 1640,
    "word": "あきらめます",
    "hiragana": "あきらめます",
    "romaji": "akiramemasu",
    "meaning": "từ bỏ, đầu hàng",
    "topicId": "health"
  },
  {
    "id": 1641,
    "word": "投げます",
    "hiragana": "なげます",
    "romaji": "nagemasu",
    "meaning": "ném",
    "topicId": "other"
  },
  {
    "id": 1642,
    "word": "守ります",
    "hiragana": "まもります",
    "romaji": "mamorimasu",
    "meaning": "bảo vệ, tuân thủ, giữ",
    "topicId": "other"
  },
  {
    "id": 1643,
    "word": "下げます",
    "hiragana": "さげます",
    "romaji": "sagemasu",
    "meaning": "hạ xuống, giảm xuống",
    "topicId": "food"
  },
  {
    "id": 1644,
    "word": "伝えます",
    "hiragana": "つたえます",
    "romaji": "tsutaemasu",
    "meaning": "truyền đạt, nhắn lại",
    "topicId": "other"
  },
  {
    "id": 1645,
    "word": "注意します[車に～]",
    "hiragana": "ちゅういします[くるまに～]",
    "romaji": "chuuishimasu [kuruma ni~]",
    "meaning": "chú ý [xe ô tô]",
    "topicId": "traffic"
  },
  {
    "id": 1646,
    "word": "外します[席を～]",
    "hiragana": "はずします[せきを～]",
    "romaji": "hazushimasu [seki wo~]",
    "meaning": "rời, không có ở [chỗ ngồi]",
    "topicId": "other"
  },
  {
    "id": 1647,
    "word": "だめ[な]",
    "hiragana": "だめ[な]",
    "romaji": "dame [na]",
    "meaning": "không được, không thể",
    "topicId": "other"
  },
  {
    "id": 1648,
    "word": "ファイト",
    "hiragana": "ファイト",
    "romaji": "faito",
    "meaning": "cố lên, chiến đấu (fight)",
    "topicId": "other"
  },
  {
    "id": 1649,
    "word": "マーク",
    "hiragana": "マーク",
    "romaji": "ma-ku",
    "meaning": "ký hiệu (mark)",
    "topicId": "other"
  },
  {
    "id": 1650,
    "word": "ボール",
    "hiragana": "ボール",
    "romaji": "bo-ru",
    "meaning": "bóng (ball)",
    "topicId": "other"
  },
  {
    "id": 1651,
    "word": "洗濯機",
    "hiragana": "せんたくき",
    "romaji": "sentakuki",
    "meaning": "máy giặt",
    "topicId": "lifestyle"
  },
  {
    "id": 1652,
    "word": "～機",
    "hiragana": "～き",
    "romaji": "~ki",
    "meaning": "máy ~",
    "topicId": "lifestyle"
  },
  {
    "id": 1653,
    "word": "規則",
    "hiragana": "きそく",
    "romaji": "kisoku",
    "meaning": "quy tắc, kỷ luật",
    "topicId": "other"
  },
  {
    "id": 1654,
    "word": "使用禁止",
    "hiragana": "しようきんし",
    "romaji": "shiyoukinshi",
    "meaning": "cấm sử dụng",
    "topicId": "time_weather"
  },
  {
    "id": 1655,
    "word": "立入禁止",
    "hiragana": "たちいりきんし",
    "romaji": "tachiirikinshi",
    "meaning": "cấm vào",
    "topicId": "time_weather"
  },
  {
    "id": 1656,
    "word": "非常口",
    "hiragana": "ひじょうぐち",
    "romaji": "hijouguchi",
    "meaning": "cửa thoát hiểm",
    "topicId": "lifestyle"
  },
  {
    "id": 1657,
    "word": "本日休業",
    "hiragana": "ほんじつきゅうぎょう",
    "romaji": "honjitsukyuugyou",
    "meaning": "hôm nay đóng cửa, nghỉ bán",
    "topicId": "shopping"
  },
  {
    "id": 1658,
    "word": "営業中",
    "hiragana": "えいぎょうちゅう",
    "romaji": "eigyouchuu",
    "meaning": "đang mở cửa",
    "topicId": "lifestyle"
  },
  {
    "id": 1659,
    "word": "使用中",
    "hiragana": "しようちゅう",
    "romaji": "shiyouchuu",
    "meaning": "đang sử dụng",
    "topicId": "other"
  },
  {
    "id": 1660,
    "word": "～中",
    "hiragana": "～ちゅう",
    "romaji": "~chuu",
    "meaning": "đang ~",
    "topicId": "other"
  },
  {
    "id": 1661,
    "word": "どういう～",
    "hiragana": "どういう～",
    "romaji": "douiu ~",
    "meaning": "~ như thế nào",
    "topicId": "other"
  },
  {
    "id": 1662,
    "word": "あと～",
    "hiragana": "あと～",
    "romaji": "ato ~",
    "meaning": "còn ~",
    "topicId": "other"
  },
  {
    "id": 1663,
    "word": "駐車違反",
    "hiragana": "ちゅうしゃいはん",
    "romaji": "chuushaihan",
    "meaning": "vi phạm đỗ xe",
    "topicId": "traffic"
  },
  {
    "id": 1664,
    "word": "そりゃあ",
    "hiragana": "そりゃあ",
    "romaji": "soryaa",
    "meaning": "thế thì, quả là",
    "topicId": "food"
  },
  {
    "id": 1665,
    "word": "～以内",
    "hiragana": "～いない",
    "romaji": "~inai",
    "meaning": "trong vòng ~",
    "topicId": "other"
  },
  {
    "id": 1666,
    "word": "警察",
    "hiragana": "けいさつ",
    "romaji": "keisatsu",
    "meaning": "cảnh sát",
    "topicId": "travel"
  },
  {
    "id": 1667,
    "word": "罰金",
    "hiragana": "ばっきん",
    "romaji": "bakkin",
    "meaning": "tiền phạt",
    "topicId": "shopping"
  },
  {
    "id": 1668,
    "word": "電報",
    "hiragana": "でんぽう",
    "romaji": "denpou",
    "meaning": "bức điện, điện báo",
    "topicId": "traffic"
  },
  {
    "id": 1669,
    "word": "人々",
    "hiragana": "ひとびと",
    "romaji": "hitobito",
    "meaning": "mọi người",
    "topicId": "other"
  },
  {
    "id": 1670,
    "word": "急用",
    "hiragana": "きゅうよう",
    "romaji": "kyuuyou",
    "meaning": "việc gấp",
    "topicId": "work"
  },
  {
    "id": 1671,
    "word": "打ちます[電報を～]",
    "hiragana": "うちます[でんぽうを～]",
    "romaji": "uchimasu [denpou wo~]",
    "meaning": "gửi [bức điện]",
    "topicId": "traffic"
  },
  {
    "id": 1672,
    "word": "電報代",
    "hiragana": "でんぽうだい",
    "romaji": "denpoudai",
    "meaning": "tiền cước điện báo",
    "topicId": "shopping"
  },
  {
    "id": 1673,
    "word": "できるだけ",
    "hiragana": "できるだけ",
    "romaji": "dekirudake",
    "meaning": "cố gắng hết sức",
    "topicId": "other"
  },
  {
    "id": 1674,
    "word": "短く",
    "hiragana": "みじかく",
    "romaji": "mijikaku",
    "meaning": "ngắn gọn",
    "topicId": "other"
  },
  {
    "id": 1675,
    "word": "危篤",
    "hiragana": "キトク",
    "romaji": "kitoku",
    "meaning": "tình trạng nguy kịch",
    "topicId": "other"
  },
  {
    "id": 1676,
    "word": "重い 病気",
    "hiragana": "おもい びょうき",
    "romaji": "omoi byouki",
    "meaning": "bệnh nặng",
    "topicId": "health"
  },
  {
    "id": 1677,
    "word": "明日",
    "hiragana": "あす",
    "romaji": "asu",
    "meaning": "ngày mai",
    "topicId": "time_weather"
  },
  {
    "id": 1678,
    "word": "留守",
    "hiragana": "るす",
    "romaji": "rusu",
    "meaning": "vắng nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 1679,
    "word": "留守番",
    "hiragana": "るすばん",
    "romaji": "rusuban",
    "meaning": "trông nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 1680,
    "word": "[お]祝い",
    "hiragana": "[お]いわい",
    "romaji": "[o]iwai",
    "meaning": "chúc mừng, quà mừng (～をします：tổ chức tiệc mừng)",
    "topicId": "travel"
  },
  {
    "id": 1681,
    "word": "亡くなります",
    "hiragana": "なくなります",
    "romaji": "nakunarimasu",
    "meaning": "mất, chết",
    "topicId": "other"
  },
  {
    "id": 1682,
    "word": "悲しみ",
    "hiragana": "かなしみ",
    "romaji": "kanashimi",
    "meaning": "nỗi buồn",
    "topicId": "other"
  },
  {
    "id": 1683,
    "word": "利用します",
    "hiragana": "りようします",
    "romaji": "riyoushimasu",
    "meaning": "sử dụng, tận dụng",
    "topicId": "other"
  },
  {
    "id": 1684,
    "word": "準備中",
    "hiragana": "じゅんびちゅう",
    "romaji": "junbichuu",
    "meaning": "đang chuẩn bị",
    "topicId": "other"
  },
  {
    "id": 1685,
    "word": "閉店",
    "hiragana": "へいてん",
    "romaji": "heiten",
    "meaning": "đóng cửa tiệm",
    "topicId": "lifestyle"
  },
  {
    "id": 1686,
    "word": "定休日",
    "hiragana": "ていきゅうび",
    "romaji": "teikyuubi",
    "meaning": "ngày nghỉ định kỳ",
    "topicId": "time_weather"
  },
  {
    "id": 1687,
    "word": "化粧室",
    "hiragana": "けしょうしつ",
    "romaji": "keshoushitsu",
    "meaning": "nhà vệ sinh",
    "topicId": "lifestyle"
  },
  {
    "id": 1688,
    "word": "禁煙席",
    "hiragana": "きんえんせき",
    "romaji": "kinenseki",
    "meaning": "ghế không hút thuốc",
    "topicId": "lifestyle"
  },
  {
    "id": 1689,
    "word": "予約席",
    "hiragana": "よやくせき",
    "romaji": "yoyakuseki",
    "meaning": "ghế đặt trước",
    "topicId": "lifestyle"
  },
  {
    "id": 1690,
    "word": "火気厳禁",
    "hiragana": "かきげんきん",
    "romaji": "kakigenkin",
    "meaning": "cấm lửa",
    "topicId": "time_weather"
  },
  {
    "id": 1691,
    "word": "割れ物注意",
    "hiragana": "われものちゅうい",
    "romaji": "waremonochuui",
    "meaning": "chú ý đồ dễ vỡ",
    "topicId": "lifestyle"
  },
  {
    "id": 1692,
    "word": "運転初心者注意",
    "hiragana": "うんてんしょしんしゃちゅうい",
    "romaji": "untenshoshinshachuui",
    "meaning": "chú ý lái xe mới",
    "topicId": "traffic"
  },
  {
    "id": 1693,
    "word": "工事中",
    "hiragana": "こうじちゅう",
    "romaji": "koujichuu",
    "meaning": "đang thi công",
    "topicId": "other"
  },
  {
    "id": 1694,
    "word": "塩素系漂白剤不可",
    "hiragana": "えんそけいひょうはくざいふか",
    "romaji": "ensokeihyouhakuzaihuka",
    "meaning": "không dùng thuốc tẩy clo",
    "topicId": "time_weather"
  },
  {
    "id": 1695,
    "word": "手洗い",
    "hiragana": "てあらい",
    "romaji": "tearai",
    "meaning": "giặt tay",
    "topicId": "lifestyle"
  },
  {
    "id": 1696,
    "word": "アイロン（低温）",
    "hiragana": "アイロン（ていおん）",
    "romaji": "airon (teion)",
    "meaning": "là ủi ở nhiệt độ thấp",
    "topicId": "other"
  },
  {
    "id": 1697,
    "word": "磨きます[歯を～]",
    "hiragana": "みがきます[はを～]",
    "romaji": "migakimasu [ha wo~]",
    "meaning": "đánh [răng], mài, đánh bóng",
    "topicId": "food"
  },
  {
    "id": 1698,
    "word": "組み立てます",
    "hiragana": "くみたてます",
    "romaji": "kumitatemasu",
    "meaning": "lắp ráp",
    "topicId": "other"
  },
  {
    "id": 1699,
    "word": "気がつきます[忘れ物に～]",
    "hiragana": "きがつきます[わすれものに～]",
    "romaji": "kigatsukimasu [wasuremono ni~]",
    "meaning": "nhận ra, để ý đến [đồ bỏ quên]",
    "topicId": "greetings"
  },
  {
    "id": 1700,
    "word": "つけます[しょうゆを～]",
    "hiragana": "つけます[しょうゆを～]",
    "romaji": "tsukemasu [shouyu wo~]",
    "meaning": "chấm [nước tương]",
    "topicId": "food"
  },
  {
    "id": 1701,
    "word": "見つかります[かぎが～]",
    "hiragana": "みつかります[かぎが～]",
    "romaji": "mitsukarimasu [kagi ga~]",
    "meaning": "được tìm thấy [chìa khóa]",
    "topicId": "lifestyle"
  },
  {
    "id": 1702,
    "word": "します[ネクタイを～]",
    "hiragana": "します[ネクタイを～]",
    "romaji": "shimasu [nekutai wo~]",
    "meaning": "đeo, thắt [cà vạt]",
    "topicId": "other"
  },
  {
    "id": 1703,
    "word": "質問します",
    "hiragana": "しつもんします",
    "romaji": "shitsumonshimasu",
    "meaning": "hỏi, đặt câu hỏi",
    "topicId": "other"
  },
  {
    "id": 1704,
    "word": "細い",
    "hiragana": "ほそい",
    "romaji": "hosoi",
    "meaning": "gầy, hẹp, thon",
    "topicId": "health"
  },
  {
    "id": 1705,
    "word": "太い",
    "hiragana": "ふとい",
    "romaji": "futoi",
    "meaning": "béo, to, dày",
    "topicId": "other"
  },
  {
    "id": 1706,
    "word": "スポーツクラブ",
    "hiragana": "スポーツクラブ",
    "romaji": "supo-tsukurabu",
    "meaning": "câu lạc bộ thể thao",
    "topicId": "other"
  },
  {
    "id": 1707,
    "word": "キー",
    "hiragana": "キー",
    "romaji": "ki-",
    "meaning": "chìa khóa",
    "topicId": "lifestyle"
  },
  {
    "id": 1708,
    "word": "シートベルト",
    "hiragana": "シートベルト",
    "romaji": "shi-toberuto",
    "meaning": "dây an toàn",
    "topicId": "other"
  },
  {
    "id": 1709,
    "word": "説明書",
    "hiragana": "せつめいしょ",
    "romaji": "setsumeisho",
    "meaning": "quyển hướng dẫn",
    "topicId": "other"
  },
  {
    "id": 1710,
    "word": "図",
    "hiragana": "ず",
    "romaji": "zu",
    "meaning": "hình vẽ, minh họa",
    "topicId": "anime"
  },
  {
    "id": 1711,
    "word": "矢印",
    "hiragana": "やじるし",
    "romaji": "yajirushi",
    "meaning": "dấu mũi tên",
    "topicId": "other"
  },
  {
    "id": 1712,
    "word": "黒",
    "hiragana": "くろ",
    "romaji": "kuro",
    "meaning": "màu đen",
    "topicId": "other"
  },
  {
    "id": 1713,
    "word": "白",
    "hiragana": "しろ",
    "romaji": "shiro",
    "meaning": "màu trắng",
    "topicId": "other"
  },
  {
    "id": 1714,
    "word": "赤",
    "hiragana": "あか",
    "romaji": "aka",
    "meaning": "màu đỏ",
    "topicId": "other"
  },
  {
    "id": 1715,
    "word": "青",
    "hiragana": "あお",
    "romaji": "ao",
    "meaning": "màu xanh dương",
    "topicId": "greetings"
  },
  {
    "id": 1716,
    "word": "紺",
    "hiragana": "こん",
    "romaji": "kon",
    "meaning": "màu xanh lam",
    "topicId": "greetings"
  },
  {
    "id": 1717,
    "word": "黄色",
    "hiragana": "きいろ",
    "romaji": "kiiro",
    "meaning": "màu vàng",
    "topicId": "other"
  },
  {
    "id": 1718,
    "word": "茶色",
    "hiragana": "ちゃいろ",
    "romaji": "chairo",
    "meaning": "màu nâu",
    "topicId": "other"
  },
  {
    "id": 1719,
    "word": "しょうゆ",
    "hiragana": "しょうゆ",
    "romaji": "shouyu",
    "meaning": "nước tương, xì dầu",
    "topicId": "food"
  },
  {
    "id": 1720,
    "word": "ソース",
    "hiragana": "ソース",
    "romaji": "so-su",
    "meaning": "nước sốt",
    "topicId": "food"
  },
  {
    "id": 1721,
    "word": "～か～",
    "hiragana": "～か～",
    "romaji": "~ka~",
    "meaning": "~ hay là ~",
    "topicId": "other"
  },
  {
    "id": 1722,
    "word": "ゆうべ",
    "hiragana": "ゆうべ",
    "romaji": "yuube",
    "meaning": "tối qua, đêm qua",
    "topicId": "food"
  },
  {
    "id": 1723,
    "word": "さっき",
    "hiragana": "さっき",
    "romaji": "sakki",
    "meaning": "vừa rồi, vừa lúc nãy",
    "topicId": "other"
  },
  {
    "id": 1724,
    "word": "お茶を たてます",
    "hiragana": "おちゃを たてます",
    "romaji": "ocha wo tatemasu",
    "meaning": "pha trà (trà đạo)",
    "topicId": "food"
  },
  {
    "id": 1725,
    "word": "先に",
    "hiragana": "さきに",
    "romaji": "sakini",
    "meaning": "trước",
    "topicId": "other"
  },
  {
    "id": 1726,
    "word": "載せます",
    "hiragana": "のせます",
    "romaji": "nosemasu",
    "meaning": "đặt lên, để lên",
    "topicId": "other"
  },
  {
    "id": 1727,
    "word": "これで いいですか",
    "hiragana": "これで いいですか",
    "romaji": "korede ii desu ka",
    "meaning": "thế này có được không?",
    "topicId": "other"
  },
  {
    "id": 1728,
    "word": "苦い",
    "hiragana": "にがい",
    "romaji": "nigai",
    "meaning": "đắng",
    "topicId": "other"
  },
  {
    "id": 1729,
    "word": "親子どんぶり",
    "hiragana": "おやこどんぶり",
    "romaji": "oyakodonburi",
    "meaning": "món Oyakodon (cơm bát tô có thịt gà xào trứng ở trên)",
    "topicId": "food"
  },
  {
    "id": 1730,
    "word": "材料",
    "hiragana": "ざいりょう",
    "romaji": "zairyou",
    "meaning": "nguyên liệu",
    "topicId": "other"
  },
  {
    "id": 1731,
    "word": "分",
    "hiragana": "ぶん",
    "romaji": "分",
    "meaning": "suất, phần",
    "topicId": "other"
  },
  {
    "id": 1732,
    "word": "鳥肉",
    "hiragana": "とりにく",
    "romaji": "toriniku",
    "meaning": "thịt gà",
    "topicId": "food"
  },
  {
    "id": 1733,
    "word": "～グラム",
    "hiragana": "～グラム",
    "romaji": "~guramu",
    "meaning": "~ gam",
    "topicId": "traffic"
  },
  {
    "id": 1734,
    "word": "～個",
    "hiragana": "～こ",
    "romaji": "~ko",
    "meaning": "~ cái, quả (đếm vật nhỏ)",
    "topicId": "food"
  },
  {
    "id": 1735,
    "word": "たまねぎ",
    "hiragana": "たまねぎ",
    "romaji": "tamanegi",
    "meaning": "hành tây",
    "topicId": "other"
  },
  {
    "id": 1736,
    "word": "4分の1",
    "hiragana": "4ぶんの1",
    "romaji": "4 bun no 1",
    "meaning": "1/4",
    "topicId": "other"
  },
  {
    "id": 1737,
    "word": "調味料",
    "hiragana": "ちょうみりょう",
    "romaji": "choumiryou",
    "meaning": "gia vị",
    "topicId": "other"
  },
  {
    "id": 1738,
    "word": "なべ",
    "hiragana": "なべ",
    "romaji": "nabe",
    "meaning": "nồi",
    "topicId": "other"
  },
  {
    "id": 1739,
    "word": "火に かけます",
    "hiragana": "ひに かけます",
    "romaji": "hi ni kakemasu",
    "meaning": "bắc lên bếp",
    "topicId": "other"
  },
  {
    "id": 1740,
    "word": "煮ます",
    "hiragana": "にます",
    "romaji": "nimasu",
    "meaning": "nấu",
    "topicId": "other"
  },
  {
    "id": 1741,
    "word": "煮えます",
    "hiragana": "にえます",
    "romaji": "niemasu",
    "meaning": "chín, được nấu",
    "topicId": "other"
  },
  {
    "id": 1742,
    "word": "どんぶり",
    "hiragana": "どんぶり",
    "romaji": "donburi",
    "meaning": "bát tô",
    "topicId": "food"
  },
  {
    "id": 1743,
    "word": "煮る",
    "hiragana": "にる",
    "romaji": "niru",
    "meaning": "nấu",
    "topicId": "other"
  },
  {
    "id": 1744,
    "word": "焼く",
    "hiragana": "やく",
    "romaji": "yaku",
    "meaning": "nướng, rán",
    "topicId": "other"
  },
  {
    "id": 1745,
    "word": "揚げる",
    "hiragana": "あげる",
    "romaji": "ageru",
    "meaning": "rán (ngập dầu)",
    "topicId": "other"
  },
  {
    "id": 1746,
    "word": "炒める",
    "hiragana": "いためる",
    "romaji": "itameru",
    "meaning": "xào",
    "topicId": "other"
  },
  {
    "id": 1747,
    "word": "ゆでる",
    "hiragana": "ゆでる",
    "romaji": "yuderu",
    "meaning": "luộc",
    "topicId": "other"
  },
  {
    "id": 1748,
    "word": "蒸す",
    "hiragana": "むす",
    "romaji": "musu",
    "meaning": "hấp",
    "topicId": "other"
  },
  {
    "id": 1749,
    "word": "炊く",
    "hiragana": "たく",
    "romaji": "taku",
    "meaning": "nấu (cơm)",
    "topicId": "food"
  },
  {
    "id": 1750,
    "word": "むく",
    "hiragana": "むく",
    "romaji": "muku",
    "meaning": "gọt (vỏ)",
    "topicId": "other"
  },
  {
    "id": 1751,
    "word": "刻む",
    "hiragana": "きざむ",
    "romaji": "kizamu",
    "meaning": "băm, thái nhỏ",
    "topicId": "other"
  },
  {
    "id": 1752,
    "word": "かき混ぜる",
    "hiragana": "かきまぜる",
    "romaji": "kakimazeru",
    "meaning": "khuấy, trộn",
    "topicId": "other"
  },
  {
    "id": 1753,
    "word": "酢",
    "hiragana": "す",
    "romaji": "su",
    "meaning": "giấm",
    "topicId": "time_weather"
  },
  {
    "id": 1754,
    "word": "味噌",
    "hiragana": "みそ",
    "romaji": "miso",
    "meaning": "tương miso",
    "topicId": "other"
  },
  {
    "id": 1755,
    "word": "油",
    "hiragana": "あぶら",
    "romaji": "abura",
    "meaning": "dầu",
    "topicId": "other"
  },
  {
    "id": 1756,
    "word": "マヨネーズ",
    "hiragana": "マヨネーズ",
    "romaji": "mayone-zu",
    "meaning": "sốt mayonnaise",
    "topicId": "health"
  },
  {
    "id": 1757,
    "word": "ケチャップ",
    "hiragana": "ケチャップ",
    "romaji": "kechappu",
    "meaning": "tương cà",
    "topicId": "other"
  },
  {
    "id": 1758,
    "word": "からし（マスタード）",
    "hiragana": "からし（マスタード）",
    "romaji": "karashi (masuta-do)",
    "meaning": "mù tạt",
    "topicId": "other"
  },
  {
    "id": 1759,
    "word": "唐辛子",
    "hiragana": "とうがらし",
    "romaji": "tougarashi",
    "meaning": "ớt",
    "topicId": "other"
  },
  {
    "id": 1760,
    "word": "しょうが",
    "hiragana": "しょうが",
    "romaji": "shouga",
    "meaning": "gừng",
    "topicId": "other"
  },
  {
    "id": 1761,
    "word": "わさび",
    "hiragana": "わさび",
    "romaji": "wasabi",
    "meaning": "mù tạt xanh (wasabi)",
    "topicId": "greetings"
  },
  {
    "id": 1762,
    "word": "カレー粉",
    "hiragana": "カレーこ",
    "romaji": "kare-ko",
    "meaning": "bột cà ri",
    "topicId": "other"
  },
  {
    "id": 1763,
    "word": "やかん",
    "hiragana": "やかん",
    "romaji": "yakan",
    "meaning": "ấm nước",
    "topicId": "food"
  },
  {
    "id": 1764,
    "word": "ふた",
    "hiragana": "ふた",
    "romaji": "futa",
    "meaning": "vung, nắp",
    "topicId": "other"
  },
  {
    "id": 1765,
    "word": "おたま",
    "hiragana": "おたま",
    "romaji": "otama",
    "meaning": "muôi",
    "topicId": "other"
  },
  {
    "id": 1766,
    "word": "まな板",
    "hiragana": "まないた",
    "romaji": "manaita",
    "meaning": "thớt",
    "topicId": "other"
  },
  {
    "id": 1767,
    "word": "包丁",
    "hiragana": "ほうちょう",
    "romaji": "houchou",
    "meaning": "dao",
    "topicId": "other"
  },
  {
    "id": 1768,
    "word": "ふきん",
    "hiragana": "ふきん",
    "romaji": "fukin",
    "meaning": "khăn lau bếp",
    "topicId": "food"
  },
  {
    "id": 1769,
    "word": "フライパン",
    "hiragana": "フライパン",
    "romaji": "furaipan",
    "meaning": "chảo rán",
    "topicId": "other"
  },
  {
    "id": 1770,
    "word": "電子オーブンレンジ",
    "hiragana": "でんしオーブンレンジ",
    "romaji": "denshi o-bun renji",
    "meaning": "lò vi sóng (có nướng)",
    "topicId": "other"
  },
  {
    "id": 1771,
    "word": "炊飯器",
    "hiragana": "すいはんき",
    "romaji": "suihanki",
    "meaning": "nồi cơm điện",
    "topicId": "food"
  },
  {
    "id": 1772,
    "word": "しゃもじ",
    "hiragana": "しゃもじ",
    "romaji": "shamoji",
    "meaning": "muôi xới cơm",
    "topicId": "food"
  },
  {
    "id": 1773,
    "word": "缶切り",
    "hiragana": "かんきり",
    "romaji": "kankiri",
    "meaning": "dụng cụ mở đồ hộp",
    "topicId": "lifestyle"
  },
  {
    "id": 1774,
    "word": "栓抜き",
    "hiragana": "せんぬき",
    "romaji": "sennuki",
    "meaning": "cái mở nắp chai",
    "topicId": "food"
  },
  {
    "id": 1775,
    "word": "ざる",
    "hiragana": "ざる",
    "romaji": "zaru",
    "meaning": "rá, rổ",
    "topicId": "other"
  },
  {
    "id": 1776,
    "word": "ポット",
    "hiragana": "ポット",
    "romaji": "potto",
    "meaning": "phích nước",
    "topicId": "food"
  },
  {
    "id": 1777,
    "word": "ガス台",
    "hiragana": "ガスだい",
    "romaji": "gasudai",
    "meaning": "bếp ga",
    "topicId": "traffic"
  },
  {
    "id": 1778,
    "word": "流し[台]",
    "hiragana": "ながし[だい]",
    "romaji": "nagashi [dai]",
    "meaning": "bồn rửa",
    "topicId": "other"
  },
  {
    "id": 1779,
    "word": "換気扇",
    "hiragana": "かんきせん",
    "romaji": "kankisen",
    "meaning": "quạt thông gió",
    "topicId": "time_weather"
  },
  {
    "id": 1780,
    "word": "咲きます[花が～]",
    "hiragana": "さきます[はなが～]",
    "romaji": "sakimasu [hana ga~]",
    "meaning": "nở [hoa]",
    "topicId": "health"
  },
  {
    "id": 1781,
    "word": "変わります[色が～]",
    "hiragana": "かわります[いろが～]",
    "romaji": "kawarimasu [iro ga~]",
    "meaning": "thay đổi [màu da, màu]",
    "topicId": "other"
  },
  {
    "id": 1782,
    "word": "付けます[丸を～]",
    "hiragana": "つけます[まるを～]",
    "romaji": "tsukemasu [maru wo~]",
    "meaning": "vẽ [vòng tròn], đánh dấu [tròn]",
    "topicId": "anime"
  },
  {
    "id": 1783,
    "word": "拾います",
    "hiragana": "ひろいます",
    "romaji": "hiroimasu",
    "meaning": "nhặt, nhặt lên",
    "topicId": "other"
  },
  {
    "id": 1784,
    "word": "かかります[電話が～]",
    "hiragana": "かかります[でんわが～]",
    "romaji": "kakarimasu [denwa ga~]",
    "meaning": "có điện thoại",
    "topicId": "traffic"
  },
  {
    "id": 1785,
    "word": "楽[な]",
    "hiragana": "らく[な]",
    "romaji": "raku [na]",
    "meaning": "thoải mái, nhàn hạ, dễ dàng",
    "topicId": "lifestyle"
  },
  {
    "id": 1786,
    "word": "正しい",
    "hiragana": "ただしい",
    "romaji": "tadashii",
    "meaning": "đúng, chính xác",
    "topicId": "other"
  },
  {
    "id": 1787,
    "word": "珍しい",
    "hiragana": "めずらしい",
    "romaji": "mezurashii",
    "meaning": "hiếm, hiếm có",
    "topicId": "other"
  },
  {
    "id": 1788,
    "word": "方",
    "hiragana": "かた",
    "romaji": "kata",
    "meaning": "vị, người (kính ngữ của ひと)",
    "topicId": "greetings"
  },
  {
    "id": 1789,
    "word": "向こう",
    "hiragana": "むこう",
    "romaji": "mukou",
    "meaning": "bên kia, bên đấy, phía đối diện",
    "topicId": "other"
  },
  {
    "id": 1790,
    "word": "島",
    "hiragana": "しま",
    "romaji": "shima",
    "meaning": "đảo",
    "topicId": "other"
  },
  {
    "id": 1791,
    "word": "港",
    "hiragana": "みなと",
    "romaji": "minato",
    "meaning": "cảng, bến cảng",
    "topicId": "traffic"
  },
  {
    "id": 1792,
    "word": "近所",
    "hiragana": "きんじょ",
    "romaji": "kinjo",
    "meaning": "hàng xóm, vùng lân cận",
    "topicId": "other"
  },
  {
    "id": 1793,
    "word": "屋上",
    "hiragana": "おくじょう",
    "romaji": "okujou",
    "meaning": "sân thượng",
    "topicId": "lifestyle"
  },
  {
    "id": 1794,
    "word": "海外",
    "hiragana": "かいがい",
    "romaji": "kaigai",
    "meaning": "nước ngoài, hải ngoại",
    "topicId": "food"
  },
  {
    "id": 1795,
    "word": "山登り",
    "hiragana": "やまのぼり",
    "romaji": "yamanobori",
    "meaning": "leo núi",
    "topicId": "travel"
  },
  {
    "id": 1796,
    "word": "ハイキング",
    "hiragana": "ハイキング",
    "romaji": "haikingu",
    "meaning": "đi bộ đường dài, dã ngoại (hiking)",
    "topicId": "traffic"
  },
  {
    "id": 1797,
    "word": "許可",
    "hiragana": "きょか",
    "romaji": "kyoka",
    "meaning": "phép, giấy phép, cho phép",
    "topicId": "health"
  },
  {
    "id": 1798,
    "word": "丸",
    "hiragana": "まる",
    "romaji": "maru",
    "meaning": "tròn, vòng tròn",
    "topicId": "other"
  },
  {
    "id": 1799,
    "word": "操作",
    "hiragana": "そうさ",
    "romaji": "sousa",
    "meaning": "thao tác, vận hành",
    "topicId": "other"
  },
  {
    "id": 1800,
    "word": "方法",
    "hiragana": "ほうほう",
    "romaji": "houhou",
    "meaning": "phương pháp, cách thức",
    "topicId": "food"
  },
  {
    "id": 1801,
    "word": "設備",
    "hiragana": "せつび",
    "romaji": "setsubi",
    "meaning": "thiết bị",
    "topicId": "other"
  },
  {
    "id": 1802,
    "word": "カーテン",
    "hiragana": "カーテン",
    "romaji": "ka-ten",
    "meaning": "cái rèm",
    "topicId": "food"
  },
  {
    "id": 1803,
    "word": "ひも",
    "hiragana": "ひも",
    "romaji": "himo",
    "meaning": "sợi dây",
    "topicId": "other"
  },
  {
    "id": 1804,
    "word": "曲",
    "hiragana": "きょく",
    "romaji": "kyoku",
    "meaning": "bài hát, bản nhạc",
    "topicId": "time_weather"
  },
  {
    "id": 1805,
    "word": "楽しみ",
    "hiragana": "たのしみ",
    "romaji": "tanoshimi",
    "meaning": "niềm vui, sự mong chờ",
    "topicId": "other"
  },
  {
    "id": 1806,
    "word": "もっと",
    "hiragana": "もっと",
    "romaji": "motto",
    "meaning": "hơn nữa",
    "topicId": "other"
  },
  {
    "id": 1807,
    "word": "初めに",
    "hiragana": "はじめに",
    "romaji": "hajimeni",
    "meaning": "đầu tiên, trước hết",
    "topicId": "health"
  },
  {
    "id": 1808,
    "word": "これで 終わります",
    "hiragana": "これで おわります",
    "romaji": "korede owarimasu",
    "meaning": "đến đây là kết thúc",
    "topicId": "traffic"
  },
  {
    "id": 1809,
    "word": "箱根",
    "hiragana": "はこね",
    "romaji": "hakone",
    "meaning": "Hakone (địa danh nghỉ dưỡng ở tỉnh Kanagawa)",
    "topicId": "greetings"
  },
  {
    "id": 1810,
    "word": "日光",
    "hiragana": "にっこう",
    "romaji": "nikkou",
    "meaning": "Nikko (địa danh du lịch ở tỉnh Tochigi)",
    "topicId": "greetings"
  },
  {
    "id": 1811,
    "word": "白馬",
    "hiragana": "はくば",
    "romaji": "hakuba",
    "meaning": "Hakuba (địa danh nghỉ dưỡng ở tỉnh Nagano)",
    "topicId": "greetings"
  },
  {
    "id": 1812,
    "word": "アフリカ",
    "hiragana": "アフリカ",
    "romaji": "afurika",
    "meaning": "Châu Phi",
    "topicId": "other"
  },
  {
    "id": 1813,
    "word": "それなら",
    "hiragana": "それなら",
    "romaji": "sorenara",
    "meaning": "nếu thế thì, vậy thì",
    "topicId": "other"
  },
  {
    "id": 1814,
    "word": "夜行バス",
    "hiragana": "やこうバス",
    "romaji": "yakoubasu",
    "meaning": "xe buýt chạy đêm",
    "topicId": "traffic"
  },
  {
    "id": 1815,
    "word": "旅行社",
    "hiragana": "りょこうしゃ",
    "romaji": "ryokousha",
    "meaning": "công ty du lịch",
    "topicId": "work"
  },
  {
    "id": 1816,
    "word": "詳しい",
    "hiragana": "くわしい",
    "romaji": "kuwashii",
    "meaning": "chi tiết, tường tận",
    "topicId": "other"
  },
  {
    "id": 1817,
    "word": "スキー場",
    "hiragana": "スキーじょう",
    "romaji": "skiijou",
    "meaning": "bãi trượt tuyết, khu trượt tuyết",
    "topicId": "time_weather"
  },
  {
    "id": 1818,
    "word": "草津",
    "hiragana": "くさつ",
    "romaji": "kusatsu",
    "meaning": "Kusatsu (địa danh nghỉ dưỡng ở tỉnh Gunma)",
    "topicId": "greetings"
  },
  {
    "id": 1819,
    "word": "志賀高原",
    "hiragana": "しがこうげん",
    "romaji": "shigakougen",
    "meaning": "Cao nguyên Shiga (vườn quốc gia ở tỉnh Nagano)",
    "topicId": "traffic"
  },
  {
    "id": 1820,
    "word": "朱",
    "hiragana": "しゅ",
    "romaji": "shu",
    "meaning": "màu đỏ son",
    "topicId": "other"
  },
  {
    "id": 1821,
    "word": "交わります",
    "hiragana": "まじわります",
    "romaji": "majiwarimasu",
    "meaning": "giao lưu, quan hệ với, chơi với",
    "topicId": "time_weather"
  },
  {
    "id": 1822,
    "word": "ことわざ",
    "hiragana": "ことわざ",
    "romaji": "kotowaza",
    "meaning": "tục ngữ",
    "topicId": "other"
  },
  {
    "id": 1823,
    "word": "仲よく します",
    "hiragana": "なかよく します",
    "romaji": "nakayoku shimasu",
    "meaning": "quan hệ tốt với, chơi thân với",
    "topicId": "time_weather"
  },
  {
    "id": 1824,
    "word": "必要[な]",
    "hiragana": "ひつよう[な]",
    "romaji": "hitsuyou [na]",
    "meaning": "cần thiết",
    "topicId": "other"
  },
  {
    "id": 1825,
    "word": "住めば 都",
    "hiragana": "すめば みやこ",
    "romaji": "sumeba miyako",
    "meaning": "Sống đâu quen đó",
    "topicId": "other"
  },
  {
    "id": 1826,
    "word": "三人寄れば 文殊の 知恵",
    "hiragana": "さんにんよれば もんじゅの ちえ",
    "romaji": "sannin yoreba monju no chie",
    "meaning": "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao",
    "topicId": "work"
  },
  {
    "id": 1827,
    "word": "立てば しゃくやく、座れば ぼたん、歩く姿は ゆり花",
    "hiragana": "たてば しゃくやく、すわれば ぼたん、あるくすがたは ゆりのはな",
    "romaji": "tateba shakuyaku, suwareba botan, aruku sugata wa yuri no hana",
    "meaning": "Đứng như thược dược, ngồi như mẫu đơn, đi như hoa bách hợp (mô tả vẻ đẹp người phụ nữ)",
    "topicId": "greetings"
  },
  {
    "id": 1828,
    "word": "ちりも 積もれば 山と なる",
    "hiragana": "ちりも つもれば やまと なる",
    "romaji": "chiri mo tsumoreba yama to naru",
    "meaning": "Tích tiểu thành đại (Bụi tích lại cũng thành núi)",
    "topicId": "travel"
  },
  {
    "id": 1829,
    "word": "うわさを すれば 影",
    "hiragana": "うわさを すれば かげ",
    "romaji": "uwasa wo sureba kage",
    "meaning": "Vừa nhắc Tào Tháo, Tào Tháo đến",
    "topicId": "traffic"
  },
  {
    "id": 1830,
    "word": "花より だんご",
    "hiragana": "はなより だんご",
    "romaji": "hana yori dango",
    "meaning": "Tốt gỗ hơn tốt nước sơn (Bánh dango hơn là hoa)",
    "topicId": "shopping"
  },
  {
    "id": 1831,
    "word": "転石 苔を 生ず",
    "hiragana": "てんせき こけを しょうず",
    "romaji": "tenseki koke wo shouzu",
    "meaning": "Hòn đá lăn thì rêu không mọc (1. Chăm chỉ thì sẽ tiến bộ / 2. Hay thay đổi công việc thì không thành công)",
    "topicId": "food"
  },
  {
    "id": 1832,
    "word": "届きます[荷物が～]",
    "hiragana": "とどきます[荷物が～]",
    "romaji": "todokimasu [nimotsu ga~]",
    "meaning": "được gửi đến, được chuyển đến [hành lý]",
    "topicId": "traffic"
  },
  {
    "id": 1833,
    "word": "出ます[試合に～]",
    "hiragana": "でます[試合に～]",
    "romaji": "demasu [shiai ni~]",
    "meaning": "tham gia [trận đấu]",
    "topicId": "other"
  },
  {
    "id": 1834,
    "word": "打ちます[ワープロを～]",
    "hiragana": "うちます[ワープロを～]",
    "romaji": "uchimasu [wa-puro wo~]",
    "meaning": "đánh [máy chữ]",
    "topicId": "lifestyle"
  },
  {
    "id": 1835,
    "word": "貯金します",
    "hiragana": "ちょきんします",
    "romaji": "chokinshimasu",
    "meaning": "tiết kiệm tiền, để dành tiền",
    "topicId": "shopping"
  },
  {
    "id": 1836,
    "word": "太ります",
    "hiragana": "ふとります",
    "romaji": "futorimasu",
    "meaning": "béo lên, tăng cân",
    "topicId": "food"
  },
  {
    "id": 1837,
    "word": "痩せます",
    "hiragana": "やせます",
    "romaji": "yasemasu",
    "meaning": "gầy đi, giảm cân",
    "topicId": "traffic"
  },
  {
    "id": 1838,
    "word": "過ぎます[7時を～]",
    "hiragana": "すぎます[7時を～]",
    "romaji": "sugimasu [7ji wo~]",
    "meaning": "quá [7 giờ]",
    "topicId": "time_weather"
  },
  {
    "id": 1839,
    "word": "慣れます[習慣に～]",
    "hiragana": "なれます[習慣に～]",
    "romaji": "naremasu [shuukan ni~]",
    "meaning": "quen [với tập quán]",
    "topicId": "food"
  },
  {
    "id": 1840,
    "word": "硬い",
    "hiragana": "かたい",
    "romaji": "katai",
    "meaning": "cứng",
    "topicId": "other"
  },
  {
    "id": 1841,
    "word": "軟らかい",
    "hiragana": "やわらかい",
    "romaji": "yawarakai",
    "meaning": "mềm",
    "topicId": "other"
  },
  {
    "id": 1842,
    "word": "電子～",
    "hiragana": "でんし～",
    "romaji": "denshi~",
    "meaning": "~ điện tử",
    "topicId": "traffic"
  },
  {
    "id": 1843,
    "word": "携帯～",
    "hiragana": "けいたい～",
    "romaji": "keitai~",
    "meaning": "~ cầm tay",
    "topicId": "health"
  },
  {
    "id": 1844,
    "word": "工場",
    "hiragana": "こうじょう",
    "romaji": "koujou",
    "meaning": "nhà máy, phân xưởng",
    "topicId": "lifestyle"
  },
  {
    "id": 1845,
    "word": "毎週",
    "hiragana": "まいしゅう",
    "romaji": "maishuu",
    "meaning": "hàng tuần",
    "topicId": "time_weather"
  },
  {
    "id": 1846,
    "word": "毎月",
    "hiragana": "まいつき",
    "romaji": "maitsuki",
    "meaning": "hàng tháng",
    "topicId": "time_weather"
  },
  {
    "id": 1847,
    "word": "毎年",
    "hiragana": "まいねん",
    "romaji": "mainen",
    "meaning": "hàng năm",
    "topicId": "time_weather"
  },
  {
    "id": 1848,
    "word": "やっと",
    "hiragana": "やっと",
    "romaji": "yatto",
    "meaning": "cuối cùng thì cũng",
    "topicId": "other"
  },
  {
    "id": 1849,
    "word": "かなり",
    "hiragana": "かなり",
    "romaji": "kanari",
    "meaning": "khá là",
    "topicId": "other"
  },
  {
    "id": 1850,
    "word": "必ず",
    "hiragana": "かならず",
    "romaji": "kanarazu",
    "meaning": "nhất định",
    "topicId": "other"
  },
  {
    "id": 1851,
    "word": "絶対に",
    "hiragana": "ぜったいに",
    "romaji": "zettaini",
    "meaning": "tuyệt đối",
    "topicId": "other"
  },
  {
    "id": 1852,
    "word": "上手に",
    "hiragana": "じょうずに",
    "romaji": "jouzuni",
    "meaning": "giỏi",
    "topicId": "other"
  },
  {
    "id": 1853,
    "word": "このごろ",
    "hiragana": "このごろ",
    "romaji": "konogoro",
    "meaning": "dạo này",
    "topicId": "other"
  },
  {
    "id": 1854,
    "word": "～ずつ",
    "hiragana": "～ずつ",
    "romaji": "~zutsu",
    "meaning": "từng ~",
    "topicId": "other"
  },
  {
    "id": 1855,
    "word": "そのほうが～",
    "hiragana": "そのほうが～",
    "romaji": "sonohouga~",
    "meaning": "cái đó ~ hơn / như thế ~ hơn",
    "topicId": "food"
  },
  {
    "id": 1856,
    "word": "ショパン",
    "hiragana": "ショパン",
    "romaji": "shopan",
    "meaning": "Chopin (nhạc sĩ người Ba Lan)",
    "topicId": "greetings"
  },
  {
    "id": 1857,
    "word": "お客様",
    "hiragana": "おきゃくさま",
    "romaji": "okyakusama",
    "meaning": "quý khách (kính ngữ)",
    "topicId": "shopping"
  },
  {
    "id": 1858,
    "word": "特別[な]",
    "hiragana": "とくべつ[な]",
    "romaji": "tokubetsu [na]",
    "meaning": "đặc biệt",
    "topicId": "other"
  },
  {
    "id": 1859,
    "word": "していらっしゃいます",
    "hiragana": "していらっしゃいます",
    "romaji": "shiteirasshaimasu",
    "meaning": "đang làm (kính ngữ của shiteimasu)",
    "topicId": "work"
  },
  {
    "id": 1860,
    "word": "水泳",
    "hiragana": "すいえい",
    "romaji": "suiei",
    "meaning": "bơi lội",
    "topicId": "other"
  },
  {
    "id": 1861,
    "word": "タンゴ",
    "hiragana": "タンゴ",
    "romaji": "tango",
    "meaning": "tango",
    "topicId": "other"
  },
  {
    "id": 1862,
    "word": "チャレンジします",
    "hiragana": "チャレンジします",
    "romaji": "charenjishimasu",
    "meaning": "thử thách, dám làm (challenge)",
    "topicId": "work"
  },
  {
    "id": 1863,
    "word": "気持ち",
    "hiragana": "きもち",
    "romaji": "kimochi",
    "meaning": "cảm giác, tâm trạng, tinh thần",
    "topicId": "shopping"
  },
  {
    "id": 1864,
    "word": "乗り物",
    "hiragana": "のりもの",
    "romaji": "norimono",
    "meaning": "phương tiện đi lại",
    "topicId": "traffic"
  },
  {
    "id": 1865,
    "word": "歴史",
    "hiragana": "れきし",
    "romaji": "rekishi",
    "meaning": "lịch sử",
    "topicId": "other"
  },
  {
    "id": 1866,
    "word": "〜世紀",
    "hiragana": "〜せいき",
    "romaji": "~seiki",
    "meaning": "thế kỷ ~",
    "topicId": "other"
  },
  {
    "id": 1867,
    "word": "汽車",
    "hiragana": "きしゃ",
    "romaji": "kisha",
    "meaning": "tàu hỏa chạy bằng hơi nước",
    "topicId": "food"
  },
  {
    "id": 1868,
    "word": "汽船",
    "hiragana": "きせん",
    "romaji": "kisen",
    "meaning": "tàu thủy chạy bằng hơi nước",
    "topicId": "food"
  },
  {
    "id": 1869,
    "word": "大勢の～",
    "hiragana": "おおぜいの～",
    "romaji": "oozeino~",
    "meaning": "nhiều (người)",
    "topicId": "other"
  },
  {
    "id": 1870,
    "word": "運びます",
    "hiragana": "はこびます",
    "romaji": "hakobimasu",
    "meaning": "vận chuyển",
    "topicId": "other"
  },
  {
    "id": 1871,
    "word": "安全[な]",
    "hiragana": "あんぜん[な]",
    "romaji": "anzen [na]",
    "meaning": "an toàn",
    "topicId": "other"
  },
  {
    "id": 1872,
    "word": "栄養",
    "hiragana": "えいよう",
    "romaji": "eiyou",
    "meaning": "dinh dưỡng",
    "topicId": "other"
  },
  {
    "id": 1873,
    "word": "消化",
    "hiragana": "消化",
    "romaji": "shouka",
    "meaning": "tiêu hóa",
    "topicId": "other"
  },
  {
    "id": 1874,
    "word": "蛋白質",
    "hiragana": "たんぱくしつ",
    "romaji": "tanpakushitsu",
    "meaning": "chất đạm (protein)",
    "topicId": "other"
  },
  {
    "id": 1875,
    "word": "脂肪",
    "hiragana": "しぼう",
    "romaji": "shibou",
    "meaning": "chất béo",
    "topicId": "other"
  },
  {
    "id": 1876,
    "word": "カルシウム",
    "hiragana": "カルシウム",
    "romaji": "karushiumu",
    "meaning": "canxi",
    "topicId": "other"
  },
  {
    "id": 1877,
    "word": "ビタミン",
    "hiragana": "ビタミン",
    "romaji": "bitamin",
    "meaning": "vitamin",
    "topicId": "other"
  },
  {
    "id": 1878,
    "word": "炭水化物",
    "hiragana": "たんすいかぶつ",
    "romaji": "tansuikabutsu",
    "meaning": "chất bột (carbohydrate)",
    "topicId": "other"
  },
  {
    "id": 1879,
    "word": "水分",
    "hiragana": "すいぶん",
    "romaji": "suibun",
    "meaning": "nước, thành phần nước",
    "topicId": "food"
  },
  {
    "id": 1880,
    "word": "繊維",
    "hiragana": "せんい",
    "romaji": "seni",
    "meaning": "chất xơ",
    "topicId": "other"
  },
  {
    "id": 1881,
    "word": "定期検診",
    "hiragana": "定期検診",
    "romaji": "teikikenshin",
    "meaning": "khám sức khỏe định kỳ",
    "topicId": "health"
  },
  {
    "id": 1882,
    "word": "体重",
    "hiragana": "たいじゅう",
    "romaji": "taijuu",
    "meaning": "cân nặng",
    "topicId": "other"
  },
  {
    "id": 1883,
    "word": "身長",
    "hiragana": "しんちょう",
    "romaji": "shinchou",
    "meaning": "chiều cao",
    "topicId": "time_weather"
  },
  {
    "id": 1884,
    "word": "血圧",
    "hiragana": "けつあつ",
    "romaji": "ketsuatsu",
    "meaning": "huyết áp",
    "topicId": "other"
  },
  {
    "id": 1885,
    "word": "褒めます",
    "hiragana": "ほめます",
    "romaji": "homemasu",
    "meaning": "khen",
    "topicId": "other"
  },
  {
    "id": 1886,
    "word": "叱ります",
    "hiragana": "しかります",
    "romaji": "shikarimasu",
    "meaning": "mắng",
    "topicId": "other"
  },
  {
    "id": 1887,
    "word": "誘います",
    "hiragana": "さそいます",
    "romaji": "sasoimasu",
    "meaning": "mời, rủ",
    "topicId": "other"
  },
  {
    "id": 1888,
    "word": "起こします",
    "hiragana": "おこします",
    "romaji": "okoshimasu",
    "meaning": "đánh thức",
    "topicId": "other"
  },
  {
    "id": 1889,
    "word": "招待します",
    "hiragana": "しょうたいします",
    "romaji": "shoutaishimasu",
    "meaning": "mời",
    "topicId": "other"
  },
  {
    "id": 1890,
    "word": "頼みます",
    "hiragana": "たのみます",
    "romaji": "tanomimasu",
    "meaning": "nhờ, đề nghị",
    "topicId": "other"
  },
  {
    "id": 1891,
    "word": "注意します",
    "hiragana": "ちゅういします",
    "romaji": "chuuishimasu",
    "meaning": "chú ý, nhắc nhở",
    "topicId": "other"
  },
  {
    "id": 1892,
    "word": "踏みます",
    "hiragana": "ふみます",
    "romaji": "fumimasu",
    "meaning": "giẫm, giẫm lên",
    "topicId": "other"
  },
  {
    "id": 1893,
    "word": "壊します",
    "hiragana": "こわします",
    "romaji": "kowashimasu",
    "meaning": "làm hỏng, phá hỏng",
    "topicId": "work"
  },
  {
    "id": 1894,
    "word": "汚します",
    "hiragana": "よごします",
    "romaji": "yogoshimasu",
    "meaning": "làm bẩn",
    "topicId": "work"
  },
  {
    "id": 1895,
    "word": "行います",
    "hiragana": "おこないます",
    "romaji": "okonaimasu",
    "meaning": "tổ chức, tiến hành",
    "topicId": "other"
  },
  {
    "id": 1896,
    "word": "輸出します",
    "hiragana": "ゆしゅつします",
    "romaji": "yushutsushimasu",
    "meaning": "xuất khẩu",
    "topicId": "other"
  },
  {
    "id": 1897,
    "word": "輸入します",
    "hiragana": "ゆにゅうします",
    "romaji": "yunyuushimasu",
    "meaning": "nhập khẩu",
    "topicId": "other"
  },
  {
    "id": 1898,
    "word": "翻訳します",
    "hiragana": "ほんやくします",
    "romaji": "honyakushimasu",
    "meaning": "biên dịch (sách, tài liệu)",
    "topicId": "lifestyle"
  },
  {
    "id": 1899,
    "word": "発明します",
    "hiragana": "はつめいします",
    "romaji": "hatsumeishimasu",
    "meaning": "phát minh",
    "topicId": "anime"
  },
  {
    "id": 1900,
    "word": "発見します",
    "hiragana": "はっけんします",
    "romaji": "hakkenshimasu",
    "meaning": "phát hiện, tìm ra",
    "topicId": "anime"
  },
  {
    "id": 1901,
    "word": "設計します",
    "hiragana": "せっけいします",
    "romaji": "sekkeishimasu",
    "meaning": "thiết kế",
    "topicId": "other"
  },
  {
    "id": 1902,
    "word": "米",
    "hiragana": "こめ",
    "romaji": "kome",
    "meaning": "gạo",
    "topicId": "other"
  },
  {
    "id": 1903,
    "word": "麦",
    "hiragana": "むぎ",
    "romaji": "mugi",
    "meaning": "lúa mạch",
    "topicId": "other"
  },
  {
    "id": 1904,
    "word": "石油",
    "hiragana": "せきゆ",
    "romaji": "sekiyu",
    "meaning": "dầu mỏ",
    "topicId": "other"
  },
  {
    "id": 1905,
    "word": "原料",
    "hiragana": "げんりょう",
    "romaji": "genryou",
    "meaning": "nguyên liệu",
    "topicId": "other"
  },
  {
    "id": 1906,
    "word": "デート",
    "hiragana": "デート",
    "romaji": "de-to",
    "meaning": "cuộc hẹn hò (của nam nữ)",
    "topicId": "other"
  },
  {
    "id": 1907,
    "word": "泥棒",
    "hiragana": "どろぼう",
    "romaji": "dorobou",
    "meaning": "kẻ trộm",
    "topicId": "other"
  },
  {
    "id": 1908,
    "word": "警官",
    "hiragana": "けいかん",
    "romaji": "keikan",
    "meaning": "cảnh sát",
    "topicId": "travel"
  },
  {
    "id": 1909,
    "word": "科学者",
    "hiragana": "かがくしゃ",
    "romaji": "kagakusha",
    "meaning": "nhà khoa học",
    "topicId": "lifestyle"
  },
  {
    "id": 1910,
    "word": "～中",
    "hiragana": "～じゅう",
    "romaji": "~juu",
    "meaning": "khắp ~",
    "topicId": "other"
  },
  {
    "id": 1911,
    "word": "～に よって",
    "hiragana": "～に よって",
    "romaji": "~ni yotte",
    "meaning": "do ~, bởi ~ (dùng trong câu bị động)",
    "topicId": "other"
  },
  {
    "id": 1912,
    "word": "よかったですね",
    "hiragana": "よかったですね",
    "romaji": "yokattadesune",
    "meaning": "May quá nhỉ / Tốt quá nhỉ",
    "topicId": "other"
  },
  {
    "id": 1913,
    "word": "ドミニカ",
    "hiragana": "ドミニカ",
    "romaji": "dominika",
    "meaning": "Dominica",
    "topicId": "other"
  },
  {
    "id": 1914,
    "word": "ライト兄弟",
    "hiragana": "ライトきょうだい",
    "romaji": "raitokyoudai",
    "meaning": "Anh em nhà Wright",
    "topicId": "greetings"
  },
  {
    "id": 1915,
    "word": "源氏物語",
    "hiragana": "げんじものがたり",
    "romaji": "genjimonogatari",
    "meaning": "Truyện Genji",
    "topicId": "anime"
  },
  {
    "id": 1916,
    "word": "紫式部",
    "hiragana": "むらさきしきぶ",
    "romaji": "murasakishikibu",
    "meaning": "Murasaki Shikibu (nữ văn sĩ thời Heian)",
    "topicId": "food"
  },
  {
    "id": 1917,
    "word": "グラハム・ベル",
    "hiragana": "グラハム・ベル",
    "romaji": "gurahamu beru",
    "meaning": "Alexander Graham Bell",
    "topicId": "traffic"
  },
  {
    "id": 1918,
    "word": "江戸時代",
    "hiragana": "えどじだい",
    "romaji": "edojidai",
    "meaning": "Thời đại Edo (1603-1868)",
    "topicId": "other"
  },
  {
    "id": 1919,
    "word": "埋め立てます",
    "hiragana": "うめたてます",
    "romaji": "umetatemasu",
    "meaning": "lấp (biển), bồi đắp",
    "topicId": "travel"
  },
  {
    "id": 1920,
    "word": "技術",
    "hiragana": "ぎじゅつ",
    "romaji": "gijutsu",
    "meaning": "kỹ thuật, công nghệ",
    "topicId": "time_weather"
  },
  {
    "id": 1921,
    "word": "土地",
    "hiragana": "とち",
    "romaji": "tochi",
    "meaning": "đất, đất đai",
    "topicId": "other"
  },
  {
    "id": 1922,
    "word": "騒音",
    "hiragana": "そうおん",
    "romaji": "souon",
    "meaning": "tiếng ồn",
    "topicId": "other"
  },
  {
    "id": 1923,
    "word": "アクセス",
    "hiragana": "アクセス",
    "romaji": "akusesu",
    "meaning": "nối, giao thông đi đến (access)",
    "topicId": "traffic"
  },
  {
    "id": 1924,
    "word": "～世紀",
    "hiragana": "～せいき",
    "romaji": "~seiki",
    "meaning": "thế kỷ ~",
    "topicId": "other"
  },
  {
    "id": 1925,
    "word": "豪華[な]",
    "hiragana": "ごうか[な]",
    "romaji": "gouka [na]",
    "meaning": "hào nhoáng, sang trọng",
    "topicId": "health"
  },
  {
    "id": 1926,
    "word": "彫刻",
    "hiragana": "ちょうこく",
    "romaji": "choukoku",
    "meaning": "điêu khắc",
    "topicId": "traffic"
  },
  {
    "id": 1927,
    "word": "眠ります",
    "hiragana": "ねむります",
    "romaji": "nemurimasu",
    "meaning": "ngủ",
    "topicId": "lifestyle"
  },
  {
    "id": 1928,
    "word": "彫ります",
    "hiragana": "ほります",
    "romaji": "horimasu",
    "meaning": "khắc, chạm, trổ",
    "topicId": "time_weather"
  },
  {
    "id": 1929,
    "word": "仲間",
    "hiragana": "なかま",
    "romaji": "nakama",
    "meaning": "bạn bè, đồng nghiệp",
    "topicId": "lifestyle"
  },
  {
    "id": 1930,
    "word": "その後",
    "hiragana": "そのあと",
    "romaji": "sonoato",
    "meaning": "sau đó",
    "topicId": "other"
  },
  {
    "id": 1931,
    "word": "一生懸命",
    "hiragana": "いっしょうけんめい",
    "romaji": "isshoukenmei",
    "meaning": "cố gắng hết sức, chăm chỉ",
    "topicId": "other"
  },
  {
    "id": 1932,
    "word": "ねずみ",
    "hiragana": "ねずみ",
    "romaji": "nezumi",
    "meaning": "con chuột",
    "topicId": "other"
  },
  {
    "id": 1933,
    "word": "一匹もいません",
    "hiragana": "いっぴきもいません",
    "romaji": "ippikimoimasen",
    "meaning": "không có một con nào",
    "topicId": "other"
  },
  {
    "id": 1934,
    "word": "眠り猫",
    "hiragana": "ねむりねこ",
    "romaji": "nemurineko",
    "meaning": "Mèo ngủ (tác phẩm điêu khắc)",
    "topicId": "traffic"
  },
  {
    "id": 1935,
    "word": "左甚五郎",
    "hiragana": "ひだりじんごろう",
    "romaji": "hidarijingorou",
    "meaning": "Hidari Jingoro (nhà điêu khắc nổi tiếng thời Edo)",
    "topicId": "traffic"
  },
  {
    "id": 1936,
    "word": "殺します",
    "hiragana": "ころします",
    "romaji": "koroshimasu",
    "meaning": "giết",
    "topicId": "other"
  },
  {
    "id": 1937,
    "word": "撃ちます",
    "hiragana": "うちます",
    "romaji": "uchimasu",
    "meaning": "bắn",
    "topicId": "other"
  },
  {
    "id": 1938,
    "word": "はねます",
    "hiragana": "はねます",
    "romaji": "hanemasu",
    "meaning": "đâm phải",
    "topicId": "other"
  },
  {
    "id": 1939,
    "word": "衝突します",
    "hiragana": "しょうとつします",
    "romaji": "shoutotsushimasu",
    "meaning": "đâm nhau, xung đột",
    "topicId": "other"
  },
  {
    "id": 1940,
    "word": "追突します",
    "hiragana": "ついとつします",
    "romaji": "tsuitotsushimasu",
    "meaning": "tông từ phía sau",
    "topicId": "other"
  },
  {
    "id": 1941,
    "word": "盗みます",
    "hiragana": "ぬすみます",
    "romaji": "nusumimasu",
    "meaning": "ăn trộm",
    "topicId": "food"
  },
  {
    "id": 1942,
    "word": "誘拐します",
    "hiragana": "ゆうかいします",
    "romaji": "yuukaishimasu",
    "meaning": "bắt cóc",
    "topicId": "other"
  },
  {
    "id": 1943,
    "word": "ハイジャックします",
    "hiragana": "ハイジャックします",
    "romaji": "haijakkushimasu",
    "meaning": "cướp máy bay (hijack)",
    "topicId": "traffic"
  },
  {
    "id": 1944,
    "word": "墜落します",
    "hiragana": "ついらくします",
    "romaji": "tsuirakushimasu",
    "meaning": "rơi (máy bay), rớt",
    "topicId": "traffic"
  },
  {
    "id": 1945,
    "word": "爆発します",
    "hiragana": "ばくはつします",
    "romaji": "bakuhatsushimasu",
    "meaning": "phát nổ, nổ tung",
    "topicId": "anime"
  },
  {
    "id": 1946,
    "word": "助けます",
    "hiragana": "たすけます",
    "romaji": "tasukemasu",
    "meaning": "cứu, giúp",
    "topicId": "other"
  },
  {
    "id": 1947,
    "word": "沈没します",
    "hiragana": "ちんぼつします",
    "romaji": "chinbotsushimasu",
    "meaning": "chìm",
    "topicId": "other"
  },
  {
    "id": 1948,
    "word": "育てます",
    "hiragana": "そだてます",
    "romaji": "sodatemasu",
    "meaning": "nuôi, trồng",
    "topicId": "other"
  },
  {
    "id": 1949,
    "word": "入院します",
    "hiragana": "にゅういんします",
    "romaji": "nyuuinshimasu",
    "meaning": "nhập viện",
    "topicId": "health"
  },
  {
    "id": 1950,
    "word": "退院します",
    "hiragana": "たいいんします",
    "romaji": "taiinshimasu",
    "meaning": "xuất viện",
    "topicId": "health"
  },
  {
    "id": 1951,
    "word": "入れます[電源を～]",
    "hiragana": "いれます[でんげんを～]",
    "romaji": "iremasu [dengen wo~]",
    "meaning": "bật [nguồn điện]",
    "topicId": "traffic"
  },
  {
    "id": 1952,
    "word": "切ります[電源を～]",
    "hiragana": "きります[でんげんを～]",
    "romaji": "kirimasu [dengen wo~]",
    "meaning": "tắt [nguồn điện]",
    "topicId": "traffic"
  },
  {
    "id": 1953,
    "word": "掛けます[かぎを～]",
    "hiragana": "かけます[かぎを～]",
    "romaji": "kakemasu [kagi wo~]",
    "meaning": "khóa [chìa khóa]",
    "topicId": "lifestyle"
  },
  {
    "id": 1954,
    "word": "気持ちがいい",
    "hiragana": "きもちがいい",
    "romaji": "kimochigaii",
    "meaning": "dễ chịu, sảng khoái",
    "topicId": "greetings"
  },
  {
    "id": 1955,
    "word": "気持ちが悪い",
    "hiragana": "きもちがわるい",
    "romaji": "kimochigawarui",
    "meaning": "khó chịu",
    "topicId": "greetings"
  },
  {
    "id": 1956,
    "word": "大きな～",
    "hiragana": "おおきな～",
    "romaji": "ookina~",
    "meaning": "to, lớn ~",
    "topicId": "other"
  },
  {
    "id": 1957,
    "word": "小さな～",
    "hiragana": "ちいさな～",
    "romaji": "chiisana~",
    "meaning": "nhỏ, bé ~",
    "topicId": "other"
  },
  {
    "id": 1958,
    "word": "海岸",
    "hiragana": "かいがん",
    "romaji": "kaigan",
    "meaning": "bờ biển",
    "topicId": "travel"
  },
  {
    "id": 1959,
    "word": "うそ",
    "hiragana": "うそ",
    "romaji": "uso",
    "meaning": "lời nói dối",
    "topicId": "other"
  },
  {
    "id": 1960,
    "word": "書類",
    "hiragana": "しょるい",
    "romaji": "shorui",
    "meaning": "giấy tờ",
    "topicId": "other"
  },
  {
    "id": 1961,
    "word": "電源",
    "hiragana": "でんげん",
    "romaji": "dengen",
    "meaning": "nguồn điện",
    "topicId": "traffic"
  },
  {
    "id": 1962,
    "word": "～製",
    "hiragana": "～せい",
    "romaji": "~sei",
    "meaning": "sản phẩm của ~",
    "topicId": "other"
  },
  {
    "id": 1963,
    "word": "いけない",
    "hiragana": "いけない",
    "romaji": "ikenai",
    "meaning": "ôi, hỏng rồi / không được rồi",
    "topicId": "other"
  },
  {
    "id": 1964,
    "word": "お先に",
    "hiragana": "おさきに",
    "romaji": "osakini",
    "meaning": "xin phép về trước",
    "topicId": "traffic"
  },
  {
    "id": 1965,
    "word": "原爆ドーム",
    "hiragana": "げんばくドーム",
    "romaji": "genbaku do-mu",
    "meaning": "Vòm nguyên tử (ở Hiroshima)",
    "topicId": "other"
  },
  {
    "id": 1966,
    "word": "回覧",
    "hiragana": "かいらん",
    "romaji": "kairan",
    "meaning": "tập thông báo chuyển cho nhau xem",
    "topicId": "greetings"
  },
  {
    "id": 1967,
    "word": "研究室",
    "hiragana": "けんきゅうしつ",
    "romaji": "kenkyuushitsu",
    "meaning": "phòng nghiên cứu",
    "topicId": "lifestyle"
  },
  {
    "id": 1968,
    "word": "きちんと",
    "hiragana": "きちんと",
    "romaji": "kichinto",
    "meaning": "ngọn ngành, tử tế, nghiêm chỉnh",
    "topicId": "other"
  },
  {
    "id": 1969,
    "word": "整理します",
    "hiragana": "せいりします",
    "romaji": "seirishimasu",
    "meaning": "sắp xếp, vứt bỏ đồ thừa",
    "topicId": "lifestyle"
  },
  {
    "id": 1970,
    "word": "～という",
    "hiragana": "～という",
    "romaji": "~toiu",
    "meaning": "có tên là ~, gọi là ~",
    "topicId": "greetings"
  },
  {
    "id": 1971,
    "word": "～冊",
    "hiragana": "～さつ",
    "romaji": "~satsu",
    "meaning": "quyển (đơn vị đếm sách)",
    "topicId": "lifestyle"
  },
  {
    "id": 1972,
    "word": "はんこ",
    "hiragana": "はんこ",
    "romaji": "hanko",
    "meaning": "con dấu",
    "topicId": "other"
  },
  {
    "id": 1973,
    "word": "押します[はんこを～]",
    "hiragana": "おします[はんこを～]",
    "romaji": "oshimasu [hanko wo~]",
    "meaning": "đóng [dấu]",
    "topicId": "other"
  },
  {
    "id": 1974,
    "word": "双子",
    "hiragana": "ふたご",
    "romaji": "futago",
    "meaning": "sinh đôi",
    "topicId": "other"
  },
  {
    "id": 1975,
    "word": "姉妹",
    "hiragana": "しまい",
    "romaji": "shimai",
    "meaning": "chị em",
    "topicId": "greetings"
  },
  {
    "id": 1976,
    "word": "5年生",
    "hiragana": "5ねんせい",
    "romaji": "5 nensei",
    "meaning": "lớp 5",
    "topicId": "other"
  },
  {
    "id": 1977,
    "word": "似ています",
    "hiragana": "にています",
    "romaji": "niteimasu",
    "meaning": "giống",
    "topicId": "other"
  },
  {
    "id": 1978,
    "word": "性格",
    "hiragana": "せいかく",
    "romaji": "seikaku",
    "meaning": "tính cách",
    "topicId": "food"
  },
  {
    "id": 1979,
    "word": "おとなしい",
    "hiragana": "おとなしい",
    "romaji": "otonashii",
    "meaning": "hiền lành",
    "topicId": "other"
  },
  {
    "id": 1980,
    "word": "世話をします",
    "hiragana": "せわをします",
    "romaji": "sewa wo shimasu",
    "meaning": "chăm sóc",
    "topicId": "other"
  },
  {
    "id": 1981,
    "word": "時間がたちます",
    "hiragana": "じかんがたちます",
    "romaji": "jikan ga tachimasu",
    "meaning": "thời gian trôi qua",
    "topicId": "time_weather"
  },
  {
    "id": 1982,
    "word": "～点",
    "hiragana": "～てん",
    "romaji": "~ten",
    "meaning": "điểm",
    "topicId": "traffic"
  },
  {
    "id": 1983,
    "word": "クラス",
    "hiragana": "クラス",
    "romaji": "kurasu",
    "meaning": "lớp học",
    "topicId": "other"
  },
  {
    "id": 1984,
    "word": "けんかします",
    "hiragana": "けんかします",
    "romaji": "kenkashimasu",
    "meaning": "cãi nhau",
    "topicId": "other"
  },
  {
    "id": 1985,
    "word": "ひな祭り",
    "hiragana": "ひなまつり",
    "romaji": "hina matsuri",
    "meaning": "Lễ hội Búp bê (3/3)",
    "topicId": "travel"
  },
  {
    "id": 1986,
    "word": "子供の日",
    "hiragana": "こどものひ",
    "romaji": "kodomo no hi",
    "meaning": "Ngày thiếu nhi (5/5)",
    "topicId": "time_weather"
  },
  {
    "id": 1987,
    "word": "七夕",
    "hiragana": "たなばた",
    "romaji": "tanabata",
    "meaning": "Lễ Thất tịch (7/7)",
    "topicId": "other"
  },
  {
    "id": 1988,
    "word": "お盆",
    "hiragana": "おぼん",
    "romaji": "obon",
    "meaning": "Lễ Obon (rằm tháng 8 âm lịch)",
    "topicId": "time_weather"
  },
  {
    "id": 1989,
    "word": "お月見",
    "hiragana": "おつきみ",
    "romaji": "otsukimi",
    "meaning": "Ngắm trăng",
    "topicId": "food"
  },
  {
    "id": 1990,
    "word": "大みそか",
    "hiragana": "おおみそか",
    "romaji": "oomisoka",
    "meaning": "Đêm giao thừa",
    "topicId": "time_weather"
  },
  {
    "id": 1991,
    "word": "答えます",
    "hiragana": "こたえます",
    "romaji": "kotaemasu",
    "meaning": "trả lời [câu hỏi] (shitsumon ni ~)",
    "topicId": "other"
  },
  {
    "id": 1992,
    "word": "焼けます",
    "hiragana": "やけます",
    "romaji": "yakemasu",
    "meaning": "cháy [nhà], nướng [bánh, thịt] (uchi ga ~, pan ga ~, niku ga ~)",
    "topicId": "shopping"
  },
  {
    "id": 1993,
    "word": "通ります",
    "hiragana": "とおります",
    "romaji": "toorimasu",
    "meaning": "đi qua [đường] (michi o ~)",
    "topicId": "traffic"
  },
  {
    "id": 1994,
    "word": "びっくりします",
    "hiragana": "びっくりします",
    "romaji": "bikkurishimasu",
    "meaning": "ngạc nhiên, giật mình",
    "topicId": "food"
  },
  {
    "id": 1995,
    "word": "がっかりします",
    "hiragana": "がっかりします",
    "romaji": "gakkarishimasu",
    "meaning": "thất vọng",
    "topicId": "other"
  },
  {
    "id": 1996,
    "word": "安心します",
    "hiragana": "あんしんします",
    "romaji": "anshinshimasu",
    "meaning": "yên tâm",
    "topicId": "other"
  },
  {
    "id": 1997,
    "word": "遅刻します",
    "hiragana": "ちこくします",
    "romaji": "chikokushimasu",
    "meaning": "đến chậm, muộn",
    "topicId": "traffic"
  },
  {
    "id": 1998,
    "word": "早退します",
    "hiragana": "そうたいします",
    "romaji": "soutaishimasu",
    "meaning": "về sớm (ra về sớm hơn giờ quy định)",
    "topicId": "traffic"
  },
  {
    "id": 1999,
    "word": "複雑[な]",
    "hiragana": "ふくざつ[な]",
    "romaji": "fukuzatsu [na]",
    "meaning": "phức tạp",
    "topicId": "other"
  },
  {
    "id": 2000,
    "word": "邪魔[な]",
    "hiragana": "じゃま[な]",
    "romaji": "jama [na]",
    "meaning": "cản trở, chiếm diện tích",
    "topicId": "other"
  },
  {
    "id": 2001,
    "word": "汚い",
    "hiragana": "きたない",
    "romaji": "kitanai",
    "meaning": "bẩn",
    "topicId": "other"
  },
  {
    "id": 2002,
    "word": "悲しい",
    "hiragana": "かなしい",
    "romaji": "kanashii",
    "meaning": "buồn, đau thương",
    "topicId": "lifestyle"
  },
  {
    "id": 2003,
    "word": "恥ずかしい",
    "hiragana": "はずかしい",
    "romaji": "hazukashii",
    "meaning": "xấu hổ, thẹn, ngượng",
    "topicId": "other"
  },
  {
    "id": 2004,
    "word": "火事",
    "hiragana": "かじ",
    "romaji": "kaji",
    "meaning": "hỏa hoạn",
    "topicId": "health"
  },
  {
    "id": 2005,
    "word": "事故",
    "hiragana": "じこ",
    "romaji": "jiko",
    "meaning": "tai nạn, sự cố",
    "topicId": "health"
  },
  {
    "id": 2006,
    "word": "お見合い",
    "hiragana": "おみあい",
    "romaji": "omiai",
    "meaning": "xem mặt (kết hôn)",
    "topicId": "greetings"
  },
  {
    "id": 2007,
    "word": "電話代",
    "hiragana": "でんわだい",
    "romaji": "denwadai",
    "meaning": "tiền điện thoại, phí điện thoại",
    "topicId": "shopping"
  },
  {
    "id": 2008,
    "word": "フロント",
    "hiragana": "フロント",
    "romaji": "furonto",
    "meaning": "bộ phận tiếp tân, thường trực",
    "topicId": "lifestyle"
  },
  {
    "id": 2009,
    "word": "～号室",
    "hiragana": "～ごうしつ",
    "romaji": "~goushitsu",
    "meaning": "phòng số ~",
    "topicId": "lifestyle"
  },
  {
    "id": 2010,
    "word": "汗",
    "hiragana": "あせ",
    "romaji": "ase",
    "meaning": "mồ hôi (～を かきます：ra mồ hôi)",
    "topicId": "other"
  },
  {
    "id": 2011,
    "word": "タオル",
    "hiragana": "タオル",
    "romaji": "taoru",
    "meaning": "khăn lau, khăn tắm",
    "topicId": "food"
  },
  {
    "id": 2012,
    "word": "せっけん",
    "hiragana": "せっけん",
    "romaji": "sekken",
    "meaning": "xà phòng",
    "topicId": "lifestyle"
  },
  {
    "id": 2013,
    "word": "大勢",
    "hiragana": "おおぜい",
    "romaji": "oozei",
    "meaning": "nhiều người",
    "topicId": "other"
  },
  {
    "id": 2014,
    "word": "お疲れさまでした",
    "hiragana": "おつかれさまでした",
    "romaji": "otsukaresamadeshita",
    "meaning": "Chắc anh chị đã mệt rồi. (câu chào dùng để nói với người làm cùng)",
    "topicId": "greetings"
  },
  {
    "id": 2015,
    "word": "伺います",
    "hiragana": "うかがいます",
    "romaji": "ukagaimasu",
    "meaning": "Tôi đến thăm. (khiêm nhường ngữ của ikimasu)",
    "topicId": "traffic"
  },
  {
    "id": 2016,
    "word": "途中で",
    "hiragana": "とちゅうで",
    "romaji": "tochuu de",
    "meaning": "giữa đường, dọc đường, giữa chừng",
    "topicId": "traffic"
  },
  {
    "id": 2017,
    "word": "トラック",
    "hiragana": "トラック",
    "romaji": "torakku",
    "meaning": "xe tải",
    "topicId": "traffic"
  },
  {
    "id": 2018,
    "word": "ぶつかります",
    "hiragana": "ぶつかります",
    "romaji": "butsukarimasu",
    "meaning": "đâm, va chạm",
    "topicId": "time_weather"
  },
  {
    "id": 2019,
    "word": "並びます",
    "hiragana": "ならびます",
    "romaji": "narabimasu",
    "meaning": "xếp hàng",
    "topicId": "other"
  },
  {
    "id": 2020,
    "word": "大人",
    "hiragana": "おとな",
    "romaji": "otona",
    "meaning": "người lớn",
    "topicId": "greetings"
  },
  {
    "id": 2021,
    "word": "洋服",
    "hiragana": "ようふく",
    "romaji": "youfuku",
    "meaning": "âu phục, quần áo tây",
    "topicId": "other"
  },
  {
    "id": 2022,
    "word": "西洋化します",
    "hiragana": "せいようかします",
    "romaji": "seiyoukashimasu",
    "meaning": "Tây âu hóa",
    "topicId": "other"
  },
  {
    "id": 2023,
    "word": "今では",
    "hiragana": "いまでは",
    "romaji": "ima de wa",
    "meaning": "bây giờ thì",
    "topicId": "time_weather"
  },
  {
    "id": 2024,
    "word": "成人式",
    "hiragana": "せいじんしき",
    "romaji": "seijinshiki",
    "meaning": "Lễ trưởng thành",
    "topicId": "other"
  },
  {
    "id": 2025,
    "word": "うらやましい",
    "hiragana": "うらやましい",
    "romaji": "urayamashii",
    "meaning": "ghen tỵ",
    "topicId": "other"
  },
  {
    "id": 2026,
    "word": "懐かしい",
    "hiragana": "なつかしい",
    "romaji": "natsukashii",
    "meaning": "nhớ, luyến tiếc, hồi tưởng",
    "topicId": "travel"
  },
  {
    "id": 2027,
    "word": "びっくりする",
    "hiragana": "びっくりする",
    "romaji": "bikkurisuru",
    "meaning": "giật mình (thể ngắn)",
    "topicId": "food"
  },
  {
    "id": 2028,
    "word": "がっかりする",
    "hiragana": "がっかりする",
    "romaji": "gakkarisuru",
    "meaning": "thất vọng (thể ngắn)",
    "topicId": "other"
  },
  {
    "id": 2029,
    "word": "うっとりする",
    "hiragana": "うっとりする",
    "romaji": "uttorisuru",
    "meaning": "say đắm, mải mê",
    "topicId": "other"
  },
  {
    "id": 2030,
    "word": "いらいらする",
    "hiragana": "いらいらする",
    "romaji": "irairasuru",
    "meaning": "sốt ruột",
    "topicId": "health"
  },
  {
    "id": 2031,
    "word": "どきどきする",
    "hiragana": "どきどきする",
    "romaji": "dokidokisuru",
    "meaning": "hồi hộp, tim đập thình thịch",
    "topicId": "travel"
  },
  {
    "id": 2032,
    "word": "はらはらする",
    "hiragana": "はらはらする",
    "romaji": "haraharasuru",
    "meaning": "lo lắng, phấp phỏng",
    "topicId": "other"
  },
  {
    "id": 2033,
    "word": "わくわくする",
    "hiragana": "わくわくする",
    "romaji": "wakuwakusuru",
    "meaning": "hồi hộp (vì vui), háo hức",
    "topicId": "travel"
  },
  {
    "id": 2034,
    "word": "数えます",
    "hiragana": "かぞえます",
    "romaji": "kazoemasu",
    "meaning": "đếm",
    "topicId": "other"
  },
  {
    "id": 2035,
    "word": "測ります",
    "hiragana": "はかります",
    "romaji": "hakarimasu",
    "meaning": "đo, cân (measure, weigh)",
    "topicId": "other"
  },
  {
    "id": 2036,
    "word": "確かめます",
    "hiragana": "たしかめます",
    "romaji": "tashikamemasu",
    "meaning": "xác nhận, kiểm tra",
    "topicId": "other"
  },
  {
    "id": 2037,
    "word": "出発します",
    "hiragana": "しゅっぱつします",
    "romaji": "shuppatsushimasu",
    "meaning": "xuất phát, khởi hành",
    "topicId": "anime"
  },
  {
    "id": 2038,
    "word": "到着します",
    "hiragana": "とうちゃくします",
    "romaji": "touchakushimasu",
    "meaning": "đến, đến nơi",
    "topicId": "traffic"
  },
  {
    "id": 2039,
    "word": "酔います",
    "hiragana": "よいます",
    "romaji": "yoimasu",
    "meaning": "say [rượu]",
    "topicId": "food"
  },
  {
    "id": 2040,
    "word": "危険[な]",
    "hiragana": "きけん[な]",
    "romaji": "kiken [na]",
    "meaning": "nguy hiểm",
    "topicId": "other"
  },
  {
    "id": 2041,
    "word": "忘年会",
    "hiragana": "ぼうねんかい",
    "romaji": "bounenkai",
    "meaning": "tiệc tất niên",
    "topicId": "other"
  },
  {
    "id": 2042,
    "word": "新年会",
    "hiragana": "しんねんかい",
    "romaji": "shinnenkai",
    "meaning": "tiệc tân niên",
    "topicId": "other"
  },
  {
    "id": 2043,
    "word": "二次会",
    "hiragana": "にじかい",
    "romaji": "nijikai",
    "meaning": "tăng hai, bữa tiệc thứ hai",
    "topicId": "food"
  },
  {
    "id": 2044,
    "word": "大会",
    "hiragana": "たいかい",
    "romaji": "taikai",
    "meaning": "đại hội, cuộc thi",
    "topicId": "other"
  },
  {
    "id": 2045,
    "word": "マラソン",
    "hiragana": "マラソン",
    "romaji": "marason",
    "meaning": "marathon",
    "topicId": "health"
  },
  {
    "id": 2046,
    "word": "コンテスト",
    "hiragana": "コンテスト",
    "romaji": "kontesuto",
    "meaning": "cuộc thi",
    "topicId": "other"
  },
  {
    "id": 2047,
    "word": "表",
    "hiragana": "おもて",
    "romaji": "omote",
    "meaning": "mặt phải, mặt trước",
    "topicId": "other"
  },
  {
    "id": 2048,
    "word": "裏",
    "hiragana": "うら",
    "romaji": "ura",
    "meaning": "mặt trái, mặt sau",
    "topicId": "other"
  },
  {
    "id": 2049,
    "word": "返事",
    "hiragana": "へんじ",
    "romaji": "henji",
    "meaning": "hồi âm, trả lời",
    "topicId": "travel"
  },
  {
    "id": 2050,
    "word": "申し込み",
    "hiragana": "もうしこみ",
    "romaji": "moushikomi",
    "meaning": "đăng ký",
    "topicId": "food"
  },
  {
    "id": 2051,
    "word": "本当",
    "hiragana": "ほんとう",
    "romaji": "hontou",
    "meaning": "sự thật, thật",
    "topicId": "other"
  },
  {
    "id": 2052,
    "word": "間違い",
    "hiragana": "まちがい",
    "romaji": "machigai",
    "meaning": "sai, nhầm lẫn",
    "topicId": "other"
  },
  {
    "id": 2053,
    "word": "傷",
    "hiragana": "きず",
    "romaji": "kizu",
    "meaning": "vết thương, vết xước",
    "topicId": "lifestyle"
  },
  {
    "id": 2054,
    "word": "長さ",
    "hiragana": "ながさ",
    "romaji": "nagasa",
    "meaning": "chiều dài",
    "topicId": "time_weather"
  },
  {
    "id": 2055,
    "word": "重さ",
    "hiragana": "おもさ",
    "romaji": "omosa",
    "meaning": "trọng lượng, cân nặng",
    "topicId": "other"
  },
  {
    "id": 2056,
    "word": "高さ",
    "hiragana": "たかさ",
    "romaji": "takasa",
    "meaning": "chiều cao",
    "topicId": "time_weather"
  },
  {
    "id": 2057,
    "word": "大きさ",
    "hiragana": "おおきさ",
    "romaji": "ookisa",
    "meaning": "kích cỡ",
    "topicId": "other"
  },
  {
    "id": 2058,
    "word": "[-]便",
    "hiragana": "[-]びん",
    "romaji": "[-]bin",
    "meaning": "chuyến bay [số -]",
    "topicId": "traffic"
  },
  {
    "id": 2059,
    "word": "～号",
    "hiragana": "～ごう",
    "romaji": "~gou",
    "meaning": "số ~ [tàu, bão]",
    "topicId": "traffic"
  },
  {
    "id": 2060,
    "word": "～本",
    "hiragana": "～ほん",
    "romaji": "~hon",
    "meaning": "cái, cây, chiếc (đếm vật dài)",
    "topicId": "food"
  },
  {
    "id": 2061,
    "word": "～杯",
    "hiragana": "～はい",
    "romaji": "~hai",
    "meaning": "chén, cốc, ly (đếm chất lỏng)",
    "topicId": "other"
  },
  {
    "id": 2062,
    "word": "～キロ",
    "hiragana": "～キロ",
    "romaji": "~kiro",
    "meaning": "kilogram, kilometer",
    "topicId": "other"
  },
  {
    "id": 2063,
    "word": "～センチ",
    "hiragana": "～センチ",
    "romaji": "~senchi",
    "meaning": "centimeter",
    "topicId": "other"
  },
  {
    "id": 2064,
    "word": "～ミリ",
    "hiragana": "～ミリ",
    "romaji": "~miri",
    "meaning": "millimeter",
    "topicId": "other"
  },
  {
    "id": 2065,
    "word": "～以上",
    "hiragana": "～いじょう",
    "romaji": "~ijou",
    "meaning": "~ trở lên, trên ~",
    "topicId": "other"
  },
  {
    "id": 2066,
    "word": "～以下",
    "hiragana": "～いか",
    "romaji": "~ika",
    "meaning": "~ trở xuống, dưới ~",
    "topicId": "food"
  },
  {
    "id": 2067,
    "word": "事件",
    "hiragana": "じけん",
    "romaji": "jiken",
    "meaning": "sự việc, vụ án",
    "topicId": "work"
  },
  {
    "id": 2068,
    "word": "オートバイ",
    "hiragana": "オートバイ",
    "romaji": "ootobai",
    "meaning": "xe máy",
    "topicId": "traffic"
  },
  {
    "id": 2069,
    "word": "爆弾",
    "hiragana": "ばくだん",
    "romaji": "bakudan",
    "meaning": "bom",
    "topicId": "other"
  },
  {
    "id": 2070,
    "word": "積みます",
    "hiragana": "つみます",
    "romaji": "tsumimasu",
    "meaning": "chất lên, xếp lên",
    "topicId": "other"
  },
  {
    "id": 2071,
    "word": "離れた",
    "hiragana": "はなれた",
    "romaji": "hanareta",
    "meaning": "xa, cách xa",
    "topicId": "food"
  },
  {
    "id": 2072,
    "word": "急に",
    "hiragana": "きゅうに",
    "romaji": "kyuumi",
    "meaning": "đột nhiên, bất ngờ",
    "topicId": "other"
  },
  {
    "id": 2073,
    "word": "動かします",
    "hiragana": "うごかします",
    "romaji": "ugokashimasu",
    "meaning": "khởi động, làm chuyển động",
    "topicId": "work"
  },
  {
    "id": 2074,
    "word": "犯人",
    "hiragana": "はんにん",
    "romaji": "hannin",
    "meaning": "thủ phạm, kẻ phạm tội",
    "topicId": "time_weather"
  },
  {
    "id": 2075,
    "word": "手に入れます",
    "hiragana": "てにいれます",
    "romaji": "teniiremasu",
    "meaning": "có được, lấy được, đoạt được",
    "topicId": "other"
  },
  {
    "id": 2076,
    "word": "今でも",
    "hiragana": "いまでも",
    "romaji": "imademo",
    "meaning": "ngay cả bây giờ",
    "topicId": "traffic"
  },
  {
    "id": 2077,
    "word": "うわさします",
    "hiragana": "うわさします",
    "romaji": "uwasashimasu",
    "meaning": "đồn đại",
    "topicId": "lifestyle"
  },
  {
    "id": 2078,
    "word": "面積",
    "hiragana": "めんせき",
    "romaji": "menseki",
    "meaning": "Diện tích",
    "topicId": "other"
  },
  {
    "id": 2079,
    "word": "平方センチメートル",
    "hiragana": "へいほうセンチメートル",
    "romaji": "heihousenchime-toru",
    "meaning": "cm2",
    "topicId": "other"
  },
  {
    "id": 2080,
    "word": "平方メートル",
    "hiragana": "へいほうメートル",
    "romaji": "heihoume-toru",
    "meaning": "m2",
    "topicId": "other"
  },
  {
    "id": 2081,
    "word": "平方キロメートル",
    "hiragana": "へいほうキロメートル",
    "romaji": "heihoukirome-toru",
    "meaning": "km2",
    "topicId": "other"
  },
  {
    "id": 2082,
    "word": "体積",
    "hiragana": "たいせき",
    "romaji": "taiseki",
    "meaning": "Thể tích",
    "topicId": "other"
  },
  {
    "id": 2083,
    "word": "容積",
    "hiragana": "ようせき",
    "romaji": "youseki",
    "meaning": "Dung tích",
    "topicId": "other"
  },
  {
    "id": 2084,
    "word": "立方センチメートル",
    "hiragana": "りっぽうセンチメートル",
    "romaji": "rippousenchime-toru",
    "meaning": "cm3",
    "topicId": "other"
  },
  {
    "id": 2085,
    "word": "立方メートル",
    "hiragana": "りっぽうメートル",
    "romaji": "rippoume-toru",
    "meaning": "m3",
    "topicId": "other"
  },
  {
    "id": 2086,
    "word": "ミリリットル",
    "hiragana": "ミリリットル",
    "romaji": "miririttoru",
    "meaning": "ml",
    "topicId": "other"
  },
  {
    "id": 2087,
    "word": "シーシー",
    "hiragana": "シーシー",
    "romaji": "cc",
    "meaning": "cc",
    "topicId": "other"
  },
  {
    "id": 2088,
    "word": "リットル",
    "hiragana": "リットル",
    "romaji": "rittoru",
    "meaning": "l",
    "topicId": "other"
  },
  {
    "id": 2089,
    "word": "計算",
    "hiragana": "けいさん",
    "romaji": "keisan",
    "meaning": "Tính toán",
    "topicId": "other"
  },
  {
    "id": 2090,
    "word": "たす",
    "hiragana": "たす",
    "romaji": "tasu",
    "meaning": "cộng (+)",
    "topicId": "other"
  },
  {
    "id": 2091,
    "word": "かける",
    "hiragana": "かける",
    "romaji": "kakeru",
    "meaning": "nhân (x)",
    "topicId": "other"
  },
  {
    "id": 2092,
    "word": "わる",
    "hiragana": "わる",
    "romaji": "waru",
    "meaning": "chia (:)",
    "topicId": "other"
  },
  {
    "id": 2093,
    "word": "直線",
    "hiragana": "ちょくせん",
    "romaji": "chokusen",
    "meaning": "đường thẳng",
    "topicId": "traffic"
  },
  {
    "id": 2094,
    "word": "曲線",
    "hiragana": "きょくせん",
    "romaji": "kyokusen",
    "meaning": "đường cong",
    "topicId": "traffic"
  },
  {
    "id": 2095,
    "word": "点線",
    "hiragana": "てんせん",
    "romaji": "tensen",
    "meaning": "đường chấm",
    "topicId": "traffic"
  },
  {
    "id": 2096,
    "word": "円",
    "hiragana": "えん",
    "romaji": "en",
    "meaning": "hình tròn",
    "topicId": "other"
  },
  {
    "id": 2097,
    "word": "三角[形]",
    "hiragana": "さんかく[けい]",
    "romaji": "sankaku[kei]",
    "meaning": "hình tam giác",
    "topicId": "shopping"
  },
  {
    "id": 2098,
    "word": "四角[形]",
    "hiragana": "しかく[けい]",
    "romaji": "shikaku[kei]",
    "meaning": "hình tứ giác",
    "topicId": "shopping"
  },
  {
    "id": 2099,
    "word": "模様",
    "hiragana": "もよう",
    "romaji": "moyou",
    "meaning": "Hoa văn",
    "topicId": "food"
  },
  {
    "id": 2100,
    "word": "縦じま",
    "hiragana": "たてじま",
    "romaji": "tatejima",
    "meaning": "sọc dọc",
    "topicId": "other"
  },
  {
    "id": 2101,
    "word": "横じま",
    "hiragana": "よこじま",
    "romaji": "yokojima",
    "meaning": "sọc ngang",
    "topicId": "traffic"
  },
  {
    "id": 2102,
    "word": "チェック",
    "hiragana": "チェック",
    "romaji": "chekku",
    "meaning": "kẻ ca rô",
    "topicId": "other"
  },
  {
    "id": 2103,
    "word": "水玉",
    "hiragana": "みずたま",
    "romaji": "mizutama",
    "meaning": "chấm bi",
    "topicId": "time_weather"
  },
  {
    "id": 2104,
    "word": "花柄",
    "hiragana": "はながら",
    "romaji": "hanagara",
    "meaning": "hoa văn",
    "topicId": "food"
  },
  {
    "id": 2105,
    "word": "無地",
    "hiragana": "むじ",
    "romaji": "muji",
    "meaning": "trơn (không có hoa văn)",
    "topicId": "food"
  },
  {
    "id": 2106,
    "word": "くださいます",
    "hiragana": "くださいます",
    "romaji": "kudasaimasu",
    "meaning": "cho, tặng (tôn kính ngữ của kuremasu)",
    "topicId": "greetings"
  },
  {
    "id": 2107,
    "word": "取り替えます",
    "hiragana": "とりかえます",
    "romaji": "torikaemasu",
    "meaning": "đổi, thay",
    "topicId": "other"
  },
  {
    "id": 2108,
    "word": "親切にします",
    "hiragana": "しんせつにします",
    "romaji": "shinsetsu ni shimasu",
    "meaning": "đối xử thân thiện, giúp đỡ",
    "topicId": "greetings"
  },
  {
    "id": 2109,
    "word": "かわいい",
    "hiragana": "かわいい",
    "romaji": "kawaii",
    "meaning": "xinh, đáng yêu",
    "topicId": "other"
  },
  {
    "id": 2110,
    "word": "お祝い",
    "hiragana": "おいわい",
    "romaji": "oiwai",
    "meaning": "lời chúc mừng, quà mừng",
    "topicId": "travel"
  },
  {
    "id": 2111,
    "word": "興味",
    "hiragana": "きょうみ",
    "romaji": "kyoumi",
    "meaning": "hứng thú, quan tâm (～に 興味が あります)",
    "topicId": "time_weather"
  },
  {
    "id": 2112,
    "word": "情報",
    "hiragana": "じょうほう",
    "romaji": "jouhou",
    "meaning": "thông tin",
    "topicId": "other"
  },
  {
    "id": 2113,
    "word": "文法",
    "hiragana": "ぶんぽう",
    "romaji": "bunpou",
    "meaning": "ngữ pháp",
    "topicId": "other"
  },
  {
    "id": 2114,
    "word": "発音",
    "hiragana": "はつおん",
    "romaji": "hatsuon",
    "meaning": "phát âm",
    "topicId": "anime"
  },
  {
    "id": 2115,
    "word": "猿",
    "hiragana": "さる",
    "romaji": "saru",
    "meaning": "con khỉ",
    "topicId": "other"
  },
  {
    "id": 2116,
    "word": "えさ",
    "hiragana": "えさ",
    "romaji": "esa",
    "meaning": "đồ ăn cho động vật",
    "topicId": "food"
  },
  {
    "id": 2117,
    "word": "おもちゃ",
    "hiragana": "おもちゃ",
    "romaji": "omocha",
    "meaning": "đồ chơi",
    "topicId": "lifestyle"
  },
  {
    "id": 2118,
    "word": "絵本",
    "hiragana": "えほん",
    "romaji": "ehon",
    "meaning": "truyện tranh",
    "topicId": "greetings"
  },
  {
    "id": 2119,
    "word": "絵はがき",
    "hiragana": "えはがき",
    "romaji": "ehagaki",
    "meaning": "bưu ảnh",
    "topicId": "travel"
  },
  {
    "id": 2120,
    "word": "ドライバー",
    "hiragana": "ドライバー",
    "romaji": "doraiba-",
    "meaning": "cái tua-vít",
    "topicId": "food"
  },
  {
    "id": 2121,
    "word": "ハンカチ",
    "hiragana": "ハンカチ",
    "romaji": "hankachi",
    "meaning": "khăn mùi xoa",
    "topicId": "food"
  },
  {
    "id": 2122,
    "word": "指輪",
    "hiragana": "ゆびわ",
    "romaji": "yubiwa",
    "meaning": "cái nhẫn",
    "topicId": "food"
  },
  {
    "id": 2123,
    "word": "バッグ",
    "hiragana": "バッグ",
    "romaji": "baggu",
    "meaning": "cái túi",
    "topicId": "shopping"
  },
  {
    "id": 2124,
    "word": "祖父",
    "hiragana": "そふ",
    "romaji": "sofu",
    "meaning": "ông (của mình)",
    "topicId": "food"
  },
  {
    "id": 2125,
    "word": "祖母",
    "hiragana": "そぼ",
    "romaji": "sobo",
    "meaning": "bà (của mình)",
    "topicId": "food"
  },
  {
    "id": 2126,
    "word": "孫",
    "hiragana": "まご",
    "romaji": "mago",
    "meaning": "cháu",
    "topicId": "other"
  },
  {
    "id": 2127,
    "word": "おじ",
    "hiragana": "おじ",
    "romaji": "oji",
    "meaning": "chú, bác, cậu (của mình)",
    "topicId": "food"
  },
  {
    "id": 2128,
    "word": "おじさん",
    "hiragana": "おじさん",
    "romaji": "ojisan",
    "meaning": "chú, bác, cậu (của người khác)",
    "topicId": "greetings"
  },
  {
    "id": 2129,
    "word": "おば",
    "hiragana": "おば",
    "romaji": "oba",
    "meaning": "cô, dì (của mình)",
    "topicId": "food"
  },
  {
    "id": 2130,
    "word": "おばさん",
    "hiragana": "おばさん",
    "romaji": "obasan",
    "meaning": "cô, dì (của người khác)",
    "topicId": "greetings"
  },
  {
    "id": 2131,
    "word": "おととし",
    "hiragana": "おととし",
    "romaji": "ototoshi",
    "meaning": "năm kia",
    "topicId": "time_weather"
  },
  {
    "id": 2132,
    "word": "はあ",
    "hiragana": "はあ",
    "romaji": "haa",
    "meaning": "Vâng, ừ",
    "topicId": "other"
  },
  {
    "id": 2133,
    "word": "申し訳ありません",
    "hiragana": "もうしわけありません",
    "romaji": "moushiwakearimasen",
    "meaning": "Xin lỗi",
    "topicId": "greetings"
  },
  {
    "id": 2134,
    "word": "預かります",
    "hiragana": "あずかります",
    "romaji": "azukarimasu",
    "meaning": "giữ giúp, giữ hộ",
    "topicId": "other"
  },
  {
    "id": 2135,
    "word": "先日",
    "hiragana": "せんじつ",
    "romaji": "senjitsu",
    "meaning": "hôm trước",
    "topicId": "time_weather"
  },
  {
    "id": 2136,
    "word": "助かります",
    "hiragana": "たすかります",
    "romaji": "tasukarimasu",
    "meaning": "may có anh/chị giúp",
    "topicId": "greetings"
  },
  {
    "id": 2137,
    "word": "昔話",
    "hiragana": "むかしばなし",
    "romaji": "mukashibanashi",
    "meaning": "chuyện cổ tích",
    "topicId": "other"
  },
  {
    "id": 2138,
    "word": "男",
    "hiragana": "おとこ",
    "romaji": "otoko",
    "meaning": "người đàn ông",
    "topicId": "greetings"
  },
  {
    "id": 2139,
    "word": "いじめます",
    "hiragana": "いじめます",
    "romaji": "ijimemasu",
    "meaning": "bắt nạt",
    "topicId": "other"
  },
  {
    "id": 2140,
    "word": "亀",
    "hiragana": "かめ",
    "romaji": "kame",
    "meaning": "con rùa",
    "topicId": "other"
  },
  {
    "id": 2141,
    "word": "お城",
    "hiragana": "おしろ",
    "romaji": "oshiro",
    "meaning": "lâu đài",
    "topicId": "other"
  },
  {
    "id": 2142,
    "word": "お姫様",
    "hiragana": "おひめさま",
    "romaji": "ohimesama",
    "meaning": "công chúa",
    "topicId": "other"
  },
  {
    "id": 2143,
    "word": "楽しく",
    "hiragana": "たのしく",
    "romaji": "tanoshiku",
    "meaning": "vui vẻ",
    "topicId": "other"
  },
  {
    "id": 2144,
    "word": "暮らします",
    "hiragana": "くらします",
    "romaji": "kurashimasu",
    "meaning": "sống, sinh hoạt",
    "topicId": "health"
  },
  {
    "id": 2145,
    "word": "陸",
    "hiragana": "りく",
    "romaji": "riku",
    "meaning": "đất liền",
    "topicId": "other"
  },
  {
    "id": 2146,
    "word": "煙",
    "hiragana": "けむり",
    "romaji": "kemuri",
    "meaning": "khói",
    "topicId": "other"
  },
  {
    "id": 2147,
    "word": "真っ白[な]",
    "hiragana": "まっしろ[な]",
    "romaji": "masshiro[na]",
    "meaning": "trắng toát",
    "topicId": "other"
  },
  {
    "id": 2148,
    "word": "中身",
    "hiragana": "なかみ",
    "romaji": "nakami",
    "meaning": "nội dung, cái ở bên trong",
    "topicId": "food"
  },
  {
    "id": 2149,
    "word": "宅急便",
    "hiragana": "たくはいびん",
    "romaji": "takuhaibin",
    "meaning": "dịch vụ chuyển đồ tận nhà",
    "topicId": "lifestyle"
  },
  {
    "id": 2150,
    "word": "届けます",
    "hiragana": "とどけます",
    "romaji": "todokemasu",
    "meaning": "gửi đến, chuyển đến",
    "topicId": "traffic"
  },
  {
    "id": 2151,
    "word": "民宿",
    "hiragana": "みんしゅく",
    "romaji": "minshuku",
    "meaning": "nhà khách",
    "topicId": "shopping"
  },
  {
    "id": 2152,
    "word": "公民館",
    "hiragana": "こうみんかん",
    "romaji": "kouminkan",
    "meaning": "nhà văn hóa công cộng",
    "topicId": "food"
  },
  {
    "id": 2153,
    "word": "バザー",
    "hiragana": "バザー",
    "romaji": "baza-",
    "meaning": "chợ bán hàng cũ",
    "topicId": "shopping"
  },
  {
    "id": 2154,
    "word": "レンタル",
    "hiragana": "レンタル",
    "romaji": "rentaru",
    "meaning": "cho thuê",
    "topicId": "time_weather"
  },
  {
    "id": 2155,
    "word": "何でも屋",
    "hiragana": "なんでもや",
    "romaji": "nandemoya",
    "meaning": "dịch vụ làm giúp mọi thứ",
    "topicId": "work"
  },
  {
    "id": 2156,
    "word": "寺",
    "hiragana": "てら",
    "romaji": "tera",
    "meaning": "chùa",
    "topicId": "travel"
  },
  {
    "id": 2157,
    "word": "禅",
    "hiragana": "ぜん",
    "romaji": "zen",
    "meaning": "thiền",
    "topicId": "other"
  },
  {
    "id": 2158,
    "word": "精進料理",
    "hiragana": "しょうじんりょうり",
    "romaji": "shoujinryouri",
    "meaning": "đồ ăn chay (của đạo phật)",
    "topicId": "food"
  },
  {
    "id": 2159,
    "word": "包みます",
    "hiragana": "つつみます",
    "romaji": "tsutsumimasu",
    "meaning": "bọc, gói",
    "topicId": "other"
  },
  {
    "id": 2160,
    "word": "沸かします",
    "hiragana": "わかします",
    "romaji": "wakashimasu",
    "meaning": "đun sôi",
    "topicId": "other"
  },
  {
    "id": 2161,
    "word": "混ぜます",
    "hiragana": "まぜます",
    "romaji": "mazemasu",
    "meaning": "trộn",
    "topicId": "other"
  },
  {
    "id": 2162,
    "word": "計算します",
    "hiragana": "けいさんします",
    "romaji": "keisanshimasu",
    "meaning": "tính, tính toán",
    "topicId": "other"
  },
  {
    "id": 2163,
    "word": "薄い",
    "hiragana": "うすい",
    "romaji": "usui",
    "meaning": "mỏng",
    "topicId": "other"
  },
  {
    "id": 2164,
    "word": "教育",
    "hiragana": "きょういく",
    "romaji": "kyouiku",
    "meaning": "giáo dục",
    "topicId": "shopping"
  },
  {
    "id": 2165,
    "word": "文化",
    "hiragana": "ぶんか",
    "romaji": "bunka",
    "meaning": "văn hóa",
    "topicId": "food"
  },
  {
    "id": 2166,
    "word": "社会",
    "hiragana": "しゃかい",
    "romaji": "shakai",
    "meaning": "xã hội",
    "topicId": "other"
  },
  {
    "id": 2167,
    "word": "法律",
    "hiragana": "ほうりつ",
    "romaji": "houritsu",
    "meaning": "pháp luật",
    "topicId": "other"
  },
  {
    "id": 2168,
    "word": "戦争",
    "hiragana": "せんそう",
    "romaji": "sensou",
    "meaning": "chiến tranh",
    "topicId": "greetings"
  },
  {
    "id": 2169,
    "word": "平和",
    "hiragana": "へいわ",
    "romaji": "heiwa",
    "meaning": "hòa bình",
    "topicId": "other"
  },
  {
    "id": 2170,
    "word": "目的",
    "hiragana": "もくてき",
    "romaji": "mokuteki",
    "meaning": "mục đích",
    "topicId": "other"
  },
  {
    "id": 2171,
    "word": "安全",
    "hiragana": "あんぜん",
    "romaji": "anzen",
    "meaning": "an toàn",
    "topicId": "other"
  },
  {
    "id": 2172,
    "word": "論文",
    "hiragana": "ろんぶん",
    "romaji": "ronbun",
    "meaning": "luận văn, tiểu luận",
    "topicId": "food"
  },
  {
    "id": 2173,
    "word": "関係",
    "hiragana": "かんけい",
    "romaji": "kankei",
    "meaning": "quan hệ",
    "topicId": "time_weather"
  },
  {
    "id": 2174,
    "word": "ミキサー",
    "hiragana": "ミキサー",
    "romaji": "mikisa-",
    "meaning": "máy xay sinh tố",
    "topicId": "traffic"
  },
  {
    "id": 2175,
    "word": "缶詰",
    "hiragana": "かんづめ",
    "romaji": "kanzume",
    "meaning": "đồ hộp",
    "topicId": "lifestyle"
  },
  {
    "id": 2176,
    "word": "ふろしき",
    "hiragana": "ふろしき",
    "romaji": "furoshiki",
    "meaning": "khăn gói đồ",
    "topicId": "food"
  },
  {
    "id": 2177,
    "word": "そろばん",
    "hiragana": "そろばん",
    "romaji": "soroban",
    "meaning": "bàn tính",
    "topicId": "lifestyle"
  },
  {
    "id": 2178,
    "word": "体温計",
    "hiragana": "たいおんけい",
    "romaji": "taionkei",
    "meaning": "cặp nhiệt độ",
    "topicId": "other"
  },
  {
    "id": 2179,
    "word": "石",
    "hiragana": "いし",
    "romaji": "ishi",
    "meaning": "đá, hòn đá",
    "topicId": "other"
  },
  {
    "id": 2180,
    "word": "ピラミッド",
    "hiragana": "ピラミッド",
    "romaji": "piramiddo",
    "meaning": "kim tự tháp",
    "topicId": "other"
  },
  {
    "id": 2181,
    "word": "データ",
    "hiragana": "データ",
    "romaji": "de-ta",
    "meaning": "dữ liệu",
    "topicId": "other"
  },
  {
    "id": 2182,
    "word": "ファイル",
    "hiragana": "ファイル",
    "romaji": "fairu",
    "meaning": "file",
    "topicId": "other"
  },
  {
    "id": 2183,
    "word": "なぜ",
    "hiragana": "なぜ",
    "romaji": "naze",
    "meaning": "tại sao",
    "topicId": "other"
  },
  {
    "id": 2184,
    "word": "国連",
    "hiragana": "こくれん",
    "romaji": "kokuren",
    "meaning": "Liên hợp quốc",
    "topicId": "other"
  },
  {
    "id": 2185,
    "word": "ローン",
    "hiragana": "ローン",
    "romaji": "ro-n",
    "meaning": "khoản vay (loan)",
    "topicId": "health"
  },
  {
    "id": 2186,
    "word": "セット",
    "hiragana": "セット",
    "romaji": "setto",
    "meaning": "bộ (set)",
    "topicId": "other"
  },
  {
    "id": 2187,
    "word": "あと",
    "hiragana": "あと",
    "romaji": "ato",
    "meaning": "còn lại",
    "topicId": "other"
  },
  {
    "id": 2188,
    "word": "カップラーメン",
    "hiragana": "カップラーメン",
    "romaji": "kappura-men",
    "meaning": "mì cốc",
    "topicId": "food"
  },
  {
    "id": 2189,
    "word": "インスタントラーメン",
    "hiragana": "インスタントラーメン",
    "romaji": "insutantora-men",
    "meaning": "mì ăn liền",
    "topicId": "food"
  },
  {
    "id": 2190,
    "word": "食品",
    "hiragana": "しょくひん",
    "romaji": "shokuhin",
    "meaning": "thực phẩm",
    "topicId": "other"
  },
  {
    "id": 2191,
    "word": "調査",
    "hiragana": "ちょうさ",
    "romaji": "chousa",
    "meaning": "điều tra, khảo sát",
    "topicId": "traffic"
  },
  {
    "id": 2192,
    "word": "カップ",
    "hiragana": "カップ",
    "romaji": "kappu",
    "meaning": "cái cốc",
    "topicId": "food"
  },
  {
    "id": 2193,
    "word": "～の代わり",
    "hiragana": "～のかわりに",
    "romaji": "~nokawarini",
    "meaning": "thay cho ~",
    "topicId": "health"
  },
  {
    "id": 2194,
    "word": "とじる",
    "hiragana": "とじる",
    "romaji": "tojiru",
    "meaning": "đóng, ghim",
    "topicId": "other"
  },
  {
    "id": 2195,
    "word": "はさむ",
    "hiragana": "はさむ",
    "romaji": "hasamu",
    "meaning": "gắn, kẹp",
    "topicId": "other"
  },
  {
    "id": 2196,
    "word": "留める",
    "hiragana": "とめる",
    "romaji": "tomeru",
    "meaning": "ghim, cố định",
    "topicId": "other"
  },
  {
    "id": 2197,
    "word": "切る",
    "hiragana": "きる",
    "romaji": "kiru",
    "meaning": "cắt",
    "topicId": "other"
  },
  {
    "id": 2198,
    "word": "クリップ",
    "hiragana": "クリップ",
    "romaji": "kurippu",
    "meaning": "cái kẹp giấy",
    "topicId": "food"
  },
  {
    "id": 2199,
    "word": "画びょう",
    "hiragana": "がびょう",
    "romaji": "gabyou",
    "meaning": "cái đinh ghim",
    "topicId": "food"
  },
  {
    "id": 2200,
    "word": "カッター",
    "hiragana": "カッター",
    "romaji": "katta-",
    "meaning": "dao rọc giấy",
    "topicId": "other"
  },
  {
    "id": 2201,
    "word": "のり",
    "hiragana": "のり",
    "romaji": "nori",
    "meaning": "hồ dán",
    "topicId": "travel"
  },
  {
    "id": 2202,
    "word": "削る",
    "hiragana": "けずる",
    "romaji": "kezuru",
    "meaning": "gọt",
    "topicId": "other"
  },
  {
    "id": 2203,
    "word": "ファイルする",
    "hiragana": "ファイルする",
    "romaji": "fairusuru",
    "meaning": "lưu file / kẹp file",
    "topicId": "other"
  },
  {
    "id": 2204,
    "word": "ガムテープ",
    "hiragana": "ガムテープ",
    "romaji": "gamute-pu",
    "meaning": "băng dính bản to",
    "topicId": "food"
  },
  {
    "id": 2205,
    "word": "鉛筆削り",
    "hiragana": "えんぴつけずり",
    "romaji": "enpitsukezuri",
    "meaning": "gọt bút chì",
    "topicId": "other"
  },
  {
    "id": 2206,
    "word": "消す",
    "hiragana": "けす",
    "romaji": "kesu",
    "meaning": "tẩy, xóa",
    "topicId": "other"
  },
  {
    "id": 2207,
    "word": "穴をあける",
    "hiragana": "あなをあける",
    "romaji": "ana o akeru",
    "meaning": "đục lỗ",
    "topicId": "other"
  },
  {
    "id": 2208,
    "word": "計算する",
    "hiragana": "けいさんする",
    "romaji": "keisansuru",
    "meaning": "tính toán",
    "topicId": "other"
  },
  {
    "id": 2209,
    "word": "線を引く",
    "hiragana": "せんをひく",
    "romaji": "sen o hiku",
    "meaning": "kẻ đường",
    "topicId": "traffic"
  },
  {
    "id": 2210,
    "word": "測る",
    "hiragana": "はかる",
    "romaji": "hakaru",
    "meaning": "đo",
    "topicId": "other"
  },
  {
    "id": 2211,
    "word": "修正液",
    "hiragana": "しゅうせいえき",
    "romaji": "shuuseieki",
    "meaning": "bút xóa",
    "topicId": "other"
  },
  {
    "id": 2212,
    "word": "電卓",
    "hiragana": "でんたく",
    "romaji": "dentaku",
    "meaning": "máy tính",
    "topicId": "lifestyle"
  },
  {
    "id": 2213,
    "word": "定規",
    "hiragana": "じょうぎ",
    "romaji": "jougi",
    "meaning": "thước kẻ",
    "topicId": "lifestyle"
  },
  {
    "id": 2214,
    "word": "のこぎり",
    "hiragana": "のこぎり",
    "romaji": "nokogiri",
    "meaning": "cái cưa",
    "topicId": "food"
  },
  {
    "id": 2215,
    "word": "金づち",
    "hiragana": "かなづち",
    "romaji": "kanazuchi",
    "meaning": "cái búa",
    "topicId": "food"
  },
  {
    "id": 2216,
    "word": "ペンチ",
    "hiragana": "ペンチ",
    "romaji": "penchi",
    "meaning": "cái kìm",
    "topicId": "food"
  },
  {
    "id": 2217,
    "word": "ねじを",
    "hiragana": "ねじを",
    "romaji": "neji o",
    "meaning": "(ốc vít)",
    "topicId": "other"
  },
  {
    "id": 2218,
    "word": "締める",
    "hiragana": "しめる",
    "romaji": "shimeru",
    "meaning": "vặn chặt",
    "topicId": "other"
  },
  {
    "id": 2219,
    "word": "緩める",
    "hiragana": "ゆるめる",
    "romaji": "yurumeru",
    "meaning": "vặn lỏng",
    "topicId": "other"
  },
  {
    "id": 2220,
    "word": "増えます [輸出が～]",
    "hiragana": "ふえます [ゆしゅつが～]",
    "romaji": "fuemasu [yushutsuga~]",
    "meaning": "tăng [xuất khẩu]",
    "topicId": "food"
  },
  {
    "id": 2221,
    "word": "減ります [輸出が～]",
    "hiragana": "へります [ゆしゅつが～]",
    "romaji": "herimasu [yushutsuga~]",
    "meaning": "giảm [xuất khẩu]",
    "topicId": "other"
  },
  {
    "id": 2222,
    "word": "上がります [値段が～]",
    "hiragana": "あがります [ねだんが～]",
    "romaji": "agarimasu [nedanga~]",
    "meaning": "tăng [giá cả]",
    "topicId": "shopping"
  },
  {
    "id": 2223,
    "word": "下がります [値段が～]",
    "hiragana": "さがります [ねだんが～]",
    "romaji": "sagarimasu [nedanga~]",
    "meaning": "giảm [giá cả]",
    "topicId": "shopping"
  },
  {
    "id": 2224,
    "word": "切れます [ひもが～]",
    "hiragana": "きれます [ひもが～]",
    "romaji": "kiremasu [himoga~]",
    "meaning": "đứt [sợi dây]",
    "topicId": "other"
  },
  {
    "id": 2225,
    "word": "とれます [ボタンが～]",
    "hiragana": "とれます [ボタンが～]",
    "romaji": "toremasu [botanga~]",
    "meaning": "tuột [cúc áo]",
    "topicId": "other"
  },
  {
    "id": 2226,
    "word": "落ちます [荷物が～]",
    "hiragana": "おちます [にもつが～]",
    "romaji": "ochimasu [nimotsuga~]",
    "meaning": "rơi [hành lý]",
    "topicId": "other"
  },
  {
    "id": 2227,
    "word": "なくなります [ガソリンが～]",
    "hiragana": "なくなります [ガソリンが～]",
    "romaji": "nakunarimasu [gasoringa~]",
    "meaning": "hết [xăng]",
    "topicId": "food"
  },
  {
    "id": 2228,
    "word": "丈夫[な]",
    "hiragana": "じょうぶ[な]",
    "romaji": "joubu[na]",
    "meaning": "chắc chắn, khỏe",
    "topicId": "health"
  },
  {
    "id": 2229,
    "word": "変[な]",
    "hiragana": "へん[な]",
    "romaji": "hen[na]",
    "meaning": "lạ, kỳ lạ",
    "topicId": "other"
  },
  {
    "id": 2230,
    "word": "幸せ[な]",
    "hiragana": "しあわせ[な]",
    "romaji": "shiawase[na]",
    "meaning": "hạnh phúc",
    "topicId": "time_weather"
  },
  {
    "id": 2231,
    "word": "うまい",
    "hiragana": "うまい",
    "romaji": "umai",
    "meaning": "ngon, giỏi",
    "topicId": "food"
  },
  {
    "id": 2232,
    "word": "まずい",
    "hiragana": "まずい",
    "romaji": "mazui",
    "meaning": "dở (vị)",
    "topicId": "food"
  },
  {
    "id": 2233,
    "word": "つまらない",
    "hiragana": "つまらない",
    "romaji": "tsumaranai",
    "meaning": "chán, vô vị",
    "topicId": "other"
  },
  {
    "id": 2234,
    "word": "ガソリン",
    "hiragana": "ガソリン",
    "romaji": "gasorin",
    "meaning": "xăng",
    "topicId": "food"
  },
  {
    "id": 2235,
    "word": "暖房",
    "hiragana": "だんぼう",
    "romaji": "danbou",
    "meaning": "thiết bị sưởi ấm",
    "topicId": "time_weather"
  },
  {
    "id": 2236,
    "word": "冷房",
    "hiragana": "れいぼう",
    "romaji": "reibou",
    "meaning": "thiết bị làm mát, điều hòa",
    "topicId": "traffic"
  },
  {
    "id": 2237,
    "word": "センス",
    "hiragana": "センス",
    "romaji": "sensu",
    "meaning": "có khiếu, có gu (sensu ga arimasu)",
    "topicId": "traffic"
  },
  {
    "id": 2238,
    "word": "今にも",
    "hiragana": "いまにも",
    "romaji": "imanimo",
    "meaning": "ngay bây giờ (dùng để diễn tả trạng thái ngay trước khi thay đổi)",
    "topicId": "traffic"
  },
  {
    "id": 2239,
    "word": "わあ",
    "hiragana": "わあ",
    "romaji": "waa",
    "meaning": "ôi! (câu cảm thán)",
    "topicId": "health"
  },
  {
    "id": 2240,
    "word": "会員",
    "hiragana": "かいいん",
    "romaji": "kaiin",
    "meaning": "hội viên",
    "topicId": "other"
  },
  {
    "id": 2241,
    "word": "適当[な]",
    "hiragana": "てきとう[な]",
    "romaji": "tekitou[na]",
    "meaning": "thích hợp, vừa phải",
    "topicId": "other"
  },
  {
    "id": 2242,
    "word": "年齢",
    "hiragana": "ねんれい",
    "romaji": "nenrei",
    "meaning": "tuổi tác",
    "topicId": "greetings"
  },
  {
    "id": 2243,
    "word": "収入",
    "hiragana": "しゅうにゅう",
    "romaji": "shuunyuu",
    "meaning": "thu nhập",
    "topicId": "time_weather"
  },
  {
    "id": 2244,
    "word": "ぴったり",
    "hiragana": "ぴったり",
    "romaji": "pittari",
    "meaning": "vừa vặn, đúng",
    "topicId": "other"
  },
  {
    "id": 2245,
    "word": "その上",
    "hiragana": "そのうえ",
    "romaji": "sonoue",
    "meaning": "hơn nữa, thêm vào đó",
    "topicId": "other"
  },
  {
    "id": 2246,
    "word": "～と言います",
    "hiragana": "～と いいます",
    "romaji": "~to iimasu",
    "meaning": "(tên) là ~",
    "topicId": "other"
  },
  {
    "id": 2247,
    "word": "ばら",
    "hiragana": "ばら",
    "romaji": "bara",
    "meaning": "hoa hồng",
    "topicId": "health"
  },
  {
    "id": 2248,
    "word": "ドライブ",
    "hiragana": "ドライブ",
    "romaji": "doraibu",
    "meaning": "lái xe đi chơi (drive)",
    "topicId": "traffic"
  },
  {
    "id": 2249,
    "word": "活発[な]",
    "hiragana": "かっぱつ[な]",
    "romaji": "kappatsu[na]",
    "meaning": "hoạt bát",
    "topicId": "food"
  },
  {
    "id": 2250,
    "word": "誠実[な]",
    "hiragana": "せいじつ[な]",
    "romaji": "seijitsu[na]",
    "meaning": "thành thực, trung thực",
    "topicId": "other"
  },
  {
    "id": 2251,
    "word": "わがまま[な]",
    "hiragana": "わがまま[な]",
    "romaji": "wagamama[na]",
    "meaning": "ích kỷ",
    "topicId": "other"
  },
  {
    "id": 2252,
    "word": "ふまじめ[な]",
    "hiragana": "ふまじめ[な]",
    "romaji": "fumajime[na]",
    "meaning": "không nghiêm túc",
    "topicId": "other"
  },
  {
    "id": 2253,
    "word": "厳しい",
    "hiragana": "きびしい",
    "romaji": "kibishii",
    "meaning": "nghiêm khắc",
    "topicId": "other"
  },
  {
    "id": 2254,
    "word": "気が長い",
    "hiragana": "きがながい",
    "romaji": "kiganagai",
    "meaning": "kiên nhẫn",
    "topicId": "other"
  },
  {
    "id": 2255,
    "word": "頑固[な]",
    "hiragana": "がんこ[な]",
    "romaji": "ganko[na]",
    "meaning": "ngoan cố, bảo thủ",
    "topicId": "other"
  },
  {
    "id": 2256,
    "word": "気が短い",
    "hiragana": "きがみじかい",
    "romaji": "kigamijikai",
    "meaning": "nóng tính",
    "topicId": "time_weather"
  },
  {
    "id": 2257,
    "word": "素直[な]",
    "hiragana": "すなお[な]",
    "romaji": "sunao[na]",
    "meaning": "ngoan ngoãn, dễ bảo",
    "topicId": "other"
  },
  {
    "id": 2258,
    "word": "気が強い",
    "hiragana": "きがつよい",
    "romaji": "kigatsuyoi",
    "meaning": "cá tính mạnh, mạnh mẽ",
    "topicId": "food"
  },
  {
    "id": 2259,
    "word": "気が弱い",
    "hiragana": "きがよわい",
    "romaji": "kigayowai",
    "meaning": "nhút nhát",
    "topicId": "anime"
  },
  {
    "id": 2260,
    "word": "意地悪[な]",
    "hiragana": "いじわる[な]",
    "romaji": "ijiwaru[na]",
    "meaning": "xấu tính, tâm địa xấu",
    "topicId": "other"
  },
  {
    "id": 2261,
    "word": "勝ち気[な]",
    "hiragana": "かちき[な]",
    "romaji": "kachiki[na]",
    "meaning": "hiếu thắng",
    "topicId": "other"
  },
  {
    "id": 2262,
    "word": "神経質[な]",
    "hiragana": "しんけいしつ[な]",
    "romaji": "shinkeishitsu[na]",
    "meaning": "nhạy cảm, hay lo lắng",
    "topicId": "time_weather"
  },
  {
    "id": 2263,
    "word": "泣きます",
    "hiragana": "なきます",
    "romaji": "nakimasu",
    "meaning": "khóc",
    "topicId": "other"
  },
  {
    "id": 2264,
    "word": "笑います",
    "hiragana": "わらいます",
    "romaji": "waraimasu",
    "meaning": "cười",
    "topicId": "other"
  },
  {
    "id": 2265,
    "word": "乾きます",
    "hiragana": "かわきます",
    "romaji": "kawakimasu",
    "meaning": "khô (kawaku)",
    "topicId": "other"
  },
  {
    "id": 2266,
    "word": "ぬれます",
    "hiragana": "ぬれます",
    "romaji": "nuremasu",
    "meaning": "ướt",
    "topicId": "other"
  },
  {
    "id": 2267,
    "word": "滑ります",
    "hiragana": "すべります",
    "romaji": "suberimasu",
    "meaning": "trượt",
    "topicId": "other"
  },
  {
    "id": 2268,
    "word": "起きます [事故が～]",
    "hiragana": "おきます [じこが～]",
    "romaji": "okimasu [jikoga~]",
    "meaning": "xảy ra [tai nạn]",
    "topicId": "health"
  },
  {
    "id": 2269,
    "word": "調節します",
    "hiragana": "ちょうせつします",
    "romaji": "chousetsushimasu",
    "meaning": "điều tiết, điều chỉnh",
    "topicId": "traffic"
  },
  {
    "id": 2270,
    "word": "丁寧[な]",
    "hiragana": "ていねい[な]",
    "romaji": "teinei[na]",
    "meaning": "lịch sự",
    "topicId": "other"
  },
  {
    "id": 2271,
    "word": "細かい",
    "hiragana": "こまかい",
    "romaji": "komakai",
    "meaning": "nhỏ, lẻ, chi tiết",
    "topicId": "other"
  },
  {
    "id": 2272,
    "word": "濃い",
    "hiragana": "こい",
    "romaji": "koi",
    "meaning": "đậm",
    "topicId": "other"
  },
  {
    "id": 2273,
    "word": "空気",
    "hiragana": "くうき",
    "romaji": "kuuki",
    "meaning": "không khí",
    "topicId": "other"
  },
  {
    "id": 2274,
    "word": "涙",
    "hiragana": "なみだ",
    "romaji": "namida",
    "meaning": "nước mắt",
    "topicId": "food"
  },
  {
    "id": 2275,
    "word": "和食",
    "hiragana": "わしょく",
    "romaji": "washoku",
    "meaning": "món ăn Nhật",
    "topicId": "food"
  },
  {
    "id": 2276,
    "word": "洋食",
    "hiragana": "ようしょく",
    "romaji": "youshoku",
    "meaning": "món ăn Âu Mỹ",
    "topicId": "food"
  },
  {
    "id": 2277,
    "word": "おかず",
    "hiragana": "おかず",
    "romaji": "okazu",
    "meaning": "thức ăn",
    "topicId": "food"
  },
  {
    "id": 2278,
    "word": "ー倍",
    "hiragana": "ーばい",
    "romaji": "-bai",
    "meaning": "- lần",
    "topicId": "other"
  },
  {
    "id": 2279,
    "word": "半分",
    "hiragana": "はんぶん",
    "romaji": "hanbun",
    "meaning": "một nửa",
    "topicId": "other"
  },
  {
    "id": 2280,
    "word": "シングル",
    "hiragana": "シングル",
    "romaji": "shinguru",
    "meaning": "phòng đơn (single)",
    "topicId": "lifestyle"
  },
  {
    "id": 2281,
    "word": "ツイン",
    "hiragana": "ツイン",
    "romaji": "tsuin",
    "meaning": "phòng đôi (twin)",
    "topicId": "lifestyle"
  },
  {
    "id": 2282,
    "word": "たんす",
    "hiragana": "たんす",
    "romaji": "tansu",
    "meaning": "tủ đựng quần áo",
    "topicId": "other"
  },
  {
    "id": 2283,
    "word": "洗濯物",
    "hiragana": "せんたくもの",
    "romaji": "sentakumono",
    "meaning": "quần áo giặt",
    "topicId": "lifestyle"
  },
  {
    "id": 2284,
    "word": "理由",
    "hiragana": "りゆう",
    "romaji": "riyuu",
    "meaning": "lý do",
    "topicId": "other"
  },
  {
    "id": 2285,
    "word": "どう なさいますか",
    "hiragana": "どう なさいますか",
    "romaji": "dou nasaimasuka",
    "meaning": "Ông/Bà muốn làm như thế nào ạ?",
    "topicId": "work"
  },
  {
    "id": 2286,
    "word": "カット",
    "hiragana": "カット",
    "romaji": "katto",
    "meaning": "cắt tóc (cut)",
    "topicId": "other"
  },
  {
    "id": 2287,
    "word": "シャンプー",
    "hiragana": "シャンプー",
    "romaji": "shanpu-",
    "meaning": "gội đầu (shampoo)",
    "topicId": "health"
  },
  {
    "id": 2288,
    "word": "どういうふうに なさいますか",
    "hiragana": "どういうふうに なさいますか",
    "romaji": "douiufuuni nasaimasuka",
    "meaning": "Ông/Bà muốn làm kiểu như thế nào?",
    "topicId": "work"
  },
  {
    "id": 2289,
    "word": "ショート",
    "hiragana": "ショート",
    "romaji": "sho-to",
    "meaning": "kiểu ngắn (short)",
    "topicId": "health"
  },
  {
    "id": 2290,
    "word": "～みたいに して ください",
    "hiragana": "～みたいに して ください",
    "romaji": "~mitaini shite kudasai",
    "meaning": "hãy cắt như ~",
    "topicId": "other"
  },
  {
    "id": 2291,
    "word": "これで よろしいでしょうか",
    "hiragana": "これで よろしいでしょうか",
    "romaji": "korede yoroshiideshouka",
    "meaning": "như thế này đã được chưa ạ?",
    "topicId": "other"
  },
  {
    "id": 2292,
    "word": "嫌がります",
    "hiragana": "いやがります",
    "romaji": "iyagarimasu",
    "meaning": "không thích, ghét",
    "topicId": "other"
  },
  {
    "id": 2293,
    "word": "順序",
    "hiragana": "じゅんじょ",
    "romaji": "junjo",
    "meaning": "thứ tự",
    "topicId": "other"
  },
  {
    "id": 2294,
    "word": "表現",
    "hiragana": "ひょうげん",
    "romaji": "hyougen",
    "meaning": "cách nói, cách diễn đạt",
    "topicId": "food"
  },
  {
    "id": 2295,
    "word": "別れます",
    "hiragana": "わかれます",
    "romaji": "wakaremasu",
    "meaning": "chia tay",
    "topicId": "health"
  },
  {
    "id": 2296,
    "word": "これら",
    "hiragana": "これら",
    "romaji": "korera",
    "meaning": "những cái này",
    "topicId": "food"
  },
  {
    "id": 2297,
    "word": "縁起が 悪い",
    "hiragana": "えんぎが わるい",
    "romaji": "engiga warui",
    "meaning": "không may, điềm báo không tốt",
    "topicId": "traffic"
  },
  {
    "id": 2298,
    "word": "パーマ",
    "hiragana": "パーマ",
    "romaji": "pa-ma",
    "meaning": "uốn tóc",
    "topicId": "other"
  },
  {
    "id": 2299,
    "word": "リンス",
    "hiragana": "リンス",
    "romaji": "rinsu",
    "meaning": "dầu xả",
    "topicId": "other"
  },
  {
    "id": 2300,
    "word": "トリートメント",
    "hiragana": "トリートメント",
    "romaji": "tori-tomento",
    "meaning": "hấp dầu, dưỡng tóc",
    "topicId": "other"
  },
  {
    "id": 2301,
    "word": "ブロー",
    "hiragana": "ブロー",
    "romaji": "buro-",
    "meaning": "sấy tạo kiểu",
    "topicId": "other"
  },
  {
    "id": 2302,
    "word": "ヘアダイ",
    "hiragana": "ヘアダイ",
    "romaji": "headai",
    "meaning": "nhuộm tóc",
    "topicId": "other"
  },
  {
    "id": 2303,
    "word": "そる [顔を～]",
    "hiragana": "そる [かおを～]",
    "romaji": "soru [kaoo~]",
    "meaning": "cạo râu/mặt",
    "topicId": "other"
  },
  {
    "id": 2304,
    "word": "分ける [髪を～]",
    "hiragana": "わける [かみを～]",
    "romaji": "wakeru [kamio~]",
    "meaning": "rẽ ngôi",
    "topicId": "other"
  },
  {
    "id": 2305,
    "word": "ボブ",
    "hiragana": "ボブ",
    "romaji": "bobu",
    "meaning": "tóc bob",
    "topicId": "other"
  },
  {
    "id": 2306,
    "word": "おかっぱ",
    "hiragana": "おかっぱ",
    "romaji": "okappa",
    "meaning": "tóc mái bằng, cắt ngắn ngang vai",
    "topicId": "traffic"
  },
  {
    "id": 2307,
    "word": "丸刈り",
    "hiragana": "まるがり",
    "romaji": "marugari",
    "meaning": "đầu cua",
    "topicId": "health"
  },
  {
    "id": 2308,
    "word": "レイヤーカット",
    "hiragana": "レイヤーカット",
    "romaji": "reiya-katto",
    "meaning": "tóc tỉa tầng (layer)",
    "topicId": "other"
  },
  {
    "id": 2309,
    "word": "三つ編み",
    "hiragana": "みつあみ",
    "romaji": "mitsuami",
    "meaning": "tóc tết ba",
    "topicId": "other"
  },
  {
    "id": 2310,
    "word": "長髪",
    "hiragana": "ちょうはつ",
    "romaji": "chouhatsu",
    "meaning": "tóc dài",
    "topicId": "other"
  },
  {
    "id": 2311,
    "word": "ソバージュ",
    "hiragana": "ソバージュ",
    "romaji": "soba-ju",
    "meaning": "tóc xoăn lọn nhỏ, xù",
    "topicId": "food"
  },
  {
    "id": 2312,
    "word": "ポニーテール",
    "hiragana": "ポニーテール",
    "romaji": "poni-te-ru",
    "meaning": "tóc đuôi ngựa",
    "topicId": "other"
  },
  {
    "id": 2313,
    "word": "リーゼント",
    "hiragana": "リーゼント",
    "romaji": "ri-zento",
    "meaning": "tóc vuốt ngược (kiểu ducktail)",
    "topicId": "health"
  },
  {
    "id": 2314,
    "word": "謝ります",
    "hiragana": "あやまります",
    "romaji": "ayamarimasu",
    "meaning": "xin lỗi",
    "topicId": "greetings"
  },
  {
    "id": 2315,
    "word": "あいます [事故に～]",
    "hiragana": "あいます [じこに～]",
    "romaji": "aimasu [jikoni~]",
    "meaning": "gặp [tai nạn]",
    "topicId": "health"
  },
  {
    "id": 2316,
    "word": "信じます",
    "hiragana": "しんじます",
    "romaji": "shinjimasu",
    "meaning": "tin, tin tưởng",
    "topicId": "other"
  },
  {
    "id": 2317,
    "word": "用意します",
    "hiragana": "よういします",
    "romaji": "youishimasu",
    "meaning": "chuẩn bị",
    "topicId": "other"
  },
  {
    "id": 2318,
    "word": "キャンセルします",
    "hiragana": "キャンセルします",
    "romaji": "kyanserushimasu",
    "meaning": "hủy (cancel)",
    "topicId": "other"
  },
  {
    "id": 2319,
    "word": "うまくいきます",
    "hiragana": "うまくいきます",
    "romaji": "umakuikimasu",
    "meaning": "tốt đẹp, thuận lợi",
    "topicId": "time_weather"
  },
  {
    "id": 2320,
    "word": "保証書",
    "hiragana": "ほしょうしょ",
    "romaji": "hoshousho",
    "meaning": "giấy bảo hành",
    "topicId": "other"
  },
  {
    "id": 2321,
    "word": "領収書",
    "hiragana": "りょうしゅうしょ",
    "romaji": "ryoushuusho",
    "meaning": "hóa đơn, biên lai",
    "topicId": "shopping"
  },
  {
    "id": 2322,
    "word": "贈り物",
    "hiragana": "おくりもの",
    "romaji": "okurimono",
    "meaning": "quà tặng (～を します: tặng quà)",
    "topicId": "travel"
  },
  {
    "id": 2323,
    "word": "間違い電話",
    "hiragana": "まちがいでんわ",
    "romaji": "machigaidenwa",
    "meaning": "điện thoại nhầm",
    "topicId": "traffic"
  },
  {
    "id": 2324,
    "word": "キャンプ",
    "hiragana": "キャンプ",
    "romaji": "kyanpu",
    "meaning": "trại (camp)",
    "topicId": "other"
  },
  {
    "id": 2325,
    "word": "係",
    "hiragana": "かかり",
    "romaji": "kakari",
    "meaning": "nhân viên, người phụ trách",
    "topicId": "greetings"
  },
  {
    "id": 2326,
    "word": "中止",
    "hiragana": "ちゅうし",
    "romaji": "chuushi",
    "meaning": "cấm, ngừng",
    "topicId": "time_weather"
  },
  {
    "id": 2327,
    "word": "点",
    "hiragana": "てん",
    "romaji": "ten",
    "meaning": "điểm",
    "topicId": "traffic"
  },
  {
    "id": 2328,
    "word": "レバー",
    "hiragana": "レバー",
    "romaji": "reba-",
    "meaning": "cần, cần gạt (lever)",
    "topicId": "other"
  },
  {
    "id": 2329,
    "word": "[～円] 札",
    "hiragana": "たつ [～えん] さつ",
    "romaji": "[~en] satsu",
    "meaning": "tờ tiền [~ yên]",
    "topicId": "shopping"
  },
  {
    "id": 2330,
    "word": "ちゃんと",
    "hiragana": "ちゃんと",
    "romaji": "chanto",
    "meaning": "đúng, hẳn hoi",
    "topicId": "health"
  },
  {
    "id": 2331,
    "word": "楽しみに しています",
    "hiragana": "たのしみに しています",
    "romaji": "tanoshimini shiteimasu",
    "meaning": "mong đợi, lấy làm vui",
    "topicId": "work"
  },
  {
    "id": 2332,
    "word": "以上です",
    "hiragana": "いじょうです",
    "romaji": "ijoudesu",
    "meaning": "Xin hết.",
    "topicId": "other"
  },
  {
    "id": 2333,
    "word": "係員",
    "hiragana": "かかりいん",
    "romaji": "kakariin",
    "meaning": "nhân viên, người phụ trách",
    "topicId": "greetings"
  },
  {
    "id": 2334,
    "word": "コース",
    "hiragana": "コース",
    "romaji": "ko-su",
    "meaning": "đường chạy (marathon)",
    "topicId": "traffic"
  },
  {
    "id": 2335,
    "word": "スタート",
    "hiragana": "スタート",
    "romaji": "suta-to",
    "meaning": "xuất phát",
    "topicId": "anime"
  },
  {
    "id": 2336,
    "word": "ー位",
    "hiragana": "ーい",
    "romaji": "-i",
    "meaning": "thứ -, vị trí thứ -",
    "topicId": "other"
  },
  {
    "id": 2337,
    "word": "優勝します",
    "hiragana": "ゆうしょうします",
    "romaji": "yuushoushimasu",
    "meaning": "vô địch, đoạt giải nhất",
    "topicId": "other"
  },
  {
    "id": 2338,
    "word": "悩み",
    "hiragana": "なやみ",
    "romaji": "nayami",
    "meaning": "điều lo nghĩ, trăn trở",
    "topicId": "food"
  },
  {
    "id": 2339,
    "word": "目覚まし [時計]",
    "hiragana": "めざまし [どけい]",
    "romaji": "mezamashi [dokei]",
    "meaning": "đồng hồ báo thức",
    "topicId": "lifestyle"
  },
  {
    "id": 2340,
    "word": "大学生",
    "hiragana": "だいがくせい",
    "romaji": "daigakusei",
    "meaning": "sinh viên đại học",
    "topicId": "other"
  },
  {
    "id": 2341,
    "word": "回答",
    "hiragana": "かいとう",
    "romaji": "kaitou",
    "meaning": "câu trả lời",
    "topicId": "other"
  },
  {
    "id": 2342,
    "word": "セットします",
    "hiragana": "セットします",
    "romaji": "settoshimasu",
    "meaning": "cài đặt",
    "topicId": "other"
  },
  {
    "id": 2343,
    "word": "それでも",
    "hiragana": "それでも",
    "romaji": "soredemo",
    "meaning": "tuy nhiên, mặc dù vậy",
    "topicId": "other"
  },
  {
    "id": 2344,
    "word": "備え",
    "hiragana": "そなえ",
    "romaji": "sonae",
    "meaning": "chuẩn bị, phòng bị",
    "topicId": "lifestyle"
  },
  {
    "id": 2345,
    "word": "消火器",
    "hiragana": "しょうかき",
    "romaji": "shoukaki",
    "meaning": "bình chữa cháy",
    "topicId": "other"
  },
  {
    "id": 2346,
    "word": "貴重品",
    "hiragana": "きちょうひん",
    "romaji": "kichouhin",
    "meaning": "đồ quý giá",
    "topicId": "shopping"
  },
  {
    "id": 2347,
    "word": "救急薬",
    "hiragana": "きゅうきゅうやく",
    "romaji": "kyuukyuuyaku",
    "meaning": "thuốc cấp cứu",
    "topicId": "time_weather"
  },
  {
    "id": 2348,
    "word": "非常用持ち出し袋",
    "hiragana": "ひじょうようもちだしぶくろ",
    "romaji": "hijouyoumochidashibukuro",
    "meaning": "túi đựng đồ mang theo khi khẩn cấp",
    "topicId": "shopping"
  },
  {
    "id": 2349,
    "word": "避難場所",
    "hiragana": "ひなんばしょ",
    "romaji": "hinanbasho",
    "meaning": "địa điểm lánh nạn",
    "topicId": "traffic"
  },
  {
    "id": 2350,
    "word": "連絡先",
    "hiragana": "れんらくさき",
    "romaji": "renrakusaki",
    "meaning": "chỗ liên lạc",
    "topicId": "other"
  },
  {
    "id": 2351,
    "word": "万一",
    "hiragana": "まんいち",
    "romaji": "manichi",
    "meaning": "vạn bất đắc dĩ, nếu lỡ",
    "topicId": "other"
  },
  {
    "id": 2352,
    "word": "火の始末",
    "hiragana": "ひのしまつ",
    "romaji": "hinoshimatsu",
    "meaning": "dập lửa",
    "topicId": "other"
  },
  {
    "id": 2353,
    "word": "山崩れ",
    "hiragana": "やまくずれ",
    "romaji": "yamakuzure",
    "meaning": "sạt lở núi",
    "topicId": "travel"
  },
  {
    "id": 2354,
    "word": "崖崩れ",
    "hiragana": "がけくずれ",
    "romaji": "gakekuzure",
    "meaning": "sạt lở đất đá",
    "topicId": "other"
  },
  {
    "id": 2355,
    "word": "津波",
    "hiragana": "つなみ",
    "romaji": "tsunami",
    "meaning": "sóng thần",
    "topicId": "other"
  },
  {
    "id": 2356,
    "word": "避難します",
    "hiragana": "ひなんします",
    "romaji": "hinanshimasu",
    "meaning": "lánh nạn",
    "topicId": "other"
  },
  {
    "id": 2357,
    "word": "気象情報",
    "hiragana": "きしょうじょうほう",
    "romaji": "kishoujouhou",
    "meaning": "thông tin khí tượng",
    "topicId": "other"
  },
  {
    "id": 2358,
    "word": "点検",
    "hiragana": "てんけん",
    "romaji": "tenken",
    "meaning": "kiểm tra, bảo dưỡng",
    "topicId": "other"
  },
  {
    "id": 2359,
    "word": "緊急食品",
    "hiragana": "きんきゅうしょくひん",
    "romaji": "kinkyuushokuhin",
    "meaning": "thực phẩm khẩn cấp",
    "topicId": "other"
  },
  {
    "id": 2360,
    "word": "焼きます",
    "hiragana": "やきます",
    "romaji": "yakimasu",
    "meaning": "nướng, thiêu, đốt",
    "topicId": "other"
  },
  {
    "id": 2361,
    "word": "渡します",
    "hiragana": "わたします",
    "romaji": "watashimasu",
    "meaning": "trao, đưa cho",
    "topicId": "health"
  },
  {
    "id": 2362,
    "word": "帰って 来ます",
    "hiragana": "かえって きます",
    "romaji": "kaette kimasu",
    "meaning": "về, trở lại",
    "topicId": "traffic"
  },
  {
    "id": 2363,
    "word": "出ます [バスが～]",
    "hiragana": "でます [バスが～]",
    "romaji": "demasu [basuga~]",
    "meaning": "xuất phát, khởi hành [xe buýt]",
    "topicId": "traffic"
  },
  {
    "id": 2364,
    "word": "原因",
    "hiragana": "げんいん",
    "romaji": "genin",
    "meaning": "nguyên nhân",
    "topicId": "other"
  },
  {
    "id": 2365,
    "word": "注射",
    "hiragana": "ちゅうしゃ",
    "romaji": "chuusha",
    "meaning": "tiêm",
    "topicId": "other"
  },
  {
    "id": 2366,
    "word": "食欲",
    "hiragana": "しょくよく",
    "romaji": "shokuyoku",
    "meaning": "cảm giác muốn ăn, thèm ăn",
    "topicId": "shopping"
  },
  {
    "id": 2367,
    "word": "パンフレット",
    "hiragana": "パンフレット",
    "romaji": "panfuretto",
    "meaning": "tờ rơi, tờ quảng cáo (pamphlet)",
    "topicId": "food"
  },
  {
    "id": 2368,
    "word": "ステレオ",
    "hiragana": "ステレオ",
    "romaji": "sutereo",
    "meaning": "stereo",
    "topicId": "other"
  },
  {
    "id": 2369,
    "word": "～の 所",
    "hiragana": "～の ところ",
    "romaji": "~no tokoro",
    "meaning": "chỗ ~, quanh ~",
    "topicId": "greetings"
  },
  {
    "id": 2370,
    "word": "ちょうど",
    "hiragana": "ちょうど",
    "romaji": "choudo",
    "meaning": "vừa đúng",
    "topicId": "other"
  },
  {
    "id": 2371,
    "word": "たった今",
    "hiragana": "たったいま",
    "romaji": "tattaima",
    "meaning": "vừa mới",
    "topicId": "other"
  },
  {
    "id": 2372,
    "word": "今 いいでしょうか",
    "hiragana": "いま いいでしょうか",
    "romaji": "imaiideshouka",
    "meaning": "Bây giờ anh/chị có rảnh không?",
    "topicId": "greetings"
  },
  {
    "id": 2373,
    "word": "ガスサービスセンター",
    "hiragana": "ガスサービスセンター",
    "romaji": "gasusa-bisusenta-",
    "meaning": "trung tâm dịch vụ ga",
    "topicId": "traffic"
  },
  {
    "id": 2374,
    "word": "ガスレンジ",
    "hiragana": "ガスレンジ",
    "romaji": "gasurenji",
    "meaning": "bếp ga (gas range)",
    "topicId": "traffic"
  },
  {
    "id": 2375,
    "word": "具合",
    "hiragana": "ぐあい",
    "romaji": "guai",
    "meaning": "tình trạng (sức khỏe, máy móc)",
    "topicId": "lifestyle"
  },
  {
    "id": 2376,
    "word": "どちら様",
    "hiragana": "どちらさま",
    "romaji": "docharasama",
    "meaning": "Ai đấy ạ?",
    "topicId": "other"
  },
  {
    "id": 2377,
    "word": "向かいます",
    "hiragana": "むかいます",
    "romaji": "mukaimasu",
    "meaning": "hướng về, đi về phía",
    "topicId": "traffic"
  },
  {
    "id": 2378,
    "word": "お待たせしました",
    "hiragana": "おまたせしました",
    "romaji": "omataseshimashita",
    "meaning": "Xin lỗi vì để anh/chị phải chờ.",
    "topicId": "greetings"
  },
  {
    "id": 2379,
    "word": "知識",
    "hiragana": "ちしき",
    "romaji": "chishiki",
    "meaning": "kiến thức, tri thức",
    "topicId": "other"
  },
  {
    "id": 2380,
    "word": "宝庫",
    "hiragana": "ほうこ",
    "romaji": "houko",
    "meaning": "kho báu",
    "topicId": "health"
  },
  {
    "id": 2381,
    "word": "手に 入ります",
    "hiragana": "てに はいります",
    "romaji": "teni hairimasu",
    "meaning": "lấy được, thu thập được",
    "topicId": "time_weather"
  },
  {
    "id": 2382,
    "word": "システム",
    "hiragana": "システム",
    "romaji": "shisutemu",
    "meaning": "hệ thống (system)",
    "topicId": "greetings"
  },
  {
    "id": 2383,
    "word": "キーワード",
    "hiragana": "キーワード",
    "romaji": "ki-wa-do",
    "meaning": "từ khóa (key word)",
    "topicId": "lifestyle"
  },
  {
    "id": 2384,
    "word": "一部分",
    "hiragana": "いちぶぶん",
    "romaji": "ichibubun",
    "meaning": "một phần",
    "topicId": "other"
  },
  {
    "id": 2385,
    "word": "入力します",
    "hiragana": "にゅうりょくします",
    "romaji": "nyuuryokushimasu",
    "meaning": "nhập (dữ liệu)",
    "topicId": "other"
  },
  {
    "id": 2386,
    "word": "秒",
    "hiragana": "びょう",
    "romaji": "byou",
    "meaning": "giây",
    "topicId": "time_weather"
  },
  {
    "id": 2387,
    "word": "出ます [本が～]",
    "hiragana": "でます [ほんが～]",
    "romaji": "demasu [honga~]",
    "meaning": "xuất bản [sách]",
    "topicId": "lifestyle"
  },
  {
    "id": 2388,
    "word": "ジャム",
    "hiragana": "ジャム",
    "romaji": "jamu",
    "meaning": "mứt (jam)",
    "topicId": "other"
  },
  {
    "id": 2389,
    "word": "ハム",
    "hiragana": "ハム",
    "romaji": "hamu",
    "meaning": "giăm bông (ham)",
    "topicId": "other"
  },
  {
    "id": 2390,
    "word": "エプロン",
    "hiragana": "エプロン",
    "romaji": "epuron",
    "meaning": "tạp dề (apron)",
    "topicId": "other"
  },
  {
    "id": 2391,
    "word": "クッキー",
    "hiragana": "クッキー",
    "romaji": "kukki-",
    "meaning": "bánh quy (cookie)",
    "topicId": "shopping"
  },
  {
    "id": 2392,
    "word": "チーズ",
    "hiragana": "チーズ",
    "romaji": "chi-zu",
    "meaning": "phô mai (cheese)",
    "topicId": "time_weather"
  },
  {
    "id": 2393,
    "word": "オムレツ",
    "hiragana": "オムレツ",
    "romaji": "omuretsu",
    "meaning": "trứng ốp lết (omelette)",
    "topicId": "other"
  },
  {
    "id": 2394,
    "word": "ランジェリー",
    "hiragana": "ランジェリー",
    "romaji": "ranjeri-",
    "meaning": "đồ lót (lingerie)",
    "topicId": "lifestyle"
  },
  {
    "id": 2395,
    "word": "ピーマン",
    "hiragana": "ピーマン",
    "romaji": "pi-man",
    "meaning": "ớt chuông (piment)",
    "topicId": "other"
  },
  {
    "id": 2396,
    "word": "フランクフルト",
    "hiragana": "フランクフルト",
    "romaji": "furankufuruto",
    "meaning": "xúc xích Đức (frankfurter)",
    "topicId": "other"
  },
  {
    "id": 2397,
    "word": "レントゲン",
    "hiragana": "レントゲン",
    "romaji": "rentogen",
    "meaning": "tia X-quang (Röntgen)",
    "topicId": "time_weather"
  },
  {
    "id": 2398,
    "word": "ノイローゼ",
    "hiragana": "ノイローゼ",
    "romaji": "noiro-ze",
    "meaning": "chứng loạn thần kinh (Neurose)",
    "topicId": "other"
  },
  {
    "id": 2399,
    "word": "アレルギー",
    "hiragana": "アレルギー",
    "romaji": "arerugi-",
    "meaning": "dị ứng (Allergie)",
    "topicId": "other"
  },
  {
    "id": 2400,
    "word": "メス",
    "hiragana": "メス",
    "romaji": "mesu",
    "meaning": "dao phẫu thuật (mes)",
    "topicId": "time_weather"
  },
  {
    "id": 2401,
    "word": "ピンセット",
    "hiragana": "ピンセット",
    "romaji": "pinsetto",
    "meaning": "cái nhíp (pincet)",
    "topicId": "food"
  },
  {
    "id": 2402,
    "word": "ビロード",
    "hiragana": "ビロード",
    "romaji": "biro-do",
    "meaning": "nhung (veludo)",
    "topicId": "other"
  },
  {
    "id": 2403,
    "word": "カステラ",
    "hiragana": "カステラ",
    "romaji": "kasutera",
    "meaning": "bánh bông lan (pão de ló)",
    "topicId": "shopping"
  },
  {
    "id": 2404,
    "word": "チョッキ",
    "hiragana": "チョッキ",
    "romaji": "chokki",
    "meaning": "áo gile (jaque)",
    "topicId": "other"
  },
  {
    "id": 2405,
    "word": "マカロニ",
    "hiragana": "マカロニ",
    "romaji": "makaroni",
    "meaning": "mì ống (macaroni)",
    "topicId": "food"
  },
  {
    "id": 2406,
    "word": "スパゲッティ",
    "hiragana": "スパゲッティ",
    "romaji": "supagetti",
    "meaning": "mì Ý (spaghetti)",
    "topicId": "food"
  },
  {
    "id": 2407,
    "word": "コーラス",
    "hiragana": "コーラス",
    "romaji": "ko-rasu",
    "meaning": "hợp xướng (chorus)",
    "topicId": "health"
  },
  {
    "id": 2408,
    "word": "メロディー",
    "hiragana": "メロディー",
    "romaji": "merodi-",
    "meaning": "giai điệu (melody)",
    "topicId": "traffic"
  },
  {
    "id": 2409,
    "word": "バレエ",
    "hiragana": "バレエ",
    "romaji": "baree",
    "meaning": "ba lê (ballet)",
    "topicId": "other"
  },
  {
    "id": 2410,
    "word": "シャンソン",
    "hiragana": "シャンソン",
    "romaji": "shanson",
    "meaning": "nhạc chanson (chanson)",
    "topicId": "time_weather"
  },
  {
    "id": 2411,
    "word": "アトリエ",
    "hiragana": "アトリエ",
    "romaji": "atorie",
    "meaning": "xưởng vẽ (atelier)",
    "topicId": "anime"
  },
  {
    "id": 2412,
    "word": "メルヘン",
    "hiragana": "メルヘン",
    "romaji": "meruhen",
    "meaning": "truyện cổ tích (Märchen)",
    "topicId": "anime"
  },
  {
    "id": 2413,
    "word": "エネルギー",
    "hiragana": "エネルギー",
    "romaji": "enerugi-",
    "meaning": "năng lượng (Energie)",
    "topicId": "food"
  },
  {
    "id": 2414,
    "word": "ゴム",
    "hiragana": "ゴム",
    "romaji": "gomu",
    "meaning": "cao su (gom)",
    "topicId": "other"
  },
  {
    "id": 2415,
    "word": "カルタ",
    "hiragana": "カルタ",
    "romaji": "karuta",
    "meaning": "bài karuta (carta)",
    "topicId": "other"
  },
  {
    "id": 2416,
    "word": "オペラ",
    "hiragana": "オペラ",
    "romaji": "opera",
    "meaning": "opera",
    "topicId": "other"
  },
  {
    "id": 2417,
    "word": "バレリーナ",
    "hiragana": "バレリーナ",
    "romaji": "bareri-na",
    "meaning": "vũ công ba lê (ballerina)",
    "topicId": "other"
  },
  {
    "id": 2418,
    "word": "スケジュール",
    "hiragana": "スケジュール",
    "romaji": "sukeju-ru",
    "meaning": "lịch trình (schedule)",
    "topicId": "other"
  },
  {
    "id": 2419,
    "word": "ティッシュペーパー",
    "hiragana": "ティッシュペーパー",
    "romaji": "tisshupe-pa-",
    "meaning": "khăn giấy (tissue paper)",
    "topicId": "food"
  },
  {
    "id": 2420,
    "word": "トラブル",
    "hiragana": "トラブル",
    "romaji": "toraburu",
    "meaning": "rắc rối (trouble)",
    "topicId": "other"
  },
  {
    "id": 2421,
    "word": "アンケート",
    "hiragana": "アンケート",
    "romaji": "anke-to",
    "meaning": "bảng câu hỏi (enquête)",
    "topicId": "greetings"
  },
  {
    "id": 2422,
    "word": "コンクール",
    "hiragana": "コンクール",
    "romaji": "konku-ru",
    "meaning": "cuộc thi (concours)",
    "topicId": "other"
  },
  {
    "id": 2423,
    "word": "ピエロ",
    "hiragana": "ピエロ",
    "romaji": "piero",
    "meaning": "chú hề (pierrot)",
    "topicId": "other"
  },
  {
    "id": 2424,
    "word": "ゲレンデ",
    "hiragana": "ゲレンデ",
    "romaji": "gerende",
    "meaning": "bãi trượt tuyết (Gelände)",
    "topicId": "time_weather"
  },
  {
    "id": 2425,
    "word": "ペンキ",
    "hiragana": "ペンキ",
    "romaji": "penki",
    "meaning": "sơn (pek)",
    "topicId": "other"
  },
  {
    "id": 2426,
    "word": "コック",
    "hiragana": "コック",
    "romaji": "kokku",
    "meaning": "đầu bếp (kok)",
    "topicId": "health"
  },
  {
    "id": 2427,
    "word": "集まります [人が～]",
    "hiragana": "あつまります [ひとが～]",
    "romaji": "atsumarimasu [hitoga~]",
    "meaning": "tập trung [người ~]",
    "topicId": "greetings"
  },
  {
    "id": 2428,
    "word": "別れます [人が～]",
    "hiragana": "わかれます [ひとが～]",
    "romaji": "wakaremasu [hitoga~]",
    "meaning": "chia tay [người ~]",
    "topicId": "greetings"
  },
  {
    "id": 2429,
    "word": "長生きします",
    "hiragana": "ながいきします",
    "romaji": "nagaikishimasu",
    "meaning": "sống lâu",
    "topicId": "other"
  },
  {
    "id": 2430,
    "word": "します [音/声が～]",
    "hiragana": "します [おと/こえが～]",
    "romaji": "shimasu [oto/koega~]",
    "meaning": "nghe thấy [âm thanh/tiếng ~]",
    "topicId": "greetings"
  },
  {
    "id": 2431,
    "word": "します [味が～]",
    "hiragana": "します [あじが～]",
    "romaji": "shimasu [ajiga~]",
    "meaning": "có [vị ~]",
    "topicId": "other"
  },
  {
    "id": 2432,
    "word": "します [においが～]",
    "hiragana": "します [においが～]",
    "romaji": "shimasu [nioiga~]",
    "meaning": "có [mùi ~]",
    "topicId": "other"
  },
  {
    "id": 2433,
    "word": "さします [傘を～]",
    "hiragana": "さします [かさを～]",
    "romaji": "sashimasu [kasao~]",
    "meaning": "che [ô]",
    "topicId": "other"
  },
  {
    "id": 2434,
    "word": "ひどい",
    "hiragana": "ひどい",
    "romaji": "hidoi",
    "meaning": "tồi tệ, khủng khiếp",
    "topicId": "other"
  },
  {
    "id": 2435,
    "word": "天気予報",
    "hiragana": "てんきよほう",
    "romaji": "tenkeyohou",
    "meaning": "dự báo thời tiết",
    "topicId": "lifestyle"
  },
  {
    "id": 2436,
    "word": "発表",
    "hiragana": "はっぴょう",
    "romaji": "happyou",
    "meaning": "phát biểu, công bố",
    "topicId": "greetings"
  },
  {
    "id": 2437,
    "word": "実験",
    "hiragana": "じっけん",
    "romaji": "jikken",
    "meaning": "thực nghiệm, thí nghiệm",
    "topicId": "other"
  },
  {
    "id": 2438,
    "word": "人口",
    "hiragana": "じんこう",
    "romaji": "jinkou",
    "meaning": "dân số",
    "topicId": "other"
  },
  {
    "id": 2439,
    "word": "におい",
    "hiragana": "におい",
    "romaji": "nioi",
    "meaning": "mùi",
    "topicId": "other"
  },
  {
    "id": 2440,
    "word": "パトカー",
    "hiragana": "パトカー",
    "romaji": "patokaa",
    "meaning": "xe cảnh sát (patrol car)",
    "topicId": "traffic"
  },
  {
    "id": 2441,
    "word": "救急車",
    "hiragana": "きゅうきゅうしゃ",
    "romaji": "kyuukyuusha",
    "meaning": "xe cấp cứu",
    "topicId": "traffic"
  },
  {
    "id": 2442,
    "word": "賛成",
    "hiragana": "さんせい",
    "romaji": "sansei",
    "meaning": "tán thành",
    "topicId": "other"
  },
  {
    "id": 2443,
    "word": "反対",
    "hiragana": "はんたい",
    "romaji": "hantai",
    "meaning": "phản đối",
    "topicId": "other"
  },
  {
    "id": 2444,
    "word": "男性",
    "hiragana": "だんせい",
    "romaji": "dansei",
    "meaning": "nam giới",
    "topicId": "other"
  },
  {
    "id": 2445,
    "word": "女性",
    "hiragana": "じょせい",
    "romaji": "josei",
    "meaning": "nữ giới",
    "topicId": "other"
  },
  {
    "id": 2446,
    "word": "～に よると",
    "hiragana": "～に よると",
    "romaji": "~ni yoru to",
    "meaning": "theo ~ (nguồn thông tin)",
    "topicId": "other"
  },
  {
    "id": 2447,
    "word": "バリ",
    "hiragana": "バリ",
    "romaji": "Bari",
    "meaning": "Bali",
    "topicId": "other"
  },
  {
    "id": 2448,
    "word": "カリフォルニア",
    "hiragana": "カリフォルニア",
    "romaji": "Kariforunia",
    "meaning": "California",
    "topicId": "other"
  },
  {
    "id": 2449,
    "word": "グアム",
    "hiragana": "グアム",
    "romaji": "Guamu",
    "meaning": "Guam",
    "topicId": "other"
  },
  {
    "id": 2450,
    "word": "婚約します",
    "hiragana": "こんやくします",
    "romaji": "konyakushimasu",
    "meaning": "đính hôn",
    "topicId": "other"
  },
  {
    "id": 2451,
    "word": "相手",
    "hiragana": "あいて",
    "romaji": "aite",
    "meaning": "đối phương",
    "topicId": "other"
  },
  {
    "id": 2452,
    "word": "知り合います",
    "hiragana": "しりあいます",
    "romaji": "shiriaimasu",
    "meaning": "quen biết",
    "topicId": "other"
  },
  {
    "id": 2453,
    "word": "平均寿命",
    "hiragana": "へいきんじゅみょう",
    "romaji": "heikin jumyou",
    "meaning": "tuổi thọ trung bình",
    "topicId": "greetings"
  },
  {
    "id": 2454,
    "word": "比べます [男性と～]",
    "hiragana": "くらべます [だんせいと～]",
    "romaji": "kurabemasu [danseito~]",
    "meaning": "so sánh [với nam giới]",
    "topicId": "other"
  },
  {
    "id": 2455,
    "word": "博士",
    "hiragana": "はかせ",
    "romaji": "hakase",
    "meaning": "tiến sĩ",
    "topicId": "other"
  },
  {
    "id": 2456,
    "word": "ホルモン",
    "hiragana": "ホルモン",
    "romaji": "horumon",
    "meaning": "hoóc môn",
    "topicId": "health"
  },
  {
    "id": 2457,
    "word": "化粧品",
    "hiragana": "けしょうひん",
    "romaji": "keshouhin",
    "meaning": "mỹ phẩm",
    "topicId": "other"
  },
  {
    "id": 2458,
    "word": "調べ",
    "hiragana": "しらべ",
    "romaji": "shirabe",
    "meaning": "điều tra",
    "topicId": "traffic"
  },
  {
    "id": 2459,
    "word": "化粧",
    "hiragana": "けしょう",
    "romaji": "keshou",
    "meaning": "trang điểm (~o shimasu: trang điểm)",
    "topicId": "traffic"
  },
  {
    "id": 2460,
    "word": "ザーザー [降る]",
    "hiragana": "ザーザー [ふる]",
    "romaji": "zaazaa [furu]",
    "meaning": "(mưa) rào rào",
    "topicId": "time_weather"
  },
  {
    "id": 2461,
    "word": "ビュービュー [吹く]",
    "hiragana": "ビュービュー [ふく]",
    "romaji": "byuubyuu [fuku]",
    "meaning": "(gió thổi) vù vù",
    "topicId": "time_weather"
  },
  {
    "id": 2462,
    "word": "ゴロゴロ [鳴る]",
    "hiragana": "ゴロゴロ [なる]",
    "romaji": "gorogoro [naru]",
    "meaning": "(sấm) ầm ầm",
    "topicId": "time_weather"
  },
  {
    "id": 2463,
    "word": "ワンワン [吠える]",
    "hiragana": "ワンワン [ほえる]",
    "romaji": "wanwan [hoeru]",
    "meaning": "(chó sủa) gâu gâu",
    "topicId": "other"
  },
  {
    "id": 2464,
    "word": "ニャーニャー [鳴く]",
    "hiragana": "ニャーニャー [なく]",
    "romaji": "nyaanyaa [naku]",
    "meaning": "(mèo kêu) meo meo",
    "topicId": "other"
  },
  {
    "id": 2465,
    "word": "カーカー [鳴く]",
    "hiragana": "カーカー [なく]",
    "romaji": "kaakaa [naku]",
    "meaning": "(quạ kêu) quạ quạ",
    "topicId": "other"
  },
  {
    "id": 2466,
    "word": "げらげら [笑う]",
    "hiragana": "げらげら [わらう]",
    "romaji": "geragera [warau]",
    "meaning": "cười ha hả",
    "topicId": "other"
  },
  {
    "id": 2467,
    "word": "しくしく [泣く]",
    "hiragana": "しくしく [なく]",
    "romaji": "shikushiku [naku]",
    "meaning": "khóc thins thít",
    "topicId": "other"
  },
  {
    "id": 2468,
    "word": "きょろきょろ [見る]",
    "hiragana": "きょろきょろ [みる]",
    "romaji": "kyorokyoro [miru]",
    "meaning": "nhìn ngơ ngác",
    "topicId": "other"
  },
  {
    "id": 2469,
    "word": "ばくばく [食べる]",
    "hiragana": "ばくばく [たべる]",
    "romaji": "bakubaku [taberu]",
    "meaning": "ăn ngấu nghiến",
    "topicId": "food"
  },
  {
    "id": 2470,
    "word": "ぐうぐう [寝る]",
    "hiragana": "ぐうぐう [ねる]",
    "romaji": "guuguu [neru]",
    "meaning": "ngủ khò khò",
    "topicId": "lifestyle"
  },
  {
    "id": 2471,
    "word": "すらすら [読む]",
    "hiragana": "すらすら [よむ]",
    "romaji": "surasura [yomu]",
    "meaning": "đọc trôi chảy",
    "topicId": "lifestyle"
  },
  {
    "id": 2472,
    "word": "ざらざら [している]",
    "hiragana": "ざらざら [している]",
    "romaji": "zarazara [shiteiru]",
    "meaning": "ram ráp",
    "topicId": "other"
  },
  {
    "id": 2473,
    "word": "べたべた [している]",
    "hiragana": "べたべた [している]",
    "romaji": "betabeta [shiteiru]",
    "meaning": "dính nhớp",
    "topicId": "other"
  },
  {
    "id": 2474,
    "word": "つるつる [している]",
    "hiragana": "つるつる [している]",
    "romaji": "tsurutsuru [shiteiru]",
    "meaning": "trơn tuột",
    "topicId": "other"
  },
  {
    "id": 2475,
    "word": "降ろします、下ろします [荷物を～]",
    "hiragana": "おろします [にもつを～]",
    "romaji": "oroshimasu [nimotsuo~]",
    "meaning": "cho xuống, hạ xuống [hành lý]",
    "topicId": "food"
  },
  {
    "id": 2476,
    "word": "世話を します",
    "hiragana": "せわを します",
    "romaji": "sewao shimasu",
    "meaning": "chăm sóc",
    "topicId": "other"
  },
  {
    "id": 2477,
    "word": "塾",
    "hiragana": "じゅく",
    "romaji": "juku",
    "meaning": "cơ sở học thêm",
    "topicId": "other"
  },
  {
    "id": 2478,
    "word": "スケージュール",
    "hiragana": "スケージュール",
    "romaji": "sukejuuru",
    "meaning": "lịch trình, thời khóa biểu",
    "topicId": "lifestyle"
  },
  {
    "id": 2479,
    "word": "生徒",
    "hiragana": "せいと",
    "romaji": "seito",
    "meaning": "học sinh",
    "topicId": "other"
  },
  {
    "id": 2480,
    "word": "入管",
    "hiragana": "にゅうかん",
    "romaji": "nyuukan",
    "meaning": "Cục quản lý nhập cảnh",
    "topicId": "food"
  },
  {
    "id": 2481,
    "word": "再入国ビザ",
    "hiragana": "さいにゅうこくビザ",
    "romaji": "sainyuukokubiza",
    "meaning": "thị thực tái nhập cảnh",
    "topicId": "travel"
  },
  {
    "id": 2482,
    "word": "～間",
    "hiragana": "～かん",
    "romaji": "~kan",
    "meaning": "trong ~ (dùng để chỉ khoảng thời gian)",
    "topicId": "health"
  },
  {
    "id": 2483,
    "word": "いい ことですね",
    "hiragana": "いい ことですね",
    "romaji": "ii kotodesune",
    "meaning": "Hay quá nhỉ./ Được đấy nhỉ.",
    "topicId": "other"
  },
  {
    "id": 2484,
    "word": "お忙しいですか",
    "hiragana": "おいそがしいですか",
    "romaji": "oisogashiidesuka",
    "meaning": "Anh/chị có bận không? (dùng với người trên)",
    "topicId": "greetings"
  },
  {
    "id": 2485,
    "word": "久しぶり",
    "hiragana": "ひさしぶり",
    "romaji": "hisashiburi",
    "meaning": "lâu lắm mới gặp",
    "topicId": "other"
  },
  {
    "id": 2486,
    "word": "営業",
    "hiragana": "えいぎょう",
    "romaji": "eigyou",
    "meaning": "kinh doanh, bán hàng",
    "topicId": "greetings"
  },
  {
    "id": 2487,
    "word": "それまでに",
    "hiragana": "それまでに",
    "romaji": "soremadeni",
    "meaning": "trước thời điểm đó",
    "topicId": "traffic"
  },
  {
    "id": 2488,
    "word": "かまいません",
    "hiragana": "かまいません",
    "romaji": "kamaimasen",
    "meaning": "Không sao./ Không có vấn đề gì.",
    "topicId": "other"
  },
  {
    "id": 2489,
    "word": "楽しみます",
    "hiragana": "たのしみます",
    "romaji": "tanoshimimasu",
    "meaning": "vui, tận hưởng",
    "topicId": "other"
  },
  {
    "id": 2490,
    "word": "もともと",
    "hiragana": "もともと",
    "romaji": "motomoto",
    "meaning": "vốn dĩ",
    "topicId": "other"
  },
  {
    "id": 2491,
    "word": "ー世紀",
    "hiragana": "ーせいき",
    "romaji": "-seiki",
    "meaning": "thế kỷ -",
    "topicId": "other"
  },
  {
    "id": 2492,
    "word": "代わりを します",
    "hiragana": "かわりを します",
    "romaji": "kawario shimasu",
    "meaning": "thay thế",
    "topicId": "other"
  },
  {
    "id": 2493,
    "word": "スピード",
    "hiragana": "スピード",
    "romaji": "supiido",
    "meaning": "tốc độ (speed)",
    "topicId": "traffic"
  },
  {
    "id": 2494,
    "word": "競走します",
    "hiragana": "きょうそうします",
    "romaji": "kyousoushimasu",
    "meaning": "chạy đua, thi chạy",
    "topicId": "time_weather"
  },
  {
    "id": 2495,
    "word": "サーカス",
    "hiragana": "サーカス",
    "romaji": "saakasu",
    "meaning": "nhào lộn, xiếc (circus)",
    "topicId": "lifestyle"
  },
  {
    "id": 2496,
    "word": "芸",
    "hiragana": "げい",
    "romaji": "gei",
    "meaning": "trò diễn, tiết mục, tài năng",
    "topicId": "food"
  },
  {
    "id": 2497,
    "word": "姿",
    "hiragana": "すがた",
    "romaji": "sugata",
    "meaning": "dáng điệu, tư thế",
    "topicId": "traffic"
  },
  {
    "id": 2498,
    "word": "心",
    "hiragana": "こころ",
    "romaji": "kokoro",
    "meaning": "trái tim, tấm lòng",
    "topicId": "time_weather"
  },
  {
    "id": 2499,
    "word": "とらえます",
    "hiragana": "とらえます",
    "romaji": "toraemasu",
    "meaning": "giành được, thu, bắt (dùng trừu tượng)",
    "topicId": "time_weather"
  },
  {
    "id": 2500,
    "word": "～に とって",
    "hiragana": "～に とって",
    "romaji": "~ni totte",
    "meaning": "đối với ~",
    "topicId": "other"
  },
  {
    "id": 2501,
    "word": "勤めます [会社に～]",
    "hiragana": "つとめます [かいしゃに～]",
    "romaji": "tsutomemasu [kaishani~]",
    "meaning": "làm việc [ở công ty]",
    "topicId": "work"
  },
  {
    "id": 2502,
    "word": "掛けます [いすに～]",
    "hiragana": "かけます [いすに～]",
    "romaji": "kakemasu [isuni~]",
    "meaning": "ngồi [ghế]",
    "topicId": "lifestyle"
  },
  {
    "id": 2503,
    "word": "過ごします",
    "hiragana": "すごします",
    "romaji": "sugoshimasu",
    "meaning": "trải qua (thời gian), sống",
    "topicId": "time_weather"
  },
  {
    "id": 2504,
    "word": "寄ります [銀行に～]",
    "hiragana": "よります [ぎんこうに～]",
    "romaji": "yorimasu [ginkouni~]",
    "meaning": "ghé qua [ngân hàng]",
    "topicId": "time_weather"
  },
  {
    "id": 2505,
    "word": "召し上がります",
    "hiragana": "めしあがります",
    "romaji": "meshiagarimasu",
    "meaning": "ăn, uống (tôn kính ngữ của たべます và のみます)",
    "topicId": "food"
  },
  {
    "id": 2506,
    "word": "おっしゃいます",
    "hiragana": "おっしゃいます",
    "romaji": "osshaimasu",
    "meaning": "nói (tôn kính ngữ của いいます)",
    "topicId": "other"
  },
  {
    "id": 2507,
    "word": "なさいます",
    "hiragana": "なさいます",
    "romaji": "nasaimasu",
    "meaning": "làm (tôn kính ngữ của します)",
    "topicId": "work"
  },
  {
    "id": 2508,
    "word": "ご覧に なります",
    "hiragana": "ごらんに なります",
    "romaji": "goranni narimasu",
    "meaning": "xem, nhìn (tôn kính ngữ của みます)",
    "topicId": "greetings"
  },
  {
    "id": 2509,
    "word": "ご存じです",
    "hiragana": "ごぞんじです",
    "romaji": "gozonjidesu",
    "meaning": "biết (tôn kính ngữ của しっています)",
    "topicId": "other"
  },
  {
    "id": 2510,
    "word": "あいさつ",
    "hiragana": "あいさつ",
    "romaji": "aisatsu",
    "meaning": "chào hỏi (~を します: chào hỏi)",
    "topicId": "greetings"
  },
  {
    "id": 2511,
    "word": "灰皿",
    "hiragana": "はいざら",
    "romaji": "haizara",
    "meaning": "gạt tàn",
    "topicId": "other"
  },
  {
    "id": 2512,
    "word": "旅館",
    "hiragana": "りょかん",
    "romaji": "ryokan",
    "meaning": "khách sạn kiểu Nhật",
    "topicId": "shopping"
  },
  {
    "id": 2513,
    "word": "会場",
    "hiragana": "かいじょう",
    "romaji": "kaijou",
    "meaning": "hội trường, địa điểm tổ chức",
    "topicId": "traffic"
  },
  {
    "id": 2514,
    "word": "貿易",
    "hiragana": "ぼうえき",
    "romaji": "boueki",
    "meaning": "thương mại, ngoại thương",
    "topicId": "lifestyle"
  },
  {
    "id": 2515,
    "word": "～様",
    "hiragana": "～さま",
    "romaji": "~sama",
    "meaning": "ngài ~, ông/bà ~ (tôn kính ngữ của ～さん)",
    "topicId": "other"
  },
  {
    "id": 2516,
    "word": "帰りに",
    "hiragana": "かえりに",
    "romaji": "kaerini",
    "meaning": "trên đường về",
    "topicId": "traffic"
  },
  {
    "id": 2517,
    "word": "たまに",
    "hiragana": "たまに",
    "romaji": "tamani",
    "meaning": "thỉnh thoảng",
    "topicId": "health"
  },
  {
    "id": 2518,
    "word": "ちっとも",
    "hiragana": "ちっとも",
    "romaji": "chittomo",
    "meaning": "chẳng ~ tí nào, hoàn toàn không",
    "topicId": "health"
  },
  {
    "id": 2519,
    "word": "遠慮なく",
    "hiragana": "えんりょなく",
    "romaji": "enryonaku",
    "meaning": "không giữ ý, không làm khách, đừng ngại",
    "topicId": "shopping"
  },
  {
    "id": 2520,
    "word": "－年－組",
    "hiragana": "－ねん－くみ",
    "romaji": "-nen -kumi",
    "meaning": "lớp -, năm thứ -",
    "topicId": "time_weather"
  },
  {
    "id": 2521,
    "word": "では",
    "hiragana": "では",
    "romaji": "dewa",
    "meaning": "thế thì, vậy thì (thể lịch sự của じゃ)",
    "topicId": "other"
  },
  {
    "id": 2522,
    "word": "出します [熱を～]",
    "hiragana": "だします [ねつを～]",
    "romaji": "dashimasu [netsuo~]",
    "meaning": "bị [sốt]",
    "topicId": "health"
  },
  {
    "id": 2523,
    "word": "よろしく お伝え ください",
    "hiragana": "よろしく おつたえ ください",
    "romaji": "yoroshiku otsutae kudasai",
    "meaning": "Cho tôi gửi lời hỏi thăm./ Hãy nhắn lại với ~.",
    "topicId": "health"
  },
  {
    "id": 2524,
    "word": "失礼いたします",
    "hiragana": "しつれいいたします",
    "romaji": "shitsureiitashimasu",
    "meaning": "Xin phép anh/chị (dùng khi cúp máy, vào/ra phòng). (khiêm nhường ngữ của しつれいします)",
    "topicId": "greetings"
  },
  {
    "id": 2525,
    "word": "講師",
    "hiragana": "こうし",
    "romaji": "koushi",
    "meaning": "giảng viên, giáo viên",
    "topicId": "shopping"
  },
  {
    "id": 2526,
    "word": "多くの～",
    "hiragana": "おおくの～",
    "romaji": "ookuno~",
    "meaning": "nhiều ~",
    "topicId": "other"
  },
  {
    "id": 2527,
    "word": "作品",
    "hiragana": "さくひん",
    "romaji": "sakuhin",
    "meaning": "tác phẩm",
    "topicId": "other"
  },
  {
    "id": 2528,
    "word": "受賞します",
    "hiragana": "じゅしょうします",
    "romaji": "jushoushimasu",
    "meaning": "nhận giải thưởng, được giải thưởng",
    "topicId": "lifestyle"
  },
  {
    "id": 2529,
    "word": "世界的に",
    "hiragana": "せかいてきに",
    "romaji": "sekaitkini",
    "meaning": "tầm cỡ thế giới",
    "topicId": "other"
  },
  {
    "id": 2530,
    "word": "～で いらっしゃいます",
    "hiragana": "～で いらっしゃいます",
    "romaji": "~de irasshaimasu",
    "meaning": "là ~ (tôn kính ngữ của です)",
    "topicId": "other"
  },
  {
    "id": 2531,
    "word": "長男",
    "hiragana": "ちょうなん",
    "romaji": "chounan",
    "meaning": "trưởng nam",
    "topicId": "other"
  },
  {
    "id": 2532,
    "word": "障害",
    "hiragana": "しょうがい",
    "romaji": "shougai",
    "meaning": "khuyết tật, trở ngại",
    "topicId": "other"
  },
  {
    "id": 2533,
    "word": "お持ちです",
    "hiragana": "おもちです",
    "romaji": "omochidesu",
    "meaning": "có (cách nói tôn kính của もっています)",
    "topicId": "food"
  },
  {
    "id": 2534,
    "word": "作曲",
    "hiragana": "さっきょく",
    "romaji": "sakkyoku",
    "meaning": "sáng tác nhạc",
    "topicId": "food"
  },
  {
    "id": 2535,
    "word": "活動",
    "hiragana": "かつどう",
    "romaji": "katsudou",
    "meaning": "hoạt động",
    "topicId": "health"
  },
  {
    "id": 2536,
    "word": "それでは",
    "hiragana": "それでは",
    "romaji": "soredewa",
    "meaning": "bây giờ thì, vậy thì",
    "topicId": "time_weather"
  },
  {
    "id": 2537,
    "word": "参ります",
    "hiragana": "まいります",
    "romaji": "mairimasu",
    "meaning": "đi, đến (khiêm nhường ngữ của いきます và きます)",
    "topicId": "traffic"
  },
  {
    "id": 2538,
    "word": "申します",
    "hiragana": "もうします",
    "romaji": "moushimasu",
    "meaning": "nói (khiêm nhường ngữ của いいます)",
    "topicId": "other"
  },
  {
    "id": 2539,
    "word": "いたします",
    "hiragana": "いたします",
    "romaji": "itashimasu",
    "meaning": "làm (khiêm nhường ngữ của します)",
    "topicId": "work"
  },
  {
    "id": 2540,
    "word": "拝見します",
    "hiragana": "はいけんします",
    "romaji": "haikenshimasu",
    "meaning": "xem, nhìn (khiêm nhường ngữ của みます)",
    "topicId": "greetings"
  },
  {
    "id": 2541,
    "word": "存じます",
    "hiragana": "ぞんじます",
    "romaji": "zonjimasu",
    "meaning": "biết (khiêm nhường ngữ của しっています)",
    "topicId": "other"
  },
  {
    "id": 2542,
    "word": "お目に かかります",
    "hiragana": "おめにかかります",
    "romaji": "omeni kakarimasu",
    "meaning": "gặp (khiêm nhường ngữ của あいます)",
    "topicId": "other"
  },
  {
    "id": 2543,
    "word": "ございます",
    "hiragana": "ございます",
    "romaji": "gozaimasu",
    "meaning": "có (thể lịch sự của あります)",
    "topicId": "other"
  },
  {
    "id": 2544,
    "word": "～で ございます",
    "hiragana": "～で ございます",
    "romaji": "~de gozaimasu",
    "meaning": "là (thể lịch sự của です)",
    "topicId": "other"
  },
  {
    "id": 2545,
    "word": "私",
    "hiragana": "わたくし",
    "romaji": "watakushi",
    "meaning": "tôi (khiêm nhường ngữ của わたし)",
    "topicId": "other"
  },
  {
    "id": 2546,
    "word": "ガイド",
    "hiragana": "ガイド",
    "romaji": "gaido",
    "meaning": "hướng dẫn viên du lịch (guide)",
    "topicId": "travel"
  },
  {
    "id": 2547,
    "word": "お宅",
    "hiragana": "おたく",
    "romaji": "otaku",
    "meaning": "nhà (của người khác)",
    "topicId": "greetings"
  },
  {
    "id": 2548,
    "word": "郊外",
    "hiragana": "こうがい",
    "romaji": "kougai",
    "meaning": "ngoại ô",
    "topicId": "other"
  },
  {
    "id": 2549,
    "word": "アルバム",
    "hiragana": "アルバム",
    "romaji": "arubamu",
    "meaning": "album",
    "topicId": "other"
  },
  {
    "id": 2550,
    "word": "再来週",
    "hiragana": "さらいしゅう",
    "romaji": "saraishuu",
    "meaning": "tuần tới nữa, tuần sau nữa",
    "topicId": "time_weather"
  },
  {
    "id": 2551,
    "word": "再来月",
    "hiragana": "さらいげつ",
    "romaji": "saraigetsu",
    "meaning": "tháng tới nữa, tháng sau nữa",
    "topicId": "time_weather"
  },
  {
    "id": 2552,
    "word": "再来年",
    "hiragana": "さらいねん",
    "romaji": "sarainen",
    "meaning": "năm tới nữa, năm sau nữa",
    "topicId": "time_weather"
  },
  {
    "id": 2553,
    "word": "半年",
    "hiragana": "はんとし",
    "romaji": "hantoshi",
    "meaning": "nửa năm",
    "topicId": "time_weather"
  },
  {
    "id": 2554,
    "word": "最初に",
    "hiragana": "さいしょに",
    "romaji": "saishoni",
    "meaning": "đầu tiên, thoạt tiên",
    "topicId": "health"
  },
  {
    "id": 2555,
    "word": "最後に",
    "hiragana": "さいごに",
    "romaji": "saigoni",
    "meaning": "cuối cùng",
    "topicId": "other"
  },
  {
    "id": 2556,
    "word": "緊張します",
    "hiragana": "きんちょうします",
    "romaji": "kinchoushimasu",
    "meaning": "căng thẳng, hồi hộp",
    "topicId": "food"
  },
  {
    "id": 2557,
    "word": "放送します",
    "hiragana": "ほうそうします",
    "romaji": "housoushimasu",
    "meaning": "phát thanh, truyền hình",
    "topicId": "greetings"
  },
  {
    "id": 2558,
    "word": "撮ります [ビデオに～]",
    "hiragana": "とります [ビデオに～]",
    "romaji": "torimasu [bideoni~]",
    "meaning": "thu [video]",
    "topicId": "time_weather"
  },
  {
    "id": 2559,
    "word": "賞金",
    "hiragana": "しょうきん",
    "romaji": "shoukin",
    "meaning": "tiền thưởng",
    "topicId": "shopping"
  },
  {
    "id": 2560,
    "word": "きりん",
    "hiragana": "きりん",
    "romaji": "kirin",
    "meaning": "con hươu cao cổ",
    "topicId": "other"
  },
  {
    "id": 2561,
    "word": "象",
    "hiragana": "ぞう",
    "romaji": "zou",
    "meaning": "con voi",
    "topicId": "other"
  },
  {
    "id": 2562,
    "word": "ころ",
    "hiragana": "ころ",
    "romaji": "koro",
    "meaning": "hồi, thời",
    "topicId": "travel"
  },
  {
    "id": 2563,
    "word": "かないます [夢が～]",
    "hiragana": "かないます [ゆめが～]",
    "romaji": "kanaimasu [yumega~]",
    "meaning": "thành hiện thực [mơ ước ~]",
    "topicId": "other"
  },
  {
    "id": 2564,
    "word": "一言 よろしいでしょうか",
    "hiragana": "ひとこと よろしいでしょうか",
    "romaji": "hitokoto yoroshiideshouka",
    "meaning": "Tôi xin phép nói vài lời có được không ạ?",
    "topicId": "other"
  },
  {
    "id": 2565,
    "word": "協力します",
    "hiragana": "きょうりょくします",
    "romaji": "kyouryokushimasu",
    "meaning": "hợp tác",
    "topicId": "other"
  },
  {
    "id": 2566,
    "word": "心から",
    "hiragana": "こころから",
    "romaji": "kokorokara",
    "meaning": "từ trái tim, tận đáy lòng",
    "topicId": "other"
  },
  {
    "id": 2567,
    "word": "感謝します",
    "hiragana": "かんしゃします",
    "romaji": "kanshashimasu",
    "meaning": "cám ơn, cảm tạ",
    "topicId": "food"
  },
  {
    "id": 2568,
    "word": "お礼",
    "hiragana": "おれい",
    "romaji": "orei",
    "meaning": "lời cảm ơn, sự cảm ơn",
    "topicId": "greetings"
  },
  {
    "id": 2569,
    "word": "拝啓",
    "hiragana": "はいけい",
    "romaji": "haikei",
    "meaning": "Kính gửi ~ (câu mở đầu lá thư)",
    "topicId": "lifestyle"
  },
  {
    "id": 2570,
    "word": "お元気で いらっしゃいますか",
    "hiragana": "おげんきで いらっしゃいますか",
    "romaji": "ogenkide irasshaimasuka",
    "meaning": "Anh/chị có khỏe không ạ? (tôn kính ngữ của おげんきですか)",
    "topicId": "greetings"
  },
  {
    "id": 2571,
    "word": "迷惑を かけます",
    "hiragana": "めいわくを かけます",
    "romaji": "meiwakuo kakemasu",
    "meaning": "làm phiền",
    "topicId": "work"
  },
  {
    "id": 2572,
    "word": "生かします",
    "hiragana": "いかします",
    "romaji": "ikashimasu",
    "meaning": "tận dụng, phát huy",
    "topicId": "anime"
  },
  {
    "id": 2573,
    "word": "敬具",
    "hiragana": "けいぐ",
    "romaji": "keigu",
    "meaning": "Kính thư (câu kết thúc lá thư)",
    "topicId": "lifestyle"
  },
  {
    "id": 2574,
    "word": "単語",
    "hiragana": "たんご",
    "romaji": "tango",
    "meaning": "Từ vựng mẫu",
    "topicId": "other"
  },
  {
    "id": 2575,
    "word": "例",
    "hiragana": "れい",
    "romaji": "rei",
    "meaning": "Ví dụ",
    "topicId": "other"
  },
  {
    "id": 2576,
    "word": "ー時",
    "hiragana": "ーじ",
    "romaji": "-ji",
    "meaning": "- giờ",
    "topicId": "time_weather"
  },
  {
    "id": 2577,
    "word": "ー分",
    "hiragana": "ーふん（－ぷん）",
    "romaji": "-fun (-pun)",
    "meaning": "- phút",
    "topicId": "time_weather"
  },
  {
    "id": 2578,
    "word": "晩（夜）",
    "hiragana": "ばん（よる）",
    "romaji": "ban (yoru)",
    "meaning": "Buổi tối, tối",
    "topicId": "food"
  },
  {
    "id": 2579,
    "word": "おととい",
    "hiragana": "おととい",
    "romaji": "ototoi",
    "meaning": "Hôm kia",
    "topicId": "time_weather"
  },
  {
    "id": 2580,
    "word": "きのう",
    "hiragana": "きのう",
    "romaji": "kinou",
    "meaning": "Hôm qua",
    "topicId": "time_weather"
  },
  {
    "id": 2581,
    "word": "きょう",
    "hiragana": "きょう",
    "romaji": "kyou",
    "meaning": "Hôm nay",
    "topicId": "time_weather"
  },
  {
    "id": 2582,
    "word": "あした",
    "hiragana": "あした",
    "romaji": "ashita",
    "meaning": "Ngày mai",
    "topicId": "time_weather"
  },
  {
    "id": 2583,
    "word": "あさって",
    "hiragana": "あさって",
    "romaji": "asatte",
    "meaning": "Ngày kia",
    "topicId": "time_weather"
  },
  {
    "id": 2584,
    "word": "けさ",
    "hiragana": "けさ",
    "romaji": "kesa",
    "meaning": "Sáng nay",
    "topicId": "food"
  },
  {
    "id": 2585,
    "word": "今晩",
    "hiragana": "こんばん",
    "romaji": "konban",
    "meaning": "Tối nay",
    "topicId": "food"
  },
  {
    "id": 2586,
    "word": "休み",
    "hiragana": "やすみ",
    "romaji": "yasumi",
    "meaning": "Nghỉ, nghỉ phép, ngày nghỉ",
    "topicId": "time_weather"
  },
  {
    "id": 2587,
    "word": "昼休み",
    "hiragana": "ひるやすみ",
    "romaji": "hiruyasumi",
    "meaning": "Nghỉ trưa",
    "topicId": "food"
  },
  {
    "id": 2588,
    "word": "毎朝",
    "hiragana": "まいあさ",
    "romaji": "maiasa",
    "meaning": "Hàng sáng, mỗi sáng",
    "topicId": "food"
  },
  {
    "id": 2589,
    "word": "毎晩",
    "hiragana": "まいばん",
    "romaji": "maiban",
    "meaning": "Hàng tối, mỗi tối",
    "topicId": "food"
  },
  {
    "id": 2590,
    "word": "毎日",
    "hiragana": "まいにち",
    "romaji": "mainichi",
    "meaning": "Hàng ngày, mỗi ngày",
    "topicId": "time_weather"
  },
  {
    "id": 2591,
    "word": "月曜日",
    "hiragana": "げつようび",
    "romaji": "getsuyoubi",
    "meaning": "Thứ hai",
    "topicId": "other"
  },
  {
    "id": 2592,
    "word": "火曜日",
    "hiragana": "かようび",
    "romaji": "kayoubi",
    "meaning": "Thứ ba",
    "topicId": "other"
  },
  {
    "id": 2593,
    "word": "水曜日",
    "hiragana": "すいようび",
    "romaji": "suiyoubi",
    "meaning": "Thứ tư",
    "topicId": "other"
  },
  {
    "id": 2594,
    "word": "木曜日",
    "hiragana": "もくようび",
    "romaji": "mokuyoubi",
    "meaning": "Thứ năm",
    "topicId": "time_weather"
  },
  {
    "id": 2595,
    "word": "金曜日",
    "hiragana": "きんようび",
    "romaji": "kinyoubi",
    "meaning": "Thứ sáu",
    "topicId": "other"
  },
  {
    "id": 2596,
    "word": "土曜日",
    "hiragana": "どようび",
    "romaji": "doyoubi",
    "meaning": "Thứ bảy",
    "topicId": "other"
  },
  {
    "id": 2597,
    "word": "日曜日",
    "hiragana": "にちようび",
    "romaji": "nichyoubi",
    "meaning": "Chủ nhật",
    "topicId": "other"
  },
  {
    "id": 2598,
    "word": "何曜日",
    "hiragana": "なんようび",
    "romaji": "nanyoubi",
    "meaning": "Thứ mấy",
    "topicId": "other"
  },
  {
    "id": 2599,
    "word": "番号",
    "hiragana": "ばんごう",
    "romaji": "bangou",
    "meaning": "Số (số điện thoại, số phòng)",
    "topicId": "traffic"
  },
  {
    "id": 2600,
    "word": "何番",
    "hiragana": "なんばん",
    "romaji": "nanban",
    "meaning": "Số bao nhiêu, số mấy",
    "topicId": "other"
  },
  {
    "id": 2601,
    "word": "～まで",
    "hiragana": "～まで",
    "romaji": "~made",
    "meaning": "~ đến",
    "topicId": "traffic"
  },
  {
    "id": 2602,
    "word": "～と～",
    "hiragana": "～と～",
    "romaji": "~to~",
    "meaning": "~ và (dùng để nối hai danh từ)",
    "topicId": "greetings"
  },
  {
    "id": 2603,
    "word": "大変ですね",
    "hiragana": "たいへんですね",
    "romaji": "taihen desu ne",
    "meaning": "Anh/Chị vất vả quá. (dùng để bày tỏ sự thông cảm)",
    "topicId": "greetings"
  },
  {
    "id": 2604,
    "word": "えーと",
    "hiragana": "えーと",
    "romaji": "eeto",
    "meaning": "Ừ, à (từ đệm trong hội thoại khi đang nghĩ điều muốn nói)",
    "topicId": "traffic"
  },
  {
    "id": 2605,
    "word": "お願いします",
    "hiragana": "おねがいします",
    "romaji": "onegaishimasu",
    "meaning": "Nhờ anh/chị. Phiền anh/chị. Xin vui lòng giúp đỡ.",
    "topicId": "greetings"
  },
  {
    "id": 2606,
    "word": "かしこまりました",
    "hiragana": "かしこまりました",
    "romaji": "kashikomarimashita",
    "meaning": "Tôi hiểu rồi ạ./ Vâng, được rồi ạ.",
    "topicId": "other"
  },
  {
    "id": 2607,
    "word": "お問い合わせの番号",
    "hiragana": "おといあわせのばんごう",
    "romaji": "otoiawase no bangou",
    "meaning": "Số điện thoại mà ông/bà muốn hỏi",
    "topicId": "traffic"
  },
  {
    "id": 2608,
    "word": "〔どうも〕ありがとうございました",
    "hiragana": "〔どうも〕ありがとうございました",
    "romaji": "〔doumo〕arigatou gozaimashita",
    "meaning": "Xin cám ơn ông/bà.",
    "topicId": "food"
  },
  {
    "id": 2609,
    "word": "ニューヨーク",
    "hiragana": "ニューヨーク",
    "romaji": "Nyuuyooku",
    "meaning": "New York",
    "topicId": "other"
  },
  {
    "id": 2610,
    "word": "北京",
    "hiragana": "ペキン",
    "romaji": "Pekin",
    "meaning": "Bắc Kinh",
    "topicId": "other"
  },
  {
    "id": 2611,
    "word": "ロンドン",
    "hiragana": "ロンドン",
    "romaji": "Rondon",
    "meaning": "Luân Đôn",
    "topicId": "other"
  },
  {
    "id": 2612,
    "word": "バンコク",
    "hiragana": "バンコク",
    "romaji": "Bankoku",
    "meaning": "Băng Cốc",
    "topicId": "food"
  },
  {
    "id": 2613,
    "word": "ロサンゼルス",
    "hiragana": "ロサンゼルス",
    "romaji": "Rosanzerusu",
    "meaning": "Los Angeles",
    "topicId": "other"
  },
  {
    "id": 2614,
    "word": "やまと美術館",
    "hiragana": "やまとびじゅつかん",
    "romaji": "Yamato bijutsukan",
    "meaning": "Tên một bảo tàng mỹ thuật (giả tưởng)",
    "topicId": "time_weather"
  },
  {
    "id": 2615,
    "word": "大阪デパート",
    "hiragana": "おおさかデパート",
    "romaji": "Osaka depaato",
    "meaning": "Tên một bách hóa (giả tưởng)",
    "topicId": "other"
  },
  {
    "id": 2616,
    "word": "みどり図書館",
    "hiragana": "みどりとしょかん",
    "romaji": "Midori toshokan",
    "meaning": "Tên một thư viện (giả tưởng)",
    "topicId": "lifestyle"
  },
  {
    "id": 2617,
    "word": "アップル銀行",
    "hiragana": "アップルぎんこう",
    "romaji": "Appuru ginkou",
    "meaning": "Tên một ngân hàng (giả tưởng)",
    "topicId": "other"
  }
];
