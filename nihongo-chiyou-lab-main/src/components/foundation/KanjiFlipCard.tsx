import { KanjiCard } from "@/data/kanjiData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface KanjiFlipCardProps {
  kanji: KanjiCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const KanjiFlipCard = ({ kanji, isFlipped, onFlip }: KanjiFlipCardProps) => {
  return (
    <div
      className="relative h-[380px] cursor-pointer perspective-1000"
      style={{ perspective: "1000px" }}
      onClick={onFlip}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group flex flex-col">
            {/* Header with number and stroke badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                {kanji.id}/512
              </span>
              <Badge variant="secondary" className="text-xs">
                {kanji.sinoVietnamese}
              </Badge>
            </div>

            {/* Kanji character */}
            <div className="text-center flex-1 flex items-center justify-center">
              <span className="text-7xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {kanji.kanji}
              </span>
            </div>

            {/* Meaning */}
            <div className="text-center mt-4">
              <p className="text-base font-medium text-foreground">
                {kanji.meaning}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                音: {kanji.onyomi} | 訓: {kanji.kunyomi}
              </p>
            </div>

            {/* Click hint */}
            <p className="text-xs text-muted-foreground text-center mt-3">
              Click để xem ví dụ
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full bg-card border border-border rounded-xl p-4 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="text-center border-b border-border pb-2 mb-3">
              <h3 className="text-sm font-semibold text-foreground">
                {kanji.kanji} - {kanji.meaning}
              </h3>
            </div>

            {/* Mnemonic Image */}
            <div className="mb-3 rounded-lg overflow-hidden bg-muted">
              <img
                src={kanji.imageUrl || `https://placehold.co/300x200/e2e8f0/1e293b?text=${encodeURIComponent(kanji.kanji)}`}
                alt={`Hình minh họa ${kanji.kanji}`}
                className="w-full h-20 object-cover"
              />
            </div>

            {/* Examples Section */}
            <div className="flex-1 overflow-hidden">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                Ví dụ trong câu:
              </h4>
              <div className="space-y-2 overflow-y-auto max-h-[160px] pr-1">
                {kanji.examples.map((example, index) => (
                  <div
                    key={index}
                    className="text-xs p-2 bg-muted/50 rounded-md space-y-0.5"
                  >
                    {/* Japanese sentence */}
                    <p className="text-foreground font-medium leading-relaxed">
                      {example.japanese}
                    </p>
                    {/* Reading */}
                    <p className="text-muted-foreground text-[10px]">
                      {example.romaji}
                    </p>
                    {/* Translation */}
                    <p className="text-primary/80 text-[10px]">
                      {example.vietnamese}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Click hint */}
            <p className="text-xs text-muted-foreground text-center mt-2 pt-2 border-t border-border">
              Click để quay lại
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanjiFlipCard;
