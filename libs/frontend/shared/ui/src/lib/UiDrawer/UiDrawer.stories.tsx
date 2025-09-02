import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiButton } from "../UiButton"
import {
  UiDrawer,
  UiDrawerClose,
  UiDrawerContent,
  UiDrawerDescription,
  UiDrawerFooter,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerTrigger
} from "./UiDrawer"

const meta: Meta<typeof UiDrawer> = {
  title: "Components/Drawer",
  component: UiDrawer
} satisfies Meta<typeof UiDrawer>

export default meta

type Story = StoryObj<typeof UiDrawer>

export const Default: Story = {
  render: () => {
    return (
      <UiDrawer>
        <UiDrawerTrigger>Open</UiDrawerTrigger>
        <UiDrawerContent>
          <UiDrawerHeader>
            <UiDrawerTitle>Are you absolutely sure?</UiDrawerTitle>
            <UiDrawerDescription>
              This action cannot be undone.
            </UiDrawerDescription>
          </UiDrawerHeader>
          <UiDrawerFooter>
            <UiDrawerClose>
              <UiButton>Cancel</UiButton>
            </UiDrawerClose>
          </UiDrawerFooter>
        </UiDrawerContent>
      </UiDrawer>
    )
  }
}
