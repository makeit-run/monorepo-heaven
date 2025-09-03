import { cva } from 'class-variance-authority';

export const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-primary/20',
        secondary: 'bg-secondary/20',
        success: 'bg-green-100 dark:bg-green-900/20',
        warning: 'bg-yellow-100 dark:bg-yellow-900/20',
        destructive: 'bg-red-100 dark:bg-red-900/20',
      },
      size: {
        sm: 'h-1',
        default: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const progressIndicatorVariants = cva(
  'h-full w-full flex-1 transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-green-600',
        warning: 'bg-yellow-500',
        destructive: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
