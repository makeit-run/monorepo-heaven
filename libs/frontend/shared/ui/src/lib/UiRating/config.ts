import { cva } from 'class-variance-authority';

export const ratingShortVariants = cva(
  'flex items-center justify-center',
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

export const ratingFullVariants = cva(
  'flex flex-col items-center',
  {
    variants: {
      variant: {
        default: 'gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const ratingStarsVariants = cva(
  'flex flex-row-reverse items-center hover:cursor-default',
  {
    variants: {
      variant: {
        default: 'gap-2',
        interactive: 'gap-2 hover:cursor-pointer [&_button:hover_svg]:fill-[#FFB906] [&_button:hover_~_button_svg]:fill-[#FFB906]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const ratingStarVariants = cva(
  'fill-transparent stroke-[#FFB906]',
  {
    variants: {
      variant: {
        default: '',
        filled: 'fill-[#FFB906]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const ratingStarFilledVariants = cva(
  'fill-[#FFB906]',
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