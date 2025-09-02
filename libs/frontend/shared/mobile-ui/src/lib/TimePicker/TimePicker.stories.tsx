import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { TimePicker } from "./TimePicker"

export const Example = () => {
  const [timeFrom, setTimeFrom] = useState("03:30")
  const [fromPeriod, setFromPeriod] = useState("PM")

  const formatTime = (date: Date): { timeStr: string; period: string } => {
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const period = date.getHours() >= 12 ? "PM" : "AM"
    return { timeStr: `${hours}:${minutes}`, period }
  }

  const handleConfirmFromTime = (date: Date) => {
    const { timeStr, period } = formatTime(date)
    setTimeFrom(timeStr)
    setFromPeriod(period)
  }

  return (
    <TimePicker
      title={"Time from"}
      time={timeFrom}
      period={fromPeriod}
      onTimeChange={handleConfirmFromTime}
    />
  )
}
const meta: Meta = {
  component: TimePicker,
  title: "Components/TimePIcker",
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
        <PortalHost />
      </PaperProvider>
    )
  ]
}
export default meta

type Story = StoryObj
