import { Meta, StoryObj } from "@storybook/react"

import { UiSwitch } from "./UiSwitch"

const meta: Meta<typeof UiSwitch> = {
  title: "components/Switch",
  component: UiSwitch
} satisfies Meta<typeof UiSwitch>

export default meta

type Story = StoryObj<typeof UiSwitch>

export const Default: Story = {}
