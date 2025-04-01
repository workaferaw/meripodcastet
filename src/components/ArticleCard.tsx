import React from 'react';
import { cn } from '@/lib/utils';
import { Article } from '@/types';
import { formatDate } from '@/utils/formatDate';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured';
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'default',
  className,
}) => {
  const isFeatured = variant === 'featured';
  
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-3xl bg-card border transition-all duration-300 hover:shadow-lg h-full flex flex-col',
      className
    )}>
      <div className="aspect-[4/3] relative flex-shrink-0">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {article.category}
        </span>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex-shrink-0">
          {article.title || 'Untitled Article'}
        </h3>
        <p className="text-sm text-muted-foreground mt-auto">{formatDate(article.publishedAt)}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
