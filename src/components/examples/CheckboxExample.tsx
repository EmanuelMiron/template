import Checkbox from "../Checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const CheckboxExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">
          Custom Checkbox Component Examples
        </h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Checkbox label="Primary Variant" variant="primary" size="md" />
          </div>
          <div>
            <Checkbox label="Secondary Variant" variant="secondary" size="md" />
          </div>
          <div>
            <Checkbox label="Outline Variant" variant="outline" size="md" />
          </div>
          <div>
            <Checkbox
              label="Disabled Checkbox"
              variant="primary"
              size="md"
              disabled
            />
          </div>
          <div>
            <Checkbox
              label="With Description"
              description="This is a helpful description for the checkbox."
              variant="primary"
              size="md"
            />
          </div>
          <div>
            <Checkbox
              label="With Error"
              error="This field is required and must be checked."
              variant="primary"
              size="md"
            />
          </div>
          <div>
            <Checkbox label="Small Size" variant="outline" size="sm" />
          </div>
          <div>
            <Checkbox label="Large Size" variant="secondary" size="lg" />
          </div>
          <div>
            <Checkbox
              label="Terms and Conditions"
              description="I agree to the terms and conditions of this service."
              variant="primary"
              size="md"
            />
          </div>
          <div>
            <Checkbox
              label="Newsletter Subscription"
              description="Receive updates and newsletters via email."
              variant="outline"
              size="md"
            />
          </div>
          <div>
            <Checkbox
              label="Marketing Communications"
              description="Allow us to send you marketing materials."
              variant="secondary"
              size="md"
            />
          </div>
          <div>
            <Checkbox
              label="Required Field"
              error="You must accept this to continue."
              variant="primary"
              size="md"
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
