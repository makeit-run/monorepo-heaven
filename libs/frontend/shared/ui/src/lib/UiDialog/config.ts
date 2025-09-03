import { cva } from 'class-variance-authority';

export const dialogOverlayVariants = cva(
  'fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    variants: {
      variant: {
        default: 'bg-black/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dialogContentVariants = cva(
  'fixed top-[50%] left-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  {
    variants: {
      variant: {
        default:
          'bg-background w-full max-w-[calc(100%-2rem)] rounded-lg p-6 sm:max-w-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dialogCloseVariants = cva(
  'absolute top-4 right-4 rounded-xs transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default:
          'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground opacity-70 focus:ring-2 focus:ring-offset-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dialogHeaderVariants = cva('flex flex-col text-center sm:text-left', {
  variants: {
    variant: {
      default: 'gap-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dialogFooterVariants = cva('flex', {
  variants: {
    variant: {
      default: 'flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dialogTitleVariants = cva('leading-none', {
  variants: {
    variant: {
      default: 'text-lg font-semibold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dialogDescriptionVariants = cva('', {
  variants: {
    variant: {
      default: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});