
import React from 'react';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import TransitionWrapper from '@/components/TransitionWrapper';
import GuestCard from '@/components/GuestCard';
import { MOCK_GUESTS } from '@/utils/guestData';
import { Button } from '@/components/ui/button';

const Guests = () => {
  return (
    <>
      <section className="pt-20 pb-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground text-center mb-4 sm:mb-0">
                Meet the fascinating people who've joined us on Mer Podcast.
              </p>
              
              <Button asChild size="lg" className="flex items-center gap-2 shadow-lg">
                <Link to="/suggest-guest">
                  <UserPlus className="w-5 h-5 mr-1" />
                  Suggest a Guest
                </Link>
              </Button>
            </div>
          </TransitionWrapper>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_GUESTS.map((guest, index) => (
              <TransitionWrapper key={guest.id} delay={index % 3 * 100}>
                <GuestCard guest={guest} className="h-full" />
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Guests;
