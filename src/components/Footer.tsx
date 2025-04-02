import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '@/utils/constants';
import { Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About the podcast */}
          <div className="space-y-3">
            <Link to="/" className="font-display font-bold text-lg">
              {SITE_NAME}
            </Link>
            <p className="text-muted-foreground text-sm">
              The premium podcast exploring fascinating ideas and stories with incredible guests.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8 md:justify-around col-span-2">
            <div>
              <h3 className="font-display font-medium text-base mb-3">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/episodes"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Episodes
                </Link>
                <Link 
                  to="/articles"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Articles
                </Link>
                <Link 
                  to="/advertise"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Partner
                </Link>
                <Link 
                  to="/suggest-guest"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Suggest a Guest
                </Link>
              </nav>
            </div>
            
            <div>
              <h3 className="font-display font-medium text-base mb-3">Follow Us</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  to="https://youtube.com" 
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Youtube size={16} />
                  YouTube
                </Link>
                <Link 
                  to="https://tiktok.com" 
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  {/* Using a custom SVG for TikTok since it's not available in lucide-react */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="lucide"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M16 8v8"></path>
                    <path d="M12 16v-8a4 4 0 0 1 4-4"></path>
                    <path d="M22 8.5a7 7 0 0 1-7-7"></path>
                  </svg>
                  TikTok
                </Link>
                <Link 
                  to="https://instagram.com" 
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </Link>
                <Link 
                  to="https://linkedin.com" 
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
                <Link 
                  to="https://x.com" 
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Twitter size={16} />
                  X
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-4 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
