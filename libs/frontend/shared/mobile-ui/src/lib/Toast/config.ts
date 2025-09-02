import { tv } from "tailwind-variants"

export const toastVariants = tv({
  base: "opacity-95 border flex-row justify-between items-center p-4 rounded-xl w-full",
  variants: {
    variant: {
      success: "bg-green-500 border-green-700",
      error: "bg-error border-error",
      info: "bg-blue-500 border-blue-700",
      warning: "bg-yellow-500 border-yellow-700",
      gray: "bg-gray-400 border-gray-500"
    }
  },
  defaultVariants: {
    variant: "info"
  }
})

export const toastTitleVariants = tv({
  base: "text-xl font-medium",
  variants: {
    variant: {
      success: "text-white",
      error: "text-white",
      info: "text-white",
      warning: "text-black",
      gray: "text-white"
    }
  },
  defaultVariants: {
    variant: "info"
  }
})

export const toastDescriptionVariants = tv({
  base: "text-base",
  variants: {
    variant: {
      success: "text-white",
      error: "text-white",
      info: "text-white",
      warning: "text-black",
      gray: "text-white"
    }
  },
  defaultVariants: {
    variant: "info"
  }
})

export const toastActionVariants = tv({
  base: "border px-4 py-2",
  variants: {
    variant: {
      success: "border-white text-white",
      error: "border-white text-white",
      info: "border-white text-white",
      warning: "border-black text-black",
      gray: "border-white text-white"
    }
  },
  defaultVariants: {
    variant: "info"
  }
})
