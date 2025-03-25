
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { YOUTUBE_EMBED_BASE_URL } from '@/utils/constants';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  title,
  className,
  autoplay = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const embedUrl = `${YOUTUBE_EMBED_BASE_URL}/${videoId}?autoplay=${autoplay ? '1' : '0'}&rel=0`;

  return (
    <div className={cn(
      'relative overflow-hidden rounded-lg aspect-video w-full bg-black',
      className
    )}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      )}
      <iframe
        src={embedUrl}
        title={title || `YouTube video player for ${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default YouTubePlayer;
