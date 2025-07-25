/**
 * ToggleGroup Component
 *
 * A reusable, themeable, and accessible toggle group component.
 * Built on top of shadcn/ui ToggleGroup components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { ToggleGroup as ShadToggleGroup, ToggleGroupItem as ShadToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

export interface ToggleGroupProps extends React.ComponentProps<typeof ShadToggleGroup> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  type?: 'single' | 'multiple';
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export interface ToggleGroupItemProps extends React.ComponentProps<typeof ShadToggleGroupItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  value: string;
}

const sizeClasses = {
  sm: 'h-8 px-2 text-xs',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

const variantClasses = {
  primary: {
    group: 'bg-[var(--color-primary-disabled)]',
    item: [
      'bg-transparent',
      'text-[var(--color-foreground)]',
      'hover:bg-[var(--color-primary)]',
      'hover:text-[var(--color-primary-foreground)]',
      'focus-visible:ring-[var(--color-primary)]',
      'data-[state=on]:bg-[var(--color-primary)]',
      'data-[state=on]:text-[var(--color-primary-foreground)]',
    ],
  },
  secondary: {
    group: 'bg-[var(--color-secondary-disabled)]',
    item: [
      'bg-transparent',
      'text-[var(--color-foreground)]',
      'hover:bg-[var(--color-secondary)]',
      'hover:text-[var(--color-secondary-foreground)]',
      'focus-visible:ring-[var(--color-secondary)]',
      'data-[state=on]:bg-[var(--color-secondary)]',
      'data-[state=on]:text-[var(--color-secondary-foreground)]',
    ],
  },
  outline: {
    group: 'bg-[var(--color-background)] border-[var(--color-border)]',
    item: [
      'border-[var(--color-border)]',
      'bg-transparent',
      'text-[var(--color-foreground)]',
      'hover:bg-[var(--color-primary)]',
      'hover:text-[var(--color-primary-foreground)]',
      'hover:border-[var(--color-primary)]',
      'focus-visible:ring-[var(--color-primary)]',
      'data-[state=on]:bg-[var(--color-primary)]',
      'data-[state=on]:text-[var(--color-primary-foreground)]',
      'data-[state=on]:border-[var(--color-primary)]',
    ],
  },
};

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ShadToggleGroup>,
  ToggleGroupProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'single',
  value,
  onValueChange,
  disabled = false,
  ...props
}, ref) => {
  const variantConfig = variantClasses[variant];

  return (
    <ShadToggleGroup
      ref={ref}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        variantConfig.group,
        className
      )}
      type={type}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variant,
            size,
            ...child.props,
          });
        }
        return child;
      })}
    </ShadToggleGroup>
  );
});

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ShadToggleGroupItem>,
  ToggleGroupItemProps
>(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  value,
  disabled = false,
  ...props
}, ref) => {
  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <ShadToggleGroupItem
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        sizeConfig,
        ...variantConfig.item,
        className
      )}
      value={value}
      disabled={disabled}
      {...props}
    >
      {children}
    </ShadToggleGroupItem>
  );
});

ToggleGroup.displayName = 'ToggleGroup';
ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem }; 