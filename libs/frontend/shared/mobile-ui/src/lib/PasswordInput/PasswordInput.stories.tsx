import type { Meta } from "@storybook/react"
import React from "react"
import { Text, View } from "react-native"

import { PasswordInput, type TextInputProps } from "./PasswordInput"

const variants = ["default", "error", "disabled"] as const

const meta: Meta<TextInputProps> = {
  title: "Components/PasswordInput",
  component: PasswordInput
}

export default meta

export const Variants = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <PasswordInput variant={variant} editable={variant !== "disabled"} />
        </View>
      ))}
    </View>
  )
}
