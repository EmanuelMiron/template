import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Users, 
  Lock, 
  Clock,
  CheckCircle
} from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the features section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Powerful Features",
  description: "Discover the amazing features that make our platform the perfect choice for your next project.",
  
  // Features array
  features: [
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
  ],
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Why Choose Us",
//   subtitle: "Our Promise",
//   description: "Experience the difference that quality ingredients, expert chefs, and exceptional service make.",
//   features: [
//     {
//       icon: Shield,
//       title: "Fresh Ingredients",
//       description: "We source only the finest, locally-sourced ingredients for every dish we serve.",
//       badge: "Quality",
//       benefits: ["Local suppliers", "Daily deliveries", "Organic options"],
//     },
//     {
//       icon: Users,
//       title: "Expert Chefs",
//       description: "Our team of experienced chefs brings creativity and passion to every meal.",
//       badge: "Expertise",
//       benefits: ["Award-winning chefs", "Creative menus", "Seasonal specials"],
//     },
//     {
//       icon: Clock,
//       title: "Fast Service",
//       description: "We respect your time with quick, efficient service without compromising quality.",
//       badge: "Efficient",
//       benefits: ["Quick preparation", "Online ordering", "Delivery options"],
//     },
//     // ... more restaurant-specific features
//   ],
// };

export interface FeaturesSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  layout?: 'grid' | 'cards' | 'list';
  showIcons?: boolean;
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  description = defaultConfig.description,
  layout = 'grid',
  showIcons = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const features = defaultConfig.features;

  const renderFeatureCard = (feature: typeof features[0], index: number) => (
    <Card 
      key={index} 
      variant="outline" 
      className="group hover:shadow-lg transition-all duration-300"
      style={{
        backgroundColor: "var(--color-background)",
        border: "1px solid var(--color-border)"
      }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {showIcons && (
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: "var(--color-background-hover)",
                  color: "var(--color-primary)"
                }}
              >
                <feature.icon className="w-6 h-6" />
              </div>
            )}
            <div>
              <CardTitle 
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-foreground)" }}
              >
                {feature.title}
              </CardTitle>
              {feature.badge && (
                <Badge 
                  variant="primary" 
                  badgeSize="sm" 
                  className="mb-2"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-background)"
                  }}
                >
                  {feature.badge}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p 
          className="mb-4 leading-relaxed"
          style={{ color: "var(--color-foreground-secondary)" }}
        >
          {feature.description}
        </p>
        <ul className="space-y-2">
          {feature.benefits.map((benefit, benefitIndex) => (
            <li key={benefitIndex} className="flex items-center text-sm">
              <CheckCircle 
                className="w-4 h-4 mr-2 flex-shrink-0" 
                style={{ color: "var(--color-primary)" }}
              />
              <span style={{ color: "var(--color-foreground-secondary)" }}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section 
      className={`${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: "var(--color-background-secondary)",
        color: "var(--color-foreground)"
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
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
              <Card 
                key={index} 
                variant="outline" 
                className="text-center group hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "1px solid var(--color-border)"
                }}
              >
                <CardContent className="pt-6">
                  {showIcons && (
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
                      style={{ 
                        backgroundColor: "var(--color-background-hover)",
                        color: "var(--color-primary)"
                      }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                  )}
                  {feature.badge && (
                    <Badge 
                      variant="primary" 
                      badgeSize="sm" 
                      className="mb-3"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-background)"
                      }}
                    >
                      {feature.badge}
                    </Badge>
                  )}
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Features List */}
        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                variant="outline" 
                className="group hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "1px solid var(--color-border)"
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {showIcons && (
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                        style={{ 
                          backgroundColor: "var(--color-background-hover)",
                          color: "var(--color-primary)"
                        }}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 
                          className="text-xl font-semibold"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {feature.title}
                        </h3>
                        {feature.badge && (
                          <Badge 
                            variant="primary" 
                            badgeSize="sm"
                            style={{
                              backgroundColor: "var(--color-primary)",
                              color: "var(--color-background)"
                            }}
                          >
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p 
                        className="mb-3 leading-relaxed"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {feature.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm">
                            <CheckCircle 
                              className="w-4 h-4 mr-2 flex-shrink-0" 
                              style={{ color: "var(--color-primary)" }}
                            />
                            <span style={{ color: "var(--color-foreground-secondary)" }}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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