import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TransitionWrapper from '@/components/TransitionWrapper';

const PartnershipOptions = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <div className="flex items-center justify-center mb-4">
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
              ]
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
              isGlowing: true
            }
          ].map((option, index) => (
            <TransitionWrapper key={index} delay={index * 100}>
              <div 
                className={`rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] h-full glass-card ${
                  option.isGlowing ? 'shadow-[0_0_15px_5px_rgba(255,153,0,0.3)] border border-primary/70 bg-primary/5' : ''
                }`}
              >
                <div className="p-6">
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
                  <Button 
                    className={`w-full ${option.isGlowing ? 'bg-transparent border border-primary/20 text-primary hover:bg-primary/10' : ''}`} 
                    variant={option.isGlowing ? "outline" : "outline"}
                  >
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
  );
};

export default PartnershipOptions;
