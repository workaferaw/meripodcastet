import { z } from "zod";

const API_KEY = "AIzaSyBB2Zds3hH6_XvPf10c9apbrd5e3khydns";
const CHANNEL_ID = "UCzKNuQ80qNSpt2x-7dsazJg";

// Zod schema for YouTube video item
const youtubeVideoSchema = z.object({
  id: z.object({
    videoId: z.string(),
  }),
  snippet: z.object({
    publishedAt: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnails: z.object({
      high: z.object({
        url: z.string(),
      }),
    }),
    channelTitle: z.string(),
  }),
});

// Schema for the YouTube API response
const youtubeSearchResponseSchema = z.object({
  items: z.array(youtubeVideoSchema),
  nextPageToken: z.string().optional(),
  pageInfo: z.object({
    totalResults: z.number(),
    resultsPerPage: z.number(),
  }),
});

// Zod schema for YouTube playlist item
const youtubePlaylistItemSchema = z.object({
  id: z.string(),
  snippet: z.object({
    publishedAt: z.string(),
    title: z.string(),
    description: z.string().optional(),
    thumbnails: z.object({
      default: z.object({ url: z.string() }).optional(),
      medium: z.object({ url: z.string() }).optional(),
      high: z.object({ url: z.string() }).optional(),
      standard: z.object({ url: z.string() }).optional(),
      maxres: z.object({ url: z.string() }).optional(),
    }),
    channelTitle: z.string(),
    playlistId: z.string(),
    position: z.number(),
    resourceId: z.object({
      kind: z.string(),
      videoId: z.string(),
    }),
  }),
});

// Schema for YouTube playlist items response
const youtubePlaylistItemsResponseSchema = z.object({
  items: z.array(youtubePlaylistItemSchema),
  nextPageToken: z.string().optional(),
  pageInfo: z.object({
    totalResults: z.number(),
    resultsPerPage: z.number(),
  }),
});

// Zod schema for YouTube playlist
const youtubePlaylistSchema = z.object({
  id: z.string(),
  snippet: z.object({
    publishedAt: z.string(),
    channelId: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnails: z.object({
      default: z.object({ url: z.string() }).optional(),
      medium: z.object({ url: z.string() }).optional(),
      high: z.object({ url: z.string() }).optional(),
      standard: z.object({ url: z.string() }).optional(),
      maxres: z.object({ url: z.string() }).optional(),
    }),
    channelTitle: z.string(),
  }),
  contentDetails: z.object({
    itemCount: z.number(),
  }),
});

// Schema for YouTube playlists response
const youtubePlaylistsResponseSchema = z.object({
  items: z.array(youtubePlaylistSchema),
  nextPageToken: z.string().optional(),
  pageInfo: z.object({
    totalResults: z.number(),
    resultsPerPage: z.number(),
  }),
});

// Schema for YouTube channel statistics
const youtubeChannelStatisticsSchema = z.object({
  id: z.string(),
  snippet: z.object({
    title: z.string(),
    description: z.string(),
    customUrl: z.string().optional(),
    publishedAt: z.string(),
    thumbnails: z.object({
      default: z.object({ url: z.string() }).optional(),
      medium: z.object({ url: z.string() }).optional(),
      high: z.object({ url: z.string() }).optional(),
    }),
  }),
  statistics: z.object({
    viewCount: z.string(),
    subscriberCount: z.string(),
    hiddenSubscriberCount: z.boolean().optional(),
    videoCount: z.string()
  }),
  brandingSettings: z.object({
    channel: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.string().optional(),
      country: z.string().optional()
    }).optional(),
    image: z.object({
      bannerExternalUrl: z.string().optional()
    }).optional()
  }).optional()
});

// Channel stats response schema
const youtubeChannelResponseSchema = z.object({
  items: z.array(youtubeChannelStatisticsSchema),
});

export type YouTubeVideo = z.infer<typeof youtubeVideoSchema>;
export type YouTubePlaylist = z.infer<typeof youtubePlaylistSchema>;
export type YouTubePlaylistItem = z.infer<typeof youtubePlaylistItemSchema>;
export type YouTubeChannelStatistics = z.infer<typeof youtubeChannelStatisticsSchema>;

/**
 * Fetches latest videos from the YouTube channel
 */
export async function getLatestVideos(maxResults = 10) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`YouTube API error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const parsedData = youtubeSearchResponseSchema.parse(data);
    
    return parsedData.items;
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return [];
  }
}

/**
 * Gets video details for a specific video ID
 */
export async function getVideoDetails(videoId: string) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=snippet,contentDetails,statistics`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch video details for ID: ${videoId}`);
    }

    const data = await response.json();
    return data.items[0] || null;
  } catch (error) {
    console.error(`Error fetching video details:`, error);
    return null;
  }
}

/**
 * Gets channel information
 */
export async function getChannelInfo() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${CHANNEL_ID}&part=snippet,statistics,brandingSettings`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch channel information');
    }

    const data = await response.json();
    const parsedData = youtubeChannelResponseSchema.parse(data);
    return parsedData.items[0] || null;
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return null;
  }
}

/**
 * Gets channel statistics
 */
export async function getChannelStatistics() {
  try {
    const channelInfo = await getChannelInfo();
    
    if (!channelInfo || !channelInfo.statistics) {
      throw new Error("Failed to fetch channel statistics");
    }
    
    // Calculate additional metrics
    const viewCount = parseInt(channelInfo.statistics.viewCount);
    const videoCount = parseInt(channelInfo.statistics.videoCount);
    const subscriberCount = parseInt(channelInfo.statistics.subscriberCount);
    
    // Calculate average views per video
    const avgViewsPerVideo = videoCount > 0 ? Math.round(viewCount / videoCount) : 0;
    
    // Estimate monthly views (this is a rough estimate)
    // A more accurate way would be to fetch recent videos and sum their views
    const estimatedMonthlyViews = Math.round(viewCount * 0.1); // Just an example estimate
    
    return {
      channel: channelInfo,
      viewCount,
      subscriberCount,
      videoCount,
      avgViewsPerVideo,
      estimatedMonthlyViews
    };
  } catch (error) {
    console.error("Error calculating channel statistics:", error);
    return null;
  }
}

/**
 * Gets summary statistics from recent videos (last 30 days)
 */
export async function getRecentVideoStats(maxResults = 20) {
  try {
    // Fetch the latest videos
    const videos = await getLatestVideos(maxResults);
    const videoIds = videos.map(video => video.id.videoId);
    
    if (videoIds.length === 0) {
      throw new Error("No recent videos found");
    }
    
    // Fetch detailed stats for each video
    const videoDetailsPromises = videoIds.map(id => getVideoDetails(id));
    const videoDetails = await Promise.all(videoDetailsPromises);
    
    // Filter out null results
    const validVideoDetails = videoDetails.filter(Boolean);
    
    if (validVideoDetails.length === 0) {
      throw new Error("Could not fetch video details");
    }
    
    // Calculate total views, likes, and comments
    let totalViews = 0;
    let totalLikes = 0;
    let totalComments = 0;
    
    validVideoDetails.forEach(video => {
      if (video && video.statistics) {
        totalViews += parseInt(video.statistics.viewCount || '0');
        totalLikes += parseInt(video.statistics.likeCount || '0');
        totalComments += parseInt(video.statistics.commentCount || '0');
      }
    });
    
    // Calculate averages
    const videoCount = validVideoDetails.length;
    const avgViewsPerVideo = Math.round(totalViews / videoCount);
    const avgLikesPerVideo = Math.round(totalLikes / videoCount);
    const avgCommentsPerVideo = Math.round(totalComments / videoCount);
    
    return {
      totalViews,
      totalLikes,
      totalComments,
      videoCount,
      avgViewsPerVideo,
      avgLikesPerVideo,
      avgCommentsPerVideo,
    };
  } catch (error) {
    console.error("Error fetching recent video statistics:", error);
    return null;
  }
}

/**
 * Gets playlists from the channel
 */
export async function getPlaylists(maxResults = 50) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,contentDetails&maxResults=${maxResults}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch playlists');
    }

    const data = await response.json();
    const parsedData = youtubePlaylistsResponseSchema.parse(data);
    return parsedData.items;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
}

/**
 * Gets videos from a specific playlist
 */
export async function getPlaylistItems(playlistId: string, maxResults = 50) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=${maxResults}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch playlist items for ID: ${playlistId}`);
    }

    const data = await response.json();
    const parsedData = youtubePlaylistItemsResponseSchema.parse(data);
    return parsedData.items;
  } catch (error) {
    console.error(`Error fetching playlist items:`, error);
    return [];
  }
} 