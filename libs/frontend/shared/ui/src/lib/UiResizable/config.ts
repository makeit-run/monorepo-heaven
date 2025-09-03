import { cva } from 'class-variance-authority';

export const resizablePanelGroupVariants = cva(
  'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
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

export const resizableHandleVariants = cva(
  'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
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

export const resizableHandleIndicatorVariants = cva(
  'bg-border z-10 flex items-center justify-center rounded-xs border',
  {
    variants: {
      variant: {
        default: 'h-4 w-3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const resizableHandleIconVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'size-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);