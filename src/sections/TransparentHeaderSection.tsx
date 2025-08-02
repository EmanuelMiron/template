import React, { useState, useEffect } from 'react';
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
  ArrowRight
} from 'lucide-react';

export interface TransparentHeaderSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  ctaText?: string;
  ctaHref?: string;
  scrollThreshold?: number;
  menuItems?: MenuItem[];
  dropdownContent?: DropdownContent;
  heroContent?: HeroContent;
}

export interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
}

export interface DropdownContent {
  products: DropdownItem[];
  resources: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
}

// Default content - can be easily modified by AI agents (not exported to avoid Fast Refresh issues)
const defaultMenuItems: MenuItem[] = [
  { label: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
  { label: 'Products', href: '#', icon: <Briefcase className="w-4 h-4" />, hasDropdown: true },
  { label: 'About', href: '#', icon: <Users className="w-4 h-4" /> },
  { label: 'Resources', href: '#', icon: <HelpCircle className="w-4 h-4" />, hasDropdown: true },
  { label: 'Contact', href: '#', icon: <Settings className="w-4 h-4" /> }
];

const defaultDropdownContent: DropdownContent = {
  products: [
    { label: 'Overview', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Integrations', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#' }
  ]
};

const defaultHeroContent: HeroContent = {
  title: "Transparent Header Demo",
  subtitle: "Scroll down to see the header transform from transparent to solid",
  ctaText: "Learn More"
};

export const TransparentHeaderSection: React.FC<TransparentHeaderSectionProps> = ({
  logo = "🚀",
  logoText = "Company",
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  ctaText = "Get Started",
  ctaHref = "#",
  scrollThreshold = 100,
  menuItems = defaultMenuItems,
  dropdownContent = defaultDropdownContent,
  heroContent = defaultHeroContent
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{logo}</span>
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}>
                    {logoText}
                  </span>
                </div>
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
                  <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}>
                    {item.icon}
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-border py-2">
                      {item.label === 'Products' && (
                        <>
                          {dropdownContent.products.map((product, index) => (
                            <a key={index} href={product.href} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                              {product.label}
                            </a>
                          ))}
                        </>
                      )}
                      {item.label === 'Resources' && (
                        <>
                          {dropdownContent.resources.map((resource, index) => (
                            <a key={index} href={resource.href} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                              {resource.label}
                            </a>
                          ))}
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
                <button className={`p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Notifications */}
              {showNotifications && (
                <button className={`p-2 rounded-md transition-colors duration-200 relative cursor-pointer ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              )}

              {/* User Menu */}
              {showUserMenu && (
                <button className={`p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                  <User className="w-5 h-5" />
                </button>
              )}

              {/* CTA Button */}
              {ctaHref ? (
                <a href={ctaHref}>
                  <Button
                    variant={isScrolled ? "primary" : "outline"}
                    size="sm"
                    className={`transition-all duration-300 ${
                      isScrolled 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              ) : (
                <Button
                  variant={isScrolled ? "primary" : "outline"}
                  size="sm"
                  className={`transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
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
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              {showSearch && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  />
                </div>
              )}

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                {ctaHref ? (
                  <a href={ctaHref}>
                    <Button variant="primary" size="sm" className="w-full">
                      {ctaText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                ) : (
                  <Button variant="primary" size="sm" className="w-full">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section for Demo */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-purple-600 to-indigo-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {heroContent.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
            {heroContent.subtitle}
          </p>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            {heroContent.ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}; 