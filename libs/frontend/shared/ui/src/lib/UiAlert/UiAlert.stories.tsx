import { Meta, StoryObj } from "@storybook/react"
import { Terminal } from "lucide-react"
import React from "react"

import { UiAlert, UiAlertDescription, UiAlertTitle } from "./UiAlert"

const meta: Meta<typeof UiAlert> = {
  title: "Components/Alert",
  component: UiAlert
} satisfies Meta<typeof UiAlert>

export default meta

type Story = StoryObj<typeof UiAlert>

export const Default: Story = {
  render: () => {
    return (
      <UiAlert>
        <Terminal className="size-4" />
        <UiAlertTitle>Heads up!</UiAlertTitle>
        <UiAlertDescription>
          You can add components and dependencies to your app using the cli.
        </UiAlertDescription>
      </UiAlert>
    )
  }
}
