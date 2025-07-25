import React from 'react';
import { AppWindowIcon, CodeIcon, SettingsIcon, UserIcon, MailIcon, LockIcon, BellIcon, ShieldIcon } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import Button from '../Button';
import Input from '../Input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

export const TabsExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Tabs Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Tabs defaultValue="account" variant="primary" size="md">
                  <TabsList variant="primary" size="md">
                    <TabsTrigger variant="primary" size="md" value="account">Account</TabsTrigger>
                    <TabsTrigger variant="primary" size="md" value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" variant="primary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here. Click save when you're done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password" variant="primary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Tabs defaultValue="overview" variant="secondary" size="md">
                  <TabsList variant="secondary" size="md">
                    <TabsTrigger variant="secondary" size="md" value="overview">Overview</TabsTrigger>
                    <TabsTrigger variant="secondary" size="md" value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger variant="secondary" size="md" value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>View your dashboard overview.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the overview content.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="analytics" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Analytics</CardTitle>
                        <CardDescription>View your analytics data.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the analytics content.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="reports" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Reports</CardTitle>
                        <CardDescription>View your reports.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the reports content.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Tabs defaultValue="settings" variant="outline" size="md">
                  <TabsList variant="outline" size="md">
                    <TabsTrigger variant="outline" size="md" value="settings">Settings</TabsTrigger>
                    <TabsTrigger variant="outline" size="md" value="preferences">Preferences</TabsTrigger>
                  </TabsList>
                  <TabsContent value="settings" variant="outline" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>Manage your application settings.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the settings content.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="preferences" variant="outline" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Customize your preferences.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>This is the preferences content.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Tabs defaultValue="tab1" variant="primary" size="sm">
                  <TabsList variant="primary" size="sm">
                    <TabsTrigger variant="primary" size="sm" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger variant="primary" size="sm" value="tab2">Tab 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" variant="primary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Small tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tab2" variant="primary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Small tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Tabs defaultValue="tab1" variant="secondary" size="md">
                  <TabsList variant="secondary" size="md">
                    <TabsTrigger variant="secondary" size="md" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger variant="secondary" size="md" value="tab2">Tab 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" variant="secondary" size="md">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Medium tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tab2" variant="secondary" size="md">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Medium tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Tabs defaultValue="tab1" variant="outline" size="lg">
                  <TabsList variant="outline" size="lg">
                    <TabsTrigger variant="outline" size="lg" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger variant="outline" size="lg" value="tab2">Tab 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" variant="outline" size="lg">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Large tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tab2" variant="outline" size="lg">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Large tabs content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Icon Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Icon Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Tabs with Icons</h5>
                <Tabs defaultValue="account" variant="primary" size="md">
                  <TabsList variant="primary" size="md">
                    <TabsTrigger variant="primary" size="md" value="account">
                      <UserIcon className="w-4 h-4 mr-2" />
                      Account
                    </TabsTrigger>
                    <TabsTrigger variant="primary" size="md" value="settings">
                      <SettingsIcon className="w-4 h-4 mr-2" />
                      Settings
                    </TabsTrigger>
                    <TabsTrigger variant="primary" size="md" value="notifications">
                      <BellIcon className="w-4 h-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" variant="primary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>Manage your account information.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Account settings content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="settings" variant="primary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription>Configure your application settings.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Settings content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="notifications" variant="primary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>Manage your notification settings.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Notification settings content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-2">Development Tabs</h5>
                <Tabs defaultValue="code" variant="secondary" size="md">
                  <TabsList variant="secondary" size="md">
                    <TabsTrigger variant="secondary" size="md" value="code">
                      <CodeIcon className="w-4 h-4 mr-2" />
                      Code
                    </TabsTrigger>
                    <TabsTrigger variant="secondary" size="md" value="preview">
                      <AppWindowIcon className="w-4 h-4 mr-2" />
                      Preview
                    </TabsTrigger>
                    <TabsTrigger variant="secondary" size="md" value="security">
                      <ShieldIcon className="w-4 h-4 mr-2" />
                      Security
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="code" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Code Editor</CardTitle>
                        <CardDescription>Write and edit your code here.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Code editor content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="preview" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Live Preview</CardTitle>
                        <CardDescription>See your changes in real-time.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Preview content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="security" variant="secondary" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>Configure security options.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Security settings content goes here.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Email Configuration</h5>
                <Tabs defaultValue="general" variant="outline" size="md">
                  <TabsList variant="outline" size="md">
                    <TabsTrigger variant="outline" size="md" value="general">
                      <MailIcon className="w-4 h-4 mr-2" />
                      General
                    </TabsTrigger>
                    <TabsTrigger variant="outline" size="md" value="security">
                      <LockIcon className="w-4 h-4 mr-2" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger variant="outline" size="md" value="advanced">
                      <SettingsIcon className="w-4 h-4 mr-2" />
                      Advanced
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="general" variant="outline" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>General Email Settings</CardTitle>
                        <CardDescription>Configure basic email preferences.</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="name">Display Name</Label>
                          <Input id="name" placeholder="Enter your display name" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="security" variant="outline" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>Manage your email security preferences.</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Update Password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="advanced" variant="outline" size="md">
                    <Card>
                      <CardHeader>
                        <CardTitle>Advanced Settings</CardTitle>
                        <CardDescription>Configure advanced email options.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Advanced settings content goes here.</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Settings</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Multiple Tab Sets */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Multiple Tab Sets</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-3">User Management</h5>
                <Tabs defaultValue="users" variant="primary" size="sm">
                  <TabsList variant="primary" size="sm">
                    <TabsTrigger variant="primary" size="sm" value="users">Users</TabsTrigger>
                    <TabsTrigger variant="primary" size="sm" value="roles">Roles</TabsTrigger>
                    <TabsTrigger variant="primary" size="sm" value="permissions">Permissions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="users" variant="primary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>User management content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="roles" variant="primary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Role management content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="permissions" variant="primary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Permission management content</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h5 className="font-medium mb-3">System Configuration</h5>
                <Tabs defaultValue="general" variant="secondary" size="sm">
                  <TabsList variant="secondary" size="sm">
                    <TabsTrigger variant="secondary" size="sm" value="general">General</TabsTrigger>
                    <TabsTrigger variant="secondary" size="sm" value="network">Network</TabsTrigger>
                    <TabsTrigger variant="secondary" size="sm" value="storage">Storage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general" variant="secondary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>General system settings</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="network" variant="secondary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Network configuration</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="storage" variant="secondary" size="sm">
                    <Card>
                      <CardContent className="pt-6">
                        <p>Storage management</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 