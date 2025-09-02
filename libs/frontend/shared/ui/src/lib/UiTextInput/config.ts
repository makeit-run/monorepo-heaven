import { cva } from "class-variance-authority"

export const inputStyles = cva(
  "text-sm flex peer/input rounded-md text-secondary focus-visible:outline-none focus-visible:ring-1 ring-secondary/40 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "px-4 py-4 rounded-2xl",
        small: "px-2.5 py-1.375",
        large: "px-4 py-4 !rounded-2xl !text-sm font-normal",
        huge: "px-5 py-5 !rounded-full !text-lg font-bold",
        mini: "px-1.375 py-1.375 !text-mini"
      },
      color: {
        default: "text-black",
        primary: "text-primary",
        highlight:
          "!border-secondary !border-none !text-secondary !ring-secondary !bg-white"
      },
      variant: {
        default: "bg-white",
        outlined:
          "border-white ring-white !bg-transparent text-white placeholder-current"
      },
      borderSize: {
        default: "border-gray-300 border border-solid",
        small: "border-0.5",
        large: "border-2",
        mini: "border-0.5"
      }
    },
    defaultVariants: {
      color: "default",
      borderSize: "default",
      variant: "default",
      size: "default"
    }
  }
)

export const labelStyles = cva(
  "inline-block pb-2.5 text-xs font-bold text-text-650",
  {
    variants: {},
    defaultVariants: {}
  }
)
