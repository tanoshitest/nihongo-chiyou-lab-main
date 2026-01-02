import Layout from "@/components/Layout";
import NewsCard from "@/components/news/NewsCard";
import { articles } from "@/data/newsData";
import { Newspaper } from "lucide-react";

const News = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Tin tức tiếng Nhật
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Đọc tin tức bằng tiếng Nhật với furigana và bản dịch. Nhấp vào các từ được 
              đánh dấu để xem nghĩa và lưu vào flashcard.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Không có bài viết nào.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News;
