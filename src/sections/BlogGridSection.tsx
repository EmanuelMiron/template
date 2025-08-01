import React, { useState } from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { Card } from '@/components/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Heart, 
  MessageCircle, 
  Bookmark,
  Tag
} from 'lucide-react';

export interface BlogGridSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
  showPagination?: boolean;
  showFeatured?: boolean;
  columns?: 2 | 3 | 4;
  blogPosts?: Array<{
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    image: string;
    category: string;
    tags: string[];
    publishDate: string;
    readTime: string;
    isFeatured: boolean;
    likes: number;
    comments: number;
    views: number;
  }>;
  categories?: Array<{
    id: string;
    label: string;
  }>;
  className?: string;
}

// ============================================================================
// CONFIGURATION SECTION - AI AGENTS CAN EASILY MODIFY THESE VALUES
// ============================================================================

// Default configuration - modify these values to customize the content
const defaultConfig = {
  title: "Latest Blog Posts",
  subtitle: "Insights & Updates",
  description: "Stay up to date with our latest articles, insights, and industry news.",
  blogPosts: [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies that are shaping the future of web development, from AI integration to advanced frameworks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "Senior Developer"
      },
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Technology",
      tags: ["Web Development", "AI", "Trends"],
      publishDate: "2024-01-15",
      readTime: "5 min read",
      isFeatured: true,
      likes: 1247,
      comments: 89,
      views: 15420
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications that can handle millions of users.",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
      author: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "Tech Lead"
      },
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Development",
      tags: ["React", "Scalability", "Best Practices"],
      publishDate: "2024-01-12",
      readTime: "8 min read",
      isFeatured: false,
      likes: 892,
      comments: 67,
      views: 12340
    },
    {
      id: 3,
      title: "Design Systems: A Complete Guide",
      excerpt: "Discover how to create and maintain effective design systems that improve consistency and productivity.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      author: {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "UX Designer"
      },
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Design",
      tags: ["Design Systems", "UX", "UI"],
      publishDate: "2024-01-10",
      readTime: "6 min read",
      isFeatured: false,
      likes: 756,
      comments: 45,
      views: 9870
    },
    {
      id: 4,
      title: "Performance Optimization Techniques",
      excerpt: "Master the art of optimizing web applications for speed and performance across all devices.",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "Performance Engineer"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Performance",
      tags: ["Performance", "Optimization", "Speed"],
      publishDate: "2024-01-08",
      readTime: "10 min read",
      isFeatured: false,
      likes: 634,
      comments: 34,
      views: 8760
    },
    {
      id: 5,
      title: "The Rise of TypeScript in Modern Development",
      excerpt: "Why TypeScript is becoming the standard for large-scale JavaScript applications and how to get started.",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
      author: {
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "Full Stack Developer"
      },
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Development",
      tags: ["TypeScript", "JavaScript", "Programming"],
      publishDate: "2024-01-05",
      readTime: "7 min read",
      isFeatured: false,
      likes: 567,
      comments: 28,
      views: 7650
    },
    {
      id: 6,
      title: "Accessibility in Web Design",
      excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of their abilities.",
      content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
      author: {
        name: "David Thompson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        role: "Accessibility Specialist"
      },
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Accessibility",
      tags: ["Accessibility", "Inclusive Design", "WCAG"],
      publishDate: "2024-01-03",
      readTime: "9 min read",
      isFeatured: false,
      likes: 445,
      comments: 23,
      views: 6540
    }
  ],
  categories: [
    { id: 'all', label: 'All Posts' },
    { id: 'Technology', label: 'Technology' },
    { id: 'Development', label: 'Development' },
    { id: 'Design', label: 'Design' },
    { id: 'Performance', label: 'Performance' },
    { id: 'Accessibility', label: 'Accessibility' }
  ]
};

// Example: To customize for a cooking blog, modify the defaultConfig like this:
// const defaultConfig = {
//   title: "Latest Recipes",
//   subtitle: "Delicious & Easy",
//   description: "Discover amazing recipes, cooking tips, and culinary inspiration.",
//   blogPosts: [
//     {
//       id: 1,
//       title: "Perfect Homemade Pizza",
//       excerpt: "Learn the secrets to making restaurant-quality pizza at home with our step-by-step guide.",
//       author: {
//         name: "Chef Maria",
//         avatar: "https://example.com/chef-maria.jpg",
//         role: "Head Chef"
//       },
//       image: "https://example.com/pizza-image.jpg",
//       category: "Italian",
//       tags: ["Pizza", "Italian", "Dough"],
//       publishDate: "2024-01-15",
//       readTime: "15 min read",
//       isFeatured: true,
//       likes: 2340,
//       comments: 156,
//       views: 45600
//     }
//   ],
//   categories: [
//     { id: 'all', label: 'All Recipes' },
//     { id: 'Italian', label: 'Italian' },
//     { id: 'Asian', label: 'Asian' },
//     { id: 'Desserts', label: 'Desserts' }
//   ]
// };

// ============================================================================
// COMPONENT SECTION - NO NEED TO MODIFY BELOW THIS LINE
// ============================================================================

export const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  size = 'lg',
  title = defaultConfig.title,
  subtitle = defaultConfig.subtitle,
  description = defaultConfig.description,
  showFilters = true,
  showPagination = true,
  showFeatured = true,
  columns = 3,
  blogPosts = defaultConfig.blogPosts,
  categories = defaultConfig.categories,
  className = ""
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const featuredPost = showFeatured ? blogPosts.find(post => post.isFeatured) : null;
  const regularPosts = filteredPosts.filter(post => !post.isFeatured);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section 
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: "var(--color-background-secondary)",
        color: "var(--color-foreground)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p 
              className="text-xl mb-4 font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeFilter === category.id
                    ? 'text-white'
                    : 'hover:bg-gray-100 border'
                }`}
                style={{
                  backgroundColor: activeFilter === category.id 
                    ? "var(--color-primary)" 
                    : "var(--color-background)",
                  color: activeFilter === category.id 
                    ? "var(--color-background)" 
                    : "var(--color-foreground)",
                  borderColor: "var(--color-border)"
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Featured Post */}
        {showFeatured && featuredPost && (
          <div className="mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge variant="primary" className="absolute top-4 left-4">
                    Featured
                  </Badge>
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div 
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {featuredPost.title}
                  </h3>
                  
                  <p 
                    className="mb-6 leading-relaxed"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Avatar avatarSize="sm">
                        <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                        <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div 
                          className="text-sm font-medium"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {featuredPost.author.name}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: "var(--color-foreground-secondary)" }}
                        >
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>
                    <div 
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex items-center gap-4" style={{ color: "var(--color-foreground-secondary)" }}>
                      <button className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className={`grid ${gridCols[columns]} gap-6 mb-12`}>
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Post Image */}
              <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: "var(--color-background-hover)" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <button 
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ 
                    backgroundColor: "var(--color-background)",
                    color: "var(--color-foreground-secondary)"
                  }}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishDate)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {post.title}
                </h3>

                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full"
                      style={{ 
                        backgroundColor: "var(--color-background-hover)",
                        color: "var(--color-foreground-secondary)"
                      }}
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar avatarSize="sm">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {post.author.name}
                      </div>
                      <div 
                        className="text-xs"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                    <button className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <button 
                className="px-3 py-2 hover:text-gray-700 disabled:opacity-50 cursor-pointer"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    currentPage === page
                      ? 'text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: currentPage === page 
                      ? "var(--color-primary)" 
                      : "transparent",
                    color: currentPage === page 
                      ? "var(--color-background)" 
                      : "var(--color-foreground)"
                  }}
                >
                  {page}
                </button>
              ))}
              <button 
                className="px-3 py-2 hover:text-gray-700 cursor-pointer"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 