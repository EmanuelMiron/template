/**
 * Switch Component
 *
 * A reusable, themeable, and accessible switch/toggle component.
 * Built on top of shadcn/ui Switch component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Switch as ShadSwitch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export interface SwitchProps extends React.ComponentProps<typeof ShadSwitch> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  helperText?: string;
  error?: string;
  id?: string;
}

const sizeClasses = {
  sm: {
    root: 'h-3 w-6',
    thumb: 'size-3',
  },
  md: {
    root: 'h-[1.15rem] w-8',
    thumb: 'size-4',
  },
  lg: {
    root: 'h-5 w-10',
    thumb: 'size-5',
  },
};

const variantClasses = {
  primary: {
    root: [
      'data-[state=checked]:bg-[var(--color-primary)]',
      'data-[state=unchecked]:bg-[var(--color-input)]',
      'focus-visible:ring-[var(--color-primary)]',
    ],
    thumb: [
      'bg-[var(--color-background)]',
      'data-[state=checked]:bg-[var(--color-primary-foreground)]',
    ],
  },
  secondary: {
    root: [
      'data-[state=checked]:bg-[var(--color-secondary)]',
      'data-[state=unchecked]:bg-[var(--color-input)]',
      'focus-visible:ring-[var(--color-secondary)]',
    ],
    thumb: [
      'bg-[var(--color-background)]',
      'data-[state=checked]:bg-[var(--color-secondary-foreground)]',
    ],
  },
  outline: {
    root: [
      'data-[state=checked]:bg-[var(--color-primary)]',
      'data-[state=unchecked]:bg-[var(--color-outline-border)]',
      'focus-visible:ring-[var(--color-primary)]',
      'border-[var(--color-border)]',
    ],
    thumb: [
      'bg-[var(--color-background)]',
      'data-[state=checked]:bg-[var(--color-primary-foreground)]',
    ],
  },
};

const Switch = React.forwardRef<
  React.ElementRef<typeof ShadSwitch>,
  SwitchProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  label,
  helperText,
  error,
  id,
  disabled = false,
  ...props
}, ref) => {
  const switchId = id || (label ? `switch-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const describedBy = [
    error ? `${switchId}-error` : null,
    helperText ? `${switchId}-helper` : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center space-x-2">
        <ShadSwitch
          ref={ref}
          id={switchId}
          className={cn(
            'peer inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
            sizeConfig.root,
            ...variantConfig.root,
            error && [
              'data-[state=checked]:!bg-[hsl(var(--destructive))]',
              'focus-visible:!ring-[hsl(var(--destructive))]',
            ],
            className
          )}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          disabled={disabled}
          {...props}
        >
          <div
            className={cn(
              'pointer-events-none block rounded-full ring-0 transition-transform',
              sizeConfig.thumb,
              ...variantConfig.thumb,
              'data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
            )}
          />
        </ShadSwitch>
        {label && (
          <label
            htmlFor={switchId}
            className="font-medium text-[var(--color-foreground)] cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
      {error ? (
        <span
          id={switchId ? `${switchId}-error` : undefined}
          className="text-xs text-[hsl(var(--destructive))] mt-1"
          role="alert"
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          id={switchId ? `${switchId}-helper` : undefined}
          className="text-xs text-[var(--color-foreground-secondary)] mt-1"
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch; 