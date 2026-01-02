import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, Type, Languages, BookOpen } from "lucide-react";

interface ArticleToolbarProps {
  showFurigana: boolean;
  showTranslation: boolean;
  fontSize: number;
  isPlaying: boolean;
  onFuriganaToggle: (value: boolean) => void;
  onTranslationToggle: (value: boolean) => void;
  onFontSizeChange: (value: number[]) => void;
  onPlayToggle: () => void;
}

const ArticleToolbar = ({
  showFurigana,
  showTranslation,
  fontSize,
  isPlaying,
  onFuriganaToggle,
  onTranslationToggle,
  onFontSizeChange,
  onPlayToggle
}: ArticleToolbarProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/95 backdrop-blur-md border rounded-full shadow-lg px-6 py-3 flex items-center gap-6">
        {/* Furigana Toggle */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground hidden sm:inline">Furigana</span>
          <Switch
            checked={showFurigana}
            onCheckedChange={onFuriganaToggle}
          />
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Translation Toggle */}
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground hidden sm:inline">Dịch</span>
          <Switch
            checked={showTranslation}
            onCheckedChange={onTranslationToggle}
          />
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Font Size Slider */}
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-muted-foreground" />
          <Slider
            value={[fontSize]}
            onValueChange={onFontSizeChange}
            min={14}
            max={28}
            step={2}
            className="w-20"
          />
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Play Audio Button */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={onPlayToggle}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ArticleToolbar;
