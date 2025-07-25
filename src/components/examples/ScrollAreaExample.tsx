import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  ScrollArea,
  ScrollBar,
} from '../ScrollArea';

// Sample data for examples
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const artworks = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Marcus Cramer",
    art: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Lukas Rychvalsky",
    art: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Annie Spratt",
    art: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80",
  },
];

export const ScrollAreaExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">ScrollArea Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Vertical Scroll */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Vertical Scroll</h4>
            <ScrollArea
              variant="primary"
              size="md"
              className="h-72 w-48"
            >
              <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium text-[var(--color-foreground)]">Tags</h4>
                {tags.map((tag) => (
                  <React.Fragment key={tag}>
                    <div className="text-sm text-[var(--color-foreground)]">{tag}</div>
                    <div className="my-2 h-px bg-[var(--color-outline-border)]" />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Horizontal Scroll */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horizontal Scroll</h4>
            <ScrollArea
              variant="secondary"
              size="md"
              className="w-96 whitespace-nowrap"
            >
              <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="text-[var(--color-foreground-secondary)] pt-2 text-xs">
                      Photo by{" "}
                      <span className="text-[var(--color-foreground)] font-semibold">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" variant="secondary" size="md" />
            </ScrollArea>
          </div>

          {/* Variant Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Variant Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <ScrollArea
                  variant="primary"
                  size="md"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Primary Scroll Area</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <ScrollArea
                  variant="secondary"
                  size="md"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Secondary Scroll Area</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <ScrollArea
                  variant="outline"
                  size="md"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Outline Scroll Area</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <ScrollArea
                  variant="primary"
                  size="sm"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Small Scroll Bar</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <ScrollArea
                  variant="secondary"
                  size="md"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Medium Scroll Bar</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <ScrollArea
                  variant="outline"
                  size="lg"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Large Scroll Bar</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Scroll Type Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Scroll Type Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Auto Type (Default)</h5>
                <ScrollArea
                  variant="primary"
                  size="md"
                  type="auto"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Auto Scroll</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Always Visible</h5>
                <ScrollArea
                  variant="secondary"
                  size="md"
                  type="always"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Always Visible Scroll</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Hover Type</h5>
                <ScrollArea
                  variant="outline"
                  size="md"
                  type="hover"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Hover to Show Scroll</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Custom Scroll Bar</h5>
                <ScrollArea
                  variant="primary"
                  size="md"
                  className="h-48 w-full"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Custom Styled Scroll</h4>
                    <p className="text-sm text-[var(--color-foreground-secondary)]">{longText}</p>
                  </div>
                  <ScrollBar variant="outline" size="lg" />
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Horizontal with Custom Bar</h5>
                <ScrollArea
                  variant="secondary"
                  size="md"
                  className="w-96 whitespace-nowrap"
                >
                  <div className="flex w-max space-x-4 p-4">
                    {artworks.slice(0, 3).map((artwork) => (
                      <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={artwork.art}
                            alt={`Photo by ${artwork.artist}`}
                            className="aspect-[3/4] h-fit w-fit object-cover"
                            width={300}
                            height={400}
                          />
                        </div>
                        <figcaption className="text-[var(--color-foreground-secondary)] pt-2 text-xs">
                          Photo by{" "}
                          <span className="text-[var(--color-foreground)] font-semibold">
                            {artwork.artist}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" variant="primary" size="md" />
                </ScrollArea>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Code Editor Sidebar</h5>
                <ScrollArea
                  variant="primary"
                  size="md"
                  className="h-64 w-64 border rounded-lg"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">File Explorer</h4>
                    <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                      <div className="flex items-center space-x-2">
                        <span>📁</span>
                        <span>src/</span>
                      </div>
                      <div className="ml-4 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span>📄</span>
                          <span>App.tsx</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>📄</span>
                          <span>index.tsx</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>📁</span>
                          <span>components/</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span>📄</span>
                            <span>Button.tsx</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📄</span>
                            <span>Input.tsx</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📄</span>
                            <span>ScrollArea.tsx</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>📁</span>
                          <span>examples/</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span>📄</span>
                            <span>ButtonExample.tsx</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📄</span>
                            <span>ScrollAreaExample.tsx</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📁</span>
                        <span>public/</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📄</span>
                        <span>package.json</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📄</span>
                        <span>README.md</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Chat Messages</h5>
                <ScrollArea
                  variant="secondary"
                  size="md"
                  className="h-64 w-full border rounded-lg"
                >
                  <div className="p-4 space-y-4">
                    <h4 className="text-sm font-medium text-[var(--color-foreground)]">Chat History</h4>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="flex space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-medium">
                          {i % 2 === 0 ? 'U' : 'A'}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-[var(--color-foreground-secondary)] mb-1">
                            {i % 2 === 0 ? 'User' : 'Assistant'} • {new Date(Date.now() - i * 60000).toLocaleTimeString()}
                          </div>
                          <div className="text-sm text-[var(--color-foreground)] bg-[var(--color-background-secondary)] p-2 rounded-lg">
                            {i % 2 === 0 
                              ? `This is message ${i + 1} from the user. It contains some sample text to demonstrate scrolling.`
                              : `This is response ${i + 1} from the assistant. It provides a helpful reply to the user's message.`
                            }
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Image Gallery</h5>
                <ScrollArea
                  variant="outline"
                  size="md"
                  className="w-full whitespace-nowrap"
                >
                  <div className="flex w-max space-x-4 p-4">
                    {artworks.map((artwork, index) => (
                      <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded-lg border">
                          <img
                            src={artwork.art}
                            alt={`Photo by ${artwork.artist}`}
                            className="aspect-[3/4] h-fit w-fit object-cover"
                            width={200}
                            height={267}
                          />
                        </div>
                        <figcaption className="text-[var(--color-foreground-secondary)] pt-2 text-xs text-center">
                          Photo {index + 1} by{" "}
                          <span className="text-[var(--color-foreground)] font-semibold">
                            {artwork.artist}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" variant="outline" size="md" />
                </ScrollArea>
              </div>

              <div>
                <h5 className="font-medium mb-2">Settings Panel</h5>
                <ScrollArea
                  variant="primary"
                  size="md"
                  className="h-64 w-full border rounded-lg"
                >
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium text-[var(--color-foreground)]">Settings</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Appearance</h5>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Theme: Dark</div>
                          <div>Font Size: Medium</div>
                          <div>Animations: Enabled</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Notifications</h5>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Email: Enabled</div>
                          <div>Push: Disabled</div>
                          <div>Sound: Enabled</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Privacy</h5>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Data Collection: Limited</div>
                          <div>Analytics: Disabled</div>
                          <div>Location: Never</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-[var(--color-foreground)] mb-2">Advanced</h5>
                        <div className="space-y-2 text-sm text-[var(--color-foreground-secondary)]">
                          <div>Debug Mode: Off</div>
                          <div>Auto Update: Enabled</div>
                          <div>Backup: Daily</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 