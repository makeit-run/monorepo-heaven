import { cva } from 'class-variance-authority';
import { Platform } from 'react-native';
import { cn } from '@shared/utils/cn';

export const checkboxVariants = cva(
  cn(
    'border-black dark:bg-black/30 size-4 shrink-0 rounded-[4px] border shadow-sm shadow-black/5',
    Platform.select({
      web: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer cursor-default outline-none transition-shadow focus-visible:ring-[3px] disabled:cursor-not-allowed',
      native: 'overflow-hidden',
    })
  ),
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: 'size-5',
        md: 'size-6',
        lg: 'size-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const checkboxCheckedVariants = cva('border-primary', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const checkboxIndicatorVariants = cva(
  'bg-primary h-full w-full items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const checkboxIconVariants = cva('text-primary-foreground', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
