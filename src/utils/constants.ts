export const YOUTUBE_CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"; // Example: Google Developers channel
export const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
export const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed";
export const SITE_NAME = "Meri Podcast";
export const SITE_DESCRIPTION = "A premium podcast experience";

export const NAVIGATION_ITEMS = [
  { label: "Articles", path: "/articles" },
  { label: "Partner With Us", path: "/advertise" },
  { label: "Suggest Guest", path: "/suggest-guest" },
];

export const MOCK_EPISODES = [
  {
    id: "ep001",
    title: "The Future of AI and Its Impact on Creative Industries",
    description: "In this episode of Mer Podcast, we dive into how artificial intelligence is reshaping creative fields from art to music to writing. Our guests share insights on the balance between AI tools and human creativity.",
    thumbnailUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-10-15T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "1:12:34",
    views: 38912,
    categories: ["Technology", "Creativity", "Entertainment Industry"],
    guestIds: ["guest-001", "guest-003"]
  },
  {
    id: "ep002",
    title: "Sustainable Coffee Sourcing: From Farm to Cup",
    description: "We explore the journey of coffee beans from ethical farming practices to your morning brew. Our guest Elena Rodriguez shares how her company revolutionized fair-trade partnerships with South American farmers.",
    thumbnailUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-09-28T14:00:00Z",
    videoId: "LTZ989-XpXQ",
    duration: "56:22",
    views: 24567,
    categories: ["Coffee Business", "Sustainability", "Entrepreneurship"],
    guestIds: ["guest-004"]
  },
  {
    id: "ep003",
    title: "Financial Intelligence for Creative Professionals",
    description: "Managing finances as a creative entrepreneur presents unique challenges. Today's episode offers strategies for budgeting, investing, and planning for irregular income streams in creative fields.",
    thumbnailUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-09-14T14:00:00Z",
    videoId: "HrLEXgAHpkE",
    duration: "1:04:15",
    views: 19354,
    categories: ["Finance", "Capital Markets", "Creative Business"],
    guestIds: ["guest-003", "guest-005"]
  },
  {
    id: "ep004",
    title: "Neuroscience of Creativity: Unlocking Your Brain's Potential",
    description: "Dr. Sarah Chen discusses the latest research on how our brains generate creative ideas and how we can optimize our mental environment for innovative thinking and problem-solving.",
    thumbnailUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-08-31T14:00:00Z",
    videoId: "PudZNM276CY",
    duration: "1:08:42",
    views: 32109,
    categories: ["Health", "Psychology", "Creativity"],
    guestIds: ["guest-002"]
  },
  {
    id: "ep005",
    title: "Building a Tech Startup: Lessons from the Trenches",
    description: "Alex Johnson shares his journey through founding multiple tech startups, discussing the pitfalls, victories, and unexpected lessons learned along the entrepreneurial path.",
    thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-08-17T14:00:00Z",
    videoId: "9bZkp7q19f0",
    duration: "1:15:38",
    views: 27836,
    categories: ["Technology", "Entrepreneurship", "Business"],
    guestIds: ["guest-001", "guest-005"]
  },
  {
    id: "ep006",
    title: "Climate Tech: Investing in a Sustainable Future",
    description: "Venture capitalist Raj Patel explains the booming climate tech sector, highlighting innovations that are addressing environmental challenges while creating economic opportunities.",
    thumbnailUrl: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-08-03T14:00:00Z",
    videoId: "uD4izuDMUQA",
    duration: "59:27",
    views: 22541,
    categories: ["Sustainability", "Technology", "Capital Markets"],
    guestIds: ["guest-005"]
  },
  {
    id: "ep007",
    title: "Athletes and Finance: Managing Wealth After the Spotlight",
    description: "Former pro athlete Marcus Williams discusses the unique financial challenges sports stars face and his work helping players transition to sustainable careers after retirement from sports.",
    thumbnailUrl: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-07-20T14:00:00Z",
    videoId: "tYzMYcUty6s",
    duration: "1:02:18",
    views: 18743,
    categories: ["Finance", "Sports", "Career Development"],
    guestIds: ["guest-003"]
  },
  {
    id: "ep008",
    title: "The Science of Focus: Deep Work in a Distracted World",
    description: "Dr. Sarah Chen returns to discuss research-backed strategies for achieving deep focus, fostering flow states, and overcoming digital distractions in our hyperconnected environment.",
    thumbnailUrl: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2023-07-06T14:00:00Z",
    videoId: "5qap5aO4i9A",
    duration: "1:10:53",
    views: 31022,
    categories: ["Health", "Productivity", "Psychology"],
    guestIds: ["guest-002"]
  }
];

export const MOCK_ARTICLES = [
  {
    id: "3",
    title: "The Science of Sound: Why Audio Storytelling Is So Powerful",
    slug: "science-sound-audio-storytelling-powerful",
    excerpt: "Exploring the psychological and neurological reasons why podcasts and audio storytelling create such deep connections with listeners.",
    content: `
      <p>There's something uniquely powerful about audio storytelling. While video and text each have their strengths, audio content creates a particular kind of intimacy and engagement that other mediums often can't match. But why?</p>
      
      <h2>The Theater of the Mind</h2>
      
      <p>Audio storytelling activates what storytellers call "the theater of the mind" - the listener's imagination fills in visual details in highly personal ways, creating a co-creative experience. Neurological research shows that this mental visualization activates many of the same brain regions as actual visual perception.</p>
      
      <p>This explains why listeners often feel so connected to podcast hosts and stories - they've partially created the experience themselves through their own mental imagery.</p>
      
      <h2>The Intimacy of Voice</h2>
      
      <p>Human voices carry subtle emotional cues that we've evolved to be highly attuned to. The micro-variations in tone, pace, and emphasis communicate layers of meaning beyond the words themselves.</p>
      
      <p>Additionally, many people listen to podcasts through headphones, creating a literal in-your-head experience that amplifies this sense of intimacy. The host's voice is speaking directly into your ears, creating a one-to-one feeling even when the audience numbers in the millions.</p>
      
      <h2>Multitasking Compatibility</h2>
      
      <p>Unlike video or text, audio content can be consumed while doing other activities - driving, exercising, cooking, or cleaning. This allows podcasts to fill time slots in people's lives that other media can't access.</p>
      
      <p>Interestingly, research suggests that this light multitasking may actually enhance memory formation for certain types of content, as the physical activity provides additional contextual cues for memory encoding.</p>
      
      <h2>The Power of Long-Form Content</h2>
      
      <p>In an era of shrinking attention spans, podcasts buck the trend by offering deep, nuanced exploration of topics. The average podcast episode runs 30-45 minutes, with many running longer, allowing for complex ideas to be developed more fully than in most modern media formats.</p>
      
      <p>This depth creates a more complete understanding and stronger memory formation, which may explain why podcast listeners often develop strong knowledge in niche subjects.</p>
      
      <h2>Parasocial Relationships</h2>
      
      <p>Regular listeners develop what psychologists call "parasocial relationships" with podcast hosts - the sense of knowing someone personally despite never meeting them. The consistency of hearing the same voice week after week in intimate settings creates a powerful sense of connection.</p>
      
      <p>This phenomenon is particularly strong in podcasting compared to other media because of the combination of vocal intimacy and the long-form, conversational nature of the medium.</p>
      
      <h2>The Future of Audio Engagement</h2>
      
      <p>As our understanding of audio's psychological impact grows, we're likely to see continued innovation in how stories are told through sound. Binaural audio, interactive storytelling, and personalized content are just a few frontiers being explored.</p>
      
      <p>What remains constant is the fundamental human connection to storytelling through sound - a tradition that stretches back to our earliest ancestors gathering around fires to share tales, now transformed for the digital age.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-04-15T12:00:00Z",
    author: {
      name: "Dr. James Williams",
      avatar: "https://randomuser.me/api/portraits/men/64.jpg"
    },
    category: "Science & Psychology",
    readTime: 7
  },
  {
    id: "4",
    title: "Monetization Strategies for Independent Podcasters",
    slug: "monetization-strategies-independent-podcasters",
    excerpt: "Beyond advertising: Creative ways for indie podcasters to generate revenue while maintaining creative control.",
    content: `
      <p>For independent podcasters, building a sustainable income stream can be challenging. While advertising remains the most visible form of podcast monetization, it's not the only option - and may not even be the best one for indies. Here are diverse strategies for turning your podcast passion into profit.</p>
      
      <h2>Direct Support Models</h2>
      
      <h3>Membership Programs</h3>
      <p>Platforms like Patreon, Buy Me a Coffee, and Memberful allow podcasters to offer tiered membership programs with exclusive benefits. Successful podcasters often provide bonus episodes, early access, ad-free feeds, or community access to paying members.</p>
      
      <p>The key to success is creating membership tiers that feel valuable without creating an unsustainable workload for yourself.</p>
      
      <h3>Listener Donations</h3>
      <p>Some podcasters prefer a simpler donation model through platforms like PayPal, Ko-fi, or cryptocurrency. This approach works particularly well for podcasts with a mission or educational focus where listeners want to support the work continuing.</p>
      
      <h2>Content-Based Revenue</h2>
      
      <h3>Premium Episodes</h3>
      <p>Creating a separate feed of premium content available only to paying subscribers can be effective, especially for shows with dedicated fans. Platforms like Apple Podcasts, Spotify, and Supercast now offer built-in subscription options.</p>
      
      <h3>Back Catalog Access</h3>
      <p>Some podcasters keep recent episodes free but move older episodes behind a paywall, creating an incentive to subscribe for listeners who want to explore the full library.</p>
      
      <h2>Product Offerings</h2>
      
      <h3>Merchandise</h3>
      <p>From t-shirts and mugs to more creative items that reference inside jokes from your show, merchandise creates both revenue and walking advertisements for your podcast.</p>
      
      <p>Print-on-demand services have made merchandise creation more accessible than ever, requiring little to no upfront investment.</p>
      
      <h3>Books and Guides</h3>
      <p>For educational or informational podcasts, compiling and expanding on your content in book form (electronic or physical) can create a valuable additional revenue stream.</p>
      
      <h2>Service-Based Income</h2>
      
      <h3>Consulting and Speaking</h3>
      <p>Many successful podcasters leverage their expertise and audience to secure consulting work or speaking engagements. Your podcast serves as a powerful portfolio demonstrating your knowledge and communication skills.</p>
      
      <h3>Workshops and Courses</h3>
      <p>If your podcast educates listeners on specific topics, creating more structured educational offerings can be lucrative. Online courses, in particular, offer scalable income potential.</p>
      
      <h2>Strategic Advertising</h2>
      
      <h3>Affiliate Marketing</h3>
      <p>Rather than traditional ads, affiliate partnerships allow you to earn commission on products or services you recommend. This approach can feel more authentic than pre-written ad copy and scales with your audience size.</p>
      
      <h3>Sponsored Content</h3>
      <p>Beyond standard ad reads, consider creating special episodes or series with brand partners whose values align with your podcast. These deeper integrations often pay better than traditional ads.</p>
      
      <h2>Community and Events</h2>
      
      <h3>Live Shows</h3>
      <p>Once you've built a sufficient audience, live recordings or podcast-themed events can generate ticket sales while strengthening community bonds.</p>
      
      <h3>Community Platform</h3>
      <p>Creating a dedicated community space through platforms like Discord or Circle gives listeners a place to connect while potentially generating subscription revenue.</p>
      
      <h2>Finding Your Mix</h2>
      
      <p>Most successful independent podcasters don't rely on a single revenue stream but develop a mix of monetization strategies that work for their specific content and audience.</p>
      
      <p>The key is to ensure that any monetization efforts align with your show's values and enhance rather than detract from the listener experience. When done thoughtfully, making money from your podcast can actually improve its quality by allowing you to invest more time and resources into creating exceptional content.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-03-20T12:00:00Z",
    author: {
      name: "Sophia Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    category: "Business",
    readTime: 9
  },
  {
    id: "12",
    title: "Podcast Analytics: Understanding Your Audience",
    slug: "podcast-analytics-audience",
    excerpt: "A deep dive into podcast analytics and how to use data to grow your show.",
    content: `
      <p>Understanding podcast analytics is crucial for growth and success. Here's how to make sense of your data and use it effectively.</p>
      
      <h2>Key Metrics</h2>
      
      <p>Focus on important metrics like downloads, listener retention, and engagement rates.</p>
      
      <p>Understand what each metric means and how to interpret it.</p>
      
      <h2>Listener Demographics</h2>
      
      <p>Use analytics to understand your audience's age, location, and listening habits.</p>
      
      <p>Tailor your content to better serve your core audience.</p>
      
      <h2>Engagement Patterns</h2>
      
      <p>Analyze when and how listeners engage with your content.</p>
      
      <p>Use this information to optimize your release schedule and content structure.</p>
      
      <h2>Platform Insights</h2>
      
      <p>Different platforms provide different analytics. Learn to use each platform's insights effectively.</p>
      
      <p>Compare metrics across platforms to understand your overall performance.</p>
      
      <h2>Content Performance</h2>
      
      <p>Track which episodes perform best and why.</p>
      
      <p>Use this information to guide future content decisions.</p>
      
      <h2>Growth Tracking</h2>
      
      <p>Monitor your podcast's growth over time.</p>
      
      <p>Identify trends and patterns that indicate success or areas for improvement.</p>
      
      <h2>Monetization Impact</h2>
      
      <p>Track how different monetization strategies affect your metrics.</p>
      
      <p>Use data to optimize your revenue streams.</p>
      
      <h2>Future Planning</h2>
      
      <p>Use analytics to inform your long-term strategy.</p>
      
      <p>Make data-driven decisions about content and growth.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-07-20T12:00:00Z",
    author: {
      name: "Dr. Thomas Anderson",
      avatar: "https://randomuser.me/api/portraits/men/88.jpg"
    },
    category: "Analytics",
    readTime: 7
  },
  {
    id: "13",
    title: "The Future of Audio Technology",
    slug: "future-audio-technology",
    excerpt: "Exploring cutting-edge developments in audio technology and their impact on podcasting.",
    content: `
      <p>Audio technology is evolving rapidly, bringing new possibilities to podcasting.</p>
      // ... rest of content ...
    `,
    featuredImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-06-15T12:00:00Z",
    author: {
      name: "Dr. Emily Chen",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    category: "Technology",
    readTime: 5
  },
  {
    id: "14",
    title: "Building a Global Podcast Network",
    slug: "building-global-podcast-network",
    excerpt: "Lessons learned from scaling a podcast network across multiple countries and cultures.",
    content: `
      <p>Creating a global podcast network requires careful consideration of cultural differences and local markets.</p>
      // ... rest of content ...
    `,
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-05-20T12:00:00Z",
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    category: "Business",
    readTime: 7
  },
  {
    id: "15",
    title: "The Art of Podcast Storytelling",
    slug: "art-podcast-storytelling",
    excerpt: "Mastering narrative techniques for compelling podcast content.",
    content: `
      <p>Great podcast storytelling combines structure, pacing, and emotional resonance.</p>
      // ... rest of content ...
    `,
    featuredImage: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-04-25T12:00:00Z",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    category: "Content Creation",
    readTime: 6
  },
  {
    id: "16",
    title: "Podcast Marketing in the Age of Social Media",
    slug: "podcast-marketing-social-media",
    excerpt: "Effective strategies for promoting your podcast across social platforms.",
    content: `
      <p>Social media has transformed how podcasts reach and engage with audiences.</p>
      // ... rest of content ...
    `,
    featuredImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-03-30T12:00:00Z",
    author: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg"
    },
    category: "Marketing",
    readTime: 5
  },
  {
    id: "17",
    title: "The Psychology of Podcast Listening",
    slug: "psychology-podcast-listening",
    excerpt: "Understanding why people listen to podcasts and how to create addictive content.",
    content: `
      <p>Podcast listening habits reveal fascinating insights about human behavior and preferences.</p>
      // ... rest of content ...
    `,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2022-02-15T12:00:00Z",
    author: {
      name: "Dr. Rachel Thompson",
      avatar: "https://randomuser.me/api/portraits/women/78.jpg"
    },
    category: "Psychology",
    readTime: 7
  }
];
