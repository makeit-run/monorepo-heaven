import { ClassNames } from "react-native-ui-datepicker/src/types"
import { tv } from "tailwind-variants"

export const dateRangePickerVariants = tv({
  slots: {
    day_cell: "",
    day: "",
    range_start: "",
    range_start_label: "",
    range_end: "",
    range_end_label: "",
    range_middle: "",
    range_middle_label: "",
    today: "",
    today_label: "",
    button_next: "",
    button_prev: "",
    button_next_image: "",
    button_prev_image: "",
    selected: ""
  } as ClassNames,
  variants: {
    variant: {
      default: {
        day: "bg-gray-200/50 rounded-md",
        selected: "bg-primary-100/30",
        //
        range_start: "border-primary-100 bg-primary-100",
        range_start_label: "text-white font-semibold",
        //
        range_end: "bg-primary-100",
        range_end_label: "text-white font-semibold",
        //
        range_middle: "bg-primary-100/30",
        range_middle_label: "text-primary-900 font-medium",
        //
        today: "bg-gray-300 text-white",
        today_label: "text-black font-semibold",
        //
        button_next: "bg-primary-100",
        button_prev: "bg-primary-100",
        button_next_image: "",
        button_prev_image: ""
      }
    },
    size: {
      default: {
        day_cell: "rounded-md m-[2px]",
        day: "p-2",
        //
        range_start: "",
        range_start_label: "",
        //
        range_end: "",
        range_end_label: "",
        //
        range_middle: "",
        range_middle_label: "",
        //
        today: "",
        today_label: "text-black font-semibold",
        //
        button_next: "p-2 rounded-md",
        button_prev: "p-2 rounded-md",
        button_next_image: "size-8",
        button_prev_image: "size-8"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
