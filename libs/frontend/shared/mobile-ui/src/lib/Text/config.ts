import { cva } from 'class-variance-authority';
import { Platform } from 'react-native';
import { cn } from '@shared/utils/cn';

export const textVariants = cva(
  cn(
    'text-foreground text-base',
    Platform.select({
      web: 'select-text',
    })
  ),
  {
    variants: {
      variant: {
        default: '',
        h1: cn(
          'text-center text-4xl font-extrabold tracking-tight',
          Platform.select({ web: 'scroll-m-20 text-balance' })
        ),
        h2: cn(
          'border-border border-b pb-2 text-3xl font-semibold tracking-tight',
          Platform.select({ web: 'scroll-m-20 first:mt-0' })
        ),
        h3: cn(
          'text-2xl font-semibold tracking-tight',
          Platform.select({ web: 'scroll-m-20' })
        ),
        h4: cn(
          'text-xl font-semibold tracking-tight',
          Platform.select({ web: 'scroll-m-20' })
        ),
        p: 'mt-3 leading-7 sm:mt-6',
        blockquote: 'mt-4 border-l-2 pl-3 italic sm:mt-6 sm:pl-6',
        code: cn(
          'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
        ),
        lead: 'text-muted-foreground text-xl',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-muted-foreground text-sm',
        // Body text variants
        body1: 'text-[16px]',
        body2: 'text-[14px] font-medium',
        body3: 'text-[14px] font-normal',
        body4: 'text-[12px] font-medium',
        body5: 'text-[12px]',
      },
      color: {
        default: '',
        primary: 'text-primary',
        error: 'text-error',
        white: 'text-white',
        tertiary: 'text-tertiary-500',
        'tertiary-700': 'text-tertiary-700',
        black: 'text-black-900',
        'black-300': 'text-black-300',
        'black-500': 'text-black-500',
        'black-700': 'text-black-700',
      },
      weight: {
        default: '',
        thin: '!font-thin',
        extralight: '!font-extralight',
        light: '!font-light',
        normal: '!font-normal',
        medium: '!font-medium',
        semibold: '!font-semibold',
        bold: '!font-bold',
        extrabold: '!font-extrabold',
        black: '!font-black',
      },
      balance: {
        default: '',
        wrap: 'text-wrap',
        nowrap: 'text-nowrap',
        pretty: 'text-pretty',
        balance: 'text-balance',
      },
    },
    defaultVariants: {
      variant: 'default',
      color: 'default',
      weight: 'default',
      balance: 'default',
    },
  }
);
