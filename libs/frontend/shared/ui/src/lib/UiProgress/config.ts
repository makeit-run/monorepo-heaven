import { cva } from "class-variance-authority"

export const progressStyles = cva("relative overflow-hidden", {
  variants: {
    variant: {
      default: "h-0.5 w-full rounded-full bg-black/30"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const progressIndicatorStyles = cva("flex-1 transition-all", {
  variants: {
    variant: {
      default: "bg-secondary size-full"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
