import { cva } from "class-variance-authority"

export const toastViewportStyles = cva(
  "fixed bottom-0 left-[50%] z-[99999] flex max-h-screen w-full translate-x-[-50%] flex-col-reverse p-4 sm:right-0 sm:flex-col md:max-w-105",
  {
    variants: {
      variant: {
        default: "p-4 md:max-w-105"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const toastActionStyles = cva(
  "focus:ring-ring group-[.error]:border-muted/40 group-[.error]:hover:border-error/30 group-[.error]:hover:bg-error group-[.error]:hover:text-error group-[.error]:focus:ring-error inline-flex shrink-0 items-center justify-center bg-transparent text-sm font-medium transition-colors hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-8 rounded-md border px-3"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const toastCloseStyles = cva(
  "absolute right-2 top-2 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
  {
    variants: {
      variant: {
        default: "rounded-md p-1  hover:text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const toastTitleStyles = cva("", {
  variants: {
    variant: {
      default: "text-md font-semibold"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const toastDescriptionStyles = cva("", {
  variants: {
    variant: {
      default: "text-sm opacity-90"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const toastStyles = cva(
  "data-[swipe=move]:transition-none  group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full",
  {
    variants: {
      variant: {
        default: "bg-gray-300 text-black",
        info: "group border-primary-600 text-text-50 bg-primary-400/90",
        success: "group border-success text-text-50 bg-success/90",
        destructive: "group border-error text-text-50 bg-error/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
