import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
          <Link to="/blog">
            <Button>Quay lại Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 4);

  return (
    <Layout>
      <div className="container py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Quay lại Blog
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content - Left Side */}
          <article className="flex-1 min-w-0">
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-xl mb-6">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("vi-VN")}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-ul:text-foreground/90
                prose-li:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar - Related Posts - Right Side */}
          <aside className="md:w-80 flex-shrink-0">
            <div className="md:sticky md:top-24">
              <h3 className="text-xl font-bold mb-4 text-foreground">Bài viết liên quan</h3>
              <div className="flex flex-col gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="flex gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      loading="lazy"
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-medium text-foreground line-clamp-2 text-sm hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
