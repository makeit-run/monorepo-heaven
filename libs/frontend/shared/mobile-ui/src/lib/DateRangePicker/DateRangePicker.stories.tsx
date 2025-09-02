import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { View } from "react-native"
import { DateType } from "react-native-ui-datepicker/src/types"

import { DateRangePicker } from "./DateRangePicker"

export const Example = () => {
  const [date, setDate] = useState<{
    startDate?: DateType
    endDate?: DateType
  }>({
    startDate: new Date(),
    endDate: undefined
  })

  return (
    <View className={"gap-2"}>
      <DateRangePicker
        startDate={date?.startDate}
        endDate={date?.endDate}
        onChange={setDate}
      />
    </View>
  )
}

const meta: Meta = {
  component: DateRangePicker,
  title: "Components/DateRangePicker"
}
export default meta

type Story = StoryObj
