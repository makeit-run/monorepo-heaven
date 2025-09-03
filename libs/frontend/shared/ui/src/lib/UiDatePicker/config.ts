import { cva } from 'class-variance-authority';

export const datePickerContainerVariants = cva('flex flex-col', {
  variants: {
    variant: {
      default: 'gap-3',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const datePickerLabelVariants = cva('', {
  variants: {
    variant: {
      default: 'px-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const datePickerTriggerVariants = cva('justify-between', {
  variants: {
    variant: {
      default: 'w-48 font-normal',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const datePickerPopoverContentVariants = cva('overflow-hidden', {
  variants: {
    variant: {
      default: 'w-auto p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});