import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { vocabularyList, vocabularyTopics } from "@/data/vocabularyData";
import { KanjiHover } from "@/components/KanjiHover";

const VocabularyList = () => {
    const [selectedTopic, setSelectedTopic] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVocabulary, setSelectedVocabulary] = useState<number[]>(() => {
        const saved = localStorage.getItem("vocabulary_selection");
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        localStorage.setItem("vocabulary_selection", JSON.stringify(selectedVocabulary));
    }, [selectedVocabulary]);

    const toggleSelection = (id: number) => {
        setSelectedVocabulary(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredVocabulary = vocabularyList.filter((item) => {
        // 1. Filter by Topic
        const matchesTopic = selectedTopic === "all" || item.topicId === selectedTopic;



        // 3. Filter by Search Query
        const query = searchQuery.toLowerCase().trim();
        if (!query) return matchesTopic;

        const matchesWord = item.word.toLowerCase().includes(query);
        const matchesMeaning = item.meaning.toLowerCase().includes(query);
        const matchesRomaji = item.romaji.toLowerCase().includes(query);
        const matchesHiragana = item.hiragana.includes(query);

        // Search inside specific Kanji if available in furigana
        const matchesKanji = item.furigana?.some(f => f.kanji.includes(query)) || false;

        return matchesTopic && (matchesWord || matchesMeaning || matchesRomaji || matchesHiragana || matchesKanji);
    });

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                <div className="border-b bg-gradient-to-br from-accent to-secondary py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-4">
                            <Link to="/minna">
                                <Button variant="ghost" size="icon" className="text-[#008001]">
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                            </Link>
                            <h1 className="text-3xl font-bold text-[#008001]">Từ vựng theo chủ đề</h1>
                        </div>
                        <p className="text-muted-foreground ml-14">
                            Tổng hợp từ vựng thông dụng theo các chủ đề trong đời sống Nhật Bản
                        </p>
                    </div>
                </div>

                <main className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                        <div className="w-full md:w-1/3 flex items-center gap-2">
                            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                                <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Chọn chủ đề" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả chủ đề</SelectItem>
                                    {vocabularyTopics.map((topic) => (
                                        <SelectItem key={topic.id} value={topic.id}>
                                            {topic.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="relative w-full md:w-1/3">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm từ vựng..."
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#008001]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredVocabulary.map((item, index) => {
                            const isSelected = selectedVocabulary.includes(item.id);
                            return (
                                <Card
                                    key={item.id}
                                    className={`hover:shadow-md transition-all relative cursor-pointer ${isSelected ? "bg-blue-50 border-blue-300 shadow-sm" : ""
                                        }`}
                                    onClick={() => toggleSelection(item.id)}
                                >
                                    <CardContent className="p-4">
                                        <div className="flex gap-3 items-start mb-3">
                                            <div className="shrink-0 w-auto min-w-[24px] h-6 px-2 rounded-md bg-[#008001]/10 text-[#008001] flex items-center justify-center text-xs font-bold mt-1">
                                                {index + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="text-2xl font-bold text-[#008001] flex flex-wrap items-end gap-x-1">
                                                    {item.furigana ? (
                                                        <div className="flex items-end gap-0.5 flex-wrap">
                                                            {item.furigana.map((part, idx) => (
                                                                <div key={idx} className="flex flex-col items-center">
                                                                    <span className="text-xs text-muted-foreground mb-[-2px]">
                                                                        {part.reading}
                                                                    </span>
                                                                    <span className="cursor-pointer">
                                                                        <KanjiHover text={part.kanji} />
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <span className="cursor-pointer">
                                                            <KanjiHover text={item.word} />
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="mt-2 text-left">
                                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 inline-block">
                                                        {vocabularyTopics.find(t => t.id === item.topicId)?.name.split(' (')[0]}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-500 w-16">Hiragana:</span>
                                                <span className="text-lg">{item.hiragana}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-500 w-16">Romaji:</span>
                                                <span className="text-sm text-gray-600 font-mono">{item.romaji}</span>
                                            </div>
                                            <div className="flex items-center gap-2 border-t pt-2 mt-2">
                                                <span className="text-sm font-medium text-gray-500 w-16">Nghĩa:</span>
                                                <span className="text-base font-semibold text-gray-800">{item.meaning}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {filteredVocabulary.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            Không tìm thấy từ vựng nào phù hợp.
                        </div>
                    )}
                </main>
            </div>
        </Layout>
    );
};

export default VocabularyList;
