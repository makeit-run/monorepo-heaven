import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiLink } from "./UiLink"

const meta: Meta<typeof UiLink> = {
  title: "Components/Link",
  component: ({ children }) => (
    <div className={"bg-primary"}>
      <UiLink href={"https://google.com"}>{children}</UiLink>
    </div>
  ),
  args: { children: "Test" }
}

export default meta

type Story = StoryObj<typeof UiLink>

export const Default: Story = {
  args: {}
}
