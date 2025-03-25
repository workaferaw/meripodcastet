
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Mic, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import YouTubePlayer from '@/components/YouTubePlayer';
import TransitionWrapper from '@/components/TransitionWrapper';
import useYoutubeData from '@/hooks/useYoutubeData';
import { MOCK_ARTICLES } from '@/utils/constants';

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
              <h2 className="text-3xl font-display font-bold">Latest Articles</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Headphones className="w-8 h-8 text-primary" />,
                title: "Listen",
                description: "Stream our episodes on your favorite platform",
                link: "/episodes",
                linkText: "Browse Episodes"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-primary" />,
                title: "Read",
                description: "Dive deeper with our insightful articles",
                link: "/articles",
                linkText: "Read Articles"
              },
              {
                icon: <Mic className="w-8 h-8 text-primary" />,
                title: "Advertise",
                description: "Reach our engaged audience with your brand",
                link: "/advertise",
                linkText: "Learn More"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Suggest",
                description: "Know someone who would be a great guest?",
                link: "/suggest-guest",
                linkText: "Suggest a Guest"
              }
            ].map((item, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className="glass-card p-6 rounded-xl h-full flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-display font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                  <Link to={item.link} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    {item.linkText} <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </TransitionWrapper>
            ))}
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
