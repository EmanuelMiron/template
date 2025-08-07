# Button Component with Theme System

This project includes a reusable Button component built with React, TypeScript, and Tailwind CSS, featuring a comprehensive theme system using CSS custom properties.

## Features

### Button Component
- **Three variants**: `primary`, `secondary`, `outline`
- **Three sizes**: `sm`, `md`, `lg`
- **States**: Normal, hover, focus, disabled
- **Fully typed**: TypeScript interfaces for all props
- **Customizable**: Accepts additional className and all standard button props

### Theme System
- **CSS Custom Properties**: All colors defined as CSS variables
- **Light/Dark Themes**: Toggle between themes using `data-theme="dark"`
- **Persistent**: Theme preference saved in localStorage
- **System Preference**: Automatically detects user's system theme preference
- **Easy Customization**: Change entire app appearance by modifying CSS variables

## Usage

### Basic Button Usage

```tsx
import { Button } from './components/Button';

// Primary button (default)
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Secondary Action</Button>

// Outline button
<Button variant="outline">Outline Style</Button>
```

### Button Variants

```tsx
// All variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// All sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// With custom className
<Button className="rounded-full px-8">Custom Style</Button>
```

### Theme Management

```tsx
import { useTheme } from './contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={() => setTheme('dark')}>Set Dark</Button>
      <Button onClick={() => setTheme('light')}>Set Light</Button>
    </div>
  );
};
```

## CSS Custom Properties

All colors are defined in `src/theme.css` using CSS custom properties:

### Light Theme (default)
```css
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-disabled: #93c5fd;
  
  --color-secondary: #6b7280;
  --color-secondary-hover: #4b5563;
  --color-secondary-disabled: #d1d5db;
  
  --color-outline: transparent;
  --color-outline-border: #d1d5db;
  --color-outline-hover: #f3f4f6;
  --color-outline-disabled: #f9fafb;
  --color-outline-border-disabled: #e5e7eb;
  
  --color-foreground: #111827;
  --color-foreground-secondary: #6b7280;
  --color-foreground-disabled: #9ca3af;
  
  --color-background: #ffffff;
  --color-background-secondary: #f9fafb;
  
  --color-border: #d1d5db;
  --color-border-hover: #9ca3af;
  
  --color-shadow: rgba(0, 0, 0, 0.1);
  --color-shadow-hover: rgba(0, 0, 0, 0.15);
}
```

### Dark Theme
```css
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-primary-hover: #3b82f6;
  --color-primary-disabled: #1e3a8a;
  
  --color-secondary: #9ca3af;
  --color-secondary-hover: #6b7280;
  --color-secondary-disabled: #374151;
  
  --color-outline: transparent;
  --color-outline-border: #4b5563;
  --color-outline-hover: #374151;
  --color-outline-disabled: #1f2937;
  --color-outline-border-disabled: #374151;
  
  --color-foreground: #f9fafb;
  --color-foreground-secondary: #d1d5db;
  --color-foreground-disabled: #6b7280;
  
  --color-background: #111827;
  --color-background-secondary: #1f2937;
  
  --color-border: #4b5563;
  --color-border-hover: #6b7280;
  
  --color-shadow: rgba(0, 0, 0, 0.3);
  --color-shadow-hover: rgba(0, 0, 0, 0.4);
}
```

## Customization

### Changing Colors
To change the entire app's appearance, simply modify the CSS variables in `src/theme.css`. For example, to change the primary color:

```css
:root {
  --color-primary: #10b981; /* Green instead of blue */
  --color-primary-hover: #059669;
  --color-primary-disabled: #6ee7b7;
}
```

### Adding New Variants
To add a new button variant, update the `ButtonProps` interface and add the variant classes:

```tsx
// In Button.tsx
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'; // Add new variant
  // ... other props
}

const variantClasses = {
  // ... existing variants
  danger: [
    'bg-red-500',
    'text-white',
    'hover:bg-red-600',
    'focus:ring-red-500',
    'disabled:bg-red-300',
  ],
};
```

## File Structure

```
src/
├── components/
│   └── Button.tsx          # Main Button component
├── contexts/
│   └── ThemeContext.tsx    # Theme management context
├── pages/
│   └── Home.tsx           # Demo page showcasing the component
├── theme.css              # CSS custom properties for theming
├── index.css              # Global styles with theme import
└── App.tsx                # App with ThemeProvider wrapper
```

## Running the Demo

1. Install dependencies: `yarn install`
2. Start development server: `yarn dev`
3. Open the app and explore the Button component demo
4. Use the theme toggle button to switch between light and dark themes

## Benefits

- **Consistent Design**: All buttons follow the same design system
- **Accessible**: Proper focus states and keyboard navigation
- **Type Safe**: Full TypeScript support with proper interfaces
- **Themeable**: Easy to customize colors and add new themes
- **Reusable**: Can be used throughout the application
- **Maintainable**: Centralized styling with CSS custom properties 