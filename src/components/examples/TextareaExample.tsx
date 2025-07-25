import { MessageSquare } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import Textarea from "../Textarea";

export const TextareaExample = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">
          Custom Textarea Component Examples
        </h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Textarea
              label="Primary Variant"
              placeholder="Primary textarea with label"
              variant="primary"
              textareaSize="md"
            />
          </div>
          <div>
            <Textarea
              label="Secondary Variant"
              placeholder="Secondary textarea with label"
              variant="secondary"
              textareaSize="md"
            />
          </div>
          <div>
            <Textarea
              label="Outline Variant"
              placeholder="Outline textarea with label"
              variant="outline"
              textareaSize="md"
            />
          </div>
          <div>
            <Textarea
              label="Disabled Textarea"
              placeholder="Disabled textarea"
              variant="primary"
              textareaSize="md"
              disabled
            />
          </div>
          <div>
            <Textarea
              label="With Helper Text"
              placeholder="Textarea with helper text"
              variant="primary"
              textareaSize="md"
              helperText="This is some helpful information about this field."
            />
          </div>
          <div>
            <Textarea
              label="With Error"
              placeholder="Textarea with error"
              variant="primary"
              textareaSize="md"
              error="This field is required and cannot be empty."
            />
          </div>
          <div>
            <Textarea
              label="With Icon"
              placeholder="Comment with icon"
              variant="primary"
              textareaSize="md"
              icon={<MessageSquare className="w-4 h-4 text-muted-foreground" />}
            />
          </div>
          <div>
            <Textarea
              label="Small Size"
              placeholder="Small textarea"
              variant="outline"
              textareaSize="sm"
            />
          </div>
          <div>
            <Textarea
              label="Large Size"
              placeholder="Large textarea"
              variant="secondary"
              textareaSize="lg"
            />
          </div>
          <div>
            <Textarea
              label="Bio Textarea"
              placeholder="Tell us about yourself..."
              variant="primary"
              textareaSize="md"
              helperText="Share a brief description about yourself."
              rows={4}
            />
          </div>
          <div>
            <Textarea
              label="Feedback Textarea"
              placeholder="Your feedback..."
              variant="outline"
              textareaSize="md"
              error="Please provide more detailed feedback."
              rows={5}
            />
          </div>
          <div>
            <Textarea
              label="Code Snippet"
              placeholder="Paste your code here..."
              variant="secondary"
              textareaSize="md"
              helperText="Use this area to share code snippets."
              rows={6}
            />
          </div>
          <div>
            <Textarea
              label="Notes"
              placeholder="Write your notes here..."
              variant="outline"
              textareaSize="md"
              icon={<MessageSquare className="w-4 h-4 text-muted-foreground" />}
              rows={3}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
