import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps, useState } from "react"

import { DaysSelector } from "./DaysSelector"

export function Example() {
  const [selectedDays, setSelectedDays] = useState<any[]>([])

  return (
    <DaysSelector
      onDaysSelected={setSelectedDays}
      selectedDays={selectedDays}
    />
  )
}

const meta: Meta<ComponentProps<typeof DaysSelector>> = {
  title: "Components/DaysSelector",
  component: DaysSelector
}

export default meta
type Story = StoryObj
