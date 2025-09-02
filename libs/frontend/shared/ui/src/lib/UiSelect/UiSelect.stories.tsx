import { cn } from "@shared/utils/cn"
import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { inputStyles } from "../UiTextInput"
import {
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
  UiSelectValue
} from "./UiSelect"

type Story = StoryObj<typeof UiSelect>
const meta: Meta<typeof UiSelect> = {
  title: "Components/Select",
  component: UiSelect
}

export default meta

export const Default: Story = {
  render: (args) => {
    return (
      <UiSelect {...args}>
        <UiSelectTrigger className={cn(inputStyles(), "w-64")}>
          <UiSelectValue placeholder="Theme" />
        </UiSelectTrigger>
        <UiSelectContent>
          <UiSelectItem value="light">Light</UiSelectItem>
          <UiSelectItem value="dark">Dark</UiSelectItem>
          <UiSelectItem value="system">System</UiSelectItem>
        </UiSelectContent>
      </UiSelect>
    )
  }
}
