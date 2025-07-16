/**
 * Select (Dropdown) Component
 *
 * A reusable, themeable, and accessible dropdown select with label, error, helper text, and option groups.
 * Supports variants (primary, secondary, outline), sizes (sm, md, lg), and full customization via className and props.
 * All colors are set via CSS variables for theme compatibility. Built with Tailwind utility classes for layout and spacing.
 * Optionally supports a search input (native for now, can be extended for custom search UI).
 */
import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  selectSize?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  id?: string;
  options?: SelectOption[];
  optionGroups?: SelectGroup[];
  searchable?: boolean;
  children?: React.ReactNode; // for custom option rendering or icons
  icon?: React.ReactNode; // for custom dropdown icon
}

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border',
    'border-[var(--color-primary)]',
    'focus:border-[var(--color-primary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-primary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border',
    'border-[var(--color-secondary)]',
    'focus:border-[var(--color-secondary-hover)]',
    'focus:ring-2',
    'focus:ring-[var(--color-secondary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-secondary-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
  outline: [
    'bg-transparent',
    'border',
    'border-[var(--color-outline-border)]',
    'focus:border-[var(--color-primary)]',
    'focus:ring-2',
    'focus:ring-[var(--color-primary)]',
    'text-[var(--color-foreground)]',
    'disabled:bg-[var(--color-outline-disabled)]',
    'disabled:text-[var(--color-foreground-disabled)]',
  ],
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      variant = 'primary',
      selectSize = 'md',
      className = '',
      containerClassName = '',
      id,
      options = [],
      optionGroups = [],
      searchable = false,
      children,
      disabled = false,
      icon,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? `select-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
    const describedBy = [
      error ? `${selectId}-error` : null,
      helperText ? `${selectId}-helper` : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    // For native search, filter options if searchable and value changes
    const [search, setSearch] = React.useState('');
    const filteredOptions = searchable && search
      ? options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()))
      : options;

    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="font-medium text-[var(--color-foreground)] mb-1"
          >
            {label}
          </label>
        )}
        {searchable && (
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className={[
              'mb-2 block w-full rounded-lg transition-all duration-200 outline-none',
              sizeClasses[selectSize],
              'border border-[var(--color-outline-border)]',
              'focus:border-[var(--color-primary)]',
              'focus:ring-2 focus:ring-[var(--color-primary)]',
              'bg-[var(--color-background-secondary)]',
              'text-[var(--color-foreground)]',
              'placeholder-[var(--color-foreground-secondary)]',
            ].join(' ')}
            aria-label="Search options"
            disabled={disabled}
          />
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={[
              'block w-full rounded-lg transition-all duration-200 outline-none appearance-none',
              sizeClasses[selectSize],
              ...variantClasses[variant],
              error ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]' : '',
              className,
            ].join(' ')}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            disabled={disabled}
            {...props}
          >
            {optionGroups.length > 0
              ? optionGroups.map(group => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ))
              : filteredOptions.map(opt => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
            {children}
          </select>
          <span className="absolute right-2 pointer-events-none flex items-center">
            {icon || <ChevronDown className="w-5 h-5 text-[var(--color-foreground-secondary)]" />}
          </span>
        </div>
        {error ? (
          <span
            id={selectId ? `${selectId}-error` : undefined}
            className="text-xs text-[var(--color-primary)] mt-1"
            role="alert"
          >
            {error}
          </span>
        ) : helperText ? (
          <span
            id={selectId ? `${selectId}-helper` : undefined}
            className="text-xs text-[var(--color-foreground-secondary)] mt-1"
          >
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select; 