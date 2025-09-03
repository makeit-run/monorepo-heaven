import { cva } from 'class-variance-authority';

export const typewriterVariants = cva(
  'text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl',
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

export const typewriterContainerVariants = cva(
  'inline',
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

export const typewriterWordVariants = cva(
  'inline-block',
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

export const typewriterCharVariants = cva(
  'hidden text-black opacity-0',
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

export const typewriterCursorVariants = cva(
  'inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10',
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

export const typewriterSmoothContainerVariants = cva(
  'flex space-x-1',
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

export const typewriterSmoothContentVariants = cva(
  'overflow-hidden',
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

export const typewriterSmoothCharVariants = cva(
  'text-black dark:text-white',
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

export const typewriterSmoothCursorVariants = cva(
  'bg-primary block h-4 w-[4px] rounded-sm sm:h-6 xl:h-12',
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