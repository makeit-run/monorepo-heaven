import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Text } from "../Text"
import { Switch } from "./Switch"

export function Example() {
  const [checked, setChecked] = React.useState(false)

  return (
    <View>
      <View className="flex-1 items-center justify-center gap-12 p-6">
        <View className="flex-row items-center gap-2">
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            nativeID="airplane-mode"
          />
          <Text
            nativeID="airplane-mode"
            onPress={() => {
              setChecked((prev) => !prev)
            }}
          >
            Airplane Mode
          </Text>
        </View>
      </View>
      <View className="flex-1 items-center justify-center gap-12 p-6">
        <View className="flex-row items-center gap-2">
          <Switch
            disabled
            checked={checked}
            onCheckedChange={setChecked}
            nativeID="airplane-mode"
          />
          <Text
            nativeID="airplane-mode"
            onPress={() => {
              setChecked((prev) => !prev)
            }}
          >
            Disabled Mode
          </Text>
        </View>
      </View>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Switch",
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
