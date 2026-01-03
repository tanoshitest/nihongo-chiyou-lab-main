import React from "react";
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

  const [svgContent, setSvgContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    setSvgContent(null); // Reset on kanji change

    fetch(svgUrl)
      .then((res) => res.text())
      .then((text) => {
        // We will inject a <style> block into the SVG to animate the paths

        // 1. Generate Keyframes and Animation Delay for up to 30 strokes
        let styles = `
          @keyframes draw { to { stroke-dashoffset: 0; } }
          path { 
            stroke-dasharray: 500; 
            stroke-dashoffset: 500; 
            stroke: #000000; 
            stroke-width: 3; 
            stroke-linecap: round; 
            stroke-linejoin: round; 
          }
          /* Style numbers: Bold and Black */
          text { 
            font-size: 8px !important; 
            font-family: sans-serif; 
            font-weight: 900 !important; 
            fill: #000000 !important; 
            opacity: 0.6;
          }
        `;

        // Generate delay for each stroke (s1, s2, s3...)
        // We add .animate-drawing class requirement so animation only triggers when flipped
        // We also add 300ms base delay to wait for flip to partially complete
        for (let i = 1; i <= 30; i++) {
          styles += `
             .animate-drawing path[id$="-s${i}"] {
               animation: draw 0.8s linear forwards;
               animation-delay: ${0.4 + (i - 1) * 0.8}s; 
             }
           `;
        }

        const styleBlock = `<style>${styles}</style>`;

        // Insert style before closing svg tag
        const processed = text.replace('</svg>', `${styleBlock}</svg>`);
        setSvgContent(processed);
      })
      .catch((err) => console.error("Failed to load SVG", err));
  }, [svgUrl]);

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

        {/* Back Side - Animated Stroke Order & Numbers */}
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
                Thứ tự nét (Hoạt họa)
              </h3>
            </div>

            {/* Stroke Order Visual Area - White BG */}
            <div className="flex justify-center mb-3 bg-white rounded-lg p-2 border border-border/50 shadow-sm relative overflow-hidden">
              <div className="w-[180px] h-[180px] relative flex items-center justify-center">
                {svgContent ? (
                  <div
                    className={cn("w-full h-full", isFlipped && "animate-drawing")}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                ) : (
                  <div className="text-xs text-muted-foreground">Loading guide...</div>
                )}
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
