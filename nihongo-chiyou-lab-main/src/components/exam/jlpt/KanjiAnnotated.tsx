import React from 'react';
import { annotateKanji, TextSegment } from '@/utils/kanjiAnnotator';

interface KanjiAnnotatedProps {
    /** The HTML string to annotate (may contain <u>, <b>, etc.) */
    html: string;
    /** If true, shows furigana above and Vietnamese meaning below. Default: true. */
    showAnnotations?: boolean;
    className?: string;
}

/**
 * Renders an HTML string with furigana (reading above) and
 * Vietnamese meaning (below) overlaid on each known kanji word.
 *
 * Usage:
 *   <KanjiAnnotated html="窓から外を見ると..." />
 */
const KanjiAnnotated: React.FC<KanjiAnnotatedProps> = ({
    html,
    showAnnotations = true,
    className = '',
}) => {
    if (!showAnnotations) {
        return (
            <span
                className={className}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }

    // Parse the HTML and annotate text nodes while preserving HTML tags.
    // Strategy: split on HTML tags, annotate the text parts, reconstruct.
    const annotateHtmlString = (input: string): React.ReactNode[] => {
        // Split on HTML tags (including <u>, <b>, </u>, etc.)
        const TAG_REGEX = /(<[^>]+>)/g;
        const parts = input.split(TAG_REGEX);
        const nodes: React.ReactNode[] = [];

        let keyIdx = 0;

        for (const part of parts) {
            if (part.startsWith('<') && part.endsWith('>')) {
                // It's an HTML tag – render it as raw HTML wrapper
                // For <u>, wrap in underline span; for </u>, close it.
                const tagName = part.match(/^<\/?(\w+)/)?.[1]?.toLowerCase();
                if (tagName === 'u') {
                    nodes.push(
                        <span key={`tag-${keyIdx++}`} className="underline underline-offset-4 decoration-2 inline" />
                    );
                    // We use a different approach: collect content between <u></u>
                }
                // We'll handle it differently below
            }
        }

        // Better approach: process text character by character, using a manual stack
        return processHtml(input);
    };

    const processHtml = (input: string): React.ReactNode[] => {
        // Tokenize: extract tags and text
        const TAG_RE = /(<u>|<\/u>|<b>|<\/b>|<br\/>|<br>)/gi;
        const tokens = input.split(TAG_RE);
        const nodes: React.ReactNode[] = [];
        let keyIdx = 0;
        let insideU = false;
        let insideB = false;

        for (const token of tokens) {
            if (!token) continue;
            const lower = token.toLowerCase();
            if (lower === '<u>') { insideU = true; continue; }
            if (lower === '</u>') { insideU = false; continue; }
            if (lower === '<b>') { insideB = true; continue; }
            if (lower === '</b>') { insideB = false; continue; }
            if (lower === '<br/>' || lower === '<br>') {
                nodes.push(<br key={`br-${keyIdx++}`} />);
                continue;
            }

            // Plain text segment – annotate kanji
            const segments = annotateKanji(token);
            const segmentNodes = segments.map((seg: TextSegment, si: number) => {
                if (seg.kanji) {
                    const content = (
                        <span
                            key={`seg-${keyIdx++}-${si}`}
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                verticalAlign: 'baseline',
                                margin: '0 1px',
                            }}
                        >
                            {/* furigana above */}
                            <span style={{
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontSize: '0.6em',
                                lineHeight: 1,
                                color: '#2563eb',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                marginBottom: '-2px',
                            }}>
                                {seg.kanji.furigana}
                            </span>

                            {/* kanji character – exactly on baseline */}
                            <span className={`${insideU ? 'underline underline-offset-4 decoration-2' : ''} ${insideB ? 'font-bold' : ''}`}>
                                {seg.text}
                            </span>

                            {/* Vietnamese meaning below */}
                            <span style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontSize: '0.55em',
                                lineHeight: 1,
                                color: '#ea580c',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                marginTop: '-2px',
                            }}>
                                {seg.kanji.meaning}
                            </span>
                        </span>
                    );
                    return content;
                } else {
                    // Plain text
                    return (
                        <span
                            key={`plain-${keyIdx++}-${si}`}
                            className={`${insideU ? 'underline underline-offset-4 decoration-2' : ''} ${insideB ? 'font-bold' : ''}`}
                        >
                            {seg.text}
                        </span>
                    );
                }
            });

            nodes.push(...segmentNodes);
        }

        return nodes;
    };

    const renderedNodes = processHtml(html);

    return (
        <span
            className={className}
            style={{
                display: 'inline',
                lineHeight: 2.6,
            }}
        >
            {renderedNodes}
        </span>
    );
};

export default KanjiAnnotated;
