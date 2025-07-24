/**
 * Accordion Component
 *
 * A simple, themeable wrapper around shadcn/ui Accordion component.
 * Adds theme support using CSS variables while maintaining the original clean design.
 */
import React from 'react';
import { Accordion as ShadAccordion, AccordionContent as ShadAccordionContent, AccordionItem as ShadAccordionItem, AccordionTrigger as ShadAccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}

export interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

export interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
  type = 'single',
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  disabled = false,
}) => {
  if (type === 'single') {
    return (
      <ShadAccordion
        className={cn('w-full border border-[var(--color-border)] rounded-md overflow-hidden', className)}
        type="single"
        collapsible={collapsible}
        defaultValue={defaultValue as string}
        value={value as string}
        onValueChange={onValueChange as (value: string) => void}
        disabled={disabled}
      >
        {children}
      </ShadAccordion>
    );
  }

  return (
    <ShadAccordion
      className={cn('w-full border border-[var(--color-border)] rounded-md overflow-hidden', className)}
      type="multiple"
      defaultValue={defaultValue as string[]}
      value={value as string[]}
      onValueChange={onValueChange as (value: string[]) => void}
      disabled={disabled}
    >
      {children}
    </ShadAccordion>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className = '',
  value,
  disabled = false,
}) => {
  return (
    <ShadAccordionItem
      className={cn('border-b border-[var(--color-border)] last:border-b-0', className)}
      value={value}
      disabled={disabled}
    >
      {children}
    </ShadAccordionItem>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = '',
  disabled = false,
}) => {
  return (
    <ShadAccordionTrigger 
      className={cn(
        'px-4 py-3',
        'focus-visible:ring-[var(--color-primary)]',
        'hover:text-[var(--color-primary)]',
        'text-[var(--color-foreground)]',
        className
      )} 
      disabled={disabled}
    >
      {children}
    </ShadAccordionTrigger>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <ShadAccordionContent className={cn('text-[var(--color-foreground)] px-4 pb-4', className)}>
      {children}
    </ShadAccordionContent>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }; 