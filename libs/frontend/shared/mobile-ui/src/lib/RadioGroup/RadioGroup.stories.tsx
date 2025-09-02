import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Text } from "../Text"
import { RadioGroup, RadioGroupItem } from "./RadioGroup"

export function Example() {
  const [value, setValue] = React.useState("Comfortable")

  function onLabelPress(label: string) {
    return () => {
      setValue(label)
    }
  }
  return (
    <View className="flex-1 items-center justify-center p-6">
      <RadioGroup value={value} onValueChange={setValue} className="gap-3">
        <RadioGroupItemWithLabel
          value="Default"
          onLabelPress={onLabelPress("Default")}
        />
        <RadioGroupItemWithLabel
          value="Comfortable"
          onLabelPress={onLabelPress("Comfortable")}
        />
        <RadioGroupItemWithLabel
          value="Compact"
          onLabelPress={onLabelPress("Compact")}
        />
        <RadioGroupItemWithLabel
          value="Disabled"
          disabled
          onLabelPress={onLabelPress("Disabled")}
        />
      </RadioGroup>
    </View>
  )
}

function RadioGroupItemWithLabel({
  value,
  disabled,
  onLabelPress
}: {
  value: string
  disabled?: boolean
  onLabelPress: () => void
}) {
  return (
    <View className={"flex-row items-center gap-2"}>
      <RadioGroupItem
        disabled={disabled}
        aria-labelledby={`label-for-${value}`}
        value={value}
      />
      <Text nativeID={`label-for-${value}`} onPress={onLabelPress}>
        {value}
      </Text>
    </View>
  )
}
const meta: Meta = {
  component: Example,
  title: "Components/RadioGroup",
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
