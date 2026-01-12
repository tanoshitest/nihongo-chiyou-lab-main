/**
 * Script to expand minnaTest12Data.ts to 100 questions
 * Lessons 23-25: とき, ~たら, ~ても, ~と, giving/receiving verbs
 */

const fs = require('fs');
const path = require('path');

// Import existing data
const existingData = `export interface Question {
    id: number;
    section?: string;
    text_context?: string;
    question: string;
    options: string[];
    answer: string;
    explain: string;
}

const TEST_12_DATA: Question[] = [
    // Existing 10 questions kept as is
    {
        id: 1,
        section: "Mondai 1",
        question: "道を　_____　とき、　車に　気をつけて　ください。",
        options: ["わたる", "のぼる", "とまる", "あるく"],
        answer: "わたる",
        explain: "✅ [渡る|わたる|Băng qua]. Michi wo watarimasu.\\n❌ [のぼる|Leo lên], [とまる|Dừng lại], [あるく|Đi bộ]."
    },
    {
        id: 2,
        section: "Mondai 1", 
        question: "みちが　わかりませんから、　ちずを　_____　ください。",
        options: ["かいて", "きいて", "みて", "やって"],
        answer: "かいて",
        explain: "✅ [書いて|かいて|Vẽ]. Chizu wo kakimasu.\\n❌ [きいて|Nghe], [みて|Xem], [やって|Làm]."
    },
    {
        id: 3,
        section: "Mondai 1",
        question: "としょかんへ　いく　と、　_____　を　まがって　ください。",
        options: ["きっぷ", "かど", "へや", "いす"],
        answer: "かど",
        explain: "✅ [角|かど|Góc đường]. Kado wo magarimasu.\\n❌ [きっぷ|Vé], [へや|Phòng], [いす|Ghế]."
    },
    {
        id: 4,
        section: "Mondai 1",
        question: "わたしは　きょう　母に　花を　_____。",
        options: ["くれました", "あげました", "もらいました", "借りました"],
        answer: "あげました",
        explain: "✅ [あげます|Tặng - cho người khác]. Tôi tặng hoa cho mẹ.\\n❌ [くれます|Người khác cho mình], [もらいます|Được nhận], [借ります|Mượn]."
    },
    {
        id: 5,
        section: "Mondai 1",
        question: "山田さんは　[しゅうり]が　上手です。",
        options: ["修理", "料理", "授業", "住所"],
        answer: "修理",
        explain: "✅ [修理|しゅうり|Sửa chữa].\\n❌ [料理|Nấu ăn], [授業|Lớp học], [住所|Địa chỉ]."
    },
    {
        id: 6,
        section: "Mondai 1",
        question: "この　ボタンを　_____、　おつりが　出ます。",
        options: ["おすと", "おしたら", "おしても", "おそう"],
        answer: "おすと",
        explain: "✅ Mẫu [V-ru + と]: Hễ làm A thì B xảy ra (kết quả tất yếu).\\n❌ [～たら|Điều kiện giả định], [～ても|Dù có], [おそう|Sai form]."
    },
    {
        id: 7,
        section: "Mondai 1",
        question: "あめが　_____、　出かけません。",
        options: ["ふったら", "ふっても", "ふると", "ふる"],
        answer: "ふったら",
        explain: "✅ Mẫu [～たら]: Nếu ~ thì (giả định).\\n❌ [～ても|Dù có], [～と|Kết quả tất yếu], [ふる|Dictionary form]."
    },
    {
        id: 8,
        section: "Mondai 1",
        question: "いくら　_____、　わかりません。",
        options: ["かんがえても", "かんがえたら", "かんがえると", "かんがえる"],
        answer: "かんがえても",
        explain: "✅ Mẫu [いくら～ても]: Dù ~ thế nào đi nữa.\\n❌ [～たら|Nếu], [～と|Kết quả], [Dictionary form]."
    },
    {
        id: 9,
        section: "Mondai 1",
        question: "わたしは　佐藤さんに　傘を　かして　_____。",
        options: ["あげました", "くれました", "もらいました", "やりました"],
        answer: "もらいました",
        explain: "✅ [V-te もらいます]: Được ai đó làm cho. Tôi được Sato cho mượn ô.\\n❌ [あげました|Tôi cho], [くれました|Người khác cho tôi], [やりました|Cho (hạ bối)]."
    },
    {
        id: 10,
        section: "Mondai 1",
        question: "部長は　わたしに　お土産を　_____。",
        options: ["くださいました", "いただきました", "やりました", "あげました"],
        answer: "くださいました",
        explain: "✅ [くださいます]: Bề trên cho mình (kính ngữ).\\n❌ [いただきます|Mình nhận từ bề trên], [やります|Cho hạ bối], [あげます|Cho ngang hàng]."
    },`;

// Due to the length limitation, I'll write this to a separate file for reference
const filePath = path.join(__dirname, 'src', 'data', 'minnaTest12Data_expanded.tmp');

console.log('This script would need to be run separately. For now, I will manually add the questions.');
