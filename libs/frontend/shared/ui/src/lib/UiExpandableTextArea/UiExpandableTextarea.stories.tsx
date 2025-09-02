import { Meta, StoryObj } from "@storybook/react"

import { UiExpandableTextArea } from "./UiExpandableTextArea"

const meta: Meta<typeof UiExpandableTextArea> = {
  title: "Components/ExpandableTextarea",
  component: UiExpandableTextArea,
  parameters: {
    controls: {
      include: ["variant", "label", "error"]
    }
  }
} satisfies Meta<typeof UiExpandableTextArea>

export default meta

type Story = StoryObj<typeof UiExpandableTextArea>

export const Default: Story = {}
