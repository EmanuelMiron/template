import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import Badge from '@/components/Badge';
import { HelpCircle, Search } from 'lucide-react';

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the FAQ section
// ============================================================================

const defaultConfig = {
  // Header content
  title: "Frequently Asked Questions",
  subtitle: "FAQ",
  description: "Find answers to the most common questions about our platform and services.",
  
  // Categories for filtering
  categories: [
    { id: 'all', name: 'All Questions', count: 12 },
    { id: 'general', name: 'General', count: 4 },
    { id: 'technical', name: 'Technical', count: 4 },
    { id: 'billing', name: 'Billing', count: 2 },
    { id: 'support', name: 'Support', count: 2 },
  ],
  
  // FAQ items
  faqs: [
    {
      id: 1,
      category: 'general',
      question: "What is this component library?",
      answer: "Our component library is a comprehensive collection of pre-built, customizable React components designed to accelerate your development process. It includes everything from basic UI elements to complex interactive components, all built with accessibility and performance in mind.",
    },
    {
      id: 2,
      category: 'general',
      question: "How do I get started?",
      answer: "Getting started is easy! Simply install the package via npm or yarn, import the components you need, and start building. We provide detailed documentation, examples, and a getting started guide to help you hit the ground running.",
    },
    {
      id: 3,
      category: 'technical',
      question: "What technologies does this support?",
      answer: "Our component library is built with React 18+ and TypeScript, with full support for modern JavaScript features. It's compatible with Next.js, Create React App, Vite, and other popular React frameworks. We also provide support for various styling solutions including Tailwind CSS.",
    },
    {
      id: 4,
      category: 'technical',
      question: "Is it accessible?",
      answer: "Absolutely! Accessibility is a core principle of our component library. All components follow WCAG 2.1 guidelines and include proper ARIA attributes, keyboard navigation, and screen reader support. We regularly audit our components for accessibility compliance.",
    },
    {
      id: 5,
      category: 'technical',
      question: "Can I customize the styling?",
      answer: "Yes! Our components are highly customizable. You can override styles using CSS classes, CSS variables, or by passing custom className props. We also provide a comprehensive theming system that allows you to maintain consistent branding across your application.",
    },
    {
      id: 6,
      category: 'technical',
      question: "How do I handle form validation?",
      answer: "Our form components integrate seamlessly with popular form libraries like React Hook Form and Formik. We provide built-in validation patterns and error states, making it easy to create robust, user-friendly forms.",
    },
    {
      id: 7,
      category: 'billing',
      question: "What are the pricing plans?",
      answer: "We offer several pricing tiers to meet different needs. Our free tier includes basic components and community support. Paid plans include additional components, priority support, and advanced features. Contact our sales team for enterprise pricing.",
    },
    {
      id: 8,
      category: 'billing',
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to the features you've paid for until the end of your billing period.",
    },
    {
      id: 9,
      category: 'support',
      question: "How do I get help?",
      answer: "We provide multiple support channels including comprehensive documentation, a community forum, email support, and live chat for paid plans. Our team is committed to helping you succeed with our platform.",
    },
    {
      id: 10,
      category: 'support',
      question: "Do you offer training?",
      answer: "Yes! We offer various training options including video tutorials, live webinars, and custom training sessions for teams. We also provide onboarding assistance to help you get the most out of our platform.",
    },
    {
      id: 11,
      category: 'general',
      question: "Is there a community?",
      answer: "Yes! We have a vibrant community of developers who share tips, ask questions, and contribute to the ecosystem. Join our Discord server, follow us on social media, or participate in our community forum.",
    },
    {
      id: 12,
      category: 'general',
      question: "How often do you release updates?",
      answer: "We release regular updates with new features, bug fixes, and improvements. Major releases typically come every few months, with minor updates and patches released more frequently. We maintain backward compatibility whenever possible.",
    },
  ],
  
  // Search placeholder text
  searchPlaceholder: "Search questions...",
  
  // No results message
  noResultsTitle: "No questions found",
  noResultsDescription: "Try adjusting your search terms or browse all categories.",
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   title: "Common Questions",
//   subtitle: "FAQ",
//   description: "Everything you need to know about dining with us.",
//   categories: [
//     { id: 'all', name: 'All Questions', count: 8 },
//     { id: 'reservations', name: 'Reservations', count: 3 },
//     { id: 'menu', name: 'Menu & Food', count: 2 },
//     { id: 'hours', name: 'Hours & Location', count: 2 },
//     { id: 'events', name: 'Events', count: 1 },
//   ],
//   faqs: [
//     {
//       id: 1,
//       category: 'reservations',
//       question: "How do I make a reservation?",
//       answer: "You can make a reservation online through our website, by calling us directly, or through popular booking platforms. We recommend booking at least 24 hours in advance for weekend dining.",
//     },
//     {
//       id: 2,
//       category: 'menu',
//       question: "Do you accommodate dietary restrictions?",
//       answer: "Yes, we offer vegetarian, vegan, and gluten-free options. Please let us know about any dietary restrictions when making your reservation so we can prepare accordingly.",
//     },
//     // ... more restaurant-specific FAQs
//   ],
//   searchPlaceholder: "Search our FAQ...",
//   noResultsTitle: "No questions found",
//   noResultsDescription: "Try adjusting your search terms or contact us directly.",
// };

export interface FAQSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  layout?: 'accordion' | 'grid' | 'list';
  showSearch?: boolean;
  showBadges?: boolean;
  showCategories?: boolean;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  subtitle = defaultConfig.subtitle,
  description = defaultConfig.description,
  layout = 'accordion',
  showSearch = true,
  showBadges = true,
  showCategories = true,
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const categories = defaultConfig.categories;
  const faqs = defaultConfig.faqs;

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          {showBadges && (
            <Badge 
              variant="primary" 
              className="mb-6"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-background)"
              }}
            >
              {subtitle}
            </Badge>
          )}
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

        {/* Search */}
        {showSearch && (
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                style={{ color: "var(--color-foreground-secondary)" }}
              />
              <input
                type="text"
                placeholder={defaultConfig.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--color-primary)";
                  e.target.style.boxShadow = "0 0 0 2px var(--color-primary)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--color-border)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          </div>
        )}

        {/* Categories */}
        {showCategories && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: selectedCategory === category.id 
                    ? "var(--color-primary)" 
                    : "var(--color-background)",
                  color: selectedCategory === category.id 
                    ? "var(--color-background)" 
                    : "var(--color-foreground)",
                  border: selectedCategory === category.id 
                    ? "none" 
                    : "1px solid var(--color-border)",
                  boxShadow: selectedCategory === category.id 
                    ? "0 4px 12px rgba(0, 0, 0, 0.15)" 
                    : "0 2px 4px rgba(0, 0, 0, 0.05)"
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        )}

        {/* FAQ Content */}
        {layout === 'accordion' && (
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: "var(--color-background-hover)",
                          color: "var(--color-primary)"
                        }}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span 
                        className="font-semibold text-lg"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div 
                      className="pl-12 leading-relaxed"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className="rounded-xl p-6 transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: "var(--color-background-hover)",
                      color: "var(--color-primary)"
                    }}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 
                    className="font-semibold text-lg"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <p 
                  className="leading-relaxed pl-14"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className="rounded-xl p-6 transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: "var(--color-background-hover)",
                      color: "var(--color-primary)"
                    }}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 
                    className="font-semibold text-lg"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <p 
                  className="leading-relaxed pl-14"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ 
                backgroundColor: "var(--color-background-hover)",
                color: "var(--color-foreground-secondary)"
              }}
            >
              <HelpCircle className="w-10 h-10" />
            </div>
            <h3 
              className="text-2xl font-semibold mb-3"
              style={{ color: "var(--color-foreground)" }}
            >
              {defaultConfig.noResultsTitle}
            </h3>
            <p 
              className="text-lg"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              {defaultConfig.noResultsDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};