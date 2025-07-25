/**
 * Menubar Component
 *
 * A reusable, themeable, and accessible menubar component.
 * Built on top of shadcn/ui Menubar components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Menubar as ShadMenubar,
  MenubarMenu as ShadMenubarMenu,
  MenubarTrigger as ShadMenubarTrigger,
  MenubarContent as ShadMenubarContent,
  MenubarItem as ShadMenubarItem,
  MenubarCheckboxItem as ShadMenubarCheckboxItem,
  MenubarRadioGroup as ShadMenubarRadioGroup,
  MenubarRadioItem as ShadMenubarRadioItem,
  MenubarSeparator as ShadMenubarSeparator,
  MenubarShortcut as ShadMenubarShortcut,
  MenubarSub as ShadMenubarSub,
  MenubarSubTrigger as ShadMenubarSubTrigger,
  MenubarSubContent as ShadMenubarSubContent,
  MenubarLabel as ShadMenubarLabel,
  MenubarGroup as ShadMenubarGroup,
  MenubarPortal as ShadMenubarPortal,
} from '@/components/ui/menubar';
import { cn } from '@/lib/utils';

export interface MenubarProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface MenubarMenuProps {
  children?: React.ReactNode;
}

export interface MenubarTriggerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface MenubarContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
}

export interface MenubarItemProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
  disabled?: boolean;
}

export interface MenubarCheckboxItemProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
}

export interface MenubarRadioItemProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface MenubarRadioGroupProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface MenubarSubProps {
  children?: React.ReactNode;
}

export interface MenubarSubTriggerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
  disabled?: boolean;
}

export interface MenubarSubContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface MenubarLabelProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface MenubarShortcutProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface MenubarSeparatorProps {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const sizeClasses = {
  sm: 'h-7 text-xs',
  md: 'h-9 text-sm',
  lg: 'h-11 text-base',
};

const triggerSizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-2 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const itemSizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-2 py-1.5 text-sm',
  lg: 'px-3 py-2 text-base',
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
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
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

const Menubar: React.FC<MenubarProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadMenubar
      className={cn(
        'flex items-center gap-1 rounded-md border p-1 shadow-sm',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
    >
      {children}
    </ShadMenubar>
  );
};

const MenubarMenu: React.FC<MenubarMenuProps> = ({ children }) => {
  return <ShadMenubarMenu>{children}</ShadMenubarMenu>;
};

const MenubarTrigger: React.FC<MenubarTriggerProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadMenubarTrigger
      className={cn(
        'flex items-center rounded-sm font-medium outline-hidden select-none',
        'focus:bg-[var(--color-background-hover)] focus:text-[var(--color-foreground)]',
        'data-[state=open]:bg-[var(--color-background-hover)] data-[state=open]:text-[var(--color-foreground)]',
        triggerSizeClasses[size],
        className
      )}
    >
      {children}
    </ShadMenubarTrigger>
  );
};

const MenubarContent: React.FC<MenubarContentProps> = ({
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
}) => {
  return (
    <ShadMenubarContent
      className={cn(
        'z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        ...contentVariantClasses[variant],
        className
      )}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
    >
      {children}
    </ShadMenubarContent>
  );
};

const MenubarItem: React.FC<MenubarItemProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  inset = false,
  disabled = false,
}) => {
  return (
    <ShadMenubarItem
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none',
        'focus:bg-[var(--color-background-hover)] focus:text-[var(--color-foreground)]',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'data-[inset]:pl-8',
        itemSizeClasses[size],
        variant === 'destructive' && [
          'text-[hsl(var(--destructive))]',
          'focus:bg-[hsl(var(--destructive))]/10',
          'focus:text-[hsl(var(--destructive))]',
        ],
        className
      )}
      inset={inset}
      disabled={disabled}
    >
      {children}
    </ShadMenubarItem>
  );
};

const MenubarCheckboxItem: React.FC<MenubarCheckboxItemProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  checked = false,
  disabled = false,
}) => {
  return (
    <ShadMenubarCheckboxItem
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none',
        'focus:bg-[var(--color-background-hover)] focus:text-[var(--color-foreground)]',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        itemSizeClasses[size],
        className
      )}
      checked={checked}
      disabled={disabled}
    >
      {children}
    </ShadMenubarCheckboxItem>
  );
};

const MenubarRadioItem: React.FC<MenubarRadioItemProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  value,
  disabled = false,
}) => {
  return (
    <ShadMenubarRadioItem
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 outline-hidden select-none',
        'focus:bg-[var(--color-background-hover)] focus:text-[var(--color-foreground)]',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        itemSizeClasses[size],
        className
      )}
      value={value}
      disabled={disabled}
    >
      {children}
    </ShadMenubarRadioItem>
  );
};

const MenubarRadioGroup: React.FC<MenubarRadioGroupProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
  value,
  onValueChange,
}) => {
  return (
    <ShadMenubarRadioGroup
      className={cn(className)}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </ShadMenubarRadioGroup>
  );
};

const MenubarSub: React.FC<MenubarSubProps> = ({ children }) => {
  return <ShadMenubarSub>{children}</ShadMenubarSub>;
};

const MenubarSubTrigger: React.FC<MenubarSubTriggerProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  inset = false,
  disabled = false,
}) => {
  return (
    <ShadMenubarSubTrigger
      className={cn(
        'flex cursor-default items-center rounded-sm outline-none select-none',
        'focus:bg-[var(--color-background-hover)] focus:text-[var(--color-foreground)]',
        'data-[state=open]:bg-[var(--color-background-hover)] data-[state=open]:text-[var(--color-foreground)]',
        'data-[inset]:pl-8',
        itemSizeClasses[size],
        className
      )}
      inset={inset}
      disabled={disabled}
    >
      {children}
    </ShadMenubarSubTrigger>
  );
};

const MenubarSubContent: React.FC<MenubarSubContentProps> = ({
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadMenubarSubContent
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        ...contentVariantClasses[variant],
        className
      )}
    >
      {children}
    </ShadMenubarSubContent>
  );
};

const MenubarLabel: React.FC<MenubarLabelProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  inset = false,
}) => {
  return (
    <ShadMenubarLabel
      className={cn(
        'font-medium',
        'data-[inset]:pl-8',
        itemSizeClasses[size],
        className
      )}
      inset={inset}
    >
      {children}
    </ShadMenubarLabel>
  );
};

const MenubarShortcut: React.FC<MenubarShortcutProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadMenubarShortcut
      className={cn(
        'ml-auto tracking-widest',
        size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs',
        'text-[var(--color-foreground-secondary)]',
        className
      )}
    >
      {children}
    </ShadMenubarShortcut>
  );
};

const MenubarSeparator: React.FC<MenubarSeparatorProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  className = '',
}) => {
  return (
    <ShadMenubarSeparator
      className={cn(
        '-mx-1 my-1 h-px',
        'bg-[var(--color-border)]',
        className
      )}
    />
  );
};

// Re-export other components that don't need wrapping
const MenubarGroup = ShadMenubarGroup;
const MenubarPortal = ShadMenubarPortal;

Menubar.displayName = 'Menubar';
MenubarMenu.displayName = 'MenubarMenu';
MenubarTrigger.displayName = 'MenubarTrigger';
MenubarContent.displayName = 'MenubarContent';
MenubarItem.displayName = 'MenubarItem';
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';
MenubarRadioItem.displayName = 'MenubarRadioItem';
MenubarRadioGroup.displayName = 'MenubarRadioGroup';
MenubarSub.displayName = 'MenubarSub';
MenubarSubTrigger.displayName = 'MenubarSubTrigger';
MenubarSubContent.displayName = 'MenubarSubContent';
MenubarLabel.displayName = 'MenubarLabel';
MenubarShortcut.displayName = 'MenubarShortcut';
MenubarSeparator.displayName = 'MenubarSeparator';

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
  MenubarGroup,
  MenubarPortal,
}; 