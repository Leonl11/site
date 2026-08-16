/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cinema: {
          950: '#070709',
          900: '#0e0e12',
          850: '#14141a',
          800: '#1a1a22',
          750: '#22222d',
          700: '#2c2c3a',
          600: '#434354',
          500: '#636375',
          400: '#9494a3',
          300: '#c5c5d0',
          200: '#e4e4eb',
          100: '#f4f4f7',
        },
        gold: {
          300: '#f4e3b5',
          400: '#e5ca85',
          500: '#cda851',
          600: '#b08b35',
          700: '#8c6b22',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-subtle': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
}
