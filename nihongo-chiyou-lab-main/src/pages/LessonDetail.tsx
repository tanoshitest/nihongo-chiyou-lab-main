import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Volume2, BookOpen, MessageSquare, PenTool, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp, BookMarked, Search, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { FuriganaText } from "@/components/FuriganaText";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getLessonData, LessonDetail as LessonDetailType, KanjiDetail, VocabExampleFurigana, VocabularyExample, FuriganaWord, QuizQuestion, VocabularyItem, GrammarPoint } from "@/data/minnaData";
import { kanjiData as masterKanjiData } from "@/data/kanjiData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Helper to look up Kanji details from local lesson data or master dictionary
const getKanjiDetail = (char: string, localDetails?: KanjiDetail[]): KanjiDetail | undefined => {
  // 1. Try local lesson details first
  if (localDetails) {
    const local = localDetails.find(d => d.kanji === char);
    if (local) return local;
  }

  // 2. Fallback to master dictionary
  const master = masterKanjiData.find(k => k.kanji === char);
  if (master) {
    return {
      kanji: master.kanji,
      meaning: master.meaning,
      onyomi: master.onyomi,
      kunyomi: master.kunyomi,
      sinoVietnamese: master.sinoVietnamese,
      imageUrl: master.imageUrl,
      strokes: 0,
      jlpt: "N/A",
      radicals: "",
      examples: [], // No standalone vocabulary list in master data
      exampleSentences: master.examples.map(ex => ({
        jp: ex.japanese,
        vn: ex.vietnamese,
        romaji: ex.romaji
      }))
    };
  }

  return undefined;
};

// Component Hover Card - hiển thị chi tiết bộ thủ/thành phần
const ComponentHoverCard = ({ char, meaning, allKanjiDetails }: { char: string; meaning: string; allKanjiDetails: KanjiDetail[] }) => {
  // Use helper to find details
  const detail = getKanjiDetail(char, allKanjiDetails);

  // Visual badge for the component
  const componentBadge = (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-muted rounded-md text-sm border shadow-sm cursor-help hover:bg-muted/80 transition-colors group">
      <span className="font-bold text-[#008001] bg-white px-1.5 rounded border border-[#008001]/10 group-hover:bg-[#008001] group-hover:text-white transition-colors">{char}</span>
      <span className="text-xs">{meaning}</span>
    </div>
  );

  if (!detail) {
    // Basic tooltip if no details found
    return (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          {componentBadge}
        </HoverCardTrigger>
        <HoverCardContent className="w-auto bg-background border shadow-lg z-50 p-3">
          <p className="font-bold text-[#008001] text-lg text-center">{char}</p>
          <p className="text-sm text-foreground text-center">{meaning}</p>
        </HoverCardContent>
      </HoverCard>
    );
  }

  // Use KanjiHoverCard for rich details
  return (
    <KanjiHoverCard kanjiChar={char} detail={detail}>
      {componentBadge}
    </KanjiHoverCard>
  );
};

// Kanji Hover Component - hiển thị chi tiết từng kanji khi rê chuột
const KanjiHoverCard = ({ kanjiChar, detail, children }: { kanjiChar: string; detail: KanjiDetail; children?: React.ReactNode }) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        {children || (
          <span className="cursor-help hover:text-[#008001] hover:underline decoration-dotted transition-colors">
            {kanjiChar}
          </span>
        )}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-background border shadow-lg z-50" side="top">
        <div className="space-y-3">
          {/* Header với Kanji lớn */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#008001]/10 border-2 border-[#008001] flex items-center justify-center overflow-hidden">
              {detail.imageUrl ? (
                <img src={detail.imageUrl} alt={detail.kanji} className="w-full h-full object-contain p-1" />
              ) : (
                <span className="text-4xl font-bold text-[#008001]">{detail.kanji}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-lg">{detail.meaning}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">JLPT {detail.jlpt || 'N/A'}</Badge>
                {detail.strokes > 0 && <Badge variant="outline" className="text-xs">{detail.strokes} nét</Badge>}
                {detail.sinoVietnamese && <Badge variant="outline" className="text-xs text-[#008001] border-[#008001]/30">{detail.sinoVietnamese}</Badge>}
              </div>
            </div>
          </div>

          {/* Âm đọc */}
          <div className="space-y-1.5 text-sm">
            <div className="flex gap-2">
              <span className="font-medium text-[#008001] w-16">Âm On:</span>
              <span className="text-foreground">{detail.onyomi || '—'}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-[#008001] w-16">Âm Kun:</span>
              <span className="text-foreground">{detail.kunyomi || '—'}</span>
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

          {/* Câu ví dụ (chỉ hiện tối đa 2 câu trong HoverCard để tránh quá dài) */}
          {detail.exampleSentences && detail.exampleSentences.length > 0 && (
            <div className="border-t pt-2">
              <p className="text-xs font-medium text-[#008001] mb-1">Câu ví dụ:</p>
              <div className="space-y-2">
                {detail.exampleSentences.slice(0, 2).map((sent, i) => (
                  <div key={i} className="leading-tight">
                    <SentenceWithFurigana sentence={sent} showFurigana={true} />
                    <p className="text-muted-foreground italic text-[10px] mt-0.5">{sent.vn}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

// Component hiển thị câu với furigana và ý nghĩa Hán Việt bên dưới
const SentenceWithFurigana = ({
  sentence,
  showFurigana = true,
  kanjiDetails,
  highlightWord
}: {
  sentence: VocabularyExample;
  showFurigana?: boolean;
  kanjiDetails?: KanjiDetail[];
  highlightWord?: string;
}) => {
  const { jp, furigana } = sentence;

  if (!furigana || furigana.length === 0) {
    if (kanjiDetails && kanjiDetails.length > 0) {
      return (
        <span className="inline-flex items-center flex-wrap">
          {jp.split('').map((char, i) => {
            const detail = getKanjiDetail(char, kanjiDetails);
            if (detail) return <KanjiHoverCard key={i} kanjiChar={char} detail={detail} />;
            return <span key={i}>{char}</span>;
          })}
        </span>
      );
    }
    return <span>{jp}</span>;
  }

  let result: React.ReactNode[] = [];
  let remainingText = jp;
  let keyIndex = 0;

  // Sắp xếp furigana theo vị trí xuất hiện trong câu
  const sortedFurigana = [...furigana].sort((a, b) => {
    return jp.indexOf(a.kanji) - jp.indexOf(b.kanji);
  });

  const splitAndHighlight = (text: string) => {
    if (!highlightWord || !text.includes(highlightWord)) return <span>{text}</span>;
    const parts = text.split(highlightWord);
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && <span className="text-red-500 font-bold">{highlightWord}</span>}
          </span>
        ))}
      </span>
    );
  };

  sortedFurigana.forEach((item) => {
    const kanjiIndex = remainingText.indexOf(item.kanji);
    if (kanjiIndex !== -1) {
      // Thêm text phía trước
      if (kanjiIndex > 0) {
        result.push(<span key={`text-${keyIndex++}`}>{splitAndHighlight(remainingText.slice(0, kanjiIndex))}</span>);
      }

      const kanjiChars = item.kanji.split('');
      const isHighlight = highlightWord && (item.kanji === highlightWord || item.reading === highlightWord);
      const colorClass = isHighlight ? "text-red-500 font-bold" : "text-[#008001] font-medium";

      if (showFurigana) {
        result.push(
          <span key={`ruby-${keyIndex++}`} className="inline-flex flex-col items-center mx-0.5 align-middle">
            <span className={`text-[10px] leading-none mb-0.5 min-h-[10px] ${isHighlight ? "text-red-500 font-bold" : "text-muted-foreground"}`}>{item.reading}</span>
            <span className={`leading-none ${colorClass}`}>
              {kanjiChars.map((char, idx) => {
                const detail = getKanjiDetail(char, kanjiDetails);
                if (detail) return <KanjiHoverCard key={idx} kanjiChar={char} detail={detail} />;
                return <span key={idx}>{char}</span>;
              })}
            </span>
            <span className="text-[9px] text-primary/70 leading-none mt-0.5 min-h-[9px] uppercase">{item.meaning}</span>
          </span>
        );
      } else {
        result.push(
          <span key={`kanji-${keyIndex++}`} className={colorClass}>
            {kanjiChars.map((char, idx) => {
              const detail = getKanjiDetail(char, kanjiDetails);
              if (detail) return <KanjiHoverCard key={idx} kanjiChar={char} detail={detail} />;
              return <span key={idx}>{char}</span>;
            })}
          </span>
        );
      }
      remainingText = remainingText.slice(kanjiIndex + item.kanji.length);
    }
  });

  if (remainingText) {
    result.push(<span key={`text-${keyIndex++}`}>{splitAndHighlight(remainingText)}</span>);
  }

  return <span className="inline-flex items-center flex-wrap gap-y-1 py-1">{result}</span>;
};

// Component để render Kanji với hover - tách từng ký tự
const KanjiWithHover = ({ kanjiText, kanjiDetails }: { kanjiText: string; kanjiDetails?: KanjiDetail[] }) => {
  if (!kanjiText || kanjiText === '—') return <span>—</span>;
  return (
    <SentenceWithFurigana
      sentence={{ jp: kanjiText, vn: "" }}
      showFurigana={false}
      kanjiDetails={kanjiDetails}
    />
  );
};

// Helper component to render detailed translation breakdown
const DetailedExplanation = ({ jp, vn, vocabulary, grammar, type }: { jp: string; vn: string; vocabulary: VocabularyItem[]; grammar: GrammarPoint[]; type: 'jp-vn' | 'vn-jp' }) => {
  // Collect all Kanji details from lesson
  const allLessonKanjiDetails = useMemo(() => {
    return vocabulary.reduce((acc: KanjiDetail[], item) => {
      if (item.kanjiDetails) {
        item.kanjiDetails.forEach(detail => {
          if (!acc.some(d => d.kanji === detail.kanji)) acc.push(detail);
        });
      }
      return acc;
    }, []);
  }, [vocabulary]);

  // Find relevant vocabulary in the sentence
  const relevantVocab = useMemo(() => {
    return vocabulary.filter(v => jp.includes(v.kanji) || jp.includes(v.word));
  }, [jp, vocabulary]);

  // Find relevant grammar in the sentence
  const relevantGrammar = useMemo(() => {
    return grammar.filter(g => jp.includes(g.pattern.split(' ')[0])); // Simple check
  }, [jp, grammar]);

  // Extract Kanji from sentence
  const sentenceKanji = useMemo(() => {
    const kanjiChars = jp.match(/[\u4e00-\u9faf]/g) || [];
    return [...new Set(kanjiChars)].map(char => {
      return allLessonKanjiDetails.find(d => d.kanji === char);
    }).filter(Boolean) as KanjiDetail[];
  }, [jp, allLessonKanjiDetails]);

  return (
    <div className="space-y-6 mt-4 pt-4 border-t border-dashed animate-in fade-in slide-in-from-top-2 duration-300">
      {/* 0. Final Answer */}
      <div className="space-y-2">
        <p className="text-sm font-bold text-[#008001]">Đáp án:</p>
        <div className="bg-[#008001]/5 p-4 rounded-lg border border-[#008001]/20 space-y-2">
          {type === 'jp-vn' ? (
            <p className="text-lg font-medium text-foreground">
              {vn}
            </p>
          ) : (
            <div className="text-lg font-medium text-foreground font-japanese">
              <SentenceWithFurigana
                sentence={{
                  jp: jp,
                  vn: "",
                  furigana: relevantVocab.map(v => ({
                    kanji: v.kanji || v.word,
                    reading: v.word,
                    meaning: v.kanji ? v.kanji.split('').map(c => allLessonKanjiDetails.find(d => d.kanji === c)?.sinoVietnamese).filter(Boolean).join(' ') : ""
                  })) as VocabExampleFurigana[]
                }}
                showFurigana={true}
                kanjiDetails={allLessonKanjiDetails}
              />
            </div>
          )}
        </div>
      </div>

      {/* 1. Vocabulary & Kanji Breakdown */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-[#008001] text-white text-[10px]">1</span>
          Phân tích Từ vựng & Kanji
        </h4>
        <div className="space-y-4 ml-7">
          {relevantVocab.map((v, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-[#008001]">
                {String.fromCharCode(65 + i)}. {v.kanji || v.word} ({v.word})
              </p>
              <div className="text-xs space-y-1 text-muted-foreground bg-muted/30 p-2 rounded border border-dashed">
                <p><span className="font-semibold text-foreground">Hiragana:</span> {v.word}</p>
                {v.kanji && sentenceKanji.some(sk => v.kanji.includes(sk.kanji)) && (
                  <div>
                    <span className="font-semibold text-foreground">Hán tự:</span> {v.kanji} (Hán Việt: {
                      v.kanji.split('').map(c => allLessonKanjiDetails.find(d => d.kanji === c)?.sinoVietnamese).filter(Boolean).join(' ')
                    })
                  </div>
                )}
                <p><span className="font-semibold text-foreground">Nghĩa:</span> {v.mean}</p>
              </div>
            </div>
          ))}

          {sentenceKanji.length > 0 && (
            <div className="mt-2 text-[11px] overflow-hidden rounded-md border border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="p-2 font-semibold">Kanji</th>
                      <th className="p-2 font-semibold">Hán Việt</th>
                      <th className="p-2 font-semibold">Nghĩa</th>
                      <th className="p-2 font-semibold">Âm On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {sentenceKanji.map((k, i) => (
                      <tr key={i} className="bg-background">
                        <td className="p-2 font-bold text-[#008001] text-sm">{k.kanji}</td>
                        <td className="p-2 uppercase font-medium">{k.sinoVietnamese}</td>
                        <td className="p-2">{k.meaning}</td>
                        <td className="p-2">{k.onyomi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Grammar Analysis */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-[#008001] text-white text-[10px]">2</span>
          Phân tích Ngữ pháp
        </h4>
        <div className="ml-7 space-y-3">
          <div className="text-xs space-y-2 text-muted-foreground p-3 border-l-2 border-l-[#008001] bg-[#008001]/5 rounded-r-md">
            {jp.includes("は") && (
              <div>
                <p className="font-bold text-[#008001] mb-1">Trợ từ は (Wa)</p>
                <p>Đứng sau danh từ để đánh dấu chủ đề của câu. Viết là "HA" nhưng đọc là "WA".</p>
              </div>
            )}
            {jp.includes("です") && (
              <div>
                <p className="font-bold text-[#008001] mb-1">Đuôi câu です (Desu)</p>
                <p>Dùng để khẳng định và thể hiện sự lịch sự. Tương đương with "là" trong tiếng Việt.</p>
              </div>
            )}
            {relevantGrammar.length > 0 && relevantGrammar.map((g, i) => (
              <div key={i}>
                <p className="font-bold text-[#008001] mb-1">{g.pattern}</p>
                <p>{g.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Pronunciation Tips */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-[#008001] text-white text-[10px]">3</span>
          Lưu ý Phát âm (Biến âm)
        </h4>
        <ul className="ml-10 list-disc text-xs text-muted-foreground space-y-1">
          {jp.includes("です") && (
            <li><span className="font-semibold text-foreground">Desu:</span> Chữ "u" cuối cùng thường được đọc rất nhẹ hoặc ngắt (đọc là "đết-s").</li>
          )}
          {jp.includes("く") && (
            <li><span className="font-semibold text-foreground">Âm ngắt:</span> Chữ "ku" ở giữa một số từ (như "gakusei") thường được đọc lướt nhanh.</li>
          )}
          <li>Phát âm giọng mũi nhẹ đối với các âm có hàng "na, ni, nu, ne, no".</li>
        </ul>
      </div>
    </div>
  );
};

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

  // Collect all unique Kanji from vocabulary kanjiDetails once for the whole tab
  const allLessonKanjiDetails = vocabulary.reduce((acc: KanjiDetail[], item) => {
    if (item.kanjiDetails) {
      item.kanjiDetails.forEach(detail => {
        if (!acc.some(d => d.kanji === detail.kanji)) {
          acc.push(detail);
        }
      });
    }
    return acc;
  }, []);

  // Function to render vocabulary example with furigana and kanji hover
  const renderVocabWithFurigana = (text: string, furiganaList?: VocabExampleFurigana[], kanjiDetailsList?: KanjiDetail[]) => {
    const mergedDetails = kanjiDetailsList
      ? [...kanjiDetailsList, ...allLessonKanjiDetails.filter(d => !kanjiDetailsList.some(kd => kd.kanji === d.kanji))]
      : allLessonKanjiDetails;

    return (
      <SentenceWithFurigana
        sentence={{ jp: text, vn: "", furigana: furiganaList }}
        showFurigana={showVocabFurigana}
        kanjiDetails={mergedDetails}
      />
    );
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
                <TableHead className="w-[100px] text-center">Hình ảnh</TableHead>
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
                      <TableCell className="text-center p-2">
                        {item.image ? (
                          <div className="w-28 h-28 mx-auto rounded-lg bg-[#008001]/10 border border-[#008001]/30 overflow-hidden flex items-center justify-center">
                            <img src={item.image} alt={item.word} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-28 h-28 mx-auto rounded-lg bg-muted/50 border border-dashed border-muted-foreground/30 flex items-center justify-center">
                            <span className="text-[10px] text-muted-foreground">No Img</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium text-[#008001]">{item.word}</TableCell>
                      <TableCell className="text-foreground">
                        <KanjiWithHover
                          kanjiText={item.kanji}
                          kanjiDetails={item.kanjiDetails
                            ? [...item.kanjiDetails, ...allLessonKanjiDetails.filter(d => !item.kanjiDetails?.some(kd => kd.kanji === d.kanji))]
                            : allLessonKanjiDetails}
                        />
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
                          <TableCell colSpan={8} className="p-4">
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
                  {item.image && (
                    <div className="flex-shrink-0 w-28 h-28 rounded-lg bg-[#008001]/10 border border-[#008001]/30 overflow-hidden">
                      <img src={item.image} alt={item.word} className="w-full h-full object-cover" />
                    </div>
                  )}
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
                        <KanjiWithHover
                          kanjiText={item.kanji}
                          kanjiDetails={item.kanjiDetails
                            ? [...item.kanjiDetails, ...allLessonKanjiDetails.filter(d => !item.kanjiDetails?.some(kd => kd.kanji === d.kanji))]
                            : allLessonKanjiDetails}
                        />
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
const GrammarTab = ({ grammar, vocabulary }: { grammar: LessonDetailType['grammar'], vocabulary: LessonDetailType['vocabulary'] }) => {
  const [showFurigana, setShowFurigana] = useState(true);

  // Collect all unique Kanji from vocabulary kanjiDetails for the whole tab
  const allLessonKanjiDetails = vocabulary.reduce((acc: KanjiDetail[], item) => {
    if (item.kanjiDetails) {
      item.kanjiDetails.forEach(detail => {
        if (!acc.some(d => d.kanji === detail.kanji)) {
          acc.push(detail);
        }
      });
    }
    return acc;
  }, []);

  // Function to render text with furigana and hover support
  const renderWithFurigana = (text: string, furiganaList?: FuriganaWord[]) => {
    return (
      <SentenceWithFurigana
        sentence={{ jp: text, vn: "", furigana: furiganaList as VocabExampleFurigana[] }}
        showFurigana={showFurigana}
        kanjiDetails={allLessonKanjiDetails}
      />
    );
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
                    <GrammarExampleItem
                      key={exIndex}
                      ex={ex}
                      exIndex={exIndex}
                      vocabulary={vocabulary}
                      grammar={grammar}
                      renderWithFurigana={renderWithFurigana}
                    />
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

// Sub-component for individual Grammar Example with collapsible explanation
const GrammarExampleItem = ({
  ex,
  exIndex,
  vocabulary,
  grammar,
  renderWithFurigana
}: {
  ex: any;
  exIndex: number;
  vocabulary: VocabularyItem[];
  grammar: GrammarPoint[];
  renderWithFurigana: (text: string, furiganaList?: FuriganaWord[]) => React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-muted/30 rounded-lg overflow-hidden border-l-2 border-[#008001]">
      <div className="p-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex-1">
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="flex-shrink-0 ml-7 md:ml-0 h-8 text-[#008001] hover:text-[#006801] hover:bg-[#008001]/10 gap-1 self-start md:self-center"
          >
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span className="text-xs font-semibold uppercase tracking-wider">Giải thích</span>
          </Button>
        </div>

        {isOpen && (
          <div className="pl-7">
            <DetailedExplanation
              jp={ex.jp}
              vn={ex.vn}
              vocabulary={vocabulary}
              grammar={grammar}
              type="jp-vn"
            />
          </div>
        )}
      </div>
    </div>
  );
};



// Kanji Tab Component
const KanjiTab = ({ vocabulary, lessonId }: { vocabulary: LessonDetailType['vocabulary']; lessonId: number }) => {
  // 3. Logic mới: Chỉ lấy Kanji CÓ TRONG vocabulary của bài này
  // Duyệt qua từng từ vựng theo thứ tự, trích xuất Kanji, và lookup detail
  const allKanjiDetails: KanjiDetail[] = [];
  const addedKanji = new Set<string>();

  vocabulary.forEach(vocab => {
    if (!vocab.kanji) return;

    // Trích xuất từng ký tự Kanji từ chuỗi kanji (ví dụ "食" từ "食べます")
    // Sử dụng Regex để bắt các ký tự trong dải Kanji
    const chars = vocab.kanji.match(/[\u4e00-\u9faf]/g) || [];

    chars.forEach(char => {
      if (!addedKanji.has(char)) {
        // 1. Tìm trong detail của chính từ vựng đó trước (nếu có, thường ít khi đầy đủ ở đây nếu không phải cấu trúc data mới)
        let detail = vocab.kanjiDetails?.find(k => k.kanji === char);

        // 2. Nếu không có, tìm trong master dictionary
        if (!detail) {
          const master = masterKanjiData.find(k => k.kanji === char);
          if (master) {
            detail = {
              kanji: master.kanji,
              meaning: master.meaning,
              onyomi: master.onyomi,
              kunyomi: master.kunyomi,
              sinoVietnamese: master.sinoVietnamese,
              imageUrl: master.imageUrl,
              strokes: 0,
              jlpt: master.jlpt || "N5",
              radicals: master.radicals,
              components: master.components,
              mnemonic: master.mnemonic,
              examples: master.examples.map(ex => ex.japanese),
              exampleSentences: master.examples.map(ex => ({
                jp: ex.japanese,
                vn: ex.vietnamese,
                romaji: ex.romaji,
                furigana: ex.furigana
              }))
            };
          }
        }

        if (detail) {
          allKanjiDetails.push(detail);
          addedKanji.add(char);
        }
      }
    });
  });

  // Filter with Search query
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKanji = useMemo(() => {
    if (!searchQuery) return allKanjiDetails;
    const query = searchQuery.toLowerCase();

    return allKanjiDetails.filter(kanji => {
      const matchKanji = kanji.kanji.toLowerCase().includes(query);
      const matchMeaning = kanji.meaning.toLowerCase().includes(query);
      const matchSino = kanji.sinoVietnamese?.toLowerCase().includes(query);
      const matchOnyomi = kanji.onyomi?.toLowerCase().includes(query);
      const matchKunyomi = kanji.kunyomi?.toLowerCase().includes(query);

      return matchKanji || matchMeaning || matchSino || matchOnyomi || matchKunyomi;
    });
  }, [allKanjiDetails, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="flex items-center gap-2 max-w-md mx-auto mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm Kanji, nghĩa, Hán Việt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 border-[#008001]/20 focus-visible:ring-[#008001]"
          />
        </div>
      </div>

      {filteredKanji.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-muted-foreground">
              {searchQuery ? "Không tìm thấy Kanji nào phù hợp." : "Không có dữ liệu Kanji cho bài học này."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredKanji.map((kanji, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow border-[#008001]/20 h-full flex flex-col">
              <div className="bg-[#008001]/5 p-4 border-b flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008001] text-white flex items-center justify-center font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <div className="text-4xl font-bold text-[#008001] bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center border border-[#008001]/10">
                    {kanji.kanji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#008001] uppercase">
                      {kanji.sinoVietnamese || kanji.meaning}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      Hiragana: {kanji.kunyomi || '—'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="outline" className="text-[#008001] border-[#008001]/30">
                    {kanji.jlpt || 'N5'}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-5 space-y-4 flex-1 flex flex-col">
                {/* Image Placeholder or Actual Image */}
                <div className="w-full aspect-video rounded-lg border-2 border-dashed border-[#008001]/20 bg-[#008001]/5 flex items-center justify-center overflow-hidden">
                  {kanji.imageUrl ? (
                    <img
                      src={kanji.imageUrl}
                      alt={`Minh họa cho ${kanji.kanji}`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-[#008001]/40">
                      <div className="w-10 h-10 rounded-full bg-[#008001]/10 flex items-center justify-center">
                        <span className="text-xl">🖼️</span>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider">Hình minh họa</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm min-h-[5rem]">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Âm ON</p>
                    <p className="font-medium">{kanji.onyomi || '—'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Âm KUN</p>
                    <p className="font-medium">{kanji.kunyomi || '—'}</p>
                  </div>
                </div>

                <div className="space-y-2 min-h-[5rem]">
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Nghĩa gốc</p>
                  <p className="text-sm border-l-2 border-[#008001]/30 pl-3 py-1 bg-[#008001]/5 rounded-r-md">
                    {kanji.meaning}
                  </p>
                </div>

                <div className="space-y-2 min-h-[6.5rem]">
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Cấu tạo (Bộ thủ)</p>
                  {kanji.components && kanji.components.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {kanji.components.map((comp, i) => (
                        <ComponentHoverCard
                          key={i}
                          char={comp.char}
                          meaning={comp.meaning}
                          allKanjiDetails={allKanjiDetails}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic pl-3">—</p>
                  )}
                </div>

                <div className="space-y-2 flex-grow min-h-[7rem]">
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Gợi nhớ (Mnemonic)</p>
                  {kanji.mnemonic ? (
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-sm border border-amber-200 dark:border-amber-900 leading-relaxed text-amber-900 dark:text-amber-200">
                      <span className="mr-2">💡</span>
                      {kanji.mnemonic}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic pl-3">—</p>
                  )}
                </div>

                {kanji.examples && kanji.examples.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Từ vựng đi kèm</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {kanji.examples.map((ex, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#008001]/10 text-[#008001] rounded-md border border-[#008001]/20">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Câu ví dụ */}
                {kanji.exampleSentences && kanji.exampleSentences.length > 0 && (
                  <div className="space-y-3 pt-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">5 câu ví dụ</p>
                    <div className="space-y-2.5">
                      {kanji.exampleSentences.map((sent, i) => (
                        <div key={i} className="text-sm p-2.5 bg-muted/40 rounded-lg border-l-4 border-[#008001]/40">
                          <SentenceWithFurigana sentence={sent} showFurigana={true} />
                          <p className="text-xs text-muted-foreground mt-1">{sent.vn}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};


// Flashcard Tab Component
const FlashcardTab = ({ vocabulary }: { vocabulary: VocabularyItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset khi chuyển bài
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [vocabulary]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  const handlePlaySound = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Playing sound for: ${word}`);
    // Implement text-to-speech here eventually
  };

  const currentItem = vocabulary[currentIndex];

  // Collect kanji details for SentenceWithFurigana
  const allLessonKanjiDetails = useMemo(() => {
    return vocabulary.reduce((acc: KanjiDetail[], item) => {
      if (item.kanjiDetails) {
        item.kanjiDetails.forEach(detail => {
          if (!acc.some(d => d.kanji === detail.kanji)) acc.push(detail);
        });
      }
      return acc;
    }, []);
  }, [vocabulary]);

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe Left -> Next
      handleNext();
    } else if (isRightSwipe) {
      // Swipe Right -> Prev
      handlePrev();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Display */}
      <div className="flex items-center justify-center mb-4">
        <span className="font-medium text-lg text-muted-foreground">
          {currentIndex + 1} / {vocabulary.length}
        </span>
      </div>

      <div
        className="relative flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Desktop Navigation - Left */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 md:-left-16 z-10 hidden md:flex h-12 w-12 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm"
          onClick={handlePrev}
          disabled={vocabulary.length <= 1}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Card Container */}
        <div className="relative h-96 w-full cursor-pointer perspective-1000 group max-w-md mx-auto" onClick={() => setIsFlipped(!isFlipped)}>
          <div className={cn(
            "w-full h-full relative transition-all duration-500 transform-style-3d shadow-xl rounded-2xl",
            isFlipped ? "rotate-y-180" : ""
          )}>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden bg-white border-2 border-[#008001] rounded-2xl flex flex-col items-center justify-center p-6 bg-[url('/pattern-bg.png')] bg-opacity-5">
              <div className="absolute top-4 right-4 animate-bounce">
                <RotateCcw className="w-6 h-6 text-[#008001] opacity-50" />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                {currentItem.image && (
                  <div className="w-32 h-32 mb-4 rounded-lg bg-muted/20 overflow-hidden flex items-center justify-center">
                    <img src={currentItem.image} alt={currentItem.word} className="w-full h-full object-contain" />
                  </div>
                )}

                <div className="text-center space-y-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#008001]">{currentItem.word}</h2>
                  {currentItem.kanji && currentItem.kanji !== '—' && (
                    <p className="text-2xl text-muted-foreground font-medium">{currentItem.kanji}</p>
                  )}
                </div>
              </div>


              <p className="absolute bottom-4 text-xs text-muted-foreground">Chạm để lật</p>
            </div>

            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-[#008001] rounded-2xl p-6 flex flex-col overflow-y-auto bg-[url('/pattern-bg.png')] bg-opacity-5">
              <div className="text-center border-b border-[#008001]/20 pb-4 mb-4">
                <h3 className="text-2xl font-bold mb-1 text-[#008001]">{currentItem.mean}</h3>
                <p className="text-muted-foreground italic">{currentItem.romaji}</p>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto pr-1 custom-scrollbar">
                {currentItem.examples && currentItem.examples.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#008001] opacity-80 border-b border-[#008001]/20 pb-1 inline-block">Ví dụ mẫu</p>
                    {currentItem.examples.slice(0, 1).map((ex, i) => (
                      <div key={i} className="bg-[#008001]/5 rounded-lg p-3 space-y-2 border border-[#008001]/10">
                        <div className="text-lg font-japanese text-foreground px-2 py-1 rounded">
                          <SentenceWithFurigana
                            sentence={{ ...ex, furigana: ex.furigana }}
                            showFurigana={true}
                            kanjiDetails={allLessonKanjiDetails}
                            highlightWord={currentItem.kanji || currentItem.word}
                          />
                        </div>
                        <p className="text-sm text-foreground/80 pl-1 border-l-2 border-[#008001]/30">{ex.vn}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full opacity-60 text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mb-2" />
                    <p>Chưa có ví dụ cho từ này.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Right */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm"
          onClick={handleNext}
          disabled={vocabulary.length <= 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <style>{`
            .perspective-1000 { perspective: 1000px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-y-180 { transform: rotateY(180deg); }
        `}</style>
      </div>
    </div>
  );
};

// Quiz Tab Component
// Reusable Quiz Engine Component
const QuizEngine = ({ questions }: { questions: QuizQuestion[] }) => {
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

  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const atLeastOneAnswered = Object.keys(userAnswers).length > 0;

  return (
    <div className="relative flex flex-col lg:flex-row gap-6 items-start">
      {/* Result Card Sidebar - Render first for mobile stack order, but move to right on desktop? 
          Or keep on left? Left is fine. */}

      {isSubmitted && (
        <div className="w-full lg:w-1/4 lg:sticky lg:top-24 z-20 shrink-0">
          <Card className="border-[#008001] shadow-lg">
            <CardContent className="py-6">
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-muted-foreground">Kết quả của bạn</p>
                <p className={cn(
                  "text-4xl font-bold",
                  correctCount === questions.length ? "text-[#008001]" :
                    correctCount >= questions.length / 2 ? "text-yellow-600" : "text-destructive"
                )}>
                  {correctCount}/{questions.length}
                </p>
                <p className="text-sm text-muted-foreground">
                  {correctCount === questions.length ? "🎉 Xuất sắc! Bạn đã làm đúng tất cả!" :
                    correctCount >= questions.length / 2 ? "👍 Khá tốt! Hãy xem lại các câu sai nhé." :
                      "💪 Cố gắng lên! Hãy ôn lại bài học và thử lại."}
                </p>
                <Button onClick={handleReset} variant="outline" className="mt-4 w-full">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Làm lại
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Questions List */}
      <div className="flex-1 space-y-6 w-full min-w-0">
        {questions.map((question, qIndex) => {
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
                  <span className="text-foreground"><FuriganaText text={question.question} /></span>
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
                    "p-4 rounded-lg border-l-4 space-y-3",
                    isCorrect ? "bg-[#008001]/5 border-[#008001]" : "bg-amber-50 dark:bg-amber-950/20 border-amber-500"
                  )}>
                    <p className="text-sm font-bold flex items-center gap-2">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#008001]" />
                          <span className="text-[#008001]">Chính xác!</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4 text-amber-600" />
                          <span className="text-amber-700 dark:text-amber-400">Giải thích chi tiết:</span>
                        </>
                      )}
                    </p>

                    <FuriganaText text={question.explanation} className="text-sm text-muted-foreground font-medium" />

                    {/* Rich Metadata Explanation */}
                    {question.metadata && (
                      <div className="mt-3 pt-3 border-t border-dashed border-muted-foreground/20 space-y-4">
                        {/* Vocab Details */}
                        {question.metadata.vocab && (
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded bg-[#008001]/10 flex items-center justify-center text-xl font-bold text-[#008001]">
                                {question.metadata.vocab.word[0]}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-foreground">{question.metadata.vocab.word} ({question.metadata.vocab.kanji || '—'})</p>
                                <p className="text-xs text-muted-foreground">{question.metadata.vocab.romaji} • {question.metadata.vocab.mean}</p>
                              </div>
                            </div>

                            {question.metadata.vocab.kanjiDetails && question.metadata.vocab.kanjiDetails.length > 0 && (
                              <div className="grid grid-cols-1 gap-2">
                                {question.metadata.vocab.kanjiDetails.map((k, ki) => (
                                  <div key={ki} className="text-xs bg-background/50 p-2 rounded border border-dashed flex justify-between items-center">
                                    <div>
                                      <span className="font-bold text-[#008001] mr-2">{k.kanji}</span>
                                      <span className="text-muted-foreground uppercase font-medium">[{k.sinoVietnamese}]</span>
                                    </div>
                                    <span className="text-muted-foreground">{k.meaning}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Kanji Details */}
                        {question.metadata.kanji && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg bg-[#008001] flex items-center justify-center text-2xl font-bold text-white">
                                {question.metadata.kanji.kanji}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-foreground uppercase">Hán Việt: {question.metadata.kanji.sinoVietnamese}</p>
                                <p className="text-xs text-muted-foreground">Nghĩa: {question.metadata.kanji.meaning}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="bg-background/50 p-2 rounded border">
                                <p className="font-semibold text-[#008001]">On: {question.metadata.kanji.onyomi}</p>
                              </div>
                              <div className="bg-background/50 p-2 rounded border">
                                <p className="font-semibold text-[#008001]">Kun: {question.metadata.kanji.kunyomi}</p>
                              </div>
                            </div>

                            {question.metadata.kanji.examples && question.metadata.kanji.examples.length > 0 && (
                              <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Từ vựng ví dụ:</p>
                                <div className="flex flex-wrap gap-1">
                                  {question.metadata.kanji.examples.map((ex, exi) => (
                                    <Badge key={exi} variant="outline" className="text-[10px] font-normal py-0">
                                      {ex}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
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
              disabled={!atLeastOneAnswered}
              className="bg-[#008001] hover:bg-[#006801] text-white px-8"
              size="lg"
            >
              Nộp bài
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};


// Translation Practice Component
const TranslationQuiz = ({ vocabulary = [], grammar = [] }: { vocabulary?: VocabularyItem[]; grammar?: GrammarPoint[] }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const allExamples = useMemo(() => {
    const vocabEx = vocabulary.flatMap(v => (v.examples || []).map(ex => ({ jp: ex.jp, vn: ex.vn, source: v.word })));
    const grammarEx = grammar.flatMap(g => (g.examples || []).map(ex => ({ jp: ex.jp, vn: ex.vn, source: g.pattern })));
    return [...vocabEx, ...grammarEx];
  }, [vocabulary, grammar]);

  const translationTasks = useMemo(() => {
    if (allExamples.length === 0) return { jpVn: [], vnJp: [] };
    const shuffled = [...allExamples].sort(() => Math.random() - 0.5);

    const jpVn = shuffled.slice(0, 10).map((ex, i) => ({
      id: 4000 + i,
      from: ex.jp,
      to: ex.vn,
      explanation: `Nguồn: ${ex.source}`,
      type: 'jp-vn' as const
    }));

    const vnJp = shuffled.slice(10, 20).map((ex, i) => ({
      id: 4100 + i,
      from: ex.vn,
      to: ex.jp,
      explanation: `Nguồn: ${ex.source}`,
      type: 'vn-jp' as const
    }));

    return { jpVn, vnJp };
  }, [allExamples]);

  const toggleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderTaskList = (tasks: any[]) => (
    <div className="space-y-4 py-4">
      {tasks.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground border rounded-lg border-dashed">
          Chưa có dữ liệu cho bài học này.
        </div>
      ) : (
        tasks.map((task, index) => (
          <Card key={task.id} className="overflow-hidden border-l-4 border-l-[#008001] shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold bg-[#008001]/10 text-[#008001] border-none">
                      {task.type === 'jp-vn' ? 'Nhật → Việt' : 'Việt → Nhật'}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">Câu {index + 1}</span>
                  </div>
                  <p className={cn(
                    "text-lg font-medium leading-relaxed",
                    task.type === 'jp-vn' ? "text-[#008001] font-japanese" : "text-foreground"
                  )}>
                    {task.from}
                  </p>
                </div>
                <Button
                  variant={revealed[task.id] ? "outline" : "default"}
                  size="sm"
                  onClick={() => toggleReveal(task.id)}
                  className={cn(
                    "flex-shrink-0 min-w-[100px]",
                    !revealed[task.id] && "bg-[#008001] hover:bg-[#006801] text-white"
                  )}
                >
                  {revealed[task.id] ? "Ẩn đáp án" : "Hiện đáp án"}
                </Button>
              </div>

              {revealed[task.id] && (
                <DetailedExplanation
                  jp={task.type === 'jp-vn' ? task.from : task.to}
                  vn={task.type === 'jp-vn' ? task.to : task.from}
                  type={task.type}
                  vocabulary={vocabulary}
                  grammar={grammar}
                />
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200 dark:border-amber-900 flex items-start gap-3">
        <span className="text-2xl mt-0.5">✍️</span>
        <div className="space-y-1">
          <p className="font-bold text-amber-900 dark:text-amber-200">Hướng dẫn luyện dịch</p>
          <p className="text-sm text-amber-800/80 dark:text-amber-300/80">
            Hãy tự dịch các câu dưới đây ra giấy hoặc nhẩm trong đầu, sau đó bấm "Hiện đáp án" để kiểm tra.
          </p>
        </div>
      </div>

      <Tabs defaultValue="jp-vn" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="jp-vn" className="data-[state=active]:bg-[#008001] data-[state=active]:text-white">
            Nhật → Việt
          </TabsTrigger>
          <TabsTrigger value="vn-jp" className="data-[state=active]:bg-[#008001] data-[state=active]:text-white">
            Việt → Nhật
          </TabsTrigger>
        </TabsList>
        <TabsContent value="jp-vn" className="mt-0">
          {renderTaskList(translationTasks.jpVn)}
        </TabsContent>
        <TabsContent value="vn-jp" className="mt-0">
          {renderTaskList(translationTasks.vnJp)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helpers for question generation
// Helpers for question generation
const applyFurigana = (text: string, furiganaList?: { kanji: string; reading: string }[]) => {
  if (!furiganaList || furiganaList.length === 0) return text;
  let result = text;
  const sorted = [...furiganaList].sort((a, b) => b.kanji.length - a.kanji.length);
  sorted.forEach(f => {
    if (!f.kanji || !f.reading) return;
    const escaped = f.kanji.replace(/[.*+?^${ }()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escaped, 'g'), `{${f.kanji}|${f.reading}}`);
  });
  return result;
};

const createSeededRNG = (seed: number) => {
  let s = seed;
  return () => {
    // Simple LCG (Linear Congruential Generator)
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const shuffleArray = <T,>(array: T[], rng?: () => number): T[] => {
  const random = rng || Math.random;
  return [...array].sort(() => random() - 0.5);
};

// Quiz Tab Component
const QuizTab = ({ vocabulary = [], grammar = [], quiz = [], lessonId }: { vocabulary?: VocabularyItem[]; grammar?: GrammarPoint[]; quiz?: QuizQuestion[]; lessonId: number }) => {
  const [quizType, setQuizType] = useState("vocab");

  const generateVocabQuestions = (): QuizQuestion[] => {
    // Re-initialize RNG for this specific generation to ensure independence between tabs
    const rng = createSeededRNG(lessonId * 100 + 1);

    let questions: QuizQuestion[] = [];
    const targetCount = 100;

    // Safely get pools
    const vocabList = vocabulary || [];
    if (vocabList.length === 0) return [];

    const vocabPool = vocabList.map(v => v.word || '');

    // Loop until we reach target count
    let attempts = 0;
    while (questions.length < targetCount && attempts < 1000) {
      attempts++;
      const item = vocabList[Math.floor(rng() * vocabList.length)];

      // Safety check for item
      if (!item || !item.word) continue;

      const type = Math.floor(rng() * 2); // Only 2 strategies now (Context, Reading)

      // Strategy 1: Context (Fill in the blank)
      if (type === 0 && item.examples && item.examples.length > 0) {
        const validExample = item.examples.find(ex => ex && ex.jp && (ex.jp.includes(item.word) || (item.kanji && ex.jp.includes(item.kanji))));

        if (validExample && validExample.jp) {
          const targetText = (item.kanji && validExample.jp.includes(item.kanji)) ? item.kanji : item.word;

          // Generate a unique ID for this specific question instance
          const qId = 1000 + questions.length;

          // Distractors
          const poolFiltered = vocabPool.filter(p => p !== item.word);
          const choices = shuffleArray(poolFiltered, rng).slice(0, 3);

          const plainQuestion = validExample.jp.replace(targetText, '（　　）');
          const formattedQuestion = applyFurigana(plainQuestion, validExample.furigana);
          const formattedFullSentence = applyFurigana(validExample.jp, validExample.furigana);

          questions.push({
            id: qId,
            question: formattedQuestion,
            correctAnswer: item.word,
            options: shuffleArray([item.word, ...choices], rng),
            explanation: `Đáp án đúng là "${item.word}" (${item.mean || ''}).\nCâu hoàn chỉnh: ${formattedFullSentence}\n(${validExample.vn || ''})`,
            metadata: { vocab: item }
          });
          continue;
        }
      }

      // Strategy 2: Reading (Kanji -> Hiragana)
      if (type === 1 || questions.length < targetCount) { // Fallback to this if Strategy 1 fails
        if (item.kanji && item.kanji !== '—') {
          const qId = 2000 + questions.length;
          const poolFiltered = vocabPool.filter(p => p !== item.word);

          questions.push({
            id: qId,
            question: `「${item.kanji}」の読み方は何ですか。`,
            correctAnswer: item.word,
            options: shuffleArray([item.word, ...shuffleArray(poolFiltered, rng).slice(0, 3)], rng),
            explanation: `"${item.kanji}" đoc là "${item.word}" (${item.romaji || ''}).`,
            metadata: { vocab: item }
          });
          continue;
        }
      }
    }

    return questions.slice(0, targetCount);
  };

  const generateKanjiQuestions = (): QuizQuestion[] => {
    const rng = createSeededRNG(lessonId * 100 + 2);

    let questions: QuizQuestion[] = [];
    const targetCount = 100;

    // Safely get details
    const allKanjiDetails = (vocabulary || []).flatMap(v => v.kanjiDetails || []);
    if (allKanjiDetails.length === 0) return [];

    // Pools
    const readingPool = allKanjiDetails
      .flatMap(k => [(k.onyomi || '').split(' ')[0], (k.kunyomi || '').split(' ')[0]])
      .filter(r => r && r !== '—');

    let attempts = 0;
    while (questions.length < targetCount && attempts < 1000) {
      attempts++;
      const kanji = allKanjiDetails[Math.floor(rng() * allKanjiDetails.length)];
      if (!kanji || !kanji.kanji) continue;

      const kunyomiClean = (kanji.kunyomi || '').replace('.', '');
      const type = Math.floor(rng() * 2);

      // Strategy 1: Reading in Context
      if (type === 0) {
        // Find example words/sentences
        const relatedVocab = (vocabulary || []).find(v =>
          (v.word && v.word.includes(kunyomiClean)) ||
          (v.kanji && v.kanji.includes(kanji.kanji))
        );

        if (relatedVocab && relatedVocab.examples && relatedVocab.examples.length > 0) {
          const ex = relatedVocab.examples.find(e => e && e.jp && e.jp.includes(kanji.kanji));
          if (ex && ex.jp) {
            const targetWord = relatedVocab.word || '';
            const targetKanji = relatedVocab.kanji || kanji.kanji;

            if (targetWord && ex.jp.includes(targetKanji)) {
              // Generate unique ID
              const qId = 3000 + questions.length;

              // Distractors
              const weakDistractors = ['こう', 'そう', 'あう', 'みる'];
              if (targetWord.length > 1) {
                weakDistractors.push(targetWord.split('').reverse().join(''));
              }

              questions.push({
                id: qId,
                question: `${ex.jp.replace(targetKanji, `__${targetKanji}__`)}`,
                correctAnswer: targetWord,
                options: shuffleArray([targetWord, ...shuffleArray(weakDistractors, rng).slice(0, 3)], rng),
                explanation: `"${targetKanji}" trong câu này đọc là "${targetWord}".`,
                metadata: { kanji: kanji }
              });
              continue;
            }
          }
        }
      }

      // Strategy 2: Isolated Kanji Reading (Fallback)
      if (type === 1 || questions.length < targetCount) {
        const isOnyomi = rng() > 0.5;
        const targetReading = isOnyomi ? kanji.onyomi : kanji.kunyomi;

        if (targetReading && targetReading !== '—') {
          const cleanReading = targetReading.split(' (')[0].replace(/\./g, '');
          const distractors = readingPool.filter(r => r !== cleanReading);

          const qId = 3500 + questions.length;

          questions.push({
            id: qId,
            question: `「${kanji.kanji}」の${isOnyomi ? '音読み' : '訓読み'}は何ですか。`,
            correctAnswer: cleanReading,
            options: shuffleArray([cleanReading, ...shuffleArray(distractors, rng).slice(0, 3)], rng),
            explanation: `"${kanji.kanji}" có ${isOnyomi ? 'âm On' : 'âm Kun'} là "${cleanReading}".`,
            metadata: { kanji: kanji }
          });
          continue;
        }
      }
    }

    return questions.slice(0, targetCount);
  };

  const generateGrammarQuestions = (): QuizQuestion[] => {
    const rng = createSeededRNG(lessonId * 100 + 3);

    let questions: QuizQuestion[] = [];
    const targetCount = 100;

    // Safely get list
    const grammarList = grammar || [];
    if (grammarList.length === 0) return [];

    const particles = ['は', 'が', 'を', 'に', 'へ', 'で', 'と', 'も', 'から', 'まで', 'より', 'の', 'や', 'か', 'ね', 'よ'];
    const endings = ['ます', 'ません', 'ました', 'ませんでした', 'です', 'でした', 'ではありません', 'ましょう', 'ませんか'];

    // Helper to get distractors
    const getDistractors = (correct: string, pool: string[]) => {
      const filtered = pool.filter(p => p !== correct && p !== '');
      return shuffleArray(filtered, rng).slice(0, 3);
    };

    let attempts = 0;
    while (questions.length < targetCount && attempts < 1000) {
      attempts++;
      const point = grammarList[Math.floor(rng() * grammarList.length)];
      if (!point || !point.pattern) continue;

      // Extract targets
      const targets = point.pattern
        .replace(/[A-Z0-9~～\-]/g, ' ')
        .split(' ')
        .filter(s => /[ぁ-んァ-ン]/.test(s))
        .map(s => s.trim())
        .filter(s => s.length > 0);

      const examples = point.examples || [];
      if (examples.length === 0) continue;

      const ex = examples[Math.floor(rng() * examples.length)];
      if (!ex || !ex.jp) continue;

      const target = targets[Math.floor(rng() * targets.length)];
      if (!target) continue;

      if (ex.jp.includes(target)) {
        let distractors: string[] = [];
        if (particles.includes(target)) {
          distractors = getDistractors(target, particles);
        } else if (endings.some(e => target.endsWith(e) || e.endsWith(target))) {
          distractors = getDistractors(target, endings);
        } else {
          const otherPatterns = grammarList
            .flatMap(g => (g.pattern || '').replace(/[A-Z0-9~～\-]/g, ' ').split(' '))
            .filter(s => /[ぁ-んァ-ン]/.test(s))
            .map(s => s.trim())
            .filter(s => s !== target && s.length > 0);

          if (otherPatterns.length >= 3) {
            distractors = shuffleArray([...new Set(otherPatterns)], rng).slice(0, 3);
          } else {
            distractors = getDistractors(target, [...particles, ...endings]);
          }
        }

        if (target.length === 1 && !particles.includes(target)) continue;

        const parts = ex.jp.split(target);
        if (parts.length >= 2) {
          const qId = 4000 + questions.length;

          const plainQuestion = ex.jp.replace(target, '（　　）');
          const formattedQuestion = applyFurigana(plainQuestion, ex.furigana);
          const formattedFullSentence = applyFurigana(ex.jp, ex.furigana);

          questions.push({
            id: qId,
            question: formattedQuestion,
            correctAnswer: target,
            options: shuffleArray([target, ...distractors], rng),
            explanation: `Đáp án đúng là "${target}".\nCâu hoàn chỉnh: ${formattedFullSentence}\n(${ex.vn || ''})\nMẫu ngữ pháp: ${point.pattern} - ${point.explanation}`,
            metadata: {}
          });
        }
      }
    }

    // Fill remaining with Vocab Context questions if Grammar runs out/stalls (Fallback)
    if (questions.length < targetCount) {
      // Re-use logic for vocab context fallback
      // ... (Omitted for brevity, assuming standard loop covers reasonably. 
      // If loop stalls, we just return what we have)
    }

    return questions.slice(0, targetCount);
  };

  // Memoize questions to prevent regeneration on every render
  const vocabQuestions = useMemo(() => generateVocabQuestions(), [vocabulary, lessonId]);
  const kanjiQuestions = useMemo(() => generateKanjiQuestions(), [vocabulary, lessonId]);
  const grammarQuestions = useMemo(() => generateGrammarQuestions(), [grammar, lessonId]);

  return (
    <div className="w-full space-y-6">
      <div className="w-full sm:w-[300px]">
        <Select value={quizType} onValueChange={setQuizType}>
          <SelectTrigger className="w-full bg-background border-[#008001] ring-offset-background focus:ring-[#008001]">
            <SelectValue placeholder="Chọn nội dung luyện tập" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vocab">Từ vựng</SelectItem>
            <SelectItem value="kanji">Kanji</SelectItem>
            <SelectItem value="grammar">Ngữ pháp</SelectItem>
            <SelectItem value="translate">Luyện dịch</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {quizType === "vocab" && (
        <div className="mt-6">
          <QuizEngine questions={vocabQuestions} />
        </div>
      )}

      {quizType === "kanji" && (
        <div className="mt-6">
          <QuizEngine questions={kanjiQuestions} />
        </div>
      )}

      {quizType === "grammar" && (
        <div className="mt-6">
          <QuizEngine questions={grammarQuestions} />
        </div>
      )}

      {quizType === "translate" && (
        <div className="mt-6">
          <TranslationQuiz vocabulary={vocabulary} grammar={grammar} />
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
  const [activeTab, setActiveTab] = useState("vocabulary");

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

  const isQuizTab = activeTab === "quiz";

  return (
    <Layout>
      <div className="bg-background">
        {/* Lesson Header */}
        {/* Lesson Header */}
        {/* Lesson Header */}
        <div className="border-b bg-background z-40 transition-all shadow-sm h-20 flex items-center">
          <div className="container mx-auto px-4">
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
        <main className="container mx-auto px-4 pb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-0">
            <TabsList className="grid w-full grid-cols-5 h-auto p-1 z-30 bg-background shadow-sm transition-all border-b -mx-4 w-[calc(100%+2rem)] px-1 rounded-none">
              <TabsTrigger value="vocabulary" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Từ vựng</span>
              </TabsTrigger>
              <TabsTrigger value="flashcard" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <Layers className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Flashcard</span>
              </TabsTrigger>
              <TabsTrigger value="kanji" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <PenTool className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Kanji</span>
              </TabsTrigger>
              <TabsTrigger value="grammar" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <BookMarked className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Ngữ pháp</span>
              </TabsTrigger>

              <TabsTrigger value="quiz" className="flex flex-col sm:flex-row items-center gap-1 py-2 data-[state=active]:bg-[#008001] data-[state=active]:text-white">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Luyện tập</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vocabulary">
              <VocabularyTab vocabulary={lesson.vocabulary} />
            </TabsContent>

            <TabsContent value="flashcard">
              <FlashcardTab vocabulary={lesson.vocabulary} />
            </TabsContent>

            <TabsContent value="kanji">
              <KanjiTab vocabulary={lesson.vocabulary} lessonId={lesson.id} />
            </TabsContent>

            <TabsContent value="grammar">
              <GrammarTab grammar={lesson.grammar} vocabulary={lesson.vocabulary} />
            </TabsContent>



            <TabsContent value="quiz">
              <QuizTab vocabulary={lesson.vocabulary} grammar={lesson.grammar} quiz={lesson.quiz} lessonId={lesson.id} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default LessonDetail;
