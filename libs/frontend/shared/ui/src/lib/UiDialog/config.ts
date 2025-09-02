import { cva } from "class-variance-authority"

export const dialogOverlayStyles = cva(
  "fixed inset-0 z-50 h-full backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "bg-white/80",
        plain: "bg-white/80"
      },
      scrollType: {
        behavior: "grid place-items-center overflow-y-auto",
        container: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dialogContentStyles = cva(
  "data-[state=closed]:zoom-out-95 z-50 data-[state=open]:zoom-in-95",
  {
    variants: {
      variant: {
        default: "grid gap-4 border bg-white shadow-2xl rounded-md",
        plain: "flex gap-4 border bg-white shadow-2xl rounded-md"
      },
      scrollType: {
        behavior: "lg:p-6 lg:my-5 lg:mx-6",
        container:
          "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      }
    },
    defaultVariants: { variant: "default", scrollType: "container" }
  }
)

export const dialogCloseStyles = cva(
  "absolute right-3 top-2 opacity-60 ring-offset-white transition-opacity hover:opacity-100 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "data-[state=open]:bg-secondary data-[state=open]:text-gray-300",
        plain: "data-[state=open]:bg-secondary data-[state=open]:text-gray-300"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dialogHeaderStyles = cva(
  "flex items-center text-center sm:text-left",
  {
    variants: {},
    defaultVariants: {}
  }
)

export const dialogFooterStyles = cva(
  "flex flex-col-reverse sm:flex-row sm:justify-end",
  {
    variants: {
      variant: {
        default: "sm:space-x-2",
        plain: "sm:space-x-2"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const dialogTitleStyles = cva("leading-none tracking-tight", {
  variants: {
    variant: {
      default: "text-lg font-semibold",
      plain: "text-lg font-semibold"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const dialogDescriptionStyles = cva("", {
  variants: {
    variant: {
      default: "text-sm text-gray-500",
      plain: "text-sm text-gray-500"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
