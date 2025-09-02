import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiSheet,
  UiSheetContent,
  UiSheetDescription,
  UiSheetHeader,
  UiSheetTitle,
  UiSheetTrigger
} from "./UiSheet"

const meta: Meta<typeof UiSheet> = {
  title: "components/Sheet",
  component: UiSheet
} satisfies Meta<typeof UiSheet>

export default meta

type Story = StoryObj<typeof UiSheet>

export const Default: Story = {
  render: () => {
    return (
      <UiSheet>
        <UiSheetTrigger>Open</UiSheetTrigger>
        <UiSheetContent>
          <UiSheetHeader>
            <UiSheetTitle>Are you absolutely sure?</UiSheetTitle>
            <UiSheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </UiSheetDescription>
          </UiSheetHeader>
        </UiSheetContent>
      </UiSheet>
    )
  }
}
