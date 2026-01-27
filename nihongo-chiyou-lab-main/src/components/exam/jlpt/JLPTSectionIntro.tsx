
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
                    <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-2">
                        問題例
                    </h2>
                </div>

                <div>
                    <h1 className="text-8xl md:text-9xl font-bold tracking-widest">
                        {level}
                    </h1>
                </div>

                <div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-wide">
                        {sectionName}
                    </h3>
                    <p className={cn(
                        "text-xl md:text-2xl font-normal mt-4",
                        isBlue ? "text-white/90" : "text-gray-600"
                    )}>
                        {subTitle}
                    </p>
                </div>
            </div>
            {/* Removed visible "Click to continue" text to cleaner look, functionality remains */}
        </div>
    );
};

export default JLPTSectionIntro;
