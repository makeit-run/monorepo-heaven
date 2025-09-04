import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
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

export const accordionItemVariants = cva(
  'border-border border-b',
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

export const accordionTriggerVariants = cva(
  'flex-row items-start justify-between gap-4 rounded-md py-4 disabled:opacity-50',
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

export const accordionTriggerTextVariants = cva(
  'text-left text-sm font-medium',
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

export const accordionContentVariants = cva(
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

export const accordionContentInnerVariants = cva(
  'pb-4',
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

export const accordionChevronVariants = cva(
  'text-primary size-[20px] shrink-0',
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
