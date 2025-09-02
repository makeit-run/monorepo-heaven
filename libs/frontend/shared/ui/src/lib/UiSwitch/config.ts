import { cva } from "class-variance-authority"

export const switchRootStyles = cva(
  "focus-visible:ring-ring peer inline-flex shrink-0 cursor-pointer items-center border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-red-500 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-3 w-6 rounded-full"
      },
      color: {
        primary:
          "data-[state=checked]:border-accent/50 border-[1px] data-[state=unchecked]:bg-accent/20 data-[state=checked]:bg-accent  data-[state=unchecked]:border-secondary/0"
      },
      size: {
        default: "h-3 w-6",
        medium: "h-[21px] w-10",
        large: "h-6 w-12",
        extraLarge: "h-8 w-16"
      }
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "default"
    }
  }
)

export const switchThumbStyles = cva(
  "pointer-events-none block ring-0 transition-transform",
  {
    variants: {
      variant: {
        default: "rounded-full shadow-lg data-[state=unchecked]:bg-black/30"
      },
      color: {
        primary: "data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
      },
      size: {
        default:
          "size-1.5 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0.5",
        medium:
          "size-[15px] data-[state=checked]:translate-x-[137%] data-[state=unchecked]:translate-x-[10%]",
        large:
          "size-4 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1",
        extraLarge:
          "size-6 data-[state=checked]:translate-x-8.5 data-[state=unchecked]:translate-x-1"
      }
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "default"
    }
  }
)
