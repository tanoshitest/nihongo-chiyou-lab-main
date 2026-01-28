
import React from 'react';

// Define types locally or export them if they are needed elsewhere
export interface JLPTExample {
    questionText: React.ReactNode;
    options: string[];
    correctAnswer: number; // 1-based index for the example visual
}

export interface JLPTQuestion {
    id: number;
    mondaiId: number; // 1, 2, 3...
    questionText: React.ReactNode;
    imageUrl?: string;
    imageGridUrls?: string[]; // Legacy simple string array
    imageGridItems?: { imageUrl: string; style?: React.CSSProperties }[]; // Advanced items with style
    imagePosition?: 'bottom' | 'inline'; // 'bottom' is default
    imageStyle?: React.CSSProperties; // Custom styles for the image (e.g. for cropping)
    optionsLayout?: '1-col' | '2-col' | '4-col' | '3-col';
    options: React.ReactNode[];
    correctAnswer: number;
    explanation?: string; // Added optional explanation field
}

export interface JLPTMondai {
    id: number;
    instruction: React.ReactNode;
    passage?: React.ReactNode;
    example?: JLPTExample;
    customExample?: React.ReactNode;
    questions: JLPTQuestion[];
}

// Helper for images
const ImageCropper = ({ src, side, alt }: { src: string, side: 'left' | 'right', alt: string }) => (
    <div className="w-full relative overflow-hidden" style={{ paddingBottom: '75%' }}>
        <img
            src={src}
            alt={alt}
            className="absolute top-0 h-full max-w-none w-[200%]"
            style={{ left: side === 'left' ? '0' : '-100%' }}
        />
    </div>
);

// JLPT Section 1 Data (Vocabulary)
export const jlptVocabData: JLPTMondai[] = [
    {
        id: 1,
        instruction: "________の　ことばは　どう　よみますか。\n１・２・３・４から　いちばん　いい　ものを　ひとつ\nえらんで　ください。",
        questions: [
            {
                id: 1,
                mondaiId: 1,
                questionText: (
                    <span>
                        <span className="underline underline-offset-4">あたらしい</span>　くるまです。
                    </span>
                ),
                options: ["新しい", "新らしい", "新" + "しい", "新い"],
                optionsLayout: '2-col',
                correctAnswer: 0,
            },
            {
                id: 2,
                mondaiId: 1,
                questionText: (
                    <span>
                        <span className="underline underline-offset-4">でんき</span>を　消して　ください。
                    </span>
                ),
                options: ["天気", "電気", "元気", "電氣"],
                optionsLayout: '4-col',
                correctAnswer: 1,
            },
        ],
    },
    {
        id: 2,
        instruction: "________の　ことばは　ひらがなで　どう\nかきますか。１・２・３・４から　いちばん\nいい　ものを　ひとつ　えらんで　ください。",
        questions: [
            {
                id: 3,
                mondaiId: 2,
                questionText: (
                    <span>
                        <span className="underline underline-offset-4">外</span>で　たべましょう。
                    </span>
                ),
                options: ["そと", "うち", "なか", "まえ"],
                optionsLayout: '4-col',
                correctAnswer: 0,
            },
            {
                id: 4,
                mondaiId: 2,
                questionText: (
                    <span>
                        <span className="underline underline-offset-4">ホテル</span>に　とまります。
                    </span>
                ),
                options: ["ほてる", "ほてら", "ほてり", "ほてろ"],
                optionsLayout: '4-col',
                correctAnswer: 0,
            },
        ],
    },
    {
        id: 3,
        instruction: "（　　）に　なにを　いれますか。　１・２・\n３・４から　いちばん　いい　ものを　ひとつ\nえらんで　ください。",
        questions: [
            {
                id: 5,
                mondaiId: 3,
                questionText: (
                    <span>
                        あそこで　タクシーに　（　　）。
                    </span>
                ),
                options: ["のりました", "あがりました", "つきました", "はいりました"],
                optionsLayout: '2-col',
                correctAnswer: 0,
            },
            {
                id: 6,
                mondaiId: 3,
                questionText: (
                    <span>
                        ここは　（　　）です。　べんきょうできません。
                    </span>
                ),
                imageUrl: "/images/jlpt/n5/2025/q2_illustration.png",
                options: ["くらい", "さむい", "うるさい", "あぶない"],
                optionsLayout: '2-col',
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 4,
        instruction: "________の　ぶんと　だいたい　おなじ\nいみの　ぶんが　あります。 1・2・3・4から\nいちばん　いい　ものを　ひとつ　えらんで\nください。",
        questions: [
            {
                id: 7,
                mondaiId: 4,
                questionText: (
                    <span className="underline underline-offset-4">
                        わたしは　デパートに　つとめて　います。
                    </span>
                ),
                options: [
                    "わたしは　デパートで　かいものを　して　います。",
                    "わたしは　デパートで　さんぽを　して　います。",
                    "わたしは　デパートで　しごとを　して　います。",
                    "わたしは　デパートで　やすんで　います."
                ],
                optionsLayout: '1-col',
                correctAnswer: 2,
            },
            {
                id: 8,
                mondaiId: 4,
                questionText: (
                    <span className="underline underline-offset-4">
                        ゆうべ　パーティーへ　いきました。
                    </span>
                ),
                options: [
                    "きのうの　ひる　パーティーへ　いきました。",
                    "きのうの　よる　パーティーへ　いきました。",
                    "おとといの　ひる　パーティーへ　いきました。",
                    "おとといの　よる　パーティーへ　いきました."
                ],
                optionsLayout: '1-col',
                correctAnswer: 1,
            },
        ],
    },
];

// JLPT Section 2 Data (Grammar / Reading)
export const jlptGrammarData: JLPTMondai[] = [
    {
        id: 1,
        instruction: (
            <span>
                （　　）に <ruby> 何 <rt> なに </rt></ruby> を <ruby> 入 <rt> い </rt></ruby> れますか。<br />
                １・２・３・４から　いちばん　いい　ものを <br />
                <ruby>一 <rt> ひと </rt></ruby> つ　えらんで　ください。
            </span>
        ),
        example: {
            questionText: <span>これ　（　　）　えんぴつです。</span>,
            options: ["１　に", "２　を", "３　は", "４　や"],
            correctAnswer: 2
        },
        questions: [
            {
                id: 1,
                mondaiId: 1,
                questionText: (
                    <span>
                        <ruby>弟 <rt> おとうと </rt></ruby> は　へや　（　　）　そうじを　しました。
                    </span>
                ),
                options: ["が", "を", "に", "の"],
                optionsLayout: '4-col',
                correctAnswer: 2,
            },
            {
                id: 2,
                mondaiId: 1,
                questionText: (
                    <span>
                        きのうは　うちに　（　　）　<ruby> 何 <rt> なに </rt></ruby> を　しましたか。
                    </span>
                ),
                options: ["かえる", "かえるから", "かえって", "かえったり"],
                optionsLayout: '2-col',
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 2,
        instruction: (
            <span>
                <span className="border-b border-black inline-block w-8 text-center mr-1">★</span>に　<ruby>入<rt>はい</rt> </ruby>る　ものは　どれですか。<br />
                １・２・３・４から　いちばん　いい　ものを <br />
                <ruby>一 <rt> ひと </rt></ruby> つ　えらんで　ください。
            </span>
        ),
        customExample: (
            <div className="text-xl">
                <div className="flex gap-4 mb-4 items-center">
                    <span className="font-bold whitespace-nowrap">（もんだいれい）</span>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center flex-wrap gap-2">
                            <span>A </span>
                            <span>「</span>
                            <span className="border-b border-black w-14 inline-block"> </span>
                            <span className="border-b border-black w-14 inline-block"> </span>
                            <span className="border-b border-black w-14 inline-block relative text-center"> <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm">★</span></span>
                            <span className="border-b border-black w-14 inline-block"> </span>
                            <span> か。」</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>B </span>
                            <span>「<ruby>山田 <rt> やまだ </rt></ruby> さんです。」</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-8 pl-32 mb-8">
                    <span>１　です </span>
                    <span>２　は </span>
                    <span>３　あの <span className="text-xs block text-center"> 人 </span></span>
                    <span>４　だれ </span>
                </div>

                <div className="mb-4">
                    <span className="font-bold">（こたえかた）</span>
                </div>
                <div className="mb-8 pl-4">
                    <div className="mb-4">
                        <span>1.　ただしい <ruby> 文 <rt> ぶん </rt></ruby> を　つくります。</span>
                    </div>
                    <div className="border border-black p-6 inline-block min-w-[600px] bg-white pt-10">
                        <div className="grid grid-cols-[40px_30px_1fr] gap-y-8 items-end">
                            {/* Row A */}
                            <div className="font-bold text-2xl text-center font-serif pb-2"> A </div>
                            <div className="font-bold text-2xl font-serif pb-2">「</div>
                            <div className="flex items-end flex-wrap gap-1 font-serif">
                                <div className="flex flex-col items-center mx-2">
                                    <span className="border-b border-black w-24 mb-2"> </span>
                                    <span className="font-bold text-base whitespace-nowrap"> 3 あの人 </span>
                                </div>
                                <div className="flex flex-col items-center mx-2">
                                    <span className="border-b border-black w-16 mb-2"> </span>
                                    <span className="font-bold text-base whitespace-nowrap"> 2 は </span>
                                </div>
                                <div className="flex flex-col items-center mx-2 relative">
                                    <span className="absolute -top-6 text-sm">★</span>
                                    <span className="border-b border-black w-20 mb-2"> </span>
                                    <span className="font-bold text-base whitespace-nowrap"> 4 だれ </span>
                                </div>
                                <div className="flex flex-col items-center mx-2">
                                    <span className="border-b border-black w-16 mb-2"> </span>
                                    <span className="font-bold text-base whitespace-nowrap"> 1 です </span>
                                </div>
                                <div className="ml-2 pb-2 text-xl font-bold"> か。」</div>
                            </div>

                            {/* Row B */}
                            <div className="font-bold text-2xl text-center font-serif pb-1"> B </div>
                            <div className="font-bold text-2xl font-serif pb-1">「</div>
                            <div className="text-xl font-serif pb-1">
                                <ruby>山田 <rt> やまだ </rt></ruby> さんです。」
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 mb-4">
                        <span>2. <span className="border-b border-black inline-block w-8 text-center mr-1 relative"> <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs">★</span></span> に <ruby> 入 <rt> はい </rt></ruby> る　ばんごうを　くろく　ぬります。</span>
                    </div>
                    <div className="flex gap-4 items-center pl-8 text-xl">
                        <span>（かいとうようし）</span>
                        <div className="border border-black px-4 py-1 flex gap-2 items-center">
                            <span className="font-bold">（れい）</span>
                            <div className="flex gap-1 text-lg">
                                {
                                    [1, 2, 3, 4].map((num) => (
                                        <div key={num} className="w-8 h-8 flex items-center justify-center">
                                            {num === 4 ? (
                                                <div className="w-6 h-6 bg-black rounded-full" />
                                            ) : (
                                                <span className="border border-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-sans font-bold">
                                                    {num}
                                                </span>
                                            )
                                            }
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        questions: [
            {
                id: 3,
                mondaiId: 2,
                questionText: (
                    <div className="text-xl md:text-2xl mt-2 leading-relaxed">
                        <div className="flex flex-wrap items-end gap-2 mb-2">
                            <span>これは　きょねん　わたし</span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                            <span className="border-b border-black w-16 inline-block mx-1 relative"> <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xl">★</span></span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                        </div>
                        <div>
                            <span>しゃしんです。</span>
                        </div>
                    </div>
                ),
                options: ["が", "で", "とった", "海"],
                optionsLayout: '4-col',
                correctAnswer: 1,
            },
            {
                id: 4,
                mondaiId: 2,
                questionText: (
                    <div className="text-xl md:text-2xl mt-2 leading-relaxed">
                        <div className="flex flex-wrap items-end gap-2 mb-2">
                            <span>きのう、</span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                            <span className="border-b border-black w-16 inline-block mx-1 relative"> <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xl">★</span></span>
                            <span className="border-b border-black w-16 inline-block mx-1"> </span>
                            <span>。</span>
                        </div>
                    </div>
                ),
                options: [
                    <span><ruby>買 <rt> か </rt></ruby> いに </span>,
                    <span> <ruby>日本語 <rt> にほんご </rt></ruby> の </span>,
                    <span> <ruby>行 <rt> い </rt></ruby> きました </span>,
                    <span> じしょを </span>
                ],
                optionsLayout: '2-col',
                correctAnswer: 0,
            },
        ],
    },
    {
        id: 3,
        instruction: (
            <span>
                [<span className="border border-black px-1 font-bold inline-block text-center w-8"> 5 </span>] から [<span className="border border-black px-1 font-bold inline-block text-center w-8">9</span>] に <ruby>何<rt>なに</rt> </ruby>を <ruby>入<rt>い</rt> </ruby>れますか。<br />
                １・２・３・４ から いちばん いい ものを <ruby> 一 <rt> ひと </rt></ruby> つ <br />
                えらんで ください。
            </span>
        ),
        passage: (
            <div>
                <div className="mb-6">
                    ジョンさんと　ヤンさんは　あした　じこしょうかいを　します。<ruby>二人 <rt> ふたり </rt></ruby> は　じこしょうかいの　ぶんしょうを <ruby> 書 <rt> か </rt></ruby> きました。
                </div>

                {/* Reading 1: John */}
                <div className="mb-8">
                    <div className="mb-2 pl-2">（１）</div>
                    <div className="border border-black p-4 md:p-6 bg-white">
                        <p className="mb-4">
                            はじめまして。ジョン・スミスです。アメリカから <span className="border border-black px-1 mx-1 font-bold inline-block min-w-[30px] text-center"> 5 </span> 。
                        </p>
                        <p className="mb-4">
                            わたしは　えいがが <ruby> 好 <rt> す </rt></ruby> きです。アメリカの　えいがは　よく <ruby> 知 <rt> し </rt></ruby> っています。<span className="border border-black px-1 mx-1 font-bold inline-block min-w-[30px] text-center"> 6 </span> 、<ruby>日本<rt>にほん</rt> </ruby>の　えいがは　あまり　<ruby>知<rt>し</rt> </ruby>りません。<ruby>日本<rt>にほん</rt> </ruby>では、<ruby>日本<rt>にほん</rt> </ruby>の　えいがを　たくさん　<span className="border border-black px-1 mx-1 font-bold inline-block min-w-[30px] text-center">7</span> 。
                        </p>
                        <p>
                            どうぞ　よろしく　おねがいします。
                        </p>
                    </div>
                </div>

                {/* Reading 2: Yang */}
                <div className="mb-8">
                    <div className="mb-2 pl-2">（２）</div>
                    <div className="border border-black p-4 md:p-6 bg-white">
                        <p className="mb-4">
                            みなさん、こんにちは。ヤンです。
                        </p>
                        <p className="mb-4">
                            わたしは <ruby> 日本語学校 <rt> にほんごがっこう </rt></ruby> で <ruby> 毎日 <rt> まいにち </rt></ruby> べんきょうして　います。<ruby>今 <rt> いま </rt></ruby> は、<ruby>学校 <rt> がっこう </rt></ruby> の　ちかくに <ruby> 姉 <rt> あね </rt></ruby> と <ruby> 住 <rt> す </rt></ruby> んで　います。<ruby>姉 <rt> あね </rt></ruby> が　いるから、　<span className="border border-black px-1 mx-1 font-bold inline-block min-w-[30px] text-center"> 8 </span> 。
                        </p>
                        <p className="mb-4">
                            わたしは、<ruby>日本 <rt> にほん </rt></ruby> で　たくさん <ruby> 友 <rt> とも </rt></ruby> だちが　ほしいです。
                        </p>
                        <p className="mb-4">
                            みなさん、 <span className="border border-black px-1 mx-1 font-bold inline-block min-w-[30px] text-center"> 9 </span> 。
                        </p>
                        <p>
                            どうぞ　よろしく　おねがいします。
                        </p>
                    </div>
                </div>
            </div>
        ),
        questions: [
            {
                id: 5,
                mondaiId: 3,
                questionText: <></>,
                options: [
                    <span><ruby>行 <rt> い </rt></ruby> きます </span>,
                    <span> <ruby>行 <rt> い </rt></ruby> きました </span>,
                    <span> <ruby>来 <rt> き </rt></ruby> ます </span>,
                    <span> <ruby>来 <rt> き </rt></ruby> ました </span>
                ],
                optionsLayout: '2-col',
                correctAnswer: 3
            },
            {
                id: 6,
                mondaiId: 3,
                questionText: <></>,
                options: [
                    <span>では </span>,
                    <span> だから </span>,
                    <span> でも </span>,
                    <span> それから </span>
                ],
                optionsLayout: '4-col',
                correctAnswer: 2
            },
            {
                id: 7,
                mondaiId: 3,
                questionText: <></>,
                options: [
                    <span><ruby>見 <rt> み </rt></ruby> ました </span>,
                    <span> <ruby>見 <rt> み </rt></ruby> たいです </span>,
                    <span> <ruby>見 <rt> み </rt></ruby> て　いました </span>,
                    <span> <ruby>見 <rt> み </rt></ruby> るからです </span>
                ],
                optionsLayout: '2-col',
                correctAnswer: 1
            },
            {
                id: 8,
                mondaiId: 3,
                questionText: <></>,
                options: [
                    <span>さびしく　ありません </span>,
                    <span> さびしく　ありませんでした </span>,
                    <span> さびしく　ありませんか </span>,
                    <span> さびしく　ありませんでしたか </span>
                ],
                optionsLayout: '1-col',
                correctAnswer: 2
            },
            {
                id: 9,
                mondaiId: 3,
                questionText: <></>,
                options: [
                    <span><ruby>学校 <rt> がっこう </rt></ruby> に <ruby> 毎日 <rt> まいにち </rt></ruby> <ruby>行 <rt> い </rt></ruby> きませんか </span>,
                    <span> <ruby>学校 <rt> がっこう </rt></ruby> で <ruby> 友 <rt> とも </rt></ruby> だちと　あそびました </span>,
                    <span> うちに　あそびに <ruby> 来 <rt> き </rt></ruby> て　ください </span>,
                    <span> うちで <ruby> 姉 <rt> あね </rt></ruby> と　あそびたいです </span>
                ],
                optionsLayout: '1-col',
                correctAnswer: 2
            },
        ],
    },
    {
        id: 4,
        instruction: (
            <span>
                つぎの　ぶんを <ruby> 読 <rt> よ </rt></ruby> んで　しつもんに <br />
                こたえて　ください。こたえは　１・２・３・４　から <br />
                いちばん　いい　ものを <ruby> 一 <rt> ひと </rt></ruby> つ　えらんで <br />
                ください。
            </span>
        ),
        passage: (
            <div className="mx-2 md:mx-6">
                <div className="mb-8 pl-1">
                    <ruby>先生 <rt> せんせい </rt></ruby> が　アンナさんに <ruby> 手紙 <rt> てがみ </rt></ruby> を <ruby> 書 <rt> か </rt></ruby> きました。
                </div>
                <div className="border border-black p-8 max-w-2xl mx-auto bg-white text-xl leading-relaxed">
                    <div className="mb-12"> アンナさん </div>
                    <div className="mb-2">
                        <ruby>今週 <rt> こんしゅう </rt></ruby> は　しごとが　たくさん　あります。<ruby>土曜日 <rt> どようび </rt></ruby> と
                    </div>
                    <div className="mb-2">
                        <ruby>日曜日 <rt> にちようび </rt></ruby> も　いそがしいです。
                    </div>
                    <div>
                        <ruby>来週 <rt> らいしゅう </rt></ruby> の <ruby> 月曜日 <rt> げつようび </rt></ruby> に <ruby> 来 <rt> き </rt></ruby> て　ください。
                    </div>
                </div>
            </div>
        ),
        questions: [
            {
                id: 10,
                mondaiId: 4,
                questionText: (
                    <span>
                        <ruby>先生 <rt> せんせい </rt></ruby> は　いつ<ruby>時間<rt>じかん</rt> </ruby>が　ありますか。
                    </span>
                ),
                options: [
                    <span><ruby>今週 <rt> こんしゅう </rt></ruby> </span>,
                    <span> <ruby>土曜日 <rt> どようび </rt></ruby> </span>,
                    <span> <ruby>日曜日 <rt> にちようび </rt></ruby> </span>,
                    <span> <ruby>月曜日 <rt> げつようび </rt></ruby> </span>
                ],
                optionsLayout: '1-col',
                correctAnswer: 3 // Month 0-indexed? No answers 1-4. Index 3 is Option 4 (Monday).
            }
        ]
    },
    {
        id: 5,
        instruction: (
            <span>
                つぎの　ぶんを <ruby> 読 <rt> よ </rt></ruby> んで　しつもんに <br />
                こたえて　ください。こたえは　１・２・３・４　から <br />
                いちばん　いい　ものを <ruby> 一 <rt> ひと </rt></ruby> つ　えらんで <br />
                ください。
            </span>
        ),
        passage: (
            <div className="mx-2 md:mx-6 leading-loose text-xl">
                <p className="mb-6">
                    ヤンさんの　うちは <ruby> 町 <rt> まち </rt></ruby> の <ruby> 中 <rt> なか </rt></ruby> の　べんりな　ところに <br />
                    あります。
                </p>
                <p className="mb-6">
                    となりに　パンやが　あります。<ruby>前 <rt> まえ </rt></ruby> は　はなやで、<br />
                    はなやの　となりは　さかなやです。<ruby>遠 <rt> とお </rt></ruby> くに　くすりやと <br />
                    にくやも　あります。ゆうびんきょくと　びょういんも <br />
                    あります。
                </p>
                <p className="mb-6">
                    <ruby>今日 <rt> きょう </rt></ruby> の　ゆうがた、ヤンさんの <ruby> 友 <rt> とも </rt></ruby> だちが　あそびに <br />
                    <ruby>来 <rt> き </rt></ruby> ます。ヤンさんは　とりにくの　りょうりと　さかなの <br />
                    りょうりを <ruby> 作 <rt> つく </rt></ruby> ります。れいぞうこの <ruby> 中 <rt> なか </rt></ruby> に　とりにくと <br />
                    さかなが　ありませんから、ヤンさんは　これから <br />
                    <ruby>買 <rt> か </rt></ruby> いものに　でかけます。それから、ゆうびんきょくへ <br />
                    <ruby>行 <rt> い </rt></ruby> って、きってを <ruby> 買 <rt> か </rt></ruby> います。
                </p>
            </div>
        ),
        questions: [
            {
                id: 11,
                mondaiId: 5,
                questionText: (
                    <span>
                        つぎの <ruby> 中 <rt> なか </rt></ruby> で、ヤンさんの　うちから　いちばん<br />
                        <ruby>近 <rt> ちか </rt></ruby> い <ruby> 店 <rt> みせ </rt></ruby> は　どれ　ですか。
                    </span>
                ),
                options: [
                    <span>にくや </span>,
                    <span> パンや </span>,
                    <span> くすりや </span>,
                    <span> さかなや </span>
                ],
                optionsLayout: '1-col',
                correctAnswer: 1 // Pan-ya (Option 2 -> Index 1)
            }
        ]
    },
    {
        id: 6,
        instruction: (
            <span>
                つぎの　ぶんを <ruby> 読 <rt> よ </rt></ruby> んで、「<ruby>電車 <rt> でんしゃ </rt></ruby> の <ruby> 時間 <rt> じかん </rt></ruby>」と <br />
                「バスの <ruby> 時間 <rt> じかん </rt></ruby>」を <ruby> 見 <rt> み </rt></ruby> て、　しつもんに <br />
                こたえて　ください。こたえは　1・2・3・4　から <br />
                いちばん　いい　ものを <ruby> 一 <rt> ひと </rt></ruby> つ　えらんで <br />
                ください。
            </span>
        ),
        passage: (
            <div className="mx-2 md:mx-6 leading-loose text-xl text-center">
                {/* Box 1: Train Time */}
                <div className="relative border border-black p-4 md:p-8 max-w-2xl mx-auto bg-white mb-8">
                    {/* Corner Cover (Hides original border) */}
                    <div className="absolute -bottom-[1px] -right-[1px] w-9 h-9 bg-white z-10"> </div>
                    {/* Darker Backside Fold Effect with Borders */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-400 border-t border-l border-black rounded-bl-lg shadow-[-2px_-2px_6px_rgba(0,0,0,0.3)] pointer-events-none z-20" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }
                    }> </div>


                    {/* Train Header */}
                    <div className="flex justify-between items-end px-4 relative h-24 mb-10">
                        <div className="absolute left-0 top-0 w-52 -mt-12 text-center">
                            <img src="/train_local.png" alt="Local Train" className="w-full grayscale mix-blend-multiply mb-1" />
                            <div className="absolute top-[40%] left-[45%] text-[10px] font-bold bg-white px-0.5 border border-black leading-none"> ふじ </div>
                        </div>

                        <div className="text-center font-bold mx-auto z-10 pt-2 flex flex-col items-center">
                            <div className="text-sm mb-1"> <ruby>電車 <rt> でんしゃ </rt></ruby> の </div>
                            <div className="text-4xl tracking-[0.2em] relative">
                                <span className="relative z-10"> <ruby>時間 <rt> じかん </rt></ruby> </span>
                            </div>
                        </div>

                        <div className="absolute right-0 top-0 w-56 -mt-16 text-center pt-2">
                            <img src="/train_shinkansen.png" alt="Shinkansen" className="w-full grayscale mix-blend-multiply" />
                            <div className="absolute top-[48%] left-[25%] text-[10px] font-bold bg-white px-0.5 border border-black leading-none"> さくら </div>
                        </div>
                    </div>

                    {/* Train Table */}
                    <div className="border-2 border-black mb-6">
                        {/* Header Row */}
                        <div className="flex border-b-2 border-black">
                            <div className="w-[30%] border-r-2 border-black p-2 flex flex-col items-center justify-center">
                                <div className="text-xs leading-none mb-1"> <ruby>電車 <rt> でんしゃ </rt></ruby> </div>
                                <div className="text-xl font-serif"> 電車 </div>
                            </div>
                            <div className="w-[70%] p-2 flex items-center justify-center gap-6">
                                <div className="text-center">
                                    <div className="text-xs leading-none mb-1"> <ruby>東京駅 <rt> とうきょうえき </rt></ruby> </div>
                                    <div className="text-lg"> 東京駅 </div>
                                </div>
                                <div className="text-4xl text-white drop-shadow-[0_0_1px_black] scale-x-[2]">⇨</div>
                                <div className="text-center">
                                    <div className="text-xs leading-none mb-1"> <ruby>中川駅 <rt> なかがわえき </rt></ruby> </div>
                                    <div className="text-lg"> 中川駅 </div>
                                </div>
                            </div>
                        </div>
                        {/* Data Rows */}
                        {
                            [
                                { name: "ふじ 1", dept: "8 : 2 0", arr: "1 0 : 2 0" },
                                { name: "さくら 1", dept: "9 : 1 0", arr: "1 0 : 1 0" },
                                { name: "ふじ 3", dept: "9 : 2 0", arr: "1 1 : 2 0" },
                                { name: "さくら 3", dept: "1 0 : 1 0", arr: "1 1 : 1 0" },
                            ].map((row, idx, arr) => (
                                <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b border-black' : ''} text-lg md:text-xl h-12`}>
                                    <div className="w-[30%] border-r border-black flex items-center justify-center font-serif tracking-widest bg-white">
                                        {row.name}
                                    </div>
                                    <div className="w-[35%] border-r border-black flex items-center justify-center tracking-[0.2em]">
                                        {row.dept}
                                    </div>
                                    <div className="w-[35%] flex items-center justify-center tracking-[0.2em]">
                                        {row.arr}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Prices */}
                    <div className="text-center">
                        <div className="mb-2">
                            （お <ruby> 金 <rt> かね </rt></ruby>） ふ　じ ： 3,000 <ruby> 円 <rt> えん </rt></ruby>
                        </div>
                        <div>
                            さくら ： 5,000 <ruby> 円 <rt> えん </rt></ruby>
                        </div>
                    </div>
                </div>

                {/* Box 2: Bus Time */}
                <div className="relative border border-black p-4 md:p-8 max-w-2xl mx-auto bg-white">
                    {/* Corner Cover (Hides original border) */}
                    <div className="absolute -bottom-[1px] -right-[1px] w-9 h-9 bg-white z-10"> </div>
                    {/* Darker Backside Fold Effect with Borders */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-400 border-t border-l border-black rounded-bl-lg shadow-[-2px_-2px_6px_rgba(0,0,0,0.3)] pointer-events-none z-20" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}> </div>

                    {/* Bus Header */}
                    <div className="flex justify-center items-center mb-6 gap-4 relative">
                        <div className="w-24 -ml-12">
                            <img src="/bus_local.png" alt="Bus" className="w-full grayscale mix-blend-multiply" />
                        </div>
                        <div className="text-center font-bold">
                            <div className="text-sm text-right pr-9 mb-1"> <ruby>じかん <rt> </rt></ruby> </div>
                            <div className="text-2xl tracking-[0.2em] flex items-baseline gap-2">
                                <span>バスの </span>
                                <span className="text-3xl"> 時間 </span>
                            </div>
                        </div>
                    </div>

                    {/* Bus Table */}
                    <div className="border-2 border-black mb-6 w-3/4 mx-auto">
                        {/* Header */}
                        <div className="flex border-b-2 border-black p-3 justify-center items-center gap-8 bg-white">
                            <div className="text-center">
                                <div className="text-xs leading-none mb-1"> <ruby>中川駅 <rt> なかがわえき </rt></ruby> </div>
                                <div className="text-lg tracking-wider"> 中川駅 </div>
                            </div>
                            <div className="text-4xl text-white drop-shadow-[0_0_1px_black] scale-x-[2]">⇨</div>
                            <div className="text-center">
                                <div className="text-xs leading-none mb-1 text-right"> <ruby>山 <rt> やま </rt></ruby> </div>
                                <div className="text-lg tracking-wider"> いちご山 </div>
                            </div>
                        </div>
                        {/* Rows */}
                        <div className="flex border-b border-black text-xl h-12">
                            <div className="w-1/2 border-r border-black flex items-center justify-center tracking-[0.2em]"> 1 0 : 3 0 </div>
                            <div className="w-1/2 flex items-center justify-center tracking-[0.2em]"> 1 1 : 0 0 </div>
                        </div>
                        <div className="flex text-xl h-12">
                            <div className="w-1/2 border-r border-black flex items-center justify-center tracking-[0.2em]"> 1 1 : 3 0 </div>
                            <div className="w-1/2 flex items-center justify-center tracking-[0.2em]"> 1 2 : 0 0 </div>
                        </div>
                    </div>

                    {/* Bus Price */}
                    <div className="text-center">
                        （お <ruby> 金 <rt> かね </rt></ruby>） 800 <ruby> 円 <rt> えん </rt></ruby>
                    </div>
                </div>
            </div>
        ),
        questions: [
            {
                id: 13,
                mondaiId: 6,
                questionText: (
                    <span>
                        <ruby>電車 <rt> でんしゃ </rt></ruby> は　どれに<ruby>乗<rt>の</rt> </ruby>りますか。
                    </span>
                ),
                options: [
                    <span>ふじ1 </span>,
                    <span> さくら1 </span>,
                    <span> ふじ3 </span>,
                    <span> さくら3 </span>
                ],
                optionsLayout: '1-col',
                correctAnswer: 1
            }
        ]
    }
];

// JLPT Section 3 Data (Listening)

// Helper to flatten questions for scoring
export function getFlatQuestions(mondaiList: JLPTMondai[]): JLPTQuestion[] {
    return mondaiList.flatMap(m => m.questions);
}

export function calculateJLPTSectionScore(
    answers: Record<number, string | string[] | null>, // allow null/array to match existing type
    mondaiList: JLPTMondai[]
): number {
    let correct = 0;
    mondaiList.forEach(mondai => {
        mondai.questions.forEach(q => {
            // Answers are stored as string indices "0", "1", etc.
            // Correct answer is number 0, 1...
            if (answers[q.id] && String(answers[q.id]) === String(q.correctAnswer)) {
                correct++;
            }
        });
    });
    return correct;
}

export const jlptListeningData: JLPTMondai[] = [
    {
        id: 1,
        instruction: (
            <div>
                <h2 className="text-3xl font-bold mb-4"> もんだい 1 </h2>
                <div className="leading-loose text-lg space-y-2">
                    <p>もんだい１では　はじめに、　しつもんを　きいて　ください。</p>
                    <p> それから　はなしを　きいて、　もんだいようしの　１から４の </p>
                    <p> なかから、　ただしい　こたえを　ひとつ　えらんで　ください。</p>
                </div>
            </div>
        ),
        questions: [
            {
                id: 1,
                mondaiId: 1,
                questionText: "1ばん",
                imageGridItems: [
                    // Top-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 25%", transform: "scale(2.4)", transformOrigin: "top left" }
                    },
                    // Top-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 25%", transform: "scale(2.4)", transformOrigin: "top right" }
                    },
                    // Bottom-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 85%", transform: "scale(2.4)", transformOrigin: "bottom left" }
                    },
                    // Bottom-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 85%", transform: "scale(2.4)", transformOrigin: "bottom right" }
                    }
                ],
                options: ["", "", "", ""],
                optionsLayout: "4-col",
                correctAnswer: 0
            },
            {
                id: 2,
                mondaiId: 1,
                questionText: "2ばん",
                imageGridItems: [
                    // Top-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 25%", transform: "scale(2.4)", transformOrigin: "top left" }
                    },
                    // Top-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 25%", transform: "scale(2.4)", transformOrigin: "top right" }
                    },
                    // Bottom-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 85%", transform: "scale(2.4)", transformOrigin: "bottom left" }
                    },
                    // Bottom-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 85%", transform: "scale(2.4)", transformOrigin: "bottom right" }
                    }
                ],
                options: ["1", "2", "3", "4"],
                optionsLayout: "4-col",
                correctAnswer: 0
            }
        ]
    },
    {
        id: 2,
        instruction: (
            <div>
                <h2 className="text-3xl font-bold mb-4"> もんだい 2 </h2>
                <div className="leading-loose text-lg space-y-2">
                    <p>もんだい２では、　はじめに　しつもんを　きいて　ください。</p>
                    <p> それから　えを　みて、　もんだいようしの　１から４の　なかから、</p>
                    <p> ただしい　こたえを　ひとつ　えらんで　ください。</p>
                </div>
            </div>
        ),
        questions: [
            {
                id: 3,
                mondaiId: 2,
                questionText: (
                    <div className="space-y-6">
                        <div className="text-2xl font-bold"> 1 ばん</div>
                        <div className="flex justify-start pt-4 -ml-2 md:-ml-6">
                            <div className="w-full max-w-2xl border-4 border-black p-6 bg-white">
                                <div className="relative w-full aspect-video flex items-center justify-center bg-white">
                                    <img
                                        src="/images/jlpt/n5_m2_q1.png"
                                        alt="Group of 5 people with pointers"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ),
                options: ["1", "2", "3", "4"],
                optionsLayout: "4-col",
                correctAnswer: 0
            },
            {
                id: 4,
                mondaiId: 2,
                questionText: "2ばん",
                imageGridItems: [
                    // Top-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 25%", transform: "scale(2.4)", transformOrigin: "top left" }
                    },
                    // Top-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 25%", transform: "scale(2.4)", transformOrigin: "top right" }
                    },
                    // Bottom-Left
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "0% 85%", transform: "scale(2.4)", transformOrigin: "bottom left" }
                    },
                    // Bottom-Right
                    {
                        imageUrl: "/images/listening_q1_combined.png",
                        style: { objectFit: "cover", objectPosition: "100% 85%", transform: "scale(2.4)", transformOrigin: "bottom right" }
                    }
                ],
                options: ["1", "2", "3", "4"],
                optionsLayout: "4-col",
                correctAnswer: 0
            }
        ]
    },
    {
        id: 3,
        instruction: (
            <div>
                <h2 className="text-3xl font-bold mb-4"> もんだい 3 </h2>
                <div className="leading-loose text-lg space-y-2">
                    <p>もんだい３では、　えを　みて　ください。</p>
                    <p> やじるしの　ひとは　なんと　いいますか。</p>
                    <p>１から３の　なかから、　ただしい　こたえを　ひとつ　えらんで　ください。</p>
                </div>
            </div>
        ),
        questions: [
            {
                id: 5,
                mondaiId: 3,
                questionText: (
                    <div className="space-y-6">
                        <div className="text-2xl font-bold"> 1 ばん</div>
                        <div className="flex justify-start pt-4 -ml-2 md:-ml-6">
                            <div className="w-full max-w-2xl border-4 border-black p-6 bg-white">
                                <div className="relative w-full aspect-video flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/jlpt/mondai3/q1.png"
                                        alt="Mondai 3 Question 1"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ),
                options: ["1", "2", "3"],
                optionsLayout: "3-col",
                correctAnswer: 0
            },
            {
                id: 6,
                mondaiId: 3,
                questionText: (
                    <div className="space-y-6">
                        <div className="text-2xl font-bold"> 2 ばん </div>
                        <div className="flex justify-start pt-4 -ml-2 md:-ml-6">
                            <div className="w-full max-w-2xl border-4 border-black p-6 bg-white">
                                <div className="relative w-full aspect-video flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src="/images/jlpt/mondai3/q2.png"
                                        alt="Mondai 3 Question 2"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ),
                options: ["1", "2", "3"],
                optionsLayout: "3-col",
                correctAnswer: 0
            }
        ]
    },
    {
        id: 4,
        instruction: (
            <div>
                <h2 className="text-3xl font-bold mb-4"> もんだい 4 </h2>
                <div className="leading-loose text-lg space-y-2">
                    <p>もんだい４では、　え　などが　ありません。</p>
                    <p> はじめに　ぶんを　きいて　ください。</p>
                    <p> それから　その　へんじを　きいて、　１から３の　なかから、</p>
                    <p> ただしい　こたえを　ひとつ　えらんで　ください。</p>
                </div>
            </div>
        ),
        questions: [
            {
                id: 7,
                mondaiId: 4,
                questionText: (
                    <div className="space-y-6">
                        <div className="text-2xl font-bold"> 1 ばん</div>
                    </div>
                ),
                options: ["1", "2", "3"],
                optionsLayout: "3-col",
                correctAnswer: 0
            },
            {
                id: 8,
                mondaiId: 4,
                questionText: (
                    <div className="space-y-6">
                        <div className="text-2xl font-bold"> 2 ばん </div>
                    </div>
                ),
                options: ["1", "2", "3"],
                optionsLayout: "3-col",
                correctAnswer: 0
            }
        ]
    }
];

