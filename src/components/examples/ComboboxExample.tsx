import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { Combobox } from "../Combobox";

export const ComboboxExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Combobox Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Combobox Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Combobox Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Combobox Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Basic Combobox</h5>
                  <ComboboxDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Combobox with Different Sizes
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Small Size:
                      </p>
                      <Combobox
                        options={[
                          { value: "next.js", label: "Next.js" },
                          { value: "sveltekit", label: "SvelteKit" },
                          { value: "nuxt.js", label: "Nuxt.js" },
                          { value: "remix", label: "Remix" },
                          { value: "astro", label: "Astro" },
                        ]}
                        placeholder="Select framework..."
                        comboboxSize="sm"
                        className="w-[200px]"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Large Size:
                      </p>
                      <Combobox
                        options={[
                          { value: "next.js", label: "Next.js" },
                          { value: "sveltekit", label: "SvelteKit" },
                          { value: "nuxt.js", label: "Nuxt.js" },
                          { value: "remix", label: "Remix" },
                          { value: "astro", label: "Astro" },
                        ]}
                        placeholder="Select framework..."
                        comboboxSize="lg"
                        className="w-[200px]"
                      />
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
                  <Combobox
                    options={[
                      { value: "primary", label: "Primary Option" },
                      { value: "secondary", label: "Secondary Option" },
                      { value: "tertiary", label: "Tertiary Option" },
                    ]}
                    placeholder="Select option..."
                    variant="primary"
                    className="w-[200px]"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Secondary Variant:
                  </p>
                  <Combobox
                    options={[
                      { value: "primary", label: "Primary Option" },
                      { value: "secondary", label: "Secondary Option" },
                      { value: "tertiary", label: "Tertiary Option" },
                    ]}
                    placeholder="Select option..."
                    variant="secondary"
                    className="w-[200px]"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Outline Variant:
                  </p>
                  <Combobox
                    options={[
                      { value: "primary", label: "Primary Option" },
                      { value: "secondary", label: "Secondary Option" },
                      { value: "tertiary", label: "Tertiary Option" },
                    ]}
                    placeholder="Select option..."
                    variant="outline"
                    className="w-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Combobox with Label and Helper Text
                  </h5>
                  <Combobox
                    options={[
                      { value: "en", label: "English" },
                      { value: "fr", label: "French" },
                      { value: "de", label: "German" },
                      { value: "es", label: "Spanish" },
                      { value: "pt", label: "Portuguese" },
                    ]}
                    label="Language"
                    placeholder="Select language..."
                    helperText="This is the language that will be used in the dashboard."
                    className="w-[300px]"
                  />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Combobox with Error State
                  </h5>
                  <Combobox
                    options={[
                      { value: "backlog", label: "Backlog" },
                      { value: "todo", label: "Todo" },
                      { value: "in-progress", label: "In Progress" },
                      { value: "done", label: "Done" },
                      { value: "canceled", label: "Canceled" },
                    ]}
                    label="Status"
                    placeholder="Select status..."
                    error="Please select a valid status."
                    className="w-[300px]"
                  />
                </div>

                <div>
                  <h5 className="font-medium mb-2">Disabled Combobox</h5>
                  <Combobox
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                    ]}
                    placeholder="Select option..."
                    disabled={true}
                    className="w-[200px]"
                  />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Combobox with Custom Messages
                  </h5>
                  <Combobox
                    options={[
                      { value: "apple", label: "Apple" },
                      { value: "banana", label: "Banana" },
                      { value: "orange", label: "Orange" },
                      { value: "grape", label: "Grape" },
                    ]}
                    placeholder="Choose a fruit..."
                    searchPlaceholder="Search fruits..."
                    emptyMessage="No fruits found matching your search."
                    className="w-[250px]"
                  />
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
                  <h5 className="font-medium mb-2">Controlled Combobox</h5>
                  <ControlledComboboxDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Combobox with Many Options
                  </h5>
                  <Combobox
                    options={Array.from({ length: 50 }, (_, i) => ({
                      value: `option-${i + 1}`,
                      label: `Option ${i + 1}`,
                    }))}
                    placeholder="Select from many options..."
                    searchPlaceholder="Search options..."
                    className="w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Combobox Demo Component
const ComboboxDemo = () => {
  const [value, setValue] = useState("");

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  return (
    <Combobox
      options={frameworks}
      value={value}
      onValueChange={setValue}
      placeholder="Select framework..."
      className="w-[200px]"
    />
  );
};

// Controlled Combobox Demo Component
const ControlledComboboxDemo = () => {
  const [value, setValue] = useState("");

  const statuses = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" },
    { value: "canceled", label: "Canceled" },
  ];

  return (
    <div className="space-y-4">
      <Combobox
        options={statuses}
        value={value}
        onValueChange={setValue}
        placeholder="Select status..."
        className="w-[200px]"
      />
      <div className="text-sm text-muted-foreground">
        Selected value: <span className="font-medium">{value || "None"}</span>
      </div>
    </div>
  );
};
