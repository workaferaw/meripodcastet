
import React, { useState } from 'react';
import { Headphones, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import EpisodeCard from '@/components/EpisodeCard';
import YouTubePlayer from '@/components/YouTubePlayer';
import TransitionWrapper from '@/components/TransitionWrapper';
import useYoutubeData from '@/hooks/useYoutubeData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Episode } from '@/types';

const Episodes = () => {
  const { episodes, loading } = useYoutubeData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  
  // Filter episodes based on search
  const filteredEpisodes = episodes.filter(episode => 
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    episode.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  };
  
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <Headphones className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">Episodes</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Explore our collection of thought-provoking conversations with inspiring guests.
            </p>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200} className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search episodes..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </TransitionWrapper>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
          ) : filteredEpisodes.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No episodes found</h3>
              <p className="text-muted-foreground">Try adjusting your search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEpisodes.map((episode, index) => (
                <TransitionWrapper key={episode.id} delay={index % 3 * 100}>
                  <EpisodeCard 
                    episode={episode} 
                    index={index}
                    onClick={() => handleEpisodeClick(episode)}
                  />
                </TransitionWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Episode Player Dialog */}
      <Dialog open={!!selectedEpisode} onOpenChange={(open) => !open && setSelectedEpisode(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background/95 backdrop-blur-lg">
          {selectedEpisode && (
            <>
              <YouTubePlayer
                videoId={selectedEpisode.videoId}
                title={selectedEpisode.title}
                autoplay={true}
              />
              <div className="p-4">
                <h2 className="text-xl font-display font-medium mb-2">{selectedEpisode.title}</h2>
                <p className="text-muted-foreground">{selectedEpisode.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Episodes;
