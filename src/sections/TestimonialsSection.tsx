import React from 'react';
import { Card, CardContent } from '@/components/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { Star, Quote } from 'lucide-react';

export interface TestimonialsSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  description?: string;
  layout?: 'grid' | 'carousel' | 'list';
  className?: string;
  testimonials?: Testimonial[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  badge: string;
  quote: string;
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    badge: "Verified Customer",
    quote: "This component library has completely transformed our development process. We've reduced our development time by 60% and our team loves working with it.",
  },
  {
    name: "Michael Rodriguez",
    role: "Frontend Developer",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    badge: "Power User",
    quote: "The quality and attention to detail in these components is outstanding. Everything works seamlessly together and the documentation is excellent.",
  },
  {
    name: "Emily Johnson",
    role: "UX Designer",
    company: "DesignStudio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    badge: "Early Adopter",
    quote: "As a designer, I appreciate how flexible and customizable these components are. They maintain consistency while allowing for creative expression.",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "Enterprise Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    badge: "Enterprise Customer",
    quote: "The enterprise features and security compliance make this the perfect choice for our organization. Highly recommended for large teams.",
  },
  {
    name: "Lisa Wang",
    role: "Full Stack Developer",
    company: "DevAgency",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    rating: 5,
    badge: "Community Member",
    quote: "The community support is incredible. Questions get answered quickly and the team is always improving the library based on feedback.",
  },
  {
    name: "Alex Thompson",
    role: "Lead Developer",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    badge: "Beta Tester",
    quote: "I've been using this since the beta and it's only gotten better. The performance optimizations and new features are always impressive.",
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  size = 'lg',
  title = "What Our Customers Say",
  description = "Don't just take our word for it. Here's what our customers have to say about their experience with our platform.",
  layout = 'grid',
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };



  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors" />
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar variant="primary" avatarSize="md">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-2">
              {renderStars(testimonial.rating)}
            </div>
            <Badge variant="primary" badgeSize="sm">
              {testimonial.badge}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className={`${sizeClasses[size]} bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index))}
          </div>
        )}

        {/* Testimonials List */}
        {layout === 'list' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="outline" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-6 h-6 text-primary/20 mt-1 group-hover:text-primary/30 transition-colors flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar variant="primary" avatarSize="sm">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            {renderStars(testimonial.rating)}
                          </div>
                          <Badge variant="primary" badgeSize="sm">
                            {testimonial.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Carousel Layout (simplified) */}
        {layout === 'carousel' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(0, 4).map((testimonial, index) => renderTestimonialCard(testimonial, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};