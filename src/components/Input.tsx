/**
 * Input (TextField) Component
 *
 * A reusable, themeable, and accessible single-line text input with label, error, and helper text.
 * Built on top of shadcn/ui Input component with additional features like variants, sizes, and icon support.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Input as ShadInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  id?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border',
    'border-[var(--color-primary)]',
    'focus:border-[var(--color-primary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'placeholder-[var(--color-foreground-secondary)]',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border',
    'border-[var(--color-secondary)]',
    'focus:border-[var(--color-secondary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'placeholder-[var(--color-foreground-secondary)]',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  outline: [
    'bg-transparent',
    'border',
    'border-[var(--color-outline-border)]',
    'focus:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'placeholder-[var(--color-foreground-secondary)]',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      variant = 'primary',
      inputSize = 'md',
      className = '',
      containerClassName = '',
      id,
      icon,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
    const describedBy = [
      error ? `${inputId}-error` : null,
      helperText ? `${inputId}-helper` : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={cn('flex flex-col gap-1', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-medium text-[var(--color-foreground)] mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <ShadInput
            id={inputId}
            ref={ref}
            className={cn(
              sizeClasses[inputSize],
              ...variantClasses[variant],
              icon && 'pr-10',
              error && [
                '!border-[hsl(var(--destructive))]',
                '!ring-2',
                '!ring-[hsl(var(--destructive))]',
                'focus:!border-[hsl(var(--destructive))]',
                'focus:!ring-[hsl(var(--destructive))]',
                'hover:!border-[hsl(var(--destructive))]'
              ],
              className
            )}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            disabled={disabled}
            {...props}
          />
          {icon && (
            <span className="absolute right-2 flex items-center pointer-events-none">
              {icon}
            </span>
          )}
        </div>
        {error ? (
          <span
            id={inputId ? `${inputId}-error` : undefined}
            className="text-xs text-[hsl(var(--destructive))] mt-1"
            role="alert"
          >
            {error}
          </span>
        ) : helperText ? (
          <span
            id={inputId ? `${inputId}-helper` : undefined}
            className="text-xs text-[var(--color-foreground-secondary)] mt-1"
          >
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 