
import React from 'react';
import { BarChart4, Users, HeadphonesIcon } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Card, CardContent } from '@/components/ui/card';

const AudienceMetrics = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Audience Metrics</h2>
        </TransitionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TransitionWrapper delay={100}>
            <Card className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-display font-medium ml-4">Listener Growth</h3>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-primary">1.2M+</p>
                <p className="text-muted-foreground mt-2">Monthly active listeners across platforms</p>
              </div>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200}>
            <Card className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-display font-medium ml-4">Demographics</h3>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold text-primary">78%</p>
                <p className="text-muted-foreground mt-2">Educated professionals aged 25-45</p>
              </div>
            </Card>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default AudienceMetrics;
