import { useState, useMemo } from "react";
import { kanjiData } from "@/data/kanjiData";
import KanjiFlipCard from "./KanjiFlipCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const KanjiGrid = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string>("all");

  const handleCardFlip = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const filteredKanji = useMemo(() => {
    if (selectedLesson === "all") return kanjiData;
    return kanjiData.filter((kanji) => kanji.lesson === parseInt(selectedLesson));
  }, [selectedLesson]);

  const lessons = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          512 Kanji - Look and Learn
        </h2>

        <div className="w-full md:w-[200px]">
          <Select
            value={selectedLesson}
            onValueChange={setSelectedLesson}
          >
            <SelectTrigger>
              <SelectValue placeholder="Chọn bài học" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả bài học</SelectItem>
              {lessons.map((lesson) => (
                <SelectItem key={lesson} value={lesson.toString()}>
                  Bài {lesson}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">
        Click vào thẻ để xem nghĩa và ví dụ. Đây là bộ Kanji cơ bản giúp bạn
        chuẩn bị tốt cho kỳ thi JLPT.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredKanji.map((kanji) => (
          <KanjiFlipCard
            key={kanji.id}
            kanji={kanji}
            isFlipped={activeCardId === kanji.id}
            onFlip={() => handleCardFlip(kanji.id)}
          />
        ))}
      </div>

      {filteredKanji.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Không tìm thấy Kanji nào trong bài học này.
        </div>
      )}
    </div>
  );
};

export default KanjiGrid;
