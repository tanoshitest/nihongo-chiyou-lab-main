import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";


const years = [
  2025, 2024, 2023, 2022, 2021,
  2020, 2019, 2018, 2017, 2016
];

const levelDescriptions: Record<string, string> = {
  n5: "Cấp độ sơ cấp 1. Hiểu được Hiragana, Katakana và giao tiếp cơ bản hàng ngày.",
  n4: "Cấp độ sơ cấp 2. Hiểu được tiếng Nhật cơ bản và có thể đọc hiểu các đoạn văn đơn giản.",
  n3: "Cấp độ trung cấp. Hiểu được tiếng Nhật trong các tình huống hàng ngày ở mức độ nhất định.",
  n2: "Cấp độ trung cao cấp. Hiểu được tiếng Nhật trong nhiều tình huống đa dạng của cuộc sống.",
  n1: "Cấp độ cao cấp. Hiểu được tiếng Nhật trong mọi tình huống từ học thuật đến công việc.",
};

const JlptLevelDetail = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const upperLevel = level?.toUpperCase() || "N5";
  const description = levelDescriptions[level || "n5"] || "";

  const handleSelectSession = (year: number, session: "july" | "december") => {
    navigate(`/jlpt-exam/${level}/${year}/${session}`);
  };

  return (
    <Layout hideFooter>
      <section className="py-4 lg:py-6 bg-background">
        <div className="container max-w-[1600px] px-4 md:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/jlpt-n5")}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>



          {/* Year Accordion */}
          {/* Year Grid */}
          <div className="bg-card border rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Chọn năm thi
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {years.map((year) => (
                <div
                  key={year}
                  className="border rounded-xl p-4 bg-background hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-lg mb-3 border-b pb-2 flex items-center justify-between">
                    <span>Năm {year}</span>
                    <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded">JLPT</span>
                  </div>

                  <div className="space-y-2">
                    {/* Kỳ tháng 7 */}
                    <button
                      onClick={() => handleSelectSession(year, "july")}
                      className="w-full flex items-center justify-between gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-primary/5 hover:border-primary/50 transition-all group"
                    >
                      <p className="font-semibold text-sm whitespace-nowrap">Kỳ tháng 7</p>
                    </button>

                    {/* Kỳ tháng 12 */}
                    <button
                      onClick={() => handleSelectSession(year, "december")}
                      className="w-full flex items-center justify-between gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-primary/5 hover:border-primary/50 transition-all group"
                    >
                      <p className="font-semibold text-sm whitespace-nowrap">Kỳ tháng 12</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JlptLevelDetail;
