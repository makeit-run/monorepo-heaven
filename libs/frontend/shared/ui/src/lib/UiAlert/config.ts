import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground px-4 py-3 text-sm [&>svg]:size-4',
        destructive:
          'text-destructive bg-card px-4 py-3 text-sm [&>svg]:size-4 [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const alertTitleVariants = cva(
  'col-start-2 line-clamp-1 min-h-4 tracking-tight',
  {
    variants: {
      variant: {
        default: 'font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const alertDescriptionVariants = cva(
  'col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);