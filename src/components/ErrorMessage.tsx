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
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-red-400 mb-4"
      >
        <AlertCircle size={48} className="mx-auto" />
      </motion.div>
      
      <h3 className="text-white/90 text-lg font-medium mb-2">
        Something went wrong
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
        Try Again
      </motion.button>
    </GlassCard>
  );
};
