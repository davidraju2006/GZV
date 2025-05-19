import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorVisible]);

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-50 w-7 h-7 rounded-full bg-[#FF5722] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorVisible ? 0.75 : 0,
          scale: cursorVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-50 w-36 h-36 rounded-full bg-[rgba(255,87,34,0.03)] border border-[rgba(255,87,34,0.2)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorVisible ? 0.5 : 0,
          scale: cursorVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
      />
    </>
  );
};

export default CursorEffect;