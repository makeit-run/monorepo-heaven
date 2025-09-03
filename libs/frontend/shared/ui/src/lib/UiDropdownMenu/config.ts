import { cva } from 'class-variance-authority';

export const dropdownMenuContentVariants = cva(
  'z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md origin-(--radix-dropdown-menu-content-transform-origin) max-h-(--radix-dropdown-menu-content-available-height) data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuItemVariants = cva(
  'relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default:
          "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground px-2 py-1.5 text-sm data-[inset]:pl-8",
        destructive:
          'text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive *:[svg]:!text-destructive px-2 py-1.5 text-sm data-[inset]:pl-8',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuCheckboxItemVariants = cva(
  'relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default: 'focus:bg-accent focus:text-accent-foreground py-1.5 pr-2 pl-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuRadioItemVariants = cva(
  'relative flex cursor-default items-center gap-2 rounded-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default: 'focus:bg-accent focus:text-accent-foreground py-1.5 pr-2 pl-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuItemIndicatorVariants = cva(
  'pointer-events-none absolute left-2 flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'size-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuCheckIconVariants = cva('', {
  variants: {
    variant: {
      default: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuRadioIconVariants = cva('fill-current', {
  variants: {
    variant: {
      default: 'size-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuLabelVariants = cva('', {
  variants: {
    variant: {
      default: 'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuSeparatorVariants = cva('-mx-1 my-1 h-px', {
  variants: {
    variant: {
      default: 'bg-border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuShortcutVariants = cva('ml-auto tracking-widest', {
  variants: {
    variant: {
      default: 'text-muted-foreground text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuSubTriggerVariants = cva(
  'flex cursor-default items-center rounded-sm outline-hidden select-none data-[inset]:pl-8',
  {
    variants: {
      variant: {
        default:
          'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground px-2 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const dropdownMenuSubTriggerChevronVariants = cva('ml-auto', {
  variants: {
    variant: {
      default: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const dropdownMenuSubContentVariants = cva(
  'z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);