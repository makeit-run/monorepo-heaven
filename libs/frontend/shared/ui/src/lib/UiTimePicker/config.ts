import { cva } from "class-variance-authority"

export const timePickerStyles = cva("", {
  variants: {},
  defaultVariants: {}
})

export const dateSegmentStyles = cva(
  "focus:text-accent-foreground focus:rounded-[2px] focus:bg-black/30 focus:outline-none",
  {
    variants: {
      type: {
        literal: "px-[1px]",
        era: "",
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: "",
        dayPeriod: "",
        timeZoneName: ""
      }
    },
    defaultVariants: {}
  }
)

export const timeFieldStyles = cva(
  "border-input ring-offset-background focus-within:ring-ring focus-visible:ring-ring inline-flex h-10 w-full flex-1 rounded-md border bg-transparent px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
)
