import React, { useEffect, useState } from 'react';

export const MouseGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if it's mobile or touch device to disable heavy mouse glow tracking
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-30 transition-opacity duration-300 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.15]"
      style={{
        left: `${position.x - 300}px`,
        top: `${position.y - 300}px`,
        background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(59,130,246,0.2) 50%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
};
