import React, { useState } from 'react';
import { Youtube, Instagram, Twitter, Linkedin, MessageSquare, FileText } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

// Team member type
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialHandle: string;
  bio: string;
}

// Social comment type
interface SocialComment {
  name: string;
  handle: string;
  platform: 'youtube' | 'twitter' | 'instagram';
  comment: string;
  avatar: string;
}

const About = () => {
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
  
  // Social comments data
  const socialComments: SocialComment[] = [
    {
      name: "Olivia Parker",
      handle: "@oliviaparker",
      platform: "youtube",
      comment: "This episode completely changed my perspective on AI ethics. I've shared it with everyone in my tech department!",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Ethan Johnson",
      handle: "@ethanj",
      platform: "twitter",
      comment: "The way you broke down such a complex topic into understandable parts without oversimplifying was masterful. This is why I never miss an episode.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Maya Patel",
      handle: "@mayapatels",
      platform: "instagram",
      comment: "Been listening for 3 years and the quality just keeps getting better. The conversation with Dr. Chen last week was mind-blowing!",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "Jordan Lee",
      handle: "@jordanlee",
      platform: "youtube",
      comment: "As someone working in the field, I appreciate how you always go beyond the surface level. The nuance in your discussions is rare to find.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Sophia Williams",
      handle: "@sophiawill",
      platform: "twitter",
      comment: "Just discovered this podcast last month and I've already binged 30 episodes. Where has this been all my life?",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      name: "Daniel Kim",
      handle: "@danielkim",
      platform: "instagram",
      comment: "The episode on quantum computing actually made me understand a topic I've struggled with for years. Brilliant explanations!",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg"
    }
  ];
  
  // Function to get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 text-blue-400" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Our story, mission, and the team behind {SITE_NAME}.
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Statistics Dashboard */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-10">Our Reach</h2>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TransitionWrapper delay={100}>
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <Youtube className="w-6 h-6 text-red-500" />
                    <Instagram className="w-6 h-6 text-pink-500" />
                    <Twitter className="w-6 h-6 text-blue-400" />
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-display font-medium ml-4">Social Media Following</h3>
                </div>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">370k+</p>
                  <p className="text-muted-foreground mt-2">Combined followers across all platforms</p>
                </div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper delay={200}>
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Youtube className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-display font-medium ml-4">YouTube Subscribers</h3>
                </div>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">155k+</p>
                  <p className="text-muted-foreground mt-2">Growing community of engaged viewers</p>
                </div>
              </div>
            </TransitionWrapper>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-0">
          <TransitionWrapper>
            <div className="w-full mb-10">
              <BlurImage
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
                alt="Studio setup"
                className="w-full"
                aspectRatio="21/9"
              />
            </div>
          </TransitionWrapper>
            
          <TransitionWrapper delay={200}>
            <div className="px-4 md:px-8 space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                {SITE_NAME} began in 2018 as a small passion project between two friends who loved deep conversations and wanted to share them with the world.
              </p>
              <p className="text-lg text-muted-foreground">
                What started in a makeshift closet recording studio has grown into a globally recognized podcast with listeners in over 150 countries and guests ranging from Nobel laureates to cultural innovators.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission remains the same as it was on day one: to foster meaningful conversations that expand perspectives and deepen understanding of our complex world.
              </p>
            </div>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Social Media Impact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-12">What Our Listeners Say</h2>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialComments.map((comment, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className="glass-card p-6 rounded-xl h-full space-y-4">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <BlurImage
                        src={comment.avatar}
                        alt={comment.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{comment.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{comment.handle}</span>
                        <span className="mx-1 inline-flex items-center">
                          {getPlatformIcon(comment.platform)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{comment.comment}</p>
                  </div>
                </div>
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
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
      </section>
      
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
    </>
  );
};

export default About;
