import Layout from "@/components/Layout";
import { FileText, Award, BookOpen, GraduationCap, Target, Zap, Info } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const jlptLevels = [
  {
    icon: BookOpen,
    title: "Đề thi JLPT N5 các năm",
    description: "Cấp độ sơ cấp 1. Hiểu được Hiragana, Katakana và giao tiếp cơ bản hàng ngày.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n5",
  },
  {
    icon: FileText,
    title: "Đề thi JLPT N4 các năm",
    description: "Cấp độ sơ cấp 2. Hiểu được tiếng Nhật cơ bản và có thể đọc hiểu các đoạn văn đơn giản.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n4",
  },
  {
    icon: GraduationCap,
    title: "Đề thi JLPT N3 các năm",
    description: "Cấp độ trung cấp. Hiểu được tiếng Nhật trong các tình huống hàng ngày ở mức độ nhất định.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n3",
  },
  {
    icon: Target,
    title: "Đề thi JLPT N2 các năm",
    description: "Cấp độ trung cao cấp. Hiểu được tiếng Nhật trong nhiều tình huống đa dạng của cuộc sống.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n2",
  },
  {
    icon: Award,
    title: "Đề thi JLPT N1 các năm",
    description: "Cấp độ cao cấp. Hiểu được tiếng Nhật trong mọi tình huống từ học thuật đến công việc.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n1",
  },
  {
    icon: Zap,
    title: "Luyện JLPT",
    description: "Luyện tập tổng hợp tất cả các cấp độ. Bài tập theo chủ đề và đề thi thử đa dạng.",
    buttonText: "Luyện ngay",
    href: "/jlpt-practice",
  },
];

const JlptExam = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-4 md:py-8 bg-background min-h-[calc(100vh-80px)] flex flex-col items-center">
        <div className="container max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
              Luyện thi JLPT
            </h2>
          </div>

          <Tabs defaultValue="practice" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-xl h-12">
                <TabsTrigger 
                  value="review" 
                  className="rounded-lg px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ôn tập kiến thức
                </TabsTrigger>
                <TabsTrigger 
                  value="practice"
                  className="rounded-lg px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Luyện đề
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="review" className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex flex-col items-center justify-center space-y-6 py-12 bg-white rounded-3xl border border-black/5 shadow-sm">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-black">Chọn cấp độ để ôn tập</h3>
                  <p className="text-black/60">Bộ lọc theo trình độ từ N5 đến N1</p>
                </div>
                
                <div className="w-full max-w-xs">
                  <Select onValueChange={(value) => setSelectedLevel(value)}>
                    <SelectTrigger className="w-full h-12 rounded-xl border-black/10 focus:ring-black">
                      <SelectValue placeholder="Chọn cấp độ (N5 - N1)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="n5">JLPT N5</SelectItem>
                      <SelectItem value="n4">JLPT N4</SelectItem>
                      <SelectItem value="n3">JLPT N3</SelectItem>
                      <SelectItem value="n2">JLPT N2</SelectItem>
                      <SelectItem value="n1">JLPT N1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {selectedLevel && (
                  <div className="flex flex-col items-center space-y-4 pt-8 animate-in zoom-in-95 duration-500">
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 flex flex-col items-center transform transition-transform hover:scale-105">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Info className="w-8 h-8 text-orange-600" />
                      </div>
                      <span className="text-2xl font-bold text-orange-600">Đang xây dựng</span>
                      <p className="text-orange-800/60 mt-2 text-center max-w-[250px]">
                        Tính năng ôn tập kiến thức cho {selectedLevel.toUpperCase()} sẽ sớm ra mắt!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="practice" className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-center mb-8">
                <p className="text-base text-black/80">
                  Chọn cấp độ phù hợp với trình độ của bạn để bắt đầu luyện thi
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jlptLevels.map((level, index) => (
                  <div
                    key={level.title}
                    className="group relative bg-white rounded-xl p-4 shadow-sm border border-black/10 hover:border-black/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                        <level.icon className="h-5 w-5 text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-black">
                        {level.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-black/70 text-sm mb-4 leading-relaxed flex-1">
                      {level.description}
                    </p>

                    {/* Button */}
                    <div className="mt-auto pt-2">
                      <a
                        href={level.href}
                        className="inline-flex items-center text-sm font-semibold text-black hover:underline group/btn"
                      >
                        {level.buttonText}
                        <span className="ml-1 transition-transform group-hover/btn:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default JlptExam;

