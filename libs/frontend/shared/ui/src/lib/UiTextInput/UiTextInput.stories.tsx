import { Meta, StoryObj } from "@storybook/react"
import { Mail } from "lucide-react"
import React from "react"

import { UiTextInput } from "./UiTextInput"

type Story = StoryObj<typeof UiTextInput>

const meta: Meta<typeof UiTextInput> = {
  title: "Components/Input",
  component: UiTextInput,
  parameters: {
    controls: {
      include: ["placeholder", "error", "label", "fullWidth"]
    }
  },
  args: { fullWidth: false }
}

export default meta

export const Default: Story = {
  args: {
    placeholder: "Some text"
  }
}

export const WithIcon: Story = {
  args: {
    placeholder: "Some text",
    icon: <Mail />
  }
}
