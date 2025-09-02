import { cva } from "class-variance-authority"

export const commandStyles = cva("flex flex-col overflow-hidden ", {
  variants: {
    variant: {
      default: "rounded-md"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const commandDialogStyles = cva("[&_[cmdk-group-heading]]:font-medium", {
  variants: {
    variant: {
      default:
        "[&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const commandInputStyles = cva(
  "flex w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "min-h-11 rounded-md bg-transparent px-2 py-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const commandListStyles = cva(
  "overflow-y-auto overflow-x-hidden shadow-none",
  {
    variants: {
      variant: {
        default: "max-h-[300px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const commandEmptyStyles = cva("text-center", {
  variants: {
    variant: {
      default: "py-6 text-sm"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const commandGroupStyles = cva("overflow-hidden", {
  variants: {
    variant: {
      default:
        "p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-black [&_[cmdk-group-heading]]:text-md"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const commandSeparatorStyles = cva("", {
  variants: {
    variant: {
      default: "bg-border -mx-1 h-px"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const commandItemStyles = cva(
  "relative flex cursor-default select-none items-center outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm px-3 py-1.5 text-sm aria-selected:bg-black/5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const commandShortcutStyles = cva("tracking-widest", {
  variants: {
    variant: {
      default: "ml-auto text-xs"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
