
import React from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
}

const GlowEffect = ({ children, className }: GlowEffectProps) => {
  return (
    <div className={`group relative ${className}`}>
      {/* Enhanced glow effect with multiple gradient layers */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-700 group-hover:duration-200 animate-glow"></div>
      <div className="relative bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default GlowEffect;
