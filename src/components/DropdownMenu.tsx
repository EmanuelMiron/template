/**
 * DropdownMenu Component
 *
 * A reusable, themeable, and accessible dropdown menu component.
 * Built on top of shadcn/ui DropdownMenu component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuTrigger as ShadDropdownMenuTrigger,
  DropdownMenuContent as ShadDropdownMenuContent,
  DropdownMenuItem as ShadDropdownMenuItem,
  DropdownMenuCheckboxItem as ShadDropdownMenuCheckboxItem,
  DropdownMenuRadioGroup as ShadDropdownMenuRadioGroup,
  DropdownMenuRadioItem as ShadDropdownMenuRadioItem,
  DropdownMenuLabel as ShadDropdownMenuLabel,
  DropdownMenuSeparator as ShadDropdownMenuSeparator,
  DropdownMenuShortcut as ShadDropdownMenuShortcut,
  DropdownMenuGroup as ShadDropdownMenuGroup,
  DropdownMenuPortal as ShadDropdownMenuPortal,
  DropdownMenuSub as ShadDropdownMenuSub,
  DropdownMenuSubContent as ShadDropdownMenuSubContent,
  DropdownMenuSubTrigger as ShadDropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export interface DropdownMenuProps extends React.ComponentProps<typeof ShadDropdownMenu> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuTriggerProps extends React.ComponentProps<typeof ShadDropdownMenuTrigger> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuContentProps extends React.ComponentProps<typeof ShadDropdownMenuContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuItemProps extends Omit<React.ComponentProps<typeof ShadDropdownMenuItem>, 'variant'> {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuCheckboxItemProps extends React.ComponentProps<typeof ShadDropdownMenuCheckboxItem> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof ShadDropdownMenuRadioItem> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuRadioGroupProps extends React.ComponentProps<typeof ShadDropdownMenuRadioGroup> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuLabelProps extends React.ComponentProps<typeof ShadDropdownMenuLabel> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof ShadDropdownMenuSeparator> {
  className?: string;
}

export interface DropdownMenuShortcutProps extends React.ComponentProps<typeof ShadDropdownMenuShortcut> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuGroupProps extends React.ComponentProps<typeof ShadDropdownMenuGroup> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuPortalProps extends React.ComponentProps<typeof ShadDropdownMenuPortal> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuSubProps extends React.ComponentProps<typeof ShadDropdownMenuSub> {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuSubContentProps extends React.ComponentProps<typeof ShadDropdownMenuSubContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof ShadDropdownMenuSubTrigger> {
  className?: string;
  children?: React.ReactNode;
}

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'border-[var(--color-primary)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'border-[var(--color-secondary)]',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
    'border-[var(--color-outline-border)]',
  ],
};

const itemVariantClasses = {
  default: [
    'focus:bg-[var(--color-accent)]',
    'focus:text-[var(--color-accent-foreground)]',
  ],
  destructive: [
    'text-[hsl(var(--destructive))]',
    'focus:bg-[hsl(var(--destructive))/10]',
    'focus:text-[hsl(var(--destructive))]',
  ],
  success: [
    'text-green-600',
    'focus:bg-green-50',
    'focus:text-green-700',
  ],
  warning: [
    'text-yellow-600',
    'focus:bg-yellow-50',
    'focus:text-yellow-700',
  ],
  info: [
    'text-blue-600',
    'focus:bg-blue-50',
    'focus:text-blue-700',
  ],
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDropdownMenu
      data-slot="dropdown-menu"
      {...props}
    >
      {children}
    </ShadDropdownMenu>
  );
};

const DropdownMenuTrigger = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuTrigger>, DropdownMenuTriggerProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuTrigger
        ref={ref}
        data-slot="dropdown-menu-trigger"
        className={cn('transition-all duration-200', className)}
        {...props}
      >
        {children}
      </ShadDropdownMenuTrigger>
    );
  }
);

const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuContent>, DropdownMenuContentProps>(
  (
    {
      variant = 'outline',
      className = '',
      children,
      sideOffset = 4,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuContent
        ref={ref}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          ...variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuContent>
    );
  }
);

const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuItem>, DropdownMenuItemProps>(
  (
    {
      variant = 'default',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuItem
        ref={ref}
        data-slot="dropdown-menu-item"
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          'transition-colors duration-200',
          ...itemVariantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuItem>
    );
  }
);

const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuCheckboxItem>, DropdownMenuCheckboxItemProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuCheckboxItem
        ref={ref}
        data-slot="dropdown-menu-checkbox-item"
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuCheckboxItem>
    );
  }
);

const DropdownMenuRadioItem = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuRadioItem>, DropdownMenuRadioItemProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuRadioItem
        ref={ref}
        data-slot="dropdown-menu-radio-item"
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuRadioItem>
    );
  }
);

const DropdownMenuRadioGroup = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuRadioGroup>, DropdownMenuRadioGroupProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuRadioGroup
        ref={ref}
        data-slot="dropdown-menu-radio-group"
        className={cn(
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuRadioGroup>
    );
  }
);

const DropdownMenuLabel = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuLabel>, DropdownMenuLabelProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuLabel
        ref={ref}
        data-slot="dropdown-menu-label"
        className={cn('px-2 py-1.5 text-sm font-semibold', className)}
        {...props}
      >
        {children}
      </ShadDropdownMenuLabel>
    );
  }
);

const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuSeparator>, DropdownMenuSeparatorProps>(
  (
    {
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuSeparator
        ref={ref}
        data-slot="dropdown-menu-separator"
        className={cn('-mx-1 my-1 h-px bg-[var(--color-border)]', className)}
        {...props}
      />
    );
  }
);

const DropdownMenuShortcut = React.forwardRef<HTMLSpanElement, DropdownMenuShortcutProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuShortcut
        ref={ref}
        data-slot="dropdown-menu-shortcut"
        className={cn('ml-auto text-xs tracking-widest text-[var(--color-muted-foreground)]', className)}
        {...props}
      >
        {children}
      </ShadDropdownMenuShortcut>
    );
  }
);

const DropdownMenuGroup = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuGroup>, DropdownMenuGroupProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuGroup
        ref={ref}
        data-slot="dropdown-menu-group"
        className={cn(className)}
        {...props}
      >
        {children}
      </ShadDropdownMenuGroup>
    );
  }
);

const DropdownMenuPortal: React.FC<DropdownMenuPortalProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDropdownMenuPortal
      data-slot="dropdown-menu-portal"
      {...props}
    >
      {children}
    </ShadDropdownMenuPortal>
  );
};

const DropdownMenuSub: React.FC<DropdownMenuSubProps> = ({
  children,
  ...props
}) => {
  return (
    <ShadDropdownMenuSub
      data-slot="dropdown-menu-sub"
      {...props}
    >
      {children}
    </ShadDropdownMenuSub>
  );
};

const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuSubContent>, DropdownMenuSubContentProps>(
  (
    {
      variant = 'outline',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuSubContent
        ref={ref}
        data-slot="dropdown-menu-sub-content"
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          ...variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuSubContent>
    );
  }
);

const DropdownMenuSubTrigger = React.forwardRef<React.ElementRef<typeof ShadDropdownMenuSubTrigger>, DropdownMenuSubTriggerProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadDropdownMenuSubTrigger
        ref={ref}
        data-slot="dropdown-menu-sub-trigger"
        className={cn(
          'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
          'focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-foreground)]',
          'data-[state=open]:bg-[var(--color-accent)] data-[state=open]:text-[var(--color-accent-foreground)]',
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </ShadDropdownMenuSubTrigger>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';
DropdownMenuContent.displayName = 'DropdownMenuContent';
DropdownMenuItem.displayName = 'DropdownMenuItem';
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';
DropdownMenuLabel.displayName = 'DropdownMenuLabel';
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
DropdownMenuGroup.displayName = 'DropdownMenuGroup';
DropdownMenuPortal.displayName = 'DropdownMenuPortal';
DropdownMenuSub.displayName = 'DropdownMenuSub';
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
}; 