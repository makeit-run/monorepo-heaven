import { cva } from 'class-variance-authority';

export const passwordInputVariants = cva(
  'text-sm w-full flex peer rounded-md text-secondary focus-visible:outline-none focus-visible:ring-1 ring-secondary/40 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'px-4 py-4 rounded-2xl',
        small: 'px-2.5 py-1.375',
        large: 'px-4 py-4 !rounded-full !text-sm font-normal',
        huge: 'px-5 py-5 !rounded-2xl !text-lg font-bold',
        mini: 'px-1.375 py-1.375 !text-mini',
      },
      color: {
        default: 'bg-accent/10',
        primary: '',
        highlight:
          '!border-secondary !border-none !text-secondary !ring-secondary !bg-white',
      },
      variant: {
        default: 'bg-white',
        outlined:
          'border-white ring-white !bg-transparent text-white placeholder-current',
      },
      borderSize: {
        default: 'border-gray-300 border border-solid',
        small: 'border-0.5',
        large: 'border-2',
        mini: 'border-0.5',
      },
    },
    defaultVariants: {
      color: 'default',
      borderSize: 'default',
      variant: 'default',
      size: 'default',
    },
  }
);

export const passwordInputIconStyles = cva(
  'absolute top-1/2 cursor-pointer right-3  transition-all text-accent-300 duration-500 transform -translate-x-1/2 -translate-y-1/2',
  {
    variants: {
      variant: {
        default:
          'h-4 w-4 hover:text-accent-500 peer-[:not(:placeholder-shown)]:text-accent-500',
        active: 'h-4 w-4 text-accent-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
