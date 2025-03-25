
import React from 'react';
import { Badge as ShadcnBadge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive';
type BadgeSize = 'default' | 'sm' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    default: 'text-xs px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
  };

  return (
    <ShadcnBadge
      variant={variant}
      className={cn(sizeClasses[size], className)}
    >
      {children}
    </ShadcnBadge>
  );
};

export default Badge;
