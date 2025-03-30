import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ArticleCard from '@/components/ArticleCard';
import TransitionWrapper from '@/components/TransitionWrapper';
import { MOCK_ARTICLES } from '@/utils/constants';
import { Card, CardContent } from '@/components/ui/card';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter articles based on search
  const filteredArticles = MOCK_ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      <section className="pt-16 pb-8 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <TransitionWrapper>
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-3xl font-display font-bold">Articles</h1>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TransitionWrapper delay={100} className="md:col-span-1">
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 sticky top-20">
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
                    <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Categories</h3>
                    <ul className="space-y-1.5">
                      {Array.from(new Set(MOCK_ARTICLES.map(article => article.category))).map((category, index) => (
                        <li key={index}>
                          <button 
                            onClick={() => setSearchQuery(category)}
                            className={`text-sm hover:text-primary transition-colors ${searchQuery === category ? 'text-primary font-medium' : 'text-foreground'}`}
                          >
                            {category}
                          </button>
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
