import { cva } from "class-variance-authority"

export const checkboxStyles = cva(
  "peer cursor-pointer disabled:cursor-not-allowed shrink-0 disabled:opacity-50 appearance-none bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100",
  {
    variants: {
      variant: {
        default:
          "rounded-sm border-2 checked:bg-primary checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
      },
      color: {
        primary: "border-primary hover:opacity-80",
        secondary: "border-secondary hover:opacity-80"
      },
      size: {
        small: "size-3",
        medium: "size-4",
        large: "size-5",
        extraLarge: "size-6",
        huge: "size-7"
      }
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "medium"
    }
  }
)

export const checkboxLabelStyles = cva(
  "antialiased tracking-normal content-center font-geographeditweb",
  {
    variants: {
      size: {
        huge: "flexible-text-[21px]",
        extraLarge: "flexible-text-[18px]",
        large: "flexible-text-[16px]",
        medium: "flexible-text-[14px]",
        small: "flexible-text-[12px]"
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary"
      }
    }
  }
)
