import { cva, VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  'relative items-center inline-flex justify-center font-roboto font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none focus-visible:ring-offset-2 disabled:opacity-50 ring-offset-background',
  {
    variants: {
      color: {
        transparent: '!bg-transparent !hover:bg-primary/10',
        primary: ['bg-primary hover:bg-primary/70 focus:bg-primary/90'],
        secondary: [
          'bg-secondary border-secondary',
          'hover:bg-secondary hover:border-secondary',
        ],
        error: [
          'bg-error border-error',
          'hover:bg-error/50 hover:border-error/50',
        ],
        'primary-muted': [
          'bg-primary-700 !text-white border-gray-600',
          'hover:bg-primary-700/70',
        ],
        gray: [
          'bg-gray-400 border-gray-600 !text-gray-600',
          'hover:bg-gray-600/70 hover:border-gray-600/70',
        ],
        white: [
          'bg-white border-primary/20 border !text-primary',
          'hover:bg-white-600 hover:border-primary/40',
        ],
      },
      textColor: {
        secondary: '!text-secondary',
        default: 'text-white',
      },
      variant: {
        contained: '',
        rounded: '!rounded-full !gap-0',
        ghost:
          'bg-transparent hover:bg-transparent text-primary focus:!bg-transparent focus-visible:!outline-none focus-visible:!ring-0',
        hollow:
          '!bg-transparent hover:!bg-primary/5 border !border-primary/40 !text-primary hover:text-primary/80',
        outlined:
          '!bg-ui-foreground border !border-primary/40 !text-primary hover:text-primary/80',
        'outlined-secondary':
          '!bg-ui-foreground border !border-secondary/40 !text-secondary-400 hover:text-secondary/80',
        'outlined-rounded':
          '!bg-app border !border-primary/40 !rounded-full !gap-0',
        highlight:
          '!bg-primary border !border-primary/40 !text-white hover:text-white/80',
        'highlight-alternative':
          '!border-2 max-sm:!px-1 bg-transparent max-xs:text-nowrap z-100 sm:!px-6  focus:!bg-transparent hover:bg-transparent  !border-text-highlight text-text-highlight',

        'highlight-secondary':
          '!border-2 max-sm:!px-1 bg-transparent max-xs:text-nowrap z-100 sm:!px-6  focus:!bg-transparent hover:bg-transparent  !border-text-highlight text-secondary',
        text: 'bg-transparent hover:bg-transparent !text-primary !ring-0 size-max focus:bg-transparent',
        error: '!bg-error',
      },
      textWeight: {
        default: '',
        heavy: 'font-bold',
        black: 'font-black',
        normal: 'font-normal',
      },
      border: {
        default: 'border-primary',
        outline: '!border-primary !border',
      },
      wrapping: {
        nowrap: 'text-nowrap',
        wrap: 'text-wrap',
      },
      weight: {
        default: 'font-bold',
        heavy: 'font-bold',
        black: 'font-black',
        normal: 'font-normal',
      },
      padding: {
        default: 'p-2 sm:px-2 sm:py-3',
        mini: 'px-1 py-0',
        slim: 'px-1 py-1',
        small: 'px-2 py-1',
        square: 'p-2',
        'small-medium': 'px-3 py-2',
        medium: 'px-4 py-3.5',
        large: 'px-4 py-3',
        none: 'p-0',
      },
      gap: {
        default: 'gap-2',
        none: 'gap-0',
      },
      size: {
        mini: 'text-sm',
        small: 'text-sm',
        'small-medium': 'text-sm',
        default: 'text-sm',
        'rounded-xs': 'min-w-6 min-h-6',
        'rounded-sm':
          'md:min-w-8.75 md:min-h-8.75 sm:min-h-w-8 sm:min-h-w-7 min-w-7 min-h-7',
        'rounded-md': 'min-w-15 min-h-15',
        medium: 'min-w-13 min-h-11',
        large: 'min-w-45 min-h-11',
        huge: 'min-w-xl min-h-11 text-xl w-full !rounded-xl',
      },
      radius: {
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      hover: {
        default: '',
        glare: 'hover:bg-ui-foreground/5',
        glimmer: 'hover:bg-primary',
        darken: 'hover:bg-text-low-contrast/10',
        transparent: 'hover:bg-transparent',
        ghost: 'bg-transparent hover:bg-transparent focus:bg-transparent',
        outlined:
          '!bg-app-background border !border-ui-background/40 text-ui-background',
        'outlined-rounded':
          '!bg-app-background border !border-ui-background/40 !rounded-full !gap-0',
      },
    },
    compoundVariants: [
      {
        size: 'large',
        padding: 'large',
      },

      {
        size: 'medium',
        padding: 'medium',
      },

      {
        size: 'mini',
        padding: 'mini',
      },
      {
        size: 'small',
        padding: 'small',
      },
      {
        size: 'small-medium',
        padding: 'small-medium',
      },
      {
        size: 'default',
        padding: 'default',
      },
      {
        variant: 'ghost',
      },
      {
        variant: 'rounded',
        size: 'rounded-md',
      },
    ],
    defaultVariants: {
      weight: 'default',
      wrapping: 'wrap',
      variant: 'contained',
      color: 'primary',
      size: 'default',
      hover: 'default',
      border: 'default',
      textColor: 'default',
      padding: 'default',
      radius: 'xl',
      gap: 'default',
    },
  }
);
export type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export const buttonLoaderStyles = cva('absolute w-[40%] animate-spin', {
  variants: {},
  defaultVariants: {},
});
