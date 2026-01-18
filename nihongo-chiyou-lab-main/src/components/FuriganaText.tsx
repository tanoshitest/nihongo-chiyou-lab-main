import React from 'react';

interface FuriganaTextProps {
    text: string;
    className?: string;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({ text, className }) => {
    // Regex to match {Kanji|Reading} pattern
    const regex = /\{([^|]+)\|([^}]+)\}/g;

    // Split text by the regex
    const parts = text.split(regex);

    if (parts.length === 1) {
        return <span className={className}>{text}</span>;
    }

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // We can use string.matchAll or regex.exec loop
    // But split gives us [pre, kanji, reading, post, kanji, reading...] 
    // Wait, split with capturing groups includes the captures in the array.

    // Example: "A{B|C}D".split(/\{([^|]+)\|([^}]+)\}/g)
    // Result: ["A", "B", "C", "D"]

    for (let i = 0; i < parts.length; i += 3) {
        // Plain text
        if (parts[i]) {
            elements.push(<span key={`text-${i}`}>{parts[i]}</span>);
        }

        // Furigana part
        if (i + 1 < parts.length && i + 2 < parts.length) {
            const kanji = parts[i + 1];
            const reading = parts[i + 2];
            elements.push(
                <ruby key={`ruby-${i}`} className="group inline-flex flex-col-reverse relative align-bottom leading-none mx-[1px]">
                    <span className="text-base">{kanji}</span>
                    <rt className="text-[0.6em] text-center mb-[-0.2em] select-none text-muted-foreground group-hover:text-[#008001] transition-colors">
                        {reading}
                    </rt>
                </ruby>
            );
        }
    }

    return <span className={className}>{elements}</span>;
};
