import { lightTheme } from './themes/lightTheme';

export const sharedTheme = {
  colors: lightTheme.colors,
  boxShadow: lightTheme.boxShadow,
  borderRadius: {
    lg: '0.75rem',
    md: '0.5rem', 
    sm: '0.25rem',
  },
  keyframes: {
    'accordion-down': {
      from: {
        height: '0',
      },
      to: {
        height: 'var(--radix-accordion-content-height)',
      },
    },
    'accordion-up': {
      from: {
        height: 'var(--radix-accordion-content-height)',
      },
      to: {
        height: '0',
      },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
};

