import React from 'react';
import { CalendarIcon } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import DatePicker from '../DatePicker';

export const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = React.useState<{ from: Date; to?: Date } | undefined>(undefined);
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>(undefined);

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">DatePicker Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic DatePicker Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic DatePicker Examples</h4>
            <div className="space-y-4">
              <DatePicker
                label="Primary Variant"
                placeholder="Select a date"
                variant="primary"
                size="md"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
              
              <DatePicker
                label="Secondary Variant"
                placeholder="Select a date"
                variant="secondary"
                size="md"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
              
              <DatePicker
                label="Outline Variant"
                placeholder="Select a date"
                variant="outline"
                size="md"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <DatePicker
                label="Small Size"
                placeholder="Small date picker"
                variant="primary"
                size="sm"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
              
              <DatePicker
                label="Medium Size (Default)"
                placeholder="Medium date picker"
                variant="secondary"
                size="md"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
              
              <DatePicker
                label="Large Size"
                placeholder="Large date picker"
                variant="outline"
                size="lg"
                value={selectedDate}
                onValueChange={setSelectedDate}
              />
            </div>
          </div>

          {/* Date Range Picker */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Date Range Picker</h4>
            <DatePicker
              label="Select Date Range"
              placeholder="Choose date range"
              variant="primary"
              size="md"
              mode="range"
              value={rangeDate}
              onValueChange={(value) => setRangeDate(value as { from: Date; to?: Date })}
              format={(date) => {
                if ('from' in date && date.from) {
                  const from = date.from.toLocaleDateString();
                  const to = date.to ? date.to.toLocaleDateString() : '';
                  return to ? `${from} - ${to}` : from;
                }
                return 'Select range';
              }}
            />
          </div>

          {/* Multiple Date Selection */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Multiple Date Selection</h4>
            <DatePicker
              label="Select Multiple Dates"
              placeholder="Choose multiple dates"
              variant="secondary"
              size="md"
              mode="multiple"
              value={multipleDates}
              onValueChange={(value) => setMultipleDates(value as Date[])}
              format={(date) => {
                if (Array.isArray(date)) {
                  return date.length > 0 
                    ? `${date.length} date${date.length > 1 ? 's' : ''} selected`
                    : 'Select dates';
                }
                return 'Select dates';
              }}
            />
          </div>

          {/* With Helper Text */}
          <div>
            <h4 className="font-semibold text-lg mb-4">With Helper Text</h4>
            <DatePicker
              label="Birth Date"
              placeholder="Select your birth date"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              helperText="This information will be used for age verification."
            />
          </div>

          {/* With Error State */}
          <div>
            <h4 className="font-semibold text-lg mb-4">With Error State</h4>
            <DatePicker
              label="Required Date"
              placeholder="This field is required"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              error="Please select a valid date."
            />
          </div>

          {/* Disabled DatePicker */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Disabled DatePicker</h4>
            <DatePicker
              label="Disabled Date Picker"
              placeholder="This is disabled"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              disabled
            />
          </div>

          {/* With Date Restrictions */}
          <div>
            <h4 className="font-semibold text-lg mb-4">With Date Restrictions</h4>
            <DatePicker
              label="Future Date Only"
              placeholder="Select a future date"
              variant="outline"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              minDate={new Date()}
              helperText="Only future dates are allowed."
            />
          </div>

          {/* Custom Date Format */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Custom Date Format</h4>
            <DatePicker
              label="Custom Format"
              placeholder="Select date"
              variant="secondary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              format={(date) => {
                return date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });
              }}
            />
          </div>

          {/* With Disabled Dates */}
          <div>
            <h4 className="font-semibold text-lg mb-4">With Disabled Dates</h4>
            <DatePicker
              label="Exclude Weekends"
              placeholder="Select a weekday"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              disabledDates={(date) => {
                // Disable weekends (Saturday = 6, Sunday = 0)
                return date.getDay() === 0 || date.getDay() === 6;
              }}
              helperText="Weekends are not available for selection."
            />
          </div>

          {/* Different Alignment */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Different Alignment</h4>
            <DatePicker
              label="End Aligned"
              placeholder="Calendar opens to the right"
              variant="outline"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              align="end"
            />
          </div>

          {/* With Icon */}
          <div>
            <h4 className="font-semibold text-lg mb-4">With Custom Formatting</h4>
            <DatePicker
              label="Event Date"
              placeholder="When is your event?"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
              format={(date) => {
                const today = new Date();
                const diffTime = date.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays === 0) return 'Today';
                if (diffDays === 1) return 'Tomorrow';
                if (diffDays > 1) return `In ${diffDays} days`;
                if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
                
                return date.toLocaleDateString();
              }}
              helperText="Shows relative time from today."
            />
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DatePicker
              label="Single Date"
              placeholder="Pick a date"
              variant="primary"
              size="md"
              value={selectedDate}
              onValueChange={setSelectedDate}
            />
            <div className="flex items-end">
              <p className="text-sm text-muted-foreground">
                Selected: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
              </p>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 