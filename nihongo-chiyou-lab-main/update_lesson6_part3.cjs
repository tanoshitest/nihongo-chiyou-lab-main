
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson6Examples = {
    'おはなみ': [
        { jp: 'お花見をします。', romaji: 'Ohanami wo shimasu.', vn: 'Tôi đi ngắm hoa anh đào.', furigana: [{ kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }] },
        { jp: 'お花見に行きませんか。', romaji: 'Ohanami ni ikimasen ka.', vn: 'Cùng đi ngắm hoa không?', furigana: [{ kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '公園でお花見をします。', romaji: 'Kouen de ohanami wo shimasu.', vn: 'Tổ chức ngắm hoa ở công viên.', furigana: [{ kanji: '公園', reading: 'こうえん', meaning: 'CÔNG VIÊN' }, { kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }] },
        { jp: 'お花見の弁当', romaji: 'Ohanami no bentou', vn: 'Cơm hộp ngắm hoa.', furigana: [{ kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }, { kanji: '弁当', reading: 'べんとう', meaning: 'BIỆN ĐƯƠNG' }] },
        { jp: 'お花見は楽しいです。', romaji: 'Ohanami wa tanoshii desu.', vn: 'Ngắm hoa rất vui.', furigana: [{ kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }, { kanji: '楽', reading: 'たの', meaning: 'LẠC' }] },
        { jp: '桜のお花見', romaji: 'Sakura no ohanami', vn: 'Ngắm hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら', meaning: 'ANH' }, { kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }] }
    ],
    'なに': [
        { jp: '何を食べますか。', romaji: 'Nani wo tabemasu ka.', vn: 'Bạn ăn gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '何を買いますか。', romaji: 'Nani wo kaimasu ka.', vn: 'Bạn mua gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '何をしますか。', romaji: 'Nani wo shimasu ka.', vn: 'Bạn làm gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }] },
        { jp: '何が好きですか。', romaji: 'Nani ga suki desu ka.', vn: 'Bạn thích cái gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '何を話しましたか。', romaji: 'Nani wo hanashimashita ka.', vn: 'Bạn đã nói chuyện gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }] },
        { jp: '何が欲しいですか。', romaji: 'Nani ga hoshii desu ka.', vn: 'Bạn muốn có cái gì?', furigana: [{ kanji: '何', reading: 'なに', meaning: 'HÀ' }, { kanji: '欲', reading: 'ほ', meaning: 'DỤC' }] }
    ],
    'いっしょに': [
        { jp: '一緒に帰りましょう。', romaji: 'Isshoni kaerimashou.', vn: 'Cùng về nhé.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '一緒にごはんを食べませんか。', romaji: 'Isshoni gohan wo tabemasen ka.', vn: 'Cùng ăn cơm không?', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: '一緒に勉強します。', romaji: 'Isshoni benkyou shimasu.', vn: 'Cùng học.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: '一緒に写真を撮ります。', romaji: 'Isshoni shashin wo torimasu.', vn: 'Cùng chụp ảnh.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '写真', reading: 'しゃしん', meaning: 'TẢ CHÂN' }, { kanji: '撮', reading: 'と', meaning: 'TOÁT' }] },
        { jp: '一緒に映画を見ました。', romaji: 'Isshoni eiga wo mimashita.', vn: 'Đã cùng xem phim.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '一緒に散歩します。', romaji: 'Isshoni sanpo shimasu.', vn: 'Cùng đi dạo.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '散歩', reading: 'さんぽ', meaning: 'TẢN BỘ' }] }
    ],
    'ちょっと': [
        { jp: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', vn: 'Xin chờ một chút.', furigana: [{ kanji: '待', reading: 'ま', meaning: 'ĐÃI' }] },
        { jp: 'ちょっと休みましょう。', romaji: 'Chotto yasumimashou.', vn: 'Nghỉ một chút nào.', furigana: [{ kanji: '休', reading: 'やす', meaning: 'HƯU' }] },
        { jp: 'ちょっと暑いです。', romaji: 'Chotto atsui desu.', vn: 'Hơi nóng một chút.', furigana: [{ kanji: '暑', reading: 'あつ', meaning: 'THỬ' }] },
        { jp: 'ちょっとわかりません。', romaji: 'Chotto wakarimasen.', vn: 'Tôi không hiểu lắm (lịch sự).', furigana: [] },
        { jp: 'ちょっと買い物に行きます。', romaji: 'Chotto kaimono ni ikimasu.', vn: 'Tôi đi mua đồ một chút.', furigana: [{ kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '物', reading: 'もの', meaning: 'VẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '今日はちょっと...', romaji: 'Kyou wa chotto...', vn: 'Hôm nay thì hơi... (từ chối khéo).', furigana: [{ kanji: '今日', reading: 'きょう', meaning: 'KIM NHẬT' }] }
    ],
    'いつも': [
        { jp: 'いつも元気です。', romaji: 'Itsumo genki desu.', vn: 'Lúc nào cũng khỏe mạnh.', furigana: [{ kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] },
        { jp: 'いつも朝ごはんを食べます。', romaji: 'Itsumo asagohan wo tabemasu.', vn: 'Tôi luôn ăn sáng.', furigana: [{ kanji: '朝', reading: 'あさ', meaning: 'TRIỀU' }, { kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }] },
        { jp: 'いつもこの店で買います。', romaji: 'Itsumo kono mise de kaimasu.', vn: 'Tôi luôn mua ở cửa hàng này.', furigana: [{ kanji: '店', reading: 'みせ', meaning: 'ĐIẾM' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '彼はいつも親切です。', romaji: 'Kare wa itsumo shinsetsu desu.', vn: 'Anh ấy lúc nào cũng tốt bụng.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }] },
        { jp: 'いつもありがとうございます。', romaji: 'Itsumo arigatou gozaimasu.', vn: 'Cám ơn bạn vì mọi khi.', furigana: [] },
        { jp: 'いつも忙しいです。', romaji: 'Itsumo isogashii desu.', vn: 'Lúc nào cũng bận rộn.', furigana: [{ kanji: '忙', reading: 'いそが', meaning: 'MANG' }] }
    ],
    'ときどき': [
        { jp: '時々映画を見ます。', romaji: 'Tokidoki eiga wo mimasu.', vn: 'Thỉnh thoảng tôi xem phim.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '時々大阪へ行きます。', romaji: 'Tokidoki oosaka e ikimasu.', vn: 'Thỉnh thoảng tôi đi Osaka.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }, { kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '時々日本語を話します。', romaji: 'Tokidoki nihongo wo hanashimasu.', vn: 'Thỉnh thoảng tôi nói tiếng Nhật.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }, { kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '話', reading: 'はな', meaning: 'THOẠI' }] },
        { jp: '時々テニスをします。', romaji: 'Tokidoki tenisu wo shimasu.', vn: 'Thỉnh thoảng tôi chơi tennis.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }] },
        { jp: '時々失敗します。', romaji: 'Tokidoki shippai shimasu.', vn: 'Thỉnh thoảng tôi thất bại.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }, { kanji: '失敗', reading: 'しっぱい', meaning: 'THẤT BẠI' }] },
        { jp: '時々料理を作ります。', romaji: 'Tokidoki ryouri wo tsukurimasu.', vn: 'Thỉnh thoảng tôi nấu ăn.', furigana: [{ kanji: '時々', reading: 'ときどき', meaning: 'THỜI' }, { kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }, { kanji: '作', reading: 'つく', meaning: 'TÁC' }] }
    ],
    'それから': [
        { jp: 'それから、映画を見ました。', romaji: 'Sorekara, eiga wo mimashita.', vn: 'Sau đó, tôi đã xem phim.', furigana: [{ kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: 'それからどうしましたか。', romaji: 'Sorekara dou shimashita ka.', vn: 'Sau đó thì sao?', furigana: [] },
        { jp: 'それから、家に帰りました。', romaji: 'Sorekara, uchi e kaerimashita.', vn: 'Sau đó ta về nhà.', furigana: [{ kanji: '家', reading: 'いえ', meaning: 'GIA' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '牛乳を買いました。それから卵も。', romaji: 'Gyuunyuu wo kaimashita. Sorekara tamago mo.', vn: 'Tôi đã mua sữa. Sau đó mua cả trứng nữa.', furigana: [{ kanji: '牛乳', reading: 'ぎゅうにゅう', meaning: 'NGƯU NHŨ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }, { kanji: '卵', reading: 'たまご', meaning: 'NOÃN' }] },
        { jp: '勉強しました。それから寝ました。', romaji: 'Benkyou shimashita. Sorekara nemashita.', vn: 'Tôi đã học bài. Sau đó thì đi ngủ.', furigana: [{ kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }, { kanji: '寝', reading: 'ね', meaning: 'TẨM' }] },
        { jp: 'ご飯を食べます。それから出かけます。', romaji: 'Gohan wo tabemasu. Sorekara dekakemasu.', vn: 'Tôi ăn cơm. Sau đó đi ra ngoài.', furigana: [{ kanji: '飯', reading: 'はん', meaning: 'PHẠN' }, { kanji: '食', reading: 'た', meaning: 'THỰC' }, { kanji: '出', reading: 'で', meaning: 'XUẤT' }] }
    ],
    'ええ': [
        { jp: 'ええ、いいですね。', romaji: 'Ee, ii desu ne.', vn: 'Vâng, hay quá nhỉ.', furigana: [] },
        { jp: 'ええ、そうです。', romaji: 'Ee, sou desu.', vn: 'Vâng, đúng vậy.', furigana: [] },
        { jp: 'ええ、わかりました。', romaji: 'Ee, wakarimashita.', vn: 'Vâng, tôi hiểu rồi.', furigana: [] },
        { jp: 'ええ、元気です。', romaji: 'Ee, genki desu.', vn: 'Vâng, tôi khỏe.', furigana: [{ kanji: '元気', reading: 'げんき', meaning: 'NGUYÊN KHÍ' }] },
        { jp: 'ええ、行きます。', romaji: 'Ee, ikimasu.', vn: 'Vâng, tôi sẽ đi.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'ええ、お願いします。', romaji: 'Ee, onegaishimasu.', vn: 'Vâng, làm ơn.', furigana: [{ kanji: '願', reading: 'ねが', meaning: 'NGUYỆN' }] }
    ],
    'いいですね': [
        { jp: 'いいですね。行きましょう。', romaji: 'Ii desu ne. Ikimashou.', vn: 'Hay quá nhỉ. Đi thôi.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'それはいいですね。', romaji: 'Sore wa ii desu ne.', vn: 'Cái đó hay đấy.', furigana: [] },
        { jp: '明日ですか。いいですね。', romaji: 'Ashita desu ka. Ii desu ne.', vn: 'Ngày mai hả. Được đấy.', furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }] },
        { jp: 'サッカーですか。いいですね。', romaji: 'Sakkaa desu ka. Ii desu ne.', vn: 'Bóng đá hả. Được đấy.', furigana: [] },
        { jp: 'いいですね。私も買いたいです。', romaji: 'Ii desu ne. Watashi mo kaitai desu.', vn: 'Hay nhỉ. Tôi cũng muốn mua.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'いいですね。作りましょう。', romaji: 'Ii desu ne. Tsukurimashou.', vn: 'Hay đấy. Cùng làm nào.', furigana: [{ kanji: '作', reading: 'つく', meaning: 'TÁC' }] }
    ],
    'わかりました': [
        { jp: 'はい、わかりました。', romaji: 'Hai, wakarimashita.', vn: 'Vâng, tôi hiểu rồi.', furigana: [] },
        { jp: '意味がわかりました。', romaji: 'Imi ga wakarimashita.', vn: 'Tôi đã hiểu ý nghĩa.', furigana: [{ kanji: '意味', reading: 'いみ', meaning: 'Ý VỊ' }] },
        { jp: '場所がわかりましたか。', romaji: 'Basho ga wakarimashita ka.', vn: 'Bạn đã biết địa điểm chưa?', furigana: [{ kanji: '場所', reading: 'ばしょ', meaning: 'TRƯỜNG SỞ' }] },
        { jp: 'よくわかりました。', romaji: 'Yoku wakarimashita.', vn: 'Tôi đã hiểu rất rõ.', furigana: [] },
        { jp: 'わかりました。明日行きます。', romaji: 'Wakarimashita. Ashita ikimasu.', vn: 'Tôi hiểu rồi. Mai tôi sẽ đi.', furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '使い方がわかりました。', romaji: 'Tsukaikata ga wakarimashita.', vn: 'Tôi đã hiểu cách dùng.', furigana: [{ kanji: '使', reading: 'つか', meaning: 'SỬ' }, { kanji: '方', reading: 'かた', meaning: 'PHƯƠNG' }] }
    ],
    'なんですか': [
        { jp: '何ですか。', romaji: 'Nan desu ka.', vn: 'Cái gì vậy?', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', vn: 'Cái này là cái gì?', furigana: [{ kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: 'あの建物は何ですか。', romaji: 'Ano tatemono wa nan desu ka.', vn: 'Tòa nhà kia là gì?', furigana: [{ kanji: '建物', reading: 'たてもの', meaning: 'KIẾN VẬT' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: '仕事は何ですか。', romaji: 'Shigoto wa nan desu ka.', vn: 'Công việc của bạn là gì?', furigana: [{ kanji: '仕事', reading: 'しごと', meaning: 'SỸ SỰ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: '趣味は何ですか。', romaji: 'Shumi wa nan desu ka.', vn: 'Sở thích của bạn là gì?', furigana: [{ kanji: '趣味', reading: 'しゅみ', meaning: 'THÚ VỊ' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] },
        { jp: 'ご用は何ですか。', romaji: 'Goyou wa nan desu ka.', vn: 'Có việc gì vậy ạ?', furigana: [{ kanji: '用', reading: 'よう', meaning: 'DỤNG' }, { kanji: '何', reading: 'なん', meaning: 'HÀ' }] }
    ],
    'じゃ、また': [
        { jp: 'じゃ、また明日。', romaji: 'Ja, mata ashita.', vn: 'Vậy, hẹn ngày mai nhé.', furigana: [{ kanji: '明日', reading: 'あした', meaning: 'MINH NHẬT' }] },
        { jp: 'じゃ、また来週。', romaji: 'Ja, mata raishuu.', vn: 'Vậy, hẹn tuần sau.', furigana: [{ kanji: '来週', reading: 'らいしゅう', meaning: 'LAI CHU' }] },
        { jp: 'じゃ、また後で。', romaji: 'Ja, mata atode.', vn: 'Vậy, hẹn gặp sau.', furigana: [{ kanji: '後', reading: 'あと', meaning: 'HẬU' }] },
        { jp: 'じゃ、また会いましょう。', romaji: 'Ja, mata aimashou.', vn: 'Vậy, hẹn gặp lại.', furigana: [{ kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: 'じゃ、また。', romaji: 'Ja, mata.', vn: 'Vậy, hẹn gặp lại.', furigana: [] },
        { jp: 'じゃ、また電話します。', romaji: 'Ja, mata denwa shimasu.', vn: 'Vậy, tôi sẽ gọi lại sau.', furigana: [{ kanji: '電話', reading: 'でんわ', meaning: 'ĐIỆN THOẠI' }] }
    ],
    'メキシコ': [
        { jp: 'メキシコへ行きます。', romaji: 'Mekishiko e ikimasu.', vn: 'Tôi đi Mexico.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'メキシコから来ました。', romaji: 'Mekishiko kara kimashita.', vn: 'Tôi đến từ Mexico.', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'メキシコ人', romaji: 'Mekishikojin', vn: 'Người Mexico.', furigana: [{ kanji: '人', reading: 'じん', meaning: 'NHÂN' }] },
        { jp: 'メキシコ料理', romaji: 'Mekishiko ryouri', vn: 'Món Mexico.', furigana: [{ kanji: '料理', reading: 'りょうり', meaning: 'LIỆU LÝ' }] },
        { jp: 'メキシコの友達', romaji: 'Mekishiko no tomodachi', vn: 'Bạn người Mexico.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }] },
        { jp: 'メキシコで働きます。', romaji: 'Mekishiko de hatarakimasu.', vn: 'Tôi làm việc ở Mexico.', furigana: [{ kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] }
    ],
    'おおさかじょうこうえん': [
        { jp: '大阪城公園で花見をします。', romaji: 'Oosakajoukouen de hanami wo shimasu.', vn: 'Tôi ngắm hoa ở công viên lâu đài Osaka.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '花見', reading: 'はなみ', meaning: 'HOA KIẾN' }] },
        { jp: '大阪城公園へ行きました。', romaji: 'Oosakajoukouen e ikimashita.', vn: 'Tôi đã đi đến công viên lâu đài Osaka.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '大阪城公園は広いです。', romaji: 'Oosakajoukouen wa hiroi desu.', vn: 'Công viên lâu đài Osaka rộng.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '広', reading: 'ひろ', meaning: 'QUẢNG' }] },
        { jp: '大阪城公園で散歩します。', romaji: 'Oosakajoukouen de sanpo shimasu.', vn: 'Tôi đi dạo ở công viên lâu đài Osaka.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '散歩', reading: 'さんぽ', meaning: 'TẢN BỘ' }] },
        { jp: '大阪城公園の近く', romaji: 'Oosakajoukouen no chikaku', vn: 'Gần công viên lâu đài Osaka.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '近', reading: 'ちか', meaning: 'CẬN' }] },
        { jp: '大阪城公園に行きたいです。', romaji: 'Oosakajoukouen ni ikitai desu.', vn: 'Tôi muốn đi công viên lâu đài Osaka.', furigana: [{ kanji: '大阪城公園', reading: 'おおさかじょうこうえん', meaning: 'ĐẠI PHẢN THÀNH CÔNG VIÊN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
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
    console.log(`Updated ${updatedCount} words in Lesson 6 (Part 3).`);

} catch (err) {
    console.error(err);
}
