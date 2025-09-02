import DateTimePicker from "react-native-ui-datepicker"
import { DatePickerRangeProps } from "react-native-ui-datepicker/src/datetime-picker"

import { dateRangePickerVariants } from "@frontend/shared/mobile-ui/DateRangePicker/config"

interface DateRangePickerProps extends Omit<DatePickerRangeProps, "mode"> {}

export function DateRangePicker({
  classNames,
  ...props
}: DateRangePickerProps) {
  const slots = dateRangePickerVariants()

  const getSlotsStyles = () => {
    return Object.entries(slots).reduce((acc, [key, styles]) => {
      acc[key] = styles()
      return acc
    }, {})
  }

  return (
    <DateTimePicker
      // if need monday as a start of week
      firstDayOfWeek={1}
      mode="range"
      classNames={{ ...getSlotsStyles(), ...classNames }}
      {...props}
    />
  )
}
