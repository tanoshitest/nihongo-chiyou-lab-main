
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FORMS } from "@/data/formsData";
import { cn } from "@/lib/utils";

// Robust Furigana and Highlight Renderer
// Reusing the robust triple-layer parser from Particles
const FuriganaText = ({ text }: { text: string }) => {
    if (!text) return null;

    // Split by [Kanji|Furigana|Meaning] or {Highlight} patterns
    const parts = text.split(/(\[[^\]]+\]|\{[^\}]+\})/g);

    return (
        <span className="inline-flex flex-wrap items-center gap-y-10 leading-[4rem] text-lg text-gray-700 font-medium py-2">
            {parts.map((part, index) => {
                // Handle Furigana: [Kanji|Reading|Meaning] or [Kanji|Reading]
                if (part.startsWith('[') && part.endsWith(']')) {
                    const content = part.slice(1, -1); // Remove [ ]
                    const segments = content.split('|');
                    const kanji = segments[0] ? segments[0].trim() : '';
                    const reading = segments[1] ? segments[1].trim() : '';
                    const meaning = segments[2] ? segments[2].trim() : '';

                    if (meaning) {
                        // Triple layer: Reading top, Kanji middle, Meaning bottom
                        return (
                            <span key={index} className="inline-flex flex-col items-center justify-center align-middle mx-1 px-1">
                                <span className="text-xs text-slate-500 leading-none mb-1">{reading}</span>
                                <span className="text-xl font-semibold leading-none text-[#008001] h-6 flex items-center">{kanji}</span>
                                <span className="text-[10px] text-[#008001] leading-none mt-1 font-bold uppercase tracking-wider">{meaning}</span>
                            </span>
                        );
                    }

                    if (reading) {
                        // Standard Furigana: Reading top, Kanji bottom
                        return (
                            <ruby key={index} className="mx-0.5 text-[#008001] font-semibold">
                                {kanji}
                                <rt className="text-xs text-slate-500 select-none font-normal">{reading}</rt>
                            </ruby>
                        );
                    }
                    return <span key={index}>{content}</span>;
                }

                // Handle Highlight: {Text} (for Grammar Points)
                if (part.startsWith('{') && part.endsWith('}')) {
                    const content = part.slice(1, -1); // Remove { }
                    return (
                        <span key={index} className="font-bold text-black mx-1 mb-1">
                            {content}
                        </span>
                    );
                }

                // Normal text (Hiragana etc)
                // Add mb-1 to align visually better with the Kanji center if needed
                return <span key={index} className="mx-0.5 mb-1">{part}</span>;
            })}
        </span>
    );
};

const Forms = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/minna" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#008001]">Cách dùng các thể (Verb Forms)</h1>
                        <p className="text-muted-foreground mt-1">Tổng hợp 9 thể động từ và ví dụ minh họa</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {FORMS.map((f) => (
                        <Card key={f.id} className="scroll-mt-20 shadow-sm hover:shadow-md transition-shadow" id={`form-${f.id}`}>
                            <CardHeader className="border-b bg-slate-50/50 pb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-[#008001] text-white flex items-center justify-center text-xl font-bold pb-1 shadow-md shadow-[#008001]/20">
                                            {f.id}
                                        </div>
                                        <div className="flex flex-col">
                                            <CardTitle className="text-xl font-bold flex items-center gap-2">
                                                <span className="font-bold">{f.title}</span> <span className="text-slate-400 font-normal text-base">({f.romaji})</span>
                                            </CardTitle>
                                            <p className="text-sm font-medium text-slate-700 mt-1 pl-1 border-l-2 border-[#008001]">
                                                {f.explanation}
                                            </p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-sm px-2 py-0.5 bg-white border-slate-200 text-slate-400">
                                        ID: {f.id}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <h3 className="text-xs font-bold text-[#008001] uppercase tracking-wider mb-4 flex items-center gap-2 px-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#008001]"></span> Ví dụ minh họa
                                </h3>
                                <div className="grid gap-3">
                                    {f.examples.map((ex, idx) => (
                                        <div key={idx} className="group p-4 bg-white rounded-xl border border-dashed border-slate-200 hover:border-[#008001]/30 hover:bg-[#008001]/5 transition-all duration-300">
                                            <div className="mb-2">
                                                <FuriganaText text={ex.sentence} />
                                            </div>
                                            <div className="text-slate-500 text-sm italic pl-1 border-l-2 border-slate-200 mt-3">
                                                {ex.meaning}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Forms;
