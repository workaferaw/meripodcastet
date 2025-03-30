
export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  videoId: string;
  duration?: string;
  views?: number;
  categories: string[];
  guestIds: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: number;
}

export interface Guest {
  id: string;
  name: string;
  email?: string;
  bio: string;
  avatarUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
  topic?: string;
  message?: string;
}

