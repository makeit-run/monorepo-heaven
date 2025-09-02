import { cva } from "class-variance-authority"

export const labelStyles = cva(
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-xs inline-block pb-0.5 font-medium text-text-650"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
