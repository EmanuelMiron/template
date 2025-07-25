import React from 'react';
import { CalendarIcon, User, Star, Heart, MessageCircle, Share2, Github, Twitter, Linkedin } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../HoverCard';
import Button from '../Button';
import { Button as ShadButton } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const HoverCardExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">HoverCard Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic HoverCard Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic HoverCard Examples</h4>
            <div className="space-y-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <ShadButton variant="link" className="p-0 h-auto font-normal">
                    @nextjs
                  </ShadButton>
                </HoverCardTrigger>
                <HoverCardContent variant="primary" size="md">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined December 2021
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <ShadButton variant="link" className="p-0 h-auto font-normal">
                    @shadcn
                  </ShadButton>
                </HoverCardTrigger>
                <HoverCardContent variant="secondary" size="md">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined January 2023
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <ShadButton variant="link" className="p-0 h-auto font-normal">
                    @react
                  </ShadButton>
                </HoverCardTrigger>
                <HoverCardContent variant="outline" size="md">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/facebook.png" />
                      <AvatarFallback>FB</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@react</h4>
                      <p className="text-sm">
                        The library for web and native user interfaces.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined May 2013
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Small HoverCard
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="primary" size="sm">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Small Content</h4>
                    <p className="text-xs text-muted-foreground">
                      This is a small hover card with minimal content.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="md">
                    Medium HoverCard
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="secondary" size="md">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Medium Content</h4>
                    <p className="text-sm text-muted-foreground">
                      This is a medium-sized hover card with standard content.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>Updated 2 hours ago</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="lg">
                    Large HoverCard
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="outline" size="lg">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Large Content</h4>
                    <p className="text-sm text-muted-foreground">
                      This is a large hover card with detailed content and multiple sections.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>4.8/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>1.2k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>234</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="lg">
                    Extra Large HoverCard
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="primary" size="xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold">Vercel</h4>
                        <p className="text-xs text-muted-foreground">@vercel</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Github className="h-3 w-3" />
                        <span>GitHub</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Twitter className="h-3 w-3" />
                        <span>Twitter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Linkedin className="h-3 w-3" />
                        <span>LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* User Profile HoverCard */}
          <div>
            <h4 className="font-semibold text-lg mb-4">User Profile HoverCard</h4>
            <HoverCard>
              <HoverCardTrigger asChild>
                <ShadButton variant="link" className="p-0 h-auto font-normal">
                  <User className="w-4 h-4 mr-2" />
                  John Doe
                </ShadButton>
              </HoverCardTrigger>
              <HoverCardContent variant="primary" size="lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/johndoe.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Passionate about creating amazing user experiences with React and TypeScript.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>5.0 rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>Usually responds in 2 hours</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Product HoverCard */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product HoverCard</h4>
            <HoverCard>
              <HoverCardTrigger asChild>
                <ShadButton variant="link" className="p-0 h-auto font-normal">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Premium Calendar
                </ShadButton>
              </HoverCardTrigger>
              <HoverCardContent variant="secondary" size="lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Premium Calendar</h4>
                      <p className="text-xs text-muted-foreground">$29/month</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced calendar with team collaboration, analytics, and custom integrations.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>4.9 (2.1k reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      <span>Free trial available</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Alignment Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Alignment Examples</h4>
            <div className="space-y-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Start Aligned
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="primary" size="sm" align="start">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Start Aligned</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card aligns to the start.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Center Aligned
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="secondary" size="sm" align="center">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Center Aligned</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card aligns to the center (default).
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    End Aligned
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="outline" size="sm" align="end">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">End Aligned</h4>
                    <p className="text-xs text-muted-foreground">
                      This hover card aligns to the end.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Custom Delay Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Custom Delay Examples</h4>
            <div className="space-y-4">
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Fast Response
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="primary" size="sm">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Fast Response</h4>
                    <p className="text-xs text-muted-foreground">
                      Opens and closes quickly (100ms delay).
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard openDelay={1000} closeDelay={500}>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Slow Response
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent variant="secondary" size="sm">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Slow Response</h4>
                    <p className="text-xs text-muted-foreground">
                      Takes longer to open and close (1000ms open, 500ms close).
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="primary" size="md">
                  Try Different Variants
                </Button>
              </HoverCardTrigger>
              <HoverCardContent variant="primary" size="lg">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">HoverCard Variants Demo</h4>
                  <p className="text-sm text-muted-foreground">
                    This hover card shows how different variants look and feel.
                  </p>
                  <div className="space-y-2">
                    <div className="p-2 border rounded bg-background">
                      <h5 className="text-xs font-medium mb-1">Primary Variant</h5>
                      <p className="text-xs text-muted-foreground">
                        Clean, modern design with primary color accents.
                      </p>
                    </div>
                    <div className="p-2 border rounded bg-secondary/20">
                      <h5 className="text-xs font-medium mb-1">Secondary Variant</h5>
                      <p className="text-xs text-muted-foreground">
                        Alternative styling with secondary color scheme.
                      </p>
                    </div>
                    <div className="p-2 border rounded bg-outline/20">
                      <h5 className="text-xs font-medium mb-1">Outline Variant</h5>
                      <p className="text-xs text-muted-foreground">
                        Subtle design with outline borders and minimal styling.
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 