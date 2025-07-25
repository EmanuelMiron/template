import React, { useState } from 'react';
import Button from '@/components/Button';
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  ChevronDown,
  Home,
  Briefcase,
  Users,
  Settings,
  HelpCircle,
  ArrowRight,
  ShoppingCart,
  Heart,
  Globe
} from 'lucide-react';

export interface LogoNavigationSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  showCart?: boolean;
  showWishlist?: boolean;
  ctaText?: string;
  ctaHref?: string;
  sticky?: boolean;
  transparent?: boolean;
}

export const LogoNavigationSection: React.FC<LogoNavigationSectionProps> = ({
  logo = "🚀",
  logoText = "Brand",
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  showCart = true,
  showWishlist = true,
  ctaText = "Get Started",
  ctaHref = "#",
  sticky = true,
  transparent = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
    { label: 'Products', href: '#', icon: <Briefcase className="w-4 h-4" />, hasDropdown: true },
    { label: 'About', href: '#', icon: <Users className="w-4 h-4" /> },
    { label: 'Services', href: '#', icon: <Settings className="w-4 h-4" />, hasDropdown: true },
    { label: 'Resources', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Contact', href: '#', icon: <Globe className="w-4 h-4" /> }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`${sticky ? 'sticky top-0' : ''} z-50 transition-all duration-300 ${
          transparent 
            ? 'bg-transparent' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {logo}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {logoText}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Premium Solutions</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown ? handleMouseEnter(item.label) : null}
                  onMouseLeave={() => item.hasDropdown ? handleMouseLeave() : null}
                >
                  <a 
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.label === 'Products' && (
                        <>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">All Products</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">New Arrivals</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Best Sellers</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sale Items</a>
                        </>
                      )}
                      {item.label === 'Services' && (
                        <>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Consulting</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Development</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Design</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              {showSearch && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Wishlist */}
              {showWishlist && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 relative">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
              )}

              {/* Cart */}
              {showCart && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
                    2
                  </span>
                </button>
              )}

              {/* Notifications */}
              {showNotifications && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
                </button>
              )}

              {/* User Menu */}
              {showUserMenu && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <User className="w-5 h-5" />
                </button>
              )}

              {/* CTA Button */}
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:flex"
                onClick={() => window.open(ctaHref, '_blank')}
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {showWishlist && (
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">Wishlist</span>
                      </button>
                    )}
                    {showCart && (
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm">Cart</span>
                      </button>
                    )}
                  </div>
                  <Button variant="primary" size="sm">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Demo Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Logo + Navigation Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A clean and professional navigation header with logo, menu items, and action buttons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 