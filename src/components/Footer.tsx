
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About the podcast */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-lg">Meri Podcast</span>
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
              <h3 className="font-display font-medium text-base mb-3">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Terms of Use
                </Link>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-4 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Meri Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
