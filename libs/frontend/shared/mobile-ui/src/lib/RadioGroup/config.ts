import { tv } from "tailwind-variants"

export const radioVariants = tv({
  slots: {
    item: "web:ring-offset-background web:focus:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 aspect-square items-center justify-center rounded-full border",
    indicator: " aspect-square rounded-full"
  },
  variants: {
    variant: {
      default: {
        item: "border-primary text-primary",
        indicator: "bg-primary"
      }
    },
    size: {
      default: {
        item: "size-6",
        indicator: "size-3"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
