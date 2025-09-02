import { cva } from "class-variance-authority"

export const tabsListStyles = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "gap-1 rounded-md border p-1"
    },
    color: {
      primary: "border-primary"
    }
  },
  defaultVariants: {
    variant: "default",
    color: "primary"
  }
})

export const tabsTriggerStyles = cva(
  "focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded px-2.5 py-1.5 text-[16px] data-[state=active]:text-white data-[state=active]:shadow-sm"
      },
      color: {
        primary:
          "ring-offset-primary hover:bg-primary/20 data-[state=active]:bg-primary text-primary"
      }
    },
    defaultVariants: {
      variant: "default",
      color: "primary"
    }
  }
)

export const tabsContentStyles = cva(
  "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "mt-2"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
