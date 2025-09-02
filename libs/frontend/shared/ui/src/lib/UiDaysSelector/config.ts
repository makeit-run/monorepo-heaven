import { cva } from "class-variance-authority"

export const daysSelectorStyles = cva("flex items-center w-min", {
  variants: {
    variant: {
      default: "",
      compact: "",
      centered: ""
    },
    size: {
      small: "gap-1",
      default: "gap-2",
      large: "gap-3"
    },
    layout: {
      horizontal: "flex-row",
      vertical: "flex-col"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    layout: "horizontal"
  }
})

export const daysSelectorItemStyles = cva(
  "flex items-center justify-center font-medium transition-colors rounded-md cursor-pointer",
  {
    variants: {
      size: {
        small: "h-8 w-8 text-xs",
        default: "h-10 w-10 text-sm",
        large: "h-12 w-12 text-base"
      },
      variant: {
        default:
          "text-white data-[state=on]:bg-gray-400 data-[state=on]:text-white",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary/10 data-[state=on]:bg-primary data-[state=on]:text-white",
        solid:
          "border-transparent bg-gray-100 text-gray-700 hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
)
