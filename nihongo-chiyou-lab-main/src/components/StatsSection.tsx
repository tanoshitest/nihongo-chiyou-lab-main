import { CheckCircle, Users, Heart } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: "10,000+",
    label: "Bài Quiz hoàn thành",
  },
  {
    icon: Users,
    value: "500+",
    label: "Thành viên đang học",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Miễn phí trọn đời",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">

      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Cộng đồng học tập sôi nổi
          </h2>
          <p className="text-lg text-black/70 max-w-xl mx-auto">
            Cùng hàng nghìn bạn học khác chinh phục tiếng Nhật mỗi ngày
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-black/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
