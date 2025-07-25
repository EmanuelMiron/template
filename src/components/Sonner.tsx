/**
 * Sonner Component
 *
 * A reusable, themeable, and accessible toast notification component.
 * Built on top of shadcn/ui Sonner component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Toaster as ShadToaster } from 'sonner';
import type { ToasterProps } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';

export interface SonnerProps extends ToasterProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
  duration?: number;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const variantClasses = {
  primary: {
    normal: {
      '--normal-bg': 'var(--color-primary)',
      '--normal-text': 'var(--color-primary-foreground)',
      '--normal-border': 'var(--color-primary-border)',
    },
    success: {
      '--success-bg': 'var(--color-success)',
      '--success-text': 'var(--color-success-foreground)',
      '--success-border': 'var(--color-success-border)',
    },
    error: {
      '--error-bg': 'var(--color-destructive)',
      '--error-text': 'var(--color-destructive-foreground)',
      '--error-border': 'var(--color-destructive-border)',
    },
    warning: {
      '--warning-bg': 'var(--color-warning)',
      '--warning-text': 'var(--color-warning-foreground)',
      '--warning-border': 'var(--color-warning-border)',
    },
  },
  secondary: {
    normal: {
      '--normal-bg': 'var(--color-secondary)',
      '--normal-text': 'var(--color-secondary-foreground)',
      '--normal-border': 'var(--color-secondary-border)',
    },
    success: {
      '--success-bg': 'var(--color-success)',
      '--success-text': 'var(--color-success-foreground)',
      '--success-border': 'var(--color-success-border)',
    },
    error: {
      '--error-bg': 'var(--color-destructive)',
      '--error-text': 'var(--color-destructive-foreground)',
      '--error-border': 'var(--color-destructive-border)',
    },
    warning: {
      '--warning-bg': 'var(--color-warning)',
      '--warning-text': 'var(--color-warning-foreground)',
      '--warning-border': 'var(--color-warning-border)',
    },
  },
  outline: {
    normal: {
      '--normal-bg': 'var(--color-background)',
      '--normal-text': 'var(--color-foreground)',
      '--normal-border': 'var(--color-border)',
    },
    success: {
      '--success-bg': 'var(--color-success)',
      '--success-text': 'var(--color-success-foreground)',
      '--success-border': 'var(--color-success-border)',
    },
    error: {
      '--error-bg': 'var(--color-destructive)',
      '--error-text': 'var(--color-destructive-foreground)',
      '--error-border': 'var(--color-destructive-border)',
    },
    warning: {
      '--warning-bg': 'var(--color-warning)',
      '--warning-text': 'var(--color-warning-foreground)',
      '--warning-border': 'var(--color-warning-border)',
    },
  },
};

const Sonner: React.FC<SonnerProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  position = 'top-right',
  expand = false,
  richColors = true,
  closeButton = true,
  duration = 4000,
  ...props
}) => {
  const { theme } = useTheme();
  const variantConfig = variantClasses[variant];

  const style = {
    ...variantConfig.normal,
    ...variantConfig.success,
    ...variantConfig.error,
    ...variantConfig.warning,
  } as React.CSSProperties;

  return (
    <ShadToaster
      theme={theme as ToasterProps['theme']}
      className={`toaster group ${sizeClasses[size]} ${className}`}
      position={position}
      expand={expand}
      richColors={richColors}
      closeButton={closeButton}
      duration={duration}
      style={style}
      {...props}
    />
  );
};

Sonner.displayName = 'Sonner';

export default Sonner; 