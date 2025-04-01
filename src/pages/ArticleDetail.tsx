import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_ARTICLES } from '@/utils/constants';
import { formatDate } from '@/utils/formatDate';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Copy, CopyCheck } from 'lucide-react';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = MOCK_ARTICLES.find(article => article.slug === slug);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(article?.content.replace(/<[^>]*>/g, '') || '');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article?.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, but we'll keep the button for consistency
        break;
    }
  };

  if (!article) {
    return (
      <div className="text-center py-12">
        <p className="text-base text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  // Get more articles (excluding current one)
  const moreArticles = MOCK_ARTICLES
    .filter(a => a.slug !== slug)
    .slice(0, 3);

  return (
    <TransitionWrapper>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-12 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {formatDate(article.publishedAt)}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{article.readTime} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 aspect-[21/9] relative rounded-3xl overflow-hidden">
          <img 
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share Section */}
        <div className="mb-8">
          <p className="text-sm font-semibold mb-4">Share this article</p>
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on X"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleShare('instagram')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on Instagram"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
          </div>

          {/* Copy Text Button */}
          <button
            onClick={handleCopyText}
            className="w-full max-w-xl mx-auto flex items-center justify-between px-4 py-3 border rounded-lg hover:bg-accent transition-colors mb-8"
          >
            <span className="text-sm">Copy the text of this article</span>
            {isCopied ? (
              <CopyCheck className="w-5 h-5 text-primary" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* More Articles Section */}
        <div className="border-t border-border pt-8">
          <h2 className="text-xl font-bold mb-6">More Articles</h2>
          <div className="space-y-6">
            {moreArticles.map((article, index) => (
              <React.Fragment key={article.id}>
                <Link 
                  to={`/articles/${article.slug}`}
                  className="flex gap-4 group"
                >
                  <img 
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(article.publishedAt)}
                    </p>
                  </div>
                </Link>
                {index < moreArticles.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default ArticleDetail;
