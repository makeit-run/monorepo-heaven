import { cva } from 'class-variance-authority';

export const expandableTextAreaVariants = cva(
  'flex peer/input focus-visible:outline-none w-full focus-visible:ring-2 ring-primary focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-y-auto',
  {
    variants: {
      variant: {
        ghost:
          'scrollbar-thumb-rounded-full scrollbar-track-transparent border-none text-sm px-[5.5px] py-[1.5px] lg:py-[2.5px] focus-visible:ring-0',
        default:
          'shadow-input text-sm rounded-md border border-tertiary/25 bg-white px-[5.5px] py-[2.5px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
