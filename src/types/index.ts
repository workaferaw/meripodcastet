
export interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  videoId: string;
  duration?: string;
  views?: number;
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
  name: string;
  email: string;
  topic: string;
  message: string;
}
