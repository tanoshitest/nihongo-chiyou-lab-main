/**
 * Kanji Annotator Utility
 * Provides furigana (reading) and Vietnamese meaning for common JLPT N4-N3 kanji.
 * Used in review mode to annotate question text.
 */

export interface KanjiInfo {
    furigana: string; // hiragana reading
    meaning: string;  // Vietnamese meaning
    tip?: string;     // memory tip / cách nhớ kanji
}

// Dictionary of kanji words with their furigana and Vietnamese meaning
// Key is the kanji word (may be 1-4 chars), value is furigana + meaning
export const KANJI_DICT: Record<string, KanjiInfo> = {
    // === MULTI-CHARACTER WORDS (match before single chars) ===

    // Household appliances
    "扇風機": { furigana: "せんぷうき", meaning: "quạt điện", tip: "扇(quạt phe) + 風(gió) + 機(máy) → máy tạo gió" },
    "洗濯機": { furigana: "せんたくき", meaning: "máy giặt", tip: "洗(rửa) + 濯(giặt) + 機(máy) → máy rửa/giặt quần áo" },
    "掃除機": { furigana: "そうじき", meaning: "máy hút bụi", tip: "掃(quét)+除(loại bỏ)+機(máy) → máy quét dọn" },
    "炊飯器": { furigana: "すいはんき", meaning: "nồi cơm điện", tip: "炊(nấu)+飯(cơm)+器(đồ dùng) → đồ nấu cơm" },
    "電子レンジ": { furigana: "でんしれんじ", meaning: "lò vi sóng", tip: "電(điện)+子(tử)+レンジ(range) → lò dùng sóng điện" },
    "冷蔵庫": { furigana: "れいぞうこ", meaning: "tủ lạnh", tip: "冷(lạnh)+蔵(cất giữ)+庫(kho) → kho cất giữ đồ lạnh" },
    "電話": { furigana: "でんわ", meaning: "điện thoại", tip: "電(điện)+話(nói chuyện) → nói chuyện qua điện" },
    "電気": { furigana: "でんき", meaning: "điện/đèn điện", tip: "電(điện)+気(khí/năng lượng) → năng lượng điện" },
    "電機": { furigana: "でんき", meaning: "điện cơ" },
    "電器": { furigana: "でんき", meaning: "đồ điện" },
    "電車": { furigana: "でんしゃ", meaning: "tàu điện", tip: "電(điện)+車(xe) → xe chạy bằng điện" },

    // Kitchen items
    "包丁": { furigana: "ほうちょう", meaning: "dao bếp", tip: "包(bọc/gói)+丁(đinh/thứ 4) → dụng cụ trong bếp" },
    "薬缶": { furigana: "やかん", meaning: "ấm đun nước", tip: "薬(thuốc)+缶(hộp thiếc) → hộp đun nước/thuốc" },
    "茶碗": { furigana: "ちゃわん", meaning: "chén trà/bát cơm", tip: "茶(trà)+碗(bát nhỏ) → bát uống trà" },
    "茶わん": { furigana: "ちゃわん", meaning: "chén trà/bát cơm" },
    "食器": { furigana: "しょっき", meaning: "bát đĩa/dụng cụ ăn uống", tip: "食(ăn)+器(đồ dùng) → đồ dùng để ăn" },
    "容器": { furigana: "ようき", meaning: "đồ đựng/vật chứa", tip: "容(chứa)+器(đồ dùng) → đồ có thể chứa vật khác" },
    "布団": { furigana: "ふとん", meaning: "chăn/nệm kiểu Nhật", tip: "布(vải)+団(khối tròn) → khối vải để ngủ" },
    "まな板": { furigana: "まないた", meaning: "cái thớt", tip: "板(tấm ván) → tấm ván để cắt thức ăn" },

    // Stationery / Office
    "鉛筆": { furigana: "えんぴつ", meaning: "bút chì", tip: "鉛(chì)+筆(bút) → bút viết bằng chì" },
    "消しゴム": { furigana: "けしごむ", meaning: "cục tẩy", tip: "消(xóa)+ゴム(cao su) → cao su để xóa" },
    "付せん": { furigana: "ふせん", meaning: "giấy ghi chú", tip: "付(đính)+せん(đồ vật) → giấy dán đính" },
    "文房具": { furigana: "ぶんぼうぐ", meaning: "đồ văn phòng", tip: "文(chữ viết)+房(phòng)+具(đồ dùng) → đồ dùng phòng chữ" },
    "書類": { furigana: "しょるい", meaning: "tài liệu/giấy tờ", tip: "書(đồ viết)+類(loại) → loại đồ viết = giấy tờ" },
    "引き出し": { furigana: "ひきだし", meaning: "ngăn kéo", tip: "引(đấy/kéo)+出(ra) → kéo ra được" },
    "本棚": { furigana: "ほんだな", meaning: "giá sách", tip: "本(sách)+棚(giá/kệ) → giá để sách" },

    // Cosmetics / Hygiene
    "化粧品": { furigana: "けしょうひん", meaning: "mỹ phẩm", tip: "化(đổi/biến)+粧(trang điểm)+品(sản phẩm) → sản phẩm làm đẹp" },
    "化粧水": { furigana: "けしょうすい", meaning: "nước hoa hồng/toner", tip: "化粧(trang điểm)+水(nước) → nước chăm sóc da" },
    "香水": { furigana: "こうすい", meaning: "nước hoa", tip: "香(hương thơm)+水(nước) → nước có hương thơm" },
    "清水": { furigana: "せいすい", meaning: "nước sạch", tip: "清(trong sạch)+水(nước) → nước trong sạch" },
    "香気": { furigana: "こうき", meaning: "hương thơm", tip: "香(hương)+気(khí) → khí có hương" },
    "石鹸": { furigana: "せっけん", meaning: "xà phòng", tip: "石(đá)+鹸(xà phòng) → cục đá tẩy rửa" },
    "洗剤": { furigana: "せんざい", meaning: "chất tẩy rửa", tip: "洗(rửa)+剤(chất) → chất để rửa" },
    "歯ブラシ": { furigana: "はぶらし", meaning: "bàn chải đánh răng", tip: "歯(răng)+ブラシ(bàn chải) → bàn chải răng" },
    "歯磨き粉": { furigana: "はみがきこ", meaning: "kem đánh răng", tip: "歯(răng)+磨き(đánh)+粉(bột) → bột đánh răng" },
    "歯磨き": { furigana: "はみがき", meaning: "đánh răng", tip: "歯(răng)+磨き(đánh) → hành động đánh răng" },

    // Education
    "教科書": { furigana: "きょうかしょ", meaning: "sách giáo khoa", tip: "教(dạy)+科(đề môc)+書(sách) → sách dạy từng môn" },
    "参考書": { furigana: "さんこうしょ", meaning: "sách tham khảo", tip: "参(tham gia)+考(suy nghĩ)+書(sách) → sách để tham khảo" },
    "辞書": { furigana: "じしょ", meaning: "từ điển", tip: "辞(từ)+書(sách) → sách chứa từ" },
    "図書館": { furigana: "としょかん", meaning: "thư viện", tip: "図(bản đồ)+書(sách)+館(nhà/toà nhà) → tòa nhà chứa sách" },
    "学校": { furigana: "がっこう", meaning: "trường học", tip: "学(học)+校(trường) → nơi học" },
    "大学": { furigana: "だいがく", meaning: "đại học", tip: "大(lớn)+学(học) → nơi học lớn" },
    "小学校": { furigana: "しょうがっこう", meaning: "trường tiểu học", tip: "小(nhỏ)+学校(trường) → trường dành cho nhỏ" },
    "中学校": { furigana: "ちゅうがっこう", meaning: "trường THCS", tip: "中(giữa)+学校(trường) → trường trung cấp" },
    "高校": { furigana: "こうこう", meaning: "trường THPT", tip: "高(cao)+校(trường) → trường cao cấp" },
    "宿題": { furigana: "しゅくだい", meaning: "bài tập về nhà", tip: "宿(nhà ngủ)+題(đề tài) → đề tài làm ở nhà" },
    "課題": { furigana: "かだい", meaning: "chủ đề/nhiệm vụ", tip: "課(đề ra)+題(đề tài) → đề tài được giao" },
    "問題": { furigana: "もんだい", meaning: "vấn đề/câu hỏi", tip: "問(hỏi)+題(đề) → đề tài đặt ra câu hỏi" },
    "復習": { furigana: "ふくしゅう", meaning: "ôn tập", tip: "復(lại)+習(tập) → tập lại những gì đã học" },
    "予習": { furigana: "よしゅう", meaning: "chuẩn bị/học trước", tip: "予(trước)+習(tập) → tập trước khi vào lớp" },
    "試験": { furigana: "しけん", meaning: "kỳ thi", tip: "試(thử)+験(kiểm tra) → thử thách kiểm tra" },
    "勉強": { furigana: "べんきょう", meaning: "học tập", tip: "勉(cố gắng)+強(mạnh) → cố gắng mạnh mẽ = cần cù học" },
    "先生": { furigana: "せんせい", meaning: "giáo viên", tip: "先(trước)+生(sinh) → người sinh ra trước = thầy giáo" },
    "学生": { furigana: "がくせい", meaning: "học sinh", tip: "学(học)+生(sinh) → người sinh ra để học" },

    // Feelings / Emotions
    "嬉しい": { furigana: "うれしい", meaning: "vui mừng", tip: "嬉 = 女(phụ nữ)+喜(vui) → phụ nữ vui mừng" },
    "楽しい": { furigana: "たのしい", meaning: "vui vẻ", tip: "楽 = cây đàn nhạc → âm nhạc → vui vẻ, sảng khoái" },
    "悲しい": { furigana: "かなしい", meaning: "buồn", tip: "悲 = 非(không)+心(tim) → tim không ổn = buồn" },
    "悲しくて": { furigana: "かなしくて", meaning: "vì buồn" },
    "寂しい": { furigana: "さびしい", meaning: "cô đơn", tip: "寂 = 宀(mái nhà)+叔(chú bác)+木(cây) → trong nhà vắng lặng" },
    "幸せ": { furigana: "しあわせ", meaning: "hạnh phúc", tip: "幸 = 土(đất)+幸(may mắn) → được ban phước lành" },
    "恥ずかしい": { furigana: "はずかしい", meaning: "xấu hổ", tip: "恥 = 耳(tai)+心(tim) → tim đỏ lên đến tai = mắc cỡ" },
    "恥ずかしくて": { furigana: "はずかしくて", meaning: "vì xấu hổ" },
    "羨ましい": { furigana: "うらやましい", meaning: "ghen tị", tip: "羨 = 羊(cừu)+欠(thiếu) → thấy người khác có cừu mà mình thiếu" },
    "羨ましくて": { furigana: "うらやましくて", meaning: "vì ghen tị" },
    "驚いた": { furigana: "おどろいた", meaning: "ngạc nhiên" },
    "驚く": { furigana: "おどろく", meaning: "ngạc nhiên", tip: "驚 = 敬(kính trọng)+馬(ngựa) → ngựa hoảng hốt = giật mình" },
    "怒って": { furigana: "おこって", meaning: "tức giận (dạng て)" },
    "怒る": { furigana: "おこる", meaning: "tức giận", tip: "怒 = 奴(nô lệ)+心(tim) → tim như nô lệ bị ép = bực bội" },
    "怖い": { furigana: "こわい", meaning: "đáng sợ", tip: "怖 = 忄(tim)+布(vải) → tim như bị vải bịt = sợ hãi" },
    "恐い": { furigana: "こわい", meaning: "đáng sợ" },
    "懐かしい": { furigana: "なつかしい", meaning: "hoài niệm", tip: "懐 = 忄(tim)+衣(quần áo) → ôm áo cũ nhớ ngày xưa" },
    "苦しい": { furigana: "くるしい", meaning: "đau khổ", tip: "苦 = 艹(cỏ)+古(cũ/xưa) → cỏ đắng = khổ cực" },
    "面白い": { furigana: "おもしろい", meaning: "thú vị", tip: "面(mặt)+白(trắng) → mặt trắng sáng lên = thú vị" },
    "面白くて": { furigana: "おもしろくて", meaning: "vì thú vị" },
    "安心": { furigana: "あんしん", meaning: "an tâm", tip: "安(ến tĩnh)+心(tim) → tim ến tĩnh = an tâm" },
    "不安": { furigana: "ふあん", meaning: "bất an", tip: "不(không)+安(ến) → không ến = bất an" },
    "安全": { furigana: "あんぜん", meaning: "an toàn", tip: "安(ến)+全(toàn) → hoàn toàn ến ổn = an toàn" },
    "不要": { furigana: "ふよう", meaning: "không cần thiết", tip: "不(không)+要(cần) → không cần" },
    "必要": { furigana: "ひつよう", meaning: "cần thiết", tip: "必(nhất định)+要(cần) → nhất định cần" },
    "大切": { furigana: "たいせつ", meaning: "quan trọng", tip: "大(lớn)+切(cắt/cạnh) → điều lớn cần gìn giữ" },
    "大丈夫": { furigana: "だいじょうぶ", meaning: "không sao", tip: "大(lớn)+丈(cao to)+夫(đàn ông mạnh) → đàn ông lớn mạnh = không sao" },
    "清潔": { furigana: "せいけつ", meaning: "sạch sẽ", tip: "清(trong)+潔(sạch) → trong sứt = sạch sẽ" },
    "生活": { furigana: "せいかつ", meaning: "sinh hoạt/cuộc sống", tip: "生(sống)+活(hoạt động) → hoạt động sống" },
    "精神": { furigana: "せいしん", meaning: "tinh thần", tip: "精(tinh chất)+神(thần) → chất tinh tú của tâm hồn" },
    "政治": { furigana: "せいじ", meaning: "chính trị", tip: "政(chính)+治(quản lý) → chính quyền quản lý" },

    // Body parts
    "目": { furigana: "め", meaning: "mắt", tip: "Tượng hình: hình con mắt" },
    "耳": { furigana: "みみ", meaning: "tai", tip: "Tượng hình: hình cái tai" },
    "口": { furigana: "くち", meaning: "miệng", tip: "Tượng hình: cái miệng mở ra" },
    "鼻": { furigana: "はな", meaning: "mũi", tip: "Tượng hình: cái mũi nhô ra" },
    "手": { furigana: "て", meaning: "tay", tip: "Tượng hình: bàn tay xòe ra" },
    "足": { furigana: "あし", meaning: "chân/bàn chân", tip: "口(miệng)+止(dừng) → nơi bước đi" },
    "顔": { furigana: "かお", meaning: "khuôn mặt", tip: "骨(xương)+頁(đầu) → phần phía trước của đầu" },
    "頭": { furigana: "あたま", meaning: "đầu", tip: "Phần trên cùng của cơ thể" },
    "腰": { furigana: "こし", meaning: "eo/hông", tip: "肉(thịt)+要(cần) → phần quan trọng của cơ thể" },
    "指": { furigana: "ゆび", meaning: "ngón tay", tip: "手(tay)+旨(chỉ hướng) → phần tay dùng để chỉ" },
    "背": { furigana: "せ", meaning: "lưng/chiều cao", tip: "肉(thịt)+北(bắc/sau) → phần phía sau cơ thể" },
    "髪": { furigana: "かみ", meaning: "tóc", tip: "長(dài)+彡(trang trí) → sợi dài trang trí trên đầu" },
    "腕": { furigana: "うで", meaning: "cánh tay", tip: "肉(thịt)+背(lưng) → tay cơ bắp" },
    "肩": { furigana: "かた", meaning: "vai", tip: "肉(thịt)+户(cửa) → phần mở ra ở trên cơ thể" },
    "首": { furigana: "くび", meaning: "cổ", tip: "Tượng hình: phần nối đầu và thân" },
    "胸": { furigana: "むね", meaning: "ngực", tip: "肉(thịt)+期(kỳ/dịp) → phần trước của thn" },
    "腹": { furigana: "はら", meaning: "bụng", tip: "肉(thịt)+舅(nội tạng) → khoang bụng" },
    "脚": { furigana: "あし", meaning: "chân", tip: "肉(thịt)+却(đi bước) → phần dước để đi" },
    "膝": { furigana: "ひざ", meaning: "đầu gối", tip: "肉(thịt)+足(chân)+仲(giữưa) → khớp ở giửa chân" },

    // Clothing
    "服": { furigana: "ふく", meaning: "quần áo", tip: "衣(vải)+服(áo) → áo chế từ vải" },
    "着物": { furigana: "きもの", meaning: "kimono", tip: "着(đeo/mặc)+物(vật) → vật để mặc = kimono" },
    "靴": { furigana: "くつ", meaning: "giày", tip: "革(da)+履(đi giày) → đồ da đi chân" },
    "帽子": { furigana: "ぼうし", meaning: "mũ", tip: "帽(mũ)+子(đồ vật) → đồ đội đầu" },
    "鞄": { furigana: "かばん", meaning: "túi xách", tip: "革(da)+三(ba nối) → túi làm từ da" },
    "手袋": { furigana: "てぶくろ", meaning: "găng tay", tip: "手(tay)+袋(túi) → túi đe tay = găng" },
    "眼鏡": { furigana: "めがね", meaning: "kính mắt", tip: "眼(mắt)+鏡(gương) → gương trước mắt" },
    "腕時計": { furigana: "うでどけい", meaning: "đồng hồ đeo tay", tip: "腕(cổ tay)+時計(đồng hồ) → đồng hồ đeo ở cổ tay" },
    "時計": { furigana: "とけい", meaning: "đồng hồ", tip: "時(giờ)+計(đo) → dụng cụ đo giờ" },
    "傘": { furigana: "かさ", meaning: "cái ô", tip: "偔(che phủ)+傘 → vật che phủ mưa" },

    // Kitchen/Household items
    "皿": { furigana: "さら", meaning: "cái đĩa", tip: "Tượng hình: cái đĩa phẳng" },
    "鍋": { furigana: "なべ", meaning: "cái nồi", tip: "金(kim loại)+和(hài hòa) → đồ đun kim loại" },
    "箸": { furigana: "はし", meaning: "đũa" },
    "鏡": { furigana: "かがみ", meaning: "gương soi", tip: "金(kim loại)+尽(hết) → kim loại bóng sạch = gương" },
    "蓋": { furigana: "ふた", meaning: "vung/nắp" },

    // Food
    "肉": { furigana: "にく", meaning: "thịt", tip: "Tượng hình: miếng thịt" },
    "魚": { furigana: "さかな", meaning: "cá", tip: "Tượng hình: con cá với vây và đuôi" },
    "野菜": { furigana: "やさい", meaning: "rau củ", tip: "野(đồng nội)+菜(rau) → rau trồng ngoài đồng" },
    "果物": { furigana: "くだもの", meaning: "trái cây", tip: "果(quả)+物(vật) → vật có quả" },
    "御飯": { furigana: "ごはん", meaning: "cơm", tip: "颯(cơm nấu chín) → hạt gạo nấu chín" },
    "ご飯": { furigana: "ごはん", meaning: "cơm" },
    "晩ご飯": { furigana: "ばんごはん", meaning: "cơm tối", tip: "晩(tối)+ご飯(cơm) → cơm tối" },
    "朝ご飯": { furigana: "あさごはん", meaning: "cơm sáng", tip: "朝(sáng sớm)+ご飯(cơm) → cơm buổi sáng" },
    "昼ご飯": { furigana: "ひるごはん", meaning: "cơm trưa", tip: "昼(trưa)+ご飯(cơm) → cơm buổi trưa" },
    "玉ねぎ": { furigana: "たまねぎ", meaning: "hành tây", tip: "玉(ngọc viên)+ねぎ(hành) → hành tròn như ngọc" },
    "砂糖": { furigana: "さとう", meaning: "đường", tip: "砂(cát)+糖(đường) → hạt kết tinh ngọt như cát" },
    "塩": { furigana: "しお", meaning: "muối", tip: "Tượng hình: đất có muối = muối biển" },

    // Nature / Weather
    "虹": { furigana: "にじ", meaning: "cầu vồng", tip: "虫(sâu)+工(công) → cầu vồng uốn cong như con sâu" },
    "雨": { furigana: "あめ", meaning: "mưa", tip: "Tượng hình: giọt nước đang rơi xuống từ đám mây" },
    "雲": { furigana: "くも", meaning: "mây", tip: "雨(mưa)+云(mây) → đám mây mang mưa" },
    "雪": { furigana: "ゆき", meaning: "tuyết", tip: "雨(mưa)+彗(chổi) → mưa đóng lại = tuyết" },
    "雷": { furigana: "かみなり", meaning: "sấm sét", tip: "雨(mưa)+田(ruộng) → sấm sét đánh xuống ruộng" },
    "嵐": { furigana: "あらし", meaning: "bão", tip: "山(núi)+風(gió) → gió lớn nổi lên từ núi = bão" },
    "台風": { furigana: "たいふう", meaning: "bão nhiệt đới" },
    "風": { furigana: "かぜ", meaning: "gió", tip: "Tượng hình: gió thổi cuốn lá" },
    "晴れ": { furigana: "はれ", meaning: "nắng đẹp" },
    "晴": { furigana: "はれ", meaning: "nắng đẹp", tip: "日(mặt trời)+青(xanh) → trời xanh có mặt trời = nắng" },
    "空": { furigana: "そら", meaning: "bầu trời", tip: "穴(lỗ trống)+工(công) → không gian rộng lớn trên đầu" },
    "山": { furigana: "やま", meaning: "núi", tip: "Tượng hình: 3 đỉnh núi" },
    "川": { furigana: "かわ", meaning: "sông", tip: "Tượng hình: dòng nước chảy" },
    "海": { furigana: "うみ", meaning: "biển", tip: "水(nước)+每(mỗi) → nước mãi mãi" },
    "木": { furigana: "き", meaning: "cây", tip: "Tượng hình: cây có thân, rễ và cành" },
    "花": { furigana: "はな", meaning: "hoa", tip: "艹(cỏ)+化(biến đổi) → cỏ biến thành hoa" },
    "地震": { furigana: "じしん", meaning: "động đất" },
    "天気": { furigana: "てんき", meaning: "thời tiết", tip: "天(trời)+気(khí) → khí trời/thời tiết" },
    "温度": { furigana: "おんど", meaning: "nhiệt độ" },

    // Family / People
    "人": { furigana: "ひと", meaning: "người", tip: "Tượng hình: hình người đang đứng" },
    "男": { furigana: "おとこ", meaning: "đàn ông", tip: "田(ruộng)+力(sức mạnh) → sức mạnh ngoài ruộng = đàn ông" },
    "女": { furigana: "おんな", meaning: "phụ nữ", tip: "Tượng hình: người phụ nữ ngồi uốn cong" },
    "子供": { furigana: "こども", meaning: "trẻ em", tip: "子(con)+供(dâng hính) → những đứa con nhỏ" },
    "友達": { furigana: "ともだち", meaning: "bạn bè", tip: "友(bạn)+達(đạt đến) → người đạt đến trái tim" },
    "家族": { furigana: "かぞく", meaning: "gia đình", tip: "家(nhà)+族(dòng họ) → dòng họ trong nhà" },
    "彼": { furigana: "かれ", meaning: "anh ấy", tip: "彼 = chỉ “người kia” (nam)" },
    "彼女": { furigana: "かのじょ", meaning: "cô ấy", tip: "彼(kia)+女(nữ) → người phụ nữ kia" },
    "弟": { furigana: "おとうと", meaning: "em trai", tip: "弓(cung)+弟 → em trai sinh sau" },
    "妹": { furigana: "いもうと", meaning: "em gái", tip: "女(nữ)+小(ích) → nữ sinh sau" },
    "兄": { furigana: "あに", meaning: "anh trai", tip: "口(miệng)+儿(người) → người nói ra lời = anh" },
    "姉": { furigana: "あね", meaning: "chị gái", tip: "女(nữ)+豪(sang trọng) → phụ nữ sang trọng đi trước" },
    "父": { furigana: "ちち", meaning: "cha", tip: "Tượng hình: người cầm rùi - người chủ gia đình" },
    "母": { furigana: "はは", meaning: "mẹ", tip: "女(nữ) + 2 dấu chấm = mẹ cho con bú" },
    "有名人": { furigana: "ゆうめいじん", meaning: "người nổi tiếng", tip: "有(có)+名(tên)+人(người) → người có tên tuổi" },
    "有名": { furigana: "ゆうめい", meaning: "nổi tiếng", tip: "有(có)+名(tên) → có tên = nổi tiếng" },

    // Daily life
    "料理": { furigana: "りょうり", meaning: "nấu ăn/món ăn", tip: "料(nguyên liệu)+理(lý/xử lý) → xử lý nguyên liệu = nấu ăn" },
    "掃除": { furigana: "そうじ", meaning: "dọn dẹp", tip: "掃(quét)+除(loại bỏ) → quét loại bỏ rác" },
    "洗濯": { furigana: "せんたく", meaning: "giặt đồ", tip: "洗(rửa)+濯(giặt) → rửa và giặt quần áo" },
    "買い物": { furigana: "かいもの", meaning: "mua sắm", tip: "買(mua)+物(vật) → vật được mua = mua sắm" },
    "散歩": { furigana: "さんぽ", meaning: "đi dạo", tip: "散(đi tản mạn)+歩(đi bộ) → đi bộ thư giãn" },
    "運動": { furigana: "うんどう", meaning: "vận động", tip: "運(vận)+動(động) → di chuyển rèn luyện" },
    "旅行": { furigana: "りょこう", meaning: "du lịch", tip: "旅(đi xa)+行(đi) → đi xa = du lịch" },
    "仕事": { furigana: "しごと", meaning: "công việc", tip: "仕(phục vụ)+事(việc) → việc phục vụ" },
    "食事": { furigana: "しょくじ", meaning: "bữa ăn", tip: "食(ăn)+事(sự việc) → sự việc ăn uống" },
    "入浴": { furigana: "にゅうよく", meaning: "tắm", tip: "入(vào)+浴(tắm) → vào tắm" },
    "睡眠": { furigana: "すいみん", meaning: "giấc ngủ", tip: "睡(ngủ)+眠(mê) → giấc ngủ sâu" },

    // Transportation
    "自転車": { furigana: "じてんしゃ", meaning: "xe đạp", tip: "自(đạp đi)+転(được đẩy)+車(xe) → xe đạp chân" },
    "車": { furigana: "くるま", meaning: "xe hơi", tip: "Tượng hình: cữ cái bánh xe từ trên nhìn xuống" },
    "飛行機": { furigana: "ひこうき", meaning: "máy bay", tip: "飛(bay)+行(đi)+機(máy) → máy đi trên trời" },
    "自動車": { furigana: "じどうしゃ", meaning: "ô tô", tip: "自(đạp)+動(động)+車(xe) → xe tự động" },
    "新幹線": { furigana: "しんかんせん", meaning: "tàu cao tốc", tip: "新(mới)+干(cần/chính)+線(đường ray) → đường ray chính mới" },

    // Places
    "駅": { furigana: "えき", meaning: "nhà ga", tip: "駅(ga) → nơi xe lửa dừng lại" },
    "病院": { furigana: "びょういん", meaning: "bệnh viện", tip: "病(bệnh)+院(viện lớn) → viện chữ́a bệnh" },
    "銀行": { furigana: "ぎんこう", meaning: "ngân hàng", tip: "銀(bạc)+行(hành) → nơi hành giao bạc" },
    "会社": { furigana: "かいしゃ", meaning: "công ty", tip: "会(hội)+社(đền/tổ chức) → tổ chức hội tụ" },
    "部屋": { furigana: "へや", meaning: "phòng", tip: "部(bộ phận)+屋(nhà) → phần/ngăn trong nhà" },
    "家": { furigana: "いえ", meaning: "nhà", tip: "宀(mái)+屏(lợn) → mái nhà có động vật" },
    "玄関": { furigana: "げんかん", meaning: "cửa trước", tip: "玄(huyền bí)+関(cửa chốt) → cửa chính quan trọng" },
    "窓": { furigana: "まど", meaning: "cửa sổ", tip: "穴(lỗ)+心(tim) → lỗ ở tường để đón ánh sáng" },
    "庭": { furigana: "にわ", meaning: "sân vườn", tip: "円(rộng)+庭 → không gian xanh trước nhà" },
    "公園": { furigana: "こうえん", meaning: "công viên", tip: "公(công)+園(vườn) → vườn công cộng" },
    "郵便局": { furigana: "ゆうびんきょく", meaning: "bưu điện", tip: "郵(bưu kiện)+便(đường tiện)+局(cơ quan) → cơ quan gửi bưu kiện" },
    "市場": { furigana: "いちば", meaning: "chợ", tip: "市(thị trường)+場(sân) → sân mua bán" },
    "店": { furigana: "みせ", meaning: "cửa hàng", tip: "店 = nơi để hàng hóa" },

    // Time
    "今": { furigana: "いま", meaning: "bây giờ", tip: "人(người)+まま(đứng im) → người ở đây và lúc này" },
    "今日": { furigana: "きょう", meaning: "hôm nay", tip: "今(bây giờ)+日(ngày) → ngày hiện tại" },
    "昨日": { furigana: "きのう", meaning: "hôm qua", tip: "昨(hôm qua)+日(ngày) → ngày hôm qua" },
    "明日": { furigana: "あした", meaning: "ngày mai", tip: "明(sáng rỡ)+日(ngày) → ngày sáng trước mặt" },
    "朝": { furigana: "あさ", meaning: "buổi sáng", tip: "日(mặt trời)+mây+月(trăng) → lúc mặt trời mửi mọc" },
    "夜": { furigana: "よる", meaning: "buổi tối", tip: "夕(buổi chều)+夜(tối) → khi màn tối phủ xuống" },
    "午前": { furigana: "ごぜん", meaning: "buổi sáng (AM)", tip: "午(giữưa ngày)+前(trước) → trước lúc trưa" },
    "午後": { furigana: "ごご", meaning: "buổi chiều (PM)", tip: "午(giữưa ngày)+後(sau) → sau lúc trưa" },
    "毎日": { furigana: "まいにち", meaning: "mỗi ngày", tip: "毎(mỗi)+日(ngày) → ngày nào cũng" },
    "先週": { furigana: "せんしゅう", meaning: "tuần trước", tip: "先(trước)+週(tuần) → tuần lễ trước" },
    "来週": { furigana: "らいしゅう", meaning: "tuần sau", tip: "来(đến)+週(tuần) → tuần sắp tới" },
    "今週": { furigana: "こんしゅう", meaning: "tuần này", tip: "今(bây giờ)+週(tuần) → tuần hiện tại" },
    "夏休み": { furigana: "なつやすみ", meaning: "nghỉ hè", tip: "夏(mùa hè)+休(nghỉ) → kỳ nghỉ mùa hè" },
    "冬": { furigana: "ふゆ", meaning: "mùa đông", tip: "Tượng hình: đông lạnh, nước đóng băng" },
    "夏": { furigana: "なつ", meaning: "mùa hè", tip: "Tượng hình: mặt trời mạnh" },
    "春": { furigana: "はる", meaning: "mùa xuân", tip: "日(ánh sáng)+山(núi)+草(cỏ) → núi cỏ nững sáng = xuân" },
    "秋": { furigana: "あき", meaning: "mùa thu", tip: "禾(lúa)+火(lửa) → lúa chín vàng = thu" },

    // Counters / Numbers
    "一": { furigana: "いち", meaning: "một" },
    "二": { furigana: "に", meaning: "hai" },
    "三": { furigana: "さん", meaning: "ba" },
    "四": { furigana: "し/よん", meaning: "bốn" },
    "五": { furigana: "ご", meaning: "năm" },
    "六": { furigana: "ろく", meaning: "sáu" },
    "七": { furigana: "しち/なな", meaning: "bảy" },
    "八": { furigana: "はち", meaning: "tám" },
    "九": { furigana: "く/きゅう", meaning: "chín" },
    "十": { furigana: "じゅう", meaning: "mười" },
    "百": { furigana: "ひゃく", meaning: "trăm" },
    "千": { furigana: "せん", meaning: "nghìn" },
    "万": { furigana: "まん", meaning: "vạn" },
    "円": { furigana: "えん", meaning: "yên" },
    "十個": { furigana: "じゅっこ", meaning: "10 cái" },
    "二個": { furigana: "にこ", meaning: "2 cái" },
    "個": { furigana: "こ", meaning: "cái/chiếc" },
    "枚": { furigana: "まい", meaning: "tờ/tấm" },
    "二枚": { furigana: "にまい", meaning: "2 tờ/tấm" },
    "十枚": { furigana: "じゅうまい", meaning: "10 tờ/tấm" },
    "本": { furigana: "ほん", meaning: "sách/cuốn" },
    "二本": { furigana: "にほん", meaning: "2 chiếc" },
    "冊": { furigana: "さつ", meaning: "cuốn sách" },
    "二冊": { furigana: "にさつ", meaning: "2 cuốn sách" },
    "十冊": { furigana: "じゅっさつ", meaning: "10 cuốn sách" },
    "台": { furigana: "だい", meaning: "chiếc/máy" },
    "二台": { furigana: "にだい", meaning: "2 chiếc máy" },
    "杯": { furigana: "はい", meaning: "ly/chén" },
    "二杯": { furigana: "にはい", meaning: "2 ly/chén" },
    "匹": { furigana: "ひき", meaning: "con vật" },
    "羽": { furigana: "わ", meaning: "con (chim)" },
    "一羽": { furigana: "いちわ", meaning: "1 con chim" },
    "件": { furigana: "けん", meaning: "vụ/trường hợp" },
    "階": { furigana: "かい", meaning: "tầng" },
    "着": { furigana: "ちゃく", meaning: "bộ quần áo" },
    "歳": { furigana: "さい", meaning: "tuổi" },
    "十歳": { furigana: "じゅっさい", meaning: "10 tuổi" },

    // Colors
    "赤": { furigana: "あか", meaning: "đỏ", tip: "Tượng hình: màu đỏ của lửa" },
    "青": { furigana: "あお", meaning: "xanh dương", tip: "Tượng hình: màu xanh của nước/trời" },
    "白": { furigana: "しろ", meaning: "trắng", tip: "Tượng hình: màu trắng của mặt trời" },
    "黒": { furigana: "くろ", meaning: "đen", tip: "Tượng hình: màu đen của bồ hóng" },
    "黄": { furigana: "き", meaning: "vàng", tip: "Tượng hình: màu vàng của lúa chín" },
    "緑": { furigana: "みどり", meaning: "xanh lá", tip: "糸(sợi)+録(bât) → màu xanh của cây cỏ" },
    "茶": { furigana: "ちゃ", meaning: "nâu", tip: "茶(trà) → màu nâu của lá trà" },

    // Actions / Verbs
    "食べる": { furigana: "たべる", meaning: "ăn", tip: "食(ăn)+べる(động từ) → ănĐồ ăn" },
    "飲む": { furigana: "のむ", meaning: "uống", tip: "飲(uống) → đưa đồ uống vào miệng" },
    "行く": { furigana: "いく", meaning: "đi", tip: "行(đi/hành động) → di chuyển" },
    "来る": { furigana: "くる", meaning: "đến", tip: "来(đến nơi) → tiến về phía" },
    "帰る": { furigana: "かえる", meaning: "về", tip: "帰(về)+る(động từ) → quay trở về" },
    "見る": { furigana: "みる", meaning: "xem/nhìn", tip: "見(nhìn) → mắt nhìn quan sát" },
    "聴く": { furigana: "きく", meaning: "nghe/hỏi", tip: "聴(tai)+わかり(để hiểu) → dùng tai để nghe hiểu" },
    "話す": { furigana: "はなす", meaning: "nói/trò chuyện", tip: "話(nói) → mở miệng nói chuyện" },
    "書く": { furigana: "かく", meaning: "viết", tip: "書(chữ viết) → dùng tay viết chữ" },
    "読む": { furigana: "よむ", meaning: "đọc", tip: "読(đọc) → nhìn chữ để hiểu" },
    "買う": { furigana: "かう", meaning: "mua", tip: "買(mua) → trả tiền lấy đồ" },
    "売る": { furigana: "うる", meaning: "bán", tip: "売(bán) → đưa đồ lấy tiền" },
    "使う": { furigana: "つかう", meaning: "sử dụng", tip: "使(sử)+う(động từ) → sử dụng đồ vật" },
    "使って": { furigana: "つかって", meaning: "dùng (dạng て)" },
    "作る": { furigana: "つくる", meaning: "làm/nấu", tip: "作(đồng nghĩa làm) → tạo ra cái gì đó" },
    "洗う": { furigana: "あらう", meaning: "rửa", tip: "洗(rửa) → dụng nước làm sạch" },
    "消す": { furigana: "けす", meaning: "tắt/xóa", tip: "消(biến mất) → làm cho biến mất = tắt" },
    "消った": { furigana: "けした", meaning: "đã tắt" },
    "付ける": { furigana: "つける", meaning: "bật/đeo", tip: "付(đính vào) → đính bật lên" },
    "開ける": { furigana: "あける", meaning: "mở", tip: "開(mở ra) → làm để mở" },
    "閉める": { furigana: "しめる", meaning: "đóng", tip: "閉(đóng lại) → làm để đóng" },
    "起きる": { furigana: "おきる", meaning: "thức dậy", tip: "起(dậy/đứng) → đứng dậy khỏi giường" },
    "寒る": { furigana: "ねる", meaning: "ngủ", tip: "寒(đầu nằm xuống)+るđộng từ → nằm xuống ngủ" },
    "入る": { furigana: "はいる", meaning: "vào", tip: "入(vào trong) → đi vào bên trong" },
    "出る": { furigana: "でる", meaning: "ra", tip: "出(ra ngoài) → đi ra bên ngoài" },
    "教える": { furigana: "おしえる", meaning: "dạy/chỉ", tip: "教(dạy) → truyền đạt kiến thức" },
    "習う": { furigana: "ならう", meaning: "học (từ người khác)", tip: "習(học/tập) → học tập từ thầy" },
    "覚える": { furigana: "おぼえる", meaning: "ghi nhớ", tip: "覚(cảm giác/nhớ) → để đầu ghi nhớ" },
    "忘れる": { furigana: "わすれる", meaning: "quên", tip: "忘(quên) → tim làm mất ký ức" },
    "忘れて": { furigana: "わすれて", meaning: "quên (dạng て)" },
    "待つ": { furigana: "まつ", meaning: "đợi", tip: "待(đợi) → đưứng làng đợi thời" },
    "会う": { furigana: "あう", meaning: "gặp", tip: "会(hứa gặp/hội) → gặp gỡ nhau" },
    "歩く": { furigana: "あるく", meaning: "đi bộ", tip: "歩(đi bước chân) → bước đi từng bước" },
    "走る": { furigana: "はしる", meaning: "chạy", tip: "走(chạy/vội) → di chuyển nhanh" },
    "乗る": { furigana: "のる", meaning: "lên (xe)", tip: "乗(leo lên) → leo lên xe" },
    "降りる": { furigana: "おりる", meaning: "xuống (xe)", tip: "降(xuống) → xuống khỏi xe" },
    "着く": { furigana: "つく", meaning: "đến nơi", tip: "着(đến/đính) → đính vào điểm đến" },
    "置く": { furigana: "おく", meaning: "đặt", tip: "置(đặt xuống) → đặt vật ở đâu đó" },
    "持つ": { furigana: "もつ", meaning: "cầm/có", tip: "持(giữ/cầm) → tay giữ vật" },
    "貸す": { furigana: "かす", meaning: "cho mượn", tip: "貸(cho mượn) → tạm thời cho dùng" },
    "借りる": { furigana: "かりる", meaning: "mượn", tip: "借(mượn) → tạm thời dùng của người khác" },
    "払う": { furigana: "はらう", meaning: "trả tiền", tip: "払(trả/thanh toán) → đưa tiền để thanh toán" },
    "送る": { furigana: "おくる", meaning: "gửi", tip: "送(gửi đi) → đưa đến nơi khác" },
    "受け取る": { furigana: "うけとる", meaning: "nhận", tip: "受(nhận)+取(đấy lấy) → đưa tay nhận lấy" },
    "泣く": { furigana: "なく", meaning: "khóc", tip: "泣(đầm đìa nước mắt) → mắt chảy nước" },
    "笑う": { furigana: "わらう", meaning: "cười", tip: "笑(cười) → mở miệng cười vui" },
    "磨く": { furigana: "みがく", meaning: "đánh (răng)/đánh bóng", tip: "磨(ài xát/đánh bóng) → cọ sát cho sáng" },
    "磨いて": { furigana: "みがいて", meaning: "đánh (dạng て)", tip: "đánh (dạng て)" },
    "沸かす": { furigana: "わかす", meaning: "đun sôi", tip: "沸(đun/sôi) → đun nước đến sôi" },
    "乾かす": { furigana: "かわかす", meaning: "làm khô", tip: "乾(khô) → làm cho khô" },
    "温める": { furigana: "あたためる", meaning: "hâm nóng", tip: "温(ấm) → làm cho ấm lên" },
    "炊く": { furigana: "たく", meaning: "nấu (cơm)", tip: "炊(đun nấu) → đun nước nấu cơm" },
    "盛り付ける": { furigana: "もりつける", meaning: "bày biện (thức ăn)", tip: "盛(chất đầy)+付(gắn) → sắp xếp đẹp mắt" },
    "切る": { furigana: "きる", meaning: "cắt", tip: "切(cắt) → dùng dao cắt rời" },
    "混ぜる": { furigana: "まぜる", meaning: "khuấy/trộn", tip: "混(đào lộn)+ぜ(động từ) → trộn đều" },
    "並べる": { furigana: "ならべる", meaning: "xếp/sắp", tip: "並(sắp hàng) → xếp từng món ngay ngắn" },
    "留める": { furigana: "とめる", meaning: "giữ/ghim lại", tip: "留(giữ lại) → giữ cố định" },
    "貼る": { furigana: "はる", meaning: "dán", tip: "貼(dán) → gắn chặt vào mặt phẳng" },
    "提出する": { furigana: "ていしゅつする", meaning: "nộp", tip: "提(đưa lên)+出(đưa ra) → đưa nộp lên" },
    "整える": { furigana: "ととのえる", meaning: "sắp xếp/chỉnh lý", tip: "整(ngay ngắn/chỉnh) → làm cho ngăn nắp" },
    "隠す": { furigana: "かくす", meaning: "che giấu", tip: "隠(ẩn/giấu) → làm cho không thấy được" },
    "壊れる": { furigana: "こわれる", meaning: "bị hỏng", tip: "壊(đổ vỡ/phá) → vật bị phá hỏng" },
    "叶う": { furigana: "かなう", meaning: "thành hiện thực", tip: "叶(được chấp nhận) → ước mơ trở thành thực" },
    "頼む": { furigana: "たのむ", meaning: "đặt/yêu cầu", tip: "頼(đặt đơn/nhờ) → đề nghị ai làm gì" },

    // Adjectives
    "近い": { furigana: "ちかい", meaning: "gần", tip: "近(gần) → khoảng cách nhỏ" },
    "遠い": { furigana: "とおい", meaning: "xa", tip: "遠(xa) → khoảng cách lớn" },
    "早い": { furigana: "はやい", meaning: "sớm/nhanh", tip: "早(sớm/nhanh) → đến sớm hơn" },
    "遅い": { furigana: "おそい", meaning: "muộn/chậm", tip: "遅(chậm/trễ) → đến trễ hơn" },
    "長い": { furigana: "ながい", meaning: "dài", tip: "長(dài) → tượng hình: sợi tóc dài" },
    "短い": { furigana: "みじかい", meaning: "ngắn", tip: "短(ngắn) → độ dài nhỏ" },
    "高い": { furigana: "たかい", meaning: "cao/đắt", tip: "高(cao) → vươn lên cao" },
    "低い": { furigana: "ひくい", meaning: "thấp", tip: "低(thấp) → gần mặt đất" },
    "広い": { furigana: "ひろい", meaning: "rộng", tip: "広(rộng) → không gian lớn" },
    "狭い": { furigana: "せまい", meaning: "hẹp", tip: "狭(hẹp) → không gian nhỏ" },
    "重い": { furigana: "おもい", meaning: "nặng", tip: "重(nặng) → tượng hình: đá đè xuống" },
    "軽い": { furigana: "かるい", meaning: "nhẹ", tip: "軽(nhẹ) → không cần nhiều sức" },
    "強い": { furigana: "つよい", meaning: "mạnh", tip: "強(mạnh) → có sức lực lớn" },
    "弱い": { furigana: "よわい", meaning: "yếu", tip: "弱(yếu) → không có sức mạnh" },
    "明るい": { furigana: "あかるい", meaning: "sáng sủa", tip: "明(đèn sáng)+るい(động từ tính từ) → có nhiều ánh sáng" },
    "暗い": { furigana: "くらい", meaning: "tối tăm", tip: "暗(tối) → thiếu ánh sáng" },
    "暖かい": { furigana: "あたたかい", meaning: "ấm áp", tip: "暖(ấm) → nhiệt dễ chịu" },
    "涼しい": { furigana: "すずしい", meaning: "mát mẻ", tip: "涼(mát/dịu) → nhiệt ưu được giảm" },
    "寒い": { furigana: "さむい", meaning: "lạnh", tip: "寒(lạnh/rét) → nhiệt thấp" },
    "暸い": { furigana: "あつい", meaning: "nóng", tip: "暸(nóng bức) → nhiệt cao" },
    "新しい": { furigana: "あたらしい", meaning: "mới", tip: "新(mới) → vừa mới xuất hiện" },
    "古い": { furigana: "ふるい", meaning: "cũ", tip: "古(cũ/xưa) → có từ lâu đời" },
    "難しい": { furigana: "むずかしい", meaning: "khó", tip: "難(khó/cực nhọc) → không dễ làm" },
    "易しい": { furigana: "やさしい", meaning: "dễ", tip: "易(dễ) → không cần cố gắng nhiều" },
    "忙しい": { furigana: "いそがしい", meaning: "bận rộn", tip: "忙(bận rộn) → nhiều việc phải làm" },
    "大きい": { furigana: "おおきい", meaning: "to", tip: "大(lớn/to) → kích thước lớn" },
    "小さい": { furigana: "ちいさい", meaning: "nhỏ", tip: "小(nhỏ) → kích thước bé nhỏ" },
    "悪い": { furigana: "わるい", meaning: "xấu/tệ", tip: "悪(xấu/tệ) → không tốt" },
    "良い": { furigana: "よい", meaning: "tốt", tip: "良(tốt) → đạt yêu cầu" },
    "白い": { furigana: "しろい", meaning: "màu trắng", tip: "白(trắng) → màu sắc trong sáng" },

    // Abstract nouns / Other
    "結果": { furigana: "けっか", meaning: "kết quả", tip: "結(kết)+果(quả) → quả được sau cùng" },
    "考え": { furigana: "かんがえ", meaning: "suy nghĩ", tip: "考(suy nghĩ/suy xét) → đầu óc vận dụng" },
    "夢": { furigana: "ゆめ", meaning: "giấc mơ", tip: "夢(mơ/ngủ) → cảnh tượng khi ngủ" },
    "言葉": { furigana: "ことば", meaning: "ngôn ngữ/từ ngữ", tip: "言(nói)+葉(lá) → những từ như lá cây trên cành" },
    "意味": { furigana: "いみ", meaning: "ý nghĩa", tip: "意(ý nghĩ/cãm giác)+味(đạt vị) → vị cần nắm bắt" },
    "理由": { furigana: "りゆう", meaning: "lý do", tip: "理(lý lẽ)+由(từ đâu) → nguồn gốc của việc" },
    "場所": { furigana: "ばしょ", meaning: "địa điểm/nơi chốn", tip: "場(sân/nơi)+所(địa điểm) → nơi chốn cụ thể" },
    "道": { furigana: "みち", meaning: "con đường", tip: "道(đường/đạo) → con đường người đi" },
    "方法": { furigana: "ほうほう", meaning: "phương pháp", tip: "方(hướng)+法(pháp) → cách thức tiếp cận" },
    "世界": { furigana: "せかい", meaning: "thế giới", tip: "世(thế hệ)+界(giới hạn) → khợp làm việc của thế giới" },
    "社会": { furigana: "しゃかい", meaning: "xã hội", tip: "社(đền/tổ chức)+会(hội) → tập hợp người" },
    "自分": { furigana: "じぶん", meaning: "bản thân", tip: "自(tự)+分(phần) → phần của mình" },
    "心": { furigana: "こころ", meaning: "tâm hồn/trái tim", tip: "Tượng hình: trái tim đang �ập" },
    "気持ち": { furigana: "きもち", meaning: "cảm giác/cảm xúc", tip: "気(tâm trí)+持(ở trong lòng) → cảm xúc bên trong" },
    "気": { furigana: "き", meaning: "khí/tâm trí", tip: "気(khí lực/tâm trí) → năng lượng tinh thần" },
    "声": { furigana: "こえ", meaning: "giọng nói", tip: "声(âm thanh) → âm thanh phát ra từ miệng" },
    "色": { furigana: "いろ", meaning: "màu sắc", tip: "色(màu) → màu sắc mang cảm xúc" },
    "形": { furigana: "かたち", meaning: "hình dạng", tip: "形(hình thế) → dáng vẻ bên ngoài" },
    "数": { furigana: "かず", meaning: "số lượng", tip: "数(số) → đếm số lượng" },
    "順番": { furigana: "じゅんばん", meaning: "thứ tự", tip: "順(thuận/theo đú́ng)+番(thứ tự) → thứ tự đúng chuẩn" },
    "荷物": { furigana: "にもつ", meaning: "hành lý/đồ vật", tip: "荷(mang)物(vật) → vật mang theo" },
    "言い方": { furigana: "いいかた", meaning: "cách nói", tip: "言い(nói)+方(cách) → cách diễn đạt" },
    "使い方": { furigana: "つかいかた", meaning: "cách dùng", tip: "使(sử)+方(cách) → cách sử dụng" },
    "読み方": { furigana: "よみかた", meaning: "cách đọc", tip: "読(đọc)+方(cách) → cách đọc" },
    "書き方": { furigana: "かきかた", meaning: "cách viết", tip: "書(viết)+方(cách) → cách viết" },
    "点数": { furigana: "てんすう", meaning: "điểm số", tip: "点(điểm)+数(số) → số điểm" },
    "名前": { furigana: "なまえ", meaning: "tên", tip: "名(tên)+前(trước) → tên gọi trước mặt" },
    "住所": { furigana: "じゅうしょ", meaning: "địa chỉ", tip: "住(trú/ở)+所(chỗ) → chỗ ở" },
    "番号": { furigana: "ばんごう", meaning: "số hiệu/số thứ tự", tip: "番(lượt)+号(hiệu) → số hiệu" },
    "写真": { furigana: "しゃしん", meaning: "ảnh chụp", tip: "写(sao chép)+真(chân thực) → sao chép sự thực" },
    "地図": { furigana: "ちず", meaning: "bản đồ", tip: "地(đất)+図(bản vẽ) → vẽ mặt đất" },
    "新聞": { furigana: "しんぶん", meaning: "báo", tip: "新(mới)+聞(nghe) → tin mới nghe" },
    "雑誌": { furigana: "ざっし", meaning: "tạp chí", tip: "雑(tạp/lẫn)+誌(ghi chép) → bài báo ghi đủ thứ" },
    "音楽": { furigana: "おんがく", meaning: "âm nhạc", tip: "音(âm thanh)+楽(vui vẻ) → âm thanh mang niềm vui" },
    "映画": { furigana: "えいが", meaning: "phim", tip: "映(chiếu)+画(hình vẽ) → hình được chiếu bóng" },

    // Na-adjectives
    "元気": { furigana: "げんき", meaning: "khỏe mạnh", tip: "元(nguyên gốc)+気(khí) → khí huyết nguyên vẹn" },
    "上手": { furigana: "じょうず", meaning: "giỏi", tip: "上(trên)+手(tay) → tay nghề bề trên" },
    "下手": { furigana: "へた", meaning: "kém", tip: "下(dưới)+手(tay) → tay nghề yếu kém" },
    "便利": { furigana: "べんり", meaning: "tiện lợi", tip: "便(tiện)+利(lợi) → sinh lợi và tiện" },
    "不便": { furigana: "ふべん", meaning: "bất tiện", tip: "不(không)+便(tiện) → không tiện lợi" },
    "静か": { furigana: "しずか", meaning: "yên tĩnh", tip: "青(xanh)+争(tranh giành) → tranh nhau bóng râm thì giữ tĩnh lặng" },
    "賑やか": { furigana: "にぎやか", meaning: "sôi động", tip: "貝(tiền)+辰(rồng/thìn) → rồng thả tiền xuống thì sôi động" },
    "親切": { furigana: "しんせつ", meaning: "tử tế", tip: "親(thân thế)+切(cắt/thân mật) → thân thiết tận tình" },
    "真面目": { furigana: "まじめ", meaning: "nghiêm túc", tip: "真(chân)+面(mặt)+目(mắt) → nhìn thẳng thực sự" },
    "丁寧": { furigana: "ていねい", meaning: "lịch sự/cẩn thận", tip: "丁(đinh/cẩn thận)+寧(an lành) → rất tử tế" },
    "複雑": { furigana: "ふくざつ", meaning: "phức tạp", tip: "複(phức)+雑(tạp) → không hề đơn giản" },
    "簡単": { furigana: "かんたん", meaning: "đơn giản/dễ", tip: "簡(giản)+単(đơn) → đơn độc giản dị" },
    "大事": { furigana: "だいじ", meaning: "quan trọng", tip: "大(lớn)+事(việc) → việc lớn lao" },
    "特別": { furigana: "とくべつ", meaning: "đặc biệt", tip: "特(đặc biệt)+別(khác biệt) → xuất chúng" },
    "普通": { furigana: "ふつう", meaning: "bình thường", tip: "普(phổ biến)+通(thông thường) → chuyện ai cũng làm" },
    "自由": { furigana: "じゆう", meaning: "tự do", tip: "自(tự mình)+由(do vậy) → do mình lựa chọn" },

    // Miscellaneous - standalone kanji
    "薬": { furigana: "くすり", meaning: "thuốc", tip: "艹(cỏ)+楽(vui) → cỏ (thảo dược) làm người vui/khỏe lại" },
    "病気": { furigana: "びょうき", meaning: "bệnh tật", tip: "病(ốm)+気(khí) → khí huyết ốm" },
    "事故": { furigana: "じこ", meaning: "tai nạn", tip: "事(sự)+故(cố) → sự cố ngoài ý muốn" },
    "匂い": { furigana: "におい", meaning: "mùi hương", tip: "勹(bao)+匕(muỗng) → mũi ngửi mùi thức ăn" },
    "湯": { furigana: "ゆ", meaning: "nước sôi/nước nóng", tip: "氵(nước)+昜(ánh dương) → nước đun nóng" },
    "お湯": { furigana: "おゆ", meaning: "nước sôi/nước nóng", tip: "湯 = nước nóng/nước sôi tắm" },
    "外": { furigana: "そと", meaning: "bên ngoài", tip: "夕(tối)+卜(bói) → tối ra ngoài xem bói" },
    "中": { furigana: "なか", meaning: "bên trong", tip: "Tượng hình: gạch chia đôi vòng tròn ở giữa" },
    "前": { furigana: "まえ", meaning: "trước/phía trước", tip: "月(trăng)+刂(đao) → cắt trước khi trưa" },
    "後": { furigana: "あと", meaning: "sau", tip: "彳(bước)+幺(nhỏ)+夂(đi theo) → người nhỏ bước theo sau" },
    "上": { furigana: "うえ", meaning: "trên", tip: "Tượng hình: điểm ở phía trên vạch ngang" },
    "下": { furigana: "した", meaning: "dưới", tip: "Tượng hình: điểm ở phía dưới vạch ngang" },
    "右": { furigana: "みぎ", meaning: "phải", tip: "ナ(tay)+口(miệng) → tay phải đưa đồ ăn vào miệng" },
    "左": { furigana: "ひだり", meaning: "trái", tip: "ナ(tay)+工(công) → tay trái cầm thước/công cụ" },
    "誕生日": { furigana: "たんじょうび", meaning: "sinh nhật", tip: "誕(ra đời)+生(sinh)+日(ngày) → ngày sinh ra lớn lên" },
    "好き": { furigana: "すき", meaning: "thích", tip: "女(phụ nữ)+子(trẻ con) → phụ nữ yêu trẻ con" },
    "嫌い": { furigana: "きらい", meaning: "ghét", tip: "女(phụ nữ)+兼(ghim/cạnh tranh) → sự ghen ghét nữ nhân" },
    "本当": { furigana: "ほんとう", meaning: "thật sự", tip: "本(bản)+当(đương) → đúng như nguồn gốc" },
    "少し": { furigana: "すこし", meaning: "một chút", tip: "小(nhỏ)+ノ(phẩy) → đã nhỏ lại phẩy đi bớt = rất ít" },
    "たくさん": { furigana: "たくさん", meaning: "nhiều", tip: "Gốc từ 沢山 (trạch sơn = đầm lầy và núi)" },
    "全部": { furigana: "ぜんぶ", meaning: "toàn bộ", tip: "全(toàn)+部(bộ) → toàn thể bộ phận" },
    "一緒": { furigana: "いっしょ", meaning: "cùng nhau", tip: "一(một)+緒(sợi dây/manh mối) → chung một đầu mối" },
    "別々": { furigana: "べつべつ", meaning: "riêng lẻ", tip: "別(tách/biệt) → riêng ra từng phần" },
    "最初": { furigana: "さいしょ", meaning: "đầu tiên", tip: "最(nhất)+初(đầu) → ban đầu tiên" },
    "最後": { furigana: "さいご", meaning: "cuối cùng", tip: "最(nhất)+後(sau) → ở sau cùng" },
    "次": { furigana: "つぎ", meaning: "tiếp theo", tip: "冫(băng)+欠(thiếu) → kế tiếp thiếu băng" },
    "一人": { furigana: "ひとり", meaning: "một mình", tip: "一(một)+人(người)" },
    "二人": { furigana: "ふたり", meaning: "hai người", tip: "二(hai)+人(người)" },
    "手紙": { furigana: "てがみ", meaning: "thư tay", tip: "手(tay)+紙(giấy) → giấy viết tay = thư" },
    "電子メール": { furigana: "でんしメール", meaning: "email", tip: "電(điện)+子(tử) → thư điện tử" },
    "注意": { furigana: "ちゅうい", meaning: "chú ý/cẩn thận", tip: "注(rót)+意(ý) → rót ý vào/để tâm vào" },

    // === 43 missing kanji found from data scan ===
    // Verbs / actions
    "終わる": { furigana: "おわる", meaning: "kết thúc", tip: "糸(sợi chỉ)+冬(mùa đông) → đan chỉ suốt mùa đông rồi cũng xong" },
    "終わらせる": { furigana: "おわらせる", meaning: "làm xong/kết thúc", tip: "Dạng sai khiến của 終わる" },
    "終": { furigana: "おわ", meaning: "kết thúc", tip: "糸(sợi chỉ)+冬(mùa đông)" },
    "拭く": { furigana: "ふく", meaning: "lau/chùi", tip: "手(tay)+式(kiểu/cách) → dùng tay lau" },
    "拭": { furigana: "ふ", meaning: "lau/chùi", tip: "手(tay)+式(kiểu/cách)" },
    "鳴る": { furigana: "なる", meaning: "kêu/phát ra âm thanh", tip: "口(miệng)+鳥(chim) → chim kêu/âm vang" },
    "鳴": { furigana: "な", meaning: "kêu/vang", tip: "口(miệng)+鳥(chim)" },
    "戻す": { furigana: "もどす", meaning: "trả lại/đặt lại", tip: "戸(cửa)+犬(chó) → chó quay về cửa nhà" },
    "戻る": { furigana: "もどる", meaning: "quay trở lại", tip: "戸(cửa)+犬(chó) → chó quay về cửa" },
    "戻": { furigana: "もど", meaning: "trở lại", tip: "戸(cửa)+犬(chó)" },
    "割る": { furigana: "わる", meaning: "làm vỡ/chia", tip: "害(tổn hại)+刀(dao) → cầm dao chia cắt gây vỡ" },
    "割って": { furigana: "わって", meaning: "làm vỡ", tip: "Dạng て của 割る" },
    "割": { furigana: "わ", meaning: "vỡ/chia", tip: "害(tổn hại)+刀(dao)" },
    "変える": { furigana: "かえる", meaning: "thay đổi", tip: "亦(cũng)+夂(bước đi) → thay đổi hình dánh" },
    "変": { furigana: "か", meaning: "thay đổi/kỳ lạ", tip: "亦+夂 → bị thay đổi" },
    "止む": { furigana: "やむ", meaning: "dừng lại/tạnh", tip: "止(dừng) → bước chân đứng lại" },
    "止み": { furigana: "やみ", meaning: "tạnh (mưa)" },
    "止": { furigana: "と", meaning: "dừng", tip: "Tuyệt đối không đi tiếp" },
    "曇り": { furigana: "くもり", meaning: "trời âm u", tip: "日(mặt trời)+雲(mây) → mây che lấp mặt trời" },
    "曇": { furigana: "くも", meaning: "u ám/âm u", tip: "日(mặt trời)+雲(mây)" },
    "始める": { furigana: "はじめる", meaning: "bắt đầu", tip: "女(nữ)+台(đài) → phụ nữ mang thai bắt đầu sự sống" },
    "始": { furigana: "はじ", meaning: "bắt đầu", tip: "女(nữ)+台(bệ/đài)" },
    "疲れる": { furigana: "つかれる", meaning: "mệt mỏi", tip: "疒(chứng bệnh)+皮(da) → bệnh khiến da dẻ mệt mỏi" },
    "疲れて": { furigana: "つかれて", meaning: "vì mệt" },
    "疲": { furigana: "つか", meaning: "mệt", tip: "疒(bệnh/ốm)+皮(da/bề ngoài)" },
    "遊ぶ": { furigana: "あそぶ", meaning: "vui chơi", tip: "辶(đi)+方(phương hướng)+子(con/nhỏ) → trẻ em đi chơi bốn phương" },
    "遊び": { furigana: "あそび", meaning: "trò chơi" },
    "遊": { furigana: "あそ", meaning: "vui chơi", tip: "辶+方+子" },

    // Nouns
    "私": { furigana: "わたし", meaning: "tôi", tip: "禾(lúa)+ム(tư) → lúa của riêng tôi" },
    "机": { furigana: "つくえ", meaning: "cái bàn", tip: "木(mộc)+几(kỷ) → bàn làm bằng gỗ" },
    "床": { furigana: "ゆか", meaning: "sàn nhà", tip: "广(mái)+木(gỗ) → sàn nhà lót gỗ" },
    "体": { furigana: "からだ", meaning: "cơ thể", tip: "亻(người)+本(gốc) → gốc của con người là cơ thể" },
    "箱": { furigana: "はこ", meaning: "cái hộp", tip: "竹(tre)+相(tương/nhìn) → hộp tre để đựng đồ" },
    "蛇": { furigana: "へび", meaning: "con rắn", tip: "虫(côn trùng)+它(nó) → loài rắn rết bò" },
    "北": { furigana: "きた", meaning: "phía bắc", tip: "Tượng hình: hai người quay lưng lại với nhau vì gió lạnh" },
    "北海道": { furigana: "ほっかいどう", meaning: "Hokkaido", tip: "北(Bắc)+海(Hải)+道(Đạo)" },
    "字": { furigana: "じ", meaning: "chữ/ký tự", tip: "宀(mái nhà)+子(trẻ con) → trẻ con học chữ trong nhà" },
    "文字": { furigana: "もじ", meaning: "chữ viết", tip: "文(văn)+字(tự) → văn bản chữ viết" },
    "客": { furigana: "きゃく", meaning: "khách", tip: "宀(mái)+各(mỗi) → mỗi người đến nhà là khách" },
    "お客さん": { furigana: "おきゃくさん", meaning: "khách/quý khách", tip: "客 = vị khách" },

    // Compound word components
    "準備": { furigana: "じゅんび", meaning: "chuẩn bị", tip: "準(chuẩn)+備(bị) → chuẩn bị sẵn sàng" },
    "準": { furigana: "じゅん", meaning: "chuẩn", tip: "氵(nước)+隼(chim chuẩn) → canh chuẩn như nước" },
    "備": { furigana: "び", meaning: "sẵn sàng", tip: "亻(người)+艹(cỏ)+厂(sườn núi)+用(dụng) → người dùng đồ có sẵn" },
    "保存": { furigana: "ほぞん", meaning: "bảo quản/lưu trữ", tip: "保(bảo)+存(tồn) → giữ gìn không mất" },
    "保": { furigana: "ほ", meaning: "bảo tồn", tip: "亻(người)+呆(ngốc) → người bảo vệ đứa ngốc" },
    "存": { furigana: "ぞん", meaning: "tồn tại", tip: "Tượng hình: có mặt, tồn tại" },
    "記念品": { furigana: "きねんひん", meaning: "đồ lưu niệm", tip: "記(ghi)+念(nhớ)+品(đồ) → đồ vật để nhớ về" },
    "記念": { furigana: "きねん", meaning: "kỷ niệm", tip: "記(ghi lại)+念(ý niệm) → ghi nhớ kỷ niệm" },
    "記": { furigana: "き", meaning: "ghi chép", tip: "言(nói)+己(bản thân) → tự nhắc mình ghi chép" },
    "念": { furigana: "ねん", meaning: "kỷ niệm/ý niệm", tip: "今(nay)+心(tim) → giữ trong tim hôm nay" },
    "完成": { furigana: "かんせい", meaning: "hoàn thành/hoàn chỉnh", tip: "完(hoàn)+成(thành) → làm xong hoàn toàn" },
    "完": { furigana: "かん", meaning: "hoàn toàn", tip: "宀(mái nhà)+元(nguyên) → nhà xây nguyên vẹn xong" },
    "成": { furigana: "せい", meaning: "thành", tip: "Thành công, tạo thành" },
    "休暇": { furigana: "きゅうか", meaning: "kỳ nghỉ", tip: "休(nghỉ)+暇(rỗi) → thời gian được nghỉ rảnh rỗi" },
    "暇": { furigana: "ひま", meaning: "rảnh rỗi/thời gian rảnh", tip: "日(ngày)+叚(mượn) → mượn thời gian để rảnh" },
    "休憩": { furigana: "きゅうけい", meaning: "nghỉ giải lao", tip: "休(nghỉ)+憩(nghỉ ngơi) → xả hơi" },
    "憩": { furigana: "けい", meaning: "nghỉ ngơi", tip: "舌(lưỡi)+息(thở) → thè lưỡi thở lúc nghỉ" },
    "心配": { furigana: "しんぱい", meaning: "lo lắng", tip: "心(tâm)+配(phân phát) → phát tâm lo lắng" },
    "配": { furigana: "はい", meaning: "phân bổ/lo", tip: "酉(bình rượu)+己(kỷ) → tự chia bình rượu" },
    "遊園地": { furigana: "ゆうえんち", meaning: "khu vui chơi", tip: "遊(chơi)+園(vườn)+地(đất) → mảnh đất vườn để chơi" },
    "お祝い": { furigana: "おいわい", meaning: "lễ chúc mừng/quà mừng", tip: "祝(chúc) → dùng lời chúc tốt đẹp" },
    "祝": { furigana: "いわ", meaning: "chúc mừng", tip: "礻(thị)+兄(huynh) → chúc mừng người anh lớn" },
    "お風呂": { furigana: "おふろ", meaning: "bồn tắm/nhà tắm", tip: "風(gió)+呂(lã) → bồn nước chắn gió" },
    "風呂": { furigana: "ふろ", meaning: "bồn tắm" },
    "呂": { furigana: "ろ", meaning: "bồn tắm", tip: "Tượng hình hai nửa bồn được nối nhau" },
    "風邪": { furigana: "かぜ", meaning: "cảm lạnh", tip: "風(gió)+邪(xấu) → trúng gió độc sính bệnh" },
    "邪": { furigana: "じゃ", meaning: "xấu/tà", tip: "牙(răng)+阝(ấp) → răng đi cắn nơi ác" },
    "結婚": { furigana: "けっこん", meaning: "kết hôn", tip: "結(kết)+婚(hôn) → kết hợp xây gia đình" },
    "婚": { furigana: "こん", meaning: "hôn nhân", tip: "女(nữ)+氏(thị)+日(ngày) → ngày người nữ đổi họ" },
    "装飾品": { furigana: "そうしょくひん", meaning: "đồ trang sức/trang trí", tip: "装(trang)+飾(sức)+品(đồ) → đồ dùng trang điểm làm đẹp" },
    "装飾": { furigana: "そうしょく", meaning: "trang trí", tip: "装+飾 → vật trang hoàng" },
    "装": { furigana: "そう", meaning: "trang phục/trang trí", tip: "壮(tráng)+衣(áo) → mặc áo đẹp khỏe vững" },
    "飾る": { furigana: "かざる", meaning: "trang trí", tip: "食(thực ăn)+人+巾(khăn) → trang trí khăn trải ăn thức" },
    "飾": { furigana: "かざ", meaning: "trang hoàng" },
    "既製品": { furigana: "きせいひん", meaning: "hàng may sẵn", tip: "既(đã)+製(chế tạo)+品(đồ) → đồ đã chế tạo" },
    "既製": { furigana: "きせい", meaning: "có sẵn", tip: "既(đã xong)+製(làm) → làm sẵn" },
    "既": { furigana: "き", meaning: "đã/sẵn có", tip: "Tượng hình: việc đã rồi" },
    "製品": { furigana: "せいひん", meaning: "sản phẩm", tip: "製(chế xuất)+品(hàng) → hàng hóa đã tạo ra" },
    "製": { furigana: "せい", meaning: "sản xuất/chế tạo", tip: "制(chế tài)+衣(áo) → xưởng may áo hàng" },
    "三畳": { furigana: "さんじょう", meaning: "3 chiếu (đơn vị phòng)", tip: "三(ba)+畳(chiếu) → 3 chiếu" },
    "畳": { furigana: "じょう", meaning: "chiếu tatami", tip: "田(điền)+宜(nghi) → chiếc chiếu vuông trên đất" },
    "余る": { furigana: "あまる", meaning: "còn thừa", tip: "人(người)+一(một)+木(cây) → một người dư ngả lưng vào cây" },
    "余った": { furigana: "あまった", meaning: "còn dư" },
    "余": { furigana: "あま", meaning: "thừa" },
    "手伝う": { furigana: "てつだう", meaning: "giúp đỡ", tip: "手(tay)+伝(truyền) → đưa tay giúp một tay" },
    "手伝わされる": { furigana: "てつだわされる", meaning: "bị bắt giúp", tip: "Dạng bị động sai khiến của 手伝う" },
    "伝": { furigana: "でん", meaning: "truyền đạt", tip: "亻(người)+云(nói) → người nói để truyền đi" },
    "勧める": { furigana: "すすめる", meaning: "khuyên bảo/giới thiệu", tip: "隹(chim)+力(sức) → thúc ép khuyên nhủ như sức chim" },
    "勧められる": { furigana: "すすめられる", meaning: "được khuyên", tip: "Dạng bị động của 勧める" },
    "勧": { furigana: "すす", meaning: "khuyên", tip: "隹+力" },

    // === 31 kanji unmatched by algorithm (verb conjugations not in dict) ===
    // 並 - arrange
    "並べて": { furigana: "ならべて", meaning: "xếp/để", tip: "並(xếp hạng) → dạng て của 並べる" },
    "並べてください": { furigana: "ならべてください", meaning: "hãy xếp/để ra" },
    "並": { furigana: "なら", meaning: "xếp hàng" },

    // 会 - meet/society
    "会議": { furigana: "かいぎ", meaning: "cuộc họp", tip: "会(hội)+議(nghị) → hội lại bàn tính" },
    "会": { furigana: "かい", meaning: "hội họp" },

    // 入 - enter/put in
    "入れる": { furigana: "いれる", meaning: "cho vào/bỏ vào", tip: "入(vào) → nhét vào trong" },
    "入れて": { furigana: "いれて", meaning: "cho vào", tip: "Dạng て của 入れる" },
    "入れました": { furigana: "いれました", meaning: "đã cho vào" },
    "入": { furigana: "い", meaning: "cho vào/vào" },

    // 出 - exit/go out
    "出かける": { furigana: "でかける", meaning: "ra ngoài/đi ra", tip: "出(xuất) → đi ra ngoài" },
    "出かけ": { furigana: "でかけ", meaning: "ra ngoài" },
    "出す": { furigana: "だす", meaning: "lấy ra/bắt đầu", tip: "出(ra) → lôi ra" },
    "出して": { furigana: "だして", meaning: "lấy ra" },
    "出": { furigana: "で", meaning: "ra/xuất" },

    // 切 - cut/important
    "切って": { furigana: "きって", meaning: "cắt đi", tip: "切(cắt) → đứt/dạng て" },
    "切れる": { furigana: "きれる", meaning: "bị cắt/hết", tip: "切(cắt) → đứt hẳn" },
    "切": { furigana: "き", meaning: "cắt" },

    // 壊 - break down
    "壊れて": { furigana: "こわれて", meaning: "bị hỏng", tip: "壊(vỡ) → dạng て của 壊れる" },
    "壊す": { furigana: "こわす", meaning: "phá hỏng", tip: "壊(đổ nát) → tự tay làm hư" },
    "壊": { furigana: "こわ", meaning: "hỏng/vỡ" },

    // 大 - big/great
    "大きな": { furigana: "おおきな", meaning: "to lớn", tip: "大(to lớn) → bổ nghĩa cho danh từ" },
    "大きく": { furigana: "おおきく", meaning: "to lớn hơn", tip: "大(to) → biến thành phó từ" },
    "大": { furigana: "おお", meaning: "lớn" },

    // 強 - strong
    "強く": { furigana: "つよく", meaning: "mạnh/mạnh hơn", tip: "強(mạnh) → cách dùng phó từ" },
    "強": { furigana: "つよ", meaning: "mạnh" },

    // 怖 - scary
    "怖かった": { furigana: "こわかった", meaning: "đã sợ", tip: "怖(sợ) → đáng sợ (quá khứ)" },
    "怖かったです": { furigana: "こわかったです", meaning: "đã rất sợ" },
    "怖": { furigana: "こわ", meaning: "đáng sợ" },

    // 持 - hold/carry
    "持ってくる": { furigana: "もってくる", meaning: "mang đến", tip: "持(cầm)+来る(đến) → mang tới" },
    "持ってきて": { furigana: "もってきて", meaning: "hãy mang đến", tip: "持(cầm) → dạng て" },
    "持って行きました": { furigana: "もっていきました", meaning: "đã mang đi", tip: "持(cầm)+行く(đi)" },
    "持って": { furigana: "もって", meaning: "cầm/mang" },
    "持": { furigana: "も", meaning: "mang/giữ" },

    // 整 - arrange/organize
    "整理": { furigana: "せいり", meaning: "sắp xếp/chỉnh lý", tip: "整(chỉnh)+理(lý) → dọn cho gọn gàng" },
    "整": { furigana: "せい", meaning: "sắp xếp" },

    // 時 - time/hour
    "時間": { furigana: "じかん", meaning: "thời gian", tip: "時(thời)+間(gian) → khoảng thời gian" },
    "時": { furigana: "とき", meaning: "thời gian/lúc" },

    // 書 - write
    "書いた": { furigana: "かいた", meaning: "đã viết", tip: "書(viết) → dạng quá khứ của 書く" },
    "書いて": { furigana: "かいて", meaning: "viết", tip: "書(viết) → dạng て của 書く" },
    "書": { furigana: "か", meaning: "viết" },

    // 歯 - tooth
    "歯": { furigana: "は", meaning: "răng", tip: "止(dừng)+米(gạo)+凵(hộp) → răng nhai gạo trong miệng" },

    // 沸 - boil
    "沸かして": { furigana: "わかして", meaning: "đun sôi", tip: "沸(sôi) → dạng て của 沸かす" },
    "沸": { furigana: "わ", meaning: "sôi" },

    // 洗 - wash
    "洗って": { furigana: "あらって", meaning: "rửa/giặt", tip: "洗(rửa) → dạng て" },
    "洗ってください": { furigana: "あらってください", meaning: "hãy rửa" },
    "洗います": { furigana: "あらいます", meaning: "rửa" },
    "洗": { furigana: "あら", meaning: "rửa" },

    // 消 - erase/turn off
    "消して": { furigana: "けして", meaning: "tắt/xóa", tip: "消(xóa) → dạng て của 消す" },
    "消した": { furigana: "けした", meaning: "đã tắt/xóa" },
    "消": { furigana: "け", meaning: "xóa/tắt" },

    // 留 - stay/remain
    "留守": { furigana: "るす", meaning: "vắng nhà", tip: "留(lưu)+守(thủ) → giữ cửa khi vắng nhà" },
    "留": { furigana: "る", meaning: "ở lại" },

    // 真 - true/genuine
    "真剣": { furigana: "しんけん", meaning: "nghiêm túc/quyết tâm", tip: "真(chân/đúng)+剣(kiếm) → như đấu kiếm thật" },
    "真": { furigana: "ま", meaning: "thật/đúng" },

    // 笑 - laugh/smile
    "笑って": { furigana: "わらって", meaning: "cười", tip: "笑(cười) → dạng て của 笑う" },
    "笑": { furigana: "わら", meaning: "cười" },

    // 粧 - makeup (compound part of 化粧)
    "粧": { furigana: "しょう", meaning: "trang điểm", tip: "米(gạo)+庄(trưởng/làng) → xa xưa lấy bột gạo đánh mặt phấn" },

    // 見 - see/watch
    "見て": { furigana: "みて", meaning: "nhìn/xem", tip: "見(nhìn) → dạng て của 見る" },
    "見せる": { furigana: "みせる", meaning: "cho xem", tip: "見(nhìn)+せる(sai khiến) → làm cho xem" },
    "見つける": { furigana: "みつける", meaning: "tìm thấy", tip: "見(nhìn)+つける(đính) → lướt nhìn và nhắm dính vào = tìm thấy" },
    "見つかる": { furigana: "みつかる", meaning: "được tìm thấy", tip: "Tự động từ của 見つける" },
    "見": { furigana: "み", meaning: "xem/nhìn" },

    // 言 - say/speak
    "言う": { furigana: "いう", meaning: "nói", tip: "言(ngôn) → cất nên lời" },
    "言って": { furigana: "いって", meaning: "nói rằng", tip: "言(nói) → dạng て" },
    "言": { furigana: "い", meaning: "nói" },

    // 話 - talk/story
    "話して": { furigana: "はなして", meaning: "nói chuyện", tip: "話(thoại) → dạng て của 話す" },
    "話": { furigana: "はなし", meaning: "câu chuyện/đề tài" },

    // 買 - buy
    "買って": { furigana: "かって", meaning: "mua", tip: "買(mãi) → dạng て của 買う" },
    "買いました": { furigana: "かいました", meaning: "đã mua" },
    "買い": { furigana: "かい", meaning: "mua" },
    "買": { furigana: "か", meaning: "mua" },

    // 貼 - stick/paste
    "貼って": { furigana: "はって", meaning: "dán", tip: "貼(dán) → dạng て của 貼る" },
    "貼": { furigana: "は", meaning: "dán" },

    // 起 - wake up/happen
    "起こす": { furigana: "おこす", meaning: "đánh thức", tip: "起(khởi/dậy) → dựng lên/làm thức" },
    "起きて": { furigana: "おきて", meaning: "thức dậy", tip: "起(dậy) → dạng て của 起きる" },
    "起": { furigana: "お", meaning: "thức dậy" },

    // 降 - fall/descend
    "降り": { furigana: "ふり", meaning: "mưa rơi", tip: "降(rơi) → danh từ hóa" },
    "降": { furigana: "ふ", meaning: "rơi/xuống" },

    // 隠 - hide
    "隠して": { furigana: "かくして", meaning: "giấu", tip: "隠(ẩn) → dạng て của 隠す" },
    "隠": { furigana: "かく", meaning: "giấu" },

    // 電 - electricity (component of many words)
    "電": { furigana: "でん", meaning: "điện", tip: "雨(mưa) 乚(đuôi) → điện xẹt xuống trong mưa" },

    // 食 - eat/food
    "食べて": { furigana: "たべて", meaning: "ăn", tip: "食(thực) → dạng て của 食べる" },
    "食べ": { furigana: "たべ", meaning: "ăn" },
    "食": { furigana: "しょく", meaning: "ăn/thức ăn" },
    "羨": { furigana: "しょう", meaning: "trang diem", tip: "羊(cừu)+疌(thuộc về) → ham đốn đồ người" },
};

/**
 * Checks if a character is a Kanji (CJK Unified Ideographs)
 */
export function isKanji(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) ||  // CJK Unified Ideographs
        (code >= 0x3400 && code <= 0x4DBF) ||  // CJK Extension A
        (code >= 0x20000 && code <= 0x2A6DF);
}

/**
 * Checks if a string contains any Kanji character
 */
export function hasKanji(text: string): boolean {
    return [...text].some(isKanji);
}

/**
 * Given a plain text string, annotates all known kanji words with furigana and meaning.
 * Returns an array of segments, each segment being either plain text or an annotated kanji word.
 */
export interface TextSegment {
    text: string;
    kanji?: KanjiInfo;
}

export function annotateKanji(text: string): TextSegment[] {
    const segments: TextSegment[] = [];

    // Sort keys by length (longest first) to match multi-kanji words before single characters
    const sortedKeys = Object.keys(KANJI_DICT).sort((a, b) => b.length - a.length);

    let i = 0;
    while (i < text.length) {
        let matched = false;
        for (const key of sortedKeys) {
            if (text.startsWith(key, i)) {
                segments.push({ text: key, kanji: KANJI_DICT[key] });
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            // Append to previous plain text segment or create new one
            if (segments.length > 0 && !segments[segments.length - 1].kanji) {
                segments[segments.length - 1].text += text[i];
            } else {
                segments.push({ text: text[i] });
            }
            i++;
        }
    }

    return segments;
}
