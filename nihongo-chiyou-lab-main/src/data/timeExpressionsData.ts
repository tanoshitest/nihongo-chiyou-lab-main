
export interface TimeExpressionGroup {
    id: number;
    title: string;
    items: {
        label: string; // e.g. "Hôm kia"
        value: string; // e.g. "[おととい|ototoi]"
        subItems?: { label: string; value: string }[]; // For "Sáng hôm kia", "Tối hôm kia" etc.
    }[];
}

export const TIME_EXPRESSIONS: TimeExpressionGroup[] = [
    {
        id: 1,
        title: 'Ngày, Buổi sáng, Buổi tối',
        items: [
            {
                label: 'Hôm kia',
                value: '[一昨日|おととい|Hôm kia]',
                subItems: [
                    { label: 'Sáng hôm kia', value: '[一昨日|おととい]の[朝|あさ]' },
                    { label: 'Tối hôm kia', value: '[一昨日|おととい]の[晩|ばん]' }
                ]
            },
            {
                label: 'Hôm qua',
                value: '[昨日|きのう|Hôm qua]',
                subItems: [
                    { label: 'Sáng hôm qua', value: '[昨日|きのう]の[朝|あさ]' },
                    { label: 'Tối hôm qua', value: '[昨日|きのう]の[晩|ばん]' }
                ]
            },
            {
                label: 'Hôm nay',
                value: '[今日|きょう|Hôm nay]',
                subItems: [
                    { label: 'Sáng nay', value: '[今朝|けさ|Sáng nay]' },
                    { label: 'Tối nay', value: '[今晩|こんばん|Tối nay]' }
                ]
            },
            {
                label: 'Ngày mai',
                value: '[明日|あした|Ngày mai]',
                subItems: [
                    { label: 'Sáng mai', value: '[明日|あした]の[朝|あさ]' },
                    { label: 'Tối mai', value: '[明日|あした]の[晩|ばん]' }
                ]
            },
            {
                label: 'Ngày kia',
                value: '[明後日|あさって|Ngày kia]',
                subItems: [
                    { label: 'Sáng ngày kia', value: '[明後日|あさって]の[朝|あさ]' },
                    { label: 'Tối ngày kia', value: '[明後日|あさって]の[晩|ばん]' }
                ]
            },
            {
                label: 'Hàng ngày',
                value: '[毎日|まいにち|Hàng ngày]',
                subItems: [
                    { label: 'Hàng sáng', value: '[毎朝|まいあさ|Hàng sáng]' },
                    { label: 'Hàng tối', value: '[毎晩|まいばん|Hàng tối]' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Tuần, Tháng, Năm',
        items: [
            {
                label: 'Tuần trước nữa',
                value: '[先々週|せんせんしゅう|Tuần trước nữa]',
                subItems: [
                    { label: 'Hai tháng trước', value: '[先々月|せんせんげつ|Hai tháng trước]' },
                    { label: 'Năm kia', value: '[一昨年|おととし|Năm kia]' }
                ]
            },
            {
                label: 'Tuần trước',
                value: '[先週|せんしゅう|Tuần trước]',
                subItems: [
                    { label: 'Tháng trước', value: '[先月|せんげつ|Tháng trước]' },
                    { label: 'Năm ngoái', value: '[去年|きょねん|Năm ngoái]' }
                ]
            },
            {
                label: 'Tuần này',
                value: '[今週|こんしゅう|Tuần này]',
                subItems: [
                    { label: 'Tháng này', value: '[今月|こんげつ|Tháng này]' },
                    { label: 'Năm nay', value: '[今年|ことし|Năm nay]' }
                ]
            },
            {
                label: 'Tuần sau',
                value: '[来週|らいしゅう|Tuần sau]',
                subItems: [
                    { label: 'Tháng sau', value: '[来月|らいげつ|Tháng sau]' },
                    { label: 'Sang năm', value: '[来年|らいねん|Sang năm]' }
                ]
            },
            {
                label: 'Tuần sau nữa',
                value: '[再来週|さらいしゅう|Tuần sau nữa]',
                subItems: [
                    { label: 'Tháng sau nữa', value: '[再来月|さらいげつ|Tháng sau nữa]' },
                    { label: 'Năm sau nữa', value: '[再来年|さらいねん|Năm sau nữa]' }
                ]
            },
            {
                label: 'Hàng tuần',
                value: '[毎週|まいしゅう|Hàng tuần]',
                subItems: [
                    { label: 'Hàng tháng', value: '[毎月|まいつき|Hàng tháng]' },
                    { label: 'Hàng năm', value: '[毎年|まいとし|Hàng năm]' } // Also mainen
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Khoảng thời gian (Duration)',
        items: [
            { label: 'Giờ (Tiếng)', value: '1[時間|じかん], 2[時間|じかん]...', subItems: [{ label: 'Mấy tiếng?', value: '[何時間|なんじかん|Mấy tiếng]' }] },
            { label: 'Phút', value: '5[分|ふん], 10[分|ぷん]...', subItems: [{ label: 'Mấy phút?', value: '[何分|なんぷん|Mấy phút]' }] },
            { label: 'Ngày', value: '1[日|にち], 2[日|か]...', subItems: [{ label: 'Mấy ngày?', value: '[何日|なんにち|Mấy ngày]' }] },
            { label: 'Tuần', value: '1[週間|しゅうかん], 2[週間|しゅうかん]...', subItems: [{ label: 'Mấy tuần?', value: '[何週間|なんしゅうかん|Mấy tuần]' }] },
            { label: 'Tháng', value: '1[か月|かげつ], 2[か月|かげつ]...', subItems: [{ label: 'Mấy tháng?', value: '[何|なん]か[月|げつ|Tháng]' }] },
            { label: 'Năm', value: '1[年|ねん], 2[年|ねん]...', subItems: [{ label: 'Mấy năm?', value: '[何年|なんねん|Mấy năm]' }] }
        ]
    },
    {
        id: 4,
        title: 'Giờ và Phút',
        items: [
            { label: 'Giờ', value: '1[時|じ], 4[時|よじ], 9[時|くじ]', subItems: [{ label: 'Mấy giờ?', value: '[何時|なんじ|Mấy giờ]?' }] },
            { label: 'Phút (đuôi -fun)', value: '2[分|ふん], 5[分|ふん], 7[分|ふん], 9[分|ふん]', subItems: [] },
            { label: 'Phút (đuôi -pun)', value: '1[分|いっぷん], 3[分|さんぷん], 4[分|よんぷん], 6[分|ろっぷん], 8[分|はっぷん], 10[分|じゅっぷん]', subItems: [{ label: 'Mấy phút?', value: '[何分|なんぷん|Mấy phút]?' }] }
        ]
    }
];
