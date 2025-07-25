import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../Breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../DropdownMenu";

export const BreadcrumbsExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Breadcrumb Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Breadcrumb Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Breadcrumb Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Breadcrumb Examples
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Primary Variant</h5>
                  <Breadcrumb variant="primary">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">
                          Components
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">
                    Secondary Variant
                  </h5>
                  <Breadcrumb variant="secondary">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/docs">
                          Documentation
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Getting Started</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Outline Variant</h5>
                  <Breadcrumb variant="outline">
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/projects">
                          Projects
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Project Details</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </div>

            {/* Breadcrumb with Custom Separator */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Breadcrumb with Custom Separator
              </h4>
              <Breadcrumb variant="primary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Breadcrumb with Ellipsis */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Breadcrumb with Ellipsis
              </h4>
              <Breadcrumb variant="primary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Deep Navigation Breadcrumb */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Deep Navigation Breadcrumb
              </h4>
              <Breadcrumb variant="secondary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/admin/users/123">
                      User Details
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Edit Profile</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* E-commerce Breadcrumb */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                E-commerce Breadcrumb
              </h4>
              <Breadcrumb variant="outline">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/shop/electronics">
                      Electronics
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/shop/electronics/phones">
                      Phones
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Documentation Breadcrumb */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Documentation Breadcrumb
              </h4>
              <Breadcrumb variant="primary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components/ui">
                      UI Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Interactive Breadcrumb */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Breadcrumb
              </h4>
              <Breadcrumb variant="primary" className="cursor-pointer">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="hover:underline transition-all duration-200"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/dashboard"
                      className="hover:underline transition-all duration-200"
                    >
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold">
                      Analytics
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Breadcrumb with Dropdown */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Breadcrumb with Dropdown
              </h4>
              <Breadcrumb variant="primary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1">
                        <BreadcrumbEllipsis className="size-4" />
                        <span className="sr-only">Toggle menu</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Breadcrumb with Dropdown Menu */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Breadcrumb with Dropdown Menu
              </h4>
              <Breadcrumb variant="secondary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5">
                        Components
                        <ChevronRight className="rotate-90" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Examples</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/*  Styled Breadcrumb */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Styled Breadcrumb</h4>
              <Breadcrumb
                variant="outline"
                className="bg-muted p-3 rounded-lg border"
              >
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/settings"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Settings
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold text-primary">
                      Account
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
