import React from 'react';
import { Info, HelpCircle, AlertCircle, CheckCircle, X, Plus, Settings, Download, Share, Heart, Star, Eye, Edit, Trash2, Copy, ExternalLink } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../Tooltip';
import { Button } from '../Button';

export const TooltipExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Tooltip Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <TooltipProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Primary Variant</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="md">
                        <p>This is a primary tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="md">
                        <p>Information tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Secondary Variant</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Secondary</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="md">
                        <p>This is a secondary tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="md">
                        <p>Help tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Outline Variant</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Outline</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="md">
                        <p>This is an outline tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <AlertCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="md">
                        <p>Warning tooltip</p>
                      </TooltipContent>
                    </Tooltip>
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
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">Small</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="sm">
                        <p>Small tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="sm">
                        <p>Success</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Medium</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="md">
                        <p>Medium tooltip</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <X className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="md">
                        <p>Close</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Large Size</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg">Large</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="lg">
                        <p>Large tooltip with more content</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg">
                          <Plus className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="lg">
                        <p>Add new item</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Icon Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Icon Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Action Icons</h5>
                  <div className="flex items-center space-x-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="sm">
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="sm">
                        <p>Download</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="sm">
                        <p>Share</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Status Icons</h5>
                  <div className="flex items-center space-x-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="sm">
                        <p>Like</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="sm">
                        <p>Favorite</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="sm">
                        <p>View</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Edit Icons</h5>
                  <div className="flex items-center space-x-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="sm">
                        <p>Edit</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="sm">
                        <p>Copy</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="sm">
                        <p>Delete</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Content Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Simple Text</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Simple</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="md">
                        <p>Simple tooltip text</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Rich Content</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Rich</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="lg">
                        <div className="space-y-1">
                          <p className="font-medium">Rich Tooltip</p>
                          <p className="text-xs opacity-90">With multiple lines and formatting</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">With Icons</h5>
                  <div className="flex items-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="md">
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-3 w-3" />
                          <span>Open in new tab</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Position Examples */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Position Examples</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="primary" size="sm" side="top">
                      <p>Top tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="secondary" size="sm" side="right">
                      <p>Right tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="outline" size="sm" side="bottom">
                      <p>Bottom tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="primary" size="sm" side="left">
                      <p>Left tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* Interactive Examples */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Interactive Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Form Field Help</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="h-4 w-4 p-0">
                            <HelpCircle className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent variant="primary" size="sm">
                          <p>Enter your email address</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Action Buttons</h5>
                  <div className="flex items-center space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="primary" size="sm">
                        <p>Add new item</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="secondary" size="sm">
                        <p>Edit item</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent variant="outline" size="sm">
                        <p>Delete item</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Delay Examples */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Delay Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-center">
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">No Delay</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="primary" size="sm">
                      <p>Shows immediately</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex justify-center">
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">500ms Delay</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="secondary" size="sm">
                      <p>Shows after 500ms</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex justify-center">
                  <Tooltip delayDuration={1000}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">1s Delay</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="outline" size="sm">
                      <p>Shows after 1 second</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </CollapsibleContent>
    </Collapsible>
  );
}; 