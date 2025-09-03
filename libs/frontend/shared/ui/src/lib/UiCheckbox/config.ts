import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  'peer shrink-0 rounded-[4px] border transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 size-4 shadow-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const checkboxIndicatorVariants = cva('flex items-center justify-center transition-none', {
  variants: {
    variant: {
      default: 'text-current',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const checkboxIconVariants = cva('', {
  variants: {
    variant: {
      default: 'size-3.5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});