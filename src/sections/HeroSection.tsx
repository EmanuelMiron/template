import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Play, Star } from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the hero section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Build something amazing",
  description: "Create stunning websites and applications with our modern component library. Built for developers who want to ship faster and build better.",
  
  // Call-to-action buttons
  primaryCTA: "Get Started",
  secondaryCTA: "Watch Demo",
  
  // Background image
  backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  
  // Statistics section
  stats: [
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9', label: 'Rating', icon: <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" /> }
  ]
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Experience Culinary Excellence",
//   description: "Discover our passion for creating unforgettable dining experiences with locally-sourced ingredients and innovative culinary techniques.",
//   primaryCTA: "Make Reservation",
//   secondaryCTA: "View Menu",
//   backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
//   stats: [
//     { value: '10K+', label: 'Happy Customers' },
//     { value: '15+', label: 'Awards Won' },
//     { value: '25+', label: 'Years Experience' }
//   ]
// };

export interface HeroSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  backgroundImage?: string;
  showStats?: boolean;
  showVideo?: boolean;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  variant = 'primary',
  size = 'md',
  title = defaultConfig.title,
  description = defaultConfig.description,
  primaryCTA = defaultConfig.primaryCTA,
  secondaryCTA = defaultConfig.secondaryCTA,
  backgroundImage = defaultConfig.backgroundImage,
  showStats = true,
  showVideo = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'min-h-[40vh]',
    md: 'min-h-[60vh]',
    lg: 'min-h-[80vh]',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)"
        };
      case 'secondary':
        return {
          background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 50%, var(--color-background) 100%)"
        };
      case 'outline':
        return {
          backgroundColor: "var(--color-background)",
          borderBottom: "1px solid var(--color-border)"
        };
      default:
        return {
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)"
        };
    }
  };

  const stats = defaultConfig.stats;

  return (
    <section 
      className={`relative ${sizeClasses[size]} ${className} flex items-center`}
      style={getVariantStyles()}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h1>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="group"
            >
              {primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {showVideo ? (
              <Button
                variant="outline"
                size="lg"
                style={{
                  backgroundColor: "var(--color-background-hover)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-foreground)"
                }}
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryCTA}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                style={{
                  backgroundColor: "var(--color-background-hover)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-foreground)"
                }}
              >
                {secondaryCTA}
              </Button>
            )}
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="flex justify-center items-center"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {stat.icon && stat.icon}
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