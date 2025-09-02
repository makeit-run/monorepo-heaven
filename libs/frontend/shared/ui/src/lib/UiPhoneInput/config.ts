import { cva } from "class-variance-authority"

export const phoneInputStyles = cva(
  "!size-full focus-visible:outline-none focus-visible:ring-2 !rounded-r-xl focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "!py-[16.5px] !px-[16.5px] ring-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const phoneInputWrapperStyles = cva("", {
  variants: {
    variant: {
      default:
        "shadow-input peer-focus/input:text-primary w-full rounded-xl border border-black/30"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const phoneInputCountrySelectorButtonStyles = cva(
  "!size-full disabled:cursor-not-allowed !rounded-l-xl disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "!px-[16.5px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
