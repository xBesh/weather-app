import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Zap, 
  CloudDrizzle,
  Moon,
  CloudSun
} from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  size?: number;
  animated?: boolean;
}

const iconMap = {
  'sunny': Sun,
  'partly-cloudy': CloudSun,
  'cloudy': Cloud,
  'rainy': CloudRain,
  'drizzle': CloudDrizzle,
  'snowy': CloudSnow,
  'thunderstorm': Zap,
  'night': Moon,
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  condition, 
  size = 48, 
  animated = true 
}) => {
  const IconComponent = iconMap[condition as keyof typeof iconMap] || Sun;
  
  const getIconColor = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'text-yellow-400';
      case 'partly-cloudy': return 'text-blue-400';
      case 'cloudy': return 'text-gray-400';
      case 'rainy': return 'text-blue-600';
      case 'drizzle': return 'text-blue-500';
      case 'snowy': return 'text-blue-200';
      case 'thunderstorm': return 'text-purple-400';
      case 'night': return 'text-indigo-300';
      default: return 'text-yellow-400';
    }
  };

  const getAnimation = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return {
          rotate: [0, 360],
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        };
      case 'rainy':
      case 'drizzle':
        return {
          y: [0, -5, 0],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        };
      case 'thunderstorm':
        return {
          scale: [1, 1.1, 1],
          transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
        };
      default:
        return {
          y: [0, -3, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        };
    }
  };

  return (
    <motion.div
      animate={animated ? getAnimation(condition) : {}}
      className={`${getIconColor(condition)} drop-shadow-lg`}
    >
      <IconComponent size={size} />
    </motion.div>
  );
};
