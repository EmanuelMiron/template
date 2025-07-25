/**
 * Dialog Component
 *
 * A reusable, themeable, and accessible dialog/modal component.
 * Built on top of shadcn/ui Dialog components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Dialog as ShadDialog,
  DialogContent as ShadDialogContent,
  DialogDescription as ShadDialogDescription,
  DialogFooter as ShadDialogFooter,
  DialogHeader as ShadDialogHeader,
  DialogTitle as ShadDialogTitle,
  DialogTrigger as ShadDialogTrigger,
  DialogClose as ShadDialogClose,
  DialogOverlay as ShadDialogOverlay,
  DialogPortal as ShadDialogPortal,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export interface DialogProps extends React.ComponentProps<typeof ShadDialog> {
  children?: React.ReactNode;
}

export interface DialogContentProps extends React.ComponentProps<typeof ShadDialogContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}

export interface DialogHeaderProps extends React.ComponentProps<typeof ShadDialogHeader> {
  children?: React.ReactNode;
}

export interface DialogFooterProps extends React.ComponentProps<typeof ShadDialogFooter> {
  children?: React.ReactNode;
}

export interface DialogTitleProps extends React.ComponentProps<typeof ShadDialogTitle> {
  children?: React.ReactNode;
}

export interface DialogDescriptionProps extends React.ComponentProps<typeof ShadDialogDescription> {
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'shadow-lg',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'shadow-lg',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'shadow-md',
  ],
};

const Dialog: React.FC<DialogProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDialog {...props}>
      {children}
    </ShadDialog>
  );
};

const DialogContent: React.FC<DialogContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  showCloseButton = true,
  ...props
}) => {
  return (
    <ShadDialogContent
      className={cn(
        'fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200',
        sizeClasses[size],
        ...variantClasses[variant],
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className
      )}
      showCloseButton={showCloseButton}
      {...props}
    >
      {children}
    </ShadDialogContent>
  );
};

const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDialogHeader {...props}>
      {children}
    </ShadDialogHeader>
  );
};

const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDialogFooter {...props}>
      {children}
    </ShadDialogFooter>
  );
};

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDialogTitle {...props}>
      {children}
    </ShadDialogTitle>
  );
};

const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDialogDescription {...props}>
      {children}
    </ShadDialogDescription>
  );
};

// Re-export other dialog components with their original functionality
const DialogTrigger = ShadDialogTrigger;
const DialogClose = ShadDialogClose;
const DialogOverlay = ShadDialogOverlay;
const DialogPortal = ShadDialogPortal;

Dialog.displayName = 'Dialog';
DialogContent.displayName = 'DialogContent';
DialogHeader.displayName = 'DialogHeader';
DialogFooter.displayName = 'DialogFooter';
DialogTitle.displayName = 'DialogTitle';
DialogDescription.displayName = 'DialogDescription';

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogPortal,
}; 