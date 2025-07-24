/**
 * Command Component
 *
 * A reusable, themeable, and accessible command palette component.
 * Built on top of shadcn/ui Command components with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Command as ShadCommand,
  CommandDialog as ShadCommandDialog,
  CommandEmpty as ShadCommandEmpty,
  CommandGroup as ShadCommandGroup,
  CommandInput as ShadCommandInput,
  CommandItem as ShadCommandItem,
  CommandList as ShadCommandList,
  CommandSeparator as ShadCommandSeparator,
  CommandShortcut as ShadCommandShortcut,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

export interface CommandProps extends React.ComponentProps<typeof ShadCommand> {
  variant?: 'primary' | 'secondary' | 'outline';
  commandSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandDialogProps extends React.ComponentProps<typeof ShadCommandDialog> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandInputProps extends React.ComponentProps<typeof ShadCommandInput> {
  variant?: 'primary' | 'secondary' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandListProps extends React.ComponentProps<typeof ShadCommandList> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandEmptyProps extends React.ComponentProps<typeof ShadCommandEmpty> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandGroupProps extends React.ComponentProps<typeof ShadCommandGroup> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandItemProps extends React.ComponentProps<typeof ShadCommandItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandSeparatorProps extends React.ComponentProps<typeof ShadCommandSeparator> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CommandShortcutProps extends React.ComponentProps<typeof ShadCommandShortcut> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'min-w-[300px]',
  md: 'min-w-[450px]',
  lg: 'min-w-[600px]',
};

const inputSizeClasses = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-base',
  lg: 'h-12 text-lg',
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

const Command: React.FC<CommandProps> = ({
  variant = 'primary',
  commandSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommand
      data-slot="command"
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md',
        sizeClasses[commandSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadCommand>
  );
};

const CommandDialog: React.FC<CommandDialogProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandDialog
      data-slot="command-dialog"
      className={cn(
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandDialog>
  );
};

const CommandInput: React.FC<CommandInputProps> = ({
  inputSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandInput
      data-slot="command-input"
      className={cn(
        inputSizeClasses[inputSize],
        'bg-transparent',
        'text-[var(--color-foreground)]',
        'placeholder-[var(--color-foreground-secondary)]',
        'border-0',
        'focus:outline-none',
        'focus:ring-0',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandInput>
  );
};

const CommandList: React.FC<CommandListProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandList
      data-slot="command-list"
      className={cn(
        'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandList>
  );
};

const CommandEmpty: React.FC<CommandEmptyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandEmpty
      data-slot="command-empty"
      className={cn(
        'py-6 text-center text-sm',
        'text-[var(--color-foreground-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandEmpty>
  );
};

const CommandGroup: React.FC<CommandGroupProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandGroup
      data-slot="command-group"
      className={cn(
        'text-[var(--color-foreground)]',
        'overflow-hidden p-1',
        '[&_[cmdk-group-heading]]:text-[var(--color-foreground-secondary)]',
        '[&_[cmdk-group-heading]]:px-2',
        '[&_[cmdk-group-heading]]:py-1.5',
        '[&_[cmdk-group-heading]]:text-xs',
        '[&_[cmdk-group-heading]]:font-medium',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandGroup>
  );
};

const CommandItem: React.FC<CommandItemProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandItem
      data-slot="command-item"
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm',
        'text-[var(--color-foreground)]',
        'hover:bg-[var(--color-background-hover)]',
        'focus:bg-[var(--color-background-hover)]',
        'data-[selected=true]:bg-[var(--color-primary)]',
        'data-[selected=true]:text-white',
        'outline-none',
        'select-none',
        'data-[disabled=true]:pointer-events-none',
        'data-[disabled=true]:opacity-50',
        '[&_svg]:pointer-events-none',
        '[&_svg]:shrink-0',
        '[&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandItem>
  );
};

const CommandSeparator: React.FC<CommandSeparatorProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandSeparator
      data-slot="command-separator"
      className={cn(
        'bg-[var(--color-border)]',
        '-mx-1 h-px',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandSeparator>
  );
};

const CommandShortcut: React.FC<CommandShortcutProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCommandShortcut
      data-slot="command-shortcut"
      className={cn(
        'ml-auto text-xs tracking-widest',
        'text-[var(--color-foreground-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadCommandShortcut>
  );
};

Command.displayName = 'Command';
CommandDialog.displayName = 'CommandDialog';
CommandInput.displayName = 'CommandInput';
CommandList.displayName = 'CommandList';
CommandEmpty.displayName = 'CommandEmpty';
CommandGroup.displayName = 'CommandGroup';
CommandItem.displayName = 'CommandItem';
CommandSeparator.displayName = 'CommandSeparator';
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}; 