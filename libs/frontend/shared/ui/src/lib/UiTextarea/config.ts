import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'flex field-sizing-content w-full bg-transparent outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 min-h-16 rounded-md border px-3 py-2 text-base shadow-xs focus-visible:ring-[3px] md:text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
