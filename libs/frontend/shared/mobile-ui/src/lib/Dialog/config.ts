import { tv } from "tailwind-variants"

export const dialogContentVariants = tv({
  slots: {
    content: "border-border duration-200 gap-4 border",
    close: "absolute"
  },
  variants: {
    variant: {
      default: {
        content: "bg-background shadow-lg",
        close: "rounded-sm p-0.5 text-accent"
      }
    },
    size: {
      default: {
        content: "max-w-lg rounded-lg p-6",
        close: "right-4 top-5"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
