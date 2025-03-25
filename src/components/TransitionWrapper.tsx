
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/hooks/useScrollReveal';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | 'blur-in';

interface TransitionWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'slide-down': 'animate-slide-down',
  'scale-in': 'animate-scale-in',
  'blur-in': 'animate-blur-in',
};

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    delay
  });

  return (
    <div
      // @ts-ignore - we know this is an HTMLDivElement
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
