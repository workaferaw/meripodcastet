
import React, { useState } from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TransitionWrapper from '@/components/TransitionWrapper';
import { SITE_NAME } from '@/utils/constants';
import { toast } from 'sonner';

const SuggestGuest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Your guest suggestion has been submitted!");
  };
  
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">Suggest a Guest</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Know someone who would make a fascinating guest on {SITE_NAME}? Let us know!
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {isSubmitted ? (
            <TransitionWrapper animation="scale-in">
              <div className="glass-panel rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Thank You for Your Suggestion!</h2>
                <p className="text-muted-foreground mb-6">
                  We've received your guest recommendation and our team will review it carefully. We're always on the lookout for fascinating conversations with diverse voices.
                </p>
                <p className="text-muted-foreground mb-8">
                  If we decide to invite your suggested guest, we'll be sure to let you know when the episode is released.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Suggest Another Guest</Button>
              </div>
            </TransitionWrapper>
          ) : (
            <>
              <TransitionWrapper>
                <h2 className="text-2xl font-display font-bold mb-2">Guest Suggestion Form</h2>
                <p className="text-muted-foreground mb-8">
                  Please provide as much information as possible about your suggested guest. This helps us evaluate whether they might be a good fit for the show.
                </p>
              </TransitionWrapper>
              
              <TransitionWrapper delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="glass-panel rounded-xl p-6 space-y-6">
                    <h3 className="text-lg font-display font-medium">About the Guest</h3>
                    
                    <div className="space-y-2">
                      <label htmlFor="guestName" className="text-sm font-medium">Guest's Name</label>
                      <Input id="guestName" placeholder="Full name of the person you're suggesting" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="guestTitle" className="text-sm font-medium">Title/Profession</label>
                      <Input id="guestTitle" placeholder="e.g. Professor of Physics, Entrepreneur, Author" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="guestBio" className="text-sm font-medium">Brief Bio</label>
                      <Textarea 
                        id="guestBio" 
                        placeholder="What makes this person interesting or notable? What have they accomplished?" 
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="topicArea" className="text-sm font-medium">Primary Topic Area</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">Science & Technology</SelectItem>
                          <SelectItem value="philosophy">Philosophy & Ethics</SelectItem>
                          <SelectItem value="arts">Arts & Culture</SelectItem>
                          <SelectItem value="business">Business & Economics</SelectItem>
                          <SelectItem value="health">Health & Wellness</SelectItem>
                          <SelectItem value="society">Society & Politics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="conversation" className="text-sm font-medium">Potential Conversation Topics</label>
                      <Textarea 
                        id="conversation" 
                        placeholder="What specific topics or questions would you like to hear discussed with this guest?" 
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="links" className="text-sm font-medium">Relevant Links</label>
                      <Textarea 
                        id="links" 
                        placeholder="Personal website, social media profiles, articles/books they've written, past interviews, etc." 
                        rows={2}
                      />
                    </div>
                  </div>
                  
                  <div className="glass-panel rounded-xl p-6 space-y-6">
                    <h3 className="text-lg font-display font-medium">Your Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="yourName" className="text-sm font-medium">Your Name</label>
                        <Input id="yourName" placeholder="Your full name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="yourEmail" className="text-sm font-medium">Your Email</label>
                        <Input id="yourEmail" type="email" placeholder="Your email address" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="connection" className="text-sm font-medium">Your Connection to the Guest (if any)</label>
                      <Input id="connection" placeholder="e.g. Colleague, Friend, Fan, No connection" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="additionalInfo" className="text-sm font-medium">Anything Else We Should Know?</label>
                      <Textarea 
                        id="additionalInfo" 
                        placeholder="Any additional information that might help us evaluate this suggestion" 
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Submitting</span>
                          <div className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                        </>
                      ) : (
                        "Submit Suggestion"
                      )}
                    </Button>
                  </div>
                </form>
              </TransitionWrapper>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SuggestGuest;
