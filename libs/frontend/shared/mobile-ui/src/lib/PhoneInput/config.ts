import { tv } from "tailwind-variants"

export const phoneInputVariants = tv({
  slots: {
    container: "flex flex-row gap-2 items-center",
    phoneContainer: "rounded-[10px] border shadow bg-background",
    countryPicker: "rounded-[10px] border shadow bg-background",
    code: "flex-1",
    phone: ""
  },
  variants: {
    variant: {
      default: {
        container: "",
        phoneContainer: "border-black-200 focus:border-primary text-black-900",
        countryPicker: "border-black-200 focus:border-primary text-black-900",
        code: "placeholder:text-black-300 text-black-900",
        phone: "placeholder:text-black-300"
      },
      error: {
        container: "",
        phoneContainer: "",
        countryPicker: "",
        code: "",
        phone: ""
      }
    },
    size: {
      default: {
        container: "",
        phoneContainer: "px-[10px] py-[21.5px]",
        countryPicker:
          "px-[10px] py-[21.5px]  flex flex-row items-center justify-between",
        code: "text-[16px]",
        phone: "text-[16px]"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
