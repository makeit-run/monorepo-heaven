import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"

import { Loader } from "./Loader"

export function Example() {
  return (
    <View className={"border border-red-500 p-4"}>
      <Loader />
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Loader"
}
export default meta

type Story = StoryObj
