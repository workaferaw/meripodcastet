
import React from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/utils/constants';
import TransitionWrapper from './TransitionWrapper';

interface HeroSectionProps {
  className?: string;
  onPlay?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className, onPlay }) => {
  return (
    <section className={cn(
      'relative min-h-[90vh] flex items-center justify-center overflow-hidden',
      className
    )}>
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <TransitionWrapper animation="fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Conversations That Expand Your Perspective
          </h1>
        </TransitionWrapper>
        
        <TransitionWrapper animation="fade-in" delay={200}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {SITE_NAME} brings you thought-provoking discussions with leading thinkers, creators, and innovators from around the world.
          </p>
        </TransitionWrapper>
        
        <TransitionWrapper animation="fade-in" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="group"
              onClick={onPlay}
            >
              <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Listen Latest Episode
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card"
              asChild
            >
              <a href="#episodes">Browse All Episodes</a>
            </Button>
          </div>
        </TransitionWrapper>
        
        <TransitionWrapper animation="fade-in" delay={600}>
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <p className="text-sm font-medium text-muted-foreground">AVAILABLE ON</p>
            
            <div className="flex items-center gap-8">
              <div className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M15.148,18.031c-1.395-0.254-1.584-0.293-1.656-0.305 c-0.203-0.031-0.385,0.115-0.433,0.309c-0.094,0.375-0.656,1.633-1.716,1.633c-0.26,0-0.52-0.053-0.78-0.15 c-0.953-0.354-1.682-1.396-1.578-2.385c0.104-0.989,1.094-2.865,1.302-3.177c0.208-0.312,0.646-0.208,0.724-0.052 c0.078,0.156,0.442,0.83,0.468,0.883c0.026,0.052,0.078,0.208-0.104,0.312c-0.182,0.104-0.442,0.312-0.624,0.468 c-0.182,0.156-0.182,0.312-0.026,0.468c0.156,0.156,0.624,0.883,1.352,1.395c0.911,0.625,1.673,0.873,1.935,0.976 c0.262,0.104,0.442,0.052,0.624-0.104c0.182-0.156,0.78-0.883,0.988-1.186c0.208-0.303,0.39-0.254,0.65-0.15 c0.26,0.104,1.682,0.779,1.969,0.935c0.286,0.156,0.468,0.234,0.546,0.338c0.078,0.104,0.078,0.624-0.156,1.239 C16.945,17.692,16.543,18.284,15.148,18.031z" />
                </svg>
                Apple Podcasts
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M16.902,17.279 c-0.243,0.397-0.761,0.521-1.157,0.278c-3.169-1.938-7.15-2.377-11.831-1.303c-0.453,0.105-0.904-0.175-1.009-0.628 c-0.104-0.453,0.176-0.904,0.629-1.009c5.131-1.175,9.57-0.669,13.164,1.506C17.021,16.366,17.145,16.883,16.902,17.279z M18.32,14.041c-0.304,0.495-0.952,0.65-1.446,0.344c-3.626-2.225-9.15-2.871-13.443-1.571c-0.553,0.166-1.141-0.148-1.308-0.702 c-0.165-0.553,0.149-1.139,0.702-1.306c4.904-1.489,11.014-0.768,15.204,1.789C18.47,12.9,18.623,13.547,18.32,14.041z M18.433,10.701c-4.353-2.587-11.533-2.827-15.695-1.563c-0.664,0.202-1.367-0.174-1.568-0.839c-0.201-0.663,0.176-1.365,0.839-1.567 c4.791-1.455,12.754-1.174,17.783,1.807c0.607,0.359,0.805,1.144,0.446,1.751C19.879,10.864,19.044,11.042,18.433,10.701z" />
                </svg>
                Spotify
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M18.309,12.309L10.23,17.237 c-0.184,0.113-0.418-0.022-0.418-0.242V7.005c0-0.219,0.234-0.355,0.418-0.242l8.079,4.928 C18.462,11.811,18.462,12.189,18.309,12.309z" />
                </svg>
                YouTube
              </div>
            </div>
          </div>
        </TransitionWrapper>
      </div>
      
      {/* Scroll indicator - only arrow, no text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
