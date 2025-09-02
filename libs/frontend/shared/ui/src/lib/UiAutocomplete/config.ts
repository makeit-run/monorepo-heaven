import { cva } from "class-variance-authority"

export const autocompleteInputStyles = cva(
  "text-sm text-black flex peer/input rounded-xl border border-black/30 bg-white focus-visible:outline-none focus-visible:ring-2 ring-primary focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "px-[15.5px] py-[17.5px]",
        small: "px-[15.5px] py-[12.5px]"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)
