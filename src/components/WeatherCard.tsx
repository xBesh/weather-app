import React from 'react';
import { motion } from 'framer-motion';
import { WeatherData } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { GlassCard } from './GlassCard';
import { Thermometer, Droplets, Wind, Eye, Sun } from 'lucide-react';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const stats = [
    { icon: Thermometer, label: 'Feels like', value: `${weather.feelsLike}°C` },
    { icon: Droplets, label: 'Humidity', value: `${weather.humidity}%` },
    { icon: Wind, label: 'Wind', value: `${weather.windSpeed} km/h` },
    { icon: Eye, label: 'Visibility', value: `${weather.visibility} km` },
    { icon: Sun, label: 'UV Index', value: weather.uvIndex.toString() },
  ];

  return (
    <GlassCard className="p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-light text-white/90 mb-2">
          {weather.location}
        </h2>
        
        <div className="flex items-center justify-center mb-6">
          <WeatherIcon condition={weather.icon} size={80} />
          <div className="ml-6">
            <motion.div
              className="text-6xl font-thin text-white"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {weather.temperature}°
            </motion.div>
            <div className="text-white/70 text-lg">
              {weather.condition}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="text-white/60" size={20} />
              </div>
              <div className="text-white/90 font-medium">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </GlassCard>
  );
};
