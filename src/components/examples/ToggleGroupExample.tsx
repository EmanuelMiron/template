import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Quote, Code, Heading1, Heading2, Strikethrough } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';

export const ToggleGroupExample = () => {
  const [textFormat, setTextFormat] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<string>('left');
  const [listType, setListType] = useState<string>('bullet');
  const [heading, setHeading] = useState<string>('');

  // Wrapper functions to handle type conversion
  const handleTextFormatChange = (value: string | string[]) => {
    setTextFormat(Array.isArray(value) ? value : []);
  };

  const handleAlignmentChange = (value: string | string[]) => {
    setAlignment(Array.isArray(value) ? value[0] || 'left' : value);
  };

  const handleListTypeChange = (value: string | string[]) => {
    setListType(Array.isArray(value) ? value[0] || 'bullet' : value);
  };

  const handleHeadingChange = (value: string | string[]) => {
    setHeading(Array.isArray(value) ? value[0] || '' : value);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">ToggleGroup Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant (Multiple)</h5>
                <ToggleGroup
                  variant="primary"
                  size="md"
                  type="multiple"
                  value={textFormat}
                  onValueChange={handleTextFormatChange}
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-sm text-muted-foreground mt-2">
                  Selected: {textFormat.join(', ') || 'none'}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant (Single)</h5>
                <ToggleGroup
                  variant="secondary"
                  size="md"
                  type="single"
                  value={alignment}
                  onValueChange={handleAlignmentChange}
                >
                  <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeft className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    <AlignCenter className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    <AlignRight className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-sm text-muted-foreground mt-2">
                  Current alignment: {alignment}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant (Multiple)</h5>
                <ToggleGroup
                  variant="outline"
                  size="md"
                  type="multiple"
                  value={textFormat}
                  onValueChange={handleTextFormatChange}
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <ToggleGroup
                  variant="primary"
                  size="sm"
                  type="multiple"
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-3 w-3" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-3 w-3" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-3 w-3" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <ToggleGroup
                  variant="secondary"
                  size="md"
                  type="multiple"
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <ToggleGroup
                  variant="outline"
                  size="lg"
                  type="multiple"
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-5 w-5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* Text Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Text Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Toggle with Text</h5>
                <ToggleGroup
                  variant="primary"
                  size="md"
                  type="multiple"
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4 mr-2" />
                    Bold
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4 mr-2" />
                    Italic
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4 mr-2" />
                    Underline
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Heading Selection (Single)</h5>
                <ToggleGroup
                  variant="secondary"
                  size="md"
                  type="single"
                  value={heading}
                  onValueChange={handleHeadingChange}
                >
                  <ToggleGroupItem value="h1" aria-label="Heading 1">
                    <Heading1 className="h-4 w-4 mr-2" />
                    H1
                  </ToggleGroupItem>
                  <ToggleGroupItem value="h2" aria-label="Heading 2">
                    <Heading2 className="h-4 w-4 mr-2" />
                    H2
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-sm text-muted-foreground mt-2">
                  Selected heading: {heading || 'none'}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">Format Options</h5>
                <ToggleGroup
                  variant="outline"
                  size="md"
                  type="multiple"
                >
                  <ToggleGroupItem value="quote" aria-label="Toggle quote">
                    <Quote className="h-4 w-4 mr-2" />
                    Quote
                  </ToggleGroupItem>
                  <ToggleGroupItem value="code" aria-label="Toggle code">
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </ToggleGroupItem>
                  <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                    <Strikethrough className="h-4 w-4 mr-2" />
                    Strike
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* State Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">State Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Disabled State</h5>
                <ToggleGroup
                  variant="primary"
                  size="md"
                  type="multiple"
                >
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">List Type Selection</h5>
                <ToggleGroup
                  variant="secondary"
                  size="md"
                  type="single"
                  value={listType}
                  onValueChange={handleListTypeChange}
                >
                  <ToggleGroupItem value="bullet" aria-label="Bullet list">
                    <List className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="ordered" aria-label="Ordered list">
                    <ListOrdered className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
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
                <div className="space-y-3">
                  <ToggleGroup
                    variant="primary"
                    size="sm"
                    type="multiple"
                    value={textFormat}
                    onValueChange={handleTextFormatChange}
                  >
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <Underline className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                      <Strikethrough className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-xs text-muted-foreground">
                    Active formats: {textFormat.join(', ') || 'none'}
                  </p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Alignment Toolbar</h5>
                <div className="space-y-3">
                  <ToggleGroup
                    variant="secondary"
                    size="sm"
                    type="single"
                    value={alignment}
                    onValueChange={handleAlignmentChange}
                  >
                    <ToggleGroupItem value="left" aria-label="Align left">
                      <AlignLeft className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                      <AlignCenter className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                      <AlignRight className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-xs text-muted-foreground">
                    Current alignment: {alignment}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Interactive Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">View Mode Selection</h5>
                <div className="space-y-3">
                  <ToggleGroup
                    variant="outline"
                    size="md"
                    type="single"
                    value={alignment}
                    onValueChange={handleAlignmentChange}
                  >
                    <ToggleGroupItem value="grid" aria-label="Grid view">
                      <AlignLeft className="h-4 w-4 mr-2" />
                      Grid
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="List view">
                      <AlignCenter className="h-4 w-4 mr-2" />
                      List
                    </ToggleGroupItem>
                    <ToggleGroupItem value="compact" aria-label="Compact view">
                      <AlignRight className="h-4 w-4 mr-2" />
                      Compact
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Selected view: {alignment}
                  </p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">Feature Toggles</h5>
                <div className="space-y-3">
                  <ToggleGroup
                    variant="primary"
                    size="md"
                    type="multiple"
                    value={textFormat}
                    onValueChange={handleTextFormatChange}
                  >
                    <ToggleGroupItem value="darkMode" aria-label="Dark mode">
                      <Bold className="h-4 w-4 mr-2" />
                      Dark Mode
                    </ToggleGroupItem>
                    <ToggleGroupItem value="notifications" aria-label="Notifications">
                      <Italic className="h-4 w-4 mr-2" />
                      Notifications
                    </ToggleGroupItem>
                    <ToggleGroupItem value="autoSave" aria-label="Auto save">
                      <Underline className="h-4 w-4 mr-2" />
                      Auto Save
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Active features: {textFormat.join(', ') || 'none'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Complex Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Complex Examples</h4>
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-3">Rich Text Editor Toolbar</h5>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <ToggleGroup
                    variant="primary"
                    size="sm"
                    type="multiple"
                    value={textFormat}
                    onValueChange={handleTextFormatChange}
                  >
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <Underline className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                      <Strikethrough className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  
                  <div className="w-px h-6 bg-border mx-2" />
                  
                  <ToggleGroup
                    variant="secondary"
                    size="sm"
                    type="single"
                    value={alignment}
                    onValueChange={handleAlignmentChange}
                  >
                    <ToggleGroupItem value="left" aria-label="Align left">
                      <AlignLeft className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                      <AlignCenter className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                      <AlignRight className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  
                  <div className="w-px h-6 bg-border mx-2" />
                  
                  <ToggleGroup
                    variant="outline"
                    size="sm"
                    type="single"
                    value={listType}
                    onValueChange={handleListTypeChange}
                  >
                    <ToggleGroupItem value="bullet" aria-label="Bullet list">
                      <List className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ordered" aria-label="Ordered list">
                      <ListOrdered className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Active formats: {textFormat.join(', ') || 'none'}</p>
                  <p>Alignment: {alignment}</p>
                  <p>List type: {listType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 