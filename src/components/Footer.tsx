
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Twitter, Instagram, Youtube, Rss, ArrowRight } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_NAME } from '@/utils/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Headphones className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">{SITE_NAME}</span>
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
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
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
              {['Apple Podcasts', 'Spotify', 'YouTube', 'Overcast', 'Pocket Casts'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {platform}
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
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background"
              />
              <Button size="sm" className="px-3">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
