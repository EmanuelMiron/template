/**
 * Carousel Component
 *
 * A reusable, themeable, and accessible carousel component.
 * Built on top of shadcn/ui Carousel component with additional features like variants and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  Carousel as ShadCarousel,
  CarouselContent as ShadCarouselContent,
  CarouselItem as ShadCarouselItem,
  CarouselNext as ShadCarouselNext,
  CarouselPrevious as ShadCarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export interface CarouselProps extends React.ComponentProps<typeof ShadCarousel> {
  variant?: 'primary' | 'secondary' | 'outline';
  carouselSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselContentProps extends React.ComponentProps<typeof ShadCarouselContent> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselItemProps extends React.ComponentProps<typeof ShadCarouselItem> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselPreviousProps extends Omit<React.ComponentProps<typeof ShadCarouselPrevious>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
  buttonSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselNextProps extends Omit<React.ComponentProps<typeof ShadCarouselNext>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
  buttonSize?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'max-w-xs',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

const buttonSizeClasses = {
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-10',
};

const variantClasses = {
  primary: [
    'bg-[var(--color-background)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
  ],
  secondary: [
    'bg-[var(--color-background-secondary)]',
    'border-[var(--color-border)]',
    'text-[var(--color-foreground)]',
  ],
  outline: [
    'bg-transparent',
    'border-[var(--color-outline-border)]',
    'text-[var(--color-foreground)]',
  ],
};

const Carousel: React.FC<CarouselProps> = ({
  variant = 'primary',
  carouselSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCarousel
      data-slot="carousel"
      className={cn(
        'relative',
        sizeClasses[carouselSize],
        ...variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadCarousel>
  );
};

const CarouselContent: React.FC<CarouselContentProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCarouselContent
      data-slot="carousel-content"
      className={cn(
        'overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </ShadCarouselContent>
  );
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCarouselItem
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        className
      )}
      {...props}
    >
      {children}
    </ShadCarouselItem>
  );
};

const CarouselPrevious: React.FC<CarouselPreviousProps> = ({
  variant = 'outline',
  buttonSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCarouselPrevious
      data-slot="carousel-previous"
      variant={variant === 'primary' ? 'default' : variant === 'secondary' ? 'secondary' : 'outline'}
      size="icon"
      className={cn(
        'absolute rounded-full',
        buttonSizeClasses[buttonSize],
        'top-1/2 -left-12 -translate-y-1/2',
        'bg-[var(--color-background)]',
        'border-[var(--color-border)]',
        'text-[var(--color-foreground)]',
        'hover:bg-[var(--color-background-hover)]',
        'hover:border-[var(--color-border-hover)]',
        'focus:ring-2',
        'focus:ring-[var(--color-primary)]',
        'focus:ring-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCarouselPrevious>
  );
};

const CarouselNext: React.FC<CarouselNextProps> = ({
  variant = 'outline',
  buttonSize = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <ShadCarouselNext
      data-slot="carousel-next"
      variant={variant === 'primary' ? 'default' : variant === 'secondary' ? 'secondary' : 'outline'}
      size="icon"
      className={cn(
        'absolute rounded-full',
        buttonSizeClasses[buttonSize],
        'top-1/2 -right-12 -translate-y-1/2',
        'bg-[var(--color-background)]',
        'border-[var(--color-border)]',
        'text-[var(--color-foreground)]',
        'hover:bg-[var(--color-background-hover)]',
        'hover:border-[var(--color-border-hover)]',
        'focus:ring-2',
        'focus:ring-[var(--color-primary)]',
        'focus:ring-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </ShadCarouselNext>
  );
};

Carousel.displayName = 'Carousel';
CarouselContent.displayName = 'CarouselContent';
CarouselItem.displayName = 'CarouselItem';
CarouselPrevious.displayName = 'CarouselPrevious';
CarouselNext.displayName = 'CarouselNext';

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
export type { CarouselApi }; 