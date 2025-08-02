import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent } from '@/components/Card';
import Badge from '@/components/Badge';
import { TrendingUp, Users, Globe, Award, Zap, Target } from 'lucide-react';

export interface StatisticsSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  layout?: 'grid' | 'cards' | 'list';
  showIcons?: boolean;
  showBadges?: boolean;
  showTrends?: boolean;
  animate?: boolean;
  className?: string;
  stats?: Stat[];
}

export interface Stat {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix: string;
  badge: string;
  trend: string;
  description: string;
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultStats: Stat[] = [
  {
    id: 'users',
    icon: Users,
    label: "Active Users",
    value: 50000,
    suffix: "+",
    badge: "Growing",
    trend: "+12%",
    description: "Developers using our platform",
  },
  {
    id: 'countries',
    icon: Globe,
    label: "Countries",
    value: 150,
    suffix: "+",
    badge: "Global",
    trend: "+5%",
    description: "Worldwide reach",
  },
  {
    id: 'projects',
    icon: Target,
    label: "Projects Built",
    value: 10000,
    suffix: "+",
    badge: "Successful",
    trend: "+25%",
    description: "Applications created",
  },
  {
    id: 'satisfaction',
    icon: Award,
    label: "Satisfaction Rate",
    value: 99,
    suffix: "%",
    badge: "Excellent",
    trend: "+2%",
    description: "Customer satisfaction",
  },
  {
    id: 'performance',
    icon: Zap,
    label: "Performance Score",
    value: 98,
    suffix: "/100",
    badge: "Fast",
    trend: "+3%",
    description: "Average performance rating",
  },
  {
    id: 'uptime',
    icon: TrendingUp,
    label: "Uptime",
    value: 99.9,
    suffix: "%",
    badge: "Reliable",
    trend: "+0.1%",
    description: "Service availability",
  },
];

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  size = 'lg',
  title = "Our Impact in Numbers",
  subtitle = "Statistics",
  description = "See how our platform is making a difference for developers and businesses around the world.",
  layout = 'grid',
  showIcons = true,
  showBadges = true,
  showTrends = true,
  animate = true,
  className = '',
  stats = defaultStats,
}) => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const animateCounts = useCallback(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const target = stat.value;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, stepDuration);
    });
  }, [stats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && animate) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, animate, animateCounts]);

  const renderStatCard = (stat: Stat, index: number) => (
    <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 text-center">
        {showIcons && (
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <stat.icon className="w-8 h-8 text-primary" />
          </div>
        )}
        
        {showBadges && stat.badge && (
          <Badge variant="primary" badgeSize="sm" className="mb-3">
            {stat.badge}
          </Badge>
        )}

        <div className="mb-2">
          <span className="text-4xl font-bold text-foreground">
            {hasAnimated ? counts[stat.id] || 0 : 0}
          </span>
          <span className="text-2xl font-semibold text-muted-foreground">
            {stat.suffix}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          {stat.label}
        </h3>

        <p className="text-muted-foreground text-sm mb-3">
          {stat.description}
        </p>

        {showTrends && stat.trend && (
          <div className="flex items-center justify-center space-x-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{stat.trend}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section ref={sectionRef} className={`${sizeClasses[size]} bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {showBadges && (
            <Badge variant="primary" className="mb-4">
              {subtitle}
            </Badge>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Statistics Grid */}
        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => renderStatCard(stat, index))}
          </div>
        )}

        {/* Statistics Cards */}
        {layout === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.slice(0, 4).map((stat, index) => (
              <Card key={index} variant="outline" className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {showIcons && (
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {hasAnimated ? counts[stat.id] || 0 : 0}
                    </span>
                    <span className="text-xl font-semibold text-muted-foreground">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>

                  {showTrends && stat.trend && (
                    <div className="flex items-center justify-center space-x-1 text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-medium">{stat.trend}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Statistics List */}
        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {showIcons && (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{stat.label}</h3>
                        <p className="text-muted-foreground text-sm">{stat.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="mb-1">
                        <span className="text-3xl font-bold text-foreground">
                          {hasAnimated ? counts[stat.id] || 0 : 0}
                        </span>
                        <span className="text-xl font-semibold text-muted-foreground">
                          {stat.suffix}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-end space-x-2">
                        {showBadges && stat.badge && (
                          <Badge variant="primary" badgeSize="sm">
                            {stat.badge}
                          </Badge>
                        )}
                        {showTrends && stat.trend && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-medium">{stat.trend}</span>
                          </div>
                        )}
                      </div>
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