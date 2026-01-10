import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BookOpen, GraduationCap, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { lessonsN5, lessonsN4, LessonSummary } from "@/data/minnaData";

const LessonCard = ({ lesson }: { lesson: LessonSummary }) => {
  const isTest = lesson.id >= 9990;
  let linkUrl = `/minna/${lesson.id}`;
  if (lesson.id === 9991) linkUrl = "/minna/test-1";
  if (lesson.id === 9992) linkUrl = "/minna/test-2";
  if (lesson.id === 9993) linkUrl = "/minna/test-3";
  if (lesson.id === 9994) linkUrl = "/minna/test-4";
  if (lesson.id === 9995) linkUrl = "/minna/test-5";
  if (lesson.id === 9996) linkUrl = "/minna/test-6";
  if (lesson.id === 9997) linkUrl = "/minna/test-7";
  if (lesson.id === 9998) linkUrl = "/minna/test-8";

  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 h-full flex flex-col",
      isTest
        ? "border-orange-500/50 hover:border-orange-500 bg-orange-50/10"
        : "hover:border-[#008001]/50"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className={cn(
            "text-xs font-medium uppercase tracking-wide",
            isTest ? "text-orange-600" : "text-muted-foreground"
          )}>
            {isTest ? "Kiểm tra" : `Bài ${lesson.id}`}
          </span>
          {isTest ? (
            <ClipboardCheck className="w-4 h-4 text-orange-600 opacity-60 group-hover:opacity-100 transition-opacity" />
          ) : (
            <BookOpen className="w-4 h-4 text-[#008001] opacity-60 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <CardTitle className={cn("text-lg", isTest ? "text-orange-700" : "text-[#008001]")}>
          {lesson.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 flex-1">
        <p className="text-sm text-muted-foreground">{lesson.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={linkUrl} className="w-full">
          <Button
            className={cn(
              "w-full text-white",
              isTest
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-[#008001] hover:bg-[#006801]"
            )}
          >
            {isTest ? "Làm bài" : "Vào học"}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
};

const MinnaNoNihongo = () => {
  // Insert Test 1 after Lesson 2 (index 2)
  const lessonsN5WithTest = [...lessonsN5];
  // Check if test already exists to avoid duplication if re-rendering/hot-reload issues, though simple splice is fine here
  if (!lessonsN5WithTest.find(l => l.id === 9991)) {
    // Find index of Lesson 2
    const lesson2Index = lessonsN5WithTest.findIndex(l => l.id === 2);
    if (lesson2Index !== -1) {
      lessonsN5WithTest.splice(lesson2Index + 1, 0, {
        id: 9991,
        title: "Kiểm tra 1",
        description: "Quiz bài 1 2"
      });
    }
  }




  // Insert Test 2 after Lesson 4 (index 4)
  if (!lessonsN5WithTest.find(l => l.id === 9992)) {
    const lesson4Index = lessonsN5WithTest.findIndex(l => l.id === 4);
    if (lesson4Index !== -1) {
      lessonsN5WithTest.splice(lesson4Index + 1, 0, {
        id: 9992,
        title: "Kiểm tra 2",
        description: "Quiz bài 3 4"
      });
    }
  }



  // Insert Test 3 after Lesson 6 (index 6)
  if (!lessonsN5WithTest.find(l => l.id === 9993)) {
    const lesson6Index = lessonsN5WithTest.findIndex(l => l.id === 6);
    if (lesson6Index !== -1) {
      lessonsN5WithTest.splice(lesson6Index + 1, 0, {
        id: 9993,
        title: "Kiểm tra 3",
        description: "Quiz bài 5 6"
      });
    }
  }

  // Insert Test 4 after Lesson 8 (index 8)
  if (!lessonsN5WithTest.find(l => l.id === 9994)) {
    const lesson8Index = lessonsN5WithTest.findIndex(l => l.id === 8);
    if (lesson8Index !== -1) {
      lessonsN5WithTest.splice(lesson8Index + 1, 0, {
        id: 9994,
        title: "Kiểm tra 4",
        description: "Quiz bài 7 8"
      });
    }
  }

  // Insert Test 5 after Lesson 10 (index 10)
  if (!lessonsN5WithTest.find(l => l.id === 9995)) {
    const lesson10Index = lessonsN5WithTest.findIndex(l => l.id === 10);
    if (lesson10Index !== -1) {
      lessonsN5WithTest.splice(lesson10Index + 1, 0, {
        id: 9995,
        title: "Kiểm tra 5",
        description: "Quiz bài 9 10"
      });
    }
  }

  // Insert Test 6 after Lesson 12 (index 12)
  if (!lessonsN5WithTest.find(l => l.id === 9996)) {
    const lesson12Index = lessonsN5WithTest.findIndex(l => l.id === 12);
    if (lesson12Index !== -1) {
      lessonsN5WithTest.splice(lesson12Index + 1, 0, {
        id: 9996,
        title: "Kiểm tra 6",
        description: "Quiz bài 11 12"
      });
    }
  }

  // Insert Test 7 after Lesson 14 (index 14)
  if (!lessonsN5WithTest.find(l => l.id === 9997)) {
    const lesson14Index = lessonsN5WithTest.findIndex(l => l.id === 14);
    if (lesson14Index !== -1) {
      lessonsN5WithTest.splice(lesson14Index + 1, 0, {
        id: 9997,
        title: "Kiểm tra 7",
        description: "Quiz bài 13 14"
      });
    }
  }


  // Insert Test 8 after Lesson 16 (index 16)
  if (!lessonsN5WithTest.find(l => l.id === 9998)) {
    const lesson16Index = lessonsN5WithTest.findIndex(l => l.id === 16);
    if (lesson16Index !== -1) {
      lessonsN5WithTest.splice(lesson16Index + 1, 0, {
        id: 9998,
        title: "Kiểm tra 8",
        description: "Quiz bài 15 16"
      });
    }
  }

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
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="n5" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                <TabsTrigger
                  value="n5"
                  className="text-base data-[state=active]:bg-[#008001] data-[state=active]:text-white"
                >
                  Sơ cấp 1 (N5)
                </TabsTrigger>
                <TabsTrigger
                  value="n4"
                  className="text-base data-[state=active]:bg-[#008001] data-[state=active]:text-white"
                >
                  Sơ cấp 2 (N4)
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="n5" className="space-y-8 focus-visible:outline-none">
              <LessonSection
                title="Sơ cấp 1 - Trình độ N5"
                subtitle="Bài 1 → 25 | Nền tảng tiếng Nhật cơ bản"
                lessons={lessonsN5WithTest}
                icon={BookOpen}
              />
            </TabsContent>

            <TabsContent value="n4" className="space-y-8 focus-visible:outline-none">
              <LessonSection
                title="Sơ cấp 2 - Trình độ N4"
                subtitle="Bài 26 → 50 | Nâng cao ngữ pháp và giao tiếp"
                lessons={lessonsN4}
                icon={GraduationCap}
              />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default MinnaNoNihongo;
