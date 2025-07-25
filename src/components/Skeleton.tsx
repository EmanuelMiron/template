/**
 * Skeleton Component
 *
 * A reusable, themeable, and accessible skeleton loading component.
 * Built on top of shadcn/ui Skeleton component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Skeleton as ShadSkeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
  animated?: boolean;
  rounded?: boolean;
}

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'opacity-20',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'opacity-15',
  ],
  outline: [
    'bg-[var(--color-outline-border)]',
    'opacity-30',
  ],
};



const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'primary',
  className = '',
  children,
  animated = true,
  rounded = false,
  ...props
}) => {
  const classes = [
    ...variantClasses[variant],
    animated ? 'animate-pulse' : '',
    rounded ? 'rounded-full' : 'rounded-md',
    className,
  ].join(' ');

  return (
    <ShadSkeleton
      className={cn(classes)}
      {...props}
    >
      {children}
    </ShadSkeleton>
  );
};

Skeleton.displayName = 'Skeleton';

export default Skeleton; 