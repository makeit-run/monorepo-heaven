import { tv } from "tailwind-variants"

export const switchVariants = tv({
  slots: {
    wrapper: "rounded-full",
    root: "shrink-0 flex-row items-center rounded-full",
    thumb: "rounded-full ring-0"
  },
  variants: {
    variant: {
      default: {
        wrapper: "",
        root: "border-transparent p-[2px]",
        thumb: ""
      }
    },
    size: {
      default: {
        wrapper: "h-[22px] w-[41px]",
        root: "h-[22px] w-[41px] border-2 ",
        thumb: "size-[16px]"
      }
    },
    active: {
      true: {
        root: "border-primary-500 bg-primary-500",
        thumb: "bg-white"
      },
      false: {
        root: "border-black-300 bg-white",
        thumb: "bg-black-300"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
