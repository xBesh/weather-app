import React from 'react';
import { motion } from 'framer-motion';
import { useWeather } from './hooks/useWeather';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { AlertCard } from './components/AlertCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { ThemeToggle } from './components/ThemeToggle';
import { KoalaLogo } from './components/KoalaLogo';

function App() {
  const { weather, forecast, alerts, loading, error, fetchWeather, getCurrentLocation } = useWeather();

  const getBackgroundClass = (condition?: string) => {
    if (!condition) return 'bg-sunny';
    
    switch (condition) {
      case 'sunny': return 'bg-sunny';
      case 'partly-cloudy': return 'bg-cloudy';
      case 'cloudy': return 'bg-cloudy';
      case 'rainy': return 'bg-rainy';
      case 'drizzle': return 'bg-rainy';
      case 'snowy': return 'bg-snowy';
      case 'thunderstorm': return 'bg-night';
      case 'night': return 'bg-night';
      default: return 'bg-sunny';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getBackgroundClass(weather?.icon)}`}>
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with KoalaWeather branding */}
        <motion.header
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <KoalaLogo />
          <ThemeToggle />
        </motion.header>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SearchBar 
            onSearch={fetchWeather} 
            onCurrentLocation={getCurrentLocation}
          />
        </motion.div>

        {/* Weather Alerts */}
        {alerts.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <AlertCard alerts={alerts} />
          </motion.div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} onRetry={getCurrentLocation} />}
            {weather && !loading && !error && <WeatherCard weather={weather} />}
          </motion.div>

          {/* Forecast */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {forecast.length > 0 && !loading && !error && (
              <ForecastCard forecast={forecast} />
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center mt-16 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <svg width="16" height="16" viewBox="0 0 100 100" className="text-white/40">
              <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.9" />
              <circle cx="75" cy="25" r="12" fill="currentColor" opacity="0.9" />
              <circle cx="50" cy="50" r="20" fill="currentColor" />
              <circle cx="42" cy="45" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="58" cy="45" r="2" fill="currentColor" opacity="0.8" />
              <ellipse cx="50" cy="55" rx="5" ry="4" fill="currentColor" opacity="0.7" />
            </svg>
            <span>Made with love by KoalaWeather</span>
          </div>
          <p>Built with React, Framer Motion & Tailwind CSS</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
