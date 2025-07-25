import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import Badge from '@/components/Badge';
import { HelpCircle, Search } from 'lucide-react';

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

const FAQSection: React.FC<FAQSectionProps> = ({
  size = 'lg',
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "Find answers to the most common questions about our platform and services.",
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

  const categories = [
    { id: 'all', name: 'All Questions', count: 12 },
    { id: 'general', name: 'General', count: 4 },
    { id: 'technical', name: 'Technical', count: 4 },
    { id: 'billing', name: 'Billing', count: 2 },
    { id: 'support', name: 'Support', count: 2 },
  ];

  const faqs = [
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
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className={`${sizeClasses[size]} bg-gray-50 ${className}`}>
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

        {/* Search */}
        {showSearch && (
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
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
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-8 text-gray-600 leading-relaxed">
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
              <div key={faq.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3 mb-4">
                  <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3 mb-4">
                  <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or browse all categories.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection; 