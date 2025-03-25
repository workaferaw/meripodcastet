
import { useState, useEffect } from 'react';
import { Episode } from '../types';
import { MOCK_EPISODES, YOUTUBE_API_BASE_URL, YOUTUBE_CHANNEL_ID } from '../utils/constants';
import { toast } from 'sonner';

// In a real application, you would fetch this from an environment variable
// For this demo, we'll use a placeholder and mock data
const API_KEY = "";

export const useYoutubeData = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      setError(null);

      // If API_KEY is empty, use mock data
      if (!API_KEY) {
        console.log("Using mock data for YouTube episodes");
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 800));
        setEpisodes(MOCK_EPISODES);
        setLoading(false);
        return;
      }

      const response = await fetch(
        `${YOUTUBE_API_BASE_URL}/search?key=${API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      );

      if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status}`);
      }

      const data = await response.json();
      
      const episodesData: Episode[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        videoId: item.id.videoId,
      }));

      setEpisodes(episodesData);
    } catch (err) {
      console.error("Error fetching YouTube data:", err);
      setError("Failed to load episodes. Using sample data instead.");
      toast.error("Failed to load episodes. Using sample data instead.");
      setEpisodes(MOCK_EPISODES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return { episodes, loading, error, refetch: fetchEpisodes };
};

export default useYoutubeData;
