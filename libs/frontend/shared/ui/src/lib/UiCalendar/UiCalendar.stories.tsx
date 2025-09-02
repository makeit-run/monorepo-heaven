import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { UiCalendar } from "./UiCalendar"

const meta: Meta<typeof UiCalendar> = {
  title: "Components/Calendar",
  component: UiCalendar
} satisfies Meta<typeof UiCalendar>

export default meta

type Story = StoryObj<typeof UiCalendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <UiCalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  }
}
