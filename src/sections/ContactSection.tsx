import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import { Alert, AlertDescription } from '@/components/Alert';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export interface ContactSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  showForm?: boolean;
  showInfo?: boolean;
  className?: string;
}

// ============================================================================
// CONFIGURATION SECTION - AI AGENTS CAN EASILY MODIFY THESE VALUES
// ============================================================================

// Default configuration - modify these values to customize the content
const defaultConfig = {
  title: "Get in Touch",
  description: "Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  form: {
    title: "Send us a message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your full name"
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com"
      },
      subject: {
        label: "Subject",
        placeholder: "What's this about?"
      },
      message: {
        label: "Message",
        placeholder: "Tell us more about your project or question..."
      }
    },
    button: {
      text: "Send Message",
      loadingText: "Sending..."
    },
    messages: {
      success: "Thank you for your message! We'll get back to you soon.",
      error: "Something went wrong. Please try again or contact us directly."
    }
  },
  contactInfo: [
    {
      icon: Mail,
      title: "Email",
      value: "hello@company.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Innovation St, Tech City, TC 12345",
      description: "Come visit us anytime"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday",
      description: "8:00 AM - 6:00 PM EST"
    }
  ]
};

// Example: To customize for a restaurant, modify the defaultConfig like this:
// const defaultConfig = {
//   title: "Contact Bella Vista",
//   description: "Have a question about our menu or want to make a reservation? We'd love to hear from you.",
//   form: {
//     title: "Send us a message",
//     fields: {
//       name: { label: "Name", placeholder: "Your full name" },
//       email: { label: "Email", placeholder: "your.email@example.com" },
//       subject: { label: "Subject", placeholder: "Reservation, Menu Question, etc." },
//       message: { label: "Message", placeholder: "Tell us about your inquiry..." }
//     },
//     button: { text: "Send Message", loadingText: "Sending..." },
//     messages: {
//       success: "Thank you for your message! We'll get back to you within 2 hours.",
//       error: "Something went wrong. Please call us directly at +1 (555) 123-4567."
//     }
//   },
//   contactInfo: [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "info@bellavista.com",
//       description: "We'll respond within 2 hours"
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+1 (555) 123-4567",
//       description: "Daily from 11am to 10pm"
//     },
//     {
//       icon: MapPin,
//       title: "Restaurant",
//       value: "456 Gourmet Ave, Food City, FC 54321",
//       description: "Free parking available"
//     },
//     {
//       icon: Clock,
//       title: "Hours",
//       value: "Tuesday - Sunday",
//       description: "11:00 AM - 10:00 PM (Closed Mondays)"
//     }
//   ]
// };

// ============================================================================
// COMPONENT SECTION - NO NEED TO MODIFY BELOW THIS LINE
// ============================================================================

export const ContactSection: React.FC<ContactSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  description = defaultConfig.description,
  showForm = true,
  showInfo = true,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success/error
    const success = Math.random() > 0.3;
    setSubmitStatus(success ? 'success' : 'error');
    setIsSubmitting(false);
    
    if (success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {showForm && (
            <Card variant="outline" className="h-fit">
              <CardHeader>
                <CardTitle 
                  className="text-2xl font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {defaultConfig.form.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert variant="success" className="mb-6">
                    <CheckCircle className="w-4 h-4" />
                    <AlertDescription>
                      {defaultConfig.form.messages.success}
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="w-4 h-4" />
                    <AlertDescription>
                      {defaultConfig.form.messages.error}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={defaultConfig.form.fields.name.label}
                      placeholder={defaultConfig.form.fields.name.placeholder}
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                      required
                    />
                    <Input
                      label={defaultConfig.form.fields.email.label}
                      type="email"
                      placeholder={defaultConfig.form.fields.email.placeholder}
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <Input
                    label={defaultConfig.form.fields.subject.label}
                    placeholder={defaultConfig.form.fields.subject.placeholder}
                    value={formData.subject}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('subject', e.target.value)}
                    required
                  />
                  
                  <Textarea
                    label={defaultConfig.form.fields.message.label}
                    placeholder={defaultConfig.form.fields.message.placeholder}
                    rows={6}
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
                    required
                  />
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {defaultConfig.form.button.loadingText}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {defaultConfig.form.button.text}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Contact Info */}
          {showInfo && (
            <div className="space-y-8">
              <div>
                <h3 
                  className="text-2xl font-semibold mb-6"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {defaultConfig.contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: "var(--color-background-hover)",
                          color: "var(--color-primary)"
                        }}
                      >
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 
                          className="text-lg font-semibold mb-1"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {info.title}
                        </h4>
                        <p 
                          className="font-medium mb-1"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {info.value}
                        </p>
                        <p 
                          className="text-sm"
                          style={{ color: "var(--color-foreground-secondary)" }}
                        >
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};