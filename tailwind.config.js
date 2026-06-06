/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fbf3f4',
          100: '#f5dcdf',
          600: '#8f1d32',
          700: '#761629',
          800: '#5f1424',
          900: '#42101b',
        },
        charcoal: '#202225',
        mist: '#f6f7f8',
      },
      boxShadow: {
        premium: '0 22px 60px rgba(32, 34, 37, 0.12)',
        soft: '0 14px 35px rgba(95, 20, 36, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
