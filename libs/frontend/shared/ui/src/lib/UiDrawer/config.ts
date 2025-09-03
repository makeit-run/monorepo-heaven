import { cva } from 'class-variance-authority';

export const drawerOverlayVariants = cva(
  'fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    variants: {
      variant: {
        default: 'bg-black/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const drawerContentVariants = cva(
  'group/drawer-content fixed z-50 flex h-auto flex-col',
  {
    variants: {
      variant: {
        default:
          'bg-background data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const drawerHandleVariants = cva(
  'mx-auto mt-4 hidden shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block',
  {
    variants: {
      variant: {
        default: 'bg-muted h-2 w-[100px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const drawerHeaderVariants = cva(
  'flex flex-col group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:text-left',
  {
    variants: {
      variant: {
        default: 'gap-0.5 p-4 md:gap-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const drawerFooterVariants = cva('mt-auto flex flex-col', {
  variants: {
    variant: {
      default: 'gap-2 p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const drawerTitleVariants = cva('', {
  variants: {
    variant: {
      default: 'text-foreground font-semibold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const drawerDescriptionVariants = cva('', {
  variants: {
    variant: {
      default: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});