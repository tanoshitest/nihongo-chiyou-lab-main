
import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

interface JLPTSectionIntroProps {
    onNext: () => void;
    level?: string;
    sectionName?: string;
    subTitle?: string;
    variant?: 'white' | 'blue';
}

const JLPTSectionIntro: React.FC<JLPTSectionIntroProps> = ({
    onNext,
    level = "N5",
    sectionName = "言語知識（文字・語彙）",
    subTitle,
    variant = "white"
}) => {
    // Allow clicking anywhere or pressing Enter to continue
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext]);

    const isBlue = variant === 'blue';

    // Helper for 3-tier text: Furigana (top), Kanji (mid), Vietnamese (bot)
    // Matches JLPTCoverPage styling
    const HeaderWord = ({ k, f, v }: { k: string, f: string, v?: string }) => (
        <span className="inline-flex flex-col items-center align-middle mx-1 leading-none">
            <span className={cn("text-sm md:text-base mb-1 select-none", isBlue ? "text-white/80" : "text-gray-500")}>{f}</span>
            <span className="text-2xl md:text-5xl font-bold">{k}</span>
            {v && <span className={cn("text-sm md:text-base mt-1 font-normal select-none whitespace-nowrap", isBlue ? "text-white/80" : "text-gray-500")}>{v}</span>}
        </span>
    );

    const Word = ({ k, f, v }: { k: string, f: string, v?: string }) => (
        <span className="inline-flex flex-col items-center align-middle mx-1 leading-none">
            <span className={cn("text-xs mb-0.5 select-none", isBlue ? "text-white/80" : "text-gray-500")}>{f}</span>
            <span className="text-xl md:text-3xl font-bold">{k}</span>
            {v && <span className={cn("text-xs mt-0.5 font-normal select-none whitespace-nowrap", isBlue ? "text-white/80" : "text-gray-500")}>{v}</span>}
        </span>
    );

    // Determine content based on sectionName string for Furigana mapping
    const renderSectionContent = () => {
        if (sectionName.includes("文字・語彙")) {
            return (
                <div className="flex items-end justify-center tracking-wide flex-wrap gap-2">
                    <HeaderWord k="言語" f="げんご" v="ngôn ngữ" />
                    <HeaderWord k="知識" f="ちしき" v="kiến thức" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">（</span>
                    <HeaderWord k="文字" f="もじ" v="chữ viết" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">・</span>
                    <HeaderWord k="語彙" f="ごい" v="từ vựng" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">）</span>
                </div>
            );
        } else if (sectionName.includes("文法") || sectionName.includes("読解")) {
            return (
                <div className="flex items-end justify-center tracking-wide flex-wrap gap-2">
                    <HeaderWord k="言語" f="げんご" v="ngôn ngữ" />
                    <HeaderWord k="知識" f="ちしき" v="kiến thức" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">（</span>
                    <HeaderWord k="文法" f="ぶんぽう" v="ngữ pháp" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">・</span>
                    <HeaderWord k="読解" f="どっかい" v="đọc hiểu" />
                    <span className="text-2xl md:text-5xl font-bold self-center pt-2">）</span>
                </div>
            );
        } else if (sectionName.includes("聴解")) {
            return (
                <div className="flex items-end justify-center tracking-wide flex-wrap gap-2">
                    <HeaderWord k="聴解" f="ちょうかい" v="nghe hiểu" />
                </div>
            );
        } else {
            // Fallback
            return <h3 className="text-3xl md:text-5xl font-bold tracking-wide">{sectionName}</h3>;
        }
    };

    return (
        <div
            onClick={onNext}
            className={cn(
                "min-h-screen w-full flex flex-col items-center justify-center cursor-pointer select-none font-jlpt overflow-hidden",
                isBlue ? "bg-[#7da0c8] text-white" : "bg-white text-black"
            )}
        >
            <div className="space-y-16 text-center animate-in fade-in zoom-in duration-500">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-2 flex justify-center items-center gap-2">
                        <Word k="問題例" f="もんだいれい" v="ví dụ câu hỏi" />
                    </h2>
                </div>

                <div>
                    <h1 className="text-8xl md:text-9xl font-bold tracking-widest uppercase">
                        {level}
                    </h1>
                </div>

                <div>
                    {renderSectionContent()}
                    {subTitle && (
                        <p className={cn(
                            "text-xl md:text-2xl font-normal mt-4",
                            isBlue ? "text-white/90" : "text-gray-600"
                        )}>
                            {subTitle}
                        </p>
                    )}
                </div>
            </div>
            {/* Removed visible "Click to continue" text to cleaner look, functionality remains */}
        </div>
    );
};

export default JLPTSectionIntro;
