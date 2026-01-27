
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
            "question": "[～が、～] の読み方は何ですか。",
            "options": [
                "が",
                "パンチ",
                "かみ",
                "ナイフ"
            ],
            "answer": "が",
            "explain": "✅ [～が、～|が|～, nhưng ～]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お父さん] の読み方は何ですか。",
            "options": [
                "おとうさん",
                "はし",
                "ゆうめい [な]",
                "べんきょう"
            ],
            "answer": "おとうさん",
            "explain": "✅ [お父さん|おとうさん|Bố (dùng khi nói về bố người khác)]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[難しい] の読み方は何ですか。",
            "options": [
                "しちにんのさむらい",
                "シャンハイ",
                "むずかしい",
                "やすい"
            ],
            "answer": "むずかしい",
            "explain": "✅ [難しい|むずかしい|Khó]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[楽しい] の読み方は何ですか。",
            "options": [
                "たのしい",
                "あたらしい",
                "まち",
                "ならいます"
            ],
            "answer": "たのしい",
            "explain": "✅ [楽しい|たのしい|Vui]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[小さい] の読み方は何ですか。",
            "options": [
                "ちいさい",
                "かみ",
                "いただきます",
                "ふるい"
            ],
            "answer": "ちいさい",
            "explain": "✅ [小さい|ちいさい|Bé, nhỏ]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お土産] の読み方は何ですか。",
            "options": [
                "パソコン",
                "ワープロ",
                "にぎやか [な]",
                "おみやげ"
            ],
            "answer": "おみやげ",
            "explain": "✅ [お土産|おみやげ|Quà (mua khi đi xa về)]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[日本の生活に慣れましたか] の読み方は何ですか。",
            "options": [
                "かみ",
                "くろい",
                "て",
                "なれましたか"
            ],
            "answer": "なれましたか",
            "explain": "✅ [日本の生活に慣れましたか|なれましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[送ります] の読み方は何ですか。",
            "options": [
                "すてき [な]",
                "おくります",
                "たかい",
                "いい (よい)"
            ],
            "answer": "おくります",
            "explain": "✅ [送ります|おくります|Gửi]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[冷たい] の読み方は何ですか。",
            "options": [
                "つめたい",
                "せいかつ",
                "ヨーロッパ",
                "クリスマス"
            ],
            "answer": "つめたい",
            "explain": "✅ [冷たい|つめたい|Lạnh, buốt (dùng cho cảm giác)]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[青い] の読み方は何ですか。",
            "options": [
                "セロテープ",
                "ごめんください",
                "あたらしい",
                "あおい"
            ],
            "answer": "あおい",
            "explain": "✅ [青い|あおい|Xanh da trời]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[元気 [な]] の読み方は何ですか。",
            "options": [
                "げんき [な]",
                "なれましたか",
                "むずかしい",
                "もらいます"
            ],
            "answer": "げんき [な]",
            "explain": "✅ [元気 [な]|げんき [な]|Khỏe]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[荷物] の読み方は何ですか。",
            "options": [
                "パソコン",
                "にもつ",
                "はさみ",
                "けっこうです"
            ],
            "answer": "にもつ",
            "explain": "✅ [荷物|にもつ|Đồ đạc, hành lý]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[切符] の読み方は何ですか。",
            "options": [
                "むずかしい",
                "そうですね",
                "しつれいします",
                "きっぷ"
            ],
            "answer": "きっぷ",
            "explain": "✅ [切符|きっぷ|Vé]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[貸します] の読み方は何ですか。",
            "options": [
                "きっぷ",
                "いらっしゃってください",
                "かします",
                "スペイン"
            ],
            "answer": "かします",
            "explain": "✅ [貸します|かします|Cho mượn, cho vay]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[切ります] の読み方は何ですか。",
            "options": [
                "きります",
                "どれ",
                "おもしろい",
                "さむい"
            ],
            "answer": "きります",
            "explain": "✅ [切ります|きります|Cắt]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[山] の読み方は何ですか。",
            "options": [
                "ちいさい",
                "まち",
                "きれい [な]",
                "やま"
            ],
            "answer": "やま",
            "explain": "✅ [山|やま|Núi]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[食べ物] の読み方は何ですか。",
            "options": [
                "おとうさん",
                "ヨーロッパ",
                "おくります",
                "たべもの"
            ],
            "answer": "たべもの",
            "explain": "✅ [食べ物|たべもの|Đồ ăn]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[黒い] の読み方は何ですか。",
            "options": [
                "はは",
                "かみ",
                "もう",
                "くろい"
            ],
            "answer": "くろい",
            "explain": "✅ [黒い|くろい|Đen]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[紙] の読み方は何ですか。",
            "options": [
                "かみ",
                "パソコン",
                "すてきですね",
                "ホッチキス"
            ],
            "answer": "かみ",
            "explain": "✅ [紙|かみ|Giấy]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[父] の読み方は何ですか。",
            "options": [
                "ちいさい",
                "ワープロ",
                "にもつ",
                "ちち"
            ],
            "answer": "ちち",
            "explain": "✅ [父|ちち|Bố (dùng khi nói về bố mình)]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[静か [な]] の読み方は何ですか。",
            "options": [
                "あまり",
                "ごめんください",
                "なれましたか",
                "しずか [な]"
            ],
            "answer": "しずか [な]",
            "explain": "✅ [静か [な]|しずか [な]|Yên tĩnh]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[富士山] の読み方は何ですか。",
            "options": [
                "ファクス",
                "もらいます",
                "しろい",
                "ふじさん"
            ],
            "answer": "ふじさん",
            "explain": "✅ [富士山|ふじさん|Núi Phú Sĩ]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[暑い, 熱い] の読み方は何ですか。",
            "options": [
                "やさしい",
                "おしごと",
                "あつい",
                "たべもの"
            ],
            "answer": "あつい",
            "explain": "✅ [暑い, 熱い|あつい|Nóng]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[古い] の読み方は何ですか。",
            "options": [
                "ふるい",
                "おかね",
                "ちち",
                "きんかくじ"
            ],
            "answer": "ふるい",
            "explain": "✅ [古い|ふるい|Cũ]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[いいえ、けっこうです] の読み方は何ですか。",
            "options": [
                "ちいさい",
                "けっこうです",
                "いただきます",
                "ハンサム [な]"
            ],
            "answer": "けっこうです",
            "explain": "✅ [いいえ、けっこうです|けっこうです|Không, đủ rồi ạ.]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[そろそろ失礼します] の読み方は何ですか。",
            "options": [
                "もう～ですね",
                "たべもの",
                "すてき [な]",
                "しつれいします"
            ],
            "answer": "しつれいします",
            "explain": "✅ [そろそろ失礼します|しつれいします|Sắp đến lúc tôi phải xin phép rồi./ Đã đến lúc tôi phải về.]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[悪い] の読み方は何ですか。",
            "options": [
                "おげんきですか",
                "そうですね",
                "わるい",
                "むずかしい"
            ],
            "answer": "わるい",
            "explain": "✅ [悪い|わるい|Xấu]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[白い] の読み方は何ですか。",
            "options": [
                "おいしい",
                "しろい",
                "そうですね",
                "おげんきですか"
            ],
            "answer": "しろい",
            "explain": "✅ [白い|しろい|Trắng]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[寒い] の読み方は何ですか。",
            "options": [
                "さむい",
                "かります",
                "ところ",
                "かけます"
            ],
            "answer": "さむい",
            "explain": "✅ [寒い|さむい|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[便利 [な]] の読み方は何ですか。",
            "options": [
                "ヨーロッパ",
                "おいしい",
                "べんり [な]",
                "びわこ"
            ],
            "answer": "べんり [な]",
            "explain": "✅ [便利 [な]|べんり [な]|Tiện lợi]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きります] の漢字は何ですか。",
            "options": [
                "切ります",
                "白い",
                "すてき [な]",
                "[～は] いかがですか"
            ],
            "answer": "切ります",
            "explain": "✅ [切ります|きります|Cắt]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ゆうめい [な]] の漢字は何ですか。",
            "options": [
                "有名 [な]",
                "シャツ",
                "プレゼント",
                "フォーク"
            ],
            "answer": "有名 [な]",
            "explain": "✅ [有名 [な]|ゆうめい [な]|Nổi tiếng]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[もう～ですね] の漢字は何ですか。",
            "options": [
                "シャツ",
                "もう ～です[ね]",
                "あまり",
                "すてき [な]"
            ],
            "answer": "もう ～です[ね]",
            "explain": "✅ [もう ～です[ね]|もう～ですね|Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[にもつ] の漢字は何ですか。",
            "options": [
                "荷物",
                "低い",
                "どうぞ お上がり ください",
                "日本の生活に慣れましたか"
            ],
            "answer": "荷物",
            "explain": "✅ [荷物|にもつ|Đồ đạc, hành lý]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[りょこう] の漢字は何ですか。",
            "options": [
                "にぎやか [な]",
                "いい (よい)",
                "旅行",
                "紙"
            ],
            "answer": "旅行",
            "explain": "✅ [旅行|りょこう|Du lịch]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ひま [な]] の漢字は何ですか。",
            "options": [
                "暇 [な]",
                "切ります",
                "送ります",
                "ハンサム [な]"
            ],
            "answer": "暇 [な]",
            "explain": "✅ [暇 [な]|ひま [な]|Rảnh rỗi]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おくります] の漢字は何ですか。",
            "options": [
                "箸",
                "親切 [な]",
                "プレゼント",
                "送ります"
            ],
            "answer": "送ります",
            "explain": "✅ [送ります|おくります|Gửi]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ふるい] の漢字は何ですか。",
            "options": [
                "古い",
                "七人の侍",
                "箸",
                "ホッチキス"
            ],
            "answer": "古い",
            "explain": "✅ [古い|ふるい|Cũ]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[げんき [な]] の漢字は何ですか。",
            "options": [
                "元気 [な]",
                "シャンハイ",
                "かけます",
                "失礼します"
            ],
            "answer": "元気 [な]",
            "explain": "✅ [元気 [な]|げんき [な]|Khỏe]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[けっこうです] の漢字は何ですか。",
            "options": [
                "これから",
                "お父さん",
                "いいえ、けっこうです",
                "桜"
            ],
            "answer": "いいえ、けっこうです",
            "explain": "✅ [いいえ、けっこうです|けっこうです|Không, đủ rồi ạ.]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[やさしい] の漢字は何ですか。",
            "options": [
                "荷物",
                "難しい",
                "紙",
                "易しい"
            ],
            "answer": "易しい",
            "explain": "✅ [易しい|やさしい|Dễ]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[さむい] の漢字は何ですか。",
            "options": [
                "いいえ、けっこうです",
                "教えます",
                "日本の生活に慣れましたか",
                "寒い"
            ],
            "answer": "寒い",
            "explain": "✅ [寒い|さむい|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[たべもの] の漢字は何ですか。",
            "options": [
                "生活",
                "寮",
                "所",
                "食べ物"
            ],
            "answer": "食べ物",
            "explain": "✅ [食べ物|たべもの|Đồ ăn]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きんかくじ] の漢字は何ですか。",
            "options": [
                "プレゼント",
                "金閣寺",
                "冷たい",
                "スペイン"
            ],
            "answer": "金閣寺",
            "explain": "✅ [金閣寺|きんかくじ|Chùa Kinkaku-ji (Chùa Vàng)]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かります] の漢字は何ですか。",
            "options": [
                "[～は] いかがですか",
                "琵琶湖",
                "送ります",
                "借ります"
            ],
            "answer": "借ります",
            "explain": "✅ [借ります|かります|Mượn, vay]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おしえます] の漢字は何ですか。",
            "options": [
                "すてき [な]",
                "旅行",
                "食べ物",
                "教えます"
            ],
            "answer": "教えます",
            "explain": "✅ [教えます|おしえます|Dạy]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しろい] の漢字は何ですか。",
            "options": [
                "琵琶湖",
                "白い",
                "低い",
                "ファクス"
            ],
            "answer": "白い",
            "explain": "✅ [白い|しろい|Trắng]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おみやげ] の漢字は何ですか。",
            "options": [
                "荷物",
                "手",
                "赤い",
                "お土産"
            ],
            "answer": "お土産",
            "explain": "✅ [お土産|おみやげ|Quà (mua khi đi xa về)]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[なれましたか] の漢字は何ですか。",
            "options": [
                "日本の生活に慣れましたか",
                "すてきですね",
                "小さい",
                "クリスマス"
            ],
            "answer": "日本の生活に慣れましたか",
            "explain": "✅ [日本の生活に慣れましたか|なれましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[りょう] の漢字は何ですか。",
            "options": [
                "フォーク",
                "教えます",
                "いいえ、けっこうです",
                "寮"
            ],
            "answer": "寮",
            "explain": "✅ [寮|りょう|Kí túc xá]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かみ] の漢字は何ですか。",
            "options": [
                "そうですね",
                "紙",
                "高い",
                "いらっしゃい"
            ],
            "answer": "紙",
            "explain": "✅ [紙|かみ|Giấy]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[が] の漢字は何ですか。",
            "options": [
                "～が、～",
                "借ります",
                "有名 [な]",
                "所"
            ],
            "answer": "～が、～",
            "explain": "✅ [～が、～|が|～, nhưng ～]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[くろい] の漢字は何ですか。",
            "options": [
                "黒い",
                "父",
                "楽しい",
                "送ります"
            ],
            "answer": "黒い",
            "explain": "✅ [黒い|くろい|Đen]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いそがしい] の漢字は何ですか。",
            "options": [
                "寮",
                "すてきですね",
                "いいえ、けっこうです",
                "忙しい"
            ],
            "answer": "忙しい",
            "explain": "✅ [忙しい|いそがしい|Bận]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ちいさい] の漢字は何ですか。",
            "options": [
                "小さい",
                "日本の生活に慣れましたか",
                "琵琶湖",
                "あまり"
            ],
            "answer": "小さい",
            "explain": "✅ [小さい|ちいさい|Bé, nhỏ]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はは] の漢字は何ですか。",
            "options": [
                "かけます",
                "母",
                "あげます",
                "親切 [な]"
            ],
            "answer": "母",
            "explain": "✅ [母|はは|Mẹ (dùng khi nói về mẹ mình)]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[て] の漢字は何ですか。",
            "options": [
                "すてきですね",
                "手",
                "暇 [な]",
                "シャンハイ"
            ],
            "answer": "手",
            "explain": "✅ [手|て|Tay]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[まち] の漢字は何ですか。",
            "options": [
                "町",
                "どれ",
                "失礼します",
                "送ります"
            ],
            "answer": "町",
            "explain": "✅ [町|まち|Thị trấn, thị xã, thành phố]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[べんきょう] の漢字は何ですか。",
            "options": [
                "高い",
                "シャツ",
                "\\u82b1",
                "勉強"
            ],
            "answer": "勉強",
            "explain": "✅ [勉強|べんきょう|Học]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おしごと] の漢字は何ですか。",
            "options": [
                "[お]仕事",
                "ごめんください",
                "失礼します",
                "新しい"
            ],
            "answer": "[お]仕事",
            "explain": "✅ [[お]仕事|おしごと|Công việc (~を します: làm việc)]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đắt, cao\"",
            "options": [
                "たかい",
                "もう",
                "パソコン",
                "おいしい"
            ],
            "answer": "たかい",
            "explain": "✅ [たかい|高い|Đắt, cao]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xe ô-tô\"",
            "options": [
                "くるま",
                "きっぷ",
                "そして",
                "おいしい"
            ],
            "answer": "くるま",
            "explain": "✅ [くるま|車|Xe ô-tô]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Lần sau anh/chị lại đến chơi nhé.\"",
            "options": [
                "いらっしゃってください",
                "くるま",
                "ふるい",
                "やさしい"
            ],
            "answer": "いらっしゃってください",
            "explain": "✅ [いらっしゃってください|また いらっしゃって ください|Lần sau anh/chị lại đến chơi nhé.]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?\"",
            "options": [
                "もう～ですね",
                "やすい",
                "ごめんください",
                "しずか [な]"
            ],
            "answer": "もう～ですね",
            "explain": "✅ [もう～ですね|もう ～です[ね]|Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Khó\"",
            "options": [
                "あげます",
                "いい (よい)",
                "ところ",
                "むずかしい"
            ],
            "answer": "むずかしい",
            "explain": "✅ [むずかしい|難しい|Khó]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Lạnh, rét (dùng cho thời tiết)\"",
            "options": [
                "さむい",
                "かみ",
                "べんり [な]",
                "ちち"
            ],
            "answer": "さむい",
            "explain": "✅ [さむい|寒い|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cuộc sống, sinh hoạt\"",
            "options": [
                "もう",
                "けっこうです",
                "りょう",
                "せいかつ"
            ],
            "answer": "せいかつ",
            "explain": "✅ [せいかつ|生活|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bảy chàng võ sĩ Samurai (tên phim)\"",
            "options": [
                "しちにんのさむらい",
                "フォーク",
                "もう",
                "ナイフ"
            ],
            "answer": "しちにんのさむらい",
            "explain": "✅ [しちにんのさむらい|七人の侍|Bảy chàng võ sĩ Samurai (tên phim)]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rẻ\"",
            "options": [
                "おかね",
                "かけます",
                "やすい",
                "おげんきですか"
            ],
            "answer": "やすい",
            "explain": "✅ [やすい|安い|Rẻ]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Không, đủ rồi ạ.\"",
            "options": [
                "かみ",
                "しろい",
                "けっこうです",
                "やま"
            ],
            "answer": "けっこうです",
            "explain": "✅ [けっこうです|いいえ、けっこうです|Không, đủ rồi ạ.]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rất, lắm\"",
            "options": [
                "おかね",
                "さむい",
                "スペイン",
                "とても"
            ],
            "answer": "とても",
            "explain": "✅ [とても|とても|Rất, lắm]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Không ~ lắm\"",
            "options": [
                "はし",
                "たかい",
                "おしえます",
                "あまり"
            ],
            "answer": "あまり",
            "explain": "✅ [あまり|あまり|Không ~ lắm]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vui\"",
            "options": [
                "たのしい",
                "おくります",
                "やすい",
                "どう"
            ],
            "answer": "たのしい",
            "explain": "✅ [たのしい|楽しい|Vui]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rảnh rỗi\"",
            "options": [
                "ひま [な]",
                "すてきですね",
                "かけます",
                "たかい"
            ],
            "answer": "ひま [な]",
            "explain": "✅ [ひま [な]|暇 [な]|Rảnh rỗi]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dĩa\"",
            "options": [
                "フォーク",
                "わるい",
                "おかあさん",
                "ふるい"
            ],
            "answer": "フォーク",
            "explain": "✅ [フォーク|フォーク|Dĩa]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Châu Âu\"",
            "options": [
                "ヨーロッパ",
                "ホッチキス",
                "セロテープ",
                "おおきい"
            ],
            "answer": "ヨーロッパ",
            "explain": "✅ [ヨーロッパ|ヨーロッパ|Châu Âu]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị có khỏe không?\"",
            "options": [
                "おげんきですか",
                "とても",
                "ひま [な]",
                "おもしろい"
            ],
            "answer": "おげんきですか",
            "explain": "✅ [おげんきですか|お元気ですか|Anh/Chị có khỏe không?]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thú vị, hay\"",
            "options": [
                "おいしい",
                "いかがですか",
                "おもしろい",
                "べんり [な]"
            ],
            "answer": "おもしろい",
            "explain": "✅ [おもしろい|おもしろい|Thú vị, hay]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Băng dính\"",
            "options": [
                "おかあさん",
                "が",
                "おいしい",
                "セロテープ"
            ],
            "answer": "セロテープ",
            "explain": "✅ [セロテープ|セロテープ|Băng dính]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đồ đạc, hành lý\"",
            "options": [
                "ヨーロッパ",
                "ふじさん",
                "にもつ",
                "パンチ"
            ],
            "answer": "にもつ",
            "explain": "✅ [にもつ|荷物|Đồ đạc, hành lý]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thị trấn, thị xã, thành phố\"",
            "options": [
                "しつれいします",
                "びわこ",
                "パソコン",
                "まち"
            ],
            "answer": "まち",
            "explain": "✅ [まち|町|Thị trấn, thị xã, thành phố]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chưa\"",
            "options": [
                "まだ",
                "きっぷ",
                "ゆうめい [な]",
                "どうぞ おあがり ください"
            ],
            "answer": "まだ",
            "explain": "✅ [まだ|まだ|Chưa]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"～, nhưng ～\"",
            "options": [
                "しろい",
                "が",
                "かります",
                "べんり [な]"
            ],
            "answer": "が",
            "explain": "✅ [が|～が、～|～, nhưng ～]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dễ\"",
            "options": [
                "やさしい",
                "シャンハイ",
                "しろい",
                "スプーン"
            ],
            "answer": "やさしい",
            "explain": "✅ [やさしい|易しい|Dễ]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Yên tĩnh\"",
            "options": [
                "しずか [な]",
                "セロテープ",
                "もう",
                "なれましたか"
            ],
            "answer": "しずか [な]",
            "explain": "✅ [しずか [な]|静か [な]|Yên tĩnh]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tốt bụng, thân thiện\"",
            "options": [
                "おとうさん",
                "どれ",
                "しんせつ [な]",
                "しろい"
            ],
            "answer": "しんせつ [な]",
            "explain": "✅ [しんせつ [な]|親切 [な]|Tốt bụng, thân thiện]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cái nào\"",
            "options": [
                "なれましたか",
                "パンチ",
                "どれ",
                "おかね"
            ],
            "answer": "どれ",
            "explain": "✅ [どれ|どれ|Cái nào]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tiện lợi\"",
            "options": [
                "べんり [な]",
                "いらっしゃってください",
                "そして",
                "プレゼント"
            ],
            "answer": "べんり [な]",
            "explain": "✅ [べんり [な]|便利 [な]|Tiện lợi]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Như thế nào\"",
            "options": [
                "どんな",
                "にもつ",
                "ところ",
                "て"
            ],
            "answer": "どんな",
            "explain": "✅ [どんな|どんな|Như thế nào]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Fax\"",
            "options": [
                "ファクス",
                "いそがしい",
                "いかがですか",
                "ハンサム [な]"
            ],
            "answer": "ファクス",
            "explain": "✅ [ファクス|ファクス|Fax]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Và, thêm nữa (dùng để nối hai câu)\"",
            "options": [
                "シャツ",
                "そして",
                "パンチ",
                "ホッチキス"
            ],
            "answer": "そして",
            "explain": "✅ [そして|そして|Và, thêm nữa (dùng để nối hai câu)]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hồ Biwa\"",
            "options": [
                "おかね",
                "びわこ",
                "たべもの",
                "ナイフ"
            ],
            "answer": "びわこ",
            "explain": "✅ [びわこ|琵琶湖|Hồ Biwa]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mượn, vay\"",
            "options": [
                "かみ",
                "\\u306f\\u306a",
                "かります",
                "やま"
            ],
            "answer": "かります",
            "explain": "✅ [かります|借ります|Mượn, vay]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tây Ban Nha\"",
            "options": [
                "スペイン",
                "やすい",
                "パンチ",
                "どれ"
            ],
            "answer": "スペイン",
            "explain": "✅ [スペイン|スペイン|Tây Ban Nha]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xấu\"",
            "options": [
                "フォーク",
                "わるい",
                "いらっしゃい",
                "おとうさん"
            ],
            "answer": "わるい",
            "explain": "✅ [わるい|悪い|Xấu]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giấy\"",
            "options": [
                "りょう",
                "そして",
                "わるい",
                "かみ"
            ],
            "answer": "かみ",
            "explain": "✅ [かみ|紙|Giấy]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị đã quen với cuộc sống ở Nhật chưa?\"",
            "options": [
                "パンチ",
                "たかい",
                "ファクス",
                "なれましたか"
            ],
            "answer": "なれましたか",
            "explain": "✅ [なれましたか|日本の生活に慣れましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rất hoan nghênh anh/chị đã đến chơi.\"",
            "options": [
                "いらっしゃってください",
                "りょこう",
                "どうぞ おあがり ください",
                "いらっしゃい"
            ],
            "answer": "いらっしゃい",
            "explain": "✅ [いらっしゃい|いらっしゃい|Rất hoan nghênh anh/chị đã đến chơi.]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Trắng\"",
            "options": [
                "はは",
                "しろい",
                "きれい [な]",
                "パンチ"
            ],
            "answer": "しろい",
            "explain": "✅ [しろい|白い|Trắng]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Từ bây giờ\"",
            "options": [
                "ところ",
                "おかあさん",
                "ワープロ",
                "これから"
            ],
            "answer": "これから",
            "explain": "✅ [これから|これから|Từ bây giờ]"
        }
    ],
    "2": [
        {
            "id": 1,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[勉強] の読み方は何ですか。",
            "options": [
                "かみ",
                "べんきょう",
                "やま",
                "ちち"
            ],
            "answer": "べんきょう",
            "explain": "✅ [勉強|べんきょう|Học]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[暑い, 熱い] の読み方は何ですか。",
            "options": [
                "あおい",
                "クリスマス",
                "やさしい",
                "あつい"
            ],
            "answer": "あつい",
            "explain": "✅ [暑い, 熱い|あつい|Nóng]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[お]仕事] の読み方は何ですか。",
            "options": [
                "ゆうめい [な]",
                "おしごと",
                "きれい [な]",
                "きります"
            ],
            "answer": "おしごと",
            "explain": "✅ [[お]仕事|おしごと|Công việc (~を します: làm việc)]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[切ります] の読み方は何ですか。",
            "options": [
                "あまり",
                "きります",
                "けしゴム",
                "\\u306f\\u306a"
            ],
            "answer": "きります",
            "explain": "✅ [切ります|きります|Cắt]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[食べ物] の読み方は何ですか。",
            "options": [
                "かります",
                "おくります",
                "たべもの",
                "ワープロ"
            ],
            "answer": "たべもの",
            "explain": "✅ [食べ物|たべもの|Đồ ăn]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～は] いかがですか] の読み方は何ですか。",
            "options": [
                "やさしい",
                "シャンハイ",
                "いかがですか",
                "ホッチキス"
            ],
            "answer": "いかがですか",
            "explain": "✅ [[～は] いかがですか|いかがですか|[~] có được không ạ? (dùng khi mời ai đó cái gì)]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[山] の読み方は何ですか。",
            "options": [
                "そして",
                "やすい",
                "いらっしゃってください",
                "やま"
            ],
            "answer": "やま",
            "explain": "✅ [山|やま|Núi]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[琵琶湖] の読み方は何ですか。",
            "options": [
                "びわこ",
                "あおい",
                "いかがですか",
                "パソコン"
            ],
            "answer": "びわこ",
            "explain": "✅ [琵琶湖|びわこ|Hồ Biwa]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[また いらっしゃって ください] の読み方は何ですか。",
            "options": [
                "フォーク",
                "かします",
                "きんかくじ",
                "いらっしゃってください"
            ],
            "answer": "いらっしゃってください",
            "explain": "✅ [また いらっしゃって ください|いらっしゃってください|Lần sau anh/chị lại đến chơi nhé.]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[古い] の読み方は何ですか。",
            "options": [
                "ふるい",
                "すてき [な]",
                "りょこう",
                "せいかつ"
            ],
            "answer": "ふるい",
            "explain": "✅ [古い|ふるい|Cũ]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[寒い] の読み方は何ですか。",
            "options": [
                "むずかしい",
                "さむい",
                "しつれいします",
                "はさみ"
            ],
            "answer": "さむい",
            "explain": "✅ [寒い|さむい|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[親切 [な]] の読み方は何ですか。",
            "options": [
                "しんせつ [な]",
                "はし",
                "むずかしい",
                "たのしい"
            ],
            "answer": "しんせつ [な]",
            "explain": "✅ [親切 [な]|しんせつ [な]|Tốt bụng, thân thiện]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[手] の読み方は何ですか。",
            "options": [
                "て",
                "びわこ",
                "いらっしゃってください",
                "なれましたか"
            ],
            "answer": "て",
            "explain": "✅ [手|て|Tay]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[黒い] の読み方は何ですか。",
            "options": [
                "プレゼント",
                "はは",
                "べんきょう",
                "くろい"
            ],
            "answer": "くろい",
            "explain": "✅ [黒い|くろい|Đen]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[\\u82b1] の読み方は何ですか。",
            "options": [
                "\\u306f\\u306a",
                "パソコン",
                "クリスマス",
                "いかがですか"
            ],
            "answer": "\\u306f\\u306a",
            "explain": "✅ [\\u82b1|\\u306f\\u306a|Hoa]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お父さん] の読み方は何ですか。",
            "options": [
                "おとうさん",
                "なれましたか",
                "きります",
                "どうぞ おあがり ください"
            ],
            "answer": "おとうさん",
            "explain": "✅ [お父さん|おとうさん|Bố (dùng khi nói về bố người khác)]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[金閣寺] の読み方は何ですか。",
            "options": [
                "きんかくじ",
                "しろい",
                "はは",
                "あおい"
            ],
            "answer": "きんかくじ",
            "explain": "✅ [金閣寺|きんかくじ|Chùa Kinkaku-ji (Chùa Vàng)]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[切符] の読み方は何ですか。",
            "options": [
                "クリスマス",
                "きっぷ",
                "どれ",
                "どうぞ おあがり ください"
            ],
            "answer": "きっぷ",
            "explain": "✅ [切符|きっぷ|Vé]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[易しい] の読み方は何ですか。",
            "options": [
                "わるい",
                "やさしい",
                "あかい",
                "かみ"
            ],
            "answer": "やさしい",
            "explain": "✅ [易しい|やさしい|Dễ]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[生活] の読み方は何ですか。",
            "options": [
                "せいかつ",
                "いそがしい",
                "あたらしい",
                "\\u306f\\u306a"
            ],
            "answer": "せいかつ",
            "explain": "✅ [生活|せいかつ|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[教えます] の読み方は何ですか。",
            "options": [
                "ちいさい",
                "シャンハイ",
                "すてきですね",
                "おしえます"
            ],
            "answer": "おしえます",
            "explain": "✅ [教えます|おしえます|Dạy]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～,] もう一杯いかがですか] の読み方は何ですか。",
            "options": [
                "かします",
                "いかがですか",
                "まだ",
                "わるい"
            ],
            "answer": "いかがですか",
            "explain": "✅ [[～,] もう一杯いかがですか|いかがですか|Anh/Chị dùng thêm một chén [~] nữa được không ạ?]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[荷物] の読み方は何ですか。",
            "options": [
                "にもつ",
                "ハンサム [な]",
                "いい (よい)",
                "やすい"
            ],
            "answer": "にもつ",
            "explain": "✅ [荷物|にもつ|Đồ đạc, hành lý]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[白い] の読み方は何ですか。",
            "options": [
                "が",
                "きれい [な]",
                "しろい",
                "やさしい"
            ],
            "answer": "しろい",
            "explain": "✅ [白い|しろい|Trắng]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[もう ～です[ね]] の読み方は何ですか。",
            "options": [
                "まち",
                "もう～ですね",
                "あおい",
                "あげます"
            ],
            "answer": "もう～ですね",
            "explain": "✅ [もう ～です[ね]|もう～ですね|Đã ~ rồi nhỉ./ Đã ~ rồi, đúng không ạ?]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[忙しい] の読み方は何ですか。",
            "options": [
                "おいしい",
                "さむい",
                "シャツ",
                "いそがしい"
            ],
            "answer": "いそがしい",
            "explain": "✅ [忙しい|いそがしい|Bận]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[桜] の読み方は何ですか。",
            "options": [
                "さくら",
                "もう～ですね",
                "おかあさん",
                "これから"
            ],
            "answer": "さくら",
            "explain": "✅ [桜|さくら|Anh đào (hoa, cây)]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[低い] の読み方は何ですか。",
            "options": [
                "ひくい",
                "あげます",
                "あつい",
                "たのしい"
            ],
            "answer": "ひくい",
            "explain": "✅ [低い|ひくい|Thấp]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[青い] の読み方は何ですか。",
            "options": [
                "あおい",
                "パンチ",
                "たべもの",
                "げんき [な]"
            ],
            "answer": "あおい",
            "explain": "✅ [青い|あおい|Xanh da trời]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[送ります] の読み方は何ですか。",
            "options": [
                "おくります",
                "やま",
                "たのしい",
                "しんせつ [な]"
            ],
            "answer": "おくります",
            "explain": "✅ [送ります|おくります|Gửi]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おおきい] の漢字は何ですか。",
            "options": [
                "どれ",
                "いらっしゃい",
                "大きい",
                "暇 [な]"
            ],
            "answer": "大きい",
            "explain": "✅ [大きい|おおきい|Lớn, to]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おげんきですか] の漢字は何ですか。",
            "options": [
                "安い",
                "青い",
                "悪い",
                "お元気ですか"
            ],
            "answer": "お元気ですか",
            "explain": "✅ [お元気ですか|おげんきですか|Anh/Chị có khỏe không?]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[が] の漢字は何ですか。",
            "options": [
                "すてき [な]",
                "切ります",
                "いい (よい)",
                "～が、～"
            ],
            "answer": "～が、～",
            "explain": "✅ [～が、～|が|～, nhưng ～]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しろい] の漢字は何ですか。",
            "options": [
                "白い",
                "失礼します",
                "また いらっしゃって ください",
                "荷物"
            ],
            "answer": "白い",
            "explain": "✅ [白い|しろい|Trắng]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きります] の漢字は何ですか。",
            "options": [
                "切ります",
                "スプーン",
                "そろそろ失礼します",
                "安い"
            ],
            "answer": "切ります",
            "explain": "✅ [切ります|きります|Cắt]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[にもつ] の漢字は何ですか。",
            "options": [
                "そうですね",
                "荷物",
                "便利 [な]",
                "箸"
            ],
            "answer": "荷物",
            "explain": "✅ [荷物|にもつ|Đồ đạc, hành lý]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ゆうめい [な]] の漢字は何ですか。",
            "options": [
                "はさみ",
                "車",
                "スプーン",
                "有名 [な]"
            ],
            "answer": "有名 [な]",
            "explain": "✅ [有名 [な]|ゆうめい [な]|Nổi tiếng]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おとうさん] の漢字は何ですか。",
            "options": [
                "車",
                "いらっしゃい",
                "はさみ",
                "お父さん"
            ],
            "answer": "お父さん",
            "explain": "✅ [お父さん|おとうさん|Bố (dùng khi nói về bố người khác)]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[あつい] の漢字は何ですか。",
            "options": [
                "暑い, 熱い",
                "赤い",
                "食べ物",
                "[お]仕事"
            ],
            "answer": "暑い, 熱い",
            "explain": "✅ [暑い, 熱い|あつい|Nóng]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[あたらしい] の漢字は何ですか。",
            "options": [
                "新しい",
                "どんな",
                "手",
                "赤い"
            ],
            "answer": "新しい",
            "explain": "✅ [新しい|あたらしい|Mới]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おかあさん] の漢字は何ですか。",
            "options": [
                "新しい",
                "～が、～",
                "お土産",
                "お母さん"
            ],
            "answer": "お母さん",
            "explain": "✅ [お母さん|おかあさん|Mẹ (dùng khi nói về mẹ người khác)]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[やすい] の漢字は何ですか。",
            "options": [
                "安い",
                "はさみ",
                "高い",
                "お元気ですか"
            ],
            "answer": "安い",
            "explain": "✅ [安い|やすい|Rẻ]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[まち] の漢字は何ですか。",
            "options": [
                "町",
                "シャンハイ",
                "便利 [な]",
                "ハンサム [な]"
            ],
            "answer": "町",
            "explain": "✅ [町|まち|Thị trấn, thị xã, thành phố]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[なれましたか] の漢字は何ですか。",
            "options": [
                "[お]仕事",
                "忙しい",
                "日本の生活に慣れましたか",
                "そして"
            ],
            "answer": "日本の生活に慣れましたか",
            "explain": "✅ [日本の生活に慣れましたか|なれましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いかがですか] の漢字は何ですか。",
            "options": [
                "日本の生活に慣れましたか",
                "[～,] もう一杯いかがですか",
                "金閣寺",
                "食べ物"
            ],
            "answer": "[～,] もう一杯いかがですか",
            "explain": "✅ [[～,] もう一杯いかがですか|いかがですか|Anh/Chị dùng thêm một chén [~] nữa được không ạ?]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[さむい] の漢字は何ですか。",
            "options": [
                "寒い",
                "もらいます",
                "借ります",
                "荷物"
            ],
            "answer": "寒い",
            "explain": "✅ [寒い|さむい|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おかね] の漢字は何ですか。",
            "options": [
                "お金",
                "大きい",
                "親切 [な]",
                "ごめんください"
            ],
            "answer": "お金",
            "explain": "✅ [お金|おかね|Tiền]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しんせつ [な]] の漢字は何ですか。",
            "options": [
                "易しい",
                "親切 [な]",
                "どれ",
                "勉強"
            ],
            "answer": "親切 [な]",
            "explain": "✅ [親切 [な]|しんせつ [な]|Tốt bụng, thân thiện]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[さくら] の漢字は何ですか。",
            "options": [
                "桜",
                "消しゴム",
                "ナイフ",
                "かけます"
            ],
            "answer": "桜",
            "explain": "✅ [桜|さくら|Anh đào (hoa, cây)]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きっぷ] の漢字は何ですか。",
            "options": [
                "黒い",
                "ファクス",
                "切符",
                "フォーク"
            ],
            "answer": "切符",
            "explain": "✅ [切符|きっぷ|Vé]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かみ] の漢字は何ですか。",
            "options": [
                "七人の侍",
                "ナイフ",
                "クリスマス",
                "紙"
            ],
            "answer": "紙",
            "explain": "✅ [紙|かみ|Giấy]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[びわこ] の漢字は何ですか。",
            "options": [
                "ホッチキス",
                "いらっしゃい",
                "父",
                "琵琶湖"
            ],
            "answer": "琵琶湖",
            "explain": "✅ [琵琶湖|びわこ|Hồ Biwa]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いそがしい] の漢字は何ですか。",
            "options": [
                "クリスマス",
                "忙しい",
                "いい (よい)",
                "大きい"
            ],
            "answer": "忙しい",
            "explain": "✅ [忙しい|いそがしい|Bận]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ふるい] の漢字は何ですか。",
            "options": [
                "小さい",
                "どうぞ お上がり ください",
                "切符",
                "古い"
            ],
            "answer": "古い",
            "explain": "✅ [古い|ふるい|Cũ]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[せいかつ] の漢字は何ですか。",
            "options": [
                "低い",
                "生活",
                "もらいます",
                "赤い"
            ],
            "answer": "生活",
            "explain": "✅ [生活|せいかつ|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[どうぞ おあがり ください] の漢字は何ですか。",
            "options": [
                "勉強",
                "どうぞ お上がり ください",
                "ナイフ",
                "[～は] いかがですか"
            ],
            "answer": "どうぞ お上がり ください",
            "explain": "✅ [どうぞ お上がり ください|どうぞ おあがり ください|Mời anh/chị vào.]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ちいさい] の漢字は何ですか。",
            "options": [
                "高い",
                "山",
                "スプーン",
                "小さい"
            ],
            "answer": "小さい",
            "explain": "✅ [小さい|ちいさい|Bé, nhỏ]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かります] の漢字は何ですか。",
            "options": [
                "借ります",
                "大きい",
                "暑い, 熱い",
                "いらっしゃい"
            ],
            "answer": "借ります",
            "explain": "✅ [借ります|かります|Mượn, vay]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ならいます] の漢字は何ですか。",
            "options": [
                "習います",
                "箸",
                "きれい [な]",
                "セロテープ"
            ],
            "answer": "習います",
            "explain": "✅ [習います|ならいます|Học, tập]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ところ] の漢字は何ですか。",
            "options": [
                "所",
                "日本の生活に慣れましたか",
                "高い",
                "生活"
            ],
            "answer": "所",
            "explain": "✅ [所|ところ|Nơi, chỗ]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xin phép tôi vào. / Xin phép ~.\"",
            "options": [
                "パンチ",
                "やま",
                "しつれいします",
                "まち"
            ],
            "answer": "しつれいします",
            "explain": "✅ [しつれいします|失礼します|Xin phép tôi vào. / Xin phép ~.]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mẹ (dùng khi nói về mẹ người khác)\"",
            "options": [
                "おかあさん",
                "おくります",
                "パソコン",
                "きります"
            ],
            "answer": "おかあさん",
            "explain": "✅ [おかあさん|お母さん|Mẹ (dùng khi nói về mẹ người khác)]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dao\"",
            "options": [
                "ナイフ",
                "クリスマス",
                "ハンサム [な]",
                "きんかくじ"
            ],
            "answer": "ナイフ",
            "explain": "✅ [ナイフ|ナイフ|Dao]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cắt\"",
            "options": [
                "りょこう",
                "やま",
                "きります",
                "おくります"
            ],
            "answer": "きります",
            "explain": "✅ [きります|切ります|Cắt]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vé\"",
            "options": [
                "くるま",
                "きっぷ",
                "きんかくじ",
                "まち"
            ],
            "answer": "きっぷ",
            "explain": "✅ [きっぷ|切符|Vé]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thìa\"",
            "options": [
                "あまり",
                "しんせつ [な]",
                "スプーン",
                "げんき [な]"
            ],
            "answer": "スプーン",
            "explain": "✅ [スプーン|スプーン|Thìa]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mời anh/chị vào.\"",
            "options": [
                "たのしい",
                "べんり [な]",
                "かけます",
                "どうぞ おあがり ください"
            ],
            "answer": "どうぞ おあがり ください",
            "explain": "✅ [どうぞ おあがり ください|どうぞ お上がり ください|Mời anh/chị vào.]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hay nhỉ. / Đẹp nhỉ.\"",
            "options": [
                "すてきですね",
                "そうですね",
                "ごめんください",
                "いい (よい)"
            ],
            "answer": "すてきですね",
            "explain": "✅ [すてきですね|すてきですね|Hay nhỉ. / Đẹp nhỉ.]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Quà tặng\"",
            "options": [
                "おかね",
                "あつい",
                "これから",
                "プレゼント"
            ],
            "answer": "プレゼント",
            "explain": "✅ [プレゼント|プレゼント|Quà tặng]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Náo nhiệt\"",
            "options": [
                "あたらしい",
                "にぎやか [な]",
                "おもしろい",
                "ヨーロッパ"
            ],
            "answer": "にぎやか [な]",
            "explain": "✅ [にぎやか [な]|にぎやか [な]|Náo nhiệt]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Giáng sinh\"",
            "options": [
                "りょう",
                "これから",
                "すてきですね",
                "クリスマス"
            ],
            "answer": "クリスマス",
            "explain": "✅ [クリスマス|クリスマス|Giáng sinh]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tốt bụng, thân thiện\"",
            "options": [
                "とても",
                "たのしい",
                "しんせつ [な]",
                "すてきですね"
            ],
            "answer": "しんせつ [な]",
            "explain": "✅ [しんせつ [な]|親切 [な]|Tốt bụng, thân thiện]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đũa\"",
            "options": [
                "シャツ",
                "ワープロ",
                "いかがですか",
                "はし"
            ],
            "answer": "はし",
            "explain": "✅ [はし|箸|Đũa]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đẹp, hay\"",
            "options": [
                "あつい",
                "しろい",
                "すてき [な]",
                "しちにんのさむらい"
            ],
            "answer": "すてき [な]",
            "explain": "✅ [すてき [な]|すてき [な]|Đẹp, hay]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đắt, cao\"",
            "options": [
                "たのしい",
                "もう～ですね",
                "すてきですね",
                "たかい"
            ],
            "answer": "たかい",
            "explain": "✅ [たかい|高い|Đắt, cao]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cái dập ghim\"",
            "options": [
                "かします",
                "ホッチキス",
                "かけます",
                "りょこう"
            ],
            "answer": "ホッチキス",
            "explain": "✅ [ホッチキス|ホッチキス|Cái dập ghim]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thú vị, hay\"",
            "options": [
                "ところ",
                "おもしろい",
                "が",
                "かみ"
            ],
            "answer": "おもしろい",
            "explain": "✅ [おもしろい|おもしろい|Thú vị, hay]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cho mượn, cho vay\"",
            "options": [
                "かします",
                "さくら",
                "かけます",
                "ハンサム [な]"
            ],
            "answer": "かします",
            "explain": "✅ [かします|貸します|Cho mượn, cho vay]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mượn, vay\"",
            "options": [
                "いらっしゃってください",
                "かります",
                "ごめんください",
                "どんな"
            ],
            "answer": "かります",
            "explain": "✅ [かります|借ります|Mượn, vay]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rất hoan nghênh anh/chị đã đến chơi.\"",
            "options": [
                "いらっしゃい",
                "たかい",
                "とても",
                "どれ"
            ],
            "answer": "いらっしゃい",
            "explain": "✅ [いらっしゃい|いらっしゃい|Rất hoan nghênh anh/chị đã đến chơi.]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhận\"",
            "options": [
                "そうですね",
                "いらっしゃい",
                "いかがですか",
                "もらいます"
            ],
            "answer": "もらいます",
            "explain": "✅ [もらいます|もらいます|Nhận]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cũ\"",
            "options": [
                "あつい",
                "ふるい",
                "ひま [な]",
                "もう～ですね"
            ],
            "answer": "ふるい",
            "explain": "✅ [ふるい|古い|Cũ]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thế à./ Để tôi xem.\"",
            "options": [
                "そうですね",
                "かみ",
                "ゆうめい [な]",
                "くるま"
            ],
            "answer": "そうですね",
            "explain": "✅ [そうですね|そうですね|Thế à./ Để tôi xem.]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hồ Biwa\"",
            "options": [
                "びわこ",
                "おげんきですか",
                "おしえます",
                "ちいさい"
            ],
            "answer": "びわこ",
            "explain": "✅ [びわこ|琵琶湖|Hồ Biwa]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nơi, chỗ\"",
            "options": [
                "かみ",
                "いそがしい",
                "ふじさん",
                "ところ"
            ],
            "answer": "ところ",
            "explain": "✅ [ところ|所|Nơi, chỗ]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"[~] có được không ạ? (dùng khi mời ai đó cái gì)\"",
            "options": [
                "はさみ",
                "おとうさん",
                "いかがですか",
                "どんな"
            ],
            "answer": "いかがですか",
            "explain": "✅ [いかがですか|[～は] いかがですか|[~] có được không ạ? (dùng khi mời ai đó cái gì)]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Khó\"",
            "options": [
                "まち",
                "むずかしい",
                "ひま [な]",
                "きれい [な]"
            ],
            "answer": "むずかしい",
            "explain": "✅ [むずかしい|難しい|Khó]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cuộc sống, sinh hoạt\"",
            "options": [
                "ごめんください",
                "きんかくじ",
                "やすい",
                "せいかつ"
            ],
            "answer": "せいかつ",
            "explain": "✅ [せいかつ|生活|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Chùa Kinkaku-ji (Chùa Vàng)\"",
            "options": [
                "ゆうめい [な]",
                "おしごと",
                "びわこ",
                "きんかくじ"
            ],
            "answer": "きんかくじ",
            "explain": "✅ [きんかくじ|金閣寺|Chùa Kinkaku-ji (Chùa Vàng)]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Như thế nào\"",
            "options": [
                "どんな",
                "あおい",
                "あかい",
                "ファクス"
            ],
            "answer": "どんな",
            "explain": "✅ [どんな|どんな|Như thế nào]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Học, tập\"",
            "options": [
                "ならいます",
                "りょう",
                "すてき [な]",
                "フォーク"
            ],
            "answer": "ならいます",
            "explain": "✅ [ならいます|習います|Học, tập]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị có khỏe không?\"",
            "options": [
                "あつい",
                "そして",
                "おげんきですか",
                "せいかつ"
            ],
            "answer": "おげんきですか",
            "explain": "✅ [おげんきですか|お元気ですか|Anh/Chị có khỏe không?]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nóng\"",
            "options": [
                "あつい",
                "パンチ",
                "パソコン",
                "ふじさん"
            ],
            "answer": "あつい",
            "explain": "✅ [あつい|暑い, 熱い|Nóng]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thế nào\"",
            "options": [
                "げんき [な]",
                "スプーン",
                "パソコン",
                "どう"
            ],
            "answer": "どう",
            "explain": "✅ [どう|どう|Thế nào]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ngon\"",
            "options": [
                "ひくい",
                "かります",
                "おいしい",
                "せいかつ"
            ],
            "answer": "おいしい",
            "explain": "✅ [おいしい|おいしい|Ngon]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mẹ (dùng khi nói về mẹ mình)\"",
            "options": [
                "はは",
                "けしゴム",
                "スプーン",
                "まち"
            ],
            "answer": "はは",
            "explain": "✅ [はは|母|Mẹ (dùng khi nói về mẹ mình)]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Kí túc xá\"",
            "options": [
                "けっこうです",
                "おいしい",
                "はし",
                "りょう"
            ],
            "answer": "りょう",
            "explain": "✅ [りょう|寮|Kí túc xá]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Gọi [điện thoại]\"",
            "options": [
                "ホッチキス",
                "かけます",
                "いただきます",
                "シャンハイ"
            ],
            "answer": "かけます",
            "explain": "✅ [かけます|かけます|Gọi [điện thoại]]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tiện lợi\"",
            "options": [
                "べんり [な]",
                "ふじさん",
                "しつれいします",
                "おしごと"
            ],
            "answer": "べんり [な]",
            "explain": "✅ [べんり [な]|便利 [な]|Tiện lợi]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cái nào\"",
            "options": [
                "あかい",
                "にもつ",
                "あたらしい",
                "どれ"
            ],
            "answer": "どれ",
            "explain": "✅ [どれ|どれ|Cái nào]"
        }
    ],
    "3": [
        {
            "id": 1,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[生活] の読み方は何ですか。",
            "options": [
                "まだ",
                "せいかつ",
                "おげんきですか",
                "まち"
            ],
            "answer": "せいかつ",
            "explain": "✅ [生活|せいかつ|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 2,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[低い] の読み方は何ですか。",
            "options": [
                "ひくい",
                "いただきます",
                "おかあさん",
                "おしえます"
            ],
            "answer": "ひくい",
            "explain": "✅ [低い|ひくい|Thấp]"
        },
        {
            "id": 3,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お父さん] の読み方は何ですか。",
            "options": [
                "いそがしい",
                "おとうさん",
                "シャンハイ",
                "\\u306f\\u306a"
            ],
            "answer": "おとうさん",
            "explain": "✅ [お父さん|おとうさん|Bố (dùng khi nói về bố người khác)]"
        },
        {
            "id": 4,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[貸します] の読み方は何ですか。",
            "options": [
                "やま",
                "おいしい",
                "かします",
                "おとうさん"
            ],
            "answer": "かします",
            "explain": "✅ [貸します|かします|Cho mượn, cho vay]"
        },
        {
            "id": 5,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お母さん] の読み方は何ですか。",
            "options": [
                "おとうさん",
                "もう",
                "しつれいします",
                "おかあさん"
            ],
            "answer": "おかあさん",
            "explain": "✅ [お母さん|おかあさん|Mẹ (dùng khi nói về mẹ người khác)]"
        },
        {
            "id": 6,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[暇 [な]] の読み方は何ですか。",
            "options": [
                "かみ",
                "ひま [な]",
                "が",
                "いらっしゃい"
            ],
            "answer": "ひま [な]",
            "explain": "✅ [暇 [な]|ひま [な]|Rảnh rỗi]"
        },
        {
            "id": 7,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[寒い] の読み方は何ですか。",
            "options": [
                "おとうさん",
                "あまり",
                "パソコン",
                "さむい"
            ],
            "answer": "さむい",
            "explain": "✅ [寒い|さむい|Lạnh, rét (dùng cho thời tiết)]"
        },
        {
            "id": 8,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～は] いかがですか] の読み方は何ですか。",
            "options": [
                "いかがですか",
                "スペイン",
                "にもつ",
                "ハンサム [な]"
            ],
            "answer": "いかがですか",
            "explain": "✅ [[～は] いかがですか|いかがですか|[~] có được không ạ? (dùng khi mời ai đó cái gì)]"
        },
        {
            "id": 9,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[易しい] の読み方は何ですか。",
            "options": [
                "やさしい",
                "これから",
                "ひくい",
                "せいかつ"
            ],
            "answer": "やさしい",
            "explain": "✅ [易しい|やさしい|Dễ]"
        },
        {
            "id": 10,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[日本の生活に慣れましたか] の読み方は何ですか。",
            "options": [
                "はさみ",
                "ところ",
                "かけます",
                "なれましたか"
            ],
            "answer": "なれましたか",
            "explain": "✅ [日本の生活に慣れましたか|なれましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 11,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[送ります] の読み方は何ですか。",
            "options": [
                "おくります",
                "きっぷ",
                "くるま",
                "きんかくじ"
            ],
            "answer": "おくります",
            "explain": "✅ [送ります|おくります|Gửi]"
        },
        {
            "id": 12,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[小さい] の読み方は何ですか。",
            "options": [
                "まだ",
                "おくります",
                "りょう",
                "ちいさい"
            ],
            "answer": "ちいさい",
            "explain": "✅ [小さい|ちいさい|Bé, nhỏ]"
        },
        {
            "id": 13,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[悪い] の読み方は何ですか。",
            "options": [
                "さくら",
                "なれましたか",
                "おとうさん",
                "わるい"
            ],
            "answer": "わるい",
            "explain": "✅ [悪い|わるい|Xấu]"
        },
        {
            "id": 14,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[七人の侍] の読み方は何ですか。",
            "options": [
                "もらいます",
                "しちにんのさむらい",
                "クリスマス",
                "いい (よい)"
            ],
            "answer": "しちにんのさむらい",
            "explain": "✅ [七人の侍|しちにんのさむらい|Bảy chàng võ sĩ Samurai (tên phim)]"
        },
        {
            "id": 15,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[冷たい] の読み方は何ですか。",
            "options": [
                "たかい",
                "つめたい",
                "さくら",
                "はは"
            ],
            "answer": "つめたい",
            "explain": "✅ [冷たい|つめたい|Lạnh, buốt (dùng cho cảm giác)]"
        },
        {
            "id": 16,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[\\u82b1] の読み方は何ですか。",
            "options": [
                "シャンハイ",
                "せいかつ",
                "シャツ",
                "\\u306f\\u306a"
            ],
            "answer": "\\u306f\\u306a",
            "explain": "✅ [\\u82b1|\\u306f\\u306a|Hoa]"
        },
        {
            "id": 17,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[～が、～] の読み方は何ですか。",
            "options": [
                "が",
                "たのしい",
                "にもつ",
                "なれましたか"
            ],
            "answer": "が",
            "explain": "✅ [～が、～|が|～, nhưng ～]"
        },
        {
            "id": 18,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[[～,] もう一杯いかがですか] の読み方は何ですか。",
            "options": [
                "むずかしい",
                "にぎやか [な]",
                "いかがですか",
                "パソコン"
            ],
            "answer": "いかがですか",
            "explain": "✅ [[～,] もう一杯いかがですか|いかがですか|Anh/Chị dùng thêm một chén [~] nữa được không ạ?]"
        },
        {
            "id": 19,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[桜] の読み方は何ですか。",
            "options": [
                "やすい",
                "て",
                "にもつ",
                "さくら"
            ],
            "answer": "さくら",
            "explain": "✅ [桜|さくら|Anh đào (hoa, cây)]"
        },
        {
            "id": 20,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[母] の読み方は何ですか。",
            "options": [
                "が",
                "やさしい",
                "くろい",
                "はは"
            ],
            "answer": "はは",
            "explain": "✅ [母|はは|Mẹ (dùng khi nói về mẹ mình)]"
        },
        {
            "id": 21,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[旅行] の読み方は何ですか。",
            "options": [
                "いい (よい)",
                "どんな",
                "て",
                "りょこう"
            ],
            "answer": "りょこう",
            "explain": "✅ [旅行|りょこう|Du lịch]"
        },
        {
            "id": 22,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[青い] の読み方は何ですか。",
            "options": [
                "あかい",
                "プレゼント",
                "つめたい",
                "あおい"
            ],
            "answer": "あおい",
            "explain": "✅ [青い|あおい|Xanh da trời]"
        },
        {
            "id": 23,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[楽しい] の読み方は何ですか。",
            "options": [
                "たのしい",
                "しろい",
                "ところ",
                "さくら"
            ],
            "answer": "たのしい",
            "explain": "✅ [楽しい|たのしい|Vui]"
        },
        {
            "id": 24,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[琵琶湖] の読み方は何ですか。",
            "options": [
                "どれ",
                "びわこ",
                "あつい",
                "つめたい"
            ],
            "answer": "びわこ",
            "explain": "✅ [琵琶湖|びわこ|Hồ Biwa]"
        },
        {
            "id": 25,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[古い] の読み方は何ですか。",
            "options": [
                "ふるい",
                "ゆうめい [な]",
                "しちにんのさむらい",
                "ちいさい"
            ],
            "answer": "ふるい",
            "explain": "✅ [古い|ふるい|Cũ]"
        },
        {
            "id": 26,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[教えます] の読み方は何ですか。",
            "options": [
                "いい (よい)",
                "おしえます",
                "やすい",
                "かします"
            ],
            "answer": "おしえます",
            "explain": "✅ [教えます|おしえます|Dạy]"
        },
        {
            "id": 27,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[元気 [な]] の読み方は何ですか。",
            "options": [
                "あつい",
                "しつれいします",
                "すてき [な]",
                "げんき [な]"
            ],
            "answer": "げんき [な]",
            "explain": "✅ [元気 [な]|げんき [な]|Khỏe]"
        },
        {
            "id": 28,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[お元気ですか] の読み方は何ですか。",
            "options": [
                "いただきます",
                "やすい",
                "おげんきですか",
                "どれ"
            ],
            "answer": "おげんきですか",
            "explain": "✅ [お元気ですか|おげんきですか|Anh/Chị có khỏe không?]"
        },
        {
            "id": 29,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[高い] の読み方は何ですか。",
            "options": [
                "たかい",
                "ちち",
                "いただきます",
                "きっぷ"
            ],
            "answer": "たかい",
            "explain": "✅ [高い|たかい|Đắt, cao]"
        },
        {
            "id": 30,
            "section": "Mondai 1",
            "text_context": "Chọn cách đọc đúng cho từ trong ngoặc",
            "question": "[白い] の読み方は何ですか。",
            "options": [
                "シャンハイ",
                "しずか [な]",
                "しろい",
                "いただきます"
            ],
            "answer": "しろい",
            "explain": "✅ [白い|しろい|Trắng]"
        },
        {
            "id": 31,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[たべもの] の漢字は何ですか。",
            "options": [
                "生活",
                "食べ物",
                "高い",
                "あまり"
            ],
            "answer": "食べ物",
            "explain": "✅ [食べ物|たべもの|Đồ ăn]"
        },
        {
            "id": 32,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おかね] の漢字は何ですか。",
            "options": [
                "生活",
                "\\u82b1",
                "便利 [な]",
                "お金"
            ],
            "answer": "お金",
            "explain": "✅ [お金|おかね|Tiền]"
        },
        {
            "id": 33,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きっぷ] の漢字は何ですか。",
            "options": [
                "切符",
                "紙",
                "\\u82b1",
                "にぎやか [な]"
            ],
            "answer": "切符",
            "explain": "✅ [切符|きっぷ|Vé]"
        },
        {
            "id": 34,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きります] の漢字は何ですか。",
            "options": [
                "白い",
                "切ります",
                "そうですね",
                "七人の侍"
            ],
            "answer": "切ります",
            "explain": "✅ [切ります|きります|Cắt]"
        },
        {
            "id": 35,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おくります] の漢字は何ですか。",
            "options": [
                "パンチ",
                "プレゼント",
                "金閣寺",
                "送ります"
            ],
            "answer": "送ります",
            "explain": "✅ [送ります|おくります|Gửi]"
        },
        {
            "id": 36,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[はは] の漢字は何ですか。",
            "options": [
                "とても",
                "母",
                "もう ～です[ね]",
                "きれい [な]"
            ],
            "answer": "母",
            "explain": "✅ [母|はは|Mẹ (dùng khi nói về mẹ mình)]"
        },
        {
            "id": 37,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[きんかくじ] の漢字は何ですか。",
            "options": [
                "あまり",
                "\\u82b1",
                "どうぞ お上がり ください",
                "金閣寺"
            ],
            "answer": "金閣寺",
            "explain": "✅ [金閣寺|きんかくじ|Chùa Kinkaku-ji (Chùa Vàng)]"
        },
        {
            "id": 38,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[げんき [な]] の漢字は何ですか。",
            "options": [
                "お元気ですか",
                "高い",
                "日本の生活に慣れましたか",
                "元気 [な]"
            ],
            "answer": "元気 [な]",
            "explain": "✅ [元気 [な]|げんき [な]|Khỏe]"
        },
        {
            "id": 39,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ならいます] の漢字は何ですか。",
            "options": [
                "習います",
                "冷たい",
                "勉強",
                "父"
            ],
            "answer": "習います",
            "explain": "✅ [習います|ならいます|Học, tập]"
        },
        {
            "id": 40,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ところ] の漢字は何ですか。",
            "options": [
                "所",
                "有名 [な]",
                "シャツ",
                "パンチ"
            ],
            "answer": "所",
            "explain": "✅ [所|ところ|Nơi, chỗ]"
        },
        {
            "id": 41,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[あおい] の漢字は何ですか。",
            "options": [
                "ハンサム [な]",
                "そして",
                "きれい [な]",
                "青い"
            ],
            "answer": "青い",
            "explain": "✅ [青い|あおい|Xanh da trời]"
        },
        {
            "id": 42,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おかあさん] の漢字は何ですか。",
            "options": [
                "お母さん",
                "所",
                "消しゴム",
                "母"
            ],
            "answer": "お母さん",
            "explain": "✅ [お母さん|おかあさん|Mẹ (dùng khi nói về mẹ người khác)]"
        },
        {
            "id": 43,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[なれましたか] の漢字は何ですか。",
            "options": [
                "日本の生活に慣れましたか",
                "赤い",
                "大きい",
                "いただきます"
            ],
            "answer": "日本の生活に慣れましたか",
            "explain": "✅ [日本の生活に慣れましたか|なれましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 44,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[まち] の漢字は何ですか。",
            "options": [
                "町",
                "送ります",
                "かけます",
                "箸"
            ],
            "answer": "町",
            "explain": "✅ [町|まち|Thị trấn, thị xã, thành phố]"
        },
        {
            "id": 45,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おげんきですか] の漢字は何ですか。",
            "options": [
                "お元気ですか",
                "ワープロ",
                "～が、～",
                "まだ"
            ],
            "answer": "お元気ですか",
            "explain": "✅ [お元気ですか|おげんきですか|Anh/Chị có khỏe không?]"
        },
        {
            "id": 46,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ちち] の漢字は何ですか。",
            "options": [
                "どれ",
                "いらっしゃい",
                "父",
                "あげます"
            ],
            "answer": "父",
            "explain": "✅ [父|ちち|Bố (dùng khi nói về bố mình)]"
        },
        {
            "id": 47,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[むずかしい] の漢字は何ですか。",
            "options": [
                "難しい",
                "易しい",
                "富士山",
                "スペイン"
            ],
            "answer": "難しい",
            "explain": "✅ [難しい|むずかしい|Khó]"
        },
        {
            "id": 48,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しずか [な]] の漢字は何ですか。",
            "options": [
                "～が、～",
                "小さい",
                "静か [な]",
                "お土産"
            ],
            "answer": "静か [な]",
            "explain": "✅ [静か [な]|しずか [な]|Yên tĩnh]"
        },
        {
            "id": 49,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いかがですか] の漢字は何ですか。",
            "options": [
                "どんな",
                "シャンハイ",
                "[～,] もう一杯いかがですか",
                "いらっしゃい"
            ],
            "answer": "[～,] もう一杯いかがですか",
            "explain": "✅ [[～,] もう一杯いかがですか|いかがですか|Anh/Chị dùng thêm một chén [~] nữa được không ạ?]"
        },
        {
            "id": 50,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[かします] の漢字は何ですか。",
            "options": [
                "セロテープ",
                "所",
                "山",
                "貸します"
            ],
            "answer": "貸します",
            "explain": "✅ [貸します|かします|Cho mượn, cho vay]"
        },
        {
            "id": 51,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[ふじさん] の漢字は何ですか。",
            "options": [
                "富士山",
                "いいえ、けっこうです",
                "父",
                "切ります"
            ],
            "answer": "富士山",
            "explain": "✅ [富士山|ふじさん|Núi Phú Sĩ]"
        },
        {
            "id": 52,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しつれいします] の漢字は何ですか。",
            "options": [
                "小さい",
                "荷物",
                "高い",
                "失礼します"
            ],
            "answer": "失礼します",
            "explain": "✅ [失礼します|しつれいします|Xin phép tôi vào. / Xin phép ~.]"
        },
        {
            "id": 53,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おしごと] の漢字は何ですか。",
            "options": [
                "紙",
                "[お]仕事",
                "習います",
                "とても"
            ],
            "answer": "[お]仕事",
            "explain": "✅ [[お]仕事|おしごと|Công việc (~を します: làm việc)]"
        },
        {
            "id": 54,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[べんり [な]] の漢字は何ですか。",
            "options": [
                "便利 [な]",
                "暇 [な]",
                "お元気ですか",
                "静か [な]"
            ],
            "answer": "便利 [な]",
            "explain": "✅ [便利 [な]|べんり [な]|Tiện lợi]"
        },
        {
            "id": 55,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おみやげ] の漢字は何ですか。",
            "options": [
                "お土産",
                "プレゼント",
                "スペイン",
                "そして"
            ],
            "answer": "お土産",
            "explain": "✅ [お土産|おみやげ|Quà (mua khi đi xa về)]"
        },
        {
            "id": 56,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[つめたい] の漢字は何ですか。",
            "options": [
                "いいえ、けっこうです",
                "悪い",
                "冷たい",
                "シャンハイ"
            ],
            "answer": "冷たい",
            "explain": "✅ [冷たい|つめたい|Lạnh, buốt (dùng cho cảm giác)]"
        },
        {
            "id": 57,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[いそがしい] の漢字は何ですか。",
            "options": [
                "悪い",
                "忙しい",
                "黒い",
                "お父さん"
            ],
            "answer": "忙しい",
            "explain": "✅ [忙しい|いそがしい|Bận]"
        },
        {
            "id": 58,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[おしえます] の漢字は何ですか。",
            "options": [
                "どう",
                "教えます",
                "旅行",
                "スプーン"
            ],
            "answer": "教えます",
            "explain": "✅ [教えます|おしえます|Dạy]"
        },
        {
            "id": 59,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[\\u306f\\u306a] の漢字は何ですか。",
            "options": [
                "\\u82b1",
                "どう",
                "ヨーロッパ",
                "父"
            ],
            "answer": "\\u82b1",
            "explain": "✅ [\\u82b1|\\u306f\\u306a|Hoa]"
        },
        {
            "id": 60,
            "section": "Mondai 2",
            "text_context": "Chọn Kanji/Katakana đúng",
            "question": "[しちにんのさむらい] の漢字は何ですか。",
            "options": [
                "どれ",
                "七人の侍",
                "高い",
                "[お]仕事"
            ],
            "answer": "七人の侍",
            "explain": "✅ [七人の侍|しちにんのさむらい|Bảy chàng võ sĩ Samurai (tên phim)]"
        },
        {
            "id": 61,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tiện lợi\"",
            "options": [
                "べんり [な]",
                "プレゼント",
                "かみ",
                "しずか [な]"
            ],
            "answer": "べんり [な]",
            "explain": "✅ [べんり [な]|便利 [な]|Tiện lợi]"
        },
        {
            "id": 62,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dạy\"",
            "options": [
                "フォーク",
                "いかがですか",
                "パンチ",
                "おしえます"
            ],
            "answer": "おしえます",
            "explain": "✅ [おしえます|教えます|Dạy]"
        },
        {
            "id": 63,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mượn, vay\"",
            "options": [
                "ごめんください",
                "しんせつ [な]",
                "ナイフ",
                "かります"
            ],
            "answer": "かります",
            "explain": "✅ [かります|借ります|Mượn, vay]"
        },
        {
            "id": 64,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đẹp trai\"",
            "options": [
                "そうですね",
                "おしえます",
                "シャンハイ",
                "ハンサム [な]"
            ],
            "answer": "ハンサム [な]",
            "explain": "✅ [ハンサム [な]|ハンサム [な]|Đẹp trai]"
        },
        {
            "id": 65,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mẹ (dùng khi nói về mẹ người khác)\"",
            "options": [
                "そして",
                "たのしい",
                "しちにんのさむらい",
                "おかあさん"
            ],
            "answer": "おかあさん",
            "explain": "✅ [おかあさん|お母さん|Mẹ (dùng khi nói về mẹ người khác)]"
        },
        {
            "id": 66,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thế à./ Để tôi xem.\"",
            "options": [
                "おしごと",
                "おとうさん",
                "そうですね",
                "やすい"
            ],
            "answer": "そうですね",
            "explain": "✅ [そうですね|そうですね|Thế à./ Để tôi xem.]"
        },
        {
            "id": 67,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bố (dùng khi nói về bố người khác)\"",
            "options": [
                "おおきい",
                "たかい",
                "しずか [な]",
                "おとうさん"
            ],
            "answer": "おとうさん",
            "explain": "✅ [おとうさん|お父さん|Bố (dùng khi nói về bố người khác)]"
        },
        {
            "id": 68,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Fax\"",
            "options": [
                "ファクス",
                "さくら",
                "ホッチキス",
                "たかい"
            ],
            "answer": "ファクス",
            "explain": "✅ [ファクス|ファクス|Fax]"
        },
        {
            "id": 69,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Vui\"",
            "options": [
                "たのしい",
                "たべもの",
                "すてきですね",
                "おかね"
            ],
            "answer": "たのしい",
            "explain": "✅ [たのしい|楽しい|Vui]"
        },
        {
            "id": 70,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cuộc sống, sinh hoạt\"",
            "options": [
                "せいかつ",
                "べんきょう",
                "いただきます",
                "スプーン"
            ],
            "answer": "せいかつ",
            "explain": "✅ [せいかつ|生活|Cuộc sống, sinh hoạt]"
        },
        {
            "id": 71,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nơi, chỗ\"",
            "options": [
                "おかあさん",
                "やさしい",
                "けしゴム",
                "ところ"
            ],
            "answer": "ところ",
            "explain": "✅ [ところ|所|Nơi, chỗ]"
        },
        {
            "id": 72,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Bố (dùng khi nói về bố mình)\"",
            "options": [
                "ちち",
                "もう～ですね",
                "はさみ",
                "かります"
            ],
            "answer": "ちち",
            "explain": "✅ [ちち|父|Bố (dùng khi nói về bố mình)]"
        },
        {
            "id": 73,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đồ đạc, hành lý\"",
            "options": [
                "にもつ",
                "ナイフ",
                "ゆうめい [な]",
                "おかあさん"
            ],
            "answer": "にもつ",
            "explain": "✅ [にもつ|荷物|Đồ đạc, hành lý]"
        },
        {
            "id": 74,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xin lỗi, có ai ở nhà không? / Tôi có thể vào được chứ?\"",
            "options": [
                "あげます",
                "きっぷ",
                "せいかつ",
                "ごめんください"
            ],
            "answer": "ごめんください",
            "explain": "✅ [ごめんください|ごめんください|Xin lỗi, có ai ở nhà không? / Tôi có thể vào được chứ?]"
        },
        {
            "id": 75,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị đã quen với cuộc sống ở Nhật chưa?\"",
            "options": [
                "むずかしい",
                "シャツ",
                "なれましたか",
                "かります"
            ],
            "answer": "なれましたか",
            "explain": "✅ [なれましたか|日本の生活に慣れましたか|Anh/Chị đã quen với cuộc sống ở Nhật chưa?]"
        },
        {
            "id": 76,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thượng Hải\"",
            "options": [
                "スペイン",
                "シャンハイ",
                "スプーン",
                "ひくい"
            ],
            "answer": "シャンハイ",
            "explain": "✅ [シャンハイ|シャンハイ|Thượng Hải]"
        },
        {
            "id": 77,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Dao\"",
            "options": [
                "ナイフ",
                "もらいます",
                "どうぞ おあがり ください",
                "ごめんください"
            ],
            "answer": "ナイフ",
            "explain": "✅ [ナイフ|ナイフ|Dao]"
        },
        {
            "id": 78,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đen\"",
            "options": [
                "たべもの",
                "ヨーロッパ",
                "くるま",
                "くろい"
            ],
            "answer": "くろい",
            "explain": "✅ [くろい|黒い|Đen]"
        },
        {
            "id": 79,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hồ Biwa\"",
            "options": [
                "びわこ",
                "りょう",
                "もう",
                "にもつ"
            ],
            "answer": "びわこ",
            "explain": "✅ [びわこ|琵琶湖|Hồ Biwa]"
        },
        {
            "id": 80,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nhận\"",
            "options": [
                "もらいます",
                "そして",
                "やすい",
                "おみやげ"
            ],
            "answer": "もらいます",
            "explain": "✅ [もらいます|もらいます|Nhận]"
        },
        {
            "id": 81,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mẹ (dùng khi nói về mẹ mình)\"",
            "options": [
                "にもつ",
                "はは",
                "しんせつ [な]",
                "スプーン"
            ],
            "answer": "はは",
            "explain": "✅ [はは|母|Mẹ (dùng khi nói về mẹ mình)]"
        },
        {
            "id": 82,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Khó\"",
            "options": [
                "むずかしい",
                "あおい",
                "あつい",
                "いかがですか"
            ],
            "answer": "むずかしい",
            "explain": "✅ [むずかしい|難しい|Khó]"
        },
        {
            "id": 83,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Ngon\"",
            "options": [
                "きっぷ",
                "ひま [な]",
                "はさみ",
                "おいしい"
            ],
            "answer": "おいしい",
            "explain": "✅ [おいしい|おいしい|Ngon]"
        },
        {
            "id": 84,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tốt bụng, thân thiện\"",
            "options": [
                "しんせつ [な]",
                "ならいます",
                "ふじさん",
                "セロテープ"
            ],
            "answer": "しんせつ [な]",
            "explain": "✅ [しんせつ [な]|親切 [な]|Tốt bụng, thân thiện]"
        },
        {
            "id": 85,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đỏ\"",
            "options": [
                "シャンハイ",
                "あげます",
                "いい (よい)",
                "あかい"
            ],
            "answer": "あかい",
            "explain": "✅ [あかい|赤い|Đỏ]"
        },
        {
            "id": 86,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hay nhỉ. / Đẹp nhỉ.\"",
            "options": [
                "すてきですね",
                "けっこうです",
                "くろい",
                "ホッチキス"
            ],
            "answer": "すてきですね",
            "explain": "✅ [すてきですね|すてきですね|Hay nhỉ. / Đẹp nhỉ.]"
        },
        {
            "id": 87,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị dùng thêm một chén [~] nữa được không ạ?\"",
            "options": [
                "いかがですか",
                "もう～ですね",
                "が",
                "いただきます"
            ],
            "answer": "いかがですか",
            "explain": "✅ [いかがですか|[～,] もう一杯いかがですか|Anh/Chị dùng thêm một chén [~] nữa được không ạ?]"
        },
        {
            "id": 88,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Nổi tiếng\"",
            "options": [
                "ゆうめい [な]",
                "あまり",
                "しちにんのさむらい",
                "くろい"
            ],
            "answer": "ゆうめい [な]",
            "explain": "✅ [ゆうめい [な]|有名 [な]|Nổi tiếng]"
        },
        {
            "id": 89,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Mới\"",
            "options": [
                "せいかつ",
                "あたらしい",
                "りょこう",
                "どんな"
            ],
            "answer": "あたらしい",
            "explain": "✅ [あたらしい|新しい|Mới]"
        },
        {
            "id": 90,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Hoa\"",
            "options": [
                "どうぞ おあがり ください",
                "きっぷ",
                "ごめんください",
                "\\u306f\\u306a"
            ],
            "answer": "\\u306f\\u306a",
            "explain": "✅ [\\u306f\\u306a|\\u82b1|Hoa]"
        },
        {
            "id": 91,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Tây Ban Nha\"",
            "options": [
                "しんせつ [な]",
                "そして",
                "スペイン",
                "ナイフ"
            ],
            "answer": "スペイン",
            "explain": "✅ [スペイン|スペイン|Tây Ban Nha]"
        },
        {
            "id": 92,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Đẹp, sạch\"",
            "options": [
                "が",
                "どれ",
                "ヨーロッパ",
                "きれい [な]"
            ],
            "answer": "きれい [な]",
            "explain": "✅ [きれい [な]|きれい [な]|Đẹp, sạch]"
        },
        {
            "id": 93,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"[~] có được không ạ? (dùng khi mời ai đó cái gì)\"",
            "options": [
                "かります",
                "いかがですか",
                "かけます",
                "つめたい"
            ],
            "answer": "いかがですか",
            "explain": "✅ [いかがですか|[～は] いかがですか|[~] có được không ạ? (dùng khi mời ai đó cái gì)]"
        },
        {
            "id": 94,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xanh da trời\"",
            "options": [
                "そうですね",
                "あおい",
                "おもしろい",
                "りょこう"
            ],
            "answer": "あおい",
            "explain": "✅ [あおい|青い|Xanh da trời]"
        },
        {
            "id": 95,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Thị trấn, thị xã, thành phố\"",
            "options": [
                "まち",
                "りょう",
                "ひくい",
                "おとうさん"
            ],
            "answer": "まち",
            "explain": "✅ [まち|町|Thị trấn, thị xã, thành phố]"
        },
        {
            "id": 96,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Rất hoan nghênh anh/chị đã đến chơi.\"",
            "options": [
                "クリスマス",
                "いらっしゃい",
                "やすい",
                "セロテープ"
            ],
            "answer": "いらっしゃい",
            "explain": "✅ [いらっしゃい|いらっしゃい|Rất hoan nghênh anh/chị đã đến chơi.]"
        },
        {
            "id": 97,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xin phép tôi vào. / Xin phép ~.\"",
            "options": [
                "しつれいします",
                "おとうさん",
                "が",
                "べんきょう"
            ],
            "answer": "しつれいします",
            "explain": "✅ [しつれいします|失礼します|Xin phép tôi vào. / Xin phép ~.]"
        },
        {
            "id": 98,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Cái nào\"",
            "options": [
                "パンチ",
                "あつい",
                "ふるい",
                "どれ"
            ],
            "answer": "どれ",
            "explain": "✅ [どれ|どれ|Cái nào]"
        },
        {
            "id": 99,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Xấu\"",
            "options": [
                "スプーン",
                "おいしい",
                "ホッチキス",
                "わるい"
            ],
            "answer": "わるい",
            "explain": "✅ [わるい|悪い|Xấu]"
        },
        {
            "id": 100,
            "section": "Mondai 3",
            "text_context": "Chọn từ đúng nghĩa",
            "question": "意味: \"Anh/Chị có khỏe không?\"",
            "options": [
                "ワープロ",
                "おげんきですか",
                "ヨーロッパ",
                "パンチ"
            ],
            "answer": "おげんきですか",
            "explain": "✅ [おげんきですか|お元気ですか|Anh/Chị có khỏe không?]"
        }
    ]
};

export const GRAMMAR_TESTS: Record<number, Question[]> = {
    "1": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "に",
                "で",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "を",
                "へ",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "に",
                "で",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "へ",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "へ",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "へ",
                "を",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "へ",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "へ",
                "を",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "へ",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "へ",
                "で",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "に",
                "へ",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(あたらしい)",
            "options": [
                "あたらしくないです",
                "あたらしくありません",
                "あたらしじゃないです",
                "あたらしいくないです"
            ],
            "answer": "あたらしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 22,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(さむい)",
            "options": [
                "さむいくないです",
                "さむくありません",
                "さむくないです",
                "さむじゃないです"
            ],
            "answer": "さむくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 23,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おいしい)",
            "options": [
                "おいしくありません",
                "おいしいくないです",
                "おいしくないです",
                "おいしじゃないです"
            ],
            "answer": "おいしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 24,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(たのしい)",
            "options": [
                "たのしくないです",
                "たのしくありません",
                "たのしいくないです",
                "たのしじゃないです"
            ],
            "answer": "たのしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 25,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おおきい)",
            "options": [
                "おおきくないです",
                "おおきじゃないです",
                "おおきいくないです",
                "おおきくありません"
            ],
            "answer": "おおきくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 26,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(やさしい)",
            "options": [
                "やさしくないです",
                "やさしいくないです",
                "やさしくありません",
                "やさしじゃないです"
            ],
            "answer": "やさしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 27,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(いそがしい)",
            "options": [
                "いそがしじゃないです",
                "いそがしいくないです",
                "いそがしくありません",
                "いそがしくないです"
            ],
            "answer": "いそがしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 28,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(あつい)",
            "options": [
                "あつくないです",
                "あついくないです",
                "あつじゃないです",
                "あつくありません"
            ],
            "answer": "あつくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 29,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(いらっしゃってください)",
            "options": [
                "いらっしゃってくださじゃないです",
                "いらっしゃってくださくないです",
                "いらっしゃってくださくありません",
                "いらっしゃってくださいくないです"
            ],
            "answer": "いらっしゃってくださくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 30,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(ちいさい)",
            "options": [
                "ちいさくないです",
                "ちいさくありません",
                "ちいさいくないです",
                "ちいさじゃないです"
            ],
            "answer": "ちいさくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 31,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(あかい)",
            "options": [
                "あかいくないです",
                "あかじゃないです",
                "あかくありません",
                "あかくないです"
            ],
            "answer": "あかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 32,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(あおい)",
            "options": [
                "あおじゃないです",
                "あおくありません",
                "あおくないです",
                "あおいくないです"
            ],
            "answer": "あおくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 33,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(やすい)",
            "options": [
                "やすじゃないです",
                "やすいくないです",
                "やすくありません",
                "やすくないです"
            ],
            "answer": "やすくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 34,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(むずかしい)",
            "options": [
                "むずかしいくないです",
                "むずかしじゃないです",
                "むずかしくありません",
                "むずかしくないです"
            ],
            "answer": "むずかしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 35,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(わるい)",
            "options": [
                "わるじゃないです",
                "わるくありません",
                "わるくないです",
                "わるいくないです"
            ],
            "answer": "わるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 36,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(しちにんのさむらい)",
            "options": [
                "しちにんのさむらいくないです",
                "しちにんのさむらじゃないです",
                "しちにんのさむらくありません",
                "しちにんのさむらくないです"
            ],
            "answer": "しちにんのさむらくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 37,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(ふるい)",
            "options": [
                "ふるくないです",
                "ふるくありません",
                "ふるいくないです",
                "ふるじゃないです"
            ],
            "answer": "ふるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 38,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(ひくい)",
            "options": [
                "ひくじゃないです",
                "ひくくありません",
                "ひくいくないです",
                "ひくくないです"
            ],
            "answer": "ひくくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 39,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おもしろい)",
            "options": [
                "おもしろじゃないです",
                "おもしろくないです",
                "おもしろいくないです",
                "おもしろくありません"
            ],
            "answer": "おもしろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 40,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(たかい)",
            "options": [
                "たかくないです",
                "たかくありません",
                "たかじゃないです",
                "たかいくないです"
            ],
            "answer": "たかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 41,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(きれい [な])",
            "options": [
                "きれい [な]じゃありません",
                "きれい [な]くないです",
                "きれい [な]くありません",
                "きれい [な]です"
            ],
            "answer": "きれい [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 42,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(けっこうです)",
            "options": [
                "けっこうですです",
                "けっこうですくありません",
                "けっこうですくないです",
                "けっこうですじゃありません"
            ],
            "answer": "けっこうですじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 43,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(シャンハイ)",
            "options": [
                "シャンハイじゃありません",
                "シャンハイくないです",
                "シャンハイくありません",
                "シャンハイです"
            ],
            "answer": "シャンハイじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 44,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(なれましたか)",
            "options": [
                "なれましたかじゃありません",
                "なれましたかくないです",
                "なれましたかです",
                "なれましたかくありません"
            ],
            "answer": "なれましたかじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 45,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(どんな)",
            "options": [
                "どんなです",
                "どんなじゃありません",
                "どんなくありません",
                "どんなくないです"
            ],
            "answer": "どんなじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 46,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(いい (よい))",
            "options": [
                "いい (よい)くないです",
                "いい (よい)じゃありません",
                "いい (よい)くありません",
                "いい (よい)です"
            ],
            "answer": "いい (よい)じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 47,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(どう)",
            "options": [
                "どうです",
                "どうくありません",
                "どうくないです",
                "どうじゃありません"
            ],
            "answer": "どうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 48,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ひま [な])",
            "options": [
                "ひま [な]です",
                "ひま [な]くありません",
                "ひま [な]くないです",
                "ひま [な]じゃありません"
            ],
            "answer": "ひま [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 49,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(きんかくじ)",
            "options": [
                "きんかくじです",
                "きんかくじくありません",
                "きんかくじくないです",
                "きんかくじじゃありません"
            ],
            "answer": "きんかくじじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 50,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ハンサム [な])",
            "options": [
                "ハンサム [な]じゃありません",
                "ハンサム [な]くないです",
                "ハンサム [な]くありません",
                "ハンサム [な]です"
            ],
            "answer": "ハンサム [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 51,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(せいかつ)",
            "options": [
                "せいかつです",
                "せいかつじゃありません",
                "せいかつくないです",
                "せいかつくありません"
            ],
            "answer": "せいかつじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 52,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(そうですね)",
            "options": [
                "そうですねくないです",
                "そうですねじゃありません",
                "そうですねです",
                "そうですねくありません"
            ],
            "answer": "そうですねじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 53,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(どれ)",
            "options": [
                "どれくないです",
                "どれじゃありません",
                "どれです",
                "どれくありません"
            ],
            "answer": "どれじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 54,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(しずか [な])",
            "options": [
                "しずか [な]くありません",
                "しずか [な]です",
                "しずか [な]じゃありません",
                "しずか [な]くないです"
            ],
            "answer": "しずか [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 55,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(そして)",
            "options": [
                "そしてじゃありません",
                "そしてくないです",
                "そしてです",
                "そしてくありません"
            ],
            "answer": "そしてじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 56,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ところ)",
            "options": [
                "ところじゃありません",
                "ところくないです",
                "ところくありません",
                "ところです"
            ],
            "answer": "ところじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 57,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(べんり [な])",
            "options": [
                "べんり [な]です",
                "べんり [な]じゃありません",
                "べんり [な]くありません",
                "べんり [な]くないです"
            ],
            "answer": "べんり [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 58,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(さくら)",
            "options": [
                "さくらです",
                "さくらじゃありません",
                "さくらくないです",
                "さくらくありません"
            ],
            "answer": "さくらじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 59,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ふじさん)",
            "options": [
                "ふじさんくないです",
                "ふじさんじゃありません",
                "ふじさんです",
                "ふじさんくありません"
            ],
            "answer": "ふじさんじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 60,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(が)",
            "options": [
                "がです",
                "がくないです",
                "がくありません",
                "がじゃありません"
            ],
            "answer": "がじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 61,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 62,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "まだです",
                "もうです",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 63,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 64,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 65,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "まだしました",
                "もうです",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 66,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "まだしました",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 67,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "もうしました",
                "まだです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 68,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 69,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "まだです",
                "まだしました",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 70,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "もうです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 71,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "もうしました",
                "まだです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 72,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "まだしました",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 73,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうしました",
                "まだです",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 74,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "まだしました",
                "もうです",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 75,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 76,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "もうです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 77,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "もうです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 78,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "まだです",
                "もうです",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 79,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "まだしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 80,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "まだです",
                "もうしました",
                "まだしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "送ります（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "いらっしゃい（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "楽しい（　　）ください。",
            "options": [
                "が",
                "に",
                "で",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "まだ（　　）ください。",
            "options": [
                "を",
                "で",
                "に",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "きれい [な]（　　）ください。",
            "options": [
                "が",
                "を",
                "で",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "楽しい（　　）ください。",
            "options": [
                "に",
                "が",
                "で",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "また いらっしゃって ください（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "これから（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "かけます（　　）ください。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "かけます（　　）ください。",
            "options": [
                "が",
                "で",
                "を",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "失礼します（　　）ください。",
            "options": [
                "に",
                "を",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "車（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "パソコン（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "食べ物（　　）ください。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "貸します（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "琵琶湖（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "いい (よい)（　　）ください。",
            "options": [
                "に",
                "を",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "習います（　　）ください。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "かけます（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "楽しい（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        }
    ],
    "2": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "を",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "を",
                "に",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "へ",
                "で",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "に",
                "へ",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "へ",
                "を",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "を",
                "で",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "へ",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おおきい)",
            "options": [
                "おおきくないです",
                "おおきくありません",
                "おおきじゃないです",
                "おおきいくないです"
            ],
            "answer": "おおきくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 22,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(いそがしい)",
            "options": [
                "いそがしくないです",
                "いそがしくありません",
                "いそがしじゃないです",
                "いそがしいくないです"
            ],
            "answer": "いそがしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 23,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(しろい)",
            "options": [
                "しろくないです",
                "しろいくないです",
                "しろくありません",
                "しろじゃないです"
            ],
            "answer": "しろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 24,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(つめたい)",
            "options": [
                "つめたいくないです",
                "つめたくないです",
                "つめたくありません",
                "つめたじゃないです"
            ],
            "answer": "つめたくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 25,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(ふるい)",
            "options": [
                "ふるくないです",
                "ふるくありません",
                "ふるじゃないです",
                "ふるいくないです"
            ],
            "answer": "ふるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 26,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(やさしい)",
            "options": [
                "やさしじゃないです",
                "やさしくないです",
                "やさしいくないです",
                "やさしくありません"
            ],
            "answer": "やさしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 27,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(いらっしゃってください)",
            "options": [
                "いらっしゃってくださいくないです",
                "いらっしゃってくださじゃないです",
                "いらっしゃってくださくありません",
                "いらっしゃってくださくないです"
            ],
            "answer": "いらっしゃってくださくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 28,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(たかい)",
            "options": [
                "たかくありません",
                "たかくないです",
                "たかいくないです",
                "たかじゃないです"
            ],
            "answer": "たかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 29,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(しちにんのさむらい)",
            "options": [
                "しちにんのさむらくありません",
                "しちにんのさむらくないです",
                "しちにんのさむらいくないです",
                "しちにんのさむらじゃないです"
            ],
            "answer": "しちにんのさむらくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 30,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おもしろい)",
            "options": [
                "おもしろくないです",
                "おもしろくありません",
                "おもしろじゃないです",
                "おもしろいくないです"
            ],
            "answer": "おもしろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 31,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(わるい)",
            "options": [
                "わるくありません",
                "わるじゃないです",
                "わるいくないです",
                "わるくないです"
            ],
            "answer": "わるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 32,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(あかい)",
            "options": [
                "あかくありません",
                "あかじゃないです",
                "あかいくないです",
                "あかくないです"
            ],
            "answer": "あかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 33,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(ちいさい)",
            "options": [
                "ちいさくないです",
                "ちいさくありません",
                "ちいさじゃないです",
                "ちいさいくないです"
            ],
            "answer": "ちいさくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 34,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(たのしい)",
            "options": [
                "たのしいくないです",
                "たのしじゃないです",
                "たのしくないです",
                "たのしくありません"
            ],
            "answer": "たのしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 35,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(あたらしい)",
            "options": [
                "あたらしくないです",
                "あたらしくありません",
                "あたらしいくないです",
                "あたらしじゃないです"
            ],
            "answer": "あたらしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 36,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おいしい)",
            "options": [
                "おいしいくないです",
                "おいしじゃないです",
                "おいしくありません",
                "おいしくないです"
            ],
            "answer": "おいしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 37,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(くろい)",
            "options": [
                "くろじゃないです",
                "くろくありません",
                "くろいくないです",
                "くろくないです"
            ],
            "answer": "くろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 38,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(やすい)",
            "options": [
                "やすじゃないです",
                "やすくありません",
                "やすいくないです",
                "やすくないです"
            ],
            "answer": "やすくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 39,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(ひくい)",
            "options": [
                "ひくくありません",
                "ひくくないです",
                "ひくいくないです",
                "ひくじゃないです"
            ],
            "answer": "ひくくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 40,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(あつい)",
            "options": [
                "あついくないです",
                "あつじゃないです",
                "あつくありません",
                "あつくないです"
            ],
            "answer": "あつくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 41,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(にぎやか [な])",
            "options": [
                "にぎやか [な]くありません",
                "にぎやか [な]くないです",
                "にぎやか [な]じゃありません",
                "にぎやか [な]です"
            ],
            "answer": "にぎやか [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 42,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ところ)",
            "options": [
                "ところじゃありません",
                "ところくないです",
                "ところです",
                "ところくありません"
            ],
            "answer": "ところじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 43,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(そして)",
            "options": [
                "そしてくないです",
                "そしてです",
                "そしてじゃありません",
                "そしてくありません"
            ],
            "answer": "そしてじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 44,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(けっこうです)",
            "options": [
                "けっこうですです",
                "けっこうですじゃありません",
                "けっこうですくないです",
                "けっこうですくありません"
            ],
            "answer": "けっこうですじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 45,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(シャンハイ)",
            "options": [
                "シャンハイじゃありません",
                "シャンハイくないです",
                "シャンハイくありません",
                "シャンハイです"
            ],
            "answer": "シャンハイじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 46,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(せいかつ)",
            "options": [
                "せいかつくないです",
                "せいかつじゃありません",
                "せいかつくありません",
                "せいかつです"
            ],
            "answer": "せいかつじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 47,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(りょう)",
            "options": [
                "りょうくありません",
                "りょうです",
                "りょうくないです",
                "りょうじゃありません"
            ],
            "answer": "りょうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 48,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ハンサム [な])",
            "options": [
                "ハンサム [な]くありません",
                "ハンサム [な]です",
                "ハンサム [な]くないです",
                "ハンサム [な]じゃありません"
            ],
            "answer": "ハンサム [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 49,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(が)",
            "options": [
                "がじゃありません",
                "がくないです",
                "がです",
                "がくありません"
            ],
            "answer": "がじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 50,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(べんきょう)",
            "options": [
                "べんきょうです",
                "べんきょうくありません",
                "べんきょうくないです",
                "べんきょうじゃありません"
            ],
            "answer": "べんきょうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 51,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(おげんきですか)",
            "options": [
                "おげんきですかくありません",
                "おげんきですかじゃありません",
                "おげんきですかです",
                "おげんきですかくないです"
            ],
            "answer": "おげんきですかじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 52,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ゆうめい [な])",
            "options": [
                "ゆうめい [な]くありません",
                "ゆうめい [な]です",
                "ゆうめい [な]じゃありません",
                "ゆうめい [な]くないです"
            ],
            "answer": "ゆうめい [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 53,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(きれい [な])",
            "options": [
                "きれい [な]じゃありません",
                "きれい [な]くないです",
                "きれい [な]くありません",
                "きれい [な]です"
            ],
            "answer": "きれい [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 54,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(あまり)",
            "options": [
                "あまりくありません",
                "あまりくないです",
                "あまりじゃありません",
                "あまりです"
            ],
            "answer": "あまりじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 55,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(しつれいします)",
            "options": [
                "しつれいしますじゃありません",
                "しつれいしますくないです",
                "しつれいしますです",
                "しつれいしますくありません"
            ],
            "answer": "しつれいしますじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 56,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(そうですね)",
            "options": [
                "そうですねじゃありません",
                "そうですねくないです",
                "そうですねくありません",
                "そうですねです"
            ],
            "answer": "そうですねじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 57,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(とても)",
            "options": [
                "とてもじゃありません",
                "とてもくないです",
                "とてもくありません",
                "とてもです"
            ],
            "answer": "とてもじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 58,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(べんり [な])",
            "options": [
                "べんり [な]じゃありません",
                "べんり [な]くないです",
                "べんり [な]です",
                "べんり [な]くありません"
            ],
            "answer": "べんり [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 59,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(きんかくじ)",
            "options": [
                "きんかくじくありません",
                "きんかくじじゃありません",
                "きんかくじです",
                "きんかくじくないです"
            ],
            "answer": "きんかくじじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 60,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(たべもの)",
            "options": [
                "たべものです",
                "たべものじゃありません",
                "たべものくないです",
                "たべものくありません"
            ],
            "answer": "たべものじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 61,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "しませんでした",
                "もうです",
                "まだしました",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 62,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 63,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうしました",
                "まだです",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 64,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "しませんでした",
                "もうです",
                "まだしました",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 65,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "まだです",
                "しませんでした",
                "もうです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 66,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "まだです",
                "もうしました",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 67,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "もうです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 68,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 69,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...いいえ、（　　）。",
            "options": [
                "もうです",
                "まだです",
                "まだしました",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 70,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 71,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 72,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだしました",
                "まだです",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 73,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "もうです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 74,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 75,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "まだしました",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 76,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "もうです",
                "まだです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 77,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "まだしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 78,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだしました",
                "まだです",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 79,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 80,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "もうです",
                "しませんでした",
                "まだしました",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "クリスマス（　　）ください。",
            "options": [
                "で",
                "を",
                "が",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "金閣寺（　　）ください。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "易しい（　　）ください。",
            "options": [
                "に",
                "が",
                "を",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "送ります（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "借ります（　　）ください。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "暇 [な]（　　）ください。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "箸（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "親切 [な]（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "どんな（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "難しい（　　）ください。",
            "options": [
                "に",
                "で",
                "が",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "古い（　　）ください。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "もらいます（　　）ください。",
            "options": [
                "に",
                "を",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "荷物（　　）ください。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "あまり（　　）ください。",
            "options": [
                "を",
                "が",
                "で",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "パソコン（　　）ください。",
            "options": [
                "を",
                "に",
                "が",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "町（　　）ください。",
            "options": [
                "が",
                "で",
                "を",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "青い（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "難しい（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "いい (よい)（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "プレゼント（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        }
    ],
    "3": [
        {
            "id": 1,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 2,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "を",
                "へ",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 3,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 4,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "へ",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 5,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "を",
                "に",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 6,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "を",
                "へ",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 7,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "へ",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 8,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "に",
                "で",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 9,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 10,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "を",
                "へ",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 11,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "へ",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 12,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 13,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "で",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 14,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 15,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "はさみ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "で",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 16,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "ナイフ（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "で",
                "に",
                "を",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 17,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "箸（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "で",
                "に",
                "を"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 18,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "スプーン（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "に",
                "を",
                "で",
                "へ"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 19,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "かけます（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "を",
                "で",
                "へ",
                "に"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 20,
            "section": "Mondai 1: Trợ từ (Phương tiện)",
            "question": "手（　　）ご飯を食べます/切ります/書きます。",
            "options": [
                "へ",
                "を",
                "に",
                "で"
            ],
            "answer": "で",
            "explain": "✅ Chỉ phương tiện/công cụ dùng trợ từ [で]."
        },
        {
            "id": 21,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(ふるい)",
            "options": [
                "ふるくありません",
                "ふるくないです",
                "ふるじゃないです",
                "ふるいくないです"
            ],
            "answer": "ふるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 22,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(たのしい)",
            "options": [
                "たのしじゃないです",
                "たのしくないです",
                "たのしくありません",
                "たのしいくないです"
            ],
            "answer": "たのしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 23,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(やすい)",
            "options": [
                "やすくないです",
                "やすくありません",
                "やすじゃないです",
                "やすいくないです"
            ],
            "answer": "やすくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 24,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(わるい)",
            "options": [
                "わるじゃないです",
                "わるくありません",
                "わるいくないです",
                "わるくないです"
            ],
            "answer": "わるくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 25,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(あたらしい)",
            "options": [
                "あたらしくないです",
                "あたらしくありません",
                "あたらしじゃないです",
                "あたらしいくないです"
            ],
            "answer": "あたらしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 26,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(しちにんのさむらい)",
            "options": [
                "しちにんのさむらくないです",
                "しちにんのさむらいくないです",
                "しちにんのさむらくありません",
                "しちにんのさむらじゃないです"
            ],
            "answer": "しちにんのさむらくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 27,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(おもしろい)",
            "options": [
                "おもしろくありません",
                "おもしろくないです",
                "おもしろいくないです",
                "おもしろじゃないです"
            ],
            "answer": "おもしろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 28,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(あつい)",
            "options": [
                "あつくないです",
                "あつくありません",
                "あつじゃないです",
                "あついくないです"
            ],
            "answer": "あつくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 29,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(たかい)",
            "options": [
                "たかくありません",
                "たかくないです",
                "たかいくないです",
                "たかじゃないです"
            ],
            "answer": "たかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 30,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(しろい)",
            "options": [
                "しろいくないです",
                "しろくないです",
                "しろくありません",
                "しろじゃないです"
            ],
            "answer": "しろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 31,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(あかい)",
            "options": [
                "あかじゃないです",
                "あかくありません",
                "あかくないです",
                "あかいくないです"
            ],
            "answer": "あかくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 32,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(ちいさい)",
            "options": [
                "ちいさいくないです",
                "ちいさじゃないです",
                "ちいさくありません",
                "ちいさくないです"
            ],
            "answer": "ちいさくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 33,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(くろい)",
            "options": [
                "くろいくないです",
                "くろじゃないです",
                "くろくありません",
                "くろくないです"
            ],
            "answer": "くろくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 34,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(いそがしい)",
            "options": [
                "いそがしくないです",
                "いそがしくありません",
                "いそがしじゃないです",
                "いそがしいくないです"
            ],
            "answer": "いそがしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 35,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "今日の天気は　あまり（　　）。(むずかしい)",
            "options": [
                "むずかしいくないです",
                "むずかしくありません",
                "むずかしじゃないです",
                "むずかしくないです"
            ],
            "answer": "むずかしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 36,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "あの映画は　あまり（　　）。(やさしい)",
            "options": [
                "やさしくありません",
                "やさしいくないです",
                "やさしじゃないです",
                "やさしくないです"
            ],
            "answer": "やさしくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 37,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(いらっしゃってください)",
            "options": [
                "いらっしゃってくださじゃないです",
                "いらっしゃってくださくありません",
                "いらっしゃってくださくないです",
                "いらっしゃってくださいくないです"
            ],
            "answer": "いらっしゃってくださくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 38,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(つめたい)",
            "options": [
                "つめたくないです",
                "つめたくありません",
                "つめたじゃないです",
                "つめたいくないです"
            ],
            "answer": "つめたくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 39,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "その本は　あまり（　　）。(さむい)",
            "options": [
                "さむじゃないです",
                "さむくありません",
                "さむくないです",
                "さむいくないです"
            ],
            "answer": "さむくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 40,
            "section": "Mondai 2: Chia tính từ (Đuôi I)",
            "question": "この料理は　あまり（　　）。(おおきい)",
            "options": [
                "おおきいくないです",
                "おおきじゃないです",
                "おおきくありません",
                "おおきくないです"
            ],
            "answer": "おおきくないです",
            "explain": "✅ Tính từ đuôi I phủ định: bỏ i thêm kunai."
        },
        {
            "id": 41,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(げんき [な])",
            "options": [
                "げんき [な]くありません",
                "げんき [な]です",
                "げんき [な]くないです",
                "げんき [な]じゃありません"
            ],
            "answer": "げんき [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 42,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(ハンサム [な])",
            "options": [
                "ハンサム [な]です",
                "ハンサム [な]くありません",
                "ハンサム [な]くないです",
                "ハンサム [な]じゃありません"
            ],
            "answer": "ハンサム [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 43,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(たべもの)",
            "options": [
                "たべものじゃありません",
                "たべものです",
                "たべものくないです",
                "たべものくありません"
            ],
            "answer": "たべものじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 44,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(いい (よい))",
            "options": [
                "いい (よい)です",
                "いい (よい)くありません",
                "いい (よい)くないです",
                "いい (よい)じゃありません"
            ],
            "answer": "いい (よい)じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 45,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(いかがですか)",
            "options": [
                "いかがですかです",
                "いかがですかくありません",
                "いかがですかくないです",
                "いかがですかじゃありません"
            ],
            "answer": "いかがですかじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 46,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(くるま)",
            "options": [
                "くるまです",
                "くるまじゃありません",
                "くるまくないです",
                "くるまくありません"
            ],
            "answer": "くるまじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 47,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(すてき [な])",
            "options": [
                "すてき [な]じゃありません",
                "すてき [な]くないです",
                "すてき [な]くありません",
                "すてき [な]です"
            ],
            "answer": "すてき [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 48,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(あまり)",
            "options": [
                "あまりくありません",
                "あまりじゃありません",
                "あまりくないです",
                "あまりです"
            ],
            "answer": "あまりじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 49,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(やま)",
            "options": [
                "やまじゃありません",
                "やまです",
                "やまくないです",
                "やまくありません"
            ],
            "answer": "やまじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 50,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(なれましたか)",
            "options": [
                "なれましたかじゃありません",
                "なれましたかです",
                "なれましたかくないです",
                "なれましたかくありません"
            ],
            "answer": "なれましたかじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 51,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(りょう)",
            "options": [
                "りょうじゃありません",
                "りょうくありません",
                "りょうです",
                "りょうくないです"
            ],
            "answer": "りょうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 52,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(とても)",
            "options": [
                "とてもです",
                "とてもじゃありません",
                "とてもくないです",
                "とてもくありません"
            ],
            "answer": "とてもじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 53,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(きれい [な])",
            "options": [
                "きれい [な]くありません",
                "きれい [な]です",
                "きれい [な]くないです",
                "きれい [な]じゃありません"
            ],
            "answer": "きれい [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 54,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(さくら)",
            "options": [
                "さくらじゃありません",
                "さくらです",
                "さくらくないです",
                "さくらくありません"
            ],
            "answer": "さくらじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 55,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(べんきょう)",
            "options": [
                "べんきょうです",
                "べんきょうくありません",
                "べんきょうくないです",
                "べんきょうじゃありません"
            ],
            "answer": "べんきょうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 56,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(びわこ)",
            "options": [
                "びわこくないです",
                "びわこじゃありません",
                "びわこくありません",
                "びわこです"
            ],
            "answer": "びわこじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 57,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(せいかつ)",
            "options": [
                "せいかつくないです",
                "せいかつじゃありません",
                "せいかつです",
                "せいかつくありません"
            ],
            "answer": "せいかつじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 58,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(べんり [な])",
            "options": [
                "べんり [な]です",
                "べんり [な]じゃありません",
                "べんり [な]くないです",
                "べんり [な]くありません"
            ],
            "answer": "べんり [な]じゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 59,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(どう)",
            "options": [
                "どうです",
                "どうくありません",
                "どうくないです",
                "どうじゃありません"
            ],
            "answer": "どうじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 60,
            "section": "Mondai 3: Chia tính từ (Đuôi Na)",
            "question": "この町は　あまり（　　）。(どんな)",
            "options": [
                "どんなです",
                "どんなくありません",
                "どんなくないです",
                "どんなじゃありません"
            ],
            "answer": "どんなじゃありません",
            "explain": "✅ Tính từ đuôi Na phủ định: thêm ja arimasen."
        },
        {
            "id": 61,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "もうです",
                "まだしました",
                "しませんでした",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 62,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "もうです",
                "まだです",
                "まだしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 63,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 64,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "まだしました",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 65,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 66,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "まだしました",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 67,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうです",
                "まだしました",
                "もうしました",
                "まだです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 68,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "まだです",
                "まだしました",
                "もうしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 69,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "まだです",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 70,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 71,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 72,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 73,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "まだしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 74,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　食べましたか。 ...いいえ、（　　）。",
            "options": [
                "もうです",
                "まだしました",
                "しませんでした",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 75,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...はい、（　　）。",
            "options": [
                "まだしました",
                "もうです",
                "まだです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 76,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "しませんでした",
                "まだしました"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 77,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　書きましたか。 ...いいえ、（　　）。",
            "options": [
                "まだしました",
                "しませんでした",
                "もうです",
                "まだです"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 78,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...はい、（　　）。",
            "options": [
                "もうしました",
                "まだです",
                "まだしました",
                "もうです"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 79,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　送りましたか。 ...いいえ、（　　）。",
            "options": [
                "まだです",
                "もうです",
                "まだしました",
                "しませんでした"
            ],
            "answer": "まだです",
            "explain": "✅ Trả lời câu hỏi Mou (chưa): Iie, mada desu (Chưa, vẫn chưa)."
        },
        {
            "id": 80,
            "section": "Mondai 4: Đã ... chưa",
            "question": "もう　買いましたか。 ...はい、（　　）。",
            "options": [
                "まだです",
                "まだしました",
                "もうです",
                "もうしました"
            ],
            "answer": "もうしました",
            "explain": "✅ Trả lời câu hỏi Mou (đã): Hai, mou shimashita (Vâng, đã làm rồi)."
        },
        {
            "id": 81,
            "section": "Mondai 5: Tổng hợp",
            "question": "シャツ（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 82,
            "section": "Mondai 5: Tổng hợp",
            "question": "悪い（　　）ください。",
            "options": [
                "で",
                "が",
                "を",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 83,
            "section": "Mondai 5: Tổng hợp",
            "question": "お金（　　）ください。",
            "options": [
                "を",
                "で",
                "が",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 84,
            "section": "Mondai 5: Tổng hợp",
            "question": "難しい（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 85,
            "section": "Mondai 5: Tổng hợp",
            "question": "そろそろ失礼します（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 86,
            "section": "Mondai 5: Tổng hợp",
            "question": "古い（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 87,
            "section": "Mondai 5: Tổng hợp",
            "question": "母（　　）ください。",
            "options": [
                "に",
                "を",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 88,
            "section": "Mondai 5: Tổng hợp",
            "question": "かけます（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 89,
            "section": "Mondai 5: Tổng hợp",
            "question": "教えます（　　）ください。",
            "options": [
                "で",
                "が",
                "を",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 90,
            "section": "Mondai 5: Tổng hợp",
            "question": "スペイン（　　）ください。",
            "options": [
                "が",
                "を",
                "に",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 91,
            "section": "Mondai 5: Tổng hợp",
            "question": "習います（　　）ください。",
            "options": [
                "に",
                "で",
                "を",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 92,
            "section": "Mondai 5: Tổng hợp",
            "question": "古い（　　）ください。",
            "options": [
                "で",
                "が",
                "を",
                "に"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 93,
            "section": "Mondai 5: Tổng hợp",
            "question": "寒い（　　）ください。",
            "options": [
                "に",
                "を",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 94,
            "section": "Mondai 5: Tổng hợp",
            "question": "勉強（　　）ください。",
            "options": [
                "が",
                "に",
                "を",
                "で"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 95,
            "section": "Mondai 5: Tổng hợp",
            "question": "黒い（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 96,
            "section": "Mondai 5: Tổng hợp",
            "question": "親切 [な]（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 97,
            "section": "Mondai 5: Tổng hợp",
            "question": "ヨーロッパ（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 98,
            "section": "Mondai 5: Tổng hợp",
            "question": "暇 [な]（　　）ください。",
            "options": [
                "に",
                "を",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 99,
            "section": "Mondai 5: Tổng hợp",
            "question": "おいしい（　　）ください。",
            "options": [
                "を",
                "に",
                "で",
                "が"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        },
        {
            "id": 100,
            "section": "Mondai 5: Tổng hợp",
            "question": "ファクス（　　）ください。",
            "options": [
                "が",
                "で",
                "に",
                "を"
            ],
            "answer": "を",
            "explain": "✅ Cấu trúc O kudasai (Hãy cho tôi O)."
        }
    ]
};
