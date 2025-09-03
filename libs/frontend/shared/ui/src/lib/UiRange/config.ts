import { cva } from 'class-variance-authority';

export const rangeVariants = cva(
  'group relative flex w-full touch-none select-none items-center',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: 'h-4',
        default: 'h-5',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const rangeTrackVariants = cva(
  'relative w-full grow overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'border border-input bg-background',
        filled: 'bg-secondary/20',
        minimal: 'bg-muted',
      },
      size: {
        sm: 'h-2',
        default: 'h-3',
        lg: 'h-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const rangeRangeVariants = cva(
  'absolute h-full group-aria-[disabled=true]:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-green-600',
        warning: 'bg-yellow-500',
        destructive: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const rangeThumbVariants = cva(
  'block rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-aria-[disabled=true]:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-primary bg-background shadow-sm hover:bg-primary/5',
        filled: 'border-primary bg-primary hover:bg-primary/90',
        minimal: 'border-muted-foreground bg-background hover:bg-muted',
      },
      size: {
        sm: 'size-4',
        default: 'size-5',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);