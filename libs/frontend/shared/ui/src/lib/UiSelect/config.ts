import { cva } from "class-variance-authority"

export const selectTriggerStyles = cva(
  "focus:ring-none border-1 py-1 px-2 !mt-0 group flex items-center justify-between focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "gap-2 rounded-md text-primary font-medium"
      },
      border: {
        default: "border border-black/30",
        none: "border border-primary"
      }
    },
    defaultVariants: {
      border: "none",
      variant: "default"
    }
  }
)

export const selectTriggerIconStyles = cva(
  "transition duration-500 text-accent group-data-[state=open]:!rotate-180",
  {
    variants: {
      variants: {
        variant: {
          default: "text-primary size-5"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
  }
)

export const selectContentStyles = cva(
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "min-w-[3rem] border border-black/20 overflow-hidden rounded-md bg-white rounded-md"
      },
      position: {
        popper:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        "item-aligned": ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const selectViewportStyles = cva("", {
  variants: {
    variant: {
      default: "p-1"
    },
    position: {
      popper:
        "h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)]",
      "item-aligned": ""
    }
  },
  defaultVariants: { variant: "default" }
})

export const selectLabelStyles = cva("", {
  variants: {
    variant: {
      default: "py-1.5 pl-8 pr-2 text-sm font-semibold"
    }
  },
  defaultVariants: { variant: "default" }
})

export const selectItemStyles = cva(
  "hover:cursor-pointer relative flex w-full cursor-default select-none text-secondary items-center outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm px-3 py-4 text-md"
      },
      color: {
        primary:
          "hover:bg-primary/20 focus:bg-primary/20 data-[state=checked]:bg-primary/40",

        secondary:
          "hover:bg-secondary/20 focus:bg-secondary/10 data-[state=checked]:bg-secondary/5"
      }
    },
    defaultVariants: { variant: "default", color: "secondary" }
  }
)

export const selectSeparatorStyles = cva("", {
  variants: {
    variant: {
      default: "-mx-1 my-1 h-px"
    }
  },
  defaultVariants: { variant: "default" }
})
