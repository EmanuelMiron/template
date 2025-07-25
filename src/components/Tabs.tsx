/**
 * Tabs Component
 *
 * A reusable, themeable, and accessible tabs component.
 * Built on top of shadcn/ui Tabs components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Tabs as ShadTabs, TabsList as ShadTabsList, TabsTrigger as ShadTabsTrigger, TabsContent as ShadTabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export interface TabsProps extends React.ComponentProps<typeof ShadTabs> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface TabsListProps extends React.ComponentProps<typeof ShadTabsList> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface TabsTriggerProps extends React.ComponentProps<typeof ShadTabsTrigger> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface TabsContentProps extends React.ComponentProps<typeof ShadTabsContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: {
    list: 'h-7 text-xs',
    trigger: 'px-2 py-1 text-xs',
  },
  md: {
    list: 'h-9 text-sm',
    trigger: 'px-2 py-1 text-sm',
  },
  lg: {
    list: 'h-11 text-base',
    trigger: 'px-3 py-2 text-base',
  },
};

const variantClasses = {
  primary: {
    list: 'bg-[var(--color-primary-disabled)]',
    trigger: [
      'data-[state=active]:bg-[var(--color-primary)]',
      'data-[state=active]:text-[var(--color-primary-foreground)]',
      'text-[var(--color-foreground)]',
      'focus-visible:ring-[var(--color-primary)]',
    ],
  },
  secondary: {
    list: 'bg-[var(--color-secondary-disabled)]',
    trigger: [
      'data-[state=active]:bg-[var(--color-secondary)]',
      'data-[state=active]:text-[var(--color-secondary-foreground)]',
      'text-[var(--color-foreground)]',
      'focus-visible:ring-[var(--color-secondary)]',
    ],
  },
  outline: {
    list: 'bg-[var(--color-background)] border-[var(--color-border)]',
    trigger: [
      'data-[state=active]:bg-[var(--color-primary)]',
      'data-[state=active]:text-[var(--color-primary-foreground)]',
      'text-[var(--color-foreground)]',
      'focus-visible:ring-[var(--color-primary)]',
      'border-[var(--color-border)]',
    ],
  },
};

const Tabs = React.forwardRef<
  React.ElementRef<typeof ShadTabs>,
  TabsProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  orientation = 'horizontal',
  ...props
}, ref) => {
  return (
    <ShadTabs
      ref={ref}
      className={cn(
        'flex flex-col gap-2',
        orientation === 'vertical' && 'flex-row',
        className
      )}
      orientation={orientation}
      {...props}
    />
  );
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof ShadTabsList>,
  TabsListProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <ShadTabsList
      ref={ref}
      className={cn(
        'inline-flex w-fit items-center justify-center rounded-lg p-[3px]',
        sizeConfig.list,
        variantConfig.list,
        className
      )}
      {...props}
    />
  );
});

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof ShadTabsTrigger>,
  TabsTriggerProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <ShadTabsTrigger
      ref={ref}
      className={cn(
        'inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
        sizeConfig.trigger,
        ...variantConfig.trigger,
        className
      )}
      {...props}
    />
  );
});

const TabsContent = React.forwardRef<
  React.ElementRef<typeof ShadTabsContent>,
  TabsContentProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  return (
    <ShadTabsContent
      ref={ref}
      className={cn(
        'flex-1 outline-none',
        className
      )}
      {...props}
    />
  );
});

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent }; 