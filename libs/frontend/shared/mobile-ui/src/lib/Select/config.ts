import { tv } from "tailwind-variants"

export const selectVariants = tv({
  base: "rounded-[10px] border placeholder:text-black-300  shadow bg-background flex flex-row items-center justify-between [&>span]:line-clamp-1",
  variants: {
    variant: {
      default: "border-input native:focus:border-primary text-black-900",
      error: "border-error native:focus:border-error",
      success: "border-success native:focus:border-success",
      disabled: "border-input opacity-50 native:focus:border-primary"
    },
    size: {
      default: "text-[16px] px-[10px] py-[21.5px]",
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
