import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Apple, Grape, Banana, Cherry, Citrus } from 'lucide-react';

interface IconWrapperProps {
  children: React.ReactNode;
  style: any;
  className: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, style, className }) => (
  <motion.div style={style} className={`absolute opacity-10 text-black pointer-events-none ${className}`}>
    {children}
  </motion.div>
);

export const FloatingBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create multiple parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
       {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-green-400 animate-gradient" />
      
      {/* Floating Icons */}
      <IconWrapper style={{ y: y1, rotate: rotate1, top: '10%', left: '10%' }} className="w-24 h-24">
        <Apple size={96} strokeWidth={1} />
      </IconWrapper>
      
      <IconWrapper style={{ y: y2, rotate: rotate2, top: '20%', right: '15%' }} className="w-32 h-32">
        <Grape size={128} strokeWidth={1} />
      </IconWrapper>

      <IconWrapper style={{ y: y3, rotate: rotate1, top: '50%', left: '5%' }} className="w-20 h-20">
        <Banana size={80} strokeWidth={1} />
      </IconWrapper>

      <IconWrapper style={{ y: y1, rotate: rotate2, bottom: '20%', right: '10%' }} className="w-28 h-28">
        <Cherry size={112} strokeWidth={1} />
      </IconWrapper>

      <IconWrapper style={{ y: y2, rotate: rotate1, top: '15%', left: '50%' }} className="w-16 h-16">
        <Citrus size={64} strokeWidth={1} />
      </IconWrapper>

       <IconWrapper style={{ y: y3, rotate: rotate2, bottom: '10%', left: '25%' }} className="w-24 h-24">
        <Apple size={96} strokeWidth={1} />
      </IconWrapper>
    </div>
  );
};