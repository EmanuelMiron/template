import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const AccordionExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Accordion Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Accordion Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Product Information */}
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer worldwide shipping through trusted courier
                    partners. Standard delivery takes 3-5 business days, while
                    express shipping ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track
                    your shipment in real-time through our dedicated tracking
                    portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you're not completely satisfied, simply
                    return the item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ Section */}
            <Accordion type="multiple">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is Shadcn UI?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Shadcn/ui is a collection of reusable components built using
                    Radix UI and Tailwind CSS. It provides a set of accessible,
                    customizable components that you can copy and paste into
                    your apps.
                  </p>
                  <p>
                    The components are designed to be highly customizable and
                    follow modern design principles.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How does theming work?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Theming is handled through CSS variables defined in the
                    shadcn.css file. Each theme has its own set of color
                    variables that control the appearance of all components.
                  </p>
                  <p>
                    This allows for easy theme switching and customization
                    without modifying component code.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I customize components?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Yes! Since Shadcn UI components are just React components
                    with Tailwind classes, you can easily modify them to match
                    your design requirements.
                  </p>
                  <p>
                    The theming system makes it easy to maintain consistency
                    across your application.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
