/**
 * Combobox Component
 *
 * A reusable, themeable, and accessible combobox component with autocomplete functionality.
 * Built on top of shadcn/ui Combobox components with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command as ShadCommand,
  CommandEmpty as ShadCommandEmpty,
  CommandGroup as ShadCommandGroup,
  CommandInput as ShadCommandInput,
  CommandItem as ShadCommandItem,
  CommandList as ShadCommandList,
} from '@/components/ui/command';
import {
  Popover as ShadPopover,
  PopoverContent as ShadPopoverContent,
  PopoverTrigger as ShadPopoverTrigger,
} from '@/components/ui/popover';
import { Button as ShadButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  comboboxSize?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
}

const buttonSizeClasses = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-hover)]',
    'hover:border-[var(--color-primary-hover)]',
    'focus:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-secondary-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
    'focus:border-[var(--color-secondary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'focus:ring-offset-2',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-outline-hover)]',
    'hover:border-[var(--color-border-hover)]',
    'focus:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'focus:ring-offset-2',
  ],
};

const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No option found.',
  variant = 'primary',
  comboboxSize = 'md',
  className = '',
  disabled = false,
  label,
  helperText,
  error,
  containerClassName = '',
}) => {
  const [open, setOpen] = React.useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={cn('flex flex-col gap-1', containerClassName)}>
      {label && (
        <label className="font-medium text-[var(--color-foreground)] mb-1">
          {label}
        </label>
      )}
      <ShadPopover open={open} onOpenChange={setOpen}>
        <ShadPopoverTrigger asChild>
          <ShadButton
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              'w-full justify-between',
              buttonSizeClasses[comboboxSize],
              ...variantClasses[variant],
              error && [
                '!border-[hsl(var(--destructive))]',
                '!ring-2',
                '!ring-[hsl(var(--destructive))]',
                'focus:!border-[hsl(var(--destructive))]',
                'focus:!ring-[hsl(var(--destructive))]',
                'hover:!border-[hsl(var(--destructive))]'
              ],
              disabled && 'opacity-50 cursor-not-allowed',
              className
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </ShadButton>
        </ShadPopoverTrigger>
        <ShadPopoverContent 
          className={cn(
            'w-full p-0',
            'bg-[var(--color-background)]',
            'border-[var(--color-border)]',
            'text-[var(--color-foreground)]',
            'shadow-lg'
          )}
        >
          <ShadCommand>
            <ShadCommandInput 
              placeholder={searchPlaceholder} 
              className={cn(
                'h-9',
                'bg-[var(--color-background)]',
                'border-[var(--color-border)]',
                'text-[var(--color-foreground)]',
                'placeholder-[var(--color-foreground-secondary)]',
                'focus:border-[var(--color-primary)]',
                'focus:ring-2',
                'focus:ring-[var(--color-primary)]',
                'focus:ring-offset-2'
              )}
            />
            <ShadCommandList>
              <ShadCommandEmpty className="text-[var(--color-foreground-secondary)]">
                {emptyMessage}
              </ShadCommandEmpty>
              <ShadCommandGroup>
                {options.map((option) => (
                  <ShadCommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      onValueChange?.(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                    className={cn(
                      'cursor-pointer',
                      'hover:bg-[var(--color-background-hover)]',
                      'focus:bg-[var(--color-background-hover)]',
                      'text-[var(--color-foreground)]'
                    )}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === option.value ? 'opacity-100' : 'opacity-0',
                        'text-[var(--color-primary)]'
                      )}
                    />
                  </ShadCommandItem>
                ))}
              </ShadCommandGroup>
            </ShadCommandList>
          </ShadCommand>
        </ShadPopoverContent>
      </ShadPopover>
      {error ? (
        <span className="text-xs text-[hsl(var(--destructive))] mt-1" role="alert">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-xs text-[var(--color-foreground-secondary)] mt-1">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

Combobox.displayName = 'Combobox';

export { Combobox }; 