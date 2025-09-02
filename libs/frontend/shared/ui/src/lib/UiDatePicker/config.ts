import { cva } from "class-variance-authority"

export const datePickerTriggerStyles = cva(
  "flex w-full gap-2 items-center justify-start text-left disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-base text-black border border-black/30 rounded-md"
      },
      size: {
        default: "py-5 px-4"
      }
    },

    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
