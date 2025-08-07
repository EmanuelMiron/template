import React, { useState } from 'react';
import { Button } from '@/components/Button';
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

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the navigation
// ============================================================================

const defaultConfig = {
  // Brand/Logo content
  logo: "🚀",
  logoText: "Brand",
  tagline: "Premium Solutions",
  
  // Navigation menu items
  menuItems: [
    { label: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
    { label: 'Products', href: '#', icon: <Briefcase className="w-4 h-4" />, hasDropdown: true },
    { label: 'About', href: '#', icon: <Users className="w-4 h-4" /> },
    { label: 'Services', href: '#', icon: <Settings className="w-4 h-4" />, hasDropdown: true },
    { label: 'Resources', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Contact', href: '#', icon: <Globe className="w-4 h-4" /> }
  ],
  
  // Dropdown menu content
  dropdownContent: {
    Products: [
      { label: 'All Products', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Sale Items', href: '#' }
    ],
    Services: [
      { label: 'Consulting', href: '#' },
      { label: 'Development', href: '#' },
      { label: 'Design', href: '#' },
      { label: 'Support', href: '#' }
    ]
  },
  
  // Action buttons
  ctaText: "Get Started",
  ctaHref: "#",
  
  // Notification counts
  wishlistCount: 3,
  cartCount: 2,
  
  // Search placeholder
  searchPlaceholder: "Search..."
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   logo: "🍽️",
//   logoText: "Culinary Delights",
//   tagline: "Fine Dining Experience",
//   menuItems: [
//     { label: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
//     { label: 'Menu', href: '#', icon: <Briefcase className="w-4 h-4" />, hasDropdown: true },
//     { label: 'About', href: '#', icon: <Users className="w-4 h-4" /> },
//     { label: 'Reservations', href: '#', icon: <Settings className="w-4 h-4" /> },
//     { label: 'Events', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
//     { label: 'Contact', href: '#', icon: <Globe className="w-4 h-4" /> }
//   ],
//   dropdownContent: {
//     Menu: [
//       { label: 'Appetizers', href: '#' },
//       { label: 'Main Courses', href: '#' },
//       { label: 'Desserts', href: '#' },
//       { label: 'Beverages', href: '#' }
//     ]
//   },
//   ctaText: "Make Reservation",
//   ctaHref: "#reservations",
//   wishlistCount: 0,
//   cartCount: 0,
//   searchPlaceholder: "Search menu..."
// };

export interface LogoNavigationSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  tagline?: string;
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
  logo = defaultConfig.logo,
  logoText = defaultConfig.logoText,
  tagline = defaultConfig.tagline,
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  showCart = true,
  showWishlist = true,
  ctaText = defaultConfig.ctaText,
  ctaHref = defaultConfig.ctaHref,
  sticky = true,
  transparent = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = defaultConfig.menuItems;
  const dropdownContent = defaultConfig.dropdownContent;

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`${sticky ? 'sticky top-0' : ''} z-50 transition-all duration-300`}
      style={{
        backgroundColor: transparent ? 'transparent' : 'var(--color-background)',
        borderBottom: transparent ? 'none' : '1px solid var(--color-border)',
        boxShadow: transparent ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-3 group">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                    color: "var(--color-background)"
                  }}
                >
                  {logo}
                </div>
                <div className="flex flex-col">
                  <span 
                    className="text-xl font-bold group-hover:transition-colors"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {logoText}
                  </span>
                  <span 
                    className="text-xs font-medium"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {tagline}
                  </span>
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
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--color-foreground-secondary)" }}
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
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl border py-2 z-50"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-border)"
                    }}
                  >
                    {dropdownContent[item.label as keyof typeof dropdownContent]?.map((dropdownItem, index) => (
                      <a 
                        key={index}
                        href={dropdownItem.href} 
                        className="block px-4 py-2 text-sm transition-colors duration-200"
                        style={{ 
                          color: "var(--color-foreground-secondary)",
                          backgroundColor: "var(--color-background)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--color-background-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--color-background)";
                        }}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {showSearch && (
              <button 
                className="p-2 rounded-md transition-colors duration-200"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Wishlist */}
            {showWishlist && (
              <button 
                className="p-2 rounded-md transition-colors duration-200 relative"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                <Heart className="w-5 h-5" />
                <span 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-xs flex items-center justify-center"
                  style={{ 
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-background)"
                  }}
                >
                  {defaultConfig.wishlistCount}
                </span>
              </button>
            )}

            {/* Cart */}
            {showCart && (
              <button 
                className="p-2 rounded-md transition-colors duration-200 relative"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-xs flex items-center justify-center"
                  style={{ 
                    backgroundColor: "var(--color-secondary)",
                    color: "var(--color-background)"
                  }}
                >
                  {defaultConfig.cartCount}
                </span>
              </button>
            )}

            {/* Notifications */}
            {showNotifications && (
              <button 
                className="p-2 rounded-md transition-colors duration-200 relative"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                <Bell className="w-5 h-5" />
                <span 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </button>
            )}

            {/* User Menu */}
            {showUserMenu && (
              <button 
                className="p-2 rounded-md transition-colors duration-200"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
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
              className="lg:hidden p-2 rounded-md transition-colors duration-200"
              style={{ color: "var(--color-foreground-secondary)" }}
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
        <div 
          className="lg:hidden border-t"
          style={{ 
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)"
          }}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            {showSearch && (
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: "var(--color-foreground-disabled)" }}
                />
                <input
                  type="text"
                  placeholder={defaultConfig.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-background)",
                    color: "var(--color-foreground)"
                  }}
                />
              </div>
            )}

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {showWishlist && (
                    <button 
                      className="flex items-center space-x-2"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Wishlist</span>
                    </button>
                  )}
                  {showCart && (
                    <button 
                      className="flex items-center space-x-2"
                      style={{ color: "var(--color-foreground-secondary)" }}
                    >
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
  );
}; 