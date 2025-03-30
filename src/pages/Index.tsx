
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Book, Users, HandshakeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import ArticleCard from '@/components/ArticleCard';
import YouTubePlayer from '@/components/YouTubePlayer';
import TransitionWrapper from '@/components/TransitionWrapper';
import useYoutubeData from '@/hooks/useYoutubeData';
import { MOCK_ARTICLES, SITE_NAME } from '@/utils/constants';

const Index = () => {
  const { episodes, loading } = useYoutubeData();
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  
  const handlePlayLatest = () => {
    if (episodes.length > 0) {
      setIsPlayerOpen(true);
    }
  };

  return (
    <>
      <HeroSection onPlay={handlePlayLatest} />
      
      <FeaturedSection episodes={episodes} />
      
      {/* Articles Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <TransitionWrapper>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-3xl font-display font-bold">Articles</h2>
              <Link 
                to="/articles" 
                className="text-primary hover:text-primary/80 transition-colors mt-2 md:mt-0"
              >
                View all articles →
              </Link>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_ARTICLES.slice(0, 3).map((article, index) => (
              <TransitionWrapper key={article.id} delay={index * 100}>
                <ArticleCard article={article} />
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto relative">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-3xl font-display font-bold text-center mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
              <Button asChild size="lg" className="h-auto py-4 gap-3 flex-col">
                <Link to="/episodes">
                  <Headphones className="w-6 h-6" />
                  <span>Episodes</span>
                </Link>
              </Button>
              
              <Button asChild size="lg" className="h-auto py-4 gap-3 flex-col">
                <Link to="/articles">
                  <Book className="w-6 h-6" />
                  <span>Articles</span>
                </Link>
              </Button>
              
              <Button asChild size="lg" className="h-auto py-4 gap-3 flex-col">
                <Link to="/advertise">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <path d="M16 16.5v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1" />
                    <rect width="20" height="12" x="2" y="4" rx="2" />
                    <path d="M6 12v2" />
                    <path d="M18 12v2" />
                    <path d="M12 4v2" />
                    <path d="M8 4v2" />
                    <path d="M16 4v2" />
                    <path d="M8 16.5V18" />
                    <path d="M16 16.5V18" />
                  </svg>
                  <span>Partners</span>
                </Link>
              </Button>
              
              <Button asChild size="lg" className="h-auto py-4 gap-3 flex-col">
                <Link to="/suggest-guest">
                  <Users className="w-6 h-6" />
                  <span>Suggest Guests</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Player Dialog */}
      <Dialog open={isPlayerOpen} onOpenChange={setIsPlayerOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background/95 backdrop-blur-lg">
          {episodes.length > 0 && (
            <YouTubePlayer
              videoId={episodes[0].videoId}
              title={episodes[0].title}
              autoplay={true}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
