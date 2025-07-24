# UI Components Checklist

Below is a list of 39 reusable UI components to build for your template. Check them off as you complete them!

- [x] **Input (TextField)** — Single-line text input with label, error, and helper text.
- [x] **Textarea** — Multi-line input for longer text.
- [x] **Select (Dropdown)** — Customizable dropdown with search and option groups.
- [x] **Checkbox** — Styled checkbox with label and indeterminate state.
- [ ] **Radio Group** — Radio buttons with group label and description.
- [ ] **Switch (Toggle)** — Accessible toggle switch for on/off states.
- [ ] **Slider** — Range slider for numeric input.
- [ ] **Stepper / Number Input** — Input with increment/decrement controls.
- [ ] **Date Picker** — Calendar-based date selection.
- [ ] **Time Picker** — Time selection with AM/PM or 24h support.
- [ ] **Avatar** — User profile image with fallback and status indicator.
- [ ] **Badge** — Small label for status, notification, or category.
- [ ] **Tooltip** — Hover/focus popup for extra info.
- [ ] **Popover** — Floating panel for menus, actions, or info.
- [ ] **Dropdown Menu** — Menu triggered by button or icon.
- [ ] **Modal (Dialog)** — Centered overlay for forms, alerts, or content.
- [ ] **Drawer (Sidebar)** — Slide-in panel from edge of screen.
- [ ] **Alert** — Banner for success, error, warning, or info.
- [ ] **Toast / Snackbar** — Temporary notification at screen edge.
- [ ] **Progress Bar** — Linear or circular progress indicator.
- [ ] **Spinner / Loader** — Animated loading indicator.
- [ ] **Tabs** — Switch between content panels.
- [x] **Accordion** — Expandable/collapsible content sections.
- [x] **Collapsible** — Customizable collapsible content with trigger and variants.
- [ ] **Card** — Container for content, with optional header, footer, and actions.
- [ ] **Table** — Data table with sorting, filtering, and pagination.
- [ ] **List** — Vertical or horizontal list of items.
- [ ] **Pagination** — Controls for navigating paged content.
- [ ] **Breadcrumbs** — Navigation trail for hierarchical pages.
- [ ] **Navbar (Top Navigation)** — Main site navigation bar.
- [ ] **Sidebar Navigation** — Vertical navigation for dashboards or apps.
- [ ] **Footer** — Site/app footer with links and info.
- [ ] **Hero Section** — Prominent landing page intro with headline, text, and call-to-action.
- [ ] **Feature Grid** — Grid of features/services with icons and descriptions.
- [ ] **Pricing Table** — Plans comparison with features and call-to-action.
- [ ] **Testimonial / Review** — User feedback with avatar, quote, and rating.
- [ ] **FAQ (Frequently Asked Questions)** — Expandable list of questions and answers.
- [ ] **Stats / KPI Widget** — Display key metrics with icons and trends.
- [ ] **Timeline** — Chronological list of events or steps.
- [ ] **File Uploader** — Drag-and-drop or button-based file upload with preview. 




Prompt template: 

Create a reusable [Input (TextField)] component using Tailwind CSS and the theme system (CSS custom properties for all colors, e.g., --color-primary, --color-foreground, etc.).

- The component should support variants (e.g., primary, secondary, outline, etc.) and sizes (e.g., sm, md, lg), if applicable.
- Use Tailwind utility classes for layout, spacing, and effects, but all color values must be set via CSS variables (no hardcoded Tailwind color classes).
- The component should accept a className prop for further customization.
- It should be fully typed with TypeScript, extending the appropriate HTML element props.
- If the component is a container or can have content, accept children as a prop.
- Add support for disabled, hover, and focus states where relevant.
- Make the component easy to extend/configure (e.g., allow passing extra props, render as different elements if needed).
- Ensure accessibility best practices (e.g., ARIA attributes, keyboard navigation) where relevant.
- The component should work with the theme system (switching themes via data-theme and CSS variables).
- Add a short JSDoc or comment at the top describing the component and its intended use.
- Include icon support if necessary ( lucite-react icons )
- Add on Homepage examples for this component

Description:
Single-line text input with label, error, and helper text.