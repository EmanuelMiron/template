import React from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { ArrowRight, Play, CheckCircle, Star, Users, Zap } from 'lucide-react';

export interface SplitHeroSectionProps {
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
  imageUrl?: string;
  imageAlt?: string;
  showStats?: boolean;
  showFeatures?: boolean;
  showVideo?: boolean;
  imagePosition?: 'left' | 'right';
}

export const SplitHeroSection: React.FC<SplitHeroSectionProps> = ({
  size = 'lg',
  title = "Build Something Amazing",
  subtitle = "Modern Development Platform",
  description = "Create, deploy, and scale your applications with our powerful platform. Join thousands of developers who trust us to power their next big idea.",
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
  imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  imageAlt = "Modern development workspace",
  showStats = true,
  showFeatures = true,
  showVideo = true,
  imagePosition = 'right'
}) => {
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

  const features = [
    "No setup required",
    "Instant deployment",
    "Global CDN",
    "24/7 support"
  ];

  const ContentSection = () => (
    <div className="flex flex-col justify-center h-full">
      {/* Badge */}
      <Badge variant="primary" className="mb-6 w-fit">
        🚀 New Platform
      </Badge>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl sm:text-2xl text-blue-600 mb-4 font-medium">
          {subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
        {description}
      </p>

      {/* Features */}
      {showFeatures && (
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            className="border-gray-300 hover:bg-gray-50"
            onClick={() => window.open(secondaryCTA.href, '_blank')}
          >
            {secondaryCTA.text}
            {secondaryCTA.icon && <span className="ml-2">{secondaryCTA.icon}</span>}
          </Button>
        )}
      </div>

      {/* Stats */}
      {showStats && (
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const ImageSection = () => (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
          
          {/* Video Overlay */}
          {showVideo && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-gray-900 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Live Demo</div>
              <div className="text-xs text-gray-500">See it in action</div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">4.9/5 Rating</div>
              <div className="text-xs text-gray-500">From 2,000+ users</div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl -z-10 blur-xl" />
      </div>
    </div>
  );

  return (
    <section className={`relative ${sizeClasses[size]} bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center min-h-[600px] ${
            imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
          }`}>
            {imagePosition === 'left' ? (
              <>
                <div className="lg:col-start-2">
                  <ImageSection />
                </div>
                <div className="lg:col-start-1">
                  <ContentSection />
                </div>
              </>
            ) : (
              <>
                <ContentSection />
                <ImageSection />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 