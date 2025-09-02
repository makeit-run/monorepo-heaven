import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { PaperProvider } from "react-native-paper"

import { Skeleton } from "@frontend/shared/mobile-ui/Skeleton/Skeleton"

export function Example() {
  return <Skeleton />
}

const meta: Meta = {
  component: Skeleton,
  title: "Components/Skeleton",
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
      </PaperProvider>
    )
  ]
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  args: {}
}
