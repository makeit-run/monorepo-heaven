import { cva } from "class-variance-authority"

export const tableStyles = cva(
  "w-full table-auto caption-bottom border-separate border-spacing-y-2.5",
  {
    variants: {
      variant: {
        default: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const tableHeaderStyles = cva("", {
  variants: {
    variant: {
      default: "[&_tr]:border-none"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableBodyStyles = cva("", {
  variants: {
    variant: {
      default: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableFooterStyles = cva("", {
  variants: {
    variant: {
      default: "font-mediums border-t"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableRowStyles = cva("", {
  variants: {
    variant: {
      default: "px-[13px] py-[17px]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableHeadStyles = cva("align-middle  font-roboto", {
  variants: {
    variant: {
      default: "text-[12px] text-left font-medium px-[13px] text-text-400"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableCellStyles = cva("align-middle", {
  variants: {
    variant: {
      default:
        "border-y border-black/50 px-[13px] py-[17px] first:rounded-l-md first:border-l last:rounded-r-md last:border-r"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export const tableCaptionStyles = cva("", {
  variants: {
    variant: {
      default: "mt-4 text-sm"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
