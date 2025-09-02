import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiDateTimePicker } from "./UiDateTimePicker"

const meta: Meta<typeof UiDateTimePicker> = {
  title: "Components/DateTimePicker",
  component: UiDateTimePicker
} satisfies Meta<typeof UiDateTimePicker>

export default meta

type Story = StoryObj<typeof UiDateTimePicker>

export const Default: Story = {
  render: () => {
    return (
      <UiDateTimePicker
        jsDate={new Date()}
        onJsDateChange={(e) => console.log(e)}
        granularity={"minute"}
      />
    )
  }
}
