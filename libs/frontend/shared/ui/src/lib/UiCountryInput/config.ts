import { cva } from 'class-variance-authority';

export const countryInputTriggerVariants = cva('w-full focus-visible:outline-none', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const countryInputChevronVariants = cva('transition duration-500', {
  variants: {
    variant: {
      default: 'text-primary size-5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const countryInputPopoverContentVariants = cva('', {
  variants: {
    variant: {
      default: 'max-md:w-[90vw]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});