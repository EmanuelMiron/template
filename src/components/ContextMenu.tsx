/**
 * ContextMenu Component
 *
 * A reusable, themeable, and accessible context menu component.
 * Built on top of shadcn/ui ContextMenu components with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  ContextMenu as ShadContextMenu,
  ContextMenuTrigger as ShadContextMenuTrigger,
  ContextMenuContent as ShadContextMenuContent,
  ContextMenuItem as ShadContextMenuItem,
  ContextMenuCheckboxItem as ShadContextMenuCheckboxItem,
  ContextMenuRadioItem as ShadContextMenuRadioItem,
  ContextMenuLabel as ShadContextMenuLabel,
  ContextMenuSeparator as ShadContextMenuSeparator,
  ContextMenuShortcut as ShadContextMenuShortcut,
  ContextMenuGroup as ShadContextMenuGroup,
  ContextMenuPortal as ShadContextMenuPortal,
  ContextMenuSub as ShadContextMenuSub,
  ContextMenuSubContent as ShadContextMenuSubContent,
  ContextMenuSubTrigger as ShadContextMenuSubTrigger,
  ContextMenuRadioGroup as ShadContextMenuRadioGroup,
} from '@/components/ui/context-menu';
import { cn } from '@/lib/utils';

export interface ContextMenuProps extends React.ComponentProps<typeof ShadContextMenu> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuTriggerProps extends React.ComponentProps<typeof ShadContextMenuTrigger> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuContentProps extends React.ComponentProps<typeof ShadContextMenuContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  menuSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuItemProps extends Omit<React.ComponentProps<typeof ShadContextMenuItem>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuCheckboxItemProps extends React.ComponentProps<typeof ShadContextMenuCheckboxItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuRadioItemProps extends React.ComponentProps<typeof ShadContextMenuRadioItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuLabelProps extends React.ComponentProps<typeof ShadContextMenuLabel> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSeparatorProps extends React.ComponentProps<typeof ShadContextMenuSeparator> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuShortcutProps extends React.ComponentProps<typeof ShadContextMenuShortcut> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuGroupProps extends React.ComponentProps<typeof ShadContextMenuGroup> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuPortalProps extends React.ComponentProps<typeof ShadContextMenuPortal> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSubProps extends React.ComponentProps<typeof ShadContextMenuSub> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSubContentProps extends React.ComponentProps<typeof ShadContextMenuSubContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  menuSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSubTriggerProps extends React.ComponentProps<typeof ShadContextMenuSubTrigger> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuRadioGroupProps extends React.ComponentProps<typeof ShadContextMenuRadioGroup> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const menuSizeClasses = {
  sm: 'min-w-[8rem]',
  md: 'min-w-[12rem]',
  lg: 'min-w-[16rem]',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
    'shadow-md',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
    'shadow-md',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'shadow-sm',
  ],
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadContextMenu
      data-slot="context-menu"
      {...props}
    >
      {children}
    </ShadContextMenu>
  );
};

const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuTrigger
      data-slot="context-menu-trigger"
      className={cn(className)}
      {...props}
    >
      {children}
    </ShadContextMenuTrigger>
  );
};

const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
  variant = 'primary',
  menuSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuContent
      data-slot="context-menu-content"
      className={cn(
        'z-50 max-h-[--radix-context-menu-content-available-height]',
        'origin-[--radix-context-menu-content-transform-origin]',
        'overflow-x-hidden overflow-y-auto rounded-md border p-1',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        menuSizeClasses[menuSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuContent>
  );
};

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const variantMapping = {
    primary: 'default',
    secondary: 'default',
    outline: 'default',
    destructive: 'destructive',
  } as const;

  return (
    <ShadContextMenuItem
      data-slot="context-menu-item"
      variant={variantMapping[variant]}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm',
        'text-[var(--color-foreground)]',
        'data-[highlighted]:bg-[var(--color-primary)] data-[highlighted]:text-white',
        'focus:bg-[var(--color-primary)] focus:text-white',
        'outline-none select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'data-[inset]:pl-8',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        'transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuItem>
  );
};

const ContextMenuCheckboxItem: React.FC<ContextMenuCheckboxItemProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuCheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm',
        'text-[var(--color-foreground)]',
        'data-[highlighted]:bg-[var(--color-primary)] data-[highlighted]:text-white',
        'focus:bg-[var(--color-primary)] focus:text-white',
        'outline-none select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        'transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuCheckboxItem>
  );
};

const ContextMenuRadioItem: React.FC<ContextMenuRadioItemProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuRadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm',
        'text-[var(--color-foreground)]',
        'data-[highlighted]:bg-[var(--color-primary)] data-[highlighted]:text-white',
        'focus:bg-[var(--color-primary)] focus:text-white',
        'outline-none select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        'transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuRadioItem>
  );
};

const ContextMenuLabel: React.FC<ContextMenuLabelProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuLabel
      data-slot="context-menu-label"
      className={cn(
        'px-2 py-1.5 text-sm font-medium',
        'text-[var(--color-foreground)]',
        'data-[inset]:pl-8',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuLabel>
  );
};

const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuSeparator
      data-slot="context-menu-separator"
      className={cn(
        'bg-[var(--color-border)]',
        '-mx-1 my-1 h-px',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuSeparator>
  );
};

const ContextMenuShortcut: React.FC<ContextMenuShortcutProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuShortcut
      data-slot="context-menu-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest',
        'text-[var(--color-foreground-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuShortcut>
  );
};

const ContextMenuGroup: React.FC<ContextMenuGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadContextMenuGroup
      data-slot="context-menu-group"
      {...props}
    >
      {children}
    </ShadContextMenuGroup>
  );
};

const ContextMenuPortal: React.FC<ContextMenuPortalProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadContextMenuPortal
      data-slot="context-menu-portal"
      {...props}
    >
      {children}
    </ShadContextMenuPortal>
  );
};

const ContextMenuSub: React.FC<ContextMenuSubProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadContextMenuSub
      data-slot="context-menu-sub"
      {...props}
    >
      {children}
    </ShadContextMenuSub>
  );
};

const ContextMenuSubContent: React.FC<ContextMenuSubContentProps> = ({
  variant = 'primary',
  menuSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuSubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'z-50 min-w-[8rem] origin-[--radix-context-menu-content-transform-origin]',
        'overflow-hidden rounded-md border p-1 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        menuSizeClasses[menuSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuSubContent>
  );
};

const ContextMenuSubTrigger: React.FC<ContextMenuSubTriggerProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadContextMenuSubTrigger
      data-slot="context-menu-sub-trigger"
      className={cn(
        'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm',
        'text-[var(--color-foreground)]',
        'data-[highlighted]:bg-[var(--color-primary)] data-[highlighted]:text-white',
        'focus:bg-[var(--color-primary)] focus:text-white',
        'outline-none select-none',
        'data-[inset]:pl-8',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        'transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </ShadContextMenuSubTrigger>
  );
};

const ContextMenuRadioGroup: React.FC<ContextMenuRadioGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadContextMenuRadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    >
      {children}
    </ShadContextMenuRadioGroup>
  );
};

ContextMenu.displayName = 'ContextMenu';
ContextMenuTrigger.displayName = 'ContextMenuTrigger';
ContextMenuContent.displayName = 'ContextMenuContent';
ContextMenuItem.displayName = 'ContextMenuItem';
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';
ContextMenuLabel.displayName = 'ContextMenuLabel';
ContextMenuSeparator.displayName = 'ContextMenuSeparator';
ContextMenuShortcut.displayName = 'ContextMenuShortcut';
ContextMenuGroup.displayName = 'ContextMenuGroup';
ContextMenuPortal.displayName = 'ContextMenuPortal';
ContextMenuSub.displayName = 'ContextMenuSub';
ContextMenuSubContent.displayName = 'ContextMenuSubContent';
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}; 