import { cva } from "class-variance-authority"

export const breadcrumbStyles = cva("inline-flex items-center gap-1.5", {
  variants: {
    variant: {
      default: "bg-none"
    },
    color: {
      default: "text-primary"
    }
  },
  defaultVariants: {
    variant: "default",
    color: "default"
  }
})
