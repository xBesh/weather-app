/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        }
      },
      backgroundImage: {
        'sunny': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
        'sunny-dark': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'cloudy': 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
        'cloudy-dark': 'linear-gradient(135deg, #2d3436 0%, #000000 100%)',
        'rainy': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
        'rainy-dark': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'snowy': 'linear-gradient(135deg, #ddd6fe 0%, #8b5cf6 100%)',
        'snowy-dark': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'night': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'night-dark': 'linear-gradient(135deg, #000000 0%, #2d3436 100%)',
      }
    },
  },
  plugins: [],
}
