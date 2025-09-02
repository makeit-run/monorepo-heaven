import { tv } from "tailwind-variants"

export const numericStepperVariants = tv({
  slots: {
    container: "flex-row items-center self-start rounded-lg",
    buttonWrapper: "items-center justify-center",
    button: "rounded-[6px] items-center justify-center",
    valueWrapper: "items-center justify-center",
    valueText: "text-center font-semibold"
  },
  variants: {
    style: {
      default: {
        container: "",
        buttonWrapper: "",
        button: "bg-tertiary-300",
        valueWrapper: "bg-transparent",
        valueText: "text-black-900"
      }
    },
    size: {
      default: {
        container: "",
        buttonWrapper: "p-1",
        button: "size-8",
        valueWrapper: "mx-1 min-w-7",
        valueText: "text-base"
      }
    },
    state: {
      enabled: {
        container: "",
        buttonWrapper: "",
        button: "",
        valueWrapper: "",
        valueText: ""
      },
      disabled: {
        container: "opacity-50",
        buttonWrapper: "",
        button: "",
        valueWrapper: "",
        valueText: ""
      }
    }
  },
  defaultVariants: {
    style: "default",
    size: "default",
    state: "enabled"
  }
})
