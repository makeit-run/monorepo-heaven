import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiTabs, UiTabsContent, UiTabsList, UiTabsTrigger } from "./UiTabs"

const meta: Meta<typeof UiTabs> = {
  title: "components/Tabs",
  component: UiTabs
} satisfies Meta<typeof UiTabs>

export default meta

type Story = StoryObj<typeof UiTabs>

export const Default: Story = {
  render: () => {
    return (
      <UiTabs defaultValue="account" className="w-[400px]">
        <UiTabsList>
          <UiTabsTrigger value="account">Account</UiTabsTrigger>
          <UiTabsTrigger value="password">Password</UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="account">
          Make changes to your account here.
        </UiTabsContent>
        <UiTabsContent value="password">
          Change your password here.
        </UiTabsContent>
      </UiTabs>
    )
  }
}
