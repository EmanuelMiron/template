/**
 * Breadcrumb Component
 *
 * A reusable, themeable, and accessible breadcrumb navigation component.
 * Built on top of shadcn/ui Breadcrumb component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { 
  Breadcrumb as ShadBreadcrumb,
  BreadcrumbList as ShadBreadcrumbList,
  BreadcrumbItem as ShadBreadcrumbItem,
  BreadcrumbLink as ShadBreadcrumbLink,
  BreadcrumbPage as ShadBreadcrumbPage,
  BreadcrumbSeparator as ShadBreadcrumbSeparator,
  BreadcrumbEllipsis as ShadBreadcrumbEllipsis
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

export interface BreadcrumbProps extends React.ComponentProps<typeof ShadBreadcrumb> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbListProps extends React.ComponentProps<typeof ShadBreadcrumbList> {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.ComponentProps<typeof ShadBreadcrumbItem> {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbLinkProps extends React.ComponentProps<typeof ShadBreadcrumbLink> {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbPageProps extends React.ComponentProps<typeof ShadBreadcrumbPage> {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbSeparatorProps extends React.ComponentProps<typeof ShadBreadcrumbSeparator> {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<typeof ShadBreadcrumbEllipsis> {
  className?: string;
  children?: React.ReactNode;
}

const variantClasses = {
  primary: [
    'text-[var(--color-foreground)]',
    '[&>ol]:text-[var(--color-foreground)]',
    '[&_a]:text-[var(--color-foreground-secondary)]',
    '[&_a]:hover:text-[var(--color-foreground)]',
    '[&_span]:text-[var(--color-foreground)]',
  ],
  secondary: [
    'text-[var(--color-foreground-secondary)]',
    '[&>ol]:text-[var(--color-foreground-secondary)]',
    '[&_a]:text-[var(--color-foreground-secondary)]',
    '[&_a]:hover:text-[var(--color-foreground)]',
    '[&_span]:text-[var(--color-foreground)]',
  ],
  outline: [
    'text-[var(--color-foreground)]',
    '[&>ol]:text-[var(--color-foreground)]',
    '[&_a]:text-[var(--color-outline-border)]',
    '[&_a]:hover:text-[var(--color-foreground)]',
    '[&_span]:text-[var(--color-foreground)]',
  ],
};

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      variant = 'primary',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumb
        ref={ref}
        aria-label="breadcrumb"
        data-slot="breadcrumb"
        className={cn(
          'transition-colors duration-200',
          ...variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadBreadcrumb>
    );
  }
);

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbList
        ref={ref}
        data-slot="breadcrumb-list"
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
          className
        )}
        {...props}
      >
        {children}
      </ShadBreadcrumbList>
    );
  }
);

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbItem
        ref={ref}
        data-slot="breadcrumb-item"
        className={cn('inline-flex items-center gap-1.5', className)}
        {...props}
      >
        {children}
      </ShadBreadcrumbItem>
    );
  }
);

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbLink
        ref={ref}
        data-slot="breadcrumb-link"
        className={cn(
          'transition-colors duration-200 hover:text-[var(--color-foreground)]',
          className
        )}
        {...props}
      >
        {children}
      </ShadBreadcrumbLink>
    );
  }
);

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbPage
        ref={ref}
        data-slot="breadcrumb-page"
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('font-normal', className)}
        {...props}
      >
        {children}
      </ShadBreadcrumbPage>
    );
  }
);

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  (
    {
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbSeparator
        ref={ref}
        data-slot="breadcrumb-separator"
        role="presentation"
        aria-hidden="true"
        className={cn('[&>svg]:size-3.5', className)}
        {...props}
      >
        {children}
      </ShadBreadcrumbSeparator>
    );
  }
);

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
  (
    {
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadBreadcrumbEllipsis
        ref={ref}
        data-slot="breadcrumb-ellipsis"
        role="presentation"
        aria-hidden="true"
        className={cn('flex size-9 items-center justify-center', className)}
        {...props}
      >
        {children}
      </ShadBreadcrumbEllipsis>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbList.displayName = 'BreadcrumbList';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbLink.displayName = 'BreadcrumbLink';
BreadcrumbPage.displayName = 'BreadcrumbPage';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}; 