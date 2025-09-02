import { cva } from "class-variance-authority"

export const chipStyles = cva(
  "antialiased w-fit flex items-center justify-center mini:space-x-2 font-medium text-white leading-normal text-center",
  {
    variants: {
      variant: {},
      size: {
        default: "p-1 font-roboto text-base",
        small:
          "py-0.5 px-2 h-6.5 font-roboto font-small !text-smaller leading-tight",
        lg: "py-0.5 px-2.5 font-inter text-xl",
        "2xl": "py-0.5 px-2.5 font-inter text-2xl"
      },
      color: {
        primary: "bg-primary text-white",
        error: "bg-error text-white",
        secondary: "bg-secondary text-white",
        transparent: "bg-transparent text-black border border-gray-300",
        white: "bg-white text-black border border-gray-300",
        "secondary-dark": "bg-secondary-800 text-white",
        "secondary-light": "bg-secondary-300 text-secondary-900",
        "light-green": "bg-green-200 text-green-900 font-bold",
        green: "bg-green-500 text-white",
        "dark-green": "bg-green-600 text-white",
        yellow: "bg-yellow-400 text-black",
        gray: "bg-gray-200 text-black border border-gray-400"
      }
    },
    compoundVariants: [
      {
        size: ["default", "small", "lg", "2xl"],
        className: "rounded-2xl"
      }
    ],
    defaultVariants: {
      size: "default",
      color: "secondary"
    }
  }
)
