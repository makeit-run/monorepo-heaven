import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiHoverCard,
  UiHoverCardContent,
  UiHoverCardTrigger
} from "./UiHoverCard"

const meta: Meta<typeof UiHoverCard> = {
  title: "Components/HoverCard",
  component: UiHoverCard
} satisfies Meta<typeof UiHoverCard>

export default meta

type Story = StoryObj<typeof UiHoverCard>

export const Default: Story = {
  render: () => {
    return (
      <UiHoverCard>
        <UiHoverCardTrigger>Hover</UiHoverCardTrigger>
        <UiHoverCardContent>
          The React Framework – created and maintained by @vercel.
        </UiHoverCardContent>
      </UiHoverCard>
    )
  }
}
