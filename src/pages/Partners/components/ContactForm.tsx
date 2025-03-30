
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TransitionWrapper from '@/components/TransitionWrapper';

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
