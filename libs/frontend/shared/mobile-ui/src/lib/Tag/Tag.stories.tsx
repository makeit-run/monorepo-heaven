import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { Text } from "../Text"
import { Tag, tagVariants } from "./Tag"

function Example() {
  const variants: any[] = tagVariants?.variants?.variant
    ? Object.keys(tagVariants.variants.variant)
    : []

  const sizes: any[] = tagVariants?.variants?.size
    ? Object.keys(tagVariants.variants.size)
    : []

  return (
    <View className={"flex flex-col gap-2"}>
      <View className={"flex flex-col gap-2"}>
        <Text>Variants</Text>
        {variants?.map((variant) => (
          <Tag className={"uppercase"} variant={variant}>
            {variant}
          </Tag>
        ))}
      </View>

      <View className={"flex flex-col gap-2"}>
        <Text>Sizes</Text>
        {sizes?.map((size) => (
          <Tag size={size}>
            <Text className={""}>{size}</Text>
          </Tag>
        ))}
      </View>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Tag",
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
      </PaperProvider>
    )
  ]
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  args: {}
}
