
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

    return (
        <div className={`h-full w-full ${bgColor} ${textColor} p-4 flex items-center justify-center select-none font-jlpt overflow-hidden`}>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch h-full py-4">

                {/* Left Column: Notes Section (Chuu-i) */}
                <div className="w-full h-full flex flex-col justify-center">
                    <div className={`${borderColor} border p-4 lg:p-6 relative flex flex-col justify-center rounded-sm`}>
                        <div className="text-center mb-4">
                            <h3 className="text-xl md:text-2xl font-bold tracking-widest inline-block">
                                ちゅうい
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {[
                                { jp: "しけんがはじまるまで、このもんだいようしをあけないでください。" },
                                { jp: "このもんだいようしを、もちかえることはできません。" },
                                { jp: "じゅけんばんごうとなまえを、したのらんにかいてください。" },
                                { jp: "このもんだいようしのなかに、かいとうようしがはいっています。" },
                                { jp: "しけんがはじまるまで、しずかにまってください。" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-2 items-start leading-snug">
                                    <span className="font-bold text-base">{idx + 1}.</span>
                                    <div>
                                        <p className="text-base font-bold leading-tight">{item.jp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Header, Inputs, Button */}
                <div className="flex flex-col h-full justify-center space-y-4 lg:space-y-6">

                    {/* Header Section */}
                    {isBlue ? (
                        // Special Layout for Listening (Blue)
                        <div className="text-center space-y-4 py-8">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-widest leading-none">問題例</h2>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-widest leading-none py-2">{level}</h1>
                            {/* Listening Title */}
                            <h2 className="text-3xl md:text-4xl font-bold tracking-widest leading-none mt-2">
                                {title || "聴解"}
                            </h2>
                        </div>
                    ) : (
                        // Standard Layout
                        <div className="text-center space-y-1">
                            <h1 className="text-7xl md:text-8xl font-bold tracking-widest leading-none">{level}</h1>
                            <h2 className="text-xl md:text-2xl font-bold mt-1 tracking-wide">
                                {sectionName || title}
                            </h2>
                            {subTitle && <div className="text-base mt-1">{subTitle}</div>}
                        </div>
                    )}

                    {/* Input Boxes Section */}
                    <div className="w-full space-y-3">
                        {/* Examinee Number */}
                        <div className={`flex border ${borderColor} h-14 md:h-16`}>
                            <div className={`w-[40%] border-r ${borderColor} flex flex-col justify-center items-center p-1 text-center`}>
                                <span className="font-bold text-base md:text-lg">じゅけんばんごう</span>
                            </div>
                            <div className="w-[60%] flex items-center justify-center px-4 font-mono text-lg md:text-xl tracking-widest uppercase">
                                {examineeNumber || "0000-0000"}
                            </div>
                        </div>

                        {/* Name */}
                        <div className={`flex border ${borderColor} h-14 md:h-16`}>
                            <div className={`w-[20%] border-r ${borderColor} flex flex-col justify-center items-center p-1 text-center`}>
                                <span className="font-bold text-base md:text-lg">なまえ</span>
                            </div>
                            <div className="w-[80%] flex items-center px-4 font-jlpt text-lg md:text-xl uppercase">
                                {examineeName || "NGUYEN VAN A"}
                            </div>
                        </div>
                    </div>

                    {/* Start Button */}
                    <div className="flex justify-center pt-2">
                        <button
                            onClick={onStart}
                            className={`group w-full max-w-sm px-6 py-3 ${btnBg} ${btnText} text-lg font-bold tracking-widest ${btnHover} transition-colors border-2 border-transparent hover:border-black`}
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
