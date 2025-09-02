import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { UiRange } from "./UiRange"

const meta: Meta<typeof UiRange> = {
  title: "Components/Range",
  component: UiRange
}

export default meta

type Story = StoryObj<typeof UiRange>

export const Default: Story = {
  render: () => {
    return (
      <UiRange defaultValue={[50]} max={100} step={1} className={"w-3/5"} />
    )
  }
}
