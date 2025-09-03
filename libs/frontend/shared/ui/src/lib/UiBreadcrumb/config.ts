import { cva } from 'class-variance-authority';

export const breadcrumbListVariants = cva(
  'flex flex-wrap items-center break-words',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground gap-1.5 text-sm sm:gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const breadcrumbItemVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      default: 'gap-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const breadcrumbLinkVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'hover:text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const breadcrumbPageVariants = cva('', {
  variants: {
    variant: {
      default: 'text-foreground font-normal',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const breadcrumbSeparatorVariants = cva('', {
  variants: {
    variant: {
      default: '[&>svg]:size-3.5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const breadcrumbEllipsisVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'size-9',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const breadcrumbEllipsisIconVariants = cva('', {
  variants: {
    variant: {
      default: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});