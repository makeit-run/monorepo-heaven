import { tv } from "tailwind-variants"

export const toggleVariants = tv({
  slots: {
    toggle: "items-center justify-center group rounded-md",
    text: "font-medium"
  },

  variants: {
    variant: {
      primary: {
        toggle: "border border-primary-500 active:bg-primary-500",
        text: "text-primary-500 group-active:text-white"
      }
    },
    size: {
      default: {
        toggle: "size-10 p-[6px]",
        text: "text-[16px]"
      },
      sm: { toggle: "h-9 p-[4px]", text: "text-[14px]" },
      lg: { toggle: "h-11 p-[8px]", text: "text-[18px]" }
    },
    active: { true: {}, false: {} }
  },
  compoundVariants: [
    {
      variant: "primary",
      active: true,
      className: { toggle: "bg-primary-500", text: "text-white" }
    }
  ],
  defaultVariants: {
    variant: "primary",
    size: "default"
  }
})
