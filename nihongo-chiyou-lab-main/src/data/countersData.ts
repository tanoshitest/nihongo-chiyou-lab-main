
export interface CounterGroup {
    id: number;
    title: string;
    items: {
        category: string;
        description: string;
        imageHint?: string;
        list: { num: number; value: string; romaji?: string }[];
        question: string;
    }[];
}

export const COUNTERS: CounterGroup[] = [
    {
        id: 1,
        title: 'Cơ bản, Người, Thứ tự',
        items: [
            {
                category: 'Đồ vật nói chung',
                description: 'Dùng cho đồ vật nhỏ, hoặc đồ vật chưa biết tên đếm cụ thể (cái)',
                list: [
                    { num: 1, value: '[一|ひと]つ' }, { num: 2, value: '[二|ふた]つ' }, { num: 3, value: '[三|みっ]つ' }, { num: 4, value: '[四|よっ]つ' },
                    { num: 5, value: '[五|いつ]つ' }, { num: 6, value: '[六|むっ]つ' }, { num: 7, value: '[七|なな]つ' }, { num: 8, value: '[八|やっ]つ' },
                    { num: 9, value: '[九|ここの]つ' }, { num: 10, value: '[十|とお]' }
                ],
                question: '[幾|いく]つ (Mấy cái?)'
            },
            {
                category: 'Người',
                description: 'Đếm số lượng người (người)',
                list: [
                    { num: 1, value: '[一人|ひとり]' }, { num: 2, value: '[二人|ふたり]' }, { num: 3, value: '[三人|さんにん]' }, { num: 4, value: '[四人|よにん]' },
                    { num: 5, value: '5[人|にん]' }, { num: 6, value: '6[人|にん]' }, { num: 7, value: '7[人|ななにん/しちにん]' }, { num: 8, value: '8[人|はちにん]' },
                    { num: 9, value: '9[人|きゅうにん]' }, { num: 10, value: '10[人|じゅうにん]' }
                ],
                question: '[何人|なんにん] (Mấy người?)'
            },
            {
                category: 'Số thứ tự',
                description: 'Thứ nhất, thứ hai...',
                list: [
                    { num: 1, value: '[一番|いちばん]' }, { num: 2, value: '[二番|にばん]' }, { num: 3, value: '[三番|さんばん]' }
                ],
                question: '[何番|なんばん] (Số mấy/Thứ mấy?)'
            }
        ]
    },
    {
        id: 2,
        title: 'Vật mỏng, Máy móc, Tuổi',
        items: [
            {
                category: 'Vật mỏng',
                description: 'Giấy, áo sơ mi, đĩa CD, vé... (tờ/mai/chiếc)',
                list: [
                    { num: 1, value: '1[枚|まい]' }, { num: 2, value: '2[枚|まい]' }, { num: 3, value: '3[枚|まい]' }, { num: 4, value: '4[枚|よんまい]' },
                    { num: 5, value: '5[枚|まい]' }, { num: 6, value: '6[枚|まい]' }, { num: 7, value: '7[枚|ななまい]' }, { num: 8, value: '8[枚|まい]' },
                    { num: 9, value: '9[枚|きゅうまい]' }, { num: 10, value: '10[枚|まい]' }
                ],
                question: '[何枚|なんまい] (Mấy tờ?)'
            },
            {
                category: 'Máy móc, Xe cộ',
                description: 'Xe hơi, xe đạp, máy tính, tivi... (chiếc/cái)',
                list: [
                    { num: 1, value: '1[台|だい]' }, { num: 2, value: '2[台|だい]' }, { num: 3, value: '3[台|だい]' }, { num: 4, value: '4[台|よんだい]' }
                ],
                question: '[何台|なんだい] (Mấy chiếc?)'
            },
            {
                category: 'Tuổi',
                description: 'Tuổi tác',
                list: [
                    { num: 1, value: '[一歳|いっさい]' }, { num: 8, value: '[八歳|はっさい]' }, { num: 10, value: '[十歳|じゅっさい/じっさい]' }, { num: 20, value: '[二十歳|はたち]' }
                ],
                question: '[何歳|なんさい] / おいくつ (Mấy tuổi?)'
            }
        ]
    },
    {
        id: 3,
        title: 'Sách vở & Quần áo',
        items: [
            {
                category: 'Sách, vở',
                description: 'Quyển sách, quyển vở, từ điển... (quyển)',
                list: [
                    { num: 1, value: '[一冊|いっさつ]' }, { num: 8, value: '[八冊|はっさつ]' }, { num: 10, value: '[十冊|じゅっさつ]' }
                ],
                question: '[何冊|なんさつ] (Mấy quyển?)'
            },
            {
                category: 'Quần áo (cả bộ)',
                description: 'Com lê... (bộ)',
                list: [
                    { num: 1, value: '[一着|いっちゃく]' }, { num: 8, value: '[八着|はっちゃく]' }, { num: 10, value: '[十着|じゅっちゃく]' }
                ],
                question: '[何着|なんちゃく] (Mấy bộ?)'
            }
        ]
    },
    {
        id: 4,
        title: 'Tần suất, Giày tất, Nhà cửa',
        items: [
            {
                category: 'Lần (Tần suất)',
                description: 'Số lần thực hiện hành động (lần)',
                list: [
                    { num: 1, value: '[一回|いっかい]' }, { num: 6, value: '[六回|ろっかい]' }, { num: 8, value: '[八回|はっかい]' }, { num: 10, value: '[十回|じゅっかい]' }
                ],
                question: '[何回|なんかい] (Mấy lần?)'
            },
            {
                category: 'Giày, tất (đôi)',
                description: 'Đếm theo đôi: Giày, tất... (đôi)',
                list: [
                    { num: 1, value: '[一足|いっそく]' }, { num: 3, value: '[三足|さんぞく]' }, { num: 8, value: '[八足|はっそく]' }, { num: 10, value: '[十足|じゅっそく]' }
                ],
                question: '[何足|なんぞく] (Mấy đôi?)'
            },
            {
                category: 'Nhà cửa',
                description: 'Đếm ngôi nhà... (căn)',
                list: [
                    { num: 1, value: '[一軒|いっけん]' }, { num: 3, value: '[三軒|さんがん]' }, { num: 6, value: '[六軒|ろっけん]' }, { num: 10, value: '[十軒|じゅっけん]' }
                ],
                question: '[何軒|なんげん] (Mấy căn?)'
            },
            {
                category: 'Tầng lầu',
                description: 'Đếm tầng nhà (-kai hoặc -gai)',
                list: [
                    { num: 1, value: '[一階|いっかい]' }, { num: 3, value: '[三階|さんがい]' }, { num: 6, value: '[六階|ろっかい]' }
                ],
                question: '[何階|なんがい] (Tầng mấy?)'
            }
        ]
    },
    {
        id: 5,
        title: 'Vật thon dài, Ly/Cốc, Động vật',
        items: [
            {
                category: 'Vật thon dài',
                description: 'Bút, chai, lọ, cây, ô, chuối, quần... (cây/chiếc/quả)',
                list: [
                    { num: 1, value: '[一本|いっぽん]' }, { num: 3, value: '[三本|さんぼん]' }, { num: 6, value: '[六本|ろっぽん]' },
                    { num: 8, value: '[八本|はっぽん]' }, { num: 10, value: '[十本|じゅっぽん]' }
                ],
                question: '[何本|なんぼん] (Mấy cây?)'
            },
            {
                category: 'Đồ uống (Ly/Cốc/Bát)',
                description: 'Cơm, nước, bia... (ly/cốc/bát)',
                list: [
                    { num: 1, value: '[一杯|いっぱい]' }, { num: 3, value: '[三杯|さんばい]' }, { num: 6, value: '[六杯|ろっぱい]' },
                    { num: 8, value: '[八杯|はっぱい]' }, { num: 10, value: '[十杯|じゅっぱい]' }
                ],
                question: '[何杯|なんばい] (Mấy ly/cốc?)'
            },
            {
                category: 'Động vật (nhỏ)',
                description: 'Chó, mèo, cá, côn trùng... (con)',
                list: [
                    { num: 1, value: '[一匹|いっぴき]' }, { num: 3, value: '[三匹|さんびき]' }, { num: 6, value: '[六匹|ろっぴき]' },
                    { num: 8, value: '[八匹|はっぴき]' }, { num: 10, value: '[十匹|じゅっぴき]' }
                ],
                question: '[何匹|なんびき] (Mấy con?)'
            }
        ]
    }
];
