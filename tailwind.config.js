/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0f1115',
          800: '#1a1d23',
          700: '#2a2f3a',
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
      },
    },
  },
  plugins: [],
};