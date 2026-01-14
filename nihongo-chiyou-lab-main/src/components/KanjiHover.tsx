import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { kanjiData } from "@/data/kanjiData";
import { cn } from "@/lib/utils";

// Helper to check if a character is Kanji
const isKanji = (char: string) => /[\u4e00-\u9faf]/.test(char);

// Find Kanji details from master data
const getKanjiDetail = (char: string) => {
    return kanjiData.find((k) => k.kanji === char);
};

interface KanjiHoverProps {
    text: string;
    className?: string;
    enableHover?: boolean;
}

export const KanjiHover: React.FC<KanjiHoverProps> = ({
    text,
    className,
    enableHover = true
}) => {
    if (!text) return null;

    // Split text into Processed Chunks to handle mixed content
    const result: React.ReactNode[] = [];
    const chars = text.split("");

    chars.forEach((char, index) => {
        // If not enabled or not Kanji, just return generic span
        if (!enableHover || !isKanji(char)) {
            result.push(<span key={index}>{char}</span>);
            return;
        }

        const detail = getKanjiDetail(char);

        // If no data found for this Kanji, return generic span
        if (!detail) {
            result.push(<span key={index}>{char}</span>);
            return;
        }

        // Render HoverCard for known Kanji
        result.push(
            <HoverCard key={index} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                    <span className={cn("cursor-help hover:text-[#008001] transition-colors", className)}>
                        {char}
                    </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-background border shadow-lg z-50" side="top">
                    <div className="space-y-3">
                        {/* Header: Kanji + Meaning */}
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
                                    <Badge variant="secondary" className="text-xs">JLPT N5</Badge>
                                    {detail.sinoVietnamese && (
                                        <Badge variant="outline" className="text-xs text-[#008001] border-[#008001]/30">
                                            {detail.sinoVietnamese}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Readings */}
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

                        {/* Examples */}
                        {detail.examples && detail.examples.length > 0 && (
                            <div className="border-t pt-2">
                                <p className="text-xs font-medium text-[#008001] mb-1">Ví dụ:</p>
                                <div className="space-y-2">
                                    {detail.examples.slice(0, 2).map((ex, i) => (
                                        <div key={i} className="leading-tight text-xs">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-foreground">{ex.japanese}</span>
                                                <span className="text-muted-foreground">({ex.romaji})</span>
                                            </div>
                                            <p className="text-[10px] text-muted-foreground italic mt-0.5">{ex.vietnamese}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </HoverCardContent>
            </HoverCard>
        );
    });

    return <>{result}</>;
};
