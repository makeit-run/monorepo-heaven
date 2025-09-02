import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { UiDaysSelector } from "./UiDaysSelector"
import { DayKeys } from "./days"

const meta: Meta<typeof UiDaysSelector> = {
  title: "Components/UiDaysSelector",
  component: UiDaysSelector,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact", "centered"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"]
    },
    layout: {
      control: { type: "select" },
      options: ["horizontal", "vertical"]
    },
    itemVariant: {
      control: { type: "select" },
      options: ["default", "outline", "solid"]
    },
    itemSize: {
      control: { type: "select" },
      options: ["small", "default", "large"]
    }
  }
}

export default meta
type Story = StoryObj<typeof UiDaysSelector>

const DaysSelectorWithState = (args: any) => {
  const [selectedDays, setSelectedDays] = useState<DayKeys[]>([])

  return (
    <UiDaysSelector
      {...args}
      selectedDays={selectedDays}
      onDaysSelected={setSelectedDays}
    />
  )
}

export const Default: Story = {
  render: DaysSelectorWithState,
  args: {}
}

export const WithPreselectedDays: Story = {
  render: (args) => {
    const [selectedDays, setSelectedDays] = useState<DayKeys[]>(["M", "W", "F"])

    return (
      <UiDaysSelector
        {...args}
        selectedDays={selectedDays}
        onDaysSelected={setSelectedDays}
      />
    )
  },
  args: {}
}

export const CompactVariant: Story = {
  render: DaysSelectorWithState,
  args: {
    variant: "compact",
    size: "small"
  }
}

export const OutlineStyle: Story = {
  render: DaysSelectorWithState,
  args: {
    itemVariant: "outline"
  }
}

export const SolidStyle: Story = {
  render: DaysSelectorWithState,
  args: {
    itemVariant: "solid"
  }
}

export const LargeSize: Story = {
  render: DaysSelectorWithState,
  args: {
    itemSize: "large",
    size: "large"
  }
}

export const VerticalLayout: Story = {
  render: DaysSelectorWithState,
  args: {
    layout: "vertical",
    variant: "centered"
  }
}