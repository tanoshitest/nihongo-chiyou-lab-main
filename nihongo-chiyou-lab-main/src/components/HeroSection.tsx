import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Japanese characters decoration */}
        <div className="absolute top-20 right-10 text-8xl font-bold text-black/5 select-none hidden lg:block animate-float">
          日
        </div>
        <div className="absolute bottom-20 left-10 text-8xl font-bold text-black/5 select-none hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          本
        </div>
        <div className="absolute top-1/2 right-1/4 text-6xl font-bold text-black/5 select-none hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
          語
        </div>
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-black border border-black/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>100% Miễn phí - Không quảng cáo</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-10 animate-slide-up leading-tight">
            Học Tiếng Nhật Miễn Phí
          </h1>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="xl" className="group bg-black text-white hover:bg-black/90 rounded-full px-8 h-14 text-lg">
              Vào học ngay
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-black/60 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>Giáo trình chuẩn</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>Cộng đồng sôi nổi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>Cập nhật thường xuyên</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
