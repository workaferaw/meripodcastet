import React from 'react';
import { Briefcase, Users, BarChart, Zap, CheckCircle2, PlayCircle, Eye, Video, BarChart3, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

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

const Partners = () => {
  return (
    <>
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
      
      {/* Dashboard Metrics Section */}
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
                        <Tooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-background border border-border p-3 rounded-md shadow-lg">
                                  <p className="text-sm font-medium">{payload[0].payload.month}</p>
                                  <p className="text-primary font-medium">{payload[0].value.toLocaleString()} views</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area type="monotone" dataKey="views" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorViews)" />
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
                        <Tooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-background border border-border p-3 rounded-md shadow-lg">
                                  <p className="text-sm font-medium">{payload[0].payload.month}</p>
                                  <p className="text-primary font-medium">{payload[0].value.toLocaleString()} hours</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area type="monotone" dataKey="hours" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorHours)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TransitionWrapper>
          </div>
        </div>
      </section>
      
      {/* Audience Section - Keeping this section as it provides valuable information */}
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
      
      {/* Simplified Partnership Options - only Standard and Premium */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BarChart className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold text-center">Partnership Options</h2>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We offer flexible partnership solutions designed to integrate naturally with our content and resonate with our audience.
            </p>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {[
              {
                title: "Standard",
                price: "$2,500",
                description: "Perfect for brands looking to test our platform with a focused campaign.",
                features: [
                  "30-second host-read ad",
                  "Pre-roll or mid-roll placement",
                  "Social media mention",
                  "Basic audience analytics report",
                  "One revision round for messaging"
                ],
                highlighted: false
              },
              {
                title: "Premium",
                price: "$8,500",
                description: "Comprehensive partnership with deeper integration and premium placement.",
                features: [
                  "Multiple ads across episodes",
                  "Premium placement options",
                  "Brand integration in episode content",
                  "Newsletter feature to 50K+ subscribers",
                  "Detailed performance analytics",
                  "Social media campaign",
                  "Custom landing page for tracking"
                ],
                highlighted: true
              }
            ].map((option, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className={`rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] h-full ${option.highlighted ? 'ring-2 ring-primary relative' : 'glass-card'}`}>
                  {option.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <div className={`p-6 ${option.highlighted ? 'bg-primary/5 pt-8' : ''}`}>
                    <h3 className="text-xl font-display font-medium mb-2">{option.title}</h3>
                    <div className="text-3xl font-bold mb-3">{option.price}</div>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={option.highlighted ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </TransitionWrapper>
            ))}
          </div>
          
          <TransitionWrapper delay={400}>
            <p className="text-center mt-8 text-muted-foreground">
              Custom packages and multi-episode discounts available. Contact us for details.
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Contact Form - keeping this section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-4">Ready to Partner With Us?</h2>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Fill out the form below and our team will get back to you within 48 hours.
            </p>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200}>
            <form className="glass-panel p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input id="company" placeholder="Your company" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">Estimated Budget</label>
                  <Input id="budget" placeholder="e.g. $5,000 - $10,000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">Tell us about your goals</label>
                  <Textarea id="message" placeholder="What are you hoping to achieve with your campaign?" rows={4} required />
                </div>
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
            </form>
          </TransitionWrapper>
        </div>
      </section>
    </>
  );
};

export default Partners;
