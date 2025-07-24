/**
 * Calendar Component
 *
 * A reusable, themeable, and accessible calendar component.
 * Built on top of shadcn/ui Calendar component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Calendar as ShadCalendar, CalendarDayButton as ShadCalendarDayButton } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  variant?: 'primary' | 'secondary' | 'outline';
  calendarSize?: 'sm' | 'md' | 'lg';
  buttonVariant?: React.ComponentProps<typeof ShadCalendar>['buttonVariant'];
  className?: string;
  mode?: 'single' | 'multiple' | 'range';
  selected?: Date | Date[] | { from: Date; to?: Date };
  onSelect?: (date: Date | Date[] | { from: Date; to?: Date } | undefined) => void;
  defaultMonth?: Date;
  numberOfMonths?: number;
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
  showOutsideDays?: boolean;
  fixedWeeks?: boolean;
  disabled?: (date: Date) => boolean;
  modifiers?: Record<string, (date: Date) => boolean>;
  modifiersStyles?: Record<string, React.CSSProperties>;
  classNames?: Record<string, string>;
}

export interface CalendarDayButtonProps extends React.ComponentProps<typeof ShadCalendarDayButton> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'text-sm [--cell-size:theme(spacing.6)]',
  md: 'text-base [--cell-size:theme(spacing.8)]',
  lg: 'text-lg [--cell-size:theme(spacing.10)]',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    '[&_.rdp-button]:hover:bg-[var(--color-primary)]',
    '[&_.rdp-button]:hover:text-white',
    '[&_.rdp-button[data-selected=true]]:bg-[var(--color-primary)]',
    '[&_.rdp-button[data-selected=true]]:text-white',
    '[&_.rdp-button[data-today=true]]:bg-[var(--color-primary)]',
    '[&_.rdp-button[data-today=true]]:text-white',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    '[&_.rdp-button]:hover:bg-[var(--color-secondary)]',
    '[&_.rdp-button]:hover:text-white',
    '[&_.rdp-button[data-selected=true]]:bg-[var(--color-secondary)]',
    '[&_.rdp-button[data-selected=true]]:text-white',
    '[&_.rdp-button[data-today=true]]:bg-[var(--color-secondary)]',
    '[&_.rdp-button[data-today=true]]:text-white',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
    '[&_.rdp-button]:hover:bg-[var(--color-outline-hover)]',
    '[&_.rdp-button]:hover:text-[var(--color-foreground)]',
    '[&_.rdp-button[data-selected=true]]:bg-[var(--color-primary)]',
    '[&_.rdp-button[data-selected=true]]:text-white',
    '[&_.rdp-button[data-today=true]]:bg-[var(--color-accent)]',
    '[&_.rdp-button[data-today=true]]:text-[var(--color-accent-foreground)]',
  ],
};

const Calendar: React.FC<CalendarProps> = ({
  variant = 'primary',
  calendarSize = 'md',
  className = '',
  ...props
}) => {
  return (
    <ShadCalendar
      data-slot="calendar"
      className={cn(
        'rounded-md border shadow-sm transition-all duration-200',
        sizeClasses[calendarSize],
        ...variantClasses[variant],
        className
      )}
      {...(props as React.ComponentProps<typeof ShadCalendar>)}
    />
  );
};

const CalendarDayButton: React.FC<CalendarDayButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCalendarDayButton
      data-slot="calendar-day-button"
      className={cn(
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </ShadCalendarDayButton>
  );
};

Calendar.displayName = 'Calendar';
CalendarDayButton.displayName = 'CalendarDayButton';

export { Calendar, CalendarDayButton }; 