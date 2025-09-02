import { cva } from "class-variance-authority"

export const badgeStyles = cva(
  "inline-flex items-center transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "rounded-full !text-white border-transparent border text-xs",
        outline: "!bg-transparent text-foreground rounded-full border text-xs"
      },
      color: {
        default: "bg-primary text-primary hover:bg-primary/80 border-primary",
        gray: "bg-gray-300 !text-gray-800 hover:bg-gray-300/80 !border-gray-3=400"
      },
      size: {
        default: "px-2.5 py-0.5",
        small: "px-2 !text-xs"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default",
      color: "default"
    }
  }
)
