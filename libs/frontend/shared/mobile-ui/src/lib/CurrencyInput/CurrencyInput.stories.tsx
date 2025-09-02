import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"

import { CurrencyInput } from "./CurrencyInput"

export const Example = () => {
  return (
    <View className="p-4">
      <CurrencyInput />
    </View>
  )
}
const meta: Meta = {
  component: CurrencyInput,
  title: "Components/CurrencyInput"
}
export default meta

type Story = StoryObj
