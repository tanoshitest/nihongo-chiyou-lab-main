
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson6Examples = {
    'こうちゃ': [
        { jp: '紅茶を飲みます。', romaji: 'Koucha wo nomimasu.', vn: 'Tôi uống trà đen.', furigana: [{ kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '紅茶が好きです。', romaji: 'Koucha ga suki desu.', vn: 'Tôi thích trà đen.', furigana: [{ kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: 'おいしい紅茶', romaji: 'Oishii koucha', vn: 'Trà đen ngon.', furigana: [{ kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }] },
        { jp: '紅茶にミルクを入れます。', romaji: 'Koucha ni miruku wo iremasu.', vn: 'Tôi cho sữa vào trà đen.', furigana: [{ kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }, { kanji: '入', reading: 'い', meaning: 'NHẬP' }] },
        { jp: '一緒に紅茶を飲みましょう。', romaji: 'Isshoni koucha wo nomimashou.', vn: 'Cùng uống trà đen nhé.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '温かい紅茶', romaji: 'Atatakai koucha', vn: 'Trà đen nóng.', furigana: [{ kanji: '温', reading: 'あたた', meaning: 'ÔN' }, { kanji: '紅茶', reading: 'こうちゃ', meaning: 'HỒNG TRÀ' }] }
    ],
    'ぎゅうにゅう': [
        { jp: '牛乳を飲みます。', romaji: 'Gyuunyuu wo nomimasu.', vn: 'Tôi uống sữa bò.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '牛乳を買います。', romaji: 'Gyuunyuu wo kaimasu.', vn: 'Tôi mua sữa bò.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '牛乳は体にいいです。', romaji: 'Gyuunyuu wa karada ni ii desu.', vn: 'Sữa bò tốt cho cơ thể.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '体', reading: 'からだ', meaning: 'THỂ' }] },
        { jp: '毎朝牛乳を飲みます。', romaji: 'Maiasa gyuunyuu wo nomimasu.', vn: 'Sáng nào tôi cũng uống sữa bò.', furigana: [{ kanji: '毎朝', reading: 'まいあさ', meaning: 'MỖI TRIỀU' }, { kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'ホット牛乳', romaji: 'Hotto gyuunyuu', vn: 'Sữa nóng.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }] },
        { jp: '牛乳パック', romaji: 'Gyuunyuu pakku', vn: 'Hộp sữa.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }] }
    ],
    'ミルク': [
        { jp: 'コーヒーにミルクを入れます。', romaji: 'Ko-hi- ni miruku wo iremasu.', vn: 'Tôi cho sữa vào cà phê.', furigana: [{ kanji: '入', reading: 'い', meaning: 'NHẬP' }] },
        { jp: 'ミルクティー', romaji: 'Mirukuti-', vn: 'Trà sữa.', furigana: [] },
        { jp: 'ミルクを飲みます。', romaji: 'Miruku wo nomimasu.', vn: 'Tôi uống sữa.', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '甘いミルク', romaji: 'Amai miruku', vn: 'Sữa ngọt.', furigana: [{ kanji: '甘', reading: 'あま', meaning: 'CAM' }] },
        { jp: 'ミルク砂糖なし', romaji: 'Miruku satou nashi', vn: 'Sữa không đường.', furigana: [{ kanji: '砂糖', reading: 'さとう', meaning: 'SA ĐƯỜNG' }] },
        { jp: '赤ちゃんにミルクをあげます。', romaji: 'Akachan ni miruku wo agemasu.', vn: 'Cho em bé uống sữa.', furigana: [{ kanji: '赤', reading: 'あか', meaning: 'XÍCH' }] }
    ],
    'ジュース': [
        { jp: 'ジュースを飲みます。', romaji: 'Juusu wo nomimasu.', vn: 'Tôi uống nước hoa quả.', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'オレンジジュース', romaji: 'Orenji juusu', vn: 'Nước cam.', furigana: [] },
        { jp: '冷たいジュース', romaji: 'Tsumetai juusu', vn: 'Nước trái cây lạnh.', furigana: [{ kanji: '冷', reading: 'つめ', meaning: 'LÃNH' }] },
        { jp: 'ジュースをください。', romaji: 'Juusu wo kudasai.', vn: 'Cho tôi nước trái cây.', furigana: [] },
        { jp: 'ジュースを作ります。', romaji: 'Juusu wo tsukurimasu.', vn: 'Tôi làm nước trái cây.', furigana: [{ kanji: '作', reading: 'つく', meaning: 'TÁC' }] },
        { jp: '缶ジュース', romaji: 'Kan juusu', vn: 'Nước trái cây đóng lon.', furigana: [{ kanji: '缶', reading: 'かん', meaning: 'PHỮU' }] }
    ],
    'ビール': [
        { jp: 'ビールを飲みます。', romaji: 'Biiru wo nomimasu.', vn: 'Tôi uống bia.', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '冷たいビール', romaji: 'Tsumetai biiru', vn: 'Bia lạnh.', furigana: [{ kanji: '冷', reading: 'つめ', meaning: 'LÃNH' }] },
        { jp: 'ビールで乾杯します。', romaji: 'Biiru de kanpai shimasu.', vn: 'Cụng ly bằng bia.', furigana: [{ kanji: '乾杯', reading: 'かんぱい', meaning: 'CAN BÔI' }] },
        { jp: '日本のビール', romaji: 'Nihon no biiru', vn: 'Bia Nhật.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }] },
        { jp: 'ビールをもう一本ください。', romaji: 'Biiru wo mou ippon kudasai.', vn: 'Cho tôi thêm một chai bia nữa.', furigana: [{ kanji: '一本', reading: 'いっぽん', meaning: 'NHẤT BẢN' }] },
        { jp: '毎日ビールを飲みます。', romaji: 'Mainichi biiru wo nomimasu.', vn: 'Tôi uống bia mỗi ngày.', furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] }
    ],
    'おさけ': [
        { jp: 'お酒を飲みます。', romaji: 'Osake wo nomimasu.', vn: 'Tôi uống rượu.', furigana: [{ kanji: '酒', reading: 'さけ', meaning: 'TỬU' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'お酒が好きです。', romaji: 'Osake ga suki desu.', vn: 'Tôi thích rượu.', furigana: [{ kanji: '酒', reading: 'さけ', meaning: 'TỬU' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: 'お酒に酔いました。', romaji: 'Osake ni yoimashita.', vn: 'Tôi đã say rượu.', furigana: [{ kanji: '酒', reading: 'さけ', meaning: 'TỬU' }, { kanji: '酔', reading: 'よ', meaning: 'TÚY' }] },
        { jp: '強いお酒', romaji: 'Tsuyoi osake', vn: 'Rượu mạnh.', furigana: [{ kanji: '強', reading: 'つよ', meaning: 'CƯỜNG' }, { kanji: '酒', reading: 'さけ', meaning: 'TỬU' }] },
        { jp: 'お酒をやめます。', romaji: 'Osake wo yamemasu.', vn: 'Tôi bỏ rượu.', furigana: [{ kanji: '酒', reading: 'さけ', meaning: 'TỬU' }] },
        { jp: '日本のお酒', romaji: 'Nihon no osake', vn: 'Rượu Nhật (Sake).', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '酒', reading: 'さけ', meaning: 'TỬU' }] }
    ],
    'ビデオ': [
        { jp: 'ビデオを見ます。', romaji: 'Bideo wo mimasu.', vn: 'Tôi xem video.', furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: 'ビデオを借ります。', romaji: 'Bideo wo karimasu.', vn: 'Tôi mượn băng video.', furigana: [{ kanji: '借', reading: 'か', meaning: 'TÁ' }] },
        { jp: 'ビデオを撮ります。', romaji: 'Bideo wo torimasu.', vn: 'Tôi quay video.', furigana: [{ kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: 'ビデオ通話', romaji: 'Bideo tsuuwa', vn: 'Gọi video.', furigana: [{ kanji: '通話', reading: 'つうわ', meaning: 'THÔNG THOẠI' }] },
        { jp: '面白いビデオ', romaji: 'Omoshiroi bideo', vn: 'Video thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }] },
        { jp: 'ビデオゲーム', romaji: 'Bideo ge-mu', vn: 'Trò chơi điện tử.', furigana: [] }
    ],
    'えいが': [
        { jp: '映画を見ます。', romaji: 'Eiga wo mimasu.', vn: 'Tôi xem phim.', furigana: [{ kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '映画館へ行きます。', romaji: 'Eigakan e ikimasu.', vn: 'Tôi đi đến rạp chiếu phim.', furigana: [{ kanji: '映画館', reading: 'えいがかん', meaning: 'ÁNH HỌA QUÁN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'どんな映画が好きですか。', romaji: 'Donna eiga ga suki desu ka.', vn: 'Bạn thích phim gì?', furigana: [{ kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '面白い映画でした。', romaji: 'Omoshiroi eiga deshita.', vn: 'Bộ phim rất thú vị.', furigana: [{ kanji: '面白', reading: 'おもしろ', meaning: 'DIỆN BẠCH' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }] },
        { jp: '日本の映画', romaji: 'Nihon no eiga', vn: 'Phim Nhật.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }] },
        { jp: '友達と映画を見ました。', romaji: 'Tomodachi to eiga wo mimashita.', vn: 'Tôi đã xem phim cùng bạn.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] }
    ],
    'CD': [
        { jp: 'CDを聞きます。', romaji: 'CD wo kikimasu.', vn: 'Tôi nghe đĩa CD.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: 'CDを買いました。', romaji: 'CD wo kaimashita.', vn: 'Tôi đã mua đĩa CD.', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'CDを借ります。', romaji: 'CD wo karimasu.', vn: 'Tôi mượn đĩa CD.', furigana: [{ kanji: '借', reading: 'か', meaning: 'TÁ' }] },
        { jp: '音楽のCD', romaji: 'Ongaku no CD', vn: 'Đĩa nhạc.', furigana: [{ kanji: '音楽', reading: 'おんがく', meaning: 'ÂM LẠC' }] },
        { jp: '日本語のCD', romaji: 'Nihongo no CD', vn: 'Đĩa tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }] },
        { jp: 'CDプレーヤー', romaji: 'CD pure-ya-', vn: 'Máy chạy đĩa CD.', furigana: [] }
    ],
    'てがみ': [
        { jp: '手紙を書きます。', romaji: 'Tegami wo kakimasu.', vn: 'Tôi viết thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: '手紙をもらいました。', romaji: 'Tegami wo moraimashita.', vn: 'Tôi đã nhận được thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }] },
        { jp: '手紙を送ります。', romaji: 'Tegami wo okurimasu.', vn: 'Tôi gửi thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '送', reading: 'おく', meaning: 'TỐNG' }] },
        { jp: '手紙を読みます。', romaji: 'Tegami wo yomimasu.', vn: 'Tôi đọc thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '母からの手紙', romaji: 'Haha kara no tegami', vn: 'Thư từ mẹ.', furigana: [{ kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }] },
        { jp: 'ラブレター (手紙)', romaji: 'Rabureta-', vn: 'Thư tình.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }] }
    ],
    'レポート': [
        { jp: 'レポートを書きます。', romaji: 'Repooto wo kakimasu.', vn: 'Tôi viết báo cáo.', furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: 'レポートを出します。', romaji: 'Repooto wo dashimasu.', vn: 'Tôi nộp báo cáo.', furigana: [{ kanji: '出', reading: 'だ', meaning: 'XUẤT' }] },
        { jp: 'レポートを読みます。', romaji: 'Repooto wo yomimasu.', vn: 'Tôi đọc báo cáo.', furigana: [{ kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '宿題のレポート', romaji: 'Shukudai no repooto', vn: 'Báo cáo bài tập.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }] },
        { jp: 'レポートは明日までです。', romaji: 'Repooto wa ashita made desu.', vn: 'Báo cáo hạn là đến ngày mai.', furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }] },
        { jp: '長いレポート', romaji: 'Nagai repooto', vn: 'Báo cáo dài.', furigana: [{ kanji: '長', reading: 'なが', meaning: 'TRƯỜNG' }] }
    ],
    'しゃしん': [
        { jp: '写真を撮ります。', romaji: 'Shashin wo torimasu.', vn: 'Tôi chụp ảnh.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: '写真を見ます。', romaji: 'Shashin wo mimasu.', vn: 'Tôi xem ảnh.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '家族の写真', romaji: 'Kazoku no shashin', vn: 'Ảnh gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }] },
        { jp: 'きれいな写真', romaji: 'Kireina shashin', vn: 'Ảnh đẹp.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }] },
        { jp: '写真を送ってください。', romaji: 'Shashin wo okutte kudasai.', vn: 'Hãy gửi ảnh cho tôi.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '送', reading: 'おく', meaning: 'TỐNG' }] },
        { jp: 'ここに写真を貼ります。', romaji: 'Koko ni shashin wo harimasu.', vn: 'Dán ảnh vào đây.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '貼', reading: 'は', meaning: 'THIẾP' }] }
    ],
    'みせ': [
        { jp: '店へ行きます。', romaji: 'Mise e ikimasu.', vn: 'Tôi đi đến cửa hàng.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'あの店は安いです。', romaji: 'Ano mise wa yasui desu.', vn: 'Cửa hàng kia rẻ.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '安', reading: 'やす', meaning: 'AN' }] },
        { jp: '店でパンを買います。', romaji: 'Mise de pan wo kaimasu.', vn: 'Tôi mua bánh mì ở cửa hàng.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '店の人', romaji: 'Mise no hito', vn: 'Người bán hàng / Người của tiệm.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '店を閉めます。', romaji: 'Mise wo shimemasu.', vn: 'Đóng cửa hàng.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '閉', reading: 'し', meaning: 'BẾ' }] },
        { jp: '新しい店', romaji: 'Atarashii mise', vn: 'Cửa hàng mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }] }
    ],
    'レストラン': [
        { jp: 'レストランで食べます。', romaji: 'Resutoran de tabemasu.', vn: 'Tôi ăn ở nhà hàng.', furigana: [{ kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'いいレストランですね。', romaji: 'Ii resutoran desu ne.', vn: 'Nhà hàng được đấy nhỉ.', furigana: [] },
        { jp: 'フランス料理のレストラン', romaji: 'Furansu ryouri no resutoran', vn: 'Nhà hàng món Pháp.', furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }] },
        { jp: 'レストランを予約します。', romaji: 'Resutoran wo yoyaku shimasu.', vn: 'Tôi đặt chỗ nhà hàng.', furigana: [{ kanji: '予約', reading: 'よやく', meaning: 'DỰ ƯỚC' }] },
        { jp: 'レストランへ行きました。', romaji: 'Resutoran e ikimashita.', vn: 'Tôi đã đi đến nhà hàng.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'レストランのメニュー', romaji: 'Resutoran no menyuu', vn: 'Thực đơn của nhà hàng.', furigana: [] }
    ],
    'にわ': [
        { jp: '庭があります。', romaji: 'Niwa ga arimasu.', vn: 'Có vườn.', furigana: [{ kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }] },
        { jp: '庭で遊びます。', romaji: 'Niwa de asobimasu.', vn: 'Tôi chơi trong vườn.', furigana: [{ kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }, { kanji: '遊', reading: 'あそ', meaning: 'DU' }] },
        { jp: '広い庭', romaji: 'Hiroi niwa', vn: 'Khu vườn rộng.', furigana: [{ kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }, { kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }] },
        { jp: '庭に犬がいます。', romaji: 'Niwa ni inu ga imasu.', vn: 'Có con chó ở trong vườn.', furigana: [{ kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }, { kanji: '犬', reading: 'いぬ', meaning: 'KHUYỂN' }] },
        { jp: '庭を作ります。', romaji: 'Niwa wo tsukurimasu.', vn: 'Làm vườn.', furigana: [{ kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] },
        { jp: '庭の花', romaji: 'Niwa no hana', vn: 'Hoa trong vườn.', furigana: [{ kanji: '庭', reading: 'にわ', meaning: 'ĐÌNH' }, { kanji: '花', reading: 'はな', meaning: 'HOA' }] }
    ],
    'しゅくだい': [
        { jp: '宿題をします。', romaji: 'Shukudai wo shimasu.', vn: 'Tôi làm bài tập về nhà.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }] },
        { jp: '宿題が多いです。', romaji: 'Shukudai ga ooi desu.', vn: 'Nhiều bài tập.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }] },
        { jp: '宿題が終わりました。', romaji: 'Shukudai ga owarimashita.', vn: 'Bài tập đã xong.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }, { kanji: '終', reading: 'お', meaning: 'CHUNG' }] },
        { jp: '今日の宿題', romaji: 'Kyou no shukudai', vn: 'Bài tập hôm nay.', furigana: [{ kanji: '今日', reading: 'きょう', meaning: 'KIM NHẬT' }, { kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }] },
        { jp: '宿題を忘れました。', romaji: 'Shukudai wo wasuremashita.', vn: 'Tôi quên bài tập.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }, { kanji: '忘', reading: 'わす', meaning: 'VONG' }] },
        { jp: '夏休みの宿題', romaji: 'Natsuyasumi no shukudai', vn: 'Bài tập nghỉ hè.', furigana: [{ kanji: '夏休み', reading: 'なつやすみ', meaning: 'HẠ HƯU' }, { kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }] }
    ],
    'テニス': [
        { jp: 'テニスをします。', romaji: 'Tenisu wo shimasu.', vn: 'Tôi chơi quần vợt.', furigana: [] },
        { jp: 'テニスが好きです。', romaji: 'Tenisu ga suki desu.', vn: 'Tôi thích quần vợt.', furigana: [{ kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '一緒にテニスをしませんか。', romaji: 'Isshoni tenisu wo shimasen ka.', vn: 'Cùng chơi tennis không?', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }] },
        { jp: '週末テニスをしました。', romaji: 'Shuumatsu tenisu wo shimashita.', vn: 'Cuối tuần tôi đã chơi tennis.', furigana: [{ kanji: '週末', reading: 'しゅうまつ', meaning: 'CHU MẠT' }] },
        { jp: 'テニスの試合', romaji: 'Tenisu no shiai', vn: 'Trận đấu tennis.', furigana: [{ kanji: '試合', reading: 'しあい', meaning: 'THÍ HỢP' }] },
        { jp: 'テニスコート', romaji: 'Tenisu ko-to', vn: 'Sân tennis.', furigana: [] }
    ],
    'サッカー': [
        { jp: 'サッカーをします。', romaji: 'Sakkaa wo shimasu.', vn: 'Tôi đá bóng.', furigana: [] },
        { jp: 'サッカーを見ます。', romaji: 'Sakkaa wo mimasu.', vn: 'Tôi xem bóng đá.', furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: 'サッカー選手', romaji: 'Sakkaa senshu', vn: 'Cầu thủ bóng đá.', furigana: [{ kanji: '選手', reading: 'せんしゅ', meaning: 'TUYỂN THỦ' }] },
        { jp: 'サッカーの練習', romaji: 'Sakkaa no renshuu', vn: 'Luyện tập bóng đá.', furigana: [{ kanji: '練習', reading: 'れんしゅう', meaning: 'LUYỆN TẬP' }] },
        { jp: 'サッカーが好きです。', romaji: 'Sakkaa ga suki desu.', vn: 'Tôi thích bóng đá.', furigana: [{ kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '校庭でサッカーをします。', romaji: 'Koutei de sakkaa wo shimasu.', vn: 'Tôi đá bóng ở sân trường.', furigana: [{ kanji: '校庭', reading: 'こうてい', meaning: 'HIỆU ĐÌNH' }] }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find Lesson 6 block
    const lesson6StartRegex = /(export\s+)?const lesson6Data: LessonDetail = \{/;
    const match = content.match(lesson6StartRegex);

    if (!match) {
        console.error("Lesson 6 data not found");
        process.exit(1);
    }

    const startIndex = match.index;
    const lesson7StartRegex = /export const lesson7Data/;
    const match7 = content.match(lesson7StartRegex);
    const endIndex = match7 ? match7.index : content.length;

    let lesson6Block = content.slice(startIndex, endIndex);
    let updatedCount = 0;

    for (const [word, examples] of Object.entries(lesson6Examples)) {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const safeItemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[^}]*?)(\\})`, '');

        if (safeItemRegex.test(lesson6Block)) {
            const examplesString = JSON.stringify(examples, null, 2)
                .replace(/"jp":/g, 'jp:')
                .replace(/"romaji":/g, 'romaji:')
                .replace(/"vn":/g, 'vn:')
                .replace(/"furigana":/g, 'furigana:')
                .replace(/"kanji":/g, 'kanji:')
                .replace(/"reading":/g, 'reading:')
                .replace(/"meaning":/g, 'meaning:')
                .replace(/\n/g, '\n      ');

            lesson6Block = lesson6Block.replace(safeItemRegex, (match, p1, p2) => {
                return `${p1},\n      examples: ${examplesString}\n    ${p2}`;
            });
            updatedCount++;
        } else {
            console.log(`Word ${word} not found/matched in Lesson 6 block.`);
        }
    }

    const finalContent = content.slice(0, startIndex) + lesson6Block + content.slice(endIndex);

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Updated ${updatedCount} words in Lesson 6 (Part 2).`);

} catch (err) {
    console.error(err);
}
