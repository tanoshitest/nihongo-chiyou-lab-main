import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BookOpen, GraduationCap, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { lessonsN5, lessonsN4, LessonSummary } from "@/data/minnaData";

const LessonCard = ({ lesson }: { lesson: LessonSummary }) => {
  const isTest = lesson.id >= 9990 && lesson.id < 10010;
  const isReference = lesson.id >= 10010;

  let linkUrl = `/minna/${lesson.id}`;
  if (lesson.id === 9991) linkUrl = "/minna/test-1";
  if (lesson.id === 9992) linkUrl = "/minna/test-2";
  if (lesson.id === 9993) linkUrl = "/minna/test-3";
  if (lesson.id === 9994) linkUrl = "/minna/test-4";
  if (lesson.id === 9995) linkUrl = "/minna/test-5";
  if (lesson.id === 9996) linkUrl = "/minna/test-6";
  if (lesson.id === 9997) linkUrl = "/minna/test-7";
  if (lesson.id === 9998) linkUrl = "/minna/test-8";
  if (lesson.id === 9999) linkUrl = "/minna/test-9";
  if (lesson.id === 10000) linkUrl = "/minna/test-10";
  if (lesson.id === 10001) linkUrl = "/minna/test-11";
  if (lesson.id === 10002) linkUrl = "/minna/test-12";
  if (lesson.id === 10010) linkUrl = "/minna/particles";
  if (lesson.id === 10011) linkUrl = "/minna/forms";
  if (lesson.id === 10012) linkUrl = "/minna/adverbs";
  if (lesson.id === 10013) linkUrl = "/minna/conjunctions";
  if (lesson.id === 10014) linkUrl = "/minna/numbers";
  if (lesson.id === 10015) linkUrl = "/minna/time-expressions";
  if (lesson.id === 10016) linkUrl = "/minna/counters";
  if (lesson.id === 10017) linkUrl = "/minna/vocabulary";
  if (lesson.id === 10018) linkUrl = "/minna/grammar-review";

  // N4 Tests (IDs 10020 - 10032 mapping to Test 13 - 25)
  if (lesson.id >= 10020 && lesson.id <= 10050) {
    const testId = lesson.id - 10007; // 10020 -> 13
    linkUrl = `/minna/test-n4/${testId}`;
  }

  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 h-full flex flex-col min-h-[220px]",
      isTest || (lesson.id >= 10020 && lesson.id <= 10050)
        ? "border-black/50 hover:border-black bg-black/5"
        : "hover:border-black/50"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <span className={cn(
            "text-xs font-medium uppercase tracking-wide",
            isTest || (lesson.id >= 10020 && lesson.id <= 10050) ? "text-black font-bold" : "text-muted-foreground"
          )}>
            {isTest || (lesson.id >= 10020 && lesson.id <= 10050) ? "Kiểm tra" : isReference ? "Tổng hợp" : `Bài ${lesson.id}`}
          </span>
          {isTest || (lesson.id >= 10020 && lesson.id <= 10050) ? (
            <ClipboardCheck className="w-4 h-4 text-black opacity-60 group-hover:opacity-100 transition-opacity" />
          ) : (
            <BookOpen className="w-4 h-4 text-black opacity-60 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <CardTitle className="text-lg text-black">
          {lesson.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">{lesson.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={linkUrl} className="w-full">
          <Button
            className="w-full text-white bg-black hover:bg-neutral-800"
          >
            {isTest || (lesson.id >= 10020 && lesson.id <= 10050) ? "Làm bài" : "Vào học"}
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
        <div className="p-2 bg-black/10 rounded-lg">
          <Icon className="w-6 h-6 text-black" />
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

  // Insert Test 9 after Lesson 18 (index 18)
  if (!lessonsN5WithTest.find(l => l.id === 9999)) {
    const lesson18Index = lessonsN5WithTest.findIndex(l => l.id === 18);
    if (lesson18Index !== -1) {
      lessonsN5WithTest.splice(lesson18Index + 1, 0, {
        id: 9999,
        title: "Kiểm tra 9",
        description: "Quiz bài 17 18"
      });
    }
  }

  // Insert Test 10 after Lesson 20 (index 20)
  if (!lessonsN5WithTest.find(l => l.id === 10000)) {
    const lesson20Index = lessonsN5WithTest.findIndex(l => l.id === 20);
    if (lesson20Index !== -1) {
      lessonsN5WithTest.splice(lesson20Index + 1, 0, {
        id: 10000,
        title: "Kiểm tra 10",
        description: "Quiz bài 19 20"
      });
    }
  }

  // Insert Test 11 after Lesson 22 (index 22 + generated index shift)
  // To avoid index calculation complexity, we just find index of Lesson 22
  if (!lessonsN5WithTest.find(l => l.id === 10001)) {
    const lesson22Index = lessonsN5WithTest.findIndex(l => l.id === 22);
    if (lesson22Index !== -1) {
      lessonsN5WithTest.splice(lesson22Index + 1, 0, {
        id: 10001,
        title: "Kiểm tra 11",
        description: "Quiz bài 21 22"
      });
    }
  }

  // Insert Test 12 after Lesson 25 (index 25 + generated index shift)
  if (!lessonsN5WithTest.find(l => l.id === 10002)) {
    const lesson25Index = lessonsN5WithTest.findIndex(l => l.id === 25);
    if (lesson25Index !== -1) {
      lessonsN5WithTest.splice(lesson25Index + 1, 0, {
        id: 10002,
        title: "Kiểm tra 12",
        description: "Quiz bài 23 24 25"
      });
    }
  }

  // --- REFERENCE LESSONS SETUP ---
  const lessonsReference: LessonSummary[] = [
    { id: 10010, title: "Trợ từ", description: "Tổng hợp 17 trợ từ cơ bản" },
    { id: 10011, title: "Cách dùng các thể", description: "Tổng hợp 9 thể động từ" },
    { id: 10012, title: "Cách dùng phó từ", description: "Tổng hợp phó từ quan trọng" },
    { id: 10013, title: "Cách dùng liên từ", description: "Tổng hợp liên từ quan trọng" },
    { id: 10014, title: "Số đếm", description: "Cách đếm số trong tiếng Nhật" },
    { id: 10015, title: "Cách nói thời gian", description: "Ngày, giờ, tháng, năm..." },
    { id: 10016, title: "Đếm đồ vật", description: "Các đơn vị đếm thông dụng" },
    { id: 10017, title: "Từ vựng", description: "Từ vựng theo chủ đề thông dụng" },
    { id: 10018, title: "Tổng hợp Ngữ pháp", description: "Tra cứu ngữ pháp N5 - N4" },
  ];

  // --- N4 LESSONS SETUP ---
  const lessonsN4WithTest = [...lessonsN4];

  // Helper to insert test N4
  const insertN4Test = (lessonIdBefore: number, testId: number, title: string, desc: string) => {
    // Don't insert if already exists
    if (lessonsN4WithTest.find(l => l.id === testId)) return;

    const idx = lessonsN4WithTest.findIndex(l => l.id === lessonIdBefore);
    if (idx !== -1) {
      lessonsN4WithTest.splice(idx + 1, 0, {
        id: testId,
        title: title,
        description: desc
      });
    }
  };

  // Test 13: 26, 27
  insertN4Test(27, 10020, "Kiểm tra 13", "Quiz bài 26 27");
  // Test 14: 28, 29
  insertN4Test(29, 10021, "Kiểm tra 14", "Quiz bài 28 29");
  // Test 15: 30, 31
  insertN4Test(31, 10022, "Kiểm tra 15", "Quiz bài 30 31");
  // Test 16: 32, 33
  insertN4Test(33, 10023, "Kiểm tra 16", "Quiz bài 32 33");
  // Test 17: 34, 35
  insertN4Test(35, 10024, "Kiểm tra 17", "Quiz bài 34 35");
  // Test 18: 36, 37
  insertN4Test(37, 10025, "Kiểm tra 18", "Quiz bài 36 37");
  // Test 19: 38, 39
  insertN4Test(39, 10026, "Kiểm tra 19", "Quiz bài 38 39");
  // Test 20: 40, 41
  insertN4Test(41, 10027, "Kiểm tra 20", "Quiz bài 40 41");
  // Test 21: 42, 43
  insertN4Test(43, 10028, "Kiểm tra 21", "Quiz bài 42 43");
  // Test 22: 44, 45
  insertN4Test(45, 10029, "Kiểm tra 22", "Quiz bài 44 45");
  // Test 23: 46, 47
  insertN4Test(47, 10030, "Kiểm tra 23", "Quiz bài 46 47");
  // Test 24: 48, 49, 50
  insertN4Test(50, 10031, "Kiểm tra 24", "Quiz bài 48 49 50");


  return (
    <Layout>
      <div className="bg-background">
        {/* Page Header */}
        <div className="border-b bg-gradient-to-br from-accent to-secondary py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-black">Minna no Nihongo</h1>
            <p className="text-muted-foreground mt-2">みんなの日本語 - 50 bài học</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="n5" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3 h-12">
                <TabsTrigger
                  value="n5"
                  className="text-base data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Sơ cấp 1 (N5)
                </TabsTrigger>
                <TabsTrigger
                  value="n4"
                  className="text-base data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Sơ cấp 2 (N4)
                </TabsTrigger>
                <TabsTrigger
                  value="reference"
                  className="text-base data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Phụ lục
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
                lessons={lessonsN4WithTest}
                icon={GraduationCap}
              />
            </TabsContent>

            <TabsContent value="reference" className="space-y-8 focus-visible:outline-none">
              <LessonSection
                title="Phụ lục - Tổng hợp"
                subtitle="Các kiến thức bổ trợ quan trọng"
                lessons={lessonsReference}
                icon={BookOpen}
              />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default MinnaNoNihongo;
