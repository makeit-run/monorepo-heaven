import { cva } from "class-variance-authority"

export const imageStyles = cva("blur-0 duration-200 ease-in-out", {
  variants: {
    variant: {
      default: "object-cover"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
