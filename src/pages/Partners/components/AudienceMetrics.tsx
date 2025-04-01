import React from 'react';
import { PlayCircle, Eye, Video, Youtube, Instagram, Twitter, Users, Clock, ThumbsUp, MessageCircle } from 'lucide-react';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useYouTubeStats } from '@/hooks/useYouTubeStats';
import { formatNumber } from '@/lib/utils';

const AudienceMetrics = () => {
  const { stats, loading, error } = useYouTubeStats();

  // Format numbers for display
  const formatStat = (value: number | undefined) => {
    if (value === undefined) return '0';
    return formatNumber(value);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <TransitionWrapper>
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-display font-bold text-center">Audience Metrics</h2>
          </div>
        </TransitionWrapper>
        
        <TransitionWrapper delay={100}>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our growing audience delivers impressive engagement metrics that drive results for our partners.
          </p>
        </TransitionWrapper>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-12 glass-card rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-medium mb-2">Unable to load statistics</h3>
            <p className="text-muted-foreground mb-6">We're having trouble fetching the latest metrics. Showing estimated values instead.</p>
          </div>
        ) : (
          <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <TransitionWrapper delay={100}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">Social Media Following</CardTitle>
                  <div className="flex space-x-1">
                    <Youtube className="w-5 h-5 text-gray-400" />
                    <Instagram className="w-5 h-5 text-gray-400" />
                    <Twitter className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <CardDescription>Combined followers across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.subscriberCount)}+
                    </div>
                    <p className="text-xs text-primary/80">{stats?.subscriberGrowth || '+8%'} from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={200}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">YouTube Subscribers</CardTitle>
                  <Youtube className="w-6 h-6 text-gray-400" />
                </div>
                <CardDescription>Growing community of engaged viewers</CardDescription>
              </CardHeader>
              <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.subscriberCount)}+
                    </div>
                    <p className="text-xs text-primary/80">{stats?.subscriberGrowth || '+12%'} from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
          
          <TransitionWrapper delay={300}>
            <Card className="border-white/10 overflow-hidden h-full glass-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">Total Viewers</CardTitle>
                  <Users className="w-6 h-6 text-gray-400" />
                </div>
                <CardDescription>Monthly reach across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.estimatedMonthlyViews)}+
                    </div>
                    <p className="text-xs text-primary/80">{stats?.viewGrowth || '+15%'} from last month</p>
              </CardContent>
            </Card>
          </TransitionWrapper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <TransitionWrapper delay={400}>
                <Card className="border-white/10 overflow-hidden h-full glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Watch Time</CardTitle>
                      <Clock className="w-10 h-10 text-gray-400" />
                    </div>
                    <CardDescription>Average engagement time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {stats ? Math.round(stats.recentViews / 1000) : 31}K+ hrs
                    </div>
                    <p className="text-xs text-primary/80">+12% from last month</p>
                  </CardContent>
                </Card>
              </TransitionWrapper>
              
              <TransitionWrapper delay={500}>
                <Card className="border-white/10 overflow-hidden h-full glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Views</CardTitle>
                      <Eye className="w-10 h-10 text-gray-400" />
                    </div>
                    <CardDescription>Total channel views</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.totalViews)}+
                    </div>
                    <p className="text-xs text-primary/80">{stats?.viewGrowth || '+8%'} from last month</p>
                  </CardContent>
                </Card>
              </TransitionWrapper>
              
              <TransitionWrapper delay={600}>
                <Card className="border-white/10 overflow-hidden h-full glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Videos</CardTitle>
                      <Video className="w-10 h-10 text-gray-400" />
                    </div>
                    <CardDescription>Total episodes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.videoCount)}
                    </div>
                    <p className="text-xs text-primary/80">
                      {stats ? stats.recentVideoCount : 8} new this month
                    </p>
                  </CardContent>
                </Card>
              </TransitionWrapper>
              
              <TransitionWrapper delay={700}>
                <Card className="border-white/10 overflow-hidden h-full glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Avg. Views Per Video</CardTitle>
                      <Eye className="w-10 h-10 text-gray-400" />
                    </div>
                    <CardDescription>Consistent audience reach</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.avgViewsPerVideo)}
                    </div>
                    <p className="text-xs text-primary/80">
                      Recent: {formatStat(stats?.avgViewsPerRecentVideo)}
                    </p>
                  </CardContent>
                </Card>
              </TransitionWrapper>
              
              <TransitionWrapper delay={800}>
                <Card className="border-white/10 overflow-hidden h-full glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Engagement</CardTitle>
                      <ThumbsUp className="w-10 h-10 text-gray-400" />
                    </div>
                    <CardDescription>Likes per video</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.avgLikesPerVideo)}
                    </div>
                    <p className="text-xs text-primary/80">
                      {formatStat(stats?.recentLikes)} recent likes
                    </p>
                  </CardContent>
                </Card>
              </TransitionWrapper>
              
              <TransitionWrapper delay={900}>
              <Card className="border-white/10 overflow-hidden h-full glass-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium">Comments</CardTitle>
                      <MessageCircle className="w-10 h-10 text-gray-400" />
                  </div>
                    <CardDescription>Community interaction</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {formatStat(stats?.avgCommentsPerVideo)}
                    </div>
                    <p className="text-xs text-primary/80">
                      {formatStat(stats?.recentComments)} total comments
                    </p>
                </CardContent>
              </Card>
            </TransitionWrapper>
        </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AudienceMetrics;
