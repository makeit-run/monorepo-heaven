import { cva } from "class-variance-authority"

export const scrollBarStyles = cva(
  "flex touch-none select-none transition-colors",
  {
    variants: {
      orientation: {
        vertical: "h-full w-2.5 border-l border-l-transparent p-px",
        horizontal: "h-2.5 flex-col border-t border-t-transparent p-px"
      }
    },
    defaultVariants: {}
  }
)

export const ScrollAreaThumbStyles = cva("relative rounded-full bg-black/50", {
  variants: {},
  defaultVariants: {}
})
