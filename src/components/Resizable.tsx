/**
 * Resizable Component
 *
 * A reusable, themeable, and accessible resizable panel component.
 * Built on top of shadcn/ui Resizable components with additional features like variants, sizes, and custom styling.
 * All colors are set via CSS variables for theme compatibility.
 */
import React from 'react';
import {
  ResizablePanelGroup as ShadResizablePanelGroup,
  ResizablePanel as ShadResizablePanel,
  ResizableHandle as ShadResizableHandle,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

export interface ResizablePanelGroupProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  autoSaveId?: string;
  onLayout?: (sizes: number[]) => void;
}

export interface ResizablePanelProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  order?: number;
  id?: string;
  collapsible?: boolean;
  collapsedSize?: number;
  onCollapse?: (collapsed: boolean) => void;
}

export interface ResizableHandleProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withHandle?: boolean;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'border-1',
  md: 'border-2',
  lg: 'border-3',
};

const variantClasses = {
  primary: [
    'border-[var(--color-primary)]',
    'bg-[var(--color-background)]',
  ],
  secondary: [
    'border-[var(--color-secondary)]',
    'bg-[var(--color-background-secondary)]',
  ],
  outline: [
    'border-[var(--color-outline-border)]',
    'bg-[var(--color-background)]',
  ],
};

const handleVariantClasses = {
  primary: [
    'bg-[var(--color-primary)]',
    'hover:bg-[var(--color-primary-hover)]',
  ],
  secondary: [
    'bg-[var(--color-secondary)]',
    'hover:bg-[var(--color-secondary-hover)]',
  ],
  outline: [
    'bg-[var(--color-outline-border)]',
    'hover:bg-[var(--color-border-hover)]',
  ],
};

const ResizablePanelGroup: React.FC<ResizablePanelGroupProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  direction = 'horizontal',
  autoSaveId,
  onLayout,
}) => {
  return (
    <ShadResizablePanelGroup
      className={cn(
        'rounded-lg transition-all',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      direction={direction}
      autoSaveId={autoSaveId}
      onLayout={onLayout}
    >
      {children}
    </ShadResizablePanelGroup>
  );
};

const ResizablePanel: React.FC<ResizablePanelProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  defaultSize,
  minSize,
  maxSize,
  order,
  id,
  collapsible = false,
  collapsedSize = 0,
  onCollapse,
}) => {
  return (
    <ShadResizablePanel
      className={cn(
        'transition-all',
        sizeClasses[size],
        ...variantClasses[variant],
        className
      )}
      defaultSize={defaultSize}
      minSize={minSize}
      maxSize={maxSize}
      order={order}
      id={id}
      collapsible={collapsible}
      collapsedSize={collapsedSize}
      onCollapse={onCollapse}
    >
      {children}
    </ShadResizablePanel>
  );
};

const ResizableHandle: React.FC<ResizableHandleProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  withHandle = false,
  direction = 'horizontal',
  disabled = false,
}) => {
  return (
    <ShadResizableHandle
      className={cn(
        'transition-all',
        sizeClasses[size],
        ...handleVariantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      withHandle={withHandle}
      disabled={disabled}
    />
  );
};

ResizablePanelGroup.displayName = 'ResizablePanelGroup';
ResizablePanel.displayName = 'ResizablePanel';
ResizableHandle.displayName = 'ResizableHandle';

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
}; 