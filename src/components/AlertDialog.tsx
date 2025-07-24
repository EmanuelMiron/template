/**
 * AlertDialog Component
 *
 * A reusable, themeable, and accessible alert dialog component with customizable styling.
 * Built on top of shadcn/ui AlertDialog component with additional features like variants and theming.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  AlertDialog as ShadAlertDialog,
  AlertDialogAction as ShadAlertDialogAction,
  AlertDialogCancel as ShadAlertDialogCancel,
  AlertDialogContent as ShadAlertDialogContent,
  AlertDialogDescription as ShadAlertDialogDescription,
  AlertDialogFooter as ShadAlertDialogFooter,
  AlertDialogHeader as ShadAlertDialogHeader,
  AlertDialogTitle as ShadAlertDialogTitle,
  AlertDialogTrigger as ShadAlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';

export interface AlertDialogProps extends React.ComponentProps<typeof ShadAlertDialog> {
  children: React.ReactNode;
}

export interface AlertDialogTriggerProps extends React.ComponentProps<typeof ShadAlertDialogTrigger> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconOnly?: boolean;
}

export interface AlertDialogContentProps extends React.ComponentProps<typeof ShadAlertDialogContent> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface AlertDialogHeaderProps extends React.ComponentProps<typeof ShadAlertDialogHeader> {
  children: React.ReactNode;
}

export interface AlertDialogFooterProps extends React.ComponentProps<typeof ShadAlertDialogFooter> {
  children: React.ReactNode;
}

export interface AlertDialogTitleProps extends React.ComponentProps<typeof ShadAlertDialogTitle> {
  children: React.ReactNode;
}

export interface AlertDialogDescriptionProps extends React.ComponentProps<typeof ShadAlertDialogDescription> {
  children: React.ReactNode;
}

export interface AlertDialogActionProps extends React.ComponentProps<typeof ShadAlertDialogAction> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

export interface AlertDialogCancelProps extends React.ComponentProps<typeof ShadAlertDialogCancel> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const triggerSizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const triggerIconSizeClasses = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3',
};

const triggerVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'hover:bg-[var(--color-primary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'hover:bg-[var(--color-secondary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
  outline: [
    'bg-[var(--color-outline)]',
    'text-[var(--color-foreground)]',
    'border',
    'border-[var(--color-outline-border)]',
    'hover:bg-[var(--color-outline-hover)]',
    'hover:border-[var(--color-border-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:border-[var(--color-outline-border-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  destructive: [
    'bg-[hsl(var(--destructive))]',
    'text-white',
    'hover:bg-[hsl(var(--destructive))/90]',
    'focus:ring-2',
    'focus:ring-[hsl(var(--destructive))]',
    'focus:ring-offset-2',
    'disabled:bg-[hsl(var(--destructive))/50]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
};

const contentVariantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
  ],
};

const actionSizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const actionVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'hover:bg-[var(--color-primary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'hover:bg-[var(--color-secondary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
  outline: [
    'bg-[var(--color-outline)]',
    'text-[var(--color-foreground)]',
    'border',
    'border-[var(--color-outline-border)]',
    'hover:bg-[var(--color-outline-hover)]',
    'hover:border-[var(--color-border-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:border-[var(--color-outline-border-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  destructive: [
    'bg-[hsl(var(--destructive))]',
    'text-white',
    'hover:bg-[hsl(var(--destructive))/90]',
    'focus:ring-2',
    'focus:ring-[hsl(var(--destructive))]',
    'focus:ring-offset-2',
    'disabled:bg-[hsl(var(--destructive))/50]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'hover:shadow-md',
  ],
};

const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  ...props
}) => {
  return <ShadAlertDialog {...props}>{children}</ShadAlertDialog>;
};

const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  icon,
  iconOnly = false,
  className = '',
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ];

  const sizeClasses = iconOnly ? triggerIconSizeClasses[size] : triggerSizeClasses[size];
  const iconSizeClasses = {
    sm: 'h-4 w-4 flex-shrink-0',
    md: 'h-5 w-5 flex-shrink-0',
    lg: 'h-6 w-6 flex-shrink-0',
  };

  const classes = cn(
    baseClasses,
    sizeClasses,
    ...triggerVariantClasses[variant],
    className
  );

  return (
    <ShadAlertDialogTrigger className={classes} {...props}>
      {iconOnly ? (
        <span className={`${iconSizeClasses[size]} flex items-center justify-center`}>{icon}</span>
      ) : icon ? (
        <span className="flex items-center gap-2">
          <span className={`${iconSizeClasses[size]} flex items-center justify-center`}>{icon}</span>
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </ShadAlertDialogTrigger>
  );
};

const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  children,
  variant = 'outline',
  className = '',
  ...props
}) => {
  const baseClasses = [
    'bg-background',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95',
    'data-[state=open]:zoom-in-95',
    'fixed',
    'top-[50%]',
    'left-[50%]',
    'z-50',
    'grid',
    'w-full',
    'max-w-[calc(100%-2rem)]',
    'translate-x-[-50%]',
    'translate-y-[-50%]',
    'gap-4',
    'rounded-lg',
    'border',
    'p-6',
    'shadow-lg',
    'duration-200',
    'sm:max-w-lg',
  ];

  const classes = cn(
    baseClasses,
    ...contentVariantClasses[variant],
    className
  );

  return (
    <ShadAlertDialogContent className={classes} {...props}>
      {children}
    </ShadAlertDialogContent>
  );
};

const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertDialogHeader
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    >
      {children}
    </ShadAlertDialogHeader>
  );
};

const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertDialogFooter
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    >
      {children}
    </ShadAlertDialogFooter>
  );
};

const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertDialogTitle
      className={cn('text-lg font-semibold text-[var(--color-foreground)]', className)}
      {...props}
    >
      {children}
    </ShadAlertDialogTitle>
  );
};

const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <ShadAlertDialogDescription
      className={cn('text-[var(--color-foreground-secondary)] text-sm', className)}
      {...props}
    >
      {children}
    </ShadAlertDialogDescription>
  );
};

const AlertDialogAction: React.FC<AlertDialogActionProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ];

  const classes = cn(
    baseClasses,
    actionSizeClasses[size],
    ...actionVariantClasses[variant],
    className
  );

  return (
    <ShadAlertDialogAction className={classes} {...props}>
      {children}
    </ShadAlertDialogAction>
  );
};

const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ];

  const classes = cn(
    baseClasses,
    actionSizeClasses[size],
    ...actionVariantClasses[variant],
    className
  );

  return (
    <ShadAlertDialogCancel className={classes} {...props}>
      {children}
    </ShadAlertDialogCancel>
  );
};

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}; 