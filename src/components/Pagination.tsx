/**
 * Pagination Component
 *
 * A reusable, themeable, and accessible pagination component.
 * Built on top of shadcn/ui Pagination components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Pagination as ShadPagination,
  PaginationContent as ShadPaginationContent,
  PaginationItem as ShadPaginationItem,
  PaginationLink as ShadPaginationLink,
  PaginationNext as ShadPaginationNext,
  PaginationPrevious as ShadPaginationPrevious,
  PaginationEllipsis as ShadPaginationEllipsis,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

export interface PaginationProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface PaginationContentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface PaginationItemProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface PaginationLinkProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface PaginationPreviousProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface PaginationNextProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface PaginationEllipsisProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'gap-1',
  md: 'gap-1',
  lg: 'gap-2',
};

const linkSizeClasses = {
  sm: 'size-8 text-sm',
  md: 'size-9 text-base',
  lg: 'size-10 text-lg',
};

const buttonSizeClasses = {
  sm: 'gap-1 px-2 text-sm',
  md: 'gap-1 px-2.5 text-base',
  lg: 'gap-2 px-3 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-hover)]',
    'hover:border-[var(--color-primary-hover)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-hover)]',
    'hover:border-[var(--color-border-hover)]',
  ],
};

const activeVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'border-[var(--color-primary)]',
    'text-white',
    'hover:bg-[var(--color-primary-hover)]',
    'hover:border-[var(--color-primary-hover)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'border-[var(--color-secondary)]',
    'text-white',
    'hover:bg-[var(--color-secondary-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
  ],
  outline: [
    'bg-[var(--color-primary)]',
    'border-[var(--color-primary)]',
    'text-white',
    'hover:bg-[var(--color-primary-hover)]',
    'hover:border-[var(--color-primary-hover)]',
  ],
};

const disabledClasses = [
  'opacity-50',
  'cursor-not-allowed',
  'pointer-events-none',
];

const Pagination: React.FC<PaginationProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadPagination
      className={cn(
        'mx-auto flex w-full justify-center',
        className
      )}
    >
      {children}
    </ShadPagination>
  );
};

const PaginationContent: React.FC<PaginationContentProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadPaginationContent
      className={cn(
        'flex flex-row items-center',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </ShadPaginationContent>
  );
};

const PaginationItem: React.FC<PaginationItemProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <ShadPaginationItem
      className={cn(className)}
    >
      {children}
    </ShadPaginationItem>
  );
};

const PaginationLink: React.FC<PaginationLinkProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  isActive = false,
  href,
  onClick,
  disabled = false,
}) => {
  return (
    <ShadPaginationLink
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        linkSizeClasses[size],
        isActive 
          ? [...activeVariantClasses[variant], 'focus:ring-[var(--color-primary)]']
          : [...variantClasses[variant], 'focus:ring-[var(--color-primary)]'],
        disabled && disabledClasses,
        className
      )}
      isActive={isActive}
      href={href}
      onClick={onClick}
    >
      {children}
    </ShadPaginationLink>
  );
};

const PaginationPrevious: React.FC<PaginationPreviousProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  onClick,
  disabled = false,
}) => {
  return (
    <ShadPaginationPrevious
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        buttonSizeClasses[size],
        [...variantClasses[variant], 'focus:ring-[var(--color-primary)]'],
        disabled && disabledClasses,
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </ShadPaginationPrevious>
  );
};

const PaginationNext: React.FC<PaginationNextProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  onClick,
  disabled = false,
}) => {
  return (
    <ShadPaginationNext
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        buttonSizeClasses[size],
        [...variantClasses[variant], 'focus:ring-[var(--color-primary)]'],
        disabled && disabledClasses,
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </ShadPaginationNext>
  );
};

const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  return (
    <ShadPaginationEllipsis
      className={cn(
        'flex items-center justify-center',
        linkSizeClasses[size],
        'text-[var(--color-foreground-secondary)]',
        className
      )}
    />
  );
};

Pagination.displayName = 'Pagination';
PaginationContent.displayName = 'PaginationContent';
PaginationItem.displayName = 'PaginationItem';
PaginationLink.displayName = 'PaginationLink';
PaginationPrevious.displayName = 'PaginationPrevious';
PaginationNext.displayName = 'PaginationNext';
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}; 