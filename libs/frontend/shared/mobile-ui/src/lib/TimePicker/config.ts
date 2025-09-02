import { tv } from "tailwind-variants"

export const TimePickerVariants = tv({
  base: "flex-1 rounded-[10px] border placeholder:text-black-300 shadow bg-background",
  variants: {
    variant: {
      default: "border-black-300 focus:border-primary text-black-900",
      error: "border-error native:focus:border-error",
      disabled: "border-gray-300 opacity-50 native:focus:border-primary"
    },
    size: {
      default: "text-[16px] px-[10px] py-[21.5px]",
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3"
    },
    tv: {
      true: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    multiline: false,
    tv: false
  }
})
