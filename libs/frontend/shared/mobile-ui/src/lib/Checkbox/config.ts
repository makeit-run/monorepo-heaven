import { tv } from "tailwind-variants"

export const checkboxVariants = tv({
  base: "flex self-center aria-[disabled=true]:opacity-50 items-center justify-center rounded-sm border-2 overflow-hidden",
  variants: {
    variant: {
      default: "border-primary bg-white",
      secondary: "border-gray-300 bg-white"
    },
    size: {
      xs: "size-[18px]",
      sm: "h-[25px] w-[25px]",
      md: "h-[27px] w-[27px]",
      lg: "h-[29px] w-[29px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
})

export const checkboxIndicatorVariants = tv({
  base: "flex items-center justify-center h-full w-full",
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-gray-300"
    },
    size: {
      xs: "size-full",
      sm: "size-full",
      md: "size-full",
      lg: "size-full"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
})

export const iconVariants = tv({
  base: "flex items-center justify-center",
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-white"
    },
    size: {
      sm: "h-[23px] w-[23px]",
      md: "h-[25px] w-[25px]",
      lg: "h-[27px] w-[27px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
})
