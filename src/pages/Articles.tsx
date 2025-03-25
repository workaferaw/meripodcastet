import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ArticleCard from '@/components/ArticleCard';
import TransitionWrapper from '@/components/TransitionWrapper';
import { MOCK_ARTICLES } from '@/utils/constants';

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
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">Articles</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Dive deeper into the topics we explore with in-depth articles and analysis.
            </p>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200} className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </TransitionWrapper>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search query.</p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              <TransitionWrapper className="mb-12">
                <ArticleCard 
                  article={filteredArticles[0]} 
                  variant="featured"
                />
              </TransitionWrapper>
              
              {/* Rest of the articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.slice(1).map((article, index) => (
                  <TransitionWrapper key={article.id} delay={index % 3 * 100}>
                    <ArticleCard article={article} />
                  </TransitionWrapper>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Articles;
