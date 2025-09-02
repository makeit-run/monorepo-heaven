import { tv } from "tailwind-variants"

export const textInputVariants = tv({
  base: "flex rounded-[10px] border placeholder:text-black-300 shadow bg-background",
  variants: {
    variant: {
      default: "border-input native:focus:border-primary text-black-900",
      error: "border-error native:focus:border-error",
      disabled: "border-input opacity-50 native:focus:border-primary"
    },
    size: {
      default: "text-[16px] px-[10px] py-[21.5px]",
      sm: "text-sm px-3 py-2",
      md: "text-[16px] px-4 py-3"
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

export const textInputLabelVariants = tv({
  base: "font-medium text-foreground mb-2",
  variants: {
    variant: {
      default: "text-gray-700",
      error: "text-error",
      success: "text-success",
      disabled: "text-gray-500"
    },
    size: {
      default: "text-sm",
      sm: "text-sm",
      md: "text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
