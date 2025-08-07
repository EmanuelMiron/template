import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../Sheet';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

export const SheetExample = () => {
  const [formData, setFormData] = useState({
    name: 'Pedro Duarte',
    username: '@peduarte',
    email: 'pedro@example.com',
    bio: 'Software developer and UI enthusiast.',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Sheet Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Sheet variant="primary" size="md">
                  <SheetTrigger asChild>
                    <Button variant="primary">Open Primary Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="primary" size="md">
                    <SheetHeader variant="primary" size="md">
                      <SheetTitle variant="primary" size="md">Primary Sheet</SheetTitle>
                      <SheetDescription variant="primary" size="md">
                        This is a primary variant sheet with custom styling.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This sheet demonstrates the primary variant with theme-compatible colors.
                      </p>
                    </div>
                    <SheetFooter variant="primary" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Sheet variant="secondary" size="md">
                  <SheetTrigger asChild>
                    <Button variant="secondary">Open Secondary Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="secondary" size="md">
                    <SheetHeader variant="secondary" size="md">
                      <SheetTitle variant="secondary" size="md">Secondary Sheet</SheetTitle>
                      <SheetDescription variant="secondary" size="md">
                        This is a secondary variant sheet with different styling.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This sheet demonstrates the secondary variant with alternative colors.
                      </p>
                    </div>
                    <SheetFooter variant="secondary" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Sheet variant="outline" size="md">
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Outline Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="outline" size="md">
                    <SheetHeader variant="outline" size="md">
                      <SheetTitle variant="outline" size="md">Outline Sheet</SheetTitle>
                      <SheetDescription variant="outline" size="md">
                        This is an outline variant sheet with border styling.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This sheet demonstrates the outline variant with border emphasis.
                      </p>
                    </div>
                    <SheetFooter variant="outline" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Sheet variant="primary" size="sm">
                  <SheetTrigger asChild>
                    <Button variant="primary" size="sm">Small Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="primary" size="sm">
                    <SheetHeader variant="primary" size="sm">
                      <SheetTitle variant="primary" size="sm">Small Sheet</SheetTitle>
                      <SheetDescription variant="primary" size="sm">
                        Compact sheet with minimal padding.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-3">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This sheet uses small padding for a more compact layout.
                      </p>
                    </div>
                    <SheetFooter variant="primary" size="sm">
                      <SheetClose asChild>
                        <Button variant="outline" size="sm">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Sheet variant="secondary" size="lg">
                  <SheetTrigger asChild>
                    <Button variant="secondary" size="lg">Large Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="secondary" size="lg">
                    <SheetHeader variant="secondary" size="lg">
                      <SheetTitle variant="secondary" size="lg">Large Sheet</SheetTitle>
                      <SheetDescription variant="secondary" size="lg">
                        Spacious sheet with generous padding.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-6">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This sheet uses large padding for a more spacious layout.
                      </p>
                    </div>
                    <SheetFooter variant="secondary" size="lg">
                      <SheetClose asChild>
                        <Button variant="outline" size="lg">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Side Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Side Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Left Side</h5>
                <Sheet variant="primary" size="md">
                  <SheetTrigger asChild>
                    <Button variant="primary">Left Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="primary" size="md" side="left">
                    <SheetHeader variant="primary" size="md">
                      <SheetTitle variant="primary" size="md">Left Side Sheet</SheetTitle>
                      <SheetDescription variant="primary" size="md">
                        This sheet slides in from the left side.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        Useful for navigation menus or sidebar content.
                      </p>
                    </div>
                    <SheetFooter variant="primary" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Top Side</h5>
                <Sheet variant="secondary" size="md">
                  <SheetTrigger asChild>
                    <Button variant="secondary">Top Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="secondary" size="md" side="top">
                    <SheetHeader variant="secondary" size="md">
                      <SheetTitle variant="secondary" size="md">Top Side Sheet</SheetTitle>
                      <SheetDescription variant="secondary" size="md">
                        This sheet slides in from the top.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        Perfect for notifications or quick actions.
                      </p>
                    </div>
                    <SheetFooter variant="secondary" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Bottom Side</h5>
                <Sheet variant="outline" size="md">
                  <SheetTrigger asChild>
                    <Button variant="outline">Bottom Sheet</Button>
                  </SheetTrigger>
                  <SheetContent variant="outline" size="md" side="bottom">
                    <SheetHeader variant="outline" size="md">
                      <SheetTitle variant="outline" size="md">Bottom Side Sheet</SheetTitle>
                      <SheetDescription variant="outline" size="md">
                        This sheet slides in from the bottom.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        Great for mobile interfaces and action sheets.
                      </p>
                    </div>
                    <SheetFooter variant="outline" size="md">
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Form Example</h4>
            <Sheet variant="primary" size="md">
              <SheetTrigger asChild>
                <Button variant="primary">Edit Profile</Button>
              </SheetTrigger>
              <SheetContent variant="primary" size="md">
                <SheetHeader variant="primary" size="md">
                  <SheetTitle variant="primary" size="md">Edit profile</SheetTitle>
                  <SheetDescription variant="primary" size="md">
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name" variant="primary" size="md">Name</Label>
                    <Input
                      id="sheet-demo-name"
                      variant="primary"
                      inputSize="md"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username" variant="primary" size="md">Username</Label>
                    <Input
                      id="sheet-demo-username"
                      variant="primary"
                      inputSize="md"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-email" variant="primary" size="md">Email</Label>
                    <Input
                      id="sheet-demo-email"
                      type="email"
                      variant="primary"
                      inputSize="md"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-bio" variant="primary" size="md">Bio</Label>
                    <Input
                      id="sheet-demo-bio"
                      variant="primary"
                      inputSize="md"
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                    />
                  </div>
                </div>
                <SheetFooter variant="primary" size="md">
                  <Button type="submit" variant="primary">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Real-world Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Settings Panel</h5>
                <Sheet variant="secondary" size="md">
                  <SheetTrigger asChild>
                    <Button variant="secondary">Settings</Button>
                  </SheetTrigger>
                  <SheetContent variant="secondary" size="md">
                    <SheetHeader variant="secondary" size="md">
                      <SheetTitle variant="secondary" size="md">Settings</SheetTitle>
                      <SheetDescription variant="secondary" size="md">
                        Configure your application preferences.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4 space-y-4">
                      <div className="space-y-2">
                        <h6 className="text-sm font-medium text-[var(--color-foreground)]">Appearance</h6>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Theme: Dark</div>
                          <div>Font Size: Medium</div>
                          <div>Animations: Enabled</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="text-sm font-medium text-[var(--color-foreground)]">Notifications</h6>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Email: Enabled</div>
                          <div>Push: Disabled</div>
                          <div>Sound: Enabled</div>
                        </div>
                      </div>
                    </div>
                    <SheetFooter variant="secondary" size="md">
                      <Button variant="secondary">Save Settings</Button>
                      <SheetClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <div>
                <h5 className="font-medium mb-2">Shopping Cart</h5>
                <Sheet variant="outline" size="md">
                  <SheetTrigger asChild>
                    <Button variant="outline">Cart (3 items)</Button>
                  </SheetTrigger>
                  <SheetContent variant="outline" size="md">
                    <SheetHeader variant="outline" size="md">
                      <SheetTitle variant="outline" size="md">Shopping Cart</SheetTitle>
                      <SheetDescription variant="outline" size="md">
                        Review your items before checkout.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex-1 p-4 space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[var(--color-foreground)]">Product 1</span>
                          <span className="text-sm text-[var(--color-foreground-secondary)]">$29.99</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[var(--color-foreground)]">Product 2</span>
                          <span className="text-sm text-[var(--color-foreground-secondary)]">$19.99</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[var(--color-foreground)]">Product 3</span>
                          <span className="text-sm text-[var(--color-foreground-secondary)]">$39.99</span>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center font-medium">
                          <span className="text-[var(--color-foreground)]">Total</span>
                          <span className="text-[var(--color-foreground)]">$89.97</span>
                        </div>
                      </div>
                    </div>
                    <SheetFooter variant="outline" size="md">
                      <Button variant="primary">Checkout</Button>
                      <SheetClose asChild>
                        <Button variant="outline">Continue Shopping</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 