
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EpisodeCard from '@/components/EpisodeCard';
import TransitionWrapper from '@/components/TransitionWrapper';
import { findGuestById } from '@/utils/guestData';
import { MOCK_EPISODES } from '@/utils/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const GuestDetail = () => {
  const { guestId } = useParams<{ guestId: string }>();
  const navigate = useNavigate();
  
  const guest = findGuestById(guestId || "");
  
  if (!guest) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Guest Not Found</h1>
        <p className="text-muted-foreground mb-6">The guest you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/guests')}>Back to Guests</Button>
      </div>
    );
  }
  
  // Find all episodes this guest has appeared in
  const guestEpisodes = MOCK_EPISODES.filter(episode => 
    episode.guestIds.includes(guest.id)
  );
  
  const initials = guest.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
  
  return (
    <>
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-6"
              onClick={() => navigate('/guests')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to guests
            </Button>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <TransitionWrapper className="md:col-span-4 lg:col-span-3">
              <div className="glass-card rounded-lg p-6 text-center md:text-left md:sticky md:top-24">
                <Avatar className="h-28 w-28 mx-auto md:mx-0 mb-4">
                  <AvatarImage src={guest.avatarUrl} alt={guest.name} />
                  <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
                </Avatar>
                
                <h1 className="text-2xl font-display font-bold mb-2">{guest.name}</h1>
                
                {guest.socialLinks && (
                  <div className="flex space-x-3 justify-center md:justify-start mb-6">
                    {guest.socialLinks.twitter && (
                      <a 
                        href={guest.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {guest.socialLinks.linkedin && (
                      <a 
                        href={guest.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {guest.socialLinks.instagram && (
                      <a 
                        href={guest.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {guest.socialLinks.website && (
                      <a 
                        href={guest.socialLinks.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Website"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
                
                <div className="border-t border-border pt-4 mt-4">
                  <div className="text-sm font-medium">
                    <span className="text-muted-foreground">Episodes:</span> {guestEpisodes.length}
                  </div>
                </div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper delay={100} className="md:col-span-8 lg:col-span-9">
              <div className="glass-card rounded-lg p-6 mb-8">
                <h2 className="text-xl font-display font-medium mb-4">About {guest.name}</h2>
                <div className="prose prose-invert max-w-none">
                  <p>{guest.bio}</p>
                </div>
              </div>
              
              {guestEpisodes.length > 0 && (
                <div>
                  <h2 className="text-xl font-display font-medium mb-6">Episodes featuring {guest.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guestEpisodes.map((episode, index) => (
                      <EpisodeCard 
                        key={episode.id}
                        episode={episode}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TransitionWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuestDetail;
