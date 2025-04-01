
import React from 'react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';

const OurStorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-0">
        <TransitionWrapper>
          <div className="w-full mb-10">
            <BlurImage
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
              alt="Studio setup"
              className="w-full"
              aspectRatio="21/9"
            />
          </div>
        </TransitionWrapper>
          
        <TransitionWrapper delay={200}>
          <div className="px-4 md:px-8 space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              {SITE_NAME} began in 2018 as a small passion project between two friends who loved deep conversations and wanted to share them with the world.
            </p>
            <p className="text-lg text-muted-foreground">
              What started in a makeshift closet recording studio has grown into a globally recognized podcast with listeners in over 150 countries and guests ranging from Nobel laureates to cultural innovators.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission remains the same as it was on day one: to foster meaningful conversations that expand perspectives and deepen understanding of our complex world.
            </p>
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default OurStorySection;
