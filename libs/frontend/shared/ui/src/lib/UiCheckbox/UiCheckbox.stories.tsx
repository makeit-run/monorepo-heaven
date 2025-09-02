import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiCheckbox } from "./UiCheckbox"

const meta: Meta<typeof UiCheckbox> = {
  title: "Components/Checkbox",
  args: {
    label: "Test"
  },
  parameters: {
    controls: {
      include: ["variant", "size", "label", "labelPosition"]
    }
  },
  component: UiCheckbox
} satisfies Meta<typeof UiCheckbox>

export default meta

type Story = StoryObj<typeof UiCheckbox>

export const Default: Story = {
  render: () => {
    const sizes = ["small", "medium", "large", "extraLarge", "huge"] as const
    return (
      <div className={"flex flex-col gap-2"}>
        {sizes?.map((size) => (
          <UiCheckbox label={"Lorem ipsum dolor sit amet."} size={size} />
        ))}
      </div>
    )
  }
}
