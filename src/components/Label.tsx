/**
 * Label Component
 *
 * A reusable, themeable, and accessible label component.
 * Built on top of shadcn/ui Label component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Label as ShadLabel } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface LabelProps extends React.ComponentProps<typeof ShadLabel> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const variantClasses = {
  primary: [
    'text-[var(--color-foreground)]',
    'font-medium',
  ],
  secondary: [
    'text-[var(--color-foreground-secondary)]',
    'font-medium',
  ],
  outline: [
    'text-[var(--color-foreground)]',
    'font-normal',
  ],
};

const Label: React.FC<LabelProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <ShadLabel
      className={cn(
        'flex items-center gap-2 leading-none select-none',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        sizeClasses[size],
        ...variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-[hsl(var(--destructive))] ml-1">*</span>
      )}
    </ShadLabel>
  );
};

Label.displayName = 'Label';

export default Label; 