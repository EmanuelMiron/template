import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Download, Play, Star, Users, Zap } from 'lucide-react';

export interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'primary' | 'secondary' | 'download' | 'trial' | 'newsletter' | 'social';
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryIcon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  backgroundImage?: string;
  showStats?: boolean;
  className?: string;
}

// ============================================================================
// CONFIGURATION SECTION - AI AGENTS CAN EASILY MODIFY THESE VALUES
// ============================================================================

// Default configuration - modify these values to customize the content
const defaultConfig = {
  title: "Ready to get started?",
  description: "Start building amazing applications today with our comprehensive component library. No credit card required.",
  primaryCTA: "Get Started",
  secondaryCTA: "Learn More",
  backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  stats: [
    { label: "Active Users", value: "10K+" },
    { label: "Countries", value: "50+" },
    { label: "Satisfaction", value: "99%" }
  ]
};

// Example: To customize for a SaaS product, modify the defaultConfig like this:
// const defaultConfig = {
//   title: "Start Your Free Trial Today",
//   subtitle: "Join 50,000+ developers",
//   description: "Get access to our powerful development tools and start building faster. 14-day free trial, no credit card required.",
//   primaryCTA: "Start Free Trial",
//   secondaryCTA: "View Demo",
//   backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1170&h=600&fit=crop",
//   stats: [
//     { label: "Active Users", value: "50K+" },
//     { label: "Countries", value: "120+" },
//     { label: "Uptime", value: "99.9%" }
//   ]
// };

// ============================================================================
// COMPONENT SECTION - NO NEED TO MODIFY BELOW THIS LINE
// ============================================================================

export const CTASection: React.FC<CTASectionProps> = ({
  variant = 'primary',
  size = 'lg',
  type = 'primary',
  title = defaultConfig.title,
  description = defaultConfig.description,
  primaryCTA = defaultConfig.primaryCTA,
  secondaryCTA = defaultConfig.secondaryCTA,
  primaryIcon,
  secondaryIcon,
  backgroundImage = defaultConfig.backgroundImage,
  showStats = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const getBackgroundStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
          color: 'var(--color-background)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-background-secondary)',
          color: 'var(--color-foreground)'
        };
      case 'outline':
        return {
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          border: '1px solid var(--color-border)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
          color: 'var(--color-background)'
        };
    }
  };

  const getDefaultIcons = () => {
    switch (type) {
      case 'download':
        return { primary: <Download className="w-5 h-5" />, secondary: <Play className="w-5 h-5" /> };
      case 'trial':
        return { primary: <Zap className="w-5 h-5" />, secondary: <Users className="w-5 h-5" /> };
      case 'newsletter':
        return { primary: <ArrowRight className="w-5 h-5" />, secondary: <Star className="w-5 h-5" /> };
      default:
        return { primary: <ArrowRight className="w-5 h-5" />, secondary: <Play className="w-5 h-5" /> };
    }
  };

  const defaultIcons = getDefaultIcons();
  const primaryIconToUse = primaryIcon || defaultIcons.primary;
  const secondaryIconToUse = secondaryIcon || defaultIcons.secondary;

  const backgroundStyle = getBackgroundStyle();

  return (
    <section 
      className={`relative ${sizeClasses[size]} ${className}`}
      style={backgroundStyle}
    >
      {/* Background Image */}
      {backgroundImage && variant !== 'outline' && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="CTA background"
            className="w-full h-full object-cover opacity-10"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* Removed Badge rendering */}

          {/* Title */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: variant === 'outline' ? 'var(--color-foreground)' : 'var(--color-background)' }}
          >
            {title}
          </h2>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: variant === 'outline' 
                ? 'var(--color-foreground-secondary)' 
                : 'rgba(255, 255, 255, 0.9)'
            }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="group"
              style={{
                backgroundColor: variant === 'outline' ? 'var(--color-primary)' : 'var(--color-background)',
                color: variant === 'outline' ? 'var(--color-background)' : 'var(--color-primary)'
              }}
            >
              {primaryCTA}
              {primaryIconToUse && (
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  {primaryIconToUse}
                </span>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10"
              style={{
                borderColor: variant === 'outline' ? 'var(--color-border)' : 'rgba(255, 255, 255, 0.2)',
                color: variant === 'outline' ? 'var(--color-foreground)' : 'var(--color-background)',
                backgroundColor: 'transparent'
              }}
            >
              {secondaryCTA}
              {secondaryIconToUse && (
                <span className="ml-2">
                  {secondaryIconToUse}
                </span>
              )}
            </Button>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {defaultConfig.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ 
                      color: variant === 'outline' 
                        ? 'var(--color-primary)' 
                        : 'var(--color-background)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ 
                      color: variant === 'outline' 
                        ? 'var(--color-foreground-secondary)' 
                        : 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};