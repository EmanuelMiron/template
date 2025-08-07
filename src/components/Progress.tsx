/**
 * Progress Component
 *
 * A reusable, themeable, and accessible progress bar component.
 * Built on top of shadcn/ui Progress component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Progress as ShadProgress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface ProgressProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  color?: 'default' | 'success' | 'warning' | 'error';
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]/20',
  ],
  secondary: [
    'bg-[var(--color-secondary)]/20',
  ],
  outline: [
    'bg-[var(--color-outline-border)]/20',
    'border',
    'border-[var(--color-outline-border)]',
  ],
};

const indicatorVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
  ],
  outline: [
    'bg-[var(--color-primary)]',
  ],
};

const colorClasses = {
  default: '',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

const indicatorColorClasses = {
  default: '',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

const Progress: React.FC<ProgressProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  value = 0,
  max = 100,
  label,
  showValue = false,
  animated = false,
  striped = false,
  color = 'default',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const progressClasses = cn(
    'relative w-full overflow-hidden rounded-full transition-all',
    sizeClasses[size],
    ...variantClasses[variant],
    color !== 'default' && colorClasses[color],
    animated && 'animate-pulse',
    className
  );

  const indicatorClasses = cn(
    'h-full w-full flex-1 transition-all duration-300 ease-in-out',
    ...indicatorVariantClasses[variant],
    color !== 'default' && indicatorColorClasses[color],
    striped && 'bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_20px] animate-pulse',
  );

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-[var(--color-foreground-secondary)]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <ShadProgress
        className={progressClasses}
        value={percentage}
      >
        <div
          className={indicatorClasses}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ShadProgress>
    </div>
  );
};

Progress.displayName = 'Progress';

export { Progress }; 