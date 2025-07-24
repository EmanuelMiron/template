/**
 * Badge Component
 *
 * A reusable, themeable, and accessible badge component with customizable styling.
 * Built on top of shadcn/ui Badge component with additional features like variants, sizes, and icon support.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Badge as ShadBadge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface BadgeProps extends Omit<React.ComponentProps<typeof ShadBadge>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info';
  badgeSize?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'border-[var(--color-primary)]',
    'hover:bg-[var(--color-primary-hover)]',
    'hover:border-[var(--color-primary-hover)]',
    '[&>svg]:text-white',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'border-[var(--color-secondary)]',
    'hover:bg-[var(--color-secondary-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
    '[&>svg]:text-white',
  ],
  outline: [
    'bg-transparent',
    'text-[var(--color-foreground)]',
    'border-[var(--color-outline-border)]',
    'hover:bg-[var(--color-outline-hover)]',
    'hover:border-[var(--color-border-hover)]',
    '[&>svg]:text-[var(--color-foreground)]',
  ],
  destructive: [
    'bg-[hsl(var(--destructive))]',
    'text-white',
    'border-[hsl(var(--destructive))]',
    'hover:bg-[hsl(var(--destructive))/90]',
    'hover:border-[hsl(var(--destructive))/90]',
    '[&>svg]:text-white',
  ],
  success: [
    'bg-green-500',
    'text-white',
    'border-green-500',
    'hover:bg-green-600',
    'hover:border-green-600',
    '[&>svg]:text-white',
  ],
  warning: [
    'bg-yellow-500',
    'text-white',
    'border-yellow-500',
    'hover:bg-yellow-600',
    'hover:border-yellow-600',
    '[&>svg]:text-white',
  ],
  info: [
    'bg-blue-500',
    'text-white',
    'border-blue-500',
    'hover:bg-blue-600',
    'hover:border-blue-600',
    '[&>svg]:text-white',
  ],
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      badgeSize = 'md',
      icon,
      iconPosition = 'left',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'border',
      'font-medium',
      'w-fit',
      'whitespace-nowrap',
      'shrink-0',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-[var(--color-primary)]',
      '[&>svg]:size-3',
      'gap-1',
      '[&>svg]:pointer-events-none',
    ];

    const iconClasses = iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row';

    return (
      <ShadBadge
        ref={ref}
        data-slot="badge"
        className={cn(
          baseClasses,
          sizeClasses[badgeSize],
          ...variantClasses[variant],
          iconClasses,
          className
        )}
        {...props}
      >
        {icon && icon}
        {children}
      </ShadBadge>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge; 