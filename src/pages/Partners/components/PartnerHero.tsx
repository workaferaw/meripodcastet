
import React from 'react';
import { Briefcase } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';

const PartnerHero = () => {
  return (
    <section className="pt-20 pb-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <div className="flex items-center justify-center mb-2">
            <Briefcase className="w-8 h-8 text-primary mr-2" />
            <h1 className="text-4xl font-display font-bold text-center">Partner With Us</h1>
          </div>
        </TransitionWrapper>
        
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
