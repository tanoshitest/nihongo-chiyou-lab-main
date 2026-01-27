
export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

export const ALL_TESTS: Record<number, Question[]> = {
    "1": [
        {
            "id": 1,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[間] の読み方は何ですか。",
            "options": [
                "つま / かない",
                "はやく",
                "あいだ",
                "クラシック"
            ],
            "answer": "あいだ",
            "explain": "✅ [間|あいだ|Giữa]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[上] の読み方は何ですか。",
            "options": [
                "うえ",
                "おとこの ひと",
                "スポーツ",
                "なか"
            ],
            "answer": "うえ",
            "explain": "✅ [上|うえ|Trên]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～は] ちょっと……] の読み方は何ですか。",
            "options": [
                "おざわ せいじ",
                "だいどころ",
                "いちばん～",
                "～はちょっと"
            ],
            "answer": "～はちょっと",
            "explain": "✅ [[～は] ちょっと……|～はちょっと|[~ thì] có lẽ không được rồi. (cách từ chối khéo)]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[～屋] の読み方は何ですか。",
            "options": [
                "～や",
                "りょうり",
                "～や～[など]",
                "チリソース"
            ],
            "answer": "～や",
            "explain": "✅ [～屋|～や|Hiệu ~, cửa hàng ~]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[隣] の読み方は何ですか。",
            "options": [
                "となり",
                "ざんねんですね",
                "ごしゅじん",
                "コンサート"
            ],
            "answer": "となり",
            "explain": "✅ [隣|となり|Bên cạnh]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[分かります] の読み方は何ですか。",
            "options": [
                "わかります",
                "ダンス",
                "やきゅう",
                "コンサート"
            ],
            "answer": "わかります",
            "explain": "✅ [分かります|わかります|Hiểu]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[飲み物] の読み方は何ですか。",
            "options": [
                "うしろ",
                "ぜんぜん",
                "のみもの",
                "います"
            ],
            "answer": "のみもの",
            "explain": "✅ [飲み物|のみもの|Đồ uống]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[県] の読み方は何ですか。",
            "options": [
                "けん",
                "もの",
                "かぶき",
                "やきゅう"
            ],
            "answer": "けん",
            "explain": "✅ [県|けん|Tỉnh]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[後ろ] の読み方は何ですか。",
            "options": [
                "うしろ",
                "きらい",
                "かんじ",
                "しんしつ"
            ],
            "answer": "うしろ",
            "explain": "✅ [後ろ|うしろ|Sau]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[食堂] の読み方は何ですか。",
            "options": [
                "ビル",
                "スポーツ",
                "しょくどう",
                "ごしゅじん"
            ],
            "answer": "しょくどう",
            "explain": "✅ [食堂|しょくどう|Nhà ăn, phòng ăn]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[どうも] すみません] の読み方は何ですか。",
            "options": [
                "また こんど おねがいします",
                "どうも すみません",
                "おっと / しゅじん",
                "～や～[など]"
            ],
            "answer": "どうも すみません",
            "explain": "✅ [[どうも] すみません|どうも すみません|Cám ơn.]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[猫] の読み方は何ですか。",
            "options": [
                "スポーツ",
                "ぜんぜん",
                "つま / かない",
                "ねこ"
            ],
            "answer": "ねこ",
            "explain": "✅ [猫|ねこ|Mèo]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[漢字] の読み方は何ですか。",
            "options": [
                "もしもし",
                "もの",
                "スポーツ",
                "かんじ"
            ],
            "answer": "かんじ",
            "explain": "✅ [漢字|かんじ|Chữ Hán]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[上手[な]] の読み方は何ですか。",
            "options": [
                "ちかく",
                "おとこの ひと",
                "じょうず",
                "スポーツ"
            ],
            "answer": "じょうず",
            "explain": "✅ [上手[な]|じょうず|Giỏi]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[約束] の読み方は何ですか。",
            "options": [
                "ろうか",
                "きらい",
                "やくそく",
                "おざわ せいじ"
            ],
            "answer": "やくそく",
            "explain": "✅ [約束|やくそく|Cuộc hẹn, lời hứa]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[男の 子] の読み方は何ですか。",
            "options": [
                "おざわ せいじ",
                "ちかく",
                "おとこの こ",
                "すき"
            ],
            "answer": "おとこの こ",
            "explain": "✅ [男の 子|おとこの こ|Cậu con trai]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[細かい お金] の読み方は何ですか。",
            "options": [
                "うた",
                "すき",
                "おく",
                "こまかい おかね"
            ],
            "answer": "こまかい おかね",
            "explain": "✅ [細かい お金|こまかい おかね|Tiền lẻ]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[～段目] の読み方は何ですか。",
            "options": [
                "～だんめ",
                "クラシック",
                "え",
                "でんち"
            ],
            "answer": "～だんめ",
            "explain": "✅ [～段目|～だんめ|Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[棚] の読み方は何ですか。",
            "options": [
                "え",
                "ローマじ",
                "ざんねんですね",
                "たな"
            ],
            "answer": "たな",
            "explain": "✅ [棚|たな|Giá sách]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[夫 / 主人] の読み方は何ですか。",
            "options": [
                "かぶき",
                "ひだり",
                "うた",
                "おっと / しゅじん"
            ],
            "answer": "おっと / しゅじん",
            "explain": "✅ [夫 / 主人|おっと / しゅじん|Chồng (dùng khi nói về chồng mình)]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[犬] の読み方は何ですか。",
            "options": [
                "コンサート",
                "ダンス",
                "はこ",
                "いぬ"
            ],
            "answer": "いぬ",
            "explain": "✅ [犬|いぬ|Chó]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[廊下] の読み方は何ですか。",
            "options": [
                "あります",
                "わかります",
                "たな",
                "ろうか"
            ],
            "answer": "ろうか",
            "explain": "✅ [廊下|ろうか|Hành lang]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[下] の読み方は何ですか。",
            "options": [
                "わかります",
                "もの",
                "した",
                "チケット"
            ],
            "answer": "した",
            "explain": "✅ [下|した|Dưới]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[少し] の読み方は何ですか。",
            "options": [
                "すこし",
                "クラシック",
                "わかります",
                "じかん"
            ],
            "answer": "すこし",
            "explain": "✅ [少し|すこし|Ít, một ít]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[ローマ字] の読み方は何ですか。",
            "options": [
                "ドア",
                "ローマじ",
                "ようじ",
                "わかります"
            ],
            "answer": "ローマじ",
            "explain": "✅ [ローマ字|ローマじ|Chữ La Mã]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[居間] の読み方は何ですか。",
            "options": [
                "しんしつ",
                "ようじ",
                "いま",
                "よく"
            ],
            "answer": "いま",
            "explain": "✅ [居間|いま|Phòng khách, phòng sinh hoạt chung]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[また 今度 お願いします] の読み方は何ですか。",
            "options": [
                "また こんど おねがいします",
                "へた",
                "きらい",
                "たな"
            ],
            "answer": "また こんど おねがいします",
            "explain": "✅ [また 今度 お願いします|また こんど おねがいします|Hẹn anh/chị lần sau vậy. (cách từ chối khéo)]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[一緒に いかがですか] の読み方は何ですか。",
            "options": [
                "いっしょに いかがですか",
                "～はちょっと",
                "ベッド",
                "こども"
            ],
            "answer": "いっしょに いかがですか",
            "explain": "✅ [一緒に いかがですか|いっしょに いかがですか|Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[喫茶店] の読み方は何ですか。",
            "options": [
                "きっさてん",
                "わかります",
                "テーブル",
                "つま / かない"
            ],
            "answer": "きっさてん",
            "explain": "✅ [喫茶店|きっさてん|Quán giải khát, quán cà-phê]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[寝室] の読み方は何ですか。",
            "options": [
                "しんしつ",
                "やきゅう",
                "いっしょに いかがですか",
                "じ"
            ],
            "answer": "しんしつ",
            "explain": "✅ [寝室|しんしつ|Phòng ngủ]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きっさてん] の漢字は何ですか。",
            "options": [
                "すみません",
                "ベッド",
                "子ども",
                "喫茶店"
            ],
            "answer": "喫茶店",
            "explain": "✅ [喫茶店|きっさてん|Quán giải khát, quán cà-phê]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ざんねんですね] の漢字は何ですか。",
            "options": [
                "窓",
                "外",
                "上",
                "残念ですね"
            ],
            "answer": "残念ですね",
            "explain": "✅ [残念ですね|ざんねんですね|Thật đáng tiếc nhỉ./ Buồn nhỉ.]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かぶき] の漢字は何ですか。",
            "options": [
                "ご主人",
                "公園",
                "だいたい",
                "歌舞伎"
            ],
            "answer": "歌舞伎",
            "explain": "✅ [歌舞伎|かぶき|Kabuki (một thể loại ca kịch truyền thống của Nhật)]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[りょうり] の漢字は何ですか。",
            "options": [
                "料理",
                "女の 子",
                "野球",
                "あります"
            ],
            "answer": "料理",
            "explain": "✅ [料理|りょうり|Món ăn, việc nấu ăn]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[すこし] の漢字は何ですか。",
            "options": [
                "少し",
                "子ども",
                "右",
                "いろいろ[な]"
            ],
            "answer": "少し",
            "explain": "✅ [少し|すこし|Ít, một ít]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はやく] の漢字は何ですか。",
            "options": [
                "ビル",
                "ローマ字",
                "歌",
                "早く、速く"
            ],
            "answer": "早く、速く",
            "explain": "✅ [早く、速く|はやく|Sớm, nhanh]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとこの こ] の漢字は何ですか。",
            "options": [
                "隣",
                "男の 子",
                "嫌い[な]",
                "犬"
            ],
            "answer": "男の 子",
            "explain": "✅ [男の 子|おとこの こ|Cậu con trai]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ふろば] の漢字は何ですか。",
            "options": [
                "廊下",
                "洗面所",
                "分かります",
                "風呂場"
            ],
            "answer": "風呂場",
            "explain": "✅ [風呂場|ふろば|Phòng tắm]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おっと / しゅじん] の漢字は何ですか。",
            "options": [
                "風呂場",
                "夫 / 主人",
                "ベランダ",
                "後ろ"
            ],
            "answer": "夫 / 主人",
            "explain": "✅ [夫 / 主人|おっと / しゅじん|Chồng (dùng khi nói về chồng mình)]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いろいろ] の漢字は何ですか。",
            "options": [
                "犬",
                "外",
                "ひらがな",
                "いろいろ[な]"
            ],
            "answer": "いろいろ[な]",
            "explain": "✅ [いろいろ[な]|いろいろ|Nhiều, đa dạng]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いぬ] の漢字は何ですか。",
            "options": [
                "犬",
                "台所",
                "ご主人",
                "クラシック"
            ],
            "answer": "犬",
            "explain": "✅ [犬|いぬ|Chó]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ぜんぜん] の漢字は何ですか。",
            "options": [
                "全然",
                "ベッド",
                "後ろ",
                "中"
            ],
            "answer": "全然",
            "explain": "✅ [全然|ぜんぜん|Hoàn toàn ~ không]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いっしょに いかがですか] の漢字は何ですか。",
            "options": [
                "後ろ",
                "一緒に いかがですか",
                "コンサート",
                "上"
            ],
            "answer": "一緒に いかがですか",
            "explain": "✅ [一緒に いかがですか|いっしょに いかがですか|Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[～はちょっと] の漢字は何ですか。",
            "options": [
                "[～は] ちょっと……",
                "台所",
                "料理",
                "ダンス"
            ],
            "answer": "[～は] ちょっと……",
            "explain": "✅ [[～は] ちょっと……|～はちょっと|[~ thì] có lẽ không được rồi. (cách từ chối khéo)]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[せんめんじょ] の漢字は何ですか。",
            "options": [
                "チケット",
                "かたかな",
                "洗面所",
                "用事"
            ],
            "answer": "洗面所",
            "explain": "✅ [洗面所|せんめんじょ|Bồn rửa]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[そと] の漢字は何ですか。",
            "options": [
                "チリソース",
                "外",
                "かたかな",
                "ひらがな"
            ],
            "answer": "外",
            "explain": "✅ [外|そと|Ngoài]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ローマじ] の漢字は何ですか。",
            "options": [
                "ローマ字",
                "時間",
                "います",
                "歌"
            ],
            "answer": "ローマ字",
            "explain": "✅ [ローマ字|ローマじ|Chữ La Mã]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おんがく] の漢字は何ですか。",
            "options": [
                "音楽",
                "女の 人",
                "ああ",
                "チケット"
            ],
            "answer": "音楽",
            "explain": "✅ [音楽|おんがく|Âm nhạc]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[じ] の漢字は何ですか。",
            "options": [
                "すみません",
                "小沢 征爾",
                "字",
                "後ろ"
            ],
            "answer": "字",
            "explain": "✅ [字|じ|Chữ]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[まえ] の漢字は何ですか。",
            "options": [
                "前",
                "嫌い[な]",
                "用事",
                "洗面所"
            ],
            "answer": "前",
            "explain": "✅ [前|まえ|Trước]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[うた] の漢字は何ですか。",
            "options": [
                "歌",
                "音楽",
                "木",
                "猫"
            ],
            "answer": "歌",
            "explain": "✅ [歌|うた|Bài hát]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[となり] の漢字は何ですか。",
            "options": [
                "一緒に いかがですか",
                "たくさん",
                "隣",
                "上手[な]"
            ],
            "answer": "隣",
            "explain": "✅ [隣|となり|Bên cạnh]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おざわ せいじ] の漢字は何ですか。",
            "options": [
                "小沢 征爾",
                "女の 人",
                "男の 人",
                "子ども"
            ],
            "answer": "小沢 征爾",
            "explain": "✅ [小沢 征爾|おざわ せいじ|Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[つま / かない] の漢字は何ですか。",
            "options": [
                "妻 / 家内",
                "飲み物",
                "電池",
                "絵"
            ],
            "answer": "妻 / 家内",
            "explain": "✅ [妻 / 家内|つま / かない|Vợ (dùng khi nói về vợ mình)]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[のみもの] の漢字は何ですか。",
            "options": [
                "飲み物",
                "カラオケ",
                "女の 人",
                "右"
            ],
            "answer": "飲み物",
            "explain": "✅ [飲み物|のみもの|Đồ uống]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ひだり] の漢字は何ですか。",
            "options": [
                "かたかな",
                "少し",
                "チケット",
                "左"
            ],
            "answer": "左",
            "explain": "✅ [左|ひだり|Trái]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ねこ] の漢字は何ですか。",
            "options": [
                "猫",
                "チケット",
                "全然",
                "いろいろ[な]"
            ],
            "answer": "猫",
            "explain": "✅ [猫|ねこ|Mèo]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きらい] の漢字は何ですか。",
            "options": [
                "公園",
                "音楽",
                "嫌い[な]",
                "分かります"
            ],
            "answer": "嫌い[な]",
            "explain": "✅ [嫌い[な]|きらい|Ghét, không thích]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[もの] の漢字は何ですか。",
            "options": [
                "一緒に いかがですか",
                "ローマ字",
                "野球",
                "物"
            ],
            "answer": "物",
            "explain": "✅ [物|もの|Vật, đồ vật]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おんなの ひと] の漢字は何ですか。",
            "options": [
                "女の 人",
                "奥さん",
                "ベッド",
                "だいたい"
            ],
            "answer": "女の 人",
            "explain": "✅ [女の 人|おんなの ひと|Người đàn bà]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bàn\"",
            "options": [
                "こまかい おかね",
                "テーブル",
                "います",
                "はやく"
            ],
            "answer": "テーブル",
            "explain": "✅ [テーブル|テーブル|Bàn]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bài hát\"",
            "options": [
                "うた",
                "います",
                "～だんめ",
                "ようじ"
            ],
            "answer": "うた",
            "explain": "✅ [うた|歌|Bài hát]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chồng (dùng khi nói về chồng mình)\"",
            "options": [
                "じかん",
                "ダンス",
                "いろいろ",
                "おっと / しゅじん"
            ],
            "answer": "おっと / しゅじん",
            "explain": "✅ [おっと / しゅじん|夫 / 主人|Chồng (dùng khi nói về chồng mình)]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hoàn toàn ~ không\"",
            "options": [
                "ぜんぜん",
                "き",
                "どうも すみません",
                "まど"
            ],
            "answer": "ぜんぜん",
            "explain": "✅ [ぜんぜん|全然|Hoàn toàn ~ không]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thể thao (~を します: chơi thể thao)\"",
            "options": [
                "スポーツ",
                "あります",
                "き",
                "おんなの こ"
            ],
            "answer": "スポーツ",
            "explain": "✅ [スポーツ|スポーツ|Thể thao (~を します: chơi thể thao)]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ\"",
            "options": [
                "じ",
                "はやく",
                "おとこの ひと",
                "～はちょっと"
            ],
            "answer": "じ",
            "explain": "✅ [じ|字|Chữ]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"[~ thì] có lẽ không được rồi. (cách từ chối khéo)\"",
            "options": [
                "おんなの こ",
                "～はちょっと",
                "あります",
                "ああ"
            ],
            "answer": "～はちょっと",
            "explain": "✅ [～はちょっと|[～は] ちょっと……|[~ thì] có lẽ không được rồi. (cách từ chối khéo)]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có (tồn tại, dùng cho đồ vật)\"",
            "options": [
                "あります",
                "かんじ",
                "おざわ せいじ",
                "じかん"
            ],
            "answer": "あります",
            "explain": "✅ [あります|あります|Có (tồn tại, dùng cho đồ vật)]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vợ (dùng khi nói về vợ mình)\"",
            "options": [
                "おんなの ひと",
                "おくさん",
                "つま / かない",
                "チケット"
            ],
            "answer": "つま / かない",
            "explain": "✅ [つま / かない|妻 / 家内|Vợ (dùng khi nói về vợ mình)]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đại khái, đại thể\"",
            "options": [
                "だいたい",
                "たくさん",
                "スパイス・コーナー",
                "チケット"
            ],
            "answer": "だいたい",
            "explain": "✅ [だいたい|だいたい|Đại khái, đại thể]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Karaoke\"",
            "options": [
                "カラオケ",
                "はこ",
                "じかん",
                "テーブル"
            ],
            "answer": "カラオケ",
            "explain": "✅ [カラオケ|カラオケ|Karaoke]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Sớm, nhanh\"",
            "options": [
                "した",
                "いっしょに いかがですか",
                "ようじ",
                "はやく"
            ],
            "answer": "はやく",
            "explain": "✅ [はやく|早く、速く|Sớm, nhanh]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn ông\"",
            "options": [
                "おとこの ひと",
                "ぜんぜん",
                "うえ",
                "～から"
            ],
            "answer": "おとこの ひと",
            "explain": "✅ [おとこの ひと|男の 人|Người đàn ông]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cuộc hẹn, lời hứa\"",
            "options": [
                "やくそく",
                "りょうり",
                "こまかい おかね",
                "～はちょっと"
            ],
            "answer": "やくそく",
            "explain": "✅ [やくそく|約束|Cuộc hẹn, lời hứa]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hiệu sách\"",
            "options": [
                "そと",
                "ほんや",
                "しょくどう",
                "ふろば"
            ],
            "answer": "ほんや",
            "explain": "✅ [ほんや|本屋|Hiệu sách]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Phim\"",
            "options": [
                "おっと / しゅじん",
                "いろいろ",
                "～から",
                "フィルム"
            ],
            "answer": "フィルム",
            "explain": "✅ [フィルム|フィルム|Phim]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tủ lạnh\"",
            "options": [
                "れいぞうこ",
                "だいたい",
                "おんなの こ",
                "ねこ"
            ],
            "answer": "れいぞうこ",
            "explain": "✅ [れいぞうこ|冷蔵庫|Tủ lạnh]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Món ăn, việc nấu ăn\"",
            "options": [
                "りょうり",
                "うた",
                "トイレ",
                "テーブル"
            ],
            "answer": "りょうり",
            "explain": "✅ [りょうり|料理|Món ăn, việc nấu ăn]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Phòng khách, phòng sinh hoạt chung\"",
            "options": [
                "いま",
                "ぜんぜん",
                "おっと / しゅじん",
                "ダンス"
            ],
            "answer": "いま",
            "explain": "✅ [いま|居間|Phòng khách, phòng sinh hoạt chung]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ La Mã\"",
            "options": [
                "かたかな",
                "もの",
                "クラシック",
                "ローマじ"
            ],
            "answer": "ローマじ",
            "explain": "✅ [ローマじ|ローマ字|Chữ La Mã]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Kabuki (một thể loại ca kịch truyền thống của Nhật)\"",
            "options": [
                "かぶき",
                "しんしつ",
                "かたかな",
                "ようじ"
            ],
            "answer": "かぶき",
            "explain": "✅ [かぶき|歌舞伎|Kabuki (một thể loại ca kịch truyền thống của Nhật)]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Công tắc\"",
            "options": [
                "スイッチ",
                "あります",
                "した",
                "きらい"
            ],
            "answer": "スイッチ",
            "explain": "✅ [スイッチ|スイッチ|Công tắc]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ngoài\"",
            "options": [
                "あります",
                "もしもし",
                "すみません",
                "そと"
            ],
            "answer": "そと",
            "explain": "✅ [そと|外|Ngoài]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn bà\"",
            "options": [
                "ベッド",
                "います",
                "ポスト",
                "おんなの ひと"
            ],
            "answer": "おんなの ひと",
            "explain": "✅ [おんなの ひと|女の 人|Người đàn bà]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tốt, rõ (chỉ mức độ)\"",
            "options": [
                "しんしつ",
                "やくそく",
                "よく",
                "ダンス"
            ],
            "answer": "よく",
            "explain": "✅ [よく|よく|Tốt, rõ (chỉ mức độ)]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thật đáng tiếc nhỉ./ Buồn nhỉ.\"",
            "options": [
                "ビル",
                "ざんねんですね",
                "だいどころ",
                "ポスト"
            ],
            "answer": "ざんねんですね",
            "explain": "✅ [ざんねんですね|残念ですね|Thật đáng tiếc nhỉ./ Buồn nhỉ.]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vì ~\"",
            "options": [
                "～から",
                "でんち",
                "みぎ",
                "いろいろ"
            ],
            "answer": "～から",
            "explain": "✅ [～から|～から|Vì ~]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cô con gái\"",
            "options": [
                "やきゅう",
                "スポーツ",
                "おんなの こ",
                "～から"
            ],
            "answer": "おんなの こ",
            "explain": "✅ [おんなの こ|女の 子|Cô con gái]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thời gian\"",
            "options": [
                "みぎ",
                "じかん",
                "フィルム",
                "トイレ"
            ],
            "answer": "じかん",
            "explain": "✅ [じかん|時間|Thời gian]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vé (xem hòa nhạc, xem phim)\"",
            "options": [
                "まえ",
                "ぜんぜん",
                "ベッド",
                "チケット"
            ],
            "answer": "チケット",
            "explain": "✅ [チケット|チケット|Vé (xem hòa nhạc, xem phim)]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhiều, đa dạng\"",
            "options": [
                "かぶき",
                "つま / かない",
                "ぜんぜん",
                "いろいろ"
            ],
            "answer": "いろいろ",
            "explain": "✅ [いろいろ|いろいろ[な]|Nhiều, đa dạng]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Trên\"",
            "options": [
                "うえ",
                "だいどころ",
                "～や",
                "ほんや"
            ],
            "answer": "うえ",
            "explain": "✅ [うえ|上|Trên]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật\"",
            "options": [
                "おざわ せいじ",
                "ひらがな",
                "うえ",
                "じ"
            ],
            "answer": "おざわ せいじ",
            "explain": "✅ [おざわ せいじ|小沢 征爾|Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xin lỗi.\"",
            "options": [
                "また こんど おねがいします",
                "トイレ",
                "ポスト",
                "すみません"
            ],
            "answer": "すみません",
            "explain": "✅ [すみません|すみません|Xin lỗi.]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hiểu\"",
            "options": [
                "わかります",
                "～や",
                "はやく",
                "ベランダ"
            ],
            "answer": "わかります",
            "explain": "✅ [わかります|分かります|Hiểu]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có (sở hữu)\"",
            "options": [
                "ようじ",
                "れいぞうこ",
                "あります",
                "ほんや"
            ],
            "answer": "あります",
            "explain": "✅ [あります|あります|Có (sở hữu)]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cậu con trai\"",
            "options": [
                "うしろ",
                "りょうり",
                "あります",
                "おとこの こ"
            ],
            "answer": "おとこの こ",
            "explain": "✅ [おとこの こ|男の 子|Cậu con trai]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Pin\"",
            "options": [
                "でんち",
                "ベッド",
                "～はちょっと",
                "おくさん"
            ],
            "answer": "でんち",
            "explain": "✅ [でんち|電池|Pin]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hành lang\"",
            "options": [
                "ろうか",
                "はこ",
                "ビル",
                "まえ"
            ],
            "answer": "ろうか",
            "explain": "✅ [ろうか|廊下|Hành lang]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bên trong cùng, phía sâu bên trong\"",
            "options": [
                "おんなの ひと",
                "りょうり",
                "ひだり",
                "おく"
            ],
            "answer": "おく",
            "explain": "✅ [おく|奥|Bên trong cùng, phía sâu bên trong]"
        }
    ],
    "2": [
        {
            "id": 1,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～は] ちょっと……] の読み方は何ですか。",
            "options": [
                "じかん",
                "かんじ",
                "ねこ",
                "～はちょっと"
            ],
            "answer": "～はちょっと",
            "explain": "✅ [[～は] ちょっと……|～はちょっと|[~ thì] có lẽ không được rồi. (cách từ chối khéo)]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[電池] の読み方は何ですか。",
            "options": [
                "おく",
                "でんち",
                "そと",
                "おんなの ひと"
            ],
            "answer": "でんち",
            "explain": "✅ [電池|でんち|Pin]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[時間] の読み方は何ですか。",
            "options": [
                "じかん",
                "スポーツ",
                "ベランダ",
                "おざわ せいじ"
            ],
            "answer": "じかん",
            "explain": "✅ [時間|じかん|Thời gian]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[歌舞伎] の読み方は何ですか。",
            "options": [
                "かぶき",
                "フィルム",
                "ベランダ",
                "れいぞうこ"
            ],
            "answer": "かぶき",
            "explain": "✅ [歌舞伎|かぶき|Kabuki (một thể loại ca kịch truyền thống của Nhật)]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[飲み物] の読み方は何ですか。",
            "options": [
                "のみもの",
                "すこし",
                "うしろ",
                "ベッド"
            ],
            "answer": "のみもの",
            "explain": "✅ [飲み物|のみもの|Đồ uống]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[食堂] の読み方は何ですか。",
            "options": [
                "ねこ",
                "しょくどう",
                "スイッチ",
                "ちかく"
            ],
            "answer": "しょくどう",
            "explain": "✅ [食堂|しょくどう|Nhà ăn, phòng ăn]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[用事] の読み方は何ですか。",
            "options": [
                "ようじ",
                "あいだ",
                "いぬ",
                "フィルム"
            ],
            "answer": "ようじ",
            "explain": "✅ [用事|ようじ|Việc bận, công chuyện]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[早く、速く] の読み方は何ですか。",
            "options": [
                "はやく",
                "じょうず",
                "いっしょに いかがですか",
                "どうして"
            ],
            "answer": "はやく",
            "explain": "✅ [早く、速く|はやく|Sớm, nhanh]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[約束] の読み方は何ですか。",
            "options": [
                "まど",
                "ビル",
                "やくそく",
                "げんかん"
            ],
            "answer": "やくそく",
            "explain": "✅ [約束|やくそく|Cuộc hẹn, lời hứa]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[洗面所] の読み方は何ですか。",
            "options": [
                "せんめんじょ",
                "いっしょに いかがですか",
                "しょくどう",
                "スポーツ"
            ],
            "answer": "せんめんじょ",
            "explain": "✅ [洗面所|せんめんじょ|Bồn rửa]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[全然] の読み方は何ですか。",
            "options": [
                "ぜんぜん",
                "じょうず",
                "のりば",
                "スイッチ"
            ],
            "answer": "ぜんぜん",
            "explain": "✅ [全然|ぜんぜん|Hoàn toàn ~ không]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[犬] の読み方は何ですか。",
            "options": [
                "いぬ",
                "たくさん",
                "おざわ せいじ",
                "ほんや"
            ],
            "answer": "いぬ",
            "explain": "✅ [犬|いぬ|Chó]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[近く] の読み方は何ですか。",
            "options": [
                "ちかく",
                "たな",
                "かぶき",
                "どうして"
            ],
            "answer": "ちかく",
            "explain": "✅ [近く|ちかく|Gần]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[野球] の読み方は何ですか。",
            "options": [
                "じょうず",
                "ふろば",
                "じ",
                "やきゅう"
            ],
            "answer": "やきゅう",
            "explain": "✅ [野球|やきゅう|Bóng chày (~を します: chơi bóng chày)]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[窓] の読み方は何ですか。",
            "options": [
                "まど",
                "だいたい",
                "～や",
                "りょうり"
            ],
            "answer": "まど",
            "explain": "✅ [窓|まど|Cửa sổ]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[廊下] の読み方は何ですか。",
            "options": [
                "ろうか",
                "ベッド",
                "コンサート",
                "わかります"
            ],
            "answer": "ろうか",
            "explain": "✅ [廊下|ろうか|Hành lang]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[分かります] の読み方は何ですか。",
            "options": [
                "へた",
                "ベッド",
                "こまかい おかね",
                "わかります"
            ],
            "answer": "わかります",
            "explain": "✅ [分かります|わかります|Hiểu]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[棚] の読み方は何ですか。",
            "options": [
                "たな",
                "ぜんぜん",
                "しょくどう",
                "まえ"
            ],
            "answer": "たな",
            "explain": "✅ [棚|たな|Giá sách]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[奥] の読み方は何ですか。",
            "options": [
                "スイッチ",
                "おく",
                "かぶき",
                "つま / かない"
            ],
            "answer": "おく",
            "explain": "✅ [奥|おく|Bên trong cùng, phía sâu bên trong]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[音楽] の読み方は何ですか。",
            "options": [
                "ベランダ",
                "おんなの ひと",
                "ざんねんですね",
                "おんがく"
            ],
            "answer": "おんがく",
            "explain": "✅ [音楽|おんがく|Âm nhạc]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[歌] の読み方は何ですか。",
            "options": [
                "した",
                "うた",
                "いろいろ",
                "よく"
            ],
            "answer": "うた",
            "explain": "✅ [歌|うた|Bài hát]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[女の 子] の読み方は何ですか。",
            "options": [
                "じょうず",
                "おんなの こ",
                "やくそく",
                "ひだり"
            ],
            "answer": "おんなの こ",
            "explain": "✅ [女の 子|おんなの こ|Cô con gái]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[男の 子] の読み方は何ですか。",
            "options": [
                "おとこの こ",
                "え",
                "うしろ",
                "りょうり"
            ],
            "answer": "おとこの こ",
            "explain": "✅ [男の 子|おとこの こ|Cậu con trai]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[左] の読み方は何ですか。",
            "options": [
                "ひだり",
                "き",
                "いぬ",
                "げんかん"
            ],
            "answer": "ひだり",
            "explain": "✅ [左|ひだり|Trái]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[漢字] の読み方は何ですか。",
            "options": [
                "あります",
                "はやく",
                "かんじ",
                "いぬ"
            ],
            "answer": "かんじ",
            "explain": "✅ [漢字|かんじ|Chữ Hán]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[前] の読み方は何ですか。",
            "options": [
                "ようじ",
                "スイッチ",
                "りょうり",
                "まえ"
            ],
            "answer": "まえ",
            "explain": "✅ [前|まえ|Trước]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[本屋] の読み方は何ですか。",
            "options": [
                "ちかく",
                "クラシック",
                "ほんや",
                "いろいろ"
            ],
            "answer": "ほんや",
            "explain": "✅ [本屋|ほんや|Hiệu sách]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[ローマ字] の読み方は何ですか。",
            "options": [
                "ベッド",
                "き",
                "みぎ",
                "ローマじ"
            ],
            "answer": "ローマじ",
            "explain": "✅ [ローマ字|ローマじ|Chữ La Mã]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[一緒に いかがですか] の読み方は何ですか。",
            "options": [
                "いっしょに いかがですか",
                "おく",
                "こまかい おかね",
                "あります"
            ],
            "answer": "いっしょに いかがですか",
            "explain": "✅ [一緒に いかがですか|いっしょに いかがですか|Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[下] の読み方は何ですか。",
            "options": [
                "はやく",
                "した",
                "おとこの ひと",
                "わかります"
            ],
            "answer": "した",
            "explain": "✅ [下|した|Dưới]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ローマじ] の漢字は何ですか。",
            "options": [
                "カラオケ",
                "夫 / 主人",
                "スパイス・コーナー",
                "ローマ字"
            ],
            "answer": "ローマ字",
            "explain": "✅ [ローマ字|ローマじ|Chữ La Mã]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はこ] の漢字は何ですか。",
            "options": [
                "洗面所",
                "嫌い[な]",
                "箱",
                "好き[な]"
            ],
            "answer": "箱",
            "explain": "✅ [箱|はこ|Hộp]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[もの] の漢字は何ですか。",
            "options": [
                "隣",
                "物",
                "犬",
                "チリソース"
            ],
            "answer": "物",
            "explain": "✅ [物|もの|Vật, đồ vật]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ちかく] の漢字は何ですか。",
            "options": [
                "箱",
                "男の 子",
                "右",
                "近く"
            ],
            "answer": "近く",
            "explain": "✅ [近く|ちかく|Gần]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[みぎ] の漢字は何ですか。",
            "options": [
                "中",
                "小沢 征爾",
                "右",
                "カラオケ"
            ],
            "answer": "右",
            "explain": "✅ [右|みぎ|Phải]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[じ] の漢字は何ですか。",
            "options": [
                "字",
                "テーブル",
                "漢字",
                "妻 / 家内"
            ],
            "answer": "字",
            "explain": "✅ [字|じ|Chữ]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おくさん] の漢字は何ですか。",
            "options": [
                "フィルム",
                "玄関",
                "ひらがな",
                "奥さん"
            ],
            "answer": "奥さん",
            "explain": "✅ [奥さん|おくさん|Vợ (dùng khi nói về vợ người khác)]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとこの こ] の漢字は何ですか。",
            "options": [
                "ひらがな",
                "男の 人",
                "もしもし",
                "男の 子"
            ],
            "answer": "男の 子",
            "explain": "✅ [男の 子|おとこの こ|Cậu con trai]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いろいろ] の漢字は何ですか。",
            "options": [
                "後ろ",
                "いろいろ[な]",
                "好き[な]",
                "料理"
            ],
            "answer": "いろいろ[な]",
            "explain": "✅ [いろいろ[な]|いろいろ|Nhiều, đa dạng]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとこの ひと] の漢字は何ですか。",
            "options": [
                "男の 人",
                "スイッチ",
                "箱",
                "外"
            ],
            "answer": "男の 人",
            "explain": "✅ [男の 人|おとこの ひと|Người đàn ông]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[せんめんじょ] の漢字は何ですか。",
            "options": [
                "分かります",
                "本屋",
                "洗面所",
                "台所"
            ],
            "answer": "洗面所",
            "explain": "✅ [洗面所|せんめんじょ|Bồn rửa]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いま] の漢字は何ですか。",
            "options": [
                "居間",
                "木",
                "棚",
                "右"
            ],
            "answer": "居間",
            "explain": "✅ [居間|いま|Phòng khách, phòng sinh hoạt chung]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きらい] の漢字は何ですか。",
            "options": [
                "スポーツ",
                "男の 人",
                "嫌い[な]",
                "乗り場"
            ],
            "answer": "嫌い[な]",
            "explain": "✅ [嫌い[な]|きらい|Ghét, không thích]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[まど] の漢字は何ですか。",
            "options": [
                "カラオケ",
                "だめですか",
                "窓",
                "飲み物"
            ],
            "answer": "窓",
            "explain": "✅ [窓|まど|Cửa sổ]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[れいぞうこ] の漢字は何ですか。",
            "options": [
                "乗り場",
                "ああ",
                "喫茶店",
                "冷蔵庫"
            ],
            "answer": "冷蔵庫",
            "explain": "✅ [冷蔵庫|れいぞうこ|Tủ lạnh]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いぬ] の漢字は何ですか。",
            "options": [
                "犬",
                "すみません",
                "奥",
                "棚"
            ],
            "answer": "犬",
            "explain": "✅ [犬|いぬ|Chó]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ごしゅじん] の漢字は何ですか。",
            "options": [
                "ご主人",
                "後ろ",
                "分かります",
                "だいたい"
            ],
            "answer": "ご主人",
            "explain": "✅ [ご主人|ごしゅじん|Chồng (dùng khi nói về chồng người khác)]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[すこし] の漢字は何ですか。",
            "options": [
                "料理",
                "女の 人",
                "飲み物",
                "少し"
            ],
            "answer": "少し",
            "explain": "✅ [少し|すこし|Ít, một ít]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[した] の漢字は何ですか。",
            "options": [
                "たくさん",
                "物",
                "ひらがな",
                "下"
            ],
            "answer": "下",
            "explain": "✅ [下|した|Dưới]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おんなの ひと] の漢字は何ですか。",
            "options": [
                "窓",
                "女の 人",
                "猫",
                "スイッチ"
            ],
            "answer": "女の 人",
            "explain": "✅ [女の 人|おんなの ひと|Người đàn bà]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[でんち] の漢字は何ですか。",
            "options": [
                "ああ",
                "寝室",
                "電池",
                "洗面所"
            ],
            "answer": "電池",
            "explain": "✅ [電池|でんち|Pin]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はやく] の漢字は何ですか。",
            "options": [
                "早く、速く",
                "左",
                "ベッド",
                "風呂場"
            ],
            "answer": "早く、速く",
            "explain": "✅ [早く、速く|はやく|Sớm, nhanh]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[そと] の漢字は何ですか。",
            "options": [
                "クラシック",
                "時間",
                "外",
                "あります"
            ],
            "answer": "外",
            "explain": "✅ [外|そと|Ngoài]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[じょうず] の漢字は何ですか。",
            "options": [
                "上手[な]",
                "ジャズ",
                "[～は] ちょっと……",
                "木"
            ],
            "answer": "上手[な]",
            "explain": "✅ [上手[な]|じょうず|Giỏi]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かぶき] の漢字は何ですか。",
            "options": [
                "歌舞伎",
                "間",
                "分かります",
                "ローマ字"
            ],
            "answer": "歌舞伎",
            "explain": "✅ [歌舞伎|かぶき|Kabuki (một thể loại ca kịch truyền thống của Nhật)]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[き] の漢字は何ですか。",
            "options": [
                "下手[な]",
                "棚",
                "奥さん",
                "木"
            ],
            "answer": "木",
            "explain": "✅ [木|き|Cây, gỗ]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[たな] の漢字は何ですか。",
            "options": [
                "ベッド",
                "棚",
                "夫 / 主人",
                "右"
            ],
            "answer": "棚",
            "explain": "✅ [棚|たな|Giá sách]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[すき] の漢字は何ですか。",
            "options": [
                "外",
                "夫 / 主人",
                "好き[な]",
                "あります"
            ],
            "answer": "好き[な]",
            "explain": "✅ [好き[な]|すき|Thích]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ろうか] の漢字は何ですか。",
            "options": [
                "約束",
                "猫",
                "廊下",
                "物"
            ],
            "answer": "廊下",
            "explain": "✅ [廊下|ろうか|Hành lang]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おんなの こ] の漢字は何ですか。",
            "options": [
                "女の 子",
                "外",
                "冷蔵庫",
                "窓"
            ],
            "answer": "女の 子",
            "explain": "✅ [女の 子|おんなの こ|Cô con gái]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Con cái\"",
            "options": [
                "ベッド",
                "こども",
                "カラオケ",
                "ちかく"
            ],
            "answer": "こども",
            "explain": "✅ [こども|子ども|Con cái]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giường\"",
            "options": [
                "した",
                "あります",
                "ベッド",
                "どうして"
            ],
            "answer": "ベッド",
            "explain": "✅ [ベッド|ベッド|Giường]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dưới\"",
            "options": [
                "した",
                "たくさん",
                "おとこの こ",
                "たな"
            ],
            "answer": "した",
            "explain": "✅ [した|下|Dưới]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tương ớt (chili sauce)\"",
            "options": [
                "どうして",
                "チリソース",
                "じ",
                "なか"
            ],
            "answer": "チリソース",
            "explain": "✅ [チリソース|チリソース|Tương ớt (chili sauce)]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cậu con trai\"",
            "options": [
                "おとこの こ",
                "～や～[など]",
                "かたかな",
                "ひだり"
            ],
            "answer": "おとこの こ",
            "explain": "✅ [おとこの こ|男の 子|Cậu con trai]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn bà\"",
            "options": [
                "おんなの ひと",
                "ポスト",
                "ベランダ",
                "え"
            ],
            "answer": "おんなの ひと",
            "explain": "✅ [おんなの ひと|女の 人|Người đàn bà]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giỏi\"",
            "options": [
                "おく",
                "こうえん",
                "じょうず",
                "きらい"
            ],
            "answer": "じょうず",
            "explain": "✅ [じょうず|上手[な]|Giỏi]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Trái\"",
            "options": [
                "スイッチ",
                "きらい",
                "こども",
                "ひだり"
            ],
            "answer": "ひだり",
            "explain": "✅ [ひだり|左|Trái]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhảy, khiêu vũ (~を します: nhảy, khiêu vũ)\"",
            "options": [
                "き",
                "おとこの こ",
                "ちかく",
                "ダンス"
            ],
            "answer": "ダンス",
            "explain": "✅ [ダンス|ダンス|Nhảy, khiêu vũ (~を します: nhảy, khiêu vũ)]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tốt, rõ (chỉ mức độ)\"",
            "options": [
                "～から",
                "よく",
                "ドア",
                "れいぞうこ"
            ],
            "answer": "よく",
            "explain": "✅ [よく|よく|Tốt, rõ (chỉ mức độ)]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ít, một ít\"",
            "options": [
                "すこし",
                "スポーツ",
                "しんしつ",
                "だいたい"
            ],
            "answer": "すこし",
            "explain": "✅ [すこし|少し|Ít, một ít]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bên cạnh\"",
            "options": [
                "となり",
                "よく",
                "ぜんぜん",
                "ジャズ"
            ],
            "answer": "となり",
            "explain": "✅ [となり|隣|Bên cạnh]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn ông\"",
            "options": [
                "となり",
                "みぎ",
                "～はちょっと",
                "おとこの ひと"
            ],
            "answer": "おとこの ひと",
            "explain": "✅ [おとこの ひと|男の 人|Người đàn ông]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mèo\"",
            "options": [
                "ねこ",
                "すみません",
                "チリソース",
                "した"
            ],
            "answer": "ねこ",
            "explain": "✅ [ねこ|猫|Mèo]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bên trong cùng, phía sâu bên trong\"",
            "options": [
                "した",
                "おく",
                "うた",
                "おんなの ひと"
            ],
            "answer": "おく",
            "explain": "✅ [おく|奥|Bên trong cùng, phía sâu bên trong]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ Katakana\"",
            "options": [
                "かたかな",
                "りょうり",
                "ダンス",
                "テーブル"
            ],
            "answer": "かたかな",
            "explain": "✅ [かたかな|かたかな|Chữ Katakana]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vợ (dùng khi nói về vợ người khác)\"",
            "options": [
                "ひらがな",
                "かぶき",
                "おくさん",
                "まど"
            ],
            "answer": "おくさん",
            "explain": "✅ [おくさん|奥さん|Vợ (dùng khi nói về vợ người khác)]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Phòng ngủ\"",
            "options": [
                "～から",
                "おとこの こ",
                "わかります",
                "しんしつ"
            ],
            "answer": "しんしつ",
            "explain": "✅ [しんしつ|寝室|Phòng ngủ]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bàn\"",
            "options": [
                "うた",
                "ちかく",
                "チリソース",
                "テーブル"
            ],
            "answer": "テーブル",
            "explain": "✅ [テーブル|テーブル|Bàn]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Việc bận, công chuyện\"",
            "options": [
                "ようじ",
                "りょうり",
                "テーブル",
                "ぜんぜん"
            ],
            "answer": "ようじ",
            "explain": "✅ [ようじ|用事|Việc bận, công chuyện]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vì ~\"",
            "options": [
                "ジャズ",
                "～や～[など]",
                "～から",
                "きらい"
            ],
            "answer": "～から",
            "explain": "✅ [～から|～から|Vì ~]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cửa ra vào\"",
            "options": [
                "げんかん",
                "あります",
                "やきゅう",
                "テーブル"
            ],
            "answer": "げんかん",
            "explain": "✅ [げんかん|玄関|Cửa ra vào]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bóng chày (~を します: chơi bóng chày)\"",
            "options": [
                "やきゅう",
                "あります",
                "おんなの ひと",
                "となり"
            ],
            "answer": "やきゅう",
            "explain": "✅ [やきゅう|野球|Bóng chày (~を します: chơi bóng chày)]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"~ nhất (いちばん うえ: vị trí cao nhất)\"",
            "options": [
                "いちばん～",
                "やくそく",
                "かぶき",
                "おっと / しゅじん"
            ],
            "answer": "いちばん～",
            "explain": "✅ [いちばん～|いちばん～|~ nhất (いちばん うえ: vị trí cao nhất)]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ\"",
            "options": [
                "じ",
                "ベランダ",
                "おく",
                "ジャズ"
            ],
            "answer": "じ",
            "explain": "✅ [じ|字|Chữ]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Kém\"",
            "options": [
                "へた",
                "コンサート",
                "いま",
                "ざんねんですね"
            ],
            "answer": "へた",
            "explain": "✅ [へた|下手[な]|Kém]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cửa\"",
            "options": [
                "かんじ",
                "すき",
                "チケット",
                "ドア"
            ],
            "answer": "ドア",
            "explain": "✅ [ドア|ドア|Cửa]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giá sách\"",
            "options": [
                "スイッチ",
                "よく",
                "～や～[など]",
                "たな"
            ],
            "answer": "たな",
            "explain": "✅ [たな|棚|Giá sách]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhạc jazz\"",
            "options": [
                "ジャズ",
                "りょうり",
                "つま / かない",
                "じ"
            ],
            "answer": "ジャズ",
            "explain": "✅ [ジャズ|ジャズ|Nhạc jazz]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cây, gỗ\"",
            "options": [
                "き",
                "こども",
                "ひだり",
                "うた"
            ],
            "answer": "き",
            "explain": "✅ [き|木|Cây, gỗ]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhiều\"",
            "options": [
                "ちかく",
                "ベッド",
                "たくさん",
                "チケット"
            ],
            "answer": "たくさん",
            "explain": "✅ [たくさん|たくさん|Nhiều]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Kabuki (một thể loại ca kịch truyền thống của Nhật)\"",
            "options": [
                "まど",
                "かぶき",
                "へた",
                "じ"
            ],
            "answer": "かぶき",
            "explain": "✅ [かぶき|歌舞伎|Kabuki (một thể loại ca kịch truyền thống của Nhật)]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ghét, không thích\"",
            "options": [
                "きらい",
                "ようじ",
                "～や～[など]",
                "だめですか"
            ],
            "answer": "きらい",
            "explain": "✅ [きらい|嫌い[な]|Ghét, không thích]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cuộc hẹn, lời hứa\"",
            "options": [
                "つま / かない",
                "おとこの こ",
                "ねこ",
                "やくそく"
            ],
            "answer": "やくそく",
            "explain": "✅ [やくそく|約束|Cuộc hẹn, lời hứa]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tòa nhà\"",
            "options": [
                "おとこの こ",
                "ひらがな",
                "こども",
                "ビル"
            ],
            "answer": "ビル",
            "explain": "✅ [ビル|ビル|Tòa nhà]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ Hiragana\"",
            "options": [
                "ひらがな",
                "しんしつ",
                "はやく",
                "だいどころ"
            ],
            "answer": "ひらがな",
            "explain": "✅ [ひらがな|ひらがな|Chữ Hiragana]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có (tồn tại, dùng cho đồ vật)\"",
            "options": [
                "あります",
                "した",
                "チリソース",
                "ごしゅじん"
            ],
            "answer": "あります",
            "explain": "✅ [あります|あります|Có (tồn tại, dùng cho đồ vật)]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tủ lạnh\"",
            "options": [
                "つま / かない",
                "たな",
                "よく",
                "れいぞうこ"
            ],
            "answer": "れいぞうこ",
            "explain": "✅ [れいぞうこ|冷蔵庫|Tủ lạnh]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Không được à?\"",
            "options": [
                "はやく",
                "こまかい おかね",
                "そと",
                "だめですか"
            ],
            "answer": "だめですか",
            "explain": "✅ [だめですか|だめですか|Không được à?]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bài hát\"",
            "options": [
                "おとこの ひと",
                "そと",
                "となり",
                "うた"
            ],
            "answer": "うた",
            "explain": "✅ [うた|歌|Bài hát]"
        }
    ],
    "3": [
        {
            "id": 1,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[隣] の読み方は何ですか。",
            "options": [
                "なか",
                "き",
                "けん",
                "となり"
            ],
            "answer": "となり",
            "explain": "✅ [隣|となり|Bên cạnh]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[箱] の読み方は何ですか。",
            "options": [
                "はこ",
                "また こんど おねがいします",
                "どうも すみません",
                "ドア"
            ],
            "answer": "はこ",
            "explain": "✅ [箱|はこ|Hộp]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[冷蔵庫] の読み方は何ですか。",
            "options": [
                "チリソース",
                "やくそく",
                "こども",
                "れいぞうこ"
            ],
            "answer": "れいぞうこ",
            "explain": "✅ [冷蔵庫|れいぞうこ|Tủ lạnh]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[～段目] の読み方は何ですか。",
            "options": [
                "じかん",
                "～だんめ",
                "かぶき",
                "おとこの ひと"
            ],
            "answer": "～だんめ",
            "explain": "✅ [～段目|～だんめ|Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[ローマ字] の読み方は何ですか。",
            "options": [
                "ローマじ",
                "こまかい おかね",
                "ひらがな",
                "チケット"
            ],
            "answer": "ローマじ",
            "explain": "✅ [ローマ字|ローマじ|Chữ La Mã]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[物] の読み方は何ですか。",
            "options": [
                "もの",
                "けん",
                "あります",
                "こども"
            ],
            "answer": "もの",
            "explain": "✅ [物|もの|Vật, đồ vật]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[字] の読み方は何ですか。",
            "options": [
                "ドア",
                "じ",
                "います",
                "ローマじ"
            ],
            "answer": "じ",
            "explain": "✅ [字|じ|Chữ]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[木] の読み方は何ですか。",
            "options": [
                "ぜんぜん",
                "～から",
                "き",
                "うしろ"
            ],
            "answer": "き",
            "explain": "✅ [木|き|Cây, gỗ]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[玄関] の読み方は何ですか。",
            "options": [
                "でんち",
                "げんかん",
                "あります",
                "スイッチ"
            ],
            "answer": "げんかん",
            "explain": "✅ [玄関|げんかん|Cửa ra vào]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[公園] の読み方は何ですか。",
            "options": [
                "こうえん",
                "のりば",
                "ほんや",
                "まえ"
            ],
            "answer": "こうえん",
            "explain": "✅ [公園|こうえん|Công viên]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[風呂場] の読み方は何ですか。",
            "options": [
                "すき",
                "ひらがな",
                "じ",
                "ふろば"
            ],
            "answer": "ふろば",
            "explain": "✅ [風呂場|ふろば|Phòng tắm]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[野球] の読み方は何ですか。",
            "options": [
                "おんがく",
                "やきゅう",
                "せんめんじょ",
                "うえ"
            ],
            "answer": "やきゅう",
            "explain": "✅ [野球|やきゅう|Bóng chày (~を します: chơi bóng chày)]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[好き[な]] の読み方は何ですか。",
            "options": [
                "もの",
                "みぎ",
                "コンサート",
                "すき"
            ],
            "answer": "すき",
            "explain": "✅ [好き[な]|すき|Thích]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[廊下] の読み方は何ですか。",
            "options": [
                "ちかく",
                "ろうか",
                "となり",
                "チリソース"
            ],
            "answer": "ろうか",
            "explain": "✅ [廊下|ろうか|Hành lang]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[料理] の読み方は何ですか。",
            "options": [
                "じ",
                "おざわ せいじ",
                "りょうり",
                "はこ"
            ],
            "answer": "りょうり",
            "explain": "✅ [料理|りょうり|Món ăn, việc nấu ăn]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[窓] の読み方は何ですか。",
            "options": [
                "まど",
                "ああ",
                "かんじ",
                "スパイス・コーナー"
            ],
            "answer": "まど",
            "explain": "✅ [窓|まど|Cửa sổ]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[猫] の読み方は何ですか。",
            "options": [
                "みぎ",
                "クラシック",
                "ジャズ",
                "ねこ"
            ],
            "answer": "ねこ",
            "explain": "✅ [猫|ねこ|Mèo]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[妻 / 家内] の読み方は何ですか。",
            "options": [
                "せんめんじょ",
                "のみもの",
                "ああ",
                "つま / かない"
            ],
            "answer": "つま / かない",
            "explain": "✅ [妻 / 家内|つま / かない|Vợ (dùng khi nói về vợ mình)]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[いろいろ[な]] の読み方は何ですか。",
            "options": [
                "あります",
                "いろいろ",
                "わかります",
                "すき"
            ],
            "answer": "いろいろ",
            "explain": "✅ [いろいろ[な]|いろいろ|Nhiều, đa dạng]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[下] の読み方は何ですか。",
            "options": [
                "ジャズ",
                "した",
                "また こんど おねがいします",
                "こども"
            ],
            "answer": "した",
            "explain": "✅ [下|した|Dưới]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[右] の読み方は何ですか。",
            "options": [
                "みぎ",
                "また こんど おねがいします",
                "テーブル",
                "～はちょっと"
            ],
            "answer": "みぎ",
            "explain": "✅ [右|みぎ|Phải]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[分かります] の読み方は何ですか。",
            "options": [
                "わかります",
                "やくそく",
                "ベランダ",
                "じ"
            ],
            "answer": "わかります",
            "explain": "✅ [分かります|わかります|Hiểu]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～は] ちょっと……] の読み方は何ですか。",
            "options": [
                "のみもの",
                "かんじ",
                "～はちょっと",
                "ごしゅじん"
            ],
            "answer": "～はちょっと",
            "explain": "✅ [[～は] ちょっと……|～はちょっと|[~ thì] có lẽ không được rồi. (cách từ chối khéo)]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[少し] の読み方は何ですか。",
            "options": [
                "すこし",
                "なか",
                "みぎ",
                "トイレ"
            ],
            "answer": "すこし",
            "explain": "✅ [少し|すこし|Ít, một ít]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[台所] の読み方は何ですか。",
            "options": [
                "だいどころ",
                "～や",
                "え",
                "あります"
            ],
            "answer": "だいどころ",
            "explain": "✅ [台所|だいどころ|Bếp]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[棚] の読み方は何ですか。",
            "options": [
                "たな",
                "まど",
                "のみもの",
                "りょうり"
            ],
            "answer": "たな",
            "explain": "✅ [棚|たな|Giá sách]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[男の 人] の読み方は何ですか。",
            "options": [
                "おとこの ひと",
                "のりば",
                "スイッチ",
                "コンサート"
            ],
            "answer": "おとこの ひと",
            "explain": "✅ [男の 人|おとこの ひと|Người đàn ông]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[喫茶店] の読み方は何ですか。",
            "options": [
                "きっさてん",
                "のみもの",
                "あります",
                "コンサート"
            ],
            "answer": "きっさてん",
            "explain": "✅ [喫茶店|きっさてん|Quán giải khát, quán cà-phê]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[残念ですね] の読み方は何ですか。",
            "options": [
                "ざんねんですね",
                "のみもの",
                "おくさん",
                "こまかい おかね"
            ],
            "answer": "ざんねんですね",
            "explain": "✅ [残念ですね|ざんねんですね|Thật đáng tiếc nhỉ./ Buồn nhỉ.]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[嫌い[な]] の読み方は何ですか。",
            "options": [
                "きらい",
                "カラオケ",
                "わかります",
                "また こんど おねがいします"
            ],
            "answer": "きらい",
            "explain": "✅ [嫌い[な]|きらい|Ghét, không thích]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[うえ] の漢字は何ですか。",
            "options": [
                "電池",
                "もしもし",
                "上",
                "分かります"
            ],
            "answer": "上",
            "explain": "✅ [上|うえ|Trên]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[あいだ] の漢字は何ですか。",
            "options": [
                "間",
                "左",
                "本屋",
                "棚"
            ],
            "answer": "間",
            "explain": "✅ [間|あいだ|Giữa]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いぬ] の漢字は何ですか。",
            "options": [
                "ダンス",
                "犬",
                "居間",
                "男の 子"
            ],
            "answer": "犬",
            "explain": "✅ [犬|いぬ|Chó]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[せんめんじょ] の漢字は何ですか。",
            "options": [
                "冷蔵庫",
                "喫茶店",
                "県",
                "洗面所"
            ],
            "answer": "洗面所",
            "explain": "✅ [洗面所|せんめんじょ|Bồn rửa]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[こまかい おかね] の漢字は何ですか。",
            "options": [
                "ご主人",
                "ひらがな",
                "女の 子",
                "細かい お金"
            ],
            "answer": "細かい お金",
            "explain": "✅ [細かい お金|こまかい おかね|Tiền lẻ]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[わかります] の漢字は何ですか。",
            "options": [
                "ビル",
                "廊下",
                "どうして",
                "分かります"
            ],
            "answer": "分かります",
            "explain": "✅ [分かります|わかります|Hiểu]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ひだり] の漢字は何ですか。",
            "options": [
                "左",
                "乗り場",
                "料理",
                "男の 人"
            ],
            "answer": "左",
            "explain": "✅ [左|ひだり|Trái]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[すき] の漢字は何ですか。",
            "options": [
                "ジャズ",
                "好き[な]",
                "奥",
                "歌舞伎"
            ],
            "answer": "好き[な]",
            "explain": "✅ [好き[な]|すき|Thích]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[じ] の漢字は何ですか。",
            "options": [
                "字",
                "あります",
                "たくさん",
                "料理"
            ],
            "answer": "字",
            "explain": "✅ [字|じ|Chữ]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[じょうず] の漢字は何ですか。",
            "options": [
                "右",
                "早く、速く",
                "嫌い[な]",
                "上手[な]"
            ],
            "answer": "上手[な]",
            "explain": "✅ [上手[な]|じょうず|Giỏi]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いっしょに いかがですか] の漢字は何ですか。",
            "options": [
                "一緒に いかがですか",
                "間",
                "右",
                "トイレ"
            ],
            "answer": "一緒に いかがですか",
            "explain": "✅ [一緒に いかがですか|いっしょに いかがですか|Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[げんかん] の漢字は何ですか。",
            "options": [
                "また 今度 お願いします",
                "字",
                "夫 / 主人",
                "玄関"
            ],
            "answer": "玄関",
            "explain": "✅ [玄関|げんかん|Cửa ra vào]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いろいろ] の漢字は何ですか。",
            "options": [
                "いろいろ[な]",
                "料理",
                "下手[な]",
                "後ろ"
            ],
            "answer": "いろいろ[な]",
            "explain": "✅ [いろいろ[な]|いろいろ|Nhiều, đa dạng]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おっと / しゅじん] の漢字は何ですか。",
            "options": [
                "料理",
                "一緒に いかがですか",
                "漢字",
                "夫 / 主人"
            ],
            "answer": "夫 / 主人",
            "explain": "✅ [夫 / 主人|おっと / しゅじん|Chồng (dùng khi nói về chồng mình)]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[つま / かない] の漢字は何ですか。",
            "options": [
                "妻 / 家内",
                "細かい お金",
                "残念ですね",
                "テーブル"
            ],
            "answer": "妻 / 家内",
            "explain": "✅ [妻 / 家内|つま / かない|Vợ (dùng khi nói về vợ mình)]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[また こんど おねがいします] の漢字は何ですか。",
            "options": [
                "ひらがな",
                "また 今度 お願いします",
                "漢字",
                "フィルム"
            ],
            "answer": "また 今度 お願いします",
            "explain": "✅ [また 今度 お願いします|また こんど おねがいします|Hẹn anh/chị lần sau vậy. (cách từ chối khéo)]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとこの ひと] の漢字は何ですか。",
            "options": [
                "男の 人",
                "チケット",
                "ああ",
                "～から"
            ],
            "answer": "男の 人",
            "explain": "✅ [男の 人|おとこの ひと|Người đàn ông]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[え] の漢字は何ですか。",
            "options": [
                "猫",
                "絵",
                "～や～[など]",
                "チリソース"
            ],
            "answer": "絵",
            "explain": "✅ [絵|え|Tranh, hội họa]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[こども] の漢字は何ですか。",
            "options": [
                "ご主人",
                "猫",
                "コンサート",
                "子ども"
            ],
            "answer": "子ども",
            "explain": "✅ [子ども|こども|Con cái]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ねこ] の漢字は何ですか。",
            "options": [
                "漢字",
                "[～は] ちょっと……",
                "猫",
                "分かります"
            ],
            "answer": "猫",
            "explain": "✅ [猫|ねこ|Mèo]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[どうも すみません] の漢字は何ですか。",
            "options": [
                "小沢 征爾",
                "[どうも] すみません",
                "冷蔵庫",
                "用事"
            ],
            "answer": "[どうも] すみません",
            "explain": "✅ [[どうも] すみません|どうも すみません|Cám ơn.]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きらい] の漢字は何ですか。",
            "options": [
                "クラシック",
                "どうして",
                "嫌い[な]",
                "カラオケ"
            ],
            "answer": "嫌い[な]",
            "explain": "✅ [嫌い[な]|きらい|Ghét, không thích]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[した] の漢字は何ですか。",
            "options": [
                "下",
                "料理",
                "スポーツ",
                "下手[な]"
            ],
            "answer": "下",
            "explain": "✅ [下|した|Dưới]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ほんや] の漢字は何ですか。",
            "options": [
                "妻 / 家内",
                "全然",
                "本屋",
                "漢字"
            ],
            "answer": "本屋",
            "explain": "✅ [本屋|ほんや|Hiệu sách]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ざんねんですね] の漢字は何ですか。",
            "options": [
                "男の 人",
                "カラオケ",
                "残念ですね",
                "もしもし"
            ],
            "answer": "残念ですね",
            "explain": "✅ [残念ですね|ざんねんですね|Thật đáng tiếc nhỉ./ Buồn nhỉ.]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はこ] の漢字は何ですか。",
            "options": [
                "箱",
                "男の 子",
                "女の 子",
                "犬"
            ],
            "answer": "箱",
            "explain": "✅ [箱|はこ|Hộp]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[うしろ] の漢字は何ですか。",
            "options": [
                "後ろ",
                "男の 子",
                "あります",
                "上手[な]"
            ],
            "answer": "後ろ",
            "explain": "✅ [後ろ|うしろ|Sau]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとこの こ] の漢字は何ですか。",
            "options": [
                "男の 子",
                "洗面所",
                "約束",
                "ジャズ"
            ],
            "answer": "男の 子",
            "explain": "✅ [男の 子|おとこの こ|Cậu con trai]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[そと] の漢字は何ですか。",
            "options": [
                "外",
                "ひらがな",
                "いろいろ[な]",
                "近く"
            ],
            "answer": "外",
            "explain": "✅ [外|そと|Ngoài]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[のりば] の漢字は何ですか。",
            "options": [
                "乗り場",
                "前",
                "ダンス",
                "好き[な]"
            ],
            "answer": "乗り場",
            "explain": "✅ [乗り場|のりば|Bến xe, điểm lên xuống xe]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)\"",
            "options": [
                "しんしつ",
                "～だんめ",
                "ぜんぜん",
                "おんがく"
            ],
            "answer": "～だんめ",
            "explain": "✅ [～だんめ|～段目|Giá thứ ~, tầng thứ ~ ([だん] được dùng cho giá sách v.v.)]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xin lỗi.\"",
            "options": [
                "たな",
                "りょうり",
                "ダンス",
                "すみません"
            ],
            "answer": "すみません",
            "explain": "✅ [すみません|すみません|Xin lỗi.]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thời gian\"",
            "options": [
                "おんなの ひと",
                "じかん",
                "じ",
                "こうえん"
            ],
            "answer": "じかん",
            "explain": "✅ [じかん|時間|Thời gian]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giá sách\"",
            "options": [
                "たな",
                "だいどころ",
                "しんしつ",
                "うえ"
            ],
            "answer": "たな",
            "explain": "✅ [たな|棚|Giá sách]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tỉnh\"",
            "options": [
                "けん",
                "どうも すみません",
                "～だんめ",
                "ちかく"
            ],
            "answer": "けん",
            "explain": "✅ [けん|県|Tỉnh]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Món ăn, việc nấu ăn\"",
            "options": [
                "コンサート",
                "ねこ",
                "だいたい",
                "りょうり"
            ],
            "answer": "りょうり",
            "explain": "✅ [りょうり|料理|Món ăn, việc nấu ăn]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cửa ra vào\"",
            "options": [
                "げんかん",
                "きらい",
                "だめですか",
                "そと"
            ],
            "answer": "げんかん",
            "explain": "✅ [げんかん|玄関|Cửa ra vào]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có (sở hữu)\"",
            "options": [
                "しんしつ",
                "あります",
                "おんなの こ",
                "もの"
            ],
            "answer": "あります",
            "explain": "✅ [あります|あります|Có (sở hữu)]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có, ở (tồn tại, dùng cho người và động vật)\"",
            "options": [
                "～や～[など]",
                "ああ",
                "まど",
                "います"
            ],
            "answer": "います",
            "explain": "✅ [います|います|Có, ở (tồn tại, dùng cho người và động vật)]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vợ (dùng khi nói về vợ người khác)\"",
            "options": [
                "～だんめ",
                "スポーツ",
                "おくさん",
                "りょうり"
            ],
            "answer": "おくさん",
            "explain": "✅ [おくさん|奥さん|Vợ (dùng khi nói về vợ người khác)]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Có (tồn tại, dùng cho đồ vật)\"",
            "options": [
                "いろいろ",
                "～だんめ",
                "まえ",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ [あります|あります|Có (tồn tại, dùng cho đồ vật)]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chồng (dùng khi nói về chồng người khác)\"",
            "options": [
                "ごしゅじん",
                "ぜんぜん",
                "ほんや",
                "けん"
            ],
            "answer": "ごしゅじん",
            "explain": "✅ [ごしゅじん|ご主人|Chồng (dùng khi nói về chồng người khác)]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hoàn toàn ~ không\"",
            "options": [
                "ベッド",
                "ベランダ",
                "コンサート",
                "ぜんぜん"
            ],
            "answer": "ぜんぜん",
            "explain": "✅ [ぜんぜん|全然|Hoàn toàn ~ không]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tòa nhà\"",
            "options": [
                "ビル",
                "ごしゅじん",
                "チケット",
                "いぬ"
            ],
            "answer": "ビル",
            "explain": "✅ [ビル|ビル|Tòa nhà]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ Katakana\"",
            "options": [
                "おとこの こ",
                "カラオケ",
                "スパイス・コーナー",
                "かたかな"
            ],
            "answer": "かたかな",
            "explain": "✅ [かたかな|かたかな|Chữ Katakana]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn ông\"",
            "options": [
                "おとこの ひと",
                "～だんめ",
                "おんがく",
                "こうえん"
            ],
            "answer": "おとこの ひと",
            "explain": "✅ [おとこの ひと|男の 人|Người đàn ông]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhiều, đa dạng\"",
            "options": [
                "おとこの こ",
                "おくさん",
                "すみません",
                "いろいろ"
            ],
            "answer": "いろいろ",
            "explain": "✅ [いろいろ|いろいろ[な]|Nhiều, đa dạng]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Âm nhạc\"",
            "options": [
                "けん",
                "おんがく",
                "じ",
                "います"
            ],
            "answer": "おんがく",
            "explain": "✅ [おんがく|音楽|Âm nhạc]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"~ nhất (いちばん うえ: vị trí cao nhất)\"",
            "options": [
                "いちばん～",
                "こまかい おかね",
                "います",
                "どうも すみません"
            ],
            "answer": "いちばん～",
            "explain": "✅ [いちばん～|いちばん～|~ nhất (いちばん うえ: vị trí cao nhất)]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật\"",
            "options": [
                "みぎ",
                "クラシック",
                "おざわ せいじ",
                "ひらがな"
            ],
            "answer": "おざわ せいじ",
            "explain": "✅ [おざわ せいじ|小沢 征爾|Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Trong, giữa\"",
            "options": [
                "え",
                "～や～[など]",
                "なか",
                "ごしゅじん"
            ],
            "answer": "なか",
            "explain": "✅ [なか|中|Trong, giữa]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hiểu\"",
            "options": [
                "ああ",
                "すき",
                "どうも すみません",
                "わかります"
            ],
            "answer": "わかります",
            "explain": "✅ [わかります|分かります|Hiểu]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tại sao\"",
            "options": [
                "どうして",
                "チリソース",
                "じかん",
                "まえ"
            ],
            "answer": "どうして",
            "explain": "✅ [どうして|どうして|Tại sao]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Karaoke\"",
            "options": [
                "じかん",
                "カラオケ",
                "かんじ",
                "けん"
            ],
            "answer": "カラオケ",
            "explain": "✅ [カラオケ|カラオケ|Karaoke]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chữ Hán\"",
            "options": [
                "げんかん",
                "でんち",
                "ローマじ",
                "かんじ"
            ],
            "answer": "かんじ",
            "explain": "✅ [かんじ|漢字|Chữ Hán]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Phòng tắm\"",
            "options": [
                "ポスト",
                "ベランダ",
                "おくさん",
                "ふろば"
            ],
            "answer": "ふろば",
            "explain": "✅ [ふろば|風呂場|Phòng tắm]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhà ăn, phòng ăn\"",
            "options": [
                "しょくどう",
                "たくさん",
                "います",
                "こまかい おかね"
            ],
            "answer": "しょくどう",
            "explain": "✅ [しょくどう|食堂|Nhà ăn, phòng ăn]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ghét, không thích\"",
            "options": [
                "カラオケ",
                "おんなの ひと",
                "こども",
                "きらい"
            ],
            "answer": "きらい",
            "explain": "✅ [きらい|嫌い[な]|Ghét, không thích]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Không được à?\"",
            "options": [
                "だめですか",
                "スポーツ",
                "すこし",
                "おく"
            ],
            "answer": "だめですか",
            "explain": "✅ [だめですか|だめですか|Không được à?]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cây, gỗ\"",
            "options": [
                "き",
                "スイッチ",
                "うた",
                "こども"
            ],
            "answer": "き",
            "explain": "✅ [き|木|Cây, gỗ]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cám ơn.\"",
            "options": [
                "どうも すみません",
                "すき",
                "おざわ せいじ",
                "～だんめ"
            ],
            "answer": "どうも すみません",
            "explain": "✅ [どうも すみません|[どうも] すみません|Cám ơn.]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Người đàn bà\"",
            "options": [
                "おんなの ひと",
                "～だんめ",
                "き",
                "おとこの ひと"
            ],
            "answer": "おんなの ひと",
            "explain": "✅ [おんなの ひと|女の 人|Người đàn bà]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bến xe, điểm lên xuống xe\"",
            "options": [
                "どうして",
                "やくそく",
                "～から",
                "のりば"
            ],
            "answer": "のりば",
            "explain": "✅ [のりば|乗り場|Bến xe, điểm lên xuống xe]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cửa\"",
            "options": [
                "ひだり",
                "じ",
                "いろいろ",
                "ドア"
            ],
            "answer": "ドア",
            "explain": "✅ [ドア|ドア|Cửa]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tủ lạnh\"",
            "options": [
                "れいぞうこ",
                "まえ",
                "テーブル",
                "たな"
            ],
            "answer": "れいぞうこ",
            "explain": "✅ [れいぞうこ|冷蔵庫|Tủ lạnh]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giữa\"",
            "options": [
                "だめですか",
                "ローマじ",
                "あいだ",
                "え"
            ],
            "answer": "あいだ",
            "explain": "✅ [あいだ|間|Giữa]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Sớm, nhanh\"",
            "options": [
                "スポーツ",
                "おとこの ひと",
                "はやく",
                "かんじ"
            ],
            "answer": "はやく",
            "explain": "✅ [はやく|早く、速く|Sớm, nhanh]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tranh, hội họa\"",
            "options": [
                "え",
                "きっさてん",
                "ベランダ",
                "いま"
            ],
            "answer": "え",
            "explain": "✅ [え|絵|Tranh, hội họa]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vợ (dùng khi nói về vợ mình)\"",
            "options": [
                "つま / かない",
                "トイレ",
                "～や",
                "テーブル"
            ],
            "answer": "つま / かない",
            "explain": "✅ [つま / かない|妻 / 家内|Vợ (dùng khi nói về vợ mình)]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đồ uống\"",
            "options": [
                "たくさん",
                "おんなの こ",
                "かんじ",
                "のみもの"
            ],
            "answer": "のみもの",
            "explain": "✅ [のみもの|飲み物|Đồ uống]"
        }
    ]
};

export const GRAMMAR_TESTS: Record<number, Question[]> = {
    "1": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） あります。",
            "options": [
                "で",
                "に",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） わかります。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 下手です。",
            "options": [
                "を",
                "が",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） 好きです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 嫌いです。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） 上手です。",
            "options": [
                "を",
                "が",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） あります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） わかります。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 音楽 （　　） 下手です。",
            "options": [
                "を",
                "が",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） 好きです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 嫌いです。",
            "options": [
                "で",
                "に",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 上手です。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） あります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） わかります。",
            "options": [
                "を",
                "が",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） 下手です。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 好きです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 嫌いです。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 上手です。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） あります。",
            "options": [
                "が",
                "を",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） わかります。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　女の人 が （　　）。",
            "options": [
                "います",
                "ます",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 女の人 là động vật/người -> imasu."
        },
        {
            "id": 22,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　男の人 が （　　）。",
            "options": [
                "ます",
                "あります",
                "です",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 男の人 là động vật/người -> imasu."
        },
        {
            "id": 23,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "あります",
                "ます",
                "います",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 24,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　本 が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ 本 là đồ vật -> arimasu."
        },
        {
            "id": 25,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　山田さん が （　　）。",
            "options": [
                "います",
                "です",
                "ます",
                "あります"
            ],
            "answer": "います",
            "explain": "✅ 山田さん là động vật/người -> imasu."
        },
        {
            "id": 26,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "います",
                "です",
                "ます",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 27,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　時計 が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ 時計 là đồ vật -> arimasu."
        },
        {
            "id": 28,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　時計 が （　　）。",
            "options": [
                "あります",
                "です",
                "います",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 時計 là đồ vật -> arimasu."
        },
        {
            "id": 29,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　山田さん が （　　）。",
            "options": [
                "あります",
                "です",
                "います",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ 山田さん là động vật/người -> imasu."
        },
        {
            "id": 30,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　犬 が （　　）。",
            "options": [
                "あります",
                "です",
                "ます",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 犬 là động vật/người -> imasu."
        },
        {
            "id": 31,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　パンダ が （　　）。",
            "options": [
                "います",
                "あります",
                "ます",
                "です"
            ],
            "answer": "います",
            "explain": "✅ パンダ là động vật/người -> imasu."
        },
        {
            "id": 32,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　パンダ が （　　）。",
            "options": [
                "です",
                "あります",
                "います",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ パンダ là động vật/người -> imasu."
        },
        {
            "id": 33,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "ます",
                "あります",
                "です",
                "います"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 34,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　椅子 が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 椅子 là đồ vật -> arimasu."
        },
        {
            "id": 35,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　女の人 が （　　）。",
            "options": [
                "ます",
                "います",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 女の人 là động vật/người -> imasu."
        },
        {
            "id": 36,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　椅子 が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ 椅子 là đồ vật -> arimasu."
        },
        {
            "id": 37,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　男の人 が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "います",
            "explain": "✅ 男の人 là động vật/người -> imasu."
        },
        {
            "id": 38,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　象 が （　　）。",
            "options": [
                "います",
                "ます",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 象 là động vật/người -> imasu."
        },
        {
            "id": 39,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　象 が （　　）。",
            "options": [
                "います",
                "あります",
                "です",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ 象 là động vật/người -> imasu."
        },
        {
            "id": 40,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　時計 が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ 時計 là đồ vật -> arimasu."
        },
        {
            "id": 41,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 犬 が います。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 42,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 43,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 44,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 犬 が います。",
            "options": [
                "を",
                "へ",
                "に",
                "で"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 45,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 46,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 犬 が います。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 47,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 48,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 49,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 50,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 犬 が います。",
            "options": [
                "へ",
                "で",
                "を",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 51,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "へ",
                "に",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 52,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "へ",
                "を",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 53,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 54,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 55,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "で",
                "を",
                "へ",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 56,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 57,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 58,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 59,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 自動販売機 が あります。",
            "options": [
                "を",
                "で",
                "へ",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 60,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 61,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 62,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "から",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 63,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 64,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 65,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 66,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 67,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "から",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 68,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 69,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 70,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 71,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "が",
                "から",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 72,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "と",
                "から",
                "が",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 73,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "から",
                "と",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 74,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 75,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 76,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "が",
                "から",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 77,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 78,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 79,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 80,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "[へた] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Kém"
            ],
            "answer": "Kém",
            "explain": "✅ へた = Kém"
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "[～はちょっと] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "[~ thì] có lẽ không được rồi. (cách từ chối khéo)",
                "Placeholder C",
                "Placeholder A"
            ],
            "answer": "[~ thì] có lẽ không được rồi. (cách từ chối khéo)",
            "explain": "✅ ～はちょっと = [~ thì] có lẽ không được rồi. (cách từ chối khéo)"
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いっしょに いかがですか] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?"
            ],
            "answer": "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?",
            "explain": "✅ いっしょに いかがですか = Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?"
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おんなの ひと] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Người đàn bà",
                "Placeholder C"
            ],
            "answer": "Người đàn bà",
            "explain": "✅ おんなの ひと = Người đàn bà"
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "[れいぞうこ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Tủ lạnh"
            ],
            "answer": "Tủ lạnh",
            "explain": "✅ れいぞうこ = Tủ lạnh"
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "[え] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Tranh, hội họa",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Tranh, hội họa",
            "explain": "✅ え = Tranh, hội họa"
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "[かぶき] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Kabuki (một thể loại ca kịch truyền thống của Nhật)",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Kabuki (một thể loại ca kịch truyền thống của Nhật)",
            "explain": "✅ かぶき = Kabuki (một thể loại ca kịch truyền thống của Nhật)"
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "[たな] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Giá sách"
            ],
            "answer": "Giá sách",
            "explain": "✅ たな = Giá sách"
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ねこ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Mèo"
            ],
            "answer": "Mèo",
            "explain": "✅ ねこ = Mèo"
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ぜんぜん] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder C",
                "Hoàn toàn ~ không",
                "Placeholder A"
            ],
            "answer": "Hoàn toàn ~ không",
            "explain": "✅ ぜんぜん = Hoàn toàn ~ không"
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ようじ] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder A",
                "Placeholder B",
                "Việc bận, công chuyện"
            ],
            "answer": "Việc bận, công chuyện",
            "explain": "✅ ようじ = Việc bận, công chuyện"
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "[また こんど おねがいします] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Hẹn anh/chị lần sau vậy. (cách từ chối khéo)"
            ],
            "answer": "Hẹn anh/chị lần sau vậy. (cách từ chối khéo)",
            "explain": "✅ また こんど おねがいします = Hẹn anh/chị lần sau vậy. (cách từ chối khéo)"
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "[はこ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Hộp"
            ],
            "answer": "Hộp",
            "explain": "✅ はこ = Hộp"
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "[うた] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Placeholder C",
                "Bài hát"
            ],
            "answer": "Bài hát",
            "explain": "✅ うた = Bài hát"
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "[りょうり] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Món ăn, việc nấu ăn",
                "Placeholder A"
            ],
            "answer": "Món ăn, việc nấu ăn",
            "explain": "✅ りょうり = Món ăn, việc nấu ăn"
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "[たな] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Giá sách",
                "Placeholder C",
                "Placeholder A"
            ],
            "answer": "Giá sách",
            "explain": "✅ たな = Giá sách"
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おざわ せいじ] の意味は何ですか。",
            "options": [
                "Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật",
                "Placeholder A",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật",
            "explain": "✅ おざわ せいじ = Ozawa Seiji (1935~), một nhạc trưởng nổi tiếng của Nhật"
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "[れいぞうこ] の意味は何ですか。",
            "options": [
                "Tủ lạnh",
                "Placeholder C",
                "Placeholder B",
                "Placeholder A"
            ],
            "answer": "Tủ lạnh",
            "explain": "✅ れいぞうこ = Tủ lạnh"
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "[あいだ] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder C",
                "Placeholder A",
                "Giữa"
            ],
            "answer": "Giữa",
            "explain": "✅ あいだ = Giữa"
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ふろば] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Phòng tắm"
            ],
            "answer": "Phòng tắm",
            "explain": "✅ ふろば = Phòng tắm"
        }
    ],
    "2": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 日本語 （　　） 上手です。",
            "options": [
                "に",
                "を",
                "で",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 下手です。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 日本語 （　　） 嫌いです。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 日本語 （　　） あります。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 音楽 （　　） わかります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 音楽 （　　） 好きです。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 上手です。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） 下手です。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 嫌いです。",
            "options": [
                "が",
                "を",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） あります。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） わかります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 好きです。",
            "options": [
                "が",
                "を",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） 上手です。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 下手です。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 日本語 （　　） 嫌いです。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） あります。",
            "options": [
                "が",
                "で",
                "を",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） わかります。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 好きです。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 上手です。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） 下手です。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　机 が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 机 là đồ vật -> arimasu."
        },
        {
            "id": 22,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　パンダ が （　　）。",
            "options": [
                "ます",
                "です",
                "あります",
                "います"
            ],
            "answer": "います",
            "explain": "✅ パンダ là động vật/người -> imasu."
        },
        {
            "id": 23,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 24,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　男の人 が （　　）。",
            "options": [
                "ます",
                "です",
                "あります",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 男の人 là động vật/người -> imasu."
        },
        {
            "id": 25,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　象 が （　　）。",
            "options": [
                "います",
                "あります",
                "です",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ 象 là động vật/người -> imasu."
        },
        {
            "id": 26,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "です",
                "います",
                "あります",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 27,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "います",
                "です",
                "ます",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 28,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　机 が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 机 là đồ vật -> arimasu."
        },
        {
            "id": 29,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　猫 が （　　）。",
            "options": [
                "います",
                "あります",
                "ます",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 猫 là động vật/người -> imasu."
        },
        {
            "id": 30,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　山田さん が （　　）。",
            "options": [
                "です",
                "あります",
                "います",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ 山田さん là động vật/người -> imasu."
        },
        {
            "id": 31,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "います",
                "あります",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 32,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　パンダ が （　　）。",
            "options": [
                "ます",
                "です",
                "あります",
                "います"
            ],
            "answer": "います",
            "explain": "✅ パンダ là động vật/người -> imasu."
        },
        {
            "id": 33,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　猫 が （　　）。",
            "options": [
                "ます",
                "です",
                "あります",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 猫 là động vật/người -> imasu."
        },
        {
            "id": 34,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "です",
                "ます",
                "あります",
                "います"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 35,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　犬 が （　　）。",
            "options": [
                "です",
                "あります",
                "ます",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 犬 là động vật/người -> imasu."
        },
        {
            "id": 36,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　椅子 が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ 椅子 là đồ vật -> arimasu."
        },
        {
            "id": 37,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "います",
                "あります",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 38,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　山田さん が （　　）。",
            "options": [
                "ます",
                "います",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 山田さん là động vật/người -> imasu."
        },
        {
            "id": 39,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　本 が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ 本 là đồ vật -> arimasu."
        },
        {
            "id": 40,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　犬 が （　　）。",
            "options": [
                "あります",
                "です",
                "ます",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 犬 là động vật/người -> imasu."
        },
        {
            "id": 41,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 犬 が います。",
            "options": [
                "で",
                "に",
                "へ",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 42,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 43,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 44,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 45,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "を",
                "に",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 46,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 47,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 48,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 犬 が います。",
            "options": [
                "に",
                "を",
                "へ",
                "で"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 49,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 自動販売機 が あります。",
            "options": [
                "を",
                "で",
                "に",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 50,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "へ",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 51,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 52,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 53,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 54,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 55,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "へ",
                "に",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 56,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 自動販売機 が あります。",
            "options": [
                "を",
                "で",
                "に",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 57,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 58,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "教室 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "に",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 59,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 60,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 61,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 62,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 63,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 64,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "と",
                "が",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 65,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 66,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 67,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "が",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 68,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 69,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "と",
                "から",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 70,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 71,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "ね",
                "と",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 72,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "と",
                "が",
                "ね",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 73,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 74,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "が",
                "から",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 75,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "と",
                "から",
                "が",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 76,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "と",
                "ね",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 77,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 78,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 79,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 80,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "[スポーツ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Thể thao (~を します: chơi thể thao)",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Thể thao (~を します: chơi thể thao)",
            "explain": "✅ スポーツ = Thể thao (~を します: chơi thể thao)"
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ぜんぜん] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Hoàn toàn ~ không",
                "Placeholder C"
            ],
            "answer": "Hoàn toàn ~ không",
            "explain": "✅ ぜんぜん = Hoàn toàn ~ không"
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "[すこし] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Ít, một ít",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Ít, một ít",
            "explain": "✅ すこし = Ít, một ít"
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "[どうも すみません] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Cám ơn.",
                "Placeholder C"
            ],
            "answer": "Cám ơn.",
            "explain": "✅ どうも すみません = Cám ơn."
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "[たくさん] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Nhiều",
                "Placeholder C"
            ],
            "answer": "Nhiều",
            "explain": "✅ たくさん = Nhiều"
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "[した] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Dưới",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Dưới",
            "explain": "✅ した = Dưới"
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いちばん～] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Placeholder C",
                "~ nhất (いちばん うえ: vị trí cao nhất)"
            ],
            "answer": "~ nhất (いちばん うえ: vị trí cao nhất)",
            "explain": "✅ いちばん～ = ~ nhất (いちばん うえ: vị trí cao nhất)"
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "[せんめんじょ] の意味は何ですか。",
            "options": [
                "Bồn rửa",
                "Placeholder B",
                "Placeholder C",
                "Placeholder A"
            ],
            "answer": "Bồn rửa",
            "explain": "✅ せんめんじょ = Bồn rửa"
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おとこの こ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Cậu con trai"
            ],
            "answer": "Cậu con trai",
            "explain": "✅ おとこの こ = Cậu con trai"
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "[すき] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Thích"
            ],
            "answer": "Thích",
            "explain": "✅ すき = Thích"
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いっしょに いかがですか] の意味は何ですか。",
            "options": [
                "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?",
                "Placeholder C",
                "Placeholder B",
                "Placeholder A"
            ],
            "answer": "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?",
            "explain": "✅ いっしょに いかがですか = Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?"
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "[～や～[など]] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "~ và ~, [v.v.]"
            ],
            "answer": "~ và ~, [v.v.]",
            "explain": "✅ ～や～[など] = ~ và ~, [v.v.]"
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ふろば] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Phòng tắm",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Phòng tắm",
            "explain": "✅ ふろば = Phòng tắm"
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "[けん] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Tỉnh",
                "Placeholder C"
            ],
            "answer": "Tỉnh",
            "explain": "✅ けん = Tỉnh"
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ふろば] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Phòng tắm",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "Phòng tắm",
            "explain": "✅ ふろば = Phòng tắm"
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "[チケット] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Vé (xem hòa nhạc, xem phim)"
            ],
            "answer": "Vé (xem hòa nhạc, xem phim)",
            "explain": "✅ チケット = Vé (xem hòa nhạc, xem phim)"
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いっしょに いかがですか] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Placeholder A",
                "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?"
            ],
            "answer": "Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?",
            "explain": "✅ いっしょに いかがですか = Anh/Chị cùng ~ (làm cái gì đó) với chúng tôi có được không?"
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "[やきゅう] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder C",
                "Bóng chày (~を します: chơi bóng chày)",
                "Placeholder B"
            ],
            "answer": "Bóng chày (~を します: chơi bóng chày)",
            "explain": "✅ やきゅう = Bóng chày (~を します: chơi bóng chày)"
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "[もしもし] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "A-lô",
                "Placeholder B",
                "Placeholder C"
            ],
            "answer": "A-lô",
            "explain": "✅ もしもし = A-lô"
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "[トイレ] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Toa-lét, phòng vệ sinh",
                "Placeholder A"
            ],
            "answer": "Toa-lét, phòng vệ sinh",
            "explain": "✅ トイレ = Toa-lét, phòng vệ sinh"
        }
    ],
    "3": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） わかります。",
            "options": [
                "を",
                "が",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） 下手です。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 上手です。",
            "options": [
                "を",
                "が",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 嫌いです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） あります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） 好きです。",
            "options": [
                "が",
                "を",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 漢字 （　　） わかります。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） 下手です。",
            "options": [
                "が",
                "で",
                "を",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 上手です。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は ダンス （　　） 嫌いです。",
            "options": [
                "を",
                "で",
                "が",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は スポーツ （　　） あります。",
            "options": [
                "を",
                "が",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） 好きです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） わかります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 音楽 （　　） 下手です。",
            "options": [
                "で",
                "を",
                "に",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） 上手です。",
            "options": [
                "を",
                "が",
                "で",
                "に"
            ],
            "answer": "が",
            "explain": "✅ Với 上手, dùng trợ từ [ga]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 日本語 （　　） 嫌いです。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với 嫌い, dùng trợ từ [ga]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） あります。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với あります, dùng trợ từ [ga]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 英語 （　　） 好きです。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 好き, dùng trợ từ [ga]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 歌 （　　） わかります。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "が",
            "explain": "✅ Với わかります, dùng trợ từ [ga]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (ga)",
            "question": "私 は 料理 （　　） 下手です。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "が",
            "explain": "✅ Với 下手, dùng trợ từ [ga]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "です",
                "います",
                "あります",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 22,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　atm が （　　）。",
            "options": [
                "です",
                "います",
                "あります",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ atm là đồ vật -> arimasu."
        },
        {
            "id": 23,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　犬 が （　　）。",
            "options": [
                "ます",
                "います",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 犬 là động vật/người -> imasu."
        },
        {
            "id": 24,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 25,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 26,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　象 が （　　）。",
            "options": [
                "ます",
                "です",
                "あります",
                "います"
            ],
            "answer": "います",
            "explain": "✅ 象 là động vật/người -> imasu."
        },
        {
            "id": 27,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　本 が （　　）。",
            "options": [
                "です",
                "あります",
                "います",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 本 là đồ vật -> arimasu."
        },
        {
            "id": 28,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　机 が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ 机 là đồ vật -> arimasu."
        },
        {
            "id": 29,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　犬 が （　　）。",
            "options": [
                "います",
                "あります",
                "です",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ 犬 là động vật/người -> imasu."
        },
        {
            "id": 30,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "ます",
                "います",
                "です",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 31,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 32,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 33,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "です",
                "ます",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 34,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　ポスト が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ ポスト là đồ vật -> arimasu."
        },
        {
            "id": 35,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　椅子 が （　　）。",
            "options": [
                "あります",
                "います",
                "ます",
                "です"
            ],
            "answer": "あります",
            "explain": "✅ 椅子 là đồ vật -> arimasu."
        },
        {
            "id": 36,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　パンダ が （　　）。",
            "options": [
                "います",
                "あります",
                "です",
                "ます"
            ],
            "answer": "います",
            "explain": "✅ パンダ là động vật/người -> imasu."
        },
        {
            "id": 37,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　男の人 が （　　）。",
            "options": [
                "ます",
                "です",
                "います",
                "あります"
            ],
            "answer": "います",
            "explain": "✅ 男の人 là động vật/người -> imasu."
        },
        {
            "id": 38,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　椅子 が （　　）。",
            "options": [
                "です",
                "ます",
                "います",
                "あります"
            ],
            "answer": "あります",
            "explain": "✅ 椅子 là đồ vật -> arimasu."
        },
        {
            "id": 39,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　象 が （　　）。",
            "options": [
                "ます",
                "います",
                "あります",
                "です"
            ],
            "answer": "います",
            "explain": "✅ 象 là động vật/người -> imasu."
        },
        {
            "id": 40,
            "section": "Mondai 2: Sự tồn tại (Imasu/Arimasu)",
            "question": "あそこに　コンビニ が （　　）。",
            "options": [
                "あります",
                "います",
                "です",
                "ます"
            ],
            "answer": "あります",
            "explain": "✅ コンビニ là đồ vật -> arimasu."
        },
        {
            "id": 41,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "を",
                "で",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 42,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 43,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 44,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 45,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 犬 が います。",
            "options": [
                "に",
                "へ",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 46,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 47,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "へ",
                "で",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 48,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 49,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 50,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "公園 （　　） 犬 が います。",
            "options": [
                "で",
                "に",
                "へ",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 51,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "ロビー （　　） 犬 が います。",
            "options": [
                "を",
                "に",
                "へ",
                "で"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 52,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 自動販売機 が あります。",
            "options": [
                "を",
                "で",
                "に",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 53,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 54,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 55,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "喫茶店 （　　） 犬 が います。",
            "options": [
                "に",
                "で",
                "へ",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 56,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "に",
                "で",
                "へ",
                "を"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 57,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "あそこ （　　） 自動販売機 が あります。",
            "options": [
                "を",
                "へ",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 58,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 59,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "部屋 （　　） 犬 が います。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 60,
            "section": "Mondai 3: Trợ từ chỉ địa điểm",
            "question": "庭 （　　） 自動販売機 が あります。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "に",
            "explain": "✅ Chỉ nơi tồn tại (arimasu/imasu) dùng trợ từ [ni]."
        },
        {
            "id": 61,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 62,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "と",
                "が",
                "から",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 63,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "から",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 64,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 65,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "ね",
                "と",
                "から",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 66,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 67,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "ね",
                "と",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 68,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "から",
                "が",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 69,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 70,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "から",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 71,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "ね",
                "から",
                "と",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 72,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "ね",
                "が",
                "から",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 73,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "と",
                "ね",
                "が",
                "から"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 74,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "が",
                "から",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 75,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 76,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "時間 が ありません （　　）、新聞 を 読みません。",
            "options": [
                "から",
                "が",
                "ね",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 77,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "用事 が あります （　　）、早く 帰ります。",
            "options": [
                "から",
                "が",
                "と",
                "ね"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 78,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "日本語 が わかりません （　　）、英語 で 話します。",
            "options": [
                "が",
                "ね",
                "から",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 79,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "お金 が ありません （　　）、旅行 しません。",
            "options": [
                "ね",
                "から",
                "と",
                "が"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 80,
            "section": "Mondai 4: Lý do (Kara)",
            "question": "毎日 忙しい です （　　）、テレビ を 見ません。",
            "options": [
                "から",
                "ね",
                "が",
                "と"
            ],
            "answer": "から",
            "explain": "✅ Nguyên nhân [kara] kết quả."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おっと / しゅじん] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Placeholder A",
                "Chồng (dùng khi nói về chồng mình)"
            ],
            "answer": "Chồng (dùng khi nói về chồng mình)",
            "explain": "✅ おっと / しゅじん = Chồng (dùng khi nói về chồng mình)"
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "[たな] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Giá sách",
                "Placeholder C"
            ],
            "answer": "Giá sách",
            "explain": "✅ たな = Giá sách"
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いま] の意味は何ですか。",
            "options": [
                "Phòng khách, phòng sinh hoạt chung",
                "Placeholder C",
                "Placeholder B",
                "Placeholder A"
            ],
            "answer": "Phòng khách, phòng sinh hoạt chung",
            "explain": "✅ いま = Phòng khách, phòng sinh hoạt chung"
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いま] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Placeholder C",
                "Phòng khách, phòng sinh hoạt chung"
            ],
            "answer": "Phòng khách, phòng sinh hoạt chung",
            "explain": "✅ いま = Phòng khách, phòng sinh hoạt chung"
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "[いま] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Placeholder C",
                "Phòng khách, phòng sinh hoạt chung"
            ],
            "answer": "Phòng khách, phòng sinh hoạt chung",
            "explain": "✅ いま = Phòng khách, phòng sinh hoạt chung"
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おっと / しゅじん] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Chồng (dùng khi nói về chồng mình)"
            ],
            "answer": "Chồng (dùng khi nói về chồng mình)",
            "explain": "✅ おっと / しゅじん = Chồng (dùng khi nói về chồng mình)"
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おっと / しゅじん] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Chồng (dùng khi nói về chồng mình)",
                "Placeholder C"
            ],
            "answer": "Chồng (dùng khi nói về chồng mình)",
            "explain": "✅ おっと / しゅじん = Chồng (dùng khi nói về chồng mình)"
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "[～や] の意味は何ですか。",
            "options": [
                "Hiệu ~, cửa hàng ~",
                "Placeholder C",
                "Placeholder B",
                "Placeholder A"
            ],
            "answer": "Hiệu ~, cửa hàng ~",
            "explain": "✅ ～や = Hiệu ~, cửa hàng ~"
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "[だいどころ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Bếp"
            ],
            "answer": "Bếp",
            "explain": "✅ だいどころ = Bếp"
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "[すこし] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder A",
                "Ít, một ít",
                "Placeholder B"
            ],
            "answer": "Ít, một ít",
            "explain": "✅ すこし = Ít, một ít"
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "[りょうり] の意味は何ですか。",
            "options": [
                "Placeholder B",
                "Placeholder A",
                "Món ăn, việc nấu ăn",
                "Placeholder C"
            ],
            "answer": "Món ăn, việc nấu ăn",
            "explain": "✅ りょうり = Món ăn, việc nấu ăn"
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "[フィルム] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Phim",
                "Placeholder C"
            ],
            "answer": "Phim",
            "explain": "✅ フィルム = Phim"
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "[うしろ] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder C",
                "Sau",
                "Placeholder B"
            ],
            "answer": "Sau",
            "explain": "✅ うしろ = Sau"
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ベランダ] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Ban-công",
                "Placeholder A"
            ],
            "answer": "Ban-công",
            "explain": "✅ ベランダ = Ban-công"
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "[トイレ] の意味は何ですか。",
            "options": [
                "Toa-lét, phòng vệ sinh",
                "Placeholder C",
                "Placeholder A",
                "Placeholder B"
            ],
            "answer": "Toa-lét, phòng vệ sinh",
            "explain": "✅ トイレ = Toa-lét, phòng vệ sinh"
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "[まど] の意味は何ですか。",
            "options": [
                "Placeholder A",
                "Placeholder B",
                "Placeholder C",
                "Cửa sổ"
            ],
            "answer": "Cửa sổ",
            "explain": "✅ まど = Cửa sổ"
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "[かんじ] の意味は何ですか。",
            "options": [
                "Chữ Hán",
                "Placeholder C",
                "Placeholder B",
                "Placeholder A"
            ],
            "answer": "Chữ Hán",
            "explain": "✅ かんじ = Chữ Hán"
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "[じ] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Placeholder A",
                "Chữ"
            ],
            "answer": "Chữ",
            "explain": "✅ じ = Chữ"
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "[ごしゅじん] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Placeholder A",
                "Chồng (dùng khi nói về chồng người khác)"
            ],
            "answer": "Chồng (dùng khi nói về chồng người khác)",
            "explain": "✅ ごしゅじん = Chồng (dùng khi nói về chồng người khác)"
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "[おんがく] の意味は何ですか。",
            "options": [
                "Placeholder C",
                "Placeholder B",
                "Âm nhạc",
                "Placeholder A"
            ],
            "answer": "Âm nhạc",
            "explain": "✅ おんがく = Âm nhạc"
        }
    ]
};
