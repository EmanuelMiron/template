import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Badge from '@/components/Badge';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Shield } from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the hero form section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Get Started Today",
  subtitle: "Join Thousands of Users",
  description: "Ready to transform your business? Get in touch with our team and discover how we can help you achieve your goals.",
  
  // Badge content
  badge: {
    text: "🚀 Get Started",
  },
  
  // Features list
  features: [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Free consultation" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No commitment required" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 support" }
  ],
  
  // Trust elements
  trustElements: [
    { icon: <Shield className="w-5 h-5" />, text: "GDPR Compliant" },
    { icon: <Shield className="w-5 h-5" />, text: "SSL Secured" },
    { icon: <Shield className="w-5 h-5" />, text: "Privacy Protected" }
  ],
  
  // Contact information
  contactInfo: [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@company.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Business St, City, State 12345" }
  ],
  
  // Form configurations
  formConfigs: {
    contact: {
      title: "Contact Us",
      description: "Fill out the form below and we'll get back to you.",
      submitText: "Send Message",
      fields: {
        showBudget: true,
        showTimeline: true,
        showMessage: true,
      }
    },
    signup: {
      title: "Create Account",
      description: "Join our platform and start building today.",
      submitText: "Create Account",
      fields: {
        showBudget: false,
        showTimeline: false,
        showMessage: false,
      }
    },
    newsletter: {
      title: "Stay Updated",
      description: "Get the latest updates and insights delivered to your inbox.",
      submitText: "Subscribe",
      fields: {
        showBudget: false,
        showTimeline: false,
        showMessage: false,
      }
    }
  },
  
  // Success message
  successMessage: {
    title: "Thank You!",
    description: "We'll get back to you within 24 hours."
  }
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Make a Reservation",
//   subtitle: "Experience Fine Dining",
//   description: "Book your table at our award-winning restaurant and enjoy an unforgettable culinary experience.",
//   badge: {
//     text: "🍽️ Reserve Now",
//   },
//   features: [
//     { icon: <CheckCircle className="w-5 h-5" />, text: "Free cancellation" },
//     { icon: <CheckCircle className="w-5 h-5" />, text: "Special requests" },
//     { icon: <CheckCircle className="w-5 h-5" />, text: "Dietary accommodations" }
//   ],
//   trustElements: [
//     { icon: <Shield className="w-5 h-5" />, text: "Safe & Clean" },
//     { icon: <Shield className="w-5 h-5" />, text: "Contactless Service" },
//     { icon: <Shield className="w-5 h-5" />, text: "Health Protocols" }
//   ],
//   contactInfo: [
//     { icon: <Mail className="w-5 h-5" />, label: "Email", value: "reservations@restaurant.com" },
//     { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
//     { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "456 Gourmet Ave, Foodie City, FC 54321" }
//   ],
//   formConfigs: {
//     contact: {
//       title: "Make Reservation",
//       description: "Book your table and we'll confirm your reservation.",
//       submitText: "Book Table",
//       fields: {
//         showBudget: false,
//         showTimeline: true,
//         showMessage: true,
//       }
//     },
//     signup: {
//       title: "Join Our VIP Club",
//       description: "Get exclusive access to special events and promotions.",
//       submitText: "Join VIP Club",
//       fields: {
//         showBudget: false,
//         showTimeline: false,
//         showMessage: false,
//       }
//     },
//     newsletter: {
//       title: "Stay Updated",
//       description: "Get updates about new menu items and special events.",
//       submitText: "Subscribe",
//       fields: {
//         showBudget: false,
//         showTimeline: false,
//         showMessage: false,
//       }
//     }
//   },
//   successMessage: {
//     title: "Reservation Confirmed!",
//     description: "We'll send you a confirmation email shortly."
//   }
// };

export interface HeroFormSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  formType?: 'contact' | 'signup' | 'newsletter';
  showContactInfo?: boolean;
  showFeatures?: boolean;
  showTrust?: boolean;
}

export const HeroFormSection: React.FC<HeroFormSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  subtitle = defaultConfig.subtitle,
  description = defaultConfig.description,
  formType = 'contact',
  showContactInfo = true,
  showFeatures = true,
  showTrust = true
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const features = defaultConfig.features;
  const trustElements = defaultConfig.trustElements;
  const contactInfo = defaultConfig.contactInfo;
  const formConfig = defaultConfig.formConfigs[formType];

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center ${sizeClasses[size]}`}
      style={{
        backgroundColor: "var(--color-background-secondary)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <Badge 
                variant="primary" 
                className="mb-6"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-background)"
                }}
              >
                {defaultConfig.badge.text}
              </Badge>

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
                  style={{ color: "var(--color-primary)" }}
                >
                  {subtitle}
                </p>
              )}

              {/* Description */}
              <p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                {description}
              </p>

              {/* Features */}
              {showFeatures && (
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {feature.icon}
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Info */}
              {showContactInfo && (
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div style={{ color: "var(--color-primary)" }}>{info.icon}</div>
                      <div>
                        <div 
                          className="text-sm font-medium"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {info.label}
                        </div>
                        <div 
                          className="text-sm"
                          style={{ color: "var(--color-foreground-secondary)" }}
                        >
                          {info.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Form */}
            <div 
              className="rounded-2xl shadow-xl p-8 border"
              style={{
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-border)"
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--color-background-hover)" }}
                  >
                    <CheckCircle 
                      className="w-8 h-8" 
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {defaultConfig.successMessage.title}
                  </h3>
                  <p style={{ color: "var(--color-foreground-secondary)" }}>
                    {defaultConfig.successMessage.description}
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 
                      className="text-2xl font-bold mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {formConfig.title}
                    </h2>
                    <p style={{ color: "var(--color-foreground-secondary)" }}>
                      {formConfig.description}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        placeholder="John"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                      <Input
                        label="Last Name"
                        placeholder="Doe"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
                      />
                    </div>

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />

                    {formType === 'contact' && formConfig.fields.showBudget && (
                      <>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Input
                            label="Budget Range"
                            placeholder="Select budget"
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                          />
                          <Input
                            label="Timeline"
                            placeholder="Select timeline"
                            value={formData.timeline}
                            onChange={(e) => handleInputChange('timeline', e.target.value)}
                          />
                        </div>

                        {formConfig.fields.showMessage && (
                          <Textarea
                            label="Message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            rows={4}
                            required
                          />
                        )}
                      </>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {formConfig.submitText}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Trust Elements */}
                  {showTrust && (
                    <div 
                      className="mt-6 pt-6"
                      style={{ borderTop: "1px solid var(--color-border)" }}
                    >
                      <div className="flex flex-wrap gap-4 justify-center">
                        {trustElements.map((element, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 text-sm"
                            style={{ color: "var(--color-foreground-secondary)" }}
                          >
                            {element.icon}
                            <span>{element.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 