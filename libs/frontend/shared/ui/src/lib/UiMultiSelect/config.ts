import { cva } from "class-variance-authority"

export const multiSelectInputStyles = cva(
  "focus-within:ring-ring absolute inset-0 outline-none focus-within:ring-2 focus-within:ring-offset-2",
  {
    variants: {
      variant: {
        default: "rounded-md bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
