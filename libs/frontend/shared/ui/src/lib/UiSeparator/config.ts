import { cva } from "class-variance-authority"

export const separatorStyles = cva("flex w-full items-center ", {
  variants: {
    variant: {
      secondary: "h-px bg-secondary/10",
      primary: "h-px bg-app-background",
      default: "h-px bg-white/10",
      thick: "h-0.5 bg-white/40"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
