import { tv } from "tailwind-variants"

export const formItemVariants = tv({
  base: "mb-4",

  variants: {
    space: {
      default: "space-y-2",
      none: ""
    }
  },
  defaultVariants: {
    space: "default"
  }
})
