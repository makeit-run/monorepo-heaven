import type { Meta } from "@storybook/react"
import React from "react"
import { Text, View } from "react-native"

import { TextInput, type TextInputProps } from "./TextInput"

const variants = ["default", "error", "success", "disabled"] as const

const sizes = ["default", "sm", "md"] as const

const meta: Meta<TextInputProps> = {
  title: "Components/TextInput",
  component: TextInput
}

export default meta

export const AllVariantsAndSizes = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <View style={{ gap: 12 }}>
            {sizes.map((size) => (
              <TextInput
                key={`${variant}-${size}`}
                variant={variant as any}
                size={size}
                placeholder={`${variant} - ${size}`}
                label={`${variant} - ${size}`}
                editable={variant !== "disabled"}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

export const WithMultiline = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextInput
        label="Multiline Input"
        placeholder="Enter multiple lines of text"
        multiline
      />
      <TextInput
        label="Multiline Input with Error"
        placeholder="Enter multiple lines of text"
        multiline
        error="This field is required"
      />
    </View>
  )
}

export const WithTVOptimization = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextInput
        label="TV Optimized Input"
        placeholder="Focus to see TV optimization"
        tv
      />
      <TextInput
        label="TV Optimized Multiline"
        placeholder="Focus to see TV optimization"
        tv
        multiline
      />
    </View>
  )
}

export const WithHelperTextAndError = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextInput
        label="Username"
        placeholder="Enter your username"
        helperText="Your unique identifier"
      />
      <TextInput
        label="Email"
        placeholder="Enter your email"
        error="Invalid email format"
      />
    </View>
  )
}
