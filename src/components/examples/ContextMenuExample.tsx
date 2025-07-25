import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/Collapsible";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ContextMenu";
import { Clipboard, Copy, Edit, Trash2 } from "lucide-react";

export const ContextMenuExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom ContextMenu Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom ContextMenu Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic ContextMenu Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic ContextMenu Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Basic Context Menu</h5>
                  <ContextMenuDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Context Menu with Different Sizes
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Small Size:
                      </p>
                      <ContextMenu>
                        <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                          Right click here (Small)
                        </ContextMenuTrigger>
                        <ContextMenuContent menuSize="sm" variant="primary">
                          <ContextMenuItem>
                            <span>Small Option 1</span>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <span>Small Option 2</span>
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem variant="destructive">
                            <span>Delete</span>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Large Size:
                      </p>
                      <ContextMenu>
                        <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                          Right click here (Large)
                        </ContextMenuTrigger>
                        <ContextMenuContent menuSize="lg" variant="primary">
                          <ContextMenuItem>
                            <span>Large Option 1</span>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <span>Large Option 2</span>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <span>Large Option 3</span>
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem variant="destructive">
                            <span>Delete</span>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
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
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here (Primary)
                    </ContextMenuTrigger>
                    <ContextMenuContent variant="primary">
                      <ContextMenuItem>
                        <span>Primary Option 1</span>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <span>Primary Option 2</span>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Secondary Variant:
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here (Secondary)
                    </ContextMenuTrigger>
                    <ContextMenuContent variant="secondary">
                      <ContextMenuItem>
                        <span>Secondary Option 1</span>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <span>Secondary Option 2</span>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Outline Variant:
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here (Outline)
                    </ContextMenuTrigger>
                    <ContextMenuContent variant="outline">
                      <ContextMenuItem>
                        <span>Outline Option 1</span>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <span>Outline Option 2</span>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
              </div>
            </div>

            {/* Advanced Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Context Menu with All Features
                  </h5>
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here for full menu
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-52">
                      <ContextMenuItem inset>
                        Back
                        <ContextMenuShortcut>
                          ⌘[
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem inset disabled>
                        Forward
                        <ContextMenuShortcut>
                          ⌘]
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem inset>
                        Reload
                        <ContextMenuShortcut>
                          ⌘R
                        </ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuSub>
                        <ContextMenuSubTrigger inset>
                          More Tools
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-44">
                          <ContextMenuItem>
                            Save Page...
                          </ContextMenuItem>
                          <ContextMenuItem>
                            Create Shortcut...
                          </ContextMenuItem>
                          <ContextMenuItem>
                            Name Window...
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem>
                            Developer Tools
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem variant="destructive">
                            Delete
                          </ContextMenuItem>
                        </ContextMenuSubContent>
                      </ContextMenuSub>
                      <ContextMenuSeparator />
                      <ContextMenuCheckboxItem checked>
                        Show Bookmarks
                      </ContextMenuCheckboxItem>
                      <ContextMenuCheckboxItem>
                        Show Full URLs
                      </ContextMenuCheckboxItem>
                      <ContextMenuSeparator />
                      <ContextMenuRadioGroup value="pedro">
                        <ContextMenuLabel inset>
                          People
                        </ContextMenuLabel>
                        <ContextMenuRadioItem value="pedro">
                          Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="colm">
                          Colm Tuite
                        </ContextMenuRadioItem>
                      </ContextMenuRadioGroup>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Context Menu with Icons</h5>
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here (with icons)
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <Clipboard className="h-4 w-4" />
                        <span>Paste</span>
                      </ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem variant="destructive">
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
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
                  <h5 className="font-medium mb-2">Context Menu with State</h5>
                  <ContextMenuDemo />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// ContextMenu Demo Component
const ContextMenuDemo = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              Delete
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">
            Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};
