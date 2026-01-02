import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Volume2, BookOpen, MessageSquare, PenTool, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getLessonData, LessonDetail as LessonDetailType, KanjiDetail } from "@/data/minnaData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

// Kanji Hover Component - hiển thị chi tiết từng kanji khi rê chuột
const KanjiHoverCard = ({ kanjiChar, detail }: { kanjiChar: string; detail: KanjiDetail }) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="cursor-help hover:text-[#008001] hover:underline decoration-dotted transition-colors">
          {kanjiChar}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-background border shadow-lg z-50" side="top">
        <div className="space-y-3">
          {/* Header với Kanji lớn */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#008001]/10 border-2 border-[#008001] flex items-center justify-center">
              <span className="text-4xl font-bold text-[#008001]">{detail.kanji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-lg">{detail.meaning}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">JLPT {detail.jlpt}</Badge>
                <Badge variant="outline" className="text-xs">{detail.strokes} nét</Badge>
              </div>
            </div>
          </div>

          {/* Âm đọc */}
          <div className="space-y-1.5 text-sm">
            <div className="flex gap-2">
              <span className="font-medium text-[#008001] w-16">Âm On:</span>
              <span className="text-foreground">{detail.onyomi}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-[#008001] w-16">Âm Kun:</span>
              <span className="text-foreground">{detail.kunyomi}</span>
            </div>
            {detail.radicals && (
              <div className="flex gap-2">
                <span className="font-medium text-[#008001] w-16">Bộ thủ:</span>
                <span className="text-foreground">{detail.radicals}</span>
              </div>
            )}
          </div>

          {/* Từ vựng ví dụ */}
          {detail.examples && detail.examples.length > 0 && (
            <div className="border-t pt-2">
              <p className="text-xs font-medium text-muted-foreground mb-1">Từ vựng liên quan:</p>
              <ul className="text-xs text-foreground space-y-0.5">
                {detail.examples.map((ex, i) => (
                  <li key={i} className="text-muted-foreground">• {ex}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

// Component để render Kanji với hover - tách từng ký tự
const KanjiWithHover = ({ kanjiText, kanjiDetails }: { kanjiText: string; kanjiDetails?: KanjiDetail[] }) => {
  if (!kanjiText || kanjiText === '—') return <span>—</span>;
  if (!kanjiDetails || kanjiDetails.length === 0) return <span>{kanjiText}</span>;

  // Tách từng ký tự và match với detail
  const chars = kanjiText.split('');
  
  return (
    <span className="inline-flex gap-0">
      {chars.map((char, index) => {
        const detail = kanjiDetails.find(d => d.kanji === char);
        if (detail) {
          return <KanjiHoverCard key={index} kanjiChar={char} detail={detail} />;
        }
        return <span key={index}>{char}</span>;
      })}
    </span>
  );
};
import { VocabExampleFurigana } from "@/data/minnaData";

// Vocabulary Tab Component
const VocabularyTab = ({ vocabulary }: { vocabulary: LessonDetailType['vocabulary'] }) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [showVocabFurigana, setShowVocabFurigana] = useState(false);

  const handlePlaySound = (word: string) => {
    console.log(`Playing sound for: ${word}`);
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Function to render vocabulary example with furigana and kanji hover
  const renderVocabWithFurigana = (text: string, furiganaList?: VocabExampleFurigana[], kanjiDetailsList?: KanjiDetail[]) => {
    if (!furiganaList || furiganaList.length === 0) {
      // If no furigana but has kanji details, render with hover only
      if (kanjiDetailsList && kanjiDetailsList.length > 0) {
        return renderTextWithKanjiHover(text, kanjiDetailsList);
      }
      return <span>{text}</span>;
    }

    let result: React.ReactNode[] = [];
    let remainingText = text;
    let keyIndex = 0;

    // Sort furiganaList by position in text to process in order
    const sortedFurigana = [...furiganaList].sort((a, b) => {
      const posA = text.indexOf(a.kanji);
      const posB = text.indexOf(b.kanji);
      return posA - posB;
    });

    sortedFurigana.forEach((item) => {
      const kanjiIndex = remainingText.indexOf(item.kanji);
      if (kanjiIndex !== -1) {
        // Add text before kanji
        if (kanjiIndex > 0) {
          result.push(<span key={`text-${keyIndex++}`}>{remainingText.slice(0, kanjiIndex)}</span>);
        }
        
        // Find kanji details for this item
        const kanjiChars = item.kanji.split('');
        const hasKanjiDetails = kanjiDetailsList && kanjiDetailsList.length > 0;
        
        if (showVocabFurigana) {
          // Show furigana mode with reading on top, kanji in middle (with hover), meaning below
          result.push(
            <span key={`ruby-${keyIndex++}`} className="inline-flex flex-col items-center mx-0.5">
              <span className="text-[10px] text-muted-foreground leading-tight">{item.reading}</span>
              <span className="text-[#008001] font-medium">
                {hasKanjiDetails ? (
                  <span className="inline-flex">
                    {kanjiChars.map((char, charIdx) => {
                      const detail = kanjiDetailsList?.find(d => d.kanji === char);
                      if (detail) {
                        return <KanjiHoverCard key={charIdx} kanjiChar={char} detail={detail} />;
                      }
                      return <span key={charIdx}>{char}</span>;
                    })}
                  </span>
                ) : item.kanji}
              </span>
              <span className="text-[9px] text-primary/70 leading-tight">{item.meaning}</span>
            </span>
          );
        } else {
          // No furigana mode - just render kanji with hover
          result.push(
            <span key={`kanji-${keyIndex++}`} className="text-[#008001] font-medium">
              {hasKanjiDetails ? (
                <span className="inline-flex">
                  {kanjiChars.map((char, charIdx) => {
                    const detail = kanjiDetailsList?.find(d => d.kanji === char);
                    if (detail) {
                      return <KanjiHoverCard key={charIdx} kanjiChar={char} detail={detail} />;
                    }
                    return <span key={charIdx}>{char}</span>;
                  })}
                </span>
              ) : item.kanji}
            </span>
          );
        }
        remainingText = remainingText.slice(kanjiIndex + item.kanji.length);
      }
    });

    // Add remaining text
    if (remainingText) {
      result.push(<span key={`text-${keyIndex++}`}>{remainingText}</span>);
    }

    return <span className="inline-flex items-center flex-wrap">{result}</span>;
  };

  // Helper function to render text with kanji hover (no furigana)
  const renderTextWithKanjiHover = (text: string, kanjiDetailsList: KanjiDetail[]) => {
    let result: React.ReactNode[] = [];
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const detail = kanjiDetailsList.find(d => d.kanji === char);
      if (detail) {
        result.push(<KanjiHoverCard key={`hover-${keyIndex++}`} kanjiChar={char} detail={detail} />);
      } else {
        result.push(<span key={`char-${keyIndex++}`}>{char}</span>);
      }
    }
    
    return <span className="inline-flex">{result}</span>;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg text-[#008001]">Từ vựng bài học</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Furigana:</span>
          <Button
            variant={showVocabFurigana ? "default" : "outline"}
            size="sm"
            onClick={() => setShowVocabFurigana(!showVocabFurigana)}
            className={cn(
              "h-7 px-2 text-xs",
              showVocabFurigana && "bg-[#008001] hover:bg-[#006801]"
            )}
          >
            {showVocabFurigana ? "Bật" : "Tắt"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="hidden sm:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px] text-center">STT</TableHead>
                <TableHead className="w-[150px]">Hiragana</TableHead>
                <TableHead className="w-[100px]">Kanji</TableHead>
                <TableHead className="w-[150px]">Romaji</TableHead>
                <TableHead>Nghĩa tiếng Việt</TableHead>
                <TableHead className="w-[60px] text-center">Âm</TableHead>
                <TableHead className="w-[60px] text-center">VD</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vocabulary.map((item, index) => (
                <Collapsible key={index} open={openItems[index]} onOpenChange={() => toggleItem(index)} asChild>
                  <>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell className="text-center font-medium text-muted-foreground">{index + 1}</TableCell>
                      <TableCell className="font-medium text-[#008001]">{item.word}</TableCell>
                      <TableCell className="text-foreground">
                        <KanjiWithHover kanjiText={item.kanji} kanjiDetails={item.kanjiDetails} />
                      </TableCell>
                      <TableCell className="text-muted-foreground italic">{item.romaji || '—'}</TableCell>
                      <TableCell className="text-muted-foreground">{item.mean}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-[#008001]/10"
                          onClick={() => handlePlaySound(item.word)}
                        >
                          <Volume2 className="w-4 h-4 text-[#008001]" />
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        {item.examples && item.examples.length > 0 && (
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-[#008001]/10"
                            >
                              {openItems[index] ? (
                                <ChevronUp className="w-4 h-4 text-[#008001]" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-[#008001]" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                        )}
                      </TableCell>
                    </TableRow>
                    {item.examples && item.examples.length > 0 && (
                      <CollapsibleContent asChild>
                        <TableRow className="bg-[#008001]/5 border-l-4 border-l-[#008001]">
                          <TableCell colSpan={7} className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {item.examples.slice(0, 6).map((example, exIndex) => (
                                <div key={exIndex} className="bg-background rounded-lg p-3 border shadow-sm">
                                  <div className="font-medium text-sm mb-1">
                                    <span className="text-[#008001] mr-1">{exIndex + 1}.</span>
                                    {renderVocabWithFurigana(example.jp, example.furigana, example.kanjiDetails)}
                                  </div>
                                  <p className="text-xs text-muted-foreground italic">{example.romaji}</p>
                                  <p className="text-sm text-foreground mt-1">{example.vn}</p>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      </CollapsibleContent>
                    )}
                  </>
                </Collapsible>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile view */}
        <div className="sm:hidden space-y-2 p-4">
          {vocabulary.map((item, index) => (
            <Collapsible key={index} open={openItems[index]} onOpenChange={() => toggleItem(index)}>
              <div className="border rounded-lg overflow-hidden">
                <div className="flex items-center gap-3 p-3 bg-muted/30">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008001] text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#008001] truncate">{item.word}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.romaji}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handlePlaySound(item.word)}
                    >
                      <Volume2 className="w-4 h-4 text-[#008001]" />
                    </Button>
                    {item.examples && item.examples.length > 0 && (
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          {openItems[index] ? (
                            <ChevronUp className="w-4 h-4 text-[#008001]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#008001]" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    )}
                  </div>
                </div>
                <div className="px-3 pb-3 pt-1">
                  <p className="text-sm">
                    {item.kanji && (
                      <span className="text-foreground mr-2">
                        <KanjiWithHover kanjiText={item.kanji} kanjiDetails={item.kanjiDetails} />
                      </span>
                    )}
                    {item.mean}
                  </p>
                </div>
                {item.examples && item.examples.length > 0 && (
                  <CollapsibleContent>
                    <div className="border-t bg-[#008001]/5 p-3 space-y-2">
                      {item.examples.slice(0, 6).map((example, exIndex) => (
                        <div key={exIndex} className="bg-background rounded-lg p-2 border text-sm">
                          <div className="font-medium mb-1">
                            <span className="text-[#008001] mr-1">{exIndex + 1}.</span>
                            {renderVocabWithFurigana(example.jp, example.furigana, example.kanjiDetails)}
                          </div>
                          <p className="text-xs text-muted-foreground italic">{example.romaji}</p>
                          <p className="text-foreground">{example.vn}</p>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                )}
              </div>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Grammar Tab Component
const GrammarTab = ({ grammar }: { grammar: LessonDetailType['grammar'] }) => {
  const [showFurigana, setShowFurigana] = useState(false);

  // Function to render text with furigana (same style as vocabulary examples)
  const renderWithFurigana = (text: string, furiganaList?: { kanji: string; reading: string; meaning?: string }[]) => {
    if (!furiganaList || furiganaList.length === 0) {
      return <span>{text}</span>;
    }

    let result: React.ReactNode[] = [];
    let remainingText = text;
    let keyIndex = 0;

    // Sort furiganaList by position in text to process in order
    const sortedFurigana = [...furiganaList].sort((a, b) => {
      const posA = text.indexOf(a.kanji);
      const posB = text.indexOf(b.kanji);
      return posA - posB;
    });

    sortedFurigana.forEach((item) => {
      const kanjiIndex = remainingText.indexOf(item.kanji);
      if (kanjiIndex !== -1) {
        // Add text before kanji
        if (kanjiIndex > 0) {
          result.push(<span key={`text-${keyIndex++}`}>{remainingText.slice(0, kanjiIndex)}</span>);
        }
        
        if (showFurigana) {
          // Show furigana mode with reading on top, kanji in middle, meaning below
          result.push(
            <span key={`ruby-${keyIndex++}`} className="inline-flex flex-col items-center mx-0.5">
              <span className="text-[10px] text-muted-foreground leading-tight">{item.reading}</span>
              <span className="text-[#008001] font-medium">{item.kanji}</span>
              {item.meaning && (
                <span className="text-[9px] text-primary/70 leading-tight">{item.meaning}</span>
              )}
            </span>
          );
        } else {
          // No furigana mode - just render kanji with color
          result.push(
            <span key={`kanji-${keyIndex++}`} className="text-[#008001] font-medium">{item.kanji}</span>
          );
        }
        remainingText = remainingText.slice(kanjiIndex + item.kanji.length);
      }
    });

    // Add remaining text
    if (remainingText) {
      result.push(<span key={`text-${keyIndex++}`}>{remainingText}</span>);
    }

    return <span className="inline-flex items-center flex-wrap">{result}</span>;
  };

  return (
    <div className="space-y-4">
      {/* Furigana Toggle */}
      <Card className="border-[#008001]/30">
        <CardContent className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#008001]" />
            <span className="font-medium text-foreground">Chế độ Furigana</span>
            <span className="text-xs text-muted-foreground">(hiển thị cách đọc trên kanji)</span>
          </div>
          <Button
            variant={showFurigana ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFurigana(!showFurigana)}
            className={cn(
              showFurigana && "bg-[#008001] hover:bg-[#006801]"
            )}
          >
            {showFurigana ? "Bật" : "Tắt"}
          </Button>
        </CardContent>
      </Card>

      {grammar.map((point, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold text-[#008001] flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#008001] text-white text-xs">
                {index + 1}
              </span>
              {point.pattern}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground">{point.explanation}</p>
            <div className="bg-[#008001]/5 border border-[#008001]/20 rounded-lg p-3">
              <p className="text-sm font-medium text-[#008001]">📝 Ví dụ mẫu:</p>
              <p className="text-foreground mt-1">{point.example}</p>
            </div>
            
            {/* 10 Example Sentences */}
            {point.examples && point.examples.length > 0 && (
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium text-[#008001] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Các câu ví dụ ({point.examples.length} câu):
                </p>
                <div className="grid gap-3">
                  {point.examples.map((ex, exIndex) => (
                    <div 
                      key={exIndex} 
                      className="bg-muted/30 rounded-lg overflow-hidden border-l-2 border-[#008001]"
                    >
                      {/* Ảnh minh hoạ - nằm trên cùng như Irodori */}
                      {ex.image && (
                        <div className="border-b">
                          <img 
                            src={ex.image} 
                            alt={`Minh hoạ: ${ex.vn}`}
                            className="w-full h-40 object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Nội dung câu ví dụ */}
                      <div className="p-3">
                        <p className="font-medium text-foreground text-sm flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#008001]/20 text-[#008001] text-xs flex items-center justify-center">
                            {exIndex + 1}
                          </span>
                          <span className="flex-1">
                            {renderWithFurigana(ex.jp, ex.furigana)}
                          </span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1 ml-7">{ex.vn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Kaiwa Tab Component
const KaiwaTab = ({ kaiwa, kaiwaImage }: { kaiwa: LessonDetailType['kaiwa']; kaiwaImage?: string }) => {
  const [showKaiwaFurigana, setShowKaiwaFurigana] = useState(false);

  // Render text with furigana for Kaiwa
  const renderKaiwaWithFurigana = (text: string, furiganaList?: { kanji: string; reading: string; meaning: string }[]) => {
    if (!furiganaList || furiganaList.length === 0) {
      return <span>{text}</span>;
    }

    let result: React.ReactNode[] = [];
    let remainingText = text;
    let keyIndex = 0;

    const sortedFurigana = [...furiganaList].sort((a, b) => {
      const posA = text.indexOf(a.kanji);
      const posB = text.indexOf(b.kanji);
      return posA - posB;
    });

    sortedFurigana.forEach((item) => {
      const kanjiIndex = remainingText.indexOf(item.kanji);
      if (kanjiIndex !== -1) {
        if (kanjiIndex > 0) {
          result.push(<span key={`text-${keyIndex++}`}>{remainingText.slice(0, kanjiIndex)}</span>);
        }
        
        if (showKaiwaFurigana) {
          result.push(
            <span key={`ruby-${keyIndex++}`} className="inline-flex flex-col items-center mx-0.5">
              <span className="text-[10px] text-muted-foreground leading-tight">{item.reading}</span>
              <span className="text-[#008001] font-medium">{item.kanji}</span>
              <span className="text-[9px] text-primary/70 leading-tight">{item.meaning}</span>
            </span>
          );
        } else {
          result.push(
            <span key={`kanji-${keyIndex++}`} className="text-[#008001] font-medium">{item.kanji}</span>
          );
        }
        remainingText = remainingText.slice(kanjiIndex + item.kanji.length);
      }
    });

    if (remainingText) {
      result.push(<span key={`text-${keyIndex++}`}>{remainingText}</span>);
    }

    return <span className="inline-flex items-center flex-wrap">{result}</span>;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-[#008001]">Hội thoại mẫu</CardTitle>
          <Button
            variant={showKaiwaFurigana ? "default" : "outline"}
            size="sm"
            onClick={() => setShowKaiwaFurigana(!showKaiwaFurigana)}
            className={cn(
              "text-xs",
              showKaiwaFurigana && "bg-[#008001] hover:bg-[#006801]"
            )}
          >
            <BookOpen className="w-3 h-3 mr-1" />
            Furigana {showKaiwaFurigana ? "ON" : "OFF"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Ảnh minh hoạ cho hội thoại */}
        {kaiwaImage && (
          <div className="mb-6 rounded-lg overflow-hidden border">
            <img 
              src={kaiwaImage} 
              alt="Minh hoạ hội thoại" 
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        
        <div className="space-y-4">
          {kaiwa.map((line, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3 p-3 rounded-lg",
                index % 2 === 0 ? "bg-[#008001]/5" : "bg-muted/50"
              )}
            >
              <div className="flex-shrink-0">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",
                  index % 2 === 0 ? "bg-[#008001]" : "bg-primary"
                )}>
                  {line.char.charAt(0)}
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-foreground text-sm">{line.char}</p>
                <p className="text-[#008001] font-medium">
                  {renderKaiwaWithFurigana(line.jp, line.furigana)}
                </p>
                <p className="text-muted-foreground text-sm">{line.vn}</p>
              </div>
              <Button variant="ghost" size="icon" className="flex-shrink-0 hover:bg-[#008001]/10">
                <Volume2 className="w-4 h-4 text-[#008001]" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Quiz Tab Component
const QuizTab = ({ quiz }: { quiz: LessonDetailType['quiz'] }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const correctCount = quiz.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const allAnswered = quiz.every(q => userAnswers[q.id]);

  return (
    <div className="space-y-6">
      {isSubmitted && (
        <Card className="border-[#008001]">
          <CardContent className="py-6">
            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-muted-foreground">Kết quả của bạn</p>
              <p className={cn(
                "text-4xl font-bold",
                correctCount === quiz.length ? "text-[#008001]" : 
                correctCount >= quiz.length / 2 ? "text-yellow-600" : "text-destructive"
              )}>
                {correctCount}/{quiz.length}
              </p>
              <p className="text-sm text-muted-foreground">
                {correctCount === quiz.length ? "🎉 Xuất sắc! Bạn đã làm đúng tất cả!" :
                 correctCount >= quiz.length / 2 ? "👍 Khá tốt! Hãy xem lại các câu sai nhé." :
                 "💪 Cố gắng lên! Hãy ôn lại bài học và thử lại."}
              </p>
              <Button onClick={handleReset} variant="outline" className="mt-4">
                <RotateCcw className="w-4 h-4 mr-2" />
                Làm lại
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {quiz.map((question, qIndex) => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        const showResult = isSubmitted;

        return (
          <Card 
            key={question.id}
            className={cn(
              "transition-all",
              showResult && isCorrect && "border-[#008001] bg-[#008001]/5",
              showResult && !isCorrect && userAnswer && "border-destructive bg-destructive/5"
            )}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-start gap-2">
                <span className={cn(
                  "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  showResult && isCorrect ? "bg-[#008001] text-white" :
                  showResult && !isCorrect && userAnswer ? "bg-destructive text-white" :
                  "bg-muted text-muted-foreground"
                )}>
                  {showResult ? (
                    isCorrect ? <CheckCircle2 className="w-4 h-4" /> : 
                    userAnswer ? <XCircle className="w-4 h-4" /> : qIndex + 1
                  ) : qIndex + 1}
                </span>
                <span className="text-foreground">{question.question}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={userAnswer || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
                disabled={isSubmitted}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {question.options.map((option, oIndex) => {
                    const optionLabel = String.fromCharCode(65 + oIndex);
                    const isThisCorrect = option === question.correctAnswer;
                    const isThisSelected = userAnswer === option;

                    return (
                      <div
                        key={oIndex}
                        className={cn(
                          "flex items-center space-x-3 rounded-lg border p-3 transition-all",
                          !isSubmitted && "hover:bg-muted/50 cursor-pointer",
                          isSubmitted && isThisCorrect && "border-[#008001] bg-[#008001]/10",
                          isSubmitted && isThisSelected && !isThisCorrect && "border-destructive bg-destructive/10"
                        )}
                      >
                        <RadioGroupItem
                          value={option}
                          id={`q${question.id}-${oIndex}`}
                          className={cn(
                            isSubmitted && isThisCorrect && "border-[#008001] text-[#008001]",
                            isSubmitted && isThisSelected && !isThisCorrect && "border-destructive text-destructive"
                          )}
                        />
                        <Label
                          htmlFor={`q${question.id}-${oIndex}`}
                          className={cn(
                            "flex-1 cursor-pointer text-sm",
                            isSubmitted && isThisCorrect && "text-[#008001] font-medium",
                            isSubmitted && isThisSelected && !isThisCorrect && "text-destructive"
                          )}
                        >
                          <span className="font-medium mr-2">{optionLabel}.</span>
                          {option}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>

              {showResult && (
                <div className={cn(
                  "p-4 rounded-lg border-l-4",
                  isCorrect ? "bg-[#008001]/5 border-[#008001]" : "bg-amber-50 dark:bg-amber-950/20 border-amber-500"
                )}>
                  <p className="text-sm font-medium mb-1">
                    {isCorrect ? "✅ Chính xác!" : "💡 Giải thích:"}
                  </p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {!isSubmitted && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="bg-[#008001] hover:bg-[#006801] text-white px-8"
            size="lg"
          >
            Nộp bài
          </Button>
        </div>
      )}
    </div>
  );
};

// Main Lesson Detail Page
const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = parseInt(id || "1", 10);
  const lesson = getLessonData(lessonId);

  if (!lesson) {
    return (
      <Layout>
        <div className="flex items-center justify-center py-20">
          <Card className="max-w-md">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Không tìm thấy bài học này.</p>
              <Link to="/minna">
                <Button className="mt-4">Quay lại danh sách</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
        {/* Lesson Header */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link to="/minna">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Bài {lesson.id}</p>
                <h1 className="text-xl font-bold text-[#008001]">{lesson.title}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Tabs */}
        <main className="container mx-auto px-4 py-6">
          <Tabs defaultValue="vocabulary" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1">
              <TabsTrigger value="vocabulary" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Từ vựng</span>
              </TabsTrigger>
              <TabsTrigger value="grammar" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <PenTool className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Ngữ pháp</span>
              </TabsTrigger>
              <TabsTrigger value="kaiwa" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Hội thoại</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Luyện tập</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vocabulary">
              <VocabularyTab vocabulary={lesson.vocabulary} />
            </TabsContent>

            <TabsContent value="grammar">
              <GrammarTab grammar={lesson.grammar} />
            </TabsContent>

            <TabsContent value="kaiwa">
              <KaiwaTab kaiwa={lesson.kaiwa} kaiwaImage={lesson.kaiwaImage} />
            </TabsContent>

            <TabsContent value="quiz">
              <QuizTab quiz={lesson.quiz} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default LessonDetail;
