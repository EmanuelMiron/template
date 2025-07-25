/**
 * Select (Dropdown) Component
 *
 * A reusable, themeable, and accessible dropdown select with label, error, helper text, and option groups.
 * Built on top of shadcn/ui Select components with additional features like variants, sizes, and search functionality.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { 
  Select as ShadSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps {
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
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
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

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
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
      placeholder = 'Select an option',
      value,
      onValueChange,
      disabled = false,
      children,
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

    // For search functionality
    const [search, setSearch] = React.useState('');
    const filteredOptions = searchable && search
      ? options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()))
      : options;

    const filteredGroups = searchable && search
      ? optionGroups.map(group => ({
          ...group,
          options: group.options.filter(opt => 
            opt.label.toLowerCase().includes(search.toLowerCase())
          )
        })).filter(group => group.options.length > 0)
      : optionGroups;

    return (
      <div className={cn('flex flex-col gap-1', containerClassName)} ref={ref}>
        {label && (
          <label
            htmlFor={selectId}
            className="font-medium text-[hsl(var(--foreground))] mb-1"
          >
            {label}
          </label>
        )}
        
        <ShadSelect value={value} onValueChange={onValueChange} disabled={disabled} {...props}>
          <SelectTrigger
            id={selectId}
            className={cn(
              sizeClasses[selectSize],
              ...variantClasses[variant],
              error && [
                '!border-[hsl(var(--destructive))]',
                '!ring-2',
                '!ring-[hsl(var(--destructive))]',
                'focus:!border-[hsl(var(--destructive))]',
                'focus:!ring-[hsl(var(--destructive))]',
              ],
              className
            )}
            aria-invalid={!!error}
            aria-describedby={describedBy}
          >
            <SelectValue placeholder={placeholder} />
            {icon && <span className="ml-2">{icon}</span>}
          </SelectTrigger>
          
          <SelectContent className="bg-[var(--color-background)] border border-[var(--color-outline-border)] shadow-lg">
            {searchable && (
              <div className="p-2 border-b border-[var(--color-outline-border)]">
                <Input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search options..."
                  className="h-8 text-sm"
                  aria-label="Search options"
                  disabled={disabled}
                />
              </div>
            )}
            {optionGroups.length > 0
              ? filteredGroups.map(group => (
                  <SelectGroup key={group.label}>
                    <SelectLabel>{group.label}</SelectLabel>
                    {group.options.map(opt => (
                      <SelectItem 
                        key={opt.value} 
                        value={opt.value}
                        disabled={opt.disabled}
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))
              : filteredOptions.map(opt => (
                  <SelectItem 
                    key={opt.value} 
                    value={opt.value}
                    disabled={opt.disabled}
                  >
                    {opt.label}
                  </SelectItem>
                ))}
            {children}
          </SelectContent>
        </ShadSelect>

        {error ? (
          <span
            id={selectId ? `${selectId}-error` : undefined}
            className="text-xs text-[hsl(var(--destructive))] mt-1"
            role="alert"
          >
            {error}
          </span>
        ) : helperText ? (
          <span
            id={selectId ? `${selectId}-helper` : undefined}
            className="text-xs text-[hsl(var(--muted-foreground))] mt-1"
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