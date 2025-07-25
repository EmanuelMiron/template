import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../Popover';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Calendar } from '../ui/calendar';
import { CalendarIcon, Settings, Info, User, Mail, Phone } from 'lucide-react';

export const PopoverExample = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Popover Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Popover Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Popover Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Popover variant="primary" size="md">
                  <PopoverTrigger variant="primary" size="md" asChild>
                    <Button variant="outline">Open Primary Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="primary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Primary Popover</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          This is a primary variant popover with custom styling.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="primary-width">Width</Label>
                          <Input
                            id="primary-width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="primary-height">Height</Label>
                          <Input
                            id="primary-height"
                            defaultValue="25px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Popover variant="secondary" size="md">
                  <PopoverTrigger variant="secondary" size="md" asChild>
                    <Button variant="outline">Open Secondary Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="secondary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Secondary Popover</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          This is a secondary variant popover with different styling.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="secondary-width">Width</Label>
                          <Input
                            id="secondary-width"
                            defaultValue="200px"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="secondary-height">Height</Label>
                          <Input
                            id="secondary-height"
                            defaultValue="50px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Popover variant="outline" size="md">
                  <PopoverTrigger variant="outline" size="md" asChild>
                    <Button variant="outline">Open Outline Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="outline" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Outline Popover</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          This is an outline variant popover with subtle borders.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="outline-width">Width</Label>
                          <Input
                            id="outline-width"
                            defaultValue="300px"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="outline-height">Height</Label>
                          <Input
                            id="outline-height"
                            defaultValue="75px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Popover variant="primary" size="sm">
                  <PopoverTrigger variant="primary" size="sm" asChild>
                    <Button variant="outline" size="sm">Small Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="primary" size="sm" className="w-64">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Small Popover</h4>
                      <p className="text-xs text-[var(--color-foreground-secondary)]">
                        This is a small popover with compact spacing.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Popover variant="secondary" size="md">
                  <PopoverTrigger variant="secondary" size="md" asChild>
                    <Button variant="outline">Medium Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="secondary" size="md" className="w-72">
                    <div className="space-y-2">
                      <h4 className="font-medium">Medium Popover</h4>
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This is a medium popover with standard spacing.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Popover variant="outline" size="lg">
                  <PopoverTrigger variant="outline" size="lg" asChild>
                    <Button variant="outline" size="lg">Large Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="outline" size="lg" className="w-80">
                    <div className="space-y-3">
                      <h4 className="font-medium text-lg">Large Popover</h4>
                      <p className="text-base text-[var(--color-foreground-secondary)]">
                        This is a large popover with generous spacing and larger text.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Calendar Popover</h5>
                <Popover variant="primary" size="md">
                  <PopoverTrigger variant="primary" size="md" asChild>
                    <Button
                      variant="outline"
                      className="justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? date.toDateString() : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent variant="primary" size="md" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Settings Popover</h5>
                <Popover variant="secondary" size="md">
                  <PopoverTrigger variant="secondary" size="md" asChild>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent variant="secondary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Settings</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          Configure your application settings.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="notifications">Notifications</Label>
                          <Input
                            id="notifications"
                            defaultValue="enabled"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="theme">Theme</Label>
                          <Input
                            id="theme"
                            defaultValue="dark"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="language">Language</Label>
                          <Input
                            id="language"
                            defaultValue="English"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Info Popover</h5>
                <Popover variant="outline" size="md">
                  <PopoverTrigger variant="outline" size="md" asChild>
                    <Button variant="outline" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent variant="outline" size="md" className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Information</h4>
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This is an informational popover that provides helpful context
                        about the current feature or action.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">User Profile Popover</h5>
                <Popover variant="primary" size="md">
                  <PopoverTrigger variant="primary" size="md" asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      View Profile
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent variant="primary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">User Profile</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          John Doe - Software Developer
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">john.doe@example.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Button variant="outline" size="sm">
                          Edit Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          View Full Profile
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Form Popover</h5>
                <Popover variant="secondary" size="md">
                  <PopoverTrigger variant="secondary" size="md" asChild>
                    <Button variant="outline">Quick Add</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="secondary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Quick Add Item</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          Add a new item to your collection.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="Item name"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="category">Category</Label>
                          <Input
                            id="category"
                            placeholder="Category"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="description">Description</Label>
                          <Input
                            id="description"
                            placeholder="Description"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Add Item</Button>
                        <Button variant="outline" size="sm">Cancel</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h5 className="font-medium mb-2">Custom Positioning</h5>
                <Popover variant="outline" size="md">
                  <PopoverTrigger variant="outline" size="md" asChild>
                    <Button variant="outline">Top Right Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent 
                    variant="outline" 
                    size="md" 
                    className="w-80"
                    side="top"
                    align="end"
                    sideOffset={8}
                  >
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Top Right Positioned</h4>
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        This popover is positioned at the top-right of the trigger button.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Usage Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Basic Usage</h5>
              <div className="bg-background p-4 rounded border">
                <Popover variant="primary" size="md">
                  <PopoverTrigger variant="primary" size="md" asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="primary" size="md" className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-[var(--color-foreground-secondary)]">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="height">Height</Label>
                          <Input
                            id="height"
                            defaultValue="25px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">With Icons</h5>
              <div className="bg-background p-4 rounded border">
                <Popover variant="secondary" size="md">
                  <PopoverTrigger variant="secondary" size="md" asChild>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent variant="secondary" size="md" className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Settings</h4>
                      <p className="text-sm text-[var(--color-foreground-secondary)]">
                        Configure your application settings here.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 