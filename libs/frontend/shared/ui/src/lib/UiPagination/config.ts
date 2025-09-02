import { cva } from "class-variance-authority"

export const paginationStyles = cva(" flex w-full justify-center", {
  variants: {
    variant: {
      default: "mx-auto"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const paginationContentStyles = cva("flex flex-row items-center", {
  variants: {
    variant: {
      default: "gap-1"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const paginationPreviousStyles = cva("", {
  variants: {
    variant: {
      default: "gap-1 pl-2.5"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const paginationLinkStyles = cva(
  "relative items-center inline-flex justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      color: {
        primary: [
          "bg-primary text-primary border-primary",
          "hover:bg-primary/70 hover:border-primary/70"
        ],
        secondary: [
          "bg-secondary text-secondary border-secondary",
          "hover:bg-secondary/50 hover:border-secondary/50"
        ],
        lightGray: [
          "bg-gray-300 !text-black border-gray-300",
          "hover:bg-gray-200/70 hover:border-gray-100"
        ]
      },
      variant: {
        default: "rounded-sm gap-2 font-roboto font-medium",
        outlined: "bg-transparent border hover:bg-transparent",
        text: "bg-transparent hover:bg-transparent hover:underline !p-0 !ring-0 size-max"
      },
      size: {
        small: "text-[14px] px-2 py-1",
        default: "p-2 sm:px-4 sm:py-2 text-base",
        large: "min-w-[179px] min-h-[44px] px-6 py-3"
      }
    },
    compoundVariants: [
      {
        variant: "default",
        className: "text-white"
      },
      {
        variant: "outlined",
        color: "primary",
        className: "[&.active]:bg-primary [&.active]:text-white"
      }
    ],
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "default"
    }
  }
)

export const paginationNextStyles = cva("", {
  variants: {
    variant: {
      default: "gap-1 pr-2.5"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const paginationEllipsisStyles = cva(
  "flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "size-9"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
