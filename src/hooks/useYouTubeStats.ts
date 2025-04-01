import { useState, useEffect } from 'react';
import { getChannelStatistics, getRecentVideoStats } from '@/lib/youtube';

export interface YouTubeStats {
  // Channel stats
  subscriberCount: number;
  totalViews: number;
  videoCount: number;
  avgViewsPerVideo: number;
  estimatedMonthlyViews: number;
  
  // Recent video stats
  recentViews: number;
  recentLikes: number;
  recentComments: number;
  recentVideoCount: number;
  avgViewsPerRecentVideo: number;
  avgLikesPerVideo: number;
  avgCommentsPerVideo: number;
  
  // Growth metrics (these would be calculated if we had historical data)
  subscriberGrowth: string;
  viewGrowth: string;
}

export function useYouTubeStats() {
  const [stats, setStats] = useState<YouTubeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch channel statistics
      const channelStats = await getChannelStatistics();
      
      if (!channelStats) {
        throw new Error('Failed to fetch channel statistics');
      }
      
      // Fetch recent video statistics
      const recentStats = await getRecentVideoStats();
      
      if (!recentStats) {
        throw new Error('Failed to fetch recent video statistics');
      }
      
      // Combine the data
      setStats({
        // Channel stats
        subscriberCount: channelStats.subscriberCount,
        totalViews: channelStats.viewCount,
        videoCount: channelStats.videoCount,
        avgViewsPerVideo: channelStats.avgViewsPerVideo,
        estimatedMonthlyViews: channelStats.estimatedMonthlyViews,
        
        // Recent video stats
        recentViews: recentStats.totalViews,
        recentLikes: recentStats.totalLikes,
        recentComments: recentStats.totalComments,
        recentVideoCount: recentStats.videoCount,
        avgViewsPerRecentVideo: recentStats.avgViewsPerVideo,
        avgLikesPerVideo: recentStats.avgLikesPerVideo,
        avgCommentsPerVideo: recentStats.avgCommentsPerVideo,
        
        // Growth metrics (example values - in a real app you'd calculate these)
        subscriberGrowth: '+12%',
        viewGrowth: '+15%',
      });
    } catch (err) {
      console.error('Error fetching YouTube statistics:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, error, refetch: fetchStats };
} 