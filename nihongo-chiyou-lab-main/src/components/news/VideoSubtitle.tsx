import { SubtitleSegment } from "@/data/newsData";
import WordPopover from "./WordPopover";
import { cn } from "@/lib/utils";

interface VideoSubtitleProps {
  segment: SubtitleSegment;
  isActive: boolean;
  showFurigana: boolean;
  showTranslation: boolean;
  fontSize: number;
}

const VideoSubtitle = ({
  segment,
  isActive,
  showFurigana,
  showTranslation,
  fontSize
}: VideoSubtitleProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg transition-all duration-300 border-l-4",
        isActive 
          ? "bg-primary/10 border-primary shadow-md scale-[1.02]" 
          : "bg-card/50 border-transparent opacity-60"
      )}
      style={{ fontSize: `${fontSize}px` }}
    >
      {/* Japanese with Furigana and Meaning */}
      <div className="flex flex-wrap items-end gap-0.5 mb-2 leading-loose" style={{ lineHeight: "2.5" }}>
        {segment.words.map((word, idx) => {
          // Only show furigana format for Kanji words (words with reading)
          const isKanji = !!word.reading;
          
          // Plain text for non-kanji words (particles, punctuation, hiragana)
          if (!isKanji) {
            return (
              <span key={idx} className="text-foreground self-center">
                {word.text}
              </span>
            );
          }

          // Kanji words with furigana and meaning
          return (
            <WordPopover
              key={idx}
              word={word.text}
              reading={word.reading || ""}
              meaning={word.meaning || ""}
            >
              <span className="inline-flex flex-col items-center cursor-pointer hover:bg-primary/10 rounded px-0.5 transition-colors">
                {/* Reading on top (Furigana) */}
                {showFurigana && (
                  <span 
                    className="text-primary font-medium"
                    style={{ fontSize: `${fontSize * 0.5}px` }}
                  >
                    {word.reading}
                  </span>
                )}
                
                {/* Main Kanji/Text */}
                <span className="text-foreground font-semibold">
                  {word.text}
                </span>
                
                {/* Meaning below */}
                {showFurigana && word.meaning && (
                  <span 
                    className="text-muted-foreground"
                    style={{ fontSize: `${fontSize * 0.45}px` }}
                  >
                    {word.meaning}
                  </span>
                )}
              </span>
            </WordPopover>
          );
        })}
      </div>

      {/* Vietnamese Translation */}
      {showTranslation && (
        <p className="text-muted-foreground border-t pt-2 mt-2" style={{ fontSize: `${fontSize * 0.8}px` }}>
          {segment.vietnameseMeaning}
        </p>
      )}
    </div>
  );
};

export default VideoSubtitle;
