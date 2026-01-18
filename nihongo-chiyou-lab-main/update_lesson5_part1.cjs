
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/minnaData.ts');

const lesson5Examples = {
    'いきます': [
        { jp: '学校へ行きます。', romaji: 'Gakkou e ikimasu.', vn: 'Tôi đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'スーパーへ行きます。', romaji: 'Suupaa e ikimasu.', vn: 'Tôi đi siêu thị.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '京都へ行きます。', romaji: 'Kyouto e ikimasu.', vn: 'Tôi đi Kyoto.', furigana: [{ kanji: '京都', reading: 'きょうと', meaning: 'KINH ĐÔ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'どこへ行きますか。', romaji: 'Doko e ikimasu ka.', vn: 'Bạn đi đâu vậy?', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '会社へ行きます。', romaji: 'Kaisha e ikimasu.', vn: 'Tôi đi làm (đến công ty).', furigana: [{ kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '病院へ行きます。', romaji: 'Byouin e ikimasu.', vn: 'Tôi đi bệnh viện.', furigana: [{ kanji: '病院', reading: 'びょういん', meaning: 'BỆNH VIỆN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'きます': [
        { jp: '日本へ来ました。', romaji: 'Nihon e kimashita.', vn: 'Tôi đã đến Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん', meaning: 'NHẬT BẢN' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '友達が来ます。', romaji: 'Tomodachi ga kimasu.', vn: 'Bạn tôi sẽ đến.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'いつ来ますか。', romaji: 'Itsu kimasu ka.', vn: 'Khi nào bạn đến?', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'バスが来ました。', romaji: 'Basu ga kimashita.', vn: 'Xe buýt đã đến rồi.', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '国から母が来ました。', romaji: 'Kuni kara haha ga kimashita.', vn: 'Mẹ tôi từ quê đã đến.', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '母', reading: 'はは', meaning: 'MẪU' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '先生はまだ来ません。', romaji: 'Sensei wa mada kimasen.', vn: 'Thầy giáo vẫn chưa đến.', furigana: [{ kanji: '先生', reading: 'せんせい', meaning: 'TIÊN SINH' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] }
    ],
    'かえります': [
        { jp: 'うちへ帰ります。', romaji: 'Uchi e kaerimasu.', vn: 'Tôi về nhà.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '国へ帰ります。', romaji: 'Kuni e kaerimasu.', vn: 'Tôi về nước.', furigana: [{ kanji: '国', reading: 'くに', meaning: 'QUỐC' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '何時に帰りますか。', romaji: 'Nanji ni kaerimasu ka.', vn: 'Mấy giờ bạn về?', furigana: [{ kanji: '何時', reading: 'なんじ', meaning: 'HÀ THỜI' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: 'タクシーで帰ります。', romaji: 'Takushii de kaerimasu.', vn: 'Tôi về bằng taxi.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '歩いて帰りました。', romaji: 'Aruite kaerimashita.', vn: 'Tôi đã đi bộ về.', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '一緒に帰りましょう。', romaji: 'Isshoni kaerimashou.', vn: 'Cùng về nhé.', furigana: [{ kanji: '一緒', reading: 'いっしょ', meaning: 'NHẤT TỰ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] }
    ],
    'がっこう': [
        { jp: '学校へ行きます。', romaji: 'Gakkou e ikimasu.', vn: 'Tôi đi đến trường.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '学校はどこですか。', romaji: 'Gakkou wa doko desu ka.', vn: 'Trường học ở đâu?', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] },
        { jp: '日本語学校で勉強します。', romaji: 'Nihongo gakkou de benkyou shimasu.', vn: 'Tôi học ở trường tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご', meaning: 'NHẬT BẢN NGỮ' }, { kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '勉強', reading: 'べんきょう', meaning: 'MIỄN CƯỜNG' }] },
        { jp: '学校は8時に始まります。', romaji: 'Gakkou wa hachiji ni hajimarimasu.', vn: 'Trường học bắt đầu lúc 8 giờ.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '時', reading: 'じ', meaning: 'THỜI' }, { kanji: '始', reading: 'はじ', meaning: 'THỦY' }] },
        { jp: '学校を休みます。', romaji: 'Gakkou wo yasumimasu.', vn: 'Tôi nghỉ học.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }, { kanji: '休', reading: 'やす', meaning: 'HƯU' }] },
        { jp: 'きれいな学校ですね。', romaji: 'Kireina gakkou desu ne.', vn: 'Trường đẹp nhỉ.', furigana: [{ kanji: '学校', reading: 'がっこう', meaning: 'HỌC HIỆU' }] }
    ],
    'スーパー': [
        { jp: 'スーパーで肉を買います。', romaji: 'Suupaa de niku wo kaimasu.', vn: 'Tôi mua thịt ở siêu thị.', furigana: [{ kanji: '肉', reading: 'にく', meaning: 'NHỤC' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: 'スーパーへ行きます。', romaji: 'Suupaa e ikimasu.', vn: 'Tôi đi siêu thị.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'あのスーパーは安いです。', romaji: 'Ano suupaa wa yasui desu.', vn: 'Siêu thị kia rẻ.', furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }] },
        { jp: 'スーパーは駅の近くです。', romaji: 'Suupaa wa eki no chikaku desu.', vn: 'Siêu thị ở gần ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '近', reading: 'ちか', meaning: 'CẬN' }] },
        { jp: 'スーパーで働いています。', romaji: 'Suupaa de hataraite imasu.', vn: 'Tôi đang làm việc tại siêu thị.', furigana: [{ kanji: '働', reading: 'はたら', meaning: 'ĐỘNG' }] },
        { jp: '昨日スーパーへ行きました。', romaji: 'Kinou suupaa e ikimashita.', vn: 'Hôm qua tôi đã đi siêu thị.', furigana: [{ kanji: '昨日', reading: 'きのう', meaning: 'TẠC NHẬT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'えき': [
        { jp: '駅へ行きます。', romaji: 'Eki e ikimasu.', vn: 'Tôi đi đến nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '駅で新聞を買いました。', romaji: 'Eki de shinbun wo kaimashita.', vn: 'Tôi đã mua báo ở nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '新聞', reading: 'しんぶん', meaning: 'TÂN VĂN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '駅はここです。', romaji: 'Eki wa koko desu.', vn: 'Nhà ga ở đây.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '駅から遠いです。', romaji: 'Eki kara tooi desu.', vn: 'Xa nhà ga.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '遠', reading: 'とお', meaning: 'VIỄN' }] },
        { jp: '駅前で会いましょう。', romaji: 'Ekimae de aimashou.', vn: 'Gặp nhau trước nhà ga nhé.', furigana: [{ kanji: '駅前', reading: 'えきまえ', meaning: 'DỊCH TIỀN' }, { kanji: '会', reading: 'あ', meaning: 'HỘI' }] },
        { jp: '東京駅は大きいです。', romaji: 'Toukyou eki wa ookii desu.', vn: 'Ga Tokyo rất lớn.', furigana: [{ kanji: '東京駅', reading: 'とうきょうえき', meaning: 'ĐÔNG KINH DỊCH' }, { kanji: '大', reading: 'おお', meaning: 'ĐẠI' }] }
    ],
    'ひこうき': [
        { jp: '飛行機で行きます。', romaji: 'Hikouki de ikimasu.', vn: 'Tôi đi bằng máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '飛行機が好きです。', romaji: 'Hikouki ga suki desu.', vn: 'Tôi thích máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '好', reading: 'す', meaning: 'HẢO' }] },
        { jp: '飛行機に乗ります。', romaji: 'Hikouki ni norimasu.', vn: 'Tôi lên máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '飛行機のチケット', romaji: 'Hikouki no chiketto', vn: 'Vé máy bay.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }] },
        { jp: 'あの飛行機は速いです。', romaji: 'Ano hikouki wa hayai desu.', vn: 'Chiếc máy bay kia nhanh.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '速', reading: 'はや', meaning: 'TỐC' }] },
        { jp: '飛行機で1時間です。', romaji: 'Hikouki de ichijikan desu.', vn: 'Đi bằng máy bay mất 1 tiếng.', furigana: [{ kanji: '飛行機', reading: 'ひこうき', meaning: 'PHI HÀNH CƠ' }, { kanji: '時間', reading: 'じかん', meaning: 'THỜI GIAN' }] }
    ],
    'ふね': [
        { jp: '船で行きます。', romaji: 'Fune de ikimasu.', vn: 'Tôi đi bằng tàu thủy.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '大きい船ですね。', romaji: 'Ookii fune desu ne.', vn: 'Tàu to quá nhỉ.', furigana: [{ kanji: '大', reading: 'おお', meaning: 'ĐẠI' }, { kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }] },
        { jp: '船に乗ったことがありますか。', romaji: 'Fune ni notta koto ga arimasu ka.', vn: 'Bạn đã từng đi tàu thủy chưa?', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '船で荷物を送ります。', romaji: 'Fune de nimotsu wo okurimasu.', vn: 'Gửi hành lý bằng đường tàu biển.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '荷物', reading: 'にもつ', meaning: 'HÀ VẬT' }, { kanji: '送', reading: 'おく', meaning: 'TỐNG' }] },
        { jp: 'あの船は横浜へ行きます。', romaji: 'Ano fune wa Yokohama e ikimasu.', vn: 'Con tàu kia đi Yokohama.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '横浜', reading: 'よこはま', meaning: 'HOÀNH BANH' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '船の旅は楽しいです。', romaji: 'Fune no tabi wa tanoshii desu.', vn: 'Du lịch bằng tàu thủy rất vui.', furigana: [{ kanji: '船', reading: 'ふね', meaning: 'THUYỀN' }, { kanji: '旅', reading: 'たび', meaning: 'LỮ' }, { kanji: '楽', reading: 'たの', meaning: 'LẠC' }] }
    ],
    'でんしゃ': [
        { jp: '電車で行きます。', romaji: 'Densha de ikimasu.', vn: 'Tôi đi bằng tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '電車に乗ります。', romaji: 'Densha ni norimasu.', vn: 'Tôi lên tàu điện.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '電車の駅はどこですか。', romaji: 'Densha no eki wa doko desu ka.', vn: 'Ga tàu điện ở đâu?', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '電車が来ました。', romaji: 'Densha ga kimashita.', vn: 'Tàu điện đến rồi.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'この電車は大阪へ行きます。', romaji: 'Kono densha wa Oosaka e ikimasu.', vn: 'Chuyến tàu này đi Osaka.', furigana: [{ kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '毎日電車を使います。', romaji: 'Mainichi densha wo tsukaimasu.', vn: 'Tôi sử dụng tàu điện mỗi ngày.', furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '電車', reading: 'でんしゃ', meaning: 'ĐIỆN XA' }, { kanji: '使', reading: 'つか', meaning: 'SỬ' }] }
    ],
    'ちかてつ': [
        { jp: '地下鉄で行きます。', romaji: 'Chikatetsu de ikimasu.', vn: 'Tôi đi bằng tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '地下鉄は便利です。', romaji: 'Chikatetsu wa benri desu.', vn: 'Tàu điện ngầm tiện lợi.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }] },
        { jp: '地下鉄を降ります。', romaji: 'Chikatetsu wo orimasu.', vn: 'Tôi xuống tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '降', reading: 'お', meaning: 'GIÁNG' }] },
        { jp: '東京の地下鉄は複雑です。', romaji: 'Toukyou no chikatetsu wa fukuzatsu desu.', vn: 'Tàu điện ngầm ở Tokyo phức tạp.', furigana: [{ kanji: '東京', reading: 'とうきょう', meaning: 'ĐÔNG KINH' }, { kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '複雑', reading: 'ふくざつ', meaning: 'PHỨC TẠP' }] },
        { jp: '地下鉄の駅', romaji: 'Chikatetsu no eki', vn: 'Ga tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '駅', reading: 'えき', meaning: 'DỊCH' }] },
        { jp: '地下鉄で会社へ行きます。', romaji: 'Chikatetsu de kaisha e ikimasu.', vn: 'Tôi đi đến công ty bằng tàu điện ngầm.', furigana: [{ kanji: '地下鉄', reading: 'ちかてつ', meaning: 'ĐỊA HẠ THIẾT' }, { kanji: '会社', reading: 'かいしゃ', meaning: 'HỘI XÃ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'しんかんせん': [
        { jp: '新幹線で行きます。', romaji: 'Shinkansen de ikimasu.', vn: 'Tôi đi bằng Shinkansen.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '新幹線は速いです。', romaji: 'Shinkansen wa hayai desu.', vn: 'Shinkansen chạy nhanh.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '速', reading: 'はや', meaning: 'TỐC' }] },
        { jp: '新幹線に乗ります。', romaji: 'Shinkansen ni norimasu.', vn: 'Tôi lên tàu Shinkansen.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: '新幹線のチケットを買います。', romaji: 'Shinkansen no chiketto wo kaimasu.', vn: 'Tôi mua vé Shinkansen.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '買', reading: 'か', meaning: 'MÃI' }] },
        { jp: '大阪まで新幹線で行きます。', romaji: 'Oosaka made shinkansen de ikimasu.', vn: 'Tôi đi đến Osaka bằng Shinkansen.', furigana: [{ kanji: '大阪', reading: 'おおさか', meaning: 'ĐẠI PHẢN' }, { kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '新幹線は便利です。', romaji: 'Shinkansen wa benri desu.', vn: 'Shinkansen rất tiện lợi.', furigana: [{ kanji: '新幹線', reading: 'しんかんせん', meaning: 'TÂN CÁN TUYẾN' }, { kanji: '便利', reading: 'べんり', meaning: 'TIỆN LỢI' }] }
    ],
    'バス': [
        { jp: 'バスで帰ります。', romaji: 'Basu de kaerimasu.', vn: 'Tôi về bằng xe buýt.', furigana: [{ kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: 'バス停', romaji: 'Basutei', vn: 'Trạm xe buýt.', furigana: [{ kanji: '停', reading: 'てい', meaning: 'ĐÌNH' }] },
        { jp: 'バスに乗ります。', romaji: 'Basu ni norimasu.', vn: 'Tôi lên xe buýt.', furigana: [{ kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: 'バスを降ります。', romaji: 'Basu wo orimasu.', vn: 'Tôi xuống xe buýt.', furigana: [{ kanji: '降', reading: 'お', meaning: 'GIÁNG' }] },
        { jp: 'バスは安いです。', romaji: 'Basu wa yasui desu.', vn: 'Đi xe buýt rẻ.', furigana: [{ kanji: '安', reading: 'やす', meaning: 'AN' }] },
        { jp: 'このバスは大学へ行きます。', romaji: 'Kono basu wa daigaku e ikimasu.', vn: 'Xe buýt này đi đến trường đại học.', furigana: [{ kanji: '大学', reading: 'だいがく', meaning: 'ĐẠI HỌC' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'タクシー': [
        { jp: 'タクシーで来ました。', romaji: 'Takushii de kimashita.', vn: 'Tôi đến bằng taxi.', furigana: [{ kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: 'タクシーを呼びます。', romaji: 'Takushii wo yobimasu.', vn: 'Tôi gọi taxi.', furigana: [{ kanji: '呼', reading: 'よ', meaning: 'HÔ' }] },
        { jp: 'タクシー乗り場', romaji: 'Takushii noriba', vn: 'Điểm đón taxi.', furigana: [{ kanji: '乗', reading: 'の', meaning: 'THỪA' }] },
        { jp: 'タクシーで行きましょう。', romaji: 'Takushii de ikimashou.', vn: 'Chúng ta đi bằng taxi đi.', furigana: [{ kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: 'タクシーは高いです。', romaji: 'Takushii wa takai desu.', vn: 'Taxi đắt lắm.', furigana: [{ kanji: '高', reading: 'たか', meaning: 'CAO' }] },
        { jp: '急ぎますから、タクシーで行きます。', romaji: 'Isogimasu kara, takushii de ikimasu.', vn: 'Vì vội nên tôi đi bằng taxi.', furigana: [{ kanji: '急', reading: 'いそ', meaning: 'CẤP' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'じてんしゃ': [
        { jp: '自転車で行きます。', romaji: 'Jitensha de ikimasu.', vn: 'Tôi đi bằng xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '新しい自転車です。', romaji: 'Atarashii jitensha desu.', vn: 'Đây là xe đạp mới.', furigana: [{ kanji: '新', reading: 'あたら', meaning: 'TÂN' }, { kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }] },
        { jp: '自転車を修理します。', romaji: 'Jitensha wo shuuri shimasu.', vn: 'Tôi sửa xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '修理', reading: 'しゅうり', meaning: 'TU LÝ' }] },
        { jp: '私の自転車はあそこです。', romaji: 'Watashi no jitensha wa asoko desu.', vn: 'Xe đạp của tôi ở kia.', furigana: [{ kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }] },
        { jp: '自転車置場', romaji: 'Jitensha okiba', vn: 'Nơi để xe đạp.', furigana: [{ kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '置', reading: 'お', meaning: 'TRÍ' }, { kanji: '場', reading: 'ば', meaning: 'TRƯỜNG' }] },
        { jp: '毎日自転車に乗ります。', romaji: 'Mainichi jitensha ni norimasu.', vn: 'Tôi đi xe đạp mỗi ngày.', furigana: [{ kanji: '毎日', reading: 'まいにち', meaning: 'MỖI NHẬT' }, { kanji: '自転車', reading: 'じてんしゃ', meaning: 'TỰ CHUYỂN XA' }, { kanji: '乗', reading: 'の', meaning: 'THỪA' }] }
    ],
    'あるいて': [
        { jp: '歩いて行きます。', romaji: 'Aruite ikimasu.', vn: 'Tôi đi bộ đi.', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '駅から歩いて帰ります。', romaji: 'Eki kara aruite kaerimasu.', vn: 'Tôi đi bộ từ nhà ga về.', furigana: [{ kanji: '駅', reading: 'えき', meaning: 'DỊCH' }, { kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: '歩いて10分です。', romaji: 'Aruite juuppun desu.', vn: 'Đi bộ mất 10 phút.', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '分', reading: 'ぷん', meaning: 'PHÂN' }] },
        { jp: '天気がいいですから、歩いて行きます。', romaji: 'Tenki ga ii desu kara, aruite ikimasu.', vn: 'Vì thời tiết đẹp nên tôi đi bộ.', furigana: [{ kanji: '天気', reading: 'てんき', meaning: 'THIÊN KHÍ' }, { kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] },
        { jp: '家まで歩いて帰りました。', romaji: 'Uchi made aruite kaerimashita.', vn: 'Tôi đã đi bộ về đến nhà.', furigana: [{ kanji: '家', reading: 'いえ', meaning: 'GIA' }, { kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '帰', reading: 'かえ', meaning: 'QUY' }] },
        { jp: 'ここから歩いて行けますか。', romaji: 'Koko kara aruite ikemasu ka.', vn: 'Từ đây có thể đi bộ được không?', furigana: [{ kanji: '歩', reading: 'ある', meaning: 'BỘ' }, { kanji: '行', reading: 'い', meaning: 'HÀNH' }] }
    ],
    'ひと': [
        { jp: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', vn: 'Người kia là ai?', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '誰', reading: 'だれ', meaning: 'THÙY' }] },
        { jp: '親切な人です。', romaji: 'Shinsetsu na hito desu.', vn: 'Là một người tốt bụng.', furigana: [{ kanji: '親切', reading: 'しんせつ', meaning: 'THÂN THIẾT' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '人が多いです。', romaji: 'Hito ga ooi desu.', vn: 'Đông người.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '多', reading: 'おお', meaning: 'ĐA' }] },
        { jp: '大勢の人', romaji: 'Oozei no hito', vn: 'Nhiều người, đám đông.', furigana: [{ kanji: '大勢', reading: 'おおぜい', meaning: 'ĐẠI THẾ' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: '悪い人', romaji: 'Warui hito', vn: 'Người xấu.', furigana: [{ kanji: '悪', reading: 'わる', meaning: 'ÁC' }, { kanji: '人', reading: 'ひと', meaning: 'NHÂN' }] },
        { jp: 'あの人は日本人です。', romaji: 'Ano hito wa nihonjin desu.', vn: 'Người kia là người Nhật.', furigana: [{ kanji: '人', reading: 'ひと', meaning: 'NHÂN' }, { kanji: '日本人', reading: 'にほんじん', meaning: 'NHẬT BẢN NHÂN' }] }
    ],
    'ともだち': [
        { jp: '友達と遊びます。', romaji: 'Tomodachi to asobimasu.', vn: 'Tôi chơi với bạn.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '遊', reading: 'あそ', meaning: 'DU' }] },
        { jp: '友達が来ました。', romaji: 'Tomodachi ga kimashita.', vn: 'Bạn tôi đã đến.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '来', reading: 'き', meaning: 'LAI' }] },
        { jp: '友達を紹介します。', romaji: 'Tomodachi wo shoukai shimasu.', vn: 'Tôi giới thiệu bạn.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '紹介', reading: 'しょうかい', meaning: 'THIỆU GIỚI' }] },
        { jp: 'いい友達です。', romaji: 'Ii tomodachi desu.', vn: 'Là một người bạn tốt.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }] },
        { jp: '友達と映画を見ます。', romaji: 'Tomodachi to eiga wo mimasu.', vn: 'Tôi xem phim cùng bạn.', furigana: [{ kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }, { kanji: '映画', reading: 'えいが', meaning: 'ÁNH HỌA' }, { kanji: '見', reading: 'み', meaning: 'KIẾN' }] },
        { jp: '彼は私の友達です。', romaji: 'Kare wa watashi no tomodachi desu.', vn: 'Anh ấy là bạn tôi.', furigana: [{ kanji: '彼', reading: 'かれ', meaning: 'BỈ' }, { kanji: '私', reading: 'わたし', meaning: 'TƯ' }, { kanji: '友達', reading: 'ともだち', meaning: 'HỮU ĐẠT' }] }
    ]
};

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find Lesson 5 block
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
        // Regex to match the vocabulary item. 
        // It looks for `{ word: 'WORD', ... }` and assumes it ends with `}`.
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
    console.log(`Updated ${updatedCount} words in Lesson 5 (Part 1).`);

} catch (err) {
    console.error(err);
}
