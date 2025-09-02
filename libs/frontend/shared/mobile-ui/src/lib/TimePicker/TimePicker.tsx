import React, { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"

import { Text } from "../Text/Text"
import { TimePickerVariants } from "./config"

interface TimeSelectorProps {
  title: string
  time: string
  period: string
  onTimeChange: (date: Date) => void
}

export const TimePicker = ({
  time,
  onTimeChange,
  period,
  title
}: TimeSelectorProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const onToggleVisible = () => setIsVisible(!isVisible)

  const onTimeChangeHandler = (date: Date) => {
    onTimeChange(date)
    onToggleVisible()
  }

  return (
    <>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={onTimeChangeHandler}
        onCancel={onToggleVisible}
        locale="en_US"
        // android only
        is24Hour={false}
      />
      <View className={"flex-1"}>
        <Text className="mb-2 text-sm text-gray-500">{title}</Text>
        <View className={"flex-row gap-4"}>
          <TouchableOpacity
            className={TimePickerVariants()}
            onPress={onToggleVisible}
          >
            <Text>
              {time} {period}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
