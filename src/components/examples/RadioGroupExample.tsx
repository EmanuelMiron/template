import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";

export const RadioGroupExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom RadioGroup Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom RadioGroup Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic RadioGroup Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic RadioGroup Examples
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Primary Variant</h5>
                  <RadioGroup defaultValue="comfortable" variant="primary">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="default"
                        id="r1"
                        variant="primary"
                      />
                      <label htmlFor="r1" className="text-sm font-medium">
                        Default
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="comfortable"
                        id="r2"
                        variant="primary"
                      />
                      <label htmlFor="r2" className="text-sm font-medium">
                        Comfortable
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="compact"
                        id="r3"
                        variant="primary"
                      />
                      <label htmlFor="r3" className="text-sm font-medium">
                        Compact
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">
                    Secondary Variant
                  </h5>
                  <RadioGroup defaultValue="comfortable" variant="secondary">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="default"
                        id="r4"
                        variant="secondary"
                      />
                      <label htmlFor="r4" className="text-sm font-medium">
                        Default
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="comfortable"
                        id="r5"
                        variant="secondary"
                      />
                      <label htmlFor="r5" className="text-sm font-medium">
                        Comfortable
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="compact"
                        id="r6"
                        variant="secondary"
                      />
                      <label htmlFor="r6" className="text-sm font-medium">
                        Compact
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Outline Variant</h5>
                  <RadioGroup defaultValue="comfortable" variant="outline">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="default"
                        id="r7"
                        variant="outline"
                      />
                      <label htmlFor="r7" className="text-sm font-medium">
                        Default
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="comfortable"
                        id="r8"
                        variant="outline"
                      />
                      <label htmlFor="r8" className="text-sm font-medium">
                        Comfortable
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="compact"
                        id="r9"
                        variant="outline"
                      />
                      <label htmlFor="r9" className="text-sm font-medium">
                        Compact
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Small Size</h5>
                  <RadioGroup defaultValue="option1" variant="primary">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option1"
                        id="small1"
                        radioItemSize="sm"
                      />
                      <label htmlFor="small1" className="text-sm">
                        Small Option 1
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option2"
                        id="small2"
                        radioItemSize="sm"
                      />
                      <label htmlFor="small2" className="text-sm">
                        Small Option 2
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">
                    Medium Size (Default)
                  </h5>
                  <RadioGroup defaultValue="option1" variant="secondary">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option1"
                        id="medium1"
                        radioItemSize="md"
                      />
                      <label htmlFor="medium1" className="text-sm">
                        Medium Option 1
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option2"
                        id="medium2"
                        radioItemSize="md"
                      />
                      <label htmlFor="medium2" className="text-sm">
                        Medium Option 2
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Large Size</h5>
                  <RadioGroup defaultValue="option1" variant="outline">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option1"
                        id="large1"
                        radioItemSize="lg"
                      />
                      <label htmlFor="large1" className="text-sm">
                        Large Option 1
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="option2"
                        id="large2"
                        radioItemSize="lg"
                      />
                      <label htmlFor="large2" className="text-sm">
                        Large Option 2
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Notification Settings Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Notification Settings Example
              </h4>
              <RadioGroup
                defaultValue="mentions"
                variant="primary"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="all" id="notify-all" />
                  <label htmlFor="notify-all" className="text-sm font-normal">
                    All new messages
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="mentions" id="notify-mentions" />
                  <label
                    htmlFor="notify-mentions"
                    className="text-sm font-normal"
                  >
                    Direct messages and mentions
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="none" id="notify-none" />
                  <label htmlFor="notify-none" className="text-sm font-normal">
                    Nothing
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Theme Selection Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Theme Selection Example
              </h4>
              <RadioGroup
                defaultValue="system"
                variant="secondary"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="light" id="theme-light" />
                  <label htmlFor="theme-light" className="text-sm font-normal">
                    Light Mode
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <label htmlFor="theme-dark" className="text-sm font-normal">
                    Dark Mode
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="system" id="theme-system" />
                  <label htmlFor="theme-system" className="text-sm font-normal">
                    System
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Payment Method Example
              </h4>
              <RadioGroup
                defaultValue="credit"
                variant="outline"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="credit" id="payment-credit" />
                  <label
                    htmlFor="payment-credit"
                    className="text-sm font-normal"
                  >
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="debit" id="payment-debit" />
                  <label
                    htmlFor="payment-debit"
                    className="text-sm font-normal"
                  >
                    Debit Card
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="paypal" id="payment-paypal" />
                  <label
                    htmlFor="payment-paypal"
                    className="text-sm font-normal"
                  >
                    PayPal
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="bank" id="payment-bank" />
                  <label htmlFor="payment-bank" className="text-sm font-normal">
                    Bank Transfer
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Disabled State Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Disabled State Example
              </h4>
              <RadioGroup
                defaultValue="option1"
                variant="primary"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option1" id="disabled1" />
                  <label htmlFor="disabled1" className="text-sm font-normal">
                    Enabled Option
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option2" id="disabled2" disabled />
                  <label
                    htmlFor="disabled2"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Disabled Option
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option3" id="disabled3" disabled />
                  <label
                    htmlFor="disabled3"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    Another Disabled Option
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Interactive Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Example
              </h4>
              <RadioGroup
                defaultValue="option1"
                variant="primary"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                  <RadioGroupItem value="option1" id="interactive1" />
                  <label
                    htmlFor="interactive1"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Interactive Option 1
                  </label>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                  <RadioGroupItem value="option2" id="interactive2" />
                  <label
                    htmlFor="interactive2"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Interactive Option 2
                  </label>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                  <RadioGroupItem value="option3" id="interactive3" />
                  <label
                    htmlFor="interactive3"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Interactive Option 3
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Custom Styled Example */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Custom Styled Example
              </h4>
              <RadioGroup
                defaultValue="premium"
                variant="primary"
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-transparent hover:border-primary transition-colors">
                  <RadioGroupItem
                    value="basic"
                    id="custom1"
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500"
                  />
                  <label htmlFor="custom1" className="text-sm font-medium">
                    Basic Plan
                  </label>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-transparent hover:border-primary transition-colors">
                  <RadioGroupItem
                    value="premium"
                    id="custom2"
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-blue-500"
                  />
                  <label htmlFor="custom2" className="text-sm font-medium">
                    Premium Plan
                  </label>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-transparent hover:border-primary transition-colors">
                  <RadioGroupItem
                    value="enterprise"
                    id="custom3"
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500"
                  />
                  <label htmlFor="custom3" className="text-sm font-medium">
                    Enterprise Plan
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
