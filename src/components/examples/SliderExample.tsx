import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Slider } from '../Slider';

export const SliderExample = () => {
  const [value1, setValue1] = useState([50]);
  const [value2, setValue2] = useState([25, 75]);
  const [value3, setValue3] = useState([30]);
  const [value4, setValue4] = useState([60]);
  const [value5, setValue5] = useState([40]);

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Slider Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Slider
                  label="Primary Slider"
                  variant="primary"
                  size="md"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  helperText="This is a primary variant slider with helper text."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Slider
                  label="Secondary Slider"
                  variant="secondary"
                  size="md"
                  defaultValue={[75]}
                  max={100}
                  step={5}
                  helperText="This is a secondary variant slider with step of 5."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Slider
                  label="Outline Slider"
                  variant="outline"
                  size="md"
                  defaultValue={[25]}
                  max={100}
                  step={1}
                  helperText="This is an outline variant slider."
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
                <Slider
                  label="Small Slider"
                  variant="primary"
                  size="sm"
                  defaultValue={[40]}
                  max={100}
                  step={1}
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Slider
                  label="Medium Slider"
                  variant="secondary"
                  size="md"
                  defaultValue={[60]}
                  max={100}
                  step={1}
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Slider
                  label="Large Slider"
                  variant="outline"
                  size="lg"
                  defaultValue={[80]}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </div>

          {/* Controlled Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Controlled Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Single Value (Controlled)</h5>
                <Slider
                  label={`Value: ${value1[0]}`}
                  variant="primary"
                  size="md"
                  value={value1}
                  onValueChange={setValue1}
                  max={100}
                  step={1}
                  helperText="This slider is controlled by React state."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Range Slider (Controlled)</h5>
                <Slider
                  label={`Range: ${value2[0]} - ${value2[1]}`}
                  variant="secondary"
                  size="md"
                  value={value2}
                  onValueChange={setValue2}
                  max={100}
                  step={1}
                  helperText="This is a range slider with two thumbs."
                />
              </div>
            </div>
          </div>

          {/* Custom Range Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Custom Range Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Temperature (0-100°C)</h5>
                <Slider
                  label={`Temperature: ${value3[0]}°C`}
                  variant="primary"
                  size="md"
                  value={value3}
                  onValueChange={setValue3}
                  min={0}
                  max={100}
                  step={1}
                  helperText="Adjust the temperature setting."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Volume (0-100%)</h5>
                <Slider
                  label={`Volume: ${value4[0]}%`}
                  variant="outline"
                  size="md"
                  value={value4}
                  onValueChange={setValue4}
                  min={0}
                  max={100}
                  step={5}
                  helperText="Control the volume level."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Brightness (0-255)</h5>
                <Slider
                  label={`Brightness: ${value5[0]}`}
                  variant="secondary"
                  size="md"
                  value={value5}
                  onValueChange={setValue5}
                  min={0}
                  max={255}
                  step={1}
                  helperText="Adjust the brightness level (0-255)."
                />
              </div>
            </div>
          </div>

          {/* Error State Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Error State Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">With Error Message</h5>
                <Slider
                  label="Error Slider"
                  variant="primary"
                  size="md"
                  defaultValue={[90]}
                  max={100}
                  step={1}
                  error="Value is too high. Please select a lower value."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Disabled State</h5>
                <Slider
                  label="Disabled Slider"
                  variant="outline"
                  size="md"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  disabled
                  helperText="This slider is disabled."
                />
              </div>
            </div>
          </div>

          {/* Custom Styling Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Custom Styling Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Custom Track Color</h5>
                <Slider
                  label="Custom Track"
                  variant="primary"
                  size="md"
                  defaultValue={[70]}
                  max={100}
                  step={1}
                  trackClassName="bg-blue-200"
                  rangeClassName="bg-blue-600"
                  helperText="Custom track and range colors."
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Custom Thumb Style</h5>
                <Slider
                  label="Custom Thumb"
                  variant="secondary"
                  size="md"
                  defaultValue={[45]}
                  max={100}
                  step={1}
                  thumbClassName="border-2 border-purple-500 bg-purple-100 hover:ring-purple-300"
                  helperText="Custom thumb styling with purple theme."
                />
              </div>
            </div>
          </div>

          {/* Multiple Sliders Example */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Multiple Sliders Example</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Audio Controls</h5>
                <div className="space-y-4">
                  <Slider
                    label="Master Volume"
                    variant="primary"
                    size="sm"
                    defaultValue={[80]}
                    max={100}
                    step={1}
                  />
                  <Slider
                    label="Bass"
                    variant="secondary"
                    size="sm"
                    defaultValue={[60]}
                    max={100}
                    step={1}
                  />
                  <Slider
                    label="Treble"
                    variant="outline"
                    size="sm"
                    defaultValue={[70]}
                    max={100}
                    step={1}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Display Settings</h5>
                <div className="space-y-4">
                  <Slider
                    label="Brightness"
                    variant="primary"
                    size="sm"
                    defaultValue={[75]}
                    max={100}
                    step={1}
                  />
                  <Slider
                    label="Contrast"
                    variant="secondary"
                    size="sm"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                  />
                  <Slider
                    label="Saturation"
                    variant="outline"
                    size="sm"
                    defaultValue={[65]}
                    max={100}
                    step={1}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Game Settings</h5>
                <div className="space-y-4">
                  <Slider
                    label="Mouse Sensitivity"
                    variant="primary"
                    size="sm"
                    defaultValue={[40]}
                    max={100}
                    step={1}
                  />
                  <Slider
                    label="Field of View"
                    variant="secondary"
                    size="sm"
                    defaultValue={[90]}
                    min={60}
                    max={120}
                    step={5}
                  />
                  <Slider
                    label="Render Distance"
                    variant="outline"
                    size="sm"
                    defaultValue={[80]}
                    max={100}
                    step={5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Price Range Filter</h5>
                <Slider
                  label="Price Range"
                  variant="primary"
                  size="md"
                  defaultValue={[20, 80]}
                  max={100}
                  step={5}
                  helperText="Select your preferred price range (0-100)."
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Min: $20</p>
                  <p>Max: $80</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Rating Filter</h5>
                <Slider
                  label="Minimum Rating"
                  variant="secondary"
                  size="md"
                  defaultValue={[4]}
                  min={1}
                  max={5}
                  step={0.1}
                  helperText="Set minimum rating filter (1-5 stars)."
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Minimum Rating: 4.0 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 