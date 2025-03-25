export const YOUTUBE_CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"; // Example: Google Developers channel
export const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
export const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed";
export const SITE_NAME = "Podcastorium";
export const SITE_DESCRIPTION = "A premium podcast experience";

export const NAVIGATION_ITEMS = [
  { label: "Articles", path: "/articles" },
  { label: "Partner With Us", path: "/advertise" },
  { label: "Suggest Guest", path: "/suggest-guest" },
];

export const MOCK_EPISODES = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence",
    description: "In this episode, we explore the latest advancements in AI and what the future holds for this revolutionary technology.",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442135968-6bb97590065c?q=80&w=1932&auto=format&fit=crop",
    publishedAt: "2023-06-15T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "52:14",
    views: 25643
  },
  {
    id: "2",
    title: "Exploring Quantum Computing",
    description: "Our guest explains quantum computing in simple terms and discusses its potential impact on various industries.",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-05-22T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "45:30",
    views: 18921
  },
  {
    id: "3",
    title: "The Psychology of Decision Making",
    description: "We delve into how our brains make decisions and the psychological factors that influence our choices.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-04-10T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "58:12",
    views: 32105
  },
  {
    id: "4",
    title: "Sustainable Living in the Modern World",
    description: "Learn practical tips and strategies for living more sustainably without sacrificing modern conveniences.",
    thumbnailUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    publishedAt: "2023-03-05T15:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "49:45",
    views: 15789
  },
  {
    id: "5",
    title: "The Art of Storytelling",
    description: "Expert storytellers share their secrets and techniques for captivating any audience.",
    thumbnailUrl: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-02-18T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "61:20",
    views: 28456
  },
  {
    id: "6",
    title: "Financial Independence in Your 30s",
    description: "Practical advice for achieving financial freedom earlier in life through smart planning and investments.",
    thumbnailUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
    publishedAt: "2023-01-25T14:00:00Z",
    videoId: "dQw4w9WgXcQ",
    duration: "55:18",
    views: 42301
  }
];

export const MOCK_ARTICLES = [
  {
    id: "1",
    title: "The Evolution of Podcasting: From Niche to Mainstream",
    slug: "evolution-podcasting-niche-to-mainstream",
    excerpt: "How podcasting grew from a hobbyist medium to a billion-dollar industry that's reshaping media consumption.",
    content: `
      <p>Podcasting has come a long way since its inception in the early 2000s. What started as a niche medium for tech enthusiasts has transformed into a global phenomenon that attracts millions of listeners daily.</p>
      
      <p>The term "podcast" was first coined in 2004, combining "iPod" and "broadcast." While the name stuck, the medium has evolved far beyond Apple's iconic device. Today, podcasts are consumed on various platforms and devices, making them one of the most accessible forms of media.</p>
      
      <h2>The Turning Point</h2>
      
      <p>Many credit the true crime podcast "Serial" (2014) as the watershed moment that brought podcasting into the mainstream. Its compelling storytelling and investigative journalism captured the public imagination and demonstrated the power of the medium to reach mass audiences.</p>
      
      <p>Since then, the industry has seen exponential growth, with major media companies, celebrities, and brands all launching their own podcasts. The low barrier to entry has also allowed independent creators to build substantial audiences without traditional media gatekeepers.</p>
      
      <h2>The Business of Podcasting</h2>
      
      <p>What was once primarily ad-supported has developed diverse revenue streams. Subscription models, live events, merchandise, and exclusive content have all become common ways for podcasters to monetize their work.</p>
      
      <p>Major acquisitions and exclusive deals have also transformed the landscape. Spotify's $100 million deal with Joe Rogan and Amazon's acquisition of Wondery signaled that big tech sees enormous value in podcast content and audiences.</p>
      
      <h2>The Future</h2>
      
      <p>As technology continues to evolve, so too will podcasting. Innovations in AI, interactive content, and immersive audio experiences are already beginning to shape the next chapter in podcasting's evolution.</p>
      
      <p>What remains constant is the intimate connection between hosts and listeners that makes podcasting special. In a world of algorithms and short attention spans, the long-form, personal nature of podcasts continues to resonate deeply with audiences worldwide.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-06-10T12:00:00Z",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    category: "Industry Insights",
    readTime: 6
  },
  {
    id: "2",
    title: "How to Create a Successful Podcast in 2023",
    slug: "how-to-create-successful-podcast-2023",
    excerpt: "Expert tips and strategies for launching and growing a podcast that stands out in today's crowded audio landscape.",
    content: `
      <p>Starting a podcast has never been easier technically, but standing out in an increasingly crowded marketplace requires strategy, consistency, and quality. Here's how to build a successful podcast in 2023.</p>
      
      <h2>Find Your Unique Angle</h2>
      
      <p>The most successful new podcasts aren't trying to be everything to everyone. They identify a specific niche or perspective that isn't being adequately served and focus on becoming the definitive voice in that space.</p>
      
      <p>Ask yourself: What unique perspective or expertise can I bring? What specific audience am I trying to reach? How is my approach different from existing podcasts in this category?</p>
      
      <h2>Invest in Quality</h2>
      
      <p>While you don't need expensive equipment to start, audio quality matters more than ever as listeners have become accustomed to professional production. At minimum, invest in a decent microphone and learn basic audio editing skills.</p>
      
      <p>Consider factors like recording environment, background noise, and post-production. Small improvements in these areas can significantly enhance listener experience.</p>
      
      <h2>Be Consistent</h2>
      
      <p>One of the biggest factors in podcast success is consistency. Whether you publish weekly, bi-weekly, or monthly, maintain a regular schedule that your audience can count on.</p>
      
      <p>Many successful podcasters recommend recording several episodes before launch, creating a buffer that helps maintain your schedule even when life gets hectic.</p>
      
      <h2>Promotion Is Key</h2>
      
      <p>The "build it and they will come" approach rarely works in podcasting. Develop a promotion strategy that includes social media, email marketing, cross-promotion with complementary podcasts, and leveraging any existing platforms you have.</p>
      
      <p>Consider creating "audiograms" or short video clips that can be shared on social platforms to give potential listeners a taste of your content.</p>
      
      <h2>Engage With Your Community</h2>
      
      <p>Successful podcasts build communities, not just audiences. Encourage listener feedback, answer questions, and incorporate audience suggestions into future episodes.</p>
      
      <p>This two-way relationship not only builds loyalty but also provides valuable insight into what your audience wants more of.</p>
      
      <h2>Monetization Takes Time</h2>
      
      <p>While monetization is possible, it typically takes time to build an audience large enough to attract sponsors. Focus first on creating valuable content and growing your listener base.</p>
      
      <p>As you grow, explore multiple revenue streams rather than relying solely on advertising. These might include premium content, merchandise, live events, or crowdfunding through platforms like Patreon.</p>
      
      <p>With dedication, quality, and strategic thinking, you can build a podcast that not only reaches an audience but makes a genuine impact in your chosen field.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
    publishedAt: "2023-05-25T12:00:00Z",
    author: {
      name: "Maya Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    category: "Content Creation",
    readTime: 8
  },
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
  }
];
