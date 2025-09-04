import { cva } from 'class-variance-authority';

export const datePickerVariants = cva(
  'size-full bg-background shadow border flex-row items-center',
  {
    variants: {
      variant: {
        default: 'border-black-200',
      },
      size: {
        default: 'px-[10px] py-[21.5px] text-[16px] rounded-[10px]',
        sm: 'px-[8px] py-[18px] text-[14px] rounded-[8px]',
        lg: 'px-[12px] py-[24px] text-[18px] rounded-[12px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const datePickerContainerVariants = cva(
  'relative flex-row',
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

export const datePickerTextVariants = cva(
  '',
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

export const datePickerPlaceholderVariants = cva(
  'text-black-300',
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

export const datePickerClearButtonVariants = cva(
  'text-black-900 absolute inset-y-0 right-4 flex items-center justify-center',
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

export const datePickerClearIconVariants = cva(
  'text-black-300 shrink-0',
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
