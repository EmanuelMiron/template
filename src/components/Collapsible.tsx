/**
 * Collapsible Component
 *
 * A reusable, themeable, and accessible collapsible content component with trigger.
 * Built on top of shadcn/ui Collapsible component with additional features like variants, sizes, and icon support.
 * All colors are set via CSS variables for theme compatibility.
 */
import React, { useState } from 'react';
import { Collapsible as ShadCollapsible, CollapsibleContent as ShadCollapsibleContent, CollapsibleTrigger as ShadCollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CollapsibleProps {
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export interface CollapsibleTriggerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showChevron?: boolean;
  chevronPosition?: 'left' | 'right';
  disabled?: boolean;
}

export interface CollapsibleContentProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animation?: 'slide' | 'fade' | 'none';
}

const triggerSizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
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
};

const contentVariantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
  ],
  outline: [
    'bg-transparent',
    'border',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
  ],
};

const contentPaddingClasses = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
};

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  className = '',
  defaultOpen = false,
  open,
  onOpenChange,
  disabled = false,
}) => {
  return (
    <ShadCollapsible
      className={cn('w-full', className)}
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      disabled={disabled}
    >
      {children}
    </ShadCollapsible>
  );
};

const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  showChevron = true,
  chevronPosition = 'right',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevronIcon = isOpen ? (
    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
  ) : (
    <ChevronRight className="w-4 h-4 transition-transform duration-200" />
  );

  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-between',
    'w-full',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
  ];

  const classes = cn(
    baseClasses,
    triggerSizeClasses[size],
    ...triggerVariantClasses[variant],
    className
  );

  return (
    <ShadCollapsibleTrigger
      className={classes}
      disabled={disabled}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2">
        {chevronPosition === 'left' && showChevron && chevronIcon}
        {icon && icon}
        <span>{children}</span>
      </div>
      {chevronPosition === 'right' && showChevron && chevronIcon}
    </ShadCollapsibleTrigger>
  );
};

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  children,
  className = '',
  variant = 'outline',
  padding = 'md',
  animation = 'slide',
}) => {
  const baseClasses = [
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ];

  const animationClasses = {
    slide: 'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up',
    fade: 'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out',
    none: '',
  };

  const classes = cn(
    baseClasses,
    ...contentVariantClasses[variant],
    contentPaddingClasses[padding],
    animationClasses[animation],
    className
  );

  return (
    <ShadCollapsibleContent className={classes}>
      {children}
    </ShadCollapsibleContent>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent }; 