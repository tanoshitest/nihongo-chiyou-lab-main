import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Article, levelColors } from "@/data/newsData";
import { Calendar, Play } from "lucide-react";

interface NewsCardProps {
  article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link to={`/news/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full bg-card">
        <div className="aspect-video relative overflow-hidden group">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Video Play Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            </div>
          </div>
          <Badge 
            className={`absolute top-3 right-3 ${levelColors[article.level]} text-white border-0`}
          >
            {article.level}
          </Badge>
          {/* Video indicator */}
          <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <Play className="w-3 h-3" />
            Video
          </div>
        </div>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2 text-xs">
            {article.category}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
            {article.title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.date).toLocaleDateString("vi-VN")}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
