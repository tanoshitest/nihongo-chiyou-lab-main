import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bookmark, Volume2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface WordPopoverProps {
  children: React.ReactNode;
  word: string;
  reading: string;
  meaning: string;
}

const WordPopover = ({ children, word, reading, meaning }: WordPopoverProps) => {
  const handleSaveFlashcard = () => {
    toast({
      title: "Đã lưu từ vựng!",
      description: `"${word}" đã được thêm vào danh sách flashcard.`,
    });
  };

  const handlePlaySound = () => {
    // Use Web Speech API for pronunciation
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Phát âm",
        description: `Đang phát âm: ${reading}`,
      });
    }
  };

  // Don't show popover for punctuation or particles without meaning
  if (!reading && !meaning) {
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-card" align="center">
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">{word}</p>
            {reading && <p className="text-lg text-primary">{reading}</p>}
          </div>
          
          {meaning && (
            <div className="border-t pt-3">
              <p className="text-sm text-muted-foreground mb-1">Nghĩa tiếng Việt:</p>
              <p className="font-medium text-foreground">{meaning}</p>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handlePlaySound}
            >
              <Volume2 className="w-4 h-4 mr-1" />
              Phát âm
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={handleSaveFlashcard}
            >
              <Bookmark className="w-4 h-4 mr-1" />
              Lưu từ
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WordPopover;
