/**
 * Toggle Component
 *
 * A reusable, themeable, and accessible toggle button component.
 * Built on top of shadcn/ui Toggle component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Toggle as ShadToggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

export interface ToggleProps extends React.ComponentProps<typeof ShadToggle> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'h-8 px-2 text-xs',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

const variantClasses = {
  primary: [
    'bg-transparent',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-primary)]',
    'hover:text-[var(--color-primary-foreground)]',
    'focus-visible:ring-[var(--color-primary)]',
    'data-[state=on]:bg-[var(--color-primary)]',
    'data-[state=on]:text-[var(--color-primary-foreground)]',
  ],
  secondary: [
    'bg-transparent',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-secondary)]',
    'hover:text-[var(--color-secondary-foreground)]',
    'focus-visible:ring-[var(--color-secondary)]',
    'data-[state=on]:bg-[var(--color-secondary)]',
    'data-[state=on]:text-[var(--color-secondary-foreground)]',
  ],
  outline: [
    'border',
    'border-[var(--color-border)]',
    'bg-transparent',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-primary)]',
    'hover:text-[var(--color-primary-foreground)]',
    'hover:border-[var(--color-primary)]',
    'focus-visible:ring-[var(--color-primary)]',
    'data-[state=on]:bg-[var(--color-primary)]',
    'data-[state=on]:text-[var(--color-primary-foreground)]',
    'data-[state=on]:border-[var(--color-primary)]',
  ],
};

const Toggle = React.forwardRef<
  React.ElementRef<typeof ShadToggle>,
  ToggleProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  pressed,
  onPressedChange,
  disabled = false,
  ...props
}, ref) => {
  return (
    <ShadToggle
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      pressed={pressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
      {...props}
    >
      {children}
    </ShadToggle>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle; 