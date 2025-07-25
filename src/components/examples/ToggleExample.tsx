import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Quote, Code, Heading1, Heading2 } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import Toggle from '../Toggle';

export const ToggleExample = () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [italicPressed, setItalicPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(false);
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');
  const [listType, setListType] = useState<'bullet' | 'ordered'>('bullet');

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Toggle Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle bold"
                    pressed={boldPressed}
                    onPressedChange={setBoldPressed}
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle italic"
                    pressed={italicPressed}
                    onPressedChange={setItalicPressed}
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle underline"
                    pressed={underlinePressed}
                    onPressedChange={setUnderlinePressed}
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="outline"
                    size="md"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="md"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="md"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
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
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-3 w-3" />
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="outline"
                    size="lg"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-5 w-5" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="lg"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-5 w-5" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="lg"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-5 w-5" />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>

          {/* Text Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Text Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Toggle with Text</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-4 w-4 mr-2" />
                    Bold
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-4 w-4 mr-2" />
                    Italic
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4 mr-2" />
                    Underline
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Heading Toggles</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle heading 1"
                  >
                    <Heading1 className="h-4 w-4 mr-2" />
                    H1
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle heading 2"
                  >
                    <Heading2 className="h-4 w-4 mr-2" />
                    H2
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Format Toggles</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="outline"
                    size="md"
                    aria-label="Toggle quote"
                  >
                    <Quote className="h-4 w-4 mr-2" />
                    Quote
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="md"
                    aria-label="Toggle code"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </Toggle>
                </div>
              </div>
            </div>
          </div>

          {/* State Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">State Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Disabled State</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle bold"
                    disabled
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle italic"
                    disabled
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Toggle underline"
                    disabled
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Pressed State</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle bold"
                    pressed
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle italic"
                    pressed
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Toggle underline"
                    pressed
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>

          {/* Alignment Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Alignment Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Text Alignment</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Align left"
                    pressed={alignment === 'left'}
                    onPressedChange={() => setAlignment('left')}
                  >
                    <AlignLeft className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Align center"
                    pressed={alignment === 'center'}
                    onPressedChange={() => setAlignment('center')}
                  >
                    <AlignCenter className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="md"
                    aria-label="Align right"
                    pressed={alignment === 'right'}
                    onPressedChange={() => setAlignment('right')}
                  >
                    <AlignRight className="h-4 w-4" />
                  </Toggle>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Current alignment: {alignment}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">List Type</h5>
                <div className="flex items-center space-x-2">
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Bullet list"
                    pressed={listType === 'bullet'}
                    onPressedChange={() => setListType('bullet')}
                  >
                    <List className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="md"
                    aria-label="Ordered list"
                    pressed={listType === 'ordered'}
                    onPressedChange={() => setListType('ordered')}
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Toggle>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Current list type: {listType}
                </p>
              </div>
            </div>
          </div>

          {/* Toolbar Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Toolbar Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Text Formatting Toolbar</h5>
                <div className="flex flex-wrap items-center gap-2">
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle bold"
                    pressed={boldPressed}
                    onPressedChange={setBoldPressed}
                  >
                    <Bold className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle italic"
                    pressed={italicPressed}
                    onPressedChange={setItalicPressed}
                  >
                    <Italic className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="primary"
                    size="sm"
                    aria-label="Toggle underline"
                    pressed={underlinePressed}
                    onPressedChange={setUnderlinePressed}
                  >
                    <Underline className="h-3 w-3" />
                  </Toggle>
                  <div className="w-px h-6 bg-border mx-2" />
                  <Toggle
                    variant="outline"
                    size="sm"
                    aria-label="Toggle quote"
                  >
                    <Quote className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="sm"
                    aria-label="Toggle code"
                  >
                    <Code className="h-3 w-3" />
                  </Toggle>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Alignment Toolbar</h5>
                <div className="flex flex-wrap items-center gap-2">
                  <Toggle
                    variant="secondary"
                    size="sm"
                    aria-label="Align left"
                    pressed={alignment === 'left'}
                    onPressedChange={() => setAlignment('left')}
                  >
                    <AlignLeft className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="sm"
                    aria-label="Align center"
                    pressed={alignment === 'center'}
                    onPressedChange={() => setAlignment('center')}
                  >
                    <AlignCenter className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="secondary"
                    size="sm"
                    aria-label="Align right"
                    pressed={alignment === 'right'}
                    onPressedChange={() => setAlignment('right')}
                  >
                    <AlignRight className="h-3 w-3" />
                  </Toggle>
                  <div className="w-px h-6 bg-border mx-2" />
                  <Toggle
                    variant="outline"
                    size="sm"
                    aria-label="Bullet list"
                    pressed={listType === 'bullet'}
                    onPressedChange={() => setListType('bullet')}
                  >
                    <List className="h-3 w-3" />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    size="sm"
                    aria-label="Ordered list"
                    pressed={listType === 'ordered'}
                    onPressedChange={() => setListType('ordered')}
                  >
                    <ListOrdered className="h-3 w-3" />
                  </Toggle>
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
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Dark Mode</span>
                    <Toggle
                      variant="primary"
                      size="sm"
                      aria-label="Toggle dark mode"
                    >
                      <Bold className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Notifications</span>
                    <Toggle
                      variant="secondary"
                      size="sm"
                      aria-label="Toggle notifications"
                      pressed
                    >
                      <Italic className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto Save</span>
                    <Toggle
                      variant="outline"
                      size="sm"
                      aria-label="Toggle auto save"
                      pressed
                    >
                      <Underline className="h-3 w-3" />
                    </Toggle>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">View Options</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Grid View</span>
                    <Toggle
                      variant="primary"
                      size="sm"
                      aria-label="Toggle grid view"
                      pressed
                    >
                      <AlignLeft className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">List View</span>
                    <Toggle
                      variant="secondary"
                      size="sm"
                      aria-label="Toggle list view"
                    >
                      <AlignCenter className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Compact Mode</span>
                    <Toggle
                      variant="outline"
                      size="sm"
                      aria-label="Toggle compact mode"
                    >
                      <AlignRight className="h-3 w-3" />
                    </Toggle>
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