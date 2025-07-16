/**
 * Checkbox Component
 *
 * A reusable, themeable, and accessible checkbox with label, error, helper text, and indeterminate state.
 * Supports variants (primary, secondary, outline), sizes (sm, md, lg), and full customization via className and props.
 * All colors are set via CSS variables for theme compatibility. Built with Tailwind utility classes for layout and spacing.
 * Uses Lucide React icons for check and indeterminate states.
 */
import React, { useEffect, useRef } from 'react';
import { Check, Minus } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  checkboxSize?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  indeterminate?: boolean;
  children?: React.ReactNode; // for label/content
}

const sizeClasses = {
  sm: 'w-4 h-4 text-sm',
  md: 'w-5 h-5 text-base',
  lg: 'w-6 h-6 text-lg',
};

const iconSize = {
  sm: 16,
  md: 20,
  lg: 24,
};

const variantClasses = {
  primary: [
    'border-[var(--color-primary)]',
    'checked:bg-[var(--color-primary)]',
    'checked:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:border-[var(--color-primary-disabled)]',
  ],
  secondary: [
    'border-[var(--color-secondary)]',
    'checked:bg-[var(--color-secondary)]',
    'checked:border-[var(--color-secondary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:border-[var(--color-secondary-disabled)]',
  ],
  outline: [
    'border-[var(--color-outline-border)]',
    'checked:bg-[var(--color-primary)]',
    'checked:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:border-[var(--color-outline-border-disabled)]',
  ],
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      variant = 'primary',
      checkboxSize = 'md',
      className = '',
      containerClassName = '',
      indeterminate = false,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    // Allow ref forwarding
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // Merge forwarded ref
    function setRefs(el: HTMLInputElement) {
      (inputRef).current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
    }

    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span className="relative flex items-center">
            <input
              type="checkbox"
              ref={setRefs}
              className={[
                'peer shrink-0 rounded transition-all duration-200 outline-none border-2',
                sizeClasses[checkboxSize],
                ...variantClasses[variant],
                error ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]' : '',
                className,
              ].join(' ')}
              aria-invalid={!!error}
              disabled={disabled}
              {...props}
            />
            {/* Icon overlay for checked/indeterminate */}
            <span className="pointer-events-none absolute left-0 top-0 flex items-center justify-center w-full h-full">
              {indeterminate ? (
                <Minus width={iconSize[checkboxSize]} height={iconSize[checkboxSize]} className="text-white" />
              ) : props.checked ? (
                <Check width={iconSize[checkboxSize]} height={iconSize[checkboxSize]} className="text-white" />
              ) : null}
            </span>
          </span>
          {label || children ? (
            <span className="text-[var(--color-foreground)] font-medium">
              {label}{children}
            </span>
          ) : null}
        </label>
        {error ? (
          <span className="text-xs text-[var(--color-primary)] mt-1" role="alert">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-xs text-[var(--color-foreground-secondary)] mt-1">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 