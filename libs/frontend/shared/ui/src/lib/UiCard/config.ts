import { cva } from "class-variance-authority"

export const cardStyles = cva("rounded-card p-3", {
  variants: {
    border: {
      default: "border border-card-border shadow-sm",
      transparent: "border-transparent"
    },
    variant: {
      background: "bg-card-background",
      default: ""
    }
  },
  defaultVariants: {
    border: "default",
    variant: "default"
  }
})

export const cardContentStyles = cva("pt-0", {
  variants: {
    padding: {
      none: "",
      small: "p-2",
      default: "p-4"
    }
  },
  defaultVariants: {
    padding: "default"
  }
})

export const cardHeaderStyles = cva("flex items-center", {
  variants: {
    variant: {
      primary: "!bg-primary text-ui-foreground",
      default: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const cardTitleStyles = cva(
  "text-2xl font-semibold leading-none tracking-tight",
  {
    variants: {
      variant: {
        default: "text-text-850"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const cardDescriptionStyles = cva("text-sm text-gray-500", {
  variants: {
    variant: {
      primary: "!bg-primary text-ui-foreground",
      default: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
