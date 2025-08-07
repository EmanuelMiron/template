import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Label } from '../Label';
import { Checkbox as ShadCheckbox } from '../ui/checkbox';
import { Input } from '../Input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';

export const LabelExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Label Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Label Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Label Examples</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShadCheckbox id="terms" />
                <Label htmlFor="terms" variant="primary" size="md">
                  Accept terms and conditions
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <ShadCheckbox id="newsletter" />
                <Label htmlFor="newsletter" variant="secondary" size="md">
                  Subscribe to newsletter
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <ShadCheckbox id="marketing" />
                <Label htmlFor="marketing" variant="outline" size="md">
                  Receive marketing emails
                </Label>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShadCheckbox id="small" />
                <Label htmlFor="small" variant="primary" size="sm">
                  Small label
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <ShadCheckbox id="medium" />
                <Label htmlFor="medium" variant="primary" size="md">
                  Medium label (default)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <ShadCheckbox id="large" />
                <Label htmlFor="large" variant="primary" size="lg">
                  Large label
                </Label>
              </div>
            </div>
          </div>

          {/* Required Field Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Required Field Examples</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" variant="primary" size="md" required>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  variant="primary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" variant="secondary" size="md" required>
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  variant="secondary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="username" variant="outline" size="md" required>
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  variant="outline"
                  inputSize="md"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Form Integration Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Form Integration Examples</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" variant="primary" size="md">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  variant="primary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" variant="secondary" size="md">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  variant="secondary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bio" variant="outline" size="md">
                  Bio
                </Label>
                <Input
                  id="bio"
                  type="text"
                  placeholder="Tell us about yourself"
                  variant="outline"
                  inputSize="md"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Radio Group Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Radio Group Examples</h4>
            <div className="space-y-4">
              <div>
                <Label variant="primary" size="md" className="mb-2 block">
                  Select your preferred contact method
                </Label>
                <RadioGroup defaultValue="email" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-radio" />
                    <Label htmlFor="email-radio" variant="primary" size="sm">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-radio" />
                    <Label htmlFor="phone-radio" variant="primary" size="sm">
                      Phone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mail" id="mail-radio" />
                    <Label htmlFor="mail-radio" variant="primary" size="sm">
                      Mail
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label variant="secondary" size="md" className="mb-2 block">
                  Choose your notification preferences
                </Label>
                <RadioGroup defaultValue="all" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all-notifications" />
                    <Label htmlFor="all-notifications" variant="secondary" size="sm">
                      All notifications
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="important-notifications" />
                    <Label htmlFor="important-notifications" variant="secondary" size="sm">
                      Important only
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="no-notifications" />
                    <Label htmlFor="no-notifications" variant="secondary" size="sm">
                      No notifications
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Switch Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Switch Examples</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode" variant="primary" size="md">
                  Airplane mode
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="wifi" />
                <Label htmlFor="wifi" variant="secondary" size="md">
                  Wi-Fi
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="bluetooth" />
                <Label htmlFor="bluetooth" variant="outline" size="md">
                  Bluetooth
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications" variant="primary" size="md" required>
                  Push notifications
                </Label>
              </div>
            </div>
          </div>

          {/* Disabled State Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Disabled State Examples</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShadCheckbox id="disabled-checkbox" disabled />
                <Label htmlFor="disabled-checkbox" variant="primary" size="md" disabled>
                  Disabled checkbox
                </Label>
              </div>

              <div>
                <Label htmlFor="disabled-input" variant="secondary" size="md" disabled>
                  Disabled input field
                </Label>
                <Input
                  id="disabled-input"
                  type="text"
                  placeholder="This input is disabled"
                  variant="secondary"
                  inputSize="md"
                  disabled
                  className="mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="disabled-switch" disabled />
                <Label htmlFor="disabled-switch" variant="outline" size="md" disabled>
                  Disabled switch
                </Label>
              </div>
            </div>
          </div>

          {/* Complex Form Example */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Complex Form Example</h4>
            <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
              <div>
                <Label htmlFor="form-name" variant="primary" size="md" required>
                  Full Name
                </Label>
                <Input
                  id="form-name"
                  type="text"
                  placeholder="Enter your full name"
                  variant="primary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="form-email" variant="primary" size="md" required>
                  Email Address
                </Label>
                <Input
                  id="form-email"
                  type="email"
                  placeholder="Enter your email"
                  variant="primary"
                  inputSize="md"
                  className="mt-1"
                />
              </div>

              <div>
                <Label variant="secondary" size="md" className="mb-2 block">
                  Account Type
                </Label>
                <RadioGroup defaultValue="personal" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal-account" />
                    <Label htmlFor="personal-account" variant="secondary" size="sm">
                      Personal Account
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business-account" />
                    <Label htmlFor="business-account" variant="secondary" size="sm">
                      Business Account
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ShadCheckbox id="terms-accept" />
                  <Label htmlFor="terms-accept" variant="outline" size="sm" required>
                    I accept the terms and conditions
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <ShadCheckbox id="privacy-policy" />
                  <Label htmlFor="privacy-policy" variant="outline" size="sm" required>
                    I agree to the privacy policy
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="marketing-consent" />
                  <Label htmlFor="marketing-consent" variant="outline" size="sm">
                    Send me marketing communications
                  </Label>
                </div>
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
                Try interacting with the form elements to see how labels work with different components
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <ShadCheckbox id="demo-checkbox" />
                <Label htmlFor="demo-checkbox" variant="primary" size="md">
                  Interactive Checkbox
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="demo-switch" />
                <Label htmlFor="demo-switch" variant="secondary" size="md">
                  Interactive Switch
                </Label>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 