import React, { useState } from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { Card } from '@/components/Card';
import { 
  Check, 
  X, 
  ArrowRight,
  Zap,
  Shield,
  Crown,
  Users,
  Headphones
} from 'lucide-react';

export interface PricingTablesSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  showBillingToggle?: boolean;
  showPopularBadge?: boolean;
  showFeatureComparison?: boolean;
  layout?: 'grid' | 'table' | 'cards';
  columns?: 3 | 4;
  plans?: Plan[];
  features?: Feature[];
  faqContent?: FAQContent;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: React.ReactNode;
  features: string[];
  notIncluded: string[];
  isPopular: boolean;
  isEnterprise: boolean;
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

export interface Feature {
  name: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

export interface FAQContent {
  title: string;
  description: string;
  supportButtonText: string;
  salesButtonText: string;
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultPlans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      '1GB storage',
      'Basic integrations'
    ],
    notIncluded: [
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration'
    ],
    isPopular: false,
    isEnterprise: false,
    cta: 'Get Started',
    ctaVariant: 'outline'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: <Shield className="w-6 h-6" />,
    features: [
      'Up to 25 projects',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Team collaboration',
      'Custom branding',
      'API access'
    ],
    notIncluded: [
      'Unlimited projects',
      'Dedicated support',
      'Custom development'
    ],
    isPopular: true,
    isEnterprise: false,
    cta: 'Start Free Trial',
    ctaVariant: 'primary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    monthlyPrice: 99,
    yearlyPrice: 990,
    icon: <Crown className="w-6 h-6" />,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'Advanced team features',
      'Custom branding',
      'API access',
      'Custom development',
      'SLA guarantee',
      'On-premise option',
      'Advanced security'
    ],
    notIncluded: [],
    isPopular: false,
    isEnterprise: true,
    cta: 'Contact Sales',
    ctaVariant: 'secondary'
  }
];

const defaultFeatures: Feature[] = [
  { name: 'Projects', starter: '5', professional: '25', enterprise: 'Unlimited' },
  { name: 'Storage', starter: '1GB', professional: '10GB', enterprise: 'Unlimited' },
  { name: 'Users', starter: '1', professional: '10', enterprise: 'Unlimited' },
  { name: 'Analytics', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced' },
  { name: 'Support', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
  { name: 'Integrations', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { name: 'API Access', starter: false, professional: true, enterprise: true },
  { name: 'Custom Branding', starter: false, professional: true, enterprise: true },
  { name: 'SLA Guarantee', starter: false, professional: false, enterprise: true }
];

const defaultFAQContent: FAQContent = {
  title: "Questions about pricing?",
  description: "Can't find the plan you're looking for? Contact our sales team.",
  supportButtonText: "Contact Support",
  salesButtonText: "Talk to Sales"
};

export const PricingTablesSection: React.FC<PricingTablesSectionProps> = ({
  size = 'lg',
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the Perfect Plan",
  description = "Start free and scale as you grow. No hidden fees, no surprises.",
  showBillingToggle = true,
  showPopularBadge = true,
  showFeatureComparison = true,
  layout = 'grid',
  columns = 3,
  plans = defaultPlans,
  features = defaultFeatures,
  faqContent = defaultFAQContent
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const gridCols = {
    3: 'grid-cols-1 lg:grid-cols-3',
    4: 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'
  };

  const getPrice = (plan: Plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: Plan) => {
    if (billingCycle === 'yearly') {
      return plan.monthlyPrice * 12 - plan.yearlyPrice;
    }
    return 0;
  };

  return (
    <section className={`relative ${sizeClasses[size]} bg-background`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-primary mb-4 font-medium">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Billing Toggle */}
        {showBillingToggle && (
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-lg p-1 border border-border shadow-sm">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                    billingCycle === 'monthly'
                      ? 'bg-primary text-primary-foreground shadow-lg border-2 border-primary/20 font-semibold scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                    billingCycle === 'yearly'
                      ? 'bg-primary text-primary-foreground shadow-lg border-2 border-primary/20 font-semibold scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  Yearly
                  <Badge variant="primary" className="ml-2 text-xs">
                    Save 20%
                  </Badge>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        {layout === 'grid' && (
          <div className={`grid ${gridCols[columns]} gap-8 mb-12`}>
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.isPopular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {showPopularBadge && plan.isPopular && (
                  <Badge variant="primary" className="absolute top-4 right-4">
                    Most Popular
                  </Badge>
                )}

                {/* Plan Header */}
                <div className="p-6 text-center border-b border-border">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">${getPrice(plan)}</span>
                      <span className="text-muted-foreground ml-2">
                        /{billingCycle === 'monthly' ? 'mo' : 'year'}
                      </span>
                    </div>
                    {getSavings(plan) > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${getSavings(plan)} per year
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <X className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.ctaVariant}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Feature Comparison Table */}
        {showFeatureComparison && layout === 'table' && (
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-lg border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {plan.icon}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-foreground">{plan.name}</div>
                      <div className="text-sm text-muted-foreground">{plan.description}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {typeof feature[plan.id as keyof typeof feature] === 'boolean' ? (
                          feature[plan.id as keyof typeof feature] ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-foreground">
                            {feature[plan.id as keyof typeof feature] as string}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {faqContent.title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {faqContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Headphones className="w-4 h-4 mr-2" />
              {faqContent.supportButtonText}
            </Button>
            <Button variant="primary">
              <Users className="w-4 h-4 mr-2" />
              {faqContent.salesButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 