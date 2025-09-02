import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Platform } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { PortalHost } from "../@Primitives/components/Portal"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./Select"

export function Example() {
  const insets = useSafeAreaInsets()
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({
      ios: insets.bottom,
      android: insets.bottom + 24
    }),
    left: 12,
    right: 12
  }

  return (
    <Select defaultValue={{ value: "apple", label: "Apple" }}>
      <SelectTrigger className="w-[250px]">
        <SelectValue
          className="text-foreground native:text-lg text-sm"
          placeholder="Select a fruit"
        />
      </SelectTrigger>
      <SelectContent insets={contentInsets} className="w-[250px]">
        <SelectItem label="Apple" value="apple">
          Apple
        </SelectItem>
        <SelectItem label="Banana" value="banana">
          Banana
        </SelectItem>
        <SelectItem label="Blueberry" value="blueberry">
          Blueberry
        </SelectItem>
        <SelectItem label="Grapes" value="grapes">
          Grapes
        </SelectItem>
        <SelectItem label="Pineapple" value="pineapple">
          Pineapple
        </SelectItem>
        <SelectItem label="Apple 2" value="apple2">
          Apple 2
        </SelectItem>
        <SelectItem label="Banana 2" value="banana2">
          Banana 2
        </SelectItem>
        <SelectItem label="Blueberry 2" value="blueberry2">
          Blueberry 2
        </SelectItem>
        <SelectItem label="Grapes 2" value="grapes2">
          Grapes 2
        </SelectItem>
        <SelectItem label="Pineapple 2" value="pineapple2">
          Pineapple 2
        </SelectItem>
        <SelectItem label="Apple 3" value="apple3">
          Apple 3
        </SelectItem>
        <SelectItem label="Banana 3" value="banana3">
          Banana 3
        </SelectItem>
        <SelectItem label="Blueberry 3" value="blueberry3">
          Blueberry 3
        </SelectItem>
        <SelectItem label="Grapes 3" value="grapes3">
          Grapes 3
        </SelectItem>
        <SelectItem label="Pineapple 3" value="pineapple3">
          Pineapple 3
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Select",
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <Story />
          <PortalHost />
        </PaperProvider>
      </GestureHandlerRootView>
    )
  ]
}
export default meta

type Story = StoryObj
