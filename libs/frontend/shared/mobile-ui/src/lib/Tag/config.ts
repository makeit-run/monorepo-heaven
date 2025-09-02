import { tv } from "tailwind-variants"

export const tagVariants = tv({
  base: "flex flex-row group items-center flex-shrink flex-grow-0 justify-center  gap-1.5",

  variants: {
    variant: {
      default: "bg-blue-900",
      active: "bg-success text-white",
      accent: "bg-accent-500 text-white",
      draft: "border-transparent bg-slate-400",
      hashtag: "bg-error",
      action: "bg-tertiary-300 active:bg-tertiary-500"
    },
    rounded: {
      small: "rounded-[10px]",
      full: "rounded-full"
    },
    size: {
      small: "px-2 py-0.5 h-[22px]",
      default: "px-3 py-1 h-[28px]",
      large: "px-4 py-1.5 h-[34px]"
    },
    position: {
      start: "self-start",
      end: "self-end",
      center: "self-center"
    }
  },
  defaultVariants: {
    rounded: "full",
    variant: "default",
    size: "default"
  }
})

export const tagTextVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "text-black-50 font-bold",
      active: "text-white font-bold",
      accent: "text-white font-bold",
      draft: "text-white font-bold",
      hashtag: "text-white font-bold",
      action: "text-black-900"
    },
    size: {
      small: "text-[12px]",
      default: "text-[14px]",
      large: "text-[16px]"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
