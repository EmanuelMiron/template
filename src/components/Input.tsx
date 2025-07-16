/**
 * Input (TextField) Component
 *
 * A reusable, themeable, and accessible single-line text input with label, error, and helper text.
 * Supports variants (primary, secondary, outline), sizes (sm, md, lg), and full customization via className and props.
 * All colors are set via CSS variables for theme compatibility. Built with Tailwind utility classes for layout and spacing.
 */
import React from 'react';

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
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-medium text-[var(--color-foreground)] mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            id={inputId}
            ref={ref}
            className={[
              'block w-full rounded-lg transition-all duration-200 outline-none',
              sizeClasses[inputSize],
              ...variantClasses[variant],
              error ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]' : '',
              icon ? 'pr-10' : '',
              className,
            ].join(' ')}
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
            className="text-xs text-[var(--color-primary)] mt-1"
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