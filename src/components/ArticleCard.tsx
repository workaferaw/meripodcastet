
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Article } from '@/types';
import BlurImage from '@/components/ui/BlurImage';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/animations';

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
    <Link 
      to={`/articles/${article.slug}`}
      className={cn(
        'group block overflow-hidden transition-all duration-300 hover:shadow-lg',
        isFeatured ? 'glass-panel rounded-xl' : 'glass-card rounded-lg',
        className
      )}
    >
      <div className={cn(
        'relative overflow-hidden',
        isFeatured ? 'aspect-[21/9]' : 'aspect-[16/9]'
      )}>
        <BlurImage
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 left-3">
          <Badge variant="default" className="bg-accent/90 backdrop-blur-sm text-accent-foreground">
            {article.category}
          </Badge>
        </div>
      </div>
      
      <div className={cn(
        'p-4',
        isFeatured && 'p-6'
      )}>
        <h3 className={cn(
          'font-display font-medium line-clamp-2 transition-colors',
          isFeatured ? 'text-xl mb-2' : 'text-lg mb-2',
          'group-hover:text-primary'
        )}>
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.excerpt}</p>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <time dateTime={article.publishedAt} className="mr-4">{formatDate(article.publishedAt)}</time>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
