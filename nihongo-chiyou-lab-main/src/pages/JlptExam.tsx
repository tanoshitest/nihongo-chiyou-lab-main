import Layout from "@/components/Layout";
import { FileText, Award, BookOpen, GraduationCap, Target, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const jlptLevels = [
  {
    icon: BookOpen,
    title: "JLPT N5",
    description: "Cấp độ sơ cấp 1. Hiểu được Hiragana, Katakana và giao tiếp cơ bản hàng ngày.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n5",
  },
  {
    icon: FileText,
    title: "JLPT N4",
    description: "Cấp độ sơ cấp 2. Hiểu được tiếng Nhật cơ bản và có thể đọc hiểu các đoạn văn đơn giản.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n4",
  },
  {
    icon: GraduationCap,
    title: "JLPT N3",
    description: "Cấp độ trung cấp. Hiểu được tiếng Nhật trong các tình huống hàng ngày ở mức độ nhất định.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n3",
  },
  {
    icon: Target,
    title: "JLPT N2",
    description: "Cấp độ trung cao cấp. Hiểu được tiếng Nhật trong nhiều tình huống đa dạng của cuộc sống.",
    buttonText: "Xem đề thi",
    href: "/jlpt/n2",
  },
  {
    icon: Award,
    title: "JLPT N1",
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
  return (
    <Layout>
      <section className="py-4 md:py-8 bg-background min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="container max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
              Luyện thi JLPT
            </h2>
            <p className="text-base text-black/80">
              Chọn cấp độ phù hợp với trình độ của bạn để bắt đầu luyện thi
            </p>
          </div>

          {/* Features Grid */}
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
        </div>
      </section>
    </Layout>
  );
};

export default JlptExam;
