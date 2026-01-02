import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { lessonsN5, lessonsN4, LessonSummary } from "@/data/minnaData";

const LessonCard = ({ lesson }: { lesson: LessonSummary }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-[#008001]/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Bài {lesson.id}
          </span>
          <BookOpen className="w-4 h-4 text-[#008001] opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardTitle className="text-lg text-[#008001]">{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">{lesson.description}</p>
        <div className="mt-3 space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Tiến độ</span>
            <span>0%</span>
          </div>
          <Progress value={0} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/minna/${lesson.id}`} className="w-full">
          <Button 
            className="w-full bg-[#008001] hover:bg-[#006801] text-white"
          >
            Vào học
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const LessonSection = ({ 
  title, 
  subtitle, 
  lessons, 
  icon: Icon 
}: { 
  title: string; 
  subtitle: string; 
  lessons: LessonSummary[];
  icon: React.ElementType;
}) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#008001]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#008001]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
};

const MinnaNoNihongo = () => {
  return (
    <Layout>
      <div className="bg-background">
        {/* Page Header */}
        <div className="border-b bg-gradient-to-br from-accent to-secondary py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-[#008001]">Minna no Nihongo</h1>
            <p className="text-muted-foreground mt-2">みんなの日本語 - 50 bài học</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-12">
          {/* N5 Section */}
          <LessonSection
            title="Sơ cấp 1 - Trình độ N5"
            subtitle="Bài 1 → 25 | Nền tảng tiếng Nhật cơ bản"
            lessons={lessonsN5}
            icon={BookOpen}
          />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#008001]/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-[#008001] font-semibold">
                Tiếp tục hành trình
              </span>
            </div>
          </div>

          {/* N4 Section */}
          <LessonSection
            title="Sơ cấp 2 - Trình độ N4"
            subtitle="Bài 26 → 50 | Nâng cao ngữ pháp và giao tiếp"
            lessons={lessonsN4}
            icon={GraduationCap}
          />
        </main>
      </div>
    </Layout>
  );
};

export default MinnaNoNihongo;
