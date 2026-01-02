import { Button } from "@/components/ui/button";
import { categories, levels } from "@/data/newsData";

interface NewsFiltersProps {
  selectedLevel: string;
  selectedCategory: string;
  onLevelChange: (level: string) => void;
  onCategoryChange: (category: string) => void;
}

const levelColorMap: Record<string, string> = {
  All: "bg-muted hover:bg-muted/80",
  N5: "bg-green-500 hover:bg-green-600 text-white",
  N4: "bg-blue-500 hover:bg-blue-600 text-white",
  N3: "bg-yellow-500 hover:bg-yellow-600 text-white",
  N2: "bg-orange-500 hover:bg-orange-600 text-white",
  N1: "bg-red-500 hover:bg-red-600 text-white"
};

const NewsFilters = ({
  selectedLevel,
  selectedCategory,
  onLevelChange,
  onCategoryChange
}: NewsFiltersProps) => {
  return (
    <div className="space-y-6 p-4 bg-card rounded-lg border">
      <div>
        <h3 className="font-semibold mb-3 text-foreground">Cấp độ JLPT</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Button
              key={level}
              size="sm"
              variant={selectedLevel === level ? "default" : "outline"}
              className={selectedLevel === level ? levelColorMap[level] : ""}
              onClick={() => onLevelChange(level)}
            >
              {level === "All" ? "Tất cả" : level}
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3 text-foreground">Danh mục</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
            >
              {category === "All" ? "Tất cả" : category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFilters;
