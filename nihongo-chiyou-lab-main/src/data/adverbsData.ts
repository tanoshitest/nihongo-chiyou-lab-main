
export interface AdverbUsage {
    id: number;
    word: string;
    romaji: string;
    meaning: string;
    examples: {
        sentence: string;
        meaning: string;
    }[];
}

export interface AdverbGroup {
    id: number;
    title: string;
    items: AdverbUsage[];
}

export const ADVERBS: AdverbGroup[] = [
    {
        id: 1,
        title: 'Mức độ & Số lượng',
        items: [
            {
                id: 1, word: 'みんな', romaji: 'minna', meaning: 'Mọi người / Tất cả (người)',
                examples: [
                    { sentence: '{みんな}で[写真|しゃしん|Ảnh]を[撮|と|Chụp]りました。', meaning: 'Mọi người đã cùng nhau chụp ảnh.' },
                    { sentence: '[学生|がくせい|Sinh viên]は{みんな}[元気|げんき|Khỏe]です。', meaning: 'Sinh viên tất cả đều khỏe mạnh.' },
                    { sentence: '[外国人|がいこくじん|Người nước ngoài]の[先生|せんせい|Giáo viên]は{みんな}アメリカ[人|じん|Người]です。', meaning: 'Giáo viên nước ngoài đều là người Mỹ.' },
                    { sentence: '{みんな}に[手紙|てがみ|Thư]を[書|か|Viết]きました。', meaning: 'Tôi đã viết thư cho mọi người.' },
                    { sentence: '{みんな}で[歌|うた|Hát]を[歌|うた|Hát]いましょう。', meaning: 'Mọi người cùng hát nào.' }
                ]
            },
            {
                id: 2, word: '全部', romaji: 'zenbu', meaning: 'Tất cả / Toàn bộ (vật/việc)',
                examples: [
                    { sentence: '[宿題|しゅくだい|Bài tập]は{全部}わかりますか。', meaning: 'Bạn có hiểu hết bài tập không?' },
                    { sentence: '{全部}でいくらですか。', meaning: 'Tổng cộng là bao nhiêu tiền?' },
                    { sentence: 'そのケーキを{全部}[食|た|Ăn]べました。', meaning: 'Tôi đã ăn hết cái bánh đó.' },
                    { sentence: '[仕事|しごと|Công việc]は{全部}[終|お|Xong]わりました。', meaning: 'Công việc đã xong toàn bộ.' },
                    { sentence: '[荷物|にもつ|Hành lý]は{全部}で3つです。', meaning: 'Hành lý tổng cộng có 3 kiện.' }
                ]
            },
            {
                id: 3, word: 'たくさん', romaji: 'takusan', meaning: 'Nhiều',
                examples: [
                    { sentence: '[人|ひと|Người]が{たくさん}いますね。', meaning: 'Có nhiều người nhỉ.' },
                    { sentence: 'お[金|かね|Tiền]が{たくさん}あります。', meaning: 'Tôi có nhiều tiền.' },
                    { sentence: '[昨日|きのう|Hôm qua]ビールを{たくさん}[飲|の|Uống]みました。', meaning: 'Hôm qua tôi đã uống nhiều bia.' },
                    { sentence: '[京都|きょうと|Kyoto]で[写真|しゃしん|Ảnh]を{たくさん}[撮|と|Chụp]りました。', meaning: 'Tôi đã chụp nhiều ảnh ở Kyoto.' },
                    { sentence: '[仕事|しごと|Công việc]が{たくさん}あります。', meaning: 'Tôi có nhiều việc phải làm.' }
                ]
            },
            {
                id: 4, word: 'とても', romaji: 'totemo', meaning: 'Rất',
                examples: [
                    { sentence: '[北京|ペキン|Bắc Kinh]は{とても}[寒|さむ|Lạnh]いです。', meaning: 'Bắc Kinh rất lạnh.' },
                    { sentence: 'この[本|ほん|Sách]は{とても}おもしろいです。', meaning: 'Quyển sách này rất thú vị.' },
                    { sentence: '[日本|にほん|Nhật Bản]の[生活|せいかつ|Cuộc sống]は{とても}[楽|たの|Vui]しいです。', meaning: 'Cuộc sống ở Nhật rất vui.' },
                    { sentence: 'この[料理|りょうり|Món ăn]は{とても}おいしいです。', meaning: 'Món ăn này rất ngon.' },
                    { sentence: '[彼|かれ|Anh ấy]は{とても}[親切|しんせつ|Tốt bụng]です。', meaning: 'Anh ấy rất tốt bụng.' }
                ]
            },
            {
                id: 5, word: 'よく', romaji: 'yoku', meaning: 'Tốt / Rõ / Thường',
                examples: [
                    { sentence: 'この[漢字|かんじ|Hán tự]を{よく}[覚|おぼ|Nhớ]えてください。', meaning: 'Hãy nhớ kỹ chữ Hán này.' },
                    { sentence: '[英語|えいご|Tiếng Anh]が{よく}わかります。', meaning: 'Tôi hiểu rõ tiếng Anh.' },
                    { sentence: '[夜|よる|Tối]{よく}[寝|ね|Ngủ]ましたか。', meaning: 'Tối qua bạn ngủ ngon không?' },
                    { sentence: 'ワンさんは{よく}[勉強|べんきょう|Học]しますね。', meaning: 'Anh Wang học chăm chỉ nhỉ.' },
                    { sentence: '[彼|かれ|Anh ấy]はピアノが{よく}できます。', meaning: 'Anh ấy chơi piano giỏi.' }
                ]
            },
            {
                id: 6, word: 'だいたい', romaji: 'daitai', meaning: 'Đại khái / Hầu hết',
                examples: [
                    { sentence: '[日本語|にほんご|Tiếng Nhật]が{だいたい}わかります。', meaning: 'Tôi hiểu đại khái tiếng Nhật.' },
                    { sentence: '[仕事|しごと|Công việc]は{だいたい}[終|お|Xong]わりました。', meaning: 'Công việc hầu như đã xong.' },
                    { sentence: 'テレサちゃんはひらがなが{だいたい}わかります。', meaning: 'Bé Teresa biết hầu hết chữ Hiragana.' },
                    { sentence: 'レポートは{だいたい}[書|か|Viết]けました。', meaning: 'Báo cáo tôi đã viết xong đại khái.' },
                    { sentence: 'スピーチの[内容|ないよう|Nội dung]は{だいたい}わかります。', meaning: 'Tôi hiểu đại ý nội dung bài phát biểu.' }
                ]
            },
            {
                id: 7, word: '少し', romaji: 'sukoshi', meaning: 'Một chút / Một ít',
                examples: [
                    { sentence: '[日本語|にほんご|Tiếng Nhật]が{少し}わかります。', meaning: 'Tôi hiểu một chút tiếng Nhật.' },
                    { sentence: '[今日|きょう|Hôm nay]は{少し}[寒|さむ|Lạnh]いです。', meaning: 'Hôm nay hơi lạnh một chút.' },
                    { sentence: 'お[酒|さけ|Rượu]を{少し}[飲|の|Uống]みました。', meaning: 'Tôi đã uống một chút rượu.' },
                    { sentence: 'マリアさんはカタカナが{少し}わかります。', meaning: 'Chị Maria biết một ít chữ Katakana.' },
                    { sentence: 'お[金|かね|Tiền]が{少し}あります。', meaning: 'Tôi có một ít tiền.' }
                ]
            },
            {
                id: 8, word: 'ちょっと', romaji: 'chotto', meaning: 'Một chút (ngắn hơn sukoshi, văn nói)',
                examples: [
                    { sentence: '{ちょっと}[休|やす|Nghỉ]みましょう。', meaning: 'Chúng ta nghỉ một chút đi.' },
                    { sentence: 'すみません、{ちょっと}[待|ま|Đợi]ってください。', meaning: 'Xin lỗi, hãy đợi tôi một chút.' },
                    { sentence: '{ちょっと}ボールペンを[貸|か|Cho mượn]してください。', meaning: 'Cho tôi mượn cái bút bi một chút.' },
                    { sentence: 'これは{ちょっと}[難|むずか|Khó]しいです。', meaning: 'Cái này hơi khó một chút.' },
                    { sentence: '[今|いま|Bây giờ]{ちょっと}[忙|いそが|Bận]しいです。', meaning: 'Bây giờ tôi hơi bận.' }
                ]
            },
            {
                id: 9, word: '一番', romaji: 'ichiban', meaning: 'Nhất (so sánh)',
                examples: [
                    { sentence: '[日本|にほん|Nhật Bản][料理|りょうり|Món ăn]で[寿司|すし|Sushi]が{一番}[好|す|Thích]きです。', meaning: 'Trong các món Nhật tôi thích Sushi nhất.' },
                    { sentence: 'クラスで[誰|だれ|Ai]が{一番}[背|せ|Lưng/Cao]が[高|たか|Cao]いですか。', meaning: 'Trong lớp ai cao nhất?' },
                    { sentence: '[一年|いちねん|Một năm]でいつが{一番}[寒|さむ|Lạnh]いですか。', meaning: 'Trong một năm khi nào lạnh nhất?' },
                    { sentence: '[家族|かぞく|Gia đình]で[母|はは|Mẹ]が{一番}[歌|うた|Hát]が[上手|じょうず|Giỏi]です。', meaning: 'Trong gia đình mẹ là người hát hay nhất.' },
                    { sentence: 'これがこの[店|みせ|Cửa hàng]で{一番}[安|やす|Rẻ]いです。', meaning: 'Cái này là rẻ nhất ở cửa hàng này.' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Tần suất & Thời gian',
        items: [
            {
                id: 10, word: 'いつも', romaji: 'itsumo', meaning: 'Luôn luôn',
                examples: [
                    { sentence: '[母|はは|Mẹ]は{いつも}[元気|げんき|Khỏe]です。', meaning: 'Mẹ tôi lúc nào cũng khỏe mạnh.' },
                    { sentence: '[日曜日|にちようび|Chủ nhật]は{いつも}[家|うち|Nhà]にいます。', meaning: 'Chủ nhật tôi luôn ở nhà.' },
                    { sentence: '{いつも}[大学|だいがく|Đại học]の[食堂|しょくどう|Nhà ăn]で[昼|ひる|Trưa]ごはんを[食|た|Ăn]べます。', meaning: 'Tôi luôn ăn trưa ở nhà ăn đại học.' },
                    { sentence: 'ミラーさんは{いつも}[親切|しんせつ|Tốt bụng]です。', meaning: 'Anh Miller lúc nào cũng tốt bụng.' },
                    { sentence: '{いつも}このスーパーで[買|か|Mua]い[物|もの|Sắm]します。', meaning: 'Tôi luôn mua sắm ở siêu thị này.' }
                ]
            },
            {
                id: 11, word: '時々', romaji: 'tokidoki', meaning: 'Thỉnh thoảng',
                examples: [
                    { sentence: '{時々}[彼|かれ|Anh ấy]に[会|あ|Gặp]います。', meaning: 'Thỉnh thoảng tôi gặp anh ấy.' },
                    { sentence: '{時々}[映画|えいが|Phim]を[見|み|Xem]ます。', meaning: 'Thỉnh thoảng tôi xem phim.' },
                    { sentence: '{時々}[図書館|としょかん|Thư viện]へ[行|い|Đi]きます。', meaning: 'Thỉnh thoảng tôi đi thư viện.' },
                    { sentence: '{時々}[日本|にほん|Nhật Bản][料理|りょうり|Món ăn]を[食|た|Ăn]べます。', meaning: 'Thỉnh thoảng tôi ăn món Nhật.' },
                    { sentence: '{時々}[大阪|おおさか|Osaka]弁を[使|つか|Dùng]います。', meaning: 'Thỉnh thoảng tôi dùng tiếng địa phương Osaka.' }
                ]
            },
            {
                id: 12, word: 'また', romaji: 'mata', meaning: 'Lại (lần nữa)',
                examples: [
                    { sentence: '{また}[明日|あした|Ngày mai]きます。', meaning: 'Ngày mai tôi sẽ lại đến.' },
                    { sentence: '{また}[電話|でんわ|Điện thoại]します。', meaning: 'Tôi sẽ gọi lại sau.' },
                    { sentence: '{また}[遊|あそ|Chơi]びに[来|き|Đến]てください。', meaning: 'Hãy lại đến chơi nhé.' },
                    { sentence: '[明日|あした|Ngày mai]{また}[雨|あめ|Mưa]ですね。', meaning: 'Mai trời lại mưa nhỉ.' },
                    { sentence: 'じゃ、{また}。', meaning: 'Hẹn gặp lại.' }
                ]
            },
            {
                id: 13, word: '初めて', romaji: 'hajimete', meaning: 'Lần đầu tiên',
                examples: [
                    { sentence: '[昨日|きのう|Hôm qua]{初めて}[寿司|すし|Sushi]を[食|た|Ăn]べました。', meaning: 'Hôm qua lần đầu tiên tôi ăn Sushi.' },
                    { sentence: '[彼|かれ|Anh ấy]に[会|あ|Gặp]ったのはこれが{初めて}です。', meaning: 'Đây là lần đầu tiên tôi gặp anh ấy.' },
                    { sentence: '{初めて}[日本|にほん|Nhật Bản]へ[来|き|Đến]ました。', meaning: 'Lần đầu tiên tôi đến Nhật Bản.' },
                    { sentence: '{初めて}スキーをしました。', meaning: 'Lần đầu tiên tôi trượt tuyết.' },
                    { sentence: 'この[店|みせ|Cửa hàng]は{初めて}です。', meaning: 'Lần đầu tiên tôi đến cửa hàng này.' }
                ]
            },
            {
                id: 14, word: 'もう一度', romaji: 'mou ichido', meaning: 'Một lần nữa',
                examples: [
                    { sentence: 'すみません、{もう一度}[言|い|Nói]ってください。', meaning: 'Xin lỗi, hãy nói lại một lần nữa.' },
                    { sentence: '{もう一度}お願いします。', meaning: 'Xin vui lòng làm lại một lần nữa.' },
                    { sentence: '{もう一度}[考|かんが|Suy nghĩ]えましょう。', meaning: 'Chúng ta hãy cùng suy nghĩ lại một lần nữa.' },
                    { sentence: '{もう一度}チャレンジしたいです。', meaning: 'Tôi muốn thử thách lại một lần nữa.' },
                    { sentence: 'あの[映画|えいが|Phim]を{もう一度}[見|み|Xem]たいです。', meaning: 'Tôi muốn xem bộ phim đó thêm một lần nữa.' }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Thời điểm hiện tại & Tương lai',
        items: [
            {
                id: 15, word: '今', romaji: 'ima', meaning: 'Bây giờ',
                examples: [
                    { sentence: '{今}9[時|じ|Giờ]です。', meaning: 'Bây giờ là 9 giờ.' },
                    { sentence: '{今}[雨|あめ|Mưa]が[降|ふ|Rơi]っています。', meaning: 'Bây giờ trời đang mưa.' },
                    { sentence: '{今}、[時間|じかん|Thời gian]がありますか。', meaning: 'Bây giờ bạn có thời gian không?' },
                    { sentence: '{今}から[出|で|Ra]かけます。', meaning: 'Tôi sẽ ra ngoài từ bây giờ.' },
                    { sentence: '{今}、[何|なに|Cái gì]をしていますか。', meaning: 'Bây giờ bạn đang làm gì?' }
                ]
            },
            {
                id: 16, word: 'すぐ', romaji: 'sugu', meaning: 'Ngay lập tức',
                examples: [
                    { sentence: '{すぐ}[行|い|Đi]きます。', meaning: 'Tôi sẽ đi ngay.' },
                    { sentence: '{すぐ}レポートを[送|おく|Gửi]ってください。', meaning: 'Hãy gửi báo cáo ngay lập tức.' },
                    { sentence: '{すぐ}[帰|かえ|Về]ります。', meaning: 'Tôi sẽ về ngay.' },
                    { sentence: '[食事|しょくじ|Bữa ăn]をして、{すぐ}[寝|ね|Ngủ]ました。', meaning: 'Ăn xong, tôi ngủ ngay.' },
                    { sentence: '[薬|くすり|Thuốc]を[飲|の|Uống]んだら、{すぐ}[治|なお|Khỏi]りました。', meaning: 'Uống thuốc xong là khỏi ngay.' }
                ]
            },
            {
                id: 17, word: 'もう', romaji: 'mou', meaning: 'Đã / Rồi',
                examples: [
                    { sentence: '{もう}[昼|ひる|Trưa]ごはんを[食|た|Ăn]べましたか。', meaning: 'Bạn đã ăn trưa chưa?' },
                    { sentence: '{もう}12[時|じ|Giờ]ですね。', meaning: 'Đã 12 giờ rồi nhỉ.' },
                    { sentence: '{もう}[切符|きっぷ|Vé]を[買|か|Mua]いました。', meaning: 'Tôi đã mua vé rồi.' },
                    { sentence: '{もう}[帰|かえ|Về]りました。', meaning: 'Tôi đã về rồi.' },
                    { sentence: '{もう}[夏|なつ|Mùa hè]ですね。', meaning: 'Đã là mùa hè rồi nhỉ.' }
                ]
            },
            {
                id: 18, word: 'まだ', romaji: 'mada', meaning: 'Chưa / Vẫn',
                examples: [
                    { sentence: '{まだ}[食|た|Ăn]べていません。', meaning: 'Tôi vẫn chưa ăn.' },
                    { sentence: '{まだ}[決|き|Quyết định]めていません。', meaning: 'Tôi vẫn chưa quyết định.' },
                    { sentence: '{まだ}[雨|あめ|Mưa]が[降|ふ|Rơi]っています。', meaning: 'Trời vẫn đang mưa.' },
                    { sentence: '{まだ}[時間|じかん|Thời gian]があります。', meaning: 'Vẫn còn thời gian.' },
                    { sentence: '{まだ}[若|わか|Trẻ]いですから。', meaning: 'Vì tôi vẫn còn trẻ.' }
                ]
            },
            {
                id: 19, word: 'これから', romaji: 'korekara', meaning: 'Từ bây giờ / Sau đây',
                examples: [
                    { sentence: '{これから}[食|た|Ăn]べます。', meaning: 'Bây giờ tôi sẽ ăn.' },
                    { sentence: '{これから}[大阪|おおさか|Osaka]へ[行|い|Đi]きます。', meaning: 'Bây giờ tôi sẽ đi Osaka.' },
                    { sentence: '{これから}[会議|かいぎ|Cuộc họp]を[始|はじ|Bắt đầu]めます。', meaning: 'Sau đây chúng ta sẽ bắt đầu cuộc họp.' },
                    { sentence: '{これから}[寒|さむ|Lạnh]くなります。', meaning: 'Từ bây giờ trời sẽ lạnh hơn.' },
                    { sentence: '{これから}[気|き|Chú ý]をつけます。', meaning: 'Từ nay tôi sẽ chú ý.' }
                ]
            },
            {
                id: 20, word: 'そろそろ', romaji: 'sorosoro', meaning: 'Sắp sửa / Chuẩn bị',
                examples: [
                    { sentence: '{そろそろ}[失礼|しつれい|Thất lễ/Về]します。', meaning: 'Tôi xin phép sắp sửa phải về.' },
                    { sentence: '{そろそろ}7[時|じ|Giờ]ですね。', meaning: 'Sắp 7 giờ rồi nhỉ.' },
                    { sentence: '{そろそろ}[出|で|Ra]かけましょう。', meaning: 'Chúng ta chuẩn bị đi thôi.' },
                    { sentence: '{そろそろ}[終|お|Xong]わりましょう。', meaning: 'Chúng ta sắp xong rồi.' },
                    { sentence: '{そろそろ}[寝|ね|Ngủ]る[時間|じかん|Thời gian]です。', meaning: 'Sắp đến giờ ngủ rồi.' }
                ]
            },
            {
                id: 21, word: 'あとで', romaji: 'atode', meaning: 'Lát nữa / Sau',
                examples: [
                    { sentence: '{あとで}[電話|でんわ|Điện thoại]します。', meaning: 'Lát nữa tôi sẽ gọi lại.' },
                    { sentence: '{あとで}[来|き|Đến]てください。', meaning: 'Lát nữa hãy đến nhé.' },
                    { sentence: '{あとで}[食|た|Ăn]べます。', meaning: 'Lát nữa tôi sẽ ăn.' },
                    { sentence: 'この[仕事|しごと|Công việc]は{あとで}やります。', meaning: 'Việc này tôi sẽ làm sau.' },
                    { sentence: '詳(くわ)しいことは{あとで}[説明|せつめい|Giải thích]します。', meaning: 'Chi tiết tôi sẽ giải thích sau.' }
                ]
            },
            {
                id: 22, word: 'まず', romaji: 'mazu', meaning: 'Trước hết / Đầu tiên',
                examples: [
                    { sentence: '{まず}このボタンを[押|お|Ấn]してください。', meaning: 'Trước hết hãy ấn nút này.' },
                    { sentence: '{まず}[言葉|ことば|Từ vựng]を[覚|おぼ|Nhớ]えましょう。', meaning: 'Trước tiên hãy nhớ từ vựng.' },
                    { sentence: '{まず}[手|て|Tay]を[洗|あら|Rửa]います。', meaning: 'Đầu tiên là rửa tay.' },
                    { sentence: '{まず}[野菜|やさい|Rau]を[切|き|Cắt]ります。', meaning: 'Đầu tiên là cắt rau.' },
                    { sentence: '{まず}[自分|じぶん|Bản thân]でやってみてください。', meaning: 'Trước hết hãy tự mình làm thử xem.' }
                ]
            },
            {
                id: 23, word: '次に', romaji: 'tsugini', meaning: 'Tiếp theo',
                examples: [
                    { sentence: '{次に}カードを[入|い|Vào]れてください。', meaning: 'Tiếp theo hãy cho thẻ vào.' },
                    { sentence: '{次に}[塩|しお|Muối]を[入|い|Vào]れます。', meaning: 'Tiếp theo cho muối vào.' },
                    { sentence: '{次に}誰(だれ)が[歌|うた|Hát]いますか。', meaning: 'Tiếp theo ai sẽ hát?' },
                    { sentence: '{次に}[行|い|Đi]く[所|ところ|Nơi]はどこですか。', meaning: 'Nơi tiếp theo chúng ta đi là đâu?' },
                    { sentence: '{次に}、[新|あたら|Mới]しいホテルの[話|はなし|Chuyện]をします。', meaning: 'Tiếp theo, tôi sẽ nói về khách sạn mới.' }
                ]
            },
            {
                id: 24, word: '最近', romaji: 'saikin', meaning: 'Gần đây',
                examples: [
                    { sentence: '{最近}[日本|にほん|Nhật Bản]のサッカーは[強|つよ|Mạnh]くなりました。', meaning: 'Gần đây bóng đá Nhật Bản đã mạnh lên.' },
                    { sentence: '{最近}[忙|いそが|Bận]しいです。', meaning: 'Gần đây tôi bận.' },
                    { sentence: '{最近}[彼|かれ|Anh ấy]に[会|あ|Gặp]いません。', meaning: 'Gần đây tôi không gặp anh ấy.' },
                    { sentence: '{最近}どうですか。', meaning: 'Gần đây thế nào?' },
                    { sentence: '{最近}[天気|てんき|Thời tiết]がいいですね。', meaning: 'Gần đây thời tiết đẹp nhỉ.' }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Cách thức hành động',
        items: [
            {
                id: 25, word: '自分で', romaji: 'jibun de', meaning: 'Tự mình',
                examples: [
                    { sentence: '{自分で}[料理|りょうり|Món ăn]を[作|つく|Làm]ります。', meaning: 'Tôi tự mình nấu ăn.' },
                    { sentence: '{自分で}やってください。', meaning: 'Hãy tự mình làm đi.' },
                    { sentence: '[故障|こしょう|Hỏng]を{自分で}[直|なお|Sửa]しました。', meaning: 'Tôi đã tự mình sửa chỗ hỏng.' },
                    { sentence: '{自分で}[考|かんが|Suy nghĩ]えてください。', meaning: 'Hãy tự mình suy nghĩ.' },
                    { sentence: 'パーティーの[準備|じゅんび|Chuẩn bị]を{自分で}しました。', meaning: 'Tôi đã tự chuẩn bị cho bữa tiệc.' }
                ]
            },
            {
                id: 26, word: '一人で', romaji: 'hitori de', meaning: 'Một mình',
                examples: [
                    { sentence: '{一人で}[病院|びょういん|Bệnh viện]へ[行|い|Đi]きます。', meaning: 'Tôi đi bệnh viện một mình.' },
                    { sentence: '{一人で}[住|す|Sống]んでいます。', meaning: 'Tôi đang sống một mình.' },
                    { sentence: '{一人で}[旅行|りょこう|Du lịch]しました。', meaning: 'Tôi đã đi du lịch một mình.' },
                    { sentence: '{一人で}できますか。', meaning: 'Bạn có làm một mình được không?' },
                    { sentence: '{一人で}[弁当|べんとう|Cơm hộp]を[食|た|Ăn]べました。', meaning: 'Tôi đã ăn cơm hộp một mình.' }
                ]
            },
            {
                id: 27, word: '一緒に', romaji: 'issho ni', meaning: 'Cùng nhau',
                examples: [
                    { sentence: '{一緒に}[帰|かえ|Về]りませんか。', meaning: 'Chúng ta cùng về nhé?' },
                    { sentence: '{一緒に}[写真|しゃしん|Ảnh]を[撮|と|Chụp]りましょう。', meaning: 'Cùng chụp ảnh nào.' },
                    { sentence: '[明日|あした|Ngày mai]{一緒に}[行|い|Đi]きましょう。', meaning: 'Ngày mai cùng đi nhé.' },
                    { sentence: '[友達|ともだち|Bạn]{一緒に}[勉強|べんきょう|Học]します。', meaning: 'Tôi học cùng bạn.' }, // note: to issho ni usually but issho ni alone works contextually or needs "to"
                    { sentence: '{一緒に}ごはんを[食|た|Ăn]べに行きましょう。', meaning: 'Cùng đi ăn cơm nhé.' }
                ]
            },
            {
                id: 28, word: '別々に', romaji: 'betsubetsu ni', meaning: 'Riêng biệt / Chia ra',
                examples: [
                    { sentence: 'すみません、{別々に}お願いします。', meaning: 'Xin lỗi, tính tiền riêng (chia ra) giúp tôi.' },
                    { sentence: '{別々に}[払|はら|Trả]いましょう。', meaning: 'Chúng ta trả riêng nhé.' },
                    { sentence: '{別々に}[包|つつ|Gói]んでください。', meaning: 'Hãy gói riêng ra giúp tôi.' },
                    { sentence: '{別々に}[座|すわ|Ngồi]りました。', meaning: 'Chúng tôi đã ngồi riêng ra.' },
                    { sentence: '荷物(にもつ)は{別々に}[送|おく|Gửi]りました。', meaning: 'Tôi đã gửi hành lý riêng ra.' }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Mức độ & Phán đoán',
        items: [
            {
                id: 29, word: '早く', romaji: 'hayaku', meaning: 'Sớm / Nhanh',
                examples: [
                    { sentence: '{早く}[家|うち|Nhà]へ[帰|かえ|Về]ります。', meaning: 'Tôi về nhà sớm.' },
                    { sentence: '{早く}[寝|ね|Ngủ]てください。', meaning: 'Hãy ngủ sớm đi.' },
                    { sentence: '{早く}[元気|げんき|Khỏe]になってください。', meaning: 'Hãy sớm khỏe lại nhé.' },
                    { sentence: '{早く}[来て|きて|Đến]ください。', meaning: 'Hãy đến nhanh lên.' },
                    { sentence: '[朝|あさ|Sáng]{早く}[起|お|Dậy]きます。', meaning: 'Sáng tôi dậy sớm.' }
                ]
            },
            {
                id: 30, word: 'ゆっくり', romaji: 'yukkuri', meaning: 'Chậm / Thong thả',
                examples: [
                    { sentence: 'もっと{ゆっくり}[言|い|Nói]ってください。', meaning: 'Hãy nói chậm hơn nữa.' },
                    { sentence: '{ゆっくり}[休|やす|Nghỉ]んでください。', meaning: 'Hãy nghỉ ngơi thong thả.' },
                    { sentence: '{ゆっくり}[食|た|Ăn]べましょう。', meaning: 'Hãy ăn từ từ thôi.' },
                    { sentence: '{ゆっくり}[歩|ある|Đi bộ]きます。', meaning: 'Tôi đi bộ chậm rãi.' },
                    { sentence: '[今日|きょう|Hôm nay]は{ゆっくり}したいです。', meaning: 'Hôm nay tôi muốn thong thả nghỉ ngơi.' }
                ]
            },
            {
                id: 31, word: 'だんだん', romaji: 'dandan', meaning: 'Dần dần',
                examples: [
                    { sentence: '{だんだん}[暑|あつ|Nóng]くなります。', meaning: 'Trời dần dần nóng lên.' },
                    { sentence: '{だんだん}[日本語|にほんご|Tiếng Nhật]が[上手|じょうず|Giỏi]になります。', meaning: 'Tiếng Nhật dần dần giỏi lên.' },
                    { sentence: '{だんだん}[人|ひと|Người]が[増|ふ|Tăng]えました。', meaning: 'Người dần dần đông lên.' },
                    { sentence: '{だんだん}[好|す|Thích]きになりました。', meaning: 'Tôi đã dần dần trở nên thích.' },
                    { sentence: '[体|からだ|Cơ thể]が{だんだん}[弱|よわ|Yếu]くなります。', meaning: 'Cơ thể dần dần yếu đi.' }
                ]
            },
            {
                id: 32, word: 'まっすぐ', romaji: 'massugu', meaning: 'Thẳng',
                examples: [
                    { sentence: '{まっすぐ}[行|い|Đi]ってください。', meaning: 'Hãy đi thẳng.' },
                    { sentence: '{まっすぐ}[帰|かえ|Về]ります。', meaning: 'Tôi đi thẳng về nhà.' },
                    { sentence: 'この[道|みち|Đường]を{まっすぐ}[歩|ある|Đi bộ]きます。', meaning: 'Đi bộ thẳng con đường này.' },
                    { sentence: '{まっすぐ}[見|み|Xem]てください。', meaning: 'Hãy nhìn thẳng.' },
                    { sentence: '{まっすぐ}[並|なら|Xếp hàng]んでください。', meaning: 'Hãy xếp hàng thẳng.' }
                ]
            },
            {
                id: 33, word: 'あまり', romaji: 'amari', meaning: 'Không... lắm (đi với phủ định)',
                examples: [
                    { sentence: 'この[辞書|じしょ|Từ điển]は{あまり}よくないです。', meaning: 'Quyển từ điển này không tốt lắm.' },
                    { sentence: '{あまり}[食|た|Ăn]ベたくないです。', meaning: 'Tôi không muốn ăn lắm.' },
                    { sentence: '[時間|じかん|Thời gian]が{あまり}ありません。', meaning: 'Không có nhiều thời gian lắm.' },
                    { sentence: '[最近|さいきん|Gần đây]{あまり}[会|あ|Gặp]いません。', meaning: 'Gần đây không gặp nhau nhiều lắm.' },
                    { sentence: 'お[酒|さけ|Rượu]は{あまり}[飲|の|Uống]みません。', meaning: 'Tôi không uống rượu nhiều lắm.' }
                ]
            },
            {
                id: 34, word: '全然', romaji: 'zenzen', meaning: 'Hoàn toàn không (đi với phủ định)',
                examples: [
                    { sentence: 'インドネシア[語|ご|Tiếng]が{全然}わかりません。', meaning: 'Tôi hoàn toàn không hiểu tiếng Indonesia.' },
                    { sentence: 'お[金|かね|Tiền]が{全然}ありません。', meaning: 'Tôi hoàn toàn không có tiền.' },
                    { sentence: '{全然}[知|し|Biết]りませんでした。', meaning: 'Tôi hoàn toàn không biết.' },
                    { sentence: '[時間|じかん|Thời gian]が{全然}足(た)りません。', meaning: 'Hoàn toàn không đủ thời gian.' },
                    { sentence: 'あの[映画|えいが|Phim]は{全然}おもしろくないです。', meaning: 'Bộ phim đó hoàn toàn không thú vị.' }
                ]
            },
            {
                id: 35, word: 'ぜひ', romaji: 'zehi', meaning: 'Nhất định (nguyện vọng)',
                examples: [
                    { sentence: '{ぜひ}[北海道|ほっかいどう|Hokkaido]へ[行|い|Đi]きたいです。', meaning: 'Tôi nhất định muốn đi Hokkaido.' },
                    { sentence: '{ぜひ}[遊|あそ|Chơi]びに[来|き|Đến]てください。', meaning: 'Nhất định hãy đến chơi nhé.' },
                    { sentence: '{ぜひ}[会|あ|Gặp]いたいです。', meaning: 'Tôi nhất định muốn gặp.' },
                    { sentence: '{ぜひ}お願いします。', meaning: 'Nhất định nhờ bạn giúp đỡ.' },
                    { sentence: '{ぜひ}やってみたいです。', meaning: 'Tôi nhất định muốn làm thử.' }
                ]
            },
            {
                id: 36, word: '多分', romaji: 'tabun', meaning: 'Có lẽ / Chắc là',
                examples: [
                    { sentence: '{多分}ミラーさんは[知|し|Biết]らないと[思|おも|Nghĩ]います。', meaning: 'Tôi nghĩ chắc là anh Miller không biết.' },
                    { sentence: '{多分}[明日|あした|Ngày mai]は[雨|あめ|Mưa]でしょう。', meaning: 'Chắc là ngày mai trời sẽ mưa.' },
                    { sentence: '{多分}[大丈夫|だいじょうぶ|Ổn]です。', meaning: 'Chắc là ổn thôi.' },
                    { sentence: '{多分}[彼|かれ|Anh ấy]は[来|こ|Đến]ないと[思|おも|Nghĩ]います。', meaning: 'Tôi nghĩ chắc anh ấy không đến.' },
                    { sentence: '{多分}[遅|おく|Trễ]れると[思|おも|Nghĩ]います。', meaning: 'Tôi nghĩ chắc là sẽ trễ.' }
                ]
            },
            {
                id: 37, word: 'きっと', romaji: 'kitto', meaning: 'Chắc chắn',
                examples: [
                    { sentence: '[明日|あした|Ngày mai]は{きっと}[天気|てんき|Thời tiết]がいいでしょう。', meaning: 'Ngày mai chắc chắn thời tiết sẽ đẹp.' },
                    { sentence: '{きっと}[合格|ごうかく|Đậu]すると[思|おも|Nghĩ]います。', meaning: 'Tôi nghĩ chắc chắn sẽ đậu.' },
                    { sentence: '[彼|かれ|Anh ấy]は{きっと}[来|き|Đến]ます。', meaning: 'Anh ấy chắc chắn sẽ đến.' },
                    { sentence: '{きっと}[成功|せいこう|Thành công]しますよ。', meaning: 'Chắc chắn sẽ thành công đấy.' },
                    { sentence: '{きっと}[大丈夫|だいじょうぶ|Ổn]ですよ。', meaning: 'Chắc chắn là ổn mà.' }
                ]
            },
            {
                id: 38, word: 'もし', romaji: 'moshi', meaning: 'Nếu (giả định)',
                examples: [
                    { sentence: '{もし}1[億|おく|Trăm triệu][円|えん|Yên]あったら、[会社|かいしゃ|Công ty]を[作|つく|Tạo]りたいです。', meaning: 'Nếu có 100 triệu yên tôi muốn mở công ty.' },
                    { sentence: '{もし}[雨|あめ|Mưa]が[降|ふ|Rơi]ったら、[行|い|Đi]きません。', meaning: 'Nếu trời mưa tôi sẽ không đi.' },
                    { sentence: '{もし}よかったら、どうぞ。', meaning: 'Nếu được (nếu bạn thích) thì xin mời.' },
                    { sentence: '{もし}[明日|あした|Ngày mai][暇|ひま|Rảnh]なら、[映画|えいが|Phim]を[見|み|Xem]ませんか。', meaning: 'Nếu mai rảnh thì đi xem phim không?' },
                    { sentence: '{もし}[間違|まちが|Sai]っていたら、[教|おし|Dạy]えてください。', meaning: 'Nếu sai thì hãy chỉ cho tôi.' }
                ]
            },
            {
                id: 39, word: 'いくら', romaji: 'ikura', meaning: 'Cho dù...thế nào',
                examples: [
                    { sentence: '{いくら}[安|やす|Rẻ]くても、[買|か|Mua]いません。', meaning: 'Dù rẻ thế nào tôi cũng không mua.' },
                    { sentence: '{いくら}[考|かんが|Suy nghĩ]えても、わかりません。', meaning: 'Dù nghĩ thế nào cũng không ra.' },
                    { sentence: '{いくら}[好|す|Thích]きでも、[食|た|Ăn]べすぎはよくないです。', meaning: 'Dù thích đến mấy, ăn quá nhiều cũng không tốt.' },
                    { sentence: '{いくら}[言|い|Nói]っても、[聞|き|Nghe]きません。', meaning: 'Dù nói thế nào nó cũng không nghe.' },
                    { sentence: '{いくら}[探|さが|Tìm]しても、[見|み|Thấy]つかりません。', meaning: 'Dù tìm thế nào cũng không thấy.' }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Nhấn mạnh & Xác nhận',
        items: [
            {
                id: 40, word: '特に', romaji: 'tokuni', meaning: 'Đặc biệt là',
                examples: [
                    { sentence: '[日本|にほん|Nhật Bản][料理|りょうり|Món ăn]の[中|なか|Trong]で、{特に}[寿司|すし|Sushi]が[好|す|Thích]きです。', meaning: 'Trong các món Nhật, tôi đặc biệt thích Sushi.' },
                    { sentence: '[京都|きょうと|Kyoto]は{特に}[秋|あき|Mùa thu]がきれいです。', meaning: 'Kyoto đặc biệt đẹp vào mùa thu.' },
                    { sentence: '{特に}[問題|もんだい|Vấn đề]はありません。', meaning: 'Không có vấn đề gì đặc biệt.' },
                    { sentence: '[スポーツ|スポーツ|Thể thao]はなんでも[好|す|Thích]きですが、{特に}サッカーが[好|す|Thích]きです。', meaning: 'Thể thao gì tôi cũng thích nhưng đặc biệt thích bóng đá.' },
                    { sentence: 'この[店|みせ|Cửa hàng]のパンは{特に}おいしいです。', meaning: 'Bánh mì cửa hàng này đặc biệt ngon.' }
                ]
            },
            {
                id: 41, word: '実は', romaji: 'jitsuwa', meaning: 'Thực ra là / Nói thật là',
                examples: [
                    { sentence: '{実は}、ダイエットをしています。', meaning: 'Thực ra tôi đang ăn kiêng.' },
                    { sentence: '{実は}、[明日|あした|Ngày mai][引|ひ|Dẫn]っ[越|こ|Vượt]しします。', meaning: 'Thực ra ngày mai tôi chuyển nhà.' },
                    { sentence: '{実は}、[結婚|けっこん|Kết hôn]することになりました。', meaning: 'Nói thật là tôi sắp kết hôn.' },
                    { sentence: '{実は}、よくわからないんです。', meaning: 'Thực ra là tôi không hiểu rõ lắm.' },
                    { sentence: '{実は}、[彼|かれ|Anh ấy]が[犯人|はんにん|Thủ phạm]です。', meaning: 'Thực ra anh ta là thủ phạm.' }
                ]
            },
            {
                id: 42, word: '本当に', romaji: 'hontouni', meaning: 'Thực sự / Thật sự',
                examples: [
                    { sentence: '{本当に}ありがとうございます。', meaning: 'Thật sự cảm ơn bạn.' },
                    { sentence: '{本当に}おいしいですね。', meaning: 'Thật sự ngon nhỉ.' },
                    { sentence: '{本当に}びっくりしました。', meaning: 'Tôi thực sự bất ngờ.' },
                    { sentence: 'それは{本当に}[安|やす|Rẻ]いですね。', meaning: 'Cái đó thực sự rẻ nhỉ.' },
                    { sentence: '[彼|かれ|Anh ấy]は{本当に}[来|き|Đến]ますか。', meaning: 'Anh ấy thực sự sẽ đến chứ?' }
                ]
            },
            {
                id: 43, word: 'もちろん', romaji: 'mochiron', meaning: 'Tất nhiên / Đương nhiên',
                examples: [
                    { sentence: '[試合|しあい|Trận đấu]は{もちろん}ブラジルが[勝|か|Thắng]つと[思|おも|Nghĩ]います。', meaning: 'Trận đấu thì đương nhiên tôi nghĩ Brazil sẽ thắng.' },
                    { sentence: '[明日|あした|Ngày mai]パーティーに[行|い|Đi]ますか。...ええ、{もちろん}[行|い|Đi]きます。', meaning: 'Mai đi tiệc không? ...Ừ, tất nhiên là đi.' },
                    { sentence: '{もちろん}いいですよ。', meaning: 'Tất nhiên là được rồi.' },
                    { sentence: '{もちろん}[覚|おぼ|Nhớ]えています。', meaning: 'Tất nhiên là tôi nhớ.' },
                    { sentence: '{もちろん}できます。', meaning: 'Tất nhiên là tôi làm được.' }
                ]
            }
        ]
    }
];
