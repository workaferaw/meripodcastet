
import React from 'react';
import { Users } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import BlurImage from '@/components/ui/BlurImage';
import { SITE_NAME } from '@/utils/constants';

const About = () => {
  return (
    <>
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-display font-bold text-center">About Us</h1>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper delay={100}>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Our story, mission, and the team behind {SITE_NAME}.
            </p>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <TransitionWrapper>
              <BlurImage
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
                alt="Studio setup"
                className="rounded-xl shadow-lg"
                aspectRatio="4/3"
              />
            </TransitionWrapper>
            
            <TransitionWrapper delay={200}>
              <div className="space-y-6">
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
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TransitionWrapper>
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intellectual Curiosity",
                description: "We approach every topic with genuine curiosity and a desire to understand different perspectives, even when they challenge our own views."
              },
              {
                title: "Depth Over Soundbites",
                description: "In a world of hot takes and quick clips, we value long-form, nuanced discussions that explore complexity rather than reduce it."
              },
              {
                title: "Respectful Discourse",
                description: "We believe that even the most contentious topics can be discussed with respect, empathy, and intellectual honesty."
              },
              {
                title: "Accessibility",
                description: "We work to make complex ideas accessible without oversimplification, creating content that both experts and newcomers can value."
              },
              {
                title: "Diverse Perspectives",
                description: "We actively seek out varied viewpoints and experiences, recognizing that the richest conversations emerge from diversity of thought."
              },
              {
                title: "Editorial Independence",
                description: "We maintain complete creative control over our content, ensuring our conversations are driven by curiosity rather than commercial interests."
              }
            ].map((value, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className="glass-card p-6 rounded-xl h-full space-y-4">
                  <h3 className="text-xl font-display font-medium">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Host & Executive Producer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "Former journalist with a background in philosophy and science communication."
              },
              {
                name: "Jamie Chen",
                role: "Co-Host & Research Director",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Academic researcher specializing in cognitive science and technology ethics."
              },
              {
                name: "Sam Williams",
                role: "Audio Engineer & Producer",
                image: "https://randomuser.me/api/portraits/men/64.jpg",
                bio: "Sound design veteran with 15 years of experience in broadcast and podcasting."
              },
              {
                name: "Taylor Rodriguez",
                role: "Content & Community Manager",
                image: "https://randomuser.me/api/portraits/women/22.jpg",
                bio: "Digital strategist passionate about building meaningful online communities."
              }
            ].map((member, index) => (
              <TransitionWrapper key={index} delay={index * 100}>
                <div className="text-center space-y-3">
                  <div className="relative mx-auto w-48 h-48 overflow-hidden rounded-full mb-4">
                    <BlurImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-display font-medium">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
