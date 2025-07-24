/**
 * RadioGroup Component
 *
 * A reusable, themeable, and accessible radio group component.
 * Built on top of shadcn/ui RadioGroup component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { 
  RadioGroup as ShadRadioGroup,
  RadioGroupItem as ShadRadioGroupItem
} from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

export interface RadioGroupProps extends React.ComponentProps<typeof ShadRadioGroup> {
  variant?: 'primary' | 'secondary' | 'outline';
  radioGroupSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface RadioGroupItemProps extends React.ComponentProps<typeof ShadRadioGroupItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  radioItemSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-5',
};

const variantClasses = {
  primary: [
    'border-[var(--color-primary)]',
    'text-[var(--color-primary)]',
    'focus-visible:border-[var(--color-primary)]',
    'focus-visible:ring-[var(--color-primary)]',
    'data-[state=checked]:border-[var(--color-primary)]',
    'data-[state=checked]:bg-[var(--color-primary)]',
  ],
  secondary: [
    'border-[var(--color-secondary)]',
    'text-[var(--color-secondary)]',
    'focus-visible:border-[var(--color-secondary)]',
    'focus-visible:ring-[var(--color-secondary)]',
    'data-[state=checked]:border-[var(--color-secondary)]',
    'data-[state=checked]:bg-[var(--color-secondary)]',
  ],
  outline: [
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'focus-visible:border-[var(--color-primary)]',
    'focus-visible:ring-[var(--color-primary)]',
    'data-[state=checked]:border-[var(--color-primary)]',
    'data-[state=checked]:bg-[var(--color-primary)]',
  ],
};

const RadioGroup = React.forwardRef<React.ElementRef<typeof ShadRadioGroup>, RadioGroupProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadRadioGroup
        ref={ref}
        data-slot="radio-group"
        className={cn(
          'grid gap-3',
          'transition-all duration-200',
          className
        )}
        {...props}
      >
        {children}
      </ShadRadioGroup>
    );
  }
);

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof ShadRadioGroupItem>, RadioGroupItemProps>(
  (
    {
      variant = 'primary',
      radioItemSize = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadRadioGroupItem
        ref={ref}
        data-slot="radio-group-item"
        className={cn(
          'aspect-square shrink-0 rounded-full border shadow-xs',
          'transition-all duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-[3px]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'aria-invalid:ring-[hsl(var(--destructive))/20]',
          'aria-invalid:border-[hsl(var(--destructive))]',
          sizeClasses[radioItemSize],
          ...variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadRadioGroupItem>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem }; 