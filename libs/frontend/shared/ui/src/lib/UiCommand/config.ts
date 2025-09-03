import { cva } from 'class-variance-authority';

export const commandVariants = cva(
  'flex h-full w-full flex-col overflow-hidden rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const commandDialogContentVariants = cva('', {
  variants: {
    variant: {
      default: 'overflow-hidden p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandDialogCommandVariants = cva(
  '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
  {
    variants: {
      variant: {
        default:
          '[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const commandInputWrapperVariants = cva('flex items-center border-b', {
  variants: {
    variant: {
      default: 'h-9 gap-2 px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandInputIconVariants = cva('shrink-0', {
  variants: {
    variant: {
      default: 'size-4 opacity-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandInputVariants = cva(
  'flex w-full rounded-md bg-transparent outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'placeholder:text-muted-foreground h-10 py-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const commandListVariants = cva('scroll-py-1 overflow-x-hidden overflow-y-auto', {
  variants: {
    variant: {
      default: 'max-h-[300px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandEmptyVariants = cva('text-center', {
  variants: {
    variant: {
      default: 'py-6 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandGroupVariants = cva(
  'overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
  {
    variants: {
      variant: {
        default: 'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const commandSeparatorVariants = cva('-mx-1 h-px', {
  variants: {
    variant: {
      default: 'bg-border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const commandItemVariants = cva(
  'relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default:
          "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground px-2 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const commandShortcutVariants = cva('ml-auto tracking-widest', {
  variants: {
    variant: {
      default: 'text-muted-foreground text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});