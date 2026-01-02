import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Clock, 
  BookOpen, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Trophy,
  AlertTriangle,
  Play,
  RotateCcw
} from "lucide-react";
import {
  N5_EXAM_STRUCTURE,
  generateMockExamData,
  ExamQuestion,
  ExamData,
  calculateSectionScore,
  calculateScaledScore,
  checkPassStatus,
} from "@/data/jlptN5ExamData";
import { cn } from "@/lib/utils";

type ExamState = 
  | "intro" 
  | "section1" 
  | "section2" 
  | "section3" 
  | "result1"
  | "result2"
  | "result3"
  | "final_result" 
  | "review";

interface SectionAnswers {
  section1: Record<number, string>;
  section2: Record<number, string>;
  section3: Record<number, string>;
}

interface ExamRunnerProps {
  level?: string;
  year?: number;
  session?: "july" | "december";
}

export function ExamRunner({ level = "N5", year = 2024, session = "july" }: ExamRunnerProps) {
  const sessionLabel = session === "july" ? "Kỳ tháng 7" : "Kỳ tháng 12";
  const [examState, setExamState] = useState<ExamState>("intro");
  const [examData, setExamData] = useState<ExamData | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<SectionAnswers>({
    section1: {},
    section2: {},
    section3: {},
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ section1: 0, section2: 0, section3: 0 });
  const [rawScores, setRawScores] = useState({ section1: 0, section2: 0, section3: 0 });

  // Initialize exam data
  useEffect(() => {
    setExamData(generateMockExamData());
  }, []);

  // Calculate total time for all sections
  const getTotalTime = () => {
    return N5_EXAM_STRUCTURE.sections.reduce((acc, s) => acc + s.timeLimit, 0);
  };

  // Get current section index (0, 1, 2)
  const getCurrentSectionIndex = () => {
    if (examState === "section1") return 0;
    if (examState === "section2") return 1;
    if (examState === "section3") return 2;
    return -1;
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getCurrentSection = () => {
    if (examState === "section1") return N5_EXAM_STRUCTURE.sections[0];
    if (examState === "section2") return N5_EXAM_STRUCTURE.sections[1];
    if (examState === "section3") return N5_EXAM_STRUCTURE.sections[2];
    return null;
  };

  const getCurrentQuestions = (): ExamQuestion[] => {
    if (!examData) return [];
    if (examState === "section1") return examData.section1;
    if (examState === "section2") return examData.section2;
    if (examState === "section3") return examData.section3;
    return [];
  };

  const getCurrentAnswers = (): Record<number, string> => {
    if (examState === "section1") return answers.section1;
    if (examState === "section2") return answers.section2;
    if (examState === "section3") return answers.section3;
    return {};
  };

  const handleStartExam = () => {
    setTimeLeft(N5_EXAM_STRUCTURE.sections[0].timeLimit);
    setCurrentQuestionIndex(0);
    setExamState("section1");
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (examState === "section1") {
      setAnswers((prev) => ({ ...prev, section1: { ...prev.section1, [questionId]: answer } }));
    } else if (examState === "section2") {
      setAnswers((prev) => ({ ...prev, section2: { ...prev.section2, [questionId]: answer } }));
    } else if (examState === "section3") {
      setAnswers((prev) => ({ ...prev, section3: { ...prev.section3, [questionId]: answer } }));
    }
  };

  // Submit section and show section result
  const handleSubmitSection = useCallback(() => {
    if (!examData) return;

    if (examState === "section1") {
      const raw = calculateSectionScore(answers.section1, examData.section1);
      const scaled = calculateScaledScore(raw, examData.section1.length, 60);
      setRawScores(prev => ({ ...prev, section1: raw }));
      setScores(prev => ({ ...prev, section1: scaled }));
      setExamState("result1");
    } else if (examState === "section2") {
      const raw = calculateSectionScore(answers.section2, examData.section2);
      const scaled = calculateScaledScore(raw, examData.section2.length, 60);
      setRawScores(prev => ({ ...prev, section2: raw }));
      setScores(prev => ({ ...prev, section2: scaled }));
      setExamState("result2");
    } else if (examState === "section3") {
      const raw = calculateSectionScore(answers.section3, examData.section3);
      const scaled = calculateScaledScore(raw, examData.section3.length, 60);
      setRawScores(prev => ({ ...prev, section3: raw }));
      setScores(prev => ({ ...prev, section3: scaled }));
      setExamState("result3");
    }
  }, [examData, answers, examState]);

  // Timer logic - auto submit section when time is up
  useEffect(() => {
    if (!["section1", "section2", "section3"].includes(examState)) return;

    if (timeLeft <= 0) {
      handleSubmitSection();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, examState, handleSubmitSection]);

  // Move to next section from section result
  const handleContinueToNextSection = useCallback(() => {
    if (examState === "result1") {
      setTimeLeft(N5_EXAM_STRUCTURE.sections[1].timeLimit);
      setCurrentQuestionIndex(0);
      setExamState("section2");
    } else if (examState === "result2") {
      setTimeLeft(N5_EXAM_STRUCTURE.sections[2].timeLimit);
      setCurrentQuestionIndex(0);
      setExamState("section3");
    } else if (examState === "result3") {
      setExamState("final_result");
    }
  }, [examState]);

  const handleRestartExam = () => {
    setExamState("intro");
    setAnswers({ section1: {}, section2: {}, section3: {} });
    setScores({ section1: 0, section2: 0, section3: 0 });
    setRawScores({ section1: 0, section2: 0, section3: 0 });
    setCurrentQuestionIndex(0);
    setExamData(generateMockExamData());
  };

  // RENDER: Intro State
  if (examState === "intro") {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center bg-primary/5">
            <CardTitle className="text-3xl text-primary flex items-center justify-center gap-3">
                <BookOpen className="h-8 w-8" />
                JLPT {level} - Năm {year} ({sessionLabel})
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Đề thi thử theo chuẩn JLPT
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                {N5_EXAM_STRUCTURE.sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">{section.name}</h3>
                        <p className="text-sm text-muted-foreground">{section.nameJa}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{section.timeLimit / 60} phút</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {section.totalQuestions} câu
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  Điều kiện đậu N5:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tổng điểm ≥ 80/180</li>
                  <li>• Mỗi phần thi ≥ 19/60 điểm</li>
                </ul>
              </div>

              <Button
                onClick={handleStartExam}
                size="lg"
                className="w-full text-lg h-14"
              >
                <Play className="mr-2 h-5 w-5" />
                Bắt đầu làm bài
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // RENDER: Taking Section
  if (["section1", "section2", "section3"].includes(examState)) {
    const section = getCurrentSection();
    const questions = getCurrentQuestions();
    const currentAnswers = getCurrentAnswers();
    const isListening = examState === "section3";

    return (
      <div className="min-h-screen bg-background">
        {/* Header with Timer */}
        <div className="sticky top-0 z-50 bg-card border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">{section?.name}</h2>
                <p className="text-sm text-muted-foreground">{section?.nameJa}</p>
              </div>
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xl font-bold",
                timeLeft <= 60 ? "bg-destructive/10 text-destructive animate-pulse" : "bg-primary/10 text-primary"
              )}>
                <Clock className="h-5 w-5" />
                {formatTime(timeLeft)}
              </div>
            </div>
            <Progress 
              value={(Object.keys(currentAnswers).length / questions.length) * 100} 
              className="mt-2 h-2" 
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          <div className="space-y-6 pb-24">
            {questions.map((question, index) => (
              <Card
                key={question.id}
                id={`question-${question.id}`}
                className={cn(
                  "border-2 transition-colors",
                  currentAnswers[question.id] ? "border-primary/30" : "border-transparent"
                )}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-lg">{question.questionText}</p>
                        {isListening && (
                          <Button variant="outline" size="sm" className="shrink-0 ml-2">
                            <Volume2 className="h-4 w-4 mr-1" />
                            Phát âm thanh
                          </Button>
                        )}
                      </div>
                      <RadioGroup
                        value={currentAnswers[question.id] || ""}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                        className="grid grid-cols-2 gap-3"
                      >
                        {question.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={option}
                              id={`q${question.id}-opt${optIndex}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`q${question.id}-opt${optIndex}`}
                              className={cn(
                                "flex items-center gap-3 w-full p-3 rounded-lg border-2 cursor-pointer transition-all",
                                currentAnswers[question.id] === option
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              )}
                            >
                              <span className="h-6 w-6 rounded-full border-2 flex items-center justify-center text-sm font-medium shrink-0">
                                {String.fromCharCode(65 + optIndex)}
                              </span>
                              <span>{option}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fixed Submit Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Đã trả lời: {Object.keys(currentAnswers).length}/{questions.length}
            </div>
            <Button onClick={handleSubmitSection} size="lg">
              Nộp phần {getCurrentSectionIndex() + 1}
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: Section Result
  if (["result1", "result2", "result3"].includes(examState)) {
    const sectionIndex = examState === "result1" ? 0 : examState === "result2" ? 1 : 2;
    const section = N5_EXAM_STRUCTURE.sections[sectionIndex];
    const score = sectionIndex === 0 ? scores.section1 : sectionIndex === 1 ? scores.section2 : scores.section3;
    const isPassing = score >= section.passingScore;
    const isLastSection = examState === "result3";

    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className={cn(
              "p-8 text-center",
              isPassing ? "bg-success/10" : "bg-destructive/10"
            )}>
              {isPassing ? (
                <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
              ) : (
                <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              )}
              <h2 className="text-2xl font-bold mb-2">
                Kết quả phần {sectionIndex + 1}: {section.name}
              </h2>
              <p className="text-4xl font-bold my-4">
                {score}/{section.maxScore}
              </p>
              <p className={cn(
                "text-lg",
                isPassing ? "text-success" : "text-destructive"
              )}>
                {isPassing ? "Đạt ngưỡng điểm!" : `Chưa đạt (cần tối thiểu ${section.passingScore} điểm)`}
              </p>
            </div>

            <CardContent className="p-6">
              <div className="mb-6">
                <Progress 
                  value={(score / section.maxScore) * 100} 
                  className={cn(
                    "h-4",
                    isPassing ? "[&>div]:bg-success" : "[&>div]:bg-destructive"
                  )}
                />
              </div>

              <Button
                onClick={handleContinueToNextSection}
                className="w-full"
                size="lg"
              >
                {isLastSection ? (
                  <>
                    Xem kết quả tổng
                    <Trophy className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Tiếp tục phần {sectionIndex + 2}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // RENDER: Final Result
  if (examState === "final_result") {
    const passResult = checkPassStatus(scores.section1, scores.section2, scores.section3);

    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className={cn(
              "p-8 text-center",
              passResult.passed ? "bg-success/10" : "bg-destructive/10"
            )}>
              {passResult.passed ? (
                <Trophy className="h-20 w-20 text-success mx-auto mb-4" />
              ) : (
                <XCircle className="h-20 w-20 text-destructive mx-auto mb-4" />
              )}
              <h2 className="text-3xl font-bold mb-2">
                {passResult.passed ? "Chúc mừng! Bạn đã ĐẬU!" : "Chưa đạt"}
              </h2>
              <p className="text-5xl font-bold my-4">
                {passResult.totalScore}/180
              </p>
              {!passResult.passed && passResult.reason && (
                <p className="text-destructive">{passResult.reason}</p>
              )}
            </div>

            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                {N5_EXAM_STRUCTURE.sections.map((section, index) => {
                  const score = index === 0 ? scores.section1 : index === 1 ? scores.section2 : scores.section3;
                  const isPassing = score >= section.passingScore;

                  return (
                    <div key={section.id} className="p-4 rounded-lg bg-muted/50 border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{section.name}</span>
                        <span className={cn(
                          "font-bold",
                          isPassing ? "text-success" : "text-destructive"
                        )}>
                          {score}/{section.maxScore}
                        </span>
                      </div>
                      <Progress 
                        value={(score / section.maxScore) * 100} 
                        className={cn(
                          "h-3",
                          isPassing ? "[&>div]:bg-success" : "[&>div]:bg-destructive"
                        )}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Ngưỡng đậu: {section.passingScore} điểm
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setExamState("review")}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  Xem lại đáp án
                </Button>
                <Button
                  onClick={handleRestartExam}
                  className="flex-1"
                  size="lg"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Làm lại
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // RENDER: Review Mode
  if (examState === "review" && examData) {
    const allQuestions = [...examData.section1, ...examData.section2, ...examData.section3];
    const allAnswers = { ...answers.section1, ...answers.section2, ...answers.section3 };

    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Xem lại đáp án & Giải thích</h2>
            <Button onClick={() => setExamState("final_result")} variant="outline">
              Quay lại kết quả
            </Button>
          </div>

          <div className="space-y-4">
            {allQuestions.map((question, index) => {
              const userAnswer = allAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <Card
                  key={question.id}
                  className={cn(
                    "border-2",
                    isCorrect ? "border-success/50" : "border-destructive/50"
                  )}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                        isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                      )}>
                        {isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      </div>
                      <div className="flex-1 space-y-3">
                        <p className="font-medium">{question.questionText}</p>

                        <div className="grid grid-cols-2 gap-2">
                          {question.options.map((option, optIndex) => (
                            <div
                              key={optIndex}
                              className={cn(
                                "p-3 rounded-lg border-2",
                                option === question.correctAnswer
                                  ? "border-success bg-success/10"
                                  : option === userAnswer && !isCorrect
                                  ? "border-destructive bg-destructive/10"
                                  : "border-border"
                              )}
                            >
                              <span className="font-medium mr-2">
                                {String.fromCharCode(65 + optIndex)}.
                              </span>
                              {option}
                              {option === question.correctAnswer && (
                                <CheckCircle2 className="h-4 w-4 text-success inline ml-2" />
                              )}
                              {option === userAnswer && !isCorrect && (
                                <XCircle className="h-4 w-4 text-destructive inline ml-2" />
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="bg-accent p-4 rounded-lg mt-3">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Giải thích: </span>
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button onClick={handleRestartExam} size="lg">
              <RotateCcw className="mr-2 h-4 w-4" />
              Làm bài thi mới
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
