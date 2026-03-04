import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, FileText, Play, Filter, BookOpen, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { JLPT_PRACTICE_EXAMS, PracticeExam } from "@/data/jlptPracticeData";

const levels = [
  { value: "N5", label: "N5 - Sơ cấp 1" },
  { value: "N4", label: "N4 - Sơ cấp 2" },
  { value: "N3", label: "N3 - Trung cấp" },
  { value: "N2", label: "N2 - Trung cao cấp" },
  { value: "N1", label: "N1 - Cao cấp" },
];




const categoryToTab: Record<string, string> = {
  "kanji": "kanji",
  "vocab": "vocab",
  "grammar": "grammar",
  "reading": "reading",
  "listening": "listening"
};

const tabToCategory: Record<string, string> = {
  "kanji": "kanji",
  "vocab": "vocab",
  "grammar": "grammar",
  "reading": "reading",
  "listening": "listening"
};

const JlptPractice = () => {
  const navigate = useNavigate();
  const { level: urlLevel, category: urlCategory } = useParams();
  const ITEMS_PER_PAGE = 5;
  const [selectedLevel, setSelectedLevel] = useState(urlLevel || "N5");
  const [activeTab, setActiveTab] = useState(urlCategory ? (categoryToTab[urlCategory] || "kanji") : "kanji");
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state with URL when it changes (e.g. back button)
  useEffect(() => {
    if (urlLevel && urlLevel !== selectedLevel) {
      setSelectedLevel(urlLevel);
      setCurrentPage(1);
    }
    if (urlCategory) {
      const tab = categoryToTab[urlCategory] || "kanji";
      if (tab !== activeTab) {
        setActiveTab(tab);
        setCurrentPage(1);
      }
    } else if (activeTab !== "kanji" && !urlCategory) {
      // Default to kanji if no category in URL
      setActiveTab("kanji");
    }
  }, [urlLevel, urlCategory]);

  const setSelectedExamLevel = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1); // Reset to first page when level changes
    const categorySegment = tabToCategory[activeTab] || activeTab;
    navigate(`/jlpt-practice/${level}/${categorySegment}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when tab changes
    const levelSegment = selectedLevel || "N5";
    const categorySegment = tabToCategory[tab] || tab;
    navigate(`/jlpt-practice/${levelSegment}/${categorySegment}`);
  };

  // Filter exams based on selected level
  const levelExams = JLPT_PRACTICE_EXAMS.filter(
    (exam) => exam.level === selectedLevel
  );

  // Filter further by category
  const kanjiExams = levelExams.filter(exam => exam.category === "kanji");
  const vocabExams = levelExams.filter(exam => exam.category === "vocabulary");
  const grammarExams = levelExams.filter(exam => exam.category === "grammar");
  const readingExams = levelExams.filter(exam => exam.category === "reading");
  const listeningExams = levelExams.filter(exam => exam.category === "listening");

  const handleStartExam = (exam: PracticeExam) => {
    navigate(`/jlpt-exam/${exam.level}/practice/${exam.id}`);
  };

  const renderExamList = (exams: PracticeExam[]) => {
    if (exams.length === 0) {
      return <div className="text-center py-10 text-muted-foreground">Chưa có đề thi nào cho mục này.</div>;
    }

    const totalPages = Math.ceil(exams.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentExams = exams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
          {currentExams.map((exam) => {
            const isUpdated = ["jlpt-n4-vocabulary-1", "jlpt-n4-vocabulary-2", "jlpt-n4-vocabulary-3", "jlpt-n4-vocabulary-4"].includes(exam.id);
            return (
              <Card
                key={exam.id}
                className={cn(
                  "hover:shadow-md transition-all hover:border-black/30 cursor-pointer group shadow-sm bg-card border-black/10",
                  isUpdated && "border-black/30 bg-gray-50/50"
                )}
                onClick={() => handleStartExam(exam)}
              >
                <CardContent className="p-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    {/* Icon based on category */}
                    <div className={cn(
                      "w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg shrink-0 border bg-gray-100 text-black border-black/20",
                      isUpdated && "border-black/40 bg-white"
                    )}>
                      {exam.category === "kanji" && <span>漢</span>}
                      {exam.category === "vocabulary" && <span>字</span>}
                      {exam.category === "grammar" && <span>文</span>}
                      {exam.category === "reading" && <BookOpen className="w-5 h-5 text-black" />}
                      {exam.category === "listening" && <Headphones className="w-5 h-5 text-black" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={cn(
                          "font-semibold text-black text-sm group-hover:underline transition-colors leading-tight",
                          isUpdated && "font-bold text-base"
                        )}>
                          {exam.title}
                        </h3>
                        {isUpdated && (
                          <Badge variant="outline" className="h-5 px-1.5 text-[10px] bg-black text-white border-none font-bold uppercase tracking-wider animate-pulse">
                            Mới
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-black">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {exam.totalQuestions} câu
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {exam.duration}p
                        </span>

                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      size="sm"
                      className="shrink-0 gap-2 h-8 text-xs px-3 bg-black text-white hover:bg-gray-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartExam(exam);
                      }}
                    >
                      <Play className="w-3 h-3" />
                      Làm bài
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="h-8 px-2 text-black hover:bg-gray-100 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center text-sm rounded transition-colors",
                    currentPage === page
                      ? "font-bold text-black border border-black"
                      : "text-black hover:bg-gray-100"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="h-8 px-2 text-black hover:bg-gray-100 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout hideFooter={true}>
      <section className="py-2 bg-background">
        <div className="container max-w-4xl">


          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 text-black">
              <Filter className="w-5 h-5 text-black" />
              <span className="font-semibold">Chọn cấp độ:</span>
            </div>

            <Select value={selectedLevel} onValueChange={setSelectedExamLevel}>
              <SelectTrigger className="w-[200px] border-black/20 text-black">
                <SelectValue placeholder="Chọn cấp độ" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level.value} value={level.value} className="text-black">
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} className="space-y-6" onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-gray-100">
              <TabsTrigger value="kanji" className="py-2.5 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                Kanji
              </TabsTrigger>
              <TabsTrigger value="vocab" className="py-2.5 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                Từ vựng
              </TabsTrigger>
              <TabsTrigger value="grammar" className="py-2.5 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                Ngữ pháp
              </TabsTrigger>
              <TabsTrigger value="reading" className="py-2.5 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                Đọc hiểu
              </TabsTrigger>
              <TabsTrigger value="listening" className="py-2.5 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm data-[state=active]:font-semibold">
                Nghe hiểu
              </TabsTrigger>
            </TabsList>

            <TabsContent value="kanji" className="focus-visible:outline-none space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-2">
                <h2 className="text-lg font-bold flex items-center gap-2 text-black">
                  <span className="bg-gray-100 text-black border border-black/10 p-1.5 rounded-lg text-sm">漢</span>
                  Luyện tập Kanji {selectedLevel}
                </h2>
              </div>
              {renderExamList(kanjiExams)}
            </TabsContent>

            <TabsContent value="vocab" className="focus-visible:outline-none space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-2">
                <h2 className="text-lg font-bold flex items-center gap-2 text-black">
                  <span className="bg-gray-100 text-black border border-black/10 p-1.5 rounded-lg text-sm">字</span>
                  Luyện tập Từ vựng {selectedLevel}
                </h2>
              </div>
              {renderExamList(vocabExams)}
            </TabsContent>

            <TabsContent value="grammar" className="focus-visible:outline-none space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-2">
                <h2 className="text-lg font-bold flex items-center gap-2 text-black">
                  <span className="bg-gray-100 text-black border border-black/10 p-1.5 rounded-lg text-sm">文</span>
                  Luyện tập Ngữ pháp {selectedLevel}
                </h2>
              </div>
              {renderExamList(grammarExams)}
            </TabsContent>

            <TabsContent value="reading" className="focus-visible:outline-none space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-2">
                <h2 className="text-lg font-bold flex items-center gap-2 text-black">
                  <BookOpen className="w-6 h-6 bg-gray-100 text-black border border-black/10 p-1 rounded-lg" />
                  Luyện tập Đọc hiểu {selectedLevel}
                </h2>
              </div>
              {renderExamList(readingExams)}
            </TabsContent>

            <TabsContent value="listening" className="focus-visible:outline-none space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-2">
                <h2 className="text-lg font-bold flex items-center gap-2 text-black">
                  <Headphones className="w-6 h-6 bg-gray-100 text-black border border-black/10 p-1 rounded-lg" />
                  Luyện tập Nghe hiểu {selectedLevel}
                </h2>
              </div>
              {renderExamList(listeningExams)}
            </TabsContent>
          </Tabs>

        </div>
      </section>
    </Layout>
  );
};

export default JlptPractice;
