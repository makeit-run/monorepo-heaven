import { cva } from 'class-variance-authority';

export const accordionItemVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b last:border-b-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionTriggerVariants = cva(
  'flex flex-1 items-start justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        default:
          'rounded-md py-4 text-sm font-medium hover:underline focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        default: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const accordionContentInnerVariants = cva('', {
  variants: {
    variant: {
      default: 'pt-0 pb-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionIconVariants = cva(
  'pointer-events-none shrink-0 transition-transform duration-200',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground size-4 translate-y-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);