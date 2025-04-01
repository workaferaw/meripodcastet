import React, { useState } from "react";
import { Search, ArrowRight, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import ArticleCard from "@/components/ArticleCard";
import TransitionWrapper from "@/components/TransitionWrapper";
import { MOCK_ARTICLES } from "@/utils/constants";
import { formatDate } from "@/utils/formatDate";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Filter articles based on search query
  const filteredArticles = MOCK_ARTICLES.filter((article) => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort articles by date
  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Separate articles for main grid and dialog
  const gridArticles = sortedArticles;
  const dialogArticles = sortedArticles.slice(10, 16); // Show different articles in dialog

  // Function to determine article size based on index
  const getArticleSize = (index: number) => {
    // First row: full width (featured)
    // Second and third rows: two equal cards
    // Fourth and fifth rows: three equal cards
    if (index < 2) return "col-span-1 md:col-span-2"; // Two equal cards
    if (index < 6) return "col-span-1 md:col-span-1"; // Three equal cards
    return "col-span-1 md:col-span-1"; // Default to single column
  };

  return (
    <TransitionWrapper>
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 lg:px-12 py-12">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Banner */}
        <div className="mb-12">
          <div className="relative group overflow-hidden rounded-3xl bg-card border transition-all duration-300 hover:shadow-lg">
            <div className="aspect-[4/1] relative bg-background dark:bg-slate-950">
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Articles
                </span>
                <h2 className="text-2xl font-bold max-w-3xl">
                  Discover inspiring stories of visionary entrepreneurs, their bold ideas, and lasting impact.
                </h2>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="absolute bottom-4 right-4 p-4 bg-primary/10 backdrop-blur-sm rounded-full group-hover:bg-primary/20 transition-colors">
                    <Plus className="w-6 h-6 text-primary" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">More Articles</h3>
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                      {sortedArticles.map((article, index) => (
                        <React.Fragment key={article.id}>
                          <Link 
                            to={`/articles/${article.slug}`}
                            className="flex gap-4 group"
                          >
                            <img 
                              src={article.featuredImage}
                              alt={article.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex flex-col justify-center">
                              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {formatDate(article.publishedAt)}
                              </p>
                            </div>
                          </Link>
                          {index < sortedArticles.length - 1 && (
                            <div className="border-t border-border" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-10">
          {/* Two-column sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gridArticles.slice(0, 2).map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.slug}`}
                className="block"
              >
                <div className="h-[550px]">
                  <ArticleCard 
                    article={article} 
                    className="h-full"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gridArticles.slice(2, 4).map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.slug}`}
                className="block"
              >
                <div className="h-[550px]">
                  <ArticleCard 
                    article={article} 
                    className="h-full"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Three-column sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gridArticles.slice(4, 7).map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.slug}`}
                className="block"
              >
                <div className="h-[450px]">
                  <ArticleCard 
                    article={article} 
                    className="h-full"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gridArticles.slice(7).map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.slug}`}
                className="block"
              >
                <div className="h-[450px]">
                  <ArticleCard 
                    article={article} 
                    className="h-full"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* No Results Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </TransitionWrapper>
  );
};

export default Articles;
