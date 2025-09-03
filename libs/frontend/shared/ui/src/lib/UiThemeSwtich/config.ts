import { cva } from 'class-variance-authority';

export const themeSwitchVariants = cva(
  'relative data-[state=checked]:bg-white data-[state=unchecked]:bg-white',
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

export const themeSwitchSunIconVariants = cva(
  'absolute left-2 z-0 stroke-2 text-yellow-500',
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

export const themeSwitchThumbVariants = cva(
  'data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary !z-[3]',
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

export const themeSwitchMoonIconVariants = cva(
  'absolute right-2 z-0 stroke-2 text-blue-600',
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