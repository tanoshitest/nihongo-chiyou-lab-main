import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Play, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface PracticeExam {
  id: string;
  title: string;
  level: "n5" | "n4" | "n3" | "n2" | "n1";
  totalQuestions: number;
  duration: number; // in minutes
  difficulty: "Dễ" | "Trung bình" | "Khó";
  topics: string[];
}

const practiceExams: PracticeExam[] = [
  { id: "practice-1", title: "Đề luyện tập N5 - Từ vựng cơ bản", level: "n5", totalQuestions: 30, duration: 25, difficulty: "Dễ", topics: ["Từ vựng", "Chữ Hán"] },
  { id: "practice-2", title: "Đề luyện tập N5 - Ngữ pháp nhập môn", level: "n5", totalQuestions: 25, duration: 20, difficulty: "Dễ", topics: ["Ngữ pháp"] },
  { id: "practice-3", title: "Đề luyện tập N5 - Đọc hiểu đơn giản", level: "n5", totalQuestions: 20, duration: 30, difficulty: "Trung bình", topics: ["Đọc hiểu"] },
  { id: "practice-4", title: "Đề luyện tập N5 - Tổng hợp 1", level: "n5", totalQuestions: 50, duration: 45, difficulty: "Trung bình", topics: ["Từ vựng", "Ngữ pháp", "Đọc hiểu"] },
  { id: "practice-5", title: "Đề luyện tập N4 - Từ vựng nâng cao", level: "n4", totalQuestions: 35, duration: 30, difficulty: "Trung bình", topics: ["Từ vựng", "Chữ Hán"] },
  { id: "practice-6", title: "Đề luyện tập N4 - Ngữ pháp trung cấp", level: "n4", totalQuestions: 30, duration: 25, difficulty: "Trung bình", topics: ["Ngữ pháp"] },
  { id: "practice-7", title: "Đề luyện tập N4 - Đọc hiểu văn bản", level: "n4", totalQuestions: 25, duration: 35, difficulty: "Khó", topics: ["Đọc hiểu"] },
  { id: "practice-8", title: "Đề luyện tập N4 - Tổng hợp 1", level: "n4", totalQuestions: 55, duration: 50, difficulty: "Khó", topics: ["Từ vựng", "Ngữ pháp", "Đọc hiểu"] },
  { id: "practice-9", title: "Đề luyện tập N3 - Từ vựng chuyên sâu", level: "n3", totalQuestions: 40, duration: 35, difficulty: "Trung bình", topics: ["Từ vựng", "Chữ Hán"] },
  { id: "practice-10", title: "Đề luyện tập N3 - Ngữ pháp nâng cao", level: "n3", totalQuestions: 35, duration: 30, difficulty: "Khó", topics: ["Ngữ pháp"] },
  { id: "practice-11", title: "Đề luyện tập N3 - Đọc hiểu dài", level: "n3", totalQuestions: 30, duration: 40, difficulty: "Khó", topics: ["Đọc hiểu"] },
  { id: "practice-12", title: "Đề luyện tập N3 - Tổng hợp 1", level: "n3", totalQuestions: 60, duration: 55, difficulty: "Khó", topics: ["Từ vựng", "Ngữ pháp", "Đọc hiểu"] },
  { id: "practice-13", title: "Đề luyện tập N2 - Từ vựng cao cấp", level: "n2", totalQuestions: 45, duration: 40, difficulty: "Khó", topics: ["Từ vựng", "Chữ Hán"] },
  { id: "practice-14", title: "Đề luyện tập N2 - Ngữ pháp phức tạp", level: "n2", totalQuestions: 40, duration: 35, difficulty: "Khó", topics: ["Ngữ pháp"] },
  { id: "practice-15", title: "Đề luyện tập N2 - Đọc hiểu chuyên sâu", level: "n2", totalQuestions: 35, duration: 45, difficulty: "Khó", topics: ["Đọc hiểu"] },
  { id: "practice-16", title: "Đề luyện tập N2 - Tổng hợp 1", level: "n2", totalQuestions: 65, duration: 60, difficulty: "Khó", topics: ["Từ vựng", "Ngữ pháp", "Đọc hiểu"] },
  { id: "practice-17", title: "Đề luyện tập N1 - Từ vựng chuyên nghiệp", level: "n1", totalQuestions: 50, duration: 45, difficulty: "Khó", topics: ["Từ vựng", "Chữ Hán"] },
  { id: "practice-18", title: "Đề luyện tập N1 - Ngữ pháp học thuật", level: "n1", totalQuestions: 45, duration: 40, difficulty: "Khó", topics: ["Ngữ pháp"] },
  { id: "practice-19", title: "Đề luyện tập N1 - Đọc hiểu nâng cao", level: "n1", totalQuestions: 40, duration: 50, difficulty: "Khó", topics: ["Đọc hiểu"] },
  { id: "practice-20", title: "Đề luyện tập N1 - Tổng hợp 1", level: "n1", totalQuestions: 70, duration: 65, difficulty: "Khó", topics: ["Từ vựng", "Ngữ pháp", "Đọc hiểu"] },
];

const levels = [
  { value: "all", label: "Tất cả" },
  { value: "n5", label: "N5" },
  { value: "n4", label: "N4" },
  { value: "n3", label: "N3" },
  { value: "n2", label: "N2" },
  { value: "n1", label: "N1" },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "n5": return "bg-green-100 text-green-700 border-green-200";
    case "n4": return "bg-blue-100 text-blue-700 border-blue-200";
    case "n3": return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "n2": return "bg-orange-100 text-orange-700 border-orange-200";
    case "n1": return "bg-red-100 text-red-700 border-red-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

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
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredExams = selectedLevel === "all" 
    ? practiceExams 
    : practiceExams.filter(exam => exam.level === selectedLevel);

  const handleStartExam = (exam: PracticeExam) => {
    // Navigate to the exam runner with practice exam parameters
    navigate(`/jlpt-exam/${exam.level}/practice/${exam.id}`);
  };

  return (
    <Layout>
      <section className="py-12 lg:py-20 bg-background min-h-screen">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Luyện thi JLPT
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tổng hợp các đề luyện tập theo chủ đề và cấp độ. Luyện tập thường xuyên để nâng cao kỹ năng!
            </p>
          </div>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Lọc theo cấp độ:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level.value)}
                  className={cn(
                    "transition-all",
                    selectedLevel === level.value && "shadow-md"
                  )}
                >
                  {level.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6 text-sm text-muted-foreground">
            Hiển thị {filteredExams.length} đề thi
          </div>

          {/* Exam List */}
          <div className="space-y-4">
            {filteredExams.map((exam) => (
              <Card 
                key={exam.id} 
                className="hover:shadow-md transition-all hover:border-primary/30 cursor-pointer group"
                onClick={() => handleStartExam(exam)}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Level Badge */}
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 border",
                      getLevelColor(exam.level)
                    )}>
                      {exam.level.toUpperCase()}
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
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exam.topics.map((topic) => (
                          <Badge 
                            key={topic} 
                            variant="outline" 
                            className="text-xs bg-muted/50"
                          >
                            {topic}
                          </Badge>
                        ))}
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
        </div>
      </section>
    </Layout>
  );
};

export default JlptPractice;
