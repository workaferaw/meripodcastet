
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
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted z-0" />
      
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
            
            {['Apple Podcasts', 'Spotify', 'Google Podcasts', 'YouTube'].map((platform) => (
              <div 
                key={platform} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm flex items-center"
              >
                {platform}
              </div>
            ))}
          </div>
        </TransitionWrapper>
      </div>
      
      {/* Scroll indicator - replaced with down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
