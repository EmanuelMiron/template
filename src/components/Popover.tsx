/**
 * Popover Component
 *
 * A reusable, themeable, and accessible popover component.
 * Built on top of shadcn/ui Popover components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Popover as ShadPopover,
  PopoverTrigger as ShadPopoverTrigger,
  PopoverContent as ShadPopoverContent,
  PopoverAnchor as ShadPopoverAnchor,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export interface PopoverProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface PopoverTriggerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface PopoverContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null;
  collisionPadding?: number;
  arrowPadding?: number;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
  updatePositionStrategy?: 'optimized' | 'always';
  forceMount?: boolean;
}

export interface PopoverAnchorProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  virtualRef?: React.RefObject<Element>;
}

const sizeClasses = {
  sm: 'w-64 p-3',
  md: 'w-72 p-4',
  lg: 'w-80 p-5',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'shadow-[var(--color-primary)]/20',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'shadow-[var(--color-secondary)]/20',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'shadow-[var(--color-outline-border)]/20',
  ],
};

const Popover: React.FC<PopoverProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
}) => {
  return (
    <ShadPopover
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </ShadPopover>
  );
};

const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
  asChild = false,
}) => {
  return (
    <ShadPopoverTrigger
      className={cn(className)}
      asChild={asChild}
    >
      {children}
    </ShadPopoverTrigger>
  );
};

const PopoverContent: React.FC<PopoverContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  align = 'center',
  sideOffset = 4,
  alignOffset,
  side,
  avoidCollisions = true,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky = 'partial',
  hideWhenDetached,
  updatePositionStrategy = 'optimized',
  forceMount,
}) => {
  return (
    <ShadPopoverContent
      className={cn(
        'z-50 rounded-md border shadow-md outline-hidden',
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
      alignOffset={alignOffset}
      side={side}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      updatePositionStrategy={updatePositionStrategy}
      forceMount={forceMount as true | undefined}
    >
      {children}
    </ShadPopoverContent>
  );
};

const PopoverAnchor: React.FC<PopoverAnchorProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
  virtualRef,
}) => {
  return (
    <ShadPopoverAnchor
      className={cn(className)}
      virtualRef={virtualRef}
    >
      {children}
    </ShadPopoverAnchor>
  );
};

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'PopoverTrigger';
PopoverContent.displayName = 'PopoverContent';
PopoverAnchor.displayName = 'PopoverAnchor';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
}; 