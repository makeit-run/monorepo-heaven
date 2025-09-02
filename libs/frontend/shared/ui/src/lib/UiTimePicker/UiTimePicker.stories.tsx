import { Meta, StoryObj } from "@storybook/react"

import { UiTimePicker } from "./UiTimePicker"

import "@internationalized/date"

import { CalendarDateTime, Time } from "@internationalized/date"
import React from "react"

const meta: Meta<typeof UiTimePicker> = {
  title: "Components/TimePicker",
  component: UiTimePicker
} satisfies Meta<typeof UiTimePicker>

export default meta

type Story = StoryObj<typeof UiTimePicker>

export const Default1: Story = {
  render: () => {
    const timeValue = new Time(10, 30) // Hours and minutes

    return <UiTimePicker value={timeValue} />
  }
}

export const Default2: Story = {
  render: () => {
    const calendarDateTimeValue = new CalendarDateTime(2024, 7, 25, 10, 30) // Year, month, day, hours, minutes

    return <UiTimePicker value={calendarDateTimeValue} />
  }
}
