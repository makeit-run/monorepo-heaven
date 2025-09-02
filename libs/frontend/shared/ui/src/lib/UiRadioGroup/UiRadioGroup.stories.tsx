import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiRadioGroup, UiRadioGroupItem } from "./UiRadioGroup"

const meta: Meta<typeof UiRadioGroup> = {
  title: "components/RadioGroup",
  component: UiRadioGroup
} satisfies Meta<typeof UiRadioGroup>

export default meta

type Story = StoryObj<typeof UiRadioGroup>

export const Default: Story = {
  render: (args) => {
    return (
      <UiRadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <UiRadioGroupItem value="option-one" id="option-one" />
          <label htmlFor="option-one">Option One</label>
        </div>
        <div className="flex items-center space-x-2">
          <UiRadioGroupItem value="option-two" id="option-two" />
          <label htmlFor="option-two">Option Two</label>
        </div>
      </UiRadioGroup>
    )
  }
}
