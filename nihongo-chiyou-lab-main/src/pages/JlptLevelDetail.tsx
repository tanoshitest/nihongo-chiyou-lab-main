import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const levelDescriptions: Record<string, string> = {
  n5: "Cấp độ sơ cấp 1. Hiểu được Hiragana, Katakana và các biểu thức cơ bản trong giao tiếp hàng ngày.",
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
    <Layout>
      <section className="py-12 lg:py-20 bg-background min-h-screen">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/jlpt-n5")}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Đề thi JLPT {upperLevel}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Year Accordion */}
          <div className="bg-card border rounded-xl p-4 md:p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Chọn năm thi
            </h2>
            
            <Accordion type="single" collapsible className="space-y-2">
              {years.map((year) => (
                <AccordionItem 
                  key={year} 
                  value={year.toString()}
                  className="border rounded-lg px-4 bg-background"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-lg font-semibold">Năm {year}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Kỳ tháng 7 */}
                      <button
                        onClick={() => handleSelectSession(year, "july")}
                        className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30 hover:bg-primary/10 hover:border-primary transition-all group text-left"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Kỳ tháng 7</p>
                          <p className="text-sm text-muted-foreground">Kỳ thi mùa hè</p>
                        </div>
                      </button>

                      {/* Kỳ tháng 12 */}
                      <button
                        onClick={() => handleSelectSession(year, "december")}
                        className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30 hover:bg-primary/10 hover:border-primary transition-all group text-left"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Kỳ tháng 12</p>
                          <p className="text-sm text-muted-foreground">Kỳ thi mùa đông</p>
                        </div>
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JlptLevelDetail;
