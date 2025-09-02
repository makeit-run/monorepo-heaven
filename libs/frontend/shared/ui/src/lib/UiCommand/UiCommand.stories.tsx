import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiCommand,
  UiCommandEmpty,
  UiCommandGroup,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
  UiCommandSeparator
} from "./UiCommand"

const meta: Meta<typeof UiCommand> = {
  title: "Components/Command",
  component: UiCommand
} satisfies Meta<typeof UiCommand>

export default meta

type Story = StoryObj<typeof UiCommand>

export const Default: Story = {
  render: () => {
    return (
      <UiCommand className={"shadow-input border border-black/30"}>
        <UiCommandInput placeholder="Type a command or search..." />
        <UiCommandList>
          <UiCommandEmpty>No results found.</UiCommandEmpty>
          <UiCommandGroup heading="Suggestions">
            <UiCommandItem>Calendar</UiCommandItem>
            <UiCommandItem>Search Emoji</UiCommandItem>
            <UiCommandItem>Calculator</UiCommandItem>
          </UiCommandGroup>
          <UiCommandSeparator />
          <UiCommandGroup heading="Settings">
            <UiCommandItem>Profile</UiCommandItem>
            <UiCommandItem>Billing</UiCommandItem>
            <UiCommandItem>Settings</UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </UiCommand>
    )
  }
}
