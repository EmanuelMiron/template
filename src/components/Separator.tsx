/**
 * Separator Component
 *
 * A reusable, themeable, and accessible separator component.
 * Built on top of shadcn/ui Separator component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Separator as ShadSeparator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export interface SeparatorProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const sizeClasses = {
  sm: {
    horizontal: 'h-px',
    vertical: 'w-px',
  },
  md: {
    horizontal: 'h-0.5',
    vertical: 'w-0.5',
  },
  lg: {
    horizontal: 'h-1',
    vertical: 'w-1',
  },
};

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
  ],
  outline: [
    'bg-[var(--color-outline-border)]',
  ],
};

const Separator: React.FC<SeparatorProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  orientation = 'horizontal',
  decorative = true,
}) => {
  return (
    <ShadSeparator
      className={cn(
        'shrink-0 transition-all',
        sizeClasses[size][orientation],
        orientation === 'horizontal' && 'w-full',
        orientation === 'vertical' && 'h-full',
        ...variantClasses[variant],
        className
      )}
      orientation={orientation}
      decorative={decorative}
    />
  );
};

Separator.displayName = 'Separator';

export { Separator }; 