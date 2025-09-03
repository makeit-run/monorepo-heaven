import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'relative overflow-hidden cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'font-normal underline-offset-4 hover:underline',
        bold: 'font-bold underline-offset-4 hover:underline',
        semibold: 'font-semibold underline-offset-4 hover:underline',
        ghost: 'font-normal hover:bg-accent hover:text-accent-foreground',
        button: 'font-medium rounded-md hover:bg-accent hover:text-accent-foreground',
      },
      color: {
        default: 'text-foreground',
        primary: 'text-primary hover:text-primary/80',
        secondary: 'text-muted-foreground hover:text-foreground',
        destructive: 'text-destructive hover:text-destructive/80',
        inherit: 'text-inherit hover:text-inherit/90',
      },
      size: {
        sm: 'text-sm p-1',
        default: 'text-base p-2',
        lg: 'text-lg p-3',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        size: 'default',
        className: 'p-0',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'default',
      size: 'default',
    },
  }
);
