import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  X,
  Instagram,
  Linkedin,
  Github,
  Heart,
} from "lucide-react";

// ============================================================================
// CONFIGURATION - AI AGENT: Modify these values to customize the footer section
// ============================================================================

const defaultConfig = {
  // Company information
  company: {
    name: "CompanyName",
    description:
      "Building the future of web development with modern, accessible, and performant components.",
  },

  // Footer links organized by category
  footerLinks: {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Status", href: "#" },
      { name: "Community", href: "#" },
      { name: "Training", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Security", href: "#" },
    ],
  },

  // Social media links
  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "X", icon: X, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ],

  // Contact information
  contact: {
    email: "hello@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation St, Tech City, TC 12345",
  },

  // Copyright and bottom section
  copyright: {
    text: "© 2024 CompanyName. All rights reserved.",
    madeWithText: "Made with",
    byText: "by our team",
  },
};

// Example configuration for a restaurant website
// const restaurantConfig = {
//   company: {
//     name: "TasteBuds Restaurant",
//     description: "Serving delicious, locally-sourced cuisine in a warm and welcoming atmosphere.",
//   },
//   footerLinks: {
//     menu: [
//       { name: "Our Menu", href: "#" },
//       { name: "Daily Specials", href: "#" },
//       { name: "Wine List", href: "#" },
//       { name: "Private Events", href: "#" },
//       { name: "Gift Cards", href: "#" },
//     ],
//     about: [
//       { name: "Our Story", href: "#" },
//       { name: "Chef's Bio", href: "#" },
//       { name: "Reviews", href: "#" },
//       { name: "Press", href: "#" },
//       { name: "Awards", href: "#" },
//     ],
//     services: [
//       { name: "Reservations", href: "#" },
//       { name: "Delivery", href: "#" },
//       { name: "Catering", href: "#" },
//       { name: "Private Dining", href: "#" },
//       { name: "Events", href: "#" },
//     ],
//     legal: [
//       { name: "Privacy Policy", href: "#" },
//       { name: "Terms of Service", href: "#" },
//       { name: "Allergen Info", href: "#" },
//       { name: "Nutrition Info", href: "#" },
//       { name: "Accessibility", href: "#" },
//     ],
//   },
//   socialLinks: [
//     { name: "Facebook", icon: Facebook, href: "#" },
//     { name: "Instagram", icon: Instagram, href: "#" },
//     { name: "X", icon: X, href: "#" },
//     { name: "Yelp", icon: MapPin, href: "#" },
//   ],
//   contact: {
//     email: "info@tastebuds.com",
//     phone: "+1 (555) 123-4567",
//     address: "456 Gourmet Ave, Foodie City, FC 54321",
//   },
//   copyright: {
//     text: "© 2024 TasteBuds Restaurant. All rights reserved.",
//     madeWithText: "Made with",
//     byText: "by our culinary team",
//   },
// };

export interface FooterSectionProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showSocial?: boolean;
  showContact?: boolean;
  showLinks?: boolean;
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  variant = "primary",
  size = "lg",
  showSocial = true,
  showContact = true,
  showLinks = true,
  className = "",
}) => {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          borderTop: "1px solid var(--color-border)",
        };
      case "secondary":
        return {
          backgroundColor: "var(--color-background-secondary)",
          color: "var(--color-foreground)",
          borderTop: "1px solid var(--color-border)",
        };
      case "outline":
        return {
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          borderTop: "1px solid var(--color-border)",
        };
      default:
        return {
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          borderTop: "1px solid var(--color-border)",
        };
    }
  };

  const footerLinks = defaultConfig.footerLinks;
  const socialLinks = defaultConfig.socialLinks;

  return (
    <footer
      className={`${sizeClasses[size]} ${className}`}
      style={getVariantStyles()}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--color-foreground)" }}
              >
                {defaultConfig.company.name}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-foreground-secondary)" }}
              >
                {defaultConfig.company.description}
              </p>
            </div>

            {showSocial && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: "var(--color-background-hover)",
                      color: "var(--color-foreground-secondary)",
                    }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Links */}
          {showLinks && (
            <>
              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Product
                </h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition-colors"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Company
                </h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition-colors"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Support
                </h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition-colors"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Contact Info */}
        {showContact && (
          <div
            className="pt-8 mb-8"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground-secondary)" }}
                />
                <span style={{ color: "var(--color-foreground-secondary)" }}>
                  {defaultConfig.contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground-secondary)" }}
                />
                <span style={{ color: "var(--color-foreground-secondary)" }}>
                  {defaultConfig.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground-secondary)" }}
                />
                <span style={{ color: "var(--color-foreground-secondary)" }}>
                  {defaultConfig.contact.address}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div
          className="pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span style={{ color: "var(--color-foreground-secondary)" }}>
                {defaultConfig.copyright.text}
              </span>
              <div className="flex space-x-4">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="transition-colors text-sm"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="flex items-center space-x-2"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              <span className="text-sm">
                {defaultConfig.copyright.madeWithText}
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-sm">{defaultConfig.copyright.byText}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
