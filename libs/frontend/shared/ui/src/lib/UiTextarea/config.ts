import { cva } from "class-variance-authority"

export const textareaStyles = cva(
  "flex peer/input focus-visible:outline-none w-full focus-visible:ring ring-secondary-50/20 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost:
          "scrollbar-thumb-rounded-full resize-none overflow-y-auto  scrollbar-track-transparent  border-none text-sm px-1.5 py-0.5 focus-visible:ring-0",
        default: "text-sm rounded-2xl bg-white border-gray-300 border border-solid px-4 py-4"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
