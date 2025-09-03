import { cva } from 'class-variance-authority';

export const scrollAreaVariants = cva(
  'relative',
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

export const scrollAreaViewportVariants = cva(
  'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
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

export const scrollBarVariants = cva(
  'flex touch-none p-px transition-colors select-none',
  {
    variants: {
      orientation: {
        vertical: 'h-full w-2.5 border-l border-l-transparent',
        horizontal: 'h-2.5 flex-col border-t border-t-transparent',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

export const scrollAreaThumbVariants = cva(
  'bg-border relative flex-1 rounded-full',
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
