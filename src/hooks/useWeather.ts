import { useState, useEffect } from 'react';
import { WeatherData, ForecastDay, WeatherAlert } from '../types/weather';

// Mock weather data for demonstration
const mockWeatherData: WeatherData = {
  location: 'New York, NY',
  temperature: 22,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  pressure: 1013,
  visibility: 10,
  uvIndex: 6,
  feelsLike: 25,
  icon: 'partly-cloudy'
};

const mockForecast: ForecastDay[] = [
  { date: 'Today', high: 24, low: 18, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
  { date: 'Tomorrow', high: 26, low: 20, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 10 },
  { date: 'Wednesday', high: 23, low: 17, condition: 'Cloudy', icon: 'cloudy', precipitation: 30 },
  { date: 'Thursday', high: 21, low: 15, condition: 'Rainy', icon: 'rainy', precipitation: 80 },
  { date: 'Friday', high: 19, low: 13, condition: 'Thunderstorm', icon: 'thunderstorm', precipitation: 90 },
  { date: 'Saturday', high: 25, low: 19, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
  { date: 'Sunday', high: 27, low: 21, condition: 'Sunny', icon: 'sunny', precipitation: 5 },
];

const mockAlerts: WeatherAlert[] = [
  {
    id: '1',
    title: 'Heat Advisory',
    description: 'High temperatures expected. Stay hydrated and avoid prolonged sun exposure.',
    severity: 'medium',
    timestamp: new Date()
  }
];

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (location?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWeather(location ? { ...mockWeatherData, location } : mockWeatherData);
      setForecast(mockForecast);
      setAlerts(mockAlerts);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode these coordinates
          fetchWeather('Current Location');
        },
        (error) => {
          setError('Location access denied');
          fetchWeather();
        }
      );
    } else {
      fetchWeather();
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    weather,
    forecast,
    alerts,
    loading,
    error,
    fetchWeather,
    getCurrentLocation
  };
};
