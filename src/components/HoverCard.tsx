/**
 * HoverCard Component
 *
 * A reusable, themeable, and accessible hover card component.
 * Built on top of shadcn/ui HoverCard components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  HoverCard as ShadHoverCard,
  HoverCardContent as ShadHoverCardContent,
  HoverCardTrigger as ShadHoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

export interface HoverCardProps {
  children?: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
}

export interface HoverCardContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export interface HoverCardTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

const sizeClasses = {
  sm: 'w-48',
  md: 'w-64',
  lg: 'w-80',
  xl: 'w-96',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'shadow-lg',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'shadow-lg',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'shadow-md',
  ],
};

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  openDelay = 700,
  closeDelay = 300,
}) => {
  return (
    <ShadHoverCard openDelay={openDelay} closeDelay={closeDelay}>
      {children}
    </ShadHoverCard>
  );
};

const HoverCardContent: React.FC<HoverCardContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  align = 'center',
  sideOffset = 4,
}) => {
  return (
    <ShadHoverCardContent
      className={cn(
        'z-50 rounded-md border p-4 shadow-md outline-hidden',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      align={align}
      sideOffset={sideOffset}
    >
      {children}
    </ShadHoverCardContent>
  );
};

const HoverCardTrigger: React.FC<HoverCardTriggerProps> = ({
  children,
  asChild = false,
}) => {
  return (
    <ShadHoverCardTrigger asChild={asChild}>
      {children}
    </ShadHoverCardTrigger>
  );
};

HoverCard.displayName = 'HoverCard';
HoverCardContent.displayName = 'HoverCardContent';
HoverCardTrigger.displayName = 'HoverCardTrigger';

export {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
}; 