import { cva } from "class-variance-authority"

export const textStyles = cva("antialiased tracking-normal", {
  variants: {
    variant: {
      super: "text-5xl",
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      body1: "text-lg",
      body2: "text-base",
      body3: "text-sm",
      body4: "text-xs",
      "body1-medium": "text-lg",
      "body2-medium": "text-base",
      "body3-medium": "text-sm",
      "body4-medium": "text-xs"
    },
    weight: {
      light: "!font-light",
      default: "font-inherit",
      medium: "!font-medium",
      bold: "!font-bold",
      black: "!font-black",
      extrabold: "!font-extrabold"
    },
    color: {
      primary: "text-primary",
      danger: "text-red-800",
      secondary: "text-secondary",
      white: "text-white",
      black: "text-black",
      50: "text-text-50",
      100: "text-text-100",
      150: "text-text-150",
      200: "text-text-200",
      250: "text-text-250",
      300: "text-text-300",
      350: "text-text-350",
      400: "text-text-400",
      450: "text-text-450",
      500: "text-text-500",
      550: "text-text-550",
      600: "text-text-600",
      650: "text-text-650",
      700: "text-text-700",
      750: "text-text-750",
      800: "text-text-800",
      850: "text-text-850",
      900: "text-text-900",
      950: "text-text-950"
    }
  },
  defaultVariants: {
    variant: "body1",
    weight: "default",
    color: 850
  }
})
