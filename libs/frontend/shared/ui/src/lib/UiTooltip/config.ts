import { cva } from "class-variance-authority"

export const tooltipContentStyles = cva(
  "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-30 overflow-hidden",
  {
    variants: {
      variant: {
        default: "rounded-md border px-3 py-1.5 text-sm"
      },
      background: {
        default: "bg-primary/90",
        inverted: "bg-white"
      },
      color: {
        default: "text-ui-foreground",
        inverted: "text-ui-background"
      }
    },
    defaultVariants: {
      variant: "default",
      background: "default",
      color: "default"
    }
  }
)
