
export interface NumberItem {
    id: number;
    numeral: string;
    romaji: string;
    hiragana: string; // Using hiragana field as "reading" for consistency, or we can use standard Triple Layer in example-like display
}

// For this grid, since it's a reference list (0, 1, 2...), the standard sentence format might be too verbose.
// But user requested "theo form của grid trợ từ" (same form as particles).
// Particles grid has: Character -> Explanation -> Examples.
// The image shows a list: 0 zero, 1 ichi...
// To fit the "Particles Form":
// We can group them: 0-10, 11-20, Large Numbers, etc.
// Each "Item" is a range or a category.
// Examples will be the numbers themselves with Triple Layer Furigana in a "sentence" slot.

export interface NumberGroup {
    id: number;
    title: string;
    items: {
        sentence: string; // Will store "[Kanji|Reading|Meaning]" or just "[Num|Reading|Meaning]"
        meaning: string;
    }[];
}

export const NUMBERS_DATA: NumberGroup[] = [
    {
        id: 1,
        title: 'Số đếm cơ bản (0 - 10)',
        items: [
            { sentence: '0 [ゼロ/れい|zero/rei|Không]', meaning: 'Hoặc maru (tròn)' },
            { sentence: '1 [いち|ichi|Một]', meaning: '' },
            { sentence: '2 [に|ni|Hai]', meaning: '' },
            { sentence: '3 [さん|san|Ba]', meaning: '' },
            { sentence: '4 [よん/し|yon/shi|Bốn]', meaning: 'Thường dùng yon' },
            { sentence: '5 [ご|go|Năm]', meaning: '' },
            { sentence: '6 [ろく|roku|Sáu]', meaning: '' },
            { sentence: '7 [なな/しち|nana/shichi|Bảy]', meaning: 'Thường dùng nana' },
            { sentence: '8 [はち|hachi|Tám]', meaning: '' },
            { sentence: '9 [きゅう/く|kyuu/ku|Chín]', meaning: 'Thường dùng kyuu' },
            { sentence: '10 [じゅう|juu|Mười]', meaning: '' }
        ]
    },
    {
        id: 2,
        title: 'Số đếm (11 - 19)',
        items: [
            { sentence: '11 [じゅういち|juu-ichi|Mười một]', meaning: '' },
            { sentence: '12 [じゅうに|juu-ni|Mười hai]', meaning: '' },
            { sentence: '13 [じゅうさん|juu-san|Mười ba]', meaning: '' },
            { sentence: '14 [じゅうよん/じゅうし|juu-yon/juu-shi|Mười bốn]', meaning: '' },
            { sentence: '15 [じゅうご|juu-go|Mười lăm]', meaning: '' },
            { sentence: '16 [じゅうろく|juu-roku|Mười sáu]', meaning: '' },
            { sentence: '17 [じゅうなな/じゅうしち|juu-nana/juu-shichi|Mười bảy]', meaning: '' },
            { sentence: '18 [じゅうはち|juu-hachi|Mười tám]', meaning: '' },
            { sentence: '19 [じゅうきゅう/じゅうく|juu-kyuu/juu-ku|Mười chín]', meaning: '' }
        ]
    },
    {
        id: 3,
        title: 'Hàng chục (20 - 90)',
        items: [
            { sentence: '20 [にじゅう|ni-juu|Hai mươi]', meaning: '' },
            { sentence: '30 [さんじゅう|san-juu|Ba mươi]', meaning: '' },
            { sentence: '40 [よんじゅう|yon-juu|Bốn mươi]', meaning: 'Chú ý: Yon-juu (không phải Shi-juu)' },
            { sentence: '50 [ごじゅう|go-juu|Năm mươi]', meaning: '' },
            { sentence: '60 [ろくじゅう|roku-juu|Sáu mươi]', meaning: '' },
            { sentence: '70 [ななじゅう/しちじゅう|nana-juu|Bảy mươi]', meaning: '' },
            { sentence: '80 [はちじゅう|hachi-juu|Tám mươi]', meaning: '' },
            { sentence: '90 [きゅうじゅう|kyuu-juu|Chín mươi]', meaning: '' }
        ]
    },
    {
        id: 4,
        title: 'Hàng trăm (100 - 900)',
        items: [
            { sentence: '100 [ひゃく|hyaku|Một trăm]', meaning: '' },
            { sentence: '200 [にひゃく|ni-hyaku|Hai trăm]', meaning: '' },
            { sentence: '300 [さんびゃく|san-byaku|Ba trăm]', meaning: 'Biến âm: byaku' },
            { sentence: '400 [よんひゃく|yon-hyaku|Bốn trăm]', meaning: '' },
            { sentence: '500 [ごひゃく|go-hyaku|Năm trăm]', meaning: '' },
            { sentence: '600 [ろっぴゃく|roppyaku|Sáu trăm]', meaning: 'Biến âm: roppyaku' },
            { sentence: '700 [ななひゃく|nana-hyaku|Bảy trăm]', meaning: '' },
            { sentence: '800 [はっぴゃく|happyaku|Tám trăm]', meaning: 'Biến âm: happyaku' },
            { sentence: '900 [きゅうひゃく|kyuu-hyaku|Chín trăm]', meaning: '' }
        ]
    },
    {
        id: 5,
        title: 'Hàng nghìn (1,000 - 9,000)',
        items: [
            { sentence: '1,000 [せん|sen|Một nghìn]', meaning: 'Không nói "ichi-sen", chỉ nói "sen"' },
            { sentence: '2,000 [にせん|ni-sen|Hai nghìn]', meaning: '' },
            { sentence: '3,000 [さんぜん|san-zen|Ba nghìn]', meaning: 'Biến âm: san-zen' },
            { sentence: '4,000 [よんせん|yon-sen|Bốn nghìn]', meaning: '' },
            { sentence: '5,000 [ごせん|go-sen|Năm nghìn]', meaning: '' },
            { sentence: '6,000 [ろくせん|roku-sen|Sáu nghìn]', meaning: '' },
            { sentence: '7,000 [ななせん|nana-sen|Bảy nghìn]', meaning: '' },
            { sentence: '8,000 [はっせん|hassen|Tám nghìn]', meaning: 'Biến âm: hassen' },
            { sentence: '9,000 [きゅうせん|kyuu-sen|Chín nghìn]', meaning: '' }
        ]
    },
    {
        id: 6,
        title: 'Hàng vạn & Lớn hơn',
        items: [
            { sentence: '10,000 [いちまん|ichi-man|Một vạn (10 nghìn)]', meaning: 'Tiếng Nhật đếm theo vạn (4 số 0)' },
            { sentence: '100,000 [じゅうまん|juu-man|Mười vạn (100 nghìn)]', meaning: '' },
            { sentence: '1,000,000 [ひゃくまん|hyaku-man|Một triệu]', meaning: 'Trăm vạn' },
            { sentence: '10,000,000 [せんまん|sen-man|Mười triệu]', meaning: 'Nghìn vạn' },
            { sentence: '100,000,000 [いちおく|ichi-oku|Một trăm triệu]', meaning: 'Một ức (Oku)' }
        ]
    },
    {
        id: 7,
        title: 'Số thập phân & Phân số',
        items: [
            { sentence: '17.5 [じゅうななてんご|juu-nana ten go|17.5]', meaning: 'Dấu chấm đọc là "ten"' },
            { sentence: '0.83 [れいてんはちさん|rei ten hachi san|0.83]', meaning: '' },
            { sentence: '1/2 [にぶんのいち|ni bun no ichi|Một phần hai]', meaning: 'Mẫu số + bun no + Tử số' },
            { sentence: '3/4 [よんぶんのさん|yon bun no san|Ba phần bốn]', meaning: '' }
        ]
    }
];
