import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiTooltip, UiTooltipContent, UiTooltipTrigger } from "./UiTooltip"

const meta: Meta<typeof UiTooltip> = {
  title: "Components/Tooltip",
  component: UiTooltip
} satisfies Meta<typeof UiTooltip>

export default meta

type Story = StoryObj<typeof UiTooltip>

export const Default: Story = {
  render: () => {
    return (
      <UiTooltip>
        <UiTooltipTrigger>Hover</UiTooltipTrigger>
        <UiTooltipContent>
          <p>Add to library</p>
        </UiTooltipContent>
      </UiTooltip>
    )
  }
}
