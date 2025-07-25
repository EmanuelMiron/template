import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import Select from "../Select";

export const SelectExample = () => {
  const [SelectValue, setSelectValue] = useState("");
  const [SelectValue2, setSelectValue2] = useState("");
  const [SelectValue3, setSelectValue3] = useState("");

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">
          Custom Select Component Examples
        </h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Select
              label="Primary Variant"
              placeholder="Select an option"
              variant="primary"
              selectSize="md"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
              value={SelectValue}
              onValueChange={setSelectValue}
            />
          </div>
          <div>
            <Select
              label="Secondary Variant"
              placeholder="Select an option"
              variant="secondary"
              selectSize="md"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
              value={SelectValue2}
              onValueChange={setSelectValue2}
            />
          </div>
          <div>
            <Select
              label="Outline Variant"
              placeholder="Select an option"
              variant="outline"
              selectSize="md"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
              value={SelectValue3}
              onValueChange={setSelectValue3}
            />
          </div>
          <div>
            <Select
              label="Disabled Select"
              placeholder="Select an option"
              variant="primary"
              selectSize="md"
              disabled
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
            />
          </div>
          <div>
            <Select
              label="With Helper Text"
              placeholder="Select an option"
              variant="primary"
              selectSize="md"
              helperText="This is some helpful information about this field."
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
            />
          </div>
          <div>
            <Select
              label="With Error"
              placeholder="Select an option"
              variant="primary"
              selectSize="md"
              error="This field is required and cannot be empty."
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
            />
          </div>
          <div>
            <Select
              label="Small Size"
              placeholder="Select an option"
              variant="outline"
              selectSize="sm"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
            />
          </div>
          <div>
            <Select
              label="Large Size"
              placeholder="Select an option"
              variant="secondary"
              selectSize="lg"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
              ]}
            />
          </div>
          <div>
            <Select
              label="Searchable Select"
              placeholder="Search and select..."
              variant="primary"
              selectSize="md"
              searchable
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
                { value: "date", label: "Date" },
                { value: "elderberry", label: "Elderberry" },
                { value: "fig", label: "Fig" },
                { value: "grape", label: "Grape" },
                { value: "honeydew", label: "Honeydew" },
              ]}
            />
          </div>
          <div>
            <Select
              label="With Option Groups"
              placeholder="Select a category"
              variant="outline"
              selectSize="md"
              optionGroups={[
                {
                  label: "Fruits",
                  options: [
                    { value: "apple", label: "Apple" },
                    { value: "banana", label: "Banana" },
                    { value: "cherry", label: "Cherry" },
                  ],
                },
                {
                  label: "Vegetables",
                  options: [
                    { value: "carrot", label: "Carrot" },
                    { value: "broccoli", label: "Broccoli" },
                    { value: "spinach", label: "Spinach" },
                  ],
                },
                {
                  label: "Grains",
                  options: [
                    { value: "rice", label: "Rice" },
                    { value: "wheat", label: "Wheat" },
                    { value: "oats", label: "Oats" },
                  ],
                },
              ]}
            />
          </div>
          <div>
            <Select
              label="Searchable with Groups"
              placeholder="Search categories..."
              variant="secondary"
              selectSize="md"
              searchable
              optionGroups={[
                {
                  label: "Programming Languages",
                  options: [
                    { value: "javascript", label: "JavaScript" },
                    { value: "typescript", label: "TypeScript" },
                    { value: "python", label: "Python" },
                    { value: "java", label: "Java" },
                  ],
                },
                {
                  label: "Frameworks",
                  options: [
                    { value: "react", label: "React" },
                    { value: "vue", label: "Vue" },
                    { value: "angular", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                  ],
                },
              ]}
            />
          </div>
          <div>
            <Select
              label="With Disabled Options"
              placeholder="Select an option"
              variant="primary"
              selectSize="md"
              options={[
                { value: "option1", label: "Option 1" },
                {
                  value: "option2",
                  label: "Option 2 (Disabled)",
                  disabled: true,
                },
                { value: "option3", label: "Option 3" },
                {
                  value: "option4",
                  label: "Option 4 (Disabled)",
                  disabled: true,
                },
                { value: "option5", label: "Option 5" },
              ]}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
