
import React from 'react';

interface JLPTCoverPageProps {
    onStart: () => void;
    level?: string;
    sectionName?: string; // Used for main title/description
    title?: string; // Optional override
    subTitle?: string;
    examineeNumber?: string;
    examineeName?: string;
    variant?: 'white' | 'blue';
    section?: number;
}

const JLPTCoverPage: React.FC<JLPTCoverPageProps> = ({
    onStart,
    level = "N5",
    sectionName = "言語知識（文字・語彙）",
    title,
    subTitle,
    examineeNumber = "",
    examineeName = "",
    variant = "white",
    section
}) => {
    // Colors
    const isBlue = variant === 'blue';
    const bgColor = isBlue ? "bg-[#7494c0]" : "bg-white";
    const textColor = isBlue ? "text-white" : "text-black";
    const borderColor = isBlue ? "border-white" : "border-black";
    // const subTextColor = isBlue ? "text-gray-100" : "text-gray-500"; // Unused variable
    const btnBg = isBlue ? "bg-white" : "bg-black";
    const btnText = isBlue ? "text-[#7494c0]" : "text-white";
    const btnHover = isBlue ? "hover:bg-gray-100" : "hover:bg-gray-800";

    // Helper for 3-tier text: Furigana (top), Kanji (mid), Vietnamese (bot)
    // Increased sizes by ~20%
    const Word = ({ k, f, v }: { k: string, f: string, v?: string }) => (
        <span className="inline-flex flex-col items-center align-middle mx-1 leading-none">
            <span className="text-xs text-gray-500 mb-0.5 select-none">{f}</span>
            <span className="text-xl font-bold text-black">{k}</span>
            {v && <span className="text-xs text-gray-500 mt-0.5 font-normal select-none whitespace-nowrap">{v}</span>}
        </span>
    );

    // Header Word Helper (Larger)
    const HeaderWord = ({ k, f, v }: { k: string, f: string, v?: string }) => (
        <span className="inline-flex flex-col items-center align-middle mx-1 leading-none">
            <span className="text-sm md:text-base text-gray-500 mb-1 select-none">{f}</span>
            <span className="text-2xl md:text-4xl font-bold">{k}</span>
            {v && <span className="text-sm md:text-base text-gray-500 mt-1 font-normal select-none whitespace-nowrap">{v}</span>}
        </span>
    );

    return (
        <div className={`h-screen w-full ${bgColor} ${textColor} px-8 flex items-center justify-center select-none font-jlpt overflow-hidden fixed top-0 left-0 z-50`}>

            <div className="w-full max-w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full py-4">

                {/* Left Column: Notes Section (Chuu-i) */}
                <div className="w-full flex flex-col justify-center">
                    <div className={`${borderColor} border-2 p-8 lg:p-10 relative flex flex-col justify-center rounded-lg bg-white`}>
                        <div className="text-center mb-10">
                            <h3 className="inline-block">
                                <Word k="注意" f="ちゅうい" v="chú ý" />
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {[
                                <span key="1" className="flex flex-wrap items-center">
                                    <Word k="試験" f="しけん" v="kỳ thi" />が
                                    <Word k="始" f="はじ" v="bắt đầu" />まるまで、この
                                    <Word k="問題用紙" f="もんだいようし" v="đề thi" />を
                                    <Word k="開" f="あ" v="mở" />けないでください。
                                </span>,
                                <span key="2" className="flex flex-wrap items-center">
                                    この<Word k="問題用紙" f="もんだいようし" v="đề thi" />を、
                                    <Word k="持" f="も" v="mang" />ち
                                    <Word k="帰" f="かえ" v="về" />ることはできません。
                                </span>,
                                <span key="3" className="flex flex-wrap items-center">
                                    <Word k="受験番号" f="じゅけんばんごう" v="SBD" />と
                                    <Word k="名前" f="なまえ" v="tên" />を、
                                    <Word k="下" f="した" v="dưới" />の
                                    <Word k="欄" f="らん" v="cột" />に
                                    <Word k="書" f="か" v="viết" />いてください。
                                </span>,
                                <span key="4" className="flex flex-wrap items-center">
                                    この<Word k="問題用紙" f="もんだいようし" v="đề thi" />の
                                    <Word k="中" f="なか" v="trong" />に、
                                    <Word k="解答用紙" f="かいとうようし" v="phiếu trả lời" />が
                                    <Word k="入" f="はい" v="có" />っています。
                                </span>,
                                <span key="5" className="flex flex-wrap items-center">
                                    <Word k="試験" f="しけん" v="kỳ thi" />が
                                    <Word k="始" f="はじ" v="bắt đầu" />まるまで、
                                    <Word k="静" f="しず" v="yên lặng" />かに
                                    <Word k="待" f="ま" v="đợi" />ってください。
                                </span>
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-2 items-start leading-loose">
                                    <span className="font-bold text-xl mt-3">{idx + 1}.</span>
                                    <div>
                                        <p className="text-xl font-bold leading-[3rem] text-black">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Header, Inputs, Button */}
                <div className="flex flex-col justify-center space-y-8 lg:space-y-10">

                    {/* Header Section */}
                    {isBlue ? (
                        // Special Layout for Listening (Blue)
                        <div className="text-center space-y-6 py-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest leading-none">問題例</h2>
                            <h1 className="text-7xl md:text-9xl font-bold tracking-widest leading-none py-4 uppercase">{level}</h1>
                            {/* Listening Title */}
                            <h2 className="text-4xl md:text-5xl font-bold tracking-widest leading-none mt-2">
                                {title || "聴解"}
                            </h2>
                        </div>
                    ) : (
                        // Standard Layout
                        <div className="text-center space-y-2">
                            <h1 className="text-8xl md:text-[9rem] font-bold tracking-widest leading-none uppercase">{level}</h1>
                            <div className="flex items-end justify-center mt-4 tracking-wide flex-wrap gap-2">
                                {sectionName === "言語知識（文字・語彙）" ? (
                                    <>
                                        <HeaderWord k="言語" f="げんご" v="ngôn ngữ" />
                                        <HeaderWord k="知識" f="ちしき" v="kiến thức" />
                                        <span className="text-2xl md:text-4xl font-bold self-center pt-2">（</span>
                                        <HeaderWord k="文字" f="もじ" v="chữ viết" />
                                        <span className="text-2xl md:text-4xl font-bold self-center pt-2">・</span>
                                        <HeaderWord k="語彙" f="ごい" v="từ vựng" />
                                        <span className="text-2xl md:text-4xl font-bold self-center pt-2">）</span>
                                    </>
                                ) : (
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        {sectionName || title}
                                    </h2>
                                )}
                            </div>
                            {subTitle && <div className="text-lg mt-2">{subTitle}</div>}
                        </div>
                    )}

                    {/* Input Boxes Section */}
                    <div className="w-full space-y-4">
                        {/* Examinee Number */}
                        <div className={`flex border-2 ${borderColor} h-16 md:h-20`}>
                            <div className={`w-[40%] border-r-2 ${borderColor} flex flex-col justify-center items-center p-1 text-center`}>
                                <span className="font-bold text-lg md:text-xl flex items-center justify-center">
                                    <Word k="受験番号" f="じゅけんばんごう" v="số báo danh" />
                                </span>
                            </div>
                            <div className="w-[60%] flex items-center justify-center px-4 font-mono text-xl md:text-2xl tracking-widest uppercase">
                                {examineeNumber || "0000-0000"}
                            </div>
                        </div>

                        {/* Name */}
                        <div className={`flex border-2 ${borderColor} h-16 md:h-20`}>
                            <div className={`w-[20%] border-r-2 ${borderColor} flex flex-col justify-center items-center p-1 text-center`}>
                                <span className="font-bold text-lg md:text-xl flex items-center justify-center">
                                    <Word k="名前" f="なまえ" v="tên" />
                                </span>
                            </div>
                            <div className="w-[80%] flex items-center px-4 font-jlpt text-xl md:text-2xl uppercase">
                                {examineeName || "NGUYEN VAN A"}
                            </div>
                        </div>
                    </div>

                    {/* Start Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={onStart}
                            className={`group w-full max-w-md px-8 py-4 ${btnBg} ${btnText} text-xl md:text-2xl font-bold tracking-widest ${btnHover} transition-colors border-2 border-transparent hover:border-black shadow-lg`}
                        >
                            <span className="block">試験を始める</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default JLPTCoverPage;
