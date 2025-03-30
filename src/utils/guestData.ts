
import { Guest } from '@/types';

export const MOCK_GUESTS: Guest[] = [
  {
    id: "guest-001",
    name: "Alex Johnson",
    bio: "Alex is a tech entrepreneur and investor with over 15 years of experience in Silicon Valley. He co-founded three successful startups and now advises emerging tech companies.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    socialLinks: {
      twitter: "https://twitter.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      website: "https://alexjohnson.com"
    }
  },
  {
    id: "guest-002",
    name: "Sarah Chen",
    bio: "Dr. Sarah Chen is a renowned neuroscientist and TED speaker whose research focuses on brain plasticity. She's the author of 'Rewire Your Mind' and leads a research lab at Stanford.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    socialLinks: {
      twitter: "https://twitter.com/sarahchen",
      instagram: "https://instagram.com/drsarahchen",
      website: "https://sarahchen.org"
    }
  },
  {
    id: "guest-003",
    name: "Marcus Williams",
    bio: "Marcus is a former NFL player who transitioned to becoming a financial wellness coach for athletes. His foundation helps rookies manage sudden wealth and plan for life after sports.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    socialLinks: {
      instagram: "https://instagram.com/marcuswilliams",
      twitter: "https://twitter.com/marcusw",
      website: "https://marcuswilliams.co"
    }
  },
  {
    id: "guest-004",
    name: "Elena Rodriguez",
    bio: "Elena is a coffee entrepreneur who built her fair-trade coffee company from a single café to an international brand. She works directly with farmers in South America to ensure ethical sourcing.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    socialLinks: {
      instagram: "https://instagram.com/elenarodriguez",
      linkedin: "https://linkedin.com/in/elenarodriguez",
      website: "https://elenascoffee.com"
    }
  },
  {
    id: "guest-005",
    name: "Raj Patel",
    bio: "Raj is a venture capitalist specializing in climate tech. His fund has invested over $300M in renewable energy solutions and sustainable agriculture. Previously, he led green initiatives at Google.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    socialLinks: {
      twitter: "https://twitter.com/rajpatel",
      linkedin: "https://linkedin.com/in/rajpatel",
    }
  }
];

// Helper to find guests by their IDs
export const findGuestsByIds = (guestIds: string[]): Guest[] => {
  return MOCK_GUESTS.filter(guest => guestIds.includes(guest.id));
};

// Helper to find a single guest by ID
export const findGuestById = (guestId: string): Guest | undefined => {
  return MOCK_GUESTS.find(guest => guest.id === guestId);
};

