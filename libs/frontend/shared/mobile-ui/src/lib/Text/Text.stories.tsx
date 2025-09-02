import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Text as NativeText, View } from "react-native"

import { textVariants } from "./config"
import { Text } from "./Text"

function Example() {
  const variants: any[] = textVariants?.variants?.variant
    ? Object.entries(textVariants.variants.variant)
    : []
  const base = textVariants.base

  return (
    <View className={"flex flex-col gap-2"}>
      <View className={"flex flex-col gap-2"}>
        <Text>Variants</Text>
        {variants?.map(([key, value]) => (
          <View className={"rounded-md border border-gray-300 p-1"}>
            <Text variant={key}>{key}</Text>
            <NativeText
              className={"bg-gray-100 p-1 text-sm font-medium italic"}
            >
              Classnames: {textVariants({ variant: key })}
            </NativeText>
          </View>
        ))}
      </View>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Text"
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  args: {}
}
