
import { useEffect, useRef } from 'react';

interface AnimationObserverOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: string;
  delay?: number;
}

export const useAnimationObserver = (options: AnimationObserverOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animation = 'animate-fade-in',
    delay = 0
  } = options;
  
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              currentRef.classList.add(...animation.split(' '));
            }, delay);
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, animation, delay]);
  
  return ref;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const formatDuration = (duration: string): string => {
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  
  return `${minutes}m ${seconds}s`;
};

export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  }
  
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  
  return `${views} views`;
};
