
import React from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
}

const GlowEffect = ({ children, className }: GlowEffectProps) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white rounded-lg p-5">
        {children}
      </div>
    </div>
  );
};

export default GlowEffect;
