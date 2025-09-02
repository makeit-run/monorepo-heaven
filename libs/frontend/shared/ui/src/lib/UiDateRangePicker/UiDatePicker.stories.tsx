import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { DateRange } from "react-day-picker"

import { UiDateRangePicker } from "./UiDateRangePicker"

const meta: Meta<typeof UiDateRangePicker> = {
  title: "Components/DateRangePicker",
  component: UiDateRangePicker
} satisfies Meta<typeof UiDateRangePicker>

export default meta

type Story = StoryObj<typeof UiDateRangePicker>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<DateRange | undefined>()

    return <UiDateRangePicker selected={date} onSelect={setDate} />
  }
}
