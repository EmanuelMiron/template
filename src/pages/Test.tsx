import { TextareaExample } from "@/components/examples/TextareaExample";
import { useTheme } from "../contexts/ThemeContext";
import Button from "@/components/Button";
import { SelectExample } from "@/components/examples/SelectExample";
import { RadioGroupExample } from "@/components/examples/RadioGroupExample";
import { InputExample } from "@/components/examples/InputExample";
import { DropDownMenuExample } from "@/components/examples/DropDownMenuExample";
import { ContextMenuExample } from "@/components/examples/ContextMenuExample";
import { CommandExample } from "@/components/examples/CommandExample";
import { ComboboxExample } from "@/components/examples/ComboboxExample";
import { CollapsibleExample } from "@/components/examples/CollapsibleExample";
import { CheckboxExample } from "@/components/examples/CheckboxExample";
import { CarouselExample } from "@/components/examples/CarouselExample";
import { CardExample } from "@/components/examples/CardExample";
import { CalendarExample } from "@/components/examples/CalendarExample";
import { ButtonExample } from "@/components/examples/ButtonExample";
import { BreadcrumbsExample } from "@/components/examples/BreadcrumbsExample";
import { BadgeExample } from "@/components/examples/BadgeExample";
import { AvatarExample } from "@/components/examples/AvatarExample";
import { AlertExample } from "@/components/examples/AlertExample";
import { AlertDialogExample } from "@/components/examples/AlertDialogExample";
import { AccordionExample } from "@/components/examples/AccordionExample";
import { DatePickerExample } from "@/components/examples/DatePickerExample";
import { DialogExample } from "@/components/examples/DialogExample";
import { DrawerExample } from "@/components/examples/DrawerExample";
import { HoverCardExample } from "@/components/examples/HoverCardExample";
import { InputOTPExample } from "@/components/examples/InputOTPExample";
import { LabelExample } from "@/components/examples/LabelExample";
import { MenubarExample } from "@/components/examples/MenubarExample";
import { PaginationExample } from "@/components/examples/PaginationExample";
import { PopoverExample } from "@/components/examples/PopoverExample";
import { ProgressExample } from "@/components/examples/ProgressExample";
import { ResizableExample } from "@/components/examples/ResizableExample";
import { ScrollAreaExample } from "@/components/examples/ScrollAreaExample";
import { SeparatorExample } from "@/components/examples/SeparatorExample";
import { SheetExample } from "@/components/examples/SheetExample";
import { SidebarExample } from "@/components/examples/SidebarExample";
import { SkeletonExample } from "@/components/examples/SkeletonExample";
import { SliderExample } from "@/components/examples/SliderExample";
import { SonnerExample } from "@/components/examples/SonnerExample";
import { SwitchExample } from "@/components/examples/SwitchExample";
import { TabsExample } from "@/components/examples/TabsExample";
import { ToggleExample } from "@/components/examples/ToggleExample";
import { ToggleGroupExample } from "@/components/examples/ToggleGroupExample";
import { TooltipExample } from "@/components/examples/TooltipExample";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { AboutSection } from "@/sections/AboutSection";
import { NavigationHeader } from "@/sections/NavigationHeader";
import { FooterSection } from "@/sections/FooterSection";
import { TransparentHeaderSection } from "@/sections/TransparentHeaderSection";
import { PricingTablesSection } from "@/sections/PricingTablesSection";
import { PortfolioGridSection } from "@/sections/PortfolioGridSection";

const themeIcons: Record<string, string> = {
  light: "🌞",
  dark: "🌙",
  brutalist: "🦄",
  default: "🧼",
  pastel: "🧁",
  editorial: "📰",
  minimal: "⬜",
  accessible: "🦻",
  kids: "🧸",
  retro: "💾",
  terminal: "💻",
};
const themeLabels: Record<string, string> = {
  light: "Light",
  dark: "Dark",
  brutalist: "Brutalist",
  default: "Default",
  pastel: "Pastel",
  editorial: "Editorial",
  minimal: "Minimal",
  accessible: "Accessible",
  kids: "Kids",
  retro: "Retro",
  terminal: "Terminal",
};

const Test = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen mt-20 p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Shadcn UI Component Demo</h1>
          <Button variant="outline" onClick={toggleTheme}>
            {themeIcons[theme] || "🎨"} {themeLabels[theme] || theme} Mode
          </Button>
        </div>

        <div className="space-y-8">
          <TooltipExample />
          <ToggleGroupExample />
          <ToggleExample />
          <TabsExample />
          <SwitchExample />
          <SonnerExample />
          <SliderExample />
          <SkeletonExample />
          <SidebarExample />
          <SheetExample />
          <SeparatorExample />
          <ScrollAreaExample />
          <ResizableExample />
          <ProgressExample />
          <PopoverExample />
          <PaginationExample />
          <MenubarExample />
          <LabelExample />
          <InputOTPExample />
          <HoverCardExample />
          <DrawerExample />
          <DialogExample />
          <DatePickerExample />
          <AccordionExample />
          <AlertDialogExample />
          <AlertExample />
          <AvatarExample />
          <BadgeExample />
          <BreadcrumbsExample />
          <ButtonExample />
          <CalendarExample />
          <CardExample />
          <CarouselExample />
          <CheckboxExample />
          <CollapsibleExample />
          <ComboboxExample />
          <CommandExample />
          <ContextMenuExample />
          <DropDownMenuExample />
          <InputExample />
          <RadioGroupExample />
          <SelectExample />
          <TextareaExample />
        </div>

        <div className="space-y-8">
          <TransparentHeaderSection />
          <PricingTablesSection />
          <PortfolioGridSection />
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <NavigationHeader />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Test;
