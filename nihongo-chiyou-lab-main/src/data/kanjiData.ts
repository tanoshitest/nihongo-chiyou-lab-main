export interface KanjiExample {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface KanjiCard {
  id: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  sinoVietnamese: string;
  imageUrl?: string;
  examples: KanjiExample[];
}

export const kanjiData: KanjiCard[] = [
  {
    id: 1,
    kanji: "日",
    onyomi: "ニチ、ジツ",
    kunyomi: "ひ、か",
    meaning: "Mặt trời, Ngày",
    sinoVietnamese: "Nhật",
    examples: [
      {
        japanese: "日曜日に行きます",
        romaji: "Nichiyoubi ni ikimasu",
        vietnamese: "Tôi đi vào chủ nhật",
      },
      {
        japanese: "日本が好きです",
        romaji: "Nihon ga suki desu",
        vietnamese: "Tôi thích Nhật Bản",
      },
      {
        japanese: "毎日日本語を勉強します",
        romaji: "Mainichi Nihongo o benkyou shimasu",
        vietnamese: "Tôi học tiếng Nhật mỗi ngày",
      },
      {
        japanese: "今日はいい天気です",
        romaji: "Kyou wa ii tenki desu",
        vietnamese: "Hôm nay thời tiết đẹp",
      },
      {
        japanese: "母の日",
        romaji: "Haha no hi",
        vietnamese: "Ngày của mẹ",
      },
    ],
  },
  {
    id: 2,
    kanji: "月",
    onyomi: "ゲツ、ガツ",
    kunyomi: "つき",
    meaning: "Mặt trăng, Tháng",
    sinoVietnamese: "Nguyệt",
    examples: [
      {
        japanese: "月曜日は忙しいです",
        romaji: "Getsuyoubi wa isogashii desu",
        vietnamese: "Thứ hai tôi bận",
      },
      {
        japanese: "今月は暑いです",
        romaji: "Kongetsu wa atsui desu",
        vietnamese: "Tháng này nóng",
      },
      {
        japanese: "月がきれいです",
        romaji: "Tsuki ga kirei desu",
        vietnamese: "Mặt trăng đẹp",
      },
      {
        japanese: "来月日本に行きます",
        romaji: "Raigetsu Nihon ni ikimasu",
        vietnamese: "Tháng sau tôi đi Nhật Bản",
      },
      {
        japanese: "一月は寒いです",
        romaji: "Ichigatsu wa samui desu",
        vietnamese: "Tháng một lạnh",
      },
    ],
  },
  {
    id: 3,
    kanji: "火",
    onyomi: "カ",
    kunyomi: "ひ",
    meaning: "Lửa",
    sinoVietnamese: "Hỏa",
    examples: [
      {
        japanese: "火曜日に会いましょう",
        romaji: "Kayoubi ni aimashou",
        vietnamese: "Hẹn gặp vào thứ ba nhé",
      },
      {
        japanese: "火を使います",
        romaji: "Hi o tsukaimasu",
        vietnamese: "Sử dụng lửa",
      },
      {
        japanese: "火事に気をつけて",
        romaji: "Kaji ni ki o tsukete",
        vietnamese: "Hãy cẩn thận với hỏa hoạn",
      },
      {
        japanese: "花火を見ました",
        romaji: "Hanabi o mimashita",
        vietnamese: "Tôi đã xem pháo hoa",
      },
      {
        japanese: "火山が噴火しました",
        romaji: "Kazan ga funka shimashita",
        vietnamese: "Núi lửa đã phun trào",
      },
    ],
  },
  {
    id: 4,
    kanji: "水",
    onyomi: "スイ",
    kunyomi: "みず",
    meaning: "Nước",
    sinoVietnamese: "Thủy",
    examples: [
      {
        japanese: "水曜日は休みです",
        romaji: "Suiyoubi wa yasumi desu",
        vietnamese: "Thứ tư là ngày nghỉ",
      },
      {
        japanese: "水を飲みます",
        romaji: "Mizu o nomimasu",
        vietnamese: "Uống nước",
      },
      {
        japanese: "水泳が好きです",
        romaji: "Suiei ga suki desu",
        vietnamese: "Tôi thích bơi lội",
      },
      {
        japanese: "お水をください",
        romaji: "Omizu o kudasai",
        vietnamese: "Cho tôi nước",
      },
      {
        japanese: "水族館に行きました",
        romaji: "Suizokukan ni ikimashita",
        vietnamese: "Tôi đã đi thủy cung",
      },
    ],
  },
  {
    id: 5,
    kanji: "木",
    onyomi: "モク、ボク",
    kunyomi: "き、こ",
    meaning: "Cây, Gỗ",
    sinoVietnamese: "Mộc",
    examples: [
      {
        japanese: "木曜日に映画を見ます",
        romaji: "Mokuyoubi ni eiga o mimasu",
        vietnamese: "Tôi xem phim vào thứ năm",
      },
      {
        japanese: "大きい木があります",
        romaji: "Ookii ki ga arimasu",
        vietnamese: "Có cây lớn",
      },
      {
        japanese: "木の下で休みます",
        romaji: "Ki no shita de yasumimasu",
        vietnamese: "Nghỉ ngơi dưới gốc cây",
      },
      {
        japanese: "木造の家",
        romaji: "Mokuzou no ie",
        vietnamese: "Nhà gỗ",
      },
      {
        japanese: "植木を育てます",
        romaji: "Ueki o sodatemasu",
        vietnamese: "Trồng cây",
      },
    ],
  },
  {
    id: 6,
    kanji: "金",
    onyomi: "キン、コン",
    kunyomi: "かね、かな",
    meaning: "Vàng, Tiền",
    sinoVietnamese: "Kim",
    examples: [
      {
        japanese: "金曜日は楽しいです",
        romaji: "Kinyoubi wa tanoshii desu",
        vietnamese: "Thứ sáu vui vẻ",
      },
      {
        japanese: "お金がありません",
        romaji: "Okane ga arimasen",
        vietnamese: "Không có tiền",
      },
      {
        japanese: "金メダルを取りました",
        romaji: "Kin medaru o torimashita",
        vietnamese: "Đã giành huy chương vàng",
      },
      {
        japanese: "金色の指輪",
        romaji: "Kiniro no yubiwa",
        vietnamese: "Nhẫn màu vàng",
      },
      {
        japanese: "料金を払います",
        romaji: "Ryoukin o haraimasu",
        vietnamese: "Trả tiền",
      },
    ],
  },
  {
    id: 7,
    kanji: "土",
    onyomi: "ド、ト",
    kunyomi: "つち",
    meaning: "Đất",
    sinoVietnamese: "Thổ",
    examples: [
      {
        japanese: "土曜日は休みです",
        romaji: "Doyoubi wa yasumi desu",
        vietnamese: "Thứ bảy là ngày nghỉ",
      },
      {
        japanese: "土を触ります",
        romaji: "Tsuchi o sawarimasu",
        vietnamese: "Chạm vào đất",
      },
      {
        japanese: "お土産を買います",
        romaji: "Omiyage o kaimasu",
        vietnamese: "Mua quà lưu niệm",
      },
      {
        japanese: "土地が高いです",
        romaji: "Tochi ga takai desu",
        vietnamese: "Giá đất cao",
      },
      {
        japanese: "土木工事",
        romaji: "Doboku kouji",
        vietnamese: "Công trình xây dựng",
      },
    ],
  },
  {
    id: 8,
    kanji: "山",
    onyomi: "サン",
    kunyomi: "やま",
    meaning: "Núi",
    sinoVietnamese: "Sơn",
    examples: [
      {
        japanese: "あの山は高いです",
        romaji: "Ano yama wa takai desu",
        vietnamese: "Ngọn núi kia cao",
      },
      {
        japanese: "富士山に登りたいです",
        romaji: "Fujisan ni noboritai desu",
        vietnamese: "Tôi muốn leo núi Phú Sĩ",
      },
      {
        japanese: "登山が好きです",
        romaji: "Tozan ga suki desu",
        vietnamese: "Tôi thích leo núi",
      },
      {
        japanese: "山道",
        romaji: "Yamamichi",
        vietnamese: "Đường núi",
      },
      {
        japanese: "火山",
        romaji: "Kazan",
        vietnamese: "Núi lửa",
      },
    ],
  },
  {
    id: 9,
    kanji: "川",
    onyomi: "セン",
    kunyomi: "かわ",
    meaning: "Sông",
    sinoVietnamese: "Xuyên",
    examples: [
      {
        japanese: "川で泳ぎます",
        romaji: "Kawa de oyogimasu",
        vietnamese: "Bơi ở sông",
      },
      {
        japanese: "小川",
        romaji: "Ogawa",
        vietnamese: "Con suối nhỏ",
      },
      {
        japanese: "ナイル川",
        romaji: "Nairu-gawa",
        vietnamese: "Sông Nile",
      },
      {
        japanese: "川岸を歩きます",
        romaji: "Kawagishi o arukimasu",
        vietnamese: "Đi bộ bên bờ sông",
      },
      {
        japanese: "川口",
        romaji: "Kawaguchi",
        vietnamese: "Cửa sông",
      },
    ],
  },
  {
    id: 10,
    kanji: "田",
    onyomi: "デン",
    kunyomi: "た",
    meaning: "Ruộng lúa",
    sinoVietnamese: "Điền",
    examples: [
      {
        japanese: "田んぼがあります",
        romaji: "Tanbo ga arimasu",
        vietnamese: "Có ruộng lúa",
      },
      {
        japanese: "水田",
        romaji: "Suiden",
        vietnamese: "Ruộng nước",
      },
      {
        japanese: "田舎に帰ります",
        romaji: "Inaka ni kaerimasu",
        vietnamese: "Về quê",
      },
      {
        japanese: "油田",
        romaji: "Yuden",
        vietnamese: "Mỏ dầu",
      },
      {
        japanese: "山田さんは親切です",
        romaji: "Yamada-san wa shinsetsu desu",
        vietnamese: "Anh Yamada rất tốt bụng",
      },
    ],
  },
  {
    id: 11,
    kanji: "人",
    onyomi: "ジン、ニン",
    kunyomi: "ひと",
    meaning: "Người",
    sinoVietnamese: "Nhân",
    examples: [
      {
        japanese: "あの人は誰ですか",
        romaji: "Ano hito wa dare desu ka",
        vietnamese: "Người kia là ai vậy?",
      },
      {
        japanese: "日本人",
        romaji: "Nihonjin",
        vietnamese: "Người Nhật",
      },
      {
        japanese: "一人で食べます",
        romaji: "Hitori de tabemasu",
        vietnamese: "Ăn một mình",
      },
      {
        japanese: "大人",
        romaji: "Otona",
        vietnamese: "Người lớn",
      },
      {
        japanese: "恋人がいます",
        romaji: "Koibito ga imasu",
        vietnamese: "Có người yêu",
      },
    ],
  },
];
