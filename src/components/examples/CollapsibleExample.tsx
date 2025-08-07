import { Calendar, FileText, Settings, Users } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Button } from "../Button";

export const CollapsibleExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">
          Custom Collapsible Component Examples
        </h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="space-y-4">
          {/* Primary Variant */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="md">
              Primary Collapsible
            </CollapsibleTrigger>
            <CollapsibleContent variant="primary" padding="md">
              <p>
                This is a primary collapsible with primary styling. The content
                area uses the primary variant with medium padding.
              </p>
              <p className="mt-2">
                You can put any content here - forms, lists, or other
                components.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Secondary Variant with Icon */}
          <Collapsible>
            <CollapsibleTrigger
              variant="secondary"
              size="md"
              icon={<Settings className="w-4 h-4" />}
            >
              Settings Panel
            </CollapsibleTrigger>
            <CollapsibleContent variant="secondary" padding="lg">
              <div className="space-y-3">
                <h4 className="font-semibold">Application Settings</h4>
                <p>Configure your application preferences here.</p>
                <div className="flex gap-2">
                  <Button size="sm">Save Settings</Button>
                  <Button variant="outline" size="sm">
                    Reset
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Outline Variant with Left Chevron */}
          <Collapsible>
            <CollapsibleTrigger
              variant="outline"
              size="md"
              icon={<FileText className="w-4 h-4" />}
              chevronPosition="left"
            >
              Documentation
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="md">
              <div className="prose prose-sm max-w-none">
                <h4>Component Documentation</h4>
                <p>
                  This collapsible demonstrates the outline variant with a
                  left-positioned chevron icon.
                </p>
                <ul>
                  <li>
                    Supports multiple variants (primary, secondary, outline)
                  </li>
                  <li>Customizable sizes (sm, md, lg)</li>
                  <li>Icon support with flexible positioning</li>
                  <li>Different padding options for content</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Small Size with No Chevron */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="sm" showChevron={false}>
              Compact View
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="sm">
              <p className="text-sm">
                This is a compact collapsible without a chevron icon.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Large Size with Custom Content */}
          <Collapsible>
            <CollapsibleTrigger
              variant="secondary"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              User Management
            </CollapsibleTrigger>
            <CollapsibleContent variant="primary" padding="lg">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">User Management Panel</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Active Users</h5>
                    <p className="text-sm text-muted-foreground">
                      Manage currently active users
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">User Permissions</h5>
                    <p className="text-sm text-muted-foreground">
                      Configure user access levels
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Add User</Button>
                  <Button variant="outline">Export Users</Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Disabled State */}
          <Collapsible>
            <CollapsibleTrigger variant="outline" size="md" disabled>
              Disabled Collapsible
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="md">
              <p>
                This content won't be visible because the trigger is disabled.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Multiple Collapsibles */}
          <div className="space-y-2">
            <h4 className="font-semibold">Multiple Collapsibles</h4>
            <Collapsible>
              <CollapsibleTrigger
                variant="outline"
                size="sm"
                icon={<Calendar className="w-4 h-4" />}
              >
                Today's Events
              </CollapsibleTrigger>
              <CollapsibleContent variant="outline" padding="sm">
                <ul className="text-sm space-y-1">
                  <li>• Team meeting at 10:00 AM</li>
                  <li>• Client call at 2:00 PM</li>
                  <li>• Code review at 4:00 PM</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger
                variant="outline"
                size="sm"
                icon={<FileText className="w-4 h-4" />}
              >
                Recent Documents
              </CollapsibleTrigger>
              <CollapsibleContent variant="outline" padding="sm">
                <ul className="text-sm space-y-1">
                  <li>• Project proposal.docx</li>
                  <li>• Meeting notes.pdf</li>
                  <li>• Budget spreadsheet.xlsx</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
