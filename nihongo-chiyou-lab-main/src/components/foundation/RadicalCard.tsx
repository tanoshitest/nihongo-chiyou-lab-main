import { Radical } from "@/data/radicalData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RadicalCardProps {
  radical: Radical;
  isFlipped: boolean;
  onFlip: () => void;
}

const highlightKanji = (sentence: string) => {
  // Split by ** markers to find highlighted parts
  const parts = sentence.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    // Odd indices are the highlighted kanji
    if (index % 2 === 1) {
      return (
        <span key={index} className="font-bold text-primary">
          {part}
        </span>
      );
    }
    return part;
  });
};

const RadicalCard = ({ radical, isFlipped, onFlip }: RadicalCardProps) => {
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
                {radical.number}/214
              </span>
              <Badge variant="secondary" className="text-xs">
                {radical.strokes} nét
              </Badge>
            </div>

            {/* Radical character */}
            <div className="text-center flex-1 flex items-center justify-center">
              <span className="text-7xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {radical.char}
              </span>
            </div>

            {/* Meaning */}
            <div className="text-center mt-4">
              <p className="text-base font-medium text-foreground">
                {radical.meaning}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {radical.category}
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
                Bộ {radical.meaning.split("(")[1]?.replace(")", "") || radical.meaning} - {radical.char}
              </h3>
            </div>

            {/* Mnemonic Image */}
            <div className="mb-3 rounded-lg overflow-hidden bg-muted">
              <img
                src={radical.mnemonic_image}
                alt={`Hình minh họa bộ ${radical.char}`}
                className="w-full h-20 object-cover"
              />
            </div>

            {/* Examples Section */}
            <div className="flex-1 overflow-hidden">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                Ví dụ trong câu:
              </h4>
              <div className="space-y-2 overflow-y-auto max-h-[160px] pr-1">
                {radical.examples.map((example, index) => {
                  // Extract translation from sentence if not separate
                  const sentenceParts = example.sentence.split(/[（(]/);
                  const japaneseSentence = sentenceParts[0].trim();
                  const translation = example.translation || (sentenceParts[1] ? sentenceParts[1].replace(/[）)]/, '').trim() : '');
                  
                  return (
                    <div
                      key={index}
                      className="text-xs p-2 bg-muted/50 rounded-md space-y-0.5"
                    >
                      {/* Japanese sentence */}
                      <p className="text-foreground font-medium leading-relaxed">
                        {highlightKanji(japaneseSentence)}
                      </p>
                      {/* Reading */}
                      {example.reading && (
                        <p className="text-muted-foreground text-[10px]">
                          {example.reading}
                        </p>
                      )}
                      {/* Translation */}
                      {translation && (
                        <p className="text-primary/80 text-[10px]">
                          {translation}
                        </p>
                      )}
                    </div>
                  );
                })}
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

export default RadicalCard;
