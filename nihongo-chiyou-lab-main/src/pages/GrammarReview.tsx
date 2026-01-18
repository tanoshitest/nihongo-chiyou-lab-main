import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronLeft, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { grammarAppendixData } from "@/data/grammarAppendixData";
import { FuriganaText } from "@/components/FuriganaText";

const GrammarReview = () => {
    const [activeTab, setActiveTab] = useState("n5");

    const n5Grammar = grammarAppendixData.filter((item) => item.level === "N5");
    const n4Grammar = grammarAppendixData.filter((item) => item.level === "N4");

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Header */}
                <div className="border-b bg-gradient-to-br from-accent to-secondary py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-4">
                            <Link to="/minna">
                                <Button variant="ghost" size="icon" className="text-[#008001]">
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                            </Link>
                            <h1 className="text-3xl font-bold text-[#008001]">
                                Tổng hợp Ngữ pháp
                            </h1>
                        </div>
                        <p className="text-muted-foreground ml-14">
                            Tra cứu nhanh các mẫu câu và ngữ pháp N5 - N4 với ví dụ minh họa
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-8">
                    <Tabs
                        defaultValue="n5"
                        onValueChange={setActiveTab}
                        className="space-y-8"
                    >
                        <div className="flex justify-center">
                            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                                <TabsTrigger
                                    value="n5"
                                    className="text-base data-[state=active]:bg-[#008001] data-[state=active]:text-white"
                                >
                                    Sơ cấp 1 (N5)
                                </TabsTrigger>
                                <TabsTrigger
                                    value="n4"
                                    className="text-base data-[state=active]:bg-[#008001] data-[state=active]:text-white"
                                >
                                    Sơ cấp 2 (N4)
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="n5" className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#008001]/10 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-[#008001]" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-foreground">
                                        Ngữ pháp N5
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Các cấu trúc cơ bản ({n5Grammar.length} mục)
                                    </p>
                                </div>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {n5Grammar.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={`item-${item.id}`}
                                        className="border rounded-lg px-4 bg-card hover:bg-accent/50 transition-colors"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-4">
                                            <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-4 w-full pr-4">
                                                <Badge
                                                    variant="outline"
                                                    className="w-12 justify-center shrink-0 border-[#008001] text-[#008001]"
                                                >
                                                    #{item.id}
                                                </Badge>
                                                <span className="font-bold text-lg text-[#008001]">
                                                    {item.label}
                                                </span>
                                                <span className="text-muted-foreground md:border-l md:pl-4">
                                                    {item.meaning}
                                                </span>
                                                {item.group && (
                                                    <Badge variant="secondary" className="ml-auto md:ml-auto w-fit text-xs font-normal opacity-70">
                                                        {item.group}
                                                    </Badge>
                                                )}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6 pt-2">
                                            <div className="pl-4 md:pl-16 space-y-4">
                                                <div className="grid gap-3">
                                                    {item.examples.map((ex, idx) => (
                                                        <div key={idx} className="flex gap-4 p-3 rounded-md bg-muted/30">
                                                            <div className="text-xs font-bold text-muted-foreground mt-1 w-6 shrink-0">
                                                                {idx + 1}.
                                                            </div>
                                                            <div className="space-y-1">
                                                                <p className="text-base font-medium text-foreground">
                                                                    <FuriganaText text={ex.jp} />
                                                                </p>
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    {ex.vn}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>

                        <TabsContent value="n4" className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#008001]/10 rounded-lg">
                                    <GraduationCap className="w-6 h-6 text-[#008001]" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-foreground">
                                        Ngữ pháp N4
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Các cấu trúc nâng cao ({n4Grammar.length} mục)
                                    </p>
                                </div>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {n4Grammar.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={`item-${item.id}`}
                                        className="border rounded-lg px-4 bg-card hover:bg-accent/50 transition-colors"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-4">
                                            <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-4 w-full pr-4">
                                                <Badge
                                                    variant="outline"
                                                    className="w-12 justify-center shrink-0 border-orange-500 text-orange-600"
                                                >
                                                    #{item.id}
                                                </Badge>
                                                <span className="font-bold text-lg text-orange-700">
                                                    {item.label}
                                                </span>
                                                <span className="text-muted-foreground md:border-l md:pl-4">
                                                    {item.meaning}
                                                </span>
                                                {item.group && (
                                                    <Badge variant="secondary" className="ml-auto md:ml-auto w-fit text-xs font-normal opacity-70">
                                                        {item.group}
                                                    </Badge>
                                                )}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6 pt-2">
                                            <div className="pl-4 md:pl-16 space-y-4">
                                                <div className="grid gap-3">
                                                    {item.examples.map((ex, idx) => (
                                                        <div key={idx} className="flex gap-4 p-3 rounded-md bg-muted/30">
                                                            <div className="text-xs font-bold text-muted-foreground mt-1 w-6 shrink-0">
                                                                {idx + 1}.
                                                            </div>
                                                            <div className="space-y-1">
                                                                <p className="text-base font-medium text-foreground">
                                                                    <FuriganaText text={ex.jp} />
                                                                </p>
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    {ex.vn}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </Layout>
    );
};

export default GrammarReview;
