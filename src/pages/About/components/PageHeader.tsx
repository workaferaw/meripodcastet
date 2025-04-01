
import React from 'react';
import TransitionWrapper from '@/components/TransitionWrapper';
import { SITE_NAME } from '@/utils/constants';

const PageHeader = () => {
  return (
    <section className="pt-20 pb-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <TransitionWrapper delay={100}>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Our story, mission, and the team behind {SITE_NAME}.
          </p>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default PageHeader;
