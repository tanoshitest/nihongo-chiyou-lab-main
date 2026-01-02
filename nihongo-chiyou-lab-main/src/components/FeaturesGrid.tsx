import { BookOpen, GraduationCap, FileText, Video, PenTool, Palette } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: BookOpen,
    title: "Nhập môn & Kanji",
    description: "Làm chủ Hiragana, Katakana và 512 Kanji (Look & Learn) với Flashcard hình ảnh sinh động.",
    buttonText: "Học ngay",
    href: "/nhap-mon",
  },
  {
    icon: GraduationCap,
    title: "Minna no Nihongo",
    description: "50 bài giảng chi tiết (N5-N4). Đầy đủ Từ vựng, Ngữ pháp, Kaiwa và Bài tập chấm điểm tự động.",
    buttonText: "Chọn bài học",
    href: "/minna",
  },
  {
    icon: Palette,
    title: "Irodori",
    description: "54 bài học giao tiếp thực tế. Nhập môn, Sơ cấp 1 và Sơ cấp 2 - mỗi cấp 18 bài.",
    buttonText: "Khám phá",
    href: "/irodori",
  },
  {
    icon: FileText,
    title: "Luyện thi JLPT",
    description: "Kho đề thi thử khổng lồ từ N5 đến N1. Cấu trúc chuẩn thi thật, bấm giờ và giải thích chi tiết.",
    buttonText: "Làm đề thi",
    href: "/jlpt-n5",
  },
  {
    icon: Video,
    title: "Học qua Tin tức",
    description: "Luyện nghe và đọc với video song ngữ, tính năng tra từ điển nhanh ngay trên phụ đề.",
    buttonText: "Xem video",
    href: "#",
  },
  {
    icon: PenTool,
    title: "Blog chia sẻ",
    description: "Kinh nghiệm thi cử, văn hóa Nhật Bản và bí quyết học nhanh nhớ lâu.",
    buttonText: "Đọc thêm",
    href: "#",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Học tiếng Nhật theo cách của bạn
          </h2>
          <p className="text-lg text-muted-foreground">
            Chọn module phù hợp với trình độ và mục tiêu học tập của bạn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              href={feature.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
