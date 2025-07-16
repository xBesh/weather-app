import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const LoadingSpinner: React.FC = () => {
  return (
    <GlassCard className="p-8 text-center">
      <motion.div
        className="inline-block w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-white/70 mt-4">Loading weather data...</p>
    </GlassCard>
  );
};
