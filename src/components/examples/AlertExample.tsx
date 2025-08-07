import { AlertCircle, Info, Settings } from "lucide-react";
import { Alert, AlertDescription } from "../Alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Button } from "../Button";

export const AlertExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Alert Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Alert Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-4">
            {/* Success Alert */}
            <Alert
              variant="success"
              icon={<Info className="h-4 w-4" />}
              title="Success! Your changes have been saved"
              description="This is an alert with icon, title and description using the success variant."
            />

            {/* Info Alert */}
            <Alert
              variant="info"
              icon={<Info className="h-4 w-4" />}
              title="This Alert has a title and an icon. No description."
            />

            {/* Destructive Alert */}
            <Alert
              variant="destructive"
              icon={<AlertCircle className="h-4 w-4" />}
              title="Unable to process your payment."
              description={
                <div>
                  <p>Please verify your billing information and try again.</p>
                  <ul className="list-inside list-disc text-sm mt-2">
                    <li>Check your card details</li>
                    <li>Ensure sufficient funds</li>
                    <li>Verify billing address</li>
                  </ul>
                </div>
              }
            />

            {/* Primary Variant */}
            <Alert
              variant="primary"
              icon={<Info className="h-4 w-4" />}
              title="Primary Alert"
              description="This alert uses the primary variant with theme-aware colors."
            />

            {/* Secondary Variant */}
            <Alert
              variant="secondary"
              icon={<Info className="h-4 w-4" />}
              title="Secondary Alert"
              description="This alert uses the secondary variant with theme-aware colors."
            />

            {/* Outline Variant */}
            <Alert
              variant="outline"
              icon={<Info className="h-4 w-4" />}
              title="Outline Alert"
              description="This alert uses the outline variant with transparent background."
            />

            {/* Warning Alert */}
            <Alert
              variant="warning"
              icon={<AlertCircle className="h-4 w-4" />}
              title="Warning: System Maintenance"
              description="Scheduled maintenance will occur tonight at 2:00 AM. Some services may be temporarily unavailable."
            />

            {/* Different Sizes */}
            <div className="space-y-2">
              <Alert
                variant="info"
                size="sm"
                icon={<Info className="h-3 w-3" />}
                title="Small Alert"
                description="This is a small-sized alert."
              />
              <Alert
                variant="info"
                size="md"
                icon={<Info className="h-4 w-4" />}
                title="Medium Alert"
                description="This is a medium-sized alert (default)."
              />
              <Alert
                variant="info"
                size="lg"
                icon={<Info className="h-5 w-5" />}
                title="Large Alert"
                description="This is a large-sized alert."
              />
            </div>

            {/* Alert with Custom Content */}
            <Alert
              variant="outline"
              icon={<Settings className="h-4 w-4" />}
              title="Custom Content Alert"
            >
              <AlertDescription>
                <p>
                  This alert uses custom children content instead of the
                  description prop.
                </p>
                <div className="mt-2 flex gap-2">
                  <Button size="sm">Action 1</Button>
                  <Button variant="outline" size="sm">
                    Action 2
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
