import type { Meta, StoryObj } from "@storybook/react"
import { Bold, Italic, Underline } from "lucide-react-native"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from "./ToggleGroup"

export function Example() {
  const [value, setValue] = React.useState<string[]>([])

  return (
    <View className="flex-1 items-center justify-center gap-12 p-6">
      <ToggleGroup value={value} onValueChange={setValue} type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <ToggleGroupIcon icon={Bold} size={18} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ToggleGroupIcon icon={Italic} size={18} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <ToggleGroupIcon icon={Underline} size={18} />
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/ToggleGroup",
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
