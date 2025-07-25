/**
 * ScrollArea Component
 *
 * A reusable, themeable, and accessible scroll area component.
 * Built on top of shadcn/ui ScrollArea components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  ScrollArea as ShadScrollArea,
  ScrollBar as ShadScrollBar,
} from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export interface ScrollAreaProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  scrollHideDelay?: number;
  dir?: 'ltr' | 'rtl';
}

export interface ScrollBarProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  forceMount?: boolean;
}

const sizeClasses = {
  sm: 'w-2',
  md: 'w-2.5',
  lg: 'w-3',
};

const variantClasses = {
  primary: [
    'border-[var(--color-primary)]',
    'bg-[var(--color-background)]',
  ],
  secondary: [
    'border-[var(--color-secondary)]',
    'bg-[var(--color-background-secondary)]',
  ],
  outline: [
    'border-[var(--color-outline-border)]',
    'bg-[var(--color-background)]',
  ],
};

const scrollBarVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]/20',
  ],
  secondary: [
    'bg-[var(--color-secondary)]/20',
  ],
  outline: [
    'bg-[var(--color-outline-border)]/20',
  ],
};

const scrollBarThumbVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'hover:bg-[var(--color-primary-hover)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'hover:bg-[var(--color-secondary-hover)]',
  ],
  outline: [
    'bg-[var(--color-outline-border)]',
    'hover:bg-[var(--color-border-hover)]',
  ],
};

const ScrollArea: React.FC<ScrollAreaProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'auto',
  scrollHideDelay,
  dir,
}) => {
  return (
    <ShadScrollArea
      className={cn(
        'relative rounded-md border transition-all',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
    >
      {children}
    </ShadScrollArea>
  );
};

const ScrollBar: React.FC<ScrollBarProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  orientation = 'vertical',
  forceMount,
}) => {
  return (
    <ShadScrollBar
      className={cn(
        'flex touch-none p-px transition-colors select-none',
        orientation === 'vertical' && 'h-full border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
        sizeClasses[size],
        ...scrollBarVariantClasses[variant],
        className
      )}
      orientation={orientation}
      forceMount={forceMount as true | undefined}
    >
      <div
        className={cn(
          'relative flex-1 rounded-full transition-colors',
          ...scrollBarThumbVariantClasses[variant]
        )}
      />
    </ShadScrollBar>
  );
};

ScrollArea.displayName = 'ScrollArea';
ScrollBar.displayName = 'ScrollBar';

export {
  ScrollArea,
  ScrollBar,
}; 