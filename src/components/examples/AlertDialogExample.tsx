import { AlertTriangle, Edit, Plus, Trash2, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogAction,
} from "../AlertDialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const AlertDialogExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom AlertDialog Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom AlertDialog Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Basic AlertDialog */}
              <AlertDialog>
                <AlertDialogTrigger variant="outline" size="md">
                  Show Basic Dialog
                </AlertDialogTrigger>
                <AlertDialogContent variant="outline">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="md">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive" size="md">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Primary Variant AlertDialog */}
              <AlertDialog>
                <AlertDialogTrigger variant="primary" size="md">
                  Primary Dialog
                </AlertDialogTrigger>
                <AlertDialogContent variant="primary">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                    <AlertDialogDescription>
                      This dialog uses the primary variant with theme-aware
                      colors. The content border and styling adapt to your
                      current theme.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="md">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="primary" size="md">
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Secondary Variant AlertDialog */}
              <AlertDialog>
                <AlertDialogTrigger variant="secondary" size="md">
                  Secondary Dialog
                </AlertDialogTrigger>
                <AlertDialogContent variant="secondary">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Secondary Action</AlertDialogTitle>
                    <AlertDialogDescription>
                      This dialog uses the secondary variant. Notice how the
                      colors adapt to your theme while maintaining the secondary
                      styling.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="md">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="secondary" size="md">
                      Proceed
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Different Button Sizes */}
              <AlertDialog>
                <AlertDialogTrigger variant="outline" size="lg">
                  Large Buttons Dialog
                </AlertDialogTrigger>
                <AlertDialogContent variant="outline">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Large Button Example</AlertDialogTitle>
                    <AlertDialogDescription>
                      This dialog demonstrates different button sizes. The
                      trigger is large, and the action buttons can be customized
                      independently.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="sm">
                      Small Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="primary" size="lg">
                      Large Action
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Destructive Action Dialog */}
              <AlertDialog>
                <AlertDialogTrigger variant="destructive" size="md">
                  Delete Account
                </AlertDialogTrigger>
                <AlertDialogContent variant="outline">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Account</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove all your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="md">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive" size="md">
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Small Trigger Dialog */}
              <AlertDialog>
                <AlertDialogTrigger variant="outline" size="sm">
                  Small Trigger
                </AlertDialogTrigger>
                <AlertDialogContent variant="outline">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Small Trigger Example</AlertDialogTitle>
                    <AlertDialogDescription>
                      This dialog uses a small trigger button. Perfect for
                      compact layouts where space is limited.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="sm">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="primary" size="sm">
                      OK
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Icon Button Examples */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Icon Button Examples</h4>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Delete Icon Button */}
                <AlertDialog>
                  <AlertDialogTrigger
                    variant="destructive"
                    size="md"
                    icon={<Trash2 />}
                    iconOnly
                  />
                  <AlertDialogContent variant="outline">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Item</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this item? This action
                        cannot be undone and the item will be permanently
                        removed from the system.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel variant="outline" size="md">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction variant="destructive" size="md">
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Edit Icon Button */}
                <AlertDialog>
                  <AlertDialogTrigger
                    variant="primary"
                    size="md"
                    icon={<Edit />}
                    iconOnly
                  />
                  <AlertDialogContent variant="primary">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Edit Item</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to edit this item? Any unsaved
                        changes will be lost.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel variant="outline" size="md">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction variant="primary" size="md">
                        Edit
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Add Icon Button */}
                <AlertDialog>
                  <AlertDialogTrigger
                    variant="secondary"
                    size="md"
                    icon={<Plus />}
                    iconOnly
                  />
                  <AlertDialogContent variant="secondary">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add New Item</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you ready to add a new item? This will create a new
                        entry in the system.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel variant="outline" size="md">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction variant="secondary" size="md">
                        Add
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Close Icon Button */}
                <AlertDialog>
                  <AlertDialogTrigger
                    variant="outline"
                    size="sm"
                    icon={<X />}
                    iconOnly
                  />
                  <AlertDialogContent variant="outline">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Close Window</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to close this window? Any unsaved
                        changes will be lost.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel variant="outline" size="sm">
                        Stay
                      </AlertDialogCancel>
                      <AlertDialogAction variant="outline" size="sm">
                        Close
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Warning Icon Button */}
                <AlertDialog>
                  <AlertDialogTrigger
                    variant="outline"
                    size="lg"
                    icon={<AlertTriangle />}
                    iconOnly
                  />
                  <AlertDialogContent variant="outline">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Warning Action</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action may have serious consequences. Are you
                        absolutely sure you want to proceed with this operation?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel variant="outline" size="md">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction variant="destructive" size="md">
                        Proceed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              {/* Icon with Text Button */}
              <AlertDialog>
                <AlertDialogTrigger
                  variant="primary"
                  size="md"
                  icon={<Trash2 />}
                >
                  Delete with Text
                </AlertDialogTrigger>
                <AlertDialogContent variant="outline">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete with Text</AlertDialogTitle>
                    <AlertDialogDescription>
                      This example shows an icon button with text. Useful when
                      you want both visual and textual context for the action.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="outline" size="md">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive" size="md">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
