import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <GlassCard className="p-8 text-center">
      <div className="flex flex-col items-center">
        {/* Sad koala */}
        <motion.div
          className="mb-4"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="64" height="64" viewBox="0 0 100 100" className="text-red-400">
            {/* Koala ears */}
            <circle cx="25" cy="25" r="18" fill="currentColor" opacity="0.9" />
            <circle cx="75" cy="25" r="18" fill="currentColor" opacity="0.9" />
            <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.6" />
            <circle cx="75" cy="25" r="12" fill="currentColor" opacity="0.6" />
            
            {/* Koala head */}
            <circle cx="50" cy="50" r="30" fill="currentColor" />
            
            {/* Koala nose */}
            <ellipse cx="50" cy="55" rx="8" ry="6" fill="currentColor" opacity="0.7" />
            
            {/* Sad koala eyes */}
            <circle cx="42" cy="45" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="58" cy="45" r="3" fill="currentColor" opacity="0.8" />
            
            {/* Sad mouth */}
            <path d="M42 65 Q50 60 58 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-red-400 mb-4"
        >
          <AlertCircle size={32} className="mx-auto" />
        </motion.div>
        
        <h3 className="text-white/90 text-lg font-medium mb-2">
          Oops! Koala encountered a problem
        </h3>
        
        <p className="text-white/70 mb-6">
          {message}
        </p>
        
        <motion.button
          onClick={onRetry}
          className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 
                     text-white rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw size={16} className="mr-2" />
          Help Koala Try Again
        </motion.button>
      </div>
    </GlassCard>
  );
};
