
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson5Examples = {
    'かれ': [
        { jp: '彼は学生です。', romaji: 'Kare wa gakusei desu.', vn: 'Anh ấy là sinh viên.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] },
        { jp: '彼は親切です。', romaji: 'Kare wa shinsetsu desu.', vn: 'Anh ấy tốt bụng.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }] },
        { jp: '彼に会いました。', romaji: 'Kare ni aimashita.', vn: 'Tôi đã gặp anh ấy.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '彼は日本語が上手です。', romaji: 'Kare wa nihongo ga jouzu desu.', vn: 'Anh ấy giỏi tiếng Nhật.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '上手', reading: 'じょうず', meaning: 'THƯỢNG THỦ' }] },
        { jp: '彼は誰ですか。', romaji: 'Kare wa dare desu ka.', vn: 'Anh ấy là ai?', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }] },
        { jp: '彼と一緒に帰りました。', romaji: 'Kare to isshoni kaerimashita.', vn: 'Tôi đã về cùng anh ấy.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
    ],
    'かのじょ': [
        { jp: '彼女はきれいな人です。', romaji: 'Kanojo wa kireina hito desu.', vn: 'Cô ấy là người xinh đẹp.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '彼女は先生です。', romaji: 'Kanojo wa sensei desu.', vn: 'Cô ấy là giáo viên.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }] },
        { jp: '彼女の名前はさくらです。', romaji: 'Kanojo no namae wa Sakura desu.', vn: 'Tên cô ấy là Sakura.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '名前', reading: 'なまえ', meaning: 'DANH TIỀN' }] },
        { jp: '彼女はベトナム人です。', romaji: 'Kanojo wa betonamujin desu.', vn: 'Cô ấy là người Việt Nam.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: '彼女とデートします。', romaji: 'Kanojo to de-to shimasu.', vn: 'Tôi hẹn hò với cô ấy.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }] },
        { jp: '彼女は元気がありません。', romaji: 'Kanojo wa genki ga arimasen.', vn: 'Cô ấy không được khỏe.', furigana: [{ kanji: '彼女', reading: 'かのじょ', meaning: 'BỈ NỮ' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] }
    ],
    'かぞく': [
        { jp: '家族は3人です。', romaji: 'Kazoku wa sannin desu.', vn: 'Gia đình tôi có 3 người.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '人', reading: 'にん', meaning: 'NHÂN' }] },
        { jp: '家族と日本へ来ました。', romaji: 'Kazoku to nihon e kimashita.', vn: 'Tôi đã đến Nhật cùng gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '家族に手紙を書きます。', romaji: 'Kazoku ni tegami wo kakimasu.', vn: 'Tôi viết thư cho gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: '家族は元気ですか。', romaji: 'Kazoku wa genki desu ka.', vn: 'Gia đình bạn có khỏe không?', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] },
        { jp: '家族に会いたいです。', romaji: 'Kazoku ni aitai desu.', vn: 'Tôi muốn gặp gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '家族写真', romaji: 'Kazoku shashin', vn: 'Ảnh gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }] }
    ],
    'ひとりで': [
        { jp: '一人で東京へ行きます。', romaji: 'Hitoride toukyou e ikimasu.', vn: 'Tôi đi Tokyo một mình.', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '一人で勉強します。', romaji: 'Hitoride benkyou shimasu.', vn: 'Tôi học một mình.', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: '一人で住んでいます。', romaji: 'Hitoride sunde imasu.', vn: 'Tôi đang sống một mình.', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '住', reading: 'す', meaning: 'TRÚ' }] },
        { jp: '一人でご飯を食べます。', romaji: 'Hitoride gohan wo tabemasu.', vn: 'Tôi ăn cơm một mình.', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '一人で大丈夫ですか。', romaji: 'Hitoride daijoubu desu ka.', vn: 'Một mình có ổn không?', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '大丈夫', reading: 'だいじょうぶ', meaning: 'ĐẠI TRƯỢNG PHU' }] },
        { jp: '一人での旅行', romaji: 'Hitoride no ryokou', vn: 'Du lịch một mình.', furigana: [{ kanji: '一人', reading: 'ひとり', meaning: 'NHẤT NHÂN' }, { kanji: '旅行', reading: 'りょこう', meaning: 'LỮ HÀNH' }] }
    ],
    'せんしゅう': [
        { jp: '先週、京都へ行きました。', romaji: 'Senshuu, kyouto e ikimashita.', vn: 'Tuần trước tôi đã đi Kyoto.', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '京都', reading: 'きょうと', meaning: 'KINH ĐÔ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '先週は忙しかったです。', romaji: 'Senshuu wa isogashikatta desu.', vn: 'Tuần trước tôi bận.', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }] },
        { jp: '先週、友達に会いました。', romaji: 'Senshuu, tomodachi ni aimashita.', vn: 'Tuần trước tôi đã gặp bạn.', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '先週の土曜日', romaji: 'Senshuu no doyoubi', vn: 'Thứ bảy tuần trước.', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '土曜日', reading: 'どようび', meaning: 'THỔ DIỆU NHẬT' }] },
        { jp: '先週から雨です。', romaji: 'Senshuu kara ame desu.', vn: 'Mưa từ tuần trước.', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '雨', reading: 'あめ', meaning: 'VŨ' }] },
        { jp: '先週何をしましたか。', romaji: 'Senshuu nani wo shimashita ka.', vn: 'Tuần trước bạn đã làm gì?', furigana: [{ kanji: '先週', reading: 'せんしゅう', meaning: 'TIÊN CHU' }, { kanji: '何', reading: 'なに', meaning: 'HÀ' }] }
    ],
    'こんしゅう': [
        { jp: '今週は忙しいです。', romaji: 'Konshuu wa isogashii desu.', vn: 'Tuần này tôi bận.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }] },
        { jp: '今週、テストがあります。', romaji: 'Konshuu, tesuto ga arimasu.', vn: 'Tuần này có bài kiểm tra.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }] },
        { jp: '今週の日曜日', romaji: 'Konshuu no nichiyoubi', vn: 'Chủ nhật tuần này.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }, { kanji: '日曜日', reading: 'にちようび', meaning: 'NHẬT DIỆU NHẬT' }] },
        { jp: '今週、国へ帰ります。', romaji: 'Konshuu, kuni e kaerimasu.', vn: 'Tuần này tôi về nước.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '今週の予定', romaji: 'Konshuu no yotei', vn: 'Dự định của tuần này.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }, { kanji: '予定', reading: 'よてい', meaning: 'DỰ ĐỊNH' }] },
        { jp: '今週から始めます。', romaji: 'Konshuu kara hajimemasu.', vn: 'Bắt đầu từ tuần này.', furigana: [{ kanji: '今週', reading: 'こんしゅう', meaning: 'KIM CHU' }, { kanji: '始', reading: 'はじ', meaning: 'THỦY' }] }
    ],
    'らいしゅう': [
        { jp: '来週、アメリカへ行きます。', romaji: 'Raishuu, amerika e ikimasu.', vn: 'Tuần sau tôi sẽ đi Mỹ.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '来週は暇です。', romaji: 'Raishuu wa hima desu.', vn: 'Tuần sau tôi rảnh.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '暇', reading: 'ひま', meaning: 'HẠ' }] },
        { jp: '来週の月曜日', romaji: 'Raishuu no getsuyoubi', vn: 'Thứ hai tuần sau.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '月曜日', reading: 'げつようび', meaning: 'NGUYỆT DIỆU NHẬT' }] },
        { jp: '来週、会議があります。', romaji: 'Raishuu, kaigi ga arimasu.', vn: 'Tuần sau có cuộc họp.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '会議', reading: 'かいぎ', meaning: 'HỘI NGHỊ' }] },
        { jp: '来週会いましょう。', romaji: 'Raishuu aimashou.', vn: 'Hẹn gặp tuần sau.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '来週のスケジュール', romaji: 'Raishuu no sukejuuru', vn: 'Lịch trình tuần sau.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }] }
    ],
    'せんげつ': [
        { jp: '先月、日本へ来ました。', romaji: 'Sengetsu, nihon e kimashita.', vn: 'Tháng trước tôi đã đến Nhật.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '先月は寒かったです。', romaji: 'Sengetsu wa samukatta desu.', vn: 'Tháng trước trời lạnh.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '寒', reading: 'さむ', meaning: 'HÀN' }] },
        { jp: '先月、誕生日でした。', romaji: 'Sengetsu, tanjoubi deshita.', vn: 'Sinh nhật tôi vào tháng trước.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: '先月の給料', romaji: 'Sengetsu no kyuuryou', vn: 'Lương tháng trước.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '給料', reading: 'きゅうりょう', meaning: 'CẤP LIỆU' }] },
        { jp: '先月、車を買いました。', romaji: 'Sengetsu, kuruma wo kaimashita.', vn: 'Tháng trước tôi đã mua xe ô tô.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '車', reading: 'くるま', meaning: 'XA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '先月まで学生でした。', romaji: 'Sengetsu made gakusei deshita.', vn: 'Tôi là sinh viên cho đến tháng trước.', furigana: [{ kanji: '先月', reading: 'せんげつ', meaning: 'TIÊN NGUYỆT' }, { kanji: '学生', reading: 'がくせい', meaning: 'HỌC SINH' }] }
    ],
    'こんげつ': [
        { jp: '今月は忙しいです。', romaji: 'Kongetsu wa isogashii desu.', vn: 'Tháng này tôi bận.', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '忙', reading: 'いそが', meaning: 'MANG' }] },
        { jp: '今月、何をしますか。', romaji: 'Kongetsu, nani wo shimasu ka.', vn: 'Tháng này bạn làm gì?', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '何', reading: 'なに', meaning: 'HÀ' }] },
        { jp: '今月の終わり', romaji: 'Kongetsu no owari', vn: 'Cuối tháng này.', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '終', reading: 'お', meaning: 'CHUNG' }] },
        { jp: '今月、試験を受けます。', romaji: 'Kongetsu, shiken wo ukemasu.', vn: 'Tháng này tôi sẽ thi.', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '試験', reading: 'しけん', meaning: 'THÍ NGHIỆM' }, { kanji: '受', reading: 'う', meaning: 'THỤ' }] },
        { jp: '今月から働きます。', romaji: 'Kongetsu kara hatarakimasu.', vn: 'Tôi bắt đầu làm việc từ tháng này.', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
        { jp: '今月は雨が多いです。', romaji: 'Kongetsu wa ame ga ooi desu.', vn: 'Tháng này mưa nhiều.', furigana: [{ kanji: '今月', reading: 'こんげつ', meaning: 'KIM NGUYỆT' }, { kanji: '雨', reading: 'あめ', meaning: 'VŨ' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }] }
    ],
    'らいげつ': [
        { jp: '来月、国へ帰ります。', romaji: 'Raigetsu, kuni e kaerimasu.', vn: 'Tháng sau tôi về nước.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '来月から大学生です。', romaji: 'Raigetsu kara daigakusei desu.', vn: 'Từ tháng sau tôi là sinh viên đại học.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '大学生', reading: 'だいがくせい', meaning: 'ĐẠI HỌC SINH' }] },
        { jp: '来月の予定', romaji: 'Raigetsu no yotei', vn: 'Dự định tháng sau.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '予定', reading: 'よてい', meaning: 'DỰ ĐỊNH' }] },
        { jp: '来月、結婚します。', romaji: 'Raigetsu, kekkon shimasu.', vn: 'Tháng sau tôi kết hôn.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '結婚', reading: 'けっこん', meaning: 'KẾT HÔN' }] },
        { jp: '来月の10日', romaji: 'Raigetsu no touka', vn: 'Ngày 10 tháng sau.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '日', reading: 'か', meaning: 'NHẬT' }] },
        { jp: '来月また来ます。', romaji: 'Raigetsu mata kimasu.', vn: 'Tháng sau tôi lại đến.', furigana: [{ kanji: '来月', reading: 'らいげつ', meaning: 'LAI NGUYỆT' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] }
    ],
    'きょねん': [
        { jp: '去年、日本へ来ました。', romaji: 'Kyonen, nihon e kimashita.', vn: 'Năm ngoái tôi đã đến Nhật.', furigana: [{ kanji: '去年', reading: 'きょ上げん', meaning: 'KHỨ NIÊN' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '去年は楽しかったです。', romaji: 'Kyonen wa tanoshikatta desu.', vn: 'Năm ngoái rất vui.', furigana: [{ kanji: '去年', reading: 'きょねん', meaning: 'KHỨ NIÊN' }, { kanji: '楽', reading: 'たの', meaning: 'LẠC' }] },
        { jp: '去年の夏', romaji: 'Kyonen no natsu', vn: 'Mùa hè năm ngoái.', furigana: [{ kanji: '去年', reading: 'きょねん', meaning: 'KHỨ NIÊN' }, { kanji: '夏', reading: 'なつ', meaning: 'HẠ' }] },
        { jp: '去年の12月', romaji: 'Kyonen no juunigatsu', vn: 'Tháng 12 năm ngoái.', furigana: [{ kanji: '去年', reading: 'きょねん', meaning: 'KHỨ NIÊN' }, { kanji: '月', reading: 'がつ', meaning: 'NGUYỆT' }] },
        { jp: '去年、大学を卒業しました。', romaji: 'Kyonen, daigaku wo sotsugyou shimashita.', vn: 'Năm ngoái tôi đã tốt nghiệp đại học.', furigana: [{ kanji: '去年', reading: 'きょねん', meaning: 'KHỨ NIÊN' }, { kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '卒業', reading: 'そつぎょう', meaning: 'TỐT NGHIỆP' }] },
        { jp: '去年より暑いです。', romaji: 'Kyonen yori atsui desu.', vn: 'Nóng hơn năm ngoái.', furigana: [{ kanji: '去年', reading: 'きょねん', meaning: 'KHỨ NIÊN' }, { kanji: '暑', reading: 'あつ', meaning: 'THỬ' }] }
    ],
    'ことし': [
        { jp: '今年は2026年です。', romaji: 'Kotoshi wa nisen nijuuroku nen desu.', vn: 'Năm nay là năm 2026.', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '年', reading: 'ねん', meaning: 'NIÊN' }] },
        { jp: '今年、成人します。', romaji: 'Kotoshi, seijin shimasu.', vn: 'Năm nay tôi sẽ thành niên (20 tuổi).', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '成人', reading: 'せいじん', meaning: 'THÀNH NHÂN' }] },
        { jp: '今年の目標', romaji: 'Kotoshi no mokuhyou', vn: 'Mục tiêu năm nay.', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '目標', reading: 'もくひょう', meaning: 'MỤC TIÊU' }] },
        { jp: '今年、家を建てます。', romaji: 'Kotoshi, ie wo tatemasu.', vn: 'Năm nay tôi xây nhà.', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '家', reading: 'いえ', meaning: 'GIA' }, { kanji: '建', reading: 'た', meaning: 'KIẾN' }] },
        { jp: '今年の冬は寒いです。', romaji: 'Kotoshi no fuyu wa samui desu.', vn: 'Mùa đông năm nay lạnh.', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '冬', reading: 'ふゆ', meaning: 'ĐÔNG' }, { kanji: '寒', reading: 'さむ', meaning: 'HÀN' }] },
        { jp: '今年初めて日本へ来ました。', romaji: 'Kotoshi hajimete nihon e kimashita.', vn: 'Năm nay tôi lần đầu đến Nhật.', furigana: [{ kanji: '今年', reading: 'ことし', meaning: 'KIM NIÊN' }, { kanji: '初', reading: 'はじ', meaning: 'SƠ' }, { kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] }
    ],
    'らいねん': [
        { jp: '来年、国へ帰ります。', romaji: 'Rainen, kuni e kaerimasu.', vn: 'Năm sau tôi về nước.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '来年、小学生になります。', romaji: 'Rainen, shougakusei ni narimasu.', vn: 'Năm sau tôi vào tiểu học.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '小学生', reading: 'しょうがくせい', meaning: 'TIỂU HỌC SINH' }] },
        { jp: '来年の春', romaji: 'Rainen no haru', vn: 'Mùa xuân năm sau.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '春', reading: 'はる', meaning: 'XUÂN' }] },
        { jp: '来年、仕事を辞めます。', romaji: 'Rainen, shigoto wo yamemasu.', vn: 'Năm sau tôi nghỉ việc.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '仕事', reading: 'しごと', meaning: 'SỸ SỰ' }, { kanji: '辞', reading: 'や', meaning: 'TỪ' }] },
        { jp: '来年また会いましょう。', romaji: 'Rainen mata aimashou.', vn: 'Năm sau lại gặp nhé.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '来年のオリンピック', romaji: 'Rainen no orinpikku', vn: 'Olympic năm sau.', furigana: [{ kanji: '来年', reading: 'らいねん', meaning: 'LAI NIÊN' }] }
    ],
    'なん': [
        { jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', vn: 'Đây là cái gì?', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: '何歳ですか。', romaji: 'Nansai desu ka.', vn: 'Mấy tuổi?', furigana: [{ kanji: '何歳', reading: 'なんさい', meaning: 'HÀ TUẾ' }] },
        { jp: '何時ですか。', romaji: 'Nanji desu ka.', vn: 'Mấy giờ?', furigana: [{ kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }] },
        { jp: '何曜日ですか。', romaji: 'Nanyoubi desu ka.', vn: 'Thứ mấy?', furigana: [{ kanji: '何曜日', reading: 'なんようび', meaning: 'HÀ DIỆU NHẬT' }] },
        { jp: '何人ですか。', romaji: 'Nannin desu ka.', vn: 'Mấy người?', furigana: [{ kanji: '何人', reading: 'なんにん', meaning: 'HÀ NHÂN' }] },
        { jp: '何階ですか。', romaji: 'Nankai desu ka.', vn: 'Tầng mấy?', furigana: [{ kanji: '何階', reading: 'なんかい', meaning: 'HÀ GIAI' }] }
    ],
    'どこ': [
        { jp: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', vn: 'Nhà vệ sinh ở đâu?', furigana: [] },
        { jp: 'どこへ行きますか。', romaji: 'Doko e ikimasu ka.', vn: 'Bạn đi đâu vậy?', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '学校はどこですか。', romaji: 'Gakkou wa doko desu ka.', vn: 'Trường học ở đâu?', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] },
        { jp: 'どこで買いましたか。', romaji: 'Doko de kaimashita ka.', vn: 'Bạn đã mua ở đâu?', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'どこに住んでいますか。', romaji: 'Doko ni sunde imasu ka.', vn: 'Bạn đang sống ở đâu?', furigana: [{ kanji: '住', reading: 'す', meaning: 'TRÚ' }] },
        { jp: 'ここはどこですか。', romaji: 'Koko wa doko desu ka.', vn: 'Đây là đâu?', furigana: [] }
    ],
    'いつ': [
        { jp: 'いつ日本へ来ましたか。', romaji: 'Itsu nihon e kimashita ka.', vn: 'Bạn đến Nhật khi nào?', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '誕生日はいつですか。', romaji: 'Tanjoubi wa itsu desu ka.', vn: 'Sinh nhật là khi nào?', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: 'いつ帰りますか。', romaji: 'Itsu kaerimasu ka.', vn: 'Khi nào bạn về?', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: 'いつ結婚しますか。', romaji: 'Itsu kekkon shimasu ka.', vn: 'Khi nào bạn kết hôn?', furigana: [{ kanji: '結婚', reading: 'けっこん', meaning: 'KẾT HÔN' }] },
        { jp: 'いつ暇ですか。', romaji: 'Itsu hima desu ka.', vn: 'Khi nào bạn rảnh?', furigana: [{ kanji: '暇', reading: 'ひま', meaning: 'HẠ' }] },
        { jp: 'いつ会いましょうか。', romaji: 'Itsu aimashou ka.', vn: 'Khi nào chúng ta gặp nhau nhỉ?', furigana: [{ kanji: '会', reading: 'あ', meaning: 'HỘI' }] }
    ],
    'たんじょうび': [
        { jp: '誕生日はいつですか。', romaji: 'Tanjoubi wa itsu desu ka.', vn: 'Sinh nhật là khi nào?', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: '誕生日は12月8日です。', romaji: 'Tanjoubi wa juunigatsu youka desu.', vn: 'Sinh nhật là ngày 8 tháng 12.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }, { kanji: '月', reading: 'がつ', meaning: 'NGUYỆT' }, { kanji: '日', reading: 'ようか', meaning: 'NHẬT' }] },
        { jp: 'お誕生日おめでとうございます。', romaji: 'Otanjoubi omedetou gozaimasu.', vn: 'Chúc mừng sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: '誕生日のプレゼント', romaji: 'Tanjoubi no purezento', vn: 'Quà sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: '誕生日パーティーをします。', romaji: 'Tanjoubi pa-ti- wo shimasu.', vn: 'Tổ chức tiệc sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }] },
        { jp: '誕生日にケーキを食べます。', romaji: 'Tanjoubi ni ke-ki wo tabemasu.', vn: 'Ăn bánh kem vào ngày sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび', meaning: 'ĐẢN SINH NHẬT' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');

    const lesson5StartRegex = /export const lesson5Data: LessonDetail = \{/;
    const match = content.match(lesson5StartRegex);

    if (!match) {
        console.error("Lesson 5 data not found");
        process.exit(1);
    }

    const startIndex = match.index;
    const lesson6StartRegex = /export const lesson6Data/;
    const match6 = content.match(lesson6StartRegex);
    const endIndex = match6 ? match6.index : content.length;

    let lesson5Block = content.slice(startIndex, endIndex);
    let updatedCount = 0;

    for (const [word, examples] of Object.entries(lesson5Examples)) {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const safeItemRegex = new RegExp(`(\\{ \\s*word: '${escapedWord}',[^}]*?)(\\})`, '');

        if (safeItemRegex.test(lesson5Block)) {
            const examplesString = JSON.stringify(examples, null, 2)
                .replace(/"jp":/g, 'jp:')
                .replace(/"romaji":/g, 'romaji:')
                .replace(/"vn":/g, 'vn:')
                .replace(/"furigana":/g, 'furigana:')
                .replace(/"kanji":/g, 'kanji:')
                .replace(/"reading":/g, 'reading:')
                .replace(/"meaning":/g, 'meaning:')
                // Indentation fix
                .replace(/\n/g, '\n      ');

            lesson5Block = lesson5Block.replace(safeItemRegex, (match, p1, p2) => {
                return `${p1},\n      examples: ${examplesString}\n    ${p2}`;
            });
            updatedCount++;
        } else {
            console.log(`Word ${word} not found/matched in Lesson 5 block.`);
        }
    }

    const finalContent = content.slice(0, startIndex) + lesson5Block + content.slice(endIndex);

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Updated ${updatedCount} words in Lesson 5 (Part 2).`);

} catch (err) {
    console.error(err);
}
