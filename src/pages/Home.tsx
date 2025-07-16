import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Select from '../components/Select';
import type { SelectOption, SelectGroup } from '../components/Select';
import Checkbox from '../components/Checkbox';
import { MessageSquare, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const themeIcons: Record<string, string> = {
  light: '🌞',
  dark: '🌙',
  brutalist: '🦄',
  default: '🧼',
  pastel: '🧁',
  editorial: '📰',
  minimal: '⬜',
  accessible: '🦻',
  kids: '🧸',
  retro: '💾',
  terminal: '💻',
};
const themeLabels: Record<string, string> = {
  light: 'Light',
  dark: 'Dark',
  brutalist: 'Brutalist',
  default: 'Default',
  pastel: 'Pastel',
  editorial: 'Editorial',
  minimal: 'Minimal',
  accessible: 'Accessible',
  kids: 'Kids',
  retro: 'Retro',
  terminal: 'Terminal',
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const selectOptions: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const selectGroups: SelectGroup[] = [
    {
      label: 'Group 1',
      options: [
        { value: 'group1-option1', label: 'Group 1 Option 1' },
        { value: 'group1-option2', label: 'Group 1 Option 2' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { value: 'group2-option1', label: 'Group 2 Option 1' },
        { value: 'group2-option2', label: 'Group 2 Option 2' },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Button Component Demo</h1>
          <Button 
            variant="outline" 
            onClick={toggleTheme}
            className="flex items-center gap-2"
          >
            {themeIcons[theme] || '🎨'} {themeLabels[theme] || theme} Mode
          </Button>
        </div>

        <div className="space-y-8">
          {/* Input Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Input (TextField) Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Primary" placeholder="Primary input" variant="primary" inputSize="md" />
              <Input label="Secondary" placeholder="Secondary input" variant="secondary" inputSize="md" />
              <Input label="Outline" placeholder="Outline input" variant="outline" inputSize="md" />
              <Input label="Disabled" placeholder="Can't type here" variant="primary" inputSize="md" disabled />
              <Input label="With Helper" placeholder="Type here..." helperText="This is some helper text." variant="primary" inputSize="md" />
              <Input label="With Error" placeholder="Type here..." error="This field is required." variant="primary" inputSize="md" />
              <Input label="Small" placeholder="Small input" variant="primary" inputSize="sm" />
              <Input label="Large" placeholder="Large input" variant="primary" inputSize="lg" />
              <Input label="With Icon" placeholder="Search..." variant="outline" inputSize="md" icon={<Search className="w-5 h-5 text-[var(--color-foreground-secondary)]" />} />
            </div>
          </section>
          {/* Textarea Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Textarea Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Textarea label="Primary" placeholder="Primary textarea" variant="primary" textareaSize="md" />
              <Textarea label="Secondary" placeholder="Secondary textarea" variant="secondary" textareaSize="md" />
              <Textarea label="Outline" placeholder="Outline textarea" variant="outline" textareaSize="md" />
              <Textarea label="Disabled" placeholder="Can't type here" variant="primary" textareaSize="md" disabled />
              <Textarea label="With Helper" placeholder="Type here..." helperText="This is some helper text." variant="primary" textareaSize="md" />
              <Textarea label="With Error" placeholder="Type here..." error="This field is required." variant="primary" textareaSize="md" />
              <Textarea label="Small" placeholder="Small textarea" variant="primary" textareaSize="sm" />
              <Textarea label="Large" placeholder="Large textarea" variant="primary" textareaSize="lg" />
              <Textarea label="With Icon" placeholder="Comment..." variant="outline" textareaSize="md" icon={<MessageSquare className="w-5 h-5 text-[var(--color-foreground-secondary)]" />} />
            </div>
          </section>
          {/* Select Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Select (Dropdown) Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select label="Primary" options={selectOptions} variant="primary" selectSize="md" />
              <Select label="Secondary" options={selectOptions} variant="secondary" selectSize="md" />
              <Select label="Outline" options={selectOptions} variant="outline" selectSize="md" />
              <Select label="Disabled" options={selectOptions} variant="primary" selectSize="md" disabled />
              <Select label="With Helper" options={selectOptions} helperText="This is some helper text." variant="primary" selectSize="md" />
              <Select label="With Error" options={selectOptions} error="This field is required." variant="primary" selectSize="md" />
              <Select label="Small" options={selectOptions} variant="primary" selectSize="sm" />
              <Select label="Large" options={selectOptions} variant="primary" selectSize="lg" />
              <Select label="With Icon" options={selectOptions} variant="outline" selectSize="md" icon={<Search className="w-5 h-5 text-[var(--color-foreground-secondary)]" />} />
              <Select label="With Search" options={selectOptions} variant="primary" selectSize="md" searchable />
              <Select label="With Option Groups" optionGroups={selectGroups} variant="primary" selectSize="md" />
            </div>
          </section>
          {/* Checkbox Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Checkbox Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Checkbox label="Primary" variant="primary" checkboxSize="md" />
              <Checkbox label="Secondary" variant="secondary" checkboxSize="md" />
              <Checkbox label="Outline" variant="outline" checkboxSize="md" />
              <Checkbox label="Disabled" variant="primary" checkboxSize="md" disabled />
              <Checkbox label="With Helper" helperText="This is some helper text." variant="primary" checkboxSize="md" />
              <Checkbox label="With Error" error="This field is required." variant="primary" checkboxSize="md" />
              <Checkbox label="Small" variant="primary" checkboxSize="sm" />
              <Checkbox label="Large" variant="primary" checkboxSize="lg" />
              <Checkbox label="Indeterminate" variant="primary" checkboxSize="md" indeterminate />
              <Checkbox label="With Custom Content">
                <span className="ml-1 text-xs text-[var(--color-foreground-secondary)]">(custom label content)</span>
              </Checkbox>
            </div>
          </section>
          {/* Primary Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Primary Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="sm">Small Primary</Button>
              <Button variant="primary" size="md">Medium Primary</Button>
              <Button variant="primary" size="lg">Large Primary</Button>
              <Button variant="primary" disabled>Disabled Primary</Button>
            </div>
          </section>

          {/* Secondary Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Secondary Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="secondary" size="md">Medium Secondary</Button>
              <Button variant="secondary" size="lg">Large Secondary</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
            </div>
          </section>

          {/* Outline Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Outline Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline" size="sm">Small Outline</Button>
              <Button variant="outline" size="md">Medium Outline</Button>
              <Button variant="outline" size="lg">Large Outline</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </section>

          {/* Interactive Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Interactive Examples</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                variant="primary" 
                onClick={() => alert('Primary button clicked!')}
              >
                Click Me!
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => console.log('Secondary button clicked!')}
              >
                Console Log
              </Button>
              <Button 
                variant="outline" 
                onClick={() => prompt('Enter your name:')}
              >
                Prompt Input
              </Button>
            </div>
          </section>

          {/* Custom Styling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                variant="primary" 
                className="rounded-full px-8"
              >
                Rounded Primary
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-dashed"
              >
                Dashed Border
              </Button>
              <Button 
                variant="secondary" 
                className="uppercase tracking-wider"
              >
                Uppercase
              </Button>
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-[var(--color-background-secondary)] rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Theme Information</h3>
          <p className="text-[var(--color-foreground-secondary)]">
            Current theme: <span className="font-medium">{theme}</span>
          </p>
          <p className="text-[var(--color-foreground-secondary)] mt-2">
            All colors are controlled by CSS custom properties. To change the entire app's appearance, 
            simply modify the variables in <code className="bg-[var(--color-background)] px-2 py-1 rounded">src/theme.css</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;