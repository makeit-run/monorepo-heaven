import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative flex size-8 shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: 'size-6',
        md: 'size-8',
        lg: 'size-10',
        xl: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const avatarImageVariants = cva(
  'aspect-square size-full',
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

export const avatarFallbackVariants = cva(
  'bg-muted flex size-full flex-row items-center justify-center rounded-full',
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