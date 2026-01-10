export interface KanjiExample {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface KanjiCard {
  id: number;
  kanji: string;
  onyomi: string;
  onyomiRomaji?: string;
  kunyomi: string;
  kunyomiRomaji?: string;
  meaning: string;
  sinoVietnamese: string;
  imageUrl?: string;
  lesson?: number;
  radicals?: string;
  mnemonic?: string;
  examples: KanjiExample[];
}

export const kanjiData: KanjiCard[] = [
  {
    id: 1,
    kanji: "日",
    lesson: 1,
    imageUrl: "/images/kanji/1_sun_3d_iso.png",
    onyomi: "ニチ、ジツ",
    onyomiRomaji: "nichi, jitsu",
    kunyomi: "ひ、か",
    kunyomiRomaji: "hi, ka",
    meaning: "Mặt trời, Ngày",
    sinoVietnamese: "NHẬT",
    radicals: "日 (nhật)",
    mnemonic: "Hình ảnh mặt trời hình chữ nhật.",
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
    lesson: 1,
    imageUrl: "/images/kanji/2_moon_3d.png",
    onyomi: "ゲツ、ガツ",
    onyomiRomaji: "getsu, gatsu",
    kunyomi: "つき",
    kunyomiRomaji: "tsuki",
    meaning: "Mặt trăng, Tháng",
    sinoVietnamese: "NGUYỆT",
    radicals: "月 (nguyệt)",
    mnemonic: "Hình ảnh mặt trăng lưỡi liềm.",
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
    lesson: 1,
    imageUrl: "/images/kanji/3_fire_3d.png",
    onyomi: "カ",
    onyomiRomaji: "ka",
    kunyomi: "ひ",
    kunyomiRomaji: "hi",
    meaning: "Lửa",
    sinoVietnamese: "Hỏa",
    radicals: "火 (hỏa)",
    mnemonic: "Hình ảnh ngọn lửa đang cháy bùng lên.",
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
    lesson: 1,
    imageUrl: "/images/kanji/4_water_3d.png",
    onyomi: "スイ",
    onyomiRomaji: "sui",
    kunyomi: "みず",
    kunyomiRomaji: "mizu",
    meaning: "Nước",
    sinoVietnamese: "Thủy",
    radicals: "水 (thủy)",
    mnemonic: "Hình ảnh dòng nước chảy bắn ra hai bên.",
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
    lesson: 1,
    imageUrl: "/images/kanji/5_tree_3d.png",
    onyomi: "モク、ボク",
    onyomiRomaji: "moku, boku",
    kunyomi: "き、こ",
    kunyomiRomaji: "ki, ko",
    meaning: "Cây, Gỗ",
    sinoVietnamese: "MỘC",
    radicals: "木 (mộc)",
    mnemonic: "Hình ảnh cái cây với rễ và cành.",
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
    lesson: 1,
    imageUrl: "/images/kanji/6_gold_3d.png",
    onyomi: "キン、コン",
    onyomiRomaji: "kin, kon",
    kunyomi: "かね、かな",
    kunyomiRomaji: "kane, kana",
    meaning: "Vàng, Tiền",
    sinoVietnamese: "Kim",
    radicals: "𠆢 (nhân) + 王 (vương) + 丷",
    mnemonic: "Nhà vua (王) đứng dưới mái nhà (𠆢) đếm vàng (丷).",
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
    lesson: 1,
    imageUrl: "/images/kanji/7_earth_3d.png",
    onyomi: "ド、ト",
    onyomiRomaji: "do, to",
    kunyomi: "つち",
    kunyomiRomaji: "tsuchi",
    meaning: "Đất",
    sinoVietnamese: "Thổ",
    radicals: "土 (thổ)",
    mnemonic: "Cây mọc lên từ mặt đất.",
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
    lesson: 1,
    imageUrl: "/images/kanji/8_mountain_3d.png",
    onyomi: "サン",
    onyomiRomaji: "san",
    kunyomi: "やま",
    kunyomiRomaji: "yama",
    meaning: "Núi",
    sinoVietnamese: "SƠN",
    radicals: "山 (sơn)",
    mnemonic: "Hình ảnh ba ngọn núi.",
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
    lesson: 1,
    imageUrl: "/images/kanji/9_river_3d.png",
    onyomi: "セン",
    onyomiRomaji: "sen",
    kunyomi: "かわ",
    kunyomiRomaji: "kawa",
    meaning: "Sông",
    sinoVietnamese: "XUYÊN",
    radicals: "川 (xuyên)",
    mnemonic: "Dòng sông đang chảy.",
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
    lesson: 1,
    imageUrl: "/images/kanji/10_ricefield_3d.png",
    onyomi: "デン",
    onyomiRomaji: "den",
    kunyomi: "た",
    kunyomiRomaji: "ta",
    meaning: "Ruộng lúa",
    sinoVietnamese: "Điền",
    radicals: "田 (điền)",
    mnemonic: "Hình ảnh ruộng lúa chia làm 4 ô.",
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
    lesson: 1,
    imageUrl: "/images/kanji/11_person_3d.png",
    onyomi: "ジン、ニン",
    onyomiRomaji: "jin, nin",
    kunyomi: "ひと",
    kunyomiRomaji: "hito",
    meaning: "Người",
    sinoVietnamese: "Nhân",
    radicals: "人 (nhân)",
    mnemonic: "Hình dáng con người đang đứng nghiêng.",
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
    lesson: 1,
    imageUrl: "/images/kanji/12_mouth_3d.png",
    onyomi: "コウ、ク",
    onyomiRomaji: "kou, ku",
    kunyomi: "くち",
    kunyomiRomaji: "kuchi",
    meaning: "Miệng",
    sinoVietnamese: "Khẩu",
    radicals: "口 (khẩu)",
    mnemonic: "Hình cái miệng đang mở.",
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
    lesson: 1,
    imageUrl: "/images/kanji/13_car_3d.png",
    onyomi: "シャ",
    onyomiRomaji: "sha",
    kunyomi: "くるま",
    kunyomiRomaji: "kuruma",
    meaning: "Xe",
    sinoVietnamese: "Xa",
    radicals: "車 (xa)",
    mnemonic: "Hình chiếc xe kéo nhìn từ trên xuống (có 2 bánh xe).",
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
    lesson: 1,
    imageUrl: "/images/kanji/14_gate_3d.png",
    onyomi: "モン",
    onyomiRomaji: "mon",
    kunyomi: "かど",
    kunyomiRomaji: "kado",
    meaning: "Cổng",
    sinoVietnamese: "Môn",
    radicals: "門 (môn)",
    mnemonic: "Hình cái cổng có 2 cánh cửa.",
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
    lesson: 1,
    imageUrl: "/images/kanji/15_child_3d.png",
    onyomi: "シ、ス",
    onyomiRomaji: "shi, su",
    kunyomi: "こ",
    kunyomiRomaji: "ko",
    meaning: "Con, Trẻ em",
    sinoVietnamese: "Tử",
    radicals: "子 (tử)",
    mnemonic: "Hình đứa trẻ đang quấn tã, dang 2 tay.",
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
    lesson: 1,
    imageUrl: "/images/kanji/16_woman_3d.png",
    onyomi: "ジョ",
    onyomiRomaji: "jo",
    kunyomi: "おんな",
    kunyomiRomaji: "onna",
    meaning: "Nữ, Phụ nữ",
    sinoVietnamese: "Nữ",
    radicals: "女 (nữ)",
    mnemonic: "Hình dáng người phụ nữ đang ngồi.",
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
    lesson: 2,
    imageUrl: "/images/kanji/17_study_3d.png",
    onyomi: "ガク",
    onyomiRomaji: "gaku",
    kunyomi: "まな・ぶ",
    kunyomiRomaji: "mana-bu",
    meaning: "Học",
    sinoVietnamese: "Học",
    radicals: "⺍ (tiểu) + 冖 (mịch) + 子 (tử)",
    mnemonic: "Đứa trẻ (子) đội mũ (冖) đi học (⺍).",
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
    lesson: 2,
    imageUrl: "/images/kanji/18_life_3d.png",
    onyomi: "セイ、ショウ",
    onyomiRomaji: "sei, shou",
    kunyomi: "い・きる、う・まれる、なま",
    kunyomiRomaji: "i-kiru, u-mareru, nama",
    meaning: "Sinh, Sống",
    sinoVietnamese: "Sinh",
    radicals: "生 (sinh)",
    mnemonic: "Cây cỏ mọc lên từ mặt đất, biểu tượng sự sống.",
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
    lesson: 2,
    imageUrl: "/images/kanji/19_before_3d.png",
    onyomi: "セン",
    onyomiRomaji: "sen",
    kunyomi: "さき",
    kunyomiRomaji: "saki",
    meaning: "Trước, Tiên",
    sinoVietnamese: "Tiên",
    radicals: "牛 (ngưu/biến thể) + 儿 (nhân)",
    mnemonic: "Người (儿) đi trước cầm cây gậy dẫn đường.",
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
    lesson: 2,
    imageUrl: "/images/kanji/20_me_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "わたし、わたくし",
    kunyomiRomaji: "watashi, watakushi",
    meaning: "Tôi, Tư",
    sinoVietnamese: "Tư",
    radicals: "禾 (hòa) + ム (khư)",
    mnemonic: "Cây lúa (禾) là tài sản riêng (ム) của tôi.",
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
    lesson: 2,
    imageUrl: "/images/kanji/21_one_3d.png",
    onyomi: "イチ、イツ",
    onyomiRomaji: "ichi, itsu",
    kunyomi: "ひと・つ",
    kunyomiRomaji: "hito-tsu",
    meaning: "Một",
    sinoVietnamese: "Nhất",
    radicals: "一 (nhất)",
    mnemonic: "Một nét gạch ngang biểu thị số một.",
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
    lesson: 2,
    imageUrl: "/images/kanji/22_two_3d.png",
    onyomi: "ニ",
    onyomiRomaji: "ni",
    kunyomi: "ふた・つ",
    kunyomiRomaji: "futa-tsu",
    meaning: "Hai",
    sinoVietnamese: "Nhị",
    radicals: "二 (nhị)",
    mnemonic: "Hai nét gạch ngang biểu thị số hai.",
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
    lesson: 2,
    imageUrl: "/images/kanji/23_three_3d.png",
    onyomi: "サン",
    onyomiRomaji: "san",
    kunyomi: "みっ・つ",
    kunyomiRomaji: "mitt-tsu",
    meaning: "Ba",
    sinoVietnamese: "Tam",
    radicals: "三 (tam)",
    mnemonic: "Ba nét gạch ngang biểu thị số ba.",
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
    lesson: 2,
    imageUrl: "/images/kanji/24_four_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "よっ・つ、よん、よ",
    kunyomiRomaji: "yottsu, yon, yo",
    meaning: "Bốn",
    sinoVietnamese: "Tứ",
    radicals: "囗 (vi) + 儿 (nhân)",
    mnemonic: "Đứa trẻ (儿) ngồi trong 4 bức tường (囗).",
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
    lesson: 2,
    imageUrl: "/images/kanji/25_five_3d.png",
    onyomi: "ゴ",
    onyomiRomaji: "go",
    kunyomi: "いつ・つ",
    kunyomiRomaji: "itsu-tsu",
    meaning: "Năm",
    sinoVietnamese: "Ngũ",
    radicals: "二 (nhị) + 𠄡 (liêm)",
    mnemonic: "Số 5 viết cách điệu (giống số 5 la mã V và I kết hợp?).",
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
    lesson: 2,
    imageUrl: "/images/kanji/26_six_3d.png",
    onyomi: "ロク",
    onyomiRomaji: "roku",
    kunyomi: "むっ・つ",
    kunyomiRomaji: "muttsu",
    meaning: "Sáu",
    sinoVietnamese: "Lục",
    radicals: "亠 (đầu) + 八 (bát)",
    mnemonic: "Dấu chấm (亠) trên số tám (八) thành số sáu.",
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
    lesson: 2,
    imageUrl: "/images/kanji/27_seven_3d.png",
    onyomi: "シチ",
    onyomiRomaji: "shichi",
    kunyomi: "なな・つ、なな",
    kunyomiRomaji: "nana-tsu, nana",
    meaning: "Bảy",
    sinoVietnamese: "Thất",
    radicals: "一 (nhất) + 乚 (ất)",
    mnemonic: "Hình dáng giống số 7 bị lật ngược. Số 7 may mắn.",
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
    lesson: 2,
    imageUrl: "/images/kanji/28_eight_3d.png",
    onyomi: "ハチ",
    onyomiRomaji: "hachi",
    kunyomi: "やっ・つ",
    kunyomiRomaji: "yattsu",
    meaning: "Tám",
    sinoVietnamese: "Bát",
    radicals: "八 (bát)",
    mnemonic: "Hai nét tách ra biểu thị số tám.",
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
    lesson: 2,
    imageUrl: "/images/kanji/29_nine_3d.png",
    onyomi: "キュウ、ク",
    onyomiRomaji: "kyuu, ku",
    kunyomi: "ここの・つ",
    kunyomiRomaji: "kokono-tsu",
    meaning: "Chín",
    sinoVietnamese: "Cửu",
    radicals: "乙 (ất) + 丿 (phiệt)",
    mnemonic: "Nét cong (乙) và nét phẩy (丿) tạo thành số 9.",
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
    lesson: 2,
    imageUrl: "/images/kanji/30_ten_3d.png",
    onyomi: "ジュウ、ジッ",
    onyomiRomaji: "juu, ji-",
    kunyomi: "とお",
    kunyomiRomaji: "too",
    meaning: "Mười",
    sinoVietnamese: "Thập",
    radicals: "十 (thập)",
    mnemonic: "Hình dấu cộng biểu thị sự đầy đủ, tròn trịa.",
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
    lesson: 2,
    imageUrl: "/images/kanji/31_hundred_3d.png",
    onyomi: "ヒャク",
    onyomiRomaji: "hyaku",
    kunyomi: "",
    meaning: "Trăm",
    sinoVietnamese: "Bách",
    radicals: "一 (nhất) + 白 (bạch)",
    mnemonic: "Một (一) trăm màu trắng (白).",
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
    lesson: 2,
    imageUrl: "/images/kanji/32_thousand_3d.png",
    onyomi: "セン",
    onyomiRomaji: "sen",
    kunyomi: "ち",
    kunyomiRomaji: "chi",
    meaning: "Nghìn",
    sinoVietnamese: "Thiên",
    radicals: "十 (thập) + 丿 (phiệt)",
    mnemonic: "Mười (十) thêm dấu phẩy (丿) thành nghìn.",
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
    lesson: 3,
    imageUrl: "/images/kanji/33_above_3d.png",
    onyomi: "ジョウ",
    onyomiRomaji: "jou",
    kunyomi: "うえ、あ・げる",
    kunyomiRomaji: "ue, a-geru",
    meaning: "Trên",
    sinoVietnamese: "Thượng",
    radicals: "卜 (bốc) + 一 (nhất)",
    mnemonic: "Mốc ở dưới (一), cây gậy chỉ lên trên (卜).",
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
    lesson: 3,
    imageUrl: "/images/kanji/34_below_3d.png",
    onyomi: "カ、ゲ",
    onyomiRomaji: "ka, ge",
    kunyomi: "した、さ・げる",
    kunyomiRomaji: "shita, sa-geru",
    meaning: "Dưới",
    sinoVietnamese: "Hạ",
    radicals: "一 (nhất) + 卜 (bốc)",
    mnemonic: "Mốc ở trên (一), cây gậy chỉ xuống dưới (卜).",
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
    lesson: 3,
    imageUrl: "/images/kanji/35_middle_3d.png",
    onyomi: "チュウ",
    onyomiRomaji: "chuu",
    kunyomi: "なか",
    kunyomiRomaji: "naka",
    meaning: "Trong, Giữa",
    sinoVietnamese: "Trung",
    radicals: "口 (khẩu) + 丨 (sổ)",
    mnemonic: "Mũi tên xuyên qua trúng giữa cái bia (口).",
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
    lesson: 3,
    imageUrl: "/images/kanji/36_big_3d.png",
    onyomi: "ダイ、タイ",
    onyomiRomaji: "dai, tai",
    kunyomi: "おお・きい",
    kunyomiRomaji: "oo-kii",
    meaning: "To, Lớn",
    sinoVietnamese: "Đại",
    radicals: "一 (nhất) + 人 (nhân)",
    mnemonic: "Người (人) dang rộng hai tay thật to (一).",
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
    lesson: 3,
    imageUrl: "/images/kanji/37_small_3d.png",
    onyomi: "ショウ",
    onyomiRomaji: "shou",
    kunyomi: "ちい・さい",
    kunyomiRomaji: "chii-sai",
    meaning: "Nhỏ",
    sinoVietnamese: "Tiểu",
    radicals: "亅 (quyết) + 八 (bát)",
    mnemonic: "Cái móc câu và hai hạt bụi nhỏ.",
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
    lesson: 3,
    imageUrl: "/images/kanji/38_book_3d.png",
    onyomi: "ホン",
    onyomiRomaji: "hon",
    kunyomi: "もと",
    kunyomiRomaji: "moto",
    meaning: "Sách/Gốc",
    sinoVietnamese: "Bản",
    radicals: "木 (mộc) + 一 (nhất)",
    mnemonic: "Gạch một nét (一) ở gốc cây (木) để chỉ gốc rễ.",
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
    lesson: 3,
    imageUrl: "/images/kanji/39_half_3d.png",
    onyomi: "ハン",
    onyomiRomaji: "han",
    kunyomi: "なか・ば",
    kunyomiRomaji: "naka-ba",
    meaning: "Nửa",
    sinoVietnamese: "Bán",
    radicals: "丷 (bát) + 二 (nhị) + 丨 (sổ)",
    mnemonic: "Chia đôi (丷) hai (二) phần bằng nhau.",
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
    lesson: 3,
    imageUrl: "/images/kanji/40_minute_3d.png",
    onyomi: "フン、ブン、ブ",
    onyomiRomaji: "fun, bun, bu",
    kunyomi: "わ・かる",
    kunyomiRomaji: "wa-karu",
    meaning: "Phút/Phần/Hiểu",
    sinoVietnamese: "Phân",
    radicals: "八 (bát) + 刀 (đao)",
    mnemonic: "Dùng dao (刀) chia cắt (八) thành từng phần.",
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
    lesson: 3,
    imageUrl: "/images/kanji/41_power_3d.png",
    onyomi: "リョク",
    onyomiRomaji: "ryoku",
    kunyomi: "ちから",
    kunyomiRomaji: "chikara",
    meaning: "Sức lực",
    sinoVietnamese: "Lực",
    radicals: "力 (lực)",
    mnemonic: "Hình bắp tay đang gồng lên biểu thị sức mạnh.",
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
    lesson: 3,
    imageUrl: "/images/kanji/42_what_3d.png",
    onyomi: "カ",
    onyomiRomaji: "ka",
    kunyomi: "なに、なん",
    kunyomiRomaji: "nani, nan",
    meaning: "Cái gì",
    sinoVietnamese: "Hà",
    radicals: "亻 (nhân) + 可 (khả)",
    mnemonic: "Người (亻) vác cây khả (可) hỏi 'Cái gì đây?'.",
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
    lesson: 3,
    imageUrl: "/images/kanji/43_bright_3d.png",
    onyomi: "メイ、ミョウ",
    onyomiRomaji: "mei, myou",
    kunyomi: "あ・かるい",
    kunyomiRomaji: "a-karui",
    meaning: "Sáng",
    sinoVietnamese: "Minh",
    radicals: "日 (nhật) + 月 (nguyệt)",
    mnemonic: "Mặt trời (日) và mặt trăng (月) cùng chiếu sáng.",
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
    lesson: 3,
    imageUrl: "/images/kanji/44_rest_3d.png",
    onyomi: "キュウ",
    onyomiRomaji: "kyuu",
    kunyomi: "やす・む",
    kunyomiRomaji: "yasu-mu",
    meaning: "Nghỉ",
    sinoVietnamese: "Hưu",
    radicals: "亻 (nhân) + 木 (mộc)",
    mnemonic: "Người (亻) dựa vào gốc cây (木) để nghỉ ngơi.",
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
    lesson: 3,
    imageUrl: "/images/kanji/45_body_3d.png",
    onyomi: "タイ",
    onyomiRomaji: "tai",
    kunyomi: "からだ",
    kunyomiRomaji: "karada",
    meaning: "Cơ thể",
    sinoVietnamese: "Thể",
    radicals: "亻 (nhân) + 本 (bản)",
    mnemonic: "Cơ thể (本) của con người (亻).",
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
    lesson: 3,
    imageUrl: "/images/kanji/46_like_3d.png",
    onyomi: "コウ",
    onyomiRomaji: "kou",
    kunyomi: "す・き",
    kunyomiRomaji: "su-ki",
    meaning: "Thích",
    sinoVietnamese: "Hảo",
    radicals: "女 (nữ) + 子 (tử)",
    mnemonic: "Phụ nữ (女) yêu thích con cái (子).",
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
    lesson: 3,
    imageUrl: "/images/kanji/47_man_3d.png",
    onyomi: "ダン、ナン",
    onyomiRomaji: "dan, nan",
    kunyomi: "おとこ",
    kunyomiRomaji: "otoko",
    meaning: "Nam",
    sinoVietnamese: "Nam",
    radicals: "田 (điền) + 力 (lực)",
    mnemonic: "Người dùng sức lực (力) làm việc trên ruộng (田) là đàn ông.",
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
    lesson: 3,
    imageUrl: "/images/kanji/48_grove_3d.png",
    onyomi: "リン",
    onyomiRomaji: "rin",
    kunyomi: "はやし",
    kunyomiRomaji: "hayashi",
    meaning: "Rừng thưa",
    sinoVietnamese: "Lâm",
    radicals: "木 (mộc) + 木 (mộc)",
    mnemonic: "Hai cái cây đứng cạnh nhau tạo thành rừng thưa.",
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
    lesson: 4,
    imageUrl: "/images/kanji/49_forest_3d.png",
    onyomi: "シン",
    onyomiRomaji: "shin",
    kunyomi: "もり",
    kunyomiRomaji: "mori",
    meaning: "Rừng rậm",
    sinoVietnamese: "Sâm",
    radicals: "木 (mộc) + 木 (mộc) + 木 (mộc)",
    mnemonic: "Ba cái cây tạo thành rừng rậm rạp.",
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
    lesson: 4,
    imageUrl: "/images/kanji/50_between_3d.png",
    onyomi: "カン、ゲン",
    onyomiRomaji: "kan, gen",
    kunyomi: "あいだ、ま",
    kunyomiRomaji: "aida, ma",
    meaning: "Giữa, Gian",
    sinoVietnamese: "Gian",
    radicals: "門 (môn) + 日 (nhật)",
    mnemonic: "Mặt trời (日) chiếu qua khe cửa (門).",
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
    lesson: 4,
    imageUrl: "/images/kanji/51_field_3d.png",
    onyomi: "",
    onyomiRomaji: "",
    kunyomi: "はたけ",
    kunyomiRomaji: "hatake",
    meaning: "Ruộng đồng",
    sinoVietnamese: "Điền (Nhật tạo)",
    radicals: "火 (hỏa) + 田 (điền)",
    mnemonic: "Đốt lửa (火) trên ruộng (田) để làm rẫy.",
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
    lesson: 4,
    imageUrl: "/images/kanji/52_rock_3d.png",
    onyomi: "ガン",
    onyomiRomaji: "gan",
    kunyomi: "いわ",
    kunyomiRomaji: "iwa",
    meaning: "Đá tảng",
    sinoVietnamese: "Nham",
    radicals: "山 (sơn) + 石 (thạch)",
    mnemonic: "Hòn đá (石) dưới chân núi (山) là đá tảng.",
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
    lesson: 4,
    imageUrl: "/images/kanji/53_eye_3d.png",
    onyomi: "モク",
    onyomiRomaji: "moku",
    kunyomi: "め",
    kunyomiRomaji: "me",
    meaning: "Mắt",
    sinoVietnamese: "Mục",
    radicals: "目 (mục)",
    mnemonic: "Hình con mắt dựng đứng.",
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
    lesson: 4,
    imageUrl: "/images/kanji/54_ear_3d.png",
    onyomi: "ジ",
    onyomiRomaji: "ji",
    kunyomi: "みみ",
    kunyomiRomaji: "mimi",
    meaning: "Tai",
    sinoVietnamese: "Nhĩ",
    radicals: "耳 (nhĩ)",
    mnemonic: "Hình cái tai người.",
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
    lesson: 4,
    imageUrl: "/images/kanji/55_hand_3d.png",
    onyomi: "シュ",
    onyomiRomaji: "shu",
    kunyomi: "て",
    kunyomiRomaji: "te",
    meaning: "Tay",
    sinoVietnamese: "Thủ",
    radicals: "手 (thủ)",
    mnemonic: "Hình bàn tay xòe ra.",
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
    lesson: 4,
    imageUrl: "/images/kanji/56_foot_3d.png",
    onyomi: "ソク",
    onyomiRomaji: "soku",
    kunyomi: "あし、た・りる",
    kunyomiRomaji: "ashi, ta-riru",
    meaning: "Chân",
    sinoVietnamese: "Túc",
    radicals: "口 (khẩu) + 止 (chỉ)",
    mnemonic: "Cái miệng (口) ở trên, chân dừng lại (止).",
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
    lesson: 4,
    imageUrl: "/images/kanji/57_rain_3d.png",
    onyomi: "ウ",
    onyomiRomaji: "u",
    kunyomi: "あめ",
    kunyomiRomaji: "ame",
    meaning: "Mưa",
    sinoVietnamese: "Vũ",
    radicals: "雨 (vũ)",
    mnemonic: "Những giọt mưa rơi xuống từ đám mây trên trời.",
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
    lesson: 4,
    onyomi: "チク",
    onyomiRomaji: "chiku",
    kunyomi: "たけ",
    kunyomiRomaji: "take",
    imageUrl: "/images/kanji/58_bamboo_3d.png",
    meaning: "Tre",
    sinoVietnamese: "Trúc",
    radicals: "竹 (trúc)",
    mnemonic: "Hình lá trúc rủ xuống.",
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
    lesson: 4,
    onyomi: "ベイ、マイ",
    onyomiRomaji: "bei, mai",
    kunyomi: "こめ",
    kunyomiRomaji: "kome",
    imageUrl: "/images/kanji/59_rice_3d.png",
    meaning: "Gạo",
    sinoVietnamese: "Mễ",
    radicals: "米 (mễ)",
    mnemonic: "Hình bông lúa trĩu hạt.",
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
    lesson: 4,
    onyomi: "",
    onyomiRomaji: "",
    kunyomi: "かい",
    kunyomiRomaji: "kai",
    imageUrl: "/images/kanji/60_shellfish_3d.png",
    meaning: "Sò, Hến",
    sinoVietnamese: "Bối",
    radicals: "貝 (bối)",
    mnemonic: "Hình con sò đang mở miệng. Biểu tượng của tiền bạc.",
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
    lesson: 4,
    onyomi: "セキ",
    onyomiRomaji: "seki",
    kunyomi: "いし",
    kunyomiRomaji: "ishi",
    imageUrl: "/images/kanji/61_stone_3d.png",
    meaning: "Đá",
    sinoVietnamese: "Thạch",
    radicals: "石 (thạch)",
    mnemonic: "Hòn đá (口) nằm dưới vách núi (厂).",
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
    lesson: 4,
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "いと",
    kunyomiRomaji: "ito",
    imageUrl: "/images/kanji/62_thread_3d.png",
    meaning: "Sợi chỉ",
    sinoVietnamese: "Mịch",
    radicals: "糸 (mịch)",
    mnemonic: "Hình cuộn tơ nhỏ.",
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
    lesson: 4,
    onyomi: "カ",
    onyomiRomaji: "ka",
    kunyomi: "はな",
    kunyomiRomaji: "hana",
    imageUrl: "/images/kanji/63_flower_3d.png",
    meaning: "Hoa",
    sinoVietnamese: "Hoa",
    radicals: "艹 (thảo) + 化 (hóa)",
    mnemonic: "Cỏ (艹) biến hóa (化) thành hoa đẹp.",
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
    lesson: 4,
    onyomi: "チャ、サ",
    onyomiRomaji: "cha, sa",
    kunyomi: "",
    kunyomiRomaji: "",
    imageUrl: "/images/kanji/64_tea_3d.png",
    meaning: "Trà",
    sinoVietnamese: "Trà",
    radicals: "艹 (thảo) + 人 (nhân) + 木 (mộc)",
    mnemonic: "Người (人) hái lá cỏ (艹) trên cây (木) làm trà.",
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
    lesson: 5,
    imageUrl: "/images/kanji/65_go_3d.png",
    onyomi: "コウ、ギョウ",
    kunyomi: "い・く、おこな・う",
    meaning: "Đi",
    sinoVietnamese: "Hành",
    radicals: "行 (hành)",
    mnemonic: "Dáng người đang bước đi (ngã tư đường).",
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
    lesson: 5,
    imageUrl: "/images/kanji/66_come_3d.png",
    onyomi: "ライ",
    kunyomi: "く・る",
    meaning: "Đến",
    sinoVietnamese: "Lai",
    radicals: "木 (mộc) + 一 (nhất)",
    mnemonic: "Cây lúa (木) chín vàng chờ người đến gặt.",
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
    lesson: 5,
    imageUrl: "/images/kanji/67_eat_3d.png",
    onyomi: "ショク",
    kunyomi: "た・べる",
    meaning: "Ăn",
    sinoVietnamese: "Thực",
    radicals: "人 (nhân) + 良 (lương)",
    mnemonic: "Con người (人) cần lương thực tốt (良) để ăn.",
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
    lesson: 5,
    imageUrl: "/images/kanji/68_drink_3d.png",
    onyomi: "イン",
    kunyomi: "の・む",
    meaning: "Uống",
    sinoVietnamese: "Ẩm",
    radicals: "食 (thực) + 欠 (khiếm)",
    mnemonic: "Ăn (食) mà thiếu (欠) chất lỏng thì phải uống.",
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
    lesson: 5,
    imageUrl: "/images/kanji/69_see_3d.png",
    onyomi: "ケン",
    kunyomi: "み・る",
    meaning: "Nhìn/Xem",
    sinoVietnamese: "Kiến",
    radicals: "目 (mục) + 儿 (nhân)",
    mnemonic: "Mắt (目) của người (儿) đang nhìn.",
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
    lesson: 5,
    imageUrl: "/images/kanji/70_hear_3d.png",
    onyomi: "ブン、モン",
    kunyomi: "き・く",
    meaning: "Nghe",
    sinoVietnamese: "Văn",
    radicals: "門 (môn) + 耳 (nhĩ)",
    mnemonic: "Ghé tai (耳) vào cửa (門) để nghe ngóng.",
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
    lesson: 5,
    imageUrl: "/images/kanji/71_say_3d.png",
    onyomi: "ゲン、ゴン",
    kunyomi: "い・う",
    meaning: "Nói",
    sinoVietnamese: "Ngôn",
    radicals: "言 (ngôn)",
    mnemonic: "Miệng (口) nói ra những lời từ suy nghĩ (亠).",
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
    lesson: 5,
    imageUrl: "/images/kanji/72_talk_3d.png",
    onyomi: "ワ",
    kunyomi: "はな・す、はなし",
    meaning: "Nói chuyện",
    sinoVietnamese: "Thoại",
    radicals: "言 (ngôn) + 舌 (thiệt)",
    mnemonic: "Dùng ngôn ngữ (言) và lưỡi (舌) để nói chuyện.",
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
    lesson: 5,
    imageUrl: "/images/kanji/73_stand_3d.png",
    onyomi: "リツ",
    kunyomi: "た・つ",
    meaning: "Đứng",
    sinoVietnamese: "Lập",
    radicals: "立 (lập)",
    mnemonic: "Hình người đang đứng dang chân trên mặt đất.",
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
    lesson: 5,
    imageUrl: "/images/kanji/74_wait_3d.png",
    onyomi: "タイ",
    kunyomi: "ま・つ",
    meaning: "Đợi",
    sinoVietnamese: "Đãi",
    radicals: "彳 (xích) + 寺 (tự)",
    mnemonic: "Đứng ở đường (彳) trước chùa (寺) để đợi ai đó.",
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
    lesson: 5,
    imageUrl: "/images/kanji/75_meet_3d.png",
    onyomi: "カイ、エ",
    kunyomi: "あ・う",
    meaning: "Gặp",
    sinoVietnamese: "Hội",
    radicals: "人 (nhân) + 云 (vân)",
    mnemonic: "Người (人) nói chuyện (云) khi gặp nhau.",
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
    lesson: 5,
    imageUrl: "/images/kanji/76_exit_3d.png",
    onyomi: "シュツ",
    kunyomi: "で・る、だ・す",
    meaning: "Ra/Xuất",
    sinoVietnamese: "Xuất",
    radicals: "山 (sơn) + 山 (sơn)",
    mnemonic: "Hai ngọn núi chồng lên nhau đi ra ngoài.",
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
    lesson: 5,
    imageUrl: "/images/kanji/77_enter_3d.png",
    onyomi: "ニュウ",
    kunyomi: "はい・る、い・れる",
    meaning: "Vào/Nhập",
    sinoVietnamese: "Nhập",
    radicals: "入 (nhập)",
    mnemonic: "Hình dòng sông chảy vào biển, hoặc người bước vào.",
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
    lesson: 5,
    imageUrl: "/images/kanji/78_week_3d.png",
    onyomi: "シュウ",
    kunyomi: "",
    meaning: "Tuần",
    sinoVietnamese: "Chu",
    radicals: "辶 (xước) + 周 (chu)",
    mnemonic: "Đi (辶) một vòng (周) hết một tuần.",
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
    lesson: 5,
    imageUrl: "/images/kanji/79_good_3d.png",
    onyomi: "リョウ",
    kunyomi: "よ・い",
    meaning: "Tốt",
    sinoVietnamese: "Lương",
    radicals: "艮 (cấn) + 丶 (chủ)",
    mnemonic: "Người phụ nữ tốt lành.",
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
    lesson: 5,
    imageUrl: "/images/kanji/80_return_3d.png",
    onyomi: "キ",
    kunyomi: "かえ・る",
    meaning: "Về",
    sinoVietnamese: "Quy",
    radicals: "刂 (đao) + 帚 (trử)",
    mnemonic: "Cầm chổi (帚) quét nhà chờ người đi về.",
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
    lesson: 5,
    imageUrl: "/images/kanji/81_high_3d.png",
    onyomi: "コウ",
    kunyomi: "たか・い",
    meaning: "Cao / Đắt",
    sinoVietnamese: "Cao",
    radicals: "高 (cao)",
    mnemonic: "Hình tòa tháp cao tầng.",
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
    lesson: 5,
    imageUrl: "/images/kanji/82_cheap_safe_3d.png",
    onyomi: "アン",
    kunyomi: "やす・い",
    meaning: "Rẻ / An tâm",
    sinoVietnamese: "An",
    radicals: "宀 (miên) + 女 (nữ)",
    mnemonic: "Phụ nữ (女) ở trong nhà (宀) thì an tâm.",
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
    lesson: 5,
    imageUrl: "/images/kanji/83_new_3d.png",
    onyomi: "シン",
    kunyomi: "あたら・しい",
    meaning: "Mới",
    sinoVietnamese: "Tân",
    radicals: "立 (lập) + 木 (mộc) + 斤 (cân)",
    mnemonic: "Đứng (立) trên cây (木) dùng rìu (斤) đốn gỗ mới.",
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
    lesson: 5,
    imageUrl: "/images/kanji/84_old_3d.png",
    onyomi: "コ",
    kunyomi: "ふる・い",
    meaning: "Cũ",
    sinoVietnamese: "Cổ",
    radicals: "十 (thập) + 口 (khẩu)",
    mnemonic: "Chuyện mười (十) cái miệng (口) kể lại là chuyện cổ.",
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
    lesson: 6,
    imageUrl: "/images/kanji/85_many_3d.png",
    onyomi: "タ",
    kunyomi: "おお・い",
    meaning: "Nhiều",
    sinoVietnamese: "Đa",
    radicals: "夕 (tich) + 夕 (tich)",
    mnemonic: "Hai buổi chiều tối (夕) lặp lại là nhiều.",
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
    lesson: 6,
    imageUrl: "/images/kanji/86_few_3d.png",
    onyomi: "ショウ",
    kunyomi: "すく・ない、すこ・し",
    meaning: "Ít / Một chút",
    sinoVietnamese: "Thiểu",
    radicals: "小 (tiểu) + 丿 (phiệt)",
    mnemonic: "Nhỏ (小) mà bị bớt đi một nét (丿) thì càng ít.",
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
    lesson: 10,
    imageUrl: "/images/kanji/87_wide_3d.png",
    onyomi: "コウ",
    kunyomi: "ひろ・い",
    meaning: "Rộng",
    sinoVietnamese: "Quảng",
    radicals: "广 (nghiễm) + ム (khư)",
    mnemonic: "Ngôi nhà (广) rộng rãi cho riêng tư (ム).",
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
    lesson: 9,
    imageUrl: "/images/kanji/88_early_3d.png",
    onyomi: "ソウ",
    kunyomi: "はや・い",
    meaning: "Sớm",
    sinoVietnamese: "Tảo",
    radicals: "日 (nhật) + 十 (thập)",
    mnemonic: "Mặt trời (日) mọc trên ngọn cây (十) là sáng sớm.",
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
    lesson: 5,
    imageUrl: "/images/kanji/89_long_3d.png",
    onyomi: "チョウ",
    kunyomi: "なが・い",
    meaning: "Dài / Trưởng",
    sinoVietnamese: "Trường",
    radicals: "長 (trường)",
    mnemonic: "Hình người có mái tóc dài bay trong gió.",
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
    lesson: 14,
    imageUrl: "/images/kanji/90_friend_3d.png",
    onyomi: "ユウ",
    kunyomi: "とも",
    meaning: "Bạn bè",
    sinoVietnamese: "Hữu",
    radicals: "又 (hựu) + 丿 (phiệt)",
    mnemonic: "Hai bàn tay nắm lấy nhau.",
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
    lesson: 6,
    imageUrl: "/images/kanji/91_father_3d.png",
    onyomi: "フ",
    kunyomi: "ちち",
    meaning: "Bố (của mình)",
    sinoVietnamese: "Phụ",
    radicals: "父 (phụ)",
    mnemonic: "Hình ông bố cầm roi dạy con.",
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
    lesson: 6,
    imageUrl: "/images/kanji/92_mother_3d.png",
    onyomi: "ボ",
    kunyomi: "はは",
    meaning: "Mẹ (của mình)",
    sinoVietnamese: "Mẫu",
    radicals: "母 (mẫu)",
    mnemonic: "Chữ nữ (女) thêm hai chấm bầu sữa mẹ.",
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
    lesson: 9,
    imageUrl: "/images/kanji/93_origin_3d.png",
    onyomi: "ゲン、ガン",
    kunyomi: "もと",
    meaning: "Gốc / Khỏe",
    sinoVietnamese: "Nguyên",
    radicals: "二 (nhị) + 儿 (nhân)",
    mnemonic: "Hai (二) người (儿) là nguồn gốc nhân loại.",
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
    lesson: 9,
    imageUrl: "/images/kanji/94_spirit_3d.png",
    onyomi: "キ",
    kunyomi: "",
    meaning: "Khí / Tinh thần",
    sinoVietnamese: "Khí",
    radicals: "气 (khí) + メ (mễ)",
    mnemonic: "Khí (气) bốc lên từ gạo (メ) nấu chín.",
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
    lesson: 6,
    imageUrl: "/images/kanji/95_north_3d.png",
    onyomi: "ホク",
    kunyomi: "きた",
    meaning: "Phía Bắc",
    sinoVietnamese: "Bắc",
    radicals: "匕 (chủy) + 匕 (chủy)",
    mnemonic: "Hai người ngồi quay lưng vào nhau (vì lạnh).",
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
    lesson: 6,
    imageUrl: "/images/kanji/96_south_3d.png",
    onyomi: "ナン",
    kunyomi: "みなみ",
    meaning: "Phía Nam",
    sinoVietnamese: "Nam",
    radicals: "十 (thập) + 冂 (khuynh) + 羊 (dương)",
    mnemonic: "Thập phương quây quần quanh con dê phương Nam.",
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
    lesson: 7,
    imageUrl: "/images/kanji/97_city_3d.png",
    onyomi: "シ",
    kunyomi: "いち",
    meaning: "Thành phố / Chợ",
    sinoVietnamese: "Thị",
    radicals: "亠 (đầu) + 巾 (cân)",
    mnemonic: "Cái khăn (巾) đội trên đầu (亠) đi chợ.",
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
    lesson: 7,
    imageUrl: "/images/kanji/98_town_3d.png",
    onyomi: "チョウ",
    kunyomi: "まち",
    meaning: "Thị trấn / Khu phố",
    sinoVietnamese: "Đinh",
    radicals: "田 (điền) + 丁 (đinh)",
    mnemonic: "Ruộng (田) có đinh (丁) đóng mốc giới là thị trấn.",
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
    lesson: 7,
    imageUrl: "/images/kanji/99_village_3d.png",
    onyomi: "ソン",
    kunyomi: "むら",
    meaning: "Thôn làng",
    sinoVietnamese: "Thôn",
    radicals: "木 (mộc) + 寸 (thốn)",
    mnemonic: "Cây (木) có thước đo (寸) trồng ở thôn làng.",
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
    lesson: 7,
    imageUrl: "/images/kanji/100_electricity_3d.png",
    onyomi: "デン",
    kunyomi: "",
    meaning: "Điện",
    sinoVietnamese: "Điện",
    radicals: "雨 (vũ) + 电 (điện)",
    mnemonic: "Mưa (雨) có sét giật đuôi rồng (电) sinh ra điện.",
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
    lesson: 5,
    imageUrl: "/images/kanji/101_horse_3d.png",
    onyomi: "バ",
    kunyomi: "うま",
    meaning: "Ngựa",
    sinoVietnamese: "Mã",
    radicals: "馬 (mã)",
    mnemonic: "Hình con ngựa đang chạy.",
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
    lesson: 15,
    imageUrl: "/images/kanji/102_station_3d.png",
    onyomi: "エキ",
    kunyomi: "",
    meaning: "Nhà ga",
    sinoVietnamese: "Dịch",
    radicals: "馬 (mã) + 尺 (xích)",
    mnemonic: "Con ngựa (馬) là thước đo (尺) khoảng cách trạm dịch.",
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
    lesson: 8,
    imageUrl: "/images/kanji/103_company_shrine_3d.png",
    onyomi: "シャ",
    kunyomi: "やしろ",
    meaning: "Công ty / Đền thần",
    sinoVietnamese: "Xã",
    radicals: "礻 (kỳ) + 土 (thổ)",
    mnemonic: "Thần đất (土) phù hộ cho xã hội (礻).",
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
    lesson: 7,
    imageUrl: "/images/kanji/104_school_3d.png",
    onyomi: "コウ",
    kunyomi: "",
    meaning: "Trường học",
    sinoVietnamese: "Hiệu",
    radicals: "木 (mộc) + 交 (giao)",
    mnemonic: "Trường học xây bằng gỗ (木), nơi mọi người giao lưu (交).",
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
    lesson: 8,
    imageUrl: "/images/kanji/105_shop_3d.png",
    onyomi: "テン",
    kunyomi: "みせ",
    meaning: "Cửa hàng",
    sinoVietnamese: "Điếm",
    radicals: "广 (nghiễm) + 占 (chiêm)",
    mnemonic: "Cửa hàng (广) là nơi chiếm (占) chỗ bán hàng.",
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
    lesson: 7,
    imageUrl: "/images/kanji/106_silver_3d.png",
    onyomi: "ギン",
    kunyomi: "",
    meaning: "Bạc",
    sinoVietnamese: "Ngân",
    radicals: "金 (kim) + 艮 (cấn)",
    mnemonic: "Kim loại (金) bền cứng (艮) là bạc.",
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
    lesson: 10,
    imageUrl: "/images/kanji/107_illness_3d.png",
    onyomi: "ビョウ",
    kunyomi: "や・む",
    meaning: "Bệnh",
    sinoVietnamese: "Bệnh",
    radicals: "疒 (nha) + 丙 (bính)",
    mnemonic: "Người nằm trên giường bệnh (疒) vào năm Bính (丙) thì là bệnh.",
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
    lesson: 10,
    imageUrl: "/images/kanji/108_institute_3d.png",
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
    lesson: 7,
    imageUrl: "/images/kanji/109_run_3d.png",
    onyomi: "ソウ",
    kunyomi: "はし・る",
    meaning: "Chạy",
    sinoVietnamese: "Tẩu",
    radicals: "土 (thổ) + 疋 (thất/chân)",
    mnemonic: "Người chạy (chân 疋) trên mặt đất (土).",
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
    lesson: 8,
    imageUrl: "/images/kanji/110_wake_up_3d.png",
    onyomi: "キ",
    kunyomi: "お・きる、お・こす",
    meaning: "Thức dậy / Khởi",
    sinoVietnamese: "Khởi",
    radicals: "走 (tẩu) + 己 (kỷ)",
    mnemonic: "Chạy (走) bộ giúp bản thân (己) thức dậy (起) tỉnh táo.",
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
    lesson: 6,
    imageUrl: "/images/kanji/111_buy_3d.png",
    onyomi: "バイ",
    kunyomi: "か・う",
    meaning: "Mua",
    sinoVietnamese: "Mãi",
    radicals: "罒 (võng) + 貝 (bối/tiền)",
    mnemonic: "Mắt (罒) nhắm vào tiền (貝) để đi mua (買) sắm.",
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
    lesson: 7,
    imageUrl: "/images/kanji/112_sell_3d.png",
    onyomi: "バイ",
    kunyomi: "う・る",
    meaning: "Bán",
    sinoVietnamese: "Mại",
    radicals: "士 (sĩ) + 冖 (mịch) + 儿 (nhân/đi)",
    mnemonic: "Sĩ tử (士) đội mũ (冖) đi (儿) bán hàng.",
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
    lesson: 6,
    imageUrl: "/images/kanji/113_read_3d.png",
    onyomi: "ドク",
    kunyomi: "よ・む",
    meaning: "Đọc",
    sinoVietnamese: "Độc",
    radicals: "言 (ngôn) + 売 (mại)",
    mnemonic: "Nói (言) về việc buôn bán (売) là đọc kinh doanh.",
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
      },
      {
        japanese: "読解",
        romaji: "Dokkai",
        vietnamese: "Đọc hiểu"
      }
    ]
  },
  {
    id: 114,
    kanji: "書",
    lesson: 6,
    imageUrl: "/images/kanji/114_write_3d.png",
    onyomi: "ショ",
    kunyomi: "か・く",
    meaning: "Viết",
    sinoVietnamese: "Thư",
    radicals: "聿 (duật/bút) + 日 (nhật)",
    mnemonic: "Tay cầm bút (聿) viết cả ngày (日).",
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
    lesson: 8,
    imageUrl: "/images/kanji/115_diligent_3d.png",
    onyomi: "ベン",
    kunyomi: "つと・める",
    meaning: "Cố gắng / Miễn",
    sinoVietnamese: "Miễn",
    radicals: "免 (miễn) + 力 (lực)",
    mnemonic: "Dùng sức lực (力) để tránh (免) tai họa (hoặc cố gắng).",
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
    lesson: 8,
    imageUrl: "/images/kanji/116_strong_3d.png",
    onyomi: "キョウ、ゴウ",
    kunyomi: "つよ・い",
    meaning: "Mạnh",
    sinoVietnamese: "Cường",
    radicals: "弓 (cung) + 厶 (khư) + 虫 (trùng)",
    mnemonic: "Cây cung (弓) bắn con trùng (虫) riêng tư (厶) rất mạnh.",
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
    lesson: 8,
    imageUrl: "/images/kanji/117_bow_3d.png",
    onyomi: "キュウ",
    kunyomi: "ゆみ",
    meaning: "Cung (tên)",
    sinoVietnamese: "Cung",
    radicals: "弓 (cung)",
    mnemonic: "Hình cây cung.",
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
    lesson: 8,
    imageUrl: "/images/kanji/118_insect_3d.png",
    onyomi: "チュウ",
    kunyomi: "むし",
    meaning: "Côn trùng",
    sinoVietnamese: "Trùng",
    radicals: "虫 (trùng)",
    mnemonic: "Hình con sâu.",
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
    lesson: 8,
    imageUrl: "/images/kanji/119_hold_3d.png",
    onyomi: "ジ",
    kunyomi: "も・つ",
    meaning: "Cầm / Mang",
    sinoVietnamese: "Trì",
    radicals: "扌 (thủ) + 寺 (tự)",
    mnemonic: "Tay (扌) cầm đồ đi lên chùa (寺).",
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
    lesson: 8,
    imageUrl: "/images/kanji/120_name_3d.png",
    onyomi: "メイ、ミョウ",
    kunyomi: "な",
    meaning: "Tên / Danh",
    sinoVietnamese: "Danh",
    radicals: "夕 (tịch) + 口 (khẩu)",
    mnemonic: "Buổi tối (夕) tối tăm phải dùng miệng (口) xưng tên.",
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
    lesson: 8,
    imageUrl: "/images/kanji/121_language_3d.png",
    onyomi: "ゴ",
    kunyomi: "かた・る",
    meaning: "Ngôn ngữ / Kể",
    sinoVietnamese: "Ngữ",
    radicals: "言 (ngôn) + 吾 (ngô)",
    mnemonic: "Lời nói (言) của bản thân (吾) là ngôn ngữ.",
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
    lesson: 10,
    imageUrl: "/images/kanji/122_spring_3d.png",
    onyomi: "シュン",
    kunyomi: "はる",
    meaning: "Mùa xuân",
    sinoVietnamese: "Xuân",
    radicals: "三 (tam) + 人 (nhân) + 日 (nhật)",
    mnemonic: "Ba (三) người (人) đi chơi ngày (日) xuân.",
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
    lesson: 10,
    imageUrl: "/images/kanji/123_summer_3d.png",
    onyomi: "カ、ゲ",
    kunyomi: "なつ",
    meaning: "Mùa hạ",
    sinoVietnamese: "Hạ",
    radicals: "一 (nhất) + 自 (tự) + 夂 (truy)",
    mnemonic: "Một (一) mình (自) đuổi theo (夂) mùa hạ.",
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
    lesson: 10,
    imageUrl: "/images/kanji/124_autumn_3d.png",
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
    lesson: 10,
    imageUrl: "/images/kanji/125_winter_3d.png",
    onyomi: "トウ",
    kunyomi: "ふゆ",
    meaning: "Mùa đông",
    sinoVietnamese: "Đông",
    radicals: "夂 (truy) + 冫(băng)",
    mnemonic: "Đuổi theo (夂) băng tuyết (冫) là mùa đông.",
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
    lesson: 6,
    imageUrl: "/images/kanji/126_morning_3d.png",
    onyomi: "チョウ",
    kunyomi: "あさ",
    meaning: "Buổi sáng",
    sinoVietnamese: "Triều",
    radicals: "十 (thập) + 早 (tảo) + 月 (nguyệt)",
    mnemonic: "Mười (十) ngày sáng sớm (早) trăng (月) chưa lặn là buổi sáng.",
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
    lesson: 6,
    imageUrl: "/images/kanji/127_noon_3d.png",
    onyomi: "チュウ",
    kunyomi: "ひる",
    meaning: "Buổi trưa",
    sinoVietnamese: "Trú",
    radicals: "尺 (xích) + 旦 (đán)",
    mnemonic: "Thước đo (尺) thời gian buổi sớm (旦) đến trưa.",
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
    lesson: 8,
    imageUrl: "/images/kanji/128_evening_3d.png",
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
    lesson: 9,
    imageUrl: "/images/kanji/129_direction_3d.png",
    onyomi: "ホウ",
    kunyomi: "かた",
    meaning: "Phương, hướng, vị",
    sinoVietnamese: "Phương",
    radicals: "方 (phương)",
    mnemonic: "Hình người đang múa quay về các hướng.",
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
    lesson: 7,
    imageUrl: "/images/kanji/130_night_3d.png",
    onyomi: "バン",
    kunyomi: "",
    meaning: "Buổi tối",
    sinoVietnamese: "Vãn",
    radicals: "日 (nhật) + 免 (miễn)",
    mnemonic: "Mặt trời (日) lặn, miễn (免) làm việc là buổi tối.",
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
    lesson: 7,
    imageUrl: "/images/kanji/131_night_3d.png",
    onyomi: "ヤ",
    kunyomi: "よる、よ",
    meaning: "Đêm, Buổi tối",
    sinoVietnamese: "Dạ",
    radicals: "亠 (đầu) + 亻 (nhân) + 夕 (tịch) + 夂 (truy)",
    mnemonic: "Người (亻) đội mũ (亠) đi trong đêm (夕) đuổi theo (夂).",
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
    lesson: 9,
    imageUrl: "/images/kanji/132_heart_3d.png",
    onyomi: "シン",
    kunyomi: "こころ",
    meaning: "Tim, Tấm lòng",
    sinoVietnamese: "Tâm",
    radicals: "心 (tâm)",
    mnemonic: "Hình trái tim.",
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
    lesson: 4,
    imageUrl: "/images/kanji/133_hand_3d.png",
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
    lesson: 4,
    imageUrl: "/images/kanji/134_foot_3d.png",
    onyomi: "ソク",
    kunyomi: "あし、た・りる",
    meaning: "Chân, Đủ",
    sinoVietnamese: "Túc",
    radicals: "口 (khẩu) + 止 (chỉ)",
    mnemonic: "Miệng (口) nói chân dừng (止) lại.",
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
    lesson: 3,
    imageUrl: "/images/kanji/135_body_3d.png",
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
    lesson: 9,
    imageUrl: "/images/kanji/136_neck_3d.png",
    onyomi: "シュ",
    kunyomi: "くび",
    meaning: "Cổ",
    sinoVietnamese: "Thủ",
    radicals: "首 (thủ)",
    mnemonic: "Đầu con thú có sừng, mắt, mũi.",
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
    lesson: 3,
    imageUrl: "/images/kanji/137_small_forest_3d.png",
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
    lesson: 4,
    imageUrl: "/images/kanji/138_forest_3d.png",
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
    lesson: 15,
    imageUrl: "/images/kanji/139_sky_empty_3d.png",
    onyomi: "クウ",
    kunyomi: "そら、あ・く、から",
    meaning: "Bầu trời, Trống rỗng",
    sinoVietnamese: "Không",
    radicals: "穴 (huyệt) + 工 (công)",
    mnemonic: "Cái hang (穴) do thợ (工) đào thì rỗng không.",
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
    lesson: 9,
    imageUrl: "/images/kanji/140_heaven_3d.png",
    onyomi: "テン",
    kunyomi: "あま",
    meaning: "Trời, Thiên",
    sinoVietnamese: "Thiên",
    radicals: "一 (nhất) + 大 (đại)",
    mnemonic: "Trên (一) to (大) nhất là trời.",
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
    lesson: 9,
    imageUrl: "/images/kanji/141_spirit_3d.png",
    onyomi: "キ",
    kunyomi: "",
    meaning: "Khí, Tinh thần",
    sinoVietnamese: "Khí",
    radicals: "气 (khí) + メ (mễ)",
    mnemonic: "Hơi nước (气) bốc lên từ gạo (メ).",
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
    lesson: 4,
    imageUrl: "/images/kanji/142_rain_3d.png",
    onyomi: "ウ",
    kunyomi: "あめ",
    meaning: "Mưa",
    sinoVietnamese: "Vũ",
    radicals: "雨 (vũ)",
    mnemonic: "Mây che trời, hạt mưa rơi.",
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
    lesson: 9,
    imageUrl: "/images/kanji/143_snow_3d.png",
    onyomi: "セツ",
    kunyomi: "ゆき",
    meaning: "Tuyết",
    sinoVietnamese: "Tuyết",
    radicals: "雨 (vũ) + ヨ (kệ/chổi)",
    mnemonic: "Mưa (雨) rơi xuống đọng trên kệ (ヨ) là tuyết.",
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
    lesson: 9,
    imageUrl: "/images/kanji/144_wind_3d.png",
    onyomi: "フウ",
    kunyomi: "かぜ",
    meaning: "Gió, Phong cách",
    sinoVietnamese: "Phong",
    radicals: "几 (kỷ) + 虫 (trùng)",
    mnemonic: "Cơn gió thổi bay côn trùng (虫) vào trong ghế (几).",
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
    lesson: 4,
    imageUrl: "/images/kanji/145_flower_3d.png",
    onyomi: "カ",
    kunyomi: "はな",
    meaning: "Hoa",
    sinoVietnamese: "Hoa",
    radicals: "艹 (thảo) + 化 (hóa)",
    mnemonic: "Cỏ (艹) biến hóa (化) thành hoa.",
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
    lesson: 4,
    imageUrl: "/images/kanji/146_stone_3d.png",
    onyomi: "セキ",
    kunyomi: "いし",
    meaning: "Đá",
    sinoVietnamese: "Thạch",
    radicals: "石 (thạch)",
    mnemonic: "Hòn đá rơi từ vách núi.",
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
    lesson: 4,
    imageUrl: "/images/kanji/147_bamboo_3d.png",
    onyomi: "チク",
    kunyomi: "たけ",
    meaning: "Tre, Trúc",
    sinoVietnamese: "Trúc",
    radicals: "竹 (trúc)",
    mnemonic: "Cây trúc.",
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
    lesson: 10,
    imageUrl: "/images/kanji/148_dog_3d.png",
    onyomi: "ケン",
    kunyomi: "いぬ",
    meaning: "Chó",
    sinoVietnamese: "Khuyển",
    radicals: "犬 (khuyển)",
    mnemonic: "Đại (大) thêm một nét phẩy (,) giống cái tai cụp của chó.",
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
    lesson: 4,
    imageUrl: "/images/kanji/149_ear_3d.png",
    onyomi: "ジ",
    kunyomi: "みみ",
    meaning: "Tai",
    sinoVietnamese: "Nhĩ",
    radicals: "耳 (nhĩ)",
    mnemonic: "Hình cái tai.",
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
    lesson: 4,
    imageUrl: "/images/kanji/150_eye_3d.png",
    onyomi: "モク",
    kunyomi: "め",
    meaning: "Mắt, Mục",
    sinoVietnamese: "Mục",
    radicals: "目 (mục)",
    mnemonic: "Hình con mắt.",
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
    lesson: 10,
    imageUrl: "/images/kanji/151_face_3d.png",
    onyomi: "ガン",
    kunyomi: "かお",
    meaning: "Khuôn mặt",
    sinoVietnamese: "Nhan",
    radicals: "彦 (ngạn) + 頁 (hiệt)",
    mnemonic: "Diện mạo (彦) cái đầu (頁) là khuôn mặt.",

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
    lesson: 10,
    imageUrl: "/images/kanji/152_head_3d.png",
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
  },
  {
    id: 153,
    kanji: "牛",
    lesson: 5,
    imageUrl: "/images/kanji/153_cow_3d.png",
    onyomi: "ギュウ",
    kunyomi: "うし",
    meaning: "Bò",
    sinoVietnamese: "Ngưu",
    radicals: "牛 (ngưu)",
    mnemonic: "Hình đầu con bò.",
    examples: [
      {
        japanese: "牛",
        romaji: "Ushi",
        vietnamese: "Con bò"
      },
      {
        japanese: "牛乳",
        romaji: "Gyuunyuu",
        vietnamese: "Sữa bò"
      },
      {
        japanese: "牛肉",
        romaji: "Gyuuniku",
        vietnamese: "Thịt bò"
      },
      {
        japanese: "子牛",
        romaji: "Koushi",
        vietnamese: "Bê"
      },
      {
        japanese: "水牛",
        romaji: "Suigyuu",
        vietnamese: "Trâu"
      }
    ]
  },
  {
    id: 154,
    kanji: "鳥",
    lesson: 5,
    imageUrl: "/images/kanji/154_bird_3d.png",
    onyomi: "チョウ",
    kunyomi: "とり",
    meaning: "Chim",
    sinoVietnamese: "Điểu",
    radicals: "鳥 (điểu)",
    mnemonic: "Hình con chim.",
    examples: [
      {
        japanese: "鳥",
        romaji: "Tori",
        vietnamese: "Con chim"
      },
      {
        japanese: "小鳥",
        romaji: "Kotori",
        vietnamese: "Chim nhỏ"
      },
      {
        japanese: "焼き鳥",
        romaji: "Yakitori",
        vietnamese: "Thịt gà nướng"
      },
      {
        japanese: "白鳥",
        romaji: "Hakuchou",
        vietnamese: "Thiên nga"
      },
      {
        japanese: "野鳥",
        romaji: "Yachou",
        vietnamese: "Chim hoang dã"
      }
    ]
  },
  {
    id: 155,
    kanji: "魚",
    lesson: 5,
    imageUrl: "/images/kanji/155_fish_3d.png",
    onyomi: "ギョ",
    kunyomi: "さかな、うお",
    meaning: "Cá",
    sinoVietnamese: "Ngư",
    radicals: "魚 (ngư)",
    mnemonic: "Hình con cá.",
    examples: [
      {
        japanese: "魚",
        romaji: "Sakana",
        vietnamese: "Cá"
      },
      {
        japanese: "魚屋",
        romaji: "Sakanaya",
        vietnamese: "Cửa hàng cá"
      },
      {
        japanese: "金魚",
        romaji: "Kingyo",
        vietnamese: "Cá vàng"
      },
      {
        japanese: "人魚",
        romaji: "Ningyo",
        vietnamese: "Người cá"
      },
      {
        japanese: "魚釣り",
        romaji: "Sakanatsuri",
        vietnamese: "Câu cá"
      }
    ]
  },
  {
    id: 156,
    kanji: "肉",
    lesson: 5,
    imageUrl: "/images/kanji/156_meat_3d.png",
    onyomi: "ニク",
    kunyomi: "",
    meaning: "Thịt",
    sinoVietnamese: "Nhục",
    radicals: "内 (nội) + 人 (nhân)",
    mnemonic: "Bên trong (内) cơ thể người (人) là thịt.",
    examples: [
      {
        japanese: "肉",
        romaji: "Niku",
        vietnamese: "Thịt"
      },
      {
        japanese: "豚肉",
        romaji: "Butaniku",
        vietnamese: "Thịt lợn"
      },
      {
        japanese: "鶏肉",
        romaji: "Toriniku",
        vietnamese: "Thịt gà"
      },
      {
        japanese: "焼肉",
        romaji: "Yakiniku",
        vietnamese: "Thịt nướng"
      },
      {
        japanese: "肉屋",
        romaji: "Nikuya",
        vietnamese: "Cửa hàng thịt"
      }
    ]
  },
  {
    id: 157,
    kanji: "飯",
    lesson: 9,
    imageUrl: "/images/kanji/157_meal_3d.png",
    onyomi: "ハン",
    kunyomi: "めし",
    meaning: "Cơm, Bữa ăn",
    sinoVietnamese: "Phạn",
    radicals: "飠(thực) + 反 (phản)",
    mnemonic: "Ăn (飠) cơm xong thì phản (反) đối làm việc.",

    examples: [
      {
        japanese: "ご飯",
        romaji: "Gohan",
        vietnamese: "Cơm, Bữa ăn"
      },
      {
        japanese: "朝ご飯",
        romaji: "Asagohan",
        vietnamese: "Bữa sáng"
      },
      {
        japanese: "昼ご飯",
        romaji: "Hirugohan",
        vietnamese: "Bữa trưa"
      },
      {
        japanese: "夕飯",
        romaji: "Yuuhan",
        vietnamese: "Bữa tối"
      },
      {
        japanese: "炊飯器",
        romaji: "Suihanki",
        vietnamese: "Nồi cơm điện"
      }
    ]
  },
  {
    id: 158,
    kanji: "茶",
    lesson: 4,
    imageUrl: "/images/kanji/158_tea_3d.png",
    onyomi: "チャ、サ",
    kunyomi: "",
    meaning: "Trà",
    sinoVietnamese: "Trà",
    examples: [
      {
        japanese: "お茶",
        romaji: "Ocha",
        vietnamese: "Trà"
      },
      {
        japanese: "茶色",
        romaji: "Chairo",
        vietnamese: "Màu nâu"
      },
      {
        japanese: "紅茶",
        romaji: "Koucha",
        vietnamese: "Hồng trà"
      },
      {
        japanese: "喫茶店",
        romaji: "Kissaten",
        vietnamese: "Quán giải khát"
      },
      {
        japanese: "茶道",
        romaji: "Sadou",
        vietnamese: "Trà đạo"
      }
    ]
  },
  {
    id: 159,
    kanji: "酒",
    lesson: 16,
    imageUrl: "/images/kanji/159_alcohol_3d.png",
    onyomi: "シュ",
    kunyomi: "さけ、さか",
    meaning: "Rượu",
    sinoVietnamese: "Tửu",
    radicals: "氵(thủy) + 酉 (dậu)",
    mnemonic: "Nước (氵) ủ trong bình (酉) thành rượu.",

    examples: [
      {
        japanese: "お酒",
        romaji: "Osake",
        vietnamese: "Rượu"
      },
      {
        japanese: "酒屋",
        romaji: "Sakaya",
        vietnamese: "Cửa hàng rượu"
      },
      {
        japanese: "日本酒",
        romaji: "Nihonshu",
        vietnamese: "Rượu Nhật"
      },
      {
        japanese: "居酒屋",
        romaji: "Izakaya",
        vietnamese: "Quán rượu"
      },
      {
        japanese: "飲酒運転",
        romaji: "Inshuunten",
        vietnamese: "Lái xe khi uống rượu"
      }
    ]
  },
  {
    id: 160,
    kanji: "料",
    lesson: 16,
    imageUrl: "/images/kanji/160_ingredients_3d.png",
    onyomi: "リョウ",
    kunyomi: "",
    meaning: "Nguyên liệu, Phí",
    sinoVietnamese: "Liệu",
    examples: [
      {
        japanese: "料理",
        romaji: "Ryouri",
        vietnamese: "Món ăn, Nấu ăn"
      },
      {
        japanese: "料金",
        romaji: "Ryoukin",
        vietnamese: "Chi phí"
      },
      {
        japanese: "材料",
        romaji: "Zairyou",
        vietnamese: "Nguyên liệu"
      },
      {
        japanese: "給料",
        romaji: "Kyuuryou",
        vietnamese: "Tiền lương"
      },
      {
        japanese: "授業料",
        romaji: "Jugyouryou",
        vietnamese: "Học phí"
      }
    ]
  },
  {
    id: 161,
    kanji: "理",
    lesson: 16,
    imageUrl: "/images/kanji/161_reason_3d.png",
    onyomi: "リ",
    kunyomi: "",
    meaning: "Lý, Lý do",
    sinoVietnamese: "Lý",
    radicals: "王 (vương/ngọc) + 里 (lý)",
    mnemonic: "Ông vua (王) quản lý (理) ngôi làng (里).",
    examples: [
      {
        japanese: "料理",
        romaji: "Ryouri",
        vietnamese: "Món ăn, Nấu ăn"
      },
      {
        japanese: "理由",
        romaji: "Riyuu",
        vietnamese: "Lý do"
      },
      {
        japanese: "無理な",
        romaji: "Muri na",
        vietnamese: "Vô lý, Quá sức"
      },
      {
        japanese: "修理",
        romaji: "Shuuri",
        vietnamese: "Sửa chữa"
      },
      {
        japanese: "理解",
        romaji: "Rikai",
        vietnamese: "Hiểu"
      }
    ]
  },
  {
    id: 162,
    kanji: "反",
    lesson: 11,
    imageUrl: "/images/kanji/162_opposite_3d.png",
    onyomi: "ハン",
    kunyomi: "そ・る",
    meaning: "Phản, Cong",
    sinoVietnamese: "Phản",
    radicals: "厂 (hán) + 又 (hựu)",
    mnemonic: "Sườn núi (厂) lại (又) phản chiếu ánh sáng.",
    examples: [
      {
        japanese: "反対",
        romaji: "Hantai",
        vietnamese: "Phản đối, Ngược lại"
      },
      {
        japanese: "反省",
        romaji: "Hansei",
        vietnamese: "Kiểm điểm"
      },
      {
        japanese: "違反",
        romaji: "Ihan",
        vietnamese: "Vi phạm"
      },
      {
        japanese: "反応",
        romaji: "Hannou",
        vietnamese: "Phản ứng"
      },
      {
        japanese: "反物",
        romaji: "Tanmono",
        vietnamese: "Vải may kimono"
      }
    ]
  },
  {
    id: 163,
    kanji: "物",
    lesson: 5,
    imageUrl: "/images/kanji/163_object_3d.png",
    onyomi: "ブツ、モツ",
    kunyomi: "もの",
    meaning: "Vật, Đồ vật",
    sinoVietnamese: "Vật",
    radicals: "牛 (ngưu) + 勿 (vật)",
    mnemonic: "Con bò (牛) không được (勿) coi là đồ vật.",
    examples: [
      {
        japanese: "買い物",
        romaji: "Kaimono",
        vietnamese: "Mua sắm"
      },
      {
        japanese: "荷物",
        romaji: "Nimotsu",
        vietnamese: "Hành lý"
      },
      {
        japanese: "食べ物",
        romaji: "Tabemono",
        vietnamese: "Đồ ăn"
      },
      {
        japanese: "動物",
        romaji: "Doubutsu",
        vietnamese: "Động vật"
      },
      {
        japanese: "建物",
        romaji: "Tatemono",
        vietnamese: "Tòa nhà"
      }
    ]
  },
  {
    id: 164,
    kanji: "野",
    lesson: 16,
    imageUrl: "/images/kanji/164_field_3d.png",
    onyomi: "ヤ",
    kunyomi: "の",
    meaning: "Cánh đồng, Dã",
    sinoVietnamese: "Dã",
    radicals: "里 (lý) + 予 (dư)",
    mnemonic: "Ở làng (里) dự (予) tính làm cánh đồng hoang.",
    examples: [
      {
        japanese: "野菜",
        romaji: "Yasai",
        vietnamese: "Rau"
      },
      {
        japanese: "野球",
        romaji: "Yakyuu",
        vietnamese: "Bóng chày"
      },
      {
        japanese: "野原",
        romaji: "Nohara",
        vietnamese: "Cánh đồng"
      },
      {
        japanese: "分野",
        romaji: "Bunya",
        vietnamese: "Lĩnh vực"
      },
      {
        japanese: "野鳥",
        romaji: "Yachou",
        vietnamese: "Chim hoang dã"
      }
    ]
  },
  {
    id: 165,
    kanji: "菜",
    lesson: 16,
    imageUrl: "/images/kanji/165_vegetable_3d.png",
    onyomi: "サイ",
    kunyomi: "な",
    meaning: "Rau",
    sinoVietnamese: "Thái",
    radicals: "艹 (thảo) + 采 (hái)",
    mnemonic: "Hái (采) cỏ (艹) về làm rau ăn.",
    examples: [
      {
        japanese: "野菜",
        romaji: "Yasai",
        vietnamese: "Rau"
      },
      {
        japanese: "菜食主義",
        romaji: "Saishokushugi",
        vietnamese: "Ăn chay"
      },
      {
        japanese: "菜園",
        romaji: "Saien",
        vietnamese: "Vườn rau"
      },
      {
        japanese: "白菜",
        romaji: "Hakusai",
        vietnamese: "Cải thảo"
      },
      {
        japanese: "菜の花",
        romaji: "Nanohana",
        vietnamese: "Hoa cải dầu"
      }
    ]
  },
  {
    id: 166,
    kanji: "味",
    lesson: 10,
    imageUrl: "/images/kanji/166_taste_3d.png",
    onyomi: "ミ",
    kunyomi: "あじ、あじ・わう",
    meaning: "Vị, Mùi vị",
    sinoVietnamese: "Vị",
    radicals: "口 (khẩu) + 未 (vị)",
    mnemonic: "Miệng (口) chưa (未) nếm thì chưa biết vị.",
    examples: [
      {
        japanese: "味",
        romaji: "Aji",
        vietnamese: "Vị"
      },
      {
        japanese: "意味",
        romaji: "Imi",
        vietnamese: "Ý nghĩa"
      },
      {
        japanese: "趣味",
        romaji: "Shumi",
        vietnamese: "Sở thích"
      },
      {
        japanese: "興味",
        romaji: "Kyoumi",
        vietnamese: "Hứng thú"
      },
      {
        japanese: "味噌汁",
        romaji: "Misoshiru",
        vietnamese: "Súp miso"
      }
    ]
  },
  {
    id: 167,
    kanji: "悪",
    lesson: 11,
    imageUrl: "/images/kanji/167_bad_3d.png",
    onyomi: "アク、オ",
    kunyomi: "わる・い",
    meaning: "Xấu, Ác",
    sinoVietnamese: "Ác",
    radicals: "亜 (á) + 心 (tâm)",
    mnemonic: "Tâm (心) địa xấu xa (亜) là độc ác.",
    examples: [
      {
        japanese: "悪い",
        romaji: "Warui",
        vietnamese: "Xấu, tồi"
      },
      {
        japanese: "悪口",
        romaji: "Waruguchi",
        vietnamese: "Nói xấu"
      },
      {
        japanese: "意地悪な",
        romaji: "Ijiwaru na",
        vietnamese: "Tâm địa xấu"
      },
      {
        japanese: "最悪",
        romaji: "Saiaku",
        vietnamese: "Tệ nhất"
      },
      {
        japanese: "悪化",
        romaji: "Akka",
        vietnamese: "Xấu đi"
      }
    ]
  },
  {
    id: 168,
    kanji: "作",
    lesson: 11,
    imageUrl: "/images/kanji/168_make_3d.png",
    onyomi: "サク、サ",
    kunyomi: "つく・る",
    meaning: "Làm, Chế tạo",
    sinoVietnamese: "Tác",
    radicals: "亻 (nhân) + 乍 (tạc)",
    mnemonic: "Người (亻) bỗng nhiên (乍) chế tác ra tác phẩm.",
    examples: [
      {
        japanese: "作ります",
        romaji: "Tsukurimasu",
        vietnamese: "Làm, Chế tạo"
      },
      {
        japanese: "作文",
        romaji: "Sakubun",
        vietnamese: "Bài văn"
      },
      {
        japanese: "作品",
        romaji: "Sakuhin",
        vietnamese: "Tác phẩm"
      },
      {
        japanese: "動作",
        romaji: "Dousa",
        vietnamese: "Động tác"
      },
      {
        japanese: "作業",
        romaji: "Sagyou",
        vietnamese: "Công việc"
      }
    ]
  },
  {
    id: 169,
    kanji: "音",
    lesson: 7,
    imageUrl: "/images/kanji/169_sound_3d.png",
    onyomi: "オン、イン",
    kunyomi: "おと、ね",
    meaning: "Âm thanh",
    sinoVietnamese: "Âm",
    radicals: "立 (lập) + 日 (nhật)",
    mnemonic: "Đứng (立) trên mặt trời (日) hét ra âm thanh.",
    examples: [
      {
        japanese: "音",
        romaji: "Oto",
        vietnamese: "Âm thanh"
      },
      {
        japanese: "音楽",
        romaji: "Ongaku",
        vietnamese: "Âm nhạc"
      },
      {
        japanese: "発音",
        romaji: "Hatsuon",
        vietnamese: "Phát âm"
      },
      {
        japanese: "本音",
        romaji: "Honne",
        vietnamese: "Ý định thực sự"
      },
      {
        japanese: "録音",
        romaji: "Rokuon",
        vietnamese: "Ghi âm"
      }
    ]
  },
  {
    id: 170,
    kanji: "楽",
    lesson: 7,
    imageUrl: "/images/kanji/170_music_fun_3d.png",
    onyomi: "ガク、ラク",
    kunyomi: "たの・しい",
    meaning: "Vui, Nhạc",
    sinoVietnamese: "Lạc, Nhạc",
    radicals: "白 (bạch) + 木 (mộc) + 幺 (yêu)",
    mnemonic: "Cây (木) đàn màu trắng (白) phát ra nhạc vui vẻ.",
    examples: [
      {
        japanese: "楽しい",
        romaji: "Tanoshii",
        vietnamese: "Vui vẻ"
      },
      {
        japanese: "音楽",
        romaji: "Ongaku",
        vietnamese: "Âm nhạc"
      },
      {
        japanese: "楽な",
        romaji: "Raku na",
        vietnamese: "Thoải mái, dễ dàng"
      },
      {
        japanese: "娯楽",
        romaji: "Goraku",
        vietnamese: "Giải trí"
      },
      {
        japanese: "楽器",
        romaji: "Gakki",
        vietnamese: "Nhạc cụ"
      }
    ]
  },
  {
    id: 171,
    kanji: "歌",
    lesson: 7,
    imageUrl: "/images/kanji/171_song_3d.png",
    onyomi: "カ",
    kunyomi: "うた、うた・う",
    meaning: "Hát, Bài hát",
    sinoVietnamese: "Ca",
    radicals: "可 (khả) + 欠 (khuyết)",
    mnemonic: "Có thể (可) ca hát khi thiếu (欠) tiền.",
    examples: [
      {
        japanese: "歌",
        romaji: "Uta",
        vietnamese: "Bài hát"
      },
      {
        japanese: "歌います",
        romaji: "Utaimasu",
        vietnamese: "Hát"
      },
      {
        japanese: "歌手",
        romaji: "Kashu",
        vietnamese: "Ca sĩ"
      },
      {
        japanese: "歌詞",
        romaji: "Kashi",
        vietnamese: "Lời bài hát"
      },
      {
        japanese: "国歌",
        romaji: "Kokka",
        vietnamese: "Quốc ca"
      }
    ]
  },
  {
    id: 172,
    kanji: "自",
    lesson: 12,
    imageUrl: "/images/kanji/172_self_3d.png",
    onyomi: "ジ、シ",
    kunyomi: "みずか・ら",
    meaning: "Tự, Bản thân",
    sinoVietnamese: "Tự",
    radicals: "目 (mục)",
    mnemonic: "Hình cái mũi (tự chỉ vào mình).",
    examples: [
      {
        japanese: "自分",
        romaji: "Jibun",
        vietnamese: "Bản thân"
      },
      {
        japanese: "自動車",
        romaji: "Jidousha",
        vietnamese: "Xe ô tô"
      },
      {
        japanese: "自転車",
        romaji: "Jitensha",
        vietnamese: "Xe đạp"
      },
      {
        japanese: "自由",
        romaji: "Jiyuu",
        vietnamese: "Tự do"
      },
      {
        japanese: "自信",
        romaji: "Jishin",
        vietnamese: "Tự tin"
      }
    ]
  },
  {
    id: 173,
    kanji: "転",
    lesson: 11,
    imageUrl: "/images/kanji/173_turn_3d.png",
    onyomi: "テン",
    kunyomi: "ころ・ぶ",
    meaning: "Chuyển, Lăn",
    sinoVietnamese: "Chuyển",
    radicals: "車 (xa) + 云 (vân)",
    mnemonic: "Xe (車) chuyển động như mây (云) bay.",
    examples: [
      {
        japanese: "自転車",
        romaji: "Jitensha",
        vietnamese: "Xe đạp"
      },
      {
        japanese: "運転します",
        romaji: "Unten shimasu",
        vietnamese: "Lái xe"
      },
      {
        japanese: "転びます",
        romaji: "Korobimasu",
        vietnamese: "Ngã"
      },
      {
        japanese: "回転",
        romaji: "Kaiten",
        vietnamese: "Xoay chuyển"
      },
      {
        japanese: "転職",
        romaji: "Tenshoku",
        vietnamese: "Chuyển việc"
      }
    ]
  },
  {
    id: 174,
    kanji: "乗",
    lesson: 11,
    imageUrl: "/images/kanji/174_ride_3d.png",
    onyomi: "ジョウ",
    kunyomi: "の・る、の・せる",
    meaning: "Lên xe, Thừa",
    sinoVietnamese: "Thừa",
    radicals: "禾 (hòa) + 北 (bắc)",
    mnemonic: "Cây lúa (禾) ở phương Bắc (北) dùng để lên xe.",
    examples: [
      {
        japanese: "乗ります",
        romaji: "Norimasu",
        vietnamese: "Lên xe"
      },
      {
        japanese: "乗り物",
        romaji: "Norimono",
        vietnamese: "Phương tiện đi lại"
      },
      {
        japanese: "乗客",
        romaji: "Joukyaku",
        vietnamese: "Hành khách"
      },
      {
        japanese: "乗車券",
        romaji: "Joushaken",
        vietnamese: "Vé xe"
      },
      {
        japanese: "タクシー乗り場",
        romaji: "Takushii noriba",
        vietnamese: "Điểm đón taxi"
      }
    ]
  },
  {
    id: 175,
    kanji: "写",
    lesson: 11,
    imageUrl: "/images/kanji/175_copy_3d.png",
    onyomi: "シャ",
    kunyomi: "うつ・す、うつ・る",
    meaning: "Tả, Sao chép, Chụp",
    sinoVietnamese: "Tả",
    radicals: "冖 (mịch) + 与 (dữ)",
    mnemonic: "Đội mũ (冖) cùng (与) nhau miêu tả bức tranh.",
    examples: [
      {
        japanese: "写真",
        romaji: "Shashin",
        vietnamese: "Ảnh"
      },
      {
        japanese: "写します",
        romaji: "Utsushimasu",
        vietnamese: "Chụp, Chép"
      },
      {
        japanese: "写生",
        romaji: "Shasei",
        vietnamese: "Vẽ phác họa"
      },
      {
        japanese: "複写",
        romaji: "Fukusha",
        vietnamese: "Sao chép"
      },
      {
        japanese: "描写",
        romaji: "Byousha",
        vietnamese: "Miêu tả"
      }
    ]
  },
  {
    id: 176,
    kanji: "真",
    lesson: 11,
    imageUrl: "/images/kanji/176_true_3d.png",
    onyomi: "シン",
    kunyomi: "ま",
    meaning: "Chân, Thật",
    sinoVietnamese: "Chân",
    radicals: "十 (thập) + 目 (mục) + Ｌ (ẩn)",
    mnemonic: "Mười (十) con mắt (目) nhìn sự thật.",
    examples: [
      {
        japanese: "写真",
        romaji: "Shashin",
        vietnamese: "Ảnh"
      },
      {
        japanese: "真ん中",
        romaji: "Mannaka",
        vietnamese: "Chính giữa"
      },
      {
        japanese: "真っ白",
        romaji: "Masshiro",
        vietnamese: "Trắng tinh"
      },
      {
        japanese: "真実",
        romaji: "Shinjitsu",
        vietnamese: "Sự thật"
      },
      {
        japanese: "本気",
        romaji: "Honki",
        vietnamese: "Nghiêm túc, thật lòng"
      }
    ]
  },
  {
    id: 177,
    kanji: "台",
    lesson: 12,
    imageUrl: "/images/kanji/177_platform_3d.png",
    onyomi: "ダイ、タイ",
    kunyomi: "",
    meaning: "Đài, Bệ",
    sinoVietnamese: "Đài",
    radicals: "ム (khư) + 口 (khẩu)",
    mnemonic: "Miệng (口) nói chuyện riêng (ム) trên bệ đài.",
    examples: [
      {
        japanese: "二台",
        romaji: "Nidai",
        vietnamese: "Hai cái (đếm xe, máy móc)"
      },
      {
        japanese: "台所",
        romaji: "Daidokoro",
        vietnamese: "Nhà bếp"
      },
      {
        japanese: "台風",
        romaji: "Taifuu",
        vietnamese: "Bão"
      },
      {
        japanese: "舞台",
        romaji: "Butai",
        vietnamese: "Sân khấu"
      },
      {
        japanese: "台湾",
        romaji: "Taiwan",
        vietnamese: "Đài Loan"
      }
    ]
  },
  {
    id: 178,
    kanji: "央",
    lesson: 12,
    imageUrl: "/images/kanji/178_center_3d.png",
    onyomi: "オウ",
    kunyomi: "",
    meaning: "Ương, Trung ương",
    sinoVietnamese: "Ương",
    radicals: "大 (đại)",
    mnemonic: "Người to lớn (大) đứng ở trung ương.",
    examples: [
      {
        japanese: "中央",
        romaji: "Chuuou",
        vietnamese: "Trung ương, Trung tâm"
      }
    ]
  },
  {
    id: 179,
    kanji: "映",
    lesson: 11,
    imageUrl: "/images/kanji/179_reflect_3d.png",
    onyomi: "エイ",
    kunyomi: "うつ・る、うつ・す",
    meaning: "Ánh, Chiếu",
    sinoVietnamese: "Ánh",
    radicals: "日 (nhật) + 央 (ương)",
    mnemonic: "Mặt trời (日) chiếu sáng trung ương (央).",
    examples: [
      {
        japanese: "映画",
        romaji: "Eiga",
        vietnamese: "Phim"
      },
      {
        japanese: "映画館",
        romaji: "Eigakan",
        vietnamese: "Rạp chiếu phim"
      },
      {
        japanese: "上映",
        romaji: "Jouei",
        vietnamese: "Trình chiếu"
      },
      {
        japanese: "反映",
        romaji: "Hanei",
        vietnamese: "Phản ánh"
      }
    ]
  },
  {
    id: 180,
    kanji: "画",
    lesson: 28,
    imageUrl: "/images/kanji/180_picture_3d.png",
    onyomi: "ガ、カク",
    kunyomi: "",
    meaning: "Họa, Hoạch",
    sinoVietnamese: "Họa, Hoạch",
    radicals: "一 (nhất) + 田 (điền)",
    mnemonic: "Vẽ (画) một (一) cánh đồng (田).",
    examples: [
      {
        japanese: "映画",
        romaji: "Eiga",
        vietnamese: "Phim"
      },
      {
        japanese: "計画",
        romaji: "Keikaku",
        vietnamese: "Kế hoạch"
      },
      {
        japanese: "画家",
        romaji: "Gaka",
        vietnamese: "Họa sĩ"
      },
      {
        japanese: "漫画",
        romaji: "Manga",
        vietnamese: "Truyện tranh"
      },
      {
        japanese: "画面",
        romaji: "Gamen",
        vietnamese: "Màn hình"
      }
    ]
  },
  {
    id: 181,
    kanji: "羊",
    lesson: 12,
    imageUrl: "/images/kanji/181_sheep_3d.png",
    onyomi: "ヨウ",
    kunyomi: "ひつじ",
    meaning: "Cừu",
    sinoVietnamese: "Dương",
    radicals: "羊 (dương)",
    mnemonic: "Hình con cừu có sừng.",
    examples: [
      {
        japanese: "羊",
        romaji: "Hitsuji",
        vietnamese: "Con cừu"
      },
      {
        japanese: "羊毛",
        romaji: "Youmou",
        vietnamese: "Lông cừu"
      },
      {
        japanese: "山羊",
        romaji: "Yagi",
        vietnamese: "Con dê"
      }
    ]
  },
  {
    id: 182,
    kanji: "洋",
    lesson: 10,
    imageUrl: "/images/kanji/182_ocean_3d.png",
    onyomi: "ヨウ",
    kunyomi: "",
    meaning: "Dương, Đại dương",
    sinoVietnamese: "Dương",
    radicals: "氵(thủy) + 羊 (dương)",
    mnemonic: "Con cừu (羊) bơi qua biển (氵) lớn (đại dương).",
    examples: [
      {
        japanese: "洋服",
        romaji: "Youfuku",
        vietnamese: "Quần áo Tây"
      },
      {
        japanese: "西洋",
        romaji: "Seiyou",
        vietnamese: "Phương Tây"
      },
      {
        japanese: "東洋",
        romaji: "Touyou",
        vietnamese: "Phương Đông"
      },
      {
        japanese: "洋食",
        romaji: "Youshoku",
        vietnamese: "Món ăn Tây"
      },
      {
        japanese: "太平洋",
        romaji: "Taiheiyou",
        vietnamese: "Thái Bình Dương"
      }
    ]
  },
  {
    id: 183,
    kanji: "服",
    lesson: 10,
    imageUrl: "/images/kanji/183_clothes_3d.png",
    onyomi: "フク",
    kunyomi: "",
    meaning: "Phục, Quần áo",
    sinoVietnamese: "Phục",
    radicals: "月 (nguyệt/nhục) + 卩 (tiết/người quỳ) + 又 (hựu)",
    mnemonic: "Người quỳ (卩) dùng tay (又) chỉnh quần áo (月).",
    examples: [
      {
        japanese: "服",
        romaji: "Fuku",
        vietnamese: "Quần áo"
      },
      {
        japanese: "洋服",
        romaji: "Youfuku",
        vietnamese: "Quần áo Tây"
      },
      {
        japanese: "和服",
        romaji: "Wafuku",
        vietnamese: "Quần áo Nhật"
      },
      {
        japanese: "制服",
        romaji: "Seifuku",
        vietnamese: "Đồng phục"
      },
      {
        japanese: "克服",
        romaji: "Kokufuku",
        vietnamese: "Khắc phục"
      }
    ]
  },
  {
    id: 184,
    kanji: "着",
    lesson: 17,
    imageUrl: "/images/kanji/184_wear_3d.png",
    onyomi: "チャク",
    kunyomi: "き・る、つ・く",
    meaning: "Trước, Mặc, Đến",
    sinoVietnamese: "Trước",
    radicals: "羊 (dương) + 目 (mục)",
    mnemonic: "Con cừu (羊) nhìn (目) thấy quần áo đẹp liền mặc vào.",
    examples: [
      {
        japanese: "着ます",
        romaji: "Kimasu",
        vietnamese: "Mặc"
      },
      {
        japanese: "着きます",
        romaji: "Tsukimasu",
        vietnamese: "Đến nơi"
      },
      {
        japanese: "上着",
        romaji: "Uwagi",
        vietnamese: "Áo khoác"
      },
      {
        japanese: "下着",
        romaji: "Shitagi",
        vietnamese: "Đồ lót"
      },
      {
        japanese: "到着",
        romaji: "Touchaku",
        vietnamese: "Đến nơi"
      }
    ]
  },
  {
    id: 185,
    kanji: "家",
    lesson: 21,
    imageUrl: "/images/kanji/185_house_3d.png",
    onyomi: "カ、ケ",
    kunyomi: "いえ、うち",
    meaning: "Nhà",
    sinoVietnamese: "Gia",
    radicals: "宀 (miên) + 豕 (thỉ/lợn)",
    mnemonic: "Con lợn (豕) ở trong nhà (宀).",
    examples: [
      {
        japanese: "家",
        romaji: "Ie",
        vietnamese: "Nhà"
      },
      {
        japanese: "家族",
        romaji: "Kazoku",
        vietnamese: "Gia đình"
      },
      {
        japanese: "家内",
        romaji: "Kanai",
        vietnamese: "Vợ (mình)"
      },
      {
        japanese: "家庭",
        romaji: "Katei",
        vietnamese: "Gia đình, Nhà"
      },
      {
        japanese: "大家",
        romaji: "Ooya",
        vietnamese: "Chủ nhà"
      }
    ]
  },
  {
    id: 186,
    kanji: "矢",
    lesson: 12,
    imageUrl: "/images/kanji/186_arrow_3d.png",
    onyomi: "シ",
    kunyomi: "や",
    meaning: "Mũi tên",
    sinoVietnamese: "Thỉ",
    radicals: "矢 (thỉ)",
    mnemonic: "Hình mũi tên.",
    examples: [
      {
        japanese: "矢",
        romaji: "Ya",
        vietnamese: "Mũi tên"
      },
      {
        japanese: "矢印",
        romaji: "Yajirushi",
        vietnamese: "Dấu mũi tên"
      },
      {
        japanese: "無理矢理",
        romaji: "Muriyari",
        vietnamese: "Miễn cưỡng, Bắt buộc"
      }
    ]
  },
  {
    id: 187,
    kanji: "族",
    lesson: 12,
    imageUrl: "/images/kanji/187_family_group_3d.png",
    onyomi: "ゾク",
    kunyomi: "",
    meaning: "Gia đình, Tộc",
    sinoVietnamese: "Tộc",
    radicals: "方 (phương) + 矢 (thỉ)",
    mnemonic: "Cả gia tộc cầm mũi tên (矢) đi về một phương (方).",
    examples: [
      {
        japanese: "家族",
        romaji: "Kazoku",
        vietnamese: "Gia đình"
      },
      {
        japanese: "民族",
        romaji: "Minzoku",
        vietnamese: "Dân tộc"
      },
      {
        japanese: "水族館",
        romaji: "Suizokukan",
        vietnamese: "Thủy cung"
      }
    ]
  },
  {
    id: 188,
    kanji: "親",
    lesson: 9,
    imageUrl: "/images/kanji/188_parent_3d.png",
    onyomi: "シン",
    kunyomi: "おや、した・しい",
    meaning: "Bố mẹ, Thân thiết",
    sinoVietnamese: "Thân",
    radicals: "立 (lập) + 木 (mộc) + 見 (kiến)",
    mnemonic: "Bố mẹ đứng (立) trên cây (木) nhìn (見) con cái.",
    examples: [
      {
        japanese: "親",
        romaji: "Oya",
        vietnamese: "Bố mẹ"
      },
      {
        japanese: "父親",
        romaji: "Chichioya",
        vietnamese: "Bố (mình)"
      },
      {
        japanese: "母親",
        romaji: "Hahaoya",
        vietnamese: "Mẹ (mình)"
      },
      {
        japanese: "親切な",
        romaji: "Shinsetsu na",
        vietnamese: "Tốt bụng"
      },
      {
        japanese: "親友",
        romaji: "Shinyuu",
        vietnamese: "Bạn thân"
      }
    ]
  },
  {
    id: 189,
    kanji: "兄",
    lesson: 11,
    imageUrl: "/images/kanji/189_older_brother_3d.png",
    onyomi: "ケイ、キョウ",
    kunyomi: "あに",
    meaning: "Anh trai",
    sinoVietnamese: "Huynh",
    radicals: "口 (khẩu) + 儿 (nhân)",
    mnemonic: "Người (儿) miệng (口) to là anh trai.",
    examples: [
      {
        japanese: "兄",
        romaji: "Ani",
        vietnamese: "Anh trai (mình)"
      },
      {
        japanese: "お兄さん",
        romaji: "Oniisan",
        vietnamese: "Anh trai (người khác)"
      },
      {
        japanese: "兄弟",
        romaji: "Kyoudai",
        vietnamese: "Anh em"
      },
      {
        japanese: "父兄",
        romaji: "Fukei",
        vietnamese: "Phụ huynh"
      }
    ]
  },
  {
    id: 190,
    kanji: "姉",
    lesson: 11,
    imageUrl: "/images/kanji/190_older_sister_3d.png",
    onyomi: "シ",
    kunyomi: "あね",
    meaning: "Chị gái",
    sinoVietnamese: "Tỷ",
    radicals: "女 (nữ) + 市 (thị)",
    mnemonic: "Chị gái (女) đi chợ (市).",
    examples: [
      {
        japanese: "姉",
        romaji: "Ane",
        vietnamese: "Chị gái (mình)"
      },
      {
        japanese: "お姉さん",
        romaji: "Oneesan",
        vietnamese: "Chị gái (người khác)"
      },
      {
        japanese: "姉妹",
        romaji: "Shimai",
        vietnamese: "Chị em"
      }
    ]
  },
  {
    id: 191,
    kanji: "弟",
    lesson: 11,
    imageUrl: "/images/kanji/191_younger_brother_3d.png",
    onyomi: "ダイ、テイ",
    kunyomi: "おとうと",
    meaning: "Em trai",
    sinoVietnamese: "Đệ",
    radicals: "弓 (cung) + 丨 + 丿",
    mnemonic: "Em trai cầm cung (弓) tên đứng bắn.",
    examples: [
      {
        japanese: "弟",
        romaji: "Otouto",
        vietnamese: "Em trai (mình)"
      },
      {
        japanese: "兄弟",
        romaji: "Kyoudai",
        vietnamese: "Anh em"
      },
      {
        japanese: "弟子",
        romaji: "Deshi",
        vietnamese: "Đệ tử"
      }
    ]
  },
  {
    id: 192,
    kanji: "妹",
    lesson: 12,
    imageUrl: "/images/kanji/192_younger_sister_3d.png",
    onyomi: "マイ",
    kunyomi: "いもうと",
    meaning: "Em gái",
    sinoVietnamese: "Muội",
    radicals: "女 (nữ) + 未 (vị)",
    mnemonic: "Em gái (女) chưa (未) lớn.",
    examples: [
      {
        japanese: "妹",
        romaji: "Imouto",
        vietnamese: "Em gái (mình)"
      },
      {
        japanese: "姉妹",
        romaji: "Shimai",
        vietnamese: "Chị em"
      }
    ]
  },
  {
    id: 193,
    kanji: "僕",
    lesson: 13,
    imageUrl: "/images/kanji/193_myself_boy_3d.png",
    onyomi: "ボク",
    kunyomi: "",
    meaning: "Tôi (nam)",
    sinoVietnamese: "Bộc",
    radicals: "亻 (nhân) + 菐 (bộc - nghiệp)",
    mnemonic: "Người (亻) phục vụ (bộc) cho chủ.",
    examples: [
      {
        japanese: "僕",
        romaji: "Boku",
        vietnamese: "Tôi (nam giới dùng)"
      }
    ]
  },
  {
    id: 194,
    kanji: "妻",
    lesson: 13,
    imageUrl: "/images/kanji/194_wife_3d.png",
    onyomi: "サイ",
    kunyomi: "つま",
    meaning: "Vợ",
    sinoVietnamese: "Thê",
    radicals: "女 (nữ) + ⺕ (kệ)",
    mnemonic: "Vợ (女) là người quán xuyến mọi việc trong nhà.",
    examples: [
      {
        japanese: "妻",
        romaji: "Tsuma",
        vietnamese: "Vợ (mình)"
      },
      {
        japanese: "夫妻",
        romaji: "Fusai",
        vietnamese: "Vợ chồng"
      },
      {
        japanese: "妻子",
        romaji: "Saishi",
        vietnamese: "Vợ con"
      }
    ]
  },
  {
    id: 195,
    kanji: "夫",
    lesson: 17,
    imageUrl: "/images/kanji/195_husband_3d.png",
    onyomi: "フ",
    kunyomi: "おっと",
    meaning: "Chồng",
    sinoVietnamese: "Phu",
    radicals: "大 (đại) + 一 (nhất)",
    mnemonic: "Chồng là người to lớn (大) duy nhất (一) trong nhà.",
    examples: [
      {
        japanese: "夫",
        romaji: "Otto",
        vietnamese: "Chồng (mình)"
      },
      {
        japanese: "夫婦",
        romaji: "Fuufu",
        vietnamese: "Vợ chồng"
      },
      {
        japanese: "工夫",
        romaji: "Kufuu",
        vietnamese: "Công phu, tìm tòi"
      },
      {
        japanese: "大丈夫",
        romaji: "Daijoubu",
        vietnamese: "Không sao, ổn"
      }
    ]
  },
  {
    id: 196,
    kanji: "主",
    lesson: 12,
    imageUrl: "/images/kanji/196_master_owner_3d.png",
    onyomi: "シュ",
    kunyomi: "おも、ぬし",
    meaning: "Chủ, Chính",
    sinoVietnamese: "Chủ",
    radicals: "丶 (chấm) + 王 (vương)",
    mnemonic: "Dấu chấm (丶) trên vua (王) là chúa tể.",
    examples: [
      {
        japanese: "主人",
        romaji: "Shujin",
        vietnamese: "Chồng (người khác), Chủ tiệm"
      },
      {
        japanese: "主な",
        romaji: "Omona",
        vietnamese: "Chính, chủ yếu"
      },
      {
        japanese: "持ち主",
        romaji: "Mochinushi",
        vietnamese: "Chủ sở hữu"
      },
      {
        japanese: "主義",
        romaji: "Shugi",
        vietnamese: "Chủ nghĩa"
      }
    ]
  },
  {
    id: 197,
    kanji: "住",
    lesson: 12,
    imageUrl: "/images/kanji/197_live_dwelling_3d.png",
    onyomi: "ジュウ",
    kunyomi: "す・む",
    meaning: "Sống, Trú",
    sinoVietnamese: "Trú",
    radicals: "亻 (nhân) + 主 (chủ)",
    mnemonic: "Người (亻) làm chủ (主) ngôi nhà mình ở (trú).",
    examples: [
      {
        japanese: "住みます",
        romaji: "Sumimasu",
        vietnamese: "Sống, cư trú"
      },
      {
        japanese: "住所",
        romaji: "Juusho",
        vietnamese: "Địa chỉ"
      },
      {
        japanese: "住民",
        romaji: "Juumin",
        vietnamese: "Người dân"
      },
      {
        japanese: "住宅",
        romaji: "Juutaku",
        vietnamese: "Nhà ở"
      }
    ]
  },
  {
    id: 198,
    kanji: "糸",
    lesson: 4,
    imageUrl: "/images/kanji/198_thread_3d.png",
    onyomi: "シ",
    kunyomi: "いと",
    meaning: "Sợi chỉ",
    sinoVietnamese: "Mịch",
    radicals: "糸 (mịch)",
    mnemonic: "Hình cuộn chỉ.",
    examples: [
      {
        japanese: "糸",
        romaji: "Ito",
        vietnamese: "Sợi chỉ"
      },
      {
        japanese: "毛糸",
        romaji: "Keito",
        vietnamese: "Len"
      }
    ]
  },
  {
    id: 199,
    kanji: "氏",
    lesson: 13,
    imageUrl: "/images/kanji/199_name_card_3d.png",
    onyomi: "シ",
    kunyomi: "うじ",
    meaning: "Thị, Họ",
    sinoVietnamese: "Thị",
    radicals: "氏 (thị)",
    mnemonic: "Người cầm dao giấy (hình giống chữ).",
    examples: [
      {
        japanese: "彼氏",
        romaji: "Kareshi",
        vietnamese: "Bạn trai"
      },
      {
        japanese: "氏名",
        romaji: "Shimei",
        vietnamese: "Họ tên"
      }
    ]
  },
  {
    id: 200,
    kanji: "紙",
    lesson: 13,
    imageUrl: "/images/kanji/200_paper_3d.png",
    onyomi: "シ",
    kunyomi: "かみ",
    meaning: "Giấy",
    sinoVietnamese: "Chỉ",
    radicals: "糸 (mịch) + 氏 (thị)",
    mnemonic: "Sợi chỉ (糸) dẹt mỏng như tờ giấy của họ Thị (氏).",
    examples: [
      {
        japanese: "紙",
        romaji: "Kami",
        vietnamese: "Giấy"
      },
      {
        japanese: "手紙",
        romaji: "Tegami",
        vietnamese: "Thư"
      },
      {
        japanese: "折り紙",
        romaji: "Origami",
        vietnamese: "Nghệ thuật gấp giấy"
      },
      {
        japanese: "新聞紙",
        romaji: "Shinbunshi",
        vietnamese: "Giấy báo"
      }
    ]
  },
  {
    id: 201,
    kanji: "教",
    lesson: 6,
    imageUrl: "/images/kanji/201_teach_3d.png",
    onyomi: "キョウ",
    kunyomi: "おし・える、おそ・わる",
    meaning: "Dạy",
    sinoVietnamese: "Giáo",
    radicals: "孝 (hiếu) + 攵 (phộc)",
    mnemonic: "Dạy con phải hiếu (孝) thảo, không đánh (攵).",
    examples: [
      {
        japanese: "教えます",
        romaji: "Oshiemasu",
        vietnamese: "Dạy"
      },
      {
        japanese: "教室",
        romaji: "Kyoushitsu",
        vietnamese: "Phòng học"
      },
      {
        japanese: "教会",
        romaji: "Kyoukai",
        vietnamese: "Nhà thờ"
      },
      {
        japanese: "教科書",
        romaji: "Kyoukasho",
        vietnamese: "Sách giáo khoa"
      },
      {
        japanese: "教育",
        romaji: "Kyouiku",
        vietnamese: "Giáo dục"
      }
    ]
  },
  {
    id: 202,
    kanji: "室",
    lesson: 9,
    imageUrl: "/images/kanji/202_room_3d.png",
    onyomi: "シツ",
    onyomiRomaji: "shits",
    kunyomi: "むろ",
    kunyomiRomaji: "muro",
    meaning: "Phòng",
    sinoVietnamese: "Thất",
    radicals: "宀 (miên) + 至 (chí)",
    mnemonic: "Đến (至) nhà (宀) vào phòng.",
    examples: [
      {
        japanese: "教室",
        romaji: "Kyoushitsu",
        vietnamese: "Phòng học"
      },
      {
        japanese: "会議室",
        romaji: "Kaigishitsu",
        vietnamese: "Phòng họp"
      },
      {
        japanese: "図書室",
        romaji: "Toshoshitsu",
        vietnamese: "Phòng đọc sách"
      },
      {
        japanese: "地下室",
        romaji: "Chikashitsu",
        vietnamese: "Tầng hầm"
      }
    ]
  },
  {
    id: 203,
    kanji: "羽",
    lesson: 13,
    imageUrl: "/images/kanji/203_feather_3d.png",
    onyomi: "ウ",
    onyomiRomaji: "u",
    kunyomi: "はね",
    kunyomiRomaji: "hane",
    meaning: "Cánh, Lông vũ",
    sinoVietnamese: "Vũ",
    radicals: "羽 (vũ)",
    mnemonic: "Hình đôi cánh chim.",
    examples: [
      {
        japanese: "羽",
        romaji: "Hane",
        vietnamese: "Cánh, Lông vũ"
      },
      {
        japanese: "羽毛",
        romaji: "Umou",
        vietnamese: "Lông vũ"
      }
    ]
  },
  {
    id: 204,
    kanji: "習",
    lesson: 19,
    imageUrl: "/images/kanji/204_learn_3d.png",
    onyomi: "シュウ",
    onyomiRomaji: "shuu",
    kunyomi: "なら・う",
    kunyomiRomaji: "nara-u",
    meaning: "Học, Tập",
    sinoVietnamese: "Tập",
    radicals: "羽 (vũ) + 白 (bạch)",
    mnemonic: "Chim non màu trắng (白) tập vỗ cánh (羽).",
    examples: [
      {
        japanese: "習います",
        romaji: "Naraimasu",
        vietnamese: "Học (từ ai đó)"
      },
      {
        japanese: "練習",
        romaji: "Renshuu",
        vietnamese: "Luyện tập"
      },
      {
        japanese: "習慣",
        romaji: "Shuukan",
        vietnamese: "Thói quen"
      },
      {
        japanese: "復習",
        romaji: "Fukushuu",
        vietnamese: "Ôn tập"
      },
      {
        japanese: "予習",
        romaji: "Yoshuu",
        vietnamese: "Chuẩn bị bài"
      }
    ]
  },
  {
    id: 205,
    kanji: "漢",
    lesson: 13,
    imageUrl: "/images/kanji/205_han_3d.png",
    onyomi: "カン",
    onyomiRomaji: "kan",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Hán",
    sinoVietnamese: "Hán",
    radicals: "氵(thủy) + 菫 (cần)",
    mnemonic: "Hán tự viết bằng nước (氵) trên đất sét vàng (菫).",
    examples: [
      {
        japanese: "漢字",
        romaji: "Kanji",
        vietnamese: "Chữ Hán"
      },
      {
        japanese: "漢方薬",
        romaji: "Kanpouyaku",
        vietnamese: "Thuốc Bắc"
      }
    ]
  },
  {
    id: 206,
    kanji: "字",
    lesson: 5,
    imageUrl: "/images/kanji/206_character_3d.png",
    onyomi: "ジ",
    onyomiRomaji: "ji",
    kunyomi: "あざ",
    kunyomiRomaji: "aza",
    meaning: "Chữ",
    sinoVietnamese: "Tự",
    radicals: "宀 (miên) + 子 (tử)",
    mnemonic: "Đứa trẻ (子) ở trong nhà (宀) học chữ.",
    examples: [
      {
        japanese: "字",
        romaji: "Ji",
        vietnamese: "Chữ"
      },
      {
        japanese: "漢字",
        romaji: "Kanji",
        vietnamese: "Chữ Hán"
      },
      {
        japanese: "文字",
        romaji: "Moji",
        vietnamese: "Ký tự"
      },
      {
        japanese: "数字",
        romaji: "Suuji",
        vietnamese: "Con số"
      },
      {
        japanese: "ローマ字",
        romaji: "Roomaji",
        vietnamese: "Chữ cái Latinh"
      }
    ]
  },
  {
    id: 207,
    kanji: "式",
    lesson: 20,
    imageUrl: "/images/kanji/207_ceremony_3d.png",
    onyomi: "シキ",
    onyomiRomaji: "shiki",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Lễ, Hình thức",
    sinoVietnamese: "Thức",
    radicals: "工 (công) + 弋 (dặc)",
    mnemonic: "Công việc (工) làm theo quy tắc (弋).",
    examples: [
      {
        japanese: "入学式",
        romaji: "Nyuugakushiki",
        vietnamese: "Lễ nhập học"
      },
      {
        japanese: "結婚式",
        romaji: "Kekkonshiki",
        vietnamese: "Lễ kết hôn"
      },
      {
        japanese: "式",
        romaji: "Shiki",
        vietnamese: "Lễ, hình thức"
      },
      {
        japanese: "正式な",
        romaji: "Seishiki na",
        vietnamese: "Chính thức"
      }
    ]
  },
  {
    id: 208,
    kanji: "試",
    lesson: 13,
    imageUrl: "/images/kanji/208_try_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "ため・す、こころ・みる",
    kunyomiRomaji: "tame-su, kokoro-miru",
    meaning: "Thử",
    sinoVietnamese: "Thí",
    radicals: "言 (ngôn) + 式 (thức)",
    mnemonic: "Lời nói (言) đúng quy cách (式) để làm thử.",
    examples: [
      {
        japanese: "試験",
        romaji: "Shiken",
        vietnamese: "Kỳ thi"
      },
      {
        japanese: "試合",
        romaji: "Shiai",
        vietnamese: "Trận đấu"
      },
      {
        japanese: "試着室",
        romaji: "Shichakushitsu",
        vietnamese: "Phòng thử đồ"
      },
      {
        japanese: "試みます",
        romaji: "Kokoromimasu",
        vietnamese: "Thử"
      }
    ]
  },
  {
    id: 209,
    kanji: "験",
    lesson: 19,
    imageUrl: "/images/kanji/209_exam_3d.png",
    onyomi: "ケン",
    onyomiRomaji: "ken",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Nghiệm, Kiểm tra",
    sinoVietnamese: "Nghiệm",
    radicals: "馬 (mã) + 僉 (thiêm)",
    mnemonic: "Kiểm nghiệm tất cả (僉) ngựa (馬).",
    examples: [
      {
        japanese: "試験",
        romaji: "Shiken",
        vietnamese: "Kỳ thi"
      },
      {
        japanese: "経験",
        romaji: "Keiken",
        vietnamese: "Kinh nghiệm"
      },
      {
        japanese: "体験",
        romaji: "Taiken",
        vietnamese: "Trải nghiệm"
      },
      {
        japanese: "実験",
        romaji: "Jikken",
        vietnamese: "Thực nghiệm"
      }
    ]
  },
  {
    id: 210,
    kanji: "宿",
    lesson: 15,
    imageUrl: "/images/kanji/210_inn_3d.png",
    onyomi: "シュク",
    onyomiRomaji: "shuku",
    kunyomi: "やど",
    kunyomiRomaji: "yado",
    meaning: "Trọ, Chỗ ở",
    sinoVietnamese: "Túc",
    radicals: "宀 (miên) + 亻(nhân) + 百 (bách)",
    mnemonic: "Nhà (宀) có trăm (百) người (亻) trọ.",
    examples: [
      {
        japanese: "宿題",
        romaji: "Shukudai",
        vietnamese: "Bài tập về nhà"
      },
      {
        japanese: "下宿",
        romaji: "Geshuku",
        vietnamese: "Nhà trọ"
      },
      {
        japanese: "宿泊",
        romaji: "Shukuhaku",
        vietnamese: "Trọ lại"
      },
      {
        japanese: "新宿",
        romaji: "Shinjuku",
        vietnamese: "Shinjuku (tên địa danh)"
      }
    ]
  },
  {
    id: 211,
    kanji: "題",
    lesson: 13,
    imageUrl: "/images/kanji/211_topic_3d.png",
    onyomi: "ダイ",
    onyomiRomaji: "dai",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Đề, Đề bài",
    sinoVietnamese: "Đề",
    radicals: "是 (thị) + 頁 (hiệt)",
    mnemonic: "Vấn đề đúng (是) nằm ở đầu (頁).",
    examples: [
      {
        japanese: "問題",
        romaji: "Mondai",
        vietnamese: "Vấn đề"
      },
      {
        japanese: "宿題",
        romaji: "Shukudai",
        vietnamese: "Bài tập về nhà"
      },
      {
        japanese: "話題",
        romaji: "Wadai",
        vietnamese: "Chủ đề"
      },
      {
        japanese: "題名",
        romaji: "Daimei",
        vietnamese: "Nhan đề"
      }
    ]
  },
  {
    id: 212,
    kanji: "文",
    lesson: 5,
    imageUrl: "/images/kanji/212_sentence_3d.png",
    onyomi: "ブン、モン",
    onyomiRomaji: "bun, mon",
    kunyomi: "ふみ",
    kunyomiRomaji: "fumi",
    meaning: "Văn, Văn chương",
    sinoVietnamese: "Văn",
    radicals: "文 (văn)",
    mnemonic: "Hình người có hình xăm ở ngực.",
    examples: [
      {
        japanese: "文学",
        romaji: "Bungaku",
        vietnamese: "Văn học"
      },
      {
        japanese: "作文",
        romaji: "Sakubun",
        vietnamese: "Bài văn"
      },
      {
        japanese: "文化",
        romaji: "Bunka",
        vietnamese: "Văn hóa"
      },
      {
        japanese: "文法",
        romaji: "Bunpou",
        vietnamese: "Ngữ pháp"
      },
      {
        japanese: "注文",
        romaji: "Chuumon",
        vietnamese: "Gọi món"
      }
    ]
  },
  {
    id: 213,
    kanji: "英",
    lesson: 14,
    imageUrl: "/images/kanji/213_english_3d.png",
    onyomi: "エイ",
    onyomiRomaji: "ei",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Anh, Tài năng",
    sinoVietnamese: "Anh",
    radicals: "艹 (thảo) + 央 (ương)",
    mnemonic: "Hoa (艹) ở giữa (央) là tài năng nhất (Anh).",
    examples: [
      {
        japanese: "英語",
        romaji: "Eigo",
        vietnamese: "Tiếng Anh"
      },
      {
        japanese: "英国",
        romaji: "Eikoku",
        vietnamese: "Nước Anh"
      },
      {
        japanese: "英雄",
        romaji: "Eiyuu",
        vietnamese: "Anh hùng"
      }
    ]
  },
  {
    id: 214,
    kanji: "質",
    lesson: 13,
    imageUrl: "/images/kanji/214_quality_3d.png",
    onyomi: "シツ",
    onyomiRomaji: "shitsu",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Chất, Chất lượng",
    sinoVietnamese: "Chất",
    radicals: "斤 (cân) + 貝 (bối) + 斤 (cân)",
    mnemonic: "Hai cái rìu (斤) cầm cố lấy tiền (貝) xem chất lượng.",
    examples: [
      {
        japanese: "質問",
        romaji: "Shitsumon",
        vietnamese: "Câu hỏi"
      },
      {
        japanese: "品質",
        romaji: "Hinshitsu",
        vietnamese: "Chất lượng"
      },
      {
        japanese: "性質",
        romaji: "Seishitsu",
        vietnamese: "Tính chất"
      }
    ]
  },
  {
    id: 215,
    kanji: "問",
    lesson: 13,
    imageUrl: "/images/kanji/215_question_3d.png",
    onyomi: "モン",
    onyomiRomaji: "mon",
    kunyomi: "と・う",
    kunyomiRomaji: "to-u",
    meaning: "Vấn, Hỏi",
    sinoVietnamese: "Vấn",
    radicals: "門 (môn) + 口 (khẩu)",
    mnemonic: "Đứng cửa (門) hỏi (口).",
    examples: [
      {
        japanese: "問題",
        romaji: "Mondai",
        vietnamese: "Vấn đề"
      },
      {
        japanese: "質問",
        romaji: "Shitsumon",
        vietnamese: "Câu hỏi"
      },
      {
        japanese: "問い合わせ",
        romaji: "Toiawase",
        vietnamese: "Hỏi thăm, liên hệ"
      },
      {
        japanese: "訪問",
        romaji: "Houmon",
        vietnamese: "Thăm hỏi"
      }
    ]
  },
  {
    id: 216,
    kanji: "説",
    lesson: 14,
    imageUrl: "/images/kanji/216_explain_3d.png",
    onyomi: "セツ",
    onyomiRomaji: "setsu",
    kunyomi: "と・く",
    kunyomiRomaji: "to-ku",
    meaning: "Thuyết, Giải thích",
    sinoVietnamese: "Thuyết",
    radicals: "言 (ngôn) + 兌 (đoài)",
    mnemonic: "Nói (言) lời vui vẻ (兌).",
    examples: [
      {
        japanese: "説明",
        romaji: "Setsumei",
        vietnamese: "Giải thích"
      },
      {
        japanese: "小説",
        romaji: "Shousetsu",
        vietnamese: "Tiểu thuyết"
      },
      {
        japanese: "解説",
        romaji: "Kaisetsu",
        vietnamese: "Giải thích, chú giải"
      }
    ]
  },
  {
    id: 217,
    kanji: "遠",
    lesson: 14,
    imageUrl: "/images/kanji/217_far_3d.png",
    onyomi: "エン",
    onyomiRomaji: "en",
    kunyomi: "とお・い",
    kunyomiRomaji: "too-i",
    meaning: "Xa",
    sinoVietnamese: "Viễn",
    radicals: "辶 (xước) + 袁 (viên)",
    mnemonic: "Đi (辶) xa nhớ viên (袁) ngọc.",
    examples: [
      {
        japanese: "遠い",
        romaji: "Tooi",
        vietnamese: "Xa"
      },
      {
        japanese: "遠足",
        romaji: "Ensoku",
        vietnamese: "Dã ngoại"
      },
      {
        japanese: "永遠",
        romaji: "Eien",
        vietnamese: "Vĩnh viễn"
      },
      {
        japanese: "遠慮します",
        romaji: "Enryo shimasu",
        vietnamese: "Ngại ngần, khách khí"
      }
    ]
  },
  {
    id: 218,
    kanji: "近",
    lesson: 14,
    imageUrl: "/images/kanji/218_near_3d.png",
    onyomi: "キン",
    onyomiRomaji: "kin",
    kunyomi: "ちか・い",
    kunyomiRomaji: "chika-i",
    meaning: "Gần",
    sinoVietnamese: "Cận",
    radicals: "辶 (xước) + 斤 (cân)",
    mnemonic: "Đi (辶) cầm rìu (斤) lại gần.",
    examples: [
      {
        japanese: "近い",
        romaji: "Chikai",
        vietnamese: "Gần"
      },
      {
        japanese: "近く",
        romaji: "Chikaku",
        vietnamese: "Gần đây (địa điểm)"
      },
      {
        japanese: "近所",
        romaji: "Kinjo",
        vietnamese: "Hàng xóm"
      },
      {
        japanese: "最近",
        romaji: "Saikin",
        vietnamese: "Gần đây (thời gian)"
      }
    ]
  },
  {
    id: 219,
    kanji: "者",
    lesson: 10,
    imageUrl: "/images/kanji/219_person_3d.png",
    onyomi: "シャ",
    onyomiRomaji: "sha",
    kunyomi: "もの",
    kunyomiRomaji: "mono",
    meaning: "Người, Kẻ",
    sinoVietnamese: "Giả",
    radicals: "耂 (lão) + 日 (nhật)",
    mnemonic: "Người già (耂) nói chuyện ngày (日) xưa.",
    examples: [
      {
        japanese: "学者",
        romaji: "Gakusha",
        vietnamese: "Học giả"
      },
      {
        japanese: "医者",
        romaji: "Isha",
        vietnamese: "Bác sĩ"
      },
      {
        japanese: "作者",
        romaji: "Sakusha",
        vietnamese: "Tác giả"
      },
      {
        japanese: "若者",
        romaji: "Wakamono",
        vietnamese: "Người trẻ"
      }
    ]
  },
  {
    id: 220,
    kanji: "暑",
    lesson: 14,
    imageUrl: "/images/kanji/220_hot_3d.png",
    onyomi: "ショ",
    onyomiRomaji: "sho",
    kunyomi: "あつ・い",
    kunyomiRomaji: "atsu-i",
    meaning: "Nóng (thời tiết)",
    sinoVietnamese: "Thử",
    radicals: "日 (nhật) + 者 (giả)",
    mnemonic: "Người (者) dưới nắng (日) thì nóng.",
    examples: [
      {
        japanese: "暑い",
        romaji: "Atsui",
        vietnamese: "Nóng (thời tiết)"
      },
      {
        japanese: "残暑",
        romaji: "Zansho",
        vietnamese: "Cái nóng còn sót lại"
      },
      {
        japanese: "避暑地",
        romaji: "Hishochi",
        vietnamese: "Nơi tránh nóng"
      }
    ]
  },
  {
    id: 221,
    kanji: "寒",
    lesson: 14,
    imageUrl: "/images/kanji/221_cold_3d.png",
    onyomi: "カン",
    onyomiRomaji: "kan",
    kunyomi: "さむ・い",
    kunyomiRomaji: "samu-i",
    meaning: "Lạnh (thời tiết)",
    sinoVietnamese: "Hàn",
    radicals: "宀 (miên) + 井 (tỉnh) + 冫(băng)",
    mnemonic: "Nhà (宀) có rơm rạ, dưới có băng (冫) thì lạnh.",
    examples: [
      {
        japanese: "寒い",
        romaji: "Samui",
        vietnamese: "Lạnh (thời tiết)"
      },
      {
        japanese: "寒波",
        romaji: "Kanpa",
        vietnamese: "Sóng lạnh"
      },
      {
        japanese: "悪寒",
        romaji: "Okan",
        vietnamese: "Ớn lạnh (do sốt)"
      }
    ]
  },
  {
    id: 222,
    kanji: "重",
    lesson: 14,
    imageUrl: "/images/kanji/222_heavy_3d.png",
    onyomi: "ジュウ、チョウ",
    onyomiRomaji: "juu, chou",
    kunyomi: "おも・い、かさ・ねる",
    kunyomiRomaji: "omo-i, kasa-neru",
    meaning: "Nặng, Trọng",
    sinoVietnamese: "Trọng",
    radicals: "千 (thiên) + 里 (lý)",
    mnemonic: "Ngàn (千) dặm (里) thì nặng.",
    examples: [
      {
        japanese: "重い",
        romaji: "Omoi",
        vietnamese: "Nặng"
      },
      {
        japanese: "体重",
        romaji: "Taijuu",
        vietnamese: "Cân nặng"
      },
      {
        japanese: "貴重な",
        romaji: "Kichou na",
        vietnamese: "Quý trọng"
      },
      {
        japanese: "重ねます",
        romaji: "Kasanemasu",
        vietnamese: "Chồng chất"
      }
    ]
  },
  {
    id: 223,
    kanji: "軽",
    lesson: 14,
    imageUrl: "/images/kanji/223_light_3d.png",
    onyomi: "ケイ",
    onyomiRomaji: "kei",
    kunyomi: "かる・い",
    kunyomiRomaji: "karu-i",
    meaning: "Nhẹ",
    sinoVietnamese: "Khinh",
    radicals: "車 (xa) + 圣 (thánh)",
    mnemonic: "Xe (車) chạy trên đất (土) nhẹ nhàng.",
    examples: [
      {
        japanese: "軽い",
        romaji: "Karui",
        vietnamese: "Nhẹ"
      },
      {
        japanese: "軽食",
        romaji: "Keishoku",
        vietnamese: "Bữa ăn nhẹ"
      },
      {
        japanese: "気軽に",
        romaji: "Kigaru ni",
        vietnamese: "Thoải mái, đừng ngại"
      }
    ]
  },
  {
    id: 224,
    kanji: "低",
    lesson: 5,
    imageUrl: "/images/kanji/224_low_3d.png",
    onyomi: "テイ",
    onyomiRomaji: "tei",
    kunyomi: "ひく・い",
    kunyomiRomaji: "hiku-i",
    meaning: "Thấp",
    sinoVietnamese: "Đê",
    radicals: "亻(nhân) + 氐 (đê)",
    mnemonic: "Người (亻) cúi thấp (氐).",
    examples: [
      {
        japanese: "低い",
        romaji: "Hikui",
        vietnamese: "Thấp"
      },
      {
        japanese: "最低",
        romaji: "Saitei",
        vietnamese: "Thấp nhất, tệ nhất"
      },
      {
        japanese: "低下",
        romaji: "Teika",
        vietnamese: "Suy giảm"
      }
    ]
  },
  {
    id: 225,
    kanji: "広",
    lesson: 10,
    imageUrl: "/images/kanji/225_wide_3d.png",
    onyomi: "コウ",
    onyomiRomaji: "kou",
    kunyomi: "ひろ・い",
    kunyomiRomaji: "hiro-i",
    meaning: "Rộng",
    sinoVietnamese: "Quảng",
    radicals: "广 (nghiễm) + ム (khư)",
    mnemonic: "Mái nhà (广) riêng (ム) rộng rãi.",
    examples: [
      {
        japanese: "広い",
        romaji: "Hiroi",
        vietnamese: "Rộng"
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
      }
    ]
  },
  {
    id: 226,
    kanji: "暗",
    lesson: 5,
    imageUrl: "/images/kanji/226_dark_3d.png",
    onyomi: "アン",
    onyomiRomaji: "an",
    kunyomi: "くら・い",
    kunyomiRomaji: "kura-i",
    meaning: "Tối",
    sinoVietnamese: "Ám",
    radicals: "日 (nhật) + 音 (âm)",
    mnemonic: "Mặt trời (日) tắt, chỉ còn âm thanh (音) là tối.",
    examples: [
      {
        japanese: "暗い",
        romaji: "Kurai",
        vietnamese: "Tối"
      },
      {
        japanese: "暗室",
        romaji: "Anshitsu",
        vietnamese: "Phòng tối"
      },
      {
        japanese: "暗記します",
        romaji: "Anki shimasu",
        vietnamese: "Ghi nhớ"
      }
    ]
  },
  {
    id: 227,
    kanji: "太",
    lesson: 15,
    imageUrl: "/images/kanji/227_fat_3d.png",
    onyomi: "タイ、タ",
    onyomiRomaji: "tai, ta",
    kunyomi: "ふと・い",
    kunyomiRomaji: "futo-i",
    meaning: "Béo, Thái",
    sinoVietnamese: "Thái",
    radicals: "大 (đại) + 丶 (chấm)",
    mnemonic: "To (大) thêm một chấm (丶) là béo.",
    examples: [
      {
        japanese: "太い",
        romaji: "Futoi",
        vietnamese: "Béo, dày"
      },
      {
        japanese: "太ります",
        romaji: "Futorimasu",
        vietnamese: "Tăng cân"
      },
      {
        japanese: "太陽",
        romaji: "Taiyou",
        vietnamese: "Mặt trời"
      },
      {
        japanese: "太平洋",
        romaji: "Taiheiyou",
        vietnamese: "Thái Bình Dương"
      }
    ]
  },
  {
    id: 228,
    kanji: "若",
    lesson: 26,
    imageUrl: "/images/kanji/228_young_3d.png",
    onyomi: "ジャク",
    onyomiRomaji: "jaku",
    kunyomi: "わか・い",
    kunyomiRomaji: "waka-i",
    meaning: "Trẻ",
    sinoVietnamese: "Nhược",
    radicals: "艹 (thảo) + 右 (hữu)",
    mnemonic: "Tay phải (右) hái hoa (艹) là người trẻ.",
    examples: [
      {
        japanese: "若い",
        romaji: "Wakai",
        vietnamese: "Trẻ"
      },
      {
        japanese: "若者",
        romaji: "Wakamono",
        vietnamese: "Người trẻ"
      }
    ]
  },
  {
    id: 229,
    kanji: "忙",
    lesson: 15,
    imageUrl: "/images/kanji/229_busy_3d.png",
    onyomi: "ボウ",
    onyomiRomaji: "bou",
    kunyomi: "いそが・しい",
    kunyomiRomaji: "isoga-shii",
    meaning: "Bận",
    sinoVietnamese: "Mang",
    radicals: "忄(tâm) + 亡 (vong)",
    mnemonic: "Tim (忄) mất (亡) cảm giác vì bận.",
    examples: [
      {
        japanese: "忙しい",
        romaji: "Isogashii",
        vietnamese: "Bận rộn"
      },
      {
        japanese: "多忙な",
        romaji: "Tabou na",
        vietnamese: "Rất bận"
      }
    ]
  },
  {
    id: 230,
    kanji: "短",
    lesson: 5,
    imageUrl: "/images/kanji/230_short_3d.png",
    onyomi: "タン",
    onyomiRomaji: "tan",
    kunyomi: "みじか・い",
    kunyomiRomaji: "mijika-i",
    meaning: "Ngắn",
    sinoVietnamese: "Đoản",
    radicals: "矢 (thỉ) + 豆 (đậu)",
    mnemonic: "Mũi tên (矢) bắn trúng hạt đậu (豆) là ngắn.",
    examples: [
      {
        japanese: "短い",
        romaji: "Mijikai",
        vietnamese: "Ngắn"
      },
      {
        japanese: "短気な",
        romaji: "Tanki na",
        vietnamese: "Nóng tính"
      },
      {
        japanese: "短所",
        romaji: "Tansho",
        vietnamese: "Sở đoản, điểm yếu"
      }
    ]
  },
  {
    id: 231,
    kanji: "弱",
    lesson: 15,
    imageUrl: "/images/kanji/231_weak_3d.png",
    onyomi: "ジャク",
    onyomiRomaji: "jaku",
    kunyomi: "よわ・い",
    kunyomiRomaji: "yowa-i",
    meaning: "Yếu",
    sinoVietnamese: "Nhược",
    radicals: "弓 (cung) + 冫(băng)",
    mnemonic: "Cây cung (弓) bị đóng băng (冫) nên yếu.",
    examples: [
      {
        japanese: "弱い",
        romaji: "Yowai",
        vietnamese: "Yếu"
      },
      {
        japanese: "弱点",
        romaji: "Jakuten",
        vietnamese: "Điểm yếu"
      },
      {
        japanese: "弱気",
        romaji: "Yowaki",
        vietnamese: "Nhút nhát"
      }
    ]
  },
  {
    id: 232,
    kanji: "豆",
    lesson: 15,
    imageUrl: "/images/kanji/232_bean_3d.png",
    onyomi: "トウ、ズ",
    onyomiRomaji: "tou, zu",
    kunyomi: "まめ",
    kunyomiRomaji: "mame",
    meaning: "Đậu",
    sinoVietnamese: "Đậu",
    radicals: "豆 (đậu)",
    mnemonic: "Một hạt đậu trên đĩa.",
    examples: [
      {
        japanese: "豆",
        romaji: "Mame",
        vietnamese: "Đậu"
      },
      {
        japanese: "豆腐",
        romaji: "Toufu",
        vietnamese: "Đậu phụ"
      },
      {
        japanese: "大豆",
        romaji: "Daizu",
        vietnamese: "Đậu nành"
      },
      {
        japanese: "小豆",
        romaji: "Azuki",
        vietnamese: "Đậu đỏ"
      }
    ]
  },
  {
    id: 233,
    kanji: "運",
    lesson: 11,
    imageUrl: "/images/kanji/233_luck_transport_3d.png",
    onyomi: "ウン",
    onyomiRomaji: "un",
    kunyomi: "はこ・ぶ",
    kunyomiRomaji: "hako-bu",
    meaning: "Vận, Vận chuyển",
    sinoVietnamese: "Vận",
    radicals: "辶 (xước) + 軍 (quân)",
    mnemonic: "Quân đội (軍) đang di chuyển (辶).",
    examples: [
      {
        japanese: "運びます",
        romaji: "Hakobimasu",
        vietnamese: "Vận chuyển"
      },
      {
        japanese: "運転",
        romaji: "Unten",
        vietnamese: "Lái xe"
      },
      {
        japanese: "運動",
        romaji: "Undou",
        vietnamese: "Vận động"
      },
      {
        japanese: "幸運",
        romaji: "Kouun",
        vietnamese: "May mắn"
      }
    ]
  },
  {
    id: 234,
    kanji: "動",
    lesson: 15,
    imageUrl: "/images/kanji/234_move_3d.png",
    onyomi: "ドウ",
    onyomiRomaji: "dou",
    kunyomi: "うご・く",
    kunyomiRomaji: "ugo-ku",
    meaning: "Động, Chuyển động",
    sinoVietnamese: "Động",
    radicals: "重 (trọng) + 力 (lực)",
    mnemonic: "Dùng lực (力) di chuyển vật nặng (重).",
    examples: [
      {
        japanese: "動きます",
        romaji: "Ugokimasu",
        vietnamese: "Di chuyển, hoạt động"
      },
      {
        japanese: "運動",
        romaji: "Undou",
        vietnamese: "Vận động"
      },
      {
        japanese: "動物",
        romaji: "Doubutsu",
        vietnamese: "Động vật"
      },
      {
        japanese: "自動車",
        romaji: "Jidousha",
        vietnamese: "Xe ô tô"
      }
    ]
  },
  {
    id: 235,
    kanji: "止",
    lesson: 15,
    imageUrl: "/images/kanji/235_stop_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "と・まる、と・める",
    kunyomiRomaji: "to-maru, to-meru",
    meaning: "Chỉ, Dừng",
    sinoVietnamese: "Chỉ",
    radicals: "止 (chỉ)",
    mnemonic: "Hình dấu chân dừng lại.",
    examples: [
      {
        japanese: "止まります",
        romaji: "Tomarimasu",
        vietnamese: "Dừng lại"
      },
      {
        japanese: "止めます",
        romaji: "Tomemasu",
        vietnamese: "Làm cho dừng lại, đỗ xe"
      },
      {
        japanese: "中止",
        romaji: "Chuushi",
        vietnamese: "Hủy bỏ"
      },
      {
        japanese: "禁止",
        romaji: "Kinshi",
        vietnamese: "Cấm"
      }
    ]
  },
  {
    id: 236,
    kanji: "歩",
    lesson: 15,
    imageUrl: "/images/kanji/236_walk_3d.png",
    onyomi: "ホ、ポ",
    onyomiRomaji: "ho, po",
    kunyomi: "ある・く",
    kunyomiRomaji: "aru-ku",
    meaning: "Bộ, Đi bộ",
    sinoVietnamese: "Bộ",
    radicals: "止 (chỉ) + 少 (thiểu)",
    mnemonic: "Dừng lại (止) một chút (少) rồi đi bộ tiếp.",
    examples: [
      {
        japanese: "歩きます",
        romaji: "Arukimasu",
        vietnamese: "Đi bộ"
      },
      {
        japanese: "散歩",
        romaji: "Sanpo",
        vietnamese: "Đi dạo"
      },
      {
        japanese: "歩道",
        romaji: "Hodou",
        vietnamese: "Vỉa hè"
      },
      {
        japanese: "一歩",
        romaji: "Ippo",
        vietnamese: "Một bước"
      }
    ]
  },
  {
    id: 237,
    kanji: "使",
    lesson: 8,
    imageUrl: "/images/kanji/237_use_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "つか・う",
    kunyomiRomaji: "tsuka-u",
    meaning: "Sử, Sử dụng",
    sinoVietnamese: "Sử",
    radicals: "亻(nhân) + 吏 (lại)",
    mnemonic: "Người (亻) sai khiến quan lại (吏).",
    examples: [
      {
        japanese: "使います",
        romaji: "Tsukaimasu",
        vietnamese: "Sử dụng"
      },
      {
        japanese: "大使",
        romaji: "Taishi",
        vietnamese: "Đại sứ"
      },
      {
        japanese: "使用中",
        romaji: "Shiyouchuu",
        vietnamese: "Đang sử dụng"
      }
    ]
  },
  {
    id: 238,
    kanji: "送",
    lesson: 23,
    imageUrl: "/images/kanji/238_send_3d.png",
    onyomi: "ソウ",
    onyomiRomaji: "sou",
    kunyomi: "おく・る",
    kunyomiRomaji: "oku-ru",
    meaning: "Tống, Gửi, Tiễn",
    sinoVietnamese: "Tống",
    radicals: "辶 (xước) + 关 (thiên)",
    mnemonic: "Tiễn (辶) người lên trời (关).",
    examples: [
      {
        japanese: "送ります",
        romaji: "Okurimasu",
        vietnamese: "Gửi, tiễn"
      },
      {
        japanese: "送信",
        romaji: "Soushin",
        vietnamese: "Gửi tin"
      },
      {
        japanese: "放送",
        romaji: "Housou",
        vietnamese: "Phát sóng"
      }
    ]
  },
  {
    id: 239,
    kanji: "洗",
    lesson: 17,
    imageUrl: "/images/kanji/239_wash_3d.png",
    onyomi: "セン",
    onyomiRomaji: "sen",
    kunyomi: "あら・う",
    kunyomiRomaji: "ara-u",
    meaning: "Tẩy, Rửa",
    sinoVietnamese: "Tẩy",
    radicals: "氵(thủy) + 先 (tiên)",
    mnemonic: "Dùng nước (氵) rửa trước (先).",
    examples: [
      {
        japanese: "洗います",
        romaji: "Araimasu",
        vietnamese: "Rửa"
      },
      {
        japanese: "洗面所",
        romaji: "Senmenjo",
        vietnamese: "Bồn rửa mặt"
      },
      {
        japanese: "洗濯",
        romaji: "Sentaku",
        vietnamese: "Giặt giũ"
      }
    ]
  },
  {
    id: 240,
    kanji: "急",
    lesson: 15,
    imageUrl: "/images/kanji/240_hurry_3d.png",
    onyomi: "キュウ",
    onyomiRomaji: "kyuu",
    kunyomi: "いそ・ぐ",
    kunyomiRomaji: "iso-gu",
    meaning: "Cấp, Vội",
    sinoVietnamese: "Cấp",
    radicals: "刍 (trừ) + 心 (tâm)",
    mnemonic: "Cỏ (刍) trong tim (心) thấy vội.",
    examples: [
      {
        japanese: "急ぎます",
        romaji: "Isogimasu",
        vietnamese: "Vội vàng"
      },
      {
        japanese: "急行",
        romaji: "Kyuukou",
        vietnamese: "Tàu nhanh"
      },
      {
        japanese: "特急",
        romaji: "Tokkyuu",
        vietnamese: "Tàu tốc hành"
      },
      {
        japanese: "救急車",
        romaji: "Kyuukyuusha",
        vietnamese: "Xe cấp cứu"
      }
    ]
  },
  {
    id: 241,
    kanji: "開",
    lesson: 16,
    imageUrl: "/images/kanji/241_open_3d.png",
    onyomi: "カイ",
    onyomiRomaji: "kai",
    kunyomi: "あ・く、あ・ける、ひら・く",
    kunyomiRomaji: "a-ku, a-keru, hira-ku",
    meaning: "Khai, Mở",
    sinoVietnamese: "Khai",
    radicals: "門 (môn) + 开 (khai)",
    mnemonic: "Mở hai cánh cửa (門) ra (开).",
    examples: [
      {
        japanese: "開けます",
        romaji: "Akemasu",
        vietnamese: "Mở (cửa)"
      },
      {
        japanese: "開きます",
        romaji: "Akimasu",
        vietnamese: "Mở (cửa tự mở)"
      },
      {
        japanese: "開店",
        romaji: "Kaiten",
        vietnamese: "Mở cửa tiệm"
      },
      {
        japanese: "開始",
        romaji: "Kaishi",
        vietnamese: "Bắt đầu"
      }
    ]
  },
  {
    id: 242,
    kanji: "閉",
    lesson: 18,
    imageUrl: "/images/kanji/242_close_3d.png",
    onyomi: "ヘイ",
    onyomiRomaji: "hei",
    kunyomi: "し・まる、し・める、と・じる",
    kunyomiRomaji: "shi-maru, shi-meru, to-jiru",
    meaning: "Bế, Đóng",
    sinoVietnamese: "Bế",
    radicals: "門 (môn) + 才 (tài)",
    mnemonic: "Người tài (才) mới đóng được cửa (門).",
    examples: [
      {
        japanese: "閉めます",
        romaji: "Shimemasu",
        vietnamese: "Đóng (cửa)"
      },
      {
        japanese: "閉まります",
        romaji: "Shimarimasu",
        vietnamese: "Đóng (cửa tự đóng)"
      },
      {
        japanese: "閉店",
        romaji: "Heiten",
        vietnamese: "Đóng cửa tiệm"
      }
    ]
  },
  {
    id: 243,
    kanji: "押",
    lesson: 16,
    imageUrl: "/images/kanji/243_push_3d.png",
    onyomi: "オウ",
    onyomiRomaji: "ou",
    kunyomi: "お・す",
    kunyomiRomaji: "o-su",
    meaning: "Áp, Ấn",
    sinoVietnamese: "Áp",
    radicals: "扌(thủ) + 甲 (giáp)",
    mnemonic: "Dùng tay (扌) ấn vào áo giáp (甲).",
    examples: [
      {
        japanese: "押します",
        romaji: "Oshimasu",
        vietnamese: "Ấn, đẩy"
      },
      {
        japanese: "押し入れ",
        romaji: "Oshiire",
        vietnamese: "Tủ âm tường"
      }
    ]
  },
  {
    id: 244,
    kanji: "引",
    lesson: 16,
    imageUrl: "/images/kanji/244_pull_3d.png",
    onyomi: "イン",
    onyomiRomaji: "in",
    kunyomi: "ひ・く",
    kunyomiRomaji: "hi-ku",
    meaning: "Dẫn, Kéo",
    sinoVietnamese: "Dẫn",
    radicals: "弓 (cung) + 丨 (sổ)",
    mnemonic: "Kéo (丨) dây cung (弓).",
    examples: [
      {
        japanese: "引きます",
        romaji: "Hikimasu",
        vietnamese: "Kéo"
      },
      {
        japanese: "引き出し",
        romaji: "Hikidashi",
        vietnamese: "Ngăn kéo"
      },
      {
        japanese: "引力",
        romaji: "Inryoku",
        vietnamese: "Lực hấp dẫn"
      }
    ]
  },
  {
    id: 245,
    kanji: "思",
    lesson: 7,
    imageUrl: "/images/kanji/245_think_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "おも・う",
    kunyomiRomaji: "omo-u",
    meaning: "Tư, Nghĩ",
    sinoVietnamese: "Tư",
    radicals: "田 (điền) + 心 (tâm)",
    mnemonic: "Tâm (心) nghĩ về ruộng đất (田).",
    examples: [
      {
        japanese: "思います",
        romaji: "Omoimasu",
        vietnamese: "Nghĩ"
      },
      {
        japanese: "思い出",
        romaji: "Omoide",
        vietnamese: "Kỷ niệm"
      },
      {
        japanese: "思想",
        romaji: "Shisou",
        vietnamese: "Tư tưởng"
      }
    ]
  },
  {
    id: 246,
    kanji: "知",
    lesson: 16,
    imageUrl: "/images/kanji/246_know_3d.png",
    onyomi: "チ",
    onyomiRomaji: "chi",
    kunyomi: "し・る",
    kunyomiRomaji: "shi-ru",
    meaning: "Tri, Biết",
    sinoVietnamese: "Tri",
    radicals: "矢 (thỉ) + 口 (khẩu)",
    mnemonic: "Miệng (口) nói nhanh như tên bắn (矢) là người hiểu biết.",
    examples: [
      {
        japanese: "知ります",
        romaji: "Shirimasu",
        vietnamese: "Biết"
      },
      {
        japanese: "知識",
        romaji: "Chishiki",
        vietnamese: "Tri thức"
      },
      {
        japanese: "知人",
        romaji: "Chijin",
        vietnamese: "Người quen"
      },
      {
        japanese: "通知",
        romaji: "Tsuuchi",
        vietnamese: "Thông báo"
      }
    ]
  },
  {
    id: 247,
    kanji: "考",
    lesson: 12,
    imageUrl: "/images/kanji/247_think_consider_3d.png",
    onyomi: "コウ",
    onyomiRomaji: "kou",
    kunyomi: "かんが・える",
    kunyomiRomaji: "kanga-eru",
    meaning: "Khảo, Suy nghĩ",
    sinoVietnamese: "Khảo",
    radicals: "耂 (lão) + 丂 (khảo)",
    mnemonic: "Người già (耂) suy nghĩ lung tung (丂).",
    examples: [
      {
        japanese: "考えます",
        romaji: "Kangaemasu",
        vietnamese: "Suy nghĩ"
      },
      {
        japanese: "考え",
        romaji: "Kangae",
        vietnamese: "Suy nghĩ, ý kiến"
      },
      {
        japanese: "考古学",
        romaji: "Koukogaku",
        vietnamese: "Khảo cổ học"
      }
    ]
  },
  {
    id: 248,
    kanji: "死",
    lesson: 10,
    imageUrl: "/images/kanji/248_death_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "し・ぬ",
    kunyomiRomaji: "shi-nu",
    meaning: "Tử, Chết",
    sinoVietnamese: "Tử",
    radicals: "歹 (đãi) + 匕 (chuỷ)",
    mnemonic: "Xương tàn (歹) dưới lưỡi dao (匕) là chết.",
    examples: [
      {
        japanese: "死にます",
        romaji: "Shinimasu",
        vietnamese: "Chết"
      },
      {
        japanese: "死者",
        romaji: "Shisha",
        vietnamese: "Người chết"
      },
      {
        japanese: "死体",
        romaji: "Shitai",
        vietnamese: "Thi thể"
      }
    ]
  },
  {
    id: 249,
    kanji: "医",
    lesson: 10,
    imageUrl: "/images/kanji/249_doctor_medicine_3d.png",
    onyomi: "イ",
    onyomiRomaji: "i",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Y, Bác sĩ",
    sinoVietnamese: "Y",
    radicals: "匚 (phương) + 矢 (thỉ)",
    mnemonic: "Bác sĩ lấy mũi tên (矢) ra khỏi hộp (匚).",
    examples: [
      {
        japanese: "医者",
        romaji: "Isha",
        vietnamese: "Bác sĩ"
      },
      {
        japanese: "医学",
        romaji: "Igaku",
        vietnamese: "Y học"
      },
      {
        japanese: "医院",
        romaji: "Iin",
        vietnamese: "Bệnh viện tư"
      },
      {
        japanese: "医療",
        romaji: "Iryou",
        vietnamese: "Y tế"
      }
    ]
  },
  {
    id: 250,
    kanji: "始",
    lesson: 11,
    imageUrl: "/images/kanji/250_begin_3d.png",
    onyomi: "シ",
    onyomiRomaji: "shi",
    kunyomi: "はじ・まる、はじ・める",
    kunyomiRomaji: "haji-maru, haji-meru",
    meaning: "Thủy, Bắt đầu",
    sinoVietnamese: "Thủy",
    radicals: "女 (nữ) + 台 (đài)",
    mnemonic: "Người nữ (女) đứng trên bục (台) bắt đầu buổi lễ.",
    examples: [
      {
        japanese: "始まります",
        romaji: "Hajimarimasu",
        vietnamese: "Bắt đầu (tự động từ)"
      },
      {
        japanese: "始めます",
        romaji: "Hajimemasu",
        vietnamese: "Bắt đầu (tha động từ)"
      },
      {
        japanese: "開始",
        romaji: "Kaishi",
        vietnamese: "Khai mạc, bắt đầu"
      },
      {
        japanese: "始発",
        romaji: "Shihatsu",
        vietnamese: "Chuyến tàu đầu tiên"
      }
    ]
  },
  {
    id: 251,
    kanji: "終",
    lesson: 11,
    imageUrl: "/images/kanji/251_end_3d.png",
    onyomi: "シュウ",
    onyomiRomaji: "shuu",
    kunyomi: "お・わる、お・える",
    kunyomiRomaji: "o-waru, o-eru",
    meaning: "Chung, Kết thúc",
    sinoVietnamese: "Chung",
    radicals: "糸 (mịch) + 冬 (đông)",
    mnemonic: "Sợi chỉ (糸) mùa đông (冬) là kết thúc năm.",
    examples: [
      {
        japanese: "終わります",
        romaji: "Owarimasu",
        vietnamese: "Kết thúc"
      },
      {
        japanese: "終わり",
        romaji: "Owari",
        vietnamese: "Sự kết thúc"
      },
      {
        japanese: "最終",
        romaji: "Saishuu",
        vietnamese: "Cuối cùng"
      },
      {
        japanese: "終電",
        romaji: "Shuuden",
        vietnamese: "Chuyến tàu cuối"
      }
    ]
  },
  {
    id: 252,
    kanji: "研",
    lesson: 12,
    imageUrl: "/images/kanji/252_sharpen_study_3d.png",
    onyomi: "ケン",
    onyomiRomaji: "ken",
    kunyomi: "と・ぐ",
    kunyomiRomaji: "to-gu",
    meaning: "Nghiên, Mài",
    sinoVietnamese: "Nghiên",
    radicals: "石 (thạch) + 开 (khai)",
    mnemonic: "Mài đá (石) để mở (开) đường.",
    examples: [
      {
        japanese: "研究",
        romaji: "Kenkyuu",
        vietnamese: "Nghiên cứu"
      },
      {
        japanese: "研ぎます",
        romaji: "Togimasu",
        vietnamese: "Mài (dao)"
      },
      {
        japanese: "研修",
        romaji: "Kenshuu",
        vietnamese: "Đào tạo, tu nghiệp"
      }
    ]
  },
  {
    id: 253,
    kanji: "究",
    lesson: 12,
    imageUrl: "/images/kanji/253_research_3d.png",
    onyomi: "キュウ",
    onyomiRomaji: "kyuu",
    kunyomi: "きわ・める",
    kunyomiRomaji: "kiwa-meru",
    meaning: "Cứu, Nghiên cứu",
    sinoVietnamese: "Cứu",
    radicals: "穴 (huyệt) + 九 (cửu)",
    mnemonic: "Nghiên cứu chín (九) cái lỗ (穴).",
    examples: [
      {
        japanese: "研究",
        romaji: "Kenkyuu",
        vietnamese: "Nghiên cứu"
      },
      {
        japanese: "究明",
        romaji: "Kyuumei",
        vietnamese: "Điều tra rõ"
      }
    ]
  },
  {
    id: 254,
    kanji: "留",
    lesson: 18,
    imageUrl: "/images/kanji/254_stay_3d.png",
    onyomi: "リュウ、ル",
    onyomiRomaji: "ryuu, ru",
    kunyomi: "と・める、と・まる",
    kunyomiRomaji: "to-meru, to-maru",
    meaning: "Lưu, Ở lại",
    sinoVietnamese: "Lưu",
    radicals: "卯 (mão) + 田 (điền)",
    mnemonic: "Ở lại ruộng (田) vào giờ Mão (卯).",
    examples: [
      {
        japanese: "留学生",
        romaji: "Ryuugakusei",
        vietnamese: "Du học sinh"
      },
      {
        japanese: "留守",
        romaji: "Rusu",
        vietnamese: "Vắng nhà"
      },
      {
        japanese: "保留",
        romaji: "Horyuu",
        vietnamese: "Bảo lưu, giữ lại"
      },
      {
        japanese: "書留",
        romaji: "Kakitome",
        vietnamese: "Thư bảo đảm"
      }
    ]
  },
  {
    id: 255,
    kanji: "有",
    lesson: 9,
    imageUrl: "/images/kanji/255_have_exist_3d.png",
    onyomi: "ユウ、ウ",
    onyomiRomaji: "yuu, u",
    kunyomi: "あ・る",
    kunyomiRomaji: "a-ru",
    meaning: "Hữu, Có",
    sinoVietnamese: "Hữu",
    radicals: "𠂇 (tả) + 月 (nguyệt)",
    mnemonic: "Tay trái (𠂇) cầm trăng (月) là sở hữu.",
    examples: [
      {
        japanese: "有名な",
        romaji: "Yuumei na",
        vietnamese: "Nổi tiếng"
      },
      {
        japanese: "有料",
        romaji: "Yuuryou",
        vietnamese: "Có phí"
      },
      {
        japanese: "有能な",
        romaji: "Yuunou na",
        vietnamese: "Có năng lực"
      },
      {
        japanese: "所有",
        romaji: "Shoyuu",
        vietnamese: "Sở hữu"
      }
    ]
  },
  {
    id: 256,
    kanji: "産",
    lesson: 14,
    imageUrl: "/images/kanji/256_product_birth_3d.png",
    onyomi: "サン",
    onyomiRomaji: "san",
    kunyomi: "う・む、う・まれる",
    kunyomiRomaji: "u-mu, u-mareru",
    meaning: "Sản, Sản xuất",
    sinoVietnamese: "Sản",
    radicals: "立 (lập) + 生 (sinh)",
    mnemonic: "Đứng (立) xem sinh (生) sản.",
    examples: [
      {
        japanese: "生産",
        romaji: "Seisan",
        vietnamese: "Sản xuất"
      },
      {
        japanese: "産業",
        romaji: "Sangyou",
        vietnamese: "Công nghiệp"
      },
      {
        japanese: "お土産",
        romaji: "Omiyage",
        vietnamese: "Quà đặc sản"
      },
      {
        japanese: "財産",
        romaji: "Zaisan",
        vietnamese: "Tài sản"
      }
    ]
  },
  {
    id: 257,
    kanji: "業",
    lesson: 14,
    imageUrl: "/images/kanji/257_business_work_3d.png",
    onyomi: "ギョウ、ゴウ",
    onyomiRomaji: "gyou, gou",
    kunyomi: "わざ",
    kunyomiRomaji: "waza",
    meaning: "Nghiệp, Công nghiệp",
    sinoVietnamese: "Nghiệp",
    radicals: "业 (nghiệp) + 未 (vị)",
    mnemonic: "Công nghiệp (业) chưa (未) hoàn thành.",
    examples: [
      {
        japanese: "産業",
        romaji: "Sangyou",
        vietnamese: "Công nghiệp"
      },
      {
        japanese: "授業",
        romaji: "Jugyou",
        vietnamese: "Giờ học"
      },
      {
        japanese: "卒業",
        romaji: "Sotsugyou",
        vietnamese: "Tốt nghiệp"
      },
      {
        japanese: "企業",
        romaji: "Kigyou",
        vietnamese: "Doanh nghiệp"
      }
    ]
  },
  {
    id: 258,
    kanji: "薬",
    lesson: 17,
    imageUrl: "/images/kanji/258_medicine_3d.png",
    onyomi: "ヤク",
    onyomiRomaji: "yaku",
    kunyomi: "くすり",
    kunyomiRomaji: "kusuri",
    meaning: "Dược, Thuốc",
    sinoVietnamese: "Dược",
    radicals: "艹 (thảo) + 楽 (lạc)",
    mnemonic: "Cỏ (艹) làm người ta vui (楽) là thuốc.",
    examples: [
      {
        japanese: "薬",
        romaji: "Kusuri",
        vietnamese: "Thuốc"
      },
      {
        japanese: "薬屋",
        romaji: "Kusuriya",
        vietnamese: "Hiệu thuốc"
      },
      {
        japanese: "目薬",
        romaji: "Megusuri",
        vietnamese: "Thuốc nhỏ mắt"
      },
      {
        japanese: "薬局",
        romaji: "Yakkyoku",
        vietnamese: "Hiệu thuốc tây"
      }
    ]
  },
  {
    id: 259,
    kanji: "働",
    lesson: 31,
    imageUrl: "/images/kanji/259_work_3d.png",
    onyomi: "ドウ",
    onyomiRomaji: "dou",
    kunyomi: "はたら・く",
    kunyomiRomaji: "hatara-ku",
    meaning: "Động, Làm việc",
    sinoVietnamese: "Động",
    radicals: "亻(nhân) + 動 (động)",
    mnemonic: "Người (亻) chuyển động (動) là làm việc.",
    examples: [
      {
        japanese: "働きます",
        romaji: "Hatarakimasu",
        vietnamese: "Làm việc"
      },
      {
        japanese: "労働",
        romaji: "Roudou",
        vietnamese: "Lao động"
      }
    ]
  },
  {
    id: 260,
    kanji: "員",
    lesson: 8,
    imageUrl: "/images/kanji/260_member_3d.png",
    onyomi: "イン",
    onyomiRomaji: "in",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "Viên, Nhân viên",
    sinoVietnamese: "Viên",
    radicals: "口 (khẩu) + 貝 (bối)",
    mnemonic: "Nhân viên chỉ biết mở mồm (口) đòi tiền (貝).",
    examples: [
      {
        japanese: "会社員",
        romaji: "Kaishain",
        vietnamese: "Nhân viên công ty"
      },
      {
        japanese: "店員",
        romaji: "Tenin",
        vietnamese: "Nhân viên cửa hàng"
      },
      {
        japanese: "会員",
        romaji: "Kaiin",
        vietnamese: "Hội viên"
      },
      {
        japanese: "全員",
        romaji: "Zenin",
        vietnamese: "Tất cả mọi người"
      }
    ]
  },
  {
    id: 261,
    kanji: "士",
    lesson: 32,
    imageUrl: "/images/kanji/261_samurai_3d.png",
    onyomi: "シ",
    kunyomi: "",
    meaning: "Sĩ, Chiến sĩ",
    sinoVietnamese: "Sĩ",
    radicals: "士 (sĩ)",
    mnemonic: "Kẻ sĩ.",
    examples: [
      {
        japanese: "武士",
        romaji: "Bushi",
        vietnamese: "Võ sĩ"
      },
      {
        japanese: "紳士",
        romaji: "Shinshi",
        vietnamese: "Quý ông"
      },
      {
        japanese: "介護士",
        romaji: "Kaigoshi",
        vietnamese: "Nhân viên chăm sóc"
      }
    ]
  },
  {
    id: 262,
    kanji: "仕",
    lesson: 8,

    imageUrl: "/images/kanji/262_serve_3d.png",
    onyomi: "シ、ジ",
    kunyomi: "つか・える",
    meaning: "Sĩ, Phục vụ",
    sinoVietnamese: "Sĩ",
    radicals: "亻(nhân) + 士 (sĩ)",
    mnemonic: "Người (亻) làm kẻ sĩ (士) phục vụ.",
    examples: [
      {
        japanese: "仕事",
        romaji: "Shigoto",
        vietnamese: "Công việc"
      },
      {
        japanese: "仕方",
        romaji: "Shikata",
        vietnamese: "Cách làm"
      },
      {
        japanese: "仕上げます",
        romaji: "Shiagemasu",
        vietnamese: "Hoàn thành"
      }
    ]
  },
  {
    id: 263,
    kanji: "事",
    lesson: 8,

    imageUrl: "/images/kanji/263_matter_3d.png",
    onyomi: "ジ、ズ",
    kunyomi: "こと",
    meaning: "Sự, Việc",
    sinoVietnamese: "Sự",
    radicals: "一 (nhất) + 口 (khẩu) + 彐 (kệ)",
    mnemonic: "Miệng (口) nói một (一) việc (事) kệ (彐) nó.",
    examples: [
      {
        japanese: "仕事",
        romaji: "Shigoto",
        vietnamese: "Công việc"
      },
      {
        japanese: "事",
        romaji: "Koto",
        vietnamese: "Việc"
      },
      {
        japanese: "食事",
        romaji: "Shokuji",
        vietnamese: "Bữa ăn"
      },
      {
        japanese: "事故",
        romaji: "Jiko",
        vietnamese: "Tai nạn"
      },
      {
        japanese: "用事",
        romaji: "Youji",
        vietnamese: "Việc bận"
      }
    ]
  },
  {
    id: 264,
    kanji: "図",
    lesson: 8,

    imageUrl: "/images/kanji/264_map_3d.png",
    onyomi: "ズ、ト",
    kunyomi: "はか・る",
    meaning: "Đồ, Bản đồ",
    sinoVietnamese: "Đồ",
    radicals: "囗 (vi) + 乂 (ngải)",
    mnemonic: "Trong vùng (囗) đánh dấu (乂) là bản đồ.",
    examples: [
      {
        japanese: "地図",
        romaji: "Chizu",
        vietnamese: "Bản đồ"
      },
      {
        japanese: "図書館",
        romaji: "Toshokan",
        vietnamese: "Thư viện"
      },
      {
        japanese: "合図",
        romaji: "Aizu",
        vietnamese: "Dấu hiệu"
      },
      {
        japanese: "図",
        romaji: "Zu",
        vietnamese: "Hình vẽ, biểu đồ"
      }
    ]
  },
  {
    id: 265,
    kanji: "合",
    lesson: 13,

    imageUrl: "/images/kanji/265_fit_3d.png",
    onyomi: "ゴウ、ガッ",
    kunyomi: "あ・う、あ・わせる",
    meaning: "Hợp, Vừa",
    sinoVietnamese: "Hợp",
    radicals: "人 (nhân) + 一 (nhất) + 口 (khẩu)",
    mnemonic: "Người (人) một (一) nhà (口) hợp nhau.",
    examples: [
      {
        japanese: "合います",
        romaji: "Aimasu",
        vietnamese: "Hợp, vừa"
      },
      {
        japanese: "試合",
        romaji: "Shiai",
        vietnamese: "Trận đấu"
      },
      {
        japanese: "間に合います",
        romaji: "Manioaimasu",
        vietnamese: "Kịp giờ"
      },
      {
        japanese: "都合",
        romaji: "Tsugou",
        vietnamese: "Hoàn cảnh, điều kiện"
      }
    ]
  },
  {
    id: 266,
    kanji: "格",
    lesson: 19,

    imageUrl: "/images/kanji/266_status_3d.png",
    onyomi: "カク、コウ",
    kunyomi: "",
    meaning: "Cách, Tính cách",
    sinoVietnamese: "Cách",
    radicals: "木 (mộc) + 各 (các)",
    mnemonic: "Cây (木) có tính cách (各) riêng.",
    examples: [
      {
        japanese: "合格",
        romaji: "Goukaku",
        vietnamese: "Đỗ, trúng tuyển"
      },
      {
        japanese: "性格",
        romaji: "Seikaku",
        vietnamese: "Tính cách"
      },
      {
        japanese: "価格",
        romaji: "Kakaku",
        vietnamese: "Giá cả"
      }
    ]
  },
  {
    id: 267,
    kanji: "祝",
    lesson: 20,

    imageUrl: "/images/kanji/267_celebrate_3d.png",
    onyomi: "シュク、シュウ",
    kunyomi: "いわ・う",
    meaning: "Chúc, Chúc mừng",
    sinoVietnamese: "Chúc",
    radicals: "ネ (kỳ) + 兄 (huynh)",
    mnemonic: "Cầu thần (ネ) chúc anh (兄).",
    examples: [
      {
        japanese: "祝います",
        romaji: "Iwaimasu",
        vietnamese: "Chúc mừng"
      },
      {
        japanese: "祝日",
        romaji: "Shukujitsu",
        vietnamese: "Ngày lễ"
      },
      {
        japanese: "お祝い",
        romaji: "Oiwai",
        vietnamese: "Lời chúc, quà mừng"
      }
    ]
  },
  {
    id: 268,
    kanji: "選",
    lesson: 29,
    imageUrl: "/images/kanji/268_select_3d.png",
    onyomi: "セン",
    kunyomi: "えら・ぶ",
    meaning: "Tuyển, Chọn",
    sinoVietnamese: "Tuyển",
    radicals: "辶 (xước) + 巽 (tốn)",
    mnemonic: "Đi (辶) chọn (巽) người.",
    examples: [
      {
        japanese: "選びます",
        romaji: "Erabimasu",
        vietnamese: "Chọn"
      },
      {
        japanese: "選手",
        romaji: "Senshu",
        vietnamese: "Tuyển thủ"
      },
      {
        japanese: "選挙",
        romaji: "Senkyo",
        vietnamese: "Bầu cử"
      }
    ]
  },
  {
    id: 269,
    kanji: "誕",
    lesson: 17,
    imageUrl: "/images/kanji/269_birth_3d.png",
    onyomi: "タン",
    kunyomi: "",
    meaning: "Đản, Sinh ra",
    sinoVietnamese: "Đản",
    radicals: "言 (ngôn) + 延 (duyên)",
    mnemonic: "Lời chúc (言) kéo dài (延) khi sinh ra.",
    examples: [
      {
        japanese: "誕生日",
        romaji: "Tanjoubi",
        vietnamese: "Sinh nhật"
      },
      {
        japanese: "誕生",
        romaji: "Tanjou",
        vietnamese: "Sự ra đời"
      }
    ]
  },
  {
    id: 270,
    kanji: "結",
    lesson: 17,
    imageUrl: "/images/kanji/270_tie_3d.png",
    onyomi: "ケツ",
    kunyomi: "むす・ぶ、ゆ・う",
    meaning: "Kết, Kết hôn",
    sinoVietnamese: "Kết",
    radicals: "糸 (mịch) + 吉 (cát)",
    mnemonic: "Buộc chỉ (糸) cầu điều lành (吉).",
    examples: [
      {
        japanese: "結婚",
        romaji: "Kekkon",
        vietnamese: "Kết hôn"
      },
      {
        japanese: "結果",
        romaji: "Kekka",
        vietnamese: "Kết quả"
      },
      {
        japanese: "結びます",
        romaji: "Musubimasu",
        vietnamese: "Buộc, kết nối"
      },
      {
        japanese: "結論",
        romaji: "Ketsuron",
        vietnamese: "Kết luận"
      }
    ]
  },
  {
    id: 271,
    kanji: "婚",
    lesson: 17,
    imageUrl: "/images/kanji/271_marriage_3d.png",
    onyomi: "コン",
    kunyomi: "",
    meaning: "Hôn, Kết hôn",
    sinoVietnamese: "Hôn",
    radicals: "女 (nữ) + 昏 (hôn)",
    mnemonic: "Cưới (女) lúc hoàng hôn (昏).",
    examples: [
      {
        japanese: "結婚",
        romaji: "Kekkon",
        vietnamese: "Kết hôn"
      },
      {
        japanese: "婚約",
        romaji: "Konyaku",
        vietnamese: "Đính hôn"
      },
      {
        japanese: "新婚",
        romaji: "Shinkon",
        vietnamese: "Tân hôn"
      }
    ]
  },
  {
    id: 272,
    kanji: "計",
    lesson: 17,
    imageUrl: "/images/kanji/272_measure_3d.png",
    onyomi: "ケイ",
    kunyomi: "はか・る",
    meaning: "Kế, Kế hoạch",
    sinoVietnamese: "Kế",
    radicals: "言 (ngôn) + 十 (thập)",
    mnemonic: "Nói (言) mười (十) lần tính toán.",
    examples: [
      {
        japanese: "計画",
        romaji: "Keikaku",
        vietnamese: "Kế hoạch"
      },
      {
        japanese: "時計",
        romaji: "Tokei",
        vietnamese: "Đồng hồ"
      },
      {
        japanese: "計算",
        romaji: "Keisan",
        vietnamese: "Tính toán"
      },
      {
        japanese: "合計",
        romaji: "Goukei",
        vietnamese: "Tổng cộng"
      }
    ]
  },
  {
    id: 273,
    kanji: "幸",
    lesson: 18,
    imageUrl: "/images/kanji/273_happy_3d.png",
    onyomi: "コウ",
    kunyomi: "さいわ・い、さち、しあわ・せ",
    meaning: "Hạnh, Hạnh phúc",
    sinoVietnamese: "Hạnh",
    radicals: "土 (thổ) + ￥ (yên)",
    mnemonic: "Đất (土) tiền (￥) là hạnh phúc.",
    examples: [
      {
        japanese: "幸せな",
        romaji: "Shiawase na",
        vietnamese: "Hạnh phúc"
      },
      {
        japanese: "幸福",
        romaji: "Koufuku",
        vietnamese: "Hạnh phúc"
      },
      {
        japanese: "幸運",
        romaji: "Kouun",
        vietnamese: "May mắn"
      },
      {
        japanese: "不幸",
        romaji: "Fukou",
        vietnamese: "Bất hạnh"
      }
    ]
  },
  {
    id: 274,
    kanji: "困",
    lesson: 18,
    imageUrl: "/images/kanji/274_trouble_3d.png",
    onyomi: "コン",
    kunyomi: "こま・る",
    meaning: "Khốn, Khó khăn",
    sinoVietnamese: "Khốn",
    radicals: "囗 (vi) + 木 (mộc)",
    mnemonic: "Cây (木) bị nhốt (囗) thì khốn khó.",
    examples: [
      {
        japanese: "困ります",
        romaji: "Komarimasu",
        vietnamese: "Khó khăn, khốn đốn"
      },
      {
        japanese: "困難",
        romaji: "Konnan",
        vietnamese: "Khó khăn"
      },
      {
        japanese: "貧困",
        romaji: "Hinkon",
        vietnamese: "Nghèo khó"
      }
    ]
  },
  {
    id: 275,
    kanji: "消",
    lesson: 20,
    imageUrl: "/images/kanji/275_extinguish_3d.png",
    onyomi: "ショウ",
    kunyomi: "き・える、け・す",
    meaning: "Tiêu, Tắt/Xóa",
    sinoVietnamese: "Tiêu",
    radicals: "氵(thủy) + 肖 (tiêu)",
    mnemonic: "Nước (氵) tiêu (肖) lửa.",
    examples: [
      {
        japanese: "消します",
        romaji: "Keshimasu",
        vietnamese: "Tắt, xóa"
      },
      {
        japanese: "消えます",
        romaji: "Kiemasu",
        vietnamese: "Biến mất, tắt"
      },
      {
        japanese: "消しゴム",
        romaji: "Keshigomu",
        vietnamese: "Cục tẩy"
      },
      {
        japanese: "消化",
        romaji: "Shouka",
        vietnamese: "Tiêu hóa"
      }
    ]
  },
  {
    id: 276,
    kanji: "防",
    lesson: 20,
    imageUrl: "/images/kanji/276_prevent_3d.png",
    onyomi: "ボウ",
    kunyomi: "ふせ・ぐ",
    meaning: "Phòng, Phòng chống",
    sinoVietnamese: "Phòng",
    radicals: "阝(phụ) + 方 (phương)",
    mnemonic: "Phòng thủ đồi (阝) bốn phương (方).",
    examples: [
      {
        japanese: "予防",
        romaji: "Yobou",
        vietnamese: "Dự phòng"
      },
      {
        japanese: "消防車",
        romaji: "Shoubousha",
        vietnamese: "Xe cứu hỏa"
      },
      {
        japanese: "防止",
        romaji: "Boushi",
        vietnamese: "Đề phòng, ngăn chặn"
      }
    ]
  },
  {
    id: 277,
    kanji: "救",
    lesson: 18,
    imageUrl: "/images/kanji/277_save_3d.png",
    onyomi: "キュウ",
    kunyomi: "すく・う",
    meaning: "Cứu, Cứu giúp",
    sinoVietnamese: "Cứu",
    radicals: "求 (cầu) + 攵 (phộc)",
    mnemonic: "Cầu (求) bị đánh (攵) thì cứu.",
    examples: [
      {
        japanese: "救います",
        romaji: "Sukuimasu",
        vietnamese: "Cứu giúp"
      },
      {
        japanese: "救急車",
        romaji: "Kyuukyuusha",
        vietnamese: "Xe cấp cứu"
      },
      {
        japanese: "救助",
        romaji: "Kyuujo",
        vietnamese: "Cứu trợ"
      }
    ]
  },
  {
    id: 278,
    kanji: "警",
    lesson: 20,
    imageUrl: "/images/kanji/278_police_3d.png",
    onyomi: "ケイ",
    kunyomi: "",
    meaning: "Cảnh, Cảnh sát",
    sinoVietnamese: "Cảnh",
    radicals: "敬 (kính) + 言 (ngôn)",
    mnemonic: "Lời (言) cảnh báo cung kính (敬).",
    examples: [
      {
        japanese: "警察",
        romaji: "Keisatsu",
        vietnamese: "Cảnh sát"
      },
      {
        japanese: "警官",
        romaji: "Keikan",
        vietnamese: "Cảnh sát viên"
      },
      {
        japanese: "警告",
        romaji: "Keikoku",
        vietnamese: "Cảnh cáo"
      }
    ]
  },
  {
    id: 279,
    kanji: "察",
    lesson: 20,
    imageUrl: "/images/kanji/279_inspect_3d.png",
    onyomi: "サツ",
    kunyomi: "",
    meaning: "Sát, Cảnh sát",
    sinoVietnamese: "Sát",
    radicals: "宀 (miên) + 祭 (tế)",
    mnemonic: "Tế (祭) trong nhà (宀) phải quan sát.",
    examples: [
      {
        japanese: "警察",
        romaji: "Keisatsu",
        vietnamese: "Cảnh sát"
      },
      {
        japanese: "観察",
        romaji: "Kansatsu",
        vietnamese: "Quan sát"
      },
      {
        japanese: "診察",
        romaji: "Shinsatsu",
        vietnamese: "Khám bệnh"
      }
    ]
  },
  {
    id: 280,
    kanji: "故",
    lesson: 20,
    imageUrl: "/images/kanji/280_incident_3d.png",
    onyomi: "コ",
    kunyomi: "ゆえ",
    meaning: "Cố, Sự cố",
    sinoVietnamese: "Cố",
    radicals: "古 (cổ) + 攵 (phộc)",
    mnemonic: "Chuyện cũ (古) bị đánh (攵) thành sự cố.",
    examples: [
      {
        japanese: "事故",
        romaji: "Jiko",
        vietnamese: "Tai nạn"
      },
      {
        japanese: "故障",
        romaji: "Koshou",
        vietnamese: "Hỏng hóc"
      },
      {
        japanese: "故郷",
        romaji: "Kokyou",
        vietnamese: "Quê hương"
      }
    ]
  },
  {
    id: 281,
    kanji: "別",
    lesson: 18,
    imageUrl: "/images/kanji/281_separate_3d.png",
    onyomi: "ベツ",
    kunyomi: "わか・れる",
    meaning: "Biệt, Đặc biệt",
    sinoVietnamese: "Biệt",
    radicals: "另 (lăng) + 刂 (đao)",
    mnemonic: "Dao (刂) chia biệt (另).",
    examples: [
      {
        japanese: "特別",
        romaji: "Tokubetsu",
        vietnamese: "Đặc biệt"
      },
      {
        japanese: "別れます",
        romaji: "Wakaremasu",
        vietnamese: "Chia tay"
      },
      {
        japanese: "別々に",
        romaji: "Betsubetsu ni",
        vietnamese: "Riêng biệt"
      },
      {
        japanese: "区別",
        romaji: "Kubetsu",
        vietnamese: "Phân biệt"
      }
    ]
  },
  {
    id: 282,
    kanji: "答",
    lesson: 13,
    imageUrl: "/images/kanji/282_answer_3d.png",
    onyomi: "トウ",
    kunyomi: "こた・える、こた・え",
    meaning: "Đáp, Trả lời",
    sinoVietnamese: "Đáp",
    radicals: "竹 (trúc) + 合 (hợp)",
    mnemonic: "Trúc (竹) hợp (合) thành câu trả lời.",
    examples: [
      {
        japanese: "答えます",
        romaji: "Kotaemasu",
        vietnamese: "Trả lời"
      },
      {
        japanese: "答え",
        romaji: "Kotae",
        vietnamese: "Câu trả lời"
      },
      {
        japanese: "回答",
        romaji: "Kaitou",
        vietnamese: "Giải đáp"
      }
    ]
  },
  {
    id: 283,
    kanji: "正",
    lesson: 18,
    imageUrl: "/images/kanji/283_correct_3d.png",
    onyomi: "セイ、ショウ",
    kunyomi: "ただ・しい",
    meaning: "Chính, Đúng",
    sinoVietnamese: "Chính",
    radicals: "一 (nhất) + 止 (chỉ)",
    mnemonic: "Một (一) lần dừng (止) sửa cho đúng.",
    examples: [
      {
        japanese: "正しい",
        romaji: "Tadashii",
        vietnamese: "Đúng"
      },
      {
        japanese: "お正月",
        romaji: "Oshougatsu",
        vietnamese: "Tết"
      },
      {
        japanese: "正確な",
        romaji: "Seikaku na",
        vietnamese: "Chính xác"
      },
      {
        japanese: "正式な",
        romaji: "Seishiki na",
        vietnamese: "Chính thức"
      }
    ]
  },
  {
    id: 284,
    kanji: "同",
    lesson: 9,
    imageUrl: "/images/kanji/284_same_3d.png",
    onyomi: "ドウ",
    kunyomi: "おな・じ",
    meaning: "Đồng, Giống",
    sinoVietnamese: "Đồng",
    radicals: "冂 (khuynh) + 一 (nhất) + 口 (khẩu)",
    mnemonic: "Cùng một (一) miệng (口) trong biên giới (冂).",
    examples: [
      {
        japanese: "同じ",
        romaji: "Onaji",
        vietnamese: "Giống"
      },
      {
        japanese: "同時",
        romaji: "Douji",
        vietnamese: "Đồng thời"
      },
      {
        japanese: "同僚",
        romaji: "Douryou",
        vietnamese: "Đồng nghiệp"
      },
      {
        japanese: "共同",
        romaji: "Kyoudou",
        vietnamese: "Chung, cộng tác"
      }
    ]
  },
  {
    id: 285,
    kanji: "集",
    lesson: 18,
    imageUrl: "/images/kanji/285_gather_3d.png",
    onyomi: "シュウ",
    kunyomi: "あつ・まる、あつ・める",
    meaning: "Tập, Tập hợp",
    sinoVietnamese: "Tập",
    radicals: "隹 (chuy) + 木 (mộc)",
    mnemonic: "Chim (隹) đậu trên cây (木) tụ tập.",
    examples: [
      {
        japanese: "集まります",
        romaji: "Atsumarimasu",
        vietnamese: "Tập trung (tự động từ)"
      },
      {
        japanese: "集めます",
        romaji: "Atsumemasu",
        vietnamese: "Sưu tầm, thu thập"
      },
      {
        japanese: "集合",
        romaji: "Shuugou",
        vietnamese: "Tập hợp"
      },
      {
        japanese: "集中",
        romaji: "Shuuchuu",
        vietnamese: "Tập trung"
      }
    ]
  },
  {
    id: 286,
    kanji: "特",
    lesson: 15,
    imageUrl: "/images/kanji/286_special_3d.png",
    onyomi: "トク",
    kunyomi: "",
    meaning: "Đặc, Đặc biệt",
    sinoVietnamese: "Đặc",
    radicals: "牛 (ngưu) + 寺 (tự)",
    mnemonic: "Bò (牛) ở chùa (寺) là đặc biệt.",
    examples: [
      {
        japanese: "特別な",
        romaji: "Tokubetsu na",
        vietnamese: "Đặc biệt"
      },
      {
        japanese: "特に",
        romaji: "Tokuni",
        vietnamese: "Đặc biệt là"
      },
      {
        japanese: "特急",
        romaji: "Tokkyuu",
        vietnamese: "Tàu tốc hành"
      },
      {
        japanese: "特徴",
        romaji: "Tokuchou",
        vietnamese: "Đặc trưng"
      }
    ]
  },
  {
    id: 287,
    kanji: "不",
    lesson: 18,
    imageUrl: "/images/kanji/287_not_3d.png",
    onyomi: "フ、ブ",
    kunyomi: "",
    meaning: "Bất, Không",
    sinoVietnamese: "Bất",
    radicals: "一 (nhất) + 不 (bất)",
    mnemonic: "Hình chim bay lên trời không xuống (Bất).",
    examples: [
      {
        japanese: "不便な",
        romaji: "Fuben na",
        vietnamese: "Bất tiện"
      },
      {
        japanese: "不安な",
        romaji: "Fuan na",
        vietnamese: "Bất an"
      },
      {
        japanese: "不足",
        romaji: "Fusoku",
        vietnamese: "Thiếu"
      },
      {
        japanese: "不思議な",
        romaji: "Fushigi na",
        vietnamese: "Kỳ lạ, huyền bí"
      }
    ]
  },
  {
    id: 288,
    kanji: "便",
    lesson: 23,
    imageUrl: "/images/kanji/288_convenience_3d.png",
    onyomi: "ベン、ビン",
    kunyomi: "たよ・り",
    meaning: "Tiện, Tiện lợi",
    sinoVietnamese: "Tiện",
    radicals: "亻(nhân) + 更 (canh)",
    mnemonic: "Người (亻) canh (更) tiện lợi.",
    examples: [
      {
        japanese: "便利な",
        romaji: "Benri na",
        vietnamese: "Tiện lợi"
      },
      {
        japanese: "不便な",
        romaji: "Fuben na",
        vietnamese: "Bất tiện"
      },
      {
        japanese: "郵便局",
        romaji: "Yuubinkyoku",
        vietnamese: "Bưu điện"
      },
      {
        japanese: "便",
        romaji: "Bin",
        vietnamese: "Chuyến bay"
      }
    ]
  },
  {
    id: 289,
    kanji: "声",
    lesson: 19,
    imageUrl: "/images/kanji/289_voice_3d.png",
    onyomi: "セイ",
    kunyomi: "こえ",
    meaning: "Thanh, Tiếng",
    sinoVietnamese: "Thanh",
    radicals: "士 (sĩ) + 尸 (thi)",
    mnemonic: "Kẻ sĩ (士) đứng trên lá cờ (尸) hô lớn tiếng (声).",
    examples: [
      {
        japanese: "声",
        romaji: "Koe",
        vietnamese: "Tiếng, giọng nói"
      },
      {
        japanese: "大声",
        romaji: "Oogoe",
        vietnamese: "Giọng lớn"
      },
      {
        japanese: "音声",
        romaji: "Onsei",
        vietnamese: "Âm thanh"
      }
    ]
  },
  {
    id: 290,
    kanji: "曜",
    lesson: 7,
    imageUrl: "/images/kanji/290_weekday_3d.png",
    onyomi: "ヨウ",
    kunyomi: "",
    meaning: "Diệu, Ngày trong tuần",
    sinoVietnamese: "Diệu",
    radicals: "日 (nhật) + 翟 (địch)",
    mnemonic: "Ngày (日) con chim (翟) hót vang lừng là ngày trong tuần (曜).",
    examples: [
      {
        japanese: "日曜日",
        romaji: "Nichiyoubi",
        vietnamese: "Chủ nhật"
      },
      {
        japanese: "曜日",
        romaji: "Youbi",
        vietnamese: "Thứ"
      }
    ]
  },
  {
    id: 291,
    kanji: "利",
    lesson: 23,
    imageUrl: "/images/kanji/291_profit_3d.png",
    onyomi: "リ",
    kunyomi: "き・く",
    meaning: "Lợi, Tiện lợi",
    sinoVietnamese: "Lợi",
    radicals: "禾 (hòa) + 刂 (đao)",
    mnemonic: "Dùng dao (刂) gặt lúa (禾) mang lại lợi ích (利).",
    examples: [
      {
        japanese: "便利な",
        romaji: "Benri na",
        vietnamese: "Tiện lợi"
      },
      {
        japanese: "利用します",
        romaji: "Riyou shimasu",
        vietnamese: "Sử dụng, tận dụng"
      },
      {
        japanese: "利益",
        romaji: "Rieki",
        vietnamese: "Lợi ích, lợi nhuận"
      },
      {
        japanese: "有利な",
        romaji: "Yuuri na",
        vietnamese: "Có lợi"
      }
    ]
  },
  {
    id: 292,
    kanji: "元",
    lesson: 9,
    imageUrl: "/images/kanji/292_origin_3d.png",
    onyomi: "ゲン、ガン",
    kunyomi: "もと",
    meaning: "Nguyên, Gốc",
    sinoVietnamese: "Nguyên",
    radicals: "二 (nhị) + 儿 (nhân)",
    mnemonic: "Hai (二) người (儿) cùng đi về nguồn gốc (元).",
    examples: [
      {
        japanese: "元気な",
        romaji: "Genki na",
        vietnamese: "Khỏe mạnh"
      },
      {
        japanese: "元日",
        romaji: "Ganjitsu",
        vietnamese: "Mùng 1 Tết"
      },
      {
        japanese: "足元",
        romaji: "Ashimoto",
        vietnamese: "Dưới chân"
      },
      {
        japanese: "地元",
        romaji: "Jimoto",
        vietnamese: "Địa phương"
      }
    ]
  },
  {
    id: 293,
    kanji: "配",
    lesson: 23,
    imageUrl: "/images/kanji/293_distribute_3d.png",
    onyomi: "ハイ",
    kunyomi: "くば・る",
    meaning: "Phối, Phân phối",
    sinoVietnamese: "Phối",
    radicals: "酉 (dậu) + 己 (kỷ)",
    mnemonic: "Người (己) đang phân phát rượu (酉) cho mọi người.",
    examples: [
      {
        japanese: "心配な",
        romaji: "Shinpai na",
        vietnamese: "Lo lắng"
      },
      {
        japanese: "配ります",
        romaji: "Kubarimasu",
        vietnamese: "Phân phát"
      },
      {
        japanese: "配達",
        romaji: "Haitatsu",
        vietnamese: "Phân phối, giao hàng"
      },
      {
        japanese: "支配",
        romaji: "Shihai",
        vietnamese: "Chi phối, cai trị"
      }
    ]
  },
  {
    id: 294,
    kanji: "痛",
    lesson: 19,
    imageUrl: "/images/kanji/294_pain_3d.png",
    onyomi: "ツウ",
    kunyomi: "いた・い、いた・む",
    meaning: "Thống, Đau",
    sinoVietnamese: "Thống",
    radicals: "疒 (bệnh) + 甬 (dũng)",
    mnemonic: "Bệnh (疒) lan tràn (甬) gây đau đớn.",
    examples: [
      {
        japanese: "痛い",
        romaji: "Itai",
        vietnamese: "Đau"
      },
      {
        japanese: "頭痛",
        romaji: "Zutsuu",
        vietnamese: "Đau đầu"
      },
      {
        japanese: "腹痛",
        romaji: "Fukutsuu",
        vietnamese: "Đau bụng"
      },
      {
        japanese: "鎮痛剤",
        romaji: "Chintsuuzai",
        vietnamese: "Thuốc giảm đau"
      }
    ]
  },
  {
    id: 295,
    kanji: "赤",
    lesson: 19,
    imageUrl: "/images/kanji/295_red_3d.png",
    onyomi: "セキ",
    kunyomi: "あか、あか・い",
    meaning: "Xích, Đỏ",
    sinoVietnamese: "Xích",
    radicals: "土 (thổ) + 火 (hỏa)",
    mnemonic: "Lửa (火) đốt cháy đất (土) thành màu đỏ.",
    examples: [
      {
        japanese: "赤い",
        romaji: "Akai",
        vietnamese: "Đỏ"
      },
      {
        japanese: "赤字",
        romaji: "Akaji",
        vietnamese: "Thâm hụt, lỗ (chữ đỏ)"
      },
      {
        japanese: "赤ちゃん",
        romaji: "Akachan",
        vietnamese: "Em bé"
      },
      {
        japanese: "赤道",
        romaji: "Sekidou",
        vietnamese: "Xích đạo"
      }
    ]
  },
  {
    id: 296,
    kanji: "青",
    lesson: 19,
    imageUrl: "/images/kanji/296_blue_3d.png",
    onyomi: "セイ",
    kunyomi: "あお、あお・い",
    meaning: "Thanh, Xanh dương",
    sinoVietnamese: "Thanh",
    radicals: "生 (sinh) + 月 (nguyệt)",
    mnemonic: "Sinh (生) ra dưới ánh trăng (月) nên có màu xanh.",
    examples: [
      {
        japanese: "青い",
        romaji: "Aoi",
        vietnamese: "Xanh dương"
      },
      {
        japanese: "青年",
        romaji: "Seinen",
        vietnamese: "Thanh niên"
      },
      {
        japanese: "青空",
        romaji: "Aozora",
        vietnamese: "Bầu trời xanh"
      },
      {
        japanese: "青信号",
        romaji: "Aoshingou",
        vietnamese: "Đèn xanh"
      }
    ]
  },
  {
    id: 297,
    kanji: "場",
    lesson: 23,
    imageUrl: "/images/kanji/297_place_3d.png",
    onyomi: "ジョウ",
    kunyomi: "ば",
    meaning: "Trường, Nơi chốn",
    sinoVietnamese: "Trường",
    radicals: "土 (thổ) + 昜 (dương)",
    mnemonic: "Nơi đất (土) có ánh dương (昜) chiếu vào.",
    examples: [
      {
        japanese: "場所",
        romaji: "Basho",
        vietnamese: "Địa điểm"
      },
      {
        japanese: "工場",
        romaji: "Koujou",
        vietnamese: "Nhà máy"
      },
      {
        japanese: "売り場",
        romaji: "Uriba",
        vietnamese: "Quầy bán hàng"
      },
      {
        japanese: "場合",
        romaji: "Baai",
        vietnamese: "Trường hợp"
      }
    ]
  },
  {
    id: 298,
    kanji: "戸",
    lesson: 19,
    imageUrl: "/images/kanji/298_door_3d.png",
    onyomi: "コ",
    kunyomi: "と",
    meaning: "Hộ, Cửa",
    sinoVietnamese: "Hộ",
    radicals: "戸 (hộ)",
    mnemonic: "Hình cánh cửa một cánh.",
    examples: [
      {
        japanese: "戸",
        romaji: "To",
        vietnamese: "Cửa"
      },
      {
        japanese: "井戸",
        romaji: "Ido",
        vietnamese: "Cái giếng"
      },
      {
        japanese: "神戸",
        romaji: "Koube",
        vietnamese: "Kobe (tên địa danh)"
      }
    ]
  },
  {
    id: 299,
    kanji: "所",
    lesson: 19,
    imageUrl: "/images/kanji/299_institute_3d.png",
    onyomi: "ショ",
    kunyomi: "ところ",
    meaning: "Sở, Nơi chốn",
    sinoVietnamese: "Sở",
    radicals: "戸 (hộ) + 斤 (cân)",
    mnemonic: "Nơi (所) để cái rìu (斤) cạnh cửa (戸).",
    examples: [
      {
        japanese: "所",
        romaji: "Tokoro",
        vietnamese: "Nơi chốn"
      },
      {
        japanese: "台所",
        romaji: "Daidokoro",
        vietnamese: "Nhà bếp"
      },
      {
        japanese: "住所",
        romaji: "Juusho",
        vietnamese: "Địa chỉ"
      },
      {
        japanese: "事務所",
        romaji: "Jimusho",
        vietnamese: "Văn phòng"
      }
    ]
  },
  {
    id: 300,
    kanji: "屋",
    lesson: 9,
    imageUrl: "/images/kanji/300_roof_shop_3d.png",
    onyomi: "オク",
    kunyomi: "や",
    meaning: "Ốc, Mái nhà, Cửa hàng",
    sinoVietnamese: "Ốc",
    radicals: "尸 (thi) + 至 (chí)",
    mnemonic: "Đến (至) dưới mái nhà (尸) để ở.",
    examples: [
      {
        japanese: "部屋",
        romaji: "Heya",
        vietnamese: "Căn phòng"
      },
      {
        japanese: "本屋",
        romaji: "Honya",
        vietnamese: "Hiệu sách"
      },
      {
        japanese: "屋上",
        romaji: "Okujou",
        vietnamese: "Sân thượng"
      },
      {
        japanese: "八百屋",
        romaji: "Yaoya",
        vietnamese: "Cửa hàng rau"
      }
    ]
  },
  {
    id: 301,
    kanji: "堂",
    lesson: 9,
    imageUrl: "/images/kanji/301_public_hall_3d.png",
    onyomi: "ドウ",
    kunyomi: "",
    meaning: "Đường, Nhà lớn",
    sinoVietnamese: "Đường",
    radicals: "尚 (thượng) + 土 (thổ)",
    mnemonic: "Trên mảnh đất (土) tôn quý (尚) có tòa nhà lớn (堂).",
    examples: [
      {
        japanese: "食堂",
        romaji: "Shokudou",
        vietnamese: "Nhà ăn"
      },
      {
        japanese: "公会堂",
        romaji: "Koukaidou",
        vietnamese: "Tòa thị chính"
      },
      {
        japanese: "講堂",
        romaji: "Koudou",
        vietnamese: "Giảng đường"
      }
    ]
  },
  {
    id: 302,
    kanji: "都",
    lesson: 19,
    imageUrl: "/images/kanji/302_metropolis_3d.png",
    onyomi: "ト、ツ",
    kunyomi: "みやこ",
    meaning: "Đô, Kinh đô",
    sinoVietnamese: "Đô",
    examples: [
      {
        japanese: "東京都",
        romaji: "Toukyouto",
        vietnamese: "Thủ đô Tokyo"
      },
      {
        japanese: "都会",
        romaji: "Tokai",
        vietnamese: "Thành thị"
      },
      {
        japanese: "都合",
        romaji: "Tsugou",
        vietnamese: "Hoàn cảnh, thuận tiện"
      },
      {
        japanese: "京都",
        romaji: "Kyouto",
        vietnamese: "Kyoto"
      }
    ]
  },
  {
    id: 303,
    kanji: "県",
    lesson: 19,
    imageUrl: "/images/kanji/303_prefecture_3d.png",
    onyomi: "ケン",
    kunyomi: "",
    meaning: "Huyện, Tỉnh",
    sinoVietnamese: "Huyện",
    examples: [
      {
        japanese: "県",
        romaji: "Ken",
        vietnamese: "Tỉnh"
      },
      {
        japanese: "県知事",
        romaji: "Kenchiji",
        vietnamese: "Tỉnh trưởng"
      },
      {
        japanese: "県庁",
        romaji: "Kenchou",
        vietnamese: "Ủy ban tỉnh"
      }
    ]
  },
  {
    id: 304,
    kanji: "区",
    lesson: 19,
    imageUrl: "/images/kanji/304_district_3d.png",
    onyomi: "ク",
    kunyomi: "",
    meaning: "Khu, Quận",
    sinoVietnamese: "Khu",
    examples: [
      {
        japanese: "区",
        romaji: "Ku",
        vietnamese: "Quận"
      },
      {
        japanese: "区役所",
        romaji: "Kuyakusho",
        vietnamese: "Ủy ban quận"
      },
      {
        japanese: "区別",
        romaji: "Kubetsu",
        vietnamese: "Phân biệt"
      },
      {
        japanese: "地区",
        romaji: "Chiku",
        vietnamese: "Khu vực"
      }
    ]
  },
  {
    id: 305,
    kanji: "市",
    lesson: 7,
    imageUrl: "/images/kanji/305_city_market_3d.png",
    onyomi: "シ",
    kunyomi: "いち",
    meaning: "Thị, Thành phố, Chợ",
    sinoVietnamese: "Thị",
    examples: [
      {
        japanese: "市",
        romaji: "Shi",
        vietnamese: "Thành phố"
      },
      {
        japanese: "市民",
        romaji: "Shimin",
        vietnamese: "Dân thành phố"
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
      }
    ]
  },
  {
    id: 306,
    kanji: "町",
    lesson: 20,
    imageUrl: "/images/kanji/306_town_3d.png",
    onyomi: "チョウ",
    kunyomi: "まち",
    meaning: "Đinh, Thị trấn",
    sinoVietnamese: "Đinh",
    examples: [
      {
        japanese: "町",
        romaji: "Machi",
        vietnamese: "Thị trấn, phố"
      },
      {
        japanese: "町長",
        romaji: "Chouchou",
        vietnamese: "Thị trưởng (thị trấn)"
      },
      {
        japanese: "下町",
        romaji: "Shitamachi",
        vietnamese: "Khu phố cổ"
      }
    ]
  },
  {
    id: 307,
    kanji: "村",
    lesson: 20,
    imageUrl: "/images/kanji/307_village_3d.png",
    onyomi: "ソン",
    kunyomi: "むら",
    meaning: "Thôn, Làng",
    sinoVietnamese: "Thôn",
    examples: [
      {
        japanese: "村",
        romaji: "Mura",
        vietnamese: "Làng"
      },
      {
        japanese: "村長",
        romaji: "Sonchou",
        vietnamese: "Trưởng làng"
      },
      {
        japanese: "農村",
        romaji: "Nouson",
        vietnamese: "Nông thôn"
      }
    ]
  },
  {
    id: 308,
    kanji: "明",
    lesson: 3,
    imageUrl: "/images/kanji/308_bright_3d.png",
    onyomi: "メイ、ミョウ",
    kunyomi: "あか・るい、あ・ける",
    meaning: "Minh, Sáng",
    sinoVietnamese: "Minh",
    examples: [
      {
        japanese: "明るい",
        romaji: "Akarui",
        vietnamese: "Sáng"
      },
      {
        japanese: "明日",
        romaji: "Ashita",
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
      }
    ]
  },
  {
    id: 309,
    kanji: "黒",
    lesson: 20,
    imageUrl: "/images/kanji/309_black_3d.png",
    onyomi: "コク",
    kunyomi: "くろ、くろ・い",
    meaning: "Hắc, Đen",
    sinoVietnamese: "Hắc",
    examples: [
      {
        japanese: "黒い",
        romaji: "Kuroi",
        vietnamese: "Đen"
      },
      {
        japanese: "黒板",
        romaji: "Kokuban",
        vietnamese: "Bảng đen"
      },
      {
        japanese: "黒字",
        romaji: "Kuroji",
        vietnamese: "Lãi (chữ đen)"
      }
    ]
  },
  {
    id: 310,
    kanji: "京",
    lesson: 20,
    imageUrl: "/images/kanji/310_capital_3d.png",
    onyomi: "キョウ、ケイ",
    kunyomi: "",
    meaning: "Kinh, Kinh đô",
    sinoVietnamese: "Kinh",
    examples: [
      {
        japanese: "東京",
        romaji: "Toukyou",
        vietnamese: "Tokyo"
      },
      {
        japanese: "京都",
        romaji: "Kyouto",
        vietnamese: "Kyoto"
      },
      {
        japanese: "上京します",
        romaji: "Joukyou shimasu",
        vietnamese: "Lên kinh đô (Tokyo)"
      }
    ]
  },
  {
    id: 311,
    kanji: "森",
    lesson: 4,
    onyomi: "シン",
    kunyomi: "もり",
    meaning: "Sâm, Rừng rậm",
    sinoVietnamese: "Sâm",
    examples: [
      {
        japanese: "森",
        romaji: "Mori",
        vietnamese: "Rừng"
      },
      {
        japanese: "森林",
        romaji: "Shinrin",
        vietnamese: "Rừng rậm"
      },
      {
        japanese: "青森県",
        romaji: "Aomoriken",
        vietnamese: "Tỉnh Aomori"
      }
    ]
  },
  {
    id: 312,
    kanji: "白",
    lesson: 20,
    onyomi: "ハク、ビャク",
    kunyomi: "しろ、しろ・い",
    meaning: "Bạch, Trắng",
    sinoVietnamese: "Bạch",
    examples: [
      {
        japanese: "白い",
        romaji: "Shiroi",
        vietnamese: "Trắng"
      },
      {
        japanese: "白鳥",
        romaji: "Hakuchou",
        vietnamese: "Thiên nga"
      },
      {
        japanese: "白紙",
        romaji: "Hakushi",
        vietnamese: "Giấy trắng"
      },
      {
        japanese: "面白",
        romaji: "Omoshiroi",
        vietnamese: "Thú vị"
      }
    ]
  },
  {
    id: 313,
    kanji: "波",
    lesson: 20,
    onyomi: "ハ",
    kunyomi: "なみ",
    meaning: "Ba, Sóng",
    sinoVietnamese: "Ba",
    examples: [
      {
        japanese: "波",
        romaji: "Nami",
        vietnamese: "Sóng"
      },
      {
        japanese: "電波",
        romaji: "Denpa",
        vietnamese: "Sóng điện"
      },
      {
        japanese: "津波",
        romaji: "Tsunami",
        vietnamese: "Sóng thần"
      }
    ]
  },
  {
    id: 314,
    kanji: "場",
    lesson: 23,
    onyomi: "ジョウ",
    kunyomi: "ば",
    meaning: "Trường, Nơi chốn",
    sinoVietnamese: "Trường",
    examples: [
      {
        japanese: "場所",
        romaji: "Basho",
        vietnamese: "Nơi chốn"
      },
      {
        japanese: "工場",
        romaji: "Koujou",
        vietnamese: "Nhà máy"
      },
      {
        japanese: "会場",
        romaji: "Kaijou",
        vietnamese: "Hội trường"
      }
    ]
  },
  {
    id: 315,
    kanji: "戸",
    lesson: 20,
    onyomi: "コ",
    kunyomi: "と",
    meaning: "Hộ, Cửa",
    sinoVietnamese: "Hộ",
    examples: [
      {
        japanese: "戸",
        romaji: "To",
        vietnamese: "Cửa"
      },
      {
        japanese: "井戸",
        romaji: "Ido",
        vietnamese: "Cái giếng"
      },
      {
        japanese: "神戸",
        romaji: "Koube",
        vietnamese: "Kobe (tên địa danh)"
      }
    ]
  },
  {
    id: 316,
    kanji: "所",
    lesson: 20,
    onyomi: "ショ",
    kunyomi: "ところ",
    meaning: "Sở, Nơi chốn",
    sinoVietnamese: "Sở",
    examples: [
      {
        japanese: "所",
        romaji: "Tokoro",
        vietnamese: "Nơi chốn"
      },
      {
        japanese: "台所",
        romaji: "Daidokoro",
        vietnamese: "Nhà bếp"
      },
      {
        japanese: "住所",
        romaji: "Juusho",
        vietnamese: "Địa chỉ"
      },
      {
        japanese: "事務所",
        romaji: "Jimusho",
        vietnamese: "Văn phòng"
      }
    ]
  },
  {
    id: 317,
    kanji: "屋",
    lesson: 9,
    onyomi: "オク",
    kunyomi: "や",
    meaning: "Ốc, Mái nhà, Cửa hàng",
    sinoVietnamese: "Ốc",
    examples: [
      {
        japanese: "部屋",
        romaji: "Heya",
        vietnamese: "Căn phòng"
      },
      {
        japanese: "本屋",
        romaji: "Honya",
        vietnamese: "Hiệu sách"
      },
      {
        japanese: "屋上",
        romaji: "Okujou",
        vietnamese: "Sân thượng"
      },
      {
        japanese: "八百屋",
        romaji: "Yaoya",
        vietnamese: "Cửa hàng rau"
      }
    ]
  },
  {
    id: 318,
    kanji: "堂",
    lesson: 9,
    onyomi: "ドウ",
    kunyomi: "",
    meaning: "Đường, Nhà lớn",
    sinoVietnamese: "Đường",
    examples: [
      {
        japanese: "食堂",
        romaji: "Shokudou",
        vietnamese: "Nhà ăn"
      },
      {
        japanese: "公会堂",
        romaji: "Koukaidou",
        vietnamese: "Tòa thị chính"
      },
      {
        japanese: "講堂",
        romaji: "Koudou",
        vietnamese: "Giảng đường"
      }
    ]
  },
  {
    id: 319,
    kanji: "都",
    lesson: 20,
    onyomi: "ト、ツ",
    kunyomi: "みやこ",
    meaning: "Đô, Kinh đô",
    sinoVietnamese: "Đô",
    examples: [
      {
        japanese: "東京都",
        romaji: "Toukyouto",
        vietnamese: "Thủ đô Tokyo"
      },
      {
        japanese: "都会",
        romaji: "Tokai",
        vietnamese: "Thành thị"
      },
      {
        japanese: "都合",
        romaji: "Tsugou",
        vietnamese: "Hoàn cảnh, thuận tiện"
      },
      {
        japanese: "京都",
        romaji: "Kyouto",
        vietnamese: "Kyoto"
      }
    ]
  },
  {
    id: 320,
    kanji: "県",
    lesson: 20,
    onyomi: "ケン",
    kunyomi: "",
    meaning: "Huyện, Tỉnh",
    sinoVietnamese: "Huyện",
    examples: [
      {
        japanese: "県",
        romaji: "Ken",
        vietnamese: "Tỉnh"
      },
      {
        japanese: "県知事",
        romaji: "Kenchiji",
        vietnamese: "Tỉnh trưởng"
      },
      {
        japanese: "県庁",
        romaji: "Kenchou",
        vietnamese: "Ủy ban tỉnh"
      }
    ]
  },
  {
    id: 321,
    kanji: "区",
    lesson: 21,
    onyomi: "ク",
    kunyomi: "",
    meaning: "Khu, Quận",
    sinoVietnamese: "Khu",
    examples: [
      {
        japanese: "区",
        romaji: "Ku",
        vietnamese: "Quận"
      },
      {
        japanese: "区役所",
        romaji: "Kuyakusho",
        vietnamese: "Ủy ban quận"
      },
      {
        japanese: "区別",
        romaji: "Kubetsu",
        vietnamese: "Phân biệt"
      },
      {
        japanese: "地区",
        romaji: "Chiku",
        vietnamese: "Khu vực"
      }
    ]
  },
  {
    id: 322,
    kanji: "信",
    lesson: 22,
    onyomi: "シン",
    kunyomi: "",
    meaning: "Tín, Tin tưởng",
    sinoVietnamese: "Tín",
    examples: [
      {
        japanese: "信じます",
        romaji: "Shinjimasu",
        vietnamese: "Tin tưởng"
      },
      {
        japanese: "信号",
        romaji: "Shingou",
        vietnamese: "Đèn tín hiệu"
      },
      {
        japanese: "自信",
        romaji: "Jishin",
        vietnamese: "Tự tin"
      },
      {
        japanese: "信用",
        romaji: "Shinyou",
        vietnamese: "Tín dụng, lòng tin"
      }
    ]
  },
  {
    id: 323,
    kanji: "映",
    lesson: 11,
    onyomi: "エイ",
    kunyomi: "うつ・る、うつ・す",
    meaning: "Ánh, Phản chiếu",
    sinoVietnamese: "Ánh",
    examples: [
      {
        japanese: "映画",
        romaji: "Eiga",
        vietnamese: "Phim"
      },
      {
        japanese: "映ります",
        romaji: "Utsurimasu",
        vietnamese: "Được chiếu, phản chiếu"
      },
      {
        japanese: "上映",
        romaji: "Jouei",
        vietnamese: "Trình chiếu"
      }
    ]
  },
  {
    id: 324,
    kanji: "画",
    lesson: 28,
    onyomi: "ガ、カク",
    kunyomi: "",
    meaning: "Họa, Hoạch",
    sinoVietnamese: "Họa, Hoạch",
    examples: [
      {
        japanese: "映画",
        romaji: "Eiga",
        vietnamese: "Phim"
      },
      {
        japanese: "画家",
        romaji: "Gaka",
        vietnamese: "Họa sĩ"
      },
      {
        japanese: "計画",
        romaji: "Keikaku",
        vietnamese: "Kế hoạch"
      },
      {
        japanese: "漫画",
        romaji: "Manga",
        vietnamese: "Truyện tranh"
      }
    ]
  },
  {
    id: 325,
    kanji: "写",
    lesson: 11,
    onyomi: "シャ",
    kunyomi: "うつ・す、うつ・る",
    meaning: "Tả, Sao chép",
    sinoVietnamese: "Tả",
    examples: [
      {
        japanese: "写真",
        romaji: "Shashin",
        vietnamese: "Bức ảnh"
      },
      {
        japanese: "写します",
        romaji: "Utsushimasu",
        vietnamese: "Chụp, chép"
      },
      {
        japanese: "写生",
        romaji: "Shasei",
        vietnamese: "Vẽ phác họa"
      }
    ]
  },
  {
    id: 326,
    kanji: "真",
    lesson: 11,
    onyomi: "シン",
    kunyomi: "ま",
    meaning: "Chân, Thật",
    sinoVietnamese: "Chân",
    examples: [
      {
        japanese: "写真",
        romaji: "Shashin",
        vietnamese: "Bức ảnh"
      },
      {
        japanese: "真ん中",
        romaji: "Mannaka",
        vietnamese: "Chính giữa"
      },
      {
        japanese: "真実",
        romaji: "Shinjitsu",
        vietnamese: "Sự thật"
      },
      {
        japanese: "真面目な",
        romaji: "Majime na",
        vietnamese: "Nghiêm túc, chăm chỉ"
      }
    ]
  },
  {
    id: 327,
    kanji: "音",
    lesson: 7,
    onyomi: "オン",
    kunyomi: "おと、ね",
    meaning: "Âm, Âm thanh",
    sinoVietnamese: "Âm",
    examples: [
      {
        japanese: "音",
        romaji: "Oto",
        vietnamese: "Âm thanh"
      },
      {
        japanese: "音楽",
        romaji: "Ongaku",
        vietnamese: "Âm nhạc"
      },
      {
        japanese: "発音",
        romaji: "Hatsuon",
        vietnamese: "Phát âm"
      }
    ]
  },
  {
    id: 328,
    kanji: "楽",
    lesson: 7,
    onyomi: "ガク、ラク",
    kunyomi: "たの・しい",
    meaning: "Lạc, Nhạc, Vui",
    sinoVietnamese: "Lạc, Nhạc",
    examples: [
      {
        japanese: "楽しい",
        romaji: "Tanoshii",
        vietnamese: "Vui vẻ"
      },
      {
        japanese: "音楽",
        romaji: "Ongaku",
        vietnamese: "Âm nhạc"
      },
      {
        japanese: "楽な",
        romaji: "Raku na",
        vietnamese: "Thoải mái, dễ dàng"
      },
      {
        japanese: "楽器",
        romaji: "Gakki",
        vietnamese: "Nhạc cụ"
      }
    ]
  },
  {
    id: 329,
    kanji: "料",
    lesson: 16,
    onyomi: "リョウ",
    kunyomi: "",
    meaning: "Liệu, Nguyên liệu",
    sinoVietnamese: "Liệu",
    examples: [
      {
        japanese: "料理",
        romaji: "Ryouri",
        vietnamese: "Món ăn"
      },
      {
        japanese: "料金",
        romaji: "Ryoukin",
        vietnamese: "Phí, cước"
      },
      {
        japanese: "材料",
        romaji: "Zairyou",
        vietnamese: "Nguyên liệu"
      },
      {
        japanese: "無料",
        romaji: "Muryou",
        vietnamese: "Miễn phí"
      }
    ]
  },
  {
    id: 330,
    kanji: "組",
    lesson: 31,
    onyomi: "ソ",
    kunyomi: "く・む、くみ",
    meaning: "Tổ, Nhóm",
    sinoVietnamese: "Tổ",
    examples: [
      {
        japanese: "番組",
        romaji: "Bangumi",
        vietnamese: "Chương trình tivi"
      },
      {
        japanese: "組み立てます",
        romaji: "Kumitatemasu",
        vietnamese: "Lắp ráp"
      },
      {
        japanese: "組織",
        romaji: "Soshiki",
        vietnamese: "Tổ chức"
      }
    ]
  },
  {
    id: 331,
    kanji: "思",
    lesson: 7,
    onyomi: "シ",
    kunyomi: "おも・う",
    meaning: "Tư, Nghĩ",
    sinoVietnamese: "Tư",
    examples: [
      {
        japanese: "思います",
        romaji: "Omoimasu",
        vietnamese: "Nghĩ"
      },
      {
        japanese: "思い出します",
        romaji: "Omoidashimasu",
        vietnamese: "Nhớ lại"
      },
      {
        japanese: "思い出",
        romaji: "Omoide",
        vietnamese: "Kỷ niệm"
      }
    ]
  },
  {
    id: 332,
    kanji: "色",
    lesson: 21,
    onyomi: "ショク、シキ",
    kunyomi: "いろ",
    meaning: "Sắc, Màu sắc",
    sinoVietnamese: "Sắc",
    examples: [
      {
        japanese: "色",
        romaji: "Iro",
        vietnamese: "Màu sắc"
      },
      {
        japanese: "景色",
        romaji: "Keshiki",
        vietnamese: "Phong cảnh"
      },
      {
        japanese: "特色",
        romaji: "Tokushoku",
        vietnamese: "Đặc sắc"
      }
    ]
  },
  {
    id: 333,
    kanji: "白",
    lesson: 21,
    onyomi: "ハク",
    kunyomi: "しろ、しろ・い",
    meaning: "Bạch, Trắng",
    sinoVietnamese: "Bạch",
    examples: [
      {
        japanese: "白い",
        romaji: "Shiroi",
        vietnamese: "Trắng"
      },
      {
        japanese: "白鳥",
        romaji: "Hakuchou",
        vietnamese: "Thiên nga"
      },
      {
        japanese: "白紙",
        romaji: "Hakushi",
        vietnamese: "Giấy trắng"
      }
    ]
  },
  {
    id: 334,
    kanji: "黒",
    lesson: 21,
    onyomi: "コク",
    kunyomi: "くろ、くろ・い",
    meaning: "Hắc, Đen",
    sinoVietnamese: "Hắc",
    examples: [
      {
        japanese: "黒い",
        romaji: "Kuroi",
        vietnamese: "Đen"
      },
      {
        japanese: "黒字",
        romaji: "Kuroji",
        vietnamese: "Lãi (thặng dư)"
      },
      {
        japanese: "黒板",
        romaji: "Kokuban",
        vietnamese: "Bảng đen"
      }
    ]
  },
  {
    id: 335,
    kanji: "赤",
    lesson: 21,
    onyomi: "セキ",
    kunyomi: "あか、あか・い",
    meaning: "Xích, Đỏ",
    sinoVietnamese: "Xích",
    examples: [
      {
        japanese: "赤い",
        romaji: "Akai",
        vietnamese: "Đỏ"
      },
      {
        japanese: "赤ちゃん",
        romaji: "Akachan",
        vietnamese: "Em bé sơ sinh"
      },
      {
        japanese: "赤字",
        romaji: "Akaji",
        vietnamese: "Lỗ (thâm hụt)"
      }
    ]
  },
  {
    id: 336,
    kanji: "青",
    lesson: 21,
    onyomi: "セイ",
    kunyomi: "あお、あお・い",
    meaning: "Thanh, Xanh dương",
    sinoVietnamese: "Thanh",
    examples: [
      {
        japanese: "青い",
        romaji: "Aoi",
        vietnamese: "Xanh dương"
      },
      {
        japanese: "青年",
        romaji: "Seinen",
        vietnamese: "Thanh niên"
      },
      {
        japanese: "青空",
        romaji: "Aozora",
        vietnamese: "Bầu trời xanh"
      }
    ]
  },
  {
    id: 337,
    kanji: "政",
    lesson: 21,
    onyomi: "セイ",
    kunyomi: "まつりごと",
    meaning: "Chính, Chính trị",
    sinoVietnamese: "Chính",
    examples: [
      {
        japanese: "政治",
        romaji: "Seiji",
        vietnamese: "Chính trị"
      },
      {
        japanese: "政府",
        romaji: "Seifu",
        vietnamese: "Chính phủ"
      },
      {
        japanese: "行政",
        romaji: "Gyousei",
        vietnamese: "Hành chính"
      }
    ]
  },
  {
    id: 338,
    kanji: "治",
    lesson: 21,
    onyomi: "ジ、チ",
    kunyomi: "おさ・める、なお・る",
    meaning: "Trị, Cai trị, Chữa trị",
    sinoVietnamese: "Trị",
    examples: [
      {
        japanese: "政治",
        romaji: "Seiji",
        vietnamese: "Chính trị"
      },
      {
        japanese: "治します",
        romaji: "Naoshimasu",
        vietnamese: "Chữa bệnh"
      },
      {
        japanese: "明治",
        romaji: "Meiji",
        vietnamese: "Thời Minh Trị"
      }
    ]
  },
  {
    id: 339,
    kanji: "経",
    lesson: 21,
    onyomi: "ケイ",
    kunyomi: "へ・る",
    meaning: "Kinh, Kinh tế",
    sinoVietnamese: "Kinh",
    examples: [
      {
        japanese: "経済",
        romaji: "Keizai",
        vietnamese: "Kinh tế"
      },
      {
        japanese: "経営",
        romaji: "Keiei",
        vietnamese: "Kinh doanh"
      },
      {
        japanese: "経験",
        romaji: "Keiken",
        vietnamese: "Kinh nghiệm"
      }
    ]
  },
  {
    id: 340,
    kanji: "済",
    lesson: 21,
    onyomi: "サイ",
    kunyomi: "す・む",
    meaning: "Tế, Hoàn thành",
    sinoVietnamese: "Tế",
    examples: [
      {
        japanese: "経済",
        romaji: "Keizai",
        vietnamese: "Kinh tế"
      },
      {
        japanese: "済みます",
        romaji: "Sumimasu",
        vietnamese: "Xong, hoàn thành"
      },
      {
        japanese: "返済",
        romaji: "Hensai",
        vietnamese: "Hoàn trả"
      }
    ]
  },
  {
    id: 341,
    kanji: "歴",
    lesson: 21,
    onyomi: "レキ",
    kunyomi: "",
    meaning: "Lịch, Lý lịch",
    sinoVietnamese: "Lịch",
    examples: [
      {
        japanese: "歴史",
        romaji: "Rekishi",
        vietnamese: "Lịch sử"
      },
      {
        japanese: "履歴書",
        romaji: "Rirekisho",
        vietnamese: "Sơ yếu lý lịch"
      },
      {
        japanese: "学歴",
        romaji: "Gakureki",
        vietnamese: "Học vấn"
      }
    ]
  },
  {
    id: 342,
    kanji: "史",
    lesson: 21,
    onyomi: "シ",
    kunyomi: "",
    meaning: "Sử, Lịch sử",
    sinoVietnamese: "Sử",
    examples: [
      {
        japanese: "歴史",
        romaji: "Rekishi",
        vietnamese: "Lịch sử"
      },
      {
        japanese: "日本史",
        romaji: "Nihonshi",
        vietnamese: "Lịch sử Nhật Bản"
      }
    ]
  },
  {
    id: 343,
    kanji: "育",
    lesson: 21,
    onyomi: "イク",
    kunyomi: "そだ・つ、そだ・てる",
    meaning: "Dục, Giáo dục",
    sinoVietnamese: "Dục",
    examples: [
      {
        japanese: "育てます",
        romaji: "Sodatemasu",
        vietnamese: "Nuôi nấng"
      },
      {
        japanese: "教育",
        romaji: "Kyouiku",
        vietnamese: "Giáo dục"
      },
      {
        japanese: "体育",
        romaji: "Taiiku",
        vietnamese: "Thể dục"
      }
    ]
  },
  {
    id: 344,
    kanji: "化",
    lesson: 22,
    onyomi: "カ、ケ",
    kunyomi: "ば・ける",
    meaning: "Hóa, Biến hóa",
    sinoVietnamese: "Hóa",
    examples: [
      {
        japanese: "文化",
        romaji: "Bunka",
        vietnamese: "Văn hóa"
      },
      {
        japanese: "化学",
        romaji: "Kagaku",
        vietnamese: "Hóa học"
      },
      {
        japanese: "変化",
        romaji: "Henka",
        vietnamese: "Biến hóa"
      },
      {
        japanese: "お化け",
        romaji: "Obake",
        vietnamese: "Ma quỷ"
      }
    ]
  },
  {
    id: 345,
    kanji: "理",
    lesson: 16,
    onyomi: "リ",
    kunyomi: "",
    meaning: "Lý, Lý do",
    sinoVietnamese: "Lý",
    examples: [
      {
        japanese: "理由",
        romaji: "Riyuu",
        vietnamese: "Lý do"
      },
      {
        japanese: "物理",
        romaji: "Butsuri",
        vietnamese: "Vật lý"
      },
      {
        japanese: "料理",
        romaji: "Ryouri",
        vietnamese: "Món ăn"
      },
      {
        japanese: "無理な",
        romaji: "Muri na",
        vietnamese: "Vô lý, quá sức"
      }
    ]
  },
  {
    id: 346,
    kanji: "科",
    lesson: 22,
    onyomi: "カ",
    kunyomi: "",
    meaning: "Khoa, Khoa học",
    sinoVietnamese: "Khoa",
    examples: [
      {
        japanese: "科学",
        romaji: "Kagaku",
        vietnamese: "Khoa học"
      },
      {
        japanese: "教科書",
        romaji: "Kyoukasho",
        vietnamese: "Sách giáo khoa"
      },
      {
        japanese: "学科",
        romaji: "Gakka",
        vietnamese: "Khoa (trường học)"
      }
    ]
  },
  {
    id: 347,
    kanji: "数",
    lesson: 18,
    onyomi: "スウ",
    kunyomi: "かず、かぞ・える",
    meaning: "Số, Số học",
    sinoVietnamese: "Số",
    examples: [
      {
        japanese: "数",
        romaji: "Kazu",
        vietnamese: "Số"
      },
      {
        japanese: "数えます",
        romaji: "Kazoemasu",
        vietnamese: "Đếm"
      },
      {
        japanese: "数学",
        romaji: "Suugaku",
        vietnamese: "Toán học"
      },
      {
        japanese: "数字",
        romaji: "Suuji",
        vietnamese: "Con số"
      }
    ]
  },
  {
    id: 348,
    kanji: "医",
    lesson: 10,
    onyomi: "イ",
    kunyomi: "",
    meaning: "Y, Y học",
    sinoVietnamese: "Y",
    examples: [
      {
        japanese: "医学",
        romaji: "Igaku",
        vietnamese: "Y học"
      },
      {
        japanese: "医院",
        romaji: "Iin",
        vietnamese: "Phòng khám"
      },
      {
        japanese: "医者",
        romaji: "Isha",
        vietnamese: "Bác sĩ"
      }
    ]
  },
  {
    id: 349,
    kanji: "法",
    lesson: 29,
    onyomi: "ホウ",
    kunyomi: "",
    meaning: "Pháp, Pháp luật",
    sinoVietnamese: "Pháp",
    examples: [
      {
        japanese: "法律",
        romaji: "Houritsu",
        vietnamese: "Pháp luật"
      },
      {
        japanese: "方法",
        romaji: "Houhou",
        vietnamese: "Phương pháp"
      },
      {
        japanese: "文法",
        romaji: "Bunpou",
        vietnamese: "Ngữ pháp"
      }
    ]
  },
  {
    id: 350,
    kanji: "律",
    lesson: 29,
    onyomi: "リツ",
    kunyomi: "",
    meaning: "Luật, Luật pháp",
    sinoVietnamese: "Luật",
    examples: [
      {
        japanese: "法律",
        romaji: "Houritsu",
        vietnamese: "Pháp luật"
      },
      {
        japanese: "規律",
        romaji: "Kiritsu",
        vietnamese: "Kỷ luật"
      }
    ]
  },
  {
    id: 351,
    kanji: "際",
    lesson: 30,
    onyomi: "サイ",
    kunyomi: "きわ",
    meaning: "Tế, Quốc tế",
    sinoVietnamese: "Tế",
    examples: [
      {
        japanese: "国際",
        romaji: "Kokusai",
        vietnamese: "Quốc tế"
      },
      {
        japanese: "交際",
        romaji: "Kousai",
        vietnamese: "Giao du, hẹn hò"
      },
      {
        japanese: "実際",
        romaji: "Jissai",
        vietnamese: "Thực tế"
      }
    ]
  },
  {
    id: 352,
    kanji: "院",
    lesson: 10,
    onyomi: "イン",
    kunyomi: "",
    meaning: "Viện, Bệnh viện",
    sinoVietnamese: "Viện",
    examples: [
      {
        japanese: "病院",
        romaji: "Byouin",
        vietnamese: "Bệnh viện"
      },
      {
        japanese: "入院",
        romaji: "Nyuuin",
        vietnamese: "Nhập viện"
      },
      {
        japanese: "大学院",
        romaji: "Daigakuin",
        vietnamese: "Cao học"
      }
    ]
  },
  {
    id: 353,
    kanji: "覚",
    lesson: 23,
    onyomi: "カク",
    kunyomi: "おぼ・える、さ・める",
    meaning: "Giác, Nhớ, Cảm giác",
    sinoVietnamese: "Giác",
    examples: [
      {
        japanese: "覚えます",
        romaji: "Oboemasu",
        vietnamese: "Ghi nhớ"
      },
      {
        japanese: "目が覚めます",
        romaji: "Me ga samemasu",
        vietnamese: "Tỉnh giấc"
      },
      {
        japanese: "感覚",
        romaji: "Kankaku",
        vietnamese: "Cảm giác"
      }
    ]
  },
  {
    id: 354,
    kanji: "忘",
    lesson: 23,
    onyomi: "ボウ",
    kunyomi: "わす・れる",
    meaning: "Vong, Quên",
    sinoVietnamese: "Vong",
    examples: [
      {
        japanese: "忘れます",
        romaji: "Wasuremasu",
        vietnamese: "Quên"
      },
      {
        japanese: "忘れ物",
        romaji: "Wasuremono",
        vietnamese: "Đồ bỏ quên"
      },
      {
        japanese: "忘年会",
        romaji: "Bounenkai",
        vietnamese: "Tiệc cuối năm"
      }
    ]
  },
  {
    id: 355,
    kanji: "決",
    lesson: 32,
    onyomi: "ケツ",
    kunyomi: "き・める、き・まる",
    meaning: "Quyết, Quyết định",
    sinoVietnamese: "Quyết",
    examples: [
      {
        japanese: "決めます",
        romaji: "Kimemasu",
        vietnamese: "Quyết định"
      },
      {
        japanese: "決して",
        romaji: "Kesshite",
        vietnamese: "Tuyệt đối không"
      },
      {
        japanese: "解決",
        romaji: "Kaiketsu",
        vietnamese: "Giải quyết"
      }
    ]
  },
  {
    id: 356,
    kanji: "定",
    lesson: 23,
    onyomi: "テイ、ジョウ",
    kunyomi: "さだ・める",
    meaning: "Định, Ổn định",
    sinoVietnamese: "Định",
    examples: [
      {
        japanese: "予定",
        romaji: "Yotei",
        vietnamese: "Dự định"
      },
      {
        japanese: "定休日",
        romaji: "Teikyuubi",
        vietnamese: "Ngày nghỉ định kỳ"
      },
      {
        japanese: "安定",
        romaji: "Antei",
        vietnamese: "Ổn định"
      }
    ]
  },
  {
    id: 357,
    kanji: "比",
    lesson: 23,
    onyomi: "ヒ",
    kunyomi: "くら・べる",
    meaning: "Tỷ, So sánh",
    sinoVietnamese: "Tỷ",
    examples: [
      {
        japanese: "比べます",
        romaji: "Kurabemasu",
        vietnamese: "So sánh"
      },
      {
        japanese: "比較",
        romaji: "Hikaku",
        vietnamese: "So sánh"
      },
      {
        japanese: "比例",
        romaji: "Hirei",
        vietnamese: "Tỷ lệ"
      }
    ]
  },
  {
    id: 358,
    kanji: "受",
    lesson: 23,
    onyomi: "ジュ",
    kunyomi: "う・ける、う・かる",
    meaning: "Thụ, Nhận",
    sinoVietnamese: "Thụ",
    examples: [
      {
        japanese: "受けます",
        romaji: "Ukemasu",
        vietnamese: "Nhận, dự thi"
      },
      {
        japanese: "受付",
        romaji: "Uketsuke",
        vietnamese: "Quầy lễ tân"
      },
      {
        japanese: "受験",
        romaji: "Juken",
        vietnamese: "Dự thi"
      }
    ]
  },
  {
    id: 359,
    kanji: "授",
    lesson: 19,
    onyomi: "ジュ",
    kunyomi: "さず・ける",
    meaning: "Thụ, Trao tặng",
    sinoVietnamese: "Thụ",
    examples: [
      {
        japanese: "授業",
        romaji: "Jugyou",
        vietnamese: "Giờ học"
      },
      {
        japanese: "教授",
        romaji: "Kyouju",
        vietnamese: "Giáo sư"
      },
      {
        japanese: "授与",
        romaji: "Juyo",
        vietnamese: "Trao tặng"
      }
    ]
  },
  {
    id: 360,
    kanji: "徒",
    lesson: 23,
    onyomi: "ト",
    kunyomi: "",
    meaning: "Đồ, Học trò",
    sinoVietnamese: "Đồ",
    examples: [
      {
        japanese: "生徒",
        romaji: "Seito",
        vietnamese: "Học sinh"
      },
      {
        japanese: "徒歩で",
        romaji: "Toho de",
        vietnamese: "Đi bộ"
      }
    ]
  },
  {
    id: 361,
    kanji: "練",
    lesson: 19,
    onyomi: "レン",
    kunyomi: "ね・る",
    meaning: "Luyện, Luyện tập",
    sinoVietnamese: "Luyện",
    examples: [
      {
        japanese: "練習",
        romaji: "Renshuu",
        vietnamese: "Luyện tập"
      },
      {
        japanese: "訓練",
        romaji: "Kunren",
        vietnamese: "Huấn luyện"
      }
    ]
  },
  {
    id: 362,
    kanji: "復",
    lesson: 19,
    onyomi: "フク",
    kunyomi: "",
    meaning: "Phục, Ôn tập",
    sinoVietnamese: "Phục",
    examples: [
      {
        japanese: "復習",
        romaji: "Fukushuu",
        vietnamese: "Ôn tập"
      },
      {
        japanese: "回復",
        romaji: "Kaifuku",
        vietnamese: "Hồi phục"
      },
      {
        japanese: "往復",
        romaji: "Oufuku",
        vietnamese: "Khứ hồi"
      }
    ]
  },
  {
    id: 363,
    kanji: "表",
    lesson: 23,
    onyomi: "ヒョウ",
    kunyomi: "おもて、あらわ・す",
    meaning: "Biểu, Biểu hiện",
    sinoVietnamese: "Biểu",
    examples: [
      {
        japanese: "表",
        romaji: "Omote",
        vietnamese: "Mặt trước, bề ngoài"
      },
      {
        japanese: "表します",
        romaji: "Arawashimasu",
        vietnamese: "Biểu hiện"
      },
      {
        japanese: "発表",
        romaji: "Happyou",
        vietnamese: "Phát biểu"
      },
      {
        japanese: "表",
        romaji: "Hyou",
        vietnamese: "Bảng biểu"
      }
    ]
  },
  {
    id: 364,
    kanji: "卒",
    lesson: 20,
    onyomi: "ソツ",
    kunyomi: "",
    meaning: "Tốt, Tốt nghiệp",
    sinoVietnamese: "Tốt",
    examples: [
      {
        japanese: "卒業",
        romaji: "Sotsugyou",
        vietnamese: "Tốt nghiệp"
      },
      {
        japanese: "大卒",
        romaji: "Daisotsu",
        vietnamese: "Tốt nghiệp đại học"
      }
    ]
  },
  {
    id: 365,
    kanji: "違",
    lesson: 23,
    onyomi: "イ",
    kunyomi: "ちが・う",
    meaning: "Vi, Khác, Sai",
    sinoVietnamese: "Vi",
    examples: [
      {
        japanese: "違います",
        romaji: "Chigaimasu",
        vietnamese: "Khác, sai"
      },
      {
        japanese: "間違い",
        romaji: "Machigai",
        vietnamese: "Lỗi sai"
      },
      {
        japanese: "違反",
        romaji: "Ihan",
        vietnamese: "Vi phạm"
      }
    ]
  },
  {
    id: 366,
    kanji: "役",
    lesson: 13,
    onyomi: "ヤク、エキ",
    kunyomi: "",
    meaning: "Dịch, Vai trò",
    sinoVietnamese: "Dịch",
    examples: [
      {
        japanese: "役に立ちます",
        romaji: "Yaku ni tachimasu",
        vietnamese: "Có ích"
      },
      {
        japanese: "市役所",
        romaji: "Shiyakusho",
        vietnamese: "Ủy ban thành phố"
      },
      {
        japanese: "役割",
        romaji: "Yakuwari",
        vietnamese: "Vai trò"
      }
    ]
  },
  {
    id: 367,
    kanji: "皆",
    lesson: 23,
    onyomi: "カイ",
    kunyomi: "みな",
    meaning: "Giai, Mọi người",
    sinoVietnamese: "Giai",
    examples: [
      {
        japanese: "皆さん",
        romaji: "Minasan",
        vietnamese: "Mọi người"
      },
      {
        japanese: "皆",
        romaji: "Mina",
        vietnamese: "Tất cả"
      }
    ]
  },
  {
    id: 368,
    kanji: "彼",
    lesson: 23,
    onyomi: "ヒ",
    kunyomi: "かれ、かの",
    meaning: "Bỉ, Anh ấy",
    sinoVietnamese: "Bỉ",
    examples: [
      {
        japanese: "彼",
        romaji: "Kare",
        vietnamese: "Anh ấy, bạn trai"
      },
      {
        japanese: "彼女",
        romaji: "Kanojo",
        vietnamese: "Cô ấy, bạn gái"
      },
      {
        japanese: "彼ら",
        romaji: "Karera",
        vietnamese: "Họ"
      }
    ]
  },
  {
    id: 369,
    kanji: "全",
    lesson: 24,
    onyomi: "ゼン",
    kunyomi: "すべ・て",
    meaning: "Toàn, Toàn bộ",
    sinoVietnamese: "Toàn",
    examples: [
      {
        japanese: "全部",
        romaji: "Zenbu",
        vietnamese: "Toàn bộ"
      },
      {
        japanese: "全然",
        romaji: "Zenzen",
        vietnamese: "Hoàn toàn (không)"
      },
      {
        japanese: "安全",
        romaji: "Anzen",
        vietnamese: "An toàn"
      },
      {
        japanese: "全て",
        romaji: "Subete",
        vietnamese: "Tất cả"
      }
    ]
  },
  {
    id: 370,
    kanji: "部",
    lesson: 24,
    onyomi: "ブ",
    kunyomi: "",
    meaning: "Bộ, Bộ phận",
    sinoVietnamese: "Bộ",
    examples: [
      {
        japanese: "部屋",
        romaji: "Heya",
        vietnamese: "Căn phòng"
      },
      {
        japanese: "全部",
        romaji: "Zenbu",
        vietnamese: "Toàn bộ"
      },
      {
        japanese: "部長",
        romaji: "Buchou",
        vietnamese: "Trưởng phòng"
      },
      {
        japanese: "部分",
        romaji: "Bubun",
        vietnamese: "Bộ phận"
      }
    ]
  },
  {
    id: 371,
    kanji: "必",
    lesson: 24,
    onyomi: "ヒツ",
    kunyomi: "かなら・ず",
    meaning: "Tất, Tất yếu",
    sinoVietnamese: "Tất",
    examples: [
      {
        japanese: "必ず",
        romaji: "Kanarazu",
        vietnamese: "Nhất định"
      },
      {
        japanese: "必要な",
        romaji: "Hitsuyou na",
        vietnamese: "Cần thiết"
      },
      {
        japanese: "必死",
        romaji: "Hisshi",
        vietnamese: "Quyết tâm, liều mạng"
      }
    ]
  },
  {
    id: 372,
    kanji: "要",
    lesson: 24,
    onyomi: "ヨウ",
    kunyomi: "い・る",
    meaning: "Yếu, Cần thiết",
    sinoVietnamese: "Yếu",
    examples: [
      {
        japanese: "要ります",
        romaji: "Irimasu",
        vietnamese: "Cần"
      },
      {
        japanese: "必要な",
        romaji: "Hitsuyou na",
        vietnamese: "Cần thiết"
      },
      {
        japanese: "重要な",
        romaji: "Juuyou na",
        vietnamese: "Quan trọng"
      },
      {
        japanese: "要点",
        romaji: "Youten",
        vietnamese: "Điểm trọng yếu"
      }
    ]
  },
  {
    id: 373,
    kanji: "荷",
    lesson: 24,
    onyomi: "カ",
    kunyomi: "に",
    meaning: "Hà, Hành lý",
    sinoVietnamese: "Hà",
    examples: [
      {
        japanese: "荷物",
        romaji: "Nimotsu",
        vietnamese: "Hành lý"
      },
      {
        japanese: "手荷物",
        romaji: "Tenimotsu",
        vietnamese: "Hành lý xách tay"
      },
      {
        japanese: "出荷",
        romaji: "Shukka",
        vietnamese: "Xuất hàng"
      }
    ]
  },
  {
    id: 374,
    kanji: "由",
    lesson: 24,
    onyomi: "ユ、ユウ",
    kunyomi: "",
    meaning: "Do, Lý do",
    sinoVietnamese: "Do",
    examples: [
      {
        japanese: "自由",
        romaji: "Jiyuu",
        vietnamese: "Tự do"
      },
      {
        japanese: "理由",
        romaji: "Riyuu",
        vietnamese: "Lý do"
      },
      {
        japanese: "経由",
        romaji: "Keiyu",
        vietnamese: "Thông qua"
      }
    ]
  },
  {
    id: 375,
    kanji: "届",
    lesson: 24,
    onyomi: "",
    kunyomi: "とど・ける、とど・く",
    meaning: "Giới, Gửi đến",
    sinoVietnamese: "Giới",
    examples: [
      {
        japanese: "届けます",
        romaji: "Todokemasu",
        vietnamese: "Gửi đến, chuyển đến"
      },
      {
        japanese: "届きます",
        romaji: "Todokimasu",
        vietnamese: "Được chuyển đến"
      },
      {
        japanese: "届け出",
        romaji: "Todokede",
        vietnamese: "Trình báo"
      }
    ]
  },
  {
    id: 376,
    kanji: "利",
    lesson: 23,
    onyomi: "リ",
    kunyomi: "き・く",
    meaning: "Lợi, Lợi ích",
    sinoVietnamese: "Lợi",
    examples: [
      {
        japanese: "便利",
        romaji: "Benri",
        vietnamese: "Tiện lợi"
      },
      {
        japanese: "利用",
        romaji: "Riyou",
        vietnamese: "Sử dụng"
      },
      {
        japanese: "利益",
        romaji: "Rieki",
        vietnamese: "Lợi ích"
      }
    ]
  },
  {
    id: 377,
    kanji: "払",
    lesson: 24,
    onyomi: "フツ",
    kunyomi: "はら・う",
    meaning: "Phất, Trả tiền",
    sinoVietnamese: "Phất",
    examples: [
      {
        japanese: "払います",
        romaji: "Haraimasu",
        vietnamese: "Trả tiền"
      },
      {
        japanese: "支払い",
        romaji: "Shiharai",
        vietnamese: "Sự chi trả"
      }
    ]
  },
  {
    id: 378,
    kanji: "濯",
    lesson: 17,
    onyomi: "タク",
    kunyomi: "",
    meaning: "Trạc, Giặt",
    sinoVietnamese: "Trạc",
    examples: [
      {
        japanese: "洗濯",
        romaji: "Sentaku",
        vietnamese: "Giặt giũ"
      },
      {
        japanese: "洗濯機",
        romaji: "Sentakuki",
        vietnamese: "Máy giặt"
      }
    ]
  },
  {
    id: 379,
    kanji: "寝",
    lesson: 24,
    onyomi: "シン",
    kunyomi: "ね・る",
    meaning: "Tẩm, Ngủ",
    sinoVietnamese: "Tẩm",
    examples: [
      {
        japanese: "寝ます",
        romaji: "Nemasu",
        vietnamese: "Ngủ"
      },
      {
        japanese: "昼寝",
        romaji: "Hirune",
        vietnamese: "Ngủ trưa"
      },
      {
        japanese: "寝室",
        romaji: "Shinshitsu",
        vietnamese: "Phòng ngủ"
      }
    ]
  },
  {
    id: 380,
    kanji: "踊",
    lesson: 28,
    onyomi: "ヨウ",
    kunyomi: "おど・る",
    meaning: "Dũng, Nhảy múa",
    sinoVietnamese: "Dũng",
    examples: [
      {
        japanese: "踊ります",
        romaji: "Odorimasu",
        vietnamese: "Nhảy múa"
      },
      {
        japanese: "踊り",
        romaji: "Odori",
        vietnamese: "Điệu nhảy"
      }
    ]
  },
  {
    id: 381,
    kanji: "活",
    lesson: 24,
    onyomi: "カツ",
    kunyomi: "",
    meaning: "Hoạt, Sinh hoạt",
    sinoVietnamese: "Hoạt",
    examples: [
      {
        japanese: "生活",
        romaji: "Seikatsu",
        vietnamese: "Cuộc sống, sinh hoạt"
      },
      {
        japanese: "活動",
        romaji: "Katsudou",
        vietnamese: "Hoạt động"
      },
      {
        japanese: "活発な",
        romaji: "Kappatsu na",
        vietnamese: "Hoạt bát"
      }
    ]
  },
  {
    id: 382,
    kanji: "末",
    lesson: 24,
    onyomi: "マツ",
    kunyomi: "すえ",
    meaning: "Mạt, Cuối",
    sinoVietnamese: "Mạt",
    examples: [
      {
        japanese: "週末",
        romaji: "Shuumatsu",
        vietnamese: "Cuối tuần"
      },
      {
        japanese: "月末",
        romaji: "Getsumatsu",
        vietnamese: "Cuối tháng"
      },
      {
        japanese: "年末",
        romaji: "Nenmatsu",
        vietnamese: "Cuối năm"
      },
      {
        japanese: "末っ子",
        romaji: "Suekko",
        vietnamese: "Con út"
      }
    ]
  },
  {
    id: 383,
    kanji: "宅",
    lesson: 15,
    onyomi: "タク",
    kunyomi: "",
    meaning: "Trạch, Nhà",
    sinoVietnamese: "Trạch",
    examples: [
      {
        japanese: "お宅",
        romaji: "Otaku",
        vietnamese: "Nhà (người khác)"
      },
      {
        japanese: "住宅",
        romaji: "Juutaku",
        vietnamese: "Nhà ở"
      },
      {
        japanese: "帰宅",
        romaji: "Kitaku",
        vietnamese: "Về nhà"
      }
    ]
  },
  {
    id: 384,
    kanji: "祭",
    lesson: 20,
    onyomi: "サイ",
    kunyomi: "まつ・り",
    meaning: "Tế, Lễ hội",
    sinoVietnamese: "Tế",
    examples: [
      {
        japanese: "祭り",
        romaji: "Matsuri",
        vietnamese: "Lễ hội"
      },
      {
        japanese: "文化祭",
        romaji: "Bunkasai",
        vietnamese: "Lễ hội văn hóa"
      }
    ]
  },
  {
    id: 385,
    kanji: "平",
    lesson: 25,
    onyomi: "ヘイ、ビョウ",
    kunyomi: "たい・ら、ひら",
    meaning: "Bình, Hòa bình",
    sinoVietnamese: "Bình",
    examples: [
      {
        japanese: "平和",
        romaji: "Heiwa",
        vietnamese: "Hòa bình"
      },
      {
        japanese: "平安",
        romaji: "Heian",
        vietnamese: "Bình an"
      },
      {
        japanese: "平日",
        romaji: "Heijitsu",
        vietnamese: "Ngày thường"
      },
      {
        japanese: "平等",
        romaji: "Byoudou",
        vietnamese: "Bình đẳng"
      }
    ]
  },
  {
    id: 386,
    kanji: "戦",
    lesson: 25,
    onyomi: "セン",
    kunyomi: "たたか・う",
    meaning: "Chiến, Chiến tranh",
    sinoVietnamese: "Chiến",
    examples: [
      {
        japanese: "戦争",
        romaji: "Sensou",
        vietnamese: "Chiến tranh"
      },
      {
        japanese: "戦います",
        romaji: "Tatakaimasu",
        vietnamese: "Chiến đấu"
      },
      {
        japanese: "作戦",
        romaji: "Sakusen",
        vietnamese: "Chiến lược"
      }
    ]
  },
  {
    id: 387,
    kanji: "争",
    lesson: 25,
    onyomi: "ソウ",
    kunyomi: "あらそ・う",
    meaning: "Tranh, Cạnh tranh",
    sinoVietnamese: "Tranh",
    examples: [
      {
        japanese: "戦争",
        romaji: "Sensou",
        vietnamese: "Chiến tranh"
      },
      {
        japanese: "競争",
        romaji: "Kyousou",
        vietnamese: "Cạnh tranh"
      },
      {
        japanese: "争います",
        romaji: "Arasoimasu",
        vietnamese: "Tranh giành"
      }
    ]
  },
  {
    id: 388,
    kanji: "交",
    lesson: 30,
    onyomi: "コウ",
    kunyomi: "まじ・わる",
    meaning: "Giao, Giao thông",
    sinoVietnamese: "Giao",
    examples: [
      {
        japanese: "交通",
        romaji: "Koutsuu",
        vietnamese: "Giao thông"
      },
      {
        japanese: "交流",
        romaji: "Kouryuu",
        vietnamese: "Giao lưu"
      },
      {
        japanese: "交番",
        romaji: "Kouban",
        vietnamese: "Đồn cảnh sát"
      }
    ]
  },
  {
    id: 389,
    kanji: "可",
    lesson: 25,
    onyomi: "カ",
    kunyomi: "",
    meaning: "Khả, Có thể",
    sinoVietnamese: "Khả",
    examples: [
      {
        japanese: "可能性",
        romaji: "Kanousei",
        vietnamese: "Tính khả thi"
      },
      {
        japanese: "可愛い",
        romaji: "Kawaii",
        vietnamese: "Đáng yêu"
      },
      {
        japanese: "許可",
        romaji: "Kyoka",
        vietnamese: "Sự cho phép"
      }
    ]
  },
  {
    id: 390,
    kanji: "能",
    lesson: 25,
    onyomi: "ノウ",
    kunyomi: "",
    meaning: "Năng, Khả năng",
    sinoVietnamese: "Năng",
    examples: [
      {
        japanese: "能力",
        romaji: "Nouryoku",
        vietnamese: "Năng lực"
      },
      {
        japanese: "可能",
        romaji: "Kanou",
        vietnamese: "Khả năng"
      },
      {
        japanese: "才能",
        romaji: "Sainou",
        vietnamese: "Tài năng"
      }
    ]
  },
  {
    id: 391,
    kanji: "収",
    lesson: 25,
    onyomi: "シュウ",
    kunyomi: "おさ・める",
    meaning: "Thu, Thu nhập",
    sinoVietnamese: "Thu",
    examples: [
      {
        japanese: "収入",
        romaji: "Shuunyuu",
        vietnamese: "Thu nhập"
      },
      {
        japanese: "収集",
        romaji: "Shuushuu",
        vietnamese: "Thu thập"
      },
      {
        japanese: "収めます",
        romaji: "Osamemasu",
        vietnamese: "Thu được, giao nộp"
      }
    ]
  },
  {
    id: 392,
    kanji: "支",
    lesson: 25,
    onyomi: "シ",
    kunyomi: "ささ・える",
    meaning: "Chi, Chi nhánh, Hỗ trợ",
    sinoVietnamese: "Chi",
    examples: [
      {
        japanese: "支店",
        romaji: "Shiten",
        vietnamese: "Chi nhánh"
      },
      {
        japanese: "支払います",
        romaji: "Shiharaimasu",
        vietnamese: "Chi trả"
      },
      {
        japanese: "支えます",
        romaji: "Sasaemasu",
        vietnamese: "Nâng đỡ, hỗ trợ"
      }
    ]
  },
  {
    id: 393,
    kanji: "厚",
    lesson: 25,
    onyomi: "コウ",
    kunyomi: "あつ・い",
    meaning: "Hậu, Dày",
    sinoVietnamese: "Hậu",
    examples: [
      {
        japanese: "厚い",
        romaji: "Atsui",
        vietnamese: "Dày"
      },
      {
        japanese: "濃厚な",
        romaji: "Noukou na",
        vietnamese: "Đậm đà"
      }
    ]
  },
  {
    id: 394,
    kanji: "薄",
    lesson: 18,
    onyomi: "ハク",
    kunyomi: "うす・い",
    meaning: "Bạc, Mỏng",
    sinoVietnamese: "Bạc",
    examples: [
      {
        japanese: "薄い",
        romaji: "Usui",
        vietnamese: "Mỏng, nhạt"
      },
      {
        japanese: "薄暗い",
        romaji: "Usugurai",
        vietnamese: "Mờ tối"
      }
    ]
  },
  {
    id: 395,
    kanji: "神",
    lesson: 25,
    onyomi: "シン、ジン",
    kunyomi: "かみ",
    meaning: "Thần, Thần thánh",
    sinoVietnamese: "Thần",
    examples: [
      {
        japanese: "神様",
        romaji: "Kamisama",
        vietnamese: "Thần"
      },
      {
        japanese: "神社",
        romaji: "Jinja",
        vietnamese: "Đền thờ đạo Shinto"
      },
      {
        japanese: "精神",
        romaji: "Seishin",
        vietnamese: "Tinh thần"
      }
    ]
  },
  {
    id: 396,
    kanji: "公",
    lesson: 25,
    onyomi: "コウ",
    kunyomi: "おおやけ",
    meaning: "Công, Công cộng",
    sinoVietnamese: "Công",
    examples: [
      {
        japanese: "公園",
        romaji: "Kouen",
        vietnamese: "Công viên"
      },
      {
        japanese: "公立",
        romaji: "Kouritsu",
        vietnamese: "Công lập"
      },
      {
        japanese: "公開",
        romaji: "Koukai",
        vietnamese: "Công khai"
      }
    ]
  },
  {
    id: 397,
    kanji: "園",
    lesson: 25,
    onyomi: "エン",
    kunyomi: "その",
    meaning: "Viên, Vườn, Công viên",
    sinoVietnamese: "Viên",
    examples: [
      {
        japanese: "公園",
        romaji: "Kouen",
        vietnamese: "Công viên"
      },
      {
        japanese: "動物園",
        romaji: "Doubutsuen",
        vietnamese: "Sở thú"
      },
      {
        japanese: "遊園地",
        romaji: "Yuuenchi",
        vietnamese: "Khu vui chơi"
      }
    ]
  },
  {
    id: 398,
    kanji: "込",
    lesson: 25,
    onyomi: "",
    kunyomi: "こ・む、こ・める",
    meaning: "Vào, Đông đúc",
    sinoVietnamese: "Vào",
    examples: [
      {
        japanese: "込みます",
        romaji: "Komimasu",
        vietnamese: "Đông đúc"
      },
      {
        japanese: "申し込み",
        romaji: "Moushikomi",
        vietnamese: "Đăng ký"
      },
      {
        japanese: "飛び込む",
        romaji: "Tobikomu",
        vietnamese: "Nhảy vào"
      }
    ]
  },
  {
    id: 399,
    kanji: "連",
    lesson: 30,
    onyomi: "レン",
    kunyomi: "つ・れる、つら・なる",
    meaning: "Liên, Liên lạc",
    sinoVietnamese: "Liên",
    examples: [
      {
        japanese: "連絡",
        romaji: "Renraku",
        vietnamese: "Liên lạc"
      },
      {
        japanese: "連れて行きます",
        romaji: "Tsureteikimasu",
        vietnamese: "Dẫn đi"
      },
      {
        japanese: "連休",
        romaji: "Renkyuu",
        vietnamese: "Kỳ nghỉ dài"
      }
    ]
  },
  {
    id: 400,
    kanji: "窓",
    lesson: 25,
    onyomi: "ソウ",
    kunyomi: "まど",
    meaning: "Song, Cửa sổ",
    sinoVietnamese: "Song",
    examples: [
      {
        japanese: "窓",
        romaji: "Mado",
        vietnamese: "Cửa sổ"
      },
      {
        japanese: "窓口",
        romaji: "Madoguchi",
        vietnamese: "Quầy giao dịch"
      },
      {
        japanese: "同窓会",
        romaji: "Dousoukai",
        vietnamese: "Hội cựu học sinh"
      }
    ]
  },
  {
    id: 401,
    kanji: "側",
    lesson: 26,
    onyomi: "ソク",
    kunyomi: "かわ",
    meaning: "Trắc, Phía",
    sinoVietnamese: "Trắc",
    examples: [
      {
        japanese: "側",
        romaji: "Kawa",
        vietnamese: "Phía"
      },
      {
        japanese: "右側",
        romaji: "Migigawa",
        vietnamese: "Phía bên phải"
      },
      {
        japanese: "内側",
        romaji: "Uchigawa",
        vietnamese: "Phía bên trong"
      }
    ]
  },
  {
    id: 402,
    kanji: "葉",
    lesson: 26,
    onyomi: "ヨウ",
    kunyomi: "は",
    meaning: "Diệp, Lá",
    sinoVietnamese: "Diệp",
    examples: [
      {
        japanese: "葉",
        romaji: "Ha",
        vietnamese: "Lá"
      },
      {
        japanese: "言葉",
        romaji: "Kotoba",
        vietnamese: "Từ vựng, lời nói"
      },
      {
        japanese: "紅葉",
        romaji: "Momiji",
        vietnamese: "Lá đỏ"
      }
    ]
  },
  {
    id: 403,
    kanji: "景",
    lesson: 26,
    onyomi: "ケイ",
    kunyomi: "",
    meaning: "Cảnh, Cảnh sắc",
    sinoVietnamese: "Cảnh",
    examples: [
      {
        japanese: "景色",
        romaji: "Keshiki",
        vietnamese: "Phong cảnh"
      },
      {
        japanese: "景気",
        romaji: "Keiki",
        vietnamese: "Tình hình kinh tế"
      },
      {
        japanese: "風景",
        romaji: "Fuukei",
        vietnamese: "Phong cảnh"
      }
    ]
  },
  {
    id: 404,
    kanji: "色",
    lesson: 26,
    onyomi: "ショク、シキ",
    kunyomi: "いろ",
    meaning: "Sắc, Màu sắc",
    sinoVietnamese: "Sắc",
    examples: [
      {
        japanese: "色",
        romaji: "Iro",
        vietnamese: "Màu sắc"
      },
      {
        japanese: "景色",
        romaji: "Keshiki",
        vietnamese: "Phong cảnh"
      },
      {
        japanese: "色々",
        romaji: "Iroiro",
        vietnamese: "Nhiều, đa dạng"
      }
    ]
  },
  {
    id: 405,
    kanji: "容",
    lesson: 26,
    onyomi: "ヨウ",
    kunyomi: "",
    meaning: "Dung, Nội dung",
    sinoVietnamese: "Dung",
    examples: [
      {
        japanese: "内容",
        romaji: "Naiyou",
        vietnamese: "Nội dung"
      },
      {
        japanese: "美容院",
        romaji: "Biyouin",
        vietnamese: "Thẩm mỹ viện"
      },
      {
        japanese: "容器",
        romaji: "Youki",
        vietnamese: "Đồ đựng"
      }
    ]
  },
  {
    id: 406,
    kanji: "美",
    lesson: 22,
    onyomi: "ビ",
    kunyomi: "うつく・しい",
    meaning: "Mỹ, Đẹp",
    sinoVietnamese: "Mỹ",
    examples: [
      {
        japanese: "美しい",
        romaji: "Utsukushii",
        vietnamese: "Đẹp"
      },
      {
        japanese: "美人",
        romaji: "Bijin",
        vietnamese: "Người đẹp"
      },
      {
        japanese: "美容院",
        romaji: "Biyouin",
        vietnamese: "Thẩm mỹ viện"
      }
    ]
  },
  {
    id: 407,
    kanji: "遊",
    lesson: 26,
    onyomi: "ユウ",
    kunyomi: "あそ・ぶ",
    meaning: "Du, Chơi",
    sinoVietnamese: "Du",
    examples: [
      {
        japanese: "遊びます",
        romaji: "Asobimasu",
        vietnamese: "Chơi"
      },
      {
        japanese: "遊園地",
        romaji: "Yuuenchi",
        vietnamese: "Khu vui chơi"
      }
    ]
  },
  {
    id: 408,
    kanji: "疲",
    lesson: 26,
    onyomi: "ヒ",
    kunyomi: "つか・れる",
    meaning: "Bì, Mệt",
    sinoVietnamese: "Bì",
    examples: [
      {
        japanese: "疲れます",
        romaji: "Tsukaremasu",
        vietnamese: "Mệt"
      },
      {
        japanese: "疲れ",
        romaji: "Tsukare",
        vietnamese: "Sự mệt mỏi"
      }
    ]
  },
  {
    id: 409,
    kanji: "泳",
    lesson: 26,
    onyomi: "エイ",
    kunyomi: "およ・ぐ",
    meaning: "Vịnh, Bơi",
    sinoVietnamese: "Vịnh",
    examples: [
      {
        japanese: "泳ぎます",
        romaji: "Oyogimasu",
        vietnamese: "Bơi"
      },
      {
        japanese: "水泳",
        romaji: "Suiei",
        vietnamese: "Bơi lội"
      }
    ]
  },
  {
    id: 410,
    kanji: "暖",
    lesson: 26,
    onyomi: "ダン",
    kunyomi: "あたた・かい",
    meaning: "Noãn, Ấm",
    sinoVietnamese: "Noãn",
    examples: [
      {
        japanese: "暖かい",
        romaji: "Atatakai",
        vietnamese: "Ấm áp"
      },
      {
        japanese: "暖房",
        romaji: "Danbou",
        vietnamese: "Lò sưởi"
      },
      {
        japanese: "温暖な",
        romaji: "Ondan na",
        vietnamese: "Ôn hòa"
      }
    ]
  },
  {
    id: 411,
    kanji: "涼",
    lesson: 26,
    onyomi: "リョウ",
    kunyomi: "すず・しい",
    meaning: "Lương, Mát",
    sinoVietnamese: "Lương",
    examples: [
      {
        japanese: "涼しい",
        romaji: "Suzushii",
        vietnamese: "Mát mẻ"
      },
      {
        japanese: "涼みます",
        romaji: "Suzumimasu",
        vietnamese: "Hóng mát"
      }
    ]
  },
  {
    id: 412,
    kanji: "静",
    lesson: 26,
    onyomi: "セイ",
    kunyomi: "しず・か",
    meaning: "Tĩnh, Yên tĩnh",
    sinoVietnamese: "Tĩnh",
    examples: [
      {
        japanese: "静かな",
        romaji: "Shizuka na",
        vietnamese: "Yên tĩnh"
      },
      {
        japanese: "冷静な",
        romaji: "Reisei na",
        vietnamese: "Điềm tĩnh"
      }
    ]
  },
  {
    id: 413,
    kanji: "輪",
    lesson: 26,
    onyomi: "リン",
    kunyomi: "わ",
    meaning: "Luân, Bánh xe, Vòng",
    sinoVietnamese: "Luân",
    examples: [
      {
        japanese: "指輪",
        romaji: "Yubiwa",
        vietnamese: "Nhẫn"
      },
      {
        japanese: "車輪",
        romaji: "Sharin",
        vietnamese: "Bánh xe"
      },
      {
        japanese: "五輪",
        romaji: "Gorin",
        vietnamese: "Olympic"
      }
    ]
  },
  {
    id: 414,
    kanji: "港",
    lesson: 15,
    onyomi: "コウ",
    kunyomi: "みなと",
    meaning: "Cảng, Hải cảng",
    sinoVietnamese: "Cảng",
    examples: [
      {
        japanese: "港",
        romaji: "Minato",
        vietnamese: "Cảng"
      },
      {
        japanese: "空港",
        romaji: "Kuukou",
        vietnamese: "Sân bay"
      },
      {
        japanese: "見送ります",
        romaji: "Miokurimasu",
        vietnamese: "Tiễn"
      }
    ]
  },
  {
    id: 415,
    kanji: "途",
    lesson: 26,
    onyomi: "ト",
    kunyomi: "",
    meaning: "Đồ, Giữa đường",
    sinoVietnamese: "Đồ",
    examples: [
      {
        japanese: "途中",
        romaji: "Tochuu",
        vietnamese: "Giữa đường"
      },
      {
        japanese: "用途",
        romaji: "Youto",
        vietnamese: "Công dụng"
      }
    ]
  },
  {
    id: 416,
    kanji: "降",
    lesson: 26,
    onyomi: "コウ",
    kunyomi: "お・りる、ふ・る",
    meaning: "Giáng, Xuống, Mưa",
    sinoVietnamese: "Giáng",
    examples: [
      {
        japanese: "降ります",
        romaji: "Orimasu",
        vietnamese: "Xuống (xe)"
      },
      {
        japanese: "雨が降ります",
        romaji: "Ame ga furimasu",
        vietnamese: "Mưa rơi"
      },
      {
        japanese: "以降",
        romaji: "Ikou",
        vietnamese: "Sau đó"
      }
    ]
  },
  {
    id: 417,
    kanji: "換",
    lesson: 17,
    onyomi: "カン",
    kunyomi: "か・える",
    meaning: "Hoán, Thay đổi",
    sinoVietnamese: "Hoán",
    examples: [
      {
        japanese: "換えます",
        romaji: "Kaemasu",
        vietnamese: "Trao đổi"
      },
      {
        japanese: "乗り換え",
        romaji: "Norikae",
        vietnamese: "Đổi tàu/xe"
      },
      {
        japanese: "交換",
        romaji: "Koukan",
        vietnamese: "Trao đổi"
      }
    ]
  },
  {
    id: 418,
    kanji: "吉",
    lesson: 27,
    onyomi: "キチ、キツ",
    kunyomi: "",
    meaning: "Cát, Tốt lành",
    sinoVietnamese: "Cát",
    examples: [
      {
        japanese: "吉",
        romaji: "Kichi",
        vietnamese: "Điềm lành"
      },
      {
        japanese: "大吉",
        romaji: "Daikichi",
        vietnamese: "Đại cát"
      },
      {
        japanese: "不吉な",
        romaji: "Fukitsu na",
        vietnamese: "Chẳng lành"
      }
    ]
  },
  {
    id: 419,
    kanji: "供",
    lesson: 27,
    onyomi: "キョウ",
    kunyomi: "とも、そな・える",
    meaning: "Cung, Cung cấp",
    sinoVietnamese: "Cung",
    examples: [
      {
        japanese: "子供",
        romaji: "Kodomo",
        vietnamese: "Trẻ em"
      },
      {
        japanese: "提供",
        romaji: "Teikyou",
        vietnamese: "Cung cấp"
      }
    ]
  },
  {
    id: 420,
    kanji: "両",
    lesson: 12,
    onyomi: "リョウ",
    kunyomi: "",
    meaning: "Lưỡng, Cả hai",
    sinoVietnamese: "Lưỡng",
    examples: [
      {
        japanese: "両親",
        romaji: "Ryoushin",
        vietnamese: "Bố mẹ"
      },
      {
        japanese: "両方",
        romaji: "Ryouhou",
        vietnamese: "Cả hai"
      },
      {
        japanese: "両手",
        romaji: "Ryoute",
        vietnamese: "Hai tay"
      }
    ]
  },
  {
    id: 421,
    kanji: "若",
    lesson: 26,
    onyomi: "ジャク",
    kunyomi: "わか・い",
    meaning: "Nhược, Trẻ",
    sinoVietnamese: "Nhược",
    examples: [
      {
        japanese: "若い",
        romaji: "Wakai",
        vietnamese: "Trẻ"
      },
      {
        japanese: "若者",
        romaji: "Wakamono",
        vietnamese: "Giới trẻ"
      }
    ]
  },
  {
    id: 422,
    kanji: "老",
    lesson: 26,
    onyomi: "ロウ",
    kunyomi: "お・いる",
    meaning: "Lão, Già",
    sinoVietnamese: "Lão",
    examples: [
      {
        japanese: "老人",
        romaji: "Roujin",
        vietnamese: "Người già"
      },
      {
        japanese: "敬老の日",
        romaji: "Keirou no hi",
        vietnamese: "Ngày kính lão"
      }
    ]
  },
  {
    id: 423,
    kanji: "息",
    lesson: 27,
    onyomi: "ソク",
    kunyomi: "いき",
    meaning: "Tức, Hơi thở",
    sinoVietnamese: "Tức",
    examples: [
      {
        japanese: "息子",
        romaji: "Musuko",
        vietnamese: "Con trai"
      },
      {
        japanese: "息",
        romaji: "Iki",
        vietnamese: "Hơi thở"
      },
      {
        japanese: "休息",
        romaji: "Kyuusoku",
        vietnamese: "Nghỉ giải lao"
      }
    ]
  },
  {
    id: 424,
    kanji: "娘",
    lesson: 27,
    onyomi: "",
    kunyomi: "むすめ",
    meaning: "Nương, Con gái",
    sinoVietnamese: "Nương",
    examples: [
      {
        japanese: "娘",
        romaji: "Musume",
        vietnamese: "Con gái"
      }
    ]
  },
  {
    id: 425,
    kanji: "奥",
    lesson: 27,
    onyomi: "オウ",
    kunyomi: "おく",
    meaning: "Áo, Vợ, Bên trong",
    sinoVietnamese: "Áo",
    examples: [
      {
        japanese: "奥さん",
        romaji: "Okusan",
        vietnamese: "Vợ (người khác)"
      },
      {
        japanese: "奥",
        romaji: "Oku",
        vietnamese: "Phía trong cùng"
      }
    ]
  },
  {
    id: 426,
    kanji: "将",
    lesson: 27,
    onyomi: "ショウ",
    kunyomi: "",
    meaning: "Tương, Tương lai",
    sinoVietnamese: "Tương",
    examples: [
      {
        japanese: "将来",
        romaji: "Shourai",
        vietnamese: "Tương lai"
      }
    ]
  },
  {
    id: 427,
    kanji: "祖",
    lesson: 27,
    onyomi: "ソ",
    kunyomi: "",
    meaning: "Tổ, Tổ tiên",
    sinoVietnamese: "Tổ",
    examples: [
      {
        japanese: "祖父",
        romaji: "Sofu",
        vietnamese: "Ông"
      },
      {
        japanese: "祖母",
        romaji: "Sobo",
        vietnamese: "Bà"
      },
      {
        japanese: "祖先",
        romaji: "Sosen",
        vietnamese: "Tổ tiên"
      }
    ]
  },
  {
    id: 428,
    kanji: "招",
    lesson: 27,
    onyomi: "ショウ",
    kunyomi: "まね・く",
    meaning: "Chiêu, Mời",
    sinoVietnamese: "Chiêu",
    examples: [
      {
        japanese: "招待",
        romaji: "Shoutai",
        vietnamese: "Chiêu đãi, mời"
      },
      {
        japanese: "招きます",
        romaji: "Manekimasu",
        vietnamese: "Mời, rủ"
      }
    ]
  },
  {
    id: 429,
    kanji: "慣",
    lesson: 27,
    onyomi: "カン",
    kunyomi: "な・れる",
    meaning: "Quán, Quen, Tập quán",
    sinoVietnamese: "Quán",
    examples: [
      {
        japanese: "習慣",
        romaji: "Shuukan",
        vietnamese: "Tập quán, thói quen"
      },
      {
        japanese: "慣れます",
        romaji: "Naremasu",
        vietnamese: "Quen với"
      }
    ]
  },
  {
    id: 430,
    kanji: "席",
    lesson: 27,
    onyomi: "セキ",
    kunyomi: "",
    meaning: "Tịch, Chỗ ngồi",
    sinoVietnamese: "Tịch",
    examples: [
      {
        japanese: "出席",
        romaji: "Shusseki",
        vietnamese: "Sự tham gia (có mặt)"
      },
      {
        japanese: "座席",
        romaji: "Zaseki",
        vietnamese: "Chỗ ngồi"
      },
      {
        japanese: "欠席",
        romaji: "Kesseki",
        vietnamese: "Vắng mặt"
      }
    ]
  },
  {
    id: 431,
    kanji: "泊",
    lesson: 15,
    onyomi: "ハク",
    kunyomi: "と・まる",
    meaning: "Bạc, Trọ lại",
    sinoVietnamese: "Bạc",
    examples: [
      {
        japanese: "泊まります",
        romaji: "Tomarimasu",
        vietnamese: "Trọ lại"
      },
      {
        japanese: "一泊",
        romaji: "Ippaku",
        vietnamese: "Một đêm"
      },
      {
        japanese: "宿泊",
        romaji: "Shukuhaku",
        vietnamese: "Trọ lại"
      }
    ]
  },
  {
    id: 432,
    kanji: "訪",
    lesson: 27,
    onyomi: "ホウ",
    kunyomi: "たず・ねる",
    meaning: "Phỏng, Thăm",
    sinoVietnamese: "Phỏng",
    examples: [
      {
        japanese: "訪問",
        romaji: "Houmon",
        vietnamese: "Thăm hỏi"
      },
      {
        japanese: "訪ねます",
        romaji: "Tazunemasu",
        vietnamese: "Ghé thăm"
      }
    ]
  },
  {
    id: 433,
    kanji: "替",
    lesson: 28,
    onyomi: "タイ",
    kunyomi: "か・える",
    meaning: "Thế, Thay",
    sinoVietnamese: "Thế",
    examples: [
      {
        japanese: "着替え",
        romaji: "Kigae",
        vietnamese: "Thay quần áo"
      },
      {
        japanese: "取り替えます",
        romaji: "Torikaemasu",
        vietnamese: "Đổi, thay"
      },
      {
        japanese: "交替",
        romaji: "Koutai",
        vietnamese: "Thay phiên"
      }
    ]
  },
  {
    id: 434,
    kanji: "取",
    lesson: 28,
    onyomi: "シュ",
    kunyomi: "と・る",
    meaning: "Thủ, Lấy",
    sinoVietnamese: "Thủ",
    examples: [
      {
        japanese: "取ります",
        romaji: "Torimasu",
        vietnamese: "Lấy"
      },
      {
        japanese: "受け取ります",
        romaji: "Uketorimasu",
        vietnamese: "Nhận"
      },
      {
        japanese: "取得",
        romaji: "Shutoku",
        vietnamese: "Giành được"
      }
    ]
  },
  {
    id: 435,
    kanji: "最",
    lesson: 28,
    onyomi: "サイ",
    kunyomi: "もっと・も",
    meaning: "Tối, Nhất",
    sinoVietnamese: "Tối",
    examples: [
      {
        japanese: "最近",
        romaji: "Saikin",
        vietnamese: "Gần đây"
      },
      {
        japanese: "最高",
        romaji: "Saikou",
        vietnamese: "Tuyệt nhất"
      },
      {
        japanese: "最後",
        romaji: "Saigo",
        vietnamese: "Cuối cùng"
      }
    ]
  },
  {
    id: 436,
    kanji: "初",
    lesson: 28,
    onyomi: "ショ",
    kunyomi: "はじ・め、はつ",
    meaning: "Sơ, Đầu tiên",
    sinoVietnamese: "Sơ",
    examples: [
      {
        japanese: "初めて",
        romaji: "Hajimete",
        vietnamese: "Lần đầu tiên"
      },
      {
        japanese: "最初",
        romaji: "Saisho",
        vietnamese: "Đầu tiên"
      },
      {
        japanese: "初級",
        romaji: "Shokyuu",
        vietnamese: "Sơ cấp"
      }
    ]
  },
  {
    id: 437,
    kanji: "番",
    lesson: 22,
    onyomi: "バン",
    kunyomi: "",
    meaning: "Phiên, Lượt, Số",
    sinoVietnamese: "Phiên",
    examples: [
      {
        japanese: "一番",
        romaji: "Ichiban",
        vietnamese: "Số một, nhất"
      },
      {
        japanese: "番号",
        romaji: "Bangou",
        vietnamese: "Số hiệu"
      },
      {
        japanese: "交番",
        romaji: "Kouban",
        vietnamese: "Đồn cảnh sát"
      }
    ]
  },
  {
    id: 438,
    kanji: "周",
    lesson: 28,
    onyomi: "シュウ",
    kunyomi: "まわ・り",
    meaning: "Chu, Chu vi, Xung quanh",
    sinoVietnamese: "Chu",
    examples: [
      {
        japanese: "周り",
        romaji: "Mawari",
        vietnamese: "Xung quanh"
      },
      {
        japanese: "周辺",
        romaji: "Shuuhen",
        vietnamese: "Vùng xung quanh"
      }
    ]
  },
  {
    id: 439,
    kanji: "囲",
    lesson: 28,
    onyomi: "イ",
    kunyomi: "かこ・む",
    meaning: "Vi, Bao quanh",
    sinoVietnamese: "Vi",
    examples: [
      {
        japanese: "囲みます",
        romaji: "Kakomimasu",
        vietnamese: "Bao quanh"
      },
      {
        japanese: "周囲",
        romaji: "Shuui",
        vietnamese: "Chu vi"
      }
    ]
  },
  {
    id: 440,
    kanji: "協",
    lesson: 31,
    onyomi: "キョウ",
    kunyomi: "",
    meaning: "Hiệp, Hợp lực",
    sinoVietnamese: "Hiệp",
    examples: [
      {
        japanese: "協力",
        romaji: "Kyouryoku",
        vietnamese: "Hợp lực"
      },
      {
        japanese: "協会",
        romaji: "Kyoukai",
        vietnamese: "Hiệp hội"
      }
    ]
  },
  {
    id: 441,
    kanji: "互",
    lesson: 28,
    onyomi: "ゴ",
    kunyomi: "たが・い",
    meaning: "Hỗ, Lẫn nhau",
    sinoVietnamese: "Hỗ",
    examples: [
      {
        japanese: "お互いに",
        romaji: "Otagai ni",
        vietnamese: "Lẫn nhau"
      },
      {
        japanese: "相互",
        romaji: "Sougo",
        vietnamese: "Tương hỗ"
      }
    ]
  },
  {
    id: 442,
    kanji: "票",
    lesson: 28,
    onyomi: "ヒョウ",
    kunyomi: "",
    meaning: "Phiếu, Bỏ phiếu",
    sinoVietnamese: "Phiếu",
    examples: [
      {
        japanese: "投票",
        romaji: "Touhyou",
        vietnamese: "Bỏ phiếu"
      },
      {
        japanese: "伝票",
        romaji: "Denpyou",
        vietnamese: "Hóa đơn"
      }
    ]
  },
  {
    id: 443,
    kanji: "姿",
    lesson: 28,
    onyomi: "シ",
    kunyomi: "すがた",
    meaning: "Tư, Dáng vẻ",
    sinoVietnamese: "Tư",
    examples: [
      {
        japanese: "姿",
        romaji: "Sugata",
        vietnamese: "Dáng vẻ"
      },
      {
        japanese: "姿勢",
        romaji: "Shisei",
        vietnamese: "Tư thế"
      }
    ]
  },
  {
    id: 444,
    kanji: "勢",
    lesson: 28,
    onyomi: "セイ",
    kunyomi: "いきお・い",
    meaning: "Thế, Tư thế",
    sinoVietnamese: "Thế",
    examples: [
      {
        japanese: "姿勢",
        romaji: "Shisei",
        vietnamese: "Tư thế"
      },
      {
        japanese: "勢い",
        romaji: "Ikioi",
        vietnamese: "Mạnh mẽ, tràn trề"
      }
    ]
  },
  {
    id: 445,
    kanji: "偉",
    lesson: 28,
    onyomi: "イ",
    kunyomi: "えら・い",
    meaning: "Vĩ, Vĩ đại",
    sinoVietnamese: "Vĩ",
    examples: [
      {
        japanese: "偉い",
        romaji: "Erai",
        vietnamese: "Vĩ đại, giỏi"
      },
      {
        japanese: "偉大な",
        romaji: "Idai na",
        vietnamese: "Vĩ đại"
      }
    ]
  },
  {
    id: 446,
    kanji: "達",
    lesson: 14,
    onyomi: "タツ",
    kunyomi: "たち",
    meaning: "Đạt, Đạt được",
    sinoVietnamese: "Đạt",
    examples: [
      {
        japanese: "友達",
        romaji: "Tomodachi",
        vietnamese: "Bạn bè"
      },
      {
        japanese: "配達",
        romaji: "Haitatsu",
        vietnamese: "Phân phát"
      },
      {
        japanese: "上達",
        romaji: "Joutatsu",
        vietnamese: "Tiến bộ"
      }
    ]
  },
  {
    id: 447,
    kanji: "損",
    lesson: 28,
    onyomi: "ソン",
    kunyomi: "そこ・なう",
    meaning: "Tổn, Thua lỗ",
    sinoVietnamese: "Tổn",
    examples: [
      {
        japanese: "損",
        romaji: "Son",
        vietnamese: "Lỗ, thiệt hại"
      },
      {
        japanese: "損害",
        romaji: "Songai",
        vietnamese: "Tổn hại"
      }
    ]
  },
  {
    id: 448,
    kanji: "予",
    lesson: 19,
    onyomi: "ヨ",
    kunyomi: "",
    meaning: "Dự, Dự định",
    sinoVietnamese: "Dự",
    examples: [
      {
        japanese: "予定",
        romaji: "Yotei",
        vietnamese: "Dự định"
      },
      {
        japanese: "予約",
        romaji: "Yoyaku",
        vietnamese: "Đặt trước"
      },
      {
        japanese: "天気予報",
        romaji: "Tenkiyohou",
        vietnamese: "Dự báo thời tiết"
      }
    ]
  },
  {
    id: 449,
    kanji: "算",
    lesson: 29,
    onyomi: "サン",
    kunyomi: "",
    meaning: "Toán, Tính toán",
    sinoVietnamese: "Toán",
    examples: [
      {
        japanese: "計算",
        romaji: "Keisan",
        vietnamese: "Tính toán"
      },
      {
        japanese: "予算",
        romaji: "Yosan",
        vietnamese: "Ngân sách"
      }
    ]
  },
  {
    id: 450,
    kanji: "勝",
    lesson: 29,
    onyomi: "ショウ",
    kunyomi: "か・つ",
    meaning: "Thắng, Chiến thắng",
    sinoVietnamese: "Thắng",
    examples: [
      {
        japanese: "勝ちます",
        romaji: "Kachimasu",
        vietnamese: "Thắng"
      },
      {
        japanese: "優勝",
        romaji: "Yuushou",
        vietnamese: "Vô địch"
      },
      {
        japanese: "勝負",
        romaji: "Shoubu",
        vietnamese: "Thắng thua, trận đấu"
      }
    ]
  },
  {
    id: 451,
    kanji: "負",
    lesson: 29,
    onyomi: "フ",
    kunyomi: "ま・ける",
    meaning: "Phụ, Thua",
    sinoVietnamese: "Phụ",
    examples: [
      {
        japanese: "負けます",
        romaji: "Makemasu",
        vietnamese: "Thua"
      },
      {
        japanese: "勝負",
        romaji: "Shoubu",
        vietnamese: "Thắng thua"
      },
      {
        japanese: "背負います",
        romaji: "Seoimasu",
        vietnamese: "Cõng, vác"
      }
    ]
  },
  {
    id: 452,
    kanji: "賛",
    lesson: 29,
    onyomi: "サン",
    kunyomi: "",
    meaning: "Tán, Tán thành",
    sinoVietnamese: "Tán",
    examples: [
      {
        japanese: "賛成",
        romaji: "Sansei",
        vietnamese: "Tán thành"
      }
    ]
  },
  {
    id: 453,
    kanji: "成",
    lesson: 29,
    onyomi: "セイ",
    kunyomi: "な・る",
    meaning: "Thành, Trở thành, Thành công",
    sinoVietnamese: "Thành",
    examples: [
      {
        japanese: "成功",
        romaji: "Seikou",
        vietnamese: "Thành công"
      },
      {
        japanese: "成人の日",
        romaji: "Seijin no hi",
        vietnamese: "Ngày lễ thành nhân"
      },
      {
        japanese: "完成",
        romaji: "Kansei",
        vietnamese: "Hoàn thành"
      }
    ]
  },
  {
    id: 454,
    kanji: "絶",
    lesson: 29,
    onyomi: "ゼツ",
    kunyomi: "た・える",
    meaning: "Tuyệt, Tuyệt đối",
    sinoVietnamese: "Tuyệt",
    examples: [
      {
        japanese: "絶対に",
        romaji: "Zettai ni",
        vietnamese: "Tuyệt đối"
      },
      {
        japanese: "絶望",
        romaji: "Zetsubou",
        vietnamese: "Tuyệt vọng"
      }
    ]
  },
  {
    id: 455,
    kanji: "対",
    lesson: 29,
    onyomi: "タイ",
    kunyomi: "",
    meaning: "Đối, Đối diện",
    sinoVietnamese: "Đối",
    examples: [
      {
        japanese: "反対",
        romaji: "Hantai",
        vietnamese: "Phản đối"
      },
      {
        japanese: "絶対",
        romaji: "Zettai",
        vietnamese: "Tuyệt đối"
      },
      {
        japanese: "対象",
        romaji: "Taishou",
        vietnamese: "Đối tượng"
      }
    ]
  },
  {
    id: 456,
    kanji: "続",
    lesson: 29,
    onyomi: "ゾク",
    kunyomi: "つづ・く",
    meaning: "Tục, Tiếp tục",
    sinoVietnamese: "Tục",
    examples: [
      {
        japanese: "続きます",
        romaji: "Tsuzukimasu",
        vietnamese: "Tiếp tục"
      },
      {
        japanese: "手続き",
        romaji: "Tetsuzuki",
        vietnamese: "Thủ tục"
      },
      {
        japanese: "連続",
        romaji: "Renzoku",
        vietnamese: "Liên tục"
      }
    ]
  },
  {
    id: 457,
    kanji: "辞",
    lesson: 29,
    onyomi: "ジ",
    kunyomi: "や・める",
    meaning: "Từ, Từ bỏ, Từ ngữ",
    sinoVietnamese: "Từ",
    examples: [
      {
        japanese: "辞めます",
        romaji: "Yamemasu",
        vietnamese: "Từ bỏ, nghỉ việc"
      },
      {
        japanese: "辞書",
        romaji: "Jisho",
        vietnamese: "Từ điển"
      },
      {
        japanese: "辞職",
        romaji: "Jishoku",
        vietnamese: "Từ chức"
      }
    ]
  },
  {
    id: 458,
    kanji: "投",
    lesson: 29,
    onyomi: "トウ",
    kunyomi: "な・げる",
    meaning: "Đầu, Ném",
    sinoVietnamese: "Đầu",
    examples: [
      {
        japanese: "投げます",
        romaji: "Nagemasu",
        vietnamese: "Ném"
      },
      {
        japanese: "投資",
        romaji: "Toushi",
        vietnamese: "Đầu tư"
      },
      {
        japanese: "投手",
        romaji: "Toushu",
        vietnamese: "Cầu thủ ném bóng (bóng chày)"
      }
    ]
  },
  {
    id: 459,
    kanji: "巻",
    lesson: 29,
    onyomi: "カン",
    kunyomi: "ま・く",
    meaning: "Quyển, Cuộn",
    sinoVietnamese: "Quyển",
    examples: [
      {
        japanese: "巻きます",
        romaji: "Makimasu",
        vietnamese: "Cuộn, quấn"
      },
      {
        japanese: "～巻",
        romaji: "Kan",
        vietnamese: "Quyển (tập sách)"
      },
      {
        japanese: "海苔巻き",
        romaji: "Norimaki",
        vietnamese: "Cơm cuộn rong biển"
      }
    ]
  },
  {
    id: 460,
    kanji: "約",
    lesson: 29,
    onyomi: "ヤク",
    kunyomi: "",
    meaning: "Ước, Lời hứa, Khoảng",
    sinoVietnamese: "Ước",
    examples: [
      {
        japanese: "約束",
        romaji: "Yakusoku",
        vietnamese: "Lời hứa"
      },
      {
        japanese: "予約",
        romaji: "Yoyaku",
        vietnamese: "Đặt trước"
      },
      {
        japanese: "約",
        romaji: "Yaku",
        vietnamese: "Khoảng"
      }
    ]
  },
  {
    id: 461,
    kanji: "束",
    lesson: 29,
    onyomi: "ソク",
    kunyomi: "たば",
    meaning: "Thúc, Bó",
    sinoVietnamese: "Thúc",
    examples: [
      {
        japanese: "花束",
        romaji: "Hanataba",
        vietnamese: "Bó hoa"
      },
      {
        japanese: "約束",
        romaji: "Yakusoku",
        vietnamese: "Lời hứa"
      },
      {
        japanese: "結束",
        romaji: "Kessoku",
        vietnamese: "Đoàn kết"
      }
    ]
  },
  {
    id: 462,
    kanji: "守",
    lesson: 18,
    onyomi: "シュ、ス",
    kunyomi: "まも・る",
    meaning: "Thủ, Bảo vệ, Giữ",
    sinoVietnamese: "Thủ",
    examples: [
      {
        japanese: "守ります",
        romaji: "Mamorimasu",
        vietnamese: "Bảo vệ, tuân thủ"
      },
      {
        japanese: "留守",
        romaji: "Rusu",
        vietnamese: "Vắng nhà"
      },
      {
        japanese: "お守り",
        romaji: "Omamori",
        vietnamese: "Bùa hộ mệnh"
      }
    ]
  },
  {
    id: 463,
    kanji: "過",
    lesson: 29,
    onyomi: "カ",
    kunyomi: "す・ぎる",
    meaning: "Quá, Qua, Quá khứ",
    sinoVietnamese: "Quá",
    examples: [
      {
        japanese: "過ぎます",
        romaji: "Sugimasu",
        vietnamese: "Quá, trôi qua"
      },
      {
        japanese: "過去",
        romaji: "Kako",
        vietnamese: "Quá khứ"
      },
      {
        japanese: "通過",
        romaji: "Tsuuka",
        vietnamese: "Thông qua"
      }
    ]
  },
  {
    id: 464,
    kanji: "夢",
    lesson: 29,
    onyomi: "ム",
    kunyomi: "ゆめ",
    meaning: "Mộng, Giấc mơ",
    sinoVietnamese: "Mộng",
    examples: [
      {
        japanese: "夢",
        romaji: "Yume",
        vietnamese: "Giấc mơ"
      },
      {
        japanese: "夢中",
        romaji: "Muchuu",
        vietnamese: "Say mê"
      },
      {
        japanese: "悪夢",
        romaji: "Akumu",
        vietnamese: "Ác mộng"
      }
    ]
  },
  {
    id: 465,
    kanji: "的",
    lesson: 30,
    onyomi: "テキ",
    kunyomi: "まと",
    meaning: "Đích, Mục đích, Tính chất",
    sinoVietnamese: "Đích",
    examples: [
      {
        japanese: "目的",
        romaji: "Mokuteki",
        vietnamese: "Mục đích"
      },
      {
        japanese: "的",
        romaji: "Mato",
        vietnamese: "Cái đích"
      },
      {
        japanese: "具体的",
        romaji: "Gutaiteki",
        vietnamese: "Cụ thể"
      }
    ]
  },
  {
    id: 466,
    kanji: "飛",
    lesson: 19,
    onyomi: "ヒ",
    kunyomi: "と・ぶ",
    meaning: "Phi, Bay",
    sinoVietnamese: "Phi",
    examples: [
      {
        japanese: "飛びます",
        romaji: "Tobimasu",
        vietnamese: "Bay"
      },
      {
        japanese: "飛行機",
        romaji: "Hikouki",
        vietnamese: "Máy bay"
      },
      {
        japanese: "飛び出します",
        romaji: "Tobidashimasu",
        vietnamese: "Lao ra"
      }
    ]
  },
  {
    id: 467,
    kanji: "機",
    lesson: 19,
    onyomi: "キ",
    kunyomi: "",
    meaning: "Cơ, Máy móc, Cơ hội",
    sinoVietnamese: "Cơ",
    examples: [
      {
        japanese: "機械",
        romaji: "Kikai",
        vietnamese: "Máy móc"
      },
      {
        japanese: "飛行機",
        romaji: "Hikouki",
        vietnamese: "Máy bay"
      },
      {
        japanese: "機会",
        romaji: "Kikai",
        vietnamese: "Cơ hội"
      }
    ]
  },
  {
    id: 468,
    kanji: "失",
    lesson: 30,
    onyomi: "シツ",
    kunyomi: "うしな・う",
    meaning: "Thất, Mất",
    sinoVietnamese: "Thất",
    examples: [
      {
        japanese: "失敗",
        romaji: "Shippai",
        vietnamese: "Thất bại"
      },
      {
        japanese: "失礼な",
        romaji: "Shitsurei na",
        vietnamese: "Thất lễ"
      },
      {
        japanese: "失います",
        romaji: "Ushinaimasu",
        vietnamese: "Mất"
      }
    ]
  },
  {
    id: 469,
    kanji: "鉄",
    lesson: 15,
    onyomi: "テツ",
    kunyomi: "",
    meaning: "Thiết, Sắt, Đường sắt",
    sinoVietnamese: "Thiết",
    examples: [
      {
        japanese: "地下鉄",
        romaji: "Chikatetsu",
        vietnamese: "Tàu điện ngầm"
      },
      {
        japanese: "鉄道",
        romaji: "Tetsudou",
        vietnamese: "Đường sắt"
      },
      {
        japanese: "私鉄",
        romaji: "Shitetsu",
        vietnamese: "Đường sắt tư nhân"
      }
    ]
  },
  {
    id: 470,
    kanji: "速",
    lesson: 30,
    onyomi: "ソク",
    kunyomi: "はや・い",
    meaning: "Tốc, Nhanh",
    sinoVietnamese: "Tốc",
    examples: [
      {
        japanese: "速い",
        romaji: "Hayai",
        vietnamese: "Nhanh"
      },
      {
        japanese: "速達",
        romaji: "Sokutatsu",
        vietnamese: "Chuyển phát nhanh"
      },
      {
        japanese: "速度",
        romaji: "Sokudo",
        vietnamese: "Tốc độ"
      }
    ]
  },
  {
    id: 471,
    kanji: "遅",
    lesson: 30,
    onyomi: "チ",
    kunyomi: "おそ・い、おく・れる",
    meaning: "Trì, Muộn, Chậm",
    sinoVietnamese: "Trì",
    examples: [
      {
        japanese: "遅い",
        romaji: "Osoi",
        vietnamese: "Chậm, muộn"
      },
      {
        japanese: "遅れます",
        romaji: "Okuremasu",
        vietnamese: "Trễ, muộn"
      },
      {
        japanese: "遅国",
        romaji: "Chikoku",
        vietnamese: "Đến muộn"
      }
    ]
  },
  {
    id: 472,
    kanji: "駐",
    lesson: 30,
    onyomi: "チュウ",
    kunyomi: "",
    meaning: "Trú, Đỗ xe",
    sinoVietnamese: "Trú",
    examples: [
      {
        japanese: "駐車場",
        romaji: "Chuushajou",
        vietnamese: "Bãi đỗ xe"
      },
      {
        japanese: "駐車",
        romaji: "Chuusha",
        vietnamese: "Đỗ xe"
      }
    ]
  },
  {
    id: 473,
    kanji: "船",
    lesson: 23,
    onyomi: "セン",
    kunyomi: "ふね",
    meaning: "Thuyền, Tàu thủy",
    sinoVietnamese: "Thuyền",
    examples: [
      {
        japanese: "船",
        romaji: "Fune",
        vietnamese: "Tàu, thuyền"
      },
      {
        japanese: "風船",
        romaji: "Fuusen",
        vietnamese: "Bóng bay"
      },
      {
        japanese: "船便",
        romaji: "Funabin",
        vietnamese: "Gửi bằng đường tàu"
      }
    ]
  },
  {
    id: 474,
    kanji: "座",
    lesson: 30,
    onyomi: "ザ",
    kunyomi: "すわ・る",
    meaning: "Tọa, Ngồi, Chỗ ngồi",
    sinoVietnamese: "Tọa",
    examples: [
      {
        japanese: "座ります",
        romaji: "Suwarimasu",
        vietnamese: "Ngồi"
      },
      {
        japanese: "座席",
        romaji: "Zaseki",
        vietnamese: "Chỗ ngồi"
      },
      {
        japanese: "口座",
        romaji: "Kouza",
        vietnamese: "Tài khoản (ngân hàng)"
      }
    ]
  },
  {
    id: 475,
    kanji: "島",
    lesson: 30,
    onyomi: "トウ",
    kunyomi: "しま",
    meaning: "Đảo, Hòn đảo",
    sinoVietnamese: "Đảo",
    examples: [
      {
        japanese: "島",
        romaji: "Shima",
        vietnamese: "Đảo"
      },
      {
        japanese: "半島",
        romaji: "Hantou",
        vietnamese: "Bán đảo"
      },
      {
        japanese: "島国",
        romaji: "Shimaguni",
        vietnamese: "Quốc đảo"
      }
    ]
  },
  {
    id: 476,
    kanji: "陸",
    lesson: 30,
    onyomi: "リク",
    kunyomi: "",
    meaning: "Lục, Lục đia, Đất liền",
    sinoVietnamese: "Lục",
    examples: [
      {
        japanese: "大陸",
        romaji: "Tairiku",
        vietnamese: "Lục địa"
      },
      {
        japanese: "陸",
        romaji: "Riku",
        vietnamese: "Đất liền"
      },
      {
        japanese: "着陸",
        romaji: "Chakuriku",
        vietnamese: "Hạ cánh"
      }
    ]
  },
  {
    id: 477,
    kanji: "橋",
    lesson: 30,
    onyomi: "キョウ",
    kunyomi: "はし",
    meaning: "Kiều, Cây cầu",
    sinoVietnamese: "Kiều",
    examples: [
      {
        japanese: "橋",
        romaji: "Hashi",
        vietnamese: "Cầu"
      },
      {
        japanese: "歩道橋",
        romaji: "Hodoukyou",
        vietnamese: "Cầu vượt cho người đi bộ"
      }
    ]
  },
  {
    id: 478,
    kanji: "皿",
    lesson: 30,
    onyomi: "",
    kunyomi: "さら",
    meaning: "Mãnh, Cái đĩa",
    sinoVietnamese: "Mãnh",
    examples: [
      {
        japanese: "皿",
        romaji: "Sara",
        vietnamese: "Cái đĩa"
      },
      {
        japanese: "灰皿",
        romaji: "Haizara",
        vietnamese: "Gạt tàn"
      }
    ]
  },
  {
    id: 479,
    kanji: "茶",
    lesson: 4,
    onyomi: "チャ、サ",
    kunyomi: "",
    meaning: "Trà, Trà đạo",
    sinoVietnamese: "Trà",
    examples: [
      {
        japanese: "お茶",
        romaji: "Ocha",
        vietnamese: "Trà"
      },
      {
        japanese: "茶色",
        romaji: "Chairo",
        vietnamese: "Màu nâu"
      },
      {
        japanese: "紅茶",
        romaji: "Koucha",
        vietnamese: "Hồng trà"
      }
    ]
  },
  {
    id: 480,
    kanji: "係",
    lesson: 18,
    onyomi: "ケイ",
    kunyomi: "かか・る",
    meaning: "Hệ, Quan hệ, Phụ trách",
    sinoVietnamese: "Hệ",
    examples: [
      {
        japanese: "関係",
        romaji: "Kankei",
        vietnamese: "Quan hệ"
      },
      {
        japanese: "係員",
        romaji: "Kakariin",
        vietnamese: "Người phụ trách"
      }
    ]
  },
  {
    id: 481,
    kanji: "礼",
    lesson: 31,
    onyomi: "レイ",
    kunyomi: "",
    meaning: "Lễ, Lễ nghi, Cảm ơn",
    sinoVietnamese: "Lễ",
    examples: [
      {
        japanese: "お礼",
        romaji: "Orei",
        vietnamese: "Lời cảm ơn"
      },
      {
        japanese: "失礼な",
        romaji: "Shitsurei na",
        vietnamese: "Thất lễ"
      }
    ]
  },
  {
    id: 482,
    kanji: "申",
    lesson: 31,
    onyomi: "シン",
    kunyomi: "もう・す",
    meaning: "Thân, Nói (khiêm nhường)",
    sinoVietnamese: "Thân",
    examples: [
      {
        japanese: "申します",
        romaji: "Moushimasu",
        vietnamese: "Nói (khiêm nhường), Tên là"
      },
      {
        japanese: "申し込み",
        romaji: "Moushikomi",
        vietnamese: "Đăng ký"
      },
      {
        japanese: "申請",
        romaji: "Shinsei",
        vietnamese: "Thỉnh cầu, đăng ký"
      }
    ]
  },
  {
    id: 483,
    kanji: "様",
    lesson: 31,
    onyomi: "ヨウ",
    kunyomi: "さま",
    meaning: "Dạng, Ngài, Hình dáng",
    sinoVietnamese: "Dạng",
    examples: [
      {
        japanese: "～様",
        romaji: "Sama",
        vietnamese: "Ngài ~"
      },
      {
        japanese: "様子",
        romaji: "Yousu",
        vietnamese: "Tình trạng"
      },
      {
        japanese: "様な",
        romaji: "You na",
        vietnamese: "Giống như"
      }
    ]
  },
  {
    id: 484,
    kanji: "調",
    lesson: 31,
    onyomi: "チョウ",
    kunyomi: "しら・べる",
    meaning: "Điều, Điều tra, Tình trạng",
    sinoVietnamese: "Điều",
    examples: [
      {
        japanese: "調べます",
        romaji: "Shirabemasu",
        vietnamese: "Điều tra, tra cứu"
      },
      {
        japanese: "調子",
        romaji: "Choushi",
        vietnamese: "Tình trạng"
      },
      {
        japanese: "強調",
        romaji: "Kyouchou",
        vietnamese: "Nhấn mạnh"
      }
    ]
  },
  {
    id: 485,
    kanji: "案",
    lesson: 31,
    onyomi: "アン",
    kunyomi: "",
    meaning: "Án, Đề án, Hướng dẫn",
    sinoVietnamese: "Án",
    examples: [
      {
        japanese: "案内",
        romaji: "Annai",
        vietnamese: "Hướng dẫn"
      },
      {
        japanese: "提案",
        romaji: "Teian",
        vietnamese: "Đề xuất"
      }
    ]
  },
  {
    id: 486,
    kanji: "内",
    lesson: 31,
    onyomi: "ナイ",
    kunyomi: "うち",
    meaning: "Nội, Bên trong",
    sinoVietnamese: "Nội",
    examples: [
      {
        japanese: "家内",
        romaji: "Kanai",
        vietnamese: "Vợ (mình)"
      },
      {
        japanese: "以内",
        romaji: "Inai",
        vietnamese: "Trong vòng"
      },
      {
        japanese: "国内",
        romaji: "Kokunai",
        vietnamese: "Trong nước"
      }
    ]
  },
  {
    id: 487,
    kanji: "談",
    lesson: 31,
    onyomi: "ダン",
    kunyomi: "",
    meaning: "Đàm, Hội đàm, Bàn bạc",
    sinoVietnamese: "Đàm",
    examples: [
      {
        japanese: "相談",
        romaji: "Soudan",
        vietnamese: "Thảo luận"
      },
      {
        japanese: "冗談",
        romaji: "Joudan",
        vietnamese: "Đùa"
      },
      {
        japanese: "会談",
        romaji: "Kaidan",
        vietnamese: "Hội đàm"
      }
    ]
  },
  {
    id: 488,
    kanji: "説",
    lesson: 31,
    onyomi: "セツ",
    kunyomi: "",
    meaning: "Thuyết, Thuyết minh, Giải thích",
    sinoVietnamese: "Thuyết",
    examples: [
      {
        japanese: "説明",
        romaji: "Setsumei",
        vietnamese: "Giải thích"
      },
      {
        japanese: "小説",
        romaji: "Shousetsu",
        vietnamese: "Tiểu thuyết"
      },
      {
        japanese: "伝説",
        romaji: "Densetsu",
        vietnamese: "Truyền thuyết"
      }
    ]
  },
  {
    id: 489,
    kanji: "課",
    lesson: 31,
    onyomi: "カ",
    kunyomi: "",
    meaning: "Khóa, Bài học, Phòng ban",
    sinoVietnamese: "Khóa",
    examples: [
      {
        japanese: "課長",
        romaji: "Kachou",
        vietnamese: "Trưởng phòng"
      },
      {
        japanese: "第～課",
        romaji: "Dai~ka",
        vietnamese: "Bài thứ ~"
      }
    ]
  },
  {
    id: 490,
    kanji: "願",
    lesson: 31,
    onyomi: "ガン",
    kunyomi: "ねが・う",
    meaning: "Nguyện, Mong ước",
    sinoVietnamese: "Nguyện",
    examples: [
      {
        japanese: "お願いします",
        romaji: "Onegaishimasu",
        vietnamese: "Làm ơn"
      },
      {
        japanese: "願書",
        romaji: "Gansho",
        vietnamese: "Đơn nguyện vọng"
      }
    ]
  },
  {
    id: 491,
    kanji: "頼",
    lesson: 31,
    onyomi: "ライ",
    kunyomi: "たの・む",
    meaning: "Lại, Nhờ cậy, Tin cậy",
    sinoVietnamese: "Lại",
    examples: [
      {
        japanese: "頼みます",
        romaji: "Tanomimasu",
        vietnamese: "Nhờ vả"
      },
      {
        japanese: "信頼",
        romaji: "Shinrai",
        vietnamese: "Tin cậy"
      }
    ]
  },
  {
    id: 492,
    kanji: "絡",
    lesson: 30,
    onyomi: "ラク",
    kunyomi: "から・む",
    meaning: "Lạc, Liên lạc, Rối",
    sinoVietnamese: "Lạc",
    examples: [
      {
        japanese: "連絡",
        romaji: "Renraku",
        vietnamese: "Liên lạc"
      }
    ]
  },
  {
    id: 493,
    kanji: "伝",
    lesson: 31,
    onyomi: "デン",
    kunyomi: "つた・える",
    meaning: "Truyền, Truyền đạt",
    sinoVietnamese: "Truyền",
    examples: [
      {
        japanese: "伝えます",
        romaji: "Tsutaemasu",
        vietnamese: "Truyền đạt"
      },
      {
        japanese: "手伝います",
        romaji: "Tetsudaimasu",
        vietnamese: "Giúp đỡ"
      },
      {
        japanese: "伝説",
        romaji: "Densetsu",
        vietnamese: "Truyền thuyết"
      }
    ]
  },
  {
    id: 494,
    kanji: "募",
    lesson: 31,
    onyomi: "ボ",
    kunyomi: "つの・る",
    meaning: "Mộ, Chiêu mộ",
    sinoVietnamese: "Mộ",
    examples: [
      {
        japanese: "募集",
        romaji: "Boshuu",
        vietnamese: "Tuyển dụng"
      },
      {
        japanese: "募金",
        romaji: "Bokin",
        vietnamese: "Quyên tiền"
      }
    ]
  },
  {
    id: 495,
    kanji: "想",
    lesson: 31,
    onyomi: "ソウ、ソ",
    kunyomi: "",
    meaning: "Tưởng, Tưởng tượng",
    sinoVietnamese: "Tưởng",
    examples: [
      {
        japanese: "想像",
        romaji: "Souzou",
        vietnamese: "Tưởng tượng"
      },
      {
        japanese: "感想",
        romaji: "Kansou",
        vietnamese: "Cảm nghĩ"
      },
      {
        japanese: "理想",
        romaji: "Risou",
        vietnamese: "Lý tưởng"
      }
    ]
  },
  {
    id: 496,
    kanji: "念",
    lesson: 13,
    onyomi: "ネン",
    kunyomi: "",
    meaning: "Niệm, Kỷ niệm, Suy nghĩ",
    sinoVietnamese: "Niệm",
    examples: [
      {
        japanese: "残念",
        romaji: "Zannen",
        vietnamese: "Đáng tiếc"
      },
      {
        japanese: "記念",
        romaji: "Kinen",
        vietnamese: "Kỷ niệm"
      }
    ]
  },
  {
    id: 497,
    kanji: "因",
    lesson: 32,
    onyomi: "イン",
    kunyomi: "",
    meaning: "Nhân, Nguyên nhân",
    sinoVietnamese: "Nhân",
    examples: [
      {
        japanese: "原因",
        romaji: "Genin",
        vietnamese: "Nguyên nhân"
      }
    ]
  },
  {
    id: 498,
    kanji: "危",
    lesson: 32,
    onyomi: "キ",
    kunyomi: "あぶ・ない",
    meaning: "Nguy, Nguy hiểm",
    sinoVietnamese: "Nguy",
    examples: [
      {
        japanese: "危ない",
        romaji: "Abunai",
        vietnamese: "Nguy hiểm"
      },
      {
        japanese: "危険",
        romaji: "Kiken",
        vietnamese: "Sự nguy hiểm"
      }
    ]
  },
  {
    id: 499,
    kanji: "険",
    lesson: 32,
    onyomi: "ケン",
    kunyomi: "けわ・しい",
    meaning: "Hiểm, Hiểm trở, Nguy hiểm",
    sinoVietnamese: "Hiểm",
    examples: [
      {
        japanese: "危険",
        romaji: "Kiken",
        vietnamese: "Nguy hiểm"
      },
      {
        japanese: "保険",
        romaji: "Hoken",
        vietnamese: "Bảo hiểm"
      },
      {
        japanese: "冒険",
        romaji: "Bouken",
        vietnamese: "Mạo hiểm"
      }
    ]
  },
  {
    id: 500,
    kanji: "拾",
    lesson: 17,
    onyomi: "シュウ",
    kunyomi: "ひろ・う",
    meaning: "Thập, Nhặt",
    sinoVietnamese: "Thập",
    examples: [
      {
        japanese: "拾います",
        romaji: "Hiroimasu",
        vietnamese: "Nhặt"
      }
    ]
  },
  {
    id: 501,
    kanji: "捨",
    lesson: 17,
    onyomi: "シャ",
    kunyomi: "す・てる",
    meaning: "Xả, Vứt bỏ",
    sinoVietnamese: "Xả",
    examples: [
      {
        japanese: "捨てます",
        romaji: "Sutemasu",
        vietnamese: "Vứt bỏ"
      }
    ]
  },
  {
    id: 502,
    kanji: "戻",
    lesson: 32,
    onyomi: "レイ",
    kunyomi: "もど・る",
    meaning: "Lệ, Quay lại",
    sinoVietnamese: "Lệ",
    examples: [
      {
        japanese: "戻ります",
        romaji: "Modorimasu",
        vietnamese: "Quay lại"
      },
      {
        japanese: "戻します",
        romaji: "Modoshimasu",
        vietnamese: "Để lại, hoàn lại"
      }
    ]
  },
  {
    id: 503,
    kanji: "吸",
    lesson: 32,
    onyomi: "キュウ",
    kunyomi: "す・う",
    meaning: "Hấp, Hút",
    sinoVietnamese: "Hấp",
    examples: [
      {
        japanese: "吸います",
        romaji: "Suimasu",
        vietnamese: "Hút"
      },
      {
        japanese: "呼吸",
        romaji: "Kokyuu",
        vietnamese: "Hô hấp"
      }
    ]
  },
  {
    id: 504,
    kanji: "呼",
    lesson: 32,
    onyomi: "コ",
    kunyomi: "よ・ぶ",
    meaning: "Hô, Gọi, Hô hấp",
    sinoVietnamese: "Hô",
    examples: [
      {
        japanese: "呼びます",
        romaji: "Yobimasu",
        vietnamese: "Gọi"
      },
      {
        japanese: "呼吸",
        romaji: "Kokyuu",
        vietnamese: "Hô hấp"
      }
    ]
  },
  {
    id: 505,
    kanji: "押",
    lesson: 32,
    onyomi: "オウ",
    kunyomi: "お・す",
    meaning: "Áp, Ấn, Đẩy",
    sinoVietnamese: "Áp",
    examples: [
      {
        japanese: "押します",
        romaji: "Oshimasu",
        vietnamese: "Ấn, đẩy"
      },
      {
        japanese: "押入れ",
        romaji: "Oshiire",
        vietnamese: "Tủ âm tường"
      }
    ]
  },
  {
    id: 506,
    kanji: "亡",
    lesson: 32,
    onyomi: "ボウ",
    kunyomi: "な・くなる",
    meaning: "Vong, Mất, Chết",
    sinoVietnamese: "Vong",
    examples: [
      {
        japanese: "亡くなります",
        romaji: "Nakunarimasu",
        vietnamese: "Mất, qua đời"
      },
      {
        japanese: "死亡",
        romaji: "Shibou",
        vietnamese: "Tử vong"
      }
    ]
  },
  {
    id: 507,
    kanji: "君",
    lesson: 32,
    onyomi: "クン",
    kunyomi: "きみ",
    meaning: "Quân, Bạn, Em, Vua",
    sinoVietnamese: "Quân",
    examples: [
      {
        japanese: "君",
        romaji: "Kimi",
        vietnamese: "Bạn, em"
      },
      {
        japanese: "～君",
        romaji: "Kun",
        vietnamese: "Cậu ~"
      }
    ]
  },
  {
    id: 508,
    kanji: "然",
    lesson: 32,
    onyomi: "ゼン、ネン",
    kunyomi: "",
    meaning: "Nhiên, Tự nhiên",
    sinoVietnamese: "Nhiên",
    examples: [
      {
        japanese: "全然",
        romaji: "Zenzen",
        vietnamese: "Hoàn toàn (không)"
      },
      {
        japanese: "自然",
        romaji: "Shizen",
        vietnamese: "Tự nhiên"
      },
      {
        japanese: "突然",
        romaji: "Totsuzen",
        vietnamese: "Đột nhiên"
      }
    ]
  },
  {
    id: 509,
    kanji: "引",
    lesson: 32,
    onyomi: "イン",
    kunyomi: "ひ・く",
    meaning: "Dẫn, Kéo",
    sinoVietnamese: "Dẫn",
    examples: [
      {
        japanese: "引きます",
        romaji: "Hikimasu",
        vietnamese: "Kéo"
      },
      {
        japanese: "引き出し",
        romaji: "Hikidashi",
        vietnamese: "Ngăn kéo"
      },
      {
        japanese: "引越し",
        romaji: "Hikkoshi",
        vietnamese: "Chuyển nhà"
      }
    ]
  },
  {
    id: 510,
    kanji: "退",
    lesson: 32,
    onyomi: "タイ",
    kunyomi: "しりぞ・く",
    meaning: "Thoái, Rút lui, Nghỉ việc",
    sinoVietnamese: "Thoái",
    examples: [
      {
        japanese: "退院",
        romaji: "Taiin",
        vietnamese: "Xuất viện"
      },
      {
        japanese: "退学",
        romaji: "Taigaku",
        vietnamese: "Thôi học"
      },
      {
        japanese: "引退",
        romaji: "Intai",
        vietnamese: "Giải nghệ"
      }
    ]
  },
  {
    id: 511,
    kanji: "局",
    lesson: 23,
    onyomi: "キョク",
    kunyomi: "",
    meaning: "Cục, Cục, Ván cờ",
    sinoVietnamese: "Cục",
    examples: [
      {
        japanese: "郵便局",
        romaji: "Yuubinkyoku",
        vietnamese: "Bưu điện"
      },
      {
        japanese: "薬局",
        romaji: "Yakkyoku",
        vietnamese: "Hiệu thuốc"
      },
      {
        japanese: "放送局",
        romaji: "Housoukyoku",
        vietnamese: "Đài truyền hình"
      }
    ]
  },
  {
    id: 512,
    kanji: "専",
    lesson: 32,
    onyomi: "セン",
    kunyomi: "もっぱ・ら",
    meaning: "Chuyên, Chuyên môn",
    sinoVietnamese: "Chuyên",
    examples: [
      {
        japanese: "専門",
        romaji: "Senmon",
        vietnamese: "Chuyên môn"
      },
      {
        japanese: "専攻",
        romaji: "Senkou",
        vietnamese: "Chuyên ngành"
      }
    ]
  },
  {
    id: 513,
    kanji: "禾",
    lesson: 0,
    onyomi: "カ",
    kunyomi: "いね",
    meaning: "Lúa, Cây lúa",
    sinoVietnamese: "HÒA",
    examples: []
  },
  {
    id: 514,
    kanji: "ム",
    lesson: 0,
    onyomi: "シ",
    kunyomi: "わたくし",
    meaning: "Riêng tư, Cá nhân",
    sinoVietnamese: "KHƯ/TƯ",
    examples: []
  },
  {
    id: 515,
    kanji: "亻",
    lesson: 0,
    onyomi: "ジン",
    kunyomi: "ひと",
    meaning: "Người (Nhân đứng)",
    sinoVietnamese: "NHÂN",
    examples: []
  },
  {
    id: 516,
    kanji: "氵",
    lesson: 0,
    onyomi: "スイ",
    kunyomi: "みず",
    meaning: "Nước (Thủy ba)",
    sinoVietnamese: "THỦY",
    examples: []
  },
  {
    id: 517,
    kanji: "扌",
    lesson: 0,
    onyomi: "シュ",
    kunyomi: "て",
    meaning: "Tay (Thủ)",
    sinoVietnamese: "THỦ",
    examples: []
  },
  {
    id: 518,
    kanji: "宀",
    lesson: 0,
    onyomi: "メン",
    kunyomi: "うかんむり",
    meaning: "Mái nhà (Miên)",
    sinoVietnamese: "MIÊN",
    examples: []
  },
  {
    id: 519,
    kanji: "辶",
    lesson: 0,
    onyomi: "チャク",
    kunyomi: "しんにょう",
    meaning: "Bước đi, Con đường (Xước)",
    sinoVietnamese: "XƯỚC",
    examples: []
  },
  {
    id: 520,
    kanji: "阝",
    lesson: 0,
    onyomi: "フ",
    kunyomi: "こざと",
    meaning: "Gò đất / Thôn ấp (Phụ/Ấp)",
    sinoVietnamese: "PHỤ/ẤP",
    examples: []
  },
  {
    id: 521,
    kanji: "艹",
    lesson: 0,
    onyomi: "ソウ",
    kunyomi: "くさ",
    meaning: "Cỏ (Thảo)",
    sinoVietnamese: "THẢO",
    examples: []
  },
  {
    id: 522,
    kanji: "心",
    lesson: 0,
    onyomi: "シン",
    kunyomi: "こころ",
    meaning: "Trái tim (Tâm)",
    sinoVietnamese: "TÂM",
    examples: []
  },
  {
    id: 523,
    kanji: "忄",
    lesson: 0,
    onyomi: "シン",
    kunyomi: "りっしんべん",
    meaning: "Trái tim (Tâm đứng)",
    sinoVietnamese: "TÂM",
    examples: []
  }
];
