
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandGroup, 
  CommandItem 
} from '@/components/ui/command';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Close command menu on Escape
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen((open) => !open);
      }
    };
    
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-display font-bold text-xl">Mer Podcast</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/episodes" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
              >
                Episodes
              </NavLink>
              <NavLink 
                to="/guests" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
              >
                Guests
              </NavLink>
              <NavLink 
                to="/articles" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
              >
                Articles
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/partners" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium bg-primary/10 border border-primary/20 text-primary transition-all hover:bg-primary/20 ml-2 animate-pulse`
                }
              >
                Partner with Us
              </NavLink>
            </nav>
            
            {/* Right-side Actions */}
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground rounded-md"
                onClick={() => setIsCommandOpen(true)}
              >
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Search</span>
                <kbd className="ml-2 hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
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
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-muted/70' 
                        : 'text-foreground hover:bg-muted/50'
                    }`
                  }
                  end
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/episodes" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-muted/70' 
                        : 'text-foreground hover:bg-muted/50'
                    }`
                  }
                >
                  Episodes
                </NavLink>
                <NavLink 
                  to="/guests" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-muted/70' 
                        : 'text-foreground hover:bg-muted/50'
                    }`
                  }
                >
                  Guests
                </NavLink>
                <NavLink 
                  to="/articles" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-muted/70' 
                        : 'text-foreground hover:bg-muted/50'
                    }`
                  }
                >
                  Articles
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-muted/70' 
                        : 'text-foreground hover:bg-muted/50'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/partners" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium bg-primary/10 border border-primary/20 text-primary transition-all`
                  }
                >
                  Partner with Us
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Command Menu (Search) */}
      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Search across the site..." />
        <CommandList>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => window.location.href = "/"}>
              Home
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/episodes"}>
              Episodes
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/guests"}>
              Guests
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/articles"}>
              Articles
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/about"}>
              About
            </CommandItem>
            <CommandItem onSelect={() => window.location.href = "/partners"}>
              Partner with Us
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Navbar;
