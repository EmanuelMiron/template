/**
 * Table Component
 *
 * A reusable, themeable, and accessible table component.
 * Built on top of shadcn/ui Table components with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Table as ShadTable,
  TableHeader as ShadTableHeader,
  TableBody as ShadTableBody,
  TableFooter as ShadTableFooter,
  TableHead as ShadTableHead,
  TableRow as ShadTableRow,
  TableCell as ShadTableCell,
  TableCaption as ShadTableCaption,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

export interface TableProps extends React.ComponentProps<typeof ShadTable> {
  variant?: 'primary' | 'secondary' | 'outline';
  tableSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface TableHeaderProps extends React.ComponentProps<typeof ShadTableHeader> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableBodyProps extends React.ComponentProps<typeof ShadTableBody> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableFooterProps extends React.ComponentProps<typeof ShadTableFooter> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableHeadProps extends React.ComponentProps<typeof ShadTableHead> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableRowProps extends React.ComponentProps<typeof ShadTableRow> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableCellProps extends React.ComponentProps<typeof ShadTableCell> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface TableCaptionProps extends React.ComponentProps<typeof ShadTableCaption> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const tableSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const variantClasses = {
  primary: [
    'border-[var(--color-border)]',
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
  ],
  secondary: [
    'border-[var(--color-border)]',
    'bg-[var(--color-background-secondary)]',
    'text-[var(--color-foreground)]',
  ],
  outline: [
    'border-[var(--color-outline-border)]',
    'bg-transparent',
    'text-[var(--color-foreground)]',
  ],
};

const Table: React.FC<TableProps> = ({
  variant = 'primary',
  tableSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTable
      data-slot="table"
      className={cn(
        'w-full caption-bottom',
        tableSizeClasses[tableSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadTable>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableHeader
      data-slot="table-header"
      className={cn(
        '[&_tr]:border-b',
        'border-[var(--color-border)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableHeader>
  );
};

const TableBody: React.FC<TableBodyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableBody
      data-slot="table-body"
      className={cn(
        '[&_tr:last-child]:border-0',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableBody>
  );
};

const TableFooter: React.FC<TableFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableFooter
      data-slot="table-footer"
      className={cn(
        'bg-[var(--color-background-secondary)]/50',
        'border-t',
        'font-medium',
        '[&>tr]:last:border-b-0',
        'border-[var(--color-border)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableFooter>
  );
};

const TableHead: React.FC<TableHeadProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableHead
      data-slot="table-head"
      className={cn(
        'h-10',
        'px-2',
        'text-left',
        'align-middle',
        'font-medium',
        'whitespace-nowrap',
        'text-[var(--color-foreground)]',
        '[&:has([role=checkbox])]:pr-0',
        '[&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableHead>
  );
};

const TableRow: React.FC<TableRowProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableRow
      data-slot="table-row"
      className={cn(
        'border-b',
        'transition-colors',
        'hover:bg-[var(--color-background-hover)]/50',
        'data-[state=selected]:bg-[var(--color-background-hover)]',
        'border-[var(--color-border)]',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableRow>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableCell
      data-slot="table-cell"
      className={cn(
        'p-2',
        'align-middle',
        'whitespace-nowrap',
        'text-[var(--color-foreground)]',
        '[&:has([role=checkbox])]:pr-0',
        '[&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    >
      {children}
    </ShadTableCell>
  );
};

const TableCaption: React.FC<TableCaptionProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadTableCaption
      data-slot="table-caption"
      className={cn(
        'mt-4',
        'text-[var(--color-foreground-secondary)]',
        tableSizeClasses.md,
        className
      )}
      {...props}
    >
      {children}
    </ShadTableCaption>
  );
};

Table.displayName = 'Table';
TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableFooter.displayName = 'TableFooter';
TableHead.displayName = 'TableHead';
TableRow.displayName = 'TableRow';
TableCell.displayName = 'TableCell';
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}; 