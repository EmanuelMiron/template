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
import CustomSelect from '@/components/Select';

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
  const [customSelectValue, setCustomSelectValue] = useState('');
  const [customSelectValue2, setCustomSelectValue2] = useState('');
  const [customSelectValue3, setCustomSelectValue3] = useState('');

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Shadcn UI Component Demo</h1>
          <Button variant="outline" onClick={toggleTheme}>
            {themeIcons[theme] || '🎨'} {themeLabels[theme] || theme} Mode
          </Button>
        </div>

        {/* Custom Select Examples */}
        <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Select Component Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomSelect 
                  label="Primary Variant"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue}
                  onValueChange={setCustomSelectValue}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Secondary Variant"
                  placeholder="Select an option"
                  variant="secondary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue2}
                  onValueChange={setCustomSelectValue2}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Outline Variant"
                  placeholder="Select an option"
                  variant="outline"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue3}
                  onValueChange={setCustomSelectValue3}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Disabled Select"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  disabled
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Helper Text"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  helperText="This is some helpful information about this field."
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Error"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  error="This field is required and cannot be empty."
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Small Size"
                  placeholder="Select an option"
                  variant="outline"
                  selectSize="sm"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Large Size"
                  placeholder="Select an option"
                  variant="secondary"
                  selectSize="lg"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Searchable Select"
                  placeholder="Search and select..."
                  variant="primary"
                  selectSize="md"
                  searchable
                  options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'cherry', label: 'Cherry' },
                    { value: 'date', label: 'Date' },
                    { value: 'elderberry', label: 'Elderberry' },
                    { value: 'fig', label: 'Fig' },
                    { value: 'grape', label: 'Grape' },
                    { value: 'honeydew', label: 'Honeydew' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Option Groups"
                  placeholder="Select a category"
                  variant="outline"
                  selectSize="md"
                  optionGroups={[
                    {
                      label: 'Fruits',
                      options: [
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'cherry', label: 'Cherry' },
                      ]
                    },
                    {
                      label: 'Vegetables',
                      options: [
                        { value: 'carrot', label: 'Carrot' },
                        { value: 'broccoli', label: 'Broccoli' },
                        { value: 'spinach', label: 'Spinach' },
                      ]
                    },
                    {
                      label: 'Grains',
                      options: [
                        { value: 'rice', label: 'Rice' },
                        { value: 'wheat', label: 'Wheat' },
                        { value: 'oats', label: 'Oats' },
                      ]
                    }
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Searchable with Groups"
                  placeholder="Search categories..."
                  variant="secondary"
                  selectSize="md"
                  searchable
                  optionGroups={[
                    {
                      label: 'Programming Languages',
                      options: [
                        { value: 'javascript', label: 'JavaScript' },
                        { value: 'typescript', label: 'TypeScript' },
                        { value: 'python', label: 'Python' },
                        { value: 'java', label: 'Java' },
                      ]
                    },
                    {
                      label: 'Frameworks',
                      options: [
                        { value: 'react', label: 'React' },
                        { value: 'vue', label: 'Vue' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                      ]
                    }
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Disabled Options"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
                    { value: 'option5', label: 'Option 5' },
                  ]}
                />
              </div>
            </div>
          </section>

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
            <h2 className="text-2xl font-semibold mb-4">Shadcn Select Examples</h2>
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