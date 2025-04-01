
import React, { useState } from 'react';
import { Linkedin, FileText, X } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Team member type
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialHandle: string;
  bio: string;
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Team data
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Morgan",
      role: "Host & Executive Producer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      socialHandle: "@alexmorgan",
      bio: "Former journalist with a background in philosophy and science communication. Alex has interviewed over 200 thought leaders and has a knack for asking questions that reveal unexpected insights. His work has been featured in major publications including The Atlantic, Wired, and The New Yorker."
    },
    {
      name: "Jamie Chen",
      role: "Co-Host & Research Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      socialHandle: "@jamiechen",
      bio: "Academic researcher specializing in cognitive science and technology ethics. Jamie brings academic rigor and intellectual depth to each episode. With a PhD in Cognitive Science and years of research experience, she helps translate complex ideas into accessible conversations."
    },
    {
      name: "Sam Williams",
      role: "Audio Engineer & Producer",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      socialHandle: "@samwilliams",
      bio: "Sound design veteran with 15 years of experience in broadcast and podcasting. Sam is responsible for the crystal-clear audio quality and immersive soundscapes that have become a hallmark of the show. His previous work includes award-winning radio documentaries and sound design for major podcast networks."
    },
    {
      name: "Taylor Rodriguez",
      role: "Content & Community Manager",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      socialHandle: "@taylorrodriguez",
      bio: "Digital strategist passionate about building meaningful online communities. Taylor manages all social channels and creates additional content that extends the podcast conversations. With a background in digital marketing and community building, she has grown the podcast's online presence into a vibrant intellectual community."
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <h2 className="text-3xl font-display font-bold text-center mb-12">Meet The Team</h2>
        </TransitionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TransitionWrapper key={index} delay={index * 100}>
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="relative w-32 h-32 overflow-hidden rounded-lg flex-shrink-0">
                    <BlurImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-display font-medium">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start mt-1">
                        <Linkedin className="w-3 h-3 mr-1" />
                        {member.socialHandle}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2"
                        onClick={() => setSelectedMember(member)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionWrapper>
          ))}
        </div>
      </div>
      
      {/* Profile Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedMember?.name}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={() => setSelectedMember(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="flex flex-col items-center mt-2">
            <div className="relative w-24 h-24 overflow-hidden rounded-full mb-4">
              <BlurImage
                src={selectedMember?.image || ''}
                alt={selectedMember?.name || ''}
                className="object-cover w-full h-full"
              />
            </div>
            
            <h3 className="text-lg font-medium">{selectedMember?.name}</h3>
            <p className="text-primary text-sm">{selectedMember?.role}</p>
            <p className="text-muted-foreground text-sm flex items-center mt-1">
              <Linkedin className="w-3 h-3 mr-1" />
              {selectedMember?.socialHandle}
            </p>
          </div>
          
          <div className="mt-4 max-h-60 overflow-y-auto">
            <p className="text-muted-foreground">{selectedMember?.bio}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;
