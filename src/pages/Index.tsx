
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import HeroSection from '@/components/HeroSection';
import YouTubePlayer from '@/components/YouTubePlayer';
import useYoutubeData from '@/hooks/useYoutubeData';

const Index = () => {
  const { episodes } = useYoutubeData();
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayLatest = () => {
    setIsPlayerOpen(true);
  };

  return (
    <>
      <HeroSection onPlay={handlePlayLatest} />
      
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
