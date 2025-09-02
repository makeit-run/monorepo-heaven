import { tv } from "tailwind-variants"

export const stepperVariants = tv({
  slots: {
    container: "flex items-center self-start rounded-lg",
    buttonWrapper: "flex items-center justify-center",
    button: "rounded-[6px] flex items-center justify-center transition-all duration-150 hover:scale-95 active:scale-90",
    valueWrapper: "flex items-center justify-center",
    valueText: "text-center font-semibold select-none"
  },
  variants: {
    style: {
      default: {
        container: "",
        buttonWrapper: "",
        button: "bg-tertiary-300 hover:bg-tertiary-400",
        valueWrapper: "bg-transparent",
        valueText: "text-black-900"
      }
    },
    size: {
      default: {
        container: "",
        buttonWrapper: "p-1",
        button: "w-8 h-8",
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
        button: "cursor-not-allowed hover:scale-100 active:scale-100",
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