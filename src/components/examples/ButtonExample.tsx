import { Button } from "../ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Search } from "lucide-react";

export const ButtonExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Button Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Search className="w-5 h-5 mr-2" /> Search
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
