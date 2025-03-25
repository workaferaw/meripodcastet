
import React from 'react';
import { Mic, Users, BarChart, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';

const Advertise = () => {
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <Mic className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">Advertise With Us</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Reach an engaged, curious audience of thinkers and innovators.
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Audience Section */}
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
      
      {/* Advertising Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BarChart className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold text-center">Advertising Options</h2>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We offer flexible advertising solutions designed to integrate naturally with our content and resonate with our audience.
            </p>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Host-Read Ads",
                price: "$2,500",
                description: "30-second ads personally read by our hosts, naturally integrated into the conversation.",
                features: [
                  "Pre-roll, mid-roll, or post-roll placement",
                  "Authentic delivery by trusted hosts",
                  "Personalized approach to your brand message",
                  "One revision round for messaging"
                ]
              },
              {
                title: "Series Sponsorship",
                price: "$8,500",
                description: "Exclusive sponsorship of a multi-episode series on a specific topic.",
                features: [
                  "Brand association with premium content",
                  "Multiple mentions throughout episodes",
                  "Promotion in all series marketing",
                  "Opportunity for deeper integration"
                ],
                highlighted: true
              },
              {
                title: "Digital Bundle",
                price: "$3,500",
                description: "Expand beyond audio with presence across our digital platforms.",
                features: [
                  "Standard host-read ad",
                  "Newsletter mention to 50K+ subscribers",
                  "Featured placement on website",
                  "Social media promotion"
                ]
              }
            ].map((option, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className={`rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] h-full ${option.highlighted ? 'ring-2 ring-primary relative' : 'glass-card'}`}>
                  {option.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
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
      
      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold text-center">Success Stories</h2>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              See how brands have successfully connected with our audience.
            </p>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Intellect",
                industry: "EdTech",
                testimonial: "Our campaign with Podcastorium delivered a 4x return on ad spend and introduced our learning platform to exactly the right audience.",
                person: "Sarah Chen, CMO"
              },
              {
                company: "Meridian",
                industry: "Sustainable Products",
                testimonial: "The authentic way our message was integrated into the show resulted in our highest conversion rate of any podcast advertising we've done.",
                person: "Marcus Williams, Founder"
              },
              {
                company: "Nova",
                industry: "Financial Services",
                testimonial: "Not only did we see immediate results, but the audience quality was exceptional, with higher average account values than any other channel.",
                person: "Priya Sharma, Growth Lead"
              }
            ].map((story, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className="glass-card p-6 rounded-xl h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-medium">{story.company}</h3>
                    <p className="text-sm text-primary">{story.industry}</p>
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-muted-foreground italic">"{story.testimonial}"</p>
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-medium">{story.person}</p>
                  </div>
                </div>
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-4">Ready to Reach Our Audience?</h2>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Fill out the form below and our advertising team will get back to you within 48 hours.
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

export default Advertise;
