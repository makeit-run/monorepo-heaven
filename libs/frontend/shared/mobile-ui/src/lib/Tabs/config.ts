import { tv } from "tailwind-variants"

export const tabsVariants = tv({
  base: "flex flex-row",
  variants: {
    variant: {
      default: "bg-white",
      outline: "bg-transparent",
      pills: "bg-transparent border-none gap-2 mb-2"
    },
    size: {
      sm: "",
      default: "",
      lg: ""
    },
    color: {
      primary: "",
      secondary: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "primary"
  }
})

export const tabsListVariants = tv({
  base: "flex flex-row",
  variants: {
    variant: {
      default: "bg-white",
      outline: "bg-transparent",
      pills: "bg-transparent border-none gap-2 mb-2"
    },
    size: {
      sm: "",
      default: "",
      lg: ""
    },
    color: {
      primary: "",
      secondary: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "primary"
  }
})

export const tabsTriggerVariants = tv({
  base: "flex flex-row bg-green-500",
  variants: {
    variant: {
      default: "text-black-500 border-b-2 border-transparent",
      outline: "",
      pills: ""
    },
    size: {
      sm: "",
      default: "text-[14px] px-4 py-2",
      lg: ""
    },
    color: {
      primary: "",
      secondary: ""
    },
    active: {
      true: "bg-red-500",
    }
  },
  compoundVariants: [
    // Default variant with primary color (active)
    {
      variant: "default",
      color: "primary",
      active: true,
      class: "text-primary-500"
    },
    // Default variant with secondary color (active)
    {
      variant: "default",
      color: "secondary",
      active: true,
      class: "text-tertiary-500"
    },
    // Outline variant with primary color (active)
    {
      variant: "outline",
      color: "primary",
      active: true,
      class: "text-primary-500"
    },
    // Outline variant with secondary color (active)
    {
      variant: "outline",
      color: "secondary",
      active: true,
      class: "text-tertiary-500 border-b-2 border-tertiary-500"
    },
    // Pills variant with primary color (active)
    {
      variant: "pills",
      color: "primary",
      active: true,
      class: "bg-primary-500 text-white"
    },
    // Pills variant with secondary color (active)
    {
      variant: "pills",
      color: "secondary",
      active: true,
      class: "bg-tertiary-500 text-white"
    }
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "primary",
    active: false
  }
})

export const tabsContentVariants = tv({
  base: "p-4",
  variants: {
    variant: {
      default: "bg-white",
      outline: "bg-transparent border border-black-200 rounded-b-lg",
      pills: "bg-white rounded-lg"
    },
    size: {
      sm: "p-3",
      default: "",
      lg: "p-5"
    },
    color: {
      primary: "",
      secondary: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "primary"
  }
})
