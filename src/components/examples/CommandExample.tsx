import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../Command";
import { useEffect, useState } from "react";

export const CommandExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Command Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Command Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Command Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Command Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Basic Command Palette</h5>
                  <CommandDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Command with Different Sizes
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Small Size:
                      </p>
                      <Command
                        commandSize="sm"
                        className="rounded-lg border shadow-md"
                      >
                        <CommandInput
                          placeholder="Type a command or search..."
                          inputSize="sm"
                        />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>
                              <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                              <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem disabled>
                              <span>Calculator</span>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Large Size:
                      </p>
                      <Command
                        commandSize="lg"
                        className="rounded-lg border shadow-md"
                      >
                        <CommandInput
                          placeholder="Type a command or search..."
                          inputSize="lg"
                        />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>
                              <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                              <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem disabled>
                              <span>Calculator</span>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variant Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Variant Examples</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Primary Variant:
                  </p>
                  <Command
                    variant="primary"
                    className="rounded-lg border shadow-md"
                  >
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <span>Primary Option 1</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Primary Option 2</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Secondary Variant:
                  </p>
                  <Command
                    variant="secondary"
                    className="rounded-lg border shadow-md"
                  >
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <span>Secondary Option 1</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Secondary Option 2</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Outline Variant:
                  </p>
                  <Command
                    variant="outline"
                    className="rounded-lg border shadow-md"
                  >
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <span>Outline Option 1</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Outline Option 2</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              </div>
            </div>

            {/* Advanced Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Command with Icons and Shortcuts
                  </h5>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <Calendar className="h-4 w-4" />
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <Smile className="h-4 w-4" />
                          <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem disabled>
                          <Calculator className="h-4 w-4" />
                          <span>Calculator</span>
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Settings">
                        <CommandItem>
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                          <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          <CreditCard className="h-4 w-4" />
                          <span>Billing</span>
                          <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                          <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Command Dialog</h5>
                  <CommandDialogDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Command Menu with Keyboard Shortcut
                  </h5>
                  <CommandMenuDemo />
                </div>
              </div>
            </div>

            {/* Interactive Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Command with Many Options
                  </h5>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Search through many options..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="All Options">
                        {Array.from({ length: 20 }, (_, i) => (
                          <CommandItem key={i}>
                            <span>Option {i + 1}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Command Demo Component
const CommandDemo = () => {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator className="h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

// Command Dialog Demo Component
const CommandDialogDemo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-muted-foreground text-sm mb-4">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command dialog
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

// Command Menu Demo Component
const CommandMenuDemo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-muted-foreground text-sm mb-4">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
