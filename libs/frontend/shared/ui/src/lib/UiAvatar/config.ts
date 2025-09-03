import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const avatarImageVariants = cva('aspect-square', {
  variants: {
    variant: {
      default: 'size-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const avatarFallbackVariants = cva(
  'flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-muted size-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);