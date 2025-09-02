const path = require('path');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const {
  sharedTheme,
} = require('../../libs/frontend/feature-themeing/src/lib/tailwind-theme');

module.exports = {
  content: [
    path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: sharedTheme.container,
    extend: {
      colors: sharedTheme.colors,
      borderRadius: sharedTheme.borderRadius,
      keyframes: sharedTheme.keyframes,
      animation: sharedTheme.animation,
    },
  },
  plugins: [require('tailwindcss-animate')],
};
