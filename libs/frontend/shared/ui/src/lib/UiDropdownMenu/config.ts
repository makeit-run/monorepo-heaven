import { cva } from "class-variance-authority"

export const dropdownMenuSubTriggerStyles = cva(
  "flex cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-none",
  {
    variants: {
      variant: {
        default: "focus:bg-primary/20 data-[state=open]:bg-primary/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dropdownMenuSubContentStyles = cva(
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white min-w-[8rem] rounded-md border p-1"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dropdownMenuContentStyles = cva(
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden",
  {
    variants: {
      variant: {
        default: "rounded-md border border-secondary/10 bg-white"
      },
      shadow: {
        default: "shadow-lg",
        none: "shadow-none"
      }
    },
    defaultVariants: {
      shadow: "default",
      variant: "default"
    }
  }
)

export const dropdownMenuItemStyles = cva(
  "relative flex disabled:opacity-50 cursor-default hover:cursor-pointer text-secondary hover:bg-secondary focus:bg-secondary focus:!text-white  select-none items-center outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm text-sm px-3 py-1 gap-2"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const itemIndicatorStyles = cva(
  "absolute left-2 flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "size-3.5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dropdownMenuCheckboxItemStyles = cva(
  " relative flex cursor-default select-none items-center outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default:
          "focus:text-primary focus:bg-primary/20 rounded-sm py-1.5 pl-8 pr-2 text-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dropdownMenuRadioItemStyles = cva(
  "relative flex cursor-default select-none items-center outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default:
          " focus:text-primary focus:bg-primary/20 rounded-sm py-1.5 pl-8 pr-2 text-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dropdownMenuLabelStyles = cva("", {
  variants: {
    variant: {
      default: "px-2 py-1.5 text-sm"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const dropdownMenuShortcutStyles = cva("", {
  variants: {
    variant: {
      default: "ml-auto text-xs tracking-widest opacity-60"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
