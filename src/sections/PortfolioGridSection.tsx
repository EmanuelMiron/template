import React, { useState } from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { Card } from '@/components/Card';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Heart, 
  ArrowRight,
  Calendar,
  Users,
  Tag,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Code,
  Database,
  Zap
} from 'lucide-react';

export interface PortfolioGridSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
  showPagination?: boolean;
  showLightbox?: boolean;
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: 2 | 3 | 4;
}

export const PortfolioGridSection: React.FC<PortfolioGridSectionProps> = ({
  size = 'lg',
  title = "Our Portfolio",
  subtitle = "Showcasing Our Best Work",
  description = "Explore our latest projects and see how we help businesses achieve their digital goals.",
  showFilters = true,
  showPagination = true,
  showLightbox = true,
  columns = 3
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring advanced search, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "web-development",
      tags: ["React", "Node.js", "E-commerce", "Payment"],
      client: "Fashion Retailer",
      date: "2024-01",
      duration: "3 months",
      team: "5 developers",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 1247,
      views: 15420,
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "mobile-development",
      tags: ["React Native", "Security", "Banking", "Biometric"],
      client: "Digital Bank",
      date: "2023-12",
      duration: "4 months",
      team: "6 developers",
      technologies: ["React Native", "Firebase", "Biometric API", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 892,
      views: 12340,
      featured: false
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that uses machine learning to provide insights and predictions for business data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ai-ml",
      tags: ["AI", "Machine Learning", "Analytics", "Dashboard"],
      client: "Tech Startup",
      date: "2023-11",
      duration: "5 months",
      team: "8 developers",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 756,
      views: 9870,
      featured: false
    },
    {
      id: 4,
      title: "Design System & UI Kit",
      description: "A comprehensive design system and UI component library for consistent brand experiences across all platforms.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ui-ux",
      tags: ["Design System", "UI Kit", "Branding", "Components"],
      client: "SaaS Company",
      date: "2023-10",
      duration: "2 months",
      team: "3 designers",
      technologies: ["Figma", "Storybook", "React", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 634,
      views: 8760,
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A scalable real-time chat application with video calling, file sharing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "web-development",
      tags: ["Real-time", "WebRTC", "Chat", "Collaboration"],
      client: "Remote Team Platform",
      date: "2023-09",
      duration: "3 months",
      team: "4 developers",
      technologies: ["Socket.io", "WebRTC", "React", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 567,
      views: 7650,
      featured: false
    },
    {
      id: 6,
      title: "IoT Smart Home Dashboard",
      description: "A centralized dashboard for managing smart home devices, automation, and energy monitoring.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "iot",
      tags: ["IoT", "Smart Home", "Automation", "Energy"],
      client: "Smart Home Company",
      date: "2023-08",
      duration: "4 months",
      team: "6 developers",
      technologies: ["React", "MQTT", "Python", "Raspberry Pi"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      likes: 445,
      views: 6540,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web-development', label: 'Web Development', icon: <Monitor className="w-4 h-4" /> },
    { id: 'mobile-development', label: 'Mobile Development', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ui-ux', label: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'ai-ml', label: 'AI & ML', icon: <Zap className="w-4 h-4" /> },
    { id: 'iot', label: 'IoT', icon: <Database className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const sizeClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24'
  };

  const gridCols = {
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const openLightbox = (projectId: number) => {
    if (showLightbox) {
      setSelectedProject(projectId);
    }
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || <Code className="w-4 h-4" />;
  };

  return (
    <section className={`relative ${sizeClasses[size]} bg-gradient-to-br from-slate-50 to-blue-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-blue-600 mb-4 font-medium">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Grid */}
        <div className={`grid ${gridCols[columns]} gap-6 mb-12`}>
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    {categories.find(cat => cat.id === project.category)?.label}
                  </Badge>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <Badge variant="primary" className="absolute top-4 right-4">
                    Featured
                  </Badge>
                )}

                {/* Action Buttons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
                  <button 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
                    onClick={() => openLightbox(project.id)}
                  >
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <button className="flex items-center gap-1 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {showLightbox && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <ExternalLink className="w-6 h-6" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={projects.find(p => p.id === selectedProject)?.image}
                alt="Project"
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 