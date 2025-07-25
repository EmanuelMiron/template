/**
 * Sheet Component
 *
 * A reusable, themeable, and accessible sheet component.
 * Built on top of shadcn/ui Sheet components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Sheet as ShadSheet,
  SheetTrigger as ShadSheetTrigger,
  SheetClose as ShadSheetClose,
  SheetContent as ShadSheetContent,
  SheetHeader as ShadSheetHeader,
  SheetFooter as ShadSheetFooter,
  SheetTitle as ShadSheetTitle,
  SheetDescription as ShadSheetDescription,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export interface SheetProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface SheetTriggerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface SheetCloseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}



export interface SheetContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  forceMount?: boolean;
}

export interface SheetHeaderProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SheetFooterProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SheetTitleProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SheetDescriptionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const variantClasses = {
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

const Sheet: React.FC<SheetProps> = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
}) => {
  return (
    <ShadSheet
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </ShadSheet>
  );
};

const SheetTrigger: React.FC<SheetTriggerProps> = ({
  className = '',
  children,
  asChild = false,
}) => {
  return (
    <ShadSheetTrigger
      className={cn(className)}
      asChild={asChild}
    >
      {children}
    </ShadSheetTrigger>
  );
};

const SheetClose: React.FC<SheetCloseProps> = ({
  className = '',
  children,
  asChild = false,
}) => {
  return (
    <ShadSheetClose
      className={cn(className)}
      asChild={asChild}
    >
      {children}
    </ShadSheetClose>
  );
};



const SheetContent: React.FC<SheetContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  side = 'right',
  forceMount,
}) => {
  return (
    <ShadSheetContent
      className={cn(
        'fixed z-50 flex flex-col gap-4 shadow-lg transition-all',
        sizeClasses[size],
        ...variantClasses[variant],
        side === 'right' && 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
        side === 'left' && 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        side === 'top' && 'inset-x-0 top-0 h-auto border-b',
        side === 'bottom' && 'inset-x-0 bottom-0 h-auto border-t',
        className
      )}
      side={side}
      forceMount={forceMount as true | undefined}
    >
      {children}
    </ShadSheetContent>
  );
};

const SheetHeader: React.FC<SheetHeaderProps> = ({
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSheetHeader
      className={cn(
        'flex flex-col gap-1.5',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSheetHeader>
  );
};

const SheetFooter: React.FC<SheetFooterProps> = ({
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSheetFooter
      className={cn(
        'mt-auto flex flex-col gap-2',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSheetFooter>
  );
};

const SheetTitle: React.FC<SheetTitleProps> = ({
  className = '',
  children,
}) => {
  return (
    <ShadSheetTitle
      className={cn(
        'font-semibold text-[var(--color-foreground)]',
        className
      )}
    >
      {children}
    </ShadSheetTitle>
  );
};

const SheetDescription: React.FC<SheetDescriptionProps> = ({
  className = '',
  children,
}) => {
  return (
    <ShadSheetDescription
      className={cn(
        'text-sm text-[var(--color-foreground-secondary)]',
        className
      )}
    >
      {children}
    </ShadSheetDescription>
  );
};

Sheet.displayName = 'Sheet';
SheetTrigger.displayName = 'SheetTrigger';
SheetClose.displayName = 'SheetClose';
SheetContent.displayName = 'SheetContent';
SheetHeader.displayName = 'SheetHeader';
SheetFooter.displayName = 'SheetFooter';
SheetTitle.displayName = 'SheetTitle';
SheetDescription.displayName = 'SheetDescription';

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}; 