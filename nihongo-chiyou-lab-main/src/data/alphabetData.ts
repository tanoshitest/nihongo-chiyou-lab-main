export interface CharacterExample {
  ja: string;
  romaji: string;
  vi: string;
  en?: string;
  image?: string;
}

export interface CharacterData {
  id: string;
  char?: string;
  romaji?: string;
  image?: string;
  examples?: CharacterExample[];
  isEmpty?: boolean;
}

export interface AlphabetDataSet {
  hiragana: CharacterData[];
  katakana: CharacterData[];
  combined: CharacterData[];
  combinedKatakana: CharacterData[];
}

export const ALPHABET_DATA: AlphabetDataSet = {
  hiragana: [
    // Row A - Full
    { id: 'h_a', char: 'あ', romaji: 'a', image: 'https://placehold.co/100?text=Ant', examples: [
      { ja: 'ありがとう', romaji: 'arigatou', vi: 'Cảm ơn' },
      { ja: 'あさ', romaji: 'asa', vi: 'Buổi sáng' },
      { ja: 'あめ', romaji: 'ame', vi: 'Mưa / Kẹo' },
      { ja: 'あか', romaji: 'aka', vi: 'Màu đỏ' },
      { ja: 'あい', romaji: 'ai', vi: 'Tình yêu' }
    ]},
    { id: 'h_i', char: 'い', romaji: 'i', image: 'https://placehold.co/100?text=Ear', examples: [
      { ja: 'いいえ', romaji: 'iie', vi: 'Không' },
      { ja: 'いす', romaji: 'isu', vi: 'Cái ghế' },
      { ja: 'いぬ', romaji: 'inu', vi: 'Con chó' },
      { ja: 'いえ', romaji: 'ie', vi: 'Ngôi nhà' },
      { ja: 'いち', romaji: 'ichi', vi: 'Số 1' }
    ]},
    { id: 'h_u', char: 'う', romaji: 'u', image: 'https://placehold.co/100?text=Rabbit', examples: [
      { ja: 'うえ', romaji: 'ue', vi: 'Bên trên' },
      { ja: 'うみ', romaji: 'umi', vi: 'Biển' },
      { ja: 'うま', romaji: 'uma', vi: 'Con ngựa' },
      { ja: 'うた', romaji: 'uta', vi: 'Bài hát' },
      { ja: 'うしろ', romaji: 'ushiro', vi: 'Phía sau' }
    ]},
    { id: 'h_e', char: 'え', romaji: 'e', image: 'https://placehold.co/100?text=Exercise', examples: [
      { ja: 'えき', romaji: 'eki', vi: 'Nhà ga' },
      { ja: 'えんぴつ', romaji: 'enpitsu', vi: 'Bút chì' },
      { ja: 'えいが', romaji: 'eiga', vi: 'Phim ảnh' },
      { ja: 'えび', romaji: 'ebi', vi: 'Con tôm' },
      { ja: 'え', romaji: 'e', vi: 'Bức tranh' }
    ]},
    { id: 'h_o', char: 'お', romaji: 'o', image: 'https://placehold.co/100?text=Onigiri', examples: [
      { ja: 'おはよう', romaji: 'ohayou', vi: 'Chào buổi sáng' },
      { ja: 'おかね', romaji: 'okane', vi: 'Tiền' },
      { ja: 'おさけ', romaji: 'osake', vi: 'Rượu' },
      { ja: 'おとこ', romaji: 'otoko', vi: 'Con trai' },
      { ja: 'おちゃ', romaji: 'ocha', vi: 'Trà' }
    ]},
    // Row Ka
    { id: 'h_ka', char: 'か', romaji: 'ka', image: 'https://placehold.co/100?text=Ka', examples: [
      { ja: 'かさ', romaji: 'kasa', vi: 'Cái ô' },
      { ja: 'かお', romaji: 'kao', vi: 'Khuôn mặt' },
      { ja: 'かわ', romaji: 'kawa', vi: 'Sông' },
      { ja: 'かみ', romaji: 'kami', vi: 'Giấy / Tóc' },
      { ja: 'かぞく', romaji: 'kazoku', vi: 'Gia đình' }
    ]},
    { id: 'h_ki', char: 'き', romaji: 'ki', image: 'https://placehold.co/100?text=Ki', examples: [
      { ja: 'きれい', romaji: 'kirei', vi: 'Đẹp' },
      { ja: 'きもの', romaji: 'kimono', vi: 'Kimono' },
      { ja: 'きって', romaji: 'kitte', vi: 'Tem' },
      { ja: 'きょう', romaji: 'kyou', vi: 'Hôm nay' },
      { ja: 'きた', romaji: 'kita', vi: 'Phía bắc' }
    ]},
    { id: 'h_ku', char: 'く', romaji: 'ku', image: 'https://placehold.co/100?text=Ku', examples: [
      { ja: 'くるま', romaji: 'kuruma', vi: 'Xe hơi' },
      { ja: 'くつ', romaji: 'kutsu', vi: 'Giày' },
      { ja: 'くち', romaji: 'kuchi', vi: 'Miệng' },
      { ja: 'くも', romaji: 'kumo', vi: 'Mây / Nhện' },
      { ja: 'くに', romaji: 'kuni', vi: 'Đất nước' }
    ]},
    { id: 'h_ke', char: 'け', romaji: 'ke', image: 'https://placehold.co/100?text=Ke', examples: [
      { ja: 'けさ', romaji: 'kesa', vi: 'Sáng nay' },
      { ja: 'けいたい', romaji: 'keitai', vi: 'Điện thoại' },
      { ja: 'けんか', romaji: 'kenka', vi: 'Cãi nhau' },
      { ja: 'けしゴム', romaji: 'keshigomu', vi: 'Tẩy' },
      { ja: 'けが', romaji: 'kega', vi: 'Vết thương' }
    ]},
    { id: 'h_ko', char: 'こ', romaji: 'ko', image: 'https://placehold.co/100?text=Ko', examples: [
      { ja: 'ここ', romaji: 'koko', vi: 'Ở đây' },
      { ja: 'こども', romaji: 'kodomo', vi: 'Trẻ em' },
      { ja: 'こえ', romaji: 'koe', vi: 'Giọng nói' },
      { ja: 'こうえん', romaji: 'kouen', vi: 'Công viên' },
      { ja: 'ことば', romaji: 'kotoba', vi: 'Từ ngữ' }
    ]},
    // Row Sa
    { id: 'h_sa', char: 'さ', romaji: 'sa', image: 'https://placehold.co/100?text=Sa', examples: [
      { ja: 'さくら', romaji: 'sakura', vi: 'Hoa anh đào' },
      { ja: 'さかな', romaji: 'sakana', vi: 'Cá' },
      { ja: 'さむい', romaji: 'samui', vi: 'Lạnh' },
      { ja: 'さとう', romaji: 'satou', vi: 'Đường' },
      { ja: 'さん', romaji: 'san', vi: 'Số 3' }
    ]},
    { id: 'h_shi', char: 'し', romaji: 'shi', image: 'https://placehold.co/100?text=Shi', examples: [
      { ja: 'しろ', romaji: 'shiro', vi: 'Màu trắng' },
      { ja: 'しんぶん', romaji: 'shinbun', vi: 'Báo' },
      { ja: 'しごと', romaji: 'shigoto', vi: 'Công việc' },
      { ja: 'した', romaji: 'shita', vi: 'Dưới' },
      { ja: 'しお', romaji: 'shio', vi: 'Muối' }
    ]},
    { id: 'h_su', char: 'す', romaji: 'su', image: 'https://placehold.co/100?text=Su', examples: [
      { ja: 'すし', romaji: 'sushi', vi: 'Sushi' },
      { ja: 'すき', romaji: 'suki', vi: 'Thích' },
      { ja: 'すいか', romaji: 'suika', vi: 'Dưa hấu' },
      { ja: 'すずしい', romaji: 'suzushii', vi: 'Mát mẻ' },
      { ja: 'すな', romaji: 'suna', vi: 'Cát' }
    ]},
    { id: 'h_se', char: 'せ', romaji: 'se', image: 'https://placehold.co/100?text=Se', examples: [
      { ja: 'せんせい', romaji: 'sensei', vi: 'Giáo viên' },
      { ja: 'せかい', romaji: 'sekai', vi: 'Thế giới' },
      { ja: 'せき', romaji: 'seki', vi: 'Ghế / Ho' },
      { ja: 'せなか', romaji: 'senaka', vi: 'Lưng' },
      { ja: 'せいかつ', romaji: 'seikatsu', vi: 'Cuộc sống' }
    ]},
    { id: 'h_so', char: 'そ', romaji: 'so', image: 'https://placehold.co/100?text=So', examples: [
      { ja: 'そら', romaji: 'sora', vi: 'Bầu trời' },
      { ja: 'そと', romaji: 'soto', vi: 'Bên ngoài' },
      { ja: 'そこ', romaji: 'soko', vi: 'Ở đó' },
      { ja: 'そうじ', romaji: 'souji', vi: 'Dọn dẹp' },
      { ja: 'そば', romaji: 'soba', vi: 'Mì soba' }
    ]},
    // Row Ta
    { id: 'h_ta', char: 'た', romaji: 'ta', image: 'https://placehold.co/100?text=Ta', examples: [
      { ja: 'たべる', romaji: 'taberu', vi: 'Ăn' },
      { ja: 'たまご', romaji: 'tamago', vi: 'Trứng' },
      { ja: 'たかい', romaji: 'takai', vi: 'Cao / Đắt' },
      { ja: 'たのしい', romaji: 'tanoshii', vi: 'Vui' },
      { ja: 'たいよう', romaji: 'taiyou', vi: 'Mặt trời' }
    ]},
    { id: 'h_chi', char: 'ち', romaji: 'chi', image: 'https://placehold.co/100?text=Chi', examples: [
      { ja: 'ちいさい', romaji: 'chiisai', vi: 'Nhỏ' },
      { ja: 'ちず', romaji: 'chizu', vi: 'Bản đồ' },
      { ja: 'ちかい', romaji: 'chikai', vi: 'Gần' },
      { ja: 'ちち', romaji: 'chichi', vi: 'Bố' },
      { ja: 'ちから', romaji: 'chikara', vi: 'Sức mạnh' }
    ]},
    { id: 'h_tsu', char: 'つ', romaji: 'tsu', image: 'https://placehold.co/100?text=Tsu', examples: [
      { ja: 'つくえ', romaji: 'tsukue', vi: 'Bàn' },
      { ja: 'つき', romaji: 'tsuki', vi: 'Mặt trăng' },
      { ja: 'つよい', romaji: 'tsuyoi', vi: 'Mạnh' },
      { ja: 'つめたい', romaji: 'tsumetai', vi: 'Lạnh (vật)' },
      { ja: 'つかれる', romaji: 'tsukareru', vi: 'Mệt' }
    ]},
    { id: 'h_te', char: 'て', romaji: 'te', image: 'https://placehold.co/100?text=Te', examples: [
      { ja: 'て', romaji: 'te', vi: 'Tay' },
      { ja: 'てんき', romaji: 'tenki', vi: 'Thời tiết' },
      { ja: 'てがみ', romaji: 'tegami', vi: 'Thư' },
      { ja: 'てんさい', romaji: 'tensai', vi: 'Thiên tài' },
      { ja: 'てつだう', romaji: 'tetsudau', vi: 'Giúp đỡ' }
    ]},
    { id: 'h_to', char: 'と', romaji: 'to', image: 'https://placehold.co/100?text=To', examples: [
      { ja: 'ともだち', romaji: 'tomodachi', vi: 'Bạn bè' },
      { ja: 'とけい', romaji: 'tokei', vi: 'Đồng hồ' },
      { ja: 'とおい', romaji: 'tooi', vi: 'Xa' },
      { ja: 'とり', romaji: 'tori', vi: 'Chim' },
      { ja: 'とうきょう', romaji: 'toukyou', vi: 'Tokyo' }
    ]},
    // Row Na
    { id: 'h_na', char: 'な', romaji: 'na', image: 'https://placehold.co/100?text=Na', examples: [
      { ja: 'なまえ', romaji: 'namae', vi: 'Tên' },
      { ja: 'なつ', romaji: 'natsu', vi: 'Mùa hè' },
      { ja: 'ながい', romaji: 'nagai', vi: 'Dài' },
      { ja: 'なか', romaji: 'naka', vi: 'Bên trong' },
      { ja: 'ななつ', romaji: 'nanatsu', vi: 'Số 7' }
    ]},
    { id: 'h_ni', char: 'に', romaji: 'ni', image: 'https://placehold.co/100?text=Ni', examples: [
      { ja: 'にほん', romaji: 'nihon', vi: 'Nhật Bản' },
      { ja: 'にく', romaji: 'niku', vi: 'Thịt' },
      { ja: 'にわ', romaji: 'niwa', vi: 'Vườn' },
      { ja: 'にちようび', romaji: 'nichiyoubi', vi: 'Chủ nhật' },
      { ja: 'にんげん', romaji: 'ningen', vi: 'Con người' }
    ]},
    { id: 'h_nu', char: 'ぬ', romaji: 'nu', image: 'https://placehold.co/100?text=Nu', examples: [
      { ja: 'ぬる', romaji: 'nuru', vi: 'Sơn' },
      { ja: 'ぬすむ', romaji: 'nusumu', vi: 'Trộm' },
      { ja: 'ぬの', romaji: 'nuno', vi: 'Vải' },
      { ja: 'ぬま', romaji: 'numa', vi: 'Đầm lầy' },
      { ja: 'ぬいぐるみ', romaji: 'nuigurumi', vi: 'Thú nhồi bông' }
    ]},
    { id: 'h_ne', char: 'ね', romaji: 'ne', image: 'https://placehold.co/100?text=Ne', examples: [
      { ja: 'ねこ', romaji: 'neko', vi: 'Con mèo' },
      { ja: 'ねる', romaji: 'neru', vi: 'Ngủ' },
      { ja: 'ねつ', romaji: 'netsu', vi: 'Sốt' },
      { ja: 'ねだん', romaji: 'nedan', vi: 'Giá cả' },
      { ja: 'ねがう', romaji: 'negau', vi: 'Ước' }
    ]},
    { id: 'h_no', char: 'の', romaji: 'no', image: 'https://placehold.co/100?text=No', examples: [
      { ja: 'のむ', romaji: 'nomu', vi: 'Uống' },
      { ja: 'のり', romaji: 'nori', vi: 'Rong biển' },
      { ja: 'のこる', romaji: 'nokoru', vi: 'Còn lại' },
      { ja: 'のうぎょう', romaji: 'nougyou', vi: 'Nông nghiệp' },
      { ja: 'のど', romaji: 'nodo', vi: 'Cổ họng' }
    ]},
    // Row Ha
    { id: 'h_ha', char: 'は', romaji: 'ha', image: 'https://placehold.co/100?text=Ha', examples: [
      { ja: 'はな', romaji: 'hana', vi: 'Hoa / Mũi' },
      { ja: 'はし', romaji: 'hashi', vi: 'Đũa / Cầu' },
      { ja: 'はる', romaji: 'haru', vi: 'Mùa xuân' },
      { ja: 'はやい', romaji: 'hayai', vi: 'Nhanh' },
      { ja: 'はは', romaji: 'haha', vi: 'Mẹ' }
    ]},
    { id: 'h_hi', char: 'ひ', romaji: 'hi', image: 'https://placehold.co/100?text=Hi', examples: [
      { ja: 'ひと', romaji: 'hito', vi: 'Người' },
      { ja: 'ひる', romaji: 'hiru', vi: 'Buổi trưa' },
      { ja: 'ひだり', romaji: 'hidari', vi: 'Bên trái' },
      { ja: 'ひま', romaji: 'hima', vi: 'Rảnh rỗi' },
      { ja: 'ひつよう', romaji: 'hitsuyou', vi: 'Cần thiết' }
    ]},
    { id: 'h_fu', char: 'ふ', romaji: 'fu', image: 'https://placehold.co/100?text=Fu', examples: [
      { ja: 'ふゆ', romaji: 'fuyu', vi: 'Mùa đông' },
      { ja: 'ふね', romaji: 'fune', vi: 'Thuyền' },
      { ja: 'ふるい', romaji: 'furui', vi: 'Cũ' },
      { ja: 'ふたつ', romaji: 'futatsu', vi: 'Hai cái' },
      { ja: 'ふくろ', romaji: 'fukuro', vi: 'Túi' }
    ]},
    { id: 'h_he', char: 'へ', romaji: 'he', image: 'https://placehold.co/100?text=He', examples: [
      { ja: 'へや', romaji: 'heya', vi: 'Phòng' },
      { ja: 'へた', romaji: 'heta', vi: 'Không giỏi' },
      { ja: 'へいわ', romaji: 'heiwa', vi: 'Hòa bình' },
      { ja: 'へん', romaji: 'hen', vi: 'Lạ' },
      { ja: 'へんじ', romaji: 'henji', vi: 'Trả lời' }
    ]},
    { id: 'h_ho', char: 'ほ', romaji: 'ho', image: 'https://placehold.co/100?text=Ho', examples: [
      { ja: 'ほん', romaji: 'hon', vi: 'Sách' },
      { ja: 'ほし', romaji: 'hoshi', vi: 'Ngôi sao' },
      { ja: 'ほそい', romaji: 'hosoi', vi: 'Mảnh' },
      { ja: 'ほんとう', romaji: 'hontou', vi: 'Thật sự' },
      { ja: 'ほっかいどう', romaji: 'hokkaidou', vi: 'Hokkaido' }
    ]},
    // Row Ma
    { id: 'h_ma', char: 'ま', romaji: 'ma', image: 'https://placehold.co/100?text=Ma', examples: [
      { ja: 'まち', romaji: 'machi', vi: 'Thành phố' },
      { ja: 'まど', romaji: 'mado', vi: 'Cửa sổ' },
      { ja: 'まえ', romaji: 'mae', vi: 'Phía trước' },
      { ja: 'まつり', romaji: 'matsuri', vi: 'Lễ hội' },
      { ja: 'まいにち', romaji: 'mainichi', vi: 'Mỗi ngày' }
    ]},
    { id: 'h_mi', char: 'み', romaji: 'mi', image: 'https://placehold.co/100?text=Mi', examples: [
      { ja: 'みず', romaji: 'mizu', vi: 'Nước' },
      { ja: 'みみ', romaji: 'mimi', vi: 'Tai' },
      { ja: 'みせ', romaji: 'mise', vi: 'Cửa hàng' },
      { ja: 'みち', romaji: 'michi', vi: 'Đường' },
      { ja: 'みどり', romaji: 'midori', vi: 'Màu xanh lá' }
    ]},
    { id: 'h_mu', char: 'む', romaji: 'mu', image: 'https://placehold.co/100?text=Mu', examples: [
      { ja: 'むら', romaji: 'mura', vi: 'Làng' },
      { ja: 'むずかしい', romaji: 'muzukashii', vi: 'Khó' },
      { ja: 'むすこ', romaji: 'musuko', vi: 'Con trai' },
      { ja: 'むすめ', romaji: 'musume', vi: 'Con gái' },
      { ja: 'むかし', romaji: 'mukashi', vi: 'Ngày xưa' }
    ]},
    { id: 'h_me', char: 'め', romaji: 'me', image: 'https://placehold.co/100?text=Me', examples: [
      { ja: 'め', romaji: 'me', vi: 'Mắt' },
      { ja: 'めがね', romaji: 'megane', vi: 'Kính' },
      { ja: 'めし', romaji: 'meshi', vi: 'Cơm' },
      { ja: 'めんどう', romaji: 'mendou', vi: 'Phiền phức' },
      { ja: 'めずらしい', romaji: 'mezurashii', vi: 'Hiếm' }
    ]},
    { id: 'h_mo', char: 'も', romaji: 'mo', image: 'https://placehold.co/100?text=Mo', examples: [
      { ja: 'もの', romaji: 'mono', vi: 'Đồ vật' },
      { ja: 'もり', romaji: 'mori', vi: 'Rừng' },
      { ja: 'もん', romaji: 'mon', vi: 'Cổng' },
      { ja: 'もくようび', romaji: 'mokuyoubi', vi: 'Thứ 5' },
      { ja: 'もちろん', romaji: 'mochiron', vi: 'Tất nhiên' }
    ]},
    // Row Ya - Contains Empty Slots
    { id: 'h_ya', char: 'や', romaji: 'ya', image: 'https://placehold.co/100?text=Yak', examples: [
      { ja: 'やま', romaji: 'yama', vi: 'Núi' },
      { ja: 'やさい', romaji: 'yasai', vi: 'Rau' },
      { ja: 'やすみ', romaji: 'yasumi', vi: 'Nghỉ ngơi' },
      { ja: 'やくそく', romaji: 'yakusoku', vi: 'Lời hứa' },
      { ja: 'やきゅう', romaji: 'yakyuu', vi: 'Bóng chày' }
    ]},
    { id: 'h_empty_ya1', isEmpty: true },
    { id: 'h_yu', char: 'ゆ', romaji: 'yu', image: 'https://placehold.co/100?text=UFO', examples: [
      { ja: 'ゆき', romaji: 'yuki', vi: 'Tuyết' },
      { ja: 'ゆめ', romaji: 'yume', vi: 'Giấc mơ' },
      { ja: 'ゆかた', romaji: 'yukata', vi: 'Áo Yukata' },
      { ja: 'ゆうびん', romaji: 'yuubin', vi: 'Bưu điện' },
      { ja: 'ゆうめい', romaji: 'yuumei', vi: 'Nổi tiếng' }
    ]},
    { id: 'h_empty_ya2', isEmpty: true },
    { id: 'h_yo', char: 'よ', romaji: 'yo', image: 'https://placehold.co/100?text=Yoga', examples: [
      { ja: 'よる', romaji: 'yoru', vi: 'Buổi tối' },
      { ja: 'よむ', romaji: 'yomu', vi: 'Đọc' },
      { ja: 'よっか', romaji: 'yokka', vi: 'Ngày mồng 4' },
      { ja: 'ようふく', romaji: 'youfuku', vi: 'Quần áo tây' },
      { ja: 'よやく', romaji: 'yoyaku', vi: 'Đặt chỗ' }
    ]},
    // Row Ra
    { id: 'h_ra', char: 'ら', romaji: 'ra', image: 'https://placehold.co/100?text=Ra', examples: [
      { ja: 'らいねん', romaji: 'rainen', vi: 'Năm sau' },
      { ja: 'らくだ', romaji: 'rakuda', vi: 'Lạc đà' },
      { ja: 'らいしゅう', romaji: 'raishuu', vi: 'Tuần sau' },
      { ja: 'らじお', romaji: 'rajio', vi: 'Radio' },
      { ja: 'らーめん', romaji: 'raamen', vi: 'Mì ramen' }
    ]},
    { id: 'h_ri', char: 'り', romaji: 'ri', image: 'https://placehold.co/100?text=Ri', examples: [
      { ja: 'りんご', romaji: 'ringo', vi: 'Táo' },
      { ja: 'りょうり', romaji: 'ryouri', vi: 'Nấu ăn' },
      { ja: 'りゆう', romaji: 'riyuu', vi: 'Lý do' },
      { ja: 'りょこう', romaji: 'ryokou', vi: 'Du lịch' },
      { ja: 'りかい', romaji: 'rikai', vi: 'Hiểu' }
    ]},
    { id: 'h_ru', char: 'る', romaji: 'ru', image: 'https://placehold.co/100?text=Ru', examples: [
      { ja: 'るす', romaji: 'rusu', vi: 'Vắng nhà' },
      { ja: 'るーる', romaji: 'ruuru', vi: 'Quy tắc' },
      { ja: 'るーむ', romaji: 'ruumu', vi: 'Phòng' },
      { ja: 'るいじ', romaji: 'ruiji', vi: 'Tương tự' },
      { ja: 'るりいろ', romaji: 'ruriiro', vi: 'Màu lam' }
    ]},
    { id: 'h_re', char: 'れ', romaji: 're', image: 'https://placehold.co/100?text=Re', examples: [
      { ja: 'れきし', romaji: 'rekishi', vi: 'Lịch sử' },
      { ja: 'れんしゅう', romaji: 'renshuu', vi: 'Luyện tập' },
      { ja: 'れいぞうこ', romaji: 'reizouko', vi: 'Tủ lạnh' },
      { ja: 'れい', romaji: 'rei', vi: 'Số 0' },
      { ja: 'れんらく', romaji: 'renraku', vi: 'Liên lạc' }
    ]},
    { id: 'h_ro', char: 'ろ', romaji: 'ro', image: 'https://placehold.co/100?text=Ro', examples: [
      { ja: 'ろく', romaji: 'roku', vi: 'Số 6' },
      { ja: 'ろうそく', romaji: 'rousoku', vi: 'Nến' },
      { ja: 'ろうじん', romaji: 'roujin', vi: 'Người già' },
      { ja: 'ろんぶん', romaji: 'ronbun', vi: 'Luận văn' },
      { ja: 'ろうか', romaji: 'rouka', vi: 'Hành lang' }
    ]},
    // Row Wa - Contains Empty Slots
    { id: 'h_wa', char: 'わ', romaji: 'wa', image: 'https://placehold.co/100?text=Wa', examples: [
      { ja: 'わたし', romaji: 'watashi', vi: 'Tôi' },
      { ja: 'わかる', romaji: 'wakaru', vi: 'Hiểu' },
      { ja: 'わすれる', romaji: 'wasureru', vi: 'Quên' },
      { ja: 'わるい', romaji: 'warui', vi: 'Xấu' },
      { ja: 'わらう', romaji: 'warau', vi: 'Cười' }
    ]},
    { id: 'h_empty_wa1', isEmpty: true },
    { id: 'h_empty_wa2', isEmpty: true },
    { id: 'h_empty_wa3', isEmpty: true },
    { id: 'h_wo', char: 'を', romaji: 'wo', image: 'https://placehold.co/100?text=Wo', examples: [
      { ja: 'ほんをよむ', romaji: 'hon wo yomu', vi: 'Đọc sách' },
      { ja: 'ごはんをたべる', romaji: 'gohan wo taberu', vi: 'Ăn cơm' },
      { ja: 'みずをのむ', romaji: 'mizu wo nomu', vi: 'Uống nước' },
      { ja: 'えいがをみる', romaji: 'eiga wo miru', vi: 'Xem phim' },
      { ja: 'てがみをかく', romaji: 'tegami wo kaku', vi: 'Viết thư' }
    ]},
    // Row N - Single character
    { id: 'h_n', char: 'ん', romaji: 'n', image: 'https://placehold.co/100?text=N', examples: [
      { ja: 'にほん', romaji: 'nihon', vi: 'Nhật Bản' },
      { ja: 'せんせい', romaji: 'sensei', vi: 'Giáo viên' },
      { ja: 'おんがく', romaji: 'ongaku', vi: 'Âm nhạc' },
      { ja: 'にんげん', romaji: 'ningen', vi: 'Con người' },
      { ja: 'しんかんせん', romaji: 'shinkansen', vi: 'Tàu cao tốc' }
    ]},
    { id: 'h_empty_n1', isEmpty: true },
    { id: 'h_empty_n2', isEmpty: true },
    { id: 'h_empty_n3', isEmpty: true },
    { id: 'h_empty_n4', isEmpty: true },
  ],

  katakana: [
    // Row A - Full
    { id: 'k_a', char: 'ア', romaji: 'a', image: 'https://placehold.co/100?text=Ice', examples: [
      { ja: 'アイス', romaji: 'aisu', vi: 'Kem' },
      { ja: 'アメリカ', romaji: 'amerika', vi: 'Mỹ' },
      { ja: 'アパート', romaji: 'apaato', vi: 'Căn hộ' },
      { ja: 'アニメ', romaji: 'anime', vi: 'Hoạt hình' },
      { ja: 'アルバイト', romaji: 'arubaito', vi: 'Việc làm thêm' }
    ]},
    { id: 'k_i', char: 'イ', romaji: 'i', image: 'https://placehold.co/100?text=Ink', examples: [
      { ja: 'イギリス', romaji: 'igirisu', vi: 'Anh' },
      { ja: 'インターネット', romaji: 'intaanetto', vi: 'Internet' },
      { ja: 'イタリア', romaji: 'itaria', vi: 'Ý' },
      { ja: 'イベント', romaji: 'ibento', vi: 'Sự kiện' },
      { ja: 'インド', romaji: 'indo', vi: 'Ấn Độ' }
    ]},
    { id: 'k_u', char: 'ウ', romaji: 'u', image: 'https://placehold.co/100?text=Wool', examples: [
      { ja: 'ウイルス', romaji: 'uirusu', vi: 'Virus' },
      { ja: 'ウェブ', romaji: 'webu', vi: 'Web' },
      { ja: 'ウール', romaji: 'uuru', vi: 'Len' },
      { ja: 'ウエスト', romaji: 'uesuto', vi: 'Eo' },
      { ja: 'ウインナー', romaji: 'uinnaa', vi: 'Xúc xích' }
    ]},
    { id: 'k_e', char: 'エ', romaji: 'e', image: 'https://placehold.co/100?text=Elevator', examples: [
      { ja: 'エレベーター', romaji: 'erebeetaa', vi: 'Thang máy' },
      { ja: 'エアコン', romaji: 'eakon', vi: 'Máy lạnh' },
      { ja: 'エネルギー', romaji: 'enerugii', vi: 'Năng lượng' },
      { ja: 'エンジン', romaji: 'enjin', vi: 'Động cơ' },
      { ja: 'エキス', romaji: 'ekisu', vi: 'Tinh chất' }
    ]},
    { id: 'k_o', char: 'オ', romaji: 'o', image: 'https://placehold.co/100?text=Opera', examples: [
      { ja: 'オレンジ', romaji: 'orenji', vi: 'Cam' },
      { ja: 'オフィス', romaji: 'ofisu', vi: 'Văn phòng' },
      { ja: 'オーストラリア', romaji: 'oosutoraria', vi: 'Úc' },
      { ja: 'オリンピック', romaji: 'orinpikku', vi: 'Olympic' },
      { ja: 'オンライン', romaji: 'onrain', vi: 'Online' }
    ]},
    // Row Ka
    { id: 'k_ka', char: 'カ', romaji: 'ka', image: 'https://placehold.co/100?text=Ka', examples: [
      { ja: 'カメラ', romaji: 'kamera', vi: 'Máy ảnh' },
      { ja: 'カレンダー', romaji: 'karendaa', vi: 'Lịch' },
      { ja: 'カフェ', romaji: 'kafe', vi: 'Quán cà phê' },
      { ja: 'カード', romaji: 'kaado', vi: 'Thẻ' },
      { ja: 'カラオケ', romaji: 'karaoke', vi: 'Karaoke' }
    ]},
    { id: 'k_ki', char: 'キ', romaji: 'ki', image: 'https://placehold.co/100?text=Ki', examples: [
      { ja: 'キッチン', romaji: 'kicchin', vi: 'Nhà bếp' },
      { ja: 'キロ', romaji: 'kiro', vi: 'Kilo' },
      { ja: 'キャンプ', romaji: 'kyanpu', vi: 'Cắm trại' },
      { ja: 'キー', romaji: 'kii', vi: 'Chìa khóa' },
      { ja: 'キス', romaji: 'kisu', vi: 'Nụ hôn' }
    ]},
    { id: 'k_ku', char: 'ク', romaji: 'ku', image: 'https://placehold.co/100?text=Ku', examples: [
      { ja: 'クラス', romaji: 'kurasu', vi: 'Lớp học' },
      { ja: 'クリスマス', romaji: 'kurisumasu', vi: 'Giáng sinh' },
      { ja: 'クッキー', romaji: 'kukkii', vi: 'Bánh quy' },
      { ja: 'クイズ', romaji: 'kuizu', vi: 'Câu đố' },
      { ja: 'クーラー', romaji: 'kuuraa', vi: 'Máy lạnh' }
    ]},
    { id: 'k_ke', char: 'ケ', romaji: 'ke', image: 'https://placehold.co/100?text=Ke', examples: [
      { ja: 'ケーキ', romaji: 'keeki', vi: 'Bánh ngọt' },
      { ja: 'ケース', romaji: 'keesu', vi: 'Hộp' },
      { ja: 'ケチャップ', romaji: 'kechappu', vi: 'Tương cà' },
      { ja: 'ケーブル', romaji: 'keeburu', vi: 'Cáp' },
      { ja: 'ケア', romaji: 'kea', vi: 'Chăm sóc' }
    ]},
    { id: 'k_ko', char: 'コ', romaji: 'ko', image: 'https://placehold.co/100?text=Ko', examples: [
      { ja: 'コーヒー', romaji: 'koohii', vi: 'Cà phê' },
      { ja: 'コンビニ', romaji: 'konbini', vi: 'Cửa hàng tiện lợi' },
      { ja: 'コンピューター', romaji: 'konpyuutaa', vi: 'Máy tính' },
      { ja: 'コピー', romaji: 'kopii', vi: 'Sao chép' },
      { ja: 'コート', romaji: 'kooto', vi: 'Áo khoác' }
    ]},
    // Row Sa
    { id: 'k_sa', char: 'サ', romaji: 'sa', image: 'https://placehold.co/100?text=Sa', examples: [
      { ja: 'サラダ', romaji: 'sarada', vi: 'Salad' },
      { ja: 'サッカー', romaji: 'sakkaa', vi: 'Bóng đá' },
      { ja: 'サイト', romaji: 'saito', vi: 'Trang web' },
      { ja: 'サービス', romaji: 'saabisu', vi: 'Dịch vụ' },
      { ja: 'サンドイッチ', romaji: 'sandoicchi', vi: 'Bánh sandwich' }
    ]},
    { id: 'k_shi', char: 'シ', romaji: 'shi', image: 'https://placehold.co/100?text=Shi', examples: [
      { ja: 'シャツ', romaji: 'shatsu', vi: 'Áo sơ mi' },
      { ja: 'システム', romaji: 'shisutemu', vi: 'Hệ thống' },
      { ja: 'シンプル', romaji: 'shinpuru', vi: 'Đơn giản' },
      { ja: 'シーズン', romaji: 'shiizun', vi: 'Mùa' },
      { ja: 'シャワー', romaji: 'shawaa', vi: 'Vòi sen' }
    ]},
    { id: 'k_su', char: 'ス', romaji: 'su', image: 'https://placehold.co/100?text=Su', examples: [
      { ja: 'スーパー', romaji: 'suupaa', vi: 'Siêu thị' },
      { ja: 'スポーツ', romaji: 'supootsu', vi: 'Thể thao' },
      { ja: 'スマホ', romaji: 'sumaho', vi: 'Điện thoại' },
      { ja: 'ストレス', romaji: 'sutoresu', vi: 'Căng thẳng' },
      { ja: 'スタイル', romaji: 'sutairu', vi: 'Phong cách' }
    ]},
    { id: 'k_se', char: 'セ', romaji: 'se', image: 'https://placehold.co/100?text=Se', examples: [
      { ja: 'セーター', romaji: 'seetaa', vi: 'Áo len' },
      { ja: 'センター', romaji: 'sentaa', vi: 'Trung tâm' },
      { ja: 'セット', romaji: 'setto', vi: 'Bộ' },
      { ja: 'セール', romaji: 'seeru', vi: 'Giảm giá' },
      { ja: 'セミナー', romaji: 'seminaa', vi: 'Hội thảo' }
    ]},
    { id: 'k_so', char: 'ソ', romaji: 'so', image: 'https://placehold.co/100?text=So', examples: [
      { ja: 'ソファ', romaji: 'sofa', vi: 'Ghế sofa' },
      { ja: 'ソフト', romaji: 'sofuto', vi: 'Phần mềm' },
      { ja: 'ソース', romaji: 'soosu', vi: 'Nước sốt' },
      { ja: 'ソロ', romaji: 'soro', vi: 'Đơn' },
      { ja: 'ソケット', romaji: 'soketto', vi: 'Ổ cắm' }
    ]},
    // Row Ta
    { id: 'k_ta', char: 'タ', romaji: 'ta', image: 'https://placehold.co/100?text=Ta', examples: [
      { ja: 'タクシー', romaji: 'takushii', vi: 'Taxi' },
      { ja: 'タオル', romaji: 'taoru', vi: 'Khăn' },
      { ja: 'タイプ', romaji: 'taipu', vi: 'Loại' },
      { ja: 'タバコ', romaji: 'tabako', vi: 'Thuốc lá' },
      { ja: 'タイトル', romaji: 'taitoru', vi: 'Tiêu đề' }
    ]},
    { id: 'k_chi', char: 'チ', romaji: 'chi', image: 'https://placehold.co/100?text=Chi', examples: [
      { ja: 'チーズ', romaji: 'chiizu', vi: 'Phô mai' },
      { ja: 'チケット', romaji: 'chiketto', vi: 'Vé' },
      { ja: 'チョコレート', romaji: 'chokoreeto', vi: 'Sôcôla' },
      { ja: 'チャンス', romaji: 'chansu', vi: 'Cơ hội' },
      { ja: 'チーム', romaji: 'chiimu', vi: 'Đội' }
    ]},
    { id: 'k_tsu', char: 'ツ', romaji: 'tsu', image: 'https://placehold.co/100?text=Tsu', examples: [
      { ja: 'ツアー', romaji: 'tsuaa', vi: 'Tour du lịch' },
      { ja: 'ツール', romaji: 'tsuuru', vi: 'Công cụ' },
      { ja: 'ツイッター', romaji: 'tsuittaa', vi: 'Twitter' },
      { ja: 'ツナ', romaji: 'tsuna', vi: 'Cá ngừ' },
      { ja: 'ツリー', romaji: 'tsurii', vi: 'Cây' }
    ]},
    { id: 'k_te', char: 'テ', romaji: 'te', image: 'https://placehold.co/100?text=Te', examples: [
      { ja: 'テレビ', romaji: 'terebi', vi: 'TV' },
      { ja: 'テスト', romaji: 'tesuto', vi: 'Bài kiểm tra' },
      { ja: 'テーブル', romaji: 'teeburu', vi: 'Bàn' },
      { ja: 'テーマ', romaji: 'teema', vi: 'Chủ đề' },
      { ja: 'テクノロジー', romaji: 'tekunorojii', vi: 'Công nghệ' }
    ]},
    { id: 'k_to', char: 'ト', romaji: 'to', image: 'https://placehold.co/100?text=To', examples: [
      { ja: 'トイレ', romaji: 'toire', vi: 'Nhà vệ sinh' },
      { ja: 'トマト', romaji: 'tomato', vi: 'Cà chua' },
      { ja: 'ドア', romaji: 'doa', vi: 'Cửa' },
      { ja: 'トレーニング', romaji: 'toreeningu', vi: 'Tập luyện' },
      { ja: 'トップ', romaji: 'toppu', vi: 'Đỉnh' }
    ]},
    // Row Na
    { id: 'k_na', char: 'ナ', romaji: 'na', image: 'https://placehold.co/100?text=Na', examples: [
      { ja: 'ナイフ', romaji: 'naifu', vi: 'Dao' },
      { ja: 'ナンバー', romaji: 'nanbaa', vi: 'Số' },
      { ja: 'ナビ', romaji: 'nabi', vi: 'Dẫn đường' },
      { ja: 'ナース', romaji: 'naasu', vi: 'Y tá' },
      { ja: 'ナチュラル', romaji: 'nachuraru', vi: 'Tự nhiên' }
    ]},
    { id: 'k_ni', char: 'ニ', romaji: 'ni', image: 'https://placehold.co/100?text=Ni', examples: [
      { ja: 'ニュース', romaji: 'nyuusu', vi: 'Tin tức' },
      { ja: 'ニット', romaji: 'nitto', vi: 'Đan' },
      { ja: 'ニーズ', romaji: 'niizu', vi: 'Nhu cầu' },
      { ja: 'ニコニコ', romaji: 'nikoniko', vi: 'Cười tươi' },
      { ja: 'ニンジン', romaji: 'ninjin', vi: 'Cà rốt' }
    ]},
    { id: 'k_nu', char: 'ヌ', romaji: 'nu', image: 'https://placehold.co/100?text=Nu', examples: [
      { ja: 'ヌードル', romaji: 'nuudoru', vi: 'Mì' },
      { ja: 'ヌード', romaji: 'nuudo', vi: 'Khỏa thân' },
      { ja: 'ヌガー', romaji: 'nugaa', vi: 'Kẹo nougat' },
      { ja: 'ヌン', romaji: 'nun', vi: 'Nữ tu' },
      { ja: 'ヌーベル', romaji: 'nuuberu', vi: 'Nouvelle' }
    ]},
    { id: 'k_ne', char: 'ネ', romaji: 'ne', image: 'https://placehold.co/100?text=Ne', examples: [
      { ja: 'ネット', romaji: 'netto', vi: 'Mạng' },
      { ja: 'ネクタイ', romaji: 'nekutai', vi: 'Cà vạt' },
      { ja: 'ネガティブ', romaji: 'negateibu', vi: 'Tiêu cực' },
      { ja: 'ネイル', romaji: 'neiru', vi: 'Móng tay' },
      { ja: 'ネーム', romaji: 'neemu', vi: 'Tên' }
    ]},
    { id: 'k_no', char: 'ノ', romaji: 'no', image: 'https://placehold.co/100?text=No', examples: [
      { ja: 'ノート', romaji: 'nooto', vi: 'Vở' },
      { ja: 'ノック', romaji: 'nokku', vi: 'Gõ cửa' },
      { ja: 'ノーマル', romaji: 'noomaru', vi: 'Bình thường' },
      { ja: 'ノベル', romaji: 'noberu', vi: 'Tiểu thuyết' },
      { ja: 'ノイズ', romaji: 'noizu', vi: 'Tiếng ồn' }
    ]},
    // Row Ha
    { id: 'k_ha', char: 'ハ', romaji: 'ha', image: 'https://placehold.co/100?text=Ha', examples: [
      { ja: 'ハンバーガー', romaji: 'hanbaagaa', vi: 'Hamburger' },
      { ja: 'ハート', romaji: 'haato', vi: 'Trái tim' },
      { ja: 'ハイキング', romaji: 'haikingu', vi: 'Đi bộ' },
      { ja: 'ハッピー', romaji: 'happii', vi: 'Hạnh phúc' },
      { ja: 'ハロウィン', romaji: 'harowin', vi: 'Halloween' }
    ]},
    { id: 'k_hi', char: 'ヒ', romaji: 'hi', image: 'https://placehold.co/100?text=Hi', examples: [
      { ja: 'ヒーロー', romaji: 'hiiroo', vi: 'Anh hùng' },
      { ja: 'ヒント', romaji: 'hinto', vi: 'Gợi ý' },
      { ja: 'ヒット', romaji: 'hitto', vi: 'Hit' },
      { ja: 'ヒール', romaji: 'hiiru', vi: 'Gót giày' },
      { ja: 'ヒーター', romaji: 'hiitaa', vi: 'Máy sưởi' }
    ]},
    { id: 'k_fu', char: 'フ', romaji: 'fu', image: 'https://placehold.co/100?text=Fu', examples: [
      { ja: 'フランス', romaji: 'furansu', vi: 'Pháp' },
      { ja: 'フライ', romaji: 'furai', vi: 'Chiên' },
      { ja: 'ファッション', romaji: 'fasshon', vi: 'Thời trang' },
      { ja: 'ファン', romaji: 'fan', vi: 'Fan hâm mộ' },
      { ja: 'フルーツ', romaji: 'furuutsu', vi: 'Trái cây' }
    ]},
    { id: 'k_he', char: 'ヘ', romaji: 'he', image: 'https://placehold.co/100?text=He', examples: [
      { ja: 'ヘルメット', romaji: 'herumetto', vi: 'Mũ bảo hiểm' },
      { ja: 'ヘア', romaji: 'hea', vi: 'Tóc' },
      { ja: 'ヘルシー', romaji: 'herushii', vi: 'Khỏe mạnh' },
      { ja: 'ヘリコプター', romaji: 'herikoputaa', vi: 'Trực thăng' },
      { ja: 'ヘッドホン', romaji: 'heddohon', vi: 'Tai nghe' }
    ]},
    { id: 'k_ho', char: 'ホ', romaji: 'ho', image: 'https://placehold.co/100?text=Ho', examples: [
      { ja: 'ホテル', romaji: 'hoteru', vi: 'Khách sạn' },
      { ja: 'ホーム', romaji: 'hoomu', vi: 'Nhà' },
      { ja: 'ホットドッグ', romaji: 'hottodoggu', vi: 'Hot dog' },
      { ja: 'ホワイト', romaji: 'howaito', vi: 'Màu trắng' },
      { ja: 'ホラー', romaji: 'horaa', vi: 'Kinh dị' }
    ]},
    // Row Ma
    { id: 'k_ma', char: 'マ', romaji: 'ma', image: 'https://placehold.co/100?text=Ma', examples: [
      { ja: 'マクドナルド', romaji: 'makudonarudo', vi: 'McDonald' },
      { ja: 'マンガ', romaji: 'manga', vi: 'Manga' },
      { ja: 'マスク', romaji: 'masuku', vi: 'Khẩu trang' },
      { ja: 'マーケット', romaji: 'maaketto', vi: 'Chợ' },
      { ja: 'マイク', romaji: 'maiku', vi: 'Micro' }
    ]},
    { id: 'k_mi', char: 'ミ', romaji: 'mi', image: 'https://placehold.co/100?text=Mi', examples: [
      { ja: 'ミルク', romaji: 'miruku', vi: 'Sữa' },
      { ja: 'ミュージック', romaji: 'myuujikku', vi: 'Âm nhạc' },
      { ja: 'ミス', romaji: 'misu', vi: 'Lỗi' },
      { ja: 'ミーティング', romaji: 'miitingu', vi: 'Cuộc họp' },
      { ja: 'ミニ', romaji: 'mini', vi: 'Nhỏ' }
    ]},
    { id: 'k_mu', char: 'ム', romaji: 'mu', image: 'https://placehold.co/100?text=Mu', examples: [
      { ja: 'ムービー', romaji: 'muubii', vi: 'Phim' },
      { ja: 'ムード', romaji: 'muudo', vi: 'Không khí' },
      { ja: 'ムダ', romaji: 'muda', vi: 'Lãng phí' },
      { ja: 'ムース', romaji: 'muusu', vi: 'Mousse' },
      { ja: 'ムーン', romaji: 'muun', vi: 'Mặt trăng' }
    ]},
    { id: 'k_me', char: 'メ', romaji: 'me', image: 'https://placehold.co/100?text=Me', examples: [
      { ja: 'メール', romaji: 'meeru', vi: 'Email' },
      { ja: 'メニュー', romaji: 'menyuu', vi: 'Thực đơn' },
      { ja: 'メッセージ', romaji: 'messeeji', vi: 'Tin nhắn' },
      { ja: 'メロン', romaji: 'meron', vi: 'Dưa gang' },
      { ja: 'メンバー', romaji: 'menbaa', vi: 'Thành viên' }
    ]},
    { id: 'k_mo', char: 'モ', romaji: 'mo', image: 'https://placehold.co/100?text=Mo', examples: [
      { ja: 'モデル', romaji: 'moderu', vi: 'Người mẫu' },
      { ja: 'モード', romaji: 'moodo', vi: 'Chế độ' },
      { ja: 'モニター', romaji: 'monitaa', vi: 'Màn hình' },
      { ja: 'モダン', romaji: 'modan', vi: 'Hiện đại' },
      { ja: 'モバイル', romaji: 'mobairu', vi: 'Di động' }
    ]},
    // Row Ya - Contains Empty Slots
    { id: 'k_ya', char: 'ヤ', romaji: 'ya', image: 'https://placehold.co/100?text=Ya', examples: [
      { ja: 'ヤフー', romaji: 'yafuu', vi: 'Yahoo' },
      { ja: 'ヤング', romaji: 'yangu', vi: 'Trẻ' },
      { ja: 'ヤード', romaji: 'yaado', vi: 'Yard' },
      { ja: 'ヤンキー', romaji: 'yankii', vi: 'Yankee' },
      { ja: 'ヤク', romaji: 'yaku', vi: 'Bò Tây Tạng' }
    ]},
    { id: 'k_empty_ya1', isEmpty: true },
    { id: 'k_yu', char: 'ユ', romaji: 'yu', image: 'https://placehold.co/100?text=Yu', examples: [
      { ja: 'ユニフォーム', romaji: 'yunifoomu', vi: 'Đồng phục' },
      { ja: 'ユーザー', romaji: 'yuuzaa', vi: 'Người dùng' },
      { ja: 'ユーチューブ', romaji: 'yuuchuubu', vi: 'YouTube' },
      { ja: 'ユニーク', romaji: 'yuniiku', vi: 'Độc đáo' },
      { ja: 'ユーモア', romaji: 'yuumoa', vi: 'Hài hước' }
    ]},
    { id: 'k_empty_ya2', isEmpty: true },
    { id: 'k_yo', char: 'ヨ', romaji: 'yo', image: 'https://placehold.co/100?text=Yo', examples: [
      { ja: 'ヨーグルト', romaji: 'yooguruto', vi: 'Sữa chua' },
      { ja: 'ヨーロッパ', romaji: 'yooroppa', vi: 'Châu Âu' },
      { ja: 'ヨガ', romaji: 'yoga', vi: 'Yoga' },
      { ja: 'ヨット', romaji: 'yotto', vi: 'Du thuyền' },
      { ja: 'ヨークシャー', romaji: 'yookushaa', vi: 'Yorkshire' }
    ]},
    // Row Ra
    { id: 'k_ra', char: 'ラ', romaji: 'ra', image: 'https://placehold.co/100?text=Ra', examples: [
      { ja: 'ラーメン', romaji: 'raamen', vi: 'Mì ramen' },
      { ja: 'ラジオ', romaji: 'rajio', vi: 'Radio' },
      { ja: 'ライブ', romaji: 'raibu', vi: 'Live' },
      { ja: 'ライン', romaji: 'rain', vi: 'Line' },
      { ja: 'ランチ', romaji: 'ranchi', vi: 'Bữa trưa' }
    ]},
    { id: 'k_ri', char: 'リ', romaji: 'ri', image: 'https://placehold.co/100?text=Ri', examples: [
      { ja: 'リモコン', romaji: 'rimokon', vi: 'Điều khiển' },
      { ja: 'リスト', romaji: 'risuto', vi: 'Danh sách' },
      { ja: 'リズム', romaji: 'rizumu', vi: 'Nhịp điệu' },
      { ja: 'リアル', romaji: 'riaru', vi: 'Thực tế' },
      { ja: 'リング', romaji: 'ringu', vi: 'Vòng' }
    ]},
    { id: 'k_ru', char: 'ル', romaji: 'ru', image: 'https://placehold.co/100?text=Ru', examples: [
      { ja: 'ルール', romaji: 'ruuru', vi: 'Quy tắc' },
      { ja: 'ルーム', romaji: 'ruumu', vi: 'Phòng' },
      { ja: 'ルート', romaji: 'ruuto', vi: 'Lộ trình' },
      { ja: 'ルビー', romaji: 'rubii', vi: 'Hồng ngọc' },
      { ja: 'ルネサンス', romaji: 'runesansu', vi: 'Phục Hưng' }
    ]},
    { id: 'k_re', char: 'レ', romaji: 're', image: 'https://placehold.co/100?text=Re', examples: [
      { ja: 'レストラン', romaji: 'resutoran', vi: 'Nhà hàng' },
      { ja: 'レポート', romaji: 'repooto', vi: 'Báo cáo' },
      { ja: 'レベル', romaji: 'reberu', vi: 'Cấp độ' },
      { ja: 'レシピ', romaji: 'reshipi', vi: 'Công thức' },
      { ja: 'レンタル', romaji: 'rentaru', vi: 'Thuê' }
    ]},
    { id: 'k_ro', char: 'ロ', romaji: 'ro', image: 'https://placehold.co/100?text=Ro', examples: [
      { ja: 'ロボット', romaji: 'robotto', vi: 'Robot' },
      { ja: 'ロマンス', romaji: 'romansu', vi: 'Lãng mạn' },
      { ja: 'ロック', romaji: 'rokku', vi: 'Rock' },
      { ja: 'ローカル', romaji: 'rookaru', vi: 'Địa phương' },
      { ja: 'ロード', romaji: 'roodo', vi: 'Đường' }
    ]},
    // Row Wa - Contains Empty Slots
    { id: 'k_wa', char: 'ワ', romaji: 'wa', image: 'https://placehold.co/100?text=Wa', examples: [
      { ja: 'ワイン', romaji: 'wain', vi: 'Rượu vang' },
      { ja: 'ワールド', romaji: 'waarudo', vi: 'Thế giới' },
      { ja: 'ワイシャツ', romaji: 'waishatsu', vi: 'Áo sơ mi' },
      { ja: 'ワンピース', romaji: 'wanpiisu', vi: 'Váy liền' },
      { ja: 'ワーク', romaji: 'waaku', vi: 'Công việc' }
    ]},
    { id: 'k_empty_wa1', isEmpty: true },
    { id: 'k_empty_wa2', isEmpty: true },
    { id: 'k_empty_wa3', isEmpty: true },
    { id: 'k_wo', char: 'ヲ', romaji: 'wo', image: 'https://placehold.co/100?text=Wo', examples: [
      { ja: 'ヲタク', romaji: 'wotaku', vi: 'Otaku' },
      { ja: 'ヲ', romaji: 'wo', vi: 'Trợ từ を' },
      { ja: 'コーヒーヲ', romaji: 'koohii wo', vi: 'Cà phê (đối tượng)' },
      { ja: 'ほんヲよむ', romaji: 'hon wo yomu', vi: 'Đọc sách' },
      { ja: 'みずヲのむ', romaji: 'mizu wo nomu', vi: 'Uống nước' }
    ]},
    // Row N
    { id: 'k_n', char: 'ン', romaji: 'n', image: 'https://placehold.co/100?text=N', examples: [
      { ja: 'パン', romaji: 'pan', vi: 'Bánh mì' },
      { ja: 'ラーメン', romaji: 'raamen', vi: 'Mì ramen' },
      { ja: 'コンビニ', romaji: 'konbini', vi: 'Cửa hàng tiện lợi' },
      { ja: 'ハンバーガー', romaji: 'hanbaagaa', vi: 'Hamburger' },
      { ja: 'ペン', romaji: 'pen', vi: 'Bút' }
    ]},
    { id: 'k_empty_n1', isEmpty: true },
    { id: 'k_empty_n2', isEmpty: true },
    { id: 'k_empty_n3', isEmpty: true },
    { id: 'k_empty_n4', isEmpty: true },
  ],

  combined: [
    // Row Kya
    { id: 'c_kya', char: 'きゃ', romaji: 'kya', image: 'https://placehold.co/100?text=Kya', examples: [
      { ja: 'きゃく', romaji: 'kyaku', vi: 'Khách' },
      { ja: 'きゃあ', romaji: 'kyaa', vi: 'Tiếng hét' },
      { ja: 'きゃたつ', romaji: 'kyatatsu', vi: 'Cái thang' },
      { ja: 'きゃっかん', romaji: 'kyakkan', vi: 'Khách quan' },
      { ja: 'きゃんせる', romaji: 'kyanseru', vi: 'Hủy bỏ' }
    ]},
    { id: 'c_empty_kya1', isEmpty: true },
    { id: 'c_kyu', char: 'きゅ', romaji: 'kyu', image: 'https://placehold.co/100?text=Kyu', examples: [
      { ja: 'きゅうり', romaji: 'kyuuri', vi: 'Dưa chuột' },
      { ja: 'きゅうきゅう', romaji: 'kyuukyuu', vi: 'Cấp cứu' },
      { ja: 'きゅう', romaji: 'kyuu', vi: 'Số 9' },
      { ja: 'きゅうじつ', romaji: 'kyuujitsu', vi: 'Ngày nghỉ' },
      { ja: 'きゅうこう', romaji: 'kyuukou', vi: 'Tàu nhanh' }
    ]},
    { id: 'c_empty_kya2', isEmpty: true },
    { id: 'c_kyo', char: 'きょ', romaji: 'kyo', image: 'https://placehold.co/100?text=Kyo', examples: [
      { ja: 'きょう', romaji: 'kyou', vi: 'Hôm nay' },
      { ja: 'きょうしつ', romaji: 'kyoushitsu', vi: 'Lớp học' },
      { ja: 'きょうだい', romaji: 'kyoudai', vi: 'Anh em' },
      { ja: 'きょねん', romaji: 'kyonen', vi: 'Năm ngoái' },
      { ja: 'きょか', romaji: 'kyoka', vi: 'Cho phép' }
    ]},
    // Row Sha
    { id: 'c_sha', char: 'しゃ', romaji: 'sha', image: 'https://placehold.co/100?text=Sha', examples: [
      { ja: 'しゃしん', romaji: 'shashin', vi: 'Ảnh' },
      { ja: 'かいしゃ', romaji: 'kaisha', vi: 'Công ty' },
      { ja: 'しゃかい', romaji: 'shakai', vi: 'Xã hội' },
      { ja: 'しゃちょう', romaji: 'shachou', vi: 'Giám đốc' },
      { ja: 'でんしゃ', romaji: 'densha', vi: 'Tàu điện' }
    ]},
    { id: 'c_empty_sha1', isEmpty: true },
    { id: 'c_shu', char: 'しゅ', romaji: 'shu', image: 'https://placehold.co/100?text=Shu', examples: [
      { ja: 'しゅみ', romaji: 'shumi', vi: 'Sở thích' },
      { ja: 'しゅくだい', romaji: 'shukudai', vi: 'Bài tập về nhà' },
      { ja: 'しゅっぱつ', romaji: 'shuppatsu', vi: 'Khởi hành' },
      { ja: 'しゅうまつ', romaji: 'shuumatsu', vi: 'Cuối tuần' },
      { ja: 'しゅじん', romaji: 'shujin', vi: 'Chồng' }
    ]},
    { id: 'c_empty_sha2', isEmpty: true },
    { id: 'c_sho', char: 'しょ', romaji: 'sho', image: 'https://placehold.co/100?text=Sho', examples: [
      { ja: 'しょうゆ', romaji: 'shouyu', vi: 'Nước tương' },
      { ja: 'しょくじ', romaji: 'shokuji', vi: 'Bữa ăn' },
      { ja: 'しょうがつ', romaji: 'shougatsu', vi: 'Tết' },
      { ja: 'しょうせつ', romaji: 'shousetsu', vi: 'Tiểu thuyết' },
      { ja: 'しょうらい', romaji: 'shourai', vi: 'Tương lai' }
    ]},
    // Row Cha
    { id: 'c_cha', char: 'ちゃ', romaji: 'cha', image: 'https://placehold.co/100?text=Cha', examples: [
      { ja: 'おちゃ', romaji: 'ocha', vi: 'Trà' },
      { ja: 'ちゃいろ', romaji: 'chairo', vi: 'Màu nâu' },
      { ja: 'ちゃわん', romaji: 'chawan', vi: 'Bát' },
      { ja: 'ちゃんと', romaji: 'chanto', vi: 'Đúng đắn' },
      { ja: 'ちゃんねる', romaji: 'channeru', vi: 'Kênh' }
    ]},
    { id: 'c_empty_cha1', isEmpty: true },
    { id: 'c_chu', char: 'ちゅ', romaji: 'chu', image: 'https://placehold.co/100?text=Chu', examples: [
      { ja: 'ちゅうごく', romaji: 'chuugoku', vi: 'Trung Quốc' },
      { ja: 'ちゅうい', romaji: 'chuui', vi: 'Chú ý' },
      { ja: 'ちゅうもん', romaji: 'chuumon', vi: 'Đặt hàng' },
      { ja: 'ちゅうしゃ', romaji: 'chuusha', vi: 'Tiêm' },
      { ja: 'ちゅうおう', romaji: 'chuuou', vi: 'Trung tâm' }
    ]},
    { id: 'c_empty_cha2', isEmpty: true },
    { id: 'c_cho', char: 'ちょ', romaji: 'cho', image: 'https://placehold.co/100?text=Cho', examples: [
      { ja: 'ちょっと', romaji: 'chotto', vi: 'Một chút' },
      { ja: 'ちょうど', romaji: 'choudo', vi: 'Vừa đúng' },
      { ja: 'ちょうしょく', romaji: 'choushoku', vi: 'Bữa sáng' },
      { ja: 'ちょきん', romaji: 'chokin', vi: 'Tiết kiệm' },
      { ja: 'ちょうせん', romaji: 'chousen', vi: 'Thử thách' }
    ]},
    // Row Nya
    { id: 'c_nya', char: 'にゃ', romaji: 'nya', image: 'https://placehold.co/100?text=Nya', examples: [
      { ja: 'にゃんこ', romaji: 'nyanko', vi: 'Mèo con' },
      { ja: 'にゃあ', romaji: 'nyaa', vi: 'Meo meo' },
      { ja: 'にゃんにゃん', romaji: 'nyannyan', vi: 'Tiếng mèo' },
      { ja: 'こんにゃく', romaji: 'konnyaku', vi: 'Củ nưa' },
      { ja: 'にゃー', romaji: 'nyaa', vi: 'Tiếng kêu mèo' }
    ]},
    { id: 'c_empty_nya1', isEmpty: true },
    { id: 'c_nyu', char: 'にゅ', romaji: 'nyu', image: 'https://placehold.co/100?text=Nyu', examples: [
      { ja: 'にゅうがく', romaji: 'nyuugaku', vi: 'Nhập học' },
      { ja: 'にゅういん', romaji: 'nyuuin', vi: 'Nhập viện' },
      { ja: 'にゅうよく', romaji: 'nyuuyoku', vi: 'Tắm' },
      { ja: 'にゅうじょう', romaji: 'nyuujou', vi: 'Vào cửa' },
      { ja: 'ぎゅうにゅう', romaji: 'gyuunyuu', vi: 'Sữa bò' }
    ]},
    { id: 'c_empty_nya2', isEmpty: true },
    { id: 'c_nyo', char: 'にょ', romaji: 'nyo', image: 'https://placehold.co/100?text=Nyo', examples: [
      { ja: 'にょうぼう', romaji: 'nyoubou', vi: 'Vợ' },
      { ja: 'にょろにょろ', romaji: 'nyoronyoro', vi: 'Uốn lượn' },
      { ja: 'にょきにょき', romaji: 'nyokinyki', vi: 'Mọc lên' },
      { ja: 'にょっき', romaji: 'nyokki', vi: 'Gnocchi' },
      { ja: 'じょにょう', romaji: 'jonyou', vi: 'Nữ tính' }
    ]},
    // Row Hya
    { id: 'c_hya', char: 'ひゃ', romaji: 'hya', image: 'https://placehold.co/100?text=Hya', examples: [
      { ja: 'ひゃく', romaji: 'hyaku', vi: 'Trăm' },
      { ja: 'ひゃっかてん', romaji: 'hyakkaten', vi: 'Bách hóa' },
      { ja: 'さんびゃく', romaji: 'sanbyaku', vi: 'Ba trăm' },
      { ja: 'ろっぴゃく', romaji: 'roppyaku', vi: 'Sáu trăm' },
      { ja: 'はっぴゃく', romaji: 'happyaku', vi: 'Tám trăm' }
    ]},
    { id: 'c_empty_hya1', isEmpty: true },
    { id: 'c_hyu', char: 'ひゅ', romaji: 'hyu', image: 'https://placehold.co/100?text=Hyu', examples: [
      { ja: 'ひゅうひゅう', romaji: 'hyuuhyuu', vi: 'Tiếng gió' },
      { ja: 'ひゅうが', romaji: 'hyuuga', vi: 'Tên riêng' },
      { ja: 'ひゅうまん', romaji: 'hyuuman', vi: 'Con người' },
      { ja: 'ひゅー', romaji: 'hyuu', vi: 'Tiếng huýt' },
      { ja: 'ひゅうず', romaji: 'hyuuzu', vi: 'Hughes' }
    ]},
    { id: 'c_empty_hya2', isEmpty: true },
    { id: 'c_hyo', char: 'ひょ', romaji: 'hyo', image: 'https://placehold.co/100?text=Hyo', examples: [
      { ja: 'ひょう', romaji: 'hyou', vi: 'Bảng' },
      { ja: 'ひょうげん', romaji: 'hyougen', vi: 'Biểu hiện' },
      { ja: 'ひょうか', romaji: 'hyouka', vi: 'Đánh giá' },
      { ja: 'ひょうじゅん', romaji: 'hyoujun', vi: 'Tiêu chuẩn' },
      { ja: 'ひょうばん', romaji: 'hyouban', vi: 'Danh tiếng' }
    ]},
    // Row Mya
    { id: 'c_mya', char: 'みゃ', romaji: 'mya', image: 'https://placehold.co/100?text=Mya', examples: [
      { ja: 'みゃく', romaji: 'myaku', vi: 'Mạch' },
      { ja: 'みゃくはく', romaji: 'myakuhaku', vi: 'Nhịp tim' },
      { ja: 'みゃんまー', romaji: 'myanmaa', vi: 'Myanmar' },
      { ja: 'みゃあ', romaji: 'myaa', vi: 'Tiếng mèo' },
      { ja: 'みゃくらく', romaji: 'myakuraku', vi: 'Mạch lạc' }
    ]},
    { id: 'c_empty_mya1', isEmpty: true },
    { id: 'c_myu', char: 'みゅ', romaji: 'myu', image: 'https://placehold.co/100?text=Myu', examples: [
      { ja: 'みゅうじかる', romaji: 'myuujikaru', vi: 'Nhạc kịch' },
      { ja: 'みゅーじっく', romaji: 'myuujikku', vi: 'Âm nhạc' },
      { ja: 'みゅーず', romaji: 'myuuzu', vi: 'Muse' },
      { ja: 'みゅーと', romaji: 'myuuto', vi: 'Tắt tiếng' },
      { ja: 'みゅーじあむ', romaji: 'myuujiamu', vi: 'Bảo tàng' }
    ]},
    { id: 'c_empty_mya2', isEmpty: true },
    { id: 'c_myo', char: 'みょ', romaji: 'myo', image: 'https://placehold.co/100?text=Myo', examples: [
      { ja: 'みょうじ', romaji: 'myouji', vi: 'Họ' },
      { ja: 'みょうにち', romaji: 'myounichi', vi: 'Ngày mai' },
      { ja: 'みょうが', romaji: 'myouga', vi: 'Gừng Nhật' },
      { ja: 'きみょう', romaji: 'kimyou', vi: 'Kỳ lạ' },
      { ja: 'みょうおう', romaji: 'myouou', vi: 'Minh Vương' }
    ]},
    // Row Rya
    { id: 'c_rya', char: 'りゃ', romaji: 'rya', image: 'https://placehold.co/100?text=Rya', examples: [
      { ja: 'りゃく', romaji: 'ryaku', vi: 'Lược bỏ' },
      { ja: 'りゃくご', romaji: 'ryakugo', vi: 'Từ viết tắt' },
      { ja: 'りゃくれき', romaji: 'ryakureki', vi: 'Lý lịch tóm tắt' },
      { ja: 'りゃくしょう', romaji: 'ryakushou', vi: 'Viết tắt' },
      { ja: 'りゃくず', romaji: 'ryakuzu', vi: 'Sơ đồ' }
    ]},
    { id: 'c_empty_rya1', isEmpty: true },
    { id: 'c_ryu', char: 'りゅ', romaji: 'ryu', image: 'https://placehold.co/100?text=Ryu', examples: [
      { ja: 'りゅう', romaji: 'ryuu', vi: 'Rồng' },
      { ja: 'りゅうがく', romaji: 'ryuugaku', vi: 'Du học' },
      { ja: 'りゅうこう', romaji: 'ryuukou', vi: 'Xu hướng' },
      { ja: 'りゅうちょう', romaji: 'ryuuchou', vi: 'Lưu loát' },
      { ja: 'こうりゅう', romaji: 'kouryuu', vi: 'Giao lưu' }
    ]},
    { id: 'c_empty_rya2', isEmpty: true },
    { id: 'c_ryo', char: 'りょ', romaji: 'ryo', image: 'https://placehold.co/100?text=Ryo', examples: [
      { ja: 'りょこう', romaji: 'ryokou', vi: 'Du lịch' },
      { ja: 'りょうり', romaji: 'ryouri', vi: 'Nấu ăn' },
      { ja: 'りょうしん', romaji: 'ryoushin', vi: 'Bố mẹ' },
      { ja: 'りょうほう', romaji: 'ryouhou', vi: 'Cả hai' },
      { ja: 'りょうかん', romaji: 'ryokan', vi: 'Nhà trọ' }
    ]},
    // Row Gya
    { id: 'c_gya', char: 'ぎゃ', romaji: 'gya', image: 'https://placehold.co/100?text=Gya', examples: [
      { ja: 'ぎゃく', romaji: 'gyaku', vi: 'Ngược lại' },
      { ja: 'ぎゃくてん', romaji: 'gyakuten', vi: 'Lội ngược dòng' },
      { ja: 'ぎゃくさつ', romaji: 'gyakusatsu', vi: 'Tàn sát' },
      { ja: 'ぎゃくこう', romaji: 'gyakukou', vi: 'Ngược chiều' },
      { ja: 'ぎゃくたい', romaji: 'gyakutai', vi: 'Ngược đãi' }
    ]},
    { id: 'c_empty_gya1', isEmpty: true },
    { id: 'c_gyu', char: 'ぎゅ', romaji: 'gyu', image: 'https://placehold.co/100?text=Gyu', examples: [
      { ja: 'ぎゅうにく', romaji: 'gyuuniku', vi: 'Thịt bò' },
      { ja: 'ぎゅうにゅう', romaji: 'gyuunyuu', vi: 'Sữa bò' },
      { ja: 'ぎゅうどん', romaji: 'gyuudon', vi: 'Cơm thịt bò' },
      { ja: 'ぎゅっと', romaji: 'gyutto', vi: 'Siết chặt' },
      { ja: 'ぎゅうぎゅう', romaji: 'gyuugyuu', vi: 'Chật cứng' }
    ]},
    { id: 'c_empty_gya2', isEmpty: true },
    { id: 'c_gyo', char: 'ぎょ', romaji: 'gyo', image: 'https://placehold.co/100?text=Gyo', examples: [
      { ja: 'ぎょうざ', romaji: 'gyouza', vi: 'Há cảo' },
      { ja: 'ぎょうれつ', romaji: 'gyouretsu', vi: 'Hàng dài' },
      { ja: 'ぎょぎょう', romaji: 'gyogyou', vi: 'Ngư nghiệp' },
      { ja: 'ぎょうせい', romaji: 'gyousei', vi: 'Hành chính' },
      { ja: 'きんぎょ', romaji: 'kingyo', vi: 'Cá vàng' }
    ]},
    // Row Ja
    { id: 'c_ja', char: 'じゃ', romaji: 'ja', image: 'https://placehold.co/100?text=Ja', examples: [
      { ja: 'じゃあね', romaji: 'jaane', vi: 'Tạm biệt' },
      { ja: 'じゃま', romaji: 'jama', vi: 'Cản trở' },
      { ja: 'じゃがいも', romaji: 'jagaimo', vi: 'Khoai tây' },
      { ja: 'パジャマ', romaji: 'pajama', vi: 'Đồ ngủ' },
      { ja: 'じゃんけん', romaji: 'janken', vi: 'Oẳn tù tì' }
    ]},
    { id: 'c_empty_ja1', isEmpty: true },
    { id: 'c_ju', char: 'じゅ', romaji: 'ju', image: 'https://placehold.co/100?text=Ju', examples: [
      { ja: 'じゅうしょ', romaji: 'juusho', vi: 'Địa chỉ' },
      { ja: 'じゅぎょう', romaji: 'jugyou', vi: 'Bài học' },
      { ja: 'じゅうどう', romaji: 'juudou', vi: 'Judo' },
      { ja: 'じゅんび', romaji: 'junbi', vi: 'Chuẩn bị' },
      { ja: 'じゅう', romaji: 'juu', vi: 'Số 10' }
    ]},
    { id: 'c_empty_ja2', isEmpty: true },
    { id: 'c_jo', char: 'じょ', romaji: 'jo', image: 'https://placehold.co/100?text=Jo', examples: [
      { ja: 'じょせい', romaji: 'josei', vi: 'Phụ nữ' },
      { ja: 'じょうほう', romaji: 'jouhou', vi: 'Thông tin' },
      { ja: 'じょうず', romaji: 'jouzu', vi: 'Giỏi' },
      { ja: 'じょうたい', romaji: 'joutai', vi: 'Trạng thái' },
      { ja: 'じょうだん', romaji: 'joudan', vi: 'Nói đùa' }
    ]},
    // Row Bya
    { id: 'c_bya', char: 'びゃ', romaji: 'bya', image: 'https://placehold.co/100?text=Bya', examples: [
      { ja: 'さんびゃく', romaji: 'sanbyaku', vi: 'Ba trăm' },
      { ja: 'びゃくや', romaji: 'byakuya', vi: 'Đêm trắng' },
      { ja: 'びゃくだん', romaji: 'byakudan', vi: 'Gỗ đàn hương' },
      { ja: 'びゃくし', romaji: 'byakushi', vi: 'Giấy trắng' },
      { ja: 'びゃくご', romaji: 'byakugo', vi: 'Bạch ngọc' }
    ]},
    { id: 'c_empty_bya1', isEmpty: true },
    { id: 'c_byu', char: 'びゅ', romaji: 'byu', image: 'https://placehold.co/100?text=Byu', examples: [
      { ja: 'びゅう', romaji: 'byuu', vi: 'Góc nhìn' },
      { ja: 'びゅうてぃー', romaji: 'byuutii', vi: 'Beauty' },
      { ja: 'びゅうあー', romaji: 'byuuaa', vi: 'Người xem' },
      { ja: 'びゅっふぇ', romaji: 'byuffe', vi: 'Buffet' },
      { ja: 'びゅーろー', romaji: 'byuuroo', vi: 'Bureau' }
    ]},
    { id: 'c_empty_bya2', isEmpty: true },
    { id: 'c_byo', char: 'びょ', romaji: 'byo', image: 'https://placehold.co/100?text=Byo', examples: [
      { ja: 'びょういん', romaji: 'byouin', vi: 'Bệnh viện' },
      { ja: 'びょうき', romaji: 'byouki', vi: 'Bệnh' },
      { ja: 'びょうどう', romaji: 'byoudou', vi: 'Bình đẳng' },
      { ja: 'びょう', romaji: 'byou', vi: 'Giây' },
      { ja: 'びょうし', romaji: 'byoushi', vi: 'Nhịp' }
    ]},
    // Row Pya
    { id: 'c_pya', char: 'ぴゃ', romaji: 'pya', image: 'https://placehold.co/100?text=Pya', examples: [
      { ja: 'ろっぴゃく', romaji: 'roppyaku', vi: 'Sáu trăm' },
      { ja: 'はっぴゃく', romaji: 'happyaku', vi: 'Tám trăm' },
      { ja: 'ぴゃあ', romaji: 'pyaa', vi: 'Tiếng kêu' },
      { ja: 'ぴゃーぴゃー', romaji: 'pyaapyaa', vi: 'Tiếng chim' },
      { ja: 'いっぴゃく', romaji: 'ippyaku', vi: 'Một trăm' }
    ]},
    { id: 'c_empty_pya1', isEmpty: true },
    { id: 'c_pyu', char: 'ぴゅ', romaji: 'pyu', image: 'https://placehold.co/100?text=Pyu', examples: [
      { ja: 'ぴゅあ', romaji: 'pyua', vi: 'Thuần khiết' },
      { ja: 'ぴゅーれ', romaji: 'pyuure', vi: 'Puree' },
      { ja: 'コンピューター', romaji: 'konpyuutaa', vi: 'Máy tính' },
      { ja: 'ぴゅーぴゅー', romaji: 'pyuupyuu', vi: 'Tiếng gió' },
      { ja: 'ぴゅっ', romaji: 'pyu', vi: 'Tiếng phun' }
    ]},
    { id: 'c_empty_pya2', isEmpty: true },
    { id: 'c_pyo', char: 'ぴょ', romaji: 'pyo', image: 'https://placehold.co/100?text=Pyo', examples: [
      { ja: 'ぴょん', romaji: 'pyon', vi: 'Nhảy nhót' },
      { ja: 'ぴょんぴょん', romaji: 'pyonpyon', vi: 'Nhảy nhót' },
      { ja: 'ぴょこぴょこ', romaji: 'pyokopyoko', vi: 'Nhấp nhô' },
      { ja: 'ぴょい', romaji: 'pyoi', vi: 'Nhảy' },
      { ja: 'ぴょこん', romaji: 'pyokon', vi: 'Cúi chào' }
    ]},
  ],
  combinedKatakana: [
    // Row Kya
    { id: 'ck_kya', char: 'キャ', romaji: 'kya', image: 'https://placehold.co/100?text=Kya', examples: [
      { ja: 'キャンプ', romaji: 'kyanpu', vi: 'Cắm trại' },
      { ja: 'キャベツ', romaji: 'kyabetsu', vi: 'Bắp cải' },
      { ja: 'キャラクター', romaji: 'kyarakutaa', vi: 'Nhân vật' },
      { ja: 'キャッシュ', romaji: 'kyasshu', vi: 'Tiền mặt' },
      { ja: 'キャリア', romaji: 'kyaria', vi: 'Sự nghiệp' }
    ]},
    { id: 'ck_empty_kya1', isEmpty: true },
    { id: 'ck_kyu', char: 'キュ', romaji: 'kyu', image: 'https://placehold.co/100?text=Kyu', examples: [
      { ja: 'キュート', romaji: 'kyuuto', vi: 'Dễ thương' },
      { ja: 'バーベキュー', romaji: 'baabekyuu', vi: 'BBQ' },
      { ja: 'レスキュー', romaji: 'resukyuu', vi: 'Cứu hộ' },
      { ja: 'キューブ', romaji: 'kyuubu', vi: 'Khối lập phương' },
      { ja: 'キュウリ', romaji: 'kyuuri', vi: 'Dưa chuột' }
    ]},
    { id: 'ck_empty_kya2', isEmpty: true },
    { id: 'ck_kyo', char: 'キョ', romaji: 'kyo', image: 'https://placehold.co/100?text=Kyo', examples: [
      { ja: 'トーキョー', romaji: 'tookyoo', vi: 'Tokyo' },
      { ja: 'キョロキョロ', romaji: 'kyorokyoro', vi: 'Nhìn quanh' },
      { ja: 'ギョーザ', romaji: 'gyooza', vi: 'Há cảo' },
      { ja: 'キョウト', romaji: 'kyouto', vi: 'Kyoto' },
      { ja: 'キョリ', romaji: 'kyori', vi: 'Khoảng cách' }
    ]},
    // Row Sha
    { id: 'ck_sha', char: 'シャ', romaji: 'sha', image: 'https://placehold.co/100?text=Sha', examples: [
      { ja: 'シャツ', romaji: 'shatsu', vi: 'Áo sơ mi' },
      { ja: 'シャワー', romaji: 'shawaa', vi: 'Vòi sen' },
      { ja: 'シャンプー', romaji: 'shanpuu', vi: 'Dầu gội' },
      { ja: 'シャッター', romaji: 'shattaa', vi: 'Màn trập' },
      { ja: 'シャープ', romaji: 'shaapu', vi: 'Sắc nét' }
    ]},
    { id: 'ck_empty_sha1', isEmpty: true },
    { id: 'ck_shu', char: 'シュ', romaji: 'shu', image: 'https://placehold.co/100?text=Shu', examples: [
      { ja: 'シュークリーム', romaji: 'shuukuriimu', vi: 'Bánh su kem' },
      { ja: 'ジュース', romaji: 'juusu', vi: 'Nước ép' },
      { ja: 'シューズ', romaji: 'shuuzu', vi: 'Giày' },
      { ja: 'シュート', romaji: 'shuuto', vi: 'Cú sút' },
      { ja: 'マシュマロ', romaji: 'mashumaro', vi: 'Kẹo dẻo' }
    ]},
    { id: 'ck_empty_sha2', isEmpty: true },
    { id: 'ck_sho', char: 'ショ', romaji: 'sho', image: 'https://placehold.co/100?text=Sho', examples: [
      { ja: 'ショッピング', romaji: 'shoppingu', vi: 'Mua sắm' },
      { ja: 'ショー', romaji: 'shoo', vi: 'Show diễn' },
      { ja: 'ファッション', romaji: 'fasshon', vi: 'Thời trang' },
      { ja: 'ショート', romaji: 'shooto', vi: 'Ngắn' },
      { ja: 'ショック', romaji: 'shokku', vi: 'Sốc' }
    ]},
    // Row Cha
    { id: 'ck_cha', char: 'チャ', romaji: 'cha', image: 'https://placehold.co/100?text=Cha', examples: [
      { ja: 'チャンス', romaji: 'chansu', vi: 'Cơ hội' },
      { ja: 'チャンネル', romaji: 'channeru', vi: 'Kênh' },
      { ja: 'チャット', romaji: 'chatto', vi: 'Chat' },
      { ja: 'チャーム', romaji: 'chaamu', vi: 'Quyến rũ' },
      { ja: 'チャレンジ', romaji: 'charenji', vi: 'Thử thách' }
    ]},
    { id: 'ck_empty_cha1', isEmpty: true },
    { id: 'ck_chu', char: 'チュ', romaji: 'chu', image: 'https://placehold.co/100?text=Chu', examples: [
      { ja: 'チューブ', romaji: 'chuubu', vi: 'Ống' },
      { ja: 'チューリップ', romaji: 'chuurippu', vi: 'Hoa tulip' },
      { ja: 'チューハイ', romaji: 'chuuhai', vi: 'Rượu Chuhai' },
      { ja: 'チュートリアル', romaji: 'chuutoriaru', vi: 'Hướng dẫn' },
      { ja: 'チュー', romaji: 'chuu', vi: 'Hôn' }
    ]},
    { id: 'ck_empty_cha2', isEmpty: true },
    { id: 'ck_cho', char: 'チョ', romaji: 'cho', image: 'https://placehold.co/100?text=Cho', examples: [
      { ja: 'チョコレート', romaji: 'chokoreeto', vi: 'Sôcôla' },
      { ja: 'チョイス', romaji: 'choisu', vi: 'Lựa chọn' },
      { ja: 'チョーク', romaji: 'chooku', vi: 'Phấn' },
      { ja: 'チョッキ', romaji: 'chokki', vi: 'Áo gile' },
      { ja: 'チョット', romaji: 'chotto', vi: 'Một chút' }
    ]},
    // Row Nya
    { id: 'ck_nya', char: 'ニャ', romaji: 'nya', image: 'https://placehold.co/100?text=Nya', examples: [
      { ja: 'ニャー', romaji: 'nyaa', vi: 'Meo meo' },
      { ja: 'ニャンコ', romaji: 'nyanko', vi: 'Mèo con' },
      { ja: 'ニャンニャン', romaji: 'nyannyan', vi: 'Tiếng mèo' },
      { ja: 'ケニャ', romaji: 'kenya', vi: 'Kenya' },
      { ja: 'ニャオ', romaji: 'nyao', vi: 'Tiếng mèo' }
    ]},
    { id: 'ck_empty_nya1', isEmpty: true },
    { id: 'ck_nyu', char: 'ニュ', romaji: 'nyu', image: 'https://placehold.co/100?text=Nyu', examples: [
      { ja: 'ニュース', romaji: 'nyuusu', vi: 'Tin tức' },
      { ja: 'メニュー', romaji: 'menyuu', vi: 'Thực đơn' },
      { ja: 'ニューヨーク', romaji: 'nyuuyooku', vi: 'New York' },
      { ja: 'ニュアンス', romaji: 'nyuansu', vi: 'Sắc thái' },
      { ja: 'アベニュー', romaji: 'abenyuu', vi: 'Đại lộ' }
    ]},
    { id: 'ck_empty_nya2', isEmpty: true },
    { id: 'ck_nyo', char: 'ニョ', romaji: 'nyo', image: 'https://placehold.co/100?text=Nyo', examples: [
      { ja: 'ニョッキ', romaji: 'nyokki', vi: 'Gnocchi' },
      { ja: 'ニョロニョロ', romaji: 'nyoronyoro', vi: 'Uốn lượn' },
      { ja: 'カニョン', romaji: 'kanyon', vi: 'Hẻm núi' },
      { ja: 'ニョキニョキ', romaji: 'nyokinyki', vi: 'Mọc lên' },
      { ja: 'ニョロ', romaji: 'nyoro', vi: 'Uốn éo' }
    ]},
    // Row Hya
    { id: 'ck_hya', char: 'ヒャ', romaji: 'hya', image: 'https://placehold.co/100?text=Hya', examples: [
      { ja: 'ヒャッキン', romaji: 'hyakkin', vi: 'Cửa hàng 100 yên' },
      { ja: 'ヒャク', romaji: 'hyaku', vi: 'Một trăm' },
      { ja: 'ヒャッホー', romaji: 'hyahhoo', vi: 'Tiếng reo' },
      { ja: 'ヒャー', romaji: 'hyaa', vi: 'Tiếng la' },
      { ja: 'ヒャクパー', romaji: 'hyakupaa', vi: '100%' }
    ]},
    { id: 'ck_empty_hya1', isEmpty: true },
    { id: 'ck_hyu', char: 'ヒュ', romaji: 'hyu', image: 'https://placehold.co/100?text=Hyu', examples: [
      { ja: 'ヒューマン', romaji: 'hyuuman', vi: 'Con người' },
      { ja: 'ヒューズ', romaji: 'hyuuzu', vi: 'Cầu chì' },
      { ja: 'ヒュー', romaji: 'hyuu', vi: 'Tiếng huýt' },
      { ja: 'ヒューストン', romaji: 'hyuusuton', vi: 'Houston' },
      { ja: 'ヒュージ', romaji: 'hyuuji', vi: 'Khổng lồ' }
    ]},
    { id: 'ck_empty_hya2', isEmpty: true },
    { id: 'ck_hyo', char: 'ヒョ', romaji: 'hyo', image: 'https://placehold.co/100?text=Hyo', examples: [
      { ja: 'ヒョウ', romaji: 'hyou', vi: 'Báo' },
      { ja: 'ヒョイ', romaji: 'hyoi', vi: 'Nhẹ nhàng' },
      { ja: 'ヒョコヒョコ', romaji: 'hyokohyoko', vi: 'Lạch bạch' },
      { ja: 'ヒョンヒョン', romaji: 'hyonhyon', vi: 'Nhún nhảy' },
      { ja: 'ヒョロヒョロ', romaji: 'hyorohyoro', vi: 'Gầy yếu' }
    ]},
    // Row Mya
    { id: 'ck_mya', char: 'ミャ', romaji: 'mya', image: 'https://placehold.co/100?text=Mya', examples: [
      { ja: 'ミャンマー', romaji: 'myanmaa', vi: 'Myanmar' },
      { ja: 'ミャー', romaji: 'myaa', vi: 'Tiếng mèo' },
      { ja: 'ミャオ', romaji: 'myao', vi: 'Meo meo' },
      { ja: 'ミャクミャク', romaji: 'myakumyaku', vi: 'Liên tục' },
      { ja: 'ミャーミャー', romaji: 'myaamyaa', vi: 'Tiếng mèo' }
    ]},
    { id: 'ck_empty_mya1', isEmpty: true },
    { id: 'ck_myu', char: 'ミュ', romaji: 'myu', image: 'https://placehold.co/100?text=Myu', examples: [
      { ja: 'ミュージック', romaji: 'myuujikku', vi: 'Âm nhạc' },
      { ja: 'ミュージカル', romaji: 'myuujikaru', vi: 'Nhạc kịch' },
      { ja: 'ミュート', romaji: 'myuuto', vi: 'Tắt tiếng' },
      { ja: 'ミュージアム', romaji: 'myuujiamu', vi: 'Bảo tàng' },
      { ja: 'ミューズ', romaji: 'myuuzu', vi: 'Nữ thần' }
    ]},
    { id: 'ck_empty_mya2', isEmpty: true },
    { id: 'ck_myo', char: 'ミョ', romaji: 'myo', image: 'https://placehold.co/100?text=Myo', examples: [
      { ja: 'ミョウジ', romaji: 'myouji', vi: 'Họ' },
      { ja: 'ミョウバン', romaji: 'myouban', vi: 'Phèn chua' },
      { ja: 'ミョウガ', romaji: 'myouga', vi: 'Gừng Nhật' },
      { ja: 'キミョウ', romaji: 'kimyou', vi: 'Kỳ lạ' },
      { ja: 'ミョウニチ', romaji: 'myounichi', vi: 'Ngày mai' }
    ]},
    // Row Rya
    { id: 'ck_rya', char: 'リャ', romaji: 'rya', image: 'https://placehold.co/100?text=Rya', examples: [
      { ja: 'リャク', romaji: 'ryaku', vi: 'Lược bỏ' },
      { ja: 'リャクゴ', romaji: 'ryakugo', vi: 'Từ viết tắt' },
      { ja: 'リャクズ', romaji: 'ryakuzu', vi: 'Sơ đồ' },
      { ja: 'リャクレキ', romaji: 'ryakureki', vi: 'Lý lịch' },
      { ja: 'リャクショウ', romaji: 'ryakushou', vi: 'Viết tắt' }
    ]},
    { id: 'ck_empty_rya1', isEmpty: true },
    { id: 'ck_ryu', char: 'リュ', romaji: 'ryu', image: 'https://placehold.co/100?text=Ryu', examples: [
      { ja: 'リュック', romaji: 'ryukku', vi: 'Ba lô' },
      { ja: 'リュウ', romaji: 'ryuu', vi: 'Rồng' },
      { ja: 'リューマチ', romaji: 'ryuumachi', vi: 'Thấp khớp' },
      { ja: 'リュウガク', romaji: 'ryuugaku', vi: 'Du học' },
      { ja: 'コウリュウ', romaji: 'kouryuu', vi: 'Giao lưu' }
    ]},
    { id: 'ck_empty_rya2', isEmpty: true },
    { id: 'ck_ryo', char: 'リョ', romaji: 'ryo', image: 'https://placehold.co/100?text=Ryo', examples: [
      { ja: 'リョコウ', romaji: 'ryokou', vi: 'Du lịch' },
      { ja: 'リョウリ', romaji: 'ryouri', vi: 'Nấu ăn' },
      { ja: 'リョウシン', romaji: 'ryoushin', vi: 'Bố mẹ' },
      { ja: 'リョカン', romaji: 'ryokan', vi: 'Nhà trọ' },
      { ja: 'リョウホウ', romaji: 'ryouhou', vi: 'Cả hai' }
    ]},
    // Row Gya
    { id: 'ck_gya', char: 'ギャ', romaji: 'gya', image: 'https://placehold.co/100?text=Gya', examples: [
      { ja: 'ギャラリー', romaji: 'gyararii', vi: 'Phòng trưng bày' },
      { ja: 'ギャング', romaji: 'gyangu', vi: 'Băng đảng' },
      { ja: 'ギャップ', romaji: 'gyappu', vi: 'Khoảng cách' },
      { ja: 'ギャル', romaji: 'gyaru', vi: 'Cô gái' },
      { ja: 'ギャンブル', romaji: 'gyanburu', vi: 'Cờ bạc' }
    ]},
    { id: 'ck_empty_gya1', isEmpty: true },
    { id: 'ck_gyu', char: 'ギュ', romaji: 'gyu', image: 'https://placehold.co/100?text=Gyu', examples: [
      { ja: 'ギュウニク', romaji: 'gyuuniku', vi: 'Thịt bò' },
      { ja: 'ギュウドン', romaji: 'gyuudon', vi: 'Cơm thịt bò' },
      { ja: 'ギュッと', romaji: 'gyutto', vi: 'Siết chặt' },
      { ja: 'ギュウニュウ', romaji: 'gyuunyuu', vi: 'Sữa bò' },
      { ja: 'ギュウギュウ', romaji: 'gyuugyuu', vi: 'Chật cứng' }
    ]},
    { id: 'ck_empty_gya2', isEmpty: true },
    { id: 'ck_gyo', char: 'ギョ', romaji: 'gyo', image: 'https://placehold.co/100?text=Gyo', examples: [
      { ja: 'ギョーザ', romaji: 'gyooza', vi: 'Há cảo' },
      { ja: 'キンギョ', romaji: 'kingyo', vi: 'Cá vàng' },
      { ja: 'ギョギョウ', romaji: 'gyogyou', vi: 'Ngư nghiệp' },
      { ja: 'ギョウレツ', romaji: 'gyouretsu', vi: 'Hàng dài' },
      { ja: 'ギョウセイ', romaji: 'gyousei', vi: 'Hành chính' }
    ]},
    // Row Ja
    { id: 'ck_ja', char: 'ジャ', romaji: 'ja', image: 'https://placehold.co/100?text=Ja', examples: [
      { ja: 'ジャパン', romaji: 'japan', vi: 'Nhật Bản' },
      { ja: 'パジャマ', romaji: 'pajama', vi: 'Đồ ngủ' },
      { ja: 'ジャンプ', romaji: 'janpu', vi: 'Nhảy' },
      { ja: 'ジャム', romaji: 'jamu', vi: 'Mứt' },
      { ja: 'ジャケット', romaji: 'jaketto', vi: 'Áo khoác' }
    ]},
    { id: 'ck_empty_ja1', isEmpty: true },
    { id: 'ck_ju', char: 'ジュ', romaji: 'ju', image: 'https://placehold.co/100?text=Ju', examples: [
      { ja: 'ジュース', romaji: 'juusu', vi: 'Nước ép' },
      { ja: 'スケジュール', romaji: 'sukejuuru', vi: 'Lịch trình' },
      { ja: 'ジュニア', romaji: 'junia', vi: 'Junior' },
      { ja: 'ジュエリー', romaji: 'juerii', vi: 'Trang sức' },
      { ja: 'ジュード', romaji: 'juudo', vi: 'Judo' }
    ]},
    { id: 'ck_empty_ja2', isEmpty: true },
    { id: 'ck_jo', char: 'ジョ', romaji: 'jo', image: 'https://placehold.co/100?text=Jo', examples: [
      { ja: 'ジョギング', romaji: 'jogingu', vi: 'Chạy bộ' },
      { ja: 'ジョーク', romaji: 'jooku', vi: 'Trò đùa' },
      { ja: 'ジョーズ', romaji: 'joouzu', vi: 'Giỏi' },
      { ja: 'ラジオ', romaji: 'rajio', vi: 'Radio' },
      { ja: 'スタジオ', romaji: 'sutajio', vi: 'Studio' }
    ]},
    // Row Bya
    { id: 'ck_bya', char: 'ビャ', romaji: 'bya', image: 'https://placehold.co/100?text=Bya', examples: [
      { ja: 'サンビャク', romaji: 'sanbyaku', vi: 'Ba trăm' },
      { ja: 'ビャクダン', romaji: 'byakudan', vi: 'Gỗ đàn hương' },
      { ja: 'ビャクヤ', romaji: 'byakuya', vi: 'Đêm trắng' },
      { ja: 'ビャクシ', romaji: 'byakushi', vi: 'Giấy trắng' },
      { ja: 'ビャクゴ', romaji: 'byakugo', vi: 'Bạch ngọc' }
    ]},
    { id: 'ck_empty_bya1', isEmpty: true },
    { id: 'ck_byu', char: 'ビュ', romaji: 'byu', image: 'https://placehold.co/100?text=Byu', examples: [
      { ja: 'ビュー', romaji: 'byuu', vi: 'Góc nhìn' },
      { ja: 'ビューティー', romaji: 'byuutii', vi: 'Beauty' },
      { ja: 'ビュッフェ', romaji: 'byuffe', vi: 'Buffet' },
      { ja: 'インタビュー', romaji: 'intabyuu', vi: 'Phỏng vấn' },
      { ja: 'レビュー', romaji: 'rebyuu', vi: 'Đánh giá' }
    ]},
    { id: 'ck_empty_bya2', isEmpty: true },
    { id: 'ck_byo', char: 'ビョ', romaji: 'byo', image: 'https://placehold.co/100?text=Byo', examples: [
      { ja: 'ビョウイン', romaji: 'byouin', vi: 'Bệnh viện' },
      { ja: 'ビョウキ', romaji: 'byouki', vi: 'Bệnh' },
      { ja: 'ビョウドウ', romaji: 'byoudou', vi: 'Bình đẳng' },
      { ja: 'ビョウ', romaji: 'byou', vi: 'Giây' },
      { ja: 'ビョウシ', romaji: 'byoushi', vi: 'Nhịp' }
    ]},
    // Row Pya
    { id: 'ck_pya', char: 'ピャ', romaji: 'pya', image: 'https://placehold.co/100?text=Pya', examples: [
      { ja: 'ロッピャク', romaji: 'roppyaku', vi: 'Sáu trăm' },
      { ja: 'ハッピャク', romaji: 'happyaku', vi: 'Tám trăm' },
      { ja: 'ピャー', romaji: 'pyaa', vi: 'Tiếng kêu' },
      { ja: 'ピャーピャー', romaji: 'pyaapyaa', vi: 'Tiếng chim' },
      { ja: 'イッピャク', romaji: 'ippyaku', vi: 'Một trăm' }
    ]},
    { id: 'ck_empty_pya1', isEmpty: true },
    { id: 'ck_pyu', char: 'ピュ', romaji: 'pyu', image: 'https://placehold.co/100?text=Pyu', examples: [
      { ja: 'ピュア', romaji: 'pyua', vi: 'Thuần khiết' },
      { ja: 'コンピューター', romaji: 'konpyuutaa', vi: 'Máy tính' },
      { ja: 'ピューレ', romaji: 'pyuure', vi: 'Puree' },
      { ja: 'ピューマ', romaji: 'pyuuma', vi: 'Báo sư tử' },
      { ja: 'ピューピュー', romaji: 'pyuupyuu', vi: 'Tiếng gió' }
    ]},
    { id: 'ck_empty_pya2', isEmpty: true },
    { id: 'ck_pyo', char: 'ピョ', romaji: 'pyo', image: 'https://placehold.co/100?text=Pyo', examples: [
      { ja: 'ピョン', romaji: 'pyon', vi: 'Nhảy nhót' },
      { ja: 'ピョンピョン', romaji: 'pyonpyon', vi: 'Nhảy nhót' },
      { ja: 'ピョコピョコ', romaji: 'pyokopyoko', vi: 'Nhấp nhô' },
      { ja: 'ピョイ', romaji: 'pyoi', vi: 'Nhảy' },
      { ja: 'ピョコン', romaji: 'pyokon', vi: 'Cúi chào' }
    ]},
  ],
};
