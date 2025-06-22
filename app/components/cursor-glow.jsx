'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Main cursor glow effect */}
      <div
        className={`cursor-glow ${isVisible ? 'active' : ''}`}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: mousePosition.x,
            top: mousePosition.y,
            width: '300px',
            height: '300px',
            background: `radial-gradient(
              circle,
              rgba(59, 130, 246, 0.15) 0%,
              rgba(59, 130, 246, 0.1) 25%,
              rgba(6, 182, 212, 0.08) 50%,
              transparent 70%
            )`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
            animation: 'pulse-glow 2s ease-in-out infinite alternate',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Cursor trail effect */}
      <div
        className="cursor-trail"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
