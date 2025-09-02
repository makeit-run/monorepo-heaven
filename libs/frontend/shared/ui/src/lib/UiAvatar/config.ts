import { cva } from "class-variance-authority"

export const avatarStyles = cva("relative flex shrink-0 overflow-hidden", {
  variants: {
    variant: {
      default: "size-10 rounded-full",
      small: "size-7 rounded-full text-sm",
      mini: "size-6 rounded-full"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const avatarImageStyles = cva("", {
  variants: {
    variant: {
      default: "aspect-square size-full"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const avatarFallbackStyles = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default: "size-full rounded-full leading-[normal]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
