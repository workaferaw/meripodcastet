
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Search, Tag, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import EpisodeCard from '@/components/EpisodeCard';
import YouTubePlayer from '@/components/YouTubePlayer';
import TransitionWrapper from '@/components/TransitionWrapper';
import useYoutubeData from '@/hooks/useYoutubeData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Episode } from '@/types';
import { Button } from '@/components/ui/button';
import { findGuestsByIds } from '@/utils/guestData';
import GuestCard from '@/components/GuestCard';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Episodes = () => {
  const { 
    episodes, 
    loading, 
    categories, 
    selectedCategory, 
    setSelectedCategory 
  } = useYoutubeData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [browseBy, setBrowseBy] = useState<'season' | 'sector'>('sector');
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // For demo purposes, let's create some season options
  const seasons = ["Season 1", "Season 2", "Season 3", "Season 4"];
  
  // Filter episodes based on search
  const filteredEpisodes = episodes.filter(episode => 
    episode.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    episode.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  };
  
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  
  const handleSeasonClick = (season: string) => {
    if (selectedSeason === season) {
      setSelectedSeason(null);
    } else {
      setSelectedSeason(null); // In a real app, we would filter by season here
      setSelectedSeason(season);
    }
  };
  
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper delay={200} className="max-w-md mx-auto relative mb-8">
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
          
          <TransitionWrapper delay={300}>
            <div className="max-w-3xl mx-auto mb-6">
              <Tabs defaultValue="sector" className="w-full" onValueChange={(value) => setBrowseBy(value as 'season' | 'sector')}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="sector">Browse by Sector</TabsTrigger>
                  <TabsTrigger value="season">Browse by Season</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sector">
                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <Button 
                          variant={selectedCategory === null ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(null)}
                          className="w-full"
                        >
                          All Episodes
                        </Button>
                        {categories.map(category => (
                          <Button 
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleCategoryClick(category)}
                            className="w-full"
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="season">
                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <Button 
                          variant={selectedSeason === null ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSeason(null)}
                          className="w-full"
                        >
                          All Seasons
                        </Button>
                        {seasons.map(season => (
                          <Button 
                            key={season}
                            variant={selectedSeason === season ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleSeasonClick(season)}
                            className="w-full"
                          >
                            {season}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
            <div className="text-center py-12 glass-card rounded-lg">
              <h3 className="text-xl font-medium mb-2">No episodes found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria or clear the category filter.</p>
              {selectedCategory && (
                <Button onClick={() => setSelectedCategory(null)}>Clear Category Filter</Button>
              )}
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
                <p className="text-muted-foreground mb-4">{selectedEpisode.description}</p>
                
                {selectedEpisode.guestIds && selectedEpisode.guestIds.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Featured Guests
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {findGuestsByIds(selectedEpisode.guestIds).map(guest => (
                        <GuestCard 
                          key={guest.id} 
                          guest={guest} 
                          compact 
                          className="bg-muted/20"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Episodes;
