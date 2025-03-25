
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { MOCK_ARTICLES } from '@/utils/constants';
import { formatDate } from '@/utils/animations';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import Badge from '@/components/ui/Badge';
import ArticleCard from '@/components/ArticleCard';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = MOCK_ARTICLES.find(article => article.slug === slug);
  
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
    <>
      <article className="pt-20">
        {/* Header */}
        <div className="container mx-auto px-4 max-w-4xl">
          <TransitionWrapper>
            <Link 
              to="/articles" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Link>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <Badge className="mb-4">{article.category}</Badge>
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
        </div>
        
        {/* Featured Image */}
        <TransitionWrapper delay={300} className="mb-12">
          <BlurImage
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-[30vh] md:h-[50vh] object-cover"
          />
        </TransitionWrapper>
        
        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <TransitionWrapper delay={400} className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </TransitionWrapper>
        </div>
      </article>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <TransitionWrapper>
              <h2 className="text-2xl font-display font-bold mb-8">Related Articles</h2>
            </TransitionWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <TransitionWrapper key={relatedArticle.id} delay={index * 100}>
                  <ArticleCard article={relatedArticle} />
                </TransitionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticleDetail;
