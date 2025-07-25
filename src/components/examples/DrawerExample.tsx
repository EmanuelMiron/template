import React from 'react';
import { Minus, Plus, Settings, User, FileText, Menu, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '../Drawer';
import Button from '../Button';
import Input from '../Input';

export const DrawerExample = () => {
  const [goal, setGoal] = React.useState(350);
  const [formData, setFormData] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software developer passionate about creating amazing user experiences.',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Drawer Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Drawer Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Drawer Examples</h4>
            <div className="space-y-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="primary" size="md">
                    <Menu className="w-4 h-4 mr-2" />
                    Primary Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="primary" size="md">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Primary Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is a primary variant drawer with default styling.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        This drawer demonstrates the primary variant with a clean, modern design.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                      <Button variant="primary">Confirm</Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary" size="md">
                    <Settings className="w-4 h-4 mr-2" />
                    Secondary Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="secondary" size="md">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Secondary Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is a secondary variant drawer with different styling.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        The secondary variant provides an alternative visual style.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                      <Button variant="secondary">Save</Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="md">
                    <FileText className="w-4 h-4 mr-2" />
                    Outline Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="outline" size="md">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Outline Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is an outline variant drawer with subtle borders.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        The outline variant has a more subtle appearance.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                      <Button variant="primary">Proceed</Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Direction Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Direction Examples</h4>
            <div className="space-y-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="primary" size="sm">
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Top Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="primary" size="sm" direction="top">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Top Drawer</DrawerTitle>
                      <DrawerDescription>
                        This drawer slides in from the top.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        Perfect for notifications or quick actions.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" size="sm">OK</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Left Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="secondary" size="md" direction="left">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Left Drawer</DrawerTitle>
                      <DrawerDescription>
                        This drawer slides in from the left.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        Great for navigation menus or sidebars.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Right Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="outline" size="md" direction="right">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Right Drawer</DrawerTitle>
                      <DrawerDescription>
                        This drawer slides in from the right.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        Ideal for settings panels or detail views.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="primary" size="sm">
                    Small Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="primary" size="sm">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Small Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is a small-sized drawer.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-sm text-muted-foreground">
                        Perfect for simple confirmations or brief messages.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" size="sm">OK</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary" size="md">
                    Large Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="secondary" size="lg">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Large Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is a large-sized drawer for more content.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-6 pb-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Large drawers are perfect for forms or detailed content.
                      </p>
                      <div className="space-y-3">
                        <Input label="Name" placeholder="Enter your name" />
                        <Input label="Email" type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                      <Button variant="primary">Submit</Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="lg">
                    Extra Large Drawer
                  </Button>
                </DrawerTrigger>
                <DrawerContent variant="outline" size="xl">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Extra Large Drawer</DrawerTitle>
                      <DrawerDescription>
                        This is an extra large drawer for complex content.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-6 pb-0">
                      <p className="text-sm text-muted-foreground mb-4">
                        Extra large drawers can accommodate complex forms, tables, or detailed information.
                      </p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input label="First Name" placeholder="John" />
                          <Input label="Last Name" placeholder="Doe" />
                        </div>
                        <Input label="Email" type="email" placeholder="john.doe@example.com" />
                        <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
                        <div className="grid grid-cols-2 gap-4">
                          <Input label="City" placeholder="New York" />
                          <Input label="Country" placeholder="United States" />
                        </div>
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                      <Button variant="primary">Save Changes</Button>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Form Drawer */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Form Drawer</h4>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="primary" size="md">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </DrawerTrigger>
              <DrawerContent variant="primary" size="lg">
                <div className="mx-auto w-full max-w-sm">
                  <form onSubmit={handleFormSubmit}>
                    <DrawerHeader>
                      <DrawerTitle>Edit Profile</DrawerTitle>
                      <DrawerDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-4 p-4 pb-0">
                      <div className="grid gap-3">
                        <Input
                          label="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Input
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Input
                          label="Bio"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        />
                      </div>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" type="button">Cancel</Button>
                      </DrawerClose>
                      <Button variant="primary" type="submit">Save changes</Button>
                    </DrawerFooter>
                  </form>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Interactive Goal Drawer */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Goal Drawer</h4>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="secondary" size="md">
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Set Goal
                </Button>
              </DrawerTrigger>
              <DrawerContent variant="secondary" size="md">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {goal}
                        </div>
                        <div className="text-muted-foreground text-[0.70rem] uppercase">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </div>
                    <div className="mt-3 h-[120px] bg-muted/50 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Chart visualization would go here
                      </p>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
          <div className="flex flex-wrap gap-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="primary" size="md">
                  Try Different Variants
                </Button>
              </DrawerTrigger>
              <DrawerContent variant="primary" size="lg">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Drawer Variants Demo</DrawerTitle>
                    <DrawerDescription>
                      This drawer shows how different variants look and feel.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-background">
                        <h5 className="font-medium mb-2">Primary Variant</h5>
                        <p className="text-sm text-muted-foreground">
                          Clean, modern design with primary color accents.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg bg-secondary/20">
                        <h5 className="font-medium mb-2">Secondary Variant</h5>
                        <p className="text-sm text-muted-foreground">
                          Alternative styling with secondary color scheme.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg bg-outline/20">
                        <h5 className="font-medium mb-2">Outline Variant</h5>
                        <p className="text-sm text-muted-foreground">
                          Subtle design with outline borders and minimal styling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                    <Button variant="primary">Learn More</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 