
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, BookOpen, Briefcase, Users, PlayCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Button } from '@/components/ui/button';
import useYoutubeData from '@/hooks/useYoutubeData';
import ArticleCard from '@/components/ArticleCard';
import { MOCK_ARTICLES } from '@/utils/constants';
import YouTubePlayer from '@/components/YouTubePlayer';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const { episodes, loading } = useYoutubeData();
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayLatest = () => {
    setIsPlayerOpen(true);
  };

  return (
    <>
      <HeroSection onPlay={handlePlayLatest} />
      
      {/* Featured Episodes Section */}
      <FeaturedSection episodes={episodes} />
      
      {/* CTA Cards Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-8">Explore More</h2>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TransitionWrapper delay={100}>
              <Button
                asChild
                variant="outline"
                className="glass-card h-auto text-lg py-6 flex gap-3"
                size="lg"
              >
                <Link to="/episodes" className="flex flex-col items-center space-y-4">
                  <Headphones className="w-8 h-8 text-primary" />
                  <span>Episodes</span>
                </Link>
              </Button>
            </TransitionWrapper>
            
            <TransitionWrapper delay={200}>
              <Button
                asChild
                variant="outline"
                className="glass-card h-auto text-lg py-6 flex gap-3"
                size="lg"
              >
                <Link to="/articles" className="flex flex-col items-center space-y-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <span>Articles</span>
                </Link>
              </Button>
            </TransitionWrapper>
            
            <TransitionWrapper delay={300}>
              <Button
                asChild
                variant="outline"
                className="glass-card h-auto text-lg py-6 flex gap-3"
                size="lg"
              >
                <Link to="/advertise" className="flex flex-col items-center space-y-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <span>Partners</span>
                </Link>
              </Button>
            </TransitionWrapper>
            
            <TransitionWrapper delay={400}>
              <Button
                asChild
                variant="outline"
                className="glass-card h-auto text-lg py-6 flex gap-3"
                size="lg"
              >
                <Link to="/suggest-guest" className="flex flex-col items-center space-y-4">
                  <Users className="w-8 h-8 text-primary" />
                  <span>Suggest Guests</span>
                </Link>
              </Button>
            </TransitionWrapper>
          </div>
        </div>
      </section>
      
      {/* Recent Articles Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <TransitionWrapper>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-3xl font-display font-bold">Recent Articles</h2>
              <a 
                href="/articles" 
                className="text-primary hover:text-primary/80 transition-colors mt-2 md:mt-0"
              >
                View all articles →
              </a>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_ARTICLES.slice(0, 3).map((article, index) => (
              <TransitionWrapper key={article.id} delay={index * 100}>
                <ArticleCard article={article} />
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video player dialog */}
      <Dialog open={isPlayerOpen} onOpenChange={setIsPlayerOpen}>
        <DialogContent className="sm:max-w-4xl">
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
