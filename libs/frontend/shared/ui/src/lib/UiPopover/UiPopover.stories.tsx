import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiButton } from "../UiButton"
import { UiPopover, UiPopoverContent, UiPopoverTrigger } from "./UiPopover"

const meta: Meta<typeof UiPopover> = {
  title: "components/Popover",
  component: UiPopover
} satisfies Meta<typeof UiPopover>

export default meta

type Story = StoryObj<typeof UiPopover>

export const Default: Story = {
  render: () => {
    return (
      <UiPopover>
        <UiPopoverTrigger>
          <UiButton>Open</UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent>Place content for the popover here.</UiPopoverContent>
      </UiPopover>
    )
  }
}
