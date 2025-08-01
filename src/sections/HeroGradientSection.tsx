import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the hero gradient section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Transform Your Ideas Into Reality",
  subtitle: "Next Generation Platform",
  description: "Build, deploy, and scale your applications with our cutting-edge platform. Join thousands of developers who trust us to power their next big idea.",
  
  // Call-to-action buttons
  primaryCTA: {
    text: "Get Started Free",
    href: "#",
    icon: <ArrowRight className="w-4 h-4" />
  },
  secondaryCTA: {
    text: "Watch Demo",
    href: "#",
    icon: <Play className="w-4 h-4" />
  },
  
  // Video configuration
  video: {
    youtubeId: "X_JFUXkck38", // Default YouTube video ID
    thumbnail: "https://img.youtube.com/vi/X_JFUXkck38/maxresdefault.jpg",
    title: "Product Demo Video"
  },
  
  // Statistics section
  stats: [
    { label: 'Active Users', value: '50K+', icon: <Users className="w-5 h-5" /> },
    { label: 'Success Rate', value: '99.9%', icon: <Star className="w-5 h-5" /> },
    { label: 'Performance', value: '10x Faster', icon: <Zap className="w-5 h-5" /> }
  ],
  
  // Gradient configurations
  gradients: {
    blue: {
      background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 25%, var(--color-primary) 50%, var(--color-secondary) 75%, var(--color-background) 100%)",
      overlay: "rgba(59, 130, 246, 0.05)"
    },
    purple: {
      background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 25%, var(--color-primary) 50%, var(--color-secondary) 75%, var(--color-background) 100%)",
      overlay: "rgba(147, 51, 234, 0.05)"
    },
    green: {
      background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 25%, var(--color-primary) 50%, var(--color-secondary) 75%, var(--color-background) 100%)",
      overlay: "rgba(34, 197, 94, 0.05)"
    },
    orange: {
      background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 25%, var(--color-primary) 50%, var(--color-secondary) 75%, var(--color-background) 100%)",
      overlay: "rgba(249, 115, 22, 0.05)"
    },
    pink: {
      background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 25%, var(--color-primary) 50%, var(--color-secondary) 75%, var(--color-background) 100%)",
      overlay: "rgba(236, 72, 153, 0.05)"
    }
  }
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Experience Culinary Excellence",
//   subtitle: "Award-Winning Restaurant",
//   description: "Discover our passion for creating unforgettable dining experiences with locally-sourced ingredients and innovative culinary techniques.",
//   primaryCTA: {
//     text: "Make Reservation",
//     href: "#",
//     icon: <ArrowRight className="w-4 h-4" />
//   },
//   secondaryCTA: {
//     text: "View Menu",
//     href: "#",
//     icon: <Play className="w-4 h-4" />
//   },
//   video: {
//     youtubeId: "YOUR_RESTAURANT_VIDEO_ID",
//     thumbnail: "https://img.youtube.com/vi/YOUR_RESTAURANT_VIDEO_ID/maxresdefault.jpg",
//     title: "Restaurant Tour Video"
//   },
//   stats: [
//     { label: 'Happy Customers', value: '10K+', icon: <Users className="w-5 h-5" /> },
//     { label: 'Awards Won', value: '15+', icon: <Star className="w-5 h-5" /> },
//     { label: 'Years Experience', value: '25+', icon: <Zap className="w-5 h-5" /> }
//   ],
//   gradients: {
//     blue: {
//       background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #1e40af 100%)",
//       overlay: "rgba(59, 130, 246, 0.1)"
//     },
//     // ... other gradients
//   }
// };

export interface HeroGradientSectionProps {
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
  gradientType?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
  showStats?: boolean;
  showVideo?: boolean;
  videoId?: string;
  videoTitle?: string;
}

export const HeroGradientSection: React.FC<HeroGradientSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  subtitle = defaultConfig.subtitle,
  description = defaultConfig.description,
  primaryCTA = defaultConfig.primaryCTA,
  secondaryCTA = defaultConfig.secondaryCTA,
  gradientType = 'blue',
  showStats = true,
  showVideo = true,
  videoId = defaultConfig.video.youtubeId,
  videoTitle = defaultConfig.video.title
}) => {
  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const stats = defaultConfig.stats;
  const gradientConfig = defaultConfig.gradients[gradientType];

  const handleVideoClick = () => {
    // Open YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${sizeClasses[size]}`}
      style={{
        background: gradientConfig.background
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: "var(--color-primary)",
            opacity: 0.1,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ 
            backgroundColor: "var(--color-secondary)",
            opacity: 0.1,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500"
          style={{ 
            backgroundColor: "var(--color-primary)",
            opacity: 0.05,
            animationDuration: '6s'
          }}
        />
        
        {/* Subtle mesh gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-secondary) 0%, transparent 50%), radial-gradient(circle at 40% 40%, var(--color-primary) 0%, transparent 50%)",
            opacity: 0.03
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-xl sm:text-2xl mb-4 font-medium"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p 
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(primaryCTA.href, '_blank')}
            >
              {primaryCTA.text}
              {primaryCTA.icon && <span className="ml-2">{primaryCTA.icon}</span>}
            </Button>
            
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)"
                }}
                onClick={() => window.open(secondaryCTA.href, '_blank')}
              >
                {secondaryCTA.text}
                {secondaryCTA.icon && <span className="ml-2">{secondaryCTA.icon}</span>}
              </Button>
            )}
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="flex items-center justify-center mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.icon}
                  </div>
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "var(--color-foreground-secondary)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Video Preview */}
          {showVideo && videoId && (
            <div className="relative max-w-2xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group" onClick={handleVideoClick}>
                {/* YouTube Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={videoTitle}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    // Fallback to medium quality if maxresdefault doesn't exist
                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "var(--color-background-hover)" }}
                  >
                    <Play 
                      className="w-8 h-8 ml-1" 
                      style={{ color: "var(--color-foreground)" }}
                    />
                  </div>
                </div>
                
                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p 
                    className="text-white font-medium text-lg"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {videoTitle}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: "var(--color-foreground-secondary)" }}
          />
        </div>
      </div>
    </section>
  );
}; 