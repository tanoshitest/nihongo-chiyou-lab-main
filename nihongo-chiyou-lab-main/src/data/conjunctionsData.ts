
export interface ConjunctionUsage {
    id: number;
    word: string;
    romaji: string;
    meaning: string;
    examples: {
        sentence: string;
        meaning: string;
    }[];
}

export interface ConjunctionGroup {
    id: number;
    title: string;
    items: ConjunctionUsage[];
}

export const CONJUNCTIONS: ConjunctionGroup[] = [
    {
        id: 1,
        title: 'Nối (Và)',
        items: [
            {
                id: 1, word: 'そして', romaji: 'soshite', meaning: 'Và (nối câu)',
                examples: [
                    { sentence: '[東京|とうきょう|Tokyo]の[地下鉄|ちかてつ|Tàu điện ngầm]はきれいです。{そして}[便利|べんり|Tiện lợi]です。', meaning: 'Tàu điện ngầm ở Tokyo sạch. Và tiện lợi.' },
                    { sentence: '[昨日|きのう|Hôm qua][本|ほん|Sách]を[買|か|Mua]いました。{そして}[読|よ|Đọc]みました。', meaning: 'Hôm qua tôi mua sách. Và tôi đã đọc nó.' },
                    { sentence: 'ミラーさんはハンサムです。{そして}[頭|あたま|Đầu]がいいです。', meaning: 'Anh Miller đẹp trai. Và thông minh.' },
                    { sentence: '[家族|かぞく|Gia đình]に[会|あ|Gặp]いました。{そして}[食事|しょくじ|Bữa ăn]しました。', meaning: 'Tôi đã gặp gia đình. Và đã đi ăn chút gì đó.' },
                    { sentence: '[顔|かお|Mặt]を[洗|あら|Rửa]います。{そして}ごはんを[食|た|Ăn]べます。', meaning: 'Tôi rửa mặt. Và ăn cơm.' }
                ]
            },
            {
                id: 2, word: '～て', romaji: '~te,', meaning: 'Và (nối tính từ/động từ)',
                examples: [
                    { sentence: '[奈良|なら|Nara]は[静|しず|Yên tĩnh]か{で}、きれいです。', meaning: 'Nara là thành phố yên tĩnh và đẹp.' },
                    { sentence: 'カリナさんは[目|め|Mắt]が[大|おお|To]きく{て}、かわいいです。', meaning: 'Chị Karina mắt to và dễ thương.' },
                    { sentence: 'この[部屋|へや|Phòng]は[広|ひろ|Rộng]く{て}、[明|あか|Sáng]るいです。', meaning: 'Phòng này rộng và sáng sủa.' },
                    { sentence: '[昨日|きのう|Hôm qua]デパートへ[行|い|Đi]っ{て}、[買|か|Mua]い[物|もの|Sắm]しました。', meaning: 'Hôm qua tôi đi bách hóa và mua sắm.' },
                    { sentence: '[朝|あさ|Sáng]ジョギングをし{て}、[会社|かいしゃ|Công ty]へ[行|い|Đi]きます。', meaning: 'Buổi sáng tôi chạy bộ và đi làm.' }
                ]
            },
            {
                id: 3, word: 'それから', romaji: 'sorekara', meaning: 'Sau đó / Và... nữa',
                examples: [
                    { sentence: 'これをください。{それから}これもください。', meaning: 'Cho tôi cái này. Và cả cái này nữa.' },
                    { sentence: 'これ、お[願|ねが|Nguyện]いします。{それから}、この[荷物|にもつ|Hành lý]も。', meaning: 'Cái này, cho tôi gửi. Và cả chỗ hành lý này nữa ạ.' },
                    { sentence: '[友達|ともだち|Bạn]に[会|あ|Gặp]いました。{それから}[映画|えいが|Phim]を[見|み|Xem]ました。', meaning: 'Tôi đã gặp bạn. Sau đó chúng tôi đi xem phim.' },
                    { sentence: '[手|て|Tay]を[洗|あら|Rửa]います。{それから}ごはんを[食|た|Ăn]べます。', meaning: 'Tôi rửa mặt. Sau đó ăn cơm.' },
                    { sentence: '[銀行|ぎんこう|Ngân hàng]へ[行|い|Đi]きました。{それから}スーパーへ[行|い|Đi]きました。', meaning: 'Tôi đã đi ngân hàng. Sau đó đi siêu thị.' }
                ]
            },
            {
                id: 4, word: '～が', romaji: '~ga,', meaning: 'Nhưng (nối câu xin lỗi/mở đầu)',
                examples: [
                    { sentence: 'すみません{が}、お[名前|なまえ|Tên]は？', meaning: 'Xin lỗi, tên anh/chị là gì ạ?' },
                    { sentence: '失礼(しつれい)です{が}、おいくつですか。', meaning: 'Xin thất lễ, anh/chị bao nhiêu tuổi ạ?' },
                    { sentence: 'すみません{が}、塩(しお)を[取|と|Lấy]っていただけませんか。', meaning: 'Xin lỗi, anh làm ơn lấy giúp tôi lọ muối với.' },
                    { sentence: 'いい[天気|てんき|Thời tiết]です{が}、[暑|あつ|Nóng]いですね。', meaning: 'Thời tiết đẹp nhưng nóng nhỉ.' },
                    { sentence: 'すみません{が}、ちょっとボールペンを[貸|か|Cho mượn]してください。', meaning: 'Xin lỗi, cho tôi mượn cái bút bi một chút.' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Trình tự thời gian',
        items: [
            {
                id: 5, word: '～てから', romaji: '~te kara', meaning: 'Sau khi ~',
                examples: [
                    { sentence: '[仕事|しごと|Công việc]が[終|お|Xong]わっ{てから}、[飲|の|Uống]みに[行|い|Đi]きます。', meaning: 'Sau khi xong việc tôi sẽ đi uống.' },
                    { sentence: '[手|て|Tay]を[洗|あら|Rửa]っ{てから}、ごはんを[食|た|Ăn]べます。', meaning: 'Sau khi rửa tay, tôi sẽ ăn cơm.' },
                    { sentence: '[国|くに|Nước]へ[帰|かえ|Về]っ{てから}、[結婚|けっこん|Kết hôn]します。', meaning: 'Sau khi về nước tôi sẽ kết hôn.' },
                    { sentence: '[説明|せつめい|Giải thích]を[聞|き|Nghe]い{てから}、[質問|しつもん|Câu hỏi]します。', meaning: 'Sau khi nghe giải thích tôi sẽ đặt câu hỏi.' },
                    { sentence: 'コンサートが[終|お|Xong]わっ{てから}、レストランで[食事|しょくじ|Bữa ăn]しました。', meaning: 'Sau khi buổi hòa nhạc kết thúc, tôi đã đi ăn ở nhà hàng.' }
                ]
            },
            {
                id: 6, word: '～まえに', romaji: '~mae ni', meaning: 'Trước khi ~',
                examples: [
                    { sentence: '[寝|ね|Ngủ]る{まえに}、[本|ほん|Sách]を[読|よ|Đọc]みます。', meaning: 'Trước khi đi ngủ, tôi đọc sách.' },
                    { sentence: '[食事|しょくじ|Bữa ăn]の{まえに}、[手|て|Tay]を[洗|あら|Rửa]います。', meaning: 'Trước bữa ăn, tôi rửa tay.' },
                    { sentence: '[泳|およ|Bơi]ぐ{まえに}、シャワーを[浴|あ|Tắm]びます。', meaning: 'Trước khi bơi tôi tắm vòi sen.' },
                    { sentence: '[彼|かれ|Anh ấy]が[来|く|Đến]る{まえに}、[掃除|そうじ|Dọn dẹp]します。', meaning: 'Trước khi anh ấy đến tôi sẽ dọn dẹp.' },
                    { sentence: '[日本|にほん|Nhật Bản]へ[行|い|Đi]く{まえに}、[日本語|にほんご|Tiếng Nhật]を[勉強|べんきょう|Học]しました。', meaning: 'Trước khi đi Nhật tôi đã học tiếng Nhật.' }
                ]
            },
            {
                id: 7, word: '～とき', romaji: '~toki', meaning: 'Khi ~',
                examples: [
                    { sentence: '[図書館|としょかん|Thư viện]で[本|ほん|Sách]を[借|か|Mượn]りる{とき}、カードがいります。', meaning: 'Khi mượn sách ở thư viện thì cần có thẻ.' },
                    { sentence: 'わからない{とき}、[先生|せんせい|Giáo viên]に[聞|き|Hỏi]きます。', meaning: 'Khi không hiểu tôi hỏi giáo viên.' },
                    { sentence: '[子供|こども|Trẻ con]の{とき}、よく[病気|びょうき|Bệnh]をしました。', meaning: 'Khi còn nhỏ tôi hay bị ốm.' },
                    { sentence: '[暇|ひま|Rảnh]な{とき}、ゲームをします。', meaning: 'Khi rảnh rỗi tôi chơi game.' },
                    { sentence: '[忙|いそが|Bận]しい{とき}、[昼|ひる|Trưa]ごはんを[食|た|Ăn]べません。', meaning: 'Khi bận tôi không ăn trưa.' }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Lý do & Nguyên nhân',
        items: [
            {
                id: 8, word: '～から', romaji: '~kara', meaning: 'Vì ~',
                examples: [
                    { sentence: '[時間|じかん|Thời gian]がありません{から}、[急|いそ|Vội]ぎましょう。', meaning: 'Vì không có thời gian nên hãy khẩn trương lên.' },
                    { sentence: '[雨|あめ|Mưa]です{から}、タクシーで[行|い|Đi]きます。', meaning: 'Vì trời mưa nên tôi đi bằng taxi.' },
                    { sentence: 'おいしいです{から}、たくさん[食|た|Ăn]べます。', meaning: 'Vì ngon nên tôi ăn nhiều.' },
                    { sentence: 'あぶないです{から}、[入|はい|Vào]らないでください。', meaning: 'Vì nguy hiểm nên đừng vào.' },
                    { sentence: '[用事|ようじ|Việc bận]があります{から}、[先|さき|Trước]に[帰|かえ|Về]ります。', meaning: 'Vì có việc bận nên tôi về trước.' }
                ]
            },
            {
                id: 9, word: 'ですから', romaji: 'desukara', meaning: 'Vì thế / Do đó',
                examples: [
                    { sentence: '[明日|あした|Ngày mai]は[妻|つま|Vợ]の[誕生日|たんじょうび|Sinh nhật]です。{ですから}、[早|はや|Sớm]く[帰|かえ|Về]らなければなりません。', meaning: 'Mai là sinh nhật vợ tôi. Vì thế tôi phải về sớm.' },
                    { sentence: '[日本|にほん|Nhật Bản]の[物価|ぶっか|Vật giá]は[高|たか|Cao]いです。{ですから}、[生活|せいかつ|Cuộc sống]が[大変|たいへん|Vất vả]です。', meaning: 'Vật giá ở Nhật cao. Vì thế cuộc sống vất vả.' },
                    { sentence: 'ここは[禁煙|きんえん|Cấm hút thuốc]です。{ですから}、タバコを[吸|す|Hút]わないでください。', meaning: 'Ở đây cấm hút thuốc. Vì thế xin đừng hút.' },
                    { sentence: 'わたしはお[酒|さけ|Rượu]が[飲|の|Uống]めません。{ですから}、ジュースをください。', meaning: 'Tôi không uống được rượu. Vì thế cho tôi nước ngọt.' },
                    { sentence: '[日本語|にほんご|Tiếng Nhật]があまりわかりません。{ですから}、[英語|えいご|Tiếng Anh]で[話|はな|Nói]してください。', meaning: 'Tôi không hiểu tiếng Nhật lắm. Vì thế hãy nói tiếng Anh.' }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Nghịch lý / Tương phản',
        items: [
            {
                id: 10, word: '～が (nghịch)', romaji: '~ga,', meaning: 'Nhưng ~',
                examples: [
                    { sentence: '[日本|にほん|Nhật Bản]の[食|た|Ăn]ベ[物|もの|Đồ]はおいしいです{が}、[高|たか|Cao]いです。', meaning: 'Đồ ăn Nhật ngon nhưng đắt.' },
                    { sentence: 'この[部屋|へや|Phòng]は[便利|べんり|Tiện lợi]です{が}、[狭|せま|Hẹp]いです。', meaning: 'Phòng này tiện lợi nhưng hẹp.' },
                    { sentence: '「[七人|しちにん|7 người]の[侍|さむらい|Samurai]」は[古|ふる|Cũ]い{が}、いい[映画|えいが|Phim]です。', meaning: '"7 võ sĩ Samurai" là phim cũ nhưng hay.' },
                    { sentence: '[彼|かれ|Anh ấy]は[頭|あたま|Đầu]がいいです{が}、あまり[勉強|べんきょう|Học]しません。', meaning: 'Anh ấy thông minh nhưng không học lắm.' },
                    { sentence: '[薬|くすり|Thuốc]を[飲|の|Uống]みました{が}、よくなりません。', meaning: 'Tôi đã uống thuốc nhưng không đỡ.' }
                ]
            },
            {
                id: 11, word: 'でも', romaji: 'demo', meaning: 'Nhưng',
                examples: [
                    { sentence: '[日本|にほん|Nhật Bản]の[生活|せいかつ|Cuộc sống]は[楽|たの|Vui]しいです。{でも}、お[金|かね|Tiền]がかかります。', meaning: 'Cuộc sống ở Nhật vui. Nhưng tốn tiền.' },
                    { sentence: 'この[家|いえ|Nhà]は[古|ふる|Cũ]いです。{でも}、きれいです。', meaning: 'Nhà này cũ. Nhưng đẹp.' },
                    { sentence: '[旅行|りょこう|Du lịch]したいです。{でも}、[時間|じかん|Thời gian]がありません。', meaning: 'Tôi muốn đi du lịch. Nhưng không có thời gian.' },
                    { sentence: '[頭|あたま|Đầu]が[痛|いた|Đau]いです。{でも}、[会社|かいしゃ|Công ty]へ[行|い|Đi]きます。', meaning: 'Tôi đau đầu. Nhưng vẫn đi làm.' },
                    { sentence: '[彼|かれ|Anh ấy]はハンサムです。{でも}、[親切|しんせつ|Tốt bụng]じゃありません。', meaning: 'Anh ta đẹp trai. Nhưng không tốt bụng.' }
                ]
            },
            {
                id: 12, word: 'しかし', romaji: 'shikashi', meaning: 'Tuy nhiên',
                examples: [
                    { sentence: '[彼|かれ|Anh ấy]は[勉強|べんきょう|Học]しました。{しかし}、[試験|しけん|Kỳ thi]に[落|お|Rớt]ちました。', meaning: 'Anh ấy đã học. Tuy nhiên lại trượt kỳ thi.' },
                    { sentence: 'ダンスは[体|からだ|Cơ thể]にいいです。{しかし}、やりすぎはよくないです。', meaning: 'Khiêu vũ tốt cho cơ thể. Tuy nhiên tập quá sức thì không tốt.' },
                    { sentence: '[計画|けいかく|Kế hoạch]は[完璧|かんぺき|Hoàn hảo]でした。{しかし}、[失敗|しっぱい|Thất bại]しました。', meaning: 'Kế hoạch đã hoàn hảo. Tuy nhiên đã thất bại.' },
                    { sentence: '[彼|かれ|Anh ấy]は[金持|かねも|Giàu]ちです。{しかし}、[幸|しあわ|Hạnh phúc]せではありません。', meaning: 'Anh ta giàu. Tuy nhiên không hạnh phúc.' },
                    { sentence: '[天気|てんき|Thời tiết]はいいです。{しかし}、[風|かぜ|Gió]が[強|つよ|Mạnh]いです。', meaning: 'Thời tiết đẹp. Tuy nhiên gió mạnh.' }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Điều kiện & Giả định',
        items: [
            {
                id: 13, word: 'じゃ', romaji: 'ja', meaning: 'Vậy thì',
                examples: [
                    { sentence: '[暑|あつ|Nóng]いですね。{じゃ}、ビールを[飲|の|Uống]みましょう。', meaning: 'Nóng quá nhỉ. Vậy thì uống bia đi.' },
                    { sentence: '[時間|じかん|Thời gian]がありません。{じゃ}、タクシーで[行|い|Đi]きましょう。', meaning: 'Không có thời gian. Vậy thì đi taxi đi.' },
                    { sentence: 'これはイタリアのワインです。 …{じゃ}、それをください。', meaning: 'Đây là rượu vang Ý. ...Vậy thì, lấy cho tôi cái đó.' },
                    { sentence: '{じゃ}、また[明日|あした|Ngày mai]。', meaning: 'Vậy thì, hẹn mai gặp lại.' },
                    { sentence: '{じゃ}、[失礼|しつれい|Thất lễ]します。', meaning: 'Vậy, tôi xin phép.' }
                ]
            },
            {
                id: 14, word: '～と', romaji: '~to,', meaning: 'Hễ ~ thì (kết quả tất yếu)',
                examples: [
                    { sentence: 'このボタンを[押|お|Ấn]す{と}、お[釣|つ|Thừa]りが出ます。', meaning: 'Hễ ấn nút này là tiền thừa sẽ ra.' },
                    { sentence: '[右|みぎ|Phải]へ[曲|ま|Rẽ]がる{と}、[郵便局|ゆうびんきょく|Bưu điện]があります。', meaning: 'Hễ rẽ phải là thấy bưu điện.' },
                    { sentence: '[朝|あさ|Sáng]になる{と}、[明|あか|Sáng]るくなります。', meaning: 'Hễ trời sáng thì sẽ sáng sủa.' },
                    { sentence: '[春|はる|Mùa xuân]になる{と}、[桜|さくら|Hoa anh đào]が[咲|さ|Nở]きます。', meaning: 'Hễ sang xuân là hoa anh đào nở.' },
                    { sentence: 'お[酒|さけ|Rượu]を[飲|の|Uống]む{と}、[顔|かお|Mặt]が[赤|あか|Đỏ]くなります。', meaning: 'Hễ uống rượu là mặt đỏ.' }
                ]
            },
            {
                id: 15, word: '～たら', romaji: '~tara', meaning: 'Nếu ~',
                examples: [
                    { sentence: '[雨|あめ|Mưa]が[降|ふ|Rơi]っ{たら}、[出|で|Ra]かけません。', meaning: 'Nếu trời mưa tôi sẽ không ra ngoài.' },
                    { sentence: '[安|やす|Rẻ]かっ{たら}、[買|か|Mua]います。', meaning: 'Nếu rẻ tôi sẽ mua.' },
                    { sentence: '[時間|じかん|Thời gian]があっ{たら}、[手伝|てつだ|Giúp]ってください。', meaning: 'Nếu có thời gian hãy giúp tôi.' },
                    { sentence: '[薬|くすり|Thuốc]を[飲|の|Uống]ん{だら}、[元気|げんき|Khỏe]になります。', meaning: 'Nếu uống thuốc sẽ khỏe lại.' },
                    { sentence: 'もし1[億|おく|Trăm triệu][円|えん|Yên]あっ{たら}、[世界|せかい|Thế giới][旅行|りょこう|Du lịch]をしたいです。', meaning: 'Nếu có 100 triệu yên tôi muốn đi du lịch thế giới.' }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Nhượng bộ',
        items: [
            {
                id: 16, word: '～ても', romaji: '~temo', meaning: 'Cho dù ~ cũng',
                examples: [
                    { sentence: '[雨|あめ|Mưa]が[降|ふ|Rơi]っ{ても}、[行|い|Đi]きます。', meaning: 'Cho dù trời mưa tôi vẫn đi.' },
                    { sentence: '[高|たか|Cao]く{ても}、[買|か|Mua]います。', meaning: 'Cho dù đắt tôi vẫn mua.' },
                    { sentence: '[眠|ねむ|Buồn ngủ]く{ても}、[勉強|べんきょう|Học]します。', meaning: 'Cho dù buồn ngủ tôi vẫn học.' },
                    { sentence: '[嫌|きら|Ghét]い{でも}、[野|や|Rau]さいを[食|た|Ăn]べます。', meaning: 'Cho dù ghét tôi vẫn ăn rau.' },
                    { sentence: '[日曜日|にちようび|Chủ nhật]{でも}、[働|はたら|Làm việc]きます。', meaning: 'Cho dù chủ nhật tôi vẫn làm việc.' }
                ]
            }
        ]
    }
];
