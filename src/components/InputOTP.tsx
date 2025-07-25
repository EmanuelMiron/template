/**
 * InputOTP Component
 *
 * A reusable, themeable, and accessible one-time password input component.
 * Built on top of shadcn/ui InputOTP components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  InputOTP as ShadInputOTP,
  InputOTPGroup as ShadInputOTPGroup,
  InputOTPSlot as ShadInputOTPSlot,
  InputOTPSeparator as ShadInputOTPSeparator,
} from '@/components/ui/input-otp';
import { cn } from '@/lib/utils';

export interface InputOTPProps {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  id?: string;
  disabled?: boolean;
  maxLength?: number;
  pattern?: string;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  children?: React.ReactNode;
}

export interface InputOTPGroupProps extends React.ComponentProps<typeof ShadInputOTPGroup> {
  className?: string;
}

export interface InputOTPSlotProps {
  index: number;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  error?: string;
}

export interface InputOTPSeparatorProps extends React.ComponentProps<typeof ShadInputOTPSeparator> {
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'focus:border-[var(--color-primary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'data-[active=true]:border-[var(--color-primary)]',
    'data-[active=true]:ring-[var(--color-primary)]',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'focus:border-[var(--color-secondary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'data-[active=true]:border-[var(--color-secondary)]',
    'data-[active=true]:ring-[var(--color-secondary)]',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'focus:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'data-[active=true]:border-[var(--color-primary)]',
    'data-[active=true]:ring-[var(--color-primary)]',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
};

const InputOTP: React.FC<InputOTPProps> = ({
  label,
  helperText,
  error,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  containerClassName = '',
  id,
  disabled = false,
  maxLength = 6,
  children,
  ...props
}) => {
  const inputId = id || (label ? `input-otp-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

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
      <ShadInputOTP
        className={cn(
          'disabled:cursor-not-allowed',
          className
        )}
        disabled={disabled}
        maxLength={maxLength}
        {...props}
      >
        {children}
      </ShadInputOTP>
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
};

const InputOTPGroup: React.FC<InputOTPGroupProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadInputOTPGroup
      className={cn('flex items-center', className)}
      {...props}
    >
      {children}
    </ShadInputOTPGroup>
  );
};

const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  variant = 'primary',
  size = 'md',
  className = '',
  error,
  ...props
}) => {
  return (
    <ShadInputOTPSlot
      index={index}
      className={cn(
        'relative flex items-center justify-center border text-sm shadow-sm transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        sizeClasses[size],
        ...variantClasses[variant],
        error && [
          '!border-[hsl(var(--destructive))]',
          '!ring-2',
          '!ring-[hsl(var(--destructive))]',
          'focus:!border-[hsl(var(--destructive))]',
          'focus:!ring-[hsl(var(--destructive))]',
          'data-[active=true]:!border-[hsl(var(--destructive))]',
          'data-[active=true]:!ring-[hsl(var(--destructive))]',
        ],
        className
      )}
      {...props}
    />
  );
};

const InputOTPSeparator: React.FC<InputOTPSeparatorProps> = ({
  className = '',
  ...props
}) => {
  return (
    <ShadInputOTPSeparator
      className={cn('text-[var(--color-foreground-secondary)]', className)}
      {...props}
    />
  );
};

InputOTP.displayName = 'InputOTP';
InputOTPGroup.displayName = 'InputOTPGroup';
InputOTPSlot.displayName = 'InputOTPSlot';
InputOTPSeparator.displayName = 'InputOTPSeparator';

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
}; 