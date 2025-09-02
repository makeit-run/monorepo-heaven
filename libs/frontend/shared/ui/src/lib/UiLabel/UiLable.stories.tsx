import { Meta, StoryObj } from "@storybook/react"

import { UiLabel } from "./UiLabel"

const meta: Meta<typeof UiLabel> = {
  title: "Components/Label",
  component: UiLabel,
  args: { children: "Test" }
}

export default meta

type Story = StoryObj<typeof UiLabel>

export const Default: Story = {
  args: {}
}
