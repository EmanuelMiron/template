import React from 'react';
import { Share, Settings, User, FileText, AlertTriangle, Info } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../Dialog';
import Button from '../Button';
import Input from '../Input';

export const DialogExample = () => {
  const [formData, setFormData] = React.useState({
    name: 'Pedro Duarte',
    username: '@peduarte',
    email: 'pedro@example.com',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Dialog Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Dialog Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Dialog Examples</h4>
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary" size="md">
                    <User className="w-4 h-4 mr-2" />
                    Primary Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="primary" size="md">
                  <DialogHeader>
                    <DialogTitle>Primary Dialog</DialogTitle>
                    <DialogDescription>
                      This is a primary variant dialog with default styling.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      This dialog demonstrates the primary variant with a clean, modern design.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="primary">Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="md">
                    <Settings className="w-4 h-4 mr-2" />
                    Secondary Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="secondary" size="md">
                  <DialogHeader>
                    <DialogTitle>Secondary Dialog</DialogTitle>
                    <DialogDescription>
                      This is a secondary variant dialog with different styling.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      The secondary variant provides an alternative visual style.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                    <Button variant="secondary">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="md">
                    <FileText className="w-4 h-4 mr-2" />
                    Outline Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="outline" size="md">
                  <DialogHeader>
                    <DialogTitle>Outline Dialog</DialogTitle>
                    <DialogDescription>
                      This is an outline variant dialog with subtle borders.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      The outline variant has a more subtle appearance.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="primary">Proceed</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary" size="sm">
                    Small Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="primary" size="sm">
                  <DialogHeader>
                    <DialogTitle>Small Dialog</DialogTitle>
                    <DialogDescription>
                      This is a small-sized dialog.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-2">
                    <p className="text-sm text-muted-foreground">
                      Perfect for simple confirmations or brief messages.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">OK</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="md">
                    Medium Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="secondary" size="md">
                  <DialogHeader>
                    <DialogTitle>Medium Dialog</DialogTitle>
                    <DialogDescription>
                      This is a medium-sized dialog (default).
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      The default size for most use cases.
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="secondary">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    Large Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="outline" size="lg">
                  <DialogHeader>
                    <DialogTitle>Large Dialog</DialogTitle>
                    <DialogDescription>
                      This is a large-sized dialog for more content.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Large dialogs are perfect for forms or detailed content.
                    </p>
                    <div className="space-y-3">
                      <Input label="Name" placeholder="Enter your name" />
                      <Input label="Email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="primary">Submit</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary" size="lg">
                    Extra Large Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent variant="primary" size="xl">
                  <DialogHeader>
                    <DialogTitle>Extra Large Dialog</DialogTitle>
                    <DialogDescription>
                      This is an extra large dialog for complex content.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Extra large dialogs can accommodate complex forms, tables, or detailed information.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="First Name" placeholder="John" />
                        <Input label="Last Name" placeholder="Doe" />
                      </div>
                      <Input label="Email" type="email" placeholder="john.doe@example.com" />
                      <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="City" placeholder="New York" />
                        <Input label="Country" placeholder="United States" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="primary">Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Form Dialog */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Form Dialog</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary" size="md">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent variant="primary" size="lg">
                <form onSubmit={handleFormSubmit}>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-3">
                      <Input
                        label="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Input
                        label="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Input
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>
                    <Button variant="primary" type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Share Dialog */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Share Dialog</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="md">
                  <Share className="w-4 h-4 mr-2" />
                  Share Link
                </Button>
              </DialogTrigger>
              <DialogContent variant="secondary" size="md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2 py-4">
                  <div className="grid flex-1 gap-2">
                    <Input
                      value="https://ui.shadcn.com/docs/installation"
                      readOnly
                      helperText="This link will be copied to your clipboard"
                    />
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button variant="outline" type="button">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Alert Dialog */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Alert Dialog</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="md">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Show Alert
                </Button>
              </DialogTrigger>
              <DialogContent variant="outline" size="sm">
                <DialogHeader>
                  <DialogTitle>Delete Account</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete your account? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    This will permanently delete your account and remove all your data from our servers.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button variant="primary" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete Account
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Info Dialog */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Info Dialog</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary" size="md">
                  <Info className="w-4 h-4 mr-2" />
                  Information
                </Button>
              </DialogTrigger>
              <DialogContent variant="primary" size="md">
                <DialogHeader>
                  <DialogTitle>About This App</DialogTitle>
                  <DialogDescription>
                    Learn more about the features and capabilities.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    This is a comprehensive UI component library built with React and Tailwind CSS.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    All components are fully accessible, customizable, and themeable.
                  </p>
                  <div className="bg-muted/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">
                      <strong>Version:</strong> 1.0.0<br />
                      <strong>Framework:</strong> React 19<br />
                      <strong>Styling:</strong> Tailwind CSS
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="primary">Got it</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary" size="md">
                  Try Different Variants
                </Button>
              </DialogTrigger>
              <DialogContent variant="primary" size="lg">
                <DialogHeader>
                  <DialogTitle>Dialog Variants Demo</DialogTitle>
                  <DialogDescription>
                    This dialog shows how different variants look and feel.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-background">
                      <h5 className="font-medium mb-2">Primary Variant</h5>
                      <p className="text-sm text-muted-foreground">
                        Clean, modern design with primary color accents.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg bg-secondary/20">
                      <h5 className="font-medium mb-2">Secondary Variant</h5>
                      <p className="text-sm text-muted-foreground">
                        Alternative styling with secondary color scheme.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg bg-outline/20">
                      <h5 className="font-medium mb-2">Outline Variant</h5>
                      <p className="text-sm text-muted-foreground">
                        Subtle design with outline borders and minimal styling.
                      </p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button variant="primary">Learn More</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 