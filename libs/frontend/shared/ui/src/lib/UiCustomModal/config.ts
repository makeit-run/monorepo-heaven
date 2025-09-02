import { cva } from "class-variance-authority"

export const customModalBlurMaskStyles = cva(
  "absolute inset-0 z-40 bg-black/50 backdrop-blur-md",
  { variants: {}, defaultVariants: {} }
)

export const customModalCardStyles = cva(
  "relative z-50 w-full max-w-xl rounded-xl bg-white p-8 shadow-lg",
  { variants: {}, defaultVariants: {} }
)
