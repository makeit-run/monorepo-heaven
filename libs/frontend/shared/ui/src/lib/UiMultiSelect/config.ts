import { cva } from 'class-variance-authority';

export const multiSelectVariants = cva(
  'w-fit min-w-[200px] overflow-visible',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const multiSelectTriggerVariants = cva(
  'group relative flex items-center w-full rounded-md border text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'min-h-[48px] bg-background border-input px-3 py-2',
      },
      size: {
        sm: 'min-h-[36px] px-2 py-1 text-sm',
        default: 'min-h-[48px] px-3 py-2 text-sm',
        lg: 'min-h-[56px] px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const multiSelectInputVariants = cva(
  'absolute inset-0 outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-transparent rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const multiSelectTagsVariants = cva(
  'z-[1] flex flex-wrap',
  {
    variants: {
      variant: {
        default: 'gap-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const multiSelectRemoveButtonVariants = cva(
  'ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background',
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

export const multiSelectDropdownVariants = cva(
  'animate-in absolute top-0 z-[1] w-full rounded-md border shadow-md outline-none',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const multiSelectContentVariants = cva(
  'relative w-full',
  {
    variants: {
      variant: {
        default: 'mt-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
