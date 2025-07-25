/**
 * Slider Component
 *
 * A reusable, themeable, and accessible slider component.
 * Built on top of shadcn/ui Slider component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Slider as ShadSlider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export interface SliderProps extends React.ComponentProps<typeof ShadSlider> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trackClassName?: string;
  rangeClassName?: string;
  thumbClassName?: string;
  label?: string;
  helperText?: string;
  error?: string;
}

const sizeClasses = {
  sm: {
    track: 'h-1',
    thumb: 'size-3',
  },
  md: {
    track: 'h-1.5',
    thumb: 'size-4',
  },
  lg: {
    track: 'h-2',
    thumb: 'size-5',
  },
};

const variantClasses = {
  primary: {
    track: 'bg-[var(--color-primary-disabled)]',
    range: 'bg-[var(--color-primary)]',
    thumb: 'border-[var(--color-primary)] bg-[var(--color-background)] hover:ring-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
  },
  secondary: {
    track: 'bg-[var(--color-secondary-disabled)]',
    range: 'bg-[var(--color-secondary)]',
    thumb: 'border-[var(--color-secondary)] bg-[var(--color-background)] hover:ring-[var(--color-secondary)] focus-visible:ring-[var(--color-secondary)]',
  },
  outline: {
    track: 'bg-[var(--color-outline-border)]',
    range: 'bg-[var(--color-primary)]',
    thumb: 'border-[var(--color-outline-border)] bg-[var(--color-background)] hover:ring-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]',
  },
};

const Slider = React.forwardRef<
  React.ElementRef<typeof ShadSlider>,
  SliderProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  trackClassName = '',
  rangeClassName = '',
  thumbClassName = '',
  label,
  helperText,
  error,
  id,
  ...props
}, ref) => {
  const sliderId = id || (label ? `slider-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const describedBy = [
    error ? `${sliderId}-error` : null,
    helperText ? `${sliderId}-helper` : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={sliderId}
          className="font-medium text-[var(--color-foreground)] mb-1"
        >
          {label}
        </label>
      )}
      <ShadSlider
        ref={ref}
        id={sliderId}
        className={cn(
          'w-full',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      >
        <div
          className={cn(
            'relative grow overflow-hidden rounded-full',
            sizeConfig.track,
            variantConfig.track,
            trackClassName
          )}
        >
          <div
            className={cn(
              'absolute h-full w-full',
              variantConfig.range,
              rangeClassName
            )}
          />
        </div>
        {Array.from({ length: Array.isArray(props.value) ? props.value.length : Array.isArray(props.defaultValue) ? props.defaultValue.length : 1 }, (_, index) => (
          <div
            key={index}
            className={cn(
              'block shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
              sizeConfig.thumb,
              variantConfig.thumb,
              thumbClassName
            )}
          />
        ))}
      </ShadSlider>
      {error ? (
        <span
          id={sliderId ? `${sliderId}-error` : undefined}
          className="text-xs text-[hsl(var(--destructive))] mt-1"
          role="alert"
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          id={sliderId ? `${sliderId}-helper` : undefined}
          className="text-xs text-[var(--color-foreground-secondary)] mt-1"
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider; 