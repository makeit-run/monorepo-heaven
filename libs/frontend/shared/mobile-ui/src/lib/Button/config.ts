import { tv } from "tailwind-variants"

export const buttonVariants = tv({
  base: "group flex  items-center justify-center",
  variants: {
    rounded: {
      small: "rounded-[10px]",
      full: "rounded-full"
    },
    variant: {
      default:
        "bg-primary active:bg-primary-900 disabled:bg-black-50 border border-primary disabled:border-black-200",
      destructive: "bg-error active:opacity-60",
      outline: "border border-primary bg-transparent active:opacity-80",
      tertiary: "h-min p-0",
      accent: "bg-accent active:bg-accent-500 disabled:bg-black-50"
    },
    paddingX: {
      default: "px-[9px]",
      md: "px-[25px]",
      lg: "px-[40px]"
    },
    paddingY: {
      default: "py-[8px]"
    },
    size: {
      default: "h-[40px]",
      sm: "h-[36px]",
      lg: "h-[50px]",
      icon: "size-[40px]",
      iconSmall: "size-[26px]",
      none: ""
    }
  },
  defaultVariants: {
    paddingX: "default",
    paddingY: "default",
    size: "default",
    rounded: "full",
    variant: "default"
  },
  compoundVariants: [
    {
      variant: "tertiary",
      class: "h-min"
    }
  ]
})

export const buttonTextVariants = tv({
  base: "font-medium",

  variants: {
    variant: {
      default:
        "text-black-50 group-active:text-tertiary-500 group-disabled:text-black-300",
      destructive: "text-text-50",
      outline: "group-active:text-tertiary-500 text-text-primary",
      secondary: "text-primary-500 group-disabled:text-black-300",
      tertiary:
        "text-primary-500 group-active:underline group-disabled:text-black-300",
      accent: "text-text-50"
    },
    size: {
      default: "native:!text-[14px]",
      sm: "native:!text-[12px]",
      lg: "native:!text-[16px]",
      icon: "",
      iconSmall: "",
      none: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
