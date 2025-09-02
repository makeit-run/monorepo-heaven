import { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { UiButton } from "./UiButton"

const meta: Meta<typeof UiButton> = {
  title: "Components/Button",
  component: UiButton
}

export default meta

type Story = StoryObj<typeof UiButton>

const colors = ["primary", "secondary", "error"] as const
const variants = [
  "contained",
  "outlined",
  "text",
  "ghost",
  "rounded",
  "error"
] as const

const ButtonStories = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      {variants.map((variant) => (
        <div className={"flex flex-row items-start gap-4"}>
          {colors.map((color) => (
            <>
              <UiButton variant={variant} color={color}>
                {color} {variant}
              </UiButton>
              <UiButton variant={variant} color={color} disabled>
                {color} {variant} disabled
              </UiButton>
            </>
          ))}
        </div>
      ))}
    </div>
  )
}

export const Default: Story = {
  parameters: {
    pseudo: {
      hover: false,
      focus: false
    }
  },
  render: ButtonStories
}

export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: true,
      focus: false
    }
  },
  render: ButtonStories
}

export const Focus: Story = {
  parameters: {
    pseudo: {
      focus: true,
      hover: false
    }
  },
  render: ButtonStories
}
