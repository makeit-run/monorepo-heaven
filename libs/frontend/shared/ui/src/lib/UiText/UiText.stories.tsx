import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiText } from "./UiText"

type Story = StoryObj<typeof UiText>
const meta: Meta<typeof UiText> = {
  title: "Components/Text",
  component: UiText
}

export default meta

const variants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "body1",
  "body2",
  "body3",
  "body4",
  "body1-medium",
  "body2-medium",
  "body3-medium",
  "body4-medium"
] as const

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex gap-20"}>
        <div className={"flex flex-col gap-3"}>
          {variants?.map((text) => <UiText variant={text}>{text}</UiText>)}
        </div>
      </div>
    )
  }
}
