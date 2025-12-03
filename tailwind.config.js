/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  darkMode: 'class',
  content: [
    './App.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#151515',
        accent50: '#3E2D06',
        accent500: '#F3BA29',
        gray200: '#262626',
        gray400: '#202020',
        gray500: '#929292',
        gray600: '#979797',
        grayInactive: '#676B73',
        white: '#FFFFFF',
        red500: '#EE2828',
        green50: '#262626',
        green500: '#1ED047',
        success: '#2DD9A7',
        error: '#FF6A71',
        cardBg: '#1E2025',

        // DARK THEME
        black: '#0D0D0D',
        bg: '#14161A',
        primaryText: '#ffffff',
        iconColor: '#A0A0A0',
        primary500: '#0B75E7',
        secondary: '#00BD59',
        accent300: '#667185',
      },
    },
  },
  plugins: [],
};
