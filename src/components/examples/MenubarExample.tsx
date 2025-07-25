import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../Menubar';

export const MenubarExample = () => {
  const [selectedProfile, setSelectedProfile] = useState('benoit');

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Menubar Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Menubar Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Menubar Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Menubar variant="primary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">File</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarItem variant="primary" size="md">
                        New Tab <MenubarShortcut variant="primary" size="md">⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md">
                        New Window <MenubarShortcut variant="primary" size="md">⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md" disabled>New Incognito Window</MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md">
                        Print... <MenubarShortcut variant="primary" size="md">⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">Edit</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarItem variant="primary" size="md">
                        Undo <MenubarShortcut variant="primary" size="md">⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md">
                        Redo <MenubarShortcut variant="primary" size="md">⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md">Cut</MenubarItem>
                      <MenubarItem variant="primary" size="md">Copy</MenubarItem>
                      <MenubarItem variant="primary" size="md">Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Menubar variant="secondary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">View</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarCheckboxItem variant="secondary" size="md">Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="secondary" size="md" checked>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator variant="secondary" />
                      <MenubarItem variant="secondary" size="md" inset>
                        Reload <MenubarShortcut variant="secondary" size="md">⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="secondary" size="md" disabled inset>
                        Force Reload <MenubarShortcut variant="secondary" size="md">⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">Tools</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarItem variant="secondary" size="md">Developer Tools</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Extensions</MenubarItem>
                      <MenubarSeparator variant="secondary" />
                      <MenubarItem variant="secondary" size="md">Settings</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Menubar variant="outline" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="outline" size="md">Help</MenubarTrigger>
                    <MenubarContent variant="outline" size="md">
                      <MenubarItem variant="outline" size="md">Documentation</MenubarItem>
                      <MenubarItem variant="outline" size="md">Support</MenubarItem>
                      <MenubarSeparator variant="outline" />
                      <MenubarItem variant="outline" size="md">About</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="outline" size="md">Account</MenubarTrigger>
                    <MenubarContent variant="outline" size="md">
                      <MenubarItem variant="outline" size="md">Profile</MenubarItem>
                      <MenubarItem variant="outline" size="md">Settings</MenubarItem>
                      <MenubarSeparator variant="outline" />
                      <MenubarItem variant="outline" size="md" variant="destructive">Sign Out</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Menubar variant="primary" size="sm">
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="sm">File</MenubarTrigger>
                    <MenubarContent variant="primary" size="sm">
                      <MenubarItem variant="primary" size="sm">New</MenubarItem>
                      <MenubarItem variant="primary" size="sm">Open</MenubarItem>
                      <MenubarItem variant="primary" size="sm">Save</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="sm">Edit</MenubarTrigger>
                    <MenubarContent variant="primary" size="sm">
                      <MenubarItem variant="primary" size="sm">Cut</MenubarItem>
                      <MenubarItem variant="primary" size="sm">Copy</MenubarItem>
                      <MenubarItem variant="primary" size="sm">Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Menubar variant="secondary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">View</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarItem variant="secondary" size="md">Zoom In</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Zoom Out</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Reset Zoom</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">Window</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarItem variant="secondary" size="md">Minimize</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Maximize</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Close</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Menubar variant="outline" size="lg">
                  <MenubarMenu>
                    <MenubarTrigger variant="outline" size="lg">Tools</MenubarTrigger>
                    <MenubarContent variant="outline" size="lg">
                      <MenubarItem variant="outline" size="lg">Developer Tools</MenubarItem>
                      <MenubarItem variant="outline" size="lg">Extensions</MenubarItem>
                      <MenubarItem variant="outline" size="lg">Settings</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="outline" size="lg">Help</MenubarTrigger>
                    <MenubarContent variant="outline" size="lg">
                      <MenubarItem variant="outline" size="lg">Documentation</MenubarItem>
                      <MenubarItem variant="outline" size="lg">Support</MenubarItem>
                      <MenubarItem variant="outline" size="lg">About</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Features</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Submenus</h5>
                <Menubar variant="primary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">File</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarItem variant="primary" size="md">
                        New Tab <MenubarShortcut variant="primary" size="md">⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md">
                        New Window <MenubarShortcut variant="primary" size="md">⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarSub>
                        <MenubarSubTrigger variant="primary" size="md">Share</MenubarSubTrigger>
                        <MenubarSubContent variant="primary" size="md">
                          <MenubarItem variant="primary" size="md">Email link</MenubarItem>
                          <MenubarItem variant="primary" size="md">Messages</MenubarItem>
                          <MenubarItem variant="primary" size="md">Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md">
                        Print... <MenubarShortcut variant="primary" size="md">⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Checkbox Items</h5>
                <Menubar variant="secondary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">View</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarCheckboxItem variant="secondary" size="md">Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="secondary" size="md" checked>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="secondary" size="md">Show Developer Tools</MenubarCheckboxItem>
                      <MenubarSeparator variant="secondary" />
                      <MenubarItem variant="secondary" size="md" inset>
                        Reload <MenubarShortcut variant="secondary" size="md">⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="secondary" size="md" disabled inset>
                        Force Reload <MenubarShortcut variant="secondary" size="md">⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              <div>
                <h5 className="font-medium mb-2">Radio Groups</h5>
                <Menubar variant="outline" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="outline" size="md">Profiles</MenubarTrigger>
                    <MenubarContent variant="outline" size="md">
                      <MenubarRadioGroup 
                        variant="outline" 
                        size="md" 
                        value={selectedProfile} 
                        onValueChange={setSelectedProfile}
                      >
                        <MenubarRadioItem variant="outline" size="md" value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem variant="outline" size="md" value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem variant="outline" size="md" value="luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator variant="outline" />
                      <MenubarItem variant="outline" size="md" inset>Edit...</MenubarItem>
                      <MenubarSeparator variant="outline" />
                      <MenubarItem variant="outline" size="md" inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>

          {/* Complex Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Complex Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Full Browser Menu</h5>
                <Menubar variant="primary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">File</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarItem variant="primary" size="md">
                        New Tab <MenubarShortcut variant="primary" size="md">⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md">
                        New Window <MenubarShortcut variant="primary" size="md">⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md" disabled>New Incognito Window</MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarSub>
                        <MenubarSubTrigger variant="primary" size="md">Share</MenubarSubTrigger>
                        <MenubarSubContent variant="primary" size="md">
                          <MenubarItem variant="primary" size="md">Email link</MenubarItem>
                          <MenubarItem variant="primary" size="md">Messages</MenubarItem>
                          <MenubarItem variant="primary" size="md">Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md">
                        Print... <MenubarShortcut variant="primary" size="md">⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">Edit</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarItem variant="primary" size="md">
                        Undo <MenubarShortcut variant="primary" size="md">⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md">
                        Redo <MenubarShortcut variant="primary" size="md">⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarSub>
                        <MenubarSubTrigger variant="primary" size="md">Find</MenubarSubTrigger>
                        <MenubarSubContent variant="primary" size="md">
                          <MenubarItem variant="primary" size="md">Search the web</MenubarItem>
                          <MenubarSeparator variant="primary" />
                          <MenubarItem variant="primary" size="md">Find...</MenubarItem>
                          <MenubarItem variant="primary" size="md">Find Next</MenubarItem>
                          <MenubarItem variant="primary" size="md">Find Previous</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md">Cut</MenubarItem>
                      <MenubarItem variant="primary" size="md">Copy</MenubarItem>
                      <MenubarItem variant="primary" size="md">Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">View</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarCheckboxItem variant="primary" size="md">Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="primary" size="md" checked>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md" inset>
                        Reload <MenubarShortcut variant="primary" size="md">⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem variant="primary" size="md" disabled inset>
                        Force Reload <MenubarShortcut variant="primary" size="md">⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md" inset>Toggle Fullscreen</MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md" inset>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="primary" size="md">Profiles</MenubarTrigger>
                    <MenubarContent variant="primary" size="md">
                      <MenubarRadioGroup 
                        variant="primary" 
                        size="md" 
                        value={selectedProfile} 
                        onValueChange={setSelectedProfile}
                      >
                        <MenubarRadioItem variant="primary" size="md" value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem variant="primary" size="md" value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem variant="primary" size="md" value="luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md" inset>Edit...</MenubarItem>
                      <MenubarSeparator variant="primary" />
                      <MenubarItem variant="primary" size="md" inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Theme Switcher Menu</h5>
                <Menubar variant="secondary" size="md">
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">Theme</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarItem variant="secondary" size="md">Light Mode</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Dark Mode</MenubarItem>
                      <MenubarItem variant="secondary" size="md">System Default</MenubarItem>
                      <MenubarSeparator variant="secondary" />
                      <MenubarSub>
                        <MenubarSubTrigger variant="secondary" size="md">Custom Themes</MenubarSubTrigger>
                        <MenubarSubContent variant="secondary" size="md">
                          <MenubarItem variant="secondary" size="md">Brutalist</MenubarItem>
                          <MenubarItem variant="secondary" size="md">Pastel</MenubarItem>
                          <MenubarItem variant="secondary" size="md">Retro</MenubarItem>
                          <MenubarItem variant="secondary" size="md">Terminal</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger variant="secondary" size="md">Settings</MenubarTrigger>
                    <MenubarContent variant="secondary" size="md">
                      <MenubarCheckboxItem variant="secondary" size="md" checked>Auto-save</MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="secondary" size="md">Notifications</MenubarCheckboxItem>
                      <MenubarCheckboxItem variant="secondary" size="md">Sound effects</MenubarCheckboxItem>
                      <MenubarSeparator variant="secondary" />
                      <MenubarItem variant="secondary" size="md">Preferences...</MenubarItem>
                      <MenubarItem variant="secondary" size="md">Advanced Settings...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-[var(--color-foreground-secondary)] mb-4">
                Try clicking on the menu items to see the menubar in action
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Menubar variant="primary" size="md">
                <MenubarMenu>
                  <MenubarTrigger variant="primary" size="md">Demo</MenubarTrigger>
                  <MenubarContent variant="primary" size="md">
                    <MenubarItem variant="primary" size="md">Interactive Item 1</MenubarItem>
                    <MenubarItem variant="primary" size="md">Interactive Item 2</MenubarItem>
                    <MenubarSeparator variant="primary" />
                    <MenubarItem variant="primary" size="md" variant="destructive">Destructive Action</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 