import React from 'react';

export default function ThryveLogo({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`font-bold text-2xl tracking-tight ${className}`} 
      style={{ 
        color: '#4a4a4a', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '-0.02em'
      }}
    >
      <span className="inline-block relative" style={{ 
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
      }}>T</span>
      <span className="inline-block relative" style={{ 
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
      }}>h</span>
      <span className="inline-block relative" style={{ 
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
      }}>r</span>
      <span className="inline-block relative" style={{ 
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
      }}>y</span>
      <span className="inline-block relative" style={{ 
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
      }}>v</span>
      <span className="inline-block">e</span>
    </div>
  );
}
