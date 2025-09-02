import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { UiDatePicker } from "./UiDatePicker"

const meta: Meta<typeof UiDatePicker> = {
  title: "Components/DatePicker",
  component: UiDatePicker
} satisfies Meta<typeof UiDatePicker>

export default meta

type Story = StoryObj<typeof UiDatePicker>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>()

    return <UiDatePicker selected={date} onSelect={setDate} />
  }
}
