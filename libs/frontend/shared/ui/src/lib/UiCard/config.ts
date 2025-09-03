import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'flex flex-col rounded-xl border shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground gap-6 py-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const cardHeaderVariants = cva(
  '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
  {
    variants: {
      variant: {
        default: 'gap-1.5 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const cardTitleVariants = cva('leading-none', {
  variants: {
    variant: {
      default: 'font-semibold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const cardDescriptionVariants = cva('', {
  variants: {
    variant: {
      default: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const cardActionVariants = cva('col-start-2 row-span-2 row-start-1 self-start justify-self-end', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const cardContentVariants = cva('', {
  variants: {
    variant: {
      default: 'px-6',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const cardFooterVariants = cva('flex items-center [.border-t]:pt-6', {
  variants: {
    variant: {
      default: 'px-6',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});