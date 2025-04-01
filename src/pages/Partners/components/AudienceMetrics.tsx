
import React from 'react';
import { BarChart3, PlayCircle, Eye, Video, BarChart2, Youtube, Instagram, Twitter, Linkedin, Users } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AudienceMetrics = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-bold text-center">Audience Metrics</h2>
          </div>
        </TransitionWrapper>
        
        <TransitionWrapper delay={100}>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our growing audience delivers impressive engagement metrics that drive results for our partners.
          </p>
        </TransitionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <TransitionWrapper delay={100}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">Social Media Following</CardTitle>
                  <div className="flex space-x-1">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <CardDescription>Combined followers across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">370K+</div>
                <p className="text-xs text-primary/80">+8% from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">YouTube Subscribers</CardTitle>
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
                <CardDescription>Growing community of engaged viewers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">155K+</div>
                <p className="text-xs text-primary/80">+12% from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={300}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">Total Viewers</CardTitle>
                  <Users className="w-6 h-6 text-primary/80" />
                </div>
                <CardDescription>Monthly reach across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">3M+</div>
                <p className="text-xs text-primary/80">+15% from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Watch Hours",
              value: "31,000+",
              description: "Monthly watch time",
              icon: <PlayCircle className="w-10 h-10 text-primary/80" />,
              trend: "+12% from last month"
            },
            {
              title: "Views",
              value: "820,000+",
              description: "Monthly views",
              icon: <Eye className="w-10 h-10 text-primary/80" />,
              trend: "+8% from last month"
            },
            {
              title: "Videos",
              value: "124",
              description: "Total episodes",
              icon: <Video className="w-10 h-10 text-primary/80" />,
              trend: "8 new this month"
            },
            {
              title: "Engagement",
              value: "68%",
              description: "Average completion rate",
              icon: <BarChart2 className="w-10 h-10 text-primary/80" />,
              trend: "+5% from last month"
            },
          ].map((metric, index) => (
            <TransitionWrapper key={index} delay={400 + index * 100}>
              <Card className="border-white/10 overflow-hidden h-full glass-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium">{metric.title}</CardTitle>
                    {metric.icon}
                  </div>
                  <CardDescription>{metric.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <p className="text-xs text-primary/80">{metric.trend}</p>
                </CardContent>
              </Card>
            </TransitionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceMetrics;
