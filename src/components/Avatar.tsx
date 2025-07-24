/**
 * Avatar Component
 *
 * A reusable, themeable, and accessible avatar component with image and fallback support.
 * Built on top of shadcn/ui Avatar component with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import { Avatar as ShadAvatar, AvatarImage as ShadAvatarImage, AvatarFallback as ShadAvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.ComponentProps<typeof ShadAvatar> {
  variant?: 'primary' | 'secondary' | 'outline';
  avatarSize?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

export interface AvatarImageProps extends React.ComponentProps<typeof ShadAvatarImage> {
  className?: string;
}

export interface AvatarFallbackProps extends React.ComponentProps<typeof ShadAvatarFallback> {
  className?: string;
}

const sizeClasses = {
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-12',
  xl: 'size-16',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'text-white',
    'border',
    'border-[var(--color-primary)]',
    'hover:bg-[var(--color-primary-hover)]',
    'hover:border-[var(--color-primary-hover)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'text-white',
    'border',
    'border-[var(--color-secondary)]',
    'hover:bg-[var(--color-secondary-hover)]',
    'hover:border-[var(--color-secondary-hover)]',
  ],
  outline: [
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
    'border',
    'border-[var(--color-outline-border)]',
    'hover:bg-[var(--color-outline-hover)]',
    'hover:border-[var(--color-border-hover)]',
  ],
};

const Avatar = React.forwardRef<React.ElementRef<typeof ShadAvatar>, AvatarProps>(
  (
    {
      variant = 'primary',
      avatarSize = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ShadAvatar
        ref={ref}
        data-slot="avatar"
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full transition-all duration-200 ease-in-out',
          sizeClasses[avatarSize],
          ...variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadAvatar>
    );
  }
);

const AvatarImage = React.forwardRef<React.ElementRef<typeof ShadAvatarImage>, AvatarImageProps>(
  (
    {
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <ShadAvatarImage
        ref={ref}
        data-slot="avatar-image"
        className={cn('aspect-square size-full object-cover', className)}
        {...props}
      />
    );
  }
);

const AvatarFallback = React.forwardRef<React.ElementRef<typeof ShadAvatarFallback>, AvatarFallbackProps>(
  (
    {
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <ShadAvatarFallback
        ref={ref}
        data-slot="avatar-fallback"
        className={cn(
          'flex size-full items-center justify-center rounded-full font-medium',
          className
        )}
        {...props}
      />
    );
  }
);

Avatar.displayName = 'Avatar';
AvatarImage.displayName = 'AvatarImage';
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback }; 