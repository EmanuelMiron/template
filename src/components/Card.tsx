/**
 * Card Component
 *
 * A reusable, themeable, and accessible card component.
 * Built on top of shadcn/ui Card component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { 
  Card as ShadCard,
  CardHeader as ShadCardHeader,
  CardTitle as ShadCardTitle,
  CardDescription as ShadCardDescription,
  CardContent as ShadCardContent,
  CardFooter as ShadCardFooter,
  CardAction as ShadCardAction
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface CardProps extends React.ComponentProps<typeof ShadCard> {
  variant?: 'primary' | 'secondary' | 'outline' | 'elevated';
  cardSize?: 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps extends React.ComponentProps<typeof ShadCardHeader> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CardTitleProps extends React.ComponentProps<typeof ShadCardTitle> {
  variant?: 'primary' | 'secondary' | 'outline';
  titleSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface CardDescriptionProps extends React.ComponentProps<typeof ShadCardDescription> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CardContentProps extends React.ComponentProps<typeof ShadCardContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
  children?: React.ReactNode;
}

export interface CardFooterProps extends React.ComponentProps<typeof ShadCardFooter> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CardActionProps extends React.ComponentProps<typeof ShadCardAction> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'p-4 gap-4',
  md: 'p-6 gap-6',
  lg: 'p-8 gap-8',
};

const titleSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

const paddingClasses = {
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  none: 'px-0',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
    'shadow-sm',
    'hover:shadow-md',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
    'shadow-sm',
    'hover:shadow-md',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'shadow-none',
    'hover:border-[var(--color-border-hover)]',
  ],
  elevated: [
    'bg-[var(--color-background)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
    'shadow-lg',
    'hover:shadow-xl',
  ],
};

const Card: React.FC<CardProps> = ({
  variant = 'primary',
  cardSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCard
      data-slot="card"
      className={cn(
        'flex flex-col rounded-xl border transition-all duration-200',
        sizeClasses[cardSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadCard>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardHeader
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5',
        'has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardHeader>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({
  titleSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardTitle
      data-slot="card-title"
      className={cn(
        'leading-none font-semibold',
        titleSizeClasses[titleSize],
        'text-[var(--color-foreground)]',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardTitle>
  );
};

const CardDescription: React.FC<CardDescriptionProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardDescription
      data-slot="card-description"
      className={cn(
        'text-sm',
        'text-[var(--color-foreground-secondary)]',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardDescription>
  );
};

const CardContent: React.FC<CardContentProps> = ({
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardContent
      data-slot="card-content"
      className={cn(
        paddingClasses[padding],
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardContent>
  );
};

const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardFooter
      data-slot="card-footer"
      className={cn(
        'flex items-center [.border-t]:pt-6',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardFooter>
  );
};

const CardAction: React.FC<CardActionProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCardAction
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCardAction>
  );
};

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';
CardAction.displayName = 'CardAction';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction }; 