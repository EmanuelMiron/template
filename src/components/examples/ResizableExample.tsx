import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../Resizable';

export const ResizableExample = () => {
  const [layout, setLayout] = useState<number[]>([50, 50]);

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Resizable Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Horizontal Layout */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Horizontal Layout</h4>
            <ResizablePanelGroup
              variant="primary"
              size="md"
              direction="horizontal"
              className="max-w-md rounded-lg border md:min-w-[450px]"
              onLayout={setLayout}
            >
              <ResizablePanel
                variant="primary"
                size="md"
                defaultSize={50}
                className="p-4"
              >
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                  <span className="font-semibold text-[var(--color-foreground)]">Panel One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle variant="primary" size="md" />
              <ResizablePanel
                variant="primary"
                size="md"
                defaultSize={50}
                className="p-4"
              >
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                  <span className="font-semibold text-[var(--color-foreground)]">Panel Two</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className="mt-2 text-sm text-[var(--color-foreground-secondary)]">
              Layout: {layout.map((size) => `${Math.round(size)}%`).join(' | ')}
            </div>
          </div>

          {/* Vertical Layout */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Vertical Layout</h4>
            <ResizablePanelGroup
              variant="secondary"
              size="md"
              direction="vertical"
              className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
            >
              <ResizablePanel
                variant="secondary"
                size="md"
                defaultSize={25}
                className="p-4"
              >
                <div className="flex h-full items-center justify-center p-6 bg-[var(--color-background)] rounded">
                  <span className="font-semibold text-[var(--color-foreground)]">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle variant="secondary" size="md" />
              <ResizablePanel
                variant="secondary"
                size="md"
                defaultSize={75}
                className="p-4"
              >
                <div className="flex h-full items-center justify-center p-6 bg-[var(--color-background)] rounded">
                  <span className="font-semibold text-[var(--color-foreground)]">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          {/* Complex Nested Layout */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Complex Nested Layout</h4>
            <ResizablePanelGroup
              variant="outline"
              size="md"
              direction="horizontal"
              className="max-w-md rounded-lg border md:min-w-[450px]"
            >
              <ResizablePanel
                variant="outline"
                size="md"
                defaultSize={50}
                className="p-4"
              >
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                  <span className="font-semibold text-[var(--color-foreground)]">Main Panel</span>
                </div>
              </ResizablePanel>
              <ResizableHandle variant="outline" size="md" withHandle />
              <ResizablePanel
                variant="outline"
                size="md"
                defaultSize={50}
                className="p-4"
              >
                <ResizablePanelGroup
                  variant="outline"
                  size="md"
                  direction="vertical"
                >
                  <ResizablePanel
                    variant="outline"
                    size="md"
                    defaultSize={25}
                    className="p-2"
                  >
                    <div className="flex h-full items-center justify-center p-4 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-sm">Top</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="outline" size="md" />
                  <ResizablePanel
                    variant="outline"
                    size="md"
                    defaultSize={75}
                    className="p-2"
                  >
                    <div className="flex h-full items-center justify-center p-4 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-sm">Bottom</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          {/* Handle Variants */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Handle Variants</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Primary Handle</h5>
                <ResizablePanelGroup
                  variant="primary"
                  size="sm"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="primary"
                    size="sm"
                    defaultSize={25}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Sidebar</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="primary" size="sm" withHandle />
                  <ResizablePanel
                    variant="primary"
                    size="sm"
                    defaultSize={75}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Content</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Handle</h5>
                <ResizablePanelGroup
                  variant="secondary"
                  size="md"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="secondary"
                    size="md"
                    defaultSize={30}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Panel A</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="secondary" size="md" withHandle />
                  <ResizablePanel
                    variant="secondary"
                    size="md"
                    defaultSize={70}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Panel B</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Handle</h5>
                <ResizablePanelGroup
                  variant="outline"
                  size="lg"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="outline"
                    size="lg"
                    defaultSize={40}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Left</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="outline" size="lg" withHandle />
                  <ResizablePanel
                    variant="outline"
                    size="lg"
                    defaultSize={60}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Right</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <ResizablePanelGroup
                  variant="primary"
                  size="sm"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="primary"
                    size="sm"
                    defaultSize={50}
                    className="p-2"
                  >
                    <div className="flex h-[120px] items-center justify-center p-4 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-sm">Small</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="primary" size="sm" />
                  <ResizablePanel
                    variant="primary"
                    size="sm"
                    defaultSize={50}
                    className="p-2"
                  >
                    <div className="flex h-[120px] items-center justify-center p-4 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-sm">Panel</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <ResizablePanelGroup
                  variant="secondary"
                  size="lg"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="secondary"
                    size="lg"
                    defaultSize={50}
                    className="p-6"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-lg">Large</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="secondary" size="lg" withHandle />
                  <ResizablePanel
                    variant="secondary"
                    size="lg"
                    defaultSize={50}
                    className="p-6"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)] text-lg">Panel</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Features</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Collapsible Panel</h5>
                <ResizablePanelGroup
                  variant="outline"
                  size="md"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="outline"
                    size="md"
                    defaultSize={25}
                    collapsible
                    collapsedSize={5}
                    minSize={5}
                    maxSize={50}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Collapsible</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="outline" size="md" withHandle />
                  <ResizablePanel
                    variant="outline"
                    size="md"
                    defaultSize={75}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Main Content</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Disabled Handle</h5>
                <ResizablePanelGroup
                  variant="primary"
                  size="md"
                  direction="horizontal"
                  className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                  <ResizablePanel
                    variant="primary"
                    size="md"
                    defaultSize={50}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Fixed Panel</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="primary" size="md" disabled />
                  <ResizablePanel
                    variant="primary"
                    size="md"
                    defaultSize={50}
                    className="p-4"
                  >
                    <div className="flex h-[150px] items-center justify-center p-6 bg-[var(--color-background-secondary)] rounded">
                      <span className="font-semibold text-[var(--color-foreground)]">Fixed Panel</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Code Editor Layout</h5>
                <ResizablePanelGroup
                  variant="primary"
                  size="md"
                  direction="horizontal"
                  className="h-[300px] rounded-lg border"
                >
                  <ResizablePanel
                    variant="primary"
                    size="md"
                    defaultSize={20}
                    minSize={15}
                    maxSize={40}
                    className="p-2"
                  >
                    <div className="h-full bg-[var(--color-background-secondary)] rounded p-4">
                      <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">File Explorer</div>
                      <div className="space-y-1 text-xs text-[var(--color-foreground-secondary)]">
                        <div>📁 src/</div>
                        <div className="ml-2">📄 App.tsx</div>
                        <div className="ml-2">📄 index.tsx</div>
                        <div>📁 components/</div>
                        <div className="ml-2">📄 Button.tsx</div>
                        <div className="ml-2">📄 Input.tsx</div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="primary" size="md" withHandle />
                  <ResizablePanel
                    variant="primary"
                    size="md"
                    defaultSize={80}
                    className="p-2"
                  >
                    <ResizablePanelGroup
                      variant="primary"
                      size="md"
                      direction="vertical"
                    >
                      <ResizablePanel
                        variant="primary"
                        size="md"
                        defaultSize={70}
                        className="p-2"
                      >
                        <div className="h-full bg-[var(--color-background)] rounded p-4">
                          <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">Editor</div>
                          <div className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                            <div>function App() {'{'}</div>
                            <div className="ml-4">return (</div>
                            <div className="ml-8">&lt;div&gt;</div>
                            <div className="ml-12">Hello World</div>
                            <div className="ml-8">&lt;/div&gt;</div>
                            <div className="ml-4">);</div>
                            <div>{'}'}</div>
                          </div>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle variant="primary" size="md" />
                      <ResizablePanel
                        variant="primary"
                        size="md"
                        defaultSize={30}
                        className="p-2"
                      >
                        <div className="h-full bg-[var(--color-background-secondary)] rounded p-4">
                          <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">Terminal</div>
                          <div className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                            <div>$ npm start</div>
                            <div>Starting development server...</div>
                            <div>Local: http://localhost:3000</div>
                          </div>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>

              <div>
                <h5 className="font-medium mb-2">Dashboard Layout</h5>
                <ResizablePanelGroup
                  variant="secondary"
                  size="md"
                  direction="vertical"
                  className="h-[300px] rounded-lg border"
                >
                  <ResizablePanel
                    variant="secondary"
                    size="md"
                    defaultSize={20}
                    minSize={15}
                    className="p-2"
                  >
                    <div className="h-full bg-[var(--color-background)] rounded p-4">
                      <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">Header</div>
                      <div className="text-xs text-[var(--color-foreground-secondary)]">
                        Dashboard • Analytics • Reports
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle variant="secondary" size="md" />
                  <ResizablePanel
                    variant="secondary"
                    size="md"
                    defaultSize={80}
                    className="p-2"
                  >
                    <ResizablePanelGroup
                      variant="secondary"
                      size="md"
                      direction="horizontal"
                    >
                      <ResizablePanel
                        variant="secondary"
                        size="md"
                        defaultSize={60}
                        className="p-2"
                      >
                        <div className="h-full bg-[var(--color-background-secondary)] rounded p-4">
                          <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">Main Content</div>
                          <div className="text-xs text-[var(--color-foreground-secondary)]">
                            Charts, graphs, and main dashboard content
                          </div>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle variant="secondary" size="md" withHandle />
                      <ResizablePanel
                        variant="secondary"
                        size="md"
                        defaultSize={40}
                        className="p-2"
                      >
                        <div className="h-full bg-[var(--color-background)] rounded p-4">
                          <div className="text-sm font-medium text-[var(--color-foreground)] mb-2">Sidebar</div>
                          <div className="text-xs text-[var(--color-foreground-secondary)]">
                            Quick actions and filters
                          </div>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 