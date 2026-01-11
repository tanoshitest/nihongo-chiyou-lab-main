
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { TIME_EXPRESSIONS } from "@/data/timeExpressionsData";

const FuriganaText = ({ text }: { text: string }) => {
    if (!text) return null;
    const parts = text.split(/(\[[^\]]+\])/g);
    return (
        <span className="inline-flex flex-wrap items-center gap-y-10 leading-[3rem] text-lg text-gray-700 font-medium">
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
                return <span key={index} className="mx-0.5">{part}</span>;
            })}
        </span>
    );
};

const TimeExpressions = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/minna" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-[#008001]">Cách nói thời gian</h1>
                        <p className="text-muted-foreground mt-1">Tổng hợp ngày, tháng, năm, giờ, phút</p>
                    </div>
                </div>

                <div className="space-y-12">
                    {TIME_EXPRESSIONS.map((group) => (
                        <div key={group.id} className="space-y-6">
                            <div className="flex items-center gap-3 pb-2 border-b-2 border-[#008001]">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#008001] text-white font-bold text-lg">{group.id}</span>
                                <h2 className="text-2xl font-bold text-gray-800">{group.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item, idx) => (
                                    <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6">
                                            <div className="text-center">
                                                <div className="text-slate-500 text-sm font-bold uppercase mb-2">{item.label}</div>
                                                <FuriganaText text={item.value} />
                                            </div>
                                            {item.subItems && item.subItems.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                                                    {item.subItems.map((sub, sIdx) => (
                                                        <div key={sIdx} className="flex flex-col items-center">
                                                            <span className="text-xs text-slate-400">{sub.label}</span>
                                                            <FuriganaText text={sub.value} />
                                                        </div>
                                                    ))}
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

export default TimeExpressions;
