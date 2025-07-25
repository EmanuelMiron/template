import { Calendar } from "../Calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const CalendarExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Calendar Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Calendar Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Calendar Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Calendar Examples
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Primary Variant</h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    variant="primary"
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                  />
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">
                    Secondary Variant
                  </h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    variant="secondary"
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                  />
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Outline Variant</h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    variant="outline"
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                  />
                </div>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Small Size</h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    calendarSize="sm"
                    variant="primary"
                    className="rounded-md border shadow-sm"
                  />
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">
                    Medium Size (Default)
                  </h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    calendarSize="md"
                    variant="secondary"
                    className="rounded-md border shadow-sm"
                  />
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Large Size</h5>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    calendarSize="lg"
                    variant="outline"
                    className="rounded-md border shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Range Calendar Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Range Calendar Example
              </h4>
              <Calendar
                mode="range"
                defaultMonth={new Date(2025, 5, 12)}
                numberOfMonths={2}
                variant="primary"
                className="rounded-lg border shadow-sm"
              />
            </div>

            {/* Multiple Months Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Multiple Months Example
              </h4>
              <Calendar
                mode="single"
                defaultMonth={new Date(2025, 5, 12)}
                numberOfMonths={3}
                selected={new Date(2025, 5, 12)}
                variant="secondary"
                className="rounded-lg border shadow-sm"
              />
            </div>

            {/* Date Range Picker Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Date Range Picker Example
              </h4>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">Select Date Range</label>
                <Calendar
                  mode="range"
                  defaultMonth={new Date()}
                  variant="outline"
                  className="rounded-md border shadow-sm"
                  captionLayout="dropdown"
                />
              </div>
            </div>

            {/* Event Calendar Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Event Calendar Example
              </h4>
              <Calendar
                mode="single"
                selected={new Date()}
                variant="primary"
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
                modifiers={{
                  event: (date) => {
                    // Example: mark specific dates as events
                    const events = [
                      new Date(2025, 0, 15),
                      new Date(2025, 0, 22),
                      new Date(2025, 0, 29),
                    ];
                    return events.some(
                      (event) =>
                        event.getDate() === date.getDate() &&
                        event.getMonth() === date.getMonth() &&
                        event.getFullYear() === date.getFullYear()
                    );
                  },
                }}
                modifiersStyles={{
                  event: {
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>

            {/* Disabled Dates Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Disabled Dates Example
              </h4>
              <Calendar
                mode="single"
                selected={new Date()}
                variant="secondary"
                className="rounded-md border shadow-sm"
                disabled={(date) => {
                  // Disable weekends and past dates
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return (
                    date < today || date.getDay() === 0 || date.getDay() === 6
                  );
                }}
              />
            </div>

            {/* Custom Styled Calendar */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Custom Styled Calendar
              </h4>
              <Calendar
                mode="single"
                selected={new Date()}
                variant="outline"
                className="rounded-lg border-2 border-primary/20 shadow-lg bg-gradient-to-br from-background to-background/50"
                captionLayout="dropdown"
                classNames={{
                  day: "hover:bg-primary/10 transition-colors",
                  day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                  day_today: "bg-accent text-accent-foreground font-bold",
                  nav_button: "hover:bg-accent hover:text-accent-foreground",
                  caption: "text-lg font-semibold",
                  head_cell: "text-muted-foreground font-medium",
                }}
              />
            </div>

            {/* Interactive Calendar with State */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Calendar with State
              </h4>
              <div className="space-y-4">
                <Calendar
                  mode="single"
                  selected={new Date()}
                  variant="primary"
                  className="rounded-md border shadow-sm"
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    console.log("Selected date:", date);
                  }}
                />
                <div className="text-sm text-muted-foreground">
                  <p>Selected date will be logged to console</p>
                </div>
              </div>
            </div>

            {/* Calendar with Custom Footer */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Calendar with Custom Footer
              </h4>
              <div className="rounded-md border shadow-sm overflow-hidden">
                <Calendar
                  mode="single"
                  selected={new Date()}
                  variant="outline"
                  className="border-0"
                  captionLayout="dropdown"
                />
                <div className="p-3 bg-muted/50 border-t">
                  <p className="text-sm text-muted-foreground">
                    Today: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Calendar */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Compact Calendar</h4>
              <Calendar
                mode="single"
                selected={new Date()}
                calendarSize="sm"
                variant="primary"
                className="rounded-md border shadow-sm max-w-[280px]"
                showOutsideDays={false}
                captionLayout="label"
              />
            </div>

            {/* Full Featured Calendar */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Full Featured Calendar
              </h4>
              <Calendar
                mode="range"
                defaultMonth={new Date()}
                numberOfMonths={2}
                variant="secondary"
                className="rounded-lg border shadow-sm"
                captionLayout="dropdown"
                showOutsideDays={true}
                fixedWeeks={true}
                classNames={{
                  months:
                    "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button:
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell:
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
                  day_range_start: "day-range-start",
                  day_range_end: "day-range-end",
                  day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                  day_outside: "text-muted-foreground opacity-50",
                  day_disabled: "text-muted-foreground opacity-50",
                  day_range_middle:
                    "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
