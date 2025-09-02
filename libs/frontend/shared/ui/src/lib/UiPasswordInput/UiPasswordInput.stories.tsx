import { Meta, StoryObj } from "@storybook/react"

import { UiButton } from "../UiButton"
import { UiPasswordInput } from "./UiPasswordInput"

type Story = StoryObj<typeof UiButton>

const meta: Meta<typeof UiPasswordInput> = {
  title: "Components/Password Input",
  component: UiPasswordInput,
  parameters: {
    controls: {
      include: ["placeholder", "error", "label", "fullWidth"]
    }
  },
  args: { placeholder: "Test" }
}

export default meta

export const Default: Story = {}
