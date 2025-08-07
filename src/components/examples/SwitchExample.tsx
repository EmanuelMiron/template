import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Switch } from '../Switch';
import { Button } from '../Button';

export const SwitchExample = () => {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Switch Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Switch
                  label="Primary Switch"
                  variant="primary"
                  size="md"
                  helperText="This is a primary variant switch."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Switch
                  label="Secondary Switch"
                  variant="secondary"
                  size="md"
                  helperText="This is a secondary variant switch."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Switch
                  label="Outline Switch"
                  variant="outline"
                  size="md"
                  helperText="This is an outline variant switch."
                />
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Switch
                  label="Small Switch"
                  variant="primary"
                  size="sm"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Switch
                  label="Medium Switch"
                  variant="secondary"
                  size="md"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Switch
                  label="Large Switch"
                  variant="outline"
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Controlled Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Controlled Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Airplane Mode</h5>
                <Switch
                  label="Airplane Mode"
                  variant="primary"
                  size="md"
                  checked={airplaneMode}
                  onCheckedChange={setAirplaneMode}
                  helperText={`Airplane mode is ${airplaneMode ? 'enabled' : 'disabled'}`}
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Wi-Fi</h5>
                <Switch
                  label="Wi-Fi"
                  variant="secondary"
                  size="md"
                  checked={wifi}
                  onCheckedChange={setWifi}
                  helperText={`Wi-Fi is ${wifi ? 'connected' : 'disconnected'}`}
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Bluetooth</h5>
                <Switch
                  label="Bluetooth"
                  variant="outline"
                  size="md"
                  checked={bluetooth}
                  onCheckedChange={setBluetooth}
                  helperText={`Bluetooth is ${bluetooth ? 'enabled' : 'disabled'}`}
                />
              </div>
            </div>
          </div>

          {/* State Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">State Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Disabled State</h5>
                <Switch
                  label="Disabled Switch"
                  variant="primary"
                  size="md"
                  disabled
                  helperText="This switch is disabled."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Error State</h5>
                <Switch
                  label="Error Switch"
                  variant="primary"
                  size="md"
                  error="This switch has an error."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Default Checked</h5>
                <Switch
                  label="Default Checked"
                  variant="secondary"
                  size="md"
                  defaultChecked
                  helperText="This switch is checked by default."
                />
              </div>
            </div>
          </div>

          {/* Settings Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Settings Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">System Settings</h5>
                <div className="space-y-4">
                  <Switch
                    label="Notifications"
                    variant="primary"
                    size="sm"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    helperText="Receive push notifications"
                  />
                  <Switch
                    label="Dark Mode"
                    variant="secondary"
                    size="sm"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    helperText="Use dark theme"
                  />
                  <Switch
                    label="Auto Save"
                    variant="outline"
                    size="sm"
                    checked={autoSave}
                    onCheckedChange={setAutoSave}
                    helperText="Automatically save changes"
                  />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Privacy Settings</h5>
                <div className="space-y-4">
                  <Switch
                    label="Location Services"
                    variant="primary"
                    size="sm"
                    helperText="Allow access to location"
                  />
                  <Switch
                    label="Analytics"
                    variant="secondary"
                    size="sm"
                    defaultChecked
                    helperText="Share usage analytics"
                  />
                  <Switch
                    label="Marketing Emails"
                    variant="outline"
                    size="sm"
                    helperText="Receive promotional emails"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Form Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Email Preferences</h5>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Marketing emails</label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new products, features, and more.
                      </p>
                    </div>
                    <Switch variant="primary" size="sm" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Security emails</label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about your account security.
                      </p>
                    </div>
                    <Switch variant="secondary" size="sm" defaultChecked disabled />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Newsletter</label>
                      <p className="text-sm text-muted-foreground">
                        Receive our weekly newsletter.
                      </p>
                    </div>
                    <Switch variant="outline" size="sm" />
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Account Settings</h5>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Two-factor authentication</label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account.
                      </p>
                    </div>
                    <Switch variant="primary" size="sm" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Public profile</label>
                      <p className="text-sm text-muted-foreground">
                        Allow others to see your profile information.
                      </p>
                    </div>
                    <Switch variant="secondary" size="sm" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-0.5">
                      <label className="font-medium">Email notifications</label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for important updates.
                      </p>
                    </div>
                    <Switch variant="outline" size="sm" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Interactive Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Feature Toggles</h5>
                <div className="space-y-4">
                  <Switch
                    label="Beta Features"
                    variant="primary"
                    size="md"
                    helperText="Enable experimental features"
                  />
                  <Switch
                    label="Advanced Mode"
                    variant="secondary"
                    size="md"
                    helperText="Show advanced options and settings"
                  />
                  <Switch
                    label="Debug Mode"
                    variant="outline"
                    size="md"
                    helperText="Enable debug logging and tools"
                  />
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Save Settings
                  </Button>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Display Options</h5>
                <div className="space-y-4">
                  <Switch
                    label="Show Grid"
                    variant="primary"
                    size="md"
                    defaultChecked
                    helperText="Display grid lines"
                  />
                  <Switch
                    label="Show Labels"
                    variant="secondary"
                    size="md"
                    defaultChecked
                    helperText="Display data labels"
                  />
                  <Switch
                    label="Show Legend"
                    variant="outline"
                    size="md"
                    helperText="Display chart legend"
                  />
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Apply Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Accessibility Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Screen Reader Support</h5>
                <div className="space-y-4">
                  <Switch
                    label="Screen reader announcements"
                    variant="primary"
                    size="md"
                    defaultChecked
                    helperText="Announce state changes to screen readers"
                  />
                  <Switch
                    label="High contrast mode"
                    variant="secondary"
                    size="md"
                    helperText="Increase contrast for better visibility"
                  />
                  <Switch
                    label="Reduce motion"
                    variant="outline"
                    size="md"
                    helperText="Disable animations for accessibility"
                  />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Keyboard Navigation</h5>
                <div className="space-y-4">
                  <Switch
                    label="Keyboard shortcuts"
                    variant="primary"
                    size="md"
                    defaultChecked
                    helperText="Enable keyboard navigation shortcuts"
                  />
                  <Switch
                    label="Focus indicators"
                    variant="secondary"
                    size="md"
                    defaultChecked
                    helperText="Show focus indicators for keyboard users"
                  />
                  <Switch
                    label="Tab navigation"
                    variant="outline"
                    size="md"
                    defaultChecked
                    helperText="Enable tab-based navigation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 