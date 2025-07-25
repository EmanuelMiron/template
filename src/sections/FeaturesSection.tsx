import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import Badge from '@/components/Badge';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Users, 
  Lock, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export interface FeaturesSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  layout?: 'grid' | 'cards' | 'list';
  showIcons?: boolean;
  showBadges?: boolean;
  showCTAs?: boolean;
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  size = 'lg',
  title = "Powerful Features",
  subtitle = "What We Offer",
  description = "Discover the amazing features that make our platform the perfect choice for your next project.",
  layout = 'grid',
  showIcons = true,
  showBadges = true,
  showCTAs = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed and performance. Our components load instantly and respond immediately to user interactions.",
      badge: "Popular",
      benefits: ["Sub-second load times", "Optimized for performance", "CDN delivery"],
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Security is built into every component. We follow industry best practices to keep your data safe.",
      badge: "Enterprise",
      benefits: ["SOC 2 compliant", "GDPR ready", "Regular security audits"],
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Every component is designed with mobile devices in mind. Perfect experiences on any screen size.",
      badge: "Responsive",
      benefits: ["Touch optimized", "Adaptive layouts", "Progressive enhancement"],
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Our content delivery network ensures your applications load quickly from anywhere in the world.",
      badge: "Global",
      benefits: ["200+ locations", "99.9% uptime", "Automatic failover"],
    },
    {
      icon: BarChart3,
      title: "Analytics Ready",
      description: "Built-in analytics and monitoring help you understand how users interact with your applications.",
      badge: "Insights",
      benefits: ["Real-time metrics", "Custom dashboards", "Performance monitoring"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with built-in collaboration tools and real-time updates.",
      badge: "Collaborative",
      benefits: ["Real-time editing", "Version control", "Team permissions"],
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Advanced security features for enterprise customers with strict compliance requirements.",
      badge: "Enterprise",
      benefits: ["SSO integration", "Audit logs", "Custom security policies"],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our support team is available around the clock to help you succeed with our platform.",
      badge: "Support",
      benefits: ["Live chat", "Phone support", "Knowledge base"],
    },
  ];

  const renderFeatureCard = (feature: typeof features[0], index: number) => (
    <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {showIcons && (
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
            )}
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </CardTitle>
              {showBadges && feature.badge && (
                <Badge variant="primary" badgeSize="sm" className="mb-2">
                  {feature.badge}
                </Badge>
              )}
            </div>
          </div>
          {showCTAs && (
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {feature.description}
        </p>
        <ul className="space-y-2">
          {feature.benefits.map((benefit, benefitIndex) => (
            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section className={`${sizeClasses[size]} bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {showBadges && (
            <Badge variant="primary" className="mb-4">
              {subtitle}
            </Badge>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature, index) => renderFeatureCard(feature, index))}
          </div>
        )}

        {/* Features Cards */}
        {layout === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="outline" className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  {showIcons && (
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  )}
                  {showBadges && feature.badge && (
                    <Badge variant="primary" badgeSize="sm" className="mb-3">
                      {feature.badge}
                    </Badge>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Features List */}
        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {showIcons && (
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        {showBadges && feature.badge && (
                          <Badge variant="primary" badgeSize="sm">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {showCTAs && (
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection; 