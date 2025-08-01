import React from "react";

export interface AboutSectionProps {
  size?: "sm" | "md" | "lg";
  title?: string;
  description?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

// ============================================================================
// CONFIGURATION SECTION - AI AGENTS CAN EASILY MODIFY THESE VALUES
// ============================================================================

// Default configuration - modify these values to customize the content
const defaultConfig = {
  title: "About Our Company",
  description:
    "We're a team of passionate individuals dedicated to creating amazing experiences for our users. Our mission is to build the future, one component at a time.",
  stats: [
    {
      value: "50+",
      label: "Team Members",
    },
    {
      value: "1000+",
      label: "Projects Completed",
    },
    {
      value: "5+",
      label: "Years Experience",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
  ],
};

// Example: To customize for a tech startup, modify the defaultConfig like this:
// const defaultConfig = {
//   title: "About Our Startup",
//   description: "We're a cutting-edge tech startup revolutionizing the industry with innovative solutions.",
//   stats: [
//     { value: "15+", label: "Team Members" },
//     { value: "50+", label: "Projects Launched" },
//     { value: "3+", label: "Years Experience" },
//     { value: "95%", label: "User Satisfaction" }
//   ]
// };

// ============================================================================
// COMPONENT SECTION - NO NEED TO MODIFY BELOW THIS LINE
// ============================================================================

export const AboutSection: React.FC<AboutSectionProps> = ({
  size = "lg",
  title = defaultConfig.title,
  description = defaultConfig.description,
  stats = defaultConfig.stats,
  className = "",
}) => {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
  };

  return (
    <section
      className={`${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: "var(--color-background-secondary)",
        color: "var(--color-foreground)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-foreground)" }}
          >
            {title}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  color: "var(--color-foreground)",
                  textShadow: "0 2px 4px var(--color-shadow)",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "var(--color-foreground-secondary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
