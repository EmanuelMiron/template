/**
 * Drawer Component
 *
 * A reusable, themeable, and accessible drawer/sidebar component.
 * Built on top of shadcn/ui Drawer components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Drawer as ShadDrawer,
  DrawerContent as ShadDrawerContent,
  DrawerDescription as ShadDrawerDescription,
  DrawerFooter as ShadDrawerFooter,
  DrawerHeader as ShadDrawerHeader,
  DrawerTitle as ShadDrawerTitle,
  DrawerTrigger as ShadDrawerTrigger,
  DrawerClose as ShadDrawerClose,
  DrawerOverlay as ShadDrawerOverlay,
  DrawerPortal as ShadDrawerPortal,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

export interface DrawerProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface DrawerContentProps extends React.ComponentProps<typeof ShadDrawerContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerHeaderProps extends React.ComponentProps<typeof ShadDrawerHeader> {
  children?: React.ReactNode;
}

export interface DrawerFooterProps extends React.ComponentProps<typeof ShadDrawerFooter> {
  children?: React.ReactNode;
}

export interface DrawerTitleProps extends React.ComponentProps<typeof ShadDrawerTitle> {
  children?: React.ReactNode;
}

export interface DrawerDescriptionProps extends React.ComponentProps<typeof ShadDrawerDescription> {
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

const Drawer: React.FC<DrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDrawer {...props}>
      {children}
    </ShadDrawer>
  );
};

const DrawerContent: React.FC<DrawerContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadDrawerContent
      className={cn(
        'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
        'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
        'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
        'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
        'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
      {children}
    </ShadDrawerContent>
  );
};

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDrawerHeader {...props}>
      {children}
    </ShadDrawerHeader>
  );
};

const DrawerFooter: React.FC<DrawerFooterProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDrawerFooter {...props}>
      {children}
    </ShadDrawerFooter>
  );
};

const DrawerTitle: React.FC<DrawerTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDrawerTitle {...props}>
      {children}
    </ShadDrawerTitle>
  );
};

const DrawerDescription: React.FC<DrawerDescriptionProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDrawerDescription {...props}>
      {children}
    </ShadDrawerDescription>
  );
};

// Re-export other drawer components with their original functionality
const DrawerTrigger = ShadDrawerTrigger;
const DrawerClose = ShadDrawerClose;
const DrawerOverlay = ShadDrawerOverlay;
const DrawerPortal = ShadDrawerPortal;

Drawer.displayName = 'Drawer';
DrawerContent.displayName = 'DrawerContent';
DrawerHeader.displayName = 'DrawerHeader';
DrawerFooter.displayName = 'DrawerFooter';
DrawerTitle.displayName = 'DrawerTitle';
DrawerDescription.displayName = 'DrawerDescription';

export {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
}; 