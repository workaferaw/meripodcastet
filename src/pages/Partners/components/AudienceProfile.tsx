
import React from 'react';
import { Users } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';

const AudienceProfile = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <TransitionWrapper>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display font-bold">Our Audience</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                The {SITE_NAME} audience consists of curious, educated professionals who value depth and nuance. They're decision-makers, early adopters, and influencers in their communities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">750K+</div>
                  <div className="text-sm text-muted-foreground">Monthly listeners</div>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">College educated</div>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">38</div>
                  <div className="text-sm text-muted-foreground">Average age</div>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Listen to entire episodes</div>
                </div>
              </div>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200}>
            <BlurImage
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
              alt="Podcast audience"
              className="rounded-xl shadow-lg"
              aspectRatio="4/3"
            />
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default AudienceProfile;
