import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const LoadingSpinner: React.FC = () => {
  return (
    <GlassCard className="p-8 text-center">
      <div className="flex flex-col items-center">
        {/* Cute koala loading animation */}
        <motion.div
          className="mb-4"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="48" height="48" viewBox="0 0 100 100" className="text-white/80">
            {/* Koala ears */}
            <circle cx="25" cy="25" r="18" fill="currentColor" opacity="0.9" />
            <circle cx="75" cy="25" r="18" fill="currentColor" opacity="0.9" />
            <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.6" />
            <circle cx="75" cy="25" r="12" fill="currentColor" opacity="0.6" />
            
            {/* Koala head */}
            <circle cx="50" cy="50" r="30" fill="currentColor" />
            
            {/* Koala nose */}
            <ellipse cx="50" cy="55" rx="8" ry="6" fill="currentColor" opacity="0.7" />
            
            {/* Sleepy koala eyes */}
            <path d="M38 45 Q42 42 46 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M54 45 Q58 42 62 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </motion.div>
        
        <motion.div
          className="inline-block w-8 h-8 border-2 border-white/30 border-t-white rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        <p className="text-white/70">Koala is gathering weather data...</p>
        <p className="text-white/50 text-sm mt-1">Please wait while we fetch the forecast</p>
      </div>
    </GlassCard>
  );
};
