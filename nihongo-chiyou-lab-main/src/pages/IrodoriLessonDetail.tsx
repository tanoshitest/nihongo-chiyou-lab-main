import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Volume2, BookOpen, PenTool, CheckCircle2, XCircle, RotateCcw, Lightbulb, Target, BookOpenCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getIrodoriLessonData, IrodoriLessonDetail as IrodoriLessonDetailType, IrodoriVocabularyItem, LessonModule } from "@/data/irodoriData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Category label mapping
const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    greeting: "Chào hỏi",
    parting: "Chia tay",
    expression: "Biểu đạt",
    noun: "Danh từ",
    phrase: "Cụm từ"
  };
  return labels[category] || category;
};

// Vocabulary Tab Component
const VocabularyTab = ({ vocabulary }: { vocabulary: IrodoriVocabularyItem[] }) => {
  const handlePlaySound = (word: string) => {
    console.log(`Playing sound for: ${word}`);
  };

  if (vocabulary.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">Chưa có dữ liệu từ vựng cho bài học này.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-[#008001]">Từ vựng bài học ({vocabulary.length} từ)</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">STT</TableHead>
              <TableHead className="w-[180px]">Kana</TableHead>
              <TableHead className="w-[180px]">Romaji</TableHead>
              <TableHead className="w-[100px]">Kanji</TableHead>
              <TableHead>Nghĩa tiếng Việt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vocabulary.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="text-center text-muted-foreground">{index + 1}</TableCell>
                <TableCell className="font-medium text-[#008001]">{item.kana}</TableCell>
                <TableCell className="text-foreground italic">{item.romaji}</TableCell>
                <TableCell className="text-foreground">{item.kanji || '—'}</TableCell>
                <TableCell className="text-muted-foreground">{item.vietnamese}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Bài giảng (Lecture) Tab Component
const LectureTab = ({ modules }: { modules: LessonModule[] }) => {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="space-y-3">
        {modules.map((module, index) => (
          <AccordionItem 
            key={module.module_id} 
            value={module.module_id}
            className="border rounded-lg bg-card overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
              <div className="flex items-start gap-3 text-left">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#008001] text-white text-sm font-bold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#008001]">{module.title}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Target className="w-3 h-3" />
                    {module.objective}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4 pt-2">
                {/* Introduction */}
                {module.content.introduction && (
                  <div className="bg-[#008001]/5 border border-[#008001]/20 rounded-lg p-4">
                    <p className="text-foreground">{module.content.introduction}</p>
                  </div>
                )}

                {/* Vocabulary Focus */}
                {module.content.vocabulary_focus && module.content.vocabulary_focus.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#008001] flex items-center gap-2">
                      <BookOpenCheck className="w-4 h-4" />
                      Từ vựng trọng tâm
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {module.content.vocabulary_focus.map((vocab, vIndex) => (
                        <div key={vIndex} className="p-3 bg-muted/50 rounded-lg space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[#008001]">{vocab.word}</span>
                            <span className="text-muted-foreground text-sm">- {vocab.meaning}</span>
                          </div>
                          {vocab.image && (
                            <div className="rounded-lg overflow-hidden border">
                              <img 
                                src={vocab.image} 
                                alt={vocab.word}
                                className="w-full h-32 object-cover"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dialogues */}
                {module.content.dialogues && module.content.dialogues.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-[#008001] flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Hội thoại mẫu
                    </h4>
                    {module.content.dialogues.map((dialogue) => (
                      <div key={dialogue.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted/50 px-3 py-2 border-b">
                          <p className="text-sm font-medium text-foreground">📍 {dialogue.situation}</p>
                        </div>
                        {dialogue.image && (
                          <div className="border-b">
                            <img 
                              src={dialogue.image} 
                              alt={dialogue.situation}
                              className="w-full h-40 object-cover"
                            />
                          </div>
                        )}
                        <div className="p-3 space-y-2">
                          {dialogue.lines.map((line, lIndex) => (
                            <div key={lIndex} className="flex gap-3 items-start">
                              <span className="flex-shrink-0 w-20 text-sm font-medium text-muted-foreground">
                                {line.speaker}:
                              </span>
                              <div className="flex-1">
                                <p className="text-[#008001] font-medium">{line.japanese}</p>
                                <p className="text-xs text-muted-foreground italic">{line.romaji}</p>
                                <p className="text-sm text-foreground">{line.vietnamese}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Grammar Notes */}
                {module.content.grammar_notes && module.content.grammar_notes.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#008001] flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Ghi chú ngữ pháp
                    </h4>
                    <ul className="space-y-1">
                      {module.content.grammar_notes.map((note, nIndex) => (
                        <li key={nIndex} className="flex items-start gap-2 text-foreground">
                          <span className="text-[#008001]">•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Phonics Rules */}
                {module.content.phonics_rules && module.content.phonics_rules.length > 0 && (
                  <div className="space-y-3">
                    {module.content.phonics_rules.map((rule, rIndex) => (
                      <div key={rIndex} className="border rounded-lg p-4">
                        <h5 className="font-medium text-[#008001] mb-2">🔊 {rule.rule}</h5>
                        <p className="text-sm text-foreground mb-3">{rule.explanation}</p>
                        <div className="space-y-2">
                          {rule.examples.map((ex, eIndex) => (
                            <div key={eIndex} className="flex flex-wrap items-center gap-2 text-sm bg-muted/50 rounded p-2">
                              <span className="font-medium text-[#008001]">{ex.japanese}</span>
                              <span className="text-muted-foreground">→ {ex.vietnamese}</span>
                              {ex.contrast && (
                                <span className="text-xs text-amber-600 dark:text-amber-400">({ex.contrast})</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Culture Tips */}
                {module.content.tips && module.content.tips.length > 0 && (
                  <div className="space-y-3">
                    {module.content.tips.map((tip, tIndex) => (
                      <div key={tIndex} className="border-l-4 border-[#008001] bg-[#008001]/5 rounded-r-lg p-4">
                        <h5 className="font-medium text-[#008001] mb-2">🎌 {tip.title}</h5>
                        <p className="text-sm text-foreground">{tip.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// Quiz Tab Component
const QuizTab = ({ quiz }: { quiz: IrodoriLessonDetailType['quiz'] }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const correctCount = quiz.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const allAnswered = quiz.every(q => userAnswers[q.id]);

  return (
    <div className="space-y-6">
      {isSubmitted && (
        <Card className="border-[#008001]">
          <CardContent className="py-6">
            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-muted-foreground">Kết quả của bạn</p>
              <p className={cn(
                "text-4xl font-bold",
                correctCount === quiz.length ? "text-[#008001]" : 
                correctCount >= quiz.length / 2 ? "text-yellow-600" : "text-destructive"
              )}>
                {correctCount}/{quiz.length}
              </p>
              <p className="text-sm text-muted-foreground">
                {correctCount === quiz.length ? "🎉 Xuất sắc! Bạn đã làm đúng tất cả!" :
                 correctCount >= quiz.length / 2 ? "👍 Khá tốt! Hãy xem lại các câu sai nhé." :
                 "💪 Cố gắng lên! Hãy ôn lại bài học và thử lại."}
              </p>
              <Button onClick={handleReset} variant="outline" className="mt-4">
                <RotateCcw className="w-4 h-4 mr-2" />
                Làm lại
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {quiz.map((question, qIndex) => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        const showResult = isSubmitted;

        return (
          <Card 
            key={question.id}
            className={cn(
              "transition-all",
              showResult && isCorrect && "border-[#008001] bg-[#008001]/5",
              showResult && !isCorrect && userAnswer && "border-destructive bg-destructive/5"
            )}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-start gap-2">
                <span className={cn(
                  "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  showResult && isCorrect ? "bg-[#008001] text-white" :
                  showResult && !isCorrect && userAnswer ? "bg-destructive text-white" :
                  "bg-muted text-muted-foreground"
                )}>
                  {showResult ? (
                    isCorrect ? <CheckCircle2 className="w-4 h-4" /> : 
                    userAnswer ? <XCircle className="w-4 h-4" /> : qIndex + 1
                  ) : qIndex + 1}
                </span>
                <span className="text-foreground">{question.question}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={userAnswer || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
                disabled={isSubmitted}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {question.options.map((option, oIndex) => {
                    const optionLabel = String.fromCharCode(65 + oIndex);
                    const isThisCorrect = option === question.correctAnswer;
                    const isThisSelected = userAnswer === option;

                    return (
                      <div
                        key={oIndex}
                        className={cn(
                          "flex items-center space-x-3 rounded-lg border p-3 transition-all",
                          !isSubmitted && "hover:bg-muted/50 cursor-pointer",
                          isSubmitted && isThisCorrect && "border-[#008001] bg-[#008001]/10",
                          isSubmitted && isThisSelected && !isThisCorrect && "border-destructive bg-destructive/10"
                        )}
                      >
                        <RadioGroupItem
                          value={option}
                          id={`q${question.id}-${oIndex}`}
                          className={cn(
                            isSubmitted && isThisCorrect && "border-[#008001] text-[#008001]",
                            isSubmitted && isThisSelected && !isThisCorrect && "border-destructive text-destructive"
                          )}
                        />
                        <Label
                          htmlFor={`q${question.id}-${oIndex}`}
                          className={cn(
                            "flex-1 cursor-pointer text-sm",
                            isSubmitted && isThisCorrect && "text-[#008001] font-medium",
                            isSubmitted && isThisSelected && !isThisCorrect && "text-destructive"
                          )}
                        >
                          <span className="font-medium mr-2">{optionLabel}.</span>
                          {option}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>

              {showResult && (
                <div className={cn(
                  "p-4 rounded-lg border-l-4",
                  isCorrect ? "bg-[#008001]/5 border-[#008001]" : "bg-amber-50 dark:bg-amber-950/20 border-amber-500"
                )}>
                  <p className="text-sm font-medium mb-1">
                    {isCorrect ? "✅ Chính xác!" : "💡 Giải thích:"}
                  </p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {!isSubmitted && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="bg-[#008001] hover:bg-[#006801] text-white px-8"
            size="lg"
          >
            Nộp bài
          </Button>
        </div>
      )}
    </div>
  );
};

// Get level name in Vietnamese
const getLevelName = (level: string): string => {
  switch (level) {
    case 'nhapmon':
      return 'Nhập môn';
    case 'socap1':
      return 'Sơ cấp 1';
    case 'socap2':
      return 'Sơ cấp 2';
    default:
      return '';
  }
};

// Main Lesson Detail Page
const IrodoriLessonDetail = () => {
  const { level, id } = useParams<{ level: string; id: string }>();
  const lessonId = parseInt(id || "1", 10);
  const lesson = getIrodoriLessonData(level || "", lessonId);
  const levelName = getLevelName(level || "");

  if (!lesson) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <Card className="max-w-md">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Không tìm thấy bài học này.</p>
              <Link to="/irodori">
                <Button className="mt-4">Quay lại danh sách</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
        {/* Lesson Header */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link to="/irodori">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {levelName} - Bài {lesson.id}
                </p>
                <h1 className="text-xl font-bold text-[#008001]">{lesson.title}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Tabs */}
        <main className="container mx-auto px-4 py-6">
          <Tabs defaultValue="vocabulary" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1">
              <TabsTrigger value="vocabulary" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Từ vựng</span>
              </TabsTrigger>
              <TabsTrigger value="grammar" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <PenTool className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Bài giảng</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Luyện tập</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vocabulary">
              <VocabularyTab vocabulary={lesson.vocabulary} />
            </TabsContent>

            <TabsContent value="grammar">
              <LectureTab modules={lesson.modules} />
            </TabsContent>


            <TabsContent value="quiz">
              <QuizTab quiz={lesson.quiz} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default IrodoriLessonDetail;
