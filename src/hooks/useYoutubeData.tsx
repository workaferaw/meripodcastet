import { useState, useEffect } from 'react';
import { Episode } from '../types';
import { MOCK_EPISODES } from '../utils/constants';
import { toast } from 'sonner';
import { getLatestVideos, getPlaylists, getPlaylistItems, YouTubePlaylist, YouTubePlaylistItem } from '@/lib/youtube';

export interface PlaylistGroup {
  id: string;
  title: string;
  episodes: Episode[];
}

export const useYoutubeData = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // New state for playlists
  const [seasonPlaylists, setSeasonPlaylists] = useState<PlaylistGroup[]>([]);
  const [sectorPlaylists, setSectorPlaylists] = useState<PlaylistGroup[]>([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

  // Function to convert YouTube playlist items to our Episode format
  const convertPlaylistItemsToEpisodes = (items: YouTubePlaylistItem[]): Episode[] => {
    return items.map(item => {
      // Extract title and assign categories
      const title = item.snippet.title;
      let categories = ["Podcast"];
      
      // Same category extraction logic as before
      const techKeywords = ["tech", "technology", "software", "programming", "developer"];
      const businessKeywords = ["business", "startup", "entrepreneur", "industry"];
      const healthKeywords = ["health", "wellness", "fitness", "nutrition"];
      
      const lowerTitle = title.toLowerCase();
      
      if (techKeywords.some(keyword => lowerTitle.includes(keyword))) {
        categories.push("Technology");
      }
      
      if (businessKeywords.some(keyword => lowerTitle.includes(keyword))) {
        categories.push("Business");
      }
      
      if (healthKeywords.some(keyword => lowerTitle.includes(keyword))) {
        categories.push("Health");
      }
      
      // Create an Episode object from the playlist item
      return {
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description || '',
        thumbnailUrl: item.snippet.thumbnails.high?.url || 
                      item.snippet.thumbnails.medium?.url || 
                      item.snippet.thumbnails.default?.url || '',
        publishedAt: item.snippet.publishedAt,
        videoId: item.snippet.resourceId.videoId,
        categories: categories,
        guestIds: [],
      };
    });
  };

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all playlists from the channel
      const playlists = await getPlaylists();
      
      if (playlists.length === 0) {
        throw new Error("No playlists found");
      }

      // Filter playlists into seasons and sectors
      const seasons: YouTubePlaylist[] = playlists.filter(playlist => 
        playlist.snippet.title.toLowerCase().includes('season')
      );
      
      const sectors: YouTubePlaylist[] = playlists.filter(playlist => 
        playlist.snippet.title.toLowerCase().endsWith('sector')
      );

      // Process season playlists
      const seasonGroups: PlaylistGroup[] = await Promise.all(
        seasons.map(async (playlist) => {
          const items = await getPlaylistItems(playlist.id);
          return {
            id: playlist.id,
            title: playlist.snippet.title,
            episodes: convertPlaylistItemsToEpisodes(items)
          };
        })
      );

      // Process sector playlists
      const sectorGroups: PlaylistGroup[] = await Promise.all(
        sectors.map(async (playlist) => {
          const items = await getPlaylistItems(playlist.id);
          return {
            id: playlist.id,
            title: playlist.snippet.title,
            episodes: convertPlaylistItemsToEpisodes(items)
          };
        })
      );

      // Set the processed playlist groups
      setSeasonPlaylists(seasonGroups);
      setSectorPlaylists(sectorGroups);

      // Fetch latest videos as a fallback
      const youtubeVideos = await getLatestVideos(50);
      
      // Process YouTube videos into episodes
      if (youtubeVideos.length > 0) {
        const episodesData: Episode[] = youtubeVideos.map((video) => {
          const title = video.snippet.title;
          let categories = ["Podcast"];
          
          const techKeywords = ["tech", "technology", "software", "programming", "developer"];
          const businessKeywords = ["business", "startup", "entrepreneur", "industry"];
          const healthKeywords = ["health", "wellness", "fitness", "nutrition"];
          
          const lowerTitle = title.toLowerCase();
          
          if (techKeywords.some(keyword => lowerTitle.includes(keyword))) {
            categories.push("Technology");
          }
          
          if (businessKeywords.some(keyword => lowerTitle.includes(keyword))) {
            categories.push("Business");
          }
          
          if (healthKeywords.some(keyword => lowerTitle.includes(keyword))) {
            categories.push("Health");
          }
          
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnailUrl: video.snippet.thumbnails.high.url,
            publishedAt: video.snippet.publishedAt,
            videoId: video.id.videoId,
            categories: categories,
            guestIds: [],
          };
        });

        // Extract all unique categories
        const allCategories = Array.from(
          new Set(
            episodesData.flatMap(episode => episode.categories)
          )
        ).sort();
        
        setCategories(allCategories);
        setEpisodes(episodesData);
      } else if (seasonGroups.length > 0) {
        // Use the first season's episodes if we have seasons but no direct videos
        const allEpisodes = seasonGroups.flatMap(group => group.episodes);
        setEpisodes(allEpisodes);
        
        // Extract categories
        const allCategories = Array.from(
          new Set(
            allEpisodes.flatMap(episode => episode.categories)
          )
        ).sort();
        
        setCategories(allCategories);
      } else {
        throw new Error("No videos or playlists found");
      }
    } catch (err) {
      console.error("Error fetching YouTube data:", err);
      setError("Failed to load episodes. Using sample data instead.");
      toast.error("Failed to load episodes. Using sample data instead.");
      
      // Extract all unique categories from mock data
      const allCategories = Array.from(
        new Set(
          MOCK_EPISODES.flatMap(episode => episode.categories || [])
        )
      ).sort();
      
      setCategories(allCategories);
      setEpisodes(MOCK_EPISODES);
    } finally {
      setLoading(false);
    }
  };

  // Get episodes for the selected playlist
  const getPlaylistEpisodes = () => {
    if (!selectedPlaylistId) return episodes;
    
    // Check seasons first
    const seasonPlaylist = seasonPlaylists.find(p => p.id === selectedPlaylistId);
    if (seasonPlaylist) return seasonPlaylist.episodes;
    
    // Then check sectors
    const sectorPlaylist = sectorPlaylists.find(p => p.id === selectedPlaylistId);
    if (sectorPlaylist) return sectorPlaylist.episodes;
    
    return episodes;
  };

  // Filter episodes by selected category
  const filteredEpisodes = selectedCategory
    ? getPlaylistEpisodes().filter(episode => episode.categories?.includes(selectedCategory))
    : getPlaylistEpisodes();

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return { 
    episodes: filteredEpisodes, 
    allEpisodes: episodes,
    loading, 
    error, 
    refetch: fetchEpisodes,
    categories,
    selectedCategory,
    setSelectedCategory,
    seasonPlaylists,
    sectorPlaylists,
    selectedPlaylistId,
    setSelectedPlaylistId,
  };
};

export default useYoutubeData;

