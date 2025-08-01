import React, { useState } from 'react';
import Button from '@/components/Button';
import { Menu, X, Search, Bell, User } from 'lucide-react';

export interface NavigationHeaderProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  ctaText?: string;
  ctaHref?: string;
  sticky?: boolean;
  transparent?: boolean;
  className?: string;
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultMenuItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  variant = 'primary',
  size = 'md',
  logo,
  logoText = "Brand",
  menuItems = defaultMenuItems,
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  ctaText = "Get Started",
  ctaHref,
  sticky = true,
  transparent = false,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    if (sticky) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sticky]);

  const sizeClasses = {
    sm: 'py-2',
    md: 'py-4',
    lg: 'py-6',
  };

  const variantClasses = {
    primary: isScrolled || !transparent ? 'bg-background shadow-lg' : 'bg-transparent',
    secondary: isScrolled || !transparent ? 'bg-background shadow-lg' : 'bg-transparent',
    outline: isScrolled || !transparent ? 'bg-background border-b border-border' : 'bg-transparent',
  };

  const textClasses = {
    primary: isScrolled || !transparent ? 'text-foreground' : 'text-white',
    secondary: isScrolled || !transparent ? 'text-foreground' : 'text-white',
    outline: isScrolled || !transparent ? 'text-foreground' : 'text-white',
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 ${variantClasses[variant]} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${sizeClasses[size]}`}>
          {/* Logo */}
          <div className="flex items-center">
            {logo ? (
              <img src={logo} alt={logoText} className="h-8 w-auto" />
            ) : (
              <span className={`text-xl font-bold ${textClasses[variant]}`}>
                {logoText}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${textClasses[variant]}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {showSearch && (
              <button className={`p-2 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer ${textClasses[variant]}`}>
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Notifications */}
            {showNotifications && (
              <button className={`p-2 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer relative ${textClasses[variant]}`}>
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            )}

            {/* User Menu */}
            {showUserMenu && (
              <button className={`p-2 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer ${textClasses[variant]}`}>
                <User className="w-5 h-5" />
              </button>
            )}

            {/* CTA Button */}
            {ctaHref ? (
              <a href={ctaHref}>
                <Button
                  variant="primary"
                  size="sm"
                  className="hidden sm:inline-flex"
                >
                  {ctaText}
                </Button>
              </a>
            ) : (
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                {ctaText}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer ${textClasses[variant]}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${textClasses[variant]}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                {ctaHref ? (
                  <a href={ctaHref}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      {ctaText}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    {ctaText}
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};