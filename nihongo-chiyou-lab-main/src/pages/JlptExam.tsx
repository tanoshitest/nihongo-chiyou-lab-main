import Layout from "@/components/Layout";
import { FileText, Award, BookOpen, GraduationCap, Target, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const jlptLevels = [
  {
    icon: BookOpen,
    title: "JLPT N5",
    description: "Cấp độ sơ cấp 1. Hiểu được Hiragana, Katakana và các biểu thức cơ bản trong giao tiếp hàng ngày.",
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Luyện thi JLPT
            </h2>
            <p className="text-lg text-muted-foreground">
              Chọn cấp độ phù hợp với trình độ của bạn để bắt đầu luyện thi
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jlptLevels.map((level, index) => (
              <FeatureCard
                key={level.title}
                icon={level.icon}
                title={level.title}
                description={level.description}
                buttonText={level.buttonText}
                href={level.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JlptExam;
