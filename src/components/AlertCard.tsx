import React from 'react';
import { motion } from 'framer-motion';
import { WeatherAlert } from '../types/weather';
import { GlassCard } from './GlassCard';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';

interface AlertCardProps {
  alerts: WeatherAlert[];
}

export const AlertCard: React.FC<AlertCardProps> = ({ alerts }) => {
  if (alerts.length === 0) return null;

  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case 'high': return AlertTriangle;
      case 'medium': return AlertCircle;
      case 'low': return Info;
      default: return Info;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 border-red-400/30 bg-red-500/10';
      case 'medium': return 'text-yellow-400 border-yellow-400/30 bg-yellow-500/10';
      case 'low': return 'text-blue-400 border-blue-400/30 bg-blue-500/10';
      default: return 'text-blue-400 border-blue-400/30 bg-blue-500/10';
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => {
        const IconComponent = getAlertIcon(alert.severity);
        const colorClass = getAlertColor(alert.severity);
        
        return (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className={`p-4 border-l-4 ${colorClass}`}>
              <div className="flex items-start space-x-3">
                <IconComponent size={20} className="mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-white/90 mb-1">
                    {alert.title}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {alert.description}
                  </p>
                  <div className="text-white/50 text-xs mt-2">
                    {alert.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};
