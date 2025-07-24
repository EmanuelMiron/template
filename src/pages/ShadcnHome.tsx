import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search, MessageSquare, Info, AlertCircle, Star, Settings, FileText, Users, Calendar, Trash2, Edit, Plus, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion as ShadAccordion, AccordionContent as ShadAccordionContent, AccordionItem as ShadAccordionItem, AccordionTrigger as ShadAccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Alert as CustomAlert, AlertTitle as CustomAlertTitle, AlertDescription as CustomAlertDescription } from '@/components/Alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog as CustomAlertDialog, AlertDialogAction as CustomAlertDialogAction, AlertDialogCancel as CustomAlertDialogCancel, AlertDialogContent as CustomAlertDialogContent, AlertDialogDescription as CustomAlertDialogDescription, AlertDialogFooter as CustomAlertDialogFooter, AlertDialogHeader as CustomAlertDialogHeader, AlertDialogTitle as CustomAlertDialogTitle, AlertDialogTrigger as CustomAlertDialogTrigger } from '@/components/AlertDialog';
import CustomInput from '@/components/Input';
import CustomSelect from '@/components/Select';
import CustomTextarea from '@/components/Textarea';
import CustomCheckbox from '@/components/Checkbox';
import { Accordion as CustomAccordion, AccordionItem as CustomAccordionItem, AccordionTrigger as CustomAccordionTrigger, AccordionContent as CustomAccordionContent } from '@/components/Accordion';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/Collapsible';
import { Avatar as CustomAvatar, AvatarImage as CustomAvatarImage, AvatarFallback as CustomAvatarFallback } from '@/components/Avatar';

const themeIcons: Record<string, string> = {
  light: '🌞',
  dark: '🌙',
  brutalist: '🦄',
  default: '🧼',
  pastel: '🧁',
  editorial: '📰',
  minimal: '⬜',
  accessible: '🦻',
  kids: '🧸',
  retro: '💾',
  terminal: '💻',
};
const themeLabels: Record<string, string> = {
  light: 'Light',
  dark: 'Dark',
  brutalist: 'Brutalist',
  default: 'Default',
  pastel: 'Pastel',
  editorial: 'Editorial',
  minimal: 'Minimal',
  accessible: 'Accessible',
  kids: 'Kids',
  retro: 'Retro',
  terminal: 'Terminal',
};

const ShadcnHome = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [rating, setRating] = useState(0);
  const [customSelectValue, setCustomSelectValue] = useState('');
  const [customSelectValue2, setCustomSelectValue2] = useState('');
  const [customSelectValue3, setCustomSelectValue3] = useState('');

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Shadcn UI Component Demo</h1>
          <Button variant="outline" onClick={toggleTheme}>
            {themeIcons[theme] || '🎨'} {themeLabels[theme] || theme} Mode
          </Button>
        </div>

        <div className="space-y-8">

         {/* Custom Avatar Examples */}
         <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Avatar Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="space-y-6">
                {/* Basic Avatar Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Basic Avatar Examples</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <CustomAvatar>
                      <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <CustomAvatarFallback>CN</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="rounded-lg">
                      <CustomAvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <CustomAvatarFallback>ER</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar>
                      <CustomAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                      <CustomAvatarFallback>LR</CustomAvatarFallback>
                    </CustomAvatar>
                  </div>
                </div>

                {/* Variant Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Variant Examples</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar variant="primary">
                        <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <CustomAvatarFallback>CN</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar variant="secondary">
                        <CustomAvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                        <CustomAvatarFallback>ER</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar variant="outline">
                        <CustomAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                        <CustomAvatarFallback>LR</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Outline</span>
                    </div>
                  </div>
                </div>

                {/* Size Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar avatarSize="sm">
                        <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <CustomAvatarFallback>CN</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar avatarSize="md">
                        <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <CustomAvatarFallback>CN</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar avatarSize="lg">
                        <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <CustomAvatarFallback>CN</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Large</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CustomAvatar avatarSize="xl">
                        <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <CustomAvatarFallback>CN</CustomAvatarFallback>
                      </CustomAvatar>
                      <span className="text-xs text-muted-foreground">Extra Large</span>
                    </div>
                  </div>
                </div>

                {/* Fallback Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Fallback Examples</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <CustomAvatar variant="primary">
                      <CustomAvatarFallback>JD</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar variant="secondary">
                      <CustomAvatarFallback>SM</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar variant="outline">
                      <CustomAvatarFallback>AB</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar avatarSize="lg" variant="primary">
                      <CustomAvatarFallback>JS</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar avatarSize="xl" variant="secondary">
                      <CustomAvatarFallback>MK</CustomAvatarFallback>
                    </CustomAvatar>
                  </div>
                </div>

                {/* Grouped Avatars */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Grouped Avatars</h4>
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <CustomAvatar>
                      <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <CustomAvatarFallback>CN</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar>
                      <CustomAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                      <CustomAvatarFallback>LR</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar>
                      <CustomAvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <CustomAvatarFallback>ER</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar>
                      <CustomAvatarFallback>+2</CustomAvatarFallback>
                    </CustomAvatar>
                  </div>
                </div>

                {/* Different Shapes */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Different Shapes</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <CustomAvatar className="rounded-full">
                      <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <CustomAvatarFallback>CN</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="rounded-lg">
                      <CustomAvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                      <CustomAvatarFallback>ER</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="rounded-md">
                      <CustomAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                      <CustomAvatarFallback>LR</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="rounded-none">
                      <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <CustomAvatarFallback>CN</CustomAvatarFallback>
                    </CustomAvatar>
                  </div>
                </div>

                {/* Interactive Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Interactive Examples</h4>
                  <div className="flex flex-row flex-wrap items-center gap-6">
                    <CustomAvatar className="cursor-pointer hover:scale-110 transition-transform">
                      <CustomAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <CustomAvatarFallback>CN</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="cursor-pointer hover:scale-110 transition-transform" variant="secondary">
                      <CustomAvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                      <CustomAvatarFallback>ER</CustomAvatarFallback>
                    </CustomAvatar>
                    <CustomAvatar className="cursor-pointer hover:scale-110 transition-transform" variant="outline">
                      <CustomAvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                      <CustomAvatarFallback>LR</CustomAvatarFallback>
                    </CustomAvatar>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

         {/* Custom Alert Examples */}
         <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Alert Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="space-y-4">
                {/* Success Alert */}
                <CustomAlert
                  variant="success"
                  icon={<Info className="h-4 w-4" />}
                  title="Success! Your changes have been saved"
                  description="This is an alert with icon, title and description using the success variant."
                />

                {/* Info Alert */}
                <CustomAlert
                  variant="info"
                  icon={<Info className="h-4 w-4" />}
                  title="This Alert has a title and an icon. No description."
                />

                {/* Destructive Alert */}
                <CustomAlert
                  variant="destructive"
                  icon={<AlertCircle className="h-4 w-4" />}
                  title="Unable to process your payment."
                  description={
                    <div>
                      <p>Please verify your billing information and try again.</p>
                      <ul className="list-inside list-disc text-sm mt-2">
                        <li>Check your card details</li>
                        <li>Ensure sufficient funds</li>
                        <li>Verify billing address</li>
                      </ul>
                    </div>
                  }
                />

                {/* Primary Variant */}
                <CustomAlert
                  variant="primary"
                  icon={<Info className="h-4 w-4" />}
                  title="Primary Alert"
                  description="This alert uses the primary variant with theme-aware colors."
                />

                {/* Secondary Variant */}
                <CustomAlert
                  variant="secondary"
                  icon={<Info className="h-4 w-4" />}
                  title="Secondary Alert"
                  description="This alert uses the secondary variant with theme-aware colors."
                />

                {/* Outline Variant */}
                <CustomAlert
                  variant="outline"
                  icon={<Info className="h-4 w-4" />}
                  title="Outline Alert"
                  description="This alert uses the outline variant with transparent background."
                />

                {/* Warning Alert */}
                <CustomAlert
                  variant="warning"
                  icon={<AlertCircle className="h-4 w-4" />}
                  title="Warning: System Maintenance"
                  description="Scheduled maintenance will occur tonight at 2:00 AM. Some services may be temporarily unavailable."
                />

                {/* Different Sizes */}
                <div className="space-y-2">
                  <CustomAlert
                    variant="info"
                    size="sm"
                    icon={<Info className="h-3 w-3" />}
                    title="Small Alert"
                    description="This is a small-sized alert."
                  />
                  <CustomAlert
                    variant="info"
                    size="md"
                    icon={<Info className="h-4 w-4" />}
                    title="Medium Alert"
                    description="This is a medium-sized alert (default)."
                  />
                  <CustomAlert
                    variant="info"
                    size="lg"
                    icon={<Info className="h-5 w-5" />}
                    title="Large Alert"
                    description="This is a large-sized alert."
                  />
                </div>

                {/* Alert with Custom Content */}
                <CustomAlert
                  variant="outline"
                  icon={<Settings className="h-4 w-4" />}
                  title="Custom Content Alert"
                >
                  <CustomAlertDescription>
                    <p>This alert uses custom children content instead of the description prop.</p>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm">Action 1</Button>
                      <Button variant="outline" size="sm">Action 2</Button>
                    </div>
                  </CustomAlertDescription>
                </CustomAlert>
                             </div>
             </CollapsibleContent>
           </Collapsible>

         {/* Custom AlertDialog Examples */}
         <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom AlertDialog Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
                            <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Basic AlertDialog */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="outline" size="md">
                      Show Basic Dialog
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="outline">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Are you absolutely sure?</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This action cannot be undone. This will permanently delete your
                          account and remove your data from our servers.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="destructive" size="md">Continue</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>

                  {/* Primary Variant AlertDialog */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="primary" size="md">
                      Primary Dialog
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="primary">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Confirm Action</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This dialog uses the primary variant with theme-aware colors.
                          The content border and styling adapt to your current theme.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="primary" size="md">Confirm</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>

                  {/* Secondary Variant AlertDialog */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="secondary" size="md">
                      Secondary Dialog
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="secondary">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Secondary Action</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This dialog uses the secondary variant. Notice how the colors
                          adapt to your theme while maintaining the secondary styling.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="secondary" size="md">Proceed</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>

                  {/* Different Button Sizes */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="outline" size="lg">
                      Large Buttons Dialog
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="outline">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Large Button Example</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This dialog demonstrates different button sizes. The trigger is large,
                          and the action buttons can be customized independently.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="sm">Small Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="primary" size="lg">Large Action</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>

                  {/* Destructive Action Dialog */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="destructive" size="md">
                      Delete Account
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="outline">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Delete Account</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This action cannot be undone. This will permanently delete your
                          account and remove all your data from our servers.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="destructive" size="md">Delete Account</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>

                  {/* Small Trigger Dialog */}
                  <CustomAlertDialog>
                    <CustomAlertDialogTrigger variant="outline" size="sm">
                      Small Trigger
                    </CustomAlertDialogTrigger>
                    <CustomAlertDialogContent variant="outline">
                      <CustomAlertDialogHeader>
                        <CustomAlertDialogTitle>Small Trigger Example</CustomAlertDialogTitle>
                        <CustomAlertDialogDescription>
                          This dialog uses a small trigger button. Perfect for compact layouts
                          where space is limited.
                        </CustomAlertDialogDescription>
                      </CustomAlertDialogHeader>
                      <CustomAlertDialogFooter>
                        <CustomAlertDialogCancel variant="outline" size="sm">Cancel</CustomAlertDialogCancel>
                        <CustomAlertDialogAction variant="primary" size="sm">OK</CustomAlertDialogAction>
                      </CustomAlertDialogFooter>
                    </CustomAlertDialogContent>
                  </CustomAlertDialog>
                </div>

                 {/* Icon Button Examples */}
                 <div className="space-y-4">
                   <h4 className="font-semibold text-lg">Icon Button Examples</h4>
                   
                   <div className="flex flex-wrap gap-4 items-center">
                     {/* Delete Icon Button */}
                     <CustomAlertDialog>
                       <CustomAlertDialogTrigger 
                         variant="destructive" 
                         size="md" 
                         icon={<Trash2 />} 
                         iconOnly
                       />
                       <CustomAlertDialogContent variant="outline">
                         <CustomAlertDialogHeader>
                           <CustomAlertDialogTitle>Delete Item</CustomAlertDialogTitle>
                           <CustomAlertDialogDescription>
                             Are you sure you want to delete this item? This action cannot be undone
                             and the item will be permanently removed from the system.
                           </CustomAlertDialogDescription>
                         </CustomAlertDialogHeader>
                         <CustomAlertDialogFooter>
                           <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                           <CustomAlertDialogAction variant="destructive" size="md">Delete</CustomAlertDialogAction>
                         </CustomAlertDialogFooter>
                       </CustomAlertDialogContent>
                     </CustomAlertDialog>

                     {/* Edit Icon Button */}
                     <CustomAlertDialog>
                       <CustomAlertDialogTrigger 
                         variant="primary" 
                         size="md" 
                         icon={<Edit />} 
                         iconOnly
                       />
                       <CustomAlertDialogContent variant="primary">
                         <CustomAlertDialogHeader>
                           <CustomAlertDialogTitle>Edit Item</CustomAlertDialogTitle>
                           <CustomAlertDialogDescription>
                             Are you sure you want to edit this item? Any unsaved changes will be lost.
                           </CustomAlertDialogDescription>
                         </CustomAlertDialogHeader>
                         <CustomAlertDialogFooter>
                           <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                           <CustomAlertDialogAction variant="primary" size="md">Edit</CustomAlertDialogAction>
                         </CustomAlertDialogFooter>
                       </CustomAlertDialogContent>
                     </CustomAlertDialog>

                     {/* Add Icon Button */}
                     <CustomAlertDialog>
                       <CustomAlertDialogTrigger 
                         variant="secondary" 
                         size="md" 
                         icon={<Plus />} 
                         iconOnly
                       />
                       <CustomAlertDialogContent variant="secondary">
                         <CustomAlertDialogHeader>
                           <CustomAlertDialogTitle>Add New Item</CustomAlertDialogTitle>
                           <CustomAlertDialogDescription>
                             Are you ready to add a new item? This will create a new entry in the system.
                           </CustomAlertDialogDescription>
                         </CustomAlertDialogHeader>
                         <CustomAlertDialogFooter>
                           <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                           <CustomAlertDialogAction variant="secondary" size="md">Add</CustomAlertDialogAction>
                         </CustomAlertDialogFooter>
                       </CustomAlertDialogContent>
                     </CustomAlertDialog>

                     {/* Close Icon Button */}
                     <CustomAlertDialog>
                       <CustomAlertDialogTrigger 
                         variant="outline" 
                         size="sm" 
                         icon={<X />} 
                         iconOnly
                       />
                       <CustomAlertDialogContent variant="outline">
                         <CustomAlertDialogHeader>
                           <CustomAlertDialogTitle>Close Window</CustomAlertDialogTitle>
                           <CustomAlertDialogDescription>
                             Are you sure you want to close this window? Any unsaved changes will be lost.
                           </CustomAlertDialogDescription>
                         </CustomAlertDialogHeader>
                         <CustomAlertDialogFooter>
                           <CustomAlertDialogCancel variant="outline" size="sm">Stay</CustomAlertDialogCancel>
                           <CustomAlertDialogAction variant="outline" size="sm">Close</CustomAlertDialogAction>
                         </CustomAlertDialogFooter>
                       </CustomAlertDialogContent>
                     </CustomAlertDialog>

                     {/* Warning Icon Button */}
                     <CustomAlertDialog>
                       <CustomAlertDialogTrigger 
                         variant="outline" 
                         size="lg" 
                         icon={<AlertTriangle />} 
                         iconOnly
                       />
                       <CustomAlertDialogContent variant="outline">
                         <CustomAlertDialogHeader>
                           <CustomAlertDialogTitle>Warning Action</CustomAlertDialogTitle>
                           <CustomAlertDialogDescription>
                             This action may have serious consequences. Are you absolutely sure
                             you want to proceed with this operation?
                           </CustomAlertDialogDescription>
                         </CustomAlertDialogHeader>
                         <CustomAlertDialogFooter>
                           <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                           <CustomAlertDialogAction variant="destructive" size="md">Proceed</CustomAlertDialogAction>
                         </CustomAlertDialogFooter>
                       </CustomAlertDialogContent>
                     </CustomAlertDialog>
                   </div>

                   {/* Icon with Text Button */}
                   <CustomAlertDialog>
                     <CustomAlertDialogTrigger 
                       variant="primary" 
                       size="md" 
                       icon={<Trash2 />}
                     >
                       Delete with Text
                     </CustomAlertDialogTrigger>
                     <CustomAlertDialogContent variant="outline">
                       <CustomAlertDialogHeader>
                         <CustomAlertDialogTitle>Delete with Text</CustomAlertDialogTitle>
                         <CustomAlertDialogDescription>
                           This example shows an icon button with text. Useful when you want
                           both visual and textual context for the action.
                         </CustomAlertDialogDescription>
                       </CustomAlertDialogHeader>
                       <CustomAlertDialogFooter>
                         <CustomAlertDialogCancel variant="outline" size="md">Cancel</CustomAlertDialogCancel>
                         <CustomAlertDialogAction variant="destructive" size="md">Delete</CustomAlertDialogAction>
                       </CustomAlertDialogFooter>
                     </CustomAlertDialogContent>
                   </CustomAlertDialog>
                 </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

         {/* Custom Accordion Examples */}
         <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Accordion Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="space-y-6">
                {/* Product Information */}
                <CustomAccordion type="single" collapsible defaultValue="item-1">
                  <CustomAccordionItem value="item-1">
                    <CustomAccordionTrigger>Product Information</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                      </p>
                      <p>
                        Key features include advanced processing capabilities, and an
                        intuitive user interface designed for both beginners and experts.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                  <CustomAccordionItem value="item-2">
                    <CustomAccordionTrigger>Shipping Details</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                      </p>
                      <p>
                        All orders are carefully packaged and fully insured. Track your
                        shipment in real-time through our dedicated tracking portal.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                  <CustomAccordionItem value="item-3">
                    <CustomAccordionTrigger>Return Policy</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you're not completely satisfied, simply return the
                        item in its original condition.
                      </p>
                      <p>
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                </CustomAccordion>

                {/* FAQ Section */}
                <CustomAccordion type="multiple">
                  <CustomAccordionItem value="faq-1">
                    <CustomAccordionTrigger>What is Shadcn UI?</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS. 
                        It provides a set of accessible, customizable components that you can copy and paste into your apps.
                      </p>
                      <p>
                        The components are designed to be highly customizable and follow modern design principles.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                  <CustomAccordionItem value="faq-2">
                    <CustomAccordionTrigger>How does theming work?</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Theming is handled through CSS variables defined in the shadcn.css file. 
                        Each theme has its own set of color variables that control the appearance of all components.
                      </p>
                      <p>
                        This allows for easy theme switching and customization without modifying component code.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                  <CustomAccordionItem value="faq-3">
                    <CustomAccordionTrigger>Can I customize components?</CustomAccordionTrigger>
                    <CustomAccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Yes! Since Shadcn UI components are just React components with Tailwind classes, 
                        you can easily modify them to match your design requirements.
                      </p>
                      <p>
                        The theming system makes it easy to maintain consistency across your application.
                      </p>
                    </CustomAccordionContent>
                  </CustomAccordionItem>
                </CustomAccordion>
              </div>
            </CollapsibleContent>
          </Collapsible>

         {/* Custom Checkbox Examples */}
         <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Checkbox Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CustomCheckbox 
                    label="Primary Variant"
                    variant="primary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Secondary Variant"
                    variant="secondary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Outline Variant"
                    variant="outline"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Disabled Checkbox"
                    variant="primary"
                    size="md"
                    disabled
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="With Description"
                    description="This is a helpful description for the checkbox."
                    variant="primary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="With Error"
                    error="This field is required and must be checked."
                    variant="primary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Small Size"
                    variant="outline"
                    size="sm"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Large Size"
                    variant="secondary"
                    size="lg"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Terms and Conditions"
                    description="I agree to the terms and conditions of this service."
                    variant="primary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Newsletter Subscription"
                    description="Receive updates and newsletters via email."
                    variant="outline"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Marketing Communications"
                    description="Allow us to send you marketing materials."
                    variant="secondary"
                    size="md"
                  />
                </div>
                <div>
                  <CustomCheckbox 
                    label="Required Field"
                    error="You must accept this to continue."
                    variant="primary"
                    size="md"
                  />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>


        {/* Custom Collapsible Examples */}
        <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
                <h2 className="text-2xl font-semibold">Custom Collapsible Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
                <div className="space-y-4">
              {/* Primary Variant */}
              <Collapsible>
                <CollapsibleTrigger variant="primary" size="md">
                  Primary Collapsible
                </CollapsibleTrigger>
                <CollapsibleContent variant="primary" padding="md">
                  <p>This is a primary collapsible with primary styling. The content area uses the primary variant with medium padding.</p>
                  <p className="mt-2">You can put any content here - forms, lists, or other components.</p>
                </CollapsibleContent>
              </Collapsible>

              {/* Secondary Variant with Icon */}
              <Collapsible>
                <CollapsibleTrigger variant="secondary" size="md" icon={<Settings className="w-4 h-4" />}>
                  Settings Panel
                </CollapsibleTrigger>
                <CollapsibleContent variant="secondary" padding="lg">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Application Settings</h4>
                    <p>Configure your application preferences here.</p>
                    <div className="flex gap-2">
                      <Button size="sm">Save Settings</Button>
                      <Button variant="outline" size="sm">Reset</Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Outline Variant with Left Chevron */}
              <Collapsible>
                <CollapsibleTrigger 
                  variant="outline" 
                  size="md" 
                  icon={<FileText className="w-4 h-4" />}
                  chevronPosition="left"
                >
                  Documentation
                </CollapsibleTrigger>
                <CollapsibleContent variant="outline" padding="md">
                  <div className="prose prose-sm max-w-none">
                    <h4>Component Documentation</h4>
                    <p>This collapsible demonstrates the outline variant with a left-positioned chevron icon.</p>
                    <ul>
                      <li>Supports multiple variants (primary, secondary, outline)</li>
                      <li>Customizable sizes (sm, md, lg)</li>
                      <li>Icon support with flexible positioning</li>
                      <li>Different padding options for content</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Small Size with No Chevron */}
              <Collapsible>
                <CollapsibleTrigger variant="primary" size="sm" showChevron={false}>
                  Compact View
                </CollapsibleTrigger>
                <CollapsibleContent variant="outline" padding="sm">
                  <p className="text-sm">This is a compact collapsible without a chevron icon.</p>
                </CollapsibleContent>
              </Collapsible>

              {/* Large Size with Custom Content */}
              <Collapsible>
                <CollapsibleTrigger 
                  variant="secondary" 
                  size="lg" 
                  icon={<Users className="w-5 h-5" />}
                >
                  User Management
                </CollapsibleTrigger>
                <CollapsibleContent variant="primary" padding="lg">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">User Management Panel</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Active Users</h5>
                        <p className="text-sm text-muted-foreground">Manage currently active users</p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">User Permissions</h5>
                        <p className="text-sm text-muted-foreground">Configure user access levels</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>Add User</Button>
                      <Button variant="outline">Export Users</Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Disabled State */}
              <Collapsible>
                <CollapsibleTrigger variant="outline" size="md" disabled>
                  Disabled Collapsible
                </CollapsibleTrigger>
                <CollapsibleContent variant="outline" padding="md">
                  <p>This content won't be visible because the trigger is disabled.</p>
                </CollapsibleContent>
              </Collapsible>

              {/* Multiple Collapsibles */}
              <div className="space-y-2">
                <h4 className="font-semibold">Multiple Collapsibles</h4>
                <Collapsible>
                  <CollapsibleTrigger variant="outline" size="sm" icon={<Calendar className="w-4 h-4" />}>
                    Today's Events
                  </CollapsibleTrigger>
                  <CollapsibleContent variant="outline" padding="sm">
                    <ul className="text-sm space-y-1">
                      <li>• Team meeting at 10:00 AM</li>
                      <li>• Client call at 2:00 PM</li>
                      <li>• Code review at 4:00 PM</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible>
                  <CollapsibleTrigger variant="outline" size="sm" icon={<FileText className="w-4 h-4" />}>
                    Recent Documents
                  </CollapsibleTrigger>
                  <CollapsibleContent variant="outline" padding="sm">
                    <ul className="text-sm space-y-1">
                      <li>• Project proposal.docx</li>
                      <li>• Meeting notes.pdf</li>
                      <li>• Budget spreadsheet.xlsx</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            </CollapsibleContent>
          </Collapsible>

        {/* Custom Select Examples */}
        <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
                <h2 className="text-2xl font-semibold">Custom Select Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomSelect 
                  label="Primary Variant"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue}
                  onValueChange={setCustomSelectValue}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Secondary Variant"
                  placeholder="Select an option"
                  variant="secondary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue2}
                  onValueChange={setCustomSelectValue2}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Outline Variant"
                  placeholder="Select an option"
                  variant="outline"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  value={customSelectValue3}
                  onValueChange={setCustomSelectValue3}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Disabled Select"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  disabled
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Helper Text"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  helperText="This is some helpful information about this field."
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Error"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  error="This field is required and cannot be empty."
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Small Size"
                  placeholder="Select an option"
                  variant="outline"
                  selectSize="sm"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Large Size"
                  placeholder="Select an option"
                  variant="secondary"
                  selectSize="lg"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Searchable Select"
                  placeholder="Search and select..."
                  variant="primary"
                  selectSize="md"
                  searchable
                  options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'cherry', label: 'Cherry' },
                    { value: 'date', label: 'Date' },
                    { value: 'elderberry', label: 'Elderberry' },
                    { value: 'fig', label: 'Fig' },
                    { value: 'grape', label: 'Grape' },
                    { value: 'honeydew', label: 'Honeydew' },
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Option Groups"
                  placeholder="Select a category"
                  variant="outline"
                  selectSize="md"
                  optionGroups={[
                    {
                      label: 'Fruits',
                      options: [
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'cherry', label: 'Cherry' },
                      ]
                    },
                    {
                      label: 'Vegetables',
                      options: [
                        { value: 'carrot', label: 'Carrot' },
                        { value: 'broccoli', label: 'Broccoli' },
                        { value: 'spinach', label: 'Spinach' },
                      ]
                    },
                    {
                      label: 'Grains',
                      options: [
                        { value: 'rice', label: 'Rice' },
                        { value: 'wheat', label: 'Wheat' },
                        { value: 'oats', label: 'Oats' },
                      ]
                    }
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="Searchable with Groups"
                  placeholder="Search categories..."
                  variant="secondary"
                  selectSize="md"
                  searchable
                  optionGroups={[
                    {
                      label: 'Programming Languages',
                      options: [
                        { value: 'javascript', label: 'JavaScript' },
                        { value: 'typescript', label: 'TypeScript' },
                        { value: 'python', label: 'Python' },
                        { value: 'java', label: 'Java' },
                      ]
                    },
                    {
                      label: 'Frameworks',
                      options: [
                        { value: 'react', label: 'React' },
                        { value: 'vue', label: 'Vue' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                      ]
                    }
                  ]}
                />
              </div>
              <div>
                <CustomSelect 
                  label="With Disabled Options"
                  placeholder="Select an option"
                  variant="primary"
                  selectSize="md"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
                    { value: 'option5', label: 'Option 5' },
                  ]}
                />
              </div>
            </div>
            </CollapsibleContent>
          </Collapsible>
          {/* Button Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Button Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="flex flex-wrap gap-4 items-center">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button disabled>Disabled</Button>
                <Button>
                  <Search className="w-5 h-5 mr-2" /> Search
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Input Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Shadcn Input Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="input1">Primary</label>
                  <Input id="input1" placeholder="Primary input" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="input2">Disabled</label>
                  <Input id="input2" placeholder="Disabled input" disabled />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="input3">With Helper</label>
                  <Input id="input3" placeholder="With Helper" />
                  <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="input4">With Error</label>
                  <Input id="input4" placeholder="With Error" className="border-destructive" />
                  <span className="text-xs text-destructive mt-1 block" role="alert">This field is required.</span>
                </div>
                <div className="relative">
                  <label className="block mb-1 text-sm font-medium" htmlFor="input5">With Icon</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="input5" placeholder="Search..." className="pl-10" />
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Custom Input Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Input Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CustomInput 
                    label="Primary Variant"
                    placeholder="Primary input with label"
                    variant="primary"
                    inputSize="md"
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Secondary Variant"
                    placeholder="Secondary input with label"
                    variant="secondary"
                    inputSize="md"
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Outline Variant"
                    placeholder="Outline input with label"
                    variant="outline"
                    inputSize="md"
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Disabled Input"
                    placeholder="Disabled input"
                    variant="primary"
                    inputSize="md"
                    disabled
                  />
                </div>
                <div>
                  <CustomInput 
                    label="With Helper Text"
                    placeholder="Input with helper text"
                    variant="primary"
                    inputSize="md"
                    helperText="This is some helpful information about this field."
                  />
                </div>
                <div>
                  <CustomInput 
                    label="With Error"
                    placeholder="Input with error"
                    variant="primary"
                    inputSize="md"
                    error="This field is required and cannot be empty."
                  />
                </div>
                <div>
                  <CustomInput 
                    label="With Icon"
                    placeholder="Search with icon"
                    variant="primary"
                    inputSize="md"
                    icon={<Search className="w-4 h-4 text-muted-foreground" />}
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Small Size"
                    placeholder="Small input"
                    variant="outline"
                    inputSize="sm"
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Large Size"
                    placeholder="Large input"
                    variant="secondary"
                    inputSize="lg"
                  />
                </div>
                <div>
                  <CustomInput 
                    label="Email Input"
                    type="email"
                    placeholder="Enter your email"
                    variant="primary"
                    inputSize="md"
                    helperText="We'll never share your email with anyone else."
                  />
                </div>
                <div>
                  <CustomInput 
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

          {/* Date Picker */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Date Picker</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="date1">Date Input</label>
                  <Input 
                    id="date1" 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="datetime1">Date & Time</label>
                  <Input 
                    id="datetime1" 
                    type="datetime-local" 
                  />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Textarea Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Shadcn Textarea Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="textarea1">Primary</label>
                  <Textarea id="textarea1" placeholder="Primary textarea" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="textarea2">With Helper</label>
                  <Textarea id="textarea2" placeholder="With Helper" />
                  <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium" htmlFor="textarea3">With Error</label>
                  <Textarea id="textarea3" placeholder="With Error" className="border-destructive" />
                  <span className="text-xs text-destructive mt-1 block" role="alert">This field is required.</span>
                </div>
                <div className="relative">
                  <label className="block mb-1 text-sm font-medium" htmlFor="textarea4">With Icon</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea id="textarea4" placeholder="Comment..." className="pl-10" />
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Custom Textarea Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Custom Textarea Component Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CustomTextarea 
                    label="Primary Variant"
                    placeholder="Primary textarea with label"
                    variant="primary"
                    textareaSize="md"
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Secondary Variant"
                    placeholder="Secondary textarea with label"
                    variant="secondary"
                    textareaSize="md"
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Outline Variant"
                    placeholder="Outline textarea with label"
                    variant="outline"
                    textareaSize="md"
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Disabled Textarea"
                    placeholder="Disabled textarea"
                    variant="primary"
                    textareaSize="md"
                    disabled
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="With Helper Text"
                    placeholder="Textarea with helper text"
                    variant="primary"
                    textareaSize="md"
                    helperText="This is some helpful information about this field."
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="With Error"
                    placeholder="Textarea with error"
                    variant="primary"
                    textareaSize="md"
                    error="This field is required and cannot be empty."
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="With Icon"
                    placeholder="Comment with icon"
                    variant="primary"
                    textareaSize="md"
                    icon={<MessageSquare className="w-4 h-4 text-muted-foreground" />}
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Small Size"
                    placeholder="Small textarea"
                    variant="outline"
                    textareaSize="sm"
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Large Size"
                    placeholder="Large textarea"
                    variant="secondary"
                    textareaSize="lg"
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Bio Textarea"
                    placeholder="Tell us about yourself..."
                    variant="primary"
                    textareaSize="md"
                    helperText="Share a brief description about yourself."
                    rows={4}
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Feedback Textarea"
                    placeholder="Your feedback..."
                    variant="outline"
                    textareaSize="md"
                    error="Please provide more detailed feedback."
                    rows={5}
                  />
                </div>
                <div>
                  <CustomTextarea 
                    label="Code Snippet"
                    placeholder="Paste your code here..."
                    variant="secondary"
                    textareaSize="md"
                    helperText="Use this area to share code snippets."
                    rows={6}
                  />
                </div>
                <div>
                  <CustomTextarea 
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

          {/* Select Examples */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Shadcn Select Examples</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium">Primary</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                      <SelectItem value="option4">Option 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">With Helper</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                      <SelectItem value="option4">Option 4</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-xs text-muted-foreground mt-1 block">This is some helper text.</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Tabs */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Tabs</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                      <CardDescription>This is the overview tab content. It shows general information about the current theme and component system.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>Analytics data would be displayed here. This demonstrates how tabs can organize different types of content.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>Reports and detailed information would be shown in this tab. Each tab maintains its own state and content.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </CollapsibleContent>
          </Collapsible>

          {/* Shadcn Accordion */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Shadcn Accordion</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <ShadAccordion type="single" collapsible className="w-full">
                <ShadAccordionItem value="item-1">
                  <ShadAccordionTrigger>What is Shadcn UI?</ShadAccordionTrigger>
                  <ShadAccordionContent>
                    Shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS. It provides a set of accessible, customizable components that you can copy and paste into your apps.
                  </ShadAccordionContent>
                </ShadAccordionItem>
                <ShadAccordionItem value="item-2">
                  <ShadAccordionTrigger>How does theming work?</ShadAccordionTrigger>
                  <ShadAccordionContent>
                    Theming is handled through CSS variables defined in the shadcn.css file. Each theme has its own set of color variables that control the appearance of all components.
                  </ShadAccordionContent>
                </ShadAccordionItem>
                <ShadAccordionItem value="item-3">
                  <ShadAccordionTrigger>Can I customize components?</ShadAccordionTrigger>
                  <ShadAccordionContent>
                    Yes! Since Shadcn UI components are just React components with Tailwind classes, you can easily modify them to match your design requirements.
                  </ShadAccordionContent>
                </ShadAccordionItem>
              </ShadAccordion>
            </CollapsibleContent>
          </Collapsible>

          {/* Rating Component */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Rating Component</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 transition ${
                        star <= rating ? 'text-yellow-500' : 'text-muted-foreground'
                      }`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {rating > 0 ? `${rating} out of 5 stars` : 'No rating selected'}
                </span>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Shadcn Alert Components */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Shadcn Alert Components</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    This is an informational alert. It provides useful information to the user.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    This is an error alert. It indicates that something went wrong.
                  </AlertDescription>
                </Alert>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Modal */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Modal</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Modal Title</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog. It demonstrates how complex components can be built using Shadcn UI theme variables.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CollapsibleContent>
          </Collapsible>

          {/* Card Example */}
          <Collapsible>
            <CollapsibleTrigger variant="primary" size="lg">
              <h2 className="text-2xl font-semibold">Card Example</h2>
            </CollapsibleTrigger>
            <CollapsibleContent variant="outline" padding="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a card using Shadcn UI theme variables. The background, border, and text all use CSS variables from shadcn.css.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Action</Button>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="mt-12 p-6 bg-popover text-popover-foreground rounded-[var(--radius)] border border-border">
          <h3 className="text-lg font-semibold mb-2">Theme Information</h3>
          <p className="text-muted-foreground">
            Current theme: <span className="font-medium">{theme}</span>
          </p>
          <p className="text-muted-foreground mt-2">
            All colors are controlled by Shadcn UI theme variables. To change the entire app's appearance, 
            simply modify the variables in <code className="bg-background px-2 py-1 rounded">src/shadcn.css</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShadcnHome; 