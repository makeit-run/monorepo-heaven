import { Meta, StoryObj } from "@storybook/react"

import { UiChip } from "./UiChip"

const meta: Meta<typeof UiChip> = {
  title: "Components/Chip",
  component: UiChip,
  args: { children: "Text" }
} satisfies Meta<typeof UiChip>

export default meta

type Story = StoryObj<typeof UiChip>

export const Default: Story = {}
