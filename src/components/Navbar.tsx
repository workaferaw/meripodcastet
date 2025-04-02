import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { SITE_NAME } from '@/utils/constants';
import { ThemeToggle } from '@/components/ui/theme-toggle';

// Navigation items array to avoid duplication
const navigationItems = [
  { path: '/', label: 'Home', exact: true },
  { path: '/episodes', label: 'Episodes' },
  { path: '/guests', label: 'Guests' },
  { path: '/articles', label: 'Articles' },
  { path: '/about', label: 'About' },
];

// Partner link is styled differently
const partnerItem = { path: '/partners', label: 'Partner with Us' };

// NavItem component for reusability
const NavItem = ({ item, isMobile = false }) => {
  const { path, label, exact } = item;
  
  if (path === partnerItem.path) {
    return (
      <NavLink 
        to={path} 
        className={({ isActive }) => 
          `px-3 py-2 rounded-md text-sm font-medium bg-primary/10 border border-primary/20 text-primary transition-all ${!isMobile ? 'hover:bg-primary/20 ml-2 animate-pulse' : ''}`
        }
      >
        {label}
      </NavLink>
    );
  }
  
  return (
    <NavLink 
      to={path} 
      className={({ isActive }) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive 
            ? isMobile ? 'text-primary bg-muted/70' : 'text-primary'
            : isMobile 
              ? 'text-foreground hover:bg-muted/50'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`
      }
      end={exact}
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Command item handler for navigation
  const handleCommandSelect = (path) => {
    window.location.href = path;
  };
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-display font-bold text-xl">{SITE_NAME}</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <NavItem key={item.path} item={item} />
              ))}
              <NavItem item={partnerItem} />
            </nav>
            
            {/* Right-side Actions */}
            <div className="flex items-center">
              <ThemeToggle />
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground rounded-md ml-2"
                onClick={() => window.location.href = '/dashboard-control-panel-23x8m/auth'}
              >
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Admin</span>
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 md:hidden"
                onClick={handleToggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg">
            <div className="container px-4 py-3">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <NavItem key={item.path} item={item} isMobile={true} />
                ))}
                <NavItem item={partnerItem} isMobile={true} />
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
