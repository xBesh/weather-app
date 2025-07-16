import React from 'react';
import { motion } from 'framer-motion';
import { ForecastDay } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { GlassCard } from './GlassCard';

interface ForecastCardProps {
  forecast: ForecastDay[];
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-light text-white/90 mb-6">7-Day Forecast</h3>
      
      <div className="space-y-4">
        {forecast.map((day, index) => (
          <motion.div
            key={day.date}
            className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className="flex items-center flex-1">
              <div className="w-16 text-white/80 font-medium">
                {day.date}
              </div>
              <div className="mx-4">
                <WeatherIcon condition={day.icon} size={32} animated={false} />
              </div>
              <div className="flex-1">
                <div className="text-white/90">{day.condition}</div>
                {day.precipitation > 0 && (
                  <div className="text-blue-300 text-sm">
                    {day.precipitation}% chance of rain
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-white/60">{day.low}°</span>
              <span className="text-white font-medium">{day.high}°</span>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};
