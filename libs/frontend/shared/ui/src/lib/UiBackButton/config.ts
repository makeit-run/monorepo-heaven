import { cva } from 'class-variance-authority';

export const backButtonVariants = cva('inline-flex items-center rounded-full', {
  variants: {
    variant: {
      default:
        'hover:bg-secondary/10 bg-primary me-2 p-2.5 text-black',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const backButtonIconVariants = cva('', {
  variants: {
    variant: {
      default: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});