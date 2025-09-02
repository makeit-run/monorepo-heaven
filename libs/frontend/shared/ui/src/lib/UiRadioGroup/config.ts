import { cva } from "class-variance-authority"

export const radioGroupStyles = cva("grid", {
  variants: {
    variant: {
      default: "gap-2.5"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const radioGroupItemStyles = cva(
  "aspect-square border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-primary/50 size-[25px] rounded-full  rounded-full"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const radioGroupIndicatorStyles = cva(
  "relative flex size-full items-center justify-center after:block after:content-['']",
  {
    variants: {
      variant: {
        default: "after:bg-primary after:size-[11px] after:rounded-[50%]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
