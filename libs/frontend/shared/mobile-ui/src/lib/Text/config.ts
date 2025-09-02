import { tv } from "tailwind-variants"

export const textVariants = tv({
  base: "font-gotham",
  variants: {
    variant: {
      // Headings
      h1: "text-[24px]",
      h2: "text-[20px]",
      h3: "text-[18px]",
      h4: "text-[16px]",

      // Body text
      body1: "text-[16px]",
      body2: "text-[14px]",
      body3: "text-[14px]",
      body4: "text-[12px]",
      body5: "text-[12px]"
    },
    color: {
      primary: "text-primary",
      error: "text-error",
      white: "text-white",
      tertiary: "text-tertiary-500",
      "tertiary-700": "text-tertiary-700",
      //
      black: "text-black-900",
      "black-300": "text-black-300",
      "black-500": "text-black-500",
      "black-700": "text-black-700"
    },
    weight: {
      thin: "!font-thin", // font-weight: 100
      extralight: "!font-extralight", // font-weight: 200
      light: "!font-light", // font-weight: 300
      normal: "!font-normal", // font-weight: 400
      medium: "!font-medium", // font-weight: 500
      semibold: "!font-semibold", // font-weight: 600
      bold: "!font-bold", // font-weight: 700
      extrabold: "!font-extrabold", // font-weight: 800
      black: "!font-black" // font-weight: 900
    },
    balance: {
      wrap: "text-wrap",
      nowrap: "text-nowrap",
      pretty: "text-pretty",
      balance: "text-balance"
    }
  },
  compoundVariants: [
    {
      variant: ["h1", "h2", "h3", "h4", "body2", "body4"],
      className: "font-medium"
    },
    {
      variant: ["body3"],
      className: "font-normal"
    }
  ],

  defaultVariants: {
    variant: "body1",
    color: "black"
  }
})
