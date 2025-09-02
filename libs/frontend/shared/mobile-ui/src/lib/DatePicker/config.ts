import { tv } from "tailwind-variants"

export const datePickerVariants = tv({
  base: "size-full bg-background shadow border flex-row items-center",
  variants: {
    variant: {
      default: "border-black-200"
    },
    size: {
      default: "px-[10px] py-[21.5px] text-[16px] rounded-[10px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
