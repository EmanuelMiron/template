import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface MinimalHeroSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  showSubtitle?: boolean;
  showDescription?: boolean;
  showSecondaryCTA?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultPrimaryCTA = {
  text: "Get Started",
  href: "#",
  icon: <ArrowRight className="w-4 h-4" />
};

const defaultSecondaryCTA = {
  text: "Learn More",
  href: "#",
  icon: <ExternalLink className="w-4 h-4" />
};

export const MinimalHeroSection: React.FC<MinimalHeroSectionProps> = ({
  size = 'lg',
  title = "Simple. Powerful. Effective.",
  subtitle = "Minimal Design, Maximum Impact",
  description = "Sometimes less is more. Our minimal approach focuses on what matters most - delivering value through clean, purposeful design.",
  primaryCTA = defaultPrimaryCTA,
  secondaryCTA = defaultSecondaryCTA,
  showSubtitle = true,
  showDescription = true,
  showSecondaryCTA = true,
  textAlign = 'center',
  maxWidth = '2xl'
}) => {
  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl'
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={`relative ${sizeClasses[size]} bg-background`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${textAlignClasses[textAlign]}`}>
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {showSubtitle && subtitle && (
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 font-light">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {showDescription && description && (
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${
            textAlign === 'center' ? 'justify-center' : 
            textAlign === 'right' ? 'justify-end' : 'justify-start'
          }`}>
            {primaryCTA.href ? (
              <a href={primaryCTA.href}>
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {primaryCTA.text}
                  {primaryCTA.icon && <span className="ml-2">{primaryCTA.icon}</span>}
                </Button>
              </a>
            ) : (
              <Button
                variant="primary"
                size="lg"
                className="shadow-sm hover:shadow-md transition-all duration-200"
              >
                {primaryCTA.text}
                {primaryCTA.icon && <span className="ml-2">{primaryCTA.icon}</span>}
              </Button>
            )}
            
            {showSecondaryCTA && secondaryCTA && (
              secondaryCTA.href ? (
                <a href={secondaryCTA.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-muted-foreground hover:bg-muted"
                  >
                    {secondaryCTA.text}
                    {secondaryCTA.icon && <span className="ml-2">{secondaryCTA.icon}</span>}
                  </Button>
                </a>
              ) : (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:bg-muted"
                >
                  {secondaryCTA.text}
                  {secondaryCTA.icon && <span className="ml-2">{secondaryCTA.icon}</span>}
                </Button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  );
}; 