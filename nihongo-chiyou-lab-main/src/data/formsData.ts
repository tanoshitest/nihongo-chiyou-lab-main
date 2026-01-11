
export interface FormUsage {
    id: number;
    title: string; // The specific form name e.g. "Thể ます"
    romaji: string;
    explanation: string;
    examples: {
        sentence: string;
        meaning: string;
    }[];
}

export const FORMS: FormUsage[] = [
    {
        id: 1,
        title: 'Thể ます (Masu)',
        romaji: 'Masu-kei',
        explanation: 'Dạng lịch sự cơ bản của động từ. Dùng để diễn tả hành động ở thì hiện tại/tương lai hoặc thói quen.',
        examples: [
            { sentence: '[私|わたし|Tôi]は[毎日|まいにち|Mỗi ngày][日本語|にほんご|Tiếng Nhật]を[勉強|べんきょう|Học]し{ます}。', meaning: 'Tôi học tiếng Nhật mỗi ngày.' },
            { sentence: '[明日|あした|Ngày mai][映画|えいが|Phim]を[見|み|Xem]に[行|い|Đi]き{ましょう}。', meaning: 'Ngày mai chúng ta cùng đi xem phim nhé.' },
            { sentence: 'すみません、この[漢字|かんじ|Hán tự]の[読|よ|Đọc]み[方|かた|Cách]がわかり{ません}。', meaning: 'Xin lỗi, tôi không biết cách đọc chữ Hán này.' },
            { sentence: '[昨日|きのう|Hôm qua][友達|ともだち|Bạn]に[会|あ|Gặp]い{ました}。', meaning: 'Hôm qua tôi đã gặp bạn.' },
            { sentence: '[新|あたら|Mới]しい[車|くるま|Xe]が[買|か|Mua]い{たいです}。', meaning: 'Tôi muốn mua một chiếc xe hơi mới.' },
            { sentence: '[一緒|いっしょ|Cùng nhau]に[昼|ひる|Trưa]ごはんを[食|た|Ăn]べ{ませんか}。', meaning: 'Bạn có muốn ăn trưa cùng tôi không?' },
            { sentence: '[来週|らいしゅう|Tuần sau][京都|きょうと|Kyoto]へ[遊|あそ|Chơi]びに[行|い|Đi]き{ます}。', meaning: 'Tuần sau tôi sẽ đi Kyoto chơi.' },
            { sentence: '[毎朝|まいあさ|Mỗi sáng]パンを[食|た|Ăn]べ{ます}か。', meaning: 'Sáng nào bạn cũng ăn bánh mì à?' },
            { sentence: '[今|いま|Bây giờ][雨|あめ|Mưa]が[降|ふ|Rơi]ってい{ます}。', meaning: 'Bây giờ trời đang mưa.' },
            { sentence: 'タクシーを[呼|よ|Gọi]び{ましょう}か。', meaning: 'Tôi gọi taxi cho bạn nhé?' }
        ]
    },
    {
        id: 2,
        title: 'Thể て (Te)',
        romaji: 'Te-kei',
        explanation: 'Dùng để nối câu, diễn tả hành động đang diễn ra, sai khiến, xin phép, v.v.',
        examples: [
            { sentence: 'ここに[住所|じゅうしょ|Địa chỉ]と[名前|なまえ|Tên]を[書|か|Viết]い{て}ください。', meaning: 'Hãy viết địa chỉ và tên vào đây.' },
            { sentence: '[今|いま|Bây giờ][電話|でんわ|Điện thoại]をかけ{て}います。', meaning: 'Bây giờ tôi đang gọi điện thoại.' },
            { sentence: 'ここで[写真|しゃしん|Ảnh]を[撮|と|Chụp]っ{て}もいいです。', meaning: 'Bạn có thể chụp ảnh ở đây.' },
            { sentence: 'ここでタバコを[吸|す|Hút]っ{て}はいけません。', meaning: 'Không được hút thuốc ở đây.' },
            { sentence: '[仕事|しごと|Công việc]が[終|お|Xong]わっ{て}から、[飲|の|Uống]みに[行|い|Đi]きます。', meaning: 'Sau khi xong việc tôi sẽ đi uống.' },
            { sentence: '[毎朝|まいあさ|Mỗi sáng]、ジョギングをし{て}、シャワーを[浴|あ|Tắm]び{て}、[会社|かいしゃ|Công ty]へ[行|い|Đi]きます。', meaning: 'Mỗi sáng tôi chạy bộ, tắm, rồi đi làm.' },
            { sentence: '[傘|かさ|Ô]を[貸|か|Cho mượn]し{て}あげます。', meaning: 'Tôi sẽ cho bạn mượn ô.' },
            { sentence: '[田中|たなか|Tanaka]さんに[地図|ちず|Bản đồ]を[描|か|Vẽ]い{て}もらいました。', meaning: 'Tôi được anh Tanaka vẽ cho bản đồ.' },
            { sentence: '[山田|やまだ|Yamada]さんが[駅|えき|Nhà ga]まで[送|おく|Gửi/Tiễn]っ{て}くれました。', meaning: 'Anh Yamada đã đưa tôi ra nhà ga.' },
            { sentence: 'まっすぐ[行|い|Đi]っ{て}、[右|みぎ|Phải]へ[曲|ま|Rẽ]がっ{て}ください。', meaning: 'Hãy đi thẳng rồi rẽ phải.' }
        ]
    },
    {
        id: 3,
        title: 'Thể ない (Nai)',
        romaji: 'Nai-kei',
        explanation: 'Dạng phủ định ngắn. Dùng trong câu mệnh lệnh phủ định, nghĩa vụ, hoặc không cần thiết.',
        examples: [
            { sentence: 'ここで[写真|しゃしん|Ảnh]を[撮|と|Chụp]ら{ない}でください。', meaning: 'Xin đừng chụp ảnh ở đây.' },
            { sentence: '[薬|くすり|Thuốc]を[飲|の|Uống]ま{なけれ}ばなりません。', meaning: 'Phải uống thuốc.' },
            { sentence: '[明日|あした|Ngày mai][来|こ|Đến]{なく}てもいいです。', meaning: 'Ngày mai không cần đến cũng được.' },
            { sentence: '[約束|やくそく|Lời hứa]を[忘|わす|Quên]れ{ない}でください。', meaning: 'Đừng quên lời hứa nhé.' },
            { sentence: 'パスポートをなくさ{ない}ようにしてください。', meaning: 'Hãy cố gắng đừng làm mất hộ chiếu.' },
            { sentence: '[彼|かれ|Anh ấy]は[英語|えいご|Tiếng Anh]が[話|はな|Nói]せ{ない}と[思|おも|Nghĩ]います。', meaning: 'Tôi nghĩ anh ấy không nói được tiếng Anh.' },
            { sentence: '[時間|じかん|Thời gian]がありませんから、[急|いそ|Vội]が{なけれ}ばなりません。', meaning: 'Vì không có thời gian nên phải khẩn trương.' },
            { sentence: '[心配|しんぱい|Lo lắng]し{なく}てもいいですよ。', meaning: 'Không cần lo lắng đâu.' },
            { sentence: '[日曜日|にちようび|Chủ nhật]は[早|はや|Sớm]く[起|お|Dậy]き{なく}てもいいです。', meaning: 'Chủ nhật thì không cần dậy sớm.' },
            { sentence: '[危|あぶ|Nguy hiểm]ないですから、[入|はい|Vào]ら{ない}でください。', meaning: 'Nguy hiểm nên xin đừng vào.' }
        ]
    },
    {
        id: 4,
        title: 'Thể nguyên dạng (Dictionary)',
        romaji: 'Jisho-kei',
        explanation: 'Dạng từ điển của động từ. Dùng để diễn tả khả năng, sở thích, hoặc sự việc trước khi làm gì đó.',
        examples: [
            { sentence: '[私|わたし|Tôi]はピアノを[弾|ひ|Chơi]く{こと}ができます。', meaning: 'Tôi có thể chơi piano.' },
            { sentence: '[私|わたし|Tôi]の[趣味|しゅみ|Sở thích]は[映画|えいが|Phim]を[見|み|Xem]る{こと}です。', meaning: 'Sở thích của tôi là xem phim.' },
            { sentence: '[寝|ね|Ngủ]る{まえ}に、[本|ほん|Sách]を[読|よ|Đọc]みます。', meaning: 'Trước khi ngủ tôi đọc sách.' },
            { sentence: '[日本|にほん|Nhật Bản]へ[行|い|Đi]く{と}、お[金|かね|Tiền]がかかります。', meaning: 'Hễ đi Nhật là tốn tiền.' },
            { sentence: 'このボタンを[押|お|Ấn]す{と}、お[釣|つ|Thừa]りが出ます。', meaning: 'Hễ ấn nút này thì tiền thừa sẽ ra.' },
            { sentence: '[辞書|じしょ|Từ điển]を[使|つか|Dùng]わずに[新聞|しんぶん|Báo]を[読|よ|Đọc]む{こと}ができます。', meaning: 'Tôi có thể đọc báo mà không cần dùng từ điển.' },
            { sentence: '[春|はる|Mùa xuân]になる{と}、[桜|さくら|Hoa anh đào]が[咲|さ|Nở]きます。', meaning: 'Hễ mùa xuân đến là hoa anh đào nở.' },
            { sentence: '[泳|およ|Bơi]ぐ{こと}ができますか。', meaning: 'Bạn có biết bơi không?' },
            { sentence: '[国|くに|Nước]へ[帰|かえ|Về]る{まえ}に、[土産|みやげ|Quà]を[買|か|Mua]います。', meaning: 'Trước khi về nước tôi sẽ mua quà.' },
            { sentence: '[正|ただ|Đúng]しい[使|つか|Dùng]い[方|かた|Cách]を知っていますか。', meaning: 'Bạn có biết cách dùng đúng không?' } // Note: "tsukau" is implicit base
        ]
    },
    {
        id: 5,
        title: 'Thể た (Ta)',
        romaji: 'Ta-kei',
        explanation: 'Dạng quá khứ ngắn. Dùng để kể về kinh nghiệm, liệt kê hành động, hoặc đưa ra lời khuyên.',
        examples: [
            { sentence: '[北海道|ほっかいどう|Hokkaido]へ[行|い|Đi]っ{た}ことがあります。', meaning: 'Tôi đã từng đi Hokkaido.' },
            { sentence: '[日曜|にちよう|Chủ nhật]日はテニスをし{たり}、[映画|えいが|Phim]を[見|み|Xem]{たり}します。', meaning: 'Chủ nhật tôi chơi tennis, xem phim, v.v.' },
            { sentence: '[毎日|まいにち|Mỗi ngày][運動|うんどう|Vận động]し{た}[方|ほう|Nên]がいいです。', meaning: 'Hàng ngày nên vận động thì tốt hơn.' },
            { sentence: '[仕事|しごと|Công việc]が[終|お|Xong]わっ{た}ら、[飲|の|Uống]みに[行|い|Đi]きましょう。', meaning: 'Nếu xong việc thì đi uống nhé.' },
            { sentence: '[薬|くすり|Thuốc]を[飲|の|Uống]ん{だ}ら、[元気|げんき|Khỏe]になりました。', meaning: 'Sau khi uống thuốc tôi đã khỏe lại.' },
            { sentence: '[相撲|すもう|Sumo]を[見|み|Xem]{た}ことがありますか。', meaning: 'Bạn đã từng xem Sumo chưa?' },
            { sentence: '[休|やす|Nghỉ]みの[日|ひ|Ngày]は、[本|ほん|Sách]を[読|よ|Đọc]ん{だり}、[買|か|Mua]い[物|もの|Sắm]に[行|い|Đi]っ{たり}します。', meaning: 'Ngày nghỉ tôi đọc sách, đi mua sắm, v.v.' },
            { sentence: '[熱|ねつ|Sốt]があるんですか。じゃ、[風呂|ふろ|Bồn tắm]に[入|はい|Vào]ら{ない}[方|ほう|Nên]がいいですよ。', meaning: 'Bạn bị sốt à? Vậy thì không nên tắm bồn.' },
            { sentence: '[駅|えき|Nhà ga]に[着|つ|Đến]い{た}ら、[電話|でんわ|Điện thoại]をください。', meaning: 'Khi nào đến ga thì gọi cho tôi nhé.' },
            { sentence: '[彼|かれ|Anh ấy]が[来|き|Đến]{た}ら、すぐ[出発|しゅっぱつ|Xuất phát]しましょう。', meaning: 'Nếu anh ấy đến thì chúng ta xuất phát ngay nhé.' }
        ]
    },
    {
        id: 6,
        title: 'Thể thông thường (Plain Form)',
        romaji: 'Futsuu-kei',
        explanation: 'Thể ngắn, dùng trong hội thoại thân mật hoặc trước các cấu trúc ngữ pháp nhất định.',
        examples: [
            { sentence: '[明日|あした|Ngày mai][雨|あめ|Mưa]が[降|ふ|Rơi]ると[思|おも|Nghĩ]い{ます}。', meaning: 'Tôi nghĩ ngày mai trời sẽ mưa. (furu -> plain)' }, // Highlighting "masu" usually but here syntax is "Plain + to omoimasu"
            { sentence: '[彼|かれ|Anh ấy]は[日本語|にほんご|Tiếng Nhật]が[上手|じょうず|Giỏi]だと言って{いました}。', meaning: 'Anh ấy nói rằng anh ấy giỏi tiếng Nhật.' },
            { sentence: '[明日|あした|Ngày mai]パーティーに[行|い|Đi]く？ ...うん、[行|い|Đi]く。', meaning: 'Mai có đi tiệc không? ...Ừ, đi.' },
            { sentence: 'あれは[何|なん|Cái gì]？ ...これ？[写真|しゃしん|Ảnh]だ。', meaning: 'Đó là cái gì? ...Cái này á? Là ảnh đấy.' },
            { sentence: '[彼|かれ|Anh ấy]は[来|こ|Đến]ないと[思|おも|Nghĩ]い{ます}。', meaning: 'Tôi nghĩ anh ấy sẽ không đến.' },
            { sentence: 'ミラーさんは[会議|かいぎ|Cuộc họp]に[出|で|Tham gia]ると[言|い|Nói]いました。', meaning: 'Anh Miller nói sẽ tham gia cuộc họp.' },
            { sentence: '[日本|にほん|Nhật Bản]の[物価|ぶっか|Vật giá]は[高|たか|Cao]いですね。...ええ、[高|たか|Cao]いですね。', meaning: 'Vật giá ở Nhật cao nhỉ? ...Vâng, cao thật.' },
            { sentence: '[相撲|すもう|Sumo]はおもしろいでしょう？', meaning: 'Sumo thú vị đúng không?' },
            { sentence: '[彼|かれ|Anh ấy]は[忙|いそが|Bận]しいかもしれません。', meaning: 'Có lẽ anh ấy đang bận.' },
            { sentence: '[約束|やくそく|Hứa]の[時間|じかん|Thời gian]に[間|ま|Kịp]に[合|あ|Hợp]わないかもしれません。', meaning: 'Có thể sẽ không kịp giờ hẹn.' }
        ]
    },
    {
        id: 7,
        title: 'Động từ thể thông thường (Toki)',
        romaji: 'Toki',
        explanation: 'Dùng với "toki" để chỉ thời điểm xảy ra hành động.',
        examples: [
            { sentence: '[図書館|としょかん|Thư viện]で[本|ほん|Sách]を[借|か|Mượn]りる{とき}、カードがいります。', meaning: 'Khi mượn sách ở thư viện cần có thẻ.' },
            { sentence: '[道|みち|Đường]を[渡|わた|Qua]る{とき}、[車|くるま|Ô tô]に[気|き|Chú ý]をつけてください。', meaning: 'Khi qua đường hãy cẩn thận ô tô.' },
            { sentence: '[新聞|しんぶん|Báo]を[読|よ|Đọc]む{とき}、[眼鏡|めがね|Kính]をかけます。', meaning: 'Khi đọc báo tôi đeo kính.' },
            { sentence: '[眠|ねむ|Buồn ngủ]い{とき}、コーヒーを[飲|の|Uống]みます。', meaning: 'Khi buồn ngủ tôi uống cà phê.' },
            { sentence: '[暇|ひま|Rảnh]な{とき}、[本|ほん|Sách]を[読|よ|Đọc]みます。', meaning: 'Khi rảnh rỗi tôi đọc sách.' },
            { sentence: '[子供|こども|Trẻ con]の{とき}、よく[川|かわ|Sông]で[泳|およ|Bơi]ぎました。', meaning: 'Khi còn nhỏ tôi thường bơi ở sông.' },
            { sentence: 'わからない{とき}、[先生|せんせい|Giáo viên]に[聞|き|Hỏi]きます。', meaning: 'Khi không hiểu tôi hỏi giáo viên.' },
            { sentence: '[出|で|Ra]かける{とき}、「いってきます」と[言|い|Nói]います。', meaning: 'Khi ra ngoài thì nói "Ittekimasu".' },
            { sentence: '[風邪|かぜ|Cảm]を[引|ひ|Dẫn]いた{とき}、[学校|がっこう|Trường]を[休|やす|Nghỉ]みます。', meaning: 'Khi bị cảm tôi nghỉ học.' },
            { sentence: '[父|ちち|Bố]が[病院|びょういん|Bệnh viện]で[病気|びょうき|Bệnh]だった{とき}、[母|はは|Mẹ]は[大変|たいへん|Vất vả]でした。', meaning: 'Khi bố tôi bị bệnh ở viện, mẹ tôi rất vất vả.' }
        ]
    },
    {
        id: 8,
        title: 'Thể thông thường quá khứ (Ra - Condition)',
        romaji: '...Ra',
        explanation: 'Dùng với "ra" (nếu/sau khi) để diễn tả điều kiện giả định hoặc kết quả.',
        examples: [
            { sentence: '[雨|あめ|Mưa]が[降|ふ|Rơi]っ{たら}、[行|い|Đi]きません。', meaning: 'Nếu trời mưa tôi sẽ không đi.' },
            { sentence: '[安|やす|Rẻ]かっ{たら}、[買|か|Mua]います。', meaning: 'Nếu rẻ tôi sẽ mua.' },
            { sentence: '[時間|じかん|Thời gian]がなかっ{たら}、テレビを[見|み|Xem]ません。', meaning: 'Nếu không có thời gian tôi sẽ không xem TV.' },
            { sentence: '[嫌|きら|Ghét]いだった{ら}、[食|た|Ăn]べなくてもいいです。', meaning: 'Nếu ghét thì không ăn cũng được.' },
            { sentence: '[明日|あした|Ngày mai][天気|てんき|Thời tiết]がよかっ{たら}、[散歩|さんぽ|Đi dạo]しませんか。', meaning: 'Ngày mai nếu đẹp trời thì đi dạo nhé?' },
            { sentence: 'お[金|かね|Tiền]があっ{たら}、[旅行|りょこう|Du lịch]したいです。', meaning: 'Nếu có tiền tôi muốn đi du lịch.' },
            { sentence: '[1|いち|Một][億|おく|Trăm triệu][円|えん|Yên]あっ{たら}、[車|くるま|Ô tô]を[買|か|Mua]いたいです。', meaning: 'Nếu có 100 triệu yên tôi muốn mua ô tô.' },
            { sentence: '[意見|いけん|Ý kiến]があっ{たら}、[言|い|Nói]ってください。', meaning: 'Nếu có ý kiến thì hãy nói.' },
            { sentence: '[大学|だいがく|Đại học]を[出|で|Ra]{たら}、[父|ちち|Bố]の[会社|かいしゃ|Công ty]で[働|はたら|Làm việc]きます。', meaning: 'Sau khi tốt nghiệp đại học, tôi sẽ làm ở công ty của bố.' },
            { sentence: '[10|じゅう|Mười][時|じ|Giờ]になっ{たら}、[出|で|Ra]かけましょう。', meaning: 'Đến 10 giờ thì chúng ta đi nhé.' }
        ]
    },
    {
        id: 9,
        title: 'Động từ thể て (Mo - Concession)',
        romaji: '...Temo',
        explanation: 'Dùng với "mo" (cho dù) để diễn tả sự nhượng bộ.',
        examples: [
            { sentence: '[考|かんが|Suy nghĩ]え{ても}、わかりません。', meaning: 'Dù có suy nghĩ cũng không hiểu.' },
            { sentence: '[高|たか|Cao]く{ても}、[買|か|Mua]います。', meaning: 'Dù đắt tôi cũng mua.' },
            { sentence: '[静|しず|Yên tĩnh]か{でも}、[寝|ね|Ngủ]ることができません。', meaning: 'Dù yên tĩnh tôi cũng không ngủ được.' },
            { sentence: '[日曜日|にちようび|Chủ nhật]{でも}、[働|はたら|Làm việc]かなければなりません。', meaning: 'Dù là chủ nhật cũng phải làm việc.' },
            { sentence: '[眠|ねむ|Buồn ngủ]く{ても}、レポートを[書|か|Viết]きます。', meaning: 'Dù buồn ngủ tôi vẫn viết báo cáo.' },
            { sentence: '[嫌|きら|Ghét]い{でも}、[薬|くすり|Thuốc]を[飲|の|Uống]みます。', meaning: 'Dù ghét tôi vẫn uống thuốc.' },
            { sentence: '[雨|あめ|Mưa]が[降|ふ|Rơi]っ{ても}、[行|い|Đi]きます。', meaning: 'Dù trời mưa tôi vẫn đi.' },
            { sentence: '[便利|べんり|Tiện lợi]JA{でも}、[車|くるま|Ô tô]は[使|つか|Dùng]いません。', meaning: 'Dù tiện lợi nhưng tôi không dùng ô tô.' }, // Removing JA typo
            { sentence: '[約束|やくそく|Hứa]があり{ます}から、[雨|あめ|Mưa]でも[行|い|Đi]きます。', meaning: 'Vì có hẹn nên dù mưa tôi cũng đi.' },
            { sentence: 'いくら[安|やす|Rẻ]く{ても}、こんな[服|ふく|Quần áo]は[着|き|Mặc]たくないです。', meaning: 'Dù rẻ thế nào tôi cũng không muốn mặc quần áo này.' }
        ]
    }
];
