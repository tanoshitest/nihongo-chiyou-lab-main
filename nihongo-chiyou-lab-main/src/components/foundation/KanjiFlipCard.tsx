import { KanjiCard } from "@/data/kanjiData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface KanjiFlipCardProps {
  kanji: KanjiCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const KanjiFlipCard = ({ kanji, isFlipped, onFlip }: KanjiFlipCardProps) => {
  // Get Unicode hex code for the Kanji (e.g. '日' -> '65e5')
  const unicodeHex = kanji.kanji.charCodeAt(0).toString(16).toLowerCase().padStart(5, '0');
  const svgUrl = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${unicodeHex}.svg`;
  // Using a reliable GIF source. 'mistval/kanji_images' uses lowercase hex.
  const gifUrl = `https://raw.githubusercontent.com/mistval/kanji_images/master/gifs/${kanji.kanji.charCodeAt(0).toString(16).toLowerCase()}.gif`;

  return (
    <div
      className="relative h-[450px] cursor-pointer perspective-1000"
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
        {/* Front Side - Mnemonic Image or Big Kanji */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground font-medium">
                {kanji.id}/512
              </span>
              <Badge variant="secondary" className="text-xs">
                {kanji.sinoVietnamese}
              </Badge>
            </div>

            {/* Main Content: Mnemonic Image if exists, else Big Kanji */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-0">
              {kanji.imageUrl ? (
                <div className="relative w-full h-full max-h-[220px] flex items-center justify-center">
                  <img
                    src={kanji.imageUrl}
                    alt={`Mnemonic: ${kanji.meaning}`}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-8xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {kanji.kanji}
                  </span>
                </div>
              )}

              {/* Show Kanji and Meaning below image if image exists */}
              {kanji.imageUrl && (
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">{kanji.kanji}</h3>
                </div>
              )}
            </div>

            {/* Meaning & Readings */}
            <div className="text-center mt-4 pt-4 border-t border-border/50">
              <p className="text-lg font-medium text-foreground">
                {kanji.meaning}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                音: {kanji.onyomi} | 訓: {kanji.kunyomi}
              </p>
            </div>

            {/* Click hint */}
            <p className="text-xs text-muted-foreground text-center mt-3">
              Click để xem cách viết
            </p>
          </div>
        </div>

        {/* Back Side - Stroke Order GIF & Numbered SVG Overlay */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full bg-card border border-border rounded-xl p-4 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="text-center border-b border-border pb-2 mb-2">
              <h3 className="text-sm font-semibold text-foreground">
                Thứ tự nét (GIF + Số)
              </h3>
            </div>

            {/* Stroke Order Visual Area */}
            <div className="flex justify-center mb-3 bg-white rounded-lg p-2 border border-border/50 shadow-sm relative overflow-hidden">
              <div className="w-[180px] h-[180px] relative">
                {/* Layer 1: Animated GIF */}
                <img
                  src={gifUrl}
                  alt="Animation"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />

                {/* Layer 2: Static SVG with Numbers (Overlay) 
                    Set opacity low so black strokes don't block GIF, but numbers remain visible-ish.
                */}
                <img
                  src={svgUrl}
                  alt="Numbers"
                  className="absolute inset-0 w-full h-full object-contain z-20 opacity-30 pointer-events-none"
                />
              </div>
            </div>

            {/* Examples Section */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                Ví dụ:
              </h4>
              <div className="space-y-2 overflow-y-auto pr-1 flex-1">
                {kanji.examples.map((example, index) => (
                  <div
                    key={index}
                    className="text-xs p-2 bg-muted/50 rounded-md"
                  >
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="text-foreground font-medium">{example.japanese}</span>
                      <span className="text-[9px] text-muted-foreground ml-1">{example.romaji}</span>
                    </div>
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
