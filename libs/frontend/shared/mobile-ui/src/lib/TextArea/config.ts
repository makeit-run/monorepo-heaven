import { tv } from "tailwind-variants"

export const textAreaVariants = tv({
  base: "flex rounded-[10px] border shadow placeholder:text-black-300 bg-background",
  variants: {
    variant: {
      default: "border-input native:focus:border-primary",
      error: "border-error native:focus:border-error",
      success: "border-success native:focus:border-success",
      disabled: "border-input opacity-50 native:focus:border-primary"
    },
    size: {
      default: "text-[16px] p-2.5 min-h-[100px] native:min-h-[120px]",
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    multiline: false,
    tv: false
  }
})

export const textAreaLabelVariants = tv({
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
