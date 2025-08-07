import React, { useState } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../InputOTP';
import { Button } from '../Button';

export const InputOTPExample = () => {
  const [controlledValue, setControlledValue] = useState('');
  const [formValue, setFormValue] = useState('');

  const handleComplete = (value: string) => {
    console.log('OTP completed:', value);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">InputOTP Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic InputOTP Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic InputOTP Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant (6 digits)</h5>
                <InputOTP
                  label="Enter 6-digit code"
                  variant="primary"
                  size="md"
                  maxLength={6}
                  helperText="Enter the 6-digit code sent to your phone"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="md" />
                    <InputOTPSlot index={1} variant="primary" size="md" />
                    <InputOTPSlot index={2} variant="primary" size="md" />
                    <InputOTPSlot index={3} variant="primary" size="md" />
                    <InputOTPSlot index={4} variant="primary" size="md" />
                    <InputOTPSlot index={5} variant="primary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant (4 digits)</h5>
                <InputOTP
                  label="Enter 4-digit PIN"
                  variant="secondary"
                  size="md"
                  maxLength={4}
                  helperText="Enter your 4-digit PIN"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="secondary" size="md" />
                    <InputOTPSlot index={1} variant="secondary" size="md" />
                    <InputOTPSlot index={2} variant="secondary" size="md" />
                    <InputOTPSlot index={3} variant="secondary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant (8 characters)</h5>
                <InputOTP
                  label="Enter 8-character code"
                  variant="outline"
                  size="md"
                  maxLength={8}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  helperText="Enter the 8-character alphanumeric code"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="outline" size="md" />
                    <InputOTPSlot index={1} variant="outline" size="md" />
                    <InputOTPSlot index={2} variant="outline" size="md" />
                    <InputOTPSlot index={3} variant="outline" size="md" />
                    <InputOTPSlot index={4} variant="outline" size="md" />
                    <InputOTPSlot index={5} variant="outline" size="md" />
                    <InputOTPSlot index={6} variant="outline" size="md" />
                    <InputOTPSlot index={7} variant="outline" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <InputOTP
                  label="Small OTP"
                  variant="primary"
                  size="sm"
                  maxLength={4}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="sm" />
                    <InputOTPSlot index={1} variant="primary" size="sm" />
                    <InputOTPSlot index={2} variant="primary" size="sm" />
                    <InputOTPSlot index={3} variant="primary" size="sm" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <InputOTP
                  label="Medium OTP"
                  variant="secondary"
                  size="md"
                  maxLength={4}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="secondary" size="md" />
                    <InputOTPSlot index={1} variant="secondary" size="md" />
                    <InputOTPSlot index={2} variant="secondary" size="md" />
                    <InputOTPSlot index={3} variant="secondary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <InputOTP
                  label="Large OTP"
                  variant="outline"
                  size="lg"
                  maxLength={4}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="outline" size="lg" />
                    <InputOTPSlot index={1} variant="outline" size="lg" />
                    <InputOTPSlot index={2} variant="outline" size="lg" />
                    <InputOTPSlot index={3} variant="outline" size="lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </div>

          {/* Separator Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Separator Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">With Separators (3-3 format)</h5>
                <InputOTP
                  label="Credit Card Style"
                  variant="primary"
                  size="md"
                  maxLength={6}
                  helperText="Enter code in XXX-XXX format"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="md" />
                    <InputOTPSlot index={1} variant="primary" size="md" />
                    <InputOTPSlot index={2} variant="primary" size="md" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} variant="primary" size="md" />
                    <InputOTPSlot index={4} variant="primary" size="md" />
                    <InputOTPSlot index={5} variant="primary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">With Separators (2-2-2 format)</h5>
                <InputOTP
                  label="Phone Number Style"
                  variant="secondary"
                  size="md"
                  maxLength={6}
                  helperText="Enter code in XX-XX-XX format"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="secondary" size="md" />
                    <InputOTPSlot index={1} variant="secondary" size="md" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} variant="secondary" size="md" />
                    <InputOTPSlot index={3} variant="secondary" size="md" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} variant="secondary" size="md" />
                    <InputOTPSlot index={5} variant="secondary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">With Separators (4-4 format)</h5>
                <InputOTP
                  label="License Plate Style"
                  variant="outline"
                  size="md"
                  maxLength={8}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  helperText="Enter code in XXXX-XXXX format"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="outline" size="md" />
                    <InputOTPSlot index={1} variant="outline" size="md" />
                    <InputOTPSlot index={2} variant="outline" size="md" />
                    <InputOTPSlot index={3} variant="outline" size="md" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} variant="outline" size="md" />
                    <InputOTPSlot index={5} variant="outline" size="md" />
                    <InputOTPSlot index={6} variant="outline" size="md" />
                    <InputOTPSlot index={7} variant="outline" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </div>

          {/* Controlled Input Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Controlled Input Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Controlled Input</h5>
                <InputOTP
                  label="Controlled OTP"
                  variant="primary"
                  size="md"
                  maxLength={6}
                  value={controlledValue}
                  onChange={setControlledValue}
                  onComplete={handleComplete}
                  helperText="This input is controlled by React state"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="md" />
                    <InputOTPSlot index={1} variant="primary" size="md" />
                    <InputOTPSlot index={2} variant="primary" size="md" />
                    <InputOTPSlot index={3} variant="primary" size="md" />
                    <InputOTPSlot index={4} variant="primary" size="md" />
                    <InputOTPSlot index={5} variant="primary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
                <div className="text-center text-sm mt-2 text-[var(--color-foreground-secondary)]">
                  {controlledValue === '' ? (
                    <>Enter your one-time password.</>
                  ) : (
                    <>You entered: {controlledValue}</>
                  )}
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Form Integration</h5>
                <div className="space-y-4">
                  <InputOTP
                    label="Form OTP"
                    variant="secondary"
                    size="md"
                    maxLength={6}
                    value={formValue}
                    onChange={setFormValue}
                    helperText="This OTP will be submitted with a form"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} variant="secondary" size="md" />
                      <InputOTPSlot index={1} variant="secondary" size="md" />
                      <InputOTPSlot index={2} variant="secondary" size="md" />
                      <InputOTPSlot index={3} variant="secondary" size="md" />
                      <InputOTPSlot index={4} variant="secondary" size="md" />
                      <InputOTPSlot index={5} variant="secondary" size="md" />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      if (formValue.length === 6) {
                        alert(`Form submitted with OTP: ${formValue}`);
                      } else {
                        alert('Please enter a complete 6-digit OTP');
                      }
                    }}
                  >
                    Submit Form
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Error States */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Error States</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">With Error Message</h5>
                <InputOTP
                  label="Error OTP"
                  variant="primary"
                  size="md"
                  maxLength={6}
                  error="Invalid OTP code. Please try again."
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="md" />
                    <InputOTPSlot index={1} variant="primary" size="md" />
                    <InputOTPSlot index={2} variant="primary" size="md" />
                    <InputOTPSlot index={3} variant="primary" size="md" />
                    <InputOTPSlot index={4} variant="primary" size="md" />
                    <InputOTPSlot index={5} variant="primary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Disabled State</h5>
                <InputOTP
                  label="Disabled OTP"
                  variant="outline"
                  size="md"
                  maxLength={4}
                  disabled
                  helperText="This OTP input is disabled"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="outline" size="md" />
                    <InputOTPSlot index={1} variant="outline" size="md" />
                    <InputOTPSlot index={2} variant="outline" size="md" />
                    <InputOTPSlot index={3} variant="outline" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </div>

          {/* Pattern Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Pattern Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Digits Only (Default)</h5>
                <InputOTP
                  label="Digits Only"
                  variant="primary"
                  size="md"
                  maxLength={4}
                  helperText="Only numeric characters allowed"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="primary" size="md" />
                    <InputOTPSlot index={1} variant="primary" size="md" />
                    <InputOTPSlot index={2} variant="primary" size="md" />
                    <InputOTPSlot index={3} variant="primary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <h5 className="font-medium mb-2">Alphanumeric</h5>
                <InputOTP
                  label="Alphanumeric"
                  variant="secondary"
                  size="md"
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  helperText="Letters and numbers allowed"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} variant="secondary" size="md" />
                    <InputOTPSlot index={1} variant="secondary" size="md" />
                    <InputOTPSlot index={2} variant="secondary" size="md" />
                    <InputOTPSlot index={3} variant="secondary" size="md" />
                    <InputOTPSlot index={4} variant="secondary" size="md" />
                    <InputOTPSlot index={5} variant="secondary" size="md" />
                  </InputOTPGroup>
                </InputOTP>
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
                Try entering different OTP codes to see the component in action
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <InputOTP
                label="Demo OTP"
                variant="primary"
                size="md"
                maxLength={6}
                onComplete={handleComplete}
                helperText="Enter a 6-digit code to see completion callback"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} variant="primary" size="md" />
                  <InputOTPSlot index={1} variant="primary" size="md" />
                  <InputOTPSlot index={2} variant="primary" size="md" />
                  <InputOTPSlot index={3} variant="primary" size="md" />
                  <InputOTPSlot index={4} variant="primary" size="md" />
                  <InputOTPSlot index={5} variant="primary" size="md" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 