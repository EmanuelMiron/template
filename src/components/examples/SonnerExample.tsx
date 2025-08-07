import React from 'react';
import { toast } from 'sonner';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Button } from '../Button';
import { Sonner } from '../Sonner';

export const SonnerExample = () => {
  const showBasicToast = () => {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
    });
  };

  const showToastWithAction = () => {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  };

  const showSuccessToast = () => {
    toast.success('Success!', {
      description: 'Your action was completed successfully.',
    });
  };

  const showErrorToast = () => {
    toast.error('Error!', {
      description: 'Something went wrong. Please try again.',
    });
  };

  const showWarningToast = () => {
    toast.warning('Warning!', {
      description: 'Please check your input before proceeding.',
    });
  };

  const showInfoToast = () => {
    toast.info('Information', {
      description: 'Here is some important information for you.',
    });
  };

  const showPromiseToast = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Loading...',
        success: 'Successfully loaded!',
        error: 'Failed to load',
      }
    );
  };

  const showCustomToast = () => {
    toast('Custom Toast', {
      description: 'This is a custom toast with custom styling.',
      duration: 10000,
      action: {
        label: 'Dismiss',
        onClick: () => toast.dismiss(),
      },
    });
  };

  const showMultipleToasts = () => {
    toast('First toast');
    setTimeout(() => toast('Second toast'), 500);
    setTimeout(() => toast('Third toast'), 1000);
    setTimeout(() => toast('Fourth toast'), 1500);
    setTimeout(() => toast('Fifth toast'), 2000);
  };

  const showToastWithIcon = () => {
    toast('Toast with Icon', {
      description: 'This toast has a custom icon.',
      icon: '🎉',
    });
  };

  const showDismissibleToast = () => {
    toast('Dismissible Toast', {
      description: 'This toast can be dismissed manually.',
      duration: Infinity,
    });
  };

  return (
    <>
      <Sonner />
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">Sonner Toast Examples</h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Basic Examples</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Basic Toast</h5>
                  <Button variant="primary" size="sm" onClick={showBasicToast}>
                    Show Basic Toast
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Toast with Action</h5>
                  <Button variant="secondary" size="sm" onClick={showToastWithAction}>
                    Show Toast with Action
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Custom Toast</h5>
                  <Button variant="outline" size="sm" onClick={showCustomToast}>
                    Show Custom Toast
                  </Button>
                </div>
              </div>
            </div>

            {/* Toast Types */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Toast Types</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Success Toast</h5>
                  <Button variant="primary" size="sm" onClick={showSuccessToast}>
                    Show Success Toast
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Error Toast</h5>
                  <Button variant="secondary" size="sm" onClick={showErrorToast}>
                    Show Error Toast
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Warning Toast</h5>
                  <Button variant="outline" size="sm" onClick={showWarningToast}>
                    Show Warning Toast
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Info Toast</h5>
                  <Button variant="primary" size="sm" onClick={showInfoToast}>
                    Show Info Toast
                  </Button>
                </div>
              </div>
            </div>

            {/* Advanced Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Promise Toast</h5>
                  <Button variant="secondary" size="sm" onClick={showPromiseToast}>
                    Show Promise Toast
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Toast with Icon</h5>
                  <Button variant="outline" size="sm" onClick={showToastWithIcon}>
                    Show Toast with Icon
                  </Button>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Dismissible Toast</h5>
                  <Button variant="primary" size="sm" onClick={showDismissibleToast}>
                    Show Dismissible Toast
                  </Button>
                </div>
              </div>
            </div>

            {/* Multiple Toasts */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Multiple Toasts</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Multiple Toasts</h5>
                  <Button variant="secondary" size="sm" onClick={showMultipleToasts}>
                    Show Multiple Toasts
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    Shows 5 toasts in sequence to demonstrate stacking.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Dismiss All</h5>
                  <Button variant="outline" size="sm" onClick={() => toast.dismiss()}>
                    Dismiss All Toasts
                  </Button>
                </div>
              </div>
            </div>

            {/* Toast Configuration Examples */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Toast Configuration Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Short Duration</h5>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => toast('Short Toast', { duration: 1000 })}
                  >
                    Show Short Toast
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    Duration: 1 second
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Long Duration</h5>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => toast('Long Toast', { duration: 10000 })}
                  >
                    Show Long Toast
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    Duration: 10 seconds
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Persistent Toast</h5>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast('Persistent Toast', { duration: Infinity })}
                  >
                    Show Persistent Toast
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    Duration: Infinite (manual dismiss)
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Toast with Description</h5>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => toast('Main Message', { description: 'This is a detailed description that provides more context about the toast message.' })}
                  >
                    Show Toast with Description
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Toast with Action</h5>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => toast('Action Required', {
                      description: 'Please confirm this action.',
                      action: {
                        label: 'Confirm',
                        onClick: () => toast.success('Action confirmed!'),
                      },
                    })}
                  >
                    Show Toast with Action
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Toast with Cancel Action</h5>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast('Action Required', {
                      description: 'Please confirm this action.',
                      action: {
                        label: 'Confirm',
                        onClick: () => toast.success('Action confirmed!'),
                      },
                      cancel: {
                        label: 'Cancel',
                        onClick: () => toast.error('Action cancelled'),
                      },
                    })}
                  >
                    Show Toast with Cancel
                  </Button>
                </div>
              </div>
            </div>

            {/* Real-world Examples */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">File Upload</h5>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      toast.promise(
                        new Promise((resolve) => setTimeout(resolve, 3000)),
                        {
                          loading: 'Uploading file...',
                          success: 'File uploaded successfully!',
                          error: 'Upload failed. Please try again.',
                        }
                      );
                    }}
                  >
                    Simulate File Upload
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Form Submission</h5>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      toast.promise(
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            Math.random() > 0.5 ? resolve(true) : reject(new Error('Network error'));
                          }, 2000);
                        }),
                        {
                          loading: 'Submitting form...',
                          success: 'Form submitted successfully!',
                          error: 'Submission failed. Please check your connection.',
                        }
                      );
                    }}
                  >
                    Simulate Form Submission
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Settings Saved</h5>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast.success('Settings saved', {
                        description: 'Your preferences have been updated.',
                        action: {
                          label: 'Undo',
                          onClick: () => toast('Settings reverted'),
                        },
                      });
                    }}
                  >
                    Save Settings
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-3">Connection Status</h5>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      toast.info('Connection restored', {
                        description: 'You are now back online.',
                        icon: '🌐',
                      });
                    }}
                  >
                    Simulate Connection Restore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}; 