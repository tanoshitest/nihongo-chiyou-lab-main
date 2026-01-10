
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ALL_TESTS, ALL_GRAMMAR_TESTS, Question } from "@/data/minnaTest9Data";

// Helper to parse Furigana text
const FuriganaText = ({ text }: { text: string }) => {
    if (!text) return null;
    const parts = text.split(/(\[[^\]]+?\])/g);
    return (
        <span>
            {parts.map((part, i) => {
                const match3 = part.match(/^\[([^\|]+)\|([^\|]+)\|([^\]]+)\]$/);
                if (match3) {
                    return (
                        <span key={i} className="mx-1 font-medium text-[#008001]">
                            {match3[1]}
                            <span className="text-foreground font-normal ml-0.5">({match3[2]})</span>
                            <span className="text-muted-foreground font-normal ml-1">- {match3[3]}</span>
                        </span>
                    );
                }
                const match2 = part.match(/^\[([^\|]+)\|([^\]]+)\]$/);
                if (match2) {
                    return (
                        <span key={i} className="mx-1 font-medium text-[#008001]">
                            {match2[1]}
                            <span className="text-foreground font-normal ml-0.5">({match2[2]})</span>
                        </span>
                    );
                }
                const matchMeaning = part.match(/^\[([^\|]+)\|\|([^\]]+)\]$/);
                if (matchMeaning) {
                    return (
                        <span key={i} className="mx-1 font-medium text-[#008001]">
                            {matchMeaning[1]}
                            <span className="text-muted-foreground font-normal ml-1">({matchMeaning[2]})</span>
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </span>
    );
};

const QuestionItem = ({
    index,
    q,
    userAnswer,
    showResult,
    onSelect
}: {
    index: number;
    q: Question;
    userAnswer?: string;
    showResult: boolean;
    onSelect: (val: string) => void;
}) => {
    const isCorrect = userAnswer === q.answer;
    const isSelected = !!userAnswer;

    return (
        <Card className={cn(
            "border transition-colors",
            showResult
                ? (isCorrect ? "border-[#008001]/50 bg-[#008001]/5" : "border-red-500/50 bg-red-50")
                : "hover:border-gray-400"
        )}>
            <CardHeader className="py-3 px-4 pb-0">
                {q.text_context && (
                    <div className="mb-2 p-2 bg-muted/30 rounded text-sm text-muted-foreground italic border-l-2 border-[#008001]/30">
                        {q.text_context}
                    </div>
                )}
                <CardTitle className="text-base font-medium flex items-start gap-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full mt-0.5 flex-shrink-0">Câu {index}</span>
                    <span className="leading-snug" dangerouslySetInnerHTML={{ __html: q.question }} />
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-3">
                <RadioGroup value={userAnswer} onValueChange={onSelect} className="grid grid-cols-1 gap-6">
                    {q.options.map((opt: string, i: number) => {
                        const isAnswer = opt === q.answer;
                        const isChecked = userAnswer === opt;
                        let itemClass = "border-gray-200 hover:border-[#008001]/50 hover:bg-[#008001]/5 cursor-pointer";
                        if (showResult) {
                            if (isAnswer) itemClass = "border-[#008001] bg-[#008001]/10 text-[#008001] font-medium";
                            else if (isChecked && !isCorrect) itemClass = "border-red-500 bg-red-100 text-red-700";
                            else itemClass = "opacity-50";
                        } else if (isChecked) {
                            itemClass = "border-[#008001] bg-[#008001]/10 text-[#008001]";
                        }

                        return (
                            <div key={i} className={cn("flex items-center space-x-2 border rounded-md p-2 transition-all", itemClass, showResult && "pointer-events-none")}>
                                <RadioGroupItem value={opt} id={`q${q.id}-opt${i}`} className="data-[state=checked]:border-[#008001] data-[state=checked]:text-[#008001]" />
                                <Label htmlFor={`q${q.id}-opt${i}`} className="flex-1 cursor-pointer">{opt}</Label>
                                {showResult && isAnswer && <CheckCircle2 className="w-4 h-4 text-[#008001] ml-auto shrink-0" />}
                                {showResult && isChecked && !isCorrect && <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0" />}
                            </div>
                        )
                    })}
                </RadioGroup>
                {showResult && (
                    <div className="mt-3 text-sm bg-white p-3 rounded border text-muted-foreground animate-in fade-in slide-in-from-top-2 whitespace-pre-wrap leading-loose">
                        <span className="font-semibold text-foreground block mb-1">Giải thích:</span>
                        <FuriganaText text={q.explain.replace(/\], \[/g, '],\n[')} />
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

const MinnaTest9 = () => {
    // Kanji Test State
    const [selectedExamId, setSelectedExamId] = useState(1);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);

    // Grammar Test State
    const [selectedGrammarExamId, setSelectedGrammarExamId] = useState(1);
    const [grammarAnswers, setGrammarAnswers] = useState<Record<number, string>>({});
    const [showGrammarResults, setShowGrammarResults] = useState(false);

    // Exam Data
    const currentExamData = ALL_TESTS && ALL_TESTS[selectedExamId] ? ALL_TESTS[selectedExamId] : [];
    const currentGrammarData = ALL_GRAMMAR_TESTS && ALL_GRAMMAR_TESTS[selectedGrammarExamId] ? ALL_GRAMMAR_TESTS[selectedGrammarExamId] : [];

    useEffect(() => {
        setAnswers({});
        setShowResults(false);
    }, [selectedExamId]);

    useEffect(() => {
        setGrammarAnswers({});
        setShowGrammarResults(false);
    }, [selectedGrammarExamId]);

    const handleSelect = (questionId: number, value: string) => {
        if (showResults) return;
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleGrammarSelect = (questionId: number, value: string) => {
        if (showGrammarResults) return;
        setGrammarAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const calculateScore = (data: Question[], userAnswers: Record<number, string>) => {
        let correct = 0;
        if (!data) return 0;
        data.forEach(q => {
            if (userAnswers[q.id] === q.answer) correct++;
        });
        return correct;
    };

    const score = calculateScore(currentExamData, answers);
    const grammarScore = calculateScore(currentGrammarData, grammarAnswers);

    const renderQuiz = (
        data: Question[],
        userAnswers: Record<number, string>,
        showResult: boolean,
        onSelect: (id: number, val: string) => void,
        scoreVal: number,
        setShowResult: (val: boolean) => void,
        setAnswersVal: (val: Record<number, string>) => void,
        examId: number,
        setExamId: (id: number) => void
    ) => {
        if (!data || data.length === 0) return <div className="p-8 text-center text-muted-foreground">Chưa có dữ liệu cho đề này.</div>;
        const total = data.length;

        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-muted/50 p-4 rounded-md">
                    <div>
                        <h2 className="text-xl font-bold">Đề thi {data[0]?.section?.includes("Mondai") ? "Trắc nhiệm" : "Tổng hợp"}</h2>
                        <p className="text-sm text-muted-foreground">Số câu: {total}</p>
                    </div>

                    {/* Exam Selector */}
                    <div className="flex gap-2">
                        {[1, 2, 3].map(id => (
                            <Button
                                key={id}
                                variant={examId === id ? "default" : "outline"}
                                className={cn(
                                    "gap-2",
                                    examId === id ? "bg-[#008001] hover:bg-[#006801]" : "hover:text-[#008001] hover:border-[#008001]"
                                )}
                                onClick={() => setExamId(id)}
                            >
                                <span className="text-lg">📄</span>
                                Đề {id}
                            </Button>
                        ))}
                    </div>
                </div>

                {showResult && (
                    <div className="text-center p-4 bg-[#008001]/10 rounded-lg border border-[#008001]/20">
                        <p className="text-lg font-medium text-foreground">Kết quả của bạn</p>
                        <span className="text-4xl font-bold text-[#008001]">{scoreVal}/{total}</span>
                    </div>
                )}

                <div className="space-y-6 mt-6">
                    {data.map((q, idx) => (
                        <div key={q.id}>
                            {(idx === 0 || data[idx - 1].section !== q.section) && q.section && (
                                <h3 className="text-lg font-bold border-b pb-2 mb-4 text-[#008001] mt-8 first:mt-0">{q.section}</h3>
                            )}
                            <QuestionItem
                                index={idx + 1}
                                q={q}
                                userAnswer={userAnswers[q.id]}
                                showResult={showResult}
                                onSelect={(val) => onSelect(q.id, val)}
                            />
                        </div>
                    ))}
                </div>

                <div className="pt-8 flex justify-center">
                    {!showResult ? (
                        <Button
                            size="lg"
                            className="bg-[#008001] hover:bg-[#006801] min-w-[200px]"
                            onClick={() => setShowResult(true)}
                        >
                            Nộp bài
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            variant="outline"
                            className="min-w-[200px]"
                            onClick={() => {
                                setShowResult(false);
                                setAnswersVal({});
                                window.scrollTo(0, 0);
                            }}
                        >
                            Làm lại
                        </Button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#008001] mb-2">Bài Kiểm Tra 9 - N5</h1>
                <p className="text-muted-foreground mb-6">Tổng hợp kiến thức Bài 17 & 18</p>
                <Tabs defaultValue="kanji-vocab" className="space-y-6">
                    <TabsList className="grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="kanji-vocab">Kanji - Từ vựng</TabsTrigger>
                        <TabsTrigger value="grammar">Ngữ pháp</TabsTrigger>
                    </TabsList>
                    <TabsContent value="kanji-vocab" className="space-y-8">
                        {renderQuiz(
                            currentExamData,
                            answers,
                            showResults,
                            handleSelect,
                            score,
                            setShowResults,
                            setAnswers,
                            selectedExamId,
                            setSelectedExamId
                        )}
                    </TabsContent>
                    <TabsContent value="grammar" className="space-y-8">
                        {renderQuiz(
                            currentGrammarData,
                            grammarAnswers,
                            showGrammarResults,
                            handleGrammarSelect,
                            grammarScore,
                            setShowGrammarResults,
                            setGrammarAnswers,
                            selectedGrammarExamId,
                            setSelectedGrammarExamId
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};

export default MinnaTest9;
