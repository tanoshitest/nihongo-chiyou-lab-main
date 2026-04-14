
import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import JLPTImageGrid from './JLPTImageGrid';
import { JLPTMondai } from '@/data/jlptN5_Real2025';
import KanjiAnnotated from './KanjiAnnotated';
import KanjiBreakdown from './KanjiBreakdown';

export interface JLPTQuestionViewProps {
    mondaiList: JLPTMondai[];
    answers: Record<number, string | string[] | null>;
    onAnswer?: (questionId: number, answer: string) => void;
    hideQuestionId?: boolean;
    showResults?: boolean;
    showAnnotations?: boolean;
}

const JLPTQuestionView: React.FC<JLPTQuestionViewProps> = ({
    mondaiList,
    answers,
    onAnswer,
    hideQuestionId = false,
    showResults = false,
    showAnnotations = false,
}) => {
    // Refs for smooth scrolling if needed
    const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-12 pb-32 font-jlpt text-black">
            {mondaiList.map((mondai) => (
                <div key={mondai.id} className="space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
                    {/* Questions List */}
                    <div className="space-y-12 pl-0 md:pl-4">
                        {mondai.questions.map((q, qIdx) => {
                            const currentAnswer = answers[q.id];
                            const isCorrect = showResults && String(currentAnswer) === String(q.correctAnswer);
                            const isWrong = showResults && currentAnswer !== undefined && String(currentAnswer) !== String(q.correctAnswer);

                            return (
                                <div
                                    key={q.id}
                                    ref={(el) => (questionRefs.current[q.id] = el)}
                                    className={cn(
                                        "group scroll-mt-24",
                                        showResults ? (isCorrect ? "opacity-100" : "opacity-100") : ""
                                    )}
                                >
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                                        {/* Question Number (Square Box) */}
                                        <div className="flex-shrink-0 pt-1">
                                            <div className={cn(
                                                "relative w-10 h-10 flex items-center justify-center border border-black bg-white text-xl font-bold transition-colors",
                                                // currentAnswer !== undefined && !showResults ? "bg-black text-white border-black" : "", // Removed fill
                                                isCorrect ? "bg-white border-black text-black ring-2 ring-green-600" : "",
                                                isWrong ? "bg-white border-black text-black ring-2 ring-red-600" : ""
                                            )}>
                                                {/* Number */}
                                                {!hideQuestionId ? (
                                                    <span>{q.id}</span>
                                                ) : (
                                                    <span className="text-sm">問{q.id}</span>
                                                )}

                                                {/* Status Indicator (Check/X) */}
                                                {showResults && (
                                                    <div className="absolute -top-3 -right-3 bg-white rounded-full p-0.5 border shadow-sm z-10">
                                                        {isCorrect ? (
                                                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Question Content */}
                                        <div className="flex-grow space-y-6 pt-1 w-full">
                                            {/* Question Text / Image */}
                                            {typeof q.questionText === 'string' ? (
                                                showResults || showAnnotations ? (
                                                    // In review mode or forced annotation mode: show kanji annotations
                                                    <div className="text-xl md:text-2xl leading-relaxed tracking-wide">
                                                        <KanjiAnnotated
                                                            html={q.questionText}
                                                            showAnnotations={true}
                                                            className="text-xl md:text-2xl"
                                                        />
                                                    </div>
                                                ) : (
                                                    // In exam mode: plain HTML render
                                                    <div
                                                        className="text-xl md:text-2xl leading-relaxed tracking-wide [&_u]:underline-offset-4 [&_u]:decoration-2"
                                                        dangerouslySetInnerHTML={{ __html: q.questionText }}
                                                    />
                                                )
                                            ) : (
                                                <div className="text-xl md:text-2xl leading-relaxed tracking-wide">
                                                    {q.questionText}
                                                </div>
                                            )}

                                            {q.imageUrl && (
                                                <div className="max-w-md overflow-hidden">
                                                    <img
                                                        src={q.imageUrl}
                                                        alt="Question Illustration"
                                                        className="w-full h-auto"
                                                        style={q.imageStyle}
                                                    />
                                                </div>
                                            )}

                                            {q.imageGridItems && (
                                                <JLPTImageGrid
                                                    images={q.imageGridItems.map((item, i) => ({
                                                        imageUrl: item.imageUrl,
                                                        label: String(i + 1),
                                                        style: item.style
                                                    }))}
                                                    gridLayout="2x2"
                                                />
                                            )}

                                            {q.imageGridUrls && !q.imageGridItems && (
                                                <JLPTImageGrid
                                                    images={q.imageGridUrls.map((url, i) => ({ imageUrl: url, label: String(i + 1) }))}
                                                    gridLayout="2x2"
                                                />
                                            )}

                                            {/* Options */}
                                            <div className={cn(
                                                "grid gap-x-8 gap-y-4 pt-3",
                                                q.optionsLayout === '1-col' ? "grid-cols-1" :
                                                    q.optionsLayout === '2-col' ? "grid-cols-1 md:grid-cols-2" :
                                                        q.optionsLayout === '3-col' ? "grid-cols-1 md:grid-cols-3" :
                                                            "grid-cols-2 md:grid-cols-4"
                                            )}>
                                                {q.options.map((option, optIdx) => {
                                                    const isSelected = String(currentAnswer) === String(optIdx);
                                                    const isCorrectOption = showResults && String(q.correctAnswer) === String(optIdx);

                                                    return (
                                                        <label
                                                            key={optIdx}
                                                            className={cn(
                                                                "flex items-baseline gap-3 cursor-pointer group/label select-none py-1 relative", // Added relative for positioning
                                                                // Removed explicit bg color changes to keep it paper-like clean
                                                                // isCorrectOption ? "bg-green-50 ring-1 ring-green-200 rounded px-2 -mx-2" : "",
                                                                isSelected && isWrong ? "bg-red-50 ring-1 ring-red-200 rounded px-2 -mx-2" : ""
                                                            )}
                                                        >
                                                            {/* Custom Radio Bubble Ref: ○ 1 Text */}
                                                            <div className="relative flex-shrink-0 top-[2px]">
                                                                <input
                                                                    type="radio"
                                                                    name={`question-${q.id}`}
                                                                    value={optIdx}
                                                                    checked={isSelected}
                                                                    onChange={() => !showResults && onAnswer?.(q.id, String(optIdx))}
                                                                    disabled={showResults}
                                                                    className="sr-only"
                                                                />
                                                                {/* Visual Radio */}
                                                                <div className="flex items-center gap-3 text-lg md:text-xl">
                                                                    {/* Circle Icon - Radio Button */}
                                                                    <div className={cn(
                                                                        "w-4 h-4 rounded-full border border-black flex items-center justify-center transition-all bg-white",
                                                                        isSelected ? "bg-black" : "bg-white" // Keep simple black dot for selection
                                                                    )}>
                                                                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Option Number and Text */}
                                                            <div className={cn(
                                                                "text-lg md:text-xl flex gap-3 items-baseline relative",
                                                                isSelected ? "[text-shadow:0_0_0.9px_currentColor]" : ""
                                                            )}>
                                                                {/* Option Number with Red Circle if Correct */}
                                                                <span className="font-normal relative inline-block">
                                                                    {optIdx + 1}
                                                                    {isCorrectOption && (
                                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-[3px] border-red-400 rounded-full pointer-events-none opacity-80" />
                                                                    )}
                                                                </span>
                                                                <span className={(showResults || showAnnotations) && typeof option === 'string' ? "inline-flex items-end" : ""}>
                                                                    {(showResults || showAnnotations) && typeof option === 'string' ? (
                                                                        <KanjiAnnotated html={option} showAnnotations={true} className="text-lg md:text-xl" />
                                                                    ) : (
                                                                        option
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </label>
                                                    );
                                                })}
                                            </div>

                                            {/* Explanation (Result Mode) */}
                                            {showResults && q.explanation && (
                                                <div className="mt-4 p-4 bg-gray-50 border border-black text-black">
                                                    <span className="font-bold block mb-1">解説 (Giải thích):</span>
                                                    <div className="text-sm md:text-base leading-[2.8] space-y-1">
                                                        <KanjiAnnotated
                                                            html={q.explanation}
                                                            showAnnotations={true}
                                                            className="text-sm md:text-base"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Kanji Breakdown (Result Mode) */}
                                            {showResults && (
                                                <KanjiBreakdown
                                                    questionText={typeof q.questionText === 'string' ? q.questionText : ''}
                                                    options={q.options}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JLPTQuestionView;
