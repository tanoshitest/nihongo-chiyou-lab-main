export interface Particle {
    id: number;
    character: string;
    romaji: string;
    explanation: string;
    examples: {
        sentence: string;
        meaning: string;
    }[];
}

export const PARTICLES: Particle[] = [
    {
        id: 1,
        character: 'は',
        romaji: 'wa',
        explanation: 'Đánh dấu chủ đề của câu. Đứng sau chủ ngữ.',
        examples: [
            { sentence: '[私|わたし|Tôi]{は}マイク・ミラーです。', meaning: 'Tôi là Mike Miller.' },
            { sentence: '[毎日|まいにち|Mỗi ngày][朝|あさ|Sáng]6[時|じ|Giờ]{に}[起|お|Dậy]きます。', meaning: 'Hàng ngày tôi thức dậy lúc 6 giờ.' },
            { sentence: 'さくら{は}[綺麗|きれい|Đẹp]です。', meaning: 'Hoa anh đào đẹp.' },
            { sentence: '[東京|とうきょう|Tokyo]{は}にぎやかです。', meaning: 'Tokyo thì nhộn nhịp.' },
            { sentence: 'これは[私|わたし|Tôi]{の}[本|ほん|Sách]です。', meaning: 'Cái này là sách của tôi.' }
        ]
    },
    {
        id: 2,
        character: 'も',
        romaji: 'mo',
        explanation: 'Cũng. Dùng để chỉ sự tương tự với sự việc đã nêu trước đó.',
        examples: [
            { sentence: 'マリアさん{も}ブラジル[人|じん|Người]です。', meaning: 'Chị Maria cũng là người Brazil.' },
            { sentence: '[私|わたし|Tôi]{も}[学生|がくせい|Sinh viên]です。', meaning: 'Tôi cũng là sinh viên.' },
            { sentence: 'これ{も}それ{も}ください。', meaning: 'Cho tôi cả cái này và cái đó.' },
            { sentence: '[昨日|きのう|Hôm qua]{も}[雨|あめ|Mưa]でした。', meaning: 'Hôm qua trời cũng mưa.' },
            { sentence: '[誰|だれ|Ai]{も}いません。', meaning: 'Không có ai cả.' }
        ]
    },
    {
        id: 3,
        character: 'の',
        romaji: 'no',
        explanation: 'Của / Thuộc về. Nối hai danh từ, giải thích danh từ 1 bổ nghĩa cho danh từ 2.',
        examples: [
            { sentence: 'これは[私|わたし|Tôi]{の}[傘|かさ|Ô]です。', meaning: 'Đó là cái ô của tôi.' },
            { sentence: 'これはコンピューター{の}[本|ほん|Sách]です。', meaning: 'Đây là sách về máy vi tính.' },
            { sentence: 'IMC{の}[社員|しゃいん|Nhân viên]。', meaning: 'Nhân viên công ty IMC.' },
            { sentence: '[日本|にほん|Nhật Bản][語|ご|Tiếng]{の}[勉強|べんきょう|Học]。', meaning: 'Việc học tiếng Nhật.' },
            { sentence: 'この[鞄|かばん|Cặp]{は}あなた{の}ですか。', meaning: 'Cái cặp này là của bạn phải không?' }
        ]
    },
    {
        id: 4,
        character: 'を',
        romaji: 'o',
        explanation: 'Đánh dấu tân ngữ trực tiếp của động từ.',
        examples: [
            { sentence: 'ジュース{を}[飲|の|Uống]みます。', meaning: 'Tôi uống nước hoa quả.' },
            { sentence: '[新聞|しんぶん|Báo]{を}[読|よ|Đọc]みます。', meaning: 'Tôi đọc báo.' },
            { sentence: 'ビデオ{を}[見|み|Xem]ます。', meaning: 'Tôi xem video.' },
            { sentence: 'テニス{を}します。', meaning: 'Tôi chơi quần vợt.' },
            { sentence: '[手紙|てがみ|Thư]{を}[書|か|Viết]きます。', meaning: 'Tôi viết thư.' }
        ]
    },
    {
        id: 5,
        character: 'が',
        romaji: 'ga',
        explanation: 'Đánh dấu chủ ngữ câu miêu tả tính chất, hiện tượng tự nhiên, năng lực, sở thích.',
        examples: [
            { sentence: '[私|わたし|Tôi]はイタリア[料理|りょうり|Món ăn]{が}[好|す|Thích]きです。', meaning: 'Tôi thích món ăn Ý.' },
            { sentence: 'ミラーさんは[料理|りょうり|Nấu ăn]{が}[上手|じょうず|Giỏi]です。', meaning: 'Anh Miller giỏi nấu ăn.' },
            { sentence: '[私|わたし|Tôi]は[日本語|にほんご|Tiếng Nhật]{が}わかります。', meaning: 'Tôi hiểu một chút tiếng Nhật.' },
            { sentence: '[雨|あめ|Mưa]{が}[降|ふ|Rơi]っています。', meaning: 'Trời đang mưa.' },
            { sentence: 'お[腹|なか|Bụng]{が}[痛|いた|Đau]いです。', meaning: 'Tôi bị đau bụng.' }
        ]
    },
    {
        id: 6,
        character: 'に',
        romaji: 'ni',
        explanation: 'Chỉ thời điểm, địa điểm tồn tại, đối tượng hướng tới.',
        examples: [
            { sentence: '[朝|あさ|Sáng]6[時|じ|Giờ]{に}[起|お|Dậy]きます。', meaning: 'Tôi dậy lúc 6 giờ sáng.' },
            { sentence: '[日本|にほん|Nhật Bản]{に}[来|き|Đến]ました。', meaning: 'Tôi đã đến Nhật Bản.' },
            { sentence: '[会社|かいしゃ|Công ty]{に}[行|い|Đi]きます。', meaning: 'Tôi đi đến công ty.' },
            { sentence: '[友達|ともだち|Bạn bè]{に}[会|あ|Gặp]います。', meaning: 'Tôi gặp bạn.' },
            { sentence: '[父|ちち|Bố]{に}プレゼントをあげました。', meaning: 'Tôi đã tặng quà cho bố.' }
        ]
    },
    {
        id: 7,
        character: 'へ',
        romaji: 'e',
        explanation: 'Chỉ phương hướng di chuyển (thường dùng với ikimasu, kimasu, kaerimasu).',
        examples: [
            { sentence: 'どこ{へ}[行|い|Đi]きますか。', meaning: 'Bạn đi đâu đấy?' },
            { sentence: 'スーパー{へ}[行|い|Đi]きます。', meaning: 'Tôi đi siêu thị.' },
            { sentence: '[家|うち|Nhà]{へ}[帰|かえ|Về]ります。', meaning: 'Tôi về nhà.' },
            { sentence: '[国|くに|Nước]{へ}[帰|かえ|Về]ります。', meaning: 'Tôi về nước.' },
            { sentence: '[京都|きょうと|Kyoto]{へ}[行|い|Đi]きます。', meaning: 'Tôi đi Kyoto.' }
        ]
    },
    {
        id: 8,
        character: 'で',
        romaji: 'de',
        explanation: 'Chỉ nơi diễn ra hành động, phương tiện, cách thức.',
        examples: [
            { sentence: '[食堂|しょくどう|Nhà ăn]{で}ごはんを[食|た|Ăn]べます。', meaning: 'Tôi ăn cơm ở nhà ăn.' },
            { sentence: 'バス{で}[会社|かいしゃ|Công ty]へ[行|い|Đi]きます。', meaning: 'Tôi đi đến công ty bằng xe buýt.' },
            { sentence: '[日本語|にほんご|Tiếng Nhật]{で}レポートを[書|か|Viết]きます。', meaning: 'Tôi viết báo cáo bằng tiếng Nhật.' },
            { sentence: '[箸|はし|Đũa]{で}[食|た|Ăn]べます。', meaning: 'Tôi ăn bằng đũa.' },
            { sentence: 'ここ{で}タバコを[吸|す|Hút]わないでください。', meaning: 'Xin đừng hút thuốc ở đây.' }
        ]
    },
    {
        id: 9,
        character: 'と',
        romaji: 'to',
        explanation: 'Và / Với (liệt kê danh từ, cùng làm với ai).',
        examples: [
            { sentence: '[野菜|やさい|Rau]{と}[肉|にく|Thịt]を[買|か|Mua]いました。', meaning: 'Tôi đã mua rau và thịt.' },
            { sentence: '[友達|ともだち|Bạn]{と}[映画|えいが|Phim]を[見|み|Xem]ます。', meaning: 'Tôi xem phim cùng bạn.' },
            { sentence: '[家族|かぞく|Gia đình]{と}[日本|にほん|Nhật Bản]へ[来|き|Đến]ました。', meaning: 'Tôi đến Nhật cùng gia đình.' },
            { sentence: 'これ{と}それをください。', meaning: 'Cho tôi cái này và cái kia.' },
            { sentence: '「ありがとう」{と}[言|い|Nói]います。', meaning: 'Nói là "Cảm ơn". (Trích dẫn)' }
        ]
    },
    {
        id: 10,
        character: 'や',
        romaji: 'ya',
        explanation: 'Liệt kê một vài đối tượng tiêu biểu (thường dùng với nado).',
        examples: [
            { sentence: '[店|みせ|Cửa hàng]にパン{や}[卵|たまご|Trứng]などがありました。', meaning: 'Ở cửa hàng có bánh mì, trứng, v.v.' },
            { sentence: '[鞄|かばん|Cặp]の[中|なか|Trong]に[本|ほん|Sách]{や}ペンがあります。', meaning: 'Trong cặp có sách, bút,...' },
            { sentence: '[机|つくえ|Bàn]の[上|うえ|Trên]に[時計|とけい|Đồng hồ]{や}メガネがあります。', meaning: 'Trên bàn có đồng hồ, kính,...' },
            { sentence: '[部屋|へや|Phòng]にベッド{や}[机|つくえ|Bàn]があります。', meaning: 'Trong phòng có giường, bàn,...' },
            { sentence: '[飲|の|Uống]み[物|もの|Đồ]はコーラ{や}ビールです。', meaning: 'Đồ uống là Cola, bia,...' }
        ]
    },
    {
        id: 11,
        character: 'から・まで',
        romaji: 'kara - made',
        explanation: 'Từ đâu ~ Đến đâu (thời gian, địa điểm).',
        examples: [
            { sentence: '9[時|じ|Giờ]{から}5[時|じ|Giờ]{まで}[働|はたら|Làm việc]きます。', meaning: 'Tôi làm việc từ 9 giờ đến 5 giờ.' },
            { sentence: '[大阪|おおさか|Osaka]{から}[東京|とうきょう|Tokyo]{まで}3[時間|じかん|Tiếng]かかります。', meaning: 'Từ Osaka đến Tokyo mất 3 tiếng.' },
            { sentence: '[会議|かいぎ|Cuộc họp]は[何時|なんじ|Mấy giờ]{から}ですか。', meaning: 'Cuộc họp bắt đầu từ mấy giờ?' },
            { sentence: '[昼休|ひるやす|Nghỉ trưa]みは12[時|じ|Giờ]{から}1[時|じ|Giờ]{まで}です。', meaning: 'Nghỉ trưa từ 12 giờ đến 1 giờ.' },
            { sentence: '[月曜日|げつようび|Thứ 2]{から}[金曜日|きんようび|Thứ 6]{まで}[勉強|べんきょう|Học]します。', meaning: 'Tôi học từ thứ 2 đến thứ 6.' }
        ]
    },
    {
        id: 12,
        character: 'までに',
        romaji: 'madeni',
        explanation: 'Trước thời điểm nào đó (hạn chót).',
        examples: [
            { sentence: '[金曜日|きんようび|Thứ 6]{までに}[本|ほん|Sách]を[返|かえ|Trả]します。', meaning: 'Trước thứ 6 tôi sẽ trả sách.' },
            { sentence: '5[時|じ|Giờ]{までに}[終|お|Xong]わります。', meaning: 'Sẽ xong trước 5 giờ.' },
            { sentence: '[明日|あした|Ngày mai]{までに}レポートを[出|だ|Nộp]してください。', meaning: 'Hãy nộp báo cáo trước ngày mai.' },
            { sentence: '10[時|じ|Giờ]{までに}[家|うち|Nhà]へ[帰|かえ|Về]らなければなりません。', meaning: 'Phải về nhà trước 10 giờ.' },
            { sentence: '[会議|かいぎ|Cuộc họp]は5[時|じ|Giờ]{までに}[終|お|Xong]わりますか。', meaning: 'Cuộc họp có xong trước 5 giờ không?' }
        ]
    },
    {
        id: 13,
        character: 'より',
        romaji: 'yori',
        explanation: 'Hơn (dùng trong so sánh).',
        examples: [
            { sentence: '[中国|ちゅうごく|Trung Quốc]は[日本|にほん|Nhật Bản]{より}[広|ひろ|Rộng]いです。', meaning: 'Trung Quốc rộng hơn Nhật Bản.' },
            { sentence: 'このパソコンはあのパソコン{より}[便利|べんり|Tiện lợi]です。', meaning: 'Cái máy tính này tiện lợi hơn cái kia.' },
            { sentence: '[車|くるま|Ô tô]は[自転車|じてんしゃ|Xe đạp]{より}[速|はや|Nhanh]いです。', meaning: 'Ô tô nhanh hơn xe đạp.' },
            { sentence: '[今日|きょう|Hôm nay]は[昨日|きのう|Hôm qua]{より}[暑|あつ|Nóng]いです。', meaning: 'Hôm nay nóng hơn hôm qua.' },
            { sentence: '[北海道|ほっかいどう|Hokkaido]は[東京|とうきょう|Tokyo]{より}涼しいです。', meaning: 'Hokkaido mát mẻ hơn Tokyo.' }
        ]
    },
    {
        id: 14,
        character: 'でも',
        romaji: 'demo',
        explanation: 'Nhưng / Tuy nhiên / Dù là... đưa ra ví dụ.',
        examples: [
            { sentence: 'お[茶|ちゃ|Trà]{でも}[飲|の|Uống]みませんか。', meaning: 'Uống trà hay gì đó nhé? (Đưa ra ví dụ)' },
            { sentence: '[日曜|にちよう|Chủ nhật]{でも}[働|はたら|Làm việc]きます。', meaning: 'Dù là chủ nhật tôi cũng làm việc.' },
            { sentence: '[便利|べんり|Tiện lợi]{でも}[買|か|Mua]いません。', meaning: 'Dù tiện lợi tôi cũng không mua.' },
            { sentence: 'この[問題|もんだい|Vấn đề]は[子供|こども|Trẻ con]{でも}わかります。', meaning: 'Bài toán này trẻ con cũng hiểu.' },
            { sentence: '[雨|あめ|Mưa]{でも}[行|い|Đi]きます。', meaning: 'Dù mưa tôi cũng đi.' }
        ]
    },
    {
        id: 15,
        character: 'か',
        romaji: 'ka',
        explanation: 'Ở cuối câu để hỏi. Hoặc (lựa chọn).',
        examples: [
            { sentence: 'あなたは[学生|がくせい|Sinh viên]です{か}。', meaning: 'Bạn là sinh viên phải không?' },
            { sentence: '[月曜日|げつようび|Thứ 2]{か}[火曜日|かようび|Thứ 3]に[来|き|Đến]ます。', meaning: 'Tôi sẽ đến vào thứ 2 hoặc thứ 3.' },
            { sentence: 'コーヒー{か}お[茶|ちゃ|Trà]を[飲|の|Uống]みます。', meaning: 'Tôi uống cà phê hoặc trà.' },
            { sentence: 'なにを[食|た|Ăn]べます{か}。', meaning: 'Bạn ăn gì?' },
            { sentence: 'いつ[日本|にほん|Nhật Bản]へ[行|い|Đi]きます{か}。', meaning: 'Khi nào bạn đi Nhật?' }
        ]
    },
    {
        id: 16,
        character: 'ね',
        romaji: 'ne',
        explanation: 'Nhỉ / Nhé. Tìm sự đồng tình.',
        examples: [
            { sentence: 'いい[天気|てんき|Thời tiết]ですね。', meaning: 'Thời tiết đẹp nhỉ.' },
            { sentence: 'きれいですね。', meaning: 'Đẹp nhỉ.' },
            { sentence: '[大変|たいへん|Vất vả]ですね。', meaning: 'Vất vả nhỉ.' },
            { sentence: 'また[明日|あした|Ngày mai]ですね。', meaning: 'Hẹn gặp lại ngày mai nhé.' },
            { sentence: 'おいしいですね。', meaning: 'Ngon nhỉ.' }
        ]
    },
    {
        id: 17,
        character: 'よ',
        romaji: 'yo',
        explanation: 'Đấy / Đâu (Cung cấp thông tin mới cho người nghe hoặc nhấn mạnh).',
        examples: [
            { sentence: 'この[映画|えいが|Phim]はおもしろいですよ。', meaning: 'Bộ phim này hay lắm đấy.' },
            { sentence: '[明日|あした|Ngày mai]は[雨|あめ|Mưa]ですよ。', meaning: 'Mai trời mưa đấy.' },
            { sentence: 'ちがいますよ。', meaning: 'Nhầm rồi đấy/Không phải đâu.' },
            { sentence: 'もう[始|はじ|Bắt đầu]まりますよ。', meaning: 'Sắp bắt đầu rồi đấy.' },
            { sentence: 'ここにありますよ。', meaning: 'Nó ở đây này (đấy).' }
        ]
    }
];
