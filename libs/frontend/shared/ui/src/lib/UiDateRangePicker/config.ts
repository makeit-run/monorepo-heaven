import { cva } from "class-variance-authority"

export const datePickerRangeTriggerStyles = cva(
  "flex items-center justify-start text-left",
  {
    variants: {
      variant: {
        default: "text-base text-black border rounded-lg shadow-card-b"
      },
      size: {
        default: "py-2 px-4 min-w-52"
      }
    },

    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
