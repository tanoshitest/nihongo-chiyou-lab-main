import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ALPHABET_DATA, CharacterData } from "@/data/alphabetData";

interface CharacterCardProps {
  item: CharacterData;
  isFlipped: boolean;
  onFlip: () => void;
}

const CharacterCard = ({ item, isFlipped, onFlip }: CharacterCardProps) => {
  if (item.isEmpty) {
    return <div className="w-full aspect-square bg-muted/30 rounded-lg" />;
  }

  const { char, romaji, image, examples = [] } = item;
  const firstExample = examples[0];

  return (
    <div
      className="w-full aspect-square cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-card border border-border rounded-lg p-1 sm:p-2 flex flex-col items-center justify-center hover:scale-105 hover:shadow-md hover:border-primary/50 hover:bg-accent transition-all duration-300">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#008001]">
            {char}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">{romaji}</span>
        </div>

        {/* Back Side - Image + Word + English meaning */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-border rounded-lg p-1 sm:p-2 flex flex-col items-center justify-center overflow-hidden">
          {/* Vocabulary Image */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden mb-1">
            {firstExample?.image ? (
              <img src={firstExample.image} alt={firstExample.ja} className="w-full h-full object-cover" />
            ) : image ? (
              <img src={image} alt={`Image for ${char}`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm font-bold text-primary">{char}</span>
            )}
          </div>
          
          {/* Vocabulary Word + English meaning */}
          {firstExample && (
            <div className="text-center">
              <p className="text-xs sm:text-sm font-medium text-foreground">{firstExample.ja}</p>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground">{firstExample.en || firstExample.vi}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CharacterGridProps {
  data: CharacterData[];
  activeCardId: string | null;
  onCardFlip: (cardId: string) => void;
}

const CharacterGrid = ({ data, activeCardId, onCardFlip }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 gap-1 sm:gap-2">
      {data.map((item) => (
        <CharacterCard
          key={item.id}
          item={item}
          isFlipped={activeCardId === item.id}
          onFlip={() => !item.isEmpty && onCardFlip(item.id)}
        />
      ))}
    </div>
  );
};

const AlphabetGrid = () => {
  const [activeTab, setActiveTab] = useState("hiragana");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardFlip = (cardId: string) => {
    setActiveCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl">
          <TabsTrigger
            value="hiragana"
            className="flex-1 min-w-[80px] text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Hiragana
          </TabsTrigger>
          <TabsTrigger
            value="katakana"
            className="flex-1 min-w-[80px] text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Katakana
          </TabsTrigger>
          <TabsTrigger
            value="yoon"
            className="flex-1 min-w-[80px] text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Âm ghép
          </TabsTrigger>
        </TabsList>

        {/* Hiragana Tab */}
        <TabsContent value="hiragana" className="mt-4 animate-fade-in">
          <div className="mb-3">
            <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
              Hiragana
              <span className="text-sm font-normal text-muted-foreground">ひらがな</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              46 ký tự cơ bản. Click để xem ví dụ.
            </p>
          </div>
          <CharacterGrid
            data={ALPHABET_DATA.hiragana}
            activeCardId={activeCardId}
            onCardFlip={handleCardFlip}
          />
        </TabsContent>

        {/* Katakana Tab */}
        <TabsContent value="katakana" className="mt-4 animate-fade-in">
          <div className="mb-3">
            <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
              Katakana
              <span className="text-sm font-normal text-muted-foreground">カタカナ</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              46 ký tự cho từ mượn. Click để xem ví dụ.
            </p>
          </div>
          <CharacterGrid
            data={ALPHABET_DATA.katakana}
            activeCardId={activeCardId}
            onCardFlip={handleCardFlip}
          />
        </TabsContent>

        {/* Yoon Tab */}
        <TabsContent value="yoon" className="mt-4 animate-fade-in space-y-6">
          {/* Hiragana Combined */}
          <div>
            <div className="mb-3">
              <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                Âm ghép Hiragana
                <span className="text-sm font-normal text-muted-foreground">ひらがな拗音</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Kết hợp với ゃ, ゅ, ょ. Click để xem ví dụ.
              </p>
            </div>
            <CharacterGrid
              data={ALPHABET_DATA.combined}
              activeCardId={activeCardId}
              onCardFlip={handleCardFlip}
            />
          </div>

          {/* Katakana Combined */}
          <div>
            <div className="mb-3">
              <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                Âm ghép Katakana
                <span className="text-sm font-normal text-muted-foreground">カタカナ拗音</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Kết hợp với ャ, ュ, ョ. Click để xem ví dụ.
              </p>
            </div>
            <CharacterGrid
              data={ALPHABET_DATA.combinedKatakana}
              activeCardId={activeCardId}
              onCardFlip={handleCardFlip}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlphabetGrid;
