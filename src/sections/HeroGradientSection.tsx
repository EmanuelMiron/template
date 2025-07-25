import React from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';

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
  showBadge?: boolean;
  badgeText?: string;
}

export const HeroGradientSection: React.FC<HeroGradientSectionProps> = ({
  size = 'lg',
  title = "Transform Your Ideas Into Reality",
  subtitle = "Next Generation Platform",
  description = "Build, deploy, and scale your applications with our cutting-edge platform. Join thousands of developers who trust us to power their next big idea.",
  primaryCTA = {
    text: "Get Started Free",
    href: "#",
    icon: <ArrowRight className="w-4 h-4" />
  },
  secondaryCTA = {
    text: "Watch Demo",
    href: "#",
    icon: <Play className="w-4 h-4" />
  },
  gradientType = 'blue',
  showStats = true,
  showVideo = true,
  showBadge = true,
  badgeText = "New Feature"
}) => {
  const gradientClasses = {
    blue: 'from-blue-600 via-blue-700 to-indigo-800',
    purple: 'from-purple-600 via-purple-700 to-indigo-800',
    green: 'from-green-600 via-green-700 to-emerald-800',
    orange: 'from-orange-600 via-orange-700 to-red-800',
    pink: 'from-pink-600 via-pink-700 to-rose-800'
  };

  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const stats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="w-5 h-5" /> },
    { label: 'Success Rate', value: '99.9%', icon: <Star className="w-5 h-5" /> },
    { label: 'Performance', value: '10x Faster', icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${sizeClasses[size]}`}>
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradientType]} animate-gradient`} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {showBadge && (
            <Badge 
              variant="secondary" 
              className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              {badgeText}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-medium">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(primaryCTA.href, '_blank')}
            >
              {primaryCTA.text}
              {primaryCTA.icon && <span className="ml-2">{primaryCTA.icon}</span>}
            </Button>
            
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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
                  <div className="flex items-center justify-center mb-2 text-blue-100">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Video Preview */}
          {showVideo && (
            <div className="relative max-w-2xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}; 