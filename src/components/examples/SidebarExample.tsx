import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
  SidebarInput,
  SidebarInset,
  SidebarRail,
  SidebarTrigger,
} from '../Sidebar';
import { Button } from '../Button';
import { 
  Home, 
  Inbox, 
  Calendar, 
  Search, 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  Mail, 
  Bell,
  Plus,
  MoreHorizontal,
  Folder,
  Archive
} from 'lucide-react';

export const SidebarExample = () => {
  const [activeItem, setActiveItem] = useState('home');

  const mainMenuItems = [
    { id: 'home', title: 'Home', icon: Home },
    { id: 'inbox', title: 'Inbox', icon: Inbox, badge: '12' },
    { id: 'calendar', title: 'Calendar', icon: Calendar },
    { id: 'search', title: 'Search', icon: Search },
    { id: 'settings', title: 'Settings', icon: Settings },
  ];

  const projectMenuItems = [
    { id: 'project1', title: 'Project Alpha', icon: Folder },
    { id: 'project2', title: 'Project Beta', icon: Folder },
    { id: 'project3', title: 'Project Gamma', icon: Folder },
  ];

  const subMenuItems = [
    { id: 'sub1', title: 'Overview' },
    { id: 'sub2', title: 'Analytics' },
    { id: 'sub3', title: 'Reports' },
  ];

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Sidebar Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Sidebar Example */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Sidebar</h4>
            <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <SidebarProvider defaultOpen={true}>
                <Sidebar variant="primary" size="md" collapsible="offcanvas">
                  <SidebarHeader variant="primary" size="md">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">App Name</h3>
                        <p className="text-xs text-[var(--color-foreground-secondary)]">Dashboard</p>
                      </div>
                    </div>
                  </SidebarHeader>
                  <SidebarContent variant="primary" size="md">
                    <SidebarGroup variant="primary" size="md">
                      <SidebarGroupLabel variant="primary" size="md">Main Menu</SidebarGroupLabel>
                      <SidebarGroupContent variant="primary" size="md">
                        <SidebarMenu variant="primary" size="md">
                          {mainMenuItems.map((item) => (
                            <SidebarMenuItem key={item.id} variant="primary" size="md">
                              <SidebarMenuButton 
                                variant="primary" 
                                size="md"
                                isActive={activeItem === item.id}
                                onClick={() => setActiveItem(item.id)}
                                tooltip={item.title}
                              >
                                <item.icon className="w-4 h-4" />
                                <span>{item.title}</span>
                                {item.badge && (
                                  <SidebarMenuBadge variant="primary" size="md">
                                    {item.badge}
                                  </SidebarMenuBadge>
                                )}
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter variant="primary" size="md">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">User Name</p>
                        <p className="text-xs text-[var(--color-foreground-secondary)]">user@example.com</p>
                      </div>
                    </div>
                  </SidebarFooter>
                  <SidebarRail variant="primary" size="md" />
                </Sidebar>
                <SidebarInset variant="primary" size="md">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <SidebarTrigger variant="primary" size="md" />
                      <h3 className="text-lg font-semibold">Main Content</h3>
                    </div>
                    <p className="text-[var(--color-foreground-secondary)]">
                      This is the main content area. The sidebar can be toggled using the trigger button or keyboard shortcut (Ctrl/Cmd + B).
                    </p>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </div>

          {/* Icon Collapsible Sidebar */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Icon Collapsible Sidebar</h4>
            <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <SidebarProvider defaultOpen={true}>
                <Sidebar variant="secondary" size="md" collapsible="icon">
                  <SidebarHeader variant="secondary" size="md">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                    </div>
                  </SidebarHeader>
                  <SidebarContent variant="secondary" size="md">
                    <SidebarGroup variant="secondary" size="md">
                      <SidebarGroupLabel variant="secondary" size="md">Navigation</SidebarGroupLabel>
                      <SidebarGroupContent variant="secondary" size="md">
                        <SidebarMenu variant="secondary" size="md">
                          {mainMenuItems.slice(0, 3).map((item) => (
                            <SidebarMenuItem key={item.id} variant="secondary" size="md">
                              <SidebarMenuButton 
                                variant="secondary" 
                                size="md"
                                isActive={activeItem === item.id}
                                onClick={() => setActiveItem(item.id)}
                                tooltip={item.title}
                              >
                                <item.icon className="w-4 h-4" />
                                <span>{item.title}</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarRail variant="secondary" size="md" />
                </Sidebar>
                <SidebarInset variant="secondary" size="md">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <SidebarTrigger variant="secondary" size="md" />
                      <h3 className="text-lg font-semibold">Icon Mode</h3>
                    </div>
                    <p className="text-[var(--color-foreground-secondary)]">
                      This sidebar collapses to show only icons. Hover over icons to see tooltips.
                    </p>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </div>

          {/* Advanced Sidebar with Sub-menus */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Sidebar with Sub-menus</h4>
            <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <SidebarProvider defaultOpen={true}>
                <Sidebar variant="outline" size="md" collapsible="offcanvas">
                  <SidebarHeader variant="outline" size="md">
                    <div className="flex items-center gap-2 px-2">
                      <SidebarInput 
                        variant="outline" 
                        size="md" 
                        placeholder="Search..." 
                      />
                    </div>
                  </SidebarHeader>
                  <SidebarContent variant="outline" size="md">
                    <SidebarGroup variant="outline" size="md">
                      <SidebarGroupLabel variant="outline" size="md">Projects</SidebarGroupLabel>
                      <SidebarGroupContent variant="outline" size="md">
                        <SidebarMenu variant="outline" size="md">
                          {projectMenuItems.map((item) => (
                            <SidebarMenuItem key={item.id} variant="outline" size="md">
                              <SidebarMenuButton 
                                variant="outline" 
                                size="md"
                                isActive={activeItem === item.id}
                                onClick={() => setActiveItem(item.id)}
                              >
                                <item.icon className="w-4 h-4" />
                                <span>{item.title}</span>
                                <SidebarMenuAction variant="outline" size="md" showOnHover>
                                  <MoreHorizontal className="w-4 h-4" />
                                </SidebarMenuAction>
                              </SidebarMenuButton>
                              <SidebarMenuSub variant="outline" size="md">
                                {subMenuItems.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.id} variant="outline" size="md">
                                    <SidebarMenuSubButton 
                                      variant="outline" 
                                      size="md"
                                      isActive={activeItem === subItem.id}
                                      onClick={() => setActiveItem(subItem.id)}
                                    >
                                      <span>{subItem.title}</span>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                      <SidebarGroupAction variant="outline" size="md">
                        <Plus className="w-4 h-4" />
                      </SidebarGroupAction>
                    </SidebarGroup>
                    <SidebarSeparator variant="outline" size="md" />
                    <SidebarGroup variant="outline" size="md">
                      <SidebarGroupLabel variant="outline" size="md">Tools</SidebarGroupLabel>
                      <SidebarGroupContent variant="outline" size="md">
                        <SidebarMenu variant="outline" size="md">
                          <SidebarMenuItem variant="outline" size="md">
                            <SidebarMenuButton variant="outline" size="md">
                              <BarChart3 className="w-4 h-4" />
                              <span>Analytics</span>
                              <SidebarMenuBadge variant="outline" size="md">New</SidebarMenuBadge>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem variant="outline" size="md">
                            <SidebarMenuButton variant="outline" size="md">
                              <Mail className="w-4 h-4" />
                              <span>Messages</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem variant="outline" size="md">
                            <SidebarMenuButton variant="outline" size="md">
                              <Bell className="w-4 h-4" />
                              <span>Notifications</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarRail variant="outline" size="md" />
                </Sidebar>
                <SidebarInset variant="outline" size="md">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <SidebarTrigger variant="outline" size="md" />
                      <h3 className="text-lg font-semibold">Advanced Features</h3>
                    </div>
                    <p className="text-[var(--color-foreground-secondary)]">
                      This sidebar demonstrates advanced features like sub-menus, search input, badges, and hover actions.
                    </p>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </div>

          {/* Loading State Example */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Loading State</h4>
            <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <SidebarProvider defaultOpen={true}>
                <Sidebar variant="primary" size="md" collapsible="offcanvas">
                  <SidebarHeader variant="primary" size="md">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Loading App</h3>
                        <p className="text-xs text-[var(--color-foreground-secondary)]">Please wait...</p>
                      </div>
                    </div>
                  </SidebarHeader>
                  <SidebarContent variant="primary" size="md">
                    <SidebarGroup variant="primary" size="md">
                      <SidebarGroupLabel variant="primary" size="md">Loading Menu</SidebarGroupLabel>
                      <SidebarGroupContent variant="primary" size="md">
                        <SidebarMenu variant="primary" size="md">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <SidebarMenuItem key={index} variant="primary" size="md">
                              <SidebarMenuSkeleton variant="primary" size="md" showIcon />
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarRail variant="primary" size="md" />
                </Sidebar>
                <SidebarInset variant="primary" size="md">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <SidebarTrigger variant="primary" size="md" />
                      <h3 className="text-lg font-semibold">Loading State</h3>
                    </div>
                    <p className="text-[var(--color-foreground-secondary)]">
                      This demonstrates how the sidebar looks during loading with skeleton components.
                    </p>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </div>
          </div>

          {/* Right Sidebar Example */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Right Sidebar Example</h4>
            <div className="border rounded-lg overflow-hidden" style={{ height: '300px' }}>
              <SidebarProvider defaultOpen={true}>
                <SidebarInset variant="secondary" size="md">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Main Content Area</h3>
                    <p className="text-[var(--color-foreground-secondary)] mb-4">
                      This demonstrates a right-side sidebar layout. The sidebar appears on the right side of the screen.
                    </p>
                    <Button variant="primary" size="md">
                      Primary Action
                    </Button>
                  </div>
                </SidebarInset>
                <Sidebar variant="secondary" size="md" side="right" collapsible="offcanvas">
                  <SidebarHeader variant="secondary" size="md">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Properties</h3>
                        <p className="text-xs text-[var(--color-foreground-secondary)]">Panel</p>
                      </div>
                    </div>
                  </SidebarHeader>
                  <SidebarContent variant="secondary" size="md">
                    <SidebarGroup variant="secondary" size="md">
                      <SidebarGroupLabel variant="secondary" size="md">Properties</SidebarGroupLabel>
                      <SidebarGroupContent variant="secondary" size="md">
                        <SidebarMenu variant="secondary" size="md">
                          <SidebarMenuItem variant="secondary" size="md">
                            <SidebarMenuButton variant="secondary" size="md">
                              <FileText className="w-4 h-4" />
                              <span>Document Info</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem variant="secondary" size="md">
                            <SidebarMenuButton variant="secondary" size="md">
                              <Users className="w-4 h-4" />
                              <span>Collaborators</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem variant="secondary" size="md">
                            <SidebarMenuButton variant="secondary" size="md">
                              <Archive className="w-4 h-4" />
                              <span>History</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarRail variant="secondary" size="md" />
                </Sidebar>
              </SidebarProvider>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 