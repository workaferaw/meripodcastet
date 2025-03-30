
import React from 'react';
import { Users } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import GuestCard from '@/components/GuestCard';
import { MOCK_GUESTS } from '@/utils/guestData';

const Guests = () => {
  return (
    <>
      <section className="pt-20 pb-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">Guests</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Meet the fascinating people who've joined us on Mer Podcast.
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_GUESTS.map((guest, index) => (
              <TransitionWrapper key={guest.id} delay={index % 3 * 100}>
                <GuestCard guest={guest} />
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Guests;
