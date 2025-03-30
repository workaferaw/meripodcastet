
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  Twitter, 
  Instagram, 
  Youtube, 
  Rss, 
  ArrowRight, 
  Linkedin, 
  TiktokIcon, 
  MessageSquare
} from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/utils/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Headphones className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">Meri Podcast</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The premium podcast exploring fascinating ideas and stories with incredible guests.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  stroke="currentColor"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 8v8a4 4 0 0 1-4 4" />
                  <path d="M15 8h-2" />
                  <path d="M9 12v-2" />
                </svg>
              </a>
              <a 
                href="/rss" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="RSS Feed"
              >
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>

          <Separator orientation="vertical" className="hidden md:block mx-auto h-auto" />

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-base">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Separator orientation="vertical" className="hidden md:block mx-auto h-auto" />

          {/* Listening Platforms */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-base">Listen On</h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Apple Podcasts', url: 'https://podcasts.apple.com' },
                { name: 'Spotify', url: 'https://spotify.com' },
                { name: 'YouTube', url: 'https://youtube.com' },
                { name: 'Overcast', url: 'https://overcast.fm' },
                { name: 'Pocket Casts', url: 'https://pocketcasts.com' }
              ].map((platform) => (
                <a 
                  key={platform.name} 
                  href={platform.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="hidden md:block mx-auto h-auto" />

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-base">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest episodes and articles.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="sm" className="px-3">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Meri Podcast. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
