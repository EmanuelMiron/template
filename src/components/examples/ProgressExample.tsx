import React, { useState, useEffect } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import { Progress } from '../Progress';

export const ProgressExample = () => {
  const [progress, setProgress] = useState(13);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Progress Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Progress Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Progress Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={progress}
                  label="Primary Progress"
                  showValue
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                <Progress
                  variant="secondary"
                  size="md"
                  value={75}
                  label="Secondary Progress"
                  showValue
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                <Progress
                  variant="outline"
                  size="md"
                  value={45}
                  label="Outline Progress"
                  showValue
                />
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Progress
                  variant="primary"
                  size="sm"
                  value={60}
                  label="Small Progress"
                  showValue
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Progress
                  variant="secondary"
                  size="md"
                  value={80}
                  label="Medium Progress"
                  showValue
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Progress
                  variant="outline"
                  size="lg"
                  value={90}
                  label="Large Progress"
                  showValue
                />
              </div>
            </div>
          </div>

          {/* Color Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Color Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Success Color</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={85}
                  label="Success Progress"
                  showValue
                  color="success"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Warning Color</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={65}
                  label="Warning Progress"
                  showValue
                  color="warning"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Error Color</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={35}
                  label="Error Progress"
                  showValue
                  color="error"
                />
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Animated Progress</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={animatedProgress}
                  label="Animated Progress"
                  showValue
                  animated
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Striped Progress</h5>
                <Progress
                  variant="secondary"
                  size="md"
                  value={loadingProgress}
                  label="Loading Progress"
                  showValue
                  striped
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Custom Max Value</h5>
                <Progress
                  variant="outline"
                  size="md"
                  value={7}
                  max={10}
                  label="Custom Max (7/10)"
                  showValue
                />
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Dynamic Progress</h5>
                <div className="space-y-4">
                  <Progress
                    variant="primary"
                    size="md"
                    value={progress}
                    label="Dynamic Progress"
                    showValue
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setProgress(Math.max(0, progress - 10))}
                      className="px-3 py-1 text-sm bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-hover)]"
                    >
                      -10%
                    </button>
                    <button
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                      className="px-3 py-1 text-sm bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-hover)]"
                    >
                      +10%
                    </button>
                    <button
                      onClick={() => setProgress(0)}
                      className="px-3 py-1 text-sm bg-[var(--color-outline-border)] text-[var(--color-foreground)] rounded hover:bg-[var(--color-background-hover)]"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">File Upload Progress</h5>
                <Progress
                  variant="secondary"
                  size="md"
                  value={loadingProgress}
                  label="Uploading file..."
                  showValue
                  color="success"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">System Status</h5>
                <div className="space-y-3">
                  <Progress
                    variant="outline"
                    size="sm"
                    value={95}
                    label="CPU Usage"
                    showValue
                    color="success"
                  />
                  <Progress
                    variant="outline"
                    size="sm"
                    value={78}
                    label="Memory Usage"
                    showValue
                    color="warning"
                  />
                  <Progress
                    variant="outline"
                    size="sm"
                    value={45}
                    label="Disk Usage"
                    showValue
                    color="error"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Usage Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Simple Progress</h5>
                <Progress
                  variant="primary"
                  size="md"
                  value={50}
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">With Label Only</h5>
                <Progress
                  variant="secondary"
                  size="md"
                  value={75}
                  label="Task Progress"
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">With Value Only</h5>
                <Progress
                  variant="outline"
                  size="md"
                  value={90}
                  showValue
                />
              </div>

              <div>
                <h5 className="font-medium mb-2">Complete Example</h5>
                <Progress
                  variant="primary"
                  size="lg"
                  value={85}
                  label="Project Completion"
                  showValue
                  color="success"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Real-world Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Download Progress</h5>
              <div className="space-y-3">
                <Progress
                  variant="primary"
                  size="md"
                  value={loadingProgress}
                  label="Downloading file.zip"
                  showValue
                  color="success"
                />
                <div className="text-xs text-[var(--color-foreground-secondary)]">
                  {Math.round(loadingProgress * 2.5)}MB / 250MB
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Form Completion</h5>
              <div className="space-y-3">
                <Progress
                  variant="secondary"
                  size="md"
                  value={60}
                  label="Form Progress"
                  showValue
                />
                <div className="text-xs text-[var(--color-foreground-secondary)]">
                  3 of 5 sections completed
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Battery Status</h5>
              <div className="space-y-3">
                <Progress
                  variant="outline"
                  size="md"
                  value={25}
                  label="Battery Level"
                  showValue
                  color={25 < 20 ? "error" : 25 < 50 ? "warning" : "success"}
                />
                <div className="text-xs text-[var(--color-foreground-secondary)]">
                  Low battery warning
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Game Progress</h5>
              <div className="space-y-3">
                <Progress
                  variant="primary"
                  size="md"
                  value={87}
                  label="Level Progress"
                  showValue
                  color="success"
                />
                <div className="text-xs text-[var(--color-foreground-secondary)]">
                  Experience: 8,700 / 10,000 XP
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 