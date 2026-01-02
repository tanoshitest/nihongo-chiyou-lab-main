import { useState } from "react";
import { kanjiData } from "@/data/kanjiData";
import KanjiFlipCard from "./KanjiFlipCard";

const KanjiGrid = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardFlip = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          512 Kanji - Look and Learn
        </h2>
      </div>
      <p className="text-muted-foreground mb-8">
        Click vào thẻ để xem nghĩa và ví dụ. Đây là bộ Kanji cơ bản giúp bạn
        chuẩn bị tốt cho kỳ thi JLPT.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {kanjiData.map((kanji) => (
          <KanjiFlipCard 
            key={kanji.id} 
            kanji={kanji} 
            isFlipped={activeCardId === kanji.id}
            onFlip={() => handleCardFlip(kanji.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanjiGrid;
