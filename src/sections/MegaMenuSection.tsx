import React, { useState } from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  HelpCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Lock,
  TrendingUp
} from 'lucide-react';

export interface MegaMenuSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  showSearch?: boolean;
  showUserMenu?: boolean;
  sticky?: boolean;
  transparent?: boolean;
}

export const MegaMenuSection: React.FC<MegaMenuSectionProps> = ({
  logo = "🚀",
  logoText = "Company",
  showSearch = true,
  showUserMenu = true,
  sticky = true,
  transparent = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'Products',
      href: '#',
      hasDropdown: true,
      icon: <Briefcase className="w-4 h-4" />,
      categories: [
        {
          title: 'Core Platform',
          items: [
            { label: 'Dashboard', href: '#', icon: <Monitor className="w-4 h-4" />, badge: 'Popular' },
            { label: 'Analytics', href: '#', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Reports', href: '#', icon: <Database className="w-4 h-4" /> }
          ]
        },
        {
          title: 'Integrations',
          items: [
            { label: 'API Access', href: '#', icon: <Globe className="w-4 h-4" /> },
            { label: 'Webhooks', href: '#', icon: <Zap className="w-4 h-4" /> },
            { label: 'SDKs', href: '#', icon: <Smartphone className="w-4 h-4" /> }
          ]
        },
        {
          title: 'Security',
          items: [
            { label: 'Authentication', href: '#', icon: <Lock className="w-4 h-4" /> },
            { label: 'Encryption', href: '#', icon: <Shield className="w-4 h-4" /> },
            { label: 'Compliance', href: '#', icon: <Star className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      href: '#',
      hasDropdown: true,
      icon: <Settings className="w-4 h-4" />,
      categories: [
        {
          title: 'By Industry',
          items: [
            { label: 'Healthcare', href: '#', icon: <Users className="w-4 h-4" /> },
            { label: 'Finance', href: '#', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Education', href: '#', icon: <Globe className="w-4 h-4" /> }
          ]
        },
        {
          title: 'By Size',
          items: [
            { label: 'Startups', href: '#', icon: <Zap className="w-4 h-4" /> },
            { label: 'Enterprise', href: '#', icon: <Shield className="w-4 h-4" /> },
            { label: 'Agencies', href: '#', icon: <Briefcase className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      label: 'Resources',
      href: '#',
      hasDropdown: true,
      icon: <HelpCircle className="w-4 h-4" />,
      categories: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', href: '#', icon: <Home className="w-4 h-4" /> },
            { label: 'API Reference', href: '#', icon: <Database className="w-4 h-4" /> },
            { label: 'Tutorials', href: '#', icon: <Monitor className="w-4 h-4" /> }
          ]
        },
        {
          title: 'Support',
          items: [
            { label: 'Help Center', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
            { label: 'Community', href: '#', icon: <Users className="w-4 h-4" /> },
            { label: 'Contact', href: '#', icon: <Globe className="w-4 h-4" /> }
          ]
        }
      ]
    }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${sticky ? 'sticky top-0 z-50' : ''} ${transparent ? 'bg-transparent' : 'bg-white'} border-b border-gray-200 shadow-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{logo}</span>
                <span className="text-xl font-bold text-gray-900">{logoText}</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  {item.icon}
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-screen max-w-4xl bg-white border border-gray-200 rounded-lg shadow-xl mt-1">
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {item.categories?.map((category, index) => (
                          <div key={index}>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                              {category.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subItem.href}
                                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                                  >
                                    <div className="text-gray-400 group-hover:text-blue-600">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                        {subItem.label}
                                      </span>
                                      {subItem.badge && (
                                        <Badge variant="primary" className="text-xs">
                                          {subItem.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 ml-auto" />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom CTA */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">Need help getting started?</h4>
                            <p className="text-sm text-gray-500">Our team is here to help you succeed.</p>
                          </div>
                          <Button variant="primary" size="sm">
                            Contact Sales
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {showSearch && (
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* User Menu */}
            {showUserMenu && (
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.hasDropdown && item.categories && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.categories.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-1">
                            {category.title}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                >
                                  {subItem.icon}
                                  <span className="text-sm">{subItem.label}</span>
                                  {subItem.badge && (
                                    <Badge variant="primary" className="text-xs ml-auto">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            {showUserMenu && (
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}; 