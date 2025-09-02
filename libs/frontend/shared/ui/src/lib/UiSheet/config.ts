import { cva } from "class-variance-authority"

export const sheetVariants = cva(
  "fixed z-100 gap-4 bg-white text-white border-white/10 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      variant: {
        default: "",
        user: "!bg-app-background !text-text-high-contrast shadow-lg",
        landing: "!bg-text-landing !text-white rounded-r-2xl shadow-lg"
      },
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right max-w-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      side: "right"
    }
  }
)
