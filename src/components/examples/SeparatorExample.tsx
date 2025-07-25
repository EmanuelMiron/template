import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import Separator from '../Separator';

export const SeparatorExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Separator Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Horizontal Separator</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="space-y-1">
                    <h4 className="text-sm leading-none font-medium text-[var(--color-foreground)]">Radix Primitives</h4>
                    <p className="text-[var(--color-foreground-secondary)] text-sm">
                      An open-source UI component library.
                    </p>
                  </div>
                  <Separator variant="primary" size="md" className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div className="text-[var(--color-foreground)]">Blog</div>
                    <Separator variant="primary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Docs</div>
                    <Separator variant="primary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Source</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Vertical Separator</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="flex h-20 items-center space-x-4 text-sm">
                    <div className="text-[var(--color-foreground)]">Left Content</div>
                    <Separator variant="secondary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Center Content</div>
                    <Separator variant="secondary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Right Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Variant Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Variant Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Section 1</div>
                  <Separator variant="primary" size="md" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Section 2</div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <div className="p-4 bg-[var(--color-background)] rounded-lg border">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Section 1</div>
                  <Separator variant="secondary" size="md" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Section 2</div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Section 1</div>
                  <Separator variant="outline" size="md" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Section 2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Thin Separator</div>
                  <Separator variant="primary" size="sm" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Content below</div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Medium Separator</div>
                  <Separator variant="secondary" size="md" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Content below</div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="text-sm text-[var(--color-foreground)] mb-2">Thick Separator</div>
                  <Separator variant="outline" size="lg" className="mb-4" />
                  <div className="text-sm text-[var(--color-foreground)]">Content below</div>
                </div>
              </div>
            </div>
          </div>

          {/* Orientation Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Orientation Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Horizontal Separators</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="space-y-4">
                    <div className="text-sm text-[var(--color-foreground)]">Top Content</div>
                    <Separator variant="primary" size="md" orientation="horizontal" />
                    <div className="text-sm text-[var(--color-foreground)]">Middle Content</div>
                    <Separator variant="secondary" size="md" orientation="horizontal" />
                    <div className="text-sm text-[var(--color-foreground)]">Bottom Content</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Vertical Separators</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="flex h-16 items-center space-x-4 text-sm">
                    <div className="text-[var(--color-foreground)]">Item 1</div>
                    <Separator variant="primary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Item 2</div>
                    <Separator variant="secondary" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Item 3</div>
                    <Separator variant="outline" size="md" orientation="vertical" />
                    <div className="text-[var(--color-foreground)]">Item 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mixed Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Mixed Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Navigation Menu</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="space-y-2">
                    <div className="text-sm text-[var(--color-foreground)] font-medium">Main Menu</div>
                    <Separator variant="primary" size="sm" />
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-[var(--color-foreground)]">Home</div>
                      <Separator variant="outline" size="sm" orientation="vertical" />
                      <div className="text-[var(--color-foreground)]">About</div>
                      <Separator variant="outline" size="sm" orientation="vertical" />
                      <div className="text-[var(--color-foreground)]">Contact</div>
                    </div>
                    <Separator variant="secondary" size="sm" />
                    <div className="text-sm text-[var(--color-foreground-secondary)]">Secondary Menu</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Form Sections</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h6 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Personal Information</h6>
                      <div className="text-xs text-[var(--color-foreground-secondary)]">Name, email, phone</div>
                    </div>
                    <Separator variant="primary" size="md" />
                    <div>
                      <h6 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Address</h6>
                      <div className="text-xs text-[var(--color-foreground-secondary)]">Street, city, country</div>
                    </div>
                    <Separator variant="secondary" size="md" />
                    <div>
                      <h6 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Preferences</h6>
                      <div className="text-xs text-[var(--color-foreground-secondary)]">Theme, notifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">User Profile Card</h5>
                <div className="p-6 bg-[var(--color-background)] rounded-lg border">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-medium">
                      JD
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[var(--color-foreground)]">John Doe</h4>
                      <p className="text-xs text-[var(--color-foreground-secondary)]">Software Developer</p>
                    </div>
                  </div>
                  <Separator variant="outline" size="sm" className="mb-4" />
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-foreground-secondary)]">Email:</span>
                      <span className="text-[var(--color-foreground)]">john@example.com</span>
                    </div>
                    <Separator variant="outline" size="sm" />
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-foreground-secondary)]">Location:</span>
                      <span className="text-[var(--color-foreground)]">San Francisco, CA</span>
                    </div>
                    <Separator variant="outline" size="sm" />
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-foreground-secondary)]">Joined:</span>
                      <span className="text-[var(--color-foreground)]">March 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Settings Panel</h5>
                <div className="p-6 bg-[var(--color-background)] rounded-lg border">
                  <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-4">Account Settings</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--color-foreground)]">Profile</span>
                      <span className="text-xs text-[var(--color-foreground-secondary)]">Edit</span>
                    </div>
                    <Separator variant="primary" size="sm" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--color-foreground)]">Security</span>
                      <span className="text-xs text-[var(--color-foreground-secondary)]">Manage</span>
                    </div>
                    <Separator variant="secondary" size="sm" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--color-foreground)]">Notifications</span>
                      <span className="text-xs text-[var(--color-foreground-secondary)]">Configure</span>
                    </div>
                    <Separator variant="outline" size="sm" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--color-foreground)]">Privacy</span>
                      <span className="text-xs text-[var(--color-foreground-secondary)]">Settings</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Breadcrumb Navigation</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-[var(--color-foreground)]">Home</span>
                    <Separator variant="outline" size="sm" orientation="vertical" />
                    <span className="text-[var(--color-foreground)]">Products</span>
                    <Separator variant="outline" size="sm" orientation="vertical" />
                    <span className="text-[var(--color-foreground)]">Electronics</span>
                    <Separator variant="outline" size="sm" orientation="vertical" />
                    <span className="text-[var(--color-foreground-secondary)]">Smartphones</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Data Table</h5>
                <div className="p-4 bg-[var(--color-background-secondary)] rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-foreground)] font-medium">Header</span>
                      <span className="text-[var(--color-foreground)] font-medium">Actions</span>
                    </div>
                    <Separator variant="primary" size="md" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-foreground)]">Row 1</span>
                      <span className="text-[var(--color-foreground-secondary)]">Edit | Delete</span>
                    </div>
                    <Separator variant="outline" size="sm" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-foreground)]">Row 2</span>
                      <span className="text-[var(--color-foreground-secondary)]">Edit | Delete</span>
                    </div>
                    <Separator variant="outline" size="sm" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-foreground)]">Row 3</span>
                      <span className="text-[var(--color-foreground-secondary)]">Edit | Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 