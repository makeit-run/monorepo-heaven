import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { sharedTheme } from '../../libs/frontend/feature-themeing/src/lib/tailwind-theme';
import tailwindcssAnimate from 'tailwindcss-animate';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
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
  plugins: [tailwindcssAnimate],
};
