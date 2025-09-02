import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiProgress } from "./UiProgress"

const meta: Meta<typeof UiProgress> = {
  title: "components/Progress",
  component: UiProgress
} satisfies Meta<typeof UiProgress>

export default meta

type Story = StoryObj<typeof UiProgress>

export const Default: Story = {
  render: () => {
    return <UiProgress value={80} className={"h-4"} />
  }
}
