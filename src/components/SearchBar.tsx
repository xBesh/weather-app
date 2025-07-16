import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, X } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface SearchBarProps {
  onSearch: (location: string) => void;
  onCurrentLocation: () => void;
}

const mockSuggestions = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
];

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCurrentLocation }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      const filtered = mockSuggestions.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = (location: string) => {
    setQuery(location);
    setShowSuggestions(false);
    onSearch(location);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <GlassCard className="p-1">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="flex-1 flex items-center px-4 py-3">
            <Search className="text-white/60 mr-3" size={20} />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search for a city..."
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="text-white/60 hover:text-white ml-2"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onCurrentLocation}
            className="p-3 text-white/60 hover:text-white transition-colors"
          >
            <MapPin size={20} />
          </button>
        </form>
      </GlassCard>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 z-50"
        >
          <GlassCard className="py-2">
            {filteredSuggestions.map((suggestion, index) => (
              <motion.button
                key={suggestion}
                onClick={() => handleSearch(suggestion)}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {suggestion}
              </motion.button>
            ))}
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
};
