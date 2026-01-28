import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ExamRunner } from "@/components/exam/ExamRunner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const JlptExamRunner = () => {
  const { level, year, session } = useParams();
  const navigate = useNavigate();
  const [isExamFinished, setIsExamFinished] = useState(false);

  const isPractice = year === "practice";
  const sessionLabel = isPractice
    ? "Luyện tập"
    : (session === "july" ? "Kỳ tháng 7" : "Kỳ tháng 12");

  const isRealJLPTSession = (session === "july" && year === "2025") || session === "practice-n5-kanji-1";

  return (
    <Layout
      hideFooter={isRealJLPTSession && (!isExamFinished || session === "practice-n5-kanji-1")}
      hideHeader={isRealJLPTSession && !isExamFinished}
    >

      {/* Back button header - Hide for Real JLPT 2025 */}
      {!isRealJLPTSession && (
        <div className="bg-background border-b px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(isPractice ? "/jlpt-practice" : "/jlpt-n5")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại danh sách đề
            </Button>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{level}</span>
              <span>•</span>
              <span>{isPractice ? "Đề Luyện Tập" : `Năm ${year}`}</span>
              <span>•</span>
              <span>{sessionLabel}</span>
            </div>
          </div>
        </div>
      )}

      <ExamRunner
        level={level || "N5"}
        year={isPractice ? 0 : parseInt(year || "2024")}
        session={session as any}
        isPractice={isPractice}
        practiceId={isPractice ? session : undefined}
        onFinish={() => setIsExamFinished(true)}
      />
    </Layout>
  );
};

export default JlptExamRunner;
