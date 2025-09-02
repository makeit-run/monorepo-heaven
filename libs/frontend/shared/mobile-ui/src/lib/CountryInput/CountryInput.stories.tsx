import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"

import { CountryInput } from "./CountryInput"

export const Example = () => {
  return (
    <View className="p-4">
      <CountryInput />
    </View>
  )
}
const meta: Meta = {
  component: CountryInput,
  title: "Components/CountryInput"
}
export default meta

type Story = StoryObj
