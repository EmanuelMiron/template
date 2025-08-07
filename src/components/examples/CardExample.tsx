import { Button } from "../Button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
} from "../Card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Input } from "../Input";

export const CardExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Card Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Card Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Card Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Card Examples
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card variant="primary" className="w-full">
                  <CardHeader>
                    <CardTitle>Primary Card</CardTitle>
                    <CardDescription>
                      This is a primary variant card with default styling.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Primary cards use the main background color and have
                      subtle shadows.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="secondary" className="w-full">
                  <CardHeader>
                    <CardTitle>Secondary Card</CardTitle>
                    <CardDescription>
                      This is a secondary variant card with alternative styling.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Secondary cards use a different background color for
                      variety.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="outline" className="w-full">
                  <CardHeader>
                    <CardTitle>Outline Card</CardTitle>
                    <CardDescription>
                      This is an outline variant card with minimal styling.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Outline cards have transparent backgrounds with borders.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="elevated" className="w-full">
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>
                      This is an elevated variant card with prominent shadows.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Elevated cards have stronger shadows for emphasis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card cardSize="sm" variant="primary" className="w-full">
                  <CardHeader>
                    <CardTitle titleSize="sm">Small Card</CardTitle>
                    <CardDescription>
                      Compact card with minimal padding.
                    </CardDescription>
                  </CardHeader>
                  <CardContent padding="sm">
                    <p className="text-sm text-muted-foreground">
                      Perfect for dense layouts and sidebars.
                    </p>
                  </CardContent>
                </Card>

                <Card cardSize="md" variant="secondary" className="w-full">
                  <CardHeader>
                    <CardTitle titleSize="md">Medium Card</CardTitle>
                    <CardDescription>
                      Standard card with balanced padding.
                    </CardDescription>
                  </CardHeader>
                  <CardContent padding="md">
                    <p className="text-sm text-muted-foreground">
                      The default size for most use cases.
                    </p>
                  </CardContent>
                </Card>

                <Card cardSize="lg" variant="outline" className="w-full">
                  <CardHeader>
                    <CardTitle titleSize="lg">Large Card</CardTitle>
                    <CardDescription>
                      Spacious card with generous padding.
                    </CardDescription>
                  </CardHeader>
                  <CardContent padding="lg">
                    <p className="text-sm text-muted-foreground">
                      Great for featured content and hero sections.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Login Form Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Login Form Example</h4>
              <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your email below to login to your account
                  </CardDescription>
                  <CardAction>
                    <Button variant="secondary">Sign Up</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <label
                            htmlFor="password"
                            className="text-sm font-medium"
                          >
                            Password
                          </label>
                          <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Product Card Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Product Card Example
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" className="w-full overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      Product Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Widget</CardTitle>
                    <CardDescription>
                      High-quality widget with advanced features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$99.99</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm">4.8 (120 reviews)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>

                <Card variant="outline" className="w-full overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      Product Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>Standard Widget</CardTitle>
                    <CardDescription>
                      Reliable widget for everyday use
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$49.99</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm">4.5 (85 reviews)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>

                <Card variant="secondary" className="w-full overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      Product Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>Basic Widget</CardTitle>
                    <CardDescription>
                      Simple widget for basic needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$19.99</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm">4.2 (45 reviews)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Stats Card Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Stats Card Example</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="primary" className="w-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Total Revenue
                        </p>
                        <p className="text-2xl font-bold">$45,231.89</p>
                      </div>
                      <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">↑</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card variant="secondary" className="w-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Subscriptions
                        </p>
                        <p className="text-2xl font-bold">+2350</p>
                      </div>
                      <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">↑</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card variant="outline" className="w-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Sales
                        </p>
                        <p className="text-2xl font-bold">+12,234</p>
                      </div>
                      <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">↑</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card variant="elevated" className="w-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Active Now
                        </p>
                        <p className="text-2xl font-bold">+573</p>
                      </div>
                      <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">↑</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Feature Card Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Feature Card Example
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="primary" className="w-full">
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <CardTitle>Fast Performance</CardTitle>
                    <CardDescription>
                      Lightning-fast loading times and smooth interactions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Optimized for speed with advanced caching and compression
                      techniques.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="secondary" className="w-full">
                  <CardHeader>
                    <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl">🔒</span>
                    </div>
                    <CardTitle>Secure by Default</CardTitle>
                    <CardDescription>
                      Enterprise-grade security with encryption at rest and in
                      transit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Built with security best practices and regular security
                      audits.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="outline" className="w-full">
                  <CardHeader>
                    <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <CardTitle>Easy Integration</CardTitle>
                    <CardDescription>
                      Simple APIs and comprehensive documentation for quick
                      setup.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get up and running in minutes with our developer-friendly
                      tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Interactive Card Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Card Example
              </h4>
              <Card
                variant="elevated"
                className="w-full max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>
                    Hover over this card to see the interaction effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card demonstrates hover effects and smooth transitions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Click Me</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
