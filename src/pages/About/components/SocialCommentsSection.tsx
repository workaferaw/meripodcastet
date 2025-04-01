
import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';

// Social comment type
interface SocialComment {
  name: string;
  handle: string;
  platform: 'youtube' | 'twitter' | 'instagram';
  comment: string;
  avatar: string;
}

const SocialCommentsSection = () => {
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
  );
};

export default SocialCommentsSection;
