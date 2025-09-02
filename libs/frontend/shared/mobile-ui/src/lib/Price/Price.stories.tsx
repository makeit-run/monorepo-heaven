import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Price } from "./Price"

export function Example() {
  return (
    <View>
      {Array.from({ length: 10 }).map((_, i) => (
        <Price key={i} value={i * Math.random() * 1000} />
      ))}
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Price",
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
