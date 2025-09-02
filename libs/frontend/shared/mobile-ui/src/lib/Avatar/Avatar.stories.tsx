import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { PaperProvider } from "react-native-paper"

import { PortalHost } from "../@Primitives/components/Portal"
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar/Avatar"
import { Text } from "../Text"

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png"

export function Example() {
  return (
    <View className={"gap-2"}>
      <View className={"size-20 bg-black"} />
      <Avatar alt="Zach Nugent's Avatar">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>ZN</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  )
}

const meta: Meta = {
  component: Example,
  title: "Components/Avatar",
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

export const Primary: Story = {
  args: {}
}
