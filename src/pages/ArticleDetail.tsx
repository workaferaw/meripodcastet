
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { MOCK_ARTICLES } from '@/utils/constants';
import { formatDate } from '@/utils/animations';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import ArticleCard from '@/components/ArticleCard';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = MOCK_ARTICLES.find(article => article.slug === slug);
  const otherArticles = MOCK_ARTICLES.filter(a => a.slug !== slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!article) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-display font-bold mb-4">Article not found</h1>
        <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/articles" 
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Articles
        </Link>
      </div>
    );
  }
  
  // Get related articles (same category, excluding current)
  const relatedArticles = MOCK_ARTICLES.filter(a => 
    a.category === article.category && a.id !== article.id
  ).slice(0, 3);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full pt-20">
        <SidebarInset>
          <article className="w-full px-4 md:px-8 pb-16">
            {/* Small screen back button */}
            <div className="md:hidden mb-6">
              <Link 
                to="/articles" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Articles
              </Link>
            </div>
            
            <TransitionWrapper delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">{article.title}</h1>
            </TransitionWrapper>
            
            <TransitionWrapper delay={200}>
              <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <span>{article.author.name}</span>
                </div>
                
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                </div>
                
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </TransitionWrapper>
            
            {/* Featured Image */}
            <TransitionWrapper delay={300} className="mb-12">
              <BlurImage
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-[30vh] md:h-[50vh] object-cover rounded-lg"
              />
            </TransitionWrapper>
            
            {/* Content */}
            <TransitionWrapper delay={400}>
              <div className="max-w-3xl mx-auto prose prose-lg">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </TransitionWrapper>
            
            {/* Related Articles (only visible on mobile) */}
            {relatedArticles.length > 0 && (
              <section className="mt-16 md:hidden">
                <TransitionWrapper>
                  <h2 className="text-2xl font-display font-bold mb-8">Related Articles</h2>
                </TransitionWrapper>
                
                <div className="grid grid-cols-1 gap-6">
                  {relatedArticles.map((relatedArticle, index) => (
                    <TransitionWrapper key={relatedArticle.id} delay={index * 100}>
                      <ArticleCard article={relatedArticle} />
                    </TransitionWrapper>
                  ))}
                </div>
              </section>
            )}
          </article>
        </SidebarInset>
        
        <Sidebar className="hidden md:flex bg-background border-l" side="right">
          <SidebarContent>
            <div className="px-4 py-4 border-b border-border">
              <Link to="/articles" className="text-lg font-semibold flex items-center text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Articles
              </Link>
            </div>
            <SidebarMenu>
              {otherArticles.map((a) => (
                <SidebarMenuItem key={a.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={a.slug === slug}
                    tooltip={a.title}
                  >
                    <Link to={`/articles/${a.slug}`} className="flex items-center justify-between">
                      <span className="truncate">{a.title}</span>
                      <ChevronRight className="h-4 w-4 ml-2 flex-shrink-0" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

export default ArticleDetail;
