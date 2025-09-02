import type { Meta } from "@storybook/react"
import { BaggageClaim } from "lucide-react-native"
import React from "react"
import { Text, View } from "react-native"

import { Button, type ButtonProps } from "./Button"

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "tertiary"
] as const

const sizes = ["default", "sm", "lg", "icon"] as const

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button
}

export default meta

export const AllVariantsAndSizes = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <Button key={`${variant}-${size}`} variant={variant} size={size}>
                {size === "icon" ? "🔘" : `${variant} - ${size}`}
              </Button>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

export const AllVariantsAndSizesDisabled = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <Button
                disabled
                key={`${variant}-${size}`}
                variant={variant}
                size={size}
              >
                {size === "icon" ? "🔘" : `${variant} - ${size}`}
              </Button>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}
