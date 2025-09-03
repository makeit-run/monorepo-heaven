import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva(
  'grid',
  {
    variants: {
      variant: {
        default: 'gap-3',
        compact: 'gap-2',
        spacious: 'gap-4',
      },
      orientation: {
        vertical: 'grid-cols-1',
        horizontal: 'grid-flow-col auto-cols-max',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'vertical',
    },
  }
);

export const radioGroupItemVariants = cva(
  'aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30',
      },
      size: {
        sm: 'size-3',
        default: 'size-4',
        lg: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const radioGroupIndicatorVariants = cva(
  'relative flex items-center justify-center',
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

export const radioGroupIndicatorIconVariants = cva(
  'fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: 'size-1.5',
        default: 'size-2',
        lg: 'size-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
