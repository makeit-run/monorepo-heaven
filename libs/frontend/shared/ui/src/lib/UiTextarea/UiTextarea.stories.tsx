import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiTextarea } from "./UiTextarea"

const meta: Meta<typeof UiTextarea> = {
  title: "Components/Textarea",
  component: UiTextarea,
  parameters: {
    controls: {
      include: ["variant", "label", "error"]
    }
  }
} satisfies Meta<typeof UiTextarea>

export default meta

type Story = StoryObj<typeof UiTextarea>

export const Default: Story = {}
