import { cva } from "class-variance-authority"

export const loaderStyles = cva("absolute inset-0 z-10 m-auto animate-spin", {
  variants: {
    variant: {
      default: "text-primary !h-[60px] !w-[60px]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
