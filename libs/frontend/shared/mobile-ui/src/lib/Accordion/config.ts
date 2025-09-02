import { tv } from "tailwind-variants"

export const accordionTriggerVariants = tv({
  base: " group flex flex-row items-center justify-between",

  variants: {
    size: {
      sm: "py-1",
      md: "py-2",
      lg: "py-3"
    },
    color: {
      primary: "bg-transparent",
      secondary: "bg-primary-50"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

export const accordionTriggerTextVariants = tv({
  base: "",

  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-secondary"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

export const accordionContentVariants = tv({
  base: "overflow-hidden text-sm ",
  variants: {
    size: {
      sm: "py-1",
      md: "py-2",
      lg: "py-3"
    },
    color: {
      primary: "bg-transparent",
      secondary: "bg-secondary-50"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

export const accordionContentTextVariants = tv({
  base: "overflow-hidden text-sm",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-secondary"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

export const accordionItemVariants = tv({
  base: "",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    },
    color: {
      primary: "border-b border-primary",
      secondary: "border-b border-secondary"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

export const accordionVariants = tv({
  base: "",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    },
    color: {
      primary: "",
      secondary: ""
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})
