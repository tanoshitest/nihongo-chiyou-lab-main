
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson6Examples = {
    'たべます': [
        { jp: 'ご飯を食べます。', romaji: 'Gohan wo tabemasu.', vn: 'Tôi ăn cơm.', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'パンを食べました。', romaji: 'Pan wo tabemashita.', vn: 'Tôi đã ăn bánh mì.', furigana: [{ kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '何を食べますか。', romaji: 'Nani wo tabemasu ka.', vn: 'Bạn ăn gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '何も食べません。', romaji: 'Nanimo tabemasen.', vn: 'Tôi không ăn gì cả.', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'レストランで食べます。', romaji: 'Resutoran de tabemasu.', vn: 'Tôi ăn ở nhà hàng.', furigana: [{ kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '野菜を食べましょう。', romaji: 'Yasai wo tabemashou.', vn: 'Hãy cùng ăn rau nào.', furigana: [{ kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }
    ],
    'のみます': [
        { jp: '水を飲みます。', romaji: 'Mizu wo nomimasu.', vn: 'Tôi uống nước.', furigana: [{ kanji: '水', reading: 'みず', meaning: 'THỦY' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'コーヒーを飲みませんか。', romaji: 'Ko-hi- wo nomimasen ka.', vn: 'Bạn có uống cà phê không?', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'ジュースを飲みました。', romaji: 'Juusu wo nomimashita.', vn: 'Tôi đã uống nước hoa quả.', furigana: [{ kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: 'お酒を飲みますか。', romaji: 'Osake wo nomimasu ka.', vn: 'Bạn có uống rượu không?', furigana: [{ kanji: '酒', reading: 'さけ', meaning: 'TỬU' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '薬を飲みます。', romaji: 'Kusuri wo nomimasu.', vn: 'Tôi uống thuốc.', furigana: [{ kanji: '薬', reading: 'くすり', meaning: 'DƯỢC' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] },
        { jp: '牛乳を毎日飲みます。', romaji: 'Gyuunyuu wo mainichi nomimasu.', vn: 'Tôi uống sữa mỗi ngày.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '飲', reading: 'の', meaning: 'ẨM' }] }
    ],
    'すいます': [
        { jp: 'タバコを吸います。', romaji: 'Tabako wo suimasu.', vn: 'Tôi hút thuốc lá.', furigana: [{ kanji: '吸', reading: 'す', meaning: 'HẤP' }] },
        { jp: '空気を吸います。', romaji: 'Kuuki wo suimasu.', vn: 'Hít không khí.', furigana: [{ kanji: '空気', reading: 'くうき', meaning: 'KHÔNG KHÍ' }, { kanji: '吸', reading: 'す', meaning: 'HẤP' }] },
        { jp: 'ここでタバコを吸わないでください。', romaji: 'Koko de tabako wo suwanai de kudasai.', vn: 'Xin đừng hút thuốc ở đây.', furigana: [{ kanji: '吸', reading: 'す', meaning: 'HẤP' }] },
        { jp: '父はタバコを吸います。', romaji: 'Chichi wa tabako wo suimasu.', vn: 'Bố tôi hút thuốc.', furigana: [{ kanji: '父', reading: 'ちち', meaning: 'PHỤ' }, { kanji: '吸', reading: 'す', meaning: 'HẤP' }] },
        { jp: 'タバコを吸いますか。', romaji: 'Tabako wo suimasu ka.', vn: 'Bạn có hút thuốc không?', furigana: [{ kanji: '吸', reading: 'す', meaning: 'HẤP' }] },
        { jp: '深呼吸', romaji: 'Shinkokyuu', vn: 'Hít thở sâu.', furigana: [{ kanji: '深呼吸', reading: 'しんこきゅう', meaning: 'THÂM HÔ HẤP' }] }
    ],
    'みます': [
        { jp: 'テレビを見ます。', romaji: 'Terebi wo mimasu.', vn: 'Tôi xem tivi.', furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '映画を見ました。', romaji: 'Eiga wo mimashita.', vn: 'Tôi đã xem phim.', furigana: [{ kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '写真を見ます。', romaji: 'Shashin wo mimasu.', vn: 'Tôi xem ảnh.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '花を見に行きます。', romaji: 'Hana wo mini ikimasu.', vn: 'Tôi đi ngắm hoa.', furigana: [{ kanji: '花', reading: 'はな', meaning: 'HOA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'ニュースを見ます。', romaji: 'Nyuusu wo mimasu.', vn: 'Tôi xem tin tức.', furigana: [{ kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '見学します。', romaji: 'Kengaku shimasu.', vn: 'Tôi đi tham quan kiến tập.', furigana: [{ kanji: '見学', reading: 'けんがく', meaning: 'KIẾN HỌC' }] }
    ],
    'ききます': [
        { jp: '音楽を聞きます。', romaji: 'Ongaku wo kikimasu.', vn: 'Tôi nghe nhạc.', furigana: [{ kanji: '音楽', reading: 'おんがく', meaning: 'ÂM LẠC' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: 'ラジオを聞きます。', romaji: 'Rajio wo kikimasu.', vn: 'Tôi nghe đài.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: '先生の話を聞きます。', romaji: 'Sensei no hanashi wo kikimasu.', vn: 'Tôi nghe chuyện của thầy.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '話', reading: 'はなし', meaning: 'THOẠI' }, { kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: 'CDを聞きました。', romaji: 'CD wo kikimashita.', vn: 'Tôi đã nghe đĩa CD.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: 'ニュースを聞きます。', romaji: 'Nyuusu wo kikimasu.', vn: 'Tôi nghe tin tức.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }] },
        { jp: '聞く練習', romaji: 'Kiku renshuu', vn: 'Luyện nghe.', furigana: [{ kanji: '聞', reading: 'き', meaning: 'VĂN' }, { kanji: '練習', reading: 'れんしゅう', meaning: 'LUYỆN TẬP' }] }
    ],
    'よみます': [
        { jp: '本を読みます。', romaji: 'Hon wo yomimasu.', vn: 'Tôi đọc sách.', furigana: [{ kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '新聞を読みましたか。', romaji: 'Shinbun wo yomimashita ka.', vn: 'Bạn đã đọc báo chưa?', furigana: [{ kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '雑誌を読みます。', romaji: 'Zasshi wo yomimasu.', vn: 'Tôi đọc tạp chí.', furigana: [{ kanji: '雑誌', reading: 'ざっし', meaning: 'TẠP CHÍ' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '日本語の新聞を読みます。', romaji: 'Nihongo no shinbun wo yomimasu.', vn: 'Tôi đọc báo tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: 'レポートを読んでください。', romaji: 'Repooto wo yonde kudasai.', vn: 'Hãy đọc báo cáo đi.', furigana: [{ kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] },
        { jp: '図書館で本を読みます。', romaji: 'Toshokan de hon wo yomimasu.', vn: 'Tôi đọc sách ở thư viện.', furigana: [{ kanji: '図書館', reading: 'としょかん', meaning: 'ĐỒ THƯ QUÁN' }, { kanji: '本', reading: 'ほん', meaning: 'BẢN' }, { kanji: '読', reading: 'よ', meaning: 'ĐỘC' }] }
    ],
    'かきます': [
        { jp: '手紙を書きます。', romaji: 'Tegami wo kakimasu.', vn: 'Tôi viết thư.', furigana: [{ kanji: '手紙', reading: 'てがみ', meaning: 'THỦ CHỈ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: '絵を描きます。', romaji: 'E wo kakimasu.', vn: 'Tôi vẽ tranh.', furigana: [{ kanji: '絵', reading: 'え', meaning: 'HỘI' }, { kanji: '描', reading: 'か', meaning: 'MIÊU' }] },
        { jp: '日記を書きます。', romaji: 'Nikki wo kakimasu.', vn: 'Tôi viết nhật ký.', furigana: [{ kanji: '日記', reading: 'にっき', meaning: 'NHẬT KÝ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: '漢字を書きます。', romaji: 'Kanji wo kakimasu.', vn: 'Tôi viết chữ Hán.', furigana: [{ kanji: '漢字', reading: 'かんじ', meaning: 'HÁN TỰ' }, { kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: 'レポートを書きました。', romaji: 'Repooto wo kakimashita.', vn: 'Tôi đã viết báo cáo.', furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }] },
        { jp: 'ボールペンで書きます。', romaji: 'Boorupen de kakimasu.', vn: 'Tôi viết bằng bút bi.', furigana: [{ kanji: '書', reading: 'か', meaning: 'THƯ' }] }
    ],
    'かいます': [
        { jp: 'パンを買います。', romaji: 'Pan wo kaimasu.', vn: 'Tôi mua bánh mì.', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '何を買いますか。', romaji: 'Nani wo kaimasu ka.', vn: 'Bạn mua gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'スーパーで肉を買います。', romaji: 'Suupaa de niku wo kaimasu.', vn: 'Tôi mua thịt ở siêu thị.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '新しい靴を買いました。', romaji: 'Atarashii kutsu wo kaimashita.', vn: 'Tôi đã mua giày mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '靴', reading: 'くつ', meaning: 'NGOA' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '買い物します。', romaji: 'Kaimono shimasu.', vn: 'Tôi đi mua sắm.', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '物', reading: 'もの', meaning: 'VẬT' }] },
        { jp: 'お土産を買います。', romaji: 'Omiyage wo kaimasu.', vn: 'Tôi mua quà lưu niệm.', furigana: [{ kanji: '土産', reading: 'みやげ', meaning: 'THỔ SẢN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] }
    ],
    'とります': [
        { jp: '写真を撮ります。', romaji: 'Shashin wo torimasu.', vn: 'Tôi chụp ảnh.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: 'ビデオを撮ります。', romaji: 'Bideo wo torimasu.', vn: 'Tôi quay video.', furigana: [{ kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: 'スマホで撮りました。', romaji: 'Sumaho de torimashita.', vn: 'Tôi đã chụp bằng điện thoại.', furigana: [{ kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: '一緒に写真を撮りましょう。', romaji: 'Isshoni shashin wo torimashou.', vn: 'Cùng chụp ảnh nhé.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: 'ここで写真を撮らないでください。', romaji: 'Koko de shashin wo toranai de kudasai.', vn: 'Xin đừng chụp ảnh ở đây.', furigana: [{ kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: '塩を取ってください。', romaji: 'Shio wo totte kudasai.', vn: 'Lấy giúp tôi lọ muối.', furigana: [{ kanji: '塩', reading: 'しお', meaning: 'DIÊM' }, { kanji: '取', reading: 'と', meaning: 'THỦ' }] }
    ],
    'します': [
        { jp: '宿題をします。', romaji: 'Shukudai wo shimasu.', vn: 'Tôi làm bài tập về nhà.', furigana: [{ kanji: '宿題', reading: 'しゅくだい', meaning: 'TÚC ĐỀ' }] },
        { jp: 'テニスをします。', romaji: 'Tenisu wo shimasu.', vn: 'Tôi chơi quần vợt.', furigana: [] },
        { jp: '仕事をします。', romaji: 'Shigoto wo shimasu.', vn: 'Tôi làm việc.', furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SỸ SỰ' }] },
        { jp: 'サッカーをしました。', romaji: 'Sakkaa wo shimashita.', vn: 'Tôi đã đá bóng.', furigana: [] },
        { jp: 'パーティーをします。', romaji: 'Pa-ti- wo shimasu.', vn: 'Tôi tổ chức tiệc.', furigana: [] },
        { jp: '何をしますか。', romaji: 'Nani wo shimasu ka.', vn: 'Bạn làm gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }] }
    ],
    'あいます': [
        { jp: '友達に会います。', romaji: 'Tomodachi ni aimasu.', vn: 'Tôi gặp bạn bè.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '彼に会いました。', romaji: 'Kare ni aimashita.', vn: 'Tôi đã gặp anh ấy.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '先生に会いたいです。', romaji: 'Sensei ni aitai desu.', vn: 'Tôi muốn gặp thầy giáo.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '駅で会いました。', romaji: 'Eki de aimashita.', vn: 'Tôi đã gặp ở nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: 'また会いましょう。', romaji: 'Mata aimashou.', vn: 'Hẹn gặp lại nhé.', furigana: [{ kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '社長に会います。', romaji: 'Shachou ni aimasu.', vn: 'Tôi gặp giám đốc.', furigana: [{ kanji: '社長', reading: 'しゃちょう', meaning: 'XÃ TRƯỞNG' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] }
    ],
    'ごはん': [
        { jp: 'ごはんを食べます。', romaji: 'Gohan wo tabemasu.', vn: 'Tôi ăn cơm.', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'ごはんですよ。', romaji: 'Gohan desu yo.', vn: 'Cơm chín rồi đó / Đến giờ cơm rồi.', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] },
        { jp: 'おいしいごはんです。', romaji: 'Oishii gohan desu.', vn: 'Cơm ngon.', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] },
        { jp: '一緒にごはんを食べませんか。', romaji: 'Isshoni gohan wo tabemasen ka.', vn: 'Cùng ăn cơm không?', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'ごはんのおかわり', romaji: 'Gohan no okawari', vn: 'Bát cơm nữa (ăn thêm).', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] },
        { jp: '白いごはん', romaji: 'Shiroi gohan', vn: 'Cơm trắng.', furigana: [{ kanji: '白', reading: 'しろ', meaning: 'BẠCH' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] }
    ],
    'あさごはん': [
        { jp: '朝ごはんを食べます。', romaji: 'Asagohan wo tabemasu.', vn: 'Tôi ăn cơm sáng.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '朝ごはんはパンです。', romaji: 'Asagohan wa pan desu.', vn: 'Bữa sáng là bánh mì.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] },
        { jp: '朝ごはんを食べませんでした。', romaji: 'Asagohan wo tabemasen deshita.', vn: 'Tôi đã không ăn sáng.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '朝ごはんは何ですか。', romaji: 'Asagohan wa nan desu ka.', vn: 'Bữa sáng có gì?', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: '7時に朝ごはんを食べます。', romaji: 'Shichiji ni asagohan wo tabemasu.', vn: 'Tôi ăn sáng lúc 7 giờ.', furigana: [{ kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'おいしい朝ごはん', romaji: 'Oishii asagohan', vn: 'Bữa sáng ngon miệng.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] }
    ],
    'ひるごはん': [
        { jp: '昼ごはんを食べます。', romaji: 'Hirugohan wo tabemasu.', vn: 'Tôi ăn cơm trưa.', furigana: [{ kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '昼ごはんは12時です。', romaji: 'Hirugohan wa juuniji desu.', vn: 'Bữa trưa là 12 giờ.', furigana: [{ kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }] },
        { jp: '食堂で昼ごはんを食べます。', romaji: 'Shokudou de hirugohan wo tabemasu.', vn: 'Tôi ăn trưa ở nhà ăn.', furigana: [{ kanji: '食堂', reading: 'しょくどう', meaning: 'THỰC ĐƯỜNG' }, { kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '昼ごはんを作りましょう。', romaji: 'Hirugohan wo tsukurimashou.', vn: 'Cùng làm bữa trưa nào.', furigana: [{ kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] },
        { jp: 'もう昼ごはんを食べましたか。', romaji: 'Mou hirugohan wo tabemashita ka.', vn: 'Bạn đã ăn trưa chưa?', furigana: [{ kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '会社で昼ごはんを食べます。', romaji: 'Kaisha de hirugohan wo tabemasu.', vn: 'Tôi ăn trưa ở công ty.', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '昼', reading: 'ひる', meaning: 'TRÚ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }
    ],
    'ばんごはん': [
        { jp: '晩ごはんを食べます。', romaji: 'Bangohan wo tabemasu.', vn: 'Tôi ăn cơm tối.', furigana: [{ kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '晩ごはんは肉と野菜です。', romaji: 'Bangohan wa niku to yasai desu.', vn: 'Bữa tối là thịt và rau.', furigana: [{ kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '野菜', reading: 'やさい', meaning: 'DÃ THÁI' }] },
        { jp: '家族と晩ごはんを食べます。', romaji: 'Kazoku to bangohan wo tabemasu.', vn: 'Tôi ăn tối cùng gia đình.', furigana: [{ kanji: '家族', reading: 'かぞく', meaning: 'GIA TỘC' }, { kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '晩ごはんを作ります。', romaji: 'Bangohan wo tsukurimasu.', vn: 'Tôi nấu bữa tối.', furigana: [{ kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] },
        { jp: '晩ごはんを食べに行きましょう。', romaji: 'Bangohan wo tabe ni ikimashou.', vn: 'Đi ăn tối đi.', furigana: [{ kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '昨日晩ごはんを食べませんでした。', romaji: 'Kinou bangohan wo tabemasen deshita.', vn: 'Hôm qua tôi đã không ăn tối.', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '晩', reading: 'ばん', meaning: 'VÃN' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] }
    ],
    'パン': [
        { jp: 'パンを食べます。', romaji: 'Pan wo tabemasu.', vn: 'Tôi ăn bánh mì.', furigana: [{ kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'パンと卵', romaji: 'Pan to tamago', vn: 'Bánh mì và trứng.', furigana: [{ kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }] },
        { jp: 'パン屋', romaji: 'Panya', vn: 'Tiệm bánh mì.', furigana: [{ kanji: '屋', reading: 'や', meaning: 'ỐC' }] },
        { jp: 'パンを買いました。', romaji: 'Pan wo kaimashita.', vn: 'Tôi đã mua bánh mì.', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'おいしいパン', romaji: 'Oishii pan', vn: 'Bánh mì ngon.', furigana: [] },
        { jp: '朝ごはんはパンとコーヒーです。', romaji: 'Asagohan wa pan to ko-hi- desu.', vn: 'Bữa sáng là bánh mì và cà phê.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }] }
    ],
    'たまご': [
        { jp: '卵を食べます。', romaji: 'Tamago wo tabemasu.', vn: 'Tôi ăn trứng.', furigana: [{ kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '卵を買いました。', romaji: 'Tamago wo kaimashita.', vn: 'Tôi đã mua trứng.', furigana: [{ kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '卵料理', romaji: 'Tamago ryouri', vn: 'Món trứng.', furigana: [{ kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }] },
        { jp: 'ゆで卵', romaji: 'Yudetamago', vn: 'Trứng luộc.', furigana: [{ kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }] },
        { jp: '卵焼き', romaji: 'Tamagoyaki', vn: 'Trứng cuộn/Trứng rán.', furigana: [{ kanji: '卵焼', reading: 'たまごや', meaning: 'NOÃN THIÊU' }] },
        { jp: '冷蔵庫に卵があります。', romaji: 'Reizouko ni tamago ga arimasu.', vn: 'Trong tủ lạnh có trứng.', furigana: [{ kanji: '冷蔵庫', reading: 'れいぞうこ', meaning: 'LÃNH TÀNG KHỐ' }, { kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }] }
    ],
    'にく': [
        { jp: '肉を食べます。', romaji: 'Niku wo tabemasu.', vn: 'Tôi ăn thịt.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '牛肉', romaji: 'Gyuuniku', vn: 'Thịt bò.', furigana: [{ kanji: '牛', reading: 'ぎゅう', meaning: 'NGƯU' }, { kanji: '肉', reading: 'にく', meaning: 'NHỤC' }] },
        { jp: '豚肉', romaji: 'Butaniku', vn: 'Thịt lợn.', furigana: [{ kanji: '豚', reading: 'ぶた', meaning: 'ĐỒN' }, { kanji: '肉', reading: 'にく', meaning: 'NHỤC' }] },
        { jp: '鶏肉', romaji: 'Toriniku', vn: 'Thịt gà.', furigana: [{ kanji: '鶏', reading: 'とり', meaning: 'KÊ' }, { kanji: '肉', reading: 'にく', meaning: 'NHỤC' }] },
        { jp: '肉料理', romaji: 'Niku ryouri', vn: 'Món thịt.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }] },
        { jp: '肉を焼きます。', romaji: 'Niku wo yakimasu.', vn: 'Nướng thịt.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '焼', reading: 'や', meaning: 'THIÊU' }] }
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
    // Use lesson7Data as end or file end
    const lesson7StartRegex = /export const lesson7Data/;
    const match7 = content.match(lesson7StartRegex);
    const endIndex = match7 ? match7.index : content.length;

    let lesson6Block = content.slice(startIndex, endIndex);
    let updatedCount = 0;

    for (const [word, examples] of Object.entries(lesson6Examples)) {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Regex to match item 
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
    console.log(`Updated ${updatedCount} words in Lesson 6 (Part 1).`);

} catch (err) {
    console.error(err);
}
