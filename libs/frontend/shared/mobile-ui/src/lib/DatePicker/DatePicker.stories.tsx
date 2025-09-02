import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"

import { DatePicker } from "@frontend/shared/mobile-ui/DatePicker/DatePicker"

export const Example = () => {
  return (
    <View className={"gap-2"}>
      <DatePicker onConfirm={(date) => alert(date)} mode={"date"} />
      <DatePicker onConfirm={(date) => alert(date)} mode={"time"} />
      <DatePicker onConfirm={(date) => alert(date)} mode={"datetime"} />
    </View>
  )
}

const meta: Meta = {
  component: DatePicker,
  title: "Components/DayPicker"
}
export default meta

type Story = StoryObj
