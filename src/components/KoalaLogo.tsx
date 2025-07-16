import React from 'react';
import { motion } from 'framer-motion';

interface KoalaLogoProps {
  size?: number;
  animated?: boolean;
}

export const KoalaLogo: React.FC<KoalaLogoProps> = ({ size = 40, animated = true }) => {
  return (
    <motion.div
      className="flex items-center space-x-3"
      animate={animated ? {
        y: [0, -2, 0],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Koala SVG Icon */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="text-white drop-shadow-lg"
        whileHover={animated ? { scale: 1.1, rotate: 5 } : {}}
      >
        {/* Koala ears */}
        <circle cx="25" cy="25" r="18" fill="currentColor" opacity="0.9" />
        <circle cx="75" cy="25" r="18" fill="currentColor" opacity="0.9" />
        <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.6" />
        <circle cx="75" cy="25" r="12" fill="currentColor" opacity="0.6" />
        
        {/* Koala head */}
        <circle cx="50" cy="50" r="30" fill="currentColor" />
        
        {/* Koala nose */}
        <ellipse cx="50" cy="55" rx="8" ry="6" fill="currentColor" opacity="0.7" />
        
        {/* Koala eyes */}
        <circle cx="42" cy="45" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="58" cy="45" r="4" fill="currentColor" opacity="0.8" />
        
        {/* Eye highlights */}
        <circle cx="43" cy="43" r="1.5" fill="white" />
        <circle cx="59" cy="43" r="1.5" fill="white" />
      </motion.svg>
      
      <motion.div
        className="text-white font-light"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-2xl leading-none">KoalaWeather</div>
        <div className="text-sm text-white/70 leading-none">Your cuddly forecast</div>
      </motion.div>
    </motion.div>
  );
};
