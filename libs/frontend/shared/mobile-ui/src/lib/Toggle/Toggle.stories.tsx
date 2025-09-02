import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react-native"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Toggle, ToggleIcon } from "./Toggle"

export function Example() {
  const [pressed, setPressed] = React.useState(false)
  return (
    <View className="flex-1 items-center justify-center gap-12 p-6">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
      >
        <ToggleIcon icon={Bold} size={18} />
      </Toggle>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Toggle",
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
