import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiBadge } from "./UiBadge"

const meta: Meta<typeof UiBadge> = {
  title: "Components/Badge",
  component: UiBadge
} satisfies Meta<typeof UiBadge>

export default meta

type Story = StoryObj<typeof UiBadge>

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex items-center gap-5"}>
        <UiBadge>Badge</UiBadge>
        <UiBadge variant={"outline"}>Badge</UiBadge>
      </div>
    )
  }
}
