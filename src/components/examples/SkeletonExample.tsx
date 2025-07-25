import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import Skeleton from '../Skeleton';

export const SkeletonExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Skeleton Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="primary" size="lg" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="primary" size="md" className="w-[250px]" />
                    <Skeleton variant="primary" size="sm" className="w-[200px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="secondary" size="lg" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="secondary" size="md" className="w-[250px]" />
                    <Skeleton variant="secondary" size="sm" className="w-[200px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="outline" size="lg" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="md" className="w-[250px]" />
                    <Skeleton variant="outline" size="sm" className="w-[200px]" />
                  </div>
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
                  <Skeleton variant="primary" size="sm" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="primary" size="sm" className="w-[200px]" />
                    <Skeleton variant="primary" size="sm" className="w-[150px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="secondary" size="md" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="secondary" size="md" className="w-[250px]" />
                    <Skeleton variant="secondary" size="md" className="w-[200px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="outline" size="lg" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="lg" className="w-[300px]" />
                    <Skeleton variant="outline" size="lg" className="w-[250px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Animation Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Animated (Default)</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="primary" size="md" rounded animated />
                  <div className="space-y-2">
                    <Skeleton variant="primary" size="md" className="w-[200px]" animated />
                    <Skeleton variant="primary" size="sm" className="w-[150px]" animated />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Static (No Animation)</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="secondary" size="md" rounded animated={false} />
                  <div className="space-y-2">
                    <Skeleton variant="secondary" size="md" className="w-[200px]" animated={false} />
                    <Skeleton variant="secondary" size="sm" className="w-[150px]" animated={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shape Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Rounded (Default)</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="primary" size="md" />
                  <div className="space-y-2">
                    <Skeleton variant="primary" size="md" className="w-[200px]" />
                    <Skeleton variant="primary" size="sm" className="w-[150px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Circular</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="secondary" size="lg" rounded />
                  <div className="space-y-2">
                    <Skeleton variant="secondary" size="md" className="w-[200px]" />
                    <Skeleton variant="secondary" size="sm" className="w-[150px]" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Custom Shapes</h5>
                <div className="flex items-center space-x-4">
                  <Skeleton variant="outline" className="h-12 w-12 rounded-full" />
                  <Skeleton variant="outline" className="h-8 w-8 rounded-lg" />
                  <Skeleton variant="outline" className="h-6 w-6 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Card Layout Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Card Layout Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h5 className="font-medium mb-2">User Profile Card</h5>
                <div className="flex flex-col space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Skeleton variant="primary" size="lg" rounded />
                    <div className="space-y-2 flex-1">
                      <Skeleton variant="primary" size="md" className="w-full" />
                      <Skeleton variant="primary" size="sm" className="w-3/4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="primary" size="sm" className="w-full" />
                    <Skeleton variant="primary" size="sm" className="w-5/6" />
                    <Skeleton variant="primary" size="sm" className="w-4/5" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Product Card</h5>
                <div className="flex flex-col space-y-3 p-4 border rounded-lg">
                  <Skeleton variant="secondary" className="h-[125px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton variant="secondary" size="md" className="w-full" />
                    <Skeleton variant="secondary" size="sm" className="w-3/4" />
                    <Skeleton variant="secondary" size="sm" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Article Card</h5>
                <div className="flex flex-col space-y-3 p-4 border rounded-lg">
                  <Skeleton variant="outline" className="h-[100px] w-full rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="md" className="w-full" />
                    <Skeleton variant="outline" size="sm" className="w-full" />
                    <Skeleton variant="outline" size="sm" className="w-5/6" />
                    <Skeleton variant="outline" size="sm" className="w-4/5" />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Skeleton variant="outline" size="sm" rounded />
                    <Skeleton variant="outline" size="sm" className="w-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">List Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">User List</h5>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                      <Skeleton variant="primary" size="md" rounded />
                      <div className="space-y-2 flex-1">
                        <Skeleton variant="primary" size="md" className="w-3/4" />
                        <Skeleton variant="primary" size="sm" className="w-1/2" />
                      </div>
                      <Skeleton variant="primary" size="sm" className="w-16" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Content List</h5>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="space-y-2 p-3 border rounded-lg">
                      <Skeleton variant="secondary" size="md" className="w-full" />
                      <Skeleton variant="secondary" size="sm" className="w-5/6" />
                      <Skeleton variant="secondary" size="sm" className="w-4/5" />
                      <div className="flex items-center space-x-2 pt-2">
                        <Skeleton variant="secondary" size="sm" rounded />
                        <Skeleton variant="secondary" size="sm" className="w-16" />
                        <Skeleton variant="secondary" size="sm" className="w-12" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Form Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Login Form</h5>
                <div className="space-y-4 p-4 border rounded-lg">
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="sm" className="w-16" />
                    <Skeleton variant="outline" size="md" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="sm" className="w-20" />
                    <Skeleton variant="outline" size="md" className="w-full" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton variant="outline" size="sm" className="w-4 h-4" />
                    <Skeleton variant="outline" size="sm" className="w-24" />
                  </div>
                  <Skeleton variant="outline" size="md" className="w-full h-10" />
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Settings Form</h5>
                <div className="space-y-4 p-4 border rounded-lg">
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="sm" className="w-24" />
                    <Skeleton variant="outline" size="md" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="sm" className="w-20" />
                    <Skeleton variant="outline" size="md" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="outline" size="sm" className="w-28" />
                    <Skeleton variant="outline" size="md" className="w-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton variant="outline" size="sm" className="w-32" />
                    <Skeleton variant="outline" size="sm" className="w-12 h-6 rounded-full" />
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