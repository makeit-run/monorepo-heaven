import { cva } from "class-variance-authority"

export const toastWrapperStyles = cva("", {
  variants: {
    variant: {
      default: "grid gap-1"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
