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
        japanese: "中央",
        romaji: "Chuuou",
        vietnamese: "Trung ương, Trung tâm"
      }
    ]
  },
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
        japanese: "僕",
        romaji: "Boku",
        vietnamese: "Tôi (nam giới dùng)"
      }
    ]
  },
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
        japanese: "娘",
        romaji: "Musume",
        vietnamese: "Con gái"
      }
    ]
  },
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
        japanese: "将来",
        romaji: "Shourai",
        vietnamese: "Tương lai"
      }
    ]
  },
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
        japanese: "賛成",
        romaji: "Sansei",
        vietnamese: "Tán thành"
      }
    ]
  },
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
        japanese: "連絡",
        romaji: "Renraku",
        vietnamese: "Liên lạc"
      }
    ]
  },
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
        japanese: "原因",
        romaji: "Genin",
        vietnamese: "Nguyên nhân"
      }
    ]
  },
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
        japanese: "拾います",
        romaji: "Hiroimasu",
        vietnamese: "Nhặt"
      }
    ]
  },
      {
        japanese: "捨てます",
        romaji: "Sutemasu",
        vietnamese: "Vứt bỏ"
      }
    ]
  },
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
