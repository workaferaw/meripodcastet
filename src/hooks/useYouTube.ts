import { useState, useEffect } from 'react';
import { getLatestVideos, getChannelInfo, YouTubeVideo } from '@/lib/youtube';

export function useLatestVideos(maxResults = 10) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const data = await getLatestVideos(maxResults);
        setVideos(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
        console.error('Error in useLatestVideos hook:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, isLoading, error };
}

export function useChannelInfo() {
  const [channelInfo, setChannelInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        setIsLoading(true);
        const data = await getChannelInfo();
        setChannelInfo(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch channel info');
        console.error('Error in useChannelInfo hook:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChannelInfo();
  }, []);

  return { channelInfo, isLoading, error };
} 