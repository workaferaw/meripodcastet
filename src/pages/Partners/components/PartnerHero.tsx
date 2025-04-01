
import React from 'react';
import TransitionWrapper from '@/components/TransitionWrapper';

const PartnerHero = () => {
  return (
    <section className="pt-20 pb-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <TransitionWrapper delay={100}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Reach an engaged, curious audience of thinkers and innovators.
          </p>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default PartnerHero;
