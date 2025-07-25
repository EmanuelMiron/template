import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  HelpCircle,
  Search,
  Bell,
  User,
  LogOut,
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Monitor,
  Database,
  TrendingUp
} from 'lucide-react';

export interface MobileNavigationSectionProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  logo?: string;
  logoText?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserProfile?: boolean;
  sticky?: boolean;
}

export const MobileNavigationSection: React.FC<MobileNavigationSectionProps> = ({
  logo = "🚀",
  logoText = "Company",
  showSearch = true,
  showNotifications = true,
  showUserProfile = true,
  sticky = true
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      label: 'Home',
      href: '#',
      icon: <Home className="w-5 h-5" />,
      hasSubmenu: false
    },
    {
      label: 'Products',
      href: '#',
      icon: <Briefcase className="w-5 h-5" />,
      hasSubmenu: true,
      submenuItems: [
        { label: 'Dashboard', href: '#', icon: <Monitor className="w-4 h-4" />, badge: 'Popular' },
        { label: 'Analytics', href: '#', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Reports', href: '#', icon: <Database className="w-4 h-4" /> },
        { label: 'API Access', href: '#', icon: <Globe className="w-4 h-4" /> },
        { label: 'Webhooks', href: '#', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      label: 'Solutions',
      href: '#',
      icon: <Settings className="w-5 h-5" />,
      hasSubmenu: true,
      submenuItems: [
        { label: 'Healthcare', href: '#', icon: <Users className="w-4 h-4" /> },
        { label: 'Finance', href: '#', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Education', href: '#', icon: <Globe className="w-4 h-4" /> },
        { label: 'Startups', href: '#', icon: <Zap className="w-4 h-4" /> },
        { label: 'Enterprise', href: '#', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      label: 'Resources',
      href: '#',
      icon: <HelpCircle className="w-5 h-5" />,
      hasSubmenu: true,
      submenuItems: [
        { label: 'Getting Started', href: '#', icon: <Home className="w-4 h-4" /> },
        { label: 'API Reference', href: '#', icon: <Database className="w-4 h-4" /> },
        { label: 'Tutorials', href: '#', icon: <Monitor className="w-4 h-4" /> },
        { label: 'Help Center', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
        { label: 'Community', href: '#', icon: <Users className="w-4 h-4" /> }
      ]
    }
  ];

  const userMenuItems = [
    { label: 'Profile', href: '#', icon: <User className="w-4 h-4" /> },
    { label: 'Settings', href: '#', icon: <Settings className="w-4 h-4" /> },
    { label: 'Help', href: '#', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Sign Out', href: '#', icon: <LogOut className="w-4 h-4" /> }
  ];

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      {/* Header */}
      <header className={`${sticky ? 'sticky top-0 z-40' : ''} bg-white border-b border-gray-200 shadow-sm`}>
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

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              {showSearch && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Notifications */}
              {showNotifications && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              )}

              {/* User Profile */}
              {showUserProfile && (
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                  <User className="w-5 h-5" />
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{logo}</span>
                  <span className="text-xl font-bold text-gray-900">{logoText}</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search Bar */}
              {showSearch && (
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* User Profile */}
              {showUserProfile && (
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-xs text-gray-500">john@example.com</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Menu */}
              <nav className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      <button
                        onClick={() => item.hasSubmenu ? toggleSubmenu(item.label) : closeMenu()}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                        {item.hasSubmenu && (
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeSubmenu === item.label ? 'rotate-90' : ''
                            }`} 
                          />
                        )}
                      </button>

                      {/* Submenu */}
                      {item.hasSubmenu && activeSubmenu === item.label && (
                        <div className="ml-6 mt-2 space-y-1">
                          {item.submenuItems?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={closeMenu}
                              className="flex items-center justify-between p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              <div className="flex items-center space-x-3">
                                {subItem.icon}
                                <span className="text-sm">{subItem.label}</span>
                              </div>
                              {subItem.badge && (
                                <Badge variant="primary" className="text-xs">
                                  {subItem.badge}
                                </Badge>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              {/* User Menu */}
              {showUserProfile && (
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-1">
                    {userMenuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 