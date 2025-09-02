import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiCard,
  UiCardContent,
  UiCardDescription,
  UiCardFooter,
  UiCardHeader,
  UiCardTitle
} from "./UiCard"

const meta: Meta<typeof UiCard> = {
  title: "Components/Card",
  component: UiCard
} satisfies Meta<typeof UiCard>

export default meta

type Story = StoryObj<typeof UiCard>

export const Default: Story = {
  render: () => {
    return (
      <UiCard>
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription>Card Description</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p>Card Content</p>
        </UiCardContent>
        <UiCardFooter>
          <p>Card Footer</p>
        </UiCardFooter>
      </UiCard>
    )
  }
}

export const Primary: Story = {
  render: () => {
    return (
      <UiCard variant={"background"}>
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription>Card Description</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p>Card Content</p>
        </UiCardContent>
        <UiCardFooter>
          <p>Card Footer</p>
        </UiCardFooter>
      </UiCard>
    )
  }
}
