
import React from 'react';
import { Link } from 'react-router-dom';
import { Guest } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GuestCardProps {
  guest: Guest;
  className?: string;
  compact?: boolean;
}

const GuestCard: React.FC<GuestCardProps> = ({ guest, className, compact = false }) => {
  const { name, bio, avatarUrl, socialLinks } = guest;
  
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
  
  if (compact) {
    return (
      <Link 
        to={`/guests/${guest.id}`}
        className={cn(
          "flex items-center p-2 hover:bg-muted/30 rounded-md transition-colors",
          className
        )}
      >
        <Avatar className="h-9 w-9 mr-3">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground truncate">{name}</h4>
        </div>
      </Link>
    );
  }
  
  return (
    <div className={cn(
      "group overflow-hidden transition-all duration-300 glass-card rounded-lg",
      className
    )}>
      <div className="p-5">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-display font-medium">{name}</h3>
            {socialLinks && Object.keys(socialLinks).length > 0 && (
              <div className="flex space-x-2 mt-1">
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {/* Add other social icons here */}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{bio}</p>
        
        <Link 
          to={`/guests/${guest.id}`}
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group"
        >
          View Profile
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default GuestCard;
