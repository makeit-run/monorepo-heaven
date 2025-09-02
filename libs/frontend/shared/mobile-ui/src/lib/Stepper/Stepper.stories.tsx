// NumericStepper.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Text } from "../Text"
import { Stepper } from "./Stepper"

export function Example() {
  const [count, setCount] = React.useState(2)
  const [count2, setCount2] = React.useState(2)

  return (
    <View className={"gap-4"}>
      <View>
        <Text className="mb-2 text-base font-medium">Default Stepper</Text>
        <Stepper
          value={count}
          onValueChange={setCount}
          minValue={0}
          maxValue={10}
        />
      </View>
      <View>
        <Text className="mb-2 text-base font-medium">Disabled Stepper</Text>
        <Stepper
          value={count2}
          onValueChange={setCount2}
          minValue={0}
          maxValue={10}
          disabled
        />
      </View>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/NumericStepper",
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
