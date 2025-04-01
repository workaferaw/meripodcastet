import React, { useState } from 'react';
import { BookOpen, Search, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ArticleCard from '@/components/ArticleCard';
import TransitionWrapper from '@/components/TransitionWrapper';
import { MOCK_ARTICLES } from '@/utils/constants';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/utils/animations';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter articles based on search
  const filteredArticles = MOCK_ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort articles by date (newest first) for the recent articles list
  const recentArticles = [...MOCK_ARTICLES].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 5);
  
  return (
    <>
      <section className="pt-16 pb-8 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TransitionWrapper delay={100} className="md:col-span-1">
              <Card className="bg-card/80 backdrop-blur-sm border border-white/10 shadow-md sticky top-20">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-10 bg-background"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Recent Articles</h3>
                    <ul className="space-y-3">
                      {recentArticles.map((article) => (
                        <li key={article.id} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <Link 
                            to={`/articles/${article.slug}`}
                            className="group"
                          >
                            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {article.title}
                            </h4>
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3 mr-1" />
                              <time dateTime={article.publishedAt}>
                                {formatDate(article.publishedAt)}
                              </time>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TransitionWrapper>
            
            <TransitionWrapper delay={200} className="md:col-span-3">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12 glass-panel rounded-xl">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search query.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Featured Article */}
                  {filteredArticles.length > 0 && (
                    <ArticleCard 
                      article={filteredArticles[0]} 
                      variant="featured"
                    />
                  )}
                  
                  {/* Rest of the articles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArticles.slice(1).map((article) => (
                      <ArticleCard 
                        key={article.id} 
                        article={article}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TransitionWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
