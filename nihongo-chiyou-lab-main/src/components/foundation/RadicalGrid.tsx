import { useState } from "react";
import { radicalData, radicalCategories, strokeCounts } from "@/data/radicalData";
import RadicalCard from "./RadicalCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

const RadicalGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [selectedStrokes, setSelectedStrokes] = useState<string>("all");
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardFlip = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const filteredRadicals = radicalData.filter((radical) => {
    const categoryMatch =
      selectedCategory === "Tất cả" || radical.category === selectedCategory;
    const strokeMatch =
      selectedStrokes === "all" || radical.strokes === parseInt(selectedStrokes);
    return categoryMatch && strokeMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          214 Bộ thủ
        </h2>
      </div>
      <p className="text-muted-foreground mb-8">
        Bộ thủ là các thành phần cơ bản cấu tạo nên chữ Hán. Nắm vững 214 bộ thủ
        sẽ giúp bạn dễ dàng học và nhớ Kanji hơn.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Bộ lọc:</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Phân loại" />
            </SelectTrigger>
            <SelectContent>
              {radicalCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStrokes} onValueChange={setSelectedStrokes}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Số nét" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả nét</SelectItem>
              {strokeCounts.map((count) => (
                <SelectItem key={count} value={count.toString()}>
                  {count} nét
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <span className="text-sm text-muted-foreground ml-auto">
          {filteredRadicals.length} bộ thủ
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredRadicals.map((radical) => (
          <RadicalCard
            key={radical.id}
            radical={radical}
            isFlipped={activeCardId === radical.id}
            onFlip={() => handleCardFlip(radical.id)}
          />
        ))}
      </div>

      {filteredRadicals.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Không tìm thấy bộ thủ phù hợp với bộ lọc.
        </div>
      )}
    </div>
  );
};

export default RadicalGrid;
