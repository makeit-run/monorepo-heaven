import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none gap-1 transition-[color,box-shadow] overflow-hidden focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground px-2 py-0.5 text-xs font-medium [&>svg]:size-3 [a&]:hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-ring/50',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-medium [&>svg]:size-3 [a&]:hover:bg-secondary/90 focus-visible:border-ring focus-visible:ring-ring/50',
        destructive:
          'border-transparent bg-destructive text-white px-2 py-0.5 text-xs font-medium [&>svg]:size-3 [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground px-2 py-0.5 text-xs font-medium [&>svg]:size-3 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);