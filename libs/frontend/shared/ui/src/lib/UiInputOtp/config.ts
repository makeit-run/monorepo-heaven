import { cva } from 'class-variance-authority';

export const inputOTPVariants = cva(
  'disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const inputOTPGroupVariants = cva(
  'flex items-center',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const inputOTPSlotVariants = cva(
  'relative flex items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
  {
    variants: {
      variant: {
        default:
          'h-9 w-9 border-input bg-background data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const inputOTPSeparatorVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const inputOTPCaretVariants = cva(
  'pointer-events-none absolute inset-0 flex items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const inputOTPCaretLineVariants = cva(
  'animate-caret-blink duration-1000',
  {
    variants: {
      variant: {
        default: 'bg-foreground h-4 w-px',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);