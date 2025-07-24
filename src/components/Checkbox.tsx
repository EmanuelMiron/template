/**
 * Checkbox Component
 *
 * A reusable, themeable, and accessible checkbox component with label and description.
 * Built on top of shadcn/ui Checkbox component with additional features like variants, sizes, and label support.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Checkbox as ShadCheckbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends React.ComponentProps<typeof ShadCheckbox> {
  label?: string;
  description?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  id?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-5',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'data-[state=checked]:bg-[var(--color-primary)]',
    'data-[state=checked]:text-[var(--color-background)]',
    'focus-visible:ring-[var(--color-primary)]',
    'focus-visible:border-[var(--color-primary)]',
    'aria-invalid:border-[hsl(var(--destructive))]',
    'aria-invalid:ring-[hsl(var(--destructive))]',
  ],
  secondary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-secondary)]',
    'data-[state=checked]:bg-[var(--color-secondary)]',
    'data-[state=checked]:text-[var(--color-background)]',
    'focus-visible:ring-[var(--color-secondary)]',
    'focus-visible:border-[var(--color-secondary)]',
    'aria-invalid:border-[hsl(var(--destructive))]',
    'aria-invalid:ring-[hsl(var(--destructive))]',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'data-[state=checked]:bg-[var(--color-outline-border)]',
    'data-[state=checked]:text-[var(--color-background)]',
    'focus-visible:ring-[var(--color-outline-border)]',
    'focus-visible:border-[var(--color-outline-border)]',
    'aria-invalid:border-[hsl(var(--destructive))]',
    'aria-invalid:ring-[hsl(var(--destructive))]',
  ],
};

const Checkbox = React.forwardRef<React.ElementRef<typeof ShadCheckbox>, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      variant = 'primary',
      size = 'md',
      className = '',
      containerClassName = '',
      id,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || (label ? `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
    const describedBy = [
      error ? `${checkboxId}-error` : null,
      description ? `${checkboxId}-description` : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const baseClasses = [
      'peer',
      'shrink-0',
      'rounded-[4px]',
      'border',
      'shadow-xs',
      'transition-shadow',
      'outline-none',
      'focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
    ];

    const classes = cn(
      baseClasses,
      sizeClasses[size],
      ...variantClasses[variant],
      className
    );

    return (
      <div className={cn('flex items-start space-x-2', containerClassName)}>
        <ShadCheckbox
          id={checkboxId}
          ref={ref}
          className={classes}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          disabled={disabled}
          {...props}
        />
        {(label || description || error) && (
          <div className="flex flex-col space-y-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-[var(--color-foreground)] cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <span
                id={checkboxId ? `${checkboxId}-description` : undefined}
                className="text-xs text-[var(--color-foreground-secondary)]"
              >
                {description}
              </span>
            )}
            {error && (
              <span
                id={checkboxId ? `${checkboxId}-error` : undefined}
                className="text-xs text-[hsl(var(--destructive))]"
                role="alert"
              >
                {error}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 