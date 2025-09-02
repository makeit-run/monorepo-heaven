import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { WeeklyTimePicker } from "./WeeklyTimePicker"

export const Example = WeeklyTimePicker

const meta: Meta = {
  component: WeeklyTimePicker,
  title: "Components/WeeklyTimePicker",
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
        <PortalHost />
      </PaperProvider>
    )
  ]
}
export default meta

type Story = StoryObj
