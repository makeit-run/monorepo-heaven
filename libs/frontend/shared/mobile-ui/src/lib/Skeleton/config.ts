import { tv } from "tailwind-variants"

export const skeletonStyles = tv({
  base: "w-fit animate-pulse rounded-md",
  variants: {
    variant: {
      default: "min-h-4 bg-black/50 text-gray-400"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
