import React from "react";
import { KANJI_DICT, KanjiInfo } from "@/utils/kanjiAnnotator";

interface KanjiBreakdownProps {
    questionText: string;
    options: (string | React.ReactNode)[];
}

/**
 * Detect if a character is a CJK kanji.
 */
function isKanji(ch: string): boolean {
    const code = ch.codePointAt(0) ?? 0;
    return (code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf);
}

/**
 * Extract all unique kanji characters from a plain string.
 */
function extractKanjiChars(text: string): string[] {
    const seen = new Set<string>();
    for (const ch of text) {
        if (isKanji(ch)) seen.add(ch);
    }
    return Array.from(seen);
}

/**
 * Convert a React node / option to plain string so we can scan for kanji.
 */
function optionToString(opt: string | React.ReactNode): string {
    if (typeof opt === "string") return opt;
    return ""; // skip non-string options (image nodes etc.)
}

/**
 * Strip HTML tags from a string (for scanning questionText which may contain <u> etc.)
 */
function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "");
}

/**
 * For each kanji character, find the best entry from KANJI_DICT.
 * We try to find a multi-char word first (up to 4 chars), then fall back to single.
 * Returns a map: kanji char -> KanjiInfo
 */
function buildKanjiInfoMap(
    sources: string[]
): Map<string, KanjiInfo & { kanji: string }> {
    const result = new Map<string, KanjiInfo & { kanji: string }>();

    // First collect all kanji chars from all sources
    const allKanji = new Set<string>();
    for (const src of sources) {
        for (const ch of extractKanjiChars(src)) allKanji.add(ch);
    }

    // For each kanji char, try to find a matching compound word in any source
    for (const ch of allKanji) {
        if (result.has(ch)) continue; // already found

        // Try compound word match first (multi-char entries that contain this char)
        let found = false;
        for (const src of sources) {
            if (found) break;
            for (let start = 0; start < src.length; start++) {
                if (src[start] !== ch) continue;
                // Try lengths 4, 3, 2 first then 1
                for (const len of [4, 3, 2, 1]) {
                    const word = src.slice(start, start + len);
                    if (word.length < len) continue;
                    if (KANJI_DICT[word]) {
                        // Map this compound to primary char only if char is first char
                        if (word[0] === ch || len === 1) {
                            result.set(ch, { kanji: word, ...KANJI_DICT[word] });
                            found = true;
                            break;
                        }
                    }
                }
                if (found) break;
            }
        }

        // Still not found? Check KANJI_DICT for single char directly
        if (!found && KANJI_DICT[ch]) {
            result.set(ch, { kanji: ch, ...KANJI_DICT[ch] });
        }
    }

    return result;
}

const KanjiBreakdown: React.FC<KanjiBreakdownProps> = ({ questionText, options }) => {
    const plainQuestion = stripHtml(questionText);
    const plainOptions = options.map(optionToString);
    const allSources = [plainQuestion, ...plainOptions];

    const kanjiMap = buildKanjiInfoMap(allSources);

    if (kanjiMap.size === 0) return null;

    return (
        <div className="mt-3 p-4 border border-black bg-amber-50">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-black">📖 Giải thích Kanji</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Array.from(kanjiMap.entries()).map(([_char, info]) => (
                    <div
                        key={info.kanji}
                        className="flex gap-3 items-start bg-white border border-amber-200 p-3"
                    >
                        {/* Big kanji character */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black text-white text-2xl font-bold">
                            {info.kanji.length === 1 ? info.kanji : info.kanji[0]}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            {/* Word + reading */}
                            <div className="flex items-baseline gap-2 flex-wrap">
                                {info.kanji.length > 1 && (
                                    <span className="font-bold text-base">{info.kanji}</span>
                                )}
                                <span className="text-blue-600 text-sm font-medium">{info.furigana}</span>
                            </div>
                            {/* Vietnamese meaning */}
                            <div className="text-black text-sm font-semibold">{info.meaning}</div>
                            {/* Memory tip */}
                            {info.tip && (
                                <div className="mt-1 text-xs text-gray-600 leading-relaxed">
                                    💡 {info.tip}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanjiBreakdown;
