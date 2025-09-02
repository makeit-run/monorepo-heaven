import { cva } from "class-variance-authority"

export const alertStyles = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-400",
  {
    variants: {
      variant: {
        default: "bg-white",
        destructive: "border-error/50 text-error [&>svg]:text-error"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
