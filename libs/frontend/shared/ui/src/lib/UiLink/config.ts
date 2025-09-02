import { cva } from "class-variance-authority"

export const linkStyles = cva("", {
  variants: {
    variant: {
      default: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
      ghost: "!p-0 !text-inherit"
    },
    color: {
      default: "text-text-high-contrast",
      black: "text-black",
      inherit: "text-inherit hover:text-inherit/90 visited:text-inherit/80",
      primary: "text-primary hover:text-primary/90 visited:text-primary/80"
    },
    padding: {
      lg: "p-3",
      default: "p-2",
      sm: "p-1",
      none: "p-0"
    }
  },
  defaultVariants: {
    color: "default",
    variant: "default",
    padding: "default"
  }
})
