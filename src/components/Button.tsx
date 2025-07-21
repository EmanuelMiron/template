import React from 'react';
import { Button as ShadButton } from '@/components/ui/button';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ];

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: [
      'bg-[var(--color-primary)]',
      'text-white',
      'hover:bg-[var(--color-primary-hover)]',
      'focus:ring-[var(--color-primary)]',
      'disabled:bg-[var(--color-primary-disabled)]',
      'shadow-sm',
      'hover:shadow-md',
    ],
    secondary: [
      'bg-[var(--color-secondary)]',
      'text-white',
      'hover:bg-[var(--color-secondary-hover)]',
      'focus:ring-[var(--color-secondary)]',
      'disabled:bg-[var(--color-secondary-disabled)]',
      'shadow-sm',
      'hover:shadow-md',
    ],
    outline: [
      'bg-[var(--color-outline)]',
      'text-[var(--color-foreground)]',
      'border',
      'border-[var(--color-outline-border)]',
      'hover:bg-[var(--color-outline-hover)]',
      'hover:border-[var(--color-border-hover)]',
      'focus:ring-[var(--color-primary)]',
      'disabled:bg-[var(--color-outline-disabled)]',
      'disabled:border-[var(--color-outline-border-disabled)]',
      'disabled:text-[var(--color-foreground-disabled)]',
    ],
  };

  const classes = [
    ...baseClasses,
    sizeClasses[size],
    ...variantClasses[variant],
    className,
  ].join(' ');

  return (
    <ShadButton
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </ShadButton>
  );
};

export default Button; 