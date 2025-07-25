/**
 * Sidebar Component
 *
 * A reusable, themeable, and accessible sidebar component.
 * Built on top of shadcn/ui Sidebar components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Sidebar as ShadSidebar,
  SidebarProvider as ShadSidebarProvider,
  SidebarTrigger as ShadSidebarTrigger,
  SidebarContent as ShadSidebarContent,
  SidebarHeader as ShadSidebarHeader,
  SidebarFooter as ShadSidebarFooter,
  SidebarGroup as ShadSidebarGroup,
  SidebarGroupContent as ShadSidebarGroupContent,
  SidebarGroupLabel as ShadSidebarGroupLabel,
  SidebarGroupAction as ShadSidebarGroupAction,
  SidebarMenu as ShadSidebarMenu,
  SidebarMenuItem as ShadSidebarMenuItem,
  SidebarMenuButton as ShadSidebarMenuButton,
  SidebarMenuAction as ShadSidebarMenuAction,
  SidebarMenuBadge as ShadSidebarMenuBadge,
  SidebarMenuSkeleton as ShadSidebarMenuSkeleton,
  SidebarMenuSub as ShadSidebarMenuSub,
  SidebarMenuSubItem as ShadSidebarMenuSubItem,
  SidebarMenuSubButton as ShadSidebarMenuSubButton,
  SidebarSeparator as ShadSidebarSeparator,
  SidebarInput as ShadSidebarInput,
  SidebarInset as ShadSidebarInset,
  SidebarRail as ShadSidebarRail,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export interface SidebarProviderProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

export interface SidebarTriggerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SidebarContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarHeaderProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarFooterProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarGroupProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarGroupContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarGroupLabelProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface SidebarGroupActionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface SidebarMenuProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuItemProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string;
  onClick?: () => void;
}

export interface SidebarMenuActionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  showOnHover?: boolean;
}

export interface SidebarMenuBadgeProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSkeletonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export interface SidebarMenuSubProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSubItemProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSubButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SidebarSeparatorProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarInputProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  placeholder?: string;
  type?: string;
}

export interface SidebarInsetProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarRailProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
    'border-[var(--color-primary)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'text-[var(--color-foreground)]',
    'border-[var(--color-secondary)]',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
    'border-[var(--color-outline-border)]',
  ],
};

const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  defaultOpen = true,
  open,
  onOpenChange,
  className = '',
}) => {
  return (
    <ShadSidebarProvider
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className={cn(className)}
    >
      {children}
    </ShadSidebarProvider>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  side = 'left',
  collapsible = 'offcanvas',
}) => {
  return (
    <ShadSidebar
      side={side}
      collapsible={collapsible}
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebar>
  );
};

const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
}) => {
  return (
    <ShadSidebarTrigger
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </ShadSidebarTrigger>
  );
};

const SidebarContent: React.FC<SidebarContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarContent
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarContent>
  );
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarHeader
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarHeader>
  );
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarFooter
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarFooter>
  );
};

const SidebarGroup: React.FC<SidebarGroupProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarGroup
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarGroup>
  );
};

const SidebarGroupContent: React.FC<SidebarGroupContentProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarGroupContent
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarGroupContent>
  );
};

const SidebarGroupLabel: React.FC<SidebarGroupLabelProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
}) => {
  return (
    <ShadSidebarGroupLabel
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      asChild={asChild}
    >
      {children}
    </ShadSidebarGroupLabel>
  );
};

const SidebarGroupAction: React.FC<SidebarGroupActionProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
}) => {
  return (
    <ShadSidebarGroupAction
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      asChild={asChild}
    >
      {children}
    </ShadSidebarGroupAction>
  );
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarMenu
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarMenu>
  );
};

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarMenuItem
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarMenuItem>
  );
};

const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
  isActive = false,
  tooltip,
  onClick,
}) => {
  return (
    <ShadSidebarMenuButton
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      asChild={asChild}
      isActive={isActive}
      tooltip={tooltip}
      onClick={onClick}
    >
      {children}
    </ShadSidebarMenuButton>
  );
};

const SidebarMenuAction: React.FC<SidebarMenuActionProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
  showOnHover = false,
}) => {
  return (
    <ShadSidebarMenuAction
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      asChild={asChild}
      showOnHover={showOnHover}
    >
      {children}
    </ShadSidebarMenuAction>
  );
};

const SidebarMenuBadge: React.FC<SidebarMenuBadgeProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarMenuBadge
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarMenuBadge>
  );
};

const SidebarMenuSkeleton: React.FC<SidebarMenuSkeletonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  showIcon = false,
}) => {
  return (
    <ShadSidebarMenuSkeleton
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      showIcon={showIcon}
    >
      {children}
    </ShadSidebarMenuSkeleton>
  );
};

const SidebarMenuSub: React.FC<SidebarMenuSubProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarMenuSub
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarMenuSub>
  );
};

const SidebarMenuSubItem: React.FC<SidebarMenuSubItemProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarMenuSubItem
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarMenuSubItem>
  );
};

const SidebarMenuSubButton: React.FC<SidebarMenuSubButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
  isActive = false,
  onClick,
}) => {
  return (
    <ShadSidebarMenuSubButton
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      asChild={asChild}
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </ShadSidebarMenuSubButton>
  );
};

const SidebarSeparator: React.FC<SidebarSeparatorProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarSeparator
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarSeparator>
  );
};

const SidebarInput: React.FC<SidebarInputProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  placeholder,
  type = 'text',
}) => {
  return (
    <ShadSidebarInput
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
      placeholder={placeholder}
      type={type}
    >
      {children}
    </ShadSidebarInput>
  );
};

const SidebarInset: React.FC<SidebarInsetProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarInset
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarInset>
  );
};

const SidebarRail: React.FC<SidebarRailProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadSidebarRail
      className={cn(
        ...variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadSidebarRail>
  );
};



SidebarProvider.displayName = 'SidebarProvider';
Sidebar.displayName = 'Sidebar';
SidebarTrigger.displayName = 'SidebarTrigger';
SidebarContent.displayName = 'SidebarContent';
SidebarHeader.displayName = 'SidebarHeader';
SidebarFooter.displayName = 'SidebarFooter';
SidebarGroup.displayName = 'SidebarGroup';
SidebarGroupContent.displayName = 'SidebarGroupContent';
SidebarGroupLabel.displayName = 'SidebarGroupLabel';
SidebarGroupAction.displayName = 'SidebarGroupAction';
SidebarMenu.displayName = 'SidebarMenu';
SidebarMenuItem.displayName = 'SidebarMenuItem';
SidebarMenuButton.displayName = 'SidebarMenuButton';
SidebarMenuAction.displayName = 'SidebarMenuAction';
SidebarMenuBadge.displayName = 'SidebarMenuBadge';
SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton';
SidebarMenuSub.displayName = 'SidebarMenuSub';
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';
SidebarSeparator.displayName = 'SidebarSeparator';
SidebarInput.displayName = 'SidebarInput';
SidebarInset.displayName = 'SidebarInset';
SidebarRail.displayName = 'SidebarRail';

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
  SidebarInput,
  SidebarInset,
  SidebarRail,
}; 