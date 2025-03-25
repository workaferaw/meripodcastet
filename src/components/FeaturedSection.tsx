
import React, { useState } from 'react';
import { Episode } from '@/types';
import EpisodeCard from './EpisodeCard';
import YouTubePlayer from './YouTubePlayer';
import TransitionWrapper from './TransitionWrapper';

interface FeaturedSectionProps {
  episodes: Episode[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ episodes }) => {
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(episodes[0] || null);
  
  if (episodes.length === 0) {
    return null;
  }

  return (
    <section id="episodes" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <TransitionWrapper>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-3xl font-display font-bold">Episodes</h2>
            <a 
              href="/episodes" 
              className="text-primary hover:text-primary/80 transition-colors mt-2 md:mt-0"
            >
              View all episodes →
            </a>
          </div>
        </TransitionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main video player */}
          <TransitionWrapper className="lg:col-span-2" delay={100}>
            {activeEpisode && (
              <div className="space-y-6">
                <YouTubePlayer 
                  videoId={activeEpisode.videoId}
                  title={activeEpisode.title}
                  className="rounded-xl overflow-hidden shadow-xl"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-medium">{activeEpisode.title}</h3>
                  <p className="text-muted-foreground">{activeEpisode.description}</p>
                </div>
              </div>
            )}
          </TransitionWrapper>

          {/* Episode list */}
          <TransitionWrapper className="space-y-4" delay={200}>
            <h3 className="text-lg font-display font-medium">Recent Episodes</h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 mask-fade-out">
              {episodes.slice(0, 5).map((episode, index) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  index={index}
                  variant="minimal"
                  className={`cursor-pointer ${activeEpisode?.id === episode.id ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveEpisode(episode)}
                />
              ))}
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
