import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';

export interface HeroSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  backgroundImage?: string;
  showStats?: boolean;
  showVideo?: boolean;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  variant = 'primary',
  size = 'lg',
  title = "Build something amazing",
  subtitle = "The future is here",
  description = "Create stunning websites and applications with our modern component library. Built for developers who want to ship faster and build better.",
  primaryCTA = "Get Started",
  secondaryCTA = "Watch Demo",
  backgroundImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  showStats = true,
  showVideo = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'min-h-[60vh]',
    md: 'min-h-[80vh]',
    lg: 'min-h-screen',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
    secondary: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    outline: 'bg-white border-b border-gray-200',
  };

  return (
    <section className={`relative ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          {subtitle && (
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                {subtitle}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryCTA}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {secondaryCTA}
              </Button>
            )}
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <div className="flex justify-center items-center text-white/70">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  Rating
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 