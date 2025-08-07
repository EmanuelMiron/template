import { Search } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Input } from "../Input";

export const InputExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">
          Custom Input Component Examples
        </h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              label="Primary Variant"
              placeholder="Primary input with label"
              variant="primary"
              inputSize="md"
            />
          </div>
          <div>
            <Input
              label="Secondary Variant"
              placeholder="Secondary input with label"
              variant="secondary"
              inputSize="md"
            />
          </div>
          <div>
            <Input
              label="Outline Variant"
              placeholder="Outline input with label"
              variant="outline"
              inputSize="md"
            />
          </div>
          <div>
            <Input
              label="Disabled Input"
              placeholder="Disabled input"
              variant="primary"
              inputSize="md"
              disabled
            />
          </div>
          <div>
            <Input
              label="With Helper Text"
              placeholder="Input with helper text"
              variant="primary"
              inputSize="md"
              helperText="This is some helpful information about this field."
            />
          </div>
          <div>
            <Input
              label="With Error"
              placeholder="Input with error"
              variant="primary"
              inputSize="md"
              error="This field is required and cannot be empty."
            />
          </div>
          <div>
            <Input
              label="With Icon"
              placeholder="Search with icon"
              variant="primary"
              inputSize="md"
              icon={<Search className="w-4 h-4 text-muted-foreground" />}
            />
          </div>
          <div>
            <Input
              label="Small Size"
              placeholder="Small input"
              variant="outline"
              inputSize="sm"
            />
          </div>
          <div>
            <Input
              label="Large Size"
              placeholder="Large input"
              variant="secondary"
              inputSize="lg"
            />
          </div>
          <div>
            <Input
              label="Email Input"
              type="email"
              placeholder="Enter your email"
              variant="primary"
              inputSize="md"
              helperText="We'll never share your email with anyone else."
            />
          </div>
          <div>
            <Input
              label="Password Input"
              type="password"
              placeholder="Enter your password"
              variant="outline"
              inputSize="md"
              error="Password must be at least 8 characters long."
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
