
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { NUMBERS_DATA } from "@/data/numbersData";
import { cn } from "@/lib/utils";

// Robust Furigana and Highlight Renderer (Same as others)
const FuriganaText = ({ text }: { text: string }) => {
    if (!text) return null;

    const parts = text.split(/(\[[^\]]+\]|\{[^\}]+\})/g);

    return (
        <span className="inline-flex flex-wrap items-center gap-y-10 leading-[4rem] text-lg text-gray-700 font-medium py-2">
            {parts.map((part, index) => {
                if (part.startsWith('[') && part.endsWith(']')) {
                    const content = part.slice(1, -1);
                    const segments = content.split('|');
                    const kanji = segments[0] ? segments[0].trim() : '';
                    const reading = segments[1] ? segments[1].trim() : '';
                    const meaning = segments[2] ? segments[2].trim() : '';

                    if (meaning) {
                        return (
                            <span key={index} className="inline-flex flex-col items-center justify-center align-middle mx-1 px-1">
                                <span className="text-xs text-slate-500 leading-none mb-1">{reading}</span>
                                <span className="text-xl font-semibold leading-none text-[#008001] h-6 flex items-center">{kanji}</span>
                                <span className="text-[10px] text-[#008001] leading-none mt-1 font-bold uppercase tracking-wider">{meaning}</span>
                            </span>
                        );
                    }

                    if (reading) {
                        return (
                            <ruby key={index} className="mx-0.5 text-[#008001] font-semibold">
                                {kanji}
                                <rt className="text-xs text-slate-500 select-none font-normal">{reading}</rt>
                            </ruby>
                        );
                    }
                    return <span key={index}>{content}</span>;
                }

                if (part.startsWith('{') && part.endsWith('}')) {
                    const content = part.slice(1, -1);
                    return (
                        <span key={index} className="font-bold text-black mx-1 mb-1">
                            {content}
                        </span>
                    );
                }

                return <span key={index} className="mx-0.5 mb-1">{part}</span>;
            })}
        </span>
    );
};

const Numbers = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/minna" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#008001]">Số đếm (Numbers)</h1>
                        <p className="text-muted-foreground mt-1">Tổng hợp cách đếm số trong tiếng Nhật</p>
                    </div>
                </div>

                <div className="space-y-12">
                    {NUMBERS_DATA.map((group) => (
                        <div key={group.id} className="space-y-6">
                            <div className="flex items-center gap-3 pb-2 border-b-2 border-[#008001]">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#008001] text-white font-bold text-lg">{group.id}</span>
                                <h2 className="text-2xl font-bold text-gray-800">{group.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {group.items.map((item, idx) => (
                                    <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6 group p-4 hover:bg-[#008001]/5 transition-all duration-300">
                                            <div className="mb-2 flex justify-center">
                                                <FuriganaText text={item.sentence} />
                                            </div>
                                            {item.meaning && (
                                                <div className="text-slate-500 text-sm italic text-center border-t border-slate-100 pt-2 mt-2">
                                                    {item.meaning}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Numbers;
