import { cva } from "class-variance-authority"

export const toggleVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-md text-sm font-medium shadow-sm",
        ghost: "!bg-transparent border-none",
        outline:
          "border !bg-transparent !text-primary shadow-sm rounded-md text-sm font-medium hover:!bg-primary/10 data-[state=on]:!bg-primary/20"
      },
      color: {
        primary:
          "bg-primary border border-primary hover:bg-primary/80 text-white data-[state=on]:bg-primary/60"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-12 px-4"
      }
    },
    defaultVariants: {
      color: "primary",
      variant: "default",
      size: "default"
    }
  }
)
