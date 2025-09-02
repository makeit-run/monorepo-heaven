import { cva } from "class-variance-authority"

export const modalStyles = cva("break-words bg-card-background", {
  variants: {
    variant: {
      plain: "px-0 py-0 md:w-full w-screen md:max-w-[1200px]",
      default:
        "rounded-lg lg:py-6 md:w-full w-screen  md:max-w-[1200px] px-2.5 sm:px-7.5"
    },
    scrollType: {
      behavior: "lg:my-7.5",
      container: "max-h-[90vh]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const modalCloseStyles = cva(
  "transition-opacity hover:brightness-125 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        plain: [
          "ring-offset-white p-2 z-10 max-md:mt-2 md:mr-4 mr-2 justify-end flex items-end bg-app-background !rounded-full",
          "[&>svg]:text-secondary [&>svg]:stroke-2 [&>svg]:size-7.5"
        ],
        default: [
          "ring-offset-white",
          "[&>svg]:text-primary [&>svg]:stroke-2 [&>svg]:size-7.5"
        ]
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
