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
  {
    id: 12,
    kanji: "口",
    onyomi: "コウ、ク",
    kunyomi: "くち",
    meaning: "Miệng",
    sinoVietnamese: "Khẩu",
    examples: [
      {
        japanese: "口を開けます",
        romaji: "Kuchi o akemasu",
        vietnamese: "Mở miệng",
      },
      {
        japanese: "入口",
        romaji: "Iriguchi",
        vietnamese: "Cửa vào",
      },
      {
        japanese: "出口",
        romaji: "Deguchi",
        vietnamese: "Cửa ra",
      },
      {
        japanese: "人口",
        romaji: "Jinkou",
        vietnamese: "Dân số",
      },
      {
        japanese: "北口",
        romaji: "Kitaguchi",
        vietnamese: "Cửa bắc",
      },
    ],
  },
  {
    id: 13,
    kanji: "車",
    onyomi: "シャ",
    kunyomi: "くるま",
    meaning: "Xe",
    sinoVietnamese: "Xa",
    examples: [
      {
        japanese: "電車で行きます",
        romaji: "Densha de ikimasu",
        vietnamese: "Đi bằng tàu điện",
      },
      {
        japanese: "自動車",
        romaji: "Jidousha",
        vietnamese: "Xe ô tô",
      },
      {
        japanese: "自転車",
        romaji: "Jitensha",
        vietnamese: "Xe đạp",
      },
      {
        japanese: "車に乗ります",
        romaji: "Kuruma ni norimasu",
        vietnamese: "Lên xe",
      },
      {
        japanese: "車椅子",
        romaji: "Kurumaisu",
        vietnamese: "Xe lăn",
      },
    ],
  },
  {
    id: 14,
    kanji: "門",
    onyomi: "モン",
    kunyomi: "かど",
    meaning: "Cổng",
    sinoVietnamese: "Môn",
    examples: [
      {
        japanese: "校門",
        romaji: "Koumon",
        vietnamese: "Cổng trường",
      },
      {
        japanese: "門松",
        romaji: "Kadomatsu",
        vietnamese: "Cây nêu ngày tết",
      },
      {
        japanese: "専門",
        romaji: "Senmon",
        vietnamese: "Chuyên môn",
      },
      {
        japanese: "名門",
        romaji: "Meimon",
        vietnamese: "Danh giá, nổi tiếng",
      },
      {
        japanese: "門限",
        romaji: "Mongen",
        vietnamese: "Giờ giới nghiêm",
      },
    ],
  },
  {
    id: 15,
    kanji: "子",
    onyomi: "シ、ス",
    kunyomi: "こ",
    meaning: "Con, Trẻ em",
    sinoVietnamese: "Tử",
    examples: [
      {
        japanese: "子供がいます",
        romaji: "Kodomo ga imasu",
        vietnamese: "Có con",
      },
      {
        japanese: "女の子",
        romaji: "Onnanoko",
        vietnamese: "Bé gái",
      },
      {
        japanese: "男の子",
        romaji: "Otokonoko",
        vietnamese: "Bé trai",
      },
      {
        japanese: "電子辞書",
        romaji: "Denshi jisho",
        vietnamese: "Kim từ điển",
      },
      {
        japanese: "様子",
        romaji: "Yousu",
        vietnamese: "Tình trạng, vẻ bề ngoài",
      },
    ],
  },
  {
    id: 16,
    kanji: "女",
    onyomi: "ジョ",
    kunyomi: "おんな",
    meaning: "Nữ, Phụ nữ",
    sinoVietnamese: "Nữ",
    examples: [
      {
        japanese: "彼女",
        romaji: "Kanojo",
        vietnamese: "Cô ấy / Bạn gái",
      },
      {
        japanese: "女性",
        romaji: "Josei",
        vietnamese: "Phụ nữ",
      },
      {
        japanese: "女の人",
        romaji: "Onna no hito",
        vietnamese: "Người phụ nữ",
      },
      {
        japanese: "長女",
        romaji: "Choujo",
        vietnamese: "Trưởng nữ",
      },
      {
        japanese: "女神",
        romaji: "Megami",
        vietnamese: "Nữ thần",
      },
    ],
  },
  {
    id: 17,
    kanji: "学",
    onyomi: "ガク",
    kunyomi: "まな・ぶ",
    meaning: "Học",
    sinoVietnamese: "Học",
    examples: [
      {
        japanese: "学校",
        romaji: "Gakkou",
        vietnamese: "Trường học",
      },
      {
        japanese: "学生",
        romaji: "Gakusei",
        vietnamese: "Học sinh, sinh viên",
      },
      {
        japanese: "大学",
        romaji: "Daigaku",
        vietnamese: "Đại học",
      },
      {
        japanese: "科学",
        romaji: "Kagaku",
        vietnamese: "Khoa học",
      },
      {
        japanese: "留学します",
        romaji: "Ryuugaku shimasu",
        vietnamese: "Du học",
      },
    ],
  },
  {
    id: 18,
    kanji: "生",
    onyomi: "セイ、ショウ",
    kunyomi: "い・きる、う・まれる、なま",
    meaning: "Sinh, Sống",
    sinoVietnamese: "Sinh",
    examples: [
      {
        japanese: "先生",
        romaji: "Sensei",
        vietnamese: "Giáo viên",
      },
      {
        japanese: "生活",
        romaji: "Seikatsu",
        vietnamese: "Cuộc sống",
      },
      {
        japanese: "誕生日",
        romaji: "Tanjoubi",
        vietnamese: "Sinh nhật",
      },
      {
        japanese: "生ビール",
        romaji: "Nama biiru",
        vietnamese: "Bia tươi",
      },
      {
        japanese: "一生懸命",
        romaji: "Isshoukenmei",
        vietnamese: "Cố gắng hết sức",
      },
    ],
  },
  {
    id: 19,
    kanji: "先",
    onyomi: "セン",
    kunyomi: "さき",
    meaning: "Trước, Tiên",
    sinoVietnamese: "Tiên",
    examples: [
      {
        japanese: "先生",
        romaji: "Sensei",
        vietnamese: "Giáo viên",
      },
      {
        japanese: "先月",
        romaji: "Sengetsu",
        vietnamese: "Tháng trước",
      },
      {
        japanese: "先週",
        romaji: "Senshuu",
        vietnamese: "Tuần trước",
      },
      {
        japanese: "先輩",
        romaji: "Senpai",
        vietnamese: "Tiền bối",
      },
      {
        japanese: "お先に失礼します",
        romaji: "Osaki ni shitsurei shimasu",
        vietnamese: "Tôi xin phép về trước",
      },
    ],
  },
  {
    id: 20,
    kanji: "私",
    onyomi: "シ",
    kunyomi: "わたし、わたくし",
    meaning: "Tôi, Tư",
    sinoVietnamese: "Tư",
    examples: [
      {
        japanese: "私は学生です",
        romaji: "Watashi wa gakusei desu",
        vietnamese: "Tôi là sinh viên",
      },
      {
        japanese: "私立大学",
        romaji: "Shiritsu daigaku",
        vietnamese: "Đại học tư lập",
      },
      {
        japanese: "私生活",
        romaji: "Shiseikatsu",
        vietnamese: "Đời sống riêng tư",
      },
      {
        japanese: "私鉄",
        romaji: "Shitetsu",
        vietnamese: "Đường sắt tư nhân",
      },
      {
        japanese: "私用",
        romaji: "Shiyou",
        vietnamese: "Việc riêng",
      },
    ],
  },
  {
    id: 21,
    kanji: "一",
    onyomi: "イチ、イツ",
    kunyomi: "ひと・つ",
    meaning: "Một",
    sinoVietnamese: "Nhất",
    examples: [
      {
        japanese: "一つ",
        romaji: "Hitotsu",
        vietnamese: "Một cái",
      },
      {
        japanese: "一人",
        romaji: "Hitori",
        vietnamese: "Một người",
      },
      {
        japanese: "一月",
        romaji: "Ichigatsu",
        vietnamese: "Tháng một",
      },
      {
        japanese: "一年生",
        romaji: "Ichinensei",
        vietnamese: "Học sinh năm nhất",
      },
      {
        japanese: "一日",
        romaji: "Tsuitachi",
        vietnamese: "Ngày mồng một",
      },
    ],
  },
  {
    id: 22,
    kanji: "二",
    onyomi: "ニ",
    kunyomi: "ふた・つ",
    meaning: "Hai",
    sinoVietnamese: "Nhị",
    examples: [
      {
        japanese: "二つ",
        romaji: "Futatsu",
        vietnamese: "Hai cái",
      },
      {
        japanese: "二人",
        romaji: "Futari",
        vietnamese: "Hai người",
      },
      {
        japanese: "二月",
        romaji: "Nigatsu",
        vietnamese: "Tháng hai",
      },
      {
        japanese: "二日",
        romaji: "Futsuka",
        vietnamese: "Ngày mồng hai",
      },
      {
        japanese: "二階",
        romaji: "Nikai",
        vietnamese: "Tầng 2",
      },
    ],
  },
  {
    id: 23,
    kanji: "三",
    onyomi: "サン",
    kunyomi: "みっ・つ",
    meaning: "Ba",
    sinoVietnamese: "Tam",
    examples: [
      {
        japanese: "三つ",
        romaji: "Mittsu",
        vietnamese: "Ba cái",
      },
      {
        japanese: "三月",
        romaji: "Sangatsu",
        vietnamese: "Tháng ba",
      },
      {
        japanese: "三日",
        romaji: "Mikka",
        vietnamese: "Ngày mồng ba",
      },
      {
        japanese: "三人",
        romaji: "Sannin",
        vietnamese: "Ba người",
      },
      {
        japanese: "三角",
        romaji: "Sankaku",
        vietnamese: "Hình tam giác",
      },
    ],
  },
  {
    id: 24,
    kanji: "四",
    onyomi: "シ",
    kunyomi: "よっ・つ、よん、よ",
    meaning: "Bốn",
    sinoVietnamese: "Tứ",
    examples: [
      {
        japanese: "四つ",
        romaji: "Yottsu",
        vietnamese: "Bốn cái",
      },
      {
        japanese: "四月",
        romaji: "Shigatsu",
        vietnamese: "Tháng tư",
      },
      {
        japanese: "四日",
        romaji: "Yokka",
        vietnamese: "Ngày mồng bốn",
      },
      {
        japanese: "四人",
        romaji: "Yonin",
        vietnamese: "Bốn người",
      },
      {
        japanese: "四季",
        romaji: "Shiki",
        vietnamese: "Bốn mùa",
      },
    ],
  },
  {
    id: 25,
    kanji: "五",
    onyomi: "ゴ",
    kunyomi: "いつ・つ",
    meaning: "Năm",
    sinoVietnamese: "Ngũ",
    examples: [
      {
        japanese: "五つ",
        romaji: "Itsutsu",
        vietnamese: "Năm cái",
      },
      {
        japanese: "五月",
        romaji: "Gogatsu",
        vietnamese: "Tháng năm",
      },
      {
        japanese: "五日",
        romaji: "Itsuka",
        vietnamese: "Ngày mồng năm",
      },
      {
        japanese: "五円",
        romaji: "Goen",
        vietnamese: "5 yên",
      },
      {
        japanese: "五感",
        romaji: "Gokan",
        vietnamese: "Ngũ giác",
      },
    ],
  },
  {
    id: 26,
    kanji: "六",
    onyomi: "ロク",
    kunyomi: "むっ・つ",
    meaning: "Sáu",
    sinoVietnamese: "Lục",
    examples: [
      {
        japanese: "六つ",
        romaji: "Muttsu",
        vietnamese: "Sáu cái",
      },
      {
        japanese: "六月",
        romaji: "Rokugatsu",
        vietnamese: "Tháng sáu",
      },
      {
        japanese: "六日",
        romaji: "Muika",
        vietnamese: "Ngày mồng sáu",
      },
      {
        japanese: "六百",
        romaji: "Roppyaku",
        vietnamese: "600",
      },
      {
        japanese: "六法",
        romaji: "Roppou",
        vietnamese: "Sáu bộ luật",
      },
    ],
  },
  {
    id: 27,
    kanji: "七",
    onyomi: "シチ",
    kunyomi: "なな・つ、なな",
    meaning: "Bảy",
    sinoVietnamese: "Thất",
    examples: [
      {
        japanese: "七つ",
        romaji: "Nanatsu",
        vietnamese: "Bảy cái",
      },
      {
        japanese: "七月",
        romaji: "Shichigatsu",
        vietnamese: "Tháng bảy",
      },
      {
        japanese: "七日",
        romaji: "Nanoka",
        vietnamese: "Ngày mồng bảy",
      },
      {
        japanese: "七五三",
        romaji: "Shichigosan",
        vietnamese: "Lễ 7-5-3",
      },
      {
        japanese: "七不思議",
        romaji: "Nanafushigi",
        vietnamese: "Bảy điều kỳ lạ",
      },
    ],
  },
  {
    id: 28,
    kanji: "八",
    onyomi: "ハチ",
    kunyomi: "やっ・つ",
    meaning: "Tám",
    sinoVietnamese: "Bát",
    examples: [
      {
        japanese: "八つ",
        romaji: "Yattsu",
        vietnamese: "Tám cái",
      },
      {
        japanese: "八月",
        romaji: "Hachigatsu",
        vietnamese: "Tháng tám",
      },
      {
        japanese: "八日",
        romaji: "Youka",
        vietnamese: "Ngày mồng tám",
      },
      {
        japanese: "八百屋",
        romaji: "Yaoya",
        vietnamese: "Cửa hàng rau",
      },
      {
        japanese: "八方",
        romaji: "Happou",
        vietnamese: "Mọi phía / Bát phương",
      },
    ],
  },
  {
    id: 29,
    kanji: "九",
    onyomi: "キュウ、ク",
    kunyomi: "ここの・つ",
    meaning: "Chín",
    sinoVietnamese: "Cửu",
    examples: [
      {
        japanese: "九つ",
        romaji: "Kokonotsu",
        vietnamese: "Chín cái",
      },
      {
        japanese: "九月",
        romaji: "Kugatsu",
        vietnamese: "Tháng chín",
      },
      {
        japanese: "九日",
        romaji: "Kokonoka",
        vietnamese: "Ngày mồng chín",
      },
      {
        japanese: "九人",
        romaji: "Kyunin",
        vietnamese: "Chín người",
      },
      {
        japanese: "九州",
        romaji: "Kyuushuu",
        vietnamese: "Đảo Kyushu",
      },
    ],
  },
  {
    id: 30,
    kanji: "十",
    onyomi: "ジュウ、ジッ",
    kunyomi: "とお",
    meaning: "Mười",
    sinoVietnamese: "Thập",
    examples: [
      {
        japanese: "十",
        romaji: "Too",
        vietnamese: "Mười cái (đếm đồ vật)",
      },
      {
        japanese: "十月",
        romaji: "Juugatsu",
        vietnamese: "Tháng mười",
      },
      {
        japanese: "十日",
        romaji: "Tooka",
        vietnamese: "Ngày mồng mười",
      },
      {
        japanese: "十分",
        romaji: "Juppun",
        vietnamese: "10 phút",
      },
      {
        japanese: "十字路",
        romaji: "Juujiro",
        vietnamese: "Ngã tư",
      },
    ],
  },
  {
    id: 31,
    kanji: "百",
    onyomi: "ヒャク",
    kunyomi: "",
    meaning: "Trăm",
    sinoVietnamese: "Bách",
    examples: [
      {
        japanese: "百円",
        romaji: "Hyakuen",
        vietnamese: "100 yên",
      },
      {
        japanese: "三百",
        romaji: "Sanbyaku",
        vietnamese: "300",
      },
      {
        japanese: "六百",
        romaji: "Roppyaku",
        vietnamese: "600",
      },
      {
        japanese: "八百",
        romaji: "Happyaku",
        vietnamese: "800",
      },
      {
        japanese: "百貨店",
        romaji: "Hyakkaten",
        vietnamese: "Cửa hàng bách hóa",
      },
    ],
  },
  {
    id: 32,
    kanji: "千",
    onyomi: "セン",
    kunyomi: "ち",
    meaning: "Nghìn",
    sinoVietnamese: "Thiên",
    examples: [
      {
        japanese: "千円",
        romaji: "Senen",
        vietnamese: "1000 yên",
      },
      {
        japanese: "三千",
        romaji: "Sanzen",
        vietnamese: "3000",
      },
      {
        japanese: "八千",
        romaji: "Hassen",
        vietnamese: "8000",
      },
      {
        japanese: "千葉県",
        romaji: "Chibaken",
        vietnamese: "Tỉnh Chiba",
      },
      {
        japanese: "千切り",
        romaji: "Sengiri",
        vietnamese: "Thái sợi",
      },
    ],
  },
  {
    id: 33,
    kanji: "上",
    onyomi: "ジョウ",
    kunyomi: "うえ、あ・げる",
    meaning: "Trên",
    sinoVietnamese: "Thượng",
    examples: [
      {
        japanese: "机の上に本があります",
        romaji: "Tsukue no ue ni hon ga arimasu",
        vietnamese: "Trên bàn có quyển sách"
      },
      {
        japanese: "上着",
        romaji: "Uwagi",
        vietnamese: "Áo khoác"
      },
      {
        japanese: "上手です",
        romaji: "Jouzu desu",
        vietnamese: "Giỏi"
      },
      {
        japanese: "手紙を差し上げます",
        romaji: "Tegami o sashiagemasu",
        vietnamese: "Tặng/gửi thư (kính ngữ)"
      },
      {
        japanese: "屋上",
        romaji: "Okujou",
        vietnamese: "Sân thượng"
      }
    ]
  },
  {
    id: 34,
    kanji: "下",
    onyomi: "カ、ゲ",
    kunyomi: "した、さ・げる",
    meaning: "Dưới",
    sinoVietnamese: "Hạ",
    examples: [
      {
        japanese: "椅子の下に猫がいます",
        romaji: "Isu no shita ni neko ga imasu",
        vietnamese: "Dưới ghế có con mèo"
      },
      {
        japanese: "地下鉄",
        romaji: "Chikatetsu",
        vietnamese: "Tàu điện ngầm"
      },
      {
        japanese: "下手です",
        romaji: "Heta desu",
        vietnamese: "Kém"
      },
      {
        japanese: "靴下",
        romaji: "Kutsushita",
        vietnamese: "Tất/vớ"
      },
      {
        japanese: "下さい",
        romaji: "Kudasai",
        vietnamese: "Xin hãy..."
      }
    ]
  },
  {
    id: 35,
    kanji: "中",
    onyomi: "チュウ",
    kunyomi: "なか",
    meaning: "Trong, Giữa",
    sinoVietnamese: "Trung",
    examples: [
      {
        japanese: "箱の中に何がありますか",
        romaji: "Hako no naka ni nani ga arimasu ka",
        vietnamese: "Trong hộp có cái gì?"
      },
      {
        japanese: "中国",
        romaji: "Chuugoku",
        vietnamese: "Trung Quốc"
      },
      {
        japanese: "中学校",
        romaji: "Chuugakkou",
        vietnamese: "Trường cấp 2"
      },
      {
        japanese: "一日中",
        romaji: "Ichinichijuu",
        vietnamese: "Suốt cả ngày"
      },
      {
        japanese: "背中",
        romaji: "Senaka",
        vietnamese: "Lưng"
      }
    ]
  },
  {
    id: 36,
    kanji: "大",
    onyomi: "ダイ、タイ",
    kunyomi: "おお・きい",
    meaning: "To, Lớn",
    sinoVietnamese: "Đại",
    examples: [
      {
        japanese: "大きい家",
        romaji: "Ookii ie",
        vietnamese: "Ngôi nhà lớn"
      },
      {
        japanese: "大学",
        romaji: "Daigaku",
        vietnamese: "Đại học"
      },
      {
        japanese: "大変です",
        romaji: "Taihen desu",
        vietnamese: "Vất vả/Kinh khủng"
      },
      {
        japanese: "大人",
        romaji: "Otona",
        vietnamese: "Người lớn"
      },
      {
        japanese: "大切",
        romaji: "Taisetsu",
        vietnamese: "Quan trọng"
      }
    ]
  },
  {
    id: 37,
    kanji: "小",
    onyomi: "ショウ",
    kunyomi: "ちい・さい",
    meaning: "Nhỏ",
    sinoVietnamese: "Tiểu",
    examples: [
      {
        japanese: "小さい犬",
        romaji: "Chiisai inu",
        vietnamese: "Con chó nhỏ"
      },
      {
        japanese: "小学校",
        romaji: "Shougakkou",
        vietnamese: "Trường tiểu học"
      },
      {
        japanese: "小川",
        romaji: "Ogawa",
        vietnamese: "Con suối nhỏ"
      },
      {
        japanese: "小包",
        romaji: "Kozutsumi",
        vietnamese: "Bưu kiện"
      },
      {
        japanese: "小麦",
        romaji: "Komugi",
        vietnamese: "Lúa mì"
      }
    ]
  },
  {
    id: 38,
    kanji: "本",
    onyomi: "ホン",
    kunyomi: "もと",
    meaning: "Sách/Gốc",
    sinoVietnamese: "Bản",
    examples: [
      {
        japanese: "本を読みます",
        romaji: "Hon o yomimasu",
        vietnamese: "Đọc sách"
      },
      {
        japanese: "日本",
        romaji: "Nihon",
        vietnamese: "Nhật Bản"
      },
      {
        japanese: "山本さん",
        romaji: "Yamamoto-san",
        vietnamese: "Anh Yamamoto"
      },
      {
        japanese: "本日",
        romaji: "Honjitsu",
        vietnamese: "Hôm nay (trang trọng)"
      },
      {
        japanese: "本店",
        romaji: "Honten",
        vietnamese: "Trụ sở chính"
      }
    ]
  },
  {
    id: 39,
    kanji: "半",
    onyomi: "ハン",
    kunyomi: "なか・ば",
    meaning: "Nửa",
    sinoVietnamese: "Bán",
    examples: [
      {
        japanese: "三時半",
        romaji: "Sanji han",
        vietnamese: "3 giờ rưỡi"
      },
      {
        japanese: "半分",
        romaji: "Hanbun",
        vietnamese: "Một nửa"
      },
      {
        japanese: "半年",
        romaji: "Hantoshi",
        vietnamese: "Nửa năm"
      },
      {
        japanese: "半月",
        romaji: "Hangetsu",
        vietnamese: "Nửa tháng"
      },
      {
        japanese: "前半",
        romaji: "Zenhan",
        vietnamese: "Nửa đầu"
      }
    ]
  },
  {
    id: 40,
    kanji: "分",
    onyomi: "フン、ブン、ブ",
    kunyomi: "わ・かる",
    meaning: "Phút/Phần/Hiểu",
    sinoVietnamese: "Phân",
    examples: [
      {
        japanese: "五分",
        romaji: "Gofun",
        vietnamese: "5 phút"
      },
      {
        japanese: "分かります",
        romaji: "Wakarimasu",
        vietnamese: "Hiểu"
      },
      {
        japanese: "自分",
        romaji: "Jibun",
        vietnamese: "Bản thân"
      },
      {
        japanese: "半分",
        romaji: "Hanbun",
        vietnamese: "Một nửa"
      },
      {
        japanese: "気分",
        romaji: "Kibun",
        vietnamese: "Tâm trạng"
      }
    ]
  },
  {
    id: 41,
    kanji: "力",
    onyomi: "リョク",
    kunyomi: "ちから",
    meaning: "Sức lực",
    sinoVietnamese: "Lực",
    examples: [
      {
        japanese: "力があります",
        romaji: "Chikara ga arimasu",
        vietnamese: "Có sức khỏe/năng lực"
      },
      {
        japanese: "体力",
        romaji: "Tairyoku",
        vietnamese: "Thể lực"
      },
      {
        japanese: "実力",
        romaji: "Jitsuryoku",
        vietnamese: "Thực lực"
      },
      {
        japanese: "電力",
        romaji: "Denryoku",
        vietnamese: "Điện lực"
      },
      {
        japanese: "力士",
        romaji: "Rikishi",
        vietnamese: "Võ sĩ Sumo"
      }
    ]
  },
  {
    id: 42,
    kanji: "何",
    onyomi: "カ",
    kunyomi: "なに、なん",
    meaning: "Cái gì",
    sinoVietnamese: "Hà",
    examples: [
      {
        japanese: "何ですか",
        romaji: "Nan desu ka",
        vietnamese: "Cái gì vậy?"
      },
      {
        japanese: "何時ですか",
        romaji: "Nanji desu ka",
        vietnamese: "Mấy giờ vậy?"
      },
      {
        japanese: "何人",
        romaji: "Nannin",
        vietnamese: "Mấy người"
      },
      {
        japanese: "何か",
        romaji: "Nanika",
        vietnamese: "Cái gì đó"
      },
      {
        japanese: "幾何学",
        romaji: "Kikagaku",
        vietnamese: "Hình học"
      }
    ]
  },
  {
    id: 43,
    kanji: "明",
    onyomi: "メイ、ミョウ",
    kunyomi: "あ・かるい",
    meaning: "Sáng",
    sinoVietnamese: "Minh",
    examples: [
      {
        japanese: "明るい部屋",
        romaji: "Akarui heya",
        vietnamese: "Căn phòng sáng sủa"
      },
      {
        japanese: "明日",
        romaji: "Ashita / Asu",
        vietnamese: "Ngày mai"
      },
      {
        japanese: "説明",
        romaji: "Setsumei",
        vietnamese: "Giải thích"
      },
      {
        japanese: "発明",
        romaji: "Hatsumei",
        vietnamese: "Phát minh"
      },
      {
        japanese: "明後日",
        romaji: "Asatte",
        vietnamese: "Ngày kia"
      }
    ]
  },
  {
    id: 44,
    kanji: "休",
    onyomi: "キュウ",
    kunyomi: "やす・む",
    meaning: "Nghỉ",
    sinoVietnamese: "Hưu",
    examples: [
      {
        japanese: "休みます",
        romaji: "Yasumimasu",
        vietnamese: "Nghỉ ngơi"
      },
      {
        japanese: "休み",
        romaji: "Yasumi",
        vietnamese: "Ngày nghỉ"
      },
      {
        japanese: "休日",
        romaji: "Kyuujitsu",
        vietnamese: "Ngày lễ/nghỉ"
      },
      {
        japanese: "夏休み",
        romaji: "Natsuyasumi",
        vietnamese: "Nghỉ hè"
      },
      {
        japanese: "休憩",
        romaji: "Kyuukei",
        vietnamese: "Nghỉ giải lao"
      }
    ]
  },
  {
    id: 45,
    kanji: "体",
    onyomi: "タイ",
    kunyomi: "からだ",
    meaning: "Cơ thể",
    sinoVietnamese: "Thể",
    examples: [
      {
        japanese: "体が大きい",
        romaji: "Karada ga ookii",
        vietnamese: "Cơ thể to lớn"
      },
      {
        japanese: "体育",
        romaji: "Taiiku",
        vietnamese: "Thể dục"
      },
      {
        japanese: "体力",
        romaji: "Tairyoku",
        vietnamese: "Thể lực"
      },
      {
        japanese: "全体",
        romaji: "Zentai",
        vietnamese: "Toàn thể"
      },
      {
        japanese: "団体",
        romaji: "Dantai",
        vietnamese: "Đoàn thể/nhóm"
      }
    ]
  },
  {
    id: 46,
    kanji: "好",
    onyomi: "コウ",
    kunyomi: "す・き",
    meaning: "Thích",
    sinoVietnamese: "Hảo",
    examples: [
      {
        japanese: "好きです",
        romaji: "Suki desu",
        vietnamese: "Thích"
      },
      {
        japanese: "大好物",
        romaji: "Daikoubutsu",
        vietnamese: "Món ăn yêu thích nhất"
      },
      {
        japanese: "好み",
        romaji: "Konomi",
        vietnamese: "Sở thích/Gu"
      },
      {
        japanese: "好意",
        romaji: "Koui",
        vietnamese: "Thiện ý"
      },
      {
        japanese: "友好",
        romaji: "Yuukou",
        vietnamese: "Hữu nghị"
      }
    ]
  },
  {
    id: 47,
    kanji: "男",
    onyomi: "ダン、ナン",
    kunyomi: "おとこ",
    meaning: "Nam",
    sinoVietnamese: "Nam",
    examples: [
      {
        japanese: "男の子",
        romaji: "Otokonoko",
        vietnamese: "Bé trai"
      },
      {
        japanese: "男性",
        romaji: "Dansei",
        vietnamese: "Nam giới"
      },
      {
        japanese: "男の人",
        romaji: "Otoko no hito",
        vietnamese: "Người đàn ông"
      },
      {
        japanese: "長男",
        romaji: "Chounan",
        vietnamese: "Trưởng nam"
      },
      {
        japanese: "男子学生",
        romaji: "Danshi gakusei",
        vietnamese: "Nam sinh"
      }
    ]
  },
  {
    id: 48,
    kanji: "林",
    onyomi: "リン",
    kunyomi: "はやし",
    meaning: "Rừng thưa",
    sinoVietnamese: "Lâm",
    examples: [
      {
        japanese: "林の中にいます",
        romaji: "Hayashi no naka ni imasu",
        vietnamese: "Đang ở trong rừng"
      },
      {
        japanese: "小林さん",
        romaji: "Kobayashi-san",
        vietnamese: "Anh Kobayashi"
      },
      {
        japanese: "林業",
        romaji: "Ringyou",
        vietnamese: "Lâm nghiệp"
      },
      {
        japanese: "山林",
        romaji: "Sanrin",
        vietnamese: "Rừng núi"
      },
      {
        japanese: "林道",
        romaji: "Rindou",
        vietnamese: "Đường rừng"
      }
    ]
  },
  {
    id: 49,
    kanji: "森",
    onyomi: "シン",
    kunyomi: "もり",
    meaning: "Rừng rậm",
    sinoVietnamese: "Sâm",
    examples: [
      {
        japanese: "森へ行きます",
        romaji: "Mori e ikimasu",
        vietnamese: "Đi vào rừng"
      },
      {
        japanese: "森林",
        romaji: "Shinrin",
        vietnamese: "Rừng rậm"
      },
      {
        japanese: "森田さん",
        romaji: "Morita-san",
        vietnamese: "Anh Morita"
      },
      {
        japanese: "青森",
        romaji: "Aomori",
        vietnamese: "Tỉnh Aomori"
      },
      {
        japanese: "森ガール",
        romaji: "Mori gaaru",
        vietnamese: "Cô gái phong cách rừng xanh"
      }
    ]
  },
  {
    id: 50,
    kanji: "間",
    onyomi: "カン、ゲン",
    kunyomi: "あいだ、ま",
    meaning: "Giữa, Gian",
    sinoVietnamese: "Gian",
    examples: [
      {
        japanese: "時間",
        romaji: "Jikan",
        vietnamese: "Thời gian"
      },
      {
        japanese: "間に合います",
        romaji: "Maniai masu",
        vietnamese: "Kịp giờ"
      },
      {
        japanese: "AとBの間",
        romaji: "A to B no aida",
        vietnamese: "Giữa A và B"
      },
      {
        japanese: "間違い",
        romaji: "Machigai",
        vietnamese: "Nhầm lẫn"
      },
      {
        japanese: "空間",
        romaji: "Kuukan",
        vietnamese: "Không gian"
      }
    ]
  },
  {
    id: 51,
    kanji: "畑",
    onyomi: "",
    kunyomi: "はたけ",
    meaning: "Ruộng đồng",
    sinoVietnamese: "Điền (Nhật tạo)",
    examples: [
      {
        japanese: "畑を耕します",
        romaji: "Hatake o tagayashimasu",
        vietnamese: "Cày ruộng"
      },
      {
        japanese: "花畑",
        romaji: "Hanabatake",
        vietnamese: "Cánh đồng hoa"
      },
      {
        japanese: "田畑",
        romaji: "Tahata",
        vietnamese: "Ruộng nương"
      },
      {
        japanese: "茶畑",
        romaji: "Chabatake",
        vietnamese: "Đồi chè"
      },
      {
        japanese: "野菜畑",
        romaji: "Yasaibatake",
        vietnamese: "Vườn rau"
      }
    ]
  },
  {
    id: 52,
    kanji: "岩",
    onyomi: "ガン",
    kunyomi: "いわ",
    meaning: "Đá tảng",
    sinoVietnamese: "Nham",
    examples: [
      {
        japanese: "大きい岩",
        romaji: "Ookii iwa",
        vietnamese: "Tảng đá lớn"
      },
      {
        japanese: "岩石",
        romaji: "Ganseki",
        vietnamese: "Đất đá"
      },
      {
        japanese: "岩山",
        romaji: "Iwayama",
        vietnamese: "Núi đá"
      },
      {
        japanese: "岩手県",
        romaji: "Iwateken",
        vietnamese: "Tỉnh Iwate"
      },
      {
        japanese: "溶岩",
        romaji: "Yougan",
        vietnamese: "Dung nham"
      }
    ]
  },
  {
    id: 53,
    kanji: "目",
    onyomi: "モク",
    kunyomi: "め",
    meaning: "Mắt",
    sinoVietnamese: "Mục",
    examples: [
      {
        japanese: "目がいいです",
        romaji: "Me ga ii desu",
        vietnamese: "Mắt tốt"
      },
      {
        japanese: "目薬",
        romaji: "Megusuri",
        vietnamese: "Thuốc nhỏ mắt"
      },
      {
        japanese: "二番目",
        romaji: "Nibanme",
        vietnamese: "Thứ hai (vị trí)"
      },
      {
        japanese: "目的",
        romaji: "Mokuteki",
        vietnamese: "Mục đích"
      },
      {
        japanese: "目次",
        romaji: "Mokuji",
        vietnamese: "Mục lục"
      }
    ]
  },
  {
    id: 54,
    kanji: "耳",
    onyomi: "ジ",
    kunyomi: "みみ",
    meaning: "Tai",
    sinoVietnamese: "Nhĩ",
    examples: [
      {
        japanese: "耳が痛いです",
        romaji: "Mimi ga itai desu",
        vietnamese: "Đau tai"
      },
      {
        japanese: "耳鼻科",
        romaji: "Jibika",
        vietnamese: "Khoa tai mũi họng"
      },
      {
        japanese: "初耳",
        romaji: "Hatsumimi",
        vietnamese: "Nghe lần đầu"
      },
      {
        japanese: "耳鳴り",
        romaji: "Miminari",
        vietnamese: "Ù tai"
      },
      {
        japanese: "パンの耳",
        romaji: "Pan no mimi",
        vietnamese: "Vỏ bánh mì"
      }
    ]
  },
  {
    id: 55,
    kanji: "手",
    onyomi: "シュ",
    kunyomi: "て",
    meaning: "Tay",
    sinoVietnamese: "Thủ",
    examples: [
      {
        japanese: "手を洗います",
        romaji: "Te o araimasu",
        vietnamese: "Rửa tay"
      },
      {
        japanese: "手紙",
        romaji: "Tegami",
        vietnamese: "Bức thư"
      },
      {
        japanese: "歌手",
        romaji: "Kashu",
        vietnamese: "Ca sĩ"
      },
      {
        japanese: "上手",
        romaji: "Jouzu",
        vietnamese: "Giỏi"
      },
      {
        japanese: "切手",
        romaji: "Kitte",
        vietnamese: "Tem thư"
      }
    ]
  },
  {
    id: 56,
    kanji: "足",
    onyomi: "ソク",
    kunyomi: "あし、た・りる",
    meaning: "Chân",
    sinoVietnamese: "Túc",
    examples: [
      {
        japanese: "足が速いです",
        romaji: "Ashi ga hayai desu",
        vietnamese: "Chạy nhanh (chân nhanh)"
      },
      {
        japanese: "足ります",
        romaji: "Tarimasu",
        vietnamese: "Đủ"
      },
      {
        japanese: "足音",
        romaji: "Ashioto",
        vietnamese: "Tiếng bước chân"
      },
      {
        japanese: "不足",
        romaji: "Fusoku",
        vietnamese: "Thiếu"
      },
      {
        japanese: "遠足",
        romaji: "Ensoku",
        vietnamese: "Dã ngoại"
      }
    ]
  },
  {
    id: 57,
    kanji: "雨",
    onyomi: "ウ",
    kunyomi: "あめ",
    meaning: "Mưa",
    sinoVietnamese: "Vũ",
    examples: [
      {
        japanese: "雨が降っています",
        romaji: "Ame ga futte imasu",
        vietnamese: "Trời đang mưa"
      },
      {
        japanese: "大雨",
        romaji: "Ooame",
        vietnamese: "Mưa lớn"
      },
      {
        japanese: "雨期",
        romaji: "Uki",
        vietnamese: "Mùa mưa"
      },
      {
        japanese: "雨具",
        romaji: "Amagu",
        vietnamese: "Đồ đi mưa"
      },
      {
        japanese: "小雨",
        romaji: "Kosame",
        vietnamese: "Mưa nhỏ"
      }
    ]
  },
  {
    id: 58,
    kanji: "竹",
    onyomi: "チク",
    kunyomi: "たけ",
    meaning: "Tre",
    sinoVietnamese: "Trúc",
    examples: [
      {
        japanese: "竹の子",
        romaji: "Takenoko",
        vietnamese: "Măng"
      },
      {
        japanese: "竹林",
        romaji: "Chikurin",
        vietnamese: "Rừng tre"
      },
      {
        japanese: "竹馬",
        romaji: "Takeuma",
        vietnamese: "Cà kheo/ngựa tre"
      },
      {
        japanese: "竹田さん",
        romaji: "Takeda-san",
        vietnamese: "Anh Takeda"
      },
      {
        japanese: "松竹梅",
        romaji: "Shouchikubai",
        vietnamese: "Tùng Trúc Mai"
      }
    ]
  },
  {
    id: 59,
    kanji: "米",
    onyomi: "ベイ、マイ",
    kunyomi: "こめ",
    meaning: "Gạo",
    sinoVietnamese: "Mễ",
    examples: [
      {
        japanese: "お米を研ぎます",
        romaji: "Okome o togimasu",
        vietnamese: "Vo gạo"
      },
      {
        japanese: "米国",
        romaji: "Beikoku",
        vietnamese: "Nước Mỹ"
      },
      {
        japanese: "新米",
        romaji: "Shinmai",
        vietnamese: "Gạo mới / Người mới"
      },
      {
        japanese: "中米",
        romaji: "Chuubei",
        vietnamese: "Trung Mỹ"
      },
      {
        japanese: "玄米",
        romaji: "Genmai",
        vietnamese: "Gạo lứt"
      }
    ]
  },
  {
    id: 60,
    kanji: "貝",
    onyomi: "",
    kunyomi: "かい",
    meaning: "Sò, Hến",
    sinoVietnamese: "Bối",
    examples: [
      {
        japanese: "貝殻",
        romaji: "Kaigara",
        vietnamese: "Vỏ sò"
      },
      {
        japanese: "巻き貝",
        romaji: "Makigai",
        vietnamese: "Ốc"
      },
      {
        japanese: "貝柱",
        romaji: "Kaibashira",
        vietnamese: "Cồi sò"
      },
      {
        japanese: "赤貝",
        romaji: "Akagai",
        vietnamese: "Sò huyết"
      },
      {
        japanese: "ムール貝",
        romaji: "Muurugai",
        vietnamese: "Vẹm"
      }
    ]
  },
  {
    id: 61,
    kanji: "石",
    onyomi: "セキ",
    kunyomi: "いし",
    meaning: "Đá",
    sinoVietnamese: "Thạch",
    examples: [
      {
        japanese: "石の上にも三年",
        romaji: "Ishi no ue ni mo sannen",
        vietnamese: "Ngồi trên đá 3 năm (Có công mài sắt có ngày nên kim)"
      },
      {
        japanese: "石油",
        romaji: "Sekiyu",
        vietnamese: "Dầu mỏ"
      },
      {
        japanese: "化石",
        romaji: "Kaseki",
        vietnamese: "Hóa thạch"
      },
      {
        japanese: "宝石",
        romaji: "Houseki",
        vietnamese: "Đá quý"
      },
      {
        japanese: "石鹸",
        romaji: "Sekken",
        vietnamese: "Xà phòng"
      }
    ]
  },
  {
    id: 62,
    kanji: "糸",
    onyomi: "シ",
    kunyomi: "いと",
    meaning: "Sợi chỉ",
    sinoVietnamese: "Mịch",
    examples: [
      {
        japanese: "糸を通します",
        romaji: "Ito o tooshimasu",
        vietnamese: "Xâu chỉ"
      },
      {
        japanese: "毛糸",
        romaji: "Keito",
        vietnamese: "Len"
      },
      {
        japanese: "釣り糸",
        romaji: "Tsuriito",
        vietnamese: "Cước câu cá"
      },
      {
        japanese: "製糸",
        romaji: "Seishi",
        vietnamese: "Xe tơ, kéo sợi"
      },
      {
        japanese: "抜糸",
        romaji: "Basshi",
        vietnamese: "Cắt chỉ (khi vết thương lành)"
      }
    ]
  },
  {
    id: 63,
    kanji: "花",
    onyomi: "カ",
    kunyomi: "はな",
    meaning: "Hoa",
    sinoVietnamese: "Hoa",
    examples: [
      {
        japanese: "花見",
        romaji: "Hanami",
        vietnamese: "Ngắm hoa"
      },
      {
        japanese: "花火",
        romaji: "Hanabi",
        vietnamese: "Pháo hoa"
      },
      {
        japanese: "花屋",
        romaji: "Hanaya",
        vietnamese: "Cửa hàng hoa"
      },
      {
        japanese: "花瓶",
        romaji: "Kabin",
        vietnamese: "Bình hoa"
      },
      {
        japanese: "国花",
        romaji: "Kokka",
        vietnamese: "Quốc hoa"
      }
    ]
  },
  {
    id: 64,
    kanji: "茶",
    onyomi: "チャ、サ",
    kunyomi: "",
    meaning: "Trà",
    sinoVietnamese: "Trà",
    examples: [
      {
        japanese: "お茶を飲みます",
        romaji: "Ocha o nomimasu",
        vietnamese: "Uống trà"
      },
      {
        japanese: "紅茶",
        romaji: "Koucha",
        vietnamese: "Hồng trà"
      },
      {
        japanese: "茶色",
        romaji: "Chairo",
        vietnamese: "Màu nâu"
      },
      {
        japanese: "茶道",
        romaji: "Sadou",
        vietnamese: "Trà đạo"
      },
      {
        japanese: "喫茶店",
        romaji: "Kissaten",
        vietnamese: "Quán giải khát"
      }
    ]
  },
  {
    id: 65,
    kanji: "行",
    onyomi: "コウ、ギョウ",
    kunyomi: "い・く、おこな・う",
    meaning: "Đi",
    sinoVietnamese: "Hành",
    examples: [
      {
        japanese: "学校へ行きます",
        romaji: "Gakkou e ikimasu",
        vietnamese: "Đi đến trường"
      },
      {
        japanese: "銀行",
        romaji: "Ginkou",
        vietnamese: "Ngân hàng"
      },
      {
        japanese: "旅行",
        romaji: "Ryokou",
        vietnamese: "Du lịch"
      },
      {
        japanese: "行う",
        romaji: "Okonau",
        vietnamese: "Tổ chức/Tiến hành"
      },
      {
        japanese: "１行目",
        romaji: "Ichigyoume",
        vietnamese: "Dòng thứ nhất"
      }
    ]
  },
  {
    id: 66,
    kanji: "来",
    onyomi: "ライ",
    kunyomi: "く・る",
    meaning: "Đến",
    sinoVietnamese: "Lai",
    examples: [
      {
        japanese: "日本へ来ました",
        romaji: "Nihon e kimashita",
        vietnamese: "Đã đến Nhật Bản"
      },
      {
        japanese: "来年",
        romaji: "Rainen",
        vietnamese: "Năm sau"
      },
      {
        japanese: "来週",
        romaji: "Raishuu",
        vietnamese: "Tuần sau"
      },
      {
        japanese: "将来",
        romaji: "Shourai",
        vietnamese: "Tương lai"
      },
      {
        japanese: "来日",
        romaji: "Rainichi",
        vietnamese: "Đến Nhật"
      }
    ]
  },
  {
    id: 67,
    kanji: "食",
    onyomi: "ショク",
    kunyomi: "た・べる",
    meaning: "Ăn",
    sinoVietnamese: "Thực",
    examples: [
      {
        japanese: "ご飯を食べます",
        romaji: "Gohan o tabemasu",
        vietnamese: "Ăn cơm"
      },
      {
        japanese: "食堂",
        romaji: "Shokudou",
        vietnamese: "Nhà ăn"
      },
      {
        japanese: "食事",
        romaji: "Shokuji",
        vietnamese: "Bữa ăn"
      },
      {
        japanese: "食べ物",
        romaji: "Tabemono",
        vietnamese: "Đồ ăn"
      },
      {
        japanese: "朝食",
        romaji: "Choushoku",
        vietnamese: "Bữa sáng"
      }
    ]
  },
  {
    id: 68,
    kanji: "飲",
    onyomi: "イン",
    kunyomi: "の・む",
    meaning: "Uống",
    sinoVietnamese: "Ẩm",
    examples: [
      {
        japanese: "水を飲みます",
        romaji: "Mizu o nomimasu",
        vietnamese: "Uống nước"
      },
      {
        japanese: "飲み物",
        romaji: "Nomimono",
        vietnamese: "Đồ uống"
      },
      {
        japanese: "飲食店",
        romaji: "Inshokuten",
        vietnamese: "Nhà hàng ăn uống"
      },
      {
        japanese: "飲酒運転",
        romaji: "Inshu unten",
        vietnamese: "Lái xe khi say rượu"
      },
      {
        japanese: "飲み薬",
        romaji: "Nomigusuri",
        vietnamese: "Thuốc uống"
      }
    ]
  },
  {
    id: 69,
    kanji: "見",
    onyomi: "ケン",
    kunyomi: "み・る",
    meaning: "Nhìn/Xem",
    sinoVietnamese: "Kiến",
    examples: [
      {
        japanese: "映画を見ます",
        romaji: "Eiga o mimasu",
        vietnamese: "Xem phim"
      },
      {
        japanese: "見学",
        romaji: "Kengaku",
        vietnamese: "Tham quan học tập"
      },
      {
        japanese: "意見",
        romaji: "Iken",
        vietnamese: "Ý kiến"
      },
      {
        japanese: "花見",
        romaji: "Hanami",
        vietnamese: "Ngắm hoa"
      },
      {
        japanese: "見本",
        romaji: "Mihon",
        vietnamese: "Mẫu vật"
      }
    ]
  },
  {
    id: 70,
    kanji: "聞",
    onyomi: "ブン、モン",
    kunyomi: "き・く",
    meaning: "Nghe",
    sinoVietnamese: "Văn",
    examples: [
      {
        japanese: "音楽を聞きます",
        romaji: "Ongaku o kikimasu",
        vietnamese: "Nghe nhạc"
      },
      {
        japanese: "新聞",
        romaji: "Shinbun",
        vietnamese: "Báo chí"
      },
      {
        japanese: "聞こえます",
        romaji: "Kikoemasu",
        vietnamese: "Có thể nghe thấy"
      },
      {
        japanese: "見聞",
        romaji: "Kenbun",
        vietnamese: "Kiến thức/Kinh nghiệm"
      },
      {
        japanese: "前代未聞",
        romaji: "Zendaimimon",
        vietnamese: "Chưa từng nghe thấy"
      }
    ]
  },
  {
    id: 71,
    kanji: "言",
    onyomi: "ゲン、ゴン",
    kunyomi: "い・う",
    meaning: "Nói",
    sinoVietnamese: "Ngôn",
    examples: [
      {
        japanese: "言います",
        romaji: "Iimasu",
        vietnamese: "Nói"
      },
      {
        japanese: "言葉",
        romaji: "Kotoba",
        vietnamese: "Từ vựng / Lời nói"
      },
      {
        japanese: "言語",
        romaji: "Gengo",
        vietnamese: "Ngôn ngữ"
      },
      {
        japanese: "伝言",
        romaji: "Dengon",
        vietnamese: "Tin nhắn"
      },
      {
        japanese: "方言",
        romaji: "Hougen",
        vietnamese: "Phương ngôn / Tiếng địa phương"
      }
    ]
  },
  {
    id: 72,
    kanji: "話",
    onyomi: "ワ",
    kunyomi: "はな・す、はなし",
    meaning: "Nói chuyện",
    sinoVietnamese: "Thoại",
    examples: [
      {
        japanese: "日本語を話します",
        romaji: "Nihongo o hanashimasu",
        vietnamese: "Nói tiếng Nhật"
      },
      {
        japanese: "電話",
        romaji: "Denwa",
        vietnamese: "Điện thoại"
      },
      {
        japanese: "会話",
        romaji: "Kaiwa",
        vietnamese: "Hội thoại"
      },
      {
        japanese: "話題",
        romaji: "Wadai",
        vietnamese: "Chủ đề"
      },
      {
        japanese: "手話",
        romaji: "Shuwa",
        vietnamese: "Thủ ngữ"
      }
    ]
  },
  {
    id: 73,
    kanji: "立",
    onyomi: "リツ",
    kunyomi: "た・つ",
    meaning: "Đứng",
    sinoVietnamese: "Lập",
    examples: [
      {
        japanese: "立ちます",
        romaji: "Tachimasu",
        vietnamese: "Đứng"
      },
      {
        japanese: "国立",
        romaji: "Kokuritsu",
        vietnamese: "Quốc lập"
      },
      {
        japanese: "立場",
        romaji: "Tachiba",
        vietnamese: "Lập trường"
      },
      {
        japanese: "私立",
        romaji: "Shiritsu",
        vietnamese: "Tư lập"
      },
      {
        japanese: "起立",
        romaji: "Kiritsu",
        vietnamese: "Đứng lên (hiệu lệnh)"
      }
    ]
  },
  {
    id: 74,
    kanji: "待",
    onyomi: "タイ",
    kunyomi: "ま・つ",
    meaning: "Đợi",
    sinoVietnamese: "Đãi",
    examples: [
      {
        japanese: "待ちます",
        romaji: "Machimasu",
        vietnamese: "Đợi"
      },
      {
        japanese: "招待する",
        romaji: "Shoutai suru",
        vietnamese: "Chiêu đãi/Mời"
      },
      {
        japanese: "期待",
        romaji: "Kitai",
        vietnamese: "Kỳ vọng"
      },
      {
        japanese: "待合室",
        romaji: "Machiaishitsu",
        vietnamese: "Phòng chờ"
      },
      {
        japanese: "待ち合わせ",
        romaji: "Machiawase",
        vietnamese: "Hẹn gặp"
      }
    ]
  },
  {
    id: 75,
    kanji: "会",
    onyomi: "カイ、エ",
    kunyomi: "あ・う",
    meaning: "Gặp",
    sinoVietnamese: "Hội",
    examples: [
      {
        japanese: "友達に会います",
        romaji: "Tomodachi ni aimasu",
        vietnamese: "Gặp bạn bè"
      },
      {
        japanese: "会社",
        romaji: "Kaisha",
        vietnamese: "Công ty"
      },
      {
        japanese: "会議",
        romaji: "Kaigi",
        vietnamese: "Cuộc họp"
      },
      {
        japanese: "教会",
        romaji: "Kyoukai",
        vietnamese: "Nhà thờ"
      },
      {
        japanese: "会場",
        romaji: "Kaijou",
        vietnamese: "Hội trường"
      }
    ]
  },
  {
    id: 76,
    kanji: "出",
    onyomi: "シュツ",
    kunyomi: "で・る、だ・す",
    meaning: "Ra/Xuất",
    sinoVietnamese: "Xuất",
    examples: [
      {
        japanese: "出ます",
        romaji: "Demasu",
        vietnamese: "Ra ngoài / Rời khỏi"
      },
      {
        japanese: "出口",
        romaji: "Deguchi",
        vietnamese: "Cửa ra"
      },
      {
        japanese: "提出",
        romaji: "Teishutsu",
        vietnamese: "Nộp"
      },
      {
        japanese: "思い出します",
        romaji: "Omoidashimasu",
        vietnamese: "Nhớ ra"
      },
      {
        japanese: "外出",
        romaji: "Gaishutsu",
        vietnamese: "Đi ra ngoài"
      }
    ]
  },
  {
    id: 77,
    kanji: "入",
    onyomi: "ニュウ",
    kunyomi: "はい・る、い・れる",
    meaning: "Vào/Nhập",
    sinoVietnamese: "Nhập",
    examples: [
      {
        japanese: "部屋に入ります",
        romaji: "Heya ni hairimasu",
        vietnamese: "Vào phòng"
      },
      {
        japanese: "入口",
        romaji: "Iriguchi",
        vietnamese: "Cửa vào"
      },
      {
        japanese: "入学",
        romaji: "Nyuugaku",
        vietnamese: "Nhập học"
      },
      {
        japanese: "入院",
        romaji: "Nyuuin",
        vietnamese: "Nhập viện"
      },
      {
        japanese: "輸入",
        romaji: "Yunyuu",
        vietnamese: "Nhập khẩu"
      }
    ]
  },
  {
    id: 78,
    kanji: "週",
    onyomi: "シュウ",
    kunyomi: "",
    meaning: "Tuần",
    sinoVietnamese: "Chu",
    examples: [
      {
        japanese: "今週",
        romaji: "Konshuu",
        vietnamese: "Tuần này"
      },
      {
        japanese: "来週",
        romaji: "Raishuu",
        vietnamese: "Tuần sau"
      },
      {
        japanese: "先週",
        romaji: "Senshuu",
        vietnamese: "Tuần trước"
      },
      {
        japanese: "週末",
        romaji: "Shuumatsu",
        vietnamese: "Cuối tuần"
      },
      {
        japanese: "一週間",
        romaji: "Isshuukan",
        vietnamese: "1 tuần"
      }
    ]
  },
  {
    id: 79,
    kanji: "良",
    onyomi: "リョウ",
    kunyomi: "よ・い",
    meaning: "Tốt",
    sinoVietnamese: "Lương",
    examples: [
      {
        japanese: "良い天気",
        romaji: "Yoi tenki",
        vietnamese: "Thời tiết đẹp"
      },
      {
        japanese: "良心",
        romaji: "Ryoushin",
        vietnamese: "Lương tâm"
      },
      {
        japanese: "良好",
        romaji: "Ryoukou",
        vietnamese: "Tốt đẹp"
      },
      {
        japanese: "不良",
        romaji: "Furyou",
        vietnamese: "Không tốt / Lưu manh"
      },
      {
        japanese: "仲良し",
        romaji: "Nakayoshi",
        vietnamese: "Quan hệ tốt / Bạn thân"
      }
    ]
  },
  {
    id: 80,
    kanji: "帰",
    onyomi: "キ",
    kunyomi: "かえ・る",
    meaning: "Về",
    sinoVietnamese: "Quy",
    examples: [
      {
        japanese: "家へ帰ります",
        romaji: "Uchi e kaerimasu",
        vietnamese: "Về nhà"
      },
      {
        japanese: "帰国",
        romaji: "Kikoku",
        vietnamese: "Về nước"
      },
      {
        japanese: "帰り道",
        romaji: "Kaerimichi",
        vietnamese: "Đường về"
      },
      {
        japanese: "日帰り",
        romaji: "Higaeri",
        vietnamese: "Đi về trong ngày"
      },
      {
        japanese: "帰宅",
        romaji: "Kitaku",
        vietnamese: "Về nhà"
      }
    ]
  },
  {
    id: 81,
    kanji: "高",
    onyomi: "コウ",
    kunyomi: "たか・い",
    meaning: "Cao / Đắt",
    sinoVietnamese: "Cao",
    examples: [
      {
        japanese: "高い山",
        romaji: "Takai yama",
        vietnamese: "Núi cao"
      },
      {
        japanese: "高校",
        romaji: "Koukou",
        vietnamese: "Trường cấp 3"
      },
      {
        japanese: "最高",
        romaji: "Saikou",
        vietnamese: "Tuyệt nhất / Cao nhất"
      },
      {
        japanese: "高速",
        romaji: "Kousoku",
        vietnamese: "Cao tốc"
      },
      {
        japanese: "円高",
        romaji: "Endaka",
        vietnamese: "Yên tăng giá"
      }
    ]
  },
  {
    id: 82,
    kanji: "安",
    onyomi: "アン",
    kunyomi: "やす・い",
    meaning: "Rẻ / An tâm",
    sinoVietnamese: "An",
    examples: [
      {
        japanese: "安い店",
        romaji: "Yasui mise",
        vietnamese: "Cửa hàng rẻ"
      },
      {
        japanese: "安心",
        romaji: "Anshin",
        vietnamese: "An tâm"
      },
      {
        japanese: "安全",
        romaji: "Anzen",
        vietnamese: "An toàn"
      },
      {
        japanese: "平安",
        romaji: "Heian",
        vietnamese: "Bình an / Thời Heian"
      },
      {
        japanese: "不安",
        romaji: "Fuan",
        vietnamese: "Bất an / Lo lắng"
      }
    ]
  },
  {
    id: 83,
    kanji: "新",
    onyomi: "シン",
    kunyomi: "あたら・しい",
    meaning: "Mới",
    sinoVietnamese: "Tân",
    examples: [
      {
        japanese: "新しい車",
        romaji: "Atarashii kuruma",
        vietnamese: "Xe ô tô mới"
      },
      {
        japanese: "新聞",
        romaji: "Shinbun",
        vietnamese: "Báo giấy"
      },
      {
        japanese: "新幹線",
        romaji: "Shinkansen",
        vietnamese: "Tàu siêu tốc"
      },
      {
        japanese: "新年",
        romaji: "Shinnen",
        vietnamese: "Năm mới"
      },
      {
        japanese: "新人",
        romaji: "Shinjin",
        vietnamese: "Người mới"
      }
    ]
  },
  {
    id: 84,
    kanji: "古",
    onyomi: "コ",
    kunyomi: "ふる・い",
    meaning: "Cũ",
    sinoVietnamese: "Cổ",
    examples: [
      {
        japanese: "古い家",
        romaji: "Furui ie",
        vietnamese: "Nhà cũ"
      },
      {
        japanese: "古本",
        romaji: "Furuhon",
        vietnamese: "Sách cũ"
      },
      {
        japanese: "中古",
        romaji: "Chuuko",
        vietnamese: "Đồ cũ (second hand)"
      },
      {
        japanese: "古代",
        romaji: "Kodai",
        vietnamese: "Cổ đại"
      },
      {
        japanese: "考古学",
        romaji: "Koukogaku",
        vietnamese: "Khảo cổ học"
      }
    ]
  },
  {
    id: 85,
    kanji: "多",
    onyomi: "タ",
    kunyomi: "おお・い",
    meaning: "Nhiều",
    sinoVietnamese: "Đa",
    examples: [
      {
        japanese: "人が多い",
        romaji: "Hito ga ooi",
        vietnamese: "Đông người"
      },
      {
        japanese: "多分",
        romaji: "Tabun",
        vietnamese: "Có lẽ / Đa phần"
      },
      {
        japanese: "多数",
        romaji: "Tasuu",
        vietnamese: "Đa số"
      },
      {
        japanese: "多忙",
        romaji: "Tabou",
        vietnamese: "Rất bận"
      },
      {
        japanese: "滅多に",
        romaji: "Mettani",
        vietnamese: "Hiếm khi"
      }
    ]
  },
  {
    id: 86,
    kanji: "少",
    onyomi: "ショウ",
    kunyomi: "すく・ない、すこ・し",
    meaning: "Ít / Một chút",
    sinoVietnamese: "Thiểu",
    examples: [
      {
        japanese: "少し食べます",
        romaji: "Sukoshi tabemasu",
        vietnamese: "Ăn một chút"
      },
      {
        japanese: "少ない",
        romaji: "Sukunai",
        vietnamese: "Ít"
      },
      {
        japanese: "少年",
        romaji: "Shounen",
        vietnamese: "Thiếu niên"
      },
      {
        japanese: "少女",
        romaji: "Shoujo",
        vietnamese: "Thiếu nữ"
      },
      {
        japanese: "少々",
        romaji: "Shoushou",
        vietnamese: "Một chút (lịch sự)"
      }
    ]
  },
  {
    id: 87,
    kanji: "広",
    onyomi: "コウ",
    kunyomi: "ひろ・い",
    meaning: "Rộng",
    sinoVietnamese: "Quảng",
    examples: [
      {
        japanese: "広い部屋",
        romaji: "Hiroi heya",
        vietnamese: "Căn phòng rộng"
      },
      {
        japanese: "広島",
        romaji: "Hiroshima",
        vietnamese: "Hiroshima"
      },
      {
        japanese: "広場",
        romaji: "Hiroba",
        vietnamese: "Quảng trường"
      },
      {
        japanese: "広告",
        romaji: "Koukoku",
        vietnamese: "Quảng cáo"
      },
      {
        japanese: "広大",
        romaji: "Koudai",
        vietnamese: "Rộng lớn"
      }
    ]
  },
  {
    id: 88,
    kanji: "早",
    onyomi: "ソウ",
    kunyomi: "はや・い",
    meaning: "Sớm",
    sinoVietnamese: "Tảo",
    examples: [
      {
        japanese: "早く起きます",
        romaji: "Hayaku okimasu",
        vietnamese: "Dậy sớm"
      },
      {
        japanese: "早朝",
        romaji: "Souchou",
        vietnamese: "Sáng sớm"
      },
      {
        japanese: "早送り",
        romaji: "Hayaokuri",
        vietnamese: "Tua nhanh"
      },
      {
        japanese: "早速",
        romaji: "Sassoku",
        vietnamese: "Ngay lập tức"
      },
      {
        japanese: "早口",
        romaji: "Hayakuchi",
        vietnamese: "Nói nhanh"
      }
    ]
  },
  {
    id: 89,
    kanji: "長",
    onyomi: "チョウ",
    kunyomi: "なが・い",
    meaning: "Dài / Trưởng",
    sinoVietnamese: "Trường",
    examples: [
      {
        japanese: "長い髪",
        romaji: "Nagai kami",
        vietnamese: "Tóc dài"
      },
      {
        japanese: "社長",
        romaji: "Shachou",
        vietnamese: "Giám đốc"
      },
      {
        japanese: "校長",
        romaji: "Kouchou",
        vietnamese: "Hiệu trưởng"
      },
      {
        japanese: "身長",
        romaji: "Shinchou",
        vietnamese: "Chiều cao"
      },
      {
        japanese: "長男",
        romaji: "Chounan",
        vietnamese: "Trưởng nam"
      }
    ]
  },
  {
    id: 90,
    kanji: "友",
    onyomi: "ユウ",
    kunyomi: "とも",
    meaning: "Bạn bè",
    sinoVietnamese: "Hữu",
    examples: [
      {
        japanese: "友達",
        romaji: "Tomodachi",
        vietnamese: "Bạn bè"
      },
      {
        japanese: "親友",
        romaji: "Shinyuu",
        vietnamese: "Bạn thân"
      },
      {
        japanese: "友人",
        romaji: "Yuujin",
        vietnamese: "Bạn bè (trang trọng)"
      },
      {
        japanese: "友好",
        romaji: "Yuukou",
        vietnamese: "Hữu nghị"
      },
      {
        japanese: "友情",
        romaji: "Yuujou",
        vietnamese: "Tình bạn"
      }
    ]
  },
  {
    id: 91,
    kanji: "父",
    onyomi: "フ",
    kunyomi: "ちち",
    meaning: "Bố (của mình)",
    sinoVietnamese: "Phụ",
    examples: [
      {
        japanese: "父は会社員です",
        romaji: "Chichi wa kaishain desu",
        vietnamese: "Bố tôi là nhân viên công ty"
      },
      {
        japanese: "お父さん",
        romaji: "Otousan",
        vietnamese: "Bố (người khác/gọi bố)"
      },
      {
        japanese: "祖父",
        romaji: "Sofu",
        vietnamese: "Ông"
      },
      {
        japanese: "父母",
        romaji: "Fubo",
        vietnamese: "Cha mẹ"
      },
      {
        japanese: "神父",
        romaji: "Shinpu",
        vietnamese: "Cha xứ"
      }
    ]
  },
  {
    id: 92,
    kanji: "母",
    onyomi: "ボ",
    kunyomi: "はは",
    meaning: "Mẹ (của mình)",
    sinoVietnamese: "Mẫu",
    examples: [
      {
        japanese: "母は料理が上手です",
        romaji: "Haha wa ryouri ga jouzu desu",
        vietnamese: "Mẹ tôi nấu ăn giỏi"
      },
      {
        japanese: "お母さん",
        romaji: "Okaasan",
        vietnamese: "Mẹ (người khác/gọi mẹ)"
      },
      {
        japanese: "祖母",
        romaji: "Sobo",
        vietnamese: "Bà"
      },
      {
        japanese: "母国",
        romaji: "Bokoku",
        vietnamese: "Tổ quốc"
      },
      {
        japanese: "母語",
        romaji: "Bogo",
        vietnamese: "Tiếng mẹ đẻ"
      }
    ]
  },
  {
    id: 93,
    kanji: "元",
    onyomi: "ゲン、ガン",
    kunyomi: "もと",
    meaning: "Gốc / Khỏe",
    sinoVietnamese: "Nguyên",
    examples: [
      {
        japanese: "元気な",
        romaji: "Genki na",
        vietnamese: "Khỏe mạnh"
      },
      {
        japanese: "元日",
        romaji: "Ganjitsu",
        vietnamese: "Ngày mùng 1 Tết"
      },
      {
        japanese: "足元",
        romaji: "Ashimoto",
        vietnamese: "Dưới chân"
      },
      {
        japanese: "地元",
        romaji: "Jimoto",
        vietnamese: "Địa phương / Quê quán"
      },
      {
        japanese: "紀元前",
        romaji: "Kigenzen",
        vietnamese: "Trước công nguyên"
      }
    ]
  },
  {
    id: 94,
    kanji: "気",
    onyomi: "キ",
    kunyomi: "",
    meaning: "Khí / Tinh thần",
    sinoVietnamese: "Khí",
    examples: [
      {
        japanese: "天気",
        romaji: "Tenki",
        vietnamese: "Thời tiết"
      },
      {
        japanese: "元気",
        romaji: "Genki",
        vietnamese: "Khỏe mạnh"
      },
      {
        japanese: "病気",
        romaji: "Byouki",
        vietnamese: "Bệnh tật"
      },
      {
        japanese: "気持ち",
        romaji: "Kimochi",
        vietnamese: "Cảm giác / Tâm trạng"
      },
      {
        japanese: "人気",
        romaji: "Ninki",
        vietnamese: "Được yêu thích"
      }
    ]
  },
  {
    id: 95,
    kanji: "北",
    onyomi: "ホク",
    kunyomi: "きた",
    meaning: "Phía Bắc",
    sinoVietnamese: "Bắc",
    examples: [
      {
        japanese: "北口",
        romaji: "Kitaguchi",
        vietnamese: "Cửa Bắc"
      },
      {
        japanese: "北海道",
        romaji: "Hokkaidou",
        vietnamese: "Hokkaido"
      },
      {
        japanese: "南北",
        romaji: "Nanboku",
        vietnamese: "Nam Bắc"
      },
      {
        japanese: "北極",
        romaji: "Hokkyoku",
        vietnamese: "Bắc cực"
      },
      {
        japanese: "東北",
        romaji: "Touhoku",
        vietnamese: "Đông Bắc"
      }
    ]
  },
  {
    id: 96,
    kanji: "南",
    onyomi: "ナン",
    kunyomi: "みなみ",
    meaning: "Phía Nam",
    sinoVietnamese: "Nam",
    examples: [
      {
        japanese: "南口",
        romaji: "Minamiguchi",
        vietnamese: "Cửa Nam"
      },
      {
        japanese: "南国",
        romaji: "Nangoku",
        vietnamese: "Các nước phía Nam"
      },
      {
        japanese: "東南アジア",
        romaji: "Tounan ajia",
        vietnamese: "Đông Nam Á"
      },
      {
        japanese: "南極",
        romaji: "Nankyoku",
        vietnamese: "Nam cực"
      },
      {
        japanese: "南米",
        romaji: "Nanbei",
        vietnamese: "Nam Mỹ"
      }
    ]
  },
  {
    id: 97,
    kanji: "市",
    onyomi: "シ",
    kunyomi: "いち",
    meaning: "Thành phố / Chợ",
    sinoVietnamese: "Thị",
    examples: [
      {
        japanese: "市役所",
        romaji: "Shiyakusho",
        vietnamese: "Cơ quan hành chính thành phố"
      },
      {
        japanese: "市長",
        romaji: "Shichou",
        vietnamese: "Thị trưởng"
      },
      {
        japanese: "市場",
        romaji: "Ichiba",
        vietnamese: "Chợ"
      },
      {
        japanese: "都市",
        romaji: "Toshi",
        vietnamese: "Đô thị"
      },
      {
        japanese: "市民",
        romaji: "Shimin",
        vietnamese: "Dân thành phố"
      }
    ]
  },
  {
    id: 98,
    kanji: "町",
    onyomi: "チョウ",
    kunyomi: "まち",
    meaning: "Thị trấn / Khu phố",
    sinoVietnamese: "Đinh",
    examples: [
      {
        japanese: "町へ行きます",
        romaji: "Machi e ikimasu",
        vietnamese: "Đi ra phố"
      },
      {
        japanese: "町長",
        romaji: "Chouchou",
        vietnamese: "Trưởng thị trấn"
      },
      {
        japanese: "下町",
        romaji: "Shitamachi",
        vietnamese: "Khu phố cổ/Khu buôn bán"
      },
      {
        japanese: "町民",
        romaji: "Choumin",
        vietnamese: "Người dân thị trấn"
      },
      {
        japanese: "港町",
        romaji: "Minatomachi",
        vietnamese: "Phố cảng"
      }
    ]
  },
  {
    id: 99,
    kanji: "村",
    onyomi: "ソン",
    kunyomi: "むら",
    meaning: "Thôn làng",
    sinoVietnamese: "Thôn",
    examples: [
      {
        japanese: "村長",
        romaji: "Sonchou",
        vietnamese: "Trưởng làng"
      },
      {
        japanese: "村人",
        romaji: "Murabito",
        vietnamese: "Dân làng"
      },
      {
        japanese: "農村",
        romaji: "Nouson",
        vietnamese: "Nông thôn"
      },
      {
        japanese: "漁村",
        romaji: "Gyoson",
        vietnamese: "Làng chài"
      },
      {
        japanese: "市町村",
        romaji: "Shichouson",
        vietnamese: "Thành phố, thị trấn và làng xã"
      }
    ]
  },
  {
    id: 100,
    kanji: "電",
    onyomi: "デン",
    kunyomi: "",
    meaning: "Điện",
    sinoVietnamese: "Điện",
    examples: [
      {
        japanese: "電車",
        romaji: "Densha",
        vietnamese: "Tàu điện"
      },
      {
        japanese: "電気",
        romaji: "Denki",
        vietnamese: "Điện / Bóng điện"
      },
      {
        japanese: "電話",
        romaji: "Denwa",
        vietnamese: "Điện thoại"
      },
      {
        japanese: "電力",
        romaji: "Denryoku",
        vietnamese: "Điện lực"
      },
      {
        japanese: "電子レンジ",
        romaji: "Denshi renji",
        vietnamese: "Lò vi sóng"
      }
    ]
  },
  {
    id: 101,
    kanji: "馬",
    onyomi: "バ",
    kunyomi: "うま",
    meaning: "Ngựa",
    sinoVietnamese: "Mã",
    examples: [
      {
        japanese: "馬に乗ります",
        romaji: "Uma ni norimasu",
        vietnamese: "Cưỡi ngựa"
      },
      {
        japanese: "馬車",
        romaji: "Basha",
        vietnamese: "Xe ngựa"
      },
      {
        japanese: "乗馬",
        romaji: "Jouba",
        vietnamese: "Cưỡi ngựa (thể thao)"
      },
      {
        japanese: "馬力",
        romaji: "Bariki",
        vietnamese: "Mã lực"
      },
      {
        japanese: "竹馬",
        romaji: "Takeuma",
        vietnamese: "Cà kheo/Ngựa tre"
      }
    ]
  },
  {
    id: 102,
    kanji: "駅",
    onyomi: "エキ",
    kunyomi: "",
    meaning: "Nhà ga",
    sinoVietnamese: "Dịch",
    examples: [
      {
        japanese: "駅前",
        romaji: "Ekimae",
        vietnamese: "Trước nhà ga"
      },
      {
        japanese: "駅員",
        romaji: "Ekiin",
        vietnamese: "Nhân viên nhà ga"
      },
      {
        japanese: "駅長",
        romaji: "Ekichou",
        vietnamese: "Trưởng ga"
      },
      {
        japanese: "始発駅",
        romaji: "Shihatsueki",
        vietnamese: "Ga đầu"
      },
      {
        japanese: "終着駅",
        romaji: "Shuuchakueki",
        vietnamese: "Ga cuối"
      }
    ]
  },
  {
    id: 103,
    kanji: "社",
    onyomi: "シャ",
    kunyomi: "やしろ",
    meaning: "Công ty / Đền thần",
    sinoVietnamese: "Xã",
    examples: [
      {
        japanese: "会社",
        romaji: "Kaisha",
        vietnamese: "Công ty"
      },
      {
        japanese: "社会",
        romaji: "Shakai",
        vietnamese: "Xã hội"
      },
      {
        japanese: "社長",
        romaji: "Shachou",
        vietnamese: "Giám đốc"
      },
      {
        japanese: "神社",
        romaji: "Jinja",
        vietnamese: "Đền thần đạo"
      },
      {
        japanese: "社員",
        romaji: "Shain",
        vietnamese: "Nhân viên"
      }
    ]
  },
  {
    id: 104,
    kanji: "校",
    onyomi: "コウ",
    kunyomi: "",
    meaning: "Trường học",
    sinoVietnamese: "Hiệu",
    examples: [
      {
        japanese: "学校",
        romaji: "Gakkou",
        vietnamese: "Trường học"
      },
      {
        japanese: "校長",
        romaji: "Kouchou",
        vietnamese: "Hiệu trưởng"
      },
      {
        japanese: "高校",
        romaji: "Koukou",
        vietnamese: "Trường cấp 3"
      },
      {
        japanese: "校歌",
        romaji: "Kouka",
        vietnamese: "Bài hát truyền thống của trường"
      },
      {
        japanese: "校舎",
        romaji: "Kousha",
        vietnamese: "Khu học đường"
      }
    ]
  },
  {
    id: 105,
    kanji: "店",
    onyomi: "テン",
    kunyomi: "みせ",
    meaning: "Cửa hàng",
    sinoVietnamese: "Điếm",
    examples: [
      {
        japanese: "店員",
        romaji: "Tenin",
        vietnamese: "Nhân viên cửa hàng"
      },
      {
        japanese: "店長",
        romaji: "Tenchou",
        vietnamese: "Cửa hàng trưởng"
      },
      {
        japanese: "書店",
        romaji: "Shoten",
        vietnamese: "Hiệu sách"
      },
      {
        japanese: "売店",
        romaji: "Baiten",
        vietnamese: "Quầy bán hàng/Căng tin"
      },
      {
        japanese: "本店",
        romaji: "Honten",
        vietnamese: "Cửa hàng chính/Trụ sở chính"
      }
    ]
  },
  {
    id: 106,
    kanji: "銀",
    onyomi: "ギン",
    kunyomi: "",
    meaning: "Bạc",
    sinoVietnamese: "Ngân",
    examples: [
      {
        japanese: "銀行",
        romaji: "Ginkou",
        vietnamese: "Ngân hàng"
      },
      {
        japanese: "銀色",
        romaji: "Giniro",
        vietnamese: "Màu bạc"
      },
      {
        japanese: "水銀",
        romaji: "Suigin",
        vietnamese: "Thủy ngân"
      },
      {
        japanese: "銀座",
        romaji: "Ginza",
        vietnamese: "Khu Ginza"
      },
      {
        japanese: "銀行員",
        romaji: "Ginkouin",
        vietnamese: "Nhân viên ngân hàng"
      }
    ]
  },
  {
    id: 107,
    kanji: "病",
    onyomi: "ビョウ",
    kunyomi: "や・む",
    meaning: "Bệnh",
    sinoVietnamese: "Bệnh",
    examples: [
      {
        japanese: "病気",
        romaji: "Byouki",
        vietnamese: "Bệnh tật"
      },
      {
        japanese: "病院",
        romaji: "Byouin",
        vietnamese: "Bệnh viện"
      },
      {
        japanese: "病人",
        romaji: "Byounin",
        vietnamese: "Người bệnh"
      },
      {
        japanese: "病室",
        romaji: "Byoushitsu",
        vietnamese: "Phòng bệnh"
      },
      {
        japanese: "重病",
        romaji: "Juubyou",
        vietnamese: "Bệnh nặng"
      }
    ]
  },
  {
    id: 108,
    kanji: "院",
    onyomi: "イン",
    kunyomi: "",
    meaning: "Viện",
    sinoVietnamese: "Viện",
    examples: [
      {
        japanese: "病院",
        romaji: "Byouin",
        vietnamese: "Bệnh viện"
      },
      {
        japanese: "入院します",
        romaji: "Nyuuin shimasu",
        vietnamese: "Nhập viện"
      },
      {
        japanese: "大学院",
        romaji: "Daigakuin",
        vietnamese: "Cao học"
      },
      {
        japanese: "退院",
        romaji: "Taiin",
        vietnamese: "Xuất viện"
      },
      {
        japanese: "美容院",
        romaji: "Biyouin",
        vietnamese: "Thẩm mỹ viện/Tiệm làm tóc"
      }
    ]
  },
  {
    id: 109,
    kanji: "走",
    onyomi: "ソウ",
    kunyomi: "はし・る",
    meaning: "Chạy",
    sinoVietnamese: "Tẩu",
    examples: [
      {
        japanese: "走ります",
        romaji: "Hashirimasu",
        vietnamese: "Chạy"
      },
      {
        japanese: "競走",
        romaji: "Kyousou",
        vietnamese: "Chạy đua"
      },
      {
        japanese: "暴走",
        romaji: "Bousou",
        vietnamese: "Chạy điên cuồng/Mất kiểm soát"
      },
      {
        japanese: "脱走",
        romaji: "Dassou",
        vietnamese: "Đào tẩu"
      },
      {
        japanese: "走路",
        romaji: "Souro",
        vietnamese: "Đường chạy"
      }
    ]
  },
  {
    id: 110,
    kanji: "起",
    onyomi: "キ",
    kunyomi: "お・きる、お・こす",
    meaning: "Thức dậy / Khởi",
    sinoVietnamese: "Khởi",
    examples: [
      {
        japanese: "起きます",
        romaji: "Okimasu",
        vietnamese: "Thức dậy"
      },
      {
        japanese: "早起き",
        romaji: "Hayaoki",
        vietnamese: "Dậy sớm"
      },
      {
        japanese: "起立",
        romaji: "Kiritsu",
        vietnamese: "Đứng lên (chào cờ...)"
      },
      {
        japanese: "起床",
        romaji: "Kishou",
        vietnamese: "Thức dậy (trang trọng)"
      },
      {
        japanese: "起こします",
        romaji: "Okoshimasu",
        vietnamese: "Đánh thức/Gây ra"
      }
    ]
  },
  {
    id: 111,
    kanji: "買",
    onyomi: "バイ",
    kunyomi: "か・う",
    meaning: "Mua",
    sinoVietnamese: "Mãi",
    examples: [
      {
        japanese: "買います",
        romaji: "Kaimasu",
        vietnamese: "Mua"
      },
      {
        japanese: "買い物",
        romaji: "Kaimono",
        vietnamese: "Mua sắm"
      },
      {
        japanese: "売買",
        romaji: "Baibai",
        vietnamese: "Mua bán"
      },
      {
        japanese: "買い占め",
        romaji: "Kaishime",
        vietnamese: "Đầu cơ tích trữ"
      },
      {
        japanese: "買い手",
        romaji: "Kaite",
        vietnamese: "Người mua"
      }
    ]
  },
  {
    id: 112,
    kanji: "売",
    onyomi: "バイ",
    kunyomi: "う・る",
    meaning: "Bán",
    sinoVietnamese: "Mại",
    examples: [
      {
        japanese: "売ります",
        romaji: "Urimasu",
        vietnamese: "Bán"
      },
      {
        japanese: "売店",
        romaji: "Baiten",
        vietnamese: "Quầy bán hàng"
      },
      {
        japanese: "売り場",
        romaji: "Uriba",
        vietnamese: "Quầy hàng"
      },
      {
        japanese: "特売",
        romaji: "Tokubai",
        vietnamese: "Bán rẻ/Khuyến mãi"
      },
      {
        japanese: "自動販売機",
        romaji: "Jidouhanbaiki",
        vietnamese: "Máy bán hàng tự động"
      }
    ]
  },
  {
    id: 113,
    kanji: "読",
    onyomi: "ドク",
    kunyomi: "よ・む",
    meaning: "Đọc",
    sinoVietnamese: "Độc",
    examples: [
      {
        japanese: "読みます",
        romaji: "Yomimasu",
        vietnamese: "Đọc"
      },
      {
        japanese: "読書",
        romaji: "Dokusho",
        vietnamese: "Việc đọc sách"
      },
      {
        japanese: "読者",
        romaji: "Dokusha",
        vietnamese: "Độc giả"
      },
      {
        japanese: "音読み",
        romaji: "Onyomi",
        vietnamese: "Âm On"
      },
      {
        japanese: "訓読み",
        romaji: "Kunyomi",
        vietnamese: "Âm Kun"
      }
    ]
  },
  {
    id: 114,
    kanji: "書",
    onyomi: "ショ",
    kunyomi: "か・く",
    meaning: "Viết",
    sinoVietnamese: "Thư",
    examples: [
      {
        japanese: "書きます",
        romaji: "Kakimasu",
        vietnamese: "Viết"
      },
      {
        japanese: "辞書",
        romaji: "Jisho",
        vietnamese: "Từ điển"
      },
      {
        japanese: "図書館",
        romaji: "Toshokan",
        vietnamese: "Thư viện"
      },
      {
        japanese: "教科書",
        romaji: "Kyoukasho",
        vietnamese: "Sách giáo khoa"
      },
      {
        japanese: "読書",
        romaji: "Dokusho",
        vietnamese: "Đọc sách"
      }
    ]
  },
  {
    id: 115,
    kanji: "勉",
    onyomi: "ベン",
    kunyomi: "つと・める",
    meaning: "Cố gắng / Miễn",
    sinoVietnamese: "Miễn",
    examples: [
      {
        japanese: "勉強します",
        romaji: "Benkyou shimasu",
        vietnamese: "Học"
      },
      {
        japanese: "勤勉",
        romaji: "Kinben",
        vietnamese: "Cần cù/Chăm chỉ"
      },
      {
        japanese: "ガリ勉",
        romaji: "Gariben",
        vietnamese: "Mọt sách"
      },
      {
        japanese: "勉強部屋",
        romaji: "Benkyoubeya",
        vietnamese: "Phòng học"
      }
    ]
  },
  {
    id: 116,
    kanji: "強",
    onyomi: "キョウ、ゴウ",
    kunyomi: "つよ・い",
    meaning: "Mạnh",
    sinoVietnamese: "Cường",
    examples: [
      {
        japanese: "強い",
        romaji: "Tsuyoi",
        vietnamese: "Mạnh"
      },
      {
        japanese: "勉強",
        romaji: "Benkyou",
        vietnamese: "Học"
      },
      {
        japanese: "強力",
        romaji: "Kyouryoku",
        vietnamese: "Hợp lực/Mạnh mẽ"
      },
      {
        japanese: "強風",
        romaji: "Kyoufuu",
        vietnamese: "Gió mạnh"
      },
      {
        japanese: "強化",
        romaji: "Kyouka",
        vietnamese: "Tăng cường"
      }
    ]
  },
  {
    id: 117,
    kanji: "弓",
    onyomi: "キュウ",
    kunyomi: "ゆみ",
    meaning: "Cung (tên)",
    sinoVietnamese: "Cung",
    examples: [
      {
        japanese: "弓道",
        romaji: "Kyuudou",
        vietnamese: "Cung đạo"
      },
      {
        japanese: "弓矢",
        romaji: "Yumiya",
        vietnamese: "Cung và tên"
      },
      {
        japanese: "弓形",
        romaji: "Yumigata",
        vietnamese: "Hình cánh cung"
      }
    ]
  },
  {
    id: 118,
    kanji: "虫",
    onyomi: "チュウ",
    kunyomi: "むし",
    meaning: "Côn trùng",
    sinoVietnamese: "Trùng",
    examples: [
      {
        japanese: "虫歯",
        romaji: "Mushiba",
        vietnamese: "Sâu răng"
      },
      {
        japanese: "昆虫",
        romaji: "Konchuu",
        vietnamese: "Côn trùng"
      },
      {
        japanese: "泣き虫",
        romaji: "Nakimushi",
        vietnamese: "Người hay khóc nhè"
      },
      {
        japanese: "弱虫",
        romaji: "Yowamushi",
        vietnamese: "Người nhút nhát/Yếu đuối"
      },
      {
        japanese: "殺虫剤",
        romaji: "Sacchuuzai",
        vietnamese: "Thuốc trừ sâu"
      }
    ]
  },
  {
    id: 119,
    kanji: "持",
    onyomi: "ジ",
    kunyomi: "も・つ",
    meaning: "Cầm / Mang",
    sinoVietnamese: "Trì",
    examples: [
      {
        japanese: "持ちます",
        romaji: "Mochimasu",
        vietnamese: "Cầm/Mang"
      },
      {
        japanese: "気持ち",
        romaji: "Kimochi",
        vietnamese: "Tâm trạng"
      },
      {
        japanese: "お金持ち",
        romaji: "Okanemochi",
        vietnamese: "Người giàu có"
      },
      {
        japanese: "支持",
        romaji: "Shiji",
        vietnamese: "Ủng hộ/Duy trì"
      },
      {
        japanese: "持参",
        romaji: "Jisan",
        vietnamese: "Mang theo"
      }
    ]
  },
  {
    id: 120,
    kanji: "名",
    onyomi: "メイ、ミョウ",
    kunyomi: "な",
    meaning: "Tên / Danh",
    sinoVietnamese: "Danh",
    examples: [
      {
        japanese: "名前",
        romaji: "Namae",
        vietnamese: "Tên"
      },
      {
        japanese: "有名",
        romaji: "Yuumei",
        vietnamese: "Nổi tiếng"
      },
      {
        japanese: "名刺",
        romaji: "Meishi",
        vietnamese: "Danh thiếp"
      },
      {
        japanese: "名字",
        romaji: "Myouji",
        vietnamese: "Họ"
      },
      {
        japanese: "名物",
        romaji: "Meibutsu",
        vietnamese: "Đặc sản"
      }
    ]
  },
  {
    id: 121,
    kanji: "語",
    onyomi: "ゴ",
    kunyomi: "かた・る",
    meaning: "Ngôn ngữ / Kể",
    sinoVietnamese: "Ngữ",
    examples: [
      {
        japanese: "日本語",
        romaji: "Nihongo",
        vietnamese: "Tiếng Nhật"
      },
      {
        japanese: "英語",
        romaji: "Eigo",
        vietnamese: "Tiếng Anh"
      },
      {
        japanese: "外国語",
        romaji: "Gaikokugo",
        vietnamese: "Tiếng nước ngoài"
      },
      {
        japanese: "物語",
        romaji: "Monogatari",
        vietnamese: "Câu chuyện/Truyện"
      },
      {
        japanese: "語学",
        romaji: "Gogaku",
        vietnamese: "Ngôn ngữ học"
      }
    ]
  },
  {
    id: 122,
    kanji: "春",
    onyomi: "シュン",
    kunyomi: "はる",
    meaning: "Mùa xuân",
    sinoVietnamese: "Xuân",
    examples: [
      {
        japanese: "春休み",
        romaji: "Haruyasumi",
        vietnamese: "Nghỉ xuân"
      },
      {
        japanese: "春分",
        romaji: "Shunbun",
        vietnamese: "Xuân phân"
      },
      {
        japanese: "青春",
        romaji: "Seishun",
        vietnamese: "Thanh xuân"
      },
      {
        japanese: "春巻",
        romaji: "Harumaki",
        vietnamese: "Nem cuốn"
      },
      {
        japanese: "新春",
        romaji: "Shinshun",
        vietnamese: "Đầu xuân/Năm mới"
      }
    ]
  },
  {
    id: 123,
    kanji: "夏",
    onyomi: "カ、ゲ",
    kunyomi: "なつ",
    meaning: "Mùa hạ",
    sinoVietnamese: "Hạ",
    examples: [
      {
        japanese: "夏休み",
        romaji: "Natsuyasumi",
        vietnamese: "Nghỉ hè"
      },
      {
        japanese: "夏服",
        romaji: "Natsufuku",
        vietnamese: "Quần áo mùa hè"
      },
      {
        japanese: "真夏",
        romaji: "Manatsu",
        vietnamese: "Giữa mùa hè"
      },
      {
        japanese: "初夏",
        romaji: "Shoka",
        vietnamese: "Đầu hè"
      },
      {
        japanese: "夏至",
        romaji: "Geshi",
        vietnamese: "Hạ chí"
      }
    ]
  },
  {
    id: 124,
    kanji: "秋",
    onyomi: "シュウ",
    kunyomi: "あき",
    meaning: "Mùa thu",
    sinoVietnamese: "Thu",
    examples: [
      {
        japanese: "秋分",
        romaji: "Shuubun",
        vietnamese: "Thu phân"
      },
      {
        japanese: "秋風",
        romaji: "Akikaze",
        vietnamese: "Gió thu"
      },
      {
        japanese: "晩秋",
        romaji: "Banshuu",
        vietnamese: "Cuối thu"
      },
      {
        japanese: "秋祭り",
        romaji: "Akimatsuri",
        vietnamese: "Lễ hội mùa thu"
      },
      {
        japanese: "食欲の秋",
        romaji: "Shokuyoku no aki",
        vietnamese: "Mùa thu của sự thèm ăn"
      }
    ]
  },
  {
    id: 125,
    kanji: "冬",
    onyomi: "トウ",
    kunyomi: "ふゆ",
    meaning: "Mùa đông",
    sinoVietnamese: "Đông",
    examples: [
      {
        japanese: "冬休み",
        romaji: "Fuyuyasumi",
        vietnamese: "Nghỉ đông"
      },
      {
        japanese: "冬服",
        romaji: "Fuyufuku",
        vietnamese: "Quần áo mùa đông"
      },
      {
        japanese: "真冬",
        romaji: "Mafuyu",
        vietnamese: "Giữa mùa đông"
      },
      {
        japanese: "冬至",
        romaji: "Touji",
        vietnamese: "Đông chí"
      },
      {
        japanese: "暖冬",
        romaji: "Dantou",
        vietnamese: "Mùa đông ấm áp"
      }
    ]
  },
  {
    id: 126,
    kanji: "朝",
    onyomi: "チョウ",
    kunyomi: "あさ",
    meaning: "Buổi sáng",
    sinoVietnamese: "Triều",
    examples: [
      {
        japanese: "朝ご飯",
        romaji: "Asagohan",
        vietnamese: "Bữa sáng"
      },
      {
        japanese: "毎朝",
        romaji: "Maiasa",
        vietnamese: "Mỗi sáng"
      },
      {
        japanese: "今朝",
        romaji: "Kesa",
        vietnamese: "Sáng nay"
      },
      {
        japanese: "早朝",
        romaji: "Souchou",
        vietnamese: "Sáng sớm"
      },
      {
        japanese: "朝礼",
        romaji: "Chourei",
        vietnamese: "Lễ chào cờ buổi sáng"
      }
    ]
  },
  {
    id: 127,
    kanji: "昼",
    onyomi: "チュウ",
    kunyomi: "ひる",
    meaning: "Buổi trưa",
    sinoVietnamese: "Trú",
    examples: [
      {
        japanese: "昼ご飯",
        romaji: "Hirugohan",
        vietnamese: "Bữa trưa"
      },
      {
        japanese: "昼休み",
        romaji: "Hiruyasumi",
        vietnamese: "Nghỉ trưa"
      },
      {
        japanese: "昼寝",
        romaji: "Hirune",
        vietnamese: "Ngủ trưa"
      },
      {
        japanese: "昼食",
        romaji: "Chuushoku",
        vietnamese: "Bữa trưa (trang trọng)"
      },
      {
        japanese: "真昼",
        romaji: "Mahiru",
        vietnamese: "Giữa trưa"
      }
    ]
  },
  {
    id: 128,
    kanji: "夕",
    onyomi: "セキ",
    kunyomi: "ゆう",
    meaning: "Buổi chiều tối",
    sinoVietnamese: "Tịch",
    examples: [
      {
        japanese: "夕方",
        romaji: "Yuugata",
        vietnamese: "Chiều tối"
      },
      {
        japanese: "夕食",
        romaji: "Yuushoku",
        vietnamese: "Bữa tối"
      },
      {
        japanese: "夕日",
        romaji: "Yuuhi",
        vietnamese: "Mặt trời lặn"
      },
      {
        japanese: "七夕",
        romaji: "Tanabata",
        vietnamese: "Lễ Thất Tịch"
      },
      {
        japanese: "夕立",
        romaji: "Yuudachi",
        vietnamese: "Mưa rào buổi chiều"
      }
    ]
  },
  {
    id: 129,
    kanji: "方",
    onyomi: "ホウ",
    kunyomi: "かた",
    meaning: "Phương, hướng, vị",
    sinoVietnamese: "Phương",
    examples: [
      {
        japanese: "夕方",
        romaji: "Yuugata",
        vietnamese: "Chiều tối"
      },
      {
        japanese: "あの方",
        romaji: "Ano kata",
        vietnamese: "Vị kia (kính ngữ)"
      },
      {
        japanese: "書き方",
        romaji: "Kakikata",
        vietnamese: "Cách viết"
      },
      {
        japanese: "方法",
        romaji: "Houhou",
        vietnamese: "Phương pháp"
      },
      {
        japanese: "一方",
        romaji: "Ippou",
        vietnamese: "Một mặt, đơn phương"
      }
    ]
  },
  {
    id: 130,
    kanji: "晩",
    onyomi: "バン",
    kunyomi: "",
    meaning: "Buổi tối",
    sinoVietnamese: "Vãn",
    examples: [
      {
        japanese: "今晩",
        romaji: "Konban",
        vietnamese: "Tối nay"
      },
      {
        japanese: "晩ご飯",
        romaji: "Bangohan",
        vietnamese: "Bữa tối"
      },
      {
        japanese: "毎晩",
        romaji: "Maiban",
        vietnamese: "Mỗi tối"
      },
      {
        japanese: "晩婚",
        romaji: "Bankon",
        vietnamese: "Kết hôn muộn"
      },
      {
        japanese: "一晩",
        romaji: "Hitoban",
        vietnamese: "Một đêm"
      }
    ]
  },
  {
    id: 131,
    kanji: "夜",
    onyomi: "ヤ",
    kunyomi: "よる、よ",
    meaning: "Đêm, Buổi tối",
    sinoVietnamese: "Dạ",
    examples: [
      {
        japanese: "夜",
        romaji: "Yoru",
        vietnamese: "Buổi đêm"
      },
      {
        japanese: "今夜",
        romaji: "Konya",
        vietnamese: "Đêm nay"
      },
      {
        japanese: "夜中",
        romaji: "Yonaka",
        vietnamese: "Nửa đêm"
      },
      {
        japanese: "夜食",
        romaji: "Yashoku",
        vietnamese: "Ăn khuya"
      },
      {
        japanese: "徹夜",
        romaji: "Tetsuya",
        vietnamese: "Thức trắng đêm"
      }
    ]
  },
  {
    id: 132,
    kanji: "心",
    onyomi: "シン",
    kunyomi: "こころ",
    meaning: "Tim, Tấm lòng",
    sinoVietnamese: "Tâm",
    examples: [
      {
        japanese: "心",
        romaji: "Kokoro",
        vietnamese: "Trái tim, tấm lòng"
      },
      {
        japanese: "心配します",
        romaji: "Shinpai shimasu",
        vietnamese: "Lo lắng"
      },
      {
        japanese: "安心します",
        romaji: "Anshin shimasu",
        vietnamese: "An tâm"
      },
      {
        japanese: "熱心な",
        romaji: "Nesshin na",
        vietnamese: "Nhiệt tình"
      },
      {
        japanese: "感心します",
        romaji: "Kanshin shimasu",
        vietnamese: "Khâm phục"
      }
    ]
  },
  {
    id: 133,
    kanji: "手",
    onyomi: "シュ、ズ",
    kunyomi: "て、た",
    meaning: "Tay",
    sinoVietnamese: "Thủ",
    examples: [
      {
        japanese: "手",
        romaji: "Te",
        vietnamese: "Tay"
      },
      {
        japanese: "上手な",
        romaji: "Jouzu na",
        vietnamese: "Giỏi"
      },
      {
        japanese: "下手な",
        romaji: "Heta na",
        vietnamese: "Kém"
      },
      {
        japanese: "手紙",
        romaji: "Tegami",
        vietnamese: "Bức thư"
      },
      {
        japanese: "歌手",
        romaji: "Kashu",
        vietnamese: "Ca sĩ"
      }
    ]
  },
  {
    id: 134,
    kanji: "足",
    onyomi: "ソク",
    kunyomi: "あし、た・りる",
    meaning: "Chân, Đủ",
    sinoVietnamese: "Túc",
    examples: [
      {
        japanese: "足",
        romaji: "Ashi",
        vietnamese: "Chân"
      },
      {
        japanese: "足ります",
        romaji: "Tarimasu",
        vietnamese: "Đủ"
      },
      {
        japanese: "足します",
        romaji: "Tashimasu",
        vietnamese: "Cộng, thêm vào"
      },
      {
        japanese: "遠足",
        romaji: "Ensoku",
        vietnamese: "Dã ngoại"
      },
      {
        japanese: "不足",
        romaji: "Fusoku",
        vietnamese: "Thiếu"
      }
    ]
  },
  {
    id: 135,
    kanji: "体",
    onyomi: "タイ、テイ",
    kunyomi: "からだ",
    meaning: "Cơ thể",
    sinoVietnamese: "Thể",
    examples: [
      {
        japanese: "体",
        romaji: "Karada",
        vietnamese: "Cơ thể"
      },
      {
        japanese: "体力",
        romaji: "Tairyoku",
        vietnamese: "Thể lực"
      },
      {
        japanese: "体重",
        romaji: "Taijuu",
        vietnamese: "Cân nặng"
      },
      {
        japanese: "全体",
        romaji: "Zentai",
        vietnamese: "Toàn thể"
      },
      {
        japanese: "体育",
        romaji: "Taiiku",
        vietnamese: "Thể dục"
      }
    ]
  },
  {
    id: 136,
    kanji: "首",
    onyomi: "シュ",
    kunyomi: "くび",
    meaning: "Cổ",
    sinoVietnamese: "Thủ",
    examples: [
      {
        japanese: "首",
        romaji: "Kubi",
        vietnamese: "Cổ"
      },
      {
        japanese: "首になります",
        romaji: "Kubi ni narimasu",
        vietnamese: "Bị sa thải"
      },
      {
        japanese: "手首",
        romaji: "Tekubi",
        vietnamese: "Cổ tay"
      },
      {
        japanese: "足首",
        romaji: "Ashikubi",
        vietnamese: "Cổ chân"
      },
      {
        japanese: "首都",
        romaji: "Shuto",
        vietnamese: "Thủ đô"
      }
    ]
  },
  {
    id: 137,
    kanji: "林",
    onyomi: "リン",
    kunyomi: "はやし",
    meaning: "Rừng thưa",
    sinoVietnamese: "Lâm",
    examples: [
      {
        japanese: "林",
        romaji: "Hayashi",
        vietnamese: "Rừng thưa"
      },
      {
        japanese: "小林さん",
        romaji: "Kobayashi-san",
        vietnamese: "Anh/Chị Kobayashi"
      },
      {
        japanese: "山林",
        romaji: "Sanrin",
        vietnamese: "Rừng núi"
      },
      {
        japanese: "林業",
        romaji: "Ringyou",
        vietnamese: "Lâm nghiệp"
      },
      {
        japanese: "雑木林",
        romaji: "Zoukibayashi",
        vietnamese: "Rừng cây tạp"
      }
    ]
  },
  {
    id: 138,
    kanji: "森",
    onyomi: "シン",
    kunyomi: "もり",
    meaning: "Rừng rậm",
    sinoVietnamese: "Sâm",
    examples: [
      {
        japanese: "森",
        romaji: "Mori",
        vietnamese: "Rừng rậm"
      },
      {
        japanese: "森さん",
        romaji: "Mori-san",
        vietnamese: "Anh/Chị Mori"
      },
      {
        japanese: "森林",
        romaji: "Shinrin",
        vietnamese: "Rừng rú"
      },
      {
        japanese: "青森県",
        romaji: "Aomori-ken",
        vietnamese: "Tỉnh Aomori"
      },
      {
        japanese: "森田さん",
        romaji: "Morita-san",
        vietnamese: "Anh/Chị Morita"
      }
    ]
  },
  {
    id: 139,
    kanji: "空",
    onyomi: "クウ",
    kunyomi: "そら、あ・く、から",
    meaning: "Bầu trời, Trống rỗng",
    sinoVietnamese: "Không",
    examples: [
      {
        japanese: "空",
        romaji: "Sora",
        vietnamese: "Bầu trời"
      },
      {
        japanese: "空気",
        romaji: "Kuuki",
        vietnamese: "Không khí"
      },
      {
        japanese: "空港",
        romaji: "Kuukou",
        vietnamese: "Sân bay"
      },
      {
        japanese: "空手",
        romaji: "Karate",
        vietnamese: "Võ Karate"
      },
      {
        japanese: "空きます",
        romaji: "Akimasu",
        vietnamese: "Trống, rảnh"
      }
    ]
  },
  {
    id: 140,
    kanji: "天",
    onyomi: "テン",
    kunyomi: "あま",
    meaning: "Trời, Thiên",
    sinoVietnamese: "Thiên",
    examples: [
      {
        japanese: "天気",
        romaji: "Tenki",
        vietnamese: "Thời tiết"
      },
      {
        japanese: "天国",
        romaji: "Tengoku",
        vietnamese: "Thiên đường"
      },
      {
        japanese: "天皇",
        romaji: "Tennou",
        vietnamese: "Thiên hoàng"
      },
      {
        japanese: "天才",
        romaji: "Tensai",
        vietnamese: "Thiên tài"
      },
      {
        japanese: "天の川",
        romaji: "Amanogawa",
        vietnamese: "Sông Ngân Hà"
      }
    ]
  },
  {
    id: 141,
    kanji: "気",
    onyomi: "キ",
    kunyomi: "",
    meaning: "Khí, Tinh thần",
    sinoVietnamese: "Khí",
    examples: [
      {
        japanese: "元気な",
        romaji: "Genki na",
        vietnamese: "Khỏe mạnh"
      },
      {
        japanese: "気持ち",
        romaji: "Kimochi",
        vietnamese: "Cảm giác, tâm trạng"
      },
      {
        japanese: "天気",
        romaji: "Tenki",
        vietnamese: "Thời tiết"
      },
      {
        japanese: "病気",
        romaji: "Byouki",
        vietnamese: "Bệnh"
      },
      {
        japanese: "気をつけます",
        romaji: "Ki o tsukemasu",
        vietnamese: "Cẩn thận"
      }
    ]
  },
  {
    id: 142,
    kanji: "雨",
    onyomi: "ウ",
    kunyomi: "あめ",
    meaning: "Mưa",
    sinoVietnamese: "Vũ",
    examples: [
      {
        japanese: "雨",
        romaji: "Ame",
        vietnamese: "Mưa"
      },
      {
        japanese: "大雨",
        romaji: "Ooame",
        vietnamese: "Mưa lớn"
      },
      {
        japanese: "雨期",
        romaji: "Uki",
        vietnamese: "Mùa mưa"
      },
      {
        japanese: "雨具",
        romaji: "Amagu",
        vietnamese: "Đồ đi mưa"
      },
      {
        japanese: "雨水",
        romaji: "Amamizu",
        vietnamese: "Nước mưa"
      }
    ]
  },
  {
    id: 143,
    kanji: "雪",
    onyomi: "セツ",
    kunyomi: "ゆき",
    meaning: "Tuyết",
    sinoVietnamese: "Tuyết",
    examples: [
      {
        japanese: "雪",
        romaji: "Yuki",
        vietnamese: "Tuyết"
      },
      {
        japanese: "大雪",
        romaji: "Ooyuki",
        vietnamese: "Tuyết rơi dày"
      },
      {
        japanese: "新雪",
        romaji: "Shinsetsu",
        vietnamese: "Tuyết mới"
      },
      {
        japanese: "雪だるま",
        romaji: "Yukidaruma",
        vietnamese: "Người tuyết"
      },
      {
        japanese: "雪国",
        romaji: "Yukiguni",
        vietnamese: "Xứ tuyết"
      }
    ]
  },
  {
    id: 144,
    kanji: "風",
    onyomi: "フウ",
    kunyomi: "かぜ",
    meaning: "Gió, Phong cách",
    sinoVietnamese: "Phong",
    examples: [
      {
        japanese: "風",
        romaji: "Kaze",
        vietnamese: "Gió"
      },
      {
        japanese: "台風",
        romaji: "Taifuu",
        vietnamese: "Bão"
      },
      {
        japanese: "風邪を引きます",
        romaji: "Kaze o hikimasu",
        vietnamese: "Bị cảm"
      },
      {
        japanese: "洋風",
        romaji: "Youfuu",
        vietnamese: "Kiểu Tây"
      },
      {
        japanese: "お風呂",
        romaji: "Ofuro",
        vietnamese: "Bồn tắm"
      }
    ]
  },
  {
    id: 145,
    kanji: "花",
    onyomi: "カ",
    kunyomi: "はな",
    meaning: "Hoa",
    sinoVietnamese: "Hoa",
    examples: [
      {
        japanese: "花",
        romaji: "Hana",
        vietnamese: "Hoa"
      },
      {
        japanese: "花見",
        romaji: "Hanami",
        vietnamese: "Ngắm hoa"
      },
      {
        japanese: "花火",
        romaji: "Hanabi",
        vietnamese: "Pháo hoa"
      },
      {
        japanese: "花瓶",
        romaji: "Kabin",
        vietnamese: "Bình hoa"
      },
      {
        japanese: "花嫁",
        romaji: "Hanayome",
        vietnamese: "Cô dâu"
      }
    ]
  },
  {
    id: 146,
    kanji: "石",
    onyomi: "セキ",
    kunyomi: "いし",
    meaning: "Đá",
    sinoVietnamese: "Thạch",
    examples: [
      {
        japanese: "石",
        romaji: "Ishi",
        vietnamese: "Đá"
      },
      {
        japanese: "石油",
        romaji: "Sekiyu",
        vietnamese: "Dầu mỏ"
      },
      {
        japanese: "石けん",
        romaji: "Sekken",
        vietnamese: "Xà phòng"
      },
      {
        japanese: "化石",
        romaji: "Kaseki",
        vietnamese: "Hóa thạch"
      },
      {
        japanese: "宝石",
        romaji: "Houseki",
        vietnamese: "Đá quý"
      }
    ]
  },
  {
    id: 147,
    kanji: "竹",
    onyomi: "チク",
    kunyomi: "たけ",
    meaning: "Tre, Trúc",
    sinoVietnamese: "Trúc",
    examples: [
      {
        japanese: "竹",
        romaji: "Take",
        vietnamese: "Tre"
      },
      {
        japanese: "竹の子",
        romaji: "Takenoko",
        vietnamese: "Măng"
      },
      {
        japanese: "竹林",
        romaji: "Chikurin",
        vietnamese: "Rừng tre"
      },
      {
        japanese: "竹馬",
        romaji: "Takeuma",
        vietnamese: "Cà kheo"
      },
      {
        japanese: "爆竹",
        romaji: "Bakuchiku",
        vietnamese: "Pháo tép"
      }
    ]
  },
  {
    id: 148,
    kanji: "犬",
    onyomi: "ケン",
    kunyomi: "いぬ",
    meaning: "Chó",
    sinoVietnamese: "Khuyển",
    examples: [
      {
        japanese: "犬",
        romaji: "Inu",
        vietnamese: "Con chó"
      },
      {
        japanese: "子犬",
        romaji: "Koinu",
        vietnamese: "Chó con"
      },
      {
        japanese: "番犬",
        romaji: "Banken",
        vietnamese: "Chó giữ nhà"
      },
      {
        japanese: "盲導犬",
        romaji: "Moudouken",
        vietnamese: "Chó dẫn đường"
      },
      {
        japanese: "愛犬家",
        romaji: "Aikenka",
        vietnamese: "Người yêu chó"
      }
    ]
  },
  {
    id: 149,
    kanji: "耳",
    onyomi: "ジ",
    kunyomi: "みみ",
    meaning: "Tai",
    sinoVietnamese: "Nhĩ",
    examples: [
      {
        japanese: "耳",
        romaji: "Mimi",
        vietnamese: "Tai"
      },
      {
        japanese: "耳鼻科",
        romaji: "Jibika",
        vietnamese: "Khoa tai mũi"
      },
      {
        japanese: "初耳",
        romaji: "Hatsumimi",
        vietnamese: "Lần đầu nghe thấy"
      },
      {
        japanese: "耳鳴り",
        romaji: "Miminari",
        vietnamese: "Ù tai"
      },
      {
        japanese: "耳飾り",
        romaji: "Mimikazari",
        vietnamese: "Khuyên tai"
      }
    ]
  },
  {
    id: 150,
    kanji: "目",
    onyomi: "モク",
    kunyomi: "め",
    meaning: "Mắt, Mục",
    sinoVietnamese: "Mục",
    examples: [
      {
        japanese: "目",
        romaji: "Me",
        vietnamese: "Mắt"
      },
      {
        japanese: "目的",
        romaji: "Mokuteki",
        vietnamese: "Mục đích"
      },
      {
        japanese: "目次",
        romaji: "Mokuji",
        vietnamese: "Mục lục"
      },
      {
        japanese: "注目します",
        romaji: "Chuumoku shimasu",
        vietnamese: "Chú ý"
      },
      {
        japanese: "目薬",
        romaji: "Megusuri",
        vietnamese: "Thuốc nhỏ mắt"
      }
    ]
  },
  {
    id: 151,
    kanji: "顔",
    onyomi: "ガン",
    kunyomi: "かお",
    meaning: "Khuôn mặt",
    sinoVietnamese: "Nhan",
    examples: [
      {
        japanese: "顔",
        romaji: "Kao",
        vietnamese: "Khuôn mặt"
      },
      {
        japanese: "洗顔",
        romaji: "Sengan",
        vietnamese: "Rửa mặt"
      },
      {
        japanese: "顔色",
        romaji: "Kaoiro",
        vietnamese: "Sắc mặt"
      },
      {
        japanese: "笑顔",
        romaji: "Egao",
        vietnamese: "Khuôn mặt cười"
      },
      {
        japanese: "顔面",
        romaji: "Ganmen",
        vietnamese: "Mặt tiền/Bề mặt"
      }
    ]
  },
  {
    id: 152,
    kanji: "頭",
    onyomi: "トウ、ズ",
    kunyomi: "あたま",
    meaning: "Đầu",
    sinoVietnamese: "Đầu",
    examples: [
      {
        japanese: "頭",
        romaji: "Atama",
        vietnamese: "Đầu"
      },
      {
        japanese: "頭痛",
        romaji: "Zutsuu",
        vietnamese: "Đau đầu"
      },
      {
        japanese: "先頭",
        romaji: "Sentou",
        vietnamese: "Dẫn đầu"
      },
      {
        japanese: "頭がいい",
        romaji: "Atama ga ii",
        vietnamese: "Thông minh"
      },
      {
        japanese: "頭文字",
        romaji: "Kashiramoji",
        vietnamese: "Ký tự đầu dòng"
      }
    ]
  }
];
