import { tv } from "tailwind-variants"

export const otpInputVariants = tv({
  slots: {
    container: "w-full flex-row justify-between gap-1",
    input:
      "bg-background items-center justify-center rounded-[10px] border shadow",
    number: "",
    stick: ""
  },
  variants: {
    variant: {
      default: {
        container: "",
        input: "border-input",
        number: "text-black-900",
        stick: "bg-primary"
      }
    },
    size: {
      default: {
        container: "",
        input: "h-16 w-14",
        number: "text-[20px] leading-none",
        stick: "h-[30px] w-[2px]"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
