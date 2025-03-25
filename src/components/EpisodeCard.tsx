
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Episode } from '@/types';
import BlurImage from '@/components/ui/BlurImage';
import Badge from '@/components/ui/Badge';
import { formatDate, formatDuration, formatViews } from '@/utils/animations';

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
  onClick?: () => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  index = 0,
  variant = 'default',
  className,
  onClick,
}) => {
  const isFeatured = variant === 'featured';
  const isMinimal = variant === 'minimal';
  
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div 
      className={cn(
        'group overflow-hidden transition-all duration-300',
        isFeatured ? 'glass-panel rounded-xl' : 'glass-card rounded-lg',
        className
      )}
      onClick={handleClick}
    >
      <div className={cn(
        'relative overflow-hidden',
        isFeatured ? 'aspect-[16/9]' : isMinimal ? 'aspect-[3/2]' : 'aspect-[16/9]'
      )}>
        <BlurImage
          src={episode.thumbnailUrl}
          alt={episode.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-white/20 backdrop-blur-sm p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <PlayCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {episode.duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{formatDuration(episode.duration)}</span>
          </div>
        )}
        
        {index === 0 && !isMinimal && (
          <div className="absolute top-3 left-3">
            <Badge variant="default" size="sm" className="bg-primary/90 backdrop-blur-sm">
              Latest Episode
            </Badge>
          </div>
        )}
      </div>
      
      <div className={cn(
        'p-4',
        isFeatured && 'p-6'
      )}>
        <h3 className={cn(
          'font-display font-medium line-clamp-2 transition-colors',
          isFeatured ? 'text-xl mb-2' : isMinimal ? 'text-sm mb-1' : 'text-lg mb-2',
          'group-hover:text-primary'
        )}>
          {episode.title}
        </h3>
        
        {!isMinimal && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{episode.description}</p>
        )}
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <time dateTime={episode.publishedAt}>{formatDate(episode.publishedAt)}</time>
          
          {episode.views && !isMinimal && (
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{formatViews(episode.views)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
