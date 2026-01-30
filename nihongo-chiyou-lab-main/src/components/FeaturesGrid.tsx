import { BookOpen, GraduationCap, FileText, Palette } from "lucide-react";
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
];

const FeaturesGrid = () => {
  return (
    <section className="py-4 md:py-8 bg-background min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-base text-black/80 mb-2 font-medium">
            Chọn module phù hợp với trình độ và mục tiêu học tập của bạn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-xl p-4 shadow-sm border border-black/10 hover:border-black/30 transition-all duration-300 hover:-translate-y-1 flex flex-col min-h-[160px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                  <feature.icon className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-black/70 text-sm mb-4 leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* Button */}
              <div className="mt-auto pt-2">
                <a
                  href={feature.href}
                  className="inline-flex items-center text-sm font-semibold text-black hover:underline group/btn"
                >
                  {feature.buttonText}
                  <span className="ml-1 transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
