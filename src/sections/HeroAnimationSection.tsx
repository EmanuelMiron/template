import React, { useEffect, useRef } from 'react';
import Button from '@/components/Button';
import { ArrowRight, Play, Sparkles, Zap, Target, Rocket } from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the hero animation section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Build the Future with Animation",
  subtitle: "Interactive & Engaging",
  description: "Experience the power of modern web animations. Create stunning, interactive experiences that captivate your audience and drive engagement.",
  
  // Call-to-action buttons
  primaryCTA: {
    text: "Start Building",
    href: "#",
    icon: <ArrowRight className="w-4 h-4" />
  },
  secondaryCTA: {
    text: "View Examples",
    href: "#",
    icon: <Play className="w-4 h-4" />
  },
  
  // Floating elements configuration
  floatingElements: [
    { icon: <Sparkles className="w-6 h-6" />, delay: 0, position: 'top-20 left-10' },
    { icon: <Zap className="w-6 h-6" />, delay: 1000, position: 'top-40 right-20' },
    { icon: <Target className="w-6 h-6" />, delay: 2000, position: 'bottom-40 left-20' },
    { icon: <Rocket className="w-6 h-6" />, delay: 3000, position: 'bottom-20 right-10' }
  ],
  
  // Statistics section
  stats: [
    { label: 'Animations', value: '100+', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'Performance', value: '60fps', icon: <Zap className="w-5 h-5" /> },
    { label: 'Compatibility', value: '100%', icon: <Target className="w-5 h-5" /> }
  ],
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Experience Culinary Excellence",
//   subtitle: "Fine Dining & Atmosphere",
//   description: "Discover our award-winning cuisine crafted with passion and the finest ingredients. Every dish tells a story of tradition and innovation.",
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
//   floatingElements: [
//     { icon: <Sparkles className="w-6 h-6" />, delay: 0, position: 'top-20 left-10' },
//     { icon: <Zap className="w-6 h-6" />, delay: 1000, position: 'top-40 right-20' },
//     { icon: <Target className="w-6 h-6" />, delay: 2000, position: 'bottom-40 left-20' },
//     { icon: <Rocket className="w-6 h-6" />, delay: 3000, position: 'bottom-20 right-10' }
//   ],
//   stats: [
//     { label: 'Dishes', value: '50+', icon: <Sparkles className="w-5 h-5" /> },
//     { label: 'Chefs', value: 'Expert', icon: <Zap className="w-5 h-5" /> },
//     { label: 'Satisfaction', value: '100%', icon: <Target className="w-5 h-5" /> }
//   ],
// };

export interface HeroAnimationSectionProps {
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
  animationType?: 'floating' | 'parallax' | 'particles' | 'wave';
  showFloatingElements?: boolean;
  showParticles?: boolean;
  showWave?: boolean;
}

export const HeroAnimationSection: React.FC<HeroAnimationSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  subtitle = defaultConfig.subtitle,
  description = defaultConfig.description,
  primaryCTA = defaultConfig.primaryCTA,
  secondaryCTA = defaultConfig.secondaryCTA,
  showFloatingElements = true,
  showParticles = true,
  showWave = true
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const floatingElements = defaultConfig.floatingElements;

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${sizeClasses[size]}`}
      style={{
        background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 50%, var(--color-background) 100%)"
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)",
            opacity: 0.1
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      {showFloatingElements && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.position} animate-bounce`}
              style={{ 
                animationDelay: `${element.delay}ms`, 
                animationDuration: '3s',
                color: "var(--color-primary)"
              }}
            >
              {element.icon}
            </div>
          ))}
        </div>
      )}

      {/* Particles Effect */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2000}ms`,
                animationDuration: `${2 + Math.random() * 3}s`,
                backgroundColor: "var(--color-primary)",
                opacity: 0.3
              }}
            />
          ))}
        </div>
      )}

      {/* Wave Animation */}
      {showWave && (
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 h-full"
            style={{
              background: "linear-gradient(to top, var(--color-primary), transparent)",
              opacity: 0.2
            }}
          >
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                style={{ fill: "var(--color-primary)" }}
              />
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                style={{ fill: "var(--color-primary)" }}
              />
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                style={{ fill: "var(--color-primary)" }}
              />
            </svg>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title with Typing Animation */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {word}{' '}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-xl sm:text-2xl mb-4 font-medium animate-fade-in-up" 
              style={{ 
                animationDelay: '0.8s',
                color: "var(--color-foreground-secondary)"
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p 
            className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" 
            style={{ 
              animationDelay: '1s',
              color: "var(--color-foreground-secondary)"
            }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <Button
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(primaryCTA.href, '_blank')}
            >
              {primaryCTA.text}
              {primaryCTA.icon && <span className="ml-2">{primaryCTA.icon}</span>}
            </Button>
            
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm transform hover:scale-105"
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

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {defaultConfig.stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
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