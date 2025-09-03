import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  'flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-sm font-medium text-foreground',
        small: 'text-xs font-medium text-muted-foreground pb-0.5',
        large: 'text-base font-semibold text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
