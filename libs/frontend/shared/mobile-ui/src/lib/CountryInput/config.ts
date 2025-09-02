import { tv } from "tailwind-variants"

export const countryInputVariants = tv({
  base: "bg-background flex w-full flex-row items-center border shadow",
  variants: {
    variant: {
      default: "border-black-200"
    },
    size: {
      default: "px-2.5 py-3 text-[16px] rounded-[10px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
