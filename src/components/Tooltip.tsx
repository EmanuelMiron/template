/**
 * Tooltip Component
 *
 * A reusable, themeable, and accessible tooltip component.
 * Built on top of shadcn/ui Tooltip components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Tooltip as ShadTooltip, TooltipTrigger as ShadTooltipTrigger, TooltipContent as ShadTooltipContent, TooltipProvider as ShadTooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export interface TooltipProps extends React.ComponentProps<typeof ShadTooltip> {
  children: React.ReactNode;
  delayDuration?: number;
}

export interface TooltipTriggerProps extends React.ComponentProps<typeof ShadTooltipTrigger> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export interface TooltipContentProps extends React.ComponentProps<typeof ShadTooltipContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  sideOffset?: number;
}

export interface TooltipProviderProps extends React.ComponentProps<typeof ShadTooltipProvider> {
  children: React.ReactNode;
  delayDuration?: number;
}

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
};

const variantClasses = {
  primary: {
    content: [
      'bg-[var(--color-primary)]',
      'text-[var(--color-primary-foreground)]',
      'border-[var(--color-primary-border)]',
    ],
    arrow: 'bg-[var(--color-primary)] fill-[var(--color-primary)]',
  },
  secondary: {
    content: [
      'bg-[var(--color-secondary)]',
      'text-[var(--color-secondary-foreground)]',
      'border-[var(--color-secondary-border)]',
    ],
    arrow: 'bg-[var(--color-secondary)] fill-[var(--color-secondary)]',
  },
  outline: {
    content: [
      'bg-[var(--color-background)]',
      'text-[var(--color-foreground)]',
      'border-[var(--color-border)]',
      'border',
    ],
    arrow: 'bg-[var(--color-background)] fill-[var(--color-background)] border-[var(--color-border)]',
  },
};

const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
  delayDuration = 0,
  ...props
}) => {
  return (
    <ShadTooltipProvider
      delayDuration={delayDuration}
      {...props}
    >
      {children}
    </ShadTooltipProvider>
  );
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  delayDuration = 0,
  ...props
}) => {
  return (
    <ShadTooltip
      delayDuration={delayDuration}
      {...props}
    >
      {children}
    </ShadTooltip>
  );
};

const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  className = '',
  children,
  asChild = false,
  ...props
}) => {
  return (
    <ShadTooltipTrigger
      className={cn(className)}
      asChild={asChild}
      {...props}
    >
      {children}
    </ShadTooltipTrigger>
  );
};

const TooltipContent: React.FC<TooltipContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  sideOffset = 4,
  ...props
}) => {
  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <ShadTooltipContent
      className={cn(
        'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md text-balance shadow-md',
        sizeConfig,
        ...variantConfig.content,
        className
      )}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <div className={cn(
        'size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] border',
        variantConfig.arrow
      )} />
    </ShadTooltipContent>
  );
};

TooltipProvider.displayName = 'TooltipProvider';
Tooltip.displayName = 'Tooltip';
TooltipTrigger.displayName = 'TooltipTrigger';
TooltipContent.displayName = 'TooltipContent';

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }; 