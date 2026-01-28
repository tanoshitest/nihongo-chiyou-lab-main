import { useState, useMemo, useEffect } from "react";
import { kanjiData } from "@/data/kanjiData";
import KanjiFlipCard from "./KanjiFlipCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const KanjiGrid = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string>("all");

  const [searchQuery, setSearchQuery] = useState("");


  // Selection State with Persistence


  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 24;

  const handleCardFlip = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const filteredKanji = useMemo(() => {
    let filtered = kanjiData;

    // Filter by Lesson
    if (selectedLesson !== "all") {
      filtered = filtered.filter((kanji) => kanji.lesson === parseInt(selectedLesson));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((kanji) =>
        kanji.kanji.includes(query) ||
        kanji.meaning.toLowerCase().includes(query) ||
        kanji.sinoVietnamese.toLowerCase().includes(query) ||
        kanji.onyomi.toLowerCase().includes(query) ||
        kanji.kunyomi.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedLesson, searchQuery]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLesson, searchQuery]);

  const totalPages = Math.ceil(filteredKanji.length / ITEMS_PER_PAGE);
  const paginatedKanji = filteredKanji.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const lessons = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground shrink-0">
          512 Kanji - Look and Learn
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm (Kanji, Hán Việt, Nghĩa...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <Select
              value={selectedLesson}
              onValueChange={setSelectedLesson}
            >
              <SelectTrigger className="w-full md:w-[160px]">
                <SelectValue placeholder="Chọn bài học" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả bài học</SelectItem>
                {lessons.map((lesson) => (
                  <SelectItem key={lesson} value={lesson.toString()}>
                    Bài {lesson}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">
        Click vào thẻ để xem nghĩa và ví dụ. Đây là bộ Kanji cơ bản giúp bạn
        chuẩn bị tốt cho kỳ thi JLPT.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedKanji.map((kanji) => (
          <KanjiFlipCard
            key={kanji.id}
            kanji={kanji}
            isFlipped={activeCardId === kanji.id}
            onFlip={() => handleCardFlip(kanji.id)}
          />
        ))}
      </div>

      {filteredKanji.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          Không tìm thấy Kanji nào phù hợp với tìm kiếm của bạn.
        </div>
      ) : (
        /* Pagination Controls */
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentPage(p => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
          >
            Trước
          </Button>

          <div className="flex items-center gap-2 mx-2">
            <span className="text-sm font-medium">
              Trang {currentPage} / {totalPages}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentPage(p => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
          >
            Sau
          </Button>
        </div>
      )}
    </div>
  );
};

export default KanjiGrid;
