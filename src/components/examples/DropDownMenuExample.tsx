import {
  Calendar,
  Edit,
  FileText,
  Plus,
  Settings,
  Star,
  Trash2,
  Users,
  Search,
  MessageSquare,
  Info,
  AlertCircle,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSubTrigger,
} from "../DropdownMenu";
import { Button } from "../ui/button";

export const DropDownMenuExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom DropdownMenu Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom DropdownMenu Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic DropdownMenu Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic DropdownMenu Examples
              </h4>
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Primary Variant</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    variant="primary"
                    className="w-56"
                    align="start"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Secondary Variant</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    variant="secondary"
                    className="w-56"
                    align="start"
                  >
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem variant="success">
                        <Star className="mr-2 h-4 w-4" />
                        Favorite
                      </DropdownMenuItem>
                      <DropdownMenuItem variant="info">
                        <Info className="mr-2 h-4 w-4" />
                        Info
                      </DropdownMenuItem>
                      <DropdownMenuItem variant="warning">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Warning
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Outline Variant</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    variant="outline"
                    className="w-56"
                    align="start"
                  >
                    <DropdownMenuLabel>Theme Options</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Light Mode</DropdownMenuItem>
                      <DropdownMenuItem>Dark Mode</DropdownMenuItem>
                      <DropdownMenuItem>System</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* DropdownMenu with Submenu */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                DropdownMenu with Submenu
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open with Submenu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* DropdownMenu with Checkboxes */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                DropdownMenu with Checkboxes
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Appearance Settings</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem disabled>Activity Bar</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Sidebar</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* DropdownMenu with Radio Group */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                DropdownMenu with Radio Group
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Panel Position</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="bottom">
                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* DropdownMenu with Icons */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                DropdownMenu with Icons
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>Application Settings</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      Users
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      Documents
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Messages
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Interactive DropdownMenu */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive DropdownMenu
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="hover:scale-105 transition-transform"
                  >
                    Interactive Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      <Plus className="mr-2 h-4 w-4" />
                      Create New
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Custom Styled DropdownMenu */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Custom Styled DropdownMenu
              </h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                  >
                    Custom Styled
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-blue-200 shadow-xl"
                  align="start"
                >
                  <DropdownMenuLabel className="text-blue-800 font-bold">
                    Premium Features
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-blue-100 hover:text-blue-800 transition-colors">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Premium Feature 1
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-100 hover:text-blue-800 transition-colors">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Premium Feature 2
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-100 hover:text-blue-800 transition-colors">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Premium Feature 3
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
