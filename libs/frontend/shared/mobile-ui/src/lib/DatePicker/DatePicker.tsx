import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import localizedFormat from "dayjs/plugin/localizedFormat"
import relativeTime from "dayjs/plugin/relativeTime"
import { X } from "lucide-react-native"
import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import DateTimePickerModal, {
  type DateTimePickerProps
} from "react-native-modal-datetime-picker"
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes"

import { datePickerVariants } from "@frontend/shared/mobile-ui/DatePicker/config"
import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

interface DatePickerProps
  extends Partial<Omit<DateTimePickerProps, "onConfirm">> {
  format?: string
  locale?: string
  className?: string
  placeholder?: string
  showRelativeTime?: boolean
  //
  onConfirm?: (date: Date | null) => void
}

export function DatePicker({
  mode = "date",
  format,
  locale,
  className = "",
  placeholder,
  showRelativeTime = false,
  onCancel,
  onConfirm,
  date,
  ...rest
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  if (locale) {
    try {
      dayjs.locale(locale)
    } catch (e) {
      console.warn(`Locale ${locale} not loaded for dayjs`)
    }
  }

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }

  const onConfirmHandler = (date: Date) => {
    setSelectedDate(date)
    toggleVisible()
    onConfirm?.(date)
  }

  const onCancelHandler = () => {
    toggleVisible()
    onCancel?.()
  }

  const onClickClear = (e: GestureResponderEvent) => {
    setSelectedDate(null)
    onConfirm?.(null)
  }

  const getPlaceholder = () => {
    if (placeholder) return placeholder

    const defaultValue = "Search..."
    if (!mode) return defaultValue

    const variants: {
      [key in NonNullable<DateTimePickerProps["mode"]>]: string
    } = {
      date: "Select date...",
      time: "Select time...",
      datetime: "Select date and time..."
    }

    return variants?.[mode] || defaultValue
  }

  const formatDate = (date: Date | null): string => {
    if (!date) return getPlaceholder()

    const dayjsDate = dayjs(date)

    if (showRelativeTime) {
      return dayjsDate.fromNow()
    }

    if (format) {
      return dayjsDate.format(format)
    }

    switch (mode) {
      case "date":
        return dayjsDate.format("YYYY-MM-DD")
      case "time":
        return dayjsDate.format("HH:mm")
      case "datetime":
      default:
        return dayjsDate.format("YYYY-MM-DD HH:mm")
    }
  }

  return (
    <View className={`relative flex-row ${className}`}>
      <TouchableOpacity
        className={datePickerVariants()}
        onPress={toggleVisible}
        style={{ flex: 1 }}
      >
        {selectedDate ? (
          <Text>{formatDate(selectedDate)}</Text>
        ) : (
          <Text className={"text-black-300"}>{getPlaceholder()}</Text>
        )}
      </TouchableOpacity>
      <View className="text-black-900 absolute inset-y-0 right-4 flex items-center justify-center">
        <TouchableOpacity onPress={onClickClear}>
          <LucideIcon
            size={20}
            icon={X}
            className={"text-black-300 shrink-0"}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        mode={mode}
        date={selectedDate || undefined}
        isVisible={isVisible}
        onConfirm={onConfirmHandler}
        onCancel={onCancelHandler}
        {...rest}
      />
    </View>
  )
}
