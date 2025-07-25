import React from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { ArrowRight, Download, Play, Star, Users, Zap } from 'lucide-react';

export interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'primary' | 'secondary' | 'download' | 'trial' | 'newsletter' | 'social';
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryIcon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  backgroundImage?: string;
  showBadge?: boolean;
  showStats?: boolean;
  showSocial?: boolean;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  variant = 'primary',
  size = 'lg',
  type = 'primary',
  title = "Ready to get started?",
  subtitle = "Join thousands of users",
  description = "Start building amazing applications today with our comprehensive component library. No credit card required.",
  primaryCTA = "Get Started",
  secondaryCTA = "Learn More",
  primaryIcon,
  secondaryIcon,
  backgroundImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  showBadge = true,
  showStats = true,
  showSocial = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
    secondary: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    outline: 'bg-white border border-gray-200',
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

  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Countries", value: "50+" },
    { label: "Satisfaction", value: "99%" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" },
    { name: "Discord", href: "#", icon: "🎮" },
  ];

  return (
    <section className={`relative ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {/* Background Image */}
      {backgroundImage && variant !== 'outline' && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="CTA background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {showBadge && subtitle && (
            <Badge variant="primary" className="mb-6 bg-white/10 text-white border-white/20">
              {subtitle}
            </Badge>
          )}

          {/* Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            variant === 'outline' ? 'text-gray-900' : 'text-white'
          }`}>
            {title}
          </h2>

          {/* Description */}
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            variant === 'outline' ? 'text-gray-600' : 'text-white/90'
          }`}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className={`group ${variant === 'outline' ? '' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
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
              className={`${variant === 'outline' 
                ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                : 'border-white/20 text-white hover:bg-white/10'
              }`}
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
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    variant === 'outline' ? 'text-blue-600' : 'text-white'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    variant === 'outline' ? 'text-gray-600' : 'text-white/70'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Links */}
          {showSocial && (
            <div className="flex justify-center items-center space-x-6">
              <span className={`text-sm ${
                variant === 'outline' ? 'text-gray-600' : 'text-white/70'
              }`}>
                Follow us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-2xl hover:scale-110 transition-transform ${
                    variant === 'outline' ? 'text-gray-600 hover:text-blue-600' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection; 