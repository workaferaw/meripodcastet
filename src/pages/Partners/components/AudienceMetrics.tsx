
import React from 'react';
import { BarChart3, PlayCircle, Eye, Video, BarChart2 } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// Sample metrics data
const viewsData = [
  { month: 'Jan', views: 24000 },
  { month: 'Feb', views: 28500 },
  { month: 'Mar', views: 32000 },
  { month: 'Apr', views: 38000 },
  { month: 'May', views: 42000 },
  { month: 'Jun', views: 48000 },
  { month: 'Jul', views: 53000 },
  { month: 'Aug', views: 61000 },
  { month: 'Sep', views: 67000 },
  { month: 'Oct', views: 72000 },
  { month: 'Nov', views: 76000 },
  { month: 'Dec', views: 82000 },
];

const watchTimeData = [
  { month: 'Jan', hours: 8200 },
  { month: 'Feb', hours: 9500 },
  { month: 'Mar', hours: 11000 },
  { month: 'Apr', hours: 12500 },
  { month: 'May', hours: 14800 },
  { month: 'Jun', hours: 16200 },
  { month: 'Jul', hours: 18500 },
  { month: 'Aug', hours: 21000 },
  { month: 'Sep', hours: 23500 },
  { month: 'Oct', hours: 26000 },
  { month: 'Nov', hours: 28500 },
  { month: 'Dec', hours: 31000 },
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
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
            <TransitionWrapper key={index} delay={index * 100}>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TransitionWrapper delay={200}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  Monthly Views
                </CardTitle>
                <CardDescription>Growing audience reach over the last 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={viewsData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <Area 
                        type="monotone" 
                        dataKey="views" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#colorViews)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={300}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2 text-primary" />
                  Watch Time (Hours)
                </CardTitle>
                <CardDescription>Growing engagement depth over the last 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={watchTimeData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <Area 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#colorHours)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default AudienceMetrics;
