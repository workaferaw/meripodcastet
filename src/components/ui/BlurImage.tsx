
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = '16/9',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div 
      className={cn(
        'overflow-hidden relative',
        className
      )}
      style={{ aspectRatio }}
    >
      <div
        className={cn(
          'absolute inset-0 bg-neutral-100 animate-pulse',
          isLoaded && 'animate-none'
        )}
      />
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={cn(
          'w-full h-full object-cover transition-all duration-500',
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-xl'
        )}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
