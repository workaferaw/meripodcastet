
import React from 'react';
import { Link } from 'react-router-dom';
import { Guest } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExternalLink, FileText, Linkedin, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent
} from '@/components/ui/dialog';

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
            {socialLinks && (
              <div className="flex space-x-2 mt-1">
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {socialLinks.website && (
                  <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{bio}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
              <FileText className="mr-1 w-4 h-4" />
              View Profile
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={avatarUrl} alt={name} />
                  <AvatarFallback className="text-lg">{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-display font-medium">{name}</h2>
                  {socialLinks && (
                    <div className="flex space-x-3 mt-2">
                      {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {socialLinks.website && (
                        <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      {socialLinks.twitter && (
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                <p>{bio}</p>
              </div>
              <div className="pt-4">
                <Link 
                  to={`/guests/${guest.id}`}
                  className="text-primary hover:underline"
                >
                  View full profile page
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GuestCard;
