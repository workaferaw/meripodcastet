
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
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage src={avatarUrl} alt={name} className="object-cover h-full w-full" />
            <AvatarFallback className="text-6xl h-full w-full rounded-none bg-muted/60">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl font-display font-medium text-foreground drop-shadow-md">{name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{bio}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {socialLinks && socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {socialLinks && socialLinks.website && (
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4" />
              </a>
            )}
          </div>
          
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
                  <Avatar className="h-20 w-20">
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
    </div>
  );
};

export default GuestCard;
