/**
 * DatePicker Component
 *
 * A reusable, themeable, and accessible date picker component with calendar popup.
 * Built on top of shadcn/ui Calendar and Popover components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/Calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface DatePickerProps {
  value?: Date;
  onValueChange?: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  id?: string;
  mode?: 'single' | 'multiple' | 'range';
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
  showOutsideDays?: boolean;
  disabledDates?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  format?: (date: Date) => string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm h-8',
  md: 'px-4 py-2 text-base h-10',
  lg: 'px-6 py-3 text-lg h-12',
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
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'hover:bg-[var(--color-background-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
    'focus:border-[var(--color-secondary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'focus:ring-offset-2',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
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
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
};

const defaultFormat = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onValueChange,
  label,
  placeholder = 'Select date...',
  variant = 'primary',
  size = 'md',
  className = '',
  containerClassName = '',
  disabled = false,
  error,
  helperText,
  id,
  mode = 'single',
  captionLayout = 'dropdown',
  showOutsideDays = true,
  disabledDates,
  minDate,
  maxDate,
  format = defaultFormat,
  align = 'start',
  sideOffset = 4,
}) => {
  const [open, setOpen] = React.useState(false);
  const datePickerId = id || (label ? `datepicker-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const describedBy = [
    error ? `${datePickerId}-error` : null,
    helperText ? `${datePickerId}-helper` : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const handleDateSelect = (date: Date | undefined) => {
    onValueChange?.(date);
    if (date) {
      setOpen(false);
    }
  };

  const isDateDisabled = (date: Date) => {
    if (disabledDates?.(date)) return true;
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  return (
    <div className={cn('flex flex-col gap-1', containerClassName)}>
      {label && (
        <label
          htmlFor={datePickerId}
          className="font-medium text-[var(--color-foreground)] mb-1"
        >
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={datePickerId}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              'w-full justify-between font-normal',
              sizeClasses[size],
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
            aria-invalid={!!error}
            aria-describedby={describedBy}
          >
            {value ? format(value) : placeholder}
            <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className={cn(
            'w-auto p-0',
            'bg-[var(--color-background)]',
            'border-[var(--color-border)]',
            'text-[var(--color-foreground)]',
            'shadow-lg'
          )}
          align={align}
          sideOffset={sideOffset}
        >
          <Calendar
            mode={mode}
            selected={value}
            onSelect={(date) => handleDateSelect(date as Date)}
            disabled={isDateDisabled}
            captionLayout={captionLayout}
            showOutsideDays={showOutsideDays}
            className={cn(
              'rounded-md border-0',
              'bg-[var(--color-background)]',
              'text-[var(--color-foreground)]'
            )}
            classNames={{
              day: cn(
                'h-9 w-9 p-0 font-normal',
                'hover:bg-[var(--color-background-hover)]',
                'focus:bg-[var(--color-background-hover)]',
                'data-[selected=true]:bg-[var(--color-primary)]',
                'data-[selected=true]:text-white',
                'data-[today=true]:bg-[var(--color-accent)]',
                'data-[today=true]:text-[var(--color-accent-foreground)]',
                'data-[disabled=true]:opacity-50',
                'data-[disabled=true]:cursor-not-allowed'
              ),
              nav_button: cn(
                'h-7 w-7 bg-transparent p-0',
                'hover:bg-[var(--color-background-hover)]',
                'hover:text-[var(--color-foreground)]',
                'opacity-50 hover:opacity-100'
              ),
              caption: 'flex justify-center pt-1 relative items-center',
              caption_label: 'text-sm font-medium',
              head_cell: 'text-[var(--color-foreground-secondary)] rounded-md w-8 font-normal text-[0.8rem]',
              table: 'w-full border-collapse space-y-1',
              head_row: 'flex',
              row: 'flex w-full mt-2',
              cell: cn(
                'text-center text-sm p-0 relative',
                'focus-within:relative focus-within:z-20',
                '[&:has([aria-selected])]:bg-[var(--color-accent)]',
                'first:[&:has([aria-selected])]:rounded-l-md',
                'last:[&:has([aria-selected])]:rounded-r-md'
              ),
            }}
          />
        </PopoverContent>
      </Popover>
      {error ? (
        <span
          id={datePickerId ? `${datePickerId}-error` : undefined}
          className="text-xs text-[hsl(var(--destructive))] mt-1"
          role="alert"
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          id={datePickerId ? `${datePickerId}-helper` : undefined}
          className="text-xs text-[var(--color-foreground-secondary)] mt-1"
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

export { DatePicker }; 