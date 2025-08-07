import { AlertCircle, Info, InfoIcon, Settings, Star, X } from "lucide-react";
import { Badge } from "../Badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const BadgeExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Badge Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Badge Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Badge Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Badge Examples
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            {/* Variant Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">All Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Badge badgeSize="sm">Small</Badge>
                <Badge badgeSize="md">Medium</Badge>
                <Badge badgeSize="lg">Large</Badge>
              </div>
            </div>

            {/* Badge with Icons */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Badge with Icons</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  icon={<InfoIcon className="h-3 w-3" />}
                >
                  Verified
                </Badge>
                <Badge variant="success" icon={<Star className="h-3 w-3" />}>
                  Featured
                </Badge>
                <Badge
                  variant="warning"
                  icon={<AlertCircle className="h-3 w-3" />}
                >
                  Pending
                </Badge>
                <Badge variant="destructive" icon={<X className="h-3 w-3" />}>
                  Rejected
                </Badge>
                <Badge
                  variant="info"
                  icon={<Settings className="h-3 w-3" />}
                  iconPosition="right"
                >
                  Settings
                </Badge>
              </div>
            </div>

            {/* Number Badges */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Number Badges</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                  8
                </Badge>
                <Badge
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  variant="destructive"
                >
                  99
                </Badge>
                <Badge
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  variant="outline"
                >
                  20+
                </Badge>
                <Badge
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  variant="success"
                >
                  5
                </Badge>
                <Badge
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  variant="warning"
                >
                  12
                </Badge>
              </div>
            </div>

            {/* Status Badges */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Status Badges</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" icon={<Star className="h-3 w-3" />}>
                  Active
                </Badge>
                <Badge
                  variant="warning"
                  icon={<AlertCircle className="h-3 w-3" />}
                >
                  Pending Review
                </Badge>
                <Badge variant="destructive" icon={<X className="h-3 w-3" />}>
                  Suspended
                </Badge>
                <Badge variant="info" icon={<Info className="h-3 w-3" />}>
                  In Progress
                </Badge>
                <Badge
                  variant="outline"
                  icon={<Settings className="h-3 w-3" />}
                >
                  Draft
                </Badge>
              </div>
            </div>

            {/* Category Badges */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Category Badges</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Technology</Badge>
                <Badge variant="secondary">Design</Badge>
                <Badge variant="success">Marketing</Badge>
                <Badge variant="warning">Finance</Badge>
                <Badge variant="info">Education</Badge>
                <Badge variant="outline">Other</Badge>
              </div>
            </div>

            {/* Interactive Badges */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Interactive Badges</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  className="cursor-pointer hover:scale-105 transition-transform"
                  variant="primary"
                >
                  Clickable
                </Badge>
                <Badge
                  className="cursor-pointer hover:scale-105 transition-transform"
                  variant="secondary"
                >
                  Hover Me
                </Badge>
                <Badge
                  className="cursor-pointer hover:scale-105 transition-transform"
                  variant="outline"
                >
                  Interactive
                </Badge>
              </div>
            </div>

            {/* Custom Styled Badges */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Custom Styled Badges
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                  Gradient
                </Badge>
                <Badge
                  className="bg-blue-500 text-white dark:bg-blue-600"
                  icon={<Info className="h-3 w-3" />}
                >
                  Custom Blue
                </Badge>
                <Badge
                  className="rounded-full border-2 border-dashed"
                  variant="outline"
                >
                  Dashed Border
                </Badge>
                <Badge className="shadow-lg" variant="primary">
                  With Shadow
                </Badge>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
