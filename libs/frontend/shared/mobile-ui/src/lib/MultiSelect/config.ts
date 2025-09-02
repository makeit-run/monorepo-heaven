import { tv } from "tailwind-variants"

export const multiSelectVariants = tv({
  slots: {
    triggerLabel: "mb-1",
    trigger: "rounded-[10px] bg-background shadow border",
    triggerText: "",
    content:
      "absolute left-0 right-0 top-full mt-1 w-full overflow-hidden rounded-[10px] border shadow",
    contentItem: "border-b mb-1 rounded-[3px]"
  },
  variants: {
    variant: {
      default: {
        triggerLabel: "",
        trigger: "border-black-200",
        triggerText: "",
        content: "border-black-200 bg-background shadow",
        contentItem: "border-gray-100 text-black-900"
      }
    },
    size: {
      default: {
        triggerLabel: "text-base text-gray-800",
        trigger: "px-[10px] py-[21.5px]",
        triggerText: "text-[16px] text-black-900",
        content: "p-[10px]",
        contentItem: "px-4 py-2.5 text-base"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
