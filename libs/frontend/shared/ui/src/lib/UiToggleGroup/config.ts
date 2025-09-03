import { cva } from 'class-variance-authority';

export const toggleGroupVariants = cva(
  'group/toggle-group flex w-fit items-center rounded-md',
  {
    variants: {
      variant: {
        default: '',
        outline: 'shadow-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const toggleGroupItemVariants = cva(
  'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border-l-0 first:border-l',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);