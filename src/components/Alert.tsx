/**
 * Alert Component
 *
 * A reusable, themeable, and accessible alert component with customizable styling.
 * Built on top of shadcn/ui Alert component with additional features like variants, sizes, and icon support.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Alert as ShadAlert, AlertDescription as ShadAlertDescription, AlertTitle as ShadAlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

export interface AlertProps extends Omit<React.ComponentProps<typeof ShadAlert>, 'variant' | 'title'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export interface AlertTitleProps extends React.ComponentProps<typeof ShadAlertTitle> {
  children: React.ReactNode;
}

export interface AlertDescriptionProps extends React.ComponentProps<typeof ShadAlertDescription> {
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'border-[var(--color-primary)]',
    '[&>svg]:text-white',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'border-[var(--color-secondary)]',
    '[&>svg]:text-white',
  ],
  outline: [
    'bg-transparent',
    'text-[var(--color-foreground)]',
    'border-[var(--color-outline-border)]',
    '[&>svg]:text-[var(--color-foreground)]',
  ],
  destructive: [
    'bg-[hsl(var(--destructive))]',
    'text-white',
    'border-[hsl(var(--destructive))]',
    '[&>svg]:text-white',
  ],
  success: [
    'bg-green-500',
    'text-white',
    'border-green-500',
    '[&>svg]:text-white',
  ],
  warning: [
    'bg-yellow-500',
    'text-white',
    'border-yellow-500',
    '[&>svg]:text-white',
  ],
  info: [
    'bg-blue-500',
    'text-white',
    'border-blue-500',
    '[&>svg]:text-white',
  ],
};

const Alert: React.FC<AlertProps> = ({
  variant = 'outline',
  size = 'md',
  icon,
  title,
  description,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = [
    'relative',
    'w-full',
    'rounded-lg',
    'border',
    'grid',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr]',
    'grid-cols-[0_1fr]',
    'has-[>svg]:gap-x-3',
    'gap-y-0.5',
    'items-start',
    '[&>svg]:size-4',
    '[&>svg]:translate-y-0.5',
    '[&>svg]:text-current',
  ];

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    ...variantClasses[variant],
    className
  );

  return (
    <ShadAlert className={classes} {...props}>
      {icon && icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
      {children}
    </ShadAlert>
  );
};

const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertTitle
      className={cn(
        'col-start-2',
        'line-clamp-1',
        'min-h-4',
        'font-medium',
        'tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </ShadAlertTitle>
  );
};

const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertDescription
      className={cn(
        'col-start-2',
        'grid',
        'justify-items-start',
        'gap-1',
        'text-sm',
        '[&_p]:leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </ShadAlertDescription>
  );
};

export { Alert, AlertTitle, AlertDescription }; 