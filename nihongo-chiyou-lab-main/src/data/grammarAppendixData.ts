export interface GrammarExample {
    jp: string;
    vn: string;
}

export interface GrammarItem {
    id: number;
    level: 'N5' | 'N4';
    group: string;
    label: string; // The specific grammar point e.g. "~です"
    meaning: string;
    examples: GrammarExample[];
    note?: string; // For extra context like "Groups 1, 2, 3"
}

export const grammarAppendixData: GrammarItem[] = [
    // --- N5: Đại từ & Chỉ từ ---
    {
        id: 1,
        level: 'N5',
        group: 'Đại từ & Chỉ từ',
        label: 'これ / それ / あれ',
        meaning: 'Cái này / Cái đó / Cái kia (Vật)',
        examples: [
            { jp: 'これは{本|ほん}です。', vn: 'Đây là quyển sách.' },
            { jp: 'それは{私|わたし}の{傘|かさ}です。', vn: 'Đó là cái ô của tôi.' },
            { jp: 'あれは{病院|びょういん}です。', vn: 'Kia là bệnh viện.' },
            { jp: 'これは{何|なん}ですか。', vn: 'Đây là cái gì?' },
            { jp: 'それは{辞書|じしょ}ですか。', vn: 'Đó có phải là từ điển không?' },
            { jp: 'あれは{誰|だれ}の{鞄|かばん}ですか。', vn: 'Kia là cặp của ai?' },
            { jp: 'これはコンビューターです。', vn: 'Đây là máy vi tính.' },
            { jp: 'それは{美味|おい}しいですね。', vn: 'Cái đó ngon nhỉ.' },
            { jp: 'あれは{富士山|ふじさん}です。', vn: 'Kia là núi Phú Sĩ.' },
            { jp: 'これは{私|わたし}の{鍵|かぎ}じゃありません。', vn: 'Đây không phải là chìa khóa của tôi.' }

        ]
    },
    {
        id: 2,
        level: 'N5',
        group: 'Đại từ & Chỉ từ',
        label: 'この / その / あの + Noun',
        meaning: 'Cái... này / đó / kia (Bổ nghĩa cho Danh từ)',
        examples: [
            { jp: 'この{本|ほん}は{面白|おもしろ}いです。', vn: 'Quyển sách này thú vị.' },
            { jp: 'その{人|ひと}は{誰|だれ}ですか。', vn: 'Người đó là ai?' },
            { jp: 'あの{方|かた}はずっとあそこにいます。', vn: 'Vị kia ở đằng kia suốt.' },
            { jp: 'この{靴|くつ}はいくらですか。', vn: 'Đôi giày này bao nhiêu tiền?' },
            { jp: 'そのカメラを{見|み}せてください。', vn: 'Hãy cho tôi xem cái máy ảnh đó.' },
            { jp: 'あのレストランは{有名|ゆうめい}です。', vn: 'Nhà hàng kia nổi tiếng.' },
            { jp: 'このペンを{使|つか}ってください。', vn: 'Hãy dùng cây bút này.' },
            { jp: 'その{話|はなし}は{本当|ほんとう}ですか。', vn: 'Câu chuyện đó có thật không?' },
            { jp: 'あの{建物|たてもの}は{図書館|としょかん}です。', vn: 'Tòa nhà kia là thư viện.' },
            { jp: 'この{猫|ねこ}は{可愛|かわい}いです。', vn: 'Con mèo này dễ thương.' }

        ]
    },
    {
        id: 3,
        level: 'N5',
        group: 'Đại từ & Chỉ từ',
        label: 'ここ / そこ / あそこ',
        meaning: 'Ở đây / Ở đó / Ở kia (Địa điểm)',
        examples: [
            { jp: 'ここは{教室|きょうしつ}です。', vn: 'Đây là lớp học.' },
            { jp: 'そこはトイレです。', vn: 'Đó là nhà vệ sinh.' },
            { jp: 'あそこは{食堂|しょくどう}です。', vn: 'Kia là nhà ăn.' },
            { jp: '{受付|うけつけ}はここです。', vn: 'Quầy lễ tân ở đây.' },
            { jp: '{電話|でんわ}はそこにあります。', vn: 'Điện thoại ở đó.' },
            { jp: '{駅|えき}はあそこです。', vn: 'Nhà ga ở đằng kia.' },
            { jp: 'ここは{静|しず}かですね。', vn: 'Ở đây yên tĩnh nhỉ.' },
            { jp: 'そこ{座|すわ}ってもいいですか。', vn: 'Tôi ngồi đó được không?' },
            { jp: 'あそこで{休|やす}みましょう。', vn: 'Chúng ta nghỉ ở đằng kia đi.' },
            { jp: '{会議室|かいぎしつ}はここじゃありません。', vn: 'Phòng họp không phải ở đây.' }
        ]
    },
    {
        id: 4,
        level: 'N5',
        group: 'Đại từ & Chỉ từ',
        label: 'どれ / どの',
        meaning: 'Cái nào / [Danh từ] nào',
        examples: [
            { jp: 'あなたの{傘|かさ}はどれですか。', vn: 'Cái ô của bạn là cái nào?' },
            { jp: '{林|はやし}さんの{机|つくえ}はどれですか。', vn: 'Bàn của anh Hayashi là cái nào?' },
            { jp: '{一番|いちばん}{美味|おい}しい{料理|りょうり}はどれですか。', vn: 'Món ngon nhất là món nào?' },
            { jp: 'どの{人|ひと}が{佐藤|さとう}さんですか。', vn: 'Người nào là anh Sato?' },
            { jp: 'どのバスが{京都|きょうと}へ{行|い}きますか。', vn: 'Xe buýt nào đi Kyoto?' },
            { jp: 'どの{本|ほん}を{読|よ}みましたか。', vn: 'Bạn đã đọc quyển sách nào?' },
            { jp: '{正解|せいかい}はどれですか。', vn: 'Đáp án đúng là cái nào?' },
            { jp: 'どの{果物|くだもの}が{好|す}きですか。', vn: 'Bạn thích loại quả nào?' },
            { jp: 'どれでもいいです。', vn: 'Cái nào cũng được.' },
            { jp: 'どの{道|みち}が{近|ちか}いですか。', vn: 'Con đường nào gần hơn?' }
        ]
    },
    {
        id: 5,
        level: 'N5',
        group: 'Đại từ & Chỉ từ',
        label: '～の (Sở hữu)',
        meaning: 'Của... (Sở hữu cách, thay thế danh từ)',
        examples: [
            { jp: 'これは{私|わたし}の{本|ほん}です。', vn: 'Đây là sách của tôi.' },
            { jp: 'それは{誰|だれ}の{鞄|かばん}ですか。', vn: 'Đó là cặp của ai?' },
            { jp: 'あれは{先生|せんせい}の{車|くるま}です。', vn: 'Kia là xe của thầy giáo.' },
            { jp: 'この{傘|かさ}はあなたのですか。', vn: 'Cái ô này là của bạn phải không?' },
            { jp: 'いいえ、わたしのではありません。', vn: 'Không, không phải của tôi.' },
            { jp: 'それは{会社|かいしゃ}のですが、{私|わたし}のです。', vn: 'Cái đó là của công ty, nhưng là (đồ) của tôi.' },
            { jp: 'この{靴|くつ}はイタリアのです。', vn: 'Đôi giày này là (giày) của Ý.' },
            { jp: 'あのカメラは{兄|あに}のです。', vn: 'Cái máy ảnh kia là của anh trai.' },
            { jp: '{日本語|にほんご}の{本|ほん}はどれですか。', vn: 'Sách tiếng Nhật là quyển nào?' },
            { jp: '{私|わたし}の{部屋|へや}は2{階|かい}のです。', vn: 'Phòng của tôi là phòng ở tầng 2.' }
        ]
    },
    // --- N5: Cấu trúc câu cơ bản & Trợ từ ---
    {
        id: 6,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜です / 〜じゃありません',
        meaning: 'Là... / Không phải là...',
        examples: [
            { jp: '{私|わたし}は{学生|がくせい}です。', vn: 'Tôi là sinh viên.' },
            { jp: '{田中|たなか}さんは{会社員|かいしゃいん}です。', vn: 'Anh Tanaka là nhân viên công ty.' },
            { jp: '{山田|やまだ}さんは{先生|せんせい}じゃありません。', vn: 'Chị Yamada không phải là giáo viên.' },
            { jp: '{今日|きょう}は{日曜日|にちようび}です。', vn: 'Hôm nay là chủ nhật.' },
            { jp: '{明日|あした}は{雨|あめ}じゃありません。', vn: 'Ngày mai trời không mưa.' },
            { jp: 'これは{私|わたし}の{本|ほん}じゃありません。', vn: 'Đây không phải là sách của tôi.' },
            { jp: '{彼|かれ}は{日本人|にほんじん}です。', vn: 'Anh ấy là người Nhật.' },
            { jp: '{彼女|かのじょ}は{医者|いしゃ}じゃありません。', vn: 'Cô ấy không phải là bác sĩ.' },
            { jp: 'ここは{図書館|としょかん}です。', vn: 'Đây là thư viện.' },
            { jp: 'そこは{入|い}り{口|ぐち}じゃありません。', vn: 'Đó không phải là lối vào.' }
        ]
    },
    {
        id: 7,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜か (Câu hỏi)',
        meaning: 'Hỏi xác nhận hoặc nghi vấn',
        examples: [
            { jp: 'お{元気|げんき}ですか。', vn: 'Bạn có khỏe không?' },
            { jp: 'これは{何|なん}ですか。', vn: 'Đây là cái gì?' },
            { jp: 'あなたは{学生|がくせい}ですか。', vn: 'Bạn là học sinh phải không?' },
            { jp: '{今|いま}{何時|なんじ}ですか。', vn: 'Bây giờ là mấy giờ?' },
            { jp: 'トイレはどこですか。', vn: 'Nhà vệ sinh ở đâu?' },
            { jp: 'あの{人|ひと}は{誰|だれ}ですか。', vn: 'Người kia là ai?' },
            { jp: 'コーヒーを{飲|の}みますか。', vn: 'Bạn có uống cà phê không?' },
            { jp: '{明日|あした}{学校|がっこう}へ{行|い}きますか。', vn: 'Ngày mai bạn có đi học không?' },
            { jp: 'それは{本当|ほんとう}ですか。', vn: 'Điều đó có thật không?' },
            { jp: '{理解|りかい}しましたか。', vn: 'Bạn đã hiểu chưa?' }
        ]
    },
    {
        id: 8,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: 'あります / います',
        meaning: 'Có (vật) / Có (người/động vật) (Sự tồn tại)',
        examples: [
            { jp: '{机|つくえ}の{上|うえ}に{本|ほん}があります。', vn: 'Trên bàn có quyển sách.' },
            { jp: 'あそこにコンビニがあります。', vn: 'Ở đằng kia có cửa hàng tiện lợi.' },
            { jp: '{教室|きょうしつ}に{学生|がくせい}がいます。', vn: 'Trong lớp có học sinh.' },
            { jp: '{庭|にわ}に{犬|いぬ}がいます。', vn: 'Trong vườn có con chó.' },
            { jp: '{時間|じかん}はありますか。', vn: 'Bạn có thời gian không?' },
            { jp: '{冷蔵庫|れいぞうこ}に{卵|たまご}があります。', vn: 'Trong tủ lạnh có trứng.' },
            { jp: '{事務所|じむしょ}に{田中|たなか}さんがいます。', vn: 'Anh Tanaka có ở văn phòng.' },
            { jp: '{兄弟|きょうだい}がいますか。', vn: 'Bạn có anh chị em không?' },
            { jp: 'お{金|かね}がありません。', vn: 'Tôi không có tiền.' },
            { jp: '{猫|ねこ}はいません。', vn: 'Không có con mèo nào.' }
        ]
    },
    {
        id: 9,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜も (Cũng)',
        meaning: 'Đồng tình, liệt kê thêm',
        examples: [
            { jp: '{私|わたし}も{学生|がくせい}です。', vn: 'Tôi cũng là học sinh.' },
            { jp: 'これも{美味|おい}しいです。', vn: 'Cái này cũng ngon.' },
            { jp: '{田中|たなか}さんも{来|き}ます。', vn: 'Anh Tanaka cũng đến.' },
            { jp: '{昨日|きのう}も{雨|あめ}でした。', vn: 'Hôm qua trời cũng mưa.' },
            { jp: '{英語|えいご}も{話|はな}せます。', vn: 'Tôi cũng nói được tiếng Anh.' },
            { jp: '{日曜日|にちようび}も{働|はたら}きます。', vn: 'Chủ nhật tôi cũng làm việc.' },
            { jp: '{彼|かれ}も{知|し}りません。', vn: 'Anh ấy cũng không biết.' },
            { jp: '{朝|あさ}ごはんも{食|た}べませんでした。', vn: 'Sáng nay tôi cũng chưa ăn gì.' },
            { jp: '{安|やす}いし、{味|あじ}もいいです。', vn: 'Vừa rẻ mà vị cũng ngon.' },
            { jp: '{東京|とうきょう}へも{行|い}きました。', vn: 'Tôi cũng đã đi đến Tokyo.' }
        ]
    },
    {
        id: 10,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜を (Đối tượng)',
        meaning: 'Trợ từ chỉ đối tượng của hành động',
        examples: [
            { jp: 'ご{飯|はん}を{食|た}べます。', vn: 'Tôi ăn cơm.' },
            { jp: '{水|みず}を{飲|の}みます。', vn: 'Tôi uống nước.' },
            { jp: '{本|ほん}を{読|よ}みます。', vn: 'Tôi đọc sách.' },
            { jp: 'テレビを{見|み}ます。', vn: 'Tôi xem tivi.' },
            { jp: '{音楽|おんがく}を{聞|き}きます。', vn: 'Tôi nghe nhạc.' },
            { jp: '{日本語|にほんご}を{勉強|べんきょう}します。', vn: 'Tôi học tiếng Nhật.' },
            { jp: '{手紙|てがみ}を{書|か}きます。', vn: 'Tôi viết thư.' },
            { jp: '{写真|しゃしん}を{撮|と}ります。', vn: 'Tôi chụp ảnh.' },
            { jp: 'タバコを{吸|す}みます。', vn: 'Tôi hút thuốc.' },
            { jp: '{宿題|しゅくだい}をしました。', vn: 'Tôi đã làm bài tập.' }
        ]
    },
    {
        id: 11,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜に / 〜で (Địa điểm)',
        meaning: 'Tại / Ở / Đến (Chỉ địa điểm hành động hoặc tồn tại)',
        examples: [
            { jp: '{学校|がっこう}に{行|い}きます。', vn: 'Tôi đi đến trường (dùng に).' },
            { jp: '{大阪|おおさか}に{住|す}んでいます。', vn: 'Tôi đang sống ở Osaka (dùng に).' },
            { jp: 'ここに{名前|なまえ}を{書|か}いてください。', vn: 'Hãy viết tên vào đây (dùng に).' },
            { jp: '{食堂|しょくどう}でご{飯|はん}を{食|た}べます。', vn: 'Tôi ăn cơm tại nhà ăn (dùng で - hành động).' },
            { jp: '{図書館|としょかん}で{勉強|べんきょう}します。', vn: 'Tôi học ở thư viện (dùng で).' },
            { jp: '{日本|にほん}で{働|はたら}きたいです。', vn: 'Tôi muốn làm việc tại Nhật Bản (dùng で).' },
            { jp: '{駅|えき}で{新聞|しんぶん}を{買|か}いました。', vn: 'Tôi đã mua báo ở nhà ga (dùng で).' },
            { jp: '{部屋|へや}にテレビがあります。', vn: 'Trong phòng có tivi (dùng に - tồn tại).' },
            { jp: '{公園|こうえん}で{会|あ}いましょう。', vn: 'Gặp nhau ở công viên nhé (dùng で).' },
            { jp: '{家|いえ}に{帰|かえ}ります。', vn: 'Tôi về nhà (dùng に).' }
        ]
    },
    {
        id: 12,
        level: 'N5',
        group: 'Cấu trúc & Trợ từ',
        label: '〜から 〜まで',
        meaning: 'Từ... đến... (Thời gian / Địa điểm)',
        examples: [
            { jp: '9{時|じ}から5{時|じ}まで{働|はたら}きます。', vn: 'Tôi làm việc từ 9 giờ đến 5 giờ.' },
            { jp: '{大阪|おおさか}から{東京|とうきょう}まで{新幹線|しんかんせん}で{行|い}きます。', vn: 'Tôi đi Shinkansen từ Osaka đến Tokyo.' },
            { jp: '{月曜日|げつようび}から{金曜日|きんようび}まで{学校|がっこう}です。', vn: 'Tôi đi học từ thứ Hai đến thứ Sáu.' },
            { jp: '{家|いえ}から{会社|かいしゃ}まで1{時間|じかん}かかります。', vn: 'Từ nhà đến công ty mất 1 tiếng.' },
            { jp: 'ここから{駅|えき}まで{近|ちか}いです。', vn: 'Từ đây đến ga thì gần.' },
            { jp: '{会議|かいぎ}は{午後|ごご}2{時|じ}までです。', vn: 'Cuộc họp kéo dài đến 2 giờ chiều.' },
            { jp: '{朝|あさ}から{晩|ばん}まで{雨|あめ}でした。', vn: 'Trời mưa từ sáng đến tối.' },
            { jp: '{何時|なんじ}から{何時|なんじ}までですか。', vn: 'Từ mấy giờ đến mấy giờ vậy?' },
            { jp: '{今日|きょう}から{始|はじ}めます。', vn: 'Tôi sẽ bắt đầu từ hôm nay.' },
            { jp: '{駅|えき}まで{送|おく}ります。', vn: 'Tôi sẽ tiễn bạn đến nhà ga.' }
        ]
    },
    {
        id: 13,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜たいです',
        meaning: 'Muốn làm gì (Ngôi thứ nhất)',
        examples: [
            { jp: '{水|みず}が{飲|の}みたいです。', vn: 'Tôi muốn uống nước.' },
            { jp: '{日本|にほん}へ{行|い}きたいです。', vn: 'Tôi muốn đi Nhật.' },
            { jp: '{新|あたら}しい{靴|くつ}を{買|か}いたいです。', vn: 'Tôi muốn mua giày mới.' },
            { jp: 'あなたに{会|あ}いたいです。', vn: 'Tôi muốn gặp bạn.' },
            { jp: '{映画|えいが}を{見|み}たいです。', vn: 'Tôi muốn xem phim.' },
            { jp: '{早|はや}く{帰|かえ}りたいです。', vn: 'Tôi muốn về sớm.' },
            { jp: '{何|なに}もしたくありません。', vn: 'Tôi không muốn làm gì cả.' },
            { jp: 'お{寿司|すし}が{食|た}べたいです。', vn: 'Tôi muốn ăn sushi.' },
            { jp: 'サッカーがしたいです。', vn: 'Tôi muốn chơi bóng đá.' },
            { jp: '{海|うみ}で{泳|およ}ぎたいです。', vn: 'Tôi muốn bơi ở biển.' }
        ]
    },
    {
        id: 14,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜てください',
        meaning: 'Hãy làm... / Vui lòng làm... (Sai khiến nhẹ nhàng)',
        examples: [
            { jp: 'ちょっと{待|ま}ってください。', vn: 'Vui lòng chờ một chút.' },
            { jp: 'ここに{書|か}いてください。', vn: 'Hãy viết vào đây.' },
            { jp: '{窓|まど}を{開|あ}けてください。', vn: 'Hãy mở cửa sổ giúp tôi.' },
            { jp: 'ゆっくり{話|はな}してください。', vn: 'Hãy nói chậm lại.' },
            { jp: 'これを{見|み}てください。', vn: 'Hãy nhìn cái này.' },
            { jp: '{座|すわ}ってください。', vn: 'Mời ngồi.' },
            { jp: '{気|き}をつけてください。', vn: 'Hãy bảo trọng.' },
            { jp: '{電話|でんわ}してください。', vn: 'Hãy gọi điện cho tôi.' },
            { jp: '{日本語|にほんご}で{話|はな}してください。', vn: 'Hãy nói bằng tiếng Nhật.' },
            { jp: '{写真|しゃしん}を{撮|と}ってください。', vn: 'Hãy chụp ảnh giúp tôi.' }
        ]
    },
    {
        id: 15,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜ないでください',
        meaning: 'Xin đừng làm...',
        examples: [
            { jp: 'ここで{写真|しゃしん}を{撮|と}らないでください。', vn: 'Xin đừng chụp ảnh ở đây.' },
            { jp: 'タバコを{吸|す}わないでください。', vn: 'Xin đừng hút thuốc.' },
            { jp: '{入|はい}らないでください。', vn: 'Xin đừng vào.' },
            { jp: '{忘|わす}れないでください。', vn: 'Xin đừng quên.' },
            { jp: '{心配|しんぱい}しないでください。', vn: 'Xin đừng lo lắng.' },
            { jp: '{窓|まど}を{閉|し}めないでください。', vn: 'Xin đừng đóng cửa sổ.' },
            { jp: 'ここに{車|くるま}を{止|と}めないでください。', vn: 'Xin đừng đậu xe ở đây.' },
            { jp: '{行|い}かないでください。', vn: 'Xin đừng đi.' },
            { jp: '{無理|むり}しないでください。', vn: 'Xin đừng quá sức.' },
            { jp: '{英語|えいご}で{話|はな}さないでください。', vn: 'Xin đừng nói bằng tiếng Anh.' }
        ]
    },
    {
        id: 16,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '～ています',
        meaning: 'Đang làm (Tiếp diễn) / Trạng thái',
        examples: [
            { jp: '{今|いま}、ご{飯|はん}を{食|た}べています。', vn: 'Bây giờ tôi đang ăn cơm.' },
            { jp: '{雨|あめ}が{降|ふ}っています。', vn: 'Trời đang mưa.' },
            { jp: '{田中|たなか}さんを{知|し}っていますか。', vn: 'Bạn có biết anh Tanaka không?' },
            { jp: '{私|わたし}は{大阪|おおさか}に{住|す}んでいます。', vn: 'Tôi đang sống ở Osaka.' },
            { jp: '{彼|かれ}は{結婚|けっこん}しています。', vn: 'Anh ấy đã kết hôn (đang trong trạng thái).' },
            { jp: '{何|なに}をしていますか。', vn: 'Bạn đang làm gì vậy?' },
            { jp: 'バスを{待|ま}っています。', vn: 'Tôi đang đợi xe buýt.' },
            { jp: '{父|ちち}は{働|はたら}いています。', vn: 'Bố tôi đang làm việc.' },
            { jp: 'ドアが{開|あ}いています。', vn: 'Cửa đang mở.' },
            { jp: 'カメラを{持|も}っていますか。', vn: 'Bạn có mang theo máy ảnh không?' }
        ]
    },
    {
        id: 17,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '～てもいいですか',
        meaning: 'Làm... có được không? (Xin phép)',
        examples: [
            { jp: '{写真|しゃしん}を{撮|と}ってもいいですか。', vn: 'Tôi chụp ảnh có được không?' },
            { jp: 'ここに{入|はい}ってもいいですか。', vn: 'Tôi vào đây có được không?' },
            { jp: 'これを{食|た}べてもいいですか。', vn: 'Tôi ăn cái này có được không?' },
            { jp: 'タバコを{吸|す}ってもいいですか。', vn: 'Tôi hút thuốc có được không?' },
            { jp: '{窓|まど}を{開|あ}けてもいいですか。', vn: 'Tôi mở cửa sổ có được không?' },
            { jp: 'テレビを{見|み}てもいいですか。', vn: 'Tôi xem tivi có được không?' },
            { jp: 'この{本|ほん}を{借|か}りてもいいですか。', vn: 'Tôi mượn quyển sách này có được không?' },
            { jp: 'トイレに{行|い}ってもいいですか。', vn: 'Tôi đi vệ sinh có được không?' },
            { jp: 'ここで{遊|あそ}んでもいいですか。', vn: 'Chơi ở đây có được không?' },
            { jp: '{質問|しつもん}してもいいですか。', vn: 'Tôi hỏi có được không?' }
        ]
    },
    {
        id: 18,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜てはいけません',
        meaning: 'Không được làm... (Cấm đoán)',
        examples: [
            { jp: 'ここでタバコを{吸|す}ってはいけません。', vn: 'Không được hút thuốc ở đây.' },
            { jp: '{教室|きょうしつ}で{食|た}べてはいけません。', vn: 'Không được ăn trong lớp học.' },
            { jp: 'お{酒|さけ}を{飲|の}んではいけません。', vn: 'Không được uống rượu.' },
            { jp: 'ここに{入|はい}ってはいけません。', vn: 'Không được vào đây.' },
            { jp: '{写真|しゃしん}を{撮|と}ってはいけません。', vn: 'Không được chụp ảnh.' },
            { jp: '{廊下|ろうか}を{走|はし}ってはいけません。', vn: 'Không được chạy ngoài hành lang.' },
            { jp: '{車|くるま}を{止|と}めてはいけません。', vn: 'Không được đậu xe.' },
            { jp: '{携帯電話|けいたいでんわ}を{使|つか}ってはいけません。', vn: 'Không được sử dụng điện thoại di động.' },
            { jp: '{大声|おおごえ}で{話|はな}してはいけません。', vn: 'Không được nói lớn tiếng.' },
            { jp: 'ゴミを{捨|す}ててはいけません。', vn: 'Không được vứt rác.' }
        ]
    },
    {
        id: 19,
        level: 'N5',
        group: 'Tính từ & So sánh',
        label: '〜が好き / 〜が嫌い',
        meaning: 'Thích / Ghét',
        examples: [
            { jp: '{私|わたし}は{猫|ねこ}が{好|す}きです。', vn: 'Tôi thích mèo.' },
            { jp: '{私|わたし}は{魚|さかな}が{嫌|きら}いです。', vn: 'Tôi ghét cá.' },
            { jp: 'どんなスポーツが{好|す}きですか。', vn: 'Bạn thích môn thể thao nào?' },
            { jp: '{日本語|にほんご}の{勉強|べんきょう}が{好|す}きです。', vn: 'Tôi thích việc học tiếng Nhật.' },
            { jp: 'あの{人|ひと}が{好|す}きですか。', vn: 'Bạn có thích người kia không?' },
            { jp: '{納豆|なっとう}はあまり{好|す}きじゃありません。', vn: 'Tôi không thích Natto lắm.' },
            { jp: '{歌|うた}うことが{大好|だいす}きです。', vn: 'Tôi rất thích hát.' },
            { jp: '{寒|さむ}いのは{嫌|きら}いです。', vn: 'Tôi ghét trời lạnh.' },
            { jp: '{野球|やきゅう}は{好|す}きでも{嫌|きら}いでもありません。', vn: 'Bóng chày thì tôi không thích cũng không ghét.' },
            { jp: '{旅行|りょこう}が{好|す}きですか。', vn: 'Bạn có thích đi du lịch không?' }
        ]
    },
    {
        id: 20,
        level: 'N5',
        group: 'Tính từ & So sánh',
        label: 'AはBより〜',
        meaning: 'A... hơn B (So sánh hơn)',
        examples: [
            { jp: '{中国|ちゅうごく}は{日本|にほん}より{大|おお}きいです。', vn: 'Trung Quốc lớn hơn Nhật Bản.' },
            { jp: '{新幹線|しんかんせん}は{電車|でんしゃ}より{速|はや}いです。', vn: 'Shinkansen nhanh hơn tàu điện thường.' },
            { jp: '{今日|きょう}は{昨日|きのう}より{暑|あつ}いです。', vn: 'Hôm nay nóng hơn hôm qua.' },
            { jp: 'この{本|ほん}はあの{本|ほん}より{高|たか}いです。', vn: 'Quyển sách này đắt hơn quyển kia.' },
            { jp: '{英語|えいご}は{日本語|にほんご}より{難|むずか}しいですか。', vn: 'Tiếng Anh có khó hơn tiếng Nhật không?' },
            { jp: '{北海道|ほっかいどう}は{九州|きゅうしゅう}より{寒|さむ}いです。', vn: 'Hokkaido lạnh hơn Kyushu.' },
            { jp: '{肉|にく}は{魚|さかな}より{好|す}きです。', vn: 'Tôi thích thịt hơn cá.' },
            { jp: '{私|わたし}は{兄|あに}より{背|せ}が{高|たか}いです。', vn: 'Tôi cao hơn anh trai.' },
            { jp: '{車|くるま}はバイクより{便利|べんり}です。', vn: 'Ô tô tiện lợi hơn xe máy.' },
            { jp: 'クラスで{誰|だれ}より{頭|あたま}がいいですか。', vn: 'Trong lớp thông minh hơn ai?' }
        ]
    },
    // --- N4: Các thể động từ nâng cao ---
    {
        id: 1,
        level: 'N4',
        group: 'Các thể động từ',
        label: 'Thể Khả năng (可能形)',
        meaning: 'Có thể làm...',
        examples: [
            { jp: '{私|わたし}は{漢字|かんじ}が{読|よ}めます。', vn: 'Tôi có thể đọc được chữ Hán.' },
            { jp: '{明日|あした}{来|こ}られますか。', vn: 'Ngày mai bạn có thể đến không?' },
            { jp: '{日本語|にほんご}が{話|はな}せます。', vn: 'Tôi có thể nói tiếng Nhật.' },
            { jp: '{納豆|なっとう}が{食|た}べられません。', vn: 'Tôi không thể ăn được Natto.' },
            { jp: '50メートル{泳|およ}げます。', vn: 'Tôi có thể bơi 50 mét.' },
            { jp: '{自転車|じてんしゃ}に{乗|の}れます。', vn: 'Tôi có thể đi xe đạp.' },
            { jp: 'どこでチケットが{買|か}えますか。', vn: 'Có thể mua vé ở đâu?' },
            { jp: 'この{水|みず}は{飲|の}めますか。', vn: 'Nước này có uống được không?' },
            { jp: 'ピアノが{弾|ひ}けます。', vn: 'Tôi có thể chơi piano.' },
            { jp: '{予約|よやく}はネットでできます。', vn: 'Có thể đặt chỗ qua mạng.' }
        ]
    },
    {
        id: 2,
        level: 'N4',
        group: 'Mẫu câu Nguyên nhân & Lý do',
        label: '〜し、〜し',
        meaning: 'Vừa... vừa... / Vì... và vì... (Liệt kê lý do)',
        examples: [
            { jp: '{彼|かれ}は{親切|しんせつ}だし、{頭|あたま}もいいです。', vn: 'Anh ấy vừa tốt bụng, vừa thông minh.' },
            { jp: 'この{店|みせ}は{安|やす}いし、{美味|おい}しいです。', vn: 'Quán này vừa rẻ, vừa ngon.' },
            { jp: '{今日|きょう}は{雨|あめ}だし、お{金|かね}もないから、{出|で}かけません。', vn: 'Hôm nay trời mưa, lại không có tiền nên tôi không ra ngoài.' },
            { jp: '{荷物|にもつ}が{多|おお}いし、{雨|あめ}も{降|ふ}っているし、タクシーで{帰|かえ}りましょう。', vn: 'Hành lý nhiều, trời lại mưa, nên chúng ta về bằng taxi đi.' },
            { jp: '{駅|えき}に{近|ちか}いし、{家賃|やちん}も{安|やす}いです。', vn: 'Vừa gần ga, tiền thuê nhà lại rẻ.' },
            { jp: '{疲|つか}れたし、{眠|ねむ}いし、もう{寝|ね}ます。', vn: 'Vừa mệt, vừa buồn ngủ, nên tôi đi ngủ đây.' },
            { jp: 'デザインもいいし、{色|いろ}もきれいです。', vn: 'Thiết kế đẹp, màu sắc cũng đẹp.' },
            { jp: '{先生|せんせい}は{熱心|ねっしん}だし、{授業|じゅぎょう}も{面白|おもしろ}いです。', vn: 'Thầy giáo nhiệt tình, giờ học cũng thú vị.' },
            { jp: '{野菜|やさい}も{食|た}べるし、{運動|うんどう}もします。', vn: 'Tôi vừa ăn rau, vừa vận động.' },
            { jp: '{給料|きゅうりょう}はいいし、{残業|ざんぎょう}もありません。', vn: 'Lương cao, lại không phải làm thêm giờ.' }
        ]
    },
    {
        id: 3,
        level: 'N4',
        group: 'Cho & Nhận',
        label: '〜てあげる / 〜てくれる / 〜てもらう',
        meaning: 'Làm cho ai / Ai làm cho mình / Được ai làm cho',
        examples: [
            { jp: '{彼女|かのじょ}にプレゼントを{買|か}ってあげました。', vn: 'Tôi đã mua quà cho cô ấy (tôi làm cho người khác).' },
            { jp: '{友達|ともだち}が{荷物|にもつ}を{持|も}ってくれました。', vn: 'Bạn tôi đã xách hành lý giúp tôi (người khác làm cho tôi).' },
            { jp: '{田中|たなか}さんに{日本語|にほんご}を{教|おし}えてもらいました。', vn: 'Tôi được anh Tanaka dạy tiếng Nhật cho (nhận hành động từ người khác).' },
            { jp: '{母|はは}に{料理|りょうり}を{作|つく}ってあげます。', vn: 'Tôi nấu ăn cho mẹ.' },
            { jp: 'おじいさんが{道|みち}を{教|おし}えてくれました。', vn: 'Ông lão đã chỉ đường cho tôi.' },
            { jp: '{先生|せんせい}に{本|ほん}を{貸|か}してもらいました。', vn: 'Tôi được thầy giáo cho mượn sách.' },
            { jp: '{傘|かさ}を{貸|か}してあげましょうか。', vn: 'Tôi cho bạn mượn ô nhé?' },
            { jp: '{父|ちち}が{車|くるま}で{送|おく}ってくれました。', vn: 'Bố đã lái xe đưa tôi (đi/về).' },
            { jp: '{誰|だれ}に{直|なお}してもらったんですか。', vn: 'Bạn đã nhờ ai sửa cho vậy?' },
            { jp: '{犬|いぬ}に{餌|えさ}をやってください（あげてください）。', vn: 'Hãy cho chó ăn đi.' }
        ]
    },
    {
        id: 4,
        level: 'N4',
        group: 'Lời khuyên & Dự định',
        label: '〜ほうがいいです',
        meaning: 'Nên... / Không nên... (Lời khuyên)',
        examples: [
            { jp: 'タバコは{辞|や}めたほうがいいです。', vn: 'Bạn nên bỏ thuốc lá đi.' },
            { jp: 'もっと{野菜|やさい}を{食|た}べたほうがいいですよ。', vn: 'Bạn nên ăn nhiều rau hơn.' },
            { jp: '{今日|きょう}は{早|はや}く{帰|かえ}ったほうがいいです。', vn: 'Hôm nay nên về sớm thì hơn.' },
            { jp: '{熱|ねつ}があるなら、{行|い}かないほうがいいです。', vn: 'Nếu bị sốt thì không nên đi.' },
            { jp: '{無理|むり}しないほうがいいです。', vn: 'Không nên quá sức.' },
            { jp: 'その{本|ほん}は{読|よ}まないほうがいいです。', vn: 'Không nên đọc quyển sách đó.' },
            { jp: '{病院|びょういん}へ{行|い}ったほうがいいです。', vn: 'Nên đi bệnh viện.' },
            { jp: 'あまりお{酒|さけ}を{飲|の}まないほうがいいです。', vn: 'Không nên uống nhiều rượu.' },
            { jp: '{事前|じぜん}に{予約|よやく}したほうがいいですか。', vn: 'Có nên đặt chỗ trước không?' },
            { jp: '{彼|かれ}に{相談|そうだん}したほうがいいです。', vn: 'Nên thảo luận với anh ấy.' }
        ]
    },
    {
        id: 5,
        level: 'N4',
        group: 'Điều kiện',
        label: '〜たら',
        meaning: 'Nếu... / Sau khi... (Điều kiện giả định/xác định)',
        examples: [
            { jp: '{雨|あめ}が{降|ふ}ったら、{行|い}きません。', vn: 'Nếu trời mưa thì tôi sẽ không đi.' },
            { jp: 'お{金|かね}があったら、{旅行|りょこう}したいです。', vn: 'Nếu có tiền, tôi muốn đi du lịch.' },
            { jp: '{駅|えき}に{着|つ}いたら、{電話|でんわ}してください。', vn: 'Sau khi đến nhà ga, hãy gọi điện cho tôi.' },
            { jp: '{夏休|なつやす}みになったら、{国|くに}へ{帰|かえ}ります。', vn: 'Khi nghỉ hè, tôi sẽ về nước.' },
            { jp: '{安|やす}かったら、{買|か}います。', vn: 'Nếu rẻ thì tôi sẽ mua.' },
            { jp: '{暇|ひま}だったら、{遊|あそ}びに{来|き}てください。', vn: 'Nếu rảnh thì hãy đến chơi nhé.' },
            { jp: '{薬|くすり}を{飲|の}んだら、{治|なお}りました。', vn: 'Sau khi uống thuốc thì đã khỏi.' },
            { jp: '8{時|じ}になったら、{出発|しゅっぱつ}しましょう。', vn: 'Đến 8 giờ thì chúng ta xuất phát nhé.' },
            { jp: 'わからなかったら、{聞|き}いてください。', vn: 'Nếu không hiểu thì hãy hỏi.' },
            { jp: '{日本|にほん}へ{行|い}ったら、{着物|きもの}を{着|き}たいです。', vn: 'Nếu đi Nhật, tôi muốn mặc Kimono.' }
        ]
    },
    {
        id: 6,
        level: 'N4',
        group: 'Phỏng đoán',
        label: '〜そうです (Dạng vẻ)',
        meaning: 'Trông có vẻ... / Sắp sửa...',
        examples: [
            { jp: '{雨|あめ}が{降|ふ}りそうです。', vn: 'Trời trông có vẻ sắp mưa.' },
            { jp: 'このケーキは{美味|おい}しそうです。', vn: 'Cái bánh này trông ngon quá.' },
            { jp: '{彼|かれ}は{忙|いそが}しそうです。', vn: 'Anh ấy trông có vẻ bận rộn.' },
            { jp: 'ボタンが{取|と}れそうです。', vn: 'Cái cúc áo sắp tuột ra rồi.' },
            { jp: 'この{荷物|にもつ}は{重|おも}そうです。', vn: 'Hành lý này trông có vẻ nặng.' },
            { jp: '{元気|げんき}そうですね。', vn: 'Trông bạn khỏe nhỉ.' },
            { jp: '{楽|たの}しそうに{遊|あそ}んでいます。', vn: 'Đang chơi đùa trông rất vui vẻ.' },
            { jp: 'その{映画|えいが}は{面白|おもしろ}そうです。', vn: 'Bộ phim đó có vẻ thú vị.' },
            { jp: '{袋|ふくろ}が{破|やぶ}れそうです。', vn: 'Cái túi sắp rách rồi.' },
            { jp: '{子供|こども}が{泣|な}きそうです。', vn: 'Đứa trẻ trông như sắp khóc.' }
        ]
    },
    {
        id: 7,
        level: 'N4',
        group: 'Kính ngữ',
        label: 'Tôn kính ngữ & Khiêm nhường ngữ',
        meaning: 'Kính ngữ cơ bản',
        examples: [
            { jp: '{社長|しゃちょう}はもう{帰|かえ}られました。（{尊|そん}）', vn: 'Giám đốc đã về rồi ạ.' },
            { jp: 'お{名前|なまえ}は{何|なん}とおっしゃいますか。（{尊|そん}）', vn: 'Ngài tên là gì ạ?' },
            { jp: '{召|め}し{上|あ}がってください。（{尊|そん}）', vn: 'Xin mời dùng bữa.' },
            { jp: 'ご{覧|らん}になりましたか。（{尊|そん}）', vn: 'Ngài đã xem chưa ạ?' },
            { jp: '{私|わたし}が{参|まい}ります。（{謙|けん}）', vn: 'Tôi sẽ đi (khiêm nhường).' },
            { jp: '{重|おも}い{荷物|にもつ}をお{持|も}ちします。（{謙|けん}）', vn: 'Tôi xin mang hành lý nặng giúp ngài.' },
            { jp: '{先生|せんせい}に{本|ほん}をいただきました。（{謙|けん}）', vn: 'Tôi đã nhận sách từ thầy giáo.' },
            { jp: '{明日|あした}、お{目|め}にかかります。（{謙|けん}）', vn: 'Ngày mai tôi sẽ gặp ngài.' },
            { jp: 'お{待|ま}ちしております。（{謙|けん}）', vn: 'Tôi đang đợi ngài.' },
            { jp: 'よろしくお{願|ねが}いいたします。（{謙|けん}）', vn: 'Xin nhờ ngài giúp đỡ.' }
        ]
    },
    // --- N5: Tiếp tục ---
    {
        id: 21,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '[Noun] がほしいです',
        meaning: 'Muốn có [Danh từ]',
        examples: [
            { jp: '{私|わたし}は{新|あたら}しい{車|くるま}がほしいです。', vn: 'Tôi muốn có một chiếc xe hơi mới.' },
            { jp: 'いい{友達|ともだち}がほしいです。', vn: 'Tôi muốn có những người bạn tốt.' },
            { jp: '{時間|じかん}とお{金|かね}がほしいです。', vn: 'Tôi muốn có thời gian và tiền bạc.' },
            { jp: 'あなたは{今|いま}{何|なに}が{一番|いちばん}ほしいですか。', vn: 'Bây giờ bạn muốn có cái gì nhất?' },
            { jp: '{何|なに}もほしくないです。', vn: 'Tôi không muốn có gì cả.' },
            { jp: '{誕生日|たんじょうび}にカメラがほしいです。', vn: 'Tôi muốn có máy ảnh vào ngày sinh nhật.' },
            { jp: '{平和|へいわ}な{世界|せかい}がほしいです。', vn: 'Tôi muốn có một thế giới hòa bình.' },
            { jp: '{彼女|かのじょ}がほしいです。', vn: 'Tôi muốn có bạn gái.' },
            { jp: '{冷|つめ}たい{水|みず}がほしいです。', vn: 'Tôi muốn có nước lạnh.' },
            { jp: '{休|やす}みがほしいです。', vn: 'Tôi muốn có ngày nghỉ.' }
        ]
    },
    {
        id: 22,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜なります',
        meaning: 'Trở nên / Trở thành (Sự thay đổi)',
        examples: [
            { jp: '{来年|らいねん}２０{歳|さい}になります。', vn: 'Sang năm tôi sẽ tròn 20 tuổi.' },
            { jp: '{元気|げんき}になりました。', vn: 'Tôi đã khỏe lại rồi.' },
            { jp: '{暗|くら}くなりました。', vn: 'Trời đã tối rồi.' },
            { jp: '{部屋|へや}がきれいになりました。', vn: 'Căn phòng đã trở nên sạch sẽ.' },
            { jp: '{日本語|にほんご}が{上手|じょうず}になりたいです。', vn: 'Tôi muốn trở nên giỏi tiếng Nhật.' },
            { jp: '{将来|しょうらい}{医者|いしゃ}になります。', vn: 'Tương lai tôi sẽ trở thành bác sĩ.' },
            { jp: '{背|せ}が{高|たか}くなりましたね。', vn: 'Bạn đã cao lên nhỉ.' },
            { jp: '{涼|すず}しくなりました。', vn: 'Trời đã trở nên mát mẻ.' },
            { jp: '{部長|ぶちょう}になりました。', vn: 'Anh ấy đã trở thành trưởng phòng.' },
            { jp: '{静|しず}かになりました。', vn: 'Trở nên yên tĩnh.' }
        ]
    },
    {
        id: 23,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜へ行きます/来ます/帰ります',
        meaning: 'Đi / Đến / Về (Di chuyển)',
        examples: [
            { jp: '{明日|あした}{東京|とうきょう}へ{行|い}きます。', vn: 'Ngày mai tôi sẽ đi Tokyo.' },
            { jp: '{去年|きょねん}{日本|にほん}へ{来|き}ました。', vn: 'Tôi đã đến Nhật Bản vào năm ngoái.' },
            { jp: '６{時|じ}にうちへ{帰|かえ}ります。', vn: 'Tôi về nhà lúc 6 giờ.' },
            { jp: 'どこへも{行|い}きませんでした。', vn: 'Tôi đã không đi đâu cả.' },
            { jp: 'タクシーで{空港|くうこう}へ{行|い}きます。', vn: 'Tôi đi taxi đến sân bay.' },
            { jp: 'いつ{国|くに}へ{帰|かえ}りますか。', vn: 'Khi nào bạn về nước?' },
            { jp: '{友達|ともだち}が{遊|あそ}びに{来|き}ました。', vn: 'Bạn tôi đã đến chơi.' },
            { jp: '{歩|ある}いて{学校|がっこう}へ{行|い}きます。', vn: 'Tôi đi bộ đến trường.' },
            { jp: '{船|ふね}でアメリカへ{行|い}きました。', vn: 'Tôi đã đi Mỹ bằng tàu thủy.' },
            { jp: '{彼|かれ}と{一緒|いっしょ}に{帰|かえ}りました。', vn: 'Tôi đã về cùng với anh ấy.' }
        ]
    },
    {
        id: 24,
        level: 'N5',
        group: 'Cho & Nhận',
        label: 'あげます / もらいます / くれます',
        meaning: 'Cho (tặng) / Nhận / (Ai đó) Cho mình',
        examples: [
            { jp: '{私|わたし}は{彼|かれ}にチョコをあげました。', vn: 'Tôi đã tặng sô cô la cho anh ấy.' },
            { jp: '{母|はは}に{花|はな}をあげます。', vn: 'Tôi sẽ tặng hoa cho mẹ.' },
            { jp: '{誕生日|たんじょうび}に{何|なに}をもらいましたか。', vn: 'Sinh nhật bạn đã nhận được gì?' },
            { jp: '{父|ちち}に{時計|とけい}をもらいました。', vn: 'Tôi được bố tặng đồng hồ.' },
            { jp: '{彼女|かのじょ}は{私|わたし}に{本|ほん}をくれました。', vn: 'Cô ấy đã tặng sách cho tôi.' },
            { jp: '{佐藤|さとう}さんはプレゼントをくれましたか。', vn: 'Anh Sato có tặng quà cho bạn không?' },
            { jp: '{誰|だれ}にあげますか。', vn: 'Bạn sẽ tặng cho ai?' },
            { jp: '{先生|せんせい}から{辞書|じしょ}をもらいました。', vn: 'Tôi đã nhận từ điển từ thầy giáo.' },
            { jp: '{山田|やまだ}さんは{妹|いもうと}にお{菓子|かし}をあげました。', vn: 'Chị Yamada đã cho em gái kẹo.' },
            { jp: 'これは{父|ちち}がくれたペンです。', vn: 'Đây là cái bút bố đã cho tôi.' }
        ]
    },
    {
        id: 25,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜ませんか',
        meaning: 'Cùng làm... không? (Mời rủ)',
        examples: [
            { jp: '{一緒|いっしょ}に{映画|えいが}を{見|み}ませんか。', vn: 'Cùng đi xem phim không?' },
            { jp: '{今晩|こんばん}、{食事|しょくじ}しませんか。', vn: 'Tối nay cùng đi ăn không?' },
            { jp: '{日曜日|にちようび}、テニスをしませんか。', vn: 'Chủ nhật cùng chơi quần vợt không?' },
            { jp: 'ちょっと{休|やす}みませんか。', vn: 'Cùng nghỉ một chút nhé?' },
            { jp: '{明日|あした}、{買|か}い{物|もの}に{行|い}きませんか。', vn: 'Ngày mai cùng đi mua sắm không?' },
            { jp: 'お{茶|ちゃ}を{飲|の}みませんか。', vn: 'Cùng uống trà không?' },
            { jp: '{公園|こうえん}を{散歩|さんぽ}しませんか。', vn: 'Cùng đi dạo công viên không?' },
            { jp: 'カラオケに{行|い}きませんか。', vn: 'Cùng đi hát karaoke không?' },
            { jp: '{昼|ひる}ごはんを{食|た}べませんか。', vn: 'Cùng ăn trưa không?' },
            { jp: '{海|うみ}へ{行|い}きませんか。', vn: 'Cùng đi biển không?' }
        ]
    },
    {
        id: 26,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜て、〜て',
        meaning: 'Làm A, rồi làm B (Nối hành động)',
        examples: [
            { jp: '{朝|あさ}{起|お}きて、{朝|あさ}ごはんを{食|た}べます。', vn: 'Sáng tôi thức dậy rồi ăn sáng.' },
            { jp: '{昨日|きのう}はデパートへ{行|い}って、{買|か}い{物|もの}をしました。', vn: 'Hôm qua tôi đi bách hóa rồi mua sắm.' },
            { jp: '{図書館|としょかん}へ{行|い}って、{本|ほん}を{借|か}りました。', vn: 'Tôi đến thư viện rồi mượn sách.' },
            { jp: '{手|て}を{洗|あら}って、ご{飯|はん}を{食|た}べます。', vn: 'Tôi rửa tay rồi ăn cơm.' },
            { jp: '{仕事|しごと}を{終|お}わって、{飲|の}みに{行|い}きました。', vn: 'Tôi làm xong việc rồi đi uống.' },
            { jp: 'テレビを{見|み}て、{寝|ね}ました。', vn: 'Tôi xem tivi rồi ngủ.' },
            { jp: 'シャワーを{浴|あ}びて、{歯|は}を{磨|みが}きます。', vn: 'Tôi tắm vòi sen rồi đánh răng.' },
            { jp: '{電話|でんわ}をかけて、{友達|ともだち}と{話|はな}しました。', vn: 'Tôi gọi điện thoại rồi nói chuyện với bạn.' },
            { jp: '{家|いえ}に{帰|かえ}って、{宿題|しゅくだい}をします。', vn: 'Tôi về nhà rồi làm bài tập.' },
            { jp: '5{時|じ}に{終|お}わって、すぐ{帰|かえ}ります。', vn: '5 giờ kết thúc rồi tôi về ngay.' }
        ]
    },
    {
        id: 27,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜てから',
        meaning: 'Sau khi làm...',
        examples: [
            { jp: '{手|て}を{洗|あら}ってから、{食|た}べます。', vn: 'Sau khi rửa tay, tôi sẽ ăn.' },
            { jp: '{国|くに}へ{帰|かえ}ってから、{父|ちち}の{会社|かいしゃ}で{働|はたら}きます。', vn: 'Sau khi về nước, tôi sẽ làm việc ở công ty của bố.' },
            { jp: '{仕事|しごと}が{終|お}わってから、{飲|の}みに{行|い}きましょう。', vn: 'Sau khi xong việc, chúng ta đi uống nhé.' },
            { jp: '{説明|せつめい}を{聞|き}いてから、{質問|しつもん}してください。', vn: 'Sau khi nghe giải thích, hãy đặt câu hỏi.' },
            { jp: '{駅|えき}に{着|つ}いてから、{電話|でんわ}しました。', vn: 'Sau khi đến ga, tôi đã gọi điện.' },
            { jp: 'ご{飯|はん}を{食|た}べてから、{薬|くすり}を{飲|の}みます。', vn: 'Sau khi ăn cơm, tôi uống thuốc.' },
            { jp: 'よく{考|かんが}えてから、{答|こた}えてください。', vn: 'Sau khi suy nghĩ kỹ, hãy trả lời.' },
            { jp: '{日本|にほん}へ{来|き}てから、3{年|ねん}になります。', vn: 'Sau khi đến Nhật đã được 3 năm.' },
            { jp: 'あの{映画|えいが}を{見|み}てから、{彼|かれ}が{好|す}きになりました。', vn: 'Sau khi xem phim đó, tôi trở nên thích anh ấy.' },
            { jp: '{確認|かくにん}してから、{連絡|れんらく}します。', vn: 'Sau khi xác nhận, tôi sẽ liên lạc.' }
        ]
    },
    {
        id: 28,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜たことがあります',
        meaning: 'Đã từng làm... (Kinh nghiệm)',
        examples: [
            { jp: '{私|わたし}は{日本|にほん}へ{行|い}ったことがあります。', vn: 'Tôi đã từng đi Nhật.' },
            { jp: '{馬|うま}に{乗|の}ったことがありますか。', vn: 'Bạn đã từng cưỡi ngựa chưa?' },
            { jp: '{寿司|すし}を{食|た}べたことがあります。', vn: 'Tôi đã từng ăn sushi.' },
            { jp: '{桜|さくら}を{見|み}たことがありません。', vn: 'Tôi chưa từng thấy hoa anh đào.' },
            { jp: '{相撲|すもう}を{見|み}たことがありますか。', vn: 'Bạn đã từng xem sumo chưa?' },
            { jp: '{新幹線|しんかんせん}に{乗|の}ったことがあります。', vn: 'Tôi đã từng đi shinkansen.' },
            { jp: '{日本人|にほんじん}の{友達|ともだち}と{話|はな}したことがあります。', vn: 'Tôi đã từng nói chuyện với bạn người Nhật.' },
            { jp: '{着物|きもの}を{着|き}たことがありますか。', vn: 'Bạn đã từng mặc kimono chưa?' },
            { jp: '{富士山|ふじさん}に{登|のぼ}ったことがあります。', vn: 'Tôi đã từng leo núi Phú Sĩ.' },
            { jp: '{一回|いっかい}も{休|やす}んだことがありません。', vn: 'Tôi chưa từng nghỉ buổi nào.' }
        ]
    },
    {
        id: 29,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜たり 〜たりします',
        meaning: 'Lúc thì... lúc thì... (Liệt kê hành động tiêu biểu)',
        examples: [
            { jp: '{日曜日|にちようび}はテニスをしたり、{映画|えいが}を{見|み}たりします。', vn: 'Chủ nhật tôi lúc thì chơi tennis, lúc thì xem phim.' },
            { jp: '{昨日|きのう}は{本|ほん}を{読|よ}んだり、{音楽|おんがく}を{聞|き}いたりしました。', vn: 'Hôm qua tôi lúc thì đọc sách, lúc thì nghe nhạc.' },
            { jp: '{休|やす}みの{日|ひ}は{掃除|そうじ}したり、{洗濯|せんたく}したりします。', vn: 'Ngày nghỉ tôi dọn dẹp, giặt giũ...' },
            { jp: '{食|た}べたり{飲|の}んだりして、{楽|たの}しかったです。', vn: 'Ăn ăn uống uống rất vui.' },
            { jp: '{泣|な}いたり{笑|わら}いたりしないでください。', vn: 'Đừng có lúc khóc lúc cười.' },
            { jp: '{日本|にほん}の{天気|てんき}は{暑|あつ}かったり{寒|さむ}かったりです。', vn: 'Thời tiết Nhật Bản lúc nóng lúc lạnh.' },
            { jp: '{店|みせ}は{客|きゃく}が{多|おお}かったり{少|すく}なかったりです。', vn: 'Cửa hàng thì khách lúc đông lúc vắng.' },
            { jp: '{寝|ね}る{前|まえ}に{本|ほん}を{読|よ}んだり、テレビを{見|み}たりします。', vn: 'Trước khi ngủ tôi đọc sách hoặc xem tivi.' },
            { jp: '{冬休|ふゆやす}みはスキーに{行|い}ったり、{温泉|おんせん}に{入|はい}ったりしたいです。', vn: 'Nghỉ đông tôi muốn đi trượt tuyết, tắm suối nước nóng...' },
            { jp: '{携帯|けいたい}でメールしたり、ゲームしたりしてはいけません。', vn: 'Không được nhắn tin hay chơi game.' }
        ]
    },
    {
        id: 30,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜ましょうか',
        meaning: 'Tôi làm... nhé? (Đề nghị giúp đỡ) / Cùng làm... nhé?',
        examples: [
            { jp: '{荷物|にもつ}を{持|も}ちましょうか。', vn: 'Tôi mang hành lý giúp bạn nhé?' },
            { jp: '{窓|まど}を{開|あ}けましょうか。', vn: 'Tôi mở cửa sổ giúp bạn nhé?' },
            { jp: '{手伝|てつだ}いましょうか。', vn: 'Tôi giúp bạn một tay nhé?' },
            { jp: '{駅|えき}まで{迎|むか}えに{行|い}きましょうか。', vn: 'Tôi ra ga đón bạn nhé?' },
            { jp: '{地図|ちず}を{描|か}きましょうか。', vn: 'Tôi vẽ bản đồ cho bạn nhé?' },
            { jp: 'タクシーを{呼|よ}びましょうか。', vn: 'Tôi gọi taxi cho bạn nhé?' },
            { jp: '{写真|しゃしん}を{撮|と}りましょうか。', vn: 'Tôi chụp ảnh cho bạn nhé?' },
            { jp: '{傘|かさ}を{貸|か}しましょうか。', vn: 'Tôi cho bạn mượn ô nhé?' },
            { jp: '{少|すこ}し{休|やす}みましょうか。', vn: 'Chúng ta nghỉ một chút nhé?' },
            { jp: '{何時|なんじ}に{会|あ}いましょうか。', vn: 'Chúng ta gặp nhau lúc mấy giờ?' }
        ]
    },
    {
        id: 31,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '[Place] へ [V-stem] に行きます',
        meaning: 'Đi đến... để làm gì (Mục đích)',
        examples: [
            { jp: '{日本|にほん}へ{日本語|にほんご}を{勉強|べんきょう}しに{行|い}きます。', vn: 'Tôi đi Nhật để học tiếng Nhật.' },
            { jp: 'デパートへ{買|か}い{物|もの}に{行|い}きます。', vn: 'Tôi đi bách hóa để mua sắm.' },
            { jp: '{図書館|としょかん}へ{本|ほん}を{借|か}りに{行|い}きます。', vn: 'Tôi đến thư viện để mượn sách.' },
            { jp: '{友達|ともだち}の{家|いえ}へ{遊|あそ}びに{行|い}きます。', vn: 'Tôi đến nhà bạn để chơi.' },
            { jp: '{公園|こうえん}へ{散歩|さんぽ}に{行|い}きます。', vn: 'Tôi ra công viên để đi dạo.' },
            { jp: '{川|かわ}へ{釣|つ}りに{行|い}きます。', vn: 'Tôi ra sông để câu cá.' },
            { jp: '{国|くに}へ{母|はは}に{会|あ}いに{行|い}きます。', vn: 'Tôi về nước để gặp mẹ.' },
            { jp: '{暑|あつ}いですから、プールへ{泳|およ}ぎに{行|い}きましょう。', vn: 'Vì nóng nên chúng ta đi hồ bơi để bơi đi.' },
            { jp: 'どこへ{写真|しゃしん}を{撮|と}りに{行|い}きますか。', vn: 'Bạn đi đâu để chụp ảnh vậy?' },
            { jp: 'レストランへ{食事|しょくじ}に{行|い}きます。', vn: 'Tôi đến nhà hàng để dùng bữa.' }
        ]
    },
    {
        id: 32,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜前に',
        meaning: 'Trước khi...',
        examples: [
            { jp: '{寝|ね}る{前|まえ}に、{歯|は}を{磨|みが}きます。', vn: 'Trước khi ngủ, tôi đánh răng.' },
            { jp: 'ご{飯|はん}を{食|た}べる{前|まえ}に、{手|て}を{洗|あら}います。', vn: 'Trước khi ăn cơm, tôi rửa tay.' },
            { jp: '{日本|にほん}へ{来|き}る{前|まえ}に、{日本語|にほんご}を{勉強|べんきょう}しました。', vn: 'Trước khi đến Nhật, tôi đã học tiếng Nhật.' },
            { jp: '{出|で}かける{前|まえ}に、{電気|でんき}を{消|け}してください。', vn: 'Trước khi ra ngoài, hãy tắt điện.' },
            { jp: '{会議|かいぎ}の{前|まえ}に、{資料|しりょう}をコピーします。', vn: 'Trước cuộc họp, tôi photo tài liệu (Danh từ + no).' },
            { jp: '3{年|ねん}{前|まえ}に、{結婚|けっこん}しました。', vn: 'Tôi đã kết hôn 3 năm trước.' },
            { jp: '{泳|およ}ぐ{前|まえ}に、{準備運動|じゅんびうんどう}をします。', vn: 'Trước khi bơi, tôi khởi động.' },
            { jp: '{買|か}う{前|まえ}に、よく{見|み}ます。', vn: 'Trước khi mua, tôi xem kỹ.' },
            { jp: '{試験|しけん}の{前|まえ}に、{復習|ふくしゅう}します。', vn: 'Trước kỳ thi, tôi ôn tập.' },
            { jp: '1{時間|じかん}{前|まえ}に、ここに{着|つ}きました。', vn: 'Tôi đã đến đây 1 tiếng trước.' }
        ]
    },
    {
        id: 33,
        level: 'N5',
        group: 'Mẫu câu với Động từ',
        label: '〜ことができます',
        meaning: 'Có thể làm... (Khả năng)',
        examples: [
            { jp: '{私|わたし}は{日本語|にほんご}を{話|はな}すことができます。', vn: 'Tôi có thể nói tiếng Nhật.' },
            { jp: 'ここでタバコを{吸|す}うことができますか。', vn: 'Ở đây có thể hút thuốc không?' },
            { jp: 'カードで{払|はら}うことができます。', vn: 'Có thể thanh toán bằng thẻ.' },
            { jp: '{図書館|としょかん}で{本|ほん}を{借|か}りることができます。', vn: 'Có thể mượn sách ở thư viện.' },
            { jp: 'スマホで{予約|よやく}することができます。', vn: 'Có thể đặt chỗ bằng điện thoại thông minh.' },
            { jp: 'ピアノを{弾|ひ}くことができます。', vn: 'Tôi có thể chơi đàn piano.' },
            { jp: '100メートル{泳|およ}ぐことができます。', vn: 'Tôi có thể bơi 100 mét.' },
            { jp: '{漢字|かんじ}を{書|か}くことができますか。', vn: 'Bạn có thể viết chữ Hán không?' },
            { jp: '{安|やす}く{買|か}うことができます。', vn: 'Có thể mua với giá rẻ.' },
            { jp: 'どこで{両替|りょうがえ}することができますか。', vn: 'Có thể đổi tiền ở đâu?' }
        ]
    },
    {
        id: 34,
        level: 'N5',
        group: 'Danh từ hóa',
        label: '〜ことです',
        meaning: 'Việc... (Danh từ hóa, sở thích)',
        examples: [
            { jp: '{私|わたし}の{趣味|しゅみ}は{映画|えいが}を{見|み}ることです。', vn: 'Sở thích của tôi là xem phim.' },
            { jp: '{夢|ゆめ}は{医者|いしゃ}になることです。', vn: 'Ước mơ của tôi là trở thành bác sĩ.' },
            { jp: '{大切|たいせつ}なことは{諦|あきら}めないことです。', vn: 'Điều quan trọng là không bỏ cuộc.' },
            { jp: '{趣味|しゅみ}は{写真|しゃしん}を{撮|と}ることです。', vn: 'Sở thích là chụp ảnh.' },
            { jp: '{楽|たの}しみは{食|た}べることです。', vn: 'Niềm vui là ăn uống.' },
            { jp: '{私|わたし}の{仕事|しごと}は{日本語|にほんご}を{教|おし}えることです。', vn: 'Công việc của tôi là dạy tiếng Nhật.' },
            { jp: '{目標|もくひょう}はN1に{合格|ごうかく}することです。', vn: 'Mục tiêu là đỗ N1.' },
            { jp: '{趣味|しゅみ}は{音楽|おんがく}を{聞|き}くことですか。', vn: 'Sở thích của bạn là nghe nhạc phải không?' },
            { jp: '{習慣|しゅうかん}は{毎朝|まいあさ}ジョギングすることです。', vn: 'Thói quen là chạy bộ mỗi sáng.' },
            { jp: '{悪|わる}いことは{嘘|うそ}をつくことです。', vn: 'Điều xấu là nói dối.' }
        ]
    },
    {
        id: 35,
        level: 'N5',
        group: 'Tính từ & Bổ nghĩa',
        label: '[Adjective] + [Noun]',
        meaning: 'Tính từ bổ nghĩa cho Danh từ',
        examples: [
            { jp: 'これは{美味|おい}しいケーキです。', vn: 'Đây là cái bánh ngon.' },
            { jp: '{親切|しんせつ}な{人|ひと}に{会|あ}いました。', vn: 'Tôi đã gặp một người tốt bụng.' },
            { jp: '{大阪|おおさか}は{賑|にぎ}やかな{町|まち}です。', vn: 'Osaka là thành phố náo nhiệt.' },
            { jp: '{白|しろ}いシャツを{買|か}いました。', vn: 'Tôi đã mua cái áo sơ mi trắng.' },
            { jp: '{有名|ゆうめい}なレストランで{食|た}べました。', vn: 'Tôi đã ăn ở nhà hàng nổi tiếng.' },
            { jp: '{熱|あつ}いお{茶|ちゃ}をください。', vn: 'Hãy cho tôi trà nóng.' },
            { jp: '{静|しず}かな{公園|こうえん}が{好|す}きです。', vn: 'Tôi thích công viên yên tĩnh.' },
            { jp: '{新|あたら}しいパソコンがほしいです。', vn: 'Tôi muốn máy tính mới.' },
            { jp: '{古|ふる}いお{寺|てら}を{見学|けんがく}しました。', vn: 'Tôi đã tham quan ngôi chùa cổ.' },
            { jp: 'ハンサムな{彼氏|かれし}がいます。', vn: 'Tôi có bạn trai đẹp trai.' }
        ]
    },
    {
        id: 36,
        level: 'N5',
        group: 'Tính từ & Bổ nghĩa',
        label: '〜は〜が [Adjective]',
        meaning: 'Chủ ngữ có đặc điểm... (Mô tả bộ phận/đặc điểm)',
        examples: [
            { jp: '{象|ぞう}は{鼻|はな}が{長|なが}いです。', vn: 'Con voi có cái mũi dài.' },
            { jp: '{田中|たなか}さんは{背|せ}が{高|たか}いです。', vn: 'Anh Tanaka dáng cao.' },
            { jp: 'この{部屋|へや}は{窓|まど}が{小|ちい}さいです。', vn: 'Căn phòng này có cửa sổ nhỏ.' },
            { jp: '{日本|にほん}は{生活費|せいかつひ}が{高|たか}いです。', vn: 'Nhật Bản chi phí sinh hoạt cao.' },
            { jp: 'ベトナムは{料理|りょうり}がおいしいです。', vn: 'Việt Nam có đồ ăn ngon.' },
            { jp: '{彼女|かのじょ}は{髪|かみ}が{長|なが}いです。', vn: 'Cô ấy có mái tóc dài.' },
            { jp: '{大阪|おおさか}は{人|ひと}が{多|おお}いです。', vn: 'Osaka có đông người.' },
            { jp: 'あの{店|みせ}はサービスがいいです。', vn: 'Cửa hàng đó dịch vụ tốt.' },
            { jp: 'マリアさんは{目|め}が{青|あお}いです。', vn: 'Chị Maria có đôi mắt xanh.' },
            { jp: '{彼|かれ}は{足|あし}が{速|はや}いです。', vn: 'Anh ấy chạy nhanh (chân nhanh).' }
        ]
    },
    {
        id: 37,
        level: 'N5',
        group: 'So sánh',
        label: '〜と〜とどちらが',
        meaning: 'Giữa A và B, cái nào... hơn?',
        examples: [
            { jp: 'サッカーと{野球|やきゅう}とどちらが{好|す}きですか。', vn: 'Bóng đá và bóng chày, bạn thích môn nào hơn?' },
            { jp: 'サッカーのほうが{好|す}きです。', vn: 'Tôi thích bóng đá hơn.' },
            { jp: 'コーヒーと{紅茶|こうちゃ}とどちらがいいですか。', vn: 'Cà phê và hồng trà, bạn chọn cái nào?' },
            { jp: '{春|はる}と{秋|あき}とどちらが{好|す}きですか。', vn: 'Mùa xuân và mùa thu, bạn thích mùa nào hơn?' },
            { jp: '{肉|にく}と{魚|さかな}とどちらを{食|た}べたいですか。', vn: 'Thịt và cá, bạn muốn ăn món nào?' },
            { jp: '{月曜日|げつようび}と{火曜日|かようび}とどちらが{暇|ひま}ですか。', vn: 'Thứ hai và thứ ba, hôm nào bạn rảnh hơn?' },
            { jp: '{北海道|ほっかいどう}と{沖縄|おきなわ}とどちらが{遠|とお}いですか。', vn: 'Hokkaido và Okinawa, chỗ nào xa hơn?' },
            { jp: 'これとあれとどちらが{安|やす}いですか。', vn: 'Cái này và cái kia, cái nào rẻ hơn?' },
            { jp: '{仕事|しごと}と{勉強|べんきょう}とどちらが{面白|おもしろ}いですか。', vn: 'Công việc và việc học, cái nào thú vị hơn?' },
            { jp: '{海|うみ}と{山|やま}とどちらに{行|い}きたいですか。', vn: 'Biển và núi, bạn muốn đi đâu hơn?' }
        ]
    },
    {
        id: 38,
        level: 'N5',
        group: 'So sánh',
        label: '〜で〜がいちばん',
        meaning: 'Trong số... cái nào... nhất?',
        examples: [
            { jp: 'スポーツで{何|なに}が{一番|いちばん}{好|す}きですか。', vn: 'Trong các môn thể thao, bạn thích môn nào nhất?' },
            { jp: 'サッカーが{一番|いちばん}{好|す}きです。', vn: 'Tôi thích bóng đá nhất.' },
            { jp: '{日本料理|にほんりょうり}で{何|なに}が{一番|いちばん}おいしいですか。', vn: 'Trong các món ăn Nhật, món nào ngon nhất?' },
            { jp: 'クラスで{誰|だれ}が{一番|いちばん}{背|せ}が{高|たか}いですか。', vn: 'Trong lớp ai là người cao nhất?' },
            { jp: '{一年|いちねん}でいつが{一番|いちばん}{寒|さむ}いですか。', vn: 'Trong một năm, khi nào lạnh nhất?' },
            { jp: '{家族|かぞく}で{誰|だれ}が{一番|いちばん}{元気|げんき}ですか。', vn: 'Trong gia đình, ai khỏe mạnh nhất?' },
            { jp: 'この{中|なか}でどれが{一番|いちばん}{安|やす}いですか。', vn: 'Trong số này, cái nào rẻ nhất?' },
            { jp: '{世界|せかい}でどこが{一番|いちばん}{広|ひろ}いですか。', vn: 'Trên thế giới, nơi nào rộng lớn nhất?' },
            { jp: '{果物|くだもの}で{何|なに}が{一番|いちばん}{好|す}きですか。', vn: 'Trong các loại quả, bạn thích quả nào nhất?' },
            { jp: '{一週間|いっしゅうかん}で{土曜日|どようび}が{一番|いちばん}{楽|たの}しいです。', vn: 'Trong một tuần, thứ bảy là vui nhất.' }
        ]
    },
    {
        id: 39,
        level: 'N5',
        group: 'Thời gian & Số đếm',
        label: 'Số đếm & Đơn vị',
        meaning: 'Cách đếm cơ bản',
        examples: [
            { jp: 'りんごを3つください。', vn: 'Cho tôi 3 quả táo.' },
            { jp: '80{円|えん}{切手|きって}を5{枚|まい}{買|か}いました。', vn: 'Tôi đã mua 5 cái tem 80 yên.' },
            { jp: '{家族|かぞく}は4{人|にん}です。', vn: 'Gia đình tôi có 4 người.' },
            { jp: '1{週間|しゅうかん}に2{回|かい}{習|なら}います。', vn: 'Tôi học 2 lần 1 tuần.' },
            { jp: 'この{国|くに}に2か{月|げつ}います。', vn: 'Tôi ở nước này 2 tháng.' },
            { jp: '{車|くるま}が3{台|だい}あります。', vn: 'Có 3 chiếc ô tô.' },
            { jp: 'ビールを2{本|ほん}{飲|の}みました。', vn: 'Tôi đã uống 2 chai bia.' },
            { jp: 'シャツを2{枚|まい}{洗|あら}いました。', vn: 'Tôi đã giặt 2 cái áo.' },
            { jp: '{消|け}しゴムが1{個|こ}あります。', vn: 'Có 1 cục tẩy.' },
            { jp: '{全部|ぜんぶ}でいくらですか。', vn: 'Tổng cộng bao nhiêu tiền?' }
        ]
    },
    {
        id: 40,
        level: 'N5',
        group: 'Khác',
        label: 'もう / まだ',
        meaning: 'Đã (xong) / Chưa... (Hoàn thành)',
        examples: [
            { jp: 'もう{昼|ひる}ごはんを{食|た}べましたか。', vn: 'Bạn đã ăn trưa chưa?' },
            { jp: 'はい、もう{食|た}べました。', vn: 'Vâng, tôi ăn rồi.' },
            { jp: 'いいえ、まだです。', vn: 'Không, tôi chưa ăn.' },
            { jp: 'もう{荷物|にもつ}を{送|おく}りましたか。', vn: 'Bạn đã gửi hành lý chưa?' },
            { jp: 'もう12{時|じ}ですよ。', vn: 'Đã 12 giờ rồi đấy.' },
            { jp: 'まだ{宿題|しゅくだい}をしていません。', vn: 'Tôi vẫn chưa làm bài tập.' },
            { jp: 'まだ{雨|あめ}が{降|ふ}っています。', vn: 'Trời vẫn đang mưa.' },
            { jp: '{銀行|ぎんこう}はまだ{開|あ}いていますか。', vn: 'Ngân hàng vẫn còn mở cửa chứ?' },
            { jp: 'もう{宿題|しゅくだい}が{終|お}わりましたか。', vn: 'Đã làm xong bài tập chưa?' },
            { jp: 'まだ{寝|ね}ません。', vn: 'Tôi vẫn chưa ngủ.' }
        ]
    },
    {
        id: 41,
        level: 'N5',
        group: 'Khác',
        label: 'Trạng từ mức độ',
        meaning: 'よく, だいたい, たくさん, 少し...',
        examples: [
            { jp: '{日本語|にほんご}がよくわかります。', vn: 'Tôi hiểu rõ tiếng Nhật.' },
            { jp: '{平仮名|ひらがな}が{大体|だいたい}わかります。', vn: 'Tôi hiểu đại khái chữ Hiragana.' },
            { jp: '{英語|えいご}が{少|すこ}しわかります。', vn: 'Tôi hiểu một chút tiếng Anh.' },
            { jp: 'フランス{語|ご}が{全然|ぜんぜん}わかりません。', vn: 'Tôi hoàn toàn không hiểu tiếng Pháp.' },
            { jp: 'お{金|かね}がたくさんあります。', vn: 'Tôi có rất nhiều tiền.' },
            { jp: '{時間|じかん}が{少|すこ}しあります。', vn: 'Tôi có một chút thời gian.' },
            { jp: '{全然|ぜんぜん}{食|た}べませんでした。', vn: 'Tôi đã hoàn toàn không ăn gì.' },
            { jp: 'とても{暑|あつ}いですね。', vn: 'Nóng quá nhỉ.' },
            { jp: 'あまり{寒|さむ}くないです。', vn: 'Không lạnh lắm.' },
            { jp: 'もっとゆっくり{話|はな}してください。', vn: 'Hãy nói chậm hơn nữa.' }
        ]
    },
    {
        id: 42,
        level: 'N5',
        group: 'Khác',
        label: '〜とき',
        meaning: 'Khi... (Thời gian)',
        examples: [
            { jp: '{寝|ね}るとき、「おやすみなさい」と{言|い}います。', vn: 'Khi đi ngủ, nói "Chúc ngủ ngon".' },
            { jp: '{図書館|としょかん}で{本|ほん}を{借|か}りるとき、カードがいります。', vn: 'Khi mượn sách ở thư viện, cần có thẻ.' },
            { jp: 'わからないとき、{先生|せんせい}に{聞|き}きます。', vn: 'Khi không hiểu, tôi hỏi thầy giáo.' },
            { jp: '{暇|ひま}なとき、テレビを{見|み}ます。', vn: 'Khi rảnh rỗi, tôi xem tivi.' },
            { jp: '{子供|こども}のとき、よく{川|かわ}で{泳|およ}ぎました。', vn: 'Khi còn bé, tôi hay bơi ở sông.' },
            { jp: '{忙|いそが}しいとき、{残業|ざんぎょう}します。', vn: 'Khi bận rộn, tôi làm thêm giờ.' },
            { jp: '{病気|びょうき}のとき、{学校|がっこう}を{休|やす}みます。', vn: 'Khi bị ốm, tôi nghỉ học.' },
            { jp: '{食|た}べたとき、「ごちそうさま」と{言|い}います。', vn: 'Khi ăn xong, nói "Cảm ơn vì bữa ăn".' },
            { jp: '{道|みち}を{渡|わた}るとき、{気|き}をつけてください。', vn: 'Khi qua đường, hãy cẩn thận.' },
            { jp: '{寂|さび}しいとき、{家族|かぞく}に{電話|でんわ}します。', vn: 'Khi buồn, tôi gọi điện cho gia đình.' }
        ]
    },
    {
        id: 43,
        level: 'N5',
        group: 'Khác',
        label: '〜でしょう',
        meaning: '...đúng không? (Xác nhận/Đồng tình)',
        examples: [
            { jp: '{明日|あした}は{雨|あめ}でしょう。', vn: 'Ngày mai chắc là mưa.' },
            { jp: 'その{映画|えいが}は{面白|おもしろ}いでしょう。', vn: 'Phim đó chắc hay nhỉ?' },
            { jp: '{田中|たなか}さんも{行|い}くでしょう。', vn: 'Anh Tanaka chắc cũng đi nhỉ?' },
            { jp: 'これはあなたの{傘|かさ}でしょう？', vn: 'Cái này là ô của bạn đúng không?' },
            { jp: '{北海道|ほっかいどう}は{寒|さむ}いでしょう。', vn: 'Hokkaido chắc lạnh lắm nhỉ.' },
            { jp: '{試験|しけん}は{難|むずか}しかったでしょう？', vn: 'Kỳ thi chắc là khó lắm đúng không?' },
            { jp: '{疲|つか}れたでしょう。', vn: 'Chắc bạn mệt rồi.' },
            { jp: '{彼|かれ}も{知|し}っているでしょう。', vn: 'Chắc anh ấy cũng biết.' },
            { jp: '{大丈夫|だいじょうぶ}でしょう。', vn: 'Chắc là không sao đâu.' },
            { jp: 'いい{天気|てんき}でしょう。', vn: 'Thời tiết đẹp nhỉ.' }
        ]
    },
    // --- N4: Tiếp tục ---
    {
        id: 8,
        level: 'N4',
        group: 'Điều kiện',
        label: '〜ば / 〜なら',
        meaning: 'Nếu... (Điều kiện)',
        examples: [
            { jp: '{春|はる}になれば、{桜|さくら}が{咲|さ}きます。', vn: 'Nếu sang xuân, hoa anh đào sẽ nở.' },
            { jp: '{安|やす}ければ、{買|か}います。', vn: 'Nếu rẻ thì tôi sẽ mua.' },
            { jp: '{天気|てんき}がよければ、{行|い}きます。', vn: 'Nếu thời tiết tốt, tôi sẽ đi.' },
            { jp: '{時間|じかん}があれば、{手伝|てつだ}ってください。', vn: 'Nếu có thời gian, hãy giúp tôi.' },
            { jp: '{彼|かれ}が{行|い}けば、{私|わたし}も{行|い}きます。', vn: 'Nếu anh ấy đi, tôi cũng đi.' },
            { jp: '{東京|とうきょう}へ{行|い}くなら、{新幹線|しんかんせん}が{便利|べんり}です。', vn: 'Nếu đi Tokyo thì Shinkansen tiện lợi.' },
            { jp: 'カメラを{買|か}うなら、あの{店|みせ}がいいです。', vn: 'Nếu mua máy ảnh thì cửa hàng kia được đấy.' },
            { jp: '{嫌|いや}なら、しなくてもいいです。', vn: 'Nếu ghét thì không làm cũng được.' },
            { jp: '{明日|あした}なら、{暇|ひま}です。', vn: 'Nếu là ngày mai thì tôi rảnh.' },
            { jp: '{説明書|せつめいしょ}を{読|よ}めば、わかります。', vn: 'Nếu đọc hướng dẫn thì sẽ hiểu.' }
        ]
    },
    {
        id: 9,
        level: 'N4',
        group: 'Mẫu câu với Động từ',
        label: '〜よう / 〜意向形',
        meaning: 'Định làm, cùng làm (Thể ý hướng)',
        examples: [
            { jp: 'さあ、{行|い}こう。', vn: 'Nào, đi thôi.' },
            { jp: '{少|すこ}し{休|やす}もう。', vn: 'Nghỉ một chút nào.' },
            { jp: '{一緒|いっしょ}に{帰|かえ}ろう。', vn: 'Cùng về thôi.' },
            { jp: 'もっと{勉強|べんきょう}しよう。', vn: 'Hãy học nhiều hơn nào.' },
            { jp: '{明日|あした}また{来|こ}よう。', vn: 'Ngày mai lại đến nhé.' },
            { jp: '{何|なに}をしようか。', vn: 'Chúng ta làm gì đây (thân mật)?' },
            { jp: '{夏休|なつやす}みに{旅行|りょこう}しようと{思|おも}います。', vn: 'Tôi định đi du lịch vào nghỉ hè.' },
            { jp: '{早|はや}く{寝|ね}よう。', vn: 'Ngủ sớm thôi.' },
            { jp: '{頑張|がんば}ろう！', vn: 'Cùng cố gắng nào!' },
            { jp: '{会議|かいぎ}を{始|はじ}めよう。', vn: 'Bắt đầu cuộc họp thôi.' }
        ]
    },
    {
        id: 10,
        level: 'N4',
        group: 'Dự định & Mong muốn',
        label: '〜と思います',
        meaning: 'Tôi nghĩ rằng / Tôi định...',
        examples: [
            { jp: '{明日|あした}は{雨|あめ}が{降|ふ}ると{思|おも}います。', vn: 'Tôi nghĩ ngày mai trời sẽ mưa.' },
            { jp: '{彼|かれ}は{来|こ}ないと{思|おも}います。', vn: 'Tôi nghĩ anh ấy sẽ không đến.' },
            { jp: '{値段|ねだん}が{高|たか}いと{思|おも}います。', vn: 'Tôi nghĩ giá đắt.' },
            { jp: '{日本|にほん}はきれいだと{思|おも}います。', vn: 'Tôi nghĩ Nhật Bản đẹp.' },
            { jp: '{週末|しゅうまつ}、{海|うみ}へ{行|い}こうと{思|おも}います。', vn: 'Tôi định cuối tuần đi biển.' },
            { jp: '{日本語|にほんご}は{面白|おもしろ}いと{思|おも}います。', vn: 'Tôi nghĩ tiếng Nhật thú vị.' },
            { jp: '{会議|かいぎ}は{役|やく}に{立|た}つと{思|おも}います。', vn: 'Tôi nghĩ cuộc họp có ích.' },
            { jp: '{彼女|かのじょ}は{病気|びょうき}だと{思|おも}います。', vn: 'Tôi nghĩ cô ấy bị ốm.' },
            { jp: '{成功|せいこう}すると{思|おも}います。', vn: 'Tôi nghĩ sẽ thành công.' },
            { jp: '{外国|がいこく}で{働|はたら}こうと{思|おも}っています。', vn: 'Tôi đang định làm việc ở nước ngoài.' }
        ]
    },
    {
        id: 11,
        level: 'N4',
        group: 'Dự định & Mong muốn',
        label: '〜つもり / 予定',
        meaning: 'Dự định / Kế hoạch',
        examples: [
            { jp: '{来月|らいげつ}、{国|くに}へ{帰|かえ}るつもりです。', vn: 'Tháng sau tôi định về nước.' },
            { jp: 'タバコを{辞|や}めるつもりです。', vn: 'Tôi định bỏ thuốc lá.' },
            { jp: '{大学院|だいがくいん}で{勉強|べんきょう}するつもりです。', vn: 'Tôi định học cao học.' },
            { jp: '{車|くるま}を{買|か}うつもりはありません。', vn: 'Tôi không có định mua ô tô.' },
            { jp: '{明日|あした}は{何|なに}をするつもりですか。', vn: 'Ngày mai bạn định làm gì?' },
            { jp: '7{月末|がつまつ}にドイツへ{出張|しゅっちょう}する{予定|よてい}です。', vn: 'Dự định cuối tháng 7 tôi đi công tác Đức.' },
            { jp: '{会議|かいぎ}は10{時|じ}から{始|はじ}まる{予定|よてい}です。', vn: 'Cuộc họp dự kiến bắt đầu lúc 10 giờ.' },
            { jp: '{旅行|りょこう}の{予定|よてい}がありますか。', vn: 'Bạn có kế hoạch đi du lịch không?' },
            { jp: 'ずっと{日本|にほん}に{住|す}むつもりです。', vn: 'Tôi định sống ở Nhật mãi.' },
            { jp: '{午後|ごご}はお{客|きゃく}さんに{会|あ}う{予定|よてい}です。', vn: 'Buổi chiều tôi có lịch gặp khách hàng.' }
        ]
    },
    {
        id: 12,
        level: 'N4',
        group: 'Trạng thái',
        label: '〜てある / 〜ている',
        meaning: 'Có sẵn (kết quả hành động) / Đang (Trạng thái)',
        examples: [
            { jp: '{壁|かべ}に{絵|え}が{掛|か}けてあります。', vn: 'Trên tường có treo bức tranh (ai đó đã treo).' },
            { jp: 'カレンダーに{予定|よてい}が{書|か}いてあります。', vn: 'Trên lịch có ghi lịch trình.' },
            { jp: '{窓|まど}が{開|あ}いています。', vn: 'Cửa sổ đang mở (tự động từ).' },
            { jp: '{窓|まど}を{開|あ}けてあります。', vn: 'Cửa sổ đang được mở (tha động từ - có mục đích).' },
            { jp: '{電気|でんき}がついています。', vn: 'Điện đang bật.' },
            { jp: '{皿|さら}が{割|わ}れています。', vn: 'Cái đĩa đang bị vỡ.' },
            { jp: '{飲|の}み{物|もの}が{冷|ひ}やしてあります。', vn: 'Đồ uống đã được làm lạnh sẵn.' },
            { jp: '{名前|なまえ}が{書|か}いてあります。', vn: 'Có viết tên.' },
            { jp: '{電車|でんしゃ}が{込|こ}んでいます。', vn: 'Tàu điện đang đông.' },
            { jp: '{準備|じゅんび}がしてあります。', vn: 'Đã chuẩn bị sẵn rồi.' }
        ]
    },
    {
        id: 13,
        level: 'N4',
        group: 'Trạng thái',
        label: '〜てしまう',
        meaning: 'Lỡ làm / Hoàn thành hết',
        examples: [
            { jp: '{宿題|しゅくだい}をやってしまいました。', vn: 'Tôi đã làm xong hết bài tập.' },
            { jp: '{大切|たいせつ}な{皿|さら}を{割|わ}ってしまいました。', vn: 'Tôi lỡ làm vỡ cái đĩa quý.' },
            { jp: '{電車|でんしゃ}の{中|なか}に{傘|かさ}を{忘|わす}れてしまいました。', vn: 'Tôi lỡ để quên ô trên tàu.' },
            { jp: '{全部|ぜんぶ}{食|た}べてしまいました。', vn: 'Tôi đã ăn hết sạch rồi.' },
            { jp: '{本|ほん}を{読|よ}んでしまいました。', vn: 'Tôi đã đọc xong quyển sách.' },
            { jp: '{道|みち}に{迷|まよ}ってしまいました。', vn: 'Tôi lỡ bị lạc đường.' },
            { jp: 'パスポートをなくしてしまいました。', vn: 'Tôi lỡ làm mất hộ chiếu.' },
            { jp: '{寝|ね}てしまいました。', vn: 'Tôi lỡ ngủ quên mất.' },
            { jp: 'お{金|かね}を{使|つか}ってしまいました。', vn: 'Tôi xài hết tiền mất rồi.' },
            { jp: '1{日|にち}でやってしまいたいです。', vn: 'Tôi muốn làm xong hết trong 1 ngày.' }
        ]
    },
    {
        id: 14,
        level: 'N4',
        group: 'Trạng thái',
        label: '〜ところ / 〜ばかり',
        meaning: 'Sắp/Đang/Vừa mới (Thời điểm) / Vừa mới (Cảm giác)',
        examples: [
            { jp: 'これから{食|た}べるところです。', vn: 'Bây giờ tôi chuẩn bị ăn.' },
            { jp: '{今|いま}、{調|しら}べているところです。', vn: 'Bây giờ tôi đang tìm hiểu.' },
            { jp: 'たった{今|いま}、バスが{出|で}たところです。', vn: 'Xe buýt vừa mới chạy xong.' },
            { jp: '{会議|かいぎ}はまだ{終|お}わらないところです。', vn: 'Cuộc họp vẫn chưa kết thúc.' },
            { jp: '{日本|にほん}へ{来|き}たばかりです。', vn: 'Tôi vừa mới đến Nhật (cảm giác gần đây).' },
            { jp: '{買|か}ったばかりの{靴|くつ}が{汚|よご}れました。', vn: 'Đôi giày vừa mới mua đã bị bẩn.' },
            { jp: 'さっき{起|お}きたばかりです。', vn: 'Tôi vừa mới ngủ dậy.' },
            { jp: 'この{本|ほん}は{読|よ}んだばかりです。', vn: 'Quyển sách này tôi vừa mới đọc xong.' },
            { jp: '{食事|しょくじ}は{終|お}わったところです。', vn: 'Tôi vừa ăn xong.' },
            { jp: 'ちょうど{帰|かえ}ったところです。', vn: 'Tôi vừa mới về tới nơi.' }
        ]
    },
    {
        id: 15,
        level: 'N4',
        group: 'Bổ sung ý nghĩa',
        label: '〜とおりに / 〜あとで',
        meaning: 'Làm theo... / Sau khi... (N4)',
        examples: [
            { jp: '{私|わたし}が{言|い}うとおりに、{書|か}いてください。', vn: 'Hãy viết theo đúng như tôi nói.' },
            { jp: '{見|み}たとおりに、{話|はな}してください。', vn: 'Hãy kể lại đúng như những gì đã thấy.' },
            { jp: '{線|せん}のとおりに、{紙|かみ}を{切|き}ってください。', vn: 'Hãy cắt giấy theo đường kẻ.' },
            { jp: '{説明書|せつめいしょ}のとおりに、{組|く}み{立|た}てました。', vn: 'Tôi đã lắp ráp theo sách hướng dẫn.' },
            { jp: 'ご{飯|はん}を{食|た}べたあとで、{歯|は}を{磨|みが}きます。', vn: 'Sau khi ăn cơm, tôi đánh răng.' },
            { jp: 'ジョギングのあとで、シャワーを{浴|あ}びます。', vn: 'Sau khi chạy bộ, tôi tắm.' },
            { jp: '{仕事|しごと}のあとで、{飲|の}みに{行|い}きませんか。', vn: 'Sau khi làm việc, đi uống không?' },
            { jp: '{授業|じゅぎょう}のあとで、{質問|しつもん}してもいいですか。', vn: 'Sau giờ học, tôi hỏi có được không?' },
            { jp: '{考|かんが}えたとおりに、{言|い}いました。', vn: 'Tôi đã nói theo đúng suy nghĩ.' },
            { jp: '{映画|えいが}を{見|み}たあとで、{食事|しょくじ}しました。', vn: 'Sau khi xem phim, chúng tôi đã đi ăn.' }
        ]
    },
    {
        id: 16,
        level: 'N4',
        group: 'Bổ sung ý nghĩa',
        label: '〜かもしれない / 〜はず',
        meaning: 'Có lẽ (50%) / Chắc chắn (Suy luận)',
        examples: [
            { jp: '{明日|あした}は{雨|あめ}が{降|ふ}るかもしれません。', vn: 'Ngày mai có thể trời sẽ mưa.' },
            { jp: '{約束|やくそく}に{間|ま}に{合|あ}わないかもしれません。', vn: 'Có thể tôi không kịp giờ hẹn.' },
            { jp: '{彼|かれ}は{病気|びょうき}かもしれません。', vn: 'Có thể anh ấy bị ốm.' },
            { jp: 'これは{偽物|にせもの}かもしれません。', vn: 'Cái này có thể là đồ giả.' },
            { jp: '{荷物|にもつ}は{明日|あした}{届|とど}くはずです。', vn: 'Hành lý chắc chắn ngày mai sẽ tới.' },
            { jp: '{田中|たなか}さんは{知|し}っているはずです。', vn: 'Anh Tanaka chắc chắn biết.' },
            { jp: '{彼|かれ}は{今日|きょう}{来|く}るはずです。', vn: 'Anh ấy chắc chắn hôm nay sẽ đến.' },
            { jp: 'そんなはずはありません。', vn: 'Chắc chắn không có chuyện đó đâu.' },
            { jp: '{店|みせ}は{今日|きょう}{休|やす}みかもしれません。', vn: 'Cửa hàng có thể hôm nay nghỉ.' },
            { jp: '{会議|かいぎ}はもう{終|お}わったはずです。', vn: 'Cuộc họp chắc chắn đã kết thúc rồi.' }
        ]
    },
    {
        id: 17,
        level: 'N4',
        group: 'Thể bị động & Sai khiến',
        label: 'Bị động (受身) / Sai khiến (使役)',
        meaning: 'Bị/Được làm / Bắt/Cho phép làm',
        examples: [
            { jp: '{先生|せんせい}に{褒|ほ}められました。', vn: 'Tôi được thầy giáo khen.' },
            { jp: '{誰|だれ}かに{足|あし}を{踏|ふ}まれました。', vn: 'Tôi bị ai đó giẫm vào chân.' },
            { jp: '{母|はは}に{漫画|まんが}を{捨|す}てられました。', vn: 'Tôi bị mẹ vứt truyện tranh.' },
            { jp: 'この{本|ほん}は{世界中|せかいじゅう}で{読|よ}まれています。', vn: 'Quyển sách này được đọc trên toàn thế giới.' },
            { jp: '{泥棒|どろぼう}にお{金|かね}を{盗|ぬす}まれました。', vn: 'Tôi bị kẻ trộm lấy mất tiền.' },
            { jp: '{部長|ぶちょう}は{田中|たなか}さんを{出張|しゅっちょう}させました。', vn: 'Trưởng phòng đã cho anh Tanaka đi công tác.' },
            { jp: '{子供|こども}に{野菜|やさい}を{食|た}べさせます。', vn: 'Tôi bắt con ăn rau.' },
            { jp: '{面白|おもしろ}い{話|はなし}をさせてください。', vn: 'Hãy cho phép tôi kể một câu chuyện thú vị.' },
            { jp: '{母|はは}は{子供|こども}を{遊|あそ}ばせました。', vn: 'Mẹ đã cho phép con chơi.' },
            { jp: 'すみません、{休|やす}ませていただけませんか。', vn: 'Xin lỗi, cho phép tôi nghỉ được không?' }
        ]
    },
    {
        id: 18,
        level: 'N4',
        group: 'Thể động từ',
        label: 'Mệnh lệnh & Cấm chỉ',
        meaning: 'Hãy làm ngay / Cấm làm (Mạnh mẽ)',
        examples: [
            { jp: '{頑張|がんば}れ！', vn: 'Cố lên! (Mệnh lệnh)' },
            { jp: '{走|はし}れ！', vn: 'Chạy đi!' },
            { jp: '{早|はや}くしろ。', vn: 'Làm nhanh lên.' },
            { jp: 'こっちへ{来|こ}い。', vn: 'Lại đây.' },
            { jp: '{動|うご}くな。', vn: 'Cấm động đậy. (Cấm chỉ)' },
            { jp: '{入|はい}るな。', vn: 'Cấm vào.' },
            { jp: 'タバコを{吸|す}うな。', vn: 'Cấm hút thuốc.' },
            { jp: '{触|さわ}るな。', vn: 'Cấm sờ.' },
            { jp: '{勉強|べんきょう}しなさい。', vn: 'Hãy học đi (Cha mẹ nói với con).' },
            { jp: '{寝|ね}なさい。', vn: 'Ngủ đi.' }
        ]
    },
    {
        id: 19,
        level: 'N4',
        group: 'Thể động từ',
        label: '〜させられる (Sai khiến bị động)',
        meaning: 'Bị bắt phải làm...',
        examples: [
            { jp: '{母|はは}に{野菜|やさい}を{食|た}べさせられました。', vn: 'Tôi bị mẹ bắt ăn rau.' },
            { jp: '{先生|せんせい}に{走|はし}らせられました。', vn: 'Tôi bị thầy giáo bắt chạy.' },
            { jp: '{部長|ぶちょう}にお{酒|さけ}を{飲|の}ませられました。', vn: 'Tôi bị trưởng phòng ép uống rượu.' },
            { jp: '{待|ま}たされました。', vn: 'Tôi bị bắt phải đợi.' },
            { jp: '{歌|うた}わされました。', vn: 'Tôi bị bắt hát.' },
            { jp: '{荷物|にもつ}を{持|も}たされました。', vn: 'Tôi bị bắt mang hành lý.' },
            { jp: '{日曜日|にちようび}に{働|はたら}かされました。', vn: 'Tôi bị bắt làm việc vào chủ nhật.' },
            { jp: '{掃除|そうじ}させられました。', vn: 'Tôi bị bắt dọn dẹp.' },
            { jp: '1{時間|じかん}も{立|た}たされました。', vn: 'Tôi bị bắt đứng suốt 1 tiếng.' },
            { jp: '{妻|つま}に{料理|りょうり}を{作|つく}らされました。', vn: 'Tôi bị vợ bắt nấu ăn.' }
        ]
    },
    {
        id: 20,
        level: 'N4',
        group: 'Nguyên nhân',
        label: '〜ので / 〜から',
        meaning: 'Bởi vì... (Khách quan / Chủ quan)',
        examples: [
            { jp: '{雨|あめ}が{降|ふ}っているので、{出|で}かけません。', vn: 'Vì trời đang mưa nên tôi không ra ngoài (nhẹ nhàng).' },
            { jp: 'バスが{来|こ}ないので、{遅|おく}れました。', vn: 'Vì xe buýt không đến nên tôi bị muộn.' },
            { jp: '{用事|ようじ}があるので、お{先|さき}に{失礼|しつれい}します。', vn: 'Vì có việc bận nên tôi xin phép về trước.' },
            { jp: '{危|あぶ}ないですから、{触|さわ}らないでください。', vn: 'Vì nguy hiểm nên đừng chạm vào.' },
            { jp: '{時間|じかん}がありませんから、{急|いそ}ぎましょう。', vn: 'Vì không có thời gian nên chúng ta gấp rút lên nào.' },
            { jp: '{気分|きぶん}が{悪|わる}いので、{帰|かえ}ってもいいですか。', vn: 'Vì tôi thấy không khỏe, tôi về có được không?' },
            { jp: '{日曜日|にちようび}なので、{休|やす}みです。', vn: 'Vì là chủ nhật nên được nghỉ.' },
            { jp: '{好|す}きなので、{毎日|まいにち}{食|た}べます。', vn: 'Vì thích nên ngày nào tôi cũng ăn.' },
            { jp: '{日本語|にほんご}がわからないので、{英語|えいご}で{話|はな}しました。', vn: 'Vì không hiểu tiếng Nhật nên tôi đã nói bằng tiếng Anh.' },
            { jp: '{約束|やくそく}がありますから、{帰|かえ}ります。', vn: 'Vì có hẹn nên tôi về.' }
        ]
    },
    {
        id: 21,
        level: 'N4',
        group: 'Nguyên nhân',
        label: '〜て / 〜で (Nguyên nhân)',
        meaning: 'Vì... (Dẫn đến kết quả tự nhiên)',
        examples: [
            { jp: 'ニュースを{聞|き}いて、びっくりしました。', vn: 'Nghe tin tức, tôi đã giật mình.' },
            { jp: '{家族|かぞく}に{会|あ}えなくて、{寂|さび}しいです。', vn: 'Không gặp được gia đình, tôi buồn.' },
            { jp: '{土曜日|どようび}は{都合|つごう}が{悪|わる}くて、{行|い}けません。', vn: 'Thứ bảy tôi không tiện nên không đi được.' },
            { jp: '{地震|じしん}でビルが{倒|たお}れました。', vn: 'Vì động đất, tòa nhà đã đổ.' },
            { jp: '{病気|びょうき}で{会社|かいしゃ}を{休|やす}みました。', vn: 'Vì bệnh nên tôi nghỉ làm.' },
            { jp: '{事故|じこ}で{電車|でんしゃ}が{止|と}まりました。', vn: 'Do tai nạn nên tàu điện đã dừng.' },
            { jp: '{説明|せつめい}が{複雑|ふくざつ}で、わかりません。', vn: 'Giải thích phức tạp nên tôi không hiểu.' },
            { jp: '{遅|おそ}くなって、すみません。', vn: 'Xin lỗi vì tôi đến muộn.' },
            { jp: '{電話|でんわ}がなくて、{困|こま}りました。', vn: 'Không có điện thoại nên tôi đã gặp rắc rối.' },
            { jp: '{火事|かじ}で{家|いえ}が{焼|や}けました。', vn: 'Vì hỏa hoạn, ngôi nhà đã bị cháy.' }
        ]
    },
    {
        id: 22,
        level: 'N4',
        group: 'Giải thích',
        label: '〜んです',
        meaning: '...ấy mà / ...đấy (Giải thích lý do, nhấn mạnh)',
        examples: [
            { jp: 'どうしたんですか。', vn: 'Có chuyện gì vậy?' },
            { jp: '{頭|あたま}が{痛|いた}いんです。', vn: 'Tôi bị đau đầu (giải thích).' },
            { jp: 'どこへ{行|い}くんですか。', vn: 'Bạn đi đâu đấy?' },
            { jp: '{日本語|にほんご}が{上手|じょうず}ですね。ー{日本|にほん}に{住|す}んでいたんです。', vn: 'Tiếng Nhật giỏi nhỉ. - Vì tôi từng sống ở Nhật mà.' },
            { jp: '{遅|おそ}れてすみません。バスが{来|こ}なかったんです。', vn: 'Xin lỗi vì đến muộn. Tại xe buýt không tới.' },
            { jp: 'きれいな{靴|くつ}ですね。どこで{買|か}ったんですか。', vn: 'Giày đẹp nhỉ. Bạn mua ở đâu vậy?' },
            { jp: '{食|た}べないんですか。ーええ、お{腹|なか}がいっぱいなんです。', vn: 'Bạn không ăn à? - Ừ, tôi no quá.' },
            { jp: '{明日|あした}は{暇|ひま}ですか。ーいいえ、{用事|ようじ}があるんです。', vn: 'Mai rảnh không? - Không, tôi có việc bận.' },
            { jp: 'どうして{休|やす}んだんですか。', vn: 'Tại sao bạn nghỉ thế?' },
            { jp: 'その{本|ほん}、{面白|おもしろ}いんですか。', vn: 'Quyển sách đó hay không (tò mò)?' }
        ]
    },
    {
        id: 23,
        level: 'N4',
        group: 'Cho & Nhận',
        label: '〜ていただけませんか',
        meaning: 'Làm ơn... giúp tôi được không? (Hỏi lịch sự)',
        examples: [
            { jp: '{塩|しお}を{取|と}っていただけませんか。', vn: 'Làm ơn lấy giúp tôi lọ muối được không?' },
            { jp: '{道|みち}を{教|おし}えていただけませんか。', vn: 'Làm ơn chỉ đường giúp tôi được không?' },
            { jp: 'もう{一度|いちど}{説明|せつめい}していただけませんか。', vn: 'Làm ơn giải thích lại giúp tôi được không?' },
            { jp: '{写真|しゃしん}を{撮|と}っていただけませんか。', vn: 'Làm ơn chụp giúp tôi tấm ảnh được không?' },
            { jp: 'ちょっと{手伝|てつだ}ってくれませんか。', vn: 'Giúp tôi một tay được không (thân mật hơn)?' },
            { jp: '{本|ほん}を{貸|か}してくれませんか。', vn: 'Cho tôi mượn sách được không?' },
            { jp: '{明日|あした}{来|き}てくれませんか。', vn: 'Mai đến nhé?' },
            { jp: '{書|か}き{方|かた}を{教|おし}えてくださいませんか。', vn: 'Làm ơn chỉ tôi cách viết được không?' },
            { jp: '{紹介|しょうかい}していただけませんか。', vn: 'Làm ơn giới thiệu giúp tôi được không?' },
            { jp: '{日本語|にほんご}を{直|なお}していただけませんか。', vn: 'Làm ơn sửa tiếng Nhật giúp tôi được không?' }
        ]
    },
    {
        id: 24,
        level: 'N4',
        group: 'Trạng thái',
        label: '見える / 聞こえる',
        meaning: 'Nhìn thấy / Nghe thấy (Khả năng tự nhiên)',
        examples: [
            { jp: '{富士山|ふじさん}が{見|み}えます。', vn: 'Có thể nhìn thấy núi Phú Sĩ (từ đây).' },
            { jp: '{波|なみ}の{音|おと}が{聞|き}こえます。', vn: 'Có thể nghe thấy tiếng sóng.' },
            { jp: 'ここから{海|うみ}が{見|み}えます。', vn: 'Từ đây có thể thấy biển.' },
            { jp: '{声|こえ}がよく{聞|き}こえません。', vn: 'Tôi không nghe rõ tiếng.' },
            { jp: '{不思議|ふしぎ}な{音|おと}が{聞|き}こえます。', vn: 'Nghe thấy âm thanh lạ.' },
            { jp: '{星|ほし}が{見|み}えますか。', vn: 'Bạn có thấy sao không?' },
            { jp: '{新|あたら}しいビルが{見|み}えます。', vn: 'Nhìn thấy tòa nhà mới.' },
            { jp: '{鳥|とり}の{声|こえ}が{聞|き}こえます。', vn: 'Nghe thấy tiếng chim.' },
            { jp: '{眼鏡|めがね}がないと、{見|み}えません。', vn: 'Không có kính thì tôi không thấy gì.' },
            { jp: '{隣|となり}の{部屋|へや}の{話|はな}し{声|こえ}が{聞|き}こえます。', vn: 'Nghe thấy tiếng nói chuyện phòng bên cạnh.' }
        ]
    },
    {
        id: 25,
        level: 'N4',
        group: 'Chuẩn bị',
        label: '〜ておきます',
        meaning: 'Làm sẵn / Để nguyên',
        examples: [
            { jp: '{旅行|りょこう}の{前|まえ}に、{切符|きっぷ}を{買|か}っておきます。', vn: 'Trước khi đi du lịch, tôi sẽ mua vé sẵn.' },
            { jp: 'この{資料|しりょう}を{読|よ}んでおいてください。', vn: 'Hãy đọc trước tài liệu này nhé.' },
            { jp: '{使|つか}ったあとで、{道具|どうぐ}を{片付|かたづ}けておきます。', vn: 'Sau khi dùng, tôi dọn dẹp dụng cụ (về chỗ cũ).' },
            { jp: '{窓|まど}を{開|あ}けておいてください。', vn: 'Cứ để cửa sổ mở đi.' },
            { jp: 'ホテルを{予約|よやく}しておきました。', vn: 'Tôi đã đặt khách sạn sẵn rồi.' },
            { jp: 'そのままにしておいてください。', vn: 'Cứ để nguyên như vậy.' },
            { jp: '{授業|じゅぎょう}の{前|まえ}に、{予習|よしゅう}しておきます。', vn: 'Trước giờ học tôi soạn bài sẵn.' },
            { jp: '{晩|ばん}ご{飯|はん}を{作|つく}っておきます。', vn: 'Tôi sẽ nấu cơm tối sẵn.' },
            { jp: '{冷|ひ}やしておいてください。', vn: 'Hãy làm lạnh sẵn đi.' },
            { jp: 'メモしておきます。', vn: 'Tôi sẽ ghi chú lại.' }
        ]
    },
    {
        id: 26,
        level: 'N4',
        group: 'Thử nghiệm',
        label: '〜てみます',
        meaning: 'Làm thử',
        examples: [
            { jp: 'この{靴|くつ}を{履|は}いてみてもいいですか。', vn: 'Tôi đi thử đôi giày này được không?' },
            { jp: '{納豆|なっとう}を{食|た}べてみました。', vn: 'Tôi đã ăn thử Natto.' },
            { jp: '{一度|いちど}{着物|きもの}を{着|き}てみたいです。', vn: 'Tôi muốn mặc thử Kimono một lần.' },
            { jp: 'サイズが{合|あ}うかどうか、{着|き}てみます。', vn: 'Tôi sẽ mặc thử xem kích cỡ có vừa không.' },
            { jp: '{行|い}ってみましょう。', vn: 'Chúng ta đi thử xem sao.' },
            { jp: '{彼|かれ}に{聞|き}いてみます。', vn: 'Tôi sẽ hỏi thử anh ấy.' },
            { jp: '{自分|じぶん}で{作|つく}ってみました。', vn: 'Tôi đã tự làm thử.' },
            { jp: '{日本|にほん}の{酒|さけ}を{飲|の}んでみたいです。', vn: 'Tôi muốn uống thử rượu Nhật.' },
            { jp: 'そこへ{行|い}ってみたいです。', vn: 'Tôi muốn đi thử đến đó.' },
            { jp: '{日本語|にほんご}で{話|はな}してみます。', vn: 'Tôi sẽ nói thử bằng tiếng Nhật.' }
        ]
    },
    {
        id: 27,
        level: 'N4',
        group: 'Nghĩa vụ',
        label: '〜なければなりません',
        meaning: 'Phải làm... (Bắt buộc)',
        examples: [
            { jp: '{薬|くすり}を{飲|の}まなければなりません。', vn: 'Phải uống thuốc.' },
            { jp: '{明日|あした}、{病院|びょういん}へ{行|い}かなければなりません。', vn: 'Ngày mai phải đi bệnh viện.' },
            { jp: '{宿題|しゅくだい}をしなければなりません。', vn: 'Phải làm bài tập.' },
            { jp: 'パスポートを{見|み}せなければなりません。', vn: 'Phải cho xem hộ chiếu.' },
            { jp: 'シートベルトをしなければなりません。', vn: 'Phải thắt dây an toàn.' },
            { jp: '{土曜日|どようび}も{働|はたら}かなければなりません。', vn: 'Thứ 7 cũng phải làm việc.' },
            { jp: '{早|はや}く{帰|かえ}らなければなりません。', vn: 'Phải về sớm.' },
            { jp: '{勉強|べんきょう}しなくてはいけません。', vn: 'Phải học (văn nói).' },
            { jp: '{税金|ぜいきん}を{払|はら}わなければなりません。', vn: 'Phải đóng thuế.' },
            { jp: '{約束|やくそく}を{守|まも}らなければなりません。', vn: 'Phải giữ lời hứa.' }
        ]
    },
    {
        id: 28,
        level: 'N4',
        group: 'Mục đích',
        label: '〜ように / 〜ために',
        meaning: 'Để... (Mục đích kèm khả năng / Lợi ích)',
        examples: [
            { jp: '{日本語|にほんご}が{話|はな}せるように、{毎日|まいにち}{練習|れんしゅう}します。', vn: 'Tôi luyện tập hàng ngày để có thể nói tiếng Nhật (Khả năng).' },
            { jp: '{忘|わす}れないように、メモします。', vn: 'Tôi ghi chú để không quên.' },
            { jp: 'よく{見|み}えるように、{前|まえ}の{方|ほう}に{座|すわ}りました。', vn: 'Tôi ngồi phía trước để nhìn rõ.' },
            { jp: '{家|いえ}を{買|か}うために、{貯金|ちょきん}しています。', vn: 'Tôi tiết kiệm tiền để mua nhà (Hành động ý chí).' },
            { jp: '{健康|けんこう}のために、{野菜|やさい}を{食|た}べます。', vn: 'Vì sức khỏe, tôi ăn rau.' },
            { jp: '{家族|かぞく}のために、{働|はたら}きます。', vn: 'Tôi làm việc vì gia đình.' },
            { jp: '{風邪|かぜ}を{引|ひ}かないように、{気|き}をつけています。', vn: 'Tôi cẩn thận để không bị cảm.' },
            { jp: '{間|ま}に{合|あ}うように、{走|はし}りました。', vn: 'Tôi đã chạy để kịp giờ.' },
            { jp: '{日本|にほん}へ{行|い}くために、{日本語|にほんご}を{勉強|べんきょう}します。', vn: 'Tôi học tiếng Nhật để đi Nhật.' },
            { jp: 'みんなに{聞|き}こえるように、{大|おお}きな{声|こえ}で{話|はな}しました。', vn: 'Tôi nói to để mọi người nghe thấy.' }
        ]
    },
    {
        id: 29,
        level: 'N4',
        group: 'Quyết định',
        label: '〜ことにします',
        meaning: 'Quyết định làm / Chọn',
        examples: [
            { jp: '{明日|あした}からタバコを{辞|や}めることにします。', vn: 'Tôi quyết định bỏ thuốc từ ngày mai.' },
            { jp: '{毎朝|まいあさ}ジョギングすることにしました。', vn: 'Tôi đã quyết định chạy bộ mỗi sáng.' },
            { jp: '{昼|ひる}ご{飯|はん}はラーメンにします。', vn: 'Trưa nay tôi chọn ăn mì Ramen.' },
            { jp: '{会議|かいぎ}は{月曜日|げつようび}にします。', vn: 'Quyết định cuộc họp vào thứ hai.' },
            { jp: '{旅行|りょこう}に{行|い}かないことにしました。', vn: 'Tôi đã quyết định không đi du lịch.' },
            { jp: '{今日|きょう}から{日記|にっき}を{書|か}くことにします。', vn: 'Tôi quyết định viết nhật ký từ hôm nay.' },
            { jp: '{車|くるま}を{売|う}ることにしました。', vn: 'Tôi đã quyết định bán xe.' },
            { jp: 'これにします。', vn: 'Tôi chọn cái này.' },
            { jp: 'コーヒーにしますか、それとも{紅茶|こうちゃ}にしますか。', vn: 'Bạn chọn cà phê hay hồng trà?' },
            { jp: 'ホテルは{駅|えき}の{近|ちか}くにしました。', vn: 'Tôi đã chọn khách sạn gần nhà ga.' }
        ]
    },
    {
        id: 30,
        level: 'N4',
        group: 'Thay đổi',
        label: '〜ようになります',
        meaning: 'Trở nên (Thay đổi khả năng/thói quen)',
        examples: [
            { jp: '{日本語|にほんご}が{話|はな}せるようになりました。', vn: 'Tôi đã có thể nói được tiếng Nhật.' },
            { jp: '{自転車|じてんしゃ}に{乗|の}れるようになりました。', vn: 'Tôi đã biết đi xe đạp.' },
            { jp: 'やっと{納豆|なっとう}が{食|た}べられるようになりました。', vn: 'Cuối cùng tôi cũng ăn được Natto.' },
            { jp: '{小|ちい}さな{字|じ}が{見|み}えなくなりました。', vn: 'Tôi đã không còn nhìn thấy chữ nhỏ.' },
            { jp: '{毎日|まいにち}{運動|うんどう}するようになりました。', vn: 'Tôi đã bắt đầu (có thói quen) vận động mỗi ngày.' },
            { jp: 'ニュースがわかるようになりました。', vn: 'Tôi đã hiểu được bản tin.' },
            { jp: 'ピアノが{弾|ひ}けるようになりました。', vn: 'Tôi đã biết chơi piano.' },
            { jp: '{早起|はやお}きするようになりました。', vn: 'Tôi đã bắt đầu dậy sớm.' },
            { jp: 'ここを{通|とお}れるようになりました。', vn: 'Đã có thể đi qua chỗ này.' },
            { jp: 'パソコンが{使|つか}えるようになりました。', vn: 'Tôi đã biết sử dụng máy tính.' }
        ]
    },
    {
        id: 31,
        level: 'N4',
        group: 'Điều kiện',
        label: '〜と (Hễ... thì)',
        meaning: 'Hễ A thì B (Kết quả tất yếu / Máy móc)',
        examples: [
            { jp: 'このボタンを{押|お}すと、お{釣|つ}りが出ます。', vn: 'Hễ ấn nút này thì tiền thừa sẽ ra.' },
            { jp: 'これを{回|まわ}すと、{音|おと}が{大|おお}きくなります。', vn: 'Hễ vặn cái này thì tiếng sẽ to lên.' },
            { jp: '{春|はる}になると、{暖|あたた}かくなります。', vn: 'Hễ sang xuân thì trời ấm lên.' },
            { jp: 'まっすぐ{行|い}くと、{右|みぎ}に{駅|えき}があります。', vn: 'Hễ đi thẳng thì nhà ga ở bên phải.' },
            { jp: '{酒|さけ}を{飲|の}むと、{顔|かお}が{赤|あか}くなります。', vn: 'Hễ uống rượu là mặt đỏ.' },
            { jp: '{夜|よる}になると、{暗|くら}くなります。', vn: 'Hễ trời tối thì sẽ tối.' },
            { jp: 'あの{交差点|こうさてん}を{左|ひだり}へ{曲|ま}がると、{銀行|ぎんこう}があります。', vn: 'Hễ rẽ trái ở ngã tư kia thì có ngân hàng.' },
            { jp: '{冬|ふゆ}になると、{雪|ゆき}が{降|ふ}ります。', vn: 'Hễ đến mùa đông thì tuyết rơi.' },
            { jp: '100を2で{割|わ}ると、50になります。', vn: '100 chia 2 thì bằng 50.' },
            { jp: '{値段|ねだん}が{高|たか}いと、{売|う}れません', vn: 'Hễ giá cao thì không bán được.' }
        ]
    },
    {
        id: 32,
        level: 'N4',
        group: 'Nghịch cảnh',
        label: '〜のに',
        meaning: 'Mặc dù... thế mà... (Bất mãn / Ngạc nhiên)',
        examples: [
            { jp: '{一生懸命|いっしょうけんめい}{勉強|べんきょう}したのに、{不合格|ふごうかく}でした。', vn: 'Mặc dù đã học chăm chỉ thế mà vẫn trượt.' },
            { jp: '{約束|やくそく}したのに、{彼|かれ}は{来|き}ませんでした。', vn: 'Mặc dù đã hứa thế mà anh ấy không đến.' },
            { jp: '{今日|きょう}は{日曜日|にちようび}なのに、{働|はたら}かなければなりません。', vn: 'Mặc dù hôm nay là chủ nhật thế mà vẫn phải làm việc.' },
            { jp: '{高|たか}いのに、あまり{美味|おい}しくないです。', vn: 'Mặc dù đắt thế mà không ngon lắm.' },
            { jp: 'お{金|かね}がないのに、{買|か}い{物|もの}しました。', vn: 'Mặc dù không có tiền thế mà đã mua sắm.' },
            { jp: '{薬|くすり}を{飲|の}んだのに、{熱|ねつ}が{下|さ}がりません。', vn: 'Mặc dù đã uống thuốc thế mà không hạ sốt.' },
            { jp: 'もう{春|はる}なのに、まだ{寒|さむ}いです。', vn: 'Mặc dù đã là mùa xuân thế mà vẫn lạnh.' },
            { jp: '{知|し}っていますのに、{教|おし}えてくれません。', vn: 'Mặc dù biết thế mà không chỉ cho tôi.' },
            { jp: '{元気|げんき}なのに、{仕事|しごと}をしません。', vn: 'Mặc dù khỏe mạnh thế mà không làm việc.' },
            { jp: 'このアパートは{狭|せま}いのに、{家賃|やちん}が{高|たか}いです。', vn: 'Căn hộ này chật thế mà tiền thuê đắt.' }
        ]

    },
    {
        id: 44,
        level: 'N5',
        group: 'Trợ từ',
        label: '〜や〜（など）',
        meaning: 'Liệt kê không đầy đủ (Như là A, như là B...)',
        examples: [
            { jp: '{机|つくえ}の{上|うえ}に{本|ほん}やペンがあります。', vn: 'Trên bàn có sách, bút (và những thứ khác).' },
            { jp: '{鞄|かばん}の{中|なか}に{財布|さいふ}や{鍵|かぎ}などがあります。', vn: 'Trong túi có ví, chìa khóa (chẳng hạn).' },
            { jp: '{日曜日|にちようび}はテニスやサッカーをします。', vn: 'Chủ nhật tôi chơi tennis, bóng đá (v.v).' },
            { jp: 'お{店|みせ}で{野菜|やさい}や{果物|くだもの}を{買|か}いました。', vn: 'Tôi đã mua rau, hoa quả... ở cửa hàng.' },
            { jp: '{京都|きょうと}や{奈良|なら}へ{行|い}きたいです。', vn: 'Tôi muốn đi Kyoto, Nara...' },
            { jp: '{朝|あさ}ごはんはパンや{卵|たまご}を{食|た}べます。', vn: 'Sáng tôi ăn bánh mì, trứng...' },
            { jp: '{教室|きょうしつ}に{田中|たなか}さんや{山田|やまだ}さんがいます。', vn: 'Trong lớp có anh Tanaka, anh Yamada...' },
            { jp: '{日本料理|にほんりょうり}やタイ{料理|りょうり}が{好|す}きです。', vn: 'Tôi thích món Nhật, món Thái...' },
            { jp: '{動物園|どうぶつえん}で{象|ぞう}やライオンを{見|み}ました。', vn: 'Ở sở thú tôi đã thấy voi, sư tử...' },
            { jp: '{飲|の}み{物|もの}やお{菓子|かし}を{用意|ようい}しました。', vn: 'Tôi đã chuẩn bị đồ uống, bánh kẹo...' }
        ]
    },
    {
        id: 45,
        level: 'N5',
        group: 'Trợ từ',
        label: '[Noun] で (Phương tiện)',
        meaning: 'Bằng (Công cụ / Phương tiện)',
        examples: [
            { jp: '{箸|はし}で{食|た}べます。', vn: 'Tôi ăn bằng đũa.' },
            { jp: '{日本語|にほんご}でレポートを{書|か}きます。', vn: 'Tôi viết báo cáo bằng tiếng Nhật.' },
            { jp: 'バスで{会社|かいしゃ}へ{行|い}きます。', vn: 'Tôi đi đến công ty bằng xe buýt.' },
            { jp: 'ハサミで{紙|かみ}を{切|き}ります。', vn: 'Tôi cắt giấy bằng kéo.' },
            { jp: 'これは{日本語|にほんご}で{何|なん}と{言|い}いますか。', vn: 'Cái này tiếng Nhật gọi là gì?' },
            { jp: 'インターネットで{調|しら}べます。', vn: 'Tôi tra cứu bằng internet.' },
            { jp: 'カードで{払|はら}います。', vn: 'Tôi trả bằng thẻ.' },
            { jp: 'ボールペンで{書|か}いてください。', vn: 'Hãy viết bằng bút bi.' },
            { jp: 'ファックスで{送|おく}りました。', vn: 'Tôi đã gửi bằng fax.' },
            { jp: '{自転車|じてんしゃ}で{来|き}ました。', vn: 'Tôi đã đến bằng xe đạp.' }
        ]
    },
    {
        id: 46,
        level: 'N5',
        group: 'Liên từ',
        label: '〜が / 〜けど',
        meaning: 'Nhưng... (Nối câu)',
        examples: [
            { jp: '{日本|にほん}の{食|た}べ{物|もの}は{美味|おい}しいですが、{高|たか}いです。', vn: 'Đồ ăn Nhật ngon nhưng đắt.' },
            { jp: '{行|い}きたいですが、{時間|じかん}がありません。', vn: 'Tôi muốn đi nhưng không có thời gian.' },
            { jp: '{雨|あめ}が{降|ふ}っていますが、{出|で}かけます。', vn: 'Trời đang mưa nhưng tôi vẫn ra ngoài.' },
            { jp: '{勉強|べんきょう}しましたが、わかりませんでした。', vn: 'Tôi đã học nhưng vẫn không hiểu.' },
            { jp: 'すみませんが、{塩|しお}を{取|と}ってください。', vn: 'Xin lỗi, làm ơn lấy giúp tôi lọ muối.' },
            { jp: '{部屋|へや}を{探|さが}しているんですが...。', vn: 'Tôi đang tìm phòng (nhưng có chút khó khăn)...' },
            { jp: '{薬|くすり}を{飲|の}みましたが、{治|なお}りません。', vn: 'Tôi đã uống thuốc nhưng không khỏi.' },
            { jp: '{安|やす}かったけど、{買|か}いませんでした。', vn: 'Rẻ đấy nhưng tôi đã không mua.' },
            { jp: '{会|あ}いたいけど、{会|あ}えません。', vn: 'Muốn gặp nhưng không gặp được.' },
            { jp: '{田中|たなか}さんは{来|き}ましたが、{山田|やまだ}さんは{来|き}ませんでした。', vn: 'Anh Tanaka đã đến nhưng anh Yamada thì không.' }
        ]
    },
    {
        id: 47,
        level: 'N5',
        group: 'Vĩ tố',
        label: '〜ね / 〜よ',
        meaning: 'Nhỉ (Đồng tình) / Đấy (Thông báo)',
        examples: [
            { jp: 'いい{天気|てんき}ですね。', vn: 'Thời tiết đẹp nhỉ.' },
            { jp: 'そうですね。', vn: 'Đúng vậy nhỉ.' },
            { jp: 'きれいですね。', vn: 'Đẹp nhỉ.' },
            { jp: '{明日|あした}ですよ。', vn: 'Là ngày mai đấy.' },
            { jp: 'この{本|ほん}は{面白|おもしろ}いですよ。', vn: 'Quyển sách này hay đấy.' },
            { jp: '{危|あぶ}ないですよ。', vn: 'Nguy hiểm đấy.' },
            { jp: 'もう12{時|じ}ですね。', vn: 'Đã 12 giờ rồi nhỉ.' },
            { jp: '{私|わたし}がやりますよ。', vn: 'Tôi sẽ làm đấy (để tôi làm cho).' },
            { jp: '{知|し}っていますね。', vn: 'Bạn biết đúng không?' },
            { jp: '{違|ちが}いますよ。', vn: 'Sai rồi đấy.' }
        ]
    },
    {
        id: 48,
        level: 'N5',
        group: 'Từ để hỏi',
        label: '何・どこ・誰・いつ...',
        meaning: 'Các từ để hỏi cơ bản',
        examples: [
            { jp: 'これは{何|なん}ですか。', vn: 'Đây là cái gì?' },
            { jp: 'トイレはどこですか。', vn: 'Nhà vệ sinh ở đâu?' },
            { jp: 'あの{人|ひと}は{誰|だれ}ですか。', vn: 'Người kia là ai?' },
            { jp: '{誕生日|たんじょうび}はいつですか。', vn: 'Sinh nhật là khi nào?' },
            { jp: 'いくらですか。', vn: 'Bao nhiêu tiền?' },
            { jp: 'どんな{映画|えいが}が{好|す}きですか。', vn: 'Bạn thích loại phim thế nào?' },
            { jp: 'どうやって{学校|がっこう}へ{行|い}きますか。', vn: 'Bạn đi đến trường bằng cách nào?' },
            { jp: '{日本|にほん}の{生活|せいかつ}はどうですか。', vn: 'Cuộc sống ở Nhật thế nào?' },
            { jp: '{何歳|なんさい}ですか。', vn: 'Mấy tuổi vậy?' },
            { jp: 'なぜ（どうして）ここに{来|き}ましたか。', vn: 'Tại sao lại đến đây?' }
        ]
    },
    // --- N4 Bổ sung ---
    {
        id: 33,
        level: 'N4',
        group: 'Nghịch cảnh',
        label: '〜ても',
        meaning: 'Cho dù... (vẫn)',
        examples: [
            { jp: '{雨|あめ}が{降|ふ}っても、{行|い}きます。', vn: 'Cho dù trời mưa, tôi vẫn đi.' },
            { jp: '{高|たか}くても、{買|か}いたいです。', vn: 'Cho dù đắt tôi vẫn muốn mua.' },
            { jp: '{調|しら}べても、わかりません。', vn: 'Cho dù đã tra cứu, tôi vẫn không hiểu.' },
            { jp: '{静|しず}かでも、{寝|ね}られません。', vn: 'Cho dù yên tĩnh, tôi vẫn không ngủ được.' },
            { jp: 'いくら{考|かんが}えても、わかりません。', vn: 'Cho dù suy nghĩ bao nhiêu đi nữa cũng không hiểu.' },
            { jp: '{先生|せんせい}に{聞|き}いても、{教|おし}えてくれませんでした。', vn: 'Cho dù hỏi thầy giáo, thầy cũng không chỉ.' },
            { jp: '{日曜日|にちようび}でも、{働|はたら}きます。', vn: 'Cho dù là chủ nhật, tôi vẫn làm việc.' },
            { jp: '{薬|くすり}を{飲|の}んでも、{熱|ねつ}が{下|さ}がりません。', vn: 'Cho dù uống thuốc, sốt vẫn không hạ.' },
            { jp: '{遠|とお}くても、{歩|ある}いて{行|い}きます。', vn: 'Cho dù xa, tôi vẫn đi bộ.' },
            { jp: '{嫌|いや}でも、しなければなりません。', vn: 'Cho dù ghét, vẫn phải làm.' }
        ]
    },
    {
        id: 34,
        level: 'N4',
        group: 'Điều kiện',
        label: '〜場合は',
        meaning: 'Trong trường hợp...',
        examples: [
            { jp: '{火事|かじ}の{場合|ばあい}は、119{番|ばん}に{電話|でんわ}してください。', vn: 'Trong trường hợp hỏa hoạn, hãy gọi 119.' },
            { jp: '{遅|おく}れる{場合|ばあい}は、{連絡|れんらく}してください。', vn: 'Trong trường hợp đến muộn, hãy liên lạc.' },
            { jp: 'パスポートをなくした{場合|ばあい}は、{大使館|たいしかん}へ{行|い}きます。', vn: 'Trong trường hợp mất hộ chiếu, hãy đến đại sứ quán.' },
            { jp: '{雨|あめ}の{場合|ばあい}は、{中止|ちゅうし}です。', vn: 'Trong trường hợp mưa, sẽ hủy bỏ.' },
            { jp: '{故障|こしょう}した{場合|ばあい}は、{修理|しゅうり}します。', vn: 'Trong trường hợp bị hỏng, sẽ sửa chữa.' },
            { jp: '{参加|さんか}できない{場合|ばあい}は、{教|おし}えてください。', vn: 'Trong trường hợp không thể tham gia, hãy cho tôi biết.' },
            { jp: '{緊急|きんきゅう}の{場合|ばあい}は、ボタンを{押|お}してください。', vn: 'Trường hợp khẩn cấp, hãy ấn nút.' },
            { jp: 'カードを{紛失|ふんしつ}した{場合|ばあい}は、すぐ{銀行|ぎんこう}に{言|い}います。', vn: 'Trường hợp mất thẻ, hãy báo ngay cho ngân hàng.' },
            { jp: 'サイズが{合|あ}わない{場合|ばあい}は、{交換|こうかん}できます。', vn: 'Trường hợp kích cỡ không vừa, có thể đổi.' },
            { jp: '{必要|ひつよう}な{場合|ばあい}は、コピーします。', vn: 'Trường hợp cần thiết, tôi sẽ photo.' }
        ]
    },
    {
        id: 35,
        level: 'N4',
        group: 'Cho phép/Không cần',
        label: '〜なくてもいいです',
        meaning: 'Không cần làm... cũng được',
        examples: [
            { jp: '{明日|あした}は{来|こ}なくてもいいです。', vn: 'Ngày mai không cần đến cũng được.' },
            { jp: '{薬|くすり}を{飲|の}まなくてもいいです。', vn: 'Không cần uống thuốc cũng được.' },
            { jp: '{靴|くつ}を{脱|ぬ}がなくてもいいです。', vn: 'Không cần cởi giày cũng được.' },
            { jp: '{急|いそ}がなくてもいいですよ。', vn: 'Không cần vội đâu.' },
            { jp: '{全部|ぜんぶ}{食|た}べなくてもいいです。', vn: 'Không cần ăn hết cũng được.' },
            { jp: '{名前|なまえ}を{書|か}かなくてもいいです。', vn: 'Không cần viết tên cũng được.' },
            { jp: 'お{金|かね}を{払|はら}わなくてもいいです。{無料|むりょう}ですから。', vn: 'Không cần trả tiền đâu. Vì miễn phí mà.' },
            { jp: '{日曜日|にちようび}は{早|はや}く{起|お}きなくてもいいです。', vn: 'Chủ nhật không cần dậy sớm cũng được.' },
            { jp: '{心配|しんぱい}しなくてもいいです。', vn: 'Không cần lo lắng đâu.' },
            { jp: '{無理|むり}しなくてもいいです。', vn: 'Không cần quá sức đâu.' }
        ]
    },
    {
        id: 36,
        level: 'N4',
        group: 'Cố gắng',
        label: '〜ようにします',
        meaning: 'Cố gắng làm... (Thói quen / Nỗ lực)',
        examples: [
            { jp: '{毎日|まいにち}{野菜|やさい}を{食|た}べるようにしています。', vn: 'Tôi đang cố gắng ăn rau mỗi ngày.' },
            { jp: '{甘|あま}い{物|もの}を{食|た}べないようにしています。', vn: 'Tôi đang cố gắng không ăn đồ ngọt.' },
            { jp: '{毎日|まいにち}{運動|うんどう}するようにします。', vn: 'Tôi sẽ cố gắng vận động hàng ngày.' },
            { jp: '12{時|じ}までに{寝|ね}るようにしています。', vn: 'Tôi cố gắng ngủ trước 12 giờ.' },
            { jp: '{忘|わす}れ{物|もの}をしないようにしてください。', vn: 'Hãy cố gắng đừng để quên đồ.' },
            { jp: '{日本語|にほんご}で{話|はな}すようにします。', vn: 'Tôi sẽ cố gắng nói bằng tiếng Nhật.' },
            { jp: '{絶対|ぜったい}に{遅|おく}れないようにしてください。', vn: 'Tuyệt đối cố gắng đừng đến muộn.' },
            { jp: '{無理|むり}しないようにしてください。', vn: 'Hãy cố gắng đừng quá sức.' },
            { jp: 'できるだけ{歩|ある}くようにしています。', vn: 'Tôi cố gắng đi bộ nhiều nhất có thể.' },
            { jp: 'お{酒|さけ}を{飲|の}まないようにします。', vn: 'Tôi sẽ cố gắng không uống rượu.' }
        ]
    },
    {
        id: 37,
        level: 'N4',
        group: 'Kết quả/Quyết định',
        label: '〜ことになります',
        meaning: 'Được quyết định là... (Kết quả khách quan)',
        examples: [
            { jp: '{来月|らいげつ}、{転勤|てんきん}することになりました。', vn: 'Tôi đã có quyết định chuyển công tác vào tháng sau.' },
            { jp: '{明日|あした}、{会議|かいぎ}で{発表|はっぴょう}することになりました。', vn: 'Đã quyết định là ngày mai tôi sẽ phát biểu trong cuộc họp.' },
            { jp: '{日本|にほん}へ{行|い}くことになりました。', vn: 'Việc đi Nhật đã được quyết định.' },
            { jp: '{結婚|けっこん}することになりました。', vn: 'Chúng tôi đã quyết định kết hôn (đã được định đoạt).' },
            { jp: 'この{規則|きそく}は{変|か}わることになりました。', vn: 'Quy tắc này đã được quyết định là sẽ thay đổi.' },
            { jp: '{来週|らいしゅう}から{出張|しゅっちょう}することになりました。', vn: 'Việc đi công tác từ tuần sau đã được ấn định.' },
            { jp: 'ここで{止|と}まってはいけないことになっています。', vn: 'Quy định là không được dừng ở đây.' },
            { jp: '{寮|りょう}に{入|はい}ることになりました。', vn: 'Tôi được sắp xếp vào ở ký túc xá.' },
            { jp: '{手術|しゅじゅつ}することになりました。', vn: 'Việc phẫu thuật đã được quyết định.' },
            { jp: '{来年|らいねん}{帰国|きこく}することになりました。', vn: 'Việc về nước vào năm sau đã được quyết định.' }
        ]
    },
    {
        id: 38,
        level: 'N4',
        group: 'Trích dẫn',
        label: '〜と言いました',
        meaning: 'Nói rằng...',
        examples: [
            { jp: '{田中|たなか}さんは「{明日|あした}{休|やす}む」と{言|い}いました。', vn: 'Anh Tanaka nói rằng "Ngày mai tôi nghỉ".' },
            { jp: '{医者|いしゃ}はタバコを{辞|や}めたほうがいいと{言|い}いました。', vn: 'Bác sĩ nói rằng nên bỏ thuốc lá.' },
            { jp: '{彼|かれ}は{知|し}らないと{言|い}いました。', vn: 'Anh ấy nói là không biết.' },
            { jp: '{母|はは}は{早|はや}く{帰|かえ}って{来|き}てと{言|い}いました。', vn: 'Mẹ bảo là hãy về sớm.' },
            { jp: '{社長|しゃちょう}は{会議|かいぎ}に{出席|しゅっせき}すると{言|い}いました。', vn: 'Giám đốc nói sẽ tham dự cuộc họp.' },
            { jp: '{天気予報|てんきよほう}は{雨|あめ}が{降|ふ}ると{言|い}っていました。', vn: 'Dự báo thời tiết nói là trời sẽ mưa.' },
            { jp: '{日本料理|にほんりょうり}が{好|す}きだと{言|い}いました。', vn: 'Anh ấy nói là thích món Nhật.' },
            { jp: '{友達|ともだち}は{遅|おく}れると{言|い}いました。', vn: 'Bạn tôi nói là sẽ đến muộn.' },
            { jp: '{先生|せんせい}は「{頑張|がんば}れ」と{言|い}いました。', vn: 'Thầy giáo đã nói "Cố lên".' },
            { jp: 'これは{何|なん}と{言|い}う{魚|さかな}ですか。', vn: 'Đây gọi là cá gì?' }
        ]
    },
    {
        id: 39,
        level: 'N4',
        group: 'Phỏng đoán',
        label: '〜ようです / 〜みたいです',
        meaning: 'Hình như / Giống như (Phán đoán chủ quan)',
        examples: [
            { jp: '{彼|かれ}は{疲|つか}れているようです。', vn: 'Anh ấy hình như đang mệt.' },
            { jp: '{外|そと}は{雨|あめ}のようです。', vn: 'Bên ngoài hình như trời mưa.' },
            { jp: '{誰|だれ}もいないようです。', vn: 'Hình như không có ai cả.' },
            { jp: '{故障|こしょう}したようです。', vn: 'Hình như bị hỏng rồi.' },
            { jp: '{夢|ゆめ}のようです。', vn: 'Giống như là mơ vậy.' },
            { jp: '{風邪|かぜ}を{引|ひ}いたみたいです。', vn: 'Hình như tôi bị cảm rồi (văn nói).' },
            { jp: '{子供|こども}みたいです。', vn: 'Như trẻ con vậy.' },
            { jp: '{何|なに}かあったようです。', vn: 'Hình như đã có chuyện gì đó.' },
            { jp: '{会議|かいぎ}は{終|お}わったようです。', vn: 'Cuộc họp hình như đã kết thúc.' },
            { jp: '{道|みち}に{迷|まよ}ったみたいです。', vn: 'Hình như bị lạc đường rồi.' }
        ]
    },
    {
        id: 40,
        level: 'N4',
        group: 'Truyền đạt',
        label: '〜そうです（伝聞）',
        meaning: 'Nghe nói là...',
        examples: [
            { jp: '{天気予報|てんきよほう}によると、{明日|あした}は{晴|は}れだそうです。', vn: 'Theo dự báo thời tiết, nghe nói mai trời nắng.' },
            { jp: '{田中|たなか}さんは{結婚|けっこん}するそうです。', vn: 'Nghe nói anh Tanaka sắp kết hôn.' },
            { jp: 'この{店|みせ}は{美味|おい}しいそうです。', vn: 'Nghe nói quán này ngon lắm.' },
            { jp: '{彼|かれ}は{来月|らいげつ}{帰国|きこく}するそうです。', vn: 'Nghe nói tháng sau anh ấy về nước.' },
            { jp: '{昔|むかし}、ここは{海|うみ}だったそうです。', vn: 'Nghe nói ngày xưa ở đây là biển.' },
            { jp: '{新|あたら}しい{映画|えいが}は{面白|おもしろ}いそうです。', vn: 'Nghe nói bộ phim mới hay lắm.' },
            { jp: '{彼女|かのじょ}は{英語|えいご}が{上手|じょうず}だそうです。', vn: 'Nghe nói cô ấy giỏi tiếng Anh.' },
            { jp: 'インフルエンザが{流行|はや}っているそうです。', vn: 'Nghe nói dịch cúm đang hoành hành.' },
            { jp: '{社長|しゃちょう}は{変|か}わるそうです。', vn: 'Nghe nói giám đốc sẽ thay đổi.' },
            { jp: 'ベトナムは{暑|あつ}いそうです。', vn: 'Nghe nói Việt Nam nóng lắm.' }
        ]
    },
    {
        id: 41,
        level: 'N4',
        group: 'Cảm giác',
        label: '〜がします',
        meaning: 'Có (mùi / tiếng / vị / cảm giác)',
        examples: [
            { jp: 'いい{匂|にお}いがします。', vn: 'Có mùi thơm.' },
            { jp: '{変|へん}な{音|おと}がします。', vn: 'Có tiếng động lạ.' },
            { jp: 'この{料理|りょうり}は{不思議|ふしぎ}な{味|あじ}がします。', vn: 'Món này có vị lạ.' },
            { jp: '{鳥|とり}の{声|こえ}がします。', vn: 'Có tiếng chim hót.' },
            { jp: '{寒気|さむけ}がします。', vn: 'Tôi cảm thấy ớn lạnh.' },
            { jp: 'ガスの{匂|にお}いがします。', vn: 'Có mùi ga.' },
            { jp: '{隣|となり}の{部屋|へや}で{声|こえ}がします。', vn: 'Có tiếng nói ở phòng bên.' },
            { jp: '{甘|あま}い{味|あじ}がします。', vn: 'Có vị ngọt.' },
            { jp: 'めまいがします。', vn: 'Tôi cảm thấy chóng mặt.' },
            { jp: '{吐|は}き{気|け}がします。', vn: 'Tôi cảm thấy buồn nôn.' }
        ]
    },
    {
        id: 42,
        level: 'N4',
        group: 'Định nghĩa',
        label: '〜という意味です',
        meaning: 'Có nghĩa là...',
        examples: [
            { jp: '「{立入禁止|たちいりきんし}」は{入|はい}ってはいけないという意味です。', vn: '"Lập nhập cấm chỉ" có nghĩa là không được vào.' },
            { jp: 'このマークはどういう{意味|いみ}ですか。', vn: 'Ký hiệu này nghĩa là gì?' },
            { jp: '「ありがとう」は{感謝|かんしゃ}の{言葉|ことば}という意味です。', vn: '"Arigatou" có nghĩa là lời cảm ơn.' },
            { jp: 'それはどういう{意味|いみ}ですか。', vn: 'Điều đó có nghĩa là gì?' },
            { jp: '{故障中|こしょうちゅう}というのは、{壊|こわ}れているという意味です。', vn: '"Cố chướng trung" nghĩa là đang bị hỏng.' },
            { jp: '{使用中|しようちゅう}というのは、{今|いま}{使|つか}っているという意味です。', vn: '"Sử dụng trung" nghĩa là đang sử dụng.' },
            { jp: 'この{漢字|かんじ}は「{休|やす}み」という意味です。', vn: 'Chữ Hán này có nghĩa là "Nghỉ ngơi".' },
            { jp: '「{無料|むりょう}」はお{金|かね}を{払|はら}わなくてもいいという意味です。', vn: '"Vô liệu" nghĩa là không cần trả tiền.' },
            { jp: '「{禁煙|きんえん}」はタバコを{吸|す}ってはいけないという意味です。', vn: '"Cấm yên" nghĩa là không được hút thuốc.' },
            { jp: '0{点|てん}というのは、{全然|ぜんぜん}できなかったという意味です。', vn: '0 điểm nghĩa là hoàn toàn không làm được gì.' }
        ]
    },
    {
        id: 43,
        level: 'N4',
        group: 'Hành động',
        label: '〜ないで',
        meaning: 'Làm A mà không làm B (Trạng thái phủ định)',
        examples: [
            { jp: '{朝|あさ}ごはんを{食|た}べないで、{学校|がっこう}へ{行|い}きました。', vn: 'Tôi đi học mà không ăn sáng.' },
            { jp: '{傘|かさ}を{持|も}たないで、{出|で}かけました。', vn: 'Tôi ra ngoài mà không mang theo ô.' },
            { jp: '{寝|ね}ないで、{勉強|べんきょう}しました。', vn: 'Tôi đã học mà không ngủ.' },
            { jp: '{何|なに}も{言|い}わないで、{帰|かえ}りました。', vn: 'Anh ấy đã về mà không nói gì.' },
            { jp: '{砂糖|さとう}を{入|い}れないで、コーヒーを{飲|の}みます。', vn: 'Tôi uống cà phê mà không bỏ đường.' },
            { jp: '{見|み}ないで、{描|か}きました。', vn: 'Tôi đã vẽ mà không nhìn.' },
            { jp: '{切符|きっぷ}を{買|か}わないで、{電車|でんしゃ}に{乗|の}ってはいけません。', vn: 'Không được lên tàu mà không mua vé.' },
            { jp: '{辞書|じしょ}を{使|つか}わないで、{書|か}いてください。', vn: 'Hãy viết mà không dùng từ điển.' },
            { jp: '{歯|は}を{磨|みが}かないで、{寝|ね}ました。', vn: 'Tôi đã ngủ mà không đánh răng.' },
            { jp: '{予約|よやく}しないで、{行|い}きました。', vn: 'Tôi đã đi mà không đặt chỗ.' }
        ]
    },
    {
        id: 44,
        level: 'N4',
        group: 'Tính chất',
        label: '〜やすい / 〜にくい',
        meaning: 'Dễ làm... / Khó làm...',
        examples: [
            { jp: 'このペンは{書|か}きやすいです。', vn: 'Cây bút này dễ viết.' },
            { jp: 'この{靴|くつ}は{歩|ある}きやすいです。', vn: 'Đôi giày này dễ đi bộ.' },
            { jp: 'この{薬|くすり}は{飲|の}みやすいです。', vn: 'Thuốc này dễ uống.' },
            { jp: '{名前|なまえ}は{覚|おぼ}えにくいです。', vn: 'Tên khó nhớ.' },
            { jp: '{肉|にく}は{硬|かた}くて、{食|た}べにくいです。', vn: 'Thịt dai nên khó ăn.' },
            { jp: '{東京|とうきょう}は{住|す}みやすいですか。', vn: 'Tokyo có dễ sống không?' },
            { jp: 'この{辞書|じしょ}は{使|つか}いやすいです。', vn: 'Quyển từ điển này dễ sử dụng.' },
            { jp: '{雨|あめ}の{日|ひ}は{洗濯物|せんたくもの}が{乾|かわ}きにくいです。', vn: 'Ngày mưa thì đồ giặt khó khô.' },
            { jp: '{漢字|かんじ}は{書|か}きにくいです。', vn: 'Chữ Hán khó viết.' },
            { jp: '{説明|せつめい}がわかりにくいです。', vn: 'Lời giải thích khó hiểu.' }
        ]
    },
    {
        id: 45,
        level: 'N4',
        group: 'Thời gian',
        label: '〜までに',
        meaning: 'Trước... (Hạn chót)',
        examples: [
            { jp: '{金曜日|きんようび}までにレポートを{出|だ}してください。', vn: 'Hãy nộp báo cáo trước thứ 6.' },
            { jp: '5{時|じ}までに{帰|かえ}らなければなりません。', vn: 'Tôi phải về trước 5 giờ.' },
            { jp: '{会議|かいぎ}が{始|はじ}まるまでに、{準備|じゅんび}します。', vn: 'Tôi sẽ chuẩn bị trước khi cuộc họp bắt đầu.' },
            { jp: '{明日|あした}までに{連絡|れんらく}します。', vn: 'Tôi sẽ liên lạc trước ngày mai.' },
            { jp: '{暗|くら}くなるまでに{戻|もど}りましょう。', vn: 'Chúng ta hãy quay lại trước khi trời tối.' },
            { jp: '{卒業|そつぎょう}するまでに、{車|くるま}の{免許|めんきょ}を{取|と}りたいです。', vn: 'Tôi muốn lấy bằng lái xe trước khi tốt nghiệp.' },
            { jp: '{来月|らいげつ}までに{払|はら}ってください。', vn: 'Hãy thanh toán trước tháng sau.' },
            { jp: '9{時|じ}までに{来|き}てください。', vn: 'Hãy đến trước 9 giờ.' },
            { jp: '{資料|しりょう}は{会議|かいぎ}までにコピーしておきます。', vn: 'Tôi sẽ photo tài liệu sẵn trước cuộc họp.' },
            { jp: '{死|し}ぬまでに{世界一周|せかいいっしゅう}したいです。', vn: 'Tôi muốn đi vòng quanh thế giới trước khi chết.' }
        ]
    },
    {
        id: 46,
        level: 'N4',
        group: 'Hành động',
        label: '〜ながら',
        meaning: 'Vừa... vừa... (Hai hành động cùng lúc)',
        examples: [
            { jp: '{音楽|おんがく}を{聞|き}きながら、{勉強|べんきょう}します。', vn: 'Vừa nghe nhạc vừa học.' },
            { jp: 'ご{飯|はん}を{食|た}べながら、テレビを{見|み}ます。', vn: 'Vừa ăn cơm vừa xem tivi.' },
            { jp: 'お{茶|ちゃ}を{飲|の}みながら、{話|はな}しましょう。', vn: 'Vừa uống trà vừa nói chuyện nào.' },
            { jp: '{運転|うんてん}しながら、{電話|でんわ}してはいけません。', vn: 'Không được vừa lái xe vừa gọi điện thoại.' },
            { jp: '{働|はたら}きながら、{大学|だいがく}で{勉強|べんきょう}しています。', vn: 'Tôi vừa đi làm vừa học đại học.' },
            { jp: '{歩|ある}きながら、{本|ほん}を{読|よ}まないでください。', vn: 'Đừng vừa đi bộ vừa đọc sách.' },
            { jp: '{歌|うた}いながら、{料理|りょうり}を{作|つく}ります。', vn: 'Vừa hát vừa nấu ăn.' },
            { jp: '{考|かんが}えながら、{書|か}いてください。', vn: 'Hãy vừa suy nghĩ vừa viết.' },
            { jp: '{辞書|じしょ}を{見|み}ながら、{新聞|しんぶん}を{読|よ}みます。', vn: 'Vừa tra từ điển vừa đọc báo.' },
            { jp: 'アルバイトをしながら、{日本語|にほんご}を{習|なら}っています。', vn: 'Tôi vừa đi làm thêm vừa học tiếng Nhật.' }
        ]
    },
    {
        id: 47,
        level: 'N4',
        group: 'Trạng thái',
        label: '〜すぎます',
        meaning: 'Quá... (Mức độ tiêu cực/vượt quá)',
        examples: [
            { jp: '{食|た}べ{過|す}ぎて、お{腹|なか}が{痛|いた}いです。', vn: 'Vì ăn quá nhiều nên tôi bị đau bụng.' },
            { jp: '{飲|の}み{過|す}ぎに{注意|ちゅうい}してください。', vn: 'Hãy chú ý đừng uống quá nhiều.' },
            { jp: 'このシャツは{大|おお}きすぎます。', vn: 'Cái áo này quá to.' },
            { jp: '{高|たか}すぎて、{買|か}えません。', vn: 'Đắt quá, không thể mua được.' },
            { jp: '{問題|もんだい}を{難|むずか}しすぎます。', vn: 'Vấn đề quá khó.' },
            { jp: '{働|はたら}きすぎは{体|からだ}に{悪|わる}いです。', vn: 'Làm việc quá sức không tốt cho cơ thể.' },
            { jp: 'テレビを{見|み}すぎました。', vn: 'Tôi đã xem tivi quá nhiều.' },
            { jp: '{静|しず}かすぎると、{寂|さび}しいです。', vn: 'Tĩnh mịch quá thì buồn.' },
            { jp: '{言|い}い{過|す}ぎました。すみません。', vn: 'Tôi đã nói quá lời. Xin lỗi.' },
            { jp: '{方法|ほうほう}が{複雑|ふくざつ}すぎます。', vn: 'Phương pháp quá phức tạp.' }
        ]
    },
    {
        id: 48,
        level: 'N4',
        group: 'Giới hạn',
        label: '〜しか 〜ない',
        meaning: 'Chỉ... (Phủ định)',
        examples: [
            { jp: '100{円|えん}しかありません。', vn: 'Chỉ còn có 100 yên.' },
            { jp: '{日曜日|にちようび}しか{休|やす}みません。', vn: 'Tôi chỉ nghỉ vào chủ nhật.' },
            { jp: '{日本語|にほんご}しか{話|はな}せません。', vn: 'Tôi chỉ nói được tiếng Nhật.' },
            { jp: '{学生|がくせい}は{二人|ふたり}しか{来|き}ませんでした。', vn: 'Học sinh chỉ có 2 người đến.' },
            { jp: 'ひらがなしか{書|か}けません。', vn: 'Tôi chỉ viết được Hiragana.' },
            { jp: '{朝|あさ}はコーヒーしか{飲|の}みません。', vn: 'Buổi sáng tôi chỉ uống cà phê.' },
            { jp: 'あなたしか{知|し}りません。', vn: 'Tôi chỉ biết mỗi bạn.' },
            { jp: '{少|すこ}ししか{寝|ね}ませんでした。', vn: 'Tôi chỉ ngủ được một chút.' },
            { jp: '{店|みせ}にはリンゴしかありませんでした。', vn: 'Ở cửa hàng chỉ có mỗi táo.' },
            { jp: '{一回|いっかい}しか{行|い}ったことがありません。', vn: 'Tôi chỉ mới đi có một lần.' }
        ]
    },
    {
        id: 49,
        level: 'N4',
        group: 'Giới hạn',
        label: '[Quantity] で',
        meaning: 'Với (số lượng/tiền bạc/thời gian)',
        examples: [
            { jp: '3つで500{円|えん}です。', vn: '3 cái giá 500 yên.' },
            { jp: '1{時間|じかん}で{行|い}けますか。', vn: 'Đi 1 tiếng có tới không?' },
            { jp: '{全部|ぜんぶ}でいくらですか。', vn: 'Tổng cộng bao nhiêu tiền?' },
            { jp: '3{万円|まんえん}でビデオが{買|か}えますか。', vn: 'Với 3 vạn yên có mua được đầu video không?' },
            { jp: 'あと5{分|ふん}で{始|はじ}まります。', vn: 'Còn 5 phút nữa là bắt đầu.' },
            { jp: '{二人|ふたり}で{仕事|しごと}をしました。', vn: 'Hai người đã làm việc cùng nhau.' },
            { jp: '1{日|にち}でできますか。', vn: 'Làm trong 1 ngày có xong không?' },
            { jp: 'この{作業|さぎょう}は30{分|ふん}で{終|お}わります。', vn: 'Công việc này sẽ xong trong 30 phút.' },
            { jp: '1000{円|えん}で{足|た}りると{思|おも}います。', vn: 'Tôi nghĩ 1000 yên là đủ.' },
            { jp: 'みんなで{行|い}きましょう。', vn: 'Mọi người cùng đi nhé.' }
        ]
    },
    {
        id: 50,
        level: 'N4',
        group: 'Liệt kê',
        label: '〜とか 〜とか',
        meaning: 'Như là... như là... (Liệt kê ví dụ)',
        examples: [
            { jp: '{休|やす}みの{日|ひ}は、テニスとか{水泳|すいえい}とかをします。', vn: 'Ngày nghỉ tôi chơi tennis, bơi lội...' },
            { jp: '{冷蔵庫|れいぞうこ}に{肉|にく}とか{野菜|やさい}とかがあります。', vn: 'Trong tủ lạnh có thịt, rau... v.v.' },
            { jp: '「ありがとう」とか「すみません」とかの{言葉|ことば}をよく{使|つか}います。', vn: 'Tôi hay dùng những từ như "Cảm ơn", "Xin lỗi".' },
            { jp: 'プレゼントは{花|はな}とかケーキとかがいいです。', vn: 'Quà thì hoa hay bánh kem thì được.' },
            { jp: '{息子|むすこ}は{漫画|まんが}とかアニメとかが{好|す}きです。', vn: 'Con trai tôi thích truyện tranh, hoạt hình...' },
            { jp: '{電車|でんしゃ}とかバスとかに{乗|の}ります。', vn: 'Tôi đi tàu điện, xe buýt...' },
            { jp: '{京都|きょうと}とか{奈良|なら}とかへ{行|い}きたいです。', vn: 'Tôi muốn đi Kyoto, Nara...' },
            { jp: '{漢字|かんじ}とか{文法|ぶんぽう}とかを{勉強|べんきょう}しなければなりません。', vn: 'Phải học Hán tự, ngữ pháp...' },
            { jp: '{夏休|なつやす}みは{海|うみ}へ{行|い}くとか、{山|やま}へ{登|のぼ}るとかしたいです。', vn: 'Nghỉ hè tôi muốn đi biển, leo núi...' },
            { jp: '{母|はは}とか{姉|あね}とかに{相談|そうだん}します。', vn: 'Tôi sẽ thảo luận với mẹ, với chị...' }
        ]
    },
    {
        id: 51,
        level: 'N4',
        group: 'Đề xuất',
        label: '[Noun] でも',
        meaning: '...chẳng hạn (Đề xuất) / Dù là...',
        examples: [
            { jp: 'お{茶|ちゃ}でも{飲|の}みませんか。', vn: 'Cùng uống trà (chẳng hạn) không?' },
            { jp: '{日曜日|にちようび}でも{働|はたら}きます。', vn: 'Dù là chủ nhật vẫn làm việc.' },
            { jp: '{映画|えいが}でも{見|み}ましょうか。', vn: 'Hay là cùng xem phim đi.' },
            { jp: '{先生|せんせい}でもわかりません。', vn: 'Dù là giáo viên cũng không hiểu.' },
            { jp: '{子供|こども}でもできます。', vn: 'Dù là trẻ con cũng làm được.' },
            { jp: 'コーヒーでもいかがですか。', vn: 'Mời bạn dùng cà phê (hay gì đó) nhé?' },
            { jp: 'いつでもいいです。', vn: 'Khi nào cũng được.' },
            { jp: 'どこでもいいです。', vn: 'Đâu cũng được.' },
            { jp: '{誰|だれ}でも{参加|さんか}できます。', vn: 'Ai cũng có thể tham gia.' },
            { jp: '{散歩|さんぽ}でもしましょう。', vn: 'Cùng đi dạo đi.' }
        ]
    },
    {
        id: 52,
        level: 'N4',
        group: 'Nguyên liệu',
        label: '〜から / 〜で作ります',
        meaning: 'Làm từ (biến đổi chất / vật liệu)',
        examples: [
            { jp: 'ビールは{麦|むぎ}から{作|つく}られます。', vn: 'Bia được làm từ lúa mạch.' },
            { jp: '{昔|むかし}の{日本|にほん}の{家|いえ}は{木|き}で{作|つく}られました。', vn: 'Nhà của Nhật ngày xưa được làm bằng gỗ.' },
            { jp: '{紙|かみ}は{木|き}から{作|つく}ります。', vn: 'Giấy làm từ gỗ.' },
            { jp: 'この{机|つくえ}は{金属|きんぞく}で{作|つく}られています。', vn: 'Cái bàn này làm bằng kim loại.' },
            { jp: 'ワインはブドウから{作|つく}られます。', vn: 'Rượu vang làm từ nho.' },
            { jp: 'これはプラスチックで{作|つく}った{箱|はこ}です。', vn: 'Đây là cái hộp làm bằng nhựa.' },
            { jp: '{日本酒|にほんしゅ}は{米|こめ}から{作|つく}ります。', vn: 'Rượu Nhật làm từ gạo.' },
            { jp: 'ガラスで{作|つく}ったコップ。', vn: 'Cốc làm bằng thủy tinh.' },
            { jp: 'チーズは{牛乳|ぎゅうにゅう}から{作|つく}られます。', vn: 'Phô mai làm từ sữa bò.' },
            { jp: 'お{皿|さら}は{土|つち}で{作|つく}ります。', vn: 'Đĩa làm từ đất sét.' }
        ]
    },
    {
        id: 53,
        level: 'N4',
        group: 'Di chuyển',
        label: '〜てきます',
        meaning: 'Đi (làm gì) rồi về / Thay đổi tới hiện tại',
        examples: [
            { jp: 'ちょっとタバコを{買|か}ってきます。', vn: 'Tôi đi mua thuốc lá chút rồi về.' },
            { jp: 'トイレに{行|い}ってきます。', vn: 'Tôi đi vệ sinh chút.' },
            { jp: '{明日|あした}、{友達|ともだち}を{連|つ}れてきます。', vn: 'Ngày mai tôi sẽ dẫn bạn đến.' },
            { jp: '{出|で}かけてきます。', vn: 'Tôi đi ra ngoài đây (rồi sẽ về).' },
            { jp: '{雨|あめ}が{降|ふ}ってきました。', vn: 'Trời đã bắt đầu mưa.' },
            { jp: '{寒|さむ}くなってきました。', vn: 'Trời đã trở lạnh.' },
            { jp: 'お{腹|なか}が{空|す}いてきました。', vn: 'Bụng thấy đói rồi.' },
            { jp: '{日本語|にほんご}がわかってきました。', vn: 'Tôi đã bắt đầu hiểu tiếng Nhật.' },
            { jp: '{太|ふと}ってきました。', vn: 'Tôi béo lên rồi.' },
            { jp: '{電話|でんわ}をかけてきます。', vn: 'Tôi đi gọi điện thoại rồi quay lại.' }
        ]
    },
    {
        id: 54,
        level: 'N4',
        group: 'Câu hỏi',
        label: '〜か / 〜かどうか',
        meaning: 'Câu hỏi lồng / Có hay không',
        examples: [
            { jp: '{会議|かいぎ}はいつ{終|お}わるか、わかりません。', vn: 'Tôi không biết khi nào cuộc họp kết thúc.' },
            { jp: '{箱|はこ}の{中|なか}に{何|なに}があるか、{調|しら}べてください。', vn: 'Hãy kiểm tra xem trong hộp có gì.' },
            { jp: '{間違|まちが}いがないか、{確認|かくにん}します。', vn: 'Tôi xác nhận xem có lỗi sai không.' },
            { jp: 'あの{人|ひと}は{誰|だれ}か{知|し}っていますか。', vn: 'Bạn có biết người kia là ai không?' },
            { jp: '{明日|あした}{雨|あめ}が{降|ふ}るかどうか、わかりません。', vn: 'Không biết ngày mai trời có mưa hay không.' },
            { jp: '{美味|おい}しいかどうか、{食|た}べてみます。', vn: 'Tôi ăn thử xem có ngon hay không.' },
            { jp: 'サイズが{合|あ}うかどうか、{心配|しんぱい}です。', vn: 'Tôi lo không biết kích cỡ có vừa hay không.' },
            { jp: 'できるかどうかわかりませんが、やってみます。', vn: 'Không biết có làm được không nhưng tôi sẽ làm thử.' },
            { jp: '{彼|かれ}が{来|く}るかどうか、{聞|き}いてみます。', vn: 'Tôi sẽ hỏi thử xem anh ấy có đến hay không.' },
            { jp: '{成功|せいこう}するかどうかわかりません。', vn: 'Không biết có thành công hay không.' }
        ]
    },
    {
        id: 55,
        level: 'N4',
        group: 'Danh từ hóa',
        label: '[Adjective] + さ',
        meaning: 'Độ... (Tính chất)',
        examples: [
            { jp: '{富士山|ふじさん}の{高|たか}さは3776メートルです。', vn: 'Độ cao của núi Phú Sĩ là 3776m.' },
            { jp: 'この{川|かわ}の{深|ふか}さを{測|はか}ります。', vn: 'Đo độ sâu của con sông này.' },
            { jp: '{命|いのち}の{大切|たいせつ}さを{教|おし}えます。', vn: 'Dạy cho biết tầm quan trọng của sinh mệnh.' },
            { jp: '{大|おお}きさはどのくらいですか。', vn: 'Độ lớn khoảng bao nhiêu?' },
            { jp: '{暑|あつ}さで{眠|ねむ}れませんでした。', vn: 'Vì độ nóng (trời nóng) nên không ngủ được.' },
            { jp: '{重|おも}さを{量|はか}ってください。', vn: 'Hãy cân trọng lượng.' },
            { jp: '{長|なが}さは5メートルです。', vn: 'Chiều dài là 5 mét.' },
            { jp: '{雪|ゆき}の{白|しろ}さがきれいですね。', vn: 'Màu trắng (độ trắng) của tuyết đẹp nhỉ.' },
            { jp: '{広|ひろ}さは{十分|じゅうぶん}です。', vn: 'Độ rộng thì đủ rồi.' },
            { jp: '{寒|さむ}さが{苦手|にがて}です。', vn: 'Tôi kém chịu lạnh (độ lạnh).' }
        ]
    },
    {
        id: 56,
        level: 'N4',
        group: 'Trạng từ',
        label: '[Adjective] + く/に [Verb]',
        meaning: 'Làm gì một cách...',
        examples: [
            { jp: '{早|はや}く{帰|かえ}りましょう。', vn: 'Hãy về sớm nào.' },
            { jp: '{字|じ}をきれいに{書|か}いてください。', vn: 'Hãy viết chữ cho đẹp.' },
            { jp: '{大|おお}きく{書|か}きます。', vn: 'Viết to lên.' },
            { jp: '{静|しず}かにしてください。', vn: 'Hãy giữ yên lặng.' },
            { jp: '{野菜|やさい}を{細|こま}かく{切|き}ります。', vn: 'Thái rau nhỏ ra.' },
            { jp: '{部屋|へや}を{明|あか}るくしました。', vn: 'Tôi đã làm cho căn phòng sáng lên.' },
            { jp: '{自由|じゆう}に{意見|いけん}を{言|い}ってください。', vn: 'Hãy tự do phát biểu ý kiến.' },
            { jp: '{楽|たの}しく{遊|あそ}びました。', vn: 'Đã chơi rất vui vẻ.' },
            { jp: '{短|みじか}く{髪|かみ}を{切|き}りました。', vn: 'Tôi đã cắt tóc ngắn.' },
            { jp: '{安|やす}く{買|か}いました。', vn: 'Tôi đã mua rẻ.' }
        ]
    },
    {
        id: 57,
        level: 'N4',
        group: 'Kính ngữ',
        label: 'Kính ngữ (Trao nhận)',
        meaning: 'くださる / いただく / さしあげる / やる',
        examples: [
            { jp: '{社長|しゃちょう}は{私|わたし}に{本|ほん}をくださいました。', vn: 'Giám đốc đã tặng sách cho tôi (Tôn kính).' },
            { jp: '{私|わたし}は{先生|せんせい}に{辞書|じしょ}をいただきました。', vn: 'Tôi đã nhận từ điển từ thầy giáo (Khiêm nhường).' },
            { jp: '{先生|せんせい}にお{土産|みやげ}を{差|さ}し{上|あ}げました。', vn: 'Tôi đã biếu quà đặc sản cho thầy (Khiêm nhường).' },
            { jp: '{弟|おとうと}にお{菓子|かし}をやりました。', vn: 'Tôi đã cho em trai kẹo (Dùng cho người dưới/động vật).' },
            { jp: '{花|はな}に{水|みず}をやります。', vn: 'Tưới nước cho hoa.' },
            { jp: '{犬|いぬ}に{餌|えさ}をやりました。', vn: 'Cho chó ăn.' },
            { jp: '{部長|ぶちょう}が{説明|せつめい}してくださいました。', vn: 'Trưởng phòng đã giải thích cho tôi.' },
            { jp: '{先生|せんせい}に{直|なお}していただきました。', vn: 'Tôi được thầy giáo sửa giúp.' },
            { jp: '{皆|みな}さんに{案内|あんない}して{差|さ}し{上|あ}げます。', vn: 'Tôi xin hướng dẫn cho mọi người.' },
            { jp: '{誰|だれ}にいただいたんですか。', vn: 'Bạn đã nhận từ ai vậy?' }
        ]
    },
    {
        id: 58,
        level: 'N4',
        group: 'Kính ngữ',
        label: '〜させていただけませんか',
        meaning: 'Cho phép tôi làm... được không?',
        examples: [
            { jp: 'ここに{座|すわ}らせていただけませんか。', vn: 'Cho phép tôi ngồi đây được không?' },
            { jp: '{早退|そうたい}させていただけませんか。', vn: 'Cho phép tôi về sớm được không?' },
            { jp: '{話|はな}させていただけませんか。', vn: 'Cho phép tôi nói được không?' },
            { jp: 'コピーさせていただけませんか。', vn: 'Cho phép tôi photo được không?' },
            { jp: '{電話|でんわ}を{使|つか}わせていただけませんか。', vn: 'Cho phép tôi dùng điện thoại được không?' },
            { jp: '{考|かんが}えさせていただけませんか。', vn: 'Cho phép tôi suy nghĩ thêm được không?' },
            { jp: '{紹介|しょうかい}させていただけませんか。', vn: 'Cho phép tôi giới thiệu được không?' },
            { jp: '{質問|しつもん}させていただけませんか。', vn: 'Cho phép tôi đặt câu hỏi được không?' },
            { jp: '{見学|けんがく}させていただけませんか。', vn: 'Cho phép tôi tham quan được không?' },
            { jp: '{休|やす}ませていただけませんか。', vn: 'Cho phép tôi nghỉ được không?' }
        ]
    }
];
