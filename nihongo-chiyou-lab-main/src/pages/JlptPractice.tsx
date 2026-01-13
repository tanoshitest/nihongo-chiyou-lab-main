import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, FileText, Play, Filter, BookOpen, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { JLPT_PRACTICE_EXAMS, PracticeExam } from "@/data/jlptPracticeData";

const levels = [
  { value: "N5", label: "N5 - Sơ cấp 1" },
  { value: "N4", label: "N4 - Sơ cấp 2" },
  { value: "N3", label: "N3 - Trung cấp" },
  { value: "N2", label: "N2 - Trung cao cấp" },
  { value: "N1", label: "N1 - Cao cấp" },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Dễ": return "bg-green-50 text-green-600";
    case "Trung bình": return "bg-yellow-50 text-yellow-600";
    case "Khó": return "bg-red-50 text-red-600";
    default: return "bg-gray-50 text-gray-600";
  }
};

const JlptPractice = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedExamLevel] = useState<string>("N5");

  // Filter exams by selected level
  const levelExams = JLPT_PRACTICE_EXAMS.filter(exam => exam.level === selectedLevel);

  // Filter further by category
  const kanjiExams = levelExams.filter(exam => exam.category === "kanji");
  const vocabExams = levelExams.filter(exam => exam.category === "vocabulary");
  const grammarExams = levelExams.filter(exam => exam.category === "grammar");
  const readingExams = levelExams.filter(exam => exam.category === "reading");
  const listeningExams = levelExams.filter(exam => exam.category === "listening");

  const handleStartExam = (exam: PracticeExam) => {
    // Navigate to exam runner with identifier
    // For now assuming existing runner can parse this or we update runner
    navigate(`/jlpt-exam/${exam.level}/practice/${exam.id}`);
  };

  const renderExamList = (exams: PracticeExam[]) => {
    if (exams.length === 0) {
      return <div className="text-center py-10 text-muted-foreground">Chưa có đề thi nào cho mục này.</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className="hover:shadow-md transition-all hover:border-primary/30 cursor-pointer group"
            onClick={() => handleStartExam(exam)}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon based on category */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 border bg-primary/10 text-primary border-primary/20",
                )}>
                  {exam.category === "kanji" && <span className="text-xl">漢</span>}
                  {exam.category === "vocabulary" && <span className="text-xl">字</span>}
                  {exam.category === "grammar" && <span className="text-xl">文</span>}
                  {exam.category === "reading" && <BookOpen className="w-6 h-6" />}
                  {exam.category === "listening" && <Headphones className="w-6 h-6" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {exam.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {exam.totalQuestions} câu
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {exam.duration} phút
                    </span>
                    <Badge variant="secondary" className={getDifficultyColor(exam.difficulty)}>
                      {exam.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  className="shrink-0 gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartExam(exam);
                  }}
                >
                  <Play className="w-4 h-4" />
                  Làm bài
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <section className="py-12 lg:py-20 bg-background min-h-screen">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#008001] mb-4">
              Luyện thi JLPT
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kho đề luyện thi phong phú từ N5 đến N1. Chọn cấp độ và kỹ năng bạn muốn rèn luyện.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Chọn cấp độ:</span>
            </div>

            <Select value={selectedLevel} onValueChange={setSelectedExamLevel}>
              <SelectTrigger className="w-[200px] border-primary/20">
                <SelectValue placeholder="Chọn cấp độ" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="kanji" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-muted/50">
              <TabsTrigger value="kanji" className="py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                Kanji
              </TabsTrigger>
              <TabsTrigger value="vocab" className="py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                Từ vựng
              </TabsTrigger>
              <TabsTrigger value="grammar" className="py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                Ngữ pháp
              </TabsTrigger>
              <TabsTrigger value="reading" className="py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                Đọc hiểu
              </TabsTrigger>
              <TabsTrigger value="listening" className="py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                Nghe hiểu
              </TabsTrigger>
            </TabsList>

            <TabsContent value="kanji" className="focus-visible:outline-none space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg">漢</span>
                  Luyện tập Kanji {selectedLevel}
                </h2>
                <p className="text-muted-foreground mt-1">Các đề luyện tập chuyên sâu về Hán tự.</p>
              </div>
              {renderExamList(kanjiExams)}
            </TabsContent>

            <TabsContent value="vocab" className="focus-visible:outline-none space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg">字</span>
                  Luyện tập Từ vựng {selectedLevel}
                </h2>
                <p className="text-muted-foreground mt-1">Tổng hợp các đề thi về Từ vựng theo format JLPT.</p>
              </div>
              {renderExamList(vocabExams)}
            </TabsContent>

            <TabsContent value="grammar" className="focus-visible:outline-none space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg">文</span>
                  Luyện tập Ngữ pháp {selectedLevel}
                </h2>
                <p className="text-muted-foreground mt-1">Các bài tập ngữ pháp từ cơ bản đến nâng cao.</p>
              </div>
              {renderExamList(grammarExams)}
            </TabsContent>

            <TabsContent value="reading" className="focus-visible:outline-none space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <BookOpen className="w-8 h-8 bg-primary/10 text-primary p-1.5 rounded-lg" />
                  Luyện tập Đọc hiểu {selectedLevel}
                </h2>
                <p className="text-muted-foreground mt-1">Rèn luyện kỹ năng đọc hiểu văn bản ngắn và dài.</p>
              </div>
              {renderExamList(readingExams)}
            </TabsContent>

            <TabsContent value="listening" className="focus-visible:outline-none space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <Headphones className="w-8 h-8 bg-primary/10 text-primary p-1.5 rounded-lg" />
                  Luyện tập Nghe hiểu {selectedLevel}
                </h2>
                <p className="text-muted-foreground mt-1">Luyện nghe các đoạn hội thoại và bài phát biểu.</p>
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
