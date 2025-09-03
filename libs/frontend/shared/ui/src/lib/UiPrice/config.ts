import { cva } from 'class-variance-authority';

export const priceVariants = cva(
  'flex flex-nowrap items-start gap-0.5',
  {
    variants: {
      variant: {
        default: 'text-primary py-2',
        secondary: 'text-muted-foreground py-1',
        destructive: 'text-destructive py-2',
        success: 'text-green-600 py-2',
        large: 'text-primary py-3',
      },
      size: {
        sm: 'gap-0.5 py-1',
        default: 'gap-0.5 py-2',
        lg: 'gap-1 py-3',
      },
      alignment: {
        start: 'items-start',
        center: 'items-center',
        baseline: 'items-baseline',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      alignment: 'start',
    },
  }
);

export const priceCurrencyVariants = cva(
  'leading-none text-nowrap',
  {
    variants: {
      variant: {
        default: '',
        secondary: '',
        destructive: '',
        success: '',
        large: '',
      },
      size: {
        sm: 'text-xs font-medium',
        default: 'text-sm font-medium',
        lg: 'text-base font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const priceBaseVariants = cva(
  'text-nowrap font-bold leading-tight',
  {
    variants: {
      variant: {
        default: '',
        secondary: '',
        destructive: '',
        success: '',
        large: '',
      },
      size: {
        sm: 'text-lg leading-5',
        default: 'text-2xl leading-7',
        lg: 'text-4xl leading-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const priceDecimalsVariants = cva(
  'leading-none text-nowrap',
  {
    variants: {
      variant: {
        default: '',
        secondary: '',
        destructive: '',
        success: '',
        large: '',
      },
      size: {
        sm: 'text-xs font-medium',
        default: 'text-sm font-medium',
        lg: 'text-base font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);