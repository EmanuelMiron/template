import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Badge from '@/components/Badge';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Shield } from 'lucide-react';

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
  title = "Get Started Today",
  subtitle = "Join Thousands of Users",
  description = "Ready to transform your business? Get in touch with our team and discover how we can help you achieve your goals.",
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

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Free consultation" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No commitment required" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 support" }
  ];

  const trustElements = [
    { icon: <Shield className="w-5 h-5" />, text: "GDPR Compliant" },
    { icon: <Shield className="w-5 h-5" />, text: "SSL Secured" },
    { icon: <Shield className="w-5 h-5" />, text: "Privacy Protected" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@company.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "123 Business St, City, State 12345" }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center ${sizeClasses[size]} bg-gradient-to-br from-slate-50 to-blue-50`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <Badge variant="primary" className="mb-6">
                🚀 Get Started
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Features */}
              {showFeatures && (
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-green-600">
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
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="text-blue-600">{info.icon}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{info.label}</div>
                        <div className="text-sm">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {formType === 'contact' && 'Contact Us'}
                      {formType === 'signup' && 'Create Account'}
                      {formType === 'newsletter' && 'Stay Updated'}
                    </h2>
                    <p className="text-gray-600">
                      {formType === 'contact' && 'Fill out the form below and we\'ll get back to you.'}
                      {formType === 'signup' && 'Join our platform and start building today.'}
                      {formType === 'newsletter' && 'Get the latest updates and insights delivered to your inbox.'}
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

                    {formType === 'contact' && (
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

                        <Textarea
                          label="Message"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={4}
                          required
                        />
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
                          {formType === 'contact' && 'Send Message'}
                          {formType === 'signup' && 'Create Account'}
                          {formType === 'newsletter' && 'Subscribe'}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Trust Elements */}
                  {showTrust && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-4 justify-center">
                        {trustElements.map((element, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-500 text-sm">
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