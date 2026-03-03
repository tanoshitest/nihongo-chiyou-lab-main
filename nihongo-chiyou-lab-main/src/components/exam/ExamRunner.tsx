import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
// import { ScrollArea } from "@/components/ui/scroll-area";
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
  RotateCcw,
  FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

// JLPT Real 2025 Modes
import {
  jlptVocabData,
  jlptGrammarData,
  jlptListeningData,
  calculateJLPTSectionScore,
  JLPTMondai
} from "@/data/jlptN5_Real2025";
import JLPTCoverPage from "@/components/exam/jlpt/JLPTCoverPage";
import JLPTSectionIntro from "@/components/exam/jlpt/JLPTSectionIntro";
import JLPTQuestionView from "@/components/exam/jlpt/JLPTQuestionView";
import { PRACTICE_KANJI_LESSON_1 } from "@/data/practice/kanjiLesson1";
import { PRACTICE_VOCAB_N4_1 } from "@/data/practice/jlptN4Vocab1";

type ExamState =
  | "intro"
  | "section1_intro"
  | "section1"
  | "section2_intro"
  | "section2"
  | "section3_intro"
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
  isPractice?: boolean;
  practiceId?: string;
  onFinish?: () => void;
}

export function ExamRunner({ level = "N5", year = 2024, session = "july", isPractice = false, practiceId, onFinish }: ExamRunnerProps) {
  const sessionLabel = isPractice ? "Luyện tập" : (session === "july" ? "Kỳ tháng 7" : "Kỳ tháng 12");
  const [examState, setExamState] = useState<ExamState>("intro");
  const [examData, setExamData] = useState<ExamData | null>(null);
  const isSpecialPractice = practiceId === "practice-n5-kanji-1" || practiceId === "jlpt-n4-vocabulary-1";

  // ... (rest of state items are same)
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<SectionAnswers>({
    section1: {},
    section2: {},
    section3: {},
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ section1: 0, section2: 0, section3: 0 });
  const [rawScores, setRawScores] = useState({ section1: 0, section2: 0, section3: 0 });

  const audioRef = useRef<HTMLAudioElement>(null);


  // Initialize exam data
  useEffect(() => {
    // Check for specific practice exams
    if (practiceId === "practice-n5-kanji-1" || practiceId === "jlpt-n4-vocabulary-1") {
      // Create a mock ExamData structure where section1 contains our practice questions
      setExamData({
        section1: [], // Not used for this mode as we use JLPTMondai
        section2: [],
        section3: []
      } as any);
      return;
    }

    // If practice mode, we might want to load different structure or generic mock for now
    // For this demo, we will use the standard generateMockExamData but we should ideally custom-tailor it
    // In a real app, fetch(practiceId)
    setExamData(generateMockExamData());
  }, [practiceId]); // Add practiceId dependency

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
    // Determine if this is the "Real JLPT 2025" exam OR our special practice exam
    const isRealJLPT = (session === "july" && year === 2025) || isSpecialPractice;

    if (isRealJLPT) {
      // Special Scoring for Real JLPT 2025
      // We use the helper calculateJLPTSectionScore with the hardcoded data
      let raw = 0;
      let scaled = 0;
      // Max score is 60 per section.
      // We need to know total questions to scale? Or just use raw check?
      // Let's assume raw score mapping for now or simple percentage.

      // TODO: Get max points from data or constant.
      const SECTION_MAX = 60;

      if (examState === "section1") {
        const dataToUse =
          practiceId === "practice-n5-kanji-1" ? PRACTICE_KANJI_LESSON_1 :
            practiceId === "jlpt-n4-vocabulary-1" ? PRACTICE_VOCAB_N4_1 :
              jlptVocabData;
        raw = calculateJLPTSectionScore(answers.section1, dataToUse);
        // Total Questions:
        const totalQ = dataToUse.reduce((acc, m) => acc + m.questions.length, 0);
        scaled = Math.round((raw / totalQ) * SECTION_MAX);

        setRawScores(prev => ({ ...prev, section1: raw }));
        setScores(prev => ({ ...prev, section1: scaled }));
        // Go directly to next section intro OR finish if practice
        if (isSpecialPractice) {
          setExamState("final_result");
          if (onFinish) onFinish();
        } else {
          setExamState("section2_intro");
        }
      } else if (examState === "section2") {
        raw = calculateJLPTSectionScore(answers.section2, jlptGrammarData);
        const totalQ = jlptGrammarData.reduce((acc, m) => acc + m.questions.length, 0);
        scaled = Math.round((raw / totalQ) * SECTION_MAX);

        setRawScores(prev => ({ ...prev, section2: raw }));
        setScores(prev => ({ ...prev, section2: scaled }));
        // Go directly to next section intro
        setExamState("section3_intro");
      } else if (examState === "section3") {
        raw = calculateJLPTSectionScore(answers.section3, jlptListeningData);
        const totalQ = jlptListeningData.reduce((acc, m) => acc + m.questions.length, 0);
        scaled = Math.round((raw / totalQ) * SECTION_MAX);

        setRawScores(prev => ({ ...prev, section3: raw }));
        setScores(prev => ({ ...prev, section3: scaled }));
        // Go directly to final result
        setExamState("final_result");
        if (onFinish) onFinish();
      }
      return;
    }

    // Default Scoring
    if (!examData) return;

    if (examState === "section1") {
      const raw = calculateSectionScore(answers.section1, examData.section1);
      const scaled = calculateScaledScore(raw, examData.section1.length, 60);
      setRawScores(prev => ({ ...prev, section1: raw }));
      setScores(prev => ({ ...prev, section1: scaled }));
      if (isSpecialPractice) {
        setExamState("final_result");
        if (onFinish) onFinish();
      } else {
        setExamState("result1");
      }
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
  }, [examData, answers, examState, session, year, onFinish]);

  // Auto-start for practice exams
  useEffect(() => {
    if (isPractice && examData && examState === "intro") {
      handleStartExam();
    }
  }, [isPractice, examData, examState, isSpecialPractice]);

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
      setExamState("section2_intro");
    } else if (examState === "result2") {
      setExamState("section3_intro");
    } else if (examState === "result3") {
      setExamState("final_result");
      if (onFinish) onFinish();
    }
  }, [examState, onFinish]);

  const handleRestartExam = () => {
    setExamState("intro");
    setAnswers({ section1: {}, section2: {}, section3: {} });
    setScores({ section1: 0, section2: 0, section3: 0 });
    setRawScores({ section1: 0, section2: 0, section3: 0 });
    setCurrentQuestionIndex(0);
    setExamData(generateMockExamData());
  };

  /* -----------------------------------------------------------
   * REAL JLPT 2025 & PRACTICE RENDER LOGIC
   * ----------------------------------------------------------- */
  const isRealJLPT = (session === "july" && year === 2025) || isSpecialPractice;
  if (isRealJLPT) {
    // 1. COVER PAGE
    if (examState === "intro") {
      return (
        <JLPTCoverPage
          onStart={() => setExamState(isSpecialPractice ? "section1" : "section1_intro")}
          level={level}
          sectionName={
            practiceId === "practice-n5-kanji-1" ? "Luyện tập Kanji (Bài 1)" :
              practiceId === "jlpt-n4-vocabulary-1" ? "Luyện tập Từ vựng N4 (Đề 1)" :
                "言語知識（文字・語彙）"
          }
        />
      );
    }

    // 2. SECTION INTRO (Intermediate Step)
    if (["section1_intro", "section2_intro", "section3_intro"].includes(examState)) {
      const introData =
        examState === "section1_intro" ? { section: "言語知識（文字・語彙）", next: "section1" } :
          examState === "section2_intro" ? { section: "言語知識（文法）・読解", next: "section2" } :
            { section: "聴解", next: "section3", variant: 'white' as const };

      return (
        <JLPTSectionIntro
          level={level}
          sectionName={introData.section}
          variant={introData.variant || 'white'}
          onNext={() => {
            if (examState === "section1_intro") {
              setTimeLeft(N5_EXAM_STRUCTURE.sections[0].timeLimit);
              setCurrentQuestionIndex(0);
              setExamState("section1");
            } else if (examState === "section2_intro") {
              setTimeLeft(N5_EXAM_STRUCTURE.sections[1].timeLimit);
              setCurrentQuestionIndex(0);
              setExamState("section2");
            } else if (examState === "section3_intro") {
              setTimeLeft(N5_EXAM_STRUCTURE.sections[2].timeLimit);
              setCurrentQuestionIndex(0);
              setExamState("section3");
            }
          }}
        />
      );
    }

    // 2. TAKING SECTIONS
    if (["section1", "section2", "section3"].includes(examState)) {
      // SPECIAL PRACTICE MODE (Explicit separation)
      // This ensures we NEVER accidentally load real JLPT data for this specific practice
      if (isSpecialPractice && examState === "section1") {
        return (
          <div className="min-h-screen bg-white pb-20 font-jlpt text-black">
            {/* Header with Timer */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-black z-50 flex items-center justify-between px-4 lg:px-8">
              <div className="font-bold text-xl font-sans tracking-wide flex items-center gap-2">
                <span>{practiceId === "jlpt-n4-vocabulary-1" ? "JLPT N4" : "JLPT N5"}</span>
                <span>-</span>
                <span>{practiceId === "jlpt-n4-vocabulary-1" ? "Luyện tập Từ vựng" : "Luyện tập Kanji"}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-lg font-bold bg-black text-white">
                  <Clock className="h-5 w-5" />
                  {formatTime(timeLeft)}
                </div>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                      Nộp bài
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Bạn có chắc chắn muốn nộp bài?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Sau khi nộp, bạn sẽ xem được kết quả ngay lập tức.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Hủy</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSubmitSection} className="bg-red-600 hover:bg-red-700 text-white">
                        Nộp bài
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            <div className="pt-20">
              <JLPTQuestionView
                mondaiList={practiceId === "jlpt-n4-vocabulary-1" ? PRACTICE_VOCAB_N4_1 : PRACTICE_KANJI_LESSON_1}
                answers={answers.section1}
                onAnswer={(qId, val) => handleAnswerChange(qId, val)}
                hideQuestionId={false}
              />
            </div>


          </div>
        );
      }

      const currentJLPTData =
        examState === "section1" ? jlptVocabData :
          examState === "section2" ? jlptGrammarData :
            jlptListeningData;
      const isListening = examState === "section3";

      return (
        <div className="min-h-screen bg-white pb-20 font-jlpt text-black">

          {/* Header with Timer (Simplified for JLPT look) */}
          <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-black z-50 flex items-center justify-between px-4 lg:px-8">
            <div className="font-bold text-xl font-sans tracking-wide flex items-center gap-2">
              <span>JLPT {level.toUpperCase()}</span>
              <span>-</span>
              <span>{year}年{session === 'july' ? '7' : '12'}月</span>
              <span>-</span>
              <span>{examState === 'section1' ? '言語知識（文字・語彙）' : examState === 'section2' ? '言語知識（文法）・読解' : '聴解'}</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Audio Player for Listening */}
              {isListening && (
                <>
                  <div className="border border-black p-1 bg-white rounded-none">
                    <audio ref={audioRef} controls className="h-8 w-64">
                      {/* TODO: Replace with local file '/audio/jlpt_n5_audio.mp3' when available */}
                      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg" />
                      Browser does not support audio.
                    </audio>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 border-black text-black gap-2 bg-white hover:bg-gray-100"
                    onClick={() => window.open('/documents/script.pdf', '_blank')}
                  >
                    <FileText className="h-4 w-4" />
                    Script
                  </Button>
                </>
              )}

              <div className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-lg font-bold bg-black text-white"
              )}>
                <Clock className="h-5 w-5" />
                {formatTime(timeLeft)}
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                    Nộp bài
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Bạn có chắc chắn muốn nộp bài?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Sau khi nộp, bạn sẽ chuyển sang phần thi tiếp theo và không thể quay lại sửa chữa đáp án của phần này.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Hủy</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmitSection} className="bg-red-600 hover:bg-red-700 text-white">
                      Nộp bài
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          <div className="pt-20">
            <JLPTQuestionView
              mondaiList={currentJLPTData}
              answers={answers[examState as keyof SectionAnswers]}
              onAnswer={(qId, val) => handleAnswerChange(qId, val)}
              hideQuestionId={false}
            />
          </div>

          {/* Fixed Submit Button */}
          {!isSpecialPractice && (
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t z-40">
              <div className="max-w-4xl mx-auto flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  JLPT Exam
                </div>
                <Button onClick={handleSubmitSection} size="lg">
                  Nộp phần {examState === 'section1' ? 1 : examState === 'section2' ? 2 : 3}
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
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
      // Determine if Real JLPT 2025
      const isRealJLPT = (session === "july" && year === 2025) || isSpecialPractice;

      if (isRealJLPT) {
        const passResult = checkPassStatus(scores.section1, scores.section2, scores.section3);
        const totalScore = scores.section1 + scores.section2 + scores.section3;
        const isPassed = isSpecialPractice
          ? scores.section1 >= 30
          : totalScore >= 80 && scores.section1 >= 19 && scores.section2 >= 19 && scores.section3 >= 19; // Simplified check

        return (
          <div className="min-h-screen bg-white py-8 px-4 font-jlpt text-black">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* 1. Overview Card - Hide for Special Practice */}
              {!isSpecialPractice && (
                <div className="border border-black bg-white">
                  <div className="p-4 border-b border-black">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl">◎</span>
                      Tổng quan kết quả
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-black">
                      {/* Section 1 Score */}
                      <div className="text-center p-4 border-b md:border-b-0 border-r border-black last:border-r-0 last:border-b-0">
                        <div className="text-sm font-bold mb-1">言語知識（文字・語彙）</div>
                        <div className="text-xs mb-2">{practiceId === 'practice-n5-kanji-1' ? "Kanji Practice" : "Vocabulary Practice"}</div>
                        <div className="text-4xl font-bold my-2">{scores.section1}/60</div>
                        <div className="text-sm">
                          {
                            Object.keys(answers.section1).filter(k => {
                              const dataToUse =
                                practiceId === "practice-n5-kanji-1" ? PRACTICE_KANJI_LESSON_1 :
                                  practiceId === "jlpt-n4-vocabulary-1" ? PRACTICE_VOCAB_N4_1 :
                                    jlptVocabData;
                              const correct = dataToUse.flatMap(m => m.questions).find(q => q.id === Number(k))?.correctAnswer;
                              return String(answers.section1[Number(k)]) === String(correct);
                            }).length
                          }/
                          {
                            (practiceId === "practice-n5-kanji-1" ? PRACTICE_KANJI_LESSON_1 :
                              practiceId === "jlpt-n4-vocabulary-1" ? PRACTICE_VOCAB_N4_1 :
                                jlptVocabData).reduce((acc, m) => acc + m.questions.length, 0)
                          } câu đúng
                        </div>
                      </div>

                      {/* Section 2 Score */}
                      {!isSpecialPractice && (
                        <div className="text-center p-4 border-b md:border-b-0 border-r border-black last:border-r-0 last:border-b-0">
                          <div className="text-sm font-bold mb-1">言語知識（文法）・読解</div>
                          <div className="text-xs mb-2">Language Knowledge (Grammar)</div>
                          <div className="text-4xl font-bold my-2">{scores.section2}/60</div>
                          <div className="text-sm">
                            {Object.keys(answers.section2).filter(k => String(answers.section2[Number(k)]) === String(jlptGrammarData.flatMap(m => m.questions).find(q => q.id === Number(k))?.correctAnswer)).length}/{jlptGrammarData.reduce((acc, m) => acc + m.questions.length, 0)} câu đúng
                          </div>
                        </div>
                      )}

                      {/* Section 3 Score */}
                      {!isSpecialPractice && (
                        <div className="text-center p-4 border-b md:border-b-0 border-r border-black last:border-r-0 last:border-b-0">
                          <div className="text-sm font-bold mb-1">聴解</div>
                          <div className="text-xs mb-2">Listening</div>
                          <div className="text-4xl font-bold my-2">{scores.section3}/60</div>
                          <div className="text-sm">
                            {Object.keys(answers.section3).filter(k => String(answers.section3[Number(k)]) === String(jlptListeningData.flatMap(m => m.questions).find(q => q.id === Number(k))?.correctAnswer)).length}/{jlptListeningData.reduce((acc, m) => acc + m.questions.length, 0)} câu đúng
                          </div>
                        </div>
                      )}

                      {/* Total Score Badge */}
                      <div className="flex flex-col items-center justify-center p-4 bg-white">
                        <div className="text-base font-bold underline mb-1">TỔNG ĐIỂM</div>
                        <div className="text-5xl font-black mb-2">
                          {totalScore}/180
                        </div>
                        <div className="border border-black px-6 py-1 text-lg font-bold bg-black text-white">
                          {isSpecialPractice
                            ? (isPassed ? "HOÀN THÀNH" : "CẦN CỐ GẮNG")
                            : (isPassed ? "ĐẬU (合格)" : "TRƯỢT (不合格)")}
                        </div>
                      </div>
                    </div>

                    {/* Comment Box */}
                    <div className="mt-8 border border-black p-4 flex gap-4">
                      <div className="shrink-0 pt-0.5">
                        <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center font-bold text-sm">!</div>
                      </div>
                      <div>
                        <div className="font-bold underline mb-1">Nhận xét chung:</div>
                        <p className="text-sm leading-relaxed">
                          {isPassed
                            ? "Chúc mừng bạn đã hoàn thành xuất sắc bài thi! Hãy tiếp tục duy trì phong độ nhé!"
                            : "Bạn cần cố gắng hơn ở các phần thi chưa đạt điểm cao. Hãy ôn tập lại từ vựng và luyện nghe thêm nhé!"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Review Tabs / Section Review */}
            <div className="bg-white min-h-[500px]">
              {isSpecialPractice ? (
                // For Special Practice: Show only Section 1 Review directly
                <div className="space-y-8">
                  <div className="border-b border-black mb-6 pb-2">
                    <h2 className="text-xl font-bold">Xem lại đáp án</h2>
                  </div>
                  <JLPTQuestionView
                    mondaiList={practiceId === "jlpt-n4-vocabulary-1" ? PRACTICE_VOCAB_N4_1 : PRACTICE_KANJI_LESSON_1}
                    answers={answers.section1}
                    onAnswer={() => { }}
                    hideQuestionId={false}
                    showResults={true}
                  />
                </div>
              ) : (
                // For Real Exam: Show Tabs
                <Tabs defaultValue="section1" className="w-full">
                  <div className="border-b border-black mb-6">
                    <TabsList className="bg-transparent h-auto p-0 gap-0 w-full justify-center flex-wrap">
                      <TabsTrigger
                        value="section1"
                        className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none px-6 py-3 text-black font-bold border border-black border-b-0 mr-[-1px] mb-[-1px]"
                      >
                        Phần 1 文字・語彙 (Vocab)
                      </TabsTrigger>
                      <TabsTrigger
                        value="section2"
                        className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none px-6 py-3 text-black font-bold border border-black border-b-0 mr-[-1px] mb-[-1px]"
                      >
                        Phần 2 文法・読解 (Grammar)
                      </TabsTrigger>
                      <TabsTrigger
                        value="section3"
                        className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none px-6 py-3 text-black font-bold border border-black border-b-0 mb-[-1px]"
                      >
                        Phần 3 聴解 (Listening)
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="">
                    <TabsContent value="section1" className="mt-0 space-y-8">
                      <JLPTQuestionView
                        mondaiList={jlptVocabData}
                        answers={answers.section1}
                        onAnswer={() => { }}
                        hideQuestionId={false}
                        showResults={true}
                      />
                    </TabsContent>

                    <TabsContent value="section2" className="mt-0 space-y-8">
                      <JLPTQuestionView
                        mondaiList={jlptGrammarData}
                        answers={answers.section2}
                        onAnswer={() => { }}
                        hideQuestionId={false}
                        showResults={true}
                      />
                    </TabsContent>

                    <TabsContent value="section3" className="mt-0 space-y-8">
                      <JLPTQuestionView
                        mondaiList={jlptListeningData}
                        answers={answers.section3}
                        onAnswer={() => { }}
                        hideQuestionId={false}
                        showResults={true}
                      />
                    </TabsContent>
                  </div>
                </Tabs>
              )}
            </div>
          </div>
        );
      }

      // Default Existing Final Result logic (for practice mode or other exams)
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
}
