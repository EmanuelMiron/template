import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search, MessageSquare, Info, AlertCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CustomInput from '@/components/Input';

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

const ShadcnHome = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [rating, setRating] = useState(0);

  // Debug function to get CSS variable values
  const getCSSVariable = (variable: string) => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(variable);
    }
    return '';
  };

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Debug Section */}
        <div className="mb-8 p-4 bg-card border border-border rounded-[var(--radius)]">
          <h3 className="font-semibold mb-2">Debug: CSS Variables (Terminal Theme)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div>--foreground: <span className="font-mono">{getCSSVariable('--foreground')}</span></div>
            <div>--muted-foreground: <span className="font-mono">{getCSSVariable('--muted-foreground')}</span></div>
            <div>--background: <span className="font-mono">{getCSSVariable('--background')}</span></div>
            <div>--primary: <span className="font-mono">{getCSSVariable('--primary')}</span></div>
            <div>--border: <span className="font-mono">{getCSSVariable('--border')}</span></div>
            <div>--input: <span className="font-mono">{getCSSVariable('--input')}</span></div>
          </div>
          <div className="mt-2 text-xs">
            <div>Current Theme: <span className="font-mono">{theme}</span></div>
            <div>data-theme attribute: <span className="font-mono">{typeof window !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'N/A'}</span></div>
          </div>
          <div className="mt-2 text-xs">
            <h4 className="font-semibold">Custom Theme Variables:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div>--color-foreground: <span className="font-mono">{getCSSVariable('--color-foreground')}</span></div>
              <div>--color-foreground-secondary: <span className="font-mono">{getCSSVariable('--color-foreground-secondary')}</span></div>
              <div>--color-background: <span className="font-mono">{getCSSVariable('--color-background')}</span></div>
              <div>--color-primary: <span className="font-mono">{getCSSVariable('--color-primary')}</span></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Shadcn UI Component Demo</h1>
          <Button variant="outline" onClick={toggleTheme}>
            {themeIcons[theme] || '🎨'} {themeLabels[theme] || theme} Mode
          </Button>
        </div>

        <div className="space-y-8">
          {/* Button Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Button Examples</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Search className="w-5 h-5 mr-2" /> Search
              </Button>
            </div>
          </section>

          {/* Input Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shadcn Input Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="input1">Primary</label>
                <Input id="input1" placeholder="Primary input" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="input2">Disabled</label>
                <Input id="input2" placeholder="Disabled input" disabled />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="input3">With Helper</label>
                <Input id="input3" placeholder="With Helper" />
                <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="input4">With Error</label>
                <Input id="input4" placeholder="With Error" className="border-destructive" />
                <span className="text-xs text-destructive mt-1 block" role="alert">This field is required.</span>
              </div>
              <div className="relative">
                <label className="block mb-1 text-sm font-medium" htmlFor="input5">With Icon</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="input5" placeholder="Search..." className="pl-10" />
                </div>
              </div>
            </div>
          </section>

          {/* Custom Input Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Input Component Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomInput 
                  label="Primary Variant"
                  placeholder="Primary input with label"
                  variant="primary"
                  inputSize="md"
                />
              </div>
              <div>
                <CustomInput 
                  label="Secondary Variant"
                  placeholder="Secondary input with label"
                  variant="secondary"
                  inputSize="md"
                />
              </div>
              <div>
                <CustomInput 
                  label="Outline Variant"
                  placeholder="Outline input with label"
                  variant="outline"
                  inputSize="md"
                />
              </div>
              <div>
                <CustomInput 
                  label="Disabled Input"
                  placeholder="Disabled input"
                  variant="primary"
                  inputSize="md"
                  disabled
                />
              </div>
              <div>
                <CustomInput 
                  label="With Helper Text"
                  placeholder="Input with helper text"
                  variant="primary"
                  inputSize="md"
                  helperText="This is some helpful information about this field."
                />
              </div>
              <div>
                <CustomInput 
                  label="With Error"
                  placeholder="Input with error"
                  variant="primary"
                  inputSize="md"
                  error="This field is required and cannot be empty."
                />
              </div>
              <div>
                <CustomInput 
                  label="With Icon"
                  placeholder="Search with icon"
                  variant="primary"
                  inputSize="md"
                  icon={<Search className="w-4 h-4 text-muted-foreground" />}
                />
              </div>
              <div>
                <CustomInput 
                  label="Small Size"
                  placeholder="Small input"
                  variant="outline"
                  inputSize="sm"
                />
              </div>
              <div>
                <CustomInput 
                  label="Large Size"
                  placeholder="Large input"
                  variant="secondary"
                  inputSize="lg"
                />
              </div>
              <div>
                <CustomInput 
                  label="Email Input"
                  type="email"
                  placeholder="Enter your email"
                  variant="primary"
                  inputSize="md"
                  helperText="We'll never share your email with anyone else."
                />
              </div>
              <div>
                <CustomInput 
                  label="Password Input"
                  type="password"
                  placeholder="Enter your password"
                  variant="outline"
                  inputSize="md"
                  error="Password must be at least 8 characters long."
                />
              </div>
            </div>
          </section>

          {/* Date Picker */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Date Picker</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="date1">Date Input</label>
                <Input 
                  id="date1" 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="datetime1">Date & Time</label>
                <Input 
                  id="datetime1" 
                  type="datetime-local" 
                />
              </div>
            </div>
          </section>

          {/* Textarea Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Textarea Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="textarea1">Primary</label>
                <Textarea id="textarea1" placeholder="Primary textarea" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="textarea2">With Helper</label>
                <Textarea id="textarea2" placeholder="With Helper" />
                <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" htmlFor="textarea3">With Error</label>
                <Textarea id="textarea3" placeholder="With Error" className="border-destructive" />
                <span className="text-xs text-destructive mt-1 block" role="alert">This field is required.</span>
              </div>
              <div className="relative">
                <label className="block mb-1 text-sm font-medium" htmlFor="textarea4">With Icon</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea id="textarea4" placeholder="Comment..." className="pl-10" />
                </div>
              </div>
            </div>
          </section>

          {/* Select Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Select Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Primary</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                    <SelectItem value="option4">Option 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">With Helper</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                    <SelectItem value="option4">Option 4</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
              </div>
            </div>
          </section>

          {/* Checkbox Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Checkbox Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox1" />
                <label htmlFor="checkbox1" className="font-medium">Primary</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox2" />
                <label htmlFor="checkbox2" className="font-medium">Secondary</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox3" disabled />
                <label htmlFor="checkbox3" className="font-medium">Disabled</label>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>This is the overview tab content. It shows general information about the current theme and component system.</CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Analytics data would be displayed here. This demonstrates how tabs can organize different types of content.</CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Reports and detailed information would be shown in this tab. Each tab maintains its own state and content.</CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Accordion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Shadcn UI?</AccordionTrigger>
                <AccordionContent>
                  Shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS. It provides a set of accessible, customizable components that you can copy and paste into your apps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does theming work?</AccordionTrigger>
                <AccordionContent>
                  Theming is handled through CSS variables defined in the shadcn.css file. Each theme has its own set of color variables that control the appearance of all components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize components?</AccordionTrigger>
                <AccordionContent>
                  Yes! Since Shadcn UI components are just React components with Tailwind classes, you can easily modify them to match your design requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Rating Component */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Rating Component</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`p-1 transition ${
                      star <= rating ? 'text-yellow-500' : 'text-muted-foreground'
                    }`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {rating > 0 ? `${rating} out of 5 stars` : 'No rating selected'}
              </span>
            </div>
          </section>

          {/* Alert Components */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Alert Components</h2>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  This is an informational alert. It provides useful information to the user.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  This is an error alert. It indicates that something went wrong.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Modal */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Modal</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Modal Title</DialogTitle>
                  <DialogDescription>
                    This is a modal dialog. It demonstrates how complex components can be built using Shadcn UI theme variables.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          {/* Card Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Card Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a card using Shadcn UI theme variables. The background, border, and text all use CSS variables from shadcn.css.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Action</Button>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 p-6 bg-popover text-popover-foreground rounded-[var(--radius)] border border-border">
          <h3 className="text-lg font-semibold mb-2">Theme Information</h3>
          <p className="text-muted-foreground">
            Current theme: <span className="font-medium">{theme}</span>
          </p>
          <p className="text-muted-foreground mt-2">
            All colors are controlled by Shadcn UI theme variables. To change the entire app's appearance, 
            simply modify the variables in <code className="bg-background px-2 py-1 rounded">src/shadcn.css</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShadcnHome; 